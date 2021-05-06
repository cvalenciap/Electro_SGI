ns('Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioSeleccionarSubProcesoModal');
Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioSeleccionarSubProcesoModal.Controller = function (opts) {
    var base = this;
    var isMultiSelect = false;

    base.Ini = function () {
        base.Function.CrearGridSubProcesos();
        base.Event.BtnBuscarSubProcesosClick();
        base.Control.TxtNombreProceso().val(base.Control.NombreProceso);
        base.Control.BtnCancelar().click(base.Event.BtnCancelarClick);
        base.Control.BtnGrabarSubProceso().click(base.Event.BtnActualizarSubProcesoClick);

        if (opts != null && opts.AceptarSuccess != null && opts.AceptarSuccess)
            base.Event.AceptarSuccess = opts.AceptarSuccess;

        base.Control.SlcSubProceso().off('change');
        base.Control.SlcSubProceso().on('change', base.Event.SlcSubProcesoChange);
    };

    base.Control = {
        GrdResultadoProcesos: null,
        CodigoProceso: null,
        CodigoAsignacionProceso: null,
        CodigoProyecto: null,
        Contadorchecks: 0,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        BtnGrabarSubProceso: function () { return $('#btnGrabarSubProceso'); },
        BtnCancelar: function () { return $('#btnCancelarSubProceso'); },
        TxtNombreProceso: function () { return $('#txtNombreProceso'); },
        TxtCantidadSubProcesos: function () { return $('#txtCantidadSubProcesos'); },
        TxtCantidadHorasPlanificadas: function () { return $('#txtCantidadHorasPlanificadas'); },

        SlcSubProceso: function () { return $('#slcSubProceso'); },
    };

    base.Event = {
        ActualizarEstadoSubProcesoClick: function () {
            'use strict'
            base.Ajax.AjaxActualizarEstadoSubProceso.data = {
                CodigoAsignacionSubProceso: $(this).data().codigoasignacionsubproceso,
                EsActivo: $(this).is(':checked')
            };
            base.Ajax.AjaxActualizarEstadoSubProceso.submit();
        },
        BtnBuscarSubProcesosClick: function () {
            var filtro = {
                CodigoProyecto: base.Control.CodigoProyecto,
                CodigoProceso: base.Control.CodigoProceso,
                CodigoAsignacionProceso: base.Control.CodigoAsignacionProceso

            };
            base.Control.GrdSubProcesos.Load(filtro);
        },
        TxtSoloNumerosKeypress: function (event) {
            var regex = /[0-9]/;
            var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
            if (!regex.test(key)) {
                event.preventDefault();
                return false;
            }
        },        
        BtnCancelarClick: function () {
            'use strict'
            base.Control.DlgForm.divDialog.close();
        },
        BtnActualizarSubProcesoClick: function () {
            'use strict'


            base.Control.Mensaje.Confirmation({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                onAccept: function () {

                var arraySeleccionados = [];
                var arrayChecks = [];
                var flag = true;            
                $.each(base.Control.GrdSubProcesos.core.rows().data(), function (index, value) {
                    if ($('#checkAplica_' + value.NumeroFila).is(":checked"))
                        arrayChecks.push(value.NumeroFila);
                });
                for (var i = 0; i < arrayChecks.length; i++) {
                    if (($('#txtHorasPlanificadas_' + arrayChecks[i]).val() == '' || parseInt($('#txtHorasPlanificadas_' + arrayChecks[i]).val()) < 0)  ||
                        ($('#txtPlazoEstimado_' + arrayChecks[i]).val() == '' || parseInt($('#txtPlazoEstimado_' + arrayChecks[i]).val()) < 0) ) {
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    $.each(base.Control.GrdSubProcesos.core.rows().data(), function (index, value) {
                        arraySeleccionados.push(
                            {
                                CodigoAsignacionProceso: value.CodigoAsignacionProceso,
                                CodigoAsignacionSubProceso: value.CodigoAsignacionSubProceso,
                                HorasPlanificadasSubProceso: $('#txtHorasPlanificadas_' + value.NumeroFila).val(),
                                PlazoEstimadoSubProceso: $('#txtPlazoEstimado_' + value.NumeroFila).val(),
                                EsActivo: $('#checkAplica_' + value.NumeroFila).is(":checked")
                            }
                        );
                    });

                    if (arraySeleccionados.length > 0) {
                        base.Ajax.AjaxActualizarSubProcesosSeleccionados.data = arraySeleccionados;
                        base.Ajax.AjaxActualizarSubProcesosSeleccionados.submit();
                    }
                }
                else
                {
                    base.Control.Mensaje.Warning({ message: 'Algunos de los SubProcesos no contienen valores' });
                    return false;
                }

                }
            });

        },
        AjaxActualizarSubProcesosSeleccionadosSuccess: function (resultado) {            
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
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxActualizarEstadoSubProcesoSuccess: function (resultado) {
            if (resultado.Result >= 1) {
                base.Event.BtnBuscarSubProcesosClick();
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxGrabarSubProcesosSeleccionadosSuccess: function (resultado) {            
            if (resultado.Result == 1) {
                base.Event.BtnBuscarSubProcesosClick();
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
            }
            else if (resultado.Result == 2) {
                base.Control.Mensaje.Warning({ message: 'El SubProceso ya se encuentra registrado' });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },  
        CalcularPlazoEstimado: function () {
            //var acumPlazo = 0;         
            //$.each(document.getElementsByName("ClassPlazoEstimado"), function (index, value) {                
            //    if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
            //        acumPlazo += parseInt($(this).val());
            //    }
            //});
            //base.Control.TxtCantidadPlazoEstimado().val(acumPlazo);
            //var NroMesesAproximado = base.Function.roundNumber((acumPlazo / 30), 2)
            //var NroDiasAproximado = base.Function.roundNumber((NroMesesAproximado * 30), 0)
            //base.Control.TxtMesesAproximado().val(NroMesesAproximado);
            //base.Control.TxtDiasAproximado().val(NroDiasAproximado);
        },
        CalcularHorasPlanificadas: function () {
            var acumHoras = 0;
            $.each(document.getElementsByName("ClassHorasPlanificadas"), function (index, value) {
                if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
                    acumHoras += parseInt($(this).val());
                }
            });
            base.Control.TxtCantidadHorasPlanificadas().val(acumHoras);
        },
        ObtenerSubProcesoClick: function () {
            var numerofila = $(this).data().numerofila;            
            if ($(this).is(':checked'))
            {                
                $.each(document.getElementsByName("ClassHorasPlanificadas"), function (index, value) {
                    $(this).prop("disabled", true);
                });
                $.each(document.getElementsByName("ClassPlazoEstimado"), function (index, value) {
                    $(this).prop("disabled", true);
                });
                $('#txtHorasPlanificadas_' + numerofila).prop("disabled", false);
                $('#txtPlazoEstimado_' + numerofila).prop("disabled", false);                
            }
            else
            {                
                $('#txtHorasPlanificadas_' + numerofila).val('');
                $('#txtPlazoEstimado_' + numerofila).val('');                

            
                base.Event.CalcularHorasPlanificadas();

                $('#txtHorasPlanificadas_' + numerofila).prop("disabled", true);
                $('#txtPlazoEstimado_' + numerofila).prop("disabled", true);
            }
        },
        SlcSubProcesoChange: function () {
            'use strict'
            base.Control.Mensaje.Confirmation({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                onAccept: function () {

                    if (base.Control.SlcSubProceso().val() != null && base.Control.SlcSubProceso().val() != '') {
                        var arraySeleccionados = [];
                        arraySeleccionados.push({
                            CodigoAsignacionProceso: base.Control.CodigoAsignacionProceso,
                            CodigoProceso: base.Control.CodigoProceso,
                            CodigoSubProceso: base.Control.SlcSubProceso().val()
                        });
                        base.Ajax.AjaxGrabarSubProcesosSeleccionados.data = arraySeleccionados;
                        base.Ajax.AjaxGrabarSubProcesosSeleccionados.submit();
                    }
                    
                }
            });


        },
        BtnGridDeleteSubProcesoClick: function (row, data) {
            'use strict'            
            base.Control.Mensaje.Delete({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                onAccept: function () {
                    base.Ajax.AjaxEliminarSubProceso.data = {
                        CodigoProceso: data.CodigoProceso,
                        CodigoAsignacionProceso: data.CodigoAsignacionProceso,
                        CodigoAsignacionSubProceso: data.CodigoAsignacionSubProceso
                    };

                    base.Ajax.AjaxEliminarSubProceso.submit();
                }
            });
        },
        BtnGridDeleteValidate: function (data, type, full) {
            if (full.CodigoAsignacionSubProceso != null)
                return true;
            else
                return false;
        },
        AjaxEliminarSubProcesoSuccess: function (resultado) {
            'use strict'
            if (resultado.Result >= 1) {
                base.Control.Mensaje.Information({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });

                base.Event.BtnBuscarSubProcesosClick();
            }
            else if (parseInt(resultado.Result) == -1) {
                base.Control.Mensaje.Warning({ message: "El SubProceso se encuentra siendo utilizado." });
            }
            else {
                base.Control.Mensaje.Error({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        TxtMesesAproximadoKeyup: function () {
            var NroDiasAproximado = base.Control.TxtMesesAproximado().val();
            base.Control.TxtDiasAproximado().val(parseInt(NroDiasAproximado * 30));
        },
    };
      
    base.Show = function (isMultiSelectParam, listaEquipos, filtro) {
        base.Control.CodigoProyecto = filtro.CodigoProyecto;
        base.Control.CodigoProceso = filtro.CodigoProceso;
        base.Control.NombreProceso = filtro.NombreProceso;
        base.Control.CodigoProcesoAbreviado = filtro.CodigoProcesoAbreviado;
        base.Control.CodigoAsignacionProceso = filtro.CodigoAsignacionProceso;
        base.Control.Contadorchecks = 0;
        base.Control.PlazoEstimadoProceso = (filtro.PlazoEstimadoProceso != null && filtro.PlazoEstimadoProceso != 0 ? filtro.PlazoEstimadoProceso : '');
        if (isMultiSelectParam === true || isMultiSelectParam === false) {
            isMultiSelect = isMultiSelectParam;
        }
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: 'Formulario Seleccionar SubProcesos',
            size: "size-wide",
            close: function () {
            }
        });
        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioProceso.Actions.FormularioSeleccionarSubProcesoModal,
            onSuccess: function () {
                base.Control.SubProcesosSeleccionados = listaEquipos;
                base.Ini();
            },
            data: {
                CodigoProyecto: base.Control.CodigoProyecto,
                CodigoProceso: base.Control.CodigoProceso,
                CodigoAsignacionProceso: base.Control.CodigoAsignacionProceso
            }
        });
    };
    base.Ajax = {
        AjaxGrabarSubProcesosSeleccionados: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioProceso.Actions.RegistrarAsignacionSubProceso,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarSubProcesosSeleccionadosSuccess
        }),
        AjaxActualizarSubProcesosSeleccionados: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioProceso.Actions.RegistrarAsignacionSubProceso,
            autoSubmit: false,
            onSuccess: base.Event.AjaxActualizarSubProcesosSeleccionadosSuccess
        }),
        AjaxActualizarEstadoSubProceso: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioProceso.Actions.ActualizarEstadoSubProceso,
            autoSubmit: false,
            onSuccess: base.Event.AjaxActualizarEstadoSubProcesoSuccess
        }),
        AjaxEliminarSubProceso: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioProceso.Actions.EliminarSubProcesoProyecto,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarSubProcesoSuccess
        }),
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
        CrearGridSubProcesos: function () {
            var columns = new Array();
            /*columns.push({                
                title: '',
                "class": "text-center",
                width: "5%",
                mRender: function (data, type, full) {
                    if (full.CodigoAsignacionSubProceso == null) {
                        var cadena = "";
                        cadena = "<input name='chkSubProceso' class='checkSubProceso' type='checkbox' id='chkSubProceso_" + full.NumeroFila + "' " +
                                 " data-numerofila='" + full.NumeroFila + "' data-codigosubproceso='" + full.CodigoSubProceso + "' />";
                        return cadena;
                    }
                    else {
                        return '';
                    }
                },
            });*/
            columns.push({
                data: '',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioProceso.Resource.GridProceso,
                width: "5%",
                mRender: function (data, type, full) {
                    return base.Control.CodigoProcesoAbreviado;
                }
            });
            columns.push({
                data: 'IdentificadorSubProceso',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioProceso.Resource.GridSubProceso,
                width: "5%"
            });
            columns.push({
                data: 'NombreSubProcesoEspaniol',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioProceso.Resource.GridComposicionCurso,
                width: "30%"
            });
            columns.push({
                data: '',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioProceso.Resource.GridHorasPlanificadas,
                width: "5%",
                mRender: function (data, type, full) {
                    return '<input value="' + (full.HorasPlanificadasSubProceso != null ? full.HorasPlanificadasSubProceso : '') + '" type="text" id="txtHorasPlanificadas_' + full.NumeroFila + '" class="ClassHorasPlanificadas" name="ClassHorasPlanificadas" mask="integer" style="width:50px;text-align:center;">';
                }
            });

            //columns.push({
            //    data: '',
            //    title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioProceso.Resource.GridPlazoEstimado,
            //    width: "5%",
            //    mRender: function (data, type, full) {
            //        return '<input value="' + (full.PlazoEstimadoSubProceso != null ? full.PlazoEstimadoSubProceso : '') + '" type="text" id="txtPlazoEstimado_' + full.NumeroFila + '" class="ClassPlazoEstimado" name="ClassPlazoEstimado" mask="integer" style="width:50px;text-align:center;">';
            //    }
            //});

            columns.push({
                data: '',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioProceso.Resource.GridIndicadorAplicaSubProceso,
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input " + (full.EsActivoSubProceso == true ? " checked " : "") + " data-codigoasignacionsubproceso='" + full.CodigoAsignacionSubProceso + "' data-numerofila='" + full.NumeroFila + "' id='checkAplica_" + full.NumeroFila + "' class='checkSeleccionarSubProceso' type='checkbox'>";
                    return cadena;
                },
                width: "17%"
            });
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioProceso.Resource.GridOperacion,
                "class": "controls",
                width: "3%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.BtnGridDeleteValidate, event: { on: 'click', callBack: base.Event.BtnGridDeleteSubProcesoClick } }
                ]
            });           
            base.Control.GrdSubProcesos = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoSubProcesos',
                columns: columns,
                hasSelectionRows: false,
                hasPaging: false,
                hasPagingServer: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioProceso.Actions.BuscarSubProcesosPorCodigoProcesoAsignacion,
                    source: 'Result'
                },
                events: [                    
                    //{ type: 'keyup', selector: '.ClassPlazoEstimado', callBack: base.Event.CalcularPlazoEstimado },
                    { type: 'keyup', selector: '.ClassHorasPlanificadas', callBack: base.Event.CalcularHorasPlanificadas },
                    { type: 'click', selector: '.checkSeleccionarSubProceso', callBack: base.Event.ActualizarEstadoSubProcesoClick }
                ],
                returnCallbackComplete: function (instancia, records) {
                    Pe.GMD.UI.Web.Components.TextBox.Function.Configure();                    
                    var acumHoras = 0; var acumPlazo = 0; var acumSubProcesos = 0;
                    for (var i = 0; i < records.length; i++) {                        
                        if (records[i].HorasPlanificadasSubProceso != null && records[i].EsActivoSubProceso)
                            acumHoras += parseInt(records[i].HorasPlanificadasSubProceso);
                        //if (records[i].PlazoEstimadoSubProceso != null && records[i].EsActivoSubProceso)
                        //    acumPlazo += parseInt(records[i].PlazoEstimadoSubProceso);
                        if (records[i].CodigoAsignacionSubProceso != null)
                            acumSubProcesos++;
                    }
                    base.Control.TxtCantidadSubProcesos().val(acumSubProcesos);                                     
                    base.Control.TxtCantidadHorasPlanificadas().val(acumHoras);

                    //base.Control.TxtCantidadPlazoEstimado().val(acumPlazo);
                    //var NroMesesAproximado = '';
                    //if (base.Control.PlazoEstimadoProceso != null && base.Control.PlazoEstimadoProceso != 0)
                    //{
                    //    NroMesesAproximado = base.Function.roundNumber((base.Control.PlazoEstimadoProceso / 30), 2)
                    //}

                    //base.Control.TxtMesesAproximado().val(NroMesesAproximado);
                    //base.Control.TxtDiasAproximado().val(base.Control.PlazoEstimadoProceso);
                }
            });            
        },

        ObtenerSubProcesosSeleccionados: function () {
            return base.Control.SubProcesosSeleccionados;
        }
    };
};