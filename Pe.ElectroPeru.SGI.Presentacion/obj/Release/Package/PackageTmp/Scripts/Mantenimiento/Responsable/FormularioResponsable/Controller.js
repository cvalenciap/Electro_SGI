// <summary>
/// Script de controlador de Formulario Responsable
/// </summary>
/// <remarks>
/// Creacion: 	GMD(SYS) 21/01/2016
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.FormularioResponsable');
Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.FormularioResponsable.Controller = function (opts) {
    var base = this;
    base.Ini = function () {
        base.Event.GrabarResponsableSuccess = (opts.GrabarResponsableSuccess != null && opts.GrabarResponsableSuccess) ? opts.GrabarResponsableSuccess : null;
        base.Control.Modelo = Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Models.FormularioResponsable;

        base.Control.BtnCancelar().off('click');
        base.Control.BtnCancelar().on('click', base.Event.BtnCancelarClick);

        base.Control.BtnGrabar().off('click');
        base.Control.BtnGrabar().on('click', base.Event.BtnGrabarClick);

        base.Control.BtnBuscar().off('click');
        base.Control.BtnBuscar().on('click', base.Event.BtnBuscarClick);

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FormularioResponsable(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Resources.Validacion
            //validationsExtra: base.Function.ValidacionExtra()
        });

        base.Control.SlcEmpresa().val(base.Control.Modelo.Responsable != null ? base.Control.Modelo.Responsable.CodigoEmpresa : "")
        base.Control.SlcEmpresa().on("change", function () {
            base.Event.RecargarUnidaOrganizativa();
        });
        base.Event.RecargarUnidaOrganizativa();

        setTimeout(function () {
            base.Control.DlgForm.setPosition(['center', 'center']);
        }, 200)
    };

    base.Show = function (opts) {
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Resources.FormularioResponsable,
            close: function () {
                base.Control.DlgForm.destroy();
            }
        })

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Actions.FormularioResponsable,
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
        FormularioResponsable: function () { return $('#frmFormularioResponsable'); },
        BtnCancelar: function () { return $('#btnCancelar'); },
        BtnGrabar: function () { return $('#btnGrabar'); },
        BtnBuscar: function () { return $('#btnBuscarFormulario'); },

        TxtDominio: function () { return $('#txtDominioFormulario'); },
        TxtUsuario: function () { return $('#txtUsuarioFormulario'); },
        TxtDni: function () { return $('#txtDniFormulario'); },
        TxtApellidoPaterno: function () { return $('#txtApellidoPaternoFormulario'); },
        TxtApellidoMaterno: function () { return $('#txtApellidoMaternoFormulario'); },
        TxtNombres: function () { return $('#txtNombresFormulario'); },
        TxtCelular: function () { return $('#txtCelularFormulario'); },
        TxtEmail: function () { return $('#txtEmailFormulario'); },
        ChkAprobador: function () { return $('#chkAprobadorFormulario'); },
        ChkSolicitante: function () { return $('#chkSolicitanteFormulario'); },
        SlcEmpresa: function () { return $('#slcEmpresaFormulario'); },
        SlcUnidadOrganizativa: function () { return $('#slcUnidadOrganizativaFormulario'); },
    };

    base.Event = {
        BtnCancelarClick: function () {
            'use strict'
            base.Control.DlgForm.close();
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
                            //CodigoEmpresa: base.Control.SlcEmpresa().val(),
                            //IdUO: base.Control.TxtIdUOFormulario().val(),
                            //AbreviaturaUO: base.Control.TxtAbreviaturaUOFormulario().val(),
                            Dominio: base.Control.TxtDominio().val(),
                            Usuario: base.Control.TxtUsuario().val(),
                            Dni: base.Control.TxtDni().val(),
                            ApellidoPaterno: base.Control.TxtApellidoPaterno().val(),
                            ApellidoMaterno: base.Control.TxtApellidoMaterno().val(),
                            Nombres: base.Control.TxtNombres().val(),
                            Celular: base.Control.TxtCelular().val(),
                            Email: base.Control.TxtEmail().val(),
                            EsAprobador: base.Control.ChkAprobador().is(":checked"),
                            EsSolicitante: base.Control.ChkSolicitante().is(":checked"),


                            CodigoEmpresa: base.Control.SlcEmpresa().val(),
                            CodigoUO: base.Control.SlcUnidadOrganizativa().val()

                            //NombreResponsable: base.Control.TxtNombreResponsableFormulario().val()
                        };
                        base.Ajax.AjaxGrabar.submit();

                    }
                });
            }
        },

        AjaxGrabarSuccess: function (data) {
            if (data.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito });
                if (base.Event.GrabarResponsableSuccess != null) {
                    base.Event.GrabarResponsableSuccess();
                }
                base.Control.DlgForm.close();
            } else {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },

        BtnBuscarClick: function () {
            'use strict'
            base.Ajax.AjaxObtenerResponsableAD.data = {
                Dominio: base.Control.TxtDominio().val(),
                Usuario: base.Control.TxtUsuario().val()
            };
            base.Ajax.AjaxObtenerResponsableAD.submit();
        },

        AjaxObtenerResponsableADSuccess: function (data) {
            if (data.IsSuccess) {
                base.Control.TxtUsuario().val(data.Result.Usuario);
                base.Control.TxtDni().val(data.Result.Dni);
                base.Control.TxtApellidoPaterno().val(data.Result.ApellidoPaterno);
                base.Control.TxtApellidoMaterno().val(data.Result.ApellidoMaterno);
                base.Control.TxtNombres().val(data.Result.Nombres);
                base.Control.TxtCelular().val(data.Result.Celular);
                base.Control.TxtEmail().val(data.Result.Email);
            }
        },
        RecargarUnidaOrganizativa: function () {
            base.Ajax.AjaxUnidadOrganizativa.data = {
                CodigoEmpresa: base.Control.SlcEmpresa().val()
            };
            base.Ajax.AjaxUnidadOrganizativa.submit();
        },
        AjaxUnidadOrganizativaSuccess: function (data) {
            base.Control.SlcUnidadOrganizativa().find('option').remove();
            base.Control.SlcUnidadOrganizativa().append($("<option />").val('').text(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar));

            if (data != null || data != undefined) {
                $.each(data.Result, function (index, value) {
                    base.Control.SlcUnidadOrganizativa().append($("<option />").val(value.CodigoUO).text(value.NombreUO));
                });
            }
            base.Control.SlcUnidadOrganizativa().val(base.Control.Modelo.Responsable != null ? base.Control.Modelo.Responsable.CodigoUO : "");            
        }
    };

    base.Ajax = {
        AjaxGrabar: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Actions.RegistrarResponsable,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarSuccess
        }),
        AjaxObtenerResponsableAD: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Actions.BuscarResponsableAD,
            autoSubmit: false,
            onSuccess: base.Event.AjaxObtenerResponsableADSuccess
        }),
        AjaxUnidadOrganizativa: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.UnidadOrganizativa.Actions.BuscarUnidadOrganizativa,
            autoSubmit: false,
            onSuccess: base.Event.AjaxUnidadOrganizativaSuccess
        })
    };

}