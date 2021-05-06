using System.Web.Mvc;

namespace Pe.ElectroPeru.SGI.Presentacion.Areas.Politicas
{
    public class PoliticasAreaRegistration : AreaRegistration
    {
        public override string AreaName
        {
            get
            {
                return "Politicas";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context)
        {
            context.MapRoute(
                "Politicas_default",
                "Politicas/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
