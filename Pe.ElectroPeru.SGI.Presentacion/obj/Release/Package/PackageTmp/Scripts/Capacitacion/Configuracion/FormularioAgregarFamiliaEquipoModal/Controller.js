ns('Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.FormularioAgregarFamiliaEquipoModal');
Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.FormularioAgregarFamiliaEquipoModal.Controller = function (opts) {
    var base = this;
    base.Ini = function () {              

        base.Control.BtnGrabarFamiliaEquipo().off('click');
        base.Control.BtnGrabarFamiliaEquipo().on('click', base.Event.BtnGrabarFamiliaEquipoClick);
        base.Control.BtnCancelarFamiliaEquipo().off('click');
        base.Control.BtnCancelarFamiliaEquipo().on('click', base.Event.BtnCancelarFamiliaEquipoClick);

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmAgregarSubProcesoModal(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
        });

        base.Event.AceptarSuccess = (opts.AceptarSuccess != null || opts.AceptarSuccess != undefined ? opts.AceptarSuccess : null)


        //if (opts != null && opts.AceptarSuccess != null && opts.AceptarSuccess)
        //    base.Event.AceptarSuccess = opts.AceptarSuccess;
    };
    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        CodigoSubProceso: null,
        Validador: null,
        DlgForm: null,
        FrmAgregarSubProcesoModal: function () { return $('#frmAgregarFamiliaEquipoModal'); },
        HidenCodigoFamiliaEquipo: function () { return $('#hidenCodigoFamiliaEquipo'); },
        TxtIdentificadorFamiliaEquipo: function () { return $('#txtIdentificadorFamiliaEquipo'); },
        TxtFamEquipoDescripcion: function () { return $('#txtFamEquipoDescripcion'); },
        TxtFamEquipoDescripcionAbrev: function () { return $('#txtFamEquipoDescripcionAbrev'); },
        BtnGrabarFamiliaEquipo: function () { return $('#btnGrabarFamiliaEquipo'); },
        BtnCancelarFamiliaEquipo: function () { return $('#btnCancelarFamiliaEquipo'); },

  
    };
    base.Event = {
        BtnCancelarFamiliaEquipoClick: function () {
            'use strict'
            base.Control.DlgForm.divDialog.close();
        },
        BtnGrabarFamiliaEquipoClick: function () {
            'use strict'
            if (base.Control.Validador.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarFamiliaEquipo.data = {
                            CodFam_Eq: base.Control.HidenCodigoFamiliaEquipo().val(),
                            IdenFam_Eq: base.Control.TxtIdentificadorFamiliaEquipo().val(),
                            IdenFam_Eq_Edit: base.Control.TxtIdentificadorFamiliaEquipo().val(),
                            NomFam_Eq: base.Control.TxtFamEquipoDescripcion().val(),
                            NomFam_Eq_Abrev: base.Control.TxtFamEquipoDescripcionAbrev().val(),
                        };
                        base.Ajax.AjaxGrabarFamiliaEquipo.submit();
                    }
                });
            }
            else
            {
                $("#frmAgregarFamiliaEquipoModalSummaryErrorMessage").empty();
                $("#frmAgregarFamiliaEquipoModalSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },
        AjaxGrabarFamiliaEquipoSuccess: function (resultado) {
            if (resultado.Result == 1) {
                base.Control.DlgForm.divDialog.close();
                if (base.Event.AceptarSuccess != null) {
                    base.Event.AceptarSuccess();
                }
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
            }
            else if (resultado.Result == 2) {
                base.Control.Mensaje.Warning({ message: 'El código ' + base.Control.TxtIdentificadorFamiliaEquipo().val() + ' de Familia Equipo se encuentra registrado.' });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });

            }
        },             
    };

    base.Show = function (opts) {
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.EtiquetaTituloFormularioAgregarFam,
            size: "",
            close: function () {
            }
        });
  
        base.Control.DlgForm.getAjaxContent({

            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Actions.FormularioAgregarFamiliaEquipoModal,
            onSuccess: function () {
                base.Ini();
            },
            data: opts.data
            //data: {CodigoEquipo: base.Control.CodigoEquipo }
        });

    };

    base.Function = {     
    };

    base.Ajax = {
        AjaxGrabarFamiliaEquipo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Actions.RegistrarFamiliaEquipo,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarFamiliaEquipoSuccess
        }),
    };

};