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
    public class AccionEstrategicaInstitucionalService : GenericService, IAccionEstrategicaInstitucionalService
    {
        #region Propiedades
        /// <summary>
        /// Servicio de Mantenimiento Logic
        /// </summary>
        public IAccionEstrategicaInstitucionalLogicRepository accionEstrategicaInstitucionalLogicRepository { get; set; }
        /// <summary>
        /// Servicio de Observacion Planeada Entity
        /// </summary>
        public IAccionEstrategicaInstitucionalEntityRepository accionEstrategicaInstitucionalEntityRepository { get; set; }

        public IResponsableEntityRepository responsableEntityRepository { get; set; }

        public IAccionEstrategicaInstitucionalDetalleService accionEstrategicaDetalleService { get; set; }

        #endregion

        #region Métodos  
        /// <summary>
        /// Permite obtener el listado de Inspecciones
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public ProcessResult<List<BandejaAccionEstrategicaInstitucionalResponse>> BuscarAccionEstrategicaInstitucional(BandejaAccionEstrategicaInstitucionalRequest filtro)
        {
            ProcessResult<List<BandejaAccionEstrategicaInstitucionalResponse>> resultado = new ProcessResult<List<BandejaAccionEstrategicaInstitucionalResponse>>();

            try
            {
                List<AccionEstrategicaInstitucionalLogic> listado = accionEstrategicaInstitucionalLogicRepository.BuscarAccionEstrategicaInstitucional(
                    filtro.CodigoAccionEstrategicaInstitucional,
                    filtro.NombreAccionEstrategicaInstitucional,
                    filtro.DescripcionAccionEstrategicaInstitucional,
                    filtro.NombreCompletoResponsable,                   
                    Guid.Parse(DatosConstantes.Empresa.CodigoElectroPeru),
                    Guid.Parse(DatosConstantes.Sistema.CodigoSGI),
                    filtro.CodigoIdioma,
                    filtro.EstadoRegistro,//DatosConstantes.EstadoRegistro.Activo,
                    filtro.NumeroPagina,
                    filtro.RegistrosPagina);

                resultado.Result = new List<BandejaAccionEstrategicaInstitucionalResponse>();

                Mapper.Map<List<AccionEstrategicaInstitucionalLogic>, List<BandejaAccionEstrategicaInstitucionalResponse>>(listado, resultado.Result);
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<AccionEstrategicaInstitucionalService>(e.Message);
            }

            return resultado;
        }


        public ProcessResult<AccionEstrategicaInstitucionalResponse> RegistrarAccionEstrategicaInstitucional(AccionEstrategicaInstitucionalRequest data)
        {
            ProcessResult<AccionEstrategicaInstitucionalResponse> resultado = new ProcessResult<AccionEstrategicaInstitucionalResponse>();
            resultado.Result = new AccionEstrategicaInstitucionalResponse();
            try
            {
                using (TransactionScope ts = new TransactionScope())
                {
                    AccionEstrategicaInstitucionalEntity accionEstrategicaInstitucionalSincronizar = accionEstrategicaInstitucionalEntityRepository.GetById(data.CodigoAccionEstrategicaInstitucional);
                    AccionEstrategicaInstitucionalEntity accionEstrategicaInstitucionalGeneral = Mapper.Map<AccionEstrategicaInstitucionalRequest, AccionEstrategicaInstitucionalEntity>(data);

                    if (accionEstrategicaInstitucionalSincronizar != null)
                    {
                        Mapper.Map<AccionEstrategicaInstitucionalEntity, AccionEstrategicaInstitucionalEntity>(accionEstrategicaInstitucionalGeneral, accionEstrategicaInstitucionalSincronizar);
                        accionEstrategicaInstitucionalSincronizar.EstadoRegistro = DatosConstantes.EstadoRegistro.Activo;
                        accionEstrategicaInstitucionalEntityRepository.Editar(accionEstrategicaInstitucionalSincronizar);
                        resultado.Result.CodigoAccionEstrategicaInstitucional = data.CodigoAccionEstrategicaInstitucional;
                        resultado.Result.NombreAccionEstrategicaInstitucional = data.NombreAccionEstrategicaInstitucional;
                        resultado.Result.DescripcionAccionEstrategicaInstitucional = data.DescripcionAccionEstrategicaInstitucional;                        
                        resultado.Result.CodigoResponsable = data.CodigoResponsable;
                        resultado.Result.EstadoRegistro = DatosConstantes.EstadoRegistro.Activo;
                    }
                    else
                    {
                        accionEstrategicaInstitucionalEntityRepository.Insertar(accionEstrategicaInstitucionalGeneral);
                        bool registroExitoso = resultado.IsSuccess;
                        if (!registroExitoso)
                        {
                            resultado.IsSuccess = false;
                            resultado.Exception = new ApplicationLayerException<AccionEstrategicaInstitucionalService>(MensajesSistemaResource.EtiquetaError);
                        }
                        resultado.Result.CodigoAccionEstrategicaInstitucional = accionEstrategicaInstitucionalGeneral.CodigoAccionEstrategicaInstitucional;                        
                    }

                    accionEstrategicaInstitucionalEntityRepository.GuardarCambios();
                    ts.Complete();
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<AccionEstrategicaInstitucionalService>(ex.Message);
            }
            return resultado;
        }

        public ProcessResult<object> EliminarAccionEstrategicaInstitucional(AccionEstrategicaInstitucionalRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = "-1";
            try
            {
                AccionEstrategicaInstitucionalDetalleRequest oOEED = new AccionEstrategicaInstitucionalDetalleRequest();
                oOEED.CodigoAccionEstrategicaInstitucional = data.CodigoAccionEstrategicaInstitucional;
                oOEED.CodigoIdioma = data.CodigoIdioma;
                var indicadoresAsociados = accionEstrategicaDetalleService.BuscarAccionEstrategicaInstitucionalDetalle(oOEED);

                if (indicadoresAsociados.Result.Count > 0)
                {
                    for (int i = 0; i < indicadoresAsociados.Result.Count; i++)
                    {
                        if (indicadoresAsociados.Result[0].EstadoRegistro == DatosConstantes.EstadoRegistro.Activo)
                        {
                            resultado.IsSuccess = false;
                            resultado.Exception = new ApplicationLayerException<AccionEstrategicaInstitucionalService>(MensajesSistemaResource.EtiquetaMsgValidacionConsistencia);
                            break;
                        }
                        else
                        {
                            accionEstrategicaInstitucionalEntityRepository.Eliminar(data.CodigoAccionEstrategicaInstitucional);
                            resultado.Result = accionEstrategicaInstitucionalEntityRepository.GuardarCambios();
                        }
                    }
                }
                else {
                    accionEstrategicaInstitucionalEntityRepository.Eliminar(data.CodigoAccionEstrategicaInstitucional);
                    resultado.Result = accionEstrategicaInstitucionalEntityRepository.GuardarCambios();
                }                
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<AccionEstrategicaInstitucionalService>(e.Message);
            }
            return resultado;
        }

        public ProcessResult<object> ReactivarAccionEstrategicaInstitucional(AccionEstrategicaInstitucionalRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = "-1";
            try
            {
                accionEstrategicaInstitucionalEntityRepository.Reactivar(data.CodigoAccionEstrategicaInstitucional);
                resultado.Result = accionEstrategicaInstitucionalEntityRepository.GuardarCambios();
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<AccionEstrategicaInstitucionalService>(e.Message);
            }
            return resultado;
        }

        /// <summary>
        /// Permite obtener una Observacion Planeada Entity
        /// </summary>
        /// <param name="CodigoExpediente"></param>
        /// <returns>Entidad Observacion Planeada Response</returns>
        public ProcessResult<AccionEstrategicaInstitucionalResponse> ObtenerAccionEstrategicaInstitucional(AccionEstrategicaInstitucionalRequest data)
        {
            ProcessResult<AccionEstrategicaInstitucionalResponse> resultado = new ProcessResult<AccionEstrategicaInstitucionalResponse>();
            resultado.Result = new AccionEstrategicaInstitucionalResponse();
            try
            {
                if (data.CodigoAccionEstrategicaInstitucional.HasValue)
                {
                    BandejaAccionEstrategicaInstitucionalRequest modelo = new BandejaAccionEstrategicaInstitucionalRequest();
                    modelo.CodigoAccionEstrategicaInstitucional = data.CodigoAccionEstrategicaInstitucional;
                    modelo.CodigoIdioma = data.CodigoIdioma;
                   
                    AccionEstrategicaInstitucionalEntity AccionEstrategicaInstitucionalEntity = accionEstrategicaInstitucionalEntityRepository.GetById(data.CodigoAccionEstrategicaInstitucional);
      
                    if (AccionEstrategicaInstitucionalEntity != null)
                    {
                        ResponsableEntity responsableEntity = responsableEntityRepository.GetById(AccionEstrategicaInstitucionalEntity.CodigoResponsable);

                        resultado.Result = Mapper.Map<AccionEstrategicaInstitucionalEntity, AccionEstrategicaInstitucionalResponse>(AccionEstrategicaInstitucionalEntity);
                        resultado.Result.NombreCompletoResponsable = responsableEntity.Nombres + " " + responsableEntity.ApellidoPaterno + " " + responsableEntity.ApellidoMaterno;                        
                    }
                }
            }
            catch (Exception ex)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<AccionEstrategicaInstitucionalService>(ex.Message);
            }
            return resultado;
        }

        #endregion
    }
}
