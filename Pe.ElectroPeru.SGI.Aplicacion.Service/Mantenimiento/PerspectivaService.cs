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
    public class PerspectivaService : GenericService, IPerspectivaService
    {
        #region Propiedades
        /// <summary>
        /// Servicio de Mantenimiento Logic
        /// </summary>
        public IPerspectivaLogicRepository perspectivaLogicRepository { get; set; }
        /// <summary>
        /// Servicio de Observacion Planeada Entity
        /// </summary>
        public IPerspectivaEntityRepository perspectivaEntityRepository { get; set; }

        public IResponsableEntityRepository responsableEntityRepository { get; set; }

        public IPerspectivaDetalleService perspectivaDetalleService { get; set; }

        #endregion

        #region Métodos  
        /// <summary>
        /// Permite obtener el listado de Inspecciones
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public ProcessResult<List<BandejaPerspectivaResponse>> BuscarPerspectiva(BandejaPerspectivaRequest filtro)
        {
            ProcessResult<List<BandejaPerspectivaResponse>> resultado = new ProcessResult<List<BandejaPerspectivaResponse>>();

            try
            {
                List<PerspectivaLogic> listado = perspectivaLogicRepository.BuscarPerspectiva(
                    filtro.CodigoPerspectiva,
                    filtro.NombrePerspectiva,
                    filtro.DescripcionPerspectiva,
                    filtro.NombreCompletoResponsable,                  
                    Guid.Parse(DatosConstantes.Empresa.CodigoElectroPeru),
                    Guid.Parse(DatosConstantes.Sistema.CodigoSGI),
                    filtro.CodigoIdioma,
                    filtro.EstadoRegistro,//DatosConstantes.EstadoRegistro.Activo,
                    filtro.NumeroPagina,
                    filtro.RegistrosPagina);

                resultado.Result = new List<BandejaPerspectivaResponse>();

                Mapper.Map<List<PerspectivaLogic>, List<BandejaPerspectivaResponse>>(listado, resultado.Result);
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<PerspectivaService>(e.Message);
            }

            return resultado;
        }


        public ProcessResult<PerspectivaResponse> RegistrarPerspectiva(PerspectivaRequest data)
        {
            ProcessResult<PerspectivaResponse> resultado = new ProcessResult<PerspectivaResponse>();
            resultado.Result = new PerspectivaResponse();
            try
            {
                using (TransactionScope ts = new TransactionScope())
                {
                    PerspectivaEntity PerspectivaSincronizar = perspectivaEntityRepository.GetById(data.CodigoPerspectiva);
                    PerspectivaEntity PerspectivaGeneral = Mapper.Map<PerspectivaRequest, PerspectivaEntity>(data);

                    if (PerspectivaSincronizar != null)
                    {
                        Mapper.Map<PerspectivaEntity, PerspectivaEntity>(PerspectivaGeneral, PerspectivaSincronizar);
                        PerspectivaSincronizar.EstadoRegistro = DatosConstantes.EstadoRegistro.Activo;
                        perspectivaEntityRepository.Editar(PerspectivaSincronizar);
                        resultado.Result.CodigoPerspectiva = data.CodigoPerspectiva;
                        resultado.Result.NombrePerspectiva = data.NombrePerspectiva;
                        resultado.Result.DescripcionPerspectiva = data.DescripcionPerspectiva;                        
                        resultado.Result.CodigoResponsable = data.CodigoResponsable;
                        resultado.Result.EstadoRegistro = DatosConstantes.EstadoRegistro.Activo;
                    }
                    else
                    {
                        perspectivaEntityRepository.Insertar(PerspectivaGeneral);
                        bool registroExitoso = resultado.IsSuccess;
                        if (!registroExitoso)
                        {
                            resultado.IsSuccess = false;
                            resultado.Exception = new ApplicationLayerException<PerspectivaService>(MensajesSistemaResource.EtiquetaError);
                        }
                        resultado.Result.CodigoPerspectiva = PerspectivaGeneral.CodigoPerspectiva;                        
                    }

                    perspectivaEntityRepository.GuardarCambios();
                    ts.Complete();
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<PerspectivaService>(ex.Message);
            }
            return resultado;
        }

        public ProcessResult<object> EliminarPerspectiva(PerspectivaRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = "-1";
            try
            {
                PerspectivaDetalleRequest oOEED = new PerspectivaDetalleRequest();
                oOEED.CodigoPerspectiva = data.CodigoPerspectiva;
                oOEED.CodigoIdioma = data.CodigoIdioma;
                var ObjetivoEstrategicoEmpresaAsociados = perspectivaDetalleService.BuscarPerspectivaDetalle(oOEED);

                if (ObjetivoEstrategicoEmpresaAsociados.Result.Count > 0)
                {
                    for (int i = 0; i < ObjetivoEstrategicoEmpresaAsociados.Result.Count; i++)
                    {
                        if (ObjetivoEstrategicoEmpresaAsociados.Result[0].EstadoRegistro == DatosConstantes.EstadoRegistro.Activo)
                        {
                            resultado.IsSuccess = false;
                            resultado.Exception = new ApplicationLayerException<PerspectivaService>(MensajesSistemaResource.EtiquetaMsgValidacionConsistenciaPerspectiva);
                            break;
                        }
                        else
                        {
                            perspectivaEntityRepository.Eliminar(data.CodigoPerspectiva);
                            resultado.Result = perspectivaEntityRepository.GuardarCambios();
                        }
                    }
                }
                else {
                    perspectivaEntityRepository.Eliminar(data.CodigoPerspectiva);
                    resultado.Result = perspectivaEntityRepository.GuardarCambios();
                }                
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<PerspectivaService>(e.Message);
            }
            return resultado;
        }

        public ProcessResult<object> ReactivarPerspectiva(PerspectivaRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = "-1";
            try
            {
                perspectivaEntityRepository.Reactivar(data.CodigoPerspectiva);
                resultado.Result = perspectivaEntityRepository.GuardarCambios();
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<PerspectivaService>(e.Message);
            }
            return resultado;
        }

        /// <summary>
        /// Permite obtener una Observacion Planeada Entity
        /// </summary>
        /// <param name="CodigoExpediente"></param>
        /// <returns>Entidad Observacion Planeada Response</returns>
        public ProcessResult<PerspectivaResponse> ObtenerPerspectiva(PerspectivaRequest data)
        {
            ProcessResult<PerspectivaResponse> resultado = new ProcessResult<PerspectivaResponse>();
            resultado.Result = new PerspectivaResponse();
            try
            {
                if (data.CodigoPerspectiva.HasValue)
                {
                    BandejaPerspectivaRequest modelo = new BandejaPerspectivaRequest();
                    modelo.CodigoPerspectiva = data.CodigoPerspectiva;
                    modelo.CodigoIdioma = data.CodigoIdioma;
                   
                    PerspectivaEntity PerspectivaEntity = perspectivaEntityRepository.GetById(data.CodigoPerspectiva);
      
                    if (PerspectivaEntity != null)
                    {
                        ResponsableEntity responsableEntity = responsableEntityRepository.GetById(PerspectivaEntity.CodigoResponsable);

                        resultado.Result = Mapper.Map<PerspectivaEntity, PerspectivaResponse>(PerspectivaEntity);
                        resultado.Result.NombreCompletoResponsable = responsableEntity.Nombres + " " + responsableEntity.ApellidoPaterno + " " + responsableEntity.ApellidoMaterno;                        
                    }
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<PerspectivaService>(ex.Message);
            }
            return resultado;
        }

        #endregion
    }
}
