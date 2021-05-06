/// <summary>
/// Script de controlador de Parametro.
/// </summary>
/// <remarks>
/// Creacion: 	GMD(SYS) 24/03/2015
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Politicas.SeccionParametro.Index');
try {

    $(document).ready(function () {
        'use strict';
        Pe.ElectroPeru.SGI.Presentacion.Politicas.SeccionParametro.Index.Vista = new Pe.ElectroPeru.SGI.Presentacion.Politicas.SeccionParametro.Index.Controller();
        Pe.ElectroPeru.SGI.Presentacion.Politicas.SeccionParametro.Index.Vista.Ini();
    });
} catch (ex) {
    //Belcorp.Planit.RegistrarError(ex);
}