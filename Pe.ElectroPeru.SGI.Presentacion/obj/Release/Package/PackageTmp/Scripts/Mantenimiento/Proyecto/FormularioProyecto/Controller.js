// <summary>
/// Script de controlador de Formulario UnidadOrganizativa
/// </summary>
/// <remarks>
/// Creacion: 	GMD(SYS) 21/01/2016
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Proyecto.FormularioProyecto');
Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Proyecto.FormularioProyecto.Controller = function (opts) {
    var base = this;
    base.Ini = function () {
        base.Event.GrabarProyectoSuccess = (opts.GrabarProyectoSuccess != null) ? opts.GrabarProyectoSuccess : null;
        base.Control.Modelo = Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Proyecto.Models.FormularioProyecto;

        base.Control.BtnCancelar().off('click');
        base.Control.BtnCancelar().on('click', base.Event.BtnCancelarClick);

        base.Control.BtnGrabar().off('click');
        base.Control.BtnGrabar().on('click', base.Event.BtnGrabarClick);

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FormularioProyecto(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Proyecto.Resources.Validacion
            //validationsExtra: base.Function.ValidacionExtra()
        });
    };

    base.Show = function (opts) {
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Proyecto.Resources.FormularioProyecto,
            size: "size-wide",
            close: function () {
            }
        })

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Proyecto.Actions.FormularioProyecto,
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
        FormularioProyecto: function () { return $('#frmFormularioProyecto'); },
        BtnCancelar: function () { return $('#btnCancelar'); },
        BtnGrabar: function () { return $('#btnGrabar'); },
        TxtNombreProyecto: function () { return $('#txtNombreProyectoFormulario'); },
        TxtNombreProyectoUsuario: function () { return $('#txtNombreProyectoUsuarioFormulario'); },
        TxtCodigoIdentificador: function () { return $('#txtCodigoIdentificador'); },
        TxtCodigoMeta4Sispo: function () { return $('#txtCodigoMeta4Sispo'); },
        //HdnCodigoProyecto: function () { return $('#hdnCodigoProyecto'); },
        SlcPais: function () { return $('#slcPais'); },
        SlcEmpresa: function () { return $('#slcEmpresa'); },
    };

    base.Event = {
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
                            CodigoProyecto: base.Control.Modelo.Proyecto != null ? base.Control.Modelo.Proyecto.CodigoProyecto : null,
                            //CodigoProyecto: base.Control.HdnCodigoProyecto().val(),
                            NombreProyecto: base.Control.TxtNombreProyecto().val(),
                            NombreProyectoUsuario: base.Control.TxtNombreProyectoUsuario().val(),
                            CodigoIdentificador: base.Control.TxtCodigoIdentificador().val(),
                            //CodigoMeta4Sispo: base.Control.TxtCodigoMeta4Sispo().val(),
                            CodigoPais: base.Control.SlcPais().val(),
                            CodigoEmpresa: base.Control.SlcEmpresa().val()
                        };
                        base.Ajax.AjaxGrabar.submit();
                    }
                });
            } else {
                $("#frmProyectoSummaryErrorMessage").empty();
                $("#frmProyectoSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },

        AjaxGrabarSuccess: function (data) {
            if (data.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito });
                if (base.Event.GrabarProyectoSuccess != null) {
                    base.Event.BtnCancelarClick();
                    base.Event.GrabarProyectoSuccess();
                }
            } else {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        }
    };

    base.Ajax = {
        AjaxGrabar: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Proyecto.Actions.RegistrarProyecto,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarSuccess
        })
    };
}