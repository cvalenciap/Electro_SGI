/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 27052016
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.Index');
Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.Index.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Control.EmpresaModel = $.parseJSON(Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.Models.Empresa);

        base.Control.BtnBuscar().off('click');
        base.Control.BtnBuscar().on('click', base.Event.BtnBuscarClick);

        base.Control.BtnLimpiar().off('click');
        base.Control.BtnLimpiar().on('click', base.Event.BtnLimpiarClick);

        base.Control.BtnAgregar().off('click');
        base.Control.BtnAgregar().on('click', base.Event.BtnAgregarClick);

        //base.Control.TxtNombreEmpresaUsuario().bind('paste', base.Event.ValidarCopiarAlfanumerico);
        //base.Control.TxtNombreEmpresaUsuario().off('keypress');
        //base.Control.TxtNombreEmpresaUsuario().on('keypress', Pe.GMD.UI.Web.Components.Util.SoloAlfanumericos);

        base.Control.DlgFormularioEmpresa = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.FormularioEmpresa.Controller({
            GrabarEmpresaSuccess: base.Event.BtnBuscarClick
        });

        //base.Control.TxtNombreEmpresaUsuario().off('keypress');
        //base.Control.TxtNombreEmpresaUsuario().on('keypress', function (e) {
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
        FrmUnidadEmpresaRegistrar: function () { return $('#frmEmpresaRegistrar') },       
        BtnBuscar: function () { return $('#btnBuscar'); },
        BtnLimpiar: function () { return $('#btnLimpiar'); },
        BtnAgregar: function () { return $('#btnAgregar'); },
        DlgFormularioEmpresa: null,
        GrdResultado: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        EmpresaModel: null
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
            base.Control.DlgFormularioEmpresa.Show({
                data: null
            });
        },
        
        BtnGridEditClick: function (row, data) {
            'use strict'
            if (data.EstadoRegistro != Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inactivo) {
                base.Control.DlgFormularioEmpresa.Show({
                    data: { CodigoEmpresa: data.CodigoEmpresa }
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
                        base.Ajax.AjaxEliminarEmpresa.data = {
                            CodigoEmpresa: data.CodigoEmpresa,
                        };
                        base.Ajax.AjaxEliminarEmpresa.submit();
                    }
                });
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.RegistroInactivo });
            }

        },
        AjaxEliminarEmpresaSuccess: function (data) {
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
        AjaxEliminarEmpresa: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.Actions.EliminarEmpresa,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarEmpresaSuccess
        })
    };

    /// <summary>
    /// UnidadOrganizativa Crear Grid
    /// </summary>

    base.Function = {
        CrearGrid: function () {
            var columns = new Array();
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'CodigoEmpresa',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.Resources.GridCodigoEmpresa,
                width: "5%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'RazonSocial',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.Resources.GridRazonSocial,
                width: "30%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'Ruc',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.Resources.GridRUC,
                width: "10%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'Abreviatura',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.Resources.GridAbreviatura,
                width: "10%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'Direccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.Resources.GridDireccion,
                width: "25%"
            });

            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.EmpresaModel.ListaCodigoTipoEmpresa },
                data: 'NombreTipoEmpresa',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.Resources.GridTipoEmpresa,
                width: "25%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'ActividadEconomica',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.Resources.GridActividadEconomica,
                width: "25%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NumeroTrabajadores',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.Resources.GridNroTrabajadores,
                width: "15%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NombreAltoRiesgo',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.Resources.GridAltoRiesgo,
                width: "15%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NumeroTrabajadoresAfiliados',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.Resources.GridNroTrabajadoresAfiliados,
                width: "15%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NumeroTrabajadoresNoAfiliados',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.Resources.GridNroTrabajadoresNoAfiliados,
                width: "15%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NombreAseguradora',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.Resources.GridNombreAseguradora,
                width: "15%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NombreDuenioContrato',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.Resources.GridDuenoContrato,
                width: "35%"
            });

            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.EmpresaModel.ListaEstadoEmpresa },
                data: 'EstadoRegistroDescripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.Resources.GridEstadoRegistroDescripcion,
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
                scrollY: true,
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.Actions.BuscarEmpresa,
                    source: 'Result'
                }
            });
        }
    };
};