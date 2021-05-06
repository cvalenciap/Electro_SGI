using Pe.ElectroPeru.SGI.Aplicacion.Adapter.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.Core.Base;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.Service.Base;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento;
using Pe.ElectroPeru.SGI.Transversal.Core.Exception;
using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Mantenimiento;
using Pe.ElectroPeru.SGI.Infraestructura.Core.CommandContract.Mantenimiento;
using Pe.ElectroPeru.SGI.Transversal.Core.Constante;
using Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Mantenimiento;
using Pe.ElectroPeru.SGI.Infraestructura.Core.QueryContract.Mantimiento;
using Pe.ElectroPeru.SGI.Infraestructura.QueryModel.Mantenimiento;
using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Pe.ElectroPeru.SGI.Transversal.Core.Base;
using Pe.ElectroPeru.SGI.Aplicacion.Core.Message;

namespace Pe.ElectroPeru.SGI.Aplicacion.Service.Mantenimiento
{
    /// <summary>
    /// Implementación de servicios de aplicación de Responsable
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 17032017 <br />
    /// Modificación:                <br />
    /// </remarks>
    public class ResponsableService : GenericService, IResponsableService
    {
        #region Propiedades
        /// <summary>
        /// Variable de Entorno de la Aplicación
        /// </summary>
        public IEntornoActualAplicacion entornoActualAplicacion { get; set; }

        /// <summary>
        /// Repositorio Logic de Responsable
        /// </summary>
        public IResponsableLogicRepository ResponsableLogicRepository { get; set; }

        /// <summary>
        /// Repositorio de Responsable Entity
        /// </summary>
        public IResponsableEntityRepository responsableEntityRepository { get; set; }
      
        #endregion

        #region Json
        /// <summary>
        /// Permite la búsqueda de Responsablees
        /// </summary>
        /// <param name="filtro">Filtro de búsqueda</param>
        /// <returns>Lista de Responsablees</returns>
        public ProcessResult<List<ResponsableResponse>> BuscarResponsable(ResponsableRequest filtro)
        {
            ProcessResult<List<ResponsableResponse>> resultado = new ProcessResult<List<ResponsableResponse>>();
            try
            {                

                List<ResponsableLogic> listaResponsable = ResponsableLogicRepository.BuscarResponsable(
                    filtro.CodigoResponsable,
                    filtro.Nombres,
                    filtro.ApellidoPaterno,
                    filtro.ApellidoMaterno,
                    filtro.NombreCompleto,
                    filtro.CodigoGenero,                  
                    filtro.CodigoCargo,                            
                    filtro.CorreoElectronico,                    
                    filtro.CodigoTipoDocumento,                   
                    filtro.NumeroDocumento,                    
                    Guid.Parse(DatosConstantes.Empresa.CodigoElectroPeru),
                    Guid.Parse(DatosConstantes.Sistema.CodigoSGI),                    
                    filtro.CodigoIdioma,
                    filtro.EstadoRegistro,// = filtro.EstadoRegistroDescripcion == DatosConstantes.ParametrosEstadoRegistro.Activo ? DatosConstantes.EstadoRegistro.Activo : (filtro.EstadoRegistroDescripcion == DatosConstantes.ParametrosEstadoRegistro.Inactivo ? DatosConstantes.EstadoRegistro.Inactivo : null),                    
                    filtro.NumeroPagina,
                    filtro.RegistrosPagina);

                resultado.Result = new List<ResponsableResponse>();

                foreach (ResponsableLogic ResponsableLogic in listaResponsable)
                {
                    ResponsableResponse ResponsableResponse = ResponsableAdapter.ObtenerResponsablePaginado(ResponsableLogic);
                    resultado.Result.Add(ResponsableResponse);
                }
            }
            catch (Exception e)
            {
                resultado.IsSuccess = false;
                resultado.Exception = new ApplicationLayerException<ResponsableService>(e.Message);
            }

            return resultado;
        }

        public ProcessResult<object> RegistrarResponsable(ResponsableRequest data)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            try
            {
                if (!string.IsNullOrEmpty(data.CodigoResponsable.ToString()))
                {
                    ResponsableEntity oResponsableEntity = responsableEntityRepository.GetById(data.CodigoResponsable);
                    if (oResponsableEntity != null)
                    {
                        oResponsableEntity.CodigoResponsable = data.CodigoResponsable;
                        oResponsableEntity.Nombres = data.Nombres;
                        oResponsableEntity.ApellidoPaterno = data.ApellidoPaterno;
                        oResponsableEntity.ApellidoMaterno = data.ApellidoMaterno;
                        oResponsableEntity.CodigoCargo = data.CodigoCargo;
                        oResponsableEntity.CodigoGenero = data.CodigoGenero;
                        oResponsableEntity.CorreoElectronico = data.CorreoElectronico;
                        oResponsableEntity.CodigoTipoDocumento = data.CodigoTipoDocumento;
                        oResponsableEntity.NumeroDocumento = data.NumeroDocumento;
                        responsableEntityRepository.Editar(oResponsableEntity);
                        resultado.IsSuccess = true;
                        responsableEntityRepository.GuardarCambios();
                    }
                }
                else
                {
                    ResponsableEntity oResponsableEntity = new ResponsableEntity();
                    oResponsableEntity.CodigoResponsable = Guid.NewGuid();
                    oResponsableEntity.Nombres = data.Nombres;
                    oResponsableEntity.ApellidoPaterno = data.ApellidoPaterno;
                    oResponsableEntity.ApellidoMaterno = data.ApellidoMaterno;
                    oResponsableEntity.CodigoCargo = data.CodigoCargo;
                    oResponsableEntity.CodigoGenero = data.CodigoGenero;
                    oResponsableEntity.CorreoElectronico = data.CorreoElectronico;
                    oResponsableEntity.CodigoTipoDocumento = data.CodigoTipoDocumento;
                    oResponsableEntity.NumeroDocumento = data.NumeroDocumento;
                    responsableEntityRepository.Insertar(oResponsableEntity);
                    resultado.IsSuccess = true;
                    responsableEntityRepository.GuardarCambios();
                }
            }
            catch (Exception ex)
            {
                resultado.Exception = new ApplicationLayerException<ResponsableService>(ex.Message);
            }
            return resultado;
        }

        public ProcessResult<object> EliminarResponsable(ResponsableRequest filtro)
        {
            ProcessResult<object> resultado = new ProcessResult<object>();
            resultado.Result = string.Empty;
            try
            {
                ResponsableEntity oResponsableEntity = responsableEntityRepository.GetById(filtro.CodigoResponsable);

                if (oResponsableEntity != null)
                {
                    responsableEntityRepository.Eliminar(oResponsableEntity.CodigoResponsable);
                    resultado.IsSuccess = true;
                    responsableEntityRepository.GuardarCambios();
                }
            }
            catch (Exception ex)
            {
                resultado.Exception = new ApplicationLayerException<ResponsableService>(ex.Message);
            }
            return resultado;
        }
        #endregion

        //        #region ValidacionAsignacionPersonaProyecto
        //        AsignacionPersonaProyectoRequest filtroAsignacionPersonaProyecto = new AsignacionPersonaProyectoRequest();
        //        filtroAsignacionPersonaProyecto.CodigoResponsable = filtro.CodigoResponsable;
        //        var responseAsignacionPersonaProyecto = asignacionPersonaProyectoService.BuscarPersonaPorProyecto(filtroAsignacionPersonaProyecto);

        //        if (responseAsignacionPersonaProyecto.Result.Count > 0)
        //        {
        //            //int contadorAsignacionPersonaProyecto = 0;
        //            //for (int i = 0; i < responseAsignacionPersonaProyecto.Result.Count; i++)
        //            //{
        //            //    if (responseAsignacionPersonaProyecto.Result[i].EstadoRegistro == "1")
        //            //    {
        //            //        contadorAsignacionPersonaProyecto = contadorAsignacionPersonaProyecto + 1;
        //            //        break;
        //            //    }
        //            //}

        //            //if (contadorAsignacionPersonaProyecto >= 1)
        //            //{
        //            resultado.IsSuccess = false;
        //            resultado.Exception = new ApplicationLayerException<ResponsableService>(MensajesSistemaResource.ViolacionIntegridadResponsableAsignacionProyectoPersona);
        //            return resultado;
        //            // }
        //        }
        //        #endregion

        //        #region ValidacionInvestigacionInvestigador
        //        InvestigacionInvestigadorRequest filtroInvestigacionInvestigador = new InvestigacionInvestigadorRequest();
        //        filtroInvestigacionInvestigador.CodigoResponsable = filtro.CodigoResponsable;
        //        var responseInvestigacionInvestigador = investigacionInvestigadorService.BuscarInvestigador(filtroInvestigacionInvestigador);

        //        if (responseInvestigacionInvestigador.Result.Count > 0)
        //        {
        //            int contadorInvestigacionInvestigador = 0;
        //            for (int i = 0; i < responseInvestigacionInvestigador.Result.Count; i++)
        //            {
        //                if (responseInvestigacionInvestigador.Result[i].EstadoRegistro == "1")
        //                {
        //                    contadorInvestigacionInvestigador = contadorInvestigacionInvestigador + 1;
        //                    break;
        //                }
        //            }

        //            if (contadorInvestigacionInvestigador >= 1)
        //            {
        //                resultado.IsSuccess = false;
        //                resultado.Exception = new ApplicationLayerException<ResponsableService>(MensajesSistemaResource.ViolacionIntegridadResponsableInestigacionInvestigador);
        //                return resultado;
        //            }
        //        }
        //        #endregion

        //        #region ValidacionInvestigacionTestigo
        //        InvestigacionTestigoRequest filtroInvestigacionTestigo = new InvestigacionTestigoRequest();
        //        filtroInvestigacionTestigo.CodigoResponsable = filtro.CodigoResponsable;
        //        var responseInvestigacionTestigo = investigacionTestigoService.BuscarTestigo(filtroInvestigacionTestigo);

        //        if (responseInvestigacionTestigo.Result.Count > 0)
        //        {
        //            int contadorInvestigacionTestigo = 0;
        //            for (int i = 0; i < responseInvestigacionTestigo.Result.Count; i++)
        //            {
        //                if (responseInvestigacionTestigo.Result[i].EstadoRegistro == "1")
        //                {
        //                    contadorInvestigacionTestigo = contadorInvestigacionTestigo + 1;
        //                    break;
        //                }
        //            }

        //            if (contadorInvestigacionTestigo >= 1)
        //            {
        //                resultado.IsSuccess = false;
        //                resultado.Exception = new ApplicationLayerException<ResponsableService>(MensajesSistemaResource.ViolacionIntegridadResponsableInvestigacionTestigo);
        //                return resultado;
        //            }
        //        }
        //        #endregion

        //        if (oResponsableEntity != null)
        //        {
        //            ResponsableEntityRepository.Eliminar(oResponsableEntity.CodigoResponsable);
        //            resultado.IsSuccess = true;
        //            ResponsableEntityRepository.GuardarCambios();
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        resultado.Exception = new ApplicationLayerException<ResponsableService>(ex.Message);
        //    }
        //    return resultado;
        //}


    }
}
