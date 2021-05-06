/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 08062017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.Index');
Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.Index.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Control.EjecucionIndexModel = Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.Models.Index;
        base.Function.CrearGrid();
        base.Event.BtnBuscarClick();
        base.Control.BtnBuscar().click(base.Event.BtnBuscarClick);

        base.Event.BtnLimpiarClick();
        base.Control.BtnLimpiar().click(base.Event.BtnLimpiarClick);

        base.Control.BtnAgregarEjecucion().on('click', base.Event.BtnAgregarEjecucionClick);
        base.Control.DlgFormularioAgregarEjecucion = new Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarEjecucion.Controller({
            AceptarSuccess: base.Event.BtnBuscarClick
        });

        var dateFormat = "dd/mm/yy",
        from = $("#dtpFechaDesde")
          .datepicker({ dateFormat: 'dd/mm/yy' })
          .on("change", function () {
              to.datepicker("option", "minDate", getDate(this));
          }),
        to = $("#dtpFechaHasta").datepicker({ dateFormat: 'dd/mm/yy' })
        .on("change", function () {
            from.datepicker("option", "maxDate", getDate(this));
        });

        base.Function.CargarFiltroComboFecha();

        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaDesde(),
            minDateFrom: new Date(1900, 1, 1)
        });

        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaHasta(),
            minDateFrom: new Date(1900, 1, 1)
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
        DlgFormularioAgregarEjecucion: null,
        DlgFormularioAgregarProyecto: null,
        EjecucionIndexModel: null,
        GrdResultado: null,
        BtnAgregarEjecucion: function () { return $('#btnAgregarEjecucion'); },
        DtpFechaDesde: function () { return $('#dtpFechaDesde'); },
        DtpFechaHasta: function () { return $('#dtpFechaHasta'); },
        DtpFechaActual: function () { return $('#hdnTipoFechaActual'); },
        
        BtnBuscar: function () { return $('#btnBuscar'); },
        BtnLimpiar: function () { return $('#btnLimpiar'); },
        SlcTipoFiltroFecha: function () { return $('#slcTipoFiltroFecha'); },
    };

    base.Event = {
        BtnBuscarClick: function () {
            'use strict'
            var filtro;
            if (base.Control.SlcTipoFiltroFecha().val() == 'Inicio') {
                filtro = {
                    FechaHoraInicioDesdeString: base.Control.DtpFechaDesde().val(),
                    FechaHoraInicioHastaString: base.Control.DtpFechaHasta().val(),
                };
                base.Control.GrdResultado.Load(filtro);
            }
            else if (base.Control.SlcTipoFiltroFecha().val() == 'Fin') {
                filtro = {
                    FechaHoraFinalDesdeString: base.Control.DtpFechaDesde().val(),
                    FechaHoraFinalHastaString: base.Control.DtpFechaHasta().val()
                };
                base.Control.GrdResultado.Load(filtro);
            }
            else {
                base.Control.GrdResultado.Load({});
            }
        },
        BtnLimpiarClick: function () {
            base.Control.DtpFechaDesde().val('');
            base.Control.DtpFechaHasta().val('');
        },
        BtnAgregarEjecucionClick: function () {

            base.Control.DlgFormularioAgregarEjecucion.Show({});
        },
        BtnGridEditEjecucionParticipanteClick: function (row, data) {
            var filtro = {
                CodigoEjecucion: data.CodigoEjecucion
            };
            base.Control.DlgFormularioAgregarEjecucion.Show(filtro);

        },
        BtnGridDeleteEjecucionClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {                    
                    base.Ajax.AjaxEliminarEjecucion.data = data
                    base.Ajax.AjaxEliminarEjecucion.submit();
                }
            });
        },
        BtnGridAsignarRegistroClaseClick: function (row, data) {
            'use strict'            
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.Actions.FormularioAgregarRegistroClase, data);
        },


        BtnGridAsignarParticipantesClick: function (row, data) {
            'use strict'
            var hoy = new Date();
            data.FechaFinalString = "06/10/2017 02:00";
            data.FechaInicioString = "20/10/2017 00:00";
            data.TipoVista = "CURSO";
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.Actions.FormularioAgregarParticipante, data);
        },

        AjaxEliminarEjecucionSuccess: function (resultado) {            
            if (resultado.Result >= 1)
            {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
                base.Event.BtnBuscarClick();
            }
            else if (resultado.Result == 2)
            {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.EtiquetaMensajeElimineDetalle });
            }
            else
            {
                base.Control.Mensaje.Warning({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
    };
    base.Ajax = {
        AjaxEliminarEjecucion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.Actions.EliminarEjecucion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarEjecucionSuccess
        }),
    };
    base.Function = {
        CargarFiltroComboFecha: function () {
            base.Control.SlcTipoFiltroFecha().empty();
            base.Control.SlcTipoFiltroFecha().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
            base.Control.SlcTipoFiltroFecha().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.GridFechaHoraInicio, "Inicio"));
            base.Control.SlcTipoFiltroFecha().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.GridFechaHoraFin, "Fin"));
        },
        CrearGrid: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.GridCorrelativo,
                width: "5%"
            });
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.EjecucionIndexModel.ListaProyectos },
                data: 'NombreProyecto',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.GridProyecto,
                width: "12%"
            });
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NombreCompletoInstructor',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.GridInstructor,
                width: "10%"
            });
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'DescripionFamiliaEquipo',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.GridFamiliaEquipo,
                width: "10%"
            });
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'DescripcionEquipo',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.GridMarca,
                width: "10%"
            });
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'DescripcionModeloEquipo',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.GridModelo,
                width: "10%"
            });
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'IdentificadorProceso',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.GridProceso,
                width: "10%"
            });
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NombreActividad',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.GridSubProceso,
                width: "10%"
            });            
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'HorasEstimadas',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.GridHorasEstimadas,
                width: "3%",
                mRender: function (data, type, full) {
                    return '' + (full.HorasEstimadas != null ? full.HorasEstimadas : '0') + '';
                }
            });
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'HorasDictadas',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.GridHorasDictadas,
                width: "3%",
                mRender: function (data, type, full) {
                    return '' + (full.HorasDictadas != null ? full.HorasDictadas : '0') + '';
                }
            });
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'CantParticipantes',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.GridCantParticipante,
                width: "3%",
                mRender: function (data, type, full) {
                    return '' + (full.CantParticipantes != null ? full.CantParticipantes : '0') + '';
                }
            });
            columns.push({
                filter: { enabled: false, type: "textbox" },
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.FechaActividad, event: { on: 'click', callBack: base.Event.BtnGridAsignarRegistroClaseClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditEjecucionParticipanteClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.RegistrarNotas, event: { on: 'click', callBack: base.Event.BtnGridAsignarParticipantesClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteEjecucionClick } }
                ]
            });
            base.Control.GrdResultado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultEjecucion',
                columns: columns,
                filterColumn: true,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.Actions.BuscarEjecucion,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        }
    };
};