ns('Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.FormularioAgregarSubProcesoModal');
Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.FormularioAgregarSubProcesoModal.Controller = function (opts) {
    var base = this;

    base.Ini = function () {              

        base.Control.BtnGrabarSubProceso().off('click');
        base.Control.BtnGrabarSubProceso().on('click', base.Event.BtnGrabarSubProcesoClick);
        base.Control.BtnCancelar().off('click');
        base.Control.BtnCancelar().on('click', base.Event.BtnCancelarClick);
        
        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmAgregarSubProcesoModal(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
        });

        if (opts != null && opts.AceptarSuccess != null && opts.AceptarSuccess)
            base.Event.AceptarSuccess = opts.AceptarSuccess;

    };
    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        CodigoSubProceso: null,
        Validador: null,
        DlgForm: null,
        FrmAgregarSubProcesoModal: function () { return $('#frmAgregarSubProcesoModal'); },    
        HidenCodigoSubProceso: function () { return $('#hidenCodigoSubProceso'); },
        TxtCodsubProceso: function () { return $('#txtCodsubProceso'); },
        TxtDesSubProceso: function () { return $('#txtDesSubProceso'); },
        SlcTipoSubProceso: function () { return $('#slcTipoSubProceso'); },
        BtnGrabarSubProceso: function () { return $('#btnGrabarSubProceso'); },
        BtnCancelar: function () { return $('#btnCancelarSubProceso'); },
    };
    base.Event = {
        BtnCancelarClick: function () {
            'use strict'
            base.Control.DlgForm.divDialog.close();
        },
        BtnGrabarSubProcesoClick: function () {
            'use strict'
            if (base.Control.Validador.isValid()) {


                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {

                        base.Ajax.AjaxGrabarSubProceso.data = {
                            CodSubProceso: base.Control.HidenCodigoSubProceso().val(),
                            IdenSubProceso: base.Control.TxtCodsubProceso().val(),
                            IdenSubProcesoEdit: base.Control.TxtCodsubProceso().val(),
                            NomSubProceso: base.Control.TxtDesSubProceso().val(),
                            CodTipoSubProceso: base.Control.SlcTipoSubProceso().val(),
                        };
                        base.Ajax.AjaxGrabarSubProceso.submit();

                    }
                });     
            }
            else
            {            
                $("#frmAgregarSubProcesoModalSummaryErrorMessage").empty();
                $("#frmAgregarSubProcesoModalSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },
        AjaxGrabarSubProcesoSuccess: function (resultado) {
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
                base.Control.Mensaje.Warning({ message: 'El código '+ base.Control.TxtCodsubProceso().val() +' del Sub Proceso se encuentra registrado.' });
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
            title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.EtiquetaTituloFormularioSubProceso,
            size: "",
            close: function () {
            }
        });
  
        base.Control.DlgForm.getAjaxContent({
         
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Actions.FormularioAgregarSubProcesoModal,
            onSuccess: function () {
                base.Ini();
            },
            data: opts.data
        });




    };

    base.Function = {        
    };

    base.Ajax = {
        AjaxGrabarSubProceso: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Actions.RegistrarSubProceso,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarSubProcesoSuccess
        }),
    };




};