/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD(EMP) 24/03/2015
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Politicas.UnidadOperativa.Index');
try {

    $(document).ready(function () {
        'use strict';
        Pe.ElectroPeru.SGI.Presentacion.Politicas.UnidadOperativa.Index.Vista = new Pe.ElectroPeru.SGI.Presentacion.Politicas.UnidadOperativa.Index.Controller();
        Pe.ElectroPeru.SGI.Presentacion.Politicas.UnidadOperativa.Index.Vista.Ini();
    });
} catch (ex) {
    //Belcorp.Planit.RegistrarError(ex);
}