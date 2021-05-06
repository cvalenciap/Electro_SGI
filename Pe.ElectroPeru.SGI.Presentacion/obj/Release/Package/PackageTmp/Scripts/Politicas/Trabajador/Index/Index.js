/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD(FMO) 16/04/2015
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Politicas.Trabajador.Index');
try {

    $(document).ready(function () {
        'use strict';
        Pe.ElectroPeru.SGI.Presentacion.Politicas.Trabajador.Index.Vista = new Pe.ElectroPeru.SGI.Presentacion.Politicas.Trabajador.Index.Controller();
        Pe.ElectroPeru.SGI.Presentacion.Politicas.Trabajador.Index.Vista.Ini();
    });
} catch (ex) {
    //Belcorp.Planit.RegistrarError(ex);
}