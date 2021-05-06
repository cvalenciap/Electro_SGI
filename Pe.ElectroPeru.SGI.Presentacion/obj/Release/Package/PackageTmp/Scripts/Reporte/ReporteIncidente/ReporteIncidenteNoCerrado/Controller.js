ns('Pe.ElectroPeru.SGI.Presentacion.Reporte.ReporteIncidente.ReporteIncidenteNoCerrado');
Pe.ElectroPeru.SGI.Presentacion.Reporte.ReporteIncidente.ReporteIncidenteNoCerrado.Controller = function (opts) {
    var base = this;
    base.Ini = function () {
        'use strict'

        var dateFormat = "dd/mm/yy",
          from = $("#dtpFechaDesde")
            .datepicker({ dateFormat: 'dd/mm/yy' })
            .on("change", function () {
                to.datepicker("option", "minDate", getDate(this));
            }),
          to = $("#dtpFechaHasta").datepicker({ dateFormat: 'dd/mm/yy' })
          .on("change", function () {
              from.datepicker("option", "maxDate", getDate(this));
          });

        function getDate(element) {
            var date;
            try {
                date = $.datepicker.parseDate(dateFormat, element.value);
            } catch (error) {
                date = null;
            }

            return date;
        }

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmReporteIncidenteNoCerrado(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.ValidarEmpresaCamposObligatorios
        });

        base.Control.BtnMostrarReporte().off('click');
        base.Control.BtnMostrarReporte().on('click', base.Event.BtnMostrarClick);
    };

    base.Control = {
        Validador: null,
        FrmReporteIncidenteNoCerrado: function () { return $('#frmReporteIncidenteNoCerrado') },
        SlcProyecto: function () { return $('#slcProyecto'); },
        DtpFechaDesde: function () { return $('#dtpFechaDesde'); },
        DtpFechaHasta: function () { return $('#dtpFechaHasta'); },
        BtnMostrarReporte: function () { return $('#btnMostrarReporte'); },
    };

    base.Event = {
        BtnMostrarClick: function () {
            if (base.Control.Validador.isValid()) {                
                base.Control.FrmReporteIncidenteNoCerrado().submit();
            } else {
                $("#frmReporteIncidenteNoCerradoSummaryErrorMessage").empty();
                $("#frmReporteIncidenteNoCerradoSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        }
    };
};