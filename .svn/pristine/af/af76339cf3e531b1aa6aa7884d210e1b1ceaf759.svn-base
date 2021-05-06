/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 19102017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.FormularioCierre');
Pe.ElectroPeru.SGI.Presentacion.Inspecciones.BandejaInspeccion.FormularioCierre.Controller = function () {
    var base = this;

    base.Ini = function () {
        base.Control.FormularioModelo = Pe.ElectroPeru.SGI.Presentacion.Inspecciones.FormularioCierre.Models.Formulario;
        base.Function.CrearGridAcciones();
        base.Event.BtnBuscarAccionesClick();        
        base.Control.BtnCerrar().off('click');
        base.Control.BtnCerrar().on('click', base.Event.BtnCerrarInspeccionClick);
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
            if (base.Control.FormularioModelo.BandejaInspeccion.CodigoIntegradorTipoRegistro != null) {
                base.Control.GrdResultadoAcciones.Load({
                    CodigoIntegradorTipoRegistro: base.Control.FormularioModelo.BandejaInspeccion.CodigoIntegradorTipoRegistro
                });
            }
        },
        BtnCerrarInspeccionClick: function () {
            base.Control.Mensaje.Confirmation({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                message: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.FormularioCierre.Resource.ConfirmacionCerrarComiteSSoma,
                indicadorModal: false,
                onAccept: function () {
                    base.Ajax.AjaxCierreInspeccion.data = base.Control.FormularioModelo.BandejaInspeccion;
                    base.Ajax.AjaxCierreInspeccion.submit();
                }
            });
        },
        BtnRegresarBandejaCierreClick: function () {
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Inspecciones.FormularioCierre.Actions.BandejaCierre, {});
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
        AjaxCierreInspeccionSuccess: function (resultado) {            
            if (resultado.Result >= '1') {
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Inspecciones.FormularioCierre.Actions.BandejaInspeccion, {});
            }
            else if (resultado.Result == '-2') {
                base.Control.Mensaje.Warning({
                    message: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.FormularioCierre.Resource.MensajeCierreInspeccion
                });
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
    };

    base.Ajax = {
        AjaxCierreInspeccion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.FormularioCierre.Actions.CierreInspeccion,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxCierreInspeccionSuccess
        }),
    };

    base.Function = {
        CrearGridAcciones: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.FormularioCierre.Resource.GridNumeroAccion,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionCortaHallazgo',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.FormularioCierre.Resource.GridDescripcionCorta,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionNivelRiesgoHallazgo',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.FormularioCierre.Resource.GridDescripcionLarga,
                width: "10%"
            });
            columns.push({
                data: 'NombreColaboradorPlanteaAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.FormularioCierre.Resource.GridPlanteadaPor,
                width: "10%"
            });
            columns.push({
                data: 'FechaAccionPlanteadaString',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.FormularioCierre.Resource.GridFechaPlanteada,
                width: "10%"
            });
            columns.push({
                data: 'NombreColaboradorResponsable',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.FormularioCierre.Resource.GridResponsable,
                width: "10%"
            });
            columns.push({
                data: 'FechaVencimientoString',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.FormularioCierre.Resource.GridFechaVencimiento,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionEstadoAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.FormularioCierre.Resource.GridEstadoDeAccion,
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