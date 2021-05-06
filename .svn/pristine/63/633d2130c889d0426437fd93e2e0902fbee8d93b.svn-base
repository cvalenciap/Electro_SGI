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
    public class IndicadorMetaAnualService : GenericService, IIndicadorMetaAnualService
    {
        #region Propiedades
        /// <summary>
        /// Servicio de Mantenimiento Logic
        /// </summary>
        public IIndicadorMetaAnualLogicRepository IndicadorMetaAnualLogicRepository { get; set; }
        /// <summary>
        /// Servicio de Observacion Planeada Entity
        /// </summary>
        public IIndicadorMetaAnualEntityRepository indicadorMetaAnualEntityRepository { get; set; }

        #endregion

        #region Métodos
        /// <summary>
        /// Permite obtener el listado de Inspecciones
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public ProcessResult<List<IndicadorMetaAnualResponse>> BuscarIndicadorMetaAnual(IndicadorMetaAnualRequest filtro)
        {
            ProcessResult<List<IndicadorMetaAnualResponse>> resultado = new ProcessResult<List<IndicadorMetaAnualResponse>>();

            try
            {
                List<IndicadorMetaAnualLogic> listado = IndicadorMetaAnualLogicRepository.BuscarIndicadorMetaAnual(
                    filtro.CodigoIndicadorMetaAnual,
                    filtro.CodigoIndicador,
                    filtro.Anio,                    
                    Guid.Parse(DatosConstantes.Empresa.CodigoElectroPeru),
                    Guid.Parse(DatosConstantes.Sistema.CodigoSGI),
                    filtro.CodigoIdioma,
                    DatosConstantes.EstadoRegistro.Activo,
                    filtro.NumeroPagina,
                    filtro.RegistrosPagina);

                resultado.Result = new List<IndicadorMetaAnualResponse>();

                Mapper.Map<List<IndicadorMetaAnualLogic>, List<IndicadorMetaAnualResponse>>(listado, resultado.Result);
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<IndicadorMetaAnualService>(e.Message);
            }

            return resultado;
        }

        public ProcessResult<IndicadorMetaAnualResponse> RegistrarIndicadorMetaAnual(IndicadorMetaAnualRequest data)
        {
            ProcessResult<IndicadorMetaAnualResponse> resultado = new ProcessResult<IndicadorMetaAnualResponse>();
            resultado.Result = new IndicadorMetaAnualResponse();
            try
            {
                using (TransactionScope ts = new TransactionScope())
                {
                    IndicadorMetaAnualEntity indicadorMetaAnualSincronizar = indicadorMetaAnualEntityRepository.GetById(data.CodigoIndicadorMetaAnual);
                    IndicadorMetaAnualEntity indicadorMetaAnualGeneral = Mapper.Map<IndicadorMetaAnualRequest, IndicadorMetaAnualEntity>(data);                   
                    
                    var indicadorMetaAnual = BuscarIndicadorMetaAnual(data);

                    if (indicadorMetaAnual.Result.Count > 0)
                    {
                        for (int i = 0; i < indicadorMetaAnual.Result.Count; i++)
                        {
                            if (indicadorMetaAnual.Result[0].EstadoRegistro == DatosConstantes.EstadoRegistro.Activo)
                            {
                                resultado.IsSuccess = false;
                                resultado.Exception = new ApplicationLayerException<IndicadorMetaAnualService>(MensajesSistemaResource.ViolacionRegistro);
                                break;
                            }
                            else
                            {
                                if (indicadorMetaAnualSincronizar != null)
                                {
                                    Mapper.Map<IndicadorMetaAnualEntity, IndicadorMetaAnualEntity>(indicadorMetaAnualGeneral, indicadorMetaAnualSincronizar);
                                    indicadorMetaAnualEntityRepository.Editar(indicadorMetaAnualSincronizar);
                                    resultado.Result.CodigoIndicadorMetaAnual = data.CodigoIndicadorMetaAnual;
                                    resultado.Result.CodigoIndicador = data.CodigoIndicador;
                                }
                                else
                                {
                                    indicadorMetaAnualEntityRepository.Insertar(indicadorMetaAnualGeneral);
                                    bool registroExitoso = resultado.IsSuccess;
                                    if (!registroExitoso)
                                    {
                                        resultado.IsSuccess = false;
                                        resultado.Exception = new ApplicationLayerException<IndicadorMetaAnualService>(MensajesSistemaResource.EtiquetaError);
                                    }
                                    resultado.Result.CodigoIndicadorMetaAnual = indicadorMetaAnualGeneral.CodigoIndicadorMetaAnual;
                                    resultado.Result.CodigoIndicador = indicadorMetaAnualGeneral.CodigoIndicador;
                                }
                            }
                        }
                    }
                    else
                    {
                        if (indicadorMetaAnualSincronizar != null)
                        {
                            Mapper.Map<IndicadorMetaAnualEntity, IndicadorMetaAnualEntity>(indicadorMetaAnualGeneral, indicadorMetaAnualSincronizar);
                            indicadorMetaAnualEntityRepository.Editar(indicadorMetaAnualSincronizar);
                            resultado.Result.CodigoIndicadorMetaAnual = data.CodigoIndicadorMetaAnual;
                            resultado.Result.CodigoIndicador = data.CodigoIndicador;
                        }
                        else
                        {
                            indicadorMetaAnualEntityRepository.Insertar(indicadorMetaAnualGeneral);
                            bool registroExitoso = resultado.IsSuccess;
                            if (!registroExitoso)
                            {
                                resultado.IsSuccess = false;
                                resultado.Exception = new ApplicationLayerException<IndicadorMetaAnualService>(MensajesSistemaResource.EtiquetaError);
                            }
                            resultado.Result.CodigoIndicadorMetaAnual = indicadorMetaAnualGeneral.CodigoIndicadorMetaAnual;
                            resultado.Result.CodigoIndicador = indicadorMetaAnualGeneral.CodigoIndicador;
                        }
                    }  
                    indicadorMetaAnualEntityRepository.GuardarCambios();
                    ts.Complete();
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<IndicadorMetaAnualService>(ex.Message);
            }
            return resultado;
        }

        public ProcessResult<object> EliminarIndicadorMetaAnual(IndicadorMetaAnualRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = string.Empty;
            try
            {
                IndicadorMetaAnualEntity oIndicadorMetaAnualEntity = indicadorMetaAnualEntityRepository.GetById(data.CodigoIndicadorMetaAnual);

                if (oIndicadorMetaAnualEntity != null)
                {
                    indicadorMetaAnualEntityRepository.Eliminar(oIndicadorMetaAnualEntity.CodigoIndicadorMetaAnual);
                    resultado.IsSuccess = true;
                    indicadorMetaAnualEntityRepository.GuardarCambios();
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
