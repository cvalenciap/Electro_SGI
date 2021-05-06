using Castle.MicroKernel.Facilities;
using Castle.MicroKernel.Registration;
using Pe.ElectroPeru.SGI.Transversal.Core.Base;
using Pe.ElectroPeru.SGI.Transversal.Core.Security;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pe.ElectroPeru.SGI.Aplicacion.Core.Factory
{
    public class EnvironmentFacility : AbstractFacility
    {
        /// <summary>
        /// 
        /// </summary>
        protected override void Init()
        {
            //Kernel.Register(Component.For<IEntornoActualAplicacion>()
            //    .ImplementedBy<EntornoActualAplicacion>()
            //    .LifestylePerWebRequest());
            string valueLifestylePerThread = ConfigurationManager.AppSettings["LifestylePerThread"];
            bool isLifestylePerThread = !string.IsNullOrEmpty(valueLifestylePerThread) && bool.Parse(valueLifestylePerThread);

            if (isLifestylePerThread)
            {
                Kernel.Register(Component.For<IEntornoActualAplicacion>()
                    .ImplementedBy<EntornoActualAplicacion>()
                    .LifestyleSingleton());
            }
            else
            {
                Kernel.Register(Component.For<IEntornoActualAplicacion>()
                    .ImplementedBy<EntornoActualAplicacion>()
                    .LifestylePerWebRequest());
            }
        }
    }
}
