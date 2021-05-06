/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 28112017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.BandejaOtrosRegistros.Index');
try {
    $(document).ready(function () {
        'use strict';
        Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.BandejaOtrosRegistros.Index.Vista = new Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.BandejaOtrosRegistros.Index.Controller();
        Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.BandejaOtrosRegistros.Index.Vista.Ini();
    });
} catch (ex) {
}