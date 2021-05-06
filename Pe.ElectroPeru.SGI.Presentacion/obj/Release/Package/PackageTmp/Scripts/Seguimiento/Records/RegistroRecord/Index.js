//Invoco a mi Vista de Registro Record
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord');
try
{
    //Al cargar la vista Registro Record  se inicalizara los datos 
    $(document).ready(function () {
        'use strict';
        Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Vista = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Controller();
        Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Vista.Ini();
    });
}
catch (ex) {
}