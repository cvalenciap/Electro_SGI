using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using Microsoft.Reporting.WebForms;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Proceso;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Response.Proceso;
using Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Base;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Proceso.PlanEstrategico;
using Pe.ElectroPeru.SGI.Presentacion.Recursos.Base;
using Pe.ElectroPeru.SGI.Transversal.Core.Constante;
using Pe.ElectroPeru.SGI.Transversal.Core.Util;
using System.Globalization;
using System.Threading;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Proceso;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Sistema;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Mantenimiento.IngresoIndicador;
using System.Data;
using System.Reflection;
using System.Drawing;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Mantenimiento
{
    public class BandejaPlanEstrategicoController : GenericController
    {
        #region Propiedades
      
        public IParametroValorService parametroValorService { get; set; }
        public IPlanEstrategicoService planEstrategicoService { get; set; }
        public IAreaService areaService { get; set; }
        public IPerspectivaService perspectivaService { get; set; }
        public IPerspectivaDetalleService perspectivaDetalleService { get; set; }
        public IObjetivoEstrategicoFonafeDetalleService objetivoEstrategicoFonafeDetalleService { get; set; }
        public IObjetivoEstrategicoEmpresaDetalleService objetivoEstrategicoEmpresaDetalleService { get; set; }
        public IAccionEstrategicaInstitucionalDetalleService accionEstrategicaInstitucionalDetalleService { get; set; }
        public IObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalService objetivoEstrategicoEmpresaAccionEstrategicaInstitucionalService { get; set; }
        public IIndicadorService indicadorService { get; set; }
        //public IIndicadorMetaService indicadorMetaService { get; set; }
        public IVariableService variableService { get; set; }
        public IFormulaService formulaService { get; set; }
        //public IIndicadorValorService indicadorValorService { get; set; }
        //public IIndicadorEvaluacionService indicadorEvaluacionService { get; set; }
        public IIndicadorMetaAnualService indicadorMetaAnualService { get; set; }
        #endregion

        #region Vistas
     
        public ActionResult Index(BandejaPlanEstrategicoRequest filtro)
        {
            IngresoPlanEstrategicoModel modelo = new IngresoPlanEstrategicoModel();
            List<BandejaPlanEstrategicoResponse> lst = new List<BandejaPlanEstrategicoResponse>();

            filtro.CodigoIdioma = obtenerCodigoIdioma();

            var response = planEstrategicoService.BuscarPlanEstrategico(filtro);

            for (int i = 0; i < response.Result.Count; i++)
            {
                lst.Add(response.Result[i]);
            }
            


            var requestIndicador = Request.QueryString["indicador"];

            if (requestIndicador != null ||
                (Session["PortalElectro"] != null && Session["PortalElectro"].ToString() == "true"))
            {
                Session["PortalElectro"] = "true";
                if (Session["CodigoIdioma"] == null)
                {
                    Session["CodigoIdioma"] = DatosConstantes.ParametrosGenerales.CodigoIdiomaEspaniol;
                    filtro.CodigoIdioma = Session["CodigoIdioma"].ToString();

                    CultureInfo cultureInfo = null;
                    cultureInfo = new CultureInfo(filtro.CodigoIdioma);
                    if (cultureInfo == null)
                    {
                        cultureInfo = new CultureInfo(filtro.CodigoIdioma);
                    }

                    Thread.CurrentThread.CurrentUICulture = cultureInfo;
                    Thread.CurrentThread.CurrentCulture = CultureInfo.CreateSpecificCulture(cultureInfo.Name);

                    var listaIdioma = parametroValorService.BuscarValorPorSeccionParametro(new ParametroValorRequest()
                    {
                        CodigoIdentificador = DatosConstantes.ParametrosGenerales.Idioma,
                        CodigoEmpresa = DatosConstantes.Empresa.CodigoElectroPeru,
                        CodigoSistema = DatosConstantes.Sistema.CodigoSGI,
                        IndicadorEmpresa = true,
                        CodigoIdioma = filtro.CodigoIdioma
                    }).Result.Select(x => new SelectListItem()
                    {
                        Value = x.CodigoValorString,
                        Text = x.Valor,
                        Selected = (x.CodigoValorString == filtro.CodigoIdioma)
                    }).ToList();
                    Session["ListaIdioma"] = listaIdioma;
                }
            }
            else
            {
                if (Session["CodigoIdioma"] != null)
                {
                    filtro.CodigoIdioma = Session["CodigoIdioma"].ToString();
                }
                else
                {
                    filtro.CodigoIdioma = DatosConstantes.ParametrosGenerales.CodigoIdiomaPorDefecto;
                }
            }

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

            ViewBag.lstPE = lst;
            return View(modelo);
        }

        public ActionResult FormularioBandejaObjetivosFonafe(BandejaPlanEstrategicoRequest filtro)
        {
            return View();
        }

        public ActionResult FormularioBandejaObjetivosEmpresa(BandejaPlanEstrategicoRequest filtro)
        {
            return View();
        }

        public ActionResult FormularioBandejaIndicador(BandejaPlanEstrategicoRequest filtro)
        {
            return View();
        }

        public ActionResult FormularioBandejaAccionEstrategicaInstitucional(BandejaPlanEstrategicoRequest filtro)
        {
            return View();
        }

        public ActionResult FormularioValorIndicador(BandejaPlanEstrategicoRequest filtro)
        {
            //filtro.CodigoIndicador = new Guid("c9144fbc-6266-4b46-b9d2-0f3a64abf74c"); 
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
        
        public JsonResult BuscarPlanEstrategico(BandejaPlanEstrategicoRequest filtro)
        {
            filtro.CodigoIdioma = obtenerCodigoIdioma();

            var response = planEstrategicoService.BuscarPlanEstrategico(filtro);
            return Json(response);
        }

        /// <summary>
        /// Permite obtener el listado de Observaciones planeadas
        /// </summary>
        /// <param name="filtro">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public JsonResult BuscarPerspectiva(BandejaPerspectivaRequest filtro)
        {
            var listTmp = (List<PermisosSistemaModel.PermisoControlador>)this.Session[Constantes.Sesion.Permisos.Lista_PermisosControlador];
            var permiso = listTmp.Where(x => x.Controlador == RouteData.Values["controller"].ToString()).Select(s => s.CodigoAccion).ToList()[0];

            filtro.CodigoIdioma = obtenerCodigoIdioma();
            filtro.EstadoRegistro = DatosConstantes.EstadoRegistro.Activo;
            var response = perspectivaService.BuscarPerspectiva(filtro);

            foreach (var item in response.Result)
            {
                item.Permiso = permiso;
            }

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

        public JsonResult BuscarObjetivoEstrategicoFonafeDetalle(ObjetivoEstrategicoFonafeDetalleRequest data)
        {
            data.CodigoIdioma = obtenerCodigoIdioma();

            var response = objetivoEstrategicoFonafeDetalleService.BuscarObjetivoEstrategicoFonafeDetalle(data);
            return Json(response);
        }

        public JsonResult BuscarObjetivoEstrategicoEmpresaDetalle(ObjetivoEstrategicoEmpresaDetalleRequest data)
        {
            data.CodigoIdioma = obtenerCodigoIdioma();          
            if (data.Ruta == "OEE")
            {
                var response = objetivoEstrategicoEmpresaDetalleService.BuscarObjetivoEstrategicoEmpresaDetalle(data);
                return Json(response);       
            }
            else
            {
                AccionEstrategicaInstitucionalDetalleRequest AEIDR = new AccionEstrategicaInstitucionalDetalleRequest();
                AEIDR.CodigoAccionEstrategicaInstitucional = data.CodigoObjetivoEstrategicoEmpresa;
                AEIDR.CodigoIdioma = data.CodigoIdioma;
                var response = accionEstrategicaInstitucionalDetalleService.BuscarAccionEstrategicaInstitucionalDetalle(AEIDR);
                return Json(response);   
            }           
        }

        public JsonResult BuscarAccionEstrategicaInstitucional(ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalRequest data)
        {
            data.CodigoIdioma = obtenerCodigoIdioma();

            var response = objetivoEstrategicoEmpresaAccionEstrategicaInstitucionalService.BuscarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional(data);
            return Json(response);
        }

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

        public JsonResult BuscarVariable(BandejaVariableRequest filtro)
        {
            filtro.CodigoIdioma = obtenerCodigoIdioma();
            var response = variableService.BuscarVariable(filtro);
            return Json(response);
        }

        /// <summary>
        /// Permite descagar el Plan Estratégico
        /// </summary>
        /// <param name="filtro">Filtro de búsqueda</param>
        /// <returns>Archivo de Reporte de Informe en formato Excel</returns>
        public FileResult DescargarPlanEstrategico(BandejaPlanEstrategicoRequest filtro)
        {
            Warning[] warnings;
            string[] streamids;
            string mimeType;
            string encoding;
            string filenameExtension;
            string extension = "pdf";
            string fileType = "application/pdf";
            
            ReportViewer report = new ReportViewer();

            var dt = planEstrategicoService.BuscarPlanEstrategicoRpt();
            
            report.ProcessingMode = ProcessingMode.Local;
            report.LocalReport.ReportPath = Server.MapPath("~/") + "Reports/PlanEstrategico/rptPlanEstrategico.rdlc";
                        
            report.LocalReport.DataSources.Add(new ReportDataSource("dsPlanEstrategico", dt.Result));
            report.LocalReport.Refresh();

            string fileNameExtension = "PlanEstrategico" + DateTime.Now.Year + "." + extension;

            byte[] bytes = report.LocalReport.Render(extension.ToUpper(), null, out mimeType, out encoding, out filenameExtension, out streamids, out warnings);

            return File(bytes, fileType, fileNameExtension);
        }

        /// <summary>
        /// Permite descagar el Plan Estratégico
        /// </summary>
        /// <param name="filtro">Filtro de búsqueda</param>
        /// <returns>Archivo de Reporte de Informe en formato Excel</returns>
        public FileResult DescargarAlineamientoOECyOES(BandejaPlanEstrategicoRequest filtro)
        {
            Warning[] warnings;
            string[] streamids;
            string mimeType;
            string encoding;
            string filenameExtension;
            string extension = "pdf";
            string fileType = "application/pdf";

            ReportViewer report = new ReportViewer();

            var dt = planEstrategicoService.BuscarAlineamientoRpt();

            report.ProcessingMode = ProcessingMode.Local;
            report.LocalReport.ReportPath = Server.MapPath("~/") + "Reports/AlineamientoOECyOES/rptAlineamiento.rdlc";

            report.LocalReport.DataSources.Add(new ReportDataSource("dsAlineamiento", dt.Result));
            report.LocalReport.Refresh();

            string fileNameExtension = "Alineamiento con OEC y OES" + DateTime.Now.Year + "." + extension;

            byte[] bytes = report.LocalReport.Render(extension.ToUpper(), null, out mimeType, out encoding, out filenameExtension, out streamids, out warnings);

            return File(bytes, fileType, fileNameExtension);
        }

        /// <summary>
        /// Permite descagar el Plan Estratégico
        /// </summary>
        /// <param name="filtro">Filtro de búsqueda</param>
        /// <returns>Archivo de Reporte de Informe en formato Excel</returns>
        public FileResult DescargarMatrizAEI(BandejaPlanEstrategicoRequest filtro)
        {
            Warning[] warnings;
            string[] streamids;
            string mimeType;
            string encoding;
            string filenameExtension;
            string extension = "pdf";
            string fileType = "application/pdf";

            ReportViewer report = new ReportViewer();

            var dt = planEstrategicoService.BuscarMatrizEstrategicaRpt();

            report.ProcessingMode = ProcessingMode.Local;
            report.LocalReport.ReportPath = Server.MapPath("~/") + "Reports/MatrizAEI/rptMatrizAEI.rdlc";

            report.LocalReport.DataSources.Add(new ReportDataSource("dsMatrizAEI", dt.Result));
            report.LocalReport.Refresh();

            string fileNameExtension = "MatrizAEI" + DateTime.Now.Year + "." + extension;

            byte[] bytes = report.LocalReport.Render(extension.ToUpper(), null, out mimeType, out encoding, out filenameExtension, out streamids, out warnings);

            return File(bytes, fileType, fileNameExtension);
        }

        #region Formula
        /// <summary>
        /// Permite registrar o actualizar Indicadores
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public JsonResult RegistraFormula(FormulaRequest data)
        {
            data.CodigoIdioma = obtenerCodigoIdioma();
            var response = formulaService.RegistrarFormula(data);
            return Json(response);
        }
        #endregion

        #region IndicadorMetaAnual
        public JsonResult BuscarIndicadorMetaAnual(IndicadorMetaAnualRequest filtro)
        {
            filtro.CodigoIdioma = obtenerCodigoIdioma();
            var response = indicadorMetaAnualService.BuscarIndicadorMetaAnual(filtro);
            return Json(response);
        }
        /// <summary>
        /// Permite registrar o actualizar Indicadores
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public JsonResult RegistrarIndicadorMetaAnual(IndicadorMetaAnualRequest data)
        {
            data.CodigoIdioma = obtenerCodigoIdioma();
            var response = indicadorMetaAnualService.RegistrarIndicadorMetaAnual(data);
            return Json(response);
        }
        /// <summary>
        /// Permite anular una Inspección
        /// </summary>
        /// <param name="">Entidad Observacion Planeada</param>
        /// <returns>valor booleano con el resultado de la operacion</returns>
        public JsonResult EliminarIndicadorMetaAnual(IndicadorMetaAnualRequest data)
        {
            var response = indicadorMetaAnualService.EliminarIndicadorMetaAnual(data);
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
        //    data.CodigoIdioma = obtenerCodigoIdioma();
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
        //    data.CodigoIdioma = obtenerCodigoIdioma();
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

        //#region IndicadorEvaluacion
        //public JsonResult BuscarIndicadorEvaluacion(IndicadorEvaluacionRequest filtro)
        //{
        //    filtro.CodigoIdioma = obtenerCodigoIdioma();
        //    var response = indicadorEvaluacionService.BuscarIndicadorEvaluacion(filtro);
        //    return Json(response);
        //}
        ///// <summary>
        ///// Permite registrar o actualizar Indicadores
        ///// </summary>
        ///// <param name="data">Datos a registrar</param>
        ///// <returns>Indicador con el resultado de la operación</returns>
        //public JsonResult RegistrarIndicadorEvaluacion(IndicadorEvaluacionRequest data)
        //{
        //    data.CodigoIdioma = obtenerCodigoIdioma();
        //    var response = indicadorEvaluacionService.RegistrarIndicadorEvaluacion(data);
        //    return Json(response);
        //}
        ///// <summary>
        ///// Permite anular una Inspección
        ///// </summary>
        ///// <param name="">Entidad Observacion Planeada</param>
        ///// <returns>valor booleano con el resultado de la operacion</returns>
        //public JsonResult EliminarIndicadorEvaluacion(IndicadorEvaluacionRequest data)
        //{
        //    var response = indicadorEvaluacionService.EliminarIndicadorEvaluacion(data);
        //    return Json(response);
        //}

        //#endregion

        #endregion
    }
}
