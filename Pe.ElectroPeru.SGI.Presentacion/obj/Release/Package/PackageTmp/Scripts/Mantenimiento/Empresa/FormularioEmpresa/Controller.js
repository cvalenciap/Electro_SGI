// <summary>
/// Script de controlador de Formulario UnidadOrganizativa
/// </summary>
/// <remarks>
/// Creacion: 	GMD(SYS) 21/01/2016
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.FormularioEmpresa');
Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.FormularioEmpresa.Controller = function (opts) {
    var base = this;
    base.Ini = function () {
        base.Event.GrabarEmpresaSuccess = (opts.GrabarEmpresaSuccess != null) ? opts.GrabarEmpresaSuccess : null;
        base.Control.Modelo = Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.Models.FormularioEmpresa;

        base.Control.BtnBuscarDuenioContrato().on('click', base.Event.BtnBuscarDuenioContratoClick);

        base.Control.BtnCancelar().off('click');
        base.Control.BtnCancelar().on('click', base.Event.BtnCancelarClick);

        base.Control.BtnGrabar().off('click');
        base.Control.BtnGrabar().on('click', base.Event.BtnGrabarClick);

        base.Control.DlgFormularioColaborador = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.AsignarValoresDuenioContratoClick
        });

        base.Control.ChkAltoRiesgo().off('click');
        base.Control.ChkAltoRiesgo().on('click', base.Event.ChkAltoRiesgoClick);

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FormularioEmpresa(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.Resources.Validacion
            //validationsExtra: base.Function.ValidacionExtra()
        });
    };

    base.Show = function (opts) {
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.Resources.FormularioEmpresa,
            size: "size-wide",
            close: function () {
            }
        })

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.Actions.FormularioEmpresa,
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
        FormularioEmpresa: function () { return $('#frmFormularioEmpresa'); },
        BtnBuscarDuenioContrato: function () { return $('#btnBuscarDuenioContrato'); },
        BtnCancelar: function () { return $('#btnCancelar'); },
        BtnGrabar: function () { return $('#btnGrabar'); },
        TxtRazonSocial: function () { return $('#txtRazonSocial'); },
        TxtRuc: function () { return $('#txtRuc'); },
        ChkAltoRiesgo: function () { return $('#chkIndicadorActividadAltoRiesgo'); },
        TxtDireccion: function () { return $('#txtDireccion'); },
        TxtAbreviatura: function () { return $('#txtAbreviatura'); },
        SlcTipoEmpresa: function () { return $('#slcTipoEmpresa'); },
        TxtActividadEconomica: function () { return $('#txtActividadEconomica'); },
        TxtNumeroTrabajadores: function () { return $('#txtNumeroTrabajadores'); },
        TxtNumeroTrabajadoresAfiliados: function () { return $('#txtNumeroTrabajadoresAfiliados'); },
        TxtNumeroTrabajadoresNoAfiliados: function () { return $('#txtNumeroTrabajadoresNoAfiliados'); },
        TxtNombreAseguradora: function () { return $('#txtNombreAseguradora'); },
        HdnCodigoDuenioContrato: function () { return $('#hdnCodigoDuenioContrato'); },
        TxtCodigoDuenioContrato: function () { return $('#txtCodigoDuenioContrato'); },
        DlgFormularioColaborador: null,
    };

    base.Event = {
        ChkAltoRiesgoClick: function () {
            if ($(this).is(':checked') == true) {
                base.Control.ChkAltoRiesgo().val(true)
            }
            else {
                base.Control.ChkAltoRiesgo().val(false)
            }
        },
        BtnBuscarDuenioContratoClick: function () {
            'use strict'
            var filtro = {};
            base.Control.DlgFormularioColaborador.Show(false, [], filtro, false);
        },
        BtnCancelarClick: function () {
            'use strict'
            base.Control.DlgForm.divDialog.close();
        },
        AsignarValoresDuenioContratoClick: function (objDuenioContrato) {
            'use strict'
            base.Control.TxtCodigoDuenioContrato().val(objDuenioContrato[0].NombreCompletoColaborador);
            base.Control.HdnCodigoDuenioContrato().val(objDuenioContrato[0].CodigoColaborador);
        },
        BtnGrabarClick: function () {
            'use strict'
            if (base.Control.Validador.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabar.data = {
                            CodigoEmpresa: base.Control.Modelo.Empresa != null ? base.Control.Modelo.Empresa.CodigoEmpresa : null,                            
                            RazonSocial: base.Control.TxtRazonSocial().val(),
                            Ruc: base.Control.TxtRuc().val(),
                            IndicadorActividadAltoRiesgo: base.Control.ChkAltoRiesgo().val(),
                            Direccion: base.Control.TxtDireccion().val(),
                            Abreviatura: base.Control.TxtAbreviatura().val(),
                            CodigoTipoEmpresa: base.Control.SlcTipoEmpresa().val(),
                            ActividadEconomica: base.Control.TxtActividadEconomica().val(),
                            NumeroTrabajadores: base.Control.TxtNumeroTrabajadores().val(),
                            NumeroTrabajadoresAfiliados: base.Control.TxtNumeroTrabajadoresAfiliados().val(),
                            NumeroTrabajadoresNoAfiliados: base.Control.TxtNumeroTrabajadoresNoAfiliados().val(),
                            NombreAseguradora: base.Control.TxtNombreAseguradora().val(),
                            CodigoDuenioContrato: base.Control.HdnCodigoDuenioContrato().val()
                        };
                        base.Ajax.AjaxGrabar.submit();
                    }
                });
            } else {
                $("#frmEmpresaSummaryErrorMessage").empty();
                $("#frmEmpresaSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },

        AjaxGrabarSuccess: function (data) {
            if (data.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito });
                if (base.Event.GrabarEmpresaSuccess != null) {
                    base.Event.BtnCancelarClick();
                    base.Event.GrabarEmpresaSuccess();
                }
            } else {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        }
    };

    base.Ajax = {
        AjaxGrabar: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.Actions.RegistrarEmpresa,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarSuccess
        })
    };
}