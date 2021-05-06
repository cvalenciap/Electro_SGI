using System.Web.Mvc;

namespace Pe.ElectroPeru.SGI.Presentacion
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}