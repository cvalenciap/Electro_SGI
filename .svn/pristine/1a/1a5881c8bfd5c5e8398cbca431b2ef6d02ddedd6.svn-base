ns('Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioSeleccionarProcesos');
Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioSeleccionarProcesos.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        base.Function.CrearGridProcesos();
        base.Event.BtnBuscarProcesosGridClick();    
        base.Control.BtnAgregarProceso().on('click', base.Event.BtnAgregarProcesoClick);
        base.Control.DlgFormularioVerSubProcesos = new Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioSeleccionarSubProcesoModal.Controller({
            AceptarSuccess: base.Event.BtnBuscarProcesosGridClick
        });
        base.Control.DlgFormularioProcesos = new Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioAgregarProcesoModal.Controller({
            AceptarSuccess: base.Event.BtnBuscarProcesosGridClick
        });

        base.Control.BtnRegresarBandejaCapacitacion().on('click', base.Event.BtnRegresarBandejaCapacitacionClick);
        base.Control.SlcProceso().off('change');
        base.Control.SlcProceso().on('change', base.Event.SlcProcesoChange);
      
    };    

    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        Contador: 1,
        HdnCodigoFamiliaEquipo: function () { return $('#hdnCodigoFamiliaEquipo'); },
        DlgFormularioVerSubProcesos: null,
        DlgFormularioProcesos: null,
        BtnBuscarProceso: function () { return $('#btnBuscarProceso'); },
        BtnAgregarProceso: function () { return $('#btnAgregarProceso'); },
        BtnRegresarBandejaCapacitacion: function(){ return $('#btnRegresarBandejaCapacitacion'); },
        GrdResultadoProcesos: null,
        SlcProceso: function () { return $('#slcProceso'); },
        TxtCantidadProcesos: function () { return $('#txtCantidadProcesos'); },
        TxtHorasPlanificadas: function () { return $('#txtHorasPlanificadas'); },
        TxtPlazoEstimado: function () { return $('#txtPlazoEstimado'); },
    };

    base.Event = {
        ActualizarEstadoProcesoClick: function () {
            'use strict'
            base.Ajax.AjaxActualizarEstadoProceso.data = {
                CodigoAsignacionProceso: $(this).data().codigoasignacionproceso,
                EsActivo: $(this).is(':checked')
            };
            base.Ajax.AjaxActualizarEstadoProceso.submit();
        },

        BtnBuscarProcesosGridClick: function () {
            var filtro = {
                //CodigoProyecto: base.Control.HdnCodigoProyecto().val()
                CodigoFamiliaEquipo: base.Control.HdnCodigoFamiliaEquipo().val()
            };
            base.Control.GrdResultadoProcesos.Load(filtro);
        },
             
        BtnGridVerSubProcesoClick: function (row, data) {
            

            var filtro = {
                CodigoFamiliaEquipo: base.Control.HdnCodigoFamiliaEquipo().val(),
                NombreProceso: data.NombreProcesoEspaniol,
                CodigoProceso: data.CodigoProceso,
                CodigoAsignacionProceso: data.CodigoAsignacionProceso,
                CodigoProcesoAbreviado: data.CodigoProcesoAbreviado,
                PlazoEstimadoProceso: data.PlazoEstimadoProceso
            };            
            base.Control.DlgFormularioVerSubProcesos.Show(true, [], filtro);
        },
           
        BtnGridEliminarProcesoClick: function (row, data) {
            'use strict'            
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarProcesoProyecto.data = {
                        //CodigoProyecto: base.Control.HdnCodigoProyecto().val(),
                        CodigoFamiliaEquipo: base.Control.HdnCodigoFamiliaEquipo().val(),
                        CodigoAsignacionProceso: data.CodigoAsignacionProceso,
                    };

                    base.Ajax.AjaxEliminarProcesoProyecto.submit();
                }
            });
        },

        AjaxEliminarProcesoProyectoSuccess: function (resultado) {
            'use strict'            
            if (resultado.Result >= 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnBuscarProcesosGridClick();
            }
            else if(parseInt(resultado.Result) == -1){
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioProceso.Resource.MsjValidarProcesoUtilizado });
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },

        BtnRegresarBandejaCapacitacionClick: function () {
            //Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioProceso.Actions.BandejaCapacitacion, {});
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Mantenimiento.Actions.BandejaFamiliaEquipo, {});

        },

        BtnAgregarProcesoClick: function () {
            var filtro = {
                //CodigoProyecto: base.Control.HdnCodigoProyecto().val()
                CodigoFamiliaEquipo: base.Control.HdnCodigoFamiliaEquipo().val()  
            };
            base.Control.DlgFormularioProcesos.Show(filtro);
        },

        SlcProcesoChange: function () {
            'use strict'


            base.Control.Mensaje.Confirmation({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                onAccept: function () {

                    if (base.Control.SlcProceso().val() != null && base.Control.SlcProceso().val() != '') {
                        var arrayProcesos = [];
                        arrayProcesos.push({  
                            CodigoFamiliaEquipo: base.Control.HdnCodigoFamiliaEquipo().val(),
                            CodigoProceso: base.Control.SlcProceso().val()
                        });
                        base.Ajax.AjaxGrabarProceso.data = arrayProcesos;
                        base.Ajax.AjaxGrabarProceso.submit();
                    }

                }
            });

        },

        AjaxGrabarProcesoSuccess: function (resultado) {
            if (resultado.Result == 1) {
                base.Event.BtnBuscarProcesosGridClick();
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
            }
            else if(resultado.Result == 2){
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioProceso.Resource.MsjValidarProcesoRegistrado });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },

        AjaxActualizarEstadoProcesoSuccess: function (resultado) {
            if (resultado.Result >= 1) {
                base.Event.BtnBuscarProcesosGridClick();
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        }
    };

    base.Function = {
        CrearGridProcesos: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                "class": "text-center",
                title: '#',
                width: "5%"
            });

            columns.push({
                data: 'CodigoProcesoAbreviado',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioProceso.Resource.GridProceso,
                width: "10%"
            });

            columns.push({
                data: 'NombreProcesoEspaniol',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioProceso.Resource.GridDescripcionProceso,
                width: "25%"
            });
            
            columns.push({
                data: '',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioProceso.Resource.GridHorasPlanificadas,
                width: "10%",
                mRender: function (data, type, full) {
                    return '<input type="text" style="width:50px;text-align:center;" value="' + (full.HorasPlanificadasProceso != null ? full.HorasPlanificadasProceso : '') + '" disabled>';
                }
            });


            columns.push({
                data: '',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioProceso.Resource.GridIndicadorAplicaProceso,
                mRender: function (data, type, full) {                    
                    var cadena = "";
                    cadena = "<input " + (full.EsActivoProceso == true ? " checked " : "") + "  data-codigoasignacionproceso='" + full.CodigoAsignacionProceso + "' class='checkSeleccionarProceso' type='checkbox'>";
                    return cadena;
                },
                width: "12%"
            });
            
            columns.push({
                filter: { enabled: false, type: "textbox" },
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioProceso.Resource.GridOperacion,
                "class": "controls text-center",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Temas, event: { on: 'click', callBack: base.Event.BtnGridVerSubProcesoClick }, toolTip: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridSeleccionarSubProcesos },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridEliminarProcesoClick } }
                ]
            });


            base.Control.GrdResultadoProcesos = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoProcesos',
                columns: columns,
                hasSelectionRows: false,
                hasPaging: false,
                hasPagingServer: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioProceso.Actions.BuscarAsignacionProcesosPorProyecto,
                    source: 'Result'
                },
                events: [
                   { type: 'click', selector: '.checkSeleccionarProceso', callBack: base.Event.ActualizarEstadoProcesoClick }
                ],
                returnCallbackComplete: function (instancia, records) {
                    if (records.length > 0) {
                        $('#blockSeleccionarProcesos').show();
                        var acumHoras = 0; var acumPlazo = 0; var acumProcesos = 0;
                        for (var i = 0; i < records.length; i++) {
                            if (records[i].HorasPlanificadasProceso != null && records[i].EsActivoProceso)
                                acumHoras += parseInt(records[i].HorasPlanificadasProceso);
                            if (records[i].PlazoEstimadoProceso != null && records[i].EsActivoProceso)
                                acumPlazo += parseInt(records[i].PlazoEstimadoProceso);
                            if (records[i].CodigoAsignacionProceso != null)
                                acumProcesos++;
                        }

                        base.Control.TxtCantidadProcesos().val(acumProcesos);
                        base.Control.TxtPlazoEstimado().val(acumPlazo);
                        base.Control.TxtHorasPlanificadas().val(acumHoras);
                    }
                    else {
                        base.Control.TxtCantidadProcesos().val('');
                        base.Control.TxtPlazoEstimado().val('');
                        base.Control.TxtHorasPlanificadas().val('');
                    }
                }
            });
            
        }     
    };

    base.Ajax = {
        AjaxEliminarProcesoProyecto: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioProceso.Actions.EliminarProcesoProyecto,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarProcesoProyectoSuccess
        }),

        AjaxGrabarProceso: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioProceso.Actions.RegistrarAsignacionProceso,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarProcesoSuccess
        }), 

        AjaxActualizarEstadoProceso: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioProceso.Actions.ActualizarEstadoProceso,
            autoSubmit: false,
            onSuccess: base.Event.AjaxActualizarEstadoProcesoSuccess
        }),
    };


};