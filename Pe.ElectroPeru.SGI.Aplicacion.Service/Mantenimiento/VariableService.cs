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
    public class VariableService : GenericService, IVariableService
    {
        #region Propiedades
        /// <summary>
        /// Servicio de Mantenimiento Logic
        /// </summary>
        public IVariableLogicRepository variableLogicRepository { get; set; }
        /// <summary>
        /// Servicio de Observacion Planeada Entity
        /// </summary>
        public IVariableEntityRepository variableEntityRepository { get; set; }       

        #endregion

        #region Métodos  
        /// <summary>
        /// Permite obtener el listado de Inspecciones
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public ProcessResult<List<BandejaVariableResponse>> BuscarVariable(BandejaVariableRequest filtro)
        {
            ProcessResult<List<BandejaVariableResponse>> resultado = new ProcessResult<List<BandejaVariableResponse>>();

            try
            {
                List<VariableDetalleLogic> listado = variableLogicRepository.BuscarVariable(
                    filtro.CodigoVariable,
                    filtro.NombreVariable,
                    filtro.NombreSiglaVariable,
                    filtro.FechaInicioVigencia,
                    filtro.FechaFinVigencia,
                    filtro.CodigoArea,
                    filtro.CodigoPeriodicidad,
                    Guid.Parse(DatosConstantes.Empresa.CodigoElectroPeru),
                    Guid.Parse(DatosConstantes.Sistema.CodigoSGI),
                    filtro.CodigoIdioma,
                    filtro.EstadoRegistro,//DatosConstantes.EstadoRegistro.Activo,
                    filtro.NumeroPagina,
                    filtro.RegistrosPagina);

                resultado.Result = new List<BandejaVariableResponse>();

                Mapper.Map<List<VariableDetalleLogic>, List<BandejaVariableResponse>>(listado, resultado.Result);
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<VariableService>(e.Message);
            }

            return resultado;
        }
        
        public ProcessResult<VariableResponse> RegistrarVariable(VariableRequest data)
        {
            ProcessResult<VariableResponse> resultado = new ProcessResult<VariableResponse>();
            resultado.Result = new VariableResponse();
            try
            {
                using (TransactionScope ts = new TransactionScope())
                {
                    VariableEntity variableSincronizar = variableEntityRepository.GetById(data.CodigoVariable);
                    VariableEntity variableGeneral = Mapper.Map<VariableRequest, VariableEntity>(data);

                    if (variableSincronizar != null)
                    {
                        Mapper.Map<VariableEntity, VariableEntity>(variableGeneral, variableSincronizar);
                        variableEntityRepository.Editar(variableSincronizar);
                        resultado.Result.CodigoVariable = data.CodigoVariable;
                        resultado.Result.NombreVariable = data.NombreVariable;
                        resultado.Result.NombreSiglaVariable = data.NombreSiglaVariable;
                        resultado.Result.DescripcionVariable = data.DescripcionVariable;
                        resultado.Result.CodigoTipoVariable = data.CodigoTipoVariable;
                    }
                    else
                    {
                        variableEntityRepository.Insertar(variableGeneral);
                        bool registroExitoso = resultado.IsSuccess;
                        if (!registroExitoso)
                        {
                            resultado.IsSuccess = false;
                            resultado.Exception = new ApplicationLayerException<VariableService>(MensajesSistemaResource.EtiquetaError);
                        }
                        resultado.Result.CodigoVariable = variableGeneral.CodigoVariable;                        
                    }

                    variableEntityRepository.GuardarCambios();
                    ts.Complete();
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<VariableService>(ex.Message);
            }
            return resultado;
        }

        public ProcessResult<object> EliminarVariable(VariableRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = "-1";
            try
            {
                variableEntityRepository.Eliminar(data.CodigoVariable);
                resultado.Result = variableEntityRepository.GuardarCambios();
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<VariableService>(e.Message);
            }
            return resultado;
        }

        public ProcessResult<object> ReactivarVariable(VariableRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = "-1";
            try
            {
                variableEntityRepository.Reactivar(data.CodigoVariable);
                resultado.Result = variableEntityRepository.GuardarCambios();
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<VariableService>(e.Message);
            }
            return resultado;
        }

        /// <summary>
        /// Permite obtener una Observacion Planeada Entity
        /// </summary>
        /// <param name="CodigoExpediente"></param>
        /// <returns>Entidad Observacion Planeada Response</returns>
        public ProcessResult<VariableResponse> ObtenerVariable(VariableRequest data)
        {
            ProcessResult<VariableResponse> resultado = new ProcessResult<VariableResponse>();
            resultado.Result = new VariableResponse();
            try
            {
                if (data.CodigoVariable.HasValue)
                {
                    VariableEntity VariableEntity = variableEntityRepository.GetById(data.CodigoVariable);
                    if (VariableEntity != null)
                    {
                        resultado.Result = Mapper.Map<VariableEntity, VariableResponse>(VariableEntity);                        
                    }
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<VariableService>(ex.Message);
            }
            return resultado;
        }

        #endregion
    }
}
