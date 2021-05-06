/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 02112017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoVisita.FormularioIngresoVisita');
Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoVisita.FormularioIngresoVisita.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        'use strict'
        Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
        base.Control.FormularioIngresoVisitaModel = Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoVisita.FormularioIngresoVisita.Models.IngresoVisitaModel;
        /*Tab: Información General*/
        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmInformacionGeneral(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraFrmInformacionGeneral()
        });


        base.Control.BtnRegresarBandejaVisitaGerencial().off('click');
        base.Control.BtnRegresarBandejaVisitaGerencial().on('click', base.Event.BtnRegresarBandejaVisitaGerencialClick);
        base.Control.BtnAnularInformacionGeneral().off('click');
        base.Control.BtnAnularInformacionGeneral().on('click', base.Event.BtnAnularVisitaGerencialGeneralClick);
        base.Control.BtnGuardarInformacionGeneral().off('click');
        base.Control.BtnGuardarInformacionGeneral().on('click', base.Event.BtnGrabarVisitaGerencialGeneralClick);
        base.Control.BtnBuscarColaboradorQueReporta().off('click');
        base.Control.BtnBuscarColaboradorQueReporta().on('click', base.Event.BtnBuscarColaboradorQueReportaClick);
        base.Control.BtnBuscarColaboradorVisitante().off('click');
        base.Control.BtnBuscarColaboradorVisitante().on('click', base.Event.BtnBuscarColaboradorVisitanteClick);
        base.Control.BtnBuscarColaboradorGerenteProyecto().off('click');
        base.Control.BtnBuscarColaboradorGerenteProyecto().on('click', base.Event.BtnBuscarColaboradorGerenteProyectoClick);
        base.Control.BtnBuscarColaboradorJefeSSOMAProyecto().off('click');
        base.Control.BtnBuscarColaboradorJefeSSOMAProyecto().on('click', base.Event.BtnBuscarColaboradorJefeSSOMAProyectoClick);
        base.Control.BtnLimpiarHallazgo().off('click');
        base.Control.BtnLimpiarHallazgo().on('click', base.Event.BtnLimpiarIngresoHallazgoClick);
        if (opts != null && opts.AceptarSuccess != null && opts.AceptarSuccess)
            base.Event.AceptarSuccess = opts.AceptarSuccess;
        base.Control.DlgFormularioBuscarColaboradorQueReporta = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.AjaxSuccess.BuscarColaboradorQueReportaSuccess
        });
        base.Control.DlgFormularioBuscarColaboradorVisitante = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.AjaxSuccess.BuscarColaboradorVisitanteSuccess
        });
        base.Control.DlgFormularioBuscarColaboradorGerenteProyecto = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.AjaxSuccess.BuscarColaboradorGerenteProyectoSuccess
        });
        base.Control.DlgFormularioBuscarColaboradorJefeSSOMAProyecto = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.AjaxSuccess.BuscarColaboradorJefeSSOMAProyectoSuccess
        });

        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaVisitaGerencialDesde(),
            inputTo: base.Control.DtpFechaVisitaGerencialHasta(),
            is12HourFormat: false
        });
        base.Control.DtpFechaVisitaGerencialHasta().val(base.Control.FormularioIngresoVisitaModel.VisitaGerencial.FechaVisitaHastaString);
        
        /*Tab: Hallazgo*/
        base.Control.BtnSalirHallazgo().off('click');
        base.Control.BtnSalirHallazgo().on('click', base.Event.BtnSalirHallazgoClick);
        base.Control.BtnGuardarHallazgo().off('click');
        base.Control.BtnGuardarHallazgo().on('click', base.Event.BtnGrabarHallazgoClick);
        base.Control.ValidadorHallazgo = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmHallazgo(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
        });
        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaIngresoHallazgo(),
            minDateFrom: new Date(1900, 1, 1)
        });


        /*Tab: Anexos*/
        base.Control.DlgFormularioVisitaGerencialAnexoApendice = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioIntegradorApendiceArchivo.Controller({
            GrabarRecordAnexoApendiceSuccess: base.Event.BtnBuscarVisitaGerencialAnexoArchivoClick
        });

        base.Control.BtnAgregarVisitaGerencialAnexoArchivo().off('click');
        base.Control.BtnAgregarVisitaGerencialAnexoArchivo().on('click', base.Event.BtnAgregarVisitaGerencialAnexoArchivoClick);
        
        /*Tab: Fotos*/
        base.Control.DlgFormularioVisitaGerencialAnexoFoto = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioIntegradorApendiceFoto.Controller({
            GrabarRecordAnexoFotoSuccess: base.Event.BtnBuscarVisitaGerencialAnexoFotoClick
        });

        base.Control.DlgFormularioVistaPreviaFoto = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioVistaPreviaFotoGenerico.Controller({
        });
        base.Control.BtnAgregarVisitaGerencialAnexoFoto().off('click');
        base.Control.BtnAgregarVisitaGerencialAnexoFoto().on('click', base.Event.BtnAgregarVisitaGerencialAnexoFotoClick);
            
        //Seleccionar Tab
        $('#cartTabsFormularioIngresoVisita').on('shown.bs.tab', function (e) {
            var target = $(e.target).attr("href");
            if (target == "#tabHallazgo") {
                if (base.Control.FormularioIngresoVisitaModel.VisitaGerencial.CodigoVisitaGerencial != null) {
                    base.Event.BtnBuscarHallazgoClick();
                }
                else {
                    base.Control.BtnGuardarHallazgo().hide();
                    base.Control.BtnSalirHallazgo().hide();
                }
            }
            if (target == "#tabAnexo") {
                base.Event.BtnBuscarVisitaGerencialAnexoArchivoClick();
            }

            if (target == "#tabFoto") {
                base.Event.BtnBuscarVisitaGerencialAnexoFotoClick();
            }
        });
    };

    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        Validador: null,
        FormularioIngresoVisitaModel: null,
        TxtNumeroRegistroVisitaGerencial: function () { return $('#txtNumeroRegistroVisitaGerencial'); },
        BtnRegresarBandejaVisitaGerencial: function () { return $('#btnRegresarBandejaVisitaGerencial'); },
        
        /*Tab: Información General*/
        FrmInformacionGeneral: function () { return $('#frmInformacionGeneral'); },
        DlgFormularioBuscarColaboradorQueReporta: null,
        DlgFormularioBuscarColaboradorVisitante: null,
        DlgFormularioBuscarColaboradorGerenteProyecto: null,
        DlgFormularioBuscarColaboradorJefeSSOMAProyecto: null,
        FrmInformacionGeneral: function () { return $('#frmInformacionGeneral'); },
        BtnAnularInformacionGeneral: function () { return $('#btnAnularInformacionGeneral'); },
        BtnGuardarInformacionGeneral: function () { return $('#btnGuardarInformacionGeneral'); },
        HdnCodigoColaboradorQueReporta: function () { return $('#hdnCodigoColaboradorQueReporta'); },
        TxtNombreColaboradorQueReporta: function () { return $('#txtNombreColaboradorQueReporta'); },
        BtnBuscarColaboradorQueReporta: function () { return $('#btnBuscarColaboradorQueReporta'); },
        SlcEstadoVisita: function () { return $('#slcEstadoVisita'); },
        HdnCodigoColaboradorVisitante: function () { return $('#hdnCodigoColaboradorVisitante'); },
        TxtNombreColaboradorVisitante: function () { return $('#txtNombreColaboradorVisitante'); },
        BtnBuscarColaboradorVisitante: function () { return $('#btnBuscarColaboradorVisitante'); },
        DtpFechaVisitaGerencialDesde: function () { return $('#dtpFechaVisitaGerencialDesde'); },
        DtpFechaVisitaGerencialHasta: function () { return $('#dtpFechaVisitaGerencialHasta'); },
        SlcProyecto: function () { return $('#slcProyecto'); },
        HdnCodigoColaboradorGerenteProyecto: function () { return $('#hdnCodigoColaboradorGerenteProyecto'); },
        TxtNombreColaboradorGerenteProyecto: function () { return $('#txtNombreColaboradorGerenteProyecto'); },
        BtnBuscarColaboradorGerenteProyecto: function () { return $('#btnBuscarColaboradorGerenteProyecto'); },
        HdnCodigoColaboradorJefeSSOMAProyecto: function () { return $('#hdnCodigoColaboradorJefeSSOMAProyecto'); },
        TxtNombreColaboradorJefeSSOMAProyecto: function () { return $('#txtNombreColaboradorJefeSSOMAProyecto'); },
        BtnBuscarColaboradorJefeSSOMAProyecto: function () { return $('#btnBuscarColaboradorJefeSSOMAProyecto'); },
        SlcDeseaIngresarInformacion: function () { return $('#slcDeseaIngresarInformacion'); },
        TxtTituloRegistro: function () { return $('#txtTituloRegistro'); },
        
        /*Tab: Hallazgo*/
        ValidadorHallazgo: null,
        CodigoHallazgo: null,
        GrdResultadoHallazgo: null,
        FrmHallazgo: function () { return $('#frmHallazgo'); },
        FlsHallazgo: function () { return $('#flsHallazgo'); },
        DtpFechaIngresoHallazgo: function () { return $('#dtpFechaIngresoHallazgo'); },
        SlcLugarTrabajo: function () { return $('#slcLugarTrabajo'); },
        SlcNivelRiesgo: function () { return $('#slcNivelRiesgo'); },
        TxtDescripcionCortaHallazgo: function () { return $('#txtDescripcionCortaHallazgo'); },
        TxtDescripcionLargaHallazgo: function () { return $('#txtDescripcionLargaHallazgo'); },       
        BtnSalirHallazgo: function () { return $('#btnSalirHallazgo'); },
        BtnLimpiarHallazgo: function () { return $('#btnLimpiarHallazgo'); },
        BtnGuardarHallazgo: function () { return $('#btnGuardarHallazgo'); },

        /*Tab: Anexos*/
        DlgFormularioVisitaGerencialAnexoApendice: null,
        BtnAgregarVisitaGerencialAnexoArchivo: function () { return $('#btnAgregarVisitaGerencialAnexoArchivo'); },
        GrdResultadoVisitaGerencialAnexoApendice: null,

        /*Tab: Fotos*/
        DlgFormularioVisitaGerencialAnexoFoto: null,
        BtnAgregarVisitaGerencialAnexoFoto: function () { return $('#btnAgregarVisitaGerencialAnexoFoto'); },
        GrdResultadoVisitaGerencialAnexoFoto: null,
        DlgFormularioVistaPreviaFoto: null,
 
        /*Tab: Acciones*/


    };

    base.Event = {
        /*Tab: Información General*/
        BtnRegresarBandejaVisitaGerencialClick: function () {
            var filtro = {
            };
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoVisita.FormularioIngresoVisita.Actions.BandejaVisitaGerencial, filtro);
        },
        BtnBuscarColaboradorQueReportaClick: function () {
            var filtro = {
            }
            base.Control.DlgFormularioBuscarColaboradorQueReporta.Show(false, [], filtro);
        },
        BtnBuscarColaboradorVisitanteClick: function () {
            var filtro = {
            }
            base.Control.DlgFormularioBuscarColaboradorVisitante.Show(false, [], filtro);
        },
        BtnBuscarColaboradorGerenteProyectoClick: function () {
            var filtro = {
            }
            base.Control.DlgFormularioBuscarColaboradorGerenteProyecto.Show(false, [], filtro);
        },
        BtnBuscarColaboradorJefeSSOMAProyectoClick: function () {
            var filtro = {
            }
            base.Control.DlgFormularioBuscarColaboradorJefeSSOMAProyecto.Show(false, [], filtro);
        },
        BtnGrabarVisitaGerencialGeneralClick: function () {
            'use strict'
            if (base.Control.Validador.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    indicadorModal: false,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarVisitaGerencialGeneral.data = {
                            CodigoVisitaGerencial: base.Control.FormularioIngresoVisitaModel.VisitaGerencial.CodigoVisitaGerencial,
                            NumeroVisitaGerencial: base.Control.TxtNumeroRegistroVisitaGerencial().val(),
                            CodigoColaboradorReporta: base.Control.HdnCodigoColaboradorQueReporta().val(),
                            CodigoEstadoDocumento: base.Control.SlcEstadoVisita().val(),
                            CodigoColaboradorVisitante: base.Control.HdnCodigoColaboradorVisitante().val(),
                            FechaVisitaDesde: base.Control.DtpFechaVisitaGerencialDesde().val(),
                            FechaVisitaHasta: base.Control.DtpFechaVisitaGerencialHasta().val(),
                            CodigoProyecto: base.Control.SlcProyecto().val(),
                            CodigoColaboradorGerente: base.Control.HdnCodigoColaboradorGerenteProyecto().val(),
                            CodigoColaboradorJefe: base.Control.HdnCodigoColaboradorJefeSSOMAProyecto().val(),
                            TituloRegistro: base.Control.TxtTituloRegistro().val(),
                            CodigoIngresarInformacion: base.Control.SlcDeseaIngresarInformacion().val(),
                        };
                        base.Ajax.AjaxGrabarVisitaGerencialGeneral.submit();
                    }
                });
            }
            else {
                $("#frmInformacionGeneralSummaryErrorMessage").empty();
                $("#frmInformacionGeneralSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnAnularVisitaGerencialGeneralClick: function () {
            'use strict'
            base.Control.Mensaje.Confirmation({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                indicadorModal: false,
                onAccept: function () {
                    base.Ajax.AjaxAnularVisitaGerencialGeneral.data = {
                        CodigoVisitaGerencial: base.Control.FormularioIngresoVisitaModel.VisitaGerencial.CodigoVisitaGerencial,
                        CodigoIntegradorTipoRegistro: base.Control.FormularioIngresoVisitaModel.VisitaGerencial.CodigoIntegradorTipoRegistro
                    };
                    base.Ajax.AjaxAnularVisitaGerencialGeneral.submit();
                }
            });
        },
        /*Tab: Hallazgo*/
        BtnSalirHallazgoClick: function () {
            'use strict'
            base.Control.Mensaje.Confirmation({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                message: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoVisita.FormularioIngresoVisita.Resource.ConfirmacionSalirHallazgo,
                indicadorModal: false,
                onAccept: function () {
                    base.Ajax.AjaxSalirHallazgoVisitaGerencial.data = {
                        CodigoVisitaGerencial: base.Control.FormularioIngresoVisitaModel.VisitaGerencial.CodigoVisitaGerencial,
                        CodigoProyecto: base.Control.SlcProyecto().val()
                    };
                    base.Ajax.AjaxSalirHallazgoVisitaGerencial.submit();
                },
                onCancelDialog: function () {
                    base.Event.BtnRegresarBandejaVisitaGerencialClick();
                }
            });
        },
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
                            CodigoIntegradorTipoRegistro: base.Control.FormularioIngresoVisitaModel.VisitaGerencial.CodigoIntegradorTipoRegistro,
                            FechaIngresoHallazgo: base.Control.DtpFechaIngresoHallazgo().val(),
                            CodigoLugarTrabajo: base.Control.SlcLugarTrabajo().val(),
                            CodigoNivelRiesgo: base.Control.SlcNivelRiesgo().val(),
                            DescripcionCorta: base.Control.TxtDescripcionCortaHallazgo().val(),
                            DescripcionLarga: base.Control.TxtDescripcionLargaHallazgo().val()
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
                CodigoIntegradorTipoRegistro: base.Control.FormularioIngresoVisitaModel.VisitaGerencial.CodigoIntegradorTipoRegistro,
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
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarHallazgo.data = {
                        CodigoHallazgo: data.CodigoHallazgo,                    
                    };
                    base.Ajax.AjaxEliminarHallazgo.submit();
                }
            });
        },
        BtnLimpiarIngresoHallazgoClick: function () {
            base.Control.CodigoHallazgo = null;
            base.Control.DtpFechaIngresoHallazgo().val('');
            base.Control.SlcLugarTrabajo().val('');
            base.Control.SlcNivelRiesgo().val('');
            base.Control.TxtDescripcionCortaHallazgo().val('');
            base.Control.TxtDescripcionLargaHallazgo().val('');
        },
        HabilitarBotonesIngresoHallazgoClick: function () {
            base.Control.FlsHallazgo().prop('disabled', true);
            base.Control.BtnGuardarHallazgo().hide();
            base.Control.BtnSalirHallazgo().hide();
        },
        DeshabilitarBotonesIngresoHallazgoClick: function () {
            base.Control.FlsHallazgo().prop('disabled', false);
            base.Control.BtnGuardarHallazgo().show();
            base.Control.BtnSalirHallazgo().show();
        },

        /*Tab: Anexos*/
        BtnBuscarVisitaGerencialAnexoArchivoClick: function () {
        'use strict'
        var filtro = {
            CodigoTipoAnexo: Pe.ElectroPeru.SGI.Presentacion.Core.Constante.DatosConstantes.ParametrosGenerales.CodigoTipoAnexoAdjunto,
            CodigoIntegradorTipoRegistro: base.Control.FormularioIngresoVisitaModel.VisitaGerencial.CodigoIntegradorTipoRegistro,
        };
        $("#divGrdResultadoVisitaGerencialAnexoApendice").empty();
        base.Function.CrearGridVisitaGerencialAnexoApendice();
        base.Control.GrdResultadoVisitaGerencialAnexoApendice.Load(filtro);

        },
        BtnAgregarVisitaGerencialAnexoArchivoClick: function () {
            if (base.Control.FormularioIngresoVisitaModel.VisitaGerencial.CodigoVisitaGerencial != null) {
                base.Control.DlgFormularioVisitaGerencialAnexoApendice.Show({
                    CodigoIntegradorTipoRegistro: base.Control.FormularioIngresoVisitaModel.VisitaGerencial.CodigoIntegradorTipoRegistro,                    
                    CodigoTipoAnexoIntegrador: Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.IngresoVisita.FormularioIngresoVisita.DatosConstantes.CodigoTiposAnexosVisitaGerencial
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
            base.Control.DlgFormularioVisitaGerencialAnexoApendice.Show({
                CodigoIntegradorTipoRegistroAnexo: data.CodigoIntegradorTipoRegistroAnexo,
                CodigoTipoAnexoIntegrador: Pe.ElectroPeru.SGI.Presentacion.ComiteSSoma.IngresoVisita.FormularioIngresoVisita.DatosConstantes.CodigoTiposAnexosVisitaGerencial,
                CodigoIntegradorTipoRegistro: data.CodigoIntegradorTipoRegistro
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
        BtnBuscarVisitaGerencialAnexoFotoClick: function () {
            'use strict'
            var filtro = {
                CodigoTipoAnexo: Pe.ElectroPeru.SGI.Presentacion.Core.Constante.DatosConstantes.ParametrosGenerales.CodigoTipoAnexoFoto,
                CodigoIntegradorTipoRegistro: base.Control.FormularioIngresoVisitaModel.VisitaGerencial.CodigoIntegradorTipoRegistro,
            };
            $("#divGrdResultadoVisitaGerencialAnexoFoto").empty();
            base.Function.CrearGridVisitaGerencialAnexoFoto();
            base.Control.GrdResultadoVisitaGerencialAnexoFoto.Load(filtro);
        },
        BtnAgregarVisitaGerencialAnexoFotoClick: function () {
            if (base.Control.FormularioIngresoVisitaModel.VisitaGerencial.CodigoVisitaGerencial != null) {
                base.Control.DlgFormularioVisitaGerencialAnexoFoto.Show({
                    CodigoIntegradorTipoRegistroAnexo: null,
                    CodigoIntegradorTipoRegistro: base.Control.FormularioIngresoVisitaModel.VisitaGerencial.CodigoIntegradorTipoRegistro,
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
            base.Control.DlgFormularioVisitaGerencialAnexoFoto.Show({
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
        BuscarColaboradorQueReportaSuccess: function (colaboradorSeleccionado) {

            if (colaboradorSeleccionado.length > 0) {
                base.Control.HdnCodigoColaboradorQueReporta().val(colaboradorSeleccionado[0].CodigoColaborador);
                base.Control.TxtNombreColaboradorQueReporta().val(colaboradorSeleccionado[0].Nombres + ' ' + colaboradorSeleccionado[0].ApellidoPaterno + ' ' + colaboradorSeleccionado[0].ApellidoMaterno);
            }
            else {
                base.Control.HdnCodigoColaboradorQueReporta().val(null);
                base.Control.TxtNombreColaboradorQueReporta().val('');
            }
        },
        BuscarColaboradorVisitanteSuccess: function (colaboradorSeleccionado) {
            if (colaboradorSeleccionado.length > 0) {
                base.Control.HdnCodigoColaboradorVisitante().val(colaboradorSeleccionado[0].CodigoColaborador);
                base.Control.TxtNombreColaboradorVisitante().val(colaboradorSeleccionado[0].Nombres + ' ' + colaboradorSeleccionado[0].ApellidoPaterno + ' ' + colaboradorSeleccionado[0].ApellidoMaterno);
            }
            else {
                base.Control.HdnCodigoColaboradorVisitante().val(null);
                base.Control.TxtNombreColaboradorVisitante().val('');
            }
        },
        BuscarColaboradorGerenteProyectoSuccess: function (colaboradorSeleccionado) {
            if (colaboradorSeleccionado.length > 0) {
                base.Control.HdnCodigoColaboradorGerenteProyecto().val(colaboradorSeleccionado[0].CodigoColaborador);
                base.Control.TxtNombreColaboradorGerenteProyecto().val(colaboradorSeleccionado[0].Nombres + ' ' + colaboradorSeleccionado[0].ApellidoPaterno + ' ' + colaboradorSeleccionado[0].ApellidoMaterno);
            }
            else {
                base.Control.HdnCodigoColaboradorGerenteProyecto().val(null);
                base.Control.TxtNombreColaboradorGerenteProyecto().val('');
            }
        },
        BuscarColaboradorJefeSSOMAProyectoSuccess: function (colaboradorSeleccionado) {
            if (colaboradorSeleccionado.length > 0) {
                base.Control.HdnCodigoColaboradorJefeSSOMAProyecto().val(colaboradorSeleccionado[0].CodigoColaborador);
                base.Control.TxtNombreColaboradorJefeSSOMAProyecto().val(colaboradorSeleccionado[0].Nombres + ' ' + colaboradorSeleccionado[0].ApellidoPaterno + ' ' + colaboradorSeleccionado[0].ApellidoMaterno);
            }
            else {
                base.Control.HdnCodigoColaboradorJefeSSOMAProyecto().val(null);
                base.Control.TxtNombreColaboradorJefeSSOMAProyecto().val('');
            }
        },
        AjaxGrabarVisitaGerencialGeneralSuccess: function (resultado) {
            if (resultado.IsSuccess == true) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                if (resultado.Result != null) {
                    base.Control.TxtNumeroRegistroVisitaGerencial().val(resultado.Result.NumeroVisitaGerencial);
                    base.Control.FormularioIngresoVisitaModel.VisitaGerencial.CodigoVisitaGerencial = resultado.Result.CodigoVisitaGerencial;
                    base.Control.FormularioIngresoVisitaModel.VisitaGerencial.CodigoIntegradorTipoRegistro = resultado.Result.CodigoIntegradorTipoRegistro;
                    base.Control.BtnGuardarHallazgo().show();
                }
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxAnularVisitaGerencialGeneralSuccess: function (resultado) {
            if (resultado.Result == 1) {
                base.Control.BtnAnularInformacionGeneral().remove();
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });               
            }
            else if (resultado.Result == 2) {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoVisita.FormularioIngresoVisita.Resource.MsjAnulaVisitaGerencialHallazgo });
            }            
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        /*Tab: Hallazgo*/
        AjaxSalirHallazgoVisitaGerencialSuccess: function (resultado) {
            if (resultado.IsSuccess == true) {
                if (resultado.Result == 1) {
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                    });
                    base.Event.BtnRegresarBandejaVisitaGerencialClick();
                }
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
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
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoVisita.FormularioIngresoVisita.Resource.MsjNoPuedeActualizarHallazgo });
            }
            else if (resultado.Result == 3) {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.MsjRegitrarEstadoDocumento });
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
            else if (resultado.Result == 2) {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoVisita.FormularioIngresoVisita.Resource.MsjAnulaHallazgoAccionAsociada });
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
                base.Control.DtpFechaIngresoHallazgo().val(resultado.Result.FechaIngresoHallazgoString);
                base.Control.SlcLugarTrabajo().val(resultado.Result.CodigoLugarTrabajo);
                base.Control.SlcNivelRiesgo().val(resultado.Result.CodigoNivelRiesgo);
                base.Control.TxtDescripcionCortaHallazgo().val(resultado.Result.DescripcionCorta);
                base.Control.TxtDescripcionLargaHallazgo().val(resultado.Result.DescripcionLarga);
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
                base.Control.DtpFechaIngresoHallazgo().val(resultado.Result.FechaIngresoHallazgoString);
                base.Control.SlcLugarTrabajo().val(resultado.Result.CodigoLugarTrabajo);
                base.Control.SlcNivelRiesgo().val(resultado.Result.CodigoNivelRiesgo);
                base.Control.TxtDescripcionCortaHallazgo().val(resultado.Result.DescripcionCorta);
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

        /*Tab: Anexo Archivo*/       
        AjaxEliminarIntegradorTipoRegistroAnexoArchivoSuccess: function (resultado) {
                if (resultado.Result >= 1) {
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                    });
                    base.Event.BtnBuscarVisitaGerencialAnexoArchivoClick();
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
                base.Event.BtnBuscarVisitaGerencialAnexoFotoClick();
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
            columns.push({
                data: 'FechaIngresoHallazgoString',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoVisita.FormularioIngresoVisita.Resource.GridFechaHallazgo,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionLugarTrabajo',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoVisita.FormularioIngresoVisita.Resource.GridLugarTrabajo,
                width: "15%"
            });
            columns.push({
                data: 'DescripcionNivelRiesgo',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoVisita.FormularioIngresoVisita.Resource.GridNivelRiesgo,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionCorta',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoVisita.FormularioIngresoVisita.Resource.GridDescripcionCortaHallazgo,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionLarga',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoVisita.FormularioIngresoVisita.Resource.GridDescripcionLargaHallazgo,
                width: "20%"
            });


            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Revisar, event: { on: 'click', callBack: base.Event.BtnGridRevisarHallazgoClick } },
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
        CrearGridVisitaGerencialAnexoApendice: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoVisita.FormularioIngresoVisita.Resource.GridItem,
                width: "5%"
            });

            columns.push({
                data: 'DescripcionTipoApendice',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoVisita.FormularioIngresoVisita.Resource.GridTipo,
                width: "20%"
            });

            columns.push({
                data: 'Nombre',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoVisita.FormularioIngresoVisita.Resource.GridNombreArchivo,
                width: "30%"
            });

            columns.push({
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoVisita.FormularioIngresoVisita.Resource.GridDescripcion,
                width: "30%"
            });

            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoVisita.FormularioIngresoVisita.Resource.GridDescargar,
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

            base.Control.GrdResultadoVisitaGerencialAnexoApendice = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoVisitaGerencialAnexoApendice',
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
        CrearGridVisitaGerencialAnexoFoto: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoVisita.FormularioIngresoVisita.Resource.GridItem,
                width: "5%"
            });

            columns.push({
                data: 'Nombre',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoVisita.FormularioIngresoVisita.Resource.GridNombreArchivo,
                width: "30%"
            });

            columns.push({
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoVisita.FormularioIngresoVisita.Resource.GridDescripcion,
                width: "30%"
            });

            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoVisita.FormularioIngresoVisita.Resource.GridVistaPreviaFoto,
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

            base.Control.GrdResultadoVisitaGerencialAnexoFoto = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoVisitaGerencialAnexoFoto',
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
        ValidacionExtraFrmInformacionGeneral: function () {
            var validaciones = new Array();

            validaciones.push({
                Event: function () {
                    var resultado = true;
                    if (base.Control.TxtNombreColaboradorQueReporta().val() == '' || base.Control.TxtNombreColaboradorQueReporta().val() == null) {
                        resultado = false;
                    }
                    if (resultado) {
                        base.Control.TxtNombreColaboradorQueReporta().removeClass("hasError");
                    } else {
                        base.Control.TxtNombreColaboradorQueReporta().attr('class', 'form-control hasError');
                    }
                    return resultado;
                },
                codeMessage: "ValidarColaboradorQueReporta"
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.TxtNombreColaboradorVisitante().val() == '' || base.Control.TxtNombreColaboradorVisitante().val() == null) {
                        resultado = false;
                    }
                    if (resultado) {
                        base.Control.TxtNombreColaboradorVisitante().removeClass("hasError");
                    } else {
                        base.Control.TxtNombreColaboradorVisitante().attr('class', 'form-control hasError');
                    }
                    return resultado;
                },
                codeMessage: "ValidarColaboradorVisitante"
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.TxtNombreColaboradorGerenteProyecto().val() == '' || base.Control.TxtNombreColaboradorGerenteProyecto().val() == null) {
                        resultado = false;
                    }
                    if (resultado) {
                        base.Control.TxtNombreColaboradorGerenteProyecto().removeClass("hasError");
                    } else {
                        base.Control.TxtNombreColaboradorGerenteProyecto().attr('class', 'form-control hasError');
                    }
                    return resultado;
                },
                codeMessage: "ValidarColaboradorGerenteProyecto"
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.TxtNombreColaboradorJefeSSOMAProyecto().val() == '' || base.Control.TxtNombreColaboradorJefeSSOMAProyecto().val() == null) {
                        resultado = false;
                    }
                    if (resultado) {
                        base.Control.TxtNombreColaboradorJefeSSOMAProyecto().removeClass("hasError");
                    } else {
                        base.Control.TxtNombreColaboradorJefeSSOMAProyecto().attr('class', 'form-control hasError');
                    }
                    return resultado;
                },
                codeMessage: "ValidarColaboradorJefeSSOMAProyecto"
            });

            return validaciones;
        },
    };
    base.Ajax = {
        AjaxGrabarVisitaGerencialGeneral: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoVisita.FormularioIngresoVisita.Actions.RegistrarVisitaGerencialGeneral,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxGrabarVisitaGerencialGeneralSuccess
        }),
        AjaxAnularVisitaGerencialGeneral: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoVisita.FormularioIngresoVisita.Actions.AnularVisitaGerencialGeneral,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxAnularVisitaGerencialGeneralSuccess
        }),
        AjaxSalirHallazgoVisitaGerencial: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoVisita.FormularioIngresoVisita.Actions.SalirHallazgoVisitaGerencial,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxSalirHallazgoVisitaGerencialSuccess
        }),
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
        AjaxRevisarHallazgo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.ObtenerHallazgoPorCodigo,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRevisarHallazgoSuccess
        }),
        AjaxEliminarHallazgo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.EliminarHallazgo,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarHallazgoSuccess
        }),
        AjaxEliminarIntegradorTipoRegistroAnexoArchivo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.EliminarIntegradorTipoRegistroAnexo,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarIntegradorTipoRegistroAnexoArchivoSuccess
        }),      
        AjaxEliminarIntegradorTipoRegistroAnexoFoto: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.EliminarIntegradorTipoRegistroAnexo,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarIntegradorTipoRegistroAnexoFotoSuccess
        }),
    };
};
