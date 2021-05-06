/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 30112017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocReabiertoGerencia.FormularioDocReabiertoGerencia');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocReabiertoGerencia.FormularioDocReabiertoGerencia.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'
        Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
        base.Control.FormularioDocReabiertoGerenciaModel = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocReabiertoGerencia.FormularioDocReabiertoGerencia.Models.DocReabiertoGerenciaModel;
        /*Tab: Información General*/
        base.Control.BtnCancelar().off('click');
        base.Control.BtnCancelar().on('click', base.Event.BtnCancelarClick);
        base.Control.BtnReabiertoGerencia().off('click');
        base.Control.BtnReabiertoGerencia().on('click', base.Event.BtnReabiertoGerenciaSeguimientoClick);

        $("#divGrdResult").empty();

        base.Function.CrearGrid();
        
        var filtro = {
            NumeroDocumento: JSON.parse(base.Control.FormularioDocReabiertoGerenciaModel).Seguimiento.NumeroDocumento,
        };
        base.Control.GrdResultado.Load(filtro);

    };

    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        Validator: null,
        FormularioDocReabiertoGerenciaModel: null,

        /*Tab: Información General*/

        BtnCancelar: function () { return $('#btnCancelar'); },
        BtnReabiertoGerencia: function () { return $('#btnReabiertoGerencia'); },

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
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocReabiertoGerencia.FormularioDocReabiertoGerencia.Actions.DocReabiertoGerenciaIndex, filtro);
        },

        BtnReabiertoGerenciaSeguimientoClick: function () {
            'use strict'
            
            if (base.Control.TxtComentario().val() != null && base.Control.TxtComentario().val() != '') {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocReabiertoGerencia.FormularioDocReabiertoGerencia.Resource.ConfirmacionGuardarCerrar,
                    indicadorModal: false,
                    onAccept: function () {
                        base.Ajax.AjaxReabiertoGerenciaSeguimiento.data = {
                            NumeroDocumento: base.Control.TxtNumeroDocumento().val(),
                            Comentario: base.Control.TxtComentario().val(),
                            CodigoIntegradorTipoRegistro: JSON.parse(base.Control.FormularioDocReabiertoGerenciaModel).Seguimiento.CodigoIntegradorTipoRegistro
                        };
                        base.Ajax.AjaxReabiertoGerenciaSeguimiento.submit();
                    }
                });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocReabiertoGerencia.FormularioDocReabiertoGerencia.Resource.EtiquetaSinComentario
                });
            }
        },

    };

    base.AjaxSuccess = {
        AjaxReabiertoGerenciaSeguimientoSuccess: function (resultado) {
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
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocReabiertoGerencia.FormularioDocReabiertoGerencia.Resource.GridNumeroAccion,
                width: "5%"
            });
            columns.push({
                data: 'NombreCompletoColaboradorPlanteaAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocReabiertoGerencia.FormularioDocReabiertoGerencia.Resource.GridPlanteaAccion,
                width: "5%"
            });
            columns.push({
                data: 'FechaPlanteadaAccionString',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocReabiertoGerencia.FormularioDocReabiertoGerencia.Resource.GridFechaPlanteadaAccion,
                width: "5%"
            });
            columns.push({
                data: 'NombreCompletoColaboradorEjecutaAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocReabiertoGerencia.FormularioDocReabiertoGerencia.Resource.GridEjecutaAccion,
                width: "5%"
            });
            columns.push({
                data: 'FechaVencimientoAccionString',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocReabiertoGerencia.FormularioDocReabiertoGerencia.Resource.GridFechaVencimientoAccion,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionCortaHallazgo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocReabiertoGerencia.FormularioDocReabiertoGerencia.Resource.GridDescripcionHallazgo,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionCortaAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocReabiertoGerencia.FormularioDocReabiertoGerencia.Resource.GridDescripcionAccion,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionEstadoMinimoAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocReabiertoGerencia.FormularioDocReabiertoGerencia.Resource.GridEstadoAccion,
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
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocReabiertoGerencia.FormularioDocReabiertoGerencia.Actions.BuscarBandejaDocumento,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        }
    };

    base.Ajax = {

        AjaxReabiertoGerenciaSeguimiento: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocReabiertoGerencia.FormularioDocReabiertoGerencia.Actions.DocReabiertoGerenciaDocumento,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxReabiertoGerenciaSeguimientoSuccess
        }),

    };
};
