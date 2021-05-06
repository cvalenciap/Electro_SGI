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
    public class AccionEstrategicaSectorialService : GenericService, IAccionEstrategicaSectorialService
    {
        #region Propiedades
        /// <summary>
        /// Servicio de Mantenimiento Logic
        /// </summary>
        public IAccionEstrategicaSectorialLogicRepository accionEstrategicaSectorialLogicRepository { get; set; }
        /// <summary>
        /// Servicio de Observacion Planeada Entity
        /// </summary>
        public IAccionEstrategicaSectorialEntityRepository accionEstrategicaSectorialEntityRepository { get; set; }

        public IResponsableEntityRepository responsableEntityRepository { get; set; }

        public IAccionEstrategicaSectorialDetalleService accionEstrategicaDetalleService { get; set; }

        #endregion

        #region Métodos  
        /// <summary>
        /// Permite obtener el listado de Inspecciones
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public ProcessResult<List<BandejaAccionEstrategicaSectorialResponse>> BuscarAccionEstrategicaSectorial(BandejaAccionEstrategicaSectorialRequest filtro)
        {
            ProcessResult<List<BandejaAccionEstrategicaSectorialResponse>> resultado = new ProcessResult<List<BandejaAccionEstrategicaSectorialResponse>>();

            try
            {
                List<AccionEstrategicaSectorialLogic> listado = accionEstrategicaSectorialLogicRepository.BuscarAccionEstrategicaSectorial(
                    filtro.CodigoAccionEstrategicaSectorial,
                    filtro.NombreAccionEstrategicaSectorial,
                    filtro.DescripcionAccionEstrategicaSectorial,
                    filtro.NombreCompletoResponsable,                   
                    Guid.Parse(DatosConstantes.Empresa.CodigoElectroPeru),
                    Guid.Parse(DatosConstantes.Sistema.CodigoSGI),
                    filtro.CodigoIdioma,
                    filtro.EstadoRegistro,//DatosConstantes.EstadoRegistro.Activo,
                    filtro.NumeroPagina,
                    filtro.RegistrosPagina);

                resultado.Result = new List<BandejaAccionEstrategicaSectorialResponse>();

                Mapper.Map<List<AccionEstrategicaSectorialLogic>, List<BandejaAccionEstrategicaSectorialResponse>>(listado, resultado.Result);
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<AccionEstrategicaSectorialService>(e.Message);
            }

            return resultado;
        }


        public ProcessResult<AccionEstrategicaSectorialResponse> RegistrarAccionEstrategicaSectorial(AccionEstrategicaSectorialRequest data)
        {
            ProcessResult<AccionEstrategicaSectorialResponse> resultado = new ProcessResult<AccionEstrategicaSectorialResponse>();
            resultado.Result = new AccionEstrategicaSectorialResponse();
            try
            {
                using (TransactionScope ts = new TransactionScope())
                {
                    AccionEstrategicaSectorialEntity accionEstrategicaSectorialSincronizar = accionEstrategicaSectorialEntityRepository.GetById(data.CodigoAccionEstrategicaSectorial);
                    AccionEstrategicaSectorialEntity accionEstrategicaSectorialGeneral = Mapper.Map<AccionEstrategicaSectorialRequest, AccionEstrategicaSectorialEntity>(data);

                    if (accionEstrategicaSectorialSincronizar != null)
                    {
                        Mapper.Map<AccionEstrategicaSectorialEntity, AccionEstrategicaSectorialEntity>(accionEstrategicaSectorialGeneral, accionEstrategicaSectorialSincronizar);
                        accionEstrategicaSectorialSincronizar.EstadoRegistro = DatosConstantes.EstadoRegistro.Activo;
                        accionEstrategicaSectorialEntityRepository.Editar(accionEstrategicaSectorialSincronizar);
                        resultado.Result.CodigoAccionEstrategicaSectorial = data.CodigoAccionEstrategicaSectorial;
                        resultado.Result.NombreAccionEstrategicaSectorial = data.NombreAccionEstrategicaSectorial;
                        resultado.Result.DescripcionAccionEstrategicaSectorial = data.DescripcionAccionEstrategicaSectorial;                        
                        resultado.Result.CodigoResponsable = data.CodigoResponsable;
                        resultado.Result.EstadoRegistro = DatosConstantes.EstadoRegistro.Activo;
                    }
                    else
                    {
                        accionEstrategicaSectorialEntityRepository.Insertar(accionEstrategicaSectorialGeneral);
                        bool registroExitoso = resultado.IsSuccess;
                        if (!registroExitoso)
                        {
                            resultado.IsSuccess = false;
                            resultado.Exception = new ApplicationLayerException<AccionEstrategicaSectorialService>(MensajesSistemaResource.EtiquetaError);
                        }
                        resultado.Result.CodigoAccionEstrategicaSectorial = accionEstrategicaSectorialGeneral.CodigoAccionEstrategicaSectorial;                        
                    }

                    accionEstrategicaSectorialEntityRepository.GuardarCambios();
                    ts.Complete();
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<AccionEstrategicaSectorialService>(ex.Message);
            }
            return resultado;
        }

        public ProcessResult<object> EliminarAccionEstrategicaSectorial(AccionEstrategicaSectorialRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = "-1";
            try
            {
                AccionEstrategicaSectorialDetalleRequest oOEED = new AccionEstrategicaSectorialDetalleRequest();
                oOEED.CodigoAccionEstrategicaSectorial = data.CodigoAccionEstrategicaSectorial;
                oOEED.CodigoIdioma = data.CodigoIdioma;
                var indicadoresAsociados = accionEstrategicaDetalleService.BuscarAccionEstrategicaSectorialDetalle(oOEED);

                if (indicadoresAsociados.Result.Count > 0)
                {
                    for (int i = 0; i < indicadoresAsociados.Result.Count; i++)
                    {
                        if (indicadoresAsociados.Result[0].EstadoRegistro == DatosConstantes.EstadoRegistro.Activo)
                        {
                            resultado.IsSuccess = false;
                            resultado.Exception = new ApplicationLayerException<AccionEstrategicaSectorialService>(MensajesSistemaResource.EtiquetaMsgValidacionConsistenciaAES);
                            break;
                        }
                        else
                        {
                            accionEstrategicaSectorialEntityRepository.Eliminar(data.CodigoAccionEstrategicaSectorial);
                            resultado.Result = accionEstrategicaSectorialEntityRepository.GuardarCambios();
                        }
                    }
                }
                else {
                    accionEstrategicaSectorialEntityRepository.Eliminar(data.CodigoAccionEstrategicaSectorial);
                    resultado.Result = accionEstrategicaSectorialEntityRepository.GuardarCambios();
                }                
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<AccionEstrategicaSectorialService>(e.Message);
            }
            return resultado;
        }

        public ProcessResult<object> ReactivarAccionEstrategicaSectorial(AccionEstrategicaSectorialRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = "-1";
            try
            {
                accionEstrategicaSectorialEntityRepository.Reactivar(data.CodigoAccionEstrategicaSectorial);
                resultado.Result = accionEstrategicaSectorialEntityRepository.GuardarCambios();
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<AccionEstrategicaSectorialService>(e.Message);
            }
            return resultado;
        }

        /// <summary>
        /// Permite obtener una Observacion Planeada Entity
        /// </summary>
        /// <param name="CodigoExpediente"></param>
        /// <returns>Entidad Observacion Planeada Response</returns>
        public ProcessResult<AccionEstrategicaSectorialResponse> ObtenerAccionEstrategicaSectorial(AccionEstrategicaSectorialRequest data)
        {
            ProcessResult<AccionEstrategicaSectorialResponse> resultado = new ProcessResult<AccionEstrategicaSectorialResponse>();
            resultado.Result = new AccionEstrategicaSectorialResponse();
            try
            {
                if (data.CodigoAccionEstrategicaSectorial.HasValue)
                {
                    BandejaAccionEstrategicaSectorialRequest modelo = new BandejaAccionEstrategicaSectorialRequest();
                    modelo.CodigoAccionEstrategicaSectorial = data.CodigoAccionEstrategicaSectorial;
                    modelo.CodigoIdioma = data.CodigoIdioma;
                   
                    AccionEstrategicaSectorialEntity AccionEstrategicaSectorialEntity = accionEstrategicaSectorialEntityRepository.GetById(data.CodigoAccionEstrategicaSectorial);
      
                    if (AccionEstrategicaSectorialEntity != null)
                    {
                        ResponsableEntity responsableEntity = responsableEntityRepository.GetById(AccionEstrategicaSectorialEntity.CodigoResponsable);

                        resultado.Result = Mapper.Map<AccionEstrategicaSectorialEntity, AccionEstrategicaSectorialResponse>(AccionEstrategicaSectorialEntity);
                        resultado.Result.NombreCompletoResponsable = responsableEntity.Nombres + " " + responsableEntity.ApellidoPaterno + " " + responsableEntity.ApellidoMaterno;                        
                    }
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<AccionEstrategicaSectorialService>(ex.Message);
            }
            return resultado;
        }

        #endregion
    }
}
