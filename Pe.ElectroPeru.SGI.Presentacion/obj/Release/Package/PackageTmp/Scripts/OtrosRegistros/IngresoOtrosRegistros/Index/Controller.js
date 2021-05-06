/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 22122017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index');
Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        'use strict'
        Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
        base.Control.FormularioIngresoOtrosRegistrosModel = Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Models.IngresoOtrosRegistrosModel;
        /*Tab: Información General*/
        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmInformacionGeneral(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos
        });
        base.Control.BtnSalirInformacionGeneral().off('click');
        base.Control.BtnSalirInformacionGeneral().on('click', base.Event.BtnSalirInformacionGeneralClick);
        base.Control.BtnAnularInformacionGeneral().off('click');
        base.Control.BtnAnularInformacionGeneral().on('click', base.Event.BtnAnularOtrosRegistrosGeneralClick);
        base.Control.BtnGuardarInformacionGeneral().off('click');
        base.Control.BtnGuardarInformacionGeneral().on('click', base.Event.BtnGrabarOtrosRegistrosGeneralClick);
        base.Control.BtnRegresarBandejaInvestigacion().off('click');
        base.Control.BtnRegresarBandejaInvestigacion().on('click', base.Event.BtnRegresarBandejaOtrosRegistrosClick);
        base.Event.BtnVerificarHorasMinutosClick();
        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaEjecucion(),
            minDateFrom: new Date(1900, 1, 1),
            is12HourFormat: false
        });

        /*Tab: Hallazgo*/
        base.Control.BtnSalirHallazgo().off('click');
        base.Control.BtnSalirHallazgo().on('click', base.Event.BtnSalirHallazgoClick);
        base.Control.BtnLimpiarHallazgo().off('click');
        base.Control.BtnLimpiarHallazgo().on('click', base.Event.BtnLimpiarIngresoHallazgoClick);
        base.Control.BtnGuardarHallazgo().off('click');
        base.Control.BtnGuardarHallazgo().on('click', base.Event.BtnGrabarHallazgoClick);
        base.Control.ValidadorHallazgo = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmHallazgo(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
        });

        /*Tab: Acción*/
        base.Control.DlgFormularioAccion = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordAccionGenerico.Controller({
            GrabarRecordAccionSuccess: base.Event.BtnBuscarAccionesClick
        });
        base.Control.BtnAgregarAccion().off('click');
        base.Control.BtnAgregarAccion().on('click', base.Event.BtnAgregarAccionClick);

        /*Tab: Participantes*/
        base.Control.BtnBuscarColaboradorParticipante().off('click');
        base.Control.BtnBuscarColaboradorParticipante().on('click', base.Event.BtnBuscarColaboradorParticipanteClick);
        base.Control.SlcTipoParticipante().off('change');
        base.Control.SlcTipoParticipante().on('change', base.Event.SlcTipoParticipanteChange);
        base.Control.BtnLimpiarParticipante().off('click');
        base.Control.BtnLimpiarParticipante().on('click', base.Event.BtnLimpiarParticipanteClick);
        base.Control.BtnGuardarParticipante().off('click');
        base.Control.BtnGuardarParticipante().on('click', base.Event.BtnGrabarParticipanteClick);
        base.Control.ValidadorParticipante = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmParticipante(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraFormularioParticipante()
        });

        if (opts != null && opts.AceptarSuccess != null && opts.AceptarSuccess)
            base.Event.AceptarSuccess = opts.AceptarSuccess;
        base.Control.DlgFormularioBuscarColaboradorParticipante = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.AjaxSuccess.BuscarColaboradorParticipanteSuccess
        });

        /*Tab: Anexos*/
        base.Control.DlgFormularioOtrosRegistrosAnexoApendice = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioIntegradorApendiceArchivo.Controller({
            GrabarRecordAnexoApendiceSuccess: base.Event.BtnBuscarOtrosRegistrosAnexoArchivoClick
        });

        base.Control.BtnAgregarOtrosRegistrosAnexoArchivo().off('click');
        base.Control.BtnAgregarOtrosRegistrosAnexoArchivo().on('click', base.Event.BtnAgregarOtrosRegistrosAnexoArchivoClick);

        /*Tab: Fotos*/
        base.Control.DlgFormularioOtrosRegistrosAnexoFoto = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioIntegradorApendiceFoto.Controller({
            GrabarRecordAnexoFotoSuccess: base.Event.BtnBuscarOtrosRegistrosAnexoFotoClick
        });

        base.Control.DlgFormularioVistaPreviaFoto = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioVistaPreviaFotoGenerico.Controller({
        });
        base.Control.BtnAgregarOtrosRegistrosAnexoFoto().off('click');
        base.Control.BtnAgregarOtrosRegistrosAnexoFoto().on('click', base.Event.BtnAgregarOtrosRegistrosAnexoFotoClick);

        //Seleccionar Tab
        $('#cartTabsFormularioIngresoOtrosRegistros').on('shown.bs.tab', function (e) {
            var target = $(e.target).attr("href");
            if (target == "#tabGeneral") {
                base.Control.CodigoHallazgo = null;
            }
            else if (target == "#tabHallazgo") {               
                base.Control.CodigoHallazgo = null;
                if (base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoOtrosRegistros != null) {
                    if (base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.IndicadorEsLectura != true) {
                        base.Event.DeshabilitarBotonesIngresoHallazgoClick();
                    }
                    base.Event.BtnLimpiarIngresoHallazgoClick();
                    base.Event.BtnBuscarHallazgoClick();
                }
                else {
                    base.Control.BtnGuardarHallazgo().hide();
                    base.Control.BtnLimpiarHallazgo().hide();
                }
            }
            else if (target == "#tabAccion") {

                if (base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoOtrosRegistros != null) {
                    if (base.Control.CodigoHallazgo != null) {
                        base.Control.FlsRevisarHallazgoAccion().show();
                        $("#DivfrmAccion").empty();
                        $("#DivfrmAccion").append("<span>" + Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.EtiquetaTituloIngresoAcciones + "</span>");
                    }
                    else {
                        $("#DivfrmAccion").empty();
                        $("#DivfrmAccion").append("<span>" + Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.EtiquetaTituloListaAcciones + "</span>");
                        base.Control.FlsRevisarHallazgoAccion().hide();
                        base.Control.BtnAgregarAccion().hide();
                    }
                    base.Event.BtnBuscarAccionesClick();
                }
            }
            else if (target == "#tabParticipante") {
                base.Control.CodigoHallazgo = null;
                if (base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoOtrosRegistros != null) {
                    if (base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.IndicadorEsLectura != true) {
                        base.Control.FlsParticipante().prop('disabled', false);
                    }
                    base.Control.TxtApellidoPaterno().prop('disabled', false);
                    base.Control.TxtApellidoMaterno().prop('disabled', false);
                    base.Event.BtnLimpiarParticipanteClick();
                    base.Event.BtnBuscarParticipanteClick();
                }
                else {
                    base.Control.BtnGuardarParticipante().hide();
                    base.Control.BtnLimpiarParticipante().hide();
                }
            }
            else if (target == "#tabAnexo") {
                base.Control.CodigoHallazgo = null;
                base.Event.BtnBuscarOtrosRegistrosAnexoArchivoClick();
            }
            else if (target == "#tabFoto") {
                base.Control.CodigoHallazgo = null;
                base.Event.BtnBuscarOtrosRegistrosAnexoFotoClick();
            }
        });

    };

    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        Validador: null,
        FormularioIngresoOtrosRegistrosModel: null,
        TxtNumeroTipoRegistro: function () { return $('#txtNumeroTipoRegistro'); },
        BtnRegresarBandejaInvestigacion: function () { return $('#btnRegresarBandejaInvestigacion'); },

        /*Tab: Información General*/
        FrmInformacionGeneral: function () { return $('#frmInformacionGeneral'); },
        BtnSalirInformacionGeneral: function () { return $('#btnSalirInformacionGeneral'); },
        BtnAnularInformacionGeneral: function () { return $('#btnAnularInformacionGeneral'); },
        BtnGuardarInformacionGeneral: function () { return $('#btnGuardarInformacionGeneral'); },
        SlcTipoRegistro: function () { return $('#slcTipoRegistro'); },
        SlcEmpresaPais: function () { return $('#slcEmpresaPais'); },
        SlcComite: function () { return $('#slcComite'); },
        SlcPais: function () { return $('#slcPais'); },
        SlcProyecto: function () { return $('#slcProyecto'); },
        TxtTituloRegistro: function () { return $('#txtTituloRegistro'); },
        DtpFechaEjecucion: function () { return $('#dtpFechaEjecucion'); },
        SlcHoraEjecucion: function () { return $('#slcHoraEjecucion'); },
        SlcMinutoEjecucion: function () { return $('#slcMinutoEjecucion'); },
        
        /*Tab: Hallazgo*/
        ValidadorHallazgo: null,
        CodigoHallazgo: null,
        GrdResultadoHallazgo: null,
        FrmHallazgo: function () { return $('#frmHallazgo'); },
        FlsHallazgo: function () { return $('#flsHallazgo'); },
        SlcNivelRiesgo: function () { return $('#slcNivelRiesgo'); },
        TxtDescripcionCorta: function () { return $('#txtDescripcionCorta'); },
        TxtDescripcionLarga: function () { return $('#txtDescripcionLarga'); },
        BtnSalirHallazgo: function () { return $('#btnSalirHallazgo'); },
        BtnLimpiarHallazgo: function () { return $('#btnLimpiarHallazgo'); },
        BtnGuardarHallazgo: function () { return $('#btnGuardarHallazgo'); },

        /*Tab: Acciones*/
        GrdResultadoAccion: null,
        DlgFormularioAccion: null,
        BtnAgregarAccion: function () { return $('#btnAgregarAccion'); },
        FlsRevisarHallazgoAccion: function () { return $('#flsRevisarHallazgoAccion'); },
        SlcNivelRiesgoAccion: function () { return $('#slcNivelRiesgoAccion'); },
        TxtDescripcionCortaAccion: function () { return $('#txtDescripcionCortaAccion'); },

        /*Tab: Participante*/
        ValidadorParticipante: null,
        DlgFormularioBuscarColaboradorParticipante: null,
        GrdResultadoParticipante: null,
        CodigoOtrosRegistrosParticipante: null,
        FlsParticipante: function () { return $('#flsParticipante'); },
        FrmParticipante: function () { return $('#frmParticipante'); },
        SlcTipoParticipante: function () { return $('#slcTipoParticipante'); },
        SlcProyectoParticipante: function () { return $('#slcProyectoParticipante'); },
        DivGetColaboradorInterno: function () { return $('#divGetColaboradorInterno'); },
        HdnCodigoColaboradorParticipante: function () { return $('#hdnCodigoColaboradorParticipante'); },
        TxtNombreColaboradorParticipante: function () { return $('#txtNombreColaboradorParticipante'); },
        BtnBuscarColaboradorParticipante: function () { return $('#btnBuscarColaboradorParticipante'); },
        TxtNombreColaboradorInvitadoParticipante: function () { return $('#txtNombreColaboradorInvitadoParticipante'); },
        SlcTipoDocumento: function () { return $('#slcTipoDocumento'); },
        TxtNumeroDocumento: function () { return $('#txtNumeroDocumento'); },
        TxtApellidoPaterno: function () { return $('#txtApellidoPaterno'); },
        TxtApellidoMaterno: function () { return $('#txtApellidoMaterno'); },
        SlcTipoCargoEmpresa: function () { return $('#slcTipoCargoEmpresa'); },
        CodigoParticipanteInvitado: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.DatosConstantes.ParametrosTiposParticipanteOtrosRegistros.Invitado,
        BtnLimpiarParticipante: function () { return $('#btnLimpiarParticipante'); },
        BtnGuardarParticipante: function () { return $('#btnGuardarParticipante'); },

        /*Tab: Anexos*/
        DlgFormularioOtrosRegistrosAnexoApendice: null,
        BtnAgregarOtrosRegistrosAnexoArchivo: function () { return $('#btnAgregarOtrosRegistrosAnexoArchivo'); },
        GrdResultadoOtrosRegistrosAnexoApendice: null,

        /*Tab: Fotos*/
        DlgFormularioOtrosRegistrosAnexoFoto: null,
        BtnAgregarOtrosRegistrosAnexoFoto: function () { return $('#btnAgregarOtrosRegistrosAnexoFoto'); },
        GrdResultadoOtrosRegistrosAnexoFoto: null,
        DlgFormularioVistaPreviaFoto: null,

    };
    base.Event = {
        BtnRegresarBandejaOtrosRegistrosClick: function () {
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Actions.BandejaOtrosRegistros, {});
        },
        BtnVerificarHorasMinutosClick: function () {
            if (base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoOtrosRegistros == null) {
                base.Control.SlcHoraEjecucion().val('');
                base.Control.SlcMinutoEjecucion().val('');
            }
        },
        /*Tab: Información General*/
        BtnSalirInformacionGeneralClick: function () {
            'use strict'
            base.Control.Mensaje.Confirmation({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                message: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.ConfirmacionSalirOtrosRegistros,
                indicadorModal: false,
                onAccept: function () {
                    base.Ajax.AjaxSalirOtrosRegistrosGeneral.data = {
                        CodigoOtrosRegistros: base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoOtrosRegistros,
                        CodigoIntegradorTipoRegistro: base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoIntegradorTipoRegistro
                    };
                    base.Ajax.AjaxSalirOtrosRegistrosGeneral.submit();
                },
                onCancelDialog: function () {
                    base.Event.BtnRegresarBandejaOtrosRegistrosClick();
                }

            });
        },
        BtnBuscarColaboradorParticipanteClick: function () {
            var filtro = {
            }
            base.Control.DlgFormularioBuscarColaboradorParticipante.Show(false, [], filtro);
        },
        BtnGrabarOtrosRegistrosGeneralClick: function () {
            'use strict'
            if (base.Control.Validador.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    indicadorModal: false,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarOtrosRegistrosGeneral.data = {
                            CodigoOtrosRegistros: base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoOtrosRegistros,
                            CodigoTipoRegistro: base.Control.SlcTipoRegistro().val(),
                            NumeroOtrosRegistros: base.Control.TxtNumeroTipoRegistro().val(),
                            CodigoEmpresaPais: base.Control.SlcEmpresaPais().val(),
                            CodigoComite: base.Control.SlcComite().val(),
                            CodigoPais: base.Control.SlcPais().val(),
                            CodigoProyecto: base.Control.SlcProyecto().val(),
                            TituloRegistro: base.Control.TxtTituloRegistro().val(),
                            FechaEjecucion: base.Control.DtpFechaEjecucion().val(),
                            HoraEjecucion: base.Control.SlcHoraEjecucion().val(),
                            MinutoEjecucion: base.Control.SlcMinutoEjecucion().val(),
                        };
                        base.Ajax.AjaxGrabarOtrosRegistrosGeneral.submit();
                    }
                });
            }
            else {
                $("#frmInformacionGeneralSummaryErrorMessage").empty();
                $("#frmInformacionGeneralSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnAnularOtrosRegistrosGeneralClick: function () {
            'use strict'
            base.Control.Mensaje.Confirmation({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.TituloConfirmarGuardar,
                message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionAnular,
                indicadorModal: false,
                onAccept: function () {
                    base.Ajax.AjaxAnularOtrosRegistrosGeneral.data = {
                        CodigoOtrosRegistros: base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoOtrosRegistros,
                        CodigoIntegradorTipoRegistro: base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoIntegradorTipoRegistro
                    };
                    base.Ajax.AjaxAnularOtrosRegistrosGeneral.submit();
                }
            });
        },
        /*Tab: Hallazgo*/
        BtnGrabarHallazgoClick: function () {
            'use strict'
            //if (base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.IndicadorEsAdministrador != true
            //   && base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoEstadoIngresoDocumento != Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.DatosConstantes.ParametrosEstadoIngresoDocumento.PendienteHallazgo
            //    ) {
            //    base.Control.Mensaje.Warning({
            //        message: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.EtiquetaObsEliminarOtrosRegistrosNoPermite
            //    });
            //}
            //else {
            //    if (base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.IndicadorEsAdministrador == true ||
            //        (base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoEstadoIngresoDocumento == Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.DatosConstantes.ParametrosEstadoIngresoDocumento.PendienteHallazgo)) {
            //        base.Control.Mensaje.Delete({
            //            onAccept: function () {
            //                base.Ajax.AjaxEliminarHallazgo.data = {
            //                    CodigoHallazgo: data.CodigoHallazgo,
            //                    CodigoIntegradorTipoRegistro: base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoIntegradorTipoRegistro,
            //                };
            //                base.Ajax.AjaxEliminarHallazgo.submit();
            //            }
            //        });
            //    }
            //}

            if (base.Control.ValidadorHallazgo.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    indicadorModal: false,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarHallazgo.data = {
                            CodigoHallazgo: base.Control.CodigoHallazgo,
                            CodigoIntegradorTipoRegistro: base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoIntegradorTipoRegistro,
                            CodigoNivelRiesgo: base.Control.SlcNivelRiesgo().val(),
                            DescripcionCorta: base.Control.TxtDescripcionCorta().val(),
                            DescripcionLarga: base.Control.TxtDescripcionLarga().val(),
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
                CodigoIntegradorTipoRegistro: base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoIntegradorTipoRegistro,
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
        BtnGridRevisarHallazgoClick: function (row, data) {
            var filtro = {
                CodigoHallazgo: data.CodigoHallazgo,
            };
            base.Ajax.AjaxRevisarHallazgo.data = filtro;
            base.Ajax.AjaxRevisarHallazgo.submit();
        },
        BtnGridDeleteHallazgoClick: function (row, data) {
            'use strict'          
             if (base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.IndicadorEsAdministrador != true
                && base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoEstadoIngresoDocumento != Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.DatosConstantes.ParametrosEstadoIngresoDocumento.PendienteHallazgo
                 ) {
                    base.Control.Mensaje.Warning({
                        message: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.EtiquetaObsEliminarOtrosRegistrosNoPermite
                    });
                }
              else {
                 if (base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.IndicadorEsAdministrador == true ||
                     (base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoEstadoIngresoDocumento == Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.DatosConstantes.ParametrosEstadoIngresoDocumento.PendienteHallazgo))
                     {
                         base.Control.Mensaje.Delete({
                             onAccept: function () {
                                 base.Ajax.AjaxEliminarHallazgo.data = {
                                     CodigoHallazgo: data.CodigoHallazgo,
                                     CodigoIntegradorTipoRegistro: base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoIntegradorTipoRegistro,
                                 };
                                 base.Ajax.AjaxEliminarHallazgo.submit();
                             }
                         });
                     }            
                }
        },
        BtnLimpiarIngresoHallazgoClick: function () {
            base.Control.CodigoHallazgo = null;
            base.Control.SlcNivelRiesgo().val('');
            base.Control.TxtDescripcionCorta().val('');
            base.Control.TxtDescripcionLarga().val('');
        },
        HabilitarBotonesIngresoHallazgoClick: function () {
            base.Control.FlsHallazgo().prop('disabled', true);
            base.Control.BtnGuardarHallazgo().hide();
        },
        DeshabilitarBotonesIngresoHallazgoClick: function () {
            base.Control.FlsHallazgo().prop('disabled', false);
            base.Control.BtnGuardarHallazgo().show();
        },
        BtnSalirHallazgoClick: function () {
            'use strict'
            if (base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoEstadoIngresoDocumento ==
                Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.DatosConstantes.ParametrosEstadoIngresoDocumento.PendienteHallazgo) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.ConfirmacionSalirHallazgo,
                    indicadorModal: false,
                    onAccept: function () {
                        base.Ajax.AjaxSalirHallazgoOtrosRegistros.data = {
                            CodigoOtrosRegistros: base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoOtrosRegistros,
                        };
                        base.Ajax.AjaxSalirHallazgoOtrosRegistros.submit();
                    },
                    onCancelDialog: function () {
                        base.Event.BtnRegresarBandejaOtrosRegistrosClick();
                    }

                });

            }
            else {
                base.Event.BtnRegresarBandejaOtrosRegistrosClick();
            }

        },
        /*Tab: Acciones*/
        BtnBuscarAccionesClick: function () {
            'use strict'
            if (base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoIntegradorTipoRegistro != null) {
                var filtro = {
                    CodigoIntegradorTipoRegistro: base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoIntegradorTipoRegistro,
                    CodigoTipoOcurrenciaEntidad: base.Control.CodigoHallazgo
                };
                $("#divGrdResultadoAccion").empty();
                base.Function.CrearGridAccion();
                base.Control.GrdResultadoAccion.Load(filtro);
            }
        },
        BtnLimpiarRevisarHallazgoAccionClick: function () {
            base.Control.SlcNivelRiesgoAccion().val('');
            base.Control.TxtDescripcionCortaAccion().val('');
        },
        BtnGridSeleccionarTabAccionesClick: function (row, data) {
            $('#cartTabsFormularioIngresoOtrosRegistros a[href="#tabAccion"]').tab('show');
            base.Control.CodigoHallazgo = data.CodigoHallazgo;
            var filtro = {
                CodigoHallazgo: data.CodigoHallazgo,
            };
            base.Ajax.AjaxRevisarHallazgoAccion.data = filtro;
            base.Ajax.AjaxRevisarHallazgoAccion.submit();
        },
        BtnAgregarAccionClick: function () {           
            var filtro = {
                TituloFormulario: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaFormularioIngresoAcciones,
                CodigoIntegradorTipoRegistro: base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoIntegradorTipoRegistro,
                CodigoTipoRegistroParametro: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.ComiteSubComite,
                CodigoEstadoAccion: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Abierto,
                NumeroRecord: base.Control.TxtNumeroTipoRegistro().val(),
                CodigoTipoOcurrenciaParametro: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.TipoOcurrenciaAccion.Hallazgo,
                CodigoTipoOcurrenciaEntidad: base.Control.CodigoHallazgo,
                CodigoProyectoEntidad: base.Control.SlcProyecto().val(),
                indicadorOtrosRegistros: true,
            };
            base.Control.DlgFormularioAccion.Show(filtro);
        },
        BtnGridEditAccionClick: function (row, data) {
            'use strict'
            var filtro = {
                TituloFormulario: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaFormularioIngresoAcciones,
                CodigoRecordAccion: data.CodigoRecordAccion,
                CodigoIntegradorTipoRegistro: base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoIntegradorTipoRegistro,
                CodigoTipoRegistroParametro: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.ComiteSubComite,
                CodigoEstadoAccion: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Abierto,
                CodigoTipoOcurrenciaParametro: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.TipoOcurrenciaAccion.Hallazgo,
                CodigoProyectoEntidad: base.Control.SlcProyecto().val(),
                indicadorOtrosRegistros: true,
            };
            base.Control.DlgFormularioAccion.Show(filtro);
        },
        BtnGridRevisarAccionClick: function (row, data) {
            'use strict'
            var filtro = {
                TituloFormulario: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaFormularioIngresoAcciones,
                CodigoRecordAccion: data.CodigoRecordAccion,
                CodigoIntegradorTipoRegistro: base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoIntegradorTipoRegistro,
                CodigoTipoRegistroParametro: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.ComiteSubComite,
                IndicadorLectura: true,
            };
            base.Control.DlgFormularioAccion.Show(filtro);
        },

        BtnGridDeleteAccionClick: function (row, data) {
            'use strict'            
            if (base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoEstadoIngresoDocumento == Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.DatosConstantes.ParametrosEstadoIngresoDocumento.PendienteHallazgo ||
                base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoEstadoIngresoDocumento == Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.DatosConstantes.ParametrosEstadoIngresoDocumento.PendienteAcciones
                && base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.IndicadorEsAdministrador != true
               ) {
                base.Control.Mensaje.Warning({
                    message: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.EtiquetaObsEliminarAccionDocNoPermite
                });
            }
            else {
                base.Control.Mensaje.Delete({
                    onAccept: function () {
                        base.Ajax.AjaxEliminarAccion.data = {
                            CodigoRecordAccion: data.CodigoRecordAccion,
                            CodigoIntegradorTipoRegistro: base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoIntegradorTipoRegistro,
                        };
                        base.Ajax.AjaxEliminarAccion.submit();
                    }
                });
            }
        },
        /*Tab: Participante*/
        SlcTipoParticipanteChange: function () {
            'use strict'
            if (base.Control.SlcTipoParticipante().val() == base.Control.CodigoParticipanteInvitado) {
                base.Control.DivGetColaboradorInterno().hide();
                base.Control.TxtNombreColaboradorInvitadoParticipante().val('');
                base.Control.TxtNombreColaboradorInvitadoParticipante().show();
                base.Control.HdnCodigoColaboradorParticipante().val('');
                base.Control.TxtNombreColaboradorParticipante().val('');
                base.Control.TxtApellidoPaterno().val('');
                base.Control.TxtApellidoMaterno().val('');
                base.Control.TxtApellidoPaterno().prop('disabled', false);
                base.Control.TxtApellidoMaterno().prop('disabled', false);
                base.Control.SlcTipoDocumento().val('');
                base.Control.TxtNumeroDocumento().val('');
            }
            else {
                base.Control.DivGetColaboradorInterno().show();
                base.Control.TxtNombreColaboradorInvitadoParticipante().hide();
                base.Control.TxtNombreColaboradorInvitadoParticipante().val('');
                base.Control.HdnCodigoColaboradorParticipante().val('');
                base.Control.TxtNombreColaboradorParticipante().val('');
                base.Control.TxtApellidoPaterno().val('');
                base.Control.TxtApellidoMaterno().val('');
                base.Control.TxtApellidoPaterno().prop('disabled', true);
                base.Control.TxtApellidoMaterno().prop('disabled', true);
                base.Control.SlcTipoDocumento().val('');
                base.Control.TxtNumeroDocumento().val('');
            }
        },

        BtnBuscarParticipanteClick: function () {
            'use strict'
            var filtro = {
                CodigoOtrosRegistros: base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoOtrosRegistros,
            };
            $("#divGrdResultadoParticipante").empty();
            base.Function.CrearGridParticipante();
            base.Control.GrdResultadoParticipante.Load(filtro);
        },
        BtnLimpiarParticipanteClick: function () {
            base.Control.CodigoOtrosRegistrosParticipante = null;
            base.Control.SlcTipoParticipante().val('');
            base.Control.SlcProyectoParticipante().val('');
            base.Control.DivGetColaboradorInterno().hide();
            base.Control.HdnCodigoColaboradorParticipante().val('');
            base.Control.TxtNombreColaboradorParticipante().val('');
            base.Control.TxtNombreColaboradorInvitadoParticipante().val('');
            base.Control.TxtNombreColaboradorInvitadoParticipante().show();
            base.Control.TxtApellidoPaterno().val('');
            base.Control.TxtApellidoMaterno().val('');
            base.Control.SlcTipoDocumento().val('');
            base.Control.TxtNumeroDocumento().val('');
            base.Control.SlcTipoCargoEmpresa().val('');
        },
        BtnGridEditParticipanteClick: function (row, data) {
            var filtro = {
                CodigoOtrosRegistrosParticipante: data.CodigoOtrosRegistrosParticipante,
            };
            base.Ajax.AjaxEditParticipante.data = filtro;
            base.Ajax.AjaxEditParticipante.submit();
        },
        BtnGridRevisarParticipanteClick: function (row, data) {
            var filtro = {
                CodigoOtrosRegistrosParticipante: data.CodigoOtrosRegistrosParticipante,
            };
            base.Ajax.AjaxRevisarParticipante.data = filtro;
            base.Ajax.AjaxRevisarParticipante.submit();
        },
        BtnGridDeleteParticipanteClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarParticipante.data = {
                        CodigoOtrosRegistrosParticipante: data.CodigoOtrosRegistrosParticipante,
                    };
                    base.Ajax.AjaxEliminarParticipante.submit();
                }
            });
        },
        BtnGrabarParticipanteClick: function () {
            'use strict'
            if (base.Control.ValidadorParticipante.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    indicadorModal: false,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarParticipante.data = {
                            CodigoOtrosRegistrosParticipante: base.Control.CodigoOtrosRegistrosParticipante,
                            CodigoOtrosRegistros: base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoOtrosRegistros,
                            CodigoTipoParticipante: base.Control.SlcTipoParticipante().val(),
                            CodigoColaboradorParticipante: base.Control.HdnCodigoColaboradorParticipante().val(),
                            Nombres: base.Control.SlcTipoParticipante().val() == base.Control.CodigoParticipanteInvitado ? base.Control.TxtNombreColaboradorInvitadoParticipante().val() : base.Control.TxtNombreColaboradorParticipante().val(),
                            ApellidoPaterno: base.Control.TxtApellidoPaterno().val(),
                            ApellidoMaterno: base.Control.TxtApellidoMaterno().val(),
                            CodigoTipoDocumento: base.Control.SlcTipoDocumento().val(),
                            NumeroDocumento: base.Control.TxtNumeroDocumento().val(),
                            CodigoProyecto: base.Control.SlcProyectoParticipante().val(),
                            CodigoTipoCargoEmpresa: base.Control.SlcTipoCargoEmpresa().val()
                        };
                        base.Ajax.AjaxGrabarParticipante.submit();
                    }
                });

            }
            else {
                $("#frmParticipanteSummaryErrorMessage").empty();
                $("#frmParticipanteSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },
        /*Tab: Anexos*/
        BtnBuscarOtrosRegistrosAnexoArchivoClick: function () {
            'use strict'
            var filtro = {
                CodigoTipoAnexo: Pe.ElectroPeru.SGI.Presentacion.Core.Constante.DatosConstantes.ParametrosGenerales.CodigoTipoAnexoAdjunto,
                CodigoIntegradorTipoRegistro: base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoIntegradorTipoRegistro,
            };
            $("#divGrdResultadoOtrosRegistrosAnexoApendice").empty();
            base.Function.CrearGridOtrosRegistrosAnexoApendice();
            base.Control.GrdResultadoOtrosRegistrosAnexoApendice.Load(filtro);
        },
        BtnAgregarOtrosRegistrosAnexoArchivoClick: function () {
            if (base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoOtrosRegistros != null) {
                base.Control.DlgFormularioOtrosRegistrosAnexoApendice.Show({
                    CodigoIntegradorTipoRegistro: base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoIntegradorTipoRegistro,
                    CodigoTipoAnexoIntegrador: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.DatosConstantes.CodigoTiposAnexosOtrosRegistros
                });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValidarTabPrincipal,
                });
            }
        },
        BtnGridDownloadIntegradorTipoRegistroAnexoArchivoClick: function (row, data) {
            'use strict'
            var filtro = {
                CodigoArchivoAnexoSharePoint: data.CodigoArchivoAnexoSharePoint,
                Nombre: data.Nombre
            };
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Base.Actions.DescargarIntegradorTipoRegistroAnexo, filtro);
        },
        BtnGridEditIntegradorTipoRegistroAnexoArchivoClick: function (row, data) {
            'use strict'
            base.Control.DlgFormularioOtrosRegistrosAnexoApendice.Show({
                CodigoIntegradorTipoRegistroAnexo: data.CodigoIntegradorTipoRegistroAnexo,
                CodigoIntegradorTipoRegistro: data.CodigoIntegradorTipoRegistro,
                CodigoTipoAnexoIntegrador: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.DatosConstantes.CodigoTiposAnexosOtrosRegistros
            });
        },
        BtnGridDeleteIntegradorTipoRegistroAnexoArchivoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarIntegradorTipoRegistroAnexoArchivo.data = {
                        CodigoIntegradorTipoRegistroAnexo: data.CodigoIntegradorTipoRegistroAnexo,
                        CodigoIntegradorTipoRegistro: data.CodigoIntegradorTipoRegistro
                    };
                    base.Ajax.AjaxEliminarIntegradorTipoRegistroAnexoArchivo.submit();
                }
            });
        },
        /*Tab: Fotos*/
        BtnBuscarOtrosRegistrosAnexoFotoClick: function () {
            'use strict'
            var filtro = {
                CodigoTipoAnexo: Pe.ElectroPeru.SGI.Presentacion.Core.Constante.DatosConstantes.ParametrosGenerales.CodigoTipoAnexoFoto,
                CodigoIntegradorTipoRegistro: base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoIntegradorTipoRegistro,
            };
            $("#divGrdResultadoOtrosRegistrosAnexoFoto").empty();
            base.Function.CrearGridOtrosRegistrosAnexoFoto();
            base.Control.GrdResultadoOtrosRegistrosAnexoFoto.Load(filtro);
        },
        BtnAgregarOtrosRegistrosAnexoFotoClick: function () {
            if (base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoOtrosRegistros != null) {
                base.Control.DlgFormularioOtrosRegistrosAnexoFoto.Show({
                    CodigoIntegradorTipoRegistroAnexo: null,
                    CodigoIntegradorTipoRegistro: base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoIntegradorTipoRegistro,
                });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValidarTabPrincipal,
                });
            }
        },
        BtnGridIntegradorTipoRegistroVistaPreviaFotoClick: function (row, data) {
            base.Control.DlgFormularioVistaPreviaFoto.Show({
                CodigoIntegradorTipoRegistroAnexo: data.CodigoIntegradorTipoRegistroAnexo,
                CodigoIntegradorTipoRegistro: data.CodigoIntegradorTipoRegistro
            });
        },
        BtnGridEditIntegradorTipoRegistroAnexoFotoClick: function (row, data) {
            'use strict'
            base.Control.DlgFormularioOtrosRegistrosAnexoFoto.Show({
                CodigoIntegradorTipoRegistroAnexo: data.CodigoIntegradorTipoRegistroAnexo,
                CodigoIntegradorTipoRegistro: data.CodigoIntegradorTipoRegistro,
                CodigoArchivoAnexoSharePoint: data.CodigoArchivoAnexoSharePoint
            });
        },
        BtnGridDeleteIntegradorTipoRegistroAnexoFotoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarIntegradorTipoRegistroAnexoFoto.data = {
                        CodigoIntegradorTipoRegistroAnexo: data.CodigoIntegradorTipoRegistroAnexo,
                        CodigoIntegradorTipoRegistro: data.CodigoIntegradorTipoRegistro
                    };
                    base.Ajax.AjaxEliminarIntegradorTipoRegistroAnexoFoto.submit();
                }
            });
        },
        BtnGridVistaPreviaFotoClick: function (row, data) {
            base.Control.DlgFormularioVistaPreviaFoto.Show({
                CodigoIntegradorTipoRegistroAnexo: data.CodigoIntegradorTipoRegistroAnexo,
                CodigoIntegradorTipoRegistro: data.CodigoIntegradorTipoRegistro
            });
        },
    };
    base.AjaxSuccess = {
        BuscarColaboradorParticipanteSuccess: function (colaboradorSeleccionado) {
            if (colaboradorSeleccionado.length > 0) {
                base.Control.HdnCodigoColaboradorParticipante().val(colaboradorSeleccionado[0].CodigoColaborador);
                base.Control.TxtNombreColaboradorParticipante().val(colaboradorSeleccionado[0].Nombres);
                base.Control.TxtApellidoPaterno().val(colaboradorSeleccionado[0].ApellidoPaterno);
                base.Control.TxtApellidoPaterno().prop('disabled', true);
                base.Control.TxtApellidoMaterno().val(colaboradorSeleccionado[0].ApellidoMaterno);
                base.Control.TxtApellidoMaterno().prop('disabled', true);
                base.Control.SlcTipoDocumento().val(colaboradorSeleccionado[0].CodigoTipoDocumento);
                base.Control.TxtNumeroDocumento().val(colaboradorSeleccionado[0].NumeroDocumento);
                base.Control.TxtNombreColaboradorInvitadoParticipante().val('')
            }
            else {
                base.Control.HdnCodigoColaboradorParticipante().val('');
                base.Control.TxtNombreColaboradorParticipante().val('');
                base.Control.TxtApellidoPaterno().prop('disabled', false);
                base.Control.TxtApellidoMaterno().prop('disabled', false);
            }

        },
        AjaxSalirOtrosRegistrosGeneralSuccess: function (resultado) {
            if (resultado.IsSuccess == true) {
                if (resultado.Result == 1) {
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                    });
                    base.Event.BtnRegresarBandejaOtrosRegistrosClick();
                }
                else if (resultado.Result == 2) {
                    base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.EtiquetaObservacionGuardarOtrosRegistros });
                }
                else if (resultado.Result == 3) {
                    base.Event.BtnRegresarBandejaOtrosRegistrosClick();
                }
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxGrabarOtrosRegistrosGeneralSuccess: function (resultado) {
            
            if (resultado.IsSuccess == true) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                if (resultado.Result != null) {
                    base.Control.TxtNumeroTipoRegistro().val(resultado.Result.NumeroOtrosRegistros);
                    base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoOtrosRegistros = resultado.Result.CodigoOtrosRegistros;
                    base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoIntegradorTipoRegistro = resultado.Result.CodigoIntegradorTipoRegistro;
                    base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.CodigoEstadoIngresoDocumento = resultado.Result.CodigoEstadoIngresoDocumento;
                }
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxAnularOtrosRegistrosGeneralSuccess: function (resultado) {
            if (resultado.Result == 1) {
                base.Control.BtnAnularInformacionGeneral().remove();
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeAnuloRegistro
                });
            }
            else if (resultado.Result == 2) {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.EtiquetaObservacionAnularOtrosRegistros });
            }
            else if (resultado.Result == 3) {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.EtiquetaObservacionAnular });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        /*Tab: Hallazgo*/
        AjaxGrabarHallazgoSuccess: function (resultado) {
            if (resultado.Result == 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnBuscarHallazgoClick();
                base.Event.BtnLimpiarIngresoHallazgoClick();
            }
            else if (resultado.Result == 2) {
                base.Control.Mensaje.Warning({
                    message: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.EtiquetaObservacionGuardarHallazgo
                });
                base.Event.BtnBuscarHallazgoClick();
                base.Event.BtnLimpiarIngresoHallazgoClick();
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxEliminarHallazgoSuccess: function (resultado) {
            if (resultado.Result == 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
                base.Event.BtnBuscarHallazgoClick();
            }
            else if (resultado.Result == 3)
                {
                    base.Control.Mensaje.Warning({
                        message: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.EtiquetaObsEliminarOtrosRegistrosAsociada
                    });
                }
            else {
                base.Control.Mensaje.Warning({
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
                base.Event.DeshabilitarBotonesIngresoHallazgoClick();
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
                base.Event.BtnLimpiarIngresoHallazgoClick();
            }
        },
        AjaxRevisarHallazgoSuccess: function (resultado) {
            if (resultado.IsSuccess == true) {
                base.Control.CodigoHallazgo = resultado.Result.CodigoHallazgo;
                base.Control.SlcNivelRiesgo().val(resultado.Result.CodigoNivelRiesgo);
                base.Control.TxtDescripcionCorta().val(resultado.Result.DescripcionCorta);
                base.Control.TxtDescripcionLarga().val(resultado.Result.DescripcionLarga);
                base.Event.HabilitarBotonesIngresoHallazgoClick();
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
                base.Event.BtnLimpiarIngresoHallazgoClick();
            }
        },
        AjaxSalirHallazgoOtrosRegistrosSuccess: function (resultado) {
            if (resultado.IsSuccess == true) {
                if (resultado.Result == 1) {
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                    });
                    base.Event.BtnRegresarBandejaOtrosRegistrosClick();
                }
                else if (resultado.Result == 2) {
                    base.Event.BtnRegresarBandejaOtrosRegistrosClick();
                }
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        /*Tab: Aciones*/
        AjaxEliminarAccionSuccess: function (resultado) {
            if (resultado.Result == 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
                base.Event.BtnBuscarAccionesClick();
            }
            else if (resultado.Result == 2) {
                base.Control.Mensaje.Warning({
                    message: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.EtiquetaObsEliminarAccionSegNoPermite
                });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }

        },
        AjaxRevisarHallazgoAccionSuccess: function (resultado) {
            base.Event.BtnLimpiarRevisarHallazgoAccionClick();
            base.Control.FlsRevisarHallazgoAccion().show();
            base.Control.BtnAgregarAccion().hide();
            if (resultado.IsSuccess == true) {
                base.Control.SlcNivelRiesgoAccion().val(resultado.Result.CodigoNivelRiesgo);
                base.Control.TxtDescripcionCortaAccion().val(resultado.Result.DescripcionCorta);
                base.Control.BtnAgregarAccion().show();
            }
        },

        /*Tab: Participante*/
        AjaxGrabarParticipanteSuccess: function (resultado) {
            if (resultado.Result >= 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnBuscarParticipanteClick();
                base.Event.BtnLimpiarParticipanteClick();
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxEliminarParticipanteSuccess: function (resultado) {
            if (resultado.Result >= 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
                base.Event.BtnBuscarParticipanteClick();
            }
            else {
                base.Control.Mensaje.Warning({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxEditParticipanteSuccess: function (resultado) {
            if (resultado.IsSuccess == true) {
                base.Control.CodigoOtrosRegistrosParticipante = resultado.Result.CodigoOtrosRegistrosParticipante;
                base.Control.SlcTipoParticipante().val(resultado.Result.CodigoTipoParticipante);
                base.Control.SlcProyectoParticipante().val(resultado.Result.CodigoProyecto);
                if (resultado.Result.CodigoTipoParticipante == base.Control.CodigoParticipanteInvitado) {
                    base.Control.DivGetColaboradorInterno().hide();
                    base.Control.TxtNombreColaboradorInvitadoParticipante().show();
                    base.Control.HdnCodigoColaboradorParticipante().val('');
                    base.Control.TxtNombreColaboradorParticipante().val('');
                    base.Control.TxtNombreColaboradorInvitadoParticipante().val(resultado.Result.Nombres);
                    base.Control.TxtApellidoPaterno().prop('disabled', false);
                    base.Control.TxtApellidoMaterno().prop('disabled', false);
                }
                else {
                    base.Control.DivGetColaboradorInterno().show();
                    base.Control.TxtNombreColaboradorInvitadoParticipante().hide();
                    base.Control.TxtNombreColaboradorInvitadoParticipante().val('');
                    base.Control.HdnCodigoColaboradorParticipante().val(resultado.Result.CodigoColaboradorParticipante);
                    base.Control.TxtNombreColaboradorParticipante().val(resultado.Result.Nombres);
                    base.Control.TxtApellidoPaterno().prop('disabled', true);
                    base.Control.TxtApellidoMaterno().prop('disabled', true);
                }
                base.Control.TxtApellidoPaterno().val(resultado.Result.ApellidoPaterno);
                base.Control.TxtApellidoMaterno().val(resultado.Result.ApellidoMaterno);
                base.Control.SlcTipoDocumento().val(resultado.Result.CodigoTipoDocumento);
                base.Control.TxtNumeroDocumento().val(resultado.Result.NumeroDocumento);
                base.Control.SlcTipoCargoEmpresa().val(resultado.Result.CodigoTipoCargoEmpresa);
                base.Control.FlsParticipante().prop('disabled', false);

            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
                base.Event.BtnLimpiarParticipanteClick();
            }
        },
        AjaxRevisarParticipanteSuccess: function (resultado) {
            if (resultado.IsSuccess == true) {
                base.Control.CodigoSSomaParticipante = resultado.Result.CodigoSSomaParticipante;
                base.Control.SlcTipoParticipante().val(resultado.Result.CodigoTipoParticipante);
                base.Control.SlcProyectoParticipante().val(resultado.Result.CodigoProyecto);
                if (resultado.Result.CodigoTipoParticipante == base.Control.CodigoParticipanteInvitado) {
                    base.Control.DivGetColaboradorInterno().hide();
                    base.Control.HdnCodigoColaboradorParticipante().val('');
                    base.Control.TxtNombreColaboradorParticipante().val('');
                    base.Control.TxtNombreColaboradorInvitadoParticipante().val(resultado.Result.Nombres);
                    base.Control.TxtApellidoPaterno().prop('disabled', false);
                    base.Control.TxtApellidoMaterno().prop('disabled', false);
                }
                else {
                    base.Control.DivGetColaboradorInterno().show();
                    base.Control.TxtNombreColaboradorInvitadoParticipante().hide();
                    base.Control.TxtNombreColaboradorInvitadoParticipante().val('');
                    base.Control.TxtNombreColaboradorParticipante().val(resultado.Result.Nombres);
                    base.Control.TxtApellidoPaterno().prop('disabled', true);
                    base.Control.TxtApellidoMaterno().prop('disabled', true);
                }
                base.Control.TxtApellidoPaterno().val(resultado.Result.ApellidoPaterno);
                base.Control.TxtApellidoMaterno().val(resultado.Result.ApellidoMaterno);
                base.Control.SlcTipoDocumento().val(resultado.Result.CodigoTipoDocumento);
                base.Control.TxtNumeroDocumento().val(resultado.Result.NumeroDocumento);
   
                base.Control.SlcTipoCargoEmpresa().val(resultado.Result.CodigoTipoCargoEmpresa);
                base.Control.FlsParticipante().prop('disabled', true);
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
                base.Event.BtnLimpiarParticipanteClick();
            }
        },

        /*Tab: Anexo Archivo*/
        AjaxEliminarIntegradorTipoRegistroAnexoArchivoSuccess: function (resultado) {
            if (resultado.Result >= 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
                base.Event.BtnBuscarOtrosRegistrosAnexoArchivoClick();
            }
            else {
                base.Control.Mensaje.Warning({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        /*Tab: Anexo Foto*/
        AjaxEliminarIntegradorTipoRegistroAnexoFotoSuccess: function (resultado) {
            if (resultado.Result >= 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
                base.Event.BtnBuscarOtrosRegistrosAnexoFotoClick();
            }
            else {
                base.Control.Mensaje.Warning({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },

    };
    base.Function = {
        CrearGridHallazgo: function () {
            var columns = new Array();
            //var botones = new Array();
            //var listaBotones = new Array();
            //if (base.Control.FormularioIngresoOtrosRegistrosModel.OtrosRegistros.IndicadorEsLectura != true)
            //{
            //    listaBotones.push(
            //        {
            //            Accion: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Editar,
            //            type: Pe.GMD.UI.Web.Components.GridAction.Edit,
            //            event: { on: 'click', callBack: base.Event.BtnGridEditHallazgoClick }
            //        },
            //        {
            //            Accion: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Eliminar,
            //            type: Pe.GMD.UI.Web.Components.GridAction.Delete,
            //            event: { on: 'click', callBack: base.Event.BtnGridDeleteHallazgoClick }
            //        }
            //    );
            //    botones = Pe.GMD.UI.Web.Components.Util.PermisosBotonesGrilla(base.Control.FormularioIngresoOtrosRegistrosModel.ControlPermisos, listaBotones);
            //    botones.push(
            //      {
            //          Accion: '',
            //          type: Pe.GMD.UI.Web.Components.GridAction.VerSeguimiento,
            //          event: { on: 'click', callBack: base.Event.BtnGridSeleccionarTabAccionesClick }
            //      }
            //     );
            //}
            //botones.push(
            //      {
            //          Accion: '',
            //          type: Pe.GMD.UI.Web.Components.GridAction.Revisar,
            //          event: { on: 'click', callBack: base.Event.BtnGridRevisarHallazgoClick }
            //      }
            // );

            columns.push({
                data: 'DescripcionCorta',
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.GridDescripcionCorta,
                width: "28%"
            });
            columns.push({
                data: 'DescripcionLarga',
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.GridDescripcionLarga,
                width: "45%"
            });
            columns.push({
                data: 'DescripcionNivelRiesgo',
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.GridNivelRiesgo,
                width: "5%"
            });

            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                //actionButtons: botones
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Revisar, event: { on: 'click', callBack: base.Event.BtnGridRevisarHallazgoClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.VerSeguimiento, event: { on: 'click', callBack: base.Event.BtnGridSeleccionarTabAccionesClick }, toolTip: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaIngresarAcciones },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditHallazgoClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteHallazgoClick } }
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
        CrearGridAccion: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.GridNumeroAccion,
                width: "10%"
            });
            columns.push({
                data: 'NombreColaboradorPlanteaAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.GridPlanteadaPor,
                width: "15%"
            });
            columns.push({
                data: 'FechaAccionPlanteadaString',
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.GridFechaPlanteada,
                width: "5%"
            });
            columns.push({
                data: 'NombreColaboradorResponsable',
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.GridResponsableEjecucion,
                width: "15%"
            });
            columns.push({
                data: 'FechaVencimientoString',
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.GridFechaVencimiento,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionCorta',
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.GridDescripcionCortaAccion,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionCortaHallazgo',
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.GridDescripcionCortaHallazgo,
                width: "15%"
            });
            columns.push({
                data: 'DescripcionEstadoAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.GridEstadoAccion,
                width: "5%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "5%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Revisar, event: { on: 'click', callBack: base.Event.BtnGridRevisarAccionClick }, toolTip: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaVerAccion },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditAccionClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteAccionClick } }
                ]
            });
            base.Control.GrdResultadoAccion = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoAccion',
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
        CrearGridParticipante: function () {
            var columns = new Array();
            columns.push({
                data: 'DescripcionTipoParticipante',
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.GridTipoParticipante,
                width: "15%"
            });

            columns.push({
                data: 'NombreCompletoColaboradorParticipante',
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.GridApellidosNombres,
                width: "30%"
            });
            columns.push({
                data: 'DescripcionTipoDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.GridTipoDocumento,
                width: "10%"
            });
            columns.push({
                data: 'NumeroDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.GridNumeroDocumento,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionTipoCargoEmpresa',
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.GridCargoEmpresa,
                width: "15%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Revisar, event: { on: 'click', callBack: base.Event.BtnGridRevisarParticipanteClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditParticipanteClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteParticipanteClick } }
                ]
            });
            base.Control.GrdResultadoParticipante = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoParticipante',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Actions.BuscarOtrosRegistrosParticipante,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        },
        CrearGridOtrosRegistrosAnexoApendice: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.GridItem,
                width: "5%"
            });

            columns.push({
                data: 'DescripcionTipoApendice',
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.GridTipo,
                width: "20%"
            });

            columns.push({
                data: 'Nombre',
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.GridNombreArchivo,
                width: "30%"
            });

            columns.push({
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.GridDescripcion,
                width: "30%"
            });

            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.GridDescargar,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Adjunto, event: { on: 'click', callBack: base.Event.BtnGridDownloadIntegradorTipoRegistroAnexoArchivoClick } }
                ]
            });

            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditIntegradorTipoRegistroAnexoArchivoClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.BtnGridDeleteValidate, event: { on: 'click', callBack: base.Event.BtnGridDeleteIntegradorTipoRegistroAnexoArchivoClick } }
                ]
            });

            base.Control.GrdResultadoOtrosRegistrosAnexoApendice = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoOtrosRegistrosAnexoApendice',
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
        CrearGridOtrosRegistrosAnexoFoto: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.GridItem,
                width: "5%"
            });

            columns.push({
                data: 'Nombre',
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.GridNombreArchivo,
                width: "30%"
            });

            columns.push({
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.GridDescripcion,
                width: "30%"
            });

            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Resource.GridVistaPreviaFoto,
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
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditIntegradorTipoRegistroAnexoFotoClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.BtnGridDeleteValidate, event: { on: 'click', callBack: base.Event.BtnGridDeleteIntegradorTipoRegistroAnexoFotoClick } }
                ]
            });

            base.Control.GrdResultadoOtrosRegistrosAnexoFoto = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoOtrosRegistrosAnexoFoto',
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
        ValidacionExtraFormularioParticipante: function () {
            var validaciones = new Array();
            validaciones.push({
                Event: function () {
                    var resultado = true;
                    if (base.Control.SlcTipoParticipante().val() != base.Control.CodigoParticipanteInvitado &&
                        (base.Control.TxtNombreColaboradorParticipante().val() == '' ||
                        base.Control.TxtNombreColaboradorParticipante().val() == null)) {
                        resultado = false;
                    }
                    if (resultado) {
                        base.Control.TxtNombreColaboradorParticipante().removeClass("hasError");
                    } else {
                        base.Control.TxtNombreColaboradorParticipante().attr('class', 'form-control hasError');
                    }
                    return resultado;
                },
                codeMessage: "ValidarColaboradorParticipante"
            });
            return validaciones;
        },
    };
    base.Ajax = {
        /*Tab: General*/
        AjaxSalirOtrosRegistrosGeneral: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Actions.SalirOtrosRegistros,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxSalirOtrosRegistrosGeneralSuccess
        }),
        AjaxAnularOtrosRegistrosGeneral: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Actions.AnularOtrosRegistros,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxAnularOtrosRegistrosGeneralSuccess
        }),
        AjaxGrabarOtrosRegistrosGeneral: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Actions.RegistrarOtrosRegistros,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxGrabarOtrosRegistrosGeneralSuccess
        }),

        /*Tab: Hallazgo*/
        AjaxGrabarHallazgo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Actions.RegistrarOtrosRegistrosHallazgo,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxGrabarHallazgoSuccess
        }),
        AjaxEditHallazgo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.ObtenerHallazgoPorCodigo,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEditHallazgoSuccess
        }),
        AjaxRevisarHallazgo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.ObtenerHallazgoPorCodigo,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRevisarHallazgoSuccess
        }),
        AjaxEliminarHallazgo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Actions.EliminarOtrosRegistrosHallazgo,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarHallazgoSuccess
        }),
        AjaxSalirHallazgoOtrosRegistros: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Actions.SalirHallazgoOtrosRegistros,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxSalirHallazgoOtrosRegistrosSuccess
        }),
        /*Tab: Acciones*/
        AjaxEliminarAccion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.EliminarRecordAccion,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarAccionSuccess
        }),
        AjaxRevisarHallazgoAccion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.ObtenerHallazgoPorCodigo,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRevisarHallazgoAccionSuccess
        }),
        /*Tab: Participante*/
        AjaxGrabarParticipante: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Actions.RegistrarOtrosRegistrosParticipante,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxGrabarParticipanteSuccess
        }),
        AjaxEditParticipante: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Actions.ObtenerOtrosRegistrosParticipantePorCodigo,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEditParticipanteSuccess
        }),
        AjaxRevisarParticipante: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Actions.ObtenerOtrosRegistrosParticipantePorCodigo,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRevisarParticipanteSuccess
        }),
        AjaxEliminarParticipante: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.OtrosRegistros.IngresoOtrosRegistros.Index.Actions.EliminarOtrosRegistrosParticipante,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarParticipanteSuccess
        }),

        /*Tab: Anexo*/
        AjaxEliminarIntegradorTipoRegistroAnexoArchivo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.EliminarIntegradorTipoRegistroAnexo,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarIntegradorTipoRegistroAnexoArchivoSuccess
        }),
        /*Tab: Foto*/
        AjaxEliminarIntegradorTipoRegistroAnexoFoto: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.EliminarIntegradorTipoRegistroAnexo,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarIntegradorTipoRegistroAnexoFotoSuccess
        }),




    };
};
