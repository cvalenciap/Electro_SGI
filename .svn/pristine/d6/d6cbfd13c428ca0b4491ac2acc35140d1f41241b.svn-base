/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD D43260443
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCalificacionFatigaPersonal');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCalificacionFatigaPersonal.Controller = function (opts) {
    var base = this;

    base.Ini = function () {};

    base.Control = {};

    base.Show = function (opts) {
        base.Control.DlgFormPrincipalCasuaRaiz = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaFormularioCalificacionFatigaPersonal,
            close: function () {
            }
        });

        base.Control.DlgFormPrincipalCasuaRaiz.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.FormularioCalificacionFatigaPersonal,
            onSuccess: function () {
                base.Ini();
            }
        });
    };
};