using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Politicas;
using Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Base;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Mantenimiento.IngresoAccionEstrategicaSectorial;
using Pe.ElectroPeru.SGI.Presentacion.Recursos.Base;
using Pe.ElectroPeru.SGI.Transversal.Core.Constante;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
//using Pe.GyM.Security.Web.Session;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Mantenimiento
{
    /// <summary>
    /// Controladora de Ingreso de AccionEstrategicaSectoriales
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 05122017
    /// Modificación:   
    /// </remarks>
    [AppPresentationError]
    public class IngresoAccionEstrategicaSectorialController : BaseController
    {
        #region Propiedades
        /// <summary>
        /// Servicio de Parametros
        /// </summary>
        public IParametroValorService parametroValorService { get; set; }
        
        /// <summary>
        /// Servicio de Área
        /// </summary>
        public IObjetivoEstrategicoFonafeService objetivoEstrategicoFonafeService { get; set; }
        /// <summary>
        /// Servicio de Inspección
        /// </summary>
        public IAccionEstrategicaSectorialService AccionEstrategicaSectorialService { get; set; }      
        /// <summary>
        /// Inspección Contratista
        /// </summary>
        public IAccionEstrategicaSectorialDetalleService AccionEstrategicaSectorialDetalleService { get; set; }        
        #endregion

        #region Vistas
        /// <summary>
        /// Bandeja de AccionEstrategicaSectoriales
        /// </summary>
        /// <param name="filtro"></param>
        /// <returns></returns>
        public ActionResult Index(AccionEstrategicaSectorialRequest filtro)
        {
            IngresoAccionEstrategicaSectorialModel modelo = new IngresoAccionEstrategicaSectorialModel();
            filtro.CodigoIdioma = obtenerCodigoIdioma();

            if (filtro.CodigoAccionEstrategicaSectorial.HasValue)
            {
                modelo.AccionEstrategicaSectorial = AccionEstrategicaSectorialService.ObtenerAccionEstrategicaSectorial(new AccionEstrategicaSectorialRequest()
                {
                    CodigoAccionEstrategicaSectorial = filtro.CodigoAccionEstrategicaSectorial,
                    CodigoIdioma = filtro.CodigoIdioma
                }).Result;    
            }

            modelo.ListaObjetivoEstrategicoFonafe.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaSeleccionar });
            modelo.ListaObjetivoEstrategicoFonafe.AddRange(objetivoEstrategicoFonafeService.BuscarObjetivoEstrategicoFonafe(new BandejaObjetivoEstrategicoFonafeRequest()
            {
                CodigoIdioma = filtro.CodigoIdioma,
                EstadoRegistro = DatosConstantes.EstadoRegistro.Activo,
            }).Result.Select(x => new SelectListItem()
            {
                Value = x.CodigoObjetivoEstrategicoFonafe.ToString(),
                Text = x.NombreObjetivoEstrategicoFonafe,
                Selected = false
            }));

            return View(modelo);
        }
        #endregion

        #region Métodos

        #region AccionEstrategicaSectorial
        /// <summary>
        /// Permite registrar o actualizar AccionEstrategicaSectoriales
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public JsonResult RegistrarAccionEstrategicaSectorial(AccionEstrategicaSectorialRequest data)
        {
            var response = AccionEstrategicaSectorialService.RegistrarAccionEstrategicaSectorial(data);
            return Json(response);
        }
        /// <summary>
        /// Permite anular una Inspección
        /// </summary>
        /// <param name="">Entidad Observacion Planeada</param>
        /// <returns>valor booleano con el resultado de la operacion</returns>
        public JsonResult EliminarAccionEstrategicaSectorial(AccionEstrategicaSectorialRequest data)
        {
            data.CodigoIdioma = obtenerCodigoIdioma();
            var response = AccionEstrategicaSectorialService.EliminarAccionEstrategicaSectorial(data);
            return Json(response);
        }

        public JsonResult ReactivarAccionEstrategicaSectorial(AccionEstrategicaSectorialRequest data)
        {
            var response = AccionEstrategicaSectorialService.ReactivarAccionEstrategicaSectorial(data);            
            return Json(response);
        }
        #endregion       

        #region AccionEstrategicaSectorialDetalle
        /// <summary>
        /// Permite registrar o actualizar Inspección Contratista
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public JsonResult RegistrarAccionEstrategicaSectorialDetalle(AccionEstrategicaSectorialDetalleRequest data)
        {
            data.CodigoIdioma = obtenerCodigoIdioma();  
            var response = AccionEstrategicaSectorialDetalleService.RegistrarAccionEstrategicaSectorialDetalle(data);
            return Json(response);
        }

        /// <summary>
        /// Permite registrar o actualizar Inspección Contratista
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public JsonResult EliminarAccionEstrategicaSectorialDetalle(AccionEstrategicaSectorialDetalleRequest data)
        {
            var response = AccionEstrategicaSectorialDetalleService.EliminarAccionEstrategicaSectorialDetalle(data);
            return Json(response);
        }

        //<summary>
        //Realiza la búsqueda de Expediente Medico Restriccion
        //</summary>
        //<param name="filtro">Filtro de búsqueda</param>
        //<returns>Listado de  Expediente Medico Restriccion</returns>
        public JsonResult BuscarAccionEstrategicaSectorialDetalle(AccionEstrategicaSectorialDetalleRequest data)
        {
            data.CodigoIdioma = obtenerCodigoIdioma();

            var response = AccionEstrategicaSectorialDetalleService.BuscarAccionEstrategicaSectorialDetalle(data);
            return Json(response);
        }

        #endregion

        #endregion
    }
}
