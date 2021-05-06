/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 30112017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocAnuladoGerencia.FormularioDocAnuladoGerencia');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocAnuladoGerencia.FormularioDocAnuladoGerencia.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'
        Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
        base.Control.FormularioDocAnuladoGerenciaModel = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocAnuladoGerencia.FormularioDocAnuladoGerencia.Models.DocAnuladoGerenciaModel;
        /*Tab: Información General*/
        base.Control.BtnCancelar().off('click');
        base.Control.BtnCancelar().on('click', base.Event.BtnCancelarClick);
        base.Control.BtnAnuladoGerencia().off('click');
        base.Control.BtnAnuladoGerencia().on('click', base.Event.BtnAnuladoGerenciaSeguimientoClick);

        $("#divGrdResult").empty();

        base.Function.CrearGrid();
        
        var filtro = {
            NumeroDocumento: JSON.parse(base.Control.FormularioDocAnuladoGerenciaModel).Seguimiento.NumeroDocumento,
        };
        base.Control.GrdResultado.Load(filtro);

    };

    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        Validator: null,
        FormularioDocAnuladoGerenciaModel: null,

        /*Tab: Información General*/

        BtnCancelar: function () { return $('#btnCancelar'); },
        BtnAnuladoGerencia: function () { return $('#btnAnuladoGerencia'); },

        TxtNumeroDocumento: function () { return $('#txtNumeroDocumento'); },
        DtpFechaVisitaDesde: function () { return $('#dtpFechaVisitaDesde'); },
        DtpFechaVisitaHasta: function () { return $('#dtpFechaVisitaHasta'); },
        TxtNombreProyecto: function () { return $('#txtNombreProyecto'); },
        TxtNombreColaboradorVisitante: function () { return $('#txtNombreColaboradorVisitante'); },
        TxtNombreColaboradorGerenteProyecto: function () { return $('#txtNombreColaboradorGerenteProyecto'); },
        TxtNombreColaboradorJefeSSOMAProyecto: function () { return $('#txtNombreColaboradorJefeSSOMAProyecto'); },
        TxtDescripcionEstadoIngresoDocumento: function () { return $('#txtDescripcionEstadoIngresoDocumento'); },
        TxtDescripcionEstadoIngresoPlanAccion: function () { return $('#txtDescripcionEstadoIngresoPlanAccion'); },
        TxtDescripcionEstadoProcesoPlanAccion: function () { return $('#txtDescripcionEstadoProcesoPlanAccion'); },
        TxtDescripcionEstadoModuloAccion: function () { return $('#txtDescripcionEstadoModuloAccion'); },
        TxtComentario: function () { return $('#txtComentario'); },

        HdnCodigoIntegradorTipoRegistro: function () { return $('#hdnCodigoIntegradorTipoRegistro'); },

        GrdResultado: null,

    };

    base.Event = {
        BtnCancelarClick: function () {
            'use strict'
            var filtro = {
            };
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocAnuladoGerencia.FormularioDocAnuladoGerencia.Actions.DocAnuladoGerenciaIndex, filtro);
        },

        BtnAnuladoGerenciaSeguimientoClick: function () {
            'use strict'
            
            if (base.Control.TxtComentario().val() != null && base.Control.TxtComentario().val() != '') {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocAnuladoGerencia.FormularioDocAnuladoGerencia.Resource.ConfirmacionGuardarCerrar,
                    indicadorModal: false,
                    onAccept: function () {
                        base.Ajax.AjaxAnuladoGerenciaSeguimiento.data = {
                            NumeroDocumento: base.Control.TxtNumeroDocumento().val(),
                            Comentario: base.Control.TxtComentario().val(),
                            CodigoIntegradorTipoRegistro: JSON.parse(base.Control.FormularioDocAnuladoGerenciaModel).Seguimiento.CodigoIntegradorTipoRegistro
                        };
                        base.Ajax.AjaxAnuladoGerenciaSeguimiento.submit();
                    }
                });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocAnuladoGerencia.FormularioDocAnuladoGerencia.Resource.EtiquetaSinComentario
                });
            }
        },

    };

    base.AjaxSuccess = {
        AjaxAnuladoGerenciaSeguimientoSuccess: function (resultado) {
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
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocAnuladoGerencia.FormularioDocAnuladoGerencia.Resource.GridNumeroAccion,
                width: "5%"
            });
            columns.push({
                data: 'NombreCompletoColaboradorPlanteaAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocAnuladoGerencia.FormularioDocAnuladoGerencia.Resource.GridPlanteaAccion,
                width: "5%"
            });
            columns.push({
                data: 'FechaPlanteadaAccionString',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocAnuladoGerencia.FormularioDocAnuladoGerencia.Resource.GridFechaPlanteadaAccion,
                width: "5%"
            });
            columns.push({
                data: 'NombreCompletoColaboradorEjecutaAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocAnuladoGerencia.FormularioDocAnuladoGerencia.Resource.GridEjecutaAccion,
                width: "5%"
            });
            columns.push({
                data: 'FechaVencimientoAccionString',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocAnuladoGerencia.FormularioDocAnuladoGerencia.Resource.GridFechaVencimientoAccion,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionCortaHallazgo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocAnuladoGerencia.FormularioDocAnuladoGerencia.Resource.GridDescripcionHallazgo,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionCortaAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocAnuladoGerencia.FormularioDocAnuladoGerencia.Resource.GridDescripcionAccion,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionEstadoMinimoAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocAnuladoGerencia.FormularioDocAnuladoGerencia.Resource.GridEstadoAccion,
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
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocAnuladoGerencia.FormularioDocAnuladoGerencia.Actions.BuscarBandejaDocumento,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        }
    };

    base.Ajax = {

        AjaxAnuladoGerenciaSeguimiento: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocAnuladoGerencia.FormularioDocAnuladoGerencia.Actions.DocAnuladoGerenciaDocumento,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxAnuladoGerenciaSeguimientoSuccess
        }),

    };
};
