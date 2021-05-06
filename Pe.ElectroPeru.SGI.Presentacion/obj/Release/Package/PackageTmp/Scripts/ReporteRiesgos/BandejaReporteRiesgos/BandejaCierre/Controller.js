/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 04012018
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.BandejaCierre');
Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.BandejaCierre.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Function.CrearGridBandejaReporteRiesgos();
        base.Control.GrdResultadoBandeja.Load();

        base.Event.BtnBuscarClick();
        base.Control.BtnBuscar().click(base.Event.BtnBuscarClick);

        base.Control.BtnLimpiar().off('click');
        base.Control.BtnLimpiar().on('click', base.Event.BtnLimpiarClick);

        base.Control.btnDescargarExcel().on('click', base.Event.btnDescargarExcelClick);

        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaEjecucionDesde(),
            inputTo: base.Control.DtpFechaEjecucionHasta(),
            minDateFrom: new Date(1900, 1, 1)
        });
    };

    base.Control = {

        BtnBuscar: function () { return $('#btnBuscar'); },
        SlcProyecto: function () { return $('#slcProyecto'); },
        DtpFechaEjecucionDesde: function () { return $('#dtpFechaEjecucionDesde'); },
        DtpFechaEjecucionHasta: function () { return $('#dtpFechaEjecucionHasta'); },
        BtnLimpiar: function () { return $('#btnLimpiar'); },
        btnDescargarExcel: function () { return $('#btnDescargarExcel'); },

    };

    base.Event = {
        BtnBuscarClick: function () {
            var filtro = {
                CodigoProyecto: base.Control.SlcProyecto().val(),
                FechaEjecucionDesde: base.Control.DtpFechaEjecucionDesde().val(),
                FechaEjecucionHasta: base.Control.DtpFechaEjecucionHasta().val(),
                Alerta: "ALE01"
            };
            base.Control.GrdResultadoBandeja.Load(filtro);
        },
        BtnLimpiarClick: function () {
            base.Control.SlcProyecto().val('');
            base.Control.DtpFechaEjecucionDesde().val('');
            base.Control.DtpFechaEjecucionHasta().val('');
        },
        btnDescargarExcelClick: function () {
            if (base.Control.GrdResultadoBandeja.core.rows().data().length >= 1) {
                var filtro = {
                    CodigoProyecto: base.Control.SlcProyecto().val(),
                    FechaEjecucionDesde: base.Control.DtpFechaEjecucionDesde().val(),
                    FechaEjecucionHasta: base.Control.DtpFechaEjecucionHasta().val(),
                    Alerta: "ALE01"
                }
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.Actions.DescargarReporteBandejaReporteRiesgos, filtro);
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.Resource.MsjSinResultadosReporteRiesgos });
            }
        },
        BtnGridRevisarReporteRiesgosClick: function (row, data) {
            data.IndicadorLectura = true;
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.Actions.IngresoReporteRiesgos, data);
        },
        BtnGridEditReporteRiesgosClick: function (row, data) {
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.Actions.IngresoReporteRiesgos, data);
        },
        BtnGridDescargarReporteReporteRiesgosClick: function (row, data) {
            if (base.Control.GrdResultadoBandeja.core.rows().data().length >= 1) {
                var filtro = {
                    CodigoReporteRiesgos: data.CodigoReporteRiesgos,
                    CodigoIntegradorTipoRegistro: data.CodigoIntegradorTipoRegistro
                }
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.Actions.DescargarReporteReporteRiesgosPDF, filtro);
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.Resource.MsjSinResultadosReporteRiesgos });
            }
        },
        BtnGridDescargarReporteReporteRiesgosXLSClick: function (row, data) {
            if (base.Control.GrdResultadoBandeja.core.rows().data().length >= 1) {
                var filtro = {
                    CodigoReporteRiesgos: data.CodigoReporteRiesgos,
                    CodigoIntegradorTipoRegistro: data.CodigoIntegradorTipoRegistro
                }
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.Actions.DescargarReporteReporteRiesgosXLS, filtro);
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.Resource.MsjSinResultadosReporteRiesgos });
            }
        },
        BtnValidarEstadoReporteRiesgos: function (data, type, full) {
            if (full.EstadoDocumento == Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.DatosConstantes.EstadosDeReporteRiesgosAbierto
                || full.EstadoDocumento == Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.DatosConstantes.EstadosDeReporteRiesgosReAbierto)
                return true;
            else
                return false;
        },
        BtnGridCierreReporteRiesgosClick: function (row, data) {
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.Actions.FormularioCierre, data);
        }
    };

    base.Ajax = {};

    base.Function = {
        CrearGridBandejaReporteRiesgos: function () {
            var columns = new Array();
            columns.push({
                data: 'Proyecto',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.Resource.GridProyecto,
                width: "15%"
            });
            columns.push({
                data: 'NumeroRegistroReporteRiesgos',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.Resource.GridNumeroRegistroReporteRiesgos,
                width: "10%"
            });
            columns.push({
                data: 'FechaEjecucionString',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.Resource.GridFechaEjecucion,
                width: "10%"
            });
            columns.push({
                data: 'LugarExacto',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.Resource.GridLugarExacto,
                width: "10%"
            });
            columns.push({
                data: 'TipoReporte',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.Resource.GridTipoReporte,
                width: "10%"
            });
            columns.push({
                data: 'ClasificacionPerdida',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.Resource.GridClasificacionPerdida,
                width: "10%"
            });
            columns.push({
                data: 'CausaInmediata',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.Resource.GridCausaInmediata,
                width: "10%"
            });
            columns.push({
                data: 'ClasificacionReporteRiesgos',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.Resource.GridClasificacionReporteRiesgos,
                width: "10%"
            });
            columns.push({
                data: 'NivelRiesgo',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.Resource.GridNivelRiesgo,
                width: "10%"
            });
            columns.push({
                data: 'ReportantesInternos',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.Resource.GridReportantesInternos,
                width: "10%"
            });
            columns.push({
                data: 'EmpresasReportadas',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.Resource.GridEmpresasReportadas,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionCortaHallazgo',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.Resource.GridDescripcionCortaHallazgo,
                width: "10%"
            });
            columns.push({
                data: 'AccionInmediata',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.Resource.GridAccionInmediata,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionEstadoAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.Resource.GridEstadoAccion,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionEstadoDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.Resource.GridEstadoInformacion,
                width: "10%"
            });
            columns.push({
                data: 'Empresa',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.Resource.GridEstadoInformacion,
                width: "10%"
            });
            columns.push({
                data: 'Pais',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.Resource.GridEstadoInformacion,
                width: "10%"
            });
            columns.push({
                data: '',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.Resource.GridAlerta,
                'mRender': function (data, type, full) {
                    var urlDespliegue = Pe.ElectroPeru.SGI.Presentacion.Core.Constante.DatosConstantes.ConfiguracionUrlDespliegue.DescripcionUrlDespligue;
                    var resultado = '<a href="javascript:void(0)" data-toggle="tooltip" title="{1}" disabled><img src="' + urlDespliegue + '/Theme/images/icon/{0}" /></a>';
                    switch (full.Alerta) {
                        case Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.DatosConstantes.ParametrosTiposAlerta.RequiereCierre:
                            resultado = resultado.replace("{1}", Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.DatosConstantes.ParametrosTiposAlerta.DescripcionRequiereCierre);
                            resultado = resultado.replace("{0}", "colorRojo.png");
                            break
                        case Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.DatosConstantes.ParametrosTiposAlerta.NoRequiereCierre:
                            resultado = resultado.replace("{1}", Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.DatosConstantes.ParametrosTiposAlerta.DescripcionNoRequiereCierre);
                            resultado = resultado.replace("{0}", "colorVerde.png");
                            break
                        case Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.DatosConstantes.ParametrosColorSemaforo.Plomo:
                            resultado = resultado.replace("{1}", Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.EtiquetaAlertaPlomo);
                            resultado = resultado.replace("{0}", "colorPlomo.png");
                            break;
                    }
                    return resultado;
                }
            });            
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.VerSeguimiento, event: { on: 'click', callBack: base.Event.BtnGridCierreReporteRiesgosClick }, toolTip: 'Cerrar' }
                ]
            });
            base.Control.GrdResultadoBandeja = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResult',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.BandejaReporteRiesgos.Actions.ConsultarReporteRiesgos,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        }
    };
};