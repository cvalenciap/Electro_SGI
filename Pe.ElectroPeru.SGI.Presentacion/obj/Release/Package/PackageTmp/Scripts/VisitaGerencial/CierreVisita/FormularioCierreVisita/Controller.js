/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 02112017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CierreVisita.FormularioCierreVisita');
Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CierreVisita.FormularioCierreVisita.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        'use strict'
        Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
        base.Control.FormularioCierreVisitaModel = Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CierreVisita.FormularioCierreVisita.Models.CierreVisitaModel;
        /*Tab: Información General*/
        base.Control.BtnCancelar().off('click');
        base.Control.BtnCancelar().on('click', base.Event.BtnCancelarClick);
        base.Control.BtnCerrar().off('click');
        base.Control.BtnCerrar().on('click', base.Event.BtnCerrarVisitaGerencialClick);

        $("#divGrdResult").empty();

        base.Function.CrearGrid();
        var filtro = {
            CodigoVisitaGerencial: base.Control.FormularioCierreVisitaModel.VisitaGerencial.CodigoVisitaGerencial,
        };
        base.Control.GrdResultado.Load(filtro);
               

    };

    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        Validator: null,
        FormularioCierreVisitaModel: null,

        /*Tab: Información General*/

        BtnCancelar: function () { return $('#btnCancelar'); },
        BtnCerrar: function () { return $('#btnCerrar'); },

        GrdResultado: null,

        /*Tab: Anexos*/

        /*Tab: Fotos*/

        /*Tab: Acciones*/

    };

    base.Event = {
        BtnCancelarClick: function () {
            'use strict'
            var filtro = {
            };
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CierreVisita.FormularioCierreVisita.CierreVisitaIndex, filtro);
        },

        BtnCerrarVisitaGerencialClick: function () {
            'use strict'
            var EstadoVisita = base.Control.FormularioCierreVisitaModel.VisitaGerencial.CodigoEstadoDocumento
         
            base.Control.Mensaje.Confirmation({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                message: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CierreVisita.FormularioCierreVisita.Resource.ConfirmacionGuardarCerrar,
                indicadorModal: false,
                onAccept: function () {
                    base.Ajax.AjaxCerrarVisitaGerencial.data = {
                        CodigoVisitaGerencial: base.Control.FormularioCierreVisitaModel.VisitaGerencial.CodigoVisitaGerencial,
                    };
                    base.Ajax.AjaxCerrarVisitaGerencial.submit();
                }
            });
       
        },
    };

    base.AjaxSuccess = {
        AjaxCerrarVisitaGerencialSuccess: function (resultado) {
            if (resultado.Result == 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnCancelarClick();
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
                data: 'FechaAccionPlanteadaString',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CierreVisita.FormularioCierreVisita.Resource.GridFechaPlanteada,
                width: "5%"
            });
            columns.push({
                data: 'NombreCompletoColaboradorPlanteaAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CierreVisita.FormularioCierreVisita.Resource.GridPlanteaAccion,
                width: "5%"
            });
            columns.push({
                data: 'FechaVencimientoAccionString',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CierreVisita.FormularioCierreVisita.Resource.GridFechaVencimiento,
                width: "5%"
            });
            columns.push({
                data: 'NombreCompletoColaboradorEjecutaAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CierreVisita.FormularioCierreVisita.Resource.GridEjecutaAccion,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionObservacion',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CierreVisita.FormularioCierreVisita.Resource.GridDescripcionHallazgo,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CierreVisita.FormularioCierreVisita.Resource.GridDescripcionAccion,
                width: "5%"
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
                    url: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CierreVisita.FormularioCierreVisita.Actions.BuscarCierreBandeja,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        }
    };

    base.Ajax = {

        AjaxCerrarVisitaGerencial: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CierreVisita.FormularioCierreVisita.Actions.CerrarVisitaGerencial,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxCerrarVisitaGerencialSuccess
        }),
    };
};
