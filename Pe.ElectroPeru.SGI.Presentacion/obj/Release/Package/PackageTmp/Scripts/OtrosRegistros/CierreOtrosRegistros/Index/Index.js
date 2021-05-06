/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 22122017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.CierreOtrosRegistros.Index');
try {
    $(document).ready(function () {
        'use strict';
        Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.CierreOtrosRegistros.Index.Vista = new Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.CierreOtrosRegistros.Index.Controller();
        Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.CierreOtrosRegistros.Index.Vista.Ini();
    });
} catch (ex) {
}