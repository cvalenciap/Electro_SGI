/// <reference path="../../../../Areas/Capacitacion/Views/Asignacion/FormularioSeleccionarEquipos.cshtml" />
ns('Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioPersonaEquipoProcesoSubProceso');
Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioPersonaEquipoProcesoSubProceso.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        //base.Event.GrabarEquipoProcesoSubProcesoSuccess = (opts.GrabarEquipoProcesoSubProcesoSuccess != null && opts.GrabarEquipoProcesoSubProcesoSuccess) ? opts.GrabarEquipoProcesoSubProcesoSuccess : null;
        alert('FORMULARIO INABILITADO');
        base.Function.CrearGridEquipos();
        base.Function.CrearGridProcesos();
        base.Event.BtnBuscarEquipoClick();
        base.Event.BtnBuscarProcesoClick();
        base.Function.CrearGridSubProcesos();
        base.Event.BtnBuscarSubProcesoClick();
        base.Control.BtnAgregarEquipo().click(base.Event.BtnAgregarEquipoClick);
        base.Control.BtnAgregarProceso().click(base.Event.BtnAgregarProcesoClick);
        base.Control.BtnAgregarSubProceso().click(base.Event.BtnAgregarSubProcesoClick);

        //base.Control.TxtNombreColaborador().keypress(base.Event.BtnBaseColaboradorBuscarKeyPress);
        //base.Control.BtnBaseColaboradorBuscar().click(base.Event.BtnBuscarColaboradorClick);
        //base.Control.BtnGrabarPersona().click(base.Event.BtnGrabarPersonaClick);
   
        //NombreProyecto: base.Control.HdnNombreProyecto().val(),
        //ApellidosNombres: data.ApellidosNombres
        base.Control.TxtFrmNombreProyectoEquipo().val(base.Control.NombreProyecto);
        base.Control.TxtFrmNombreCapacitadoEquipo().val(base.Control.ApellidosNombres);
        base.Control.TxtFrmNombreProyectoProceso().val(base.Control.NombreProyecto);
        base.Control.TxtFrmNombreCapacitadoProceso().val(base.Control.ApellidosNombres);
        base.Control.TxtFrmNombreProyectoSubProceso().val(base.Control.NombreProyecto);
        base.Control.TxtFrmNombreCapacitadoSubProceso().val(base.Control.ApellidosNombres);

        base.Control.SlcEquipo().off('change');
        base.Control.SlcEquipo().on('change', base.Event.SlcEquipoChange);
    };

    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        GrdResultadoEquipos: null,
        TxtCantidadEquipos: function () { return $('#txtCantidadEquipos'); },
        TxtFrmNombreProyectoEquipo: function () { return $('#txtFrmNombreProyectoEquipo'); },
        TxtFrmNombreCapacitadoEquipo: function () { return $('#txtFrmNombreCapacitadoEquipo'); },
        TxtFrmNombreProyectoProceso: function () { return $('#txtFrmNombreProyectoProceso'); },
        TxtFrmNombreCapacitadoProceso: function () { return $('#txtFrmNombreCapacitadoProceso'); },
        TxtFrmNombreProyectoSubProceso: function () { return $('#txtFrmNombreProyectoSubProceso'); },
        TxtFrmNombreCapacitadoSubProceso: function () { return $('#txtFrmNombreCapacitadoSubProceso'); },
        BtnAgregarEquipo: function () { return $('#btnAgregarEquipo'); },
        BtnAgregarProceso: function () { return $('#btnAgregarProceso'); },
        BtnAgregarSubProceso: function () { return $('#btnAgregarSubProceso'); },
        SlcEquipo: function () { return $('#slcEquipo'); },
        SlcProceso: function () { return $('#slcProceso'); },
        SlcSubProceso: function () { return $('#slcSubProceso'); },
        CodigoAsignacionPersonaProyecto:null,
        NombreProyecto:null,  
        ApellidosNombres:null,
        SeleccionadoEquipo: [],
        //CodigoProceso: null,
        CodigoAsignacionProyecto: null,
        CodigoProyecto:null,
        Contador: 1,
        DlgForm: null,
        //BtnBaseColaboradorBuscar: function () { return $('#btnBuscarColaborador'); },
        //SlcEquipo: function () { return $('#slcEquipo'); },
        //TxtNombreColaborador: function () { return $('#txtNombreColaborador'); },
        //SlcBaseColaboradorFiltro: function () { return $('#slcFiltroBuscarColaborador'); },
        //BtnGrabarPersona: function () { return $('#btnGrabarPersona'); }
      
    };

    base.Event = {
          
        BtnAgregarEquipoClick: function()
        {            
            base.Control.Mensaje.Confirmation({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                indicadorModal: false,
                onAccept: function () {
                    base.Ajax.AjaxGrabarPersonaEquipo.data = {
                        CodigoProyecto: base.Control.CodigoProyecto,
                        CodigoAsignacionPersonaProyecto: base.Control.CodigoAsignacionPersonaProyecto,
                        CodigoEquipo: base.Control.SlcEquipo().val()
                        
                    };
                    base.Ajax.AjaxGrabarPersonaEquipo.submit();
                    base.Event.BtnBuscarEquipoClick();
                }
            });

        },
        BtnAgregarProcesoClick: function()
        {
            base.Control.Mensaje.Confirmation({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                indicadorModal: false,
                onAccept: function () {
                    base.Ajax.AjaxGrabarPersonaProceso.data = {
                        CodigoProceso: '605648C0-07DC-463E-9897-0921BE87C299',
                        CodigoAsignacionPersonaEquipo: '8951A623-78E6-4057-BCBA-08309242293D'
                    };
                    base.Ajax.AjaxGrabarPersonaProceso.submit();
                    base.Event.BtnBuscarProcesoClick();
                }
            });

        },
        BtnAgregarSubProcesoClick: function()
        {
            base.Control.Mensaje.Confirmation({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                indicadorModal: false,
                onAccept: function () {
                    base.Ajax.AjaxGrabarPersonaSubProceso.data = {
                        CodigoSubProceso: '9373BD18-DDC9-4840-A248-42AC7D785CF3',
                        CodigoAsignacionPersonaProceso: '8951A623-78E6-4057-BCBA-08309242293D'

                    };
                    base.Ajax.AjaxGrabarPersonaSubProceso.submit();
                    base.Event.BtnBuscarSubProcesoClick();
                }
            });

        },
        BtnGridDeleteEquipoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarPersonaEquipo.data = {
                        CodigoAsignacionPersonaEquipo: data.CodigoAsignacionPersonaEquipo,
                    };
                    base.Ajax.AjaxEliminarPersonaEquipo.submit();
                    base.Event.BtnBuscarEquipoClick();
                }
            });
        },
        BtnGridDeleteProcesoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarPersonaEquipo.data = {
                        CodigoAsignacionPersonaProceso: data.CodigoAsignacionPersonaProceso,
                    };
                    base.Ajax.AjaxEliminarPersonaEquipo.submit();

                }
            });
        },
        BtnGridDeleteSubProcesoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarPersonaSubProceso.data = {
                        CodigoAsignacionPersonaSubProceso: data.CodigoAsignacionPersonaSubProceso,
                    };
                    base.Ajax.AjaxEliminarPersonaSubProceso.submit();

                }
            });
        },

        SlcEquipoChange: function () {
            'use strict'
            //if (base.Control.SlcEquipo().val() != null && base.Control.SlcEquipo().val() != '') {
            //    //base.Event.ObtenerFamiliaEquipo();
            //    base.Control.SlcProceso().empty();
            //    base.Control.SlcProceso().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));

            //    base.Ajax.AjaxBuscarProcesos.data = {
            //        //IndicadorProcesosNoSeleccionados: true,
            //        CodigoAsignacionEquipoProyecto: base.Control.SlcEquipo().val(),
            //        CodigoProyecto: base.Control.SlcProyecto().val()
            //    };

            //    base.Ajax.AjaxBuscarProcesos.submit();
            //}
        },

        //BtnBaseColaboradorBuscarKeyPress: function (evento) {
        //    var key = Pe.GMD.UI.Web.Components.Util.GetKeyCode(evento);
        //    var esValido = !(evento && key == 13);
        //    if (esValido == false) {
        //        base.Event.BtnBuscarColaboradorClick();
        //    }
        //    return esValido;
        //},
        BtnBuscarEquipoClick: function () {

            $('#asegundo').attr('role', 'tab');
            $('#asegundo').attr('data-toggle', 'tab');
            $('#atercero').attr('role', 'tab');
            $('#atercero').attr('data-toggle', 'tab');

            'use strict'      
            var filtro;
            filtro = {                     
             CodigoProyecto: base.Control.CodigoProyecto,
             CodigoAsignacionPersonaProyecto: base.Control.CodigoAsignacionPersonaProyecto,                    
            };

          
            //var codigoEmpresa="2";
            //if (base.Control.SlcBaseColaboradorFiltro().val() == "1") {
            //    filtro = {
            //        NombreCompleto: "",
            //        CodigoProyecto: base.Control.CodigoProyecto,
            //        NumeroDocumento: base.Control.TxtNombreColaborador().val().trim(),
            //        CodigoEmpresa: codigoEmpresa
            //    };
            //} else {
            //    filtro = {
            //        NombreCompleto: base.Control.TxtNombreColaborador().val().trim(),
            //        CodigoProyecto: base.Control.CodigoProyecto,
            //        NumeroDocumento: "",
            //        CodigoEmpresa: codigoEmpresa
            //    };
            //}

 
            base.Control.GrdResultadoEquipos.Load(filtro);
         
        },
        BtnBuscarProcesoClick:function()
        {
            
            'use strict'
            var filtro;
            filtro = {
                CodigoProyecto: base.Control.CodigoProyecto,
                CodigoAsignacionPersonaEquipo: 'BAA7F04D-56A4-482F-8F63-F1FA5B89B3DD'
                //CodigoProceso: base.Control.CodigoProceso,
                //CodigoAsignacionPersonaProyecto: base.Control.CodigoAsignacionPersonaProyecto,
            };
            base.Control.GrdResultadoProcesos.Load(filtro);
        },
        BtnBuscarSubProcesoClick: function ()
        {
            'use strict'
            var filtro = '';
            base.Control.GrdResultadoSubProcesos.Load(filtro);
        },
        AjaxGrabarPesonaEquipoSuccess: function (resultado) {            
        if (resultado.Result >= 1) {
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
        AjaxGrabarPesonaProcesoSuccess: function (resultado) {
            if (resultado.Result >= 1) {
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
        AjaxGrabarPesonaSubProcesoSuccess: function (resultado) {
            if (resultado.Result >= 1) {
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


    };
    base.Show = function (opts, optsA, filtro) {

        $("#tercero").removeClass("active");
        $("#listaTercero").removeAttr("class");
        $("#segundo").removeClass("active");
        $("#listaSegundo").removeAttr("class");
        $("#primero").attr('class', "tab-pane active");
        $("#listaPrimero").attr('class', "active");
  

        base.Control.CodigoAsignacionProyecto = filtro.CodigoAsignacionProyecto;
        base.Control.CodigoProyecto = filtro.CodigoProyecto;
        base.Control.NombreProyecto = filtro.NombreProyecto;
        base.Control.ApellidosNombres = filtro.ApellidosNombres;
        base.Control.CodigoAsignacionPersonaProyecto = filtro.CodigoAsignacionPersonaProyecto;

        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: 'Formulario Persona Proyecto',
            size: "size-wide",
            close: function () {
            }
        });

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Actions.FormularioPersonaEquipoProcesoSubProceso,
            onSuccess: function () {
                base.Ini();
            },
            data: {
                CodigoProyecto: base.Control.CodigoProyecto
            }
        });
    };
    base.Function = {
       
        CrearGridEquipos: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                "class": "text-center",
                title: '#',
                width: "5%"
            });

            columns.push({
                data: 'DescripcionFamilia',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Resource.GridEquipoDescripcion,
                width: "20%"
            });

            columns.push({
                data: 'CodigoDescripcionEquipo',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Resource.GridModelo,
                width: "10%"
            });

            columns.push({           
                data: 'DescripcionEquipo',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Resource.GridModeloDescripcion,
                width: "20%"
            });

            columns.push({
                data: 'HorasPlanificadasEquipo',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Resource.GridHorasPlanificadas,
                "class": "text-center",
                width: "10%",
                mRender: function (data, type, full) {
                    return '<input type="text" value="' + (full.HorasPlanificadasEquipo != null ? full.HorasPlanificadasEquipo : '') + '" style="width:100px;text-align:center;" disabled>';
                    return ''
                }
            });

            columns.push({
                data: 'PlazoEstimadoEquipo',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Resource.GridPlazoEstimado,
                "class": "text-center",
                width: "10%",
                mRender: function (data, type, full) {
                    return '<input type="text" value="' + (full.PlazoEstimadoEquipo != null ? full.PlazoEstimadoEquipo : '') + '" style="width:100px;text-align:center;" disabled>';
                    return ''
                }
            });

            columns.push({             
                data: 'EsActivoPersonaEquipo',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Resource.GridIndicadorAplicaEquipo,
                "class": "text-center",
                width: "15%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input " + (full.EsActivoPersonaEquipo == 1 ? " checked " : "") + " class='checkRecordCategoria' type='checkbox' name='gridCheckRecordCategoria'>";
                    return cadena;

                    return ''
                },
            });

            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Resource.GridOperaciones,
                "class": "controls",
                width: "5%",
                actionButtons: [
                    //{ type: Pe.GMD.UI.Web.Components.GridAction.Temas, event: { on: 'click', callBack: base.Event.BtnGridAsignarProcesoClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteEquipoClick } }
                ]
            });

            base.Control.GrdResultadoEquipos = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoPersonaEquipo',
                columns: columns,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Actions.BuscarPersonaEquipos,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                    if (records.length > 0) {
                        $('#blockSeleccionarEquipos').show();
                        var acumEquipos = 0;
                        for (var i = 0; i < records.length; i++) {
                            if (records[i].CodigoEquipo != null)
                                acumEquipos++;
                        }
                        base.Control.TxtCantidadEquipos().val(acumEquipos);
                    }
                }
            });
        },
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
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Resource.GridProceso,
                width: "10%"
            });

            columns.push({
                data: 'NombreProcesoEspaniol',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Resource.GridDescripcionProceso,
                width: "25%"
            });
            
            columns.push({
                data: '',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Resource.GridHorasPlanificadas,
                width: "10%",
                mRender: function (data, type, full) {
                    return '<input type="text" style="width:50px;text-align:center;" value="' + (full.HorasPlanificadasProceso != null ? full.HorasPlanificadasProceso : '') + '" disabled>';
                }
            });

            columns.push({
                data: '',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Resource.GridPlazoEstimado,
                width: "10%",
                mRender: function (data, type, full) {
                    return '<input type="text" style="width:50px;text-align:center;" value="' + (full.PlazoEstimadoProceso != null ? full.PlazoEstimadoProceso : '') + '" disabled>';
                }
            });

            columns.push({
                data: '',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Resource.GridIndicadorAplicaProceso,
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input " + (full.EsActivoProceso == true ? " checked " : "") + " class='checkRecordCategoria' type='checkbox' name='gridCheckRecordCategoria'>";
                    return cadena;
                },
                width: "12%"
            });
            
            columns.push({
                filter: { enabled: false, type: "textbox" },
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls text-center",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Temas, event: { on: 'click', callBack: base.Event.BtnGridVerSubProcesoClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridEliminarProcesoClick } }
                ]
            });


            base.Control.GrdResultadoProcesos = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoPersonaProceso',
                columns: columns,
                hasSelectionRows: false,
                hasPaging: false,
                hasPagingServer: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Actions.BuscarPersonaProcesos,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                    if (records.length > 0) {
                        $('#blockSeleccionarProcesos').show();
                        var acumHoras = 0; var acumPlazo = 0; var acumProcesos = 0;
                        for (var i = 0; i < records.length; i++) {
                            if (records[i].HorasPlanificadasProceso != null)
                                acumHoras += parseInt(records[i].HorasPlanificadasProceso);
                            if (records[i].PlazoEstimadoProceso != null)
                                acumPlazo += parseInt(records[i].PlazoEstimadoProceso);
                            if (records[i].CodigoAsignacionProceso != null)
                                acumProcesos++;
                        }

                        base.Control.TxtCantidadProcesos().val(acumProcesos);
                        base.Control.TxtPlazoEstimado().val(acumPlazo);
                        base.Control.TxtHorasPlanificadas().val(acumHoras);
                    }
                }
            });
            
        }  ,
        CrearGridSubProcesos: function () {
            var columns = new Array();

            columns.push({
                data: 'NumeroFila',
                "class": "text-center",
                title: '#',
                width: "5%"
            });

            columns.push({
                data: '',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Resource.GridProceso,
                width: "5%",
                mRender: function (data, type, full) {
                    return base.Control.CodigoProcesoAbreviado;
                }
            });

            columns.push({
                data: '',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Resource.GridSubProceso,
                width: "5%"
            });

            columns.push({
                data: 'NombreSubProcesoEspaniol',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Resource.GridComposicionCurso,
                width: "30%"
            });

            columns.push({
                data: '',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Resource.GridHorasPlanificadas,
                width: "5%",
                mRender: function (data, type, full) {
                    return '<input value="' + (full.HorasPlanificadasSubProceso != null ? full.HorasPlanificadasSubProceso : '') + '" type="text" id="txtHorasPlanificadas_' + full.NumeroFila + '" class="ClassHorasPlanificadas" name="ClassHorasPlanificadas" mask="integer" style="width:50px;text-align:center;">';
                }
            });

            columns.push({
                data: '',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Resource.GridPlazoEstimado,
                width: "5%",
                mRender: function (data, type, full) {
                    return '<input value="' + (full.PlazoEstimadoSubProceso != null ? full.PlazoEstimadoSubProceso : '') + '" type="text" id="txtPlazoEstimado_' + full.NumeroFila + '" class="ClassPlazoEstimado" name="ClassPlazoEstimado" mask="integer" style="width:50px;text-align:center;">';
                }
            });

            columns.push({
                data: '',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Resource.GridIndicadorAplicaSubProceso,
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input " + (full.EsActivoPersonaSubProceso == 1 ? " checked " : "") + " id='checkAplica_" + full.NumeroFila + "' class='checkRecordCategoria' type='checkbox' name='gridCheckRecordCategoria'>";
                    return cadena;
                },
                width: "17%"
            });

            columns.push({
                filter: { enabled: false, type: "textbox" },
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls text-center",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Temas, event: { on: 'click', callBack: base.Event.BtnGridVerSubProcesoClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridEliminarProcesoClick } }
                ]
            });

            base.Control.GrdResultadoSubProcesos = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoPersonaSubProceso',
                columns: columns,
                hasSelectionRows: false,
                hasPaging: false,
                hasPagingServer: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Actions.BuscarPersonaSubProcesos,
                    source: 'Result'
                },
                //events: [
                //    { type: 'keyup', selector: '.ClassPlazoEstimado', callBack: base.Event.CalcularPlazoEstimado },
                //    { type: 'keyup', selector: '.ClassHorasPlanificadas', callBack: base.Event.CalcularHorasPlanificadas }
                //],
                returnCallbackComplete: function (instancia, records) {
                    Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
                    var acumHoras = 0; var acumPlazo = 0; var acumSubProcesos = 0;
                    for (var i = 0; i < records.length; i++) {
                        if (records[i].HorasPlanificadasSubProceso != null)
                            acumHoras += parseInt(records[i].HorasPlanificadasSubProceso);
                        if (records[i].PlazoEstimadoSubProceso != null)
                            acumPlazo += parseInt(records[i].PlazoEstimadoSubProceso);
                        if (records[i].CodigoAsignacionSubProceso != null)
                            acumSubProcesos++;
                    }

                    //base.Control.TxtCantidadSubProcesos().val(acumSubProcesos);
                    //base.Control.TxtCantidadPlazoEstimado().val(acumPlazo);
                    //base.Control.TxtCantidadHorasPlanificadas().val(acumHoras);
                }
            });

        }

    };

    base.Ajax = {
        AjaxGrabarPersonaEquipo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Actions.RegistrarAsignacionPersonaEquipo,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarPersonaEquipoSuccess
        }),
        AjaxGrabarPersonaProceso: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Actions.RegistrarAsignacionPersonaProceso,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarPersonaProcesoSuccess
        }),
        AjaxGrabarPersonaSubProceso: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Actions.RegistrarAsignacionPersonaSubProceso,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarPersonaSubProcesoSuccess
        }),
        AjaxEliminarPersonaEquipo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Actions.EliminarAsignacionPersonaEquipo,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarPersonaEquipoSuccess
        }),
        AjaxEliminarPersonaProceso: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Actions.EliminarAsignacionPersonaProceso,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarPersonaEquipoSuccess
        }),
        AjaxEliminarPersonaSubProceso: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Actions.EliminarAsignacionPersonaSubproceso,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarPersonaEquipoSuccess
        }),

    };




};