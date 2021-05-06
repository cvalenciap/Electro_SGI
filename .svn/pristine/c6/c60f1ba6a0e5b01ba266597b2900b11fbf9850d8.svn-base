/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: GMD 20102017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.IngresoAP_A.Index');
Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.IngresoAP_A.Index.Controller = function () {
    var base = this;
    base.Ini = function () {
        'use strict'
        base.Event.BtnBuscarClick();
        base.Control.TxtCampoFiltro().keypress(base.Event.BtnBuscarCampoFiltroClick);
        base.Control.BtnAgregarActuaPositivo().on('click', base.Event.BtnAgregarActuaPositivoClick);
        base.Control.DlgFormularioAgregarActuaPositivo = new Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.FormularioAP_A.FormularioAgregarLadoA.Controller({
            AceptarSuccess: base.Event.BtnBuscarClick
        });
        if (base.Control.HdnCodigoActuaPositivo().val() != '' && base.Control.HdnCodigoActuaPositivo().val() != null) {
            base.Control.BtnRegresarBandejaLadoA().show();
        }
        base.Control.BtnRegresarBandejaLadoA().on('click', base.Event.BtnRegresarBandejaLadoAClick);
    };

    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        DlgFormularioAgregarActuaPositivo: null,
        GrdResultado: null,
        BtnAgregarActuaPositivo: function () { return $('#btnAgregarActuaPositivo') },
        TxtCampoFiltro: function () { return $('#txtCampoFiltro'); },
        HdnCodigoActuaPositivo: function () { return $('#hdnCodigoActuaPositivo'); },
        BtnRegresarBandejaLadoA: function () { return $('#btnRegresarBandejaLadoA'); },
    };

    base.Event = {
        BtnRegresarBandejaLadoAClick: function () {
            'use strict'
            window.history.go(-1);
        },
        BtnBuscarClick: function () {
            'use strict'
            var filtro = {
                CodigoActuaPositivo: base.Control.HdnCodigoActuaPositivo().val(),
                CodigoTipoActuaPositivo: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.CodigoTipoActuaPositivoLadoA,
                CampoFiltro: base.Control.TxtCampoFiltro().val(),
            };
            $("#divGrdResultActuaPositivaLadoA").empty();
            base.Function.CrearGrid();
            base.Control.GrdResultado.Load(filtro);
        },
        BtnBuscarCampoFiltroClick: function (evento) {
            'use strict'
            var key = Pe.GMD.UI.Web.Components.Util.GetKeyCode(evento);
            var esValido = !(evento && key == 13);
            if (esValido == false) {
                base.Event.BtnBuscarClick();
            }
            return esValido;
        },

        BtnLimpiarClick: function () {
        },
        BtnAgregarActuaPositivoClick: function () {
            var filtro = {
                TituloVentana: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.EtiquetaVentanaLadoA
            };
            base.Control.DlgFormularioAgregarActuaPositivo.Show(filtro);
        },
        BtnGridEditActuaPositivoClick: function (row, data) {
            var filtro = {
                CodigoActuaPositivo: data.CodigoActuaPositivo,
                TituloVentana: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.EtiquetaVentanaLadoA
            };
            base.Control.DlgFormularioAgregarActuaPositivo.Show(filtro);
        },
        BtnGridDeleteActuaPositivoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarActuaPositivo.data = {
                        CodigoActuaPositivo: data.CodigoActuaPositivo,
                    };
                    base.Ajax.AjaxEliminarActuaPositivo.submit();
                }
            });
        },
        AjaxEliminarAjaxActuaPositivoSuccess: function (resultado) {
            if (resultado.Result >= 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
                base.Event.BtnBuscarClick();
            }
            else {
                base.Control.Mensaje.Warning({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
    };

    base.Function = {
        CrearGrid: function () {
            var columns = new Array();
            columns.push({
                data: 'NombreProyectoUsuario',
                title: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.GridProyecto,
                width: "5%"
            });
            columns.push({
                data: 'NumeroTarjeta',
                title: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.GridNroTarjeta,
                width: "10%"
            });
            columns.push({
                data: 'NombreCompletoColaboradorEntregado',
                title: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.GridEntregado,
                width: "15%"
            });
            columns.push({
                data: 'NombreEmpresa',
                title: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.GridEmpresa,
                width: "10%"
            });
            columns.push({
                data: 'NombreDepartamento',
                title: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.GridDepartamento,
                width: "10%"
            });
            columns.push({
                data: 'NombreArea',
                title: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.GridArea,
                width: "10%"
            });
            columns.push({
                data: 'FechaActuaPositivoString',
                title: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.GridFecha,
                width: "5%"
            });
            columns.push({
                data: 'NombreCompletoColaboradorSupervisor',
                title: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.GridSupervisor,
                width: "15%"
            });
            columns.push({
                data: 'IndicadorSeguridad',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.GridSeguridad,
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input " + (full.IndicadorSeguridad == true ? " checked " : "") + "  type='checkbox' disabled  >";
                    return cadena;
                },
                width: "3%"
            });
            columns.push({
                data: 'IndicadorEficiencia',
                title: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.GridEficiencia,
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input " + (full.IndicadorEficiencia == true ? " checked " : "") + "  type='checkbox' disabled  >";
                    return cadena;
                },
                width: "3%"
            });
            columns.push({
                data: 'IndicadorCumplimiento',
                title: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.GridCumplimiento,
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input " + (full.IndicadorCumplimiento == true ? " checked " : "") + "  type='checkbox' disabled  >";
                    return cadena;
                },
                width: "3%"
            });
            columns.push({
                data: 'IndicadorSeriedad',
                title: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.GridSeriedad,
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input " + (full.IndicadorSeriedad == true ? " checked " : "") + "  type='checkbox' disabled  >";
                    return cadena;
                },
                width: "3%"
            });
            columns.push({
                data: 'IndicadorCalidad',
                title: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.GridCalidad,
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input " + (full.IndicadorCalidad == true ? " checked " : "") + "  type='checkbox' disabled  >";
                    return cadena;
                },
                width: "3%"
            });
            columns.push({
                data: 'IndicadorOtros',
                title: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.GridOtros,
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input " + (full.IndicadorOtros == true ? " checked " : "") + "  type='checkbox' disabled  >";
                    return cadena;
                },
                width: "3%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditActuaPositivoClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteActuaPositivoClick } }
                ]
            });
            base.Control.GrdResultado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultActuaPositivaLadoA',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Actions.BuscarActuaPositivo,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        }
    };
    base.Ajax = {
        AjaxEliminarActuaPositivo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Actions.EliminarActuaPositivo,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarAjaxActuaPositivoSuccess
        }),
    };
};