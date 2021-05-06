using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Politicas;
using Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Base;
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
    /// Controladora de Ingreso de Formulaes
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 05122017
    /// Modificación:   
    /// </remarks>
    [AppPresentationError]
    public class FormulaController : BaseController
    {
        #region Propiedades
        /// <summary>
        /// Servicio de Parametros
        /// </summary>
        public IParametroValorService parametroValorService { get; set; }
        
        
        /// <summary>
        /// Servicio de Inspección
        /// </summary>
        public IFormulaService formulaService { get; set; }
        /// <summary>
        /// Servicio de Inspección
        /// </summary>
        public IFormulaDetalleService formulaDetalleService { get; set; }      
        #endregion


        #region Métodos

            #region Formula
        /// <summary>
        /// Permite registrar o actualizar Formulaes
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public JsonResult RegistrarFormula(FormulaRequest data)
        {
            var response = formulaService.RegistrarFormula(data);
            return Json(response);
        }
        /// <summary>
        /// Permite anular una Inspección
        /// </summary>
        /// <param name="">Entidad Observacion Planeada</param>
        /// <returns>valor booleano con el resultado de la operacion</returns>
        public JsonResult EliminarFormula(FormulaRequest data)
        {
            data.CodigoIdioma = obtenerCodigoIdioma();
            var response = formulaService.EliminarFormula(data);
            return Json(response);
        }

        public JsonResult ReactivarFormula(FormulaRequest data)
        {
            var response = formulaService.ReactivarFormula(data);            
            return Json(response);
        }
        #endregion       

            #region FormulaDetalle
        /// <summary>
        /// Permite registrar o actualizar Inspección Contratista
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public JsonResult RegistrarFormulaDetalle(FormulaDetalleRequest data)
        {
            data.CodigoIdioma = obtenerCodigoIdioma();  
            var response = formulaDetalleService.RegistrarFormulaDetalle(data);
            return Json(response);
        }
        /// <summary>
        /// Permite registrar o actualizar Inspección Contratista
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public JsonResult EliminarFormulaDetalle(FormulaDetalleRequest data)
        {
            var response = formulaDetalleService.EliminarFormulaDetalle(data);
            return Json(response);
        }   
        #endregion

        #endregion
    }
}
