/// <summary>
/// Script de controlador de Rol.
/// </summary>
/// <remarks>
/// Creacion: 	GMD 27052016
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Index');
try {
    $(document).ready(function () {
        'use strict';
        Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Index.Vista = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Index.Controller();
        Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Index.Vista.Ini();
    });
} catch (ex) {
}