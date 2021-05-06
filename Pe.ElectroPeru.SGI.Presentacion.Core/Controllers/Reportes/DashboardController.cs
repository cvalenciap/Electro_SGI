using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Reportes;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Reportes;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Reportes;
using Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Base;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Reportes.Dashboard;
using Pe.ElectroPeru.SGI.Presentacion.Recursos.Base;
using Pe.ElectroPeru.SGI.Transversal.Core.Constante;
using Pe.ElectroPeru.SGI.Transversal.Core.Util;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Reportes
{
    [AppPresentationError]
    public class DashboardController : BaseController
    {
        public IParametroValorService parametroValorService { get; set; }

        public IIndicadorService indicadorService { get; set; }

        public IDashboardService dashboardService { get; set; }

        DashboardModel modelo = new DashboardModel();

        DashboardRequest filtro = new DashboardRequest();

        public ActionResult Index()
        {
            modelo = new DashboardModel();
            modelo.ListaTipoPeriodicidad = new List<SelectListItem>();
            modelo.ListaFiltroPeriodicidad = new List<SelectListItem>();
            modelo.ListaIndicador = new List<SelectListItem>();
            modelo.Dashboard = new DashboardResponse();

            modelo.ListaTipoPeriodicidad.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaTodos });
            modelo.ListaTipoPeriodicidad.AddRange(parametroValorService.BuscarValorPorSeccionParametro(new ParametroValorRequest()
            {
                CodigoIdentificador = DatosConstantes.ParametrosGenerales.Periodicidad,
                CodigoEmpresa = DatosConstantes.Empresa.CodigoElectroPeru,
                CodigoSistema = DatosConstantes.Sistema.CodigoSGI,
                IndicadorEmpresa = true,
                CodigoIdioma = obtenerCodigoIdioma()
            }).Result.Select(x => new SelectListItem()
            {
                Value = x.CodigoValorString,
                Text = x.Valor,
                Selected = false
            }));

            modelo.ListaIndicador.AddRange(indicadorService.BuscarIndicador(new BandejaIndicadorRequest()
            {
                CodigoIdioma = obtenerCodigoIdioma(),
                EstadoRegistro = DatosConstantes.EstadoRegistro.Activo,
            }).Result.Select(x => new SelectListItem()
            {
                Value = x.CodigoIndicador.ToString(),
                Text = x.DescripcionIndicador,
                Selected = false
            }));

            return View(modelo);
        }

        private string Idioma()
        {
            string idioma = "";
            idioma = obtenerCodigoIdioma();
            return idioma;
        }

        public JsonResult ObtenerFiltroPeriodicidad(string tipo = "6")
        {
            modelo = new DashboardModel();
            modelo.ListaFiltroPeriodicidad = new List<SelectListItem>();

            string tipoPeriodicidad = "";

            switch(tipo)
            {
                case "2":
                    tipoPeriodicidad = DatosConstantes.ParametrosGenerales.Semana;
                    break;
                case "3":
                    tipoPeriodicidad = DatosConstantes.ParametrosGenerales.Mes;
                    break;
                case "4":
                    tipoPeriodicidad = DatosConstantes.ParametrosGenerales.Trimestre;
                    break;
                case "5":
                    tipoPeriodicidad = DatosConstantes.ParametrosGenerales.Semestre;
                    break;                
            }

            modelo.ListaFiltroPeriodicidad.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaTodos });
            modelo.ListaFiltroPeriodicidad.AddRange(parametroValorService.BuscarValorPorSeccionParametro(new ParametroValorRequest()
            {
                CodigoIdentificador = tipoPeriodicidad,
                CodigoEmpresa = DatosConstantes.Empresa.CodigoElectroPeru,
                CodigoSistema = DatosConstantes.Sistema.CodigoSGI,
                IndicadorEmpresa = true,
                CodigoIdioma = obtenerCodigoIdioma()
            }).Result.Select(x => new SelectListItem()
            {
                Value = x.CodigoValorString,
                Text = x.Valor,
                Selected = false
            }));
           
            return Json(modelo.ListaFiltroPeriodicidad, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Consultar(Guid? codigoIndicador, string tipoGrafico, string subTipoPeriodicidad, int tipoPeriodicidad, string anio, string fecha)
        {
            filtro = new DashboardRequest();
            modelo = new DashboardModel();
            modelo.Dashboard = new DashboardResponse();
            modelo.ListaFiltroPeriodicidad = new List<SelectListItem>();

            modelo.dataDashboard1 = new List<Charts>();
            modelo.dataDashboard2 = new List<Charts>();
            modelo.dataDashboard3 = new List<Charts>();
            modelo.dataDashboard4 = new List<Charts>();
            
            filtro.CodigoIdioma = obtenerCodigoIdioma();            
            filtro.Anio = anio;
            filtro.CodigoSubTipoPeriodicidad = subTipoPeriodicidad;
            filtro.TipoPeriodicidad = tipoPeriodicidad;
            filtro.Fecha = fecha;
            filtro.CodigoIndicador = codigoIndicador;
                      
            modelo.dataDashboard1 = llenarDashboard("1", filtro);
            modelo.dataDashboard2 = llenarDashboard("2", filtro);
            modelo.dataDashboard3 = llenarDashboard("3", filtro);
            modelo.dataDashboard4 = llenarDashboard("4", filtro);
            
            modelo.Dashboard.cantidad = modelo.dataDashboard1.Count + modelo.dataDashboard2.Count + modelo.dataDashboard3.Count + modelo.dataDashboard4.Count;

            return Json(modelo, JsonRequestBehavior.AllowGet);
        }

        private List<Charts> llenarDashboard(string tipoDashboard, DashboardRequest filtro)
        {
            List<Charts> dataDashboard = new List<Charts>();

            filtro.TipoDashboard = tipoDashboard;

            dataDashboard.AddRange(dashboardService.Buscar(filtro).Result.Select(x => new Charts()
            {
                label = x.TipoPeriodicidad,
                y = x.Valor
            }));

            return dataDashboard;
        }
    }
}
