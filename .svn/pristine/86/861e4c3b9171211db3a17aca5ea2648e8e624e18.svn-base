/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 25012017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordSustento');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordSustento.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Control.BtnCancelar().off('click');
        base.Control.BtnCancelar().on('click', base.Event.BtnCancelarClick);

        base.Control.BtnGrabarRecordSustento().off('click');
        base.Control.BtnGrabarRecordSustento().on('click', base.Event.BtnGrabarRecordSustentoClick);

        base.Control.TxtSustento().val(base.Control.DescripcionRecordSustento);

        base.Control.ValidadorDescripcionSustento = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmRecordSustento(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.ValidarCampos
        });
    };

    base.Show = function (opts) {
        base.Control.CodigoRecord = opts.CodigoRecord;
        base.Control.CodigoTipoRecord = opts.CodigoTipoRecord;
        base.Control.DescripcionTipoRecord = opts.DescripcionTipoRecord;
        base.Control.NumeroRecord = opts.NumeroRecord;       
        base.Control.CodigoRecordSustento = opts.CodigoRecordSustento;
        base.Control.DescripcionRecordSustento = opts.DescripcionRecordSustento;
        
        base.Control.DlgFormularioRecordSustento = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.TituloRecordSustento,
            size: "size-wide",
            close: function () {
            }
        });

        base.Control.DlgFormularioRecordSustento.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Actions.FormularioRecordSustento,
            onSuccess: function () {
                base.Ini();
            }            
        });
    };

    base.Control = {
        FrmRecordSustento: function () { return $('#frmRecordSustento') },
        ValidadorDescripcionSustento: null,
        DlgFormularioRecordSustento: null,
        TxtSustento: function () { return $('#txtSustento') },
        BtnCancelar: function () { return $('#btnCancelarRecordSustento'); },
        BtnGrabarRecordSustento: function () { return $('#btnGrabarRecordSustento'); },
        CodigoRecord: null,
        CodigoTipoRecord: null,
        DescripcionTipoRecord: null,
        NumeroRecord: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message()
    };

    base.Event = {
        BtnGrabarRecordSustentoClick: function () {
            if (base.Control.ValidadorDescripcionSustento.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarRecordSustento.data = {
                            CodigoRecordSustento: base.Control.CodigoRecordSustento,
                            CodigoRecord: base.Control.CodigoRecord,
                            Descripcion: base.Control.TxtSustento().val(),
                        };

                        base.Ajax.AjaxGrabarRecordSustento.submit();
                    }
                });
            }
            else {
                $("#frmRecordSustentoSummaryErrorMessage").empty();
                $("#frmRecordSustentoSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },

        AjaxGrabarRecordSustentoSuccess: function (resultado) {
            var filtro = {
                CodigoRecord: base.Control.CodigoRecord,
                CodigoRecordSustento: base.Control.CodigoRecordSustento,
                CodigoTipoRecord: base.Control.CodigoTipoRecord,
                DescripcionTipoRecord: base.Control.DescripcionTipoRecord,
                NumeroRecord: base.Control.NumeroRecord
            };

            if (resultado.Result == "1")
            {
                base.Control.CodigoRecord = null;
                base.Control.CodigoTipoRecord = null;
                base.Control.DescripcionTipoRecord = null;
                base.Control.NumeroRecord = null;
                base.Control.TxtSustento().val('');

                base.Control.DlgFormularioRecordSustento.divDialog.close();

                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });

                setTimeout(function () {
                    Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Actions.RegistroRecord, filtro);
                }, 1000);
            }
        }
    };

    base.Ajax = {
        AjaxGrabarRecordSustento: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Actions.RegistroRecordSustento,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarRecordSustentoSuccess
        })
    };
};