using Castle.Windsor;
using Castle.Windsor.Installer;
//using Pe.GyM.Security.Web.Session;
using Pe.ElectroPeru.SGI.Aplicacion.Core.Factory;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract;
using Pe.ElectroPeru.SGI.Aplicacion.Service.Contractual;
using Pe.ElectroPeru.SGI.Transversal.Core.Base;
using Pe.ElectroPeru.SGI.Transversal.Core.Constante;
using System;
using System.Configuration;
using System.Globalization;
using System.Threading;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using System.Linq;
using Pe.ElectroPeru.SGI.Transversal.Mapeo;

namespace Pe.ElectroPeru.SGI.Presentacion
{
    // Nota: para obtener instrucciones sobre cómo habilitar el modo clásico de IIS6 o IIS7, 
    // visite http://go.microsoft.com/?LinkId=9394801

    public class MvcApplication : System.Web.HttpApplication
    {
        private static IWindsorContainer container;
        private static string APPLICATION_NAME = "Pe.ElectroPeru";

        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            General.Create();

            WebApiConfig.Register(GlobalConfiguration.Configuration);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            BootstrapContainer();

            ValueProviderFactories.Factories.Remove(ValueProviderFactories.Factories.OfType<JsonValueProviderFactory>().FirstOrDefault());
            ValueProviderFactories.Factories.Add(new CustomJsonValueProviderFactory());

            //COMENTADO POR ANGEL
            //HttpGyMSessionContext.SharedSession(APPLICATION_NAME, this.Modules);
        }
        protected void Application_End()
        {
            container.Dispose();
        }

        protected void Application_AcquireRequestState(Object sender, EventArgs e)
        {
            //COMENTADO POR ANGEL
            //var cuenta = HttpGyMSessionContext.CurrentAccount();
            //if (cuenta != null)
            //{
            //    cuenta.CodigoEmpresa = ConfigurationManager.AppSettings["CODIGO_EMPRESA"];
            //    cuenta.CodigoSistema = ConfigurationManager.AppSettings["CODIGO_SISTEMA"];

            //    var entorno = container.Resolve<IEntornoActualAplicacion>();
            //    entorno.UsuarioSession = cuenta.Alias;
            //    entorno.CodigoEmpresa = cuenta.CodigoEmpresa;
            //    entorno.CodigoSistema = cuenta.CodigoSistema;
            //    entorno.Terminal = HttpContext.Current.Request.ServerVariables["HTTP_X_FORWARDED_FOR"]
            //                        ?? HttpContext.Current.Request.UserHostAddress;
            //}


            HttpContext context = HttpContext.Current;
            string codigoCultura = DatosConstantes.ParametrosGenerales.CodigoIdiomaPorDefecto;

            if (context != null && context.Session != null)
            {
                if (Session["CodigoIdioma"] != null)
                {
                    codigoCultura = Session["CodigoIdioma"].ToString();
                }
            }

            //Cambio de Cultura
            CultureInfo cultureInfo = null;
            cultureInfo = new CultureInfo(codigoCultura);
            if (cultureInfo == null)
            {
                cultureInfo = new CultureInfo(codigoCultura);
            }
            //Finally setting culture for each request
            Thread.CurrentThread.CurrentUICulture = cultureInfo;
            Thread.CurrentThread.CurrentCulture = CultureInfo.CreateSpecificCulture(cultureInfo.Name);


        }

        protected void Session_Start(object sender, EventArgs e)
        {
            HttpCookie myCookie = new HttpCookie("CLIENT_SITE_TOKEN");
            myCookie.Value = ConfigurationManager.AppSettings["CLIENT_SITE_TOKEN"];
            //myCookie.Expires = DateTime.Now.AddDays(1d);
            HttpContext.Current.Response.Cookies.Add(myCookie);
        }

        private static void BootstrapContainer()
        {
            //Database.SetInitializer<SCCDbContextProvider>(new DbContextInitializer());
            //Database.SetInitializer<ApplicationAuditDbContextProvider>(new CreateDatabaseIfNotExists<ApplicationAuditDbContextProvider>());
            container = new WindsorContainer()
                .Install(FromAssembly.Named("Pe.ElectroPeru.SGI.Aplicacion.Core"));
            var controllerFactory = new WindsorControllerFactory(container.Kernel);
            ControllerBuilder.Current.SetControllerFactory(controllerFactory);
            //container.Kernel.ComponentCreated += ((c, i) =>
            //{
            //    if (i is IContratoService)
            //    {
            //        ((ContratoService)i).ResolverRefernciaCircular();
            //    }

            //});

            //ControllerBuilder.Current.SetControllerFactory(controllerFactory);
        }
    }
}