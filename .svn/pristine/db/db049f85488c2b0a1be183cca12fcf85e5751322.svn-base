/// <summary>
/// Script de formulario de Leccion
/// </summary>
/// <remarks>
/// Creacion: 	GMD D43260443
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLeccionAprendida');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLeccionAprendida.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        base.Control.BtnGrabarLeccionAprendida().off('click');
        base.Control.BtnGrabarLeccionAprendida().on('click', base.Event.BtnGrabarLeccionAprendidaClick);
        
        if (opts != null && opts.AceptarSuccess != null && opts.AceptarSuccess)
            base.Event.AceptarSuccess = opts.AceptarSuccess;

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmLeccionAprendida(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraLeccionAprendida()
        });
    };

    base.Show = function (opts) {
        base.Control.CodigoInvestigacion = opts.CodigoInvestigacion;
        base.Control.CodigoInvestigacionLeccionAprendida = opts.CodigoInvestigacionLeccionAprendida;
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaTituloLeccionAprendida,
            size: "size-wide",
            close: function () {
            }
        });

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.FormularioLeccionAprendida,
            onSuccess: function () {
                base.Ini();
            },
            data: opts
        });
    };

    base.Control = {
        Validator: null,
        CodigoInvestigacion: null,
        CodigoInvestigacionLeccionAprendida: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        FrmLeccionAprendida: function () { return $('#frmLeccionAprendida'); },
        BtnGrabarLeccionAprendida: function () { return $('#btnGrabarLeccionAprendida'); },
        TxtLeccionAprendida: function () { return $('#txtLeccionAprendida'); }
    };

    base.Function = {        
        ValidacionExtraLeccionAprendida: function () {
            var validaciones = new Array();
            validaciones.push({
                Event: function () {
                    var resultado = true;
                    if (base.Control.TxtLeccionAprendida().val() == null || base.Control.TxtLeccionAprendida().val() == '') {
                        resultado = false;
                    }
                    if (resultado) {
                        base.Control.TxtLeccionAprendida().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtLeccionAprendida().attr('class', 'form-control hasError');
                    }
                    return resultado;
                }
            });
            return validaciones;
        }
    };

    base.Event = {
        BtnRegresarBandejaInvestigacionClick: function () {
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioAccionInmediata.Actions.Index, {});
        },
        BtnGrabarLeccionAprendidaClick: function () {
            'use-strict'
            if (base.Control.Validador.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarLeccionAprendida.data = {                            
                            CodigoInvestigacion: base.Control.CodigoInvestigacion,
                            CodigoInvestigacionLeccionAprendida: base.Control.CodigoInvestigacionLeccionAprendida,
                            Descripcion: base.Control.TxtLeccionAprendida().val()
                        }
                        base.Ajax.AjaxGrabarLeccionAprendida.submit();
                    }
                });
            } else {
                $("#frmLeccionAprendidaSummaryErrorMessage").empty();
                $("#frmLeccionAprendidaSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },
        AjaxGrabarLeccionAprendidaSuccess: function (resultado) {
            if (resultado.Result == 1) {
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
        }
    };

    base.Ajax = {
        AjaxGrabarLeccionAprendida: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarInvestigacionLeccionAprendida,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarLeccionAprendidaSuccess
        }),
    };
};
