using System.Linq;
using System.Web.Mvc;
using System.Web.Routing;

namespace Pe.ElectroPeru.SGI.Presentacion
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.Where(r => r is Route).ToList().ForEach(r =>
            {
                Route router = (Route)r;
                if (router.DataTokens != null && router.DataTokens.ContainsKey("area"))
                {
                    router.DataTokens["Namespaces"] = "Pe.ElectroPeru.SGI.Presentacion.Core.Controllers." + router.DataTokens["area"];
                }
            });

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { areaDefault = "Base", controller = "Principal", action = "Index", id = UrlParameter.Optional }
            ).DataTokens.Add("area", "Base");
        }
    }
}