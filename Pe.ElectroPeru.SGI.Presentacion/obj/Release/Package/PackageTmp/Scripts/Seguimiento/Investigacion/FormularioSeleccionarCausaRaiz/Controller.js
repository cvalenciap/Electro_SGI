/// <summary>
/// Script de formulario de Leccion
/// </summary>
/// <remarks>
/// Creacion: 	GMD D43260443
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioSeleccionarCausaRaiz');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioSeleccionarCausaRaiz.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        base.Control.FormularioModelo = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Models.FormularioSeleccionarCausaRaiz;

        if (base.Control.FormularioModelo.ListaEntidadCausaRaiz != null && base.Control.FormularioModelo.ListaEntidadCausaRaiz.length < 1) {
            base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaValidacionSeleccionarCausaRaiz });
            base.Control.DlgFormModalCausas.divDialog.close();
        }

        if (opts != null && opts.AceptarSuccess != null && opts.AceptarSuccess)
            base.Event.AceptarSuccess = opts.AceptarSuccess;

        base.Control.BtnGrabarSeleccionarCausaRaiz().off('click');
        base.Control.BtnGrabarSeleccionarCausaRaiz().on('click', base.Event.BtnGrabarSeleccionarCausaRaiz);

        for (var i = 0; i < base.Control.ListaAccionCorrectivaCausa.length; i++) {
            $('#id_' + base.Control.ListaAccionCorrectivaCausa[i].CodigoInvestigacionCausaRaiz).prop("checked", true);
        }
    };

    base.Show = function (opts) {
        base.Control.ListaAccionCorrectivaCausa = opts.ListaAccionCorrectivaCausa;
        base.Control.DlgFormModalCausas = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaTituloSeleccionarCausaRaiz,
            size: "",
            close: function () {
            }
        });

        base.Control.DlgFormModalCausas.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.FormularioSeleccionarCausaRaiz,
            onSuccess: function () {
                base.Ini();
            },
            data: opts
        });
    };

    base.Control = {
        FormularioModelo: null,
        ListaAccionCorrectivaCausa: [],
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        BtnGrabarSeleccionarCausaRaiz: function () { return $('#btnGrabarSeleccionarCausaRaiz'); },
    };    

    base.Event = {
        BtnGrabarSeleccionarCausaRaiz: function () {
            var arrCausas = [];
            $('.chkRaiz:checked').each(function (i) {                
                arrCausas.push({
                    Identificador: $(this).data().identificadorcausa,                    
                    Valor: $(this).val()
                });
            });

            if (arrCausas.length > 0) {
                if (base.Event.AceptarSuccess != null) {
                    base.Event.AceptarSuccess(arrCausas);
                }
                base.Control.DlgFormModalCausas.divDialog.close();
            } else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.ValidarCampos });
            }
        }
    };    
};
