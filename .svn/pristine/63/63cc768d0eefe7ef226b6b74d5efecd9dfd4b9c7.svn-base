ns('Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioPersonaEquipo');
Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioPersonaEquipo.Controller = function (opts) {
    var base = this;
    base.Ini = function () {
        'use strict'
        base.Control.AsignacionIndexModel = Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Models.Index;
        base.Event.BtnBuscarEquipoClick();
        //base.Function.CargarSlcEquipo();
        base.Control.BtnAgregarEquipo().click(base.Event.BtnAgregarEquipoClick);
        base.Control.BtnRegresarAsignacionPersonaProyecto().on('click', base.Event.BtnRegresarAsignacionPersonaProyectoClick);
        base.Control.SlcEquipo().off('change');
        base.Control.SlcEquipo().on('change', base.Event.SlcEquipoChange);

        base.Control.DlgFormularioAgregarProcesosPersona = new Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioAgregarProcesosPersona.Controller({
            AceptarSuccess: base.Event.BtnBuscarEquipoClick
        });
    };
    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        GrdResultadoEquipos: null,
        AsignacionIndexModel: null,
        TxtCantidadEquipos: function () { return $('#txtCantidadEquipos'); },
        TxtFrmNombreProyectoEquipo: function () { return $('#txtFrmNombreProyectoEquipo'); },
        TxtFrmNombreCapacitadoEquipo: function () { return $('#txtFrmNombreCapacitadoEquipo'); },
        HdnCodigoProyecto: function () { return $('#hdnCodigoProyecto'); },
        HdnCodigoAsignacionPersonaProyecto: function () { return $('#hdnCodigoAsignacionPersonaProyecto'); },
        BtnRegresarAsignacionPersonaProyecto: function () { return $('#btnRegresarAsignacionPersonaProyecto'); },
        BtnAgregarEquipo: function () { return $('#btnAgregarEquipo'); },
        TxtEquipoDescripcion: function () { return $('#txtEquipoDescripcion'); },
        SlcEquipo: function () { return $('#slcEquipo'); },
        TxtCantidadHorasPlanificadas: function () { return $('#txtCantidadHorasPlanificadas'); },
        TxtCantidadPlazoEstimado: function () { return $('#txtCantidadPlazoEstimado'); },
        ArrayEquipos: [],
        NombreProyecto: null,
        ApellidosNombres: null,
        SeleccionadoEquipo: [],
        DlgFormularioAgregarProcesosPersona: null,
        CodigoAsignacionEquipoProyecto: null,
        CodigoProyecto: null,
        Contador: 1,
        DlgForm: null
    };

    base.Event = {
        BtnRegresarAsignacionPersonaProyectoClick: function () {
            window.history.go(-1);
        },
        ObtenerFamiliaEquipo: function () {
            for (var i = 0; i < base.Control.ArrayEquipos.length; i++) {
                if (base.Control.SlcEquipo().val() == base.Control.ArrayEquipos[i].CodigoEquipo) {
                    base.Control.CodigoAsignacionEquipoProyecto = base.Control.ArrayEquipos[i].CodigoAsignacionEquipoProyecto;
                    base.Control.TxtEquipoDescripcion().val(base.Control.ArrayEquipos[i].DescripcionFamilia);
                    break;
                }
            }
        },
        ActualizarEstadoPersonaEquipoClick: function () {
            'use strict'
            var TmpEsActivoPersonaEquipo = 0;
            var CheckedValorObtenido = $(this).is(':checked');
            if (CheckedValorObtenido == true) {
                TmpEsActivoPersonaEquipo = 1;
            }
            base.Ajax.AjaxActualizarEstadoPersonaEquipo.data = {
                CodigoAsignacionPersonaEquipo: $(this).data().codigoasignacionpersonaequipo,
                EsActivoPersonaEquipo: TmpEsActivoPersonaEquipo
            };
            base.Ajax.AjaxActualizarEstadoPersonaEquipo.submit();
        },
        BtnAgregarEquipoClick: function () {
            'use strict'
            if (base.Control.SlcEquipo().val() != null && base.Control.SlcEquipo().val() != '') {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    indicadorModal: false,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarPersonaEquipo.data = {
                            CodigoProyecto: base.Control.HdnCodigoProyecto().val(),
                            CodigoAsignacionPersonaProyecto: base.Control.HdnCodigoAsignacionPersonaProyecto().val(),
                            CodigoEquipo: base.Control.SlcEquipo().val(),
                            CodigoAsignacionEquipoProyecto: base.Control.CodigoAsignacionEquipoProyecto

                        };
                        base.Ajax.AjaxGrabarPersonaEquipo.submit();
                        base.Event.BtnBuscarEquipoClick();
                    }
                });
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Resource.EtiquetaSeleccioneEquipo });
                return false;
            }
        },
        BtnGridDeleteEquipoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarPersonaEquipo.data = {
                        CodigoAsignacionPersonaProyecto: base.Control.HdnCodigoAsignacionPersonaProyecto().val(),
                        CodigoAsignacionPersonaEquipo: data.CodigoAsignacionPersonaEquipo,
                    };
                    base.Ajax.AjaxEliminarPersonaEquipo.submit();
                }
            });
        },
        SlcEquipoChange: function () {
            'use strict'
            if (base.Control.SlcEquipo().val() != null && base.Control.SlcEquipo().val() != '') {
                base.Event.ObtenerFamiliaEquipo();
            }
            else {
                base.Control.TxtEquipoDescripcion().val('');
            }
        },
        BtnBuscarEquipoClick: function () {

            $('#asegundo').attr('role', 'tab');
            $('#asegundo').attr('data-toggle', 'tab');
            $('#atercero').attr('role', 'tab');
            $('#atercero').attr('data-toggle', 'tab');

            'use strict'
            var filtro;
            filtro = {
                CodigoProyecto: base.Control.HdnCodigoProyecto().val(),
                CodigoAsignacionPersonaProyecto: base.Control.HdnCodigoAsignacionPersonaProyecto().val(),
            };
            $("#divGrdResultadoPersonaEquipo").empty();
            base.Function.CrearGridEquipos();
            base.Control.GrdResultadoEquipos.Load(filtro);

        },
        BtnGridAsignarProcesoSubProcesoClick: function (row, data) {
            data.CodigoProyecto = base.Control.HdnCodigoProyecto().val();
            data.ArrayEquipos = base.Control.ArrayEquipos;
            base.Control.DlgFormularioAgregarProcesosPersona.Show(data);

        },

        AjaxGrabarPersonaEquipoSuccess: function (resultado) {
            if (resultado.Result == 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
            }
            else if (resultado.Result == 2) {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Resource.EtiquetaEquipoRegistrado });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                   message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxActualizarEstadoPersonaEquipoSuccess: function (resultado) {
            if (resultado.Result >= 1) {
                base.Event.BtnBuscarEquipoClick();
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxBuscarEquipoSuccess: function (resultado) {
            base.Control.ArrayEquipos = resultado.Result;
            $.each(resultado.Result, function (index, value) {
                base.Control.SlcEquipo().append(new Option(value.DescripcionEquipo, value.CodigoEquipo));
            });
        },
        AjaxEliminarPersonaEquipoSuccess: function (resultado) {
            if (resultado.Result >= 1) {

                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
                base.Event.BtnBuscarEquipoClick();
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        }

    };
    base.Show = function (opts) { };

    base.Function = {

        //CargarSlcEquipo: function () {

        //    base.Control.TxtEquipoDescripcion().val('');
        //    base.Control.SlcEquipo().empty();
        //    base.Control.SlcEquipo().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));

        //    base.Ajax.AjaxBuscarEquipos.data = {
        //        CodigoProyecto: base.Control.HdnCodigoProyecto().val()
        //    };
        //    base.Ajax.AjaxBuscarEquipos.submit();
        //},

        CrearGridEquipos: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                "class": "text-center",
                title: '#',
                width: "5%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'DescripcionFamilia',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Resource.GridEquipoDescripcion,
                width: "20%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'CodigoDescripcionEquipo',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Resource.GridModelo,
                width: "10%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'DescripcionEquipo',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Resource.GridModeloDescripcion,
                width: "15%"
            });

            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.AsignacionIndexModel.ListaCondicionColaborador },
                data: 'DescripcionCondicion',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Resource.GridCondicion,
                width: "10%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'HorasPlanificadasEquipo',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Resource.GridHorasPlanificadas,
                "class": "text-center",
                width: "10%",
                mRender: function (data, type, full) {
                    return '<input type="text" value="' + (full.HorasPlanificadasEquipo != null ? full.HorasPlanificadasEquipo : '0') + '" style="width:100px;text-align:center;" disabled>';
                }
            });

            //columns.push({
            //    filter: { enabled: true, type: "textbox" },
            //    data: 'PlazoEstimadoEquipo',
            //    title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Resource.GridPlazoEstimado,
            //    "class": "text-center",
            //    width: "10%",
            //    mRender: function (data, type, full) {
            //        return '<input type="text" value="' + (full.PlazoEstimadoEquipo != null ? full.PlazoEstimadoEquipo : '0') + '" style="width:100px;text-align:center;" disabled>';
            //    }
            //});

            columns.push({
                data: 'EsActivoPersonaEquipo',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Resource.GridIndicadorAplicaEquipo,
                "class": "text-center",
                width: "5%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input " + (full.EsActivoPersonaEquipo == 1 ? " checked " : "true") + " data-codigoasignacionpersonaequipo='" + full.CodigoAsignacionPersonaEquipo + "' class='checkSeleccionarEquipo' type='checkbox' name='gridCheckRecordCategoria'>";
                    return cadena;
                },
            });

            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Resource.GridOperaciones,
                "class": "controls",
                width: "5%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Temas, event: { on: 'click', callBack: base.Event.BtnGridAsignarProcesoSubProcesoClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteEquipoClick } }
                ]
            });

            base.Control.GrdResultadoEquipos = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoPersonaEquipo',
                columns: columns,
                filterColumn: true,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Actions.BuscarPersonaEquipos,
                    source: 'Result'
                },
                events: [
                  { type: 'click', selector: '.checkSeleccionarEquipo', callBack: base.Event.ActualizarEstadoPersonaEquipoClick }
                ],
                returnCallbackComplete: function (instancia, records) {
                    if (records.length > 0) {
                        $('#blockSeleccionarEquipos').show();
                        var acumEquipos = 0;
                        var acumHorasPlanificadasEquipos = 0;
                        var acumPlazoEstimadoEquipos = 0;
                        for (var i = 0; i < records.length; i++) {
                            if (records[i].CodigoEquipo != null)
                                acumEquipos++;
                            if (records[i].HorasPlanificadasEquipo != null && records[i].EsActivoPersonaEquipo == '1')
                                acumHorasPlanificadasEquipos += parseInt(records[i].HorasPlanificadasEquipo);
                            if (records[i].PlazoEstimadoEquipo != null && records[i].EsActivoPersonaEquipo == '1')
                                acumPlazoEstimadoEquipos += parseInt(records[i].PlazoEstimadoEquipo);
                        }
                        base.Control.TxtCantidadEquipos().val(acumEquipos);
                        base.Control.TxtCantidadHorasPlanificadas().val(acumHorasPlanificadasEquipos);
                        base.Control.TxtCantidadPlazoEstimado().val(acumPlazoEstimadoEquipos);
                    }
                }

            });
        }
    };
    base.Ajax = {
        AjaxGrabarPersonaEquipo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Actions.RegistrarAsignacionPersonaEquipo,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarPersonaEquipoSuccess
        }),
        AjaxEliminarPersonaEquipo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Actions.EliminarAsignacionPersonaEquipo,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarPersonaEquipoSuccess
        }),
        AjaxActualizarEstadoPersonaEquipo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Actions.ActualizarEstadoPersonaEquipo,
            autoSubmit: false,
            onSuccess: base.Event.AjaxActualizarEstadoPersonaEquipoSuccess
        }),
        AjaxBuscarEquipos: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioPersonaEquipo.Actions.BuscarEquipos,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarEquipoSuccess
        })

    };




};