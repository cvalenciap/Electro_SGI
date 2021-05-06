ns('Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.FormularioAgregarEquipoModal');
Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.FormularioAgregarEquipoModal.Controller = function (opts) {
    var base = this;
    base.Ini = function () {              
        base.Event.AceptarSuccess = (opts.AceptarSuccess != null || opts.AceptarSuccess != undefined ? opts.AceptarSuccess : null)
        base.Control.BtnGrabarAgregarEquipo().off('click');
        base.Control.BtnGrabarAgregarEquipo().on('click', base.Event.BtnGrabarEquipoClick);
        base.Control.BtnCancelar().off('click');
        base.Control.BtnCancelar().on('click', base.Event.BtnCancelarClick);
        
        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmAgregarEquipoModal(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
        });
    };
    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        Validador: null,
        DlgForm: null,
        FrmAgregarEquipoModal: function () { return $('#frmAgregarEquipoModal'); },
        SlcFamilia: function () { return $('#slcFamilia'); },
        TxtCodigoDescripcionEquipo: function () { return $('#txtCodigoDescripcionEquipo'); },
        TxtDescripcionEquipo: function () { return $('#txtDescripcionEquipo'); },
        BtnGrabarAgregarEquipo: function () { return $('#btnGrabarEquipo'); },
        BtnCancelar: function () { return $('#btnCancelarEquipo'); },
    };
    base.Event = {
        BtnCancelarClick: function () {
            'use strict'
            base.Control.DlgForm.divDialog.close();
        },
        AsignarValoresInstructorClick: function (objColaborador) {
            'use strict'
            base.Control.TxtCodigoInstructor().val(objColaborador[0].NombreCompletoColaborador);
            base.Control.HdnCodigoInstructor().val(objColaborador[0].CodigoColaborador);
        },                     
        BtnGrabarEquipoClick: function(){
            'use strict'
            if (base.Control.Validador.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                     
                        base.Ajax.AjaxGrabarEquipo.data = {
                            CodigoEquipo: base.Control.CodigoEquipo,
                            CodigoFamiliaEquipo: base.Control.SlcFamilia().val(),
                            CodigoDescripcionEquipo: base.Control.TxtCodigoDescripcionEquipo().val(),
                            DescripcionEquipo: base.Control.TxtDescripcionEquipo().val(),
                        };
                        base.Ajax.AjaxGrabarEquipo.submit();
                    }
                });
            }
            else
            {             
                $("#frmAgregarEquipoModalSummaryErrorMessage").empty();
                $("#frmAgregarEquipoModalSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
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
        },       
        AjaxBuscarEquipoSuccess: function (resultado) {
            base.Control.ArrayEquipos = resultado.Result;
            $.each(resultado.Result, function (index, value) {                
                base.Control.SlcEquipo().append(new Option(value.DescripcionEquipo, value.CodigoEquipo));
            });
        },
        AjaxGrabarEquipoSuccess: function (resultado) {            
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
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.MsjValidaEquipoExiste });
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
        base.Control.CodigoEquipo = opts.CodigoEquipo;
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.EtiquetaTituloFormularioEquipo,
            size: "",
            close: function () {
            }
        });

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Actions.FormularioAgregarEquipoModal,
            onSuccess: function () {
                base.Ini();
            },
            data: {
                CodigoEquipo: base.Control.CodigoEquipo
            }
        });
    };
    base.Function = {

        CrearGrid: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.GridCorrelativo,
                width: "5%"
            });
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.EjecucionIndexModel.ListaProyectos },
                data: 'DescripcionFamilia',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.EtiquetaEquipoFamilia,
                width: "30%",
                mRender: function (data, type, full) {
                    return full.NombreProyecto;
                }
            });
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'CodigoDescripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.EtiquetaCodigoEquipo,
                width: "20%"
            });
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.EtiquetaEquipoDescripcion,
                width: "30%"
            });
            columns.push({
                data: 'EsActivo',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.EtiquetaVigente,
                "class": "text-center",
                width: "5%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input " + (full.EsActivo == 1 ? " checked " : "true") + " data-codigomantenimientoequipo='" + full.CodigoEquipo + "' class='checkSeleccionarEquipo' type='checkbox' name='gridCheckRecordCategoria'>";
                    return cadena;
                },
            });


            columns.push({
                filter: { enabled: false, type: "textbox" },
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.GridOperacion,
                "class": "controls",
                width: "12%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.AsignarSuplente, event: { on: 'click', callBack: base.Event.BtnGridAsignarParticipantesClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditEjecucionParticipanteClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteEjecucionClick } }
                ]
            });
            base.Control.GrdResultado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultEquipo',
                columns: columns,
                filterColumn: true,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Actions.BuscarEquipos,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        }
    };
    base.Ajax = {

        AjaxGrabarEquipo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Actions.RegistrarEquipo,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarEquipoSuccess
        }),  

    };   
};