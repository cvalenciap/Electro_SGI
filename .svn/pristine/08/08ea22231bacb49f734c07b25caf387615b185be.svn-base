ns('Pe.ElectroPeru.SGI.Presentacion.Seguridad.Permisos.Index');
Pe.ElectroPeru.SGI.Presentacion.Seguridad.Permisos.Index.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Control.PermisosModel = $.parseJSON(Pe.ElectroPeru.SGI.Presentacion.Seguridad.Permisos.Models.Permisos);

        base.Control.btnBuscar().off('click');
        base.Control.btnBuscar().on('click', base.Event.btnBuscarClick);

        base.Control.btnLimpiar().off('click');
        base.Control.btnLimpiar().on('click', base.Event.btnLimpiarClick);

        base.Control.btnRegistrar().off('click');
        base.Control.btnRegistrar().on('click', base.Event.btnRegistrarClick);

        base.Control.DlgFormulario = new Pe.ElectroPeru.SGI.Presentacion.Seguridad.Permisos.Formulario.Controller({
            GrabarSuccess: base.Event.btnBuscarClick
        });

        base.Function.CrearGrid();
        var filtro = {};
        base.Control.GrdResultado.Load(filtro);
    };

    base.Control = {
        frmFormulario: function () { return $('#frmFormulario') },
       
        slcOpcion: function () { return $('#slcOpcion'); },
        slcAccion: function () { return $('#slcAccion'); },
        slcPerfil: function () { return $('#slcPerfil'); },
        chbEstadoPermisos: function () { return $('#chbEstadoPermisos'); },

        btnBuscar: function () { return $('#btnBuscar'); },
        btnLimpiar: function () { return $('#btnLimpiar'); },
        btnRegistrar: function () { return $('#btnRegistrar'); },

        DlgFormulario: null,
        GrdResultado: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        PermisosModel: null
    };

    base.Event = {

        btnBuscarKeyPress: function (evento) {
            var key = Pe.GMD.UI.Web.Components.Util.GetKeyCode(evento);
            var esValido = !(evento && key == 13);
            if (esValido == false) {
                base.Event.btnBuscarClick();
            }
            return esValido;
        },

        btnBuscarClick: function () {
            'use strict';
            $("#divGrdResult").html("");
            base.Function.CrearGrid();
            var filtro = {
            };
            base.Control.GrdResultado.Load(filtro);
        },

        btnRegistrarClick: function () {
            'use strict'
            base.Control.DlgFormulario.Show({
                data: null
            });
        },

        btnGridEditarClick: function (row, data) {
            'use strict'
            if (data.Permiso == 5 || data.Permiso == 3 || data.Permiso == 2) {
                if (data.EstadoRegistro != Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inactivo) {
                    base.Control.DlgFormulario.Show({
                        data: { CodigoPermisos: data.CodigoPermisos }
                    });
                }
                else {
                    base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.RegistroInactivo + " o Inhabilitado" });
                }
            }
            else {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaMensajePermisoDenegado });
            }
        },

        btnGridEliminarClick: function (row, data) {
            'use strict'
            if (data.Permiso == 6 || data.Permiso == 3 || data.Permiso == 2) {
                if (data.EstadoRegistro != data.EstadoPermiso != Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inactivo) {
                    base.Control.Mensaje.Delete({
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaMensajeEliminarRegistro,
                        onAccept: function () {
                            base.Ajax.AjaxEliminar.data = {
                                CodigoPermisos: data.CodigoPermisos,
                            };
                            base.Ajax.AjaxEliminar.submit();
                        }
                    });
                }
                else {
                    base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.RegistroInactivo });
                }
            }
            else {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaMensajePermisoDenegado });
            }
        },
        AjaxEliminarSuccess: function (data) {
            'use strict'
            if (data.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito });
                base.Event.btnBuscarClick();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro })
            }
        },
    };

    base.Ajax = {
        AjaxEliminar: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguridad.Permisos.Actions.Eliminar,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarSuccess
        })
    };

    base.Function = {
        CrearGrid: function () {
            var columns = new Array();
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'Opcion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguridad.Permisos.Resources.GridOpcion,
                width: "20%"
            });

            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.PermisosModel.ListaAccion },
                data: 'Accion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguridad.Permisos.Resources.GridAccion,
                width: "20%"
            });

            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.PermisosModel.ListaPerfil },
                data: 'Perfil',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguridad.Permisos.Resources.GridPerfil,
                width: "20%"
            });

            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.PermisosModel.ListaEstadoPermisos },
                data: 'EstadoPermisoDescripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguridad.Permisos.Resources.GridEstadoPermiso,
                width: "25%"
            });

            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.PermisosModel.ListaEstado },
                data: 'EstadoRegistroDescripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguridad.Permisos.Resources.GridEstado,
                width: "30%"
            });

            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.btnGridEditarClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.btnGridEliminarClick } }
                ]
            });

            base.Control.GrdResultado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResult',
                columns: columns,
                filterColumn: true,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguridad.Permisos.Actions.Buscar,
                    source: 'Result'
                }
            });
        }
    };
};