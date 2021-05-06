/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 04012018
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.ReporteRiesgos.Index');
Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.ReporteRiesgos.Index.Controller = function (opts) {
    var base = this;
    
    base.Ini = function () {
        'use strict'
        base.Control.BtnMostrarReporte().off('click');
        base.Control.BtnMostrarReporte().on('click', base.Event.BtnMostrarClick);

        base.Control.BtnLimpiar().off('click');
        base.Control.BtnLimpiar().on('click', base.Event.BtnLimpiarClick);

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmReporteRiesgos(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos
            //validationsExtra: base.Function.ValidacionExtraReporteModal()
        });

        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaEjecucionDesde(),
            inputTo: base.Control.DtpFechaEjecucionHasta(),
            minDateFrom: new Date(1900, 1, 1)
        });
    };

    base.Control = {

        DtpFechaEjecucionDesde: function () { return $('#dtpFechaEjecucionDesde'); },
        DtpFechaEjecucionHasta: function () { return $('#dtpFechaEjecucionHasta'); },        
        FrmReporteRiesgos: function () { return $('#frmReporteRiesgos') },
        BtnMostrarReporte: function () { return $('#btnMostrarReporte'); },
        SlcProyecto: function () { return $('#slcProyecto'); },
        BtnLimpiar: function () { return $('#btnLimpiar'); },

    };

    base.Event = {
        BtnLimpiarClick: function () {
            base.Control.SlcProyecto().val('');
            base.Control.DtpFechaEjecucionDesde().val('');
            base.Control.DtpFechaEjecucionHasta().val('');
        },

        BtnMostrarClick: function () {
            if (base.Control.Validador.isValid()) {
                base.Ajax.AjaxVistaPreviaReporteRiesgos.data = {
                    CodigoProyecto: base.Control.SlcProyecto().val(),
                    NombreProyecto: $("#slcProyecto option:selected").text(),
                    FechaEjecucionDesde: base.Control.DtpFechaEjecucionDesde().val(),
                    FechaEjecucionHasta: base.Control.DtpFechaEjecucionHasta().val(),
                }
                base.Ajax.AjaxVistaPreviaReporteRiesgos.submit();
            } else {
                $("#frmReporteRiesgosSummaryErrorMessage").empty();
                $("#frmReporteRiesgosSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },

        AjaxVistaPreviaReporteRiesgosSuccess: function (resultado) {
            var old = Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.ReporteRiesgos.Index.Actions.ConfiguracionUrlDespliegue + '/Base/Reporte/Index?Area=ReporteResumenColaborador';
            var iframe = $("#ifrContenedor").attr("src");
            iframe = '';
            setTimeout(function () {
                $('#ifrContenedor').attr('src', old);
                iframe = old;
                $('#divContenedorReportView').show();
            }, 0);
        }
    };

    base.Ajax = {
        AjaxVistaPreviaReporteRiesgos: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.ReporteRiesgos.Index.Actions.VistaPreviaReporteRiesgos,
            autoSubmit: false,
            onSuccess: base.Event.AjaxVistaPreviaReporteRiesgosSuccess
        }),
    };

    base.Function = {};
};