using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Politicas;
using Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Base;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Mantenimiento.IngresoObjetivoEstrategicoFonafe;
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
    /// Controladora de Ingreso de ObjetivoEstrategicoFonafees
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 05122017
    /// Modificación:   
    /// </remarks>
    [AppPresentationError]
    public class IngresoObjetivoEstrategicoFonafeController : BaseController
    {
        #region Propiedades
        /// <summary>
        /// Servicio de Parametros
        /// </summary>
        public IParametroValorService parametroValorService { get; set; }           
        /// <summary>
        /// Servicio de Inspección
        /// </summary>
        public IObjetivoEstrategicoFonafeService objetivoEstrategicoFonafeService { get; set; }      
        /// <summary>
        /// Inspección Contratista
        /// </summary>
        public IObjetivoEstrategicoFonafeDetalleService objetivoEstrategicoFonafeDetalleService { get; set; }

        /// <summary>
        /// Inspección Contratista
        /// </summary>
        public IObjetivoEstrategicoEmpresaService objetivoEstrategicoEmpresaService { get; set; }        
        #endregion

        #region Vistas
        /// <summary>
        /// Bandeja de ObjetivoEstrategicoFonafees
        /// </summary>
        /// <param name="filtro"></param>
        /// <returns></returns>
        public ActionResult Index(ObjetivoEstrategicoFonafeRequest filtro)
        {
            IngresoObjetivoEstrategicoFonafeModel modelo = new IngresoObjetivoEstrategicoFonafeModel();
            filtro.CodigoIdioma = obtenerCodigoIdioma();

            if (filtro.CodigoObjetivoEstrategicoFonafe.HasValue)
            {
                modelo.ObjetivoEstrategicoFonafe = objetivoEstrategicoFonafeService.ObtenerObjetivoEstrategicoFonafe(new ObjetivoEstrategicoFonafeRequest()
                {
                    CodigoObjetivoEstrategicoFonafe = filtro.CodigoObjetivoEstrategicoFonafe,
                    CodigoIdioma = filtro.CodigoIdioma
                }).Result;    
            }

            modelo.ListaObjetivoEstrategicoEmpresa.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaTodos });
            modelo.ListaObjetivoEstrategicoEmpresa.AddRange(objetivoEstrategicoEmpresaService.BuscarObjetivoEstrategicoEmpresa(new BandejaObjetivoEstrategicoEmpresaRequest()
            {
                CodigoIdioma = filtro.CodigoIdioma,
                EstadoRegistro = DatosConstantes.EstadoRegistro.Activo,
            }).Result.Select(x => new SelectListItem()
            {
                Value = x.CodigoObjetivoEstrategicoEmpresa.ToString(),
                Text = x.NombreObjetivoEstrategicoEmpresa,
                Selected = false
            }));

            return View(modelo);
        }
        #endregion

        #region Métodos

        #region ObjetivoEstrategicoFonafe
        /// <summary>
        /// Permite registrar o actualizar ObjetivoEstrategicoFonafees
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public JsonResult RegistrarObjetivoEstrategicoFonafe(ObjetivoEstrategicoFonafeRequest data)
        {
            var response = objetivoEstrategicoFonafeService.RegistrarObjetivoEstrategicoFonafe(data);
            return Json(response);
        }
        /// <summary>
        /// Permite anular una Inspección
        /// </summary>
        /// <param name="">Entidad Observacion Planeada</param>
        /// <returns>valor booleano con el resultado de la operacion</returns>
        public JsonResult EliminarObjetivoEstrategicoFonafe(ObjetivoEstrategicoFonafeRequest data)
        {
            data.CodigoIdioma = obtenerCodigoIdioma();
            var response = objetivoEstrategicoFonafeService.EliminarObjetivoEstrategicoFonafe(data);
            return Json(response);
        }

        public JsonResult ReactivarObjetivoEstrategicoFonafe(ObjetivoEstrategicoFonafeRequest data)
        {
            var response = objetivoEstrategicoFonafeService.ReactivarObjetivoEstrategicoFonafe(data);            
            return Json(response);
        }
        #endregion       

        #region ObjetivoEstrategicoFonafeDetalle
        /// <summary>
        /// Permite registrar o actualizar Inspección Contratista
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public JsonResult RegistrarObjetivoEstrategicoFonafeDetalle(ObjetivoEstrategicoFonafeDetalleRequest data)
        {
            data.CodigoIdioma = obtenerCodigoIdioma();  
            var response = objetivoEstrategicoFonafeDetalleService.RegistrarObjetivoEstrategicoFonafeDetalle(data);
            return Json(response);
        }

        /// <summary>
        /// Permite registrar o actualizar Inspección Contratista
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public JsonResult EliminarObjetivoEstrategicoFonafeDetalle(ObjetivoEstrategicoFonafeDetalleRequest data)
        {
            var response = objetivoEstrategicoFonafeDetalleService.EliminarObjetivoEstrategicoFonafeDetalle(data);
            return Json(response);
        }

        //<summary>
        //Realiza la búsqueda de Expediente Medico Restriccion
        //</summary>
        //<param name="filtro">Filtro de búsqueda</param>
        //<returns>Listado de  Expediente Medico Restriccion</returns>
        public JsonResult BuscarObjetivoEstrategicoFonafeDetalle(ObjetivoEstrategicoFonafeDetalleRequest data)
        {
            data.CodigoIdioma = obtenerCodigoIdioma();

            var response = objetivoEstrategicoFonafeDetalleService.BuscarObjetivoEstrategicoFonafeDetalle(data);
            return Json(response);
        }

        #endregion

        #endregion
    }
}
