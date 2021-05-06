//using Pe.GyM.Security.Account.Model;
//using Pe.GyM.Security.Web.Session;
using Pe.ElectroPeru.SGI.Infraestructura.Core.Context;
using Pe.ElectroPeru.SGI.Presentacion.Recursos.Seguimiento;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.Helpers
{
    /// <summary>
    /// Helpers personalizados
    /// </summary>
    /// <remarks>
    /// Creación:   GMD 22122014 <br />
    /// Modificación:            <br />
    /// </remarks>
    public static class CustomHtmlHelper
    {
        /// <summary>
        /// Renderiza los archivos js optimizados segun la vista actual
        /// </summary>
        /// <returns></returns>
        public static IHtmlString RenderViewJs(string scriptView = null)
        {
            if (string.IsNullOrWhiteSpace(scriptView))
            {
                var actionName = HttpContext.Current.Request.RequestContext.RouteData.Values["action"] ?? "";
                var controllerName = HttpContext.Current.Request.RequestContext.RouteData.Values["controller"] ?? "";
                var area = HttpContext.Current.Request.RequestContext.RouteData.DataTokens["area"] ?? "";
                scriptView = area.ToString().ToLower() + controllerName.ToString().ToLower() + actionName.ToString().ToLower();
            }

            scriptView = "~/Scripts/" + scriptView;

            var exists = BundleTable.Bundles.GetRegisteredBundles().Any(b => b.Path == scriptView);
            IHtmlString result = null;
            if (exists)
            {
                Random r = new Random();
                int num = (r.Next() * 1000);
                string numero = (num < 0 ? num * -1 : num).ToString();
                Scripts.DefaultTagFormat = string.Concat("<script src=\"{0}?", numero, "\"></script>");
                result = Scripts.Render(scriptView);
            }

            return result;
        }

        #region Menu Principal
        /// <summary>
        /// Renderiza el componente Menú
        /// </summary>
        /// <returns>Html generado para el menú</returns>
        /// COMENTADO POR ANGEL
        //public static MvcHtmlString RenderMenuPrincipal()
        //{
        //    CuentaUsuario user = HttpGyMSessionContext.CurrentAccount();
        //    string htmlMenu = "";
        //    string htmlMenuCapacitacion = string.Empty;

        //    if (user != null)
        //    {
        //        var listaModuloAplicado = AplicarMenuPrincipal(user, ObtenerMenuPrincipal());

        //        if (listaModuloAplicado != null)
        //        {
        //            foreach (var module in listaModuloAplicado)
        //            {
        //                var vistaPrincipal = module.Vistas.FirstOrDefault();
        //                if (vistaPrincipal != null)
        //                {
        //                    var MenuSecundario = RenderMenuSecundario(module.Codigo);


        //                    htmlMenu += "<li class='menu-dropdown' data-menu='dropdown'>";
        //                    if (MenuSecundario.ToHtmlString() == MvcHtmlString.Empty.ToHtmlString())
        //                    {
        //                        htmlMenu += string.Concat("<a href='", vistaPrincipal.URL, "'>");
        //                    }
        //                    else
        //                    {
        //                        htmlMenu += "<a href='#'>";
        //                    }

        //                    htmlMenu += string.Concat("<span class='wrap-icon'><i class='", module.Icono, "'></i></span>");
        //                    htmlMenu += "<span class='wrap-text' style='left: -202px'>";

        //                    if (MenuSecundario.ToHtmlString() == MvcHtmlString.Empty.ToHtmlString())
        //                    {
        //                        htmlMenu += string.Concat("<span class='text'>", module.Nombre, "</span>");
        //                    }
        //                    else
        //                    {
        //                        htmlMenu += string.Concat("<span class='text'>", module.Nombre, "</span>");
        //                        htmlMenu += "<i class='fa fa-bars'></i>";
        //                    }
        //                    htmlMenu += "</span>";
        //                    htmlMenu += "</a>";
        //                    htmlMenu += "<ul class='sub-menu segundo-nivel'>";

        //                    if (MenuSecundario.ToHtmlString() == MvcHtmlString.Empty.ToHtmlString())
        //                    {
        //                        htmlMenu += string.Concat("<li class='title'><a href='", vistaPrincipal.URL, "'>", module.Nombre, "</a></li>");
        //                    }
        //                    else
        //                    {
        //                        htmlMenu += string.Concat("<li class='title'>", module.Nombre, "</li>");
        //                        htmlMenu += MenuSecundario;
        //                    }
        //                    htmlMenu += "</ul>";
        //                    htmlMenu += "</li>";
        //                }
        //            }
        //            htmlMenu += htmlMenuCapacitacion;
        //        }
        //    }

        //    return MvcHtmlString.Create(htmlMenu);
        //}
        #endregion

        /// <summary>
        /// Crea el item para el modulo
        /// </summary>
        /// <param name="module">modulo</param>
        /// <returns>modulo</returns>
        /// COMENTADO POR ANGEL
        //private static string CreateItemLinkModule(Modulo module)
        //{
        //    StringBuilder modulo = new StringBuilder();
        //    string active = module.EsActual ? "active" : "";
        //    modulo.Append("<li class='menu-dropdown " + active + "' data-menu='dropdown'>");
        //    modulo.Append("<a href='#' data-element='button-dropdown'>");
        //    modulo.Append("<span class='wrap-icon'>");
        //    modulo.Append("<i class='fa " + module.Icono + "'></i></span><span class='wrap-text' style='left:-202px'>");
        //    modulo.Append("<span class='text'>" + module.Nombre + "</span><i class='fa fa-bars'></i></span></a>");
        //    modulo.Append("<ul class='sub-menu'>");
        //    modulo.Append("<li class='title'>");
        //    modulo.Append(module.Nombre);
        //    modulo.Append("</li>");
        //    if (module.SubModulos != null && module.SubModulos.Any())
        //    {
        //        string subModulo = CreateContentModule(module);
        //        modulo.Append(subModulo);
        //    }
        //    modulo.Append("</ul>");
        //    modulo.Append("</li>");
        //    return modulo.ToString();
        //}

        /// <summary>
        /// Crea el contenido del modulo
        /// </summary>
        /// <param name="module">modulo</param>
        /// <returns>modulo</returns>
        /// COMENTADO POR ANGEL
        //private static string CreateContentModule(Modulo module)
        //{
        //    StringBuilder menuUl = new StringBuilder();

        //    if (module.SubModulos != null && module.SubModulos.Any())
        //    {

        //        foreach (var subModule in module.SubModulos)
        //        {
        //            var mainView = subModule.GetPrincipalView();
        //            string active = subModule.EsActual ? "active" : "";
        //            UrlHelper urlHelper = new UrlHelper(HttpContext.Current.Request.RequestContext);
        //            string url = mainView.URL.ToLower().StartsWith("http") ? "" : urlHelper.Content("~/");
        //            menuUl.Append("<li><a class='" + active + "' href='" + url + mainView.URL + "' >");//data-navAjax="true"
        //            menuUl.Append("<span class='wrap-text-inner'>");
        //            menuUl.Append("<span class='text'>");
        //            menuUl.Append(subModule.Nombre);
        //            menuUl.Append("</span>");
        //            menuUl.Append("</span></a></li>");
        //        }

        //    }

        //    return menuUl.ToString();
        //}

        //private static void SetActiveModule(List<Modulo> menu)
        //{
        //    string areaName = HttpContext.Current.Request.RequestContext.RouteData.DataTokens["area"].ToString();
        //    string controllerName = HttpContext.Current.Request.RequestContext.RouteData.Values["Controller"].ToString();
        //    string aciontionName = HttpContext.Current.Request.RequestContext.RouteData.Values["Action"].ToString();

        //    string url = areaName + "/" + controllerName;

        //    bool isCurrent = false;
        //    foreach (var modulo in menu)
        //    {
        //        modulo.EsActual = false;
        //        foreach (var submodulo in modulo.SubModulos)
        //        {
        //            submodulo.EsActual = false;
        //            isCurrent = submodulo.Vistas.Any(v => v.URL.Contains(url));
        //            if (isCurrent)
        //            {
        //                modulo.EsActual = true;
        //                submodulo.EsActual = true;

        //            }
        //        }
        //    }
        //}


        /// <summary>
        /// Método que aplica la configuración del menú
        /// </summary>
        /// <param name="usuario">Cuenta del Usuario</param>
        /// <param name="menu">Lista de Modulos del Menú</param>
        /// <returns>Lista de Modulos aplicados</returns>
        /// COMENTADO POR ANGEL
        //public static List<Modulo> AplicarMenuPrincipal(CuentaUsuario usuario, List<Modulo> menu)
        //{
        //    var listaModulos = new List<Modulo>();

        //    if (usuario.Modulos.FirstOrDefault().Codigo == null)
        //    {
        //        List<string> listaUrlPermiso = usuario.Modulos.FirstOrDefault().Vistas.OrderBy(item => (string.IsNullOrEmpty(item.Nombre) ? item.URL : item.Nombre)).Select(v => v.URL).ToList();
        //        listaUrlPermiso = listaUrlPermiso.Distinct().ToList();

        //        //Key: nombreModulo, value: url del modulo
        //        Dictionary<string, string> listaModuloPermiso = new Dictionary<string, string>();

        //        foreach (var urlPermiso in listaUrlPermiso)
        //        {
        //            if (urlPermiso.Length > 0)
        //            {
        //                var lstValoresRutas = urlPermiso.Split('/');
        //                var nombreModulo = urlPermiso.Substring(0, urlPermiso.IndexOf('/'));
        //                if (lstValoresRutas[1].ToUpper() == "ACCION")
        //                {
        //                    listaModuloPermiso.Add("Accion", urlPermiso);
        //                }
        //                //if (!listaModuloPermiso.Any(item => item.Key == nombreModulo))
        //                if (listaModuloPermiso.Where(item => item.Value == urlPermiso || item.Key == nombreModulo).Count() < 1)
        //                {
        //                    listaModuloPermiso.Add(nombreModulo, urlPermiso);
        //                }
        //            }
        //        }
        //        foreach (var modulo in menu)
        //        {
        //            if (modulo.Vistas != null && modulo.Vistas.Any())
        //            {
        //                string urlModulo = string.Empty;
        //                var vista = modulo.SegundoValor;
        //                //var moduloPermitido = listaModuloPermiso.Where(p => vista.URL.Substring(0, vista.URL.IndexOf('/')) == p.Key).FirstOrDefault();
        //                var moduloPermitido = listaModuloPermiso.Where(p => vista.Contains(p.Key.ToUpper())).FirstOrDefault();

        //                if (moduloPermitido.Key != null)
        //                {
        //                    var url = HttpContext.Current.Request.Url;
        //                    var port = url.Port != 80 ? (":" + url.Port) : string.Empty;
        //                    UrlHelper urlHelper = new UrlHelper(HttpContext.Current.Request.RequestContext);
        //                    string urlRelative = string.Format("{0}://{1}{2}{3}", url.Scheme, url.Host, port, urlHelper.Content("~/"));

        //                    modulo.Vistas.ForEach(v => v.URL = v.URL.ToLower().StartsWith("http") ? moduloPermitido.Value : (urlRelative + moduloPermitido.Value));

        //                    listaModulos.Add(modulo);
        //                }
        //            }
        //        }
        //    }
        //    return listaModulos;
        //}


        //Nuevos Métodos
        /// <summary>
        /// Método que obtiene el menú
        /// </summary>
        /// <returns>Lista de Modulos</returns>
        /// COMENTADO POR ANGEL
        //public static List<Modulo> ObtenerMenuPrincipal()
        //{
        //    string codigoSistema = ConfigurationManager.AppSettings["CODIGO_IDENTIFICADOR_SISTEMA"];

        //    List<Modulo> Modulos = new List<Modulo>(){     
        //                                    new Modulo(){
        //                                        Codigo="mdlGestionIncidentes",
        //                                        CodigoSistema = codigoSistema,
        //                                        Nombre = "Gestión de Incidentes",
        //                                        Icono = "fa fa-book fa-lg",
        //                                        SegundoValor = "SEGUIMIENTO",
        //                                        Vistas = new List<Vista>(){ new Vista(){ Nombre= string.Empty, URL = string.Empty } }
        //                                    },
        //                                    new Modulo(){
        //                                        Codigo="mdlHerramientaSsoma",
        //                                        CodigoSistema = codigoSistema,
        //                                        Nombre = "Herramientas SSOMA",
        //                                        Icono = "fa fa-gear",
        //                                        SegundoValor = "ACTUAPOSITIVO/HORASTRABAJADAS/GESTIONLESIONES/VISITAGERENCIAL",
        //                                        Vistas = new List<Vista>(){ new Vista(){ Nombre= string.Empty, URL = string.Empty  } }
        //                                    },
        //                                    new Modulo(){
        //                                        Codigo="mdlAccion",
        //                                        CodigoSistema = codigoSistema,
        //                                        Nombre = "Acciones",
        //                                        Icono = "fa fa-tasks fa-lg",
        //                                        SegundoValor = "ACCION",
        //                                        Vistas = new List<Vista>(){ new Vista(){ Nombre= string.Empty, URL = string.Empty } }
        //                                    },
        //                                    new Modulo(){
        //                                        Codigo="mdlReports",
        //                                        CodigoSistema = codigoSistema,
        //                                        Nombre = "Reportes",
        //                                        Icono = "fa fa-gear",
        //                                        SegundoValor = "REPORTE",
        //                                        Vistas = new List<Vista>(){ new Vista(){ Nombre= string.Empty, URL = string.Empty } }
        //                                    },
        //                                    new Modulo(){
        //                                        Codigo="mdlCapacitacion",
        //                                        CodigoSistema = codigoSistema,
        //                                        Nombre = "Capacitación",
        //                                        Icono = "fa fa-tachometer",
        //                                        SegundoValor = "CAPACITACION",
        //                                        Vistas = new List<Vista>(){ new Vista(){ Nombre= string.Empty, URL = string.Empty} }
        //                                    },
        //                                    new Modulo(){
        //                                        Codigo="mdlConfiguracion",
        //                                        CodigoSistema = codigoSistema,
        //                                        Nombre = "Configuración",
        //                                        Icono = "fa fa-gear",
        //                                        SegundoValor = "CONFIGURACION",
        //                                        Vistas = new List<Vista>(){ new Vista(){ Nombre= string.Empty, URL = string.Empty} }
        //                                    },
                                            
        //                        };

        //    return Modulos;
        //}

        /// <summary>
        /// Método que obtiene el menú de Reportes
        /// </summary>
        /// <returns>Lista de Módulos</returns>
        /// COMENTADO POR ANGEL
        //public static List<Modulo> ObtenerMenuReportes()
        //{
        //    string codigoSistema = ConfigurationManager.AppSettings["CODIGO_IDENTIFICADOR_SISTEMA"];

        //    List<Modulo> ListModulos = new List<Modulo>();

        //    Modulo ObjModulo = new Modulo();
        //    ObjModulo.Codigo = "mdlReports";
        //    ObjModulo.SegundoValor = "REPORTE";
        //    ObjModulo.CodigoSistema = codigoSistema;
        //    //ObjModulo.Nombre = RecordsResource.EtiquetaReporteMenu;
        //    ObjModulo.SubModulos = new List<Modulo>(){
                                       
        //                                /*new Modulo(){
        //                                        Codigo = "mnuReporteGeneral",
        //                                        Nombre = AsignacionResource.EtiquetaReporteResumenCapacitacion,
        //                                        Icono = "",
        //                                        Vistas = new List<Vista>(){ new Vista(){ Nombre= string.Empty, URL="Reporte/ReporteCapacitacion/ReporteCapacitacionPorTrabajador" } }
        //                                },
        //                                new Modulo(){
        //                                        Codigo = "mnuReporteEjecucion",
        //                                        Nombre = AsignacionResource.EtiquetaReporteEjecucionCapacitacion,
        //                                        Icono = "",
        //                                        Vistas = new List<Vista>(){ new Vista(){ Nombre= string.Empty, URL="Reporte/ReporteCapacitacion/ReporteEjecucionCapacitacion" } }
        //                                }*/
        //                        };

        //    ListModulos.Add(ObjModulo);
        //    return ListModulos;
        //}

        #region Menu Secundario
        /// <summary>
        /// Renderiza el componente Menú secundario
        /// </summary>
        /// <param name="tipo">Tipo</param>
        /// <returns>Html generado para el menú</returns>
        /// COMENTADO POR ANGEL
        //public static MvcHtmlString RenderMenuSecundario(string codigoMenu)
        //{
        //    CuentaUsuario user = HttpGyMSessionContext.CurrentAccount();
        //    string htmlMenu = "";
        //    if (user != null)
        //    {
        //        List<Modulo> listaModulo = null;
        //        switch (codigoMenu)
        //        {
        //            case "mdlGestionIncidentes":
        //                listaModulo = ObtenerMenuGestionIncidentes();
        //                break;
        //            case "mdlHerramientaSsoma":
        //                listaModulo = ObtenerMenuHerramientaSsoma();
        //                break;
        //            case "mdlReports":
        //                listaModulo = ObtenerMenuReportes();
        //                break;                    
        //            case "mdlConfiguracion":
        //                listaModulo = ObtenerMenuConfiguraciones();
        //                break;
        //            default:
        //                listaModulo = new List<Modulo>();
        //                break;
        //        }

        //        var listaModuloAplicado = AplicarMenuSecundario(user, listaModulo);

        //        if (listaModuloAplicado != null)
        //        {
        //            foreach (var module in listaModuloAplicado)
        //            {
        //                foreach (var item in module.SubModulos)
        //                {
        //                    if (item.SubModulos != null)
        //                    {
        //                        htmlMenu += "<li class='menu-dropdown' data-menu='dropdown' style='position: relative;'>";
        //                        htmlMenu += "<a href='javascript:void(0);'>";
        //                        htmlMenu += "<span class='wrap-text-inner'>";
        //                        htmlMenu += "<span class='text'>" + item.Nombre + "</span><i class=\"caret\"></i></span></a>";
        //                        htmlMenu += "<ul class='sub-menu tercer-nivel' role='menu'>";
        //                        foreach (var item2 in item.SubModulos)
        //                        {
        //                            htmlMenu += "<li>";
        //                            htmlMenu += "<a href='" + item2.Vistas.FirstOrDefault().URL + "'>";
        //                            htmlMenu += "<span class='wrap-text-inner'>";
        //                            htmlMenu += "<span class='text'>" + item2.Nombre + "</span>";
        //                            htmlMenu += "</span>";
        //                            htmlMenu += "</a>";
        //                            htmlMenu += "</li>";
        //                        }

        //                        htmlMenu += "</ul>";
        //                    }
        //                    else
        //                    {
        //                        htmlMenu += "<li>";
        //                        htmlMenu += "<a href='" + item.Vistas.FirstOrDefault().URL + "'>";
        //                        htmlMenu += "<span class='wrap-text-inner'>";
        //                        htmlMenu += "<span class='text'>" + item.Nombre + "</span>";
        //                        htmlMenu += "</span>";
        //                        htmlMenu += "</a>";
        //                    }

        //                    htmlMenu += "</li>";
        //                }
        //            }
        //        }
        //    }

        //    return MvcHtmlString.Create(htmlMenu);
        //}


        /// <summary>
        /// Método que obtiene el menú de Herramientas Ssoma
        /// </summary>
        /// <returns>Lista de Modulos</returns>
        /// COMENTADO POR ANGEL
        //public static List<Modulo> ObtenerMenuHerramientaSsoma()
        //{
        //    string codigoSistema = ConfigurationManager.AppSettings["CODIGO_IDENTIFICADOR_SISTEMA"];
        //    List<Modulo> ListModulos = new List<Modulo>();
        //    Modulo ObjModulo = new Modulo();
        //    ObjModulo.Codigo = "mdlHerramientaSsoma";
        //    ObjModulo.SegundoValor = "INGRESOAP_A/INGRESOAP_B/BANDEJAAP_A/BANDEJAAP_B/INGRESOEXPEDIENTE/BANDEJALESIONES/INGRESOHORAS/BANDEJAHORAS/INGRESOVISITA/INGRESOACCION/CIERREVISITA/CERRADOGERENCIA/REABRIRVISITA";
        //    ObjModulo.CodigoSistema = codigoSistema;
        //    ObjModulo.SubModulos = new List<Modulo>(){
        //                            new Modulo(){
        //                                    Codigo = "mdlActuaPositivo",
        //                                    Nombre = "Actúa Positivo",
        //                                    Icono = "",
        //                                    SegundoValor = "INGRESOAP_A/INGRESOAP_B/BANDEJAAP_A/BANDEJAAP_B",
        //                                    Vistas = new List<Vista>(){ new Vista(){ Nombre= string.Empty, URL= string.Empty, }},
        //                                    SubModulos = new List<Modulo>(){
        //                                        new Modulo(){
        //                                                Codigo = "mnuIngresoAP-A",
        //                                                Nombre = "Ingreso de AP Lado - A",
        //                                                Icono = "",
        //                                                Vistas = new List<Vista>(){ new Vista(){ Nombre= string.Empty, URL= "ActuaPositivo/IngresoAP_A", }},
        //                                        },
        //                                        new Modulo(){
        //                                                Codigo = "mnuIngresoAP-B",
        //                                                Nombre = "Ingreso de AP Lado - B",
        //                                                Icono = "",
        //                                                Vistas = new List<Vista>(){ new Vista(){ Nombre= string.Empty, URL= "ActuaPositivo/IngresoAP_B", }},
        //                                        },
        //                                        new Modulo(){
        //                                                Codigo = "mnuBandejaGeneral",
        //                                                Nombre = "Bandeja de AP Lado - A",
        //                                                Icono = "",
        //                                                Vistas = new List<Vista>(){ new Vista(){ Nombre= string.Empty, URL= "ActuaPositivo/BandejaAP_A", }},
        //                                        },
        //                                        new Modulo(){
        //                                                Codigo = "mnuBandejaGeneral",
        //                                                Nombre = "Bandeja de AP Lado - B",
        //                                                Icono = "",
        //                                                Vistas = new List<Vista>(){ new Vista(){ Nombre= string.Empty, URL= "ActuaPositivo/BandejaAP_B", }},
        //                                        }
        //                                    }
        //                                },
        //                                new Modulo(){
        //                                    Codigo = "mdlGestionLesiones",
        //                                    Nombre = "Gestión de Lesiones",
        //                                    Icono = "",
        //                                    SegundoValor = "INGRESOEXPEDIENTE/BANDEJALESIONES",
        //                                    Vistas = new List<Vista>(){ new Vista(){ Nombre= string.Empty, URL= string.Empty, }},
        //                                    SubModulos = new List<Modulo>(){
        //                                        new Modulo(){
        //                                                Codigo = "mnuIngresoExpediente",
        //                                                Nombre = "Ingreso de expediente médico",
        //                                                Icono = "",
        //                                                Vistas = new List<Vista>(){ new Vista(){ Nombre= string.Empty, URL= "GestionLesiones/IngresoExpediente", }},
        //                                        },
        //                                        new Modulo(){
        //                                                Codigo = "mnuBandejaLesiones",
        //                                                Nombre = "Bandeja general de lesiones",
        //                                                Icono = "",
        //                                                Vistas = new List<Vista>(){ new Vista(){ Nombre= string.Empty, URL= "GestionLesiones/BandejaLesiones", }},
        //                                        }
        //                                    }
        //                                },
        //                                new Modulo(){
        //                                    Codigo ="mdlHorasHombreTrabajadas",
        //                                    Nombre = "HHT",
        //                                    Icono = "",
        //                                    SegundoValor = "INGRESOHORAS/BANDEJAHORAS",
        //                                    Vistas = new List<Vista>(){ new Vista(){ Nombre= string.Empty, URL= string.Empty, }},
        //                                    SubModulos = new List<Modulo>(){
        //                                        new Modulo(){
        //                                                Codigo = "mnuIngreso",
        //                                                Nombre = "Ingreso de HHT",
        //                                                Icono = "",
        //                                                Vistas = new List<Vista>(){ new Vista(){ Nombre= string.Empty, URL= "HorasTrabajadas/IngresoHoras/", }},
        //                                        },
        //                                        new Modulo(){
        //                                                Codigo = "mnuBandeja",
        //                                                Nombre = "Bandeja HHT",
        //                                                Icono = "",
        //                                                Vistas = new List<Vista>(){ new Vista(){ Nombre= string.Empty, URL= "HorasTrabajadas/BandejaHoras/", }},
        //                                        },
        //                                    }
        //                                },
        //                                new Modulo(){
        //                                    Codigo ="mdlVisitaGerencial",
        //                                    Nombre = "Visita Gerencial",
        //                                    Icono = "",
        //                                    SegundoValor = "INGRESOVISITA/INGRESOACCION/CIERREVISITA/CERRADOGERENCIA/REABRIRVISITA",
        //                                    Vistas = new List<Vista>(){ new Vista(){ Nombre= string.Empty, URL= string.Empty, }},
        //                                    SubModulos = new List<Modulo>(){
        //                                        new Modulo(){
        //                                                Codigo = "mnuIngresoVisita",
        //                                                Nombre = "Ingreso de Informe de Visita",
        //                                                Icono = "",
        //                                                Vistas = new List<Vista>(){ new Vista(){ Nombre= string.Empty, URL= "VisitaGerencial/IngresoVisita/FormularioIngresoVisita", }},
        //                                        },
        //                                            new Modulo(){
        //                                                Codigo = "mnuIngresoAccion",
        //                                                Nombre = "Ingreso de Acciones",
        //                                                Icono = "",
        //                                                Vistas = new List<Vista>(){ new Vista(){ Nombre= string.Empty, URL= "VisitaGerencial/IngresoAccion", }},
        //                                        },
        //                                        new Modulo(){
        //                                                Codigo = "mnuBandejaVisita",
        //                                                Nombre = "Bandeja de Visita Gerencial",
        //                                                Icono = "",
        //                                                Vistas = new List<Vista>(){ new Vista(){ Nombre= string.Empty, URL= "VisitaGerencial/IngresoVisita", }},
        //                                        },
        //                                        new Modulo(){
        //                                                Codigo = "mnuCierreVisita",
        //                                                Nombre = "Cierre",
        //                                                Icono = "",
        //                                                Vistas = new List<Vista>(){ new Vista(){ Nombre= string.Empty, URL= "VisitaGerencial/CierreVisita", }},
        //                                        },
        //                                        new Modulo(){
        //                                                Codigo = "mnuCerradoGerencia",
        //                                                Nombre = "Cerrado por Gerencia",
        //                                                Icono = "",
        //                                                Vistas = new List<Vista>(){ new Vista(){ Nombre= string.Empty, URL= "VisitaGerencial/CerradoGerencia", }},
        //                                        },
        //                                        new Modulo(){
        //                                                Codigo = "mnuReabrirVisita",
        //                                                Nombre = "Reabrir",
        //                                                Icono = "",
        //                                                Vistas = new List<Vista>(){ new Vista(){ Nombre= string.Empty, URL= "VisitaGerencial/ReabrirVisita", }},
        //                                        },
        //                                    }
        //                                }
        //                    };

        //    ListModulos.Add(ObjModulo);
        //    return ListModulos;
        //}



        /// <summary>
        /// Método que obtiene el menú de Configuración
        /// </summary>
        /// <returns>Lista de Modulos</returns>
        /// COMENTADO POR ANGEL
        //public static List<Modulo> ObtenerMenuConfiguraciones()
        //{
        //    string codigoSistema = ConfigurationManager.AppSettings["CODIGO_IDENTIFICADOR_SISTEMA"];
        //    List<Modulo> ListModulos = new List<Modulo>();
        //    Modulo ObjModulo = new Modulo();
        //    ObjModulo.Codigo = "mdlConfiguracion";
        //    ObjModulo.CodigoSistema = codigoSistema;
        //    ObjModulo.SegundoValor = "NOTIFICACIONES";
        //    ObjModulo.SubModulos = new List<Modulo>(){
        //        new Modulo(){
        //                Codigo = "mnuNotificaciones",
        //                Nombre = "Notificaciones",
        //                Icono = "",
        //                SegundoValor = "NOTIFICACIONES",
        //                Vistas = new List<Vista>(){ new Vista(){ Nombre= string.Empty, URL= "Configuracion/Notificaciones/", }},
        //        },
        //    };

        //    ListModulos.Add(ObjModulo);
        //    return ListModulos;
        //}


        /// <summary>
        /// Método que obtiene el menú de Gestión de incidentes
        /// </summary>
        /// <returns>Lista de Modulos</returns>
        /// COMENTADO POR ANGEL
        //public static List<Modulo> ObtenerMenuGestionIncidentes()
        //{
        //    string codigoSistema = ConfigurationManager.AppSettings["CODIGO_IDENTIFICADOR_SISTEMA"];
        //    List<Modulo> ListModulos = new List<Modulo>();
        //    Modulo ObjModulo = new Modulo();
        //    ObjModulo.Codigo = "mdlGestionIncidentes";
        //    ObjModulo.CodigoSistema = codigoSistema;
        //    ObjModulo.SegundoValor = "RECORDS/INVESTIGACION";
        //    ObjModulo.SubModulos = new List<Modulo>(){
        //                            //new Modulo(){
        //                            //        Codigo = "mnuAnuncioIncidentes",
        //                            //        Nombre = RecordsResource.EtiquetaRecordMenu,
        //                            //        Icono = "",
        //                            //        SegundoValor = "RECORDS",
        //                            //        Vistas = new List<Vista>(){ new Vista(){ Nombre= string.Empty, URL= string.Empty, }},
        //                            //        SubModulos = new List<Modulo>(){
        //                            //            new Modulo(){
        //                            //                Codigo = "submnuIngreso",
        //                            //                Nombre = "Ingreso de Anuncio",
        //                            //                Icono = "",
        //                            //                Vistas = new List<Vista>(){ new Vista(){ Nombre= string.Empty, URL="Seguimiento/Records/RegistroRecord?Param=009" } }
        //                            //            },
        //                            //            new Modulo(){
        //                            //                Codigo = "submnuFlujo",
        //                            //                Nombre = "Bandeja de Anuncios",
        //                            //                Icono = "",
        //                            //                Vistas = new List<Vista>(){ new Vista(){ Nombre= string.Empty, URL="Seguimiento/Records/" } }
        //                            //            }
        //                            //        }
        //                            //    },
        //                            new Modulo(){
        //                                    Codigo = "mnuInvestigacion",
        //                                    Nombre = "Investigación de Incidentes",
        //                                    Icono = "",
        //                                    SegundoValor = "INVESTIGACION",
        //                                    Vistas = new List<Vista>(){ new Vista(){ Nombre= string.Empty, URL= string.Empty, }},
        //                                    SubModulos = new List<Modulo>(){
        //                                        new Modulo(){
        //                                            Codigo = "submnuFlujo",
        //                                            Nombre = "Flujo de Investigación",
        //                                            Icono = "",
        //                                            Vistas = new List<Vista>(){ new Vista(){ Nombre= string.Empty, URL="Seguimiento/Investigacion/" } }
        //                                        }
        //                                    }
        //                            },
        //                            new Modulo(){
        //                                    Codigo = "mnuInformes",
        //                                    Nombre = "Informes de Investigación",
        //                                    Icono = "",
        //                                    SegundoValor = "INVESTIGACION",
        //                                    Vistas = new List<Vista>(){ new Vista(){ Nombre= string.Empty, URL= "Seguimiento/Investigacion/FormularioInformes" }},
        //                            },
        //                    };

        //    ListModulos.Add(ObjModulo);
        //    return ListModulos;
        //}

        /// <summary>
        /// Método que aplica la configuración del menú
        /// </summary>
        /// <param name="usuario">Cuenta del Usuario</param>
        /// <param name="menu">Lista de Modulos del Menú</param>
        /// <returns>Lista de Modulos aplicados</returns>
        /// COMENTADO POR ANGEL
        //public static List<Modulo> AplicarMenuSecundario(CuentaUsuario usuario, List<Modulo> menu)
        //{
        //    var listaModulos = new List<Modulo>();
        //    if (usuario.Modulos.FirstOrDefault().Codigo == null)
        //    {
        //        var permisos = usuario.Modulos.FirstOrDefault().Vistas.Select(v => v.URL);

        //        List<string> listaUrlPermiso = usuario.Modulos.FirstOrDefault().Vistas.OrderBy(item => (string.IsNullOrEmpty(item.Nombre) ? item.URL : item.Nombre)).Select(v => v.URL).ToList();
        //        listaUrlPermiso = listaUrlPermiso.Distinct().ToList();

        //        List<string> lstControladores = new List<string>();
        //        foreach (var item in listaUrlPermiso)
        //        {
        //            if (item.Length > 0 && menu.Count > 0)
        //            {
        //                var tmpURL = item.Split('/');
        //                if (tmpURL.Length > 0 && menu.FirstOrDefault().SegundoValor.Contains(tmpURL[1].ToUpper()))
        //                {
        //                    lstControladores.Add(item);
        //                }
        //            }
        //        }


        //        foreach (Modulo modulo in menu)
        //        {
        //            var newSubmodulo = new List<Modulo>();
        //            foreach (var submodulo in modulo.SubModulos)
        //            {
        //                var lstUrlSubModulo = submodulo.SegundoValor.Split('/');
        //                bool hasAccess = false;

        //                foreach (var itemSub in lstUrlSubModulo)
        //                {
        //                    hasAccess = lstControladores.Any(x => x.ToUpper().Contains(itemSub));
        //                    if (hasAccess)
        //                    {
        //                        break;
        //                    }
        //                }


        //                if (hasAccess)
        //                {
        //                    var url = HttpContext.Current.Request.Url;
        //                    var port = url.Port != 80 ? (":" + url.Port) : string.Empty;
        //                    UrlHelper urlHelper = new UrlHelper(HttpContext.Current.Request.RequestContext);
        //                    string urlRelative = string.Format("{0}://{1}{2}{3}", url.Scheme, url.Host, port, urlHelper.Content("~/"));
        //                    submodulo.Vistas.ForEach(v => v.URL = v.URL.ToLower().StartsWith("http") ? v.URL : (urlRelative + v.URL));

        //                    var tmpNewSubModulo = new Modulo();
        //                    tmpNewSubModulo.Nombre = submodulo.Nombre;
        //                    tmpNewSubModulo.Icono = submodulo.Icono;
        //                    tmpNewSubModulo.Vistas = submodulo.Vistas;


        //                    var newSubSubmodulo = new List<Modulo>();
        //                    if (submodulo.SubModulos != null)
        //                    {
        //                        foreach (var subsubmodulo in submodulo.SubModulos)
        //                        {
        //                            //var hasAccess2 = subsubmodulo.Vistas.Any(v => lstControladores.Any(p => v.URL.EndsWith(p)));
        //                            var hasAccess2 = lstControladores.Any(x => x == subsubmodulo.Vistas.FirstOrDefault().URL);
        //                            subsubmodulo.Vistas.ForEach(v => v.URL = v.URL.ToLower().StartsWith("http") ? v.URL : (urlRelative + v.URL));

        //                            if (hasAccess2)
        //                            {
        //                                newSubSubmodulo.Add(subsubmodulo);
        //                            }
        //                        }

        //                        if (newSubSubmodulo.Any())
        //                        {
        //                            tmpNewSubModulo.SubModulos = new List<Modulo>();
        //                            tmpNewSubModulo.SubModulos = newSubSubmodulo;

        //                            //newSubmodulo.SubModulos = newSubSubmodulo;
        //                            /*var existe = listaModulos.Any(x => x.Nombre == modulo.Nombre);
        //                            if (!existe)
        //                            {
        //                                listaModulos.Add(modulo);
        //                            }*/
        //                        }
        //                    }

        //                    if (tmpNewSubModulo.Vistas.FirstOrDefault().URL != null || (tmpNewSubModulo.SubModulos != null && tmpNewSubModulo.SubModulos.Count > 0))
        //                        newSubmodulo.Add(tmpNewSubModulo);
        //                }
        //            }


        //            if (newSubmodulo.Any())
        //            {
        //                modulo.SubModulos = newSubmodulo;
        //                var existe = listaModulos.Any(x => x.Nombre == modulo.Nombre);
        //                if (!existe)
        //                {
        //                    listaModulos.Add(modulo);
        //                }
        //                //listaModulos.Add(modulo);
        //            }
        //        }
        //    }

        //    return listaModulos;
        //}

        #endregion
    }
}