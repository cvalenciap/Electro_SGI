using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using Microsoft.Reporting.WebForms;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Mantenimiento;
using Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Base;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Mantenimiento.IngresoIndicador;
using Pe.ElectroPeru.SGI.Presentacion.Recursos.Base;
using Pe.ElectroPeru.SGI.Transversal.Core.Constante;
using Pe.ElectroPeru.SGI.Transversal.Core.Util;
using System.Globalization;
using System.Threading;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Politicas;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Sistema;
//using Pe.GyM.Security.Web.Session;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Mantenimiento
{
    /// <summary>
    /// Controladora de Bandeja de Indicadores
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 05122017
    /// Modificación:   
    /// </remarks>
    [AppPresentationError]
    public class BandejaIndicadorController : BaseController
    {
        #region Propiedades
        /// <summary>
        /// Servicio de Parámetro Valor
        /// </summary>
        public IParametroValorService parametroValorService { get; set; }
        /// <summary>
        /// Servicio de Parámetro Valor
        /// </summary>
        public IIndicadorService indicadorService { get; set; }
        /// <summary>
        /// Servicio de Parámetro Valor
        /// </summary>
        public IAreaService areaService { get; set; }

        #endregion

        #region Vistas
        /// <summary>
        /// Bandeja de Indicadores
        /// </summary>
        /// <param name="filtro"></param>
        /// <returns></returns>
        public ActionResult Index(BandejaIndicadorRequest filtro)
        {
            IngresoIndicadorModel modelo = new IngresoIndicadorModel();
            filtro.CodigoIdioma = obtenerCodigoIdioma();


            var requestIndicador = Request.QueryString["indicador"];

            if (requestIndicador != null ||
                (Session["PortalElectro"] != null && Session["PortalElectro"].ToString() == "true"))
            {
                Session["PortalElectro"] = "true";
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
                var cuentaUsuario = "alosno";// HttpGyMSessionContext.CurrentAccount();
                if (Session["CodigoIdioma"] != null)
                {
                    filtro.CodigoIdioma = Session["CodigoIdioma"].ToString();
                }
                else
                {
                    filtro.CodigoIdioma = DatosConstantes.ParametrosGenerales.CodigoIdiomaPorDefecto;
                }
            }

            modelo.ListaArea.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaTodos });
            modelo.ListaArea.AddRange(areaService.BuscarAreaGrilla(new AreaRequest()
            {
                CodigoIdioma = filtro.CodigoIdioma,
                EstadoRegistro = DatosConstantes.EstadoRegistro.Activo,
            }).Result.Select(x => new SelectListItem()
            {
                Value = x.CodigoArea.ToString(),
                Text = x.NombreArea,
                Selected = false
            }));

            modelo.ListaTipoIndicador.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaTodos });
            modelo.ListaTipoIndicador.AddRange(parametroValorService.BuscarValorPorSeccionParametro(new ParametroValorRequest()
            {
                CodigoIdentificador = DatosConstantes.ParametrosGenerales.TipoIndicador,
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
        #endregion

        #region Métodos
        /// <summary>
        /// Permite obtener el listado de Observaciones planeadas
        /// </summary>
        /// <param name="filtro">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public JsonResult BuscarIndicador(BandejaIndicadorRequest filtro)
        {
            var listTmp = (List<PermisosSistemaModel.PermisoControlador>)this.Session[Constantes.Sesion.Permisos.Lista_PermisosControlador];
            var permiso = listTmp.Where(x => x.Controlador == RouteData.Values["controller"].ToString()).Select(s => s.CodigoAccion).ToList()[0];

            filtro.EstadoRegistro = filtro.EstadoRegistroDescripcion == DatosConstantes.ParametrosEstadoRegistro.Activo ? DatosConstantes.EstadoRegistro.Activo : (filtro.EstadoRegistroDescripcion == DatosConstantes.ParametrosEstadoRegistro.Inactivo ? DatosConstantes.EstadoRegistro.Inactivo : null);
            filtro.CodigoIdioma = obtenerCodigoIdioma();

            var response = indicadorService.BuscarIndicador(filtro);

            foreach (var item in response.Result)
            {
                item.Permiso = permiso;
            }
            return Json(response);
        }
        #endregion
    }
}
