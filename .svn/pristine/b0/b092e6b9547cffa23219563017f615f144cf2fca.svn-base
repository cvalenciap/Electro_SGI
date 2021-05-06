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
    public class IndicadorEvaluacionService : GenericService, IIndicadorEvaluacionService
    {
        #region Propiedades
        /// <summary>
        /// Servicio de Mantenimiento Logic
        /// </summary>
        public IIndicadorEvaluacionLogicRepository IndicadorEvaluacionLogicRepository { get; set; }
        /// <summary>
        /// Servicio de Observacion Planeada Entity
        /// </summary>
        public IIndicadorEvaluacionEntityRepository indicadorEvaluacionEntityRepository { get; set; }

        #endregion

        #region Métodos
        /// <summary>
        /// Permite obtener el listado de Inspecciones
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public ProcessResult<List<IndicadorEvaluacionResponse>> BuscarIndicadorEvaluacion(IndicadorEvaluacionRequest filtro)
        {
            ProcessResult<List<IndicadorEvaluacionResponse>> resultado = new ProcessResult<List<IndicadorEvaluacionResponse>>();

            try
            {
                List<IndicadorEvaluacionLogic> listado = IndicadorEvaluacionLogicRepository.BuscarIndicadorEvaluacion(
                    filtro.CodigoIndicadorEvaluacion,
                    filtro.CodigoIndicador,
                    filtro.Anio,
                    filtro.CodigoSubTipoPeriodicidad,
                    Guid.Parse(DatosConstantes.Empresa.CodigoElectroPeru),
                    Guid.Parse(DatosConstantes.Sistema.CodigoSGI),
                    filtro.CodigoIdioma,
                    DatosConstantes.EstadoRegistro.Activo,
                    filtro.NumeroPagina,
                    filtro.RegistrosPagina);

                resultado.Result = new List<IndicadorEvaluacionResponse>();

                Mapper.Map<List<IndicadorEvaluacionLogic>, List<IndicadorEvaluacionResponse>>(listado, resultado.Result);
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<IndicadorEvaluacionService>(e.Message);
            }

            return resultado;
        }

        public ProcessResult<IndicadorEvaluacionResponse> RegistrarIndicadorEvaluacion(IndicadorEvaluacionRequest data)
        {
            ProcessResult<IndicadorEvaluacionResponse> resultado = new ProcessResult<IndicadorEvaluacionResponse>();
            resultado.Result = new IndicadorEvaluacionResponse();
            try
            {
                using (TransactionScope ts = new TransactionScope())
                {
                    IndicadorEvaluacionEntity indicadorEvaluacionSincronizar = indicadorEvaluacionEntityRepository.GetById(data.CodigoIndicadorEvaluacion);
                    IndicadorEvaluacionEntity indicadorEvaluacionGeneral = Mapper.Map<IndicadorEvaluacionRequest, IndicadorEvaluacionEntity>(data);

                    var indicadorEvaluacion = BuscarIndicadorEvaluacion(data);

                    if (indicadorEvaluacion.Result.Count > 0)
                    {
                        for (int i = 0; i < indicadorEvaluacion.Result.Count; i++)
                        {
                            if (indicadorEvaluacion.Result[0].EstadoRegistro == DatosConstantes.EstadoRegistro.Activo)
                            {
                                resultado.IsSuccess = false;
                                resultado.Exception = new ApplicationLayerException<IndicadorMetaService>(MensajesSistemaResource.ViolacionRegistro);
                                break;
                            }
                            else
                            {
                                if (indicadorEvaluacionSincronizar != null)
                                {
                                    Mapper.Map<IndicadorEvaluacionEntity, IndicadorEvaluacionEntity>(indicadorEvaluacionGeneral, indicadorEvaluacionSincronizar);
                                    indicadorEvaluacionEntityRepository.Editar(indicadorEvaluacionSincronizar);
                                    resultado.Result.CodigoIndicadorEvaluacion = data.CodigoIndicadorEvaluacion;
                                    resultado.Result.CodigoIndicador = data.CodigoIndicador;
                                }
                                else
                                {
                                    indicadorEvaluacionEntityRepository.Insertar(indicadorEvaluacionGeneral);
                                    bool registroExitoso = resultado.IsSuccess;
                                    if (!registroExitoso)
                                    {
                                        resultado.IsSuccess = false;
                                        resultado.Exception = new ApplicationLayerException<IndicadorEvaluacionService>(MensajesSistemaResource.EtiquetaError);
                                    }
                                    resultado.Result.CodigoIndicadorEvaluacion = indicadorEvaluacionGeneral.CodigoIndicadorEvaluacion;
                                    resultado.Result.CodigoIndicador = indicadorEvaluacionGeneral.CodigoIndicador;
                                }
                            }
                        }
                    }
                    else
                    {
                        if (indicadorEvaluacionSincronizar != null)
                        {
                            Mapper.Map<IndicadorEvaluacionEntity, IndicadorEvaluacionEntity>(indicadorEvaluacionGeneral, indicadorEvaluacionSincronizar);
                            indicadorEvaluacionEntityRepository.Editar(indicadorEvaluacionSincronizar);
                            resultado.Result.CodigoIndicadorEvaluacion = data.CodigoIndicadorEvaluacion;
                            resultado.Result.CodigoIndicador = data.CodigoIndicador;
                        }
                        else
                        {
                            indicadorEvaluacionEntityRepository.Insertar(indicadorEvaluacionGeneral);
                            bool registroExitoso = resultado.IsSuccess;
                            if (!registroExitoso)
                            {
                                resultado.IsSuccess = false;
                                resultado.Exception = new ApplicationLayerException<IndicadorEvaluacionService>(MensajesSistemaResource.EtiquetaError);
                            }
                            resultado.Result.CodigoIndicadorEvaluacion = indicadorEvaluacionGeneral.CodigoIndicadorEvaluacion;
                            resultado.Result.CodigoIndicador = indicadorEvaluacionGeneral.CodigoIndicador;
                        }
                    }  
                    indicadorEvaluacionEntityRepository.GuardarCambios();
                    ts.Complete();
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<IndicadorEvaluacionService>(ex.Message);
            }
            return resultado;
        }

        public ProcessResult<object> EliminarIndicadorEvaluacion(IndicadorEvaluacionRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = string.Empty;
            try
            {
                IndicadorEvaluacionEntity oIndicadorEvaluacionEntity = indicadorEvaluacionEntityRepository.GetById(data.CodigoIndicadorEvaluacion);

                if (oIndicadorEvaluacionEntity != null)
                {
                    indicadorEvaluacionEntityRepository.Eliminar(oIndicadorEvaluacionEntity.CodigoIndicadorEvaluacion);
                    resultado.IsSuccess = true;
                    indicadorEvaluacionEntityRepository.GuardarCambios();
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
