/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 30112017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocCerradoGerencia.FormularioDocCerradoGerencia');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocCerradoGerencia.FormularioDocCerradoGerencia.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'
        Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
        base.Control.FormularioDocCerradoGerenciaModel = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocCerradoGerencia.FormularioDocCerradoGerencia.Models.DocCerradoGerenciaModel;
               
        /*Tab: Información General*/
        base.Control.BtnCancelar().off('click');
        base.Control.BtnCancelar().on('click', base.Event.BtnCancelarClick);
        base.Control.BtnCerradoGerencia().off('click');
        base.Control.BtnCerradoGerencia().on('click', base.Event.BtnCerradoGerenciaSeguimientoClick);
        
        $("#divGrdResult").empty();

        base.Function.CrearGrid();
       
        var filtro = {
            NumeroDocumento: JSON.parse(base.Control.FormularioDocCerradoGerenciaModel).Seguimiento.NumeroDocumento,
        };
        base.Control.GrdResultado.Load(filtro);
         
    };

    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        Validator: null,
        FormularioDocCerradoGerenciaModel: null,
        FrmDocCerradoGerencia: function () { return $('#frmDocCerradoGerencia'); },
        /*Tab: Información General*/

        BtnCancelar: function () { return $('#btnCancelar'); },
        BtnCerradoGerencia: function () { return $('#btnCerradoGerencia'); },
        TxtNumeroDocumento: function () { return $('#txtNumeroDocumento'); },
        TxtNombrePais: function () { return $('#txtNombrePais'); },
        TxtNombreProyecto: function () { return $('#txtNombreProyecto'); },
        TxtNombreEmpresa: function () { return $('#txtNombreEmpresa'); },

        TxtDescripcionEstadoIngresoDocumento: function () { return $('#txtDescripcionEstadoIngresoDocumento'); },
        TxtDescripcionEstadoIngresoPlanAccion: function () { return $('#txtDescripcionEstadoIngresoPlanAccion'); },
       
        TxtDescripcionEstadoMinimoAccion: function () { return $('#txtDescripcionEstadoMinimoAccion'); },
        TxtComentario: function () { return $('#txtComentario'); },

        HdnCodigoIntegradorTipoRegistro: function () { return $('#hdnCodigoIntegradorTipoRegistro'); },
                
        GrdResultado: null,

    };

    base.Event = {
        BtnCancelarClick: function () {
            'use strict'
            var filtro = {
            };
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocCerradoGerencia.FormularioDocCerradoGerencia.Actions.DocCerradoGerenciaIndex, filtro);
        },

        BtnCerradoGerenciaSeguimientoClick: function () {
            'use strict'
            if (base.Control.TxtComentario().val() != null && base.Control.TxtComentario().val() != '') {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocCerradoGerencia.FormularioDocCerradoGerencia.Resource.ConfirmacionGuardarCerrar,
                    indicadorModal: false,
                    onAccept: function () {
                        base.Ajax.AjaxCerradoGerenciaSeguimiento.data = {
                            NumeroDocumento: base.Control.TxtNumeroDocumento().val(),
                            Comentario: base.Control.TxtComentario().val(),
                            CodigoIntegradorTipoRegistro: JSON.parse(base.Control.FormularioDocCerradoGerenciaModel).Seguimiento.CodigoIntegradorTipoRegistro
                        };
                        base.Ajax.AjaxCerradoGerenciaSeguimiento.submit();
                    }
                });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocCerradoGerencia.FormularioDocCerradoGerencia.Resource.EtiquetaSinComentario
                });
            }
        },
        
    };

    base.AjaxSuccess = {
        AjaxCerradoGerenciaSeguimientoSuccess: function (resultado) {
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
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocCerradoGerencia.FormularioDocCerradoGerencia.Resource.GridNumeroAccion,
                width: "5%"
            });
            columns.push({
                data: 'NombreCompletoColaboradorPlanteaAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocCerradoGerencia.FormularioDocCerradoGerencia.Resource.GridPlanteaAccion,
                width: "5%"
            });
            columns.push({
                data: 'FechaPlanteadaAccionString',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocCerradoGerencia.FormularioDocCerradoGerencia.Resource.GridFechaPlanteadaAccion,
                width: "5%"
            });
            columns.push({
                data: 'NombreCompletoColaboradorEjecutaAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocCerradoGerencia.FormularioDocCerradoGerencia.Resource.GridEjecutaAccion,
                width: "5%"
            });
            columns.push({
                data: 'FechaVencimientoAccionString',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocCerradoGerencia.FormularioDocCerradoGerencia.Resource.GridFechaVencimientoAccion,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionCortaHallazgo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocCerradoGerencia.FormularioDocCerradoGerencia.Resource.GridDescripcionHallazgo,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionCortaAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocCerradoGerencia.FormularioDocCerradoGerencia.Resource.GridDescripcionAccion,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionEstadoMinimoAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocCerradoGerencia.FormularioDocCerradoGerencia.Resource.GridEstadoAccion,
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
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocCerradoGerencia.FormularioDocCerradoGerencia.Actions.BuscarBandejaDocumento,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        }
    };

    base.Ajax = {

        AjaxCerradoGerenciaSeguimiento: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocCerradoGerencia.FormularioDocCerradoGerencia.Actions.DocCerradoGerenciaDocumento,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxCerradoGerenciaSeguimientoSuccess
        }),
           
    };
       
};
