/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD D43260443
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.FormularioCausasRaices');
Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.FormularioCausasRaices.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        base.Event.GrabarAnalisiSuccess = (opts.GrabarAnalisiSuccess != null && opts.GrabarAnalisiSuccess) ? opts.GrabarAnalisiSuccess : null;
        base.Control.FormularioCausaRaiz = Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Models.FormularioCausasRaices;
        
        base.Control.BtnGuardarCausaRaiz().off('click');
        base.Control.BtnGuardarCausaRaiz().on('click', base.Event.BtnGuardarCausaRaizClick);
        
        base.Control.DdlCategoriaCausaRaiz().off('change');
        base.Control.DdlCategoriaCausaRaiz().on('change', base.Event.DdlCategoriaCausaRaizChange);

        base.Control.DdlSubCategoriaCausaRaiz().off('change');
        base.Control.DdlSubCategoriaCausaRaiz().on('change', base.Event.DdlSubCategoriaCausaRaizChange);

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmAnalisisCausasRaices(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos
        });

        base.Control.BtnCancelarCausaRaiz().off('click');
        base.Control.BtnCancelarCausaRaiz().on('click', base.Event.BtnCancelarCausaRaizChange);
    };

    base.Show = function (opts) {        
        base.Control.DlgFormPrincipalCasuaRaiz = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloFormularioCausaRaiz,
            close: function () {
            }
        });

        base.Control.DlgFormPrincipalCasuaRaiz.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.FormularioCausasRaices,
            onSuccess: function () {
                base.Ini();
            },
            data: opts
        });
    };

    base.Control = {
        Validador: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),        
        FormularioCausaRaiz : null,
        FrmAnalisisCausasRaices: function () { return $('#frmAnalisisCausasRaices'); },
        DdlCategoriaCausaRaiz: function () { return $('#ddlCategoriaCausaRaiz'); },
        DdlSubCategoriaCausaRaiz: function () { return $('#ddlSubCategoriaCausaRaiz'); },
        DdlCausaRaiz: function () { return $('#ddlCausaRaiz'); },
        TxaComentarioCausaRaiz: function () { return $('#txaComentarioCausaRaiz'); },
        BtnCancelarCausaRaiz: function () { return $('#btnCancelarCausaRaiz'); },
        BtnGuardarCausaRaiz: function () { return $('#btnGuardarCausaRaiz'); },
        TxtIdentificadorCausaRaiz: function () { return $('#txtIdentificadorCausaRaiz'); },
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
                    CodigoTipoCategoria: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.CodigoTipoCategoriaCausa
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
                            CodigoRecordCausaRaiz: base.Control.FormularioCausaRaiz.RecordCausaRaiz.CodigoRecordCausaRaiz,
                            CodigoTipoCausaRaizParametro: base.Control.FormularioCausaRaiz.RecordCausaRaiz.CodigoTipoCausaRaizParametro,
                            CodigoTipoCausaRaizEntidad: base.Control.FormularioCausaRaiz.RecordCausaRaiz.CodigoTipoCausaRaizEntidad,
                            CodigoGenerado: base.Control.TxtIdentificadorCausaRaiz().val(),
                            CodigoCategoria: base.Control.DdlCategoriaCausaRaiz().val(),
                            CodigoSubCategoria: base.Control.DdlSubCategoriaCausaRaiz().val(),
                            CodigoCausaRaiz: base.Control.DdlCausaRaiz().val(),
                            Comentario: base.Control.TxaComentarioCausaRaiz().val()
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
            else if (resultado.Result >= '-2') {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.TituloFormulario.EtiquetaRegistroRepetido
                });
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
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
        BtnCancelarCausaRaizChange: function () { base.Control.DlgFormPrincipalCasuaRaiz.divDialog.close();}
    };

    base.Ajax = {
        AjaxGrabarCausaRaiz: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.RegistrarRecordCausaRaiz,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarCausaRaizSuccess
        }),
        AjaxBuscarSubCategorias: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.BuscarPorCategoriaPorCausaRaiz,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarSubCategoriasSuccess
        }),
        AjaxBuscarCausasRaices: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.ListarCausas,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarCausasRaicesSuccess
        }),
    };
};