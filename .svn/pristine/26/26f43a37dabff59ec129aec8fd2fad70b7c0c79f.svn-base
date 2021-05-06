// <summary>
/// Script de controlador de Formulario UnidadOrganizativa
/// </summary>
/// <remarks>
/// Creacion: 	GMD(SYS) 21/01/2016
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Area.FormularioArea');
Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Area.FormularioArea.Controller = function (opts) {
    var base = this;
    base.Ini = function () {
        base.Event.GrabarAreaSuccess = (opts.GrabarAreaSuccess != null) ? opts.GrabarAreaSuccess : null;
        base.Control.Modelo = Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Area.Models.FormularioArea;

        base.Control.BtnBuscarColaborador().on('click', base.Event.BtnBuscarColaboradorClick);

        base.Control.BtnCancelar().off('click');
        base.Control.BtnCancelar().on('click', base.Event.BtnCancelarClick);

        base.Control.BtnGrabar().off('click');
        base.Control.BtnGrabar().on('click', base.Event.BtnGrabarClick);

        base.Control.SlcProyecto().off('change');
        base.Control.SlcProyecto().on('change', base.Event.SlcProyectoChange);

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FormularioArea(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Area.Resources.Validacion,
            validationsExtra: base.Function.ValidacionExtraColaborador()
        });

        base.Control.DlgFormularioColaborador = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.AsignarValoresColaboradorClick
        });
    };

    base.Show = function (opts) {
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Area.Resources.FormularioArea,
            size: "size-wide",
            close: function () {
            }
        })

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Area.Actions.FormularioArea,
            onSuccess: function () {
                base.Ini();
            },
            data: opts.data
        });
    };

    base.Control = {
        DlgForm: null,
        Validador: null,
        Modelo: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        FormularioArea: function () { return $('#frmFormularioArea'); },
        BtnBuscarColaborador: function () { return $('#btnBuscarColaborador'); },
        BtnCancelar: function () { return $('#btnCancelar'); },
        BtnGrabar: function () { return $('#btnGrabar'); },
        TxtNombreArea: function () { return $('#txtNombreAreaFormulario'); },
        SlcDepartamento: function () { return $('#slcDepartamento'); },
        TxtCodigoColaborador: function () { return $('#txtCodigoColaborador'); },
        HdnCodigoColaborador: function () { return $('#hdnCodigoColaborador'); },
        SlcProyecto: function () { return $('#slcProyecto'); },
        DlgFormularioColaborador: null,
    };

    base.Event = {
        SlcProyectoChange: function () {
            base.Control.SlcDepartamento().empty();
            base.Control.SlcDepartamento().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));

            if (base.Control.SlcProyecto().val() != '') {
                base.Ajax.AjaxBuscarDepartamento.data = {
                    CodigoProyecto: base.Control.SlcProyecto().val()
                };
                base.Ajax.AjaxBuscarDepartamento.submit();
            }
        },
        BtnBuscarColaboradorClick: function () {
            'use strict'
            var filtro = {};
            base.Control.DlgFormularioColaborador.Show(false, [], filtro, false);
        },
        BtnCancelarClick: function () {
            'use strict'
            base.Control.DlgForm.divDialog.close();
        },

        BtnGrabarClick: function () {
            'use strict'
            if (base.Control.Validador.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabar.data = {
                            CodigoArea: base.Control.Modelo.Area != null ? base.Control.Modelo.Area.CodigoArea : null,
                            CodigoProyecto: base.Control.SlcProyecto().val(),
                            CodigoDepartamento: base.Control.SlcDepartamento().val(),
                            CodigoColaboradorResponsable: base.Control.HdnCodigoColaborador().val(),
                            NombreArea: base.Control.TxtNombreArea().val(),
                        };
                        base.Ajax.AjaxGrabar.submit();
                    }
                });
            } else {
                $("#frmAreaSummaryErrorMessage").empty();
                $("#frmAreaSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },
        AsignarValoresColaboradorClick: function (objColaborador) {
            'use strict'
            base.Control.TxtCodigoColaborador().val(objColaborador[0].NombreCompletoColaborador);
            base.Control.HdnCodigoColaborador().val(objColaborador[0].CodigoColaborador); 
        },
        AjaxGrabarSuccess: function (data) {
            if (data.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito });
                if (base.Event.GrabarAreaSuccess != null) {
                    base.Event.BtnCancelarClick();
                    base.Event.GrabarAreaSuccess();
                }
            } else {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxBuscarDepartamentoSuccess: function (resultado) {
        $.each(resultado.Result, function (index, value) {
            //base.Control.SlcDepartamento().attr('validable', 'required Validar');
            base.Control.SlcDepartamento().append(new Option(value.NombreDepartamento, value.CodigoDepartamento));
        });
    },
    };

    base.Ajax = {
        AjaxBuscarDepartamento: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Area.Actions.BuscarDepartamento,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarDepartamentoSuccess
        }),
        AjaxGrabar: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Area.Actions.RegistrarArea,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarSuccess
        })
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
}