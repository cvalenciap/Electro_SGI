ns('Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.FormularioAP_A.FormularioAgregarLadoA');
Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.FormularioAP_A.FormularioAgregarLadoA.Controller = function (opts) {
    var base = this;
    base.Ini = function () {
        'use strict'
        Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
        base.Control.BtnGrabar().off('click');
        base.Control.BtnGrabar().on('click', base.Event.BtnGrabarActuaPositivoClick);
        base.Control.BtnCancelar().off('click');
        base.Control.BtnCancelar().on('click', base.Event.BtnCancelarActuaPositivoClick);

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmAgregarLadoAModal(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraFormularioAgregarLadoAModal()
        });
        base.Control.SlcProyecto().off('change');
        base.Control.SlcProyecto().on('change', base.Event.SlcProyectoChange);

        base.Control.ChkIndicadorSeguridad().off('click');
        base.Control.ChkIndicadorSeguridad().on('click', base.Event.ChkIndicadorSeguridadClick);
        base.Control.ChkIndicadorEficiencia().off('click');
        base.Control.ChkIndicadorEficiencia().on('click', base.Event.ChkIndicadorEficienciaClick);
        base.Control.ChkIndicadorCumplimiento().off('click');
        base.Control.ChkIndicadorCumplimiento().on('click', base.Event.ChkIndicadorCumplimientoClick);
        base.Control.ChkIndicadorSeriedad().off('click');
        base.Control.ChkIndicadorSeriedad().on('click', base.Event.ChkIndicadorSeriedadClick);
        base.Control.ChkIndicadorCalidad().off('click');
        base.Control.ChkIndicadorCalidad().on('click', base.Event.ChkIndicadorCalidadClick);
        base.Control.ChkIndicadorOtros().off('click');
        base.Control.ChkIndicadorOtros().on('click', base.Event.ChkIndicadorOtrosClick);

        base.Control.SlcDepartamento().off('change');
        base.Control.SlcDepartamento().on('change', base.Event.SlcDepartamentoChange);

        if (opts != null && opts.AceptarSuccess != null && opts.AceptarSuccess)
            base.Event.AceptarSuccess = opts.AceptarSuccess;
        base.Control.DlgFormularioBuscarColaboradorSupervisor = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.BuscarColaboradorSupervisorSuccess
        });
        base.Control.DlgFormularioBuscarColaboradorEntregado = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.BuscarColaboradorEntregadoSuccess
        });
        base.Control.BtnBuscarColaboradorEntregado().off('click');
        base.Control.BtnBuscarColaboradorEntregado().on('click', base.Event.BtnBuscarColaboradorEntregadoClick);

        base.Control.BtnBuscarColaboradorSupervisor().off('click');
        base.Control.BtnBuscarColaboradorSupervisor().on('click', base.Event.BtnBuscarColaboradorSupervisorClick);
        base.Control.FormularioAgregarLadoAModel = Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.FormularioAP_A.FormularioAgregarLadoA.Models.IngresoAP_AModel;
        if (base.Control.FormularioAgregarLadoAModel.ActuaPositivo.EsAdministrador) {
            new Pe.GMD.UI.Web.Components.Calendar({
                inputFrom: base.Control.DtpFechaActuaPositivo(),
                minDateFrom: new Date(1900, 1, 1),
                maxDateFrom: new Date(base.Control.FormularioAgregarLadoAModel.ActuaPositivo.AnioMaximoPermitido, base.Control.FormularioAgregarLadoAModel.ActuaPositivo.MesMaximoPermitido - 1, base.Control.FormularioAgregarLadoAModel.ActuaPositivo.DiaMaximoPermitido),
            });
        }
        else {
            new Pe.GMD.UI.Web.Components.Calendar({
                inputFrom: base.Control.DtpFechaActuaPositivo(),
                minDateFrom: new Date(base.Control.FormularioAgregarLadoAModel.ActuaPositivo.AnioMinimoPermitido, base.Control.FormularioAgregarLadoAModel.ActuaPositivo.MesMinimoPermitido - 1, base.Control.FormularioAgregarLadoAModel.ActuaPositivo.DiaMinimoPermitido),
                maxDateFrom: new Date(base.Control.FormularioAgregarLadoAModel.ActuaPositivo.AnioMaximoPermitido, base.Control.FormularioAgregarLadoAModel.ActuaPositivo.MesMaximoPermitido - 1, base.Control.FormularioAgregarLadoAModel.ActuaPositivo.DiaMaximoPermitido),
            });
        }

    };
    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        TxtCodigoActuaPositivo: function () { return $('#txtCodigoActuaPositivo'); },
        TxtNumeroTarjeta: function () { return $('#txtNumeroTarjeta'); },
        HdnCodigoColaboradorEntregado: function () { return $('#hdnCodigoColaboradorEntregado'); },
        TxtNombreColaboradorEntregado: function () { return $('#txtNombreColaboradorEntregado'); },
        BtnBuscarColaboradorEntregado: function () { return $('#btnBuscarColaboradorEntregado'); },
        HdnCodigoColaboradorSupervisor: function () { return $('#hdnCodigoColaboradorSupervisor'); },
        TxtNombreColaboradorSupervisor: function () { return $('#txtNombreColaboradorSupervisor'); },
        BtnBuscarColaboradorSupervisor: function () { return $('#btnBuscarColaboradorSupervisor'); },
        DlgFormularioBuscarColaboradorEntregado: null,
        DlgFormularioBuscarColaboradorSupervisor: null,
        DtpFechaActuaPositivo: function () { return $('#dtpFechaActuaPositivo'); },

        SlcEmpresa: function () { return $('#slcEmpresa'); },
        SlcProyecto: function () { return $('#slcProyecto'); },
        SlcDepartamento: function () { return $('#slcDepartamento'); },
        SlcArea: function () { return $('#slcArea'); },
        ChkIndicadorSeguridad: function () { return $('#chkIndicadorSeguridad'); },
        ChkIndicadorEficiencia: function () { return $('#chkIndicadorEficiencia'); },
        ChkIndicadorCumplimiento: function () { return $('#chkIndicadorCumplimiento'); },
        ChkIndicadorSeriedad: function () { return $('#chkIndicadorSeriedad'); },
        ChkIndicadorCalidad: function () { return $('#chkIndicadorCalidad'); },
        ChkIndicadorOtros: function () { return $('#chkIndicadorOtros'); },
        DivValoresChecked: function () { return $('#divValoresChecked'); },
        DivOtrosDescripcion: function () { return $('#divOtrosDescripcion'); },
        TxtOtrosDescripcion: function () { return $('#txtOtrosDescripcion'); },
        BtnGrabar: function () { return $('#btnGrabar'); },
        BtnCancelar: function () { return $('#btnCancelar'); },
        Validador: null,
        FrmAgregarLadoAModal: function () { return $('#frmAgregarLadoAModal'); },
        CodigoAreaSeleccionadoEntregado: null,
        FormularioAgregarLadoAModel: null,

    };
    base.Event = {
        BtnBuscarColaboradorEntregadoClick: function () {
            var filtro = {
                CodigoProyecto: base.Control.SlcProyecto().val()
            }
            base.Control.DlgFormularioBuscarColaboradorEntregado.Show(false, [], filtro);
        },
        BtnBuscarColaboradorSupervisorClick: function () {
            var filtro = {
            }
            base.Control.DlgFormularioBuscarColaboradorSupervisor.Show(false, [], filtro);
        },
        BuscarColaboradorEntregadoSuccess: function (colaboradorSeleccionado) {
            if (colaboradorSeleccionado.length > 0) {
                base.Control.HdnCodigoColaboradorEntregado().val(colaboradorSeleccionado[0].CodigoColaborador);
                base.Control.TxtNombreColaboradorEntregado().val(colaboradorSeleccionado[0].Nombres + ' ' + colaboradorSeleccionado[0].ApellidoPaterno + ' ' + colaboradorSeleccionado[0].ApellidoMaterno);

                if (colaboradorSeleccionado[0].CodigoEmpresa != null) {
                    base.Control.SlcEmpresa().val(colaboradorSeleccionado[0].CodigoEmpresa);
                }
                else {
                    base.Control.SlcEmpresa().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
                }
                if (colaboradorSeleccionado[0].CodigoDepartamento != null) {
                    base.Control.SlcDepartamento().val(colaboradorSeleccionado[0].CodigoDepartamento);
                    base.Control.SlcArea().empty();
                    base.Control.SlcArea().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
                    var valorTexto = base.Control.SlcDepartamento().val();
                    base.Ajax.AjaxBuscarArea.data = {
                        CodigoDepartamento: valorTexto
                    };
                    base.Ajax.AjaxBuscarArea.submit();

                }
                if (colaboradorSeleccionado[0].CodigoArea != null) {
                    base.Control.CodigoAreaSeleccionadoEntregado = colaboradorSeleccionado[0].CodigoArea;
                }
            }
            else {
                base.Control.HdnCodigoColaboradorEntregado().val(null);
                base.Control.TxtNombreColaboradorEntregado().val('');
            }
        },
        BuscarColaboradorSupervisorSuccess: function (colaboradorSeleccionado) {
            if (colaboradorSeleccionado.length > 0) {
                base.Control.HdnCodigoColaboradorSupervisor().val(colaboradorSeleccionado[0].CodigoColaborador);
                base.Control.TxtNombreColaboradorSupervisor().val(colaboradorSeleccionado[0].Nombres + ' ' + colaboradorSeleccionado[0].ApellidoPaterno + ' ' + colaboradorSeleccionado[0].ApellidoMaterno);
            }
            else {
                base.Control.HdnCodigoColaboradorSupervisor().val(null);
                base.Control.TxtNombreColaboradorSupervisor().val('');
            }
        },
        BtnCancelarActuaPositivoClick: function () {
            'use strict'
            base.Control.DlgForm.divDialog.close();
        },
        SlcProyectoChange: function () {
            base.Control.SlcDepartamento().empty();
            base.Control.SlcDepartamento().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
            base.Control.SlcArea().empty();
            base.Control.SlcArea().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));


            base.Control.HdnCodigoColaboradorEntregado().val('');
            base.Control.TxtNombreColaboradorEntregado().val('');
            base.Control.SlcEmpresa().val('');
            base.Control.SlcDepartamento().val('');
            base.Control.SlcArea().val('');
            base.Control.CodigoAreaSeleccionadoEntregado = null;

            if (base.Control.SlcProyecto().val() != '') {
                base.Ajax.AjaxBuscarDepartamento.data = {
                    CodigoProyecto: base.Control.SlcProyecto().val()
                };
                base.Ajax.AjaxBuscarDepartamento.submit();
            }
        },
        SlcDepartamentoChange: function () {
            base.Control.SlcArea().empty();
            base.Control.SlcArea().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
            if (base.Control.SlcDepartamento().val() != '') {
                var valorTexto = base.Control.SlcDepartamento().val();
                base.Ajax.AjaxBuscarArea.data = {
                    CodigoDepartamento: valorTexto
                };

                base.Ajax.AjaxBuscarArea.submit();
            }
        },
        ChkIndicadorSeguridadClick: function () {
            if ($(this).is(':checked') == true) {
                base.Control.ChkIndicadorSeguridad().val(true)
            }
            else {
                base.Control.ChkIndicadorSeguridad().val(false)
            }
        },
        ChkIndicadorEficienciaClick: function () {
            if ($(this).is(':checked') == true) {
                base.Control.ChkIndicadorEficiencia().val(true)
            }
            else {
                base.Control.ChkIndicadorEficiencia().val(false)
            }
        },
        ChkIndicadorCumplimientoClick: function () {
            if ($(this).is(':checked') == true) {
                base.Control.ChkIndicadorCumplimiento().val(true)
            }
            else {
                base.Control.ChkIndicadorCumplimiento().val(false)
            }
        },
        ChkIndicadorSeriedadClick: function () {
            if ($(this).is(':checked') == true) {
                base.Control.ChkIndicadorSeriedad().val(true)
            }
            else {
                base.Control.ChkIndicadorSeriedad().val(false)
            }
        },
        ChkIndicadorCalidadClick: function () {
            if ($(this).is(':checked') == true) {
                base.Control.ChkIndicadorCalidad().val(true)
            }
            else {
                base.Control.ChkIndicadorCalidad().val(false)
            }
        },
        ChkIndicadorOtrosClick: function (evento) {
            if ($(this).is(':checked') == true) {
                base.Control.ChkIndicadorOtros().val(true)
                base.Control.DivOtrosDescripcion().show();
            }
            else {
                base.Control.ChkIndicadorOtros().val(false)
                base.Control.DivOtrosDescripcion().hide();
            }
        },
        BtnGrabarActuaPositivoClick: function () {
            'use strict'
            if (base.Control.Validador.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    indicadorModal: false,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarActuaPositivo.data = {
                            CodigoActuaPositivo: base.Control.TxtCodigoActuaPositivo().val(),
                            CodigoTipoActuaPositivo: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.CodigoTipoActuaPositivoLadoA,
                            CodigoProyecto: base.Control.SlcProyecto().val(),
                            NumeroTarjeta: base.Control.TxtNumeroTarjeta().val(),
                            CodigoColaboradorEntregado: base.Control.HdnCodigoColaboradorEntregado().val(),
                            FechaActuaPositivo: base.Control.DtpFechaActuaPositivo().val(),
                            CodigoEmpresaEntregado: base.Control.SlcEmpresa().val(),
                            CodigoDepartamentoEntregado: base.Control.SlcDepartamento().val(),
                            CodigoArea: base.Control.SlcArea().val(),
                            CodigoColaboradorSupervisor: base.Control.HdnCodigoColaboradorSupervisor().val(),
                            IndicadorSeguridad: base.Control.ChkIndicadorSeguridad().val(),
                            IndicadorEficiencia: base.Control.ChkIndicadorEficiencia().val(),
                            IndicadorCumplimiento: base.Control.ChkIndicadorCumplimiento().val(),
                            IndicadorSeriedad: base.Control.ChkIndicadorSeriedad().val(),
                            IndicadorCalidad: base.Control.ChkIndicadorCalidad().val(),
                            IndicadorOtros: base.Control.ChkIndicadorOtros().val(),
                            OtrosDescripcion: base.Control.ChkIndicadorOtros().val().toLowerCase() == 'true' ? base.Control.TxtOtrosDescripcion().val() : '',
                        };
                        base.Ajax.AjaxGrabarActuaPositivo.submit();
                    }
                });

            }
            else {
                $("#frmAgregarLadoAModalSummaryErrorMessage").empty();
                $("#frmAgregarLadoAModalSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },
    };

    base.Show = function (opts) {
        base.Control.CodigoActuaPositivo = opts.CodigoActuaPositivo;
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: opts.TituloVentana,
            size: "size-wide",
            close: function () {
            }
        });

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Actions.FormularioAgregarLadoA,
            onSuccess: function () {
                base.Ini();
            },
            data: {
                CodigoActuaPositivo: base.Control.CodigoActuaPositivo
            }
        });
    };

    base.AjaxSuccess = {
        AjaxBuscarDepartamentoSuccess: function (resultado) {
            $.each(resultado.Result, function (index, value) {
                var valorCodigo = value.CodigoDepartamento;
                base.Control.SlcDepartamento().append(new Option(value.NombreDepartamento, valorCodigo));
            });
        },
        AjaxBuscarAreaSuccess: function (resultado) {
            $.each(resultado.Result, function (index, value) {
                var valorCodigo = value.CodigoArea;
                base.Control.SlcArea().append(new Option(value.NombreArea, valorCodigo));
            });
            if (base.Control.CodigoAreaSeleccionadoEntregado != null) {
                base.Control.SlcArea().val(base.Control.CodigoAreaSeleccionadoEntregado);
            }
        },
        AjaxGrabarActuaPositivoSuccess: function (resultado) {
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
            else if (resultado.Result == 2) {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.MsjValidarNroTarjeta });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
    };

    base.Ajax = {

        AjaxBuscarDepartamento: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Actions.BuscarDepartamento,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxBuscarDepartamentoSuccess
        }),
        AjaxBuscarArea: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Actions.BuscarArea,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxBuscarAreaSuccess
        }),

        AjaxGrabarActuaPositivo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Actions.RegistrarActuaPositivo,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxGrabarActuaPositivoSuccess
        }),
    };

    base.Function = {
        ValidacionExtraFormularioAgregarLadoAModal: function () {
            var validaciones = new Array();

            validaciones.push({
                Event: function () {
                    var resultado = true;
                    if (base.Control.ChkIndicadorSeguridad().is(':checked') == false
                        && base.Control.ChkIndicadorEficiencia().is(':checked') == false
                        && base.Control.ChkIndicadorCumplimiento().is(':checked') == false
                        && base.Control.ChkIndicadorSeriedad().is(':checked') == false
                        && base.Control.ChkIndicadorCalidad().is(':checked') == false
                        && base.Control.ChkIndicadorOtros().is(':checked') == false
                        ) {
                        resultado = false;
                    }
                    if (resultado) {

                        base.Control.DivValoresChecked().attr('class', '');

                    } else {
                        base.Control.DivValoresChecked().attr('class', 'form-control hasError');

                    }
                    return resultado;
                },
                codeMessage: "Validar"

            });
            validaciones.push({
                Event: function () {
                    var resultado = true;
                    if (base.Control.TxtNombreColaboradorEntregado().val() == '' || base.Control.TxtNombreColaboradorEntregado().val() == null) {
                        resultado = false;
                    }
                    if (resultado) {
                        base.Control.TxtNombreColaboradorEntregado().removeClass("hasError");
                    } else {
                        base.Control.TxtNombreColaboradorEntregado().attr('class', 'form-control hasError');
                    }
                    return resultado;
                },
                codeMessage: "ValidarColaboradorEntregado"
            });
            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.TxtNombreColaboradorSupervisor().val() == '' || base.Control.TxtNombreColaboradorSupervisor().val() == null) {
                        resultado = false;
                    }
                    if (resultado) {
                        base.Control.TxtNombreColaboradorSupervisor().removeClass("hasError");
                    } else {
                        base.Control.TxtNombreColaboradorSupervisor().attr('class', 'form-control hasError');
                    }
                    return resultado;
                },
                codeMessage: "ValidarColaboradorSupervisor"
            });
            validaciones.push({
                Event: function () {
                    var resultado = true;
                    if (base.Control.ChkIndicadorOtros().is(':checked') == false) {
                        base.Control.TxtOtrosDescripcion().removeClass("hasError");
                        base.Control.DivOtrosDescripcion().hide();
                    }
                    else {
                        base.Control.DivOtrosDescripcion().show();
                        if (base.Control.TxtOtrosDescripcion().val() == '' || base.Control.TxtOtrosDescripcion().val() == null) {
                            resultado = false;
                        }
                        if (resultado) {
                            base.Control.TxtOtrosDescripcion().removeClass("hasError");
                        } else {
                            base.Control.TxtOtrosDescripcion().attr('class', 'form-control hasError');
                        }
                    }
                    return resultado;
                },
                codeMessage: "ValidarOtrosDescripcion"
            });

            return validaciones;
        },
    };
};