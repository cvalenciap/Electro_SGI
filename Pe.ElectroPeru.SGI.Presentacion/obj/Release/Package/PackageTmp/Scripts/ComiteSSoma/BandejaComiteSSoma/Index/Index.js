/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 28112017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.BandejaComiteSSoma.Index');
try {
    $(document).ready(function () {
        'use strict';
        Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.BandejaComiteSSoma.Index.Vista = new Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.BandejaComiteSSoma.Index.Controller();
        Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.BandejaComiteSSoma.Index.Vista.Ini();
    });
} catch (ex) {
}