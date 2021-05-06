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
    public class ObjetivoEstrategicoFonafeDetalleService : GenericService, IObjetivoEstrategicoFonafeDetalleService
    {
        #region Propiedades
        /// <summary>
        /// Servicio de Mantenimiento Logic
        /// </summary>
        public IObjetivoEstrategicoFonafeDetalleLogicRepository objetivoEstrategicoFonafeDetalleLogicRepository { get; set; }
        /// <summary>
        /// Servicio de Observacion Planeada Entity
        /// </summary>
        public IObjetivoEstrategicoFonafeDetalleEntityRepository objetivoEstrategicoFonafeDetalleEntityRepository { get; set; }

        #endregion

        #region Métodos
        /// <summary>
        /// Permite obtener el listado de Inspecciones
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public ProcessResult<List<ObjetivoEstrategicoFonafeDetalleResponse>> BuscarObjetivoEstrategicoFonafeDetalle(ObjetivoEstrategicoFonafeDetalleRequest filtro)
        {
            ProcessResult<List<ObjetivoEstrategicoFonafeDetalleResponse>> resultado = new ProcessResult<List<ObjetivoEstrategicoFonafeDetalleResponse>>();

            try
            {
                List<ObjetivoEstrategicoFonafeDetalleLogic> listado = objetivoEstrategicoFonafeDetalleLogicRepository.BuscarObjetivoEstrategicoFonafeDetalle(
                    filtro.CodigoObjetivoEstrategicoFonafeDetalle,
                    filtro.CodigoObjetivoEstrategicoFonafe,
                    Guid.Parse(DatosConstantes.Empresa.CodigoElectroPeru),
                    Guid.Parse(DatosConstantes.Sistema.CodigoSGI),
                    filtro.CodigoIdioma,
                    DatosConstantes.EstadoRegistro.Activo,
                    filtro.NumeroPagina,
                    filtro.RegistrosPagina);

                resultado.Result = new List<ObjetivoEstrategicoFonafeDetalleResponse>();

                Mapper.Map<List<ObjetivoEstrategicoFonafeDetalleLogic>, List<ObjetivoEstrategicoFonafeDetalleResponse>>(listado, resultado.Result);
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoFonafeDetalleService>(e.Message);
            }

            return resultado;
        }

        public ProcessResult<ObjetivoEstrategicoFonafeDetalleResponse> RegistrarObjetivoEstrategicoFonafeDetalle(ObjetivoEstrategicoFonafeDetalleRequest data)
        {
            ProcessResult<ObjetivoEstrategicoFonafeDetalleResponse> resultado = new ProcessResult<ObjetivoEstrategicoFonafeDetalleResponse>();
            resultado.Result = new ObjetivoEstrategicoFonafeDetalleResponse();
            try
            {
                using (TransactionScope ts = new TransactionScope())
                {
                    ObjetivoEstrategicoFonafeDetalleEntity ObjetivoEstrategicoFonafeDetalleSincronizar = objetivoEstrategicoFonafeDetalleEntityRepository.GetById(data.CodigoObjetivoEstrategicoFonafeDetalle);
                    ObjetivoEstrategicoFonafeDetalleEntity ObjetivoEstrategicoFonafeDetalleGeneral = Mapper.Map<ObjetivoEstrategicoFonafeDetalleRequest, ObjetivoEstrategicoFonafeDetalleEntity>(data);

                    if (ObjetivoEstrategicoFonafeDetalleSincronizar != null)
                    {
                        Mapper.Map<ObjetivoEstrategicoFonafeDetalleEntity, ObjetivoEstrategicoFonafeDetalleEntity>(ObjetivoEstrategicoFonafeDetalleGeneral, ObjetivoEstrategicoFonafeDetalleSincronizar);
                        objetivoEstrategicoFonafeDetalleEntityRepository.Editar(ObjetivoEstrategicoFonafeDetalleSincronizar);
                        resultado.Result.CodigoObjetivoEstrategicoFonafeDetalle = data.CodigoObjetivoEstrategicoFonafeDetalle;
                        resultado.Result.CodigoObjetivoEstrategicoFonafe = data.CodigoObjetivoEstrategicoFonafe;                     
                    }
                    else
                    {
                        objetivoEstrategicoFonafeDetalleEntityRepository.Insertar(ObjetivoEstrategicoFonafeDetalleGeneral);
                        bool registroExitoso = resultado.IsSuccess;
                        if (!registroExitoso)
                        {
                            resultado.IsSuccess = false;
                            resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoFonafeDetalleService>(MensajesSistemaResource.EtiquetaError);
                        }
                        resultado.Result.CodigoObjetivoEstrategicoFonafeDetalle = ObjetivoEstrategicoFonafeDetalleGeneral.CodigoObjetivoEstrategicoFonafeDetalle;
                        resultado.Result.CodigoObjetivoEstrategicoFonafe = ObjetivoEstrategicoFonafeDetalleGeneral.CodigoObjetivoEstrategicoFonafe;
                    }

                    objetivoEstrategicoFonafeDetalleEntityRepository.GuardarCambios();
                    ts.Complete();
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoFonafeDetalleService>(ex.Message);
            }
            return resultado;
        }

        public ProcessResult<object> EliminarObjetivoEstrategicoFonafeDetalle(ObjetivoEstrategicoFonafeDetalleRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = "-1";
            try
            {
                objetivoEstrategicoFonafeDetalleEntityRepository.Eliminar(data.CodigoObjetivoEstrategicoFonafeDetalle);
                resultado.Result = objetivoEstrategicoFonafeDetalleEntityRepository.GuardarCambios();
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ObjetivoEstrategicoFonafeDetalleService>(e.Message);
            }
            return resultado;
        }

        #endregion
    }
}
