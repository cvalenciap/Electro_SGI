﻿/// <summary>
/// Script de controlador de Sección de Parametro.
/// </summary>
/// <remarks>
/// Creacion: 	GMD(SYS) 24/03/2015
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Politicas.SeccionParametro.Index');
Pe.ElectroPeru.SGI.Presentacion.Politicas.SeccionParametro.Index.Controller = function () {
    var base = this;
    base.Ini = function () {
        base.Control.DlgFormularioEliminar = new Pe.GMD.UI.Web.Components.Message();
        
        base.Control.BtnAgregar().on('click', base.Event.BtnAgregarClick);
        base.Control.BtnEliminar().on('click', base.Event.BtnEliminarClick);
        base.Function.CrearGrid();
        base.Event.BtnBuscarClick();
        base.Control.FrmRegister = new Pe.ElectroPeru.SGI.Presentacion.Politicas.SeccionParametro.FormularioSeccionParametro.Controller();
    };
    base.Control = {
        CodigoParametro: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        HdCodigoParametro: function () { return $('#hdCodigoParametro'); },
        BtnEliminar: function () { return $('#btnEliminar'); },
        BtnAgregar: function () { return $('#btnAgregar'); },
        FrmRegister: null,
        DlgFormularioEliminar: null,
        GrdResultado: null
    };
    base.Event = {
        BtnBuscarClick: function () {
            var filtro = {
                codigoParametro: base.Control.HdCodigoParametro().val()
            };

            base.Control.GrdResultado.Load(filtro);
        },        
        BtnAgregarClick: function () {
            base.Control.FrmRegister.Show({
                data: { CodigoParametro: base.Control.HdCodigoParametro().val() },
                AfterGrabar: function () {
                    base.Event.BtnBuscarClick();
                }
            });
        },
        BtnGridEditClick: function (row, data) {
            base.Control.FrmRegister.Show({
                AfterGrabar: function () {
                    base.Event.BtnBuscarClick();
                },
                data: { CodigoParametro: data.CodigoParametro, CodigoSeccion: data.CodigoSeccion }
            });
        },
        BtnEliminarClick: function (row, data) {
            var selectedData = base.Control.GrdResultado.GetSelectedData();

            if (selectedData.length < 1) {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Politicas.SeccionParametro.Resources.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Recursos.Validacion.SeleccionarRegistroEliminar
                });
            }
            else {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Politicas.SeccionParametro.Resources.TituloEliminar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Politicas.SeccionParametro.Resources.MsgEliminar,
                    onAccept: function () {
                        var listaCodigos = new Array();
                        for (var i = 0; i < selectedData.length; i++) {
                            listaCodigos.push({ CodigoParametro: selectedData[i].CodigoParametro, CodigoSeccion: selectedData[i].CodigoSeccion });
                        }
                        base.Ajax.AjaxEliminar.data = listaCodigos;
                        base.Ajax.AjaxEliminar.submit();
                    }
                });
            }
        },
        BtnGridEliminarClick: function (row, data) {
            base.Control.Mensaje.Confirmation({
                message: Pe.ElectroPeru.SGI.Presentacion.Recursos.Validacion.EtiquetEliminacion,
                onAccept: function () {
                    var arrayEliminar = new Array();

                    arrayEliminar.push({ CodigoParametro: data.CodigoParametro, CodigoSeccion: data.CodigoSeccion });
                    base.Ajax.AjaxEliminar.data = arrayEliminar;
                    base.Ajax.AjaxEliminar.submit();
                }
            });
        },
        AjaxEliminarSuccess: function (data) {
            base.Event.BtnBuscarClick();
        }
    };
    base.Ajax = {
        AjaxEliminar: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Politicas.SeccionParametro.Actions.EliminarSeccionParametro,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarSuccess
        })
    };
    base.Function = {
        CrearGrid: function (data) {
            var columns = new Array();
                        
            columns.push({ data: "Nombre", title: Pe.ElectroPeru.SGI.Presentacion.Politicas.SeccionParametro.Resources.GridEtiquetaNombre } );
            columns.push({ data: "DescripcionTipoDato", title: Pe.ElectroPeru.SGI.Presentacion.Politicas.SeccionParametro.Resources.GridEtiquetaTipoDato });
            columns.push({
                data: "IndicadorPermiteModificar", title: Pe.ElectroPeru.SGI.Presentacion.Politicas.SeccionParametro.Resources.GridEtiquetaPermiteModificar, mRender: function (data, type, full) {
                    return Pe.GMD.UI.Web.Components.Util.RenderIndicador(data);
            }
            });
            columns.push({
                data: "IndicadorObligatorio", title: Pe.ElectroPeru.SGI.Presentacion.Politicas.SeccionParametro.Resources.GridEtiquetaObligatorio, mRender: function (data, type, full) {
                    return Pe.GMD.UI.Web.Components.Util.RenderIndicador(data);
                }
            });
            columns.push({ data: "NombreParametroRelacionado", title: Pe.ElectroPeru.SGI.Presentacion.Politicas.SeccionParametro.Resources.GridEtiquetaParamatroRelacionado });
            columns.push({ data: "NombreSeccionRelacionado", title: Pe.ElectroPeru.SGI.Presentacion.Politicas.SeccionParametro.Resources.GridEtiquetaSeccionRelacionada });
            columns.push({ data: "NombreSeccionRelacionadoMostrar", title: Pe.ElectroPeru.SGI.Presentacion.Politicas.SeccionParametro.Resources.GridEtiquetaSeccionRelacionadaVisible });

            var listaActionButtons = new Array();

            listaActionButtons.push({ type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditClick } });
            listaActionButtons.push({ type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridEliminarClick } });

            columns.push({
                data: '', title: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                'class': "controls",
                width: "3%",
                actionButtons: listaActionButtons
            });
                        
            base.Control.GrdResultado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResult',
                columns: columns,
                hasSelectionRows: true,
                hasPagingServer: false,
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Politicas.SeccionParametro.Actions.BuscarSeccionParametro,
                    source: 'Result'
                }
            });
        },
    };
};