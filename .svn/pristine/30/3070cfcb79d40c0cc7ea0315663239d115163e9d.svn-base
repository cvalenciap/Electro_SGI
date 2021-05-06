ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioVistaPreviaDocumentoFoto');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioVistaPreviaDocumentoFoto.Controller = function (opts) {
    var base = this;
    base.Ini = function () {
        'use strict'
    };
    base.Show = function (opts) {
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.TitulosVentanas.VistaPreviaFoto,
            size: "size-wide",
            close: function () {

            }
        });

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.FormularioVistaPreviaDocumentoFoto,
            onSuccess: function () {
                base.Ini();
            },

            data: {
                CodigoDocumentoAnexo: opts.CodigoDocumentoAnexo,
                CodigoTipoAnexoEntidad: opts.CodigoTipoAnexoEntidad
            }
            //    data: {
            //    CodigoRecordAnexo: opts.CodigoRecordAnexo,
            //    CodigoRecord: opts.CodigoRecord
            //}


        });
    };

    base.Control = {
    };

    base.Event = {
    };

    base.Ajax = {
    };
};
