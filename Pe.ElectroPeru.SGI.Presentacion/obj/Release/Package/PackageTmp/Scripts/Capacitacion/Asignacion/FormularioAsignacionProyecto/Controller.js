ns('Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioAsignacionProyecto');
Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioAsignacionProyecto.Controller = function (opts) {
    var base = this;
    base.Ini = function () {
        base.Control.BtnRegresarBandejaCapacitacion().on('click', base.Event.BtnRegresarBandejaCapacitacionClick);
        base.Control.BtnAgregarAsignacionProyecto().on('click', base.Event.BtnAgregarAsignacionProyectoClick); 
        base.Control.BtnBuscarAsignacionProyecto().on('click', base.Event.BtnBuscarAsignacionProyectoClick);
        base.Control.BtnLimpiarAsignacionProyecto().on('click', base.Event.BtnLimpiarAsignacionProyectoClick);        
        base.Control.DlgFormularioAgregarProyecto = new Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioAgregarProyectoModal.Controller({
            GrabarAsignacionProyectoSuccess: base.Event.BtnBuscarAsignacionProyectoClick
        });                         
        base.Function.CrearGridPersonas();
        base.Event.BtnBuscarAsignacionProyectoClick();
        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaPreparacionDesde(),
            minDateFrom: new Date(1900, 1, 1)
        });
        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaPreparacionHasta(),
            minDateFrom: new Date(1900, 1, 1)
        });

        var dateFormat = "dd/mm/yy",
        from = $("#dtpFechaPreparacionDesde")
          .datepicker({ dateFormat: 'dd/mm/yy' })
          .on("change", function () {
              to.datepicker("option", "minDate", getDate(this));
          }),
        to = $("#dtpFechaPreparacionHasta").datepicker({ dateFormat: 'dd/mm/yy' })
        .on("change", function () {
            from.datepicker("option", "maxDate", getDate(this));
        });

        function getDate(element) {
            var date;
            try {
                date = $.datepicker.parseDate(dateFormat, element.value);
            } catch (error) {
                date = null;
            }

            return date;
        }

    };
    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        GrdResultadoPersonas: null,
        HdnCodigoProyecto: function () { return $('#hdnCodigoProyecto') },
        HdnNombreProyecto: function () { return $('#hdnNombreProyecto') },       
        BtnAgregarPersona: function () { return $('#btnAgregarPersona'); },
        DtpFechaPreparacionDesde: function () { return $('#dtpFechaPreparacionDesde'); },
        DtpFechaPreparacionHasta: function () { return $('#dtpFechaPreparacionHasta'); },
        BtnBuscarAsignacionProyecto: function () { return $('#btnBuscarAsignacionProyecto'); },
        BtnAgregarAsignacionProyecto: function () { return $('#btnAgregarAsignacionProyecto'); },
        BtnLimpiarAsignacionProyecto: function () { return $('#btnLimpiarAsignacionProyecto'); },     
        DlgFormularioAgregarProyecto: null,
        DlgFormularioPersonasPorProyectoFecha: null,
        BtnAbrirModalBuscarPersonas: function () { return $('#btnAbrirModalBuscarPersonas'); },        
        BtnRegresarBandejaCapacitacion: function () { return $('#btnRegresarBandejaCapacitacion'); },
        DlgFormularioPersonas: null,
        DlgFormularioEquipos: null
    };
    base.Event = {
        BtnRegresarBandejaCapacitacionClick: function () {
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioAsignacionProyecto.Actions.BandejaCapacitacion, {});
        },
        BtnAgregarPersonaClick: function () {
            base.Control.GrdResultadoPersonas.Load({});
        },
        BtnAbrirModalBuscarPersonasClick: function () {          
            base.Control.DlgFormularioPersonas.Show();
        },
        BtnAgregarAsignacionProyectoClick: function () {
            var filtro = {
                CodigoProyecto: base.Control.HdnCodigoProyecto().val(),
                NombreProyecto: base.Control.HdnNombreProyecto().val()
            };
            base.Control.DlgFormularioAgregarProyecto.Show(filtro);
        },
        BtnBuscarAsignacionProyectoClick: function () {
            base.Event.BtnBuscarAsignacionProyectoClick();
        },
        BtnBuscarAsignacionProyectoClick: function () {
            var FechaInicio = base.Control.DtpFechaPreparacionDesde().val();
            var FechaFinal = base.Control.DtpFechaPreparacionHasta().val();
            base.Control.DtpFechaPreparacionDesde().removeClass("hasError");
            if(FechaInicio > FechaFinal)
            {
                base.Control.DtpFechaPreparacionDesde().addClass("hasError");
                return false;
            }
            else {
                var filtro = {
                    CodigoProyecto: base.Control.HdnCodigoProyecto().val(),
                    FechaPreparacionDesdeString: base.Control.DtpFechaPreparacionDesde().val(),
                    FechaPreparacionHastaString: base.Control.DtpFechaPreparacionHasta().val()
                }
                base.Control.GrdResultadoPersonas.Load(filtro);
            }  
        },
        BtnGridAsignarEquipoClick: function () {
            base.Control.DlgFormularioEquipos.Show();
        },
        BtnLimpiarAsignacionProyectoClick: function () {
            base.Control.DtpFechaPreparacionDesde().val('')
            base.Control.DtpFechaPreparacionHasta().val('')
        },
        BtnGridAsignarProyectoPersonaClick: function (row, data) {
            
            var filtro = {
                CodigoProyecto: data.CodigoProyecto,
                NombreProyecto: data.NombreProyecto,
                CodigoAsignacionProyecto: data.CodigoAsignacionProyecto
            };
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.Actions.FormularioSeleccionarPersonas, filtro);

        },
        BtnGridDeleteAsignacionProyectoClick: function (row, data) {
            'use strict'            
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarAsignacionProyecto.data = {
                        CodigoAsignacionProyecto: data.CodigoAsignacionProyecto,
                    };
                    base.Ajax.AjaxEliminarAsignacionProyecto.submit();                    
                }
            });
        },
        AjaxEliminarAsignacionProyectoSuccess: function (resultado) {
            'use strict'
            if (resultado.Result == 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnBuscarAsignacionProyectoClick();
            }
            else if (resultado.Result == 2) {
                base.Control.Mensaje.Warning({ message: 'Elimine primero las personas asignados al proyecto.' });
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        }
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
                data: 'NombreProyecto',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioAsignacionProyecto.Resource.GridProyecto,
                width: "25%"
            });
            columns.push({
                data: 'MesAsignacion',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioAsignacionProyecto.Resource.GridNroMes,
                width: "10%"
            });
            columns.push({
                data: 'FechaPreparacionString',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioAsignacionProyecto.Resource.GridFechaPreparacion,
                "class": "text-center",
                width: "15%"               
            });
            columns.push({
                data: 'HorasPlanificadas',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioAsignacionProyecto.Resource.GridHorasPlanificadas,
                "class": "text-center",
                width: "15%",
                mRender: function (data, type, full) {
                    return '<input type="text" value="' + (full.HorasPlanificadas != null ? full.HorasPlanificadas : '') + '" style="width:100px;text-align:center;" disabled>';                    
                }            
            });
            columns.push({
                data: 'PersonalActivo',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioAsignacionProyecto.Resource.GridPersonalActivo,
                "class": "text-center",
                width: "15%",
                mRender: function (data, type, full) {
                    return '<input type="text" value="' + (full.PersonalActivo != null ? full.PersonalActivo : '') + '" style="width:100px;text-align:center;" disabled>';
                }
            });
            columns.push({
                data: 'PersonalPlanificado',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioAsignacionProyecto.Resource.GridPersonalPlanificado,
                "class": "text-center",
                width: "15%",
                mRender: function (data, type, full) {
                    return '<input type="text" value="' + (full.PersonalPlanificado != null ? full.PersonalPlanificado : '') + '" style="width:100px;text-align:center;" disabled>';
                }
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioAsignacionProyecto.Resource.GridOperaciones,
                "class": "controls",
                width: "5%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.AsignarSuplente, event: { on: 'click', callBack: base.Event.BtnGridAsignarProyectoPersonaClick } },   
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.BtnGridDeleteValidate, event: { on: 'click', callBack: base.Event.BtnGridDeleteAsignacionProyectoClick } }
                ]
            });
            base.Control.GrdResultadoPersonas = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoProyectoMes',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioAsignacionProyecto.Actions.BuscarAsignacionProyectoPorFiltro,
                   source: 'Result'
                }
            });
        },
    };
    base.Ajax = {
        AjaxEliminarAsignacionProyecto: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioAsignacionProyecto.Actions.EliminarAsignacionProyecto,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarAsignacionProyectoSuccess
        }),
    };
};