/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD D43260443
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioAgenteContaminante');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioAgenteContaminante.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
        base.Control.FormularioAgente = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Models.FormularioAgenteContaminante;
        base.Control.BtnGrabarAgenteContaminante().off('click');
        base.Control.BtnGrabarAgenteContaminante().on('click', base.Event.BtnGrabarAgenteContaminanteClick);
                
        if (opts != null && opts.AceptarAgenteSuccess != null && opts.AceptarAgenteSuccess)
            base.Event.AceptarAgenteSuccess = opts.AceptarAgenteSuccess;

        base.Control.SlcAgenteContaminante().off('change');
        base.Control.SlcAgenteContaminante().on('change', base.Event.SlcAgenteContaminanteChange);        
        base.Control.SlcEstadoAgenteContaminante().off('change');
        base.Control.SlcEstadoAgenteContaminante().on('change', base.Event.SlcEstadoAgenteContaminanteChange);

        base.Control.ValidadorAgenteContaminante = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmAgenteContaminante(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraModal()
        });
    };
    base.Show = function (opts) {        
        base.Control.DlgFormSubModal = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaFormularioAgenteContaminante,
            size: "size-wide",
            close: function () {
            }
        });

        base.Control.DlgFormSubModal.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.FormularioAgenteContaminante,
            onSuccess: function () {
                base.Ini();
            },
            data: opts
        });
    };
    base.Control = {
        DlgFormSubModal: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        FormularioAgente: null,
        BtnGrabarAgenteContaminante: function () { return $('#btnGrabarAgenteContaminante'); },

        SlcAgenteContaminante: function () { return $('#slcAgenteContaminante'); },        
        SlcEstadoAgenteContaminante: function () { return $('#slcEstadoAgenteContaminante'); },
        SlcListaCantidadEmitida: function () { return $('#slcListaCantidadEmitida'); },
        SlcListaCantidadRecuperada: function () { return $('#slcListaCantidadRecuperada'); },
        SlcListaCantidadNoRecuperada: function () { return $('#slcListaCantidadNoRecuperada'); },

        TxtOtrosAgenteContaminante: function () { return $('#txtOtrosAgenteContaminante'); },
        TxtOtrosEstadoContaminante: function () { return $('#txtOtrosEstadoContaminante'); },
        TxtCantidadEmitida: function () { return $('#txtCantidadEmitida'); },
        TxtCantidadRecuperada: function () { return $('#txtCantidadRecuperada'); },
        TxtCantidadNoRecuperada: function () { return $('#txtCantidadNoRecuperada'); },
        ValidadorAgenteContaminante: null,
        FrmAgenteContaminante: function () { return $('#frmAgenteContaminanteModal'); },
    };        
    base.Event = {
        BtnGrabarAgenteContaminanteClick: function () {            
            if (base.Control.ValidadorAgenteContaminante.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarAgenteContaminante.data = {
                            CodigoInvestigacionAgenteContaminante: base.Control.FormularioAgente.InvestigacionAgenteContaminante.CodigoInvestigacionAgenteContaminante,
                            CodigoInvestigacionCuerpoReceptor: base.Control.FormularioAgente.InvestigacionAgenteContaminante.CodigoInvestigacionCuerpoReceptor,
                            CodigoAgenteContaminante: base.Control.SlcAgenteContaminante().val(),
                            OtrosAgenteContaminante: base.Control.TxtOtrosAgenteContaminante().val(),
                            CodigoEstadoContaminante: base.Control.SlcEstadoAgenteContaminante().val(),
                            OtrosEstadoContaminante: base.Control.TxtOtrosEstadoContaminante().val(),
                            CantidadEmitida: base.Control.TxtCantidadEmitida().val(),
                            CodigoUMedidaCantidadEmitida: base.Control.SlcListaCantidadEmitida().val(),
                            CantidadRecuperada: base.Control.TxtCantidadRecuperada().val(),
                            CodigoUMedidaCantidadRecuperada: base.Control.SlcListaCantidadRecuperada().val(),
                            CantidadNoRecuperada: base.Control.TxtCantidadNoRecuperada().val(),
                            CodigoUMedidaCantidadNoRecuperada: base.Control.SlcListaCantidadNoRecuperada().val(),
                        };
                        base.Ajax.AjaxRegistrarAgenteContaminante.submit();
                    }
                });
            } else {
                $("#frmAgenteContaminanteModalSummaryErrorMessage").empty();
                $("#frmAgenteContaminanteModalSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },
        AjaxRegistrarAgenteContaminanteSuccess: function (resultado) {
            if (resultado.Result == "1") {
                base.Control.DlgFormSubModal.divDialog.close();
                if (base.Event.AceptarAgenteSuccess != null) {
                    base.Event.AceptarAgenteSuccess();
                }
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxBuscarInvestigacionUnidadMedidaSuccess: function (resultado) {
            $.each(resultado.Result, function (index, value) {
                base.Control.SlcListaCantidadEmitida().append(new Option(value.DescripcionEspaniol, value.CodigoInvestigacionUnidadMedida));
                base.Control.SlcListaCantidadRecuperada().append(new Option(value.DescripcionEspaniol, value.CodigoInvestigacionUnidadMedida));
                base.Control.SlcListaCantidadNoRecuperada().append(new Option(value.DescripcionEspaniol, value.CodigoInvestigacionUnidadMedida));
            });
        },
        SlcAgenteContaminanteChange: function () {
            base.Control.SlcListaCantidadEmitida().empty();
            base.Control.SlcListaCantidadEmitida().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
            base.Control.SlcListaCantidadRecuperada().empty();
            base.Control.SlcListaCantidadRecuperada().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
            base.Control.SlcListaCantidadNoRecuperada().empty();
            base.Control.SlcListaCantidadNoRecuperada().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
            if (base.Control.SlcAgenteContaminante().val() != null && base.Control.SlcAgenteContaminante().val() != '') {
                base.Ajax.AjaxBuscarInvestigacionUnidadMedida.data = {
                    CodigoAgenteContaminante: base.Control.SlcAgenteContaminante().val()
                };
                base.Ajax.AjaxBuscarInvestigacionUnidadMedida.submit();

                if (base.Control.SlcAgenteContaminante().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCuerpoReceptorAfectado.DatosConstantes.OtrosAgenteContaminante) {
                    base.Control.TxtOtrosAgenteContaminante().prop('disabled', false);
                }
                else
                {
                    base.Control.TxtOtrosAgenteContaminante().val('');
                    base.Control.TxtOtrosAgenteContaminante().prop('disabled', true);
                }
            }
        },
        SlcEstadoAgenteContaminanteChange: function () {
            if (base.Control.SlcEstadoAgenteContaminante().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCuerpoReceptorAfectado.DatosConstantes.OtrosEstadoAgenteContaminante) {
                base.Control.TxtOtrosEstadoContaminante().prop('disabled', false);
            } else {
                base.Control.TxtOtrosEstadoContaminante().val('');
                base.Control.TxtOtrosEstadoContaminante().prop('disabled', true);
            }
        },
    };
    base.Ajax = {
        AjaxRegistrarAgenteContaminante: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarInvestigacionAgenteContaminante,
            autoSubmit: false,
            onSuccess: base.Event.AjaxRegistrarAgenteContaminanteSuccess
        }),
        AjaxBuscarInvestigacionUnidadMedida: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacionUnidadMedida,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarInvestigacionUnidadMedidaSuccess
        }),
    };
    base.Function = {
        ValidacionExtraModal: function () {
            var validaciones = new Array();
            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.SlcAgenteContaminante().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCuerpoReceptorAfectado.DatosConstantes.OtrosAgenteContaminante
                        && (base.Control.TxtOtrosAgenteContaminante().val() == null || base.Control.TxtOtrosAgenteContaminante().val() == ''))
                    {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtOtrosAgenteContaminante().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtOtrosAgenteContaminante().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });
            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.SlcEstadoAgenteContaminante().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCuerpoReceptorAfectado.DatosConstantes.OtrosEstadoAgenteContaminante
                        && (base.Control.TxtOtrosEstadoContaminante().val() == null || base.Control.TxtOtrosEstadoContaminante().val() == '')) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtOtrosEstadoContaminante().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtOtrosEstadoContaminante().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });
            return validaciones;
        },
    };
};
