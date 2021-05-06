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
    public class IndicadorMetaService : GenericService, IIndicadorMetaService
    {
        #region Propiedades
        /// <summary>
        /// Servicio de Mantenimiento Logic
        /// </summary>
        public IIndicadorMetaLogicRepository IndicadorMetaLogicRepository { get; set; }
        /// <summary>
        /// Servicio de Observacion Planeada Entity
        /// </summary>
        public IIndicadorMetaEntityRepository indicadorMetaEntityRepository { get; set; }

        #endregion

        #region Métodos
        /// <summary>
        /// Permite obtener el listado de Inspecciones
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public ProcessResult<List<IndicadorMetaResponse>> BuscarIndicadorMeta(IndicadorMetaRequest filtro)
        {
            ProcessResult<List<IndicadorMetaResponse>> resultado = new ProcessResult<List<IndicadorMetaResponse>>();

            try
            {
                List<IndicadorMetaLogic> listado = IndicadorMetaLogicRepository.BuscarIndicadorMeta(
                    filtro.CodigoIndicadorMeta,
                    filtro.CodigoIndicador,
                    filtro.Anio,
                    filtro.CodigoSubTipoPeriodicidad,
                    Guid.Parse(DatosConstantes.Empresa.CodigoElectroPeru),
                    Guid.Parse(DatosConstantes.Sistema.CodigoSGI),
                    filtro.CodigoIdioma,
                    DatosConstantes.EstadoRegistro.Activo,
                    filtro.NumeroPagina,
                    filtro.RegistrosPagina);

                resultado.Result = new List<IndicadorMetaResponse>();

                Mapper.Map<List<IndicadorMetaLogic>, List<IndicadorMetaResponse>>(listado, resultado.Result);
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<IndicadorMetaService>(e.Message);
            }

            return resultado;
        }

        public ProcessResult<IndicadorMetaResponse> RegistrarIndicadorMeta(IndicadorMetaRequest data)
        {
            ProcessResult<IndicadorMetaResponse> resultado = new ProcessResult<IndicadorMetaResponse>();
            resultado.Result = new IndicadorMetaResponse();
            try
            {
                using (TransactionScope ts = new TransactionScope())
                {
                    IndicadorMetaEntity indicadorMetaSincronizar = indicadorMetaEntityRepository.GetById(data.CodigoIndicadorMeta);
                    IndicadorMetaEntity indicadorMetaGeneral = Mapper.Map<IndicadorMetaRequest, IndicadorMetaEntity>(data);                   
                    
                    var indicadorMeta = BuscarIndicadorMeta(data);

                    if (indicadorMeta.Result.Count > 0)
                    {
                        for (int i = 0; i < indicadorMeta.Result.Count; i++)
                        {
                            if (indicadorMeta.Result[0].EstadoRegistro == DatosConstantes.EstadoRegistro.Activo)
                            {
                                resultado.IsSuccess = false;
                                resultado.Exception = new ApplicationLayerException<IndicadorMetaService>(MensajesSistemaResource.ViolacionRegistro);
                                break;
                            }
                            else
                            {
                                if (indicadorMetaSincronizar != null)
                                {
                                    Mapper.Map<IndicadorMetaEntity, IndicadorMetaEntity>(indicadorMetaGeneral, indicadorMetaSincronizar);
                                    indicadorMetaEntityRepository.Editar(indicadorMetaSincronizar);
                                    resultado.Result.CodigoIndicadorMeta = data.CodigoIndicadorMeta;
                                    resultado.Result.CodigoIndicador = data.CodigoIndicador;
                                }
                                else
                                {
                                    indicadorMetaEntityRepository.Insertar(indicadorMetaGeneral);
                                    bool registroExitoso = resultado.IsSuccess;
                                    if (!registroExitoso)
                                    {
                                        resultado.IsSuccess = false;
                                        resultado.Exception = new ApplicationLayerException<IndicadorMetaService>(MensajesSistemaResource.EtiquetaError);
                                    }
                                    resultado.Result.CodigoIndicadorMeta = indicadorMetaGeneral.CodigoIndicadorMeta;
                                    resultado.Result.CodigoIndicador = indicadorMetaGeneral.CodigoIndicador;
                                }
                            }
                        }
                    }
                    else
                    {
                        if (indicadorMetaSincronizar != null)
                        {
                            Mapper.Map<IndicadorMetaEntity, IndicadorMetaEntity>(indicadorMetaGeneral, indicadorMetaSincronizar);
                            indicadorMetaEntityRepository.Editar(indicadorMetaSincronizar);
                            resultado.Result.CodigoIndicadorMeta = data.CodigoIndicadorMeta;
                            resultado.Result.CodigoIndicador = data.CodigoIndicador;
                        }
                        else
                        {
                            indicadorMetaEntityRepository.Insertar(indicadorMetaGeneral);
                            bool registroExitoso = resultado.IsSuccess;
                            if (!registroExitoso)
                            {
                                resultado.IsSuccess = false;
                                resultado.Exception = new ApplicationLayerException<IndicadorMetaService>(MensajesSistemaResource.EtiquetaError);
                            }
                            resultado.Result.CodigoIndicadorMeta = indicadorMetaGeneral.CodigoIndicadorMeta;
                            resultado.Result.CodigoIndicador = indicadorMetaGeneral.CodigoIndicador;
                        }
                    }  
                    indicadorMetaEntityRepository.GuardarCambios();
                    ts.Complete();
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<IndicadorMetaService>(ex.Message);
            }
            return resultado;
        }

        public ProcessResult<object> EliminarIndicadorMeta(IndicadorMetaRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = string.Empty;
            try
            {
                IndicadorMetaEntity oIndicadorMetaEntity = indicadorMetaEntityRepository.GetById(data.CodigoIndicadorMeta);

                if (oIndicadorMetaEntity != null)
                {
                    indicadorMetaEntityRepository.Eliminar(oIndicadorMetaEntity.CodigoIndicadorMeta);
                    resultado.IsSuccess = true;
                    indicadorMetaEntityRepository.GuardarCambios();
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
