ns('Pe.ElectroPeru.SGI.Presentacion.Capacitacion.ReporteCapacitacion.ReporteEjecucionCapacitacion');
Pe.ElectroPeru.SGI.Presentacion.Capacitacion.ReporteCapacitacion.ReporteEjecucionCapacitacion.Controller = function (opts) {
    var base = this;
    base.Ini = function () {
        'use strict';
        base.Control.BtnMostrarReporte().off('click');
        base.Control.BtnMostrarReporte().on('click', base.Event.BtnMostrarReporteClick);
        base.Control.SlcProyecto().off('change');
        base.Control.SlcProyecto().on('change', base.Event.SlcProyectoChange);
        base.Control.SlcEquipo().off('change');
        base.Control.SlcEquipo().on('change', base.Event.SlcEquipoChange);
    };
    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        ArrayEquipos: [],
        SlcProyecto: function () { return $('#slcProyecto'); },
        SlcEquipo: function () { return $('#slcEquipo'); },
        TxtDescripcionEquipo: function () { return $('#txtDescripcionEquipo'); },
        BtnMostrarReporte: function () { return $('#btnMostrarReporte'); },
    };

    base.Event = {
        BtnMostrarReporteClick: function () {
            'use strict'
            base.Ajax.AjaxVistaPreviaReporteCapacitacion.data = {
                CodigoProyecto: base.Control.SlcProyecto().val(),
                CodigoEquipo: base.Control.SlcEquipo().val(),
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
            base.Control.SlcEquipo().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Capacitacion.ReporteEjecucionCapacitacion.Resource.EtiquetaTodos, ""));
            
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

        AjaxBuscarEquipoSuccess: function (resultado) {
            base.Control.ArrayEquipos = resultado.Result;            
            $.each(resultado.Result, function (index, value) {
                base.Control.SlcEquipo().append(new Option(value.DescripcionEquipo + ' - ' + value.CodigoDescripcionEquipo, value.CodigoEquipo));
            });
        },
        AjaxVistaPreviaReporteCapacitacionSuccess: function (resultado) {
            var old = Pe.ElectroPeru.SGI.Presentacion.Capacitacion.ReporteEjecucionCapacitacion.Actions.ConfiguracionUrlDespliegue + '/Base/Reporte/Index?Area=Reporte2';
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

        AjaxVistaPreviaReporteCapacitacion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.ReporteEjecucionCapacitacion.Actions.VistaPreviaReporteEjecucionCapacitacion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxVistaPreviaReporteCapacitacionSuccess
        }),

    };

};