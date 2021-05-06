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
    public class PerspectivaDetalleService : GenericService, IPerspectivaDetalleService
    {
        #region Propiedades
        /// <summary>
        /// Servicio de Mantenimiento Logic
        /// </summary>
        public IPerspectivaDetalleLogicRepository perspectivaDetalleLogicRepository { get; set; }
        /// <summary>
        /// Servicio de Observacion Planeada Entity
        /// </summary>
        public IPerspectivaDetalleEntityRepository perspectivaDetalleEntityRepository { get; set; }

        #endregion

        #region Métodos
        /// <summary>
        /// Permite obtener el listado de Inspecciones
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public ProcessResult<List<PerspectivaDetalleResponse>> BuscarPerspectivaDetalle(PerspectivaDetalleRequest filtro)
        {
            ProcessResult<List<PerspectivaDetalleResponse>> resultado = new ProcessResult<List<PerspectivaDetalleResponse>>();

            try
            {
                List<PerspectivaDetalleLogic> listado = perspectivaDetalleLogicRepository.BuscarPerspectivaDetalle(
                    filtro.CodigoPerspectivaDetalle,
                    filtro.CodigoPerspectiva,
                    Guid.Parse(DatosConstantes.Empresa.CodigoElectroPeru),
                    Guid.Parse(DatosConstantes.Sistema.CodigoSGI),
                    filtro.CodigoIdioma,
                    DatosConstantes.EstadoRegistro.Activo,
                    filtro.NumeroPagina,
                    filtro.RegistrosPagina);

                resultado.Result = new List<PerspectivaDetalleResponse>();

                Mapper.Map<List<PerspectivaDetalleLogic>, List<PerspectivaDetalleResponse>>(listado, resultado.Result);
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<PerspectivaDetalleService>(e.Message);
            }

            return resultado;
        }

        public ProcessResult<PerspectivaDetalleResponse> RegistrarPerspectivaDetalle(PerspectivaDetalleRequest data)
        {
            ProcessResult<PerspectivaDetalleResponse> resultado = new ProcessResult<PerspectivaDetalleResponse>();
            resultado.Result = new PerspectivaDetalleResponse();
            try
            {
                using (TransactionScope ts = new TransactionScope())
                {
                    PerspectivaDetalleEntity PerspectivaDetalleSincronizar = perspectivaDetalleEntityRepository.GetById(data.CodigoPerspectivaDetalle);
                    PerspectivaDetalleEntity PerspectivaDetalleGeneral = Mapper.Map<PerspectivaDetalleRequest, PerspectivaDetalleEntity>(data);

                    if (PerspectivaDetalleSincronizar != null)
                    {
                        Mapper.Map<PerspectivaDetalleEntity, PerspectivaDetalleEntity>(PerspectivaDetalleGeneral, PerspectivaDetalleSincronizar);
                        perspectivaDetalleEntityRepository.Editar(PerspectivaDetalleSincronizar);
                        resultado.Result.CodigoPerspectivaDetalle = data.CodigoPerspectivaDetalle;
                        resultado.Result.CodigoPerspectiva = data.CodigoPerspectiva;                     
                    }
                    else
                    {
                        perspectivaDetalleEntityRepository.Insertar(PerspectivaDetalleGeneral);
                        bool registroExitoso = resultado.IsSuccess;
                        if (!registroExitoso)
                        {
                            resultado.IsSuccess = false;
                            resultado.Exception = new ApplicationLayerException<PerspectivaDetalleService>(MensajesSistemaResource.EtiquetaError);
                        }
                        resultado.Result.CodigoPerspectivaDetalle = PerspectivaDetalleGeneral.CodigoPerspectivaDetalle;
                        resultado.Result.CodigoPerspectiva = PerspectivaDetalleGeneral.CodigoPerspectiva;
                    }

                    perspectivaDetalleEntityRepository.GuardarCambios();
                    ts.Complete();
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<PerspectivaDetalleService>(ex.Message);
            }
            return resultado;
        }

        public ProcessResult<object> EliminarPerspectivaDetalle(PerspectivaDetalleRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = "-1";
            try
            {
                perspectivaDetalleEntityRepository.Eliminar(data.CodigoPerspectivaDetalle);
                resultado.Result = perspectivaDetalleEntityRepository.GuardarCambios();
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<PerspectivaDetalleService>(e.Message);
            }
            return resultado;
        }

        #endregion
    }
}
