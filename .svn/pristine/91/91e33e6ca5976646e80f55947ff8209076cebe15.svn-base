using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Politicas;
using Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Base;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Mantenimiento.IngresoAccionEstrategicaInstitucional;
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
    /// Controladora de Ingreso de AccionEstrategicaInstitucionales
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 05122017
    /// Modificación:   
    /// </remarks>
    [AppPresentationError]
    public class IngresoAccionEstrategicaInstitucionalController : BaseController
    {
        #region Propiedades
        /// <summary>
        /// Servicio de Parametros
        /// </summary>
        public IParametroValorService parametroValorService { get; set; }
        
        /// <summary>
        /// Servicio de Área
        /// </summary>
        public IIndicadorService indicadorService { get; set; }
        /// <summary>
        /// Servicio de Inspección
        /// </summary>
        public IAccionEstrategicaInstitucionalService accionEstrategicaInstitucionalService { get; set; }      
        /// <summary>
        /// Inspección Contratista
        /// </summary>
        public IAccionEstrategicaInstitucionalDetalleService accionEstrategicaInstitucionalDetalleService { get; set; }        
        #endregion

        #region Vistas
        /// <summary>
        /// Bandeja de AccionEstrategicaInstitucionales
        /// </summary>
        /// <param name="filtro"></param>
        /// <returns></returns>
        public ActionResult Index(AccionEstrategicaInstitucionalRequest filtro)
        {
            IngresoAccionEstrategicaInstitucionalModel modelo = new IngresoAccionEstrategicaInstitucionalModel();
            filtro.CodigoIdioma = obtenerCodigoIdioma();

            if (filtro.CodigoAccionEstrategicaInstitucional.HasValue)
            {
                modelo.AccionEstrategicaInstitucional = accionEstrategicaInstitucionalService.ObtenerAccionEstrategicaInstitucional(new AccionEstrategicaInstitucionalRequest()
                {
                    CodigoAccionEstrategicaInstitucional = filtro.CodigoAccionEstrategicaInstitucional,
                    CodigoIdioma = filtro.CodigoIdioma
                }).Result;    
            }            

            modelo.ListaIndicador.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaSeleccionar });
            modelo.ListaIndicador.AddRange(indicadorService.BuscarIndicador(new BandejaIndicadorRequest()
            {
                CodigoIdioma = filtro.CodigoIdioma,
                EstadoRegistro = DatosConstantes.EstadoRegistro.Activo,
            }).Result.Select(x => new SelectListItem()
            {
                Value = x.CodigoIndicador.ToString(),
                Text = x.DescripcionIndicador,
                Selected = false
            }));

            return View(modelo);
        }
        #endregion

        #region Métodos

        #region AccionEstrategicaInstitucional
        /// <summary>
        /// Permite registrar o actualizar AccionEstrategicaInstitucionales
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public JsonResult RegistrarAccionEstrategicaInstitucional(AccionEstrategicaInstitucionalRequest data)
        {
            var response = accionEstrategicaInstitucionalService.RegistrarAccionEstrategicaInstitucional(data);
            return Json(response);
        }
        /// <summary>
        /// Permite anular una Inspección
        /// </summary>
        /// <param name="">Entidad Observacion Planeada</param>
        /// <returns>valor booleano con el resultado de la operacion</returns>
        public JsonResult EliminarAccionEstrategicaInstitucional(AccionEstrategicaInstitucionalRequest data)
        {
            data.CodigoIdioma = obtenerCodigoIdioma();
            var response = accionEstrategicaInstitucionalService.EliminarAccionEstrategicaInstitucional(data);
            return Json(response);
        }

        public JsonResult ReactivarAccionEstrategicaInstitucional(AccionEstrategicaInstitucionalRequest data)
        {
            var response = accionEstrategicaInstitucionalService.ReactivarAccionEstrategicaInstitucional(data);            
            return Json(response);
        }
        #endregion       

        #region AccionEstrategicaInstitucionalDetalle
        /// <summary>
        /// Permite registrar o actualizar Inspección Contratista
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public JsonResult RegistrarAccionEstrategicaInstitucionalDetalle(AccionEstrategicaInstitucionalDetalleRequest data)
        {
            data.CodigoIdioma = obtenerCodigoIdioma();  
            var response = accionEstrategicaInstitucionalDetalleService.RegistrarAccionEstrategicaInstitucionalDetalle(data);
            return Json(response);
        }

        /// <summary>
        /// Permite registrar o actualizar Inspección Contratista
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public JsonResult EliminarAccionEstrategicaInstitucionalDetalle(AccionEstrategicaInstitucionalDetalleRequest data)
        {
            var response = accionEstrategicaInstitucionalDetalleService.EliminarAccionEstrategicaInstitucionalDetalle(data);
            return Json(response);
        }

        //<summary>
        //Realiza la búsqueda de Expediente Medico Restriccion
        //</summary>
        //<param name="filtro">Filtro de búsqueda</param>
        //<returns>Listado de  Expediente Medico Restriccion</returns>
        public JsonResult BuscarAccionEstrategicaInstitucionalDetalle(AccionEstrategicaInstitucionalDetalleRequest data)
        {
            data.CodigoIdioma = obtenerCodigoIdioma();

            var response = accionEstrategicaInstitucionalDetalleService.BuscarAccionEstrategicaInstitucionalDetalle(data);
            return Json(response);
        }

        #endregion

        #endregion
    }
}
