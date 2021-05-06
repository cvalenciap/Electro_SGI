/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 27052016
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Proyecto.Index');
Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Proyecto.Index.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Control.ProyectoModel = $.parseJSON(Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Proyecto.Models.Proyecto);

        base.Control.BtnBuscar().off('click');
        base.Control.BtnBuscar().on('click', base.Event.BtnBuscarClick);

        base.Control.BtnLimpiar().off('click');
        base.Control.BtnLimpiar().on('click', base.Event.BtnLimpiarClick);

        base.Control.BtnAgregar().off('click');
        base.Control.BtnAgregar().on('click', base.Event.BtnAgregarClick);

        //base.Control.TxtNombreProyectoUsuario().bind('paste', base.Event.ValidarCopiarAlfanumerico);
        //base.Control.TxtNombreProyectoUsuario().off('keypress');
        //base.Control.TxtNombreProyectoUsuario().on('keypress', Pe.GMD.UI.Web.Components.Util.SoloAlfanumericos);

        base.Control.DlgFormularioProyecto = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Proyecto.FormularioProyecto.Controller({
            GrabarProyectoSuccess: base.Event.BtnBuscarClick
        });

        //base.Control.TxtNombreProyectoUsuario().off('keypress');
        //base.Control.TxtNombreProyectoUsuario().on('keypress', function (e) {
        //    if (e.keyCode == 13) {
        //        e.preventDefault();
        //        $("#btnBuscar").click();
        //    }
        //});

        base.Function.CrearGrid();
        var filtro = {
        };
        base.Control.GrdResultado.Load(filtro);
    };

    /// <summary>
    /// create variable as object name
    /// </summary>

    base.Control = {
        FrmUnidadProyectoRegistrar: function () { return $('#frmProyectoRegistrar') },       
        BtnBuscar: function () { return $('#btnBuscar'); },
        BtnLimpiar: function () { return $('#btnLimpiar'); },
        BtnAgregar: function () { return $('#btnAgregar'); },
        DlgFormularioProyecto: null,
        GrdResultado: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        ProyectoModel: null
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
            base.Control.DlgFormularioProyecto.Show({
                data: null
            });
        },
        
        BtnGridEditClick: function (row, data) {
            'use strict'
            if (data.EstadoRegistro != Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inactivo) {
                base.Control.DlgFormularioProyecto.Show({
                    data: { CodigoProyecto: data.CodigoProyecto }
                });
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.RegistroInactivo });
            }
        },

        BtnGridDeleteClick: function (row, data) {
            'use strict'
            if (data.EstadoRegistro != Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inactivo) {
                base.Control.Mensaje.Delete({
                    onAccept: function () {
                        base.Ajax.AjaxEliminarProyecto.data = {
                            CodigoProyecto: data.CodigoProyecto,
                        };
                        base.Ajax.AjaxEliminarProyecto.submit();
                    }
                });
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.RegistroInactivo });
            }

        },
        AjaxEliminarProyectoSuccess: function (data) {
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
        AjaxEliminarProyecto: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Proyecto.Actions.EliminarProyecto,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarProyectoSuccess
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
            //    data: 'CodigoProyecto',
            //    title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Proyecto.Resources.GridCodigoProyecto,
            //    width: "10%"
            //});

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'CodigoIdentificador',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Proyecto.Resources.GridCodigoProyecto,
                width: "10%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NombreProyecto',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Proyecto.Resources.GridNombreProyecto,
                width: "25%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NombreProyectoUsuario',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Proyecto.Resources.GridNombreProyectoUsuario,
                width: "25%"
            });

            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.ProyectoModel.ListaEmpresa },
                data: 'NombreEmpresa',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Proyecto.Resources.GridEmpresa,
                width: "25%"
            });

            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.ProyectoModel.ListaCodigoPais },
                data: 'NombrePais',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Proyecto.Resources.GridPais,
                width: "25%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'CodigoMeta4Sispo',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Proyecto.Resources.GridCodigoMeta4Sispo,
                width: "15%"
            });

            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.ProyectoModel.ListaEstadoProyecto },
                data: 'EstadoRegistroDescripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Proyecto.Resources.GridEstadoRegistroDescripcion,
                width: "20%"
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
                    url: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Proyecto.Actions.BuscarProyecto,
                    source: 'Result'
                }
            });
        }
    };
};