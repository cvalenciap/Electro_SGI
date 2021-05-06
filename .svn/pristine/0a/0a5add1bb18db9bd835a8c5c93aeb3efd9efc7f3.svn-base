/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 22112017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.ReabrirVisita.Index');
Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.ReabrirVisita.Index.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'
        Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
        base.Control.BtnBuscar().off('click');
        base.Control.BtnBuscar().on('click', base.Event.BtnBuscarClick);
        base.Control.BtnLimpiar().off('click');
        base.Control.BtnLimpiar().on('click', base.Event.BtnLimpiarClick);

    };
    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        EsAdministrador: function () { return $('#hdnEsAdministrador'); },
        NumeroVisitaGerencial: function () { return $('#txtNumeroVisitaGerencial'); },
        BtnBuscar: function () { return $('#btnBuscar'); },
        BtnLimpiar: function () { return $('#btnLimpiar'); },
        Validador: null,
        FormularioModelo: null

    };
    base.Event = {
        BtnBuscarClick: function () {
            'use strict'
            if (base.Control.NumeroVisitaGerencial().val().trim() == "") {
                base.Control.Mensaje.Warning({
                    message: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Resource.MsjIngresaNumeroVisitaGerencial
                });
            }
            else {
                base.Ajax.AjaxValidarNumeroVisitaGerencial.data = {
                    NumeroVisitaGerencial: base.Control.NumeroVisitaGerencial().val()
                };
                base.Ajax.AjaxValidarNumeroVisitaGerencial.submit();
            }
        },
        BtnBuscarKeyPress: function (evento) {
            var key = Pe.GMD.UI.Web.Components.Util.GetKeyCode(evento);
            var esValido = !(evento && key == 13);
            if (esValido == false) {
                base.Event.BtnBuscarClick();
            }
            return esValido;
        },
        BtnLimpiarClick: function () {
            base.Control.NumeroVisitaGerencial().val('');

        },

    };
    base.AjaxSuccess = {
        AjaxValidarNumeroVisitaGerencialSuccess: function (resultado) {
            //if (resultado.Result == 1) {
            //    var filtro = {
            //        NumeroVisitaGerencial: base.Control.NumeroVisitaGerencial().val(),
            //    };
            //    Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Actions.FormularioReabrirVisita, filtro);
            //}
            //else if (resultado.Result == 2) {
            //    base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Resource.MsjValidarNumeroVisita });
            //}
            //else {
            //    base.Control.Mensaje.Warning({
            //        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
            //    });
            //}
            
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
                        NumeroVisitaGerencial: base.Control.NumeroVisitaGerencial().val(),
                    };
                    Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Actions.FormularioReabrirVisita, filtro);
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
        AjaxValidarNumeroVisitaGerencial: new Pe.GMD.UI.Web.Components.Ajax({
            //action: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Actions.ExisteNumeroVisitaGerencial,
            action: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.Index.Actions.ObtenerDocumento,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxValidarNumeroVisitaGerencialSuccess
        }),
    };

    base.Function = {

    };

};
