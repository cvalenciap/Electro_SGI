/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD D43260443
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioPerdidaProceso');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioPerdidaProceso.Controller = function (opts) {
    var base = this;

    base.Ini = function () {        
        if (opts != null && opts.AceptarSuccess != null && opts.AceptarSuccess)
            base.Event.AceptarSuccess = opts.AceptarSuccess;

        base.Control.FormularioModelo = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Models.FormularioPerdidaProceso;
        if (base.Control.FormularioModelo.ListaInvestigacionTipoPerdidaProceso != null && base.Control.FormularioModelo.ListaInvestigacionTipoPerdidaProceso.length > 0) {
            for (var i = 0; i < base.Control.FormularioModelo.ListaInvestigacionTipoPerdidaProceso.length; i++) {
                if (base.Control.FormularioModelo.ListaInvestigacionTipoPerdidaProceso[i].CodigoTipoPerdidaProceso == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioPerdidaProceso.DatosConstantes.OtrosPerdidaProceso) {
                    base.Control.TxtOtros().val(base.Control.FormularioModelo.ListaInvestigacionTipoPerdidaProceso[i].DescripcionOtros);                    
                    if (base.Control.FormularioModelo.ListaInvestigacionTipoPerdidaProceso[i].DescripcionOtros != '')
                        base.Control.TxtOtros().prop('disabled', false);                    
                }
                $('#id_' + base.Control.FormularioModelo.ListaInvestigacionTipoPerdidaProceso[i].CodigoTipoPerdidaProceso).prop("checked", true);
            }
        }

        base.Control.BtnGrabarInformacionPerdidaProceso().off('click');
        base.Control.BtnGrabarInformacionPerdidaProceso().on('click', base.Event.BtnGrabarInformacionPerdidaProcesoClick);

        base.Control.ValidadorPerdidaProceso = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmPerdidaProceso(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraModal()
        });

        base.Control.SlcConsecuenciaActualProceso().off('change');
        base.Control.SlcConsecuenciaActualProceso().on('change', base.Event.SlcConsecuenciaActualProcesoChange);

        base.Control.SlcConsecuenciaPotencialProceso().off('change');
        base.Control.SlcConsecuenciaPotencialProceso().on('change', base.Event.SlcConsecuenciaPotencialProcesoChange);

        $('.chkPerdidaProceso').change(function (){
            if (this.value == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioPerdidaProceso.DatosConstantes.OtrosPerdidaProceso) {
                if (this.checked) {
                    base.Control.TxtOtros().prop('disabled', false);
                }
                else {
                    base.Control.TxtOtros().val('');
                    base.Control.TxtOtros().prop('disabled', true);
                }                
            } 
        });        
    };

    base.Show = function (opts) {        
        base.Control.DlgFormModalPerdida = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaFormularioProcesoImpactado,
            size: "size-wide",
            close: function () {
            }
        });

        base.Control.DlgFormModalPerdida.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.FormularioPerdidaProceso,
            onSuccess: function () {
                base.Ini();
            },
            data: opts
        });
    };

    base.Control = {
        CodigoEstadoInvestigacion : null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        ValidadorPerdidaProceso: null,
        FormularioModelo: null,
        FrmPerdidaProceso: function () { return $('#frmPerdidaProceso'); },
        
        BtnGrabarInformacionPerdidaProceso: function () { return $('#btnGrabarInformacionPerdidaProceso'); },
        TxtProcesoImpactado: function () { return $('#txtProcesoImpactado'); },
        TxtDescripcionPerdidaProceso: function () { return $('#txtDescripcionPerdidaProceso'); },
        TxtDescripcionConsecuenciaActual: function () { return $('#txtDescripcionConsecuenciaActual'); },
        TxtDescripcionConsecuenciaPotencial: function () { return $('#txtDescripcionConsecuenciaPotencial'); },
        TxtOtros: function () { return $('#txtOtros'); },
        SlcConsecuenciaActualProceso: function () { return $('#slcConsecuenciaActualProceso'); },
        SlcConsecuenciaPotencialProceso: function () { return $('#slcConsecuenciaPotencialProceso'); },

        TxtActualConsecuenciaCategoriaPerdidaProceso: function () { return $('#txtActualConsecuenciaCategoriaPerdidaProceso'); },
        TxtPotencialConsecuenciaCategoriaPerdidaProceso: function () { return $('#txtPotencialConsecuenciaCategoriaPerdidaProceso'); },
    };

    base.Function = {
        ValidacionExtraModal: function () {
            var validaciones = new Array();
            validaciones.push({
                Event: function () {
                    var resultado = true;                    
                    var cont = 0;
                    $('.chkPerdidaProceso:checked').each(function (i) {
                        cont++;
                    });

                    if (cont < 1) {
                        resultado = false;
                    }

                    if (resultado) {
                        $("#lblCheck").attr('class', 'chkPerdidaProceso');
                    }
                    else {
                        $("#lblCheck").attr('class', 'chkPerdidaProceso hasError');
                    }

                    return resultado;
                }
            });
            validaciones.push({
                Event: function () {
                    var resultado = true;
                    var cont = 0;
                    $('.chkPerdidaProceso:checked').each(function (i) {
                        if ($(this).val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioPerdidaProceso.DatosConstantes.OtrosPerdidaProceso
                            && (base.Control.TxtOtros().val() == '' || base.Control.TxtOtros().val() == null)) {
                            resultado = false;
                        }
                    });                                        
                    if (resultado) {
                        base.Control.TxtOtros().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtOtros().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });
            return validaciones;
        },
    };

    base.Event = {        
        BtnGrabarInformacionPerdidaProcesoClick: function () {
            'use strict'            
            if (base.Control.ValidadorPerdidaProceso.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        var ListaTipoPerdidaProceso = [];
                        $('.chkPerdidaProceso:checked').each(function (i) {
                            var that = $(this).val();
                            if(that == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioPerdidaProceso.DatosConstantes.OtrosPerdidaProceso)
                            {
                                ListaTipoPerdidaProceso.push({
                                    CodigoTipoPerdidaProceso: that,
                                    DescripcionOtros: base.Control.TxtOtros().val()
                                });
                            }
                            else
                            {
                                ListaTipoPerdidaProceso.push({
                                    CodigoTipoPerdidaProceso: that
                                });
                            }
                        });
                
                        base.Ajax.AjaxRegistrarInvestigacionPerdidaProceso.data = {
                            CodigoInvestigacionPerdidaProceso: base.Control.FormularioModelo.InvestigacionPerdidaProceso.CodigoInvestigacionPerdidaProceso,
                            CodigoInvestigacion: base.Control.FormularioModelo.InvestigacionPerdidaProceso.CodigoInvestigacion,
                            ProcesoImpactado: base.Control.TxtProcesoImpactado().val(),
                            DescripcionPerdidaProceso: base.Control.TxtDescripcionPerdidaProceso().val(),
                            CodigoInvestigacionCategoria: base.Control.FormularioModelo.InvestigacionPerdidaProceso.CodigoInvestigacionCategoria,
                            CodigoConsecuenciaActual: base.Control.SlcConsecuenciaActualProceso().val(),
                            CodigoConsecuenciaPotencial: base.Control.SlcConsecuenciaPotencialProceso().val(),
                            CodigoCategoriaTextoActual: $('input[name="codigoConsecuenciaActualPerdidaModal"]:checked').data() != undefined ? $('input[name="codigoConsecuenciaActualPerdidaModal"]:checked').data().codigo : '',
                            CodigoCategoriaTextoPotencial: $('input[name="codigoConsecuenciaPotencialPerdidaModal"]:checked').data() != undefined ? $('input[name="codigoConsecuenciaPotencialPerdidaModal"]:checked').data().codigo : '',
                            ListaTipoPerdidaProceso: ListaTipoPerdidaProceso
                        };

                        base.Ajax.AjaxRegistrarInvestigacionPerdidaProceso.submit();
                    }
                });
            }
            else {
                $('#frmPerdidaProcesoSummaryErrorMessage').empty();
                $('#frmPerdidaProcesoSummaryErrorMessage').append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },
        AjaxRegistrarInvestigacionPerdidaProcesoSuccess: function (resultado) {
            if (resultado.Result.CodigoConsecuenciaActual != '' && resultado.Result.CodigoConsecuenciaActual != null
                && resultado.Result.CodigoConsecuenciaPotencial != '' && resultado.Result.CodigoConsecuenciaPotencial != null) {
                if (base.Event.AceptarSuccess != null) 
                    base.Event.AceptarSuccess();                

                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });

                base.Control.TxtActualConsecuenciaCategoriaPerdidaProceso().val(resultado.Result.DescripcionConsecuenciaActual);
                base.Control.TxtPotencialConsecuenciaCategoriaPerdidaProceso().val(resultado.Result.DescripcionConsecuenciaPotencial);
                $('input[name="consecuenciaInvestigacionCategoriaPerdidaActual"]').each(function (i) {
                    $(this).prop("checked", false);
                });
                $('input[name="consecuenciaInvestigacionCategoriaPerdidaPotencial"]').each(function (i) {
                    $(this).prop("checked", false);
                });
                $('#radioCategoriaPerdidaActual_' + resultado.Result.CodigoConsecuenciaActual).prop("checked", true);
                $('#radioCategoriaPerdidaPotencial_' + resultado.Result.CodigoConsecuenciaPotencial).prop("checked", true);
            }
            else
            {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        SlcConsecuenciaActualProcesoChange: function () {
            'use strict'            
            if (base.Control.SlcConsecuenciaActualProceso().val() != null && base.Control.SlcConsecuenciaActualProceso().val() != '')
            {
                $('input[name="codigoConsecuenciaActualPerdidaModal"]').each(function (i) {
                    $(this).prop("checked", false);
                });
                $('#radioConsecuenciaActual_' + base.Control.SlcConsecuenciaActualProceso().val()).prop("checked", true);
                base.Control.TxtDescripcionConsecuenciaActual().val($('#radioConsecuenciaActual_' + base.Control.SlcConsecuenciaActualProceso().val()).data().descripcion);
            }
            else
            {
                $('input[name="codigoConsecuenciaActualPerdidaModal"]').each(function (i) {
                    $(this).prop("checked", false);
                });
                base.Control.TxtDescripcionConsecuenciaActual().val('');
            }
        },
        SlcConsecuenciaPotencialProcesoChange: function () {
            'use strict'
            if (base.Control.SlcConsecuenciaPotencialProceso().val() != null && base.Control.SlcConsecuenciaPotencialProceso().val() != '') {
                $('input[name="codigoConsecuenciaPotencialPerdidaModal"]').each(function (i) {
                    $(this).prop("checked", false);
                });
                $('#radioConsecuenciaPotencial_' + base.Control.SlcConsecuenciaPotencialProceso().val()).prop("checked", true);
                base.Control.TxtDescripcionConsecuenciaPotencial().val($('#radioConsecuenciaPotencial_' + base.Control.SlcConsecuenciaPotencialProceso().val()).data().descripcion);
            }
            else
            {
                $('input[name="codigoConsecuenciaPotencialPerdidaModal"]').each(function (i) {
                    $(this).prop("checked", false);
                });
                base.Control.TxtDescripcionConsecuenciaPotencial().val('');
            }
        },
    };

    base.Ajax = {
        AjaxRegistrarInvestigacionPerdidaProceso: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarInvestigacionPerdidaProceso,
            autoSubmit: false,
            onSuccess: base.Event.AjaxRegistrarInvestigacionPerdidaProcesoSuccess
        }),
        AjaxRegistrarInvestigacionCategoriaDetalle: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarInvestigacionCategoriaDetalle,
            autoSubmit: false,
            onSuccess: base.Event.AjaxRegistrarInvestigacionCategoriaDetalleSuccess
        }),        
    };
};
