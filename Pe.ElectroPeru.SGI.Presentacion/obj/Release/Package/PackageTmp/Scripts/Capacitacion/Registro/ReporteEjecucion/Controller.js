/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 08062017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.ReporteEjecucion');
Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.ReporteEjecucion.Controller = function () {
    var base = this;
    base.Ini = function () {
        'use strict'
        base.Control.SlcProyecto().off('change');
        base.Control.SlcProyecto().on('change', base.Event.SlcProyectoChange);
        base.Control.SlcEquipo().off('change');
        base.Control.SlcEquipo().on('change', base.Event.SlcEquipoChange);

        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaDesde(),
            minDateFrom: new Date(1900, 1, 1)
        });
        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaHasta(),
            minDateFrom: new Date(1900, 1, 1)
        });

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

        base.Control.BtnMostrarReporte().off('click');
        base.Control.BtnMostrarReporte().on('click', base.Event.BtnMostrarReporteClick);
    };

    base.Control = {
        SlcProyecto: function () { return $('#slcProyecto'); },
        SlcEquipo: function () { return $('#slcEquipo'); },
        SlcProceso: function () { return $('#slcProceso'); },
        SlcEstado: function () { return $('#slcEstado'); },
        SlcCondicion: function () { return $('#slcCondicion'); },
        SlcHorasPlanificadas: function () { return $('#slcHorasPlanificadas'); },
        DtpFechaDesde: function () { return $('#dtpFechaDesde'); },
        DtpFechaHasta: function () { return $('#dtpFechaHasta'); },
        BtnMostrarReporte: function () { return $('#btnMostrarReporte'); },
    };

    base.Event = {
        SlcProyectoChange: function () {
            'use strict'
            base.Control.SlcEquipo().empty();
            base.Control.SlcEquipo().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
            base.Control.SlcProceso().empty();
            base.Control.SlcProceso().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
            if (base.Control.SlcProyecto().val() != null && base.Control.SlcProyecto().val() != '') {
                base.Ajax.AjaxBuscarEquipos.data = {
                    CodigoProyecto: base.Control.SlcProyecto().val()
                };
                base.Ajax.AjaxBuscarEquipos.submit();
            } 
        },
        SlcEquipoChange: function () {
            'use strict'
            base.Control.SlcProceso().empty();
            base.Control.SlcProceso().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
            if (base.Control.SlcEquipo().val() != null && base.Control.SlcEquipo().val() != '') {
                 base.Ajax.AjaxBuscarProcesos.data = {
                    CodigoProyecto: base.Control.SlcProyecto().val(),
                    CodigoEquipo: base.Control.SlcEquipo().val()
                };
                base.Ajax.AjaxBuscarProcesos.submit();
            }
        },
        AjaxBuscarEquipoSuccess: function (resultado) {
            'use strict'
            $.each(resultado.Result, function (index, value) {
                base.Control.SlcEquipo().append(new Option(value.DescripcionEquipo, value.CodigoEquipo));
            });
        },
        AjaxBuscarProcesosSuccess: function (resultado) {
            'use strict'
            $.each(resultado.Result, function (index, value) {
                base.Control.SlcProceso().append(new Option(value.NombreProcesoEspaniol, value.CodigoProceso));
            });
        },
        BtnMostrarReporteClick: function () {
            'use strict'
            base.Ajax.AjaxVistaPreviaReportePorProyectoPersona.data = {
                CodigoProyecto: base.Control.SlcProyecto().val(),
                FechaInicio: base.Control.DtpFechaDesde().val(),
                FechaFin: base.Control.DtpFechaHasta().val(),
                CodigoEquipo: base.Control.SlcEquipo().val(),
                CodigoProceso: base.Control.SlcProceso().val(),
                CodigoEstado: base.Control.SlcEstado().val(),
                CodigoCondicion: base.Control.SlcCondicion().val(),
                TienePendiente: base.Control.SlcHorasPlanificadas().val(),
            }
            base.Ajax.AjaxVistaPreviaReportePorProyectoPersona.submit();
        },
        AjaxVistaPreviaReportePorProyectoPersonaSuccess: function (resultado) {
            $('#divContenedorReportView').show();
            var old = '/Base/Reporte/Index?Area=Reporte2';
            var iframe = $("#ifrContenedor").attr("src");
            iframe = '';
            setTimeout(function () {
                $("#ifrContenedor").attr("src", old);
                iframe = old;
            }, 0);
        }
    };

    base.Ajax = {
        AjaxBuscarEquipos: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.Actions.BuscarCombosEjecucion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarEquipoSuccess
        }),
        AjaxBuscarProcesos: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.Actions.BuscarCombosEjecucion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarProcesosSuccess
        }),
        AjaxVistaPreviaReportePorProyectoPersona: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.Actions.AjaxVistaPreviaReportePorProyectoPersona,
            autoSubmit: false,
            onSuccess: base.Event.AjaxVistaPreviaReportePorProyectoPersonaSuccess
        }),
    };

    base.Function = {
    };
};