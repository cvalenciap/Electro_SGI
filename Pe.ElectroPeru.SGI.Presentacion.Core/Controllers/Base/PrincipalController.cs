using System.Web.Mvc;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Politicas;
using System.Linq;
using Pe.ElectroPeru.SGI.Transversal.Core.Constante;
using System.Globalization;
using System.Threading;
using Pe.ElectroPeru.SGI.Transversal.Core.Util;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Seguridad;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Seguridad;
using System;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Sistema;
using System.Web.Security;
using System.Configuration;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Base
{
    /// <summary>
    /// Controladora Principal
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 20150318
    /// Modificación:
    /// </remarks>
    /// COMENTADO POR ANGEL
    //[AuthorizeFilter]

    [AppPresentationError]
    public class PrincipalController : BaseController
    {
        #region Propiedades

        public IUsuariosService _usuariosService { get; set; }

        private UsuariosResponse usuarioResponse = new UsuariosResponse();

        public IPoliticaService politicaService { get; set; }

        /// <summary>
        /// Servicio de Parámetro Valor
        /// </summary>
        public IParametroValorService parametroValorService { get; set; }

        #endregion

        #region Vistas


        public JsonResult CambiarIdioma(string codigoIdioma)
        {
            if (string.IsNullOrEmpty(codigoIdioma))
            {
                codigoIdioma = DatosConstantes.ParametrosGenerales.CodigoIdiomaEspaniol;
            }
            Session["CodigoIdioma"] = codigoIdioma;

            CultureInfo cultureInfo = null;
            cultureInfo = new CultureInfo(codigoIdioma);
            if (cultureInfo == null)
            {
                cultureInfo = new CultureInfo(codigoIdioma);
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
                CodigoIdioma = codigoIdioma
            }).Result.Select(x => new SelectListItem()
            {
                Value = x.CodigoValorString,
                Text = x.Valor,
                Selected = (x.CodigoValorString == codigoIdioma)
            }).ToList();

            Session["ListaIdioma"] = listaIdioma;

            return Json(new  { IsSuccess = true });
        }


        /// <summary>
        /// Muestra La Vista Principal
        /// </summary>
        /// <returns>Vista Index</returns>
        public ActionResult Index(string codigoIdioma = null, float codigoModulo=0)
        {
            if (Login.Obtener.Usuario.Login() == null)
                return RedirectToAction("Index", "Logeo", new { Area = "Base"});

            Session[Constantes.Sesion.Permisos.Lista_Modulos] = null;
            Session[Constantes.Sesion.Permisos.Lista_Opciones] = null;
            Session[Constantes.Sesion.Permisos.Lista_PermisosControlador] = null;

            codigoModulo = 1;

            FormsAuthentication.SetAuthCookie(Login.Obtener.Usuario.Login(), false);
            var Sistema = _usuariosService.Sistema_x_Token(ConfigurationManager.AppSettings["CLIENT_SITE_TOKEN"], Convert.ToInt32(Login.Obtener.Usuario.Codigo()));
            Login.Envio.Sistema(Sistema.Result.CodigoSistema, Sistema.Result.Nombre, Sistema.Result.Descripcion);

            var permisos_x_sistema = _usuariosService.Usuario_x_Sistema(Login.Obtener.Usuario.Login(), Convert.ToInt32(Login.Obtener.Sistema.Codigo())).Result.ToList();

            if (permisos_x_sistema != null)
            {
                Session[Constantes.Sesion.Permisos.Lista_Modulos] = permisos_x_sistema.GroupBy(m => new { m.CodigoModulo }).Select(x => x.First()).ToList()
                .Select(item => new PermisosSistemaModel.Modulo
                {
                    CodigoModulo = item.CodigoModulo,
                    Nombre = item.Modulo,
                    Glyphicon = item.Glyphicon,
                    RutaImagen = item.RutaImagen,
                    ControladorModulo = item.ControladorModulo,
                    MetodoModulo = item.MetodoModulo
                }).OrderBy(x => x.Orden).ToList();

                Session[Constantes.Sesion.Permisos.Lista_Opciones] = permisos_x_sistema.GroupBy(p => new { p.CodigoModulo, p.OpcionPadre, p.CodigoOpcion, p.Nombre, p.Controlador, p.Metodo }).Select(x => x.First()).ToList()
                .Select(item => new PermisosSistemaModel.Opciones
                {
                    CodigoModulo = item.CodigoModulo,
                    OpcionPadre = item.OpcionPadre,
                    CodigoOpcion = item.CodigoOpcion,
                    Nombre = item.Nombre,
                    Controlador = item.Controlador,
                    Metodo = item.Metodo,
                    Area = item.Area
                }).OrderBy(x => x.Orden).ToList();

                Session[Constantes.Sesion.Permisos.Lista_PermisosControlador] = permisos_x_sistema.GroupBy(p => new { p.Controlador, p.CodigoAccion }).Select(x => x.First()).ToList()
                .Select(item => new PermisosSistemaModel.PermisoControlador
                {
                    Controlador = item.Controlador,
                    CodigoAccion = item.CodigoAccion
                }).ToList();
            }

            if (string.IsNullOrEmpty(codigoIdioma))
            {
                codigoIdioma = DatosConstantes.ParametrosGenerales.CodigoIdiomaEspaniol;
            }

            Session["CodigoIdioma"] = codigoIdioma;

            //Cambio de Cultura
            CultureInfo cultureInfo = null;
            cultureInfo = new CultureInfo(codigoIdioma);
            if (cultureInfo == null)
            {
                cultureInfo = new CultureInfo(codigoIdioma);
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
                CodigoIdioma = codigoIdioma
            }).Result.Select(x => new SelectListItem()
            {
                Value = x.CodigoValorString,
                Text = x.Valor,
                Selected = (x.CodigoValorString == codigoIdioma)
            }).ToList();

            Session["ListaIdioma"] = listaIdioma;

            var listaPriorRedireccion = politicaService.ListaRedireccionarDinamico(new ParametroValorRequest()
            {
                CodigoIdentificador = DatosConstantes.ParametrosGenerales.Redireccionar
            }).Result;

            if (listaPriorRedireccion.Count > 0)
            {                
                var objResultado = listaPriorRedireccion.FirstOrDefault();
                return RedirectToAction(objResultado.Atributo2, objResultado.Atributo1, new { area = objResultado.Atributo3 }); //// REDIRIGE A LO QUE SE CONFIGURA EN PARAMETROS                
            }
            else
            {
                return View();
            }
        }        
        #endregion        
    }
}
