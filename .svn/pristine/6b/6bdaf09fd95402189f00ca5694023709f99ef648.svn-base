ns('Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioAgregarProcesosPersona');
Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioAgregarProcesosPersona.Controller = function (opts) {
    var base = this;
    base.Ini = function () {       
        base.Control.FormularioEquipoProcesoSubProcesoModel = Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioAgregarProcesosPersona.Models.AsignacionProyectoModel;
        base.Control.EsInstructor = (base.Control.FormularioEquipoProcesoSubProcesoModel != null && base.Control.FormularioEquipoProcesoSubProcesoModel != undefined ? base.Control.FormularioEquipoProcesoSubProcesoModel.Asignacion.EsInstructor : false)
        
        base.Function.CrearGridProcesos();
        base.Event.BtnBuscarProcesosClick();       
        base.Control.BtnAgregarProceso().on('click', base.Event.BtnAgregarProcesoClick);
        base.Control.BtnAgregarSubProceso().on('click', base.Event.BtnAgregarSubProcesoClick);
        base.Control.BtnGrabarEquipoProceso().on('click', base.Event.BtnGrabarEquipoProcesoClick);
        base.Control.TxtNombreEquipo().val(base.Control.DescripcionEquipo + ' - ' + base.Control.CodigoDescripcionEquipo);
        
        if (opts != null && opts.AceptarSuccess != null && opts.AceptarSuccess)
        { base.Event.AceptarSuccess = opts.AceptarSuccess; }

        base.Function.CargarSlcProceso();
        base.Control.SlcSubProceso().off('change');
        base.Control.SlcSubProceso().on('change', base.Event.SlcSubProcesoChange);
        //base.Control.TxtMesesAproximado().on('keyup', base.Event.TxtMesesAproximadoKeyup);
        //base.Control.TxtMesesAproximado().on("keypress", base.Event.TxtSoloNumerosKeypress);
        base.Control.DivCancelarGuardar().hide();
    };
    
    base.Control = {
        IndicadorRegistroMarcado: false,
        CodigoProyecto: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        CodigoProcesoAbreviado: null,
        CodigoAsignacionProceso: null,
        Contador: 1,
        Contadorchecks: 0,     
        CodigoEquipo: null,
        flagObtenerSubprocesos: false,
        GrdResultadoProcesos: null,
        GrdSubProcesos: null,
        TxtNombreProceso: function () { return $('#txtNombreProceso'); },
        TxtNombreSubProceso: function () { return $('#txtNombreSubProceso'); },
        TxtNombreEquipo: function () { return $('#txtNombreEquipo'); },
        BtnGrabarEquipoProceso: function () { return $('#btnGrabarEquipoProceso'); },
        BtnCancelarProceso: function () { return $('#btnCancelarEquipoProceso'); },
        TxtCantidadSubProcesos: function () { return $('#txtCantidadSubProcesos'); },
        //TxtCantidadHorasPlanificadas: function () { return $('#txtCantidadHorasPlanificadas'); },
        //TxtCantidadPlazoEstimado: function () { return $('#txtCantidadPlazoEstimado'); },
        TxtCantidadHorasPlanificadasSubProceso: function () { return $('#txtCantidadHorasPlanificadasSubProceso'); },
        //TxtCantidadPlazoEstimadoSubProceso: function () { return $('#txtCantidadPlazoEstimadoSubProceso'); },
        TxtCantidadProcesos: function () { return $('#txtCantidadProcesos'); },
        TxtCantidadHorasPlanificadasProceso: function () { return $('#txtCantidadHorasPlanificadasProceso'); },
        //TxtCantidadPlazoEstimadoProceso: function () { return $('#txtCantidadPlazoEstimadoProceso'); },

        DescripcionEquipo: null,
        DescripcionFamilia: null,
        ArrayProcesos: [],
        ArraySubProcesos: [],
        SlcProceso: function () { return $('#slcProceso'); },
        BtnAgregarProceso: function () { return $('#btnAgregarProceso'); },
        BtnAgregarSubProceso: function () { return $('#btnAgregarSubProceso'); },
        ArrayEquipos: [],
        CodigoAsignacionPersonaProceso:null,
        CodigoAsignacionPersonaEquipo:null,
        CodigoProceso: null,
        CodigoSubProceso:null,
        CodigoAsignacionEquipoProceso: null,
        CodigoAsignacionEquipoProyecto: null,
        CodigoAsignacionProceso:null,
        SlcSubProceso: function () { return $('#slcSubProceso'); },
        //TxtMesesAproximado: function () { return $('#txtMesesAproximado'); },
        //TxtDiasAproximado: function () { return $('#txtDiasAproximado'); },  
        DivCancelarGuardar: function () { return $('#divCancelarGuardar'); },
        NroDiasPlazoEstimadoGridProceso: 0,
        FormularioEquipoProcesoSubProcesoModel: null,
        EsInstructor: null,
    };

    base.Event = {
        SlcSubProcesoChange: function () {
            'use strict'
            if (base.Control.SlcSubProceso().val() != null && base.Control.SlcSubProceso().val() != '') {
                base.Event.ObtenerSubProcesoDeArray();
            }
            else {
                base.Contro.CodigoSubProceso = null;
            }
        },
        ObtenerProcesoDeArray: function () {
            for (var i = 0; i < base.Control.ArrayProcesos.length; i++) {
                if (base.Control.SlcProceso().val() == base.Control.ArrayProcesos[i].CodigoAsignacionEquipoProceso) {              
                    base.Control.CodigoProceso = base.Control.ArrayProcesos[i].CodigoProceso;
                    base.Control.CodigoAsignacionEquipoProceso=base.Control.ArrayProcesos[i].CodigoAsignacionEquipoProceso;          
                    base.Control.CodigoAsignacionEquipoProyecto = base.Control.CodigoAsignacionEquipoProyecto;
                    base.Control.CodigoAsignacionProceso = base.Control.ArrayProcesos[i].CodigoAsignacionProceso;
                  
                    break;
                }
            }
        },
        ObtenerSubProcesoDeArray: function () {
            for (var i = 0; i < base.Control.ArraySubProcesos.length; i++) {
                if (base.Control.SlcSubProceso().val() == base.Control.ArraySubProcesos[i].CodigoAsignacionEquipoSubProceso) {
                    base.Control.CodigoSubProceso = base.Control.ArraySubProcesos[i].CodigoSubProceso;
                    break;
                }
            }
        },
        BtnAgregarProcesoClick: function () {
            'use strict'
            if (base.Control.SlcProceso().val() != null && base.Control.SlcProceso().val() != '') {
               
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    indicadorModal: false,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarPersonaProceso.data = {
                            CodigoProceso: base.Control.SlcProceso().val(),
                            CodigoAsignacionPersonaEquipo: base.Control.CodigoAsignacionPersonaEquipo
                        };
                        base.Ajax.AjaxGrabarPersonaProceso.submit();
                  
                    }
                });

            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Resource.EtiquetaSeleccioneProcesoEquipo });
                return false;
            }

        },
        BtnAgregarSubProcesoClick: function () {
            'use strict'
            if (base.Control.SlcSubProceso().val() != null && base.Control.SlcSubProceso().val() != '') {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    indicadorModal: false,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarPersonaSubProceso.data = {
                            CodigoProyecto: base.Control.CodigoProyecto,
                            CodigoEquipo: base.Control.CodigoEquipo,
                            CodigoProceso: base.Control.CodigoProceso,
                            CodigoSubProceso: base.Control.SlcSubProceso().val(),
                            CodigoAsignacionPersonaProceso: base.Control.CodigoAsignacionPersonaProceso
                        };
                        base.Ajax.AjaxGrabarPersonaSubProceso.submit();
                    }
                });
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Resource.EtiquetaSeleccioneSubProceso });
                return false;
            }

        },
        BtnBuscarProcesosClick: function () {       
            //var filtro = {
            //    CodigoAsignacionEquipoProyecto: base.Control.CodigoAsignacionEquipoProyecto,
            //    CodigoProyecto: base.Control.CodigoProyecto
            //};
            var filtro = {
                CodigoAsignacionPersonaEquipo: base.Control.CodigoAsignacionPersonaEquipo                
            };

            base.Control.GrdResultadoProcesos.Load(filtro);
        },
        BtnGridDeletePersonaSubProcesoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                onAccept: function () {
                    base.Ajax.AjaxEliminarPersonaSubProceso.data = {
                        CodigoAsignacionPersonaSubProceso: data.CodigoAsignacionPersonaSubProceso,
                    };
                    base.Ajax.AjaxEliminarPersonaSubProceso.submit();                    
                }
            });
        },
        ActualizarEstadoPersonaSubProcesoClick: function () {
            'use strict'
           
            var TmpEsActivoPersonaSubProceso = 0;
            var CheckedValorObtenido = $(this).is(':checked');
            if (CheckedValorObtenido == true) {
                TmpEsActivoPersonaSubProceso = 1;
            }
            base.Ajax.AjaxActualizarEstadoPersonaSubProceso.data = {
                CodigoAsignacionPersonaSubProceso: $(this).data().codigoasignacionpersonasubproceso,
                EsActivoPersonaSubProceso: TmpEsActivoPersonaSubProceso
            };
            base.Ajax.AjaxActualizarEstadoPersonaSubProceso.submit();

            base.Control.NroDiasPlazoEstimadoGridProceso = 0;
                      
        },
        ActualizarEstadoPersonaProcesoClick: function () {
            'use strict'                     
            //if (!$(this).is(':checked')) {
            //    base.Control.IndicadorRegistroMarcado = false;
            //}
            //if (base.Control.IndicadorRegistroMarcado) {
            //    base.Control.Mensaje.Warning({ message: 'Solo se puede agregar un proceso por equipo.' });
            //    $(this).prop('checked', '');
            //    return;
            //}

            var TmpEsActivoPersonaProceso = 0;
            var CheckedValorObtenido = $(this).is(':checked');
            if (CheckedValorObtenido) {
                //base.Control.IndicadorRegistroMarcado = true;
                TmpEsActivoPersonaProceso = 1;
            }
            else {
                base.Control.IndicadorRegistroMarcado = false;
            }
            
            base.Ajax.AjaxActualizarEstadoPersonaProceso.data = {
                CodigoAsignacionPersonaEquipo: base.Control.CodigoAsignacionPersonaEquipo ,
                CodigoAsignacionPersonaProceso: $(this).data().codigoasignacionpersonaproceso,
                EsActivoPersonaProceso: TmpEsActivoPersonaProceso
            };
            base.Ajax.AjaxActualizarEstadoPersonaProceso.submit();

        },
        //CalcularPlazoEstimadoEquipo: function () {
        //    var acumPlazo = 0;
        //    $.each(document.getElementsByName("ClassPlazoEstimado"), function (index, value) {
        //        if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
        //            acumPlazo += parseInt($(this).val());
        //        }
        //    });
        //    base.Control.TxtCantidadPlazoEstimadoSubProceso().val(acumPlazo);
          
        //    var NroMesesAproximado = base.Function.roundNumber((acumPlazo / 30), 2)
        //    var NroDiasAproximado = base.Function.roundNumber((NroMesesAproximado*30), 0)
        //    base.Control.TxtMesesAproximado().val(NroMesesAproximado);
        //    base.Control.TxtDiasAproximado().val(NroDiasAproximado)           
        //},


        CalcularHorasPlanificadasEquipo: function () {
            var acumHoras = 0;
            $.each(document.getElementsByName("ClassHorasPlanificadas"), function (index, value) {
                if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
                    acumHoras += parseInt($(this).val());
                }
            });
            
            base.Control.TxtCantidadHorasPlanificadasSubProceso().val(acumHoras);
        },
        ObtenerSubProcesoEquipoClick: function () {
            var numerofila = $(this).data().numerofila;            
            if ($(this).is(':checked'))
            {                
                $.each(document.getElementsByName("ClassHorasPlanificadas"), function (index, value) {
                    $(this).prop("disabled", true);
                });
                $.each(document.getElementsByName("ClassPlazoEstimado"), function (index, value) {
                    $(this).prop("disabled", true);
                });
                $('#txtHorasPlanificadas_' + numerofila).prop("disabled", false);
                //$('#txtPlazoEstimado_' + numerofila).prop("disabled", false);
            }
            else
            {                
                $('#txtHorasPlanificadas_' + numerofila).val('');
                //$('#txtPlazoEstimado_' + numerofila).val('');                

                base.Event.CalcularPlazoEstimado();
                base.Event.CalcularHorasPlanificadas();

                $('#txtHorasPlanificadas_' + numerofila).prop("disabled", true);
                //$('#txtPlazoEstimado_' + numerofila).prop("disabled", true);
            }
        },
        ObtenerSubProcesoClick: function () {
            if ($(this).is(':checked')) {
                $.each(document.getElementsByName("chkProcesoEquipo"), function (index, value) {
                    $(this).prop("checked", false);
                });
                $(this).prop("checked", true);

                $('#blockSubProcesos').show();
                $('#divGrdResultadoSubProcesos').empty();
           
                base.Control.Contador = 1;
                base.Control.CodigoProceso= $(this).data().codigoproceso;
                base.Control.CodigoProcesoAbreviado = $(this).data().codigoprocesoabreviado;
                base.Control.CodigoAsignacionProceso = $(this).data().codigoasignacionproceso;
                base.Control.CodigoAsignacionPersonaProceso = $(this).data().codigoasignacionpersonaproceso;
                base.Control.NroDiasPlazoEstimadoGridProceso = $(this).data().plazoestimadoproceso;

                base.Function.CrearGridSubProcesos();                             
            
                var filtro = {
                    CodigoAsignacionPersonaProceso: $(this).data().codigoasignacionpersonaproceso,
                    CodigoProceso: $(this).data().codigoproceso         
                };
                base.Control.GrdSubProcesos.Load(filtro);                
                
                base.Control.SlcSubProceso().empty();
                base.Control.SlcSubProceso().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
                base.Ajax.AjaxBuscarSubProcesos.data = {
                    CodigoEquipo: base.Control.CodigoEquipo,                    
                    CodigoProyecto: base.Control.CodigoProyecto,
                    CodigoProceso: base.Control.CodigoProceso
                };
                base.Ajax.AjaxBuscarSubProcesos.submit();
                base.Control.TxtNombreSubProceso().val($(this).data().nombreprocesoespaniol);
                
                base.Control.DivCancelarGuardar().show();
            }
            else {
                $('#blockSubProcesos').hide();
                $('#divGrdResultadoSubProcesos').empty();
                base.Control.DivCancelarGuardar().hide();
            }
        },
        BtnGrabarEquipoProcesoClick: function () {
            try
            {            
            var arraySeleccionados = [];
            $.each(base.Control.GrdSubProcesos.core.rows().data(), function (index, value) {
                if ($('#txtHorasPlanificadas_' + value.NumeroFila).val() != '' &&
                       $('#txtHorasPlanificadas_' + value.NumeroFila).val() != null &&
                       $('#txtHorasPlanificadas_' + value.NumeroFila).val() != undefined ) {
                    arraySeleccionados.push({
                        CodigoAsignacionPersonaProceso: base.Control.CodigoAsignacionPersonaProceso,
                        CodigoAsignacionPersonaSubProceso: value.CodigoAsignacionPersonaSubProceso,
                        HorasPlanificadasSubProceso: $('#txtHorasPlanificadas_' + value.NumeroFila).val(),
                        //PlazoEstimadoSubProceso: $('#txtPlazoEstimado_' + value.NumeroFila).val(),
                        //TotalNroDiasAproximadoSubProceso: base.Control.TxtDiasAproximado().val()
                    });
                }
            });

            if (arraySeleccionados.length > 0) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    indicadorModal: false,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarEquipoProceso.data = arraySeleccionados;
                        base.Ajax.AjaxGrabarEquipoProceso.submit();
                    }
                });
            }
            //else {
            //    base.Control.Mensaje.Warning({ message: 'Todos los SubProcesos deben contener valores' });
            //    return false;
            //}

            var selectedProcesoListData = base.Control.GrdSubProcesos.GetSelectedData();
            var arrayProcesos = [];
            for (var i = 0; i < selectedProcesoListData.length; i++) {
                arrayProcesos.push({
                    CodigoAsignacionProceso: base.Control.CodigoAsignacionProceso,
                    CodigoEquipo: base.Control.CodigoEquipo,
                    CodigoAsignacionSubProceso: selectedProcesoListData[i].CodigoAsignacionSubProceso,
                });
            }

            }
            catch (err) {
            
            }
                   
        },
        AjaxGrabarEquipoProcesoSuccess: function (resultado) {
            if (resultado.Result == 1) {
                base.Event.BtnBuscarProcesosClick();
                if (base.Event.AceptarSuccess != null) {
                    base.Event.AceptarSuccess();
                }
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
            }
            else if (resultado.Result == 2) {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Resource.MsjValidarProcesoRegistrado });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxEliminarPersonaSubProcesoSuccess: function (resultado) {
            if (resultado.Result >= 1) {
                
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });

                var filtro = {
                    CodigoAsignacionPersonaProceso: base.Control.CodigoAsignacionPersonaProceso,
                    CodigoProceso: base.Control.CodigoProceso
                };
                base.Control.GrdSubProcesos.Load(filtro);
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxGrabarPersonaProcesoSuccess: function (resultado) {
            if (resultado.Result == 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnBuscarProcesosClick()             
            }
            else if (resultado.Result == 2)
            {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Resource.MsjValidarProcesoRegistrado });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxGrabarPersonaSubProcesoSuccess: function (resultado) {
            if (resultado.Result == 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });

                var filtro = {
                    CodigoAsignacionPersonaProceso: base.Control.CodigoAsignacionPersonaProceso,
                    CodigoProceso: base.Control.CodigoProceso
                };
                base.Control.GrdSubProcesos.Load(filtro);
               
            }
            else if (resultado.Result == 2) {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Resource.MsjValidarSubProcesoRegistrado });
            }

            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxActualizarEstadoPersonaSubProcesoSuccess: function (resultado) {
            if (resultado.Result >= 1) { 
                var filtro = {
                    CodigoAsignacionPersonaProceso: base.Control.CodigoAsignacionPersonaProceso,
                    CodigoProceso: base.Control.CodigoProceso
                };
                base.Control.GrdSubProcesos.Load(filtro);
                base.Event.BtnBuscarProcesosClick();
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxActualizarEstadoPersonaProcesoSuccess: function (resultado) {
            if (resultado.Result == 1) {
                base.Event.BtnBuscarProcesosClick();
                if (base.Event.AceptarSuccess != null) {
                    base.Event.AceptarSuccess();
                }
            }
            else if (resultado.Result == 2) {
                base.Event.BtnBuscarProcesosClick();
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Resource.MsjValidarUnProcesoPorEquipo });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        BtnGridDeleteValidate: function (data, type, full) {
            if (full.CodigoAsignacionPersonaSubProceso != null)
                return true;
            else
                return false;
        },
        AjaxBuscarProcesosSuccess: function (resultado) {                     
            base.Control.ArrayProcesos = resultado.Result;           
            $.each(resultado.Result, function (index, value) {
                base.Control.SlcProceso().append(new Option(value.NombreProceso, value.CodigoProceso));
            });
        },
        AjaxBuscarSubProcesosSuccess: function (resultado) {
            base.Control.ArraySubProcesos = resultado.Result;
            $.each(resultado.Result, function (index, value) {
                base.Control.SlcSubProceso().append(new Option(value.NombreSubProceso, value.CodigoSubProceso));
            });
        }

    };

    base.Show = function (opts) {        
        base.Control.ArrayEquipos = opts.ArrayEquipos;
        base.Control.CodigoProyecto = opts.CodigoProyecto;
        base.Control.Contadorchecks = 0;
        base.Control.CodigoEquipo = opts.CodigoEquipo;
        base.Control.CodigoFamiliaEquipo = opts.CodigoFamiliaEquipo;
        base.Control.CodigoDescripcionEquipo = opts.CodigoDescripcionEquipo;
        base.Control.CodigoAsignacionEquipoProyecto = opts.CodigoAsignacionEquipoProyecto;
        base.Control.DescripcionEquipo = opts.DescripcionEquipo;
        base.Control.DescripcionFamilia = opts.DescripcionFamilia;
        base.Control.CodigoAsignacionPersonaEquipo = opts.CodigoAsignacionPersonaEquipo;
        for (var i = 0; i < base.Control.ArrayEquipos.length; i++) {
            if (opts.CodigoEquipo == base.Control.ArrayEquipos[i].CodigoEquipo) {
                base.Control.CodigoAsignacionEquipoProyecto = base.Control.ArrayEquipos[i].CodigoAsignacionEquipoProyecto
                break;
            }
        }
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Resource.EtiquetaVentanaAgregarProcesoPersona,
            size: "size-wide",
            close: function () {
            }
        });

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Actions.FormularioAgregarProcesosPersona,
            onSuccess: function () {
                base.Ini();
            }
        });
    };
    base.Ajax = {
        AjaxGrabarEquipoProceso: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Actions.ActualizarAsignacionPersonaSubProceso,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarEquipoProcesoSuccess
        }),

        AjaxGrabarPersonaProceso: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Actions.RegistrarAsignacionPersonaProceso,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarPersonaProcesoSuccess
        }),

        AjaxGrabarPersonaSubProceso: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Actions.RegistrarAsignacionPersonaSubProceso,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarPersonaSubProcesoSuccess
        }),

        AjaxEliminarPersonaSubProceso: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Actions.EliminarAsignacionPersonaSubProceso,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarPersonaSubProcesoSuccess
        }),

        AjaxBuscarProcesos: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Actions.BuscarCombosProcesosPersonaAsignacion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarProcesosSuccess
        }),

        AjaxBuscarSubProcesos: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Actions.BuscarCombosSubProcesosPersonaAsignacion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarSubProcesosSuccess
        }),
        AjaxActualizarEstadoPersonaProceso: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Actions.ActualizarEstadoPersonaProceso,
            autoSubmit: false,
            onSuccess: base.Event.AjaxActualizarEstadoPersonaProcesoSuccess
        }),
        AjaxActualizarEstadoPersonaSubProceso: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Actions.ActualizarEstadoPersonaSubProceso,
            autoSubmit: false,
            onSuccess: base.Event.AjaxActualizarEstadoPersonaSubProcesoSuccess
        })

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

        ObtenerGridProcesoDeArray: function (codigoGridProceso) {
            
            for (var i = 0; i < base.Control.ArrayProcesos.length; i++) {
                if (codigoGridProceso == base.Control.ArrayProcesos[i].CodigoProceso) {
                  
                    base.Control.CodigoProceso = base.Control.ArrayProcesos[i].CodigoProceso;
                    base.Control.CodigoAsignacionEquipoProceso = base.Control.ArrayProcesos[i].CodigoAsignacionEquipoProceso;
                    base.Control.CodigoAsignacionEquipoProyecto = base.Control.CodigoAsignacionEquipoProyecto;
                    base.Control.CodigoAsignacionProceso = base.Control.ArrayProcesos[i].CodigoAsignacionProceso;

                    break;
                }
            }
        },

        CrearGridProcesos: function () {
            var columns = new Array();
            
            columns.push({
                data: '',
                title: '',
                "class": "text-center",
                width: "5%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input name='chkProcesoEquipo' class='checkProcesoEquipo' type='radio' " +
                             "data-nombreprocesoespaniol='" + full.NombreProcesoEspaniol + "'" +
                             "data-codigoasignacionpersonaproceso='" + full.CodigoAsignacionPersonaProceso + "'" +
                             "data-codigoasignacionequipoproceso='" + full.CodigoAsignacionEquipoProceso + "'" +
                             "data-codigoproceso='" + full.CodigoProceso + "'" +
                             "data-plazoestimadoproceso='" + full.PlazoEstimadoProceso + "'" +
                             "data-codigoasignacionequipoproyecto='" + full.CodigoAsignacionEquipoProyecto + "'" +
                             "data-codigoasignacionproceso='" + full.CodigoAsignacionProceso + "' data-codigoprocesoabreviado='" + full.CodigoProcesoAbreviado + "'>";
                    return cadena;
                },
            });
            columns.push({
                data: 'NumeroFila',
                "class": "text-center",
                title: '#',
                width: "5%"
            }); 
            columns.push({
                data: 'CodigoProcesoAbreviado',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Resource.GridProceso,
                width: "15%"               
            });
            columns.push({
                data: 'NombreProcesoEspaniol',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Resource.GridDescripcionProceso,
                width: "60%"
            });
            columns.push({
                data: '',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Resource.GridHorasPlanificadas,
                width: "10%",
                mRender: function (data, type, full) {
                    return '<input  value="' + (full.HorasPlanificadasProceso != null ? full.HorasPlanificadasProceso : '') + '" type="text" style="width:50px;text-align:center;" disabled>';
                }
            });
            columns.push({
                data: '',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Resource.GridIndicadorAplicaProceso,
                "class": "text-center",
                width: "15%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    //cadena = "<input " + (full.EsActivoPersonaProceso == 1 ? " checked " : "true") + " class='checkSeleccionarEquipoProceso' type='checkbox' name='gridCheckRecordCategoria'>";
                    cadena = "<input " + (full.EsActivoPersonaProceso == 1 ? " checked " : "true") + " data-codigoasignacionpersonaproceso='" + full.CodigoAsignacionPersonaProceso + "' class='checkSeleccionarProceso'     id='" + full.CodigoProceso + "'      type='checkbox' name='gridCheckRecordCategoria'  >";
                    return cadena;
                }
            });       
            base.Control.GrdResultadoProcesos = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoProcesosModal',
                columns: columns,
                hasSelectionRows: false,
                hasPaging: false,
                hasPagingServer: false,
                columnDefs: [{ "width": "5%", "targets": [0] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Actions.BuscarPersonaProcesos,
                    source: 'Result'
                },
                events: [
                    { type: 'click', selector: '.checkSeleccionarProceso', callBack: base.Event.ActualizarEstadoPersonaProcesoClick },
                    { type: 'click', selector: '.checkProcesoEquipo', callBack: base.Event.ObtenerSubProcesoClick }
                ],
                returnCallbackComplete: function (instancia, records) {
                    //$.each(document.getElementsByClassName('checkSeleccionarProceso'), function (index, value) {
                    //    if ($('#' + value.id).is(':checked')) {
                    //        base.Control.IndicadorRegistroMarcado = true;
                    //        return false;
                    //    }
                    //});                    
                    Pe.GMD.UI.Web.Components.TextBox.Function.Configure();   
                    base.Control.TxtCantidadProcesos().val(records.length);
                    var acumHoras = 0; var acumPlazo = 0;
                    for (var i = 0; i < records.length; i++) {
                        if (records[i].HorasPlanificadasProceso != null && records[i].EsActivoPersonaProceso == '1')
                            acumHoras += parseInt(records[i].HorasPlanificadasProceso);
                        //if (records[i].PlazoEstimadoProceso != null && records[i].EsActivoPersonaProceso == '1')
                        //    acumPlazo += parseInt(records[i].PlazoEstimadoProceso);
                    }
                    base.Control.TxtCantidadHorasPlanificadasProceso().val(acumHoras);
                    //base.Control.TxtCantidadPlazoEstimadoProceso().val(acumPlazo);
                }
            });

        },
        CrearGridSubProcesos: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: '#',
                width: "5%"
            });

            columns.push({
                data: '',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Resource.GridProceso,
                width: "5%",
                mRender: function (data, type, full) {
                    return base.Control.CodigoProcesoAbreviado;
                }
            });
            columns.push({
                data: 'NombreSubProcesoEspaniol',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Resource.GridComposicionCurso,
                width: "60%"
            });
            columns.push({
                data: '',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Resource.GridHorasPlanificadas,
                width: "10%",
                mRender: function (data, type, full) {
                    return '<input  ' + (base.Control.EsInstructor == true ? "disabled" : "") + '   value="' + (full.HorasPlanificadasSubProceso != null ? full.HorasPlanificadasSubProceso : '') + '" type="text" id="txtHorasPlanificadas_' + full.NumeroFila + '" class="ClassHorasPlanificadas" name="ClassHorasPlanificadas" mask="integer" style="width:50px;text-align:center;">';
                }
            });
            //columns.push({
            //    data: '',
            //    title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Resource.GridPlazoEstimado,
            //    width: "10%",
            //    mRender: function (data, type, full) {
            //        return '<input value="' + (full.PlazoEstimadoSubProceso != null ? full.PlazoEstimadoSubProceso : '') + '" type="text" id="txtPlazoEstimado_' + full.NumeroFila + '" class="ClassPlazoEstimado" name="ClassPlazoEstimado" mask="integer" style="width:50px;text-align:center;">';
            //    }
            //});

            columns.push({
                data: '',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Resource.GridIndicadorAplicaSubProceso,
                "class": "text-center",
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    //cadena = "<input " + (full.EsActivoPersonaSubProceso == 1 ? " checked " : "true") + " class='checkSeleccionarEquipo' type='checkbox' name='gridCheckRecordCategoria'>";
                    cadena = "<input " + (full.EsActivoPersonaSubProceso == 1 ? " checked " : "true") +
                    " data-horasplanificadasproceso='" + full.HorasPlanificadasSubProceso + "'" +
                    //" data-plazoestimadosubproceso='" + full.PlazoEstimadoSubProceso + "'" +
                    " data-codigoasignacionpersonasubproceso='" + full.CodigoAsignacionPersonaSubProceso + "' class='checkSeleccionarSubProceso' type='checkbox' name='gridCheckRecordCategoria'  " + (base.Control.EsInstructor == true ? " disabled" : "") + "  >";
                    return cadena;
                },
            });

            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Resource.GridOperaciones,
                "class": "controls",
                width: "3%",
                actionButtons: [
                    //{ type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.BtnGridDeleteValidate, event: { on: 'click', callBack: base.Event.BtnGridDeleteEquipoSubProcesoClick } }
                     { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeletePersonaSubProcesoClick } }
                ]
            });
            base.Control.GrdSubProcesos = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoSubProcesos',
                columns: columns,
                hasSelectionRows: false,
                hasPaging: false,
                hasPagingServer: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Actions.BuscarPersonaSubProcesos,
                    source: 'Result'
                },
                events: [
                    { type: 'click', selector: '.checkSeleccionarSubProceso', callBack: base.Event.ActualizarEstadoPersonaSubProcesoClick },
                    { type: 'click', selector: '.checkSubProceso', callBack: base.Event.ObtenerSubProcesoEquipoClick },
                    //{ type: 'keyup', selector: '.ClassPlazoEstimado', callBack: base.Event.CalcularPlazoEstimadoEquipo },
                    { type: 'keyup', selector: '.ClassHorasPlanificadas', callBack: base.Event.CalcularHorasPlanificadasEquipo }
                ],
                returnCallbackComplete: function (instancia, records) {
                   
                    Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
                    base.Control.TxtCantidadSubProcesos().val(records.length);
                    var acumHoras = 0; var acumPlazo = 0;
                    for (var i = 0; i < records.length; i++) {
                        if (records[i].HorasPlanificadasSubProceso != null && records[i].EsActivoPersonaSubProceso == '1')
                            acumHoras += parseInt(records[i].HorasPlanificadasSubProceso);
                        //if (records[i].PlazoEstimadoSubProceso != null && records[i].EsActivoPersonaSubProceso == '1')
                        //    acumPlazo += parseInt(records[i].PlazoEstimadoSubProceso);
                    }
                    base.Control.TxtCantidadHorasPlanificadasSubProceso().val(acumHoras);
                    //base.Control.TxtCantidadPlazoEstimadoSubProceso().val(acumPlazo);
                                  
                    //if (base.Control.NroDiasPlazoEstimadoGridProceso == 0 || base.Control.NroDiasPlazoEstimadoGridProceso == null) {
                    //    var NroMesesAproximado = base.Function.roundNumber((acumPlazo / 30), 2)
                    //    var NroDiasAproximado = base.Function.roundNumber((NroMesesAproximado * 30), 0)
                    //    base.Control.TxtMesesAproximado().val(NroMesesAproximado);
                    //    base.Control.TxtDiasAproximado().val(NroDiasAproximado)                    
                    //}
                    //else {
                    //    var tmpNroDiasPlazoEstimado = base.Control.NroDiasPlazoEstimadoGridProceso;
                    //    base.Control.TxtMesesAproximado().val(base.Function.roundNumber((tmpNroDiasPlazoEstimado / 30), 2));
                    //    base.Control.TxtDiasAproximado().val(tmpNroDiasPlazoEstimado);
                    //}             
                }
            });
        },
        CargarSlcProceso: function () {
            'use strict'            
                base.Control.SlcProceso().empty();
                base.Control.SlcProceso().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
                base.Ajax.AjaxBuscarProcesos.data = {                    
                    CodigoEquipo: base.Control.CodigoEquipo,                    
                    CodigoProyecto: base.Control.CodigoProyecto
                };              
                base.Ajax.AjaxBuscarProcesos.submit();
            
        }       
    };
};