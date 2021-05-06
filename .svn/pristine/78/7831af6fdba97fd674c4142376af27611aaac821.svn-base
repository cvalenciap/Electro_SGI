/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 27052016
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Index');

Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Index.Controller = function () {
    var base = this;

    /// <summary>
    /// Llama Funcion de base.Control
    /// </summary>

    base.Ini = function () {
        'use strict'
        base.Control.ResponsableModel = Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Models.Responsable;

        base.Control.BtnBuscar().off('click');
        base.Control.BtnBuscar().on('click', base.Event.BtnBuscarClick);

        base.Control.BtnLimpiar().off('click');
        base.Control.BtnLimpiar().on('click', base.Event.BtnLimpiarClick);

        base.Control.BtnAgregar().off('click');
        base.Control.BtnAgregar().on('click', base.Event.BtnAgregarClick);

        base.Control.TxtNombreCompleto().bind('paste', base.Event.ValidarCopiarAlfanumerico);

        base.Control.TxtNombreCompleto().off('keypress');
        base.Control.TxtNombreCompleto().on('keypress', Pe.GMD.UI.Web.Components.Util.SoloAlfanumericos);

        base.Control.DlgFormularioResponsable = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.FormularioResponsable.Controller({
            GrabarResponsableSuccess: base.Event.BtnBuscarClick
        });

        base.Control.TxtNombreCompleto().off('keypress');
        base.Control.TxtNombreCompleto().on('keypress', function (e) {
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
        FrmResponsableRegistrar: function () { return $('#frmResponsableRegistrar') },
        TxtNombreCompleto: function () { return $('#txtNombreCompleto'); },
        SlcEmpresa: function () { return $('#slcEmpresa'); },
        BtnBuscar: function () { return $('#btnBuscar'); },
        BtnLimpiar: function () { return $('#btnLimpiar'); },
        BtnAgregar: function () { return $('#btnAgregar'); },
        DlgFormularioResponsable: null,
        GrdResultado: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        ResponsableModel: null
    };

    /// <summary>
    /// Responsable Eventos
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
                NombreCompleto: base.Control.TxtNombreCompleto().val(),
                CodigoEmpresa:base.Control.SlcEmpresa().val()
                //EstadoRegistro: base.Control.CboEstadoBusqueda().val()
            };
            base.Control.GrdResultado.Load(filtro);
        },

        BtnLimpiarClick: function () {
            base.Control.FrmResponsableRegistrar()[0].reset();
            $("#btnBuscar").click();
        },

        BtnAgregarClick: function () {
            'use strict'
            base.Control.DlgFormularioResponsable.Show({
                data: null
            });
        },

        BtnGridEditClick: function (row, data) {
            'use strict'
            base.Control.DlgFormularioResponsable.Show({
                data: { CodigoResponsable: data.CodigoResponsable }
            });
        },

        BtnGridDeleteClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Confirmation({
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Resources.EtiquetaTituloEliminar,
                message: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Resources.EtiquetaMensajeEliminarRegistro,
                onAccept: function () {
                    base.Ajax.AjaxEliminar.data = {
                        listaCodigosResponsable: [data.CodigoResponsable],
                    };
                    base.Ajax.AjaxEliminar.submit();
                }
            });
        },
    };

    /// <summary>
    //Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Recurso.Actions.EliminarResponsable
    //aqui se define la direcion de metodo del controlador
    /// </summary>

    base.Ajax = {
        AjaxEliminar: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Actions.EliminarResponsable,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarSuccess
        })
    };

    /// <summary>
    /// Responsable Crear Grid
    /// </summary>

    base.Function = {
        CrearGrid: function () {
            var columns = new Array();
            columns.push({
                data: 'Dni',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Resources.GridDni,
                width: "10%"
            });
            columns.push({
                data: 'ApellidoPaterno',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Resources.GridApePaterno,
                width: "20%"
            });
            columns.push({
                data: 'ApellidoMaterno',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Resources.GridApeMaterno,
                width: "20%"
            });
            columns.push({
                data: 'Nombres',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Resources.GridNombres,
                width: "20%"
            });
            columns.push({
                data: 'Celular',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Resources.GridCelular,
                width: "15%"
            });
            columns.push({
                data: 'Email',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Resources.GridEmail,
                width: "20%"
            });
            columns.push({
                data: '',
                title: 'ES SOLICITANTE',
                mRender: function (data, type, full) {
                    var html = '';

                    if (full.EsSolicitante) {
                        html = '<span>Si<span/>';
                    }
                    else {
                        html = '<span>No<span/>';
                    }

                    return html;
                },
                width: '10px'
            });
            columns.push({
                data: '',
                title: 'ES APROBADOR',
                mRender: function (data, type, full) {
                    var html = '';

                    if (full.EsAprobador) {
                        html = '<span>Si<span/>';
                    }
                    else {
                        html = '<span>No<span/>';
                    }

                    return html;
                },
                width: '10px'
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
                    url: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Actions.BuscarResponsable,
                    source: 'Result'
                }
            });
        }
    };
};