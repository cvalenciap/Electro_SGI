/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 08022017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCambiarEstado');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCambiarEstado.Controller = function () {
    var base = this;

    base.Ini = function () {};

    base.Show = function (opts) {
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.TituloVentanaCambiarEstado,
            close: function () {
            }
        });

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.FormularioCambiarEstado,
            onSuccess: function () {
                base.Ini();
            }
        });
    };

    base.Control = {
    };

    base.Function = {};

    base.Event = {
    };
};
