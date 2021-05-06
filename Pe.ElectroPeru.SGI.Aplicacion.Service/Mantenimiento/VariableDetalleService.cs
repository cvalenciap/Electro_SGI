using AutoMapper;
using Pe.ElectroPeru.SGI.Aplicacion.Core.Base;
using Pe.ElectroPeru.SGI.Aplicacion.Core.Message;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.Service.Base;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento;
using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mantenimiento;
using Pe.ElectroPeru.SGI.Transversal.Core.Constante;
using Pe.ElectroPeru.SGI.Transversal.Core.Exception;
using System;
using System.Linq;
using System.Transactions;
using System.Collections.Generic;
using Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Mantenimiento;
using Pe.ElectroPeru.SGI.Infraestructura.Core.CommandContract.Mantenimiento;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Mantenimiento;

namespace Pe.ElectroPeru.SGI.Aplicacion.Service.Mantenimiento
{
    /// <summary>
    /// Servicio de Mantenimiento
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 28112017 <br />
    /// Modificación:                <br />
    /// </remarks>
    public class VariableDetalleService : GenericService, IVariableDetalleService
    {
        #region Propiedades
        /// <summary>
        /// Servicio de Mantenimiento Logic
        /// </summary>
        public IVariableDetalleLogicRepository variableDetalleLogicRepository { get; set; }
        /// <summary>
        /// Servicio de Observacion Planeada Entity
        /// </summary>
        public IVariableDetalleEntityRepository variableDetalleEntityRepository { get; set; }

        #endregion

        #region Métodos
        /// <summary>
        /// Permite obtener el listado de Inspecciones
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public ProcessResult<List<VariableDetalleResponse>> BuscarVariableDetalle(VariableDetalleRequest filtro)
        {
            ProcessResult<List<VariableDetalleResponse>> resultado = new ProcessResult<List<VariableDetalleResponse>>();

            try
            {
                List<VariableDetalleLogic> listado = variableDetalleLogicRepository.BuscarVariableDetalle(
                    filtro.CodigoDetalleVariable,
                    filtro.CodigoVariable,
                    Guid.Parse(DatosConstantes.Empresa.CodigoElectroPeru),
                    Guid.Parse(DatosConstantes.Sistema.CodigoSGI),
                    filtro.CodigoIdioma,
                    DatosConstantes.EstadoRegistro.Activo,
                    filtro.NumeroPagina,
                    filtro.RegistrosPagina);

                resultado.Result = new List<VariableDetalleResponse>();

                Mapper.Map<List<VariableDetalleLogic>, List<VariableDetalleResponse>>(listado, resultado.Result);
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<VariableDetalleService>(e.Message);
            }

            return resultado;
        }

        public ProcessResult<VariableDetalleResponse> RegistrarVariableDetalle(VariableDetalleRequest data)
        {
            ProcessResult<VariableDetalleResponse> resultado = new ProcessResult<VariableDetalleResponse>();
            resultado.Result = new VariableDetalleResponse();
            try
            {
                using (TransactionScope ts = new TransactionScope())
                {
                    VariableDetalleEntity variableDetalleSincronizar = variableDetalleEntityRepository.GetById(data.CodigoDetalleVariable);
                    VariableDetalleEntity variableDetalleGeneral = Mapper.Map<VariableDetalleRequest, VariableDetalleEntity>(data);

                    if (variableDetalleSincronizar != null)
                    {
                        Mapper.Map<VariableDetalleEntity, VariableDetalleEntity>(variableDetalleGeneral, variableDetalleSincronizar);
                        variableDetalleEntityRepository.Editar(variableDetalleSincronizar);
                        resultado.Result.CodigoDetalleVariable = data.CodigoDetalleVariable;
                        resultado.Result.CodigoVariable = data.CodigoVariable;
                        resultado.Result.FechaInicioVigencia = data.FechaInicioVigencia;
                        resultado.Result.FechaFinVigencia = data.FechaFinVigencia;
                        resultado.Result.CodigoArea = data.CodigoArea;
                        resultado.Result.CodigoResponsable = data.CodigoResponsable;
                        resultado.Result.CodigoPeriodicidad = data.CodigoPeriodicidad;
                    }
                    else
                    {
                        variableDetalleEntityRepository.Insertar(variableDetalleGeneral);
                        bool registroExitoso = resultado.IsSuccess;
                        if (!registroExitoso)
                        {
                            resultado.IsSuccess = false;
                            resultado.Exception = new ApplicationLayerException<VariableDetalleService>(MensajesSistemaResource.EtiquetaError);
                        }
                        resultado.Result.CodigoDetalleVariable = variableDetalleGeneral.CodigoDetalleVariable;
                        resultado.Result.CodigoVariable = variableDetalleGeneral.CodigoVariable;
                    }

                    variableDetalleEntityRepository.GuardarCambios();
                    ts.Complete();
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<VariableDetalleService>(ex.Message);
            }
            return resultado;
        }

        public ProcessResult<object> EliminarVariableDetalle(VariableDetalleRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = "-1";
            try
            {
                variableDetalleEntityRepository.Eliminar(data.CodigoDetalleVariable);
                resultado.Result = variableDetalleEntityRepository.GuardarCambios();
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<VariableDetalleService>(e.Message);
            }
            return resultado;
        }

        #endregion
    }
}
