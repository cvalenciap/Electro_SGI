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
    public class AccionEstrategicaSectorialDetalleService : GenericService, IAccionEstrategicaSectorialDetalleService
    {
        #region Propiedades
        /// <summary>
        /// Servicio de Mantenimiento Logic
        /// </summary>
        public IAccionEstrategicaSectorialDetalleLogicRepository accionEstrategicaSectorialDetalleLogicRepository { get; set; }
        /// <summary>
        /// Servicio de Observacion Planeada Entity
        /// </summary>
        public IAccionEstrategicaSectorialDetalleEntityRepository accionEstrategicaSectorialDetalleEntityRepository { get; set; }

        #endregion

        #region Métodos
        /// <summary>
        /// Permite obtener el listado de Inspecciones
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public ProcessResult<List<AccionEstrategicaSectorialDetalleResponse>> BuscarAccionEstrategicaSectorialDetalle(AccionEstrategicaSectorialDetalleRequest filtro)
        {
            ProcessResult<List<AccionEstrategicaSectorialDetalleResponse>> resultado = new ProcessResult<List<AccionEstrategicaSectorialDetalleResponse>>();

            try
            {
                List<AccionEstrategicaSectorialDetalleLogic> listado = accionEstrategicaSectorialDetalleLogicRepository.BuscarAccionEstrategicaSectorialDetalle(
                    filtro.CodigoAccionEstrategicaSectorialDetalle,
                    filtro.CodigoAccionEstrategicaSectorial,
                    Guid.Parse(DatosConstantes.Empresa.CodigoElectroPeru),
                    Guid.Parse(DatosConstantes.Sistema.CodigoSGI),
                    filtro.CodigoIdioma,
                    DatosConstantes.EstadoRegistro.Activo,
                    filtro.NumeroPagina,
                    filtro.RegistrosPagina);

                resultado.Result = new List<AccionEstrategicaSectorialDetalleResponse>();

                Mapper.Map<List<AccionEstrategicaSectorialDetalleLogic>, List<AccionEstrategicaSectorialDetalleResponse>>(listado, resultado.Result);
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<AccionEstrategicaSectorialDetalleService>(e.Message);
            }

            return resultado;
        }

        public ProcessResult<AccionEstrategicaSectorialDetalleResponse> RegistrarAccionEstrategicaSectorialDetalle(AccionEstrategicaSectorialDetalleRequest data)
        {
            ProcessResult<AccionEstrategicaSectorialDetalleResponse> resultado = new ProcessResult<AccionEstrategicaSectorialDetalleResponse>();
            resultado.Result = new AccionEstrategicaSectorialDetalleResponse();
            try
            {
                using (TransactionScope ts = new TransactionScope())
                {
                    AccionEstrategicaSectorialDetalleEntity accionEstrategicaSectorialDetalleSincronizar = accionEstrategicaSectorialDetalleEntityRepository.GetById(data.CodigoAccionEstrategicaSectorialDetalle);
                    AccionEstrategicaSectorialDetalleEntity accionEstrategicaSectorialDetalleGeneral = Mapper.Map<AccionEstrategicaSectorialDetalleRequest, AccionEstrategicaSectorialDetalleEntity>(data);

                    if (accionEstrategicaSectorialDetalleSincronizar != null)
                    {
                        Mapper.Map<AccionEstrategicaSectorialDetalleEntity, AccionEstrategicaSectorialDetalleEntity>(accionEstrategicaSectorialDetalleGeneral, accionEstrategicaSectorialDetalleSincronizar);
                        accionEstrategicaSectorialDetalleEntityRepository.Editar(accionEstrategicaSectorialDetalleSincronizar);
                        resultado.Result.CodigoAccionEstrategicaSectorialDetalle = data.CodigoAccionEstrategicaSectorialDetalle;
                        resultado.Result.CodigoAccionEstrategicaSectorial = data.CodigoAccionEstrategicaSectorial;                     
                    }
                    else
                    {
                        accionEstrategicaSectorialDetalleEntityRepository.Insertar(accionEstrategicaSectorialDetalleGeneral);
                        bool registroExitoso = resultado.IsSuccess;
                        if (!registroExitoso)
                        {
                            resultado.IsSuccess = false;
                            resultado.Exception = new ApplicationLayerException<AccionEstrategicaSectorialDetalleService>(MensajesSistemaResource.EtiquetaError);
                        }
                        resultado.Result.CodigoAccionEstrategicaSectorialDetalle = accionEstrategicaSectorialDetalleGeneral.CodigoAccionEstrategicaSectorialDetalle;
                        resultado.Result.CodigoAccionEstrategicaSectorial = accionEstrategicaSectorialDetalleGeneral.CodigoAccionEstrategicaSectorial;
                    }

                    accionEstrategicaSectorialDetalleEntityRepository.GuardarCambios();
                    ts.Complete();
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<AccionEstrategicaSectorialDetalleService>(ex.Message);
            }
            return resultado;
        }

        public ProcessResult<object> EliminarAccionEstrategicaSectorialDetalle(AccionEstrategicaSectorialDetalleRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = "-1";
            try
            {
                accionEstrategicaSectorialDetalleEntityRepository.Eliminar(data.CodigoAccionEstrategicaSectorialDetalle);
                resultado.Result = accionEstrategicaSectorialDetalleEntityRepository.GuardarCambios();
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<AccionEstrategicaSectorialDetalleService>(e.Message);
            }
            return resultado;
        }

        #endregion
    }
}
