ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioVistaPreviaFoto');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioVistaPreviaFoto.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        'use strict'
    };

    base.Show = function (opts) {
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: "Vista Previa",
            size: "size-wide",
            close: function () {

            }
        });

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.FormularioVistaPreviaFoto,
            onSuccess: function () {
                base.Ini();
            },

            data: {
                CodigoInvestigacionAnexo: opts.CodigoInvestigacionAnexo,
                CodigoInvestigacion: opts.CodigoInvestigacion
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
