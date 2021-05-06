/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 19102017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.IngresoExpediente.Index');
Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.IngresoExpediente.Index.Controller = function () {
    var base = this;

    base.Ini = function () {
        base.Control.Formulario = Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.IngresoExpediente.Models.Formulario;
        base.Control.FormularioModeloColaborador = base.Control.Formulario.Colaborador;

        base.Control.BtnRegresarBandejaGestionLesiones().off('click');
        base.Control.BtnRegresarBandejaGestionLesiones().on('click', base.Event.BtnRegresarBandejaGestionLesionesClick);

        base.Control.BtnAgregarEmpresaColaborador().off('click');
        base.Control.BtnAgregarEmpresaColaborador().on('click', base.Event.BtnAgregarEmpresaColaboradorClick);
        
        base.Control.BtnGuardarExpediente().off('click');
        base.Control.BtnGuardarExpediente().on('click', base.Event.BtnGuardarExpedienteClick); 
        base.Control.BtnGuardarCierre().off('click');
        base.Control.BtnGuardarCierre().on('click', base.Event.BtnGuardarCierreClick);
        base.Control.BtnBuscarNumeroRegistro().off('click');
        base.Control.BtnBuscarNumeroRegistro().on('click', base.Event.BtnBuscarNumeroRegistroClick);


        base.Control.BtnGuardarInformacionColaborador().off('click');
        base.Control.BtnGuardarInformacionColaborador().on('click', base.Event.BtnGuardarInformacionColaboradorClick);
        
        base.Control.BtnGuardarInformacionGeneral().off('click');
        base.Control.BtnGuardarInformacionGeneral().on('click', base.Event.BtnGuardarInformacionGeneralClick);

        base.Control.BtnGuardarInformacionIncidente().off('click');
        base.Control.BtnGuardarInformacionIncidente().on('click', base.Event.BtnGuardarInformacionIncidenteClick);
        
        
        base.Control.BtnCancelarInformacionColaborador().off('click');
        base.Control.BtnCancelarInformacionColaborador().on('click', base.Event.BtnCancelarInformacionColaboradorClick);
        base.Control.BtnCancelarInformacionGeneral().off('click');
        base.Control.BtnCancelarInformacionGeneral().on('click', base.Event.BtnCancelarInformacionGeneralClick);
        base.Control.BtnCancelarInformacionIncidente().off('click');
        base.Control.BtnCancelarInformacionIncidente().on('click', base.Event.BtnCancelarInformacionIncidenteClick);

        base.Control.SlcProyecto().off('change');
        base.Control.SlcProyecto().on('change', base.Event.SlcProyectoChange);

        base.Control.DlgFormularioColaborador = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.ObtenerEmpresaColaborador
        });

        base.Control.ValidadorColaborador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmInformacionColaborador(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraInformacionColaborador()
        });

        base.Control.ValidadorInformacionGeneral = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmInformacionGeneral(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,        
        });

        base.Control.ValidadorIncidente = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmInformacionIncidente(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
        });
        
        base.Control.ValidadorCierre = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmCierre(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
        });


        base.Function.CrearGridInformacionGeneralLesion();
        base.Function.CrearGridInformacionIncidente();

        $('#cartTabsIngresoExpediente').on('shown.bs.tab', function (e) {
            var target = $(e.target).attr("href");

            if (target == "#tabInformacionGeneral") {                
                if (base.Control.Formulario.ExpedienteMedico.CodigoExpediente != null) {
                    $('#divInformacionGeneral').removeClass('hidden'); 
                    $('#divInformacionIncidente').removeClass('hidden');

                    base.Event.BtnLoadInformacionIncidenteClick();
                    base.Event.BtnLoadInformacionGeneralLesionClick();
                }
            }
        });
    };

    base.Control = {
        BtnRegresarBandejaGestionLesiones: function () { return $('#btnRegresarBandejaGestionLesiones'); },
        DlgFormularioColaborador: null,
        BtnAgregarEmpresaColaborador: function () { return $('#btnAgregarEmpresaColaborador'); },
        BtnGuardarExpediente: function () { return $('#btnGuardarExpediente'); },
        BtnGuardarInformacionColaborador: function () { return $('#btnGuardarInformacionColaborador'); },
        BtnGuardarInformacionGeneral: function () { return $('#btnGuardarInformacionGeneral'); },
        BtnGuardarInformacionIncidente: function () { return $('#btnGuardarInformacionIncidente'); },
        BtnGuardarCierre: function () { return $('#btnGuardarCierre'); },
        BtnBuscarNumeroRegistro: function () { return $('#btnBuscarNumeroRegistro'); },

        BtnCancelarInformacionColaborador: function () { return $('#btnCancelarInformacionColaborador'); },
        BtnCancelarInformacionGeneral: function () { return $('#btnCancelarInformacionGeneral'); },
        BtnCancelarInformacionIncidente: function () { return $('#btnCancelarInformacionIncidente'); },        

        TxtNumeroExpedienteTecnico: function () { return $('#txtNumeroExpedienteTecnico'); },
        TxtNombresyApellidosColaborador: function () { return $('#txtNombresyApellidosColaborador'); },
        TxtTipoDocumentoColaborador: function () { return $('#txtTipoDocumentoColaborador'); },
        TxtNumeroDocumentoColaborador: function () { return $('#txtNumeroDocumentoColaborador'); },
        TxtFechaNacimientoColaborador: function () { return $('#txtFechaNacimientoColaborador'); },
        TxtEdadColaborador: function () { return $('#txtEdadColaborador'); },
        TxtGeneroColaborador: function () { return $('#txtGeneroColaborador'); },
        TxtNombreEmpresaColaborador: function () { return $('#txtNombreEmpresaColaborador'); },
        TxtNombrePuestoTrabajoColaborador: function () { return $('#txtNombrePuestoTrabajoColaborador'); },
        TxtNombreProyectoColaborador: function () { return $('#txtNombreProyectoColaborador'); },
        TxtTipoPlanillaColaborador: function () { return $('#txtTipoPlanillaColaborador'); },
        TxtComentario: function () { return $('#txtComentario'); },
        TxtComentarioLesion: function () { return $('#txtComentarioLesion'); },
        TxtDescripcionRestriccion: function () { return $('#txtDescripcionRestriccion'); },
        TxtComentarioCierre: function () { return $('#txtComentarioCierre'); },
        TxtComentarioReabierto: function () { return $('#txtComentarioReabierto'); },

        FormularioModeloColaborador: null,
        FrmInformacionColaborador: function () { return $('#frmInformacionColaborador'); },
        FrmInformacionGeneral: function () { return $('#frmInformacionGeneral'); },
        FrmInformacionIncidente: function () { return $('#frmInformacionIncidente'); },
        FrmCierre: function () { return $('#frmCierre'); },
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),

        SlcProyecto: function () { return $('#slcProyecto'); },
        SlcRestriccionMedica: function () { return $('#slcRestriccionMedica'); },
        SlcLesionesAnteriores: function () { return $('#slcLesionesAnteriores'); },        
        SlcParteLesionada: function () { return $('#slcParteLesionada'); },
        SlcNaturalezaLesion: function () { return $('#slcNaturalezaLesion'); },
        SlcMecanismoLesion: function () { return $('#slcMecanismoLesion'); },
        SlcEstadoExpedienteMedico: function () { return $('#slcEstadoExpedienteMedico'); },

        HddCodigoExpedienteMedicoRestriccion: function () { return $('#hddCodigoExpedienteMedicoRestriccion'); },
        HddCodigoExpedienteMedicoLesion: function () { return $('#hddCodigoExpedienteMedicoLesion'); },
        HdnCodigoColaborador: function () { return $('#hdnCodigoColaborador'); },
        ValidadorColaborador: null,
        ValidadorIncidente: null,
        ValidadorCierre: null,

        //Incidente
        TxtNumeroRegistroIncidente: function () { return $('#txtNumeroRegistroIncidente'); },
        TxtDescripcionProyectoIncidente: function () { return $('#txtDescripcionProyectoIncidente'); },
        TxtDescripcionPaisIncidente: function () { return $('#txtDescripcionPaisIncidente'); },
        TxtFechaIncidente: function () { return $('#txtFechaIncidente'); },
        TxtHoraIncidente: function () { return $('#txtHoraIncidente'); },
        TxtTituloIncidente: function () { return $('#txtTituloIncidente'); },
        HddCodigoPaisIncidente: function () { return $('#hddCodigoPaisIncidente'); },
    };

    base.Event = {
        BtnLoadInformacionGeneralLesionClick: function () {
            'use strict'
            base.Control.GrdInformacionGeneralLesion.Load({
                CodigoExpediente: base.Control.Formulario.ExpedienteMedico.CodigoExpediente
            });
        },
        BtnLoadInformacionIncidenteClick: function () {
            'use strict'
            base.Control.GrdInformacionIncidente.Load({
                CodigoExpediente: base.Control.Formulario.ExpedienteMedico.CodigoExpediente
            });
        },
        BtnRegresarBandejaGestionLesionesClick: function () {
            location.href = Pe.ElectroPeru.SGI.Presentacion.Base.Actions.GestionBandejaLesiones;
            //window.history.go(-1);
        },
        BtnAgregarEmpresaColaboradorClick: function () {
            base.Control.DlgFormularioColaborador.Show(false, [], {});
        },
        ObtenerEmpresaColaborador: function (colaboradorSeleccionado) {
            if (colaboradorSeleccionado.length > 0) {                
                base.Event.SetValuesFormularioColaborador(colaboradorSeleccionado[0]);
                base.Control.FormularioModeloColaborador = colaboradorSeleccionado[0];
            }
            else {
                base.Event.SetValuesFormularioColaborador('');
                base.Control.FormularioModeloColaborador = null;
            }
        },
        SetValuesFormularioColaborador: function (value) {
            base.Control.HdnCodigoColaborador().val(value != '' ? value.CodigoColaborador : '');
            base.Control.TxtNombresyApellidosColaborador().val(value != '' ? value.NombreCompletoColaborador : '');
            base.Control.TxtTipoDocumentoColaborador().val(value != '' ? value.DescripcionTipoDocumento : '');
            base.Control.TxtNumeroDocumentoColaborador().val(value != '' ? value.NumeroDocumento : '');
            base.Control.TxtFechaNacimientoColaborador().val(value != '' ? value.FechaNacimientoString : '');
            base.Control.TxtEdadColaborador().val(value != '' ? value.Edad : '');
            base.Control.TxtGeneroColaborador().val(value != '' ? value.DescripcionGenero : '');
            base.Control.TxtNombreEmpresaColaborador().val(value != '' ? value.NombreEmpresa : '');
            base.Control.TxtNombrePuestoTrabajoColaborador().val(value != '' ? value.NombrePuestoTrabajo : '');
            base.Control.TxtNombreProyectoColaborador().val(value != '' ? value.NombreProyecto : '');
            base.Control.TxtTipoPlanillaColaborador().val(value != '' ? value.CodigoTipoPlanilla : '');
        },
        BtnGuardarCierreClick: function () { 
            if (base.Control.ValidadorCierre.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.IngresoExpediente.Resource.MensajeCierreExpedienteMedico,
                    onAccept: function () {
                        base.Ajax.AjaxActualizarEstadoExpedienteMedico.data = {
                            CodigoExpediente: base.Control.Formulario.ExpedienteMedico.CodigoExpediente,
                            EstadoExpediente: base.Control.SlcEstadoExpedienteMedico().val(),
                            ComentarioCierre: base.Control.TxtComentarioCierre().val(),
                            ComentarioReabierto: base.Control.TxtComentarioReabierto().val(),
                        };
                        base.Ajax.AjaxActualizarEstadoExpedienteMedico.submit();
                    }
                });
            } else {
                $("#frmCierreSummaryErrorMessage").empty();
                $("#frmCierreSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },
        BtnBuscarNumeroRegistroClick: function () {
            if (base.Control.TxtNumeroRegistroIncidente().val() != '' && $.trim(base.Control.TxtNumeroRegistroIncidente().val()) != ''
                && base.Control.SlcProyecto().val() != '' && base.Control.SlcProyecto().val() != null) {
                base.Ajax.AjaxBuscarIncidente.data = {
                    NumeroRecord: base.Control.TxtNumeroRegistroIncidente().val(),
                    CodigoProyecto: base.Control.SlcProyecto().val()
                };
                base.Ajax.AjaxBuscarIncidente.submit();
            }
        },
        BtnGuardarExpedienteClick: function () {
            if ((base.Control.SlcLesionesAnteriores().val() != '' && base.Control.SlcLesionesAnteriores().val() != null)
                || $.trim(base.Control.TxtComentarioLesion().val()) != '') {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxActualizarExpedienteMedico.data = {
                            CodigoExpediente: base.Control.Formulario.ExpedienteMedico.CodigoExpediente,
                            LesionAnterior: base.Control.SlcLesionesAnteriores().val(),
                            ComentarioLesion: base.Control.TxtComentarioLesion().val(),
                        };
                        base.Ajax.AjaxActualizarExpedienteMedico.submit();
                    }
                });
            }
        },
        BtnGuardarInformacionColaboradorClick: function () {       
            if (base.Control.ValidadorColaborador.isValid()) {                
                base.Control.Mensaje.Confirmation({                    
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {                        
                        base.Ajax.AjaxRegistrarExpedienteMedico.data = {
                            CodigoExpediente: base.Control.Formulario.ExpedienteMedico.CodigoExpediente,
                            CodigoProyecto: base.Control.SlcProyecto().val(),
                            DescripcionProyectoIncidente: base.Control.TxtDescripcionProyectoIncidente().val(),
                            NumeroRegistroIncidente: base.Control.TxtNumeroRegistroIncidente().val(),
                            CodigoPais: base.Control.HddCodigoPaisIncidente().val(),
                            DescripcionPaisIncidente: base.Control.TxtDescripcionPaisIncidente().val(),
                            FechaIncidente: base.Control.TxtFechaIncidente().val() + ' ' + base.Control.TxtHoraIncidente().val(),
                            TituloIncidente: base.Control.TxtTituloIncidente().val(),
                            CodigoColaborador: base.Control.HdnCodigoColaborador().val(),
                            Nombres: base.Control.FormularioModeloColaborador.Nombres,
                            ApellidoPaterno: base.Control.FormularioModeloColaborador.ApellidoPaterno,
                            ApellidoMaterno: base.Control.FormularioModeloColaborador.ApellidoMaterno,
                            NombreEmpresaColaborador: base.Control.FormularioModeloColaborador.NombreEmpresa,
                            DescripcionTipoDocumento: base.Control.FormularioModeloColaborador.DescripcionTipoDocumento,
                            NombrePuestoTrabajo: base.Control.FormularioModeloColaborador.NombrePuestoTrabajo,
                            NombreProyectoColaborador: base.Control.FormularioModeloColaborador.NombreProyecto,
                            CodigoEmpresaColaborador: base.Control.FormularioModeloColaborador.CodigoEmpresa,
                            CodigoProyectoColaborador: base.Control.FormularioModeloColaborador.CodigoProyecto,
                            Edad: base.Control.FormularioModeloColaborador.Edad,
                        };
                        base.Ajax.AjaxRegistrarExpedienteMedico.submit();
                    }        
                });
            } else {
                $("#frmInformacionColaboradorSummaryErrorMessage").empty();
                $("#frmInformacionColaboradorSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },
        BtnGuardarInformacionGeneralClick: function () { 
            if (base.Control.ValidadorInformacionGeneral.isValid()) {
                base.Control.Mensaje.Confirmation({                    
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarExpedienteMedicoRestriccion.data = {
                            CodigoExpediente: base.Control.Formulario.ExpedienteMedico.CodigoExpediente,
                            CodigoExpedienteMedicoRestriccion: base.Control.HddCodigoExpedienteMedicoRestriccion().val(),
                            CodigoRestriccion: base.Control.SlcRestriccionMedica().val(),
                            Descripcion: base.Control.TxtDescripcionRestriccion().val(),
                        };
                        base.Ajax.AjaxRegistrarExpedienteMedicoRestriccion.submit();
                    }
                });
            } else {
                $("#frmInformacionGeneralSummaryErrorMessage").empty();
                $("#frmInformacionGeneralSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },
        SetValuesFormularioInformacionGeneral: function (value) {            
            base.Control.SlcRestriccionMedica().val(value != '' ? value.CodigoRestriccion : '');
            base.Control.TxtDescripcionRestriccion().val(value != '' ? value.Descripcion : '');
            base.Control.HddCodigoExpedienteMedicoRestriccion().val(value != '' ? value.CodigoExpedienteMedicoRestriccion : '');
        },
        BtnGuardarInformacionIncidenteClick: function(){
            if (base.Control.ValidadorIncidente.isValid()) {
                base.Control.Mensaje.Confirmation({                    
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarExpedienteMedicoLesion.data = {
                            CodigoExpediente: base.Control.Formulario.ExpedienteMedico.CodigoExpediente,
                            CodigoExpedienteMedicoLesion: base.Control.HddCodigoExpedienteMedicoLesion().val(),
                            ParteLesionada: base.Control.SlcParteLesionada().val(),
                            NaturalezaLesion: base.Control.SlcNaturalezaLesion().val(),
                            Mecanismo: base.Control.SlcMecanismoLesion().val(),
                            Comentario: base.Control.TxtComentario().val(),
                        };
                        base.Ajax.AjaxRegistrarExpedienteMedicoLesion.submit();
                    }
                });
            } else {
                $("#frmInformacionIncidenteSummaryErrorMessage").empty();
                $("#frmInformacionIncidenteSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },
        BtnCancelarInformacionGeneralClick: function () {
            base.Event.SetValuesFormularioInformacionGeneral('');
        },
        BtnCancelarInformacionColaboradorClick: function () {
            base.Event.SetValuesFormularioColaborador('');
        },
        BtnCancelarInformacionIncidenteClick: function() {
            base.Event.SetValuesFormularioInformacionIncidente('');
        },
        SlcProyectoChange: function(){
            base.Event.AsignarValoresFormularioIncidente('');
            base.Control.TxtNumeroRegistroIncidente().val('');
        },
        SetValuesFormularioInformacionIncidente: function (value) {
            base.Control.SlcParteLesionada().val(value != '' ? value.ParteLesionada : '');
            base.Control.SlcNaturalezaLesion().val(value != '' ? value.NaturalezaLesion : '');
            base.Control.SlcMecanismoLesion().val(value != '' ? value.Mecanismo : '');
            base.Control.TxtComentario().val(value != '' ? value.Comentario : '');
            base.Control.HddCodigoExpedienteMedicoLesion().val(value != '' ? value.CodigoExpedienteMedicoLesion : '');
        },
        AjaxRegistrarExpedienteMedicoSuccess: function (resultado) {
            if (resultado.IsSuccess && resultado.Result.CodigoColaborador != null)
            {
                base.Control.Formulario.ExpedienteMedico.NumeroExpediente = resultado.Result.NumeroExpediente;
                base.Control.Formulario.ExpedienteMedico.CodigoExpediente = resultado.Result.CodigoExpediente;
                base.Control.TxtNumeroExpedienteTecnico().val(resultado.Result.NumeroExpediente);
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
            }
            else
            {
                base.Control.TxtNumeroExpedienteTecnico().val('');
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxRegistrarExpedienteMedicoLesionSuccess: function (resultado) {
            if (resultado.Result == "1") {
                base.Event.BtnLoadInformacionGeneralLesionClick();
                base.Event.SetValuesFormularioInformacionIncidente('');
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });                
            }
            else if (resultado.Result == "-2") {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.IngresoExpediente.Resource.MensajeExisteRegistroDuplicado
                });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxRegistrarExpedienteMedicoRestriccionSuccess: function (resultado) {            
            if (resultado.Result == "1") {
                base.Event.BtnLoadInformacionIncidenteClick();
                base.Event.SetValuesFormularioInformacionGeneral('');
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
            }
            else if (resultado.Result == "-2") {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.IngresoExpediente.Resource.MensajeExisteRegistroDuplicado
                });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxActualizarExpedienteMedicoSuccess: function (resultado) {
            if (resultado.Result == "1") {
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
        AjaxBuscarIncidenteSuccess: function (resultado) {
            if (resultado.Result != null && resultado.Result.length > 0) {                
                base.Event.AsignarValoresFormularioIncidente(resultado.Result[0]);
            }
            else {
                base.Event.AsignarValoresFormularioIncidente('');
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.IngresoExpediente.Resource.MensajeValidacionIncidente
                });
            }
        },
        AsignarValoresFormularioIncidente: function (value) {
            base.Control.TxtDescripcionProyectoIncidente().val(value != '' ? value.NombreProyecto : '');
            base.Control.HddCodigoPaisIncidente().val(value != '' ? value.CodigoPais : '');
            base.Control.TxtDescripcionPaisIncidente().val(value != '' ? value.NombrePaisProyecto : '');
            base.Control.TxtFechaIncidente().val(value != '' ? value.FechaRecordString : '');
            base.Control.TxtHoraIncidente().val((value != '' ? value.HoraString : '') + ':' + (value != '' ? value.MinutoString : ''));
            base.Control.TxtTituloIncidente().val(value != '' ? value.Titulo : '');
        },
        BtnGridEditInformacionLesionClick: function (row, data) {
            base.Event.SetValuesFormularioInformacionIncidente(data);
        },
        BtnGridDeleteInformacionLesionClick: function (row, data) {
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarExpedienteMedicoLesion.data = data;
                    base.Ajax.AjaxEliminarExpedienteMedicoLesion.submit();
                }
            });
        },
        BtnGridEditInformacionIncidenteClick: function (row, data) {
            base.Event.SetValuesFormularioInformacionGeneral(data);
        },
        BtnGridDeleteInformacionIncidenteClick: function (row, data) {
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarExpedienteMedicoRestriccion.data = data;
                    base.Ajax.AjaxEliminarExpedienteMedicoRestriccion.submit();
                }
            });
        },
        AjaxEliminarExpedienteMedicoLesionSuccess: function (resultado) {
            'use strict'
            if (resultado.Result >= 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
                base.Event.BtnLoadInformacionGeneralLesionClick();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxEliminarExpedienteMedicoRestriccionSuccess: function (resultado) {
            'use strict'
            if (resultado.Result >= 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
                base.Event.BtnLoadInformacionIncidenteClick();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        BtnValidarEstadoAtencion: function (data, type, full) {            
            if (base.Control.Formulario.EstadoAtencion != Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.IngresoExpediente.DatosConstantes.AtencionCerrado)
                return true;
            else
                return false;
        },
        AjaxActualizarEstadoExpedienteMedicoSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        }
    };

    base.Ajax = {
        AjaxRegistrarExpedienteMedico: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.IngresoExpediente.Actions.RegistrarExpedienteMedico,
            autoSubmit: false,
            onSuccess: base.Event.AjaxRegistrarExpedienteMedicoSuccess
        }),
        AjaxRegistrarExpedienteMedicoLesion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.IngresoExpediente.Actions.RegistrarExpedienteMedicoLesion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxRegistrarExpedienteMedicoLesionSuccess
        }), 
        AjaxRegistrarExpedienteMedicoRestriccion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.IngresoExpediente.Actions.RegistrarExpedienteMedicoRestriccion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxRegistrarExpedienteMedicoRestriccionSuccess
        }),
        AjaxBuscarIncidente: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.IngresoExpediente.Actions.AjaxBuscarIncidente,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarIncidenteSuccess
        }),
        AjaxActualizarExpedienteMedico: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.IngresoExpediente.Actions.ActualizarExpedienteMedico,
            autoSubmit: false,
            onSuccess: base.Event.AjaxActualizarExpedienteMedicoSuccess
        }), 
        AjaxEliminarExpedienteMedicoLesion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.IngresoExpediente.Actions.EliminarExpedienteMedicoLesion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarExpedienteMedicoLesionSuccess
        }), 
        AjaxEliminarExpedienteMedicoRestriccion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.IngresoExpediente.Actions.EliminarExpedienteMedicoRestriccion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarExpedienteMedicoRestriccionSuccess
        }),
        AjaxActualizarEstadoExpedienteMedico: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.IngresoExpediente.Actions.ActualizarEstadoExpedienteMedico,
            autoSubmit: false,
            onSuccess: base.Event.AjaxActualizarEstadoExpedienteMedicoSuccess
        }),
    };

    base.Function = {
        CrearGridInformacionGeneralLesion: function () {
            var columns = new Array();
            columns.push({
                data: 'DescripcionParteLesionada',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.IngresoExpediente.Resource.GridParteCuerpoLesionada,
                width: "20%"
            });
            columns.push({
                data: 'DescripcionNaturalezaLesion',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.IngresoExpediente.Resource.GridNaturalezaLesion,
                width: "20%"
            });
            columns.push({
                data: 'DescripcionMecanismo',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.IngresoExpediente.Resource.GridMecanismo,
                width: "20%"
            });
            columns.push({
                data: 'Comentario',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.IngresoExpediente.Resource.GridComentario,
                width: "20%"
            });
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "3%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, validateRender: base.Event.BtnValidarEstadoAtencion, event: { on: 'click', callBack: base.Event.BtnGridEditInformacionLesionClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.BtnValidarEstadoAtencion, event: { on: 'click', callBack: base.Event.BtnGridDeleteInformacionLesionClick } }
                ]
            });
            base.Control.GrdInformacionGeneralLesion = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdInformacionGeneralLesion',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.IngresoExpediente.Actions.BuscarExpedienteMedicoLesion,
                    source: 'Result'
                }
            });
        },
        CrearGridInformacionIncidente: function () {
            var columns = new Array();
            columns.push({
                data: 'DescripcionRestriccion',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.IngresoExpediente.Resource.GridRestriccionMedica,
                width: "20%"
            });
            columns.push({
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.IngresoExpediente.Resource.GridDescripcion,
                width: "20%"
            });
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "3%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, validateRender: base.Event.BtnValidarEstadoAtencion, event: { on: 'click', callBack: base.Event.BtnGridEditInformacionIncidenteClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.BtnValidarEstadoAtencion, event: { on: 'click', callBack: base.Event.BtnGridDeleteInformacionIncidenteClick } }
                ]
            });
            base.Control.GrdInformacionIncidente = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdInformacionIncidente',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.IngresoExpediente.Actions.BuscarExpedienteMedicoRestriccion,
                    source: 'Result'
                }
            });
        },
        ValidacionExtraInformacionColaborador: function () {
            var validaciones = new Array();
            validaciones.push({
                Event: function () {
                    var resultado = true;
                    if (base.Control.HdnCodigoColaborador().val() == null || base.Control.HdnCodigoColaborador().val() == '') {
                        resultado = false;
                    }
                    if (resultado) {
                        base.Control.TxtNombresyApellidosColaborador().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtNombresyApellidosColaborador().attr('class', 'form-control hasError');
                    }
                    return resultado;
                }
            });
            validaciones.push({
                Event: function () {
                    var resultado = true;
                    if (base.Control.SlcProyecto().val() == null || base.Control.SlcProyecto().val() == '') {
                        resultado = false;
                    }
                    if (resultado) {
                        base.Control.SlcProyecto().attr('class', 'form-control');
                    }
                    else {
                        base.Control.SlcProyecto().attr('class', 'form-control hasError');
                    }
                    return resultado;
                }
            });
            return validaciones;
        }
    };
};