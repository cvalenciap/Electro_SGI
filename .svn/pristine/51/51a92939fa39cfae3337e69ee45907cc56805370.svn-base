/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD D43260443
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioModificarEstadoInvestigacion');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioModificarEstadoInvestigacion.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        base.Control.BtnGrabarEstadoInvestigacionModal().click(base.Event.BtnGrabarEstadoInvestigacionModalClick);

        if (opts != null && opts.AceptarSuccess != null && opts.AceptarSuccess)
            base.Event.AceptarSuccess = opts.AceptarSuccess;

        base.Control.ValidadorModal = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmEstadoInvestigacionModal(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraModal()
        });
    };

    base.Show = function (opts) {
        base.Control.FlagObligatorioComentario = opts.flagObligatorioComentario;
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaFormularioModificarEstadoInvestigacion,
            size: "",
            close: function () {
            }
        });

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.FormularioModificarEstadoInvestigacion,
            onSuccess: function () {
                base.Ini();
            },
            data: opts
        });
    };

    base.Control = {
        ValidadorModal: null,
        BtnGrabarEstadoInvestigacionModal: function () { return $('#btnGrabarEstadoInvestigacionModal'); },
        FlagObligatorioComentario: null,
        FrmEstadoInvestigacionModal: function(){ return $('#frmEstadoInvestigacionModal'); },
        TxtComentarioJustificacion: function () { return $('#txtComentarioJustificacion'); },        
    };

    base.Function = {
        ValidacionExtraModal: function () {
            var validaciones = new Array();            
            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.FlagObligatorioComentario && (base.Control.TxtComentarioJustificacion().val() == null || base.Control.TxtComentarioJustificacion().val() == '')) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtComentarioJustificacion().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtComentarioJustificacion().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;
                    var cont = 0;
                    $('.checkEstadoInvestigacion:checked').each(function (i) {
                        cont++;
                    });

                    if (cont < 1) {
                        resultado = false;
                    }

                    if (resultado) {
                        $("#lblCheckEstado").attr('class', 'checkEstadoInvestigacion');
                    }
                    else {
                        $("#lblCheckEstado").attr('class', 'checkEstadoInvestigacion hasError');
                    }

                    return resultado;
                }
            });
            return validaciones;
        }
    };

    base.Event = {
        BtnGrabarEstadoInvestigacionModalClick: function () {            
            if (base.Control.ValidadorModal.isValid()) {
                if (base.Event.AceptarSuccess != null) {
                    base.Event.AceptarSuccess({
                        Comentario: base.Control.TxtComentarioJustificacion().val(),
                        NombreEstadoInvestigacion: $("input[name=checkEstadoInvestigacion]:checked").data().nombreestado,
                        EstadoInvestigacion: $("input[name=checkEstadoInvestigacion]:checked").val()
                    });
                }
                base.Control.DlgForm.divDialog.close();
            } else {
                $("#frmEstadoInvestigacionModalSummaryErrorMessage").empty();
                $("#frmEstadoInvestigacionModalSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        }
    };
};