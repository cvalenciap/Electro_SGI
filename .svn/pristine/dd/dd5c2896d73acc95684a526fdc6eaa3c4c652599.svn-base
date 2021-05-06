/// <summary>
/// Script de formulario de Leccion
/// </summary>
/// <remarks>
/// Creacion: 	GMD D43260443
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioSeleccionarFactorCausal');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioSeleccionarFactorCausal.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        base.Control.FormularioModelo = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Models.FormularioSeleccionarFactor;        
        if (base.Control.FormularioModelo.ListaEntidadFactorCausal != null && base.Control.FormularioModelo.ListaEntidadFactorCausal.length < 1) {
            base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaValidacionSeleccionarFactor });
            base.Control.DlgFormModalCausas.divDialog.close();
        }

        if (opts != null && opts.AceptarSuccess != null && opts.AceptarSuccess)
            base.Event.AceptarSuccess = opts.AceptarSuccess;

        base.Control.BtnGrabarSeleccionarCausaRaiz().off('click');
        base.Control.BtnGrabarSeleccionarCausaRaiz().on('click', base.Event.BtnGrabarSeleccionarCausaRaiz);

        for (var i = 0; i < base.Control.ListaAccionCorrectivaFactor.length; i++) {
            $('#id_' + base.Control.ListaAccionCorrectivaFactor[i].CodigoInvestigacionFactorCausal).prop("checked", true);
        }
    };

    base.Show = function (opts) {        
        base.Control.ListaAccionCorrectivaFactor = opts.ListaAccionCorrectivaFactor;
        base.Control.DlgFormModalCausas = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaFormularioSeleccionFactores,
            size: "",
            close: function () {
            }
        });

        base.Control.DlgFormModalCausas.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.FormularioSeleccionarFactorCausal,
            onSuccess: function () {
                base.Ini();
            },
            data: opts
        });
    };

    base.Control = {
        FormularioModelo : null,
        ListaAccionCorrectivaFactor: [],
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        BtnGrabarSeleccionarCausaRaiz: function () { return $('#btnGrabarSeleccionarFactorCausal'); },
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
