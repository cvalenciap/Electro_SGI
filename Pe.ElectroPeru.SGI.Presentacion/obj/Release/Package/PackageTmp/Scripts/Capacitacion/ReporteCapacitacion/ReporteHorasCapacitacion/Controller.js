ns('Pe.ElectroPeru.SGI.Presentacion.Capacitacion.ReporteCapacitacion.ReporteHorasCapacitacion');
Pe.ElectroPeru.SGI.Presentacion.Capacitacion.ReporteCapacitacion.ReporteHorasCapacitacion.Controller = function (opts) {
    var base = this;
    base.Ini = function () {
        'use strict';
        Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
        base.Control.BtnMostrarReporte().off('click');
        base.Control.BtnMostrarReporte().on('click', base.Event.BtnMostrarReporteClick);
        base.Control.SlcProyecto().off('change');
        base.Control.SlcProyecto().on('change', base.Event.SlcProyectoChange);
        base.Control.SlcEquipo().off('change');
        base.Control.SlcEquipo().on('change', base.Event.SlcEquipoChange);
        base.Control.SlcInstructor().off('change');
        base.Control.SlcInstructor().on('change', base.Event.SlcInstructorChange);

        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.TxtFechaDesde(),
            minDateFrom: new Date(1900, 1, 1)
        });
        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.TxtFechaHasta(),
            minDateFrom: new Date(1900, 1, 1)
        });
    };
    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        ArrayEquipos: [],
        ArrayParticipantes: [],
        SlcProyecto: function () { return $('#slcProyecto'); },
        SlcEquipo: function () { return $('#slcEquipo'); },
        SlcInstructor: function () { return $('#slcInstructor'); },
        SlcParticipantes: function () { return $('#slcParticipantes'); },
        TxtDescripcionEquipo: function () { return $('#txtDescripcionEquipo'); },
        //TxtPuestoTrabajo: function () { return $('#txtPuestoTrabajo'); },
        //TxtDescripcionCargo: function () { return $('#txtDescripcionCargo'); },
        TxtFechaDesde: function () { return $('#dtpFechaDesde'); },
        TxtFechaHasta: function () { return $('#dtpFechaHasta'); },
        BtnMostrarReporte: function () { return $('#btnMostrarReporte'); },
    };

    base.Event = {
        BtnMostrarReporteClick: function () {
            'use strict'
            base.Ajax.AjaxVistaPreviaReporteCapacitacion.data = {
                CodigoProyecto: base.Control.SlcProyecto().val(),
                CodigoEquipo: base.Control.SlcEquipo().val(),
                CodigoColaborador: base.Control.SlcParticipantes().val(),
                CodigoInstructor: base.Control.SlcInstructor().val(),
                NombreProyecto: $("#slcProyecto option:selected").text(),
                DescripcionEquipo: $("#slcEquipo option:selected").text(),
                NombreCompletoInstructor: $("#slcInstructor option:selected").text(),
                NombreCompletoParticipante: $("#slcParticipantes option:selected").text(),
                FechaDesde: base.Control.TxtFechaDesde().val(),
                FechaHasta: base.Control.TxtFechaHasta().val(),
            }
            base.Ajax.AjaxVistaPreviaReporteCapacitacion.submit();
        },
        ObtenerFamiliaEquipo: function () {
            'use strict'
            for (var i = 0; i < base.Control.ArrayEquipos.length; i++) {
                if (base.Control.SlcEquipo().val() == base.Control.ArrayEquipos[i].CodigoEquipo) {
                    base.Control.TxtDescripcionEquipo().val(base.Control.ArrayEquipos[i].DescripionFamiliaEquipo);
                    break;
                }
            }
        },
        SlcProyectoChange: function () {
            'use strict'
            base.Control.TxtDescripcionEquipo().val('');
            base.Control.SlcEquipo().empty();
            base.Control.SlcEquipo().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Capacitacion.ReporteHorasCapacitacion.Resource.EtiquetaTodos, ""));

            if (base.Control.SlcProyecto().val() != null && base.Control.SlcProyecto().val() != '') {
                base.Control.TxtDescripcionEquipo().val('');
                base.Ajax.AjaxBuscarEquipos.data = {
                    CodigoProyecto: base.Control.SlcProyecto().val()
                };
                base.Ajax.AjaxBuscarEquipos.submit();
            }
        },
        SlcEquipoChange: function () {
            'use strict'
            if (base.Control.SlcEquipo().val() != null && base.Control.SlcEquipo().val() != '') {
                base.Event.ObtenerFamiliaEquipo();
            }
            else {
                base.Control.TxtDescripcionEquipo().val('');
            }
        },
        SlcInstructorChange: function () {
            'use strict'
            //base.Control.TxtPuestoTrabajo().val('');
            base.Control.SlcParticipantes().empty();
            base.Control.SlcParticipantes().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Capacitacion.ReporteHorasCapacitacion.Resource.EtiquetaTodos, ""));

            if (base.Control.SlcInstructor().val() != null && base.Control.SlcInstructor().val() != '') {
                //base.Control.TxtPuestoTrabajo().val('');
                base.Ajax.AjaxBuscarParticipantes.data = {
                    CodigoInstructor: base.Control.SlcInstructor().val()
                };
                base.Ajax.AjaxBuscarParticipantes.submit();
            }
        },

        

        AjaxBuscarEquipoSuccess: function (resultado) {
            base.Control.ArrayEquipos = resultado.Result;
            $.each(resultado.Result, function (index, value) {
                base.Control.SlcEquipo().append(new Option(value.DescripcionEquipo + ' - ' + value.CodigoDescripcionEquipo, value.CodigoEquipo));
            });
        },
        AjaxBuscarParticipanteSuccess: function (resultado) {
            base.Control.ArrayParticipantes = resultado.Result;
            $.each(resultado.Result, function (index, value) {
                base.Control.SlcParticipantes().append(new Option(value.NombreCompletoParticipante, value.CodigoColaborador));
            });
        },
        AjaxVistaPreviaReporteCapacitacionSuccess: function (resultado) {
            var old = Pe.ElectroPeru.SGI.Presentacion.Capacitacion.ReporteHorasCapacitacion.Actions.ConfiguracionUrlDespliegue + '/Base/Reporte/Index?Area=Reporte2';
            var iframe = $('#ifrContenedor').attr('src');
            iframe = '';
            setTimeout(function () {
                $('#ifrContenedor').attr('src', old);
                iframe = old;
                $('#divContenedorReportView').show();
            }, 0);
        }

    };



    base.Ajax = {
        AjaxBuscarEquipos: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.Actions.BuscarCombosEjecucion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarEquipoSuccess
        }),
        AjaxBuscarParticipantes: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.Actions.BuscarParticipante,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarParticipanteSuccess
        }),
        AjaxVistaPreviaReporteCapacitacion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.ReporteHorasCapacitacion.Actions.VistaPreviaReporteHorasCapacitacion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxVistaPreviaReporteCapacitacionSuccess
        }),
    };

};