using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Base;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento;
using Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Base;
using Pe.ElectroPeru.SGI.Presentacion.Core.Helpers;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Mantenimiento.Responsable;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Pe.ElectroPeru.SGI.Transversal.Core.Constante;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Politicas;
using Pe.ElectroPeru.SGI.Presentacion.Recursos.Base;
using Pe.ElectroPeru.SGI.Aplicacion.Core.Base;
using Pe.ElectroPeru.SGI.Transversal.Core.Exception;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Sistema;
using System.Globalization;
using System.Threading;
//using Pe.GyM.Security.Web.Session;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Mantenimiento
{
    /// <summary>
    /// Controladora de Responsable
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 17032017 <br />
    /// Modificación:                <br />
    /// </remarks>
    [AppPresentationError]
    public class ResponsableController : BaseController
    {
        #region Propiedades
        /// <summary>
        /// Servicio de Responsable
        /// </summary>
        public IResponsableService ResponsableService { get; set; }            

        /// <summary>
        /// Servicios de parametros
        /// </summary>
        public IParametroValorService parametroValorService { get; set; }
        
        public IAreaService areaService { get; set; }

        /// <summary>
        /// Servicios de Área
        /// </summary>
        public IResponsableService responsableService { get; set; }
        #endregion

        #region Vistas
        public ActionResult Index(ResponsableRequest filtro)
        {
            FormularioBandejaResponsableModel modelo = new FormularioBandejaResponsableModel();
            var requestIndicador = Request.QueryString["indicador"];

            if (requestIndicador != null ||
                (Session["PortalStracon"] != null && Session["PortalStracon"].ToString() == "true"))
            {
                Session["PortalStracon"] = "true";
                if (Session["CodigoIdioma"] == null)
                {
                    Session["CodigoIdioma"] = DatosConstantes.ParametrosGenerales.CodigoIdiomaEspaniol;
                    filtro.CodigoIdioma = Session["CodigoIdioma"].ToString();

                    CultureInfo cultureInfo = null;
                    cultureInfo = new CultureInfo(filtro.CodigoIdioma);
                    if (cultureInfo == null)
                    {
                        cultureInfo = new CultureInfo(filtro.CodigoIdioma);
                    }

                    //Finally setting culture for each request
                    Thread.CurrentThread.CurrentUICulture = cultureInfo;
                    Thread.CurrentThread.CurrentCulture = CultureInfo.CreateSpecificCulture(cultureInfo.Name);

                    var listaIdioma = parametroValorService.BuscarValorPorSeccionParametro(new ParametroValorRequest()
                    {
                        CodigoIdentificador = DatosConstantes.ParametrosGenerales.Idioma,
                        CodigoEmpresa = DatosConstantes.Empresa.CodigoElectroPeru,
                        CodigoSistema = DatosConstantes.Sistema.CodigoSGI,
                        IndicadorEmpresa = true,
                        CodigoIdioma = filtro.CodigoIdioma
                    }).Result.Select(x => new SelectListItem()
                    {
                        Value = x.CodigoValorString,
                        Text = x.Valor,
                        Selected = (x.CodigoValorString == filtro.CodigoIdioma)
                    }).ToList();
                    Session["ListaIdioma"] = listaIdioma;
                }
            }
            else
            {
                var cuentaUsuario = "alosno";//Pe.GyM.Security.Web.Session.HttpGyMSessionContext.CurrentAccount();
                if (Session["CodigoIdioma"] != null)
                {
                    filtro.CodigoIdioma = Session["CodigoIdioma"].ToString();
                }
                else
                {
                    filtro.CodigoIdioma = DatosConstantes.ParametrosGenerales.CodigoIdiomaPorDefecto;
                }
            }

            modelo.ListaGenero.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaTodos });
            modelo.ListaGenero.AddRange(parametroValorService.BuscarValorPorSeccionParametro(new ParametroValorRequest()
            {
                CodigoIdentificador = DatosConstantes.ParametrosGenerales.TipoGenero,
                CodigoEmpresa = DatosConstantes.Empresa.CodigoElectroPeru,
                CodigoSistema = DatosConstantes.Sistema.CodigoSGI,
                IndicadorEmpresa = true,
                CodigoIdioma = filtro.CodigoIdioma
            }).Result.Select(x => new SelectListItem()
            {
                Value = x.CodigoValorString,
                Text = x.Valor,
                Selected = false
            }));

            modelo.ListaCargo.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaTodos });
            modelo.ListaCargo.AddRange(parametroValorService.BuscarValorPorSeccionParametro(new ParametroValorRequest()
            {
                CodigoIdentificador = DatosConstantes.ParametrosGenerales.Cargo,
                CodigoEmpresa = DatosConstantes.Empresa.CodigoElectroPeru,
                CodigoSistema = DatosConstantes.Sistema.CodigoSGI,
                IndicadorEmpresa = true,
                CodigoIdioma = filtro.CodigoIdioma
            }).Result.Select(x => new SelectListItem()
            {
                Value = x.CodigoValorString,
                Text = x.Valor,
                Selected = false
            }));
           
            modelo.ListaEstadoRegistro.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaTodos });
            modelo.ListaEstadoRegistro.AddRange(parametroValorService.BuscarValorPorSeccionParametro(new ParametroValorRequest()
            {
                CodigoIdentificador = DatosConstantes.ParametrosGenerales.EstadoRegistro,
                CodigoEmpresa = DatosConstantes.Empresa.CodigoElectroPeru,
                CodigoSistema = DatosConstantes.Sistema.CodigoSGI,
                IndicadorEmpresa = true,
                CodigoIdioma = filtro.CodigoIdioma
            }).Result.Select(x => new SelectListItem()
            {
                Value = x.CodigoValorString,
                Text = x.Valor,
                Selected = false
            }));

            modelo.ListaTipoDocumento.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaTodos });
            modelo.ListaTipoDocumento.AddRange(parametroValorService.BuscarValorPorSeccionParametro(new ParametroValorRequest()
            {
                CodigoIdentificador = DatosConstantes.ParametrosGenerales.TipoDocumento,
                CodigoEmpresa = DatosConstantes.Empresa.CodigoElectroPeru,
                CodigoSistema = DatosConstantes.Sistema.CodigoSGI,
                IndicadorEmpresa = true,
                CodigoIdioma = filtro.CodigoIdioma
            }).Result.Select(x => new SelectListItem()
            {
                Value = x.CodigoValorString,
                Text = x.Valor,
                Selected = false
            }));

            return View(modelo);
        }

        public ActionResult FormularioResponsablePrincipal(ResponsableRequest filtro)
        {
            FormularioResponsableModel modelo = new FormularioResponsableModel();

            var requestIndicador = Request.QueryString["indicador"];

            if (requestIndicador != null ||
                (Session["PortalStracon"] != null && Session["PortalStracon"].ToString() == "true"))
            {
                Session["PortalStracon"] = "true";
                if (Session["CodigoIdioma"] == null)
                {
                    Session["CodigoIdioma"] = DatosConstantes.ParametrosGenerales.CodigoIdiomaEspaniol;
                    filtro.CodigoIdioma = Session["CodigoIdioma"].ToString();

                    CultureInfo cultureInfo = null;
                    cultureInfo = new CultureInfo(filtro.CodigoIdioma);
                    if (cultureInfo == null)
                    {
                        cultureInfo = new CultureInfo(filtro.CodigoIdioma);
                    }

                    //Finally setting culture for each request
                    Thread.CurrentThread.CurrentUICulture = cultureInfo;
                    Thread.CurrentThread.CurrentCulture = CultureInfo.CreateSpecificCulture(cultureInfo.Name);

                    var listaIdioma = parametroValorService.BuscarValorPorSeccionParametro(new ParametroValorRequest()
                    {
                        CodigoIdentificador = DatosConstantes.ParametrosGenerales.Idioma,
                        CodigoEmpresa = DatosConstantes.Empresa.CodigoElectroPeru,
                        CodigoSistema = DatosConstantes.Sistema.CodigoSGI,
                        IndicadorEmpresa = true,
                        CodigoIdioma = filtro.CodigoIdioma
                    }).Result.Select(x => new SelectListItem()
                    {
                        Value = x.CodigoValorString,
                        Text = x.Valor,
                        Selected = (x.CodigoValorString == filtro.CodigoIdioma)
                    }).ToList();
                    Session["ListaIdioma"] = listaIdioma;
                }
            }
            else
            {
                var cuentaUsuario = "alosno";//Pe.GyM.Security.Web.Session.HttpGyMSessionContext.CurrentAccount();
                if (Session["CodigoIdioma"] != null)
                {
                    filtro.CodigoIdioma = Session["CodigoIdioma"].ToString();
                }
                else
                {
                    filtro.CodigoIdioma = DatosConstantes.ParametrosGenerales.CodigoIdiomaPorDefecto;
                }
            }

            modelo.ListaGenero.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaSeleccionar });
            modelo.ListaGenero.AddRange(parametroValorService.BuscarValorPorSeccionParametro(new ParametroValorRequest()
            {
                CodigoIdentificador = DatosConstantes.ParametrosGenerales.TipoGenero,
                CodigoEmpresa = DatosConstantes.Empresa.CodigoElectroPeru,
                CodigoSistema = DatosConstantes.Sistema.CodigoSGI,
                IndicadorEmpresa = true,
                CodigoIdioma = filtro.CodigoIdioma
            }).Result.Select(x => new SelectListItem()
            {
                Value = x.CodigoValorString,
                Text = x.Valor,
                Selected = false
            }));

            modelo.ListaCargo.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaSeleccionar });
            modelo.ListaCargo.AddRange(parametroValorService.BuscarValorPorSeccionParametro(new ParametroValorRequest()
            {
                CodigoIdentificador = DatosConstantes.ParametrosGenerales.Cargo,
                CodigoEmpresa = DatosConstantes.Empresa.CodigoElectroPeru,
                CodigoSistema = DatosConstantes.Sistema.CodigoSGI,
                IndicadorEmpresa = true,
                CodigoIdioma = filtro.CodigoIdioma
            }).Result.Select(x => new SelectListItem()
            {
                Value = x.CodigoValorString,
                Text = x.Valor,
                Selected = false
            }));

            modelo.ListaTipoDocumento.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaSeleccionar });
            modelo.ListaTipoDocumento.AddRange(parametroValorService.BuscarValorPorSeccionParametro(new ParametroValorRequest()
            {
                CodigoIdentificador = DatosConstantes.ParametrosGenerales.TipoDocumento,
                CodigoEmpresa = DatosConstantes.Empresa.CodigoElectroPeru,
                CodigoSistema = DatosConstantes.Sistema.CodigoSGI,
                IndicadorEmpresa = true,
                CodigoIdioma = filtro.CodigoIdioma
            }).Result.Select(x => new SelectListItem()
            {
                Value = x.CodigoValorString,
                Text = x.Valor,
                Selected = false
            }));
            

            if (!string.IsNullOrEmpty(filtro.CodigoResponsable.ToString()))
            {
                var response = ResponsableService.BuscarResponsable(filtro);
                modelo.Responsable.CodigoResponsable = response.Result[0].CodigoResponsable;
                modelo.Responsable.Nombres = response.Result[0].Nombres;               
                modelo.Responsable.ApellidoPaterno = response.Result[0].ApellidoPaterno;
                modelo.Responsable.ApellidoMaterno = response.Result[0].ApellidoMaterno;
                modelo.Responsable.CodigoCargo = response.Result[0].CodigoCargo;
                modelo.Responsable.CodigoGenero = response.Result[0].CodigoGenero;              
                modelo.Responsable.CodigoTipoDocumento = response.Result[0].CodigoTipoDocumento;
                modelo.Responsable.NumeroDocumento = response.Result[0].NumeroDocumento;               
                modelo.Responsable.CorreoElectronico = response.Result[0].CorreoElectronico;    
            }

            return View(modelo);
        }
        #endregion

        #region Vistas Parciales
        /// <summary>
        /// Muestra el popup de búsqueda de Responsablees
        /// </summary>
        /// <returns>Vista Parcial</returns>
        public ActionResult FormularioBuscarResponsable(ResponsableRequest filtro)
        {
            FormularioResponsableModel modelo = new FormularioResponsableModel();
            filtro.EstadoRegistro = filtro.EstadoRegistroDescripcion == DatosConstantes.ParametrosEstadoRegistro.Activo ? DatosConstantes.EstadoRegistro.Activo : (filtro.EstadoRegistroDescripcion == DatosConstantes.ParametrosEstadoRegistro.Inactivo ? DatosConstantes.EstadoRegistro.Inactivo : null);

            filtro.CodigoIdioma = obtenerCodigoIdioma();

            modelo.ListaTipoDocumento.Add(new SelectListItem() { Value = string.Empty, Text = GenericoResource.EtiquetaSeleccionar, Selected = true });
            modelo.ListaTipoDocumento.AddRange(parametroValorService.BuscarValorPorSeccionParametro(new ParametroValorRequest()
            {
                CodigoIdentificador = DatosConstantes.ParametrosGenerales.TipoDocumento,
                IndicadorEmpresa = true,
                CodigoSistema = DatosConstantes.Sistema.CodigoSGI,
                CodigoEmpresa = DatosConstantes.Empresa.CodigoElectroPeru,
                CodigoIdioma = filtro.CodigoIdioma
            }).Result.Select(x => new SelectListItem()
            {
                Text = x.Valor,
                Value = x.CodigoValorString,
                Selected = false
            }));

            modelo.ListaCargo.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaSeleccionar });
            modelo.ListaCargo.AddRange(parametroValorService.BuscarValorPorSeccionParametro(new ParametroValorRequest()
            {
                CodigoIdentificador = DatosConstantes.ParametrosGenerales.Cargo,
                CodigoEmpresa = DatosConstantes.Empresa.CodigoElectroPeru,
                CodigoSistema = DatosConstantes.Sistema.CodigoSGI,
                IndicadorEmpresa = true,
                CodigoIdioma = filtro.CodigoIdioma
            }).Result.Select(x => new SelectListItem()
            {
                Value = x.CodigoValorString,
                Text = x.Valor,
                Selected = false
            }));           

            return PartialView(modelo);
        }

        ///// <summary>
        ///// Muestra el formulario de Responsable
        ///// </summary>
        ///// <param name="filtro">Filtro de búsqueda</param>
        ///// <returns>Vista del formulario Responsable</returns>
        //public ActionResult FormularioResponsable(ResponsableRequest filtro)
        //{
        //    FormularioResponsableModel modelo = new FormularioResponsableModel();

        //    filtro.CodigoIdioma = obtenerCodigoIdioma();
        //    if (filtro.CodigoResponsable != null)
        //    {
        //        modelo.Responsable = ResponsableService.BuscarResponsable(filtro).Result.First();
        //    }
        //    return PartialView(modelo);
        //}
        #endregion

        #region Json
        /// <summary>
        /// Permite la búsqueda de Responsable
        /// </summary>
        /// <param name="filtro">Filtro de búsqueda</param>
        /// <returns>Lista de Responsablees</returns>
        public JsonResult BuscarResponsable(ResponsableRequest filtro)
        {
            var listTmp = (List<PermisosSistemaModel.PermisoControlador>)this.Session[Constantes.Sesion.Permisos.Lista_PermisosControlador];
            var permiso = listTmp.Where(x => x.Controlador == "Responsable").Select(s => s.CodigoAccion).ToList()[0];

            filtro.CodigoIdioma = obtenerCodigoIdioma();
            filtro.EstadoRegistro = filtro.EstadoRegistroDescripcion == DatosConstantes.ParametrosEstadoRegistro.Activo ? DatosConstantes.EstadoRegistro.Activo : (filtro.EstadoRegistroDescripcion == DatosConstantes.ParametrosEstadoRegistro.Inactivo ? DatosConstantes.EstadoRegistro.Inactivo : null);
                     
            if (!string.IsNullOrEmpty(filtro.NombreGenero))
            {
                filtro.CodigoGenero = Convert.ToInt32(filtro.NombreGenero);
                filtro.NombreGenero = null;
            }
           
            if (!string.IsNullOrEmpty(filtro.NombreTipoDocumento))
            {
                filtro.CodigoTipoDocumento = Convert.ToInt32(filtro.NombreTipoDocumento);
                filtro.NombreTipoDocumento = null;
            }
            
            if (!string.IsNullOrEmpty(filtro.NombreCargo))
            {
                filtro.CodigoCargo = Convert.ToInt32(filtro.NombreCargo);
                filtro.NombreCargo = null;
            }

            var response = ResponsableService.BuscarResponsable(filtro);

            foreach (var item in response.Result)
            {
                item.Permiso = permiso;
            }

            return Json(response);
        }

        /// <summary>
        /// Permite el registro de Responsable
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public JsonResult RegistrarResponsable(ResponsableRequest data)
        {
            var response = responsableService.RegistrarResponsable(data);
            return Json(response);
        }

        public JsonResult EliminarResponsable(ResponsableRequest filtro)
        {
            var response = responsableService.EliminarResponsable(filtro);
            return Json(response);
        }
        #endregion

       

      
    }
}
