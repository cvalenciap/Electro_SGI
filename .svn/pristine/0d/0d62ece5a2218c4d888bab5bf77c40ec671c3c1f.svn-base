/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 08092017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.SubProceso');
Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.SubProceso.Controller = function () {
    var base = this;
    base.Ini = function () {
        'use strict'
        //$('#listaConfiguracionInstructor').addClass("active");
        base.Control.MantenimientoSubProcesoIndexModel = Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Models.SubProceso;
        base.Event.btnBuscarSubProcesoClick();  
        base.Control.BtnAgregarSubProceso().on('click', base.Event.BtnAgregarSubProcesoClick);
        base.Control.DlgFormularioAgregarSubProcesoModal = new Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.FormularioAgregarSubProcesoModal.Controller({
            AceptarSuccess: base.Event.btnBuscarSubProcesoClick
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
        DlgFormularioAgregarSubProcesoModal: null,
        MantenimientoEquipoIndexModel: null,
        BtnAgregarSubProceso: function () { return $('#btnAgregarSubProceso'); },
        CboIdioma: function () { return $('#slcIdioma'); },
    };

    base.Event = {
        btnBuscarSubProcesoClick: function () {
            'use strict'
            var filtro = {
                CodigoIdioma: base.Control.CboIdioma().val()             
            }
            $("#divGrdResultSubProceso").empty();
            base.Function.CrearGridSubProceso();
            base.Control.GrdResultadoSubProcesoMantenimiento.Load(filtro);
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
        BtnEditarSubProcesoClick: function (row, data) {
            base.Control.DlgFormularioAgregarSubProcesoModal.Show({
                data: {
                    CodSubProceso: data.CodSubProceso,
                    IdenSubProceso: data.IdenSubProceso,
                    NomSubProceso: data.NomSubProceso,
                    CodTipoSubProceso: data.CodTipoSubProceso,
                    Tipo: data.Tipo,
                    OpcionGuardar: '0'
                },
                //AfterGrabar: function () {
                //    base.Event.btnBuscarEquiposClick();
                //}
            }

        );
        },
        
        BtnAgregarSubProcesoClick: function (row, data) {

            base.Control.DlgFormularioAgregarSubProcesoModal.Show({
                data: {
                    OpcionGuardar:'1'
                },
                //AfterGrabar: function () {
                //    base.Event.btnBuscarEquiposClick();
                //}
            }
        );
        },

        BtnGridDeleteSubProcesoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarSubProceso.data = {
                        CodSubProceso: data.CodSubProceso
                    };
                    base.Ajax.AjaxEliminarSubProceso.submit();
                }
            });
        },
        AjaxEliminarSubProcesoSuccess: function (resultado) {
            if (resultado.Result == 1) {
                base.Event.btnBuscarSubProcesoClick();
            }
            else if (resultado.Result == 2) {
                base.Control.Mensaje.Warning({
                    message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.MsjValidarSubProcesoAsignadoFamilia
                });
            }
            else {
                base.Control.Mensaje.Warning({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },


    };

    base.Function = {
        CrearGridSubProceso: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: '#',
                width: "3%"
            });
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'IdenSubProceso',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.EtiquetaCodigoSubProceso,
                width: "10%"
            });
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NomSubProceso',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.EtiquetaDescripcionSubProceso,
                width: "50%"
            });
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.MantenimientoSubProcesoIndexModel.ListaTipo },
                data: 'CodTipoSubProceso',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.EtiquetaSubProcesoTipo,
                width: "20%",
                mRender: function (data, type, full) {
                    return full.Tipo;
                }
            });
            columns.push({
                "data": "", "title": 'Oper.',
                "class": "controls",
                actionButtons: [
                      { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnEditarSubProcesoClick } },
                      { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteSubProcesoClick } },
                ]
            , width: "173px"
                , orderable: false,

            });

            base.Control.GrdResultadoSubProcesoMantenimiento = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultSubProceso',
                columns: columns,
                filterColumn: true,
                hasSelectionRows: false,
                ordering: false,
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Actions.BuscarSubProceso,
                    source: 'Result'
                }
            });

        },

    };
    base.Ajax = {
        AjaxEliminarSubProceso: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Actions.EliminarSubProceso,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarSubProcesoSuccess
        }),

    };

};



