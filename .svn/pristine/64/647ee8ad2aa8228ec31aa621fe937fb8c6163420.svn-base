/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD D43260443
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCausasRaices');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCausasRaices.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        base.Event.GrabarAnalisiSuccess = (opts.GrabarAnalisiSuccess != null && opts.GrabarAnalisiSuccess) ? opts.GrabarAnalisiSuccess : null;
        base.Control.FormularioCausaRaiz = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Models.FormularioCausaRaizModel;
        //Edicion
        base.Control.ArrCausaRaiz = [];
        if (base.Control.FormularioCausaRaiz != null && base.Control.FormularioCausaRaiz.ListaAccionCorrectivaFactor != null) {
            for (var i = 0; i < base.Control.FormularioCausaRaiz.ListaAccionCorrectivaFactor.length; i++) {
                base.Control.ArrCausaRaiz.push({
                    CodigoInvestigacion: base.Control.FormularioCausaRaiz.ListaAccionCorrectivaFactor[i].CodigoInvestigacion,
                    CodigoInvestigacionFactorCausal: base.Control.FormularioCausaRaiz.ListaAccionCorrectivaFactor[i].CodigoInvestigacionFactorCausal
                });
            }
        }
        
        base.Control.BtnGuardarCausaRaiz().off('click');
        base.Control.BtnGuardarCausaRaiz().on('click', base.Event.BtnGuardarCausaRaizClick);


        base.Control.DdlCategoriaCausaRaiz().off('change');
        base.Control.DdlCategoriaCausaRaiz().on('change', base.Event.DdlCategoriaCausaRaizChange);

        base.Control.DdlSubCategoriaCausaRaiz().off('change');
        base.Control.DdlSubCategoriaCausaRaiz().on('change', base.Event.DdlSubCategoriaCausaRaizChange);

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmAnalisisCausasRaices(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraCausa()
        });

        base.Control.ChkCausaRaiz().off('click');
        base.Control.ChkCausaRaiz().on('click', base.Event.ChkCausaRaizClick);

        base.Control.DlgFormularioSeleccionarFactorCausal = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioSeleccionarFactorCausal.Controller({
            AceptarSuccess: base.Event.BtnMostrarCausasRaices
        });

        base.Control.BtnCancelarCausaRaiz().off('click');
        base.Control.BtnCancelarCausaRaiz().on('click', base.Event.BtnCancelarCausaRaizChange);
    };

    base.Show = function (opts) {        
        base.Control.CodigoInvestigacionCausaRaiz = opts.CodigoInvestigacionCausaRaiz;
        base.Control.CodigoInvestigacion = opts.CodigoInvestigacion;

        base.Control.DlgFormPrincipalCasuaRaiz = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaFormularioCausaRaiz,
            close: function () {
            }
        });

        base.Control.DlgFormPrincipalCasuaRaiz.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.FormularioCausasRaices,
            onSuccess: function () {
                base.Ini();
            },
            data: opts
        });
    };

    base.Control = {
        Validador: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        ArrCausaRaiz: [],
        FormularioCausaRaiz : null,
        CodigoInvestigacionCausaRaiz: null,
        CodigoInvestigacion: null,
        FrmAnalisisCausasRaices: function () { return $('#frmAnalisisCausasRaices'); },
        DdlCategoriaCausaRaiz: function () { return $('#ddlCategoriaCausaRaiz'); },
        DdlSubCategoriaCausaRaiz: function () { return $('#ddlSubCategoriaCausaRaiz'); },
        DdlCausaRaiz: function () { return $('#ddlCausaRaiz'); },
        TxaComentarioCausaRaiz: function () { return $('#txaComentarioCausaRaiz'); },
        BtnCancelarCausaRaiz: function () { return $('#btnCancelarCausaRaiz'); },
        BtnGuardarCausaRaiz: function () { return $('#btnGuardarCausaRaiz'); },
        TxtIdentificadorCausaRaiz: function () { return $('#txtIdentificadorCausaRaiz'); },
        ChkCausaRaiz: function () { return $('#chkCausaRaiz'); },
        DlgFormularioSeleccionarFactorCausal: null,
        TxtNombreCausasRaices: function () { return $('#txtNombreCausasRaices'); },

    };

    base.Function = {
        ValidacionExtraCausa: function () {
            var validaciones = new Array();

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.ArrCausaRaiz.length == 0) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtNombreCausasRaices().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtNombreCausasRaices().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });
            return validaciones;
        },
    };

    base.Event = {
        DdlCategoriaCausaRaizChange: function () {
            base.Control.DdlSubCategoriaCausaRaiz().empty();
            base.Control.DdlSubCategoriaCausaRaiz().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
            base.Control.DdlCausaRaiz().empty();
            base.Control.DdlCausaRaiz().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
            if (base.Control.DdlCategoriaCausaRaiz().val() != null && base.Control.DdlCategoriaCausaRaiz().val() != '') {
                base.Ajax.AjaxBuscarSubCategorias.data = {
                    CodigoCategoria: base.Control.DdlCategoriaCausaRaiz().val(),
                    CodigoTipoCategoria:'CAUSA'
                };
                base.Ajax.AjaxBuscarSubCategorias.submit();
            }
        },

        DdlSubCategoriaCausaRaizChange: function () {            
            base.Control.DdlCausaRaiz().empty();
            base.Control.DdlCausaRaiz().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
            if (base.Control.DdlSubCategoriaCausaRaiz().val() != null && base.Control.DdlSubCategoriaCausaRaiz().val() != '') {
                base.Ajax.AjaxBuscarCausasRaices.data = {
                    CodigoSubCategoria: base.Control.DdlSubCategoriaCausaRaiz().val(),
                };
                base.Ajax.AjaxBuscarCausasRaices.submit();
            }
        },

        BtnGuardarCausaRaizClick: function () {            
            if (base.Control.Validador.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarCausaRaiz.data = {
                            CodigoInvestigacionCausaRaiz: base.Control.CodigoInvestigacionCausaRaiz,
                            CodigoInvestigacion: base.Control.CodigoInvestigacion,
                            IdentificadorCausaRaiz: base.Control.TxtIdentificadorCausaRaiz().val(),
                            CodigoCategoria: base.Control.DdlCategoriaCausaRaiz().val(),
                            CodigoSubCategoria: base.Control.DdlSubCategoriaCausaRaiz().val(),
                            CodigoCausaRaiz: base.Control.DdlCausaRaiz().val(),
                            Comentario: base.Control.TxaComentarioCausaRaiz().val(),
                            ListaAccionCorrectivaFactor: base.Control.ArrCausaRaiz,
                        }
                        base.Ajax.AjaxGrabarCausaRaiz.submit();
                    }
                });
            }
            else {
                $("#frmAnalisisCausasRaicesSummaryErrorMessage").empty();
                $("#frmAnalisisCausasRaicesSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },

        AjaxGrabarCausaRaizSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Control.DlgFormPrincipalCasuaRaiz.divDialog.close();
                if (base.Event.GrabarAnalisiSuccess() != null) {
                    base.Event.GrabarAnalisiSuccess();
                }
            }
            else if (resultado.Result == '-2') {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaElementoDuplicado
                });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },

        AjaxBuscarSubCategoriasSuccess: function (resultado) {
            'use strict'
            $.each(resultado.Result, function (index, value) {
                base.Control.DdlSubCategoriaCausaRaiz().append(new Option(value.NombreCategoria, value.CodigoSubCategoria));
            });
        },

        AjaxBuscarCausasRaicesSuccess: function (resultado) {
            'use strict'
            $.each(resultado.Result, function (index, value) {
                base.Control.DdlCausaRaiz().append(new Option(value.DescripcionCausaRaiz, value.CodigoCausaRaiz));
            });
        },

        ChkCausaRaizClick: function () {
            if ($(this).is(":checked")) {
                var filtro = {
                    CodigoInvestigacion: base.Control.CodigoInvestigacion,
                    ListaAccionCorrectivaFactor: base.Control.FormularioCausaRaiz.ListaAccionCorrectivaFactor
                };
                base.Control.DlgFormularioSeleccionarFactorCausal.Show(filtro);
            }
            else {
                base.Control.TxtNombreCausasRaices().val('');
            }
        },
        BtnMostrarCausasRaices: function (arrCausas) {
            if (arrCausas.length > 0) {
                var textoRaices = 'Se seleccionó ';
                base.Control.ArrCausaRaiz = [];
                for (var i = 0; i < arrCausas.length; i++) {
                    base.Control.ArrCausaRaiz.push({
                        CodigoInvestigacion: base.Control.CodigoInvestigacion,
                        CodigoInvestigacionFactorCausal: arrCausas[i].Valor
                    });
                    textoRaices += arrCausas[i].Identificador + ', ';
                }
                base.Control.TxtNombreCausasRaices().val(textoRaices);
            }
            else {
                base.Control.TxtNombreCausasRaices().val('');
            }
        },
        BtnCancelarCausaRaizChange: function () { base.Control.DlgFormPrincipalCasuaRaiz.divDialog.close();}
    };

    base.Ajax = {
        AjaxGrabarCausaRaiz: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarCausaRaiz,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarCausaRaizSuccess
        }),
        AjaxBuscarSubCategorias: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarPorCategoria,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarSubCategoriasSuccess
        }),
        AjaxBuscarCausasRaices: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.ListarCausas,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarCausasRaicesSuccess
        }),
    };
};