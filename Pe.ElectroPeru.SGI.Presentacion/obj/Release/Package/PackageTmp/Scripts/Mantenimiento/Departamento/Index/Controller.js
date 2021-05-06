/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 27052016
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Departamento.Index');
Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Departamento.Index.Controller = function () {
    var base = this;
    base.Ini = function () {
        'use strict'
        base.Control.DepartamentoIndexModel = $.parseJSON(Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Departamento.Models.DepartamentoModel);

        base.Control.BtnAgregarDepartamento().off('click');
        base.Control.BtnAgregarDepartamento().on('click', base.Event.BtnAgregarDepartamentoClick);

        base.Control.DlgFormularioDepartamento = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Departamento.FormularioDepartamento.Controller({
            AceptarSuccess: base.Event.BtnRetorna
        });
        base.Event.BtnBuscarClick();
    };

    base.Control = {
        DepartamentoIndexModel: null,
        DlgFormularioDepartamento: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        BtnAgregarDepartamento: function () { return $('#btnAgregarDepartamento'); },
        GrdResultado: null
    };

    base.Event = {

        BtnRetorna: function () {
            base.Event.BtnBuscarClick();
        },
        BtnBuscarClick: function () {
            'use strict';
            $("#divGrdResultDepartamento").html("");
            base.Function.CrearGrid();
            var filtro = {
            };
            base.Control.GrdResultado.Load(filtro);
        },
        BtnAgregarDepartamentoClick: function () {
            var filtro = {
                CodigoDepartamento: null
            };
            base.Control.DlgFormularioDepartamento.Show(filtro);
        },

        BtnGridEditClick: function (row, data) {
            'use strict'
            if (data.EstadoRegistro != Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inactivo) {
                var filtro = {
                    CodigoDepartamento: data.CodigoDepartamento
                };
                base.Control.DlgFormularioDepartamento.Show(filtro);
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
                        base.Ajax.AjaxEliminarDepartamento.data = {
                            CodigoDepartamento: data.CodigoDepartamento,
                        };
                        base.Ajax.AjaxEliminarDepartamento.submit();
                    }
                });
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.RegistroInactivo });
            }

        },
        AjaxEliminarDepartamentoSuccess: function (data) {
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

    base.Ajax = {
        AjaxEliminarDepartamento: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Departamento.Actions.EliminarDepartamento,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarDepartamentoSuccess
        }),
    };

    base.Function = {
        CrearGrid: function () {
            var columns = new Array();
            var botones = new Array();
            var listaBotones = new Array();
            //listaBotones.push(
            //    {
            //        Accion: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Editar,
            //        type: Pe.GMD.UI.Web.Components.GridAction.Edit,
            //        event: { on: 'click', callBack: base.Event.BtnGridEditClick }
            //    },
            //    {
            //        Accion: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Eliminar,
            //        type: Pe.GMD.UI.Web.Components.GridAction.Delete,
            //        event: { on: 'click', callBack: base.Event.BtnGridDeleteClick }
            //    }
            //);

            botones = Pe.GMD.UI.Web.Components.Util.PermisosBotonesGrilla(base.Control.DepartamentoIndexModel.ControlPermisos, listaBotones);
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'CodigoDepartamento',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Departamento.Resource.GridCodigoDepartamento,
                width: "10%"
            });
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NombreDepartamento',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Departamento.Resource.GridNombreDepartamento,
                width: "25%"
            });

            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.DepartamentoIndexModel.ListaProyecto },
                data: 'NombreProyecto',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Departamento.Resource.GridNombreProyecto,
                width: "25%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NombreColaboradorResponsable',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Departamento.Resource.GridNombreColaborador,
                width: "20%"
            });

            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.DepartamentoIndexModel.ListaEstadoDepartamento },
                data: 'EstadoRegistroDescripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Departamento.Resource.GridEstadoRegistroDescripcion,
                width: "10%"
            });

            //columns.push({
            //    filter: { enabled: false, type: "textbox" },
            //    "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
            //    "class": "controls",
            //    width: "5%",
            //    actionButtons: botones
            //});
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
                renderTo: 'divGrdResultDepartamento',
                columns: columns,
                filterColumn: true,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Departamento.Actions.BuscarDepartamento,
                    source: 'Result'
                }
            });
        }
    };
};