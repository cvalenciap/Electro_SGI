/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 22122017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.BandejaOtrosRegistros.Index');
Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.BandejaOtrosRegistros.Index.Controller = function () {
    var base = this;
    base.Ini = function () {
        'use strict'
        Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
        base.Control.OtrosRegistrosIndexModel = Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.Index.Models.IngresoOtrosRegistrosModel;
        base.Event.BtnBuscarClick();
        base.Control.BtnBuscar().off('click');
        base.Control.BtnBuscar().on('click', base.Event.BtnBuscarClick);

        base.Control.BtnLimpiar().off('click');
        base.Control.BtnLimpiar().on('click', base.Event.BtnLimpiarClick);

        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaEjecucionDesde(),
            inputTo: base.Control.DtpFechaEjecucionHasta(),
            minDateFrom: new Date(1900, 1, 1)
        });
        base.Control.btnDescargarExcel().on('click', base.Event.btnDescargarExcelClick);
    };

    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        GrdResultado: null,
        OtrosRegistrosIndexModel: null,
        BtnBuscar: function () { return $('#btnBuscar'); },
        BtnLimpiar: function () { return $('#btnLimpiar'); },
        SlcProyecto: function () { return $('#slcProyecto'); },
        SlcPais: function () { return $('#slcPais'); },
        SlcEmpresaPais: function () { return $('#slcEmpresaPais'); },
        SlcTipoRegistro: function () { return $('#slcTipoRegistro'); },
        SlcEstadoDocumento: function () { return $('#slcEstadoDocumento'); },
        SlcTipoAlerta: function () { return $('#slcTipoAlerta'); },
        DtpFechaEjecucionDesde: function () { return $('#dtpFechaEjecucionDesde'); },
        DtpFechaEjecucionHasta: function () { return $('#dtpFechaEjecucionHasta'); },
        btnDescargarExcel: function () { return $('#btnDescargarExcel'); },
    };

    base.Event = {
        BtnRegresarBandejaClick: function () {
            'use strict'
            window.history.go(-1);
        },
        BtnBuscarClick: function () {
            'use strict'
            var filtro = {
                CodigoProyecto: base.Control.SlcProyecto().val(),
                CodigoPais: base.Control.SlcPais().val(),
                CodigoEmpresaPais: base.Control.SlcEmpresaPais().val(),
                CodigoTipoRegistro: base.Control.SlcTipoRegistro().val(),
                CodigoEstadoDocumento: base.Control.SlcEstadoDocumento().val(),
                FechaEjecucionDesdeString: base.Control.DtpFechaEjecucionDesde().val(),
                FechaEjecucionHastaString: base.Control.DtpFechaEjecucionHasta().val(),
                CodigoTipoAlerta: base.Control.SlcTipoAlerta().val()
            };
            $("#divGrdResultOtrosRegistros").empty();
            base.Function.CrearGrid();
            base.Control.GrdResultado.Load(filtro);
        },
        BtnLimpiarClick: function () {
            'use strict'
            base.Control.SlcProyecto().val('');
            base.Control.SlcPais().val('');
            base.Control.SlcEmpresaPais().val('');
            base.Control.SlcTipoRegistro().val('');
            base.Control.SlcEstadoDocumento().val('');
            base.Control.SlcTipoAlerta().val('');
            base.Control.DtpFechaEjecucionDesde().val('');
            base.Control.DtpFechaEjecucionHasta().val('');
        },
        BtnGridEditOtrosRegistrosClick: function (row, data) {
            'use strict'
            var filtro = {
                CodigoOtrosRegistros: data.CodigoOtrosRegistros,
            };
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.Index.Actions.FormularioIngresoOtrosRegistros, filtro);
        },
        BtnGridRevisarOtrosRegistrosClick: function (row, data) {
            'use strict'
            var filtro = {
                CodigoOtrosRegistros: data.CodigoOtrosRegistros,
                IndicadorEsLectura: true,
            };
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.Index.Actions.FormularioIngresoOtrosRegistros, filtro);
        },
        BtnGridDeleteOtrosRegistrosClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarOtrosRegistros.data = {
                        CodigoOtrosRegistros: data.CodigoOtrosRegistros,
                    };
                    base.Ajax.AjaxEliminarOtrosRegistros.submit();
                }
            });
        },
        btnDescargarExcelClick: function () {
            if (base.Control.GrdResultado.core.rows().data().length >= 1) {
                var filtro = {
                    CodigoTipoRegistro: base.Control.SlcTipoRegistro().val(),
                    CodigoProyecto: base.Control.SlcProyecto().val(),
                    CodigoTipoAlerta: base.Control.SlcTipoAlerta().val(),
                    CodigoEmpresaPais: base.Control.SlcEmpresaPais().val(),
                    CodigoPais: base.Control.SlcPais().val(),
                    CodigoEstadoDocumento: base.Control.SlcEstadoDocumento().val(),                                   
                    FechaEjecucionDesdeString: base.Control.DtpFechaEjecucionDesde().val(),
                    FechaEjecucionHastaString: base.Control.DtpFechaEjecucionHasta().val(),                  
                }
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.Index.Actions.DescargarReporteOtrosRegistros, filtro);
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaExportarTablaSinRegistro });
            }
        },

    };
    base.AjaxSuccess = {
        AjaxEliminarOtrosRegistrosSuccess: function (resultado) {
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
    base.Ajax = {
        AjaxEliminarOtrosRegistros: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.Index.Actions.EliminarOtrosRegistros,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarOtrosRegistrosSuccess
        }),
    };

    base.Function = {
        CrearGrid: function () {
            var columns = new Array
            //var botones = new Array();
            //var listaBotones = new Array();
            //listaBotones.push(
            //    {
            //        Accion: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Editar,
            //        type: Pe.GMD.UI.Web.Components.GridAction.Edit,
            //        event: { on: 'click', callBack: base.Event.BtnGridEditOtrosRegistrosClick }
            //    },
            //    {
            //        Accion: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Eliminar,
            //        type: Pe.GMD.UI.Web.Components.GridAction.Delete,
            //        event: { on: 'click', callBack: base.Event.BtnGridDeleteOtrosRegistrosClick }
            //    }
            //);

            //botones = Pe.GMD.UI.Web.Components.Util.PermisosBotonesGrilla(base.Control.OtrosRegistrosIndexModel.ControlPermisos, listaBotones);
            //botones.push(
            //     {
            //         Accion: '',
            //         type: Pe.GMD.UI.Web.Components.GridAction.Revisar,
            //         event: { on: 'click', callBack: base.Event.BtnGridRevisarOtrosRegistrosClick }
            //     }
            // );
            columns.push({
                data: 'DescripcionTipoRegistro',
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.Index.Resource.GridTipoRegistro,
                width: "10%"
            });
            columns.push({
                data: 'NombreProyectoUsuario',
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.Index.Resource.GridProyecto,
                width: "10%"
            });
            columns.push({
                data: 'NumeroOtrosRegistros',
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.Index.Resource.GridNumeroTipoRegistro,
                width: "5%"
            });
            columns.push({
                data: 'NombreEmpresaPais',
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.Index.Resource.GridEmpresa,
                width: "10%"
            });
            columns.push({
                data: 'NombrePais',
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.Index.Resource.GridPais,
                width: "10%"
            });
            columns.push({
                data: 'TituloRegistro',
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.Index.Resource.GridTituloRegistro,
                width: "10%"
            });
            columns.push({
                data: 'FechaEjecucionString',
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.Index.Resource.GridFechaEjecucion,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionEstadoIngresoDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.Index.Resource.GridEstadoIngresoDocumento,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionEstadoMinimoAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.Index.Resource.GridEstadoMinimoAccion,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionEstadoDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.Index.Resource.GridEstadoDocumento,
                width: "5%"
            });

            columns.push({
                data: '',
                width: "3%",
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.Index.Resource.GridAlerta,
                'mRender': function (data, type, full) {
                    var Url = Pe.ElectroPeru.SGI.Presentacion.Core.Constante.DatosConstantes.ConfiguracionUrlDespliegue.DescripcionUrlDespligue;
                    var resultado = '<a href="javascript:void(0)" data-toggle="tooltip" title="{1}" disabled><img src="' + Url + '/Theme/images/icon/{0}" /></a>';

                    switch (full.CodigoTipoAlerta) {
                        case Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.Index.DatosConstantes.ParametrosTiposAlertas.RequiereCierre:
                            resultado = resultado.replace("{1}", Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.Index.Resource.EtiquetaAlertaRequiereCierre);
                            resultado = resultado.replace("{0}", "colorRojo.png");
                            break
                        case Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.Index.DatosConstantes.ParametrosTiposAlertas.NoRequiereCierre:
                            resultado = resultado.replace("{1}", Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.Index.Resource.EtiquetaAlertaNoRequiereCierre);
                            resultado = resultado.replace("{0}", "colorVerde.png");
                            break
                        case Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.Index.DatosConstantes.ParametrosTiposAlertas.AnuladaPorGerencia:
                            resultado = resultado.replace("{1}", Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.Index.Resource.EtiquetaAlertaAnuladaPorGerencia);
                            resultado = resultado.replace("{0}", "colorPlomo.png");
                            break
                        case Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.Index.DatosConstantes.ParametrosTiposAlertas.CombinacionNoDefinida:
                            resultado = resultado.replace("{1}", Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.Index.Resource.EtiquetaAlertaCombinacionNoDefinida);
                            resultado = resultado.replace("{0}", "ColorAmbar.png");
                            break
                        default:
                            resultado = resultado.replace("{1}", Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.Index.Resource.EtiquetaAlertaCombinacionNoDefinida);
                            resultado = resultado.replace("{0}", "ColorAmbar.Png");
                            break;
                    }
                    return resultado;
                }
            });

            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "10%",
                //actionButtons: botones

                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Revisar, event: { on: 'click', callBack: base.Event.BtnGridRevisarOtrosRegistrosClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditOtrosRegistrosClick } },
                    //{ type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteOtrosRegistrosClick } }
                ]

            });

            base.Control.GrdResultado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultOtrosRegistros',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.Index.Actions.BuscarOtrosRegistros,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        }
    }
};
