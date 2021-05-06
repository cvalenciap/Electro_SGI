/// <summary>
/// Script de formulario de Supervisor
/// </summary>
/// <remarks>
/// Creacion: 	GMD D43260443
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioTestigo');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioTestigo.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Event.GrabarTestigoSuccess = (opts.GrabarTestigoSuccess != null && opts.GrabarTestigoSuccess) ? opts.GrabarTestigoSuccess : null;
        base.Control.FormularioTestigoModel = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Models.TestigoModel;
                
        base.Control.BtnGrabarInformacionTestigo().off('click');
        base.Control.BtnGrabarInformacionTestigo().on('click', base.Event.BtnGrabarInformacionTestigoClick);

        base.Control.BtnBuscarEmpresaTestigo().off('click');
        base.Control.BtnBuscarEmpresaTestigo().on('click', base.Event.BtnBuscarEmpresaTestigoClick);

        base.Control.DlgFormularioEmpresaTestigo = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.FormularioBuscadorEmpresa.Controller({
            AceptarSuccess: base.Event.BuscarEmpresaTestigoSuccess
        });

        base.Control.BtnGrabarEmpresaTestigo().off('click');
        base.Control.BtnGrabarEmpresaTestigo().on('click', base.Event.BtnGrabarEmpresaTestigoClick);

        base.Control.BtnAgregarAnexoTestigo().off('click');
        base.Control.BtnAgregarAnexoTestigo().on('click', base.Event.BtnAgregarAnexoTestigoClick);
        base.Control.DlgFormularioTestigoAnexoApendice = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacionAnexoApendice.Controller({
            AceptarSuccess: base.Event.GrabarAnexoDeclaracionTestigoSuccess
        });

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmInformacionGeneralTestigo(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraDetalleTestigo()
        });

        base.Control.ValidadorEmpresa = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmEmpresaTestigo(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraEmpresaTestigo()
        });

        base.Control.BtnCancelarInformacionTestigo().off('click');
        base.Control.BtnCancelarInformacionTestigo().on('click', base.Event.BtnCancelarInformacionTestigoChange);

        base.Control.BtnCancelarEmpresaTestigo().off('click');
        base.Control.BtnCancelarEmpresaTestigo().on('click', base.Event.BtnCancelarEmpresaTestigoChange);
    };

    base.Show = function (opts) {                
        base.Control.CodigoInvestigacionTestigo = opts.CodigoInvestigacionTestigo;
        base.Control.CodigoInvestigacion = opts.CodigoInvestigacion;
        base.Control.CodigoColaborador = opts.CodigoColaborador;
        base.Control.DlgFormPrincipalTestigo = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaFormularioTestigo,
            size: "size-wide",
            close: function () {
            }
        });

        base.Control.DlgFormPrincipalTestigo.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.FormularioTestigo,
            onSuccess: function () {
                base.Ini();
            },
            data: {
                CodigoInvestigacionTestigo: opts.CodigoInvestigacionTestigo,
                CodigoInvestigacion: opts.CodigoInvestigacion,
                CodigoColaborador: opts.CodigoColaborador,
                CodigoEstadoInvestigacion: opts.CodigoEstadoInvestigacion
            },
        });
    };

    base.Control = {
        Validador: null,
        ValidadorEmpresa: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        FormularioInvestigacionSupervisorModel: null,
        DlgFormularioEmpresaTestigo: null,
        DlgFormularioTestigoAnexoApendice: null,
        CodigoEstadoInvestigacion : null,
        CodigoInvestigacionTestigo: null,
        CodigoInvestigacion: null,
        CodigoColaborador: null,
        FormularioTestigoModel: null,
        FrmInformacionGeneralTestigo: function () { return $('#frmInformacionGeneralTestigo'); },
        FrmEmpresaTestigo: function () { return $('#frmEmpresaTestigo'); },
        DdlPuestoTrabajoInformacionTestigo: function () { return $('#ddlPuestoTrabajoInformacionTestigo'); },
        BtnGrabarInformacionTestigo: function () { return $('#btnGrabarInformacionTestigo'); },
        HdnCodigoArchivoDeclaracionTestigo: function () { return $('#hdnCodigoArchivoDeclaracionTestigo'); },
        TxtNombreArchivoDeclaracionTestigo: function () { return $('#txtNombreArchivoDeclaracionTestigo'); },
        BtnAgregarAnexoTestigo: function () { return $('#btnAgregarAnexoTestigo'); },

        BtnBuscarEmpresaTestigo: function () { return $('#btnBuscarEmpresaTestigo'); },
        HdnCodigoEmpresaTestigo: function () { return $('#hdnCodigoEmpresaTestigo'); },
        TxtNombreEmpresaTestigo: function () { return $('#txtNombreEmpresaTestigo'); },
        TxtRucEmpresaTestigo: function () { return $('#txtRucEmpresaTestigo'); },
        TxtDireccionEmpresaTestigo: function () { return $('#txtDireccionEmpresaTestigo'); },
        BtnGrabarEmpresaTestigo: function () { return $('#btnGrabarEmpresaTestigo'); },

        BtnAgregarAnexoTestigo: function () { return $('#btnAgregarAnexoTestigo'); },

        FileFrmTestigo: function () { return $('#fileFrmTestigo'); },
        AppendiceBase64: null,
        AppendiceNombreArchivo: null,
        AppendiceExtension: null,

        BtnCancelarInformacionTestigo: function () { return $('#btnCancelarInformacionTestigo'); },
        BtnCancelarEmpresaTestigo: function () { return $('#btnCancelarEmpresaTestigo'); },
    };

    base.Function = {

        ValidacionExtraDetalleTestigo: function () {
            var validaciones = new Array();

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.HdnCodigoArchivoDeclaracionTestigo().val() == null || base.Control.HdnCodigoArchivoDeclaracionTestigo().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtNombreArchivoDeclaracionTestigo().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtNombreArchivoDeclaracionTestigo().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.DdlPuestoTrabajoInformacionTestigo().val() == null || base.Control.DdlPuestoTrabajoInformacionTestigo().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.DdlPuestoTrabajoInformacionTestigo().attr('class', 'form-control');
                    }
                    else {
                        base.Control.DdlPuestoTrabajoInformacionTestigo().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });

            return validaciones;
        },

        ValidacionExtraEmpresaTestigo: function () {
            var validaciones = new Array();

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.HdnCodigoEmpresaTestigo().val() == null || base.Control.HdnCodigoEmpresaTestigo().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtNombreEmpresaTestigo().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtNombreEmpresaTestigo().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });

            return validaciones;
        },
    };

    base.Event = {
        BtnGrabarInformacionTestigoClick: function () {
            if (base.Control.Validador.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarDetalleTestigo.data = {
                            CodigoInvestigacionTestigo: base.Control.CodigoInvestigacionTestigo,
                            CodigoInvestigacion: base.Control.CodigoInvestigacion,
                            CodigoColaborador: base.Control.CodigoColaborador,
                            CodigoPuestoTrabajo: base.Control.DdlPuestoTrabajoInformacionTestigo().val(),
                            CodigoArchivoDeclaracionTestigo: base.Control.HdnCodigoArchivoDeclaracionTestigo().val(),
                            NombreArchivoDeclaracionTestigo: base.Control.TxtNombreArchivoDeclaracionTestigo().val(),
                            TipoTestigo: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.TestigoInterno,
                        }
                        base.Ajax.AjaxGrabarDetalleTestigo.submit();
                    }
                });
            }
            else {
                $("#frmInformacionGeneralTestigoSummaryErrorMessage").empty();
                $("#frmInformacionGeneralTestigoSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },

        BtnGrabarEmpresaTestigoClick: function () {
            if (base.Control.ValidadorEmpresa.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarEmpresaTestigo.data = {
                            CodigoInvestigacionTestigo: base.Control.CodigoInvestigacionTestigo,
                            CodigoInvestigacion: base.Control.CodigoInvestigacion,
                            CodigoEmpresa: base.Control.HdnCodigoEmpresaTestigo().val(),
                        }
                        base.Ajax.AjaxGrabarEmpresaTestigo.submit();
                    }
                });
            }
            else {
                $("#frmEmpresaTestigoSummaryErrorMessage").empty();
                $("#frmEmpresaTestigoSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },

        BtnBuscarEmpresaTestigoClick: function () {
            base.Control.DlgFormularioEmpresaTestigo.Show(false, [], null);
        },

        BuscarEmpresaTestigoSuccess: function (empresaSeleccionada) {
            if (empresaSeleccionada.length > 0) {
                base.Control.HdnCodigoEmpresaTestigo().val(empresaSeleccionada[0].CodigoEmpresa);
                base.Control.TxtNombreEmpresaTestigo().val(empresaSeleccionada[0].RazonSocial);
                base.Control.TxtRucEmpresaTestigo().val(empresaSeleccionada[0].Ruc);
                base.Control.TxtDireccionEmpresaTestigo().val(empresaSeleccionada[0].Direccion);
            }
            else {
                base.Control.HdnCodigoEmpresaTestigo().val(null);
                base.Control.TxtNombreEmpresaTestigo().val('');
                base.Control.TxtRucEmpresaTestigo().val('');
                base.Control.TxtDireccionEmpresaTestigo().val('');
            }
        },


        BtnAgregarAnexoTestigoClick: function () {            
            if (base.Control.FormularioTestigoModel.InvestigacionTestigoResponse.CodigoInvestigacion != null) {
                var filtro = {
                    CodigoInvestigacionAnexo: null,
                    CodigoArchivoAnexoSharePoint: base.Control.FormularioTestigoModel.InvestigacionTestigoResponse.CodigoArchivoDeclaracionTestigo,
                    CodigoInvestigacion: base.Control.FormularioTestigoModel.InvestigacionTestigoResponse.CodigoInvestigacion,
                    CodigoEstadoInvestigacion: base.Control.FormularioTestigoModel.InvestigacionTestigoResponse.CodigoEstadoInvestigacion,
                    CodigoClaseAnexo: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoInvestigacionTipoAnexo.CodigoDeclaracionTetigo,
                    IndicadorObligatorio: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.IndicadorObligatorio.Afirmativo,
                    flagPermitirCodigoTipoApendice: false
                };
                base.Control.DlgFormularioTestigoAnexoApendice.Show(filtro);
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValidarTabPrincipal,
                });
            }
        },

        GrabarAnexoDeclaracionTestigoSuccess: function (filtro) {
            if (filtro != null) {
                base.Control.FormularioTestigoModel.InvestigacionTestigoResponse.CodigoArchivoDeclaracionTestigo = filtro.CodigoArchivoAnexoSharePoint;
                base.Control.FormularioTestigoModel.InvestigacionTestigoResponse.NombreArchivoDeclaracionTestigo = filtro.NombreArchivoAnexoSharePoint;
                base.Control.HdnCodigoArchivoDeclaracionTestigo().val(filtro.CodigoArchivoAnexoSharePoint);
                base.Control.TxtNombreArchivoDeclaracionTestigo().val(filtro.NombreArchivoAnexoSharePoint);
            }
        },

        BtnCancelarInformacionTestigoChange: function () { base.Control.DlgFormPrincipalTestigo.divDialog.close(); },
        BtnCancelarEmpresaTestigoChange: function () { base.Control.DlgFormPrincipalTestigo.divDialog.close(); },
    };

    base.Ajax = {
        AjaxGrabarDetalleTestigo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarDetalleTestigo,
            autoSubmit: false,
            onSuccess: function (resultado) {
                if (resultado.Result >= '1') {
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                    });
                    if (base.Event.GrabarTestigoSuccess() != null) {
                        base.Event.GrabarTestigoSuccess();
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

        AjaxGrabarEmpresaTestigo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarEmpresaInvestigacionTestigo,
            autoSubmit: false,
            onSuccess: function (resultado) {
                if (resultado.IsSuccess) {
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                    });
                    if (base.Event.GrabarTestigoSuccess() != null) {
                        base.Event.GrabarTestigoSuccess();
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
