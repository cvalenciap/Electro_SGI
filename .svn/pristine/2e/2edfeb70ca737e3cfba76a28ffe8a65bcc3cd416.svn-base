/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 27052016
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Area.Index');
Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Area.Index.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Control.AreaModel = $.parseJSON(Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Area.Models.Area);

        base.Control.BtnBuscar().off('click');
        base.Control.BtnBuscar().on('click', base.Event.BtnBuscarClick);

        base.Control.BtnLimpiar().off('click');
        base.Control.BtnLimpiar().on('click', base.Event.BtnLimpiarClick);

        base.Control.BtnAgregar().off('click');
        base.Control.BtnAgregar().on('click', base.Event.BtnAgregarClick);

        base.Control.TxtNombreArea().bind('paste', base.Event.ValidarCopiarAlfanumerico);

        base.Control.TxtNombreArea().off('keypress');
        base.Control.TxtNombreArea().on('keypress', Pe.GMD.UI.Web.Components.Util.SoloAlfanumericos);

        base.Control.DlgFormularioArea = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Area.FormularioArea.Controller({
            GrabarAreaSuccess: base.Event.BtnBuscarClick
        });

        base.Control.TxtNombreArea().off('keypress');
        base.Control.TxtNombreArea().on('keypress', function (e) {
            if (e.keyCode == 13) {
                e.preventDefault();
                $("#btnBuscar").click();
            }
        });

        base.Function.CrearGrid();
        var filtro = {
        };
        base.Control.GrdResultado.Load(filtro);
    };

    /// <summary>
    /// create variable as object name
    /// </summary>

    base.Control = {
        FrmUnidadAreaRegistrar: function () { return $('#frmAreaRegistrar') },
        TxtNombreArea: function () { return $('#txtNombreArea'); },
        SlcDepartamento: function () { return $('#slcDepartamento'); },
        SlcColaboradorResponsable: function () { return $('#slcColaboradorResponsable'); },
        SlcProyecto: function () { return $('#slcProyecto'); },
        HdCodigoArea: function () { return $('#hdCodigoArea'); },
        BtnBuscar: function () { return $('#btnBuscar'); },
        BtnLimpiar: function () { return $('#btnLimpiar'); },
        BtnAgregar: function () { return $('#btnAgregar'); },
        DlgFormularioArea: null,
        GrdResultado: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        AreaModel: null
    };

    /// <summary>
    /// UnidadOrganizativa Eventos
    /// </summary>

    base.Event = {
        ValidarCopiarAlfanumerico: function (e) {
            return Pe.GMD.UI.Web.Components.Util.ValidateCopyOnlyAlphanumeric(e);
        },

        BtnBuscarKeyPress: function (evento) {
            var key = Pe.GMD.UI.Web.Components.Util.GetKeyCode(evento);
            var esValido = !(evento && key == 13);
            if (esValido == false) {
                base.Event.BtnBuscarClick();
            }
            return esValido;
        },

        ValidarCopiarSoloNumeros: function (e) {
            return Pe.GMD.UI.Web.Components.Util.ValidateCopyOnlyNumeric(e);
        },

        ValidarCopiarSoloLetras: function (e) {
            return Pe.GMD.UI.Web.Components.Util.ValidarCopiarSoloTexto(e);
        },

        BtnBuscarClick: function () {
            'use strict';
            $("#divGrdResult").html("");
            base.Function.CrearGrid();
            var filtro = {
            };
            base.Control.GrdResultado.Load(filtro);
        },

        BtnAgregarClick: function () {
            'use strict'
            base.Control.DlgFormularioArea.Show({
                data: null
            });
        },

        BtnGridEditClick: function (row, data) {
            'use strict'
            if (data.Permiso == 5 || data.Permiso == 3 || data.Permiso == 2) {
                if (data.EstadoRegistro != Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inactivo) {
                    base.Control.DlgFormularioArea.Show({
                        data: { CodigoArea: data.CodigoArea }
                    });
                }
                else {
                    base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.RegistroInactivo });
                }
            }
            else {
                base.Control.Mensaje.Information({ message: 'No tiene permisos suficientes para realizar esta operación' });
            }
        },

        BtnGridDeleteClick: function (row, data) {
            'use strict'
            if (data.Permiso == 6 || data.Permiso == 3 || data.Permiso == 2) {
                if (data.EstadoRegistro != Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inactivo) {
                    base.Control.Mensaje.Delete({
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaMensajeEliminarRegistro,
                        onAccept: function () {
                            base.Ajax.AjaxEliminarArea.data = {
                                CodigoArea: data.CodigoArea,
                            };
                            base.Ajax.AjaxEliminarArea.submit();
                        }
                    });
                }
                else {
                    base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.RegistroInactivo });
                }
            }
            else {
                base.Control.Mensaje.Information({ message: 'No tiene permisos suficientes para realizar esta operación' });
            }
        },
        AjaxEliminarAreaSuccess: function (data) {
            'use strict'
            if (data.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito });//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaEliminacionExitosa });
                base.Event.BtnBuscarClick();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro })//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaErrorRegistro });
            }
        },
    };

    /// <summary>
    //Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Recurso.Actions.EliminarUnidadOrganizativa
    //aqui se define la direcion de metodo del controlador
    /// </summary>

    base.Ajax = {
        AjaxEliminarArea: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Area.Actions.EliminarArea,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarAreaSuccess
        })
    };

    /// <summary>
    /// UnidadOrganizativa Crear Grid
    /// </summary>

    base.Function = {
        CrearGrid: function () {
            var columns = new Array();
            //columns.push({
            //    filter: { enabled: true, type: "textbox" },
            //    data: 'CodigoArea',
            //    title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Area.Resources.GridCodigoArea,
            //    width: "10%"
            //});            

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NombreResponsable',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Area.Resources.GridNombreResponsable,
                width: "25%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NombreArea',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Area.Resources.GridNombreArea,
                width: "25%"
            });

            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.AreaModel.ListaEstadoArea },
                data: 'EstadoRegistroDescripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Area.Resources.GridEstadoRegistroDescripcion,
                width: "30%"
            });

            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteClick } }
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
                    url: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Area.Actions.BuscarArea,
                    source: 'Result'
                }
            });
        }
    };
};