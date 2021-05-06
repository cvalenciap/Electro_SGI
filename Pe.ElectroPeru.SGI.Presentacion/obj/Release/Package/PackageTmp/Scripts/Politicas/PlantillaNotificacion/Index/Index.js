/// <summary>
/// Script de controlador de Plantilla Notificación
/// </summary>
/// <remarks>
/// Creacion: 	GMD(SYS) 24/06/2015
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Politicas.PlantillaNotificacion.Index');
try {
    $(document).ready(function () {
        'use strict';
        Pe.ElectroPeru.SGI.Presentacion.Politicas.PlantillaNotificacion.Index.Vista = new Pe.ElectroPeru.SGI.Presentacion.Politicas.PlantillaNotificacion.Index.Controller();
        Pe.ElectroPeru.SGI.Presentacion.Politicas.PlantillaNotificacion.Index.Vista.Ini();
    });
} catch (ex) {
    //Belcorp.Planit.RegistrarError(ex);
}