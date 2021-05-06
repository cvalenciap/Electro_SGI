/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 27052016
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Index');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Index.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Control.RecordAccionModel = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Models.RecordAccionModel;
        base.Control.BtnBuscar().off('click');
        base.Control.BtnBuscar().on('click', base.Event.BtnBuscarAvanzadoClick);
        base.Control.BtnLimpiar().off('click');
        base.Control.BtnLimpiar().on('click', base.Event.BtnLimpiarClick);
        base.Control.BtnRegresarRegistroRecord().on('click', base.Event.BtnRegresarRegistroRecordClick);
        
        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaVencimientoDesde(),
            minDateFrom: new Date(1900, 1, 1)
        });

        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaVencimientoHasta(),
            minDateFrom: new Date(1900, 1, 1)
        });

        base.Control.BtnBuscarColaboradorResponsable().off('click');
        base.Control.BtnBuscarColaboradorResponsable().on('click', base.Event.BtnBuscarColaboradorResponsable);
        base.Control.DlgFormularioColaborador = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: function (objColaborador) {
                base.Control.HdnCodigoColaboradorResponsable().val(objColaborador[0].CodigoColaborador);
                base.Control.TxtNombreColaboradorResponsable().val(objColaborador[0].Nombres + ' ' + objColaborador[0].ApellidoPaterno);
            }
        });

        base.Control.SlcProyecto().off('change');
        base.Control.SlcProyecto().on('change', base.Event.SlcProjectChange);

        base.Control.btnDescargarExcel().on('click', base.Event.btnDescargarExcelClick);

        //base.Control.SlcDepartamento().off('change');
        //base.Control.SlcDepartamento().on('change', base.Event.SlcDepartamentoChange);
    };

    base.Control = {
        RecordAccionModel: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),

        SlcTipoRecord: function () { return $('#slcTipoRecord'); },
        DtpFechaVencimientoDesde: function () { return $('#dtpFechaVencimientoDesde'); },
        DtpFechaVencimientoHasta: function () { return $('#dtpFechaVencimientoHasta'); },
        SlcProyecto: function () { return $('#slcProyecto'); },
        SlcDepartamento: function () { return $('#slcDepartamento'); },
        SlcArea: function () { return $('#slcArea'); },
        SlcEmpresa: function () { return $('#slcEmpresa'); },
        BtnBuscarColaboradorResponsable: function () { return $('#btnBuscarColaboradorResponsable'); },
        HdnCodigoColaboradorResponsable: function () { return $('#hdnCodigoColaboradorResponsable'); },
        TxtNombreColaboradorResponsable: function () { return $('#txtNombreColaboradorResponsable'); },
        SlcEstadoAccion: function () { return $('#slcEstadoAccion'); },
        SlcAlerta: function () { return $('#slcAlerta'); },
        BtnBuscar: function () { return $('#btnBuscar'); },
        BtnLimpiar: function () { return $('#btnLimpiar'); },
        BtnRegresarRegistroRecord: function () { return $('#btnRegresarRegistroRecord'); },
        GrdResultado: null,
        btnDescargarExcel: function () { return $('#btnDescargarExcel'); },
    };

    base.Event = {
        BtnBuscarClick: function () {
            'use strict'

            var filtro = {
                CodigoTipoRecord: base.Control.SlcTipoRecord().val().trim(),
                FechaVencimientoDesdeString: base.Control.DtpFechaVencimientoDesde().val(),
                FechaVencimientoHastaString: base.Control.DtpFechaVencimientoHasta().val(),
                CodigoProyecto: base.Control.SlcProyecto().val(),
                CodigoDepartamento: base.Control.SlcDepartamento().val(),
                //CodigoArea: base.Control.SlcArea().val(),
                CodigoEmpresa: base.Control.SlcEmpresa().val(),
                CodigoColaboradorResponsable: base.Control.HdnCodigoColaboradorResponsable().val(),
                CodigoEstadoAccion: base.Control.SlcEstadoAccion().val(),
                Semaforo: base.Control.SlcAlerta().val()
            };

            base.Control.GrdResultado.Load(filtro);
        },

        BtnBuscarAvanzadoClick: function () {
            'use strict'
            var indicadorBusquedaAvanzada = true;

            if (base.Control.HdnCodigoColaboradorResponsable().val() != null && base.Control.HdnCodigoColaboradorResponsable().val() != '') {
                indicadorBusquedaAvanzada = false;
            }

            var filtro = {
                CodigoTipoRecord: base.Control.SlcTipoRecord().val().trim(),
                FechaVencimientoDesdeString: base.Control.DtpFechaVencimientoDesde().val(),
                FechaVencimientoHastaString: base.Control.DtpFechaVencimientoHasta().val(),
                CodigoProyecto: base.Control.SlcProyecto().val(),
                CodigoDepartamento: base.Control.SlcDepartamento().val(),
                //CodigoArea: base.Control.SlcArea().val(),
                CodigoEmpresa: base.Control.SlcEmpresa().val(),
                CodigoColaboradorResponsable: base.Control.HdnCodigoColaboradorResponsable().val(),
                CodigoEstadoAccion: base.Control.SlcEstadoAccion().val(),
                Semaforo: base.Control.SlcAlerta().val(),
                IndicadorBusquedaAvanzada: indicadorBusquedaAvanzada
            };
            $('#divGrdResult').empty();
            base.Function.CrearGrid();
            base.Control.GrdResultado.Load(filtro);

        },

        SlcProjectChange: function () {
            if (base.Control.SlcProyecto().val() != '') {
                base.Ajax.AjaxBuscarDepartamento.data = {
                    CodigoProyecto: base.Control.SlcProyecto().val(),
                    EstadoRegistro: null
                };

                base.Ajax.AjaxBuscarDepartamento.submit();
            }
            else {
                base.Control.SlcDepartamento().empty();
                base.Control.SlcArea().empty();
                base.Control.SlcDepartamento().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaTodos, ""));
                base.Control.SlcArea().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaTodos, ""));
            }
        },

        //SlcDepartamentoChange: function () {
        //    if (base.Control.SlcDepartamento().val() != '') {
        //        base.Ajax.AjaxBuscarArea.data = {
        //            CodigoDepartamento: base.Control.SlcDepartamento().val()
        //        };

        //        base.Ajax.AjaxBuscarArea.submit();
        //    }
        //    else {
        //        base.Control.SlcArea().empty();
        //        base.Control.SlcArea().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaTodos, ""));
        //    }
        //},

        BtnBuscarColaboradorResponsable: function () {
            base.Control.DlgFormularioColaborador.Show(false, [], null);
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

        BtnRegresarRegistroRecordClick: function () {

            var filtro = {
            };

            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Actions.RegistroRecord, filtro);
        },


        BtnLimpiarClick: function () {
            base.Control.SlcTipoRecord().val('');
            base.Control.DtpFechaVencimientoDesde().val('');
            base.Control.DtpFechaVencimientoHasta().val('');
            base.Control.SlcProyecto().val('');
            base.Control.SlcDepartamento().val('');
            base.Control.SlcArea().val('');
            base.Control.SlcEmpresa().val('');
            base.Control.HdnCodigoColaboradorResponsable().val('');
            base.Control.TxtNombreColaboradorResponsable().val('');
            base.Control.SlcEstadoAccion().val('');

            base.Event.BtnBuscarClick();
        },

        BtnRevisarSeguimientoAccionClick: function (row, data) {
            'use strict'
            var filtro = {
                CodigoRecord: data.CodigoRecord,
                CodigoColaboradorResponsable: data.CodigoColaboradorResponsable,
                DescripcionTipoRecord: data.DescripcionTipoRecord,
                NumeroRecord: data.NumeroRecord,
                IndicadorCreacion: data.IndicadorCreacion
            };

            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Actions.SeguimientoAccion, filtro);
        },

        BtnGridDeleteClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Confirmation({
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.CentroCosto.Resources.EtiquetaTituloEliminar,
                message: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.CentroCosto.Resources.EtiquetaMensajeEliminarRegistro,
                onAccept: function () {
                    base.Ajax.AjaxEliminar.data = {
                        listaCodigoCentroCosto: [data.CodigoCentroCosto],
                    };
                    base.Ajax.AjaxEliminar.submit();
                }
            });
        },

        AjaxBuscarDepartamentoSuccess: function (resultado) {
            base.Control.SlcDepartamento().empty();
            base.Control.SlcArea().empty();
            base.Control.SlcDepartamento().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaTodos, ""));
            base.Control.SlcArea().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaTodos, ""));
            $.each(resultado.Result, function (index, value) {
                base.Control.SlcDepartamento().append(new Option(value.NombreDepartamento, value.CodigoDepartamento));
            });
        },

        AjaxBuscarAreaSuccess: function (resultado) {
            base.Control.SlcArea().empty();
            base.Control.SlcArea().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaTodos, ""));
            $.each(resultado.Result, function (index, value) {
                base.Control.SlcArea().append(new Option(value.NombreArea, value.CodigoArea));
            });
        },

        BtnGridRevisarValidate: function (data, type, full) {
            if (base.Control.RecordAccionModel.RecordAccion.Lectura || base.Control.RecordAccionModel.RecordAccion.Escritura || base.Control.RecordAccionModel.RecordAccion.ControlTotal) {
                return true;
            }
            
            return false;
        },

        btnDescargarExcelClick: function () {
            try {
                if (base.Control.GrdResultado.core.rows().data().length >= 1) {
                    var filtro = {
                        CodigoTipoRecord: base.Control.SlcTipoRecord().val().trim(),
                        FechaVemcimientoDesdeString: base.Control.DtpFechaVencimientoDesde().val(),
                        FechaVemcimientoHastaString: base.Control.DtpFechaVencimientoHasta().val(),
                        CodigoProyecto: base.Control.SlcProyecto().val(),
                        CodigoDepartamento: base.Control.SlcDepartamento().val(),
                        CodigoEmpresa: base.Control.SlcEmpresa().val(),
                        CodigoColaboradorResponsable: base.Control.HdnCodigoColaboradorResponsable().val(),
                        CodigoEstadoAccion: base.Control.SlcEstadoAccion().val()
                    }
                    Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Actions.DescargarReporteAcciones, filtro);
                }
                else {
                    base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MensajeObservacionAuditoria });
                }
            }
            catch (err) {
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

        AjaxBuscarArea: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.BuscarArea,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarAreaSuccess
        }),
    };

    base.Function = {
        CrearGrid: function () {
            var columns = new Array();
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.RecordAccionModel.ListaTipoRecord },
                data: 'DescripcionTipoRecord',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.GridTipoRegistro,
                width: "15%"
            });

            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.RecordAccionModel.ListaProyecto },
                data: 'NombreProyecto',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridProject,
                width: "15%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'DescripcionCortaHallazgo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.GridDescripcionCortaHallazgo,
                width: "10%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NumeroAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.GridNumeroAccion,
                width: "13%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'DescripcionCorta',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.GridDescripcionCorta,
                width: "10%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NombreColaboradorResponsable',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.GridResponsable,
                width: "20%"
            });            

            columns.push({
                filter: { enabled: true, type: "date" },
                data: 'FechaAccionPlanteadaString',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.GridPlanteadoEn,
                width: "10%"
            });

            columns.push({
                filter: { enabled: true, type: "date" },
                data: 'FechaVencimientoString',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.GridVencimiento,
                width: "10%"
            });            

            columns.push({
                filter: { enabled: true, type: "date" },
                data: 'FechaEstadoAccionString',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.GridFechaEstado,
                width: "10%"
            });

            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.RecordAccionModel.ListaEstadoAccion },
                data: 'DescripcionEstadoAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.GridEstado,
                width: "15%"
            });

            //columns.push({
            //    filter: { enabled: true, type: "textbox" },
            //    data: 'Comentario',
            //    title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.GridComentario,
            //    width: "20%"
            //});

            columns.push({
                data: '',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.GridAlerta,
                'mRender': function (data, type, full) {
                    //var resultado = '<a href="javascript:void(0)" data-toggle="tooltip" title="{1}" disabled><img src="../Theme/images/icon/{0}" /></a>';
                    var Url = Pe.ElectroPeru.SGI.Presentacion.Core.Constante.DatosConstantes.ConfiguracionUrlDespliegue.DescripcionUrlDespligue;
                    var resultado = '<a href="javascript:void(0)" data-toggle="tooltip" title="{1}" disabled><img src="' + Url + '/Theme/images/icon/{0}" /></a>';
                    switch (full.Semaforo) {
                        case Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.DatosConstantes.ParametrosColorSemaforo.Verde:
                            resultado = resultado.replace("{1}", Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.EtiquetaAlertaVerde);
                            resultado = resultado.replace("{0}", "colorVerde.png");
                            break
                        case Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.DatosConstantes.ParametrosColorSemaforo.Rojo:
                            resultado = resultado.replace("{1}", Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.EtiquetaAlertaRojo);
                            resultado = resultado.replace("{0}", "colorRojo.png");
                            break
                        case Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.DatosConstantes.ParametrosColorSemaforo.Plomo:
                            resultado = resultado.replace("{1}", Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.EtiquetaAlertaPlomo);
                            resultado = resultado.replace("{0}", "colorPlomo.png");
                            break;
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
                    { type: Pe.GMD.UI.Web.Components.GridAction.Revisar, event: { on: 'click', callBack: base.Event.BtnRevisarSeguimientoAccionClick } }
                ]
            });

            base.Control.GrdResultado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResult',
                columns: columns,
                filterColumn: true,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Actions.BuscarRecordAccion,
                    source: 'Result'
                }
            });
        }
    };
};