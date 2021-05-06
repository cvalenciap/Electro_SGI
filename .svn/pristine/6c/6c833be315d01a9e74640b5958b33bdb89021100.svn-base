/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 10042017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecord');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecord.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Control.FormularioRecordModel = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Models.FormularioRecord;
        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaRecord(),
            minDateFrom: new Date(1900, 1, 1)
        });

        base.Control.SlcTipoClasificacion().off('change');
        base.Control.SlcTipoClasificacion().on('change', base.Event.SlcTipoClasificacionChange);

        base.Control.SlcProyectoRecord().off('change');
        base.Control.SlcProyectoRecord().on('change', base.Event.SlcProyectoChange);

        base.Control.SlcDepartamentoRecord().off('change');
        base.Control.SlcDepartamentoRecord().on('change', base.Event.SlcDepartamentoChange);

        base.Control.SlcAreaRecord().off('change');
        base.Control.SlcAreaRecord().on('change', base.Event.SlcAreaChange);

        base.Control.SlcGrupoRecord().off('change');
        base.Control.SlcGrupoRecord().on('change', base.Event.SlcGrupoChange);

        base.Control.SlcTipoClasificacion().off('change');
        base.Control.SlcTipoClasificacion().on('change', base.Event.SlcTipoClasificacionChange);

        base.Control.DlgFormularioBuscarColaboradorReporta = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.BuscarColaboradorReportaSuccess
        });

        base.Control.BtnBuscarColaboradorReporta().off('click');
        base.Control.BtnBuscarColaboradorReporta().on('click', base.Event.BtnBuscarColaboradorReportaClick);

        base.Control.DlgFormularioBuscarColaboradorResponsableDepartamento = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.BuscarColaboradorResponsableDepartamentoSuccess
        });

        base.Control.BtnBuscarColaboradorResponsableDepartamento().off('click');
        base.Control.BtnBuscarColaboradorResponsableDepartamento().on('click', base.Event.BtnBuscarColaboradorResponsableDepartamentoClick);

        base.Control.DlgFormularioBuscarColaboradorResponsableArea = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.BuscarColaboradorResponsableAreaSuccess
        });

        base.Control.BtnBuscarColaboradorResponsableArea().off('click');
        base.Control.BtnBuscarColaboradorResponsableArea().on('click', base.Event.BtnBuscarColaboradorResponsableAreaClick);

        base.Control.DlgFormularioBuscarColaboradorResponsableGrupo = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.BuscarColaboradorResponsableGrupoSuccess
        });

        base.Control.BtnBuscarColaboradorResponsableGrupo().off('click');
        base.Control.BtnBuscarColaboradorResponsableGrupo().on('click', base.Event.BtnBuscarColaboradorResponsableGrupoClick);

        base.Control.SlcProbabilidad().off('change');
        base.Control.SlcProbabilidad().on('change', base.Event.SlcProbabilidadSeveridadChange);

        base.Control.SlcConsecuenciaRiesgo().off('change');
        base.Control.SlcConsecuenciaRiesgo().on('change', base.Event.SlcProbabilidadSeveridadChange);

        base.Control.BtnCancelarRecord().off('click');
        base.Control.BtnCancelarRecord().on('click', base.Event.BtnCancelarRecordClick);

        base.Control.BtnGrabarRecord().off('click');
        base.Control.BtnGrabarRecord().on('click', base.Event.BtnGrabarRecordClick);

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmRecord(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraRecord()
        });

        //Inicio - Persona Involucrada
        base.Function.CrearGridPersonaInvolucrada();

        $('#cartTabs').on('shown.bs.tab', function (e) {
            var target = $(e.target).attr("href");
            if (target == "#tabPersonaInvolucrada") {
                base.Event.BtnBuscarPersonaInvolucradaClick();
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

            if (target == "#tabEvaluacionRiesgo") {
                if (base.Control.FormularioRecordModel.Record.CodigoRecord != null) {
                    $('#evaluacionRiesgo').removeClass('hidden');
                    $('#divBotonesRiesgos').removeClass('hidden');
                }
            }
        });

        base.Control.DlgFormularioBuscarColaboradorInvolucrado = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.BuscarColaboradorInvolucradoSuccess
        });

        base.Control.BtnAgregarPersonaInvolucrada().off('click');
        base.Control.BtnAgregarPersonaInvolucrada().on('click', base.Event.BtnAgregarPersonaInvolucradaClick);

        base.Control.BtnGrabarPersonaInvolucradaOtros().off('click');
        base.Control.BtnGrabarPersonaInvolucradaOtros().on('click', base.Event.BtnGrabarPersonaInvolucradaOtrosClick);

        if (base.Control.FormularioRecordModel.Record.CodigoRecord != null) {
            base.Control.DivPersonaInvolucradaOtros().removeClass('hidden');
        }
        //Fin - Persona Involucrada

        //Inicio - Anexo Apéndice
        base.Function.CrearGridRecordAnexoApendice();
        base.Control.BtnAgregarRecordAnexoApendice().off('click');
        base.Control.BtnAgregarRecordAnexoApendice().on('click', base.Event.BtnAgregarRecordAnexoApendiceClick);

        base.Control.DlgFormularioRecordAnexoApendice = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordAnexoApendice.Controller({
            GrabarRecordAnexoApendiceSuccess: base.Event.BtnBuscarRecordAnexoApendiceClick
        });
        //Fin - Anexo Apéndice

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

        //Inicio - Record Acción
        base.Function.CrearGridRecordAccion();
        base.Control.BtnAgregarRecordAccion().off('click');
        base.Control.BtnAgregarRecordAccion().on('click', base.Event.BtnAgregarRecordAccionClick);

        base.Control.DlgFormularioRecordAccion = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordAccion.Controller({
            GrabarRecordAccionSuccess: base.Event.BtnBuscarRecordAccionClick
        });
        //Fin - Record Acción

        //Inicio - Cierre Record
        base.Control.ValidadorCierreRecord = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmCierreRecord(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.ValidarCampos
            //validationsExtra: base.Function.ValidacionExtra()
        });

        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaCierreRecord(),
            minDateFrom: new Date(1900, 1, 1)
        });

        base.Control.BtnGrabarCierreRecord().off('click');
        base.Control.BtnGrabarCierreRecord().on('click', base.Event.BtnGrabarCierreRecordClick);
        //Fin - Cierre Record


        //Inicio Evaluacion Riesgo
        base.Event.GetMatrizEvaluacionRiesgoClick();

        base.Control.BtnGrabarEvaluacionRiesgo().off('click');
        base.Control.BtnGrabarEvaluacionRiesgo().on('click', base.Event.BtnGrabarEvaluacionRiesgoClick);
        //Fin - Evaluacion Riesgo
    };

    base.Control = {
        FrmRecord: function () { return $('#frmRecord'); },
        FormularioRecordModel: null,
        Validador: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),

        DtpFechaRecord: function () { return $('#dtpFechaRecord'); },
        SlcHoraRecord: function () { return $('#slcHoraRecord'); },
        SlcMinutoRecord: function () { return $('#slcMinutoRecord'); },
        SlcTipoClasificacion: function () { return $('#slcTipoClasificacion'); },
        SlcNivel: function () { return $('#slcNivel'); },
        SlcHpi: function () { return $('#slcHpi'); },
        TxtTituloRecord: function () { return $('#txtTituloRecord'); },
        SlcUbicacionGeneral: function () { return $('#slcUbicacionGeneral'); },
        TxtNombreLugarExacto: function () { return $('#txtNombreLugarExacto'); },
        TxtDescripcionRecord: function () { return $('#txtDescripcionRecord'); },

        HdnCodigoColaboradorReporta: function () { return $('#hdnCodigoColaboradorReporta'); },
        TxtNombreColaboradorReporta: function () { return $('#txtNombreColaboradorReporta'); },
        BtnBuscarColaboradorReporta: function () { return $('#btnBuscarColaboradorReporta'); },
        DlgFormularioBuscarColaboradorReporta: null,

        SlcProyectoRecord: function () { return $('#slcProyectoRecord'); },
        SlcDepartamentoRecord: function () { return $('#slcDepartamentoRecord'); },
        SlcAreaRecord: function () { return $('#slcAreaRecord'); },
        SlcGrupoRecord: function () { return $('#slcGrupoRecord'); },
        SlcEmpresaRecord: function () { return $('#slcEmpresaRecord'); },

        HdnCodigoColaboradorResponsableDepartamento: function () { return $('#hdnCodigoColaboradorResponsableDepartamento'); },
        TxtNombreColaboradorResponsableDepartamento: function () { return $('#txtNombreColaboradorResponsableDepartamento'); },
        BtnBuscarColaboradorResponsableDepartamento: function () { return $('#btnBuscarColaboradorResponsableDepartamento'); },
        DlgFormularioBuscarColaboradorResponsableDepartamento: null,

        HdnCodigoColaboradorResponsableArea: function () { return $('#hdnCodigoColaboradorResponsableArea'); },
        TxtNombreColaboradorResponsableArea: function () { return $('#txtNombreColaboradorResponsableArea'); },
        BtnBuscarColaboradorResponsableArea: function () { return $('#btnBuscarColaboradorResponsableArea'); },
        DlgFormularioBuscarColaboradorResponsableArea: null,

        HdnCodigoColaboradorResponsableGrupo: function () { return $('#hdnCodigoColaboradorResponsableGrupo'); },
        TxtNombreColaboradorResponsableGrupo: function () { return $('#txtNombreColaboradorResponsableGrupo'); },
        BtnBuscarColaboradorResponsableGrupo: function () { return $('#btnBuscarColaboradorResponsableGrupo'); },
        DlgFormularioBuscarColaboradorResponsableGrupo: null,

        SlcLugarTrabajo: function () { return $('#slcLugarTrabajo'); },
        SlcProbabilidad: function () { return $('#slcProbabilidad'); },
        SlcConsecuenciaRiesgo: function () { return $('#slcConsecuenciaRiesgo'); },
        HdnCodigoRiesgo: function () { return $('#hdnCodigoRiesgo'); },
        TxtRiesgo: function () { return $('#txtRiesgo'); },

        BtnCancelarRecord: function () { return $('#btnCancelarRecord'); },
        BtnGrabarRecord: function () { return $('#btnGrabarRecord'); },

        //Persona Involucrada
        GrdResultadoPersonaInvolucrada: null,
        BtnAgregarPersonaInvolucrada: function () { return $('#btnAgregarPersonaInvolucrada'); },
        DlgFormularioBuscarColaboradorInvolucrado: null,
        BtnGrabarPersonaInvolucradaOtros: function () { return $('#btnGrabarPersonaInvolucradaOtros'); },
        TxtPersonaInvolucradaOtros: function () { return $('#txtPersonaInvolucradaOtros'); },
        DivPersonaInvolucradaOtros: function () { return $('#divPersonaInvolucradaOtros'); },

        //Anexo Apéndice
        BtnAgregarRecordAnexoApendice: function () { return $('#btnAgregarRecordAnexoApendice'); },
        DlgFormularioRecordAnexoApendice: null,
        GrdResultadoRecordAnexoApendice: null,

        //Anexo Foto
        BtnAgregarRecordAnexoFoto: function () { return $('#btnAgregarRecordAnexoFoto'); },
        DlgFormularioRecordAnexoFoto: null,
        GrdResultadoRecordAnexoFoto: null,
        DlgFormularioVistaPreviaFoto: null,

        //Record Acción
        BtnAgregarRecordAccion: function () { return $('#btnAgregarRecordAccion'); },
        DlgFormularioRecordAccion: null,
        GrdResultadoRecordAccion: null,

        //Cierre de Record
        FrmCierreRecord: function () { return $('#frmCierreRecord'); },
        TxtComentarioCierreRecord: function () { return $('#txtComentarioCierreRecord'); },
        DtpFechaCierreRecord: function () { return $('#dtpFechaCierreRecord'); },
        BtnGrabarCierreRecord: function () { return $('#btnGrabarCierreRecord'); },
        ValidadorCierreRecord: null,

        //Evaluacion Riesgo
        BtnGrabarEvaluacionRiesgo: function () { return $('#btnGrabarEvaluacionRiesgo'); },
    };

    base.Event = {
        BtnGridDeleteValidate: function (data, type, full) {
            if (base.Control.FormularioRecordModel.Record.ControlTotal && base.Control.FormularioRecordModel.Record.CodigoEstadoRecord != Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.EstadoRecord.Cerrado)
                return true;
            else
                return false;
        },

        SlcTipoClasificacionChange: function () {
            base.Control.SlcNivel().empty();
            base.Control.SlcNivel().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));

            if (base.Control.SlcTipoClasificacion().val() != '') {
                base.Ajax.AjaxBuscarNivel.data = {
                    CodigoTipoClasificacion: base.Control.SlcTipoClasificacion().val()
                };

                base.Ajax.AjaxBuscarNivel.submit();
            }
        },

        SlcProyectoChange: function () {
            base.Control.SlcDepartamentoRecord().empty();
            base.Control.SlcDepartamentoRecord().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));

            base.Control.HdnCodigoColaboradorResponsableDepartamento().val(null);
            base.Control.TxtNombreColaboradorResponsableDepartamento().val('');

            base.Control.SlcAreaRecord().empty();
            base.Control.SlcAreaRecord().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));

            base.Control.HdnCodigoColaboradorResponsableArea().val(null);
            base.Control.TxtNombreColaboradorResponsableArea().val('');

            base.Control.SlcGrupoRecord().empty();
            base.Control.SlcGrupoRecord().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));

            base.Control.HdnCodigoColaboradorResponsableGrupo().val(null);
            base.Control.TxtNombreColaboradorResponsableGrupo().val('');

            if (base.Control.SlcProyectoRecord().val() != '') {
                base.Ajax.AjaxBuscarDepartamento.data = {
                    CodigoProyecto: base.Control.SlcProyectoRecord().val()
                };

                base.Ajax.AjaxBuscarDepartamento.submit();
            }
        },

        SlcDepartamentoChange: function () {
            base.Control.HdnCodigoColaboradorResponsableDepartamento().val(null);
            base.Control.TxtNombreColaboradorResponsableDepartamento().val('');

            base.Control.SlcAreaRecord().empty();
            base.Control.SlcAreaRecord().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));

            base.Control.HdnCodigoColaboradorResponsableArea().val(null);
            base.Control.TxtNombreColaboradorResponsableArea().val('');

            base.Control.SlcGrupoRecord().empty();
            base.Control.SlcGrupoRecord().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));

            base.Control.HdnCodigoColaboradorResponsableGrupo().val(null);
            base.Control.TxtNombreColaboradorResponsableGrupo().val('');

            if (base.Control.SlcDepartamentoRecord().val() != '') {
                var valorTexto = base.Control.SlcDepartamentoRecord().val().split('||');
                base.Control.HdnCodigoColaboradorResponsableDepartamento().val(valorTexto[1]);
                base.Control.TxtNombreColaboradorResponsableDepartamento().val(valorTexto[2]);

                base.Ajax.AjaxBuscarArea.data = {
                    CodigoDepartamento: valorTexto[0]
                };

                base.Ajax.AjaxBuscarArea.submit();
            }
        },

        SlcAreaChange: function () {
            base.Control.HdnCodigoColaboradorResponsableArea().val(null);
            base.Control.TxtNombreColaboradorResponsableArea().val('');

            base.Control.SlcGrupoRecord().empty();
            base.Control.SlcGrupoRecord().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));

            base.Control.HdnCodigoColaboradorResponsableGrupo().val(null);
            base.Control.TxtNombreColaboradorResponsableGrupo().val('');

            if (base.Control.SlcAreaRecord().val() != '') {
                var valorTexto = base.Control.SlcAreaRecord().val().split('||');
                base.Control.HdnCodigoColaboradorResponsableArea().val(valorTexto[1]);
                base.Control.TxtNombreColaboradorResponsableArea().val(valorTexto[2]);

                base.Ajax.AjaxBuscarGrupo.data = {
                    CodigoArea: valorTexto[0]
                };

                base.Ajax.AjaxBuscarGrupo.submit();
            }
        },

        SlcGrupoChange: function () {
            base.Control.HdnCodigoColaboradorResponsableGrupo().val(null);
            base.Control.TxtNombreColaboradorResponsableGrupo().val('');

            if (base.Control.SlcGrupoRecord().val() != '') {
                var valorTexto = base.Control.SlcGrupoRecord().val().split('||');
                base.Control.HdnCodigoColaboradorResponsableGrupo().val(valorTexto[1]);
                base.Control.TxtNombreColaboradorResponsableGrupo().val(valorTexto[2]);
            }
        },

        BtnBuscarColaboradorReportaClick: function () {
            base.Control.DlgFormularioBuscarColaboradorReporta.Show(false, [], null);
        },

        BuscarColaboradorReportaSuccess: function (colaboradorSeleccionado) {
            if (colaboradorSeleccionado.length > 0) {
                base.Control.HdnCodigoColaboradorReporta().val(colaboradorSeleccionado[0].CodigoColaborador);
                base.Control.TxtNombreColaboradorReporta().val(colaboradorSeleccionado[0].Nombres + ' ' + colaboradorSeleccionado[0].ApellidoPaterno + ' ' + colaboradorSeleccionado[0].ApellidoMaterno);
            }
            else {
                base.Control.HdnCodigoColaboradorReporta().val(null);
                base.Control.TxtNombreColaboradorReporta().val('');
            }
        },

        BtnBuscarColaboradorResponsableDepartamentoClick: function () {
            base.Control.DlgFormularioBuscarColaboradorResponsableDepartamento.Show(false, [], null);
        },

        BuscarColaboradorResponsableDepartamentoSuccess: function (colaboradorSeleccionado) {
            if (colaboradorSeleccionado.length > 0) {
                base.Control.HdnCodigoColaboradorResponsableDepartamento().val(colaboradorSeleccionado[0].CodigoColaborador);
                base.Control.TxtNombreColaboradorResponsableDepartamento().val(colaboradorSeleccionado[0].Nombres + ' ' + colaboradorSeleccionado[0].ApellidoPaterno + ' ' + colaboradorSeleccionado[0].ApellidoMaterno);
            }
            else {
                base.Control.HdnCodigoColaboradorResponsableDepartamento().val(null);
                base.Control.TxtNombreColaboradorResponsableDepartamento().val('');
            }
        },

        BtnBuscarColaboradorResponsableAreaClick: function () {
            base.Control.DlgFormularioBuscarColaboradorResponsableArea.Show(false, [], null);
        },

        BuscarColaboradorResponsableAreaSuccess: function (colaboradorSeleccionado) {
            if (colaboradorSeleccionado.length > 0) {
                base.Control.HdnCodigoColaboradorResponsableArea().val(colaboradorSeleccionado[0].CodigoColaborador);
                base.Control.TxtNombreColaboradorResponsableArea().val(colaboradorSeleccionado[0].Nombres + ' ' + colaboradorSeleccionado[0].ApellidoPaterno + ' ' + colaboradorSeleccionado[0].ApellidoMaterno);
            }
            else {
                base.Control.HdnCodigoColaboradorResponsableArea().val(null);
                base.Control.TxtNombreColaboradorResponsableArea().val('');
            }
        },

        BtnBuscarColaboradorResponsableGrupoClick: function () {
            base.Control.DlgFormularioBuscarColaboradorResponsableGrupo.Show(false, [], null);
        },

        BuscarColaboradorResponsableGrupoSuccess: function (colaboradorSeleccionado) {
            if (colaboradorSeleccionado.length > 0) {
                base.Control.HdnCodigoColaboradorResponsableGrupo().val(colaboradorSeleccionado[0].CodigoColaborador);
                base.Control.TxtNombreColaboradorResponsableGrupo().val(colaboradorSeleccionado[0].Nombres + ' ' + colaboradorSeleccionado[0].ApellidoPaterno + ' ' + colaboradorSeleccionado[0].ApellidoMaterno);
            }
            else {
                base.Control.HdnCodigoColaboradorResponsableGrupo().val(null);
                base.Control.TxtNombreColaboradorResponsableGrupo().val('');
            }
        },

        SlcProbabilidadSeveridadChange: function () {
            base.Control.HdnCodigoRiesgo().val(null);
            base.Control.TxtRiesgo().val('');

            if (base.Control.SlcConsecuenciaRiesgo().val() != '' && base.Control.SlcProbabilidad().val() != '') {
                base.Ajax.AjaxBuscarPesoRiesgo.data = {
                    CodigoProbabilidad: base.Control.SlcProbabilidad().val(),
                    CodigoConsecuenciaRiesgo: base.Control.SlcConsecuenciaRiesgo().val()
                };

                $(".radio input").removeAttr("checked");
                $("#radioProbabilidad_" + base.Control.SlcProbabilidad().val()).prop('checked', true);
                $("#radioSeveridad_" + base.Control.SlcConsecuenciaRiesgo().val()).prop('checked', true);

                $("#tablaMatrizRiesgos td").removeClass("celdaSelected");
                $("#celda_" + base.Control.SlcProbabilidad().val() + "_" + base.Control.SlcConsecuenciaRiesgo().val()).addClass('celdaSelected');
                base.Ajax.AjaxBuscarPesoRiesgo.submit();
            }
        },

        BtnCancelarRecordClick: function () {
            window.location.href = Pe.ElectroPeru.SGI.Presentacion.Base.Actions.Records;
        },

        BtnGrabarRecordClick: function () {
            'use strict';
            if (base.Control.Validador.isValid()) {
                var valorDepartamento = base.Control.SlcDepartamentoRecord().val().split('||');
                var valorArea = base.Control.SlcAreaRecord().val().split('||');
                var valorGrupo = base.Control.SlcGrupoRecord().val().split('||');

                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarRecord.data = {
                            CodigoRecord: base.Control.FormularioRecordModel.Record.CodigoRecord,
                            CodigoTipoRecord: base.Control.FormularioRecordModel.Record.CodigoTipoRecord != null ? base.Control.FormularioRecordModel.Record.CodigoTipoRecord : $('#slcTipoRecord').val(),
                            NumeroRecord: $('#txtNumeroRecord').val(),
                            FechaRecordString: base.Control.DtpFechaRecord().val() + ' ' + base.Control.SlcHoraRecord().val() + ":" + base.Control.SlcMinutoRecord().val(),
                            CodigoTipoClasificacion: base.Control.SlcTipoClasificacion().val(),
                            CodigoNivel: base.Control.SlcNivel().val(),
                            CodigoHpi: base.Control.SlcHpi().val(),
                            Titulo: base.Control.TxtTituloRecord().val(),
                            CodigoUbicacionGeneral: base.Control.SlcUbicacionGeneral().val(),
                            NombreLugarExacto: base.Control.TxtNombreLugarExacto().val(),
                            Descripcion: base.Control.TxtDescripcionRecord().val(),
                            CodigoColaboradorReporta: base.Control.HdnCodigoColaboradorReporta().val(),
                            CodigoProyecto: base.Control.SlcProyectoRecord().val(),
                            CodigoDepartamento: valorDepartamento[0],
                            CodigoArea: valorArea[0],
                            CodigoGrupo: valorGrupo[0],
                            CodigoEmpresa: base.Control.SlcEmpresaRecord().val(),
                            CodigoColaboradorResponsableDepartamento: base.Control.HdnCodigoColaboradorResponsableDepartamento().val(),
                            CodigoColaboradorResponsableArea: base.Control.HdnCodigoColaboradorResponsableArea().val(),
                            CodigoColaboradorResponsableGrupo: base.Control.HdnCodigoColaboradorResponsableGrupo().val(),
                            CodigoLugarTrabajo: base.Control.SlcLugarTrabajo().val(),
                            CodigoProbabilidad: base.Control.SlcProbabilidad().val(),
                            CodigoConsecuenciaRiesgo: base.Control.SlcConsecuenciaRiesgo().val(),
                            CodigoRiesgo: base.Control.HdnCodigoRiesgo().val()
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

        //Inicio - Persona Involucrada
        BtnBuscarPersonaInvolucradaClick: function () {
            'use strict';
            if (base.Control.FormularioRecordModel.Record.CodigoRecord != null) {
                var filtro = {
                    CodigoRecord: base.Control.FormularioRecordModel.Record.CodigoRecord
                };

                base.Control.GrdResultadoPersonaInvolucrada.Load(filtro);
            }
        },

        BtnAgregarPersonaInvolucradaClick: function () {
            if (base.Control.FormularioRecordModel.Record.CodigoRecord != null) {
                base.Control.DlgFormularioBuscarColaboradorInvolucrado.Show(false, [], null);
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValidarTabPrincipal });
            }
        },

        BuscarColaboradorInvolucradoSuccess: function (colaboradorSeleccionado) {
            if (colaboradorSeleccionado.length > 0) {
                base.Ajax.AjaxGrabarPersonaInvolucrada.data = {
                    CodigoRecord: base.Control.FormularioRecordModel.Record.CodigoRecord,
                    CodigoColaboradorInvolucrado: colaboradorSeleccionado[0].CodigoColaborador,
                };

                base.Ajax.AjaxGrabarPersonaInvolucrada.submit();
            }
        },

        BtnGridDeletePersonaInvolucradaClick: function (row, data) {
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

        BtnGrabarPersonaInvolucradaOtrosClick: function () {
            'use strict';
            if (base.Control.FormularioRecordModel.Record.CodigoRecord != null) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarPersonaInvolucradaOtros.data = {
                            CodigoRecord: base.Control.FormularioRecordModel.Record.CodigoRecord,
                            PersonaInvolucradaOtros: base.Control.TxtPersonaInvolucradaOtros().val().trim()
                        }

                        base.Ajax.AjaxGrabarPersonaInvolucradaOtros.submit();
                    }
                });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValidarTabPrincipal,
                });
            }
        },
        //Fin - Persona Involucrada

        //Inicio - Anexo Apéndice
        BtnBuscarRecordAnexoApendiceClick: function () {
            if (base.Control.FormularioRecordModel.Record.CodigoRecord != null) {
                var filtro = {
                    CodigoRecord: base.Control.FormularioRecordModel.Record.CodigoRecord,
                    CodigoTipoAnexo: 'ADJ'
                };

                base.Control.GrdResultadoRecordAnexoApendice.Load(filtro);
            }
        },

        BtnAgregarRecordAnexoApendiceClick: function () {
            if (base.Control.FormularioRecordModel.Record.CodigoRecord != null) {
                base.Control.DlgFormularioRecordAnexoApendice.Show({
                    CodigoRecordAnexo: null,
                    CodigoRecord: base.Control.FormularioRecordModel.Record.CodigoRecord,
                    CodigoEstadoRecord: base.Control.FormularioRecordModel.Record.CodigoEstadoRecord,
                });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValidarTabPrincipal,
                });
            }
        },

        BtnGridEditRecordAnexoApendiceClick: function (row, data) {
            'use strict'
            base.Control.DlgFormularioRecordAnexoApendice.Show({
                CodigoEstadoRecord: base.Control.FormularioRecordModel.Record.CodigoEstadoRecord,
                CodigoRecordAnexo: data.CodigoRecordAnexo,
                CodigoRecord: data.CodigoRecord
            });
        },

        BtnGridDownloadRecordAnexoApendiceClick: function (row, data) {
            'use strict'
            var filtro = {
                CodigoArchivoAnexoSharePoint: data.CodigoArchivoAnexoSharePoint,
                Nombre: data.Nombre
            };

            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.DescargarArchivoApendice, filtro);
        },

        BtnGridDeleteRecordAnexoClick: function (row, data) {
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
        //Fin - Anexo Apéndice

        //Inicio - Anexo Foto
        BtnBuscarRecordAnexoFotoClick: function () {
            if (base.Control.FormularioRecordModel.Record.CodigoRecord != null) {
                var filtro = {
                    CodigoRecord: base.Control.FormularioRecordModel.Record.CodigoRecord,
                    CodigoTipoAnexo: 'FOT'
                };

                base.Control.GrdResultadoRecordAnexoFoto.Load(filtro);
            }
        },

        BtnAgregarRecordAnexoFotoClick: function () {
            if (base.Control.FormularioRecordModel.Record.CodigoRecord != null) {
                base.Control.DlgFormularioRecordAnexoFoto.Show({
                    CodigoRecordAnexo: null,
                    CodigoRecord: base.Control.FormularioRecordModel.Record.CodigoRecord,
                    CodigoEstadoRecord: base.Control.FormularioRecordModel.Record.CodigoEstadoRecord
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
                CodigoEstadoRecord: base.Control.FormularioRecordModel.Record.CodigoEstadoRecord,
                CodigoRecordAnexo: data.CodigoRecordAnexo,
                CodigoRecord: data.CodigoRecord,
                CodigoArchivoAnexoSharePoint: data.CodigoArchivoAnexoSharePoint
            });
        },
        //Fin - Anexo Foto

        //Inicio - Record Acción
        BtnBuscarRecordAccionClick: function () {
            if (base.Control.FormularioRecordModel.Record.CodigoRecord != null) {
                var filtro = {
                    CodigoRecord: base.Control.FormularioRecordModel.Record.CodigoRecord
                };

                base.Control.GrdResultadoRecordAccion.Load(filtro);
            }
        },

        BtnAgregarRecordAccionClick: function () {
            if (base.Control.FormularioRecordModel.Record.CodigoRecord != null) {
                base.Control.DlgFormularioRecordAccion.Show({
                    CodigoEstadoRecord: base.Control.FormularioRecordModel.Record.CodigoEstadoRecord,
                    NumeroRecord: base.Control.FormularioRecordModel.Record.NumeroRecord,
                    CodigoRecord: base.Control.FormularioRecordModel.Record.CodigoRecord,
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

        BtnGridEditAccionClick: function (row, data) {
            'use strict'
            base.Control.DlgFormularioRecordAccion.Show({
                CodigoEstadoRecord: base.Control.FormularioRecordModel.Record.CodigoEstadoRecord,
                NumeroRecord: base.Control.FormularioRecordModel.Record.NumeroRecord,
                CodigoRecordAccion: data.CodigoRecordAccion,
                CodigoRecord: data.CodigoRecord
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
        //Fin - Record Acción

        //Inicio - Cierre Record
        BtnGrabarCierreRecordClick: function () {
            if (base.Control.ValidadorCierreRecord.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarCierreRecord.data = {
                            CodigoRecordEstado: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.EstadoRecord.Cerrado,
                            CodigoRecord: base.Control.FormularioRecordModel.Record.CodigoRecord,
                            ComentarioCierre: base.Control.TxtComentarioCierreRecord().val().trim(),
                            FechaEstadoString: base.Control.DtpFechaCierreRecord().val(),
                            CodigoColaboradorCierre: base.Control.FormularioRecordModel.Record.CodigoColaboradorCierre
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
        //Fin - Cierre Record

        //Inicio - Evaluacion Riesgo
        GetMatrizEvaluacionRiesgoClick: function () {
            'use strict'
            base.Ajax.AjaxMatrizTablaPesoRiesgo.submit();
        },

        BtnGrabarEvaluacionRiesgoClick: function () {
            if (base.Control.SlcConsecuenciaRiesgo().val() != '' && base.Control.SlcProbabilidad().val() != '' && base.Control.HdnCodigoRiesgo().val() != '') {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarEvaluacionRiesgo.data = {
                            CodigoRecord: base.Control.FormularioRecordModel.Record.CodigoRecord,
                            CodigoProbabilidad: base.Control.SlcProbabilidad().val(),
                            CodigoConsecuenciaRiesgo: base.Control.SlcConsecuenciaRiesgo().val(),
                            CodigoRiesgo: base.Control.HdnCodigoRiesgo().val()
                        }
                        base.Ajax.AjaxGrabarEvaluacionRiesgo.submit();
                    }
                });
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos
                });
            }            
        },
        //Fin - Evaluacion Riesgo
    };

    base.AjaxSuccess = {
        AjaxBuscarNivelSuccess: function (resultado) {
            $.each(resultado.Result, function (index, value) {
                base.Control.SlcNivel().append(new Option(value.DescripcionNivel, value.CodigoNivel));
            });
        },

        AjaxBuscarDepartamentoSuccess: function (resultado) {
            $.each(resultado.Result, function (index, value) {
                base.Control.SlcDepartamentoRecord().attr('validable', 'required Validar');

                var codigoColaboradorResponsable = "";
                var nombreColaboradorResponsable = "-";

                if (value.CodigoColaboradorResponsable != '' && value.CodigoColaboradorResponsable != null) {
                    codigoColaboradorResponsable = value.CodigoColaboradorResponsable;
                    nombreColaboradorResponsable = value.NombreColaboradorResponsable;
                }

                var valorCodigo = value.CodigoDepartamento + '||' + codigoColaboradorResponsable + '||' + nombreColaboradorResponsable;

                base.Control.SlcDepartamentoRecord().append(new Option(value.NombreDepartamento, valorCodigo));
            });
        },

        AjaxBuscarAreaSuccess: function (resultado) {
            $.each(resultado.Result, function (index, value) {
                var codigoColaboradorResponsable = "";
                var nombreColaboradorResponsable = "-";

                if (value.CodigoColaboradorResponsable != '' && value.CodigoColaboradorResponsable != null) {
                    codigoColaboradorResponsable = value.CodigoColaboradorResponsable;
                    nombreColaboradorResponsable = value.NombreColaboradorResponsable;
                }

                var valorCodigo = value.CodigoArea + '||' + codigoColaboradorResponsable + '||' + nombreColaboradorResponsable;

                base.Control.SlcAreaRecord().append(new Option(value.NombreArea, valorCodigo));
            });
        },

        AjaxBuscarGrupoSuccess: function (resultado) {
            $.each(resultado.Result, function (index, value) {
                var codigoColaboradorResponsable = "";
                var nombreColaboradorResponsable = "-";

                if (value.CodigoColaboradorResponsable != '' && value.CodigoColaboradorResponsable != null) {
                    codigoColaboradorResponsable = value.CodigoColaboradorResponsable;
                    nombreColaboradorResponsable = value.NombreColaboradorResponsable;
                }

                var valorCodigo = value.CodigoGrupo + '||' + codigoColaboradorResponsable + '||' + nombreColaboradorResponsable;

                base.Control.SlcGrupoRecord().append(new Option(value.NombreGrupo, valorCodigo));
            });
        },

        AjaxBuscarPesoRiesgoSuccess: function (resultado) {
            base.Control.HdnCodigoRiesgo().val(null);
            base.Control.TxtRiesgo().val('');

            base.Control.HdnCodigoRiesgo().val(resultado.Result[0].CodigoRiesgo);
            base.Control.TxtRiesgo().val(resultado.Result[0].DescripcionRiesgo);
        },

        AjaxGrabarRecordSuccess: function (resultado) {
            if (resultado.Result.CodigoRecord != null) {
                base.Control.FormularioRecordModel.Record.CodigoRecord = resultado.Result.CodigoRecord;
                base.Control.FormularioRecordModel.Record.NumeroRecord = resultado.Result.NumeroRecord;

                $('#txtNumeroRecord').val(resultado.Result.NumeroRecord);
                $('#slcTipoRecord').attr('readonly', 'readonly');
                $('#slcTipoRecord').attr('disabled', 'disabled');
                $('#slcTipoRecord').off('change');
                base.Control.DivPersonaInvolucradaOtros().removeClass('hidden');

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

        //Persona Involucrada
        AjaxGrabarPersonaInvolucradaSuccess: function (resultado) {
            if (resultado.Result >= 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });

                base.Event.BtnBuscarPersonaInvolucradaClick();
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

                base.Event.BtnBuscarPersonaInvolucradaClick();
            }
            else {
                base.Control.Mensaje.Error({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },

        AjaxGrabarPersonaInvolucradaOtrosSuccess: function (resultado) {
            if (resultado.Result >= 1) {
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

        //Anexo Apéndice
        AjaxEliminarRecordAnexoSuccess: function (data) {
            'use strict'
            if (data.Result >= 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });

                base.Event.BtnBuscarRecordAnexoApendiceClick();
                base.Event.BtnBuscarRecordAnexoFotoClick();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },

        //Record Acción
        AjaxEliminarRecordAccionSuccess: function (data) {
            'use strict'
            if (data.Result >= 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });

                base.Event.BtnBuscarRecordAccionClick();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },

        //Cierre Record
        AjaxGrabarCierreRecordSuccess: function (resultado) {
            if (resultado.Result.IndicadorCierreCorrecto >= 1) {
                base.Control.BtnGrabarRecord().off('click');
                base.Control.BtnGrabarRecord().addClass('hidden');

                base.Control.BtnCancelarRecord().off('click');
                base.Control.BtnCancelarRecord().addClass('hidden');

                base.Control.BtnGrabarPersonaInvolucradaOtros().off('click');
                base.Control.BtnGrabarPersonaInvolucradaOtros().addClass('hidden');

                base.Control.BtnAgregarPersonaInvolucrada().off('click');
                base.Control.BtnAgregarPersonaInvolucrada().addClass('hidden');

                base.Control.BtnAgregarRecordAnexoApendice().off('click');
                base.Control.BtnAgregarRecordAnexoApendice().addClass('hidden');

                base.Control.BtnAgregarRecordAnexoFoto().off('click');
                base.Control.BtnAgregarRecordAnexoFoto().addClass('hidden');

                base.Control.BtnAgregarRecordAccion().off('click');
                base.Control.BtnAgregarRecordAccion().addClass('hidden');

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

        AjaxMatrizTablaPesoRiesgoSuccess: function (response){
            var arrayProbabilidad = [];
            var arraySeveridad = [];
            $('select#slcProbabilidad').find('option').each(function (i, val) {
                if (i > 0) {
                    var obj = { valor: $(this).val(), texto: $(this).text() };
                    arrayProbabilidad.push(obj);
                }
            });

            $('select#slcConsecuenciaRiesgo').find('option').each(function (i, val) {
                if (i > 0) {
                    var obj = { valor: $(this).val(), texto: $(this).text() };
                    arraySeveridad.push(obj);
                }
            });

            var tituloSuperiorMatriz = '<table width="100%" cellpadding="0" cellspacing="0"><tr><td width="20%">&nbsp;</td><td width="80%"><h3 class="text-center">' + Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.EtiquetaMatrizConsecuencia + '</h3></td></tr></table>';
            var estructuraRiesgos = tituloSuperiorMatriz + '<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td><h4 style="font-size:20px;">' + Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.EtiquetaMatrizProbabilidad + '</h4></td><td><table id="tablaMatrizRiesgos" width="100%" cellpadding="0" cellspacing="0" class="table-bordered">';

            for (var i = 0; i <= arrayProbabilidad.length; i++) {
                estructuraRiesgos += '<tr>';
                for (var j = 0; j <= arraySeveridad.length; j++) {
                    if (j == 0) {
                        if (i > 0) {
                            estructuraRiesgos += '<td style="padding-left: 10px;"><div class="radio"><label><input type="radio" name="probabilidad" id="radioProbabilidad_' + arrayProbabilidad[i - 1].valor + '" onclick="setProbabilidadMatriz(\'' + arrayProbabilidad[i - 1].valor + '\')" value="' + arrayProbabilidad[i - 1].valor + '">' + arrayProbabilidad[i - 1].texto + '</label></div></td>';
                        }
                        else {
                            estructuraRiesgos += '<td width="20%"></td>';
                        }
                    }
                    else {
                        if (i == 0) {
                            estructuraRiesgos += '<td width="15%" class="text-center"><div class="radio"><label><input type="radio" name="severidad" id="radioSeveridad_' + arraySeveridad[j - 1].valor + '" onclick="setSeveridadMatriz(\'' + arraySeveridad[j - 1].valor + '\')" value="' + arraySeveridad[j - 1].valor + '">' + arraySeveridad[j - 1].texto + '</label></div></td>';
                        }
                        else {

                            estructuraRiesgos += '<td id="celda_' + arrayProbabilidad[i - 1].valor + "_" + arraySeveridad[j - 1].valor + '" class="text-center" onclick="seleccionarRiesgoMatriz(\'' + arrayProbabilidad[i - 1].valor + '\', \'' + arraySeveridad[j - 1].valor + '\'); return false;"></td>';

                        }
                    }
                }
                estructuraRiesgos += '</tr>';
            }
            estructuraRiesgos += '</table></td></tr></table>';
            $('#contenedorMatrizRiesgos').html(estructuraRiesgos);

            for (var i = 0; i < response.Result.length; i++) {
                $("#celda_" + response.Result[i].CodigoProbabilidad + "_" + response.Result[i].CodigoConsecuenciaRiesgo).html(response.Result[i].DescripcionRiesgo);
                $("#celda_" + response.Result[i].CodigoProbabilidad + "_" + response.Result[i].CodigoConsecuenciaRiesgo).css("background-color", response.Result[i].DescripcionColorHexadecimal);
            }

            if (base.Control.FormularioRecordModel.Record != null) {
                $(".radio input").removeAttr("checked");
                $("#radioProbabilidad_" + base.Control.FormularioRecordModel.Record.CodigoProbabilidad).prop('checked', true);
                $("#radioSeveridad_" + base.Control.FormularioRecordModel.Record.CodigoConsecuenciaRiesgo).prop('checked', true);
                $("#celda_" + base.Control.FormularioRecordModel.Record.CodigoProbabilidad + "_" + base.Control.FormularioRecordModel.Record.CodigoConsecuenciaRiesgo).addClass("celdaSelected");
            }

            $.post(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.ObtenerTodasCategorias, {}, function (response) {
                if (response.length > 0) {
                    var arrTipoCategorias = [];
                    var arrNombreCategorias = [];
                    
                    for (var i = 0; i < response.length; i++) {
                        var flag = false;
                        for (var j = 0; j < arrTipoCategorias.length; j++) {
                            if (arrTipoCategorias[j].valor == response[i].CodigoTipoCategoria) {
                                flag = true;
                                break;
                            }
                        }

                        if (!flag) {
                            arrTipoCategorias.push({ nombre: response[i].DescripcionTipoCategoria, valor: response[i].CodigoTipoCategoria });
                        }
                    }

                    for (var i = 0; i < response.length; i++) {
                        var flag = false;
                        for (var j = 0; j < arrNombreCategorias.length; j++) {
                            if (arrNombreCategorias[j].nombre == (base.Control.FormularioRecordModel.Record.CodigoIdioma == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.CodigoIdiomaPorDefecto ? response[i].NombreCategoriaIngles : response[i].NombreCategoriaEspaniol)) {
                                flag = true;
                                break;
                            }
                        }

                        if (!flag) {
                            arrNombreCategorias.push({
                                nombre: base.Control.FormularioRecordModel.Record.CodigoIdioma == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.CodigoIdiomaPorDefecto ? response[i].NombreCategoriaIngles : response[i].NombreCategoriaEspaniol,
                                valor: response[i].CodigoTipoCategoria,
                                idCategoria: response[i].CodigoCategoria
                            });
                        }
                    }

                    var estructuraColapsable = '<div class="collapse-accordion">';

                    for (var i = 0; i < arrTipoCategorias.length; i++) {
                        estructuraColapsable += '<div class="bloque panel panel-default" id="id_TipoCategoria_' + (i + 1) + '"><div class="panel-heading"><h4 class="panel-title"><strong>' + Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.EtiquetaMatrizConsecuencia + '</strong></h4></div><div class="panel-body">';
                        for (var j = 0 ; j < arrNombreCategorias.length; j++) {
                            if (arrTipoCategorias[i].valor == arrNombreCategorias[j].valor) {
                                estructuraColapsable += '<div class="panel panel-default"><div class="panel-heading" role="tab" id="heading_' + (j + 1) + '"><h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion" href="#Divcollapse_' + (j + 1) + '" aria-expanded="false" aria-controls="Divcollapse_' + (j + 1) + '">' + arrNombreCategorias[j].nombre + '</a></h4></div>';
                                estructuraColapsable += '<div id="Divcollapse_' + (j + 1) + '" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading_' + (j + 1) + '">';
                                estructuraColapsable += '<div class="panel-body" id="' + arrNombreCategorias[j].idCategoria + '"><table width="100%" cellpadding="5" cellspacing="0" class="table-bordered"><tbody class="title_Categoria"></tbody></table></div></div></div>';
                            }
                        }
                        estructuraColapsable += '</div></div>';
                    }
                    estructuraColapsable += '</div>';
                    $('#contenedorColapsableRiesgos').html(estructuraColapsable);


                    for (var i = 0; i < response.length; i++) {
                        if (response[i].NombreCategoriaDetalleIngles != null && response[i].NombreCategoriaDetalleEspaniol != null) {
                            if ($('#' + response[i].CodigoCategoria).find('th').length < 1 && response[i].DescripcionTipoCategoria != null) {
                                $('#' + response[i].CodigoCategoria).find('.title_Categoria').append("<tr><th>" + Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaDescripcion + "</th><th>" + response[i].DescripcionTipoCategoria.charAt(0) + response[i].DescripcionTipoCategoria.slice(1).toLowerCase() + "</th></tr>");
                            }
                            if (base.Control.FormularioRecordModel.Record.CodigoIdioma == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.CodigoIdiomaPorDefecto)
                                $('#' + response[i].CodigoCategoria).find('.title_Categoria').append("<tr><td>" + response[i].NombreCategoriaDetalleIngles + "</td><td>" + response[i].DescripcionConsecuenciaPotencial + "</td></tr>");
                            else
                                $('#' + response[i].CodigoCategoria).find('.title_Categoria').append("<tr><td>" + response[i].NombreCategoriaDetalleEspaniol + "</td><td>" + response[i].DescripcionConsecuenciaPotencial + "</td></tr>");
                        }
                        else {
                            $('#' + response[i].CodigoCategoria).html("");
                        }
                    }
                }
            });
        },

        AjaxGrabarEvaluacionRiesgoSuccess: function (response) {
            if (response.Result.toString() == "1") {
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
        }
    };

    base.Ajax = {
        AjaxBuscarNivel: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.BuscarNivel,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxBuscarNivelSuccess
        }),

        AjaxBuscarDepartamento: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.BuscarDepartamento,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxBuscarDepartamentoSuccess
        }),

        AjaxBuscarArea: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.BuscarArea,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxBuscarAreaSuccess
        }),

        AjaxBuscarGrupo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.BuscarGrupo,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxBuscarGrupoSuccess
        }),

        AjaxBuscarPesoRiesgo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.BuscarPesoRiesgo,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxBuscarPesoRiesgoSuccess
        }),

        AjaxGrabarRecord: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.RegistrarRecord,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxGrabarRecordSuccess
        }),

        //Persona Involucrada
        AjaxGrabarPersonaInvolucrada: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.RegistrarPersonaInvolucrada,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxGrabarPersonaInvolucradaSuccess
        }),

        AjaxGrabarPersonaInvolucradaOtros: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.RegistrarPersonaInvolucradaOtros,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxGrabarPersonaInvolucradaOtrosSuccess
        }),

        AjaxEliminarPersonaInvolucrada: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.EliminarPersonaInvolucrada,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarPersonaInvolucradaSuccess
        }),

        //Anexo Apéndice
        AjaxEliminarRecordAnexo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.EliminarRecordAnexo,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarRecordAnexoSuccess
        }),

        //Record Acción
        AjaxEliminarRecordAccion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.EliminarRecordAccion,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarRecordAccionSuccess
        }),

        //Cierre Record
        AjaxGrabarCierreRecord: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.RegistrarCierreRecord,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxGrabarCierreRecordSuccess
        }),

        //Matriz Peso Riesgo
        AjaxMatrizTablaPesoRiesgo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.BuscarPesoRiesgo,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxMatrizTablaPesoRiesgoSuccess
        }),

        AjaxGrabarEvaluacionRiesgo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.RegistroEvaluacionRiesgo,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxGrabarEvaluacionRiesgoSuccess
        }),
    };

    base.Function = {
        CrearGridPersonaInvolucrada: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridNumeroDocumento,
                width: "5%"
            });

            columns.push({
                data: 'NombreColaboradorInvolucrado',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridNombreColaboradorInvolucrado,
                width: "10%",
                'class': 'left'
            });

            columns.push({
                data: 'DescripcionTipoPlanilla',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridRegimen,
                width: "10%"
            });

            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.BtnGridDeleteValidate, event: { on: 'click', callBack: base.Event.BtnGridDeletePersonaInvolucradaClick } }
                ]
            });

            base.Control.GrdResultadoPersonaInvolucrada = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoPersonaInvolucrada',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.BuscarPersonaInvolucrada,
                    source: 'Result'
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
                    { type: Pe.GMD.UI.Web.Components.GridAction.Adjunto, event: { on: 'click', callBack: base.Event.BtnGridDownloadRecordAnexoApendiceClick } }
                ]
            });

            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditRecordAnexoApendiceClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.BtnGridDeleteValidate, event: { on: 'click', callBack: base.Event.BtnGridDeleteRecordAnexoClick } }
                ]
            });

            base.Control.GrdResultadoRecordAnexoApendice = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoRecordAnexoApendice',
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
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.BtnGridDeleteValidate, event: { on: 'click', callBack: base.Event.BtnGridDeleteRecordAnexoClick } }
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
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.BtnGridDeleteValidate, event: { on: 'click', callBack: base.Event.BtnGridDeleteAccionClick } }
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

        ValidacionExtraRecord: function () {
            var validaciones = new Array();

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.SlcTipoClasificacion().children().length > 1 && base.Control.SlcTipoClasificacion().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.SlcTipoClasificacion().attr('class', 'form-control');
                    }
                    else {
                        base.Control.SlcTipoClasificacion().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.SlcNivel().children().length > 1 && base.Control.SlcNivel().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.SlcNivel().attr('class', 'form-control');
                    }
                    else {
                        base.Control.SlcNivel().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });

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

                    if (base.Control.SlcDepartamentoRecord().children().length > 1 && base.Control.SlcDepartamentoRecord().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.SlcDepartamentoRecord().attr('class', 'form-control');
                    }
                    else {
                        base.Control.SlcDepartamentoRecord().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.SlcAreaRecord().children().length > 1 && base.Control.SlcAreaRecord().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.SlcAreaRecord().attr('class', 'form-control');
                    }
                    else {
                        base.Control.SlcAreaRecord().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.SlcGrupoRecord().children().length > 1 && base.Control.SlcGrupoRecord().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.SlcGrupoRecord().attr('class', 'form-control');
                    }
                    else {
                        base.Control.SlcGrupoRecord().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;
                    
                    if (base.Control.SlcProbabilidad().val() != '' && base.Control.SlcConsecuenciaRiesgo().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.SlcConsecuenciaRiesgo().attr('class', 'form-control');
                    }
                    else {
                        base.Control.SlcConsecuenciaRiesgo().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.SlcConsecuenciaRiesgo().val() != '' && base.Control.SlcProbabilidad().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.SlcProbabilidad().attr('class', 'form-control');
                    }
                    else {
                        base.Control.SlcProbabilidad().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });

            return validaciones;
        }
    };
};


function seleccionarRiesgoMatriz(probabilidad, severidad) {
    $('select#slcProbabilidad').val(probabilidad);
    $('select#slcConsecuenciaRiesgo').val(severidad);

    $(".radio input").removeAttr("checked");
    $("#radioProbabilidad_" + probabilidad).prop('checked', true);
    $("#radioSeveridad_" + severidad).prop('checked', true);

    $("#tablaMatrizRiesgos td").removeClass("celdaSelected");
    $("#celda_" + probabilidad + "_" + severidad).addClass('celdaSelected');

    $.post(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.BuscarPesoRiesgo, {
        CodigoProbabilidad: probabilidad,
        CodigoConsecuenciaRiesgo: severidad
    }, function (response) {
        $('#hdnCodigoRiesgo').val(null);
        $('#txtRiesgo').val('');

        $('#hdnCodigoRiesgo').val(response.Result[0].CodigoRiesgo);
        $('#txtRiesgo').val(response.Result[0].DescripcionRiesgo);
    });
}

function setProbabilidadMatriz(probabilidad) {
    var severidad = $('input[name=severidad]:checked').val();
    $('select#slcProbabilidad').val(probabilidad);

    $("#tablaMatrizRiesgos td").removeClass("celdaSelected");
    $("#celda_" + probabilidad + "_" + severidad).addClass('celdaSelected');

    $.post(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.BuscarPesoRiesgo, {
        CodigoProbabilidad: probabilidad,
        CodigoConsecuenciaRiesgo: severidad
    }, function (response) {
        $('#hdnCodigoRiesgo').val(null);
        $('#txtRiesgo').val('');

        $('#hdnCodigoRiesgo').val(response.Result[0].CodigoRiesgo);
        $('#txtRiesgo').val(response.Result[0].DescripcionRiesgo);
    });
}

function setSeveridadMatriz(severidad) {
    var probabilidad = $('input[name=probabilidad]:checked').val();
    $('select#slcConsecuenciaRiesgo').val(severidad);

    $("#tablaMatrizRiesgos td").removeClass("celdaSelected");
    $("#celda_" + probabilidad + "_" + severidad).addClass('celdaSelected');

    $.post(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.BuscarPesoRiesgo, {
        CodigoProbabilidad: probabilidad,
        CodigoConsecuenciaRiesgo: severidad
    }, function (response) {
        $('#hdnCodigoRiesgo').val(null);
        $('#txtRiesgo').val('');

        $('#hdnCodigoRiesgo').val(response.Result[0].CodigoRiesgo);
        $('#txtRiesgo').val(response.Result[0].DescripcionRiesgo);
    });
}