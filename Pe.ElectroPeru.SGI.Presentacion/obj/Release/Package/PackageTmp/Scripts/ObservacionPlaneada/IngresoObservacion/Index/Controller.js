/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 19102017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Index');
Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Index.Controller = function () {
    var base = this;

    base.Ini = function () {
        Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
        base.Control.FormularioModelo = Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Models.Formulario;
        base.Control.DlgFormularioColaborador = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.BuscarColaboradorSuccess
        });

        base.Control.DlgFormularioColaboradorInterno = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.BuscarColaboradorInternoSuccess
        });

        base.Control.DlgFormularioSupervisor = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.BuscarSupervisorSuccess
        });

        base.Control.DlgFormularioAnexoApendice = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioIntegradorApendiceArchivo.Controller({
            GrabarRecordAnexoApendiceSuccess: base.Event.BtnBuscarAnexoArchivoClick
        });

        base.Control.DlgFormularioAnexoFoto = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioIntegradorApendiceFoto.Controller({
            GrabarRecordAnexoFotoSuccess: base.Event.BtnBuscarAnexoFotoClick
        });

        base.Control.DlgFormularioVistaPreviaFoto = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioVistaPreviaFotoGenerico.Controller({
        });

        base.Control.DlgFormularioCausasRaices = new Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.FormularioCausasRaices.Controller({
            GrabarAnalisiSuccess: base.Event.BtnBuscarCausasRaices
        });

        base.Control.DlgFormularioIngresoAccion = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordAccionGenerico.Controller({
            GrabarRecordAccionSuccess: base.Event.BtnBuscarAccionesClick
        });

        base.Control.SlcProyecto().off('change');
        base.Control.SlcProyecto().on('change', base.Event.SlcProyectoChange);

        base.Control.SlcDepartamento().off('change');
        base.Control.SlcDepartamento().on('change', base.Event.SlcDepartamentoChange);

        base.Control.SlcArea().off('change');
        base.Control.SlcArea().on('change', base.Event.SlcAreaChange);
        
        base.Control.BtnAgregarColaborador().off('click');
        base.Control.BtnAgregarColaborador().on('click', base.Event.BtnAgregarColaboradorClick);
        base.Control.BtnAgregarSupervisor().off('click');
        base.Control.BtnAgregarSupervisor().on('click', base.Event.BtnAgregarSupervisorClick);
        base.Control.BtnAgregarObservadorInterno().off('click');
        base.Control.BtnAgregarObservadorInterno().on('click', base.Event.BtnAgregarObservadorInternoClick);
        base.Control.BtnAgregarAnexo().off('click');
        base.Control.BtnAgregarAnexo().on('click', base.Event.BtnAgregarAnexoClick);
        base.Control.BtnAgregarFoto().off('click');
        base.Control.BtnAgregarFoto().on('click', base.Event.BtnAgregarFotoClick);
        base.Control.BtnAgregarCausas().off('click');
        base.Control.BtnAgregarCausas().on('click', base.Event.BtnAgregarCausasClick);
        base.Control.BtnAgregarAccion().off('click');
        base.Control.BtnAgregarAccion().on('click', base.Event.BtnAgregarAccionClick);
        base.Control.BtnRegresarBandejaOPT().off('click');
        base.Control.BtnRegresarBandejaOPT().on('click', base.Event.BtnRegresarBandejaOPTClick);
        base.Control.BtnGuardarGenerales().off('click');
        base.Control.BtnGuardarGenerales().on('click', base.Event.BtnGuardarGeneralesClick);
        base.Control.BtnGuardarObservadorInterno().off('click');
        base.Control.BtnGuardarObservadorInterno().on('click', base.Event.BtnGuardarObservadorInternoClick);        
        base.Control.BtnGuardarCumplimiento().off('click');
        base.Control.BtnGuardarCumplimiento().on('click', base.Event.BtnGuardarCumplimientoClick);
        base.Control.BtnGuardarRetroalimentacion().off('click');
        base.Control.BtnGuardarRetroalimentacion().on('click', base.Event.BtnGuardarRetroalimentacionClick);        
        base.Control.BtnGuardarObservadorExterno().off('click');
        base.Control.BtnGuardarObservadorExterno().on('click', base.Event.BtnGuardarObservadorExternoClick);
        base.Control.BtnGuardarProcedimientos().off('click');
        base.Control.BtnGuardarProcedimientos().on('click', base.Event.BtnGuardarProcedimientosClick);
        base.Control.BtnGuardarAccionesInmediatas().off('click');
        base.Control.BtnGuardarAccionesInmediatas().on('click', base.Event.BtnGuardarAccionesInmediatasClick);
        base.Control.BtnGuardarOportunidadesMejora().off('click');
        base.Control.BtnGuardarOportunidadesMejora().on('click', base.Event.BtnGuardarOportunidadesMejoraClick);
        base.Control.BtnGuardarHallazgo().off('click');
        base.Control.BtnGuardarHallazgo().on('click', base.Event.BtnGuardarHallazgoClick);
        
        base.Control.BtnCancelarCumplimiento().off('click');
        base.Control.BtnCancelarCumplimiento().on('click', base.Event.AsignarValoresCumplimiento);
        base.Control.BtnCancelarObservadorInterno().off('click');
        base.Control.BtnCancelarObservadorInterno().on('click', base.Event.AsignarValoresObservadoresInternos);
        base.Control.BtnCancelarObservadorExterno().off('click');
        base.Control.BtnCancelarObservadorExterno().on('click', base.Event.AsignarValoresObservadoresExternos);
        base.Control.BtnCancelarAccionesInmediatas().off('click');
        base.Control.BtnCancelarAccionesInmediatas().on('click', base.Event.AsignarValoresAccionesInmediatas);
        base.Control.BtnCancelarOportunidadesMejora().off('click');
        base.Control.BtnCancelarOportunidadesMejora().on('click', base.Event.AsignarValoresOportunidadesMejora);
        base.Control.BtnCancelarProcedimientos().off('click');
        base.Control.BtnCancelarProcedimientos().on('click', base.Event.AsignarValoresProcedimientos);
        base.Control.BtnCancelarHallazgo().off('click');
        base.Control.BtnCancelarHallazgo().on('click', base.Event.BtnAsignarValoresHallazgo);
        base.Control.BtnCancelarRetroalimentacion().off('click');
        base.Control.BtnCancelarRetroalimentacion().on('click', base.Event.AsignarValoresRetroalimentacion);

        base.Control.BtnAnular().off('click');
        base.Control.BtnAnular().on('click', base.Event.AnularObservacionPlaneada);

        base.Function.CrearGridColaborador();
        base.Function.CrearGridSupervisor();
        base.Function.CrearGridObservadorInterno();
        base.Function.CrearGridObservadorExterno();
        base.Function.CrearGridPasosProcedimiento();
        base.Function.CrearGridHallazgo();
        base.Function.CrearGridAcciones();
        base.Function.CrearGridCausaRaiz();
        base.Function.CrearGridAccionInmediata();
        base.Function.CrearGridOportunidadMejora();
        base.Function.CrearGridAnexoApendice();
        base.Function.CrearGridAnexoFoto();        
        
        
        base.Control.TxtTotalPasosCumplen().off('keyup');
        base.Control.TxtTotalPasosCumplen().on('keyup', base.Event.CalcularCumplimiento);
        base.Control.TxtTotalPasosNoCumplen().off('keyup');
        base.Control.TxtTotalPasosNoCumplen().on('keyup', base.Event.CalcularCumplimiento);
        base.Control.TxtTotalCumplimiento().off('keyup');
        base.Control.TxtTotalCumplimiento().on('keyup', base.Event.CalcularTotalCumplimiento);

        //new Pe.GMD.UI.Web.Components.Calendar({
        //    inputFrom: base.Control.DtpFechaEjecucion(),
        //    minDateFrom: new Date(1900, 1, 1)
        //});
        if (base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada == null) {
            base.Control.DtpFechaEjecucion().datepicker({
                dateFormat: 'dd/mm/yy',
                maxDate: '+0D',
                minDate: '-4D'
            });
        }
        else {
            var fecha = base.Control.FormularioModelo.ObservacionPlaneada.FechaCreacionString.split('/');
            var dia = fecha[0];
            var mes = fecha[1];
            var anio = fecha[2];
            var diaMinimo = dia - 4;

            base.Control.DtpFechaEjecucion().datepicker({
                dateFormat: 'dd/mm/yy',
                maxDate: new Date(mes + '/' + dia + '/' + anio),
                minDate: new Date(mes + '/' + diaMinimo + '/' + anio)
            });
        }

        base.Control.ValidadorGenerales = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmGenerales(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos
        });

        base.Control.ValidadorObservadorInterno = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmObservadorInterno(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraObservadorInterno()
        });

        base.Control.ValidadorObservadorExterno = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmObservadorExterno(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos
        });

        base.Control.ValidadorPasosProcedimiento = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmProcedimientos(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            //validationsExtra: base.Function.ValidacionExtraPasosProcedimiento()
        });

        base.Control.ValidadorHallazgo = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmHallazgos(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
        });

        $('#cartTabsOPT').on('shown.bs.tab', function (e) {
            var target = $(e.target).attr("href");
            if (target == "#tabGenerales") {
                base.Control.FormularioModelo.ObservacionPlaneada.CodigoPasoProcedimiento = null;
                base.Control.FormularioModelo.ObservacionPlaneada.CodigoHallazgo = null;
            }
            if (target == "#tabTrabajadores") {
                base.Control.FormularioModelo.ObservacionPlaneada.CodigoPasoProcedimiento = null;
                base.Control.FormularioModelo.ObservacionPlaneada.CodigoHallazgo = null;                
                if (base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada != null) {
                    base.Event.BtnBuscarColaboradorOpt();
                    base.Event.BtnBuscarSupervisorOpt();
                    $('#btnAgregarColaborador').removeClass('hidden');
                    $('#divtabTrabajadores').removeClass('hidden');
                    $('#btnAgregarSupervisor').removeClass('hidden');
                    $('#divtabSupervisores').removeClass('hidden');
                }
            }
            if (target == "#tabObservadores") {
                base.Control.FormularioModelo.ObservacionPlaneada.CodigoPasoProcedimiento = null;
                base.Control.FormularioModelo.ObservacionPlaneada.CodigoHallazgo = null;                
                if (base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada != null) {
                    base.Event.BtnBuscarObservadorInternoOpt();
                    base.Event.BtnBuscarObservadorExterno();
                    $('#divtabObservadoresInternos').removeClass('hidden');
                    $('#divtabObservadoresExternos').removeClass('hidden');
                }
            }
            if (target == "#tabProcedimientos") {
                base.Control.FormularioModelo.ObservacionPlaneada.CodigoHallazgo = null;                
                if (base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada != null) {
                    base.Event.BtnBuscarPasosProcedimiento();
                    $('#divtabProcedimientos').removeClass('hidden');
                    $('#divtabCumplimiento').removeClass('hidden');
                }
            }
            if (target == "#tabHallazgos") {
                base.Control.FormularioModelo.ObservacionPlaneada.CodigoHallazgo = null;
                if (base.Control.FormularioModelo.ObservacionPlaneada.CodigoPasoProcedimiento == null) {
                    $('#blContienePaso').hide();
                }
                else {
                    $('#blContienePaso').show();
                    base.Control.HdnCodigoHallazgoAccion().val('');
                    base.Control.TxtDescripcionCortaHallazgoAccion().val('');
                    base.Control.TxtDescripcionLargaHallazgoAccion().val('');
                    base.Control.TxtNivelRiesgoAccion().val('');
                }
                base.Event.BtnBuscarHallazgoClick();
            }
            if (target == "#tabAcciones") {
                base.Control.FormularioModelo.ObservacionPlaneada.CodigoPasoProcedimiento = null;
                if (base.Control.FormularioModelo.ObservacionPlaneada.CodigoHallazgo == null) {
                    $('#blContieneAccion').hide();
                }
                else {
                    $('#blContieneAccion').show();
                }
                base.Event.BtnBuscarAccionesClick();
            }
            if (target == "#tabCausas") {
                base.Control.FormularioModelo.ObservacionPlaneada.CodigoPasoProcedimiento = null;
                base.Control.FormularioModelo.ObservacionPlaneada.CodigoHallazgo = null;                
                if (base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada != null) {
                    base.Event.BtnBuscarCausasRaices();
                    $('#btnAgregarCausas').removeClass('hidden');
                    $('#divtabCausas').removeClass('hidden');
                }
            }
            if (target == "#tabRetroalimentacion") {
                base.Control.FormularioModelo.ObservacionPlaneada.CodigoPasoProcedimiento = null;
                base.Control.FormularioModelo.ObservacionPlaneada.CodigoHallazgo = null;
                if (base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada != null) {
                    $('#divtabRetroalimentacion').removeClass('hidden');
                }
            }
            if (target == "#tabAccionesInmediatas") {
                base.Control.FormularioModelo.ObservacionPlaneada.CodigoPasoProcedimiento = null;
                base.Control.FormularioModelo.ObservacionPlaneada.CodigoHallazgo = null;                
                if (base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada != null) {
                    base.Event.BtnBuscarAccionInmediata();
                    base.Event.BtnBuscarOportunidadMejora();
                    $('#divtabAccionesInmediatas').removeClass('hidden');
                    $('#divtabOportunidadesMejora').removeClass('hidden');
                }
            }
            if (target == "#tabAnexos") {
                base.Control.FormularioModelo.ObservacionPlaneada.CodigoPasoProcedimiento = null;
                base.Control.FormularioModelo.ObservacionPlaneada.CodigoHallazgo = null;                
                if (base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada != null) {
                    base.Event.BtnBuscarAnexoArchivoClick();
                    $('#btnAgregarAnexo').removeClass('hidden');
                    $('#divtabAnexos').removeClass('hidden');
                }
            }
            if (target == "#tabFotos") {
                base.Control.FormularioModelo.ObservacionPlaneada.CodigoPasoProcedimiento = null;
                base.Control.FormularioModelo.ObservacionPlaneada.CodigoHallazgo = null;                
                if (base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada != null) {
                    base.Event.BtnBuscarAnexoFotoClick();
                    $('#btnAgregarFoto').removeClass('hidden');
                    $('#divtabFotos').removeClass('hidden');
                }
            }
        });

        base.Control.TxtNombresApellidos().on('keypress', Pe.GMD.UI.Web.Components.Util.ValidaCadenaSoloTexto);
        base.Control.TxtNombresApellidos().bind('paste', base.Event.ValidarCopiarSoloTexto);
    };

    base.Control = {
        HdnCodigoOportunidadMejora: function () { return $('#hdnCodigoOportunidadMejora'); },
        HdnCodigoAccionInmediata: function () { return $('#hdnCodigoAccionInmediata'); },
        HdnCodigoOportunidadMejoraTabAI: function () { return $('#hdnCodigoOportunidadMejoraTabAI'); },

        BtnAnular: function () { return $('#btnAnular'); },
        BtnAgregarColaborador: function () { return $('#btnAgregarColaborador'); },
        BtnAgregarSupervisor: function () { return $('#btnAgregarSupervisor'); },
        BtnAgregarObservadorInterno: function () { return $('#btnAgregarObservadorInterno'); },
        BtnAgregarAnexo: function () { return $('#btnAgregarAnexo'); },
        BtnAgregarFoto: function () { return $('#btnAgregarFoto'); },
        BtnRegresarBandejaOPT: function () { return $('#btnRegresarBandejaOPT'); },
        BtnGuardarGenerales: function () { return $('#btnGuardarGenerales'); },
        BtnGuardarObservadorExterno: function () { return $('#btnGuardarObservadorExterno'); },
        BtnGuardarObservadorInterno: function () { return $('#btnGuardarObservadorInterno'); },
        BtnGuardarCumplimiento: function () { return $('#btnGuardarCumplimiento'); },
        BtnGuardarRetroalimentacion: function () { return $('#btnGuardarRetroalimentacion'); },
        BtnGuardarProcedimientos: function () { return $('#btnGuardarProcedimientos'); },
        BtnGuardarAccionesInmediatas: function () { return $('#btnGuardarAccionesInmediatas'); },
        BtnGuardarOportunidadesMejora: function () { return $('#btnGuardarOportunidadesMejora'); },
        BtnGuardarHallazgo: function () { return $('#btnGuardarHallazgo'); },
        BtnAgregarCausas: function () { return $('#btnAgregarCausas'); },
        BtnAgregarAccion: function () { return $('#btnAgregarAccion'); },

        BtnCancelarCumplimiento: function () { return $('#btnCancelarCumplimiento'); },
        BtnCancelarObservadorInterno: function () { return $('#btnCancelarObservadorInterno'); },
        BtnCancelarObservadorExterno: function () { return $('#btnCancelarObservadorExterno'); },
        BtnCancelarAccionesInmediatas: function () { return $('#btnCancelarAccionesInmediatas'); },
        BtnCancelarOportunidadesMejora: function () { return $('#btnCancelarOportunidadesMejora'); },
        BtnCancelarProcedimientos: function () { return $('#btnCancelarProcedimientos'); },
        BtnCancelarHallazgo: function () { return $('#btnCancelarHallazgo'); },
        BtnCancelarRetroalimentacion: function () { return $('#btnCancelarRetroalimentacion'); },

        DtpFechaEjecucion: function () { return $('#dtpFechaEjecucion'); },

        DlgFormularioColaborador: null,
        DlgFormularioColaboradorInterno: null,
        DlgFormularioSupervisor: null,
        DlgFormularioAnexoApendice: null,
        DlgFormularioAnexoFoto: null,
        DlgFormularioCausasRaices: null,
        DlgFormularioIngresoAccion: null,
        DlgFormularioVistaPreviaFoto: null,

        FrmGenerales: function () { return $('#frmGenerales'); },
        FrmObservadorInterno: function () { return $('#frmObservadorInterno'); },
        FrmObservadorExterno: function () { return $('#frmObservadorExterno'); },
        FrmHallazgos: function () { return $('#frmHallazgos'); },
        FrmProcedimientos: function () { return $('#frmProcedimientos'); },
        FormularioModeloColaborador: null,

        HdnCodigoPaso: function () { return $('#hdnCodigoPaso'); },
        HdnCodigoHallazgo: function () { return $('#hdnCodigoHallazgo'); },
        HdnCodigoColaboradorInterno: function () { return $('#hdnCodigoColaboradorInterno'); },

        Mensaje: new Pe.GMD.UI.Web.Components.Message(),

        SlcProyecto: function () { return $('#slcProyecto'); },
        SlcDepartamento: function () { return $('#slcDepartamento'); },
        SlcArea: function () { return $('#slcArea'); },
        SlcProcedimiento: function () { return $('#slcProcedimiento'); },
        SlcVerificacion: function () { return $('#slcVerificacion'); },
        SlcNotificacion: function () { return $('#slcNotificacion'); },
        SlcTipoDocumento: function () { return $('#slcTipoDocumento'); },
        SlcTipoObservadores: function () { return $('#slcTipoObservadores'); },
        SlcCompromiso: function () { return $('#slcCompromiso'); },
        SlcRetroalimentacion: function () { return $('#slcRetroalimentacion'); },
        SlcFelicitacion: function () { return $('#slcFelicitacion'); },

        HddCodigoEmpresa: function () { return $('#hddCodigoEmpresa'); },
        HddCodigoPais: function () { return $('#hddCodigoPais'); },
        TxtEmpresa: function () { return $('#txtEmpresa'); },
        TxtPais: function () { return $('#txtPais'); },
        TxtLugarExacto: function () { return $('#txtLugarExacto'); },
        TxtTituloRegistro: function () { return $('#txtTituloRegistro'); },
        TxtNumeroObservacionPlaneada: function () { return $('#txtNumeroObservacionPlaneada'); },
        TipoColaborador: null,
        TipoOportunidadAccion: null,
        TxtNombresApellidos: function () { return $('#txtNombresApellidos'); },
        TxtNumeroDocumento: function () { return $('#txtNumeroDocumento'); },
        TxtCargoReferencial: function () { return $('#txtCargoReferencial'); },
        TxtColaboradorInterno: function () { return $('#txtColaboradorInterno'); },
        TxtDescripcionFelicitacion: function () { return $('#txtDescripcionFelicitacion'); },
        TxtComentarioTrabajador: function () { return $('#txtComentarioTrabajador'); },
        TxtComentarioSupervisor: function () { return $('#txtComentarioSupervisor'); },
        TxtDescripcionPaso: function () { return $('#txtDescripcionPaso'); },
        TxtDescripcionAccionInmediata: function () { return $('#txtDescripcionAccionInmediata'); },
        TxtDescripcionMejora: function () { return $('#txtDescripcionMejora'); },

        TxtDescripcionPasoHallazgo: function () { return $('#txtDescripcionPasoHallazgo'); },
        TxtDescripcionCortaHallazgo: function () { return $('#txtDescripcionCortaHallazgo'); },
        TxtDescripcionLargaHallazgo: function () { return $('#txtDescripcionLargaHallazgo'); },
        SlcNivelRiesgo: function () { return $('#slcNivelRiesgo'); },

        TxtTotalPasosCumplen: function () { return $('#txtTotalPasosCumplen'); },
        TxtTotalPasosNoCumplen: function () { return $('#txtTotalPasosNoCumplen'); },
        TxtTotalPasosNoAplica: function () { return $('#txtTotalPasosNoAplica'); },
        TxtTotalCumplimiento: function () { return $('#txtTotalCumplimiento'); },

        HdnCodigoHallazgoAccion: function () { return $('#hdnCodigoHallazgoAccion'); },
        TxtDescripcionCortaHallazgoAccion: function () { return $('#txtDescripcionCortaHallazgoAccion'); },
        TxtDescripcionLargaHallazgoAccion: function () { return $('#txtDescripcionLargaHallazgoAccion'); },
        TxtNivelRiesgoAccion: function () { return $('#txtNivelRiesgoAccion'); },
    };

    base.Event = {        
        BtnGridEditAccionInmediataClick: function (row, data) {
            var filtro = {
                CodigoObservacionPlaneada: base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada,
                CodigoOportunidadMejora: data.CodigoOportunidadMejora,
                TipoOportunidadAccion: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.TipoAccionInmediata
            };            
            base.Control.HdnCodigoAccionInmediata().val(data.CodigoOportunidadMejora);
            base.Ajax.AjaxEditAccionInmediata.data = filtro;
            base.Ajax.AjaxEditAccionInmediata.submit();
        },
        BtnGridEditOportunidadMejoraClick: function (row, data) {
            var filtro = {
                CodigoObservacionPlaneada: base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada,
                CodigoOportunidadMejora: data.CodigoOportunidadMejora,
                TipoOportunidadAccion: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.TipoOportunidadMejora
            };
            base.Control.HdnCodigoAccionInmediata().val(data.CodigoOportunidadMejora);
            base.Ajax.AjaxEditMejora.data = filtro;
            base.Ajax.AjaxEditMejora.submit();
        },

        BtnGridEditProcedimientoClick: function (row, data) {
            var filtro = {
                CodigoOportunidadMejora: data.CodigoOportunidadMejora,
                CodigoObservacionPlaneada: base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada,
                TipoOportunidadAccion: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.PasosProcedimiento
            };
            base.Control.HdnCodigoOportunidadMejora().val(data.CodigoOportunidadMejora);
            base.Ajax.AjaxEditProcedimiento.data = filtro;
            base.Ajax.AjaxEditProcedimiento.submit();
        },
        CalcularCumplimiento: function () {
            var cumple = base.Control.TxtTotalPasosCumplen().val() == '' ? 0 : parseInt(base.Control.TxtTotalPasosCumplen().val());
            var noCumple = base.Control.TxtTotalPasosNoCumplen().val() == '' ? 0 : parseInt(base.Control.TxtTotalPasosNoCumplen().val());
            base.Control.TxtTotalCumplimiento().val((cumple / (cumple + noCumple))*100);
        },
        CalcularTotalCumplimiento: function () {
            base.Control.TxtTotalPasosCumplen().val('');
            base.Control.TxtTotalPasosNoCumplen().val('');
        },
        BtnBuscarAccionesClick: function () {            
            if (base.Control.FormularioModelo.ObservacionPlaneada.CodigoIntegradorTipoRegistro != null) {
                base.Control.GrdResultadoAcciones.Load({
                    CodigoIntegradorTipoRegistro: base.Control.FormularioModelo.ObservacionPlaneada.CodigoIntegradorTipoRegistro,
                    CodigoTipoOcurrenciaEntidad: base.Control.FormularioModelo.ObservacionPlaneada.CodigoHallazgo
                });
            }
        },
        BtnBuscarAnexoArchivoClick: function () {
            var filtro = {
                CodigoTipoAnexo: Pe.ElectroPeru.SGI.Presentacion.Core.Constante.DatosConstantes.ParametrosGenerales.CodigoTipoAnexoAdjunto,
                CodigoIntegradorTipoRegistro: base.Control.FormularioModelo.ObservacionPlaneada.CodigoIntegradorTipoRegistro,
            };
            base.Control.GrdResultadoAnexoApendice.Load(filtro);
        },
        BtnBuscarAnexoFotoClick: function () {
            var filtro = {
                CodigoTipoAnexo: Pe.ElectroPeru.SGI.Presentacion.Core.Constante.DatosConstantes.ParametrosGenerales.CodigoTipoAnexoFoto,
                CodigoIntegradorTipoRegistro: base.Control.FormularioModelo.ObservacionPlaneada.CodigoIntegradorTipoRegistro,
            };
            base.Control.GrdResultadoAnexoFoto.Load(filtro);
        },
        BtnBuscarColaboradorOpt: function () {
            if (base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada != null) {
                base.Control.GrdResultadoColaborador.Load({
                    CodigoObservacionPlaneada: base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada,
                    TipoColaborador: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.TipoColaboradorTrabajador
                });
            }
        },
        BtnBuscarSupervisorOpt: function () {
            if (base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada != null) {
                base.Control.GrdResultadoSupervisor.Load({
                    CodigoObservacionPlaneada: base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada,
                    TipoColaborador: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.TipoColaboradorSupervisor
                });
            }
        },
        BtnBuscarObservadorInternoOpt: function () {
            if (base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada != null) {
                base.Control.GrdResultadoObservadorInterno.Load({
                    CodigoObservacionPlaneada: base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada,
                    TipoColaborador: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.TipoColaboradorObservadorInterno
                });
            }
        },
        BtnBuscarObservadorExterno: function () {
            if (base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada != null) {
                base.Control.GrdResultadoObservadorExterno.Load({
                    CodigoObservacionPlaneada: base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada
                });
            }
        },
        BtnBuscarPasosProcedimiento: function () {
            if (base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada != null) {
                base.Control.GrdResultadoProcedimientos.Load({
                    CodigoObservacionPlaneada: base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada,
                    //CodigoOportunidadMejora: base.Control.FormularioModelo.ObservacionPlaneada.CodigoOportunidadMejora,
                    TipoOportunidadAccion: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.PasosProcedimiento
                });
            }            
        },
        BtnBuscarCausasRaices: function () {
            if (base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada != null) {
                base.Control.GrdResultadoCausas.Load({
                    CodigoTipoCausaRaizEntidad: base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada,
                });
            }
        },
        BtnBuscarAccionInmediata: function(){
            if (base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada != null) {
                base.Control.GrdResultadoAccionInmediata.Load({
                    CodigoObservacionPlaneada: base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada,
                    TipoOportunidadAccion: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.TipoAccionInmediata
                });
            }
        },
        BtnBuscarOportunidadMejora: function () {
            if (base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada != null) {
                base.Control.GrdResultadoOportunidadMejora.Load({
                    CodigoObservacionPlaneada: base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada,
                    TipoOportunidadAccion: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.TipoOportunidadMejora
                });
            }
        },
        BtnBuscarHallazgoClick: function () {
            if (base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada != null) {
                var filtro = {                    
                    CodigoIntegradorTipoRegistro: base.Control.FormularioModelo.ObservacionPlaneada.CodigoIntegradorTipoRegistro,
                    CodigoPasoProcedimiento: base.Control.FormularioModelo.ObservacionPlaneada.CodigoPasoProcedimiento
                };
                base.Control.GrdResultadoHallazgo.Load(filtro);
            }
        },
        BtnAsignarValoresHallazgo: function (value) {
            base.Control.HdnCodigoHallazgo().val(value != '' ? value.CodigoHallazgo : '');
            base.Control.TxtDescripcionCortaHallazgo().val(value != '' ? value.DescripcionCorta : '');
            base.Control.TxtDescripcionLargaHallazgo().val(value != '' ? value.DescripcionLarga : '');
            base.Control.SlcNivelRiesgo().val(value != '' ? value.CodigoNivelRiesgo : '');
        },
        SlcProyectoChange: function () {            
            base.Control.SlcDepartamento().empty();
            base.Control.SlcDepartamento().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));

            base.Control.SlcArea().empty();
            base.Control.SlcArea().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));

            base.Control.SlcProcedimiento().empty();
            base.Control.SlcProcedimiento().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));

            if (base.Control.SlcProyecto().val() != '') {
                base.Ajax.AjaxBuscarDepartamento.data = {
                    CodigoProyecto: base.Control.SlcProyecto().val()
                };

                base.Ajax.AjaxBuscarDepartamento.submit();

                base.Ajax.AjaxBuscarProyecto.data = {
                    CodigoProyecto: base.Control.SlcProyecto().val()
                };

                base.Ajax.AjaxBuscarProyecto.submit();
            }
            else {
                base.Control.HddCodigoEmpresa().val('');
                base.Control.TxtEmpresa().val('');
                base.Control.HddCodigoPais().val('');
                base.Control.TxtPais().val('');
            }
        },
        SlcDepartamentoChange: function () {
            base.Control.SlcArea().empty();
            base.Control.SlcArea().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
          
            base.Control.SlcProcedimiento().empty();
            base.Control.SlcProcedimiento().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));

            if (base.Control.SlcDepartamento().val() != '') {
                base.Ajax.AjaxBuscarArea.data = {
                    CodigoDepartamento: base.Control.SlcDepartamento().val()
                };
                base.Ajax.AjaxBuscarArea.submit();
            }
        },
        SlcAreaChange: function () {
            base.Control.SlcProcedimiento().empty();
            base.Control.SlcProcedimiento().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));

            if (base.Control.SlcArea().val() != '') {
                base.Ajax.AjaxBuscarProcedimiento.data = {
                    CodigoArea: base.Control.SlcArea().val()
                };
                base.Ajax.AjaxBuscarProcedimiento.submit();
            }
        },
        BtnGuardarGeneralesClick: function () {
            if (base.Control.ValidadorGenerales.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarObservacionPlaneada.data = {
                            CodigoObservacionPlaneada: base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada,
                            IndicadorProcedimientoSig: base.Control.SlcVerificacion().val(),
                            CodigoProyecto: base.Control.SlcProyecto().val(),
                            CodigoEmpresa: base.Control.HddCodigoEmpresa().val(),
                            CodigoPais: base.Control.HddCodigoPais().val(),
                            DescripcionEmpresa: base.Control.TxtEmpresa().val(),
                            DescripcionPais: base.Control.TxtPais().val(),
                            CodigoDepartamento: base.Control.SlcDepartamento().val(),
                            CodigoArea: base.Control.SlcArea().val(),
                            CodigoProcedimiento: base.Control.SlcProcedimiento().val(),
                            LugarExacto: base.Control.TxtLugarExacto().val(),
                            TituloRegistro: base.Control.TxtTituloRegistro().val(),
                            FechaEjecucion: base.Control.DtpFechaEjecucion().val(),
                            CodigoNotificacion: base.Control.SlcNotificacion().val()
                        };
                        base.Ajax.AjaxRegistrarObservacionPlaneada.submit();
                    }
                });
            } else {
                $("#frmGeneralesSummaryErrorMessage").empty();
                $("#frmGeneralesSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnGuardarObservadorInternoClick: function () {
            if (base.Control.ValidadorObservadorInterno.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarObservacionPlaneadaColaborador.data = {
                            CodigoObservacionPlaneada: base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada,
                            CodigoColaborador: base.Control.FormularioModeloColaborador.CodigoColaborador,
                            Nombres: base.Control.FormularioModeloColaborador.Nombres,
                            ApellidoPaterno: base.Control.FormularioModeloColaborador.ApellidoPaterno,
                            ApellidoMaterno: base.Control.FormularioModeloColaborador.ApellidoMaterno,
                            CodigoTipoDocumento: base.Control.FormularioModeloColaborador.CodigoTipoDocumento,
                            NumeroDocumento: base.Control.FormularioModeloColaborador.NumeroDocumento,
                            CodigoEmpresa: base.Control.FormularioModeloColaborador.CodigoEmpresa,
                            CodigoProyecto: base.Control.FormularioModeloColaborador.CodigoProyecto,
                            CodigoPuestoTrabajo: base.Control.FormularioModeloColaborador.CodigoPuestoTrabajo,
                            CodigoArea: base.Control.FormularioModeloColaborador.CodigoArea,
                            TipoColaborador: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.TipoColaboradorObservadorInterno,
                            TipoObservador: base.Control.SlcTipoObservadores().val(),
                            ExperienciaPuestoAnios: base.Control.FormularioModeloColaborador.ExperienciaPuestoAnios,
                            ExperienciaPuestoMeses: base.Control.FormularioModeloColaborador.ExperienciaPuestoMeses,
                            ExperienciaNegocioMeses: base.Control.FormularioModeloColaborador.ExperienciaNegocioMeses,
                            ExperienciaNegocioAnios: base.Control.FormularioModeloColaborador.ExperienciaNegocioAnios,
                            TiempoProyectoAnios: base.Control.FormularioModeloColaborador.TiempoProyectoAnios,
                            TiempoProyectoMeses: base.Control.FormularioModeloColaborador.TiempoProyectoMeses,
                        };
                        base.Control.FormularioModeloColaborador = null;
                        base.Control.TipoColaborador = Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.TipoColaboradorObservadorInterno;
                        base.Ajax.AjaxRegistrarObservacionPlaneadaColaborador.submit();
                    }
                });
            } else {
                $("#frmObservadorInternoSummaryErrorMessage").empty();
                $("#frmObservadorInternoSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnGuardarObservadorExternoClick: function () {
            if (base.Control.ValidadorObservadorExterno.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarColaboradorExterno.data = {
                            CodigoObservacionPlaneada: base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada,
                            NombresApellidos: base.Control.TxtNombresApellidos().val(),
                            CodigoTipoDocumento: base.Control.SlcTipoDocumento().val(),
                            NumeroDocumento: base.Control.TxtNumeroDocumento().val(),
                            CargoReferencial: base.Control.TxtCargoReferencial().val()
                        }
                        base.Ajax.AjaxRegistrarColaboradorExterno.submit();
                    }
                });
            } else {
                $("#frmObservadorExternoSummaryErrorMessage").empty();
                $("#frmObservadorExternoSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnGuardarCumplimientoClick: function () {
            base.Control.Mensaje.Confirmation({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                onAccept: function () {
                    base.Ajax.AjaxRegistrarCumplimiento.data = {
                        CodigoObservacionPlaneada: base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada,
                        TotalPasosCumplen: base.Control.TxtTotalPasosCumplen().val(),
                        TotalPasosNoCumplen: base.Control.TxtTotalPasosNoCumplen().val(),
                        TotalPasosNoAplican: base.Control.TxtTotalPasosNoAplica().val(),
                        TotalCumplimiento: base.Control.TxtTotalCumplimiento().val(),
                    }
                    base.Ajax.AjaxRegistrarCumplimiento.submit();
                }
            });
        },
        BtnGuardarRetroalimentacionClick: function () {
            base.Control.Mensaje.Confirmation({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                onAccept: function () {
                    base.Ajax.AjaxRegistrarRetroalimentacion.data = {
                        CodigoObservacionPlaneada: base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada,
                        FelicitacionProgramador: base.Control.SlcFelicitacion().val(),
                        DescripcionFelicitacion: base.Control.TxtDescripcionFelicitacion().val(),
                        RetroalimentacionOperacion: base.Control.SlcRetroalimentacion().val(),
                        CompromisoMejora: base.Control.SlcCompromiso().val(),
                        ComentarioTrabajador: base.Control.TxtComentarioTrabajador().val(),
                        ComentarioSupervisor: base.Control.TxtComentarioSupervisor().val(),
                    }
                    base.Ajax.AjaxRegistrarRetroalimentacion.submit();
                }
            });
        },
        BtnGuardarProcedimientosClick: function () { 
            if (base.Control.ValidadorPasosProcedimiento.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarOportunidadMejora.data = {
                            CodigoObservacionPlaneada: base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada,
                            CodigoOportunidadMejora: base.Control.HdnCodigoOportunidadMejora().val(),
                            Descripcion: base.Control.TxtDescripcionPaso().val(),
                            TipoOportunidadAccion: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.PasosProcedimiento
                        };
                        base.Control.TipoOportunidadAccion = Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.PasosProcedimiento;
                        base.Ajax.AjaxRegistrarOportunidadMejora.submit();
                    }
                });
            } else {
                $("#frmProcedimientosSummaryErrorMessage").empty();
                $("#frmProcedimientosSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnGuardarAccionesInmediatasClick: function () {
            if ($.trim(base.Control.TxtDescripcionAccionInmediata().val())) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarOportunidadMejora.data = {
                            CodigoObservacionPlaneada: base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada,
                            CodigoOportunidadMejora: base.Control.HdnCodigoAccionInmediata().val(),
                            Descripcion: base.Control.TxtDescripcionAccionInmediata().val(),
                            TipoOportunidadAccion: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.TipoAccionInmediata
                        };
                        base.Control.TipoOportunidadAccion = Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.TipoAccionInmediata;
                        base.Ajax.AjaxRegistrarOportunidadMejora.submit();
                    }
                });
            }
        },
        BtnGuardarOportunidadesMejoraClick: function () {
            if ($.trim(base.Control.TxtDescripcionMejora().val())) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarOportunidadMejora.data = {
                            CodigoObservacionPlaneada: base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada,
                            CodigoOportunidadMejora: base.Control.HdnCodigoAccionInmediata().val(),
                            Descripcion: base.Control.TxtDescripcionMejora().val(),
                            TipoOportunidadAccion: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.TipoOportunidadMejora
                        };
                        base.Control.TipoOportunidadAccion = Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.TipoOportunidadMejora;
                        base.Ajax.AjaxRegistrarOportunidadMejora.submit();
                    }
                });
            }
        },
        BtnGuardarHallazgoClick: function () {
            if (base.Control.ValidadorHallazgo.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarHallazgo.data = {
                            CodigoHallazgo: base.Control.HdnCodigoHallazgo().val(),
                            CodigoIntegradorTipoRegistro: base.Control.FormularioModelo.ObservacionPlaneada.CodigoIntegradorTipoRegistro,                            
                            CodigoPasoProcedimiento: base.Control.FormularioModelo.ObservacionPlaneada.CodigoPasoProcedimiento,
                            DescripcionCorta: base.Control.TxtDescripcionCortaHallazgo().val(),
                            DescripcionLarga: base.Control.TxtDescripcionLargaHallazgo().val(),
                            CodigoNivelRiesgo: base.Control.SlcNivelRiesgo().val(),                            
                        };
                        base.Ajax.AjaxGrabarHallazgo.submit();
                    }
                });
            } else {
                $("#frmHallazgosSummaryErrorMessage").empty();
                $("#frmHallazgosSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnRegresarBandejaOPTClick: function () {
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Actions.BandejaObservacion, {});
        },
        BtnAgregarAnexoClick: function () {
            if (base.Control.FormularioModelo.ObservacionPlaneada.CodigoIntegradorTipoRegistro != null) {
                base.Control.DlgFormularioAnexoApendice.Show({
                    CodigoIntegradorTipoRegistro: base.Control.FormularioModelo.ObservacionPlaneada.CodigoIntegradorTipoRegistro,
                    CodigoTipoAnexoIntegrador: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.TiposAnexosObservacionPlaneada,
                    IndicadorLectura: base.Control.FormularioModelo.ObservacionPlaneada.IndicadorLectura
                });
            }
        },
        BtnAgregarFotoClick: function () {
            if (base.Control.FormularioModelo.ObservacionPlaneada.CodigoIntegradorTipoRegistro != null) {
                base.Control.DlgFormularioAnexoFoto.Show({
                    CodigoIntegradorTipoRegistro: base.Control.FormularioModelo.ObservacionPlaneada.CodigoIntegradorTipoRegistro,
                    IndicadorLectura: base.Control.FormularioModelo.ObservacionPlaneada.IndicadorLectura
                });
            }
        },
        BtnAgregarCausasClick: function () {
            base.Control.DlgFormularioCausasRaices.Show({
                CodigoTipoCausaRaizEntidad: base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada,
                CodigoTipoCausaRaizParametro: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.ObservacionPlamneadaTarea,
                IndicadorLectura: base.Control.FormularioModelo.ObservacionPlaneada.IndicadorLectura
            });
        },
        BtnAgregarAccionClick: function () {
            base.Control.DlgFormularioIngresoAccion.Show({
                TituloFormulario: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaFormularioIngresoAcciones,
                IndicadorLectura: base.Control.FormularioModelo.ObservacionPlaneada.IndicadorLectura,
                CodigoIntegradorTipoRegistro: base.Control.FormularioModelo.ObservacionPlaneada.CodigoIntegradorTipoRegistro,
                CodigoTipoRegistroParametro: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.ObservacionPlamneadaTarea,
                CodigoEstadoAccion: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Abierto,
                NumeroRecord: base.Control.TxtNumeroObservacionPlaneada().val(),
                CodigoTipoOcurrenciaParametro: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.TipoOcurrenciaAccion.Hallazgo,
                CodigoTipoOcurrenciaEntidad: base.Control.FormularioModelo.ObservacionPlaneada.CodigoHallazgo,
            });
        },
        BtnAgregarColaboradorClick: function () {            
            base.Control.DlgFormularioColaborador.Show(false, [], { EstadoRegistro: '1'});
        },
        BtnAgregarSupervisorClick: function () {
            base.Control.DlgFormularioSupervisor.Show(false, [], { EstadoRegistro: '1' });
        },
        BtnAgregarObservadorInternoClick: function () {
            base.Control.DlgFormularioColaboradorInterno.Show(false, [], { EstadoRegistro: '1' });
        },
        BuscarColaboradorSuccess: function (resultado) {
            if (resultado.length > 0) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarObservacionPlaneadaColaborador.data = {
                            CodigoObservacionPlaneada: base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada,
                            CodigoColaborador: resultado[0].CodigoColaborador,
                            Nombres: resultado[0].Nombres,
                            ApellidoPaterno: resultado[0].ApellidoPaterno,
                            ApellidoMaterno: resultado[0].ApellidoMaterno,
                            CodigoTipoDocumento: resultado[0].CodigoTipoDocumento,
                            NumeroDocumento: resultado[0].NumeroDocumento,
                            CodigoEmpresa: resultado[0].CodigoEmpresa,
                            CodigoProyecto: resultado[0].CodigoProyecto,
                            CodigoPuestoTrabajo: resultado[0].CodigoPuestoTrabajo,
                            CodigoArea: resultado[0].CodigoArea,
                            TipoColaborador: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.TipoColaboradorTrabajador,
                            ExperienciaPuestoAnios: resultado[0].ExperienciaPuestoAnios,
                            ExperienciaPuestoMeses: resultado[0].ExperienciaPuestoMeses,
                            ExperienciaNegocioMeses: resultado[0].ExperienciaNegocioMeses,
                            ExperienciaNegocioAnios: resultado[0].ExperienciaNegocioAnios,
                            TiempoProyectoAnios: resultado[0].TiempoProyectoAnios,
                            TiempoProyectoMeses: resultado[0].TiempoProyectoMeses,
                        };
                        base.Control.TipoColaborador = Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.TipoColaboradorTrabajador;
                        base.Ajax.AjaxRegistrarObservacionPlaneadaColaborador.submit();
                    }
                });
            }
        },
        BuscarColaboradorInternoSuccess: function (resultado) {
            if (resultado.length > 0) {
                base.Control.FormularioModeloColaborador = resultado[0];
                base.Control.HdnCodigoColaboradorInterno().val(resultado[0].CodigoColaborador);
                base.Control.TxtColaboradorInterno().val(resultado[0].NombreCompletoColaborador);
            }
            else {
                base.Control.HdnCodigoColaboradorInterno().val('');
                base.Control.TxtColaboradorInterno().val('');
            }
        },
        BuscarSupervisorSuccess: function (resultado) {
            if (resultado.length > 0) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarObservacionPlaneadaColaborador.data = {
                            CodigoObservacionPlaneada: base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada,
                            CodigoColaborador: resultado[0].CodigoColaborador,
                            Nombres: resultado[0].Nombres,
                            ApellidoPaterno: resultado[0].ApellidoPaterno,
                            ApellidoMaterno: resultado[0].ApellidoMaterno,
                            CodigoTipoDocumento: resultado[0].CodigoTipoDocumento,
                            NumeroDocumento: resultado[0].NumeroDocumento,
                            CodigoEmpresa: resultado[0].CodigoEmpresa,
                            CodigoProyecto: resultado[0].CodigoProyecto,
                            CodigoPuestoTrabajo: resultado[0].CodigoPuestoTrabajo,
                            CodigoArea: resultado[0].CodigoArea,
                            TipoColaborador: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.TipoColaboradorSupervisor,
                            ExperienciaPuestoAnios: resultado[0].ExperienciaPuestoAnios,
                            ExperienciaPuestoMeses: resultado[0].ExperienciaPuestoMeses,
                            ExperienciaNegocioMeses: resultado[0].ExperienciaNegocioMeses,
                            ExperienciaNegocioAnios: resultado[0].ExperienciaNegocioAnios,
                            TiempoProyectoAnios: resultado[0].TiempoProyectoAnios,
                            TiempoProyectoMeses: resultado[0].TiempoProyectoMeses,
                        };
                        base.Control.TipoColaborador = Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.TipoColaboradorSupervisor;
                        base.Ajax.AjaxRegistrarObservacionPlaneadaColaborador.submit();
                    }
                });
            }
        },
        BtnGridAgregarHallazgosClick: function (row, data) {                        
            $('#cartTabsOPT a[href="#tabHallazgos"]').tab('show');            
            base.Control.HdnCodigoPaso().val(data.CodigoOportunidadMejora);
            base.Control.TxtDescripcionPasoHallazgo().val(data.Descripcion);
            base.Control.FormularioModelo.ObservacionPlaneada.CodigoPasoProcedimiento = data.CodigoOportunidadMejora;
        },
        BtnGridDeletePasosProcedimientoClick: function (rwo, data) {
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarPasosProcedimiento.data = data;
                    base.Ajax.AjaxEliminarPasosProcedimiento.submit();
                }
            });
        },
        BtnGridAgregarAccionesClick: function (row, data) {            
            $('#cartTabsOPT a[href="#tabAcciones"]').tab('show');
            base.Control.HdnCodigoHallazgoAccion().val(data.CodigoHallazgo);
            base.Control.TxtDescripcionCortaHallazgoAccion().val(data.DescripcionCorta);
            base.Control.TxtDescripcionLargaHallazgoAccion().val(data.DescripcionLarga);
            base.Control.TxtNivelRiesgoAccion().val(data.DescripcionNivelRiesgo);
            base.Control.FormularioModelo.ObservacionPlaneada.CodigoHallazgo = data.CodigoHallazgo;
        },
        BtnGridEditHallazgoClick: function(row, data){
            base.Event.BtnAsignarValoresHallazgo(data);
        },
        BtnGridEditHallazgoValidate: function (data, type, full) {
            if (base.Control.FormularioModelo.ObservacionPlaneada.CodigoPasoProcedimiento == null)
                return false;
            else
                return true;
        },
        BtnGridDeleteHallazgoClick: function (row, data) {
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarHallazgosOPT.data = data;
                    base.Ajax.AjaxEliminarHallazgosOPT.submit();
                }
            });
        },
        BtnGridVerAccionesClick: function (row, data) {
            data.CodigoTipoRegistroParametro = Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.ObservacionPlamneadaTarea;
            data.CodigoTipoOcurrenciaParametro = Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.TipoOcurrenciaAccion.Hallazgo;
            data.NumeroRecord = base.Control.TxtNumeroObservacionPlaneada().val();
            data.CodigoEstadoAccion = Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Abierto;
            data.IndicadorLectura = true;
            base.Control.DlgFormularioIngresoAccion.Show(data);
        },
        BtnGridEditAccionesClick: function (row, data) {            
            data.CodigoTipoRegistroParametro = Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.ObservacionPlamneadaTarea;
            data.CodigoTipoOcurrenciaParametro = Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.TipoOcurrenciaAccion.Hallazgo;
            data.NumeroRecord = base.Control.TxtNumeroObservacionPlaneada().val();
            data.CodigoEstadoAccion = Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Abierto;
            data.IndicadorLectura = (base.Control.FormularioModelo.ObservacionPlaneada.EstadoObservacionPlaneada == Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.EstadoCerradoOPT ? true : false)
            base.Control.DlgFormularioIngresoAccion.Show(data);
        },
        BtnGridDeleteAccionesClick: function (row, data) {
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarRecordAccion.data = data;
                    base.Ajax.AjaxEliminarRecordAccion.submit();
                }
            });
        },
        BtnGridDeleteColaboradorOPTClick: function (row, data) {
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Control.TipoColaborador = data.TipoColaborador;
                    base.Ajax.AjaxEliminarObservacionPlaneadaColaborador.data = data;
                    base.Ajax.AjaxEliminarObservacionPlaneadaColaborador.submit();
                }
            });
        },
        BtnGridDeleteObservadorExternoClick: function (row, data) {
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarColaboradorExterno.data = data;
                    base.Ajax.AjaxEliminarColaboradorExterno.submit();
                }
            });
        },
        BtnGridDeleteOportunidadMejoraClick: function (row, data) {
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Control.TipoOportunidadAccion = data.TipoOportunidadAccion;
                    base.Ajax.AjaxEliminarOportunidadMejora.data = data;
                    base.Ajax.AjaxEliminarOportunidadMejora.submit();
                }
            });
        },
        BtnGridEditCausaRaizClick: function (row, data) {
            data.IndicadorLectura = base.Control.FormularioModelo.ObservacionPlaneada.IndicadorLectura;
            base.Control.DlgFormularioCausasRaices.Show(data);
        },
        BtnGridDeleteCausaRaizClick: function (row, data) {
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarRecordCausaRaiz.data = data;
                    base.Ajax.AjaxEliminarRecordCausaRaiz.submit();
                }
            });
        },
        BtnGridDownloadIntegradorTipoRegistroAnexoClick: function (row, data) {            
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Base.Actions.DescargarIntegradorTipoRegistroAnexo, data);
        },
        BtnGridEditIntegradorTipoRegistroAnexoClick: function (row, data) {
            data.IndicadorLectura = base.Control.FormularioModelo.ObservacionPlaneada.IndicadorLectura;
            data.CodigoTipoAnexoIntegrador = Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.TiposAnexosObservacionPlaneada;                   
            base.Control.DlgFormularioAnexoApendice.Show(data);
        },
        BtnGridDeleteIntegradorTipoRegistroAnexoClick: function (row, data) {
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarIntegradorTipoRegistroAnexo.data = data;
                    base.Ajax.AjaxEliminarIntegradorTipoRegistroAnexo.submit();
                }
            });
        },
        BtnGridVistaPreviaFotoClick: function (row, data) {
            base.Control.DlgFormularioVistaPreviaFoto.Show(data);
        },
        BtnGridEditIntegradorTipoRegistroFotoClick: function (row, data) {
            data.IndicadorLectura = base.Control.FormularioModelo.ObservacionPlaneada.IndicadorLectura;
            base.Control.DlgFormularioAnexoFoto.Show(data);
        },
        BtnGridDeleteIntegradorTipoRegistroFotoClick: function (row, data) {
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarIntegradorTipoRegistroFoto.data = data;
                    base.Ajax.AjaxEliminarIntegradorTipoRegistroFoto.submit();
                }
            });
        },
        AsignarValoresCumplimiento: function () {
            base.Control.TxtTotalPasosCumplen().val('');
            base.Control.TxtTotalPasosNoCumplen().val('');
            base.Control.TxtTotalPasosNoAplica().val('');
            base.Control.TxtTotalCumplimiento().val('');
        },
        AsignarValoresObservadoresInternos: function () {            
            base.Control.TxtColaboradorInterno().val('');
            base.Control.SlcTipoObservadores().val('');
        },
        AsignarValoresObservadoresExternos: function () {
            base.Control.TxtNombresApellidos().val('');
            base.Control.TxtNumeroDocumento().val('');
            base.Control.SlcTipoDocumento().val('');
            base.Control.TxtCargoReferencial().val('');
        },
        AsignarValoresAccionesInmediatas: function () {
            base.Control.TxtDescripcionAccionInmediata().val('');
        },
        AsignarValoresOportunidadesMejora: function () {
            base.Control.TxtDescripcionMejora().val('');
        },
        AsignarValoresProcedimientos: function () {
            base.Control.TxtDescripcionPaso().val('');
        },
        AsignarValoresRetroalimentacion: function () {
            base.Control.SlcFelicitacion().val('');
            base.Control.TxtDescripcionFelicitacion().val('');
            base.Control.SlcRetroalimentacion().val('');
            base.Control.SlcCompromiso().val('');
            base.Control.TxtComentarioTrabajador().val('');
            base.Control.TxtComentarioSupervisor().val('');
        },
        AnularObservacionPlaneada: function () {
            if (base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada != null) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.EtiquetaMensajeAnular,
                    onAccept: function () {
                        base.Ajax.AjaxAnularObservacionPlaneada.data = {
                            CodigoObservacionPlaneada: base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada
                        };
                        base.Ajax.AjaxAnularObservacionPlaneada.submit();
                    }
                });
            }
        },
        ValidateLectura: function (data, type, full) {
            if (base.Control.FormularioModelo.ObservacionPlaneada.IndicadorLectura)
                return false;
            else
                return true;
        }
    };

    base.AjaxSuccess = {
        AjaxEditAccionInmediataSuccess: function (resultado) {
            if (resultado.IsSuccess == true) {
                base.Control.TxtDescripcionAccionInmediata().val(resultado.Result[0].Descripcion);
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxEditMejoraSuccess: function (resultado) {
            if (resultado.IsSuccess == true) {
                base.Control.TxtDescripcionMejora().val(resultado.Result[0].Descripcion);
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxBuscarProyectoSuccess: function (resultado) {
            if (resultado.Result != null && resultado.Result.length > 0) {
                base.Control.HddCodigoEmpresa().val(resultado.Result[0].CodigoEmpresa);
                base.Control.TxtEmpresa().val(resultado.Result[0].NombreEmpresa);
                base.Control.HddCodigoPais().val(resultado.Result[0].CodigoPais);
                base.Control.TxtPais().val(resultado.Result[0].NombrePais);
            }
            else {
                base.Control.HddCodigoEmpresa().val('');
                base.Control.TxtEmpresa().val('');
                base.Control.HddCodigoPais().val('');
                base.Control.TxtPais().val('');
            }
        },
        AjaxBuscarDepartamentoSuccess: function (resultado) {
            $.each(resultado.Result, function (index, value) {                
                base.Control.SlcDepartamento().attr('validable', 'required Validar');
                base.Control.SlcDepartamento().append(new Option(value.NombreDepartamento, value.CodigoDepartamento));
            });
        },
        AjaxBuscarAreaSuccess: function (resultado) {
            $.each(resultado.Result, function (index, value) {
                base.Control.SlcArea().attr('validable', 'required Validar');
                base.Control.SlcArea().append(new Option(value.NombreArea, value.CodigoArea));
            });
        },
        AjaxBuscarProcedimientoSuccess: function (resultado) {
            $.each(resultado.Result, function (index, value) {
                base.Control.SlcProcedimiento().attr('validable', 'required Validar');
                base.Control.SlcProcedimiento().append(new Option(value.Descripcion, value.CodigoProcedimiento));
            });
        },
        AjaxRegistrarObservacionPlaneadaSuccess: function (resultado) {
            if (resultado.IsSuccess) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });

                if (resultado.Result != null && resultado.Result.NumeroObservacionPlaneada != null) {
                    base.Control.TxtNumeroObservacionPlaneada().val(resultado.Result.NumeroObservacionPlaneada);
                    base.Control.FormularioModelo.ObservacionPlaneada.CodigoObservacionPlaneada = resultado.Result.CodigoObservacionPlaneada;
                    base.Control.FormularioModelo.ObservacionPlaneada.NumeroObservacionPlaneada = resultado.Result.NumeroObservacionPlaneada;
                    base.Control.FormularioModelo.ObservacionPlaneada.CodigoIntegradorTipoRegistro = resultado.Result.CodigoIntegradorTipoRegistro;
                }
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxRegistrarObservacionPlaneadaColaboradorSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                if (base.Control.TipoColaborador == Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.TipoColaboradorTrabajador) {
                    base.Event.BtnBuscarColaboradorOpt();
                }
                else if (base.Control.TipoColaborador == Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.TipoColaboradorSupervisor) {
                    base.Event.BtnBuscarSupervisorOpt();
                }
                else if (base.Control.TipoColaborador == Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.TipoColaboradorObservadorInterno) {
                    base.Event.AsignarValoresObservadoresInternos();
                    base.Event.BtnBuscarObservadorInternoOpt();
                    base.Control.FormularioModeloColaborador = null;
                }
                base.Control.TipoColaborador = null;
            }
            if (resultado.Result == '-1')
            {
                base.Control.Mensaje.Warning({
                    message: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.MensajeValidacionTrabajadorRepetido
                });               
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxEliminarPasosProcedimientoSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
                base.Event.BtnBuscarPasosProcedimiento();
            }
            else if(resultado.Result == '-2'){
                base.Control.Mensaje.Warning({
                    message: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.MensajeValidacionPasosProcedimiento
                });
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxEliminarObservacionPlaneadaColaboradorSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
                if (base.Control.TipoColaborador == Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.TipoColaboradorTrabajador) {
                    base.Event.BtnBuscarColaboradorOpt();
                }
                else if (base.Control.TipoColaborador == Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.TipoColaboradorSupervisor) {
                    base.Event.BtnBuscarSupervisorOpt();
                }
                else if (base.Control.TipoColaborador == Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.TipoColaboradorObservadorInterno) {
                    base.Event.BtnBuscarObservadorInternoOpt();
                }
                base.Control.TipoColaborador = null;
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxRegistrarColaboradorExternoSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnBuscarObservadorExterno();
                base.Event.AsignarValoresObservadoresExternos('');
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxRegistrarOportunidadMejoraSuccess: function (resultado) {
            base.Control.HdnCodigoOportunidadMejora().val('')
            base.Control.HdnCodigoAccionInmediata().val('')
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                if (base.Control.TipoOportunidadAccion == Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.TipoAccionInmediata) {
                    base.Event.BtnBuscarAccionInmediata();
                    base.Event.AsignarValoresAccionesInmediatas();
                }
                else if (base.Control.TipoOportunidadAccion == Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.TipoOportunidadMejora) {
                    base.Event.BtnBuscarOportunidadMejora();
                    base.Event.AsignarValoresOportunidadesMejora();
                }
                else {
                    base.Event.BtnBuscarPasosProcedimiento();
                    base.Event.AsignarValoresProcedimientos();
                }
                base.Control.TipoOportunidadAccion = null;
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxRegistrarCumplimientoSuccess: function(resultado){
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
            } else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxGrabarHallazgoSuccess:function(resultado){
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnBuscarHallazgoClick();
                base.Event.BtnAsignarValoresHallazgo('');
            } else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxEliminarColaboradorExternoSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
                base.Event.BtnBuscarObservadorExterno();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxEliminarOportunidadMejoraSuccess: function(resultado){
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
                if (base.Control.TipoOportunidadAccion == Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.TipoAccionInmediata) {
                    base.Event.BtnBuscarAccionInmediata();
                }
                else if (base.Control.TipoOportunidadAccion == Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.DatosConstantes.TipoOportunidadMejora) {
                    base.Event.BtnBuscarOportunidadMejora();
                }
                else {
                    base.Event.BtnBuscarPasosProcedimiento();
                }
                base.Control.TipoOportunidadAccion = null;
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxEliminarRecordCausaRaizSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Event.BtnBuscarCausasRaices();
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxEliminarIntegradorTipoRegistroAnexoSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
                base.Event.BtnBuscarAnexoArchivoClick();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxEliminarIntegradorTipoRegistroFotoSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
                base.Event.BtnBuscarAnexoFotoClick();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxEliminarRecordAccionSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
                base.Event.BtnBuscarAccionesClick();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxEliminarHallazgosOPTSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
                base.Event.BtnBuscarHallazgoClick();
            }
            else if (resultado.Result == '-2') {
                base.Control.Mensaje.Warning({
                    message: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.MensajeValidacionHallazgos
                });
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxAnularObservacionPlaneadaSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Actions.BandejaObservacion, {});
            }
            else if (resultado.Result == '-2') {
                base.Control.Mensaje.Warning({
                    message: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.MensajeErrorAnulacion
                });
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxEditProcedimientoSuccess: function (resultado) {
        if (resultado.IsSuccess == true) {            
            base.Control.TxtDescripcionPaso().val(resultado.Result[0].Descripcion)
            //base.Event.DeshabilitarBotonesIngresoHallazgoClick();
        }
        else {
            base.Control.Mensaje.Warning({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
            });
            //base.Event.BtnLimpiarIngresoHallazgoClick();
        }
    },
    };

    base.Ajax = {
        AjaxEditAccionInmediata: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Actions.BuscarOportunidadMejora,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEditAccionInmediataSuccess,
        }),
        AjaxEditMejora: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Actions.BuscarOportunidadMejora,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEditMejoraSuccess,
        }),
        AjaxEditProcedimiento: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Actions.BuscarOportunidadMejora,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEditProcedimientoSuccess
        }),
        AjaxBuscarProyecto: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Actions.BuscarProyecto,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxBuscarProyectoSuccess
        }),
        AjaxBuscarDepartamento: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Actions.BuscarDepartamento,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxBuscarDepartamentoSuccess
        }),
        AjaxBuscarArea: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Actions.BuscarArea,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxBuscarAreaSuccess
        }),        
        AjaxBuscarProcedimiento: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Actions.BuscarProcedimiento,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxBuscarProcedimientoSuccess
        }), 
        AjaxRegistrarObservacionPlaneada: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Actions.RegistrarObservacionPlaneada,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarObservacionPlaneadaSuccess
        }),
        AjaxRegistrarObservacionPlaneadaColaborador: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Actions.RegistrarObservacionPlaneadaColaborador,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarObservacionPlaneadaColaboradorSuccess
        }),
        AjaxRegistrarColaboradorExterno: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Actions.RegistrarColaboradorExterno,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarColaboradorExternoSuccess
        }),
        AjaxRegistrarRetroalimentacion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Actions.RegistrarRetroalimentacion,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarRetroalimentacionSuccess
        }),
        AjaxRegistrarOportunidadMejora: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Actions.RegistrarOportunidadMejora,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarOportunidadMejoraSuccess
        }),        
        AjaxRegistrarCumplimiento: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Actions.RegistrarCumplimiento,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarCumplimientoSuccess
        }),
        AjaxGrabarHallazgo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.RegistrarHallazgo,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxGrabarHallazgoSuccess
        }),
        AjaxEliminarPasosProcedimiento: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Actions.EliminarPasosProcedimiento,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarPasosProcedimientoSuccess
        }),
        AjaxEliminarObservacionPlaneadaColaborador: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Actions.EliminarObservacionPlaneadaColaborador,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarObservacionPlaneadaColaboradorSuccess
        }),        
        AjaxEliminarColaboradorExterno: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Actions.EliminarColaboradorExterno,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarColaboradorExternoSuccess
        }),
        AjaxEliminarOportunidadMejora: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Actions.EliminarOportunidadMejora,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarOportunidadMejoraSuccess
        }),
        AjaxEliminarRecordCausaRaiz: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.EliminarRecordCausaRaiz,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarRecordCausaRaizSuccess
        }),
        AjaxEliminarIntegradorTipoRegistroAnexo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.EliminarIntegradorTipoRegistroAnexo,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarIntegradorTipoRegistroAnexoSuccess
        }),
        AjaxEliminarIntegradorTipoRegistroFoto: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.EliminarIntegradorTipoRegistroAnexo,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarIntegradorTipoRegistroFotoSuccess
        }),
        AjaxEliminarRecordAccion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.EliminarRecordAccion,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarRecordAccionSuccess
        }),        
        AjaxEliminarHallazgosOPT: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Actions.EliminarHallazgosOPT,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarHallazgosOPTSuccess
        }),        
        AjaxAnularObservacionPlaneada: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Actions.AnularObservacionPlaneada,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxAnularObservacionPlaneadaSuccess
        }),        
    };

    base.Function = {
        CrearGridColaborador: function () {
            var columns = new Array();
            columns.push({
                data: 'NombreCompletoColaborador',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridApellidosyNombres,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionTipoDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridTipoDocumento,
                width: "10%"
            });
            columns.push({
                data: 'NumeroDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridNumeroDocumento,
                width: "15%"
            });
            columns.push({
                data: 'NombreEmpresa',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridEmpresa,
                width: "10%"
            });
            columns.push({
                data: 'NombreProyecto',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridProyecto,
                width: "10%"
            });
            columns.push({
                data: 'NombreArea',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridArea,
                width: "10%"
            });
            columns.push({
                data: 'NombrePuestoTrabajo',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridPuestoTrabajo,
                width: "5%"
            });
            columns.push({
                data: 'ExperienciaPuestoAniosTotal',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridTiempoPuestoTrabajo,
                width: "15%"
            });
            columns.push({
                data: 'ExperienciaNegocioAniosTotal',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridExperienciaNegocio,
                width: "15%"
            });
            columns.push({
                data: 'TiempoProyectoAniosTotal',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridTiempoProyecto,
                width: "15%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.ValidateLectura, event: { on: 'click', callBack: base.Event.BtnGridDeleteColaboradorOPTClick } }
                ]
            });
            base.Control.GrdResultadoColaborador = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdColaborador',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Actions.BuscarOptColaborador,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        },
        CrearGridSupervisor: function () {
            var columns = new Array();
            columns.push({
                data: 'NombreCompletoColaborador',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridApellidosyNombres,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionTipoDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridTipoDocumento,
                width: "10%"
            });
            columns.push({
                data: 'NumeroDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridNumeroDocumento,
                width: "15%"
            });
            columns.push({
                data: 'NombreEmpresa',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridEmpresa,
                width: "10%"
            });
            columns.push({
                data: 'NombreProyecto',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridProyecto,
                width: "10%"
            });
            columns.push({
                data: 'NombreArea',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridArea,
                width: "10%"
            });
            columns.push({
                data: 'NombrePuestoTrabajo',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridPuestoTrabajo,
                width: "5%"
            });
            columns.push({
                data: 'ExperienciaPuestoAniosTotal',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridTiempoPuestoTrabajo,
                width: "15%"
            });
            columns.push({
                data: 'ExperienciaNegocioAniosTotal',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridExperienciaNegocio,
                width: "15%"
            });
            columns.push({
                data: 'TiempoProyectoAniosTotal',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridTiempoProyecto,
                width: "15%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [                    
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.ValidateLectura, event: { on: 'click', callBack: base.Event.BtnGridDeleteColaboradorOPTClick } }
                ]
            });
            base.Control.GrdResultadoSupervisor = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdSupervisor',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Actions.BuscarOptColaborador,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        },
        CrearGridObservadorInterno: function () {
            var columns = new Array();
            columns.push({
                data: 'DescripcionTipoObservador',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridTipoObservador,
                width: "10%"
            });
            columns.push({
                data: 'NombreCompletoColaborador',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridApellidosyNombres,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionTipoDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridTipoDocumento,
                width: "10%"
            });
            columns.push({
                data: 'NumeroDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridNumeroDocumento,
                width: "15%"
            });
            columns.push({
                data: 'NombreEmpresa',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridEmpresa,
                width: "10%"
            });
            columns.push({
                data: 'NombreProyecto',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridProyecto,
                width: "10%"
            });
            columns.push({
                data: 'NombreArea',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridArea,
                width: "10%"
            });
            columns.push({
                data: 'NombrePuestoTrabajo',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridPuestoTrabajo,
                width: "5%"
            });
            columns.push({
                data: 'ExperienciaPuestoAniosTotal',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridTiempoPuestoTrabajo,
                width: "15%"
            });
            columns.push({
                data: 'ExperienciaNegocioAniosTotal',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridExperienciaNegocio,
                width: "15%"
            });
            columns.push({
                data: 'TiempoProyectoAniosTotal',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridTiempoProyecto,
                width: "15%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.ValidateLectura, event: { on: 'click', callBack: base.Event.BtnGridDeleteColaboradorOPTClick } }
                ]
            });
            base.Control.GrdResultadoObservadorInterno = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdObservadorInterno',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Actions.BuscarOptColaborador,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        },
        CrearGridObservadorExterno: function () {
            var columns = new Array();
            columns.push({
                data: 'NombresApellidos',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridApellidosyNombres,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionTipoDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridTipoDocumento,
                width: "10%"
            });
            columns.push({
                data: 'NumeroDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridNumeroDocumento,
                width: "15%"
            });
            columns.push({
                data: 'CargoReferencial',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridCargoReferencial,
                width: "15%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [                    
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.ValidateLectura, event: { on: 'click', callBack: base.Event.BtnGridDeleteObservadorExternoClick } }
                ]
            });
            base.Control.GrdResultadoObservadorExterno = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdObservadorExterno',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Actions.BuscarObservadorExterno,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        },
        CrearGridPasosProcedimiento: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridItem,
                width: "10%"
            });
            columns.push({
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridDescripcionPaso,
                width: "10%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, validateRender: base.Event.BtnGridEditProcedimiento, event: { on: 'click', callBack: base.Event.BtnGridEditProcedimientoClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.VerSeguimiento, event: { on: 'click', callBack: base.Event.BtnGridAgregarHallazgosClick }, toolTip: 'Ingresar hallazgos' },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.ValidateLectura, event: { on: 'click', callBack: base.Event.BtnGridDeletePasosProcedimientoClick } }
                ]
            });
            base.Control.GrdResultadoProcedimientos = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdProcedimientos',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Actions.BuscarOportunidadMejora,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        },
        CrearGridHallazgo: function () {
            var columns = new Array();
            columns.push({
                data: 'DescripcionCorta',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridDescripcionCorta,
                width: "15%"
            });
            columns.push({
                data: 'DescripcionLarga',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridDescripcionLarga,
                width: "15%"
            });
            columns.push({
                data: 'DescripcionNivelRiesgo',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridNivelRiesgo,
                width: "15%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.VerSeguimiento, event: { on: 'click', callBack: base.Event.BtnGridAgregarAccionesClick }, toolTip: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaIngresarAcciones },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, validateRender: base.Event.BtnGridEditHallazgoValidate, event: { on: 'click', callBack: base.Event.BtnGridEditHallazgoClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.ValidateLectura, event: { on: 'click', callBack: base.Event.BtnGridDeleteHallazgoClick } }
                ]
            });
            base.Control.GrdResultadoHallazgo = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoHallazgo',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.BuscarHallazgo,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        },
        CrearGridAcciones: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridNumeroAccion,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionCorta',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridDescripcionCortaAccion,
                width: "10%"
            });
            columns.push({
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridDescripcionLargaAccion,
                width: "10%"
            });
            columns.push({
                data: 'NombreColaboradorPlanteaAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridPlanteadaPor,
                width: "10%"
            });
            columns.push({
                data: 'FechaAccionPlanteadaString',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridFechaPlanteada,
                width: "10%"
            });
            columns.push({
                data: 'NombreColaboradorResponsable',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridResponsable,
                width: "10%"
            });
            columns.push({
                data: 'FechaVencimientoString',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridFechaVencimiento,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionEstadoAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridEstadoDeAccion,
                width: "10%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.VerAccion, event: { on: 'click', callBack: base.Event.BtnGridVerAccionesClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditAccionesClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.ValidateLectura, event: { on: 'click', callBack: base.Event.BtnGridDeleteAccionesClick } }
                ]
            });
            base.Control.GrdResultadoAcciones = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdAcciones',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.BuscarRecordAccionHallazgo,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        },
        CrearGridCausaRaiz: function () {
            var columns = new Array();
            columns.push({
                data: 'CodigoGenerado',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridCodigo,
                width: "10%"
            });
            columns.push({
                data: 'NombreCategoria',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridCategoria,
                width: "10%"
            });
            columns.push({
                data: 'NombreSubCategoria',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridSubCategoria,
                width: "10%"
            });
            columns.push({
                data: 'NombreCausaRaiz',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridCausaRaiz,
                width: "15%"
            });
            columns.push({
                data: 'Comentario',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridComentario,
                width: "15%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditCausaRaizClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.ValidateLectura, event: { on: 'click', callBack: base.Event.BtnGridDeleteCausaRaizClick } }
                ]
            });
            base.Control.GrdResultadoCausas = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdCausas',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.BuscarRecordCausaRaiz,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        },
        CrearGridAccionInmediata: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridItem,
                width: "10%"
            });
            columns.push({
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridDescripcion,
                width: "60%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditAccionInmediataClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.ValidateLectura, event: { on: 'click', callBack: base.Event.BtnGridDeleteOportunidadMejoraClick } }
                ]
            });
            base.Control.GrdResultadoAccionInmediata = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdAccionesInmediatas',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Actions.BuscarOportunidadMejora,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        },
        CrearGridOportunidadMejora: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridItem,
                width: "10%"
            });
            columns.push({
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridDescripcionMejora,
                width: "60%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditOportunidadMejoraClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.ValidateLectura, event: { on: 'click', callBack: base.Event.BtnGridDeleteOportunidadMejoraClick } }
                ]
            });
            base.Control.GrdResultadoOportunidadMejora = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdOportunidadesMejora',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Actions.BuscarOportunidadMejora,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        },
        CrearGridAnexoApendice: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridItem,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionTipoApendice',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridTipo,
                width: "20%"
            });
            columns.push({
                data: 'Nombre',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridNombreArchivo,
                width: "30%"
            });
            columns.push({
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridDescripcion,
                width: "30%"
            });
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridDescargar,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Adjunto, event: { on: 'click', callBack: base.Event.BtnGridDownloadIntegradorTipoRegistroAnexoClick } }
                ]
            });
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditIntegradorTipoRegistroAnexoClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.ValidateLectura, event: { on: 'click', callBack: base.Event.BtnGridDeleteIntegradorTipoRegistroAnexoClick } }
                ]
            });
            base.Control.GrdResultadoAnexoApendice = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoAnexoApendice',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.BuscarIntegradorTipoRegistroAnexo,
                    source: 'Result'
                }
            });
        },
        CrearGridAnexoFoto: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridItem,
                width: "5%"
            });
            columns.push({
                data: 'Nombre',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridNombreArchivo,
                width: "30%"
            });
            columns.push({
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridDescripcion,
                width: "30%"
            });
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.IngresoObservacion.Resource.GridVistaPreviaFoto,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.VistaPrevia, event: { on: 'click', callBack: base.Event.BtnGridVistaPreviaFotoClick } }
                ]
            });
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditIntegradorTipoRegistroFotoClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.ValidateLectura, event: { on: 'click', callBack: base.Event.BtnGridDeleteIntegradorTipoRegistroFotoClick } }
                ]
            });
            base.Control.GrdResultadoAnexoFoto = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoAnexoFoto',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.BuscarIntegradorTipoRegistroAnexo,
                    source: 'Result'
                }
            });
        },

        ValidacionExtraObservadorInterno: function () {
            var validaciones = new Array();
            validaciones.push({
                Event: function () {
                    var resultado = true;
                    if (base.Control.HdnCodigoColaboradorInterno().val() == null || base.Control.HdnCodigoColaboradorInterno().val() == '') {
                        resultado = false;
                    }
                    if (resultado) {
                        base.Control.TxtColaboradorInterno().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtColaboradorInterno().attr('class', 'form-control hasError');
                    }
                    return resultado;
                }
            });
            return validaciones;
        },
    };
};