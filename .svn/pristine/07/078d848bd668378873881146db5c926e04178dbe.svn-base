// <summary>
/// Script de controlador de Formulario LugarTrabajo
/// </summary>
/// <remarks>
/// Creacion: 	GMD(SYS) 21/01/2016
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.LugarTrabajo.FormularioLugarTrabajo');
Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.LugarTrabajo.FormularioLugarTrabajo.Controller = function (opts) {
    var base = this;
    base.Ini = function () {
        base.Event.GrabarLugarTrabajoSuccess = (opts.GrabarLugarTrabajoSuccess != null && opts.GrabarLugarTrabajoSuccess) ? opts.GrabarLugarTrabajoSuccess : null;
        base.Control.Modelo = Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.LugarTrabajo.Models.FormularioLugarTrabajo;

        base.Control.BtnCancelar().off('click');
        base.Control.BtnCancelar().on('click', base.Event.BtnCancelarClick);

        base.Control.BtnGrabar().off('click');
        base.Control.BtnGrabar().on('click', base.Event.BtnGrabarClick);

        setTimeout(function () {
            base.Control.DlgForm.setPosition(['center', 'center']);
        }, 200)

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FormularioLugarTrabajo(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.LugarTrabajo.Resources.Validacion
            //validationsExtra: base.Function.ValidacionExtra()
        });
    };

    base.Show = function (opts) {
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.LugarTrabajo.Resources.FormularioLugarTrabajo,
            close: function () {
                base.Control.DlgForm.destroy();
            }
        })

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.LugarTrabajo.Actions.FormularioLugarTrabajo,
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
        FormularioLugarTrabajo: function () { return $('#frmFormularioLugarTrabajo'); },
        BtnCancelar: function () { return $('#btnCancelar'); },
        BtnGrabar: function () { return $('#btnGrabar'); },
        SlcEmpresa: function () { return $('#slcEmpresaFormulario'); },
        TxtIdLugarTrabajoFormulario: function () { return $('#txtIdLugarTrabajoFormulario'); },
        TxtAbreviaturaLugarTrabajoFormulario: function () { return $('#txtAbreviaturaLugarTrabajoFormulario'); },
        TxtNombreLugarTrabajoFormulario: function () { return $('#txtNombreLugarTrabajoFormulario'); },
    };

    base.Event = {
        BtnCancelarClick: function () {
            'use strict'
            base.Control.DlgForm.close();
        },

        BtnGrabarClick: function () {
            'use strict'
            if (base.Control.Validador.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabar.data = {
                            CodigoLugarTrabajo: base.Control.Modelo.LugarTrabajo != null ? base.Control.Modelo.LugarTrabajo.CodigoLugarTrabajo : null,
                            CodigoEmpresa: base.Control.SlcEmpresa().val(),
                            IdLugarTrabajo: base.Control.TxtIdLugarTrabajoFormulario().val(),
                            AbreviaturaLugarTrabajo: base.Control.TxtAbreviaturaLugarTrabajoFormulario().val(),
                            NombreLugarTrabajo: base.Control.TxtNombreLugarTrabajoFormulario().val()
                        };
                        base.Ajax.AjaxGrabar.submit();

                    }
                });
            }
        },

        AjaxGrabarSuccess: function (data) {
            if (data.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito });
                if (base.Event.GrabarLugarTrabajoSuccess != null) {
                    base.Event.GrabarLugarTrabajoSuccess();
                }
                base.Control.DlgForm.close();
            } else {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        }
    };


    base.Ajax = {
        AjaxGrabar: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.LugarTrabajo.Actions.RegistrarLugarTrabajo,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarSuccess
        })
    };

}