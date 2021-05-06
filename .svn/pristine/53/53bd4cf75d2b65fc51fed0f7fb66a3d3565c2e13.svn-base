/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 19102017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.Index');
Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.Index.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Function.CrearGridBandejaInspeccion();
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
                Alerta: "0"
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
                    Alerta: "0"
                }
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.Actions.DescargarReporteBandejaInspecciones, filtro);
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.Resource.MsjSinResultadosInspecciones });
            }
        },
        BtnGridRevisarInspeccionClick: function (row, data) {
            data.IndicadorLectura = true;
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.Actions.IngresoInspeccion, data);
        },
        BtnGridEditInspeccionClick: function (row, data) {
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.Actions.IngresoInspeccion, data);
        },
        BtnGridDescargarReporteInspeccionClick: function (row, data) {
            if (base.Control.GrdResultadoBandeja.core.rows().data().length >= 1) {
                var filtro = {
                    CodigoInspeccion: data.CodigoInspeccion,
                    CodigoIntegradorTipoRegistro: data.CodigoIntegradorTipoRegistro
                }
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.Actions.DescargarReporteInspeccionPDF, filtro);
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.Resource.MsjSinResultadosInspecciones });
            }
        },
        BtnGridDescargarReporteInspeccionXLSClick: function (row, data) {
            if (base.Control.GrdResultadoBandeja.core.rows().data().length >= 1) {
                var filtro = {
                    CodigoInspeccion: data.CodigoInspeccion,
                    CodigoIntegradorTipoRegistro: data.CodigoIntegradorTipoRegistro
                }
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.Actions.DescargarReporteInspeccionXLS, filtro);
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.Resource.MsjSinResultadosInspecciones });
            }
        },
        BtnValidarEstadoInspeccion: function (data, type, full) {
            if (full.EstadoDocumento == Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.DatosConstantes.EstadosDeInspeccionAbierto
                || full.EstadoDocumento == Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.DatosConstantes.EstadosDeInspeccionReAbierto)
                return true;
            else
                return false;
        }
    };

    base.Ajax = {};

    base.Function = {
        CrearGridBandejaInspeccion: function () {           
            var columns = new Array();
            columns.push({
                data: 'Proyecto',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.Resource.GridProyecto,
                width: "15%"
            });
            columns.push({
                data: 'NumeroRegistroInspeccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.Resource.GridNumeroRegistroInspeccion,
                width: "10%"
            });
            columns.push({
                data: 'FechaEjecucionString',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.Resource.GridFechaEjecucion,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionTipoInspeccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.Resource.GridTipoInspeccion,
                width: "10%"
            });
            columns.push({
                data: 'TipoGestion',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.Resource.GridTipoGestion,
                width: "10%"
            });
            columns.push({
                data: 'AreaInspeccionada',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.Resource.GridAreaInspeccionada,
                width: "5%"
            });
            columns.push({
                data: 'InspectoresInternos',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.Resource.GridInspectoresInternos,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionEstadoAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.Resource.GridEstadoAccion,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionEstadoDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.Resource.GridEstadoInformacion,
                width: "10%"
            });            
            columns.push({
                data: '',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.Resource.GridAlerta,
                'mRender': function (data, type, full) {
                    var urlDespliegue = Pe.ElectroPeru.SGI.Presentacion.Core.Constante.DatosConstantes.ConfiguracionUrlDespliegue.DescripcionUrlDespligue;
                    var resultado = '<a href="javascript:void(0)" data-toggle="tooltip" title="{1}" disabled><img src="' + urlDespliegue + '/Theme/images/icon/{0}" /></a>';
                    switch (full.Alerta) {
                        case Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.DatosConstantes.ParametrosTiposAlerta.RequiereCierre:
                            resultado = resultado.replace("{1}", Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.DatosConstantes.ParametrosTiposAlerta.DescripcionRequiereCierre);
                            resultado = resultado.replace("{0}", "colorRojo.png");
                            break
                        case Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.DatosConstantes.ParametrosTiposAlerta.NoRequiereCierre:
                            resultado = resultado.replace("{1}", Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.DatosConstantes.ParametrosTiposAlerta.DescripcionNoRequiereCierre);
                            resultado = resultado.replace("{0}", "colorVerde.png");
                            break
                        case Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.DatosConstantes.ParametrosColorSemaforo.Plomo:
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
                width: "17%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Revisar, event: { on: 'click', callBack: base.Event.BtnGridRevisarInspeccionClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, validateRender: base.Event.BtnValidarEstadoInspeccion, event: { on: 'click', callBack: base.Event.BtnGridEditInspeccionClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Pdf, event: { on: 'click', callBack: base.Event.BtnGridDescargarReporteInspeccionClick }, toolTip: 'Reporte Inspección' },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Excel, event: { on: 'click', callBack: base.Event.BtnGridDescargarReporteInspeccionXLSClick }, toolTip: 'Reporte Inspección XLS' }
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
                    url: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.Actions.ConsultarInspeccion,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        }
    };
};