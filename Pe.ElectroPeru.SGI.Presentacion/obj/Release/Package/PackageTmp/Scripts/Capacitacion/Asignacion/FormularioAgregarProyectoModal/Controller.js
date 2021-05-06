ns('Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioAgregarProyectoModal');
Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioAgregarProyectoModal.Controller = function (opts) {
    var base = this;
    base.Ini = function () {
        base.Event.GrabarAsignacionProyectoSuccess = (opts.GrabarAsignacionProyectoSuccess != null && opts.GrabarAsignacionProyectoSuccess) ? opts.GrabarAsignacionProyectoSuccess : null;
        base.Control.BtnGrabarProyecto().off('click');
        base.Control.BtnGrabarProyecto().on('click', base.Event.BtnGrabarProyectoClick);
        base.Control.ValidadorProyecto = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.frmAgregarProyecto(),
            messages: "Validar los campos obligatorios"
        });
        base.Function.ObtenerFechaActual();
        base.Function.ObtenerDatosProyectos();
    };
    base.Control = {
        DlgForm: null,
        ValidadorProyecto: null,
        frmAgregarProyecto: function () { return $('#frmAgregarProyecto'); },
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        GrdResultadoProcesos: null,
        SlcProyecto: function () { return $('#slcProyecto'); },
        SlcAnnio: function() { return $('#slcAnnio'); },
        BtnGrabarProyecto: function () { return $('#btnGrabarProyecto'); },
        HdnCodigoProyecto: function () { return $('#hdnCodigoProyecto'); },
        TxtNombreProyecto: function () { return $('#txtNombreProyecto'); },
        DtpFechaRegistro: function () { return $('#dtpFechaRegistro'); },
        CodigoProyectoSelect:null,
        NombreProyectoSelect:null
    };
    base.Event = {
        BtnGrabarProyectoClick: function () {
            'use strict'
            if (base.Control.ValidadorProyecto.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    indicadorModal: false,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarProyecto.data = {
                            CodigoProyecto: base.Control.HdnCodigoProyecto().val()
                        };
                        base.Ajax.AjaxGrabarProyecto.submit();
                    }
                });
            }
            else
            {
                $("#frmAgregarProyectoErrorMessage").empty();
                $("#frmAgregarProyectoErrorMessage").append("<p>Debe seleccionar un proyecto</p>");
            }
        },
        AjaxGrabarProyectoSuccess: function (resultado) {            
            if (resultado.Result == 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Control.DlgForm.divDialog.close();
                if (base.Event.GrabarAsignacionProyectoSuccess() != null) {
                    base.Event.GrabarAsignacionProyectoSuccess();
                }
            }
            else if (resultado.Result == 2) {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioAsignacionProyecto.Resource.EtiquetaMensajeProyectoRegistrado });
            }
            else
            {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
    };
    base.Function = {
        ObtenerFechaActual: function () {         
            var f = new Date();
            base.Control.DtpFechaRegistro().val(f.getDate() + "/" + (f.getMonth()+1) + "/" + f.getFullYear());                     
        },
        ObtenerDatosProyectos: function () {
            base.Control.TxtNombreProyecto().val(base.Control.NombreProyectoSelect);
            base.Control.HdnCodigoProyecto().val(base.Control.CodigoProyectoSelect);
        },
    };
    base.Show = function (opts) {
        base.Control.CodigoProyectoSelect = opts.CodigoProyecto;
        base.Control.NombreProyectoSelect = opts.NombreProyecto;
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioAsignacionProyecto.Resource.EtiquetaVentanaAgregarProyecto,
            size: "",
            close: function () {
            }
        });
        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.Actions.FormularioAgregarProyectoModal,
            onSuccess: function () {
                base.Ini();
            }
        });
    };
    base.Ajax = {
        AjaxGrabarProyecto: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.Actions.RegistrarAsignacionProyecto,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarProyectoSuccess
        }),
    };
};