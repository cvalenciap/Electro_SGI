ns('Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.FormularioAP_B.FormularioAgregarLadoB');
Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.FormularioAP_B.FormularioAgregarLadoB.Controller = function (opts) {
    var base = this;
    base.Ini = function () {
        'use strict'
        Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
        base.Control.BtnGrabar().off('click');
        base.Control.BtnGrabar().on('click', base.Event.BtnGrabarActuaPositivoClick);
        base.Control.BtnCancelar().off('click');
        base.Control.BtnCancelar().on('click', base.Event.BtnCancelarActuaPositivoClick);

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmAgregarLadoBModal(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraFormularioAgregarLadoBModal()
        });
        base.Control.SlcProyecto().off('change');
        base.Control.SlcProyecto().on('change', base.Event.SlcProyectoChange);
        base.Control.SlcDepartamento().off('change');
        base.Control.SlcDepartamento().on('change', base.Event.SlcDepartamentoChange);
        base.Control.SlcModuloHerramientaTarea().off('change');
        base.Control.SlcModuloHerramientaTarea().on('change', base.Event.SlcModuloHerramientaTareaChange);


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

        base.Control.FormularioAgregarLadoBModel = Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.FormularioAP_B.FormularioAgregarLadoB.Models.IngresoAP_BModel;
        if (base.Control.FormularioAgregarLadoBModel.ActuaPositivo.EsAdministrador) {
            new Pe.GMD.UI.Web.Components.Calendar({
                inputFrom: base.Control.DtpFechaActuaPositivo(),
                minDateFrom: new Date(1900, 1, 1),
                maxDateFrom: new Date(base.Control.FormularioAgregarLadoBModel.ActuaPositivo.AnioMaximoPermitido, base.Control.FormularioAgregarLadoBModel.ActuaPositivo.MesMaximoPermitido - 1, base.Control.FormularioAgregarLadoBModel.ActuaPositivo.DiaMaximoPermitido),
            });
        }
        else {
            new Pe.GMD.UI.Web.Components.Calendar({
                inputFrom: base.Control.DtpFechaActuaPositivo(),
                minDateFrom: new Date(base.Control.FormularioAgregarLadoBModel.ActuaPositivo.AnioMinimoPermitido, base.Control.FormularioAgregarLadoBModel.ActuaPositivo.MesMinimoPermitido - 1, base.Control.FormularioAgregarLadoBModel.ActuaPositivo.DiaMinimoPermitido),
                maxDateFrom: new Date(base.Control.FormularioAgregarLadoBModel.ActuaPositivo.AnioMaximoPermitido, base.Control.FormularioAgregarLadoBModel.ActuaPositivo.MesMaximoPermitido - 1, base.Control.FormularioAgregarLadoBModel.ActuaPositivo.DiaMaximoPermitido),
            });
        }
    };
    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        TxtNumeroTarjeta: function () { return $('#txtNumeroTarjeta'); },
        HdnCodigoColaboradorEntregado: function () { return $('#hdnCodigoColaboradorEntregado'); },
        TxtCodigoActuaPositivo: function () { return $('#txtCodigoActuaPositivo'); },
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
        SlcModuloHerramientaTarea: function () { return $('#slcModuloHerramientaTarea'); },
        DivValoresChecked: function () { return $('#divValoresChecked'); },
        DivOtrosDescripcion: function () { return $('#divOtrosDescripcion'); },
        TxtOtrosDescripcion: function () { return $('#txtOtrosDescripcion'); },
        BtnGrabar: function () { return $('#btnGrabar'); },
        BtnCancelar: function () { return $('#btnCancelar'); },
        Validador: null,
        FrmAgregarLadoBModal: function () { return $('#frmAgregarLadoBModal'); },
        CodigoAreaSeleccionadoEntregado: null,
        FormularioAgregarLadoBModel: null,
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

                } else {
                    //base.Control.SlcDepartamento().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
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
                var valorTexto = base.Control.SlcDepartamento().val().split('||');
                base.Ajax.AjaxBuscarArea.data = {
                    CodigoDepartamento: valorTexto[0]
                };

                base.Ajax.AjaxBuscarArea.submit();
            }
        },
        SlcModuloHerramientaTareaChange: function () {
            if (base.Control.SlcModuloHerramientaTarea().val() == Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.DatosConstantes.ParametrosActuaPositivo.CodigoHerramientaTareaOtros) {
                base.Control.DivOtrosDescripcion().show();
            }
            else {
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
                            CodigoTipoActuaPositivo: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.CodigoTipoActuaPositivoLadoB,
                            CodigoProyecto: base.Control.SlcProyecto().val(),
                            NumeroTarjeta: base.Control.TxtNumeroTarjeta().val(),
                            CodigoColaboradorEntregado: base.Control.HdnCodigoColaboradorEntregado().val(),
                            FechaActuaPositivo: base.Control.DtpFechaActuaPositivo().val(),
                            CodigoEmpresaEntregado: base.Control.SlcEmpresa().val(),
                            CodigoDepartamentoEntregado: base.Control.SlcDepartamento().val(),
                            CodigoArea: base.Control.SlcArea().val(),
                            CodigoColaboradorSupervisor: base.Control.HdnCodigoColaboradorSupervisor().val(),
                            CodigoModuloHerramientaTarea: base.Control.SlcModuloHerramientaTarea().val(),
                            OtrosDescripcion: base.Control.SlcModuloHerramientaTarea().val() == Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.DatosConstantes.ParametrosActuaPositivo.CodigoHerramientaTareaOtros ? base.Control.TxtOtrosDescripcion().val() : '',
                        };
                        base.Ajax.AjaxGrabarActuaPositivo.submit();
                    }
                });
            }
            else {
                $("#frmAgregarLadoBModalSummaryErrorMessage").empty();
                $("#frmAgregarLadoBModalSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
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
            action: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Actions.FormularioAgregarLadoB,
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
        ValidacionExtraFormularioAgregarLadoBModal: function () {
            var validaciones = new Array();
            validaciones.push({
                Event: function () {
                    var resultado = true;
                    if (base.Control.SlcModuloHerramientaTarea().val() != Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.DatosConstantes.ParametrosActuaPositivo.CodigoHerramientaTareaOtros) {
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