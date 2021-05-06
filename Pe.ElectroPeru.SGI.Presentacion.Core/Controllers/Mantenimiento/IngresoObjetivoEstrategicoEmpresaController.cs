using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Politicas;
using Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Base;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Mantenimiento.IngresoObjetivoEstrategicoEmpresa;
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
    /// Controladora de Ingreso de ObjetivoEstrategicoEmpresaes
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 05122017
    /// Modificación:   
    /// </remarks>
    [AppPresentationError]
    public class IngresoObjetivoEstrategicoEmpresaController : BaseController
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
        public IObjetivoEstrategicoEmpresaService ObjetivoEstrategicoEmpresaService { get; set; }      
        /// <summary>
        /// Inspección Contratista
        /// </summary>
        public IObjetivoEstrategicoEmpresaDetalleService ObjetivoEstrategicoEmpresaDetalleService { get; set; }
        /// <summary>
        /// Inspección Contratista
        /// </summary>
        public IObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalService objetivoEstrategicoEmpresaAccionEstrategicaInstitucionalService { get; set; }
        /// <summary>
        /// Servicio de Inspección
        /// </summary>
        public IAccionEstrategicaInstitucionalService accionEstrategicaInstitucionalService { get; set; }      
        #endregion

        #region Vistas
        /// <summary>
        /// Bandeja de ObjetivoEstrategicoEmpresaes
        /// </summary>
        /// <param name="filtro"></param>
        /// <returns></returns>
        public ActionResult Index(ObjetivoEstrategicoEmpresaRequest filtro)
        {
            IngresoObjetivoEstrategicoEmpresaModel modelo = new IngresoObjetivoEstrategicoEmpresaModel();
            filtro.CodigoIdioma = obtenerCodigoIdioma();

            if (filtro.CodigoObjetivoEstrategicoEmpresa.HasValue)
            {
                modelo.ObjetivoEstrategicoEmpresa = ObjetivoEstrategicoEmpresaService.ObtenerObjetivoEstrategicoEmpresa(new ObjetivoEstrategicoEmpresaRequest()
                {
                    CodigoObjetivoEstrategicoEmpresa = filtro.CodigoObjetivoEstrategicoEmpresa,
                    CodigoIdioma = filtro.CodigoIdioma
                }).Result;    
            }

            modelo.ListaModeloConceptual.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaSeleccionar });
            modelo.ListaModeloConceptual.AddRange(parametroValorService.BuscarValorPorSeccionParametro(new ParametroValorRequest()
            {
                CodigoIdentificador = DatosConstantes.ParametrosGenerales.ModeloConceptual,
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

            modelo.ListaAccionEstrategicaInstitucional.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaSeleccionar });
            modelo.ListaAccionEstrategicaInstitucional.AddRange(accionEstrategicaInstitucionalService.BuscarAccionEstrategicaInstitucional(new BandejaAccionEstrategicaInstitucionalRequest()
            {
                CodigoIdioma = filtro.CodigoIdioma,
                EstadoRegistro = DatosConstantes.EstadoRegistro.Activo,
            }).Result.Select(x => new SelectListItem()
            {
                Value = x.CodigoAccionEstrategicaInstitucional.ToString(),
                Text = x.DescripcionAccionEstrategicaInstitucional,
                Selected = false
            }));

            return View(modelo);
        }
        #endregion

        #region Métodos

            #region ObjetivoEstrategicoEmpresa
        /// <summary>
        /// Permite registrar o actualizar ObjetivoEstrategicoEmpresaes
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public JsonResult RegistrarObjetivoEstrategicoEmpresa(ObjetivoEstrategicoEmpresaRequest data)
        {
            var response = ObjetivoEstrategicoEmpresaService.RegistrarObjetivoEstrategicoEmpresa(data);
            return Json(response);
        }
        /// <summary>
        /// Permite anular una Inspección
        /// </summary>
        /// <param name="">Entidad Observacion Planeada</param>
        /// <returns>valor booleano con el resultado de la operacion</returns>
        public JsonResult EliminarObjetivoEstrategicoEmpresa(ObjetivoEstrategicoEmpresaRequest data)
        {
            data.CodigoIdioma = obtenerCodigoIdioma();
            var response = ObjetivoEstrategicoEmpresaService.EliminarObjetivoEstrategicoEmpresa(data);
            return Json(response);
        }

        public JsonResult ReactivarObjetivoEstrategicoEmpresa(ObjetivoEstrategicoEmpresaRequest data)
        {
            var response = ObjetivoEstrategicoEmpresaService.ReactivarObjetivoEstrategicoEmpresa(data);            
            return Json(response);
        }
        #endregion       

            #region ObjetivoEstrategicoEmpresaDetalle
        /// <summary>
        /// Permite registrar o actualizar Inspección Contratista
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public JsonResult RegistrarObjetivoEstrategicoEmpresaDetalle(ObjetivoEstrategicoEmpresaDetalleRequest data)
        {
            data.CodigoIdioma = obtenerCodigoIdioma();  
            var response = ObjetivoEstrategicoEmpresaDetalleService.RegistrarObjetivoEstrategicoEmpresaDetalle(data);
            return Json(response);
        }
        /// <summary>
        /// Permite registrar o actualizar Inspección Contratista
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public JsonResult EliminarObjetivoEstrategicoEmpresaDetalle(ObjetivoEstrategicoEmpresaDetalleRequest data)
        {
            var response = ObjetivoEstrategicoEmpresaDetalleService.EliminarObjetivoEstrategicoEmpresaDetalle(data);
            return Json(response);
        }        
        //<summary>
        //Realiza la búsqueda de Expediente Medico Restriccion
        //</summary>
        //<param name="filtro">Filtro de búsqueda</param>
        //<returns>Listado de  Expediente Medico Restriccion</returns>
        public JsonResult BuscarObjetivoEstrategicoEmpresaDetalle(ObjetivoEstrategicoEmpresaDetalleRequest data)
        {
            data.CodigoIdioma = obtenerCodigoIdioma();

            var response = ObjetivoEstrategicoEmpresaDetalleService.BuscarObjetivoEstrategicoEmpresaDetalle(data);
            return Json(response);
        }
        #endregion

            #region ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional
            /// <summary>
            /// Permite registrar o actualizar Inspección Contratista
            /// </summary>
            /// <param name="data">Datos a registrar</param>
            /// <returns>Indicador con el resultado de la operación</returns>
            public JsonResult RegistrarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional(ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalRequest data)
            {
                data.CodigoIdioma = obtenerCodigoIdioma();
                var response = objetivoEstrategicoEmpresaAccionEstrategicaInstitucionalService.RegistrarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional(data);
                return Json(response);
            }
            /// <summary>
            /// Permite registrar o actualizar Inspección Contratista
            /// </summary>
            /// <param name="data">Datos a registrar</param>
            /// <returns>Indicador con el resultado de la operación</returns>
            public JsonResult EliminarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional(ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalRequest data)
            {
                var response = objetivoEstrategicoEmpresaAccionEstrategicaInstitucionalService.EliminarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional(data);
                return Json(response);
            }
            //<summary>
            //Realiza la búsqueda de Expediente Medico Restriccion
            //</summary>
            //<param name="filtro">Filtro de búsqueda</param>
            //<returns>Listado de  Expediente Medico Restriccion</returns>
            public JsonResult BuscarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional(ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalRequest data)
            {
                data.CodigoIdioma = obtenerCodigoIdioma();

                var response = objetivoEstrategicoEmpresaAccionEstrategicaInstitucionalService.BuscarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional(data);
                return Json(response);
            }
            #endregion

        #endregion
    }
}
