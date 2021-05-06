using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;
using System.Web.Mvc;

namespace Pe.ElectroPeru.SGI.Aplicacion.Core.Installers
{
    public class ControllersInstaller : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            var assemblyName = System.Configuration.ConfigurationManager.AppSettings["SGSAConstrollerAssembly"];
            if (assemblyName != null && assemblyName != "")
            {
                container.Register(Classes.FromAssemblyNamed(assemblyName)
                                    .BasedOn<IController>()
                                    .LifestyleTransient());
            }
        }
    }
}
