ns('Pe.ElectroPeru.SGI.Presentacion.Seguridad.Usuarios.CambiarContrasena');
Pe.ElectroPeru.SGI.Presentacion.Seguridad.Usuarios.CambiarContrasena.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        base.Control.UsuariosModel = Pe.ElectroPeru.SGI.Presentacion.Seguridad.Usuarios.Models.Usuarios;

        base.Control.btnGrabarContrasena().off('click');
        base.Control.btnGrabarContrasena().on('click', base.Event.btnGrabarContrasenaClick);

        base.Control.validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.formulario(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Seguridad.Usuarios.Resources.Validacion,
        });
    };

    base.Control = {
        formulario: function () { return $('#frmCambiarContrasena'); },
        txtUsuario: function () { return $('#txtUsuario'); },
        txtContrasenaAntigua: function () { return $('#txtContrasenaAntigua'); },
        txtContrasenaNueva: function () { return $('#txtContrasenaNueva'); },

        btnGrabarContrasena: function () { return $('#btnGrabarContrasena'); },

        mensaje: new Pe.GMD.UI.Web.Components.Message(),
        UsuariosModel: null,
        validador: null,
    };

    base.Event = {
        btnGrabarContrasenaClick: function () {
            'use strict'
            if (base.Control.validador.isValid()) {
                base.Control.mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabar.data = {
                            CodigoUsuario: base.Control.UsuariosModel.Usuarios != null ? base.Control.UsuariosModel.Usuarios.CodigoUsuario : null,
                            Usuario: base.Control.txtUsuario().val(),
                            Contrasena: base.Control.txtContrasenaAntigua().val(),
                            ContrasenaNueva: base.Control.txtContrasenaNueva().val(),
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
        AjaxGrabarContrasenaSuccess: function (data) {            
            if (data.IsSuccess) {
                if (data.Result.EstadoRegistroBit) {
                    base.Control.mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito });
                    if (base.Event.GrabarSuccess != null) {
                        base.Event.GrabarSuccess();
                    }
                }else
                {
                    base.Control.mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Seguridad.Usuarios.Resources.EtiquetaUsuarioIncorrecto });
                }
            } else {
                base.Control.mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },       
    };

    base.Ajax = {       
        AjaxGrabar: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguridad.Usuarios.Actions.RegistrarCambiarContrasena,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarContrasenaSuccess
        })
    };
}