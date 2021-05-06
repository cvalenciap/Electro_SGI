ns('Pe.ElectroPeru.SGI.Presentacion.Capacitacion.ReporteCapacitacion.ReporteCapacitacionPorTrabajador');
Pe.ElectroPeru.SGI.Presentacion.Capacitacion.ReporteCapacitacion.ReporteCapacitacionPorTrabajador.Controller = function (opts) {
    var base = this;
    base.Ini = function () {
        'use strict'
        base.Control.BtnBuscarColaboradorReporteCapacitacion().on('click', base.Event.BtnBuscarColaboradorReporteCapacitacionClick);
        base.Control.DlgFormularioParticipante = new Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioAgregarPersonasModal.Controller({
            GrabarColaboradorPersonaProyectoSuccess: base.Event.AsignarValoresColaboradorClick
        });

        base.Control.BtnMostrarReporte().off('click');
        base.Control.BtnMostrarReporte().on('click', base.Event.BtnMostrarReporteClick);

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmReporteCapacitacionPorTrabajador(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.ReporteCapacitacionPorTrabajador.Resource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraReporteModal()
        });
    };

    base.Control = {
        DlgFormularioParticipante: null,
        FrmReporteCapacitacionPorTrabajador: function () { return $('#frmReporteCapacitacionPorTrabajador'); },
        BtnBuscarColaboradorReporteCapacitacion: function () { return $('#btnBuscarColaboradorReporteCapacitacion'); },
        BtnMostrarReporte: function () { return $('#btnMostrarReporte'); },
        HdnCodigoColaboradorReporte: function () { return $('#hdnCodigoColaboradorReporte'); },
        TxtNombreColaboradorReporte: function () { return $('#txtNombreColaboradorReporte'); },
    };

    base.Event = {
        BtnBuscarColaboradorReporteCapacitacionClick: function () {
            base.Control.DlgFormularioParticipante.Show(false, [], {}, false);
        },
        AsignarValoresColaboradorClick: function (objColaborador) {
            'use strict'
            if (objColaborador != null && objColaborador.length > 0) {                
                base.Control.TxtNombreColaboradorReporte().val(objColaborador[0].NombreCompletoColaborador);
                base.Control.HdnCodigoColaboradorReporte().val(objColaborador[0].CodigoColaborador);
            }
        },
        BtnMostrarReporteClick: function () {
            if (base.Control.Validador.isValid()) {  
                base.Ajax.AjaxVistaPreviaReporteCapacitacion.data = {
                    CodigoColaborador: base.Control.HdnCodigoColaboradorReporte().val()
                }
                base.Ajax.AjaxVistaPreviaReporteCapacitacion.submit();
            }
            else {
                $("#frmReporteCapacitacionPorTrabajadorSummaryErrorMessage").empty();
                $("#frmReporteCapacitacionPorTrabajadorSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },
        AjaxVistaPreviaReporteCapacitacionSuccess: function (resultado) {
            var old = Pe.ElectroPeru.SGI.Presentacion.Capacitacion.ReporteCapacitacionPorTrabajador.Actions.ConfiguracionUrlDespliegue + '/Base/Reporte/Index?Area=Reporte2';
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
        AjaxVistaPreviaReporteCapacitacion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.ReporteCapacitacionPorTrabajador.Actions.VistaPreviaReporteCapacitacion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxVistaPreviaReporteCapacitacionSuccess
        }),
    };

    base.Function = {
        ValidacionExtraReporteModal: function () {
            var validaciones = new Array();

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.HdnCodigoColaboradorReporte().val() == null || base.Control.HdnCodigoColaboradorReporte().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtNombreColaboradorReporte().attr('class', 'form-control');
                    } else {
                        base.Control.TxtNombreColaboradorReporte().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });

            return validaciones;
        },
    };
};