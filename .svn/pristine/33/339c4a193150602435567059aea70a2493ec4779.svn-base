/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 27052016
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Index');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Index.Controller = function () {
    var base = this;
    base.Ini = function () {
        'use strict'
        base.Control.RecordIndexModel = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Models.Index;
        base.Control.BtnBuscar().off('click');
        base.Control.BtnBuscar().on('click', base.Event.BtnBuscarClick);

        base.Control.BtnLimpiar().off('click');
        base.Control.BtnLimpiar().on('click', base.Event.BtnLimpiarClick);

        base.Control.BtnAgregarRecord().off('click');
        base.Control.BtnAgregarRecord().on('click', base.Event.BtnAgregarRecordClick);

        base.Control.SlcProyecto().off('change');
        base.Control.SlcProyecto().on('change', base.Event.SlcProyectoChange);

        base.Control.btnDescargarExcel().on('click', base.Event.btnDescargarExcelClick);

        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaRecordDesde(),
            inputTo: base.Control.DtpFechaRecordHasta(),
            minDateFrom: new Date(1900, 1, 1)
        });
        base.Function.CrearGrid();
        base.Event.BtnBuscarClick();
        base.Control.DlgFormularioRecordSustento = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordSustento.Controller();
    };

    base.Control = {
        RecordIndexModel: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        CodigoRecordAnexo: null,
        NumeroRecord: null,
        //SlcTipoRecord: function () { return $('#slcTipoRecord'); },
        SlcProyecto: function () { return $('#slcProyecto'); },
        //SlcDepartamento: function () { return $('#slcDepartamento'); },
        //SlcEmpresa: function () { return $('#slcEmpresa'); },        
        SlcProceso: function () { return $('#slcProceso'); },
        SlcAlerta: function () { return $('#slcAlerta'); },
        DtpFechaRecordDesde: function () { return $('#dtpFechaRecordDesde'); },
        DtpFechaRecordHasta: function () { return $('#dtpFechaRecordHasta'); },
        BtnBuscar: function () { return $('#btnBuscar'); },
        BtnLimpiar: function () { return $('#btnLimpiar'); },
        BtnAgregarRecord: function () { return $('#btnAgregarRecord'); },
        GrdResultado: null,
        DlgFormularioRecordSustento: null,
        btnDescargarExcel: function () { return $('#btnDescargarExcel'); },
    };

    base.Event = {
        SlcProyectoChange: function () {
            if (base.Control.SlcProyecto().val() != '') {
                base.Ajax.AjaxBuscarDepartamento.data = {
                    CodigoProyecto: base.Control.SlcProyecto().val(),
                    EstadoRegistro: null
                };
                base.Ajax.AjaxBuscarDepartamento.submit();
            }
        },
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

        AjaxEliminarRecordSuccess: function (data) {
            'use strict'
            if (data.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito });//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaEliminacionExitosa });
                base.Event.BtnBuscarClick();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro })//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaErrorRegistro });
            }
        },

        BtnBuscarClick: function () {
            'use strict'
            //$('#divGrdResultRecord').empty();
            //base.Function.CrearGrid();

            var filtro = {
                //CodigoTipoRecord: base.Control.SlcTipoRecord().val().trim(),
                CodigoProyecto: base.Control.SlcProyecto().val(),
                //CodigoDepartamento: base.Control.SlcDepartamento().val(),
                //CodigoEmpresa: base.Control.SlcEmpresa().val(),
                CodigoProcesoAnuncio: base.Control.SlcProceso().val(),
                CodigoAlertaAnuncio: base.Control.SlcAlerta().val(),
                FechaRecordDesdeString: base.Control.DtpFechaRecordDesde().val(),
                FechaRecordHastaString: base.Control.DtpFechaRecordHasta().val()
            };

            base.Control.GrdResultado.Load(filtro);
        },

        BtnAgregarRecordClick: function () {
            var filtro = {
                CodigoTipoRecord: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.TipoRecord.Incidente
            };

            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Actions.RegistroRecord, filtro);
        },


        BtnLimpiarClick: function () {
            //base.Control.SlcTipoRecord().val("");
            base.Control.SlcProyecto().val("");
            //base.Control.SlcEmpresa().val("");
            base.Control.DtpFechaRecordDesde().val("");
            base.Control.DtpFechaRecordHasta().val("");
            //base.Control.SlcDepartamento().empty();
            //base.Control.SlcDepartamento().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaTodos, ""));
            //base.Control.SlcDepartamento().val("");
            base.Control.SlcProceso().val("");
            base.Control.SlcAlerta().val("");
            base.Event.BtnBuscarClick();
        },

        BtnGridEditClick: function (row, data) {
            'use strict'
            var filtro = {
                CodigoRecord: data.CodigoRecord,
                CodigoTipoRecord: data.CodigoTipoRecord,
                DescripcionTipoRecord: data.DescripcionTipoRecord,
                NumeroRecord: data.NumeroRecord,
                CodigoRecordSustento: data.CodigoRecordSustento,
                DescripcionRecordSustento: data.DescripcionRecordSustento
            };
            /*if (!base.Control.RecordIndexModel.Record.EsAdministrador && data.IndicadorEnvioCorreo)
            {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Mensaje.MensajeValidacionEdicionIncidente,
                    callbackClose: function () {
                        Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Actions.RegistroRecord, filtro);
                    }
                });
            }*/
            //if (data.CodigoTipoRecord != Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.TipoRecord.Incidente) {
            //    Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Actions.RegistroRecord, filtro);
            //}

            //if (data.CodigoTipoRecord == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.TipoRecord.Incidente && !data.IndicadorEnvioCorreo) {
            //    Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Actions.RegistroRecord, filtro);
            //}

            if (data.CodigoEstadoRecord == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.EstadoRecord.Generado) {
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Actions.RegistroRecord, filtro);
            } else {
                if (!base.Control.RecordIndexModel.Record.EsAdministrador) {
                    base.Control.Mensaje.Warning({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Mensaje.MensajeValidacionIncidenteEnviado,
                    });
                } else {
                    Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Actions.RegistroRecord, filtro);
                }
            }
        },

        BtnGridDeleteClick: function (row, data) {
            'use strict'
            if (data.CodigoEstadoRecord == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.EstadoRecord.Generado) {
                base.Control.Mensaje.Delete({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                    onAccept: function () {
                        base.Ajax.AjaxEliminarRecord.data = {
                            CodigoRecord: data.CodigoRecord,
                        };

                        base.Ajax.AjaxEliminarRecord.submit();
                    }
                });
            } else {
                base.Control.Mensaje.Warning({
                    message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Mensaje.MensajeValidacionEliminacionIncidente
                });
            }
        },

        BtnGridDescargarReporteRecordValidate: function (data, type, full) {
            if (full.CodigoTipoRecord != Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.TipoRecord.Incidente) {
                return true;
            }
            else {
                return false;
            }
        },

        BtnGridDescargarReporteRecordClick: function (row, data) {
            'use strict';
            var filtro = {
                CodigoRecord: data.CodigoRecord,
                CodigoTipoRecord: data.CodigoTipoRecord,
                NumeroRecord: data.NumeroRecord
            };

            if (data.CodigoTipoRecord != Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.TipoRecord.Incidente) {
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Actions.DescargarReporteRecord, filtro);
            } else {
                base.Control.NumeroRecord = data.NumeroRecord;
                base.Ajax.AjaxValidarDescargarReporteIncidente.data = {
                    CodigoRecord: data.CodigoRecord,
                    CodigoTipoRecord: data.CodigoTipoRecord,
                    NumeroRecord: data.NumeroRecord
                };
                base.Ajax.AjaxValidarDescargarReporteIncidente.submit();
                //Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Actions.DescargarReporteIncidente, filtro);
            }
        },

        AjaxBuscarDepartamentoSuccess: function (resultado) {
            $.each(resultado.Result)
            base.Control.Slcde().empty();
            base.Control.SlcProyectoArea().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaTodos, ""));
            $.each(resultado.Result, function (index, value) {
                base.Control.SlcProyectoArea().append(new Option(value.Text, value.Value));
            });
        },

        BtnGridEditValidate: function (data, type, full) {
            return true;
        },

        BtnGridDeleteValidate: function (data, type, full) {
            if (base.Control.RecordIndexModel.Record.ControlTotal)
                return true;
            else
                return false;
        },

        AjaxBuscarDepartamentoSuccess: function (resultado) {
            base.Control.SlcDepartamento().empty();
            base.Control.SlcDepartamento().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaTodos, ""));
            $.each(resultado.Result, function (index, value) {
                base.Control.SlcDepartamento().append(new Option(value.NombreDepartamento, value.CodigoDepartamento));
            });
        },

        AjaxValidarDescargarReporteIncidenteSuccess: function (resultado) {
            if (resultado.Result.CodigoRecordAnexo == null) {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Mensaje.MensajeDescargaReporteIncidente
                });
            } else {
                var filtro = {
                    CodigoRecordAnexo: resultado.Result.CodigoRecordAnexo,
                    NumeroRecord: base.Control.NumeroRecord
                };

                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Actions.DescargarReporteIncidente, filtro);
            }
        },

        btnDescargarExcelClick: function () {    
                if (base.Control.GrdResultado.core.rows().data().length >= 1) {
                    var filtro = {
                        //CodigoTipoRecord: base.Control.SlcTipoRecord().val().trim(),
                        CodigoProyecto: base.Control.SlcProyecto().val(),
                        //CodigoDepartamento: base.Control.SlcDepartamento().val(),
                        //CodigoEmpresa: base.Control.SlcEmpresa().val(),
                        CodigoProcesoAnuncio: base.Control.SlcProceso().val(),
                        CodigoAlertaAnuncio: base.Control.SlcAlerta().val(),
                        FechaRecordDesdeString: base.Control.DtpFechaRecordDesde().val(),
                        FechaRecordHastaString: base.Control.DtpFechaRecordHasta().val()
                    }

                    Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Actions.DescargarReporteRegistros, filtro);
                } else {
                    base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MensajeObservacionAuditoria });
                }
                     
        },
    };

    base.Ajax = {
        AjaxBuscarDepartamento: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.BuscarDepartamento,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarDepartamentoSuccess
        }),

        AjaxEliminarRecord: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Actions.EliminarRecord,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarRecordSuccess
        }),

        AjaxValidarDescargarReporteIncidente: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Actions.ValidarDescargarReporteIncidente,
            autoSubmit: false,
            onSuccess: base.Event.AjaxValidarDescargarReporteIncidenteSuccess
        }),
    };

    base.Function = {
        CrearGrid: function () {
            var columns = new Array();
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.RecordIndexModel.ListaProyecto },
                data: 'NombreProyecto',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridProject,
                width: "30%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NumeroRecord',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridNumeroRecord,
                width: "15%"
            });

            //columns.push({
            //    filter: { enabled: true, type: "select", data: base.Control.RecordIndexModel.ListaTipoRecord },
            //    data: 'DescripcionTipoRecord',
            //    title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridRecordType,
            //    width: "10%"
            //});

            columns.push({
                filter: { enabled: true, type: "date" },
                data: 'FechaRecordString',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridFechaIncidente,
                width: "10%"
            });

            //columns.push({
            //    filter: { enabled: true, type: "date" },
            //    data: 'FechaCreacionString',
            //    title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridDateCreation,
            //    width: "10%"
            //});

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'Titulo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridTituloIncidente,
                width: "20%"
            });

            columns.push({
                filter: {
                    enabled: true, type: "select", data: base.Control.RecordIndexModel.ListaConsecuenciaIncidente
                },
                data: 'DescripcionConsecuenciaIncidente',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridActualConsecuencia,
                width: "20%"
            });

            columns.push({
                filter: {
                    enabled: true, type: "select", data: base.Control.RecordIndexModel.ListaPotencialIncidente
                },
                data: 'DescripcionPotencialIncidente',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridPotencialConsecuencia,
                width: "20%"
            });

            columns.push({
                filter: {
                    enabled: true, type: "select", data: base.Control.RecordIndexModel.ListaHpi
                },
                data: 'DescripcionHpi',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridHPI,
                width: "20%"
            });

            columns.push({
                filter: {
                    enabled: true, type: "select", data: base.Control.RecordIndexModel.ListaCategoriaIncidente
                },
                data: 'DescripcionCategoriaIncidente',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridClasificacionPrincipal,
                width: "20%"
            });

            //columns.push({
            //    filter: { enabled: true, type: "select", data: base.Control.RecordIndexModel.ListaDepartamento },
            //    data: 'NombreDepartamento',
            //    title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridDepartamento,
            //    width: "30%"
            //});

            //columns.push({
            //    filter: { enabled: true, type: "select", data: base.Control.RecordIndexModel.ListaEmpresa },
            //    data: 'NombreEmpresa',
            //    title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridCompany,
            //    width: "30%"
            //});

            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.RecordIndexModel.ListaEstadoRecord },
                data: 'DescripcionEstadoRecord',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridEstadoAnuncio,
                width: "30%"
            });

            columns.push({
                filter: {
                    enabled: false
                },
                data: 'DescripcionProcesoAnuncio',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridProcesoAnuncio,
                width: "10%"
            });

            //columns.push({
            //    filter: { enabled: true, type: "date" },
            //    data: 'FechaEstadoRecordString',
            //    title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridStateDate,
            //    width: "10%"
            //});

            columns.push({
                data: '',
                width: "3%",
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridAlertaAnuncio,
                'mRender': function (data, type, full) {
                    var url = Pe.ElectroPeru.SGI.Presentacion.Core.Constante.DatosConstantes.ConfiguracionUrlDespliegue.DescripcionUrlDespligue;
                    var resultado = '<a href="javascript:void(0)" data-toggle="tooltip" title="{1}" disabled><img src="' + url + '/Theme/images/icon/{0}" /></a>';
                    switch (full.CodigoEstadoRecord) {
                        case Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.EstadoRecord.Generado:
                        case Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.EstadoRecord.Enviado:
                        case Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.EstadoRecord.Reenviado:
                            if (full.CodigoProcesoAnuncio == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.ProcesoAnuncio.EnFecha) {
                                resultado = resultado.replace("{0}", "colorVerde.png");
                            } else {
                                resultado = resultado.replace("{0}", "colorRojo.png");
                            }

                            resultado = resultado.replace("{1}", full.DescripcionAlertaAnuncio);
                            break;
                        default:
                            resultado = resultado.replace("{1}", "");
                            resultado = resultado.replace("{0}", "colorAmbar.png");
                            break
                    }

                    return resultado;
                }
            });

            columns.push({
                filter: { enabled: false, type: "textbox" },
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete/*, validateRender: base.Event.BtnGridDeleteValidate*/, event: { on: 'click', callBack: base.Event.BtnGridDeleteClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.ReporteRecord, /*validateRender: base.Event.BtnGridDescargarReporteRecordValidate,*/ event: { on: 'click', callBack: base.Event.BtnGridDescargarReporteRecordClick } }
                ]
            });

            base.Control.GrdResultado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultRecord',
                columns: columns,
                filterColumn: true,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Actions.BuscarRecords,
                    source: 'Result'
                }
            });
        }
    };
};