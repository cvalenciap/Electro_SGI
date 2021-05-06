using System.Web.Mvc;
//using Pe.GyM.Security.Web.Session;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Base
{
    /// <summary>
    /// Controladora de Cierre de sesión
    /// </summary>
    /// <remarks>
    /// Creación: 	GMD 20140508 <br />
    /// Modificación: 	 <br />
    /// </remarks>
    public class LogOutController : Controller
    {
        /// <summary>
        /// Muestra la vista principal
        /// </summary>
        /// <returns>Vista principal de la opción</returns>
        /// COMENTADO POR ANGEL
        //public ActionResult Index()
        //{
        //    return HttpGyMSessionContext.LogOut();
        //}
        //public JsonResult VerificaSession()
        //{
        //    Pe.ElectroPeru.SGI.Aplicacion.Core.Base.ProcessResult<string> retorna = new Pe.ElectroPeru.SGI.Aplicacion.Core.Base.ProcessResult<string>();
        //    var x = HttpGyMSessionContext.CurrentAccount();
        //    retorna.Result = "";
        //    if (x == null)
        //    {
        //        retorna.IsSuccess = true;
        //        retorna.Result = HttpGyMSessionContext.PaginaLogeo();
        //    }
        //    return Json(retorna);

        //}

        public string LogOutClient()
        {
            Session.Clear();
            Session.Abandon();
            return "";
        }
    }
}
