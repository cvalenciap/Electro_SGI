using Castle.Windsor;
using Castle.Windsor.Installer;
using Castle.MicroKernel.Registration;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Politicas;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Linq;
using System.ServiceProcess;
using System.Text;
using System.Timers;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.NotificacionAutomatica;
using System.Reflection;
using System.IO;
using Pe.ElectroPeru.SGI.Transversal.Core.Constante;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Tareas;
using Pe.ElectroPeru.SGI.Transversal.Core.Base;
using System.Threading.Tasks;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Politicas;
using Pe.ElectroPeru.SGI.Infraestructura.CommandModel.Politicas;
using Pe.ElectroPeru.SGI.Infraestructura.Core.CommandContract.Politicas;


namespace Pe.ElectroPeru.SGI.Distribucion.EnvioNotificaciones
{
    public partial class EnvioNotificaciones : ServiceBase
    {
        /// <summary>
        /// Contenedor Windsor
        /// </summary>
        private static IWindsorContainer container;

        /// <summary>  
        /// Valida si el servicio esta siendo ejecutado para que se vuelva a ejecutar
        /// </summary>
        private static bool ejecutandoServicio = false; 

        #region Properties
        /// <summary>
        /// timer
        /// </summary>
        System.Timers.Timer timer = new System.Timers.Timer();
        /// <summary>
        ///
        /// </summary>
        private static EnvioNotificaciones envioNotificaciones { get; set; }        
        /// <summary>
        /// servicio para el envio de notificaciones
        /// </summary>
        public INotificacionAutomaticaService notificacionAutomaticaService { get; set; }        
        /// <summary>
        /// dblDelayInSeconds Establece cada cuanto tiempo se ejecutara el servicio
        /// </summary>
        double dblDelayInSeconds = 60000;
        #endregion

        /// <summary>
        /// Inicializa la sincronizacion de datos
        /// </summary>

        public EnvioNotificaciones()
        {
            try
            {
                InitializeComponent();
                timer.Interval = dblDelayInSeconds;
                timer.Elapsed += new ElapsedEventHandler(OnElapsedTime);
                               
            }
            catch (Exception ex)
            {
            }

        }

        /// <summary>
        /// Main
        /// </summary>
        static void Main()
        {
            try
            {
                container = new WindsorContainer().Install(FromAssembly.Named("Pe.ElectroPeru.SGI.Aplicacion.Core"));
                container.Kernel.Register(Castle.MicroKernel.Registration.Component.For<EnvioNotificaciones>()
                                        .ImplementedBy<EnvioNotificaciones>()
                                        .LifestylePerThread());
                envioNotificaciones = container.Kernel.Resolve<EnvioNotificaciones>();

                var entorno = container.Kernel.Resolve<IEntornoActualAplicacion>();
                entorno.UsuarioSession = "INFRA.user";
                entorno.Terminal = "localhost";
                entorno.CodigoEmpresa = "190E8EF5-11E2-45C7-BC4F-8A673B4640B5";
                entorno.CodigoSistema = "A4C353EF-A593-4E59-8366-CA1BEC446115";

                System.ServiceProcess.ServiceBase[] servicesToRun;
                servicesToRun = new System.ServiceProcess.ServiceBase[] { new EnvioNotificaciones() };
                System.ServiceProcess.ServiceBase.Run(servicesToRun);                
            }
            catch (Exception ex)
            {  
            }
        }

        /// <summary>
        /// OnStart
        /// </summary>
        /// <param name="args"></param>
        protected override void OnStart(string[] args)
        {
            timer.Start();
        }

        /// <summary>
        /// OnStop
        /// </summary>
        protected override void OnStop()
        {
            timer.Stop();
        }

        /// <summary>
        /// OnElapsedTime
        /// </summary>
        /// <param name="source"></param>
        /// <param name="e"></param>
        private void OnElapsedTime(object source, ElapsedEventArgs e)
        {
            if (!ejecutandoServicio)
            {
                ejecutandoServicio = true;
                try
                {                    
                    var date = DateTime.Now;
                     
                    #region ACCIONES
                    if (date.DayOfWeek == DayOfWeek.Monday && date.Hour == 6 && date.Minute == 0)
                    {                         
                        Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("----Responsable----");

                        Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("----Notificacion Total----");          
                    }
                    #endregion

                    #region Visita Gerencial
                    var dateVG = DateTime.Today.AddDays(1);

                    
                    #endregion

                    timer.Stop();
                }

                catch (Exception ex)
                {
                    Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("----------------------------------");
                    Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("----Exception----" + ex.Message);
                    Pe.ElectroPeru.SGI.Transversal.Core.Util.Utilitario.LogError("----------------------------------");                                                  
                    timer.Close();
                }

                finally
                {
                    timer.Start();
                    ejecutandoServicio = false;
                }
            }
        }        
    }
}
