/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 19102017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Index');
Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Index.Controller = function () {
    var base = this;

    base.Ini = function () {
        Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
        base.Control.Formulario = Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Models.Formulario;

        base.Control.BtnRegresarBandejaSeguimiento().off('click');
        base.Control.BtnRegresarBandejaSeguimiento().on('click', base.Event.BtnRegresarBandejaSeguimientoClick);
        base.Control.BtnGuardarAtencionMedica().off('click');
        base.Control.BtnGuardarAtencionMedica().on('click', base.Event.BtnGuardarAtencionMedicaClick);
        base.Control.BtnGuardarTraslado().off('click');
        base.Control.BtnGuardarTraslado().on('click', base.Event.BtnGuardarTrasladoClick);        
        base.Control.BtnGuardarTrabajo().off('click');
        base.Control.BtnGuardarTrabajo().on('click', base.Event.BtnGuardarTrabajoClick);        
        base.Control.BtnGuardarLesion().off('click');
        base.Control.BtnGuardarLesion().on('click', base.Event.BtnGuardarLesionClick);        
        base.Control.BtnGuardarResultado().off('click');
        base.Control.BtnGuardarResultado().on('click', base.Event.BtnGuardarResultadoClick);
        base.Control.BtnAgregarEmpresaColaborador().off('click');
        base.Control.BtnAgregarEmpresaColaborador().on('click', base.Event.BtnAgregarEmpresaColaboradorClick);        
        base.Control.BtnAgregarDiagnostico().off('click');
        base.Control.BtnAgregarDiagnostico().on('click', base.Event.BtnAgregarDiagnosticoClick);

        base.Control.BtnAgregarDiasTrabajo().off('click');
        base.Control.BtnAgregarDiasTrabajo().on('click', base.Event.BtnAgregarDiasTrabajoClick);
        base.Control.BtnAgregarDiasLesion1().off('click');
        base.Control.BtnAgregarDiasLesion1().on('click', base.Event.BtnAgregarDiasLesion1Click);
        base.Control.BtnAgregarDiasLesion2().off('click');
        base.Control.BtnAgregarDiasLesion2().on('click', base.Event.BtnAgregarDiasLesion2Click);
        base.Control.BtnAgregarDiasFatalidad().off('click');
        base.Control.BtnAgregarDiasFatalidad().on('click', base.Event.BtnAgregarDiasFatalidadClick);
                
        base.Control.BtnAgregarAnexo().off('click');
        base.Control.BtnAgregarAnexo().on('click', base.Event.BtnAgregarAnexoClick);

        //BtnEnviarCierre
        base.Control.BtnEnviarCierre().off('click');
        base.Control.BtnEnviarCierre().on('click', base.Event.BtnEnviarCierreClick);
        
        base.Control.BtnCancelarAtencionMedica().off('click');
        base.Control.BtnCancelarAtencionMedica().on('click', base.Event.BtnCancelarAtencionMedicaClick);
        base.Control.BtnCancelarTraslado().off('click');
        base.Control.BtnCancelarTraslado().on('click', base.Event.BtnCancelarTrasladoClick);
        base.Control.BtnCancelarTrabajo().off('click'); 
        base.Control.BtnCancelarTrabajo().on('click', base.Event.BtnCancelarTrabajoClick);
        base.Control.BtnCancelarLesion().off('click');
        base.Control.BtnCancelarLesion().on('click', base.Event.BtnCancelarLesionClick);

        base.Control.ValidadorAtencionMedica = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmAtencionMedica(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidadorExtraAtencionMedica()
        });

        base.Control.ValidadorTraslado = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmTraslado(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraTraslado()
        });

        base.Control.ValidadorTrabajo = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmTrabajo(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,        
        });

        base.Control.ValidadorLesion = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmLesion(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
        });

        base.Control.ValidadorResultado = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmResultado(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraResultado()
        });

        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaAtencion(),
            minDateFrom: new Date(1900, 1, 1)
        });
        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaProximaCita(),
            minDateFrom: new Date(1900, 1, 1)
        });
        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaReincorporacion(),
            minDateFrom: new Date(1900, 1, 1)
        });
        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaAltaMedica(),
            minDateFrom: new Date(1900, 1, 1)
        });

        var dateFormat = "dd/mm/yy",
        from = $("#dtpFechaInicioTrabajo")
          .datepicker({ dateFormat: 'dd/mm/yy' })
          .on("change", function () {
              to.datepicker("option", "minDate", getDate(this));
          }),
        to = $("#dtpFechaFinTrabajo").datepicker({ dateFormat: 'dd/mm/yy' })
        .on("change", function () {
            from.datepicker("option", "maxDate", getDate(this));
        });
        
        from2 = $("#dtpFechaInicioLesion")
            .datepicker({
                dateFormat: 'dd/mm/yy'//, onSelect: calcularDiferencia,
            })
            .on("change", function () {
                to2.datepicker("option", "minDate", getDate2(this));
               
                var fecha1 = $('#dtpFechaInicioLesion').datepicker('getDate');
                var fecha2 = $('#dtpFechaFinLesion').datepicker('getDate');
                var diferencia = 0;
                if (fecha1 && fecha2) {
                    diferencia = Math.floor((fecha2.getTime() - fecha1.getTime()) / 86400000); // ms per day
                }
                base.Control.TxtNumeroDiasDescansoMedico().val(diferencia);
            }),
        to2 = $("#dtpFechaFinLesion").datepicker({
            dateFormat: 'dd/mm/yy'//, onSelect: calcularDiferencia,
        })
        .on("change", function () {
            from2.datepicker("option", "maxDate", getDate2(this));

            var fecha1 = $('#dtpFechaInicioLesion').datepicker('getDate');
            var fecha2 = $('#dtpFechaFinLesion').datepicker('getDate');
            var diferencia = 0;
            if (fecha1 && fecha2) {
                diferencia = Math.floor((fecha2.getTime() - fecha1.getTime()) / 86400000); // ms per day
            }
            base.Control.TxtNumeroDiasDescansoMedico().val(diferencia);
        });

        base.Control.SlcRequiereDerivacion().off('change');
        base.Control.SlcRequiereDerivacion().on('change', base.Event.SlcRequiereDerivacionChange);

        base.Control.DlgFormularioColaborador = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.ObtenerEmpresaColaborador
        });

        base.Control.DlgFormularioAnexo = new Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.FormularioAnexo.Controller({
            GrabarAnexoApendiceSuccess: base.Event.LoadBtnGridAnexos
        });

        base.Function.CrearGridPersonasAcompanantes();
        base.Function.CrearGridDiagnosticoMedico();

        base.Function.CrearGridTrabajo();
        base.Function.CrearGridLesionTiempoPerdido1();
        base.Function.CrearGridLesionTiempoPerdido2();
        base.Function.CrearGridFatalidad();
        base.Function.CrearGridAnexoApendice();

        base.Event.BtnLoadDiagnosticoMedicoClick();
        
        $('#cartTabsFormularioAtencion').on('shown.bs.tab', function (e) {
            var target = $(e.target).attr("href");
            if (target == "#tabTraslado") {
                base.Event.BtnLoadPersonasAcompanantesClick();
                if (base.Control.Formulario.AtencionMedica.CodigoAtencionMedica != null) {
                    $('#divtabTraslado').removeClass('hidden');
                }
            }
            if (target == "#tabTrabajo") {
                base.Event.BtnLoadGridTrabajo();
                if (base.Control.Formulario.AtencionMedica.CodigoAtencionMedica != null) {
                    $('#divtabTrabajo').removeClass('hidden');
                }
            }
            if (target == "#tabLesion") {           
                base.Event.BtnLoadGridLesionTiempoPerdido1();
                base.Event.BtnLoadGridLesionTiempoPerdido2();                
                if (base.Control.Formulario.AtencionMedica.CodigoAtencionMedica != null) {
                    $('#divtabLesion').removeClass('hidden');
                }
            }
            if (target == "#tabFatalidad") {
                base.Event.BtnLoadGridFatalidad();
                if (base.Control.Formulario.AtencionMedica.CodigoAtencionMedica != null) {
                    $('#divtabFatalidad').removeClass('hidden');
                }
            }
            if (target == "#tabAnexos") {
                base.Event.BtnLoadGridAnexos();
                if (base.Control.Formulario.AtencionMedica.CodigoAtencionMedica != null) {
                    $('#divtabAnexos').removeClass('hidden');
                }
            }
            if (target == "#tabResultado") {
                if (base.Control.Formulario.AtencionMedica.CodigoAtencionMedica != null) {
                    $('#divtabResultado').removeClass('hidden');
                }
            }
        });


        function getDate(element) {
            var date;
            try {
                date = $.datepicker.parseDate(dateFormat, element.value);
            } catch (error) {
                date = null;
            }
            return date;
        }

        function getDate2(element) {            
            var date;
            try {
                date = $.datepicker.parseDate(dateFormat, element.value);
            } catch (error) {
                date = null;
            }
            return date;
        }


        base.Control.ValidadorTrabajoDias = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FmrTrabajoDias(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
        });
        base.Control.ValidadorLesionDias1 = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FmrLesionDias1(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
        });
        base.Control.ValidadorLesionDias2 = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FmrLesionDias2(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
        });
        base.Control.ValidadorFatalidadDias = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FmrFatalidadDias(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
        });

        base.Control.SlcRequiereSiguienteCita().off('change');
        base.Control.SlcRequiereSiguienteCita().on('change', base.Event.SlcRequiereSiguienteCitaChange);
        base.Control.SlcReincorporoTrabajo().off('change');
        base.Control.SlcReincorporoTrabajo().on('change', base.Event.SlcReincorporoTrabajoChange);

        base.Control.SlcLesionesActuales().off('change');
        base.Control.SlcLesionesActuales().on('change', base.Event.SlcLesionesActualesChange);
        base.Control.SlcLesionesActuales().trigger('change');
        base.Control.SlcTipoLesionTiempoPerdido().off('change');
        base.Control.SlcTipoLesionTiempoPerdido().on('change', base.Event.SlcTipoLesionTiempoPerdidoChange);
    };

    base.Control = {
        BtnRegresarBandejaSeguimiento: function () { return $('#btnRegresarBandejaSeguimiento'); },
        BtnGuardarAtencionMedica: function () { return $('#btnGuardarAtencionMedica'); },
        BtnGuardarTraslado: function () { return $('#btnGuardarTraslado'); },
        BtnGuardarTrabajo: function () { return $('#btnGuardarTrabajo'); },
        BtnGuardarLesion: function () { return $('#btnGuardarLesion'); },
        BtnGuardarResultado: function () { return $('#btnGuardarResultado'); },
        BtnAgregarEmpresaColaborador: function () { return $('#btnAgregarEmpresaColaborador'); },
        BtnAgregarDiagnostico: function () { return $('#btnAgregarDiagnostico'); },
        BtnAgregarAnexo: function () { return $('#btnAgregarAnexo'); },

        BtnCancelarAtencionMedica: function () { return $('#btnCancelarAtencionMedica'); },
        BtnCancelarTraslado: function () { return $('#btnCancelarTraslado'); },
        BtnCancelarTrabajo: function () { return $('#btnCancelarTrabajo'); },
        BtnCancelarLesion: function () { return $('#btnCancelarLesion'); },

        BtnAgregarDiasTrabajo: function () { return $('#btnAgregarDiasTrabajo'); },
        BtnAgregarDiasLesion1: function () { return $('#btnAgregarDiasLesion1'); },
        BtnAgregarDiasLesion2: function () { return $('#btnAgregarDiasLesion2'); },
        BtnAgregarDiasFatalidad: function () { return $('#btnAgregarDiasFatalidad'); },

        BtnEnviarCierre: function () { return $('#btnEnviarCierre'); },

        DtpFechaAtencion: function () { return $('#dtpFechaAtencion'); },
        DtpFechaInicioTrabajo: function () { return $('#dtpFechaInicioTrabajo'); },
        DtpFechaFinTrabajo: function () { return $('#dtpFechaFinTrabajo'); },
        DtpFechaInicioLesion: function () { return $('#dtpFechaInicioLesion'); },
        DtpFechaFinLesion: function () { return $('#dtpFechaFinLesion'); },
        DtpFechaProximaCita: function () { return $('#dtpFechaProximaCita'); },
        DtpFechaReincorporacion: function () { return $('#dtpFechaReincorporacion'); },
        DtpFechaAltaMedica: function () { return $('#dtpFechaAltaMedica'); },
        DlgFormularioColaborador: null,

        FrmAtencionMedica: function () { return $('#frmAtencionMedica'); },
        FrmTraslado: function () { return $('#frmTraslado'); },
        FrmTrabajo: function () { return $('#frmTrabajo'); },
        FrmLesion: function () { return $('#frmLesion'); },
        FrmResultado: function () { return $('#frmResultado'); },

        FmrTrabajoDias: function () { return $('#fmrTrabajoDias'); },
        FmrLesionDias1: function () { return $('#fmrLesionDias1'); },
        FmrLesionDias2: function () { return $('#fmrLesionDias2'); },
        FmrFatalidadDias: function () { return $('#fmrFatalidadDias'); },

        Mensaje: new Pe.GMD.UI.Web.Components.Message(),

        SlcLesionesActuales: function () { return $('#slcLesionesActuales'); },
        SlcTipoLesionTiempoPerdido: function () { return $('#slcTipoLesionTiempoPerdido'); },
        SlcTipoAtencionMedica: function () { return $('#slcTipoAtencionMedica'); },
        SlcHoraAtencionMedica: function () { return $('#slcHoraAtencionMedica'); },
        SlcMinutosAtencionMedica: function () { return $('#slcMinutosAtencionMedica'); },
        SlcSeguroMedico: function () { return $('#slcSeguroMedico'); },
        SlcRequiereDerivacion: function () { return $('#slcRequiereDerivacion'); },
        SlcMedioTransporte: function () { return $('#slcMedioTransporte'); },
        SlcRequiereHospitalizacion: function () { return $('#slcRequiereHospitalizacion'); },
        SlcDiagnosticoMedico: function () { return $('#slcDiagnosticoMedico'); },

        SlcRequiereSiguienteCita: function () { return $('#slcRequiereSiguienteCita'); },
        SlcReincorporoTrabajo: function () { return $('#slcReincorporoTrabajo'); },

        SlcMesesTrabajo: function () { return $('#slcMesesTrabajo'); },
        SlcMesesLesion1: function () { return $('#slcMesesLesion1'); },
        SlcMesesLesion2: function () { return $('#slcMesesLesion2'); },
        SlcMesesFatalidad: function () { return $('#slcMesesFatalidad'); },

        SlcAniosTrabajo: function () { return $('#slcAniosTrabajo'); },
        SlcAniosLesion1: function () { return $('#slcAniosLesion1'); },
        SlcAniosLesion2: function () { return $('#slcAniosLesion2'); },
        SlcAniosFatalidad: function () { return $('#slcAniosFatalidad'); },

        TxtNumeroDiasTrabajo: function () { return $('#txtNumeroDiasTrabajo'); },
        TxtNumeroDiasLesion1: function () { return $('#txtNumeroDiasLesion1'); },
        TxtNumeroDiasLesion2: function () { return $('#txtNumeroDiasLesion2'); },
        TxtNumeroDiasFatalidad: function () { return $('#txtNumeroDiasFatalidad'); },

        TxtProveedor: function () { return $('#txtProveedor'); },
        TxtLugarAtencion: function () { return $('#txtLugarAtencion'); },
        TxtNombreMedico: function () { return $('#txtNombreMedico'); },
        TxtEspecialidadMedico: function () { return $('#txtEspecialidadMedico'); },
        TxtNumeroCodigoMedico: function () { return $('#txtNumeroCodigoMedico'); },
        TxtTratamiento: function () { return $('#txtTratamiento'); },
        TxtComentarios: function () { return $('#txtComentarios'); },
        TxtComentarioTraslado: function () { return $('#txtComentarioTraslado'); },
        TxtRestriccionLaboral: function () { return $('#txtRestriccionLaboral'); },
        TxtDescripcionTratamiento: function () { return $('#txtDescripcionTratamiento'); },
        TxtNumeroDiasDescansoMedico: function () { return $('#txtNumeroDiasDescansoMedico'); },

        ValorGridDiasLesion: null,
        ValidadorAtencionMedica: null
    };

    base.Event = {
        SlcTipoLesionTiempoPerdidoChange: function () {

        },
        SlcLesionesActualesChange: function () {
            if (base.Control.SlcLesionesActuales().val() == Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.DatosConstantes.LesionTiempoPerdido) {
                base.Control.SlcTipoLesionTiempoPerdido().prop('disabled', false);
                $('#idtabLesion').attr('role', 'tab');
                $('#idtabLesion').attr('data-toggle', 'tab');
                $('#idtabTrabajo').attr('role', '');
                $('#idtabTrabajo').attr('data-toggle', '');
                $('#idtabFatalidad').attr('role', '');
                $('#idtabFatalidad').attr('data-toggle', '');
            }
            else if (base.Control.SlcLesionesActuales().val() == Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.DatosConstantes.LesionTrabajoRestringido) {
                base.Control.SlcTipoLesionTiempoPerdido().prop('disabled', true);
                base.Control.SlcTipoLesionTiempoPerdido().val('');
                $('#idtabTrabajo').attr('role', 'tab');
                $('#idtabTrabajo').attr('data-toggle', 'tab');
                $('#idtabLesion').attr('role', '');
                $('#idtabLesion').attr('data-toggle', '');
                $('#idtabFatalidad').attr('role', '');
                $('#idtabFatalidad').attr('data-toggle', '');
            }
            else if (base.Control.SlcLesionesActuales().val() == Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.DatosConstantes.Fatalidad) {
                base.Control.SlcTipoLesionTiempoPerdido().prop('disabled', true);
                base.Control.SlcTipoLesionTiempoPerdido().val('');
                $('#idtabFatalidad').attr('role', 'tab');
                $('#idtabFatalidad').attr('data-toggle', 'tab');
                $('#idtabLesion').attr('role', '');
                $('#idtabLesion').attr('data-toggle', '');
                $('#idtabTrabajo').attr('role', '');
                $('#idtabTrabajo').attr('data-toggle', '');
            }
            else {
                base.Control.SlcTipoLesionTiempoPerdido().prop('disabled', true);
                base.Control.SlcTipoLesionTiempoPerdido().val('');
                $('#idtabFatalidad').attr('role', '');
                $('#idtabFatalidad').attr('data-toggle', '');
                $('#idtabLesion').attr('role', '');
                $('#idtabLesion').attr('data-toggle', '');
                $('#idtabTrabajo').attr('role', '');
                $('#idtabTrabajo').attr('data-toggle', '');
            }
        },
        SlcRequiereSiguienteCitaChange: function () {
            if (base.Control.SlcRequiereSiguienteCita().val() == Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.DatosConstantes.RequiereCita_Si)
            {
                base.Control.DtpFechaProximaCita().prop('disabled', false);
                base.Control.TxtDescripcionTratamiento().val('');
                base.Control.TxtDescripcionTratamiento().prop('disabled', true);
            }
            else if (base.Control.SlcRequiereSiguienteCita().val() == Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.DatosConstantes.RequiereCita_No)
            {
                base.Control.TxtDescripcionTratamiento().prop('disabled', false);
                base.Control.DtpFechaProximaCita().val('');
                base.Control.DtpFechaProximaCita().prop('disabled', true);
            }
            else
            {
                base.Control.DtpFechaProximaCita().val('');
                base.Control.DtpFechaProximaCita().prop('disabled', true);
                base.Control.TxtDescripcionTratamiento().val('');
                base.Control.TxtDescripcionTratamiento().prop('disabled', true);
            }
        },
        SlcReincorporoTrabajoChange: function () {
            if (base.Control.SlcReincorporoTrabajo().val() == Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.DatosConstantes.SI) {
                base.Control.DtpFechaReincorporacion().prop('disabled', false);
            }
            else {
                base.Control.DtpFechaReincorporacion().val('');
                base.Control.DtpFechaReincorporacion().prop('disabled', true);
            }
        },
        BtnAgregarDiasTrabajoClick: function () { 
            if (base.Control.ValidadorTrabajoDias.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarAtencionMedicaDiasLesion.data = {
                            CodigoAtencionMedica: base.Control.Formulario.AtencionMedica.CodigoAtencionMedica,
                            CodigoMes: base.Control.SlcMesesTrabajo().val(),
                            CodigoTipo: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.DatosConstantes.GridTrabajoRestringido,
                            Anio: base.Control.SlcAniosTrabajo().val(),
                            DiasRestringidos: base.Control.TxtNumeroDiasTrabajo().val()
                        };
                        base.Control.ValorGridDiasLesion = Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.DatosConstantes.GridTrabajoRestringido,
                        base.Ajax.AjaxRegistrarAtencionMedicaDiasLesion.submit();
                    }
                });
            } else {
                $("#fmrTrabajoDiasSummaryErrorMessage").empty();
                $("#fmrTrabajoDiasSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },
        BtnAgregarDiasLesion1Click: function () {
            if (base.Control.ValidadorLesionDias1.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarAtencionMedicaDiasLesion.data = {
                            CodigoAtencionMedica: base.Control.Formulario.AtencionMedica.CodigoAtencionMedica,
                            CodigoMes: base.Control.SlcMesesLesion1().val(),
                            CodigoTipo: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.DatosConstantes.GridLesionTiempoPerdido1,
                            Anio: base.Control.SlcAniosLesion1().val(),
                            DiasPerdidos: base.Control.TxtNumeroDiasLesion1().val(),                        
                        };
                        base.Control.ValorGridDiasLesion = Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.DatosConstantes.GridLesionTiempoPerdido1,
                        base.Ajax.AjaxRegistrarAtencionMedicaDiasLesion.submit();
                    }
                });
            } else {
                $("#fmrLesionDias1SummaryErrorMessage").empty();
                $("#fmrLesionDias1SummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },
        BtnAgregarDiasLesion2Click: function () {
            if (base.Control.ValidadorLesionDias2.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarAtencionMedicaDiasLesion.data = {
                            CodigoAtencionMedica: base.Control.Formulario.AtencionMedica.CodigoAtencionMedica,
                            CodigoMes: base.Control.SlcMesesLesion2().val(),
                            CodigoTipo: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.DatosConstantes.GridLesionTiempoPerdido2,
                            Anio: base.Control.SlcAniosLesion2().val(),
                            DiasCargados: base.Control.TxtNumeroDiasLesion2().val(),                        
                        };
                        base.Control.ValorGridDiasLesion = Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.DatosConstantes.GridLesionTiempoPerdido2,
                        base.Ajax.AjaxRegistrarAtencionMedicaDiasLesion.submit();
                    }
                });
            } else {
                $("#fmrLesionDias2SummaryErrorMessage").empty();
                $("#fmrLesionDias2SummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },
        BtnAgregarDiasFatalidadClick: function () {            
            if (base.Control.ValidadorFatalidadDias.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarAtencionMedicaDiasLesion.data = {
                            CodigoAtencionMedica: base.Control.Formulario.AtencionMedica.CodigoAtencionMedica,
                            CodigoMes: base.Control.SlcMesesFatalidad().val(),
                            CodigoTipo: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.DatosConstantes.GridFatalidad,
                            Anio: base.Control.SlcAniosFatalidad().val(),
                            DiasCargados: base.Control.TxtNumeroDiasFatalidad().val(),                        
                        };
                        base.Control.ValorGridDiasLesion = Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.DatosConstantes.GridFatalidad,
                        base.Ajax.AjaxRegistrarAtencionMedicaDiasLesion.submit();
                    }
                });
            } else {
                $("#fmrFatalidadDiasSummaryErrorMessage").empty();
                $("#fmrFatalidadDiasSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },
        BtnAgregarAnexoClick: function () {
            'use strict'
            if (base.Control.Formulario.AtencionMedica.CodigoAtencionMedica != null) {
                base.Control.DlgFormularioAnexo.Show({
                    CodigoAtencionMedica: base.Control.Formulario.AtencionMedica.CodigoAtencionMedica,
                    EstadoAtencionMedica: base.Control.Formulario.AtencionMedica.EstadoAtencionMedica,
                });
            }
        },
        BtnEnviarCierreClick: function () {
            base.Control.Mensaje.Confirmation({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                message: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.MensajeCierreAtencionMedica,
                onAccept: function () {
                    base.Ajax.AjaxCierreAtencionMedica.data = {
                        CodigoAtencionMedica: base.Control.Formulario.AtencionMedica.CodigoAtencionMedica,
                    };
                    base.Ajax.AjaxCierreAtencionMedica.submit();
                }
            });
        },
        LoadBtnGridAnexos: function () {
            'use strict'
            if (base.Control.Formulario.AtencionMedica.CodigoAtencionMedica != null) {
                base.Control.GrdResultadoAppendix.Load({
                    CodigoAtencionMedica: base.Control.Formulario.AtencionMedica.CodigoAtencionMedica
                });
            }
        },
        BtnLoadGridTrabajo: function () {
            'use strict'
            if (base.Control.Formulario.AtencionMedica.CodigoAtencionMedica != null) {
                base.Control.GrdTrabajo.Load({
                    CodigoAtencionMedica: base.Control.Formulario.AtencionMedica.CodigoAtencionMedica                    
                });
            }
        },
        BtnLoadGridLesionTiempoPerdido1: function () {
            'use strict'
            if (base.Control.Formulario.AtencionMedica.CodigoAtencionMedica != null) {
                base.Control.GrdLesionTiempoPerdido1.Load({
                    CodigoAtencionMedica: base.Control.Formulario.AtencionMedica.CodigoAtencionMedica
                });
            }
        },
        BtnLoadGridLesionTiempoPerdido2: function () {
            'use strict'
            if (base.Control.Formulario.AtencionMedica.CodigoAtencionMedica != null) {
                base.Control.GrdLesionTiempoPerdido2.Load({
                    CodigoAtencionMedica: base.Control.Formulario.AtencionMedica.CodigoAtencionMedica                    
                });
            }
        },
        BtnLoadGridFatalidad: function () {
            'use strict'
            if (base.Control.Formulario.AtencionMedica.CodigoAtencionMedica != null) {
                base.Control.GrdFatalidad.Load({
                    CodigoAtencionMedica: base.Control.Formulario.AtencionMedica.CodigoAtencionMedica                    
                });
            }
        },
        BtnLoadGridAnexos: function () {
            'use strict'
            if (base.Control.Formulario.AtencionMedica.CodigoAtencionMedica != null) {
                base.Control.GrdResultadoAppendix.Load({
                    CodigoAtencionMedica: base.Control.Formulario.AtencionMedica.CodigoAtencionMedica
                });
            }
        },
        BtnLoadDiagnosticoMedicoClick: function () {
            'use strict'
            if (base.Control.Formulario.AtencionMedica.CodigoAtencionMedica != null) {
                base.Control.GrdDiagnosticoMedico.Load({
                    CodigoAtencionMedica: base.Control.Formulario.AtencionMedica.CodigoAtencionMedica
                });
            }
        },
        BtnLoadPersonasAcompanantesClick: function () {
            'use strict'
            if (base.Control.Formulario.AtencionMedica.CodigoAtencionMedica != null) {
                base.Control.GrdPersonasAcompanantes.Load({
                    CodigoAtencionMedica: base.Control.Formulario.AtencionMedica.CodigoAtencionMedica
                });
            }
        },
        BtnAgregarEmpresaColaboradorClick: function () {
            base.Control.DlgFormularioColaborador.Show(false, [], {});
        },
        BtnAgregarDiagnosticoClick: function () {
            if (base.Control.SlcDiagnosticoMedico().val() != '' && base.Control.SlcDiagnosticoMedico().val() != null) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarAtencionMedicaDiagnostico.data = {
                            CodigoAtencionMedica: base.Control.Formulario.AtencionMedica.CodigoAtencionMedica,
                            CodigoDiagnostico: base.Control.SlcDiagnosticoMedico().val()
                        };
                        base.Ajax.AjaxRegistrarAtencionMedicaDiagnostico.submit();
                    }
                });
            }
        },
        ObtenerEmpresaColaborador: function (colaborador) {
            if (colaborador.length > 0) {
                base.Ajax.AjaxRegistrarAtencionMedicaAcompanante.data = {
                    CodigoAtencionMedica: base.Control.Formulario.AtencionMedica.CodigoAtencionMedica,
                    CodigoColaborador: colaborador[0].CodigoColaborador,
                    CodigoTipoDocumento: colaborador[0].CodigoTipoDocumento,
                    Nombres: colaborador[0].Nombres,
                    ApellidoPaterno: colaborador[0].ApellidoPaterno,
                    ApellidoMaterno: colaborador[0].ApellidoMaterno,
                    DescripcionTipoDocumento: colaborador[0].DescripcionTipoDocumento,
                    NombreEmpresa: colaborador[0].NombreEmpresa,
                    CodigoEmpresa: colaborador[0].CodigoEmpresa,
                    NombrePuestoTrabajo: colaborador[0].NombrePuestoTrabajo,
                    CodigoPuestoTrabajo: colaborador[0].CodigoPuestoTrabajo,
                    NumeroDocumento: colaborador[0].NumeroDocumento,
                }
                base.Ajax.AjaxRegistrarAtencionMedicaAcompanante.submit();
            }
        },
        SlcRequiereDerivacionChange: function () {
            'use strict'
            if (base.Control.SlcRequiereDerivacion().val() == Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.DatosConstantes.SI) {
                base.Control.SlcMedioTransporte().prop('disabled', false);
                base.Control.TxtComentarioTraslado().prop('disabled', false);
            }
            else {
                base.Control.SlcMedioTransporte().val('');
                base.Control.SlcMedioTransporte().prop('disabled', true);
                base.Control.TxtComentarioTraslado().prop('disabled', true);
            }
        },
        BtnRegresarBandejaSeguimientoClick: function () {
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Base.Actions.GestionBandejaAtenciones, {
                CodigoExpediente: base.Control.Formulario.AtencionMedica.CodigoExpediente
            });
        },
        BtnGuardarAtencionMedicaClick: function () {
            if (base.Control.ValidadorAtencionMedica.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarAtencionMedica.data = {
                            CodigoAtencionMedica: base.Control.Formulario.AtencionMedica.CodigoAtencionMedica,
                            CodigoExpediente: base.Control.Formulario.AtencionMedica.CodigoExpediente,
                            CodigoLesion: base.Control.SlcLesionesActuales().val(),
                            TipoLesion: base.Control.SlcTipoLesionTiempoPerdido().val(),
                            TipoAtencion: base.Control.SlcTipoAtencionMedica().val(),
                            Proveedor: base.Control.TxtProveedor().val(),
                            LugarAtencion: base.Control.TxtLugarAtencion().val(),
                            FechaAtencion: base.Control.DtpFechaAtencion().val() + " " + base.Control.SlcHoraAtencionMedica().val() + ":" + base.Control.SlcMinutosAtencionMedica().val(),
                            IndicadorSeguroMedico: base.Control.SlcSeguroMedico().val(),
                            NombreMedico: base.Control.TxtNombreMedico().val(),
                            EspecialidadMedico: base.Control.TxtEspecialidadMedico().val(),
                            TipoCodigoMedico: '001',
                            NumeroCodigoMedico: base.Control.TxtNumeroCodigoMedico().val(),
                            Tratamiento: base.Control.TxtTratamiento().val(),
                            Comentarios: base.Control.TxtComentarios().val()
                        };
                        base.Ajax.AjaxRegistrarAtencionMedica.submit();
                    }
                });
            } else {
                $("#frmAtencionMedicaSummaryErrorMessage").empty();
                $("#frmAtencionMedicaSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },
        BtnGuardarTrasladoClick: function () {
            if (base.Control.ValidadorTraslado.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarAtencionMedicaTraslado.data = {
                            CodigoAtencionMedica: base.Control.Formulario.AtencionMedica.CodigoAtencionMedica,
                            DerivacionExterna: base.Control.SlcRequiereDerivacion().val(),
                            MedioTransporte: base.Control.SlcMedioTransporte().val(),
                            ComentarioTraslado: base.Control.TxtComentarioTraslado().val()
                        };
                        base.Ajax.AjaxRegistrarAtencionMedicaTraslado.submit();
                    }
                });
            } else {
                $("#frmTrasladoSummaryErrorMessage").empty();
                $("#frmTrasladoSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnGuardarTrabajoClick: function () { 
            if (base.Control.ValidadorTrabajo.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarAtencionMedicaTrabajoRestringido.data = {
                            CodigoAtencionMedica: base.Control.Formulario.AtencionMedica.CodigoAtencionMedica,
                            InicioTrabajoRestringido: base.Control.DtpFechaInicioTrabajo().val(),
                            FinTrabajoRestringido: base.Control.DtpFechaFinTrabajo().val(),
                            RestriccionLaboral: base.Control.TxtRestriccionLaboral().val(),
                        };
                        base.Ajax.AjaxRegistrarAtencionMedicaTrabajoRestringido.submit();
                    }
                });
            } else {
                $("#frmTrabajoSummaryErrorMessage").empty();
                $("#frmTrabajoSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },
        BtnGuardarLesionClick: function () {
            if (base.Control.ValidadorLesion.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarAtencionMedicaLesionTiempoPerdido.data = {
                            CodigoAtencionMedica: base.Control.Formulario.AtencionMedica.CodigoAtencionMedica,
                            IndicadorRequiereHospital: base.Control.SlcRequiereHospitalizacion().val(),
                            InicioDescansoMedico: base.Control.DtpFechaInicioLesion().val(),
                            FinDescansoMedico: base.Control.DtpFechaFinLesion().val(),
                            CantidadDiasDescanso: base.Control.TxtNumeroDiasDescansoMedico().val()
                        };
                        base.Ajax.AjaxRegistrarAtencionMedicaLesionTiempoPerdido.submit();
                    }
                });
            } else {
                $("#frmLesionSummaryErrorMessage").empty();
                $("#frmLesionSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },
        BtnGuardarResultadoClick: function () {
            if (base.Control.ValidadorResultado.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarAtencionMedicaResultado.data = {
                            CodigoAtencionMedica: base.Control.Formulario.AtencionMedica.CodigoAtencionMedica,
                            IndicadorRequiereProximaCita: base.Control.SlcRequiereSiguienteCita().val(),
                            FechaProximaCita: base.Control.DtpFechaProximaCita().val(),
                            DescripcionTratamiento: base.Control.TxtDescripcionTratamiento().val(),
                            IndicadorReincorporoTrabajo: base.Control.SlcReincorporoTrabajo().val(),
                            FechaReincorporacion: base.Control.DtpFechaReincorporacion().val(),
                            FechaAltaMedica: base.Control.DtpFechaAltaMedica().val()
                        };
                        base.Ajax.AjaxRegistrarAtencionMedicaResultado.submit();
                    }
                });
            } else {
                $("#frmResultadoSummaryErrorMessage").empty();
                $("#frmResultadoSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },
        AjaxRegistrarAtencionMedicaSuccess: function (resultado) {
            if (resultado.IsSuccess && resultado.Result.CodigoAtencionMedica != null) {
                base.Control.Formulario.AtencionMedica.CodigoAtencionMedica = resultado.Result.CodigoAtencionMedica;
                base.Control.Formulario.AtencionMedica.CodigoExpediente = resultado.Result.CodigoExpediente;
                base.Control.Formulario.AtencionMedica.EstadoAtencionMedica = resultado.Result.EstadoAtencionMedica;

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
        AjaxRegistrarAtencionMedicaTrasladoSuccess: function (resultado) {
            if (resultado.Result >= "1") {
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
        AjaxRegistrarAtencionMedicaTrabajoRestringidoSuccess: function (resultado) {
            if (resultado.Result >= "1") {
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
        AjaxRegistrarAtencionMedicaLesionTiempoPerdidoSuccess: function (resultado) {
            if (resultado.Result >= "1") {
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
        AjaxRegistrarAtencionMedicaAcompananteSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Event.BtnLoadPersonasAcompanantesClick();
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
            }
            else if (resultado.Result == '-2') {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.MensajeExisteRegistroDuplicado });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        BtnGridDeletePersonaAcompananteClick: function (row, data) {
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarAtencionMedicaAcompanante.data = data;
                    base.Ajax.AjaxEliminarAtencionMedicaAcompanante.submit();
                }
            });
        },
        BtnGridDeleteDiagnosticoMedicoClick: function (row, data) {
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarAtencionMedicaDiagnostico.data = data;
                    base.Ajax.AjaxEliminarAtencionMedicaDiagnostico.submit();
                }
            });
        },
        AjaxEliminarAtencionMedicaAcompananteSuccess: function (resultado) {            
            if (resultado.Result >= 1) {
                base.Event.BtnLoadPersonasAcompanantesClick();
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });                
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxEliminarAtencionMedicaDiagnosticoSuccess: function (resultado) {            
            if (resultado.Result >= 1) {
                base.Event.BtnLoadDiagnosticoMedicoClick();
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });                
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxRegistrarAtencionMedicaDiagnosticoSuccess: function (resultado) {            
            if (resultado.Result >= '1') {
                base.Event.BtnLoadDiagnosticoMedicoClick();
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
            }
            else if (resultado.Result == '-2') {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.MensajeExisteRegistroDuplicado });
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxRegistrarDiasLesionTabTrabajoSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                if (base.Control.ValorGridDiasLesion == Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.DatosConstantes.GridTrabajoRestringido) {
                    base.Event.BtnLoadGridTrabajo();
                }
                else if (base.Control.ValorGridDiasLesion == Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.DatosConstantes.GridLesionTiempoPerdido1) {
                    base.Event.BtnLoadGridLesionTiempoPerdido1();
                }
                else if (base.Control.ValorGridDiasLesion == Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.DatosConstantes.GridLesionTiempoPerdido2) {
                    base.Event.BtnLoadGridLesionTiempoPerdido2();
                }
                else if (base.Control.ValorGridDiasLesion == Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.DatosConstantes.GridFatalidad) {
                    base.Event.BtnLoadGridFatalidad();
                }
                base.Control.ValorGridDiasLesion = null;
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
            }
            else if (resultado.Result == '-2') {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.MensajeExisteRegistroDuplicado });
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxEliminarAtencionMedicaDiasLesionSuccess: function (resultado) {
            if (resultado.Result >= 1) {
                if (base.Control.ValorGridDiasLesion == Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.DatosConstantes.GridTrabajoRestringido) {
                    base.Event.BtnLoadGridTrabajo();
                }
                else if (base.Control.ValorGridDiasLesion == Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.DatosConstantes.GridLesionTiempoPerdido1) {
                    base.Event.BtnLoadGridLesionTiempoPerdido1();
                }
                else if (base.Control.ValorGridDiasLesion == Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.DatosConstantes.GridLesionTiempoPerdido2) {
                    base.Event.BtnLoadGridLesionTiempoPerdido2();
                }
                else if (base.Control.ValorGridDiasLesion == Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.DatosConstantes.GridFatalidad) {
                    base.Event.BtnLoadGridFatalidad();
                }
                base.Control.ValorGridDiasLesion = null;
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        BtnGridAdjuntoClick: function (row, data) {
            'use strict'
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Actions.DescargarArchivoApendice, data);
        },
        BtnGridEditAnexoClick: function (row, data) {
            'use strict'
            base.Control.DlgFormularioAnexo.Show({
                CodigoAtencionMedicaAnexo: data.CodigoAtencionMedicaAnexo,
                CodigoAtencionMedica: data.CodigoAtencionMedica,
                EstadoAtencionMedica: base.Control.Formulario.AtencionMedica.EstadoAtencionMedica
            });
        },
        BtnGridDeleteAnexoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarAtencionMedicaAnexo.data = data;
                    base.Ajax.AjaxEliminarAtencionMedicaAnexo.submit();
                }
            });
        },
        AjaxEliminarAtencionMedicaAnexoSuccess: function (resultado) {            
            if (resultado.Result >= 1) {
                base.Event.BtnLoadGridAnexos();
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxRegistrarAtencionMedicaResultadoSuccess: function (resultado) {            
            if (resultado.Result >= 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxCierreAtencionMedicaSuccess: function (resultado) {                        
            if (resultado.Result >= '1') {
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Actions.BandejaLesiones, {})
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.EtiquetaValidacionAtencion });
            }
        },
        BtnValidarEstadoAtencion: function (data, type, full) {
            if (base.Control.Formulario.AtencionMedica.EstadoAtencionMedica != Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.DatosConstantes.AtencionCerrado)
                return true;
            else
                return false;
        },
        BtnGridDeleteDiasLesionClick: function (row, data)
        {
            base.Control.ValorGridDiasLesion = data.CodigoTipo;
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarAtencionMedicaDiasLesion.data = data;
                    base.Ajax.AjaxEliminarAtencionMedicaDiasLesion.submit();
                }
            });
        },
        BtnCancelarAtencionMedicaClick: function () {            
            base.Control.SlcLesionesActuales().val('');
            base.Control.SlcTipoLesionTiempoPerdido().val('');
            base.Control.SlcTipoAtencionMedica().val('');
            base.Control.TxtProveedor().val('');
            base.Control.TxtLugarAtencion().val('');
            base.Control.DtpFechaAtencion().val('');
            base.Control.SlcHoraAtencionMedica().val('');
            base.Control.SlcMinutosAtencionMedica().val('');
            base.Control.SlcSeguroMedico().val('');
            base.Control.TxtNombreMedico().val('');
            base.Control.TxtEspecialidadMedico().val('');            
            base.Control.TxtNumeroCodigoMedico().val('');
            base.Control.TxtTratamiento().val('');
            base.Control.TxtComentarios().val('');
            return false;
        },
        BtnCancelarTrasladoClick: function () {            
            base.Control.SlcRequiereDerivacion().val('');
            base.Control.SlcMedioTransporte().val('');
            base.Control.TxtComentarioTraslado().val('');
            return false;
        },
        BtnCancelarTrabajoClick: function () {
            base.Control.DtpFechaInicioTrabajo().val();
            base.Control.DtpFechaFinTrabajo().val();
            base.Control.TxtRestriccionLaboral().val();
            return false;
        },
        BtnCancelarLesionClick: function () {
            base.Control.SlcRequiereHospitalizacion().val('');
            base.Control.DtpFechaInicioLesion().val('');
            base.Control.DtpFechaFinLesion().val('');
            base.Control.TxtNumeroDiasDescansoMedico().val('');
            return false;
        }
    };

    base.Ajax = {
        AjaxRegistrarAtencionMedica: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Actions.RegistrarAtencionMedica,
            autoSubmit: false,
            onSuccess: base.Event.AjaxRegistrarAtencionMedicaSuccess
        }), 
        AjaxRegistrarAtencionMedicaDiagnostico: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Actions.RegistrarAtencionMedicaDiagnostico,
            autoSubmit: false,
            onSuccess: base.Event.AjaxRegistrarAtencionMedicaDiagnosticoSuccess
        }),
        AjaxRegistrarAtencionMedicaTraslado: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Actions.RegistrarAtencionMedicaTraslado,
            autoSubmit: false,
            onSuccess: base.Event.AjaxRegistrarAtencionMedicaTrasladoSuccess
        }),
        AjaxRegistrarAtencionMedicaTrabajoRestringido: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Actions.RegistrarAtencionMedicaTrabajoRestringido,
            autoSubmit: false,
            onSuccess: base.Event.AjaxRegistrarAtencionMedicaTrabajoRestringidoSuccess
        }),
        AjaxRegistrarAtencionMedicaLesionTiempoPerdido: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Actions.RegistrarAtencionMedicaLesionTiempoPerdido,
            autoSubmit: false,
            onSuccess: base.Event.AjaxRegistrarAtencionMedicaLesionTiempoPerdidoSuccess
        }),
        AjaxRegistrarAtencionMedicaAcompanante: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Actions.RegistrarAtencionMedicaAcompanante,
            autoSubmit: false,
            onSuccess: base.Event.AjaxRegistrarAtencionMedicaAcompananteSuccess
        }), 
        AjaxEliminarAtencionMedicaAcompanante: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Actions.EliminarAtencionMedicaAcompanante,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarAtencionMedicaAcompananteSuccess
        }),
        AjaxEliminarAtencionMedicaDiagnostico: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Actions.EliminarAtencionMedicaDiagnostico,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarAtencionMedicaDiagnosticoSuccess
        }),
        AjaxRegistrarAtencionMedicaDiasLesion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Actions.RegistrarAtencionMedicaDiasLesion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxRegistrarDiasLesionTabTrabajoSuccess
        }),
        AjaxEliminarAtencionMedicaDiasLesion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Actions.EliminarAtencionMedicaDiasLesion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarAtencionMedicaDiasLesionSuccess
        }),
        AjaxEliminarAtencionMedicaAnexo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Actions.EliminarAtencionMedicaAnexo,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarAtencionMedicaAnexoSuccess
        }),
        AjaxRegistrarAtencionMedicaResultado: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Actions.RegistrarAtencionMedicaResultado,
            autoSubmit: false,
            onSuccess: base.Event.AjaxRegistrarAtencionMedicaResultadoSuccess
        }),        
        AjaxCierreAtencionMedica: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Actions.CierreAtencionMedica,
            autoSubmit: false,
            onSuccess: base.Event.AjaxCierreAtencionMedicaSuccess
        }),
    };

    base.Function = {
        CrearGridDiagnosticoMedico: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.GridCorrelativo,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionDiagnostico',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.GridDiagnosticoMedico,
                width: "55%"
            });
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "3%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.BtnValidarEstadoAtencion, event: { on: 'click', callBack: base.Event.BtnGridDeleteDiagnosticoMedicoClick } }
                ]
            });
            base.Control.GrdDiagnosticoMedico = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdDiagnosticoMedico',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Actions.BuscarAtencionMedicaDiagnostico,
                    source: 'Result'
                }
            });
        },
        CrearGridTrabajo: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.GridCorrelativo,
                width: "5%"
            }); 
            columns.push({
                data: 'Anio',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.GridAnio,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionMes',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.GridMes,
                width: "35%"
            });
            columns.push({
                data: 'DiasRestringidos',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.GridDiasRestringidos,
                width: "35%"
            });
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "3%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.BtnValidarEstadoAtencion, event: { on: 'click', callBack: base.Event.BtnGridDeleteDiasLesionClick } }
                ]
            });
            base.Control.GrdTrabajo = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdTrabajo',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Actions.BuscarAtencionMedicaDiasLesionTabTrabajo,
                    source: 'Result'
                }
            });
        },
        CrearGridLesionTiempoPerdido1: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.GridCorrelativo,
                width: "5%"
            });
            columns.push({
                data: 'Anio',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.GridAnio,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionMes',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.GridMes,
                width: "35%"
            });
            columns.push({
                data: 'DiasPerdidos',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.GridDiasPerdidos,
                width: "35%"
            });
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "3%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.BtnValidarEstadoAtencion, event: { on: 'click', callBack: base.Event.BtnGridDeleteDiasLesionClick } }
                ]
            });
            base.Control.GrdLesionTiempoPerdido1 = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdLesionTiempoPerdido1',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Actions.BuscarAtencionMedicaDiasTabLesion1,
                    source: 'Result'
                }
            });
        },
        CrearGridLesionTiempoPerdido2: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.GridCorrelativo,
                width: "5%"
            });
            columns.push({
                data: 'Anio',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.GridAnio,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionMes',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.GridMes,
                width: "35%"
            });
            columns.push({
                data: 'DiasCargados',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.GridDiasCargados,
                width: "35%"
            });
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "3%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.BtnValidarEstadoAtencion, event: { on: 'click', callBack: base.Event.BtnGridDeleteDiasLesionClick } }
                ]
            });
            base.Control.GrdLesionTiempoPerdido2 = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdLesionTiempoPerdido2',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Actions.BuscarAtencionMedicaDiasTabLesion2,
                    source: 'Result'
                }
            });
        },
        CrearGridFatalidad: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.GridCorrelativo,
                width: "5%"
            });
            columns.push({
                data: 'Anio',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.GridAnio,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionMes',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.GridMes,
                width: "35%"
            });
            columns.push({
                data: 'DiasCargados',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.GridDiasCargados,
                width: "35%"
            });
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "3%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.BtnValidarEstadoAtencion, event: { on: 'click', callBack: base.Event.BtnGridDeleteDiasLesionClick } }
                ]
            });
            base.Control.GrdFatalidad = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdFatalidad',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Actions.BuscarAtencionMedicaDiasTabFatalidad,
                    source: 'Result'
                }
            });
        },
        CrearGridPersonasAcompanantes: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.GridCorrelativo,
                width: "5%"
            });
            columns.push({
                data: 'NombreCompletoColaborador',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.GridApellidosyNombres,
                width: "15%"
            });
            columns.push({
                data: 'DescripcionTipoDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.GridTipoDocumento,
                width: "15%"
            });
            columns.push({
                data: 'NumeroDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.GridNroDocumento,
                width: "15%"
            });
            columns.push({
                data: 'NombreEmpresa',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.GridEmpresaColaborador,
                width: "15%"
            });
            columns.push({
                data: 'NombrePuestoTrabajo',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.GridPuestoTrabajo,
                width: "15%"
            });
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "3%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.BtnValidarEstadoAtencion, event: { on: 'click', callBack: base.Event.BtnGridDeletePersonaAcompananteClick } }
                ]
            });
            base.Control.GrdPersonasAcompanantes = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdPersonasAcompanantes',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Actions.BuscarAtencionMedicaAcompanante,
                    source: 'Result'
                }
            });
        },
        CrearGridAnexoApendice: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.GridItem,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionTipoApendice',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.GridTypeAnexo,
                width: "20%"
            });
            columns.push({
                data: 'Nombre',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.GridApendiceName,
                width: "30%"
            });
            columns.push({
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.GridDescripcionApendice,
                width: "30%"
            });
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.GridDownload,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Adjunto, event: { on: 'click', callBack: base.Event.BtnGridAdjuntoClick } }
                ]
            });
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditAnexoClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.BtnValidarEstadoAtencion, event: { on: 'click', callBack: base.Event.BtnGridDeleteAnexoClick } }
                ]
            });

            base.Control.GrdResultadoAppendix = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdAppendix',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Actions.BuscarAtencionMedicaAnexo,
                    source: 'Result'
                }
            });
        },
        ValidacionExtraTraslado: function () {
            var validaciones = new Array();
            validaciones.push({
                Event: function () {
                    var resultado = true;
                    if (base.Control.SlcRequiereDerivacion().val() == Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.DatosConstantes.SI
                        && (base.Control.SlcMedioTransporte().val() == null || base.Control.SlcMedioTransporte().val() == '')) {
                        resultado = false;
                    }
                    if (resultado) {
                        base.Control.SlcMedioTransporte().attr('class', 'form-control');
                    }
                    else {
                        base.Control.SlcMedioTransporte().attr('class', 'form-control hasError');
                    }
                    return resultado;
                }
            });
            return validaciones;
        },
        ValidadorExtraAtencionMedica: function () {
            var validaciones = new Array();
            validaciones.push({
                Event: function () {
                    var resultado = true;
                    if (base.Control.SlcLesionesActuales().val() == Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.DatosConstantes.LesionTiempoPerdido
                        && (base.Control.SlcTipoLesionTiempoPerdido().val() == null || base.Control.SlcTipoLesionTiempoPerdido().val() == '')) {
                        resultado = false;
                    }
                    if (resultado) {
                        base.Control.SlcTipoLesionTiempoPerdido().attr('class', 'form-control');
                    }
                    else {
                        base.Control.SlcTipoLesionTiempoPerdido().attr('class', 'form-control hasError');
                    }
                    return resultado;
                }
            });
            return validaciones;
        },
        ValidacionExtraResultado: function () {
            var validaciones = new Array();
            validaciones.push({
                Event: function () {
                    var resultado = true;
                    if (base.Control.SlcRequiereSiguienteCita().val() == Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.DatosConstantes.RequiereCita_Si &&
                        (base.Control.DtpFechaProximaCita().val() == '' || base.Control.DtpFechaProximaCita().val() == null)) {
                        resultado = false;
                    }
                    if (resultado) {
                        base.Control.DtpFechaProximaCita().attr('class', 'form-control');
                    }
                    else {
                        base.Control.DtpFechaProximaCita().attr('class', 'form-control hasError');
                    }
                    return resultado;
                }
            });
            validaciones.push({
                Event: function () {
                    var resultado = true;
                    if (base.Control.SlcRequiereSiguienteCita().val() == Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.DatosConstantes.RequiereCita_No &&
                        ($.trim(base.Control.TxtDescripcionTratamiento().val()) == '' || $.trim(base.Control.TxtDescripcionTratamiento().val()) == null)) {
                        resultado = false;
                    }
                    if (resultado) {
                        base.Control.TxtDescripcionTratamiento().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtDescripcionTratamiento().attr('class', 'form-control hasError');
                    }
                    return resultado;
                }
            });
            validaciones.push({
                Event: function () {
                    var resultado = true;
                    if (base.Control.SlcReincorporoTrabajo().val() == Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.DatosConstantes.SI &&
                        (base.Control.DtpFechaReincorporacion().val() == '' || base.Control.DtpFechaReincorporacion().val() == null)) {
                        resultado = false;
                    }
                    if (resultado) {
                        base.Control.DtpFechaReincorporacion().attr('class', 'form-control');
                    }
                    else {
                        base.Control.DtpFechaReincorporacion().attr('class', 'form-control hasError');
                    }
                    return resultado;
                }
            });
            return validaciones;
        }
    };
};