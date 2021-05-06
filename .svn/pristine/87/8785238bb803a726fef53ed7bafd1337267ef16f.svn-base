/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 06092017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Index');
Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Index.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Control.MantenimientoEquipoIndexModel = Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Models.Index;
        base.Event.BtnBuscarClick();
     
        base.Control.BtnAgregarEquipo().on('click', base.Event.BtnAgregarEquipoClick);
        base.Control.DlgFormularioAgregarEquipo = new Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.FormularioAgregarEquipoModal.Controller({
            AceptarSuccess: base.Event.BtnBuscarClick
        });

        $('#cartTabsFormularioConfiguracion').on('shown.bs.tab', function (e) {
            var target = $(e.target).attr("href");
            if (target == "#tabConfiguracionProceso") {
                base.Event.BtnConfiguracionProcesoClick();
            }
            if (target == "#tabConfiguracionSubProceso") {
                base.Event.BtnConfiguracionSubProcesoClick();
            }
            if (target == "#tabConfiguracionFamiliaEquipo") {
                base.Event.BtnConfiguracionFamiliaEquipoClick();
            }
            if (target == "#tabConfiguracionEquipo") {
                base.Event.BtnConfiguracionEquipoClick();
            }
            if (target == "#tabConfiguracionInstructor") {
               
            }          
        });


    };
    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        DlgFormularioAgregarEquipo: null,
        MantenimientoEquipoIndexModel: null,
        GrdResultado: null,
        BtnAgregarEquipo: function () { return $('#btnAgregarEquipo'); },
        BtnBuscar: function () { return $('#btnBuscar'); },
    };

    base.Event = {
        BtnBuscarClick: function () {
            'use strict'
            var filtro = {
            };
            $("#divGrdResultEquipo").empty();
            base.Function.CrearGrid();
            base.Control.GrdResultado.Load(filtro);
        },

        BtnConfiguracionProcesoClick: function () {
            window.location.href = Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Actions.FormularioMantenimientoProceso;
        },
        BtnConfiguracionSubProcesoClick: function () {
            window.location.href = Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Actions.FormularioMantenimientoSubProceso;
        },
        BtnConfiguracionFamiliaEquipoClick: function () {
            window.location.href = Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Actions.FormularioMantenimientoFamiliaEquipo;
        },
        BtnConfiguracionEquipoClick: function () {
            window.location.href = Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Actions.Index;
        },
        BtnConfiguracionInstructorClick: function () {

        },

        BtnAgregarEquipoClick: function () {
            base.Control.DlgFormularioAgregarEquipo.Show({});
        },
        BtnGridEditEquipoClick: function (row, data) {
            var filtro = {
                CodigoEquipo: data.CodigoEquipo
            };
            base.Control.DlgFormularioAgregarEquipo.Show(filtro);
        },
        ActualizarEstadoEquipoClick: function () {
            'use strict'
            var TmpEsActivoEquipo = 0;
            var CheckedValorObtenido = $(this).is(':checked');
            if (CheckedValorObtenido == true) {
                TmpEsActivoEquipo = 1;
            }
            base.Ajax.AjaxActualizarEstadoEquipo.data = {
                CodigoEquipo: $(this).data().codigomantenimientoequipo,
                EsActivo: TmpEsActivoEquipo
            };
            base.Ajax.AjaxActualizarEstadoEquipo.submit();
        },
        BtnGridDeleteEquipoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarEquipo.data = {
                        CodigoEquipo: data.CodigoEquipo
                    };
                    base.Ajax.AjaxEliminarEquipo.submit();
                }
            });
        },

        BtnBuscarDespuesRegistroEliminar: function () {
            var filtro = {
            };

            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Actions.Index, filtro);
        },

        AjaxActualizarEstadoEquipoSuccess: function (resultado) {
            if (resultado.Result >= 1) {
                base.Event.BtnBuscarClick();
            }
            else {
                base.Control.Mensaje.Warning({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxEliminarEquipoSuccess: function (resultado) {
            if (resultado.Result == 1) {
                base.Event.BtnBuscarClick();
            }
            else if (resultado.Result == 2) {
                base.Control.Mensaje.Warning({
                    message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.MsjValidarEquipoAsignadoProyecto
                });
            }
            else {
                base.Control.Mensaje.Warning({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },

    };
    base.Ajax = {
        AjaxActualizarEstadoEquipo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Actions.ActualizarEstadoEquipo,
            autoSubmit: false,
            onSuccess: base.Event.AjaxActualizarEstadoEquipoSuccess
        }),
        AjaxEliminarEquipo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Actions.EliminarEquipo,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarEquipoSuccess
        }),
    };
    base.Function = {

        CrearGrid: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: '#',
                width: "3%"
            });
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.MantenimientoEquipoIndexModel.ListaFamiliaEquipos },
                data: 'CodigoFamiliaEquipo',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.GridEquipoFamilia,
                width: "10%",
                mRender: function (data, type, full) {
                    return full.DescripcionFamilia;
                }
            });
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'CodigoDescripcionEquipo',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.GridCodigoEquipo,
                width: "10%"
            });
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'DescripcionEquipo',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.GridDescripcionEquipo,
                width: "10%"
            });
            columns.push({
                data: 'EsActivo',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.GridVigente,
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
                "data": "", "title": 'Oper.',
                "class": "controls",
                width: "5%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditEquipoClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteEquipoClick } }
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
                events: [
                 { type: 'click', selector: '.checkSeleccionarEquipo', callBack: base.Event.ActualizarEstadoEquipoClick }
                ],
                returnCallbackComplete: function (instancia, records) {
                }
            });
        }
    };
};