/// <summary>
/// Script de controlador de Parametro.
/// </summary>
/// <remarks>
/// Creacion: 	GMD(SYS) 24/03/2015
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Politicas.ValorParametro.FormularioParametro');
Pe.ElectroPeru.SGI.Presentacion.Politicas.ValorParametro.FormularioParametro.Controller = function () {
    var base = this;

    base.Configurations = {
        AfterGrabar: null
    }
    base.Ini = function () {
        base.Control.BtnCancelar().on('click', base.Event.BtnCancelarClick);
        base.Control.BtnGrabar().on('click', base.Event.BtnGrabarClick);

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmParametroValorGuardar(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Politicas.ValorParametro.Resources.Validacion
        });

        $.each($("input[nombre = parameterValue]"), function (index, value) {
            switch ($(value).attr('tipoDato')) {
                case "ENT":
                    //Setear mascara tipo Entero
                    $(value).attr("maxlength", "6");
                    $(value).attr("Mask", "integer");
                    
                    break;
                case "DEC":
                    //Setear mascara tipo Decimal
                    $(value).attr("maxlength", "6");
                    $(value).attr("Mask", "decimal");
                    break;
                case "FEC":
                    //Setear el formato de fecha
                    new Pe.GMD.UI.Web.Components.Calendar({
                        inputFrom: $(value)
                    });                    
                    break;
                case "ENC":
                    //Setear mascara tipo Password
                    $(value).attr('type', 'password');
                    break;
            }
        });
        Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
    };
    base.Show = function (opts) {
        base.Configurations.AfterGrabar = (opts.AfterGrabar == null || opts.AfterGrabar == undefined) ? null : opts.AfterGrabar;
        base.Control.DlgForm.setTitle(Pe.ElectroPeru.SGI.Presentacion.Politicas.ValorParametro.Resources.FormularioParametrosGenerales + " " + opts.title);

        base.Control.CodigoParametro = opts.data.codigoParametro;
        base.Control.CodigoParametroValor = opts.data.codigoValor;

        base.Control.DlgForm.getAjaxContent(
            {
                action: Pe.ElectroPeru.SGI.Presentacion.Politicas.ValorParametro.Actions.FormularioParametro,
                onSuccess: function () {
                    base.Ini();
                },
                data: opts.data
            });
    }
    base.Control = {
        DlgForm: new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Politicas.ValorParametro.Resources.FormularioParametrosGenerales /*+ " " + opts.title*/
        }),
        CodigoParametro: null,
        CodigoParametroValor: null,
        Validador: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        FrmParametroValorGuardar: function () { return $('#frmParametroValorGuardar'); },
        BtnCancelar: function () { return $('#btnCancelar'); },
        BtnGrabar: function () { return $('#btnGrabar'); },
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
                    message: Pe.ElectroPeru.SGI.Presentacion.Recursos.Validacion.ConfirmacionGuardar,
                    onAccept: function () {
                        var arrayValues = new Array();
                        $.each($("input[nombre = parameterValue]"), function (index, value) {
                            arrayValues.push({ Key: $(value).attr('idSeccion'), Value: $(value).val() });
                        });

                        $.each($("select[nombre = parameterValue]"), function (index, value) {
                            arrayValues.push({ Key: $(value).attr('idSeccion'), Value: $(value).val() });
                        });

                        base.Ajax.AjaxGrabar.data = {
                            CodigoParametro: base.Control.CodigoParametro,
                            CodigoValor: base.Control.CodigoParametroValor,
                            RegistroCadena: arrayValues
                        };
                        base.Ajax.AjaxGrabar.submit();
                    }
                });
            }
        },
        AjaxGrabarSuccess: function (data) {
            switch (data) {
                default:                    
                    base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Recursos.Validacion.EtiquetaConfirmacion });
                    if (base.Configurations.AfterGrabar != null) {
                        base.Configurations.AfterGrabar();
                    }
                    base.Control.DlgForm.close();
                    break;
            }
        }
    };
    base.Ajax = {
        AjaxGrabar: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Politicas.ValorParametro.Actions.GuardarParametro,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarSuccess
        })
    };
    base.Function = {
       
    };
};