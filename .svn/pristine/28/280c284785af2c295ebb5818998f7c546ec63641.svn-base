/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 08022017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioIncidente');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioIncidente.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Control.FormularioIncidenteModel = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Models.FormularioIncidente;

        //if (base.Control.FormularioIncidenteModel.Record.CodigoArchivoAdjuntoPrincipal != null) {
        //    $('#nombreArchivoApendice .clsNombreArchivoApendice').html('<p>' + base.Control.FormularioIncidenteModel.Record.NombreArchivoAdjuntoPrincipal + '</p>');
        //}
        base.Control.BtnBuscarColaboradorSupervisorTrabajo().off('click');
        base.Control.BtnBuscarColaboradorSupervisorTrabajo().on('click', base.Event.BtnBuscarColaboradorSupervisorTrabajoClick);

        base.Control.DlgFormularioBuscarColaboradorSupervisorTrabajo = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.BuscarColaboradorSupervisorTrabajoSuccess
        });

        base.Control.SlcProyectoIncidente().off('change');
        base.Control.SlcProyectoIncidente().on('change', base.Event.SlcProyectoIncidenteChange);

        base.Control.BtnGrabarRecord().off('click');
        base.Control.BtnGrabarRecord().on('click', base.Event.BtnGrabarRecordClick);

        base.Control.BtnGrabarCierreRecord().off('click');
        base.Control.BtnGrabarCierreRecord().on('click', base.Event.BtnGrabarCierreRecordClick);

        base.Control.BtnCancelarRecord().off('click');
        base.Control.BtnCancelarRecord().on('click', base.Event.BtnCancelarRecordClick);

        base.Control.DlgFormularioRecordAnexoApendice = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordAnexoApendice.Controller({
            GrabarRecordAnexoApendiceSuccess: base.Event.BtnBuscarRecordAnexoApendiceClick
        });

        base.Control.DlgFormularioRecordAccion = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordAccion.Controller({
            GrabarRecordAccionSuccess: base.Event.BtnBuscarRecordAccionClick
        });

        //base.Control.TxtCodigoReporteIncidente().off('keypress');
        //base.Control.TxtCodigoReporteIncidente().on('keypress', base.Event.TxtSoloNumerosKeypress);

        base.Control.BtnAgregarRecordAnexoAppendix().off('click');
        base.Control.BtnAgregarRecordAnexoAppendix().on('click', base.Event.BtnAgregarRecordAnexoAppendixClick);

        base.Control.BtnAgregarRecordAccion().off('click');
        base.Control.BtnAgregarRecordAccion().on('click', base.Event.BtnAgregarRecordAccionClick);

        base.Function.CrearGridTrabajadorInvolucrado();
        base.Function.CrearGridRecordAccionInmediata();
        base.Function.CrearGridRecordAnexoApendice();
        //base.Function.CrearGridRecordAccion();

        //Record Categoria
        base.Function.CrearGridRecordCategoria();

        base.Control.DlgFormularioRecordCategoriaOtros = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordCategoriaOtros.Controller({
            GrabarRecordCategoriaSuccess: base.Event.BtnBuscarRecordCategoriaClick
        });
        base.Control.FormularioRecordCategoriaIncidente = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordCategoriaIncidente.Controller({
            GrabarRecordCategoriaSuccess: base.Event.BtnBuscarRecordCategoriaClick
        });
        base.Control.FormularioRecordCategoriaCuasi = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordCategoriaCuasi.Controller({
            GrabarRecordCategoriaSuccess: base.Event.BtnBuscarRecordCategoriaClick
        });
        //Fin de Record Categoria

        //Necesario Para la validacion de Envio Reportante
        base.Event.BtnBuscarTrabajadorInvolucradoClick();
        base.Event.BtnBuscarRecordAccionInmediataClick();
        base.Event.BtnBuscarRecordCategoriaClick();

        $('#cartTabsFormularioIncidente').on('shown.bs.tab', function (e) {
            var target = $(e.target).attr("href");
            if (target == "#tabTrabajadorInvolucrado") {
                if (base.Control.FormularioIncidenteModel.Record.CodigoRecord != null) {
                    $('#divTrabajadorInvolucrado').removeClass('hidden');
                    $('#divTrabajadorInvolucradoBotonGrilla').removeClass('hidden');
                }

                base.Event.BtnBuscarTrabajadorInvolucradoClick();
            }

            if (target == "#tabDescripcion") {
                if (base.Control.FormularioIncidenteModel.Record.CodigoRecord != null) {
                    $('#divDescripcionIncidente').removeClass('hidden');
                    $('#divDescripcionIncidenteBoton').removeClass('hidden');
                }
            }

            if (target == "#tabCategoria") {
                if (base.Control.FormularioIncidenteModel.Record.CodigoRecord != null) {
                }
                base.Event.BtnBuscarRecordCategoriaClick();
            }

            if (target == "#tabRecordAccionInmediata") {
                if (base.Control.FormularioIncidenteModel.Record.CodigoRecord != null) {
                    $('#divRecordAccionInmediata').removeClass('hidden');
                    $('#divRecordAccionInmediataBotonGrilla').removeClass('hidden');
                }

                base.Event.BtnBuscarRecordAccionInmediataClick();
            }

            if (target == "#tabDatosReportante") {
                if (base.Control.FormularioIncidenteModel.Record.CodigoRecord != null) {
                    $('#datosReportante').removeClass('hidden');
                    $('#divBotonReportante').removeClass('hidden');
                    $('#divContenedorReportView').removeClass('hidden');
                }
            }

            if (target == "#tabAnexo") {
                base.Event.BtnBuscarRecordAnexoApendiceClick();
            }

            if (target == "#tabFoto") {
                base.Event.BtnBuscarRecordAnexoFotoClick();
            }

            if (target == "#tabAccion") {
                base.Event.BtnBuscarRecordAccionClick();
            }
        });

        var hoy = new Date();
        var dd = hoy.getDate();
        var mm = hoy.getMonth();
        var yyyy = hoy.getFullYear();
        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaIncidente(),
            maxDateFrom: new Date(yyyy, mm, dd),
            minDateFrom: new Date(1900, 1, 1)
        });

        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaCierreRecord(),
            minDateFrom: new Date(1900, 1, 1)
        });

        //base.Control.ChkIndicadorNuevaEmpresa().off("click");
        //base.Control.ChkIndicadorNuevaEmpresa().on("click", function () {
        //    if ($(this).is(":checked")) {
        //        base.Control.TxtNombreNuevaEmpresaIncidente().removeAttr("disabled");
        //        base.Control.SlcEmpresaIncidente().prop('selectedIndex', 0);
        //        base.Control.SlcEmpresaIncidente().attr("disabled", "disabled");
        //    } else {
        //        base.Control.TxtNombreNuevaEmpresaIncidente().attr("disabled", "disabled");
        //        base.Control.TxtNombreNuevaEmpresaIncidente().val('');
        //        base.Control.SlcEmpresaIncidente().removeAttr("disabled");
        //    }
        //});

        //if (base.Control.ChkIndicadorNuevaEmpresa().is(":checked")) {
        //    base.Control.TxtNombreNuevaEmpresaIncidente().removeAttr("disabled");
        //    base.Control.SlcEmpresaIncidente().attr("disabled", "disabled");
        //} else {
        //    base.Control.TxtNombreNuevaEmpresaIncidente().attr("disabled", "disabled");
        //    base.Control.SlcEmpresaIncidente().removeAttr("disabled");
        //}

        //Pe.GMD.UI.Web.Components.TextBox.Function.Configure();

        //base.Control.FileArchivoAdjuntoPrincipal().on("change", function () {
        //    var files = this.files;

        //    if (!files) {
        //        base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.ValidaArchivo });
        //        return;
        //    }

        //    if (this.files && this.files[0]) {
        //        var reader = new FileReader();
        //        if (this.files[0].size <= base.Control.FormularioIncidenteModel.Record.PesoMaximoArchivoAnexoSharePoint) {
        //            base.Control.NombreArchivoAdjuntoPrincipal = this.files[0].name;
        //            var uploadFile = this.files[0];

        //            reader.onload = function (e) {
        //                if (reader.result != "" && reader.result != null) {
        //                    base.Control.ArchivoAdjuntoPrincipalBase64 = reader.result.split(',')[1];
        //                    $('#nombreArchivoApendice .clsNombreArchivoApendice').html('');
        //                }
        //                else {
        //                    base.Control.ArchivoAdjuntoPrincipalBase64 = null;
        //                    base.Control.NombreArchivoAdjuntoPrincipal = null;
        //                    base.Control.FileArchivoAdjuntoPrincipal().val('');
        //                    base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.ValidaArchivo });
        //                }
        //            };

        //            reader.readAsDataURL(uploadFile);
        //        } else {
        //            base.Control.ArchivoAdjuntoPrincipalBase64 = null;
        //            base.Control.NombreArchivoAdjuntoPrincipal = null;
        //            base.Control.FileArchivoAdjuntoPrincipal().val('');
        //            base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.EtiquetaTamanioArchivoAnexoMaximo.format(base.Control.FormularioIncidenteModel.Record.PesoMaximoArchivoAnexoSharePointString) });
        //        }
        //    }
        //});

        base.Control.ValidadorRecord = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmRecord(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraRecord()
        });

        //Inicio - Trabajador Involucrado
        base.Control.BtnBuscarEmpresaInvolucrado().off('click');
        base.Control.BtnBuscarEmpresaInvolucrado().on('click', base.Event.BtnBuscarEmpresaInvolucradoClick);

        base.Control.DlgFormularioBuscarEmpresaInvolucrado = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.FormularioBuscadorEmpresa.Controller({
            AceptarSuccess: base.Event.BuscarEmpresaInvolucradoSuccess
        });

        base.Control.BtnBuscarColaboradorInvolucrado().off('click');
        base.Control.BtnBuscarColaboradorInvolucrado().on('click', base.Event.BtnBuscarColaboradorInvolucradoClick);

        base.Control.DlgFormularioBuscarColaboradorInvolucrado = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.BuscarColaboradorInvolucradoSuccess
        });

        base.Control.BtnBuscarColaboradorReporta().off('click');
        base.Control.BtnBuscarColaboradorReporta().on('click', base.Event.BtnBuscarColaboradorReportaClick);

        base.Control.DlgFormularioBuscarColaboradorReporta = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.BuscarColaboradorReportaSuccess
        });

        base.Control.SlcIndicadorSufrioLesionInvolucrado().off('change');
        base.Control.SlcIndicadorSufrioLesionInvolucrado().on('change', base.Event.SlcIndicadorSufrioLesionInvolucradoChange);

        base.Control.ValidadorTrabajadorInvolucrado = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmTrabajadorInvolucrado(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraTrabajadorInvolucrado()
        });

        base.Control.BtnGrabarTrabajadorInvolucrado().off('click');
        base.Control.BtnGrabarTrabajadorInvolucrado().on('click', base.Event.BtnGrabarTrabajadorInvolucradoClick);

        //DACE
        base.Control.btnLimpiarTrabInv().off('click');
        base.Control.btnLimpiarTrabInv().on('click', base.Event.BtnLimpiarTrabInvolucradoClick);

        //Fin - Trabajador Involucrado

        //Inicio - Anexo Foto
        base.Function.CrearGridRecordAnexoFoto();
        base.Control.BtnAgregarRecordAnexoFoto().off('click');
        base.Control.BtnAgregarRecordAnexoFoto().on('click', base.Event.BtnAgregarRecordAnexoFotoClick);

        base.Control.DlgFormularioRecordAnexoFoto = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordAnexo.Controller({
            GrabarRecordAnexoFotoSuccess: base.Event.BtnBuscarRecordAnexoFotoClick
        });

        base.Control.DlgFormularioVistaPreviaFoto = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioVistaPreviaFoto.Controller({

        });
        //Fin - Anexo Foto

        //Inicio - Descripción de Incidente
        base.Control.BtnGrabarDescripcionIncidente().off('click');
        base.Control.BtnGrabarDescripcionIncidente().on('click', base.Event.BtnGrabarDescripcionIncidenteClick);

        base.Control.ValidadorDescripcionIncidente = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmDescripcionIncidente(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.ValidarCampos
        });
        //Fin - Descripción de Incidente

        //Inicio - Acción Inmediata
        base.Control.BtnGrabarRecordAccionInmediata().off('click');
        base.Control.BtnGrabarRecordAccionInmediata().on('click', base.Event.BtnGrabarRecordAccionInmediataClick);

        base.Control.ValidadorRecordAccionInmediata = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmRecordAccionInmediata(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.ValidarCampos
        });
        //Fin - Acción Inmediata

        base.Control.ValidadorCierreRecord = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmCierreRecord(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.ValidarCampos
        });

        //Inicio - Datos del reportante
        base.Control.BtnGuardarReportante().off('click');
        base.Control.BtnGuardarReportante().on('click', base.Event.BtnGrabarRecordDatosReportanteClick);

        base.Control.ValidadorRecordDatosReportante = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmRecordDatosReportante(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraRecordDatosReportante()
        });

        base.Control.BtnVistaPreviaReportante().off('click');
        base.Control.BtnVistaPreviaReportante().on('click', base.Event.BtnVistaPreviaReporteIncidenteClick);

        base.Control.BtnEnviarReportante().off('click');
        base.Control.BtnEnviarReportante().on('click', base.Event.BtnEnviarReporteIncidenteClick);
        //Fin Datos del reportante

        base.Control.ArrTrabajadoresInvolucrados = [];


    };

    base.Control = {
        FormularioIncidenteModel: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        FrmRecord: function () { return $('#frmRecord'); },
        FrmCierreRecord: function () { return $('#frmCierreRecord'); },
        DlgFormularioBuscarColaboradorSupervisorTrabajo: null,
        ValidadorRecord: null,
        ValidadorCierreRecord: null,

        //TxtCodigoReporteIncidente: function () { return $('#txtCodigoReporteIncidente'); },
        SlcConsecuenciaIncidente: function () { return $('#slcConsecuenciaIncidente'); },
        SlcPotencialIncidente: function () { return $('#slcPotencialIncidente'); },
        TxtTituloIncidente: function () { return $('#txtTituloIncidente'); },
        SlcCategoriaIncidente: function () { return $('#slcCategoriaIncidente'); },
        SlcProyectoIncidente: function () { return $('#slcProyectoIncidente'); },
        TxtCodigoIdentificadorProyecto: function () { return $('#txtCodigoIdentificadorProyecto'); },
        TxtNombrePaisProyecto: function () { return $('#txtNombrePaisProyecto'); },
        //SlcEmpresaIncidente: function () { return $('#slcEmpresaIncidente'); },
        //ChkIndicadorNuevaEmpresa: function () { return $('#chkIndicadorNuevaEmpresa'); },
        //TxtNombreNuevaEmpresaIncidente: function () { return $('#txtNombreNuevaEmpresaIncidente'); },
        TxtNombreLugarExactoIncidente: function () { return $('#txtNombreLugarExactoIncidente'); },
        DtpFechaIncidente: function () { return $('#dtpFechaIncidente'); },
        SlcHoraIncidente: function () { return $('#slcHoraIncidente'); },
        SlcMinutoIncidente: function () { return $('#slcMinutoIncidente'); },
        SlcTurnoIncidente: function () { return $('#slcTurnoIncidente'); },
        SlcSupervisionMomentoIncidente: function () { return $('#slcSupervisionMomentoIncidente'); },
        HdnCodigoColaboradorSupervisorTrabajo: function () { return $('#hdnCodigoColaboradorSupervisorTrabajo'); },
        TxtNombreColaboradorSupervisorTrabajo: function () { return $('#txtNombreColaboradorSupervisorTrabajo'); },
        BtnBuscarColaboradorSupervisorTrabajo: function () { return $('#btnBuscarColaboradorSupervisorTrabajo'); },
        //TxtDescripcionIncidente: function () { return $('#txtDescripcionIncidente'); },
        //SlcRequiereInformeFinalIncidente: function () { return $('#slcRequiereInformeFinalIncidente'); },
        //FileArchivoAdjuntoPrincipal: function () { return $('#fileArchivoAdjuntoPrincipal'); },
        //HdnCodigoArchivoAdjuntoPrincipal: function () { return $('#hdnCodigoArchivoAdjuntoPrincipal'); },
        //ArchivoAdjuntoPrincipalBase64: null,
        //NombreArchivoAdjuntoPrincipal: null,

        BtnGrabarRecord: function () { return $('#btnGuardarRecord'); },
        BtnCancelarRecord: function () { return $('#btnCancelarRecord'); },

        //Inicio - Trabajador Involucrado
        FrmTrabajadorInvolucrado: function () { return $('#frmTrabajadorInvolucrado'); },
        ValidadorTrabajadorInvolucrado: null,
        DlgFormularioBuscarEmpresaInvolucrado: null,
        HdnCodigoEmpresaInvolucrado: function () { return $('#hdnCodigoEmpresaInvolucrado'); },
        TxtNombreEmpresaInvolucrado: function () { return $('#txtNombreEmpresaInvolucrado'); },
        BtnBuscarEmpresaInvolucrado: function () { return $('#btnBuscarEmpresaInvolucrado'); },

        DlgFormularioBuscarColaboradorInvolucrado: null,
        HdnCodigoColaboradorInvolucrado: function () { return $('#hdnCodigoColaboradorInvolucrado'); },
        TxtNombreColaboradorInvolucrado: function () { return $('#txtNombreColaboradorInvolucrado'); },
        BtnBuscarColaboradorInvolucrado: function () { return $('#btnBuscarColaboradorInvolucrado'); },

        TxtTipoDocumentoInvolucrado: function () { return $('#txtTipoDocumentoInvolucrado'); },
        TxtNumeroDocumentoInvolucrado: function () { return $('#txtNumeroDocumentoInvolucrado'); },
        SlcPuestoTrabajoInvolucrado: function () { return $('#slcPuestoTrabajoInvolucrado'); },
        SlcIndicadorSufrioLesionInvolucrado: function () { return $('#slcIndicadorSufrioLesionInvolucrado'); },
        SlcParteCuerpoLesionadaInvolucrado: function () { return $('#slcParteCuerpoLesionadaInvolucrado'); },
        SlcTipoLesionInvolucrado: function () { return $('#slcTipoLesionInvolucrado'); },
        SlcLesionActualInvolucrado: function () { return $('#slcLesionActualInvolucrado'); },

        //BtnCancelarTrabajadorInvolucrado: function () { return $('#btnCancelarTrabajadorInvolucrado'); },
        BtnGrabarTrabajadorInvolucrado: function () { return $('#btnGrabarTrabajadorInvolucrado'); },
        ArrTrabajadoresInvolucrados: [],
        GrdResultadoTrabajadorInvolucrado: null,
        //Fin - Trabajador Involucrado

        //Inicio - Descripción de Incidente
        FrmDescripcionIncidente: function () { return $('#frmDescripcionIncidente'); },
        ValidadorDescripcionIncidente: null,
        TxtDescripcionIncidente: function () { return $('#txtDescripcionIncidente'); },

        BtnGrabarDescripcionIncidente: function () { return $('#btnGrabarDescripcionIncidente'); },
        //Fin - Descripción de Incidente

        //Categoria
        TxtActualConsecuenciaIncidente: function () { return $('#txtActualConsecuenciaIncidente'); },
        TxtPotencialConsecuenciaIncidente: function () { return $('#txtPotencialConsecuenciaIncidente'); },
        TxtHPICategoriaEvaluacionConsecuencia: function () { return $('#txtHPICategoriaEvaluacionConsecuencia'); },
        TxtCategoriaPrincipalIncidente: function () { return $('#txtCategoriaPrincipalIncidente'); },

        //Anexo Foto
        BtnAgregarRecordAnexoFoto: function () { return $('#btnAgregarRecordAnexoFoto'); },
        DlgFormularioRecordAnexoFoto: null,
        GrdResultadoRecordAnexoFoto: null,
        DlgFormularioVistaPreviaFoto: null,
        //Fin - Anexo Foto

        //Inicio - Record Acción Inmediata
        FrmRecordAccionInmediata: function () { return $('#frmRecordAccionInmediata'); },
        ValidadorRecordAccionInmediata: null,
        TxtDescripcionAccionInmediata: function () { return $('#txtDescripcionAccionInmediata'); },

        GrdResultadoRecordAccionInmediata: null,
        BtnGrabarRecordAccionInmediata: function () { return $('#btnGrabarRecordAccionInmediata'); },
        //Fin - Acción Inmediata

        BtnGrabarCierreRecord: function () { return $('#btnGrabarCierreRecord'); },
        BtnCancelarCierre: function () { return $('#btnCancelarCierre'); },

        BtnAgregarRecordAnexoAppendix: function () { return $('#btnAgregarRecordAnexoAppendix'); },
        BtnAgregarRecordAccion: function () { return $('#btnAgregarRecordAccion'); },

        DlgFormularioRecordAnexoApendice: null,
        DlgFormularioRecordAccion: null,

        GrdResultadoRecordAppendix: null,
        GrdResultadoRecordAccion: null,
        GrdResultadoCategoria: null,

        DtpFechaCierreRecord: function () { return $('#dtpFechaCierreRecord'); },
        TxtComentarioCierreRecord: function () { return $('#txtComentarioCierreRecord'); },

        //Inicio - Record Datos Reportante
        DlgFormularioBuscarColaboradorReporta: null,
        HdnCodigoColaboradorReporta: function () { return $('#hdnCodigoColaboradorReporta'); },
        TxtNombreColaboradorReporta: function () { return $('#txtNombreColaboradorReporta'); },
        TxtFechaReporte: function () { return $('#txtFechaReporte'); },
        TxtHoraReporte: function () { return $('#txtHoraReporte'); },
        BtnBuscarColaboradorReporta: function () { return $('#btnBuscarColaboradorReporta'); },
        CheckboxNotificacion: function () { return $('#checkboxNotificacion'); },
        SlcPuestoCargoReporta: function () { return $('#slcPuestoCargoReporta'); },
        FrmRecordDatosReportante: function () { return $('#frmRecordDatosReportante'); },
        ValidadorRecordDatosReportante: null,
        BtnGuardarReportante: function () { return $('#btnGuardarReportante'); },
        btnLimpiarTrabInv: function () { return $('#btnLimpiarTrabInv'); },
        BtnVistaPreviaReportante: function () { return $('#btnVistaPreviaReportante'); },
        BtnEnviarReportante: function () { return $('#btnEnviarReportante'); },
        //Fin - Datos Reportante

        //Para validacion 
        lengthAccionesInmediatas: null,
        lengthTrabajadoresInvolucrados: null,
    };

    base.Event = {
        SlcProyectoIncidenteChange: function () {
            'use strict'
            if (base.Control.SlcProyectoIncidente().val() != null && base.Control.SlcProyectoIncidente().val() != '') {
                base.Ajax.AjaxBuscarDatosProyecto.data = {
                    CodigoProyecto: base.Control.SlcProyectoIncidente().val()
                };

                base.Ajax.AjaxBuscarDatosProyecto.submit();
            }
        },

        TxtSoloNumerosKeypress: function (event) {
            var regex = /[0-9]/;
            var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
            if (!regex.test(key)) {
                event.preventDefault();
                return false;
            }
        },

        BtnCancelarRecordClick: function () {
            base.Control.FormularioIncidenteModel.CodigoTipoRecord = null;
            base.Control.FormularioIncidenteModel.Record.CodigoRecord = null;

            var filtro = {
            };

            window.location.href = Pe.ElectroPeru.SGI.Presentacion.Base.Actions.Records;
        },

        BtnBuscarColaboradorSupervisorTrabajoClick: function () {
            base.Control.DlgFormularioBuscarColaboradorSupervisorTrabajo.Show(false, [], null);
        },

        BuscarColaboradorSupervisorTrabajoSuccess: function (colaboradorSeleccionado) {
            if (colaboradorSeleccionado.length > 0) {
                base.Control.HdnCodigoColaboradorSupervisorTrabajo().val(colaboradorSeleccionado[0].CodigoColaborador);
                base.Control.TxtNombreColaboradorSupervisorTrabajo().val(colaboradorSeleccionado[0].Nombres + ' ' + colaboradorSeleccionado[0].ApellidoPaterno + ' ' + colaboradorSeleccionado[0].ApellidoMaterno);
            }
            else {
                base.Control.HdnCodigoColaboradorSupervisorTrabajo().val(null);
                base.Control.TxtNombreColaboradorSupervisorTrabajo().val('');
            }
        },

        BtnBuscarColaboradorInvolucradoClick: function () {
            'use strict';
            if (base.Control.HdnCodigoEmpresaInvolucrado().val() != null && base.Control.HdnCodigoEmpresaInvolucrado().val() != '') {
                base.Control.TxtNombreEmpresaInvolucrado().removeClass('hasError');

                var filtro = {
                    CodigoEmpresa: base.Control.HdnCodigoEmpresaInvolucrado().val(),
                    NombreEmpresa: base.Control.TxtNombreEmpresaInvolucrado().val()
                };

                base.Control.DlgFormularioBuscarColaboradorInvolucrado.Show(false, [], filtro);
            }
            else {
                base.Control.TxtNombreEmpresaInvolucrado().addClass('hasError');
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.EtiquetaMensajeSeleccionarEmpresa });
            }
        },

        BuscarColaboradorInvolucradoSuccess: function (colaboradorSeleccionado) {
            if (colaboradorSeleccionado.length > 0) {
                base.Control.HdnCodigoColaboradorInvolucrado().val(colaboradorSeleccionado[0].CodigoColaborador);
                base.Control.TxtNombreColaboradorInvolucrado().val(colaboradorSeleccionado[0].Nombres + ' ' + colaboradorSeleccionado[0].ApellidoPaterno + ' ' + colaboradorSeleccionado[0].ApellidoMaterno);
                base.Control.TxtTipoDocumentoInvolucrado().val(colaboradorSeleccionado[0].DescripcionTipoDocumento);
                base.Control.TxtNumeroDocumentoInvolucrado().val(colaboradorSeleccionado[0].NumeroDocumento);
                base.Control.SlcPuestoTrabajoInvolucrado().val(colaboradorSeleccionado[0].CodigoPuestoTrabajo);

                //DACE
                base.Control.TxtNombreColaboradorInvolucrado().removeClass('hasError');
            }
            else {
                base.Control.HdnCodigoColaboradorInvolucrado().val(null);
                base.Control.TxtNombreColaboradorInvolucrado().val('');
                base.Control.TxtTipoDocumentoInvolucrado().val('');
                base.Control.TxtNumeroDocumentoInvolucrado().val('');
                base.Control.SlcPuestoTrabajoInvolucrado().val('');
            }
        },

        BtnBuscarColaboradorReportaClick: function () {
            'use strict';
            base.Control.DlgFormularioBuscarColaboradorReporta.Show(false, [], null);
        },

        BuscarColaboradorReportaSuccess: function (colaboradorSeleccionado) {
            if (colaboradorSeleccionado.length > 0) {
                base.Control.HdnCodigoColaboradorReporta().val(colaboradorSeleccionado[0].CodigoColaborador);
                base.Control.TxtNombreColaboradorReporta().val(colaboradorSeleccionado[0].Nombres + ' ' + colaboradorSeleccionado[0].ApellidoPaterno + ' ' + colaboradorSeleccionado[0].ApellidoMaterno);
                if (colaboradorSeleccionado[0].CodigoPuestoTrabajo != null) {
                    base.Control.SlcPuestoCargoReporta().val(colaboradorSeleccionado[0].CodigoPuestoTrabajo);
                }
            }
            else {
                base.Control.HdnCodigoColaboradorReporta().val(null);
                base.Control.TxtNombreColaboradorReporta().val('');
            }
        },


        BtnBuscarEmpresaInvolucradoClick: function () {
            'use strict';
            base.Control.DlgFormularioBuscarEmpresaInvolucrado.Show(false, [], null);
        },

        BuscarEmpresaInvolucradoSuccess: function (empresaSeleccionada) {
            if (empresaSeleccionada.length > 0) {
                base.Control.TxtNombreEmpresaInvolucrado().removeClass('hasError');

                base.Control.HdnCodigoEmpresaInvolucrado().val(empresaSeleccionada[0].CodigoEmpresa);
                base.Control.TxtNombreEmpresaInvolucrado().val(empresaSeleccionada[0].RazonSocial);
            }
            else {
                base.Control.HdnCodigoEmpresaInvolucrado().val(null);
                base.Control.TxtNombreEmpresaInvolucrado().val('');
            }
        },

        BtnBuscarTrabajadorInvolucradoClick: function () {
            if (base.Control.FormularioIncidenteModel.Record.CodigoRecord != null) {
                var filtro = {
                    CodigoRecord: base.Control.FormularioIncidenteModel.Record.CodigoRecord
                };

                base.Control.GrdResultadoTrabajadorInvolucrado.Load(filtro);
            }
        },

        BtnBuscarRecordAnexoApendiceClick: function () {
            if (base.Control.FormularioIncidenteModel.Record.CodigoRecord != null) {
                var filtroAnexoApendice = {
                    CodigoRecord: base.Control.FormularioIncidenteModel.Record.CodigoRecord,
                    CodigoTipoAnexo: 'ADJ'
                };

                base.Control.GrdResultadoRecordAppendix.Load(filtroAnexoApendice);
            }
        },

        BtnBuscarRecordAccionClick: function () {
            if (base.Control.FormularioIncidenteModel.Record.CodigoRecord != null) {
                var filtro = {
                    CodigoRecord: base.Control.FormularioIncidenteModel.Record.CodigoRecord
                };

                base.Control.GrdResultadoRecordAccion.Load(filtro);
            }
        },

        BtnGrabarCierreRecordClick: function () {
            if (base.Control.ValidadorCierreRecord.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarCierreRecord.data = {
                            CodigoRecordEstado: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.EstadoRecord.Cerrado,
                            CodigoRecord: base.Control.FormularioIncidenteModel.Record.CodigoRecord,
                            ComentarioCierre: base.Control.TxtComentarioCierreRecord().val().trim(),
                            FechaEstadoString: base.Control.DtpFechaCierreRecord().val(),
                            CodigoColaboradorCierre: base.Control.FormularioIncidenteModel.Record.CodigoColaboradorCierre
                        }

                        base.Ajax.AjaxGrabarCierreRecord.submit();
                    }
                });
            }
            else {
                $("#frmCierreRecordSummaryErrorMessage").empty();
                $("#frmCierreRecordSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },

        BtnGrabarRecordClick: function () {
            if (base.Control.ValidadorRecord.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    indicadorModal: false,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarRecord.data = {
                            NumeroRecord: $('#txtNumeroRecord').val(),
                            CodigoRecord: base.Control.FormularioIncidenteModel.Record.CodigoRecord,
                            CodigoTipoRecord: base.Control.FormularioIncidenteModel.Record.CodigoTipoRecord,
                            //CodigoReporteIncidente: base.Control.TxtCodigoReporteIncidente().val(),
                            CodigoConsecuenciaIncidente: base.Control.SlcConsecuenciaIncidente().val(),
                            CodigoPotencialIncidente: base.Control.SlcPotencialIncidente().val(),
                            Titulo: base.Control.TxtTituloIncidente().val(),
                            CodigoCategoriaIncidente: base.Control.SlcCategoriaIncidente().val(),
                            CodigoProyecto: base.Control.SlcProyectoIncidente().val(),
                            //CodigoEmpresa: base.Control.SlcEmpresaIncidente().val(),
                            //IndicadorNuevaEmpresa: base.Control.ChkIndicadorNuevaEmpresa().is(":checked"),
                            //NombreNuevaEmpresa: base.Control.TxtNombreNuevaEmpresaIncidente().val(),
                            NombreLugarExacto: base.Control.TxtNombreLugarExactoIncidente().val(),
                            FechaRecordString: base.Control.DtpFechaIncidente().val() + " " + base.Control.SlcHoraIncidente().val() + ":" + base.Control.SlcMinutoIncidente().val(),
                            CodigoTurno: base.Control.SlcTurnoIncidente().val(),
                            SupervisionMomentoIncidente: base.Control.SlcSupervisionMomentoIncidente().val(),
                            CodigoColaboradorSupervisorTrabajo: base.Control.HdnCodigoColaboradorSupervisorTrabajo().val(),
                            //Descripcion: base.Control.TxtDescripcionIncidente().val(),
                            //RequiereInformeFinalIncidente: base.Control.SlcRequiereInformeFinalIncidente().val(),
                            //NombreArchivoApendiceSharePoint: base.Control.NombreArchivoAdjuntoPrincipal,
                            //DataArchivoApendice: base.Control.ArchivoAdjuntoPrincipalBase64
                        }

                        base.Ajax.AjaxGrabarRecord.submit();
                    }
                });
            }
            else {
                $("#frmRecordSummaryErrorMessage").empty();
                $("#frmRecordSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },

        //Inicio - Trabajador Involucrado
        SlcIndicadorSufrioLesionInvolucradoChange: function () {
            base.Control.SlcParteCuerpoLesionadaInvolucrado().val('');
            base.Control.SlcTipoLesionInvolucrado().val('');
            base.Control.SlcLesionActualInvolucrado().val('');

            if (base.Control.SlcIndicadorSufrioLesionInvolucrado().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.IndicadorSufrioLesion.SiSufrioLesion) {
                base.Control.SlcParteCuerpoLesionadaInvolucrado().removeAttr('disabled', 'disabled');
                base.Control.SlcParteCuerpoLesionadaInvolucrado().removeAttr('readonly', 'readonly');
                base.Control.SlcTipoLesionInvolucrado().removeAttr('disabled', 'disabled');
                base.Control.SlcTipoLesionInvolucrado().removeAttr('readonly', 'readonly');
                base.Control.SlcLesionActualInvolucrado().removeAttr('disabled', 'disabled');
                base.Control.SlcLesionActualInvolucrado().removeAttr('readonly', 'readonly');
            }
            else {
                base.Control.SlcParteCuerpoLesionadaInvolucrado().attr('disabled', 'disabled');
                base.Control.SlcParteCuerpoLesionadaInvolucrado().attr('readonly', 'readonly');
                base.Control.SlcTipoLesionInvolucrado().attr('disabled', 'disabled');
                base.Control.SlcTipoLesionInvolucrado().attr('readonly', 'readonly');
                base.Control.SlcLesionActualInvolucrado().attr('disabled', 'disabled');
                base.Control.SlcLesionActualInvolucrado().attr('readonly', 'readonly');
            }
        },

        BtnGrabarTrabajadorInvolucradoClick: function () {
            if (base.Control.FormularioIncidenteModel.Record.CodigoRecord != null || base.Control.FormularioIncidenteModel.Record.CodigoRecord != '') {
                if (base.Control.ValidadorTrabajadorInvolucrado.isValid()) {
                    if (base.Control.SlcIndicadorSufrioLesionInvolucrado().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.IndicadorSufrioLesion.NoSufrioLesion) {
                        base.Control.SlcParteCuerpoLesionadaInvolucrado().val('');
                        base.Control.SlcTipoLesionInvolucrado().val('');
                        base.Control.SlcLesionActualInvolucrado().val('');
                    }

                    base.Control.Mensaje.Confirmation({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                        onAccept: function () {
                            base.Ajax.AjaxGrabarPersonaInvolucrada.data = {
                                CodigoPersonaInvolucrada: base.Control.FormularioIncidenteModel.PersonaInvolucrada.CodigoPersonaInvolucrada,
                                CodigoRecord: base.Control.FormularioIncidenteModel.Record.CodigoRecord,
                                CodigoEmpresa: base.Control.HdnCodigoEmpresaInvolucrado().val(),
                                CodigoColaboradorInvolucrado: base.Control.HdnCodigoColaboradorInvolucrado().val(),
                                CodigoPuestoTrabajo: base.Control.SlcPuestoTrabajoInvolucrado().val(),
                                IndicadorSufrioLesion: base.Control.SlcIndicadorSufrioLesionInvolucrado().val(),
                                CodigoParteCuerpoLesionada: base.Control.SlcParteCuerpoLesionadaInvolucrado().val(),
                                CodigoTipoLesion: base.Control.SlcTipoLesionInvolucrado().val(),
                                CodigoLesionActual: base.Control.SlcLesionActualInvolucrado().val(),
                            }

                            base.Ajax.AjaxGrabarPersonaInvolucrada.submit();
                        }
                    });
                }
                else {
                    $("#frmTrabajadorInvolucradoSummaryErrorMessage").empty();
                    $("#frmTrabajadorInvolucradoSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                }
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValidarTabPrincipal,
                });
            }
        },

        //DACE
        BtnLimpiarTrabInvolucradoClick: function () {
            base.Control.HdnCodigoEmpresaInvolucrado().val(null);
            base.Control.TxtNombreEmpresaInvolucrado().val('');

            base.Control.HdnCodigoColaboradorInvolucrado().val(null);
            base.Control.TxtNombreColaboradorInvolucrado().val('');
            base.Control.TxtTipoDocumentoInvolucrado().val('');
            base.Control.TxtNumeroDocumentoInvolucrado().val('');
            base.Control.SlcPuestoTrabajoInvolucrado().val('');

            base.Control.SlcIndicadorSufrioLesionInvolucrado().val('')
            base.Control.SlcParteCuerpoLesionadaInvolucrado().val('');
            base.Control.SlcTipoLesionInvolucrado().val('');
            base.Control.SlcLesionActualInvolucrado().val('');
        },

        BtnGridEditTrabajadorInvolucradoClick: function (row, data) {
            'use strict';
            base.Control.FormularioIncidenteModel.PersonaInvolucrada.CodigoPersonaInvolucrada = data.CodigoPersonaInvolucrada;
            base.Control.HdnCodigoEmpresaInvolucrado().val(data.CodigoEmpresa);
            base.Control.TxtNombreEmpresaInvolucrado().val(data.NombreEmpresa);
            base.Control.HdnCodigoColaboradorInvolucrado().val(data.CodigoColaboradorInvolucrado);
            base.Control.TxtNombreColaboradorInvolucrado().val(data.NombreColaboradorInvolucrado);
            base.Control.TxtTipoDocumentoInvolucrado().val(data.DescripcionTipoDocumento);
            base.Control.TxtNumeroDocumentoInvolucrado().val(data.NumeroDocumento);
            base.Control.SlcPuestoTrabajoInvolucrado().val(data.CodigoPuestoTrabajo);
            base.Control.SlcIndicadorSufrioLesionInvolucrado().val(data.IndicadorSufrioLesion);

            base.Event.SlcIndicadorSufrioLesionInvolucradoChange();

            base.Control.SlcParteCuerpoLesionadaInvolucrado().val(data.CodigoParteCuerpoLesionada);
            base.Control.SlcTipoLesionInvolucrado().val(data.CodigoTipoLesion);
            base.Control.SlcLesionActualInvolucrado().val(data.CodigoLesionActual);
        },

        BtnGridDeleteTrabajadorInvolucradoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                onAccept: function () {
                    base.Ajax.AjaxEliminarPersonaInvolucrada.data = {
                        listaCodigosPersonaInvolucrada: [data.CodigoPersonaInvolucrada],
                    };

                    base.Ajax.AjaxEliminarPersonaInvolucrada.submit();
                }
            });
        },
        //Fin - Trabajador Involucrado

        //Inicio - Descripción de Incidente
        BtnGrabarDescripcionIncidenteClick: function () {
            if (base.Control.FormularioIncidenteModel.Record.CodigoRecord != null || base.Control.FormularioIncidenteModel.Record.CodigoRecord != '') {
                if (base.Control.ValidadorDescripcionIncidente.isValid()) {
                    base.Control.Mensaje.Confirmation({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                        onAccept: function () {
                            base.Ajax.AjaxGrabarDescripcionIncidente.data = {
                                CodigoRecord: base.Control.FormularioIncidenteModel.Record.CodigoRecord,
                                Descripcion: base.Control.TxtDescripcionIncidente().val().trim()
                            }

                            base.Ajax.AjaxGrabarDescripcionIncidente.submit();
                        }
                    });
                }
                else {
                    $("#frmDescripcionIncidenteSummaryErrorMessage").empty();
                    $("#frmDescripcionIncidenteSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                }
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValidarTabPrincipal,
                });
            }
        },
        //Fin - Descripción de Incidente

        //Inicio - Anexo Foto
        BtnBuscarRecordAnexoFotoClick: function () {
            if (base.Control.FormularioIncidenteModel.Record.CodigoRecord != null) {
                var filtro = {
                    CodigoRecord: base.Control.FormularioIncidenteModel.Record.CodigoRecord,
                    CodigoTipoAnexo: 'FOT'
                };

                base.Control.GrdResultadoRecordAnexoFoto.Load(filtro);
            }
        },

        BtnAgregarRecordAnexoFotoClick: function () {
            if (base.Control.FormularioIncidenteModel.Record.CodigoRecord != null) {
                base.Control.DlgFormularioRecordAnexoFoto.Show({
                    CodigoRecordAnexo: null,
                    CodigoRecord: base.Control.FormularioIncidenteModel.Record.CodigoRecord,
                    CodigoEstadoRecord: base.Control.FormularioIncidenteModel.Record.CodigoEstadoRecord
                });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValidarTabPrincipal,
                });
            }
        },

        BtnGridVistaPreviaFotoClick: function (row, data) {
            base.Control.DlgFormularioVistaPreviaFoto.Show({
                CodigoRecordAnexo: data.CodigoRecordAnexo,
                CodigoRecord: data.CodigoRecord
            });
        },

        BtnGridEditRecordAnexoFotoClick: function (row, data) {
            'use strict'
            base.Control.DlgFormularioRecordAnexoFoto.Show({
                CodigoEstadoRecord: base.Control.FormularioIncidenteModel.Record.CodigoEstadoRecord,
                CodigoRecordAnexo: data.CodigoRecordAnexo,
                CodigoRecord: data.CodigoRecord,
                CodigoArchivoAnexoSharePoint: data.CodigoArchivoAnexoSharePoint
            });
        },
        //Fin - Anexo Foto

        //Inicio - Record Acción Inmediata
        BtnBuscarRecordAccionInmediataClick: function () {
            if (base.Control.FormularioIncidenteModel.Record.CodigoRecord != null) {
                var filtro = {
                    CodigoRecord: base.Control.FormularioIncidenteModel.Record.CodigoRecord
                };

                base.Control.GrdResultadoRecordAccionInmediata.Load(filtro);
            }
        },

        BtnGrabarRecordAccionInmediataClick: function () {
            if (base.Control.FormularioIncidenteModel.Record.CodigoRecord != null || base.Control.FormularioIncidenteModel.Record.CodigoRecord != '') {
                if (base.Control.ValidadorRecordAccionInmediata.isValid()) {
                    base.Control.Mensaje.Confirmation({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                        onAccept: function () {
                            base.Ajax.AjaxGrabarRecordAccionInmediata.data = {
                                CodigoRecordAccionInmediata: base.Control.FormularioIncidenteModel.RecordAccionInmediata.CodigoRecordAccionInmediata,
                                CodigoRecord: base.Control.FormularioIncidenteModel.Record.CodigoRecord,
                                Descripcion: base.Control.TxtDescripcionAccionInmediata().val().trim()
                            }

                            base.Ajax.AjaxGrabarRecordAccionInmediata.submit();
                        }
                    });
                }
                else {
                    $("#frmRecordAccionInmediataSummaryErrorMessage").empty();
                    $("#frmRecordAccionInmediataSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                }
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValidarTabPrincipal,
                });
            }
        },

        BtnGrabarRecordDatosReportanteClick: function () {
            if (base.Control.FormularioIncidenteModel.Record.CodigoRecord != null || base.Control.FormularioIncidenteModel.Record.CodigoRecord != '') {
                if (base.Control.ValidadorRecordDatosReportante.isValid()) {
                    base.Control.Mensaje.Confirmation({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                        onAccept: function () {
                            base.Ajax.AjaxGrabarRecordDatosReportante.data = {
                                CodigoColaboradorReporta: base.Control.HdnCodigoColaboradorReporta().val(),
                                CodigoRecord: base.Control.FormularioIncidenteModel.Record.CodigoRecord,
                                CodigoPuestoTrabajoColaboradorReporta: base.Control.SlcPuestoCargoReporta().val()
                            }
                            base.Ajax.AjaxGrabarRecordDatosReportante.submit();
                        }
                    });
                }
                else {
                    $("#frmRecordDatosReportanteSummaryErrorMessage").empty();
                    $("#frmRecordDatosReportanteSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                }
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValidarTabPrincipal,
                });
            }
        },

        BtnVistaPreviaReporteIncidenteClick: function () {
            base.Ajax.AjaxVistaPreviaReporteIncidente.data = {
                CodigoRecord: base.Control.FormularioIncidenteModel.Record.CodigoRecord //'31DD97C2-4488-4E75-A4A9-19C44EFA23CB'
            }
            base.Ajax.AjaxVistaPreviaReporteIncidente.submit();
        },

        BtnEnviarReporteIncidenteClick: function () {            
            var mensaje = '';
            if (!base.Control.ValidadorRecord.isValid()) {
                mensaje += Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Mensaje.EtiquetaTabDetalleIncidente + '<br>';
            }
            if (base.Control.lengthTrabajadoresInvolucrados < 1) {
                mensaje += Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Mensaje.EtiquetaTabTrabajadorInvolucrado + '<br>';
            }
            if (base.Control.TxtActualConsecuenciaIncidente().val() == '' || base.Control.TxtActualConsecuenciaIncidente().val() == null
                || base.Control.TxtPotencialConsecuenciaIncidente().val() == '' || base.Control.TxtPotencialConsecuenciaIncidente().val() == null
                || base.Control.TxtHPICategoriaEvaluacionConsecuencia().val() == '' || base.Control.TxtHPICategoriaEvaluacionConsecuencia().val() == null
                || base.Control.TxtCategoriaPrincipalIncidente().val() == '' || base.Control.TxtCategoriaPrincipalIncidente().val() == null) {
                mensaje += Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Mensaje.EtiquetaTabCategoria + '<br>';
            }
            if (base.Control.FormularioIncidenteModel.Record.Descripcion == null || base.Control.FormularioIncidenteModel.Record.Descripcion == '') {
                mensaje += Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Mensaje.EtiquetaTabDescripcion + '<br>';
            }
            if (base.Control.lengthAccionesInmediatas < 1) {
                mensaje += Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Mensaje.EtiquetaTabAccionInmediata + '<br>';
            }
            if (base.Control.FormularioIncidenteModel.Record.CodigoPuestoTrabajoColaboradorReportaValidacion == null || base.Control.FormularioIncidenteModel.Record.CodigoPuestoTrabajoColaboradorReportaValidacion == '' ||
                base.Control.FormularioIncidenteModel.Record.CodigoColaboradorReportaValidacion == null || base.Control.FormularioIncidenteModel.Record.CodigoColaboradorReportaValidacion == '') {
                mensaje += Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Mensaje.EtiquetaTabDatosReportante + '<br>';
            }

            if (mensaje.length < 1) {
                base.Ajax.AjaxEnviarReporteIncidente.data = {
                    CodigoRecord: base.Control.FormularioIncidenteModel.Record.CodigoRecord,
                    CheckEnviarNotificacionCorreo: base.Control.CheckboxNotificacion().is(':checked'),
                    EsEdicion: base.Control.FormularioIncidenteModel.Record.EsEdicion,
                    EsAdministrador: base.Control.FormularioIncidenteModel.Record.EsAdministrador,
                    CodigoRecordSustento: base.Control.FormularioIncidenteModel.Record.CodigoRecordSustento
                }
                base.Ajax.AjaxEnviarReporteIncidente.submit();
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Mensaje.EtiquetaMensajeValidacionEnviarAnuncio + '<br>' + mensaje,
                });
            }
        },

        BtnGridEditRecordAccionInmediataClick: function (row, data) {
            'use strict';
            base.Control.FormularioIncidenteModel.RecordAccionInmediata.CodigoRecordAccionInmediata = data.CodigoRecordAccionInmediata;
            base.Control.TxtDescripcionAccionInmediata().val(data.Descripcion);
        },

        BtnGridDeleteRecordAccionInmediataClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                onAccept: function () {
                    base.Ajax.AjaxEliminarRecordAccionInmediata.data = {
                        listaCodigosRecordAccionInmediata: [data.CodigoRecordAccionInmediata],
                    };

                    base.Ajax.AjaxEliminarRecordAccionInmediata.submit();
                }
            });
        },
        //Fin - Record Acción Inmediata

        AjaxEliminarSuccess: function (data) {
            'use strict'
            if (data.Result >= 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });

                base.Event.BtnBuscarRecordAnexoApendiceClick();
                //base.Event.BtnBuscarRecordAccionClick();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },

        AjaxEliminarAnexoFotoSuccess: function (data) {
            'use strict'
            if (data.Result >= 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });

                base.Event.BtnBuscarRecordAnexoFotoClick();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },


        BtnGridDeleteValidate: function (data, type, full) {
            if (base.Control.FormularioIncidenteModel.Record.ControlTotal && base.Control.FormularioIncidenteModel.Record.CodigoEstadoRecord != Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.EstadoRecord.Cerrado && (base.Control.FormularioIncidenteModel.Record.EsAdministrador || base.Control.FormularioIncidenteModel.Record.IndicadorEnvioCorreo))
                return true;
            else
                return false;
        },

        BtnGridEditApendiceClick: function (row, data) {
            'use strict'
            base.Control.DlgFormularioRecordAnexoApendice.Show({
                CodigoEstadoRecord: base.Control.FormularioIncidenteModel.Record.CodigoEstadoRecord,
                CodigoRecordAnexo: data.CodigoRecordAnexo,
                CodigoRecord: data.CodigoRecord
            });
        },

        BtnGridEditAccionClick: function (row, data) {
            'use strict'
            base.Control.DlgFormularioRecordAccion.Show({
                CodigoEstadoRecord: base.Control.FormularioIncidenteModel.Record.CodigoEstadoRecord,
                NumeroRecord: base.Control.FormularioIncidenteModel.Record.NumeroRecord,
                CodigoRecordAccion: data.CodigoRecordAccion,
                CodigoRecord: data.CodigoRecord
            });
        },

        BtnGridAdjuntoClick: function (row, data) {
            'use strict'
            var filtro = {
                CodigoArchivoAnexoSharePoint: data.CodigoArchivoAnexoSharePoint,
                Nombre: data.Nombre
            };

            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.DescargarArchivoApendice, filtro);
        },

        BtnGridDeleteRecordAnexoApendiceClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarRecordAnexo.data = {
                        CodigoRecord: data.CodigoRecord,
                        CodigoRecordAnexo: data.CodigoRecordAnexo
                    };

                    base.Ajax.AjaxEliminarRecordAnexo.submit();
                }
            });
        },

        BtnGridDeleteRecordAnexoFotoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarRecordAnexoFoto.data = {
                        CodigoRecord: data.CodigoRecord,
                        CodigoRecordAnexo: data.CodigoRecordAnexo
                    };

                    base.Ajax.AjaxEliminarRecordAnexoFoto.submit();
                }
            });
        },

        BtnGridDeleteAccionClick: function (row, data) {
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

        BtnAgregarRecordAnexoAppendixClick: function () {
            if (base.Control.FormularioIncidenteModel.Record.CodigoRecord != null) {
                base.Control.DlgFormularioRecordAnexoApendice.Show({
                    CodigoRecord: base.Control.FormularioIncidenteModel.Record.CodigoRecord,
                    CodigoEstadoRecord: base.Control.FormularioIncidenteModel.Record.CodigoEstadoRecord,
                    CodigoRecordAnexo: null
                });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValidarTabPrincipal,
                });
            }
        },

        BtnAgregarRecordAccionClick: function () {
            if (base.Control.FormularioIncidenteModel.Record.CodigoRecord != null) {
                base.Control.DlgFormularioRecordAccion.Show({
                    NumeroRecord: base.Control.FormularioIncidenteModel.Record.NumeroRecord,
                    CodigoRecord: base.Control.FormularioIncidenteModel.Record.CodigoRecord,
                    CodigoRecordAccion: null
                });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValidarTabPrincipal,
                });
            }
        },

        AjaxGrabarCierreRecordSuccess: function (resultado) {
            if (resultado.Result.IndicadorCierreCorrecto >= 1) {
                base.Control.FormularioIncidenteModel.Record.CodigoRecordEstado = resultado.Result.CodigoRecordEstado;
                base.Control.ArchivoAdjuntoPrincipalBase64 = '';
                base.Control.NombreArchivoAdjuntoPrincipal = '';

                base.Control.BtnAgregarRecordAnexoAppendix().off('click');
                base.Control.BtnAgregarRecordAnexoAppendix().addClass('hidden');

                base.Control.BtnAgregarRecordAccion().off('click');
                base.Control.BtnAgregarRecordAccion().addClass('hidden');

                base.Control.BtnGrabarRecord().off('click');
                base.Control.BtnGrabarRecord().addClass('hidden');

                base.Control.BtnCancelarRecord().off('click');
                base.Control.BtnCancelarRecord().addClass('hidden');

                base.Control.BtnGrabarCierreRecord().off('click');
                base.Control.BtnGrabarCierreRecord().addClass('hidden');
                base.Control.TxtComentarioCierreRecord().attr('disabled', 'disabled');
                base.Control.DtpFechaCierreRecord().attr('disabled', 'disabled');

                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
            }
            else if (resultado.Result.IndicadorCierreCorrecto == "-1") {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },

        AjaxGrabarRecordSuccess: function (resultado) {
            if (resultado.Result.CodigoRecord != null) {
                base.Control.FormularioIncidenteModel.Record.CodigoRecord = resultado.Result.CodigoRecord;
                base.Control.FormularioIncidenteModel.Record.NumeroRecord = resultado.Result.NumeroRecord;
                //base.Control.HdnCodigoArchivoAdjuntoPrincipal().val(resultado.Result.CodigoArchivoAdjuntoPrincipal);

                $('#txtNumeroRecord').val(resultado.Result.NumeroRecord);
                $('#slcTipoRecord').attr('readonly', 'readonly');
                $('#slcTipoRecord').attr('disabled', 'disabled');
                $('#slcTipoRecord').off('change');

                $('#divTrabajadorInvolucrado').removeClass('hidden');
                $('#divTrabajadorInvolucradoBotonGrilla').removeClass('hidden');
                $('#divDescripcionIncidente').removeClass('hidden');
                $('#divDescripcionIncidenteBoton').removeClass('hidden');
                $('#divRecordAccionInmediata').removeClass('hidden');
                $('#divRecordAccionInmediataBotonGrilla').removeClass('hidden');

                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });

                $('#divTrabajadorInvolucrado').addClass('hidden');
                $('#divDescripcionIncidente').addClass('hidden');
                $('#divRecordAccionInmediata').addClass('hidden');
            }
        },

        /***** Inicio Record Categoria ***/
        ChkAbrirPopupCategoria: function () {
            var objData = $(this).data();
            if ($(this).is(':checked')) {
                if (objData.nombrecategoriaesp != null) {
                    var filtro = {
                        CodigoRecordCategoria: objData.codigorecordcategoria,
                        CodigoCategoria: objData.codigocategoria,
                        CodigoRecord: base.Control.FormularioIncidenteModel.Record.CodigoRecord,
                        NombreCategoria: base.Control.FormularioIncidenteModel.Record.CodigoIdioma == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.CodigoIdiomaPorDefecto ? objData.nombrecategoriaing : objData.nombrecategoriaesp
                    };
                    if (objData.nombrecategoriaesp.toUpperCase().indexOf('NM') !== -1) {
                        base.Control.FormularioRecordCategoriaCuasi.Show(filtro);
                    }
                    else if (objData.nombrecategoriaesp.toUpperCase().indexOf('OT') !== -1) {
                        base.Control.DlgFormularioRecordCategoriaOtros.Show(filtro);
                    }
                    else {
                        base.Control.FormularioRecordCategoriaIncidente.Show(filtro);
                    }
                }
            } else {
                if (objData.codigorecordcategoria != null) {
                    base.Ajax.AjaxEliminarRecordCategoria.data = { CodigoRecordCategoria: objData.codigorecordcategoria };
                    base.Ajax.AjaxEliminarRecordCategoria.submit();
                }
            }
        },

        AjaxEliminarRecordCategoriaSucess: function (resultado) {
            if (resultado.Result >= 1) {
                base.Event.BtnBuscarRecordCategoriaClick();
            } else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },

        BtnBuscarRecordCategoriaClick: function () {
            if (base.Control.FormularioIncidenteModel.Record.CodigoRecord != null) {
                base.Control.GrdResultadoCategoria.Load({ CodigoRecord: base.Control.FormularioIncidenteModel.Record.CodigoRecord, CodigoTipoCategoria: "CONS" });
            }
        },

        BtnGridEditCategoriaClick: function (row, data) {
            var filtro = {
                CodigoRecordCategoria: data.CodigoRecordCategoria,
                CodigoCategoria: data.CodigoCategoria,
                CodigoRecord: base.Control.FormularioIncidenteModel.Record.CodigoRecord,
                NombreCategoria: base.Control.FormularioIncidenteModel.Record.CodigoIdioma == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.CodigoIdiomaPorDefecto ? data.NombreCategoriaIngles : data.NombreCategoriaEspaniol,
                DescripcionCategoriaOtros: data.DescripcionCategoriaOtros,
                CodigoConsecuenciaPotencial: data.CodigoConsecuenciaPotencial,
                CodigoConsecuenciaActual: data.CodigoConsecuenciaActual,
                CodigoCategoriaAbreviado: data.CodigoCategoriaAbreviado
            };

            if (data.NombreCategoriaEspaniol.toUpperCase().indexOf('NM') !== -1) {
                base.Control.FormularioRecordCategoriaCuasi.Show(filtro);
            }
            else if (data.NombreCategoriaEspaniol.toUpperCase().indexOf('OT') !== -1) {
                base.Control.DlgFormularioRecordCategoriaOtros.Show(filtro);
            }
            else {
                base.Control.FormularioRecordCategoriaIncidente.Show(filtro);
            }
        },
        /*****Fin Record Categoria*****/
    };

    base.AjaxSuccess = {
        //Inicio - Detalles del Incidente
        AjaxBuscarDatosProyectoSuccess: function (resultado) {
            if (resultado.Result.length > 0) {
                base.Control.TxtCodigoIdentificadorProyecto().val(resultado.Result[0].CodigoIdentificador);
                base.Control.TxtNombrePaisProyecto().val(resultado.Result[0].NombrePais);
            }
            else {
                base.Control.TxtCodigoIdentificadorProyecto().val('');
                base.Control.TxtNombrePaisProyecto().val('');
            }
        },
        //Fin - Detalle del Incidente

        //Inicio - Persona Involucrada
        AjaxGrabarPersonaInvolucradaSuccess: function (resultado) {
            if (resultado.Result >= 1) {
                base.Control.FormularioIncidenteModel.PersonaInvolucrada.CodigoPersonaInvolucrada = null;
                base.Control.HdnCodigoEmpresaInvolucrado().val('');
                base.Control.TxtNombreEmpresaInvolucrado().val('');
                base.Control.HdnCodigoColaboradorInvolucrado().val('');
                base.Control.TxtNombreColaboradorInvolucrado().val('');
                base.Control.TxtTipoDocumentoInvolucrado().val('');
                base.Control.TxtNumeroDocumentoInvolucrado().val('');
                base.Control.SlcPuestoTrabajoInvolucrado().val('');
                base.Control.SlcIndicadorSufrioLesionInvolucrado().val('');
                base.Event.SlcIndicadorSufrioLesionInvolucradoChange();

                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });

                base.Event.BtnBuscarTrabajadorInvolucradoClick();
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },

        AjaxEliminarPersonaInvolucradaSuccess: function (resultado) {
            if (resultado.Result >= 1) {
                base.Control.Mensaje.Information({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });

                base.Event.BtnBuscarTrabajadorInvolucradoClick();
            }
            else {
                base.Control.Mensaje.Error({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        //Fin - Persona Involucrada

        //Inicio - Desripción de Incidente
        AjaxGrabarDescripcionIncidenteSuccess: function (resultado) {
            if (resultado.Result.CodigoRecord != null) {
                base.Control.FormularioIncidenteModel.Record.Descripcion = resultado.Result.Descripcion;
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
        //Fin - Desripción de Incidente

        //Inicio - Record Acción Inmediata
        AjaxGrabarRecordAccionInmediataSuccess: function (resultado) {
            if (resultado.Result >= 1) {
                base.Control.FormularioIncidenteModel.RecordAccionInmediata.CodigoRecordAccionInmediata = null;
                base.Control.TxtDescripcionAccionInmediata().val('');

                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });

                base.Event.BtnBuscarRecordAccionInmediataClick();
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },

        AjaxEliminarRecordAccionInmediataSuccess: function (resultado) {
            if (resultado.Result >= 1) {
                base.Control.Mensaje.Information({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });

                base.Event.BtnBuscarRecordAccionInmediataClick();
            }
            else {
                base.Control.Mensaje.Error({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        //Fin - Record Acción Inmediata

        //Inicio - Datos Reportante
        AjaxGrabarRecordDatosReportanteSuccess: function (resultado) {
            if (resultado.Result.CodigoRecord != null) {
                base.Control.FormularioIncidenteModel.Record.CodigoColaboradorReportaValidacion = resultado.Result.CodigoColaboradorReporta;
                base.Control.FormularioIncidenteModel.Record.CodigoPuestoTrabajoColaboradorReportaValidacion = resultado.Result.CodigoPuestoTrabajoColaboradorReporta;
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

        //Enviar Reporte Incidente
        AjaxEnviarReporteIncidenteSuccess: function (resultado) {           
            if (resultado.Result == "1") {
                if (resultado.fechaReporte != '' && resultado.fechaReporte != null) {
                    var str = resultado.fechaReporte;
                    base.Control.TxtFechaReporte().val(str.substr(0, str.indexOf(' ')));
                    base.Control.TxtHoraReporte().val(str.substr(str.indexOf(' ') + 1));
                }

                if (resultado.IndicadorEnvioCorreo) {
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEnvioConExito
                    });
                } else {
                    base.Control.Mensaje.Warning({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Mensaje.EtiquetaMensajeErrorEnviarCorreoAnuncio,
                    });
                }
            }
            else if (resultado.Result == "-1") {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Mensaje.EtiquetaMensajeValidacionEnviarAnuncio,
                });
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },

        AjaxVistaPreviaReporteIncidenteSuccess: function (resultado) {
            var old = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.ConfiguracionUrlDespliegue + '/Base/Reporte/Index?Area=Reporte2';
            var iframe = $("#ifrContenedor").attr("src");
            iframe = '';
            setTimeout(function () {
                $("#ifrContenedor").attr("src", old);
                iframe = old;
            }, 0);
        }
    }

    base.Ajax = {
        AjaxVistaPreviaReporteIncidente: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.VistaPreviaReporteIncidente,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxVistaPreviaReporteIncidenteSuccess
        }),

        AjaxEnviarReporteIncidente: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.EnviarReporteIncidente,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEnviarReporteIncidenteSuccess
        }),

        AjaxBuscarDatosProyecto: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.BuscarDatosProyecto,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxBuscarDatosProyectoSuccess
        }),

        AjaxGrabarRecord: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.RegistrarRecordFijo,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarRecordSuccess
        }),

        AjaxGrabarPersonaInvolucrada: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.RegistrarPersonaInvolucrada,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxGrabarPersonaInvolucradaSuccess
        }),

        AjaxEliminarPersonaInvolucrada: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.EliminarPersonaInvolucrada,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarPersonaInvolucradaSuccess
        }),

        AjaxGrabarDescripcionIncidente: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.RegistrarDescripcionIncidente,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxGrabarDescripcionIncidenteSuccess
        }),

        AjaxGrabarRecordAccionInmediata: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.RegistrarRecordAccionInmediata,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxGrabarRecordAccionInmediataSuccess
        }),

        AjaxEliminarRecordAccionInmediata: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.EliminarRecordAccionInmediata,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarRecordAccionInmediataSuccess
        }),

        AjaxGrabarRecordDatosReportante: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.RegistrarRecordDatosReportante,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxGrabarRecordDatosReportanteSuccess
        }),

        AjaxGrabarCierreRecord: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.RegistrarCierreRecord,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarCierreRecordSuccess
        }),

        AjaxEliminarRecordAnexo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.EliminarRecordAnexo,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarSuccess
        }),
        AjaxEliminarRecordAnexoFoto: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.EliminarRecordAnexo,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarAnexoFotoSuccess
        }),
        AjaxEliminarRecordAccion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.EliminarRecordAccion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarSuccess
        }),

        AjaxEliminarRecordCategoria: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.EliminarRecordCategoria,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarRecordCategoriaSucess
        }),

        AjaxActualizarCategoriaEvaluacionConsecuencia: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.ActualizarCategoriaEvaluacionConsecuencia,
            autoSubmit: false,
            onSuccess: base.Event.AjaxActualizarCategoriaEvaluacionConsecuenciaSucess
        }),
    };

    base.Function = {
        CrearGridTrabajadorInvolucrado: function () {
            var columns = new Array();
            columns.push({
                data: 'NombreColaboradorInvolucrado',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridNombreColaboradorInvolucrado,
                width: "20%"
            });

            columns.push({
                data: 'DescripcionTipoDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridTipoDocumento,
                width: "10%"
            });

            columns.push({
                data: 'NumeroDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridNumeroDocumento,
                width: "10%"
            });

            columns.push({
                data: 'NombreEmpresa',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridEmpresa,
                width: "20%"
            });

            columns.push({
                data: 'NombrePuestoTrabajo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridPuestoTrabajo,
                width: "20%"
            });

            columns.push({
                data: 'DescripcionIndicadorSufrioLesion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridIndicadorSufrioLesion,
                width: "5%"
            });

            columns.push({
                data: 'DescripcionParteCuerpoLesionada',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridParteCuerpoLesionada,
                width: "15%"
            });

            columns.push({
                data: 'DescripcionTipoLesion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridTipoLesion,
                width: "15%"
            });

            columns.push({
                data: 'DescripcionLesionActual',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridLesionActual,
                width: "20%"
            });

            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridAcciones,
                "class": "controls",
                width: "5%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditTrabajadorInvolucradoClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteTrabajadorInvolucradoClick } }
                ]
            });

            base.Control.GrdResultadoTrabajadorInvolucrado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoTrabajadorInvolucrado',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.BuscarPersonaInvolucrada,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                    base.Control.ArrTrabajadoresInvolucrados = records;
                    base.Control.lengthTrabajadoresInvolucrados = records.length;
                }
            });
        },

        CrearGridRecordAccionInmediata: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridItem,
                width: "5%"
            });

            columns.push({
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridDescripcionAccionInmediata,
                width: "40%",
                'class': 'left'
            });

            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridAcciones,
                "class": "controls",
                width: "5%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditRecordAccionInmediataClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteRecordAccionInmediataClick } }
                ]
            });

            base.Control.GrdResultadoRecordAccionInmediata = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoRecordAccionInmediata',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.BuscarRecordAccionInmediata,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                    base.Control.lengthAccionesInmediatas = records.length;
                }
            });
        },

        CrearGridRecordAnexoApendice: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridItem,
                width: "5%"
            });

            columns.push({
                data: 'DescripcionTipoApendice',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridTypeAnexo,
                width: "20%"
            });

            columns.push({
                data: 'Nombre',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridApendiceName,
                width: "30%"
            });

            columns.push({
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridDescripcionApendice,
                width: "30%"
            });

            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridDownload,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Adjunto, event: { on: 'click', callBack: base.Event.BtnGridAdjuntoClick } }
                ]
            });

            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditApendiceClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteRecordAnexoApendiceClick } }
                ]
            });

            base.Control.GrdResultadoRecordAppendix = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoRecordAppendix',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {

                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.BuscarRecordAnexo,
                    source: 'Result'
                }
            });
        },

        CrearGridRecordAnexoFoto: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridItem,
                width: "5%"
            });

            columns.push({
                data: 'Nombre',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridNombreFoto,
                width: "30%"
            });

            columns.push({
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridDescripcionFoto,
                width: "30%"
            });

            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridVistaPreviaFoto,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.VistaPrevia, event: { on: 'click', callBack: base.Event.BtnGridVistaPreviaFotoClick } }
                ]
            });

            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditRecordAnexoFotoClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteRecordAnexoFotoClick } }
                ]
            });

            base.Control.GrdResultadoRecordAnexoFoto = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoRecordAnexoFoto',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.BuscarRecordAnexo,
                    source: 'Result'
                }
            });
        },

        CrearGridRecordAccion: function () {
            var columns = new Array();

            columns.push({
                data: 'NumeroAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridActionNumber,
                width: "10%"
            });

            columns.push({
                data: 'NombreColaboradorPlanteaAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridAccionPlanteadaPor,
                width: "20%"
            });

            columns.push({
                data: 'FechaAccionPlanteadaString',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridAccionCriadoEn,
                width: "10%"
            });

            columns.push({
                data: 'DescripcionCorta',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridDescripcionCorta,
                width: "30%"
            });

            columns.push({
                data: 'FechaVencimientoString',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridFechaVencimiento,
                width: "10%"
            });

            columns.push({
                data: 'DescripcionPrioridad',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridPrioridad,
                width: "30%"
            });

            columns.push({
                data: 'NombreColaboradorResponsable',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridResponsable,
                width: "30%"
            });

            columns.push({
                data: 'DescripcionEstadoAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.NombreEstado,
                width: "10%"
            });

            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditAccionClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteAccionClick } }
                ]
            });

            base.Control.GrdResultadoRecordAccion = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoRecordAccion',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.BuscarRecordAccion,
                    source: 'Result'
                }
            });
        },

        ObtenerValorArrayCategoria: function (myArray, nameKey) {
            var nombreCategoria = ''; var index = '';
            for (var i = 0; i < myArray.length; i++) {
                if (myArray[i].CodigoCategoriaAbreviado === nameKey) {
                    index = i;
                    break;
                }
            }

            if (base.Control.FormularioIncidenteModel.Record.CodigoIdioma == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.CodigoIdiomaPorDefecto)
                nombreCategoria = myArray[index].NombreCategoriaIngles;
            else
                nombreCategoria = myArray[index].NombreCategoriaEspaniol;

            return nombreCategoria;
        },

        ObtenerCategoriaDesempate: function (myArray) {
            var resultadoIndex = ''; var menor = 100;
            var arrIns = []; var arrMen = []; var arrMod = []; var arrMay = []; var arrCri = [];
            for (var i = 0; i < myArray.length; i++) {
                if (myArray[i].CodigoConsecuenciaActual == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.ConsecuenciaIncidente.Insignificante
                    && (myArray[i].Orden != 1 || myArray[i].Orden != 6 || myArray[i].Orden != 7)) {
                    var obj = {
                        index: i,
                        PesoCategoria: myArray[i].PesoCategoria
                    };
                    arrIns.push(obj);
                }
                if (myArray[i].CodigoConsecuenciaActual == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.ConsecuenciaIncidente.Menor
                    && (myArray[i].Orden != 1 || myArray[i].Orden != 6 || myArray[i].Orden != 7)) {
                    var obj = {
                        index: i,
                        PesoCategoria: myArray[i].PesoCategoria
                    };
                    arrMen.push(obj);
                }
                if (myArray[i].CodigoConsecuenciaActual == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.ConsecuenciaIncidente.Moderado
                    && (myArray[i].Orden != 1 || myArray[i].Orden != 6 || myArray[i].Orden != 7)) {
                    var obj = {
                        index: i,
                        PesoCategoria: myArray[i].PesoCategoria
                    };
                    arrMod.push(obj);
                }
                if (myArray[i].CodigoConsecuenciaActual == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.ConsecuenciaIncidente.Mayor
                    && (myArray[i].Orden != 1 || myArray[i].Orden != 6 || myArray[i].Orden != 7)) {
                    var obj = {
                        index: i,
                        PesoCategoria: myArray[i].PesoCategoria
                    };
                    arrMay.push(obj);
                }
                if (myArray[i].CodigoConsecuenciaActual == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.ConsecuenciaIncidente.Critico
                    && (myArray[i].Orden != 1 || myArray[i].Orden != 6 || myArray[i].Orden != 7)) {
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

        CrearGridRecordCategoria: function () {
            var columns = new Array();

            columns.push({
                data: '',
                title: '',
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input class='checkRecordCategoria' type='checkbox' name='gridCheckRecordCategoria'" + (full.CodigoRecordCategoria != null ? " checked " : "") + "'" +
                             " data-nombreCategoriaEsp='" + full.NombreCategoriaEspaniol + "'" +
                             " data-nombreCategoriaIng='" + full.NombreCategoriaIngles + "'" +
                             " data-codigoCategoria='" + full.CodigoCategoria + "'" +
                             " data-codigoRecordCategoria='" + full.CodigoRecordCategoria + "'" + " > ";

                    return cadena;
                },
                width: "7%"
            });

            columns.push({
                data: base.Control.FormularioIncidenteModel.Record.CodigoIdioma == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.CodigoIdiomaPorDefecto ? 'NombreCategoriaIngles' : 'NombreCategoriaEspaniol',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.GridCategoria.Categoria,
                width: "20%",
                'class': 'left',
                mRender: function (data, type, full) {
                    if (full.IndicadorOtraCategoria && full.DescripcionCategoriaOtros != null)
                        return data + ': ' + full.DescripcionCategoriaOtros;
                    else
                        return data;
                }
            });

            columns.push({
                data: 'DescripcionConsecuenciaActual',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.GridCategoria.Actual,
                width: "20%",
                'class': 'left col_ConsecuenciaActual',
                mRender: function (data, type, full) {
                    if (full.CodigoCategoriaAbreviado == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.Categoria.CategoriaCuasiIncidente)
                        return '-';
                    else
                        return full.DescripcionConsecuenciaActual;
                }
            });

            columns.push({
                data: 'DescripcionConsecuenciaPotencial',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.GridCategoria.Potencial,
                width: "20%",
                'class': 'left col_ConsecuenciaPotencial'
            });

            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditCategoriaClick } }
                ]
            });

            base.Control.GrdResultadoCategoria = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoCategorias',
                columns: columns,
                hasPaging: false,
                hasPagingServer: false,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                returnCallbackComplete: function (instancia, records) {
                    var flagCategoriaCuasi = false; var flagCategoriaOtros = false;
                    var flagCategoriaLesionActiva = false; var mayorLesionTrab = 0; var descripcionCategoriaPrin = ''; var indiceLesionTrab = '';
                    var mayorActual = 0; var CodigoConsecuenciaIncidente = null;
                    var mayorPotencial = 0; var CodigoPotencialIncidente = null;
                    var indiceActual = ''; var CodigoHpi = null;
                    var indicePotencial = ''; var CodigoCategoriaIncidente = null;
                    base.Control.TxtHPICategoriaEvaluacionConsecuencia().val('');
                    base.Control.TxtCategoriaPrincipalIncidente().val('');

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
                        if (records[i].CodigoRecordCategoria != null && records[i].CodigoCategoriaAbreviado == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.Categoria.CategoriaLesion) {
                            flagCategoriaLesionActiva = true;
                            break;
                        }
                        //Si solo marco Cuasi
                        if (records[i].CodigoRecordCategoria != null && records[i].CodigoCategoriaAbreviado == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.Categoria.CategoriaCuasiIncidente) {
                            flagCategoriaCuasi = true;
                        }
                        //Si solo marco Otros
                        if (records[i].CodigoRecordCategoria != null && records[i].CodigoCategoriaAbreviado == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.Categoria.CategoriaOtros) {
                            flagCategoriaOtros = true;
                        }
                    }

                    if (flagCategoriaLesionActiva) {
                        for (var i = 0; i < base.Control.ArrTrabajadoresInvolucrados.length; i++) {
                            if (base.Control.ArrTrabajadoresInvolucrados[i].DescripcionPesoLesionActual != null && base.Control.ArrTrabajadoresInvolucrados[i].DescripcionPesoLesionActual > mayorLesionTrab) {
                                descripcionCategoriaPrin = base.Control.ArrTrabajadoresInvolucrados[i].DescripcionLesionActual;
                                indiceLesionTrab = i;
                                CodigoCategoriaIncidente = base.Control.ArrTrabajadoresInvolucrados[i].CodigoLesionActual;
                            }
                        }
                    }
                    else {
                        var resultadoIndex = base.Function.ObtenerCategoriaDesempate(records);
                        if (resultadoIndex != '' && resultadoIndex != undefined) {
                            descripcionCategoriaPrin = (base.Control.FormularioIncidenteModel.Record.CodigoIdioma == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.CodigoIdiomaPorDefecto) ? records[resultadoIndex].NombreCategoriaIngles : records[resultadoIndex].NombreCategoriaEspaniol;
                            CodigoCategoriaIncidente = records[resultadoIndex].CodigoCategoriaAbreviado;
                        }
                        else {
                            if (flagCategoriaCuasi && flagCategoriaOtros == false) {
                                descripcionCategoriaPrin = base.Function.ObtenerValorArrayCategoria(records, Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.Categoria.CategoriaCuasiIncidente);
                                CodigoCategoriaIncidente = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.Categoria.CategoriaCuasiIncidente;
                            } else if (flagCategoriaOtros && flagCategoriaCuasi == false) {
                                descripcionCategoriaPrin = base.Function.ObtenerValorArrayCategoria(records, Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.Categoria.CategoriaOtros);
                                CodigoCategoriaIncidente = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.Categoria.CategoriaOtros;
                            }
                        }
                    }

                    base.Control.TxtCategoriaPrincipalIncidente().val(descripcionCategoriaPrin);

                    if (indiceActual != null && indiceActual !== '' && indiceActual != undefined) {
                        base.Control.TxtActualConsecuenciaIncidente().val(records[indiceActual].DescripcionConsecuenciaActual);
                        CodigoConsecuenciaIncidente = records[indiceActual].CodigoConsecuenciaActual;
                    }
                    else {
                        base.Control.TxtActualConsecuenciaIncidente().val('');
                    }

                    if (indicePotencial != null && indicePotencial !== '' && indicePotencial != undefined) {
                        base.Control.TxtPotencialConsecuenciaIncidente().val(records[indicePotencial].DescripcionConsecuenciaPotencial);
                        CodigoPotencialIncidente = records[indicePotencial].CodigoConsecuenciaPotencial;
                    } else {
                        base.Control.TxtPotencialConsecuenciaIncidente().val('');
                    }

                    // Valor de HPI
                    for (var i = 0; i < records.length; i++) {
                        var valor = records[i].CodigoConsecuenciaActual;
                        if (valor != null && valor != undefined) {
                            if (valor == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.ConsecuenciaIncidente.Mayor ||
                                valor == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.ConsecuenciaIncidente.Critico) {
                                base.Control.TxtHPICategoriaEvaluacionConsecuencia().val("NO");
                                CodigoHpi = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.ValoresHPI.NO;
                                break;
                            }
                        }
                    }

                    if (CodigoHpi == null) {
                        for (var i = 0; i < records.length; i++) {
                            var valor = records[i].CodigoConsecuenciaPotencial;
                            if (valor != null && valor != undefined) {
                                if (valor == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.ConsecuenciaIncidente.Mayor ||
                                valor == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.ConsecuenciaIncidente.Critico) {
                                    base.Control.TxtHPICategoriaEvaluacionConsecuencia().val("SI");
                                    CodigoHpi = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.ValoresHPI.SI;
                                    break;
                                } else {
                                    base.Control.TxtHPICategoriaEvaluacionConsecuencia().val("NO");
                                    CodigoHpi = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.ValoresHPI.NO;
                                }
                            }
                        }
                    }

                    //Guardamos los valores
                    base.Ajax.AjaxActualizarCategoriaEvaluacionConsecuencia.data = {
                        CodigoRecord: base.Control.FormularioIncidenteModel.Record.CodigoRecord,
                        CodigoConsecuenciaIncidente: CodigoConsecuenciaIncidente,
                        CodigoPotencialIncidente: CodigoPotencialIncidente,
                        CodigoHpi: CodigoHpi,
                        CodigoCategoriaIncidente: CodigoCategoriaIncidente
                    }
                    base.Ajax.AjaxActualizarCategoriaEvaluacionConsecuencia.submit();

                },
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.BuscarRecordCategoria,
                    source: 'Result'
                },
                events: [
                    { type: 'click', selector: '.checkRecordCategoria', callBack: base.Event.ChkAbrirPopupCategoria }
                ]
            });

        },

        ValidacionExtraRecord: function () {
            var validaciones = new Array();

            //validaciones.push({
            //    Event: function () {
            //        var resultado = true;

            //        if (base.Control.SlcNivel().children().length > 1 && base.Control.SlcNivel().val() == '') {
            //            resultado = false;
            //        }

            //        if (resultado) {
            //            base.Control.SlcNivel().attr('class', 'form-control');
            //        }
            //        else {
            //            base.Control.SlcNivel().attr('class', 'form-control hasError');
            //        }

            //        return resultado;
            //    },

            //    codeMessage: "Validar"
            //});

            //validaciones.push({
            //    Event: function () {
            //        var resultado = true;

            //        if (base.Control.HdnCodigoColaboradorReporta().val() == null || base.Control.HdnCodigoColaboradorReporta().val() == '') {
            //            resultado = false;
            //        }

            //        if (resultado) {
            //            base.Control.TxtNombreColaboradorReporta().attr('class', 'form-control');
            //        }
            //        else {
            //            base.Control.TxtNombreColaboradorReporta().attr('class', 'form-control hasError');
            //        }

            //        return resultado;
            //    },

            //    codeMessage: "Validar"
            //});

            //validaciones.push({
            //    Event: function () {
            //        var resultado = true;

            //        if (base.Control.SlcDepartamentoRecord().children().length > 1 && base.Control.SlcDepartamentoRecord().val() == '') {
            //            resultado = false;
            //        }

            //        if (resultado) {
            //            base.Control.SlcDepartamentoRecord().attr('class', 'form-control');
            //        }
            //        else {
            //            base.Control.SlcDepartamentoRecord().attr('class', 'form-control hasError');
            //        }

            //        return resultado;
            //    },

            //    codeMessage: "Validar"
            //});

            //validaciones.push({
            //    Event: function () {
            //        var resultado = true;

            //        if (base.Control.SlcAreaRecord().children().length > 1 && base.Control.SlcAreaRecord().val() == '') {
            //            resultado = false;
            //        }

            //        if (resultado) {
            //            base.Control.SlcAreaRecord().attr('class', 'form-control');
            //        }
            //        else {
            //            base.Control.SlcAreaRecord().attr('class', 'form-control hasError');
            //        }

            //        return resultado;
            //    },

            //    codeMessage: "Validar"
            //});

            //validaciones.push({
            //    Event: function () {
            //        var resultado = true;

            //        if (base.Control.SlcGrupoRecord().children().length > 1 && base.Control.SlcGrupoRecord().val() == '') {
            //            resultado = false;
            //        }

            //        if (resultado) {
            //            base.Control.SlcGrupoRecord().attr('class', 'form-control');
            //        }
            //        else {
            //            base.Control.SlcGrupoRecord().attr('class', 'form-control hasError');
            //        }

            //        return resultado;
            //    },

            //    codeMessage: "Validar"
            //});

            //validaciones.push({
            //    Event: function () {
            //        var resultado = true;

            //        if (base.Control.SlcProbabilidad().val() != '' && base.Control.SlcSeveridad().val() == '') {
            //            resultado = false;
            //        }

            //        if (resultado) {
            //            base.Control.SlcSeveridad().attr('class', 'form-control');
            //        }
            //        else {
            //            base.Control.SlcSeveridad().attr('class', 'form-control hasError');
            //        }

            //        return resultado;
            //    },

            //    codeMessage: "Validar"
            //});

            //validaciones.push({
            //    Event: function () {
            //        var resultado = true;

            //        if (base.Control.SlcSeveridad().val() != '' && base.Control.SlcProbabilidad().val() == '') {
            //            resultado = false;
            //        }

            //        if (resultado) {
            //            base.Control.SlcProbabilidad().attr('class', 'form-control');
            //        }
            //        else {
            //            base.Control.SlcProbabilidad().attr('class', 'form-control hasError');
            //        }

            //        return resultado;
            //    },

            //    codeMessage: "Validar"
            //});

            return validaciones;
        },

        //Validaciones extra datos reportante
        ValidacionExtraRecordDatosReportante: function () {
            var validaciones = new Array();
            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.HdnCodigoColaboradorReporta().val() == null || base.Control.HdnCodigoColaboradorReporta().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtNombreColaboradorReporta().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtNombreColaboradorReporta().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });
            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.SlcPuestoCargoReporta().val() == null || base.Control.SlcPuestoCargoReporta().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.SlcPuestoCargoReporta().attr('class', 'form-control');
                    }
                    else {
                        base.Control.SlcPuestoCargoReporta().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });
            return validaciones;
        },

        ValidacionExtraTrabajadorInvolucrado: function () {
            var validaciones = new Array();

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.HdnCodigoEmpresaInvolucrado().val() == null || base.Control.HdnCodigoEmpresaInvolucrado().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtNombreEmpresaInvolucrado().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtNombreEmpresaInvolucrado().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.HdnCodigoColaboradorInvolucrado().val() == null || base.Control.HdnCodigoColaboradorInvolucrado().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtNombreColaboradorInvolucrado().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtNombreColaboradorInvolucrado().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.SlcIndicadorSufrioLesionInvolucrado().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.IndicadorSufrioLesion.SiSufrioLesion) {
                        if (base.Control.SlcParteCuerpoLesionadaInvolucrado().val() == '') {
                            resultado = false;
                        }
                    }

                    if (resultado) {
                        base.Control.SlcParteCuerpoLesionadaInvolucrado().attr('class', 'form-control');
                    }
                    else {
                        base.Control.SlcParteCuerpoLesionadaInvolucrado().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.SlcIndicadorSufrioLesionInvolucrado().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.IndicadorSufrioLesion.SiSufrioLesion) {
                        if (base.Control.SlcTipoLesionInvolucrado().val() == '') {
                            resultado = false;
                        }
                    }

                    if (resultado) {
                        base.Control.SlcTipoLesionInvolucrado().attr('class', 'form-control');
                    }
                    else {
                        base.Control.SlcTipoLesionInvolucrado().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.SlcIndicadorSufrioLesionInvolucrado().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.IndicadorSufrioLesion.SiSufrioLesion) {
                        if (base.Control.SlcLesionActualInvolucrado().val() == '') {
                            resultado = false;
                        }
                    }

                    if (resultado) {
                        base.Control.SlcLesionActualInvolucrado().attr('class', 'form-control');
                    }
                    else {
                        base.Control.SlcLesionActualInvolucrado().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });

            return validaciones;
        },
    };
};
