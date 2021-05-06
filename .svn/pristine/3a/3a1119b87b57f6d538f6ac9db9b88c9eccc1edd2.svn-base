/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 19102017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Index');
Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Index.Controller = function () {
    var base = this;

    base.Ini = function () {

        base.Control.FormularioModelo = Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Models.Formulario;
        //Checks        
        if (base.Control.FormularioModelo.ListaInspeccionGestion != null && base.Control.FormularioModelo.ListaInspeccionGestion.length > 0) {
            for (var i = 0; i < base.Control.FormularioModelo.ListaInspeccionGestion.length; i++) {
                if (base.Control.FormularioModelo.ListaInspeccionGestion[i].TipoGestion == Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.DatosConstantes.CheckOtros) {
                    base.Control.TxtTipoGestionOtros().val(base.Control.FormularioModelo.ListaInspeccionGestion[i].TipoGestionOtros);
                    if (base.Control.FormularioModelo.ListaInspeccionGestion[i].TipoGestionOtros != '')
                       base.Control.TxtTipoGestionOtros().prop('disabled', false);
                }
                $('#id_' + base.Control.FormularioModelo.ListaInspeccionGestion[i].TipoGestion).prop("checked", true);
            }
        }

        base.Function.CrearGridAreaInspeccionada();
        base.Function.CrearGridEmpresaSubContratista();
        base.Function.CrearGridObservadorInterno();
        base.Function.CrearGridObservadorExterno();
        base.Function.CrearGridAcciones();
        base.Function.CrearGridFotos();
        base.Function.CrearGridCausaRaiz();
        base.Function.CrearGridAnexoApendice();

        if (base.Control.FormularioModelo.Inspecciones.CodigoInspeccion != null) {          
            $('#btnAgregarArea').removeClass('hidden');
        }

        if (base.Control.FormularioModelo.Inspecciones.CodigoInspeccion != null) {
            base.Event.BtnBuscarResponsableArea();
        }        
        if (base.Control.SlcTipoInspeccion().val() == '3') {            
            //base.Control.TxtTipoInspeccionOtros().show();
            base.Control.TxtTipoInspeccionOtros().prop('disabled', false);
        } else {            
            //base.Control.TxtTipoInspeccionOtros().hide();
            base.Control.TxtTipoInspeccionOtros().prop('disabled', true);
            base.Control.TxtTipoInspeccionOtros().val('');
        }

        if (base.Control.SlcFuenteInspeccion().val() == '4') {            
            //base.Control.TxtFuenteInspeccionOtros().show();
            base.Control.TxtFuenteInspeccionOtros().prop('disabled', false);
        } else {            
            //base.Control.TxtFuenteInspeccionOtros().hide();
            base.Control.TxtFuenteInspeccionOtros().prop('disabled', true);
            base.Control.TxtFuenteInspeccionOtros().val('');
        }
                
        base.Control.SlcProyecto().off('change');
        base.Control.SlcProyecto().on('change', base.Event.SlcProyectoChange);

        base.Control.SlcDepartamento().off('change');
        base.Control.SlcDepartamento().on('change', base.Event.SlcDepartamentoChange);

        base.Control.SlcArea().off('change');
        base.Control.SlcArea().on('change', base.Event.SlcAreaChange);

        //base.Control.DtpFechaEjecucion().datepicker({
        //    dateFormat: 'dd/mm/yy',
        //    maxDate: '+0D'
        //});

        if (base.Control.FormularioModelo.Inspecciones.CodigoInspeccion == null) {
            base.Control.DtpFechaEjecucion().datepicker({
                dateFormat: 'dd/mm/yy',
                maxDate: '+0D',
                minDate: '-4D'
            });
        }
        else {
            var fecha = base.Control.FormularioModelo.Inspecciones.FechaCreacionString.split('/');
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

        base.Control.SlcTipoInspeccion().off('change');
        base.Control.SlcTipoInspeccion().on('change', base.Event.SlcTipoInspeccionChange);

        //base.Control.LblTipoInspeccionOtros().hide();
        //base.Control.TxtTipoInspeccionOtros().hide();

        base.Control.SlcFuenteInspeccion().off('change');
        base.Control.SlcFuenteInspeccion().on('change', base.Event.SlcFuenteInspeccionChange);

        //base.Control.LblFuenteInspeccionOtros().hide();
        //base.Control.TxtFuenteInspeccionOtros().hide();

        /*base.Control.ChkIndicadorSeguridad().off('click');
        base.Control.ChkIndicadorSeguridad().on('click', base.Event.ChkIndicadorSeguridadClick);
        base.Control.ChkIndicadorSaludOcupacional().off('click');
        base.Control.ChkIndicadorSaludOcupacional().on('click', base.Event.ChkIndicadorSaludOcupacionalClick);
        base.Control.ChkIndicadorGestionAmbiental().off('click');
        base.Control.ChkIndicadorGestionAmbiental().on('click', base.Event.ChkIndicadorGestionAmbientalClick);
        base.Control.ChkIndicadorComunidad().off('click');
        base.Control.ChkIndicadorComunidad().on('click', base.Event.ChkIndicadorComunidadClick);
        base.Control.ChkIndicadorOtros().off('click');
        base.Control.ChkIndicadorOtros().on('click', base.Event.ChkIndicadorOtrosClick);*/

        //base.Control.LblTipoGestionOtros().hide();
        //base.Control.TxtTipoGestionOtros().hide();

        base.Control.BtnAnular().off('click');
        base.Control.BtnAnular().on('click', base.Event.AnularInspeccion);

        base.Control.BtnGuardarGenerales().off('click');
        base.Control.BtnGuardarGenerales().on('click', base.Event.BtnGuardarGeneralesClick);

        base.Control.BtnAgregarArea().off('click');
        base.Control.BtnAgregarArea().on('click', base.Event.BtnAgregarAreaClick);

        base.Control.BtnAgregarAccion().off('click');
        base.Control.BtnAgregarAccion().on('click', base.Event.BtnAgregarAccionClick);

        base.Control.BtnAgregarCausas().off('click');
        base.Control.BtnAgregarCausas().on('click', base.Event.BtnAgregarCausasClick);

        base.Control.BtnAgregarConclusiones().off('click');
        base.Control.BtnAgregarConclusiones().on('click', base.Event.BtnGuardarGeneralesClick);

        base.Control.BtnAgregarAnexo().off('click');
        base.Control.BtnAgregarAnexo().on('click', base.Event.BtnAgregarAnexoClick);

        base.Control.BtnAgregarFoto().off('click');
        base.Control.BtnAgregarFoto().on('click', base.Event.BtnAgregarFotoClick);

        base.Control.BtnCancelarObservadorInterno().off('click');
        base.Control.BtnCancelarObservadorInterno().on('click', base.Event.BtnCancelarObservadorInternoClick);

        base.Control.BtnCancelarObservadorExterno().off('click');
        base.Control.BtnCancelarObservadorExterno().on('click', base.Event.BtnCancelarObservadorExternoClick);        

        base.Control.BtnRegresarBandejaInspecciones().off('click');
        base.Control.BtnRegresarBandejaInspecciones().on('click', base.Event.BtnRegresarBandejaInspeccionesClick);

        base.Control.BtnCancelarHallazgo().off('click');
        base.Control.BtnCancelarHallazgo().on('click', base.Event.BtnCancelarHallazgoClick);

        base.Control.BtnCancelarConclusiones().off('click');
        base.Control.BtnCancelarConclusiones().on('click', base.Event.BtnCancelarConclusionesClick);

        base.Control.ValidadorGenerales = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmGenerales(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraGenerales()
        });
        base.Control.ValidadorArea = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmInspeccionArea(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos
        });
        base.Control.ValidadorInspector = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmObservadorInterno(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraColaborador()
        });
        base.Control.ValidadorInspectorExterno = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmObservadorExterno(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos
        });
        base.Control.DlgFormularioIngresoAccion = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordAccionGenerico.Controller({
            GrabarRecordAccionSuccess: base.Event.BtnBuscarAccionesClick
        });

        base.Control.DlgFormularioCausasRaices = new Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.FormularioCausasRaices.Controller({
            GrabarAnalisiSuccess: base.Event.BtnBuscarCausasRaices
        });        

        $('#cartTabsInspecciones').on('shown.bs.tab', function (e) {
            var target = $(e.target).attr("href");
            if (target == "#tabGenerales") {               
                base.Control.FormularioModelo.Inspecciones.CodigoHallazgo = null;
                if (base.Control.FormularioModelo.Inspecciones.CodigoInspeccion != null) {
                    base.Event.BtnBuscarResponsableArea();
                    $('#btnAgregarArea').removeClass('hidden');
                }                
            }
            if (target == "#tabEmpresas") {                
                base.Control.FormularioModelo.Inspecciones.CodigoHallazgo = null;
                if (base.Control.FormularioModelo.Inspecciones.CodigoInspeccion != null) {
                    base.Event.BtnBuscarEmpresaContratista();
                    base.Event.BtnBuscarEmpresaSubContratistas();
                    $('#divTabEmpresas').removeClass('hidden');
                    $('#divEmpresaSeleccionar').removeClass('hidden');
                    $('#btnGuardarContratista').removeClass('hidden');                                
                    $('#btnGuardarSubContratista').removeClass('hidden');
                    $('#divtabSubContratista').removeClass('hidden');
                    $('#divBotonAccionContratista').removeClass('hidden');

                }
            }
            if (target == "#tabEquipo") {                
                base.Control.FormularioModelo.Inspecciones.CodigoHallazgo = null;
                base.Event.BtnBuscarObservadorInterno();
                //setTimeout(function () { base.Event.BtnBuscarObservadorExterno(); }, 2000);                
                base.Event.BtnBuscarObservadorExterno();
                if (base.Control.FormularioModelo.Inspecciones.CodigoInspeccion != null) {                  
                    $('#divObservadorInterno').removeClass('hidden');
                    $('#divBotonAccion3').removeClass('hidden');
                    $('#divDocumento').removeClass('hidden');
                    $('#divNombres').removeClass('hidden');
                    $('#divApellidos').removeClass('hidden');
                    $('#divBotonAccion4').removeClass('hidden');
                }
            }            
            if (target == "#tabHallazgos") {                
                if (base.Control.FormularioModelo.Inspecciones.CodigoInspeccion != null) {                    
                    $('#divControlesHallazgos').removeClass('hidden');
                    $('#botonesHallazgos').removeClass('hidden');
                    base.Event.BtnBuscarHallazgoClick();
                }                
            }
            if (target == "#tabAcciones") {
                base.Event.BtnBuscarAcciones();
                if (base.Control.FormularioModelo.Inspecciones.CodigoHallazgo == null) {
                    $('#blContieneAccion').hide();
                }
                else {
                    $('#blContieneAccion').show();
                }
                base.Event.BtnBuscarAccionesClick();
            }
            if (target == "#tabCausas") {              
                base.Control.FormularioModelo.Inspecciones.CodigoHallazgo = null;
                if (base.Control.FormularioModelo.Inspecciones.CodigoInspeccion != null) {
                    base.Event.BtnBuscarCausasRaices();
                    $('#btnAgregarCausas').removeClass('hidden');
                    $('#divtabCausas').removeClass('hidden');
                }
            }            
            if (target == "#tabConclusiones") {
                if (base.Control.FormularioModelo.Inspecciones.CodigoInspeccion != null) {
                    $('#divBotonAccionGuardarConclusiones').removeClass('hidden');
                    $('#divBotonAccionGuardarConclusiones').removeClass('hidden');
                    $('#divConclusiones').removeClass('hidden');
                }  
            }
            if (target == "#tabAnexos") {
                if (base.Control.FormularioModelo.Inspecciones.CodigoInspeccion != null) {
                    base.Event.BtnBuscarAnexoArchivoClick();
                    $('#btnAgregarAnexo').removeClass('hidden');
                    $('#divtabAnexos').removeClass('hidden');
                }
            }
            if (target == "#tabFotos") {
                if (base.Control.FormularioModelo.Inspecciones.CodigoHallazgo != null) {
                    base.Event.BtnBuscarDocumentoFotoClick();
                    $('#btnAgregarFoto').removeClass('hidden');                   
                }
            }
        });

        base.Control.BtnBuscarEmpresaColaborador().off('click');
        base.Control.BtnBuscarEmpresaColaborador().on('click', base.Event.BtnBuscarEmpresaColaboradorClick);

        base.Control.BtnBuscarEmpresaColaboradorSubContratista().off('click');
        base.Control.BtnBuscarEmpresaColaboradorSubContratista().on('click', base.Event.BtnBuscarEmpresaColaboradorSubContratistaClick);

        base.Control.DlgFormularioEmpresaColaborador = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.FormularioBuscadorEmpresa.Controller({
            AceptarSuccess: base.Event.ObtenerEmpresaColaborador
        });
        base.Control.DlgFormularioVistaPreviaFoto = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioVistaPreviaDocumentoFoto.Controller({
        });
        base.Control.DlgFormularioEmpresaColaboradorSubContratista = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.FormularioBuscadorEmpresa.Controller({
            AceptarSuccess: base.Event.ObtenerEmpresaColaboradorSubContratista
        });
        base.Control.DlgFormularioObservadorInterno = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.ObtenerObservadorInterno
        });

        base.Control.BtnGuardarContratista().off('click');
        base.Control.BtnGuardarContratista().on('click', base.Event.BtnGuardarContratistaClick);

        base.Control.BtnGuardarSubContratista().off('click');
        base.Control.BtnGuardarSubContratista().on('click', base.Event.BtnGuardarSubContratistaClick);

        base.Control.BtnAgregarObservadorInterno().off('click');
        base.Control.BtnAgregarObservadorInterno().on('click', base.Event.BtnAgregarObservadorInternoClick);

        base.Control.BtnGuardarObservadorInterno().off('click');
        base.Control.BtnGuardarObservadorInterno().on('click', base.Event.BtnGuardarObservadorInternoClick);

        base.Control.BtnGuardarObservadorExterno().off('click');
        base.Control.BtnGuardarObservadorExterno().on('click', base.Event.BtnGuardarObservadorExternoClick);

        /*Tab: Hallazgo*/
        base.Control.BtnSalirHallazgo().off('click');
        base.Control.BtnSalirHallazgo().on('click', base.Event.BtnSalirHallazgoClick);        
        base.Control.BtnGuardarHallazgo().off('click');
        base.Control.BtnGuardarHallazgo().on('click', base.Event.BtnGrabarHallazgoClick);
        base.Control.ValidadorHallazgo = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmHallazgo(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
        });

        base.Control.DlgFormularioAnexoApendice = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioIntegradorApendiceArchivo.Controller({
            GrabarRecordAnexoApendiceSuccess: base.Event.BtnBuscarAnexoArchivoClick
        });

        base.Control.DlgFormularioDocumentoFoto = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioDocumentoFoto.Controller({
            GrabarRecordDocumentoFotoSuccess: base.Event.BtnBuscarDocumentoFotoClick
        });

        $('.checkboxClass').change(function () {            
            if (this.checked && this.value == Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.DatosConstantes.CheckOtros) {
                base.Control.TxtTipoGestionOtros().prop('disabled', false);
            } else {
                base.Control.TxtTipoGestionOtros().val('');
                base.Control.TxtTipoGestionOtros().prop('disabled', true);

            }
        });
    };

    base.Control = {
        BtnAnular: function () { return $('#btnAnular'); },
        BtnGuardarGenerales: function () { return $('#btnGuardarGenerales'); },
        BtnAgregarArea: function () { return $('#btnAgregarArea'); },
        BtnRegresarBandejaInspecciones: function () { return $('#btnRegresarBandejaInspecciones'); },
        BtnCancelarHallazgo: function () { return $('#btnCancelarHallazgo'); },
        BtnCancelarConclusiones: function () { return $('#btnCancelarConclusiones'); },        

        FrmGenerales: function () { return $('#frmGenerales'); },
        FrmInspeccionArea: function () { return $('#frmInspeccionArea'); },
        FrmObservadorInterno: function () { return $('#frmObservadorInterno'); },
        FrmObservadorExterno: function () { return $('#frmObservadorExterno'); },

        SlcProyecto: function () { return $('#slcProyecto'); },
        SlcDepartamento: function () { return $('#slcDepartamento'); },
        SlcArea: function () { return $('#slcArea'); },
        DtpFechaEjecucion: function () { return $('#dtpFechaEjecucion'); },
        SlcTipoInspeccion: function () { return $('#slcTipoInspeccion'); },
        SlcFuenteInspeccion: function () { return $('#slcFuenteInspeccion'); },
        SlcHoraInspeccion: function () { return $('#slcHoraInspeccion'); },
        SlcMinutoInspeccion: function () { return $('#slcMinutoInspeccion'); },
        LblTipoInspeccionOtros: function () { return $('#lblTipoInspeccionOtros'); },
        TxtTipoInspeccionOtros: function () { return $('#txtTipoInspeccionOtros'); },
        LblFuenteInspeccionOtros: function () { return $('#lblFuenteInspeccionOtros'); },
        TxtFuenteInspeccionOtros: function () { return $('#txtFuenteInspeccionOtros'); },
        LblTipoGestionOtros: function () { return $('#lblTipoGestionOtros'); },
        TxtTipoGestionOtros: function () { return $('#txtTipoGestionOtros'); },

        ChkIndicadorSeguridad: function () { return $('#chkIndicadorSeguridad'); },
        ChkIndicadorSaludOcupacional: function () { return $('#chkIndicadorSaludOcupacional'); },
        ChkIndicadorGestionAmbiental: function () { return $('#chkIndicadorGestionAmbiental'); },
        ChkIndicadorComunidad: function () { return $('#chkIndicadorComunidad'); },        
        ChkIndicadorOtros: function () { return $('#chkIndicadorOtros'); },

        Mensaje: new Pe.GMD.UI.Web.Components.Message(),

        TxtNumeroInspeccion: function () { return $('#txtNumeroInspeccion'); },
        TxtEmpresa: function () { return $('#txtEmpresa'); },
        TxtPais: function () { return $('#txtPais'); },
        TxtTituloRegistro: function () { return $('#txtTituloRegistro'); },
        TxtObjetivo: function () { return $('#txtObjetivo'); },
        TxtLugarExacto: function () { return $('#txtLugarExacto'); },
        TxtResponsableArea: function () { return $('#txtResponsableArea'); },

        SlcHoraInspeccion: function () { return $('#slcHoraInspeccion'); },
        SlcMinutoInspeccion: function () { return $('#slcMinutoInspeccion'); },

        HdnCodigoEmpresaContratista: function () { return $('#hdnCodigoEmpresaContratista'); },
        TxtEmpresaContratista: function () { return $('#txtEmpresaContratista'); },
        TxtRUC: function () { return $('#txtRUC'); },
        TxtDomicilioFiscal: function () { return $('#txtDomicilioFiscal'); },
        TxtDuenioContrato: function () { return $('#txtDuenioContrato'); },
        TxtActividadEconomica: function () { return $('#txtActividadEconomica'); },
        TxtNroTrabajadoresCL: function () { return $('#txtNroTrabajadoresCL'); },
        TxtPreguntaAltoRiesgo: function () { return $('#txtPreguntaAltoRiesgo'); },
        TxtNroTrabajadoresAfiliadosSeguro: function () { return $('#txtNroTrabajadoresAfiliadosSeguro'); },
        TxtNroTrabajadoresNoAfiliadosSeguro: function () { return $('#txtNroTrabajadoresNoAfiliadosSeguro'); },
        TxtNombreAseguradora: function () { return $('#txtNombreAseguradora'); },
        BtnBuscarEmpresaColaborador: function () { return $('#btnBuscarEmpresaInspeccion'); },
        BtnGuardarContratista: function () { return $('#btnGuardarContratista'); },
        BtnCancelarObservadorInterno: function () { return $('#btnCancelarObservadorInterno'); },
        BtnCancelarObservadorExterno: function () { return $('#btnCancelarObservadorExterno'); },        

        HdnCodigoEmpresaSubContratista: function () { return $('#hdnCodigoEmpresaSubContratista'); },
        TxtEmpresaSubContratista: function () { return $('#txtEmpresaSubContratista'); },
        BtnBuscarEmpresaColaboradorSubContratista: function () { return $('#btnBuscarEmpresaSubContratista'); },
        BtnGuardarSubContratista: function () { return $('#btnGuardarSubContratista'); },

        DlgFormularioEmpresaColaborador: null,
        DlgFormularioEmpresaColaboradorSubContratista: null,
        DlgFormularioIngresoAccion: null,
        DlgFormularioCausasRaices: null,
        DlgFormularioAnexoApendice: null,
        DlgFormularioDocumentoFoto: null,
        DlgFormularioVistaPreviaFoto: null,

        HdnCodigoColaboradorInterno: function () { return $('#hdnCodigoColaboradorInterno'); },
        TxtColaboradorInterno: function () { return $('#txtColaboradorInterno'); },
        BtnAgregarObservadorInterno: function () { return $('#btnAgregarObservadorInterno'); },
        SlcTipoObservador: function () { return $('#slcTipoObservador'); },

        BtnGuardarObservadorInterno: function () { return $('#btnGuardarObservadorInterno'); },
        DlgFormularioObservadorInterno: null,

        BtnGuardarObservadorExterno: function () { return $('#btnGuardarObservadorExterno'); },
        SlcTipoDocumento: function () { return $('#slcTipoDocumento'); },
        TxtNombres: function () { return $('#txtNombres'); },
        TxtApellidoPaterno: function () { return $('#txtApellidoPaterno'); },
        TxtApellidoMaterno: function () { return $('#txtApellidoMaterno'); },
        TxtNumeroDocumento: function () { return $('#txtNumeroDocumento'); },
        TxtCargoReferencial: function () { return $('#txtCargoReferencial'); },

        /*Tab: Hallazgo*/
        ValidadorHallazgo: null,
        CodigoHallazgo: null,
        GrdResultadoHallazgo: null,
        FrmHallazgo: function () { return $('#frmHallazgo'); },
        SlcNivelRiesgo: function () { return $('#slcNivelRiesgo'); },
        SlcLugarTrabajo: function () { return $('#slcLugarTrabajo'); },
        TxtDescripcionCorta: function () { return $('#txtDescripcionCorta'); },
        TxtDescripcionLarga: function () { return $('#txtDescripcionLarga'); },
        TxtDescripcionRiesgo: function () { return $('#txtDescripcionRiesgo'); },
        TxtLugarHallazgo: function () { return $('#txtLugarHallazgo'); },
        BtnSalirHallazgo: function () { return $('#btnSalirHallazgo'); },        
        BtnGuardarHallazgo: function () { return $('#btnGuardarHallazgo'); },

        HdnCodigoHallazgoAccion: function () { return $('#hdnCodigoHallazgoAccion'); },
        TxtDescripcionCortaHallazgoAccion: function () { return $('#txtDescripcionCortaHallazgoAccion'); },
        TxtDescripcionLargaHallazgoAccion: function () { return $('#txtDescripcionLargaHallazgoAccion'); },
        TxtNivelRiesgoAccion: function () { return $('#txtNivelRiesgoAccion'); },
        TxtDescripcionRiesgoHallazgoAccion: function () { return $('#txtDescripcionRiesgoHallazgoAccion'); },
        TxtLugarHallazgoAccion: function () { return $('#txtLugarHallazgoAccion'); },

        BtnAgregarAccion: function () { return $('#btnAgregarAccion'); },
        BtnAgregarCausas: function () { return $('#btnAgregarCausas'); },

        BtnAgregarConclusiones: function () { return $('#btnAgregarConclusiones'); },
        TxtConclusiones: function () { return $('#txtConclusiones'); },

        BtnAgregarAnexo: function () { return $('#btnAgregarAnexo'); },

        BtnAgregarFoto: function () { return $('#btnAgregarFoto'); },

        HdnCodigoEmpresa: function () { return $('#hdnCodigoEmpresa'); },
        HdnCodigoPais: function () { return $('#hdnCodigoPais'); },
        
    };

    base.Event = {
        BtnGridDownloadIntegradorTipoRegistroAnexoClick: function (row, data) {
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Base.Actions.DescargarIntegradorTipoRegistroAnexo, data);
        },
        ChkIndicadorSeguridadClick: function () {
            if ($(this).is(':checked') == true) {
                base.Control.ChkIndicadorSeguridad().val(true)
            }
            else {
                base.Control.ChkIndicadorSeguridad().val(false)
            }
        },
        ChkIndicadorSaludOcupacionalClick: function () {
            if ($(this).is(':checked') == true) {
                base.Control.ChkIndicadorSaludOcupacional().val(true)
            }
            else {
                base.Control.ChkIndicadorSaludOcupacional().val(false)
            }
        },
        ChkIndicadorGestionAmbientalClick: function () {
            if ($(this).is(':checked') == true) {
                base.Control.ChkIndicadorGestionAmbiental().val(true)
            }
            else {
                base.Control.ChkIndicadorGestionAmbiental().val(false)
            }
        },
        ChkIndicadorComunidadClick: function () {
            if ($(this).is(':checked') == true) {
                base.Control.ChkIndicadorComunidad().val(true)
            }
            else {
                base.Control.ChkIndicadorComunidad().val(false)
            }
        },       
        ChkIndicadorOtrosClick: function (evento) {
            if ($(this).is(':checked') == true) {
                base.Control.ChkIndicadorOtros().val(true)
                //base.Control.TxtTipoGestionOtros().show();                
                base.Control.TxtTipoGestionOtros().prop('disabled', false);
            }
            else {
                base.Control.ChkIndicadorOtros().val(false)
                //base.Control.TxtTipoGestionOtros().hide();
                base.Control.TxtTipoGestionOtros().val('');
                base.Control.TxtTipoGestionOtros().prop('disabled', true);
            }
        },
        BtnGridVistaPreviaFotoClick: function (row, data) {
            base.Control.DlgFormularioVistaPreviaFoto.Show(data);
        },
        BtnCancelarConclusionesClick: function () {
            base.Control.TxtConclusiones().val('');
        },
        BtnCancelarHallazgoClick: function () {
            base.Control.TxtDescripcionCorta().val('');
            base.Control.TxtDescripcionLarga().val('');
            base.Control.SlcNivelRiesgo().val('');
            base.Control.TxtDescripcionRiesgo().val('');
            base.Control.SlcLugarTrabajo().val('');
            base.Control.TxtLugarHallazgo().val('');
            },
        BtnCancelarObservadorInternoClick: function () {
            base.Control.SlcTipoObservador().val('');
            base.Control.TxtColaboradorInterno().val('');
            base.Control.HdnCodigoColaboradorInterno().val('');
        },
        BtnCancelarObservadorExternoClick: function () {
            base.Control.SlcTipoDocumento().val('');
            base.Control.TxtNumeroDocumento().val('');
            base.Control.TxtNombres().val('');
            base.Control.TxtApellidoPaterno().val('');
            base.Control.TxtApellidoMaterno().val('');
            base.Control.TxtCargoReferencial().val('');
        },        
        BtnRegresarBandejaInspeccionesClick: function () {
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Actions.BandejaInspecciones, {});
        },
        BtnGridDeleteDocumentoAnexoClick: function (row, data) {
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarIntegradorTipoRegistroFoto.data = data;
                    base.Ajax.AjaxEliminarIntegradorTipoRegistroFoto.submit();
                }
            });
        },
        BtnGridEditDocumentoAnexoClick: function (row, data) {
            data.IndicadorLectura = base.Control.FormularioModelo.Inspecciones.IndicadorLectura;
            //data.CodigoTipoAnexoEntidad = base.Control.FormularioModelo.Inspecciones.CodigoHallazgo;
            base.Control.DlgFormularioDocumentoFoto.Show(data);
        },
        BtnBuscarDocumentoFotoClick: function () {
            var filtro = {
                CodigoTipoAnexo: Pe.ElectroPeru.SGI.Presentacion.Core.Constante.DatosConstantes.ParametrosGenerales.CodigoTipoAnexoAdjunto,
                CodigoTipoAnexoEntidad: base.Control.FormularioModelo.Inspecciones.CodigoHallazgo,
            };
            base.Control.GrdResultadoAnexoFoto.Load(filtro);
        },
        BtnBuscarAnexoArchivoClick: function () {
            var filtro = {
                CodigoTipoAnexo: Pe.ElectroPeru.SGI.Presentacion.Core.Constante.DatosConstantes.ParametrosGenerales.CodigoTipoAnexoAdjunto,
                CodigoIntegradorTipoRegistro: base.Control.FormularioModelo.Inspecciones.CodigoIntegradorTipoRegistro,
            };
            base.Control.GrdResultadoAnexoApendice.Load(filtro);            
        },
        BtnGridEditIntegradorTipoRegistroAnexoClick: function (row, data) {
            data.IndicadorLectura = base.Control.FormularioModelo.Inspecciones.IndicadorLectura;
            data.CodigoTipoAnexoIntegrador = Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Index.Resource.TiposAnexosInspeccion;
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
        BtnAgregarFotoClick: function () {
            if (base.Control.FormularioModelo.Inspecciones.CodigoHallazgo != null) {
                base.Control.DlgFormularioDocumentoFoto.Show({
                    CodigoTipoAnexoEntidad: base.Control.FormularioModelo.Inspecciones.CodigoHallazgo,
                    IndicadorLectura: base.Control.FormularioModelo.Inspecciones.IndicadorLectura
                });
            }
        },
        BtnAgregarAnexoClick: function () {
            //if (base.Control.FormularioModelo.Inspecciones.CodigoIntegradorTipoRegistro != null) {
                base.Control.DlgFormularioAnexoApendice.Show({
                    CodigoIntegradorTipoRegistro: base.Control.FormularioModelo.Inspecciones.CodigoIntegradorTipoRegistro,
                    CodigoTipoAnexoIntegrador: Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Index.Resource.TiposAnexosInspeccion,
                    IndicadorLectura: base.Control.FormularioModelo.Inspecciones.IndicadorLectura
                });
            //}
        },
        BtnGridEditCausaRaizClick: function (row, data) {
            data.IndicadorLectura = base.Control.FormularioModelo.Inspecciones.IndicadorLectura;
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
        BtnAgregarCausasClick: function () {
            base.Control.DlgFormularioCausasRaices.Show({
                CodigoTipoCausaRaizEntidad: base.Control.FormularioModelo.Inspecciones.CodigoInspeccion,
                CodigoTipoCausaRaizParametro: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inspecciones,
                IndicadorLectura: base.Control.FormularioModelo.Inspecciones.IndicadorLectura
            });
        },
        BtnBuscarCausasRaices: function () {
            if (base.Control.FormularioModelo.Inspecciones.CodigoInspeccion != null) {
                base.Control.GrdResultadoCausas.Load({
                    CodigoTipoCausaRaizEntidad: base.Control.FormularioModelo.Inspecciones.CodigoInspeccion,
                });
            }
        },
        BtnGridDeleteSubContratistaClick: function (row, data) {
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    data.TipoContratista = Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Index.Resource.SubContratista;
                    base.Ajax.AjaxEliminarSubContratista.data = data;
                    base.Ajax.AjaxEliminarSubContratista.submit();
                }
            });
        },
        BtnGridDeleteObservadorInternoClick: function (row, data) {
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    data.TipoInspector = Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Index.Resource.Interno;
                    base.Ajax.AjaxEliminarObservador.data = data;
                    base.Ajax.AjaxEliminarObservador.submit();
                }
            });
        },
        BtnGridDeleteObservadorExternoClick: function (row, data) {
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    data.TipoInspector = Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Index.Resource.Externo;
                    base.Ajax.AjaxEliminarObservador.data = data;
                    base.Ajax.AjaxEliminarObservador.submit();
                }
            });
        },
        BtnGridDeleteAreaInspeccionClick: function (row, data) {
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarAreaInspeccion.data = data;
                    base.Ajax.AjaxEliminarAreaInspeccion.submit();
                }
            });
        },
        BtnGridDeleteAccionesClick: function (row, data) {
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarRecordAccion.data = data;
                    base.Ajax.AjaxEliminarRecordAccion.submit();
                }
            });
        },
        BtnGridEditAccionesClick: function (row, data) {
            data.CodigoTipoRegistroParametro = Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inspecciones;
            data.CodigoTipoOcurrenciaParametro = Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.TipoOcurrenciaAccion.Hallazgo;
            data.NumeroRecord = base.Control.TxtNumeroInspeccion().val();
            data.CodigoEstadoAccion = Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Abierto;
            data.IndicadorLectura = (base.Control.FormularioModelo.Inspecciones.EstadoInspeccion == Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Index.Resource.EstadoInspeccionCerrado ? true : false)
            base.Control.DlgFormularioIngresoAccion.Show(data);
        },
        BtnGridVerAccionesClick: function (row, data) {
            data.CodigoTipoRegistroParametro = Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inspecciones;
            data.CodigoTipoOcurrenciaParametro = Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.TipoOcurrenciaAccion.Hallazgo;
            data.NumeroRecord = base.Control.TxtNumeroInspeccion().val();
            data.CodigoEstadoAccion = Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Abierto;
            data.IndicadorLectura = true;
            base.Control.DlgFormularioIngresoAccion.Show(data);
        },
        BtnBuscarAccionesClick: function () {
            if (base.Control.FormularioModelo.Inspecciones.CodigoIntegradorTipoRegistro != null) {
                base.Control.GrdResultadoAcciones.Load({
                    CodigoIntegradorTipoRegistro: base.Control.FormularioModelo.Inspecciones.CodigoIntegradorTipoRegistro,
                    CodigoTipoOcurrenciaEntidad: base.Control.FormularioModelo.Inspecciones.CodigoHallazgo
                });
            }
        },
        BtnBuscarEmpresaContratista: function () {
            if (base.Control.FormularioModelo.Inspecciones.CodigoInspeccion != null) {
                var data = {
                    CodigoInspeccion: base.Control.FormularioModelo.Inspecciones.CodigoInspeccion,
                    TipoContratista: Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Index.Resource.Empleador
                };                
            }
            base.Ajax.AjaxBuscarEmpresaContratista.data = data;
            base.Ajax.AjaxBuscarEmpresaContratista.submit();
        },
        /*Tab: Hallazgo*/
        BtnGrabarHallazgoClick: function () {
            'use strict'
            if (base.Control.ValidadorHallazgo.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    indicadorModal: false,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarHallazgo.data = {
                            CodigoHallazgo: base.Control.CodigoHallazgo,
                            CodigoIntegradorTipoRegistro: base.Control.FormularioModelo.Inspecciones.CodigoIntegradorTipoRegistro,
                            CodigoNivelRiesgo: base.Control.SlcNivelRiesgo().val(),
                            DescripcionCorta: base.Control.TxtDescripcionCorta().val(),
                            DescripcionLarga: base.Control.TxtDescripcionLarga().val(),
                            DescripcionRiesgo: base.Control.TxtDescripcionRiesgo().val(),
                            CodigoLugarTrabajo: base.Control.SlcLugarTrabajo().val(),
                            DescripcionLugarHallazgo: base.Control.TxtLugarHallazgo().val()
                        };
                        base.Ajax.AjaxGrabarHallazgo.submit();
                    }
                });
            }
            else {
                $("#frmHallazgoSummaryErrorMessage").empty();
                $("#frmHallazgoSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnBuscarHallazgoClick: function () {
            'use strict'
            var filtro = {
                CodigoIntegradorTipoRegistro: base.Control.FormularioModelo.Inspecciones.CodigoIntegradorTipoRegistro,
            };
            $("#divGrdResultadoHallazgo").empty();
            base.Function.CrearGridHallazgo();
            base.Control.GrdResultadoHallazgo.Load(filtro);
        },
        BtnGridEditHallazgoClick: function (row, data) {
            var filtro = {
                CodigoHallazgo: data.CodigoHallazgo,
            };
            base.Ajax.AjaxEditHallazgo.data = filtro;
            base.Ajax.AjaxEditHallazgo.submit();
        },
        BtnGridDeleteHallazgoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarHallazgo.data = {
                        CodigoHallazgo: data.CodigoHallazgo,
                    };
                    base.Ajax.AjaxEliminarHallazgo.submit();
                }
            });
        },
        BtnGridAgregarAccionesClick: function (row, data) {
            $('#cartTabsInspecciones a[href="#tabAcciones"]').tab('show');
            base.Control.HdnCodigoHallazgoAccion().val(data.CodigoHallazgo);
            base.Control.TxtDescripcionCortaHallazgoAccion().val(data.DescripcionCorta);
            base.Control.TxtDescripcionLargaHallazgoAccion().val(data.DescripcionLarga);
            base.Control.TxtNivelRiesgoAccion().val(data.DescripcionNivelRiesgo);
            base.Control.TxtDescripcionRiesgoHallazgoAccion().val(data.DescripcionRiesgo);
            base.Control.TxtLugarHallazgoAccion().val(data.DescripcionLugarHallazgo);
            base.Control.FormularioModelo.Inspecciones.CodigoHallazgo = data.CodigoHallazgo;
        },
        BtnGridAgregarFotosClick: function (row, data) {
            $('#cartTabsInspecciones a[href="#tabFotos"]').tab('show');
            base.Control.HdnCodigoHallazgoAccion().val(data.CodigoHallazgo);
            //base.Control.TxtDescripcionCortaHallazgoAccion().val(data.DescripcionCorta);
            //base.Control.TxtDescripcionLargaHallazgoAccion().val(data.DescripcionLarga);
            //base.Control.TxtNivelRiesgoAccion().val(data.DescripcionNivelRiesgo);
            //base.Control.TxtDescripcionRiesgoHallazgoAccion().val(data.DescripcionRiesgo);
            //base.Control.TxtLugarHallazgoAccion().val(data.DescripcionLugarHallazgo);
            base.Control.FormularioModelo.Inspecciones.CodigoHallazgo = data.CodigoHallazgo;
        },
        BtnBuscarResponsableArea: function () {
            base.Control.GrdResponsableArea.Load({
                CodigoInspeccion: base.Control.FormularioModelo.Inspecciones.CodigoInspeccion
            });
        },
        BtnBuscarEmpresaSubContratistas: function () {
            base.Control.GrdResultadoSubcontratistas.Load({
                CodigoInspeccion: base.Control.FormularioModelo.Inspecciones.CodigoInspeccion,
                TipoContratista: Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Index.Resource.SubContratista
            });
        },
        BtnBuscarObservadorInterno: function () {
            base.Control.GrdResultadoObservadorInterno.Load({
                CodigoInspeccion: base.Control.FormularioModelo.Inspecciones.CodigoInspeccion,
                TipoInspector: Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Index.Resource.Interno
            });
        },
        BtnBuscarObservadorExterno: function () {
            base.Control.GrdResultadoObservadorExterno.Load({
                CodigoInspeccion: base.Control.FormularioModelo.Inspecciones.CodigoInspeccion,
                TipoInspector: Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Index.Resource.Externo
            });
        },
        BtnBuscarAcciones: function () {
            base.Control.GrdResultadoAcciones.Load();
        },
        BtnBuscarRecordCausaRaiz: function () {
            base.Control.GrdResultadoCausas.Load();
        },          
        SlcProyectoChange: function () {
            base.Control.SlcDepartamento().empty();
            base.Control.SlcDepartamento().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));

            //var texto = base.Control.SlcProyecto().val().split('/');            
            //var nombreEmpresa = texto[1];
            //var nombrePais = texto[2];
            
            base.Control.TxtEmpresa().val('');
            base.Control.TxtPais().val('');

            base.Control.SlcArea().empty();
            base.Control.SlcArea().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));

            //base.Control.SlcProcedimiento().empty();
            //base.Control.SlcProcedimiento().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));

            if (base.Control.SlcProyecto().val() != '') {
                base.Ajax.AjaxBuscarDepartamento.data = {
                    CodigoProyecto: base.Control.SlcProyecto().val()
                };
                base.Ajax.AjaxBuscarDepartamento.submit();

                base.Ajax.AjaxBuscarEmpresaPais.data = {
                    CodigoProyecto: base.Control.SlcProyecto().val()
                };
                base.Ajax.AjaxBuscarEmpresaPais.submit();
            }
        },
        SlcDepartamentoChange: function () {
            base.Control.SlcArea().empty();
            base.Control.SlcArea().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));

            if (base.Control.SlcDepartamento().val() != '') {
                base.Ajax.AjaxBuscarArea.data = {
                    CodigoDepartamento: base.Control.SlcDepartamento().val()
                };
                base.Ajax.AjaxBuscarArea.submit();
            }
        },
        SlcAreaChange: function () {           
            base.Control.TxtResponsableArea().val('');
            if (base.Control.SlcArea().val() != '') {                
                base.Ajax.AjaxBuscarResponsableArea.data = {
                    CodigoArea: base.Control.SlcArea().val(),
                    CodigoDepartamento: base.Control.SlcDepartamento().val()
                };
                base.Ajax.AjaxBuscarResponsableArea.submit();
            }
        },
        SlcTipoInspeccionChange: function () {           
            if (base.Control.SlcTipoInspeccion().val() == '3') {
                //base.Control.TxtTipoInspeccionOtros().show();
                base.Control.TxtTipoInspeccionOtros().prop('disabled', false);
            } else {
                //base.Control.TxtTipoInspeccionOtros().hide();
                base.Control.TxtTipoInspeccionOtros().prop('disabled', true);
                base.Control.TxtTipoInspeccionOtros().val('');
            }
        },
        SlcFuenteInspeccionChange: function () {
            if (base.Control.SlcFuenteInspeccion().val() == '4') {
                //base.Control.TxtFuenteInspeccionOtros().show();
                base.Control.TxtFuenteInspeccionOtros().prop('disabled', false);
            } else {
                //base.Control.TxtFuenteInspeccionOtros().hide();
                base.Control.TxtFuenteInspeccionOtros().prop('disabled', true);
                base.Control.TxtFuenteInspeccionOtros().val('');
            }
        },
        AnularInspeccion: function ()  {
            if (((base.Control.FormularioModelo.Inspecciones.EstadoInspeccion == Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Index.Resource.EstadoInspeccionAbierto) || (base.Control.FormularioModelo.Inspecciones.EstadoInspeccion == Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Index.Resource.EstadoInspeccionReAbierto)) && base.Control.FormularioModelo.Inspecciones.CodigoHallazgo == null) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.EtiquetaMensajeAnular,
                    onAccept: function () {
                        base.Ajax.AjaxAnularInspeccion.data = {
                            CodigoInspeccion: base.Control.FormularioModelo.Inspecciones.CodigoInspeccion
                        };
                        base.Ajax.AjaxAnularInspeccion.submit();
                    }
                });
            }
        },
        BtnGuardarGeneralesClick: function () {
            //var texto = base.Control.SlcProyecto().val().split('/');
            //var codProyecto = texto[0];
            if (base.Control.ValidadorGenerales.isValid()) {
                var listaInspeccionGestion = [];
                $('.checkboxClass:checked').each(function (i) {
                    var that = $(this).val();
                    if (that == Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.DatosConstantes.CheckOtros) {
                        listaInspeccionGestion.push({
                            TipoGestion: that,
                            TipoGestionOtros: base.Control.TxtTipoGestionOtros().val()
                        });
                    }
                    else {
                        listaInspeccionGestion.push({
                            TipoGestion: that
                        });
                    }
                });

                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarInspeccion.data = {
                            CodigoInspeccion: base.Control.FormularioModelo.Inspecciones.CodigoInspeccion,
                            CodigoProyecto: base.Control.SlcProyecto().val(),
                            NumeroInspeccion: base.Control.TxtNumeroInspeccion().val(),
                            CodigoEmpresa: base.Control.HdnCodigoEmpresa().val(),
                            NombreEmpresa: base.Control.TxtEmpresa().val(),
                            CodigoPais: base.Control.HdnCodigoPais().val(),
                            NombrePais: base.Control.TxtPais().val(),                                                        
                            TituloRegistro: base.Control.TxtTituloRegistro().val(),
                            FechaEjecucion: base.Control.DtpFechaEjecucion().val(),
                            Objetivo: base.Control.TxtObjetivo().val(),
                            TipoInspeccion: base.Control.SlcTipoInspeccion().val(),
                            TipoInspeccionOtros: base.Control.TxtTipoInspeccionOtros().val(),
                            FuenteInspeccion: base.Control.SlcFuenteInspeccion().val(),
                            FuenteInspeccionOtros: base.Control.TxtFuenteInspeccionOtros().val(),
                            HoraInspeccion: base.Control.SlcHoraInspeccion().val(),
                            MinutoInspeccion: base.Control.SlcMinutoInspeccion().val(),
                            ConclusionesRecomendaciones: base.Control.TxtConclusiones().val(),
                            ListaInspeccionGestion: listaInspeccionGestion
                        };
                        base.Ajax.AjaxRegistrarInspeccion.submit();
                    }
                });
            } else {
                $("#frmGeneralesSummaryErrorMessage").empty();
                $("#frmGeneralesSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnAgregarAreaClick: function () {
            if (base.Control.ValidadorArea.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarInspeccionArea.data = {
                            CodigoInspeccion: base.Control.FormularioModelo.Inspecciones.CodigoInspeccion,                            
                            CodigoDepartamento: base.Control.SlcDepartamento().val(),
                            CodigoArea: base.Control.SlcArea().val(),
                            LugarExacto: base.Control.TxtLugarExacto().val(),
                            NombreResponsable: base.Control.TxtResponsableArea().val(),
                        };
                        base.Ajax.AjaxRegistrarInspeccionArea.submit();
                    }
                });
            } else {
                $("#frmInspeccionAreaSummaryErrorMessage").empty();
                $("#frmInspeccionAreaSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnBuscarEmpresaColaboradorClick: function () {
            'use strict'
            base.Control.DlgFormularioEmpresaColaborador.Show(false, [], { EstadoRegistro: '1' });
        },
        BtnBuscarEmpresaColaboradorSubContratistaClick: function () {
            'use strict'
            base.Control.DlgFormularioEmpresaColaboradorSubContratista.Show(false, [], { EstadoRegistro: '1' });
        },
        BtnAgregarObservadorInternoClick: function () {
            'use strict'
            base.Control.DlgFormularioObservadorInterno.Show();
        },
        ObtenerEmpresaColaborador: function (empresa) {
            'use strict'
            if (empresa != undefined) {
                base.Control.TxtEmpresaContratista().val(empresa[0].RazonSocial);
                base.Control.HdnCodigoEmpresaContratista().val(empresa[0].CodigoEmpresa);
                base.Control.TxtRUC().val(empresa[0].Ruc);
                base.Control.TxtDomicilioFiscal().val(empresa[0].Direccion);
                base.Control.TxtDuenioContrato().val(empresa[0].NombreDuenioContrato);
                base.Control.TxtActividadEconomica().val(empresa[0].ActividadEconomica);
                base.Control.TxtNroTrabajadoresCL().val(empresa[0].NumeroTrabajadores);
                base.Control.TxtPreguntaAltoRiesgo().val(empresa[0].NombreAltoRiesgo);
                base.Control.TxtNroTrabajadoresAfiliadosSeguro().val(empresa[0].NumeroTrabajadoresAfiliados);
                base.Control.TxtNroTrabajadoresNoAfiliadosSeguro().val(empresa[0].NumeroTrabajadoresNoAfiliados);
                base.Control.TxtNombreAseguradora().val(empresa[0].NombreAseguradora);
            }
            else {
                base.Control.TxtNombreEmpresaColaborador().val('');
                base.Control.HddCodigoEmpresaColaborador().val('');
                base.Control.TxtRUC().val('');
                base.Control.TxtDomicilioFiscal().val('');
                base.Control.TxtDuenioContrato().val('');
                base.Control.TxtActividadEconomica().val('');
                base.Control.TxtNroTrabajadoresCL().val('');
                base.Control.TxtPreguntaAltoRiesgo().val('');
                base.Control.TxtNroTrabajadoresAfiliadosSeguro().val('');
                base.Control.TxtNroTrabajadoresNoAfiliadosSeguro().val('');
                base.Control.TxtNombreAseguradora().val('');
            }
        },
        ObtenerEmpresaColaboradorSubContratista: function (empresa) {
            'use strict'
            if (empresa != undefined) {
                base.Control.TxtEmpresaSubContratista().val(empresa[0].RazonSocial);
                base.Control.HdnCodigoEmpresaSubContratista().val(empresa[0].CodigoEmpresa);
            }
            else {
                base.Control.TxtEmpresaSubContratista().val('');
                base.Control.HdnCodigoEmpresaSubContratista().val('');
            }
        },
        ObtenerObservadorInterno: function (colaborador) {
            'use strict'
            if (colaborador != undefined) {
                base.Control.TxtColaboradorInterno().val(colaborador[0].NombreCompletoColaborador);
                base.Control.HdnCodigoColaboradorInterno().val(colaborador[0].CodigoColaborador);
            }
            else {
                base.Control.TxtColaboradorInterno().val('');
                base.Control.HdnCodigoColaboradorInterno().val('');
            }
        },
        BtnGuardarContratistaClick: function () {
            if (base.Control.TxtEmpresaContratista().val() != '' && base.Control.TxtNumeroInspeccion().val() != '') {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarInspeccionContratista.data = {
                            CodigoEmpresa: base.Control.HdnCodigoEmpresaContratista().val(),
                            CodigoInspeccion: base.Control.FormularioModelo.Inspecciones.CodigoInspeccion,
                            TipoContratista: Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Index.Resource.Empleador
                        };
                        base.Ajax.AjaxRegistrarInspeccionContratista.submit();
                    }
                });
            } else {
                $("#frmGeneralesSummaryErrorMessage").empty();
                $("#frmGeneralesSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnGuardarSubContratistaClick: function () {
            if (base.Control.TxtEmpresaSubContratista().val() != '' && base.Control.TxtNumeroInspeccion().val() != '') {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarInspeccionSubContratista.data = {
                            CodigoEmpresa: base.Control.HdnCodigoEmpresaSubContratista().val(),
                            CodigoInspeccion: base.Control.FormularioModelo.Inspecciones.CodigoInspeccion,
                            TipoContratista: Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Index.Resource.SubContratista
                        };
                        base.Ajax.AjaxRegistrarInspeccionSubContratista.submit();
                    }
                });
            } else {
                $("#frmGeneralesSummaryErrorMessage").empty();
                $("#frmGeneralesSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnGuardarObservadorInternoClick: function () {
            if (base.Control.ValidadorInspector.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarInspeccionInspector.data = {
                            CodigoColaborador: base.Control.HdnCodigoColaboradorInterno().val(),
                            CodigoInspeccion: base.Control.FormularioModelo.Inspecciones.CodigoInspeccion,
                            TipoObservador: base.Control.SlcTipoObservador().val(),
                            TipoInspector: Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Index.Resource.Interno
                        };
                        base.Ajax.AjaxRegistrarInspeccionInspector.submit();
                    }
                });
            } else {
                $("#frmGeneralesSummaryErrorMessage").empty();
                $("#frmGeneralesSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnGuardarObservadorExternoClick: function () {
            if (base.Control.ValidadorInspectorExterno.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarInspeccionInspectorExterno.data = {                            
                            CodigoInspeccion: base.Control.FormularioModelo.Inspecciones.CodigoInspeccion,                            
                            TipoInspector: Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Index.Resource.Externo,
                            Nombres: base.Control.TxtNombres().val(),
                            ApellidoPaterno: base.Control.TxtApellidoPaterno().val(),
                            ApellidoMaterno: base.Control.TxtApellidoMaterno().val(),
                            CodigoTipoDocumento: base.Control.SlcTipoDocumento().val(),
                            NumeroDocumento: base.Control.TxtNumeroDocumento().val(),
                            CargoReferencial: base.Control.TxtCargoReferencial().val()
                        };
                        base.Ajax.AjaxRegistrarInspeccionInspectorExterno.submit();
                    }
                });
            } else {
                $("#frmGeneralesSummaryErrorMessage").empty();
                $("#frmGeneralesSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnAgregarAccionClick: function () {
            base.Control.DlgFormularioIngresoAccion.Show({
                TituloFormulario: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaFormularioIngresoAcciones,
                IndicadorLectura: base.Control.FormularioModelo.Inspecciones.IndicadorLectura,
                CodigoIntegradorTipoRegistro: base.Control.FormularioModelo.Inspecciones.CodigoIntegradorTipoRegistro,
                CodigoTipoRegistroParametro: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inspecciones,
                CodigoEstadoAccion: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Abierto,
                NumeroRecord: base.Control.TxtNumeroInspeccion().val(),
                CodigoTipoOcurrenciaParametro: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.TipoOcurrenciaAccion.Hallazgo,
                CodigoTipoOcurrenciaEntidad: base.Control.FormularioModelo.Inspecciones.CodigoHallazgo,
            });
        },
        ValidateLectura: function (data, type, full) {
            if (base.Control.FormularioModelo.Inspecciones.IndicadorLectura)
                return false;
            else
                return true;
        }
    };
    base.AjaxSuccess = {
        AjaxEliminarIntegradorTipoRegistroFotoSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
                base.Event.BtnBuscarDocumentoFotoClick();
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
        AjaxAnularInspeccionSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Actions.BandejaInspeccion, {});
            }
            else if (resultado.Result == '-2') {
                base.Control.Mensaje.Warning({
                    message: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.MensajeErrorAnulacion
                });
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
        AjaxEliminarObservadorSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
                base.Event.BtnBuscarObservadorInterno();
                base.Event.BtnBuscarObservadorExterno()
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxEliminarSubContratistaSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
                base.Event.BtnBuscarEmpresaSubContratistas();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxEliminarAreaInspeccionSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
                base.Event.BtnBuscarResponsableArea();
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
        AjaxBuscarDepartamentoSuccess: function (resultado) {
            $.each(resultado.Result, function (index, value) {
                base.Control.SlcDepartamento().attr('validable', 'required Validar');
                base.Control.SlcDepartamento().append(new Option(value.NombreDepartamento, value.CodigoDepartamento));
            });
        },
        AjaxBuscarEmpresaPaisSuccess: function (resultado) {           
            base.Control.TxtEmpresa().val(resultado.Result[0].NombreEmpresa);
            base.Control.TxtPais().val(resultado.Result[0].NombrePais);
            base.Control.HdnCodigoEmpresa().val(resultado.Result[0].CodigoEmpresa);
            base.Control.HdnCodigoPais().val(resultado.Result[0].CodigoPais);
        },
        AjaxBuscarResponsableAreaSuccess: function (resultado) {
            base.Control.TxtResponsableArea().val(resultado.Result[0].NombreColaboradorResponsable);            
        },
        AjaxBuscarAreaSuccess: function (resultado) {
            $.each(resultado.Result, function (index, value) {
                base.Control.SlcArea().attr('validable', 'required Validar');
                base.Control.SlcArea().append(new Option(value.NombreArea, value.CodigoArea));
            });
        },
        AjaxRegistrarInspeccionSuccess: function (resultado) {

            if (resultado.IsSuccess == true) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                if (resultado.Result != null) {
                        base.Control.TxtNumeroInspeccion().val(resultado.Result.NumeroInspeccion);
                        base.Control.FormularioModelo.Inspecciones.CodigoInspeccion = resultado.Result.CodigoInspeccion;
                        base.Control.FormularioModelo.Inspecciones.CodigoIntegradorTipoRegistro = resultado.Result.CodigoIntegradorTipoRegistro;                        
                }
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxRegistrarInspeccionAreaSuccess: function (resultado) {
            if (resultado.IsSuccess && resultado.Result != null && resultado.Result.CodigoInspeccion != null) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnBuscarResponsableArea();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxRegistrarInspeccionContratistaSuccess: function (resultado) {
            if (resultado.IsSuccess && resultado.Result != null && resultado.Result.CodigoInspeccion != null) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });                
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxRegistrarInspeccionSubContratistaSuccess: function (resultado) {
            if (resultado.IsSuccess && resultado.Result != null && resultado.Result.CodigoInspeccion != null) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });                
                base.Event.BtnBuscarEmpresaSubContratistas();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxRegistrarInspeccionInspectorSuccess: function (resultado) {
            //if (resultado.IsSuccess && resultado.Result != null && resultado.Result.CodigoInspeccion != null) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnBuscarObservadorInterno();
            //}
            //else {
            //    base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            //}
        },
        AjaxRegistrarInspeccionInspectorExternoSuccess: function (resultado) {
            //if (resultado.IsSuccess && resultado.Result != null && resultado.Result.CodigoInspeccion != null) {
            base.Control.Mensaje.Information({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
            });
            base.Event.BtnBuscarObservadorExterno();
            //}
            //else {
            //    base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            //}
        },
        /*Tab: Hallazgo*/
        AjaxGrabarHallazgoSuccess: function (resultado) {
            if (resultado.IsSuccess == true) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                if (resultado.Result != null) {                    
                    base.Control.FormularioModelo.Inspecciones.CodigoHallazgo = resultado.Result.CodigoHallazgo;
                }
                base.Event.BtnBuscarHallazgoClick();
            }            
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxEditHallazgoSuccess: function (resultado) {
            if (resultado.IsSuccess == true) {
                base.Control.CodigoHallazgo = resultado.Result.CodigoHallazgo;
                base.Control.SlcNivelRiesgo().val(resultado.Result.CodigoNivelRiesgo);
                base.Control.TxtDescripcionCorta().val(resultado.Result.DescripcionCorta);
                base.Control.TxtDescripcionLarga().val(resultado.Result.DescripcionLarga);
                base.Control.TxtDescripcionRiesgo().val(resultado.Result.DescripcionRiesgo);
                base.Control.SlcLugarTrabajo().val(resultado.Result.CodigoLugarTrabajo);
                base.Control.TxtLugarHallazgo().val(resultado.Result.DescripcionLugarHallazgo)
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
        AjaxBuscarEmpresaContratistaSuccess: function (resultado) {
            if (resultado.Result[0] != null) {
                base.Control.TxtEmpresaContratista().val(resultado.Result[0].RazonSocial);
                base.Control.HdnCodigoEmpresaContratista().val(resultado.Result[0].CodigoEmpresa);
                base.Control.TxtRUC().val(resultado.Result[0].Ruc);
                base.Control.TxtDomicilioFiscal().val(resultado.Result[0].Direccion);
                base.Control.TxtDuenioContrato().val(resultado.Result[0].NombreDuenioContrato);
                base.Control.TxtActividadEconomica().val(resultado.Result[0].ActividadEconomica);
                base.Control.TxtNroTrabajadoresCL().val(resultado.Result[0].NumeroTrabajadores);
                base.Control.TxtPreguntaAltoRiesgo().val(resultado.Result[0].NombreAltoRiesgo);
                base.Control.TxtNroTrabajadoresAfiliadosSeguro().val(resultado.Result[0].NumeroTrabajadoresAfiliados);
                base.Control.TxtNroTrabajadoresNoAfiliadosSeguro().val(resultado.Result[0].NumeroTrabajadoresNoAfiliados);
                base.Control.TxtNombreAseguradora().val(resultado.Result[0].NombreAseguradora);              
            }
        },
        AjaxEliminarHallazgoSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
                base.Event.BtnBuscarHallazgoClick();
            }
            else if (resultado.Result == '-2') {
                base.Control.Mensaje.Warning({
                    message: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.MensajeValidacionHallazgos
                });
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
    };
    base.Ajax = {
        AjaxEliminarIntegradorTipoRegistroFoto: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.EliminarDocumentoAnexo,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarIntegradorTipoRegistroFotoSuccess
        }),
        AjaxEliminarIntegradorTipoRegistroAnexo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.EliminarIntegradorTipoRegistroAnexo,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarIntegradorTipoRegistroAnexoSuccess
        }),
        AjaxAnularInspeccion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Actions.AnularInspeccion,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxAnularInspeccionSuccess
        }),
        AjaxEliminarRecordCausaRaiz: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.EliminarRecordCausaRaiz,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarRecordCausaRaizSuccess
        }),
        AjaxEliminarObservador: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Actions.EliminarInspeccionInspector,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarObservadorSuccess
        }),
        AjaxEliminarSubContratista: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Actions.EliminarInspeccionContratista,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarSubContratistaSuccess
        }),
        AjaxEliminarAreaInspeccion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Actions.EliminarInspeccionArea,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarAreaInspeccionSuccess
        }),
        AjaxEliminarRecordAccion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.EliminarRecordAccion,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarRecordAccionSuccess
        }),
        AjaxBuscarDepartamento: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Actions.BuscarDepartamento,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxBuscarDepartamentoSuccess
        }),
        AjaxBuscarEmpresaPais: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Actions.BuscarProyecto,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxBuscarEmpresaPaisSuccess
        }),
        AjaxBuscarResponsableArea: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Actions.BuscarAreaGrilla,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxBuscarResponsableAreaSuccess
        }),
        AjaxBuscarArea: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Actions.BuscarArea,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxBuscarAreaSuccess
        }),
        AjaxRegistrarInspeccion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Actions.RegistrarInspeccion,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarInspeccionSuccess
        }),
        AjaxRegistrarInspeccionArea: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Actions.RegistrarInspeccionArea,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarInspeccionAreaSuccess
        }),
        AjaxRegistrarInspeccionContratista: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Actions.RegistrarInspeccionContratista,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarInspeccionContratistaSuccess
        }),
        AjaxRegistrarInspeccionSubContratista: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Actions.RegistrarInspeccionContratista,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarInspeccionSubContratistaSuccess
        }),
        AjaxRegistrarInspeccionInspector: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Actions.RegistrarInspeccionInspector,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarInspeccionInspectorSuccess
        }),
        AjaxRegistrarInspeccionInspectorExterno: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Actions.RegistrarInspeccionInspector,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarInspeccionInspectorExternoSuccess
        }),
        /*Tab: Hallazgo*/
        AjaxGrabarHallazgo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.RegistrarHallazgo,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxGrabarHallazgoSuccess
        }),
        AjaxEditHallazgo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.ObtenerHallazgoPorCodigo,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEditHallazgoSuccess
        }),
        AjaxBuscarEmpresaContratista: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Actions.BuscarInspeccionContratista,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxBuscarEmpresaContratistaSuccess
        }),
        AjaxEliminarHallazgo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Actions.EliminarHallazgosInspeccion,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarHallazgoSuccess
        }),
    };
    
    base.Function = {
        CrearGridEmpresaSubContratista: function () {
            var columns = [];
            //columns.push({
            //    data: 'RazonSocial',
            //    title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridItem,
            //    width: "5%"
            //});
            columns.push({
                data: 'RazonSocial',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridRazonSocial,
                width: "15%"
            });
            columns.push({
                data: 'Ruc',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridRUC,
                width: "15%"
            });
            columns.push({
                data: 'Direccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridDomicilio,
                width: "15%"
            });
            columns.push({
                data: 'NombreDuenioContrato',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridDuenio,
                width: "15%"
            });
            columns.push({
                data: 'ActividadEconomica',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridActividadEconomica,
                width: "15%"
            });
            columns.push({
                data: 'NombreAltoRiesgo',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridAltoRiesgo,
                width: "15%"
            });
            columns.push({
                data: 'NumeroTrabajadoresAfiliados',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridNumeroTrabajadoresAfiliados,
                width: "15%"
            });
            columns.push({
                data: 'NumeroTrabajadoresNoAfiliados',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridNumeroTrabajadoresNoAfiliados,
                width: "15%"
            });
            columns.push({
                data: 'NombreAseguradora',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridNombreAseguradora,
                width: "15%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.ValidateLectura, event: { on: 'click', callBack: base.Event.BtnGridDeleteSubContratistaClick } }
                ]
            });
            base.Control.GrdResultadoSubcontratistas = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoSubcontratistas',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Actions.BuscarInspeccionContratista,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        },
        CrearGridObservadorInterno: function () {
            var columns = new Array();
            columns.push({
                data: 'NombreTipoObservador',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridTipoInspector,
                width: "10%"
            });
            columns.push({
                data: 'NombresApellidos',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridApellidosyNombres,
                width: "10%"
            });
            columns.push({
                data: 'NombreTipoDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridTipoDocumento,
                width: "10%"
            });
            columns.push({
                data: 'NumeroDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridNumeroDocumento,
                width: "15%"
            });
            columns.push({
                data: 'RazonSocial',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridEmpresa,
                width: "10%"
            });
            columns.push({
                data: 'NombreProyectoUsuario',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridProyecto,
                width: "10%"
            });
            columns.push({
                data: 'NombreArea',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridArea,
                width: "10%"
            });
            columns.push({
                data: 'NombrePuestoTrabajo',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridPuestoTrabajo,
                width: "5%"
            });
            columns.push({
                data: 'ExperienciaPuesto',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridTiempoPuestoTrabajo,
                width: "15%"
            });
            columns.push({
                data: 'ExperienciaNegocio',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridExperienciaNegocio,
                width: "15%"
            });
            columns.push({
                data: 'TiempoProyecto',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridTiempoProyecto,
                width: "15%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.ValidateLectura, event: { on: 'click', callBack: base.Event.BtnGridDeleteObservadorInternoClick } }
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
                    url: Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Actions.BuscarInspeccionInspector,
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
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridApellidosyNombres,
                width: "10%"
            });
            columns.push({
                data: 'NombreTipoDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridTipoDocumento,
                width: "10%"
            });
            columns.push({
                data: 'NumeroDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridNumeroDocumento,
                width: "15%"
            });
            columns.push({
                data: 'CargoReferencial',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridCargoReferencial,
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
                    url: Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Actions.BuscarInspeccionInspector,
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
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridNumeroAccion,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionCorta',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridDescripcionCortaAccion,
                width: "10%"
            });
            columns.push({
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridDescripcionLargaAccion,
                width: "10%"
            });
            columns.push({
                data: 'NombreColaboradorPlanteaAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridPlanteadaPor,
                width: "10%"
            });
            columns.push({
                data: 'FechaAccionPlanteadaString',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridFechaPlanteada,
                width: "10%"
            });
            columns.push({
                data: 'NombreColaboradorResponsable',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridResponsable,
                width: "10%"
            });
            columns.push({
                data: 'FechaVencimientoString',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridFechaVencimiento,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionEstadoAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridEstadoDeAccion,
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
        CrearGridFotos: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridItem,
                width: "10%"
            });
            columns.push({
                data: 'Nombre',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridNombreArchivo,
                width: "10%"
            });
            columns.push({
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridDescripcion,
                width: "10%"
            });
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridVistaPreviaFoto,
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
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditDocumentoAnexoClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.ValidateLectura, event: { on: 'click', callBack: base.Event.BtnGridDeleteDocumentoAnexoClick } }
                ]
            });
            base.Control.GrdResultadoAnexoFoto = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoAnexoFoto',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.BuscarDocumentoAnexo, //Pe.ElectroPeru.SGI.Presentacion.Base.Actions.BuscarDocumentoAnexo
                    source: 'Result'
                }
            });
        },
        CrearGridCausaRaiz: function () {
            var columns = new Array();
            columns.push({
                data: 'CodigoGenerado',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridCodigo,
                width: "10%"
            });
            columns.push({
                data: 'NombreCategoria',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridCategoria,
                width: "10%"
            });
            columns.push({
                data: 'NombreSubCategoria',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridSubCategoria,
                width: "10%"
            });
            columns.push({
                data: 'NombreCausaRaiz',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridCausaRaiz,
                width: "15%"
            });
            columns.push({
                data: 'Comentario',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridComentario,
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
        CrearGridAnexoApendice: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridItem,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionTipoApendice',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridTipo,
                width: "20%"
            });
            columns.push({
                data: 'Nombre',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridNombreArchivo,
                width: "30%"
            });
            columns.push({
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridDescripcion,
                width: "30%"
            });
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridDescargar,
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
        CrearGridAreaInspeccionada: function () {
            var columns = new Array();
            columns.push({
                data: 'NombreArea',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridArea,
                width: "20%"
            });
            columns.push({
                data: 'NombreResponsable',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.EtiquetaResponsableArea,
                width: "20%"
            });
            columns.push({
                data: 'LugarExacto',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.GridLugarExacto,
                width: "20%"
            });
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "3%",
                actionButtons: [                    
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.ValidateLectura, event: { on: 'click', callBack: base.Event.BtnGridDeleteAreaInspeccionClick } }
                ]
            });
            base.Control.GrdResponsableArea = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResponsableArea',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Actions.BuscarAreaInspeccion,
                    source: 'Result'
                }
            });
        },
        CrearGridHallazgo: function () {           
            var columns = new Array();
            columns.push({
                data: 'DescripcionCorta',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.EtiquetaDescripcionCorta,
                width: "28%"
            });
            columns.push({
                data: 'DescripcionLarga',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.EtiquetaDescripcionLarga,
                width: "45%"
            });
            columns.push({
                data: 'DescripcionNivelRiesgo',
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.EtiquetaNivelRiesgo,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionRiesgo',
                visible: false,
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.EtiquetaNivelRiesgo,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionLugarHallazgo',
                visible: false,
                title: Pe.ElectroPeru.SGI.Presentacion.Inspecciones.IngresoInspeccion.Resource.EtiquetaNivelRiesgo,
                width: "5%"
            });

            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                //actionButtons: botones
                actionButtons: [                                        
                    { type: Pe.GMD.UI.Web.Components.GridAction.VerSeguimiento, event: { on: 'click', callBack: base.Event.BtnGridAgregarAccionesClick }, toolTip: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaIngresarAcciones },
                    { type: Pe.GMD.UI.Web.Components.GridAction.VerSeguimiento, event: { on: 'click', callBack: base.Event.BtnGridAgregarFotosClick }, toolTip: 'Ingresar Fotos'},//Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaIngresarFotos },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditHallazgoClick } },
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
        ValidacionExtraGenerales: function () {
            var validaciones = new Array();
            validaciones.push({
                Event: function () {
                    var resultado = true;
                    var cont = 0;
                    $('.checkboxClass:checked').each(function (i) {
                        cont++;
                    });

                    if (cont < 1) {
                        resultado = false;
                    }

                    if (resultado) {
                        $("#lblCheck").attr('class', 'checkboxClass');
                    }
                    else {
                        $("#lblCheck").attr('class', 'checkboxClass hasError');
                    }
                    $('.checkboxClass:checked').each(function (i) {
                        var that = $(this).val();
                        if (that == Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.DatosConstantes.CheckOtros) {
                            if (base.Control.TxtTipoGestionOtros().val() == null || base.Control.TxtTipoGestionOtros().val() == '') {
                                resultado = false;
                            }
                            if (resultado) {
                                base.Control.TxtTipoGestionOtros().attr('class', 'form-control');
                            } else {
                                base.Control.TxtTipoGestionOtros().attr('class', 'form-control hasError');
                            }
                        } else {
                            base.Control.TxtTipoGestionOtros().attr('class', 'form-control');
                        }
                    });                    
                    return resultado;
                }
            });
            return validaciones;
        },
        ValidacionExtraColaborador: function () {
            var validaciones = new Array();

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.HdnCodigoColaboradorInterno().val() == null || base.Control.HdnCodigoColaboradorInterno().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtColaboradorInterno().attr('class', 'form-control');
                    } else {
                        base.Control.TxtColaboradorInterno().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });
            return validaciones;
        },
    };
};