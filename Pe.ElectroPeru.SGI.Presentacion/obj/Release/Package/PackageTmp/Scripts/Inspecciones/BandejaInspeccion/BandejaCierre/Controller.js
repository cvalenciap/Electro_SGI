/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 19102017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.BandejaCierre');
Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.BandejaCierre.Controller = function () {
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
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.Actions.DescargarReporteBandejaInspecciones, filtro);
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.Resource.MsjSinResultadosInspecciones });
            }
        },       
        BtnGridCierreInspeccionClick: function (row, data) {
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.Actions.FormularioCierre, data);
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
                width: "10%"
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
                    var resultado = '<a href="#" data-toggle="tooltip" title="{1}" disabled><img src="../../Theme/images/icon/{0}" /></a>';
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
                width: "12%",
                actionButtons: [
                   { type: Pe.GMD.UI.Web.Components.GridAction.VerSeguimiento, event: { on: 'click', callBack: base.Event.BtnGridCierreInspeccionClick }, toolTip: 'Cerrar' }
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