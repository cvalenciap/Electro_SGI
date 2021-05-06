/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 29112017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocAnuladoGerencia.Index');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocAnuladoGerencia.Index.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'
        Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
       
        base.Control.DocAnuladoGerenciaModel = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocAnuladoGerencia.Models.DocAnuladoGerenciaModel;

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
        DocAnuladoGerenciaModel: null,
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
                if (resultado.Result.EstadoCerradoGerencia == true) {
                    base.Control.Mensaje.Warning({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.DocCerradoGerencia.Seguimiento.Resource.MsgEstadoCerradoGerencia
                    });
                }
                if (resultado.Result.EstadoAnuladoGerencia == true) {
                    base.Control.Mensaje.Warning({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.DocCerradoGerencia.Seguimiento.Resource.MsgEstadoAnuladoGerencia
                    });
                }
                if (resultado.Result.EstadoAnulado == true) {
                    base.Control.Mensaje.Warning({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.DocCerradoGerencia.Seguimiento.Resource.MsgEstadoAnulado
                    });
                }
                if (resultado.Result.EstadoCerradoGerencia != true && resultado.Result.EstadoAnuladoGerencia != true && resultado.Result.EstadoAnulado != true) {
                    var filtro = {
                        NumeroDocumento: base.Control.NumeroDocumento().val(),
                    };
                    Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocAnuladoGerencia.Index.Actions.FormularioDocAnuladoGerencia, filtro);
                }

            }
            else {
                base.Control.FormularioModelo = null;
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.DocCerradoGerencia.Seguimiento.Resource.MsgNoExisteDocumento
                });
            }
        },

    };

    base.Ajax = {
        AjaxObtenerDocumento: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.DocAnuladoGerencia.Index.Actions.ObtenerDocumento,
            autoSubmit: false,
            onSuccess: base.Event.AjaxObtenerDocumentoSuccess
        }),
    };

    base.Function = {

    };

};
