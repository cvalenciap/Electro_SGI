/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 08062017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.Index');
Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.Index.Controller = function () {
    var base = this;

    base.Ini = function () {
        base.Function.CrearGrid();
        base.Event.BtnBuscarClick();
        base.Control.BtnAgregarProyecto().on('click', base.Event.BtnAgregarProyectoClick);
    };

    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        DlgFormularioAgregarProyecto: null,
        GrdResultado: null,
        BtnAgregarProyecto: function () { return $('#btnAgregarProyecto') },
        SlcProyecto: function () { return $('#slcProyecto') },

        CodigoProyecto: null,
        NombreProyecto: null,
        CodigoAsignacionProyecto:null,
                
    };

    base.Event = {
        BtnBuscarClick: function () {
            'use strict'
            base.Control.GrdResultado.Load({});
        },

        BtnAgregarProyectoClick: function () {
            'use strict'
            if (base.Control.SlcProyecto().val() != '' && base.Control.SlcProyecto().val() != undefined) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    indicadorModal: false,
                    onAccept: function () {
                        base.Ajax.AjaxAgregarProyecto.data = {
                            CodigoProyecto: base.Control.SlcProyecto().val(),
                        };
                        base.Ajax.AjaxAgregarProyecto.submit();
                    }
                });
            }
        },
        BtnGridAsignarProcesoClick: function (row, data) {
            var filtro = {
                CodigoProyecto: data.CodigoProyecto,
                NombreProyecto: data.NombreProyecto
            };
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.Actions.FormularioSeleccionarProcesos, filtro);
        },

        BtnGridAsignarEquipoClick: function (row, data) {
            var filtro = {
                CodigoProyecto: data.CodigoProyecto,
                NombreProyecto: data.NombreProyecto
            };
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.Actions.FormularioSeleccionarEquipos, filtro);
        },

        BtnGridAsignarPersonasClick: function (row, data) {  
            base.Control.CodigoProyecto= data.CodigoProyecto;
            base.Control.NombreProyecto = data.NombreProyecto,
            base.Control.CodigoAsignacionProyecto = data.CodigoAsignacionProyecto;
            base.Ajax.AjaxBuscarAsignacionEquipoProyecto.data = {
                CodigoProyecto: data.CodigoProyecto,
            };
            base.Ajax.AjaxBuscarAsignacionEquipoProyecto.submit();
        },

        AjaxAgregarProyectoSuccess: function (resultado) {           
            if (resultado.Result == 1) {                            
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.Actions.Index);
            }
            else if (resultado.Result == 2) {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.Resource.EtiquetaMsjProyectoRegistrado });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });

            }
        },

        AjaxBuscarAsignacionEquipoProyectoSuccess: function (resultado) {            
            if (resultado.Result.length >= 1) {           
                var filtro = {
                    CodigoProyecto: base.Control.CodigoProyecto,
                    NombreProyecto: base.Control.NombreProyecto,
                    CodigoAsignacionProyecto: base.Control.CodigoAsignacionProyecto
                };
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.Actions.FormularioSeleccionarPersonas, filtro);
            }
            else if (resultado.Result == 0) {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.Resource.MsjValidarAsignacionProyectoEquipo });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
    };

    
    base.Function = {
        CrearGrid: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                "class": "text-center",
                title: '#',
                width: "5%"
            });

            columns.push({
                data: 'NombreProyecto',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.Resource.GridProyecto,
                width: "35%"
            });
            columns.push({
                data: 'CodigoIdentificador',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.Resource.GridCentroCosto,
                width: "10%"
            });
            columns.push({
                data: 'NombrePais',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.Resource.GridPais,
                width: "10%"
            });
            columns.push({
                data: 'HorasPlanificadas',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.Resource.GridHorasTotales,
                width: "10%",
                mRender: function (data, type, full) {
                    return '' + (full.HorasPlanificadas != null ? full.HorasPlanificadas : '0') + '';
                }
            });

            columns.push({
                data: '',
                title: '#' + Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.Resource.GridOperadoresCCO,
                width: "10%",
                mRender: function (data, type, full) {
                    return '' + (full.CantidadOperadoresCCO != null ? full.CantidadOperadoresCCO : '0') + '';
                }
            });
            columns.push({
                data: '',
                title: '#'+Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.Resource.GridOperadoresVOC,
                width: "10%",
                mRender: function (data, type, full) {
                    return '' + (full.CantidadOperadoresVOC != null ? full.CantidadOperadoresVOC : '0') + '';
                }
            });

            columns.push({
                data: '',
                title: '#' + Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.Resource.GridOperadoresFAO,
                width: "10%",
                mRender: function (data, type, full) {
                    return '' + (full.CantidadOperadoresFAO != null ? full.CantidadOperadoresFAO : '0') + '';
                }
            });
            columns.push({
                data: '',
                title: '#' + Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.Resource.GridOperadoresMD,
                width: "10%",
                mRender: function (data, type, full) {
                    return '' + (full.CantidadOperadoresMD != null ? full.CantidadOperadoresMD : '0') + '';
                }
            });
            columns.push({
                data: '',
                title: '#' + Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.Resource.GridOperadoresOtros,
                width: "10%",
                mRender: function (data, type, full) {
                    return '' + (full.CantidadOperadoresOtros != null ? full.CantidadOperadoresOtros : '0') + '';
                }
            });
            columns.push({
                data: '',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.Resource.GridTotOperadoresCapacitacion,
                width: "10%",
                mRender: function (data, type, full) {
                    return '' + (full.CantidadOperadoresCapacitacion != null ? full.CantidadOperadoresCapacitacion : '0') + '';
                }
            });
            columns.push({
                data: '',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.Resource.GridTotOperadoresActivos,
                width: "10%",
                mRender: function (data, type, full) {
                    return '' + (full.CantidadPersonasActivas != null ? full.CantidadPersonasActivas : '0') + '';
                }
            });


            /*columns.push({
                data: '',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.Resource.GridPorcentajeEfectividad,
                width: "10%",
                mRender: function (data, type, full) {
                    return '0%';
                }
            });*/

            //columns.push({
            //    data: '',
            //    title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.Resource.GridPersonasCapacitadas,
            //    width: "10%",
            //    mRender: function (data, type, full) {
            //        return '0';
            //    }
            //});

            //columns.push({
            //    data: 'CantidadPersonasActivas',
            //    title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.Resource.GridPersonasActivas,
            //    width: "10%",
            //    mRender: function (data, type, full) {
            //        return '' + (full.CantidadPersonasActivas != null ? full.CantidadPersonasActivas : '0') + '';
            //    }
            //});

            columns.push({
                filter: { enabled: false, type: "textbox" },
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.AsignarSuplente, event: { on: 'click', callBack: base.Event.BtnGridAsignarPersonasClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.VerEquipos, event: { on: 'click', callBack: base.Event.BtnGridAsignarEquipoClick } },
                    //{ type: Pe.GMD.UI.Web.Components.GridAction.Temas, event: { on: 'click', callBack: base.Event.BtnGridAsignarProcesoClick } }
                ]
            });
            base.Control.GrdResultado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResult',
                columns: columns,
                hasSelectionRows: false,
                hasPaging: false,
                hasPagingServer: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.Actions.BuscarAsignacionProyectos,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        }
    };

    base.Ajax = {
        AjaxAgregarProyecto: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.Actions.ActualizarProyectoIndicadorCapacitacion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxAgregarProyectoSuccess
        }),

        AjaxBuscarAsignacionEquipoProyecto: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.Actions.BuscarAsignacionEquiposProyecto,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarAsignacionEquipoProyectoSuccess
        }),
    };


};