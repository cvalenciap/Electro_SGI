/// <summary>
/// Script de controlador del layout del site.
/// </summary>
/// <remarks>
/// Creacion: 	GMD(FMO) 24/03/2015
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Politicas.Trabajador.FormularioTrabajadorSuplente');
Pe.ElectroPeru.SGI.Presentacion.Politicas.Trabajador.FormularioTrabajadorSuplente.Controller = function (opts) {
    var base = this;
    base.Ini = function () {
        'use strict'
        base.Event.GrabarSuccess = (opts.GrabarSuccess != null && opts.GrabarSuccess) ? opts.GrabarSuccess : null;
        base.Control.BtnGrabar().click(base.Event.BtnGrabarClick);
        base.Control.BtnCancelar().click(base.Event.BtnCancelarClick);
        
        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.TxtFechaInicio(),
            inputTo: base.Control.TxtFechaFin()
        });

        base.Control.TxtFechaFin().val(Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.General.Trabajador.TrabajadorSuplenteModel.Model.TrabajadorSuplente.FechaFinString);

        base.Control.DlgFormularioGrabar = new Pe.GMD.UI.Web.Components.Message();

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmTrabajadorSuplenteRegistro(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Recursos.Validacion
        });

        base.Control.DlgForm.setTitle(Pe.ElectroPeru.SGI.Presentacion.Politicas.Trabajador.EtiquetaTituloPrincipalSuplente + " " + base.Control.HdnNombreTrabajador().val());

        base.Control.TfSuplente = new Pe.GMD.UI.Web.Components.TokenField({
            data: Pe.ElectroPeru.SGI.Presentacion.Politicas.Trabajador.Actions.BuscarTrabajadorUO,
            target: base.Control.TxtSuplente(),
            queryParam: "filtroReq", searchingText: 'Buscando Responsable..', resultsLimit: 1,
            noResultsText: 'Trabajador no encontrado..', hintText: 'Digite nombre del Responsable',
            propertyToSearch: 'NombreCompleto', tokenValue: 'CodigoTrabajador',
            prePopulate: base.Function.AdaptarListaToken(Pe.ElectroPeru.SGI.Presentacion.Core.ViewModel.General.Trabajador.TrabajadorSuplenteModel.Model.ListaNombreRepresentante)
        });

    };

    base.Control = {
        GrabarSuccess: null,
        DlgForm: new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Politicas.Trabajador.EtiquetaTituloPrincipalSuplente
        }),
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        FrmTrabajadorSuplenteRegistro: function () { return $('#frmTrabajadorSuplenteRegistro'); },
        HdnCodigoTrabajador: function () { return $('#hdnCodigoTrabajador'); },
        HdnNombreTrabajador: function () { return $('#hdnNombreTrabajador'); },
        TxtSuplente: function () { return $('#txtSuplente'); },
        ChckActivo: function () { return $('#chckActivo'); },
        TxtFechaInicio: function () { return $('#txtFechaInicio'); },
        TxtFechaFin: function () { return $('#txtFechaFin'); },
        TfSuplente: null,
        DlgFormularioGrabar: null,

        BtnCancelar: function () { return $('#btnCancelarRegistroSuplente'); },
        BtnGrabar: function () { return $('#btnGrabarRegistroSuplente'); }
    };

    base.Event = {
        
        BtnCancelarClick: function () {
            'use strict'
            base.Control.DlgForm.close();
        },

        BtnGrabarClick: function () {
            'use strict'
           
            if (base.Control.TxtSuplente().tokenInput("get").length == 0) {
                base.Control.DlgFormularioGrabar.Error({
                    title: Pe.ElectroPeru.SGI.Presentacion.Recursos.Validacion.EtiquetaituloError,
                    message: Pe.ElectroPeru.SGI.Presentacion.Recursos.Validacion.MensajeErrorSuplente
                });
                return;
            }

            if (base.Control.Validador.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Politicas.Trabajador.EtiquetaTituloConfirmar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Recursos.Validacion.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabar.data = { 
                            CodigoTrabajador: base.Control.HdnCodigoTrabajador().val(),
                            CodigoSuplente: base.Control.TxtSuplente().tokenInput("get")[0].id,
                            FechaInicio: base.Control.TxtFechaInicio().val(),
                            FechaFin: base.Control.TxtFechaFin().val(),
                            Activo: base.Control.ChckActivo().is(':checked')
                        };
                        base.Ajax.AjaxGrabar.submit();
                    }
                });
            }
        },
        AjaxGrabarSuccess: function (data) {
            'use strict'
            switch (data) {
                default:
                    base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Recursos.Validacion.EtiquetaConfirmacion });
                    if (base.Event.GrabarSuccess != null) {
                        base.Event.GrabarSuccess();
                    }
                    base.Control.DlgForm.close();
                    break;
            }
        }
    };

    base.Ajax = {
        AjaxGrabar: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Politicas.Trabajador.Actions.RegistrarTrabajadorSuplente,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarSuccess
        })
    };
    base.Function = {
        AdaptarListaToken: function (diccionario) {
            var lista = new Array();

            $.each(diccionario, function (index, value) {
                lista.push({
                    CodigoTrabajador: index, NombreCompleto: value
                });

            });

            return lista;
        },
    };
    base.Show = function (codigoTrabajador) {
        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Politicas.Trabajador.Actions.FormularioTrabajadorSuplente,
            onSuccess: function () {
                base.Ini();
            },
            data: codigoTrabajador
        });
    };
};