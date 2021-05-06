ns('Pe.ElectroPeru.SGI.Presentacion.Seguridad.Accion.Index');
Pe.ElectroPeru.SGI.Presentacion.Seguridad.Accion.Index.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Control.AccionModel = $.parseJSON(Pe.ElectroPeru.SGI.Presentacion.Seguridad.Accion.Models.Accion);

        base.Control.btnBuscar().off('click');
        base.Control.btnBuscar().on('click', base.Event.btnBuscarClick);

        base.Control.btnLimpiar().off('click');
        base.Control.btnLimpiar().on('click', base.Event.btnLimpiarClick);

        base.Control.btnRegistrar().off('click');
        base.Control.btnRegistrar().on('click', base.Event.btnRegistrarClick);

        base.Control.txtNombre().off('keypress');
        base.Control.txtNombre().on('keypress', Pe.GMD.UI.Web.Components.Util.SoloAlfanumericos);

        base.Control.DlgFormulario = new Pe.ElectroPeru.SGI.Presentacion.Seguridad.Accion.Formulario.Controller({
            GrabarSuccess: base.Event.btnBuscarClick
        });

        base.Control.txtNombre().off('keypress');
        base.Control.txtNombre().on('keypress', function (e) {
            if (e.keyCode == 13) {
                e.preventDefault();
                $("#btnBuscar").click();
            }
        });

        base.Function.CrearGrid();
        var filtro = {};
        base.Control.GrdResultado.Load(filtro);
    };

    base.Control = {
        frmFormulario: function () { return $('#frmFormulario') },
        txtNombre: function () { return $('#txtNombre'); },
        txtDescripcion: function () { return $('#txtDescripcion'); },
        
        btnBuscar: function () { return $('#btnBuscar'); },
        btnLimpiar: function () { return $('#btnLimpiar'); },
        btnRegistrar: function () { return $('#btnRegistrar'); },        

        DlgFormulario: null,
        GrdResultado: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        AccionModel: null
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
                        data: { CodigoAccion: data.CodigoAccion }
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

        btnGridEliminarClick: function (row, data) {
            'use strict'
            if (data.Permiso == 6 || data.Permiso == 3 || data.Permiso == 2) {
                if (data.EstadoRegistro != Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inactivo) {
                    base.Control.Mensaje.Delete({
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaMensajeEliminarRegistro,
                        onAccept: function () {
                            base.Ajax.AjaxEliminar.data = {
                                CodigoAccion: data.CodigoAccion,
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
            action: Pe.ElectroPeru.SGI.Presentacion.Seguridad.Accion.Actions.Eliminar,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarSuccess
        })
    };

    base.Function = {
        CrearGrid: function () {
            var columns = new Array();            
           
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'Nombre',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguridad.Accion.Resources.GridNombre,
                width: "25%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguridad.Accion.Resources.GridDescripcion,
                width: "25%"
            });

            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.AccionModel.ListaEstado },
                data: 'EstadoRegistroDescripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguridad.Accion.Resources.GridEstado,
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
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguridad.Accion.Actions.Buscar,
                    source: 'Result'
                }
            });
        }
    };
};