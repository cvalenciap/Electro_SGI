/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 02112017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoVisita.Index');
Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoVisita.Index.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'
        Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
        base.Event.BtnBuscarClick();
        base.Control.BtnBuscar().off('click');
        base.Control.BtnBuscar().on('click', base.Event.BtnBuscarClick);

        base.Control.BtnLimpiar().off('click');
        base.Control.BtnLimpiar().on('click', base.Event.BtnLimpiarClick);

        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaVisitaGerencialDesde(),
            inputTo: base.Control.DtpFechaVisitaGerencialHasta(),
            minDateFrom: new Date(1900, 1, 1)
        });

        base.Control.btnDescargarExcel().on('click', base.Event.btnDescargarExcelClick);
    };    
    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        GrdResultado: null,
        BtnBuscar: function () { return $('#btnBuscar'); },
        BtnLimpiar: function () { return $('#btnLimpiar'); },
        SlcProyecto: function () { return $('#slcProyecto'); },
        SlcEstadoIngresoDocumento: function () { return $('#slcEstadoIngresoDocumento'); },
        SlcEstadoIngresoPlanAccion: function () { return $('#slcEstadoIngresoPlanAccion'); },
        SlcEstadoProcesoPlanAccion: function () { return $('#slcEstadoProcesoPlanAccion'); },
        SlcEstadoDocumento: function () { return $('#slcEstadoDocumento'); },
        SlcEstadoMinimoAccion: function () { return $('#slcEstadoMinimoAccion'); },
        DtpFechaVisitaGerencialDesde: function () { return $('#dtpFechaVisitaGerencialDesde'); },
        DtpFechaVisitaGerencialHasta: function () { return $('#dtpFechaVisitaGerencialHasta'); },
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
                FechaVisitaDesdeString: base.Control.DtpFechaVisitaGerencialDesde().val(),
                FechaVisitaHastaString: base.Control.DtpFechaVisitaGerencialHasta().val(),
                CodigoEstadoIngresoDocumento: base.Control.SlcEstadoIngresoDocumento().val(),
                CodigoEstadoIngresoPlanAccion: base.Control.SlcEstadoIngresoPlanAccion().val(),
                CodigoEstadoProcesoPlanAccion: base.Control.SlcEstadoProcesoPlanAccion().val(),
                CodigoEstadoDocumento: base.Control.SlcEstadoDocumento().val(),
                CodigoEstadoMinimoAccion: base.Control.SlcEstadoMinimoAccion().val(),
            };
            $("#divGrdResultVisitaGerencial").empty();
            base.Function.CrearGrid();
            base.Control.GrdResultado.Load(filtro);
        },
        BtnLimpiarClick: function () {
            'use strict'
            base.Control.SlcProyecto().val('');
            base.Control.DtpFechaVisitaGerencialDesde().val('');
            base.Control.DtpFechaVisitaGerencialHasta().val('');
            base.Control.SlcEstadoIngresoDocumento().val('');
            base.Control.SlcEstadoIngresoPlanAccion().val('');
            base.Control.SlcEstadoProcesoPlanAccion().val('');
            base.Control.SlcEstadoDocumento().val('');
            base.Control.SlcEstadoMinimoAccion().val('');
        },
        BtnGridEditVisitaGerencialClick: function (row, data) {
            'use strict'
            var filtro = {
                CodigoVisitaGerencial: data.CodigoVisitaGerencial
            };
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Actions.FormularioIngresoVisita, filtro);
        },
        BtnGridIrIngresoAccionesClick: function (row, data) {
            'use strict'
            var filtro = {
                NumeroVisitaGerencial: data.NumeroVisitaGerencial,
                CodigoVisitaGerencial: data.CodigoVisitaGerencial
            };
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Actions.FormularioIngresoAccion, filtro);
        },
       
        BtnGridDeleteVisitaGerencialClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarVisitaGerencial.data = {
                        CodigoVisitaGerencial: data.CodigoVisitaGerencial,
                    };
                    base.Ajax.AjaxEliminarVisitaGerencial.submit();
                }
            });
        },
        btnDescargarExcelClick: function () {
            if (base.Control.GrdResultado.core.rows().data().length >= 1) {
                var filtro = {
                    CodigoProyecto: base.Control.SlcProyecto().val(),
                    FechaVisitaDesdeString: base.Control.DtpFechaVisitaGerencialDesde().val(),
                    FechaVisitaHastaString: base.Control.DtpFechaVisitaGerencialHasta().val(),
                    CodigoEstadoDocumento: base.Control.SlcEstadoIngresoDocumento().val(),
                }
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Actions.DescargarReporteIngresoVisita, filtro);
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaExportarTablaSinRegistro });
            }
        },
    };
    base.AjaxSuccess = {
        AjaxEliminarVisitaGerencialSuccess: function (resultado) {
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
        AjaxBuscarDepartamento: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.BuscarDepartamento,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxBuscarDepartamentoSuccess
        }),

        AjaxBuscarArea: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.BuscarArea,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxBuscarAreaSuccess
        }),
        AjaxEliminarVisitaGerencial: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Actions.EliminarVisitaGerencial,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarVisitaGerencialSuccess
        }),
    };

    base.Function = {
        CrearGrid: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroVisitaGerencial',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Resource.GridNroVisita,
                width: "3%"
            });
            columns.push({
                data: 'NombreProyecto',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Resource.GridProyecto,
                width: "5%"
            });
            columns.push({
                data: 'FechaVisitaDesdeString',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Resource.GridVisitaFechaDesde,
                width: "3%"
            });
            columns.push({
                data: 'FechaVisitaHastaString',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Resource.GridVisitaFechaHasta,
                width: "3%"
            });
            columns.push({
                data: 'NombreCompletoColaboradorGerente',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Resource.GridGerenteProyecto,
                width: "5%"
            });
            columns.push({
                data: 'NombreCompletoColaboradorVisitante',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Resource.GridVisitante,
                width: "8%"
            });
            columns.push({
                data: 'FechaTopePlanAccionString',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Resource.GridFechaTopePlanAccion,
                width: "3%"
            });
            columns.push({
                data: 'NumeroObservaciones',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Resource.GridNroObservacion,               
                width: "2%"
            });
            columns.push({
                data: 'NumeroAcciones',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Resource.GridNroAcciones,
                width: "2%"
            });
            columns.push({
                data: 'DescripcionEstadoIngresoDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Resource.GridEstadoVisita,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionEstadoIngresoPlanAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Resource.GridEstadoIngresoPlanAccion,
                width: "5%"
            });
            
            columns.push({
                data: 'CodigoEstadoProcesoPlanAccion',
                width: "3%",
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Resource.GridEstadoProcesoPlanAccion,
                'mRender': function (data, type, full) {
                    var Url = Pe.ElectroPeru.SGI.Presentacion.Core.Constante.DatosConstantes.ConfiguracionUrlDespliegue.DescripcionUrlDespligue;
                    var resultado = '<a href="#" data-toggle="tooltip" title="{1}" disabled><img src="' + Url + '/Theme/images/icon/{0}" /></a>';         
                    resultado = resultado.replace("{1}", full.DescripcionEstadoProcesoPlanAccion);
                    switch (full.CodigoEstadoProcesoPlanAccion) {
                        case Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.DatosConstantes.ParametrosEstadoProcesoPlanAccion.NoRequiere:
                            resultado = resultado.replace("{0}", "colorVerde.png");
                            break
                        case Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.DatosConstantes.ParametrosEstadoProcesoPlanAccion.SinInformacion:
                            resultado = resultado.replace("{0}", "colorVerde.png");
                            break
                        case Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.DatosConstantes.ParametrosEstadoProcesoPlanAccion.AbiertoEnFecha:
                            resultado = resultado.replace("{0}", "colorVerde.png");
                            break
                        case Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.DatosConstantes.ParametrosEstadoProcesoPlanAccion.AbiertoFueraDeFecha:
                            resultado = resultado.replace("{0}", "colorRojo.png");
                            break
                        case Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.DatosConstantes.ParametrosEstadoProcesoPlanAccion.CerradoEnFecha:
                            resultado = resultado.replace("{0}", "colorVerde.png");
                            break
                        case Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.DatosConstantes.ParametrosEstadoProcesoPlanAccion.CerradoFueraDeFecha:
                            resultado = resultado.replace("{0}", "colorVerde.png");
                            break
                        case Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.DatosConstantes.ParametrosEstadoProcesoPlanAccion.AnuladoPorGerencia:
                            resultado = resultado.replace("{0}", "colorPlomo.png");
                            break
                        default:
                            resultado = resultado.replace("{0}", "");
                            break;
                    }
                    return resultado;
                }
            });

            columns.push({
                data: 'DescripcionEstadoDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Resource.GridEstadoTotalVisitaGerencial,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionEstadoMinimoAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Resource.GridEstadoMinimoAccion,
                width: "5%"
            });

            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "5%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditVisitaGerencialClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Temas, event: { on: 'click', callBack: base.Event.BtnGridIrIngresoAccionesClick }, toolTip: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaIngresarAcciones },
                    //{ type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteVisitaGerencialClick } }
                ]                       
            });

            base.Control.GrdResultado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultVisitaGerencial',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Actions.BuscarVisitaGerencial,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        }
    }
};
