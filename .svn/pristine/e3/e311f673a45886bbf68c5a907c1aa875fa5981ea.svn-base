using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Politicas;
using Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Base;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Mantenimiento.IngresoVariable;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Sistema;
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
    /// Controladora de Ingreso de Variablees
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 05122017
    /// Modificación:   
    /// </remarks>
    [AppPresentationError]
    public class IngresoVariableController : BaseController
    {
        #region Propiedades
        /// <summary>
        /// Servicio de Parametros
        /// </summary>
        public IParametroValorService parametroValorService { get; set; }
        
        /// <summary>
        /// Servicio de Área
        /// </summary>
        public IAreaService areaService { get; set; }
        /// <summary>
        /// Servicio de Inspección
        /// </summary>
        public IVariableService variableService { get; set; }      
        /// <summary>
        /// Inspección Contratista
        /// </summary>
        public IVariableDetalleService variableDetalleService { get; set; }        
        #endregion

        #region Vistas
        /// <summary>
        /// Bandeja de Variablees
        /// </summary>
        /// <param name="filtro"></param>
        /// <returns></returns>
        public ActionResult Index(VariableRequest filtro)
        {            
            IngresoVariableModel modelo = new IngresoVariableModel();
            filtro.CodigoIdioma = obtenerCodigoIdioma();
                       
            if (filtro.CodigoVariable.HasValue)
            {
                modelo.Variable = variableService.ObtenerVariable(new VariableRequest()
                {
                    CodigoVariable = filtro.CodigoVariable
                }).Result;
            }

            modelo.ListaPeriodicidad.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaSeleccionar });
            modelo.ListaPeriodicidad.AddRange(parametroValorService.BuscarValorPorSeccionParametro(new ParametroValorRequest()
            {
                CodigoIdentificador = DatosConstantes.ParametrosGenerales.Periodicidad,
                CodigoEmpresa = DatosConstantes.Empresa.CodigoElectroPeru,
                CodigoSistema = DatosConstantes.Sistema.CodigoSGI,
                IndicadorEmpresa = true,
                CodigoIdioma = filtro.CodigoIdioma
            }).Result.Select(x => new SelectListItem()
            {
                Value = x.CodigoValorString,
                Text = x.Valor,
                Selected = false
            }));

            modelo.ListaTipoVariable.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaSeleccionar });
            modelo.ListaTipoVariable.AddRange(parametroValorService.BuscarValorPorSeccionParametro(new ParametroValorRequest()
            {
                CodigoIdentificador = DatosConstantes.ParametrosGenerales.TipoVariable,
                CodigoEmpresa = DatosConstantes.Empresa.CodigoElectroPeru,
                CodigoSistema = DatosConstantes.Sistema.CodigoSGI,
                IndicadorEmpresa = true,
                CodigoIdioma = filtro.CodigoIdioma
            }).Result.Select(x => new SelectListItem()
            {
                Value = x.CodigoValorString,
                Text = x.Valor,
                Selected = false
            }));

            modelo.ListaArea.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaTodos });
            modelo.ListaArea.AddRange(areaService.BuscarAreaGrilla(new AreaRequest()
            {
                CodigoIdioma = filtro.CodigoIdioma,
                EstadoRegistro = DatosConstantes.EstadoRegistro.Activo,
            }).Result.Select(x => new SelectListItem()
            {
                Value = x.CodigoArea.ToString(),
                Text = x.NombreArea,
                Selected = false
            }));            

            return View(modelo);
        }
        #endregion

        #region Métodos

        #region Variable
        /// <summary>
        /// Permite registrar o actualizar Variablees
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public JsonResult RegistrarVariable(VariableRequest data)
        {
            var response = variableService.RegistrarVariable(data);
            return Json(response);
        }
        /// <summary>
        /// Permite anular una Inspección
        /// </summary>
        /// <param name="">Entidad Observacion Planeada</param>
        /// <returns>valor booleano con el resultado de la operacion</returns>
        public JsonResult EliminarVariable(VariableRequest data)
        {
            var response = variableService.EliminarVariable(data);
            return Json(response);
        }

        public JsonResult ReactivarVariable(VariableRequest data)
        {
            var response = variableService.ReactivarVariable(data);
            return Json(response);
        }
        #endregion       

        #region VariableDetalle
        /// <summary>
        /// Permite registrar o actualizar Inspección Contratista
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public JsonResult RegistrarVariableDetalle(VariableDetalleRequest data)
        {
            data.CodigoIdioma = obtenerCodigoIdioma();  
            var response = variableDetalleService.RegistrarVariableDetalle(data);
            return Json(response);
        }

        /// <summary>
        /// Permite registrar o actualizar Inspección Contratista
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public JsonResult EliminarVariableDetalle(VariableDetalleRequest data)
        {
            var response = variableDetalleService.EliminarVariableDetalle(data);
            return Json(response);
        }

        //<summary>
        //Realiza la búsqueda de Expediente Medico Restriccion
        //</summary>
        //<param name="filtro">Filtro de búsqueda</param>
        //<returns>Listado de  Expediente Medico Restriccion</returns>
        public JsonResult BuscarVariableDetalle(VariableDetalleRequest data)
        {
            data.CodigoIdioma = obtenerCodigoIdioma();

            var response = variableDetalleService.BuscarVariableDetalle(data);
            return Json(response);
        }

        #endregion

        #endregion
    }
}
