/// <summary>
/// Script de formulario de Supervisor
/// </summary>
/// <remarks>
/// Creacion: 	GMD D43260443
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioSupervisor');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioSupervisor.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        base.Event.GrabarSupervisorSuccess = (opts.GrabarSupervisorSuccess != null && opts.GrabarSupervisorSuccess) ? opts.GrabarSupervisorSuccess : null;
        base.Control.FormularioSupervisorModel = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Models.FormularioSupervisorModel;
        /////   INI TAB - INFORMACION GENERAL
        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaNacimientoInformacionSupervisor(),
            minDateFrom: new Date(1900, 1, 1)
        });        

        if (base.Control.HdnCodigoTipoEmpresa().val() == "02") {
            base.Control.TxtAnioTiempoContratistaExperienciaSupervisor().attr("disabled", false);
            base.Control.DdlMesesTiempoContratistaExperienciaSupervisor().attr("disabled", false);
        } else {
            base.Control.TxtAnioTiempoContratistaExperienciaSupervisor().attr("disabled", true);
            base.Control.DdlMesesTiempoContratistaExperienciaSupervisor().attr("disabled", true);
        }

        base.Control.TxtAnioNegocioExperienciaSupervisor().off('keypress');
        base.Control.TxtAnioNegocioExperienciaSupervisor().on('keypress', base.Event.TxtSoloNumerosKeypress);

        base.Control.TxtAnioPuestoExperienciaSupervisor().off('keypress');
        base.Control.TxtAnioPuestoExperienciaSupervisor().on('keypress', base.Event.TxtSoloNumerosKeypress);

        base.Control.TxtAnioTiempoContratistaExperienciaSupervisor().off('keypress');
        base.Control.TxtAnioTiempoContratistaExperienciaSupervisor().on('keypress', base.Event.TxtSoloNumerosKeypress);

        base.Control.TxtAnioTiempoProyectoExperienciaSupervisor().off('keypress');
        base.Control.TxtAnioTiempoProyectoExperienciaSupervisor().on('keypress', base.Event.TxtSoloNumerosKeypress);

        base.Control.BtnGrabarInformacionSupervisor().off('click');
        base.Control.BtnGrabarInformacionSupervisor().on('click', base.Event.BtnGrabarInformacionSupervisorClick);

        base.Control.DdlProyectoInformacionSupervisor().off('change');
        base.Control.DdlProyectoInformacionSupervisor().on('change', base.Event.DdlProyectoInformacionSupervisorChange);

        base.Control.DdlDepartamentoInformacionSupervisor().off('change');
        base.Control.DdlDepartamentoInformacionSupervisor().on('change', base.Event.DdlDepartamentoInformacionSupervisorChange);

        base.Control.DdlAreaInformacionSupervisor().off('change');
        base.Control.DdlAreaInformacionSupervisor().on('change', base.Event.DdlAreaInformacionSupervisorChange);

        // calcular edad
        base.Control.DtpFechaNacimientoInformacionSupervisor().off('change');
        base.Control.DtpFechaNacimientoInformacionSupervisor().on('change', base.Event.CalcularEdad);
        //base.Control.DtpFechaNacimientoInformacionSupervisor().trigger('change');
        /////   INI TAB-EMRPESA
        base.Control.BtnBuscarEmpresaSupervisor().off('click');
        base.Control.BtnBuscarEmpresaSupervisor().on('click', base.Event.BtnBuscarEmpresaSupervisorClick);

        base.Control.DlgFormularioEmpresaSupervisor = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.FormularioBuscadorEmpresa.Controller({
            AceptarSuccess: base.Event.BuscarEmpresaSupervisorSuccess
        });
        base.Control.BtnGrabarEmpresaSupervisor().off('click');
        base.Control.BtnGrabarEmpresaSupervisor().on('click', base.Event.BtnGrabarEmpresaSupervisorClick);

        base.Control.DdlActividadEmpresaRiesgoSupervisor().off('change');
        base.Control.DdlActividadEmpresaRiesgoSupervisor().on('change', base.Event.DdlActividadEmpresaRiesgoSupervisorChange);

        //base.Control.DdlActividadEmpresaRiesgoSupervisor().trigger('change');

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmInformacionGeneralSupervisor(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraDetalleSupervisor()
        });

        base.Control.ValidadorExperiencia = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmExperienciaSupervisor(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraExperienciaSupervisor()
        });
        //base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
        //    form: base.Control.FrmInformacionGeneralSupervisor(),
        //    messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
        //    validationsExtra: base.Function.ValidacionExtraDetalleSupervisor()
        //});

        /////   INI TAB-TRABAJO Y EXPERIENCIA
        base.Control.BtnGrabarExperienciaSupervisor().off('click');
        base.Control.BtnGrabarExperienciaSupervisor().on('click', base.Event.BtnGrabarExperienciaSupervisorClick);


        base.Control.BtnCancelarInformacionSupervisor().off('click');
        base.Control.BtnCancelarInformacionSupervisor().on('click', base.Event.BtnCancelarInformacionSupervisorChange);

        base.Control.BtnCancelarEmpresaSupervisor().off('click');
        base.Control.BtnCancelarEmpresaSupervisor().on('click', base.Event.BtnCancelarEmpresaSupervisorChange);

        base.Control.BtnCancelarExperienciaSupervisor().off('click');
        base.Control.BtnCancelarExperienciaSupervisor().on('click', base.Event.BtnCancelarExperienciaSupervisorChange);        
    };

    base.Show = function (opts) {        
        base.Control.DlgFormPrincipalSupervisor = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaFormularioSupervisor,
            size: "size-wide",
            close: function () {
            }
        });

        base.Control.DlgFormPrincipalSupervisor.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.FormularioSupervisor,
            onSuccess: function () {
                base.Ini();
            },
            data: {
                CodigoInvestigacionSupervisor: opts.CodigoInvestigacionSupervisor,
                CodigoInvestigacion: opts.CodigoInvestigacion,
                CodigoColaboradorInvolucrado: opts.CodigoColaboradorInvolucrado,
                CodigoEstadoInvestigacion: opts.CodigoEstadoInvestigacion
            }
        });
    };

    base.Control = {
        Validador: null,
        ValidadorExperiencia: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        FormularioSupervisorModel: null,
        CodigoEstadoInvestigacion : null,
        CodigoSupervisor: null,
        CodigoInvestigacion: null,
        CodigoColaboradorInvolucrado: null,
        ///     TAB - Informacion General
        FrmInformacionGeneralSupervisor: function () { return $('#frmInformacionGeneralSupervisor'); },
        DtpFechaNacimientoInformacionSupervisor: function () { return $('#dtpFechaNacimientoInformacionSupervisor'); },
        DdlPuestoTrabajoInformacionSupervisor: function () { return $('#ddlPuestoTrabajoInformacionSupervisor'); },
        DdlEstadoCivilInformacionSupervisor: function () { return $('#ddlEstadoCivilInformacionSupervisor'); },
        TxtPaisInformacionSupervisor: function () { return $('#txtPaisInformacionSupervisor'); },
        TxtDepartamentoTerritorioInformacionSupervisor: function () { return $('#txtDepartamentoTerritorioInformacionSupervisor'); },
        TxtProvinciaInformacionSupervisor: function () { return $('#txtProvinciaInformacionSupervisor'); },
        DdlGeneroInformacionSupervisor: function () { return $('#ddlGeneroInformacionSupervisor'); },
        DdlGradoInstruccionInformacionSupervisor: function () { return $('#ddlGradoInstruccionInformacionSupervisor'); },
        DdlTipoContratoInformacionSupervisor: function () { return $('#ddlTipoContratoInformacionSupervisor'); },
        DdlProyectoInformacionSupervisor: function () { return $('#ddlProyectoInformacionSupervisor'); },
        DdlDepartamentoInformacionSupervisor: function () { return $('#ddlDepartamentoInformacionSupervisor'); },
        DdlAreaInformacionSupervisor: function () { return $('#ddlAreaInformacionSupervisor'); },
        DdlGuardiaInformacionSupervisor: function () { return $('#ddlGuardiaInformacionSupervisor'); },
        BtnGrabarInformacionSupervisor: function () { return $('#btnGrabarInformacionSupervisor'); },
        TxtEdadInformacionSupervisor: function () { return $('#txtEdadInformacionSupervisor'); },


        ///     TAB -Empresa
        FrmEmpresaSupervisor: function () { return $('#frmEmpresaSupervisor'); },
        BtnBuscarEmpresaSupervisor: function () { return $('#btnBuscarEmpresaSupervisor'); },
        DlgFormularioEmpresaSupervisor: null,
        HdnCodigoEmpresaSupervisor: function () { return $('#hdnCodigoEmpresaSupervisor'); },
        HdnCodigoTipoEmpresa: function () { return $('#hdnCodigoTipoEmpresa'); },
        TxtNombreEmpresaSupervisor: function () { return $('#txtNombreEmpresaSupervisor'); },
        TxtRucEmpresaSupervisor: function () { return $('#txtRucEmpresaSupervisor'); },
        TxtDireccionEmpresaSupervisor: function () { return $('#txtDireccionEmpresaSupervisor'); },
        TxtActividadEconomicaEmpresaSupervisor: function () { return $('#txtActividadEconomicaEmpresaSupervisor'); },
        TxtNTrabajadoresEmpresaSupervisor: function () { return $('#txtNTrabajadoresEmpresaSupervisor'); },
        TxtNTrabajadoresAfiliadosEmpresaSupervisor: function () { return $('#txtNTrabajadoresAfiliadosEmpresaSupervisor'); },
        TxtNTrabajadoresNoAfiliadosEmpresaSupervisor: function () { return $('#txtNTrabajadoresNoAfiliadosEmpresaSupervisor'); },
        TxtNombreAseguradoraEmpresaSupervisor: function () { return $('#txtNombreAseguradoraEmpresaSupervisor'); },
        DdlActividadEmpresaRiesgoSupervisor: function () { return $('#ddlActividadEmpresaRiesgoSupervisor'); },
        BtnGrabarEmpresaSupervisor: function () { return $('#btnGrabarEmpresaSupervisor'); },

        ///     TAB - TRABAJO Y EXPERIENCIA
        FrmExperienciaSupervisor: function () { return $('#frmExperienciaSupervisor'); },
        TxtAnioNegocioExperienciaSupervisor: function () { return $('#txtAnioNegocioExperienciaSupervisor'); },
        DdlMesesNegocioExperienciaSupervisor: function () { return $('#ddlMesesNegocioExperienciaSupervisor'); },
        TxtAnioTiempoProyectoExperienciaSupervisor: function () { return $('#txtAnioTiempoProyectoExperienciaSupervisor'); },
        DdlMesesTiempoProyectoExperienciaSupervisor: function () { return $('#ddlMesesTiempoProyectoExperienciaSupervisor'); },
        TxtAnioTiempoContratistaExperienciaSupervisor: function () { return $('#txtAnioTiempoContratistaExperienciaSupervisor'); },
        DdlMesesTiempoContratistaExperienciaSupervisor: function () { return $('#ddlMesesTiempoContratistaExperienciaSupervisor'); },
        TxtAnioPuestoExperienciaSupervisor: function () { return $('#txtAnioPuestoExperienciaSupervisor'); },
        DdlMesesPuestoExperienciaSupervisor: function () { return $('#ddlMesesPuestoExperienciaSupervisor'); },
        TxaActividadMomentoIncidenteExperienciaSupervisor: function () { return $('#txaActividadMomentoIncidenteExperienciaSupervisor'); },
        TxaTareaMomentoIncidenteExperienciaSupervisor: function () { return $('#txaTareaMomentoIncidenteExperienciaSupervisor'); },
        TxtComentarioEntrenamientoExperienciaSupervisor: function () { return $('#txtComentarioEntrenamientoExperienciaSupervisor'); },
        TxtLicenciaConducirExperienciaSupervisor: function () { return $('#txtLicenciaConducirExperienciaSupervisor'); },
        TxtLicenciaInternaExperienciaSupervisor: function () { return $('#txtLicenciaInternaExperienciaSupervisor'); },
        DdlRecibioEntrenamientoTrabajoSupervisor: function () { return $('#ddlRecibioEntrenamientoTrabajoSupervisor'); },
        DdlLicenciaConducirExperienciaSupervisor: function () { return $('#ddlLicenciaConducirExperienciaSupervisor'); },
        DdlLicenciaInternaExperienciaSupervisor: function () { return $('#ddlLicenciaInternaExperienciaSupervisor'); },
        BtnGrabarExperienciaSupervisor: function () { return $('#btnGrabarExperienciaSupervisor'); },

        BtnCancelarInformacionSupervisor: function () { return $('#btnCancelarInformacionSupervisor'); },
        BtnCancelarEmpresaSupervisor: function () { return $('#btnCancelarEmpresaSupervisor'); },
        BtnCancelarExperienciaSupervisor: function () { return $('#btnCancelarExperienciaSupervisor'); },
    };

    base.Function = {
        ValidacionExtraDetalleSupervisor: function () {
            var validaciones = new Array();

            return validaciones;
        },
        ValidacionExtraExperienciaSupervisor: function () {
            var validaciones = new Array();
            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.HdnCodigoTipoEmpresa().val() == "02" && (base.Control.DdlMesesTiempoContratistaExperienciaSupervisor().children().length > 1 && base.Control.DdlMesesTiempoContratistaExperienciaSupervisor().val() == '')) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.DdlMesesTiempoContratistaExperienciaSupervisor().attr('class', 'form-control');
                    }
                    else {
                        base.Control.DdlMesesTiempoContratistaExperienciaSupervisor().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.HdnCodigoTipoEmpresa().val() == "02" && (base.Control.TxtAnioTiempoContratistaExperienciaSupervisor().val() == null || base.Control.TxtAnioTiempoContratistaExperienciaSupervisor().val() == '')) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtAnioTiempoContratistaExperienciaSupervisor().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtAnioTiempoContratistaExperienciaSupervisor().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });
            return validaciones;
        },
    };

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
        /// TAB-EMPRESA
        // habilitar textbox segun opcion de DdlActividadEmrpesaRiesgo... valor = true
        DdlActividadEmpresaRiesgoSupervisorChange: function () {
            if (base.Control.DdlActividadEmpresaRiesgoSupervisor().val() == "true") {
                base.Control.TxtNTrabajadoresAfiliadosEmpresaSupervisor().attr("disabled", false);
                base.Control.TxtNTrabajadoresNoAfiliadosEmpresaSupervisor().attr("disabled", false);
                base.Control.TxtNombreAseguradoraEmpresaSupervisor().attr("disabled", false);
            }
            else {
                base.Control.TxtNTrabajadoresAfiliadosEmpresaSupervisor().val(0);
                base.Control.TxtNTrabajadoresNoAfiliadosEmpresaSupervisor().val(0);
                base.Control.TxtNombreAseguradoraEmpresaSupervisor().val('');

                base.Control.TxtNTrabajadoresAfiliadosEmpresaSupervisor().attr("disabled", true);
                base.Control.TxtNTrabajadoresNoAfiliadosEmpresaSupervisor().attr("disabled", true);
                base.Control.TxtNombreAseguradoraEmpresaSupervisor().attr("disabled", true);
                base.Control.TxtNTrabajadoresAfiliadosEmpresaSupervisor().attr('class', 'form-control');
                base.Control.TxtNTrabajadoresNoAfiliadosEmpresaSupervisor().attr('class', 'form-control');
                base.Control.TxtNombreAseguradoraEmpresaSupervisor().attr('class', 'form-control');
            }
        },

        DdlProyectoInformacionSupervisorChange: function () {
            base.Control.DdlDepartamentoInformacionSupervisor().empty();
            base.Control.DdlAreaInformacionSupervisor().empty();
            base.Control.DdlGuardiaInformacionSupervisor().empty();
            base.Control.DdlDepartamentoInformacionSupervisor().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
            if (base.Control.DdlProyectoInformacionSupervisor().val() != null && base.Control.DdlProyectoInformacionSupervisor().val() != '') {
                base.Ajax.AjaxBuscarDepartamentos.data = {
                    Departamento: { CodigoProyecto: base.Control.DdlProyectoInformacionSupervisor().val() }
                };
                base.Ajax.AjaxBuscarDepartamentos.submit();
            }
        },

        DdlDepartamentoInformacionSupervisorChange: function () {
            base.Control.DdlAreaInformacionSupervisor().empty();
            base.Control.DdlGuardiaInformacionSupervisor().empty();
            base.Control.DdlAreaInformacionSupervisor().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
            if (base.Control.DdlDepartamentoInformacionSupervisor().val() != null && base.Control.DdlDepartamentoInformacionSupervisor().val() != '') {
                base.Ajax.AjaxBuscarAreas.data = {
                    Area: { CodigoDepartamento: base.Control.DdlDepartamentoInformacionSupervisor().val() }
                };
                base.Ajax.AjaxBuscarAreas.submit();
            }
        },

        DdlAreaInformacionSupervisorChange: function () {
            base.Control.DdlGuardiaInformacionSupervisor().empty();
            base.Control.DdlGuardiaInformacionSupervisor().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
            if (base.Control.DdlAreaInformacionSupervisor().val() != null && base.Control.DdlAreaInformacionSupervisor().val() != '') {
                base.Ajax.AjaxBuscarGuardias.data = {
                    Grupo: { CodigoArea: base.Control.DdlAreaInformacionSupervisor().val() }
                };
                base.Ajax.AjaxBuscarGuardias.submit();
            }
        },

        BtnBuscarEmpresaSupervisorClick: function () {
            base.Control.DlgFormularioEmpresaSupervisor.Show(false, [], null);
        },
        BuscarEmpresaSupervisorSuccess: function (empresaSeleccionada) {
            if (empresaSeleccionada.length > 0) {
                base.Control.HdnCodigoEmpresaSupervisor().val(empresaSeleccionada[0].CodigoEmpresa);
                base.Control.HdnCodigoTipoEmpresa().val(empresaSeleccionada[0].CodigoTipoEmpresa);
                base.Control.TxtNombreEmpresaSupervisor().val(empresaSeleccionada[0].RazonSocial);
                base.Control.TxtRucEmpresaSupervisor().val(empresaSeleccionada[0].Ruc);
                base.Control.TxtDireccionEmpresaSupervisor().val(empresaSeleccionada[0].Direccion);
                base.Control.TxtActividadEconomicaEmpresaSupervisor().val(empresaSeleccionada[0].ActividadEconomica);
                base.Control.TxtNTrabajadoresEmpresaSupervisor().val(empresaSeleccionada[0].NumeroTrabajadores);
                base.Control.TxtNTrabajadoresAfiliadosEmpresaSupervisor().val(empresaSeleccionada[0].NumeroTrabajadoresAfiliados);
                base.Control.TxtNTrabajadoresNoAfiliadosEmpresaSupervisor().val(empresaSeleccionada[0].NumeroTrabajadoresNoAfiliados);
                base.Control.TxtNombreAseguradoraEmpresaSupervisor().val(empresaSeleccionada[0].NombreAseguradora);
                if (base.Control.HdnCodigoTipoEmpresa().val() == "02") {
                    base.Control.TxtAnioTiempoContratistaExperienciaSupervisor().attr("disabled", false);
                    base.Control.DdlMesesTiempoContratistaExperienciaSupervisor().attr("disabled", false);
                }
                else {
                    base.Control.TxtAnioTiempoContratistaExperienciaSupervisor().val('');
                    base.Control.TxtAnioTiempoContratistaExperienciaSupervisor().attr("disabled", true);
                    base.Control.DdlMesesTiempoContratistaExperienciaSupervisor().val('');
                    base.Control.DdlMesesTiempoContratistaExperienciaSupervisor().attr("disabled", true);
                }
            }
            else {
                base.Control.HdnCodigoEmpresaSupervisor().val(null);
                base.Control.HdnCodigoTipoEmpresa().val('');
                base.Control.TxtNombreEmpresaSupervisor().val('');
                base.Control.TxtRucEmpresaSupervisor().val('');
                base.Control.TxtDireccionEmpresaSupervisor().val('');
                base.Control.TxtActividadEconomicaEmpresaSupervisor().val('');
                base.Control.TxtNTrabajadoresEmpresaSupervisor().val(0);
                base.Control.TxtNTrabajadoresAfiliadosEmpresaSupervisor().val(0);
                base.Control.TxtNTrabajadoresNoAfiliadosEmpresaSupervisor().val(0);
                base.Control.TxtNombreAseguradoraEmpresaSupervisor().val('');
            }
        },

        BtnGrabarEmpresaSupervisorClick: function () {
            //if (base.Control.Validador.isValid()) {
            base.Control.Mensaje.Confirmation({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                onAccept: function () {
                    base.Ajax.AjaxGrabarEmpresaSupervisor.data = {
                        CodigoInvestigacionSupervisor: base.Control.FormularioSupervisorModel.InvestigacionSupervisor.CodigoInvestigacionSupervisor,
                        CodigoInvestigacion: base.Control.FormularioSupervisorModel.Investigacion.CodigoInvestigacion,
                        CodigoEmpresa: base.Control.HdnCodigoEmpresaSupervisor().val(),
                    }
                    base.Ajax.AjaxGrabarEmpresaSupervisor.submit();
                }
            });
            //}
            //else {
            //    $("#frmRecordSummaryErrorMessage").empty();
            //    $("#frmRecordSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            //}
        },

        BtnGrabarInformacionSupervisorClick: function () {            
            if (base.Control.Validador.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarDetalleSupervisor.data = {
                            CodigoInvestigacionSupervisor: base.Control.FormularioSupervisorModel.InvestigacionSupervisor.CodigoInvestigacionSupervisor,
                            CodigoInvestigacion: base.Control.FormularioSupervisorModel.Investigacion.CodigoInvestigacion,
                            CodigoColaboradorInvolucrado: base.Control.FormularioSupervisorModel.InvestigacionInvolucrado.CodigoColaboradorInvolucrado,                            
                            CodigoProyecto: base.Control.DdlProyectoInformacionSupervisor().val(),
                            CodigoDepartamento: base.Control.DdlDepartamentoInformacionSupervisor().val(),
                            CodigoArea: base.Control.DdlAreaInformacionSupervisor().val(),
                            CodigoGuardia: base.Control.DdlGuardiaInformacionSupervisor().val(),
                            FechaNacimiento: base.Control.DtpFechaNacimientoInformacionSupervisor().val(),
                            Edad: base.Control.TxtEdadInformacionSupervisor().val(),
                            CodigoEstadoCivil: base.Control.DdlEstadoCivilInformacionSupervisor().val(),
                            NombrePais: base.Control.TxtPaisInformacionSupervisor().val(),
                            NombreDepartamentoTerritorio: base.Control.TxtDepartamentoTerritorioInformacionSupervisor().val(),
                            NombreProvincia: base.Control.TxtProvinciaInformacionSupervisor().val(),
                            CodigoGenero: base.Control.DdlGeneroInformacionSupervisor().val(),
                            CodigoGradoInstruccion: base.Control.DdlGradoInstruccionInformacionSupervisor().val(),
                            CodigoPuestoTrabajo: base.Control.DdlPuestoTrabajoInformacionSupervisor().val(),
                            CodigoTipoContrato: base.Control.DdlTipoContratoInformacionSupervisor().val()
                        }
                        base.Ajax.AjaxGrabarDetalleSupervisor.submit();
                    }
                });
            }
            else {
                $("#frmInformacionGeneralSupervisorSummaryErrorMessage").empty();
                $("#frmInformacionGeneralSupervisorSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },

        BtnGrabarExperienciaSupervisorClick: function () {
            if (base.Control.ValidadorExperiencia.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarExperienciaSupervisor.data = {
                            CodigoInvestigacionSupervisor: base.Control.FormularioSupervisorModel.InvestigacionSupervisor.CodigoInvestigacionSupervisor,
                            CodigoInvestigacion: base.Control.FormularioSupervisorModel.Investigacion.CodigoInvestigacion,
                            ExperienciaNegocioAnios: base.Control.TxtAnioNegocioExperienciaSupervisor().val(),
                            ExperienciaNegocioMeses: base.Control.DdlMesesNegocioExperienciaSupervisor().val(),
                            TiempoProyectoAnios: base.Control.TxtAnioTiempoProyectoExperienciaSupervisor().val(),
                            TiempoProyectoMeses: base.Control.DdlMesesTiempoProyectoExperienciaSupervisor().val(),
                            TiempoContratistaAnios: base.Control.TxtAnioTiempoContratistaExperienciaSupervisor().val(),
                            TiempoContratistaMeses: base.Control.DdlMesesTiempoContratistaExperienciaSupervisor().val(),
                            ExperienciaPuestoAnios: base.Control.TxtAnioPuestoExperienciaSupervisor().val(),
                            ExperienciaPuestoMeses: base.Control.DdlMesesPuestoExperienciaSupervisor().val(),
                            ActividadMomentoIncidente: base.Control.TxaActividadMomentoIncidenteExperienciaSupervisor().val(),
                            TareaMomentoIncidente: base.Control.TxaTareaMomentoIncidenteExperienciaSupervisor().val(),
                        }
                        base.Ajax.AjaxGrabarExperienciaSupervisor.submit();
                    }
                });
            }
            else {
                $("#frmExperienciaSupervisorSummaryErrorMessage").empty();
                $("#frmExperienciaSupervisorSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },

        AjaxBuscarDepartamentosSuccess: function (resultado) {
            'use strict'
            $.each(resultado.Result, function (index, value) {
                base.Control.DdlDepartamentoInformacionSupervisor().append(new Option(value.NombreDepartamento, value.CodigoDepartamento));
            });
        },

        AjaxBuscarAreasSuccess: function (resultado) {
            'use strict'
            $.each(resultado.Result, function (index, value) {
                base.Control.DdlAreaInformacionSupervisor().append(new Option(value.NombreArea, value.CodigoArea));
            });
        },

        AjaxBuscarGuardiasSuccess: function (resultado) {
            'use strict'
            $.each(resultado.Result, function (index, value) {
                base.Control.DdlGuardiaInformacionSupervisor().append(new Option(value.NombreGrupo, value.CodigoGrupo));
            });
        },

        CalcularEdad: function () {
            if (base.Control.DtpFechaNacimientoInformacionSupervisor().val().split("/") != null || base.Control.DtpFechaNacimientoInformacionSupervisor().val().split("/") !== '') {
                var fecnac = base.Control.DtpFechaNacimientoInformacionSupervisor().val().split("/");
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
                    base.Control.TxtEdadInformacionSupervisor().val(edad);
                } else {
                    base.Control.TxtEdadInformacionSupervisor().val('');
                }


            } else {
                base.Control.TxtEdadInformacionSupervisor().val('');
            }
        },

        BtnCancelarInformacionSupervisorChange: function () { base.Control.DlgFormPrincipalSupervisor.divDialog.close(); },
        BtnCancelarEmpresaSupervisorChange: function () { base.Control.DlgFormPrincipalSupervisor.divDialog.close(); },
        BtnCancelarExperienciaSupervisorChange: function () { base.Control.DlgFormPrincipalSupervisor.divDialog.close(); },
    };

    base.Ajax = {
        AjaxGrabarEmpresaSupervisor: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarEmpresaSupervisor,
            autoSubmit: false,
            onSuccess: function (resultado) {
                if (resultado.IsSuccess) {
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                    });
                    if (base.Event.GrabarSupervisorSuccess() != null) {
                        base.Event.GrabarSupervisorSuccess();
                    }
                }
                else {
                    base.Control.Mensaje.Warning({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                    });
                }
            }
        }),

        AjaxGrabarDetalleSupervisor: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarDetalleSupervisor,
            autoSubmit: false,
            onSuccess: function (resultado) {
                if (resultado.IsSuccess) {
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                    });
                    if (base.Event.GrabarSupervisorSuccess() != null) {
                        base.Event.GrabarSupervisorSuccess();
                    }
                }
                else {
                    base.Control.Mensaje.Warning({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                    });
                }
            }
        }),

        AjaxGrabarExperienciaSupervisor: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarExperienciaSupervisor,
            autoSubmit: false,
            onSuccess: function (resultado) {
                if (resultado.IsSuccess) {
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                    });
                    if (base.Event.GrabarSupervisorSuccess() != null) {
                        base.Event.GrabarSupervisorSuccess();
                    }
                }
                else {
                    base.Control.Mensaje.Warning({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                    });
                }
            }
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

};