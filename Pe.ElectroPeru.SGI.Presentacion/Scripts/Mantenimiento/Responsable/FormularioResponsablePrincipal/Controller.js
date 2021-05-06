// <summary>
/// Script de controlador de Formulario UnidadOrganizativa
/// </summary>
/// <remarks>
/// Creacion: 	GMD(SYS) 21/01/2016
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.FormularioResponsablePrincipal');
Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.FormularioResponsablePrincipal.Controller = function (opts) {
    var base = this;
    base.Ini = function () {

        base.Event.GrabarResponsableSuccess = (opts.GrabarResponsableSuccess != null) ? opts.GrabarResponsableSuccess : null;
        base.Control.Modelo = Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Models.FormularioResponsable;
              
        base.Control.TxtNumeroDocumento().off('keypress');
        base.Control.TxtNumeroDocumento().on('keypress', base.Event.TxtSoloNumerosKeypress);        

        base.Control.BtnCancelar().off('click');
        base.Control.BtnCancelar().on('click', base.Event.BtnCancelarClick);

        base.Control.BtnGrabar().off('click');
        base.Control.BtnGrabar().on('click', base.Event.BtnGrabarClick);
        
        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FormularioResponsablePrincipal(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Resources.Validacion,            
        });

    };

    base.Show = function (opts) {
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Resources.FormularioResponsable,
            size: "size-wide",
            close: function () {
            }
        })

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Actions.FormularioResponsablePrincipal,
            onSuccess: function () {
                base.Ini();
            },
            data: opts.data
        });
    };

    base.Control = {
        DlgForm: null,
        Validador: null,
        Modelo: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        FormularioResponsablePrincipal: function () { return $('#frmFormularioResponsable'); },
        BtnCancelar: function () { return $('#btnCancelar'); },
        BtnGrabar: function () { return $('#btnGrabar'); },
        TxtNombres: function () { return $('#txtNombres'); },       
        TxtApellidoPaterno: function () { return $('#txtApellidoPaterno'); },
        TxtApellidoMaterno: function () { return $('#txtApellidoMaterno'); },     
        SlcGenero: function () { return $('#slcGenero'); },
        SlcCargo: function () { return $('#slcCargo'); },
        SlcTipoDocumento: function () { return $('#slcTipoDocumento'); },
        TxtNumeroDocumento: function () { return $('#txtNumeroDocumento'); },        
        TxtCorreoElectronico: function () { return $('#txtCorreoElectronico'); },      
    };

    base.Event = {
        TxtSoloNumerosKeypress: function (event) {
            var regex = /[0-9]/;
            var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
            if (!regex.test(key)) {
                event.preventDefault();
                return false;
            }
        },       
        BtnCancelarClick: function () {
            'use strict'
            base.Control.DlgForm.divDialog.close();
        },
        BtnGrabarClick: function () {
            'use strict'
            if (base.Control.Validador.isValid()) {               
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabar.data = {
                            CodigoResponsable: base.Control.Modelo.Responsable != null ? base.Control.Modelo.Responsable.CodigoResponsable : null,
                            Nombres: base.Control.TxtNombres().val(),
                            ApellidoPaterno: base.Control.TxtApellidoPaterno().val(),
                            ApellidoMaterno: base.Control.TxtApellidoMaterno().val(),                           
                            CodigoGenero: base.Control.SlcGenero().val(),
                            CodigoCargo: base.Control.SlcCargo().val(),
                            CodigoTipoDocumento: base.Control.SlcTipoDocumento().val(),
                            NumeroDocumento: base.Control.TxtNumeroDocumento().val(),   
                            CorreoElectronico: base.Control.TxtCorreoElectronico().val()
                        };
                        base.Ajax.AjaxGrabar.submit();
                    }
                });
            } else {
                $("#frmResponsablePrincipalSummaryErrorMessage").empty();
                $("#frmResponsablePrincipalSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.MsgValideCampos + "</p>");
            }
        },
    };
    base.AjaxSuccess = {
        AjaxGrabarSuccess: function (data) {
            if (data.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito });
                if (base.Event.GrabarResponsableSuccess != null) {
                    base.Event.BtnCancelarClick();
                    base.Event.GrabarResponsableSuccess();
                }
            } else {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
    };
    base.Ajax = {
        AjaxGrabar: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Actions.RegistrarResponsable,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxGrabarSuccess
        }),
    };
}