/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 02112017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CerradoGerencia.FormularioCerradoGerencia');
Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CerradoGerencia.FormularioCerradoGerencia.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
        'use strict'
        base.Control.FormularioCerradoGerenciaModel = Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CerradoGerencia.FormularioCerradoGerencia.Models.CerradoGerenciaModel;

        /*Tab: Información General*/
        base.Control.BtnCerradoGerencia().off('click');
        base.Control.BtnCerradoGerencia().on('click', base.Event.BtnCerradoGerenciaVisitaGerencialClick);
        base.Control.BtnAnuladoGerencia().off('click');
        base.Control.BtnAnuladoGerencia().on('click', base.Event.BtnAnuladoGerenciaVisitaGerencialClick);
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
        FormularioCerradoGerenciaModel: null,

        /*Tab: Información General*/
        BtnCerradoGerencia: function () { return $('#btnCerradoGerencia'); },
        BtnAnuladoGerencia: function () { return $('#btnAnuladoGerencia'); },
        TxtNumeroVisitaGerencial: function (){ return $('#txtNumeroVisitaGerencial');},
        HdnCodigoEstadoDocumento: function () { return $('#hdnCodigoEstadoDocumento'); },
        BtnRegresarBusquedaNumeroVisita: function () { return $('#btnRegresarBusquedaNumeroVisita'); },
        TxtComentario: function () { return $('#txtComentario'); },
        
        GrdResultado: null,

    };

    base.Event = {
        BtnCancelarClick: function () {
            'use strict'
            var filtro = {
            };
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CerradoGerencia.FormularioCerradoGerencia.Actions.CerradoGerenciaIndex, filtro);
        },

        BtnCerradoGerenciaVisitaGerencialClick: function () {
            'use strict'
            if (base.Control.TxtComentario().val() != null && base.Control.TxtComentario().val() != '') {
                var EstadoVisita = base.Control.HdnCodigoEstadoDocumento().val()
                if (EstadoVisita != Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CerradoGerencia.DatosConstantes.ParametrosEstadoDocumento.CerradoPorGerencia &&
                    EstadoVisita != Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CerradoGerencia.DatosConstantes.ParametrosEstadoDocumento.AnuladoPorGerencia) {
                    base.Control.Mensaje.Confirmation({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                        message: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CerradoGerencia.FormularioCerradoGerencia.Resource.ConfirmacionGuardarCerrar,
                        indicadorModal: false,
                        onAccept: function () {
                            base.Ajax.AjaxCerradoGerenciaVisitaGerencial.data = {
                                NumeroVisitaGerencial: base.Control.TxtNumeroVisitaGerencial().val(),
                                ComentarioEstadoDocumento: base.Control.TxtComentario().val(),
                                CodigoIntegradorTipoRegistro: JSON.parse(base.Control.FormularioCerradoGerenciaModel).VisitaGerencial.CodigoIntegradorTipoRegistro
                            };
                            base.Ajax.AjaxCerradoGerenciaVisitaGerencial.submit();
                        }
                    });
                }
                else {
                    base.Control.Mensaje.Warning({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CerradoGerencia.FormularioCerradoGerencia.Resource.EtiquetaEstadoTotalVisitaCerradoGerencia
                    });
                }
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CerradoGerencia.FormularioCerradoGerencia.Resource.EtiquetaSinComentario
                });
            }
        },

        BtnAnuladoGerenciaVisitaGerencialClick: function () {
            'use strict'
            if (base.Control.TxtComentario().val() != null && base.Control.TxtComentario().val() != '') {
                var EstadoVisita = base.Control.HdnCodigoEstadoDocumento().val()
                if (EstadoVisita != Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CerradoGerencia.DatosConstantes.ParametrosEstadoDocumento.CerradoPorGerencia &&
                    EstadoVisita != Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CerradoGerencia.DatosConstantes.ParametrosEstadoDocumento.AnuladoPorGerencia) {
                    base.Control.Mensaje.Confirmation({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                        message: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CerradoGerencia.FormularioCerradoGerencia.Resource.ConfirmacionGuardarCerrar,
                        indicadorModal: false,
                        onAccept: function () {
                            base.Ajax.AjaxAnuladoGerenciaVisitaGerencial.data = {
                                NumeroVisitaGerencial: base.Control.TxtNumeroVisitaGerencial().val(),
                                ComentarioEstadoDocumento: base.Control.TxtComentario().val(),
                                CodigoIntegradorTipoRegistro: JSON.parse(base.Control.FormularioCerradoGerenciaModel).VisitaGerencial.CodigoIntegradorTipoRegistro
                            };
                            base.Ajax.AjaxAnuladoGerenciaVisitaGerencial.submit();
                        }
                    });
                }
                else {
                    base.Control.Mensaje.Warning({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CerradoGerencia.FormularioCerradoGerencia.Resource.EtiquetaEstadoTotalVisitaAnuladoGerencia
                    });
                }
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CerradoGerencia.FormularioCerradoGerencia.Resource.EtiquetaSinComentario
                });
            }
        },

    };

    base.AjaxSuccess = {
        AjaxCerradoGerenciaVisitaGerencialSuccess: function (resultado) {
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

        AjaxAnuladoGerenciaVisitaGerencialSuccess: function (resultado) {
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
                data: 'NumeroAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CerradoGerencia.FormularioCerradoGerencia.Resource.GridNumeroAccion,
                width: "5%"
            });
            columns.push({
                data: 'NombreCompletoColaboradorPlanteaAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CerradoGerencia.FormularioCerradoGerencia.Resource.GridPlanteaAccion,
                width: "5%"
            });
            columns.push({
                data: 'FechaAccionPlanteadaString',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CerradoGerencia.FormularioCerradoGerencia.Resource.GridFechaPlanteada,
                width: "5%"
            });
            columns.push({
                data: 'NombreCompletoColaboradorEjecutaAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CerradoGerencia.FormularioCerradoGerencia.Resource.GridEjecutaAccion,
                width: "5%"
            });
            columns.push({
                data: 'FechaVencimientoAccionString',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CerradoGerencia.FormularioCerradoGerencia.Resource.GridFechaVencimiento,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionCortaObservacion',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CerradoGerencia.FormularioCerradoGerencia.Resource.GridDescripcionHallazgo,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionCortaAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CerradoGerencia.FormularioCerradoGerencia.Resource.GridDescripcionAccion,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionEstadoAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CerradoGerencia.FormularioCerradoGerencia.Resource.GridDescripcionEstadoAccion,
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
                    url: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CerradoGerencia.FormularioCerradoGerencia.Actions.BuscarCierreBandeja,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        }
    };

    base.Ajax = {

        AjaxCerradoGerenciaVisitaGerencial: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CerradoGerencia.FormularioCerradoGerencia.Actions.CerradoGerenciaVisitaGerencial,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxCerradoGerenciaVisitaGerencialSuccess
        }),

        AjaxAnuladoGerenciaVisitaGerencial: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.CerradoGerencia.FormularioCerradoGerencia.Actions.AnuladoGerenciaVisitaGerencial,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxAnuladoGerenciaVisitaGerencialSuccess
        }),

    };
};
