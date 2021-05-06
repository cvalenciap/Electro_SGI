//using Pe.GyM.Security.Web.Session;
using Pe.ElectroPeru.SGI.Aplicacion.Core.Base;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Politicas;
using Pe.ElectroPeru.SGI.Transversal.Core.Constante;
using Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Base;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Politicas.ValorParametro;
using Pe.ElectroPeru.SGI.Presentacion.Recursos.Base;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Politicas
{
    /// <summary>
    /// Controladora de Unidad Operativa
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 20150319
    /// Modificación:   
    /// </remarks>
    public class ValorParametroController : GenericController
    {
        /// <summary>
        /// Servicio de parámetro valor
        /// </summary>
        public IParametroValorService parametroValorService { get; set; }
        /// <summary>
        ///  Servicio de parámetro sección
        /// </summary>
        public IParametroSeccionService parametroSeccionService { get; set; }
        /// <summary>
        ///  Servicio de servicio
        /// </summary>
        public IParametroService parametroService { get; set; }

        #region Vistas
        /// <summary>
        /// Muestra la vista principal
        /// </summary>
        /// <param name="tipoParametro">Tipo de parámetro</param>
        /// <returns>Vista principal de la opción</returns>
        /// COMENTADO POR ANGEL
        //public ActionResult Index(string tipoParametro)
        //{
        //    string codigoEmpresa = DatosConstantes.Empresa.CodigoElectroPeru;
        //    string codigoSistema = "";
        //    var cuenta = HttpGyMSessionContext.CurrentAccount();
        //    if (cuenta != null)
        //    {
        //        codigoEmpresa = cuenta.CodigoEmpresa;
        //        codigoSistema = cuenta.CodigoSistema;
        //    }

        //    tipoParametro = tipoParametro ?? string.Empty;

        //    ValorParametroModel model = new ValorParametroModel();

        //    var listaParametro = parametroService.BuscarParametro(
        //        new ParametroRequest() 
        //        {
        //            CodigoEmpresa = codigoEmpresa
        //        }).Result;

        //    //Listar de Parametro
        //    model.ListaParametro.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaSeleccionar });

        //    model.ListaParametro.AddRange(listaParametro.Where(item => (item.IndicadorEmpresa || item.CodigoSistema.ToUpper() == codigoSistema.ToUpper())
        //        && (item.TipoParametro == tipoParametro || item.TipoParametro == DatosConstantes.TipoParametro.Comun))
        //        .Select(item => new SelectListItem { Value = item.CodigoParametro.ToString(), Text = item.Nombre }).ToList());

        //    return View(model);
        //}

        /// <summary>
        /// Muestra el formulario de busqueda
        /// </summary>
        /// <param name="codigoParametro">Código de Parámetro</param>
        /// <param name="codigoValor">Código de valor</param>
        /// <returns>Vista FormularioBuscarParametro</returns>
        public ActionResult FormularioParametro(int codigoParametro, int? codigoValor)
        {
            ValorParametroModel model = new ValorParametroModel();

            model.ListaSecciones = parametroSeccionService.BuscarParametroSeccion(new ParametroSeccionRequest()
            {
                CodigoParametro = codigoParametro
            }).Result;
            
            model.ParametroActual = parametroService.BuscarParametro(new ParametroRequest()
            {
                CodigoParametro = codigoParametro
            }).Result.FirstOrDefault();

            if (codigoValor != null)
            {
                model.ParametroValorActual = parametroValorService.BuscarParametroValor(new ParametroValorRequest()
                {
                    CodigoParametro = codigoParametro,
                    CodigoValor = codigoValor
                }).Result.FirstOrDefault();

                model.ParametroValorActual.RegistroObjeto = null;
            }

            //Cargar Combo de Parametros Relacionados
            model.ListaParametroRelacionado = new Dictionary<string, List<SelectListItem>>();
            foreach (var seccion in model.ListaSecciones)
            {
                if (seccion.CodigoParametroRelacionado != null)
                {
                    List<SelectListItem> listaParametroValor = new List<SelectListItem>();

                    listaParametroValor.Add(new SelectListItem { Value = "", Text = GenericoResource.EtiquetaSeleccionar });
                    listaParametroValor.AddRange(parametroValorService.BuscarParametroValor(
                        new ParametroValorRequest()
                        {
                            CodigoParametro = seccion.CodigoParametroRelacionado
                        }).Result.Select(item => new SelectListItem { 
                            Value = item.RegistroCadena[seccion.CodigoSeccionRelacionado.ToString()], 
                            Text = item.RegistroCadena[seccion.CodigoSeccionRelacionadoMostrar.ToString()],
                            Selected = (model.ParametroValorActual != null ? (model.ParametroValorActual.RegistroCadena.Any(itemAny => itemAny.Key == seccion.CodigoSeccion.ToString()) ? (model.ParametroValorActual.RegistroCadena[seccion.CodigoSeccion.ToString()] == item.RegistroCadena[seccion.CodigoSeccionRelacionado.ToString()] ? true : false) : false) : false)
                        }).ToList()
                    );

                    model.ListaParametroRelacionado.Add(seccion.CodigoSeccion.ToString(), listaParametroValor);
                }
            }

            return PartialView(model);             
        }
                
        #endregion

        #region Json
        /// <summary>
        /// Permite buscar el parametro valor
        /// </summary>
        /// <param name="codigoParametro">Código de Parámetro</param>
        /// <returns>Valores del Parametro</returns>
        public JsonResult Buscar(int codigoParametro)
        {
            var listaParametroValor = parametroValorService.BuscarParametroValor(new ParametroValorRequest()
            {
                CodigoParametro = codigoParametro                                                   
            });
            listaParametroValor.Result.ForEach(
                    item => item.RegistroObjeto = null      
                );
            return Json(listaParametroValor);
        }

        /// <summary>
        /// Permite buscar el parametro
        /// </summary>
        /// <param name="codigoParametro">Código de Parámetro</param>
        /// <returns>Secciones del Parametro</returns>
        public JsonResult BuscarParametro(int codigoParametro)
        {
            ValorParametroModel model = new ValorParametroModel();

            model.ParametroActual = parametroService.BuscarParametro(new ParametroRequest()
            {
                CodigoParametro = codigoParametro
            }).Result.FirstOrDefault();

            model.ListaSecciones = parametroSeccionService.BuscarParametroSeccion(new ParametroSeccionRequest()
            {
                CodigoParametro = codigoParametro
            }).Result;
            ProcessResult<ValorParametroModel> result = new ProcessResult<ValorParametroModel>();
            result.Result = model;
            result.IsSuccess = true;
            return Json(result);
        }

        /// <summary>
        /// Permite registrar o actualizar un parametro
        /// </summary>
        /// <param name="parametroValor">Valor de Parámetro</param>
        /// <returns>Indicador de Conformidad</returns>
        public JsonResult GuardarParametro(ParametroValorRequest parametroValor)
        {
            var result = parametroValorService.RegistrarParametroValor(parametroValor);

            return Json(result);
        }

        /// <summary>
        /// Permite eliminar los valores del parámetro
        /// </summary>
        /// <param name="listaParametroValor">Lista de parámetro de valor</param>
        /// <returns>Indicador de Conformidad</returns>
        public JsonResult EliminarParametro(List<ParametroValorRequest> listaParametroValor)
        {
            var resultItem = parametroValorService.EliminarMasivoParametroValor(listaParametroValor);
            return Json(resultItem);
        }
        #endregion
    }
}