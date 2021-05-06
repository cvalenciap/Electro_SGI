/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 22052017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordCategoriaIncidente');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordCategoriaIncidente.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        base.Control.FormularioModelo = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Models.FormularioRecordCategoriaIncidente;
        base.Event.GrabarRecordCategoriaSuccess = (opts.GrabarRecordCategoriaSuccess != null && opts.GrabarRecordCategoriaSuccess) ? opts.GrabarRecordCategoriaSuccess : null;

        base.Control.BtnCancelar().off('click');
        base.Control.BtnCancelar().on('click', base.Event.BtnCancelarClick);

        base.Control.BtnGrabarRecordCategoria().off('click');
        base.Control.BtnGrabarRecordCategoria().on('click', base.Event.BtnGrabarRecordCategoriaClick);
        
        //if (base.Control.CodigoConsecuenciaActual != null && base.Control.CodigoConsecuenciaActual != undefined) {
        //    $("input[name=codigoConsecuenciaActual][value=" + base.Control.CodigoConsecuenciaActual + "]").prop('checked', true);
        //}
        //if (base.Control.CodigoConsecuenciaPotencial != null && base.Control.CodigoConsecuenciaPotencial != undefined) {
        //    $("input[name=codigoConsecuenciaPotencial][value=" + base.Control.CodigoConsecuenciaPotencial + "]").prop('checked', true);
        //}
    };

    base.Show = function (opts) {
        base.Control.CodigoConsecuenciaPotencial = opts.CodigoConsecuenciaPotencial;
        base.Control.CodigoConsecuenciaActual = opts.CodigoConsecuenciaActual;
        base.Control.DlgFormularioRecordCategoriaIncidente = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.TitulosVentanas.FormularioCategoria,
            size: "size-wide",
            close: function () {
            }
        });

        base.Control.DlgFormularioRecordCategoriaIncidente.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Actions.FormularioRecordCategoriaIncidente,            
            onSuccess: function () {
                base.Ini();
            },
            data: opts
        });
    };

    base.Control = {
        FormularioModelo: null,
        DlgFormularioRecordCategoriaIncidente: null,
        CodigoRecordCategoria: null,
        CodigoRecord: null,
        CodigoCategoria: null,
        CodigoPotencial: null,
        CodigoConsecuenciaActual: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        TxtNombreCategoria: function () { return $('#nombreCategoria'); },
        BtnCancelar: function () { return $('#btnCancelarRecordCategoria'); },
        BtnGrabarRecordCategoria: function () { return $('#btnGrabarRecordCategoria'); },
    };

    base.Event = {
        BtnGrabarRecordCategoriaClick: function () {
            'use strict'
            var checkCodigoConsecuenciaActual = $('input[name="codigoConsecuenciaActual"]:checked').val();
            var checkCodigoConsecuenciaPotencial = $('input[name="codigoConsecuenciaPotencial"]:checked').val();

            if (checkCodigoConsecuenciaActual != undefined && checkCodigoConsecuenciaPotencial != undefined) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarRecordCategoria.data = {
                            CodigoRecordCategoria: base.Control.FormularioModelo.Categoria.CodigoRecordCategoria,
                            CodigoCategoria: base.Control.FormularioModelo.Categoria.CodigoCategoria,
                            CodigoRecord: base.Control.FormularioModelo.Categoria.CodigoRecord,
                            CodigoConsecuenciaActual: checkCodigoConsecuenciaActual,
                            CodigoConsecuenciaPotencial: checkCodigoConsecuenciaPotencial,
                            CodigoCategoriaTextoActual: $('input[name="codigoConsecuenciaActual"]:checked').data() != undefined ? $('input[name="codigoConsecuenciaActual"]:checked').data().codigo : '',
                            CodigoCategoriaTextoPotencial: $('input[name="codigoConsecuenciaPotencial"]:checked').data() != undefined ? $('input[name="codigoConsecuenciaPotencial"]:checked').data().codigo : ''
                        };

                        base.Ajax.AjaxGrabarRecordCategoria.submit();
                    }
                });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.DebeSeleccionarRegistro
                });
            }
        },

        AjaxGrabarRecordCategoriaSuccess: function (data) {
            if (data.Result >= 1) {
                base.Control.Mensaje.Information({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Control.DlgFormularioRecordCategoriaIncidente.divDialog.close();
                base.Event.GrabarRecordCategoriaSuccess();
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
    };

    base.Ajax = {
        AjaxGrabarRecordCategoria: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.RegistroRecordCategoria,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarRecordCategoriaSuccess
        })
    };
};