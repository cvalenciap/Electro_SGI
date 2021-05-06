ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Departamento.FormularioDepartamento');
Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Departamento.FormularioDepartamento.Controller = function (opts) {
    var base = this;
    base.Ini = function () {
        base.Control.BtnBuscarColaborador().on('click', base.Event.BtnBuscarColaboradorClick);
        base.Control.BtnGrabar().off('click');
        base.Control.BtnGrabar().on('click', base.Event.BtnGrabarClick);
        base.Control.BtnCancelar().off('click');
        base.Control.BtnCancelar().on('click', base.Event.BtnCancelarClick);
        base.Control.SlcProyecto().off('change');
        base.Control.SlcProyecto().on('change', base.Event.SlcProyectoChange);
        if (opts != null && opts.AceptarSuccess != null && opts.AceptarSuccess)
            base.Event.AceptarSuccess = opts.AceptarSuccess;

        base.Control.DlgFormularioColaborador = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.AsignarValoresColaboradorClick
        });
        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmDepartamento(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Departamento.Resource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraColaborador()
        });
    };
    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        CodigoDepartamento: null,
        Validador: null,
        FrmDepartamento: function () { return $('#frmDepartamento'); },
        DlgFormularioColaborador: null,
        BtnBuscarColaborador: function () { return $('#btnBuscarColaborador'); },
        SlcProyecto: function () { return $('#slcProyecto'); },
        SlcEstado: function () { return $('#slcEstado'); },
        TxtNombreDepartamento: function () { return $('#txtNombreDepartamento'); },
        TxtCodigoColaborador: function () { return $('#txtCodigoColaborador'); },
        HdnCodigoColaborador: function () { return $('#hdnCodigoColaborador'); },
        BtnGrabar: function () { return $('#btnGrabar'); },
        BtnCancelar: function () { return $('#btnCancelar'); },
    };
    base.Event = {
        SlcProyectoChange: function () {
            base.Control.HdnCodigoColaborador().val(0);
            base.Control.TxtCodigoColaborador().val("");
        },
        AsignarValoresColaboradorClick: function (objColaborador) {
            'use strict'
            base.Control.TxtCodigoColaborador().val(objColaborador[0].NombreCompletoColaborador);
            base.Control.HdnCodigoColaborador().val(objColaborador[0].CodigoColaborador);
        },
        BtnBuscarColaboradorClick: function () {
            'use strict'
            if (base.Control.SlcProyecto().val() != '') {
                var filtro = {
                    CodigoProyecto: base.Control.SlcProyecto().val()
                };
                base.Control.DlgFormularioColaborador.Show(false, [], filtro, false);
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Departamento.Resource.MensajeSeleccionProyecto });
            }

        },
        BtnGrabarClick: function () {
            'use strict'
            if (base.Control.Validador.isValid()) {
                base.Ajax.AjaxGrabar.data = {
                    CodigoDepartamento: base.Control.CodigoDepartamento,
                    CodigoProyecto: base.Control.SlcProyecto().val(),
                    NombreDepartamento: base.Control.TxtNombreDepartamento().val(),
                    CodigoColaboradorResponsable: base.Control.HdnCodigoColaborador().val(),
                    EstadoRegistroCodigo: base.Control.SlcEstado().val()
                };
                base.Ajax.AjaxGrabar.submit();
            }
            else {
                $("#frmDepartamentoSummaryErrorMessage").empty();
                $("#frmDepartamentoSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },
        AjaxGrabarSuccess: function (resultado) {
            if (resultado.IsSuccess) {
                base.Control.DlgForm.divDialog.close();
                if (base.Event.AceptarSuccess != null) {
                    base.Event.AceptarSuccess();
                }
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });

            }
        },
    };

    base.Show = function (opts) {
        base.Control.CodigoDepartamento = opts.CodigoDepartamento;
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Departamento.Resource.EtiquetaTituloPrincipal,
            size: "size-wide",
            close: function () {
            }
        });

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Departamento.Actions.FormularioDepartamento,
            onSuccess: function () {
                base.Ini();
            },
            data: {
                CodigoDepartamento: base.Control.CodigoDepartamento
            }
        });
    };

    base.Ajax = {
        AjaxGrabar: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Departamento.Actions.RegistrarDepartamento,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarSuccess
        }),
    };

    base.Function = {
        ValidacionExtraColaborador: function () {
            var validaciones = new Array();

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.HdnCodigoColaborador().val() == null || base.Control.HdnCodigoColaborador().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtCodigoColaborador().attr('class', 'form-control');
                    } else {
                        base.Control.TxtCodigoColaborador().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });
            return validaciones;
        },
    };
};