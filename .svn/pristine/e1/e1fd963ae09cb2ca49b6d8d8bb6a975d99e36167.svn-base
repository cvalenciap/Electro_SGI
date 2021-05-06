using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Aplicacion.Core.Installers
{
    public class ProxyServiceInstaller : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            var assemblyName = System.Configuration.ConfigurationManager.AppSettings["SGSAProxyAssembly"];
            if (assemblyName != null && assemblyName != "")
            {
                container.Register(Classes.FromAssemblyNamed(assemblyName).Pick().LifestyleTransient().WithService.DefaultInterfaces());
            }
        }
    }
}
