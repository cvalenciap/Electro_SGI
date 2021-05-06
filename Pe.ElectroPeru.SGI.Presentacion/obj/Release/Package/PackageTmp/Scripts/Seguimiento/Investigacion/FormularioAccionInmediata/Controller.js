/// <summary>
/// Script de formulario de Supervisor
/// </summary>
/// <remarks>
/// Creacion: 	GMD D43260443
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioAccionInmediata');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioAccionInmediata.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        base.Control.BtnGuardarInvestigacionAccionInmediata().off('click');
        base.Control.BtnGuardarInvestigacionAccionInmediata().on('click', base.Event.BtnGuardarInvestigacionAccionInmediataClick);

        if (opts != null && opts.AceptarSuccess != null && opts.AceptarSuccess)
            base.Event.AceptarSuccess = opts.AceptarSuccess;

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmInvestigacionAccionInmediata(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraInvestigacionAccionInmediata()
        });
    };

    base.Show = function (opts) {        
        base.Control.CodigoInvestigacionAccionInmediata = opts.CodigoInvestigacionAccionInmediata;
        base.Control.CodigoInvestigacion = opts.CodigoInvestigacion;        
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaTituloAccionInmediata,
            size: "size-wide",
            close: function () {
            }
        });

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.FormularioAccionInmediata,
            onSuccess: function () {
                base.Ini();
            },
            data: opts
        });
    };

    base.Control = {
        Validator: null,
        CodigoEstadoInvestigacion : null,
        CodigoInvestigacion: null,
        CodigoInvestigacionAccionInmediata: null,        
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        FrmInvestigacionAccionInmediata: function () { return $('#frmInvestigacionAccionInmediata');},
        BtnGuardarInvestigacionAccionInmediata: function () { return $('#btnGrabarInvestigacionAccionInmediata'); },
        TxtDescripcion: function () { return $('#txtDescripcion'); },
        BtnCancelarRecordAccion: function () { return $('#btnCancelarRecordAccion'); }
    };

    base.Function = {
        //validar guardar formulario investigacion-informacion general
        ValidacionExtraInvestigacionAccionInmediata: function () {
            var validaciones = new Array();
            validaciones.push({
                Event: function () {
                    var resultado = true;
                    if (base.Control.TxtDescripcion().val() == null || base.Control.TxtDescripcion().val() == '') {
                        resultado = false;
                    }
                    if (resultado) {
                        base.Control.TxtDescripcion().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtDescripcion().attr('class', 'form-control hasError');
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
        BtnGuardarInvestigacionAccionInmediataClick: function () {
            'use-strict'            
            if (base.Control.Validador.isValid()) {                
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {                        
                        base.Ajax.AjaxGrabarInvestigacionAccionInmediata.data = {
                            CodigoInvestigacionAccionInmediata: base.Control.CodigoInvestigacionAccionInmediata,
                            CodigoInvestigacion: base.Control.CodigoInvestigacion,
                            Descripcion: base.Control.TxtDescripcion().val()
                        }
                        base.Ajax.AjaxGrabarInvestigacionAccionInmediata.submit();
                    }
                });
            } else {
                $("#frmInvestigacionAccionInmediataSummaryErrorMessage").empty();
                $("#frmInvestigacionAccionInmediataSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },
        AjaxGrabarInvestigacionAccionInmediataSuccess: function (resultado) {
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
        AjaxGrabarInvestigacionAccionInmediata: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarInvestigacionAccionInmediata,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarInvestigacionAccionInmediataSuccess
        })
    };
};
