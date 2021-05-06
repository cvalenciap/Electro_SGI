ns('Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.FormularioAgregarProcesoModal');
Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.FormularioAgregarProcesoModal.Controller = function (opts) {
    var base = this;
    base.Configurations = {
        AfterGrabar: null
    }
    base.Ini = function () {              
                    
        base.Control.btnGrabarProceso().off('click');
        base.Control.btnGrabarProceso().on('click', base.Event.BtnGuardarProcesoClick);

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmAgregarProcesoModal(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
        });

    };
    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        Validador: null,
        DlgForm: null,
        FrmAgregarProcesoModal: function () { return $('#frmAgregarProcesoModal'); },

        txtCodProceso: function () { return $('#txtIdenProceso'); },
        txtDesProceso: function () { return $('#txtDesProceso'); },
        IdTipoProcesoCapacitacion: function () { return $('#IdTipoProcesoCapacitacion'); },
        HidenCodigoProcesoCapacitacion: function () { return $('#hidenCodigoProcesoCapacitacion'); },
        btnGrabarProceso: function () { return $('#btnGrabarProceso'); },
        
    };
    base.Event = {

        BtnGuardarProcesoClick: function () {

            'use strict'

            if (base.Control.Validador.isValid()) {
                if (base.Control.HidenCodigoProcesoCapacitacion().val() == "") {

                    base.Control.Mensaje.Confirmation({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                        onAccept: function () {

                            base.Ajax.AjaxGuardarProceso.data = {
                                IdenProceso: base.Control.txtCodProceso().val(),
                                NomProceso: base.Control.txtDesProceso().val(),
                                CodProcesoCapacitacion: base.Control.IdTipoProcesoCapacitacion().val(),
                                OpcionGuardar: "1"
                            }
                            base.Ajax.AjaxGuardarProceso.submit();
                        }
                    });

                }
                else {


                    base.Control.Mensaje.Confirmation({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                        onAccept: function () {
                            base.Ajax.AjaxGuardarProceso.data = {
                                CodProceso: base.Control.HidenCodigoProcesoCapacitacion().val(),
                                IdenProceso: base.Control.txtCodProceso().val(),
                                NomProceso: base.Control.txtDesProceso().val(),
                                CodProcesoCapacitacion: base.Control.IdTipoProcesoCapacitacion().val(),
                                OpcionGuardar: "0"
                            }
                            base.Ajax.AjaxGuardarProceso.submit();
                        }
                    });


                }
            }
                else
                {
                $("#frmAgregarProcesoModalSummaryErrorMessage").empty();
                $("#frmAgregarProcesoModalSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                }
        },         
    };

    base.Show = function (opts) {

        base.Configurations.AfterGrabar = (opts.AfterGrabar == null || opts.AfterGrabar == undefined) ? null : opts.AfterGrabar;
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.EtiquetaTituloFormularioProceso,
            size: "",
            close: function () {
            }
        });
  
        base.Control.DlgForm.getAjaxContent({
         
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Actions.FormularioAgregarProcesoModal,
            onSuccess: function () {
                base.Ini();
            },
            data: opts.data
        });

    };

    base.AjaxSuccess = {
        AjaxGuardarProcesoSuccess: function (data) {

            if (data.OpcionGuardar == "1") {
             
                base.Control.DlgForm.divDialog.close();

                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito });
                base.Configurations.AfterGrabar();

            }
            else {
       
                base.Control.DlgForm.divDialog.close();
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito });
                base.Configurations.AfterGrabar();

            }
        }
    };

    base.Ajax = {
        AjaxGuardarProceso: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Actions.MantenimientoProceso,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxGuardarProcesoSuccess
        })
    };

    base.Function = {
    };

};