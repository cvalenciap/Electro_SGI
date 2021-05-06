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
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Proceso.PlanOperativo;
using Pe.ElectroPeru.SGI.Presentacion.Recursos.Base;
using Pe.ElectroPeru.SGI.Transversal.Core.Constante;
using Pe.ElectroPeru.SGI.Transversal.Core.Util;
using System.Globalization;
using System.Threading;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.Core.ServiceContract.Proceso;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Politicas;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Mantenimiento;
using Pe.ElectroPeru.SGI.Aplicacion.TransferObject.Request.Proceso;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Sistema;
using Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.Mantenimiento.IngresoIndicador;

namespace Pe.ElectroPeru.SGI.Presentacion.Core.Controllers.Mantenimiento
{
    public class BandejaPlanOperativoController : GenericController
    {
        #region Propiedades
      
        public IParametroValorService parametroValorService { get; set; }
        public IPlanOperativoService planOperativoService { get; set; }
        public IAreaService areaService { get; set; }
        public IObjetivoEstrategicoFonafeService ObjetivoEstrategicoFonafeService { get; set; }
        public IObjetivoEstrategicoFonafeDetalleService ObjetivoEstrategicoFonafeDetalleService { get; set; }
        public IObjetivoEstrategicoFonafeDetalleService objetivoEstrategicoFonafeDetalleService { get; set; }
        public IObjetivoEstrategicoEmpresaDetalleService objetivoEstrategicoEmpresaDetalleService { get; set; }
        public IIndicadorService indicadorService { get; set; }
        public IIndicadorMetaService indicadorMetaService { get; set; }
        public IVariableService variableService { get; set; }
        public IFormulaService formulaService { get; set; }
        public IIndicadorValorService indicadorValorService { get; set; }
        public IIndicadorEvaluacionService indicadorEvaluacionService { get; set; }
        public IIndicadorMetaAnualService indicadorMetaAnualService { get; set; }        

        #endregion

        #region Vistas
     
        public ActionResult Index(BandejaPlanOperativoRequest filtro)
        {
            IngresoPlanOperativoModel modelo = new IngresoPlanOperativoModel();
            List<BandejaPlanOperativoResponse> lst = new List<BandejaPlanOperativoResponse>();

            filtro.CodigoIdioma = obtenerCodigoIdioma();

            var response = planOperativoService.BuscarPlanOperativo(filtro);

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

        public ActionResult FormularioBandejaObjetivosFonafe(BandejaPlanOperativoRequest filtro)
        {
            return View();
        }

        public ActionResult FormularioBandejaObjetivosEmpresa(BandejaPlanOperativoRequest filtro)
        {
            return View();
        }

        public ActionResult FormularioBandejaIndicador(BandejaPlanOperativoRequest filtro)
        {
            return View();
        }

        public ActionResult FormularioValorIndicador(BandejaPlanOperativoRequest filtro)
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
        
        public JsonResult BuscarPlanOperativo(BandejaPlanOperativoRequest filtro)
        {
            filtro.CodigoIdioma = obtenerCodigoIdioma();

            var response = planOperativoService.BuscarPlanOperativo(filtro);
            return Json(response);
        }

        /// <summary>
        /// Permite obtener el listado de Observaciones planeadas
        /// </summary>
        /// <param name="filtro">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public JsonResult BuscarObjetivoEstrategicoFonafe(BandejaObjetivoEstrategicoFonafeRequest filtro)
        {
            var listTmp = (List<PermisosSistemaModel.PermisoControlador>)this.Session[Constantes.Sesion.Permisos.Lista_PermisosControlador];
            var permiso = listTmp.Where(x => x.Controlador == RouteData.Values["controller"].ToString()).Select(s => s.CodigoAccion).ToList()[0];

            filtro.CodigoIdioma = obtenerCodigoIdioma();
            filtro.EstadoRegistro = DatosConstantes.EstadoRegistro.Activo;
            var response = ObjetivoEstrategicoFonafeService.BuscarObjetivoEstrategicoFonafe(filtro);

            foreach (var item in response.Result)
            {
                item.Permiso = permiso;
            }

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

            var response = objetivoEstrategicoEmpresaDetalleService.BuscarObjetivoEstrategicoEmpresaDetalle(data);
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

        #region IndicadorMeta
        public JsonResult BuscarIndicadorMeta(IndicadorMetaRequest filtro)
        {
            filtro.CodigoIdioma = obtenerCodigoIdioma();
            var response = indicadorMetaService.BuscarIndicadorMeta(filtro);
            return Json(response);
        }
        /// <summary>
        /// Permite registrar o actualizar Indicadores
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public JsonResult RegistrarIndicadorMeta(IndicadorMetaRequest data)
        {
            data.CodigoIdioma = obtenerCodigoIdioma();
            var response = indicadorMetaService.RegistrarIndicadorMeta(data);
            return Json(response);
        }
        /// <summary>
        /// Permite anular una Inspección
        /// </summary>
        /// <param name="">Entidad Observacion Planeada</param>
        /// <returns>valor booleano con el resultado de la operacion</returns>
        public JsonResult EliminarIndicadorMeta(IndicadorMetaRequest data)
        {
            var response = indicadorMetaService.EliminarIndicadorMeta(data);
            return Json(response);
        }

        #endregion

        #region IndicadorValor
        public JsonResult BuscarIndicadorValor(IndicadorValorRequest filtro)
        {
            filtro.CodigoIdioma = obtenerCodigoIdioma();
            var response = indicadorValorService.BuscarIndicadorValor(filtro);
            return Json(response);
        }
        /// <summary>
        /// Permite registrar o actualizar Indicadores
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public JsonResult RegistrarIndicadorValor(IndicadorValorRequest data)
        {
            data.CodigoIdioma = obtenerCodigoIdioma();
            var response = indicadorValorService.RegistrarIndicadorValor(data);
            return Json(response);
        }
        /// <summary>
        /// Permite anular una Inspección
        /// </summary>
        /// <param name="">Entidad Observacion Planeada</param>
        /// <returns>valor booleano con el resultado de la operacion</returns>
        public JsonResult EliminarIndicadorValor(IndicadorValorRequest data)
        {
            var response = indicadorValorService.EliminarIndicadorValor(data);
            return Json(response);
        }

        #endregion

        #region IndicadorEvaluacion
        public JsonResult BuscarIndicadorEvaluacion(IndicadorEvaluacionRequest filtro)
        {
            filtro.CodigoIdioma = obtenerCodigoIdioma();
            var response = indicadorEvaluacionService.BuscarIndicadorEvaluacion(filtro);
            return Json(response);
        }
        /// <summary>
        /// Permite registrar o actualizar Indicadores
        /// </summary>
        /// <param name="data">Datos a registrar</param>
        /// <returns>Indicador con el resultado de la operación</returns>
        public JsonResult RegistrarIndicadorEvaluacion(IndicadorEvaluacionRequest data)
        {
            data.CodigoIdioma = obtenerCodigoIdioma();
            var response = indicadorEvaluacionService.RegistrarIndicadorEvaluacion(data);
            return Json(response);
        }
        /// <summary>
        /// Permite anular una Inspección
        /// </summary>
        /// <param name="">Entidad Observacion Planeada</param>
        /// <returns>valor booleano con el resultado de la operacion</returns>
        public JsonResult EliminarIndicadorEvaluacion(IndicadorEvaluacionRequest data)
        {
            var response = indicadorEvaluacionService.EliminarIndicadorEvaluacion(data);
            return Json(response);
        }

        #endregion

        /// <summary>
        /// Permite descagar el Plan Estratégico
        /// </summary>
        /// <param name="filtro">Filtro de búsqueda</param>
        /// <returns>Archivo de Reporte de Informe en formato Excel</returns>
        public FileResult DescargarPlanOperativo(BandejaPlanOperativoRequest filtro)
        {
            Warning[] warnings;
            string[] streamids;
            string mimeType;
            string encoding;
            string filenameExtension;
            string extension = "pdf";
            string fileType = "application/pdf";

            ReportViewer report = new ReportViewer();            

            var dt = planOperativoService.BuscarPlanOperativoRpt();

            report.ProcessingMode = ProcessingMode.Local;
            report.LocalReport.ReportPath = Server.MapPath("~/") + "Reports/PlanOperativo/rptPlanOperativo.rdlc";

            report.LocalReport.DataSources.Add(new ReportDataSource("dsPlanOperativo", dt.Result));
            report.LocalReport.Refresh();

            string fileNameExtension = "PlanOperativo" + DateTime.Now.Year + "." + extension;

            byte[] bytes = report.LocalReport.Render(extension.ToUpper(), null, out mimeType, out encoding, out filenameExtension, out streamids, out warnings);

            return File(bytes, fileType, fileNameExtension);
        }

        #endregion
    }
}
