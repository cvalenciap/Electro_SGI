/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 19102017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.BandejaObservacion.Index');
Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.BandejaObservacion.Index.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Function.CrearGridBandejaObservacion();
        base.Control.GrdResultadoBandeja.Load();
                
        base.Event.BtnBuscarClick();
        base.Control.BtnBuscar().click(base.Event.BtnBuscarClick);

        base.Control.BtnLimpiar().off('click');
        base.Control.BtnLimpiar().on('click', base.Event.BtnLimpiarClick);

        base.Control.btnDescargarExcel().on('click', base.Event.btnDescargarExcelClick);

        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaEjecucionDesde(),
            inputTo: base.Control.DtpFechaEjecucionHasta(),
            minDateFrom: new Date(1900, 1, 1)
        });
    };

    base.Control = {

        BtnBuscar: function () { return $('#btnBuscar'); },
        SlcProyecto: function () { return $('#slcProyecto'); },
        DtpFechaEjecucionDesde: function () { return $('#dtpFechaEjecucionDesde'); },
        DtpFechaEjecucionHasta: function () { return $('#dtpFechaEjecucionHasta'); },
        BtnLimpiar: function () { return $('#btnLimpiar'); },
        btnDescargarExcel: function () { return $('#btnDescargarExcel'); },

    };

    base.Event = {
        BtnBuscarClick: function () {
            var filtro = {
                CodigoProyecto: base.Control.SlcProyecto().val(),
                FechaEjecucionDesde: base.Control.DtpFechaEjecucionDesde().val(),
                FechaEjecucionHasta: base.Control.DtpFechaEjecucionHasta().val(),
                Alerta: "0"
            };
            base.Control.GrdResultadoBandeja.Load(filtro);
        },
        BtnLimpiarClick: function () {
            base.Control.SlcProyecto().val('');
            base.Control.DtpFechaEjecucionDesde().val('');
            base.Control.DtpFechaEjecucionHasta().val('');
        },
        btnDescargarExcelClick: function () {
            if (base.Control.GrdResultadoBandeja.core.rows().data().length >= 1) {
                var filtro = {
                    CodigoProyecto: base.Control.SlcProyecto().val(),
                    FechaEjecucionDesde: base.Control.DtpFechaEjecucionDesde().val(),
                    FechaEjecucionHasta: base.Control.DtpFechaEjecucionHasta().val(),
                    Alerta: "0"
                }
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.BandejaObservacion.Actions.DescargarReporteBandejaObservaciones, filtro);
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.BandejaObservacion.Resource.MsjSinResultadosObservaciones });
            }
        },
        BtnGridRevisarObservacionPlaneadaClick: function (row, data) {
            data.IndicadorLectura = true;
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.BandejaObservacion.Actions.IngresoObservacion, data);
        },
        BtnGridEditObservacionPlaneadaClick: function (row, data) {
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.BandejaObservacion.Actions.IngresoObservacion, data);
        },
        BtnGridDescargarReporteOPTClick: function (row, data) {
            if (base.Control.GrdResultadoBandeja.core.rows().data().length >= 1) {
                var filtro = {
                    CodigoObservacionPlaneada: data.CodigoObservacionPlaneada
                }
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.BandejaObservacion.Actions.DescargarReporteOPTPDF, filtro);
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.BandejaObservacion.Resource.MsjSinResultadosObservaciones });
            }
        },
        BtnValidarEstadoObservacionPlaneada: function (data, type, full) {            
            if (full.EstadoDocumento == Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.BandejaObservacion.DatosConstantes.EstadosDeObservacionPlaneadaAbierto
                || full.EstadoDocumento == Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.BandejaObservacion.DatosConstantes.EstadosDeObservacionPlaneadaReabierto)
                return true;
            else
                return false;
        }
    };

    base.Ajax = {};

    base.Function = {
        CrearGridBandejaObservacion: function () {
            var columns = new Array();
            columns.push({
                data: 'Proyecto',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.BandejaObservacion.Resource.GridProyecto,
                width: "15%"
                        });
            columns.push({
                data: 'NumeroRegistroOPT',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.BandejaObservacion.Resource.GridNumeroRegistroOPT,
                width: "10%"
            });
            columns.push({
                data: 'FechaEjecucionString',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.BandejaObservacion.Resource.GridFechaEjecucion,
                width: "10%"
            });
            columns.push({
                data: 'IndicadorProcedimientoSIG',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.BandejaObservacion.Resource.GridIndicadorProcedimientoSIG,
                width: "10%"
            });
            columns.push({
                data: 'Area',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.BandejaObservacion.Resource.GridArea,
                width: "10%"
            });
            columns.push({
                data: 'Procedimiento',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.BandejaObservacion.Resource.GridProcedimiento,
                width: "10%"
            });
            columns.push({
                data: 'Notificacion',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.BandejaObservacion.Resource.GridNotificacion,
                width: "10%"
            });            
            columns.push({
                data: 'ObservadoresInternos',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.BandejaObservacion.Resource.GridObservadoresInternos,
                width: "10%"
            });
            columns.push({
                data: 'FelicitacionProgramador',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.BandejaObservacion.Resource.GridFelicitacionProgramador,
                width: "10%"
            });
            columns.push({
                data: 'EstadoAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.BandejaObservacion.Resource.GridEstadoAccion,
                width: "15%"
            });
            columns.push({
                data: 'DescripcionEstadoDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.BandejaObservacion.Resource.GridEstadoDocumento,
                width: "15%"
            });
            columns.push({                
                            data: '',
                            title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.BandejaObservacion.Resource.GridAlerta,
                            'mRender': function (data, type, full) {
                                var urlDespliegue = Pe.ElectroPeru.SGI.Presentacion.Core.Constante.DatosConstantes.ConfiguracionUrlDespliegue.DescripcionUrlDespligue;
                                var resultado = '<a href="javascript:void(0)" data-toggle="tooltip" title="{1}" disabled><img src="' + urlDespliegue + '/Theme/images/icon/{0}" /></a>';
                                
                                switch (full.Alerta) {
                                    case Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.BandejaObservacion.DatosConstantes.ParametrosTiposAlerta.RequiereCierre:
                                        resultado = resultado.replace("{1}", Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.BandejaObservacion.DatosConstantes.ParametrosTiposAlerta.DescripcionRequiereCierre);
                                        resultado = resultado.replace("{0}", "colorRojo.png");
                                        break
                                    case Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.BandejaObservacion.DatosConstantes.ParametrosTiposAlerta.NoRequiereCierre:
                                        resultado = resultado.replace("{1}", Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.BandejaObservacion.DatosConstantes.ParametrosTiposAlerta.DescripcionNoRequiereCierre);
                                        resultado = resultado.replace("{0}", "colorVerde.png");
                                        break
                                    default:
                                        resultado = resultado.replace("{1}", Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.EtiquetaAlertaPlomo);
                                        resultado = resultado.replace("{0}", "colorPlomo.png");
                                        break;
                                }
                                return resultado;
                            }
            });                        
            /*columns.push({
                data: 'TipoRegistro',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.BandejaObservacion.Resource.GridTipoRegistro,
                width: "10%"
            });*/
            /* columns.push({
                data: 'EstadoIngreso',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.BandejaObservacion.Resource.GridEstadoIng,
                width: "5%"
            });            
            */
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Revisar, event: { on: 'click', callBack: base.Event.BtnGridRevisarObservacionPlaneadaClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, validateRender: base.Event.BtnValidarEstadoObservacionPlaneada, event: { on: 'click', callBack: base.Event.BtnGridEditObservacionPlaneadaClick } },                    
                    { type: Pe.GMD.UI.Web.Components.GridAction.Pdf, event: { on: 'click', callBack: base.Event.BtnGridDescargarReporteOPTClick }, toolTip: 'Reporte OPT' }
                ]
            });
            base.Control.GrdResultadoBandeja = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultOPT',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.BandejaObservacion.Actions.ConsultarObservacionPlaneada,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        }
    };
};