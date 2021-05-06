using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;
using Pe.ElectroPeru.SGI.Aplicacion.Core.Factory;

namespace Pe.ElectroPeru.SGI.Aplicacion.Core.Installers
{
    public class PersistenceInstaller : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            container.AddFacility<PersistenceFacility>();
        }
    }
}
