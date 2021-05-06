/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 15072017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Proceso');
Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Proceso.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'
        
        base.Event.btnBuscarProcesoClick();
        base.Control.BtnAgregarProceso().on('click', base.Event.BtnAgregarProcesoClick);
        base.Control.DlgFormularioAgregarProcesoModal = new Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.FormularioAgregarProcesoModal.Controller({
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
        DlgFormularioAgregarProcesoModal: null,
        MantenimientoEquipoIndexModel: null,
        CboIdioma: function () { return $('#slcIdioma'); },
        BtnAgregarProceso: function () { return $('#btnAgregarCapacitacion'); },
    };

    base.Event = {
        btnBuscarProcesoClick: function () {
            'use strict'
            var filtro = {
                CodigoIdioma: base.Control.CboIdioma().val(),             
            }
            $("#divGrdResultProcesoMantenimiento").empty();
            base.Function.CrearGridProceso();
            base.Control.GrdResultadoProcesoMantenimiento.Load(filtro);            
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

        BtnAgregarProcesoClick: function (row, data) {
            base.Control.DlgFormularioAgregarProcesoModal.Show({
                data: {
                    OpcionGuardar:'1'
                },
                AfterGrabar: function () {
                    base.Event.btnBuscarProcesoClick();
                }
            }
        );
        },

        BtnEditarProcesoClick: function (row, data) {

            base.Control.DlgFormularioAgregarProcesoModal.Show({
                data: {
                    CodProceso: data.CodProceso,
                    IdenProceso: data.IdenProceso,
                    NomProceso: data.NomProceso,
                    CodProcesoCapacitacion: data.CodProcesoCapacitacion,
                    Tipo: data.Tipo,
                    OpcionGuardar: '0'
                },
                AfterGrabar: function () {

                    base.Event.btnBuscarProcesoClick();
                }
            }

        );
       },
             
    };
    base.Ajax = {
    };
    base.Function = {

        CrearGridProceso: function () {
            var columns = new Array();

            columns.push({
                data: 'NumeroFila',
                title: '#',
                width: "3%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'IdenProceso',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.EtiquetaCodigoProceso,
                width: "10%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NomProceso',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.EtiquetaDescripcionProceso,
                width: "70%"
            });

            columns.push({
                "data": "", "title": 'Oper.',
                "class": "controls",
                actionButtons: [
                      { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnEditarProcesoClick } },       
                ]
            , width: "173px"
                , orderable: false,
            });
            base.Control.GrdResultadoProcesoMantenimiento = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultProcesoMantenimiento',
                columns: columns,
                filterColumn: true,
                hasSelectionRows: false,
                ordering: false,
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Actions.BuscarProceso,
                    source: 'Result'
                }
            });

        },

    };
};



