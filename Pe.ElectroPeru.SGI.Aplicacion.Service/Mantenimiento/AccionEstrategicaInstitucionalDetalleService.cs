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
    public class AccionEstrategicaInstitucionalDetalleService : GenericService, IAccionEstrategicaInstitucionalDetalleService
    {
        #region Propiedades
        /// <summary>
        /// Servicio de Mantenimiento Logic
        /// </summary>
        public IAccionEstrategicaInstitucionalDetalleLogicRepository accionEstrategicaInstitucionalDetalleLogicRepository { get; set; }
        /// <summary>
        /// Servicio de Observacion Planeada Entity
        /// </summary>
        public IAccionEstrategicaInstitucionalDetalleEntityRepository accionEstrategicaInstitucionalDetalleEntityRepository { get; set; }

        #endregion

        #region Métodos
        /// <summary>
        /// Permite obtener el listado de Inspecciones
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public ProcessResult<List<AccionEstrategicaInstitucionalDetalleResponse>> BuscarAccionEstrategicaInstitucionalDetalle(AccionEstrategicaInstitucionalDetalleRequest filtro)
        {
            ProcessResult<List<AccionEstrategicaInstitucionalDetalleResponse>> resultado = new ProcessResult<List<AccionEstrategicaInstitucionalDetalleResponse>>();

            try
            {
                List<AccionEstrategicaInstitucionalDetalleLogic> listado = accionEstrategicaInstitucionalDetalleLogicRepository.BuscarAccionEstrategicaInstitucionalDetalle(
                    filtro.CodigoAccionEstrategicaInstitucionalDetalle,
                    filtro.CodigoAccionEstrategicaInstitucional,
                    Guid.Parse(DatosConstantes.Empresa.CodigoElectroPeru),
                    Guid.Parse(DatosConstantes.Sistema.CodigoSGI),
                    filtro.CodigoIdioma,
                    DatosConstantes.EstadoRegistro.Activo,
                    filtro.NumeroPagina,
                    filtro.RegistrosPagina);

                resultado.Result = new List<AccionEstrategicaInstitucionalDetalleResponse>();

                Mapper.Map<List<AccionEstrategicaInstitucionalDetalleLogic>, List<AccionEstrategicaInstitucionalDetalleResponse>>(listado, resultado.Result);
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<AccionEstrategicaInstitucionalDetalleService>(e.Message);
            }

            return resultado;
        }

        public ProcessResult<AccionEstrategicaInstitucionalDetalleResponse> RegistrarAccionEstrategicaInstitucionalDetalle(AccionEstrategicaInstitucionalDetalleRequest data)
        {
            ProcessResult<AccionEstrategicaInstitucionalDetalleResponse> resultado = new ProcessResult<AccionEstrategicaInstitucionalDetalleResponse>();
            resultado.Result = new AccionEstrategicaInstitucionalDetalleResponse();
            try
            {
                using (TransactionScope ts = new TransactionScope())
                {
                    AccionEstrategicaInstitucionalDetalleEntity accionEstrategicaInstitucionalDetalleSincronizar = accionEstrategicaInstitucionalDetalleEntityRepository.GetById(data.CodigoAccionEstrategicaInstitucionalDetalle);
                    AccionEstrategicaInstitucionalDetalleEntity accionEstrategicaInstitucionalDetalleGeneral = Mapper.Map<AccionEstrategicaInstitucionalDetalleRequest, AccionEstrategicaInstitucionalDetalleEntity>(data);

                    if (accionEstrategicaInstitucionalDetalleSincronizar != null)
                    {
                        Mapper.Map<AccionEstrategicaInstitucionalDetalleEntity, AccionEstrategicaInstitucionalDetalleEntity>(accionEstrategicaInstitucionalDetalleGeneral, accionEstrategicaInstitucionalDetalleSincronizar);
                        accionEstrategicaInstitucionalDetalleEntityRepository.Editar(accionEstrategicaInstitucionalDetalleSincronizar);
                        resultado.Result.CodigoAccionEstrategicaInstitucionalDetalle = data.CodigoAccionEstrategicaInstitucionalDetalle;
                        resultado.Result.CodigoAccionEstrategicaInstitucional = data.CodigoAccionEstrategicaInstitucional;                     
                    }
                    else
                    {
                        accionEstrategicaInstitucionalDetalleEntityRepository.Insertar(accionEstrategicaInstitucionalDetalleGeneral);
                        bool registroExitoso = resultado.IsSuccess;
                        if (!registroExitoso)
                        {
                            resultado.IsSuccess = false;
                            resultado.Exception = new ApplicationLayerException<AccionEstrategicaInstitucionalDetalleService>(MensajesSistemaResource.EtiquetaError);
                        }
                        resultado.Result.CodigoAccionEstrategicaInstitucionalDetalle = accionEstrategicaInstitucionalDetalleGeneral.CodigoAccionEstrategicaInstitucionalDetalle;
                        resultado.Result.CodigoAccionEstrategicaInstitucional = accionEstrategicaInstitucionalDetalleGeneral.CodigoAccionEstrategicaInstitucional;
                    }

                    accionEstrategicaInstitucionalDetalleEntityRepository.GuardarCambios();
                    ts.Complete();
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<AccionEstrategicaInstitucionalDetalleService>(ex.Message);
            }
            return resultado;
        }

        public ProcessResult<object> EliminarAccionEstrategicaInstitucionalDetalle(AccionEstrategicaInstitucionalDetalleRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = "-1";
            try
            {
                accionEstrategicaInstitucionalDetalleEntityRepository.Eliminar(data.CodigoAccionEstrategicaInstitucionalDetalle);
                resultado.Result = accionEstrategicaInstitucionalDetalleEntityRepository.GuardarCambios();
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<AccionEstrategicaInstitucionalDetalleService>(e.Message);
            }
            return resultado;
        }

        #endregion
    }
}
