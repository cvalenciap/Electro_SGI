using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Politicas;
using Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Base;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Mantenimiento.IngresoIndicador;
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
    /// Controladora de Ingreso de Indicadores
    /// </summary>
    /// <remarks>
    /// Creación:       GMD 05122017
    /// Modificación:   
    /// </remarks>
    [AppPresentationError]
    public class IngresoIndicadorController : BaseController
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
        public IIndicadorService indicadorService { get; set; }
        /// <summary>
        /// Servicio de Inspección
        /// </summary>
        public IFormulaService formulaService { get; set; }
        /// <summary>
        /// Servicio de Inspección
        /// </summary>
        public IVariableService variableService { get; set; }
        /// <summary>
        /// Servicio de Inspección
        /// </summary>
        public IIndicadorMetaService indicadorMetaService { get; set; }
        /// <summary>
        /// Servicio de Inspección
        /// </summary>
        public IIndicadorValorService indicadorValorService { get; set; }    
        #endregion

        #region Vistas
        /// <summary>
        /// Bandeja de Indicadores
        /// </summary>
        /// <param name="filtro"></param>
        /// <returns></returns>
        public ActionResult Index(IndicadorRequest filtro)
        {
            IngresoIndicadorModel modelo = new IngresoIndicadorModel();
            filtro.CodigoIdioma = obtenerCodigoIdioma();

            if (filtro.CodigoIndicador.HasValue)
            {
                modelo.Indicador = indicadorService.ObtenerIndicador(new IndicadorRequest()
                {
                    CodigoIndicador = filtro.CodigoIndicador
                }).Result;

                BandejaIndicadorRequest indReq = new BandejaIndicadorRequest();
                indReq.CodigoIndicador = filtro.CodigoIndicador;
                indReq.CodigoIdioma = filtro.CodigoIdioma;

                var Formula = indicadorService.BuscarIndicador(indReq);

                modelo.Indicador.NombreFormula = Formula.Result[0].NombreFormula;

                modelo.ListaIndicadorAmbito = indicadorService.ObtenerIndicadorAmbito(new IndicadorRequest()
                {
                    CodigoIndicador = filtro.CodigoIndicador
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

            modelo.ListaUnidadMedida.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaSeleccionar });
            modelo.ListaUnidadMedida.AddRange(parametroValorService.BuscarValorPorSeccionParametro(new ParametroValorRequest()
            {
                CodigoIdentificador = DatosConstantes.ParametrosGenerales.UnidadDeMedida,
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
            
            modelo.ListaIndicadorAmbitoTodos.AddRange(parametroValorService.BuscarValorPorSeccionParametro(new ParametroValorRequest()
            {
                CodigoIdentificador = DatosConstantes.ParametrosGenerales.ListaIndicadorAmbito,
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

            //modelo.ListaIndicadorAmbitoTodos.AddRange(ObtenerValoresParametroMultiple(DatosConstantes.ParametrosGenerales.ListaIndicadorAmbito, string.Empty));

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

            modelo.ListaTipoIndicador.Add(new SelectListItem { Value = string.Empty, Text = GenericoResource.EtiquetaTodos });
            modelo.ListaTipoIndicador.AddRange(parametroValorService.BuscarValorPorSeccionParametro(new ParametroValorRequest()
            {
                CodigoIdentificador = DatosConstantes.ParametrosGenerales.TipoIndicador,
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

            /* Listas para Mostrar el Sub Tipo de la Periodicidad*/
            modelo.ListaSemana.Add(new SelectListItem() { Value = string.Empty, Text = GenericoResource.EtiquetaSeleccionar, Selected = true });
            modelo.ListaSemana.AddRange(parametroValorService.BuscarValorPorSeccionParametro(new ParametroValorRequest()
            {
                CodigoIdentificador = DatosConstantes.ParametrosGenerales.Semana,
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

            modelo.ListaMes.Add(new SelectListItem() { Value = string.Empty, Text = GenericoResource.EtiquetaSeleccionar, Selected = true });
            modelo.ListaMes.AddRange(parametroValorService.BuscarValorPorSeccionParametro(new ParametroValorRequest()
            {
                CodigoIdentificador = DatosConstantes.ParametrosGenerales.Mes,
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

            modelo.ListaTrimestre.Add(new SelectListItem() { Value = string.Empty, Text = GenericoResource.EtiquetaSeleccionar, Selected = true });
            modelo.ListaTrimestre.AddRange(parametroValorService.BuscarValorPorSeccionParametro(new ParametroValorRequest()
            {
                CodigoIdentificador = DatosConstantes.ParametrosGenerales.Trimestre,
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

            modelo.ListaSemestre.Add(new SelectListItem() { Value = string.Empty, Text = GenericoResource.EtiquetaSeleccionar, Selected = true });
            modelo.ListaSemestre.AddRange(parametroValorService.BuscarValorPorSeccionParametro(new ParametroValorRequest()
            {
                CodigoIdentificador = DatosConstantes.ParametrosGenerales.Semestre,
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

            return View(modelo);
        }
        #endregion

        #region Métodos

        #region Indicador
        /// <summary>
        /// Permite registrar o actualizar Indicadores
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public JsonResult RegistrarIndicador(IndicadorRequest data)
        {
            var response = indicadorService.RegistrarIndicador(data);
            return Json(response);
        }
        /// <summary>
        /// Permite anular una Inspección
        /// </summary>
        /// <param name="">Entidad Observacion Planeada</param>
        /// <returns>valor booleano con el resultado de la operacion</returns>
        public JsonResult EliminarIndicador(IndicadorRequest data)
        {
            var response = indicadorService.EliminarIndicador(data);
            return Json(response);
        }

        public JsonResult ReactivarIndicador(IndicadorRequest data)
        {
            var response = indicadorService.ReactivarIndicador(data);
            return Json(response);
        }

        public JsonResult BuscarVariable(BandejaVariableRequest filtro)
        {
            filtro.CodigoIdioma = obtenerCodigoIdioma();
            var response = variableService.BuscarVariable(filtro);
            return Json(response);
        }

        
        #endregion

        //#region IndicadorMeta
        //public JsonResult BuscarIndicadorMeta(IndicadorMetaRequest filtro)
        //{
        //    filtro.CodigoIdioma = obtenerCodigoIdioma();
        //    var response = indicadorMetaService.BuscarIndicadorMeta(filtro);
        //    return Json(response);
        //}
        ///// <summary>
        ///// Permite registrar o actualizar Indicadores
        ///// </summary>
        ///// <param name="data">Datos a registrar</param>
        ///// <returns>Indicador con el resultado de la operación</returns>
        //public JsonResult RegistrarIndicadorMeta(IndicadorMetaRequest data)
        //{
        //    var response = indicadorMetaService.RegistrarIndicadorMeta(data);
        //    return Json(response);
        //}
        ///// <summary>
        ///// Permite anular una Inspección
        ///// </summary>
        ///// <param name="">Entidad Observacion Planeada</param>
        ///// <returns>valor booleano con el resultado de la operacion</returns>
        //public JsonResult EliminarIndicadorMeta(IndicadorMetaRequest data)
        //{
        //    var response = indicadorMetaService.EliminarIndicadorMeta(data);
        //    return Json(response);
        //}
        
        //#endregion

        //#region Formula
        ///// <summary>
        ///// Permite registrar o actualizar Indicadores
        ///// </summary>
        ///// <param name="data">Datos a registrar</param>
        ///// <returns>Indicador con el resultado de la operación</returns>
        //public JsonResult RegistraFormula(FormulaRequest data)
        //{
        //    data.CodigoIdioma = obtenerCodigoIdioma();
        //    var response = formulaService.RegistrarFormula(data);
        //    return Json(response);
        //}
        //#endregion

        //#region IndicadorValor
        //public JsonResult BuscarIndicadorValor(IndicadorValorRequest filtro)
        //{
        //    filtro.CodigoIdioma = obtenerCodigoIdioma();
        //    var response = indicadorValorService.BuscarIndicadorValor(filtro);
        //    return Json(response);
        //}
        ///// <summary>
        ///// Permite registrar o actualizar Indicadores
        ///// </summary>
        ///// <param name="data">Datos a registrar</param>
        ///// <returns>Indicador con el resultado de la operación</returns>
        //public JsonResult RegistrarIndicadorValor(IndicadorValorRequest data)
        //{
        //    var response = indicadorValorService.RegistrarIndicadorValor(data);
        //    return Json(response);
        //}
        ///// <summary>
        ///// Permite anular una Inspección
        ///// </summary>
        ///// <param name="">Entidad Observacion Planeada</param>
        ///// <returns>valor booleano con el resultado de la operacion</returns>
        //public JsonResult EliminarIndicadorValor(IndicadorValorRequest data)
        //{
        //    var response = indicadorValorService.EliminarIndicadorValor(data);
        //    return Json(response);
        //}

        //#endregion

        #endregion
    }
}
