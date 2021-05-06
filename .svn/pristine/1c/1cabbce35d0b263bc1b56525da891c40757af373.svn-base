/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD D43260443
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCausasInmediatas');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCausasInmediatas.Controller = function (opts) {
    var base = this;

    base.Ini = function () {        
        base.Event.GrabarAnalisisSuccess = (opts.GrabarAnalisisSuccess != null && opts.GrabarAnalisisSuccess) ? opts.GrabarAnalisisSuccess : null;
        base.Control.FormularioCasuaInmediataModel = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Models.FormularioCausaInmediataModel;
        
        base.Control.BtnGuardarCausaInmediata().off('click');
        base.Control.BtnGuardarCausaInmediata().on('click', base.Event.BtnGuardarCausaInmediataClick);

        base.Control.DdlTipoCausaInmediata().off('change');
        base.Control.DdlTipoCausaInmediata().on('change', base.Event.DdlTipoCausaInmediataChange);

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmAnalisisCausasInmediata(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraCausa()
        });

        base.Control.BtnCancelarCausaInmediata().off('click');
        base.Control.BtnCancelarCausaInmediata().on('click', base.Event.BtnCancelarCausaInmediataChange);
    };

    base.Show = function (opts) {        
        base.Control.CodigoInvestigacionCausaInmediata = opts.CodigoInvestigacionCausaInmediata;
        base.Control.CodigoInvestigacion = opts.CodigoInvestigacion;
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: opts.title,
            close: function () {
            }
        });

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.FormularioCausasInmediatas,
            onSuccess: function () {
                base.Ini();
            },
            data: {
                CodigoInvestigacionCausaInmediata: opts.CodigoInvestigacionCausaInmediata,
                CodigoInvestigacion: opts.CodigoInvestigacion,
                CodigoEstadoInvestigacion: opts.CodigoEstadoInvestigacion
            }
        });
    };

    base.Control = {
        Validador: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        CodigoEstadoInvestigacion : null,
        CodigoInvestigacionCausaInmediata: null,
        FormularioCasuaInmediataModel :null,
        CodigoInvestigacion: null,       
        FrmAnalisisCausasInmediata: function () { return $('#frmAnalisisCausasInmediata'); },
        DdlTipoCausaInmediata: function () { return $('#ddlTipoCausaInmediata'); },
        DdlCausaInmediata: function () { return $('#ddlCausaInmediata'); },
        TxaComentarioCausaInmediata: function () { return $('#txaComentarioCausaInmediata'); },
        BtnCancelarCausaInmediata: function () { return $('#btnCancelarCausaInmediata'); },
        BtnGuardarCausaInmediata: function () { return $('#btnGuardarCausaInmediata'); },
    };

    base.Function = {
        ValidacionExtraCausa: function () {
            var validaciones = new Array();
            //validar decsripcion del evento
            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.TxaComentarioCausaInmediata().val() == null || base.Control.TxaComentarioCausaInmediata().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxaComentarioCausaInmediata().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxaComentarioCausaInmediata().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });

            //validar Hora del evento
            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.DdlTipoCausaInmediata().children().length > 1 && base.Control.DdlTipoCausaInmediata().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.DdlTipoCausaInmediata().attr('class', 'form-control');
                    }
                    else {
                        base.Control.DdlTipoCausaInmediata().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.DdlCausaInmediata().children().length > 1 && base.Control.DdlCausaInmediata().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.DdlCausaInmediata().attr('class', 'form-control');
                    }
                    else {
                        base.Control.DdlCausaInmediata().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });
            return validaciones;
        },
    };

    base.Event = {
        DdlTipoCausaInmediataChange: function () {
            base.Control.DdlCausaInmediata().empty();
            base.Control.DdlCausaInmediata().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
            if (base.Control.DdlTipoCausaInmediata().val() != null && base.Control.DdlTipoCausaInmediata().val() != '') {
                base.Ajax.AjaxBuscarCausasInmediatas.data = {
                    CodigoTipoCausaInmediata: base.Control.DdlTipoCausaInmediata().val()
                };
                base.Ajax.AjaxBuscarCausasInmediatas.submit();
            }
        },
        

        BtnGuardarCausaInmediataClick: function () {
            if (base.Control.Validador.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarCausaInmediata.data = {
                            CodigoInvestigacionCausaInmediata: base.Control.FormularioCasuaInmediataModel.InvestigacionCausaInmediata.CodigoInvestigacionCausaInmediata,
                            CodigoInvestigacion: base.Control.CodigoInvestigacion,
                            CodigoTipoCausaInmediata: base.Control.DdlTipoCausaInmediata().val(),
                            CodigoCausaInmediata: base.Control.DdlCausaInmediata().val(),
                            Comentario: base.Control.TxaComentarioCausaInmediata().val(),
                        }
                        base.Ajax.AjaxGrabarCausaInmediata.submit();
                    }
                });
            }
            else {
                $("#frmAnalisisCausasInmediataSummaryErrorMessage").empty();
                $("#frmAnalisisCausasInmediataSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },
        AjaxGrabarCausaInmediataSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Control.DlgForm.divDialog.close();
                if (base.Event.GrabarAnalisisSuccess() != null) {
                    base.Event.GrabarAnalisisSuccess();
                }
            }
            else if (resultado.Result == '-2') {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaElementoDuplicado
                });
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },

        AjaxBuscarCausasInmediatasSuccess: function (resultado) {
            'use strict'
            $.each(resultado.Result, function (index, value) {
                base.Control.DdlCausaInmediata().append(new Option(value.DescripcionCausaInmediata, value.CodigoCausaInmediata));
            });
        },

        BtnCancelarCausaInmediataChange: function () { base.Control.DlgForm.divDialog.close();}
    };

    base.Ajax = {
        AjaxGrabarCausaInmediata: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarCausaInmediata,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarCausaInmediataSuccess
        }),
        AjaxBuscarCausasInmediatas: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarPorTipoCausaInmediata,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarCausasInmediatasSuccess
        }),

    };
};