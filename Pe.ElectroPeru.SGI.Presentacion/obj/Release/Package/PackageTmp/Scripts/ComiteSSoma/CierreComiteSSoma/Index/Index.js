﻿/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 11122017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.CierreComiteSSoma.Index');
try {
    $(document).ready(function () {
        'use strict';
        Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.CierreComiteSSoma.Index.Vista = new Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.CierreComiteSSoma.Index.Controller();
        Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.CierreComiteSSoma.Index.Vista.Ini();
    });
} catch (ex) {
}