/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 08022017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Control.FormularioInvestigacionModel = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Models.FormularioInvestigacion;
        //base.Control.listaRecordTipoAnexo = [];
        //base.Control.listaRecordAnexos = [];
        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpDetalleFechaReporteAnuncio(),
            minDateFrom: new Date(1900, 1, 1)
        });
        base.Control.BtnCancelarInformacionGeneral().off('click');
        base.Control.BtnCancelarInformacionGeneral().on('click', base.Event.BtnCancelarInformacionGeneralClick);

        base.Control.BtnCancelarEstadoInvestigacion().off('click');
        base.Control.BtnCancelarEstadoInvestigacion().on('click', base.Event.btnCancelarEstadoInvestigacionClick);

        base.Control.BtnCancelarDatosReportante().off('click');
        base.Control.BtnCancelarDatosReportante().on('click', base.Event.btnCancelarDatosReportanteClick);

        //TABS COSTOS DEL INCIDENTE
        //Tab de Costos de investigación
        base.Control.BtnGrabarTabCostoInvestigacion().off('click');
        base.Control.BtnGrabarTabCostoInvestigacion().on('click', base.Event.BtnGrabarTabCostoInvestigacionClick);
        base.Control.BtnCancelarTabCostoInvestigacion().off('click');
        base.Control.BtnCancelarTabCostoInvestigacion().on('click', base.Event.BtnCancelarTabCostoInvestigacionClick);

        base.Control.BtnAgregarCostoInvestigacionTrabajadorInvolucrado().click(base.Event.BtnAgregarCostoInvestigacionTrabajadorInvolucradoClick);
        base.Control.TxtCostoInvestigacionTrabajadorInvolucradoCantidad().on('keyup', base.Event.TxtCostoInvestigacionTrabajadorInvolucradoCantidadKeyup);
        base.Control.TxtCostoInvestigacionTrabajadorInvolucradoTiempo().on('keyup', base.Event.TxtCostoInvestigacionTrabajadorInvolucradoTiempoKeyup);
        base.Control.TxtCostoInvestigacionTrabajadorInvolucradoPrecioUnitario().on('keyup', base.Event.TxtCostoInvestigacionTrabajadorInvolucradoPrecioUnitarioKeyup);
        base.Control.TxtCostoInvestigacionTrabajadorInvolucradoCosto().on('keyup', base.Event.TxtCostoInvestigacionTrabajadorInvolucradoCostoKeyup);

        base.Control.BtnAgregarCostoInvestigacionSupervisor().click(base.Event.BtnAgregarCostoInvestigacionSupervisorClick);
        base.Control.TxtCostoInvestigacionSupervisorCantidad().on('keyup', base.Event.TxtCostoInvestigacionSupervisorCantidadKeyup);
        base.Control.TxtCostoInvestigacionSupervisorTiempo().on('keyup', base.Event.TxtCostoInvestigacionSupervisorTiempoKeyup);
        base.Control.TxtCostoInvestigacionSupervisorPrecioUnitario().on('keyup', base.Event.TxtCostoInvestigacionSupervisorPrecioUnitarioKeyup);
        base.Control.TxtCostoInvestigacionSupervisorCosto().on('keyup', base.Event.TxtCostoInvestigacionSupervisorCostoKeyup);

        base.Control.BtnAgregarCostoInvestigacionDeclaracionTestigo().click(base.Event.BtnAgregarCostoInvestigacionDeclaracionTestigoClick);
        base.Control.TxtCostoInvestigacionDeclaracionTestigoCantidad().on('keyup', base.Event.TxtCostoInvestigacionDeclaracionTestigoCantidadKeyup);
        base.Control.TxtCostoInvestigacionDeclaracionTestigoTiempo().on('keyup', base.Event.TxtCostoInvestigacionDeclaracionTestigoTiempoKeyup);
        base.Control.TxtCostoInvestigacionDeclaracionTestigoPrecioUnitario().on('keyup', base.Event.TxtCostoInvestigacionDeclaracionTestigoPrecioUnitarioKeyup);
        base.Control.TxtCostoInvestigacionDeclaracionTestigoCosto().on('keyup', base.Event.TxtCostoInvestigacionDeclaracionTestigoCostoKeyup);

        base.Event.BtnBuscarCostoInvestigacionTrabajadorInvolucradoClick();
        base.Event.BtnBuscarCostoInvestigacionSupervisorClick();
        base.Event.BtnBuscarCostoInvestigacionDeclaracionTestigoClick();

        //Tab de Costos Personal       
        base.Control.BtnGrabarTabCostoPersonal().off('click');
        base.Control.BtnGrabarTabCostoPersonal().on('click', base.Event.BtnGrabarTabCostoPersonalClick);
        base.Control.BtnCancelarTabCostoPersonal().off('click');
        base.Control.BtnCancelarTabCostoPersonal().on('click', base.Event.BtnCancelarTabCostoPersonalClick);

        base.Event.BtnBuscarCostoPersonalTrabajadorInvolucradoClick();
        base.Control.BtnAgregarCostoPersonalTrabajadorInvolucrado().click(base.Event.BtnAgregarCostoPersonalTrabajadorInvolucradoClick);
        base.Control.TxtCostoPersonalTrabajadorInvolucradoCantidad().on('keyup', base.Event.TxtCostoPersonalTrabajadorInvolucradoCantidadKeyup);
        base.Control.TxtCostoPersonalTrabajadorInvolucradoTiempo().on('keyup', base.Event.TxtCostoPersonalTrabajadorInvolucradoTiempoKeyup);
        base.Control.TxtCostoPersonalTrabajadorInvolucradoPrecioUnitario().on('keyup', base.Event.TxtCostoPersonalTrabajadorInvolucradoPrecioUnitarioKeyup);
        base.Control.TxtCostoPersonalTrabajadorInvolucradoCosto().on('keyup', base.Event.TxtCostoPersonalTrabajadorInvolucradoCostoKeyup);

        base.Event.BtnBuscarCostoPersonalSupervisorClick();
        base.Control.BtnAgregarCostoPersonalSupervisor().click(base.Event.BtnAgregarCostoPersonalSupervisorClick);
        base.Control.TxtCostoPersonalSupervisorCantidad().on('keyup', base.Event.TxtCostoPersonalSupervisorCantidadKeyup);
        base.Control.TxtCostoPersonalSupervisorTiempo().on('keyup', base.Event.TxtCostoPersonalSupervisorTiempoKeyup);
        base.Control.TxtCostoPersonalSupervisorPrecioUnitario().on('keyup', base.Event.TxtCostoPersonalSupervisorPrecioUnitarioKeyup);
        base.Control.TxtCostoPersonalSupervisorCosto().on('keyup', base.Event.TxtCostoPersonalSupervisorCostoKeyup);

        //Tab de Costos Medio ambiental
        base.Control.BtnGrabarTabCostoMedioambiental().off('click');
        base.Control.BtnGrabarTabCostoMedioambiental().on('click', base.Event.BtnGrabarTabCostoMedioambientalClick);
        base.Control.BtnCancelarTabCostoMedioambiental().off('click');
        base.Control.BtnCancelarTabCostoMedioambiental().on('click', base.Event.BtnCancelarTabCostoMedioambientalClick);

        base.Event.BtnBuscarCostoMedioambientalPersonalUtilizadoClick();
        base.Control.BtnAgregarCostoMedioambientalPersonalUtilizado().click(base.Event.BtnAgregarCostoMedioambientalPersonalUtilizadoClick);
        base.Control.TxtCostoMedioambientalPersonalUtilizadoCantidad().on('keyup', base.Event.TxtCostoMedioambientalPersonalUtilizadoCantidadKeyup);
        base.Control.TxtCostoMedioambientalPersonalUtilizadoTiempo().on('keyup', base.Event.TxtCostoMedioambientalPersonalUtilizadoTiempoKeyup);
        base.Control.TxtCostoMedioambientalPersonalUtilizadoPrecioUnitario().on('keyup', base.Event.TxtCostoMedioambientalPersonalUtilizadoPrecioUnitarioKeyup);
        base.Control.TxtCostoMedioambientalPersonalUtilizadoCosto().on('keyup', base.Event.TxtCostoMedioambientalPersonalUtilizadoCostoKeyup);

        base.Event.BtnBuscarCostoMedioambientalMaterialUtilizadoClick();
        base.Control.BtnAgregarCostoMedioambientalMaterialUtilizado().click(base.Event.BtnAgregarCostoMedioambientalMaterialUtilizadoClick);

        //Tab de Costos Impacto Comunidad
        base.Control.BtnGrabarTabCostoImpactoComunidad().off('click');
        base.Control.BtnGrabarTabCostoImpactoComunidad().on('click', base.Event.BtnGrabarTabCostoImpactoComunidadClick);
        base.Control.BtnCancelarTabCostoImpactoComunidad().off('click');
        base.Control.BtnCancelarTabCostoImpactoComunidad().on('click', base.Event.BtnCancelarTabCostoImpactoComunidadClick);

        //Tab de Costos Daños Propiedad
        base.Control.BtnGrabarTabCostoDaniosPropiedad().off('click');
        base.Control.BtnGrabarTabCostoDaniosPropiedad().on('click', base.Event.BtnGrabarTabCostoDaniosPropiedadClick);
        base.Control.BtnCancelarTabCostoDaniosPropiedad().off('click');
        base.Control.BtnCancelarTabCostoDaniosPropiedad().on('click', base.Event.BtnCancelarTabCostoDaniosPropiedadClick);


        base.Event.BtnBuscarCostoDaniosPropiedadPersonalUtilizadoClick();
        base.Control.BtnAgregarCostoDaniosPropiedadPersonalUtilizado().click(base.Event.BtnAgregarCostoDaniosPropiedadPersonalUtilizadoClick);
        base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoCantidad().on('keyup', base.Event.TxtCostoDaniosPropiedadPersonalUtilizadoCantidadKeyup);
        base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoTiempo().on('keyup', base.Event.TxtCostoDaniosPropiedadPersonalUtilizadoTiempoKeyup);
        base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoPrecioUnitario().on('keyup', base.Event.TxtCostoDaniosPropiedadPersonalUtilizadoPrecioUnitarioKeyup);
        base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoCosto().on('keyup', base.Event.TxtCostoDaniosPropiedadPersonalUtilizadoCostoKeyup);


        base.Event.BtnBuscarCostoDaniosPropiedadEquipoUtilizadoClick();
        base.Control.BtnAgregarCostoDaniosPropiedadEquipoUtilizado().click(base.Event.BtnAgregarCostoDaniosPropiedadEquipoUtilizadoClick);
        base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoCantidad().on('keyup', base.Event.TxtCostoDaniosPropiedadEquipoUtilizadoCantidadKeyup);
        base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoTiempo().on('keyup', base.Event.TxtCostoDaniosPropiedadEquipoUtilizadoTiempoKeyup);
        base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoPrecioUnitario().on('keyup', base.Event.TxtCostoDaniosPropiedadEquipoUtilizadoPrecioUnitarioKeyup);
        base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoCosto().on('keyup', base.Event.TxtCostoDaniosPropiedadEquipoUtilizadoCostoKeyup);


        base.Event.BtnBuscarCostoDaniosPropiedadMaterialUtilizadoClick();
        base.Control.BtnAgregarCostoDaniosPropiedadMaterialUtilizado().click(base.Event.BtnAgregarCostoDaniosPropiedadMaterialUtilizadoClick);
        base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoCantidad().on('keyup', base.Event.TxtCostoDaniosPropiedadMaterialUtilizadoCantidadKeyup);
        base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoPrecioUnitario().on('keyup', base.Event.TxtCostoDaniosPropiedadMaterialUtilizadoPrecioUnitarioKeyup);
        base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoCosto().on('keyup', base.Event.TxtCostoDaniosPropiedadMaterialUtilizadoCostoKeyup);


        base.Event.BtnBuscarCostoDaniosPropiedadCostoAlquilerClick();
        base.Control.BtnAgregarCostoDaniosPropiedadCostoAlquiler().click(base.Event.BtnAgregarCostoDaniosPropiedadCostoAlquilerClick);
        base.Control.TxtCostoDaniosPropiedadCostoAlquilerCantidad().on('keyup', base.Event.TxtCostoDaniosPropiedadCostoAlquilerCantidadKeyup);
        base.Control.TxtCostoDaniosPropiedadCostoAlquilerTiempo().on('keyup', base.Event.TxtCostoDaniosPropiedadCostoAlquilerTiempoKeyup);
        base.Control.TxtCostoDaniosPropiedadCostoAlquilerPrecioUnitario().on('keyup', base.Event.TxtCostoDaniosPropiedadCostoAlquilerPrecioUnitarioKeyup);
        base.Control.TxtCostoDaniosPropiedadCostoAlquilerCosto().on('keyup', base.Event.TxtCostoDaniosPropiedadCostoAlquilerCostoKeyup);

        //Tab de Costos por Pérdida de Proceso
        base.Control.BtnGrabarTabCostoPerdidaProceso().off('click');
        base.Control.BtnGrabarTabCostoPerdidaProceso().on('click', base.Event.BtnGrabarTabCostoPerdidaProcesoClick);
        base.Control.BtnCancelarTabCostoPerdidaProceso().off('click');
        base.Control.BtnCancelarTabCostoPerdidaProceso().on('click', base.Event.BtnCancelarTabCostoPerdidaProcesoClick);


        base.Event.BtnBuscarCostoPerdidaProcesoCostoProductoClick();
        base.Control.BtnAgregarCostoPerdidaProcesoCostoProducto().click(base.Event.BtnAgregarCostoPerdidaProcesoCostoProductoClick);
        base.Control.TxtCostoPerdidaProcesoCostoProductoCantidad().on('keyup', base.Event.TxtCostoPerdidaProcesoCostoProductoCantidadKeyup);
        base.Control.TxtCostoPerdidaProcesoCostoProductoPrecioUnitario().on('keyup', base.Event.TxtCostoPerdidaProcesoCostoProductoPrecioUnitarioKeyup);
        base.Control.TxtCostoPerdidaProcesoCostoProductoCosto().on('keyup', base.Event.TxtCostoPerdidaProcesoCostoProductoCostoKeyup);


        base.Event.BtnBuscarCostoPerdidaProcesoCostoServicioClick();
        base.Control.BtnAgregarCostoPerdidaProcesoCostoServicio().click(base.Event.BtnAgregarCostoPerdidaProcesoCostoServicioClick);
        base.Control.TxtCostoPerdidaProcesoCostoServicioCantidad().on('keyup', base.Event.TxtCostoPerdidaProcesoCostoServicioCantidadKeyup);
        base.Control.TxtCostoPerdidaProcesoCostoServicioTiempo().on('keyup', base.Event.TxtCostoPerdidaProcesoCostoServicioTiempoKeyup);
        base.Control.TxtCostoPerdidaProcesoCostoServicioPrecioUnitario().on('keyup', base.Event.TxtCostoPerdidaProcesoCostoServicioPrecioUnitarioKeyup);
        base.Control.TxtCostoPerdidaProcesoCostoServicioCosto().on('keyup', base.Event.TxtCostoPerdidaProcesoCostoServicioCostoKeyup);


        base.Event.BtnBuscarCostoPerdidaProcesoCostoOcasionadoEquipoClick();
        base.Control.BtnAgregarCostoPerdidaProcesoCostoOcasionadoEquipo().click(base.Event.BtnAgregarCostoPerdidaProcesoCostoOcasionadoEquipoClick);
        base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoCantidad().on('keyup', base.Event.TxtCostoPerdidaProcesoCostoOcasionadoEquipoCantidadKeyup);
        base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoTiempo().on('keyup', base.Event.TxtCostoPerdidaProcesoCostoOcasionadoEquipoTiempoKeyup);
        base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoPrecioUnitario().on('keyup', base.Event.TxtCostoPerdidaProcesoCostoOcasionadoEquipoPrecioUnitarioKeyup);
        base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoCosto().on('keyup', base.Event.TxtCostoPerdidaProcesoCostoOcasionadoEquipoCostoKeyup);


        base.Event.BtnBuscarCostoPerdidaProcesoCostoOcasionadoPersonalClick();
        base.Control.BtnAgregarCostoPerdidaProcesoCostoOcasionadoPersonal().click(base.Event.BtnAgregarCostoPerdidaProcesoCostoOcasionadoPersonalClick);
        base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalCantidad().on('keyup', base.Event.TxtCostoPerdidaProcesoCostoOcasionadoPersonalCantidadKeyup);
        base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalTiempo().on('keyup', base.Event.TxtCostoPerdidaProcesoCostoOcasionadoPersonalTiempoKeyup);
        base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalPrecioUnitario().on('keyup', base.Event.TxtCostoPerdidaProcesoCostoOcasionadoPersonalPrecioUnitarioKeyup);
        base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalCosto().on('keyup', base.Event.TxtCostoPerdidaProcesoCostoOcasionadoPersonalCostoKeyup);


        base.Control.TxtCostoPerdidaProcesoIncrementoHorasExtraCosto().on('keyup', base.Event.TxtCostoPerdidaProcesoIncrementoHorasExtraCostoKeyup);
        base.Control.TxtCostoPerdidaProcesoIncrementoContratacionAdaptacionCosto().on('keyup', base.Event.TxtCostoPerdidaProcesoIncrementoContratacionAdaptacionCostoKeyup);
        base.Control.TxtCostoPerdidaProcesoIncrementoSubContratacionCosto().on('keyup', base.Event.TxtCostoPerdidaProcesoIncrementoSubContratacionCostoKeyup);
        base.Control.TxtCostoPerdidaProcesoIncrementoOtrosCosto().on('keyup', base.Event.TxtCostoPerdidaProcesoIncrementoOtrosCostoKeyup);


        //Tab de Costos de Prevención
        base.Control.BtnGrabarTabCostoPrevencion().off('click');
        base.Control.BtnGrabarTabCostoPrevencion().on('click', base.Event.BtnGrabarTabCostoPrevencionClick);
        base.Control.BtnCancelarTabCostoPrevencion().off('click');
        base.Control.BtnCancelarTabCostoPrevencion().on('click', base.Event.BtnCancelarTabCostoPrevencionClick);

        //Tab de Costos Otros
        base.Control.BtnGrabarTabCostoOtros().off('click');
        base.Control.BtnGrabarTabCostoOtros().on('click', base.Event.BtnGrabarTabCostoOtrosClick);
        base.Control.BtnCancelarTabCostoOtros().off('click');
        base.Control.BtnCancelarTabCostoOtros().on('click', base.Event.BtnCancelarTabCostoOtrosClick);

        $('#cartTabsFormularioCostoIncidente').on('shown.bs.tab', function (e) {
            var target = $(e.target).attr("href");
            if (target == "#tabCostoInvestigacion") {
                base.Event.BtnBuscarTabCostoInvestigacionClick();
            }
            if (target == "#tabCostoPersonal") {
                base.Event.BtnBuscarTabCostoPersonalClick();
            }
            if (target == "#tabCostoMedioambiental") {
                base.Event.BtnBuscarTabCostoMedioambientalClick();
            }
            if (target == "#tabCostoImpactoComunidad") {
                base.Event.BtnBuscarTabCostoImpactoComunidadClick();
            }
            if (target == "#tabCostoDaniosPropiedad") {
                base.Event.BtnBuscarTabCostoDaniosPropiedadClick();
            }
            if (target == "#tabCostoPerdidaProceso") {
                base.Event.BtnBuscarTabCostoPerdidaProcesoClick();
            }
            if (target == "#tabCostoPrevencion") {
                base.Event.BtnBuscarTabCostoPrevencionClick();
            }
            if (target == "#tabCostoOtros") {
                base.Event.BtnBuscarTabCostoOtrosClick();
            }
            if (target == "#tabCostoTotales") {
                base.Event.BtnBuscarTabCostoInvestigacionTotalesClick();
            }
        });


        //Informacion General
        //DACE
        //base.Control.TxtDetalleHorasTurno().off('keypress');
        //base.Control.TxtDetalleHorasTurno().on('keypress', base.Event.TxtSoloNumerosKeypress);


        base.Control.DtpDetalleFechaRecord().datepicker({
            dateFormat: 'dd/mm/yy'
        });
        base.Control.DtpDetalleFechaInicioInvestigacion().datepicker({
            dateFormat: 'dd/mm/yy'
        });
        base.Control.DtpDetalleFechaRecord().off('change');
        base.Control.DtpDetalleFechaRecord().on('change', base.Event.DtpDetalleFechaRecordChange);

        base.Control.DdlDetallePlanEmergencia().off('change');
        base.Control.DdlDetallePlanEmergencia().on('change', base.Event.DdlDetallePlanEmergenciaChange);

        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpDetalleFechaReporteAnuncio(),
            minDateFrom: new Date(1900, 1, 1)
        });

        //base.Control.DtpDetalleFechaRecord().off('change');
        //base.Control.DtpDetalleFechaRecord().on('change', base.Event.DtpDetalleFechaRecordChange);
        base.Control.DtpDetalleFechaRecord().trigger('change');
        base.Event.DtpDetalleFechaReporteChange();

        base.Control.BtnRegresarBandejaInvestigacion().off('click');
        base.Control.BtnRegresarBandejaInvestigacion().on('click', base.Event.BtnRegresarBandejaInvestigacionClick);

        base.Control.BtnAgregarEmpresaColaboradorInvolucrado().off('click');
        base.Control.BtnAgregarEmpresaColaboradorInvolucrado().on('click', base.Event.BtnAgregarEmpresaColaboradorInvolucradoClick);

        base.Control.BtnCambiarEstado().off('click');
        base.Control.BtnCambiarEstado().on('click', base.Event.BtnCambiarEstadoClick);
        //base.Event.BtnCambiarEstadoClick
        //base.Event.BuscarValidarInvestigacion();
        base.Control.DdlDetalleCondicionAmbiental().off('change');
        base.Control.DdlDetalleCondicionAmbiental().on('change', base.Event.DdlDetalleCondicionAmbientalChange);
        base.Control.DdlDetalleCondicionAmbiental().trigger('change');
        //////////////////////Manejo de Tabs
        $('.tab-group').click(function () {
            if ($(this).next('.nav-second-level').is(':visible')) {
                $(this).next('.nav-second-level').slideUp();
            } else {
                $(this).next('.nav-second-level').slideDown();
            }
        });

        $('#cartTabsFormularioInvestigacion').on('shown.bs.tab', function (e) {
            var target = $(e.target).attr("href");
            $('#cartTabsFormularioInvestigacion li').removeClass('active');
            $(e.target).parent('li').addClass('active');

            if (target == "#tabTrabajadorInvolucrado") {
                base.Event.BtnBuscarTrabajadorInvolucradoClick();
            }
            if (target == "#tabSupervisor") {
                base.Event.BtnBuscarSupervisorClick();
            }
            if (target == "#tabTestigos") {
                base.Event.BtnBuscarTestigoClick();
                base.Event.BtnBuscarTestigoExternoClick();
            }
            ///Tab Categoria
            if (target == "#tabCategoriaLesion") {
                base.Event.BtnBuscarCategoriaLesionClick();
            }
            if (target == "#tabCategoriaImpactoAmbiente") {
                base.Event.BtnBuscarCategoriaImpactoAmbienteClick();                
            }
            if (target == "#tabCategoriaImpacto") {
                base.Event.BtnBuscarCategoriaImpactoClick();
            }
            if (target == "#tabCategoriaDanio") {
                base.Event.BtnBuscarCategoriaDanioClick();
            }
            if (target == "#tabCategoriaPerdida") {
                base.Event.BtnBuscarCategoriaPerdidaClick();
            }
            if (target == "#tabClasificacionPrincipal") {
                base.Event.BtnBuscarClasificacionPrincipalClick();
            }
            if (target == "#tabDescripcion") { }
            if (target == "#tabAnalisisBarrera") {
                base.Event.BtnBuscarInformacionBarreraClick();
                setTimeout(function () {
                    base.Event.BtnBuscarInformacionFallosClick();
                }, 2000);
                setTimeout(function () {
                    base.Event.BuscarInvestigacionBarreraPadres();
                }, 5000);
            }
            if (target == "#tabSecuenciaEvento") {
                base.Event.BtnBuscarSecuenciaEventoClick();
            }
            if (target == "#tabAnalisis") {
                base.Event.BtnBuscarCausaInmediataClick();
                base.Event.BtnBuscarFactorCausalClick();
                base.Event.BtnBuscarCausaRaizClick();
            }
            if (target == "#tabAccion") {
                base.Event.BtnBuscarLeccionesAprendidasGridClick();
                base.Event.BtnBuscarAccionesInmediatasGridClick();
                base.Event.BtnBuscarAccionesCorrectivasGridClick();
            }
            if (target == "#tabCosto") {
                base.Event.BtnBuscarTabCostoInvestigacionClick();
            }
            if (target == "#tabFoto") {
                base.Event.BtnBuscarInvestigacionAnexoFotoClick();
            }
            if (target == "#tabAnexo") {
                base.Event.BtnBuscarTipoAnexoClick();
                base.Event.BtnBuscarInvestigacionAnexoApendiceClick();
                base.Event.BuscarObligatorios()
                //base.Function.SelecionarObligatorios();
            }
            if (target == "#tabInvestigadores") {
                base.Event.BtnBuscarInvestigadorClick();
            }
            if (target == "#tabDatosReportante") { }
            if (target == "#tabEstadoInvestigacion") {
                base.Event.BtnBuscarElaboradoPorGridClick();
                base.Event.BtnBuscarRevisadoPorGridClick();
                base.Event.BtnBuscarAprobadoPorGridClick();
            }
        });
        /////////////////////Fin de Manejo de Tabs

        base.Control.BtnGuardarInformacionGeneral().off('click');
        base.Control.BtnGuardarInformacionGeneral().on('click', base.Event.BtnGuardarInformacionGeneralClick);
        base.Control.BtnGuardarInvestigacionColaboradorInvolucrado().off('click');
        base.Control.BtnGuardarInvestigacionColaboradorInvolucrado().on('click', base.Event.BtnGuardarInvestigacionColaborardorInvolucradoClick);

        //Grid Costo de incidente
        /*base.Function.CrearGridCostoTrabajadorInvolucrado();
        base.Event.BtnBuscarCostoTrabajadorInvolucradoClick();*/

        //Datos Reportante
        base.Control.BtnGrabarDatosReportante().off('click');
        base.Control.BtnGrabarDatosReportante().on('click', base.Event.BtnGrabarDatosReportanteClick);
        base.Control.BtnBuscarColaboradorReportaInvestigacion().off('click');
        base.Control.BtnBuscarColaboradorReportaInvestigacion().on('click', base.Event.BtnBuscarColaboradorReportaInvestigacionClick);

        base.Control.DlgFormularioBuscarColaboradorReportaInvestigacion = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.BuscarColaboradorReportaInvestigacionSuccess
        });

        base.Control.ValidadorTestigoExterno = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmTestigoExterno(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos
        });

        base.Control.ValidadorBarrera = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmAnalisisBarrera(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos
        });

        base.Control.ValidadorFallos = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmInformacionFallos(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos
        });

        base.Control.ValidadorDatosReportante = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmRecordDatosReportante(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos
        });

        base.Control.ValidatorDescripcion = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmDescripcionEvento(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos
        });

        base.Control.ValidadorDescripcionPre = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmDescripcionPreEvento(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos
        });

        base.Control.ValidadorDescripcionPost = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmDescripcionPostEvento(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos
        });

        //Grid Estado de la  Investigacion
        base.Control.BtnAgregarEstadoInvestigacionElaborado().off('click');
        base.Control.BtnAgregarEstadoInvestigacionElaborado().on('click', base.Event.BtnAgregarEstadoInvestigacionClick);
        base.Control.BtnAgregarEstadoInvestigacionRevisado().off('click');
        base.Control.BtnAgregarEstadoInvestigacionRevisado().on('click', base.Event.BtnAgregarEstadoInvestigacionClick);
        base.Control.BtnAgregarEstadoInvestigacionAprobado().off('click');
        base.Control.BtnAgregarEstadoInvestigacionAprobado().on('click', base.Event.BtnAgregarEstadoInvestigacionClick);
        base.Control.BtnModificarEstadoInvestigacion().off('click');
        base.Control.BtnModificarEstadoInvestigacion().on('click', base.Event.BtnModificarEstadoInvestigacionClick);
        base.Control.BtnGuardarEstadoInvestigacion().off('click');
        base.Control.BtnGuardarEstadoInvestigacion().on('click', base.Event.BtnGuardarEstadoInvestigacionClick);

        base.Control.DlgFormularioEstadoInvestigacion = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.GrabarEstadoInvestigacionClick
        });

        base.Control.DlgFormularioModificarEstadoInvestigacion = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioModificarEstadoInvestigacion.Controller({
            AceptarSuccess: base.Event.ObtenerHistorialEstadoInvestigacionClick
        });


        //base.Event.BtnBuscarInvestigadorClick();

        base.Control.BtnAgregarSupervisor().off('click');
        base.Control.BtnAgregarSupervisor().on('click', base.Event.BtnAgregarSupervisorClick);

        base.Control.BtnAgregarTestigo().off('click');
        base.Control.BtnAgregarTestigo().on('click', base.Event.BtnAgregarTestigoClick);
        base.Control.BtnCancelarTestigoExterno().off('click');
        base.Control.BtnCancelarTestigoExterno().on('click', base.Event.BtnCancelarTestigoExternoClick);
        base.Control.BtnGrabarTestigoExterno().off('click');
        base.Control.BtnGrabarTestigoExterno().on('click', base.Event.BtnGrabarTestigoExternoClick);

        //Investigacion Barrera
        
        base.Control.BtnCancelarInformacionBarrera().off('click');
        base.Control.BtnCancelarInformacionBarrera().on('click', base.Event.BtnCancelarInformacionBarreraClick);
        base.Control.BtnGrabarInformacionBarrera().off('click');
        base.Control.BtnGrabarInformacionBarrera().on('click', base.Event.BtnGrabarInformacionBarreraClick);
        base.Control.BtnCancelarInformacionFallos().off('click');
        base.Control.BtnCancelarInformacionFallos().on('click', base.Event.BtnCancelarInformacionFallosClick);
        base.Control.BtnGrabarInformacionFallos().off('click');
        base.Control.BtnGrabarInformacionFallos().on('click', base.Event.BtnGrabarInformacionFallosClick);

        //Botones Categoria
        base.Control.BtnAgregarCategoriaLesion().off('click');
        base.Control.BtnAgregarCategoriaLesion().on('click', base.Event.BtnAgregarCategoriaLesionClick);
        base.Control.BtnAgregarCategoriaImpactoAmbiente().off('click');
        base.Control.BtnAgregarCategoriaImpactoAmbiente().on('click', base.Event.BtnAgregarCategoriaImpactoAmbienteClick);
        base.Control.BtnAgregarCategoriaImpacto().off('click');
        base.Control.BtnAgregarCategoriaImpacto().on('click', base.Event.BtnAgregarCategoriaImpactoClick);
        base.Control.BtnAgregarCategoriaDanio().off('click');
        base.Control.BtnAgregarCategoriaDanio().on('click', base.Event.BtnAgregarCategoriaDanioClick);
        base.Control.BtnAgregarCategoriaPerdida().off('click');
        base.Control.BtnAgregarCategoriaPerdida().on('click', base.Event.BtnAgregarCategoriaPerdidaClick);
        base.Control.BtnGrabarCategoriaOtros().off('click');
        base.Control.BtnGrabarCategoriaOtros().on('click', base.Event.BtnGrabarCategoriaOtrosClick);
        base.Control.BtnGrabarCategoriaCuasi().off('click');
        base.Control.BtnGrabarCategoriaCuasi().on('click', base.Event.BtnGrabarCategoriaCuasiClick);

        base.Control.BtnAgregarSecuenciaEvento().off('click');
        base.Control.BtnAgregarSecuenciaEvento().on('click', base.Event.BtnAgregarSecuenciaEventoClick);

        base.Control.BtnAgregarAccionInmediata().off('click');
        base.Control.BtnAgregarAccionInmediata().on('click', base.Event.BtnAgregarAccionInmediataClick);

        base.Control.BtnBuscarColaboradorOrdenoTrabajo().off('click');
        base.Control.BtnBuscarColaboradorOrdenoTrabajo().on('click', base.Event.BtnBuscarColaboradorOrdenaTrabajoClick);

        base.Control.BtnBuscarColaboradorSupervisabaTrabajo().off('click');
        base.Control.BtnBuscarColaboradorSupervisabaTrabajo().on('click', base.Event.BtnBuscarColaboradorSupervisabaTrabajoClick);

        base.Control.DlgFormularioTrabajadorInvolucrado = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioTrabajadorInvolucrado.Controller({
            BuscarSuccess: base.Event.BtnBuscarTrabajadorInvolucradoClick
        });

        base.Control.DlgFormularioEmpresaColaboradorInvolucrado = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.EmpresaColaborador.FormularioEmpresaColaborador.Controller({
            AceptarEmpresaColaboradorSuccess: base.Event.ObtenerEmpresaColaborador
        });

        base.Control.DlgFormularioSupervisor = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioSupervisor.Controller({
            GrabarSupervisorSuccess: base.Event.BtnBuscarSupervisorClick
        });
        base.Control.DlgFormularioCambiarEstado = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCambiarEstado.Controller();
        base.Control.DlgFormularioTestigo = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioTestigo.Controller({
            GrabarTestigoSuccess: base.Event.BtnBuscarTestigoClick
        });

        base.Control.DlgFormularioSecuenciaEvento = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioSecuenciaEvento.Controller({
            GrabarEventoSuccess: base.Event.BtnBuscarSecuenciaEventoClick
        });        

        base.Control.DlgFormularioBuscarColaboradorOrdenoTrabajo = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.BuscarColaboradorOrdenoTrabajoSuccess
        });
        base.Control.DlgFormularioBuscarColaboradorSupervisabaTrabajo = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.BuscarColaboradorSupervisorTrabajoSuccess
        });

        base.Control.DlgFormularioEquipoInvestigador = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioEquipoInvestigador.Controller({
            GrabarInvestigadorSuccess: base.Event.BtnBuscarInvestigadorClick
        });


        //Formularios de Categorias
        base.Control.DlgFormularioLesionTrabajador = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.Controller();
        base.Control.DlgFormularioComunidadInvolucrada = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioComunidadInvolucrada.Controller({
            AceptarSuccess: base.Event.BtnBuscarCategoriaImpactoClick
        });
        base.Control.DlgFormularioCuerpoReceptorAfectado = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCuerpoReceptorAfectado.Controller({
            ReloadGridSucess: base.Event.BtnBuscarCategoriaImpactoAmbienteClick
        });
        base.Control.DlgFormularioDanioPropiedad = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioDanioPropiedad.Controller({
            AceptarSuccess: base.Event.BtnBuscarCategoriaDanioClick
        });
        base.Control.DlgFormularioPerdidaProceso = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioPerdidaProceso.Controller({
            AceptarSuccess: base.Event.BtnBuscarCategoriaPerdidaClick
        });

        //Fin Grid Categoria Lesion

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmInformacionGeneral(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraInvestigacion()
        });

        base.Control.ValidadorCategoriaOtros = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmCategoriaOtros(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraCategoriaOtros()
        });

        //// INI TAB-EMRPESA
        //base.Control.BtnBuscarEmpresaPersonaInvolucrada().off('click');
        //base.Control.BtnBuscarEmpresaPersonaInvolucrada().on('click', base.Event.BtnBuscarEmpresaPersonaInvolucradaClick);

        //base.Control.DlgFormularioEmpresaPersonaInvolucrada = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.FormularioBuscadorEmpresa.Controller({
        //    AceptarSuccess: base.Event.BuscarEmpresaPersonaInvolucradaSuccess
        //});

        /////////////////////// INI - TESTIGO      
        base.Control.DlgFormularioEmpresaColaboradorTestigo = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.ObtenerEmpresaColaboradorTestigo
        });

        /////////////////////// INI - SUPERVISOR      
        base.Control.DlgFormularioEmpresaColaboradorSupervisor = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.ObtenerEmpresaColaboradorSupervisor
        });

        /////////////////////// INI - ANALISIS DE CAUSAS
        base.Control.BtnAgregarCausasInmediatas().off('click');
        base.Control.BtnAgregarCausasInmediatas().on('click', base.Event.BtnAgregarCausasInmediatasClick);

        base.Control.BtnAgregarFactoresCausales().off('click');
        base.Control.BtnAgregarFactoresCausales().on('click', base.Event.BtnAgregarFactoresCausalesClick);

        base.Control.BtnAgregarCausasRaices().off('click');
        base.Control.BtnAgregarCausasRaices().on('click', base.Event.BtnAgregarCausasRaicesClick);

        base.Control.DlgFormularioCausasInmediatas = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCausasInmediatas.Controller({
            GrabarAnalisisSuccess: base.Event.BtnBuscarCausaInmediataClick
        });
        base.Control.DlgFormularioFactoresCausales = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioFactoresCausales.Controller({
            GrabarAnalisiSuccess: base.Event.BtnBuscarFactorCausalClick
        });
        base.Control.DlgFormularioCausaRaiz = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCausasRaices.Controller({
            GrabarAnalisiSuccess: base.Event.BtnBuscarCausaRaizClick
        });

        /////   END - ANALISIS CAUSAS

        /////////////////////// INI - DESCRIPCION
        base.Control.BtnGrabarDescripcionPreEvento().off('click');
        base.Control.BtnGrabarDescripcionPreEvento().on('click', base.Event.BtnGrabarDescripcionPreEventoClick);

        base.Control.BtnGrabarDescripcionEvento().off('click');
        base.Control.BtnGrabarDescripcionEvento().on('click', base.Event.BtnGrabarDescripcionEventoClick);

        base.Control.BtnGrabarDescripcionPostEvento().off('click');
        base.Control.BtnGrabarDescripcionPostEvento().on('click', base.Event.BtnGrabarDescripcionPostEventoClick);

        base.Control.BtnCancelarDescripcionPreEvento().off('click');
        base.Control.BtnCancelarDescripcionPreEvento().on('click', base.Event.BtnCancelDescripcionPreEventoClick);
        //cancelar 
        base.Control.BtnCancelarDescripcionEvento().off('click');
        base.Control.BtnCancelarDescripcionEvento().on('click', base.Event.BtnCancelarDescripcionEventoClick);

        base.Control.BtnCancelarDescripcionPostEvento().off('click');
        base.Control.BtnCancelarDescripcionPostEvento().on('click', base.Event.BtnCancelarDescripcionPostEventoClick);

        ////////////////////// INI - EQUIPO INVESTIGADOR
        //base.Control.BtnAgregarEmpresaColaboradorInvestigador().off('click');
        //base.Control.BtnAgregarEmpresaColaboradorInvestigador().on('click', base.Event.BtnAgregarEmpresaColaboradorInvestigadorClick);

        base.Control.BtnAgregarInvestigador().off('click');
        base.Control.BtnAgregarInvestigador().on('click', base.Event.BtnAgregarInvestigadorClick);

        base.Control.DlgFormularioEmpresaColaboradorInvestigador = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.ObtenerEmpresaColaboradorInvestigador
        });

        ///////////////////// INI TRABAJADOR INVOLUCRADO
        base.Control.DlgFormularioTrabajadorInvolucradoTab2 = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.ObtenerTrabajadorInvolucradoTab2
        });

        ///////////////////// INI LECCION APRENDIDA        
        base.Control.BtnAgregarLeccionAprendida().off('click');
        base.Control.BtnAgregarLeccionAprendida().on('click', base.Event.BtnAgregarLeccionAprendidaClick);
        base.Control.BtnAgregarAccionCorrectiva().off('click');
        base.Control.BtnAgregarAccionCorrectiva().on('click', base.Event.BtnAgregarAccionCorrectivaClick);
        base.Control.BtnAgregarAccionInmediata().off('click');
        base.Control.BtnAgregarAccionInmediata().on('click', base.Event.BtnAgregarAccionInmediataClick);

        base.Control.DlgFormularioLeccionAprendida = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLeccionAprendida.Controller({
            AceptarSuccess: base.Event.BtnBuscarLeccionesAprendidasGridClick
        });
        base.Control.DlgFormularioAccionesInmediatas = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioAccionInmediata.Controller({
            AceptarSuccess: base.Event.BtnBuscarAccionesInmediatasGridClick
        });

        //new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioAccionCorrectiva.Controller({
        base.Control.DlgFormularioAccionesCorrectivas = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordAccionGenerico.Controller({            
            GrabarRecordAccionSuccess: base.Event.BtnBuscarAccionesCorrectivasGridClick
        });


        //////////////ANEXOS
        //base.Control.DlgFormularioInvestigacionAnexoApendice = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordAnexoApendice.Controller({
        //    GrabarInvestigacionAnexoApendiceSuccess: base.Event.BtnBuscarClick
        //});

        base.Control.BtnAgregarInvestigacionAnexoApendice().off('click');
        base.Control.BtnAgregarInvestigacionAnexoApendice().on('click', base.Event.BtnAgregarInvestigacionAnexoApendiceClick);

        base.Control.DlgFormularioInvestigacionAnexoApendice = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacionAnexoApendice.Controller({
            AceptarSuccess: base.Event.BtnBuscarAnexosApendice
        });

        //////////////  FOTOS

        base.Control.BtnAgregarInvestigacionAnexoFoto().off('click');
        base.Control.BtnAgregarInvestigacionAnexoFoto().on('click', base.Event.BtnAgregarInvestigacionAnexoFotoClick);

        base.Control.DlgFormularioInvestigacionAnexoFoto = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacionAnexo.Controller({
            GrabarRecordAnexoFotoSuccess: base.Event.BtnBuscarInvestigacionAnexoFotoClick
        });

        base.Control.BtnAgregarAnexoSnapchart().off('click');
        base.Control.BtnAgregarAnexoSnapchart().on('click', base.Event.BtnAgregarAnexoSnapChartClick);

        base.Control.DlgFormularioAnexoSnapchart = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacionAnexoApendice.Controller({
            AceptarSuccess: base.Event.GrabarAnexoSnapChartSuccess
        });

        base.Control.DlgFormularioVistaPreviaFoto = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioVistaPreviaFoto.Controller({});

        //DACE
        //base.Control.TxtDetalleHorasTurno().off('keyup');
        //base.Control.TxtDetalleHorasTurno().on('keyup', base.Event.FncRangoNumeros);

        ///////////////CHECK CATEGORIA        
        $('.chkInvestigacionCategoria').change(function () {
            var codigoCategoriaAbreviado = $(this).data().categoria;
            if (this.checked) {
                base.Ajax.AjaxRegistrarInvestigacionCategoriaPorCheck.data = {
                    CodigoCategoriaAbreviado: codigoCategoriaAbreviado,
                    CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion
                };
                base.Ajax.AjaxRegistrarInvestigacionCategoriaPorCheck.submit();
            } else {
                var that = $(this);
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.MensajeCategoriaQuitarCheck,
                    onAccept: function () {
                        var codigoInvestigacionCategoria = '';
                        if (Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CategoriaLesion == codigoCategoriaAbreviado) {
                            codigoInvestigacionCategoria = base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaLesion;
                        } else if (Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CategoriaImpactoAmbiental == codigoCategoriaAbreviado) {
                            codigoInvestigacionCategoria = base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaMedioAmbiental;
                        } else if (Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CategoriaImpactoComunidad == codigoCategoriaAbreviado) {
                            codigoInvestigacionCategoria = base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaImpactoComunidad;
                        } else if (Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CategoriaDanioPropiedad == codigoCategoriaAbreviado) {
                            codigoInvestigacionCategoria = base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaDanioPropiedad;
                        } else if (Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CategoriaPerdidaProceso == codigoCategoriaAbreviado) {
                            codigoInvestigacionCategoria = base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaPerdidaProceso;
                        } else if (Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CategoriaCuasiIncidente == codigoCategoriaAbreviado) {
                            codigoInvestigacionCategoria = base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaCuasi;
                        } else if (Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CategoriaOtros == codigoCategoriaAbreviado) {
                            codigoInvestigacionCategoria = base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaOtros;
                        }
                        base.Ajax.AjaxEliminarInvestigacionCategoriaPorCheck.data = {
                            CodigoCategoriaAbreviado: codigoCategoriaAbreviado,
                            CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                            CodigoInvestigacionCategoria: codigoInvestigacionCategoria
                        };
                        base.Ajax.AjaxEliminarInvestigacionCategoriaPorCheck.submit();
                    },
                    onCancelDialog: function () {
                        that.prop('checked', true);
                    }
                });
            }
        });

        ///////////////CATEGORIA CUASI
        if (base.Control.FormularioInvestigacionModel.ListaInvestigacionCategoriaCuasi != null && base.Control.FormularioInvestigacionModel.ListaInvestigacionCategoriaCuasi.length > 0) {
            for (var i = 0; i < base.Control.FormularioInvestigacionModel.ListaInvestigacionCategoriaCuasi.length; i++) {
                $('#id_' + base.Control.FormularioInvestigacionModel.ListaInvestigacionCategoriaCuasi[i].CodigoCategoriaTexto).prop("checked", true);
            }
        }

        ///////////////CATEGORIA OTROS
        $('.radioActualCategoriaOtros').change(function () {
            if (this.checked) {
                base.Control.TxtConsecuenciaActualCategoriaOtros().val($(this).data().descripcion);
            }
        });

        $('.radioPotencialCategoriaOtros').change(function () {
            if (this.checked) {
                base.Control.TxtConsecuenciaPotencialCategoriaOtros().val($(this).data().descripcion);
            }
        });
    };

    base.Control = {
        FrmInformacionGeneral: function () {
            return $('#frmInformacionGeneral');
        },
        Validator: null,
        ValidatorDescripcion: null,
        ValidadorDescripcionPre: null,
        ValidadorDescripcionPost: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        FormularioInvestigacionModel: null,

        BtnCancelarInformacionGeneral: function () {
            return $('#btnCancelarInformacionGeneral');
        },
        BtnCancelarEstadoInvestigacion: function () {
            return $('#btnCancelarEstadoInvestigacion');
        },
        BtnCancelarDatosReportante: function () {
            return $('#btnCancelarDatosReportante');
        },
        BtnCancelarTestigoExterno: function () {
            return $('#btnCancelarTestigoExterno');
        },
        BtnGrabarTestigoExterno: function () {
            return $('#btnGrabarTestigoExterno');
        },
        //TAB INVESTIGACION BARRERA
        NivelBarreraInvestigacion: null,
        BtnCancelarInformacionBarrera: function () {
            return $('#btnCancelarInformacionBarrera');
        },
        BtnGrabarInformacionBarrera: function () {
            return $('#btnGrabarInformacionBarrera');
        },
        BtnCancelarInformacionFallos: function () {
            return $('#btnCancelarInformacionFallos');
        },
        BtnGrabarInformacionFallos: function () {
            return $('#btnGrabarInformacionFallos');
        },

        //TABS COSTOS DEL INCIDENTE
        //Tab de Costos de investigación
        CodigoTabCostoInvestigacion: null,
        CodigoTabCostoInvestigacionTrabajadorInvolucrado: null,
        CodigoTabCostoInvestigacionSupervisor: null,
        CodigoTabCostoInvestigacionDeclaracionTestigo: null,
        CodigoTabCostoInvestigacionOtros: null,
        ArrAnexos: [],

        TxtCostoInvestigacionTotal: function () {
            return $('#txtCostoInvestigacionTotal');
        },
        BtnGrabarTabCostoInvestigacion: function () {
            return $('#btnGrabarCostoInvestigacion');
        },
        BtnCancelarTabCostoInvestigacion: function () {
            return $('#btnCancelarCostoInvestigacion');
        },
        TxtCostoInvestigacionTrabajadorInvolucradoCantidad: function () {
            return $('#txtCostoInvestigacionTrabajadorInvolucradoCantidad');
        },
        TxtCostoInvestigacionTrabajadorInvolucradoTiempo: function () {
            return $('#txtCostoInvestigacionTrabajadorInvolucradoTiempo');
        },
        TxtCostoInvestigacionTrabajadorInvolucradoPrecioUnitario: function () {
            return $('#txtCostoInvestigacionTrabajadorInvolucradoPrecioUnitario');
        },
        TxtCostoInvestigacionTrabajadorInvolucradoCosto: function () {
            return $('#txtCostoInvestigacionTrabajadorInvolucradoCosto');
        },
        BtnAgregarCostoInvestigacionTrabajadorInvolucrado: function () {
            return $('#btnAgregarCostoInvestigacionTrabajadorInvolucrado');
        },
        GrdResultadoTabCostoInvestigacionTrabajadorInvolucrado: null,
        UltimoRegistroGridCostoInvestigacionTrabajadorInvolucrado: 0,

        TxtCostoInvestigacionSupervisorCantidad: function () {
            return $('#txtCostoInvestigacionSupervisorCantidad');
        },
        TxtCostoInvestigacionSupervisorTiempo: function () {
            return $('#txtCostoInvestigacionSupervisorTiempo');
        },
        TxtCostoInvestigacionSupervisorPrecioUnitario: function () {
            return $('#txtCostoInvestigacionSupervisorPrecioUnitario');
        },
        TxtCostoInvestigacionSupervisorCosto: function () {
            return $('#txtCostoInvestigacionSupervisorCosto');
        },
        BtnAgregarCostoInvestigacionSupervisor: function () {
            return $('#btnAgregarCostoInvestigacionSupervisor');
        },
        GrdResultadoTabCostoInvestigacionSupervisor: null,
        UltimoRegistroGridCostoInvestigacionSupervisor: 0,

        TxtCostoInvestigacionDeclaracionTestigoCantidad: function () {
            return $('#txtCostoInvestigacionDeclaracionTestigoCantidad');
        },
        TxtCostoInvestigacionDeclaracionTestigoTiempo: function () {
            return $('#txtCostoInvestigacionDeclaracionTestigoTiempo');
        },
        TxtCostoInvestigacionDeclaracionTestigoPrecioUnitario: function () {
            return $('#txtCostoInvestigacionDeclaracionTestigoPrecioUnitario');
        },
        TxtCostoInvestigacionDeclaracionTestigoCosto: function () {
            return $('#txtCostoInvestigacionDeclaracionTestigoCosto');
        },
        BtnAgregarCostoInvestigacionDeclaracionTestigo: function () {
            return $('#btnAgregarCostoInvestigacionDeclaracionTestigo');
        },
        GrdResultadoTabCostoInvestigacionDeclaracionTestigo: null,
        UltimoRegistroGridCostoInvestigacionDeclaracionTestigo: 0,

        TxtCostoInvestigacionOtrosCosto: function () {
            return $('#txtCostoInvestigacionOtrosCosto');
        },

        //Tab de Costos Personal
        CodigoTabCostoPersonal: null,
        CodigoTabCostoPersonalTrabajadorInvolucrado: null,
        CodigoTabCostoPersonalSupervisor: null,
        CodigoTabCostoPersonalOtros: null,

        TxtCostoPersonalTotal: function () {
            return $('#txtCostoPersonalTotal');
        },
        BtnGrabarTabCostoPersonal: function () {
            return $('#btnGrabarCostoPersonal');
        },
        BtnCancelarTabCostoPersonal: function () {
            return $('#btnCancelarCostoPersonal');
        },

        TxtCostoPersonalTrabajadorInvolucradoCantidad: function () {
            return $('#txtCostoPersonalTrabajadorInvolucradoCantidad');
        },
        TxtCostoPersonalTrabajadorInvolucradoTiempo: function () {
            return $('#txtCostoPersonalTrabajadorInvolucradoTiempo');
        },
        TxtCostoPersonalTrabajadorInvolucradoPrecioUnitario: function () {
            return $('#txtCostoPersonalTrabajadorInvolucradoPrecioUnitario');
        },
        TxtCostoPersonalTrabajadorInvolucradoCosto: function () {
            return $('#txtCostoPersonalTrabajadorInvolucradoCosto');
        },
        BtnAgregarCostoPersonalTrabajadorInvolucrado: function () {
            return $('#btnAgregarCostoPersonalTrabajadorInvolucrado');
        },
        GrdResultadoTabCostoPersonalTrabajadorInvolucrado: null,
        UltimoRegistroGridCostoPersonalTrabajadorInvolucrado: 0,

        TxtCostoPersonalSupervisorCantidad: function () {
            return $('#txtCostoPersonalSupervisorCantidad');
        },
        TxtCostoPersonalSupervisorTiempo: function () {
            return $('#txtCostoPersonalSupervisorTiempo');
        },
        TxtCostoPersonalSupervisorPrecioUnitario: function () {
            return $('#txtCostoPersonalSupervisorPrecioUnitario');
        },
        TxtCostoPersonalSupervisorCosto: function () {
            return $('#txtCostoPersonalSupervisorCosto');
        },
        TxtCostoPersonalOtrosCosto: function () {
            return $('#txtCostoPersonalOtrosCosto');
        },

        BtnAgregarCostoPersonalSupervisor: function () {
            return $('#btnAgregarCostoPersonalSupervisor');
        },

        GrdResultadoTabCostoPersonalSupervisor: null,
        UltimoRegistroGridCostoPersonalSupervisor: 0,

        //Tab de Costos Medio ambiental
        CodigoTabCostoMedioambiental: null,
        CodigoTabCostoMedioambientalPersonalUtilizado: null,
        CodigoTabCostoMedioambientalMaterialUtilizado: null,
        CodigoTabCostoMedioambientalDisposicion: null,
        CodigoTabCostoMedioambientalRecuperacion: null,
        CodigoTabCostoMedioambientalOtros: null,

        TxtCostoMedioambientalTotal: function () {
            return $('#txtCostoMedioambientalTotal');
        },
        BtnCancelarTabCostoMedioambiental: function () {
            return $('#btnCancelarCostoMedioambiental');
        },
        BtnGrabarTabCostoMedioambiental: function () {
            return $('#btnGrabarCostoMedioambiental');
        },

        TxtCostoMedioambientalPersonalUtilizadoCantidad: function () {
            return $('#txtCostoMedioambientalPersonalUtilizadoCantidad');
        },
        TxtCostoMedioambientalPersonalUtilizadoTiempo: function () {
            return $('#txtCostoMedioambientalPersonalUtilizadoTiempo');
        },
        TxtCostoMedioambientalPersonalUtilizadoPrecioUnitario: function () {
            return $('#txtCostoMedioambientalPersonalUtilizadoPrecioUnitario');
        },
        TxtCostoMedioambientalPersonalUtilizadoCosto: function () {
            return $('#txtCostoMedioambientalPersonalUtilizadoCosto');
        },
        BtnAgregarCostoMedioambientalPersonalUtilizado: function () {
            return $('#btnAgregarCostoMedioambientalPersonalUtilizado');
        },
        GrdResultadoTabCostoMedioambientalPersonalUtilizado: null,
        UltimoRegistroGridCostoMedioambientalPersonalUtilizado: 0,

        TxtCostoMedioambientalMaterialUtilizadoCosto: function () {
            return $('#txtCostoMedioambientalMaterialUtilizadoCosto');
        },

        TxtCostoMedioambientalDisposicionCosto: function () {
            return $('#txtCostoMedioambientalDisposicionCosto');
        },
        TxtCostoMedioambientalRecuperacionCosto: function () {
            return $('#txtCostoMedioambientalRecuperacionCosto');
        },
        TxtCostoMedioambientalOtrosCosto: function () {
            return $('#txtCostoMedioambientalOtrosCosto');
        },

        BtnAgregarCostoMedioambientalMaterialUtilizado: function () {
            return $('#btnAgregarCostoMedioambientalMaterialUtilizado');
        },
        GrdResultadoTabCostoMedioambientalMaterialUtilizado: null,
        UltimoRegistroGridCostoMedioambientalMaterialUtilizado: 0,

        //Tab de Costos Impacto Comunidad
        CodigoTabCostoImpactoComunidad: null,
        TxtCostoImpactoComunidadTotal: function () {
            return $('#txtCostoImpactoComunidadTotal');
        },
        BtnCancelarTabCostoImpactoComunidad: function () {
            return $('#btnCancelarCostoImpactoComunidad');
        },
        BtnGrabarTabCostoImpactoComunidad: function () {
            return $('#btnGrabarCostoImpactoComunidad');
        },

        //Tab de Costos Daños Propiedad
        CodigoTabCostoDaniosPropiedad: null,
        CodigoTabCostoDaniosPropiedadPersonalUtilizado: null,
        CodigoTabCostoDaniosPropiedadEquipoUtilizado: null,
        CodigoTabCostoDaniosPropiedadMaterialUtilizado: null,
        CodigoTabCostoDaniosPropiedadCostoAlquiler: null,
        CodigoTabCostoDaniosPropiedadCostoServicioExterno: null,
        CodigoTabCostoDaniosPropiedaOtros: null,

        TxtCostoDaniosPropiedadTotal: function () {
            return $('#txtCostoDaniosPropiedadTotal');
        },
        BtnCancelarTabCostoDaniosPropiedad: function () {
            return $('#btnCancelarCostoDaniosPropiedad');
        },
        BtnGrabarTabCostoDaniosPropiedad: function () {
            return $('#btnGrabarCostoDaniosPropiedad');
        },

        TxtCostoDaniosPropiedadPersonalUtilizadoCantidad: function () {
            return $('#txtCostoDaniosPropiedadPersonalUtilizadoCantidad');
        },
        TxtCostoDaniosPropiedadPersonalUtilizadoTiempo: function () {
            return $('#txtCostoDaniosPropiedadPersonalUtilizadoTiempo');
        },
        TxtCostoDaniosPropiedadPersonalUtilizadoPrecioUnitario: function () {
            return $('#txtCostoDaniosPropiedadPersonalUtilizadoPrecioUnitario');
        },
        TxtCostoDaniosPropiedadPersonalUtilizadoCosto: function () {
            return $('#txtCostoDaniosPropiedadPersonalUtilizadoCosto');
        },
        BtnAgregarCostoDaniosPropiedadPersonalUtilizado: function () {
            return $('#btnAgregarCostoDaniosPropiedadPersonalUtilizado');
        },
        GrdResultadoTabCostoDaniosPropiedadPersonalUtilizado: null,
        UltimoRegistroGridCostoDaniosPropiedadPersonalUtilizado: 0,

        TxtCostoDaniosPropiedadEquipoUtilizadoCantidad: function () {
            return $('#txtCostoDaniosPropiedadEquipoUtilizadoCantidad');
        },
        TxtCostoDaniosPropiedadEquipoUtilizadoTiempo: function () {
            return $('#txtCostoDaniosPropiedadEquipoUtilizadoTiempo');
        },
        TxtCostoDaniosPropiedadEquipoUtilizadoPrecioUnitario: function () {
            return $('#txtCostoDaniosPropiedadEquipoUtilizadoPrecioUnitario');
        },
        TxtCostoDaniosPropiedadEquipoUtilizadoCosto: function () {
            return $('#txtCostoDaniosPropiedadEquipoUtilizadoCosto');
        },
        BtnAgregarCostoDaniosPropiedadEquipoUtilizado: function () {
            return $('#btnAgregarCostoDaniosPropiedadEquipoUtilizado');
        },
        GrdResultadoTabCostoDaniosPropiedadEquipoUtilizado: null,
        UltimoRegistroGridCostoDaniosPropiedadEquipoUtilizado: 0,

        TxtCostoDaniosPropiedadMaterialUtilizadoCantidad: function () {
            return $('#txtCostoDaniosPropiedadMaterialUtilizadoCantidad');
        },
        TxtCostoDaniosPropiedadMaterialUtilizadoPrecioUnitario: function () {
            return $('#txtCostoDaniosPropiedadMaterialUtilizadoPrecioUnitario');
        },
        TxtCostoDaniosPropiedadMaterialUtilizadoCosto: function () {
            return $('#txtCostoDaniosPropiedadMaterialUtilizadoCosto');
        },
        BtnAgregarCostoDaniosPropiedadMaterialUtilizado: function () {
            return $('#btnAgregarCostoDaniosPropiedadMaterialUtilizado');
        },
        GrdResultadoTabCostoDaniosPropiedadMaterialUtilizado: null,
        UltimoRegistroGridCostoDaniosPropiedadMaterialUtilizado: 0,

        TxtCostoDaniosPropiedadCostoAlquilerCantidad: function () {
            return $('#txtCostoDaniosPropiedadCostoAlquilerCantidad');
        },
        TxtCostoDaniosPropiedadCostoAlquilerTiempo: function () {
            return $('#txtCostoDaniosPropiedadCostoAlquilerTiempo');
        },
        TxtCostoDaniosPropiedadCostoAlquilerPrecioUnitario: function () {
            return $('#txtCostoDaniosPropiedadCostoAlquilerPrecioUnitario');
        },
        TxtCostoDaniosPropiedadCostoAlquilerCosto: function () {
            return $('#txtCostoDaniosPropiedadCostoAlquilerCosto');
        },
        BtnAgregarCostoDaniosPropiedadCostoAlquiler: function () {
            return $('#btnAgregarCostoDaniosPropiedadCostoAlquiler');
        },
        GrdResultadoTabCostoDaniosPropiedadCostoAlquiler: null,

        TxtCostoDaniosPropiedadCostoServicioExternoCosto: function () {
            return $('#txtCostoDaniosPropiedadCostoServicioExternoCosto');
        },
        TxtCostoDaniosPropiedadOtrosCosto: function () {
            return $('#txtCostoDaniosPropiedadOtrosCosto');
        },
        UltimoRegistroGridCostoDaniosPropiedadCostoAlquiler: 0,

        //Tab de Costos por Pérdida de Proceso
        CodigoTabCostoPerdidaProcesoCostoProducto: null,
        CodigoTabCostoPerdidaProcesoCostoServicio: null,
        CodigoTabCostoPerdidaProcesoCostoOcasionadoEquipo: null,
        CodigoTabCostoPerdidaProcesoCostoOcasionadoPersonal: null,
        CodigoTabCostoPerdidaProcesoIncrementoHorasExtra: null,
        CodigoTabCostoPerdidaProcesoOtros: null,

        TxtCostoPerdidaProcesoTotal: function () {
            return $('#txtCostoPerdidaProcesoTotal');
        },
        BtnCancelarTabCostoPerdidaProceso: function () {
            return $('#btnCancelarCostoPerdidaProceso');
        },
        BtnGrabarTabCostoPerdidaProceso: function () {
            return $('#btnGrabarCostoPerdidaProceso');
        },

        TxtCostoPerdidaProcesoCostoProductoCantidad: function () {
            return $('#txtCostoPerdidaProcesoCostoProductoCantidad');
        },
        TxtCostoPerdidaProcesoCostoProductoPrecioUnitario: function () {
            return $('#txtCostoPerdidaProcesoCostoProductoPrecioUnitario');
        },
        TxtCostoPerdidaProcesoCostoProductoCosto: function () {
            return $('#txtCostoPerdidaProcesoCostoProductoCosto');
        },
        BtnAgregarCostoPerdidaProcesoCostoProducto: function () {
            return $('#btnAgregarCostoPerdidaProcesoCostoProducto');
        },
        GrdResultadoTabCostoPerdidaProcesoCostoProducto: null,
        UltimoRegistroGridCostoPerdidaProcesoCostoProducto: 0,

        TxtCostoPerdidaProcesoCostoServicioCantidad: function () {
            return $('#txtCostoPerdidaProcesoCostoServicioCantidad');
        },
        TxtCostoPerdidaProcesoCostoServicioTiempo: function () {
            return $('#txtCostoPerdidaProcesoCostoServicioTiempo');
        },
        TxtCostoPerdidaProcesoCostoServicioPrecioUnitario: function () {
            return $('#txtCostoPerdidaProcesoCostoServicioPrecioUnitario');
        },
        TxtCostoPerdidaProcesoCostoServicioCosto: function () {
            return $('#txtCostoPerdidaProcesoCostoServicioCosto');
        },
        BtnAgregarCostoPerdidaProcesoCostoServicio: function () {
            return $('#btnAgregarCostoPerdidaProcesoCostoServicio');
        },
        GrdResultadoTabCostoPerdidaProcesoCostoServicio: null,
        UltimoRegistroGridCostoPerdidaProcesoCostoServicio: 0,

        TxtCostoPerdidaProcesoCostoOcasionadoEquipoCantidad: function () {
            return $('#txtCostoPerdidaProcesoCostoOcasionadoEquipoCantidad');
        },
        TxtCostoPerdidaProcesoCostoOcasionadoEquipoTiempo: function () {
            return $('#txtCostoPerdidaProcesoCostoOcasionadoEquipoTiempo');
        },
        TxtCostoPerdidaProcesoCostoOcasionadoEquipoPrecioUnitario: function () {
            return $('#txtCostoPerdidaProcesoCostoOcasionadoEquipoPrecioUnitario');
        },
        TxtCostoPerdidaProcesoCostoOcasionadoEquipoCosto: function () {
            return $('#txtCostoPerdidaProcesoCostoOcasionadoEquipoCosto');
        },
        BtnAgregarCostoPerdidaProcesoCostoOcasionadoEquipo: function () {
            return $('#btnAgregarCostoPerdidaProcesoCostoOcasionadoEquipo');
        },
        GrdResultadoTabCostoPerdidaProcesoCostoOcasionadoEquipo: null,
        UltimoRegistroGridCostoPerdidaProcesoCostoOcasionadoEquipo: 0,

        TxtCostoPerdidaProcesoCostoOcasionadoPersonalCantidad: function () {
            return $('#txtCostoPerdidaProcesoCostoOcasionadoPersonalCantidad');
        },
        TxtCostoPerdidaProcesoCostoOcasionadoPersonalTiempo: function () {
            return $('#txtCostoPerdidaProcesoCostoOcasionadoPersonalTiempo');
        },
        TxtCostoPerdidaProcesoCostoOcasionadoPersonalPrecioUnitario: function () {
            return $('#txtCostoPerdidaProcesoCostoOcasionadoPersonalPrecioUnitario');
        },
        TxtCostoPerdidaProcesoCostoOcasionadoPersonalCosto: function () {
            return $('#txtCostoPerdidaProcesoCostoOcasionadoPersonalCosto');
        },
        BtnAgregarCostoPerdidaProcesoCostoOcasionadoPersonal: function () {
            return $('#btnAgregarCostoPerdidaProcesoCostoOcasionadoPersonal');
        },
        GrdResultadoTabCostoPerdidaProcesoCostoOcasionadoPersonal: null,
        UltimoRegistroGridCostoPerdidaProcesoCostoOcasionadoPersonal: 0,

        TxtCostoPerdidaProcesoIncrementoCosto: function () {
            return $('#txtCostoPerdidaProcesoIncrementoCosto');
        },

        TxtCostoPerdidaProcesoIncrementoHorasExtraCosto: function () {
            return $('#txtCostoPerdidaProcesoIncrementoHorasExtraCosto');
        },
        TxtCostoPerdidaProcesoIncrementoContratacionAdaptacionCosto: function () {
            return $('#txtCostoPerdidaProcesoIncrementoContratacionAdaptacionCosto');
        },
        TxtCostoPerdidaProcesoIncrementoSubContratacionCosto: function () {
            return $('#txtCostoPerdidaProcesoIncrementoSubContratacionCosto');
        },
        TxtCostoPerdidaProcesoIncrementoOtrosCosto: function () {
            return $('#txtCostoPerdidaProcesoIncrementoOtrosCosto');
        },

        TxtCostoPerdidaProcesoOtrosCosto: function () {
            return $('#txtCostoPerdidaProcesoOtrosCosto');
        },

        //Tab de Costos por Prevención
        CodigoTabCostoPrevencion: null,
        CodigoTabCostoPrevencionMedidas: null,
        CodigoTabCostoPrevencionOtros: null,

        TxtCostoPrevencionTotal: function () {
            return $('#txtCostoPrevencionTotal');
        },
        BtnCancelarTabCostoPrevencion: function () {
            return $('#btnCancelarCostoPrevencion');
        },
        BtnGrabarTabCostoPrevencion: function () {
            return $('#btnGrabarCostoPrevencion');
        },

        TxtCostoPrevencionMedidasCosto: function () {
            return $('#txtCostoPrevencionMedidasCosto');
        },
        TxtCostoPrevencionOtrosCosto: function () {
            return $('#txtCostoPrevencionOtrosCosto');
        },
        //Tab de Costos Otros
        CodigoTabCostoOtros: null,
        TxtCostoOtrosTotal: function () {
            return $('#txtCostoOtrosTotal');
        },

        BtnCancelarTabCostoOtros: function () {
            return $('#btnCancelarCostoOtros');
        },
        BtnGrabarTabCostoOtros: function () {
            return $('#btnGrabarCostoOtros');
        },
        //Tab de Costos Totales
        TxtCostoTotalesTotal: function () {
            return $('#txtCostoTotalesTotal');
        },
        TxtCostoTotalesInvestigacionCosto: function () {
            return $('#txtCostoTotalesInvestigacionCosto');
        },
        TxtCostoTotalesPersonalCosto: function () {
            return $('#txtCostoTotalesPersonalCosto');
        },
        TxtCostoTotalesMedioambientalCosto: function () {
            return $('#txtCostoTotalesMedioambientalCosto');
        },
        TxtCostoTotalesImpactoComunidadCosto: function () {
            return $('#txtCostoTotalesImpactoComunidadCosto');
        },
        TxtCostoTotalesDaniosPropiedadCosto: function () {
            return $('#txtCostoTotalesDaniosPropiedadCosto');
        },
        TxtCostoTotalesPerdidaProcesoCosto: function () {
            return $('#txtCostoTotalesPerdidaProcesoCosto');
        },
        TxtCostoTotalesPrevencionCosto: function () {
            return $('#txtCostoTotalesPrevencionCosto');
        },
        TxtCostoTotalesOtrosCosto: function () {
            return $('#txtCostoTotalesOtrosCosto');
        },


        //////////////TRABAJADOR INVOLUCRADO
        BtnAgregarEmpresaColaboradorInvolucrado: function () {
            return $('#btnAgregarEmpresaColaboradorInvolucrado');
        },
        BtnGuardarInvestigacionColaboradorInvolucrado: function () {
            return $('#btnGrabarInvestigacionColaboradorInvolucrado');
        },
        DlgFormularioEmpresaColaboradorInvolucrado: null,

        BtnRegresarBandejaInvestigacion: function () {
            return $('#btnRegresarBandejaInvestigacion');
        },
        //Declaracion de Modals
        DlgFormularioTrabajadorInvolucrado: null,
        DlgFormularioCambiarEstado: null,
        DlgFormularioSupervisor: null,
        DlgFormularioTestigo: null,
        DlgFormularioLesionTrabajador: null,
        DlgFormularioComunidadInvolucrada: null,
        DlgFormularioCuerpoReceptorAfectado: null,
        DlgFormularioDanioPropiedad: null,
        DlgFormularioPerdidaProceso: null,
        DlgFormularioSecuenciaEvento: null,
        DlgFormularioCausasInmediatas: null,
        DlgFormularioFactoresCausales: null,
        DlgFormularioCausaRaiz: null,
        DlgFormularioAccionInmediata: null,
        DlgFormularioEquipoInvestigador: null,

        HdnCodigoColaboradorOrdenoTrabajo: function () {
            return $('#hdnCodigoColaboradorOrdenoTrabajo');
        },
        TxtNombreColaboradorOrdenoTrabajo: function () {
            return $('#txtNombreColaboradorOrdenoTrabajo');
        },
        BtnBuscarColaboradorOrdenoTrabajo: function () {
            return $('#btnBuscarColaboradorOrdenoTrabajo');
        },
        DlgFormularioBuscarColaboradorOrdenoTrabajo: null,

        HdnCodigoColaboradorSupervisorTrabajo: function () {
            return $('#hdnCodigoColaboradorSupervisorTrabajo');
        },
        TxtNombreColaboradorSupervisabaTrabajo: function () {
            return $('#txtNombreColaboradorSupervisorTrabajo');
        },
        BtnBuscarColaboradorSupervisabaTrabajo: function () {
            return $('#btnBuscarColaboradorSupervisabaTrabajo');
        },
        DlgFormularioBuscarColaboradorSupervisabaTrabajo: null,

        TxtTrabajadorInvolucradoTotal: function () {
            return $('#txtTrabajadorInvolucradoTotal');
        },
        TxtTrabajadorInvolucradoTotalLesion: function () {
            return $('#txtTrabajadorInvolucradoTotalLesion');
        },
        //declarar datePicker
        DtpDetalleFechaInicioInvestigacion: function () {
            return $('#dtpDetalleFechaInicioInvestigacion');
        },
        DtpDetalleFechaRecord: function () {
            return $('#dtpDetalleFechaRecord');
        },
        DtpDetalleFechaReporteAnuncio: function () {
            return $('#dtpDetalleFechaReporteAnuncio');
        },

        BtnAgregarTrabajadorInvolucrado: function () {
            return $('#btnAgregarTrabajadorInvolucrado');
        },
        BtnAgregarSupervisor: function () {
            return $('#btnAgregarEmpresaColaboradorSupervisor');
        },
        //Testigo Externo
        HdnCodigoTestigoExterno: function () {
            return $('#hdnCodigoTestigoExterno');
        },
        TxtNombreTestigoExterno: function () {
            return $('#txtNombreTestigoExterno');
        },
        TxtApellidoPaternoTestigoExterno: function () {
            return $('#txtApellidoPaternoTestigoExterno');
        },
        TxtApellidoMaternoTestigoExterno: function () {
            return $('#txtApellidoMaternoTestigoExterno');
        },
        SlcTipoDocumento: function () {
            return $('#slcTipoDocumento');
        },
        TxtNumeroDocumentoTestigoExterno: function () {
            return $('#txtNumeroDocumentoTestigoExterno');
        },
        GrdCategoriaLesion: null,
        GrdCategoriaImpactoAmbiente: null,
        GrdCategoriaImpacto: null,
        GrdCategoriaDanio: null,
        GrdCategoriaPerdida: null,

        GrdResultadoTrabajadorInvolucrado: null,
        GrdResultadoSupervisor: null,
        GrdResultadoTestigo: null,
        GrdResultadoClasificacionPrincipal: null,
        GrdResultadoSecuenciaEvento: null,
        GrdResultadoCostoTrabajadorInvolucrado: null,
        GrdResultadoInvestigador: null,

        BtnCambiarEstado: function () {
            return $('#btnCambiarEstado');
        },
        BtnAgregarTestigo: function () {
            return $('#btnAgregarTestigo');
        },
        BtnAgregarCategoriaLesion: function () {
            return $('#btnAgregarCategoriaLesion');
        },
        BtnAgregarCategoriaImpactoAmbiente: function () {
            return $('#btnAgregarCategoriaImpactoAmbiente');
        },
        BtnAgregarCategoriaImpacto: function () {
            return $('#btnAgregarCategoriaImpacto');
        },
        BtnAgregarCategoriaDanio: function () {
            return $('#btnAgregarCategoriaDanio');
        },
        BtnAgregarCategoriaPerdida: function () {
            return $('#btnAgregarCategoriaPerdida');
        },
        BtnAgregarSecuenciaEvento: function () {
            return $('#btnAgregarSecuenciaEvento');
        },
        BtnGuardarInformacionGeneral: function () {
            return $('#btnGuardarInformacionGeneral');
        },

        //***Delacarion de controles de FORMULARIO
        //Declaracion de controles input
        TxtDetalleTituloIncidente: function () {
            return $('#txtDetalleTituloIncidente');
        },
        TxtDetalleLugarExacto: function () {
            return $('#txtDetalleLugarExacto');
        },
        TxtDetalleFechaIncidente: function () {
            return $('#txtDetalleFechaIncidente');
        },
        TxtDetalleFechaReporteAnuncio: function () {
            return $('#txtDetalleFechaReporteAnuncio');
        },
        TxtDetalleFechaInicioInvestigacion: function () {
            return $('#txtDetalleFechaInicioInvestigacion');
        },
        TxtNombreColaboradorSupervisorTrabajo: function () {
            return $('#txtNombreColaboradorSupervisorTrabajo');
        },
        TxtDetalleComentarioEmergencia: function () {
            return $('#txtDetalleComentarioEmergencia');
        },
        TxtOtrosCondicionAmbiental: function () {
            return $('#txtOtrosCondicionAmbiental');
        },
        SlcControlEmergencia: function () {
            return $('#slcControlEmergencia');
        },
        TxtComentarioControlEmergencia: function () {
            return $('#txtComentarioControlEmergencia');
        },
        SlcPlanCrisis: function () {
            return $('#slcPlanCrisis');
        },
        TxtComentarioPlanCrisis: function () {
            return $('#txtComentarioPlanCrisis');
        },
        SlcReportoOrganizaciones: function () {
            return $('#slcReportoOrganizaciones');
        },
        TxtComentarioOrganizaciones: function () {
            return $('#txtComentarioOrganizaciones');
        },

        //Declaracion Controles de Selects
        DdlDetalleRelacionadoMayoresRiesgos: function () {
            return $('#ddlDetalleRelacionadoMayoresRiesgos')
        },
        DdlDetalleEmpresaInvolucrada: function () {
            return $('#ddlDetalleEmpresaInvolucrada');
        },
        DdlDetalleIncidenteDentroOperacion: function () {
            return $('#ddlDetalleIncidenteDentroOperacion');
        },
        DdlDetalleHoraRecord: function () {
            return $('#ddlDetalleHoraRecord');
        },
        DdlDetalleMinutoRecord: function () {
            return $('#ddlDetalleMinutoRecord');
        },
        DdlDetalleHoraReporteAnuncio: function () {
            return $('#ddlDetalleHoraReporteAnuncio');
        },
        DdlDetalleMinutoReporteAnuncio: function () {
            return $('#ddlDetalleMinutoReporteAnuncio');
        },
        DdlDetalleHoraInicioInvestigacion: function () {
            return $('#ddlDetalleHoraInicioInvestigacion');
        },
        DdlDetalleMinutoInicioInvestigacion: function () {
            return $('#ddlDetalleMinutoInicioInvestigacion');
        },
        DdlDetalleFueIncidenteTrabajo: function () {
            return $('#ddlDetalleFueIncidenteTrabajo')
        },
        DdlDetalleTurno: function () {
            return $('#ddlDetalleTurno');
        },
        //DACE
        DdlDetalleHorasTurno: function () {
            return $('#ddlDetalleHorasTurno');
        },
        DdlDetalleTurnoRegular: function () {
            return $('#ddlDetalleTurnoRegular');
        },
        DdlDetalleTrabajoHabitual: function () {
            return $('#ddlDetalleTrabajoHabitual');
        },
        DdlDetalleSupervisionIncidente: function () {
            return $('#ddlDetalleSupervisionIncidente');
        },
        DdlDetallePlanEmergencia: function () {
            return $('#ddlDetallePlanEmergencia');
        },
        DdlDetalleCondicionAmbiental: function () {
            return $('#ddlDetalleCondicionAmbiental');
        },


        /////////////  PERSONA INVOLUCRADA  //////////////
        //DECLARAR CONTROLES DE FORMULARIO
        DdlInvolucradoInformacionPuestoTrabajo: function () {
            return $('#ddlInvolucradoInformacionPuestoTrabajo');
        },
        DtpInvolucradoInformacionFechaNacimiento: function () {
            return $('#dtpInvolucradoInformacionFechaNacimiento');
        },
        DdlInvolucradoInformacionEstadoCivil: function () {
            return $('#ddlInvolucradoInformacionEstadoCivil');
        },
        DdlInvolucradoInformacionPais: function () {
            return $('#ddlInvolucradoInformacionPais');
        },
        DdlInvolucradoInformacionDepartamento: function () {
            return $('#ddlInvolucradoInformacionDepartamento');
        },
        DdlInvolucradoInformacionProvincia: function () {
            return $('#ddlInvolucradoInformacionProvincia');
        },
        DdlInvolucradoInformacionGenero: function () {
            return $('#ddlInvolucradoInformacionGenero');
        },
        DdlInvolucradoInformacionGradoInstruccion: function () {
            return $('#ddlInvolucradoInformacionGradoInstruccion');
        },
        DdlInvolucradoInformacionTipoContrato: function () {
            return $('#ddlInvolucradoInformacionTipoContrato');
        },
        DdlInvolucradoInformacionProyecto: function () {
            return $('#ddlInvolucradoInformacionProyecto');
        },
        DdlInvolucradoInformacionDepartamentoTrabajo: function () {
            return $('#ddlInvolucradoInformacionDepartamentoTrabajo');
        },
        DdlInvolucradoInformacionArea: function () {
            return $('#ddlInvolucradoInformacionArea');
        },
        DdlInvolucradoInformacionGuardia: function () {
            return $('#ddlInvolucradoInformacionGuardia');
        },

        ///     TAB -Empresa
        //BtnBuscarEmpresaPersonaInvolucrada: function () { return $('#btnBuscarEmpresaPersonaInvolucrada'); },
        //DlgFormularioEmpresaPersonaInvolucrada : null,

        //*** Formulario Accion ***
        BtnAgregarAccionInmediata: function () {
            return $('#btnAgregarAccionInmediata');
        },

        /////////////////////   TESTIGO
        DlgFormularioEmpresaColaboradorTestigo: null,

        /////////////////////   SUPERVISOR
        DlgFormularioEmpresaColaboradorSupervisor: null,
        //BtnAgregarEmpresaColaboradorSupervisor: function () { return $('#btnAgregarEmpresaColaboradorInvestigador'); },

        /////////////////////////INVESTIGACION BARRERA
        HdnCodigoInformacionFallos: function () {
            return $('#hdnCodigoInformacionFallos');
        },
        HdnCodigoInformacionBarrera: function () {
            return $('#hdnCodigoInformacionBarrera');
        },
        SlcCondicionBarrera: function () {
            return $('#slcCondicionBarrera');
        },
        SlcTipoBarrera: function () {
            return $('#slcTipoBarrera');
        },
        TxtDescripcionCortaBarrera: function () {
            return $('#txtDescripcionCortaBarrera');
        },
        TxtDescripcionLargaBarrera: function () {
            return $('#txtDescripcionLargaBarrera');
        },
        SlcSeleccionBarrera: function () {
            return $('#slcSeleccionBarrera');
        },
        TxtDescripcionFalloBarrera: function () {
            return $('#txtDescripcionFalloBarrera');
        },
        TxtRecomendacionesBarrera: function () {
            return $('#txtRecomendacionesBarrera');
        },
        ///////////////////////// CATEGORIA
        FrmCategoriaOtros: function () {
            return $('#frmCategoriaOtros');
        },
        BtnGrabarCategoriaOtros: function () {
            return $('#btnGrabarCategoriaOtros');
        },
        TxtDescripcionCategoriaOtros: function () {
            return $('#txtDescripcionCategoriaOtros');
        },
        TxtConsecuenciaActualCategoriaOtros: function () {
            return $('#txtConsecuenciaActualCategoriaOtros');
        },
        TxtConsecuenciaPotencialCategoriaOtros: function () {
            return $('#txtConsecuenciaPotencialCategoriaOtros');
        },
        BtnGrabarCategoriaCuasi: function () {
            return $('#btnGrabarCategoriaCuasi');
        },
        TxtConsecuenciaPotencialCategoriaCuasi: function () {
            return $('#txtConsecuenciaPotencialCategoriaCuasi');
        },

        TxtActualConsecuenciaCategoriaLesion: function () {
            return $('#txtActualConsecuenciaCategoriaLesion');
        },
        TxtPotencialConsecuenciaCategoriaLesion: function () {
            return $('#txtPotencialConsecuenciaCategoriaLesion');
        },
        TxtActualConsecuenciaCategoriaDanioPropiedad: function () {
            return $('#txtActualConsecuenciaCategoriaDanioPropiedad');
        },
        TxtPotencialConsecuenciaCategoriaDanioPropiedad: function () {
            return $('#txtPotencialConsecuenciaCategoriaDanioPropiedad');
        },
        TxtActualConsecuenciaCategoriaPerdidaProceso: function () {
            return $('#txtActualConsecuenciaCategoriaPerdidaProceso');
        },
        TxtPotencialConsecuenciaCategoriaPerdidaProceso: function () {
            return $('#txtPotencialConsecuenciaCategoriaPerdidaProceso');
        },
        TxtActualConsecuenciaCategoriaImpactoAmbiente: function () {
            return $('#txtActualConsecuenciaCategoriaImpactoAmbiente');
        },
        TxtPotencialConsecuenciaCategoriaImpactoAmbiente: function () {
            return $('#txtPotencialConsecuenciaCategoriaImpactoAmbiente');
        },
        TxtActualConsecuenciaCategoriaImpactoComunidad: function () {
            return $('#txtActualConsecuenciaCategoriaImpactoComunidad');
        },
        TxtPotencialConsecuenciaCategoriaImpactoComunidad: function () {
            return $('#txtPotencialConsecuenciaCategoriaImpactoComunidad');
        },

        /////////////////////   CLASIFICACION PRINCIPAL
        TxtActualConsecuenciaClasificacionPrincipal: function () {
            return $('#txtActualConsecuenciaClasificacionPrincipal');
        },
        TxtPotencialConsecuenciaClasificacionPrincipal: function () {
            return $('#txtPotencialConsecuenciaClasificacionPrincipal');
        },
        TxtHpiClasificacionPrincipal: function () {
            return $('#txtHpiClasificacionPrincipal');
        },
        TxtClasificacionPrincipal: function () {
            return $('#txtClasificacionPrincipal');
        },

        /////////////////////   ANÁLISIS DE CAUSAS
        DivGrdResultadoAnalisisCausasInmediatas: null,
        GrdResultadoFactorCausal: null,
        GrdResultadoCausaRaiz: null,
        GrdResultadoCausaInmediata: null,
        BtnAgregarCausasInmediatas: function () {
            return $('#btnAgregarAnalisisCausasInmediatas');
        },
        BtnAgregarFactoresCausales: function () {
            return $('#btnAgregarAnalisisFactoresCausales');
        },
        BtnAgregarCausasRaices: function () {
            return $('#btnAgregarAnalisisCausasRaices');
        },

        /////////////////////   DESCRIPCION
        FrmDescripcionPreEvento: function () {
            return $('#frmDescripcionPreEvento');
        },
        TxaDescripcionPreEvento: function () {
            return $('#txaDescripcionPreEvento');
        },
        BtnCancelarDescripcionPreEvento: function () {
            return $('#btnCancelarDescripcionPreEvento');
        },
        BtnGrabarDescripcionPreEvento: function () {
            return $('#btnGrabarDescripcionPreEvento');
        },

        FrmDescripcionEvento: function () {
            return $('#frmDescripcionEvento');
        },
        TxaDescripcionEvento: function () {
            return $('#txaDescripcionEvento');
        },
        BtnCancelarDescripcionPostEvento: function () {
            return $('#btnCancelarDescripcionPostEvento');
        },
        BtnGrabarDescripcionPostEvento: function () {
            return $('#btnGrabarDescripcionPostEvento');
        },

        FrmDescripcionPostEvento: function () {
            return $('#frmDescripcionPostEvento');
        },
        TxaDescripcionPostEvento: function () {
            return $('#txaDescripcionPostEvento');
        },
        BtnCancelarDescripcionEvento: function () {
            return $('#btnCancelarDescripcionEvento');
        },
        BtnGrabarDescripcionEvento: function () {
            return $('#btnGrabarDescripcionEvento');
        },

        ////////////////////    EQUIPO INVESTIGADOR
        DlgFormularioEmpresaColaboradorInvestigador: null,
        BtnAgregarInvestigador: function () {
            return $('#btnAgregarEmpresaColaboradorInvestigador');
        },

        ///////////////////LECCION APRENDIDA
        BtnAgregarLeccionAprendida: function () {
            return $('#btnAgregarLeccionAprendida');
        },
        BtnAgregarAccionCorrectiva: function () {
            return $('#btnAgregarAccionCorrectiva');
        },
        BtnAgregarAccionInmediata: function () {
            return $('#btnAgregarAccionInmediata');
        },
        DlgFormularioLeccionAprendida: null,
        DlgFormularioAccionesInmediatas: null,
        DlgFormularioAccionesCorrectivas: null,
        GrdLeccionesAprendidas: null,
        GrdAccionesInmediatas: null,
        GrdAccionesCorrectivas: null,

        //////////////////////  ANEXOS
        BtnAgregarInvestigacionAnexoApendice: function () {
            return $('#btnAgregarInvestigacionAnexoApendice');
        },
        DlgFormularioInvestigacionAnexoApendice: null,
        GrdResultadoInvestigacionAnexoApendice: null,
        GrdResultadoTipoAnexo: null,
        listaRecordAnexos: null,
        listaRecordTipoAnexo: null,
        DlgFormularioAnexoSnapchart: null,
        BtnAgregarAnexoSnapchart: function () {
            return $('#btnAgregarAnexoEvento');
        },
        HdnCodigoArchivoAnexoEvento: function () {
            return $('#hdnCodigoArchivoAnexoEvento');
        },
        TxtNombreArchivoAnexoEvento: function () {
            return $('#txtNombreArchivoAnexoEvento');
        },

        /////////////////////// FOTOS
        BtnAgregarInvestigacionAnexoFoto: function () {
            return $('#btnAgregarInvestigacionAnexoFoto');
        },
        DlgFormularioInvestigacionAnexoFoto: null,
        GrdResultadoInvestigacionAnexoFoto: null,
        DlgFormularioVistaPreviaFoto: null,

        //DATOS REPORTANTE
        BtnBuscarColaboradorReportaInvestigacion: function () {
            return $('#btnBuscarColaboradorReportaInvestigacion');
        },
        DlgFormularioBuscarColaboradorReportaInvestigacion: null,
        HdnCodigoColaboradorReportaInvestigacion: function () {
            return $('#hdnCodigoColaboradorReportaInvestigacion');
        },
        TxtNombreColaboradorReportaInvestigacion: function () {
            return $('#txtNombreColaboradorReportaInvestigacion');
        },
        SlcPuestoCargoReportaInvestigacion: function () {
            return $('#slcPuestoCargoReportaInvestigacion');
        },
        BtnGrabarDatosReportante: function () {
            return $('#btnGrabarDatosReportante');
        },
        FrmRecordDatosReportante: function () {
            return $('#frmRecordDatosReportante');
        },
        FrmTestigoExterno: function () {
            return $('#frmTestigoExterno');
        },
        FrmAnalisisBarrera: function () {
            return $('#frmAnalisisBarrera');
        },
        FrmInformacionFallos: function () {
            return $('#frmInformacionFallos');
        },
        ValidadorDatosReportante: null,
        ValidadorTestigoExterno: null,
        ///////Grid Estados de la Investigacion
        BtnAgregarEstadoInvestigacionElaborado: function () {
            return $('#btnAgregarEstadoInvestigacionElaborado');
        },
        BtnAgregarEstadoInvestigacionRevisado: function () {
            return $('#btnAgregarEstadoInvestigacionRevisado');
        },
        BtnAgregarEstadoInvestigacionAprobado: function () {
            return $('#btnAgregarEstadoInvestigacionAprobado');
        },
        BtnModificarEstadoInvestigacion: function () {
            return $('#btnModificarEstadoInvestigacion');
        },
        BtnGuardarEstadoInvestigacion: function () {
            return $('#btnGuardarEstadoInvestigacion');
        },
        TxtEstadoInvestigacion: function () {
            return $('#txtEstadoInvestigacion');
        },
        CodigoEstadoInvestigacion: null,
        ComentarioEstadoInvestigacion: null,
        DlgFormularioEstadoInvestigacion: null,
        DlgFormularioModificarEstadoInvestigacion: null,
        GrdResultadoEstadoElaboradoPor: null,
        GrdResultadoEstadoRevisadoPor: null,
        GrdResultadoEstadoAprobadoPor: null,

        TipoTestigoInvestigacion: null,
    };

    base.Function = {
        roundNumber: function (num, scale) {
            if (!("" + num).includes("e")) {
                return +(Math.round(num + "e+" + scale) + "e-" + scale);
            } else {
                var arr = ("" + num).split("e");
                var sig = ""
                if (+arr[1] + scale > 0) {
                    sig = "+";
                }
                return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
            }
        },
        //TABS COSTOS DEL INCIDENTE
        //Tab de Costos de investigación
        CrearGridCostoInvestigacionTrabajadorInvolucrado: function () {
            var columns = new Array();
            base.Control.UltimoRegistroGridCostoInvestigacionTrabajadorInvolucrado++;
            columns.push({
                data: 'ApellidosNombres',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridNombreApellido,
                width: "30%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoInvestigacionTrabajadorInvolucradoApellidosNombres_' + base.Control.UltimoRegistroGridCostoInvestigacionTrabajadorInvolucrado + '"  type="text"  name="costoinvestigaciontrabajadorinvolucradoapellidosnombres" value="' + full.ApellidosNombres + '" maxlength="100"  style="width: 100%;text-align:center;">';
                },
            });
            columns.push({
                data: 'DocIdentidad',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridDocIdentidad,
                width: "15%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoInvestigacionTrabajadorInvolucradoDocIdentidad_' + base.Control.UltimoRegistroGridCostoInvestigacionTrabajadorInvolucrado + '"  type="text" mask="integer" name="costoinvestigaciontrabajadorinvolucradodocidentidad" value="' + full.DocIdentidad + '" maxlength="12"  style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: 'Empresa',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridEmpresa,
                width: "15%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoInvestigacionTrabajadorInvolucradoEmpresa_' + base.Control.UltimoRegistroGridCostoInvestigacionTrabajadorInvolucrado + '"  type="text"  name="costoinvestigaciontrabajadorinvolucradoempresa" value="' + full.Empresa + '" maxlength="100"  style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: 'Cantidad',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridCantidad,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoInvestigacionTrabajadorInvolucradoCantidad_" + base.Control.UltimoRegistroGridCostoInvestigacionTrabajadorInvolucrado +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoInvestigacionTrabajadorInvolucrado + "'" + "' class='ClassCostoInvestigacionTrabajadorInvolucradoCantidad' type='text' mask='integer' name='ClassCostoInvestigacionTrabajadorInvolucradoCantidad' " +
                        " value='" + full.Cantidad + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'Tiempo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridTiempo,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoInvestigacionTrabajadorInvolucradoTiempo_" + base.Control.UltimoRegistroGridCostoInvestigacionTrabajadorInvolucrado +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoInvestigacionTrabajadorInvolucrado + "'" + "' class='ClassCostoInvestigacionTrabajadorInvolucradoTiempo' type='text' mask='integer' name='ClassCostoInvestigacionTrabajadorInvolucradoTiempo' " +
                        " value='" + full.Tiempo + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'PrecioUnitario',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridPrecioUnitario,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoInvestigacionTrabajadorInvolucradoPrecioUnitario_" + base.Control.UltimoRegistroGridCostoInvestigacionTrabajadorInvolucrado +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoInvestigacionTrabajadorInvolucrado + "'" + "' class='ClassCostoInvestigacionTrabajadorInvolucradoPrecioUnitario' type='text' mask='decimal' name='ClassCostoInvestigacionTrabajadorInvolucradoPrecioUnitario' " +
                        " value='" + full.PrecioUnitario + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'Costo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridCosto,
                width: "10%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoInvestigacionTrabajadorInvolucradoCostoUSS_' + base.Control.UltimoRegistroGridCostoInvestigacionTrabajadorInvolucrado + '"  type="text"  class="ClassCostoInvestigacionTrabajadorInvolucradoCostoUSS" name="ClassCostoInvestigacionTrabajadorInvolucradoCostoUSS" disabled mask="decimal" value="' + (full.Costo != null ? full.Costo : 0.00) + '"   style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: "",
                title: "Oper.",
                "class": "controls",
                width: "3%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                    validateRender: base.Event.BtnGridDeleteValidate,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEliminarCostoInvestigacionTrabajadorInvolucradoClick
                    }
                }]
            });
            base.Control.GrdResultadoTabCostoInvestigacionTrabajadorInvolucrado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoTabCostoInvestigacionTrabajadorInvolucrado',
                columns: columns,
                hasSelectionRows: false,
                hasPaging: false,
                hasPagingServer: false,
                scrollX: '',
                proxy: {

                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarCostoInvestigacionTrabajadorInvolucrado,
                    source: 'Result'
                },
                events: [{
                    type: 'keyup',
                    selector: '.ClassCostoInvestigacionTrabajadorInvolucradoCantidad',
                    callBack: base.Event.CalcularCostoInvestigacionTrabajadorInvolucradoCostoUSS
                },
                    {
                        type: 'keyup',
                        selector: '.ClassCostoInvestigacionTrabajadorInvolucradoTiempo',
                        callBack: base.Event.CalcularCostoInvestigacionTrabajadorInvolucradoCostoUSS
                    },
                    {
                        type: 'keyup',
                        selector: '.ClassCostoInvestigacionTrabajadorInvolucradoPrecioUnitario',
                        callBack: base.Event.CalcularCostoInvestigacionTrabajadorInvolucradoCostoUSS
                    },
                ],
                returnCallbackComplete: function (instancia, records) {

                    Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
                    var acumCosto = 0.00;
                    for (var i = 0; i < records.length; i++) {
                        if (records[i].Costo != null && records[i].Costo != '')
                            acumCosto += parseFloat(records[i].Costo);
                    }
                    if (acumCosto > 0) {
                        base.Control.TxtCostoInvestigacionTrabajadorInvolucradoCosto().val(acumCosto);
                    }
                }
            });
        },
        CrearGridCostoInvestigacionSupervisor: function () {
            var columns = new Array();
            base.Control.UltimoRegistroGridCostoInvestigacionSupervisor++;
            columns.push({
                data: 'ApellidosNombres',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridNombreApellido,
                width: "30%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoInvestigacionSupervisorApellidosNombres_' + base.Control.UltimoRegistroGridCostoInvestigacionSupervisor + '"  type="text"  name="costoinvestigacionSupervisorapellidosnombres" value="' + full.ApellidosNombres + '" maxlength="100"  style="width: 100%;text-align:center;">';
                },
            });
            columns.push({
                data: 'DocIdentidad',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridDocIdentidad,
                width: "15%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoInvestigacionSupervisorDocIdentidad_' + base.Control.UltimoRegistroGridCostoInvestigacionSupervisor + '"  type="text" mask="integer" name="costoinvestigacionSupervisordocidentidad" value="' + full.DocIdentidad + '" maxlength="12"  style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: 'Empresa',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridEmpresa,
                width: "15%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoInvestigacionSupervisorEmpresa_' + base.Control.UltimoRegistroGridCostoInvestigacionSupervisor + '"  type="text"  name="costoinvestigacionSupervisorempresa" value="' + full.Empresa + '" maxlength="100"  style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: 'Cantidad',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridCantidad,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoInvestigacionSupervisorCantidad_" + base.Control.UltimoRegistroGridCostoInvestigacionSupervisor +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoInvestigacionSupervisor + "'" + "' class='ClassCostoInvestigacionSupervisorCantidad' type='text' mask='integer' name='ClassCostoInvestigacionSupervisorCantidad' " +
                        " value='" + full.Cantidad + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'Tiempo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridTiempo,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoInvestigacionSupervisorTiempo_" + base.Control.UltimoRegistroGridCostoInvestigacionSupervisor +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoInvestigacionSupervisor + "'" + "' class='ClassCostoInvestigacionSupervisorTiempo' type='text' mask='integer' name='ClassCostoInvestigacionSupervisorTiempo' " +
                        " value='" + full.Tiempo + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'PrecioUnitario',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridPrecioUnitario,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoInvestigacionSupervisorPrecioUnitario_" + base.Control.UltimoRegistroGridCostoInvestigacionSupervisor +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoInvestigacionSupervisor + "'" + "' class='ClassCostoInvestigacionSupervisorPrecioUnitario' type='text' mask='decimal' name='ClassCostoInvestigacionSupervisorPrecioUnitario' " +
                        " value='" + full.PrecioUnitario + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'Costo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridCosto,
                width: "10%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoInvestigacionSupervisorCostoUSS_' + base.Control.UltimoRegistroGridCostoInvestigacionSupervisor + '"  type="text"  class="ClassCostoInvestigacionSupervisorCostoUSS" name="ClassCostoInvestigacionSupervisorCostoUSS" disabled mask="decimal" value="' + (full.Costo != null ? full.Costo : 0.00) + '"   style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: "",
                title: "Oper.",
                "class": "controls",
                width: "3%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                    validateRender: base.Event.BtnGridDeleteValidate,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEliminarCostoInvestigacionSupervisorClick
                    }
                }]
            });
            base.Control.GrdResultadoTabCostoInvestigacionSupervisor = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoTabCostoInvestigacionSupervisor',
                columns: columns,
                hasSelectionRows: false,
                hasPaging: false,
                hasPagingServer: false,
                scrollX: '',
                proxy: {

                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarCostoInvestigacionSupervisor,
                    source: 'Result'
                },
                events: [{
                    type: 'keyup',
                    selector: '.ClassCostoInvestigacionSupervisorCantidad',
                    callBack: base.Event.CalcularCostoInvestigacionSupervisorCostoUSS
                },
                    {
                        type: 'keyup',
                        selector: '.ClassCostoInvestigacionSupervisorTiempo',
                        callBack: base.Event.CalcularCostoInvestigacionSupervisorCostoUSS
                    },
                    {
                        type: 'keyup',
                        selector: '.ClassCostoInvestigacionSupervisorPrecioUnitario',
                        callBack: base.Event.CalcularCostoInvestigacionSupervisorCostoUSS
                    },
                ],
                returnCallbackComplete: function (instancia, records) {

                    Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
                    var acumCosto = 0.00;
                    for (var i = 0; i < records.length; i++) {
                        if (records[i].Costo != null && records[i].Costo != '')
                            acumCosto += parseFloat(records[i].Costo);
                    }
                    if (acumCosto > 0) {
                        base.Control.TxtCostoInvestigacionSupervisorCosto().val(acumCosto);
                    }
                }
            });
        },
        CrearGridCostoInvestigacionDeclaracionTestigo: function () {
            var columns = new Array();
            base.Control.UltimoRegistroGridCostoInvestigacionDeclaracionTestigo++;
            columns.push({
                data: 'ApellidosNombres',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridNombreApellido,
                width: "30%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoInvestigacionDeclaracionTestigoApellidosNombres_' + base.Control.UltimoRegistroGridCostoInvestigacionDeclaracionTestigo + '"  type="text"  name="costoinvestigacionDeclaracionTestigoapellidosnombres" value="' + full.ApellidosNombres + '" maxlength="100"  style="width: 100%;text-align:center;">';
                },
            });
            columns.push({
                data: 'DocIdentidad',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridDocIdentidad,
                width: "15%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoInvestigacionDeclaracionTestigoDocIdentidad_' + base.Control.UltimoRegistroGridCostoInvestigacionDeclaracionTestigo + '"  type="text" mask="integer" name="costoinvestigacionDeclaracionTestigodocidentidad" value="' + full.DocIdentidad + '" maxlength="12"  style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: 'Empresa',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridEmpresa,
                width: "15%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoInvestigacionDeclaracionTestigoEmpresa_' + base.Control.UltimoRegistroGridCostoInvestigacionDeclaracionTestigo + '"  type="text"  name="costoinvestigacionDeclaracionTestigoempresa" value="' + full.Empresa + '" maxlength="100"  style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: 'Cantidad',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridCantidad,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoInvestigacionDeclaracionTestigoCantidad_" + base.Control.UltimoRegistroGridCostoInvestigacionDeclaracionTestigo +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoInvestigacionDeclaracionTestigo + "'" + "' class='ClassCostoInvestigacionDeclaracionTestigoCantidad' type='text' mask='integer' name='ClassCostoInvestigacionDeclaracionTestigoCantidad' " +
                        " value='" + full.Cantidad + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'Tiempo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridTiempo,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoInvestigacionDeclaracionTestigoTiempo_" + base.Control.UltimoRegistroGridCostoInvestigacionDeclaracionTestigo +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoInvestigacionDeclaracionTestigo + "'" + "' class='ClassCostoInvestigacionDeclaracionTestigoTiempo' type='text' mask='integer' name='ClassCostoInvestigacionDeclaracionTestigoTiempo' " +
                        " value='" + full.Tiempo + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'PrecioUnitario',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridPrecioUnitario,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoInvestigacionDeclaracionTestigoPrecioUnitario_" + base.Control.UltimoRegistroGridCostoInvestigacionDeclaracionTestigo +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoInvestigacionDeclaracionTestigo + "'" + "' class='ClassCostoInvestigacionDeclaracionTestigoPrecioUnitario' type='text' mask='decimal' name='ClassCostoInvestigacionDeclaracionTestigoPrecioUnitario' " +
                        " value='" + full.PrecioUnitario + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'Costo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridCosto,
                width: "10%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoInvestigacionDeclaracionTestigoCostoUSS_' + base.Control.UltimoRegistroGridCostoInvestigacionDeclaracionTestigo + '"  type="text"  class="ClassCostoInvestigacionDeclaracionTestigoCostoUSS" name="ClassCostoInvestigacionDeclaracionTestigoCostoUSS" disabled mask="decimal" value="' + (full.Costo != null ? full.Costo : 0.00) + '"   style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: "",
                title: "Oper.",
                "class": "controls",
                width: "3%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                    validateRender: base.Event.BtnGridDeleteValidate,
                    event: {
                        on: 'click',                        
                        callBack: base.Event.BtnGridEliminarCostoInvestigacionDeclaracionTestigoClick
                    }
                }]
            });
            base.Control.GrdResultadoTabCostoInvestigacionDeclaracionTestigo = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoTabCostoInvestigacionDeclaracionTestigo',
                columns: columns,
                hasSelectionRows: false,
                hasPaging: false,
                hasPagingServer: false,
                scrollX: '',
                proxy: {

                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarCostoInvestigacionDeclaracionTestigo,
                    source: 'Result'
                },
                events: [{
                    type: 'keyup',
                    selector: '.ClassCostoInvestigacionDeclaracionTestigoCantidad',
                    callBack: base.Event.CalcularCostoInvestigacionDeclaracionTestigoCostoUSS
                },
                    {
                        type: 'keyup',
                        selector: '.ClassCostoInvestigacionDeclaracionTestigoTiempo',
                        callBack: base.Event.CalcularCostoInvestigacionDeclaracionTestigoCostoUSS
                    },
                    {
                        type: 'keyup',
                        selector: '.ClassCostoInvestigacionDeclaracionTestigoPrecioUnitario',
                        callBack: base.Event.CalcularCostoInvestigacionDeclaracionTestigoCostoUSS
                    },
                ],
                returnCallbackComplete: function (instancia, records) {

                    Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
                    var acumCosto = 0.00;
                    for (var i = 0; i < records.length; i++) {
                        if (records[i].Costo != null && records[i].Costo != '')
                            acumCosto += parseFloat(records[i].Costo);
                    }
                    if (acumCosto > 0) {
                        base.Control.TxtCostoInvestigacionDeclaracionTestigoCosto().val(acumCosto);
                    }
                }
            });
        },

        //Tab de Costos Personal
        CrearGridCostoPersonalTrabajadorInvolucrado: function () {
            var columns = new Array();
            base.Control.UltimoRegistroGridCostoPersonalTrabajadorInvolucrado++;
            columns.push({
                data: 'ApellidosNombres',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridNombreApellido,
                width: "30%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoPersonalTrabajadorInvolucradoApellidosNombres_' + base.Control.UltimoRegistroGridCostoPersonalTrabajadorInvolucrado + '"  type="text"  name="costoPersonalTrabajadorInvolucradoapellidosnombres" value="' + full.ApellidosNombres + '" maxlength="100"  style="width: 100%;text-align:center;">';
                },
            });
            columns.push({
                data: 'DocIdentidad',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridDocIdentidad,
                width: "15%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoPersonalTrabajadorInvolucradoDocIdentidad_' + base.Control.UltimoRegistroGridCostoPersonalTrabajadorInvolucrado + '"  type="text" mask="integer" name="costoPersonalTrabajadorInvolucradodocidentidad" value="' + full.DocIdentidad + '" maxlength="12"  style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: 'Empresa',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridEmpresa,
                width: "15%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoPersonalTrabajadorInvolucradoEmpresa_' + base.Control.UltimoRegistroGridCostoPersonalTrabajadorInvolucrado + '"  type="text"  name="costoPersonalTrabajadorInvolucradoempresa" value="' + full.Empresa + '" maxlength="100"  style="width: 100%;text-align:center;">';
                }
            });

            columns.push({
                data: 'PuestoTrabajo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridPuestoTrabajo,
                width: "15%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoPersonalTrabajadorInvolucradoPuestoTrabajo_' + base.Control.UltimoRegistroGridCostoPersonalTrabajadorInvolucrado + '"  type="text"  name="costoPersonalTrabajadorInvolucradopuestotrabajo" value="' + full.PuestoTrabajo + '" maxlength="100"  style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: 'SufrioLesion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridSufrioLesion,
                width: "5%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoPersonalTrabajadorInvolucradoSufrioLesion_' + base.Control.UltimoRegistroGridCostoPersonalTrabajadorInvolucrado + '"  type="text"  name="costoPersonalTrabajadorInvolucradosufriolesion" value="' + full.SufrioLesion + '" maxlength="100"  style="width: 100%;text-align:center;">';
                }
            });

            columns.push({
                data: 'Tiempo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridTiempo,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoPersonalTrabajadorInvolucradoTiempo_" + base.Control.UltimoRegistroGridCostoPersonalTrabajadorInvolucrado +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoPersonalTrabajadorInvolucrado + "'" + "' class='ClassCostoPersonalTrabajadorInvolucradoTiempo' type='text' mask='integer' name='ClassCostoPersonalTrabajadorInvolucradoTiempo' " +
                        " value='" + full.Tiempo + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'PrecioUnitario',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridPrecioUnitario,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoPersonalTrabajadorInvolucradoPrecioUnitario_" + base.Control.UltimoRegistroGridCostoPersonalTrabajadorInvolucrado +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoPersonalTrabajadorInvolucrado + "'" + "' class='ClassCostoPersonalTrabajadorInvolucradoPrecioUnitario' type='text' mask='decimal' name='ClassCostoPersonalTrabajadorInvolucradoPrecioUnitario' " +
                        " value='" + full.PrecioUnitario + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'Costo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridCosto,
                width: "10%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoPersonalTrabajadorInvolucradoCostoUSS_' + base.Control.UltimoRegistroGridCostoPersonalTrabajadorInvolucrado + '"  type="text"  class="ClassCostoPersonalTrabajadorInvolucradoCostoUSS" name="ClassCostoPersonalTrabajadorInvolucradoCostoUSS" disabled mask="decimal" value="' + (full.Costo != null ? full.Costo : 0.00) + '"   style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: "",
                title: "Oper.",
                "class": "controls",
                width: "3%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                    validateRender: base.Event.BtnGridDeleteValidate,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEliminarCostoPersonalTrabajadorInvolucradoClick
                    }
                }]
            });
            base.Control.GrdResultadoTabCostoPersonalTrabajadorInvolucrado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoTabCostoPersonalTrabajadorInvolucrado',
                columns: columns,
                hasSelectionRows: false,
                hasPaging: false,
                hasPagingServer: false,
                scrollX: '',
                proxy: {

                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarCostoPersonalTrabajadorInvolucrado,
                    source: 'Result'
                },
                events: [{
                    type: 'keyup',
                    selector: '.ClassCostoPersonalTrabajadorInvolucradoCantidad',
                    callBack: base.Event.CalcularCostoPersonalTrabajadorInvolucradoCostoUSS
                },
                    {
                        type: 'keyup',
                        selector: '.ClassCostoPersonalTrabajadorInvolucradoTiempo',
                        callBack: base.Event.CalcularCostoPersonalTrabajadorInvolucradoCostoUSS
                    },
                    {
                        type: 'keyup',
                        selector: '.ClassCostoPersonalTrabajadorInvolucradoPrecioUnitario',
                        callBack: base.Event.CalcularCostoPersonalTrabajadorInvolucradoCostoUSS
                    },
                ],
                returnCallbackComplete: function (instancia, records) {

                    Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
                    var acumCosto = 0.00;
                    for (var i = 0; i < records.length; i++) {
                        if (records[i].Costo != null && records[i].Costo != '')
                            acumCosto += parseFloat(records[i].Costo);
                    }
                    if (acumCosto > 0) {
                        base.Control.TxtCostoPersonalTrabajadorInvolucradoCosto().val(acumCosto);
                    }
                }
            });
        },
        CrearGridCostoPersonalSupervisor: function () {
            var columns = new Array();
            base.Control.UltimoRegistroGridCostoPersonalSupervisor++;
            columns.push({
                data: 'ApellidosNombres',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridNombreApellido,
                width: "30%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoPersonalSupervisorApellidosNombres_' + base.Control.UltimoRegistroGridCostoPersonalSupervisor + '"  type="text"  name="costoPersonalSupervisorapellidosnombres" value="' + full.ApellidosNombres + '" maxlength="100"  style="width: 100%;text-align:center;">';
                },
            });
            columns.push({
                data: 'DocIdentidad',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridDocIdentidad,
                width: "15%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoPersonalSupervisorDocIdentidad_' + base.Control.UltimoRegistroGridCostoPersonalSupervisor + '"  type="text" mask="integer"  name="costoPersonalSupervisordocidentidad" value="' + full.DocIdentidad + '" maxlength="12"  style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: 'Empresa',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridEmpresa,
                width: "15%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoPersonalSupervisorEmpresa_' + base.Control.UltimoRegistroGridCostoPersonalSupervisor + '"  type="text"  name="costoPersonalSupervisorempresa" value="' + full.Empresa + '" maxlength="100"  style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: 'PuestoTrabajo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridPuestoTrabajo,
                width: "15%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoPersonalSupervisorPuestoTrabajo_' + base.Control.UltimoRegistroGridCostoPersonalSupervisor + '"  type="text"  name="costoPersonalSupervisorpuestotrabajo" value="' + full.PuestoTrabajo + '" maxlength="100"  style="width: 100%;text-align:center;">';
                }
            });

            columns.push({
                data: 'Tiempo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridTiempo,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoPersonalSupervisorTiempo_" + base.Control.UltimoRegistroGridCostoPersonalSupervisor +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoPersonalSupervisor + "'" + "' class='ClassCostoPersonalSupervisorTiempo' type='text' mask='integer' name='ClassCostoPersonalSupervisorTiempo' " +
                        " value='" + full.Tiempo + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'PrecioUnitario',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridPrecioUnitario,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoPersonalSupervisorPrecioUnitario_" + base.Control.UltimoRegistroGridCostoPersonalSupervisor +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoPersonalSupervisor + "'" + "' class='ClassCostoPersonalSupervisorPrecioUnitario' type='text' mask='decimal' name='ClassCostoPersonalSupervisorPrecioUnitario' " +
                        " value='" + full.PrecioUnitario + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'Costo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridCosto,
                width: "10%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoPersonalSupervisorCostoUSS_' + base.Control.UltimoRegistroGridCostoPersonalSupervisor + '"  type="text"  class="ClassCostoPersonalSupervisorCostoUSS" name="ClassCostoPersonalSupervisorCostoUSS" disabled mask="decimal" value="' + (full.Costo != null ? full.Costo : 0.00) + '"   style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: "",
                title: "Oper.",
                "class": "controls",
                width: "3%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                    validateRender: base.Event.BtnGridDeleteValidate,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEliminarCostoPersonalSupervisorClick
                    }
                }]
            });
            base.Control.GrdResultadoTabCostoPersonalSupervisor = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoTabCostoPersonalSupervisor',
                columns: columns,
                hasSelectionRows: false,
                hasPaging: false,
                hasPagingServer: false,
                scrollX: '',
                proxy: {

                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarCostoPersonalSupervisor,
                    source: 'Result'
                },
                events: [{
                    type: 'keyup',
                    selector: '.ClassCostoPersonalSupervisorCantidad',
                    callBack: base.Event.CalcularCostoPersonalSupervisorCostoUSS
                },
                    {
                        type: 'keyup',
                        selector: '.ClassCostoPersonalSupervisorTiempo',
                        callBack: base.Event.CalcularCostoPersonalSupervisorCostoUSS
                    },
                    {
                        type: 'keyup',
                        selector: '.ClassCostoPersonalSupervisorPrecioUnitario',
                        callBack: base.Event.CalcularCostoPersonalSupervisorCostoUSS
                    },
                ],
                returnCallbackComplete: function (instancia, records) {

                    Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
                    var acumCosto = 0.00;
                    for (var i = 0; i < records.length; i++) {
                        if (records[i].Costo != null && records[i].Costo != '')
                            acumCosto += parseFloat(records[i].Costo);
                    }
                    if (acumCosto > 0) {
                        base.Control.TxtCostoPersonalSupervisorCosto().val(acumCosto);
                    }
                }
            });
        },

        //Tab de Costos Medio ambiental
        CrearGridCostoMedioambientalPersonalUtilizado: function () {
            var columns = new Array();
            base.Control.UltimoRegistroGridCostoMedioambientalPersonalUtilizado++;
            columns.push({
                data: 'ApellidosNombres',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridNombreApellido,
                width: "30%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoMedioambientalPersonalUtilizadoApellidosNombres_' + base.Control.UltimoRegistroGridCostoMedioambientalPersonalUtilizado + '"  type="text"  name="costoMedioambientalPersonalUtilizadoapellidosnombres" value="' + full.ApellidosNombres + '" maxlength="100"  style="width: 100%;text-align:center;">';
                },
            });
            columns.push({
                data: 'DocIdentidad',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridDocIdentidad,
                width: "15%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoMedioambientalPersonalUtilizadoDocIdentidad_' + base.Control.UltimoRegistroGridCostoMedioambientalPersonalUtilizado + '"  type="text" mask="integer" name="costoMedioambientalPersonalUtilizadodocidentidad" value="' + full.DocIdentidad + '" maxlength="12"  style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: 'Empresa',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridEmpresa,
                width: "15%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoMedioambientalPersonalUtilizadoEmpresa_' + base.Control.UltimoRegistroGridCostoMedioambientalPersonalUtilizado + '"  type="text"  name="costoMedioambientalPersonalUtilizadoempresa" value="' + full.Empresa + '" maxlength="100"  style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: 'Cantidad',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridCantidad,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoMedioambientalPersonalUtilizadoCantidad_" + base.Control.UltimoRegistroGridCostoMedioambientalPersonalUtilizado +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoMedioambientalPersonalUtilizado + "'" + "' class='ClassCostoMedioambientalPersonalUtilizadoCantidad' type='text' mask='integer' name='ClassCostoMedioambientalPersonalUtilizadoCantidad' " +
                        " value='" + full.Cantidad + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'Tiempo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridTiempo,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoMedioambientalPersonalUtilizadoTiempo_" + base.Control.UltimoRegistroGridCostoMedioambientalPersonalUtilizado +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoMedioambientalPersonalUtilizado + "'" + "' class='ClassCostoMedioambientalPersonalUtilizadoTiempo' type='text' mask='integer' name='ClassCostoMedioambientalPersonalUtilizadoTiempo' " +
                        " value='" + full.Tiempo + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'PrecioUnitario',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridPrecioUnitario,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoMedioambientalPersonalUtilizadoPrecioUnitario_" + base.Control.UltimoRegistroGridCostoMedioambientalPersonalUtilizado +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoMedioambientalPersonalUtilizado + "'" + "' class='ClassCostoMedioambientalPersonalUtilizadoPrecioUnitario' type='text' mask='decimal' name='ClassCostoMedioambientalPersonalUtilizadoPrecioUnitario' " +
                        " value='" + full.PrecioUnitario + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'Costo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridCosto,
                width: "10%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoMedioambientalPersonalUtilizadoCostoUSS_' + base.Control.UltimoRegistroGridCostoMedioambientalPersonalUtilizado + '"  type="text"  class="ClassCostoMedioambientalPersonalUtilizadoCostoUSS" name="ClassCostoMedioambientalPersonalUtilizadoCostoUSS" disabled mask="decimal" value="' + (full.Costo != null ? full.Costo : 0.00) + '"   style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: "",
                title: "Oper.",
                "class": "controls",
                width: "3%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                    validateRender: base.Event.BtnGridDeleteValidate,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEliminarCostoMedioambientalPersonalUtilizadoClick
                    }
                }]
            });
            base.Control.GrdResultadoTabCostoMedioambientalPersonalUtilizado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoTabCostoMedioambientalPersonalUtilizado',
                columns: columns,
                hasSelectionRows: false,
                hasPaging: false,
                hasPagingServer: false,
                scrollX: '',
                proxy: {

                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarCostoMedioambientalPersonalUtilizado,
                    source: 'Result'
                },
                events: [{
                    type: 'keyup',
                    selector: '.ClassCostoMedioambientalPersonalUtilizadoCantidad',
                    callBack: base.Event.CalcularCostoMedioambientalPersonalUtilizadoCostoUSS
                },
                    {
                        type: 'keyup',
                        selector: '.ClassCostoMedioambientalPersonalUtilizadoTiempo',
                        callBack: base.Event.CalcularCostoMedioambientalPersonalUtilizadoCostoUSS
                    },
                    {
                        type: 'keyup',
                        selector: '.ClassCostoMedioambientalPersonalUtilizadoPrecioUnitario',
                        callBack: base.Event.CalcularCostoMedioambientalPersonalUtilizadoCostoUSS
                    },
                ],
                returnCallbackComplete: function (instancia, records) {

                    Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
                    var acumCosto = 0.00;
                    for (var i = 0; i < records.length; i++) {
                        if (records[i].Costo != null && records[i].Costo != '')
                            acumCosto += parseFloat(records[i].Costo);
                    }
                    if (acumCosto > 0) {
                        base.Control.TxtCostoMedioambientalPersonalUtilizadoCosto().val(acumCosto);
                    }
                }
            });
        },
        CrearGridCostoMedioambientalMaterialUtilizado: function () {
            var columns = new Array();
            base.Control.UltimoRegistroGridCostoMedioambientalMaterialUtilizado++;
            columns.push({
                data: 'Material',
                title: 'Material',
                width: "30%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoMedioambientalMaterialUtilizadoMaterial_' + base.Control.UltimoRegistroGridCostoMedioambientalMaterialUtilizado + '"  type="text"  name="costoMedioambientalMaterialUtilizadomaterial" value="' + full.Material + '" maxlength="100"  style="width: 100%;text-align:center;">';
                },
            });

            columns.push({
                data: 'Cantidad',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridCantidad,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoMedioambientalMaterialUtilizadoCantidad_" + base.Control.UltimoRegistroGridCostoMedioambientalMaterialUtilizado +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoMedioambientalMaterialUtilizado + "'" + "' class='ClassCostoMedioambientalMaterialUtilizadoCantidad' type='text' mask='integer' name='ClassCostoMedioambientalMaterialUtilizadoCantidad' " +
                        " value='" + full.Cantidad + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });

            columns.push({
                data: 'PrecioUnitario',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridPrecioUnitario,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoMedioambientalMaterialUtilizadoPrecioUnitario_" + base.Control.UltimoRegistroGridCostoMedioambientalMaterialUtilizado +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoMedioambientalMaterialUtilizado + "'" + "' class='ClassCostoMedioambientalMaterialUtilizadoPrecioUnitario' type='text' mask='decimal' name='ClassCostoMedioambientalMaterialUtilizadoPrecioUnitario' " +
                        " value='" + full.PrecioUnitario + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'Costo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridCosto,
                width: "10%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoMedioambientalMaterialUtilizadoCostoUSS_' + base.Control.UltimoRegistroGridCostoMedioambientalMaterialUtilizado + '"  type="text"  class="ClassCostoMedioambientalMaterialUtilizadoCostoUSS" name="ClassCostoMedioambientalMaterialUtilizadoCostoUSS" disabled mask="decimal" value="' + (full.Costo != null ? full.Costo : 0.00) + '"   style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: "",
                title: "Oper.",
                "class": "controls",
                width: "3%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                    validateRender: base.Event.BtnGridDeleteValidate,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEliminarCostoMedioambientalMaterialUtilizadoClick
                    }
                }]
            });
            base.Control.GrdResultadoTabCostoMedioambientalMaterialUtilizado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoTabCostoMedioambientalMaterialUtilizado',
                columns: columns,
                hasSelectionRows: false,
                hasPaging: false,
                hasPagingServer: false,
                scrollX: '',
                proxy: {

                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarCostoMedioambientalMaterialUtilizado,
                    source: 'Result'
                },
                events: [{
                    type: 'keyup',
                    selector: '.ClassCostoMedioambientalMaterialUtilizadoCantidad',
                    callBack: base.Event.CalcularCostoMedioambientalMaterialUtilizadoCostoUSS
                },
                    {
                        type: 'keyup',
                        selector: '.ClassCostoMedioambientalMaterialUtilizadoTiempo',
                        callBack: base.Event.CalcularCostoMedioambientalMaterialUtilizadoCostoUSS
                    },
                    {
                        type: 'keyup',
                        selector: '.ClassCostoMedioambientalMaterialUtilizadoPrecioUnitario',
                        callBack: base.Event.CalcularCostoMedioambientalMaterialUtilizadoCostoUSS
                    },
                ],
                returnCallbackComplete: function (instancia, records) {

                    Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
                    var acumCosto = 0.00;
                    for (var i = 0; i < records.length; i++) {
                        if (records[i].Costo != null && records[i].Costo != '')
                            acumCosto += parseFloat(records[i].Costo);
                    }
                    if (acumCosto > 0) {
                        base.Control.TxtCostoMedioambientalMaterialUtilizadoCosto().val(acumCosto);
                    }
                }
            });
        },

        //Tab de Costos Daños Propiedad
        CrearGridCostoDaniosPropiedadPersonalUtilizado: function () {
            var columns = new Array();
            base.Control.UltimoRegistroGridCostoDaniosPropiedadPersonalUtilizado++;
            columns.push({
                data: 'ApellidosNombres',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridNombreApellido,
                width: "30%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoDaniosPropiedadPersonalUtilizadoApellidosNombres_' + base.Control.UltimoRegistroGridCostoDaniosPropiedadPersonalUtilizado + '"  type="text"  name="CostoDaniosPropiedadPersonalUtilizadoapellidosnombres" value="' + full.ApellidosNombres + '" maxlength="100"  style="width: 100%;text-align:center;">';
                },
            });
            columns.push({
                data: 'DocIdentidad',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridDocIdentidad,
                width: "15%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoDaniosPropiedadPersonalUtilizadoDocIdentidad_' + base.Control.UltimoRegistroGridCostoDaniosPropiedadPersonalUtilizado + '"  type="text" mask="integer" name="CostoDaniosPropiedadPersonalUtilizadodocidentidad" value="' + full.DocIdentidad + '" maxlength="12"  style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: 'Empresa',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridEmpresa,
                width: "15%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoDaniosPropiedadPersonalUtilizadoEmpresa_' + base.Control.UltimoRegistroGridCostoDaniosPropiedadPersonalUtilizado + '"  type="text"  name="CostoDaniosPropiedadPersonalUtilizadoempresa" value="' + full.Empresa + '" maxlength="100"  style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: 'Cantidad',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridCantidad,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoDaniosPropiedadPersonalUtilizadoCantidad_" + base.Control.UltimoRegistroGridCostoDaniosPropiedadPersonalUtilizado +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoDaniosPropiedadPersonalUtilizado + "'" + "' class='ClassCostoDaniosPropiedadPersonalUtilizadoCantidad' type='text' mask='integer' name='ClassCostoDaniosPropiedadPersonalUtilizadoCantidad' " +
                        " value='" + full.Cantidad + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'Tiempo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridTiempo,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoDaniosPropiedadPersonalUtilizadoTiempo_" + base.Control.UltimoRegistroGridCostoDaniosPropiedadPersonalUtilizado +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoDaniosPropiedadPersonalUtilizado + "'" + "' class='ClassCostoDaniosPropiedadPersonalUtilizadoTiempo' type='text' mask='integer' name='ClassCostoDaniosPropiedadPersonalUtilizadoTiempo' " +
                        " value='" + full.Tiempo + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'PrecioUnitario',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridPrecioUnitario,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoDaniosPropiedadPersonalUtilizadoPrecioUnitario_" + base.Control.UltimoRegistroGridCostoDaniosPropiedadPersonalUtilizado +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoDaniosPropiedadPersonalUtilizado + "'" + "' class='ClassCostoDaniosPropiedadPersonalUtilizadoPrecioUnitario' type='text' mask='decimal' name='ClassCostoDaniosPropiedadPersonalUtilizadoPrecioUnitario' " +
                        " value='" + full.PrecioUnitario + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'Costo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridCosto,
                width: "10%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoDaniosPropiedadPersonalUtilizadoCostoUSS_' + base.Control.UltimoRegistroGridCostoDaniosPropiedadPersonalUtilizado + '"  type="text"  class="ClassCostoDaniosPropiedadPersonalUtilizadoCostoUSS" name="ClassCostoDaniosPropiedadPersonalUtilizadoCostoUSS" disabled mask="decimal" value="' + (full.Costo != null ? full.Costo : 0.00) + '"   style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: "",
                title: "Oper.",
                "class": "controls",
                width: "3%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                    validateRender: base.Event.BtnGridDeleteValidate,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEliminarCostoDaniosPropiedadPersonalUtilizadoClick
                    }
                }]
            });
            base.Control.GrdResultadoTabCostoDaniosPropiedadPersonalUtilizado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoTabCostoDaniosPropiedadPersonalUtilizado',
                columns: columns,
                hasSelectionRows: false,
                hasPaging: false,
                hasPagingServer: false,
                scrollX: '',
                proxy: {

                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarCostoDaniosPropiedadPersonalUtilizado,
                    source: 'Result'
                },
                events: [{
                    type: 'keyup',
                    selector: '.ClassCostoDaniosPropiedadPersonalUtilizadoCantidad',
                    callBack: base.Event.CalcularCostoDaniosPropiedadPersonalUtilizadoCostoUSS
                },
                    {
                        type: 'keyup',
                        selector: '.ClassCostoDaniosPropiedadPersonalUtilizadoTiempo',
                        callBack: base.Event.CalcularCostoDaniosPropiedadPersonalUtilizadoCostoUSS
                    },
                    {
                        type: 'keyup',
                        selector: '.ClassCostoDaniosPropiedadPersonalUtilizadoPrecioUnitario',
                        callBack: base.Event.CalcularCostoDaniosPropiedadPersonalUtilizadoCostoUSS
                    },
                ],
                returnCallbackComplete: function (instancia, records) {

                    Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
                    var acumCosto = 0.00;
                    for (var i = 0; i < records.length; i++) {
                        if (records[i].Costo != null && records[i].Costo != '')
                            acumCosto += parseFloat(records[i].Costo);
                    }
                    if (acumCosto > 0) {
                        base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoCosto().val(acumCosto);
                    }
                }
            });
        },
        CrearGridCostoDaniosPropiedadEquipoUtilizado: function () {
            var columns = new Array();
            base.Control.UltimoRegistroGridCostoDaniosPropiedadEquipoUtilizado++;

            columns.push({
                data: 'Equipo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridEquipo,
                width: "30%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoDaniosPropiedadEquipoUtilizadoEquipo_' + base.Control.UltimoRegistroGridCostoDaniosPropiedadEquipoUtilizado + '"  type="text"  name="CostoDaniosPropiedadEquipoUtilizadoequipo" value="' + full.Equipo + '" maxlength="100"  style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: 'Cantidad',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridCantidad,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoDaniosPropiedadEquipoUtilizadoCantidad_" + base.Control.UltimoRegistroGridCostoDaniosPropiedadEquipoUtilizado +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoDaniosPropiedadEquipoUtilizado + "'" + "' class='ClassCostoDaniosPropiedadEquipoUtilizadoCantidad' type='text' mask='integer' name='ClassCostoDaniosPropiedadEquipoUtilizadoCantidad' " +
                        " value='" + full.Cantidad + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'Tiempo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridTiempo,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoDaniosPropiedadEquipoUtilizadoTiempo_" + base.Control.UltimoRegistroGridCostoDaniosPropiedadEquipoUtilizado +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoDaniosPropiedadEquipoUtilizado + "'" + "' class='ClassCostoDaniosPropiedadEquipoUtilizadoTiempo' type='text' mask='integer' name='ClassCostoDaniosPropiedadEquipoUtilizadoTiempo' " +
                        " value='" + full.Tiempo + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'PrecioUnitario',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridPrecioUnitario,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoDaniosPropiedadEquipoUtilizadoPrecioUnitario_" + base.Control.UltimoRegistroGridCostoDaniosPropiedadEquipoUtilizado +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoDaniosPropiedadEquipoUtilizado + "'" + "' class='ClassCostoDaniosPropiedadEquipoUtilizadoPrecioUnitario' type='text' mask='decimal' name='ClassCostoDaniosPropiedadEquipoUtilizadoPrecioUnitario' " +
                        " value='" + full.PrecioUnitario + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'Costo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridCosto,
                width: "10%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoDaniosPropiedadEquipoUtilizadoCostoUSS_' + base.Control.UltimoRegistroGridCostoDaniosPropiedadEquipoUtilizado + '"  type="text"  class="ClassCostoDaniosPropiedadEquipoUtilizadoCostoUSS" name="ClassCostoDaniosPropiedadEquipoUtilizadoCostoUSS" disabled mask="decimal" value="' + (full.Costo != null ? full.Costo : 0.00) + '"   style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: "",
                title: "Oper.",
                "class": "controls",
                width: "3%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                    validateRender: base.Event.BtnGridDeleteValidate,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEliminarCostoDaniosPropiedadEquipoUtilizadoClick
                    }
                }]
            });
            base.Control.GrdResultadoTabCostoDaniosPropiedadEquipoUtilizado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoTabCostoDaniosPropiedadEquipoUtilizado',
                columns: columns,
                hasSelectionRows: false,
                hasPaging: false,
                hasPagingServer: false,
                scrollX: '',
                proxy: {

                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarCostoDaniosPropiedadEquipoUtilizado,
                    source: 'Result'
                },
                events: [{
                    type: 'keyup',
                    selector: '.ClassCostoDaniosPropiedadEquipoUtilizadoCantidad',
                    callBack: base.Event.CalcularCostoDaniosPropiedadEquipoUtilizadoCostoUSS
                },
                    {
                        type: 'keyup',
                        selector: '.ClassCostoDaniosPropiedadEquipoUtilizadoTiempo',
                        callBack: base.Event.CalcularCostoDaniosPropiedadEquipoUtilizadoCostoUSS
                    },
                    {
                        type: 'keyup',
                        selector: '.ClassCostoDaniosPropiedadEquipoUtilizadoPrecioUnitario',
                        callBack: base.Event.CalcularCostoDaniosPropiedadEquipoUtilizadoCostoUSS
                    },
                ],
                returnCallbackComplete: function (instancia, records) {

                    Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
                    var acumCosto = 0.00;
                    for (var i = 0; i < records.length; i++) {
                        if (records[i].Costo != null && records[i].Costo != '')
                            acumCosto += parseFloat(records[i].Costo);
                    }
                    if (acumCosto > 0) {
                        base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoCosto().val(acumCosto);
                    }
                }
            });
        },
        CrearGridCostoDaniosPropiedadMaterialUtilizado: function () {
            var columns = new Array();
            base.Control.UltimoRegistroGridCostoDaniosPropiedadMaterialUtilizado++;

            columns.push({
                data: 'Material',
                title: 'Material',
                width: "40%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoDaniosPropiedadMaterialUtilizadoMaterial_' + base.Control.UltimoRegistroGridCostoDaniosPropiedadMaterialUtilizado + '"  type="text"  name="CostoDaniosPropiedadMaterialUtilizadomaterial" value="' + full.Material + '" maxlength="100"  style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: 'Cantidad',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridCantidad,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoDaniosPropiedadMaterialUtilizadoCantidad_" + base.Control.UltimoRegistroGridCostoDaniosPropiedadMaterialUtilizado +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoDaniosPropiedadMaterialUtilizado + "'" + "' class='ClassCostoDaniosPropiedadMaterialUtilizadoCantidad' type='text' mask='integer' name='ClassCostoDaniosPropiedadMaterialUtilizadoCantidad' " +
                        " value='" + full.Cantidad + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });

            columns.push({
                data: 'PrecioUnitario',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridPrecioUnitario,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoDaniosPropiedadMaterialUtilizadoPrecioUnitario_" + base.Control.UltimoRegistroGridCostoDaniosPropiedadMaterialUtilizado +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoDaniosPropiedadMaterialUtilizado + "'" + "' class='ClassCostoDaniosPropiedadMaterialUtilizadoPrecioUnitario' type='text' mask='decimal' name='ClassCostoDaniosPropiedadMaterialUtilizadoPrecioUnitario' " +
                        " value='" + full.PrecioUnitario + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'Costo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridCosto,
                width: "10%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoDaniosPropiedadMaterialUtilizadoCostoUSS_' + base.Control.UltimoRegistroGridCostoDaniosPropiedadMaterialUtilizado + '"  type="text"  class="ClassCostoDaniosPropiedadMaterialUtilizadoCostoUSS" name="ClassCostoDaniosPropiedadMaterialUtilizadoCostoUSS" disabled mask="decimal" value="' + (full.Costo != null ? full.Costo : 0.00) + '"   style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: "",
                title: "Oper.",
                "class": "controls",
                width: "3%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                    validateRender: base.Event.BtnGridDeleteValidate,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEliminarCostoDaniosPropiedadMaterialUtilizadoClick
                    }
                }]
            });
            base.Control.GrdResultadoTabCostoDaniosPropiedadMaterialUtilizado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoTabCostoDaniosPropiedadMaterialUtilizado',
                columns: columns,
                hasSelectionRows: false,
                hasPaging: false,
                hasPagingServer: false,
                scrollX: '',
                proxy: {

                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarCostoDaniosPropiedadMaterialUtilizado,
                    source: 'Result'
                },
                events: [{
                    type: 'keyup',
                    selector: '.ClassCostoDaniosPropiedadMaterialUtilizadoCantidad',
                    callBack: base.Event.CalcularCostoDaniosPropiedadMaterialUtilizadoCostoUSS
                },
                    {
                        type: 'keyup',
                        selector: '.ClassCostoDaniosPropiedadMaterialUtilizadoPrecioUnitario',
                        callBack: base.Event.CalcularCostoDaniosPropiedadMaterialUtilizadoCostoUSS
                    },
                ],
                returnCallbackComplete: function (instancia, records) {

                    Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
                    var acumCosto = 0.00;
                    for (var i = 0; i < records.length; i++) {
                        if (records[i].Costo != null && records[i].Costo != '')
                            acumCosto += parseFloat(records[i].Costo);
                    }
                    if (acumCosto > 0) {
                        base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoCosto().val(acumCosto);
                    }
                }
            });
        },
        CrearGridCostoDaniosPropiedadCostoAlquiler: function () {
            var columns = new Array();
            base.Control.UltimoRegistroGridCostoDaniosPropiedadCostoAlquiler++;

            columns.push({
                data: 'Equipo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridEquipo,
                width: "30%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoDaniosPropiedadCostoAlquilerEquipo_' + base.Control.UltimoRegistroGridCostoDaniosPropiedadCostoAlquiler + '"  type="text"  name="CostoDaniosPropiedadCostoAlquilerequipo" value="' + full.Equipo + '" maxlength="100"  style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: 'Cantidad',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridCantidad,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoDaniosPropiedadCostoAlquilerCantidad_" + base.Control.UltimoRegistroGridCostoDaniosPropiedadCostoAlquiler +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoDaniosPropiedadCostoAlquiler + "'" + "' class='ClassCostoDaniosPropiedadCostoAlquilerCantidad' type='text' mask='integer' name='ClassCostoDaniosPropiedadCostoAlquilerCantidad' " +
                        " value='" + full.Cantidad + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'Tiempo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridTiempo,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoDaniosPropiedadCostoAlquilerTiempo_" + base.Control.UltimoRegistroGridCostoDaniosPropiedadCostoAlquiler +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoDaniosPropiedadCostoAlquiler + "'" + "' class='ClassCostoDaniosPropiedadCostoAlquilerTiempo' type='text' mask='integer' name='ClassCostoDaniosPropiedadCostoAlquilerTiempo' " +
                        " value='" + full.Tiempo + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'PrecioUnitario',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridPrecioUnitario,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoDaniosPropiedadCostoAlquilerPrecioUnitario_" + base.Control.UltimoRegistroGridCostoDaniosPropiedadCostoAlquiler +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoDaniosPropiedadCostoAlquiler + "'" + "' class='ClassCostoDaniosPropiedadCostoAlquilerPrecioUnitario' type='text' mask='decimal' name='ClassCostoDaniosPropiedadCostoAlquilerPrecioUnitario' " +
                        " value='" + full.PrecioUnitario + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'Costo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridCosto,
                width: "10%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoDaniosPropiedadCostoAlquilerCostoUSS_' + base.Control.UltimoRegistroGridCostoDaniosPropiedadCostoAlquiler + '"  type="text"  class="ClassCostoDaniosPropiedadCostoAlquilerCostoUSS" name="ClassCostoDaniosPropiedadCostoAlquilerCostoUSS" disabled mask="decimal" value="' + (full.Costo != null ? full.Costo : 0.00) + '"   style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: "",
                title: "Oper.",
                "class": "controls",
                width: "3%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                    validateRender: base.Event.BtnGridDeleteValidate,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEliminarCostoDaniosPropiedadCostoAlquilerClick
                    }
                }]
            });
            base.Control.GrdResultadoTabCostoDaniosPropiedadCostoAlquiler = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoTabCostoDaniosPropiedadCostoAlquiler',
                columns: columns,
                hasSelectionRows: false,
                hasPaging: false,
                hasPagingServer: false,
                scrollX: '',
                proxy: {

                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarCostoDaniosPropiedadCostoAlquiler,
                    source: 'Result'
                },
                events: [{
                    type: 'keyup',
                    selector: '.ClassCostoDaniosPropiedadCostoAlquilerCantidad',
                    callBack: base.Event.CalcularCostoDaniosPropiedadCostoAlquilerCostoUSS
                },
                    {
                        type: 'keyup',
                        selector: '.ClassCostoDaniosPropiedadCostoAlquilerTiempo',
                        callBack: base.Event.CalcularCostoDaniosPropiedadCostoAlquilerCostoUSS
                    },
                    {
                        type: 'keyup',
                        selector: '.ClassCostoDaniosPropiedadCostoAlquilerPrecioUnitario',
                        callBack: base.Event.CalcularCostoDaniosPropiedadCostoAlquilerCostoUSS
                    },
                ],
                returnCallbackComplete: function (instancia, records) {

                    Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
                    var acumCosto = 0.00;
                    for (var i = 0; i < records.length; i++) {
                        if (records[i].Costo != null && records[i].Costo != '')
                            acumCosto += parseFloat(records[i].Costo);
                    }
                    if (acumCosto > 0) {
                        base.Control.TxtCostoDaniosPropiedadCostoAlquilerCosto().val(acumCosto);
                    }
                }
            });
        },

        //Tab de Costos por Pérdida de Proceso
        CrearGridCostoPerdidaProcesoCostoProducto: function () {
            var columns = new Array();
            base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoProducto++;

            columns.push({
                data: 'Producto',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridProducto,
                width: "40%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoPerdidaProcesoCostoProductoProducto_' + base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoProducto + '"  type="text"  name="CostoPerdidaProcesoCostoProductoproducto" value="' + full.Producto + '" maxlength="100"  style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: 'Cantidad',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridCantidad,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoPerdidaProcesoCostoProductoCantidad_" + base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoProducto +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoProducto + "'" + "' class='ClassCostoPerdidaProcesoCostoProductoCantidad' type='text' mask='integer' name='ClassCostoPerdidaProcesoCostoProductoCantidad' " +
                        " value='" + full.Cantidad + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });

            columns.push({
                data: 'PrecioUnitario',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridPrecioUnitario,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoPerdidaProcesoCostoProductoPrecioUnitario_" + base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoProducto +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoProducto + "'" + "' class='ClassCostoPerdidaProcesoCostoProductoPrecioUnitario' type='text' mask='decimal' name='ClassCostoPerdidaProcesoCostoProductoPrecioUnitario' " +
                        " value='" + full.PrecioUnitario + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'Costo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridCosto,
                width: "10%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoPerdidaProcesoCostoProductoCostoUSS_' + base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoProducto + '"  type="text"  class="ClassCostoPerdidaProcesoCostoProductoCostoUSS" name="ClassCostoPerdidaProcesoCostoProductoCostoUSS" disabled mask="decimal" value="' + (full.Costo != null ? full.Costo : 0.00) + '"   style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: "",
                title: "Oper.",
                "class": "controls",
                width: "3%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                    validateRender: base.Event.BtnGridDeleteValidate,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEliminarCostoPerdidaProcesoCostoProductoClick
                    }
                }]
            });
            base.Control.GrdResultadoTabCostoPerdidaProcesoCostoProducto = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoTabCostoPerdidaProcesoCostoProducto',
                columns: columns,
                hasSelectionRows: false,
                hasPaging: false,
                hasPagingServer: false,
                scrollX: '',
                proxy: {

                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarCostoPerdidaProcesoCostoProducto,
                    source: 'Result'
                },
                events: [{
                    type: 'keyup',
                    selector: '.ClassCostoPerdidaProcesoCostoProductoCantidad',
                    callBack: base.Event.CalcularCostoPerdidaProcesoCostoProductoCostoUSS
                },
                    {
                        type: 'keyup',
                        selector: '.ClassCostoPerdidaProcesoCostoProductoPrecioUnitario',
                        callBack: base.Event.CalcularCostoPerdidaProcesoCostoProductoCostoUSS
                    },
                ],
                returnCallbackComplete: function (instancia, records) {

                    Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
                    var acumCosto = 0.00;
                    for (var i = 0; i < records.length; i++) {
                        if (records[i].Costo != null && records[i].Costo != '')
                            acumCosto += parseFloat(records[i].Costo);
                    }
                    if (acumCosto > 0) {
                        base.Control.TxtCostoPerdidaProcesoCostoProductoCosto().val(acumCosto);
                    }
                }
            });
        },
        CrearGridCostoPerdidaProcesoCostoServicio: function () {
            var columns = new Array();
            base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoServicio++;

            columns.push({
                data: 'Servicio',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridServicio,
                width: "30%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoPerdidaProcesoCostoServicioServicio_' + base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoServicio + '"  type="text"  name="CostoPerdidaProcesoCostoServicioservicio" value="' + full.Servicio + '" maxlength="100"  style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: 'Cantidad',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridCantidad,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoPerdidaProcesoCostoServicioCantidad_" + base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoServicio +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoServicio + "'" + "' class='ClassCostoPerdidaProcesoCostoServicioCantidad' type='text' mask='integer' name='ClassCostoPerdidaProcesoCostoServicioCantidad' " +
                        " value='" + full.Cantidad + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'Tiempo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridTiempo,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoPerdidaProcesoCostoServicioTiempo_" + base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoServicio +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoServicio + "'" + "' class='ClassCostoPerdidaProcesoCostoServicioTiempo' type='text' mask='integer' name='ClassCostoPerdidaProcesoCostoServicioTiempo' " +
                        " value='" + full.Tiempo + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'PrecioUnitario',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridPrecioUnitario,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoPerdidaProcesoCostoServicioPrecioUnitario_" + base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoServicio +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoServicio + "'" + "' class='ClassCostoPerdidaProcesoCostoServicioPrecioUnitario' type='text' mask='decimal' name='ClassCostoPerdidaProcesoCostoServicioPrecioUnitario' " +
                        " value='" + full.PrecioUnitario + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'Costo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridCosto,
                width: "10%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoPerdidaProcesoCostoServicioCostoUSS_' + base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoServicio + '"  type="text"  class="ClassCostoPerdidaProcesoCostoServicioCostoUSS" name="ClassCostoPerdidaProcesoCostoServicioCostoUSS" disabled mask="decimal" value="' + (full.Costo != null ? full.Costo : 0.00) + '"   style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: "",
                title: "Oper.",
                "class": "controls",
                width: "3%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                    validateRender: base.Event.BtnGridDeleteValidate,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEliminarCostoPerdidaProcesoCostoServicioClick
                    }
                }]
            });
            base.Control.GrdResultadoTabCostoPerdidaProcesoCostoServicio = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoTabCostoPerdidaProcesoCostoServicio',
                columns: columns,
                hasSelectionRows: false,
                hasPaging: false,
                hasPagingServer: false,
                scrollX: '',
                proxy: {

                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarCostoPerdidaProcesoCostoServicio,
                    source: 'Result'
                },
                events: [{
                    type: 'keyup',
                    selector: '.ClassCostoPerdidaProcesoCostoServicioCantidad',
                    callBack: base.Event.CalcularCostoPerdidaProcesoCostoServicioCostoUSS
                },
                    {
                        type: 'keyup',
                        selector: '.ClassCostoPerdidaProcesoCostoServicioTiempo',
                        callBack: base.Event.CalcularCostoPerdidaProcesoCostoServicioCostoUSS
                    },
                    {
                        type: 'keyup',
                        selector: '.ClassCostoPerdidaProcesoCostoServicioPrecioUnitario',
                        callBack: base.Event.CalcularCostoPerdidaProcesoCostoServicioCostoUSS
                    },
                ],
                returnCallbackComplete: function (instancia, records) {

                    Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
                    var acumCosto = 0.00;
                    for (var i = 0; i < records.length; i++) {
                        if (records[i].Costo != null && records[i].Costo != '')
                            acumCosto += parseFloat(records[i].Costo);
                    }
                    if (acumCosto > 0) {
                        base.Control.TxtCostoPerdidaProcesoCostoServicioCosto().val(acumCosto);
                    }
                }
            });
        },
        CrearGridCostoPerdidaProcesoCostoOcasionadoEquipo: function () {
            var columns = new Array();
            base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoOcasionadoEquipo++;

            columns.push({
                data: 'Equipo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridEquipo,
                width: "30%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoPerdidaProcesoCostoOcasionadoEquipoEquipo_' + base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoOcasionadoEquipo + '"  type="text"  name="CostoPerdidaProcesoCostoOcasionadoEquipoequipo" value="' + full.Equipo + '" maxlength="100"  style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: 'Cantidad',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridCantidad,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoPerdidaProcesoCostoOcasionadoEquipoCantidad_" + base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoOcasionadoEquipo +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoOcasionadoEquipo + "'" + "' class='ClassCostoPerdidaProcesoCostoOcasionadoEquipoCantidad' type='text' mask='integer' name='ClassCostoPerdidaProcesoCostoOcasionadoEquipoCantidad' " +
                        " value='" + full.Cantidad + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'Tiempo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridTiempo,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoPerdidaProcesoCostoOcasionadoEquipoTiempo_" + base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoOcasionadoEquipo +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoOcasionadoEquipo + "'" + "' class='ClassCostoPerdidaProcesoCostoOcasionadoEquipoTiempo' type='text' mask='integer' name='ClassCostoPerdidaProcesoCostoOcasionadoEquipoTiempo' " +
                        " value='" + full.Tiempo + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'PrecioUnitario',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridPrecioUnitario,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoPerdidaProcesoCostoOcasionadoEquipoPrecioUnitario_" + base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoOcasionadoEquipo +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoOcasionadoEquipo + "'" + "' class='ClassCostoPerdidaProcesoCostoOcasionadoEquipoPrecioUnitario' type='text' mask='decimal' name='ClassCostoPerdidaProcesoCostoOcasionadoEquipoPrecioUnitario' " +
                        " value='" + full.PrecioUnitario + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'Costo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridCosto,
                width: "10%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoPerdidaProcesoCostoOcasionadoEquipoCostoUSS_' + base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoOcasionadoEquipo + '"  type="text"  class="ClassCostoPerdidaProcesoCostoOcasionadoEquipoCostoUSS" name="ClassCostoPerdidaProcesoCostoOcasionadoEquipoCostoUSS" disabled mask="decimal" value="' + (full.Costo != null ? full.Costo : 0.00) + '"   style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: "",
                title: "Oper.",
                "class": "controls",
                width: "3%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                    validateRender: base.Event.BtnGridDeleteValidate,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEliminarCostoPerdidaProcesoCostoOcasionadoEquipoClick
                    }
                }]
            });
            base.Control.GrdResultadoTabCostoPerdidaProcesoCostoOcasionadoEquipo = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoTabCostoPerdidaProcesoCostoOcasionadoEquipo',
                columns: columns,
                hasSelectionRows: false,
                hasPaging: false,
                hasPagingServer: false,
                scrollX: '',
                proxy: {

                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarCostoPerdidaProcesoCostoOcasionadoEquipo,
                    source: 'Result'
                },
                events: [{
                    type: 'keyup',
                    selector: '.ClassCostoPerdidaProcesoCostoOcasionadoEquipoCantidad',
                    callBack: base.Event.CalcularCostoPerdidaProcesoCostoOcasionadoEquipoCostoUSS
                },
                    {
                        type: 'keyup',
                        selector: '.ClassCostoPerdidaProcesoCostoOcasionadoEquipoTiempo',
                        callBack: base.Event.CalcularCostoPerdidaProcesoCostoOcasionadoEquipoCostoUSS
                    },
                    {
                        type: 'keyup',
                        selector: '.ClassCostoPerdidaProcesoCostoOcasionadoEquipoPrecioUnitario',
                        callBack: base.Event.CalcularCostoPerdidaProcesoCostoOcasionadoEquipoCostoUSS
                    },
                ],
                returnCallbackComplete: function (instancia, records) {

                    Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
                    var acumCosto = 0.00;
                    for (var i = 0; i < records.length; i++) {
                        if (records[i].Costo != null && records[i].Costo != '')
                            acumCosto += parseFloat(records[i].Costo);
                    }
                    if (acumCosto > 0) {
                        base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoCosto().val(acumCosto);
                    }
                }
            });
        },
        CrearGridCostoPerdidaProcesoCostoOcasionadoPersonal: function () {
            var columns = new Array();
            base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoOcasionadoPersonal++;
            columns.push({
                data: 'ApellidosNombres',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridNombreApellido,
                width: "30%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoPerdidaProcesoCostoOcasionadoPersonalApellidosNombres_' + base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoOcasionadoPersonal + '"  type="text"  name="CostoPerdidaProcesoCostoOcasionadoPersonalapellidosnombres" value="' + full.ApellidosNombres + '" maxlength="100"  style="width: 100%;text-align:center;">';
                },
            });
            columns.push({
                data: 'DocIdentidad',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridDocIdentidad,
                width: "15%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoPerdidaProcesoCostoOcasionadoPersonalDocIdentidad_' + base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoOcasionadoPersonal + '"  type="text" mask="integer"  name="CostoPerdidaProcesoCostoOcasionadoPersonaldocidentidad" value="' + full.DocIdentidad + '" maxlength="12"  style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: 'Empresa',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridEmpresa,
                width: "15%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoPerdidaProcesoCostoOcasionadoPersonalEmpresa_' + base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoOcasionadoPersonal + '"  type="text"  name="CostoPerdidaProcesoCostoOcasionadoPersonalempresa" value="' + full.Empresa + '" maxlength="100"  style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: 'Cantidad',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridCantidad,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoPerdidaProcesoCostoOcasionadoPersonalCantidad_" + base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoOcasionadoPersonal +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoOcasionadoPersonal + "'" + "' class='ClassCostoPerdidaProcesoCostoOcasionadoPersonalCantidad' type='text' mask='integer' name='ClassCostoPerdidaProcesoCostoOcasionadoPersonalCantidad' " +
                        " value='" + full.Cantidad + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'Tiempo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridTiempo,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoPerdidaProcesoCostoOcasionadoPersonalTiempo_" + base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoOcasionadoPersonal +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoOcasionadoPersonal + "'" + "' class='ClassCostoPerdidaProcesoCostoOcasionadoPersonalTiempo' type='text' mask='integer' name='ClassCostoPerdidaProcesoCostoOcasionadoPersonalTiempo' " +
                        " value='" + full.Tiempo + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'PrecioUnitario',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridPrecioUnitario,
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input  id=txtCostoPerdidaProcesoCostoOcasionadoPersonalPrecioUnitario_" + base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoOcasionadoPersonal +
                        " data-nrofila='" + base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoOcasionadoPersonal + "'" + "' class='ClassCostoPerdidaProcesoCostoOcasionadoPersonalPrecioUnitario' type='text' mask='decimal' name='ClassCostoPerdidaProcesoCostoOcasionadoPersonalPrecioUnitario' " +
                        " value='" + full.PrecioUnitario + "' style='width: 100%;text-align:center' >";
                    return cadena;
                }
            });
            columns.push({
                data: 'Costo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.InvestigacionCosto.Resource.GridCosto,
                width: "10%",
                mRender: function (data, type, full) {
                    return '<input id="txtCostoPerdidaProcesoCostoOcasionadoPersonalCostoUSS_' + base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoOcasionadoPersonal + '"  type="text"  class="ClassCostoPerdidaProcesoCostoOcasionadoPersonalCostoUSS" name="ClassCostoPerdidaProcesoCostoOcasionadoPersonalCostoUSS" disabled mask="decimal" value="' + (full.Costo != null ? full.Costo : 0.00) + '"   style="width: 100%;text-align:center;">';
                }
            });
            columns.push({
                data: "",
                title: "Oper.",
                "class": "controls",
                width: "3%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                    validateRender: base.Event.BtnGridDeleteValidate,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEliminarCostoPerdidaProcesoCostoOcasionadoPersonalClick
                    }
                }]
            });
            base.Control.GrdResultadoTabCostoPerdidaProcesoCostoOcasionadoPersonal = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoTabCostoPerdidaProcesoCostoOcasionadoPersonal',
                columns: columns,
                hasSelectionRows: false,
                hasPaging: false,
                hasPagingServer: false,
                scrollX: '',
                proxy: {

                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarCostoPerdidaProcesoCostoOcasionadoPersonal,
                    source: 'Result'
                },
                events: [{
                    type: 'keyup',
                    selector: '.ClassCostoPerdidaProcesoCostoOcasionadoPersonalCantidad',
                    callBack: base.Event.CalcularCostoPerdidaProcesoCostoOcasionadoPersonalCostoUSS
                },
                    {
                        type: 'keyup',
                        selector: '.ClassCostoPerdidaProcesoCostoOcasionadoPersonalTiempo',
                        callBack: base.Event.CalcularCostoPerdidaProcesoCostoOcasionadoPersonalCostoUSS
                    },
                    {
                        type: 'keyup',
                        selector: '.ClassCostoPerdidaProcesoCostoOcasionadoPersonalPrecioUnitario',
                        callBack: base.Event.CalcularCostoPerdidaProcesoCostoOcasionadoPersonalCostoUSS
                    },
                ],
                returnCallbackComplete: function (instancia, records) {

                    Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
                    var acumCosto = 0.00;
                    for (var i = 0; i < records.length; i++) {
                        if (records[i].Costo != null && records[i].Costo != '')
                            acumCosto += parseFloat(records[i].Costo);
                    }
                    if (acumCosto > 0) {
                        base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalCosto().val(acumCosto);
                    }
                }
            });
        },

        CrearGridTrabajadorInvolucrado: function () {
            var columns = new Array();
            columns.push({
                data: 'NombreColaboradorInvolucrado',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridApelldioNombreColaborador,
                width: "30%"
            });
            columns.push({
                data: 'DescripcionTipoDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridTipoDocumento,
                width: "10%"
            });
            columns.push({
                data: 'NumeroDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridNumeroDocumento,
                width: "20%"
            });
            columns.push({
                data: 'NombreEmpresa',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridEmpresa,
                width: "15%"
            });
            columns.push({
                data: 'NombrePuestoTrabajo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridPuestoTrabajo,
                width: "30%"
            });

            columns.push({
                data: 'DescripcionIndicadorSufrioLesion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridSufrioLesion,
                width: "15%"
            });

            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "5%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Edit,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEditTrabajadorInvolucradoTab2Click
                    }
                },
                    {
                        type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                        validateRender: base.Event.BtnGridDeleteValidate,
                        event: {
                            on: 'click',
                            callBack: base.Event.BtnGridDeleteInvolucradoClick
                        }
                    }
                ]
            });

            base.Control.GrdResultadoTrabajadorInvolucrado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoTrabajadorInvolucrado',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{
                    sWidth: '60px',
                    aTargets: [1]
                }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacionInvolucrado,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                    var cont = 0;
                    for (var i = 0; i < records.length; i++) {
                        if (records[i].IndicadorSufrioLesion == '01') {
                            cont++;
                        }
                    }
                    base.Control.TxtTrabajadorInvolucradoTotal().val(records.length);
                    base.Control.TxtTrabajadorInvolucradoTotalLesion().val(cont);
                }
            });
        },
        //Grid Categoria Lesion
        CrearGridCategoriaLesion: function () {
            var columns = new Array();
            columns.push({
                data: 'NombreColaboradorInvolucrado',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridApelldioNombreColaborador,
                width: "30%"
            });
            columns.push({
                data: 'NumeroDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridDocumentoIdentidad,
                width: "5%"
            });
            columns.push({
                data: 'NombreEmpresa',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridEmpresa,
                width: "20%"
            });
            columns.push({
                data: 'NombrePuestoTrabajo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridPuestoTrabajo,
                width: "15%"
            });
            columns.push({
                data: 'DescripcionIndicadorSufrioLesion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridSufrioLesion,
                width: "15%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "5%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Edit,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEditarCategoriaLesionClick
                    }
                },
                    {
                        type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                        validateRender: base.Event.BtnGridDeleteValidate,
                        event: {
                            on: 'click',
                            callBack: base.Event.BtnGridDeleteCategoriaLesionClick
                        }
                    }
                ]
            });
            base.Control.GrdCategoriaLesion = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdCategoriaLesion',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{
                    sWidth: '60px',
                    aTargets: [1]
                }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacionCategoriaLesion,
                    source: 'Result'
                }
            });
        },
        CrearGridCategoriaImpactoAmbiente: function () {
            var columns = new Array();
            columns.push({
                data: 'DescripcionCuerpoReceptorAfectado',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridCuerpoReceptor,
                width: "15%"
            });
            columns.push({
                data: 'ListaTipoImpactoAmbiental',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridDescripcionImpacto,
                width: "25%",
                mRender: function (data, type, full) {
                    var cadena = '';
                    if (full.ListaTipoImpactoAmbiental != null && full.ListaTipoImpactoAmbiental.length > 0) {
                        var arrayTipoImpactoAmbiental = full.ListaTipoImpactoAmbiental.split(',');
                        for (var i = 0; i < arrayTipoImpactoAmbiental.length; i++) {
                            for (var j = 0; j < base.Control.FormularioInvestigacionModel.ListaTipoImpactoMedioAmbiental.length; j++) {
                                if ($.trim(arrayTipoImpactoAmbiental[i]) == base.Control.FormularioInvestigacionModel.ListaTipoImpactoMedioAmbiental[j].Value) {
                                    cadena += base.Control.FormularioInvestigacionModel.ListaTipoImpactoMedioAmbiental[j].Text + ', ';
                                    break;
                                }
                            }
                        }
                    }
                    return cadena;
                }
            });
            columns.push({
                data: 'CantidadResiduosPeligrososGenerados',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridCantidadResiduosPeligrosos,
                width: "15%"
            });
            columns.push({
                data: 'CantidadResiduosPeligrososNoGenerados',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridCantidadResiduosNoGenerados,
                width: "25%"
            });
            columns.push({
                data: 'ListaAgentesContaminantes',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridAgentesContaminantes,
                width: "15%",
                mRender: function (data, type, full) {
                    var cadena = '';
                    if (full.ListaAgentesContaminantes != null && full.ListaAgentesContaminantes.length > 0) {
                        var arrayAgentesContaminante = full.ListaAgentesContaminantes.split(',');
                        for (var i = 0; i < arrayAgentesContaminante.length; i++) {
                            for (var j = 0; j < base.Control.FormularioInvestigacionModel.ListaAgenteContaminante.length; j++) {
                                if ($.trim(arrayAgentesContaminante[i]) == base.Control.FormularioInvestigacionModel.ListaAgenteContaminante[j].Value) {
                                    cadena += base.Control.FormularioInvestigacionModel.ListaAgenteContaminante[j].Text + ', ';
                                    break;
                                }
                            }
                        }
                    }
                    return cadena;
                }
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Edit,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEditarCategoriaImpactoAmbienteClick
                    }
                },
                    {
                        type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                        validateRender: base.Event.BtnGridDeleteValidate,
                        event: {
                            on: 'click',
                            callBack: base.Event.BtnGridDeleteCategoriaImpactoAmbienteClick
                        }
                    }
                ]
            });
            base.Control.GrdCategoriaImpactoAmbiente = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdCategoriaImpactoAmbiente',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{
                    sWidth: '60px',
                    aTargets: [1]
                }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacionImpactoAmbiental,
                    source: 'Result'
                }
            });
        },
        //Grid Categoria Impacto a la comunidad
        CrearGridCategoriaImpacto: function () {
            var columns = new Array();
            columns.push({
                data: 'DescripcionComunidadInvolucrada',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridComunidadInvolucrada,
                width: "30%",
                renderer: function () {
                    return '';
                }
            });
            columns.push({
                data: 'ListaRepresentantesAfectados',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridRepresentanteComunidad,
                width: "40%",
                renderer: function () {
                    return '';
                }
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "5%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Edit,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEditarCategoriaImpactoClick
                    }
                },
                    {
                        type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                        validateRender: base.Event.BtnGridDeleteValidate,
                        event: {
                            on: 'click',
                            callBack: base.Event.BtnGridDeleteCategoriaImpactoClick
                        }
                    }
                ]
            });
            base.Control.GrdCategoriaImpacto = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdCategoriaImpacto',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{
                    sWidth: '60px',
                    aTargets: [1]
                }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarComunidadInvolucrada,
                    source: 'Result'
                }
            });
        },
        //Grid Categoria Danio Propiedad
        CrearGridCategoriaDanio: function () {
            var columns = new Array();
            columns.push({
                data: 'NombrePropiedad',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridPropiedad,
                width: "30%",
                renderer: function () {
                    return '';
                }
            });
            columns.push({
                data: 'TipoPropiedad',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridTipoPropiedad,
                width: "20%",
                renderer: function () {
                    return '';
                }
            });
            columns.push({
                data: 'NombrePropietario',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridPropietario,
                width: "20%",
                renderer: function () {
                    return '';
                }
            });
            columns.push({
                data: 'DescripcionDanio',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridDescripcionDanio,
                width: "20%",
                renderer: function () {
                    return '';
                }
            });
            columns.push({
                data: 'NombreClasificacionDanio',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridTipoPropiedad,
                width: "20%",
                renderer: function () {
                    return '';
                }
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Edit,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEditarCategoriaDanioClick
                    }
                },
                    {
                        type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                        validateRender: base.Event.BtnGridDeleteValidate,
                        event: {
                            on: 'click',
                            callBack: base.Event.BtnGridDeleteCategoriaDanioClick
                        }
                    }
                ]
            });
            base.Control.GrdCategoriaDanio = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdCategoriaDanio',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{
                    sWidth: '60px',
                    aTargets: [1]
                }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.ConsultarInvestigacionPropiedad,
                    source: 'Result'
                }
            });
        },
        CrearGridCategoriaPerdida: function () {
            var columns = new Array();
            columns.push({
                data: 'ProcesoImpactado',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridProcesoImpacto,
                width: "30%"
            });
            columns.push({
                data: 'DescripcionPerdidaProceso',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridDescripcionPerdidaProceso,
                width: "60%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Edit,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEditarCategoriaPerdidaClick
                    }
                },
                    {
                        type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                        validateRender: base.Event.BtnGridDeleteValidate,
                        event: {
                            on: 'click',
                            callBack: base.Event.BtnGridDeleteCategoriaPerdidaClick
                        }
                    }
                ]
            });
            base.Control.GrdCategoriaPerdida = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdCategoriaPerdida',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{
                    sWidth: '60px',
                    aTargets: [1]
                }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacionPerdidaProceso,
                    source: 'Result'
                }
            });
        },
        //crear Grilla Supervisor
        CrearGridSupervisor: function () {
            var columns = new Array();
            columns.push({
                data: 'NombreCompletoColaborador',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridSupervisorNombre,
                width: "35%"
            });
            columns.push({
                data: 'DescripcionTipoDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridTipoDocumento,
                width: "10%"
            });
            columns.push({
                data: 'NumeroDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridNumeroDocumento,
                width: "10%"
            });
            columns.push({
                data: 'NombreEmpresa',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridEmpresa,
                width: "20%"
            });
            columns.push({
                data: 'NombrePuestoTrabajo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridPuestoTrabajo,
                width: "20%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "5%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Edit,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEditSupervisorClick
                    }
                },
                    {
                        type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                        validateRender: base.Event.BtnGridDeleteValidate,
                        event: {
                            on: 'click',
                            callBack: base.Event.BtnGridDeleteSupervisorClick
                        }
                    }
                ]
            });
            base.Control.GrdResultadoSupervisor = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoSupervisor',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{
                    sWidth: '60px',
                    aTargets: [1]
                }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacionSupervisor,
                    source: 'Result'
                }
            });
        },
        //crear Grilla Testigos
        CrearGridTestigo: function () {
            var columns = new Array();
            columns.push({
                data: 'NombreCompletoColaborador',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridSupervisorNombre,
                width: "20%"
            });
            columns.push({
                data: 'DescripcionTipoDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridTipoDocumento,
                width: "10%"
            });
            columns.push({
                data: 'NumeroDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridNumeroDocumento,
                width: "20%"
            });
            columns.push({
                data: 'NombreEmpresa',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridEmpresa,
                width: "10%"
            });
            columns.push({
                data: 'NombrePuestoTrabajo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridPuestoTrabajo,
                width: "20%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "5%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Edit,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEditTestigoClick
                    }
                },
                    {
                        type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                        validateRender: base.Event.BtnGridDeleteValidate,
                        event: {
                            on: 'click',
                            callBack: base.Event.BtnGridDeleteTestigoClick
                        }
                    }
                ]
            });

            base.Control.GrdResultadoTestigo = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoTestigo',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{
                    sWidth: '60px',
                    aTargets: [1]
                }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacionTestigo,
                    source: 'Result'
                }
            });
        },
        //crear Grilla Testigos Externo
        CrearGridTestigoExterno: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridItem,
                width: "10%"
            });
            columns.push({
                data: 'NombreCompletoColaborador',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridSupervisorNombre,
                width: "20%"
            });
            columns.push({
                data: 'DescripcionTipoDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridTipoDocumento,
                width: "10%"
            });
            columns.push({
                data: 'NumeroDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridNumeroDocumento,
                width: "20%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "5%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Edit,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEditTestigoExternoClick
                    }
                },
                    {
                        type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                        validateRender: base.Event.BtnGridDeleteValidate,
                        event: {
                            on: 'click',
                            callBack: base.Event.BtnGridDeleteTestigoClick
                        }
                    }
                ]
            });

            base.Control.GrdResultadoTestigoExterno = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoTestigoExterno',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{
                    sWidth: '60px',
                    aTargets: [1]
                }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacionTestigo,
                    source: 'Result'
                }
            });
        },
        //crear Grilla Clasificacion Principal
        CrearGridClasificacionPrincipal: function () {
            var columns = new Array();
            columns.push({
                data: '',
                title: '',
                mRender: function (data, type, full) {
                    var cadena = "";
                    if (full.CodigoInvestigacionCategoria == null)
                        cadena = "<input class='checkRecordCategoria' type='checkbox' disabled> ";
                    else
                        cadena = "<input class='checkRecordCategoria' type='checkbox' checked disabled> ";
                    return cadena;
                },
                width: "7%"
            });
            columns.push({
                data: base.Control.FormularioInvestigacionModel.CodigoIdioma == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoIdiomaPorDefecto ? 'NombreCategoriaIngles' : 'NombreCategoriaEspaniol',
                'class': 'left',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridCategoria,
                width: "20%",
                mRender: function (data, type, full) {
                    if (full.DescripcionCategoriaOtros != null)
                        return data + ': ' + full.DescripcionCategoriaOtros;
                    else
                        return data;
                }
            });

            columns.push({
                data: 'DescripcionConsecuenciaActual',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridActual,
                width: "10%"
            });

            columns.push({
                data: 'DescripcionConsecuenciaPotencial',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridPotencial,
                width: "20%"
            });

            base.Control.GrdResultadoClasificacionPrincipal = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoClasificacionPrincipal',
                columns: columns,
                hasPaging: false,
                hasPagingServer: false,
                hasSelectionRows: false,
                columnDefs: [{
                    sWidth: '60px',
                    aTargets: [1]
                }],
                scrollX: '',
                returnCallbackComplete: function (instancia, records) {
                    var flagCategoriaCuasi = false;
                    var flagCategoriaOtros = false;
                    var flagCategoriaLesionActiva = false;
                    var mayorLesionTrab = 0;
                    var descripcionCategoriaPrin = '';
                    var indiceLesionTrab = '';
                    var mayorActual = 0;
                    var codigoConsecuenciaIncidente = null;
                    var mayorPotencial = 0;
                    var codigoPotencialIncidente = null;
                    var indiceActual = '';
                    var codigoHpi = null;
                    var indicePotencial = '';
                    var codigoCategoriaIncidente = null;
                    base.Control.TxtHpiClasificacionPrincipal().val('');
                    base.Control.TxtClasificacionPrincipal().val('');

                    for (var i = 0; i < records.length; i++) {
                        if (records[i].OrdenCategoriaDetalleActual != null && records[i].OrdenCategoriaDetalleActual > mayorActual) {
                            mayorActual = records[i].OrdenCategoriaDetalleActual;
                            indiceActual = i;
                        }
                        if (records[i].OrdenCategoriaDetallePotencial != null && records[i].OrdenCategoriaDetallePotencial > mayorPotencial) {
                            mayorPotencial = records[i].OrdenCategoriaDetallePotencial;
                            indicePotencial = i;
                        }
                    }

                    for (var i = 0; i < records.length; i++) {
                        //Primera condicion Categoria Principal                        
                        if (records[i].CodigoInvestigacionCategoria != null &&
                            (records[i].CodigoConsecuenciaActual != null || records[i].CodigoConsecuenciaPotencial != null) &&
                            records[i].CodigoCategoriaAbreviado == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CategoriaLesion) {
                            flagCategoriaLesionActiva = true;
                            break;
                        }
                        //Si solo marco Cuasi
                        if (records[i].CodigoInvestigacionCategoria != null &&
                            (records[i].CodigoConsecuenciaActual != null || records[i].CodigoConsecuenciaPotencial != null) &&
                            records[i].CodigoCategoriaAbreviado == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CategoriaCuasiIncidente) {
                            flagCategoriaCuasi = true;
                        }
                        //Si solo marco Otros
                        if (records[i].CodigoInvestigacionCategoria != null &&
                            (records[i].CodigoConsecuenciaActual != null || records[i].CodigoConsecuenciaPotencial != null) &&
                            records[i].CodigoCategoriaAbreviado == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CategoriaOtros) {
                            flagCategoriaOtros = true;
                        }
                    }

                    if (flagCategoriaLesionActiva) {
                        //lo dejamos para evaluarlo en el ajax
                    } else {
                        var resultadoIndex = base.Function.ObtenerCategoriaDesempate(records);
                        if (resultadoIndex != '' && resultadoIndex != undefined) {
                            descripcionCategoriaPrin = (base.Control.FormularioInvestigacionModel == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoIdiomaPorDefecto) ? records[resultadoIndex].NombreCategoriaIngles : records[resultadoIndex].NombreCategoriaEspaniol;
                            codigoCategoriaIncidente = records[resultadoIndex].CodigoCategoriaAbreviado;
                        } else {
                            if (flagCategoriaCuasi && flagCategoriaOtros == false) {
                                descripcionCategoriaPrin = base.Function.ObtenerValorArrayCategoria(records, Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CategoriaCuasiIncidente);
                                codigoCategoriaIncidente = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CategoriaCuasiIncidente;
                            } else if (flagCategoriaOtros && flagCategoriaCuasi == false) {
                                descripcionCategoriaPrin = base.Function.ObtenerValorArrayCategoria(records, Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CategoriaOtros);
                                codigoCategoriaIncidente = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CategoriaOtros;
                            }
                        }
                    }

                    if (indiceActual != null && indiceActual !== '' && indiceActual != undefined) {
                        base.Control.TxtActualConsecuenciaClasificacionPrincipal().val(records[indiceActual].DescripcionConsecuenciaActual);
                        codigoConsecuenciaIncidente = records[indiceActual].CodigoConsecuenciaActual;
                    } else {
                        base.Control.TxtActualConsecuenciaClasificacionPrincipal().val('');
                    }

                    if (indicePotencial != null && indicePotencial !== '' && indicePotencial != undefined) {
                        base.Control.TxtPotencialConsecuenciaClasificacionPrincipal().val(records[indicePotencial].DescripcionConsecuenciaPotencial);
                        codigoPotencialIncidente = records[indicePotencial].CodigoConsecuenciaPotencial;
                    } else {
                        base.Control.TxtPotencialConsecuenciaClasificacionPrincipal().val('');
                    }


                    // Valor de HPI
                    for (var i = 0; i < records.length; i++) {
                        var valor = records[i].CodigoConsecuenciaActual;
                        if (valor != null && valor != undefined && valor != '') {
                            if (valor == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.Mayor ||
                                valor == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.Critico) {
                                base.Control.TxtHpiClasificacionPrincipal().val("NO");
                                codigoHpi = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.ValoresHPI_NO;
                                break;
                            }
                        }
                    }

                    if (codigoHpi == null) {
                        for (var i = 0; i < records.length; i++) {
                            var valor = records[i].CodigoConsecuenciaPotencial;
                            if (valor != null && valor != undefined && valor != '') {
                                if (valor == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.Mayor ||
                                    valor == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.Critico) {
                                    base.Control.TxtHpiClasificacionPrincipal().val("SI");
                                    codigoHpi = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.ValoresHPI_SI;
                                    break;
                                } else {
                                    base.Control.TxtHpiClasificacionPrincipal().val("NO");
                                    codigoHpi = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.ValoresHPI_NO;
                                }
                            }
                        }
                    }

                    $.post(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacionLesionInformacionGeneral, {
                        CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                        numeroPagina: 0,
                        tamanioPagina: 100000
                    }, function (resultado) {
                        if (resultado.Result.length > 0 && flagCategoriaLesionActiva) {
                            for (var i = 0; i < resultado.Result.length; i++) {
                                if (resultado.Result[i].DescripcionPesoLesionActual != null && resultado.Result[i].DescripcionPesoLesionActual > mayorLesionTrab) {
                                    descripcionCategoriaPrin = resultado.Result[i].DescripcionLesionActual;
                                    codigoCategoriaIncidente = resultado.Result[i].CodigoLesionActual;
                                }
                            }
                        }

                        base.Control.TxtClasificacionPrincipal().val(descripcionCategoriaPrin);
                        base.Ajax.AjaxActualizarInvestigacionConsecuencia.data = {
                            CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                            CodigoConsecuenciaIncidente: codigoConsecuenciaIncidente,
                            CodigoPotencialIncidente: codigoPotencialIncidente,
                            CodigoHpi: codigoHpi,
                            CodigoCategoriaIncidente: codigoCategoriaIncidente
                        };
                        base.Ajax.AjaxActualizarInvestigacionConsecuencia.submit();
                    });
                },
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.InvestigacionCategoriaClasificacionPrincipal,
                    source: 'Result'
                }
            });
        },
        ObtenerCategoriaDesempate: function (myArray) {
            var resultadoIndex = '';
            var menor = 100;
            var arrIns = [];
            var arrMen = [];
            var arrMod = [];
            var arrMay = [];
            var arrCri = [];
            for (var i = 0; i < myArray.length; i++) {
                if (myArray[i].CodigoConsecuenciaActual == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.Insignificante &&
                    (myArray[i].Orden != 1 || myArray[i].Orden != 6 || myArray[i].Orden != 7)) {
                    var obj = {
                        index: i,
                        PesoCategoria: myArray[i].PesoCategoria
                    };
                    arrIns.push(obj);
                }
                if (myArray[i].CodigoConsecuenciaActual == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.Menor &&
                    (myArray[i].Orden != 1 || myArray[i].Orden != 6 || myArray[i].Orden != 7)) {
                    var obj = {
                        index: i,
                        PesoCategoria: myArray[i].PesoCategoria
                    };
                    arrMen.push(obj);
                }
                if (myArray[i].CodigoConsecuenciaActual == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.Moderado &&
                    (myArray[i].Orden != 1 || myArray[i].Orden != 6 || myArray[i].Orden != 7)) {
                    var obj = {
                        index: i,
                        PesoCategoria: myArray[i].PesoCategoria
                    };
                    arrMod.push(obj);
                }
                if (myArray[i].CodigoConsecuenciaActual == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.Mayor &&
                    (myArray[i].Orden != 1 || myArray[i].Orden != 6 || myArray[i].Orden != 7)) {
                    var obj = {
                        index: i,
                        PesoCategoria: myArray[i].PesoCategoria
                    };
                    arrMay.push(obj);
                }
                if (myArray[i].CodigoConsecuenciaActual == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.Critico &&
                    (myArray[i].Orden != 1 || myArray[i].Orden != 6 || myArray[i].Orden != 7)) {
                    var obj = {
                        index: i,
                        PesoCategoria: myArray[i].PesoCategoria
                    };
                    arrCri.push(obj);
                }
            }

            if (arrCri.length > 0) {
                for (var j = 0; j < arrCri.length; j++) {
                    if (arrCri[j].PesoCategoria < menor) {
                        menor = arrCri[j].PesoCategoria;
                        resultadoIndex = arrCri[j].index;
                    }
                }

                return resultadoIndex;
            }
            if (arrMay.length > 0) {
                for (var j = 0; j < arrMay.length; j++) {
                    if (arrMay[j].PesoCategoria < menor) {
                        menor = arrMay[j].PesoCategoria;
                        resultadoIndex = arrMay[j].index;
                    }
                }

                return resultadoIndex;
            }
            if (arrMod.length > 0) {
                for (var j = 0; j < arrMod.length; j++) {
                    if (arrMod[j].PesoCategoria < menor) {
                        menor = arrMod[j].PesoCategoria;
                        resultadoIndex = arrMod[j].index;
                    }
                }

                return resultadoIndex;
            }
            if (arrMen.length > 0) {
                for (var j = 0; j < arrMen.length; j++) {
                    if (arrMen[j].PesoCategoria < menor) {
                        menor = arrMen[j].PesoCategoria;
                        resultadoIndex = arrMen[j].index;
                    }
                }

                return resultadoIndex;
            }
            if (arrIns.length > 0) {
                for (var j = 0; j < arrIns.length; j++) {
                    if (arrIns[j].PesoCategoria < menor) {
                        menor = arrIns[j].PesoCategoria;
                        resultadoIndex = arrIns[j].index;
                    }
                }

                return resultadoIndex;
            }
        },
        ObtenerValorArrayCategoria: function (myArray, nameKey) {
            var nombreCategoria = '';
            var index = '';
            for (var i = 0; i < myArray.length; i++) {
                if (myArray[i].CodigoCategoriaAbreviado === nameKey) {
                    index = i;
                    break;
                }
            }

            if (base.Control.FormularioInvestigacionModel == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoIdiomaPorDefecto)
                nombreCategoria = myArray[index].NombreCategoriaIngles;
            else
                nombreCategoria = myArray[index].NombreCategoriaEspaniol;

            return nombreCategoria;
        },

        //crear Grilla Secuencia de Eventos
        CrearGridSecuenciaEvento: function () {
            var columns = new Array();
            columns.push({
                data: 'Orden',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridNroOrden,
                width: "10%"
            });

            columns.push({
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridDescripcion,
                width: "20%"
            });

            columns.push({
                data: 'FechaString',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridFecha,
                width: "10%"
            });

            columns.push({
                data: 'HoraString',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridHora,
                width: "10%"
            });

            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "5%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Edit,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEditEventoClick
                    }
                },
                    {
                        type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                        validateRender: base.Event.BtnGridDeleteValidate,
                        event: {
                            on: 'click',
                            callBack: base.Event.BtnGridDeleteEventoClick
                        }
                    }
                ]
            });

            base.Control.GrdResultadoSecuenciaEvento = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoSecuenciaEvento',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{
                    sWidth: '60px',
                    aTargets: [1]
                }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacionEvento,
                    source: 'Result'
                }
            });
        },
        //Grid Investigacion Barrera
        CrearGridInformacionBarrera: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridItem,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionCondicionBarrera',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridCondicionBarrera,
                width: "20%"
            });
            columns.push({
                data: 'DescripcionTipoBarrera',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridTipoBarrera,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionUno',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridDescripcionCorta,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionDos',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridDescripcionLarga,
                width: "10%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "5%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Edit,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEditInformacionBarreraClick
                    }
                },
                    {
                        type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                        validateRender: base.Event.BtnGridDeleteValidate,
                        event: {
                            on: 'click',
                            callBack: base.Event.BtnGridDeleteInformacionBarreraClick
                        }
                    }
                ]
            });

            base.Control.GrdResultadoInformacionBarrera = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoInformacionBarrera',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{
                    sWidth: '60px',
                    aTargets: [1]
                }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacionBarrera,
                    source: 'Result'
                }
            });
        },

        CrearGridInformacionFallos: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridItem,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionCondicionBarreraPadre',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridCondicionBarrera,
                width: "20%"
            });
            columns.push({
                data: 'DescripcionTipoBarreraPadre',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridTipoBarrera,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionUnoPadre',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridDescripcionCorta,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionDosPadre',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridDescripcionLarga,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionUno',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridDescripcionFallo,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionDos',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridRecomendaciones,
                width: "10%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "5%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Edit,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEditInformacionFallosClick
                    }
                },
                    {
                        type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                        validateRender: base.Event.BtnGridDeleteValidate,
                        event: {
                            on: 'click',
                            callBack: base.Event.BtnGridDeleteInformacionFallosClick
                        }
                    }
                ]
            });

            base.Control.GrdResultadoInformacionFallos = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoInformacionFallos',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{
                    sWidth: '60px',
                    aTargets: [1]
                }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacionBarrera,
                    source: 'Result'
                }
            });
        },

        //crear Grilla Testigos
        CrearGridCausaInmediata: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridNroOrden,
                width: "5%"
            });
            columns.push({
                data: 'NombreTipoCausaInmediata',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridTipoCausaInmediata,
                width: "20%"
            });
            columns.push({
                data: 'NombreCausaInmediata',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridCausaInmediata,
                width: "20%"
            });

            columns.push({
                data: 'Comentario',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridComentario,
                width: "10%"
            });

            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "5%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Edit,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEditCausaInmediataClick
                    }
                },
                    {
                        type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                        validateRender: base.Event.BtnGridDeleteValidate,
                        event: {
                            on: 'click',
                            callBack: base.Event.BtnGridDeleteCausaInmediataClick
                        }
                    }
                ]
            });

            base.Control.GrdResultadoCausaInmediata = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoCausasInmediata',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{
                    sWidth: '60px',
                    aTargets: [1]
                }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarCausaInmediata,
                    source: 'Result'
                }
            });
        },

        CrearGridCausaRaiz: function () {
            var columns = new Array();
            columns.push({
                data: 'IdentificadorCausaRaiz',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridCodigo,
                width: "5%"
            });

            columns.push({
                data: 'NombreCategoria',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridCategoria,
                width: "15%"
            });

            columns.push({
                data: 'NombreSubCategoria',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridSubCategoria,
                width: "20%"
            });

            columns.push({
                data: 'NombreCausaRaiz',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridCausaRaiz,
                width: "20%"
            });

            columns.push({
                data: 'Comentario',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridComentario,
                width: "20%"
            });

            columns.push({
                data: 'ListaFactorCausal',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridAsociadoA,
                width: "10%"
            });

            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "5%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Edit,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEditCausaRaizClick
                    }
                },
                    {
                        type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                        validateRender: base.Event.BtnGridDeleteValidate,
                        event: {
                            on: 'click',
                            callBack: base.Event.BtnGridDeleteCausaRaizClick
                        }
                    }
                ]
            });

            base.Control.GrdResultadoCausaRaiz = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoCausasRaices',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{
                    sWidth: '60px',
                    aTargets: [1]
                }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarCausaRaiz,
                    source: 'Result'
                }
            });
        },

        CrearGridFactorCausal: function () {
            var columns = new Array();
            columns.push({
                data: 'CodigoFactorCausal',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridCodigo,
                width: "10%"
            });
            columns.push({
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridDescripcion,
                width: "30%"
            });

            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "5%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Edit,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEditFactorCausalClick
                    }
                },
                    {
                        type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                        validateRender: base.Event.BtnGridDeleteValidate,
                        event: {
                            on: 'click',
                            callBack: base.Event.BtnGridDeleteFactorCausalClick
                        }
                    }
                ]
            });

            base.Control.GrdResultadoFactorCausal = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoFactoresCausales',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{
                    sWidth: '60px',
                    aTargets: [1]
                }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarFactorCausal,
                    source: 'Result'
                }
            });
        },

        CrearGridCostoTrabajadorInvolucrado: function () {
            var columns = new Array();
            columns.push({
                data: 'NombreColaboradorInvolucrado',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridApelldioNombreColaborador,
                width: "30%"
            });
            columns.push({
                data: 'NumeroDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridDocumentoIdentidad,
                width: "5%"
            });
            columns.push({
                data: 'NombreEmpresa',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridEmpresa,
                width: "20%"
            });
            //columns.push({
            //    data: '',
            //    title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridPuestoTrabajo,
            //    width: "10%",
            //    mRender: function (data, type, full) {
            //        return '<input value="' + (full.HorasPlanificadasSubProceso != null ? full.HorasPlanificadasSubProceso : '') + '" type="text" id="txtHorasPlanificadas_' + full.NumeroFila + '" class="ClassHorasPlanificadas" name="ClassHorasPlanificadas" mask="integer" style="width:50px;text-align:center;">';
            //    }
            //});
            //columns.push({
            //    data: '',
            //    title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridPuestoTrabajo,
            //    width: "10%",
            //    mRender: function (data, type, full) {
            //        return '<input value="' + (full.PlazoEstimadoSubProceso != null ? full.PlazoEstimadoSubProceso : '') + '" type="text" id="txtPlazoEstimado_' + full.NumeroFila + '" class="ClassPlazoEstimado" name="ClassPlazoEstimado" mask="integer" style="width:50px;text-align:center;">';
            //    }
            //});

            base.Control.GrdResultadoCostoTrabajadorInvolucrado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoCostoTrabajadorInvolucrado',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{
                    sWidth: '60px',
                    aTargets: [1]
                }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarPersonaInvolucrada,
                    source: 'Result'
                }
            });
        },

        //Grid Lecciones Aprendidas
        CrearGridLeccionesAprendidas: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: "#",
                width: "3%"
            });
            columns.push({
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridDescripcion,
                width: "80%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Edit,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEditLeccionesAprendidasClick
                    }
                },
                    {
                        type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                        validateRender: base.Event.BtnGridDeleteValidate,
                        event: {
                            on: 'click',
                            callBack: base.Event.BtnGridDeleteLeccionesAprendidasClick
                        }
                    }
                ]
            });
            base.Control.GrdLeccionesAprendidas = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoLecciones',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{
                    sWidth: '60px',
                    aTargets: [1]
                }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacionLeccionAprendida,
                    source: 'Result'
                }
            });
        },

        CrearGridAccionesInmediatas: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: "#",
                width: "3%"
            });
            columns.push({
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridDescripcion,
                width: "80%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Edit,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEditAccionInmediataClick
                    }
                },
                    {
                        type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                        validateRender: base.Event.BtnGridDeleteValidate,
                        event: {
                            on: 'click',
                            callBack: base.Event.BtnGridDeleteAccionInmediataClick
                        }
                    }
                ]
            });
            base.Control.GrdAccionesInmediatas = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoAccionesInmediatas',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{
                    sWidth: '60px',
                    aTargets: [1]
                }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacionAccionInmediata,
                    source: 'Result'
                }
            });
        },

        CrearGridAccionesCorrectivas: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridNumeroAccion,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionCorta',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridDescripcionCortaAccion,
                width: "10%"
            });
            columns.push({
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridDescripcionLargaAccion,
                width: "10%"
            });
            columns.push({
                data: 'NombreColaboradorPlanteaAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridPlanteadaPor,
                width: "10%"
            });
            columns.push({
                data: 'FechaAccionPlanteadaString',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridFechaPlanteada,
                width: "10%"
            });
            columns.push({
                data: 'NombreColaboradorResponsable',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridResponsable,
                width: "10%"
            });
            columns.push({
                data: 'FechaVencimientoString',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridFechaVencimiento,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionEstadoAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridEstadoDeAccion,
                width: "10%"
            });
            columns.push({
                data: 'ListaCausaRaiz',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridAsociadoA,
                width: "10%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "3%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Edit,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEditAccionCorrectivaClick
                    }
                },
                    {
                        type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                        validateRender: base.Event.BtnGridDeleteValidate,
                        event: {
                            on: 'click',
                            callBack: base.Event.BtnGridDeleteAccionCorrectivaClick
                        }
                    }
                ]
            });
            base.Control.GrdAccionesCorrectivas = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoAccionesCorrectivas',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{
                    sWidth: '60px',
                    aTargets: [1]
                }],
                scrollX: '',
                proxy: {
                    //url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacionAccionesCorrectivas,
                    url: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.BuscarRecordAccionIntegrador,
                    source: 'Result'
                }
            });
        },
        //Fin Grid fotos anexos
        CrearGridInvestigacionAnexoFoto: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridItem,
                width: "5%"
            });

            columns.push({
                data: 'Nombre',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridNombreFoto,
                width: "30%"
            });

            columns.push({
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridDescripcionFoto,
                width: "30%"
            });

            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridVistaPreviaFoto,
                "class": "controls",
                width: "10%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.VistaPrevia,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridVistaPreviaFotoClick
                    }
                }]
            });

            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Edit,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEditRecordAnexoFotoClick
                    }
                },
                    {
                        type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                        validateRender: base.Event.BtnGridDeleteValidate,
                        event: {
                            on: 'click',
                            callBack: base.Event.BtnGridDeleteRecordAnexoClick
                        }
                    }
                ]
            });

            base.Control.GrdResultadoInvestigacionAnexoFoto = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoInvestigacionAnexoFoto',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{
                    sWidth: '60px',
                    aTargets: [1]
                }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacionAnexo,
                    source: 'Result'
                }
            });
        },

        CrearGridInvestigacionAnexoApendice: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridItem,
                width: "5%"
            });

            columns.push({
                data: 'DescripcionTipoApendice',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridTypeAnexo,
                width: "20%"
            });

            columns.push({
                data: 'Nombre',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridApendiceName,
                width: "30%"
            });

            columns.push({
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridDescripcionApendice,
                width: "30%"
            });

            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridDownload,
                "class": "controls",
                width: "10%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Adjunto,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridDownloadRecordAnexoApendiceClick
                    }
                }]
            });

            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Edit,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEditRecordAnexoApendiceClick
                    }
                },
                    {
                        type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                        validateRender: base.Event.BtnGridDeleteValidate,
                        event: {
                            on: 'click',
                            callBack: base.Event.BtnGridDeleteAnexoClick
                        }
                    }
                ]
            });

            base.Control.GrdResultadoInvestigacionAnexoApendice = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoInvestigcionAnexoApendice',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{
                    sWidth: '60px',
                    aTargets: [1]
                }],
                scrollX: '',
                proxy: {

                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacionAnexo,
                    source: 'Result'
                }
            });
        },

        CrearGridTipoAnexo: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridNroOrden,
                width: "5%"
            });

            columns.push({
                data: 'NombreClaseAnexo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridItem,
                width: "35%"
            });

            columns.push({
                data: '',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridEsObligatorio,
                "class": "text-center",
                width: "5%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input " + (full.IndicadorObligatorio == 1 ? " checked " : "true") + " class='checkSelectAnexo' disabled='disabled' type='checkbox'>";
                    //cadena = "<input id='id_" + full.CodigoClaseAnexo + "'  data-indicador='" + full.IndicadorObligatorio + " class='checkSelectAnexo' disabled='disabled' type='checkbox'>";
                    return cadena;
                },
            });

            columns.push({
                data: '',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridChecklist,
                "class": "text-center",
                width: "5%",
                mRender: function (data, type, full) {  
                    var cadena = "";
                    cadena = "<input " + (full.CodigoArchivoAnexoSharePoint == 1 ? " checked " : "true") + " class='checkSelectAnexo' disabled='disabled' type='checkbox'>";
                    return cadena;
                },
            });            

            base.Control.GrdResultadoTipoAnexo = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoTipoAnexo',
                columns: columns,
                hasPaging: false,
                hasPagingServer: false,
                hasSelectionRows: false,
                columnDefs: [{
                    sWidth: '60px',
                    aTargets: [1]
                }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarTipoAnexos,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                    base.Control.ArrAnexos = records;
                }
            });
        },
        //Grids Estado de la Investigacion
        CrearGridEstadoElaboradoPor: function () {
            var columns = new Array();
            columns.push({
                data: 'NombreCompletoColaborador',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridSupervisorNombre,
                width: "25%"
            });
            columns.push({
                data: 'DescripcionTipoDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridTipoDocumento,
                width: "10%"
            });
            columns.push({
                data: 'NumeroDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridNumeroDocumento,
                width: "7%"
            });
            columns.push({
                data: 'NombreEmpresa',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridEmpresa,
                width: "20%"
            });
            columns.push({
                data: 'NombrePuestoTrabajo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridPuestoTrabajo,
                "class": "text-center",
                width: "25%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridOperaciones,
                "class": "controls",
                width: "13%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                    validateRender: base.Event.BtnGridDeleteEstadoInvestigacionValidate,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridDeleteEstadoInvestigacionClick
                    }
                }]
            });
            base.Control.GrdResultadoEstadoElaboradoPor = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoEstadoInvestigacionElaborado',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{
                    sWidth: '60px',
                    aTargets: [1]
                }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacionPersonaRol,
                    source: 'Result'
                }
            });
        },
        CrearGridEstadoRevisadoPor: function () {
            var columns = new Array();
            columns.push({
                data: 'NombreCompletoColaborador',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridSupervisorNombre,
                width: "25%"
            });
            columns.push({
                data: 'DescripcionTipoDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridTipoDocumento,
                width: "10%"
            });
            columns.push({
                data: 'NumeroDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridNumeroDocumento,
                width: "10%"
            });
            columns.push({
                data: 'NombreEmpresa',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridEmpresa,
                width: "20%"
            });
            columns.push({
                data: 'NombrePuestoTrabajo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridPuestoTrabajo,
                "class": "text-center",
                width: "25%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridOperaciones,
                "class": "controls",
                width: "13%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                    validateRender: base.Event.BtnGridDeleteEstadoInvestigacionValidate,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridDeleteEstadoInvestigacionClick
                    }
                }]
            });
            base.Control.GrdResultadoEstadoRevisadoPor = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoEstadoInvestigacionRevisado',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{
                    sWidth: '60px',
                    aTargets: [1]
                }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacionPersonaRol,
                    source: 'Result'
                }
            });
        },
        CrearGridEstadoAprobadoPor: function () {
            var columns = new Array();
            columns.push({
                data: 'NombreCompletoColaborador',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridSupervisorNombre,
                width: "25%"
            });
            columns.push({
                data: 'DescripcionTipoDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridTipoDocumento,
                width: "10%"
            });
            columns.push({
                data: 'NumeroDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridNumeroDocumento,
                width: "10%"
            });
            columns.push({
                data: 'NombreEmpresa',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridEmpresa,
                width: "20%"
            });
            columns.push({
                data: 'NombrePuestoTrabajo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridPuestoTrabajo,
                "class": "text-center",
                width: "25%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridOperaciones,
                "class": "controls",
                width: "13%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                    validateRender: base.Event.BtnGridDeleteEstadoInvestigacionValidate,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridDeleteEstadoInvestigacionClick
                    }
                }]
            });
            base.Control.GrdResultadoEstadoAprobadoPor = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoEstadoInvestigacionAprobado',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{
                    sWidth: '60px',
                    aTargets: [1]
                }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacionPersonaRol,
                    source: 'Result'
                }
            });
        },
        //Fin Grids Estado de la Investigacion
        //validar categoria otros
        ValidacionExtraCategoriaOtros: function () {
            var validaciones = new Array();
            validaciones.push({
                Event: function () {
                    var resultado = true;
                    var cont = 0;
                    $('.radioActualCategoriaOtros:checked').each(function (i) {
                        cont++;
                    });

                    if (cont < 1) {
                        resultado = false;
                    }

                    if (!resultado) {
                        $('#lblActualCategoriaOtros').addClass('hasError');
                    } else {
                        $('#lblActualCategoriaOtros').removeClass('hasError');
                    }

                    return resultado;
                }
            });
            validaciones.push({
                Event: function () {
                    var resultado = true;
                    var cont = 0;
                    $('.radioPotencialCategoriaOtros:checked').each(function (i) {
                        cont++;
                    });

                    if (cont < 1) {
                        resultado = false;
                    }

                    if (!resultado) {
                        $('#lblPotencialCategoriaOtros').addClass('hasError');
                    } else {
                        $('#lblPotencialCategoriaOtros').removeClass('hasError');
                    }

                    return resultado;
                }
            });

            return validaciones;
        },
        //fin validar categoria otros
        //validar guardar formulario investigacion-informacion general
        ValidacionExtraInvestigacion: function () {
            var validaciones = new Array();

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.TxtNombreColaboradorOrdenoTrabajo().val() == null || base.Control.TxtNombreColaboradorOrdenoTrabajo().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtNombreColaboradorOrdenoTrabajo().attr('class', 'form-control');
                    } else {
                        base.Control.TxtNombreColaboradorOrdenoTrabajo().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });

            //Validar comentario
            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.DdlDetallePlanEmergencia().val() == '01' && (base.Control.TxtDetalleComentarioEmergencia().val() == null || base.Control.TxtDetalleComentarioEmergencia().val() == '')) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtDetalleComentarioEmergencia().attr('class', 'form-control');
                    } else {
                        base.Control.TxtDetalleComentarioEmergencia().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.DdlDetalleCondicionAmbiental().val() == 'OTR' && (base.Control.TxtOtrosCondicionAmbiental().val() == null || base.Control.TxtOtrosCondicionAmbiental().val() == '')) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtOtrosCondicionAmbiental().attr('class', 'form-control');
                    } else {
                        base.Control.TxtOtrosCondicionAmbiental().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.DdlDetalleSupervisionIncidente().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.ValoresHPI_SI
                        && (base.Control.TxtNombreColaboradorSupervisabaTrabajo().val() == '' || base.Control.TxtNombreColaboradorSupervisabaTrabajo().val() == null)) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtNombreColaboradorSupervisabaTrabajo().attr('class', 'form-control');
                    } else {
                        base.Control.TxtNombreColaboradorSupervisabaTrabajo().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });

            return validaciones;
        },

        //crear Grilla Testigos
        CrearGridInvestigador: function () {
            var columns = new Array();
            columns.push({
                data: 'NombreCompletoColaborador',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridSupervisorNombre,
                width: "20%"
            });
            columns.push({
                data: 'DescripcionTipoDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridTipoDocumento,
                width: "10%"
            });
            columns.push({
                data: 'NumeroDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridNumeroDocumento,
                width: "10%"
            });
            columns.push({
                data: 'NombreEmpresa',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridEmpresa,
                width: "20%"
            });
            columns.push({
                data: 'NombrePuestoTrabajo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridPuestoTrabajo,
                width: "20%"
            });
            columns.push({
                data: 'NombreRequerimiento',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridRequerimiento,
                width: "20%"
            });
            columns.push({
                data: 'NombreParticipacion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridParticipacion,
                width: "20%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "5%",
                actionButtons: [{
                    type: Pe.GMD.UI.Web.Components.GridAction.Edit,
                    event: {
                        on: 'click',
                        callBack: base.Event.BtnGridEditInvestigadorClick
                    }
                },
                    {
                        type: Pe.GMD.UI.Web.Components.GridAction.Delete,
                        validateRender: base.Event.BtnGridDeleteValidate,
                        event: {
                            on: 'click',
                            callBack: base.Event.BtnGridDeleteInvestigadorClick
                        }
                    }
                ]
            });

            base.Control.GrdResultadoInvestigador = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoInvestigador',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{
                    sWidth: '60px',
                    aTargets: [1]
                }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigador,
                    source: 'Result'
                }
            });
        },
        SelecionarObligatorios: function () {
            //console.log(base.Control.listaRecordAnexo);
            //var recordsAnexos = base.Control.listaRecordAnexos;
            //console.log(base.Control.listaRecordTipoAnexo.length);
            //for (var i = 0; i < base.Control.listaRecordAnexos.length; i++) {
            //    for (var j = 0; j < base.Control.listaRecordTipoAnexo.length; j++) {
            //        console.log(base.Control.listaRecordTipoAnexo);
            //    }
            //}
        }
    };

    base.Event = {
        BtnGridDeleteValidate: function (data, type, full) {
            if (base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion != Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.EstadoInvestigacionPorElaborar)
                return false;
            else
                return true;
        },
        TxtSoloNumerosKeypress: function (event) {
            var regex = /[0-9]/;
            var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
            if (!regex.test(key)) {
                event.preventDefault();
                return false;
            }
        },

        TxtRangoNumerosKeyup: function () {

        },

        BtnBuscarClick: function () {
            var filtroAnexoFoto = {
                CodigoTipoAnexo: 'FOT'
            };

            var filtroAnexoApendice = {
                CodigoTipoAnexo: 'ADJ'
            };

            var filtro = {

            };

            //base.Control.GrdResultadoRecordFoto.Load(filtroAnexoFoto);
            base.Control.GrdResultadoRecordAppendix.Load(filtroAnexoApendice);
            //base.Control.GrdResultadoRecordAccion.Load(filtro);
        },

        BtnRegresarBandejaInvestigacionClick: function () {
            window.history.go(-1)
            //Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.Index, {});
        },
        BtnBuscarInvestigacionObligatoriosClick: function () {
            'use strict'
            var listaTipoImpactoComunidad = [];
            $('.checkSelectAnexo:checked').each(function (i) {
                var that = $(this).val();
                //if (that == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioComunidadInvolucrada.DatosConstantes.OtrosTipoImpactoComunidad) {
                listaTipoImpactoComunidad.push({
                    CodigoClaseAnexo: that
                });
                //}
            });

            //var filtro = {
            //    CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
            //    CodigoEstadoRegistro: '1',
            //    CodigoTipoAnexo: 'ADJ',
            //    IndicadorObligatorio: true
            //};
            //base.Ajax.AjaxBuscarInvestigacionObligatorios.data = filtro;
            //base.Ajax.AjaxBuscarInvestigacionObligatorios.submit();
        },
        BuscarObligatorios: function () {
            var filtro = {
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                CodigoEstadoRegistro: '1',
                CodigoTipoAnexo: 'ADJ',
                IndicadorObligatorio: true
            };
            base.Ajax.AjaxBuscarInvestigacionObligatorios.data = filtro;
            base.Ajax.AjaxBuscarInvestigacionObligatorios.submit();
        },
        AjaxBuscarInvestigacionObligatoriosSuccess: function (resultado) {
            if (base.Control.ArrAnexos.length > 0 && resultado.Result.length > 0) {
                for (var i = 0; i < base.Control.ArrAnexos.length; i++) {
                    for (var j = 0; j < resultado.Result.length; j++) {
                        if (base.Control.ArrAnexos[i].CodigoClaseAnexo == resultado.Result[j].CodigoClaseAnexo) {
                            $('#id_' + resultado.Result[j].CodigoClaseAnexo).prop("checked", true);
                        }
                    }
                }
            }

        },
        AjaxBuscarValidarInvestigacionSuccess: function (resultado) {
            if (resultado.IsSuccess && resultado.Result.length > 0) {
                $('#cartTabsFormularioInvestigacion').find('li.validateInvestigacion').each(function () {
                    $(this).removeClass('error-validate-inv');
                    if (!$(this).find('i').hasClass('hidden'))
                        $(this).find('i').addClass('hidden');
                });

                if (resultado.Result[0].InvestigacionTabs.length < 1)
                {
                    if (base.Control.CodigoEstadoInvestigacion == null || base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion == base.Control.CodigoEstadoInvestigacion)
                    {
                        base.Control.Mensaje.Warning({
                            title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                            message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.MensajeErrorCambioEstado
                        });
                    }
                    else
                    {
                        base.Control.Mensaje.Confirmation({
                            title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                            message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                            onAccept: function () {
                                base.Ajax.AjaxRegistrarInvestigacionHistorialCambios.data = {
                                    CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                                    CodigoColaboradorReportante: base.Control.HdnCodigoColaboradorReportaInvestigacion().val(),
                                    Comentario: base.Control.ComentarioEstadoInvestigacion,
                                    EstadoInicialEstadoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion,
                                    EstadoFinalEstadoInvestigacion: base.Control.CodigoEstadoInvestigacion,

                                    CodigoRecord: base.Control.FormularioInvestigacionModel.Investigacion.CodigoRecord,
                                    NumeroRecord: base.Control.FormularioInvestigacionModel.Investigacion.NumeroRecord,
                                    NombreProyecto: base.Control.FormularioInvestigacionModel.Investigacion.NombreProyecto,
                                };
                                base.Ajax.AjaxRegistrarInvestigacionHistorialCambios.submit();
                            }
                        });
                    }
                }
                else
                {
                    var arrayTabs = resultado.Result[0].InvestigacionTabs.split(',');

                    for (var i = 0; i < arrayTabs.length; i++) {
                        $('#cartTabsFormularioInvestigacion').find('li.validateInvestigacion').each(function () {                            
                            if ($.trim($(this).text()) == $.trim(arrayTabs[i])) {
                                $(this).addClass('error-validate-inv');
                                $(this).find('i').removeClass('hidden');
                            }
                        });
                    }
                    base.Control.Mensaje.Warning({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaMensajeValidacionInvestigacion + '<br>' + resultado.Result[0].InvestigacionTabs,
                    });
                }
            }
        },

        //TABS COSTOS DEL INCIDENTE
        //Tab de Costos de investigación  
        BtnGrabarTabCostoInvestigacionClick: function () {
            'use strict'
            var acumTabCostoInvestigacion = 0.00;
            var CostoInvestigacionTrabajadorInvolucradoCostoUSS = 0.00;
            var CostoInvestigacionSupervisorCostoUSS = 0.00;
            var CostoInvestigacionDeclaracionTestigoCostoUSS = 0.00;
            var CostoInvestigacionOtrosCostoUSS = 0.00;

            if (base.Control.TxtCostoInvestigacionTrabajadorInvolucradoCosto().val() != "") {
                CostoInvestigacionTrabajadorInvolucradoCostoUSS = base.Control.TxtCostoInvestigacionTrabajadorInvolucradoCosto().val();
            }
            if (base.Control.TxtCostoInvestigacionSupervisorCosto().val() != "") {
                CostoInvestigacionSupervisorCostoUSS = base.Control.TxtCostoInvestigacionSupervisorCosto().val();
            }
            if (base.Control.TxtCostoInvestigacionDeclaracionTestigoCosto().val() != "") {
                CostoInvestigacionDeclaracionTestigoCostoUSS = base.Control.TxtCostoInvestigacionDeclaracionTestigoCosto().val();
            }
            if (base.Control.TxtCostoInvestigacionOtrosCosto().val() != "") {
                CostoInvestigacionOtrosCostoUSS = base.Control.TxtCostoInvestigacionOtrosCosto().val();
            }
            acumTabCostoInvestigacion = parseFloat(CostoInvestigacionTrabajadorInvolucradoCostoUSS) + parseFloat(CostoInvestigacionSupervisorCostoUSS) + parseFloat(CostoInvestigacionDeclaracionTestigoCostoUSS) + parseFloat(CostoInvestigacionOtrosCostoUSS);

            var arrayDetalleGrabar = [];
            arrayDetalleGrabar.push({
                CodigoInvestigacionCostoDetalle: base.Control.CodigoTabCostoInvestigacionTrabajadorInvolucrado,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoInvestigacion,
                CodigoTipoCostoDetalle: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoInvestigacionTrabajadorInvolucrado,
                Cantidad: base.Control.TxtCostoInvestigacionTrabajadorInvolucradoCantidad().val(),
                Tiempo: base.Control.TxtCostoInvestigacionTrabajadorInvolucradoTiempo().val(),
                PrecioUnitario: base.Control.TxtCostoInvestigacionTrabajadorInvolucradoPrecioUnitario().val(),
                Costo: CostoInvestigacionTrabajadorInvolucradoCostoUSS
            });

            arrayDetalleGrabar.push({
                CodigoInvestigacionCostoDetalle: base.Control.CodigoTabCostoInvestigacionSupervisor,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoInvestigacion,
                CodigoTipoCostoDetalle: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoInvestigacionSupervisor,
                Cantidad: base.Control.TxtCostoInvestigacionSupervisorCantidad().val(),
                Tiempo: base.Control.TxtCostoInvestigacionSupervisorTiempo().val(),
                PrecioUnitario: base.Control.TxtCostoInvestigacionSupervisorPrecioUnitario().val(),
                Costo: CostoInvestigacionSupervisorCostoUSS
            });

            arrayDetalleGrabar.push({
                CodigoInvestigacionCostoDetalle: base.Control.CodigoTabCostoInvestigacionDeclaracionTestigo,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoInvestigacion,
                CodigoTipoCostoDetalle: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoInvestigacionDeclaracionTestigo,
                Cantidad: base.Control.TxtCostoInvestigacionDeclaracionTestigoCantidad().val(),
                Tiempo: base.Control.TxtCostoInvestigacionDeclaracionTestigoTiempo().val(),
                PrecioUnitario: base.Control.TxtCostoInvestigacionDeclaracionTestigoPrecioUnitario().val(),
                Costo: CostoInvestigacionDeclaracionTestigoCostoUSS
            });

            arrayDetalleGrabar.push({
                CodigoInvestigacionCostoDetalle: base.Control.CodigoTabCostoInvestigacionOtros,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoInvestigacion,
                CodigoTipoCostoDetalle: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoInvestigacionOtros,
                Cantidad: null,
                Tiempo: null,
                PrecioUnitario: null,
                Costo: CostoInvestigacionOtrosCostoUSS
            });

            var filtro = {
                listaCosto: {
                    CodigoInvestigacionCosto: base.Control.CodigoTabCostoInvestigacion,
                    CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                    CodigoTipoCostoIncidente: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoInvestigacion,
                    CostoSubTotal: acumTabCostoInvestigacion
                },
                listaCostoDetalle: arrayDetalleGrabar
            };



            base.Control.Mensaje.Confirmation({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                indicadorModal: false,
                onAccept: function () {
                    base.Ajax.AjaxGrabarTabCostoInvestigacion.data = filtro;
                    base.Ajax.AjaxGrabarTabCostoInvestigacion.submit();
                }
            });

        },
        BtnGrabarTabCostoPersonalClick: function () {
            'use strict'
            var acumTabCostoPersonal = 0.00;
            var CostoPersonalTrabajadorInvolucradoCostoUSS = 0.00;
            var CostoPersonalSupervisorCostoUSS = 0.00;
            var CostoPersonalOtrosCostoUSS = 0.00;

            if (base.Control.TxtCostoPersonalTrabajadorInvolucradoCosto().val() != "") {
                CostoPersonalTrabajadorInvolucradoCostoUSS = base.Control.TxtCostoPersonalTrabajadorInvolucradoCosto().val();
            }
            if (base.Control.TxtCostoPersonalSupervisorCosto().val() != "") {
                CostoPersonalSupervisorCostoUSS = base.Control.TxtCostoPersonalSupervisorCosto().val();
            }
            if (base.Control.TxtCostoPersonalOtrosCosto().val() != "") {
                CostoPersonalOtrosCostoUSS = base.Control.TxtCostoPersonalOtrosCosto().val();
            }

            acumTabCostoPersonal = parseFloat(CostoPersonalTrabajadorInvolucradoCostoUSS) + parseFloat(CostoPersonalSupervisorCostoUSS) + parseFloat(CostoPersonalOtrosCostoUSS);

            var arrayDetalleGrabar = [];
            arrayDetalleGrabar.push({
                CodigoInvestigacionCostoDetalle: base.Control.CodigoTabCostoPersonalTrabajadorInvolucrado,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoPersonal,
                CodigoTipoCostoDetalle: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoPersonalTrabajadorInvolucrado,
                Cantidad: base.Control.TxtCostoPersonalTrabajadorInvolucradoCantidad().val(),
                Tiempo: base.Control.TxtCostoPersonalTrabajadorInvolucradoTiempo().val(),
                PrecioUnitario: base.Control.TxtCostoPersonalTrabajadorInvolucradoPrecioUnitario().val(),
                Costo: CostoPersonalTrabajadorInvolucradoCostoUSS
            });

            arrayDetalleGrabar.push({
                CodigoInvestigacionCostoDetalle: base.Control.CodigoTabCostoPersonalSupervisor,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoPersonal,
                CodigoTipoCostoDetalle: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoPersonalSupervisor,
                Cantidad: base.Control.TxtCostoPersonalSupervisorCantidad().val(),
                Tiempo: base.Control.TxtCostoPersonalSupervisorTiempo().val(),
                PrecioUnitario: base.Control.TxtCostoPersonalSupervisorPrecioUnitario().val(),
                Costo: CostoPersonalSupervisorCostoUSS
            });

            arrayDetalleGrabar.push({
                CodigoInvestigacionCostoDetalle: base.Control.CodigoTabCostoPersonalOtros,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoPersonal,
                CodigoTipoCostoDetalle: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoPersonalOtros,
                Cantidad: null,
                Tiempo: null,
                PrecioUnitario: null,
                Costo: CostoPersonalOtrosCostoUSS
            });

            var filtro = {
                listaCosto: {
                    CodigoInvestigacionCosto: base.Control.CodigoTabCostoPersonal,
                    CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                    CodigoTipoCostoIncidente: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoPersonal,
                    CostoSubTotal: acumTabCostoPersonal
                },
                listaCostoDetalle: arrayDetalleGrabar
            };

            base.Control.Mensaje.Confirmation({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                indicadorModal: false,
                onAccept: function () {
                    base.Ajax.AjaxGrabarTabCostoPersonal.data = filtro;
                    base.Ajax.AjaxGrabarTabCostoPersonal.submit();
                }
            });

        },
        BtnGrabarTabCostoMedioambientalClick: function () {
            'use strict'
            var acumTabCostoMedioambiental = 0.00;
            var CostoMedioambientalPersonalUtilizadoCostoUSS = 0.00;
            var CostoMedioambientalMaterialUtilizadoCostoUSS = 0.00;
            var CostoMedioambientalDisposicionCostoUSS = 0.00;
            var CostoMedioambientalRecuperacionCostoUSS = 0.00;
            var CostoMedioambientalOtrosCostoUSS = 0.00;

            if (base.Control.TxtCostoMedioambientalPersonalUtilizadoCosto().val() != "") {
                CostoMedioambientalPersonalUtilizadoCostoUSS = base.Control.TxtCostoMedioambientalPersonalUtilizadoCosto().val();
            }
            if (base.Control.TxtCostoMedioambientalMaterialUtilizadoCosto().val() != "") {
                CostoMedioambientalMaterialUtilizadoCostoUSS = base.Control.TxtCostoMedioambientalMaterialUtilizadoCosto().val();
            }
            if (base.Control.TxtCostoMedioambientalDisposicionCosto().val() != "") {
                CostoMedioambientalDisposicionCostoUSS = base.Control.TxtCostoMedioambientalDisposicionCosto().val();
            }
            if (base.Control.TxtCostoMedioambientalRecuperacionCosto().val() != "") {
                CostoMedioambientalRecuperacionCostoUSS = base.Control.TxtCostoMedioambientalRecuperacionCosto().val();
            }
            if (base.Control.TxtCostoMedioambientalOtrosCosto().val() != "") {
                CostoMedioambientalOtrosCostoUSS = base.Control.TxtCostoMedioambientalOtrosCosto().val();
            }

            acumTabCostoMedioambiental = parseFloat(CostoMedioambientalPersonalUtilizadoCostoUSS) + parseFloat(CostoMedioambientalMaterialUtilizadoCostoUSS) + parseFloat(CostoMedioambientalDisposicionCostoUSS) +
                parseFloat(CostoMedioambientalRecuperacionCostoUSS) + +parseFloat(CostoMedioambientalOtrosCostoUSS);

            var arrayDetalleGrabar = [];
            arrayDetalleGrabar.push({
                CodigoInvestigacionCostoDetalle: base.Control.CodigoTabCostoMedioambientalPersonalUtilizado,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoMedioambiental,
                CodigoTipoCostoDetalle: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoMedioambientalPersonalUtilizado,
                Cantidad: base.Control.TxtCostoMedioambientalPersonalUtilizadoCantidad().val(),
                Tiempo: base.Control.TxtCostoMedioambientalPersonalUtilizadoTiempo().val(),
                PrecioUnitario: base.Control.TxtCostoMedioambientalPersonalUtilizadoPrecioUnitario().val(),
                Costo: CostoMedioambientalPersonalUtilizadoCostoUSS
            });

            arrayDetalleGrabar.push({
                CodigoInvestigacionCostoDetalle: base.Control.CodigoTabCostoMedioambientalMaterialUtilizado,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoMedioambiental,
                CodigoTipoCostoDetalle: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoMedioambientalMaterialUtilizado,
                Cantidad: null,
                Tiempo: null,
                PrecioUnitario: null,
                Costo: CostoMedioambientalMaterialUtilizadoCostoUSS
            });
            arrayDetalleGrabar.push({
                CodigoInvestigacionCostoDetalle: base.Control.CodigoTabCostoMedioambientalDisposicion,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoMedioambiental,
                CodigoTipoCostoDetalle: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoMedioambientalDisposicionCosto,
                Cantidad: null,
                Tiempo: null,
                PrecioUnitario: null,
                Costo: CostoMedioambientalDisposicionCostoUSS
            });
            arrayDetalleGrabar.push({
                CodigoInvestigacionCostoDetalle: base.Control.CodigoTabCostoMedioambientalRecuperacion,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoMedioambiental,
                CodigoTipoCostoDetalle: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoMedioambientalRecuperacionCosto,
                Cantidad: null,
                Tiempo: null,
                PrecioUnitario: null,
                Costo: CostoMedioambientalRecuperacionCostoUSS
            });
            arrayDetalleGrabar.push({
                CodigoInvestigacionCostoDetalle: base.Control.CodigoTabCostoMedioambientalOtros,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoMedioambiental,
                CodigoTipoCostoDetalle: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoMedioambientalOtros,
                Cantidad: null,
                Tiempo: null,
                PrecioUnitario: null,
                Costo: CostoMedioambientalOtrosCostoUSS
            });

            var filtro = {
                listaCosto: {
                    CodigoInvestigacionCosto: base.Control.CodigoTabCostoMedioambiental,
                    CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                    CodigoTipoCostoIncidente: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoMedioambiental,
                    CostoSubTotal: acumTabCostoMedioambiental
                },
                listaCostoDetalle: arrayDetalleGrabar
            };

            base.Control.Mensaje.Confirmation({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                indicadorModal: false,
                onAccept: function () {
                    base.Ajax.AjaxGrabarTabCostoMedioambiental.data = filtro;
                    base.Ajax.AjaxGrabarTabCostoMedioambiental.submit();
                }
            });

        },
        BtnGrabarTabCostoImpactoComunidadClick: function () {
            'use strict'
            var CostoImpactoComunidadTotal = 0.00;
            if (base.Control.TxtCostoImpactoComunidadTotal().val() != "") {
                CostoImpactoComunidadTotal = base.Control.TxtCostoImpactoComunidadTotal().val();
            }
            var filtro = {
                listaCosto: {
                    CodigoInvestigacionCosto: base.Control.CodigoTabCostoImpactoComunidad,
                    CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                    CodigoTipoCostoIncidente: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoImpactoComunidad,
                    CostoSubTotal: CostoImpactoComunidadTotal
                },
                listaCostoDetalle: null
            };

            base.Control.Mensaje.Confirmation({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                indicadorModal: false,
                onAccept: function () {
                    base.Ajax.AjaxGrabarTabCostoImpactoComunidad.data = filtro;
                    base.Ajax.AjaxGrabarTabCostoImpactoComunidad.submit();
                }
            });

        },
        BtnGrabarTabCostoDaniosPropiedadClick: function () {
            'use strict'
            var acumTabCostoDaniosPropiedad = 0.00;
            var CostoDaniosPropiedadPersonalUtilizadoUSS = 0.00;
            var CostoDaniosPropiedadEquipoUtilizadoUSS = 0.00;
            var CostoDaniosPropiedadMaterialUtilizadoUSS = 0.00;
            var CostoDaniosPropiedadCostoAlquilerUSS = 0.00;
            var CostoDaniosPropiedadCostoServicioExternoUSS = 0.00;
            var CostoDaniosPropiedaOtrosUSS = 0.00;

            if (base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoCosto().val() != "") {
                CostoDaniosPropiedadPersonalUtilizadoUSS = base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoCosto().val();
            }
            if (base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoCosto().val() != "") {
                CostoDaniosPropiedadEquipoUtilizadoUSS = base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoCosto().val();
            }
            if (base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoCosto().val() != "") {
                CostoDaniosPropiedadMaterialUtilizadoUSS = base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoCosto().val();
            }
            if (base.Control.TxtCostoDaniosPropiedadCostoAlquilerCosto().val() != "") {
                CostoDaniosPropiedadCostoAlquilerUSS = base.Control.TxtCostoDaniosPropiedadCostoAlquilerCosto().val();
            }
            if (base.Control.TxtCostoDaniosPropiedadCostoServicioExternoCosto().val() != "") {
                CostoDaniosPropiedadCostoServicioExternoUSS = base.Control.TxtCostoDaniosPropiedadCostoServicioExternoCosto().val();
            }
            if (base.Control.TxtCostoDaniosPropiedadOtrosCosto().val() != "") {
                CostoDaniosPropiedaOtrosUSS = base.Control.TxtCostoDaniosPropiedadOtrosCosto().val();
            }

            acumTabCostoDaniosPropiedad = parseFloat(CostoDaniosPropiedadPersonalUtilizadoUSS) + parseFloat(CostoDaniosPropiedadEquipoUtilizadoUSS) + parseFloat(CostoDaniosPropiedadMaterialUtilizadoUSS) +
                parseFloat(CostoDaniosPropiedadCostoAlquilerUSS) + parseFloat(CostoDaniosPropiedadCostoServicioExternoUSS) + parseFloat(CostoDaniosPropiedaOtrosUSS);

            var arrayDetalleGrabar = [];
            arrayDetalleGrabar.push({
                CodigoInvestigacionCostoDetalle: base.Control.CodigoTabCostoDaniosPropiedadPersonalUtilizado,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoDaniosPropiedad,
                CodigoTipoCostoDetalle: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoDaniosPropiedadPersonalUtilizado,
                Cantidad: base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoCantidad().val(),
                Tiempo: base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoTiempo().val(),
                PrecioUnitario: base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoPrecioUnitario().val(),
                Costo: CostoDaniosPropiedadPersonalUtilizadoUSS
            });

            arrayDetalleGrabar.push({
                CodigoInvestigacionCostoDetalle: base.Control.CodigoTabCostoDaniosPropiedadEquipoUtilizado,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoDaniosPropiedad,
                CodigoTipoCostoDetalle: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoDaniosPropiedadEquipoUtilizado,
                Cantidad: base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoCantidad().val(),
                Tiempo: base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoTiempo().val(),
                PrecioUnitario: base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoPrecioUnitario().val(),
                Costo: CostoDaniosPropiedadEquipoUtilizadoUSS
            });
            arrayDetalleGrabar.push({
                CodigoInvestigacionCostoDetalle: base.Control.CodigoTabCostoDaniosPropiedadMaterialUtilizado,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoDaniosPropiedad,
                CodigoTipoCostoDetalle: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoDaniosPropiedadMaterialUtilizado,
                Cantidad: base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoCantidad().val(),
                Tiempo: null,
                PrecioUnitario: base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoPrecioUnitario().val(),
                Costo: CostoDaniosPropiedadMaterialUtilizadoUSS
            });
            arrayDetalleGrabar.push({
                CodigoInvestigacionCostoDetalle: base.Control.CodigoTabCostoDaniosPropiedadCostoAlquiler,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoDaniosPropiedad,
                CodigoTipoCostoDetalle: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoDaniosPropiedadCostoAlquiler,
                Cantidad: base.Control.TxtCostoDaniosPropiedadCostoAlquilerCantidad().val(),
                Tiempo: base.Control.TxtCostoDaniosPropiedadCostoAlquilerTiempo().val(),
                PrecioUnitario: base.Control.TxtCostoDaniosPropiedadCostoAlquilerPrecioUnitario().val(),
                Costo: CostoDaniosPropiedadCostoAlquilerUSS
            });
            arrayDetalleGrabar.push({
                CodigoInvestigacionCostoDetalle: base.Control.CodigoTabCostoDaniosPropiedadCostoServicioExterno,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoDaniosPropiedad,
                CodigoTipoCostoDetalle: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoDaniosPropiedadCostoServicioExterno,
                Cantidad: null,
                Tiempo: null,
                PrecioUnitario: null,
                Costo: CostoDaniosPropiedadCostoServicioExternoUSS
            });
            arrayDetalleGrabar.push({
                CodigoInvestigacionCostoDetalle: base.Control.CodigoTabCostoDaniosPropiedaOtros,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoDaniosPropiedad,
                CodigoTipoCostoDetalle: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoDaniosPropiedadOtros,
                Cantidad: null,
                Tiempo: null,
                PrecioUnitario: null,
                Costo: CostoDaniosPropiedaOtrosUSS
            });

            var filtro = {
                listaCosto: {
                    CodigoInvestigacionCosto: base.Control.CodigoTabCostoDaniosPropiedad,
                    CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                    CodigoTipoCostoIncidente: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoDaniosPropiedad,
                    CostoSubTotal: acumTabCostoDaniosPropiedad
                },
                listaCostoDetalle: arrayDetalleGrabar
            };

            base.Control.Mensaje.Confirmation({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                indicadorModal: false,
                onAccept: function () {
                    base.Ajax.AjaxGrabarTabCostoDaniosPropiedad.data = filtro;
                    base.Ajax.AjaxGrabarTabCostoDaniosPropiedad.submit();
                }
            });

        },
        BtnGrabarTabCostoPerdidaProcesoClick: function () {
            'use strict'
            var acumTabCostoPerdidaProceso = 0.00;
            var CostoPerdidaProcesoCostoProductoUSS = 0.00;
            var CostoPerdidaProcesoCostoServicioUSS = 0.00;
            var CostoPerdidaProcesoCostoOcasionadoEquipoUSS = 0.00;
            var CostoPerdidaProcesoCostoOcasionadoPersonalUSS = 0.00;
            var CostoPerdidaProcesoCostoIncrementoHorasExtraUSS = 0.00;
            var CostoPerdidaProcesoOtrosUSS = 0.00;

            if (base.Control.TxtCostoPerdidaProcesoCostoProductoCosto().val() != "") {
                CostoPerdidaProcesoCostoProductoUSS = base.Control.TxtCostoPerdidaProcesoCostoProductoCosto().val();
            }
            if (base.Control.TxtCostoPerdidaProcesoCostoServicioCosto().val() != "") {
                CostoPerdidaProcesoCostoServicioUSS = base.Control.TxtCostoPerdidaProcesoCostoServicioCosto().val();
            }
            if (base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoCosto().val() != "") {
                CostoPerdidaProcesoCostoOcasionadoEquipoUSS = base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoCosto().val();
            }
            if (base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalCosto().val() != "") {
                CostoPerdidaProcesoCostoOcasionadoPersonalUSS = base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalCosto().val();
            }
            if (base.Control.TxtCostoPerdidaProcesoIncrementoCosto().val() != "") {
                CostoPerdidaProcesoCostoIncrementoHorasExtraUSS = base.Control.TxtCostoPerdidaProcesoIncrementoCosto().val();
            }
            if (base.Control.TxtCostoPerdidaProcesoOtrosCosto().val() != "") {
                CostoPerdidaProcesoOtrosUSS = base.Control.TxtCostoPerdidaProcesoOtrosCosto().val();
            }

            acumTabCostoPerdidaProceso = parseFloat(CostoPerdidaProcesoCostoProductoUSS) + parseFloat(CostoPerdidaProcesoCostoServicioUSS) + parseFloat(CostoPerdidaProcesoCostoOcasionadoEquipoUSS) +
                parseFloat(CostoPerdidaProcesoCostoOcasionadoPersonalUSS) + parseFloat(CostoPerdidaProcesoCostoIncrementoHorasExtraUSS) + parseFloat(CostoPerdidaProcesoOtrosUSS);

            var arrayDetalleGrabar = [];
            arrayDetalleGrabar.push({
                CodigoInvestigacionCostoDetalle: base.Control.CodigoTabCostoPerdidaProcesoCostoProducto,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoPerdidaProceso,
                CodigoTipoCostoDetalle: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoPerdidaProcesoCostoProducto,
                Cantidad: base.Control.TxtCostoPerdidaProcesoCostoProductoCantidad().val(),
                Tiempo: null,
                PrecioUnitario: base.Control.TxtCostoPerdidaProcesoCostoProductoPrecioUnitario().val(),
                Costo: CostoPerdidaProcesoCostoProductoUSS
            });
            arrayDetalleGrabar.push({
                CodigoInvestigacionCostoDetalle: base.Control.CodigoTabCostoPerdidaProcesoCostoServicio,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoPerdidaProceso,
                CodigoTipoCostoDetalle: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoPerdidaProcesoCostoServicio,
                Cantidad: base.Control.TxtCostoPerdidaProcesoCostoServicioCantidad().val(),
                Tiempo: base.Control.TxtCostoPerdidaProcesoCostoServicioTiempo().val(),
                PrecioUnitario: base.Control.TxtCostoPerdidaProcesoCostoServicioPrecioUnitario().val(),
                Costo: CostoPerdidaProcesoCostoServicioUSS
            });
            arrayDetalleGrabar.push({
                CodigoInvestigacionCostoDetalle: base.Control.CodigoTabCostoPerdidaProcesoCostoOcasionadoEquipo,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoPerdidaProceso,
                CodigoTipoCostoDetalle: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoPerdidaProcesoCostoOcasionadoEquipo,
                Cantidad: base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoCantidad().val(),
                Tiempo: base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoTiempo().val(),
                PrecioUnitario: base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoPrecioUnitario().val(),
                Costo: CostoPerdidaProcesoCostoOcasionadoEquipoUSS
            });
            arrayDetalleGrabar.push({
                CodigoInvestigacionCostoDetalle: base.Control.CodigoTabCostoPerdidaProcesoCostoOcasionadoPersonal,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoPerdidaProceso,
                CodigoTipoCostoDetalle: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoPerdidaProcesoCostoOcasionadoPersonal,
                Cantidad: base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalCantidad().val(),
                Tiempo: base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalTiempo().val(),
                PrecioUnitario: base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalPrecioUnitario().val(),
                Costo: CostoPerdidaProcesoCostoOcasionadoPersonalUSS
            });
            arrayDetalleGrabar.push({
                CodigoInvestigacionCostoDetalle: base.Control.CodigoTabCostoPerdidaProcesoIncrementoHorasExtra,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoPerdidaProceso,
                CodigoTipoCostoDetalle: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoPerdidaProcesoIncrementoSubContratacionCosto,
                Cantidad: null,
                Tiempo: null,
                PrecioUnitario: null,
                Costo: CostoPerdidaProcesoCostoIncrementoHorasExtraUSS
            });
            arrayDetalleGrabar.push({
                CodigoInvestigacionCostoDetalle: base.Control.CodigoTabCostoPerdidaProcesoOtros,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoPerdidaProceso,
                CodigoTipoCostoDetalle: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoPerdidaProcesoOtros,
                Cantidad: null,
                Tiempo: null,
                PrecioUnitario: null,
                Costo: CostoPerdidaProcesoOtrosUSS
            });
            var filtro = {
                listaCosto: {
                    CodigoInvestigacionCosto: base.Control.CodigoTabCostoPerdidaProceso,
                    CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                    CodigoTipoCostoIncidente: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoPerdidaProceso,
                    CostoSubTotal: acumTabCostoPerdidaProceso
                },
                listaCostoDetalle: arrayDetalleGrabar
            };

            base.Control.Mensaje.Confirmation({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                indicadorModal: false,
                onAccept: function () {
                    base.Ajax.AjaxGrabarTabCostoPerdidaProceso.data = filtro;
                    base.Ajax.AjaxGrabarTabCostoPerdidaProceso.submit();
                }
            });

        },
        BtnGrabarTabCostoPrevencionClick: function () {
            'use strict'
            var acumTabCostoPrevencion = 0.00;
            var CostoPrevencionMedidasCostoUSS = 0.00;
            var CostoPrevencionOtrosCostoUSS = 0.00;

            if (base.Control.TxtCostoPrevencionMedidasCosto().val() != "") {
                CostoPrevencionMedidasCostoUSS = base.Control.TxtCostoPrevencionMedidasCosto().val();
            }
            if (base.Control.TxtCostoPrevencionOtrosCosto().val() != "") {
                CostoPrevencionOtrosCostoUSS = base.Control.TxtCostoPrevencionOtrosCosto().val();
            }
            acumTabCostoPrevencion = parseFloat(CostoPrevencionMedidasCostoUSS) + parseFloat(CostoPrevencionOtrosCostoUSS);
            var arrayDetalleGrabar = [];
            arrayDetalleGrabar.push({
                CodigoInvestigacionCostoDetalle: base.Control.CodigoTabCostoPrevencionMedidas,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoPrevencion,
                CodigoTipoCostoDetalle: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoPrevencionMedidasCosto,
                Cantidad: null,
                Tiempo: null,
                PrecioUnitario: null,
                Costo: CostoPrevencionMedidasCostoUSS
            });
            arrayDetalleGrabar.push({
                CodigoInvestigacionCostoDetalle: base.Control.CodigoTabCostoPrevencionOtros,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoPrevencion,
                CodigoTipoCostoDetalle: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoPrevencionOtros,
                Cantidad: null,
                Tiempo: null,
                PrecioUnitario: null,
                Costo: CostoPrevencionOtrosCostoUSS
            });
            var filtro = {
                listaCosto: {
                    CodigoInvestigacionCosto: base.Control.CodigoTabCostoPrevencion,
                    CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                    CodigoTipoCostoIncidente: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoPrevencion,
                    CostoSubTotal: acumTabCostoPrevencion
                },
                listaCostoDetalle: arrayDetalleGrabar
            };

            base.Control.Mensaje.Confirmation({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                indicadorModal: false,
                onAccept: function () {
                    base.Ajax.AjaxGrabarTabCostoPrevencion.data = filtro;
                    base.Ajax.AjaxGrabarTabCostoPrevencion.submit();
                }
            });

        },
        BtnGrabarTabCostoOtrosClick: function () {
            'use strict'
            var CostoOtrosTotal = 0.00;
            if (isNaN(base.Control.TxtCostoOtrosTotal().val()) != true) {
                CostoOtrosTotal = base.Control.TxtCostoOtrosTotal().val();
            }
            var filtro = {
                listaCosto: {
                    CodigoInvestigacionCosto: base.Control.CodigoTabCostoOtros,
                    CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                    CodigoTipoCostoIncidente: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoOtros,
                    CostoSubTotal: CostoOtrosTotal
                },
                listaCostoDetalle: null
            };

            base.Control.Mensaje.Confirmation({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                indicadorModal: false,
                onAccept: function () {
                    base.Ajax.AjaxGrabarTabCostoOtros.data = filtro;
                    base.Ajax.AjaxGrabarTabCostoOtros.submit();
                }
            });

        },

        BtnCancelarTabCostoInvestigacionClick: function () {
            window.location.href = Pe.ElectroPeru.SGI.Presentacion.Base.Actions.FormularioInvestigacion;
        },
        BtnCancelarTabCostoPersonalClick: function () {
            window.location.href = Pe.ElectroPeru.SGI.Presentacion.Base.Actions.FormularioInvestigacion;
        },
        BtnCancelarTabCostoMedioambientalClick: function () {
            window.location.href = Pe.ElectroPeru.SGI.Presentacion.Base.Actions.FormularioInvestigacion;
        },
        BtnCancelarTabCostoImpactoComunidadClick: function () {
            window.location.href = Pe.ElectroPeru.SGI.Presentacion.Base.Actions.FormularioInvestigacion;
        },
        BtnCancelarTabCostoDaniosPropiedadClick: function () {
            window.location.href = Pe.ElectroPeru.SGI.Presentacion.Base.Actions.FormularioInvestigacion;
        },
        BtnCancelarTabCostoPerdidaProcesoClick: function () {
            window.location.href = Pe.ElectroPeru.SGI.Presentacion.Base.Actions.FormularioInvestigacion;
        },
        BtnCancelarTabCostoPrevencionClick: function () {
            window.location.href = Pe.ElectroPeru.SGI.Presentacion.Base.Actions.FormularioInvestigacion;
        },
        BtnCancelarTabCostoOtrosClick: function () {
            window.location.href = Pe.ElectroPeru.SGI.Presentacion.Base.Actions.FormularioInvestigacion;
        },

        AjaxGrabarTabCostoInvestigacionSuccess: function (resultado) {
            'use strict'
            if (resultado.Result.CodigoInvestigacionCosto != null) {
                base.Control.CodigoTabCostoInvestigacion = resultado.Result.CodigoInvestigacionCosto;
                base.Event.BtnBuscarTabCostoInvestigacionClick();
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxGrabarTabCostoPersonalSuccess: function (resultado) {
            'use strict'
            if (resultado.Result.CodigoInvestigacionCosto != null) {
                base.Control.CodigoTabCostoPersonal = resultado.Result.CodigoInvestigacionCosto;
                base.Event.BtnBuscarTabCostoPersonalClick();
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxGrabarTabCostoMedioambientalSuccess: function (resultado) {
            'use strict'
            if (resultado.Result.CodigoInvestigacionCosto != null) {
                base.Control.CodigoTabCostoMedioambiental = resultado.Result.CodigoInvestigacionCosto;
                base.Event.BtnBuscarTabCostoMedioambientalClick();
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxGrabarTabCostoImpactoComunidadSuccess: function (resultado) {
            'use strict'
            if (resultado.Result.CodigoInvestigacionCosto != null) {
                base.Control.CodigoTabCostoImpactoComunidad = resultado.Result.CodigoInvestigacionCosto;
                base.Event.BtnBuscarTabCostoImpactoComunidadClick();
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxGrabarTabCostoDaniosPropiedadSuccess: function (resultado) {
            'use strict'
            if (resultado.Result.CodigoInvestigacionCosto != null) {
                base.Control.CodigoTabCostoDaniosPropiedad = resultado.Result.CodigoInvestigacionCosto;
                base.Event.BtnBuscarTabCostoDaniosPropiedadClick();
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxGrabarTabCostoPerdidaProcesoSuccess: function (resultado) {
            'use strict'
            if (resultado.Result.CodigoInvestigacionCosto != null) {
                base.Control.CodigoTabCostoPerdidaProceso = resultado.Result.CodigoInvestigacionCosto;
                base.Event.BtnBuscarTabCostoPerdidaProcesoClick();
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxGrabarTabCostoPrevencionSuccess: function (resultado) {
            'use strict'
            if (resultado.Result.CodigoInvestigacionCosto != null) {
                base.Control.CodigoTabCostoPrevencion = resultado.Result.CodigoInvestigacionCosto;
                base.Event.BtnBuscarTabCostoPrevencionClick();
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxGrabarTabCostoOtrosSuccess: function (resultado) {
            'use strict'
            if (resultado.Result.CodigoInvestigacionCosto != null) {
                base.Control.CodigoTabCostoOtros = resultado.Result.CodigoInvestigacionCosto;
                base.Event.BtnBuscarTabCostoOtrosClick();
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },



        BtnBuscarTabCostoInvestigacionClick: function () {
            'use strict'
            var filtro = {
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoInvestigacion,
                CodigoTipoCostoIncidente: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoInvestigacion
            };
            base.Ajax.AjaxBuscarTabCostoInvestigacion.data = filtro;
            base.Ajax.AjaxBuscarTabCostoInvestigacion.submit();
        },
        BtnBuscarTabCostoPersonalClick: function () {
            'use strict'
            var filtro = {
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoPersonal,
                CodigoTipoCostoIncidente: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoPersonal
            };
            base.Ajax.AjaxBuscarTabCostoPersonal.data = filtro;
            base.Ajax.AjaxBuscarTabCostoPersonal.submit();
        },
        BtnBuscarTabCostoMedioambientalClick: function () {
            'use strict'
            var filtro = {
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoMedioambiental,
                CodigoTipoCostoIncidente: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoMedioambiental
            };
            base.Ajax.AjaxBuscarTabCostoMedioambiental.data = filtro;
            base.Ajax.AjaxBuscarTabCostoMedioambiental.submit();
        },
        BtnBuscarTabCostoImpactoComunidadClick: function () {
            'use strict'
            var filtro = {
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoImpactoComunidad,
                CodigoTipoCostoIncidente: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoImpactoComunidad
            };
            base.Ajax.AjaxBuscarTabCostoImpactoComunidad.data = filtro;
            base.Ajax.AjaxBuscarTabCostoImpactoComunidad.submit();
        },
        BtnBuscarTabCostoDaniosPropiedadClick: function () {
            'use strict'
            var filtro = {
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoDaniosPropiedad,
                CodigoTipoCostoIncidente: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoDaniosPropiedad
            };
            base.Ajax.AjaxBuscarTabCostoDaniosPropiedad.data = filtro;
            base.Ajax.AjaxBuscarTabCostoDaniosPropiedad.submit();
        },
        BtnBuscarTabCostoPerdidaProcesoClick: function () {
            'use strict'
            var filtro = {
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoPerdidaProceso,
                CodigoTipoCostoIncidente: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoPerdidaProceso
            };
            base.Ajax.AjaxBuscarTabCostoPerdidaProceso.data = filtro;
            base.Ajax.AjaxBuscarTabCostoPerdidaProceso.submit();
        },
        BtnBuscarTabCostoPrevencionClick: function () {
            'use strict'
            var filtro = {
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoPrevencion,
                CodigoTipoCostoIncidente: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoPrevencion
            };
            base.Ajax.AjaxBuscarTabCostoPrevencion.data = filtro;
            base.Ajax.AjaxBuscarTabCostoPrevencion.submit();
        },
        BtnBuscarTabCostoImpactoComunidadClick: function () {
            'use strict'
            var filtro = {
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoImpactoComunidad,
                CodigoTipoCostoIncidente: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoImpactoComunidad
            };
            base.Ajax.AjaxBuscarTabCostoImpactoComunidad.data = filtro;
            base.Ajax.AjaxBuscarTabCostoImpactoComunidad.submit();
        },
        BtnBuscarTabCostoOtrosClick: function () {
            'use strict'
            var filtro = {
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                CodigoInvestigacionCosto: base.Control.CodigoTabCostoOtros,
                CodigoTipoCostoIncidente: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoOtros
            };
            base.Ajax.AjaxBuscarTabCostoOtros.data = filtro;
            base.Ajax.AjaxBuscarTabCostoOtros.submit();
        },



        AjaxBuscarTabCostoInvestigacionSuccess: function (resultado) {
            'use strict'
            if (resultado.Result.length > 0) {
                base.Control.CodigoTabCostoInvestigacion = resultado.Result[0].CodigoInvestigacionCosto
                base.Control.TxtCostoInvestigacionTotal().val(resultado.Result[0].CostoSubTotal);
                var ListaInvestigacionCostoDetalle = [];
                var codigoParametroTrabajadorInvolucrado = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoInvestigacionTrabajadorInvolucrado;
                var codigoParametroSupervisor = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoInvestigacionSupervisor;
                var codigoParametroDeclaracionTestigo = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoInvestigacionDeclaracionTestigo;
                var codigoParametroOtros = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoInvestigacionOtros;

                ListaInvestigacionCostoDetalle = resultado.Result[0].ListaInvestigacionCostoDetalle;
                if (ListaInvestigacionCostoDetalle.length > 0) {
                    $.each(ListaInvestigacionCostoDetalle, function (index, value) {

                        if (codigoParametroTrabajadorInvolucrado == value.CodigoTipoCostoDetalle) {
                            base.Control.CodigoTabCostoInvestigacionTrabajadorInvolucrado = value.CodigoInvestigacionCostoDetalle;
                            base.Control.TxtCostoInvestigacionTrabajadorInvolucradoCantidad().val(value.Cantidad);
                            base.Control.TxtCostoInvestigacionTrabajadorInvolucradoTiempo().val(value.Tiempo);
                            base.Control.TxtCostoInvestigacionTrabajadorInvolucradoPrecioUnitario().val(value.PrecioUnitario);
                            base.Control.TxtCostoInvestigacionTrabajadorInvolucradoCosto().val(value.Costo);
                        }
                        if (codigoParametroSupervisor == value.CodigoTipoCostoDetalle) {
                            base.Control.CodigoTabCostoInvestigacionSupervisor = value.CodigoInvestigacionCostoDetalle;
                            base.Control.TxtCostoInvestigacionSupervisorCantidad().val(value.Cantidad);
                            base.Control.TxtCostoInvestigacionSupervisorTiempo().val(value.Tiempo);
                            base.Control.TxtCostoInvestigacionSupervisorPrecioUnitario().val(value.PrecioUnitario);
                            base.Control.TxtCostoInvestigacionSupervisorCosto().val(value.Costo);
                        }
                        if (codigoParametroDeclaracionTestigo == value.CodigoTipoCostoDetalle) {
                            base.Control.CodigoTabCostoInvestigacionDeclaracionTestigo = value.CodigoInvestigacionCostoDetalle;
                            base.Control.TxtCostoInvestigacionDeclaracionTestigoCantidad().val(value.Cantidad);
                            base.Control.TxtCostoInvestigacionDeclaracionTestigoTiempo().val(value.Tiempo);
                            base.Control.TxtCostoInvestigacionDeclaracionTestigoPrecioUnitario().val(value.PrecioUnitario);
                            base.Control.TxtCostoInvestigacionDeclaracionTestigoCosto().val(value.Costo)
                        }
                        if (codigoParametroOtros == value.CodigoTipoCostoDetalle) {
                            base.Control.CodigoTabCostoInvestigacionOtros = value.CodigoInvestigacionCostoDetalle;
                            base.Control.TxtCostoInvestigacionOtrosCosto().val(value.Costo);
                        }

                    });

                }
            }
        },
        AjaxBuscarTabCostoPersonalSuccess: function (resultado) {
            'use strict'
            if (resultado.Result.length > 0) {
                base.Control.CodigoTabCostoPersonal = resultado.Result[0].CodigoInvestigacionCosto
                base.Control.TxtCostoPersonalTotal().val(resultado.Result[0].CostoSubTotal);
                var ListaInvestigacionCostoDetalle = [];
                var codigoParametroTrabajadorInvolucrado = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoPersonalTrabajadorInvolucrado;
                var codigoParametroSupervisor = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoPersonalSupervisor;
                var codigoParametroOtros = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoPersonalOtros;

                ListaInvestigacionCostoDetalle = resultado.Result[0].ListaInvestigacionCostoDetalle;
                if (ListaInvestigacionCostoDetalle.length > 0) {
                    $.each(ListaInvestigacionCostoDetalle, function (index, value) {

                        if (codigoParametroTrabajadorInvolucrado == value.CodigoTipoCostoDetalle) {
                            base.Control.CodigoTabCostoPersonalTrabajadorInvolucrado = value.CodigoInvestigacionCostoDetalle;
                            base.Control.TxtCostoPersonalTrabajadorInvolucradoCantidad().val(value.Cantidad);
                            base.Control.TxtCostoPersonalTrabajadorInvolucradoTiempo().val(value.Tiempo);
                            base.Control.TxtCostoPersonalTrabajadorInvolucradoPrecioUnitario().val(value.PrecioUnitario);
                            base.Control.TxtCostoPersonalTrabajadorInvolucradoCosto().val(value.Costo);
                        }
                        if (codigoParametroSupervisor == value.CodigoTipoCostoDetalle) {
                            base.Control.CodigoTabCostoPersonalSupervisor = value.CodigoInvestigacionCostoDetalle;
                            base.Control.TxtCostoPersonalSupervisorCantidad().val(value.Cantidad);
                            base.Control.TxtCostoPersonalSupervisorTiempo().val(value.Tiempo);
                            base.Control.TxtCostoPersonalSupervisorPrecioUnitario().val(value.PrecioUnitario);
                            base.Control.TxtCostoPersonalSupervisorCosto().val(value.Costo);
                        }

                        if (codigoParametroOtros == value.CodigoTipoCostoDetalle) {
                            base.Control.CodigoTabCostoPersonalOtros = value.CodigoInvestigacionCostoDetalle;
                            base.Control.TxtCostoPersonalOtrosCosto().val(value.Costo);
                        }

                    });

                }
            }
        },
        AjaxBuscarTabCostoMedioambientalSuccess: function (resultado) {
            'use strict'
            if (resultado.Result.length > 0) {
                base.Control.CodigoTabCostoMedioambiental = resultado.Result[0].CodigoInvestigacionCosto
                base.Control.TxtCostoMedioambientalTotal().val(resultado.Result[0].CostoSubTotal);
                var ListaInvestigacionCostoDetalle = [];

                var codigoParametroPersonalUtilizado = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoMedioambientalPersonalUtilizado;
                var codigoParametroMaterialUtilizado = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoMedioambientalMaterialUtilizado;
                var codigoParametroDisposicion = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoMedioambientalDisposicionCosto;
                var codigoParametroRecuperacion = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoMedioambientalRecuperacionCosto;
                var codigoParametroOtros = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoMedioambientalOtros;

                ListaInvestigacionCostoDetalle = resultado.Result[0].ListaInvestigacionCostoDetalle;
                if (ListaInvestigacionCostoDetalle.length > 0) {
                    $.each(ListaInvestigacionCostoDetalle, function (index, value) {

                        if (codigoParametroPersonalUtilizado == value.CodigoTipoCostoDetalle) {
                            base.Control.CodigoTabCostoMedioambientalPersonalUtilizado = value.CodigoInvestigacionCostoDetalle;
                            base.Control.TxtCostoMedioambientalPersonalUtilizadoCantidad().val(value.Cantidad);
                            base.Control.TxtCostoMedioambientalPersonalUtilizadoTiempo().val(value.Tiempo);
                            base.Control.TxtCostoMedioambientalPersonalUtilizadoPrecioUnitario().val(value.PrecioUnitario);
                            base.Control.TxtCostoMedioambientalPersonalUtilizadoCosto().val(value.Costo);
                        }
                        if (codigoParametroMaterialUtilizado == value.CodigoTipoCostoDetalle) {
                            base.Control.CodigoTabCostoMedioambientalMaterialUtilizado = value.CodigoInvestigacionCostoDetalle;
                            base.Control.TxtCostoMedioambientalMaterialUtilizadoCosto().val(value.Costo);
                        }
                        if (codigoParametroDisposicion == value.CodigoTipoCostoDetalle) {
                            base.Control.CodigoTabCostoMedioambientalDisposicion = value.CodigoInvestigacionCostoDetalle;
                            base.Control.TxtCostoMedioambientalDisposicionCosto().val(value.Costo);
                        }
                        if (codigoParametroRecuperacion == value.CodigoTipoCostoDetalle) {
                            base.Control.CodigoTabCostoMedioambientalRecuperacion = value.CodigoInvestigacionCostoDetalle;
                            base.Control.TxtCostoMedioambientalRecuperacionCosto().val(value.Costo);
                        }
                        if (codigoParametroOtros == value.CodigoTipoCostoDetalle) {
                            base.Control.CodigoTabCostoMedioambientalOtros = value.CodigoInvestigacionCostoDetalle;
                            base.Control.TxtCostoMedioambientalOtrosCosto().val(value.Costo);
                        }

                    });

                }
            }
        },
        AjaxBuscarTabCostoImpactoComunidadSuccess: function (resultado) {
            'use strict'
            if (resultado.Result.length > 0) {
                base.Control.CodigoTabCostoImpactoComunidad = resultado.Result[0].CodigoInvestigacionCosto;
                base.Control.TxtCostoImpactoComunidadTotal().val(resultado.Result[0].CostoSubTotal);
            }
        },
        AjaxBuscarTabCostoDaniosPropiedadSuccess: function (resultado) {
            'use strict'
            if (resultado.Result.length > 0) {
                base.Control.CodigoTabCostoDaniosPropiedad = resultado.Result[0].CodigoInvestigacionCosto
                base.Control.TxtCostoDaniosPropiedadTotal().val(resultado.Result[0].CostoSubTotal);
                var ListaInvestigacionCostoDetalle = [];

                var codigoParametroPersonalUtilizado = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoDaniosPropiedadPersonalUtilizado;
                var codigoParametroEquipoUtilizado = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoDaniosPropiedadEquipoUtilizado;
                var codigoParametroMaterialUtilizado = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoDaniosPropiedadMaterialUtilizado;
                var codigoParametroCostoAlquiler = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoDaniosPropiedadCostoAlquiler;
                var codigoParametroCostoServicioExterno = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoDaniosPropiedadCostoServicioExterno;
                var codigoParametroOtros = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoDaniosPropiedadOtros;

                ListaInvestigacionCostoDetalle = resultado.Result[0].ListaInvestigacionCostoDetalle;

                if (ListaInvestigacionCostoDetalle.length > 0) {
                    $.each(ListaInvestigacionCostoDetalle, function (index, value) {

                        if (codigoParametroPersonalUtilizado == value.CodigoTipoCostoDetalle) {
                            base.Control.CodigoTabCostoDaniosPropiedadPersonalUtilizado = value.CodigoInvestigacionCostoDetalle;
                            base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoCosto().val(value.Costo);
                        }
                        if (codigoParametroEquipoUtilizado == value.CodigoTipoCostoDetalle) {
                            base.Control.CodigoTabCostoDaniosPropiedadEquipoUtilizado = value.CodigoInvestigacionCostoDetalle;
                            base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoCosto().val(value.Costo);
                        }
                        if (codigoParametroMaterialUtilizado == value.CodigoTipoCostoDetalle) {
                            base.Control.CodigoTabCostoDaniosPropiedadMaterialUtilizado = value.CodigoInvestigacionCostoDetalle;
                            base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoCosto().val(value.Costo);
                        }
                        if (codigoParametroCostoAlquiler == value.CodigoTipoCostoDetalle) {
                            base.Control.CodigoTabCostoDaniosPropiedadCostoAlquiler = value.CodigoInvestigacionCostoDetalle;
                            base.Control.TxtCostoDaniosPropiedadCostoAlquilerCosto().val(value.Costo);
                        }
                        if (codigoParametroCostoServicioExterno == value.CodigoTipoCostoDetalle) {
                            base.Control.CodigoTabCostoDaniosPropiedadCostoServicioExterno = value.CodigoInvestigacionCostoDetalle;
                            base.Control.TxtCostoDaniosPropiedadCostoServicioExternoCosto().val(value.Costo);
                        }
                        if (codigoParametroOtros == value.CodigoTipoCostoDetalle) {
                            base.Control.CodigoTabCostoDaniosPropiedaOtros = value.CodigoInvestigacionCostoDetalle;
                            base.Control.TxtCostoDaniosPropiedadOtrosCosto().val(value.Costo);
                        }


                    });

                }
            }
        },
        AjaxBuscarTabCostoPerdidaProcesoSuccess: function (resultado) {
            'use strict'
            if (resultado.Result.length > 0) {
                base.Control.CodigoTabCostoPerdidaProceso = resultado.Result[0].CodigoInvestigacionCosto
                base.Control.TxtCostoPerdidaProcesoTotal().val(resultado.Result[0].CostoSubTotal);
                var ListaInvestigacionCostoDetalle = [];

                var codigoParametroCostoProducto = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoPerdidaProcesoCostoProducto;
                var codigoParametroCostoServicio = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoPerdidaProcesoCostoServicio;
                var codigoParametroCostoOcasionadoEquipo = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoPerdidaProcesoCostoOcasionadoEquipo;
                var codigoParametroCostoOcasionadoPersonal = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoPerdidaProcesoCostoOcasionadoPersonal;
                var codigoParametroIncrementoSubContratacionCosto = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoPerdidaProcesoIncrementoSubContratacionCosto;
                var codigoParametroOtros = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoPerdidaProcesoOtros;

                ListaInvestigacionCostoDetalle = resultado.Result[0].ListaInvestigacionCostoDetalle;

                if (ListaInvestigacionCostoDetalle.length > 0) {
                    $.each(ListaInvestigacionCostoDetalle, function (index, value) {

                        if (codigoParametroCostoProducto == value.CodigoTipoCostoDetalle) {
                            base.Control.CodigoTabCostoPerdidaProcesoCostoProducto = value.CodigoInvestigacionCostoDetalle;
                            base.Control.TxtCostoPerdidaProcesoCostoProductoCosto().val(value.Costo);
                        }
                        if (codigoParametroCostoServicio == value.CodigoTipoCostoDetalle) {
                            base.Control.CodigoTabCostoPerdidaProcesoCostoServicio = value.CodigoInvestigacionCostoDetalle;
                            base.Control.TxtCostoPerdidaProcesoCostoServicioCosto().val(value.Costo);
                        }
                        if (codigoParametroCostoOcasionadoEquipo == value.CodigoTipoCostoDetalle) {
                            base.Control.CodigoTabCostoPerdidaProcesoCostoOcasionadoEquipo = value.CodigoInvestigacionCostoDetalle;
                            base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoCosto().val(value.Costo);
                        }
                        if (codigoParametroCostoOcasionadoPersonal == value.CodigoTipoCostoDetalle) {
                            base.Control.CodigoTabCostoPerdidaProcesoCostoOcasionadoPersonal = value.CodigoInvestigacionCostoDetalle;
                            base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalCosto().val(value.Costo);
                        }
                        if (codigoParametroIncrementoSubContratacionCosto == value.CodigoTipoCostoDetalle) {
                            base.Control.CodigoTabCostoPerdidaProcesoIncrementoHorasExtra = value.CodigoInvestigacionCostoDetalle;
                            base.Control.TxtCostoPerdidaProcesoIncrementoCosto().val(value.Costo);
                        }
                        if (codigoParametroOtros == value.CodigoTipoCostoDetalle) {
                            base.Control.CodigoTabCostoPerdidaProcesoOtros = value.CodigoInvestigacionCostoDetalle;
                            base.Control.TxtCostoPerdidaProcesoOtrosCosto().val(value.Costo);
                        }
                    });

                }
                base.Control.TxtCostoPerdidaProcesoIncrementoHorasExtraCosto().val('');
                base.Control.TxtCostoPerdidaProcesoIncrementoContratacionAdaptacionCosto().val('');
                base.Control.TxtCostoPerdidaProcesoIncrementoSubContratacionCosto().val('');
                base.Control.TxtCostoPerdidaProcesoIncrementoOtrosCosto().val('');
            }
        },
        AjaxBuscarTabCostoPrevencionSuccess: function (resultado) {
            'use strict'
            if (resultado.Result.length > 0) {
                base.Control.CodigoTabCostoPrevencion = resultado.Result[0].CodigoInvestigacionCosto
                base.Control.TxtCostoPrevencionTotal().val(resultado.Result[0].CostoSubTotal);
                var ListaInvestigacionCostoDetalle = [];

                var codigoParametroPrevencionMedidas = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoPrevencionMedidasCosto;
                var codigoParametroOtros = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoPrevencionOtros;

                ListaInvestigacionCostoDetalle = resultado.Result[0].ListaInvestigacionCostoDetalle;
                if (ListaInvestigacionCostoDetalle.length > 0) {
                    $.each(ListaInvestigacionCostoDetalle, function (index, value) {

                        if (codigoParametroPrevencionMedidas == value.CodigoTipoCostoDetalle) {
                            base.Control.CodigoTabCostoPrevencionMedidas = value.CodigoInvestigacionCostoDetalle;
                            base.Control.TxtCostoPrevencionMedidasCosto().val(value.Costo);
                        }
                        if (codigoParametroOtros == value.CodigoTipoCostoDetalle) {
                            base.Control.CodigoTabCostoPrevencionOtros = value.CodigoInvestigacionCostoDetalle;
                            base.Control.TxtCostoPrevencionOtrosCosto().val(value.Costo);
                        }

                    });

                }
            }
        },
        AjaxBuscarTabCostoOtrosSuccess: function (resultado) {
            'use strict'
            if (resultado.Result.length > 0) {
                base.Control.CodigoTabCostoOtros = resultado.Result[0].CodigoInvestigacionCosto;
                base.Control.TxtCostoOtrosTotal().val(resultado.Result[0].CostoSubTotal);
            }
        },


        BtnBuscarTabCostoInvestigacionTotalesClick: function () {
            'use strict'
            var filtro = {
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion
            };
            base.Ajax.AjaxBuscarTabCostoInvestigacionTotales.data = filtro;
            base.Ajax.AjaxBuscarTabCostoInvestigacionTotales.submit();
        },
        AjaxBuscarTabCostoInvestigacionTotalesSuccess: function (resultado) {
            'use strict'
            if (resultado.Result.length > 0) {
                var ListaInvestigacionCosto = [];

                var codigoParametroCostoInvestigacion = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoInvestigacion;
                var codigoParametroCostoPersonal = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoPersonal;
                var codigoParametroCostoMedioambiental = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoMedioambiental;
                var codigoParametroCostoImpactoComunidad = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoImpactoComunidad;
                var codigoParametroDaniosPropiedad = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoDaniosPropiedad;
                var codigoParametroPerdidaProceso = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoPerdidaProceso;
                var codigoParametroCodigoPrevencion = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoPrevencion;
                var codigoParametroOtros = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoCostoOtros;

                var TotalesCostoIncidencia = 0.00;
                var codigoParametroCostoInvestigacionTotal = 0.00;
                var codigoParametroCostoPersonalTotal = 0.00;
                var codigoParametroCostoMedioambientalTotal = 0.00;
                var codigoParametroCostoImpactoComunidadTotal = 0.00;
                var codigoParametroDaniosPropiedadTotal = 0.00;
                var codigoParametroPerdidaProcesoTotal = 0.00;
                var codigoParametroCodigoPrevencionTotal = 0.00;
                var codigoParametroOtrosTotal = 0.00;

                ListaInvestigacionCosto = resultado.Result;
                if (ListaInvestigacionCosto.length > 0) {
                    $.each(ListaInvestigacionCosto, function (index, value) {

                        if (codigoParametroCostoInvestigacion == value.CodigoTipoCostoIncidente) {
                            base.Control.TxtCostoTotalesInvestigacionCosto().val(value.CostoSubTotal);
                            if (isNaN(value.CostoSubTotal) != true) {
                                codigoParametroCostoInvestigacionTotal = value.CostoSubTotal;
                            }
                        }
                        if (codigoParametroCostoPersonal == value.CodigoTipoCostoIncidente) {
                            base.Control.TxtCostoTotalesPersonalCosto().val(value.CostoSubTotal);
                            if (isNaN(value.CostoSubTotal) != true) {
                                codigoParametroCostoPersonalTotal = value.CostoSubTotal;
                            }
                        }
                        if (codigoParametroCostoMedioambiental == value.CodigoTipoCostoIncidente) {
                            base.Control.TxtCostoTotalesMedioambientalCosto().val(value.CostoSubTotal);
                            if (isNaN(value.CostoSubTotal) != true) {
                                codigoParametroCostoMedioambientalTotal = value.CostoSubTotal;
                            }
                        }
                        if (codigoParametroCostoImpactoComunidad == value.CodigoTipoCostoIncidente) {
                            base.Control.TxtCostoTotalesImpactoComunidadCosto().val(value.CostoSubTotal);
                            if (isNaN(value.CostoSubTotal) != true) {
                                codigoParametroCostoImpactoComunidadTotal = value.CostoSubTotal;
                            }
                        }
                        if (codigoParametroDaniosPropiedad == value.CodigoTipoCostoIncidente) {
                            base.Control.TxtCostoTotalesDaniosPropiedadCosto().val(value.CostoSubTotal);
                            if (isNaN(value.CostoSubTotal) != true) {
                                codigoParametroDaniosPropiedadTotal = value.CostoSubTotal;
                            }
                        }
                        if (codigoParametroPerdidaProceso == value.CodigoTipoCostoIncidente) {
                            base.Control.TxtCostoTotalesPerdidaProcesoCosto().val(value.CostoSubTotal);
                            if (isNaN(value.CostoSubTotal) != true) {
                                codigoParametroPerdidaProcesoTotal = value.CostoSubTotal;
                            }
                        }
                        if (codigoParametroCodigoPrevencion == value.CodigoTipoCostoIncidente) {
                            base.Control.TxtCostoTotalesPrevencionCosto().val(value.CostoSubTotal);
                            if (isNaN(value.CostoSubTotal) != true) {
                                codigoParametroCodigoPrevencionTotal = value.CostoSubTotal;
                            }
                        }
                        if (codigoParametroOtros == value.CodigoTipoCostoIncidente) {
                            base.Control.TxtCostoTotalesOtrosCosto().val(value.CostoSubTotal);
                            if (isNaN(value.CostoSubTotal) != true) {
                                codigoParametroOtrosTotal = value.CostoSubTotal;
                            }
                        }


                    });
                    TotalesCostoIncidencia = parseFloat(codigoParametroCostoInvestigacionTotal) + parseFloat(codigoParametroCostoPersonalTotal) + parseFloat(codigoParametroCostoMedioambientalTotal) + parseFloat(codigoParametroCostoImpactoComunidadTotal) +
                        parseFloat(codigoParametroDaniosPropiedadTotal) + parseFloat(codigoParametroPerdidaProcesoTotal) + parseFloat(codigoParametroCodigoPrevencionTotal) + parseFloat(codigoParametroOtrosTotal);

                    base.Control.TxtCostoTotalesTotal().val(TotalesCostoIncidencia);
                }
            }

        },

        BtnAgregarCostoInvestigacionTrabajadorInvolucradoClick: function (e) {
            e.preventDefault();
            var resultado = true;
            base.Control.UltimoRegistroGridCostoInvestigacionTrabajadorInvolucrado++;
            var listaApellidosNombres = $('input[name=costoinvestigaciontrabajadorinvolucradoapellidosnombres]');
            var listaDocIdentidad = $('input[name=costoinvestigaciontrabajadorinvolucradodocidentidad]');
            var listaEmpresa = $('input[name=costoinvestigaciontrabajadorinvolucradoempresa]');
            var listaCantidad = $('input[name=ClassCostoInvestigacionTrabajadorInvolucradoCantidad]');
            var listaTiempo = $('input[name=ClassCostoInvestigacionTrabajadorInvolucradoTiempo]');
            var listaPrecioUnitario = $('input[name=ClassCostoInvestigacionTrabajadorInvolucradoPrecioUnitario]');
            var listaCosto = $('input[name=ClassCostoInvestigacionTrabajadorInvolucradoCostoUSS]');

            var listaGrabar = new Array();
            for (var i = 0; i < listaApellidosNombres.length; i++) {
                if (listaApellidosNombres[i].value == null || listaApellidosNombres[i].value == "" ||
                    listaDocIdentidad[i].value == null || listaDocIdentidad[i].value == "" ||
                    listaEmpresa[i].value == null || listaEmpresa[i].value == "" ||
                    listaCantidad[i].value == null || listaCantidad[i].value == "" ||
                    listaTiempo[i].value == null || listaTiempo[i].value == "" ||
                    listaPrecioUnitario[i].value == null || listaPrecioUnitario[i].value == "" ||
                    listaCosto[i].value == null || listaCosto[i].value == ""
                ) {
                    resultado = false;
                    return false;
                }
            }


            if (resultado == true) {
                if (base.Control.GrdResultadoTabCostoInvestigacionTrabajadorInvolucrado.core.rows().data().length == 0) {
                    base.Control.TxtCostoInvestigacionTrabajadorInvolucradoCantidad().val('');
                    base.Control.TxtCostoInvestigacionTrabajadorInvolucradoTiempo().val('');
                    base.Control.TxtCostoInvestigacionTrabajadorInvolucradoPrecioUnitario().val('');
                    base.Control.TxtCostoInvestigacionTrabajadorInvolucradoCosto().val('');
                }
                base.Control.GrdResultadoTabCostoInvestigacionTrabajadorInvolucrado.core.row.add({
                    ApellidosNombres: '',
                    DocIdentidad: '',
                    Empresa: '',
                    Cantidad: '',
                    Tiempo: '',
                    PrecioUnitario: '',
                    Costo: '',

                }).draw(false);

                base.Control.TxtCostoInvestigacionTrabajadorInvolucradoCantidad().prop('disabled', true);
                base.Control.TxtCostoInvestigacionTrabajadorInvolucradoTiempo().prop('disabled', true);
                base.Control.TxtCostoInvestigacionTrabajadorInvolucradoPrecioUnitario().prop('disabled', true);
                base.Control.TxtCostoInvestigacionTrabajadorInvolucradoCosto().prop('disabled', true);

            }
        },
        BtnBuscarCostoInvestigacionTrabajadorInvolucradoClick: function () {
            $("#divGrdResultadoTabCostoInvestigacionTrabajadorInvolucrado").html("");
            base.Function.CrearGridCostoInvestigacionTrabajadorInvolucrado();
            var filtro = {};
            base.Control.GrdResultadoTabCostoInvestigacionTrabajadorInvolucrado.Load(filtro);
        },
        BtnGridEliminarCostoInvestigacionTrabajadorInvolucradoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                onAccept: function () {
                    base.Control.GrdResultadoTabCostoInvestigacionTrabajadorInvolucrado.core.row(row[0]).remove().draw(false);
                    var acumCosto = 0.00;
                    $.each(document.getElementsByName("ClassCostoInvestigacionTrabajadorInvolucradoCostoUSS"), function (index, value) {
                        if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
                            acumCosto += parseFloat($(this).val());
                        }
                    });

                    base.Control.TxtCostoInvestigacionTrabajadorInvolucradoCosto().val(acumCosto);

                    if (acumCosto == 0) {
                        base.Control.TxtCostoInvestigacionTrabajadorInvolucradoCantidad().prop('disabled', false);
                        base.Control.TxtCostoInvestigacionTrabajadorInvolucradoTiempo().prop('disabled', false);
                        base.Control.TxtCostoInvestigacionTrabajadorInvolucradoPrecioUnitario().prop('disabled', false);
                        base.Control.TxtCostoInvestigacionTrabajadorInvolucradoCosto().prop('disabled', false);
                        base.Control.TxtCostoInvestigacionTrabajadorInvolucradoCosto().val('');
                    } else {
                        base.Control.TxtCostoInvestigacionTrabajadorInvolucradoCantidad().prop('disabled', true);
                        base.Control.TxtCostoInvestigacionTrabajadorInvolucradoTiempo().prop('disabled', true);
                        base.Control.TxtCostoInvestigacionTrabajadorInvolucradoPrecioUnitario().prop('disabled', true);
                        base.Control.TxtCostoInvestigacionTrabajadorInvolucradoCosto().prop('disabled', true);
                    }

                }
            });
        },
        CalcularCostoInvestigacionTrabajadorInvolucradoCostoUSS: function () {
            var acumCosto = 0.00;
            var acumErrorSintaxis = false;
            var CostoInvestigacionTrabajadorInvolucradoCantidad = 0;
            var CostoInvestigacionTrabajadorInvolucradoTiempo = 0;
            var CostoInvestigacionTrabajadorInvolucradoPrecioUnitario = 0.00;
            var CostoInvestigacionTrabajadorInvolucradoCostoUSS = 0.00;
            CostoInvestigacionTrabajadorInvolucradoCantidad = $('#txtCostoInvestigacionTrabajadorInvolucradoCantidad_' + $(this).data().nrofila).val();
            CostoInvestigacionTrabajadorInvolucradoTiempo = $('#txtCostoInvestigacionTrabajadorInvolucradoTiempo_' + $(this).data().nrofila).val();
            CostoInvestigacionTrabajadorInvolucradoPrecioUnitario = $('#txtCostoInvestigacionTrabajadorInvolucradoPrecioUnitario_' + $(this).data().nrofila).val();

            if (isNaN(CostoInvestigacionTrabajadorInvolucradoCantidad) == true) {
                $('#txtCostoInvestigacionTrabajadorInvolucradoCantidad_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoInvestigacionTrabajadorInvolucradoCantidad_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoInvestigacionTrabajadorInvolucradoCantidad_' + $(this).data().nrofila).removeClass("hasError");
            }
            if (isNaN(CostoInvestigacionTrabajadorInvolucradoTiempo) == true) {
                $('#txtCostoInvestigacionTrabajadorInvolucradoTiempo_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoInvestigacionTrabajadorInvolucradoTiempo_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoInvestigacionTrabajadorInvolucradoTiempo_' + $(this).data().nrofila).removeClass("hasError");
            }

            if (isNaN(CostoInvestigacionTrabajadorInvolucradoPrecioUnitario) == true) {
                $('#txtCostoInvestigacionTrabajadorInvolucradoPrecioUnitario_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoInvestigacionTrabajadorInvolucradoPrecioUnitario_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoInvestigacionTrabajadorInvolucradoPrecioUnitario_' + $(this).data().nrofila).removeClass("hasError");
            }
            if (acumErrorSintaxis == false) {
                CostoInvestigacionTrabajadorInvolucradoCostoUSS = base.Function.roundNumber((CostoInvestigacionTrabajadorInvolucradoCantidad * CostoInvestigacionTrabajadorInvolucradoTiempo * CostoInvestigacionTrabajadorInvolucradoPrecioUnitario), 2);

                $('#txtCostoInvestigacionTrabajadorInvolucradoCostoUSS_' + $(this).data().nrofila).val(CostoInvestigacionTrabajadorInvolucradoCostoUSS);


                $.each(document.getElementsByName("ClassCostoInvestigacionTrabajadorInvolucradoCostoUSS"), function (index, value) {
                    if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
                        acumCosto += parseFloat($(this).val());
                    }
                });
                base.Control.TxtCostoInvestigacionTrabajadorInvolucradoCosto().val(acumCosto);
            }
        },
        CalcularCabeceraCostoInvestigacionTrabajadorInvolucrado: function () {
            var valorTxtCostoInvestigacionTrabajadorInvolucradoCantidad = 0;
            var valorTxtCostoInvestigacionTrabajadorInvolucradoTiempo = 0;
            var valorTxtCostoInvestigacionTrabajadorInvolucradoPrecioUnitario = 0;

            if (base.Control.TxtCostoInvestigacionTrabajadorInvolucradoCantidad().val() == '') {
                base.Control.TxtCostoInvestigacionTrabajadorInvolucradoCantidad().addClass("hasError");
                valorTxtCostoInvestigacionTrabajadorInvolucradoCantidad = 0;
            } else {
                base.Control.TxtCostoInvestigacionTrabajadorInvolucradoCantidad().removeClass("hasError");
                valorTxtCostoInvestigacionTrabajadorInvolucradoCantidad = base.Control.TxtCostoInvestigacionTrabajadorInvolucradoCantidad().val();
            }
            if (base.Control.TxtCostoInvestigacionTrabajadorInvolucradoTiempo().val() == '') {
                base.Control.TxtCostoInvestigacionTrabajadorInvolucradoTiempo().addClass("hasError");
                valorTxtCostoInvestigacionTrabajadorInvolucradoTiempo = 0;
            } else {
                base.Control.TxtCostoInvestigacionTrabajadorInvolucradoTiempo().removeClass("hasError");
                valorTxtCostoInvestigacionTrabajadorInvolucradoTiempo = base.Control.TxtCostoInvestigacionTrabajadorInvolucradoTiempo().val();
            }

            if (base.Control.TxtCostoInvestigacionTrabajadorInvolucradoPrecioUnitario().val() == '') {
                base.Control.TxtCostoInvestigacionTrabajadorInvolucradoPrecioUnitario().addClass("hasError");
                valorTxtCostoInvestigacionTrabajadorInvolucradoPrecioUnitario = 0;
            } else {
                base.Control.TxtCostoInvestigacionTrabajadorInvolucradoPrecioUnitario().removeClass("hasError");
                valorTxtCostoInvestigacionTrabajadorInvolucradoPrecioUnitario = base.Control.TxtCostoInvestigacionTrabajadorInvolucradoPrecioUnitario().val();
            }

            base.Control.TxtCostoInvestigacionTrabajadorInvolucradoCosto().val(valorTxtCostoInvestigacionTrabajadorInvolucradoCantidad * valorTxtCostoInvestigacionTrabajadorInvolucradoTiempo * valorTxtCostoInvestigacionTrabajadorInvolucradoPrecioUnitario)

        },
        TxtCostoInvestigacionTrabajadorInvolucradoCantidadKeyup: function () {
            base.Event.CalcularCabeceraCostoInvestigacionTrabajadorInvolucrado();
        },
        TxtCostoInvestigacionTrabajadorInvolucradoTiempoKeyup: function () {
            base.Event.CalcularCabeceraCostoInvestigacionTrabajadorInvolucrado();
        },
        TxtCostoInvestigacionTrabajadorInvolucradoPrecioUnitarioKeyup: function () {
            base.Event.CalcularCabeceraCostoInvestigacionTrabajadorInvolucrado();
        },
        TxtCostoInvestigacionTrabajadorInvolucradoCostoKeyup: function () {
            base.Control.TxtCostoInvestigacionTrabajadorInvolucradoCantidad().val('');
            base.Control.TxtCostoInvestigacionTrabajadorInvolucradoTiempo().val('');
            base.Control.TxtCostoInvestigacionTrabajadorInvolucradoPrecioUnitario().val('');
            base.Control.TxtCostoInvestigacionTrabajadorInvolucradoCantidad().removeClass("hasError");
            base.Control.TxtCostoInvestigacionTrabajadorInvolucradoTiempo().removeClass("hasError");
            base.Control.TxtCostoInvestigacionTrabajadorInvolucradoPrecioUnitario().removeClass("hasError");


            base.Control.TxtCostoInvestigacionTotal().val();
        },

        BtnAgregarCostoInvestigacionSupervisorClick: function (e) {
            e.preventDefault();
            var resultado = true;
            base.Control.UltimoRegistroGridCostoInvestigacionSupervisor++;
            var listaApellidosNombres = $('input[name=costoinvestigacionSupervisorapellidosnombres]');
            var listaDocIdentidad = $('input[name=costoinvestigacionSupervisordocidentidad]');
            var listaEmpresa = $('input[name=costoinvestigacionSupervisorempresa]');
            var listaCantidad = $('input[name=ClassCostoInvestigacionSupervisorCantidad]');
            var listaTiempo = $('input[name=ClassCostoInvestigacionSupervisorTiempo]');
            var listaPrecioUnitario = $('input[name=ClassCostoInvestigacionSupervisorPrecioUnitario]');
            var listaCosto = $('input[name=ClassCostoInvestigacionSupervisorCostoUSS]');

            var listaGrabar = new Array();
            for (var i = 0; i < listaApellidosNombres.length; i++) {
                if (listaApellidosNombres[i].value == null || listaApellidosNombres[i].value == "" ||
                    listaDocIdentidad[i].value == null || listaDocIdentidad[i].value == "" ||
                    listaEmpresa[i].value == null || listaEmpresa[i].value == "" ||
                    listaCantidad[i].value == null || listaCantidad[i].value == "" ||
                    listaTiempo[i].value == null || listaTiempo[i].value == "" ||
                    listaPrecioUnitario[i].value == null || listaPrecioUnitario[i].value == "" ||
                    listaCosto[i].value == null || listaCosto[i].value == ""
                ) {
                    resultado = false;
                    return false;
                }
            }


            if (resultado == true) {
                if (base.Control.GrdResultadoTabCostoInvestigacionSupervisor.core.rows().data().length == 0) {
                    base.Control.TxtCostoInvestigacionSupervisorCantidad().val('');
                    base.Control.TxtCostoInvestigacionSupervisorTiempo().val('');
                    base.Control.TxtCostoInvestigacionSupervisorPrecioUnitario().val('');
                    base.Control.TxtCostoInvestigacionSupervisorCosto().val('');
                }
                base.Control.GrdResultadoTabCostoInvestigacionSupervisor.core.row.add({
                    ApellidosNombres: '',
                    DocIdentidad: '',
                    Empresa: '',
                    Cantidad: '',
                    Tiempo: '',
                    PrecioUnitario: '',
                    Costo: '',

                }).draw(false);

                base.Control.TxtCostoInvestigacionSupervisorCantidad().prop('disabled', true);
                base.Control.TxtCostoInvestigacionSupervisorTiempo().prop('disabled', true);
                base.Control.TxtCostoInvestigacionSupervisorPrecioUnitario().prop('disabled', true);
                base.Control.TxtCostoInvestigacionSupervisorCosto().prop('disabled', true);

            }
        },
        BtnBuscarCostoInvestigacionSupervisorClick: function () {
            $("#divGrdResultadoTabCostoInvestigacionSupervisor").html("");
            base.Function.CrearGridCostoInvestigacionSupervisor();
            var filtro = {};
            base.Control.GrdResultadoTabCostoInvestigacionSupervisor.Load(filtro);
        },
        BtnGridEliminarCostoInvestigacionSupervisorClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                onAccept: function () {
                    base.Control.GrdResultadoTabCostoInvestigacionSupervisor.core.row(row[0]).remove().draw(false);
                    var acumCosto = 0.00;
                    $.each(document.getElementsByName("ClassCostoInvestigacionSupervisorCostoUSS"), function (index, value) {
                        if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
                            acumCosto += parseFloat($(this).val());
                        }
                    });

                    base.Control.TxtCostoInvestigacionSupervisorCosto().val(acumCosto);

                    if (acumCosto == 0) {
                        base.Control.TxtCostoInvestigacionSupervisorCantidad().prop('disabled', false);
                        base.Control.TxtCostoInvestigacionSupervisorTiempo().prop('disabled', false);
                        base.Control.TxtCostoInvestigacionSupervisorPrecioUnitario().prop('disabled', false);
                        base.Control.TxtCostoInvestigacionSupervisorCosto().prop('disabled', false);
                        base.Control.TxtCostoInvestigacionSupervisorCosto().val('');
                    } else {
                        base.Control.TxtCostoInvestigacionSupervisorCantidad().prop('disabled', true);
                        base.Control.TxtCostoInvestigacionSupervisorTiempo().prop('disabled', true);
                        base.Control.TxtCostoInvestigacionSupervisorPrecioUnitario().prop('disabled', true);
                        base.Control.TxtCostoInvestigacionSupervisorCosto().prop('disabled', true);
                    }

                }
            });
        },
        CalcularCostoInvestigacionSupervisorCostoUSS: function () {
            var acumCosto = 0.00;
            var acumErrorSintaxis = false;
            var CostoInvestigacionSupervisorCantidad = 0;
            var CostoInvestigacionSupervisorTiempo = 0;
            var CostoInvestigacionSupervisorPrecioUnitario = 0.00;
            var CostoInvestigacionSupervisorCostoUSS = 0.00;
            CostoInvestigacionSupervisorCantidad = $('#txtCostoInvestigacionSupervisorCantidad_' + $(this).data().nrofila).val();
            CostoInvestigacionSupervisorTiempo = $('#txtCostoInvestigacionSupervisorTiempo_' + $(this).data().nrofila).val();
            CostoInvestigacionSupervisorPrecioUnitario = $('#txtCostoInvestigacionSupervisorPrecioUnitario_' + $(this).data().nrofila).val();

            if (isNaN(CostoInvestigacionSupervisorCantidad) == true) {
                $('#txtCostoInvestigacionSupervisorCantidad_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoInvestigacionSupervisorCantidad_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoInvestigacionSupervisorCantidad_' + $(this).data().nrofila).removeClass("hasError");
            }
            if (isNaN(CostoInvestigacionSupervisorTiempo) == true) {
                $('#txtCostoInvestigacionSupervisorTiempo_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoInvestigacionSupervisorTiempo_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoInvestigacionSupervisorTiempo_' + $(this).data().nrofila).removeClass("hasError");
            }

            if (isNaN(CostoInvestigacionSupervisorPrecioUnitario) == true) {
                $('#txtCostoInvestigacionSupervisorPrecioUnitario_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoInvestigacionSupervisorPrecioUnitario_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoInvestigacionSupervisorPrecioUnitario_' + $(this).data().nrofila).removeClass("hasError");
            }
            if (acumErrorSintaxis == false) {
                CostoInvestigacionSupervisorCostoUSS = base.Function.roundNumber((CostoInvestigacionSupervisorCantidad * CostoInvestigacionSupervisorTiempo * CostoInvestigacionSupervisorPrecioUnitario), 2);

                $('#txtCostoInvestigacionSupervisorCostoUSS_' + $(this).data().nrofila).val(CostoInvestigacionSupervisorCostoUSS);


                $.each(document.getElementsByName("ClassCostoInvestigacionSupervisorCostoUSS"), function (index, value) {
                    if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
                        acumCosto += parseFloat($(this).val());
                    }
                });
                base.Control.TxtCostoInvestigacionSupervisorCosto().val(acumCosto);
            }
        },
        CalcularCabeceraCostoInvestigacionSupervisor: function () {
            var valorTxtCostoInvestigacionSupervisorCantidad = 0;
            var valorTxtCostoInvestigacionSupervisorTiempo = 0;
            var valorTxtCostoInvestigacionSupervisorPrecioUnitario = 0;

            if (base.Control.TxtCostoInvestigacionSupervisorCantidad().val() == '') {
                base.Control.TxtCostoInvestigacionSupervisorCantidad().addClass("hasError");
                valorTxtCostoInvestigacionSupervisorCantidad = 0;
            } else {
                base.Control.TxtCostoInvestigacionSupervisorCantidad().removeClass("hasError");
                valorTxtCostoInvestigacionSupervisorCantidad = base.Control.TxtCostoInvestigacionSupervisorCantidad().val();
            }
            if (base.Control.TxtCostoInvestigacionSupervisorTiempo().val() == '') {
                base.Control.TxtCostoInvestigacionSupervisorTiempo().addClass("hasError");
                valorTxtCostoInvestigacionSupervisorTiempo = 0;
            } else {
                base.Control.TxtCostoInvestigacionSupervisorTiempo().removeClass("hasError");
                valorTxtCostoInvestigacionSupervisorTiempo = base.Control.TxtCostoInvestigacionSupervisorTiempo().val();
            }

            if (base.Control.TxtCostoInvestigacionSupervisorPrecioUnitario().val() == '') {
                base.Control.TxtCostoInvestigacionSupervisorPrecioUnitario().addClass("hasError");
                valorTxtCostoInvestigacionSupervisorPrecioUnitario = 0;
            } else {
                base.Control.TxtCostoInvestigacionSupervisorPrecioUnitario().removeClass("hasError");
                valorTxtCostoInvestigacionSupervisorPrecioUnitario = base.Control.TxtCostoInvestigacionSupervisorPrecioUnitario().val();
            }

            base.Control.TxtCostoInvestigacionSupervisorCosto().val(valorTxtCostoInvestigacionSupervisorCantidad * valorTxtCostoInvestigacionSupervisorTiempo * valorTxtCostoInvestigacionSupervisorPrecioUnitario)

        },
        TxtCostoInvestigacionSupervisorCantidadKeyup: function () {
            base.Event.CalcularCabeceraCostoInvestigacionSupervisor();
        },
        TxtCostoInvestigacionSupervisorTiempoKeyup: function () {
            base.Event.CalcularCabeceraCostoInvestigacionSupervisor();
        },
        TxtCostoInvestigacionSupervisorPrecioUnitarioKeyup: function () {
            base.Event.CalcularCabeceraCostoInvestigacionSupervisor();
        },
        TxtCostoInvestigacionSupervisorCostoKeyup: function () {
            base.Control.TxtCostoInvestigacionSupervisorCantidad().val('');
            base.Control.TxtCostoInvestigacionSupervisorTiempo().val('');
            base.Control.TxtCostoInvestigacionSupervisorPrecioUnitario().val('');
            base.Control.TxtCostoInvestigacionSupervisorCantidad().removeClass("hasError");
            base.Control.TxtCostoInvestigacionSupervisorTiempo().removeClass("hasError");
            base.Control.TxtCostoInvestigacionSupervisorPrecioUnitario().removeClass("hasError");
        },

        BtnAgregarCostoInvestigacionDeclaracionTestigoClick: function (e) {
            e.preventDefault();
            var resultado = true;
            base.Control.UltimoRegistroGridCostoInvestigacionDeclaracionTestigo++;
            var listaApellidosNombres = $('input[name=costoinvestigacionDeclaracionTestigoapellidosnombres]');
            var listaDocIdentidad = $('input[name=costoinvestigacionDeclaracionTestigodocidentidad]');
            var listaEmpresa = $('input[name=costoinvestigacionDeclaracionTestigoempresa]');
            var listaCantidad = $('input[name=ClassCostoInvestigacionDeclaracionTestigoCantidad]');
            var listaTiempo = $('input[name=ClassCostoInvestigacionDeclaracionTestigoTiempo]');
            var listaPrecioUnitario = $('input[name=ClassCostoInvestigacionDeclaracionTestigoPrecioUnitario]');
            var listaCosto = $('input[name=ClassCostoInvestigacionDeclaracionTestigoCostoUSS]');

            var listaGrabar = new Array();
            for (var i = 0; i < listaApellidosNombres.length; i++) {
                if (listaApellidosNombres[i].value == null || listaApellidosNombres[i].value == "" ||
                    listaDocIdentidad[i].value == null || listaDocIdentidad[i].value == "" ||
                    listaEmpresa[i].value == null || listaEmpresa[i].value == "" ||
                    listaCantidad[i].value == null || listaCantidad[i].value == "" ||
                    listaTiempo[i].value == null || listaTiempo[i].value == "" ||
                    listaPrecioUnitario[i].value == null || listaPrecioUnitario[i].value == "" ||
                    listaCosto[i].value == null || listaCosto[i].value == ""
                ) {
                    resultado = false;
                    return false;
                }
            }


            if (resultado == true) {
                if (base.Control.GrdResultadoTabCostoInvestigacionDeclaracionTestigo.core.rows().data().length == 0) {
                    base.Control.TxtCostoInvestigacionDeclaracionTestigoCantidad().val('');
                    base.Control.TxtCostoInvestigacionDeclaracionTestigoTiempo().val('');
                    base.Control.TxtCostoInvestigacionDeclaracionTestigoPrecioUnitario().val('');
                    base.Control.TxtCostoInvestigacionDeclaracionTestigoCosto().val('');
                }
                base.Control.GrdResultadoTabCostoInvestigacionDeclaracionTestigo.core.row.add({
                    ApellidosNombres: '',
                    DocIdentidad: '',
                    Empresa: '',
                    Cantidad: '',
                    Tiempo: '',
                    PrecioUnitario: '',
                    Costo: '',

                }).draw(false);

                base.Control.TxtCostoInvestigacionDeclaracionTestigoCantidad().prop('disabled', true);
                base.Control.TxtCostoInvestigacionDeclaracionTestigoTiempo().prop('disabled', true);
                base.Control.TxtCostoInvestigacionDeclaracionTestigoPrecioUnitario().prop('disabled', true);
                base.Control.TxtCostoInvestigacionDeclaracionTestigoCosto().prop('disabled', true);

            }
        },
        BtnBuscarCostoInvestigacionDeclaracionTestigoClick: function () {
            $("#divGrdResultadoTabCostoInvestigacionDeclaracionTestigo").html("");
            base.Function.CrearGridCostoInvestigacionDeclaracionTestigo();
            var filtro = {};
            base.Control.GrdResultadoTabCostoInvestigacionDeclaracionTestigo.Load(filtro);
        },
        BtnGridEliminarCostoInvestigacionDeclaracionTestigoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                onAccept: function () {
                    base.Control.GrdResultadoTabCostoInvestigacionDeclaracionTestigo.core.row(row[0]).remove().draw(false);
                    var acumCosto = 0.00;
                    $.each(document.getElementsByName("ClassCostoInvestigacionDeclaracionTestigoCostoUSS"), function (index, value) {
                        if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
                            acumCosto += parseFloat($(this).val());
                        }
                    });

                    base.Control.TxtCostoInvestigacionDeclaracionTestigoCosto().val(acumCosto);

                    if (acumCosto == 0) {
                        base.Control.TxtCostoInvestigacionDeclaracionTestigoCantidad().prop('disabled', false);
                        base.Control.TxtCostoInvestigacionDeclaracionTestigoTiempo().prop('disabled', false);
                        base.Control.TxtCostoInvestigacionDeclaracionTestigoPrecioUnitario().prop('disabled', false);
                        base.Control.TxtCostoInvestigacionDeclaracionTestigoCosto().prop('disabled', false);
                        base.Control.TxtCostoInvestigacionDeclaracionTestigoCosto().val('');
                    } else {
                        base.Control.TxtCostoInvestigacionDeclaracionTestigoCantidad().prop('disabled', true);
                        base.Control.TxtCostoInvestigacionDeclaracionTestigoTiempo().prop('disabled', true);
                        base.Control.TxtCostoInvestigacionDeclaracionTestigoPrecioUnitario().prop('disabled', true);
                        base.Control.TxtCostoInvestigacionDeclaracionTestigoCosto().prop('disabled', true);
                    }

                }
            });
        },
        CalcularCostoInvestigacionDeclaracionTestigoCostoUSS: function () {
            var acumCosto = 0.00;
            var acumErrorSintaxis = false;
            var CostoInvestigacionDeclaracionTestigoCantidad = 0;
            var CostoInvestigacionDeclaracionTestigoTiempo = 0;
            var CostoInvestigacionDeclaracionTestigoPrecioUnitario = 0.00;
            var CostoInvestigacionDeclaracionTestigoCostoUSS = 0.00;
            CostoInvestigacionDeclaracionTestigoCantidad = $('#txtCostoInvestigacionDeclaracionTestigoCantidad_' + $(this).data().nrofila).val();
            CostoInvestigacionDeclaracionTestigoTiempo = $('#txtCostoInvestigacionDeclaracionTestigoTiempo_' + $(this).data().nrofila).val();
            CostoInvestigacionDeclaracionTestigoPrecioUnitario = $('#txtCostoInvestigacionDeclaracionTestigoPrecioUnitario_' + $(this).data().nrofila).val();

            if (isNaN(CostoInvestigacionDeclaracionTestigoCantidad) == true) {
                $('#txtCostoInvestigacionDeclaracionTestigoCantidad_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoInvestigacionDeclaracionTestigoCantidad_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoInvestigacionDeclaracionTestigoCantidad_' + $(this).data().nrofila).removeClass("hasError");
            }
            if (isNaN(CostoInvestigacionDeclaracionTestigoTiempo) == true) {
                $('#txtCostoInvestigacionDeclaracionTestigoTiempo_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoInvestigacionDeclaracionTestigoTiempo_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoInvestigacionDeclaracionTestigoTiempo_' + $(this).data().nrofila).removeClass("hasError");
            }

            if (isNaN(CostoInvestigacionDeclaracionTestigoPrecioUnitario) == true) {
                $('#txtCostoInvestigacionDeclaracionTestigoPrecioUnitario_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoInvestigacionDeclaracionTestigoPrecioUnitario_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoInvestigacionDeclaracionTestigoPrecioUnitario_' + $(this).data().nrofila).removeClass("hasError");
            }
            if (acumErrorSintaxis == false) {
                CostoInvestigacionDeclaracionTestigoCostoUSS = base.Function.roundNumber((CostoInvestigacionDeclaracionTestigoCantidad * CostoInvestigacionDeclaracionTestigoTiempo * CostoInvestigacionDeclaracionTestigoPrecioUnitario), 2);

                $('#txtCostoInvestigacionDeclaracionTestigoCostoUSS_' + $(this).data().nrofila).val(CostoInvestigacionDeclaracionTestigoCostoUSS);


                $.each(document.getElementsByName("ClassCostoInvestigacionDeclaracionTestigoCostoUSS"), function (index, value) {
                    if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
                        acumCosto += parseFloat($(this).val());
                    }
                });
                base.Control.TxtCostoInvestigacionDeclaracionTestigoCosto().val(acumCosto);
            }
        },
        CalcularCabeceraCostoInvestigacionDeclaracionTestigo: function () {
            var valorTxtCostoInvestigacionDeclaracionTestigoCantidad = 0;
            var valorTxtCostoInvestigacionDeclaracionTestigoTiempo = 0;
            var valorTxtCostoInvestigacionDeclaracionTestigoPrecioUnitario = 0;

            if (base.Control.TxtCostoInvestigacionDeclaracionTestigoCantidad().val() == '') {
                base.Control.TxtCostoInvestigacionDeclaracionTestigoCantidad().addClass("hasError");
                valorTxtCostoInvestigacionDeclaracionTestigoCantidad = 0;
            } else {
                base.Control.TxtCostoInvestigacionDeclaracionTestigoCantidad().removeClass("hasError");
                valorTxtCostoInvestigacionDeclaracionTestigoCantidad = base.Control.TxtCostoInvestigacionDeclaracionTestigoCantidad().val();
            }
            if (base.Control.TxtCostoInvestigacionDeclaracionTestigoTiempo().val() == '') {
                base.Control.TxtCostoInvestigacionDeclaracionTestigoTiempo().addClass("hasError");
                valorTxtCostoInvestigacionDeclaracionTestigoTiempo = 0;
            } else {
                base.Control.TxtCostoInvestigacionDeclaracionTestigoTiempo().removeClass("hasError");
                valorTxtCostoInvestigacionDeclaracionTestigoTiempo = base.Control.TxtCostoInvestigacionDeclaracionTestigoTiempo().val();
            }

            if (base.Control.TxtCostoInvestigacionDeclaracionTestigoPrecioUnitario().val() == '') {
                base.Control.TxtCostoInvestigacionDeclaracionTestigoPrecioUnitario().addClass("hasError");
                valorTxtCostoInvestigacionDeclaracionTestigoPrecioUnitario = 0;
            } else {
                base.Control.TxtCostoInvestigacionDeclaracionTestigoPrecioUnitario().removeClass("hasError");
                valorTxtCostoInvestigacionDeclaracionTestigoPrecioUnitario = base.Control.TxtCostoInvestigacionDeclaracionTestigoPrecioUnitario().val();
            }

            base.Control.TxtCostoInvestigacionDeclaracionTestigoCosto().val(valorTxtCostoInvestigacionDeclaracionTestigoCantidad * valorTxtCostoInvestigacionDeclaracionTestigoTiempo * valorTxtCostoInvestigacionDeclaracionTestigoPrecioUnitario)

        },
        TxtCostoInvestigacionDeclaracionTestigoCantidadKeyup: function () {
            base.Event.CalcularCabeceraCostoInvestigacionDeclaracionTestigo();
        },
        TxtCostoInvestigacionDeclaracionTestigoTiempoKeyup: function () {
            base.Event.CalcularCabeceraCostoInvestigacionDeclaracionTestigo();
        },
        TxtCostoInvestigacionDeclaracionTestigoPrecioUnitarioKeyup: function () {
            base.Event.CalcularCabeceraCostoInvestigacionDeclaracionTestigo();
        },
        TxtCostoInvestigacionDeclaracionTestigoCostoKeyup: function () {
            base.Control.TxtCostoInvestigacionDeclaracionTestigoCantidad().val('');
            base.Control.TxtCostoInvestigacionDeclaracionTestigoTiempo().val('');
            base.Control.TxtCostoInvestigacionDeclaracionTestigoPrecioUnitario().val('');
            base.Control.TxtCostoInvestigacionDeclaracionTestigoCantidad().removeClass("hasError");
            base.Control.TxtCostoInvestigacionDeclaracionTestigoTiempo().removeClass("hasError");
            base.Control.TxtCostoInvestigacionDeclaracionTestigoPrecioUnitario().removeClass("hasError");
        },

        //Tab de Costos Personal
        BtnAgregarCostoPersonalTrabajadorInvolucradoClick: function (e) {
            e.preventDefault();
            var resultado = true;
            base.Control.UltimoRegistroGridCostoPersonalTrabajadorInvolucrado++;
            var listaApellidosNombres = $('input[name=costoPersonalTrabajadorInvolucradoapellidosnombres]');
            var listaDocIdentidad = $('input[name=costoPersonalTrabajadorInvolucradodocidentidad]');
            var listaEmpresa = $('input[name=costoPersonalTrabajadorInvolucradoempresa]');
            var listaPuestoTrabajo = $('input[name=costoPersonalTrabajadorInvolucradopuestotrabajo]');
            var listaSufrioLesion = $('input[name=costoPersonalTrabajadorInvolucradosufriolesion]');
            var listaTiempo = $('input[name=ClassCostoPersonalTrabajadorInvolucradoTiempo]');
            var listaPrecioUnitario = $('input[name=ClassCostoPersonalTrabajadorInvolucradoPrecioUnitario]');
            var listaCosto = $('input[name=ClassCostoPersonalTrabajadorInvolucradoCostoUSS]');

            var listaGrabar = new Array();
            for (var i = 0; i < listaApellidosNombres.length; i++) {
                if (listaApellidosNombres[i].value == null || listaApellidosNombres[i].value == "" ||
                    listaDocIdentidad[i].value == null || listaDocIdentidad[i].value == "" ||
                    listaEmpresa[i].value == null || listaEmpresa[i].value == "" ||
                    listaPuestoTrabajo[i].value == null || listaPuestoTrabajo[i].value == "" ||
                    listaSufrioLesion[i].value == null || listaSufrioLesion[i].value == "" ||
                    listaTiempo[i].value == null || listaTiempo[i].value == "" ||
                    listaPrecioUnitario[i].value == null || listaPrecioUnitario[i].value == "" ||
                    listaCosto[i].value == null || listaCosto[i].value == ""
                ) {
                    resultado = false;
                    return false;
                }
            }


            if (resultado == true) {
                if (base.Control.GrdResultadoTabCostoPersonalTrabajadorInvolucrado.core.rows().data().length == 0) {
                    base.Control.TxtCostoPersonalTrabajadorInvolucradoCantidad().val('');
                    base.Control.TxtCostoPersonalTrabajadorInvolucradoTiempo().val('');
                    base.Control.TxtCostoPersonalTrabajadorInvolucradoPrecioUnitario().val('');
                    base.Control.TxtCostoPersonalTrabajadorInvolucradoCosto().val('');
                }
                base.Control.GrdResultadoTabCostoPersonalTrabajadorInvolucrado.core.row.add({
                    ApellidosNombres: '',
                    DocIdentidad: '',
                    Empresa: '',
                    PuestoTrabajo: '',
                    SufrioLesion: '',
                    Tiempo: '',
                    PrecioUnitario: '',
                    Costo: '',

                }).draw(false);

                base.Control.TxtCostoPersonalTrabajadorInvolucradoCantidad().prop('disabled', true);
                base.Control.TxtCostoPersonalTrabajadorInvolucradoTiempo().prop('disabled', true);
                base.Control.TxtCostoPersonalTrabajadorInvolucradoPrecioUnitario().prop('disabled', true);
                base.Control.TxtCostoPersonalTrabajadorInvolucradoCosto().prop('disabled', true);

            }
        },
        BtnBuscarCostoPersonalTrabajadorInvolucradoClick: function () {
            $("#divGrdResultadoTabCostoPersonalTrabajadorInvolucrado").html("");
            base.Function.CrearGridCostoPersonalTrabajadorInvolucrado();
            var filtro = {};
            base.Control.GrdResultadoTabCostoPersonalTrabajadorInvolucrado.Load(filtro);
        },
        BtnGridEliminarCostoPersonalTrabajadorInvolucradoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                onAccept: function () {
                    base.Control.GrdResultadoTabCostoPersonalTrabajadorInvolucrado.core.row(row[0]).remove().draw(false);
                    var acumCosto = 0.00;
                    $.each(document.getElementsByName("ClassCostoPersonalTrabajadorInvolucradoCostoUSS"), function (index, value) {
                        if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
                            acumCosto += parseFloat($(this).val());
                        }
                    });

                    base.Control.TxtCostoPersonalTrabajadorInvolucradoCosto().val(acumCosto);

                    if (acumCosto == 0) {
                        base.Control.TxtCostoPersonalTrabajadorInvolucradoCantidad().prop('disabled', false);
                        base.Control.TxtCostoPersonalTrabajadorInvolucradoTiempo().prop('disabled', false);
                        base.Control.TxtCostoPersonalTrabajadorInvolucradoPrecioUnitario().prop('disabled', false);
                        base.Control.TxtCostoPersonalTrabajadorInvolucradoCosto().prop('disabled', false);
                        base.Control.TxtCostoPersonalTrabajadorInvolucradoCosto().val('');
                    } else {
                        base.Control.TxtCostoPersonalTrabajadorInvolucradoCantidad().prop('disabled', true);
                        base.Control.TxtCostoPersonalTrabajadorInvolucradoTiempo().prop('disabled', true);
                        base.Control.TxtCostoPersonalTrabajadorInvolucradoPrecioUnitario().prop('disabled', true);
                        base.Control.TxtCostoPersonalTrabajadorInvolucradoCosto().prop('disabled', true);
                    }

                }
            });
        },
        CalcularCostoPersonalTrabajadorInvolucradoCostoUSS: function () {
            var acumCosto = 0.00;
            var acumErrorSintaxis = false;
            var CostoPersonalTrabajadorInvolucradoTiempo = 0;
            var CostoPersonalTrabajadorInvolucradoPrecioUnitario = 0.00;
            var CostoPersonalTrabajadorInvolucradoCostoUSS = 0.00;
            CostoPersonalTrabajadorInvolucradoTiempo = $('#txtCostoPersonalTrabajadorInvolucradoTiempo_' + $(this).data().nrofila).val();
            CostoPersonalTrabajadorInvolucradoPrecioUnitario = $('#txtCostoPersonalTrabajadorInvolucradoPrecioUnitario_' + $(this).data().nrofila).val();

            if (isNaN(CostoPersonalTrabajadorInvolucradoTiempo) == true) {
                $('#txtCostoPersonalTrabajadorInvolucradoTiempo_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoPersonalTrabajadorInvolucradoTiempo_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoPersonalTrabajadorInvolucradoTiempo_' + $(this).data().nrofila).removeClass("hasError");
            }

            if (isNaN(CostoPersonalTrabajadorInvolucradoPrecioUnitario) == true) {
                $('#txtCostoPersonalTrabajadorInvolucradoPrecioUnitario_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoPersonalTrabajadorInvolucradoPrecioUnitario_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoPersonalTrabajadorInvolucradoPrecioUnitario_' + $(this).data().nrofila).removeClass("hasError");
            }
            if (acumErrorSintaxis == false) {
                CostoPersonalTrabajadorInvolucradoCostoUSS = base.Function.roundNumber((CostoPersonalTrabajadorInvolucradoTiempo * CostoPersonalTrabajadorInvolucradoPrecioUnitario), 2);

                $('#txtCostoPersonalTrabajadorInvolucradoCostoUSS_' + $(this).data().nrofila).val(CostoPersonalTrabajadorInvolucradoCostoUSS);


                $.each(document.getElementsByName("ClassCostoPersonalTrabajadorInvolucradoCostoUSS"), function (index, value) {
                    if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
                        acumCosto += parseFloat($(this).val());
                    }
                });
                base.Control.TxtCostoPersonalTrabajadorInvolucradoCosto().val(acumCosto);
            }
        },
        CalcularCabeceraCostoPersonalTrabajadorInvolucrado: function () {
            var valorTxtCostoPersonalTrabajadorInvolucradoCantidad = 0;
            var valorTxtCostoPersonalTrabajadorInvolucradoTiempo = 0;
            var valorTxtCostoPersonalTrabajadorInvolucradoPrecioUnitario = 0;

            if (base.Control.TxtCostoPersonalTrabajadorInvolucradoCantidad().val() == '') {
                base.Control.TxtCostoPersonalTrabajadorInvolucradoCantidad().addClass("hasError");
                valorTxtCostoPersonalTrabajadorInvolucradoCantidad = 0;
            } else {
                base.Control.TxtCostoPersonalTrabajadorInvolucradoCantidad().removeClass("hasError");
                valorTxtCostoPersonalTrabajadorInvolucradoCantidad = base.Control.TxtCostoPersonalTrabajadorInvolucradoCantidad().val();
            }
            if (base.Control.TxtCostoPersonalTrabajadorInvolucradoTiempo().val() == '') {
                base.Control.TxtCostoPersonalTrabajadorInvolucradoTiempo().addClass("hasError");
                valorTxtCostoPersonalTrabajadorInvolucradoTiempo = 0;
            } else {
                base.Control.TxtCostoPersonalTrabajadorInvolucradoTiempo().removeClass("hasError");
                valorTxtCostoPersonalTrabajadorInvolucradoTiempo = base.Control.TxtCostoPersonalTrabajadorInvolucradoTiempo().val();
            }

            if (base.Control.TxtCostoPersonalTrabajadorInvolucradoPrecioUnitario().val() == '') {
                base.Control.TxtCostoPersonalTrabajadorInvolucradoPrecioUnitario().addClass("hasError");
                valorTxtCostoPersonalTrabajadorInvolucradoPrecioUnitario = 0;
            } else {
                base.Control.TxtCostoPersonalTrabajadorInvolucradoPrecioUnitario().removeClass("hasError");
                valorTxtCostoPersonalTrabajadorInvolucradoPrecioUnitario = base.Control.TxtCostoPersonalTrabajadorInvolucradoPrecioUnitario().val();
            }

            base.Control.TxtCostoPersonalTrabajadorInvolucradoCosto().val(valorTxtCostoPersonalTrabajadorInvolucradoCantidad * valorTxtCostoPersonalTrabajadorInvolucradoTiempo * valorTxtCostoPersonalTrabajadorInvolucradoPrecioUnitario)

        },
        TxtCostoPersonalTrabajadorInvolucradoCantidadKeyup: function () {
            base.Event.CalcularCabeceraCostoPersonalTrabajadorInvolucrado();
        },
        TxtCostoPersonalTrabajadorInvolucradoTiempoKeyup: function () {
            base.Event.CalcularCabeceraCostoPersonalTrabajadorInvolucrado();
        },
        TxtCostoPersonalTrabajadorInvolucradoPrecioUnitarioKeyup: function () {
            base.Event.CalcularCabeceraCostoPersonalTrabajadorInvolucrado();
        },
        TxtCostoPersonalTrabajadorInvolucradoCostoKeyup: function () {
            base.Control.TxtCostoPersonalTrabajadorInvolucradoCantidad().val('');
            base.Control.TxtCostoPersonalTrabajadorInvolucradoTiempo().val('');
            base.Control.TxtCostoPersonalTrabajadorInvolucradoPrecioUnitario().val('');
            base.Control.TxtCostoPersonalTrabajadorInvolucradoCantidad().removeClass("hasError");
            base.Control.TxtCostoPersonalTrabajadorInvolucradoTiempo().removeClass("hasError");
            base.Control.TxtCostoPersonalTrabajadorInvolucradoPrecioUnitario().removeClass("hasError");
        },

        BtnAgregarCostoPersonalSupervisorClick: function (e) {
            e.preventDefault();
            var resultado = true;
            base.Control.UltimoRegistroGridCostoPersonalSupervisor++;
            var listaApellidosNombres = $('input[name=costoPersonalSupervisorapellidosnombres]');
            var listaDocIdentidad = $('input[name=costoPersonalSupervisordocidentidad]');
            var listaEmpresa = $('input[name=costoPersonalSupervisorempresa]');
            var listaPuestoTrabajo = $('input[name=costoPersonalSupervisorpuestotrabajo]');
            var listaTiempo = $('input[name=ClassCostoPersonalSupervisorTiempo]');
            var listaPrecioUnitario = $('input[name=ClassCostoPersonalSupervisorPrecioUnitario]');
            var listaCosto = $('input[name=ClassCostoPersonalSupervisorCostoUSS]');

            var listaGrabar = new Array();
            for (var i = 0; i < listaApellidosNombres.length; i++) {
                if (listaApellidosNombres[i].value == null || listaApellidosNombres[i].value == "" ||
                    listaDocIdentidad[i].value == null || listaDocIdentidad[i].value == "" ||
                    listaEmpresa[i].value == null || listaEmpresa[i].value == "" ||
                    listaPuestoTrabajo[i].value == null || listaPuestoTrabajo[i].value == "" ||
                    listaTiempo[i].value == null || listaTiempo[i].value == "" ||
                    listaPrecioUnitario[i].value == null || listaPrecioUnitario[i].value == "" ||
                    listaCosto[i].value == null || listaCosto[i].value == ""
                ) {
                    resultado = false;
                    return false;
                }
            }


            if (resultado == true) {
                if (base.Control.GrdResultadoTabCostoPersonalSupervisor.core.rows().data().length == 0) {
                    base.Control.TxtCostoPersonalSupervisorCantidad().val('');
                    base.Control.TxtCostoPersonalSupervisorTiempo().val('');
                    base.Control.TxtCostoPersonalSupervisorPrecioUnitario().val('');
                    base.Control.TxtCostoPersonalSupervisorCosto().val('');
                }
                base.Control.GrdResultadoTabCostoPersonalSupervisor.core.row.add({
                    ApellidosNombres: '',
                    DocIdentidad: '',
                    Empresa: '',
                    PuestoTrabajo: '',
                    Tiempo: '',
                    PrecioUnitario: '',
                    Costo: '',

                }).draw(false);

                base.Control.TxtCostoPersonalSupervisorCantidad().prop('disabled', true);
                base.Control.TxtCostoPersonalSupervisorTiempo().prop('disabled', true);
                base.Control.TxtCostoPersonalSupervisorPrecioUnitario().prop('disabled', true);
                base.Control.TxtCostoPersonalSupervisorCosto().prop('disabled', true);

            }
        },
        BtnBuscarCostoPersonalSupervisorClick: function () {
            $("#divGrdResultadoTabCostoPersonalSupervisor").html("");
            base.Function.CrearGridCostoPersonalSupervisor();
            var filtro = {};
            base.Control.GrdResultadoTabCostoPersonalSupervisor.Load(filtro);
        },
        BtnGridEliminarCostoPersonalSupervisorClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                onAccept: function () {
                    base.Control.GrdResultadoTabCostoPersonalSupervisor.core.row(row[0]).remove().draw(false);
                    var acumCosto = 0.00;
                    $.each(document.getElementsByName("ClassCostoPersonalSupervisorCostoUSS"), function (index, value) {
                        if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
                            acumCosto += parseFloat($(this).val());
                        }
                    });

                    base.Control.TxtCostoPersonalSupervisorCosto().val(acumCosto);

                    if (acumCosto == 0) {
                        base.Control.TxtCostoPersonalSupervisorCantidad().prop('disabled', false);
                        base.Control.TxtCostoPersonalSupervisorTiempo().prop('disabled', false);
                        base.Control.TxtCostoPersonalSupervisorPrecioUnitario().prop('disabled', false);
                        base.Control.TxtCostoPersonalSupervisorCosto().prop('disabled', false);
                        base.Control.TxtCostoPersonalSupervisorCosto().val('');
                    } else {
                        base.Control.TxtCostoPersonalSupervisorCantidad().prop('disabled', true);
                        base.Control.TxtCostoPersonalSupervisorTiempo().prop('disabled', true);
                        base.Control.TxtCostoPersonalSupervisorPrecioUnitario().prop('disabled', true);
                        base.Control.TxtCostoPersonalSupervisorCosto().prop('disabled', true);
                    }

                }
            });
        },
        CalcularCostoPersonalSupervisorCostoUSS: function () {
            var acumCosto = 0.00;
            var acumErrorSintaxis = false;
            var CostoPersonalSupervisorTiempo = 0;
            var CostoPersonalSupervisorPrecioUnitario = 0.00;
            var CostoPersonalSupervisorCostoUSS = 0.00;
            CostoPersonalSupervisorTiempo = $('#txtCostoPersonalSupervisorTiempo_' + $(this).data().nrofila).val();
            CostoPersonalSupervisorPrecioUnitario = $('#txtCostoPersonalSupervisorPrecioUnitario_' + $(this).data().nrofila).val();

            if (isNaN(CostoPersonalSupervisorTiempo) == true) {
                $('#txtCostoPersonalSupervisorTiempo_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoPersonalSupervisorTiempo_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoPersonalSupervisorTiempo_' + $(this).data().nrofila).removeClass("hasError");
            }

            if (isNaN(CostoPersonalSupervisorPrecioUnitario) == true) {
                $('#txtCostoPersonalSupervisorPrecioUnitario_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoPersonalSupervisorPrecioUnitario_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoPersonalSupervisorPrecioUnitario_' + $(this).data().nrofila).removeClass("hasError");
            }
            if (acumErrorSintaxis == false) {
                CostoPersonalSupervisorCostoUSS = base.Function.roundNumber((CostoPersonalSupervisorTiempo * CostoPersonalSupervisorPrecioUnitario), 2);

                $('#txtCostoPersonalSupervisorCostoUSS_' + $(this).data().nrofila).val(CostoPersonalSupervisorCostoUSS);


                $.each(document.getElementsByName("ClassCostoPersonalSupervisorCostoUSS"), function (index, value) {
                    if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
                        acumCosto += parseFloat($(this).val());
                    }
                });
                base.Control.TxtCostoPersonalSupervisorCosto().val(acumCosto);
            }
        },
        CalcularCabeceraCostoPersonalSupervisor: function () {
            var valorTxtCostoPersonalSupervisorCantidad = 0;
            var valorTxtCostoPersonalSupervisorTiempo = 0;
            var valorTxtCostoPersonalSupervisorPrecioUnitario = 0;

            if (base.Control.TxtCostoPersonalSupervisorCantidad().val() == '') {
                base.Control.TxtCostoPersonalSupervisorCantidad().addClass("hasError");
                valorTxtCostoPersonalSupervisorCantidad = 0;
            } else {
                base.Control.TxtCostoPersonalSupervisorCantidad().removeClass("hasError");
                valorTxtCostoPersonalSupervisorCantidad = base.Control.TxtCostoPersonalSupervisorCantidad().val();
            }
            if (base.Control.TxtCostoPersonalSupervisorTiempo().val() == '') {
                base.Control.TxtCostoPersonalSupervisorTiempo().addClass("hasError");
                valorTxtCostoPersonalSupervisorTiempo = 0;
            } else {
                base.Control.TxtCostoPersonalSupervisorTiempo().removeClass("hasError");
                valorTxtCostoPersonalSupervisorTiempo = base.Control.TxtCostoPersonalSupervisorTiempo().val();
            }

            if (base.Control.TxtCostoPersonalSupervisorPrecioUnitario().val() == '') {
                base.Control.TxtCostoPersonalSupervisorPrecioUnitario().addClass("hasError");
                valorTxtCostoPersonalSupervisorPrecioUnitario = 0;
            } else {
                base.Control.TxtCostoPersonalSupervisorPrecioUnitario().removeClass("hasError");
                valorTxtCostoPersonalSupervisorPrecioUnitario = base.Control.TxtCostoPersonalSupervisorPrecioUnitario().val();
            }

            base.Control.TxtCostoPersonalSupervisorCosto().val(valorTxtCostoPersonalSupervisorCantidad * valorTxtCostoPersonalSupervisorTiempo * valorTxtCostoPersonalSupervisorPrecioUnitario)

        },
        TxtCostoPersonalSupervisorCantidadKeyup: function () {
            base.Event.CalcularCabeceraCostoPersonalSupervisor();
        },
        TxtCostoPersonalSupervisorTiempoKeyup: function () {
            base.Event.CalcularCabeceraCostoPersonalSupervisor();
        },
        TxtCostoPersonalSupervisorPrecioUnitarioKeyup: function () {
            base.Event.CalcularCabeceraCostoPersonalSupervisor();
        },
        TxtCostoPersonalSupervisorCostoKeyup: function () {
            base.Control.TxtCostoPersonalSupervisorCantidad().val('');
            base.Control.TxtCostoPersonalSupervisorTiempo().val('');
            base.Control.TxtCostoPersonalSupervisorPrecioUnitario().val('');
            base.Control.TxtCostoPersonalSupervisorCantidad().removeClass("hasError");
            base.Control.TxtCostoPersonalSupervisorTiempo().removeClass("hasError");
            base.Control.TxtCostoPersonalSupervisorPrecioUnitario().removeClass("hasError");
        },

        //Tab de Costos Medio ambiental
        BtnAgregarCostoMedioambientalPersonalUtilizadoClick: function (e) {
            e.preventDefault();
            var resultado = true;
            base.Control.UltimoRegistroGridCostoMedioambientalPersonalUtilizado++;
            var listaApellidosNombres = $('input[name=costoMedioambientalPersonalUtilizadoapellidosnombres]');
            var listaDocIdentidad = $('input[name=costoMedioambientalPersonalUtilizadodocidentidad]');
            var listaEmpresa = $('input[name=costoMedioambientalPersonalUtilizadoempresa]');
            var listaCantidad = $('input[name=ClassCostoMedioambientalPersonalUtilizadoCantidad]');
            var listaTiempo = $('input[name=ClassCostoMedioambientalPersonalUtilizadoTiempo]');
            var listaPrecioUnitario = $('input[name=ClassCostoMedioambientalPersonalUtilizadoPrecioUnitario]');
            var listaCosto = $('input[name=ClassCostoMedioambientalPersonalUtilizadoCostoUSS]');

            var listaGrabar = new Array();
            for (var i = 0; i < listaApellidosNombres.length; i++) {
                if (listaApellidosNombres[i].value == null || listaApellidosNombres[i].value == "" ||
                    listaDocIdentidad[i].value == null || listaDocIdentidad[i].value == "" ||
                    listaEmpresa[i].value == null || listaEmpresa[i].value == "" ||
                    listaCantidad[i].value == null || listaCantidad[i].value == "" ||
                    listaTiempo[i].value == null || listaTiempo[i].value == "" ||
                    listaPrecioUnitario[i].value == null || listaPrecioUnitario[i].value == "" ||
                    listaCosto[i].value == null || listaCosto[i].value == ""
                ) {
                    resultado = false;
                    return false;
                }
            }


            if (resultado == true) {
                if (base.Control.GrdResultadoTabCostoMedioambientalPersonalUtilizado.core.rows().data().length == 0) {
                    base.Control.TxtCostoMedioambientalPersonalUtilizadoCantidad().val('');
                    base.Control.TxtCostoMedioambientalPersonalUtilizadoTiempo().val('');
                    base.Control.TxtCostoMedioambientalPersonalUtilizadoPrecioUnitario().val('');
                    base.Control.TxtCostoMedioambientalPersonalUtilizadoCosto().val('');
                }
                base.Control.GrdResultadoTabCostoMedioambientalPersonalUtilizado.core.row.add({
                    ApellidosNombres: '',
                    DocIdentidad: '',
                    Empresa: '',
                    Cantidad: '',
                    Tiempo: '',
                    PrecioUnitario: '',
                    Costo: '',

                }).draw(false);

                base.Control.TxtCostoMedioambientalPersonalUtilizadoCantidad().prop('disabled', true);
                base.Control.TxtCostoMedioambientalPersonalUtilizadoTiempo().prop('disabled', true);
                base.Control.TxtCostoMedioambientalPersonalUtilizadoPrecioUnitario().prop('disabled', true);
                base.Control.TxtCostoMedioambientalPersonalUtilizadoCosto().prop('disabled', true);

            }
        },
        BtnBuscarCostoMedioambientalPersonalUtilizadoClick: function () {
            $("#divGrdResultadoTabCostoMedioambientalPersonalUtilizado").html("");
            base.Function.CrearGridCostoMedioambientalPersonalUtilizado();
            var filtro = {};
            base.Control.GrdResultadoTabCostoMedioambientalPersonalUtilizado.Load(filtro);
        },
        BtnGridEliminarCostoMedioambientalPersonalUtilizadoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                onAccept: function () {
                    base.Control.GrdResultadoTabCostoMedioambientalPersonalUtilizado.core.row(row[0]).remove().draw(false);
                    var acumCosto = 0.00;
                    $.each(document.getElementsByName("ClassCostoMedioambientalPersonalUtilizadoCostoUSS"), function (index, value) {
                        if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
                            acumCosto += parseFloat($(this).val());
                        }
                    });

                    base.Control.TxtCostoMedioambientalPersonalUtilizadoCosto().val(acumCosto);

                    if (acumCosto == 0) {
                        base.Control.TxtCostoMedioambientalPersonalUtilizadoCantidad().prop('disabled', false);
                        base.Control.TxtCostoMedioambientalPersonalUtilizadoTiempo().prop('disabled', false);
                        base.Control.TxtCostoMedioambientalPersonalUtilizadoPrecioUnitario().prop('disabled', false);
                        base.Control.TxtCostoMedioambientalPersonalUtilizadoCosto().prop('disabled', false);
                        base.Control.TxtCostoMedioambientalPersonalUtilizadoCosto().val('');
                    } else {
                        base.Control.TxtCostoMedioambientalPersonalUtilizadoCantidad().prop('disabled', true);
                        base.Control.TxtCostoMedioambientalPersonalUtilizadoTiempo().prop('disabled', true);
                        base.Control.TxtCostoMedioambientalPersonalUtilizadoPrecioUnitario().prop('disabled', true);
                        base.Control.TxtCostoMedioambientalPersonalUtilizadoCosto().prop('disabled', true);
                    }

                }
            });
        },
        CalcularCostoMedioambientalPersonalUtilizadoCostoUSS: function () {
            var acumCosto = 0.00;
            var acumErrorSintaxis = false;
            var CostoMedioambientalPersonalUtilizadoCantidad = 0;
            var CostoMedioambientalPersonalUtilizadoTiempo = 0;
            var CostoMedioambientalPersonalUtilizadoPrecioUnitario = 0.00;
            var CostoMedioambientalPersonalUtilizadoCostoUSS = 0.00;
            CostoMedioambientalPersonalUtilizadoCantidad = $('#txtCostoMedioambientalPersonalUtilizadoCantidad_' + $(this).data().nrofila).val();
            CostoMedioambientalPersonalUtilizadoTiempo = $('#txtCostoMedioambientalPersonalUtilizadoTiempo_' + $(this).data().nrofila).val();
            CostoMedioambientalPersonalUtilizadoPrecioUnitario = $('#txtCostoMedioambientalPersonalUtilizadoPrecioUnitario_' + $(this).data().nrofila).val();

            if (isNaN(CostoMedioambientalPersonalUtilizadoCantidad) == true) {
                $('#txtCostoMedioambientalPersonalUtilizadoCantidad_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoMedioambientalPersonalUtilizadoCantidad_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoMedioambientalPersonalUtilizadoCantidad_' + $(this).data().nrofila).removeClass("hasError");
            }
            if (isNaN(CostoMedioambientalPersonalUtilizadoTiempo) == true) {
                $('#txtCostoMedioambientalPersonalUtilizadoTiempo_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoMedioambientalPersonalUtilizadoTiempo_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoMedioambientalPersonalUtilizadoTiempo_' + $(this).data().nrofila).removeClass("hasError");
            }

            if (isNaN(CostoMedioambientalPersonalUtilizadoPrecioUnitario) == true) {
                $('#txtCostoMedioambientalPersonalUtilizadoPrecioUnitario_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoMedioambientalPersonalUtilizadoPrecioUnitario_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoMedioambientalPersonalUtilizadoPrecioUnitario_' + $(this).data().nrofila).removeClass("hasError");
            }
            if (acumErrorSintaxis == false) {
                CostoMedioambientalPersonalUtilizadoCostoUSS = base.Function.roundNumber((CostoMedioambientalPersonalUtilizadoCantidad * CostoMedioambientalPersonalUtilizadoTiempo * CostoMedioambientalPersonalUtilizadoPrecioUnitario), 2);

                $('#txtCostoMedioambientalPersonalUtilizadoCostoUSS_' + $(this).data().nrofila).val(CostoMedioambientalPersonalUtilizadoCostoUSS);


                $.each(document.getElementsByName("ClassCostoMedioambientalPersonalUtilizadoCostoUSS"), function (index, value) {
                    if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
                        acumCosto += parseFloat($(this).val());
                    }
                });
                base.Control.TxtCostoMedioambientalPersonalUtilizadoCosto().val(acumCosto);
            }
        },
        CalcularCabeceraCostoMedioambientalPersonalUtilizado: function () {
            var valorTxtCostoMedioambientalPersonalUtilizadoCantidad = 0;
            var valorTxtCostoMedioambientalPersonalUtilizadoTiempo = 0;
            var valorTxtCostoMedioambientalPersonalUtilizadoPrecioUnitario = 0;

            if (base.Control.TxtCostoMedioambientalPersonalUtilizadoCantidad().val() == '') {
                base.Control.TxtCostoMedioambientalPersonalUtilizadoCantidad().addClass("hasError");
                valorTxtCostoMedioambientalPersonalUtilizadoCantidad = 0;
            } else {
                base.Control.TxtCostoMedioambientalPersonalUtilizadoCantidad().removeClass("hasError");
                valorTxtCostoMedioambientalPersonalUtilizadoCantidad = base.Control.TxtCostoMedioambientalPersonalUtilizadoCantidad().val();
            }
            if (base.Control.TxtCostoMedioambientalPersonalUtilizadoTiempo().val() == '') {
                base.Control.TxtCostoMedioambientalPersonalUtilizadoTiempo().addClass("hasError");
                valorTxtCostoMedioambientalPersonalUtilizadoTiempo = 0;
            } else {
                base.Control.TxtCostoMedioambientalPersonalUtilizadoTiempo().removeClass("hasError");
                valorTxtCostoMedioambientalPersonalUtilizadoTiempo = base.Control.TxtCostoMedioambientalPersonalUtilizadoTiempo().val();
            }

            if (base.Control.TxtCostoMedioambientalPersonalUtilizadoPrecioUnitario().val() == '') {
                base.Control.TxtCostoMedioambientalPersonalUtilizadoPrecioUnitario().addClass("hasError");
                valorTxtCostoMedioambientalPersonalUtilizadoPrecioUnitario = 0;
            } else {
                base.Control.TxtCostoMedioambientalPersonalUtilizadoPrecioUnitario().removeClass("hasError");
                valorTxtCostoMedioambientalPersonalUtilizadoPrecioUnitario = base.Control.TxtCostoMedioambientalPersonalUtilizadoPrecioUnitario().val();
            }

            base.Control.TxtCostoMedioambientalPersonalUtilizadoCosto().val(valorTxtCostoMedioambientalPersonalUtilizadoCantidad * valorTxtCostoMedioambientalPersonalUtilizadoTiempo * valorTxtCostoMedioambientalPersonalUtilizadoPrecioUnitario)

        },
        TxtCostoMedioambientalPersonalUtilizadoCantidadKeyup: function () {
            base.Event.CalcularCabeceraCostoMedioambientalPersonalUtilizado();
        },
        TxtCostoMedioambientalPersonalUtilizadoTiempoKeyup: function () {
            base.Event.CalcularCabeceraCostoMedioambientalPersonalUtilizado();
        },
        TxtCostoMedioambientalPersonalUtilizadoPrecioUnitarioKeyup: function () {
            base.Event.CalcularCabeceraCostoMedioambientalPersonalUtilizado();
        },
        TxtCostoMedioambientalPersonalUtilizadoCostoKeyup: function () {
            base.Control.TxtCostoMedioambientalPersonalUtilizadoCantidad().val('');
            base.Control.TxtCostoMedioambientalPersonalUtilizadoTiempo().val('');
            base.Control.TxtCostoMedioambientalPersonalUtilizadoPrecioUnitario().val('');
            base.Control.TxtCostoMedioambientalPersonalUtilizadoCantidad().removeClass("hasError");
            base.Control.TxtCostoMedioambientalPersonalUtilizadoTiempo().removeClass("hasError");
            base.Control.TxtCostoMedioambientalPersonalUtilizadoPrecioUnitario().removeClass("hasError");
        },

        BtnAgregarCostoMedioambientalMaterialUtilizadoClick: function (e) {
            e.preventDefault();
            var resultado = true;
            base.Control.UltimoRegistroGridCostoMedioambientalMaterialUtilizado++;
            var listaMaterial = $('input[name=costoMedioambientalMaterialUtilizadomaterial]');
            var listaCantidad = $('input[name=ClassCostoMedioambientalMaterialUtilizadoCantidad]');
            var listaTiempo = $('input[name=ClassCostoMedioambientalMaterialUtilizadoTiempo]');
            var listaPrecioUnitario = $('input[name=ClassCostoMedioambientalMaterialUtilizadoPrecioUnitario]');
            var listaCosto = $('input[name=ClassCostoMedioambientalMaterialUtilizadoCostoUSS]');

            var listaGrabar = new Array();
            for (var i = 0; i < listaMaterial.length; i++) {
                if (listaMaterial[i].value == null || listaMaterial[i].value == "" ||
                    listaCantidad[i].value == null || listaCantidad[i].value == "" ||
                    listaTiempo[i].value == null || listaTiempo[i].value == "" ||
                    listaPrecioUnitario[i].value == null || listaPrecioUnitario[i].value == "" ||
                    listaCosto[i].value == null || listaCosto[i].value == ""
                ) {
                    resultado = false;
                    return false;
                }
            }


            if (resultado == true) {
                if (base.Control.GrdResultadoTabCostoMedioambientalMaterialUtilizado.core.rows().data().length == 0) {
                    base.Control.TxtCostoMedioambientalMaterialUtilizadoCosto().val('');
                }
                base.Control.GrdResultadoTabCostoMedioambientalMaterialUtilizado.core.row.add({
                    Material: '',
                    Cantidad: '',
                    Tiempo: '',
                    PrecioUnitario: '',
                    Costo: '',

                }).draw(false);
                base.Control.TxtCostoMedioambientalMaterialUtilizadoCosto().prop('disabled', true);

            }
        },
        BtnBuscarCostoMedioambientalMaterialUtilizadoClick: function () {
            $("#divGrdResultadoTabCostoMedioambientalMaterialUtilizado").html("");
            base.Function.CrearGridCostoMedioambientalMaterialUtilizado();
            var filtro = {};
            base.Control.GrdResultadoTabCostoMedioambientalMaterialUtilizado.Load(filtro);
        },
        BtnGridEliminarCostoMedioambientalMaterialUtilizadoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                onAccept: function () {
                    base.Control.GrdResultadoTabCostoMedioambientalMaterialUtilizado.core.row(row[0]).remove().draw(false);
                    var acumCosto = 0.00;
                    $.each(document.getElementsByName("ClassCostoMedioambientalMaterialUtilizadoCostoUSS"), function (index, value) {
                        if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
                            acumCosto += parseFloat($(this).val());
                        }
                    });

                    base.Control.TxtCostoMedioambientalMaterialUtilizadoCosto().val(acumCosto);

                    if (acumCosto == 0) {
                        base.Control.TxtCostoMedioambientalMaterialUtilizadoCosto().prop('disabled', false);
                        base.Control.TxtCostoMedioambientalMaterialUtilizadoCosto().val('');
                    } else {
                        base.Control.TxtCostoMedioambientalMaterialUtilizadoCosto().prop('disabled', true);
                    }

                }
            });
        },
        CalcularCostoMedioambientalMaterialUtilizadoCostoUSS: function () {
            var acumCosto = 0.00;
            var acumErrorSintaxis = false;
            var CostoMedioambientalMaterialUtilizadoCantidad = 0;
            var CostoMedioambientalMaterialUtilizadoPrecioUnitario = 0.00;
            var CostoMedioambientalMaterialUtilizadoCostoUSS = 0.00;
            CostoMedioambientalMaterialUtilizadoCantidad = $('#txtCostoMedioambientalMaterialUtilizadoCantidad_' + $(this).data().nrofila).val();
            CostoMedioambientalMaterialUtilizadoPrecioUnitario = $('#txtCostoMedioambientalMaterialUtilizadoPrecioUnitario_' + $(this).data().nrofila).val();

            if (isNaN(CostoMedioambientalMaterialUtilizadoCantidad) == true) {
                $('#txtCostoMedioambientalMaterialUtilizadoCantidad_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoMedioambientalMaterialUtilizadoCantidad_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoMedioambientalMaterialUtilizadoCantidad_' + $(this).data().nrofila).removeClass("hasError");
            }

            if (isNaN(CostoMedioambientalMaterialUtilizadoPrecioUnitario) == true) {
                $('#txtCostoMedioambientalMaterialUtilizadoPrecioUnitario_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoMedioambientalMaterialUtilizadoPrecioUnitario_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoMedioambientalMaterialUtilizadoPrecioUnitario_' + $(this).data().nrofila).removeClass("hasError");
            }
            if (acumErrorSintaxis == false) {
                CostoMedioambientalMaterialUtilizadoCostoUSS = base.Function.roundNumber((CostoMedioambientalMaterialUtilizadoCantidad * CostoMedioambientalMaterialUtilizadoPrecioUnitario), 2);

                $('#txtCostoMedioambientalMaterialUtilizadoCostoUSS_' + $(this).data().nrofila).val(CostoMedioambientalMaterialUtilizadoCostoUSS);


                $.each(document.getElementsByName("ClassCostoMedioambientalMaterialUtilizadoCostoUSS"), function (index, value) {
                    if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
                        acumCosto += parseFloat($(this).val());
                    }
                });
                base.Control.TxtCostoMedioambientalMaterialUtilizadoCosto().val(acumCosto);
            }
        },

        //Tab de Costos Daños Propiedad
        BtnAgregarCostoDaniosPropiedadPersonalUtilizadoClick: function (e) {
            e.preventDefault();
            var resultado = true;
            base.Control.UltimoRegistroGridCostoDaniosPropiedadPersonalUtilizado++;
            var listaApellidosNombres = $('input[name=CostoDaniosPropiedadPersonalUtilizadoapellidosnombres]');
            var listaDocIdentidad = $('input[name=CostoDaniosPropiedadPersonalUtilizadodocidentidad]');
            var listaEmpresa = $('input[name=CostoDaniosPropiedadPersonalUtilizadoempresa]');
            var listaCantidad = $('input[name=ClassCostoDaniosPropiedadPersonalUtilizadoCantidad]');
            var listaTiempo = $('input[name=ClassCostoDaniosPropiedadPersonalUtilizadoTiempo]');
            var listaPrecioUnitario = $('input[name=ClassCostoDaniosPropiedadPersonalUtilizadoPrecioUnitario]');
            var listaCosto = $('input[name=ClassCostoDaniosPropiedadPersonalUtilizadoCostoUSS]');

            var listaGrabar = new Array();
            for (var i = 0; i < listaApellidosNombres.length; i++) {
                if (listaApellidosNombres[i].value == null || listaApellidosNombres[i].value == "" ||
                    listaDocIdentidad[i].value == null || listaDocIdentidad[i].value == "" ||
                    listaEmpresa[i].value == null || listaEmpresa[i].value == "" ||
                    listaCantidad[i].value == null || listaCantidad[i].value == "" ||
                    listaTiempo[i].value == null || listaTiempo[i].value == "" ||
                    listaPrecioUnitario[i].value == null || listaPrecioUnitario[i].value == "" ||
                    listaCosto[i].value == null || listaCosto[i].value == ""
                ) {
                    resultado = false;
                    return false;
                }
            }


            if (resultado == true) {
                if (base.Control.GrdResultadoTabCostoDaniosPropiedadPersonalUtilizado.core.rows().data().length == 0) {
                    base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoCantidad().val('');
                    base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoTiempo().val('');
                    base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoPrecioUnitario().val('');
                    base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoCosto().val('');
                }
                base.Control.GrdResultadoTabCostoDaniosPropiedadPersonalUtilizado.core.row.add({
                    ApellidosNombres: '',
                    DocIdentidad: '',
                    Empresa: '',
                    Cantidad: '',
                    Tiempo: '',
                    PrecioUnitario: '',
                    Costo: '',

                }).draw(false);

                base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoCantidad().prop('disabled', true);
                base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoTiempo().prop('disabled', true);
                base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoPrecioUnitario().prop('disabled', true);
                base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoCosto().prop('disabled', true);

            }
        },
        BtnBuscarCostoDaniosPropiedadPersonalUtilizadoClick: function () {
            $("#divGrdResultadoTabCostoDaniosPropiedadPersonalUtilizado").html("");
            base.Function.CrearGridCostoDaniosPropiedadPersonalUtilizado();
            var filtro = {};
            base.Control.GrdResultadoTabCostoDaniosPropiedadPersonalUtilizado.Load(filtro);
        },
        BtnGridEliminarCostoDaniosPropiedadPersonalUtilizadoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                onAccept: function () {
                    base.Control.GrdResultadoTabCostoDaniosPropiedadPersonalUtilizado.core.row(row[0]).remove().draw(false);
                    var acumCosto = 0.00;
                    $.each(document.getElementsByName("ClassCostoDaniosPropiedadPersonalUtilizadoCostoUSS"), function (index, value) {
                        if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
                            acumCosto += parseFloat($(this).val());
                        }
                    });

                    base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoCosto().val(acumCosto);

                    if (acumCosto == 0) {
                        base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoCantidad().prop('disabled', false);
                        base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoTiempo().prop('disabled', false);
                        base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoPrecioUnitario().prop('disabled', false);
                        base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoCosto().prop('disabled', false);
                        base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoCosto().val('');
                    } else {
                        base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoCantidad().prop('disabled', true);
                        base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoTiempo().prop('disabled', true);
                        base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoPrecioUnitario().prop('disabled', true);
                        base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoCosto().prop('disabled', true);
                    }

                }
            });
        },
        CalcularCostoDaniosPropiedadPersonalUtilizadoCostoUSS: function () {
            var acumCosto = 0.00;
            var acumErrorSintaxis = false;
            var CostoDaniosPropiedadPersonalUtilizadoCantidad = 0;
            var CostoDaniosPropiedadPersonalUtilizadoTiempo = 0;
            var CostoDaniosPropiedadPersonalUtilizadoPrecioUnitario = 0.00;
            var CostoDaniosPropiedadPersonalUtilizadoCostoUSS = 0.00;
            CostoDaniosPropiedadPersonalUtilizadoCantidad = $('#txtCostoDaniosPropiedadPersonalUtilizadoCantidad_' + $(this).data().nrofila).val();
            CostoDaniosPropiedadPersonalUtilizadoTiempo = $('#txtCostoDaniosPropiedadPersonalUtilizadoTiempo_' + $(this).data().nrofila).val();
            CostoDaniosPropiedadPersonalUtilizadoPrecioUnitario = $('#txtCostoDaniosPropiedadPersonalUtilizadoPrecioUnitario_' + $(this).data().nrofila).val();

            if (isNaN(CostoDaniosPropiedadPersonalUtilizadoCantidad) == true) {
                $('#txtCostoDaniosPropiedadPersonalUtilizadoCantidad_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoDaniosPropiedadPersonalUtilizadoCantidad_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoDaniosPropiedadPersonalUtilizadoCantidad_' + $(this).data().nrofila).removeClass("hasError");
            }
            if (isNaN(CostoDaniosPropiedadPersonalUtilizadoTiempo) == true) {
                $('#txtCostoDaniosPropiedadPersonalUtilizadoTiempo_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoDaniosPropiedadPersonalUtilizadoTiempo_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoDaniosPropiedadPersonalUtilizadoTiempo_' + $(this).data().nrofila).removeClass("hasError");
            }

            if (isNaN(CostoDaniosPropiedadPersonalUtilizadoPrecioUnitario) == true) {
                $('#txtCostoDaniosPropiedadPersonalUtilizadoPrecioUnitario_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoDaniosPropiedadPersonalUtilizadoPrecioUnitario_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoDaniosPropiedadPersonalUtilizadoPrecioUnitario_' + $(this).data().nrofila).removeClass("hasError");
            }
            if (acumErrorSintaxis == false) {
                CostoDaniosPropiedadPersonalUtilizadoCostoUSS = base.Function.roundNumber((CostoDaniosPropiedadPersonalUtilizadoCantidad * CostoDaniosPropiedadPersonalUtilizadoTiempo * CostoDaniosPropiedadPersonalUtilizadoPrecioUnitario), 2);

                $('#txtCostoDaniosPropiedadPersonalUtilizadoCostoUSS_' + $(this).data().nrofila).val(CostoDaniosPropiedadPersonalUtilizadoCostoUSS);


                $.each(document.getElementsByName("ClassCostoDaniosPropiedadPersonalUtilizadoCostoUSS"), function (index, value) {
                    if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
                        acumCosto += parseFloat($(this).val());
                    }
                });
                base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoCosto().val(acumCosto);
            }
        },
        CalcularCabeceraCostoDaniosPropiedadPersonalUtilizado: function () {
            var valorTxtCostoDaniosPropiedadPersonalUtilizadoCantidad = 0;
            var valorTxtCostoDaniosPropiedadPersonalUtilizadoTiempo = 0;
            var valorTxtCostoDaniosPropiedadPersonalUtilizadoPrecioUnitario = 0;

            if (base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoCantidad().val() == '') {
                base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoCantidad().addClass("hasError");
                valorTxtCostoDaniosPropiedadPersonalUtilizadoCantidad = 0;
            } else {
                base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoCantidad().removeClass("hasError");
                valorTxtCostoDaniosPropiedadPersonalUtilizadoCantidad = base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoCantidad().val();
            }
            if (base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoTiempo().val() == '') {
                base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoTiempo().addClass("hasError");
                valorTxtCostoDaniosPropiedadPersonalUtilizadoTiempo = 0;
            } else {
                base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoTiempo().removeClass("hasError");
                valorTxtCostoDaniosPropiedadPersonalUtilizadoTiempo = base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoTiempo().val();
            }

            if (base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoPrecioUnitario().val() == '') {
                base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoPrecioUnitario().addClass("hasError");
                valorTxtCostoDaniosPropiedadPersonalUtilizadoPrecioUnitario = 0;
            } else {
                base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoPrecioUnitario().removeClass("hasError");
                valorTxtCostoDaniosPropiedadPersonalUtilizadoPrecioUnitario = base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoPrecioUnitario().val();
            }

            base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoCosto().val(valorTxtCostoDaniosPropiedadPersonalUtilizadoCantidad * valorTxtCostoDaniosPropiedadPersonalUtilizadoTiempo * valorTxtCostoDaniosPropiedadPersonalUtilizadoPrecioUnitario)

        },
        TxtCostoDaniosPropiedadPersonalUtilizadoCantidadKeyup: function () {
            base.Event.CalcularCabeceraCostoDaniosPropiedadPersonalUtilizado();
        },
        TxtCostoDaniosPropiedadPersonalUtilizadoTiempoKeyup: function () {
            base.Event.CalcularCabeceraCostoDaniosPropiedadPersonalUtilizado();
        },
        TxtCostoDaniosPropiedadPersonalUtilizadoPrecioUnitarioKeyup: function () {
            base.Event.CalcularCabeceraCostoDaniosPropiedadPersonalUtilizado();
        },
        TxtCostoDaniosPropiedadPersonalUtilizadoCostoKeyup: function () {
            base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoCantidad().val('');
            base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoTiempo().val('');
            base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoPrecioUnitario().val('');
            base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoCantidad().removeClass("hasError");
            base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoTiempo().removeClass("hasError");
            base.Control.TxtCostoDaniosPropiedadPersonalUtilizadoPrecioUnitario().removeClass("hasError");
        },

        BtnAgregarCostoDaniosPropiedadEquipoUtilizadoClick: function (e) {
            e.preventDefault();
            var resultado = true;
            base.Control.UltimoRegistroGridCostoDaniosPropiedadEquipoUtilizado++;
            var listaEquipo = $('input[name=CostoDaniosPropiedadEquipoUtilizadoequipo]');
            var listaCantidad = $('input[name=ClassCostoDaniosPropiedadEquipoUtilizadoCantidad]');
            var listaTiempo = $('input[name=ClassCostoDaniosPropiedadEquipoUtilizadoTiempo]');
            var listaPrecioUnitario = $('input[name=ClassCostoDaniosPropiedadEquipoUtilizadoPrecioUnitario]');
            var listaCosto = $('input[name=ClassCostoDaniosPropiedadEquipoUtilizadoCostoUSS]');

            var listaGrabar = new Array();
            for (var i = 0; i < listaEquipo.length; i++) {
                if (listaEquipo[i].value == null || listaEquipo[i].value == "" ||
                    listaCantidad[i].value == null || listaCantidad[i].value == "" ||
                    listaTiempo[i].value == null || listaTiempo[i].value == "" ||
                    listaPrecioUnitario[i].value == null || listaPrecioUnitario[i].value == "" ||
                    listaCosto[i].value == null || listaCosto[i].value == ""
                ) {
                    resultado = false;
                    return false;
                }
            }


            if (resultado == true) {
                if (base.Control.GrdResultadoTabCostoDaniosPropiedadEquipoUtilizado.core.rows().data().length == 0) {
                    base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoCantidad().val('');
                    base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoTiempo().val('');
                    base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoPrecioUnitario().val('');
                    base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoCosto().val('');
                }
                base.Control.GrdResultadoTabCostoDaniosPropiedadEquipoUtilizado.core.row.add({
                    Equipo: '',
                    Cantidad: '',
                    Tiempo: '',
                    PrecioUnitario: '',
                    Costo: '',

                }).draw(false);

                base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoCantidad().prop('disabled', true);
                base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoTiempo().prop('disabled', true);
                base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoPrecioUnitario().prop('disabled', true);
                base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoCosto().prop('disabled', true);

            }
        },
        BtnBuscarCostoDaniosPropiedadEquipoUtilizadoClick: function () {
            $("#divGrdResultadoTabCostoDaniosPropiedadEquipoUtilizado").html("");
            base.Function.CrearGridCostoDaniosPropiedadEquipoUtilizado();
            var filtro = {};
            base.Control.GrdResultadoTabCostoDaniosPropiedadEquipoUtilizado.Load(filtro);
        },
        BtnGridEliminarCostoDaniosPropiedadEquipoUtilizadoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                onAccept: function () {
                    base.Control.GrdResultadoTabCostoDaniosPropiedadEquipoUtilizado.core.row(row[0]).remove().draw(false);
                    var acumCosto = 0.00;
                    $.each(document.getElementsByName("ClassCostoDaniosPropiedadEquipoUtilizadoCostoUSS"), function (index, value) {
                        if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
                            acumCosto += parseFloat($(this).val());
                        }
                    });

                    base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoCosto().val(acumCosto);

                    if (acumCosto == 0) {
                        base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoCantidad().prop('disabled', false);
                        base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoTiempo().prop('disabled', false);
                        base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoPrecioUnitario().prop('disabled', false);
                        base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoCosto().prop('disabled', false);
                        base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoCosto().val('');
                    } else {
                        base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoCantidad().prop('disabled', true);
                        base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoTiempo().prop('disabled', true);
                        base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoPrecioUnitario().prop('disabled', true);
                        base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoCosto().prop('disabled', true);
                    }

                }
            });
        },
        CalcularCostoDaniosPropiedadEquipoUtilizadoCostoUSS: function () {
            var acumCosto = 0.00;
            var acumErrorSintaxis = false;
            var CostoDaniosPropiedadEquipoUtilizadoCantidad = 0;
            var CostoDaniosPropiedadEquipoUtilizadoTiempo = 0;
            var CostoDaniosPropiedadEquipoUtilizadoPrecioUnitario = 0.00;
            var CostoDaniosPropiedadEquipoUtilizadoCostoUSS = 0.00;
            CostoDaniosPropiedadEquipoUtilizadoCantidad = $('#txtCostoDaniosPropiedadEquipoUtilizadoCantidad_' + $(this).data().nrofila).val();
            CostoDaniosPropiedadEquipoUtilizadoTiempo = $('#txtCostoDaniosPropiedadEquipoUtilizadoTiempo_' + $(this).data().nrofila).val();
            CostoDaniosPropiedadEquipoUtilizadoPrecioUnitario = $('#txtCostoDaniosPropiedadEquipoUtilizadoPrecioUnitario_' + $(this).data().nrofila).val();

            if (isNaN(CostoDaniosPropiedadEquipoUtilizadoCantidad) == true) {
                $('#txtCostoDaniosPropiedadEquipoUtilizadoCantidad_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoDaniosPropiedadEquipoUtilizadoCantidad_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoDaniosPropiedadEquipoUtilizadoCantidad_' + $(this).data().nrofila).removeClass("hasError");
            }
            if (isNaN(CostoDaniosPropiedadEquipoUtilizadoTiempo) == true) {
                $('#txtCostoDaniosPropiedadEquipoUtilizadoTiempo_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoDaniosPropiedadEquipoUtilizadoTiempo_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoDaniosPropiedadEquipoUtilizadoTiempo_' + $(this).data().nrofila).removeClass("hasError");
            }

            if (isNaN(CostoDaniosPropiedadEquipoUtilizadoPrecioUnitario) == true) {
                $('#txtCostoDaniosPropiedadEquipoUtilizadoPrecioUnitario_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoDaniosPropiedadEquipoUtilizadoPrecioUnitario_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoDaniosPropiedadEquipoUtilizadoPrecioUnitario_' + $(this).data().nrofila).removeClass("hasError");
            }
            if (acumErrorSintaxis == false) {
                CostoDaniosPropiedadEquipoUtilizadoCostoUSS = base.Function.roundNumber((CostoDaniosPropiedadEquipoUtilizadoCantidad * CostoDaniosPropiedadEquipoUtilizadoTiempo * CostoDaniosPropiedadEquipoUtilizadoPrecioUnitario), 2);

                $('#txtCostoDaniosPropiedadEquipoUtilizadoCostoUSS_' + $(this).data().nrofila).val(CostoDaniosPropiedadEquipoUtilizadoCostoUSS);


                $.each(document.getElementsByName("ClassCostoDaniosPropiedadEquipoUtilizadoCostoUSS"), function (index, value) {
                    if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
                        acumCosto += parseFloat($(this).val());
                    }
                });
                base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoCosto().val(acumCosto);
            }
        },
        CalcularCabeceraCostoDaniosPropiedadEquipoUtilizado: function () {
            var valorTxtCostoDaniosPropiedadEquipoUtilizadoCantidad = 0;
            var valorTxtCostoDaniosPropiedadEquipoUtilizadoTiempo = 0;
            var valorTxtCostoDaniosPropiedadEquipoUtilizadoPrecioUnitario = 0;

            if (base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoCantidad().val() == '') {
                base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoCantidad().addClass("hasError");
                valorTxtCostoDaniosPropiedadEquipoUtilizadoCantidad = 0;
            } else {
                base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoCantidad().removeClass("hasError");
                valorTxtCostoDaniosPropiedadEquipoUtilizadoCantidad = base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoCantidad().val();
            }
            if (base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoTiempo().val() == '') {
                base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoTiempo().addClass("hasError");
                valorTxtCostoDaniosPropiedadEquipoUtilizadoTiempo = 0;
            } else {
                base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoTiempo().removeClass("hasError");
                valorTxtCostoDaniosPropiedadEquipoUtilizadoTiempo = base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoTiempo().val();
            }

            if (base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoPrecioUnitario().val() == '') {
                base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoPrecioUnitario().addClass("hasError");
                valorTxtCostoDaniosPropiedadEquipoUtilizadoPrecioUnitario = 0;
            } else {
                base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoPrecioUnitario().removeClass("hasError");
                valorTxtCostoDaniosPropiedadEquipoUtilizadoPrecioUnitario = base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoPrecioUnitario().val();
            }

            base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoCosto().val(valorTxtCostoDaniosPropiedadEquipoUtilizadoCantidad * valorTxtCostoDaniosPropiedadEquipoUtilizadoTiempo * valorTxtCostoDaniosPropiedadEquipoUtilizadoPrecioUnitario)

        },
        TxtCostoDaniosPropiedadEquipoUtilizadoCantidadKeyup: function () {
            base.Event.CalcularCabeceraCostoDaniosPropiedadEquipoUtilizado();
        },
        TxtCostoDaniosPropiedadEquipoUtilizadoTiempoKeyup: function () {
            base.Event.CalcularCabeceraCostoDaniosPropiedadEquipoUtilizado();
        },
        TxtCostoDaniosPropiedadEquipoUtilizadoPrecioUnitarioKeyup: function () {
            base.Event.CalcularCabeceraCostoDaniosPropiedadEquipoUtilizado();
        },
        TxtCostoDaniosPropiedadEquipoUtilizadoCostoKeyup: function () {
            base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoCantidad().val('');
            base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoTiempo().val('');
            base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoPrecioUnitario().val('');
            base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoCantidad().removeClass("hasError");
            base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoTiempo().removeClass("hasError");
            base.Control.TxtCostoDaniosPropiedadEquipoUtilizadoPrecioUnitario().removeClass("hasError");
        },

        BtnAgregarCostoDaniosPropiedadMaterialUtilizadoClick: function (e) {
            e.preventDefault();
            var resultado = true;
            base.Control.UltimoRegistroGridCostoDaniosPropiedadMaterialUtilizado++;
            var listaMaterial = $('input[name=CostoDaniosPropiedadMaterialUtilizadomaterial]');
            var listaCantidad = $('input[name=ClassCostoDaniosPropiedadMaterialUtilizadoCantidad]');
            var listaPrecioUnitario = $('input[name=ClassCostoDaniosPropiedadMaterialUtilizadoPrecioUnitario]');
            var listaCosto = $('input[name=ClassCostoDaniosPropiedadMaterialUtilizadoCostoUSS]');

            var listaGrabar = new Array();
            for (var i = 0; i < listaMaterial.length; i++) {
                if (listaMaterial[i].value == null || listaMaterial[i].value == "" ||
                    listaCantidad[i].value == null || listaCantidad[i].value == "" ||
                    listaPrecioUnitario[i].value == null || listaPrecioUnitario[i].value == "" ||
                    listaCosto[i].value == null || listaCosto[i].value == ""
                ) {
                    resultado = false;
                    return false;
                }
            }


            if (resultado == true) {
                if (base.Control.GrdResultadoTabCostoDaniosPropiedadMaterialUtilizado.core.rows().data().length == 0) {
                    base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoCantidad().val('');
                    base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoPrecioUnitario().val('');
                    base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoCosto().val('');
                }
                base.Control.GrdResultadoTabCostoDaniosPropiedadMaterialUtilizado.core.row.add({
                    Material: '',
                    Cantidad: '',
                    Tiempo: '',
                    PrecioUnitario: '',
                    Costo: '',

                }).draw(false);

                base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoCantidad().prop('disabled', true);
                base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoPrecioUnitario().prop('disabled', true);
                base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoCosto().prop('disabled', true);

            }
        },
        BtnBuscarCostoDaniosPropiedadMaterialUtilizadoClick: function () {
            $("#divGrdResultadoTabCostoDaniosPropiedadMaterialUtilizado").html("");
            base.Function.CrearGridCostoDaniosPropiedadMaterialUtilizado();
            var filtro = {};
            base.Control.GrdResultadoTabCostoDaniosPropiedadMaterialUtilizado.Load(filtro);
        },
        BtnGridEliminarCostoDaniosPropiedadMaterialUtilizadoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                onAccept: function () {
                    base.Control.GrdResultadoTabCostoDaniosPropiedadMaterialUtilizado.core.row(row[0]).remove().draw(false);
                    var acumCosto = 0.00;
                    $.each(document.getElementsByName("ClassCostoDaniosPropiedadMaterialUtilizadoCostoUSS"), function (index, value) {
                        if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
                            acumCosto += parseFloat($(this).val());
                        }
                    });

                    base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoCosto().val(acumCosto);

                    if (acumCosto == 0) {
                        base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoCantidad().prop('disabled', false);
                        base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoPrecioUnitario().prop('disabled', false);
                        base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoCosto().prop('disabled', false);
                        base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoCosto().val('');
                    } else {
                        base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoCantidad().prop('disabled', true);
                        base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoPrecioUnitario().prop('disabled', true);
                        base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoCosto().prop('disabled', true);
                    }

                }
            });
        },
        CalcularCostoDaniosPropiedadMaterialUtilizadoCostoUSS: function () {
            var acumCosto = 0.00;
            var acumErrorSintaxis = false;
            var CostoDaniosPropiedadMaterialUtilizadoCantidad = 0;
            var CostoDaniosPropiedadMaterialUtilizadoPrecioUnitario = 0.00;
            var CostoDaniosPropiedadMaterialUtilizadoCostoUSS = 0.00;
            CostoDaniosPropiedadMaterialUtilizadoCantidad = $('#txtCostoDaniosPropiedadMaterialUtilizadoCantidad_' + $(this).data().nrofila).val();
            CostoDaniosPropiedadMaterialUtilizadoPrecioUnitario = $('#txtCostoDaniosPropiedadMaterialUtilizadoPrecioUnitario_' + $(this).data().nrofila).val();

            if (isNaN(CostoDaniosPropiedadMaterialUtilizadoCantidad) == true) {
                $('#txtCostoDaniosPropiedadMaterialUtilizadoCantidad_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoDaniosPropiedadMaterialUtilizadoCantidad_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoDaniosPropiedadMaterialUtilizadoCantidad_' + $(this).data().nrofila).removeClass("hasError");
            }


            if (isNaN(CostoDaniosPropiedadMaterialUtilizadoPrecioUnitario) == true) {
                $('#txtCostoDaniosPropiedadMaterialUtilizadoPrecioUnitario_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoDaniosPropiedadMaterialUtilizadoPrecioUnitario_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoDaniosPropiedadMaterialUtilizadoPrecioUnitario_' + $(this).data().nrofila).removeClass("hasError");
            }
            if (acumErrorSintaxis == false) {
                CostoDaniosPropiedadMaterialUtilizadoCostoUSS = base.Function.roundNumber((CostoDaniosPropiedadMaterialUtilizadoCantidad * CostoDaniosPropiedadMaterialUtilizadoPrecioUnitario), 2);

                $('#txtCostoDaniosPropiedadMaterialUtilizadoCostoUSS_' + $(this).data().nrofila).val(CostoDaniosPropiedadMaterialUtilizadoCostoUSS);


                $.each(document.getElementsByName("ClassCostoDaniosPropiedadMaterialUtilizadoCostoUSS"), function (index, value) {
                    if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
                        acumCosto += parseFloat($(this).val());
                    }
                });
                base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoCosto().val(acumCosto);
            }
        },
        CalcularCabeceraCostoDaniosPropiedadMaterialUtilizado: function () {
            var valorTxtCostoDaniosPropiedadMaterialUtilizadoCantidad = 0;
            var valorTxtCostoDaniosPropiedadMaterialUtilizadoPrecioUnitario = 0;

            if (base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoCantidad().val() == '') {
                base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoCantidad().addClass("hasError");
                valorTxtCostoDaniosPropiedadMaterialUtilizadoCantidad = 0;
            } else {
                base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoCantidad().removeClass("hasError");
                valorTxtCostoDaniosPropiedadMaterialUtilizadoCantidad = base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoCantidad().val();
            }


            if (base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoPrecioUnitario().val() == '') {
                base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoPrecioUnitario().addClass("hasError");
                valorTxtCostoDaniosPropiedadMaterialUtilizadoPrecioUnitario = 0;
            } else {
                base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoPrecioUnitario().removeClass("hasError");
                valorTxtCostoDaniosPropiedadMaterialUtilizadoPrecioUnitario = base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoPrecioUnitario().val();
            }

            base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoCosto().val(valorTxtCostoDaniosPropiedadMaterialUtilizadoCantidad * valorTxtCostoDaniosPropiedadMaterialUtilizadoPrecioUnitario)

        },
        TxtCostoDaniosPropiedadMaterialUtilizadoCantidadKeyup: function () {
            base.Event.CalcularCabeceraCostoDaniosPropiedadMaterialUtilizado();
        },
        TxtCostoDaniosPropiedadMaterialUtilizadoPrecioUnitarioKeyup: function () {
            base.Event.CalcularCabeceraCostoDaniosPropiedadMaterialUtilizado();
        },
        TxtCostoDaniosPropiedadMaterialUtilizadoCostoKeyup: function () {
            base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoCantidad().val('');
            base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoPrecioUnitario().val('');
            base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoCantidad().removeClass("hasError");
            base.Control.TxtCostoDaniosPropiedadMaterialUtilizadoPrecioUnitario().removeClass("hasError");
        },

        BtnAgregarCostoDaniosPropiedadCostoAlquilerClick: function (e) {
            e.preventDefault();
            var resultado = true;
            base.Control.UltimoRegistroGridCostoDaniosPropiedadCostoAlquiler++;
            var listaEquipo = $('input[name=CostoDaniosPropiedadCostoAlquilerequipo]');
            var listaCantidad = $('input[name=ClassCostoDaniosPropiedadCostoAlquilerCantidad]');
            var listaTiempo = $('input[name=ClassCostoDaniosPropiedadCostoAlquilerTiempo]');
            var listaPrecioUnitario = $('input[name=ClassCostoDaniosPropiedadCostoAlquilerPrecioUnitario]');
            var listaCosto = $('input[name=ClassCostoDaniosPropiedadCostoAlquilerCostoUSS]');

            var listaGrabar = new Array();
            for (var i = 0; i < listaEquipo.length; i++) {
                if (listaEquipo[i].value == null || listaEquipo[i].value == "" ||
                    listaCantidad[i].value == null || listaCantidad[i].value == "" ||
                    listaTiempo[i].value == null || listaTiempo[i].value == "" ||
                    listaPrecioUnitario[i].value == null || listaPrecioUnitario[i].value == "" ||
                    listaCosto[i].value == null || listaCosto[i].value == ""
                ) {
                    resultado = false;
                    return false;
                }
            }


            if (resultado == true) {
                if (base.Control.GrdResultadoTabCostoDaniosPropiedadCostoAlquiler.core.rows().data().length == 0) {
                    base.Control.TxtCostoDaniosPropiedadCostoAlquilerCantidad().val('');
                    base.Control.TxtCostoDaniosPropiedadCostoAlquilerTiempo().val('');
                    base.Control.TxtCostoDaniosPropiedadCostoAlquilerPrecioUnitario().val('');
                    base.Control.TxtCostoDaniosPropiedadCostoAlquilerCosto().val('');
                }
                base.Control.GrdResultadoTabCostoDaniosPropiedadCostoAlquiler.core.row.add({
                    Equipo: '',
                    Cantidad: '',
                    Tiempo: '',
                    PrecioUnitario: '',
                    Costo: '',

                }).draw(false);

                base.Control.TxtCostoDaniosPropiedadCostoAlquilerCantidad().prop('disabled', true);
                base.Control.TxtCostoDaniosPropiedadCostoAlquilerTiempo().prop('disabled', true);
                base.Control.TxtCostoDaniosPropiedadCostoAlquilerPrecioUnitario().prop('disabled', true);
                base.Control.TxtCostoDaniosPropiedadCostoAlquilerCosto().prop('disabled', true);

            }
        },
        BtnBuscarCostoDaniosPropiedadCostoAlquilerClick: function () {
            $("#divGrdResultadoTabCostoDaniosPropiedadCostoAlquiler").html("");
            base.Function.CrearGridCostoDaniosPropiedadCostoAlquiler();
            var filtro = {};
            base.Control.GrdResultadoTabCostoDaniosPropiedadCostoAlquiler.Load(filtro);
        },
        BtnGridEliminarCostoDaniosPropiedadCostoAlquilerClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                onAccept: function () {
                    base.Control.GrdResultadoTabCostoDaniosPropiedadCostoAlquiler.core.row(row[0]).remove().draw(false);
                    var acumCosto = 0.00;
                    $.each(document.getElementsByName("ClassCostoDaniosPropiedadCostoAlquilerCostoUSS"), function (index, value) {
                        if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
                            acumCosto += parseFloat($(this).val());
                        }
                    });

                    base.Control.TxtCostoDaniosPropiedadCostoAlquilerCosto().val(acumCosto);

                    if (acumCosto == 0) {
                        base.Control.TxtCostoDaniosPropiedadCostoAlquilerCantidad().prop('disabled', false);
                        base.Control.TxtCostoDaniosPropiedadCostoAlquilerTiempo().prop('disabled', false);
                        base.Control.TxtCostoDaniosPropiedadCostoAlquilerPrecioUnitario().prop('disabled', false);
                        base.Control.TxtCostoDaniosPropiedadCostoAlquilerCosto().prop('disabled', false);
                        base.Control.TxtCostoDaniosPropiedadCostoAlquilerCosto().val('');
                    } else {
                        base.Control.TxtCostoDaniosPropiedadCostoAlquilerCantidad().prop('disabled', true);
                        base.Control.TxtCostoDaniosPropiedadCostoAlquilerTiempo().prop('disabled', true);
                        base.Control.TxtCostoDaniosPropiedadCostoAlquilerPrecioUnitario().prop('disabled', true);
                        base.Control.TxtCostoDaniosPropiedadCostoAlquilerCosto().prop('disabled', true);
                    }

                }
            });
        },
        CalcularCostoDaniosPropiedadCostoAlquilerCostoUSS: function () {
            var acumCosto = 0.00;
            var acumErrorSintaxis = false;
            var CostoDaniosPropiedadCostoAlquilerCantidad = 0;
            var CostoDaniosPropiedadCostoAlquilerTiempo = 0;
            var CostoDaniosPropiedadCostoAlquilerPrecioUnitario = 0.00;
            var CostoDaniosPropiedadCostoAlquilerCostoUSS = 0.00;
            CostoDaniosPropiedadCostoAlquilerCantidad = $('#txtCostoDaniosPropiedadCostoAlquilerCantidad_' + $(this).data().nrofila).val();
            CostoDaniosPropiedadCostoAlquilerTiempo = $('#txtCostoDaniosPropiedadCostoAlquilerTiempo_' + $(this).data().nrofila).val();
            CostoDaniosPropiedadCostoAlquilerPrecioUnitario = $('#txtCostoDaniosPropiedadCostoAlquilerPrecioUnitario_' + $(this).data().nrofila).val();

            if (isNaN(CostoDaniosPropiedadCostoAlquilerCantidad) == true) {
                $('#txtCostoDaniosPropiedadCostoAlquilerCantidad_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoDaniosPropiedadCostoAlquilerCantidad_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoDaniosPropiedadCostoAlquilerCantidad_' + $(this).data().nrofila).removeClass("hasError");
            }
            if (isNaN(CostoDaniosPropiedadCostoAlquilerTiempo) == true) {
                $('#txtCostoDaniosPropiedadCostoAlquilerTiempo_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoDaniosPropiedadCostoAlquilerTiempo_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoDaniosPropiedadCostoAlquilerTiempo_' + $(this).data().nrofila).removeClass("hasError");
            }

            if (isNaN(CostoDaniosPropiedadCostoAlquilerPrecioUnitario) == true) {
                $('#txtCostoDaniosPropiedadCostoAlquilerPrecioUnitario_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoDaniosPropiedadCostoAlquilerPrecioUnitario_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoDaniosPropiedadCostoAlquilerPrecioUnitario_' + $(this).data().nrofila).removeClass("hasError");
            }
            if (acumErrorSintaxis == false) {
                CostoDaniosPropiedadCostoAlquilerCostoUSS = base.Function.roundNumber((CostoDaniosPropiedadCostoAlquilerCantidad * CostoDaniosPropiedadCostoAlquilerTiempo * CostoDaniosPropiedadCostoAlquilerPrecioUnitario), 2);

                $('#txtCostoDaniosPropiedadCostoAlquilerCostoUSS_' + $(this).data().nrofila).val(CostoDaniosPropiedadCostoAlquilerCostoUSS);


                $.each(document.getElementsByName("ClassCostoDaniosPropiedadCostoAlquilerCostoUSS"), function (index, value) {
                    if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
                        acumCosto += parseFloat($(this).val());
                    }
                });
                base.Control.TxtCostoDaniosPropiedadCostoAlquilerCosto().val(acumCosto);
            }
        },
        CalcularCabeceraCostoDaniosPropiedadCostoAlquiler: function () {
            var valorTxtCostoDaniosPropiedadCostoAlquilerCantidad = 0;
            var valorTxtCostoDaniosPropiedadCostoAlquilerTiempo = 0;
            var valorTxtCostoDaniosPropiedadCostoAlquilerPrecioUnitario = 0;

            if (base.Control.TxtCostoDaniosPropiedadCostoAlquilerCantidad().val() == '') {
                base.Control.TxtCostoDaniosPropiedadCostoAlquilerCantidad().addClass("hasError");
                valorTxtCostoDaniosPropiedadCostoAlquilerCantidad = 0;
            } else {
                base.Control.TxtCostoDaniosPropiedadCostoAlquilerCantidad().removeClass("hasError");
                valorTxtCostoDaniosPropiedadCostoAlquilerCantidad = base.Control.TxtCostoDaniosPropiedadCostoAlquilerCantidad().val();
            }
            if (base.Control.TxtCostoDaniosPropiedadCostoAlquilerTiempo().val() == '') {
                base.Control.TxtCostoDaniosPropiedadCostoAlquilerTiempo().addClass("hasError");
                valorTxtCostoDaniosPropiedadCostoAlquilerTiempo = 0;
            } else {
                base.Control.TxtCostoDaniosPropiedadCostoAlquilerTiempo().removeClass("hasError");
                valorTxtCostoDaniosPropiedadCostoAlquilerTiempo = base.Control.TxtCostoDaniosPropiedadCostoAlquilerTiempo().val();
            }

            if (base.Control.TxtCostoDaniosPropiedadCostoAlquilerPrecioUnitario().val() == '') {
                base.Control.TxtCostoDaniosPropiedadCostoAlquilerPrecioUnitario().addClass("hasError");
                valorTxtCostoDaniosPropiedadCostoAlquilerPrecioUnitario = 0;
            } else {
                base.Control.TxtCostoDaniosPropiedadCostoAlquilerPrecioUnitario().removeClass("hasError");
                valorTxtCostoDaniosPropiedadCostoAlquilerPrecioUnitario = base.Control.TxtCostoDaniosPropiedadCostoAlquilerPrecioUnitario().val();
            }

            base.Control.TxtCostoDaniosPropiedadCostoAlquilerCosto().val(valorTxtCostoDaniosPropiedadCostoAlquilerCantidad * valorTxtCostoDaniosPropiedadCostoAlquilerTiempo * valorTxtCostoDaniosPropiedadCostoAlquilerPrecioUnitario)

        },
        TxtCostoDaniosPropiedadCostoAlquilerCantidadKeyup: function () {
            base.Event.CalcularCabeceraCostoDaniosPropiedadCostoAlquiler();
        },
        TxtCostoDaniosPropiedadCostoAlquilerTiempoKeyup: function () {
            base.Event.CalcularCabeceraCostoDaniosPropiedadCostoAlquiler();
        },
        TxtCostoDaniosPropiedadCostoAlquilerPrecioUnitarioKeyup: function () {
            base.Event.CalcularCabeceraCostoDaniosPropiedadCostoAlquiler();
        },
        TxtCostoDaniosPropiedadCostoAlquilerCostoKeyup: function () {
            base.Control.TxtCostoDaniosPropiedadCostoAlquilerCantidad().val('');
            base.Control.TxtCostoDaniosPropiedadCostoAlquilerTiempo().val('');
            base.Control.TxtCostoDaniosPropiedadCostoAlquilerPrecioUnitario().val('');
            base.Control.TxtCostoDaniosPropiedadCostoAlquilerCantidad().removeClass("hasError");
            base.Control.TxtCostoDaniosPropiedadCostoAlquilerTiempo().removeClass("hasError");
            base.Control.TxtCostoDaniosPropiedadCostoAlquilerPrecioUnitario().removeClass("hasError");
        },

        //Tab de Costos por Pérdida de Proceso
        BtnAgregarCostoPerdidaProcesoCostoProductoClick: function (e) {
            e.preventDefault();
            var resultado = true;
            base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoProducto++;
            var listaProducto = $('input[name=CostoPerdidaProcesoCostoProductoproducto]');
            var listaCantidad = $('input[name=ClassCostoPerdidaProcesoCostoProductoCantidad]');
            var listaPrecioUnitario = $('input[name=ClassCostoPerdidaProcesoCostoProductoPrecioUnitario]');
            var listaCosto = $('input[name=ClassCostoPerdidaProcesoCostoProductoCostoUSS]');

            var listaGrabar = new Array();
            for (var i = 0; i < listaProducto.length; i++) {
                if (listaProductol[i].value == null || listaProducto[i].value == "" ||
                    listaCantidad[i].value == null || listaCantidad[i].value == "" ||
                    listaPrecioUnitario[i].value == null || listaPrecioUnitario[i].value == "" ||
                    listaCosto[i].value == null || listaCosto[i].value == ""
                ) {
                    resultado = false;
                    return false;
                }
            }


            if (resultado == true) {
                if (base.Control.GrdResultadoTabCostoPerdidaProcesoCostoProducto.core.rows().data().length == 0) {
                    base.Control.TxtCostoPerdidaProcesoCostoProductoCantidad().val('');
                    base.Control.TxtCostoPerdidaProcesoCostoProductoPrecioUnitario().val('');
                    base.Control.TxtCostoPerdidaProcesoCostoProductoCosto().val('');
                }
                base.Control.GrdResultadoTabCostoPerdidaProcesoCostoProducto.core.row.add({
                    Producto: '',
                    Cantidad: '',
                    Tiempo: '',
                    PrecioUnitario: '',
                    Costo: '',

                }).draw(false);

                base.Control.TxtCostoPerdidaProcesoCostoProductoCantidad().prop('disabled', true);
                base.Control.TxtCostoPerdidaProcesoCostoProductoPrecioUnitario().prop('disabled', true);
                base.Control.TxtCostoPerdidaProcesoCostoProductoCosto().prop('disabled', true);

            }
        },
        BtnBuscarCostoPerdidaProcesoCostoProductoClick: function () {
            $("#divGrdResultadoTabCostoPerdidaProcesoCostoProducto").html("");
            base.Function.CrearGridCostoPerdidaProcesoCostoProducto();
            var filtro = {};
            base.Control.GrdResultadoTabCostoPerdidaProcesoCostoProducto.Load(filtro);
        },
        BtnGridEliminarCostoPerdidaProcesoCostoProductoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                onAccept: function () {
                    base.Control.GrdResultadoTabCostoPerdidaProcesoCostoProducto.core.row(row[0]).remove().draw(false);
                    var acumCosto = 0.00;
                    $.each(document.getElementsByName("ClassCostoPerdidaProcesoCostoProductoCostoUSS"), function (index, value) {
                        if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
                            acumCosto += parseFloat($(this).val());
                        }
                    });

                    base.Control.TxtCostoPerdidaProcesoCostoProductoCosto().val(acumCosto);

                    if (acumCosto == 0) {
                        base.Control.TxtCostoPerdidaProcesoCostoProductoCantidad().prop('disabled', false);
                        base.Control.TxtCostoPerdidaProcesoCostoProductoPrecioUnitario().prop('disabled', false);
                        base.Control.TxtCostoPerdidaProcesoCostoProductoCosto().prop('disabled', false);
                        base.Control.TxtCostoPerdidaProcesoCostoProductoCosto().val('');
                    } else {
                        base.Control.TxtCostoPerdidaProcesoCostoProductoCantidad().prop('disabled', true);
                        base.Control.TxtCostoPerdidaProcesoCostoProductoPrecioUnitario().prop('disabled', true);
                        base.Control.TxtCostoPerdidaProcesoCostoProductoCosto().prop('disabled', true);
                    }

                }
            });
        },
        CalcularCostoPerdidaProcesoCostoProductoCostoUSS: function () {
            var acumCosto = 0.00;
            var acumErrorSintaxis = false;
            var CostoPerdidaProcesoCostoProductoCantidad = 0;
            var CostoPerdidaProcesoCostoProductoPrecioUnitario = 0.00;
            var CostoPerdidaProcesoCostoProductoCostoUSS = 0.00;
            CostoPerdidaProcesoCostoProductoCantidad = $('#txtCostoPerdidaProcesoCostoProductoCantidad_' + $(this).data().nrofila).val();
            CostoPerdidaProcesoCostoProductoPrecioUnitario = $('#txtCostoPerdidaProcesoCostoProductoPrecioUnitario_' + $(this).data().nrofila).val();

            if (isNaN(CostoPerdidaProcesoCostoProductoCantidad) == true) {
                $('#txtCostoPerdidaProcesoCostoProductoCantidad_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoPerdidaProcesoCostoProductoCantidad_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoPerdidaProcesoCostoProductoCantidad_' + $(this).data().nrofila).removeClass("hasError");
            }


            if (isNaN(CostoPerdidaProcesoCostoProductoPrecioUnitario) == true) {
                $('#txtCostoPerdidaProcesoCostoProductoPrecioUnitario_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoPerdidaProcesoCostoProductoPrecioUnitario_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoPerdidaProcesoCostoProductoPrecioUnitario_' + $(this).data().nrofila).removeClass("hasError");
            }
            if (acumErrorSintaxis == false) {
                CostoPerdidaProcesoCostoProductoCostoUSS = base.Function.roundNumber((CostoPerdidaProcesoCostoProductoCantidad * CostoPerdidaProcesoCostoProductoPrecioUnitario), 2);

                $('#txtCostoPerdidaProcesoCostoProductoCostoUSS_' + $(this).data().nrofila).val(CostoPerdidaProcesoCostoProductoCostoUSS);


                $.each(document.getElementsByName("ClassCostoPerdidaProcesoCostoProductoCostoUSS"), function (index, value) {
                    if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
                        acumCosto += parseFloat($(this).val());
                    }
                });
                base.Control.TxtCostoPerdidaProcesoCostoProductoCosto().val(acumCosto);
            }
        },
        CalcularCabeceraCostoPerdidaProcesoCostoProducto: function () {
            var valorTxtCostoPerdidaProcesoCostoProductoCantidad = 0;
            var valorTxtCostoPerdidaProcesoCostoProductoPrecioUnitario = 0;

            if (base.Control.TxtCostoPerdidaProcesoCostoProductoCantidad().val() == '') {
                base.Control.TxtCostoPerdidaProcesoCostoProductoCantidad().addClass("hasError");
                valorTxtCostoPerdidaProcesoCostoProductoCantidad = 0;
            } else {
                base.Control.TxtCostoPerdidaProcesoCostoProductoCantidad().removeClass("hasError");
                valorTxtCostoPerdidaProcesoCostoProductoCantidad = base.Control.TxtCostoPerdidaProcesoCostoProductoCantidad().val();
            }


            if (base.Control.TxtCostoPerdidaProcesoCostoProductoPrecioUnitario().val() == '') {
                base.Control.TxtCostoPerdidaProcesoCostoProductoPrecioUnitario().addClass("hasError");
                valorTxtCostoPerdidaProcesoCostoProductoPrecioUnitario = 0;
            } else {
                base.Control.TxtCostoPerdidaProcesoCostoProductoPrecioUnitario().removeClass("hasError");
                valorTxtCostoPerdidaProcesoCostoProductoPrecioUnitario = base.Control.TxtCostoPerdidaProcesoCostoProductoPrecioUnitario().val();
            }

            base.Control.TxtCostoPerdidaProcesoCostoProductoCosto().val(valorTxtCostoPerdidaProcesoCostoProductoCantidad * valorTxtCostoPerdidaProcesoCostoProductoPrecioUnitario)

        },
        TxtCostoPerdidaProcesoCostoProductoCantidadKeyup: function () {
            base.Event.CalcularCabeceraCostoPerdidaProcesoCostoProducto();
        },
        TxtCostoPerdidaProcesoCostoProductoPrecioUnitarioKeyup: function () {
            base.Event.CalcularCabeceraCostoPerdidaProcesoCostoProducto();
        },
        TxtCostoPerdidaProcesoCostoProductoCostoKeyup: function () {
            base.Control.TxtCostoPerdidaProcesoCostoProductoCantidad().val('');
            base.Control.TxtCostoPerdidaProcesoCostoProductoPrecioUnitario().val('');
            base.Control.TxtCostoPerdidaProcesoCostoProductoCantidad().removeClass("hasError");
            base.Control.TxtCostoPerdidaProcesoCostoProductoPrecioUnitario().removeClass("hasError");
        },

        BtnAgregarCostoPerdidaProcesoCostoServicioClick: function (e) {
            e.preventDefault();
            var resultado = true;
            base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoServicio++;
            var listaServicio = $('input[name=CostoPerdidaProcesoCostoServicioservicio]');
            var listaCantidad = $('input[name=ClassCostoPerdidaProcesoCostoServicioCantidad]');
            var listaTiempo = $('input[name=ClassCostoPerdidaProcesoCostoServicioTiempo]');
            var listaPrecioUnitario = $('input[name=ClassCostoPerdidaProcesoCostoServicioPrecioUnitario]');
            var listaCosto = $('input[name=ClassCostoPerdidaProcesoCostoServicioCostoUSS]');

            var listaGrabar = new Array();
            for (var i = 0; i < listaServicio.length; i++) {
                if (listaServicio[i].value == null || listaServicio[i].value == "" ||
                    listaCantidad[i].value == null || listaCantidad[i].value == "" ||
                    listaTiempo[i].value == null || listaTiempo[i].value == "" ||
                    listaPrecioUnitario[i].value == null || listaPrecioUnitario[i].value == "" ||
                    listaCosto[i].value == null || listaCosto[i].value == ""
                ) {
                    resultado = false;
                    return false;
                }
            }


            if (resultado == true) {
                if (base.Control.GrdResultadoTabCostoPerdidaProcesoCostoServicio.core.rows().data().length == 0) {
                    base.Control.TxtCostoPerdidaProcesoCostoServicioCantidad().val('');
                    base.Control.TxtCostoPerdidaProcesoCostoServicioTiempo().val('');
                    base.Control.TxtCostoPerdidaProcesoCostoServicioPrecioUnitario().val('');
                    base.Control.TxtCostoPerdidaProcesoCostoServicioCosto().val('');
                }
                base.Control.GrdResultadoTabCostoPerdidaProcesoCostoServicio.core.row.add({
                    Servicio: '',
                    Cantidad: '',
                    Tiempo: '',
                    PrecioUnitario: '',
                    Costo: '',

                }).draw(false);

                base.Control.TxtCostoPerdidaProcesoCostoServicioCantidad().prop('disabled', true);
                base.Control.TxtCostoPerdidaProcesoCostoServicioTiempo().prop('disabled', true);
                base.Control.TxtCostoPerdidaProcesoCostoServicioPrecioUnitario().prop('disabled', true);
                base.Control.TxtCostoPerdidaProcesoCostoServicioCosto().prop('disabled', true);

            }
        },
        BtnBuscarCostoPerdidaProcesoCostoServicioClick: function () {
            $("#divGrdResultadoTabCostoPerdidaProcesoCostoServicio").html("");
            base.Function.CrearGridCostoPerdidaProcesoCostoServicio();
            var filtro = {};
            base.Control.GrdResultadoTabCostoPerdidaProcesoCostoServicio.Load(filtro);
        },
        BtnGridEliminarCostoPerdidaProcesoCostoServicioClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                onAccept: function () {
                    base.Control.GrdResultadoTabCostoPerdidaProcesoCostoServicio.core.row(row[0]).remove().draw(false);
                    var acumCosto = 0.00;
                    $.each(document.getElementsByName("ClassCostoPerdidaProcesoCostoServicioCostoUSS"), function (index, value) {
                        if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
                            acumCosto += parseFloat($(this).val());
                        }
                    });

                    base.Control.TxtCostoPerdidaProcesoCostoServicioCosto().val(acumCosto);

                    if (acumCosto == 0) {
                        base.Control.TxtCostoPerdidaProcesoCostoServicioCantidad().prop('disabled', false);
                        base.Control.TxtCostoPerdidaProcesoCostoServicioTiempo().prop('disabled', false);
                        base.Control.TxtCostoPerdidaProcesoCostoServicioPrecioUnitario().prop('disabled', false);
                        base.Control.TxtCostoPerdidaProcesoCostoServicioCosto().prop('disabled', false);
                        base.Control.TxtCostoPerdidaProcesoCostoServicioCosto().val('');
                    } else {
                        base.Control.TxtCostoPerdidaProcesoCostoServicioCantidad().prop('disabled', true);
                        base.Control.TxtCostoPerdidaProcesoCostoServicioTiempo().prop('disabled', true);
                        base.Control.TxtCostoPerdidaProcesoCostoServicioPrecioUnitario().prop('disabled', true);
                        base.Control.TxtCostoPerdidaProcesoCostoServicioCosto().prop('disabled', true);
                    }

                }
            });
        },
        CalcularCostoPerdidaProcesoCostoServicioCostoUSS: function () {
            var acumCosto = 0.00;
            var acumErrorSintaxis = false;
            var CostoPerdidaProcesoCostoServicioCantidad = 0;
            var CostoPerdidaProcesoCostoServicioTiempo = 0;
            var CostoPerdidaProcesoCostoServicioPrecioUnitario = 0.00;
            var CostoPerdidaProcesoCostoServicioCostoUSS = 0.00;
            CostoPerdidaProcesoCostoServicioCantidad = $('#txtCostoPerdidaProcesoCostoServicioCantidad_' + $(this).data().nrofila).val();
            CostoPerdidaProcesoCostoServicioTiempo = $('#txtCostoPerdidaProcesoCostoServicioTiempo_' + $(this).data().nrofila).val();
            CostoPerdidaProcesoCostoServicioPrecioUnitario = $('#txtCostoPerdidaProcesoCostoServicioPrecioUnitario_' + $(this).data().nrofila).val();

            if (isNaN(CostoPerdidaProcesoCostoServicioCantidad) == true) {
                $('#txtCostoPerdidaProcesoCostoServicioCantidad_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoPerdidaProcesoCostoServicioCantidad_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoPerdidaProcesoCostoServicioCantidad_' + $(this).data().nrofila).removeClass("hasError");
            }
            if (isNaN(CostoPerdidaProcesoCostoServicioTiempo) == true) {
                $('#txtCostoPerdidaProcesoCostoServicioTiempo_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoPerdidaProcesoCostoServicioTiempo_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoPerdidaProcesoCostoServicioTiempo_' + $(this).data().nrofila).removeClass("hasError");
            }

            if (isNaN(CostoPerdidaProcesoCostoServicioPrecioUnitario) == true) {
                $('#txtCostoPerdidaProcesoCostoServicioPrecioUnitario_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoPerdidaProcesoCostoServicioPrecioUnitario_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoPerdidaProcesoCostoServicioPrecioUnitario_' + $(this).data().nrofila).removeClass("hasError");
            }
            if (acumErrorSintaxis == false) {
                CostoPerdidaProcesoCostoServicioCostoUSS = base.Function.roundNumber((CostoPerdidaProcesoCostoServicioCantidad * CostoPerdidaProcesoCostoServicioTiempo * CostoPerdidaProcesoCostoServicioPrecioUnitario), 2);

                $('#txtCostoPerdidaProcesoCostoServicioCostoUSS_' + $(this).data().nrofila).val(CostoPerdidaProcesoCostoServicioCostoUSS);


                $.each(document.getElementsByName("ClassCostoPerdidaProcesoCostoServicioCostoUSS"), function (index, value) {
                    if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
                        acumCosto += parseFloat($(this).val());
                    }
                });
                base.Control.TxtCostoPerdidaProcesoCostoServicioCosto().val(acumCosto);
            }
        },
        CalcularCabeceraCostoPerdidaProcesoCostoServicio: function () {
            var valorTxtCostoPerdidaProcesoCostoServicioCantidad = 0;
            var valorTxtCostoPerdidaProcesoCostoServicioTiempo = 0;
            var valorTxtCostoPerdidaProcesoCostoServicioPrecioUnitario = 0;

            if (base.Control.TxtCostoPerdidaProcesoCostoServicioCantidad().val() == '') {
                base.Control.TxtCostoPerdidaProcesoCostoServicioCantidad().addClass("hasError");
                valorTxtCostoPerdidaProcesoCostoServicioCantidad = 0;
            } else {
                base.Control.TxtCostoPerdidaProcesoCostoServicioCantidad().removeClass("hasError");
                valorTxtCostoPerdidaProcesoCostoServicioCantidad = base.Control.TxtCostoPerdidaProcesoCostoServicioCantidad().val();
            }
            if (base.Control.TxtCostoPerdidaProcesoCostoServicioTiempo().val() == '') {
                base.Control.TxtCostoPerdidaProcesoCostoServicioTiempo().addClass("hasError");
                valorTxtCostoPerdidaProcesoCostoServicioTiempo = 0;
            } else {
                base.Control.TxtCostoPerdidaProcesoCostoServicioTiempo().removeClass("hasError");
                valorTxtCostoPerdidaProcesoCostoServicioTiempo = base.Control.TxtCostoPerdidaProcesoCostoServicioTiempo().val();
            }

            if (base.Control.TxtCostoPerdidaProcesoCostoServicioPrecioUnitario().val() == '') {
                base.Control.TxtCostoPerdidaProcesoCostoServicioPrecioUnitario().addClass("hasError");
                valorTxtCostoPerdidaProcesoCostoServicioPrecioUnitario = 0;
            } else {
                base.Control.TxtCostoPerdidaProcesoCostoServicioPrecioUnitario().removeClass("hasError");
                valorTxtCostoPerdidaProcesoCostoServicioPrecioUnitario = base.Control.TxtCostoPerdidaProcesoCostoServicioPrecioUnitario().val();
            }

            base.Control.TxtCostoPerdidaProcesoCostoServicioCosto().val(valorTxtCostoPerdidaProcesoCostoServicioCantidad * valorTxtCostoPerdidaProcesoCostoServicioTiempo * valorTxtCostoPerdidaProcesoCostoServicioPrecioUnitario)

        },
        TxtCostoPerdidaProcesoCostoServicioCantidadKeyup: function () {
            base.Event.CalcularCabeceraCostoPerdidaProcesoCostoServicio();
        },
        TxtCostoPerdidaProcesoCostoServicioTiempoKeyup: function () {
            base.Event.CalcularCabeceraCostoPerdidaProcesoCostoServicio();
        },
        TxtCostoPerdidaProcesoCostoServicioPrecioUnitarioKeyup: function () {
            base.Event.CalcularCabeceraCostoPerdidaProcesoCostoServicio();
        },
        TxtCostoPerdidaProcesoCostoServicioCostoKeyup: function () {
            base.Control.TxtCostoPerdidaProcesoCostoServicioCantidad().val('');
            base.Control.TxtCostoPerdidaProcesoCostoServicioTiempo().val('');
            base.Control.TxtCostoPerdidaProcesoCostoServicioPrecioUnitario().val('');
            base.Control.TxtCostoPerdidaProcesoCostoServicioCantidad().removeClass("hasError");
            base.Control.TxtCostoPerdidaProcesoCostoServicioTiempo().removeClass("hasError");
            base.Control.TxtCostoPerdidaProcesoCostoServicioPrecioUnitario().removeClass("hasError");
        },

        BtnAgregarCostoPerdidaProcesoCostoOcasionadoEquipoClick: function (e) {
            e.preventDefault();
            var resultado = true;
            base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoOcasionadoEquipo++;
            var listaEquipo = $('input[name=CostoPerdidaProcesoCostoOcasionadoEquipoequipo]');
            var listaCantidad = $('input[name=ClassCostoPerdidaProcesoCostoOcasionadoEquipoCantidad]');
            var listaTiempo = $('input[name=ClassCostoPerdidaProcesoCostoOcasionadoEquipoTiempo]');
            var listaPrecioUnitario = $('input[name=ClassCostoPerdidaProcesoCostoOcasionadoEquipoPrecioUnitario]');
            var listaCosto = $('input[name=ClassCostoPerdidaProcesoCostoOcasionadoEquipoCostoUSS]');

            var listaGrabar = new Array();
            for (var i = 0; i < listaEquipo.length; i++) {
                if (listaEquipo[i].value == null || listaEquipo[i].value == "" ||
                    listaCantidad[i].value == null || listaCantidad[i].value == "" ||
                    listaTiempo[i].value == null || listaTiempo[i].value == "" ||
                    listaPrecioUnitario[i].value == null || listaPrecioUnitario[i].value == "" ||
                    listaCosto[i].value == null || listaCosto[i].value == ""
                ) {
                    resultado = false;
                    return false;
                }
            }


            if (resultado == true) {
                if (base.Control.GrdResultadoTabCostoPerdidaProcesoCostoOcasionadoEquipo.core.rows().data().length == 0) {
                    base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoCantidad().val('');
                    base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoTiempo().val('');
                    base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoPrecioUnitario().val('');
                    base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoCosto().val('');
                }
                base.Control.GrdResultadoTabCostoPerdidaProcesoCostoOcasionadoEquipo.core.row.add({
                    Equipo: '',
                    Cantidad: '',
                    Tiempo: '',
                    PrecioUnitario: '',
                    Costo: '',

                }).draw(false);

                base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoCantidad().prop('disabled', true);
                base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoTiempo().prop('disabled', true);
                base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoPrecioUnitario().prop('disabled', true);
                base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoCosto().prop('disabled', true);

            }
        },
        BtnBuscarCostoPerdidaProcesoCostoOcasionadoEquipoClick: function () {
            $("#divGrdResultadoTabCostoPerdidaProcesoCostoOcasionadoEquipo").html("");
            base.Function.CrearGridCostoPerdidaProcesoCostoOcasionadoEquipo();
            var filtro = {};
            base.Control.GrdResultadoTabCostoPerdidaProcesoCostoOcasionadoEquipo.Load(filtro);
        },
        BtnGridEliminarCostoPerdidaProcesoCostoOcasionadoEquipoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                onAccept: function () {
                    base.Control.GrdResultadoTabCostoPerdidaProcesoCostoOcasionadoEquipo.core.row(row[0]).remove().draw(false);
                    var acumCosto = 0.00;
                    $.each(document.getElementsByName("ClassCostoPerdidaProcesoCostoOcasionadoEquipoCostoUSS"), function (index, value) {
                        if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
                            acumCosto += parseFloat($(this).val());
                        }
                    });

                    base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoCosto().val(acumCosto);

                    if (acumCosto == 0) {
                        base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoCantidad().prop('disabled', false);
                        base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoTiempo().prop('disabled', false);
                        base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoPrecioUnitario().prop('disabled', false);
                        base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoCosto().prop('disabled', false);
                        base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoCosto().val('');
                    } else {
                        base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoCantidad().prop('disabled', true);
                        base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoTiempo().prop('disabled', true);
                        base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoPrecioUnitario().prop('disabled', true);
                        base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoCosto().prop('disabled', true);
                    }

                }
            });
        },
        CalcularCostoPerdidaProcesoCostoOcasionadoEquipoCostoUSS: function () {
            var acumCosto = 0.00;
            var acumErrorSintaxis = false;
            var CostoPerdidaProcesoCostoOcasionadoEquipoCantidad = 0;
            var CostoPerdidaProcesoCostoOcasionadoEquipoTiempo = 0;
            var CostoPerdidaProcesoCostoOcasionadoEquipoPrecioUnitario = 0.00;
            var CostoPerdidaProcesoCostoOcasionadoEquipoCostoUSS = 0.00;
            CostoPerdidaProcesoCostoOcasionadoEquipoCantidad = $('#txtCostoPerdidaProcesoCostoOcasionadoEquipoCantidad_' + $(this).data().nrofila).val();
            CostoPerdidaProcesoCostoOcasionadoEquipoTiempo = $('#txtCostoPerdidaProcesoCostoOcasionadoEquipoTiempo_' + $(this).data().nrofila).val();
            CostoPerdidaProcesoCostoOcasionadoEquipoPrecioUnitario = $('#txtCostoPerdidaProcesoCostoOcasionadoEquipoPrecioUnitario_' + $(this).data().nrofila).val();

            if (isNaN(CostoPerdidaProcesoCostoOcasionadoEquipoCantidad) == true) {
                $('#txtCostoPerdidaProcesoCostoOcasionadoEquipoCantidad_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoPerdidaProcesoCostoOcasionadoEquipoCantidad_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoPerdidaProcesoCostoOcasionadoEquipoCantidad_' + $(this).data().nrofila).removeClass("hasError");
            }
            if (isNaN(CostoPerdidaProcesoCostoOcasionadoEquipoTiempo) == true) {
                $('#txtCostoPerdidaProcesoCostoOcasionadoEquipoTiempo_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoPerdidaProcesoCostoOcasionadoEquipoTiempo_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoPerdidaProcesoCostoOcasionadoEquipoTiempo_' + $(this).data().nrofila).removeClass("hasError");
            }

            if (isNaN(CostoPerdidaProcesoCostoOcasionadoEquipoPrecioUnitario) == true) {
                $('#txtCostoPerdidaProcesoCostoOcasionadoEquipoPrecioUnitario_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoPerdidaProcesoCostoOcasionadoEquipoPrecioUnitario_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoPerdidaProcesoCostoOcasionadoEquipoPrecioUnitario_' + $(this).data().nrofila).removeClass("hasError");
            }
            if (acumErrorSintaxis == false) {
                CostoPerdidaProcesoCostoOcasionadoEquipoCostoUSS = base.Function.roundNumber((CostoPerdidaProcesoCostoOcasionadoEquipoCantidad * CostoPerdidaProcesoCostoOcasionadoEquipoTiempo * CostoPerdidaProcesoCostoOcasionadoEquipoPrecioUnitario), 2);

                $('#txtCostoPerdidaProcesoCostoOcasionadoEquipoCostoUSS_' + $(this).data().nrofila).val(CostoPerdidaProcesoCostoOcasionadoEquipoCostoUSS);


                $.each(document.getElementsByName("ClassCostoPerdidaProcesoCostoOcasionadoEquipoCostoUSS"), function (index, value) {
                    if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
                        acumCosto += parseFloat($(this).val());
                    }
                });
                base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoCosto().val(acumCosto);
            }
        },
        CalcularCabeceraCostoPerdidaProcesoCostoOcasionadoEquipo: function () {
            var valorTxtCostoPerdidaProcesoCostoOcasionadoEquipoCantidad = 0;
            var valorTxtCostoPerdidaProcesoCostoOcasionadoEquipoTiempo = 0;
            var valorTxtCostoPerdidaProcesoCostoOcasionadoEquipoPrecioUnitario = 0;

            if (base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoCantidad().val() == '') {
                base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoCantidad().addClass("hasError");
                valorTxtCostoPerdidaProcesoCostoOcasionadoEquipoCantidad = 0;
            } else {
                base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoCantidad().removeClass("hasError");
                valorTxtCostoPerdidaProcesoCostoOcasionadoEquipoCantidad = base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoCantidad().val();
            }
            if (base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoTiempo().val() == '') {
                base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoTiempo().addClass("hasError");
                valorTxtCostoPerdidaProcesoCostoOcasionadoEquipoTiempo = 0;
            } else {
                base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoTiempo().removeClass("hasError");
                valorTxtCostoPerdidaProcesoCostoOcasionadoEquipoTiempo = base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoTiempo().val();
            }

            if (base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoPrecioUnitario().val() == '') {
                base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoPrecioUnitario().addClass("hasError");
                valorTxtCostoPerdidaProcesoCostoOcasionadoEquipoPrecioUnitario = 0;
            } else {
                base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoPrecioUnitario().removeClass("hasError");
                valorTxtCostoPerdidaProcesoCostoOcasionadoEquipoPrecioUnitario = base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoPrecioUnitario().val();
            }

            base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoCosto().val(valorTxtCostoPerdidaProcesoCostoOcasionadoEquipoCantidad * valorTxtCostoPerdidaProcesoCostoOcasionadoEquipoTiempo * valorTxtCostoPerdidaProcesoCostoOcasionadoEquipoPrecioUnitario)

        },
        TxtCostoPerdidaProcesoCostoOcasionadoEquipoCantidadKeyup: function () {
            base.Event.CalcularCabeceraCostoPerdidaProcesoCostoOcasionadoEquipo();
        },
        TxtCostoPerdidaProcesoCostoOcasionadoEquipoTiempoKeyup: function () {
            base.Event.CalcularCabeceraCostoPerdidaProcesoCostoOcasionadoEquipo();
        },
        TxtCostoPerdidaProcesoCostoOcasionadoEquipoPrecioUnitarioKeyup: function () {
            base.Event.CalcularCabeceraCostoPerdidaProcesoCostoOcasionadoEquipo();
        },
        TxtCostoPerdidaProcesoCostoOcasionadoEquipoCostoKeyup: function () {
            base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoCantidad().val('');
            base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoTiempo().val('');
            base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoPrecioUnitario().val('');
            base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoCantidad().removeClass("hasError");
            base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoTiempo().removeClass("hasError");
            base.Control.TxtCostoPerdidaProcesoCostoOcasionadoEquipoPrecioUnitario().removeClass("hasError");
        },

        BtnAgregarCostoPerdidaProcesoCostoOcasionadoPersonalClick: function (e) {
            e.preventDefault();
            var resultado = true;
            base.Control.UltimoRegistroGridCostoPerdidaProcesoCostoOcasionadoPersonal++;
            var listaApellidosNombres = $('input[name=CostoPerdidaProcesoCostoOcasionadoPersonalapellidosnombres]');
            var listaDocIdentidad = $('input[name=CostoPerdidaProcesoCostoOcasionadoPersonaldocidentidad]');
            var listaEmpresa = $('input[name=CostoPerdidaProcesoCostoOcasionadoPersonalempresa]');
            var listaCantidad = $('input[name=ClassCostoPerdidaProcesoCostoOcasionadoPersonalCantidad]');
            var listaTiempo = $('input[name=ClassCostoPerdidaProcesoCostoOcasionadoPersonalTiempo]');
            var listaPrecioUnitario = $('input[name=ClassCostoPerdidaProcesoCostoOcasionadoPersonalPrecioUnitario]');
            var listaCosto = $('input[name=ClassCostoPerdidaProcesoCostoOcasionadoPersonalCostoUSS]');

            var listaGrabar = new Array();
            for (var i = 0; i < listaApellidosNombres.length; i++) {
                if (listaApellidosNombres[i].value == null || listaApellidosNombres[i].value == "" ||
                    listaDocIdentidad[i].value == null || listaDocIdentidad[i].value == "" ||
                    listaEmpresa[i].value == null || listaEmpresa[i].value == "" ||
                    listaCantidad[i].value == null || listaCantidad[i].value == "" ||
                    listaTiempo[i].value == null || listaTiempo[i].value == "" ||
                    listaPrecioUnitario[i].value == null || listaPrecioUnitario[i].value == "" ||
                    listaCosto[i].value == null || listaCosto[i].value == ""
                ) {
                    resultado = false;
                    return false;
                }
            }


            if (resultado == true) {
                if (base.Control.GrdResultadoTabCostoPerdidaProcesoCostoOcasionadoPersonal.core.rows().data().length == 0) {
                    base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalCantidad().val('');
                    base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalTiempo().val('');
                    base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalPrecioUnitario().val('');
                    base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalCosto().val('');
                }
                base.Control.GrdResultadoTabCostoPerdidaProcesoCostoOcasionadoPersonal.core.row.add({
                    ApellidosNombres: '',
                    DocIdentidad: '',
                    Empresa: '',
                    Cantidad: '',
                    Tiempo: '',
                    PrecioUnitario: '',
                    Costo: '',

                }).draw(false);

                base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalCantidad().prop('disabled', true);
                base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalTiempo().prop('disabled', true);
                base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalPrecioUnitario().prop('disabled', true);
                base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalCosto().prop('disabled', true);

            }
        },
        BtnBuscarCostoPerdidaProcesoCostoOcasionadoPersonalClick: function () {
            $("#divGrdResultadoTabCostoPerdidaProcesoCostoOcasionadoPersonal").html("");
            base.Function.CrearGridCostoPerdidaProcesoCostoOcasionadoPersonal();
            var filtro = {};
            base.Control.GrdResultadoTabCostoPerdidaProcesoCostoOcasionadoPersonal.Load(filtro);
        },
        BtnGridEliminarCostoPerdidaProcesoCostoOcasionadoPersonalClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                onAccept: function () {
                    base.Control.GrdResultadoTabCostoPerdidaProcesoCostoOcasionadoPersonal.core.row(row[0]).remove().draw(false);
                    var acumCosto = 0.00;
                    $.each(document.getElementsByName("ClassCostoPerdidaProcesoCostoOcasionadoPersonalCostoUSS"), function (index, value) {
                        if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
                            acumCosto += parseFloat($(this).val());
                        }
                    });

                    base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalCosto().val(acumCosto);

                    if (acumCosto == 0) {
                        base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalCantidad().prop('disabled', false);
                        base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalTiempo().prop('disabled', false);
                        base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalPrecioUnitario().prop('disabled', false);
                        base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalCosto().prop('disabled', false);
                        base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalCosto().val('');
                    } else {
                        base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalCantidad().prop('disabled', true);
                        base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalTiempo().prop('disabled', true);
                        base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalPrecioUnitario().prop('disabled', true);
                        base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalCosto().prop('disabled', true);
                    }

                }
            });
        },
        CalcularCostoPerdidaProcesoCostoOcasionadoPersonalCostoUSS: function () {
            var acumCosto = 0.00;
            var acumErrorSintaxis = false;
            var CostoPerdidaProcesoCostoOcasionadoPersonalCantidad = 0;
            var CostoPerdidaProcesoCostoOcasionadoPersonalTiempo = 0;
            var CostoPerdidaProcesoCostoOcasionadoPersonalPrecioUnitario = 0.00;
            var CostoPerdidaProcesoCostoOcasionadoPersonalCostoUSS = 0.00;
            CostoPerdidaProcesoCostoOcasionadoPersonalCantidad = $('#txtCostoPerdidaProcesoCostoOcasionadoPersonalCantidad_' + $(this).data().nrofila).val();
            CostoPerdidaProcesoCostoOcasionadoPersonalTiempo = $('#txtCostoPerdidaProcesoCostoOcasionadoPersonalTiempo_' + $(this).data().nrofila).val();
            CostoPerdidaProcesoCostoOcasionadoPersonalPrecioUnitario = $('#txtCostoPerdidaProcesoCostoOcasionadoPersonalPrecioUnitario_' + $(this).data().nrofila).val();

            if (isNaN(CostoPerdidaProcesoCostoOcasionadoPersonalCantidad) == true) {
                $('#txtCostoPerdidaProcesoCostoOcasionadoPersonalCantidad_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoPerdidaProcesoCostoOcasionadoPersonalCantidad_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoPerdidaProcesoCostoOcasionadoPersonalCantidad_' + $(this).data().nrofila).removeClass("hasError");
            }
            if (isNaN(CostoPerdidaProcesoCostoOcasionadoPersonalTiempo) == true) {
                $('#txtCostoPerdidaProcesoCostoOcasionadoPersonalTiempo_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoPerdidaProcesoCostoOcasionadoPersonalTiempo_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoPerdidaProcesoCostoOcasionadoPersonalTiempo_' + $(this).data().nrofila).removeClass("hasError");
            }

            if (isNaN(CostoPerdidaProcesoCostoOcasionadoPersonalPrecioUnitario) == true) {
                $('#txtCostoPerdidaProcesoCostoOcasionadoPersonalPrecioUnitario_' + $(this).data().nrofila).addClass("hasError");
                $('#txtCostoPerdidaProcesoCostoOcasionadoPersonalPrecioUnitario_' + $(this).data().nrofila).val('');
                acumErrorSintaxis = true;
            } else {
                $('#txtCostoPerdidaProcesoCostoOcasionadoPersonalPrecioUnitario_' + $(this).data().nrofila).removeClass("hasError");
            }
            if (acumErrorSintaxis == false) {
                CostoPerdidaProcesoCostoOcasionadoPersonalCostoUSS = base.Function.roundNumber((CostoPerdidaProcesoCostoOcasionadoPersonalCantidad * CostoPerdidaProcesoCostoOcasionadoPersonalTiempo * CostoPerdidaProcesoCostoOcasionadoPersonalPrecioUnitario), 2);

                $('#txtCostoPerdidaProcesoCostoOcasionadoPersonalCostoUSS_' + $(this).data().nrofila).val(CostoPerdidaProcesoCostoOcasionadoPersonalCostoUSS);


                $.each(document.getElementsByName("ClassCostoPerdidaProcesoCostoOcasionadoPersonalCostoUSS"), function (index, value) {
                    if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
                        acumCosto += parseFloat($(this).val());
                    }
                });
                base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalCosto().val(acumCosto);
            }
        },
        CalcularCabeceraCostoPerdidaProcesoCostoOcasionadoPersonal: function () {
            var valorTxtCostoPerdidaProcesoCostoOcasionadoPersonalCantidad = 0;
            var valorTxtCostoPerdidaProcesoCostoOcasionadoPersonalTiempo = 0;
            var valorTxtCostoPerdidaProcesoCostoOcasionadoPersonalPrecioUnitario = 0;

            if (base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalCantidad().val() == '') {
                base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalCantidad().addClass("hasError");
                valorTxtCostoPerdidaProcesoCostoOcasionadoPersonalCantidad = 0;
            } else {
                base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalCantidad().removeClass("hasError");
                valorTxtCostoPerdidaProcesoCostoOcasionadoPersonalCantidad = base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalCantidad().val();
            }
            if (base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalTiempo().val() == '') {
                base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalTiempo().addClass("hasError");
                valorTxtCostoPerdidaProcesoCostoOcasionadoPersonalTiempo = 0;
            } else {
                base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalTiempo().removeClass("hasError");
                valorTxtCostoPerdidaProcesoCostoOcasionadoPersonalTiempo = base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalTiempo().val();
            }

            if (base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalPrecioUnitario().val() == '') {
                base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalPrecioUnitario().addClass("hasError");
                valorTxtCostoPerdidaProcesoCostoOcasionadoPersonalPrecioUnitario = 0;
            } else {
                base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalPrecioUnitario().removeClass("hasError");
                valorTxtCostoPerdidaProcesoCostoOcasionadoPersonalPrecioUnitario = base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalPrecioUnitario().val();
            }

            base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalCosto().val(valorTxtCostoPerdidaProcesoCostoOcasionadoPersonalCantidad * valorTxtCostoPerdidaProcesoCostoOcasionadoPersonalTiempo * valorTxtCostoPerdidaProcesoCostoOcasionadoPersonalPrecioUnitario)

        },
        TxtCostoPerdidaProcesoCostoOcasionadoPersonalCantidadKeyup: function () {
            base.Event.CalcularCabeceraCostoPerdidaProcesoCostoOcasionadoPersonal();
        },
        TxtCostoPerdidaProcesoCostoOcasionadoPersonalTiempoKeyup: function () {
            base.Event.CalcularCabeceraCostoPerdidaProcesoCostoOcasionadoPersonal();
        },
        TxtCostoPerdidaProcesoCostoOcasionadoPersonalPrecioUnitarioKeyup: function () {
            base.Event.CalcularCabeceraCostoPerdidaProcesoCostoOcasionadoPersonal();
        },
        TxtCostoPerdidaProcesoCostoOcasionadoPersonalCostoKeyup: function () {
            base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalCantidad().val('');
            base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalTiempo().val('');
            base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalPrecioUnitario().val('');
            base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalCantidad().removeClass("hasError");
            base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalTiempo().removeClass("hasError");
            base.Control.TxtCostoPerdidaProcesoCostoOcasionadoPersonalPrecioUnitario().removeClass("hasError");
        },
        TxtCostoPerdidaProcesoIncrementoHorasExtraCostoKeyup: function () {
            base.Event.CalcularCabeceraCostoPerdidaProcesoIncrementoTotal();
        },
        TxtCostoPerdidaProcesoIncrementoContratacionAdaptacionCostoKeyup: function () {
            base.Event.CalcularCabeceraCostoPerdidaProcesoIncrementoTotal();
        },
        TxtCostoPerdidaProcesoIncrementoSubContratacionCostoKeyup: function () {
            base.Event.CalcularCabeceraCostoPerdidaProcesoIncrementoTotal();
        },
        TxtCostoPerdidaProcesoIncrementoOtrosCostoKeyup: function () {
            base.Event.CalcularCabeceraCostoPerdidaProcesoIncrementoTotal();
        },
        CalcularCabeceraCostoPerdidaProcesoIncrementoTotal: function () {
            var acumIncrementoCosto = 0.00;
            var valorTxtCostoPerdidaProcesoIncrementoHorasExtraCosto = 0;
            var valorTxtCostoPerdidaProcesoIncrementoContratacionAdaptacionCosto = 0;
            var valorTxtCostoPerdidaProcesoIncrementoSubContratacionCosto = 0;
            var valorTxtCostoPerdidaProcesoIncrementoOtrosCosto = 0;

            if (base.Control.TxtCostoPerdidaProcesoIncrementoHorasExtraCosto().val() != "") {
                valorTxtCostoPerdidaProcesoIncrementoHorasExtraCosto = base.Control.TxtCostoPerdidaProcesoIncrementoHorasExtraCosto().val()
            }
            if (base.Control.TxtCostoPerdidaProcesoIncrementoContratacionAdaptacionCosto().val() != "") {
                valorTxtCostoPerdidaProcesoIncrementoContratacionAdaptacionCosto = base.Control.TxtCostoPerdidaProcesoIncrementoContratacionAdaptacionCosto().val()
            }
            if (base.Control.TxtCostoPerdidaProcesoIncrementoSubContratacionCosto().val() != "") {
                valorTxtCostoPerdidaProcesoIncrementoSubContratacionCosto = base.Control.TxtCostoPerdidaProcesoIncrementoSubContratacionCosto().val()
            }
            if (base.Control.TxtCostoPerdidaProcesoIncrementoOtrosCosto().val() != "") {
                valorTxtCostoPerdidaProcesoIncrementoOtrosCosto = base.Control.TxtCostoPerdidaProcesoIncrementoOtrosCosto().val()
            }
            acumIncrementoCosto = (parseFloat(valorTxtCostoPerdidaProcesoIncrementoHorasExtraCosto) + parseFloat(valorTxtCostoPerdidaProcesoIncrementoContratacionAdaptacionCosto) +
                parseFloat(valorTxtCostoPerdidaProcesoIncrementoSubContratacionCosto) + parseFloat(valorTxtCostoPerdidaProcesoIncrementoOtrosCosto));

            base.Control.TxtCostoPerdidaProcesoIncrementoCosto().val(acumIncrementoCosto)
        },

        DdlDetalleCondicionAmbientalChange: function () {
            if (base.Control.DdlDetalleCondicionAmbiental().val() == 'OTR') {
                base.Control.TxtOtrosCondicionAmbiental().attr("disabled", false);
            } else {
                base.Control.TxtOtrosCondicionAmbiental().val('');
                base.Control.TxtOtrosCondicionAmbiental().attr("disabled", true);
                base.Control.TxtOtrosCondicionAmbiental().attr('class', 'form-control');
            }
        },

        DdlDetallePlanEmergenciaChange: function () {
            if (base.Control.DdlDetallePlanEmergencia().val() == '01') {
                base.Control.TxtDetalleComentarioEmergencia().attr("disabled", false);
            } else {
                base.Control.TxtDetalleComentarioEmergencia().val('');
                base.Control.TxtDetalleComentarioEmergencia().attr("disabled", true);
                base.Control.TxtDetalleComentarioEmergencia().attr('class', 'form-control');
            }
        },

        ObtenerEmpresaColaborador: function (empresaColaborador) {
            if (empresaColaborador != null) {
                base.Ajax.AjaxGrabarInvestigacionPersonaInvolucrada.data = {
                    CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                    CodigoEmpresa: empresaColaborador.CodigoEmpresa,
                    CodigoPersonaInvolucrada: empresaColaborador.CodigoColaborador,
                    CodigoRecord: base.Control.FormularioInvestigacionModel.Investigacion.CodigoRecord,
                    CodigoPuestoTrabajo: empresaColaborador.CodigoPuestoTrabajo

                };
                base.Ajax.AjaxGrabarInvestigacionPersonaInvolucrada.submit();
            }
        },

        BtnGuardarInformacionGeneralClick: function () {
            'use-strict'
            if (base.Control.Validador.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarInvestigacion.data = {
                            CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                            CodigoEmpresa: base.Control.FormularioInvestigacionModel.CodigoEmpresa,
                            CodigoEmpresaInvolucrada: base.Control.DdlDetalleEmpresaInvolucrada().val(),
                            Titulo: base.Control.TxtDetalleTituloIncidente().val(),
                            CodigoRelacionMayorRiesgo: base.Control.DdlDetalleRelacionadoMayoresRiesgos().val(),
                            IncidenteDentroAlcanceOperacion: base.Control.DdlDetalleIncidenteDentroOperacion().val(),
                            NombreLugarExacto: base.Control.TxtDetalleLugarExacto().val(),
                            FechaRecordString: base.Control.DtpDetalleFechaRecord().val() + ' ' + base.Control.DdlDetalleHoraRecord().val() + ":" + base.Control.DdlDetalleMinutoRecord().val(),
                            FechaReporteString: base.Control.DtpDetalleFechaReporteAnuncio().val() + ' ' + base.Control.DdlDetalleHoraReporteAnuncio().val() + ":" + base.Control.DdlDetalleMinutoReporteAnuncio().val(),
                            FechaInvestigacionString: base.Control.DtpDetalleFechaInicioInvestigacion().val() + ' ' + base.Control.DdlDetalleHoraInicioInvestigacion().val() + ":" + base.Control.DdlDetalleMinutoInicioInvestigacion().val(),
                            CodigoTurno: base.Control.DdlDetalleTurno().val(),                            
                            HoraTurno: base.Control.DdlDetalleHorasTurno().val(),
                            IncidenteTrabajo: base.Control.DdlDetalleFueIncidenteTrabajo().val(),
                            TurnoRegular: base.Control.DdlDetalleTurno().val(),
                            TrabajoHabitual: base.Control.DdlDetalleTrabajoHabitual().val(),
                            CodigoColaboradorOrdenoTrabajo: base.Control.HdnCodigoColaboradorOrdenoTrabajo().val(),
                            SupervisionMomentoIncidente: base.Control.DdlDetalleSupervisionIncidente().val(),
                            CodigoColaboradorSupervisorTrabajo: base.Control.HdnCodigoColaboradorSupervisorTrabajo().val(),
                            EjecutoPlanEmergencia: base.Control.DdlDetallePlanEmergencia().val(),
                            ComentarioPlanEmergencia: base.Control.TxtDetalleComentarioEmergencia().val(),
                            CodigoCondicionAmbiental: base.Control.DdlDetalleCondicionAmbiental().val(),
                            OtrosCondicionAmbiental: base.Control.TxtOtrosCondicionAmbiental().val(),
                            IndicadorControlEmergencia: base.Control.SlcControlEmergencia().val(),
                            ComentarioControlEmergencia: base.Control.TxtComentarioControlEmergencia().val(),
                            IndicadorPlanCrisis: base.Control.SlcPlanCrisis().val(),
                            ComentarioPlanCrisis: base.Control.TxtComentarioPlanCrisis().val(),
                            IndicadorOrganizaciones: base.Control.SlcReportoOrganizaciones().val(),
                            ComentarioOrganizaciones: base.Control.TxtComentarioOrganizaciones().val()
                        }
                        base.Ajax.AjaxGrabarInvestigacion.submit();
                    }
                });
            } else {
                $("#frmInformacionGeneralSummaryErrorMessage").empty();
                $("#frmInformacionGeneralSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },

        BtnGrabarDescripcionPreEventoClick: function () {
            if (base.Control.ValidadorDescripcionPre.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarDescripcionPreEvento.data = {
                            CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                            DescripcionPre: base.Control.TxaDescripcionPreEvento().val()
                        }
                        base.Ajax.AjaxGrabarDescripcionPreEvento.submit();
                    }
                });
            } else {
                $("#frmDescripcionPreEventoSummaryErrorMessage").empty();
                $("#frmDescripcionPreEventoSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },

        BtnGrabarDescripcionEventoClick: function () {
            if (base.Control.ValidatorDescripcion.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarDescripcionEvento.data = {
                            CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                            Descripcion: base.Control.TxaDescripcionEvento().val()
                        }
                        base.Ajax.AjaxGrabarDescripcionEvento.submit();
                    }
                });
            } else {
                $("#frmDescripcionEventoSummaryErrorMessage").empty();
                $("#frmDescripcionEventoSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },

        BtnGrabarDescripcionPostEventoClick: function () {
            if (base.Control.ValidadorDescripcionPost.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarDescripcionPostEvento.data = {
                            CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                            DescripcionPost: base.Control.TxaDescripcionPostEvento().val()
                        }
                        base.Ajax.AjaxGrabarDescripcionPostEvento.submit();
                    }
                });
            } else {
                $("#frmDescripcionPostEventoSummaryErrorMessage").empty();
                $("#frmDescripcionPostEventoSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },
        BtnBuscarColaboradorSupervisabaTrabajoClick: function () {
            base.Control.DlgFormularioBuscarColaboradorSupervisabaTrabajo.Show(false, [], {
                CodigoEmpresa: null
            });
        },

        //cancelar redireccionar a bandeja investigacion
        BtnCancelarInformacionGeneralClick: function () {
            window.location.href = Pe.ElectroPeru.SGI.Presentacion.Base.Actions.FormularioInvestigacion;
        },

        btnCancelarDatosReportanteClick: function () {
            window.location.href = Pe.ElectroPeru.SGI.Presentacion.Base.Actions.FormularioInvestigacion;
        },

        btnCancelarEstadoInvestigacionClick: function () {
            window.location.href = Pe.ElectroPeru.SGI.Presentacion.Base.Actions.FormularioInvestigacion;
        },

        BtnCancelDescripcionPreEventoClick: function () {
            window.location.href = Pe.ElectroPeru.SGI.Presentacion.Base.Actions.FormularioInvestigacion;
        },

        BtnCancelarDescripcionEventoClick: function () {
            window.location.href = Pe.ElectroPeru.SGI.Presentacion.Base.Actions.FormularioInvestigacion;
        },

        BtnCancelarDescripcionPostEventoClick: function () {
            window.location.href = Pe.ElectroPeru.SGI.Presentacion.Base.Actions.FormularioInvestigacion;
        },
        //BtnAgregarEmpresaColaboradorSupervisorClick: function () {
        //    base.Control.DlgFormularioEmpresaColaboradorInvolucrado.Show();
        //},

        BtnAgregarEmpresaColaboradorInvestigadorClick: function () {
            base.Control.DlgFormularioEmpresaColaboradorInvolucrado.Show();
        },

        //BtnGridEditTrabajadorInvolucradoClick: function (row, data) {
        //    base.Control.DlgFormularioTrabajadorInvolucrado.Show(data);
        //},
        ////////// EVENT - SUOERVISOR OPERACIONES
        BtnGridEditSupervisorClick: function (row, data) {
            base.Control.DlgFormularioSupervisor.Show({
                CodigoEstadoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion,
                CodigoInvestigacionSupervisor: data.CodigoInvestigacionSupervisor,
                CodigoInvestigacion: data.CodigoInvestigacion,
                CodigoColaboradorInvolucrado: data.CodigoColaboradorInvolucrado
            });
        },

        BtnGridDeleteSupervisorClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarSupervisor.data = {
                        CodigoInvestigacionSupervisor: data.CodigoInvestigacionSupervisor,
                    };
                    base.Ajax.AjaxEliminarSupervisor.submit();
                }
            });
        },

        BtnGridEditTestigoClick: function (row, data) {
            base.Control.DlgFormularioTestigo.Show({
                CodigoEstadoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion,
                CodigoInvestigacionTestigo: data.CodigoInvestigacionTestigo,
                CodigoInvestigacion: data.CodigoInvestigacion,
                CodigoColaborador: data.CodigoColaboradorInvolucrado
            });
        },
        BtnGridEditTestigoExternoClick: function(row, data){
            base.Event.SetValuesFormularioTestigoExterno(data);
        },
        SetValuesFormularioTestigoExterno: function (value) {
            base.Control.HdnCodigoTestigoExterno().val(value != '' ? value.CodigoInvestigacionTestigo : '');
            base.Control.TxtNombreTestigoExterno().val(value != '' ? value.Nombres : '');
            base.Control.TxtApellidoPaternoTestigoExterno().val(value != '' ? value.ApellidoPaterno : '');
            base.Control.TxtApellidoMaternoTestigoExterno().val(value != '' ? value.ApellidoMaterno : '');
            base.Control.SlcTipoDocumento().val(value != '' ? value.CodigoTipoDocumento : '');
            base.Control.TxtNumeroDocumentoTestigoExterno().val(value != '' ? value.NumeroDocumento : '');
        },
        BtnGridDeleteTestigoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {                    
                    base.Control.TipoTestigoInvestigacion = data.TipoTestigo;
                    base.Ajax.AjaxEliminarTestigo.data = {
                        CodigoInvestigacionTestigo: data.CodigoInvestigacionTestigo,
                    };
                    base.Ajax.AjaxEliminarTestigo.submit();
                }
            });
        },

        BtnGridEditCausaInmediataClick: function (row, data) {
            base.Control.DlgFormularioCausasInmediatas.Show({
                CodigoEstadoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion,
                CodigoInvestigacionCausaInmediata: data.CodigoInvestigacionCausaInmediata,
                CodigoInvestigacion: data.CodigoInvestigacion
            });
        },

        BtnGridDeleteCausaInmediataClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarCausaInmediata.data = {
                        CodigoInvestigacionCausaInmediata: data.CodigoInvestigacionCausaInmediata,
                    };
                    base.Ajax.AjaxEliminarCausaInmediata.submit();
                }
            });
        },

        BtnGridEditFactorCausalClick: function (row, data) {
            base.Control.DlgFormularioFactoresCausales.Show({
                CodigoEstadoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion,
                CodigoInvestigacionFactorCausal: data.CodigoInvestigacionFactorCausal,
                CodigoInvestigacion: data.CodigoInvestigacion,
                CodigoFactorCausal: data.CodigoFactorCausal
            });
        },

        BtnGridDeleteFactorCausalClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarFactorCausal.data = {
                        CodigoInvestigacionFactorCausal: data.CodigoInvestigacionFactorCausal,
                    };
                    base.Ajax.AjaxEliminarFactorCausal.submit();
                }
            });
        },

        BtnGridEditCausaRaizClick: function (row, data) {
            data.CodigoEstadoInvestigacion = base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion,
            base.Control.DlgFormularioCausaRaiz.Show(data);
        },

        BtnGridDeleteCausaRaizClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarCausaRaiz.data = {
                        CodigoInvestigacionCausaRaiz: data.CodigoInvestigacionCausaRaiz,
                    };
                    base.Ajax.AjaxEliminarCausaRaiz.submit();
                }
            });
        },

        BtnGridEditEventoClick: function (row, data) {
            base.Control.DlgFormularioSecuenciaEvento.Show({
                CodigoEstadoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion,
                CodigoInvestigacionEvento: data.CodigoInvestigacionEvento,
                CodigoInvestigacion: data.CodigoInvestigacion
            });
        },

        BtnGridDeleteEventoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarEvento.data = {
                        CodigoInvestigacionEvento: data.CodigoInvestigacionEvento,
                    };
                    base.Ajax.AjaxEliminarEvento.submit();
                }
            });
        },
        SetValuesFormularioInformacionBarreras: function(value){
            base.Control.HdnCodigoInformacionBarrera().val(value == '' ? '' : value.CodigoInvestigacionBarrera);
            base.Control.SlcCondicionBarrera().val(value == '' ? '' : value.CodigoCondicionBarrera);
            base.Control.SlcTipoBarrera().val(value == '' ? '' : value.CodigoTipoBarrera);
            base.Control.TxtDescripcionCortaBarrera().val(value == '' ? '' : value.DescripcionUno);
            base.Control.TxtDescripcionLargaBarrera().val(value == '' ? '' : value.DescripcionDos);
        },
        SetValuesFormularioInformacionFallos: function (value) {
            base.Control.HdnCodigoInformacionFallos().val(value == '' ? '' : value.CodigoInvestigacionBarrera);
            base.Control.SlcSeleccionBarrera().val(value == '' ? '' : value.CodigoInvestigacionBarreraPadre);
            base.Control.TxtDescripcionFalloBarrera().val(value == '' ? '' : value.DescripcionUno);
            base.Control.TxtRecomendacionesBarrera().val(value == '' ? '' : value.DescripcionDos);
        },
        BtnGridEditInformacionBarreraClick: function (row, data) {
            base.Event.SetValuesFormularioInformacionBarreras(data);
        },
        BtnGridDeleteInformacionBarreraClick: function (row, data) {
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarInvestigacionBarrera.data = data;
                    base.Ajax.AjaxEliminarInvestigacionBarrera.submit();
                }
            });
        },
        BtnGridEditInformacionFallosClick: function (row, data) {
            base.Event.SetValuesFormularioInformacionFallos(data);
        },
        BtnGridDeleteInformacionFallosClick: function (row, data) {
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarInvestigacionFallo.data = data;
                    base.Ajax.AjaxEliminarInvestigacionFallo.submit();
                }
            });
        },

        BtnBuscarTrabajadorInvolucradoClick: function () {
            $("#divGrdResultadoTrabajadorInvolucrado").html("");
            base.Function.CrearGridTrabajadorInvolucrado();
            base.Control.GrdResultadoTrabajadorInvolucrado.Load({
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion
            });
        },

        BtnBuscarSupervisorClick: function () {
            $("#divGrdResultadoSupervisor").html("");
            base.Function.CrearGridSupervisor();
            base.Control.GrdResultadoSupervisor.Load({
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion
            });
        },

        BtnBuscarTestigoClick: function () {
            $("#divGrdResultadoTestigo").html("");
            base.Function.CrearGridTestigo();
            base.Control.GrdResultadoTestigo.Load({
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                TipoTestigo: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.TestigoInterno
            });
        },

        BtnBuscarTestigoExternoClick: function () {
            $("#divGrdResultadoTestigoExterno").html("");
            base.Function.CrearGridTestigoExterno();
            base.Control.GrdResultadoTestigoExterno.Load({
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                TipoTestigo: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.TestigoExterno
            });
        },

        //DLgs Categorias
        BtnAgregarCategoriaImpactoAmbienteClick: function () {
            base.Control.DlgFormularioCuerpoReceptorAfectado.Show({
                CodigoEstadoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion,
                CodigoInvestigacionCategoria: base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaMedioAmbiental,
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion
            });
        },
        BtnAgregarCategoriaImpactoClick: function () {
            base.Control.DlgFormularioComunidadInvolucrada.Show({
                CodigoEstadoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion,
                CodigoInvestigacionCategoria: base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaImpactoComunidad,
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion
            });
        },
        BtnAgregarCategoriaDanioClick: function () {
            base.Control.DlgFormularioDanioPropiedad.Show({
                CodigoEstadoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion,
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                CodigoInvestigacionCategoria: base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaDanioPropiedad
            });
        },
        BtnAgregarCategoriaPerdidaClick: function () {
            base.Control.DlgFormularioPerdidaProceso.Show({
                CodigoEstadoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion,
                CodigoInvestigacionCategoria: base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaPerdidaProceso,
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion
            });
        },
        BtnGrabarCategoriaOtrosClick: function () {
            if (base.Control.ValidadorCategoriaOtros.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarInvestigacionCategoriaOtros.data = {
                            CodigoInvestigacionCategoria: base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaOtros,
                            CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                            CodigoConsecuenciaActual: $("input[name='radioActualCategoriaOtros']:checked").val(),
                            CodigoConsecuenciaPotencial: $("input[name='radioPotencialCategoriaOtros']:checked").val(),
                            DescripcionCategoriaOtros: base.Control.TxtDescripcionCategoriaOtros().val(),
                        };
                        base.Ajax.AjaxRegistrarInvestigacionCategoriaOtros.submit();
                    }
                });
            } else {
                $('#frmCategoriaOtrosSummaryErrorMessage').empty();
                $('#frmCategoriaOtrosSummaryErrorMessage').append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },
        GetValorMasAltoConsecuenciaChecked: function () {
            var array = [];
            if ($('input[name="codigoConsecuenciaLesion"]:checked').data() != undefined) {
                var obj = {
                    numero: $('input[name="codigoConsecuenciaLesion"]:checked').data().numero,
                    codigo: $('input[name="codigoConsecuenciaLesion"]:checked').data().codigo,
                    descripcion: $('input[name="codigoConsecuenciaLesion"]:checked').data().descripcion,
                    valor: $('input[name="codigoConsecuenciaLesion"]:checked').val()
                }
                array.push(obj);
            }
            if ($('input[name="codigoConsecuenciaImpacto"]:checked').data() != undefined) {
                var obj = {
                    numero: $('input[name="codigoConsecuenciaImpacto"]:checked').data().numero,
                    codigo: $('input[name="codigoConsecuenciaImpacto"]:checked').data().codigo,
                    descripcion: $('input[name="codigoConsecuenciaImpacto"]:checked').data().descripcion,
                    valor: $('input[name="codigoConsecuenciaImpacto"]:checked').val()
                }
                array.push(obj);
            }
            if ($('input[name="codigoConsecuenciaDanio"]:checked').data() != undefined) {
                var obj = {
                    numero: $('input[name="codigoConsecuenciaDanio"]:checked').data().numero,
                    codigo: $('input[name="codigoConsecuenciaDanio"]:checked').data().codigo,
                    descripcion: $('input[name="codigoConsecuenciaDanio"]:checked').data().descripcion,
                    valor: $('input[name="codigoConsecuenciaDanio"]:checked').val()
                }
                array.push(obj);
            }
            if ($('input[name="codigoConsecuenciaPerdida"]:checked').data() != undefined) {
                var obj = {
                    numero: $('input[name="codigoConsecuenciaPerdida"]:checked').data().numero,
                    codigo: $('input[name="codigoConsecuenciaPerdida"]:checked').data().codigo,
                    descripcion: $('input[name="codigoConsecuenciaPerdida"]:checked').data().descripcion,
                    valor: $('input[name="codigoConsecuenciaPerdida"]:checked').val()
                }
                array.push(obj);
            }
            if ($('input[name="codigoConsecuenciaMedioAmbiental"]:checked').data() != undefined) {
                var obj = {
                    numero: $('input[name="codigoConsecuenciaMedioAmbiental"]:checked').data().numero,
                    codigo: $('input[name="codigoConsecuenciaMedioAmbiental"]:checked').data().codigo,
                    descripcion: $('input[name="codigoConsecuenciaMedioAmbiental"]:checked').data().descripcion,
                    valor: $('input[name="codigoConsecuenciaMedioAmbiental"]:checked').val()
                }
                array.push(obj);
            }

            var mayor = 0;
            var indice = '';
            for (var i = 0; i < array.length; i++) {
                if (array[i].numero > mayor) {
                    mayor = array[i].numero;
                    indice = i;
                }
            }

            return array[indice];
        },
        BtnGrabarCategoriaCuasiClick: function () {
            if (base.Event.GetValorMasAltoConsecuenciaChecked() != undefined && base.Event.GetValorMasAltoConsecuenciaChecked() != null) {
                var ListaInvestigacionCategoriaCuasi = [];
                $('.chkPotencial:checked').each(function (i) {
                    ListaInvestigacionCategoriaCuasi.push({
                        CodigoCategoriaTexto: $(this).data().codigo,
                        CodigoConsecuenciaPotencial: $(this).val()
                    });
                });

                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarInvestigacionCategoriaCuasi.data = {
                            CodigoInvestigacionCategoria: base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaCuasi,
                            CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                            CodigoConsecuenciaPotencial: base.Event.GetValorMasAltoConsecuenciaChecked().valor,
                            CodigoCategoriaTextoPotencial: base.Event.GetValorMasAltoConsecuenciaChecked().codigo,
                            ListaInvestigacionCategoriaCuasi: ListaInvestigacionCategoriaCuasi
                        };
                        base.Ajax.AjaxRegistrarInvestigacionCategoriaCuasi.submit();
                    }
                });
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.DebeSeleccionarRegistro
                });
            }
        },
        //Load Grids Categorias
        BtnBuscarCategoriaLesionClick: function () {
            $("#divGrdCategoriaLesion").html("");
            base.Function.CrearGridCategoriaLesion();
            base.Control.GrdCategoriaLesion.Load({
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion
            });
        },
        BtnBuscarCategoriaImpactoAmbienteClick: function () {
            $("#divGrdCategoriaImpactoAmbiente").html("");
            base.Function.CrearGridCategoriaImpactoAmbiente();
            base.Control.GrdCategoriaImpactoAmbiente.Load({
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion
            });
        },
        BtnBuscarCategoriaImpactoClick: function () {
            $("#divGrdCategoriaImpacto").html("");
            base.Function.CrearGridCategoriaImpacto();
            base.Control.GrdCategoriaImpacto.Load({
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion
            });
        },
        BtnBuscarCategoriaDanioClick: function () {
            $("#divGrdCategoriaDanio").html("");
            base.Function.CrearGridCategoriaDanio();
            base.Control.GrdCategoriaDanio.Load({
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion
            });
        },
        BtnBuscarCategoriaPerdidaClick: function () {
            $("#divGrdCategoriaPerdida").html("");
            base.Function.CrearGridCategoriaPerdida();
            base.Control.GrdCategoriaPerdida.Load({
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion
            });
        },

        BtnAgregarSupervisorClick: function () {
            base.Control.DlgFormularioEmpresaColaboradorSupervisor.Show();
        },

        //////////////////  ANEXOS
        AjaxValidacionSnapChartSuccess: function (resultado) {
          
            if (resultado.Result[0].CodigoHpi == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.ValoresHPI_SI 
                || resultado.Result[0].CodigoCategoriaIncidente == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.LesionTiempoPerdido
                || resultado.Result[0].CodigoCategoriaIncidente == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.Fatalidad) {
                base.Control.DlgFormularioAnexoSnapchart.Show({
                    CodigoEstadoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion,
                    CodigoInvestigacionAnexo: null,
                    CodigoArchivoAnexoSharePoint: base.Control.FormularioInvestigacionModel.Investigacion.CodigoArchivoSnapchart,
                    CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                    CodigoClaseAnexo: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoInvestigacionTipoAnexo.CodigoSnapChart,
                    IndicadorObligatorio: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.IndicadorObligatorio.Afirmativo,
                    flagPermitirCodigoTipoApendice: false,
                    IndicadorListado: null,
                });
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.MensajeValidacionClasificacionPrincipal,
                });
            }
        },
        BtnBuscarInvestigacionAnexoApendiceClick: function () {
            $("#divGrdResultadoTipoAnexo").html("");
            base.Function.CrearGridTipoAnexo();
            if (base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion != null) {
                var filtro = {
                    CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                    CodigoEstadoRegistro: '1',
                    CodigoTipoAnexo: 'ADJ',
                    IndicadorObligatorio: true
                };
                base.Control.GrdResultadoTipoAnexo.Load(filtro);
            }
        },

        BtnBuscarTipoAnexoClick: function () {
            $("#divGrdResultadoInvestigcionAnexoApendice").html("");
            base.Function.CrearGridInvestigacionAnexoApendice();
            if (base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion != null) {
                var filtro = {
                    CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                    CodigoTipoAnexo: 'ADJ'
                };
                base.Control.GrdResultadoInvestigacionAnexoApendice.Load(filtro);
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

        BtnAgregarInvestigacionAnexoApendiceClick: function () {

            if (base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion != null) {
                base.Control.DlgFormularioInvestigacionAnexoApendice.Show({
                    // CodigoArchivoAnexoSharePoint: CodigoArchi,
                    CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                    CodigoEstadoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion,
                    Validar: true,
                    flagPermitirCodigoTipoApendice: true,
                    IndicadorListado: true,
                });
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValidarTabPrincipal,
                });
            }
        },

        //////////////  FOTOS
        BtnBuscarInvestigacionAnexoFotoClick: function () {
            $("#divGrdResultadoInvestigacionAnexoFoto").html("");
            base.Function.CrearGridInvestigacionAnexoFoto();
            if (base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion != null) {
                var filtro = {
                    CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                    CodigoTipoAnexo: 'FOT'
                };
                base.Control.GrdResultadoInvestigacionAnexoFoto.Load(filtro);
            }
        },

        BtnAgregarInvestigacionAnexoFotoClick: function () {
            if (base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion != null) {
                base.Control.DlgFormularioInvestigacionAnexoFoto.Show({
                    CodigoInvestigacionAnexo: null,
                    CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                    CodigoEstadoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion,
                });
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValidarTabPrincipal,
                });
            }
        },

        //////////////////INVESTIGADOR
        BtnAgregarInvestigadorClick: function () {
            base.Control.DlgFormularioEmpresaColaboradorInvestigador.Show();
        },


        //Click Botones CATEGORIA    
        BtnAgregarCategoriaLesionClick: function () {
            base.Control.Mensaje.Warning({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.MensajeCategoriaAgregarLesionado
            });
        },

        BtnGridDeleteCategoriaLesionClick: function () {
            base.Control.Mensaje.Warning({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.MensajeCategoriaEliminarLesionado
            });
        },
        BtnGridEditarCategoriaLesionClick: function (row, data) {
            data.FechaRecordString = base.Control.FormularioInvestigacionModel.Investigacion.FechaRecordString;
            data.CodigoEstadoInvestigacion = base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion;
            data.CodigoInvestigacion = base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion;
            data.CodigoInvestigacionCategoria = base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaLesion;
            if (base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaLesion != null) {
                base.Control.DlgFormularioLesionTrabajador.Show(data);
            }
        },
        BtnGridEditarCategoriaImpactoAmbienteClick: function (row, data) {
            data.CodigoEstadoInvestigacion = base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion;
            data.CodigoInvestigacionCategoria = base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaMedioAmbiental;
            if (base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaMedioAmbiental != null) {
                base.Control.DlgFormularioCuerpoReceptorAfectado.Show(data);
            }
        },
        BtnGridEditarCategoriaDanioClick: function (row, data) {
            data.CodigoEstadoInvestigacion = base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion;
            data.CodigoInvestigacion = base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion;
            data.CodigoInvestigacionCategoria = base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaDanioPropiedad;
            base.Control.DlgFormularioDanioPropiedad.Show(data);
        },
        BtnGridEditarCategoriaPerdidaClick: function (row, data) {
            data.CodigoEstadoInvestigacion = base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion;
            data.CodigoInvestigacionCategoria = base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaPerdidaProceso;
            if (base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaPerdidaProceso != null) {
                base.Control.DlgFormularioPerdidaProceso.Show(data);
            }
        },
        BtnGridDeleteCategoriaPerdidaClick: function (row, data) {
            'use strict'
            if (base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaPerdidaProceso != null) {
                base.Control.Mensaje.Delete({
                    onAccept: function () {
                        data.CodigoInvestigacionCategoria = base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaPerdidaProceso;
                        base.Ajax.AjaxEliminarInvestigacionPerdidaProceso.data = data;
                        base.Ajax.AjaxEliminarInvestigacionPerdidaProceso.submit();
                    }
                });
            }
        },
        BtnGridDeleteCategoriaImpactoAmbienteClick: function (row, data) {
            'use strict'
            if (base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaMedioAmbiental != null) {
                base.Control.Mensaje.Delete({
                    onAccept: function () {
                        data.CodigoInvestigacionCategoria = base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaMedioAmbiental;
                        base.Ajax.AjaxEliminarInvestigacionCuerpoReceptor.data = data;
                        base.Ajax.AjaxEliminarInvestigacionCuerpoReceptor.submit();
                    }
                });
            }
        },
        AjaxEliminarInvestigacionPerdidaProcesoSuccess: function (resultado) {
            'use strict'
            if (resultado.IsSuccess) {
                base.Control.TxtActualConsecuenciaCategoriaPerdidaProceso().val(resultado.Result.DescripcionConsecuenciaActual);
                base.Control.TxtPotencialConsecuenciaCategoriaPerdidaProceso().val(resultado.Result.DescripcionConsecuenciaPotencial);

                if (resultado.Result.CodigoConsecuenciaActual != '' && resultado.Result.CodigoConsecuenciaActual != null &&
                    resultado.Result.CodigoConsecuenciaPotencial != '' && resultado.Result.CodigoConsecuenciaPotencial != null) {
                    $('input[name="consecuenciaInvestigacionCategoriaPerdidaActual"]').each(function (i) {
                        $(this).prop("checked", false);
                    });
                    $('input[name="consecuenciaInvestigacionCategoriaPerdidaPotencial"]').each(function (i) {
                        $(this).prop("checked", false);
                    });
                    $('#radioCategoriaPerdidaActual_' + resultado.Result.CodigoConsecuenciaActual).prop("checked", true);
                    $('#radioCategoriaPerdidaPotencial_' + resultado.Result.CodigoConsecuenciaPotencial).prop("checked", true);
                } else {
                    $('input[name="consecuenciaInvestigacionCategoriaPerdidaActual"]').each(function (i) {
                        $(this).prop("checked", false);
                    });

                    $('input[name="consecuenciaInvestigacionCategoriaPerdidaPotencial"]').each(function (i) {
                        $(this).prop("checked", false);
                    });
                }

                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });

                base.Event.BtnBuscarCategoriaPerdidaClick();
            } else {
                base.Control.Mensaje.Error({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxEliminarInvestigacionCuerpoReceptorSuccess: function (resultado) {
            'use strict'
            if (resultado.IsSuccess) {
                base.Control.TxtActualConsecuenciaCategoriaImpactoAmbiente().val(resultado.Result.DescripcionConsecuenciaActual);
                base.Control.TxtPotencialConsecuenciaCategoriaImpactoAmbiente().val(resultado.Result.DescripcionConsecuenciaPotencial);

                if (resultado.Result.CodigoConsecuenciaActual != '' && resultado.Result.CodigoConsecuenciaActual != null &&
                    resultado.Result.CodigoConsecuenciaPotencial != '' && resultado.Result.CodigoConsecuenciaPotencial != null) {
                    $('input[name="consecuenciaInvestigacionCategoriaImpactoAmbienteActual"]').each(function (i) {
                        $(this).prop("checked", false);
                    });
                    $('input[name="consecuenciaInvestigacionCategoriaImpactoAmbientePotencial"]').each(function (i) {
                        $(this).prop("checked", false);
                    });
                    $('#radioCategoriaImpactoAmbienteActual_' + resultado.Result.CodigoConsecuenciaActual).prop("checked", true);
                    $('#radioCategoriaImpactoAmbientePotencial_' + resultado.Result.CodigoConsecuenciaPotencial).prop("checked", true);
                } else {
                    $('input[name="consecuenciaInvestigacionCategoriaImpactoAmbienteActual"]').each(function (i) {
                        $(this).prop("checked", false);
                    });

                    $('input[name="consecuenciaInvestigacionCategoriaImpactoAmbientePotencial"]').each(function (i) {
                        $(this).prop("checked", false);
                    });
                }

                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });

                base.Event.BtnBuscarCategoriaImpactoAmbienteClick();
            } else {
                base.Control.Mensaje.Error({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxRegistrarInvestigacionCategoriaPorCheckSuccess: function (resultado) {
            'use strict'
            if (resultado.Result.CodigoInvestigacionCategoria != null) {
                if (resultado.Result.CodigoCategoriaAbreviado == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CategoriaLesion) {
                    base.Control.BtnAgregarCategoriaLesion().prop('disabled', false);
                    base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaLesion = resultado.Result.CodigoInvestigacionCategoria;
                } else if (resultado.Result.CodigoCategoriaAbreviado == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CategoriaImpactoAmbiental) {
                    base.Control.BtnAgregarCategoriaImpactoAmbiente().prop('disabled', false);
                    base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaMedioAmbiental = resultado.Result.CodigoInvestigacionCategoria;
                } else if (resultado.Result.CodigoCategoriaAbreviado == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CategoriaImpactoComunidad) {
                    base.Control.BtnAgregarCategoriaImpacto().prop('disabled', false);
                    base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaImpactoComunidad = resultado.Result.CodigoInvestigacionCategoria;
                } else if (resultado.Result.CodigoCategoriaAbreviado == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CategoriaDanioPropiedad) {
                    base.Control.BtnAgregarCategoriaDanio().prop('disabled', false);
                    base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaDanioPropiedad = resultado.Result.CodigoInvestigacionCategoria;
                } else if (resultado.Result.CodigoCategoriaAbreviado == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CategoriaPerdidaProceso) {
                    base.Control.BtnAgregarCategoriaPerdida().prop('disabled', false);
                    base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaPerdidaProceso = resultado.Result.CodigoInvestigacionCategoria;
                } else if (resultado.Result.CodigoCategoriaAbreviado == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CategoriaCuasiIncidente) {
                    base.Control.BtnGrabarCategoriaCuasi().prop('disabled', false);
                    base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaCuasi = resultado.Result.CodigoInvestigacionCategoria;
                } else if (resultado.Result.CodigoCategoriaAbreviado == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CategoriaOtros) {
                    base.Control.BtnGrabarCategoriaOtros().prop('disabled', false);
                    base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaOtros = resultado.Result.CodigoInvestigacionCategoria;
                }
            }
        },
        AjaxEliminarInvestigacionCategoriaPorCheckSuccess: function (resultado) {
            'use strict'
            if (resultado.Result.CodigoCategoriaAbreviado != null && resultado.Result.CodigoCategoriaAbreviado != '') {
                if (resultado.Result.CodigoCategoriaAbreviado == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CategoriaLesion) {
                    base.Control.BtnAgregarCategoriaLesion().prop('disabled', true);
                    $('input[name="consecuenciaInvestigacionCategoriaLesionActual"]:checked').each(function (i) {
                        $(this).prop('checked', false);
                    });
                    $('input[name="consecuenciaInvestigacionCategoriaLesionPotencial"]:checked').each(function (i) {
                        $(this).prop('checked', false);
                    });
                    base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaLesion = null;
                    base.Control.TxtActualConsecuenciaCategoriaLesion().val('');
                    base.Control.TxtPotencialConsecuenciaCategoriaLesion().val('');
                    base.Event.BtnBuscarCategoriaLesionClick();
                } else if (resultado.Result.CodigoCategoriaAbreviado == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CategoriaImpactoAmbiental) {
                    base.Control.BtnAgregarCategoriaImpactoAmbiente().prop('disabled', true);
                    $('input[name="consecuenciaInvestigacionCategoriaImpactoAmbienteActual"]:checked').each(function (i) {
                        $(this).prop('checked', false);
                    });
                    $('input[name="consecuenciaInvestigacionCategoriaImpactoAmbientePotencial"]:checked').each(function (i) {
                        $(this).prop('checked', false);
                    });
                    base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaMedioAmbiental = null;
                    base.Control.TxtActualConsecuenciaCategoriaImpactoAmbiente().val('');
                    base.Control.TxtPotencialConsecuenciaCategoriaImpactoAmbiente().val('');
                    base.Event.BtnBuscarCategoriaImpactoAmbienteClick();
                } else if (resultado.Result.CodigoCategoriaAbreviado == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CategoriaImpactoComunidad) {
                    base.Control.BtnAgregarCategoriaImpacto().prop('disabled', true);
                    $('input[name="consecuenciaInvestigacionCategoriaImpactoComunidadActual"]:checked').each(function (i) {
                        $(this).prop('checked', false);
                    });
                    $('input[name="consecuenciaInvestigacionCategoriaImpactoComunidadPotencial"]:checked').each(function (i) {
                        $(this).prop('checked', false);
                    });
                    base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaImpactoComunidad = null;
                    base.Control.TxtActualConsecuenciaCategoriaImpactoComunidad().val('');
                    base.Control.TxtPotencialConsecuenciaCategoriaImpactoComunidad().val('');
                    base.Event.BtnBuscarCategoriaImpactoClick();
                } else if (resultado.Result.CodigoCategoriaAbreviado == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CategoriaDanioPropiedad) {
                    base.Control.BtnAgregarCategoriaDanio().prop('disabled', true);
                    $('input[name="consecuenciaInvestigacionCategoriaDanioActual"]:checked').each(function (i) {
                        $(this).prop('checked', false);
                    });
                    $('input[name="consecuenciaInvestigacionCategoriaDanioPotencial"]:checked').each(function (i) {
                        $(this).prop('checked', false);
                    });
                    base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaDanioPropiedad = null;
                    base.Control.TxtActualConsecuenciaCategoriaDanioPropiedad().val('');
                    base.Control.TxtPotencialConsecuenciaCategoriaDanioPropiedad().val('');
                    base.Event.BtnBuscarCategoriaDanioClick();
                } else if (resultado.Result.CodigoCategoriaAbreviado == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CategoriaPerdidaProceso) {
                    base.Control.BtnAgregarCategoriaPerdida().prop('disabled', true);
                    $('input[name="consecuenciaInvestigacionCategoriaPerdidaActual"]:checked').each(function (i) {
                        $(this).prop('checked', false);
                    });
                    $('input[name="consecuenciaInvestigacionCategoriaPerdidaPotencial"]:checked').each(function (i) {
                        $(this).prop('checked', false);
                    });
                    base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaPerdidaProceso = null;
                    base.Control.TxtActualConsecuenciaCategoriaPerdidaProceso().val('');
                    base.Control.TxtPotencialConsecuenciaCategoriaPerdidaProceso().val('');
                    base.Event.BtnBuscarCategoriaPerdidaClick();
                } else if (resultado.Result.CodigoCategoriaAbreviado == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CategoriaCuasiIncidente) {
                    base.Control.BtnGrabarCategoriaCuasi().prop('disabled', true);
                    $('.chkPotencial:checked').each(function (i) {
                        $(this).prop('checked', false);
                    });
                    base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaCuasi = null;
                    base.Control.TxtConsecuenciaPotencialCategoriaCuasi().val('');
                } else if (resultado.Result.CodigoCategoriaAbreviado == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CategoriaOtros) {
                    base.Control.BtnGrabarCategoriaOtros().prop('disabled', true);
                    $('.radioActualCategoriaOtros:checked').each(function (i) {
                        $(this).prop('checked', false);
                    });
                    $('.radioPotencialCategoriaOtros:checked').each(function (i) {
                        $(this).prop('checked', false);
                    });
                    base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaOtros = null;
                    base.Control.TxtDescripcionCategoriaOtros().val('');
                    base.Control.TxtConsecuenciaActualCategoriaOtros().val('');
                    base.Control.TxtConsecuenciaPotencialCategoriaOtros().val('');
                }
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
            }
        },
        AjaxRegistrarInvestigacionCategoriaCuasiSuccess: function (resultado) {
            'use strict'
            if (resultado.Result >= 1) {
                base.Control.TxtConsecuenciaPotencialCategoriaCuasi().val(base.Event.GetValorMasAltoConsecuenciaChecked().descripcion);
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
            } else {
                base.Control.Mensaje.Error({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxRegistrarInvestigacionCategoriaOtrosSuccess: function (resultado) {
            'use strict'
            if (resultado.Result >= 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
            } else {
                base.Control.Mensaje.Error({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },

        //Fin Botones Categoria
        BtnBuscarClasificacionPrincipalClick: function () {
            $("#divGrdResultadoClasificacionPrincipal").html("");
            base.Function.CrearGridClasificacionPrincipal();
            base.Control.GrdResultadoClasificacionPrincipal.Load({
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion
            });
        },
        BtnBuscarSecuenciaEventoClick: function () {
            $("#divGrdResultadoSecuenciaEvento").html("");
            base.Function.CrearGridSecuenciaEvento();
            base.Control.GrdResultadoSecuenciaEvento.Load({
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion
            });
        },
        BtnBuscarInformacionBarreraClick: function () {
            $("#divGrdResultadoInformacionBarrera").html("");
            base.Function.CrearGridInformacionBarrera();
            base.Control.GrdResultadoInformacionBarrera.Load({
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                NivelBarrera: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoNivelBarrera,
            });
        },
        BtnBuscarInformacionFallosClick: function () {
            $("#divGrdResultadoInformacionFallos").html("");
            base.Function.CrearGridInformacionFallos();
            base.Control.GrdResultadoInformacionFallos.Load({
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                NivelBarrera: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoNivelFallos,
            });
        },
        BtnAgregarTestigoClick: function () {
            base.Control.DlgFormularioEmpresaColaboradorTestigo.Show();
        },
        BtnCancelarTestigoExternoClick: function () {
            base.Event.SetValuesFormularioTestigoExterno('');
        },
        BtnGrabarInformacionBarreraClick: function () {
            if (base.Control.ValidadorBarrera.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    indicadorModal: false,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarInvestigacionBarrera.data = {
                            CodigoInvestigacionBarrera: base.Control.HdnCodigoInformacionBarrera().val(),
                            CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                            CodigoCondicionBarrera: base.Control.SlcCondicionBarrera().val(),
                            CodigoTipoBarrera: base.Control.SlcTipoBarrera().val(),
                            DescripcionUno: base.Control.TxtDescripcionCortaBarrera().val(),
                            DescripcionDos: base.Control.TxtDescripcionLargaBarrera().val(),
                            NivelBarrera: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoNivelBarrera
                        };
                        base.Control.NivelBarreraInvestigacion = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoNivelBarrera;
                        base.Ajax.AjaxGrabarInvestigacionBarrera.submit();
                    }
                });
            } else {
                $("#frmAnalisisBarreraSummaryErrorMessage").empty();
                $("#frmAnalisisBarreraSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },
        BtnGrabarInformacionFallosClick: function () {
            if (base.Control.ValidadorFallos.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    indicadorModal: false,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarInvestigacionBarrera.data = {
                            CodigoInvestigacionBarrera: base.Control.HdnCodigoInformacionFallos().val(),
                            CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                            CodigoInvestigacionBarreraPadre: base.Control.SlcSeleccionBarrera().val(),
                            DescripcionUno: base.Control.TxtDescripcionFalloBarrera().val(),
                            DescripcionDos: base.Control.TxtRecomendacionesBarrera().val(),
                            NivelBarrera: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoNivelFallos
                        };
                        base.Control.NivelBarreraInvestigacion = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoNivelFallos;
                        base.Ajax.AjaxGrabarInvestigacionBarrera.submit();
                    }
                });
            } else {
                $("#frmInformacionFallosSummaryErrorMessage").empty();
                $("#frmInformacionFallosSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },
        BtnGrabarTestigoExternoClick: function () {
            if (base.Control.ValidadorTestigoExterno.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    indicadorModal: false,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarInvestigacionTestigo.data = {
                            CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                            TipoTestigo: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.TestigoExterno,
                            CodigoInvestigacionTestigo: base.Control.HdnCodigoTestigoExterno().val(),
                            Nombres: base.Control.TxtNombreTestigoExterno().val(),
                            ApellidoPaterno: base.Control.TxtApellidoPaternoTestigoExterno().val(),
                            ApellidoMaterno: base.Control.TxtApellidoMaternoTestigoExterno().val(),
                            CodigoTipoDocumento: base.Control.SlcTipoDocumento().val(),
                            NumeroDocumento: base.Control.TxtNumeroDocumentoTestigoExterno().val()
                        };
                        base.Control.TipoTestigoInvestigacion = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.TestigoExterno;
                        base.Ajax.AjaxGrabarInvestigacionTestigo.submit();
                    }
                });
            } else {
                $("#frmTestigoExternoSummaryErrorMessage").empty();
                $("#frmTestigoExternoSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },
        BtnAgregarSecuenciaEventoClick: function () {
            base.Control.DlgFormularioSecuenciaEvento.Show({
                CodigoEstadoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion,
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaFormularioEvento,
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion
            });
        },

        /////////////// EVENT - ANALISIS DE CAUSAS
        BtnBuscarCausaInmediataClick: function () {
            $("#divGrdResultadoCausasInmediata").html("");
            base.Function.CrearGridCausaInmediata();
            base.Control.GrdResultadoCausaInmediata.Load({
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion
            });
        },

        BtnAgregarCausasInmediatasClick: function () {
            base.Control.DlgFormularioCausasInmediatas.Show({
                CodigoEstadoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion,
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                CodigoInvestigacionCausaInmediata: null,
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaFormularioCausaInmediata
            });
        },

        BtnBuscarFactorCausalClick: function () {
            $("#divGrdResultadoFactoresCausales").html("");
            base.Function.CrearGridFactorCausal();
            base.Control.GrdResultadoFactorCausal.Load({
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion
            });
        },

        BtnAgregarFactoresCausalesClick: function () {
            base.Control.DlgFormularioFactoresCausales.Show({
                CodigoEstadoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion,
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaFormularioFactorCausal
            });
        },

        BtnBuscarCausaRaizClick: function () {
            $("#divGrdResultadoCausasRaices").html("");
            base.Function.CrearGridCausaRaiz();
            base.Control.GrdResultadoCausaRaiz.Load({
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion
            });
        },

        BtnAgregarCausasRaicesClick: function () {
            base.Control.DlgFormularioCausaRaiz.Show({
                CodigoEstadoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion,
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion
            });
        },

        //////  END - ANALISIS CAUSAS
        BtnBuscarCostoTrabajadorInvolucradoClick: function () {
            base.Control.GrdResultadoCostoTrabajadorInvolucrado.Load({});
        },

        BtnCambiarEstadoClick: function () {
            base.Control.DlgFormularioCambiarEstado.Show({
                CodigoEstadoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion
            });
        },

        /*BuscarValidarInvestigacion: function () {
            // base.Control.DlgFormularioCambiarEstado.Show({
            var filtro = {
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion
            };
            base.Ajax.AjaxBuscarValidarInvestigacion.data = filtro;
            base.Ajax.AjaxBuscarValidarInvestigacion.submit();
            //});
        },*/

        BtnBuscarColaboradorOrdenaTrabajoClick: function () {
            base.Control.DlgFormularioBuscarColaboradorOrdenoTrabajo.Show(false, [], {
                CodigoEmpresa: null
            });
        },

        BtnBuscarInvestigadorClick: function () {
            $("#divGrdResultadoInvestigador").html("");
            base.Function.CrearGridInvestigador();
            base.Control.GrdResultadoInvestigador.Load({
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion
            });
        },

        BtnGridEditInvestigadorClick: function (row, data) {
            base.Control.DlgFormularioEquipoInvestigador.Show({
                CodigoEstadoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion,
                CodigoInvestigacionInvestigador: data.CodigoInvestigacionInvestigador,
                CodigoInvestigacion: data.CodigoInvestigacion,
                CodigoColaborador: data.CodigoColaborador
            });
        },

        BtnGridDeleteInvestigadorClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarInvestigador.data = {
                        CodigoInvestigacionInvestigador: data.CodigoInvestigacionInvestigador,
                    };
                    base.Ajax.AjaxEliminarInvestigador.submit();
                }
            });
        },

        BuscarColaboradorOrdenoTrabajoSuccess: function (colaboradorSeleccionado) {
            if (colaboradorSeleccionado.length > 0) {
                base.Control.HdnCodigoColaboradorOrdenoTrabajo().val(colaboradorSeleccionado[0].CodigoColaborador);
                base.Control.TxtNombreColaboradorOrdenoTrabajo().val(colaboradorSeleccionado[0].Nombres + ' ' + colaboradorSeleccionado[0].ApellidoPaterno + ' ' + colaboradorSeleccionado[0].ApellidoMaterno);

            } else {
                base.Control.HdnCodigoColaboradorOrdenoTrabajo().val(null);
                base.Control.TxtNombreColaboradorOrdenoTrabajo().val('');
            }
        },

        BuscarColaboradorSupervisorTrabajoSuccess: function (colaboradorSeleccionado) {
            if (colaboradorSeleccionado.length > 0) {
                base.Control.HdnCodigoColaboradorSupervisorTrabajo().val(colaboradorSeleccionado[0].CodigoColaborador);
                base.Control.TxtNombreColaboradorSupervisorTrabajo().val(colaboradorSeleccionado[0].Nombres + ' ' + colaboradorSeleccionado[0].ApellidoPaterno + ' ' + colaboradorSeleccionado[0].ApellidoMaterno);
            } else {
                base.Control.HdnCodigoColaboradorSupervisorTrabajo().val(null);
                base.Control.TxtNombreColaboradorSupervisorTrabajo().val('');
            }
        },

        //////////////////TRABAJADOR INVOLUCRADO
        BtnGridEditTrabajadorInvolucradoTab2Click: function (row, data) {
            data.CodigoInvestigacionCategoria = base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaLesion;
            data.CodigoEstadoInvestigacion = base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion;
            base.Control.DlgFormularioTrabajadorInvolucrado.Show(data);
        },
        BtnGridDeleteInvolucradoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarInvolucrado.data = {
                        CodigoInvestigacionInvolucrado: data.CodigoInvestigacionInvolucrado
                    };
                    base.Ajax.AjaxEliminarInvolucrado.submit();
                }
            });
        },

        BtnAgregarEmpresaColaboradorInvolucradoClick: function () {
            base.Control.DlgFormularioTrabajadorInvolucradoTab2.Show();
        },

        /////////////////// TESTIGO
        ObtenerEmpresaColaboradorTestigo: function (colaborador) {
            if (colaborador.length > 0) {
                base.Control.TipoTestigoInvestigacion = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.TestigoInterno;
                colaborador[0].CodigoInvestigacion = base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion;
                colaborador[0].TipoTestigo = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.TestigoInterno;
                base.Ajax.AjaxGrabarInvestigacionTestigo.data = colaborador[0];
                base.Ajax.AjaxGrabarInvestigacionTestigo.submit();
            }
        },

        /////////////////// SUPERVISOR
        ObtenerEmpresaColaboradorSupervisor: function (colaborador) {
            if (colaborador.length > 0) {
                colaborador[0].CodigoInvestigacion = base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion;
                colaborador[0].CodigoColaboradorInvolucrado = colaborador[0].CodigoColaborador;
                colaborador[0].FechaNacimiento = colaborador[0].FechaNacimientoString;
                base.Ajax.AjaxGrabarInvestigacionSupervisor.data = colaborador[0];
                base.Ajax.AjaxGrabarInvestigacionSupervisor.submit();
            }
        },

        /////////////////// INVESTIGADOR
        ObtenerEmpresaColaboradorInvestigador: function (colaborador) {
            if (colaborador.length > 0) {
                colaborador[0].CodigoInvestigacion = base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion;
                base.Ajax.AjaxGrabarInvestigacionInvestigador.data = colaborador[0];
                base.Ajax.AjaxGrabarInvestigacionInvestigador.submit();
            }
        },

        ObtenerTrabajadorInvolucradoTab2: function (colaborador) {
            if (colaborador.length > 0) {
                colaborador[0].CodigoInvestigacion = base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion;
                colaborador[0].CodigoColaboradorInvolucrado = colaborador[0].CodigoColaborador;
                base.Ajax.AjaxGrabarInvestigacionInvolucrado.data = colaborador[0];
                base.Ajax.AjaxGrabarInvestigacionInvolucrado.submit();
            }
        },
        //////////////////LECCION APRENDIDA
        BtnAgregarLeccionAprendidaClick: function () {
            'use strict'
            var filtro = {
                CodigoEstadoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion,
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion
            };
            base.Control.DlgFormularioLeccionAprendida.Show(filtro);
        },
        BtnAgregarAccionInmediataClick: function () {
            'use strict'
            var filtro = {
                CodigoEstadoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion,
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion
            };
            base.Control.DlgFormularioAccionesInmediatas.Show(filtro);
        },
        BtnAgregarAccionCorrectivaClick: function () {
            'use strict'
            /*var filtro = {
                CodigoEstadoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion,
                NumeroRecord: base.Control.FormularioInvestigacionModel.Investigacion.NumeroRecord,
                CodigoRecord: base.Control.FormularioInvestigacionModel.Investigacion.CodigoRecord,
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion
            };*/
            base.Control.DlgFormularioAccionesCorrectivas.Show({
                TituloFormulario: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaFormularioIngresoAcciones,
                IndicadorLectura: base.Control.FormularioInvestigacionModel.Investigacion.IndicadorLectura,
                CodigoIntegradorTipoRegistro: base.Control.FormularioInvestigacionModel.Investigacion.CodigoIntegradorTipoRegistro,
                CodigoTipoRegistroParametro: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Investigacion,
                CodigoEstadoAccion: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Abierto,
                NumeroRecord: base.Control.FormularioInvestigacionModel.Investigacion.NumeroRecord,
                CodigoTipoOcurrenciaEntidad: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion
            });
        },
        BtnBuscarLeccionesAprendidasGridClick: function () {
            'use strict'
            $("#divGrdResultadoLecciones").html("");
            base.Function.CrearGridLeccionesAprendidas();
            base.Control.GrdLeccionesAprendidas.Load({
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion
            });
        },
        BtnBuscarAccionesInmediatasGridClick: function () {
            'use strict'
            $("#divGrdResultadoAccionesInmediatas").html("");
            base.Function.CrearGridAccionesInmediatas();
            base.Control.GrdAccionesInmediatas.Load({
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion
            });
        },
        BtnBuscarAccionesCorrectivasGridClick: function () {
            'use strict'
            $("#divGrdResultadoAccionesCorrectivas").html("");
            base.Function.CrearGridAccionesCorrectivas();
            base.Control.GrdAccionesCorrectivas.Load({
                CodigoIntegradorTipoRegistro: base.Control.FormularioInvestigacionModel.Investigacion.CodigoIntegradorTipoRegistro,                
                /*CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                CodigoRecord: base.Control.FormularioInvestigacionModel.Investigacion.CodigoRecord*/
            });
        },
        //Grid Estado de la Investigacion
        BtnAgregarEstadoInvestigacionClick: function () {
            base.Control.DlgFormularioEstadoInvestigacion.Show();
        },
        BtnModificarEstadoInvestigacionClick: function () {
            var flagObligatorioComentario = true;
            if (base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.EstadoInvestigacionPorElaborar) {
                flagObligatorioComentario = false;
            }
            base.Control.DlgFormularioModificarEstadoInvestigacion.Show({
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                flagObligatorioComentario: flagObligatorioComentario
            });
        },
        BtnBuscarElaboradoPorGridClick: function () {
            $("#divGrdResultadoEstadoInvestigacionElaborado").html("");
            base.Function.CrearGridEstadoElaboradoPor();
            base.Control.GrdResultadoEstadoElaboradoPor.Load({
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                CodigoEstadoInvestigacion: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.EstadoInvestigacionPorElaborar
            });
        },
        BtnBuscarRevisadoPorGridClick: function () {
            $("#divGrdResultadoEstadoInvestigacionRevisado").html("");
            base.Function.CrearGridEstadoRevisadoPor();
            base.Control.GrdResultadoEstadoRevisadoPor.Load({
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                CodigoEstadoInvestigacion: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.EstadoInvestigacionPorRevisar
            });
        },
        BtnBuscarAprobadoPorGridClick: function () {
            $("#divGrdResultadoEstadoInvestigacionAprobado").html("");
            base.Function.CrearGridEstadoAprobadoPor();
            base.Control.GrdResultadoEstadoAprobadoPor.Load({
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                CodigoEstadoInvestigacion: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.EstadoInvestigacionPorAprobar
            });
        },
        GrabarEstadoInvestigacionClick: function (colaborador) {
            if (colaborador.length > 0) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    indicadorModal: false,
                    onAccept: function () {
                        colaborador[0].CodigoInvestigacion = base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion;
                        colaborador[0].CodigoEstadoInvestigacion = base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion;
                        base.Ajax.AjaxRegistrarInvestigacionPersonaRol.data = colaborador[0];
                        base.Ajax.AjaxRegistrarInvestigacionPersonaRol.submit();
                    }
                });
            }
        },
        ObtenerHistorialEstadoInvestigacionClick: function (resultado) {
            if (resultado != null) {
                base.Control.ComentarioEstadoInvestigacion = resultado.Comentario;
                base.Control.CodigoEstadoInvestigacion = resultado.EstadoInvestigacion;
                base.Control.TxtEstadoInvestigacion().val(resultado.NombreEstadoInvestigacion);
            }
        },

        BtnGuardarEstadoInvestigacionClick: function () {
            var filtro = {
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                CodigoEstadoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion
            };
            base.Ajax.AjaxBuscarValidarInvestigacion.data = filtro;
            base.Ajax.AjaxBuscarValidarInvestigacion.submit();
            /*base.Control.Mensaje.Confirmation({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                onAccept: function () {
                    base.Ajax.AjaxRegistrarInvestigacionHistorialCambios.data = {
                        CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                        CodigoColaboradorReportante: base.Control.HdnCodigoColaboradorReportaInvestigacion().val(),
                        Comentario: base.Control.ComentarioEstadoInvestigacion,
                        EstadoInicialEstadoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion,
                        EstadoFinalEstadoInvestigacion: base.Control.CodigoEstadoInvestigacion,

                        CodigoRecord: base.Control.FormularioInvestigacionModel.Investigacion.CodigoRecord,
                        NumeroRecord: base.Control.FormularioInvestigacionModel.Investigacion.NumeroRecord,
                        NombreProyecto: base.Control.FormularioInvestigacionModel.Investigacion.NombreProyecto,
                    };
                    base.Ajax.AjaxRegistrarInvestigacionHistorialCambios.submit();
                }
            });*/
        },
        BtnGridDeleteEstadoInvestigacionClick: function (row, data) {
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarInvestigacionPersonaRol.data = data;
                    base.Ajax.AjaxEliminarInvestigacionPersonaRol.submit();
                }
            });
        },
        AjaxEliminarInvestigacionPersonaRolSuccess: function (resultado) {
            if (resultado.Result >= 1) {
                if (base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.EstadoInvestigacionPorElaborar) {
                    base.Event.BtnBuscarElaboradoPorGridClick();
                } else if (base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.EstadoInvestigacionPorRevisar) {
                    base.Event.BtnBuscarRevisadoPorGridClick();
                } else if (base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.EstadoInvestigacionPorAprobar) {
                    base.Event.BtnBuscarAprobadoPorGridClick();
                }
            } else {
                base.Control.Mensaje.Error({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxRegistrarInvestigacionPersonaRolSuccess: function (resultado) {
            if (resultado.Result >= 1) {
                if (base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.EstadoInvestigacionPorElaborar) {
                    base.Event.BtnBuscarElaboradoPorGridClick();
                } else if (base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.EstadoInvestigacionPorRevisar) {
                    base.Event.BtnBuscarRevisadoPorGridClick();
                } else if (base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.EstadoInvestigacionPorAprobar) {
                    base.Event.BtnBuscarAprobadoPorGridClick();
                }
            } else if (resultado.Result == -1) {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaValidacionPersonaRegistrada
                });
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxRegistrarInvestigacionHistorialCambiosSuccess: function (resultado) {
            if (resultado.Result >= 1) {
                var complemento = '';
                if (base.Control.CodigoEstadoInvestigacion == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.EstadoInvestigacionPorElaborar)
                {
                    complemento = '?Bandeja=1';
                }
                else if (base.Control.CodigoEstadoInvestigacion == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.EstadoInvestigacionPorRevisar)
                {
                    complemento = '?Bandeja=2';
                }
                else if (base.Control.CodigoEstadoInvestigacion == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.EstadoInvestigacionPorAprobar)
                {
                    complemento = '?Bandeja=3';
                }
                window.location.href = Pe.ElectroPeru.SGI.Presentacion.Base.Actions.FormularioInvestigacion + complemento;
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        BtnGridDeleteEstadoInvestigacionValidate: function (data, type, full) {
            if (full.CodigoEstadoInvestigacion == base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion)
                return true;
            else
                return false;
        },
        //Fin Grid Estado de la Investigacion
        //Datos Reportante
        BtnGrabarDatosReportanteClick: function () {
            if (base.Control.ValidadorDatosReportante.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    indicadorModal: false,
                    onAccept: function () {
                        base.Ajax.AjaxActualizarReportanteInvestigacion.data = {
                            CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                            CodigoColaboradorReportaInvestigacion: base.Control.HdnCodigoColaboradorReportaInvestigacion().val(),
                            CodigoPuestoTrabajoColaboradorReportaInvestigacion: base.Control.SlcPuestoCargoReportaInvestigacion().val()
                        };
                        base.Ajax.AjaxActualizarReportanteInvestigacion.submit();
                    }
                });
            } else {
                $("#frmRecordDatosReportanteRecordSummaryErrorMessage").empty();
                $("#frmRecordDatosReportanteRecordSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },
        BtnBuscarColaboradorReportaInvestigacionClick: function () {
            'use strict';
            base.Control.DlgFormularioBuscarColaboradorReportaInvestigacion.Show(false, [], null);
        },
        BuscarColaboradorReportaInvestigacionSuccess: function (colaboradorSeleccionado) {
            if (colaboradorSeleccionado.length > 0) {                
                base.Control.HdnCodigoColaboradorReportaInvestigacion().val(colaboradorSeleccionado[0].CodigoColaborador);
                base.Control.TxtNombreColaboradorReportaInvestigacion().val(colaboradorSeleccionado[0].Nombres + ' ' + colaboradorSeleccionado[0].ApellidoPaterno + ' ' + colaboradorSeleccionado[0].ApellidoMaterno);
                base.Control.SlcPuestoCargoReportaInvestigacion().val(colaboradorSeleccionado[0].CodigoPuestoTrabajo);
            } else {
                base.Control.HdnCodigoColaboradorReportaInvestigacion().val(null);
                base.Control.TxtNombreColaboradorReportaInvestigacion().val('');
                base.Control.SlcPuestoCargoReportaInvestigacion().val('');
            }
        },
        AjaxActualizarReportanteInvestigacionSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
            } else {
                base.Control.Mensaje.Error({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        //Fin Datos Reportante
        BtnGridEditLeccionesAprendidasClick: function (row, data) {
            'use strict'
            data.CodigoEstadoInvestigacion = base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion;
            base.Control.DlgFormularioLeccionAprendida.Show(data);
        },
        BtnGridEditAccionInmediataClick: function (row, data) {
            'use strict'
            data.CodigoEstadoInvestigacion = base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion;
            base.Control.DlgFormularioAccionesInmediatas.Show(data);
        },
        BtnGridEditAccionCorrectivaClick: function (row, data) {
            'use strict'
            data.CodigoEstadoInvestigacion = base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion;
            data.CodigoIntegradorTipoRegistro = base.Control.FormularioInvestigacionModel.Investigacion.CodigoIntegradorTipoRegistro;
            data.CodigoInvestigacion = base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion;
            data.CodigoTipoOcurrenciaEntidad = base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion;
            data.CodigoTipoRegistroParametro = Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Investigacion;
            data.NumeroRecord = base.Control.FormularioInvestigacionModel.Investigacion.NumeroRecord;
            base.Control.DlgFormularioAccionesCorrectivas.Show(data);
        },
        BtnGridDeleteAccionCorrectivaClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarRecordAccion.data = {
                        CodigoRecordAccion: data.CodigoRecordAccion,
                    };

                    base.Ajax.AjaxEliminarRecordAccion.submit();
                }
            });
        },
        AjaxEliminarRecordAccionSuccess: function (resultado) {
            'use strict'
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });

                base.Event.BtnBuscarAccionesCorrectivasGridClick();
            } else {
                base.Control.Mensaje.Error({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        BtnGridDeleteLeccionesAprendidasClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarInvestigacionLeccionAprendida.data = data;
                    base.Ajax.AjaxEliminarInvestigacionLeccionAprendida.submit();
                }
            });
        },
        BtnGridDeleteAccionInmediataClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarInvestigacionAccionInmediata.data = data;
                    base.Ajax.AjaxEliminarInvestigacionAccionInmediata.submit();
                }
            });
        },
        AjaxEliminarInvestigacionLeccionAprendidaSuccess: function (resultado) {
            'use strict'
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
                base.Event.BtnBuscarLeccionesAprendidasGridClick();
            } else {
                base.Control.Mensaje.Error({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxEliminarInvestigacionAccionInmediataSuccess: function (resultado) {
            'use strict'
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
                base.Event.BtnBuscarAccionesInmediatasGridClick();
            } else {
                base.Control.Mensaje.Error({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },

        ////Investigacion       
        AjaxGrabarInvestigacionSuccess: function (resultado) {
            if (resultado.Result.CodigoInvestigacion != null) {
                base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion = resultado.Result.CodigoInvestigacion;

                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxGrabarDescripcionPreEventoSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },

        AjaxGrabarDescripcionEventoSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxGrabarInvestigacionInvolucradoSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnBuscarTrabajadorInvolucradoClick();
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        BuscarInvestigacionBarreraPadres: function () {            
            base.Control.SlcSeleccionBarrera().empty();
            base.Control.SlcSeleccionBarrera().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
            base.Ajax.AjaxBuscarInvestigacionBarrera.data = {
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                NivelBarrera: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoNivelBarrera
            }
            base.Ajax.AjaxBuscarInvestigacionBarrera.submit();
        },
        AjaxBuscarInvestigacionBarreraSuccess: function(resultado){
            if (resultado.Result != null && resultado.Result.length > 0) {
                $.each(resultado.Result, function (index, value) {
                    base.Control.SlcSeleccionBarrera().attr('validable', 'required Validar');
                    base.Control.SlcSeleccionBarrera().append(new Option(value.DescripcionUno, value.CodigoInvestigacionBarrera));
                });
            }
        },
        AjaxGrabarInvestigacionBarreraSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                if (base.Control.NivelBarreraInvestigacion == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoNivelBarrera)
                {
                    base.Event.SetValuesFormularioInformacionBarreras('');
                    base.Event.BtnBuscarInformacionBarreraClick();
                    base.Event.BuscarInvestigacionBarreraPadres();
                }
                else if (base.Control.NivelBarreraInvestigacion == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoNivelFallos)
                {
                    base.Event.SetValuesFormularioInformacionFallos('');
                    base.Event.BtnBuscarInformacionFallosClick();
                }
                base.Control.NivelBarreraInvestigacion = null;                             
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxEliminarInvestigacionBarreraSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
                base.Event.BtnBuscarInformacionBarreraClick();
                base.Event.BuscarInvestigacionBarreraPadres();
            }
            else if (resultado.Result == '-2') {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.MensajeValidacionInvestigacionBarrera
                });
            }
            else {
                base.Control.Mensaje.Error({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxEliminarInvestigacionFalloSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
                base.Event.BtnBuscarInformacionFallosClick();
            } else {
                base.Control.Mensaje.Error({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxGrabarDescripcionPostEventoSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxGrabarInvestigacionTestigoSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnBuscarTestigoClick();
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },

        AjaxGrabarInvestigacionSupervisorSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnBuscarSupervisorClick();
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },

        ///////////////ANEXOS
        BtnAgregarRecordAnexoAppendixClick: function () {
            base.Control.DlgFormularioRecordAnexoApendice.Show({
                CodigoEstadoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion,
                CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion
            });
        },


        BtnGridEditRecordAnexoApendiceClick: function (row, data) {
            'use strict'            
            data.CodigoEstadoInvestigacion = base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion;
            base.Control.DlgFormularioInvestigacionAnexoApendice.Show(data);
        },

        BtnGridDownloadRecordAnexoApendiceClick: function (row, data) {
            'use strict'
            var filtro = {
                CodigoArchivoAnexoSharePoint: data.CodigoArchivoAnexoSharePoint,
                Nombre: data.Nombre
            };

            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.DescargarArchivoApendice, filtro);
        },

        BtnGridDeleteAnexoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarAnexo.data = {
                        CodigoInvestigacion: data.CodigoInvestigacion,
                        CodigoInvestigacionAnexo: data.CodigoInvestigacionAnexo
                    };

                    base.Ajax.AjaxEliminarAnexo.submit();
                }
            });
        },

        BtnGridDeleteRecordAnexoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarInvestigacionAnexo.data = {
                        CodigoInvestigacion: data.CodigoInvestigacion,
                        CodigoInvestigacionAnexo: data.CodigoInvestigacionAnexo
                    };

                    base.Ajax.AjaxEliminarInvestigacionAnexo.submit();
                }
            });
        },

        BtnGridDeleteCategoriaImpactoClick: function (row, data) {
            'use strict'
            if (base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaImpactoComunidad != null) {
                base.Control.Mensaje.Delete({
                    onAccept: function () {
                        base.Ajax.AjaxEliminarComunidadInvolucrada.data = {
                            CodigoInvestigacion: data.CodigoInvestigacion,
                            CodigoInvestigacionAnexo: data.CodigoInvestigacionAnexo,
                            CodigoInvestigacionComunidadInvolucrada: data.CodigoInvestigacionComunidadInvolucrada,
                            CodigoInvestigacionCategoria: base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaImpactoComunidad
                        };

                        base.Ajax.AjaxEliminarComunidadInvolucrada.submit();
                    }
                });
            }
        },

        BtnGridEditarCategoriaImpactoClick: function (row, data) {
            data.CodigoEstadoInvestigacion = base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion;
            data.CodigoInvestigacionCategoria = base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaImpactoComunidad;
            if (base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaImpactoComunidad != null) {
                base.Control.DlgFormularioComunidadInvolucrada.Show(data);
            }
        },

        BtnGridVistaPreviaFotoClick: function (row, data) {
            base.Control.DlgFormularioVistaPreviaFoto.Show({
                CodigoInvestigacionAnexo: data.CodigoInvestigacionAnexo,
                CodigoInvestigacion: data.CodigoInvestigacion
            });
        },

        BtnGridEditRecordAnexoFotoClick: function (row, data) {
            'use strict'
            base.Control.DlgFormularioInvestigacionAnexoFoto.Show({
                CodigoEstadoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion,
                CodigoInvestigacionAnexo: data.CodigoInvestigacionAnexo,
                CodigoInvestigacion: data.CodigoInvestigacion,
                CodigoArchivoAnexoSharePoint: data.CodigoArchivoAnexoSharePoint
            });
        },
        DtpDetalleFechaReporteChange: function () {
            if (base.Control.DtpDetalleFechaReporteAnuncio().val() != '') {
                var fecnac = base.Control.DtpDetalleFechaReporteAnuncio().val().split("/");
                var dia = parseInt(fecnac[0]);
                var mes = parseInt(fecnac[1]) - 1;
                var anio = parseInt(fecnac[2]);
                base.Control.DtpDetalleFechaRecord().datepicker("option", "maxDate", new Date(anio, mes, dia));
            }
        },

        DtpDetalleFechaRecordChange: function () {
            if (base.Control.DtpDetalleFechaRecord().val() != '') {
                var fecnac = base.Control.DtpDetalleFechaRecord().val().split("/");
                var dia = parseInt(fecnac[0]);
                var mes = parseInt(fecnac[1]) - 1;
                var anio = parseInt(fecnac[2]);
                base.Control.DtpDetalleFechaInicioInvestigacion().datepicker("option", "minDate", new Date(anio, mes, dia));
            }
        },

        AjaxEliminarInvolucradoSuccess: function (data) {
            'use strict'
            if (data.Result >= 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
                base.Event.BtnBuscarTrabajadorInvolucradoClick();
            } else {
                base.Control.Mensaje.Error({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },

        BtnAgregarAnexoSnapChartClick: function () {
            if (base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion != null) {
                base.Control.DlgFormularioAnexoSnapchart.Show({
                    CodigoEstadoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoEstadoInvestigacion,
                    CodigoInvestigacionAnexo: null,
                    CodigoArchivoAnexoSharePoint: base.Control.FormularioInvestigacionModel.Investigacion.CodigoArchivoSnapchart,
                    CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                    CodigoClaseAnexo: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoInvestigacionTipoAnexo.CodigoSnapChart,
                    IndicadorObligatorio: true,
                    flagPermitirCodigoTipoApendice: false,
                    IndicadorListado: true,
                });
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValidarTabPrincipal,
                });
            }
        },


        GrabarAnexoSnapChartSuccess: function (filtro) {
            if (filtro != null) {
                base.Ajax.AjaxGrabarAnexoSnapchart.data = {
                    CodigoEstadoInvestigacion: base.Control.CodigoEstadoInvestigacion,
                    CodigoInvestigacion: base.Control.FormularioInvestigacionModel.Investigacion.CodigoInvestigacion,
                    CodigoArchivoSnapchart: filtro.CodigoArchivoAnexoSharePoint,
                    NombreArchivoSnapchart: filtro.NombreArchivoAnexoSharePoint
                };
                base.Ajax.AjaxGrabarAnexoSnapchart.submit();
                base.Control.FormularioInvestigacionModel.Investigacion.CodigoArchivoSnapchart = filtro.CodigoArchivoAnexoSharePoint;
                base.Control.FormularioInvestigacionModel.Investigacion.NombreArchivoSnapchart = filtro.NombreArchivoAnexoSharePoint;

                base.Control.HdnCodigoArchivoAnexoEvento().val(filtro.CodigoArchivoAnexoSharePoint);
                base.Control.TxtNombreArchivoAnexoEvento().val(filtro.NombreArchivoAnexoSharePoint);
            }
        },

        BtnBuscarAnexosApendice: function (filtro) {
            base.Event.BtnBuscarTipoAnexoClick();
            base.Event.BtnBuscarInvestigacionAnexoApendiceClick();
            base.Event.BuscarObligatorios()

            //base.Event.BtnBuscarInvestigacionObligatoriosClick();
            //base.Event.BtnBuscarTipoAnexoClick(); 
        },

        BtnGridDeleteCategoriaDanioClick: function (row, data) {
            'use strict'
            if (base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaDanioPropiedad != null) {
                base.Control.Mensaje.Delete({
                    onAccept: function () {
                        data.CodigoInvestigacionCategoria = base.Control.FormularioInvestigacionModel.CodigoInvestigacionCategoriaDanioPropiedad;
                        base.Ajax.AjaxEliminarInvestigacionPropiedad.data = data;
                        base.Ajax.AjaxEliminarInvestigacionPropiedad.submit();
                    }
                });
            }
        },

        AjaxEliminarInvestigacionPropiedadSuccess: function (resultado) {
            'use strict'
            if (resultado.IsSuccess) {
                base.Control.TxtActualConsecuenciaCategoriaDanioPropiedad().val(resultado.Result.DescripcionConsecuenciaActual);
                base.Control.TxtPotencialConsecuenciaCategoriaDanioPropiedad().val(resultado.Result.DescripcionConsecuenciaPotencial);

                if (resultado.Result.CodigoConsecuenciaActual != '' && resultado.Result.CodigoConsecuenciaActual != null &&
                    resultado.Result.CodigoConsecuenciaPotencial != '' && resultado.Result.CodigoConsecuenciaPotencial != null) {
                    $('input[name="consecuenciaInvestigacionCategoriaDanioActual"]').each(function (i) {
                        $(this).prop("checked", false);
                    });
                    $('input[name="consecuenciaInvestigacionCategoriaDanioPotencial"]').each(function (i) {
                        $(this).prop("checked", false);
                    });
                    $('#radioCategoriaDanioActual_' + resultado.Result.CodigoConsecuenciaActual).prop("checked", true);
                    $('#radioCategoriaDanioPotencial_' + resultado.Result.CodigoConsecuenciaPotencial).prop("checked", true);
                } else {
                    $('input[name="consecuenciaInvestigacionCategoriaDanioActual"]').each(function (i) {
                        $(this).prop("checked", false);
                    });

                    $('input[name="consecuenciaInvestigacionCategoriaDanioPotencial"]').each(function (i) {
                        $(this).prop("checked", false);
                    });
                }

                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });

                base.Event.BtnBuscarCategoriaDanioClick();
            } else {
                base.Control.Mensaje.Error({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
    };

    base.Ajax = {
        AjaxBuscarInvestigacionObligatorios: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacionAnexoObligatorio,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarInvestigacionObligatoriosSuccess
        }),
        AjaxBuscarValidarInvestigacion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacionTabs,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarValidarInvestigacionSuccess
        }),
        //TABS COSTOS DEL INCIDENTE
        AjaxGrabarTabCostoInvestigacion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarCostoInvestigacion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarTabCostoInvestigacionSuccess
        }),
        AjaxGrabarTabCostoPersonal: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarCostoInvestigacion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarTabCostoPersonalSuccess
        }),
        AjaxGrabarTabCostoMedioambiental: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarCostoInvestigacion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarTabCostoMedioambientalSuccess
        }),
        AjaxGrabarTabCostoImpactoComunidad: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarCostoInvestigacion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarTabCostoImpactoComunidadSuccess
        }),
        AjaxGrabarTabCostoDaniosPropiedad: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarCostoInvestigacion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarTabCostoDaniosPropiedadSuccess
        }),
        AjaxGrabarTabCostoPerdidaProceso: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarCostoInvestigacion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarTabCostoPerdidaProcesoSuccess
        }),
        AjaxGrabarTabCostoPrevencion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarCostoInvestigacion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarTabCostoPrevencionSuccess
        }),
        AjaxGrabarTabCostoOtros: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarCostoInvestigacion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarTabCostoOtrosSuccess
        }),

        AjaxBuscarTabCostoInvestigacion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacionCosto,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarTabCostoInvestigacionSuccess
        }),
        AjaxBuscarTabCostoPersonal: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacionCosto,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarTabCostoPersonalSuccess
        }),
        AjaxBuscarTabCostoMedioambiental: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacionCosto,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarTabCostoMedioambientalSuccess
        }),
        AjaxBuscarTabCostoImpactoComunidad: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacionCosto,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarTabCostoImpactoComunidadSuccess
        }),
        AjaxBuscarTabCostoDaniosPropiedad: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacionCosto,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarTabCostoDaniosPropiedadSuccess
        }),
        AjaxBuscarTabCostoPerdidaProceso: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacionCosto,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarTabCostoPerdidaProcesoSuccess
        }),
        AjaxBuscarTabCostoPrevencion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacionCosto,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarTabCostoPrevencionSuccess
        }),
        AjaxBuscarTabCostoOtros: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacionCosto,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarTabCostoOtrosSuccess
        }),
        AjaxBuscarTabCostoInvestigacionTotales: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarTotalesInvestigacionCosto,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarTabCostoInvestigacionTotalesSuccess
        }),
        /////////////////////////////////////////
        AjaxGrabarInvestigacion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarInvestigacion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarInvestigacionSuccess
        }),

        AjaxGrabarInvestigacionPersonaInvolucrada: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarInvestigacionPersonaInvolucrada,
            autoSubmit: false,
            onSuccess: function (resultado) {
                if (resultado.Result >= '1') {
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                    });
                } else {
                    base.Control.Mensaje.Warning({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                    });
                }
            }
        }),

        /////////////////////// TESTIGO
        AjaxGrabarInvestigacionTestigo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarDetalleTestigo,
            autoSubmit: false,
            onSuccess: function (resultado) {
                if (resultado.Result >= '1') {
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                    });
                    if (base.Control.TipoTestigoInvestigacion == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.TestigoInterno) {
                        base.Event.BtnBuscarTestigoClick();
                    }
                    else if (base.Control.TipoTestigoInvestigacion == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.TestigoExterno) {
                        base.Event.SetValuesFormularioTestigoExterno('');
                        base.Event.BtnBuscarTestigoExternoClick();
                    }
                    base.Control.TipoTestigoInvestigacion = null;
                } else {
                    base.Control.Mensaje.Warning({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                    });
                }
            }
        }),

        /////////////////////// SUPERVISOR
        AjaxGrabarInvestigacionSupervisor: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarDetalleSupervisor,
            autoSubmit: false,
            onSuccess: function (resultado) {
                if (resultado.IsSuccess) {
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                    });
                    base.Event.BtnBuscarSupervisorClick();
                } else {
                    base.Control.Mensaje.Warning({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                    });
                }
            }
        }),

        AjaxEliminarSupervisor: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.EliminarSupervisor,
            autoSubmit: false,
            onSuccess: function (data) {
                'use strict'
                if (data.Result >= 1) {
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                    });

                    base.Event.BtnBuscarSupervisorClick();
                } else {
                    base.Control.Mensaje.Error({
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                    });
                }
            }
        }),

        ///////////////////// EVENTO
        AjaxEliminarTestigo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.EliminarTestigo,
            autoSubmit: false,
            onSuccess: function (data) {
                'use strict'
                if (data.Result >= 1) {
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                    });
                    if ( base.Control.TipoTestigoInvestigacion == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.TestigoInterno ){
                        base.Event.BtnBuscarTestigoClick();
                    }
                    else if(base.Control.TipoTestigoInvestigacion == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.TestigoExterno ){
                        base.Event.BtnBuscarTestigoExternoClick();
                    }
                    base.Control.TipoTestigoInvestigacion = null;
                } else {
                    base.Control.Mensaje.Error({
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                    });
                }
            }
        }),

        AjaxEliminarEvento: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.EliminarEvento,
            autoSubmit: false,
            onSuccess: function (data) {
                'use strict'
                if (data.Result >= 1) {
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                    });

                    base.Event.BtnBuscarSecuenciaEventoClick();
                } else {
                    base.Control.Mensaje.Error({
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                    });
                }
            }
        }),


        /////////////////////// CAUSAS INMEDIATAS
        AjaxEliminarCausaInmediata: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.EliminarCausaInmediata,
            autoSubmit: false,
            onSuccess: function (data) {
                'use strict'
                if (data.Result >= 1) {
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                    });
                    base.Event.BtnBuscarCausaInmediataClick();
                } else {
                    base.Control.Mensaje.Error({
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                    });
                }
            }
        }),

        AjaxEliminarFactorCausal: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.EliminarFactorCausal,
            autoSubmit: false,
            onSuccess: function (data) {
                'use strict'
                if (data.Result >= 1) {
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                    });
                    base.Event.BtnBuscarFactorCausalClick();
                    base.Event.BtnBuscarCausaRaizClick();
                } else {
                    base.Control.Mensaje.Error({
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                    });
                }
            }
        }),

        AjaxEliminarCausaRaiz: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.EliminarCausaRaiz,
            autoSubmit: false,
            onSuccess: function (data) {
                'use strict'
                if (data.Result >= 1) {
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                    });
                    base.Event.BtnBuscarCausaRaizClick();
                } else {
                    base.Control.Mensaje.Error({
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                    });
                }
            }
        }),


        /////////////////////// INVESTIGADOR
        AjaxGrabarInvestigacionInvestigador: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarDetalleInvestigador,
            autoSubmit: false,
            onSuccess: function (resultado) {
                if (resultado.IsSuccess) {
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                    });
                    base.Event.BtnBuscarInvestigadorClick();
                } else {
                    base.Control.Mensaje.Warning({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                    });
                }
            }
        }),

        /////////////////////   DESCRIPCION
        AjaxGrabarDescripcionPreEvento: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.ActualizarInvestigacionDescripcionPreEvento,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarDescripcionPreEventoSuccess
        }),

        AjaxGrabarDescripcionEvento: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.ActualizarInvestigacionDescripcionEvento,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarDescripcionEventoSuccess
        }),
        AjaxGrabarDescripcionPostEvento: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.ActualizarInvestigacionDescripcionPostEvento,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarDescripcionPostEventoSuccess
        }),

        //////////////////// EQUIPO INVESTIGADOR
        AjaxEliminarInvestigador: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.EliminarInvestigador,
            autoSubmit: false,
            onSuccess: function (data) {
                'use strict'
                if (data.Result >= 1) {
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                    });

                    base.Event.BtnBuscarInvestigadorClick();
                } else {
                    base.Control.Mensaje.Error({
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                    });
                }
            }
        }),


        /////////////////TRABAJADOR INVOLUCRADO
        AjaxGrabarInvestigacionInvolucrado: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarInvestigacionInvolucrado,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarInvestigacionInvolucradoSuccess
        }),

        ////////////INVESTIGACION BARRERA
        AjaxBuscarInvestigacionBarrera: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacionBarrera,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarInvestigacionBarreraSuccess
        }),
        AjaxGrabarInvestigacionBarrera: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarInvestigacionBarrera,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarInvestigacionBarreraSuccess
        }),
        AjaxEliminarInvestigacionFallo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.EliminarInvestigacionFallo,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarInvestigacionFalloSuccess
        }),
        AjaxEliminarInvestigacionBarrera: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.EliminarInvestigacionBarrera,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarInvestigacionBarreraSuccess
        }),
        /////////////////ACCION CORRECTIVA
        AjaxEliminarRecordAccion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.EliminarRecordAccion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarRecordAccionSuccess
        }),

        /////////////////LECCION APRENDIDA
        AjaxEliminarInvestigacionLeccionAprendida: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.EliminarInvestigacionLeccionAprendida,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarInvestigacionLeccionAprendidaSuccess
        }),

        AjaxEliminarInvestigacionAccionInmediata: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.EliminarInvestigacionAccionInmediata,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarInvestigacionAccionInmediataSuccess
        }),

        AjaxEliminarInvestigacionAnexo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.EliminarInvestigacionAnexo,
            autoSubmit: false,
            onSuccess: function (data) {
                'use strict'
                if (data.Result >= 1) {
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                    });
                    base.Event.BtnBuscarInvestigacionAnexoFotoClick();
                } else {
                    base.Control.Mensaje.Error({
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                    });
                }
            }
        }),

        AjaxEliminarAnexo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.EliminarInvestigacionAnexo,
            autoSubmit: false,
            onSuccess: function (data) {
                'use strict'
                if (data.Result >= 1) {                    
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                    });
                    base.Event.BtnBuscarTipoAnexoClick();
                    base.Event.BtnBuscarInvestigacionAnexoApendiceClick();
                    base.Event.BuscarObligatorios()
                } else {
                    base.Control.Mensaje.Error({
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                    });
                }
            }
        }),

        AjaxEliminarComunidadInvolucrada: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.EliminarComunidadInvolucrada,
            autoSubmit: false,
            onSuccess: function (data) {
                'use strict'
                if (data.IsSuccess) {
                    base.Control.TxtActualConsecuenciaCategoriaImpactoComunidad().val(data.Result.DescripcionConsecuenciaActual);
                    base.Control.TxtPotencialConsecuenciaCategoriaImpactoComunidad().val(data.Result.DescripcionConsecuenciaPotencial);

                    if (data.Result.CodigoConsecuenciaActual != null && data.Result.CodigoConsecuenciaActual != '' &&
                        data.Result.CodigoConsecuenciaPotencial != null && data.Result.CodigoConsecuenciaPotencial != '') {
                        $('input[name="consecuenciaInvestigacionCategoriaImpactoComunidadActual"]').each(function (i) {
                            $(this).prop("checked", false);
                        });
                        $('input[name="consecuenciaInvestigacionCategoriaImpactoComunidadPotencial"]').each(function (i) {
                            $(this).prop("checked", false);
                        });
                        $('#radioCategoriaImpactoComunidadActual_' + data.Result.CodigoConsecuenciaActual).prop("checked", true);
                        $('#radioCategoriaImpactoComunidadPotencial_' + data.Result.CodigoConsecuenciaPotencial).prop("checked", true);
                    } else {
                        $('input[name="consecuenciaInvestigacionCategoriaImpactoComunidadActual"]').each(function (i) {
                            $(this).prop("checked", false);
                        });

                        $('input[name="consecuenciaInvestigacionCategoriaImpactoComunidadPotencial"]').each(function (i) {
                            $(this).prop("checked", false);
                        });
                    }

                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                    });
                    base.Event.BtnBuscarCategoriaImpactoClick();
                } else {
                    base.Control.Mensaje.Error({
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                    });
                }
            }
        }),
        ///////////////////////// ANEXOS
        AjaxValidacionSnapChart: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxValidacionSnapChartSuccess
        }),
        AjaxGrabarAnexoSnapchart: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarInvestigacionSnapChart,
            autoSubmit: false,
            onSuccess: function (resultado) {
                if (resultado.IsSuccess) {
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                    });
                    base.Event.BtnBuscarTestigoClick();
                } else {
                    base.Control.Mensaje.Warning({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                    });
                }
            }
        }),

        /////////////////CATEGORIA PERDIDA PROCESO
        AjaxEliminarInvestigacionPerdidaProceso: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.EliminarInvestigacionPerdidaProceso,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarInvestigacionPerdidaProcesoSuccess
        }),

        ////////////////CATEGORIA MEDIO AMBIENTAL
        AjaxEliminarInvestigacionCuerpoReceptor: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.EliminarInvestigacionCuerpoReceptor,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarInvestigacionCuerpoReceptorSuccess
        }),

        /////////////////CHECK CATEGORIA 
        AjaxRegistrarInvestigacionCategoriaPorCheck: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarInvestigacionCategoriaPorCheck,
            autoSubmit: false,
            onSuccess: base.Event.AjaxRegistrarInvestigacionCategoriaPorCheckSuccess
        }),
        AjaxEliminarInvestigacionCategoriaPorCheck: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.EliminarInvestigacionCategoriaPorCheck,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarInvestigacionCategoriaPorCheckSuccess
        }),


        /////////////////CATEGORIA CUASI
        AjaxRegistrarInvestigacionCategoriaCuasi: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarInvestigacionCategoriaCuasi,
            autoSubmit: false,
            onSuccess: base.Event.AjaxRegistrarInvestigacionCategoriaCuasiSuccess
        }),


        /////////////////CATEGORIA OTROS
        AjaxRegistrarInvestigacionCategoriaOtros: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarInvestigacionCategoriaOtros,
            autoSubmit: false,
            onSuccess: base.Event.AjaxRegistrarInvestigacionCategoriaOtrosSuccess
        }),

        /////////////////DATOS DEL REPORTANTE
        AjaxActualizarReportanteInvestigacion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.ActualizarReportanteInvestigacion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxActualizarReportanteInvestigacionSuccess
        }),
        /////////////////ESTADO DE LA INVESTIGACION
        AjaxRegistrarInvestigacionPersonaRol: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarInvestigacionPersonaRol,
            autoSubmit: false,
            onSuccess: base.Event.AjaxRegistrarInvestigacionPersonaRolSuccess
        }),
        AjaxEliminarInvestigacionPersonaRol: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.EliminarInvestigacionPersonaRol,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarInvestigacionPersonaRolSuccess
        }),
        AjaxRegistrarInvestigacionHistorialCambios: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarInvestigacionHistorialCambios,
            autoSubmit: false,
            onSuccess: base.Event.AjaxRegistrarInvestigacionHistorialCambiosSuccess
        }),

        AjaxEliminarInvolucrado: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.EliminarTrabajadorInvolucrado,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarInvolucradoSuccess
        }),

        AjaxEliminarInvestigacionPropiedad: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.EliminarInvestigacionPropiedad,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarInvestigacionPropiedadSuccess
        }),

        //CLASIFICACION PRINCIPAL
        AjaxActualizarInvestigacionConsecuencia: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.ActualizarInvestigacionConsecuencia,
            autoSubmit: false,
            onSuccess: base.Event.AjaxActualizarInvestigacionConsecuenciaSuccess
        }),
    };

    base.AjaxSuccess = {
        AjaxEliminarEventoSuccess: function (data) {
            'use strict'
            if (data.Result >= 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });

                base.Event.BtnBuscarSecuenciaEventoClick();
            } else {
                base.Control.Mensaje.Error({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },

        AjaxGrabarInvestigacionSuccess: function (resultado) {
            alert("Registro satifactorio");
        }
    };
};