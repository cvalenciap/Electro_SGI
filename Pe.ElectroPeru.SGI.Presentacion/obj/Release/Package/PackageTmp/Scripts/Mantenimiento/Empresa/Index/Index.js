/// <summary>
/// Script de controlador de Rol.
/// </summary>
/// <remarks>
/// Creacion: 	GMD 27052016
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.Index');
try {
    $(document).ready(function () {
        'use strict';
        Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.Index.Vista = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.Index.Controller();
        Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.Index.Vista.Ini();
    });
} catch (ex) {
}