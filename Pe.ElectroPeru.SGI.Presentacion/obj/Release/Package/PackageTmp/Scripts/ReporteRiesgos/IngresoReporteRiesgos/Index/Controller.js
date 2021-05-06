ns('Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Index');
Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Index.Controller = function () {
    var base = this;

    base.Control = {
        HdnCRRAI: function () { return $('#hdnCRRAI'); },

        BtnRegresarBandejaReporteRiesgos: function () { return $('#btnRegresarBandejaReporteRiesgos'); },
        /* Tab Generales*/
        TxtNumeroReporteRiesgos: function () { return $('#txtNumeroReporteRiesgos'); },
        SlcProyecto: function () { return $('#slcProyecto'); },
        HdnCodigoEmpresa: function () { return $('#hdnCodigoEmpresa'); },        
        TxtEmpresa: function () { return $('#txtEmpresa'); },
        HdnCodigoPais: function () { return $('#hdnCodigoPais'); },
        TxtPais: function () { return $('#txtPais'); },
        TxtTituloRegistro: function () { return $('#txtTituloRegistro'); },
        DtpFechaEjecucion: function () { return $('#dtpFechaEjecucion'); },
        SlcHoraReporteRiesgos: function () { return $('#slcHoraReporteRiesgos'); },
        SlcMinutoReporteRiesgos: function () { return $('#slcMinutoReporteRiesgos'); },
        SlcLugarTrabajo: function () { return $('#slcLugarTrabajo'); },
        TxtTipoReporteOtros: function () { return $('#txtTipoReporteOtros'); },
        TxtClasificacionPerdidaOtros: function () { return $('#txtClasificacionPerdidaOtros'); },
        TxtCausasInmediatasOtros: function () { return $('#txtCausasInmediatasOtros'); },
        TxtDescripcionRiesgos: function () { return $('#txtDescripcionRiesgos'); },
        TxtLugarExacto: function () { return $('#txtLugarExacto'); },
        SlcClasificacionReporteRiesgos: function () { return $('#slcClasificacionReporteRiesgos'); },
        SlcNivelRiesgo: function () { return $('#slcNivelRiesgo'); },
        BtnAnularGenerales: function () { return $('#btnAnularGenerales'); },
        BtnGuardarGenerales: function () { return $('#btnGuardarGenerales'); },
        BtnCancelarGenerales: function () { return $('#btnCancelarGenerales'); },
        BtnVerMatrizRiesgos: function () { return $('#btnVerMatrizRiesgos'); },

        FrmGenerales: function () { return $('#frmGenerales'); },

        Mensaje: new Pe.GMD.UI.Web.Components.Message(),

        DlgFormularioMatrizRiesgos: null,

        /*Tab Reportantes*/
        TxtReportanteInterno: function () { return $('#txtReportanteInterno'); },
        HdnCodigoReportanteInterno: function () { return $('#hdnCodigoReportanteInterno'); },
        SlcTipoDocumento: function () { return $('#slcTipoDocumento'); },
        TxtNumeroDocumento: function () { return $('#txtNumeroDocumento'); },
        TxtNombres: function () { return $('#txtNombres'); },
        TxtApellidoPaterno: function () { return $('#txtApellidoPaterno'); },
        TxtApellidoMaterno: function () { return $('#txtApellidoMaterno'); },
        TxtCargoReferencial: function () { return $('#txtCargoReferencial'); },
        TxtEmpresaReportada: function () { return $('#txtEmpresaReportada'); },
        HdnEmpresaReportada: function () { return $('#hdnEmpresaReportada'); },        
        BtnAgregarReportanteInterno: function () { return $('#btnAgregarReportanteInterno'); },
        BtnAgregarEmpresaReportada: function () { return $('#btnAgregarEmpresaReportada'); },
        DlgFormularioReportanteInterno: null,
        DlgFormularioEmpresaReportada: null,
        BtnGuardarReportanteInterno: function () { return $('#btnGuardarReportanteInterno'); },
        BtnGuardarReportanteExterno: function () { return $('#btnGuardarReportanteExterno'); },
        FrmReportanteInterno: function () { return $('#frmReportanteInterno'); },
        FrmReportanteExterno: function () { return $('#frmReportanteExterno'); },
        FrmEmpresaReportada: function () { return $('#frmEmpresaReportada'); },
        BtnGuardarEmpresaReportada: function () { return $('#btnGuardarEmpresaReportada'); },

        /*Tab: Hallazgo*/
        ValidadorHallazgo: null,
        CodigoHallazgo: null,
        GrdResultadoHallazgo: null,
        FrmHallazgo: function () { return $('#frmHallazgo'); },      
        TxtDescripcionCorta: function () { return $('#txtDescripcionCorta'); },
        TxtDescripcionLarga: function () { return $('#txtDescripcionLarga'); },        
        BtnSalirHallazgo: function () { return $('#btnSalirHallazgo'); },
        BtnGuardarHallazgo: function () { return $('#btnGuardarHallazgo'); },
        BtnCancelarHallazgo: function () { return $('#btnCancelarHallazgo'); },

        /*Tab Acciones*/
        HdnCodigoHallazgoAccion: function () { return $('#hdnCodigoHallazgoAccion'); },
        TxtDescripcionCortaHallazgoAccion: function () { return $('#txtDescripcionCortaHallazgoAccion'); },        
        BtnAgregarAccion: function () { return $('#btnAgregarAccion'); },
        DlgFormularioIngresoAccion: null,

        /*Tab Causas*/
        BtnAgregarCausas: function () { return $('#btnAgregarCausas'); },
        DlgFormularioCausasRaices: null,

        /*Tab Retroalimentación*/
        BtnAgregarConclusiones: function () { return $('#btnAgregarConclusiones'); },
        BtnCancelarConclusiones: function () { return $('#btnCancelarConclusiones'); },
        TxtConclusiones: function () { return $('#txtConclusiones'); },

        /*TAb Acciones Inmediatas*/
        TxtDescripcionAccionInmediata: function () { return $('#txtDescripcionAccionInmediata'); },
        BtnGuardarAccionesInmediatas: function () { return $('#btnGuardarAccionesInmediatas'); },        
        BtnCancelarAccionesInmediatas: function () { return $('#btnCancelarAccionesInmediatas'); },

        /*Tab Anexos*/
        BtnAgregarAnexo: function () { return $('#btnAgregarAnexo'); },
        DlgFormularioAnexoApendice: null,
    };

    base.Ini = function () {       
        /*Navegación entre Tabs*/
        $('#cartTabsReporteRiesgos').on('shown.bs.tab', function (e) {
            var target = $(e.target).attr("href");
            if (target == "#tabGenerales") {
                base.Control.FormularioModelo.ReporteRiesgos.CodigoHallazgo = null;
            }
            if (target == "#tabReportantes") {
                base.Control.FormularioModelo.ReporteRiesgos.CodigoHallazgo = null;
                base.Event.BtnBuscarReportanteExterno();
                base.Event.BtnBuscarReportanteInterno();
                base.Event.BtnBuscarEmpresaReportada();
                if (base.Control.FormularioModelo.ReporteRiesgos.CodigoReporteRiesgos != null) {
                    $('#divReportanteInterno').removeClass('hidden');
                    $('#divBotonAccionReportanteInterno').removeClass('hidden');
                    $('#divDocumento').removeClass('hidden');
                    $('#divNombres').removeClass('hidden');
                    $('#divApellidos').removeClass('hidden');
                    $('#divBotonAccionReportanteExterno').removeClass('hidden');
                    $('#divEmpresaReportada').removeClass('hidden');
                    $('#divBotonAccionEmpresaReportada').removeClass('hidden');
                }
            }
            if (target == "#tabHallazgos") {
                if (base.Control.FormularioModelo.ReporteRiesgos.CodigoReporteRiesgos != null) {
                    $('#divControlesHallazgos').removeClass('hidden');
                    $('#botonesHallazgos').removeClass('hidden');
                    base.Event.BtnBuscarHallazgoClick();
                }
            }
            if (target == "#tabAcciones") {
                base.Event.BtnBuscarAcciones();
                if (base.Control.FormularioModelo.ReporteRiesgos.CodigoHallazgo == null) {
                    $('#blContieneAccion').hide();
                }
                else {
                    $('#blContieneAccion').show();
                }
                base.Event.BtnBuscarAccionesClick();
            }
            if (target == "#tabCausas") {
                base.Control.FormularioModelo.ReporteRiesgos.CodigoHallazgo = null;
                if (base.Control.FormularioModelo.ReporteRiesgos.CodigoReporteRiesgos != null) {
                    base.Event.BtnBuscarCausasRaices();
                    $('#btnAgregarCausas').removeClass('hidden');
                }
            }
            if (target == "#tabRetroalimentacion") {
                if (base.Control.FormularioModelo.ReporteRiesgos.CodigoReporteRiesgos != null) {
                    $('#divBotonAccionGuardarConclusiones').removeClass('hidden');                    
                }
            }
            if (target == "#tabAccionesInmediatas") {                               
                if (base.Control.FormularioModelo.ReporteRiesgos.CodigoReporteRiesgos != null) {
                    base.Event.BtnBuscarAccionInmediata();                    
                    $('#divtabAccionesInmediatas').removeClass('hidden');
                }
            }
            if (target == "#tabAnexos") {
                if (base.Control.FormularioModelo.ReporteRiesgos.CodigoReporteRiesgos != null) {
                    base.Event.BtnBuscarAnexoArchivoClick();
                    $('#btnAgregarAnexo').removeClass('hidden');
                }
            }
        });

        base.Control.BtnRegresarBandejaReporteRiesgos().off('click');
        base.Control.BtnRegresarBandejaReporteRiesgos().on('click', base.Event.BtnRegresarBandejaReporteRiesgosClick);

        base.Control.BtnVerMatrizRiesgos().off('click');
        base.Control.BtnVerMatrizRiesgos().on('click', base.Event.BtnVerMatrizRiesgosClick);

        /*Tab Generales*/
        base.Control.FormularioModelo = Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Models.Formulario;
        base.Control.SlcProyecto().off('change');
        base.Control.SlcProyecto().on('change', base.Event.SlcProyectoChange);

        base.Control.DlgFormularioMatrizRiesgos = new Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.FormularioMatrizRiesgos.Controller();
        
        if (base.Control.FormularioModelo.ReporteRiesgos.CodigoReporteRiesgos == null) {
            base.Control.DtpFechaEjecucion().datepicker({
                dateFormat: 'dd/mm/yy',
                maxDate: '+0D',
                minDate: '-4D'
            });
        }
        else {
            var fecha = base.Control.FormularioModelo.ReporteRiesgos.FechaCreacionString.split('/');
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
        

        base.Control.BtnAnularGenerales().off('click');
        base.Control.BtnAnularGenerales().on('click', base.Event.AnularReporteRiesgos);

        base.Control.BtnGuardarGenerales().off('click');
        base.Control.BtnGuardarGenerales().on('click', base.Event.BtnGuardarGeneralesClick);

        base.Control.ValidadorGenerales = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmGenerales(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionCheckBoxOtros()//,
            //validationsExtra: base.Function.ValidacionClasificacionPerdidaOtros()
        });

        //Checks Tipo de Reporte       
        if (base.Control.FormularioModelo.ListaTipoReporte != null && base.Control.FormularioModelo.ListaTipoReporte.length > 0) {
            for (var i = 0; i < base.Control.FormularioModelo.ListaTipoReporte.length; i++) {
                if (base.Control.FormularioModelo.ListaTipoReporte[i].TipoReporte == Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.DatosConstantes.CheckOtros) {
                    base.Control.TxtTipoReporteOtros().val(base.Control.FormularioModelo.ListaTipoReporte[i].TipoReporteOtros);
                    if (base.Control.FormularioModelo.ListaTipoReporte[i].TipoReporteOtros != '')
                        base.Control.TxtTipoReporteOtros().prop('disabled', false);
                }
                $('#id_' + base.Control.FormularioModelo.ListaTipoReporte[i].TipoReporte).prop("checked", true);
            }
        }

        $('.checkboxClassTR').change(function () {
            if (this.checked && this.value == Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.DatosConstantes.CheckOtros) {
                base.Control.TxtTipoReporteOtros().prop('disabled', false);
            } else {
                base.Control.TxtTipoReporteOtros().val('');
                base.Control.TxtTipoReporteOtros().prop('disabled', true);

            }
        });

        //Checks Clasificación de Pérdida
        if (base.Control.FormularioModelo.ListaClasificacionPerdida != null && base.Control.FormularioModelo.ListaClasificacionPerdida.length > 0) {
            for (var i = 0; i < base.Control.FormularioModelo.ListaClasificacionPerdida.length; i++) {
                if (base.Control.FormularioModelo.ListaClasificacionPerdida[i].ClasificacionPerdida == Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.DatosConstantes.CheckOtros) {
                    base.Control.TxtClasificacionPerdidaOtros().val(base.Control.FormularioModelo.ListaClasificacionPerdida[i].ClasificacionPerdidaOtros);
                    if (base.Control.FormularioModelo.ListaClasificacionPerdida[i].ClasificacionPerdidaOtros != '')
                        base.Control.TxtClasificacionPerdidaOtros().prop('disabled', false);
                }
                $('#id_' + base.Control.FormularioModelo.ListaClasificacionPerdida[i].ClasificacionPerdida).prop("checked", true);
            }
        }

        $('.checkboxClassCP').change(function () {
            if (this.checked && this.value == Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.DatosConstantes.CheckOtros) {
                base.Control.TxtClasificacionPerdidaOtros().prop('disabled', false);
            } else {
                base.Control.TxtClasificacionPerdidaOtros().val('');
                base.Control.TxtClasificacionPerdidaOtros().prop('disabled', true);

            }
        });

        //Checks Causas Inmediatas
        if (base.Control.FormularioModelo.ListaCausasInmediatas != null && base.Control.FormularioModelo.ListaCausasInmediatas.length > 0) {
            for (var i = 0; i < base.Control.FormularioModelo.ListaCausasInmediatas.length; i++) {
                if (base.Control.FormularioModelo.ListaCausasInmediatas[i].CausaInmediata == Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.DatosConstantes.CheckOtros) {
                    base.Control.TxtCausasInmediatasOtros().val(base.Control.FormularioModelo.ListaCausasInmediatas[i].CausaInmediataOtros);
                    if (base.Control.FormularioModelo.ListaCausasInmediatas[i].CausaInmediataOtros != '')
                        base.Control.TxtCausasInmediatasOtros().prop('disabled', false);
                }
                $('#id_' + base.Control.FormularioModelo.ListaCausasInmediatas[i].CausaInmediata).prop("checked", true);
            }
        }

        $('.checkboxClassCI').change(function () {
            if (this.checked && this.value == Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.DatosConstantes.CheckOtros) {
                base.Control.TxtCausasInmediatasOtros().prop('disabled', false);
            } else {
                base.Control.TxtCausasInmediatasOtros().val('');
                base.Control.TxtCausasInmediatasOtros().prop('disabled', true);

            }
        });
        /*Tab Reportantes*/
        base.Function.CrearGridReportanteInterno();
        base.Function.CrearGridReportanteExterno();
        base.Function.CrearGridEmpresaReportada();

        base.Control.BtnAgregarReportanteInterno().off('click');
        base.Control.BtnAgregarReportanteInterno().on('click', base.Event.BtnAgregarReportanteInternoClick);

        base.Control.DlgFormularioReportanteInterno = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.ObtenerReportanteInterno
        });

        base.Control.BtnAgregarEmpresaReportada().off('click');
        base.Control.BtnAgregarEmpresaReportada().on('click', base.Event.BtnAgregarEmpresaReportadaClick);

        base.Control.DlgFormularioEmpresaReportada = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.FormularioBuscadorEmpresa.Controller({
            AceptarSuccess: base.Event.ObtenerEmpresaReportada
        });

        base.Control.BtnGuardarReportanteInterno().off('click');
        base.Control.BtnGuardarReportanteInterno().on('click', base.Event.BtnGuardarReportanteInternoClick);

        base.Control.BtnGuardarReportanteExterno().off('click');
        base.Control.BtnGuardarReportanteExterno().on('click', base.Event.BtnGuardarReportanteExternoClick);

        base.Control.BtnGuardarEmpresaReportada().off('click');
        base.Control.BtnGuardarEmpresaReportada().on('click', base.Event.BtnGuardarEmpresaReportadaClick);

        base.Control.ValidadorReportanteInterno = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmReportanteInterno(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionReportanteInterno()
        });

        base.Control.ValidadorReportanteExterno = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmReportanteExterno(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos
        });

        base.Control.ValidadorEmpresaReportada = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmEmpresaReportada(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionEmpresaReportada()
        });


        /*Tab Hallazgos*/
        base.Control.BtnSalirHallazgo().off('click');
        base.Control.BtnSalirHallazgo().on('click', base.Event.BtnSalirHallazgoClick);
        base.Control.BtnGuardarHallazgo().off('click');
        base.Control.BtnGuardarHallazgo().on('click', base.Event.BtnGrabarHallazgoClick);
        base.Control.BtnCancelarHallazgo().off('click');
        base.Control.BtnCancelarHallazgo().on('click', base.Event.BtnCancelarHallazgoClick);
        base.Control.ValidadorHallazgo = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmHallazgo(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
        });

        /*Tab Acciones*/
        base.Function.CrearGridAcciones();

        base.Control.BtnAgregarAccion().off('click');
        base.Control.BtnAgregarAccion().on('click', base.Event.BtnAgregarAccionClick);

        base.Control.DlgFormularioIngresoAccion = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordAccionGenerico.Controller({
            GrabarRecordAccionSuccess: base.Event.BtnBuscarAccionesClick
        });

        /*Tab Causas*/
        base.Function.CrearGridCausaRaiz();

        base.Control.BtnAgregarCausas().off('click');
        base.Control.BtnAgregarCausas().on('click', base.Event.BtnAgregarCausasClick);       

        base.Control.DlgFormularioCausasRaices = new Pe.ElectroPeru.SGI.Presentacion.ObservacionPlaneada.FormularioCausasRaices.Controller({
            GrabarAnalisiSuccess: base.Event.BtnBuscarCausasRaices
        });

        /*Tab Retroalimentación*/
        base.Control.BtnAgregarConclusiones().off('click');
        base.Control.BtnAgregarConclusiones().on('click', base.Event.BtnGuardarGeneralesClick);

        base.Control.BtnCancelarConclusiones().off('click');
        base.Control.BtnCancelarConclusiones().on('click', base.Event.BtnCancelarConclusionesClick);

        /*TAb Acciones Inmediatas*/
        base.Function.CrearGridAccionesInmediatas();

        base.Control.BtnGuardarAccionesInmediatas().off('click');
        base.Control.BtnGuardarAccionesInmediatas().on('click', base.Event.BtnGuardarAccionesInmediatasClick);

        base.Control.BtnCancelarAccionesInmediatas().off('click');
        base.Control.BtnCancelarAccionesInmediatas().on('click', base.Event.AsignarValoresAccionesInmediatas);

        /*Tab Anexos*/
        base.Function.CrearGridAnexoApendice();

        base.Control.BtnAgregarAnexo().off('click');
        base.Control.BtnAgregarAnexo().on('click', base.Event.BtnAgregarAnexoClick);

        base.Control.DlgFormularioAnexoApendice = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioIntegradorApendiceArchivo.Controller({
            GrabarRecordAnexoApendiceSuccess: base.Event.BtnBuscarAnexoArchivoClick
        });
    };

    base.Event = {
        BtnRegresarBandejaReporteRiesgosClick: function () {
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Actions.BandejaReporteRiesgos, {});
        },
        /*Tab Generales*/
        SlcProyectoChange: function () {
            base.Control.HdnCodigoEmpresa().val('');
            base.Control.TxtEmpresa().val('');
            base.Control.HdnCodigoPais().val('');
            base.Control.TxtPais().val('');

            if (base.Control.SlcProyecto().val() != '') {
                base.Ajax.AjaxBuscarEmpresaPais.data = {
                    CodigoProyecto: base.Control.SlcProyecto().val()
                };
                base.Ajax.AjaxBuscarEmpresaPais.submit();
            }
        },
        AnularReporteRiesgos: function () {
            if (((base.Control.FormularioModelo.ReporteRiesgos.EstadoReporteRiesgos == Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.DatosConstantes.EstadoReporteRiesgosAbierto) || (base.Control.FormularioModelo.ReporteRiesgos.EstadoReporteRiesgos == Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.DatosConstantes.EstadoEstadoReporteRiesgosReAbierto)) && base.Control.FormularioModelo.ReporteRiesgos.CodigoHallazgo == null) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.EtiquetaMensajeAnular,
                    onAccept: function () {
                        base.Ajax.AjaxAnularReporteRiesgos.data = {
                            CodigoReporteRiesgos: base.Control.FormularioModelo.ReporteRiesgos.CodigoReporteRiesgos
                        };
                        base.Ajax.AjaxAnularReporteRiesgos.submit();
                    }
                });
            }
        },
        BtnGuardarGeneralesClick: function () {
            if (base.Control.ValidadorGenerales.isValid()) {

                //Verifica checks marcados de Tipo de Reporte
                var listaTipoReporte = [];
                $('.checkboxClassTR:checked').each(function (i) {
                    var that = $(this).val();
                    if (that == Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.DatosConstantes.CheckOtros) {
                        listaTipoReporte.push({
                            TipoReporte: that,
                            TipoReporteOtros: base.Control.TxtTipoReporteOtros().val()
                        });
                    }
                    else {
                        listaTipoReporte.push({
                            TipoReporte: that
                        });
                    }
                });

                //Verifica checks marcados de Clasificación de Pérdida
                var listaClasificacionPerdida = [];
                $('.checkboxClassCP:checked').each(function (i) {
                    var that = $(this).val();
                    if (that == Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.DatosConstantes.CheckOtros) {
                        listaClasificacionPerdida.push({
                            ClasificacionPerdida: that,
                            ClasificacionPerdidaOtros: base.Control.TxtClasificacionPerdidaOtros().val()
                        });
                    }
                    else {
                        listaClasificacionPerdida.push({
                            ClasificacionPerdida: that
                        });
                    }
                });

                //Verifica checks marcados de Causas Inmediatas
                var listaCausasInmediatas = [];
                $('.checkboxClassCI:checked').each(function (i) {
                    var that = $(this).val();
                    if (that == Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.DatosConstantes.CheckOtros) {
                        listaCausasInmediatas.push({
                            CausaInmediata: that,
                            CausaInmediataOtros: base.Control.TxtCausasInmediatasOtros().val()
                        });
                    }
                    else {
                        listaCausasInmediatas.push({
                            CausaInmediata: that
                        });
                    }
                });

                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarReporteRiesgos.data = {
                            CodigoReporteRiesgos: base.Control.FormularioModelo.ReporteRiesgos.CodigoReporteRiesgos,
                            CodigoProyecto: base.Control.SlcProyecto().val(),
                            NumeroRegistroReporteRiesgos: base.Control.TxtNumeroReporteRiesgos().val(),
                            CodigoEmpresa: base.Control.HdnCodigoEmpresa().val(),
                            NombreEmpresa: base.Control.TxtEmpresa().val(),
                            CodigoPais: base.Control.HdnCodigoPais().val(),
                            NombrePais: base.Control.TxtPais().val(),
                            TituloRegistro: base.Control.TxtTituloRegistro().val(),
                            FechaEjecucion: base.Control.DtpFechaEjecucion().val(),
                            HoraReporteRiesgos: base.Control.SlcHoraReporteRiesgos().val(),
                            MinutoReporteRiesgos: base.Control.SlcMinutoReporteRiesgos().val(),
                            LugarTrabajo: base.Control.SlcLugarTrabajo().val(),
                            LugarExacto: base.Control.TxtLugarExacto().val(),
                            ListaTipoReporte: listaTipoReporte,
                            ListaClasificacionPerdida: listaClasificacionPerdida,
                            ListaCausasInmediatas: listaCausasInmediatas,
                            DescripcionRiesgos: base.Control.TxtDescripcionRiesgos().val(),
                            ClasificacionReporteRiesgos: base.Control.SlcClasificacionReporteRiesgos().val(),
                            NivelRiesgo: base.Control.SlcNivelRiesgo().val(),
                            ConclusionesRecomendaciones: base.Control.TxtConclusiones().val()
                        };
                        base.Ajax.AjaxRegistrarReporteRiesgos.submit();
                    }
                });
            } else {
                $("#frmGeneralesSummaryErrorMessage").empty();
                $("#frmGeneralesSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnVerMatrizRiesgosClick: function () {
            base.Control.DlgFormularioMatrizRiesgos.Show();
        },
        /*Tab Reportantes*/
        BtnBuscarReportanteExterno: function () {
            base.Control.GrdResultadoReportanteExterno.Load({
                CodigoReporteRiesgos: base.Control.FormularioModelo.ReporteRiesgos.CodigoReporteRiesgos,
                TipoReportante: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.DatosConstantes.Externo
            });
        },
        BtnBuscarReportanteInterno: function () {
            base.Control.GrdResultadoReportanteInterno.Load({
                CodigoReporteRiesgos: base.Control.FormularioModelo.ReporteRiesgos.CodigoReporteRiesgos,
                TipoReportante: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.DatosConstantes.Interno
            });
        },
        BtnBuscarEmpresaReportada: function () {
            base.Control.GrdResultadoEmpresaReportada.Load({
                CodigoReporteRiesgos: base.Control.FormularioModelo.ReporteRiesgos.CodigoReporteRiesgos
            });
        },
        BtnAgregarReportanteInternoClick: function () {
            'use strict'
            base.Control.DlgFormularioReportanteInterno.Show();
        },
        ObtenerReportanteInterno: function (colaborador) {
            'use strict'
            if (colaborador != undefined) {
                base.Control.TxtReportanteInterno().val(colaborador[0].NombreCompletoColaborador);
                base.Control.HdnCodigoReportanteInterno().val(colaborador[0].CodigoColaborador);
            }
            else {
                base.Control.TxtReportanteInterno().val('');
                base.Control.HdnCodigoReportanteInterno().val('');
            }
        },
        BtnGridDeleteReportanteInternoClick: function (row, data) {
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    data.CodigoReporteRiesgos = base.Control.FormularioModelo.ReporteRiesgos.CodigoReporteRiesgos,                    
                    data.TipoReportante = Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.DatosConstantes.Interno                    
                    base.Ajax.AjaxEliminarReportante.data = data;
                    base.Ajax.AjaxEliminarReportante.submit();
                }
            });
        },
        BtnGridDeleteReportanteExternoClick: function (row, data) {
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    data.CodigoReporteRiesgos = base.Control.FormularioModelo.ReporteRiesgos.CodigoReporteRiesgos,                    
                    data.TipoReportante = Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.DatosConstantes.Externo                    
                    base.Ajax.AjaxEliminarReportante.data = data;
                    base.Ajax.AjaxEliminarReportante.submit();
                }
            });
        },
        BtnGridDeleteEmpresaReportadaClick: function (row, data) {
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    data.CodigoReporteRiesgos = base.Control.FormularioModelo.ReporteRiesgos.CodigoReporteRiesgos,                                        
                    base.Ajax.AjaxEliminarEmpresaReportada.data = data;
                    base.Ajax.AjaxEliminarEmpresaReportada.submit();
                }
            });
        },
        BtnAgregarEmpresaReportadaClick: function () {
            'use strict'
            base.Control.DlgFormularioEmpresaReportada.Show();
        },
        ObtenerEmpresaReportada: function (empresa) {
            'use strict'
            if (empresa != undefined) {
                base.Control.TxtEmpresaReportada().val(empresa[0].RazonSocial);
                base.Control.HdnEmpresaReportada().val(empresa[0].CodigoEmpresa);
            }
            else {
                base.Control.TxtEmpresaReportada().val('');
                base.Control.HdnEmpresaReportada().val('');
            }
        },
        BtnGuardarReportanteInternoClick: function () {
            if (base.Control.ValidadorReportanteInterno.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarReportanteInterno.data = {
                            CodigoColaborador: base.Control.HdnCodigoReportanteInterno().val(),
                            CodigoReporteRiesgos: base.Control.FormularioModelo.ReporteRiesgos.CodigoReporteRiesgos,
                            TipoReportante: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.DatosConstantes.Interno
                        };
                        base.Ajax.AjaxRegistrarReportanteInterno.submit();
                    }
                });
            } else {
                $("#frmReportanteInternoSummaryErrorMessage").empty();
                $("#frmReportanteInternoSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnGuardarReportanteExternoClick: function () {
            if (base.Control.ValidadorReportanteExterno.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarReportanteExterno.data = {
                            CodigoReporteRiesgos: base.Control.FormularioModelo.ReporteRiesgos.CodigoReporteRiesgos,
                            TipoReportante: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.DatosConstantes.Externo,
                            Nombres: base.Control.TxtNombres().val(),
                            ApellidoPaterno: base.Control.TxtApellidoPaterno().val(),
                            ApellidoMaterno: base.Control.TxtApellidoMaterno().val(),
                            CodigoTipoDocumento: base.Control.SlcTipoDocumento().val(),
                            NumeroDocumento: base.Control.TxtNumeroDocumento().val(),
                            CargoReferencial: base.Control.TxtCargoReferencial().val()
                        };
                        base.Ajax.AjaxRegistrarReportanteExterno.submit();
                    }
                });
            } else {
                $("#frmReportanteExternoSummaryErrorMessage").empty();
                $("#frmReportanteExternoSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnGuardarEmpresaReportadaClick: function () {
            if (base.Control.ValidadorEmpresaReportada.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarEmpresaReportada.data = {
                            CodigoReporteRiesgos: base.Control.FormularioModelo.ReporteRiesgos.CodigoReporteRiesgos,
                            CodigoEmpresa: base.Control.HdnEmpresaReportada().val()
                        };
                        base.Ajax.AjaxRegistrarEmpresaReportada.submit();
                    }
                });
            } else {
                $("#frmEmpresaReportadaSummaryErrorMessage").empty();
                $("#frmEmpresaReportadaSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
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
                            CodigoIntegradorTipoRegistro: base.Control.FormularioModelo.ReporteRiesgos.CodigoIntegradorTipoRegistro,                           
                            DescripcionCorta: base.Control.TxtDescripcionCorta().val(),
                            DescripcionLarga: base.Control.TxtDescripcionLarga().val()                            
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
                CodigoIntegradorTipoRegistro: base.Control.FormularioModelo.ReporteRiesgos.CodigoIntegradorTipoRegistro,
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
            $('#cartTabsReporteRiesgos a[href="#tabAcciones"]').tab('show');
            base.Control.HdnCodigoHallazgoAccion().val(data.CodigoHallazgo);
            base.Control.TxtDescripcionCortaHallazgoAccion().val(data.DescripcionCorta);           
            base.Control.FormularioModelo.ReporteRiesgos.CodigoHallazgo = data.CodigoHallazgo;
        },
        BtnCancelarHallazgoClick: function () {
            base.Control.TxtDescripcionCorta().val('');
            base.Control.TxtDescripcionLarga().val('');
            base.Control.SlcNivelRiesgo().val('');
            base.Control.TxtDescripcionRiesgo().val('');
            base.Control.SlcLugarTrabajo().val('');
            base.Control.TxtLugarHallazgo().val('');
            //base.Control.FormularioModelo.ReporteRiesgos.CodigoHallazgo = '';
        },
        /*Tab Acciones*/
        BtnBuscarAcciones: function () {
            base.Control.GrdResultadoAcciones.Load();
        },
        BtnBuscarAccionesClick: function () {
            if (base.Control.FormularioModelo.ReporteRiesgos.CodigoIntegradorTipoRegistro != null) {
                base.Control.GrdResultadoAcciones.Load({
                    CodigoIntegradorTipoRegistro: base.Control.FormularioModelo.ReporteRiesgos.CodigoIntegradorTipoRegistro,
                    CodigoTipoOcurrenciaEntidad: base.Control.FormularioModelo.ReporteRiesgos.CodigoHallazgo
                });
            }
        },
        BtnAgregarAccionClick: function () {
            base.Control.DlgFormularioIngresoAccion.Show({
                TituloFormulario: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaFormularioIngresoAcciones,
                IndicadorLectura: base.Control.FormularioModelo.ReporteRiesgos.IndicadorLectura,
                CodigoIntegradorTipoRegistro: base.Control.FormularioModelo.ReporteRiesgos.CodigoIntegradorTipoRegistro,
                CodigoTipoRegistroParametro: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.ReporteRiesgos,
                CodigoEstadoAccion: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Abierto,
                NumeroRecord: base.Control.TxtNumeroReporteRiesgos().val(),
                CodigoTipoOcurrenciaParametro: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.TipoOcurrenciaAccion.Hallazgo,
                CodigoTipoOcurrenciaEntidad: base.Control.FormularioModelo.ReporteRiesgos.CodigoHallazgo,
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
            data.CodigoTipoRegistroParametro = Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.ReporteRiesgos;
            data.CodigoTipoOcurrenciaParametro = Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.TipoOcurrenciaAccion.Hallazgo;
            data.NumeroRecord = base.Control.TxtNumeroReporteRiesgos().val();
            data.CodigoEstadoAccion = Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Abierto;
            data.IndicadorLectura = (base.Control.FormularioModelo.ReporteRiesgos.EstadoReporteRiesgos == Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.DatosConstantes.EstadoReporteRiesgosCerrado ? true : false)
            base.Control.DlgFormularioIngresoAccion.Show(data);
        },
        BtnGridVerAccionesClick: function (row, data) {
            data.CodigoTipoRegistroParametro = Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.ReporteRiesgos;
            data.CodigoTipoOcurrenciaParametro = Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.TipoOcurrenciaAccion.Hallazgo;
            data.NumeroRecord = base.Control.TxtNumeroReporteRiesgos().val();
            data.CodigoEstadoAccion = Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Abierto;
            data.IndicadorLectura = true;
            base.Control.DlgFormularioIngresoAccion.Show(data);
        },
        /*Tab Causas*/
        BtnGridEditCausaRaizClick: function (row, data) {
            data.IndicadorLectura = base.Control.FormularioModelo.ReporteRiesgos.IndicadorLectura;
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
                CodigoTipoCausaRaizEntidad: base.Control.FormularioModelo.ReporteRiesgos.CodigoReporteRiesgos,
                CodigoTipoCausaRaizParametro: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.ReporteRiesgos,
                IndicadorLectura: base.Control.FormularioModelo.ReporteRiesgos.IndicadorLectura
            });
        },
        BtnBuscarCausasRaices: function () {
            if (base.Control.FormularioModelo.ReporteRiesgos.CodigoReporteRiesgos != null) {
                base.Control.GrdResultadoCausas.Load({
                    CodigoTipoCausaRaizEntidad: base.Control.FormularioModelo.ReporteRiesgos.CodigoReporteRiesgos,
                });
            }
        },
        /*Tab Retroalimentación*/
        BtnCancelarConclusionesClick: function () {
            base.Control.TxtConclusiones().val('');
        },
        /*Tab Acciones Inmediatas*/
        BtnGuardarAccionesInmediatasClick: function () {
            if ($.trim(base.Control.TxtDescripcionAccionInmediata().val())) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarAccionesInmediatas.data = {
                            CodigoReporteRiesgosAccionInmediata: base.Control.HdnCRRAI().val(),
                            CodigoReporteRiesgos: base.Control.FormularioModelo.ReporteRiesgos.CodigoReporteRiesgos,
                            DescripcionAccionInmediata: base.Control.TxtDescripcionAccionInmediata().val()
                        };                        
                        base.Ajax.AjaxRegistrarAccionesInmediatas.submit();
                    }
                });
            }
        },
        BtnGridDeleteAccionInmediataClick: function (row, data) {
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    data.CodigoReporteRiesgos = base.Control.FormularioModelo.ReporteRiesgos.CodigoReporteRiesgos,
                    base.Ajax.AjaxEliminarAccionesInmediatas.data = data;
                    base.Ajax.AjaxEliminarAccionesInmediatas.submit();
                }
            });
        },
        BtnBuscarAccionInmediata: function () {
            if (base.Control.FormularioModelo.ReporteRiesgos.CodigoReporteRiesgos != null) {
                base.Control.GrdResultadoAccionInmediata.Load({
                    CodigoReporteRiesgos: base.Control.FormularioModelo.ReporteRiesgos.CodigoReporteRiesgos
                });
            }
        },
        AsignarValoresAccionesInmediatas: function () {
            base.Control.TxtDescripcionAccionInmediata().val('');
        },
        BtnGridEditAccionInmediataClick: function (row, data) {
            var filtro = {
                CodigoReporteRiesgos: base.Control.FormularioModelo.ReporteRiesgos.CodigoReporteRiesgos,
                CodigoReporteRiesgosAccionInmediata: data.CodigoReporteRiesgosAccionInmediata
            };
            base.Control.HdnCRRAI().val(data.CodigoReporteRiesgosAccionInmediata);                       
            base.Ajax.AjaxEditAccionInmediata.data = filtro;
            base.Ajax.AjaxEditAccionInmediata.submit();
        },
        /*Tab Anexos*/
        BtnGridDownloadIntegradorTipoRegistroAnexoClick: function (row, data) {
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Base.Actions.DescargarIntegradorTipoRegistroAnexo, data);
        },
        BtnAgregarAnexoClick: function () {
            //if (base.Control.FormularioModelo.ReporteRiesgos.CodigoIntegradorTipoRegistro != null) {
                base.Control.DlgFormularioAnexoApendice.Show({
                    CodigoIntegradorTipoRegistro: base.Control.FormularioModelo.ReporteRiesgos.CodigoIntegradorTipoRegistro,
                    CodigoTipoAnexoIntegrador: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.DatosConstantes.TiposAnexosReporteRiesgos,
                    IndicadorLectura: base.Control.FormularioModelo.ReporteRiesgos.IndicadorLectura
                });
            //}
        },
        BtnBuscarAnexoArchivoClick: function () {
            var filtro = {
                CodigoTipoAnexo: Pe.ElectroPeru.SGI.Presentacion.Core.Constante.DatosConstantes.ParametrosGenerales.CodigoTipoAnexoAdjunto,
                CodigoIntegradorTipoRegistro: base.Control.FormularioModelo.ReporteRiesgos.CodigoIntegradorTipoRegistro,
            };
            base.Control.GrdResultadoAnexoApendice.Load(filtro);
        },
        BtnGridEditIntegradorTipoRegistroAnexoClick: function (row, data) {
            data.IndicadorLectura = base.Control.FormularioModelo.ReporteRiesgos.IndicadorLectura;
            data.CodigoTipoAnexoIntegrador = Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.DatosConstantes.TiposAnexosReporteRiesgos,
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
        ValidateLectura: function (data, type, full) {
            if (base.Control.FormularioModelo.ReporteRiesgos.IndicadorLectura)
                return false;
            else
                return true;
        }
    };
    base.AjaxSuccess = {
        /*Tab Generales*/
        AjaxBuscarEmpresaPaisSuccess: function (resultado) {
            base.Control.HdnCodigoEmpresa().val(resultado.Result[0].CodigoEmpresa);
            base.Control.TxtEmpresa().val(resultado.Result[0].NombreEmpresa);
            base.Control.HdnCodigoPais().val(resultado.Result[0].CodigoPais);
            base.Control.TxtPais().val(resultado.Result[0].NombrePais);            
        },
        AjaxAnularReporteRiesgosSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Actions.BandejaReporteRiesgos, {});
            }
            else if (resultado.Result == '-2') {
                base.Control.Mensaje.Warning({
                    message: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.MensajeErrorAnulacion
                });
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxRegistrarReporteRiesgosSuccess: function (resultado) {

            if (resultado.IsSuccess == true) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                if (resultado.Result != null) {
                    base.Control.TxtNumeroReporteRiesgos().val(resultado.Result.NumeroRegistroReporteRiesgos);
                    base.Control.FormularioModelo.ReporteRiesgos.CodigoReporteRiesgos = resultado.Result.CodigoReporteRiesgos;
                    base.Control.FormularioModelo.ReporteRiesgos.CodigoIntegradorTipoRegistro = resultado.Result.CodigoIntegradorTipoRegistro;
                }
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        /*Tab Reportantes*/
        AjaxRegistrarReportanteInternoSuccess: function (resultado) {
            if (resultado.IsSuccess && resultado.Result != null && resultado.Result.CodigoReporteRiesgos != null) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnBuscarReportanteInterno();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxRegistrarReportanteExternoSuccess: function (resultado) {
            if (resultado.IsSuccess && resultado.Result != null && resultado.Result.CodigoReporteRiesgos != null) {
            base.Control.Mensaje.Information({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
            });
            base.Event.BtnBuscarReportanteExterno();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxRegistrarEmpresaReportadaSuccess: function (resultado) {
            if (resultado.IsSuccess && resultado.Result != null && resultado.Result.CodigoReporteRiesgos != null) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnBuscarEmpresaReportada();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxEliminarReportanteSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
                base.Event.BtnBuscarReportanteInterno();
                base.Event.BtnBuscarReportanteExterno()
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxEliminarEmpresaReportadaSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
                base.Event.BtnBuscarEmpresaReportada();                
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        /*Tab: Hallazgo*/
        AjaxGrabarHallazgoSuccess: function (resultado) {
            if (resultado.IsSuccess == true) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                if (resultado.Result != null) {
                    base.Control.FormularioModelo.ReporteRiesgos.CodigoHallazgo = resultado.Result.CodigoHallazgo;
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
                base.Control.TxtDescripcionCorta().val(resultado.Result.DescripcionCorta);
                base.Control.TxtDescripcionLarga().val(resultado.Result.DescripcionLarga);                
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
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
                    message: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.MensajeValidacionHallazgos
                });
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        /*Tab Acciones*/
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
        /*Tab Causas*/
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
        /*Tab Acciones Inmediatas*/
        AjaxRegistrarAccionesInmediatasSuccess: function (resultado) {
            base.Control.HdnCRRAI().val('')
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnBuscarAccionInmediata();                
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxEliminarAccionesInmediatasSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnBuscarAccionInmediata();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxEditAccionInmediataSuccess: function (resultado) {
            if (resultado.IsSuccess == true) {               
                base.Control.TxtDescripcionAccionInmediata().val(resultado.Result[0].DescripcionAccionInmediata);
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        /*Tab Anexos*/
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
    };
    base.Ajax = {
        /*Tab Generales*/
        AjaxBuscarEmpresaPais: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Actions.BuscarProyecto,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxBuscarEmpresaPaisSuccess
        }),
        AjaxAnularReporteRiesgos: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Actions.AnularReporteRiesgos,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxAnularReporteRiesgosSuccess
        }),
        AjaxRegistrarReporteRiesgos: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Actions.RegistrarReporteRiesgos,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarReporteRiesgosSuccess
        }),
        /*Tab Reportantes*/
        AjaxRegistrarReportanteInterno: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Actions.RegistrarReporteRiesgosReportante,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarReportanteInternoSuccess
        }),
        AjaxRegistrarReportanteExterno: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Actions.RegistrarReporteRiesgosReportante,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarReportanteExternoSuccess
        }),
        AjaxRegistrarEmpresaReportada: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Actions.RegistrarReporteRiesgosEmpresaReportada,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarEmpresaReportadaSuccess
        }),
        AjaxEliminarReportante: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Actions.EliminarReporteRiesgosReportante,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarReportanteSuccess
        }),
        AjaxEliminarEmpresaReportada: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Actions.EliminarReporteRiesgosEmpresaReportada,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarReportanteSuccess
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
        AjaxEliminarHallazgo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Actions.EliminarHallazgosReporteRiesgos,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarHallazgoSuccess
        }),
        /*Tab Acciones*/
        AjaxEliminarRecordAccion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.EliminarRecordAccion,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarRecordAccionSuccess
        }),
        /*Tab Causas*/
        AjaxEliminarRecordCausaRaiz: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.EliminarRecordCausaRaiz,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarRecordCausaRaizSuccess
        }),
        /*Tab AccionesInmediatas*/
        AjaxRegistrarAccionesInmediatas: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Actions.RegistrarAccionesInmediatas,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarAccionesInmediatasSuccess
        }),
        AjaxEliminarAccionesInmediatas: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Actions.EliminarAccionesInmediatas,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarAccionesInmediatasSuccess
        }),
        AjaxEditAccionInmediata: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Actions.BuscarReporteRiesgosAccionInmediata,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEditAccionInmediataSuccess,
        }),
        /*Tab Anexos*/
        AjaxEliminarIntegradorTipoRegistroAnexo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.EliminarIntegradorTipoRegistroAnexo,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarIntegradorTipoRegistroAnexoSuccess
        }),
    };
    base.Function = {
        /*Tab Reportantes*/
        CrearGridReportanteInterno: function () {
            var columns = new Array();
            columns.push({
                data: 'NombresApellidos',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridApellidosyNombres,
                width: "10%"
            });
            columns.push({
                data: 'NombreTipoDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridTipoDocumento,
                width: "10%"
            });
            columns.push({
                data: 'NumeroDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridNumeroDocumento,
                width: "15%"
            });
            columns.push({
                data: 'RazonSocial',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridEmpresa,
                width: "10%"
            });
            columns.push({
                data: 'NombreProyectoUsuario',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridProyecto,
                width: "10%"
            });
            columns.push({
                data: 'NombreArea',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridArea,
                width: "10%"
            });
            columns.push({
                data: 'NombrePuestoTrabajo',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridPuestoTrabajo,
                width: "5%"
            });
            columns.push({
                data: 'ExperienciaPuesto',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridTiempoPuestoTrabajo,
                width: "15%"
            });
            columns.push({
                data: 'ExperienciaNegocio',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridExperienciaNegocio,
                width: "15%"
            });
            columns.push({
                data: 'TiempoProyecto',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridTiempoProyecto,
                width: "15%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.ValidateLectura, event: { on: 'click', callBack: base.Event.BtnGridDeleteReportanteInternoClick } }
                ]
            });
            base.Control.GrdResultadoReportanteInterno = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdReportanteInterno',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Actions.BuscarReporteRiesgosReportante,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        },
        CrearGridReportanteExterno: function () {
            var columns = new Array();
            columns.push({
                data: 'NombresApellidos',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridApellidosyNombres,
                width: "10%"
            });
            columns.push({
                data: 'NombreTipoDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridTipoDocumento,
                width: "10%"
            });
            columns.push({
                data: 'NumeroDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridNumeroDocumento,
                width: "15%"
            });
            columns.push({
                data: 'CargoReferencial',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridCargoReferencial,
                width: "15%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.ValidateLectura, event: { on: 'click', callBack: base.Event.BtnGridDeleteReportanteExternoClick } }
                ]
            });
            base.Control.GrdResultadoReportanteExterno = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdReportanteExterno',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Actions.BuscarReporteRiesgosReportante,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        },
        CrearGridEmpresaReportada: function () {
            var columns = new Array();
            columns.push({
                data: 'RazonSocial',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridRazonSocial,
                width: "10%"
            });
            columns.push({
                data: 'RUC',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridRUC,
                width: "10%"
            });
            columns.push({
                data: 'NombreDuenioContrato',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridDuenio,
                width: "15%"
            });            
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.ValidateLectura, event: { on: 'click', callBack: base.Event.BtnGridDeleteEmpresaReportadaClick } }
                ]
            });
            base.Control.GrdResultadoEmpresaReportada = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdEmpresaReportada',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Actions.BuscarReporteRiesgosEmpresaReportada,
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
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.EtiquetaDescripcionCorta,
                width: "28%"
            });
            columns.push({
                data: 'DescripcionLarga',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.EtiquetaDescripcionLarga,
                width: "45%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                //actionButtons: botones
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.VerSeguimiento, event: { on: 'click', callBack: base.Event.BtnGridAgregarAccionesClick }, toolTip: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaIngresarAcciones },                    
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
        CrearGridAcciones: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridNumeroAccion,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionCorta',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridDescripcionCortaAccion,
                width: "10%"
            });
            columns.push({
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridDescripcionLargaAccion,
                width: "10%"
            });
            columns.push({
                data: 'NombreColaboradorPlanteaAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridPlanteadaPor,
                width: "10%"
            });
            columns.push({
                data: 'FechaAccionPlanteadaString',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridFechaPlanteada,
                width: "10%"
            });
            columns.push({
                data: 'NombreColaboradorResponsable',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridResponsable,
                width: "10%"
            });
            columns.push({
                data: 'FechaVencimientoString',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridFechaVencimiento,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionEstadoAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridEstadoDeAccion,
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
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridCodigo,
                width: "10%"
            });
            columns.push({
                data: 'NombreCategoria',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridCategoria,
                width: "10%"
            });
            columns.push({
                data: 'NombreSubCategoria',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridSubCategoria,
                width: "10%"
            });
            columns.push({
                data: 'NombreCausaRaiz',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridCausaRaiz,
                width: "15%"
            });
            columns.push({
                data: 'Comentario',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridComentario,
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
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridItem,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionTipoApendice',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridTipo,
                width: "20%"
            });
            columns.push({
                data: 'Nombre',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridNombreArchivo,
                width: "30%"
            });
            columns.push({
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridDescripcion,
                width: "30%"
            });
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridDescargar,
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
        CrearGridAccionesInmediatas: function () {
            var columns = new Array();
            //columns.push({
            //    data: 'NumeroRegistro',
            //    title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridItem,
            //    width: "5%"
            //});
            columns.push({
                data: 'DescripcionAccionInmediata',
                title: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Resource.GridDescripcion,
                width: "20%"
            });            
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditAccionInmediataClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.ValidateLectura, event: { on: 'click', callBack: base.Event.BtnGridDeleteAccionInmediataClick } }
                ]
            });
            base.Control.GrdResultadoAccionInmediata = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdAccionesInmediatas',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.Actions.BuscarReporteRiesgosAccionInmediata,
                    source: 'Result'
                }
            });
        },

        /*VALIDACIONES TAB GENERALES*/
        ValidacionCheckBoxOtros: function () {
            var validaciones = new Array();
            validaciones.push({
                Event: function () {
                    var resultado = true;
                    var contTR = 0;
                    var contCP = 0;
                    var contCI = 0;

                    $('.checkboxClassTR:checked').each(function (i) {
                        contTR++;
                    });

                    if (contTR < 1) {
                        resultado = false;
                    }

                    if (resultado) {
                        $("#lblCheckTipoReporte").attr('class', 'checkboxClass');
                    }
                    else {
                        $("#lblCheckTipoReporte").attr('class', 'checkboxClass hasError');
                    }

                    $('.checkboxClassCP:checked').each(function (i) {
                        contCP++;
                    });

                    if (contCP < 1) {
                        resultado = false;
                    }

                    if (resultado) {
                        $("#lblCheckClasificacionPerdida").attr('class', 'checkboxClass');
                    }
                    else {
                        $("#lblCheckClasificacionPerdida").attr('class', 'checkboxClass hasError');
                    }

                    $('.checkboxClassCI:checked').each(function (i) {
                        contCI++;
                    });

                    if (contCI < 1) {
                        resultado = false;
                    }

                    if (resultado) {
                        $("#lblCheckCausasInmediatas").attr('class', 'checkboxClass');
                    }
                    else {
                        $("#lblCheckCausasInmediatas").attr('class', 'checkboxClass hasError');
                    }

                    $('.checkboxClassTR:checked').each(function (i) {
                        var that = $(this).val();
                        if (that == Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.DatosConstantes.CheckOtros) {
                            if (base.Control.TxtTipoReporteOtros().val() == null || base.Control.TxtTipoReporteOtros().val() == '') {
                                resultado = false;
                            }
                            if (resultado) {
                                base.Control.TxtTipoReporteOtros().attr('class', 'form-control');
                            } else {
                                base.Control.TxtTipoReporteOtros().attr('class', 'form-control hasError');
                            }
                        } else {
                            base.Control.TxtTipoReporteOtros().attr('class', 'form-control');
                        }
                    });
                    $('.checkboxClassCP:checked').each(function (i) {
                        var that = $(this).val();
                        if (that == Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.DatosConstantes.CheckOtros) {
                            if (base.Control.TxtClasificacionPerdidaOtros().val() == null || base.Control.TxtClasificacionPerdidaOtros().val() == '') {
                                resultado = false;
                            }
                            if (resultado) {
                                base.Control.TxtClasificacionPerdidaOtros().attr('class', 'form-control');
                            } else {
                                base.Control.TxtClasificacionPerdidaOtros().attr('class', 'form-control hasError');
                            }
                        } else {
                            base.Control.TxtClasificacionPerdidaOtros().attr('class', 'form-control');
                        }
                    });
                    $('.checkboxClassCI:checked').each(function (i) {
                        var that = $(this).val();
                        if (that == Pe.ElectroPeru.SGI.Presentacion.ReporteRiesgos.IngresoReporteRiesgos.DatosConstantes.CheckOtros) {
                            if (base.Control.TxtCausasInmediatasOtros().val() == null || base.Control.TxtCausasInmediatasOtros().val() == '') {
                                resultado = false;
                            }
                            if (resultado) {
                                base.Control.TxtCausasInmediatasOtros().attr('class', 'form-control');
                            } else {
                                base.Control.TxtCausasInmediatasOtros().attr('class', 'form-control hasError');
                            }
                        } else {
                            base.Control.TxtCausasInmediatasOtros().attr('class', 'form-control');
                        }
                    });
                    return resultado;
                }
            });
            return validaciones;
        },
        /*VALIDACIONES: TAB REPORTANTES*/
        ValidacionReportanteInterno: function () {
            var validaciones = new Array();

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.HdnCodigoReportanteInterno().val() == null || base.Control.HdnCodigoReportanteInterno().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtReportanteInterno().attr('class', 'form-control');
                    } else {
                        base.Control.TxtReportanteInterno().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });
            return validaciones;
        },
        ValidacionEmpresaReportada: function () {
            var validaciones = new Array();

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.HdnEmpresaReportada().val() == null || base.Control.HdnEmpresaReportada().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtEmpresaReportada().attr('class', 'form-control');
                    } else {
                        base.Control.TxtEmpresaReportada().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });
            return validaciones;
        },

    };
}