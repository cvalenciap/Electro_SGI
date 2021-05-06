/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 14112017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoAccion.FormularioBandejaAccion');
Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoAccion.FormularioBandejaAccion.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'
        Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
        base.Control.FormularioBandejaAccionModel = Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoVisita.FormularioBandejaAccion.Models.IngresoVisitaModel;
        base.Event.BtnBuscarClick();
        base.Control.BtnRegresarIngresoAccionIndex().off('click');
        base.Control.BtnRegresarIngresoAccionIndex().on('click', base.Event.BtnRegresarIngresoAccionIndexClick);
        base.Control.BtnAgregarIngresoAccion().off('click');
        base.Control.BtnAgregarIngresoAccion().on('click', base.Event.BtnAgregarIngresoAccionClick);

        base.Control.DlgFormularioIngresoAccion = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordAccionGenerico.Controller({
            GrabarRecordAccionSuccess: base.Event.BtnBuscarClick
        });
    };
    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        GrdResultado: null,
        DlgFormularioIngresoAccion: null,
        FormularioBandejaAccionModel: null,
        CodigoIntegradorTipoRegistro: null,
        BtnBuscar: function () { return $('#btnBuscar'); },
        BtnLimpiar: function () { return $('#btnLimpiar'); },
        TxtNumeroRegistroVisitaGerencial: function () { return $('#txtNumeroRegistroVisitaGerencial'); },
        BtnRegresarIngresoAccionIndex: function () { return $('#btnRegresarIngresoAccionIndex'); },
        BtnAgregarIngresoAccion: function () { return $('#btnAgregarIngresoAccion'); },

    };
    base.Event = {
        BtnRegresarIngresoAccionIndexClick: function () {
            window.history.go(-1);
        },
        BtnAgregarIngresoAccionClick: function () {            
            var filtro = {
                TituloFormulario: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoAccion.FormularioBandejaAccion.Resource.EtiquetaFormularioIngresoAcciones,
                CodigoIntegradorTipoRegistro: base.Control.FormularioBandejaAccionModel.VisitaGerencial.CodigoIntegradorTipoRegistro,
                CodigoTipoRegistroParametro: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.VisitaGerencial,
                CodigoEstadoAccion: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Abierto,
                NumeroRecord: base.Control.FormularioBandejaAccionModel.VisitaGerencial.NumeroVisitaGerencial,
                CodigoTipoOcurrenciaParametro: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoAccion.DatosConstantes.TipoOcurrenciaAccion.Hallazgo,
                CodigoTipoOcurrenciaEntidad: base.Control.FormularioBandejaAccionModel.Hallazgo.CodigoHallazgo,
            };
            base.Control.DlgFormularioIngresoAccion.Show(filtro);
        },
        BtnBuscarClick: function () {
            'use strict'
            if (base.Control.FormularioBandejaAccionModel.VisitaGerencial.CodigoIntegradorTipoRegistro != null) {
                var filtro = {
                    CodigoIntegradorTipoRegistro: base.Control.FormularioBandejaAccionModel.VisitaGerencial.CodigoIntegradorTipoRegistro,
                    CodigoTipoOcurrenciaEntidad: base.Control.FormularioBandejaAccionModel.Hallazgo.CodigoHallazgo
                };
                $("#divGrdResultAccion").empty();
                base.Function.CrearGrid();
                base.Control.GrdResultado.Load(filtro);
            }
        },
        BtnGridEditAccionesClick: function (row, data) {
            'use strict'
            var filtro = {
                CodigoRecordAccion: data.CodigoRecordAccion,
                CodigoIntegradorTipoRegistro: data.CodigoIntegradorTipoRegistro,
                CodigoTipoOcurrenciaParametro: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoAccion.DatosConstantes.TipoOcurrenciaAccion.Hallazgo,
                CodigoTipoOcurrenciaEntidad: data.CodigoTipoOcurrenciaEntidad,
                CodigoEstadoAccion: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Abierto,
                CodigoTipoRegistroParametro: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.VisitaGerencial,
                NumeroRecord: base.Control.TxtNumeroRegistroVisitaGerencial().val()
            };
            base.Control.DlgFormularioIngresoAccion.Show(filtro);
        },
        BtnGridRevisarAccionesClick: function (row, data) {
            'use strict'
            var filtro = {
                CodigoRecordAccion: data.CodigoRecordAccion,
                CodigoIntegradorTipoRegistro: data.CodigoIntegradorTipoRegistro,
                CodigoTipoOcurrenciaEntidad: data.CodigoTipoOcurrenciaEntidad,
                CodigoEstadoAccion: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Abierto,
                CodigoTipoRegistroParametro: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.VisitaGerencial,
                NumeroRecord: base.Control.FormularioBandejaAccionModel.VisitaGerencial.NumeroVisitaGerencial,
                IndicadorLectura: true,
            };
            base.Control.DlgFormularioIngresoAccion.Show(filtro);
        },
     
        BtnGridDeleteAccionesClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarRecordAccion.data = {
                        CodigoRecordAccion: data.CodigoRecordAccion,
                    };
                    base.Ajax.AjaxEliminarRecordAccion.submit();
                }
            });
        },
    };
    base.AjaxSuccess = {
        AjaxEliminarRecordAccionSuccess: function (resultado) {
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
        AjaxEliminarRecordAccion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.EliminarRecordAccion,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarRecordAccionSuccess
        }),
        
    };
    base.Function = {
        CrearGrid: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoAccion.FormularioBandejaAccion.Resource.GridNroAccion,
                width: "8%"
            });
            columns.push({
                data: 'NombreColaboradorPlanteaAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoAccion.FormularioBandejaAccion.Resource.GridPlanteaAccion,
                width: "20%"
            });
            columns.push({
                data: 'FechaAccionPlanteadaString',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoAccion.FormularioBandejaAccion.Resource.GridFechaPlanteada,
                width: "5%"
            });
            columns.push({
                data: 'NombreColaboradorResponsable',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoAccion.FormularioBandejaAccion.Resource.GridResponsableEjecucion,
                width: "20%"
            });
            columns.push({
                data: 'FechaVencimientoString',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoAccion.FormularioBandejaAccion.Resource.EtiquetaFechaVencimiento,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionCorta',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoAccion.FormularioBandejaAccion.Resource.GridDescripcionCortaAccion,
                width: "15%"
            });
            columns.push({
                data: 'DescripcionEstadoAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoAccion.FormularioBandejaAccion.Resource.GridEstado,
                width: "5%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "5%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Revisar, event: { on: 'click', callBack: base.Event.BtnGridRevisarAccionesClick }, toolTip: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridVerAccion },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditAccionesClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteAccionesClick } }
                ]
            });
            base.Control.GrdResultado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultAccion',
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

    }
};
