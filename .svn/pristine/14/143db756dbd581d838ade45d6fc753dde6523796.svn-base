/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 22112017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.ReabrirVisita.FormularioReabrirVisita');
Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.ReabrirVisita.FormularioReabrirVisita.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
        'use strict'
        base.Control.FormularioReabrirVisitaModel = Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.ReabrirVisita.FormularioReabrirVisita.Models.ReabrirVisitaModel;
        /*Tab: Información General*/
        base.Control.BtnReabrirVisita().off('click');
        base.Control.BtnReabrirVisita().on('click', base.Event.BtnReabrirVisitaGerencialClick);
        base.Control.BtnRegresarBusquedaNumeroVisita().off('click');
        base.Control.BtnRegresarBusquedaNumeroVisita().on('click', base.Event.BtnCancelarClick);
        
        $("#divGrdResult").empty();

        base.Function.CrearGrid();
        var filtro = {
            NumeroVisitaGerencial: base.Control.TxtNumeroVisitaGerencial().val()
        };
        base.Control.GrdResultado.Load(filtro);
        
    };

    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        Validator: null,
        FormularioReabrirVisitaModel: null,

        /*Tab: Información General*/
        BtnCancelar: function () { return $('#btnCancelar'); },
        BtnReabrirVisita: function () { return $('#btnReabrirVisita'); },
        TxtNumeroVisitaGerencial: function () { return $('#txtNumeroVisitaGerencial'); },
        BtnRegresarBusquedaNumeroVisita: function () { return $('#btnRegresarBusquedaNumeroVisita'); },
        GrdResultado: null,
        TxtComentario: function () { return $('#txtComentario'); },

    };

    base.Event = {
        BtnCancelarClick: function () {
            'use strict'
            var filtro = {
            };
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.ReabrirVisita.FormularioReabrirVisita.ReabrirVisitaIndex, filtro);
        },

        BtnReabrirVisitaGerencialClick: function () {
            
            'use strict'
            if (base.Control.TxtComentario().val() != null && base.Control.TxtComentario().val() != '') {
                var EstadoVisita = base.Control.FormularioReabrirVisitaModel.VisitaGerencial.CodigoEstadoDocumento
                if (EstadoVisita == Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.ReabrirVisita.DatosConstantes.ParametrosEstadoDocumento.Cerrado) {
                    base.Control.Mensaje.Confirmation({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                        message: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.ReabrirVisita.FormularioReabrirVisita.Resource.ConfirmacionGuardarReabrir,
                        indicadorModal: false,
                        onAccept: function () {
                            base.Ajax.AjaxReabrirVisitaGerencial.data = {
                                NumeroVisitaGerencial: base.Control.TxtNumeroVisitaGerencial().val(),
                                ComentarioEstadoDocumento: base.Control.TxtComentario().val(),
                                CodigoIntegradorTipoRegistro: base.Control.FormularioReabrirVisitaModel.VisitaGerencial.CodigoIntegradorTipoRegistro
                            };
                            base.Ajax.AjaxReabrirVisitaGerencial.submit();
                        }
                    });
                }
                else {
                    base.Control.Mensaje.Warning({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.ReabrirVisita.FormularioReabrirVisita.Resource.EtiquetaEstadoNoCerradoVisita
                    });
                }
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.ReabrirVisita.FormularioReabrirVisita.Resource.EtiquetaSinComentario
                });
            }
        },
              
    };

    base.AjaxSuccess = {
        AjaxReabrirVisitaGerencialSuccess: function (resultado) {
            if (resultado.Result == 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnCancelarClick();
            }
            else if (resultado.Result == 2){
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.ReabrirVisita.FormularioReabrirVisita.Resource.NoTieneAcciones
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
                data: 'FechaAccionPlanteadaString',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.ReabrirVisita.FormularioReabrirVisita.Resource.GridFechaPlanteada,
                width: "5%"
            });
            columns.push({
                data: 'NombreCompletoColaboradorPlanteaAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.ReabrirVisita.FormularioReabrirVisita.Resource.GridPlanteaAccion,
                width: "5%"
            });
            columns.push({
                data: 'FechaVencimientoAccionString',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.ReabrirVisita.FormularioReabrirVisita.Resource.GridFechaVencimiento,
                width: "5%"
            });
            columns.push({
                data: 'NombreCompletoColaboradorEjecutaAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.ReabrirVisita.FormularioReabrirVisita.Resource.GridEjecutaAccion,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionObservacion',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.ReabrirVisita.FormularioReabrirVisita.Resource.GridDescripcionHallazgo,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.ReabrirVisita.FormularioReabrirVisita.Resource.GridDescripcionAccion,
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
                    url: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.ReabrirVisita.FormularioReabrirVisita.Actions.BuscarCierreBandeja,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        }
    };

    base.Ajax = {

        AjaxReabrirVisitaGerencial: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.ReabrirVisita.FormularioReabrirVisita.Actions.ReabrirVisitaGerencial,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxReabrirVisitaGerencialSuccess
        }),

      
    };
};
