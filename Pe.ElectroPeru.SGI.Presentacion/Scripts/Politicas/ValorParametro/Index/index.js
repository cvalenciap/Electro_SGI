/// <summary>
/// Script de controlador de Parametro.
/// </summary>
/// <remarks>
/// Creacion: 	GMD(SYS) 24/03/2015
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Politicas.ValorParametro.Index');
try {

    $(document).ready(function () {
        'use strict';
        Pe.ElectroPeru.SGI.Presentacion.Politicas.ValorParametro.Index.Vista = new Pe.ElectroPeru.SGI.Presentacion.Politicas.ValorParametro.Index.Controller();
        Pe.ElectroPeru.SGI.Presentacion.Politicas.ValorParametro.Index.Vista.Ini();
    });
} catch (ex) {
    //Belcorp.Planit.RegistrarError(ex);
}