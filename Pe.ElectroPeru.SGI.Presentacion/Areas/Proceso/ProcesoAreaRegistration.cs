using System.Web.Mvc;

namespace Pe.ElectroPeru.SGI.Presentacion.Areas.Proceso
{
    public class ProcesoAreaRegistration : AreaRegistration
    {
        public override string AreaName
        {
            get
            {
                return "Proceso";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context)
        {
            context.MapRoute(
                "Proceso_default",
                "Proceso/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
