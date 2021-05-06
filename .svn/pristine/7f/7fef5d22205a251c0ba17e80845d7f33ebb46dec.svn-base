/// <summary>
/// Script de formulario de Supervisor
/// </summary>
/// <remarks>
/// Creacion: 	GMD D43260443
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioSecuenciaEvento');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioSecuenciaEvento.Controller = function (opts) {
    var base = this;
    base.Ini = function () {
        base.Event.GrabarEventoSuccess = (opts.GrabarEventoSuccess != null && opts.GrabarEventoSuccess) ? opts.GrabarEventoSuccess : null;
        base.Control.FormularioEventoModel = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Models.FormularioEventoModel;
        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaEvento(),
            minDateFrom: new Date(1900, 1, 1)
        });
        //validar ingreso de solo números
        base.Control.TxtOrdenEvento().off('keypress');
        base.Control.TxtOrdenEvento().on('keypress', base.Event.TxtSoloNumerosKeypress);

        base.Control.BtnGuardarEvento().off('click');
        base.Control.BtnGuardarEvento().on('click', base.Event.BtnGuardarEventoClick);

        base.Control.BtnCancelarEvento().off('click');
        base.Control.BtnCancelarEvento().on('click', base.Event.BtnCancelarEventoChange);

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmSecuenciaEvento(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraEvento()
        });
    };

    base.Show = function (opts) {
        base.Control.CodigoInvestigacionEvento = (opts.CodigoInvestigacionEvento == null || opts.CodigoInvestigacionEvento == undefined) ? '' : opts.CodigoInvestigacionEvento;
        base.Control.CodigoInvestigacion = (opts.CodigoInvestigacion == null || opts.CodigoInvestigacion == undefined) ? '' : opts.CodigoInvestigacion;
        base.Control.DlgFormPrincipalEvento = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaFormularioEvento,
            size: "size-wide",
            close: function () {
            }
        });

        base.Control.DlgFormPrincipalEvento.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.FormularioSecuenciaEvento,
            onSuccess: function () {
                base.Ini();
            },
            data:
                {
                    CodigoInvestigacionEvento: opts.CodigoInvestigacionEvento,
                    CodigoInvestigacion: opts.CodigoInvestigacion,
                    CodigoEstadoInvestigacion: opts.CodigoEstadoInvestigacion
                }
        });

    };

    base.Control = {
        Validador: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        FormularioEventoModel: null,
        FormularioInvestigacionModel: null,
        CodigoInvestigacionEvento: null,
        CodigoInvestigacion: null,
        DlgFormularioEvento: null,
        FrmSecuenciaEvento: function () { return $('#frmSecuenciaEvento'); },
        DtpFechaEvento: function () { return $('#dtpFechaEvento'); },
        TxtOrdenEvento: function () { return $('#txtOrdenEvento'); },
        TxaDescripcionEvento: function () { return $('#txtDescripcionEvento'); },
        DdlHoraEvento: function () { return $('#ddlHoraEvento'); },
        DdlMinutoEvento: function () { return $('#ddlMinutoEvento'); },
        BtnCancelarEvento: function () { return $('#btnCancelarEvento'); },
        BtnGuardarEvento: function () { return $('#btnGuardarEvento'); },
        FileFrmApendiceEvento: function () { return $('#fileFrmApendiceEvento'); },
    };

    base.Function = {
        ValidacionExtraEvento: function () {
            var validaciones = new Array();
            //validar núemro de orden
            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.TxtOrdenEvento().val() == null || base.Control.TxtOrdenEvento().val() == '' || base.Control.TxtOrdenEvento().val() == null || base.Control.TxtOrdenEvento().val() == 0) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtOrdenEvento().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtOrdenEvento().attr('class', 'form-control hasError');
                    }
                    return resultado;
                }
            });

            //validar decsripcion del evento
            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.TxaDescripcionEvento().val() == null || base.Control.TxaDescripcionEvento().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxaDescripcionEvento().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxaDescripcionEvento().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });

            //validar Hora del evento
            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.DdlHoraEvento().children().length > 1 && base.Control.DdlHoraEvento().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.DdlHoraEvento().attr('class', 'form-control');
                    }
                    else {
                        base.Control.DdlHoraEvento().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });
            return validaciones;
        },
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

        BtnGuardarEventoClick: function () {
            if (base.Control.Validador.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarEvento.data = {
                            CodigoInvestigacionEvento: base.Control.FormularioEventoModel.InvestigacionEvento.CodigoInvestigacionEvento,
                            CodigoInvestigacion: base.Control.CodigoInvestigacion,
                            Orden: base.Control.TxtOrdenEvento().val(),
                            Descripcion: base.Control.TxaDescripcionEvento().val(),
                            FechaString: base.Control.DtpFechaEvento().val() + ' ' + base.Control.DdlHoraEvento().val() + ':' + base.Control.DdlMinutoEvento().val(),
                            DataArchivoApendice: null,
                            NombreArchivoApendiceSharePoint: null
                        }
                        base.Ajax.AjaxGrabarEvento.submit();
                    }
                });
            }
            else {
                $("#frmSecuenciaEventoSummaryErrorMessage").empty();
                $("#frmSecuenciaEventoSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },

        AjaxGrabarEventoSuccess: function (resultado) {
            if (resultado.IsSuccess) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });

                base.Control.DlgFormPrincipalEvento.divDialog.close();

                if (base.Event.GrabarEventoSuccess() != null) {
                    base.Event.GrabarEventoSuccess();
                }
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },

        BtnCancelarEventoChange: function () { base.Control.DlgFormPrincipalEvento.divDialog.close();}
    };

    base.Ajax = {
        AjaxGrabarEvento: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarEvento,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarEventoSuccess
        }),
    };

};
