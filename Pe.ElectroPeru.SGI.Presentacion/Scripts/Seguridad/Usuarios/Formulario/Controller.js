ns('Pe.ElectroPeru.SGI.Presentacion.Seguridad.Usuarios.Formulario');
Pe.ElectroPeru.SGI.Presentacion.Seguridad.Usuarios.Formulario.Controller = function (opts) {
    var base = this;
    base.Ini = function () {
        base.Event.GrabarSuccess = (opts.GrabarSuccess != null) ? opts.GrabarSuccess : null;
        base.Control.Modelo = Pe.ElectroPeru.SGI.Presentacion.Seguridad.Usuarios.Models.Usuarios;

        base.Control.btnCancelar().off('click');
        base.Control.btnCancelar().on('click', base.Event.btnCancelarClick);

        base.Control.btnGrabar().off('click');
        base.Control.btnGrabar().on('click', base.Event.btnGrabarClick);       

        base.Control.validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.formulario(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Seguridad.Usuarios.Resources.Validacion,            
        });        
    };

    base.Show = function (opts) {
        base.Control.dlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguridad.Usuarios.Resources.Formulario,
            size: "size-wide",
            close: function () {
            }
        })

        base.Control.dlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguridad.Usuarios.Actions.Formulario,
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
        txtApellido: function () { return $('#txtApellido'); },
        txtEMail: function () { return $('#txtEMail'); },
        slcTipoDocumento: function () { return $('#slcTipoDocumento'); },
        txtNumeroDocumento: function () { return $('#txtNumeroDocumento'); },
        txtFechaActividad: function () { return $('#txtFechaActividad'); },
        slcCargo: function () { return $('#slcCargo'); },
        txtUsuario: function () { return $('#txtUsuario'); },
        txtContrasenia: function () { return $('#txtContrasenia'); },
        chbReestablecerContrasena: function () { return $('#chbReestablecerContrasena'); },
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
                            CodigoUsuario: base.Control.Modelo.Usuarios != null ? base.Control.Modelo.Usuarios.CodigoUsuario : null,                           
                            Nombre: base.Control.txtNombre().val(),
                            Apellido: base.Control.txtApellido().val(),
                            EMail: base.Control.txtEMail().val(),
                            TipoDocumentoIdentidad: base.Control.slcTipoDocumento().val(),
                            NumDocumentoIdentidad: base.Control.txtNumeroDocumento().val(),
                            Usuario: base.Control.txtUsuario().val(),
                            Contrasena: base.Control.Modelo.Usuarios.Contrasena,
                            CodigoCargo: base.Control.slcCargo().val(),
                            NombreCargo: base.Control.slcCargo().find("option:selected").text(),
                            ReestablecerContrasena: base.Control.chbReestablecerContrasena().is(":checked"),
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
            action: Pe.ElectroPeru.SGI.Presentacion.Seguridad.Usuarios.Actions.Registrar,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarSuccess
        })
    };
}