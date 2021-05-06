/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 07082017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInformes');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInformes.Controller = function () {
    var base = this;

    base.Ini = function () {
        //base.Control.BtnBandejaInvestigacion().off('click');
        //base.Control.BtnBandejaInvestigacion().on('click', base.Event.BtnBandejaInvestigacionClick);
        //base.Control.BtnBandejaInformes().off('click');
        //base.Control.BtnBandejaInformes().on('click', base.Event.BtnBandejaInformesClick);

        base.Control.BtnBuscar().off('click');
        base.Control.BtnBuscar().on('click', base.Event.BtnBuscarInformeConsolidadoClick);

        base.Control.BtnLimpiar().off('click');
        base.Control.BtnLimpiar().on('click', base.Event.BtnLimpiarClick);

        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaRecordDesde(),
            inputTo: base.Control.DtpFechaRecordHasta(),
            minDateFrom: new Date(1900, 1, 1)
        });

        base.Function.CrearGridInformeConsolidado();
        base.Event.BtnBuscarInformeConsolidadoClick();
        base.Control.btnDescargarExcel().on('click', base.Event.btnDescargarExcelClick);
       
    };

    base.Control = {
        InformeModel: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        CodigoRecordAnexo: null,
        CodigoArchivoAnexoSharePoint: null,
        NumeroRecord: null,
        //BtnBandejaInvestigacion: function () { return $('#btnBandejaInvestigacion'); },
        //BtnBandejaInformes: function () { return $('#btnBandejaInformes'); },

        SlcProyecto: function () { return $('#slcProyecto'); },
        DtpFechaRecordDesde: function () { return $('#dtpFechaRecordDesde'); },
        DtpFechaRecordHasta: function () { return $('#dtpFechaRecordHasta'); },
        BtnBuscar: function () { return $('#btnBuscar'); },
        BtnLimpiar: function () { return $('#btnLimpiar'); },
        btnDescargarExcel: function () { return $('#btnDescargarExcel'); },
    };

    base.Event = {
        //BtnBandejaInvestigacionClick: function () {
        //    window.location.href = Pe.ElectroPeru.SGI.Presentacion.Base.Actions.FormularioInvestigacion;
        //},
        //BtnBandejaInformesClick: function () {
        //    window.location.href = Pe.ElectroPeru.SGI.Presentacion.Base.Actions.FormularioInformes;
        //},
        BtnBuscarInformeConsolidadoClick: function () {
            'use strict'
            var filtro = {
                CodigoProyecto: base.Control.SlcProyecto().val(),
                FechaRecordDesdeString: base.Control.DtpFechaRecordDesde().val(),
                FechaRecordHastaString: base.Control.DtpFechaRecordHasta().val(),
                CodigoEstadoInvestigacion: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.EstadoInvestigacionPorElaborar
            };

            base.Control.GridInformeConsolidado.Load(filtro);
        },
        BtnLimpiarClick: function () {
            base.Control.SlcProyecto().val('');
            base.Control.DtpFechaRecordDesde().val(null);
            base.Control.DtpFechaRecordHasta().val(null);
            base.Event.BtnBuscarInvestigacionPorElaborarClick();
        },

        btnDescargarExcelClick: function () {
            if (base.Control.GridInformeConsolidado.core.rows().data().length >= 1) {
                var filtro = {
                    CodigoProyecto: base.Control.SlcProyecto().val(),
                    FechaRecordDesdeString: base.Control.DtpFechaRecordDesde().val(),
                    FechaRecordHastaString: base.Control.DtpFechaRecordHasta().val()
                }
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Actions.DescargarReporteInforme, filtro);
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MensajeObservacionAuditoria });
            }
        },

        BtnGridDescargarReporteIncidenteClick: function (row, data) {
            'use strict';
            var filtro = {
                CodigoRecord: data.CodigoRecord,
                CodigoTipoRecord: data.CodigoTipoRecord,
                NumeroRecord: data.NumeroRecord
            };
            base.Control.NumeroRecord = data.NumeroRecord;
            base.Ajax.AjaxValidarDescargarReporteIncidente.data = {
                CodigoRecord: data.CodigoRecord,
                CodigoTipoRecord: data.CodigoTipoRecord,
                NumeroRecord: data.NumeroRecord
            };
            base.Ajax.AjaxValidarDescargarReporteIncidente.submit();
        },

        AjaxValidarDescargarReporteIncidenteSuccess: function (resultado) {            
            if (resultado.Result.CodigoRecordAnexo == null) {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Mensaje.MensajeDescargaReporteIncidente
                });
            }
            else {
                var filtro = {
                    CodigoRecordAnexo: resultado.Result.CodigoRecordAnexo,
                    NumeroRecord: base.Control.NumeroRecord
                };
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Actions.DescargarReporteIncidenteSharePoint, filtro);
            }
        },

        BtnGridDescargarReporteInvestigacionClick: function (row, data) {            
            'use strict';           
            base.Control.NumeroRecord = data.NumeroRecord;
            base.Ajax.AjaxValidarDescargarReporteInvestigacion.data = {
                CodigoInvestigacion: data.CodigoInvestigacion,
                CodigoRecord: data.CodigoRecord,
                CodigoTipoRecord: data.CodigoTipoRecord,
                NumeroRecord: data.NumeroRecord
            };
            base.Ajax.AjaxValidarDescargarReporteInvestigacion.submit();
        },

        AjaxValidarDescargarReporteInvestigacionSuccess: function (resultado) {            
            if (resultado.Result.length == 0 || resultado.Result[0].CodigoArchivoAnexoSharePoint == null || resultado.Result[0].CodigoArchivoAnexoSharePoint == 0) {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Mensaje.MensajeDescargaReporteInvestigacion
                });
            }
            else {
                var filtroDescargar = {
                    CodigoArchivoAnexoSharePoint: resultado.Result[0].CodigoArchivoAnexoSharePoint,
                    NumeroRecord: base.Control.NumeroRecord
                };
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Actions.DescargarReporteInvestigacionSharePoint, filtroDescargar);
            }
        },
    };

    base.Ajax = {
        AjaxValidarDescargarReporteIncidente: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Actions.ValidarDescargarReporteIncidente,
            autoSubmit: false,
            onSuccess: base.Event.AjaxValidarDescargarReporteIncidenteSuccess
        }),
        AjaxValidarDescargarReporteInvestigacion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Actions.ValidarDescargarReporteInvestigacion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxValidarDescargarReporteInvestigacionSuccess
        }),
    };

    base.Function = {
        CrearGridInformeConsolidado: function () {
            var columns = new Array();           
            columns.push({
                data: 'NumeroRecord',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridNumeroRecord,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionTipoRecord',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridDescripcionTipoRecord,
                width: "20%"
            });
            columns.push({
                data: 'FechaRecordString',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridFechaRecordString,
                width: "10%"
            });            
            columns.push({
                data: 'Titulo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridTitulo,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionFueIncidenteTrabajo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridFueIncidenteTrabajo,
                width: "10%"
            });
            columns.push({
                data: 'NombreProyecto',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridNombreProyecto,
                width: "15%"
            });
            columns.push({
                data: 'DescripcionConsecuenciaIncidente',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridDescripcionConsecuenciaIncidente,
                width: "20%"
            });
            columns.push({
                data: 'DescripcionPotencialIncidente',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridDescripcionPotencialIncidente,
                width: "20%"
            });
            columns.push({
                data: 'DescripcionHpi',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridDescripcionHPI,
                width: "15%"
            });            
            columns.push({
                data: 'DescripcionCategoriaPrincipal',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridDescripcionCategoriaPrincipal,
                width: "15%"
            });
            columns.push({
                data: 'Etapa',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridEtapa,
                width: "15%"
            });
            columns.push({
                data: 'DescripcionEstadoRecord',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridDescripcionEstadoRecord,
                width: "15%"
            });
            //columns.push({
            //    data: 'Informe',
            //    title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridProcesoInvestigacion,
            //    width: "15%"
            //});
            columns.push({
                data: '',
                width: "3%",
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridAlertaInvestigacion,
                'mRender': function (data, type, full) {
                    var url = Pe.ElectroPeru.SGI.Presentacion.Core.Constante.DatosConstantes.ConfiguracionUrlDespliegue.DescripcionUrlDespligue;
                    var resultado = '<a href="javascript:void(0)" data-toggle="tooltip" title="{1}" disabled><img src="' + url + '/Theme/images/icon/{0}" /></a>';
                    if (full.CodigoEtapaIncidente == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.EtapaIncidente.Anuncio) {
                        switch (full.CodigoProcesoInvestigacion) {
                            case Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.ProcesoAnuncio.EnFecha:
                                resultado = resultado.replace("{1}", full.Informe);
                                resultado = resultado.replace("{0}", "colorVerde.png");
                                break;
                            case Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.ProcesoAnuncio.FueraFecha:
                                resultado = resultado.replace("{1}", full.Informe);
                                resultado = resultado.replace("{0}", "colorRojo.png");
                                break;
                            default:
                                resultado = resultado.replace("{1}", "");
                                resultado = resultado.replace("{0}", "ColorAmbar.png");
                                break
                        }
                    } else if (full.CodigoEtapaIncidente == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.EtapaIncidente.Investigacion) {
                        if (full.CodigoEstadoRecord != Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.EstadoInvestigacion.Aprobado) {
                            switch (full.CodigoProcesoInvestigacion) {
                                case Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.ProcesoInvestigacion.EnFecha:
                                case Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.ProcesoInvestigacion.EnProceso:
                                    resultado = resultado.replace("{1}", full.Informe);
                                    resultado = resultado.replace("{0}", "colorVerde.png");
                                    break;
                                case Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.ProcesoInvestigacion.FueraFecha:
                                    resultado = resultado.replace("{1}", full.Informe);
                                    resultado = resultado.replace("{0}", "colorRojo.png");
                                    break;
                                default:
                                    resultado = resultado.replace("{1}", "");
                                    resultado = resultado.replace("{0}", "ColorAmbar.png");
                                    break
                            }
                        } else {
                            switch (full.CodigoProcesoInvestigacion) {
                                case Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.ProcesoInvestigacion.EnFecha:
                                    resultado = resultado.replace("{1}", full.Informe);
                                    resultado = resultado.replace("{0}", "colorVerde.png");
                                    break;
                                case Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.ProcesoInvestigacion.FueraFecha:
                                    resultado = resultado.replace("{1}", full.Informe);
                                    resultado = resultado.replace("{0}", "colorRojo.png");
                                    break;
                                default:
                                    resultado = resultado.replace("{1}", "");
                                    resultado = resultado.replace("{0}", "ColorAmbar.png");
                                    break
                            }
                        }
                    } else {
                        resultado = resultado.replace("{1}", "");
                        resultado = resultado.replace("{0}", "ColorAmbar.png");
                    }

                    return resultado;
                }
            });
            columns.push({
                data: 'AccionesCorrectivas',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridAccionesCorrectivas,
                width: "15%"
            });
            columns.push({
                'data': '',
                'title': Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridReportes,
                'class': 'controls',
                width: '5%',
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.DescargarIncidente, event: { on: 'click', callBack: base.Event.BtnGridDescargarReporteIncidenteClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.DescargarInvestigacion, event: { on: 'click', callBack: base.Event.BtnGridDescargarReporteInvestigacionClick } },
                ]
            });
            base.Control.GridInformeConsolidado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGridInformeConsolidado',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Actions.ConsultarConsolidaInforme,
                    source: 'Result'
                }
            });
        }
    };    
};