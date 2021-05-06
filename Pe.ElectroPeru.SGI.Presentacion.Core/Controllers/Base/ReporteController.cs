using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Base;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Base
{
    /// <summary>
    /// Contoladora de generación de reportes
    /// </summary>
    /// <remarks>
    /// Creación:   GMD 20150510 <br />
    /// Modificación:       <br />
    /// </remarks>
    public class ReporteController : GenericController
    {
        /// <summary>
        /// Ruta de Reportes de SGSA
        /// </summary>
        public static readonly string pathSGSA = ConfigurationManager.AppSettings["SrvReportingSGSAWorkspace"];

        public ActionResult Index()
        {
            var Report = Session["DataReport"] as ReporteViewModel;
            return View(Report);
        }
    }
}
