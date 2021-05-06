/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD D43260443
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioPobladorAfectado');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioPobladorAfectado.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        if (opts != null && opts.AceptarSuccess != null && opts.AceptarSuccess)
            base.Event.AceptarSuccess = opts.AceptarSuccess;
        base.Control.FormularioProblador = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Models.FormularioComunidadModel;

        base.Control.TxtNumeroDocumentoPobladorAfectado().off('keypress');
        base.Control.TxtNumeroDocumentoPobladorAfectado().on('keypress', base.Event.TxtSoloNumerosKeypress);

        base.Control.TxtTelefonoPobladorAfectado().off('keypress');
        base.Control.TxtTelefonoPobladorAfectado().on('keypress', base.Event.TxtSoloNumerosKeypress);

        base.Control.BtnGrabarPobladorAfectado().off('click');
        base.Control.BtnGrabarPobladorAfectado().on('click', base.Event.BtnGrabarPobladorAfectadoClick);

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmPobladorAfectado(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtra()
        });
    };

    base.Show = function (opts) {        
        base.Control.CodigoInvestigacionComunidadInvolucrada = opts.CodigoInvestigacionComunidadInvolucrada;
        base.Control.CodigoInvestigacionPobladorAfectado = opts.CodigoInvestigacionPobladorAfectado;
        base.Control.CodigoInvestigacion = opts.CodigoInvestigacion;
        base.Control.CodigoTipoPoblador = opts.CodigoTipoPoblador;
        if (opts.CodigoTipoPoblador == 'POB')
            base.Control.Titulo = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaFormularioPobladorAfectado;
        else
            base.Control.Titulo = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaFormularioRepresentanteComunidad;

        base.Control.DlgFormSubModal = new Pe.GMD.UI.Web.Components.Dialog({
            title: base.Control.Titulo,
            size: "size-wide",
            close: function () {
            }
        });

        base.Control.DlgFormSubModal.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.FormularioPobladorAfectado,
            onSuccess: function () {
                base.Ini();
            },
            data:opts
        });
    };

    base.Control = {
        FormularioProblador : null,
        CodigoInvestigacionComunidadInvolucrada: null,
        CodigoInvestigacionPobladorAfectado: null,
        CodigoInvestigacion : null,
        CodigoTipoPoblador : null,
        Validador: null,
        Titulo:null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        DlgFormSubModal: null,
        FrmPobladorAfectado : function(){ return $('#frmPobladorAfectado');},
        TxtNombrePobladorAfectado: function () { return $('#txtNombrePobladorAfectado'); },
        TxtNumeroDocumentoPobladorAfectado: function () { return $('#txtNumeroDocumentoPobladorAfectado'); },
        TxtTelefonoPobladorAfectado: function () { return $('#txtTelefonoPobladorAfectado'); },
        BtnGrabarPobladorAfectado: function () { return $('#btnGrabarPobladorAfectado'); },        
    };
    base.Event = {
        TxtSoloNumerosKeypress: function (event) {
            var regex = /[0-9]/;
            var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
            if (!regex.test(key)) {
                event.preventDefault();
                return false;
            }
        },
        BtnGrabarPobladorAfectadoClick: function () {
            if (base.Control.Validador.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarPobladorAfectado.data = {
                            CodigoInvestigacionPobladorAfectado: base.Control.CodigoInvestigacionPobladorAfectado,
                            CodigoInvestigacionComunidadInvolucrada: base.Control.CodigoInvestigacionComunidadInvolucrada,
                            CodigoTipoPoblador: base.Control.CodigoTipoPoblador,
                            Nombres: base.Control.TxtNombrePobladorAfectado().val(),
                            NumeroDocumento: base.Control.TxtNumeroDocumentoPobladorAfectado().val(),
                            Telefono: base.Control.TxtTelefonoPobladorAfectado().val(),
                            ComunidadInvolucrada: { CodigoInvestigacion: base.Control.CodigoInvestigacion }
                        }
                        base.Ajax.AjaxRegistrarPobladorAfectado.submit();
                    }
                });
            }
            else {
                $("#frmPobladorAfectadoSummaryErrorMessage").empty();
                $("#frmPobladorAfectadoSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }

        },
        AjaxRegistrarPobladorAfectadoSuccess: function (resultado) {
            if (resultado.IsSuccess) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Control.DlgFormSubModal.divDialog.close();
                if (base.Event.AceptarSuccess() != null) {
                    base.Event.AceptarSuccess(resultado);
                }
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
    };
    base.Function = {
        ValidacionExtra: function () {
            var validaciones = new Array();

            return validaciones;
        },
    };

    base.Ajax = {
        AjaxRegistrarPobladorAfectado: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarPobladorAfectado,
            autoSubmit: false,
            onSuccess: base.Event.AjaxRegistrarPobladorAfectadoSuccess
        }),

    };
};