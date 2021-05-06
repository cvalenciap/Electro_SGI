ns('Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.FormularioConfigProcesosFamiliaEquipoModal');
Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.FormularioConfigProcesosFamiliaEquipoModal.Controller = function (opts) {
    var base = this;
    base.Ini = function () {

        //base.Control.BtnGrabarAgregarEquipo().off('click');
        //base.Control.BtnGrabarAgregarEquipo().on('click', base.Event.BtnGrabarEquipoClick);
        //base.Control.BtnCancelar().off('click');
        //base.Control.BtnCancelar().on('click', base.Event.BtnCancelarClick);

        //base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
        //    form: base.Control.FrmAgregarEquipoModal(),
        //    messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
        //});

        base.Control.SlcProceso().off('change');
        base.Control.SlcProceso().on('change', base.Event.SlcProcesoChange);
        base.Function.CrearGridProcesos();
        base.Event.BtnBuscarProcesosGridClick();
    };
    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        //Validador: null,
        DlgForm: null,
        SlcProceso: function () { return $('#slcProceso'); },
        GrdResultadoProcesos: null,
        //FrmAgregarEquipoModal: function () { return $('#frmAgregarEquipoModal'); },
        //SlcFamilia: function () { return $('#slcFamilia'); },
        //TxtCodigoDescripcionEquipo: function () { return $('#txtCodigoDescripcionEquipo'); },
        //TxtDescripcionEquipo: function () { return $('#txtDescripcionEquipo'); },
        //BtnGrabarAgregarEquipo: function () { return $('#btnGrabarEquipo'); },
        //BtnCancelar: function () { return $('#btnCancelarEquipo'); },
    };
    base.Event = {
        //BtnBuscarProcesosClick: function () {
        //    var filtro = {
        //        CodigoProyecto: base.Control.CodigoProyecto,
        //        CodigoProceso: base.Control.CodigoProceso,
        //        CodigoAsignacionProceso: base.Control.CodigoAsignacionProceso

        //    };
        //    base.Control.GrdResultadoProcesos.Load(filtro);
        //},
        BtnBuscarProcesosGridClick: function () {
            var filtro = {
                CodigoProyecto: "0" // MIENTRAS base.Control.HdnCodigoProyecto().val()
            };
            base.Control.GrdResultadoProcesos.Load(filtro);
        },
        SlcProcesoChange: function () {
            'use strict'
            if (base.Control.SlcProceso().val() != null && base.Control.SlcProceso().val() != '') {
                var arraySeleccionados = [];                
                //arraySeleccionados.push({
                //    CodigoAsignacionProceso: base.Control.CodigoAsignacionProceso,
                //    CodigoProceso: base.Control.CodigoProceso,
                //    CodigoSubProceso: base.Control.SlcSubProceso().val()
                //});
                //base.Ajax.AjaxGrabarSubProcesosSeleccionados.data = arraySeleccionados;
                //base.Ajax.AjaxGrabarSubProcesosSeleccionados.submit();
            }
        },
        ActualizarEstadoProcesoClick: function () {
            'use strict'
            //base.Ajax.AjaxActualizarEstadoProceso.data = {
            //    CodigoAsignacionProceso: $(this).data().codigoasignacionproceso,
            //    EsActivo: $(this).is(':checked')
            //};
            //base.Ajax.AjaxActualizarEstadoProceso.submit();
        },
        //BtnCancelarClick: function () {
        //    'use strict'
        //    base.Control.DlgForm.divDialog.close();
        //},
        //AsignarValoresInstructorClick: function (objColaborador) {
        //    'use strict'
        //    base.Control.TxtCodigoInstructor().val(objColaborador[0].NombreCompletoColaborador);
        //    base.Control.HdnCodigoInstructor().val(objColaborador[0].CodigoColaborador);
        //},                     
        //BtnGrabarEquipoClick: function(){
        //    'use strict'
        //    if (base.Control.Validador.isValid()) {                        
        //        base.Ajax.AjaxGrabarEquipo.data = {
        //            CodigoEquipo: base.Control.CodigoEquipo,
        //            CodigoFamilia: base.Control.SlcFamilia().val(),
        //            CodigoDescripcionEquipo: base.Control.TxtCodigoDescripcionEquipo().val(),
        //            DescripcionEquipo: base.Control.TxtDescripcionEquipo().val(),
        //        };
        //        base.Ajax.AjaxGrabarEquipo.submit();
        //    }
        //    else
        //    {
        //        $("#frmAgregarEquipoModalSummaryErrorMessage").empty();
        //        $("#frmAgregarEquipoModalSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
        //    }
        //},
        //SlcProyectoChange: function () {
        //    'use strict'
        //    base.Control.TxtEquipoDescripcion().val('');
        //    base.Control.SlcEquipo().empty();
        //    base.Control.SlcEquipo().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
        //    base.Control.SlcProceso().empty();
        //    base.Control.SlcProceso().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
        //    base.Control.SlcSubProceso().empty();
        //    base.Control.SlcSubProceso().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
        //    if (base.Control.SlcProyecto().val() != null && base.Control.SlcProyecto().val() != '') {
        //        base.Control.TxtEquipoDescripcion().val('');
        //        base.Ajax.AjaxBuscarEquipos.data = {
        //            CodigoProyecto: base.Control.SlcProyecto().val()
        //        };
        //        base.Ajax.AjaxBuscarEquipos.submit();
        //    }
        //},
        //SlcEquipoChange: function() {
        //    'use strict'
        //    base.Control.SlcProceso().empty();
        //    base.Control.SlcProceso().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
        //    base.Control.SlcSubProceso().empty();
        //    base.Control.SlcSubProceso().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
        //    if (base.Control.SlcEquipo().val() != null && base.Control.SlcEquipo().val() != '') {
        //        base.Event.ObtenerFamiliaEquipo();
        //        base.Ajax.AjaxBuscarProcesos.data = {
        //            CodigoProyecto: base.Control.SlcProyecto().val(),
        //            CodigoEquipo: base.Control.SlcEquipo().val()                    
        //        };
        //        base.Ajax.AjaxBuscarProcesos.submit();
        //    }
        //},       
        //AjaxBuscarEquipoSuccess: function (resultado) {
        //    base.Control.ArrayEquipos = resultado.Result;
        //    $.each(resultado.Result, function (index, value) {                
        //        base.Control.SlcEquipo().append(new Option(value.DescripcionEquipo, value.CodigoEquipo));
        //    });
        //},
        //AjaxGrabarEquipoSuccess: function (resultado) {
        //    if (resultado.Result == 1) {
        //        base.Control.DlgForm.divDialog.close();
        //        if (base.Event.AceptarSuccess != null) {
        //            base.Event.AceptarSuccess();
        //        }
        //        base.Control.Mensaje.Information({
        //            title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
        //            message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
        //        });
        //    }
        //    else if (resultado.Result == 2) {
        //        base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Mantenimiento.Resource.MsjValidaEquipoExiste });
        //    }
        //    else {
        //        base.Control.Mensaje.Warning({
        //            title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
        //            message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
        //        });

        //    }
        //},        
    };

    base.Show = function (opts) {

        //base.Control.CodigoEquipo = opts.CodigoEquipo;

        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: "SGSA",//Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Mantenimiento.Resource.EtiquetaTituloFormularioAgregarFam,
            size: "",
            close: function () {
            }
        });

        base.Control.DlgForm.getAjaxContent({

            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Actions.FormularioConfigProcesosFamiliaEquipoModal,
            onSuccess: function () {
                base.Ini();
            },
            data: opts.data
            //data: {
            //    //CodigoEquipo: base.Control.CodigoEquipo
            //}
        });

    };

    base.Function = {
        roundNumber: function (num, scale) {
            if (!("" + num).includes("e")) {
                return +(Math.round(num + "e+" + scale) + "e-" + scale);
            } else {
                var arr = ("" + num).split("e");
                var sig = ""
                if (+arr[1] + scale > 0) {
                    sig = "+";
                }
                return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
            }
        },
        CrearGridProcesos: function () {
            var columns = new Array();
            columns.push({
                data: '',
                "class": "text-center",
                title: '#',
                width: "5%",
                mRender: function (data, type, full) {
                    return base.Control.Contador++;
                }
            });
            columns.push({
                data: 'CodigoProcesoAbreviado',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.GridProceso,
                //title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioProceso.Resource.GridProceso,
                width: "30%"

            });
            columns.push({
                data: 'NombreProcesoEspaniol',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.GridDescripcionProceso,
                width: "65%"
            });
            columns.push({
                data: 'HorasPlanificadas',
                "class": "text-center",
                title: "Horas",//falta recurso
                width: "30%"
            });
            
            base.Control.GrdResultadoProcesos = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoProcesosModal',
                columns: columns,
                hasSelectionRows: true,
                hasPaging: false,
                hasPagingServer: false,
                columnDefs: [{ "width": "5%", "targets": [0] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Actions.BuscarProcesos,
                    source: 'listaProcesosFiltrada'
                },
                //events: [
                //    { type: 'click', selector: '.checkProceso', callBack: base.Event.ObtenerSubProcesoClick }
                //],
                returnCallbackComplete: function (instancia, records) {
                }
            });
        },

    };
    base.Ajax = {

        //AjaxGrabarEquipo: new Pe.GMD.UI.Web.Components.Ajax({
        //    action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Mantenimiento.Actions.RegistrarEquipo,
        //    autoSubmit: false,
        //    onSuccess: base.Event.AjaxGrabarEquipoSuccess
        //}),  

    };

};