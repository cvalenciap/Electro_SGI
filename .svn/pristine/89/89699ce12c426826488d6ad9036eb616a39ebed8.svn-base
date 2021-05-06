/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD D43260443
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.FormularioMatrizRiesgos');
Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.FormularioMatrizRiesgos.Controller = function (opts) {
    var base = this;

    base.Ini = function () {};

    base.Control = {};
    
    base.Show = function (opts) {
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.EtiquetaTituloMatrizRiesgos,
            close: function () {
            }
        });
        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Actions.FormularioMatrizRiesgos,
            onSuccess: function () {
                base.Ini();
            }
        });
    };
};