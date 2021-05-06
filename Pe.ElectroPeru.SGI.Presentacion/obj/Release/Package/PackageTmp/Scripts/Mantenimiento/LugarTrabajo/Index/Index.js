/// <summary>
/// Script de controlador de Rol.
/// </summary>
/// <remarks>
/// Creacion: 	GMD 27052016
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.LugarTrabajo.Index');
try {
    $(document).ready(function () {
        'use strict';
        Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.LugarTrabajo.Index.Vista = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.LugarTrabajo.Index.Controller();
        Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.LugarTrabajo.Index.Vista.Ini();
    });
} catch (ex) {
}