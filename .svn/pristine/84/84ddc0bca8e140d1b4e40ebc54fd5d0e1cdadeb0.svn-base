ns('Pe.ElectroPeru.SGI.Presentacion.Seguridad.Opcion.Formulario');
Pe.ElectroPeru.SGI.Presentacion.Seguridad.Opcion.Formulario.Controller = function (opts) {
    var base = this;
    base.Ini = function () {
        base.Event.GrabarSuccess = (opts.GrabarSuccess != null) ? opts.GrabarSuccess : null;
        base.Control.Modelo = Pe.ElectroPeru.SGI.Presentacion.Seguridad.Opcion.Models.Opcion;

        base.Control.btnCancelar().off('click');
        base.Control.btnCancelar().on('click', base.Event.btnCancelarClick);

        base.Control.btnGrabar().off('click');
        base.Control.btnGrabar().on('click', base.Event.btnGrabarClick);

        base.Control.validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.formulario(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Seguridad.Opcion.Resources.Validacion,
        });
    };

    base.Show = function (opts) {
        base.Control.dlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguridad.Opcion.Resources.Formulario,
            size: "size-wide",
            close: function () {
            }
        })

        base.Control.dlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguridad.Opcion.Actions.Formulario,
            onSuccess: function () {
                base.Ini();
            },
            data: opts.data
        });
    };

    base.Control = {
        dlgForm: null,
        validador: null,
        Modelo: null,
        mensaje: new Pe.GMD.UI.Web.Components.Message(),
        formulario: function () { return $('#frmFormulario'); },
        btnCancelar: function () { return $('#btnCancelar'); },
        btnGrabar: function () { return $('#btnGrabar'); },

        txtNombre: function () { return $('#txtNombre'); },
        txtDescripcion: function () { return $('#txtDescripcion'); },
        slcModulo: function () { return $('#slcModulo'); },
        slcOpcionPadre: function () { return $('#slcOpcionPadre'); },
        txtGlyphicon: function () { return $('#txtGlyphicon'); },        
        txtControlador: function () { return $('#txtControlador'); },
        txtMetodo: function () { return $('#txtMetodo'); },
        txtArea: function () { return $('#txtArea'); },
    };

    base.Event = {
        btnCancelarClick: function () {
            'use strict'
            base.Control.dlgForm.divDialog.close();
        },

        btnGrabarClick: function () {
            'use strict'
            if (base.Control.validador.isValid()) {
                base.Control.mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabar.data = {
                            CodigoOpcion: base.Control.Modelo.Opcion != null ? base.Control.Modelo.Opcion.CodigoOpcion : null,
                            CodigoModulo: base.Control.slcModulo().val(),
                            Nombre: base.Control.txtNombre().val(),
                            Descripcion: base.Control.txtDescripcion().val(),
                            OpcionPadre: base.Control.slcOpcionPadre().val(),
                            Glyphicon: base.Control.txtGlyphicon().val(),                            
                            Controlador: base.Control.txtControlador().val(),
                            Metodo: base.Control.txtMetodo().val(),
                            Area: base.Control.txtArea().val(),
                        };
                        base.Ajax.AjaxGrabar.submit();
                    }
                });
            }
            else {
                $("#frmFormularioSummaryErrorMessage").empty();
                $("#frmFormularioSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.MsgValideCampos + "</p>");
            }
        },
        AjaxGrabarSuccess: function (data) {
            if (data.IsSuccess) {
                base.Control.mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito });
                if (base.Event.GrabarSuccess != null) {
                    base.Event.btnCancelarClick();
                    base.Event.GrabarSuccess();
                }
            } else {
                base.Control.mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
    };

    base.Ajax = {
        AjaxGrabar: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguridad.Opcion.Actions.Registrar,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarSuccess
        })
    };
}