/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 22052017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordCategoriaOtros');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordCategoriaOtros.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        base.Control.FormularioModelo = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Models.FormularioRecordCategoriaOtros;
        base.Event.GrabarRecordCategoriaSuccess = (opts.GrabarRecordCategoriaSuccess != null && opts.GrabarRecordCategoriaSuccess) ? opts.GrabarRecordCategoriaSuccess : null;

        base.Control.BtnCancelar().off('click');
        base.Control.BtnCancelar().on('click', base.Event.BtnCancelarClick);
        
        base.Control.BtnGrabarCategoriaOtros().off('click');
        base.Control.BtnGrabarCategoriaOtros().on('click', base.Event.BtnGrabarCategoriaOtrosClick);

        if (base.Control.CodigoConsecuenciaActual != null && base.Control.CodigoConsecuenciaActual != undefined) {
            $("input[name=codigoConsecuenciaActual][value=" + base.Control.CodigoConsecuenciaActual + "]").prop('checked', true);
        }
        if (base.Control.CodigoConsecuenciaPotencial != null && base.Control.CodigoConsecuenciaPotencial != undefined) {
            $("input[name=codigoConsecuenciaPotencial][value=" + base.Control.CodigoConsecuenciaPotencial + "]").prop('checked', true);
        }

        base.Control.ValidadorOtros = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmRecordCategoriaOtros(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.ValidarCampos
        });
    };

    base.Show = function (opts) {
        base.Control.CodigoConsecuenciaPotencial = opts.CodigoConsecuenciaPotencial;
        base.Control.CodigoConsecuenciaActual = opts.CodigoConsecuenciaActual;
        base.Control.DlgFormularioRecordCategoriaOtros = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.TitulosVentanas.FormularioCategoria,
            size: "size-wide",
            close: function () {
            }
        });

        base.Control.DlgFormularioRecordCategoriaOtros.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Actions.FormularioRecordCategoriaOtros,
            onSuccess: function () {
                base.Ini();
            },
            data: opts
        });
    };

    base.Control = {
        FrmRecordCategoriaOtros: function () { return $('#frmRecordCategoriaOtros'); },
        FormularioModelo: null,
        DlgFormularioRecordCategoriaOtros: null,
        DescripcionCategoriaOtros: null,
        CodigoRecordCategoria: null,
        CodigoRecord: null,
        CodigoCategoria: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        TxtNombreCategoria: function () { return $('#nombreCategoria'); },
        TxtComentario: function(){ return $('#txtComentario'); },
        BtnCancelar: function () { return $('#btnCancelarRecordCategoriaOtros'); },
        BtnGrabarCategoriaOtros: function () { return $('#btnGrabarCategoriaOtros'); },
        CodigoConsecuenciaPotencial: null,
        CodigoConsecuenciaActual: null,
        ValidadorOtros: null
    };

    base.Event = {
        BtnGrabarCategoriaOtrosClick: function () {
            'use strict'
            var checkCodigoConsecuenciaActual = $('input[name="codigoConsecuenciaActual"]:checked').val();
            var checkCodigoConsecuenciaPotencial = $('input[name="codigoConsecuenciaPotencial"]:checked').val();            
            if (checkCodigoConsecuenciaActual != undefined && checkCodigoConsecuenciaPotencial != undefined) {
                if (base.Control.ValidadorOtros.isValid()) {
                    base.Control.Mensaje.Confirmation({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                        onAccept: function () {
                            base.Ajax.AjaxGrabarCategoriaOtros.data = {
                                CodigoRecordCategoria: base.Control.FormularioModelo.Categoria.CodigoRecordCategoria,
                                CodigoCategoria: base.Control.FormularioModelo.Categoria.CodigoCategoria,
                                CodigoRecord: base.Control.FormularioModelo.Categoria.CodigoRecord,
                                DescripcionCategoriaOtros: base.Control.TxtComentario().val(),
                                CodigoConsecuenciaActual: checkCodigoConsecuenciaActual,
                                CodigoConsecuenciaPotencial: checkCodigoConsecuenciaPotencial
                            };

                            base.Ajax.AjaxGrabarCategoriaOtros.submit();
                        }
                    });
                }
                else {
                    $("#frmRecordCategoriaOtrosSummaryErrorMessage").empty();
                    $("#frmRecordCategoriaOtrosSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                }
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.DebeSeleccionarRegistro
                });
            }
        },

        AjaxGrabarCategoriaOtrosSuccess: function (data) {
            if (data.Result >= 1)
            {
                base.Control.Mensaje.Information({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Control.DlgFormularioRecordCategoriaOtros.divDialog.close();
                base.Event.GrabarRecordCategoriaSuccess();
            }
            else
            {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
    };

    base.Ajax = {
        AjaxGrabarCategoriaOtros: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.RegistroRecordCategoriaOtros,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarCategoriaOtrosSuccess
        })
    };
};