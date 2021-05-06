ns('Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioSeleccionarEquipos');
Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioSeleccionarEquipos.Controller = function (opts) {
    var base = this;

    base.Ini = function () {  
       
        base.Control.BtnRegresarBandejaCapacitacion().on('click', base.Event.BtnRegresarBandejaCapacitacionClick);
        base.Control.BtnAgregarEquipo().on('click', base.Event.BtnAgregarEquipoClick);

        base.Control.DlgFormularioEquipos = new Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioAgregarEquiposModal.Controller({
            AceptarSuccess: base.Event.BuscarEquipoModalSuccess
        });

        base.Control.BtnBuscarEquipo().on('click', base.Event.BtnBuscarEquipoClick);
        base.Function.CrearGridEquipos();
        base.Event.BuscarEquiposPorProyectoClick();

        base.Control.DlgFormularioAgregarProcesoModal = new Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioAgregarProcesosEquipoModal.Controller({
            AceptarSuccess: base.Event.BtnAgregarEquipoClick
        });
    };

    base.Show = function (opts) {};

    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        GrdResultadoEquipos: null,
        SeleccionadoEquipo: [],
        HdnCodigoProyecto: function () { return $('#hdnCodigoProyecto') },
        DlgFormularioAgregarProcesoModal: null,
        BtnBuscarEquipo: function () { return $('#btnBuscarEquipo'); },
        BtnAgregarEquipo: function () { return $('#btnAgregarEquipo'); },
        TxtNombreHerramienta: function () { return $('#txtNombreHerramienta'); },
        BtnRegresarBandejaCapacitacion: function () { return $('#btnRegresarBandejaCapacitacion'); },
        TxtCantidadEquipos: function () { return $('#txtCantidadEquipos'); },
      
    };

    base.Event = {
        ActualizarEstadoEquipoProyectoClick: function(){
            'use strict'
            base.Ajax.AjaxActualizarEstadoEquipoProyecto.data = {
                CodigoAsignacionEquipoProyecto: $(this).data().codigoasignacionequipoproyecto,
                EsActivo: $(this).is(':checked')
            };
            base.Ajax.AjaxActualizarEstadoEquipoProyecto.submit();
        },
        BtnRegresarBandejaCapacitacionClick: function () {
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Actions.BandejaCapacitacion, {});
        },
        BtnAgregarEquipoClick: function () {          
            var filtro = {
                CodigoProyecto: base.Control.HdnCodigoProyecto().val()
            }
            base.Control.GrdResultadoEquipos.Load(filtro);
        },
        BtnBuscarEquipoClick: function () {
        
            var filtro = {
                CodigoProyecto: base.Control.HdnCodigoProyecto().val()
            }
            base.Control.DlgFormularioEquipos.Show(true, [], filtro);
        },      
        BuscarEquiposPorProyectoClick: function () {
            var filtro = {
                CodigoProyecto: base.Control.HdnCodigoProyecto().val()
            }
            base.Control.GrdResultadoEquipos.Load(filtro);
        },
        BtnGridAsignarProcesoClick: function (row, data) {
         
            var filtro = {
                DescripcionEquipo: data.DescripcionEquipo,
                CodigoAsignacionEquipoProyecto: data.CodigoAsignacionEquipoProyecto,
                CodigoProyecto: base.Control.HdnCodigoProyecto().val(),
                CodigoDescripcionEquipo: data.CodigoDescripcionEquipo,
                CodigoFamiliaEquipo: data.CodigoFamiliaEquipo,
                CodigoEquipo: data.CodigoEquipo
            };
            base.Control.DlgFormularioAgregarProcesoModal.Show(filtro);
        },
        BuscarEquipoModalSuccess: function (equipoSeleccionado) {
            base.Event.BuscarEquiposPorProyectoClick();
        },
        BtnGridDeleteEquipoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarEquipoProyecto.data = {
                        CodigoAsignacionEquipoProyecto: data.CodigoAsignacionEquipoProyecto,
                    };

                    base.Ajax.AjaxEliminarEquipoProyecto.submit();
                }
            });
        },
        AjaxEliminarEquipoProyectoSuccess: function (resultado) {
            'use strict'
            if (resultado.Result >= 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BuscarEquiposPorProyectoClick();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxActualizarEstadoEquipoProyectoSuccess: function (resultado) {
            if (resultado.Result >= 1) {
                base.Event.BtnAgregarEquipoClick();
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
        CrearGridEquipos: function () {
            var columns = new Array();
            columns.push({
                data: 'DescripcionEquipo',
                "class": "text-center",
                
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Resource.GridModeloDescripcion,

                width: "20%"
            });
            columns.push({
                data: 'CodigoDescripcionEquipo',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Resource.GridModeloEquipo,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionFamilia',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Resource.GridFamiliaEquipo,
                width: "20%"
            });
            columns.push({
                data: '',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Resource.GridHorasPlanificadas,
                "class": "text-center",
                width: "10%",
                mRender: function (data, type, full) {
                    return '<input type="text" value="' + (full.HorasPlanificadasEquipo != null ? full.HorasPlanificadasEquipo : '') + '" style="width:100px;text-align:center;" disabled>';
                }
            });

            //columns.push({
            //    data: '',
            //    title: 'Plazo Estimado',
            //    "class": "text-center",
            //    width: "10%",
            //    mRender: function (data, type, full) {
            //        return '<input type="text" value="' + (full.PlazoEstimadoEquipo != null ? full.PlazoEstimadoEquipo : '') + '" style="width:100px;text-align:center;" disabled>';
            //    }
            //});

            columns.push({
                data: 'ESTADO',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Resource.GridIndicadorAplicaEquipo,
                "class": "text-center",
                width: "15%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input " + (full.EsActivoEquipo == true ? " checked " : "") + " data-codigoasignacionequipoproyecto='" + full.CodigoAsignacionEquipoProyecto + "' class='checkSeleccionarEquipo' type='checkbox' name='gridCheckRecordCategoria'>";
                    return cadena;
                },
            });            
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Resource.GridOperacion,
                "class": "controls",
                width: "5%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Temas, event: { on: 'click', callBack: base.Event.BtnGridAsignarProcesoClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteEquipoClick } }
                ]
            });
            base.Control.GrdResultadoEquipos = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoHerramientas',
                columns: columns,
                hasSelectionRows: false,
                hasPaging: false,
                hasPagingServer: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Actions.BuscarAsignacionEquiposProyecto,
                    source: 'Result'
                },
                events: [
                   { type: 'click', selector: '.checkSeleccionarEquipo', callBack: base.Event.ActualizarEstadoEquipoProyectoClick }
                ],
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
                    else {
                        base.Control.TxtCantidadEquipos().val('');
                    }
                }
            });
        },
    };

    base.Ajax = {
        AjaxEliminarEquipoProyecto: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Actions.EliminarEquipoProyecto,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarEquipoProyectoSuccess
        }),

        AjaxActualizarEstadoEquipoProyecto: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Actions.ActualizarEstadoEquipoProyecto,
            autoSubmit: false,
            onSuccess: base.Event.AjaxActualizarEstadoEquipoProyectoSuccess
        }),
    };
};