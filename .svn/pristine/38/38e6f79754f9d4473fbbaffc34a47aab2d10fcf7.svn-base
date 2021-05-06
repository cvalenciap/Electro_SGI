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
    public class IndicadorValorService : GenericService, IIndicadorValorService
    {
        #region Propiedades
        /// <summary>
        /// Servicio de Mantenimiento Logic
        /// </summary>
        public IIndicadorValorLogicRepository IndicadorValorLogicRepository { get; set; }
        /// <summary>
        /// Servicio de Observacion Planeada Entity
        /// </summary>
        public IIndicadorValorEntityRepository indicadorValorEntityRepository { get; set; }

        #endregion

        #region Métodos
        /// <summary>
        /// Permite obtener el listado de Inspecciones
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public ProcessResult<List<IndicadorValorResponse>> BuscarIndicadorValor(IndicadorValorRequest filtro)
        {
            ProcessResult<List<IndicadorValorResponse>> resultado = new ProcessResult<List<IndicadorValorResponse>>();

            try
            {
                List<IndicadorValorLogic> listado = IndicadorValorLogicRepository.BuscarIndicadorValor(
                    filtro.CodigoIndicadorValor,
                    filtro.CodigoIndicador,
                    filtro.Anio,
                    filtro.CodigoSubTipoPeriodicidad,
                    Guid.Parse(DatosConstantes.Empresa.CodigoElectroPeru),
                    Guid.Parse(DatosConstantes.Sistema.CodigoSGI),
                    filtro.CodigoIdioma,
                    DatosConstantes.EstadoRegistro.Activo,
                    filtro.NumeroPagina,
                    filtro.RegistrosPagina);

                resultado.Result = new List<IndicadorValorResponse>();

                Mapper.Map<List<IndicadorValorLogic>, List<IndicadorValorResponse>>(listado, resultado.Result);
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<IndicadorValorService>(e.Message);
            }

            return resultado;
        }

        public ProcessResult<IndicadorValorResponse> RegistrarIndicadorValor(IndicadorValorRequest data)
        {
            ProcessResult<IndicadorValorResponse> resultado = new ProcessResult<IndicadorValorResponse>();
            resultado.Result = new IndicadorValorResponse();
            try
            {
                using (TransactionScope ts = new TransactionScope())
                {
                    IndicadorValorEntity indicadorValorSincronizar = indicadorValorEntityRepository.GetById(data.CodigoIndicadorValor);
                    IndicadorValorEntity indicadorValorGeneral = Mapper.Map<IndicadorValorRequest, IndicadorValorEntity>(data);

                    var indicadorValor = BuscarIndicadorValor(data);

                    if (indicadorValor.Result.Count > 0)
                    {
                        for (int i = 0; i < indicadorValor.Result.Count; i++)
                        {
                            if (indicadorValor.Result[0].EstadoRegistro == DatosConstantes.EstadoRegistro.Activo)
                            {
                                resultado.IsSuccess = false;
                                resultado.Exception = new ApplicationLayerException<IndicadorMetaService>(MensajesSistemaResource.ViolacionRegistro);
                                break;
                            }
                            else
                            {
                                if (indicadorValorSincronizar != null)
                                {
                                    Mapper.Map<IndicadorValorEntity, IndicadorValorEntity>(indicadorValorGeneral, indicadorValorSincronizar);
                                    indicadorValorEntityRepository.Editar(indicadorValorSincronizar);
                                    resultado.Result.CodigoIndicadorValor = data.CodigoIndicadorValor;
                                    resultado.Result.CodigoIndicador = data.CodigoIndicador;
                                }
                                else
                                {
                                    indicadorValorEntityRepository.Insertar(indicadorValorGeneral);
                                    bool registroExitoso = resultado.IsSuccess;
                                    if (!registroExitoso)
                                    {
                                        resultado.IsSuccess = false;
                                        resultado.Exception = new ApplicationLayerException<IndicadorValorService>(MensajesSistemaResource.EtiquetaError);
                                    }
                                    resultado.Result.CodigoIndicadorValor = indicadorValorGeneral.CodigoIndicadorValor;
                                    resultado.Result.CodigoIndicador = indicadorValorGeneral.CodigoIndicador;
                                }
                            }
                        }
                    }
                    else
                    {
                        if (indicadorValorSincronizar != null)
                        {
                            Mapper.Map<IndicadorValorEntity, IndicadorValorEntity>(indicadorValorGeneral, indicadorValorSincronizar);
                            indicadorValorEntityRepository.Editar(indicadorValorSincronizar);
                            resultado.Result.CodigoIndicadorValor = data.CodigoIndicadorValor;
                            resultado.Result.CodigoIndicador = data.CodigoIndicador;
                        }
                        else
                        {
                            indicadorValorEntityRepository.Insertar(indicadorValorGeneral);
                            bool registroExitoso = resultado.IsSuccess;
                            if (!registroExitoso)
                            {
                                resultado.IsSuccess = false;
                                resultado.Exception = new ApplicationLayerException<IndicadorValorService>(MensajesSistemaResource.EtiquetaError);
                            }
                            resultado.Result.CodigoIndicadorValor = indicadorValorGeneral.CodigoIndicadorValor;
                            resultado.Result.CodigoIndicador = indicadorValorGeneral.CodigoIndicador;
                        }
                    }  
                    indicadorValorEntityRepository.GuardarCambios();
                    ts.Complete();
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<IndicadorValorService>(ex.Message);
            }
            return resultado;
        }

        public ProcessResult<object> EliminarIndicadorValor(IndicadorValorRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = string.Empty;
            try
            {
                IndicadorValorEntity oIndicadorValorEntity = indicadorValorEntityRepository.GetById(data.CodigoIndicadorValor);

                if (oIndicadorValorEntity != null)
                {
                    indicadorValorEntityRepository.Eliminar(oIndicadorValorEntity.CodigoIndicadorValor);
                    resultado.IsSuccess = true;
                    indicadorValorEntityRepository.GuardarCambios();
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
