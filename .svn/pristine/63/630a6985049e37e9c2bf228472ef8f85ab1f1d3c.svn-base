ns('Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarEjecucion');
Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarEjecucion.Controller = function (opts) {
    var base = this;
    base.Ini = function () {              
        base.Control.BtnBuscarInstructor().on('click', base.Event.BtnBuscarInstructorClick);       
        base.Control.BtnGrabarAgregarEjecucion().off('click');
        base.Control.BtnGrabarAgregarEjecucion().on('click', base.Event.BtnGrabarEjecucionClick);
        base.Control.BtnCancelar().off('click');
        base.Control.BtnCancelar().on('click', base.Event.BtnCancelarClick);

        if (opts != null && opts.AceptarSuccess != null && opts.AceptarSuccess)
            base.Event.AceptarSuccess = opts.AceptarSuccess;

        base.Control.DlgFormularioInstructor = new Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioAgregarPersonasModal.Controller({
            GrabarColaboradorPersonaProyectoSuccess: base.Event.AsignarValoresInstructorClick
        });
        base.Control.SlcProyecto().off('change');
        base.Control.SlcProyecto().on('change', base.Event.SlcProyectoChange);
        base.Control.SlcEquipo().off('change');
        base.Control.SlcEquipo().on('change', base.Event.SlcEquipoChange);
        base.Control.SlcProceso().off('change');
        base.Control.SlcProceso().on('change', base.Event.SlcProcesoChange);
        base.Control.SlcHoraInicio().off('change');
        base.Control.SlcHoraInicio().on('change', base.Event.SlcHoraInicioChange);
        base.Control.SlcHoraFin().off('change');
        base.Control.SlcHoraFin().on('change', base.Event.SlcHoraFinChange);
        
        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmAgregarEjecucion(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraEjecucionModal()
        });
    };
    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        CodigoEjecucion: null,
        Validador: null,
        FrmAgregarEjecucion: function () { return $('#frmAgregarEjecucion'); },        
        DlgFormularioInstructor: null,
        ArrayEquipos: [],
        ArrayProcesos: [],
        DtpFechaHoraInicio: function () { return $('#dtpFechaHoraInicio'); },
        DtpFechaHoraFin: function () { return $('#dtpFechaHoraFin'); },
        BtnBuscarInstructor: function () { return $('#btnBuscarInstructor'); },        
        SlcProyecto: function () { return $('#slcProyecto'); },
        SlcEquipo: function () { return $('#slcEquipo'); },
        SlcProceso: function () { return $('#slcProceso'); },
        SlcSubProceso: function(){ return $('#slcSubProceso'); },
        TxtEquipoDescripcion: function () { return $('#txtEquipoDescripcion'); },

        TxtCodigoInstructor: function () { return $('#txtCodigoInstructor'); },
        HdnCodigoInstructor: function () { return $('#hdnCodigoInstructor'); },

        SlcHoraInicio: function () { return $('#slcHoraInicio'); },        
        SlcHoraFin: function () { return $('#slcHoraFin'); },
        SlcMinutoInicio: function () { return $('#slcMinutoInicio'); },
        SlcMinutoFin: function () { return $('#slcMinutoFin'); },
        
        BtnGrabarAgregarEjecucion: function () { return $('#btnGrabarAgregarEjecucion'); },
        BtnCancelar: function () { return $('#btnCancelarAgregarEjecucion'); },
    };
    base.Event = {
        SlcHoraInicioChange: function () {
            'use strict'            
        },
        SlcHoraFinChange: function () {
            'use strict'            
        },
        AsignarValoresInstructorClick: function (objColaborador) {
            'use strict'
            base.Control.TxtCodigoInstructor().val(objColaborador[0].NombreCompletoColaborador);
            base.Control.HdnCodigoInstructor().val(objColaborador[0].CodigoColaborador);
        },        
        ObtenerFamiliaEquipo: function () {
            'use strict'            
            for (var i = 0; i < base.Control.ArrayEquipos.length; i++) {
                if (base.Control.SlcEquipo().val() == base.Control.ArrayEquipos[i].CodigoEquipo) {
                    base.Control.TxtEquipoDescripcion().val(base.Control.ArrayEquipos[i].DescripionFamiliaEquipo);
                    break;
                }
            }
        },        
        BtnBuscarInstructorClick: function () {
            'use strict'
            base.Control.DlgFormularioInstructor.Show(false, [], {}, false);
        },        
        BtnGrabarEjecucionClick: function(){
            'use strict'
            if (base.Control.Validador.isValid()) {                        
                base.Ajax.AjaxGrabarEjecucion.data = {
                    CodigoEjecucion: base.Control.CodigoEjecucion,
                    CodigoProyecto: base.Control.SlcProyecto().val(),
                    CodigoEquipo: base.Control.SlcEquipo().val(),
                    CodigoProceso: base.Control.SlcProceso().val(),
                    CodigoSubProceso: base.Control.SlcSubProceso().val(),
                    CodigoInstructor: base.Control.HdnCodigoInstructor().val()                    
                };
                base.Ajax.AjaxGrabarEjecucion.submit();
            }
            else
            {
                $("#frmAgregarEjecucionSummaryErrorMessage").empty();
                $("#frmAgregarEjecucionSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },
        SlcProyectoChange: function () {
            'use strict'
            base.Control.TxtEquipoDescripcion().val('');
            base.Control.SlcEquipo().empty();
            base.Control.SlcEquipo().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
            base.Control.SlcProceso().empty();
            base.Control.SlcProceso().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
            base.Control.SlcSubProceso().empty();
            base.Control.SlcSubProceso().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
            if (base.Control.SlcProyecto().val() != null && base.Control.SlcProyecto().val() != '') {
                base.Control.TxtEquipoDescripcion().val('');
                base.Ajax.AjaxBuscarEquipos.data = {
                    CodigoProyecto: base.Control.SlcProyecto().val()
                };
                base.Ajax.AjaxBuscarEquipos.submit();
            }
        },
        SlcEquipoChange: function() {
            'use strict'
            base.Control.SlcProceso().empty();
            base.Control.SlcProceso().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
            base.Control.SlcSubProceso().empty();
            base.Control.SlcSubProceso().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
            if (base.Control.SlcEquipo().val() != null && base.Control.SlcEquipo().val() != '') {
                base.Event.ObtenerFamiliaEquipo();
                base.Ajax.AjaxBuscarProcesos.data = {
                    CodigoProyecto: base.Control.SlcProyecto().val(),
                    CodigoEquipo: base.Control.SlcEquipo().val()                    
                };
                base.Ajax.AjaxBuscarProcesos.submit();
            }
            else
            {
                base.Control.TxtEquipoDescripcion().val('');
            }
        },
        SlcProcesoChange: function () {
            'use strict'
            base.Control.SlcSubProceso().empty();
            base.Control.SlcSubProceso().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
            if (base.Control.SlcProceso().val() != null && base.Control.SlcProceso().val() != '') {
                base.Ajax.AjaxBuscarSubProcesos.data = {
                    CodigoProyecto: base.Control.SlcProyecto().val(),
                    CodigoEquipo: base.Control.SlcEquipo().val(),
                    CodigoProceso: base.Control.SlcProceso().val()
                };
                base.Ajax.AjaxBuscarSubProcesos.submit();
            }
        },        
        AjaxBuscarEquipoSuccess: function (resultado) {
            base.Control.ArrayEquipos = resultado.Result;
            
            $.each(resultado.Result, function (index, value) {                
                base.Control.SlcEquipo().append(new Option(value.DescripcionEquipo + " - " + value.CodigoDescripcionEquipo, value.CodigoEquipo));
            });
        },
        AjaxBuscarProcesosSuccess: function (resultado) {            
            base.Control.ArrayProcesos = resultado.Result;
            $.each(resultado.Result, function (index, value) {
                base.Control.SlcProceso().append(new Option(value.NombreProceso, value.CodigoProceso));
            });
        },
        AjaxBuscarSubProcesosSuccess: function (resultado) {            
            $.each(resultado.Result, function (index, value) {                
                base.Control.SlcSubProceso().append(new Option(value.NombreSubProceso, value.CodigoSubProceso));
            });
        },
        AjaxGrabarEjecucionSuccess: function (resultado) {
            if (resultado.Result == 1) {
                base.Control.DlgForm.divDialog.close();
                if (base.Event.AceptarSuccess != null) {
                    base.Event.AceptarSuccess();
                }
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
            }
            else if (resultado.Result == 2) {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.MensajeEjecucionRegistrada });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
         
            }
        },        
    };

    base.Show = function (opts) {      
        base.Control.CodigoEjecucion = opts.CodigoEjecucion;
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.EtiquetaTituloFormularioEjecucion,
            size: "size-wide",
            close: function () {
            }
        });

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.Actions.FormularioAgregarEjecucion,
            onSuccess: function () {
                base.Ini();
            },
            data: {
                CodigoEjecucion: base.Control.CodigoEjecucion
            }
        });
    };

    base.Ajax = {
        AjaxBuscarEquipos: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.Actions.BuscarCombosEjecucion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarEquipoSuccess
        }),
        AjaxBuscarProcesos: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.Actions.BuscarCombosEjecucion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarProcesosSuccess
        }),
        AjaxBuscarSubProcesos: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.Actions.BuscarCombosEjecucion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarSubProcesosSuccess
        }),
        AjaxGrabarEjecucion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.Actions.RegistrarEjecucion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarEjecucionSuccess
        }),                        
    };

    base.Function = {
        ValidacionExtraEjecucionModal: function () {
            var validaciones = new Array();

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.HdnCodigoInstructor().val() == null || base.Control.HdnCodigoInstructor().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtCodigoInstructor().attr('class', 'form-control');
                    } else {
                        base.Control.TxtCodigoInstructor().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });
            
            return validaciones;
        },
    };
};