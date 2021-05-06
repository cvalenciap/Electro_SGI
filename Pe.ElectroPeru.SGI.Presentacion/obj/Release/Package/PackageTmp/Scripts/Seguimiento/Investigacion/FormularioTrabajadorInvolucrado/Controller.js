/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 08022017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioTrabajadorInvolucrado');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioTrabajadorInvolucrado.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Event.BuscarSuccess = (opts.BuscarSuccess != null && opts.BuscarSuccess) ? opts.BuscarSuccess : null;
        base.Control.FormularioInvolucradoModel = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Models.InvestigacionInvolucradoModel;
        
        base.Control.BtnAbrirCalificacion().off('click');
        base.Control.BtnAbrirCalificacion().on('click', base.Event.BtnAbrirCalificacionInvolucrado);
        base.Control.DlgFormularioCalificacionFatigaPersonal = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCalificacionFatigaPersonal.Controller();

        base.Control.BtnBuscarEmpresaInvolucrado().off('click');
        base.Control.BtnBuscarEmpresaInvolucrado().on('click', base.Event.BtnBuscarEmpresaInvolucrado);

        base.Control.DlgFormularioBuscarColaboradorInvolucrado = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.BuscarColaboradorInvolucradoSuccess
        });
        if (base.Control.HdnCodigoTipoEmpresa().val() == "02") {
            base.Control.BtnBuscarDuenioContratoTrabajo().attr("disabled", false);
            base.Control.TxtAnioTiempoContratistaExperienciaInvolucrado().attr("disabled", false);
            base.Control.DdlMesesTiempoContratistaExperienciaInvolucrado().attr("disabled", false);
        } else {
            base.Control.BtnBuscarDuenioContratoTrabajo().attr("disabled", true);
            base.Control.TxtAnioTiempoContratistaExperienciaInvolucrado().attr("disabled", true);
            base.Control.DdlMesesTiempoContratistaExperienciaInvolucrado().attr("disabled", true);
        }

        $('#frmFatigaColaboradorInvolucrado h2').css({ 'margin-top': '0px' });
        $('#spnIndiceFatiga').css({ 'color': 'black' });
        /////   INI TAB - INFORMACION GENERAL
        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaNacimientoInformacionInvolucrado(),
            minDateFrom: new Date(1900, 1, 1)
        });
        base.Control.BtnGrabarInformacionPersonaInvolucrada().off('click');
        base.Control.BtnGrabarInformacionPersonaInvolucrada().on('click', base.Event.BtnGrabarInformacionPersonaInvolucradaClick);

        base.Control.ValidadorDetalle = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmInformacionGeneralPersonaInvolucrada(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraDetallePersonaInvolucrada()
        });

        base.Control.TxtNTrabajadoresAfiliadosEmpresaInvolucrado().off('keypress');
        base.Control.TxtNTrabajadoresAfiliadosEmpresaInvolucrado().on('keypress', base.Event.TxtSoloNumerosKeypress);

        base.Control.TxtNTrabajadoresNoAfiliadosEmpresaInvolucrado().off('keypress');
        base.Control.TxtNTrabajadoresNoAfiliadosEmpresaInvolucrado().on('keypress', base.Event.TxtSoloNumerosKeypress);


        /////   INI TAB-EMRPESA
        base.Control.BtnBuscarEmpresaPersonaInvolucrada().off('click');
        base.Control.BtnBuscarEmpresaPersonaInvolucrada().on('click', base.Event.BtnBuscarEmpresaPersonaInvolucradaClick);

        base.Control.DlgFormularioEmpresaPersonaInvolucrada = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.FormularioBuscadorEmpresa.Controller({
            AceptarSuccess: base.Event.BuscarEmpresaPersonaInvolucradaSuccess
        });

        base.Control.DlgFormularioDuenioContratoTrabajo = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.BuscarDuenioContratoTrabajoSuccess
        });

        base.Control.BtnGrabarEmpresaPersonaInvolucrada().off('click');
        base.Control.BtnGrabarEmpresaPersonaInvolucrada().on('click', base.Event.BtnGrabarEmpresaPersonaInvolucradaClick);

        base.Control.BtnBuscarDuenioContratoTrabajo().off('click');
        base.Control.BtnBuscarDuenioContratoTrabajo().on('click', base.Event.BtnBuscarDuenioContratoTrabajoClick);

        base.Control.DdlProyectoInformacionInvolucrado().off('change');
        base.Control.DdlProyectoInformacionInvolucrado().on('change', base.Event.DdlProyectoInformacionInvolucradoChange);

        base.Control.DdlDepartamentoInformacionInvolucrado().off('change');
        base.Control.DdlDepartamentoInformacionInvolucrado().on('change', base.Event.DdlDepartamentoInformacionInvolucradoChange);

        base.Control.DdlAreaInformacionInvolucrado().off('change');
        base.Control.DdlAreaInformacionInvolucrado().on('change', base.Event.DdlAreaInformacionInvolucradoChange);

        base.Control.DtpFechaNacimientoInformacionInvolucrado().off('change');
        base.Control.DtpFechaNacimientoInformacionInvolucrado().on('change', base.Event.CalcularEdad);
        base.Control.DtpFechaNacimientoInformacionInvolucrado().trigger('change');

        base.Control.DdlActividadEmpresaRiesgoInvolucrado().off('change');
        base.Control.DdlActividadEmpresaRiesgoInvolucrado().on('change', base.Event.DdlActividadEmpresaRiesgoInvolucradoChange);
        base.Control.DdlActividadEmpresaRiesgoInvolucrado().trigger('change');

        base.Control.DdlRecibioEntrenamientoTrabajoInvolucrado().off('change');
        base.Control.DdlRecibioEntrenamientoTrabajoInvolucrado().on('change', base.Event.DdlRecibioEntrenamientoTrabajoInvolucradoChange);
        base.Control.DdlRecibioEntrenamientoTrabajoInvolucrado().trigger('change');

        base.Control.DdlLicenciaConducirExperienciaInvolucrado().off('change');
        base.Control.DdlLicenciaConducirExperienciaInvolucrado().on('change', base.Event.DdlLicenciaConducirExperienciaInvolucradoChange);
        base.Control.DdlLicenciaConducirExperienciaInvolucrado().trigger('change');

        base.Control.DdlLicenciaInternaExperienciaInvolucrado().off('change');
        base.Control.DdlLicenciaInternaExperienciaInvolucrado().on('change', base.Event.DdlLicenciaInternaExperienciaInvolucradoChange);
        base.Control.DdlLicenciaInternaExperienciaInvolucrado().trigger('change');

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmEmpresaColaboradorInvolucrado(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraEmpresaPersonaInvolucrada()
        });

        base.Control.ValidadorCalculo = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmEmpresaColaboradorInvolucrado(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos
            //validationsExtra: base.Function.ValidacionExtraEmpresaPersonaInvolucrada()
        });

        /////   INI TAB-TRABAJO Y EXPERIENCIA
        base.Control.BtnGrabarExperienciaPersonaInvolucrada().off('click');
        base.Control.BtnGrabarExperienciaPersonaInvolucrada().on('click', base.Event.BtnGrabarExperienciaPersonaInvolucradaClick);

        base.Control.ValidadorExperiencia = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmExperienciaColaboradorInvolucrado(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraExperienciaPersonaInvolucrada()
        });

        base.Control.TxtAnioNegocioExperienciaInvolucrado().off('keypress');
        base.Control.TxtAnioNegocioExperienciaInvolucrado().on('keypress', base.Event.TxtSoloNumerosKeypress);

        base.Control.TxtAnioPuestoExperienciaInvolucrado().off('keypress');
        base.Control.TxtAnioPuestoExperienciaInvolucrado().on('keypress', base.Event.TxtSoloNumerosKeypress);

        base.Control.TxtAnioTiempoContratistaExperienciaInvolucrado().off('keypress');
        base.Control.TxtAnioTiempoContratistaExperienciaInvolucrado().on('keypress', base.Event.TxtSoloNumerosKeypress);

        base.Control.TxtAnioTiempoProyectoExperienciaInvolucrado().off('keypress');
        base.Control.TxtAnioTiempoProyectoExperienciaInvolucrado().on('keypress', base.Event.TxtSoloNumerosKeypress);

        //base.Control.DdlMesesNegocioExperienciaInvolucrado().off('keypress');
        //base.Control.DdlMesesNegocioExperienciaInvolucrado().on('keypress', base.Event.TxtSoloNumerosKeypress);

        //base.Control.DdlMesesPuestoExperienciaInvolucrado().off('keypress');
        //base.Control.DdlMesesPuestoExperienciaInvolucrado().on('keypress', base.Event.TxtSoloNumerosKeypress);

        //base.Control.DdlMesesTiempoContratistaExperienciaInvolucrado().off('keypress');
        //base.Control.DdlMesesTiempoContratistaExperienciaInvolucrado().on('keypress', base.Event.TxtSoloNumerosKeypress);

        //base.Control.DdlMesesTiempoProyectoExperienciaInvolucrado().off('keypress');
        //base.Control.DdlMesesTiempoProyectoExperienciaInvolucrado().on('keypress', base.Event.TxtSoloNumerosKeypress);

        base.Control.BtnAgregarAnexoEntrenamiento().off('click');
        base.Control.BtnAgregarAnexoEntrenamiento().on('click', base.Event.BtnAgregarAnexoEntrenamientoClick);

        base.Control.DlgFormularioAnexoEntrenamiento = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacionAnexoApendice.Controller({
            AceptarSuccess: base.Event.GrabarInvestigacionAnexoEntrenamientoSuccess
        });

        base.Control.BtnAgregarAnexoLicenciaConducir().off('click');
        base.Control.BtnAgregarAnexoLicenciaConducir().on('click', base.Event.BtnAgregarAnexoLicenciaConducirClick);

        base.Control.DlgFormularioAnexoAlcoholemia = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacionAnexoApendice.Controller({
            AceptarSuccess: base.Event.GrabarInvestigacionAnexoLicenciaConducirSuccess
        });

        base.Control.BtnAgregarAnexoLicenciaInterna().off('click');
        base.Control.BtnAgregarAnexoLicenciaInterna().on('click', base.Event.BtnAgregarAnexoLicenciaInternaClick);

        base.Control.DlgFormularioAnexoLicenciaInterna = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacionAnexoApendice.Controller({
            AceptarSuccess: base.Event.GrabarInvestigacionAnexoLicenciaInternaSuccess
        });

        base.Control.DlgFormularioAnexoLicenciaConducir = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacionAnexoApendice.Controller({
            AceptarSuccess: base.Event.GrabarInvestigacionAnexoLicenciaConducirSuccess
        });

        /////   INI TAB - TURNO y SISTEMA DE TRABAJO
        base.Control.TxtNumeroTurnosInvolucrado().off('keypress');
        base.Control.TxtNumeroTurnosInvolucrado().on('keypress', base.Event.TxtSoloNumerosKeypress);

        base.Control.TxtDiaTrabajoTurnoInvolucrado().off('keypress');
        base.Control.TxtDiaTrabajoTurnoInvolucrado().on('keypress', base.Event.TxtSoloNumerosKeypress);

        base.Control.TxtHorasTurnoInvolucrado().off('keypress');
        base.Control.TxtHorasTurnoInvolucrado().on('keypress', base.Event.TxtSoloNumerosKeypress);

        base.Control.TxtDiasDescansoAntesCicloActualTurnoInvolucrado().off('keypress');
        base.Control.TxtDiasDescansoAntesCicloActualTurnoInvolucrado().on('keypress', base.Event.TxtSoloNumerosKeypress);
        
        base.Control.TxtNumeroTurnosInvolucrado().off('keyup');
        base.Control.TxtNumeroTurnosInvolucrado().on('keyup', base.Event.FncRangoNumeros);

        base.Control.TxtDiaTrabajoTurnoInvolucrado().off('keyup');
        base.Control.TxtDiaTrabajoTurnoInvolucrado().on('keyup', base.Event.FncRangoNumeros);

        base.Control.TxtHorasTurnoInvolucrado().off('keyup');
        base.Control.TxtHorasTurnoInvolucrado().on('keyup', base.Event.FncRangoNumeros);

        base.Control.TxtDiasDescansoAntesCicloActualTurnoInvolucrado().off('keyup');
        base.Control.TxtDiasDescansoAntesCicloActualTurnoInvolucrado().on('keyup', base.Event.FncRangoNumeros);

        base.Control.TxtHorasDormido24HorasFatigaInvolucrado().off('keypress');
        base.Control.TxtHorasDormido24HorasFatigaInvolucrado().on('keypress', base.Event.TxtSoloNumerosKeypress);

        base.Control.TxtHorasDormido48HorasFatigaInvolucrado().off('keypress');
        base.Control.TxtHorasDormido48HorasFatigaInvolucrado().on('keypress', base.Event.TxtSoloNumerosKeypress);

        base.Control.TxtHorasDespiertoHastaFinalLaborFatigaInvolucrado().off('keypress');
        base.Control.TxtHorasDespiertoHastaFinalLaborFatigaInvolucrado().on('keypress', base.Event.TxtSoloNumerosKeypress);

        base.Control.BtnGrabarTurnoPersonaInvolucrada().off('click');
        base.Control.BtnGrabarTurnoPersonaInvolucrada().on('click', base.Event.BtnGrabarTurnoPersonaInvolucradaClick);

        base.Control.ValidadorTurno = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmTurnoColaboradorInvolucrado(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraTurnoPersonaInvolucrada()
        });
        //base.Control.TxtIndiceFatigaInvolucrado().off('keypress');
        //base.Control.TxtIndiceFatigaInvolucrado().on('keypress', base.Event.TxtSoloNumerosKeypress);

        //base.Control.TxtHorasDespiertoHastaFinalLaborFatigaInvolucrado().off('keyup click');
        //base.Control.TxtHorasDespiertoHastaFinalLaborFatigaInvolucrado().on('keyup click', base.Function.CalcularIndiceFatigaRango);
        if (base.Control.FormularioInvolucradoModel.InvestigacionPersonaInvolucrada.CodigoInvestigacionInvolucrado != null) {
            base.Control.TxtHorasDespiertoHastaFinalLaborFatigaInvolucrado().trigger('click');
        }

        /////   INI TAB - PRUEBA ALCOHOLEMIA Y DROGAS
        base.Control.BtnGrabarPruebaPersonaInvolucrada().off('click');
        base.Control.BtnGrabarPruebaPersonaInvolucrada().on('click', base.Event.BtnGrabarPruebaPersonaInvolucradaClick);
        base.Control.ValidadorPrueba = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmPruebaAlcoholemiaDrogasColaborador(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraPruebaPersonaInvolucrada()
        });
        base.Control.DdlExamenAlcolemiaPruebaInvolucrado().off('change');
        base.Control.DdlExamenAlcolemiaPruebaInvolucrado().on('change', base.Event.DdlExamenAlcolemiaPruebaInvolucradoChange);
        base.Control.DdlExamenAlcolemiaPruebaInvolucrado().trigger('change');

        base.Control.DdlHizoAlcoholemiaPruebaInvolucrado().off('change');
        base.Control.DdlHizoAlcoholemiaPruebaInvolucrado().on('change', base.Event.DdlHizoAlcoholemiaPruebaInvolucradoChange);
        base.Control.DdlHizoAlcoholemiaPruebaInvolucrado().trigger('change');

        base.Control.DdlExamenDrogasPruebaInvolucrado().off('change');
        base.Control.DdlExamenDrogasPruebaInvolucrado().on('change', base.Event.DdlExamenDrogasPruebaInvolucradoChange);
        base.Control.DdlExamenDrogasPruebaInvolucrado().trigger('change');

        base.Control.DdlHizoDrogasPruebaInvolucrado().off('change');
        base.Control.DdlHizoDrogasPruebaInvolucrado().on('change', base.Event.DdlHizoDrogasPruebaInvolucradoChange);
        base.Control.DdlHizoDrogasPruebaInvolucrado().trigger('change');

        ////    INI TAB - FATIGA
        base.Control.TxtHorasDormido24HorasFatigaInvolucrado().off('keyup');
        base.Control.TxtHorasDormido24HorasFatigaInvolucrado().on('keyup', base.Event.FncRangoNumeros);

        base.Control.TxtHorasDormido48HorasFatigaInvolucrado().off('keyup');
        base.Control.TxtHorasDormido48HorasFatigaInvolucrado().on('keyup', base.Event.FncRangoNumeros);

        base.Control.TxtHorasDespiertoHastaFinalLaborFatigaInvolucrado().off('keyup');
        base.Control.TxtHorasDespiertoHastaFinalLaborFatigaInvolucrado().on('keyup', base.Event.CalcularIndiceFatigaRango);

        //base.Control.TxtHorasDespiertoHastaFinalLaborFatigaInvolucrado().off('enter');
        //base.Control.TxtHorasDespiertoHastaFinalLaborFatigaInvolucrado().on('enter', base.Event.CalcularIndiceFatiga);

        base.Control.BtnGrabarFatigaPersonaInvolucrada().off('click');
        base.Control.BtnGrabarFatigaPersonaInvolucrada().on('click', base.Event.BtnGrabarFatigaPersonaInvolucradaClick);

        base.Control.ValidadorFatiga = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmFatigaColaboradorInvolucrado(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraFatigaPersonaInvolucrada()
        });

        ////    INI TAB - OTROS DETALLES
        base.Control.BtnGrabarOtrosPersonaInvolucrada().off('click');
        base.Control.BtnGrabarOtrosPersonaInvolucrada().on('click', base.Event.BtnGrabarOtrosPersonaInvolucradaClick);
        base.Control.ValidadorOtros = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmOtrosDetallesColaborador(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraOtrosPersonaInvolucrada()
        });

        base.Control.BtnAgregarAnexoAlcoholemia().off('click');
        base.Control.BtnAgregarAnexoAlcoholemia().on('click', base.Event.BtnAgregarAnexoAlcoholemiaClick);

        base.Control.DlgFormularioAnexoAlcoholemia = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacionAnexoApendice.Controller({
            AceptarSuccess: base.Event.GrabarInvestigacionAnexoAlcoholemiaSuccess
        });

        base.Control.BtnAgregarAnexoDroga().off('click');
        base.Control.BtnAgregarAnexoDroga().on('click', base.Event.BtnAgregarAnexoDrogaClick);

        base.Control.DlgFormularioAnexoDroga = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacionAnexoApendice.Controller({
            AceptarSuccess: base.Event.GrabarInvestigacionAnexoDrogaSuccess
        });

        base.Control.BtnCancelar().off('click');
        base.Control.BtnCancelar().on('click', base.Event.BtnCancelarClick);

        base.Control.BtnCancelarInformacionInvolucrado().off('click');
        base.Control.BtnCancelarInformacionInvolucrado().on('click', base.Event.BtnCancelarInformacionInvolucradoChange);

        base.Control.BtnCancelarEmpresaInvolucrado().off('click');
        base.Control.BtnCancelarEmpresaInvolucrado().on('click', base.Event.BtnCancelarEmpresaInvolucradoChange);

        base.Control.BtnCancelarExperienciaPersonaInvolucrada().off('click');
        base.Control.BtnCancelarExperienciaPersonaInvolucrada().on('click', base.Event.BtnCancelarExperienciaPersonaInvolucradaChange);

        base.Control.BtnCancelarTurnoPersonaInvolucrada().off('click');
        base.Control.BtnCancelarTurnoPersonaInvolucrada().on('click', base.Event.BtnCancelarTurnoPersonaInvolucradaChange);

        base.Control.BtnCancelarPruebaPersonaInvolucrada().off('click');
        base.Control.BtnCancelarPruebaPersonaInvolucrada().on('click', base.Event.BtnCancelarPruebaPersonaInvolucradaChange);

        base.Control.BtnCancelarFatigaPersonaInvolucrada().off('click');
        base.Control.BtnCancelarFatigaPersonaInvolucrada().on('click', base.Event.BtnCancelarFatigaPersonaInvolucradaChange);

        base.Control.BtnCancelarOtrosPersonaInvolucrada().off('click');
        base.Control.BtnCancelarOtrosPersonaInvolucrada().on('click', base.Event.BtnCancelarOtrosPersonaInvolucradaChange);

        base.Control.IndicadorLesionado = base.Control.DdlSufrioLesionOtrosInvolucrado().val();
        base.Control.DdlSufrioLesionOtrosInvolucrado().off('change');
        base.Control.DdlSufrioLesionOtrosInvolucrado().on('change', base.Event.DdlSufrioLesionOtrosInvolucradoChange);


        $('#frmInformacionGeneralPersonaInvolucrada, #frmEmpresaColaboradorInvolucrado, #frmTurnoColaboradorInvolucrado, #frmPruebaAlcoholemiaDrogasColaborador, #frmFatigaColaboradorInvolucrado, #frmOtrosDetallesColaborador').on('keypress', function (e) {
            if (e.keyCode === 13) {
                e.preventDefault();
            }
        });
    };

    base.Show = function (opts) {                
        //base.Control.CodigoInvolucrado = opts.CodigoInvestigacionInvolucrado;        
        //base.Control.CodigoColaborador = opts.CodigoColaboradorInvolucrado;
        //base.Control.CodigoIndicadorLesionado = opts.CodigoIndicadorLesionado;
        base.Control.DlgFormularioGeneralInvestigacionInvolucrado = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.TituloVentanaTrabajadorInvolucrado,
            size: "size-xlarge",
            close: function () {
            }
        });

        base.Control.DlgFormularioGeneralInvestigacionInvolucrado.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.FormularioTrabajadorInvolucrado,
            onSuccess: function () {
                base.Ini();
            },
            data: {
                CodigoInvestigacionCategoria: opts.CodigoInvestigacionCategoria,
                CodigoInvestigacionInvolucrado: opts.CodigoInvestigacionInvolucrado,
                CodigoIndicadorLesionado: opts.CodigoIndicadorLesionado,
                CodigoInvestigacion: opts.CodigoInvestigacion,
                CodigoColaborador: opts.CodigoColaboradorInvolucrado,
                CodigoEstadoInvestigacion: opts.CodigoEstadoInvestigacion,
                Colaborador: {
                    CodigoColaborador: opts.CodigoColaboradorInvolucrado,
                    NombreCompletoColaborador: opts.NombreColaboradorInvolucrado,
                    DescripcionTipoDocumento: opts.DescripcionTipoDocumento,
                    NumeroDocumento: opts.NumeroDocumento,
                    CodigoEmpresa: opts.CodigoEmpresa
                }
            }
        });
    };

    base.Control = {
        Validador: null,
        ValidadorCalculo: null,
        ValidadorEmpresa: null,
        ValidadorExperiencia: null,
        ValidadorTurno: null,
        ValidadorPrueba: null,
        ValidadorOtros: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        FormularioInvolucradoModel: null,
        IndicadorLesionado:null,
        BtnBuscarEmpresaInvolucrado: function () { return $('#btnBuscarEmpresaInvolucrado'); },
        TxtInvolucradoNombreEmpresa: function () { return $('#txtInvolucradoNombreEmpresa'); },
        HdnInvolucradoCodigoEmpresa: function () { return $('#hdnInvolucradoCodigoEmpresa'); },
        DlgFormularioBuscarColaboradorInvolucrado: null,
        DlgFormularioCalificacionFatigaPersonal: null,
        BtnCancelar: function () { return $('#btnCancelar'); },
        ///     TAB - Informacion General
        FrmInformacionGeneralPersonaInvolucrada: function () { return $('#frmInformacionGeneralPersonaInvolucrada'); },
        DtpFechaNacimientoInformacionInvolucrado: function () { return $('#dtpFechaNacimientoInformacionInvolucrado'); },
        DdlPuestoTrabajoInformacionInvolucrado: function () { return $('#ddlPuestoTrabajoInformacionInvolucrado'); },
        DdlEstadoCivilInformacionInvolucrado: function () { return $('#ddlEstadoCivilInformacionInvolucrado'); },
        TxtPaisInformacionInvolucrado: function () { return $('#txtPaisInformacionInvolucrado'); },
        TxtDepartamentoTerritorioInformacionInvolucrado: function () { return $('#txtDepartamentoTerritorioInformacionInvolucrado'); },
        TxtProvinciaInformacionInvolucrado: function () { return $('#txtProvinciaInformacionInvolucrado'); },
        DdlGeneroInformacionInvolucrado: function () { return $('#ddlGeneroInformacionInvolucrado'); },
        DdlGradoInstruccionInformacionInvolucrado: function () { return $('#ddlGradoInstruccionInformacionInvolucrado'); },
        DdlTipoContratoInformacionInvolucrado: function () { return $('#ddlTipoContratoInformacionInvolucrado'); },
        DdlProyectoInformacionInvolucrado: function () { return $('#ddlProyectoInformacionInvolucrado'); },
        DdlDepartamentoInformacionInvolucrado: function () { return $('#ddlDepartamentoInformacionInvolucrado'); },
        DdlAreaInformacionInvolucrado: function () { return $('#ddlAreaInformacionInvolucrado'); },
        DdlGuardiaInformacionInvolucrado: function () { return $('#ddlGuardiaInformacionInvolucrado'); },
        BtnGrabarInformacionPersonaInvolucrada: function () { return $('#btnGrabarInformacionPersonaInvolucrada'); },
        TxtEdadInformacionInvolucrado: function () { return $('#txtEdadInformacionInvolucrado'); },


        ///     TAB -Empresa
        FrmEmpresaColaboradorInvolucrado: function () { return $('#frmEmpresaColaboradorInvolucrado'); },
        BtnBuscarEmpresaPersonaInvolucrada: function () { return $('#btnBuscarEmpresaPersonaInvolucrada'); },
        DlgFormularioEmpresaPersonaInvolucrada: null,
        HdnCodigoEmpresaPersonaInvolucrada: function () { return $('#hdnCodigoEmpresaPersonaInvolucrada'); },
        HdnCodigoTipoEmpresa: function () { return $('#hdnCodigoTipoEmpresa'); },
        TxtNombreEmpresaPersonaInvolucrada: function () { return $('#txtNombreEmpresaPersonaInvolucrada'); },
        TxtRucEmpresaInvolucrado: function () { return $('#txtRucEmpresaInvolucrado'); },
        TxtDireccionEmpresaInvolucrado: function () { return $('#txtDireccionEmpresaInvolucrado'); },
        TxtActividadEconomicaEmpresaInvolucrado: function () { return $('#txtActividadEconomicaEmpresaInvolucrado'); },
        TxtNTrabajadoresEmpresaInvolucrado: function () { return $('#txtNTrabajadoresEmpresaInvolucrado'); },
        TxtNTrabajadoresAfiliadosEmpresaInvolucrado: function () { return $('#txtNTrabajadoresAfiliadosEmpresaInvolucrado'); },
        TxtNTrabajadoresNoAfiliadosEmpresaInvolucrado: function () { return $('#txtNTrabajadoresNoAfiliadosEmpresaInvolucrado'); },
        TxtNombreAseguradoraEmpresaInvolucrado: function () { return $('#txtNombreAseguradoraEmpresaInvolucrado'); },
        DdlActividadEmpresaRiesgoInvolucrado: function () { return $('#ddlActividadEmpresaRiesgoInvolucrado'); },
        BtnGrabarEmpresaPersonaInvolucrada: function () { return $('#btnGrabarEmpresaPersonaInvolucrada'); },
        TipoEmpresa: null,
        MensajeLesion : null,

        HdnCodigoDuenioContratoTrabajo: function () { return $('#hdnCodigoDuenioContratoTrabajo'); },
        TxtNombreDuenioContratoTrabajo: function () { return $('#txtNombreDuenioContratoTrabajo'); },
        BtnBuscarDuenioContratoTrabajo: function () { return $('#btnBuscarDuenioContratoTrabajo'); },
        DlgFormularioDuenioContratoTrabajo: null,

        ///     TAB - TRABAJO Y EXPERIENCIA
        FrmExperienciaColaboradorInvolucrado: function () { return $('#frmExperienciaColaboradorInvolucrado'); },
        TxtAnioNegocioExperienciaInvolucrado: function () { return $('#txtAnioNegocioExperienciaInvolucrado'); },
        DdlMesesNegocioExperienciaInvolucrado: function () { return $('#ddlMesesNegocioExperienciaInvolucrado'); },
        TxtAnioTiempoProyectoExperienciaInvolucrado: function () { return $('#txtAnioTiempoProyectoExperienciaInvolucrado'); },
        DdlMesesTiempoProyectoExperienciaInvolucrado: function () { return $('#ddlMesesTiempoProyectoExperienciaInvolucrado'); },
        TxtAnioTiempoContratistaExperienciaInvolucrado: function () { return $('#txtAnioTiempoContratistaExperienciaInvolucrado'); },
        DdlMesesTiempoContratistaExperienciaInvolucrado: function () { return $('#ddlMesesTiempoContratistaExperienciaInvolucrado'); },
        TxtAnioPuestoExperienciaInvolucrado: function () { return $('#txtAnioPuestoExperienciaInvolucrado'); },
        DdlMesesPuestoExperienciaInvolucrado: function () { return $('#ddlMesesPuestoExperienciaInvolucrado'); },
        TxaActividadMomentoIncidenteExperienciaInvolucrado: function () { return $('#txaActividadMomentoIncidenteExperienciaInvolucrado'); },
        TxaTareaMomentoIncidenteExperienciaInvolucrado: function () { return $('#txaTareaMomentoIncidenteExperienciaInvolucrado'); },
        TxtComentarioEntrenamientoExperienciaInvolucrado: function () { return $('#txtComentarioEntrenamientoExperienciaInvolucrado'); },
        TxtLicenciaConducirExperienciaInvolucrado: function () { return $('#txtLicenciaConducirExperienciaInvolucrado'); },
        TxtLicenciaInternaExperienciaInvolucrado: function () { return $('#txtLicenciaInternaExperienciaInvolucrado'); },
        DdlRecibioEntrenamientoTrabajoInvolucrado: function () { return $('#ddlRecibioEntrenamientoTrabajoInvolucrado'); },
        DdlLicenciaConducirExperienciaInvolucrado: function () { return $('#ddlLicenciaConducirExperienciaInvolucrado'); },
        DdlLicenciaInternaExperienciaInvolucrado: function () { return $('#ddlLicenciaInternaExperienciaInvolucrado'); },
        BtnGrabarExperienciaPersonaInvolucrada: function () { return $('#btnGrabarExperienciaPersonaInvolucrada'); },
        DlgFormularioAnexoEntrenamiento: null,
        DlgFormularioAnexoLicenciaConducir: null,
        DlgFormularioAnexoLicenciaInterna: null,

        HdnCodigoArchivoEntrenamiento: function () { return $('#hdnCodigoArchivoEntrenamiento'); },
        TxtNombreArchivoEntrenamiento: function () { return $('#txtNombreArchivoEntrenamiento'); },
        HdnCodigoArchivoLicenciaConducir: function () { return $('#hdnCodigoArchivoLicenciaConducir'); },
        TxtNombreArchivoLicenciaConducir: function () { return $('#txtNombreArchivoLicenciaConducir'); },
        HdnCodigoArchivoLicenciaInterna: function () { return $('#hdnCodigoArchivoLicenciaInterna'); },
        TxtNombreArchivoLicenciaInterna: function () { return $('#txtNombreArchivoLicenciaInterna'); },
        BtnAgregarAnexoEntrenamiento: function () { return $('#btnAgregarAnexoEntrenamiento'); },
        BtnAgregarAnexoLicenciaConducir: function () { return $('#btnAgregarAnexoLicenciaConducir'); },
        BtnAgregarAnexoLicenciaInterna: function () { return $('#btnAgregarAnexoLicenciaInterna'); },

        ///     TAB - TURNO y SISTEMA DE TRABAJO
        FrmTurnoColaboradorInvolucrado: function () { return $('#frmTurnoColaboradorInvolucrado'); },
        TxtSistemaTrabajoTurnoInvolucrado: function () { return $('#txtSistemaTrabajoTurnoInvolucrado'); },
        DdlTurnoMixtoTurnoInvolucrado: function () { return $('#ddlTurnoMixtoTurnoInvolucrado'); },
        DdlHoraDuracionCambioTurnoInvolucrado: function () { return $('#ddlHoraDuracionCambioTurnoInvolucrado'); },
        DdlMinutoDuracionCambioTurnoInvolucrado: function () { return $('#ddlMinutoDuracionCambioTurnoInvolucrado'); },
        DdlHoraInicioHorarioTurnoInvolucrado: function () { return $('#ddlHoraInicioHorarioTurnoInvolucrado'); },
        DdlMinutoInicioHorarioTurnoInvolucrado: function () { return $('#ddlMinutoInicioHorarioTurnoInvolucrado'); },
        TxtNumeroTurnosInvolucrado: function () { return $('#txtNumeroTurnosInvolucrado'); },
        TxtDiaTrabajoTurnoInvolucrado: function () { return $('#txtDiaTrabajoTurnoInvolucrado'); },
        TxtHorasTurnoInvolucrado: function () { return $('#txtHorasTurnoInvolucrado'); },
        TxtDiasDescansoAntesCicloActualTurnoInvolucrado: function () { return $('#txtDiasDescansoAntesCicloActualTurnoInvolucrado'); },
        BtnGrabarTurnoPersonaInvolucrada: function () { return $('#btnGrabarTurnoPersonaInvolucrada'); },

        ///     TAB - PRUEBA ALCOLEMIA y DROGAS
        FrmPruebaAlcoholemiaDrogasColaborador: function () { return $('#frmPruebaAlcoholemiaDrogasColaborador'); },
        DdlExamenAlcolemiaPruebaInvolucrado: function () { return $('#ddlExamenAlcolemiaPruebaInvolucrado'); },
        DdlHizoAlcoholemiaPruebaInvolucrado: function () { return $('#ddlHizoAlcoholemiaPruebaInvolucrado'); },
        DdlExamenDrogasPruebaInvolucrado: function () { return $('#ddlExamenDrogasPruebaInvolucrado'); },
        DdlHizoDrogasPruebaInvolucrado: function () { return $('#ddlHizoDrogasPruebaInvolucrado'); },
        TxaComentarioAlcoholemiaPruebaInvolucrado: function () { return $('#txaComentarioAlcoholemiaPruebaInvolucrado'); },
        TxaComentarioDrogaPruebaInvolucrado: function () { return $('#txaComentarioDrogaPruebaInvolucrado'); },
        BtnGrabarPruebaPersonaInvolucrada: function () { return $('#btnGrabarPruebaPersonaInvolucrada'); },
        DlgFormularioAnexoAlcoholemia: null,
        BtnAgregarAnexoAlcoholemia: function () { return $('#btnAgregarAnexoAlcoholemia'); },
        DlgFormularioAnexoDroga: null,
        BtnAgregarAnexoDroga: function () { return $('#btnAgregarAnexoDroga'); },
        HdnCodigoArchivoAlcoholemia: function () { return $('#hdnCodigoArchivoAlcoholemia'); },
        TxtNombreArchivoAlcoholemia: function () { return $('#txtNombreArchivoAlcoholemia'); },
        HdnCodigoArchivoDroga: function () { return $('#hdnCodigoArchivoDroga'); },
        TxtNombreArchivoDroga: function () { return $('#txtNombreArchivoDroga'); },
        IndicadorObligatorio: false,

        ///     TAB - OTROS DETALLES
        FrmOtrosDetallesColaborador: function () { return $('#frmOtrosDetallesColaborador'); },
        TxtComoSeInvolucroOtrosInvolucrado: function () { return $('#txtComoSeInvolucroOtrosInvolucrado'); },
        DdlSufrioLesionOtrosInvolucrado: function () { return $('#ddlSufrioLesionOtrosInvolucrado'); },
        DdlEstadoServicioIncidenteOtrosInvolucrado: function () { return $('#ddlEstadoServicioIncidenteOtrosInvolucrado'); },
        BtnGrabarOtrosPersonaInvolucrada: function () { return $('#btnGrabarOtrosPersonaInvolucrada'); },

        ///     TAB - ESTADO FATIGA
        ValidadorFatiga: null,
        FrmFatigaColaboradorInvolucrado: function () { return $('#frmFatigaColaboradorInvolucrado'); },
        DdlReportoSupervisorFatigaInvolucrado: function () { return $('#ddlReportoSupervisorFatigaInvolucrado'); },
        TxtHorasDormido24HorasFatigaInvolucrado: function () { return $('#txtHorasDormido24HorasFatigaInvolucrado'); },
        TxtHorasDormido48HorasFatigaInvolucrado: function () { return $('#txtHorasDormido48HorasFatigaInvolucrado'); },
        TxtHorasDespiertoHastaFinalLaborFatigaInvolucrado: function () { return $('#txtHorasDespiertoHastaFinalLaborFatigaInvolucrado'); },
        //TxtIndiceFatigaInvolucrado: function () { return $('#txtIndiceFatigaInvolucrado'); },
        SnpIndiceFatiga: function () { return $('#spnIndiceFatiga'); },
        BtnGrabarFatigaPersonaInvolucrada: function () { return $('#btnGrabarFatigaPersonaInvolucrada'); },

        BtnCancelarInformacionInvolucrado: function () { return $('#btnCancelarInformacionInvolucrado'); },
        BtnCancelarEmpresaInvolucrado: function () { return $('#btnCancelarEmpresaInvolucrado'); },
        BtnCancelarExperienciaPersonaInvolucrada: function () { return $('#btnCancelarExperienciaPersonaInvolucrada'); },
        BtnCancelarTurnoPersonaInvolucrada: function () { return $('#btnCancelarTurnoPersonaInvolucrada'); },
        BtnCancelarPruebaPersonaInvolucrada: function () { return $('#btnCancelarPruebaPersonaInvolucrada'); },
        BtnCancelarFatigaPersonaInvolucrada: function () { return $('#btnCancelarFatigaPersonaInvolucrada'); },
        BtnCancelarOtrosPersonaInvolucrada: function () { return $('#btnCancelarOtrosPersonaInvolucrada'); },
        BtnAbrirCalificacion: function () { return $('#btnAbrirCalificacion'); },


        /////////////
        TxtActualConsecuenciaCategoriaLesion: function () { return $('#txtActualConsecuenciaCategoriaLesion'); },
        TxtPotencialConsecuenciaCategoriaLesion: function () { return $('#txtPotencialConsecuenciaCategoriaLesion'); },
    };

    base.Function = {
        ValidacionExtraDetallePersonaInvolucrada: function () {
            var validaciones = new Array();

            ////Validar Fecha de nacimiento
            //validaciones.push({
            //    Event: function () {
            //        var resultado = true;

            //        if (base.Control.DtpFechaNacimientoInformacionInvolucrado().val() == null || base.Control.DtpFechaNacimientoInformacionInvolucrado().val() == '' || parseInt(base.Control.DtpFechaNacimientoInformacionInvolucrado().val().split("/")[2]) <= 1900) {
            //            resultado = false;
            //        }

            //        if (resultado) {
            //            base.Control.DtpFechaNacimientoInformacionInvolucrado().attr('class', 'form-control');
            //        }
            //        else {
            //            base.Control.DtpFechaNacimientoInformacionInvolucrado().attr('class', 'form-control hasError');
            //        }

            //        return resultado;
            //    }
            //});


            return validaciones;
        },

        ValidacionExtraEmpresaPersonaInvolucrada: function () {
            var validaciones = new Array();

            
            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.HdnCodigoEmpresaPersonaInvolucrada().val() == null || base.Control.HdnCodigoEmpresaPersonaInvolucrada().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtNombreEmpresaPersonaInvolucrada().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtNombreEmpresaPersonaInvolucrada().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.TipoEmpresa == "02" && (base.Control.TxtNombreDuenioContratoTrabajo().val() == null || base.Control.TxtNombreDuenioContratoTrabajo().val() == '')) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtNombreDuenioContratoTrabajo().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtNombreDuenioContratoTrabajo().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });

            //validar Actividad económica que realiza la empresa
            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.TxtActividadEconomicaEmpresaInvolucrado().val() == null || base.Control.TxtActividadEconomicaEmpresaInvolucrado().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtActividadEconomicaEmpresaInvolucrado().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtActividadEconomicaEmpresaInvolucrado().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });

            //validar Numero de trabajadores involucrados
            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.TxtNTrabajadoresEmpresaInvolucrado().val() == 0 || base.Control.TxtNTrabajadoresEmpresaInvolucrado().val() == null || base.Control.TxtNTrabajadoresEmpresaInvolucrado().val() == ''){
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtNTrabajadoresEmpresaInvolucrado().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtNTrabajadoresEmpresaInvolucrado().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });

            //validar numero trabajadores afiliados
            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.DdlActividadEmpresaRiesgoInvolucrado().val() == "true" && (base.Control.TxtNTrabajadoresAfiliadosEmpresaInvolucrado().val() == null || base.Control.TxtNTrabajadoresAfiliadosEmpresaInvolucrado().val() == '')) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtNTrabajadoresAfiliadosEmpresaInvolucrado().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtNTrabajadoresAfiliadosEmpresaInvolucrado().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });
            //validar numero trabajadores no afiliados
            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.DdlActividadEmpresaRiesgoInvolucrado().val() == "true" && (base.Control.TxtNTrabajadoresNoAfiliadosEmpresaInvolucrado().val() == null || base.Control.TxtNTrabajadoresNoAfiliadosEmpresaInvolucrado().val() == '')) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtNTrabajadoresNoAfiliadosEmpresaInvolucrado().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtNTrabajadoresNoAfiliadosEmpresaInvolucrado().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });
            //validar nombre de aseguradora
            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.DdlActividadEmpresaRiesgoInvolucrado().val() == "true" && (base.Control.TxtNombreAseguradoraEmpresaInvolucrado().val() == null || base.Control.TxtNombreAseguradoraEmpresaInvolucrado().val() == '')) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtNombreAseguradoraEmpresaInvolucrado().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtNombreAseguradoraEmpresaInvolucrado().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });

            return validaciones;
        },
        ValidacionExtraExperienciaPersonaInvolucrada: function () {
            var validaciones = new Array();
            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.HdnCodigoTipoEmpresa().val() == "02" && (base.Control.DdlMesesTiempoContratistaExperienciaInvolucrado().children().length > 1 && base.Control.DdlMesesTiempoContratistaExperienciaInvolucrado().val() == '')) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.DdlMesesTiempoContratistaExperienciaInvolucrado().attr('class', 'form-control');
                    }
                    else {
                        base.Control.DdlMesesTiempoContratistaExperienciaInvolucrado().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.HdnCodigoTipoEmpresa().val() == "02" && (base.Control.TxtAnioTiempoContratistaExperienciaInvolucrado().val() == null || base.Control.TxtAnioTiempoContratistaExperienciaInvolucrado().val() == '')) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtAnioTiempoContratistaExperienciaInvolucrado().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtAnioTiempoContratistaExperienciaInvolucrado().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.DdlRecibioEntrenamientoTrabajoInvolucrado().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.ValoresHPI_SI
                        && (base.Control.TxtNombreArchivoEntrenamiento().val() == null || base.Control.TxtNombreArchivoEntrenamiento().val() == '')) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtNombreArchivoEntrenamiento().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtNombreArchivoEntrenamiento().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });



            //validaciones.push({
            //    Event: function () {
            //        var resultado = true;

            //        if (base.Control.DdlRecibioEntrenamientoTrabajoInvolucrado().val() == "01" && (basec.Control.TxtNombreArchivoEntrenamiento().val() == null || basec.Control.TxtNombreArchivoEntrenamiento().val() == '')) {
            //            resultado = false;
            //        }

            //        if (resultado) {
            //            base.Control.TxtNombreArchivoEntrenamiento().attr('class', 'form-control');
            //        }
            //        else {
            //            base.Control.TxtNombreArchivoEntrenamiento().attr('class', 'form-control hasError');
            //        }

            //        return resultado;
            //    }
            //});

            return validaciones;
        },
        ValidacionExtraTurnoPersonaInvolucrada: function () {
            var validaciones = new Array();

            return validaciones;
        },
        ValidacionExtraPruebaPersonaInvolucrada: function () {
            var validaciones = new Array();
            //validar si reporto a supervisor cansancio
            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.DdlExamenAlcolemiaPruebaInvolucrado().children().length > 1 && base.Control.DdlExamenAlcolemiaPruebaInvolucrado().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.DdlExamenAlcolemiaPruebaInvolucrado().attr('class', 'form-control');
                    }
                    else {
                        base.Control.DdlExamenAlcolemiaPruebaInvolucrado().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.DdlExamenAlcolemiaPruebaInvolucrado().val() == '01' && (base.Control.DdlHizoAlcoholemiaPruebaInvolucrado().children().length > 1 && base.Control.DdlHizoAlcoholemiaPruebaInvolucrado().val() == '')) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.DdlHizoAlcoholemiaPruebaInvolucrado().attr('class', 'form-control');
                    }
                    else {
                        base.Control.DdlHizoAlcoholemiaPruebaInvolucrado().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.DdlHizoAlcoholemiaPruebaInvolucrado().val() == '01' && (base.Control.TxtNombreArchivoAlcoholemia().val() == null || base.Control.TxtNombreArchivoAlcoholemia().val() == '')) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtNombreArchivoAlcoholemia().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtNombreArchivoAlcoholemia().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.DdlHizoAlcoholemiaPruebaInvolucrado().val() == '02' && (base.Control.TxaComentarioAlcoholemiaPruebaInvolucrado().val() == null || base.Control.TxaComentarioAlcoholemiaPruebaInvolucrado().val() == '')) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxaComentarioAlcoholemiaPruebaInvolucrado().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxaComentarioAlcoholemiaPruebaInvolucrado().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.DdlExamenDrogasPruebaInvolucrado().children().length > 1 && base.Control.DdlExamenDrogasPruebaInvolucrado().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.DdlExamenDrogasPruebaInvolucrado().attr('class', 'form-control');
                    }
                    else {
                        base.Control.DdlExamenDrogasPruebaInvolucrado().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.DdlExamenDrogasPruebaInvolucrado().val() == '01' && (base.Control.DdlHizoDrogasPruebaInvolucrado().children().length > 1 && base.Control.DdlHizoDrogasPruebaInvolucrado().val() == '')) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.DdlHizoDrogasPruebaInvolucrado().attr('class', 'form-control');
                    }
                    else {
                        base.Control.DdlHizoDrogasPruebaInvolucrado().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.DdlHizoDrogasPruebaInvolucrado().val() == '01' && (base.Control.TxtNombreArchivoDroga().val() == null || base.Control.TxtNombreArchivoDroga().val() == '')) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtNombreArchivoDroga().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtNombreArchivoDroga().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.DdlHizoDrogasPruebaInvolucrado().val() == '02' && (base.Control.TxaComentarioDrogaPruebaInvolucrado().val() == null || base.Control.TxaComentarioDrogaPruebaInvolucrado().val() == '')) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxaComentarioDrogaPruebaInvolucrado().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxaComentarioDrogaPruebaInvolucrado().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });

            return validaciones;
        },
        ValidacionExtraOtrosPersonaInvolucrada: function () {
            var validaciones = new Array();
            //validar si reporto a supervisor cansancio
            //validaciones.push({
            //    Event: function () {
            //        var resultado = true;

            //        if (base.Control.DdlSufrioLesionOtrosInvolucrado().children().length > 1 && base.Control.DdlSufrioLesionOtrosInvolucrado().val() == '') {
            //            resultado = false;
            //        }

            //        if (resultado) {
            //            base.Control.DdlSufrioLesionOtrosInvolucrado().attr('class', 'form-control');
            //        }
            //        else {
            //            base.Control.DdlSufrioLesionOtrosInvolucrado().attr('class', 'form-control hasError');
            //        }

            //        return resultado;
            //    }
            //});

            return validaciones;
        },
        ValidacionExtraFatigaPersonaInvolucrada: function () {
            var validaciones = new Array();
            //validar si reporto a supervisor cansancio
            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.DdlReportoSupervisorFatigaInvolucrado().children().length > 1 && base.Control.DdlReportoSupervisorFatigaInvolucrado().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.DdlReportoSupervisorFatigaInvolucrado().attr('class', 'form-control');
                    }
                    else {
                        base.Control.DdlReportoSupervisorFatigaInvolucrado().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });

            return validaciones;
        },

        CalcularIndiceFatiga: function () {
            var resultado = 0;
            var validar = true;
            var indiceZ = 0;
            base.Control.SnpIndiceFatiga().text("");

            if (base.Control.ValidadorCalculo.isValid()) {

            if ((base.Control.TxtHorasDormido24HorasFatigaInvolucrado().val() == null || base.Control.TxtHorasDormido24HorasFatigaInvolucrado().val() == "") && base.Control.FormularioInvolucradoModel.InvestigacionInvolucradoFatiga.IndiceFatiga != null) {
                base.Control.TxtHorasDormido24HorasFatigaInvolucrado().attr('class', 'form-control hasError');
                validar = false;
            } else {
                //base.Control.TxtHorasDormido24HorasFatigaInvolucrado().attr('class', 'form-control');
            }

            if ((base.Control.TxtHorasDormido48HorasFatigaInvolucrado().val() == null || base.Control.TxtHorasDormido48HorasFatigaInvolucrado().val() == "") && base.Control.FormularioInvolucradoModel.InvestigacionInvolucradoFatiga.IndiceFatiga != null) {
                base.Control.TxtHorasDormido48HorasFatigaInvolucrado().attr('class', 'form-control hasError');
                validar = false;
            } else {
                //base.Control.TxtHorasDormido48HorasFatigaInvolucrado().attr('class', 'form-control');
            }

            if (validar) {

                var x = parseInt(base.Control.TxtHorasDormido24HorasFatigaInvolucrado().val());
                var y = parseInt(base.Control.TxtHorasDormido48HorasFatigaInvolucrado().val());
                var z = parseInt(base.Control.TxtHorasDespiertoHastaFinalLaborFatigaInvolucrado().val());

                indiceZ = base.Control.TxtHorasDespiertoHastaFinalLaborFatigaInvolucrado().val() - y;
                resultado = base.Function.retornaX(x) + base.Function.retornaY(y) + indiceZ;
                if (resultado >= 0) {
                    base.Function.colorIndiceFatiga(resultado);
                    base.Control.SnpIndiceFatiga().text(resultado);
                }

            }
            } else {
                base.Control.SnpIndiceFatiga().css({ 'background': '#777777' });
            }
        },

        retornaX: function (x) {
            var resultado = 0;
            if (x >= 6)
                resultado = 0
            else if (x >= 5)
                resultado = 4
            else if (x >= 4)
                resultado = 8
            else if (x >= 3)
                resultado = 12
            else if (x >= 2)
                resultado = 16
            else if (x >= 1)
                resultado = 20
            else if (x >= 0)
                resultado = 24

            return resultado;
        },

        retornaY: function (y) {
            var resultado = 0;
            if (y >= 12)
                resultado = 0
            else if (y >= 11)
                resultado = 2
            else if (y >= 10)
                resultado = 4
            else if (y >= 9)
                resultado = 6
            else if (y >= 8)
                resultado = 8
            else if (y >= 7)
                resultado = 10
            else if (y >= 6)
                resultado = 12
            else
                resultado = 12

            return resultado;
        },

        colorIndiceFatiga: function (valor) {
            if (valor > 10) {
                base.Control.SnpIndiceFatiga().css({ 'background': 'red' });
            } else if (valor >= 5) {
                base.Control.SnpIndiceFatiga().css({ 'background': 'yellow' });
            } else if (valor >= 0) {
                base.Control.SnpIndiceFatiga().css({ 'background': 'green' });
            } else {
                base.Control.SnpIndiceFatiga().css({ 'background': '#777777' });
            }
        },
    };
    //ColaboradorInvolucrado
    base.Event = {
        TxtSoloNumerosKeypress: function (event) {
            var regex = /[0-9]/;
            var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
            if (!regex.test(key)) {
                event.preventDefault();
                return false;
            }
        },

        FncRangoNumeros: function (event) {
            min = $(this).data().min;
            max = $(this).data().max;
            value = $(this).val();

            if (value < min || value > max) {
                $(this).val('');
            }
        },

        CalcularEdad: function () {
            if (base.Control.DtpFechaNacimientoInformacionInvolucrado().val().split("/") != null || base.Control.DtpFechaNacimientoInformacionInvolucrado().val().split("/") !== '') {
                var fecnac = base.Control.DtpFechaNacimientoInformacionInvolucrado().val().split("/");
                var dia = parseInt(fecnac[0]);
                var mes = parseInt(fecnac[1]);
                var anio = parseInt(fecnac[2]);
                fecha_hoy = new Date();
                ahora_ano = fecha_hoy.getYear();
                ahora_mes = fecha_hoy.getMonth();
                ahora_dia = fecha_hoy.getDate();
                edad = (ahora_ano + 1900) - anio;

                if (ahora_mes < (mes - 1)) {
                    edad--;
                }
                if (((mes - 1) == ahora_mes) && (ahora_dia < dia)) {
                    edad--;
                }
                if (edad > 1900) {
                    edad -= 1900;
                }
                if (edad > 0) {
                    base.Control.TxtEdadInformacionInvolucrado().val(edad);
                } else {
                    base.Control.TxtEdadInformacionInvolucrado().val('');
                }
                                

            } else {
                base.Control.TxtEdadInformacionInvolucrado().val('');
            }
        },

        CalcularIndiceFatigaRango:function () {
            min = $(this).data().min;
            max = $(this).data().max;
            value = $(this).val();

            if (value < min || value > max) {
                $(this).val('');
                base.Control.SnpIndiceFatiga().html('');
                base.Control.SnpIndiceFatiga().css({ 'background': '#777777' });
            }else
            {
                var resultado = 0;
                var validar = true;
                var indiceZ = 0;
                base.Control.SnpIndiceFatiga().text("0");

                if (base.Control.ValidadorCalculo.isValid()) {

                    if ((base.Control.TxtHorasDormido24HorasFatigaInvolucrado().val() == null || base.Control.TxtHorasDormido24HorasFatigaInvolucrado().val() == "") && base.Control.FormularioInvolucradoModel.InvestigacionInvolucradoFatiga.IndiceFatiga != null) {
                        base.Control.TxtHorasDormido24HorasFatigaInvolucrado().attr('class', 'form-control hasError');
                        validar = false;
                    } else {
                        //base.Control.TxtHorasDormido24HorasFatigaInvolucrado().attr('class', 'form-control');
                    }

                    if ((base.Control.TxtHorasDormido48HorasFatigaInvolucrado().val() == null || base.Control.TxtHorasDormido48HorasFatigaInvolucrado().val() == "") && base.Control.FormularioInvolucradoModel.InvestigacionInvolucradoFatiga.IndiceFatiga != null) {
                        base.Control.TxtHorasDormido48HorasFatigaInvolucrado().attr('class', 'form-control hasError');
                        validar = false;
                    } else {
                        //base.Control.TxtHorasDormido48HorasFatigaInvolucrado().attr('class', 'form-control');
                    }

                    if (validar) {

                        var x = parseInt(base.Control.TxtHorasDormido24HorasFatigaInvolucrado().val());
                        var y = parseInt(base.Control.TxtHorasDormido48HorasFatigaInvolucrado().val());
                        var z = parseInt(base.Control.TxtHorasDespiertoHastaFinalLaborFatigaInvolucrado().val());

                        indiceZ = base.Control.TxtHorasDespiertoHastaFinalLaborFatigaInvolucrado().val() - y;
                        resultado = base.Function.retornaX(x) + base.Function.retornaY(y) + indiceZ;
                        if (resultado >= 0) {
                            base.Function.colorIndiceFatiga(resultado);
                            base.Control.SnpIndiceFatiga().text(resultado);
                        }

                    }
                } else {
                    base.Control.SnpIndiceFatiga().css({ 'background': '#777777' });
                }
            }
        },
        BtnAbrirCalificacionInvolucrado: function () {
            base.Control.DlgFormularioCalificacionFatigaPersonal.Show();
        },
        BtnBuscarEmpresaInvolucrado: function () {
            base.Control.DlgFormularioBuscarColaboradorInvolucrado.Show(false, [], null);
        },
        BuscarColaboradorInvolucradoSuccess: function (colaboradorSeleccionado) {
            if (colaboradorSeleccionado != null) {
                base.Control.HdnInvolucradoCodigoEmpresa().val(colaboradorSeleccionado[0].CodigoColaborador);
                base.Control.TxtInvolucradoNombreEmpresa().val(colaboradorSeleccionado[0].Nombres + ' ' + colaboradorSeleccionado[0].ApellidoPaterno + ' ' + colaboradorSeleccionado[0].ApellidoMaterno);
            }
            else {
                base.Control.HdnInvolucradoCodigoEmpresa().val(null);
                base.Control.TxtInvolucradoNombreEmpresa().val('');
            }
        },

        BuscarDuenioContratoTrabajoSuccess: function (colaboradorSeleccionado) {
            if (colaboradorSeleccionado.length > 0) {
                base.Control.HdnCodigoDuenioContratoTrabajo().val(colaboradorSeleccionado[0].CodigoColaborador);
                base.Control.TxtNombreDuenioContratoTrabajo().val(colaboradorSeleccionado[0].Nombres + ' ' + colaboradorSeleccionado[0].ApellidoPaterno + ' ' + colaboradorSeleccionado[0].ApellidoMaterno);
                base.Control.BtnBuscarDuenioContratoTrabajo().attr("disabled", false);
            }
            else {
                base.Control.HdnCodigoDuenioContratoTrabajo().val(null);
                base.Control.TxtNombreDuenioContratoTrabajo().val('');
                base.Control.BtnBuscarDuenioContratoTrabajo().attr("disabled", true);
            }
        },

        BtnBuscarDuenioContratoTrabajoClick: function () {
            base.Control.DlgFormularioDuenioContratoTrabajo.Show(false, [], { CodigoEmpresa: null });
        },

        DdlProyectoInformacionInvolucradoChange: function () {
            base.Control.DdlDepartamentoInformacionInvolucrado().empty();
            base.Control.DdlAreaInformacionInvolucrado().empty();
            base.Control.DdlGuardiaInformacionInvolucrado().empty();
            base.Control.DdlDepartamentoInformacionInvolucrado().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
            if (base.Control.DdlProyectoInformacionInvolucrado().val() != null && base.Control.DdlProyectoInformacionInvolucrado().val() != '') {
                base.Ajax.AjaxBuscarDepartamentos.data = {
                    Departamento: { CodigoProyecto: base.Control.DdlProyectoInformacionInvolucrado().val() }
                };
                base.Ajax.AjaxBuscarDepartamentos.submit();
            }
        },

        DdlDepartamentoInformacionInvolucradoChange: function () {
            base.Control.DdlAreaInformacionInvolucrado().empty();
            base.Control.DdlGuardiaInformacionInvolucrado().empty();
            base.Control.DdlAreaInformacionInvolucrado().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
            if (base.Control.DdlDepartamentoInformacionInvolucrado().val() != null && base.Control.DdlDepartamentoInformacionInvolucrado().val() != '') {
                base.Ajax.AjaxBuscarAreas.data = {
                    Area: { CodigoDepartamento: base.Control.DdlDepartamentoInformacionInvolucrado().val() }
                };
                base.Ajax.AjaxBuscarAreas.submit();
            }
        },

        DdlAreaInformacionInvolucradoChange: function () {
            base.Control.DdlGuardiaInformacionInvolucrado().empty();
            base.Control.DdlGuardiaInformacionInvolucrado().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
            if (base.Control.DdlAreaInformacionInvolucrado().val() != null && base.Control.DdlAreaInformacionInvolucrado().val() != '') {
                base.Ajax.AjaxBuscarGuardias.data = {
                    Grupo: { CodigoArea: base.Control.DdlAreaInformacionInvolucrado().val() }
                };
                base.Ajax.AjaxBuscarGuardias.submit();
            }
        },
        /// TAB-EMPRESA
        // habilitar textbox segun opcion de DdlActividadEmrpesaRiesgo... valor = true
        DdlActividadEmpresaRiesgoInvolucradoChange: function () {
            if (base.Control.DdlActividadEmpresaRiesgoInvolucrado().val() == "true") {
                base.Control.TxtNTrabajadoresAfiliadosEmpresaInvolucrado().attr("disabled", false);
                base.Control.TxtNTrabajadoresNoAfiliadosEmpresaInvolucrado().attr("disabled", false);
                base.Control.TxtNombreAseguradoraEmpresaInvolucrado().attr("disabled", false);
            }
            else {
                base.Control.TxtNTrabajadoresAfiliadosEmpresaInvolucrado().attr("disabled", true);
                base.Control.TxtNTrabajadoresNoAfiliadosEmpresaInvolucrado().attr("disabled", true);
                base.Control.TxtNombreAseguradoraEmpresaInvolucrado().attr("disabled", true);
            }
        },


        DdlRecibioEntrenamientoTrabajoInvolucradoChange: function () {
            if (base.Control.DdlRecibioEntrenamientoTrabajoInvolucrado().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.ValoresHPI_SI) {
                base.Control.TxtComentarioEntrenamientoExperienciaInvolucrado().attr("disabled", false);                
            }
            else {
                base.Control.TxtComentarioEntrenamientoExperienciaInvolucrado().val('');
                base.Control.TxtComentarioEntrenamientoExperienciaInvolucrado().attr("disabled", true);
                base.Control.TxtComentarioEntrenamientoExperienciaInvolucrado().attr('class', 'form-control');                
            }
        },

        DdlLicenciaConducirExperienciaInvolucradoChange: function () {            
            if (base.Control.DdlLicenciaConducirExperienciaInvolucrado().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.ValoresHPI_SI) {
                base.Control.TxtLicenciaConducirExperienciaInvolucrado().attr("disabled", false);
            }
            else {
                base.Control.TxtLicenciaConducirExperienciaInvolucrado().val('');
                base.Control.TxtLicenciaConducirExperienciaInvolucrado().attr("disabled", true);
                base.Control.TxtLicenciaConducirExperienciaInvolucrado().attr('class', 'form-control');
            }
        },

        DdlLicenciaInternaExperienciaInvolucradoChange: function () {            
            if (base.Control.DdlLicenciaInternaExperienciaInvolucrado().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.ValoresHPI_SI) {
                base.Control.TxtLicenciaInternaExperienciaInvolucrado().attr("disabled", false);
            }
            else {
                base.Control.TxtLicenciaInternaExperienciaInvolucrado().val('');
                base.Control.TxtLicenciaInternaExperienciaInvolucrado().attr("disabled", true);
                base.Control.TxtLicenciaInternaExperienciaInvolucrado().attr('class', 'form-control');
            }
        },
        DdlExamenAlcolemiaPruebaInvolucradoChange: function () {
            if (base.Control.DdlExamenAlcolemiaPruebaInvolucrado().val() ==  Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.ValoresHPI_SI) {
                base.Control.DdlHizoAlcoholemiaPruebaInvolucrado().attr("disabled", false);
                base.Control.TxaComentarioAlcoholemiaPruebaInvolucrado().attr("disabled", false);
            }
            else {
                base.Control.DdlHizoAlcoholemiaPruebaInvolucrado().attr("disabled", true);
                base.Control.TxaComentarioAlcoholemiaPruebaInvolucrado().attr("disabled", true);
                base.Control.DdlHizoAlcoholemiaPruebaInvolucrado().attr('class', 'form-control');
                base.Control.TxaComentarioAlcoholemiaPruebaInvolucrado().attr('class', 'form-control');
                base.Control.BtnAgregarAnexoAlcoholemia().attr("disabled", true);

                base.Control.DdlHizoAlcoholemiaPruebaInvolucrado().val('');
                base.Control.TxaComentarioAlcoholemiaPruebaInvolucrado().val('');
            }
        },

        DdlHizoAlcoholemiaPruebaInvolucradoChange: function () {
            if (base.Control.DdlHizoAlcoholemiaPruebaInvolucrado().val() ==  Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.ValoresHPI_SI) {
                base.Control.BtnAgregarAnexoAlcoholemia().attr("disabled", false);
                base.Control.TxaComentarioAlcoholemiaPruebaInvolucrado().attr("disabled", false);
                base.Control.TxaComentarioAlcoholemiaPruebaInvolucrado().attr('class', 'form-control');
            }
            else {
                base.Control.BtnAgregarAnexoAlcoholemia().attr("disabled", true);
            }
        },

        DdlExamenDrogasPruebaInvolucradoChange: function () {
            if (base.Control.DdlExamenDrogasPruebaInvolucrado().val() ==  Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.ValoresHPI_SI) {
                    base.Control.DdlHizoDrogasPruebaInvolucrado().attr("disabled", false);
                    base.Control.TxaComentarioDrogaPruebaInvolucrado().attr("disabled", false);
            }
            else {
                    base.Control.DdlHizoDrogasPruebaInvolucrado().attr("disabled", true);
                    base.Control.TxaComentarioDrogaPruebaInvolucrado().attr("disabled", true);
                    base.Control.DdlHizoDrogasPruebaInvolucrado().attr('class', 'form-control');
                    base.Control.TxaComentarioDrogaPruebaInvolucrado().attr('class', 'form-control');
                    base.Control.BtnAgregarAnexoDroga().attr("disabled", true);

                    base.Control.DdlHizoDrogasPruebaInvolucrado().val('');
                    base.Control.TxaComentarioDrogaPruebaInvolucrado().val('');
            }
        },

        DdlHizoDrogasPruebaInvolucradoChange: function () {
            if (base.Control.DdlHizoDrogasPruebaInvolucrado().val() ==  Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.ValoresHPI_SI) {
                base.Control.BtnAgregarAnexoDroga().attr("disabled", false);
                base.Control.TxaComentarioDrogaPruebaInvolucrado().attr("disabled", false);
                base.Control.TxaComentarioDrogaPruebaInvolucrado().attr('class', 'form-control');
            }
            else {
                base.Control.BtnAgregarAnexoDroga().attr("disabled", true);
            }
        },


        DdlSufrioLesionOtrosInvolucradoChange:function () {
            //if (basec.Control.DdlSufrioLesionOtrosInvolucrado().val() == '01') {
            //    IndicadorLesionado = "si";
            //} else {
            //    IndicadorLesionado = "no";
            //}
        },


        BtnBuscarEmpresaPersonaInvolucradaClick: function () {
            base.Control.DlgFormularioEmpresaPersonaInvolucrada.Show(false, [], null);
        },
        BuscarEmpresaPersonaInvolucradaSuccess: function (empresaSeleccionada) {
            if (empresaSeleccionada.length > 0) {
                base.Control.HdnCodigoEmpresaPersonaInvolucrada().val(empresaSeleccionada[0].CodigoEmpresa);
                base.Control.HdnCodigoTipoEmpresa().val(empresaSeleccionada[0].CodigoTipoEmpresa);
                base.Control.TxtNombreEmpresaPersonaInvolucrada().val(empresaSeleccionada[0].RazonSocial);
                base.Control.TxtRucEmpresaInvolucrado().val(empresaSeleccionada[0].Ruc);
                base.Control.TxtDireccionEmpresaInvolucrado().val(empresaSeleccionada[0].Direccion);
                base.Control.TxtActividadEconomicaEmpresaInvolucrado().val(empresaSeleccionada[0].ActividadEconomica);
                base.Control.TxtNTrabajadoresEmpresaInvolucrado().val(empresaSeleccionada[0].NumeroTrabajadores);
                base.Control.TxtNTrabajadoresAfiliadosEmpresaInvolucrado().val(empresaSeleccionada[0].NumeroTrabajadoresAfiliados);
                base.Control.TxtNTrabajadoresNoAfiliadosEmpresaInvolucrado().val(empresaSeleccionada[0].NumeroTrabajadoresNoAfiliados);
                base.Control.TxtNombreAseguradoraEmpresaInvolucrado().val(empresaSeleccionada[0].NombreAseguradora);
                base.Control.TipoEmpresa = empresaSeleccionada[0].CodigoTipoEmpresa;
                if (base.Control.TipoEmpresa == "02") {
                    base.Control.BtnBuscarDuenioContratoTrabajo().attr("disabled", false);
                    base.Control.TxtAnioTiempoContratistaExperienciaInvolucrado().attr("disabled", false);
                    base.Control.DdlMesesTiempoContratistaExperienciaInvolucrado().attr("disabled", false);
                }
                else
                {
                    base.Control.BtnBuscarDuenioContratoTrabajo().attr("disabled", true);
                    base.Control.TxtAnioTiempoContratistaExperienciaInvolucrado().val('');
                    base.Control.DdlMesesTiempoContratistaExperienciaInvolucrado().val('');
                    base.Control.TxtAnioTiempoContratistaExperienciaInvolucrado().attr("disabled", true);
                    base.Control.DdlMesesTiempoContratistaExperienciaInvolucrado().attr("disabled", true);
                }
            }
            else
            {
                base.Control.HdnCodigoEmpresaPersonaInvolucrada().val(null);
                base.Control.HdnCodigoTipoEmpresa().val('');
                base.Control.TxtNombreEmpresaPersonaInvolucrada().val('');
                base.Control.TxtRucEmpresaInvolucrado().val('');
                base.Control.TxtDireccionEmpresaInvolucrado().val('');
                base.Control.TxtActividadEconomicaEmpresaInvolucrado().val('');
                base.Control.TxtNTrabajadoresEmpresaInvolucrado().val(0);
                base.Control.TxtNTrabajadoresAfiliadosEmpresaInvolucrado().val(0);
                base.Control.TxtNTrabajadoresNoAfiliadosEmpresaInvolucrado().val(0);
                base.Control.TxtNombreAseguradoraEmpresaInvolucrado().val('');
            }
        },

        BtnGrabarEmpresaPersonaInvolucradaClick: function () {
            if (base.Control.Validador.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarEmpresaColaboradorInvolucrado.data = {
                            CodigoInvestigacionInvolucrado: base.Control.FormularioInvolucradoModel.InvestigacionPersonaInvolucrada.CodigoInvestigacionInvolucrado, 
                            CodigoInvestigacion: base.Control.FormularioInvolucradoModel.InvestigacionPersonaInvolucrada.CodigoInvestigacion,
                            CodigoEmpresa: base.Control.HdnCodigoEmpresaPersonaInvolucrada().val(),
                            ActividadEconomica: base.Control.TxtActividadEconomicaEmpresaInvolucrado().val(),
                            NumeroTrabajadores: base.Control.TxtNTrabajadoresEmpresaInvolucrado().val(),
                            IndicadorActividadAltoRiesgo: base.Control.DdlActividadEmpresaRiesgoInvolucrado().val(),
                            NumeroTrabajadoresAfiliados: base.Control.TxtNTrabajadoresAfiliadosEmpresaInvolucrado().val(),
                            NumeroTrabajadoresNoAfiliados: base.Control.TxtNTrabajadoresNoAfiliadosEmpresaInvolucrado().val(),
                            NombreAseguradora: base.Control.TxtNombreAseguradoraEmpresaInvolucrado().val(),
                            CodigoDuenioContrato: base.Control.HdnCodigoDuenioContratoTrabajo().val(),
                            Empresa: {
                                CodigoEmpresa: base.Control.HdnCodigoEmpresaPersonaInvolucrada().val(),
                                CodigoDuenioContrato: base.Control.HdnCodigoDuenioContratoTrabajo().val(),
                                ActividadEconomica: base.Control.TxtActividadEconomicaEmpresaInvolucrado().val(),
                                NumeroTrabajadores: base.Control.TxtNTrabajadoresEmpresaInvolucrado().val(),
                                IndicadorActividadAltoRiesgo: base.Control.DdlActividadEmpresaRiesgoInvolucrado().val(),
                                NumeroTrabajadoresAfiliados: base.Control.TxtNTrabajadoresAfiliadosEmpresaInvolucrado().val(),
                                NumeroTrabajadoresNoAfiliados: base.Control.TxtNTrabajadoresNoAfiliadosEmpresaInvolucrado().val(),
                                NombreAseguradora: base.Control.TxtNombreAseguradoraEmpresaInvolucrado().val()
                            }
                        }
                        base.Ajax.AjaxGrabarEmpresaColaboradorInvolucrado.submit();
                    }
                });
            }
            else {
                $("#frmEmpresaColaboradorInvolucradoSummaryErrorMessage").empty();
                $("#frmEmpresaColaboradorInvolucradoSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },

        BtnGrabarInformacionPersonaInvolucradaClick: function () {
            if (base.Control.ValidadorDetalle.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarDetalleInvolucrado.data = {
                            CodigoInvestigacionInvolucrado: base.Control.FormularioInvolucradoModel.InvestigacionPersonaInvolucrada.CodigoInvestigacionInvolucrado,
                            CodigoInvestigacion: base.Control.FormularioInvolucradoModel.InvestigacionPersonaInvolucrada.CodigoInvestigacion,
                            CodigoColaboradorInvolucrado: base.Control.FormularioInvolucradoModel.Colaborador.CodigoColaborador,
                            Edad: base.Control.TxtEdadInformacionInvolucrado().val(),
                            Colaborador: {
                                CodigoColaborador: base.Control.FormularioInvolucradoModel.Colaborador.CodigoColaborador,
                                CodigoPuestoTrabajo: base.Control.DdlPuestoTrabajoInformacionInvolucrado().val(),
                                FechaNacimientoString: base.Control.DtpFechaNacimientoInformacionInvolucrado().val(),
                                CodigoEstadoCivil: base.Control.DdlEstadoCivilInformacionInvolucrado().val(),                                
                                NombrePais: base.Control.TxtPaisInformacionInvolucrado().val(),
                                NombreDepartamentoTerritorio: base.Control.TxtDepartamentoTerritorioInformacionInvolucrado().val(),
                                NombreProvincia: base.Control.TxtProvinciaInformacionInvolucrado().val(),
                                CodigoGenero: base.Control.DdlGeneroInformacionInvolucrado().val(),
                                CodigoGradoInstruccion: base.Control.DdlGradoInstruccionInformacionInvolucrado().val(),
                                CodigoTipoContrato: base.Control.DdlTipoContratoInformacionInvolucrado().val(),
                                CodigoProyecto: base.Control.DdlProyectoInformacionInvolucrado().val(),
                                CodigoDepartamento: base.Control.DdlDepartamentoInformacionInvolucrado().val(),
                                CodigoArea: base.Control.DdlAreaInformacionInvolucrado().val(),
                                Guardia: base.Control.DdlGuardiaInformacionInvolucrado().val()
                            }
                        }
                        base.Ajax.AjaxGrabarDetalleInvolucrado.submit();
                    }

                });
            }
            else {
                $("#frmInformacionGeneralPersonaInvolucradaSummaryErrorMessage").empty();
                $("#frmInformacionGeneralPersonaInvolucradaSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },

        BtnGrabarOtrosPersonaInvolucradaClick: function () {
            if (base.Control.DdlSufrioLesionOtrosInvolucrado().val() ==  Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.ValoresHPI_NO &&
                base.Control.FormularioInvolucradoModel.InvestigacionInvolucrado.CodigoIndicadorLesionado != null &&
                base.Control.IndicadorLesionado ==  Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.ValoresHPI_SI)
                base.Control.MensajeLesion = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.MensajeCambiarLesion;
            else
                base.Control.MensajeLesion = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.ConfirmacionGuardar;
            if (base.Control.ValidadorOtros.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: base.Control.MensajeLesion,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarOtrosColaboradorInvolucrado.data = {
                            CodigoInvestigacionInvolucrado: base.Control.FormularioInvolucradoModel.InvestigacionPersonaInvolucrada.CodigoInvestigacionInvolucrado,
                            CodigoInvestigacionCategoria: base.Control.FormularioInvolucradoModel.InvestigacionPersonaInvolucrada.CodigoInvestigacionCategoria,
                            CodigoInvestigacion: base.Control.FormularioInvolucradoModel.InvestigacionPersonaInvolucrada.CodigoInvestigacion,
                            ComoSeInvolucro: base.Control.TxtComoSeInvolucroOtrosInvolucrado().val(),
                            IndicadorSufrioLesion: base.Control.DdlSufrioLesionOtrosInvolucrado().val(),
                            EstadoServicioMomentoIncidente: base.Control.DdlEstadoServicioIncidenteOtrosInvolucrado().val()
                        }
                        base.Ajax.AjaxGrabarOtrosColaboradorInvolucrado.submit();
                    }
                });
            }
            else {
                $("#frmOtrosDetallesColaboradorSummaryErrorMessage").empty();
                $("#frmOtrosDetallesColaboradorSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },

        BtnGrabarExperienciaPersonaInvolucradaClick: function () {
            if (base.Control.ValidadorExperiencia.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarExperienciaColaboradorInvolucrado.data = {
                            CodigoInvestigacionInvolucrado: base.Control.FormularioInvolucradoModel.InvestigacionPersonaInvolucrada.CodigoInvestigacionInvolucrado,
                            ExperienciaNegocioAnios: base.Control.TxtAnioNegocioExperienciaInvolucrado().val(),
                            ExperienciaNegocioMeses: base.Control.DdlMesesNegocioExperienciaInvolucrado().val(),
                            TiempoProyectoAnios: base.Control.TxtAnioTiempoProyectoExperienciaInvolucrado().val(),
                            TiempoProyectoMeses: base.Control.DdlMesesTiempoProyectoExperienciaInvolucrado().val(),
                            TiempoContratistaAnios: base.Control.TxtAnioTiempoContratistaExperienciaInvolucrado().val(),
                            TiempoContratistaMeses: base.Control.DdlMesesTiempoContratistaExperienciaInvolucrado().val(),
                            ExperienciaPuestoAnios: base.Control.TxtAnioPuestoExperienciaInvolucrado().val(),
                            ExperienciaPuestoMeses: base.Control.DdlMesesPuestoExperienciaInvolucrado().val(),
                            ActividadMomentoIncidente: base.Control.TxaActividadMomentoIncidenteExperienciaInvolucrado().val(),
                            TareaMomentoIncidente: base.Control.TxaTareaMomentoIncidenteExperienciaInvolucrado().val(),
                            EntrenamientoRecibidoEjecucionActividad: base.Control.DdlRecibioEntrenamientoTrabajoInvolucrado().val(),
                            ComentarioEntrenamiento: base.Control.TxtComentarioEntrenamientoExperienciaInvolucrado().val(),
                            CuentaLicenciaConducir: base.Control.DdlLicenciaConducirExperienciaInvolucrado().val(),
                            NumeroLicenciaConducir: base.Control.TxtLicenciaConducirExperienciaInvolucrado().val(),
                            CuentaLicenciaInterna: base.Control.DdlLicenciaInternaExperienciaInvolucrado().val(),
                            CodigoLicenciaInterna: base.Control.TxtLicenciaInternaExperienciaInvolucrado().val(),
                            CodigoArchivoEntrenamiento: base.Control.FormularioInvolucradoModel.InvestigacionInvolucradoExperiencia.CodigoArchivoEntrenamiento,
                            NombreArchivoEntrenamiento: base.Control.FormularioInvolucradoModel.InvestigacionInvolucradoExperiencia.NombreArchivoEntrenamiento,
                            CodigoArchivoLicenciaConducir: base.Control.FormularioInvolucradoModel.InvestigacionInvolucradoExperiencia.CodigoArchivoLicenciaConducir,
                            NombreArchivoLicenciaConducir: base.Control.FormularioInvolucradoModel.InvestigacionInvolucradoExperiencia.NombreArchivoLicenciaConducir,
                            CodigoArchivoLicenciaInterna: base.Control.FormularioInvolucradoModel.InvestigacionInvolucradoExperiencia.CodigoArchivoLicenciaInterna,
                            NombreArchivoLicenciaInterna: base.Control.FormularioInvolucradoModel.InvestigacionInvolucradoExperiencia.NombreArchivoLicenciaInterna,
                        }
                        base.Ajax.AjaxGrabarExperienciaColaboradorInvolucrado.submit();
                    }
                });
            }
            else {
                $("#frmExperienciaColaboradorInvolucradoSummaryErrorMessage").empty();
                $("#frmExperienciaColaboradorInvolucradoSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },

        BtnGrabarTurnoPersonaInvolucradaClick: function () {
            if (base.Control.ValidadorTurno.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarTurnoColaboradorInvolucrado.data = {
                            CodigoInvestigacionInvolucrado: base.Control.FormularioInvolucradoModel.InvestigacionPersonaInvolucrada.CodigoInvestigacionInvolucrado,
                            CodigoInvestigacion: base.Control.FormularioInvolucradoModel.InvestigacionPersonaInvolucrada.CodigoInvestigacion,
                            SistemaTrabajo: base.Control.TxtSistemaTrabajoTurnoInvolucrado().val(),
                            TurnoMixto: base.Control.DdlTurnoMixtoTurnoInvolucrado().val(),
                            TimeDuracionCambioString: '01/01/2000' + ' ' + base.Control.DdlHoraDuracionCambioTurnoInvolucrado().val() + ':' + base.Control.DdlMinutoDuracionCambioTurnoInvolucrado().val(),
                            TimeInicioHorarioString: '01/01/2000' + ' ' + base.Control.DdlHoraInicioHorarioTurnoInvolucrado().val() + ':' + base.Control.DdlMinutoInicioHorarioTurnoInvolucrado().val(),
                            NumeroTurnoAntesIncidente: base.Control.TxtNumeroTurnosInvolucrado().val(),
                            DiaTrabajo: base.Control.TxtDiaTrabajoTurnoInvolucrado().val(),
                            HorasTurno: base.Control.TxtHorasTurnoInvolucrado().val(),
                            DiasDescansoAntesCicloActual: base.Control.TxtDiasDescansoAntesCicloActualTurnoInvolucrado().val()
                        }
                        base.Ajax.AjaxGrabarTurnoColaboradorInvolucrado.submit();
                    }
                });
            }
            else {
                $("#frmTurnoColaboradorInvolucradoSummaryErrorMessage").empty();
                $("#frmTurnoColaboradorInvolucradoSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },

        BtnGrabarPruebaPersonaInvolucradaClick: function () {
            if (base.Control.ValidadorPrueba.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarPruebaColaboradorInvolucrado.data = {
                            CodigoInvestigacionInvolucrado: base.Control.FormularioInvolucradoModel.InvestigacionPersonaInvolucrada.CodigoInvestigacionInvolucrado,
                            CodigoInvestigacion: base.Control.FormularioInvolucradoModel.InvestigacionPersonaInvolucrada.CodigoInvestigacion,
                            NecesarioExamenAlcoholemia: base.Control.DdlExamenAlcolemiaPruebaInvolucrado().val(),
                            HizoExamenAlcoholemia: base.Control.DdlHizoAlcoholemiaPruebaInvolucrado().val(),
                            ComentarioAlcoholemia: base.Control.TxaComentarioAlcoholemiaPruebaInvolucrado().val(),
                            NecesarioExamenDroga: base.Control.DdlExamenDrogasPruebaInvolucrado().val(),
                            HizoExamenDroga: base.Control.DdlHizoDrogasPruebaInvolucrado().val(),
                            ComentarioDroga: base.Control.TxaComentarioDrogaPruebaInvolucrado().val(),
                            CodigoArchivoAlcoholemia: base.Control.FormularioInvolucradoModel.InvestigacionInvolucradoPrueba.CodigoArchivoAlcoholemia,
                            NombreArchivoAlcoholemia: base.Control.FormularioInvolucradoModel.InvestigacionInvolucradoPrueba.NombreArchivoAlcoholemia,
                            CodigoArchivoDroga: base.Control.FormularioInvolucradoModel.InvestigacionInvolucradoPrueba.CodigoArchivoDroga,
                            NombreArchivoDroga: base.Control.FormularioInvolucradoModel.InvestigacionInvolucradoPrueba.NombreArchivoDroga
                        }
                        base.Ajax.AjaxGrabarPruebaColaboradorInvolucrado.submit();
                    }
                });
            }
            else {
                $("#frmPruebaAlcoholemiaDrogasColaboradorSummaryErrorMessage").empty();
                $("#frmPruebaAlcoholemiaDrogasColaboradorSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },

        BtnGrabarFatigaPersonaInvolucradaClick: function () {
            if (base.Control.ValidadorFatiga.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarFatigaColaboradorInvolucrado.data = {
                            CodigoInvestigacionInvolucrado: base.Control.FormularioInvolucradoModel.InvestigacionPersonaInvolucrada.CodigoInvestigacionInvolucrado,
                            CodigoInvestigacion: base.Control.FormularioInvolucradoModel.InvestigacionPersonaInvolucrada.CodigoInvestigacion,
                            ReportoSupervisorCansancio: base.Control.DdlReportoSupervisorFatigaInvolucrado().val(),
                            HorasDormido24hrs: base.Control.TxtHorasDormido24HorasFatigaInvolucrado().val(),
                            HorasDormido48hrs: base.Control.TxtHorasDormido48HorasFatigaInvolucrado().val(),
                            HorasDespiertoHastaFinalLabor: base.Control.TxtHorasDespiertoHastaFinalLaborFatigaInvolucrado().val(),
                            IndiceFatiga: parseInt(base.Control.SnpIndiceFatiga().text())
                        }
                        base.Ajax.AjaxGrabarFatigaColaboradorInvolucrado.submit();
                    }
                });
            }
            else {
                $("#frmFatigaColaboradorInvolucradoSummaryErrorMessage").empty();
                $("#frmFatigaColaboradorInvolucradoSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },

        AjaxGrabarInvolucradoSuccess: function (resultado) {
            if (resultado.IsSuccess) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                if (base.Event.BuscarSuccess != null) {
                    base.Event.BuscarSuccess();
                }
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },

        AjaxGrabarEmpresaColaboradorInvolucradoSuccess: function (resultado) {
            if (resultado.IsSuccess) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                if (base.Event.BuscarSuccess != null) {
                    base.Event.BuscarSuccess();
                }
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxGrabarOtrosColaboradorInvolucradoSuccess: function (resultado) {
            if (resultado.IsSuccess) {

                base.Control.TxtActualConsecuenciaCategoriaLesion().val(resultado.Result.DescripcionConsecuenciaActual);
                base.Control.TxtPotencialConsecuenciaCategoriaLesion().val(resultado.Result.DescripcionConsecuenciaPotencial);
                $('input[name="consecuenciaInvestigacionCategoriaLesionActual"]').each(function (i) {
                    $(this).prop("checked", false);
                });
                $('input[name="consecuenciaInvestigacionCategoriaLesionPotencial"]').each(function (i) {
                    $(this).prop("checked", false);
                });
                $('#radioCategoriaLesionActual_' + resultado.Result.CodigoConsecuenciaActual).prop("checked", true);
                $('#radioCategoriaLesionPotencial_' + resultado.Result.CodigoConsecuenciaPotencial).prop("checked", true);

                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Control.IndicadorLesionado = base.Control.DdlSufrioLesionOtrosInvolucrado().val();
                if (base.Event.BuscarSuccess != null) {
                    base.Event.BuscarSuccess();
                }
                
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxGrabarExperienciaColaboradorInvolucradoSuccess: function (resultado) {
            if (resultado.IsSuccess) {
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
        AjaxGrabarTurnoColaboradorInvolucradoSuccess: function (resultado) {
            if (resultado.IsSuccess) {
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
        AjaxGrabarPruebaColaboradorInvolucradoSuccess: function (resultado) {
            if (resultado.IsSuccess) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                //AppendiceBase64Alcoholemia = '';
                //AppendiceBase64Droga = '';
                //AppendiceNombreArchivo4 = '';
                //AppendiceNombreArchivo5 = '';
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxGrabarFatigaColaboradorInvolucradoSuccess: function (resultado) {
            if (resultado.IsSuccess) {
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

        AjaxBuscarDepartamentosSuccess: function (resultado) {
            'use strict'
            $.each(resultado.Result, function (index, value) {
                base.Control.DdlDepartamentoInformacionInvolucrado().append(new Option(value.NombreDepartamento, value.CodigoDepartamento));
            });
        },

        AjaxBuscarAreasSuccess: function (resultado) {
            'use strict'
            $.each(resultado.Result, function (index, value) {
                base.Control.DdlAreaInformacionInvolucrado().append(new Option(value.NombreArea, value.CodigoArea));
            });
        },
        AjaxBuscarGuardiasSuccess: function (resultado) {
            'use strict'
            $.each(resultado.Result, function (index, value) {
                base.Control.DdlGuardiaInformacionInvolucrado().append(new Option(value.NombreGrupo, value.CodigoGrupo));
            });
        },

        BtnAgregarAnexoAlcoholemiaClick: function () {
            if (base.Control.DdlHizoAlcoholemiaPruebaInvolucrado().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoEvaluacion.Si)
                base.Control.IndicadorObligatorio = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.IndicadorObligatorio.Afirmativo;
            else
                base.Control.IndicadorObligatorio = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.IndicadorObligatorio.Negativo;
            if (base.Control.FormularioInvolucradoModel.InvestigacionInvolucrado.CodigoInvestigacion != null) {
                base.Control.DlgFormularioAnexoAlcoholemia.Show({
                    CodigoInvestigacionAnexo: null,
                    CodigoArchivoAnexoSharePoint: base.Control.FormularioInvolucradoModel.InvestigacionInvolucradoPrueba.CodigoArchivoAlcoholemia,
                    CodigoInvestigacion: base.Control.FormularioInvolucradoModel.InvestigacionInvolucrado.CodigoInvestigacion,
                    CodigoEstadoInvestigacion: base.Control.FormularioInvolucradoModel.InvestigacionInvolucrado.CodigoEstadoInvestigacion,
                    CodigoClaseAnexo: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoInvestigacionTipoAnexo.CodigoPruebaAlcoholemia,
                    IndicadorObligatorio: base.Control.IndicadorObligatorio,
                    flagPermitirCodigoTipoApendice: false
                });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValidarTabPrincipal,
                });
            }
        },

        BtnAgregarAnexoDrogaClick: function () {
            if (base.Control.DdlHizoDrogasPruebaInvolucrado().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoEvaluacion.Si)
                base.Control.IndicadorObligatorio = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.IndicadorObligatorio.Afirmativo;
            else
                base.Control.IndicadorObligatorio = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.IndicadorObligatorio.Negativo;
            if (base.Control.FormularioInvolucradoModel.InvestigacionInvolucrado.CodigoInvestigacion != null) {
                base.Control.DlgFormularioAnexoDroga.Show({
                    CodigoInvestigacionAnexo: null,
                    CodigoArchivoAnexoSharePoint: base.Control.FormularioInvolucradoModel.InvestigacionInvolucradoPrueba.CodigoArchivoDroga,
                    CodigoInvestigacion: base.Control.FormularioInvolucradoModel.InvestigacionInvolucrado.CodigoInvestigacion,
                    CodigoEstadoInvestigacion: base.Control.FormularioInvolucradoModel.InvestigacionInvolucrado.CodigoEstadoInvestigacion,
                    CodigoClaseAnexo: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoInvestigacionTipoAnexo.CodigoPruebaDroga,
                    IndicadorObligatorio: base.Control.IndicadorObligatorio,
                    flagPermitirCodigoTipoApendice: false
                });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValidarTabPrincipal,
                });
            }
        },

        BtnAgregarAnexoEntrenamientoClick: function () {
            var indicadorEntrenamiento = null;
            if (base.Control.DdlRecibioEntrenamientoTrabajoInvolucrado().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoEvaluacion.Si)
                indicadorEntrenamiento = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.IndicadorObligatorio.Afirmativo;
            else
                indicadorEntrenamiento = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.IndicadorObligatorio.Negativo;
            if (base.Control.FormularioInvolucradoModel.InvestigacionInvolucrado.CodigoInvestigacion != null) {
                base.Control.DlgFormularioAnexoEntrenamiento.Show({
                    CodigoInvestigacionAnexo: null,
                    CodigoArchivoAnexoSharePoint: base.Control.FormularioInvolucradoModel.InvestigacionInvolucradoExperiencia.CodigoArchivoEntrenamiento,
                    CodigoInvestigacion: base.Control.FormularioInvolucradoModel.InvestigacionInvolucrado.CodigoInvestigacion,
                    CodigoEstadoInvestigacion: base.Control.FormularioInvolucradoModel.InvestigacionInvolucrado.CodigoEstadoInvestigacion,
                    CodigoClaseAnexo: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoInvestigacionTipoAnexo.CodigoRegistroEntrenamiento,
                    IndicadorObligatorio: indicadorEntrenamiento,
                    flagPermitirCodigoTipoApendice: false
                });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValidarTabPrincipal,
                });
            }
        },

        BtnAgregarAnexoLicenciaConducirClick: function () {
            if (base.Control.FormularioInvolucradoModel.InvestigacionInvolucrado.CodigoInvestigacion != null) {
                base.Control.DlgFormularioAnexoLicenciaConducir.Show({
                    CodigoInvestigacionAnexo: null,
                    CodigoArchivoAnexoSharePoint: base.Control.FormularioInvolucradoModel.InvestigacionInvolucradoExperiencia.CodigoArchivoLicenciaConducir,
                    CodigoInvestigacion: base.Control.FormularioInvolucradoModel.InvestigacionInvolucrado.CodigoInvestigacion,
                    CodigoEstadoInvestigacion: base.Control.FormularioInvolucradoModel.InvestigacionInvolucrado.CodigoEstadoInvestigacion,
                    CodigoClaseAnexo: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoInvestigacionTipoAnexo.CodigoLicenciaConducir,
                    IndicadorObligatorio: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.IndicadorObligatorio.Negativo,
                    flagPermitirCodigoTipoApendice: false
                });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValidarTabPrincipal,
                });
            }
        },

        BtnAgregarAnexoLicenciaInternaClick: function () {
            if (base.Control.FormularioInvolucradoModel.InvestigacionInvolucrado.CodigoInvestigacion != null) {
                base.Control.DlgFormularioAnexoLicenciaInterna.Show({
                    CodigoInvestigacionAnexo: null,
                    CodigoArchivoAnexoSharePoint: base.Control.FormularioInvolucradoModel.InvestigacionInvolucradoExperiencia.CodigoArchivoLicenciaInterna,
                    CodigoInvestigacion: base.Control.FormularioInvolucradoModel.InvestigacionInvolucrado.CodigoInvestigacion,
                    CodigoEstadoInvestigacion: base.Control.FormularioInvolucradoModel.InvestigacionInvolucrado.CodigoEstadoInvestigacion,
                    CodigoClaseAnexo: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoInvestigacionTipoAnexo.CodigoLicenciaInterna,
                    IndicadorObligatorio: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.IndicadorObligatorio.Negativo,
                    flagPermitirCodigoTipoApendice: false
                });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValidarTabPrincipal,
                });
            }
        },

        GrabarInvestigacionAnexoAlcoholemiaSuccess: function (filtro) {
            if (filtro != null) {
                base.Control.FormularioInvolucradoModel.InvestigacionInvolucradoPrueba.CodigoArchivoAlcoholemia = filtro.CodigoArchivoAnexoSharePoint;
                base.Control.FormularioInvolucradoModel.InvestigacionInvolucradoPrueba.NombreArchivoAlcoholemia = filtro.NombreArchivoAnexoSharePoint;
                base.Control.HdnCodigoArchivoAlcoholemia().val(filtro.CodigoArchivoAnexoSharePoint);
                base.Control.TxtNombreArchivoAlcoholemia().val(filtro.NombreArchivoAnexoSharePoint);
            }
        },

        GrabarInvestigacionAnexoDrogaSuccess: function (filtro) {
            if (filtro != null) {
                base.Control.FormularioInvolucradoModel.InvestigacionInvolucradoPrueba.CodigoArchivoDroga = filtro.CodigoArchivoAnexoSharePoint;
                base.Control.FormularioInvolucradoModel.InvestigacionInvolucradoPrueba.NombreArchivoDroga = filtro.NombreArchivoAnexoSharePoint;
                base.Control.HdnCodigoArchivoDroga().val(filtro.CodigoArchivoAnexoSharePoint);
                base.Control.TxtNombreArchivoDroga().val(filtro.NombreArchivoAnexoSharePoint);
            }
        },

        GrabarInvestigacionAnexoEntrenamientoSuccess: function (filtro) {
            if (filtro != null) {
                base.Control.FormularioInvolucradoModel.InvestigacionInvolucradoExperiencia.CodigoArchivoEntrenamiento = filtro.CodigoArchivoAnexoSharePoint;
                base.Control.FormularioInvolucradoModel.InvestigacionInvolucradoExperiencia.NombreArchivoEntrenamiento = filtro.NombreArchivoAnexoSharePoint;
                base.Control.HdnCodigoArchivoEntrenamiento().val(filtro.CodigoArchivoAnexoSharePoint);
                base.Control.TxtNombreArchivoEntrenamiento().val(filtro.NombreArchivoAnexoSharePoint);
            }
        },

        GrabarInvestigacionAnexoLicenciaConducirSuccess: function (filtro) {
            if (filtro != null) {
                base.Control.FormularioInvolucradoModel.InvestigacionInvolucradoExperiencia.CodigoArchivoLicenciaConducir = filtro.CodigoArchivoAnexoSharePoint;
                base.Control.FormularioInvolucradoModel.InvestigacionInvolucradoExperiencia.NombreArchivoLicenciaConducir = filtro.NombreArchivoAnexoSharePoint;
                base.Control.HdnCodigoArchivoLicenciaConducir().val(filtro.CodigoArchivoAnexoSharePoint);
                base.Control.TxtNombreArchivoLicenciaConducir().val(filtro.NombreArchivoAnexoSharePoint);
            }
        },

        GrabarInvestigacionAnexoLicenciaInternaSuccess: function (filtro) {
            if (filtro != null) {
                base.Control.FormularioInvolucradoModel.InvestigacionInvolucradoExperiencia.CodigoArchivoLicenciaInterna = filtro.CodigoArchivoAnexoSharePoint;
                base.Control.FormularioInvolucradoModel.InvestigacionInvolucradoExperiencia.NombreArchivoLicenciaInterna = filtro.NombreArchivoAnexoSharePoint;
                base.Control.HdnCodigoArchivoLicenciaInterna().val(filtro.CodigoArchivoAnexoSharePoint);
                base.Control.TxtNombreArchivoLicenciaInterna().val(filtro.NombreArchivoAnexoSharePoint);
            }
        },

        BtnCancelarInformacionInvolucradoChange: function () { base.Control.DlgFormularioGeneralInvestigacionInvolucrado.divDialog.close();},
        BtnCancelarEmpresaInvolucradoChange: function () { base.Control.DlgFormularioGeneralInvestigacionInvolucrado.divDialog.close(); },
        BtnCancelarExperienciaPersonaInvolucradaChange: function () { base.Control.DlgFormularioGeneralInvestigacionInvolucrado.divDialog.close(); },
        BtnCancelarTurnoPersonaInvolucradaChange: function () { base.Control.DlgFormularioGeneralInvestigacionInvolucrado.divDialog.close(); },
        BtnCancelarPruebaPersonaInvolucradaChange: function () { base.Control.DlgFormularioGeneralInvestigacionInvolucrado.divDialog.close(); },
        BtnCancelarFatigaPersonaInvolucradaChange: function () { base.Control.DlgFormularioGeneralInvestigacionInvolucrado.divDialog.close(); },
        BtnCancelarOtrosPersonaInvolucradaChange: function () { base.Control.DlgFormularioGeneralInvestigacionInvolucrado.divDialog.close(); },
    };

    base.Ajax = {
        AjaxGrabarEmpresaColaboradorInvolucrado: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarEmpresaColaboradorInvolucrado,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarEmpresaColaboradorInvolucradoSuccess
        }),

        AjaxGrabarDetalleInvolucrado: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarDetalleColaboradorInvolucrado,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarInvolucradoSuccess
        }),

        AjaxGrabarOtrosColaboradorInvolucrado: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarOtrosColaboradorInvolucrado,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarOtrosColaboradorInvolucradoSuccess
        }),

        AjaxGrabarExperienciaColaboradorInvolucrado: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarExperienciaColaboradorInvolucrado,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarExperienciaColaboradorInvolucradoSuccess
        }),

        AjaxGrabarTurnoColaboradorInvolucrado: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarTurnoColaboradorInvolucrado,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarTurnoColaboradorInvolucradoSuccess
        }),

        AjaxGrabarPruebaColaboradorInvolucrado: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarPruebaColaboradorInvolucrado,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarPruebaColaboradorInvolucradoSuccess
        }),

        AjaxGrabarFatigaColaboradorInvolucrado: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarFatigaColaboradorInvolucrado,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarFatigaColaboradorInvolucradoSuccess
        }),

        AjaxBuscarDepartamentos: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarDepartamento,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarDepartamentosSuccess
        }),

        AjaxBuscarAreas: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarAreaPorDepartamento,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarAreasSuccess
        }),

        AjaxBuscarGuardias: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarGuardiaPorArea,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarGuardiasSuccess
        }),
    };

    base.AjaxSuccess = {
        AjaxGrabarColaboradorInvolucradoSuccess: function (resultado) {
            if (resultado.IsSuccess) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Control.DlgFormularioEmpresaPersonaInvolucrada.divDialog.close();
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        }
    }
};

