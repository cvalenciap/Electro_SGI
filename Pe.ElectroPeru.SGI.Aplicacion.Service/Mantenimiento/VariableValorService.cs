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
    public class VariableValorService : GenericService, IVariableValorService
    {
        #region Propiedades
        /// <summary>
        /// Servicio de Mantenimiento Logic
        /// </summary>
        public IVariableValorLogicRepository variableValorLogicRepository { get; set; }
        /// <summary>
        /// Servicio de Observacion Planeada Entity
        /// </summary>
        public IVariableValorEntityRepository variableValorEntityRepository { get; set; }

        #endregion

        #region Métodos
        /// <summary>
        /// Permite obtener el listado de Inspecciones
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Variable con el resultado de la operación</returns>
        public ProcessResult<List<VariableValorResponse>> BuscarVariableValor(VariableValorRequest filtro)
        {
            ProcessResult<List<VariableValorResponse>> resultado = new ProcessResult<List<VariableValorResponse>>();

            try
            {
                List<VariableValorLogic> listado = variableValorLogicRepository.BuscarVariableValor(
                    filtro.CodigoVariableValor,
                    filtro.CodigoVariable,
                    Guid.Parse(DatosConstantes.Empresa.CodigoElectroPeru),
                    Guid.Parse(DatosConstantes.Sistema.CodigoSGI),
                    filtro.CodigoIdioma,
                    DatosConstantes.EstadoRegistro.Activo,
                    filtro.NumeroPagina,
                    filtro.RegistrosPagina);

                resultado.Result = new List<VariableValorResponse>();

                Mapper.Map<List<VariableValorLogic>, List<VariableValorResponse>>(listado, resultado.Result);
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<VariableValorService>(e.Message);
            }

            return resultado;
        }

        public ProcessResult<VariableValorResponse> RegistrarVariableValor(VariableValorRequest data)
        {
            ProcessResult<VariableValorResponse> resultado = new ProcessResult<VariableValorResponse>();
            resultado.Result = new VariableValorResponse();
            try
            {
                using (TransactionScope ts = new TransactionScope())
                {
                    VariableValorEntity VariableValorSincronizar = variableValorEntityRepository.GetById(data.CodigoVariableValor);
                    VariableValorEntity VariableValorGeneral = Mapper.Map<VariableValorRequest, VariableValorEntity>(data);

                    if (VariableValorSincronizar != null)
                    {
                        Mapper.Map<VariableValorEntity, VariableValorEntity>(VariableValorGeneral, VariableValorSincronizar);
                        variableValorEntityRepository.Editar(VariableValorSincronizar);
                        resultado.Result.CodigoVariableValor = data.CodigoVariableValor;
                        resultado.Result.CodigoVariable = data.CodigoVariable;                     
                    }
                    else
                    {
                        variableValorEntityRepository.Insertar(VariableValorGeneral);
                        bool registroExitoso = resultado.IsSuccess;
                        if (!registroExitoso)
                        {
                            resultado.IsSuccess = false;
                            resultado.Exception = new ApplicationLayerException<VariableValorService>(MensajesSistemaResource.EtiquetaError);
                        }
                        resultado.Result.CodigoVariableValor = VariableValorGeneral.CodigoVariableValor;
                        resultado.Result.CodigoVariable = VariableValorGeneral.CodigoVariable;
                    }

                    variableValorEntityRepository.GuardarCambios();
                    ts.Complete();
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<VariableValorService>(ex.Message);
            }
            return resultado;
        }

        public ProcessResult<object> EliminarVariableValor(VariableValorRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = string.Empty;
            try
            {
                VariableValorEntity oVariableValorEntity = variableValorEntityRepository.GetById(data.CodigoVariableValor);

                if (oVariableValorEntity != null)
                {
                    variableValorEntityRepository.Eliminar(oVariableValorEntity.CodigoVariableValor);
                    resultado.IsSuccess = true;
                    variableValorEntityRepository.GuardarCambios();
                }
            }
            catch (Exception ex)
            {
                resultado.Exception = new ApplicationLayerException<AreaService>(ex.Message);
            }
            return resultado;
        }

        #endregion
    }
}
