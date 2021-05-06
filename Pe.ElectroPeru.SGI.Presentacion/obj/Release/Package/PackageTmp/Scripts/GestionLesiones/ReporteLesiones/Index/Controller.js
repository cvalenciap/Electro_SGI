/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 20112017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.ReporteLesiones.Index');
Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.ReporteLesiones.Index.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        'use strict'        
        base.Control.BtnMostrarReporte().off('click');
        base.Control.BtnMostrarReporte().on('click', base.Event.BtnMostrarClick);

        base.Control.BtnLimpiar().off('click');
        base.Control.BtnLimpiar().on('click', base.Event.BtnLimpiarClick);

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmReporteLesiones(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos
            //validationsExtra: base.Function.ValidacionExtraReporteModal()
        });
    };
    base.Control = {
        FrmReporteLesiones: function () { return $('#frmReporteLesiones') },
        BtnMostrarReporte: function () { return $('#btnMostrarReporte'); },
        SlcProyecto: function () { return $('#slcProyecto'); },
        SlcAnio: function () { return $('#slcAnio'); },
        SlcMesDesde: function () { return $('#slcMesDesde'); },
        SlcMesHasta: function () { return $('#slcMesHasta'); },
        BtnLimpiar: function () { return $('#btnLimpiar'); },
    };

    base.Event = {
        BtnMostrarClick: function () {
            if (base.Control.Validador.isValid()) {                
                base.Ajax.AjaxVistaPreviaReporteGestionLesiones.data = {
                    CodigoProyecto: base.Control.SlcProyecto().val(),
                    NombreProyecto: $("#slcProyecto option:selected").text(),
                    Anio: base.Control.SlcAnio().val(),
                    MesDesde: base.Control.SlcMesDesde().val(),
                    DescripcionMesDesde: $("#slcMesDesde option:selected").text(),
                    MesHasta: base.Control.SlcMesHasta().val(),
                    DescripcionMesHasta: $("#slcMesHasta option:selected").text()
                }
                base.Ajax.AjaxVistaPreviaReporteGestionLesiones.submit();
            } else {
                $("#frmReporteLesionesSummaryErrorMessage").empty();
                $("#frmReporteLesionesSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnLimpiarClick: function () {
            base.Control.SlcProyecto().val('');
            base.Control.SlcAnio().val('');
            base.Control.SlcMesDesde().val('');
            base.Control.SlcMesHasta().val('');
        },
        AjaxVistaPreviaReporteGestionLesionesSuccess: function (resultado) {
            var old = Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.ReporteLesiones.Index.Actions.ConfiguracionUrlDespliegue + '/Base/Reporte/Index?Area=GestionLesiones2';
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
        AjaxVistaPreviaReporteGestionLesiones: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.ReporteLesiones.Index.Actions.VistaPreviaReporteGestionLesiones,
            autoSubmit: false,
            onSuccess: base.Event.AjaxVistaPreviaReporteGestionLesionesSuccess
        }),
    };
};