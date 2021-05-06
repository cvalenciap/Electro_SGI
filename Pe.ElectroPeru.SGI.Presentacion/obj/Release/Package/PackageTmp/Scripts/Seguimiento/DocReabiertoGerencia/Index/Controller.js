/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 29112017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocReabiertoGerencia.Index');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocReabiertoGerencia.Index.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'
        Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
       
        base.Control.DocReabiertoGerenciaModel = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocReabiertoGerencia.Models.DocReabiertoGerenciaModel;

        base.Control.BtnBuscar().off('click');
        base.Control.BtnBuscar().on('click', base.Event.BtnBuscarClick);
        base.Control.BtnLimpiar().off('click');
        base.Control.BtnLimpiar().on('click', base.Event.BtnLimpiarClick);

    };
    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        
        NumeroDocumento: function () { return $('#txtNumeroDocumento'); },
        BtnBuscar: function () { return $('#btnBuscar'); },
        BtnLimpiar: function () { return $('#btnLimpiar'); },
        Validador: null,
        DocReabiertoGerenciaModel: null,
        FormularioModelo: null
    };
    base.Event = {
        BtnBuscarClick: function () {
            
            'use strict'
            if (base.Control.NumeroDocumento().val() != null ) {
                base.Ajax.AjaxObtenerDocumento.data = {
                    NumeroDocumento: base.Control.NumeroDocumento().val()
                };
                base.Ajax.AjaxObtenerDocumento.submit();
            }
         
        },
    
        BtnLimpiarClick: function () {
            base.Control.NumeroDocumento().val('');

        },
        AjaxObtenerDocumentoSuccess: function (resultado) {
            
            if (resultado.Result.ExisteDocumento == true) {
                base.Control.FormularioModelo = resultado.Result;
                if (resultado.Result.EstadoAbiertoGerencia == true) {
                    base.Control.Mensaje.Warning({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.DocReabiertoGerencia.Seguimiento.Resource.MsgEstadoAbiertoGerencia
                    });
                }
                if (resultado.Result.EstadoReabiertoGerencia == true) {
                    base.Control.Mensaje.Warning({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.DocReabiertoGerencia.Seguimiento.Resource.MsgEstadoReabiertoGerencia
                    });
                }
                if (resultado.Result.EstadoAnuladoGerencia == true) {
                    base.Control.Mensaje.Warning({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.DocReabiertoGerencia.Seguimiento.Resource.MsgEstadoAnuladoGerencia
                    });
                }
                if (resultado.Result.EstadoAnulado == true) {
                    base.Control.Mensaje.Warning({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.DocReabiertoGerencia.Seguimiento.Resource.MsgEstadoAnulado
                    });
                }
                if (resultado.Result.EstadoAbiertoGerencia != true && resultado.Result.EstadoReabiertoGerencia != true && resultado.Result.EstadoAnuladoGerencia != true && resultado.Result.EstadoAnulado != true) {
                    var filtro = {
                        NumeroDocumento: base.Control.NumeroDocumento().val(),
                    };
                    Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocReabiertoGerencia.Index.Actions.FormularioDocReabiertoGerencia, filtro);
                }

            }
            else {
                base.Control.FormularioModelo = null;
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.DocReabiertoGerencia.Seguimiento.Resource.MsgNoExisteDocumento
                });
            }
        },

    };

    base.Ajax = {
        AjaxObtenerDocumento: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocReabiertoGerencia.Index.Actions.ObtenerDocumento,
            autoSubmit: false,
            onSuccess: base.Event.AjaxObtenerDocumentoSuccess
        }),
    };

    base.Function = {

    };

};
