/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD D43260443
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioDanioPropiedad');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioDanioPropiedad.Controller = function (opts) {
    var base = this;
    base.Ini = function () {
        if (opts != null && opts.AceptarSuccess != null && opts.AceptarSuccess)
            base.Event.AceptarSuccess = opts.AceptarSuccess;

        base.Control.FormularioModelo = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Models.FormularioDanioPropiedad;
        
        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DptFechaNotificacionPolicia(),
            minDateFrom: new Date(1900, 1, 1)
        });


        base.Control.BtnGrabarGeneralInfo().off('click');
        base.Control.BtnGrabarGeneralInfo().on('click', base.Event.BtnGrabarGeneralInfoClick);
        base.Control.BtnGrabarDanioPropiedadODetalles().off('click');
        base.Control.BtnGrabarDanioPropiedadODetalles().on('click', base.Event.BtnGrabarDanioPropiedadODetallesClick);

        base.Control.BtnCancelarInfo().on('click', base.Event.BtnCancelarInfoClick);
        base.Control.BtnCancelarDanioPropiedadODetalles().on('click', base.Event.BtnCancelarDanioPropiedadODetallesClick);

        base.Control.TxtCostoActualReparacionODetalles().off('change');
        base.Control.TxtCostoActualReparacionODetalles().on('change', base.Event.CalcularConsecuenciaActualProcesoChange);

        base.Control.TxtCostoPotencialReparacionODetalles().off('change');
        base.Control.TxtCostoPotencialReparacionODetalles().on('change', base.Event.CalcularConsecuenciaPotencialProcesoChange);

        base.Control.ValidadorInvestigacionPrioridad = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmInformacionGeneralPropiedad(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos
        });

        base.Control.ValidadorInvestigacionPrioridadOtros = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmOtrosDetallesPropiedad(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos
        });

        base.Control.DdlPropiedadDanioPropiedadInfo().off('change');
        base.Control.DdlPropiedadDanioPropiedadInfo().on('change', base.Event.DdlPropiedadDanioPropiedadInfoChange);

        base.Control.DdlPropietarioDanioPropiedadInfo().off('change');
        base.Control.DdlPropietarioDanioPropiedadInfo().on('change', base.Event.DdlPropietarioDanioPropiedadInfoChange);

        base.Control.DdlOpcionesDocumentoPropiedadODetalles().off('change');
        base.Control.DdlOpcionesDocumentoPropiedadODetalles().on('change', base.Event.DdlOpcionesDocumentoPropiedadODetallesChange);

        base.Control.SlcCompaniaSeguroODetalles().off('change');
        base.Control.SlcCompaniaSeguroODetalles().on('change', base.Event.SlcCompaniaSeguroODetallesChange);

        base.Control.SlcNotificacionPoliciaODetalles().off('change');
        base.Control.SlcNotificacionPoliciaODetalles().on('change', base.Event.SlcNotificacionPoliciaODetallesChange);


    };

    base.Show = function (opts) {        
        base.Control.CodigoConsecuenciaActual = opts.CodigoConsecuenciaActual;
        base.Control.CodigoConsecuenciaPotencial = opts.CodigoConsecuenciaPotencial;
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaFormularioEquipoDaniado,
            size: "size-wide",
            close: function () {
            }
        });

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.FormularioDanioPropiedad,
            onSuccess: function () {
                base.Ini();
            },
            data: opts
        });
    };

    base.Control = {
        FormularioModelo: null,
        CodigoEstadoInvestigacion: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),

        ValidadorInvestigacionPrioridad: null,
        ValidadorInvestigacionPrioridadOtros: null,

        CodigoConsecuenciaActual: null,
        CodigoConsecuenciaPotencial: null,

        DdlClasificacionPropiedadDanioPropiedadInfo: function () { return $('#ddlClasificacionPropiedadDanioPropiedadInfo'); },
        DdlPropiedadDanioPropiedadInfo: function () { return $('#ddlPropiedadDanioPropiedadInfo'); },
        TxtOtrosEspecificarPropitarioInfo: function () { return $('#txtOtrosEspecificarPropitarioInfo'); },
        TxtTipoPropiedadInfo: function () { return $('#txtTipoPropiedadInfo'); },
        DdlPropietarioDanioPropiedadInfo: function () { return $('#ddlPropietarioDanioPropiedadInfo'); },
        TxtOtrosEspecidicarPropiedadInfo: function () { return $('#txtOtrosEspecidicarPropiedadInfo'); },
        TxtDescripcionDanioInfo: function () { return $('#txtDescripcionDanioInfo'); },
        TxtAnioInfo: function () { return $('#txtAnioInfo'); },
        TxtPlacaInfo: function () { return $('#txtPlacaInfo'); },
        TxtMarcaInfo: function () { return $('#txtMarcaInfo'); },
        TxtModeloInfo: function () { return $('#txtModeloInfo'); },
        TxtMotorInfo: function () { return $('#txtMotorInfo'); },
        TxtColorInfo: function () { return $('#txtColorInfo'); },
        TxtSerieInfo: function () { return $('#txtSerieInfo'); },
        TxtConsecuenciaOtrosDetalles: function () { return $('#txtConsecuenciaOtrosDetalles'); },
        TxtPotencialOtrosDetalles: function () { return $('#txtPotencialOtrosDetalles'); },

        BtnCancelarInfo: function () { return $('#btnCancelarInfo'); },
        BtnGrabarGeneralInfo: function () { return $('#btnGrabarGeneralInfo'); },

        DdlOpcionesDocumentoPropiedadODetalles: function () { return $('#ddlOpcionesDocumentoPropiedadODetalles'); },
        TxtComentarioODetalles: function () { return $('#txtComentarioODetalles'); },
        SlcCompaniaSeguroODetalles: function () { return $('#slcCompaniaSeguroODetalles'); },
        TxtCompaniaSeguroODetalles: function () { return $('#txtCompaniaSeguroODetalles'); },
        TxtNumeroReclamoODetalles: function () { return $('#txtNumeroReclamoODetalles'); },
        SlcNotificacionPoliciaODetalles: function () { return $('#slcNotificacionPoliciaODetalles'); },
        DptFechaNotificacionPolicia: function () { return $('#dptFechaNotificacionPolicia'); },
        TxtNotificadoPorODetalles: function () { return $('#txtNotificadoPorODetalles'); },
        TxtNumeroInformePolicialODetalles: function () { return $('#txtNumeroInformePolicialODetalles'); },
        TxtCostoActualReparacionODetalles: function () { return $('#txtCostoActualReparacionODetalles'); },
        TxtCostoPotencialReparacionODetalles: function () { return $('#txtCostoPotencialReparacionODetalles'); },

        BtnCancelarDanioPropiedadODetalles: function () { return $('#btnCancelarDanioPropiedadODetalles'); },
        BtnGrabarDanioPropiedadODetalles: function () { return $('#btnGrabarDanioPropiedadODetalles'); },

        FrmInformacionGeneralPropiedad: function () { return $('#frmInformacionGeneralPropiedad'); },
        FrmOtrosDetallesPropiedad: function () { return $('#frmOtrosDetallesPropiedad'); },

        TxtActualConsecuenciaCategoriaDanioPropiedad: function () { return $('#txtActualConsecuenciaCategoriaDanioPropiedad'); },
        TxtPotencialConsecuenciaCategoriaDanioPropiedad: function () { return $('#txtPotencialConsecuenciaCategoriaDanioPropiedad'); },
    };

    base.Event = {

        CalcularConsecuenciaActualProcesoChange: function () {
            'use strict'
            if (base.Control.TxtCostoActualReparacionODetalles().val() != null && base.Control.TxtCostoActualReparacionODetalles().val() != '') {
                $('input[name="codigoConsecuenciaActualPropiedadModal"]').each(function (i) {
                    $(this).prop("checked", false);
                });
                var ValorA = base.Control.TxtCostoActualReparacionODetalles().val();
                var result = 0;
                var IdNombre = 0;
                if (base.Control.FormularioModelo.ListaCategoriaDanioPropiedad != null && base.Control.FormularioModelo.ListaCategoriaDanioPropiedad.length > 0) {
                    for (var i = 0; i < base.Control.FormularioModelo.ListaCategoriaDanioPropiedad.length; i++) {
                        var varValMin = base.Control.FormularioModelo.ListaCategoriaDanioPropiedad[i].ValorMinCategoriaTexto;
                        var varValMax = base.Control.FormularioModelo.ListaCategoriaDanioPropiedad[i].ValorMaxCategoriaTexto;

                        if (ValorA >= varValMin && ValorA >= varValMax) {
                            result = base.Control.FormularioModelo.ListaCategoriaDanioPropiedad[i].DescripcionConsecuenciaActual;
                            IdNombre = base.Control.FormularioModelo.ListaCategoriaDanioPropiedad[i].CodigoConsecuenciaActual;
                        }
                        if (ValorA >= varValMin && ValorA < varValMax) {
                            result = base.Control.FormularioModelo.ListaCategoriaDanioPropiedad[i].DescripcionConsecuenciaActual;
                            IdNombre = base.Control.FormularioModelo.ListaCategoriaDanioPropiedad[i].CodigoConsecuenciaActual;
                        }
                        if (ValorA > varValMin && ValorA < varValMax) {
                            result = base.Control.FormularioModelo.ListaCategoriaDanioPropiedad[i].DescripcionConsecuenciaActual;
                            IdNombre = base.Control.FormularioModelo.ListaCategoriaDanioPropiedad[i].CodigoConsecuenciaActual;
                        }
                    }
                    base.Control.TxtConsecuenciaOtrosDetalles().val(result);
                    base.Control.CodigoConsecuenciaActual = IdNombre;
                }
                $('#radioConsecuenciaActual_' + IdNombre).prop("checked", true);

            }
            else {
                $('input[name="codigoConsecuenciaActualPropiedadModal"]').each(function (i) {
                    $(this).prop("checked", false);
                });
                base.Control.TxtConsecuenciaOtrosDetalles().val('');
            }
        },
        CalcularConsecuenciaPotencialProcesoChange: function () {
            'use strict'
            if (base.Control.TxtCostoPotencialReparacionODetalles().val() != null && base.Control.TxtCostoPotencialReparacionODetalles().val() != '') {
                $('input[name="codigoConsecuenciaPotencialPropiedadModal"]').each(function (i) {
                    $(this).prop("checked", false);
                });
                var ValorA = base.Control.TxtCostoPotencialReparacionODetalles().val();
                var result = 0;
                var IdNombre = 0;
                if (base.Control.FormularioModelo.ListaCategoriaDanioPropiedad != null && base.Control.FormularioModelo.ListaCategoriaDanioPropiedad.length > 0) {
                    for (var i = 0; i < base.Control.FormularioModelo.ListaCategoriaDanioPropiedad.length; i++) {
                        var varValMin = base.Control.FormularioModelo.ListaCategoriaDanioPropiedad[i].ValorMinCategoriaTexto;
                        var varValMax = base.Control.FormularioModelo.ListaCategoriaDanioPropiedad[i].ValorMaxCategoriaTexto;

                        if (ValorA >= varValMin && ValorA >= varValMax) {
                            result = base.Control.FormularioModelo.ListaCategoriaDanioPropiedad[i].DescripcionConsecuenciaPotencial;
                            IdNombre = base.Control.FormularioModelo.ListaCategoriaDanioPropiedad[i].CodigoConsecuenciaPotencial;
                        }
                        if (ValorA >= varValMin && ValorA < varValMax) {
                            result = base.Control.FormularioModelo.ListaCategoriaDanioPropiedad[i].DescripcionConsecuenciaPotencial;
                            IdNombre = base.Control.FormularioModelo.ListaCategoriaDanioPropiedad[i].CodigoConsecuenciaPotencial;
                        }
                        if (ValorA > varValMin && ValorA < varValMax) {
                            result = base.Control.FormularioModelo.ListaCategoriaDanioPropiedad[i].DescripcionConsecuenciaPotencial;
                            IdNombre = base.Control.FormularioModelo.ListaCategoriaDanioPropiedad[i].CodigoConsecuenciaPotencial;
                        }
                    }
                    base.Control.TxtPotencialOtrosDetalles().val(result);
                    base.Control.CodigoConsecuenciaPotencial = IdNombre;
                }
                $('#radioConsecuenciaPotencial_' + IdNombre).prop("checked", true);
            }
            else {
                $('input[name="codigoConsecuenciaPotencialPropiedadModal"]').each(function (i) {
                    $(this).prop("checked", false);
                });
                base.Control.TxtPotencialOtrosDetalles().val('');
            }
        },

        DdlPropiedadDanioPropiedadInfoChange: function () {
            if (base.Control.DdlPropiedadDanioPropiedadInfo().val() != '') {
                if (base.Control.DdlPropiedadDanioPropiedadInfo().val() == "OTR") {
                    base.Control.TxtOtrosEspecificarPropitarioInfo().prop('disabled', false);
                }
                else {
                    base.Control.TxtOtrosEspecificarPropitarioInfo().prop('disabled', true);
                    base.Control.TxtOtrosEspecificarPropitarioInfo().val('');
                    base.Control.TxtOtrosEspecificarPropitarioInfo().attr('class', 'form-control');
                }

                if (base.Control.DdlPropiedadDanioPropiedadInfo().val() == "VEH" || base.Control.DdlPropiedadDanioPropiedadInfo().val() == "EQU") {
                    base.Event.HabilitarDetaInputs();
                }
                else {
                    base.Event.DesabilitarDetaInputs();
                }
            }
        },

        DesabilitarDetaInputs: function () {
            base.Control.TxtAnioInfo().prop('disabled', true);
            base.Control.TxtPlacaInfo().prop('disabled', true);
            base.Control.TxtMarcaInfo().prop('disabled', true);
            base.Control.TxtModeloInfo().prop('disabled', true);
            base.Control.TxtMotorInfo().prop('disabled', true);
            base.Control.TxtColorInfo().prop('disabled', true);
            base.Control.TxtSerieInfo().prop('disabled', true);
            base.Control.TxtAnioInfo().val('');
            base.Control.TxtPlacaInfo().val('');
            base.Control.TxtMarcaInfo().val('');
            base.Control.TxtModeloInfo().val('');
            base.Control.TxtMotorInfo().val('');
            base.Control.TxtColorInfo().val('');
            base.Control.TxtSerieInfo().val('');
            base.Control.TxtAnioInfo().attr('class', 'form-control');
            base.Control.TxtPlacaInfo().attr('class', 'form-control');
            base.Control.TxtMarcaInfo().attr('class', 'form-control');
            base.Control.TxtModeloInfo().attr('class', 'form-control');
            base.Control.TxtMotorInfo().attr('class', 'form-control');
            base.Control.TxtColorInfo().attr('class', 'form-control');
            base.Control.TxtSerieInfo().attr('class', 'form-control');
        },

        HabilitarDetaInputs: function () {
            base.Control.TxtAnioInfo().prop('disabled', false);
            base.Control.TxtPlacaInfo().prop('disabled', false);
            base.Control.TxtMarcaInfo().prop('disabled', false);
            base.Control.TxtModeloInfo().prop('disabled', false);
            base.Control.TxtMotorInfo().prop('disabled', false);
            base.Control.TxtColorInfo().prop('disabled', false);
            base.Control.TxtSerieInfo().prop('disabled', false);
        },

        DdlPropietarioDanioPropiedadInfoChange: function () {
            if (base.Control.DdlPropietarioDanioPropiedadInfo().val() != '') {
                if (base.Control.DdlPropietarioDanioPropiedadInfo().val() == "OTROS") {
                    base.Control.TxtOtrosEspecidicarPropiedadInfo().prop('disabled', false);
                }
                else {
                    base.Control.TxtOtrosEspecidicarPropiedadInfo().prop('disabled', true);
                    base.Control.TxtOtrosEspecidicarPropiedadInfo().val('');
                    base.Control.TxtOtrosEspecidicarPropiedadInfo().attr('class', 'form-control');
                }
            }
        },

        DdlOpcionesDocumentoPropiedadODetallesChange: function () {
            if (base.Control.DdlOpcionesDocumentoPropiedadODetalles().val() != '') {
                if (base.Control.DdlOpcionesDocumentoPropiedadODetalles().val() == "02" || base.Control.DdlOpcionesDocumentoPropiedadODetalles().val() == "03") {
                    base.Control.TxtComentarioODetalles().prop('disabled', false);
                }
                else {
                    base.Control.TxtComentarioODetalles().prop('disabled', true);
                    base.Control.TxtComentarioODetalles().val('');
                    base.Control.TxtComentarioODetalles().attr('class', 'form-control');
                }
            }
        },

        SlcCompaniaSeguroODetallesChange: function () {
            if (base.Control.SlcCompaniaSeguroODetalles().val() != '') {
                if (base.Control.SlcCompaniaSeguroODetalles().val() == "SI") {
                    base.Control.TxtNumeroReclamoODetalles().prop('disabled', false);
                    base.Control.TxtCompaniaSeguroODetalles().prop('disabled', false);
                }
                else {
                    base.Control.TxtNumeroReclamoODetalles().prop('disabled', true);
                    base.Control.TxtCompaniaSeguroODetalles().prop('disabled', true);
                    base.Control.TxtNumeroReclamoODetalles().val('');
                    base.Control.TxtCompaniaSeguroODetalles().val('');
                    base.Control.TxtNumeroReclamoODetalles().attr('class', 'form-control');
                    base.Control.TxtCompaniaSeguroODetalles().attr('class', 'form-control');
                }
            }
        },

        SlcNotificacionPoliciaODetallesChange: function () {
            if (base.Control.SlcNotificacionPoliciaODetalles().val() != '') {
                if (base.Control.SlcNotificacionPoliciaODetalles().val() == "SI") {
                    base.Control.DptFechaNotificacionPolicia().prop('disabled', false);
                    base.Control.TxtNotificadoPorODetalles().prop('disabled', false);
                    base.Control.TxtNumeroInformePolicialODetalles().prop('disabled', false);

                }
                else {
                    base.Control.DptFechaNotificacionPolicia().prop('disabled', true);
                    base.Control.TxtNotificadoPorODetalles().prop('disabled', true);
                    base.Control.TxtNumeroInformePolicialODetalles().prop('disabled', true);
                    base.Control.DptFechaNotificacionPolicia().val('');
                    base.Control.TxtNotificadoPorODetalles().val('');
                    base.Control.TxtNumeroInformePolicialODetalles().val('');
                    base.Control.DptFechaNotificacionPolicia().attr('class', 'form-control');
                    base.Control.TxtNotificadoPorODetalles().attr('class', 'form-control');
                    base.Control.TxtNumeroInformePolicialODetalles().attr('class', 'form-control');
                }
            }
        },

        BtnGrabarGeneralInfoClick: function () {
            'use strict'
            if (base.Control.ValidadorInvestigacionPrioridad.isValid()) {

                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarGeneralInfo.data = [{
                            CodigoInvestigacionPropiedad: base.Control.FormularioModelo.InvestigacionPropiedad.CodigoInvestigacionPropiedad,
                            CodigoInvestigacion: base.Control.FormularioModelo.InvestigacionPropiedad.CodigoInvestigacion,
                            CodigoClasificacionDanio: base.Control.DdlClasificacionPropiedadDanioPropiedadInfo().val(),
                            CodigoPropiedad: base.Control.DdlPropiedadDanioPropiedadInfo().val(),
                            OtrosPropiedad: base.Control.TxtOtrosEspecificarPropitarioInfo().val(),
                            TipoPropiedad: base.Control.TxtTipoPropiedadInfo().val(),
                            CodigoPropietario: base.Control.DdlPropietarioDanioPropiedadInfo().val(),
                            OtrosPropietario: base.Control.TxtOtrosEspecidicarPropiedadInfo().val(),
                            DescripcionDanio: base.Control.TxtDescripcionDanioInfo().val(),
                            PropiedadAnio: base.Control.TxtAnioInfo().val(),
                            PropiedadPlaca: base.Control.TxtPlacaInfo().val(),
                            PropiedadMarca: base.Control.TxtMarcaInfo().val(),
                            PropiedadModelo: base.Control.TxtModeloInfo().val(),
                            PropiedadMotor: base.Control.TxtMotorInfo().val(),
                            PropiedadColor: base.Control.TxtColorInfo().val(),
                            PropiedadSerie: base.Control.TxtSerieInfo().val(),
                        }];
                        base.Ajax.AjaxGrabarGeneralInfo.submit();
                    }
                });
            }
            else {
                $("#frmInformacionGeneralPropiedadSummaryErrorMessage").empty();
                $("#frmInformacionGeneralPropiedadSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },

        BtnGrabarDanioPropiedadODetallesClick: function () {
            'use strict'
            if (base.Control.ValidadorInvestigacionPrioridadOtros.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarODetalles.data = {
                            CodigoInvestigacionPropiedadOtros: base.Control.FormularioModelo.InvestigacionPropiedad.CodigoInvestigacionPropiedadOtros,
                            CodigoInvestigacionPropiedad: base.Control.FormularioModelo.InvestigacionPropiedad.CodigoInvestigacionPropiedad,
                            CodigoInvestigacion: base.Control.FormularioModelo.InvestigacionPropiedad.CodigoInvestigacion,
                            CodigoInvestigacionCategoria: base.Control.FormularioModelo.InvestigacionPropiedad.CodigoInvestigacionCategoria,
                            CodigoDocumentoAldia: base.Control.DdlOpcionesDocumentoPropiedadODetalles().val(),
                            Comentario: base.Control.TxtComentarioODetalles().val(),
                            IndicadorReclamacionSeguro: base.Control.SlcCompaniaSeguroODetalles().val(),
                            NumeroReclamo: base.Control.TxtNumeroReclamoODetalles().val(),
                            CompaniaSeguro: base.Control.TxtCompaniaSeguroODetalles().val(),
                            IndicadorNotificacionPolicia: base.Control.SlcNotificacionPoliciaODetalles().val(),
                            FechaNotificacionPoliciaString: base.Control.DptFechaNotificacionPolicia().val(),
                            PersonaNotificaPolicia: base.Control.TxtNotificadoPorODetalles().val(),
                            NumeroInformePolicial: base.Control.TxtNumeroInformePolicialODetalles().val(),
                            CostoActualReparacion: base.Control.TxtCostoActualReparacionODetalles().val(),
                            CostoPotencialReparacion: base.Control.TxtCostoPotencialReparacionODetalles().val(),
                            CodigoConsecuenciaActual: base.Control.CodigoConsecuenciaActual,
                            CodigoConsecuenciaPotencial: base.Control.CodigoConsecuenciaPotencial,
                            CodigoCategoriaTextoActual: $('input[name="codigoConsecuenciaActualPropiedadModal"]:checked').data() != undefined ? $('input[name="codigoConsecuenciaActualPropiedadModal"]:checked').data().codigo : '',
                            CodigoCategoriaTextoPotencial: $('input[name="codigoConsecuenciaPotencialPropiedadModal"]:checked').data() != undefined ? $('input[name="codigoConsecuenciaPotencialPropiedadModal"]:checked').data().codigo : '',
                        };

                        base.Ajax.AjaxGrabarODetalles.submit();
                    }
                });
            } else {
                $("#frmOtrosDetallesPropiedadSummaryErrorMessage").empty();
                $("#frmOtrosDetallesPropiedadSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },

        AjaxGrabarGeneralInfoSuccess: function (resultado) {
            if (resultado.Result.CodigoInvestigacionPropiedad != null) {
                base.Control.BtnGrabarDanioPropiedadODetalles().prop('disabled', false);
                base.Control.FormularioModelo.InvestigacionPropiedad.CodigoInvestigacionPropiedad = resultado.Result.CodigoInvestigacionPropiedad;
                base.Control.FormularioModelo.InvestigacionPropiedad.CodigoInvestigacion = resultado.Result.CodigoInvestigacion;
                if (base.Event.AceptarSuccess != null) {
                    base.Event.AceptarSuccess();
                }
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },

        AjaxGrabarODetallesSuccess: function (resultado) {
            if (resultado.Result.CodigoConsecuenciaActual != '' && resultado.Result.CodigoConsecuenciaActual != null
                 && resultado.Result.CodigoConsecuenciaPotencial != '' && resultado.Result.CodigoConsecuenciaPotencial != null) {

                if (base.Event.AceptarSuccess != null) {
                    base.Event.AceptarSuccess();
                }
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });

                base.Control.TxtActualConsecuenciaCategoriaDanioPropiedad().val(resultado.Result.DescripcionConsecuenciaActual);
                base.Control.TxtPotencialConsecuenciaCategoriaDanioPropiedad().val(resultado.Result.DescripcionConsecuenciaPotencial);
                $('input[name="consecuenciaInvestigacionCategoriaDanioActual"]').each(function (i) {
                    $(this).prop("checked", false);
                });
                $('input[name="consecuenciaInvestigacionCategoriaDanioPotencial"]').each(function (i) {
                    $(this).prop("checked", false);
                });
                $('#radioCategoriaDanioActual_' + resultado.Result.CodigoConsecuenciaActual).prop("checked", true);
                $('#radioCategoriaDanioPotencial_' + resultado.Result.CodigoConsecuenciaPotencial).prop("checked", true);
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });

            }
        },
    };

    base.Ajax = {
        AjaxGrabarGeneralInfo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarInvestigacionPropiedad,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarGeneralInfoSuccess
        }),

        AjaxGrabarODetalles: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarInvestigacionPropiedadOtros,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarODetallesSuccess
        }),
    };
    base.Function = {};
};