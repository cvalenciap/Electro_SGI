/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 28112017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.CierreComiteSSoma.Index');
Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.CierreComiteSSoma.Index.Controller = function () {
    var base = this;
    base.Ini = function () {
        'use strict'
        Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
        base.Control.FormularioIngresoComiteSSomaModel = Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Models.IngresoComiteSSomaModel;
        base.Event.BtnBuscarClick();
        base.Control.BtnCerrarComiteSSoma().off('click');
        base.Control.BtnCerrarComiteSSoma().on('click', base.Event.BtnCerrarComiteSSomaClick);
        base.Control.BtnRegresarBandejaCierreComiteSSoma().off('click');
        base.Control.BtnRegresarBandejaCierreComiteSSoma().on('click', base.Event.BtnRegresarBandejaCierreComiteSSomaClick);
        base.Control.DlgFormularioSeguimientoAccion = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.FormularioSeguimientoAccion.Controller({
        });
    };
    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        FormularioIngresoComiteSSomaModel: null,
        DlgFormularioSeguimientoAccion:null,
        GrdResultado: null,
        BtnCerrarComiteSSoma: function () { return $('#btnCerrarComiteSSoma'); },
        BtnRegresarBandejaCierreComiteSSoma: function () { return $('#btnRegresarBandejaCierreComiteSSoma'); },
    };
    base.Event = {
        BtnRegresarBandejaCierreComiteSSomaClick: function () {
            var filtro = {
            };
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Actions.FormularioBandejaCierreComiteSSoma, filtro);
        },
        BtnBuscarClick: function () {
            'use strict'
            var filtro = {
                CodigoIntegradorTipoRegistro: base.Control.FormularioIngresoComiteSSomaModel.ComiteSSoma.CodigoIntegradorTipoRegistro
            };
            $("#divGrdResultadoHallazgoAccion").empty();
            base.Function.CrearGrid();
            base.Control.GrdResultado.Load(filtro);
        },
        BtnGridRevisarSeguimientoAccionClick: function (row, data) {
            'use strict'      
            var filtro = {
                NumeroAccion: data.NumeroAccion,
                CodigoRecordAccion: data.CodigoRecordAccion
            };
            base.Control.DlgFormularioSeguimientoAccion.Show(filtro);
        },
        BtnCerrarComiteSSomaClick: function () {
        'use strict'
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Resource.ConfirmacionCerrarComiteSSoma,
                    indicadorModal: false,
                    onAccept: function () {
                        base.Ajax.AjaxCerrarComiteSSoma.data = {
                            CodigoComiteSSoma: base.Control.FormularioIngresoComiteSSomaModel.ComiteSSoma.CodigoComiteSSoma
                        };
                        base.Ajax.AjaxCerrarComiteSSoma.submit();
                    }
                });          
        },   
    };
    base.AjaxSuccess = {
        AjaxCerrarComiteSSomaSuccess: function (resultado) {
            if (resultado.Result == 1) {
                base.Control.BtnCerrarComiteSSoma().remove();
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
    };
    base.Function = {
        CrearGrid: function () {
            var columns = new Array();  
            columns.push({
                data: 'NumeroAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Resource.GridNumeroAccion,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionNivelRiesgoHallazgo',
                title: Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Resource.GridNivelRiesgo,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionCortaHallazgo',
                title: Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Resource.GridDescripcionCortaHallazgo,
                width: "15%"
            });
            columns.push({
                data: 'NombreColaboradorPlanteaAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Resource.GridPlanteadaPor,
                width: "20%"
            });
            columns.push({
                data: 'FechaAccionPlanteadaString',
                title: Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Resource.GridFechaPlanteada,
                width: "5%"
            });
            columns.push({
                data: 'NombreColaboradorResponsable',
                title: Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Resource.GridResponsableEjecucion,
                width: "20%"
            });
            columns.push({
                data: 'FechaVencimientoString',
                title: Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Resource.GridFechaVencimiento,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionCorta',
                title: Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Resource.GridDescripcionCortaAccion,
                width: "15%"
            });
            columns.push({
                data: 'DescripcionEstadoAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Resource.GridEstadoAccion,
                width: "5%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "5%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Revisar, event: { on: 'click', callBack: base.Event.BtnGridRevisarSeguimientoAccionClick }, toolTip: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridVerSeguimiento },
                ]
            });
            base.Control.GrdResultado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoHallazgoAccion',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.BuscarRecordAccionHallazgo,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        },
    };
    base.Ajax = {
        AjaxCerrarComiteSSoma: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.Index.Actions.CerrarComiteSSoma,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxCerrarComiteSSomaSuccess
        }),
    };
};
