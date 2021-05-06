/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 28112017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.BandejaCierreComiteSSoma.Index');
Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.BandejaCierreComiteSSoma.Index.Controller = function () {
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
            inputFrom: base.Control.DtpFechaReunionDesde(),
            inputTo: base.Control.DtpFechaReunionHasta(),
            minDateFrom: new Date(1900, 1, 1)
        });

    };

    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        GrdResultado: null,
        BtnBuscar: function () { return $('#btnBuscar'); },
        BtnLimpiar: function () { return $('#btnLimpiar'); },
        SlcProyecto: function () { return $('#slcProyecto'); },
        SlcPais: function () { return $('#slcPais'); },
        SlcEmpresaPais: function () { return $('#slcEmpresaPais'); },
        SlcTipoComite: function () { return $('#slcTipoComite'); },
        SlcTipoReunion: function () { return $('#slcTipoReunion'); },
        SlcEstadoDocumento: function () { return $('#slcEstadoDocumento'); },
        SlcTipoAlerta: function () { return $('#slcTipoAlerta'); },
        DtpFechaReunionDesde: function () { return $('#dtpFechaReunionDesde'); },
        DtpFechaReunionHasta: function () { return $('#dtpFechaReunionHasta'); },
              
    };
    base.Event = {
        BtnRegresarBandejaComiteSSomaClick: function () {
            var filtro = {
            };
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Actions.FormularioBandejaComiteSSoma, filtro);
        },
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
                CodigoTipoComite: base.Control.SlcTipoComite().val(),
                CodigoTipoReunion: base.Control.SlcTipoReunion().val(),
                CodigoEstadoDocumento: base.Control.SlcEstadoDocumento().val(),
                FechaReunionDesdeString: base.Control.DtpFechaReunionDesde().val(),
                FechaReunionHastaString: base.Control.DtpFechaReunionHasta().val(),
                CodigoTipoAlerta: base.Control.SlcTipoAlerta().val()
            };
            $("#divGrdResultComiteSSoma").empty();
            base.Function.CrearGrid();
            base.Control.GrdResultado.Load(filtro);
        },
        BtnLimpiarClick: function () {
            'use strict'
            base.Control.SlcProyecto().val('');
            base.Control.SlcPais().val('');
            base.Control.SlcEmpresaPais().val('');
            base.Control.SlcTipoComite().val('');
            base.Control.SlcTipoReunion().val('');
            base.Control.SlcEstadoDocumento().val('');
            base.Control.SlcTipoAlerta().val('');
            base.Control.DtpFechaReunionDesde().val('');
            base.Control.DtpFechaReunionHasta().val('');


        },
        BtnGridEditComiteSSomaClick: function (row, data) {
            'use strict'
            var filtro = {
                CodigoComiteSSoma: data.CodigoComiteSSoma,
            };
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Actions.FormularioIngresoComiteSSoma, filtro);
        },
        BtnGridRevisarComiteSSomaClick: function (row, data) {
            'use strict'
            var filtro = {
                CodigoComiteSSoma: data.CodigoComiteSSoma,
                IndicadorEsLectura: true,
            };
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Actions.FormularioCierreComiteSSoma, filtro);
        },
        BtnGridDeleteComiteSSomaClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarComiteSSoma.data = {
                        CodigoComiteSSoma: data.CodigoComiteSSoma,
                    };
                    base.Ajax.AjaxEliminarComiteSSoma.submit();
                }
            });
        },

    };
    base.AjaxSuccess = {
        AjaxEliminarComiteSSomaSuccess: function (resultado) {
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
        AjaxEliminarComiteSSoma: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Actions.EliminarComiteSSoma,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarComiteSSomaSuccess
        }),
    };

    base.Function = {
        CrearGrid: function () {
            var columns = new Array
            columns.push({
                data: 'NumeroComiteSSoma',
                title: Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Resource.GridNumeroComite,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionTipoComite',
                title: Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Resource.GridTipoComite,
                width: "10%"
            });
            columns.push({
                data: 'NombreEmpresaPais',
                title: Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Resource.GridEmpresa,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionComite',
                title: Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Resource.GridNombreComite,
                width: "10%"
            });
            columns.push({
                data: 'NombrePais',
                title: Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Resource.GridPais,
                width: "5%"
            });
            columns.push({
                data: 'NombreProyectoUsuario',
                title: Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Resource.GridProyecto,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionTipoReunion',
                title: Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Resource.GridTipoReunion,
                width: "10%"
            });
            columns.push({
                data: 'FechaReunionString',
                title: Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Resource.GridFechaReunion,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionEstadoIngresoDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Resource.GridEstadoIngresoDocumento,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionEstadoMinimoAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Resource.GridEstadoMinimoAccion,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionEstadoDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Resource.GridEstadoDocumento,
                width: "5%"
            });

            columns.push({
                data: '',
                title: Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Resource.GridAlerta,
                'mRender': function (data, type, full) {
                    var resultado = '<a href="javascript:void(0)" data-toggle="tooltip" title="{1}" disabled><img src="../Theme/images/icon/{0}" /></a>';
                    switch (full.CodigoTipoAlerta) {
                        case Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.DatosConstantes.ParametrosTiposAlertas.RequiereCierre:
                            resultado = resultado.replace("{1}", Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Resource.EtiquetaAlertaRequiereCierre);
                            resultado = resultado.replace("{0}", "colorRojo.png");
                            break
                        case Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.DatosConstantes.ParametrosTiposAlertas.NoRequiereCierre:
                            resultado = resultado.replace("{1}", Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Resource.EtiquetaAlertaNoRequiereCierre);
                            resultado = resultado.replace("{0}", "colorVerde.png");
                            break
                        case Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.DatosConstantes.ParametrosTiposAlertas.AnuladaPorGerencia:
                            resultado = resultado.replace("{1}", Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Resource.EtiquetaAlertaAnuladaPorGerencia);
                            resultado = resultado.replace("{0}", "colorPlomo.png");
                            break
                        case Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.DatosConstantes.ParametrosTiposAlertas.CombinacionNoDefinida:
                            resultado = resultado.replace("{1}", Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Resource.EtiquetaAlertaCombinacionNoDefinida);
                            resultado = resultado.replace("{0}", "ColorAmbar.png");
                            break
                        default:
                            resultado = resultado.replace("{1}", Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Resource.EtiquetaAlertaCombinacionNoDefinida);
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
                width: "5%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.VerSeguimiento, event: { on: 'click', callBack: base.Event.BtnGridRevisarComiteSSomaClick }, toolTip: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridCerrarAccion },
                ]
            });

            base.Control.GrdResultado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultComiteSSoma',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Actions.BuscarBandejaCierreComiteSSoma,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        }
    }
};
