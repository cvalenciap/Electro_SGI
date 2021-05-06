/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD D43260443
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioFactoresCausales');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioFactoresCausales.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        base.Event.GrabarAnalisiSuccess = (opts.GrabarAnalisiSuccess != null && opts.GrabarAnalisiSuccess) ? opts.GrabarAnalisiSuccess : null;
        base.Control.FormularioFactor = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Models.FormularioFactorModel;

        base.Control.BtnGuardarFactorCausal().off('click');
        base.Control.BtnGuardarFactorCausal().on('click', base.Event.BtnGuardarFactorCausalClick);

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmAnalisisFactoresCausales(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraFactor()
        });

        base.Control.BtnCancelarFactorCausal().off('click');
        base.Control.BtnCancelarFactorCausal().on('click', base.Event.BtnCancelarFactorCausalChange);
    };

    base.Show = function (opts) {        
        base.Control.CodigoInvestigacionFactorCausal = opts.CodigoInvestigacionFactorCausal;
        base.Control.CodigoInvestigacion = opts.CodigoInvestigacion;
        base.Control.DlgFormPrincipalFactorCausal = new Pe.GMD.UI.Web.Components.Dialog({
            title: opts.title,
            close: function () {
            }
        });

        base.Control.DlgFormPrincipalFactorCausal.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.FormularioFactoresCausales,
            onSuccess: function () {
                base.Ini();
            },
            data: opts
        });
    };

    base.Control = {
        Validador: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        FormularioFactor: null,
        CodigoEstadoInvestigacion : null,
        FrmAnalisisFactoresCausales: function () { return $('#frmAnalisisFactoresCausales'); },
        CodigoInvestigacion: null,
        CodigoInvestigacionFactorCausal: null,
        BtnCancelarFactorCausal: function () { return $('#btnCancelarFactorCausal'); },
        BtnGuardarFactorCausal: function () { return $('#btnGuardarFactorCausal'); },

        TxtCodigoFactorCausal: function () { return $('#txtCodigoFactorCausal'); },
        TxaDescripcionFactorCausal: function () { return $('#txaDescripcionFactorCausal'); },
    };

    base.Function = {
        ValidacionExtraFactor: function () {
            var validaciones = new Array();
            //validar decsripcion del evento
            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.TxaDescripcionFactorCausal().val() == null || base.Control.TxaDescripcionFactorCausal().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxaDescripcionFactorCausal().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxaDescripcionFactorCausal().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });
            return validaciones;
        },
    };

    base.Event = {
        BtnGuardarFactorCausalClick: function () {
            if (base.Control.Validador.isValid()) {
            base.Control.Mensaje.Confirmation({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                onAccept: function () {
                    base.Ajax.AjaxGrabarFactorCausal.data = {
                        CodigoInvestigacionFactorCausal: base.Control.FormularioFactor.InvestigacionFactorCausal.CodigoInvestigacionFactorCausal,
                        CodigoFactorCausal : base.Control.TxtCodigoFactorCausal().val(),
                        CodigoInvestigacion: base.Control.CodigoInvestigacion,
                        Descripcion: base.Control.TxaDescripcionFactorCausal().val()
                    }
                    base.Ajax.AjaxGrabarFactorCausal.submit();
                }
            });
            }
            else {
                $("#frmAnalisisFactoresCausalesSummaryErrorMessage").empty();
                $("#frmAnalisisFactoresCausalesSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },

        AjaxGrabarFactorCausalSuccess: function (resultado) {
            if (resultado.IsSuccess) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Control.DlgFormPrincipalFactorCausal.divDialog.close();
                if (base.Event.GrabarAnalisiSuccess() != null) {
                    base.Event.GrabarAnalisiSuccess();
                }
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },

        BtnCancelarFactorCausalChange: function () { base.Control.DlgFormPrincipalFactorCausal.divDialog.close(); }
    };

    base.Ajax = {
        AjaxGrabarFactorCausal: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarFactorCausal,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarFactorCausalSuccess
        }),
    };
};