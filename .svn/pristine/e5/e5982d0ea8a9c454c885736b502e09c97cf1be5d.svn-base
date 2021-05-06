// <summary>
/// Script de controlador de Formulario UnidadOrganizativa
/// </summary>
/// <remarks>
/// Creacion: 	GMD(SYS) 21/01/2016
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.UnidadOrganizativa.FormularioUnidadOrganizativa');
Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.UnidadOrganizativa.FormularioUnidadOrganizativa.Controller = function (opts) {
    var base = this;
    base.Ini = function () {
        base.Event.GrabarUnidadOrganizativaSuccess = (opts.GrabarUnidadOrganizativaSuccess != null && opts.GrabarUnidadOrganizativaSuccess) ? opts.GrabarUnidadOrganizativaSuccess : null;
        base.Control.Modelo = Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.UnidadOrganizativa.Models.FormularioUnidadOrganizativa;

        base.Control.BtnCancelar().off('click');
        base.Control.BtnCancelar().on('click', base.Event.BtnCancelarClick);

        base.Control.BtnGrabar().off('click');
        base.Control.BtnGrabar().on('click', base.Event.BtnGrabarClick);

        setTimeout(function () {
            base.Control.DlgForm.setPosition(['center', 'center']);
        }, 200)

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FormularioUnidadOrganizativa(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.UnidadOrganizativa.Resources.Validacion
            //validationsExtra: base.Function.ValidacionExtra()
        });
    };

    base.Show = function (opts) {
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.UnidadOrganizativa.Resources.FormularioUnidadOrganizativa,
            close: function () {
                base.Control.DlgForm.destroy();
            }
        })

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.UnidadOrganizativa.Actions.FormularioUnidadOrganizativa,
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
        FormularioUnidadOrganizativa: function () { return $('#frmFormularioUnidadOrganizativa'); },
        BtnCancelar: function () { return $('#btnCancelar'); },
        BtnGrabar: function () { return $('#btnGrabar'); },
        SlcEmpresa: function () { return $('#slcEmpresaFormulario'); },
        TxtIdUOFormulario: function () { return $('#txtIdUOFormulario'); },
        TxtAbreviaturaUOFormulario: function () { return $('#txtAbreviaturaUOFormulario'); },
        TxtNombreUOFormulario: function () { return $('#txtNombreUOFormulario'); },
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
                            CodigoUO: base.Control.Modelo.UnidadOrganizativa != null ? base.Control.Modelo.UnidadOrganizativa.CodigoUO : null,
                            CodigoEmpresa: base.Control.SlcEmpresa().val(),
                            IdUO: base.Control.TxtIdUOFormulario().val(),
                            AbreviaturaUO: base.Control.TxtAbreviaturaUOFormulario().val(),
                            NombreUO: base.Control.TxtNombreUOFormulario().val()
                        };
                        base.Ajax.AjaxGrabar.submit();

                    }
                });
            }
        },

        AjaxGrabarSuccess: function (data) {
            if (data.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito });
                if (base.Event.GrabarUnidadOrganizativaSuccess != null) {
                    base.Event.GrabarUnidadOrganizativaSuccess();
                }
                base.Control.DlgForm.close();
            } else {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        }
    };


    base.Ajax = {
        AjaxGrabar: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.UnidadOrganizativa.Actions.RegistrarUnidadOrganizativa,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarSuccess
        })
    };

}