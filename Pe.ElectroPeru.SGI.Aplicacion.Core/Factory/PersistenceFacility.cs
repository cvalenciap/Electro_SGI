using Castle.MicroKernel.Facilities;
using Castle.MicroKernel.Registration;
using Pe.ElectroPeru.SGI.Infraestructura.Core.Context;
using System.Configuration;

namespace Pe.ElectroPeru.SGI.Aplicacion.Core.Factory
{
    /// <summary>
    /// Facilitador de la implementación del objeto de persistencia
    /// </summary>
    /// <remarks>
    /// Creación:   GMD 22122014 <br />
    /// Modificación:            <br />
    /// </remarks>
    public class PersistenceFacility : AbstractFacility
    {
        /// <summary>
        /// 
        /// </summary>
        protected override void Init()
        {
            string valueLifestylePerThread = ConfigurationManager.AppSettings["LifestylePerThread"];
            bool isLifestylePerThread = !string.IsNullOrEmpty(valueLifestylePerThread) && bool.Parse(valueLifestylePerThread);

            if (isLifestylePerThread)
            {
                Kernel.Register(Component.For<IDbContextProvider>()
                                 .ImplementedBy<SGIDbContextProvider>()
                                 .LifestylePerThread());
            }
            else
            {
                Kernel.Register(Component.For<IDbContextProvider>()
                                 .ImplementedBy<SGIDbContextProvider>()
                                 .LifestylePerWebRequest());
            }
        }
    }
}
