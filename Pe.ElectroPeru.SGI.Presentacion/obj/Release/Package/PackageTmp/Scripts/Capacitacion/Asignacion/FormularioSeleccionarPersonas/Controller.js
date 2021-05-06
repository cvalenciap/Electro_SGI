ns('Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioSeleccionarPersonas');
Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioSeleccionarPersonas.Controller = function (opts) {
    var base = this;
    base.Ini = function () {
        'use strict'
        base.Control.AsignacionIndexModel = Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Models.Index;
        base.Control.BtnRegresarAsignacionProyecto().on('click', base.Event.BtnRegresarAsignacionProyectoClick);
        base.Control.BtnAgregarPersona().on('click', base.Event.BtnAgregarPersonaClick);
        base.Control.BtnAbrirModalBuscarPersonas().on('click', base.Event.BtnAbrirModalBuscarPersonasClick);
        base.Control.BtnCargarPersonal().on('click', base.Event.BtnCargarPersonalClick);

        base.Event.BtnBuscarAsignacionPersonaProyectoClick();
        base.Control.DlgFormularioAgregarColaborador = new Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioAgregarPersonasModal.Controller({
            GrabarColaboradorPersonaProyectoSuccess: base.Event.BtnGrabarPersonaClick
        });
        base.Control.DlgFormularioAgregarEquipoProcesoSubProceso = new Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioPersonaEquipoProcesoSubProceso.Controller({
            GrabarEquipoProcesoSubProcesoSuccess: base.Event.BtnBuscarAsignacionPersonaProyectoClick
        });
    };
    base.Show = function (opts) { };
    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        GrdResultadoPersonas: null,
        AsignacionIndexModel: null,
        HdnNombreProyecto: function () { return $('#hdnNombreProyecto') },
        HdnCodigoProyecto: function () { return $('#hdnCodigoProyecto') },
        HdnCodigoAsignacionProyecto: function () { return $('#hdnCodigoAsignacionProyecto') },
        BtnAgregarPersona: function () { return $('#btnAgregarPersona'); },
        BtnCargarPersonal: function () { return $('#btnCargarPersonal'); },
        BtnAbrirModalBuscarPersonas: function () { return $('#btnAbrirModalBuscarPersonas'); },
        BtnRegresarAsignacionProyecto: function () { return $('#btnRegresarAsignacionProyecto'); },
        DlgFormularioPersonas: null,
        DlgFormularioEquipos: null,
        DlgFormularioAgregarColaborador: null,
        DlgFormularioAgregarEquipoProcesoSubProceso: null
    };

    base.Event = {
        BtnGrabarPersonaClick: function (arrPersona) {
            'use strict'
            var DatalistaPersonalizadaColaborador = [];
            for (var i = 0; i < arrPersona.length; i++) {
                DatalistaPersonalizadaColaborador.push({
                    CodigoColaborador: arrPersona[i].CodigoColaborador,
                    CodigoAsignacionProyecto: base.Control.HdnCodigoAsignacionProyecto().val(),
                    CodigoProyecto: base.Control.HdnCodigoProyecto().val()
                });
            }
            base.Ajax.AjaxGrabarPersona.data = DatalistaPersonalizadaColaborador;
            base.Ajax.AjaxGrabarPersona.submit();
        },
        ActualizarEstadoPersonaProyectoClick: function () {
            'use strict'
            var TmpEsActivoPersonaProyecto = 0;
            var CheckedValorObtenido = $(this).is(':checked');
            if (CheckedValorObtenido == true) {
                TmpEsActivoPersonaProyecto = 1;
            }
            base.Ajax.AjaxActualizarEstadoPersonaProyecto.data = {
                CodigoAsignacionPersonaProyecto: $(this).data().codigoasignacionpersonaproyecto,
                RecibeCapacitacion: TmpEsActivoPersonaProyecto
            };
            base.Ajax.AjaxActualizarEstadoPersonaProyecto.submit();
        },
        BtnRegresarAsignacionProyectoClick: function () {
            'use strict'
            window.history.go(-1);
            //Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioProceso.Actions.BandejaCapacitacion, {});
        },
        BtnAgregarPersonaClick: function () {
            'use strict'
            var filtro = {
                CodigoProyecto: base.Control.HdnCodigoProyecto().val()
            }
            base.Control.DlgFormularioAgregarColaborador.Show(true, [], filtro, true);
        },
        BtnCargarPersonalClick: function () {
            'use strict'
            base.Control.Mensaje.Confirmation({
                onAccept: function () {
                    base.Ajax.AjaxCargarPersonalMasivo.data = {
                        CodigoAsignacionProyecto: base.Control.HdnCodigoAsignacionProyecto().val(),
                        CodigoProyecto: base.Control.HdnCodigoProyecto().val()
                    };
                    base.Ajax.AjaxCargarPersonalMasivo.submit();
                }
            });
        },
        BtnAbrirModalBuscarPersonasClick: function () {
            'use strict'
            base.Control.DlgFormularioPersonas.Show();
        },
        BtnBuscarAsignacionPersonaProyectoClick: function () {
            'use strict'
            var filtro = {
                CodigoProyecto: base.Control.HdnCodigoProyecto().val(),
                CodigoAsignacionProyecto: base.Control.HdnCodigoAsignacionProyecto().val()
            }
            $("#divGrdResultadopPersonas").empty();
            base.Function.CrearGridPersonas();
            base.Control.GrdResultadoPersonas.Load(filtro);

        },
        BtnGridAsignarEquipoProcesoSubProcesoClick: function (row, data) {
            'use strict'
            var filtro = {
                CodigoAsignacionPersonaProyecto: data.CodigoAsignacionPersonaProyecto,
                CodigoAsignacionProyecto: base.Control.HdnCodigoAsignacionProyecto().val(),
                CodigoProyecto: base.Control.HdnCodigoProyecto().val(),
                NombreProyecto: base.Control.HdnNombreProyecto().val(),
                ApellidosNombres: data.ApellidosNombres
            }
            base.Control.DlgFormularioAgregarEquipoProcesoSubProceso.Show(true, [], filtro);
        },
        BtnGridAsignarPersonaEquipoClick: function (row, data) {
            'use strict'
            var filtro = {
                CodigoProyecto: base.Control.HdnCodigoProyecto().val(),
                NombreProyecto: base.Control.HdnNombreProyecto().val(),
                CodigoAsignacionPersonaProyecto: data.CodigoAsignacionPersonaProyecto,
                NombreCompletoColaborador: data.NombreCompletoColaborador
            };
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Actions.FormularioPersonaEquipo, filtro);

        },
        BtnGridDeletePersonaProyectoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarAsignacionPersonaProyecto.data = {
                        CodigoAsignacionPersonaProyecto: data.CodigoAsignacionPersonaProyecto,
                    };
                    base.Ajax.AjaxEliminarAsignacionPersonaProyecto.submit();
                    base.Event.BtnBuscarAsignacionPersonaProyectoClick();
                }
            });
        },
        AjaxActualizarEstadoPersonaProyectoSuccess: function (resultado) {
            if (resultado.Result >= 1) {
                base.Event.BtnBuscarAsignacionPersonaProyectoClick();
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxCargarPersonalMasivoSuccess: function (resultado) {
            if (resultado.Result.CantidadPersonasCargadas > 0) {
                base.Control.Mensaje.Information({
                    message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Resource.MsjValidarCargaPersonasAsignadasOk + ' ' + resultado.Result.CantidadPersonasCargadas + ' ' + Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Resource.MsjValidarCargaPersonasAsignadas
                });
                base.Event.BtnBuscarAsignacionPersonaProyectoClick();
            }
        },
        AjaxEliminarAsignacionPersonaProyectoSuccess: function (resultado) {
            if (resultado.Result == 1) {
                base.Control.Mensaje.Information({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });

                base.Event.BtnBuscarAsignacionPersonaProyectoClick();
            }
            else if (resultado.Result == 2) {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Resource.MsjValidarEliminarPersonaEquipo });
            }
            else {
                base.Control.Mensaje.Error({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxGrabarPersonaSuccess: function (resultado) {
            if (resultado.Result.CantidadPersonasCargadas > 0) {
                if (resultado.Result.CantidadPersonasNoCargadas > 0) {
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: resultado.Result.CantidadPersonasCargadas + ' '+ Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Resource.MsjValidarCargaPersonasAsignadasOk + ' '+
                                 Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Resource.EtiquetaY +' '+Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Resource.MsjValidarCargaPersonasAsignadasExisten                           
                    });

                }
                else {
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                    });
                }
                base.Event.BtnBuscarAsignacionPersonaProyectoClick();
            }
            else {
                if (resultado.Result.CantidadPersonasNoCargadas > 0) {
                    base.Control.Mensaje.Warning({ message: resultado.Result.CantidadPersonasNoCargadas + ' ' + Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Resource.MsjValidarCargaPersonasAsignadasExisten });
                    base.Event.BtnBuscarAsignacionPersonaProyectoClick();
                }
                else {
                    base.Control.Mensaje.Warning({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                    });
                }
            }
        },
    };
    base.Function = {
        CrearGridPersonas: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                "class": "text-center",
                title: '#',
                width: "5%"
            });
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NombreCompletoColaborador',
                "class": "text-left",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Resource.GridApellidosyNombres,
                width: "25%"
            });
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NombrePuestoTrabajo',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Resource.GridPuestoTrabajo,
                width: "20%"
            });
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.AsignacionIndexModel.ListaEstadoColaborador },
                data: 'EstadoColaborador',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Resource.GridEstado,
                width: "11%"
            });
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'HorasPlanificadas',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Resource.GridHorasPlanificadas,
                "class": "text-center",
                width: "7%",
                mRender: function (data, type, full) {
                    return '<input type="text" value="' + (full.HorasPlanificadas != null ? full.HorasPlanificadas : '0') + '" style="width:100px;text-align:center;" disabled>';
                }
            });
         
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.AsignacionIndexModel.ListaCondicionColaborador },
                data: 'CodigoCondicion',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Resource.GridCondicion,
                "class": "text-center",
                width: "10%",
                mRender: function (data, type, full) {
                    return '' + (full.Condicion != null ? full.Condicion : '') + '';
                }
            });
            columns.push({
                data: 'RecibeCapacitacion',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Resource.GridRecibeCapacitacion,
                "class": "text-center",
                width: "10%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    if (full.CodigoEstadoColaborador == 'INA') {
                        cadena = "<input " + (full.RecibeCapacitacion == 1 ? " checked " : "true") + " data-codigoasignacionpersonaproyecto='" + full.CodigoAsignacionPersonaProyecto + "' class='checkSeleccionarProyecto' type='checkbox' name='gridCheckRecibeCapacitacion' disabled>";
                    }
                    else {
                        cadena = "<input " + (full.RecibeCapacitacion == 1 ? " checked " : "true") + " data-codigoasignacionpersonaproyecto='" + full.CodigoAsignacionPersonaProyecto + "' class='checkSeleccionarProyecto' type='checkbox' name='gridCheckRecibeCapacitacion' >";
                    }
                    return cadena;
                }
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Resource.GridOperaciones,
                "class": "controls",
                width: "5%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.VerHerramientas, event: { on: 'click', callBack: base.Event.BtnGridAsignarPersonaEquipoClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.BtnGridDeleteValidate, event: { on: 'click', callBack: base.Event.BtnGridDeletePersonaProyectoClick } }
                ]
            });
            base.Control.GrdResultadoPersonas = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadopPersonas',
                columns: columns,
                filterColumn: true,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Actions.BuscarPersonaPorProyecto,
                    source: 'Result'
                },
                events: [
               { type: 'click', selector: '.checkSeleccionarProyecto', callBack: base.Event.ActualizarEstadoPersonaProyectoClick }
                ],
            });
        },
    };

    base.Ajax = {
        AjaxEliminarAsignacionPersonaProyecto: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Actions.EliminarAsignacionPersonaProyecto,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarAsignacionPersonaProyectoSuccess
        }),
        AjaxActualizarEstadoPersonaProyecto: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Actions.ActualizarEstadoPersonaProyecto,
            autoSubmit: false,
            onSuccess: base.Event.AjaxActualizarEstadoPersonaProyectoSuccess
        }),
        AjaxCargarPersonalMasivo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Actions.CargarPersonalMasivo,
            autoSubmit: false,
            onSuccess: base.Event.AjaxCargarPersonalMasivoSuccess
        }),
        AjaxGrabarPersona: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Actions.RegistrarColaboradorAsignacionPersonaProyecto,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarPersonaSuccess
        }),
    };
};