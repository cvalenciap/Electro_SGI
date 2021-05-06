using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Politicas;
using Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Base;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Mantenimiento.IngresoObjetivoEstrategicoSectorial;
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
    /// Controladora de Ingreso de ObjetivoEstrategicoSectoriales
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 05122017
    /// Modificación:   
    /// </remarks>
    [AppPresentationError]
    public class IngresoObjetivoEstrategicoSectorialController : BaseController
    {
        #region Propiedades
        /// <summary>
        /// Servicio de Parametros
        /// </summary>
        public IParametroValorService parametroValorService { get; set; }
        
        /// <summary>
        /// Servicio de Área
        /// </summary>
        public IAccionEstrategicaSectorialService accionEstrategicaSectorialService { get; set; }
        /// <summary>
        /// Servicio de Inspección
        /// </summary>
        public IObjetivoEstrategicoSectorialService objetivoEstrategicoSectorialService { get; set; }      
        /// <summary>
        /// Inspección Contratista
        /// </summary>
        public IObjetivoEstrategicoSectorialDetalleService objetivoEstrategicoSectorialDetalleService { get; set; }        
        #endregion

        #region Vistas
        /// <summary>
        /// Bandeja de ObjetivoEstrategicoSectoriales
        /// </summary>
        /// <param name="filtro"></param>
        /// <returns></returns>
        public ActionResult Index(ObjetivoEstrategicoSectorialRequest filtro)
        {
            IngresoObjetivoEstrategicoSectorialModel modelo = new IngresoObjetivoEstrategicoSectorialModel();
            filtro.CodigoIdioma = obtenerCodigoIdioma();

            if (filtro.CodigoObjetivoEstrategicoSectorial.HasValue)
            {
                modelo.ObjetivoEstrategicoSectorial = objetivoEstrategicoSectorialService.ObtenerObjetivoEstrategicoSectorial(new ObjetivoEstrategicoSectorialRequest()
                {
                    CodigoObjetivoEstrategicoSectorial = filtro.CodigoObjetivoEstrategicoSectorial,
                    CodigoIdioma = filtro.CodigoIdioma
                }).Result;    
            }

            modelo.ListaAccionEstrategicaSectorial.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaSeleccionar });
            modelo.ListaAccionEstrategicaSectorial.AddRange(accionEstrategicaSectorialService.BuscarAccionEstrategicaSectorial(new BandejaAccionEstrategicaSectorialRequest()
            {
                CodigoIdioma = filtro.CodigoIdioma,
                EstadoRegistro = DatosConstantes.EstadoRegistro.Activo,
            }).Result.Select(x => new SelectListItem()
            {
                Value = x.CodigoAccionEstrategicaSectorial.ToString(),
                Text = x.DescripcionAccionEstrategicaSectorial,
                Selected = false
            }));

            return View(modelo);
        }
        #endregion

        #region Métodos

        #region ObjetivoEstrategicoSectorial
        /// <summary>
        /// Permite registrar o actualizar ObjetivoEstrategicoSectoriales
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>AccionEstrategicaSectorial con el resultado de la operación</returns>
        public JsonResult RegistrarObjetivoEstrategicoSectorial(ObjetivoEstrategicoSectorialRequest data)
        {
            var response = objetivoEstrategicoSectorialService.RegistrarObjetivoEstrategicoSectorial(data);
            return Json(response);
        }
        /// <summary>
        /// Permite anular una Inspección
        /// </summary>
        /// <param name="">Entidad Observacion Planeada</param>
        /// <returns>valor booleano con el resultado de la operacion</returns>
        public JsonResult EliminarObjetivoEstrategicoSectorial(ObjetivoEstrategicoSectorialRequest data)
        {
            data.CodigoIdioma = obtenerCodigoIdioma();
            var response = objetivoEstrategicoSectorialService.EliminarObjetivoEstrategicoSectorial(data);
            return Json(response);
        }

        public JsonResult ReactivarObjetivoEstrategicoSectorial(ObjetivoEstrategicoSectorialRequest data)
        {
            var response = objetivoEstrategicoSectorialService.ReactivarObjetivoEstrategicoSectorial(data);            
            return Json(response);
        }
        #endregion       

        #region ObjetivoEstrategicoSectorialDetalle
        /// <summary>
        /// Permite registrar o actualizar Inspección Contratista
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>AccionEstrategicaSectorial con el resultado de la operación</returns>
        public JsonResult RegistrarObjetivoEstrategicoSectorialDetalle(ObjetivoEstrategicoSectorialDetalleRequest data)
        {
            data.CodigoIdioma = obtenerCodigoIdioma();  
            var response = objetivoEstrategicoSectorialDetalleService.RegistrarObjetivoEstrategicoSectorialDetalle(data);
            return Json(response);
        }

        /// <summary>
        /// Permite registrar o actualizar Inspección Contratista
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>AccionEstrategicaSectorial con el resultado de la operación</returns>
        public JsonResult EliminarObjetivoEstrategicoSectorialDetalle(ObjetivoEstrategicoSectorialDetalleRequest data)
        {
            var response = objetivoEstrategicoSectorialDetalleService.EliminarObjetivoEstrategicoSectorialDetalle(data);
            return Json(response);
        }

        //<summary>
        //Realiza la búsqueda de Expediente Medico Restriccion
        //</summary>
        //<param name="filtro">Filtro de búsqueda</param>
        //<returns>Listado de  Expediente Medico Restriccion</returns>
        public JsonResult BuscarObjetivoEstrategicoSectorialDetalle(ObjetivoEstrategicoSectorialDetalleRequest data)
        {
            data.CodigoIdioma = obtenerCodigoIdioma();

            var response = objetivoEstrategicoSectorialDetalleService.BuscarObjetivoEstrategicoSectorialDetalle(data);
            return Json(response);
        }

        #endregion

        #endregion
    }
}
