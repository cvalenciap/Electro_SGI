/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 08022017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInformacionGeneralLesion');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInformacionGeneralLesion.Controller = function (opts) {
    var base = this;
    base.Ini = function () {
        base.Control.FormularioModelo = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Models.FormularioInformacionGeneralLesion;        
        base.Control.BtnGrabarInformacionGeneral().off('click');
        base.Control.BtnGrabarInformacionGeneral().on('click', base.Event.BtnGrabarInformacionGeneralClick);

        if (opts != null && opts.AceptarSuccess != null && opts.AceptarSuccess)
            base.Event.AceptarSuccess = opts.AceptarSuccess;

        base.Control.ValidadorSubModalLesion = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmSubModalInformacionGeneralLesion(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.ValidarCampos
        });
    };

    base.Show = function (opts) {
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaTituloFormularioLesion,
            size: "size-wide",
            close: function () {                
            }
        });

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.FormularioInformacionGeneralLesion,
            onSuccess: function () {
                base.Ini();
            },
            data: opts
        });
    };

    base.Control = {
        FrmSubModalInformacionGeneralLesion: function () { return $('#frmSubModalInformacionGeneralLesion'); },
        FormularioModelo: null,
        ValidadorSubModalLesion: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),

        TxtComentario: function () { return $('#txtComentarioInformacionLesion'); },
        SlcMecanismoLesion: function () { return $('#slcMecanismoLesion'); },
        SlcParteCuerpoLesionada: function () { return $('#slcParteCuerpoLesionada'); },
        SlcNaturalezaLesion: function () { return $('#slcNaturalezaLesion'); },       
        BtnCancelarInformacionGeneral: function () { return $('#btnCancelarInformacionGeneral'); },
        BtnGrabarInformacionGeneral: function () { return $('#btnGrabarInformacionGeneral'); },
    };
    
    base.Event = {
        BtnGrabarInformacionGeneralClick: function () {
            if (base.Control.ValidadorSubModalLesion.isValid()) {
                base.Ajax.AjaxGrabarInformacionGeneralLesion.data = {
                    CodigoInvestigacionInformacionLesion: base.Control.FormularioModelo.CategoriaLesion.CodigoInvestigacionInformacionLesion,
                    CodigoInvestigacionInvolucrado: base.Control.FormularioModelo.CategoriaLesion.CodigoInvestigacionInvolucrado,
                    CodigoParteCuerpoLesionada: base.Control.SlcParteCuerpoLesionada().val(),
                    CodigoMecanismo: base.Control.SlcMecanismoLesion().val(),
                    CodigoNaturalezaLesion: base.Control.SlcNaturalezaLesion().val(),
                    Comentario: base.Control.TxtComentario().val()
                };
                base.Ajax.AjaxGrabarInformacionGeneralLesion.submit();
            } else {
                $("#frmSubModalInformacionGeneralLesionSummaryErrorMessage").empty();
                $("#frmSubModalInformacionGeneralLesionSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },
        AjaxGrabarInformacionGeneralLesionSuccess: function (resultado) {            
            if (resultado.Result == "1") {                
                if (base.Event.AceptarSuccess != null) {
                    base.Event.AceptarSuccess();
                }
                base.Control.DlgForm.divDialog.close();
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
        AjaxGrabarInformacionGeneralLesion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarInvestigacionInformacionLesion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarInformacionGeneralLesionSuccess
        }),
    };
};