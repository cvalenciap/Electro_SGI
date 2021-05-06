ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.FormularioVerRecordAccion');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.FormularioVerRecordAccion.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        'use strict'        
    };

    base.Show = function (opts) {
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.RecordAccion.Resource.EtiquetaTituloFormularioVerAccion,
            size: "size-wide",            
            close: function () {

            }
        });

        base.Control.DlgForm.getAjaxContent({            
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Actions.FormularioVerRecordAccion,
            data: { CodigoRecordAccion: opts.CodigoRecordAccion },
            onSuccess: function () {
                base.Ini();
            }
        });
    };

    base.Control = {        
        DlgFormularioRecordAccion: null,
        GrdResultado: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        RecordAccionModel: null,
    };
};