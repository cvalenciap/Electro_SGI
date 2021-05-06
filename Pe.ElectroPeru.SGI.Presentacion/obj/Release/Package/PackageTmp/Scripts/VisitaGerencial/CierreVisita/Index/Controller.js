/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 02112017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CierreVisita.Index');
Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CierreVisita.Index.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'
        Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
        base.Control.BtnBuscar().off('click');
        base.Control.BtnBuscar().on('click', base.Event.BtnBuscarAvanzadoClick);
        base.Control.BtnLimpiar().off('click');
        base.Control.BtnLimpiar().on('click', base.Event.BtnLimpiarClick);

        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaVisitaGerencialDesde(),
            inputTo: base.Control.DtpFechaVisitaGerencialHasta(),
            minDateFrom: new Date(1900, 1, 1)
        });

        base.Function.CrearGrid();
        base.Event.BtnBuscarClick();

    };


    base.Control = {

        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        EsAdministrador: function () { return $('#hdnEsAdministrador'); },

        SlcProyecto: function () { return $('#slcProyecto'); },
        DtpFechaVisitaGerencialDesde: function () { return $('#dtpFechaVisitaGerencialDesde'); },
        DtpFechaVisitaGerencialHasta: function () { return $('#dtpFechaVisitaGerencialHasta'); },

        BtnBuscar: function () { return $('#btnBuscar'); },
        BtnLimpiar: function () { return $('#btnLimpiar'); },

        Validador: null,
        GrdResultado: null,
        btnDescargarExcel: function () { return $('#btnDescargarExcel'); }
    };

    base.Event = {
        BtnBuscarClick: function () {
            'use strict'

            var filtro = {

                CodigoProyecto: base.Control.SlcProyecto().val(),
                FechaVisitaDesdeString: base.Control.DtpFechaVisitaGerencialDesde().val(),
                FechaVisitaHastaString: base.Control.DtpFechaVisitaGerencialHasta().val(),
            };

            base.Control.GrdResultado.Load(filtro);
        },

        BtnBuscarAvanzadoClick: function () {
            'use strict'
            $('#divGrdResult').empty();
            base.Function.CrearGrid();

            var indicadorBusquedaAvanzada = true;

            var filtro = {

                CodigoProyecto: base.Control.SlcProyecto().val(),
                FechaVisitaDesdeString: base.Control.DtpFechaVisitaGerencialDesde().val(),
                FechaVisitaHastaString: base.Control.DtpFechaVisitaGerencialHasta().val(),
                IndicadorBusquedaAvanzada: indicadorBusquedaAvanzada
            };

            base.Control.GrdResultado.Load(filtro);
        },

        BtnBuscarKeyPress: function (evento) {
            var key = Pe.GMD.UI.Web.Components.Util.GetKeyCode(evento);
            var esValido = !(evento && key == 13);
            if (esValido == false) {
                base.Event.BtnBuscarClick();
            }
            return esValido;
        },

        BtnLimpiarClick: function () {
            base.Control.SlcProyecto().val('');
            base.Control.DtpFechaVisitaGerencialDesde().val('');
            base.Control.DtpFechaVisitaGerencialHasta().val('');

        },

        BtnGridCerrarVisitaGerencialClick: function (row, data) {
            'use strict'
            var filtro = {
                CodigoVisitaGerencial: data.CodigoVisitaGerencial
            };
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Actions.FormularioCierreVisita, filtro);
        },

    };

    base.AjaxSuccess = {

    };

    base.Ajax = {

    };

    base.Function = {
        CrearGrid: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroVisitaGerencial',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Resource.GridNroVisita,
                width: "5%"
            });
            columns.push({
                data: 'NombreProyecto',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Resource.GridProyecto,
                width: "5%"
            });
            columns.push({
                data: 'FechaVisitaDesdeString',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Resource.GridVisitaFechaDesde,
                width: "5%"
            });
            columns.push({
                data: 'FechaVisitaDesdeString',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Resource.GridVisitaFechaHasta,
                width: "5%"
            });
            columns.push({
                data: 'NombreCompletoColaboradorGerente',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Resource.GridGerenteProyecto,
                width: "5%"
            });
            columns.push({
                data: 'NombreCompletoColaboradorVisitante',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Resource.GridVisitante,
                width: "15%"
            });
            //columns.push({
            //    data: 'FechaAvisoString',
            //    title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Resource.GridFechaAviso,
            //    width: "15%"
            //});
            columns.push({
                data: 'FechaTopePlanAccionString',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Resource.GridFechaTopePlanAccion,
                width: "15%"
            });
            columns.push({
                data: 'NumeroObservaciones',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Resource.GridNroObservacion,
                width: "15%"
            });
            columns.push({
                data: 'NumeroAcciones',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Resource.GridNroAcciones,
                width: "15%"
            });
            columns.push({
                data: 'DescripcionEstadoIngresoDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Resource.GridEstadoVisita,
                width: "15%"
            });
            columns.push({
                data: 'DescripcionEstadoIngresoPlanAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Resource.GridEstadoIngresoPlanAccion,
                width: "15%"
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
                width: "15%"
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
                width: "12%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Revisar, event: { on: 'click', callBack: base.Event.BtnGridCerrarVisitaGerencialClick } },
                ]
            });

            base.Control.GrdResultado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResult',
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
