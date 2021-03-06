using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Politicas;
using Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Base;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Politicas.PlantillaNotificacion;
using System.Web.Mvc;
using System.Linq;
//using Pe.GyM.Security.Web.Session;
using Pe.ElectroPeru.SGI.Transversal.Core.Util;
namespace Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Politicas
{
    /// <summary>
    /// Controlador de Plantilla de Notificación
    /// </summary>
    public class PlantillaNotificacionController : GenericController
    {
        #region Parámetros
        public IPlantillaNotificacionService plantillaNotificacion { get; set; }
        #endregion
        #region Vistas
        /// <summary>
        /// Muestra la vista principal
        /// </summary>
        /// <returns>Vista Principal de la opción</returns>
        /// COMENTADO POR ANGEL
        //public ActionResult Index()
        //{
        //    PlantillaNotificacionModel PlantillaNotif = new PlantillaNotificacionModel();

        //    PlantillaNotif.ControlPermisos = Utilitario.ObtenerControlPermisos(HttpGyMSessionContext.CurrentAccount(), "Politicas/PlantillaNotificacion/");
        //    return View(PlantillaNotif);
            
            
        //}
        #endregion
        #region Vistas Parciales
        /// <summary>
        /// Muestra la vista del Formulario Plantilla Notificacion
        /// </summary>
        /// <param name="codigoPlantillaNotificacion">CÓdigo Plantilla Notificacion</param>
        /// <returns>Vista de Formulario Plantilla Notificacion</returns>
        public ActionResult FormularioPlantillaNotificacion(string codigoPlantillaNotificacion)
        {
            var resultadoPlantillaNotificacion = plantillaNotificacion.BuscarPlantillaNotificacion(new PlantillaNotificacionRequest(){
                CodigoPlantillaNotificacion = codigoPlantillaNotificacion
            });
            var PlantillaNotificacion = resultadoPlantillaNotificacion.Result.FirstOrDefault();
            var modelo = new PlantillaNotificacionFormulario(PlantillaNotificacion);       
           

            return PartialView(modelo);
        }
        #endregion

        #region Json
        /// <summary>
        /// Realiza la busqueda de Plantilla Notificación
        /// </summary>
        /// <param name="filtro">Parametros a buscar</param>
        /// <returns>Lista de Plantillas de Notificación</returns>
        /// COMENTADO POR ANGEL
        //public JsonResult BuscarBandejaPlantillaNotificacion(PlantillaNotificacionRequest filtro)
        //{
        //    var cuenta = HttpGyMSessionContext.CurrentAccount();
        //    if (cuenta != null)
        //    {
        //        filtro.CodigoSistema = cuenta.CodigoSistema;
        //    }
        //    filtro.IndicadorActiva = string.IsNullOrEmpty(filtro.IndicadorActivaFiltro) ? (bool?)null : filtro.IndicadorActivaFiltro.Equals("1");
        //    var resultado = plantillaNotificacion.BuscarPlantillaNotificacion(filtro);
        //    return Json(resultado);
        //}

        /// <summary>
        /// Método que registra plantillas de notificación
        /// </summary>
        /// <param name="data">Información de la plantilla</param>
        /// <returns>Resultado de operación</returns>
        /// COMENTADO POR ANGEL
        //public JsonResult RegistraPlantillaNotificacion(PlantillaNotificacionRequest data)
        //{
        //    if (string.IsNullOrEmpty(data.CodigoSistema))
        //    {
        //        var cuenta = HttpGyMSessionContext.CurrentAccount();
        //        if (cuenta != null)
        //        {
        //            data.CodigoSistema = cuenta.CodigoSistema;
        //        }
        //    }
        //    var resultado = plantillaNotificacion.RegistrarPlantillaNotificacion(data);
        //    return Json(resultado);
        //}
        #endregion

    }
}
