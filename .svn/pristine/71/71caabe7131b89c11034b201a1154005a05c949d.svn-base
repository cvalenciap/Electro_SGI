// <summary>
/// Script de controlador de Formulario UnidadOrganizativa
/// </summary>
/// <remarks>
/// Creacion: 	GMD(SYS) 21/01/2016
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.CentroCosto.FormularioCentroCosto');
Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.CentroCosto.FormularioCentroCosto.Controller = function (opts) {
    var base = this;
    base.Ini = function () {
        base.Event.GrabarCentroCostoSuccess = (opts.GrabarCentroCostoSuccess != null && opts.GrabarCentroCosto) ? opts.GrabarCentroCostoSuccess : null;
        base.Control.Modelo = Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.CentroCosto.Models.FormularioCentroCosto;

        base.Control.BtnCancelar().off('click');
        base.Control.BtnCancelar().on('click', base.Event.BtnCancelarClick);

        base.Control.BtnGrabar().off('click');
        base.Control.BtnGrabar().on('click', base.Event.BtnGrabarClick);

        setTimeout(function () {
            base.Control.DlgForm.setPosition(['center', 'center']);
        }, 200)

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FormularioCentroCosto(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.CentroCosto.Resources.Validacion
            //validationsExtra: base.Function.ValidacionExtra()
        });
    };

    base.Show = function (opts) {
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.CentroCosto.Resources.FormularioCentroCosto,
            close: function () {
                base.Control.DlgForm.destroy();
            }
        })

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.CentroCosto.Actions.FormularioCentroCosto,
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
        FormularioCentroCosto: function () { return $('#frmFormularioCentroCosto'); },
        BtnCancelar: function () { return $('#btnCancelar'); },
        BtnGrabar: function () { return $('#btnGrabar'); },
        SlcEmpresa: function () { return $('#slcEmpresa'); },
        TxtIdCCFormulario: function () { return $('#txtIdCCFormulario'); },
        TxtAbreviaturaCCFormulario: function () { return $('#txtAbreviaturaCCFormulario'); },
        TxtNombreCCFormulario: function () { return $('#txtNombreCCFormulario'); },
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
                            CodigoCentroCosto: base.Control.Modelo.CentroCosto != null ? base.Control.Modelo.CentroCosto.CodigoCentroCosto : null,
                            CodigoEmpresa: base.Control.SlcEmpresa().val(),
                            IdCC: base.Control.TxtIdCCFormulario().val(),
                            AbreviaturaCC: base.Control.TxtAbreviaturaCCFormulario().val(),
                            NombreCC: base.Control.TxtNombreCCFormulario().val(),
                            

                        };
                        base.Ajax.AjaxGrabar.submit();

                    }
                });
            }
        },

        AjaxGrabarSuccess: function (data) {
            if (data.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito });
                if (base.Event.GrabarCentroCostoSuccess != null) {
                    base.Event.GrabarCentroCostoSuccess();
                }
                base.Control.DlgForm.close();
            } else {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        }
    };


    base.Ajax = {
        AjaxGrabar: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.CentroCosto.Actions.RegistrarCentroCosto,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarSuccess
        })
    };

}