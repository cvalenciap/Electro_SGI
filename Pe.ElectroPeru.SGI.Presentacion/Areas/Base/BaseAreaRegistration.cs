﻿using System.Web.Mvc;

namespace Pe.ElectroPeru.SGI.Presentacion.Areas._Base
{
    public class BaseAreaRegistration : AreaRegistration
    {
        public override string AreaName
        {
            get
            {
                return "Base";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context)
        {
            context.MapRoute(
                "Base_default",
                "Base/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}