ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioVistaPreviaRecord');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioVistaPreviaRecord.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        'use strict'
    };

    base.Show = function (opts) {
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: "Preview Photo",
            size: "size-wide",
            close: function () {

            }
        });

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.FormularioVistaPreviaRecord,
            onSuccess: function () {
                base.Ini();
            },

            data: {
                valorArchivoString: opts.valorArchivoString
            }
        });
    };

    base.Control = {
    };

    base.Event = {
    };

    base.Ajax = {
    };
};
