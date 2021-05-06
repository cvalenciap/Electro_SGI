/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 22052017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordCategoriaCuasi');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordCategoriaCuasi.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        base.Control.FormularioModelo = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Models.FormularioRecordCategoriaCuasi;
        
        if (base.Control.FormularioModelo.ListaRecordCategoriaCuasi != null && base.Control.FormularioModelo.ListaRecordCategoriaCuasi.length > 0) {
            for (var i = 0; i < base.Control.FormularioModelo.ListaRecordCategoriaCuasi.length; i++) {
                $('#id_' + base.Control.FormularioModelo.ListaRecordCategoriaCuasi[i].CodigoCategoriaTexto).prop("checked", true);
            }
        }

        base.Event.GrabarRecordCategoriaSuccess = (opts.GrabarRecordCategoriaSuccess != null && opts.GrabarRecordCategoriaSuccess) ? opts.GrabarRecordCategoriaSuccess : null;

        base.Control.BtnCancelar().off('click');
        base.Control.BtnCancelar().on('click', base.Event.BtnCancelarClick);

        base.Control.BtnGrabarRecordCategoria().off('click');
        base.Control.BtnGrabarRecordCategoria().on('click', base.Event.BtnGrabarRecordCategoriaClick);               
    };

    base.Show = function (opts) {        
        base.Control.CodigoPotencial = opts.CodigoPotencial;
        base.Control.DlgFormularioRecordCategoriaCuasi = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.TitulosVentanas.FormularioCategoria,
            size: "size-wide",
            close: function () {
            }
        });

        base.Control.DlgFormularioRecordCategoriaCuasi.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Actions.FormularioRecordCategoriaCuasi,
            onSuccess: function () {
                base.Ini();
            },
            data: opts
        });
    };

    base.Control = {
        FormularioModelo: null,
        DlgFormularioRecordCategoriaCuasi: null,
        CodigoRecordCategoria: null,
        CodigoRecord: null,
        CodigoCategoria: null,
        CodigoPotencial: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        TxtNombreCategoria: function () { return $('#nombreCategoria'); },
        BtnCancelar: function () { return $('#btnCanceladRecordCategoriaCuasi'); },
        BtnGrabarRecordCategoria: function () { return $('#btnGrabarRecordCategoriaCuasi'); },
    };

    base.Event = {
        GetValorMasAltoConsecuenciaChecked: function () {
            var array = [];
            if ($('input[name="codigoConsecuenciaLesion"]:checked').data() != undefined) {
                var obj = {
                    numero: $('input[name="codigoConsecuenciaLesion"]:checked').data().numero,
                    codigo: $('input[name="codigoConsecuenciaLesion"]:checked').data().codigo,
                    valor: $('input[name="codigoConsecuenciaLesion"]:checked').val()
                }
                array.push(obj);
            }
            if ($('input[name="codigoConsecuenciaImpacto"]:checked').data() != undefined) {
                var obj = {
                    numero: $('input[name="codigoConsecuenciaImpacto"]:checked').data().numero,
                    codigo: $('input[name="codigoConsecuenciaImpacto"]:checked').data().codigo,
                    valor: $('input[name="codigoConsecuenciaImpacto"]:checked').val()
                }
                array.push(obj);
            }
            if ($('input[name="codigoConsecuenciaDanio"]:checked').data() != undefined) {
                var obj = {
                    numero: $('input[name="codigoConsecuenciaDanio"]:checked').data().numero,
                    codigo: $('input[name="codigoConsecuenciaDanio"]:checked').data().codigo,
                    valor: $('input[name="codigoConsecuenciaDanio"]:checked').val()
                }
                array.push(obj);
            }
            if ($('input[name="codigoConsecuenciaPerdida"]:checked').data() != undefined) {
                var obj = {
                    numero: $('input[name="codigoConsecuenciaPerdida"]:checked').data().numero,
                    codigo: $('input[name="codigoConsecuenciaPerdida"]:checked').data().codigo,
                    valor: $('input[name="codigoConsecuenciaPerdida"]:checked').val()
                }
                array.push(obj);
            }
            if ($('input[name="codigoConsecuenciaMedioAmbiental"]:checked').data() != undefined) {
                var obj = {
                    numero: $('input[name="codigoConsecuenciaMedioAmbiental"]:checked').data().numero,
                    codigo: $('input[name="codigoConsecuenciaMedioAmbiental"]:checked').data().codigo,
                    valor: $('input[name="codigoConsecuenciaMedioAmbiental"]:checked').val()
                }
                array.push(obj);
            }

            var mayor = 0;
            var indice = '';
            for (var i = 0; i < array.length; i++) {
                if (array[i].numero > mayor) {
                    mayor = array[i].numero;
                    indice = i;
                }
            }

            return array[indice];
        },
        BtnGrabarRecordCategoriaClick: function () {
            'use strict'
            if (base.Event.GetValorMasAltoConsecuenciaChecked() != undefined && base.Event.GetValorMasAltoConsecuenciaChecked() != null) {
                var ListaCategoriaCuasi = [];
                $('.chkPotencial:checked').each(function (i) {                    
                    ListaCategoriaCuasi.push({                        
                        CodigoCategoriaTexto: $(this).data().codigo,
                        CodigoConsecuenciaPotencial: $(this).val()
                    });
                });

                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarRecordCategoria.data = {
                            CodigoRecordCategoria: base.Control.FormularioModelo.Categoria.CodigoRecordCategoria,
                            CodigoCategoria: base.Control.FormularioModelo.Categoria.CodigoCategoria,
                            CodigoRecord: base.Control.FormularioModelo.Categoria.CodigoRecord,
                            CodigoConsecuenciaPotencial: base.Event.GetValorMasAltoConsecuenciaChecked().valor,
                            CodigoCategoriaTextoPotencial: base.Event.GetValorMasAltoConsecuenciaChecked().codigo,
                            ListaCategoriaCuasi: ListaCategoriaCuasi
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
                base.Control.DlgFormularioRecordCategoriaCuasi.divDialog.close();
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