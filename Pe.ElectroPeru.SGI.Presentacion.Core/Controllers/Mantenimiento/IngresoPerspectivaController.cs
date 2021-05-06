using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Politicas;
using Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Base;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Mantenimiento.IngresoPerspectiva;
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
    /// Controladora de Ingreso de Perspectivaes
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 05122017
    /// Modificación:   
    /// </remarks>
    [AppPresentationError]
    public class IngresoPerspectivaController : BaseController
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
        public IPerspectivaService perspectivaService { get; set; }      
        /// <summary>
        /// Inspección Contratista
        /// </summary>
        public IPerspectivaDetalleService perspectivaDetalleService { get; set; }        
        #endregion

        #region Vistas
        /// <summary>
        /// Bandeja de Perspectivaes
        /// </summary>
        /// <param name="filtro"></param>
        /// <returns></returns>
        public ActionResult Index(PerspectivaRequest filtro)
        {
            IngresoPerspectivaModel modelo = new IngresoPerspectivaModel();
            filtro.CodigoIdioma = obtenerCodigoIdioma();

            if (filtro.CodigoPerspectiva.HasValue)
            {
                modelo.Perspectiva = perspectivaService.ObtenerPerspectiva(new PerspectivaRequest()
                {
                    CodigoPerspectiva = filtro.CodigoPerspectiva,
                    CodigoIdioma = filtro.CodigoIdioma
                }).Result;    
            }

            modelo.ListaObjetivoEstrategicoFonafe.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaTodos });
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

        #region Perspectiva
        /// <summary>
        /// Permite registrar o actualizar Perspectivaes
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public JsonResult RegistrarPerspectiva(PerspectivaRequest data)
        {
            var response = perspectivaService.RegistrarPerspectiva(data);
            return Json(response);
        }
        /// <summary>
        /// Permite anular una Inspección
        /// </summary>
        /// <param name="">Entidad Observacion Planeada</param>
        /// <returns>valor booleano con el resultado de la operacion</returns>
        public JsonResult EliminarPerspectiva(PerspectivaRequest data)
        {
            data.CodigoIdioma = obtenerCodigoIdioma();
            var response = perspectivaService.EliminarPerspectiva(data);
            return Json(response);
        }

        public JsonResult ReactivarPerspectiva(PerspectivaRequest data)
        {
            var response = perspectivaService.ReactivarPerspectiva(data);            
            return Json(response);
        }
        #endregion       

        #region PerspectivaDetalle
        /// <summary>
        /// Permite registrar o actualizar Inspección Contratista
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public JsonResult RegistrarPerspectivaDetalle(PerspectivaDetalleRequest data)
        {
            data.CodigoIdioma = obtenerCodigoIdioma();  
            var response = perspectivaDetalleService.RegistrarPerspectivaDetalle(data);
            return Json(response);
        }

        /// <summary>
        /// Permite registrar o actualizar Inspección Contratista
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public JsonResult EliminarPerspectivaDetalle(PerspectivaDetalleRequest data)
        {
            var response = perspectivaDetalleService.EliminarPerspectivaDetalle(data);
            return Json(response);
        }

        //<summary>
        //Realiza la búsqueda de Expediente Medico Restriccion
        //</summary>
        //<param name="filtro">Filtro de búsqueda</param>
        //<returns>Listado de  Expediente Medico Restriccion</returns>
        public JsonResult BuscarPerspectivaDetalle(PerspectivaDetalleRequest data)
        {
            data.CodigoIdioma = obtenerCodigoIdioma();

            var response = perspectivaDetalleService.BuscarPerspectivaDetalle(data);
            return Json(response);
        }

        #endregion

        #endregion
    }
}
