/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 08092017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.FamiliaEquipo');
Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.FamiliaEquipo.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'
        ////carga Datos
        base.Event.btnBuscarFamiliaEquiposClick();
        base.Control.BtnAgregarFamiliaEq().on('click', base.Event.BtnAgregarFamiliaEqClick);

        base.Control.DlgFormularioAgregarFamiliaEqModal = new Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.FormularioAgregarFamiliaEquipoModal.Controller({
            AceptarSuccess: base.Event.btnBuscarFamiliaEquiposClick
        });

        base.Control.txtCodigoFamilia().on('keydown', function (e) {
            if (e.which == 13) {
                base.Event.btnBuscarFamiliaEquiposClick();
            }
        });
        base.Control.txtDesFamilia().on('keydown', function (e) {
            if (e.which == 13) {
                base.Event.btnBuscarFamiliaEquiposClick();
            }
        });
        base.Control.txtDesFamiliaAbrev().on('keydown', function (e) {
            if (e.which == 13) {
                base.Event.btnBuscarFamiliaEquiposClick();
            }
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
        DlgFormularioAgregarFamiliaEqModal: null,
        MantenimientoEquipoIndexModel: null,
        GrdResultado: null,
        BtnAgregarFamiliaEq: function () { return $('#btnAgregarFamiliaEquipo'); },
        CboIdioma: function () { return $('#slcIdioma'); },
        txtCodigoFamilia: function () { return $('#txtCodigoFamilia'); },
        txtDesFamilia: function () { return $('#txtDesFamilia'); },
        txtDesFamiliaAbrev: function () { return $('#txtDesFamiliaAbrev'); },
        DlgFormularioConfigProcesosFamiliaEquipoModal: null,
    };

    base.Event = {
        btnBuscarFamiliaEquiposClick: function () {

            var filtro = {
                CodigoIdioma: base.Control.CboIdioma().val(),
            }
            $("#divGrdResultFamiliaEquipo").empty();
            base.Function.CrearGridFamiliaEquipos();
            base.Control.GrdResultadoFamiliaEquipo.Load(filtro);

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
        BtnAgregarFamiliaEqClick: function (row, data) {
            base.Control.DlgFormularioAgregarFamiliaEqModal.Show({
                data: {
                    OpcionGuardar: '1'
                },
                //AfterGrabar: function () {

                //    base.Event.btnBuscarEquiposClick();
                //}
            }
        );
        },

        BtnEditarFamiliaEqClick: function (row, data) {            
            base.Control.DlgFormularioAgregarFamiliaEqModal.Show({
                data: {
                    CodFam_Eq: data.CodFam_Eq,
                    IdenFam_Eq: data.IdenFam_Eq,
                    NomFam_Eq: data.NomFam_Eq,
                    NomFam_Eq_Abrev: data.NomFam_Eq_Abrev,
                    OpcionGuardar: '0'
                },
                //AfterGrabar: function () {

                //    base.Event.btnBuscarEquiposClick();
                //}
            }

        );
        },

        BtnConfigProcesosFamiliaEquipoModalEqClick: function (row, data) {
            //base.Control.DlgFormularioConfigProcesosFamiliaEquipoModal.Show({
            //    data: {
            //        CodFam_Eq: data.CodFam_Eq,
            //        IdenFam_Eq: data.IdenFam_Eq,
            //        NomFam_Eq: data.NomFam_Eq,
            //        NomFam_Eq_Abrev: data.NomFam_Eq_Abrev,
            //        OpcionGuardar: '0'
            //    },
            //    //AfterGrabar: function () {

            //    //    base.Event.btnBuscarEquiposClick();
            //    //}
            //}
            //);

            //var filtro = {
            //    CodigoProyecto: data.CodigoProyecto,
            //    NombreProyecto: data.NombreProyecto,
            //    CodigoAsignacionProyecto: data.CodigoAsignacionProyecto
            //};
            //Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.Actions.FormularioSeleccionarPersonas, filtro);
    
            //var filtro = {
            //    CodigoProyecto: 17,
            //   NombreProyecto: 'PROYECTO PANAMA'
            //};

            var filtro = {
                CodigoFamiliaEquipo: data.CodFam_Eq,
                NombreFamiliaEquipo: data.NomFam_Eq
            };
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.Actions.FormularioSeleccionarProcesos, filtro);

        },
        BtnGridDeleteFamiliaEquipoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarFamiliaEquipo.data = {
                        CodFam_Eq: data.CodFam_Eq
                    };
                    base.Ajax.AjaxEliminarFamiliaEquipo.submit();
                }
            });
        },

        AjaxEliminarFamiliaEquipoSuccess: function (resultado) {
            if (resultado.Result == 1) {
                base.Event.btnBuscarFamiliaEquiposClick();
            }
            else if (resultado.Result == 2) {
                base.Control.Mensaje.Warning({
                    message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.MsjValidarFamiliaAsignadoEquipo
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

        AjaxEliminarFamiliaEquipo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Actions.EliminarFamiliaEquipo,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarFamiliaEquipoSuccess
        }),

    };
    base.Function = {
        CrearGridFamiliaEquipos: function () {
            var columns = new Array();      
            columns.push({
                data: 'NumeroFila',
                title: '#',
                width: "3%"
            });
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'IdenFam_Eq',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.EtiquetaCodigoFamilia,
                width: "10%"
            });
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NomFam_Eq',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.EtiquetaDescripcionFamilia,
                width: "40%"
            });
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NomFam_Eq_Abrev',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.EtiquetaDescripcionAbrev,
                width: "30%"
            });
            //columns.push({ name: 'CodFam_Eq', data: 'CodFam_Eq', title: "CodFam_Eq", width: "180px", "visible": false });
            //columns.push({ name: 'IdenFam_Eq', data: 'IdenFam_Eq', title: "IdenFam_Eq", width: "270px", "visible": true });
            //columns.push({ name: 'NomFam_Eq', data: 'NomFam_Eq', title: "NomFam_Eq", width: "700px", "visible": true });
            //columns.push({ name: 'NomFam_Eq_Abrev', data: 'NomFam_Eq_Abrev', title: "NomFam_Eq_Abrev", width: "97px", "visible": true });

            columns.push({
                "data": "",
                "class": "controls",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnEditarFamiliaEqClick } },
                    //{ type: Pe.GMD.UI.Web.Components.GridAction.AsignarSuplente, event: { on: 'click', callBack: base.Event.BtnGridAsignarProyectoPersonaClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteFamiliaEquipoClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Temas, event: { on: 'click', callBack: base.Event.BtnConfigProcesosFamiliaEquipoModalEqClick } },
                ]
            , width: "173px"
                , orderable: false,

            });

            base.Control.GrdResultadoFamiliaEquipo = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultFamiliaEquipo',
                columns: columns,
                filterColumn: true,
                hasSelectionRows: false,
                ordering: false,
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Actions.BuscarFamiliaEquipo,
                    source: 'Result'
                }
            });

        },




    };
};



