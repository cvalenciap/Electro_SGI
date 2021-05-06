/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 27052016
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.UnidadOrganizativa.Index');

Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.UnidadOrganizativa.Index.Controller = function () {
    var base = this;

    /// <summary>
    /// Llama Funcion de base.Control
    /// </summary>

    base.Ini = function () {
        'use strict'
        base.Control.UnidadOrganizativaModel = Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.UnidadOrganizativa.Models.UnidadOrganizativa;

        base.Control.BtnBuscar().off('click');
        base.Control.BtnBuscar().on('click', base.Event.BtnBuscarClick);

        base.Control.BtnLimpiar().off('click');
        base.Control.BtnLimpiar().on('click', base.Event.BtnLimpiarClick);

        base.Control.BtnAgregar().off('click');
        base.Control.BtnAgregar().on('click', base.Event.BtnAgregarClick);

        base.Control.TxtNombreUO().bind('paste', base.Event.ValidarCopiarAlfanumerico);

        base.Control.TxtNombreUO().off('keypress');
        base.Control.TxtNombreUO().on('keypress', Pe.GMD.UI.Web.Components.Util.SoloAlfanumericos);

        base.Control.DlgFormularioUnidadOrganizativa = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.UnidadOrganizativa.FormularioUnidadOrganizativa.Controller({
            GrabarUnidadOrganizativaSuccess: base.Event.BtnBuscarClick
        });

        base.Control.TxtNombreUO().off('keypress');
        base.Control.TxtNombreUO().on('keypress', function (e) {
            if (e.keyCode == 13) {
                e.preventDefault();
                $("#btnBuscar").click();
            }
        });

        base.Function.CrearGrid();
        base.Event.BtnBuscarClick();
    };

    /// <summary>
    /// create variable as object name
    /// </summary>

    base.Control = {
        FrmUnidadOrganizativaRegistrar: function () { return $('#frmUnidadOrganizativaRegistrar') },
        TxtNombreUO: function () { return $('#txtNombreUO'); },
        SlcEmpresa: function () { return $('#slcEmpresa'); },
        BtnBuscar: function () { return $('#btnBuscar'); },
        BtnLimpiar: function () { return $('#btnLimpiar'); },
        BtnAgregar: function () { return $('#btnAgregar'); },
        DlgFormularioUnidadOrganizativa: null,
        GrdResultado: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        UnidadOrganizativaModel: null
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

        AjaxEliminarSuccess: function (data) {
            'use strict'
            if (data.Result >= 1) {
                base.Control.Mensaje.Information({ message: Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaEliminacionExitosa });
                base.Event.BtnBuscarClick();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaErrorRegistro });
            }
        },

        BtnBuscarClick: function () {
            'use strict'
            var filtro = {
                NombreUO: base.Control.TxtNombreUO().val(),
                CodigoEmpresa:base.Control.SlcEmpresa().val()
                //EstadoRegistro: base.Control.CboEstadoBusqueda().val()
            };
            base.Control.GrdResultado.Load(filtro);
        },

        BtnLimpiarClick: function () {
            base.Control.FrmUnidadOrganizativaRegistrar()[0].reset();
            $("#btnBuscar").click();
        },

        BtnAgregarClick: function () {
            'use strict'
            base.Control.DlgFormularioUnidadOrganizativa.Show({
                data: null
            });
        },

        BtnGridEditClick: function (row, data) {
            'use strict'
            base.Control.DlgFormularioUnidadOrganizativa.Show({
                data: { CodigoUO: data.CodigoUO }
            });
        },

        BtnGridDeleteClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Confirmation({
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.UnidadOrganizativa.Resources.EtiquetaTituloEliminar,
                message: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.UnidadOrganizativa.Resources.EtiquetaMensajeEliminarRegistro,
                onAccept: function () {
                    base.Ajax.AjaxEliminar.data = {
                        listaCodigosUnidadOrganizativa: [data.CodigoUO],
                    };
                    base.Ajax.AjaxEliminar.submit();
                }
            });
        },
    };

    /// <summary>
    //Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Recurso.Actions.EliminarUnidadOrganizativa
    //aqui se define la direcion de metodo del controlador
    /// </summary>

    base.Ajax = {
        AjaxEliminar: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.UnidadOrganizativa.Actions.EliminarUnidadOrganizativa,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarSuccess
        })
    };

    /// <summary>
    /// UnidadOrganizativa Crear Grid
    /// </summary>

    base.Function = {
        CrearGrid: function () {
            var columns = new Array();
            columns.push({
                data: 'Empresa',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.UnidadOrganizativa.Resources.GridEmpresa,
                width: "10%"
            });            
            columns.push({
                data: 'IdUO',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.UnidadOrganizativa.Resources.GridIdUO,
                width: "10%"
            });
            columns.push({
                data: 'AbreviaturaUO',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.UnidadOrganizativa.Resources.GridAbreviaturaUO,
                width: "30%"
            });
            columns.push({
                data: 'NombreUO',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.UnidadOrganizativa.Resources.GridNombreUnidadOrganizativa,
                width: "30%"
            });
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditClick } }//,
                   // { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteClick } }
                ]
            });

            base.Control.GrdResultado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResult',
                columns: columns,
                hasSelectionRows: false,
                //columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.UnidadOrganizativa.Actions.BuscarUnidadOrganizativa,
                    source: 'Result'
                }
            });
        }
    };
};