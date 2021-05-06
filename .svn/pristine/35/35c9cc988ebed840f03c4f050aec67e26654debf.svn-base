// <summary>
/// Script de controlador de Formulario UnidadOrganizativa
/// </summary>
/// <remarks>
/// Creacion: 	GMD(SYS) 21/01/2016
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Area.FormularioArea');
Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Area.FormularioArea.Controller = function (opts) {
    var base = this;
    base.Ini = function () {

        base.Event.GrabarAreaSuccess = (opts.GrabarAreaSuccess != null) ? opts.GrabarAreaSuccess : null;
        base.Control.Modelo = Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Area.Models.FormularioArea;

        base.Control.BtnBuscarResponsable().on('click', base.Event.BtnBuscarResponsableClick);

        base.Control.BtnCancelar().off('click');
        base.Control.BtnCancelar().on('click', base.Event.BtnCancelarClick);

        base.Control.BtnGrabar().off('click');
        base.Control.BtnGrabar().on('click', base.Event.BtnGrabarClick);       

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FormularioArea(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Area.Resources.Validacion,
            validationsExtra: base.Function.ValidacionExtraResponsable()
        });
        
        base.Control.DlgFormularioResponsable = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.FormularioBuscadorResponsable.Controller({
            AceptarSuccess: base.Event.AsignarValoresResponsableClick
        });
    };

    base.Show = function (opts) {
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Area.Resources.FormularioArea,
            size: "size-wide",
            close: function () {
            }
        })

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Area.Actions.FormularioArea,
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
        FormularioArea: function () { return $('#frmFormularioArea'); },
        BtnBuscarResponsable: function () { return $('#btnBuscarResponsable'); },
        BtnCancelar: function () { return $('#btnCancelar'); },
        BtnGrabar: function () { return $('#btnGrabar'); },
        TxtNombreArea: function () { return $('#txtNombreAreaFormulario'); },
        SlcDepartamento: function () { return $('#slcDepartamento'); },
        TxtCodigoResponsable: function () { return $('#txtCodigoResponsable'); },
        HdnCodigoResponsable: function () { return $('#hdnCodigoResponsable'); },
        SlcProyecto: function () { return $('#slcProyecto'); },
        DlgFormularioResponsable: null,
    };

    base.Event = {        
        BtnBuscarResponsableClick: function () {
            'use strict'
            var filtro = {};
            base.Control.DlgFormularioResponsable.Show(false, [], filtro, false);
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
                            CodigoArea: base.Control.Modelo.Area != null ? base.Control.Modelo.Area.CodigoArea : null,                           
                            NombreArea: base.Control.TxtNombreArea().val(),
                            CodigoResponsable: base.Control.HdnCodigoResponsable().val()
                        };
                        base.Ajax.AjaxGrabar.submit();
                    }
                });
            } else {
                $("#frmAreaSummaryErrorMessage").empty();
                $("#frmAreaSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.MsgValideCampos + "</p>");
            }
        },
        AsignarValoresResponsableClick: function (objResponsable) {
            'use strict'          
            base.Control.TxtCodigoResponsable().val(objResponsable[0].NombreCompleto);
            base.Control.HdnCodigoResponsable().val(objResponsable[0].CodigoResponsable);
        },
        AjaxGrabarSuccess: function (data) {
            if (data.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito });
                if (base.Event.GrabarAreaSuccess != null) {
                    base.Event.BtnCancelarClick();
                    base.Event.GrabarAreaSuccess();
                }
            } else {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },       
    };

    base.Ajax = {       
        AjaxGrabar: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Area.Actions.RegistrarArea,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarSuccess
        })
    };
    base.Function = {
        ValidacionExtraResponsable: function () {
            var validaciones = new Array();

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.HdnCodigoResponsable().val() == null || base.Control.HdnCodigoResponsable().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtCodigoResponsable().attr('class', 'form-control');
                    } else {
                        base.Control.TxtCodigoResponsable().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });
            return validaciones;
        },
    };
}