/// <summary>
/// Script de formulario de Supervisor
/// </summary>
/// <remarks>
/// Creacion: 	GMD D43260443
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioEquipoInvestigador');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioEquipoInvestigador.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        base.Event.GrabarInvestigadorSuccess = (opts.GrabarInvestigadorSuccess != null && opts.GrabarInvestigadorSuccess) ? opts.GrabarInvestigadorSuccess : null;
        base.Control.FormularioInvestigadorModel = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Models.InvestigadorModel;

        base.Control.BtnGrabarInformacionInvestigador().off('click');
        base.Control.BtnGrabarInformacionInvestigador().on('click', base.Event.BtnGrabarInformacionInvestigadorClick);

        base.Control.BtnBuscarEmpresaInvestigador().off('click');
        base.Control.BtnBuscarEmpresaInvestigador().on('click', base.Event.BtnBuscarEmpresaInvestigadorClick);

        base.Control.DlgFormularioEmpresaInvestigador = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.FormularioBuscadorEmpresa.Controller({
            AceptarSuccess: base.Event.BuscarEmpresaInvestigadorSuccess
        });

        base.Control.BtnGrabarEmpresaInvestigador().off('click');
        base.Control.BtnGrabarEmpresaInvestigador().on('click', base.Event.BtnGrabarEmpresaInvestigadorClick);

        base.Control.BtnCancelarInformacionInvestigador().off('click');
        base.Control.BtnCancelarInformacionInvestigador().on('click', base.Event.BtnCancelarInformacionInvestigadorChange);

        base.Control.BtnCancelarEmpresaInvestigador().off('click');
        base.Control.BtnCancelarEmpresaInvestigador().on('click', base.Event.BtnCancelarEmpresaInvestigadorChange);

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmInformacionGeneralInvestigador(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraDetalleInvestigador()
        });

        base.Control.ValidadorEmpresa = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmEmpresaInvestigador(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraEmpresaInvestigador()
        });

    };

    base.Show = function (opts) {        
        base.Control.CodigoInvestigacionInvestigador = opts.CodigoInvestigacionInvestigador;
        base.Control.CodigoInvestigacion = opts.CodigoInvestigacion;
        base.Control.CodigoColaborador = opts.CodigoColaborador;
        base.Control.DlgFormPrincipalInvestigador = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaFormularioEquipoInvestigador,
            size: "size-wide",
            close: function () {
            }
        });

        base.Control.DlgFormPrincipalInvestigador.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.FormularioEquipoInvestigador,
            onSuccess: function () {
                base.Ini();
            },
            data: {
                CodigoInvestigacionInvestigador: opts.CodigoInvestigacionInvestigador,
                CodigoInvestigacion: opts.CodigoInvestigacion,
                CodigoColaborador: opts.CodigoColaborador,
                CodigoEstadoInvestigacion: opts.CodigoEstadoInvestigacion
            }
        });
    };

    base.Control = {
        Validador: null,
        ValidadorEmpresa:null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        FormularioInvestigadorModel: null,
        FormularioInvestigacionSupervisorModel: null,
        DlgFormularioEmpresaInvestigador: null,
        CodigoEstadoInvestigacion : null,
        CodigoInvestigacionInvestigador: null,
        CodigoInvestigacion: null,
        CodigoColaborador: null,
        FrmInformacionGeneralInvestigador: function () { return $('#frmInformacionGeneralInvestigador'); },
        FrmEmpresaInvestigador: function () { return $('#frmEmpresaInvestigador'); },
        DdlPuestoTrabajoInformacionInvestigador: function () { return $('#ddlPuestoTrabajoInformacionInvestigador'); },
        DdlRequerimientoInformacionInvestigador: function () { return $('#ddlRequerimientoInformacionInvestigador'); },
        DdlParticipacionInformacionInvestigador: function () { return $('#ddlParticipacionInformacionInvestigador'); },
        BtnGrabarInformacionInvestigador: function () { return $('#btnGrabarInformacionInvestigador'); },

        BtnBuscarEmpresaInvestigador: function () { return $('#btnBuscarEmpresaInvestigador'); },
        HdnCodigoEmpresaInvestigador: function () { return $('#hdnCodigoEmpresaInvestigador'); },
        TxtNombreEmpresaInvestigador: function () { return $('#txtNombreEmpresaInvestigador'); },
        TxtRucEmpresaInvestigador: function () { return $('#txtRucEmpresaInvestigador'); },
        TxtDireccionEmpresaInvestigador: function () { return $('#txtDireccionEmpresaInvestigador'); },
        BtnGrabarEmpresaInvestigador: function () { return $('#btnGrabarEmpresaInvestigador'); },
        BtnCancelarInformacionInvestigador: function () { return $('#btnCancelarInformacionInvestigador'); },
        BtnCancelarEmpresaInvestigador: function () { return $('#btnCancelarEmpresaInvestigador'); }
    };

    base.Function = {

        ValidacionExtraDetalleInvestigador: function () {
            var validaciones = new Array();

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.DdlPuestoTrabajoInformacionInvestigador().val() == null || base.Control.DdlPuestoTrabajoInformacionInvestigador().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.DdlPuestoTrabajoInformacionInvestigador().attr('class', 'form-control');
                    }
                    else {
                        base.Control.DdlPuestoTrabajoInformacionInvestigador().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.DdlParticipacionInformacionInvestigador().val() == null || base.Control.DdlParticipacionInformacionInvestigador().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.DdlParticipacionInformacionInvestigador().attr('class', 'form-control');
                    }
                    else {
                        base.Control.DdlParticipacionInformacionInvestigador().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.DdlRequerimientoInformacionInvestigador().val() == null || base.Control.DdlRequerimientoInformacionInvestigador().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.DdlRequerimientoInformacionInvestigador().attr('class', 'form-control');
                    }
                    else {
                        base.Control.DdlRequerimientoInformacionInvestigador().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });
            return validaciones;
        },

        ValidacionExtraEmpresaInvestigador: function () {
            var validaciones = new Array();

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.HdnCodigoEmpresaInvestigador().val() == null || base.Control.HdnCodigoEmpresaInvestigador().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtNombreEmpresaInvestigador().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtNombreEmpresaInvestigador().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });

            return validaciones;
        },
    };

    base.Event = {
        BtnGrabarInformacionInvestigadorClick: function () {
            if (base.Control.Validador.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarDetalleInvestigador.data = {
                            CodigoInvestigacionInvestigador: base.Control.CodigoInvestigacionInvestigador,
                            CodigoInvestigacion: base.Control.CodigoInvestigacion,
                            CodigoColaborador: base.Control.CodigoColaborador,
                            CodigoPuestoTrabajo: base.Control.DdlPuestoTrabajoInformacionInvestigador().val(),
                            CodigoRequerimiento: base.Control.DdlRequerimientoInformacionInvestigador().val(),
                            CodigoParticipacion: base.Control.DdlParticipacionInformacionInvestigador().val(),
                        }
                        base.Ajax.AjaxGrabarDetalleInvestigador.submit();
                    }
                });
            }
            else {
                $("#frmInformacionGeneralInvestigadorSummaryErrorMessage").empty();
                $("#frmInformacionGeneralInvestigadorSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },

        BtnGrabarEmpresaInvestigadorClick: function () {
            if (base.Control.ValidadorEmpresa.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarEmpresaInvestigador.data = {
                            CodigoInvestigacionInvestigador: base.Control.CodigoInvestigacionInvestigador,
                            CodigoInvestigacion: base.Control.CodigoInvestigacion,
                            CodigoColaborador: base.Control.CodigoColaborador,
                            CodigoEmpresa: base.Control.HdnCodigoEmpresaInvestigador().val(),
                        }
                        base.Ajax.AjaxGrabarEmpresaInvestigador.submit();
                    }
                });
            }
            else {
                $("#frmEmpresaInvestigadorSummaryErrorMessage").empty();
                $("#frmEmpresaInvestigadorSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },

        BtnBuscarEmpresaInvestigadorClick: function () {
            base.Control.DlgFormularioEmpresaInvestigador.Show(false, [], null);
        },

        BuscarEmpresaInvestigadorSuccess: function (empresaSeleccionada) {
            if (empresaSeleccionada.length > 0) {
                base.Control.HdnCodigoEmpresaInvestigador().val(empresaSeleccionada[0].CodigoEmpresa);
                base.Control.TxtNombreEmpresaInvestigador().val(empresaSeleccionada[0].RazonSocial);
                base.Control.TxtRucEmpresaInvestigador().val(empresaSeleccionada[0].Ruc);
                base.Control.TxtDireccionEmpresaInvestigador().val(empresaSeleccionada[0].Direccion);
            }
            else {
                base.Control.HdnCodigoEmpresaInvestigador().val(null);
                base.Control.TxtNombreEmpresaInvestigador().val('');
                base.Control.TxtRucEmpresaInvestigador().val('');
                base.Control.TxtDireccionEmpresaInvestigador().val('');
            }
        },

        BtnCancelarInformacionInvestigadorChange:function () { base.Control.DlgFormPrincipalInvestigador.divDialog.close();},
        BtnCancelarEmpresaInvestigadorChange:function(){ base.Control.DlgFormPrincipalInvestigador.divDialog.close();}
    };

    base.Ajax = {
        AjaxGrabarDetalleInvestigador: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarDetalleInvestigador,
            autoSubmit: false,
            onSuccess: function (resultado) {
                if (resultado.IsSuccess) {
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                    });
                    if (base.Event.GrabarInvestigadorSuccess() != null) {
                        base.Event.GrabarInvestigadorSuccess();
                    }
                }
                else {
                    base.Control.Mensaje.Warning({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                    });
                }
            }
        }),

        AjaxGrabarEmpresaInvestigador: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarEmpresaInvestigador,
            autoSubmit: false,
            onSuccess: function (resultado) {
                if (resultado.IsSuccess) {
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                    });
                    if (base.Event.GrabarInvestigadorSuccess() != null) {
                        base.Event.GrabarInvestigadorSuccess();
                    }
                }
                else {
                    base.Control.Mensaje.Warning({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                    });
                }
            }
        }),
    };
};
