// <summary>
/// Script de controlador de Formulario UnidadOrganizativa
/// </summary>
/// <remarks>
/// Creacion: 	GMD(SYS) 21/01/2016
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioColaboradorPrincipal');
Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioColaboradorPrincipal.Controller = function (opts) {
    var base = this;
    base.Ini = function () {
        base.Event.GrabarColaboradorSuccess = (opts.GrabarColaboradorSuccess != null) ? opts.GrabarColaboradorSuccess : null;
        base.Control.Modelo = Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Models.FormularioColaboradorPrincipal;

        if (base.Control.ChkIndicadorActivo().val() == 'True') {
            base.Control.ChkIndicadorActivo().prop('checked', true)
        } else {
            base.Control.ChkIndicadorActivo().prop('checked', false)
        }

        if (base.Control.ChkIndicadorPermanente().val() == 'True') {
            base.Control.ChkIndicadorPermanente().prop('checked', true)
        } else {
            base.Control.ChkIndicadorPermanente().prop('checked', false)
        }

        if (base.Control.ChkIndicadorPermiteCierre().val() == 'True') {
            base.Control.ChkIndicadorPermiteCierre().prop('checked', true)
        } else {
            base.Control.ChkIndicadorPermiteCierre().prop('checked', false)
        }

        base.Control.TxtNumeroDocumento().off('keypress');
        base.Control.TxtNumeroDocumento().on('keypress', base.Event.TxtSoloNumerosKeypress);

        base.Control.TxtExperienciaLaboralNegocioAnios().off('keypress');
        base.Control.TxtExperienciaLaboralNegocioAnios().on('keypress', base.Event.TxtSoloNumerosKeypress);

        base.Control.TxtExperienciaLaboralNegocioMeses().off('keypress');
        base.Control.TxtExperienciaLaboralNegocioMeses().on('keypress', base.Event.TxtSoloNumerosKeypress);

        base.Control.TxtTiempoProyectoAnios().off('keypress');
        base.Control.TxtTiempoProyectoAnios().on('keypress', base.Event.TxtSoloNumerosKeypress);

        base.Control.TxtTiempoProyectoMeses().off('keypress');
        base.Control.TxtTiempoProyectoMeses().on('keypress', base.Event.TxtSoloNumerosKeypress);

        base.Control.TxtTiempoEmpresaContratistaAnios().off('keypress');
        base.Control.TxtTiempoEmpresaContratistaAnios().on('keypress', base.Event.TxtSoloNumerosKeypress);

        base.Control.TxtTiempoEmpresaContratistaMeses().off('keypress');
        base.Control.TxtTiempoEmpresaContratistaMeses().on('keypress', base.Event.TxtSoloNumerosKeypress);

        base.Control.TxtExperienciaLaboralPuestoTrabajoAnios().off('keypress');
        base.Control.TxtExperienciaLaboralPuestoTrabajoAnios().on('keypress', base.Event.TxtSoloNumerosKeypress);

        base.Control.TxtExperienciaLaboralPuestoTrabajoMeses().off('keypress');
        base.Control.TxtExperienciaLaboralPuestoTrabajoMeses().on('keypress', base.Event.TxtSoloNumerosKeypress);

        base.Control.BtnCancelar().off('click');
        base.Control.BtnCancelar().on('click', base.Event.BtnCancelarClick);

        base.Control.BtnGrabar().off('click');
        base.Control.BtnGrabar().on('click', base.Event.BtnGrabarClick);        

        base.Control.ChkIndicadorActivo().off('click');
        base.Control.ChkIndicadorActivo().on('click', base.Event.ChkIndicadorActivoClick);

        base.Control.ChkIndicadorPermanente().off('click');
        base.Control.ChkIndicadorPermanente().on('click', base.Event.ChkIndicadorPermanenteClick);

        base.Control.ChkIndicadorPermiteCierre().off('click');
        base.Control.ChkIndicadorPermiteCierre().on('click', base.Event.ChkIndicadorPermiteCierreClick);

        base.Control.DtpFechaNacimiento().datepicker({
            dateFormat: 'dd/mm/yy'
        });

        base.Control.DtpFechaNacimiento().off('change');
        base.Control.DtpFechaNacimiento().on('change', base.Event.DtpFechaNacimientoChange);

        base.Control.DtpFechaNacimiento().trigger('change');

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FormularioColaboradorPrincipal(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.Validacion
        });

        base.Control.SlcProyecto().off('change');
        base.Control.SlcProyecto().on('change', base.Event.SlcProyectoChange);

        base.Control.SlcDepartamento().off('change');
        base.Control.SlcDepartamento().on('change', base.Event.SlcDepartamentoChange);
    };

    base.Show = function (opts) {
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.FormularioColaboradorPrincipal,
            size: "size-wide",
            close: function () {
            }
        })

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Actions.FormularioColaboradorPrincipal,
            onSuccess: function () {
                base.Ini();
            },
            data: opts.data
        });
    };

    base.Control = {
        DlgForm: null,
        Validador: null,
        Modelo: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        FormularioColaboradorPrincipal: function () { return $('#frmFormularioColaboradorPrincipal'); },        
        BtnCancelar: function () { return $('#btnCancelar'); },
        BtnGrabar: function () { return $('#btnGrabar'); },
        TxtNombres: function () { return $('#txtNombres'); },
        SlcEmpresa: function () { return $('#slcEmpresa'); },
        SlcProyecto: function () { return $('#slcProyecto'); },
        TxtApellidoPaterno: function () { return $('#txtApellidoPaterno'); },
        TxtApellidoMaterno: function () { return $('#txtApellidoMaterno'); },
        SlcDepartamento: function () { return $('#slcDepartamento'); },
        SlcArea: function () { return $('#slcArea'); },
        SlcGenero: function () { return $('#slcGenero'); },
        SlcPuestoTrabajo: function () { return $('#slcPuestoTrabajo'); },
        SlcTipoDocumento: function () { return $('#slcTipoDocumento'); },
        TxtNumeroDocumento: function () { return $('#txtNumeroDocumento'); },
        SlcTipoPlanilla: function () { return $('#slcTipoPlanilla'); },
        SlcEstadoCivil: function () { return $('#slcEstadoCivil'); },
        SlcGradoInstruccion: function () { return $('#slcGradoInstruccion'); },
        TxtSistemaTrabajo: function () { return $('#txtSistemaTrabajo'); },
        SlcTurnoMixto: function () { return $('#slcTurnoMixto'); },
        SlcPais: function () { return $('#slcPais'); },
        TxtNombreDepartamento: function () { return $('#txtNombreDepartamento'); },
        TxtExperienciaLaboralNegocioAnios: function () { return $('#txtExperienciaLaboralNegocioAnios'); },
        TxtExperienciaLaboralNegocioMeses: function () { return $('#txtExperienciaLaboralNegocioMeses'); },
        TxtNombreProvincia: function () { return $('#txtNombreProvincia'); },
        TxtTiempoProyectoAnios: function () { return $('#txtTiempoProyectoAnios'); },
        TxtTiempoProyectoMeses: function () { return $('#txtTiempoProyectoMeses'); },
        TxtCorreoElectronico: function () { return $('#txtCorreoElectronico'); },
        TxtTiempoEmpresaContratistaAnios: function () { return $('#txtTiempoEmpresaContratistaAnios'); },
        TxtTiempoEmpresaContratistaMeses: function () { return $('#txtTiempoEmpresaContratistaMeses'); },
        TxtCodigoUsuarioRed: function () { return $('#txtCodigoUsuarioRed'); },
        TxtExperienciaLaboralPuestoTrabajoAnios: function () { return $('#txtExperienciaLaboralPuestoTrabajoAnios'); },
        TxtExperienciaLaboralPuestoTrabajoMeses: function () { return $('#txtExperienciaLaboralPuestoTrabajoMeses'); },
        ChkIndicadorActivo: function () { return $('#chkIndicadorActivo'); },
        ChkIndicadorPermanente: function () { return $('#chkIndicadorPermanente'); },
        ChkIndicadorPermiteCierre: function () { return $('#chkIndicadorPermiteCierre'); },
        DtpFechaNacimiento: function () { return $('#dtpFechaNacimiento'); },
        SlcEstadoColaborador: function () { return $('#slcEstadoColaborador'); },
    };

    base.Event = {
        SlcProyectoChange: function () {
            base.Control.SlcDepartamento().empty();
            base.Control.SlcDepartamento().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
                        
            if (base.Control.SlcProyecto().val() != '') {
                base.Ajax.AjaxBuscarDepartamento.data = {
                    CodigoProyecto: base.Control.SlcProyecto().val()
                };
                base.Ajax.AjaxBuscarDepartamento.submit();
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
        TxtSoloNumerosKeypress: function (event) {
            var regex = /[0-9]/;
            var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
            if (!regex.test(key)) {
                event.preventDefault();
                return false;
            }
        },
        ChkIndicadorActivoClick: function () {
            if ($(this).is(':checked') == true) {
                base.Control.ChkIndicadorActivo().val(true)
            }
            else {
                base.Control.ChkIndicadorActivo().val(false)
            }
        },
        ChkIndicadorPermanenteClick: function () {
            if ($(this).is(':checked') == true) {
                base.Control.ChkIndicadorPermanente().val(true)
            }
            else {
                base.Control.ChkIndicadorPermanente().val(false)
            }
        },
        ChkIndicadorPermiteCierreClick: function () {
            if ($(this).is(':checked') == true) {
                base.Control.ChkIndicadorPermiteCierre().val(true)
            }
            else {
                base.Control.ChkIndicadorPermiteCierre().val(false)
            }
        },
        BtnCancelarClick: function () {
            'use strict'
            base.Control.DlgForm.divDialog.close();
        },
        BtnGrabarClick: function () {
            'use strict'
            if (base.Control.Validador.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabar.data = {
                            CodigoColaborador: base.Control.Modelo.Colaborador.CodigoColaborador != null ? base.Control.Modelo.Colaborador.CodigoColaborador : null,
                            Nombres: base.Control.TxtNombres().val(),
                            ApellidoPaterno: base.Control.TxtApellidoPaterno().val(),
                            ApellidoMaterno: base.Control.TxtApellidoMaterno().val(),
                            CodigoEmpresa: base.Control.SlcEmpresa().val(),
                            CodigoProyecto: base.Control.SlcProyecto().val(),
                            CodigoDepartamento: base.Control.SlcDepartamento().val(),
                            CodigoArea: base.Control.SlcArea().val(),
                            FechaNacimientoString: base.Control.DtpFechaNacimiento().val(),
                            CodigoGenero: base.Control.SlcGenero().val(),
                            CodigoPuestoTrabajo: base.Control.SlcPuestoTrabajo().val(),
                            CodigoTipoDocumento: base.Control.SlcTipoDocumento().val(),
                            NumeroDocumento: base.Control.TxtNumeroDocumento().val(),
                            CodigoTipoPlanilla: base.Control.SlcTipoPlanilla().val(),
                            CodigoEstadoCivil: base.Control.SlcEstadoCivil().val(),
                            CodigoGradoInstruccion: base.Control.SlcGradoInstruccion().val(),
                            SistemaTrabajo: base.Control.TxtSistemaTrabajo().val(),
                            TurnoMixto: base.Control.SlcTurnoMixto().val(),
                            CodigoPais: base.Control.SlcPais().val(),
                            NombreDepartamento: base.Control.TxtNombreDepartamento().val(),
                            ExperienciaNegocioAnios: base.Control.TxtExperienciaLaboralNegocioAnios().val(),
                            ExperienciaNegocioMeses: base.Control.TxtExperienciaLaboralNegocioMeses().val(),
                            NombreProvincia: base.Control.TxtNombreProvincia().val(),
                            TiempoProyectoAnios: base.Control.TxtTiempoProyectoAnios().val(),
                            TiempoProyectoMeses: base.Control.TxtTiempoProyectoMeses().val(),
                            CorreoElectronico: base.Control.TxtCorreoElectronico().val(),
                            TiempoContratistaAnios: base.Control.TxtTiempoEmpresaContratistaAnios().val(),
                            TiempoContratistaMeses: base.Control.TxtTiempoEmpresaContratistaMeses().val(),
                            CodigoUsuarioRed: base.Control.TxtCodigoUsuarioRed().val(),
                            ExperienciaPuestoAnios: base.Control.TxtExperienciaLaboralPuestoTrabajoAnios().val(),
                            ExperienciaPuestoMeses: base.Control.TxtExperienciaLaboralPuestoTrabajoMeses().val(),
                            CodigoEstadoColaborador: base.Control.SlcEstadoColaborador().val(),
                            IndicadorActivo: base.Control.ChkIndicadorActivo().val(),
                            IndicadorPermanente: base.Control.ChkIndicadorPermanente().val(),
                            IndicadorPermiteCierre: base.Control.ChkIndicadorPermiteCierre().val()
                        };
                        base.Ajax.AjaxGrabar.submit();
                    }
                });
            } else {
                $("#frmColaboradorPrincipalSummaryErrorMessage").empty();
                $("#frmColaboradorPrincipalSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },        
    };    
    base.AjaxSuccess = {
        AjaxGrabarSuccess: function (data) {
            if (data.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito });
                if (base.Event.GrabarColaboradorSuccess != null) {
                    base.Event.BtnCancelarClick();
                    base.Event.GrabarColaboradorSuccess();
                }
            } else {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
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
    };
    base.Ajax = {
        AjaxGrabar: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Actions.RegistrarColaborador,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxGrabarSuccess
        }),
        AjaxBuscarDepartamento: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Actions.BuscarDepartamento,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxBuscarDepartamentoSuccess
        }),
        AjaxBuscarArea: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Actions.BuscarArea,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxBuscarAreaSuccess
        }),
    };
}