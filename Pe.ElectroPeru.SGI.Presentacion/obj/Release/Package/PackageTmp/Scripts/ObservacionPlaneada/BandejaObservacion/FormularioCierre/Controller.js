/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 19102017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.BandejaObservacion.FormularioCierre');
Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.BandejaObservacion.FormularioCierre.Controller = function () {
    var base = this;

    base.Ini = function () {
        base.Control.FormularioModelo = Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.FormularioCierre.Models.Formulario;
        base.Function.CrearGridAcciones();
        base.Event.BtnBuscarAccionesClick();

        base.Control.BtnCerrar().off('click');
        base.Control.BtnCerrar().on('click', base.Event.BtnCerrarObservacionPlaneada);
        base.Control.BtnRegresarBandejaCierre().off('click');
        base.Control.BtnRegresarBandejaCierre().on('click', base.Event.BtnRegresarBandejaCierreClick);

        base.Control.DlgFormularioSeguimientoAccion = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.FormularioSeguimientoAccion.Controller({
        });
    };

    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        BtnCerrar: function () { return $('#btnCerrar'); },
        BtnRegresarBandejaCierre: function () { return $('#btnRegresarBandejaCierre'); },
    };

    base.Event = {
        BtnBuscarAccionesClick: function () {
            if (base.Control.FormularioModelo.BandejaObservacion.CodigoIntegradorTipoRegistro != null) {
                base.Control.GrdResultadoAcciones.Load({
                    CodigoIntegradorTipoRegistro: base.Control.FormularioModelo.BandejaObservacion.CodigoIntegradorTipoRegistro
                });
            }
        },
        BtnCerrarObservacionPlaneada: function () {
            base.Control.Mensaje.Confirmation({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                message: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.FormularioCierre.Resource.ConfirmacionCerrarComiteSSoma,
                indicadorModal: false,
                onAccept: function () {
                    base.Ajax.AjaxCierreObservacionPlaneada.data = base.Control.FormularioModelo.BandejaObservacion;
                    base.Ajax.AjaxCierreObservacionPlaneada.submit();
                }
            });
        },
        BtnRegresarBandejaCierreClick: function () {
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.FormularioCierre.Actions.BandejaCierre, {});
        },
        BtnGridRevisarSeguimientoAccionClick: function (row, data) {
            var filtro = {
                NumeroAccion: data.NumeroAccion,
                CodigoRecordAccion: data.CodigoRecordAccion
            };
            base.Control.DlgFormularioSeguimientoAccion.Show(filtro);
        },
    };

    base.AjaxSuccess = {
        AjaxCierreObservacionPlaneadaSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.FormularioCierre.Actions.BandejaObservacion, {});
            }
            else if (resultado.Result == '-2') {
                base.Control.Mensaje.Warning({
                    message: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.FormularioCierre.Resource.MensajeCierreObservacionPlaneada
                });
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
    };

    base.Ajax = {
        AjaxCierreObservacionPlaneada: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.FormularioCierre.Actions.CierreObservacionPlaneada,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxCierreObservacionPlaneadaSuccess
        }),
    };

    base.Function = {
        CrearGridAcciones: function () {
            var columns = new Array();
            columns.push({
                data: 'DescripcionCortaHallazgo',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.FormularioCierre.Resource.GridDescripcionCorta,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionNivelRiesgoHallazgo',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.FormularioCierre.Resource.GridNivelRiesgo,
                width: "10%"
            });
            columns.push({
                data: 'NumeroAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.FormularioCierre.Resource.GridNumeroAccion,
                width: "10%"
            });
            columns.push({
                data: 'NombreColaboradorPlanteaAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.FormularioCierre.Resource.GridPlanteadaPor,
                width: "10%"
            });
            columns.push({
                data: 'FechaAccionPlanteadaString',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.FormularioCierre.Resource.GridFechaPlanteada,
                width: "10%"
            });
            columns.push({
                data: 'NombreColaboradorResponsable',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.FormularioCierre.Resource.GridResponsable,
                width: "10%"
            });
            columns.push({
                data: 'FechaVencimientoString',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.FormularioCierre.Resource.GridFechaVencimiento,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionCorta',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.FormularioCierre.Resource.GridDescripcionCortaAccion,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionEstadoAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.FormularioCierre.Resource.GridEstadoDeAccion,
                width: "10%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "5%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Revisar, event: { on: 'click', callBack: base.Event.BtnGridRevisarSeguimientoAccionClick } },
                ]
            });
            base.Control.GrdResultadoAcciones = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultAcciones',
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
};