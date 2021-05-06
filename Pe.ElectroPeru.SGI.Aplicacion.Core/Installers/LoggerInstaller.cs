using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;

namespace Pe.ElectroPeru.SGI.Aplicacion.Core.Installers
{
    public class LoggerInstaller : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            //container.AddFacility<LoggingFacility>(f => f.UseLog4Net());
        }
    }
}
