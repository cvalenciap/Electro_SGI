/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 19102017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaLesiones.Index');
Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaLesiones.Index.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Function.CrearGrid();
        base.Event.BtnBuscarClick();
        base.Control.BtnBuscar().click(base.Event.BtnBuscarClick);
        
        base.Control.BtnLimpiar().off('click');
        base.Control.BtnLimpiar().on('click', base.Event.BtnLimpiarClick);

        base.Control.btnDescargarExcel().on('click', base.Event.btnDescargarExcelClick);

        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaIncidenteDesde(),
            inputTo: base.Control.DtpFechaIncidenteHasta(),
            minDateFrom: new Date(1900, 1, 1)
        });
    };

    base.Control = {
        BtnBuscar: function () { return $('#btnBuscar'); },
        SlcProyecto: function () { return $('#slcProyecto'); },
        DtpFechaIncidenteDesde: function () { return $('#dtpFechaIncidenteDesde'); },
        DtpFechaIncidenteHasta: function () { return $('#dtpFechaIncidenteHasta'); },
        BtnLimpiar: function () { return $('#btnLimpiar'); },
        btnDescargarExcel: function () { return $('#btnDescargarExcel'); },

        FormularioModeloAtencionMedica: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
    };

    base.Event = {
        BtnBuscarClick: function () {
            'use strict'
            var filtro = {
                CodigoProyecto: base.Control.SlcProyecto().val(),
                FechaIncidenteDesde: base.Control.DtpFechaIncidenteDesde().val(),
                FechaIncidenteHasta: base.Control.DtpFechaIncidenteHasta().val(),
                ExpedientePorCerrar: "No"
            };
            base.Control.GrdResultado.Load(filtro);
        },
        BtnLimpiarClick: function () {
            base.Control.SlcProyecto().val('');
            base.Control.DtpFechaIncidenteDesde().val('');
            base.Control.DtpFechaIncidenteHasta().val('');
        },
        btnDescargarExcelClick: function () {
            if (base.Control.GrdResultado.core.rows().data().length >= 1) {
                var filtro = {
                    CodigoProyecto: base.Control.SlcProyecto().val(),
                    FechaIncidenteDesde: base.Control.DtpFechaIncidenteDesde().val(),
                    FechaIncidenteHasta: base.Control.DtpFechaIncidenteHasta().val(),
                    ExpedientePorCerrar: "No"
                }
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaLesiones.Actions.DescargarReporteBandejaLesiones, filtro);
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaLesiones.Resource.MsjSinResultadosLesiones });
            }
        },
        BtnGridEditBandejaLesionesClick: function (row, data) {
            data.IndicadorCierre = false;
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaLesiones.Actions.IngresoExpediente, data);            
        },
        BtnGridBandejaAtencionesClick: function (row, data) {
            base.Control.FormularioModeloAtencionMedica = data;
            base.Ajax.AjaxValidarExpedienteMedico.data = data;
            base.Ajax.AjaxValidarExpedienteMedico.submit();            
        },
        BtnGridDeleteBandejaLesionesClick: function (row, data) {
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarExpedienteMedico.data = data;
                    base.Ajax.AjaxEliminarExpedienteMedico.submit();
                }
            });
        },
        AjaxEliminarExpedienteMedicoSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Event.BtnBuscarClick();
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
            }
            else if (resultado.Result == '-2') {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaLesiones.Resource.MensajeValidacionExpedienteMedico
                });
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxValidarExpedienteMedicoSuccess: function (resultado) {            
            if (resultado.IsSuccess && resultado.Result != null && resultado.Result[0].length > 0)
            {   
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaLesiones.Resource.EtiquetaValidarExpedienteMedico });
            }
            else
            {
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaLesiones.Actions.BandejaAtenciones, base.Control.FormularioModeloAtencionMedica);
            }
        },
    };

    base.Function = {
        CrearGrid: function () {
            var columns = new Array();
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaLesiones.Resource.GridNroExpediente,
                width: "10%",
                data: 'NroExpediente'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaLesiones.Resource.GridApellidosyNombres,
                width: "10%",
                data: 'ApellidosyNombres'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaLesiones.Resource.GridTipoDocumento,
                width: "10%",
                data: 'TipoDocumento'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaLesiones.Resource.GridNroDocumento,
                width: "10%",
                data: 'NroDocumento'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaLesiones.Resource.GridEmpresaColaborador,
                width: "10%",
                data: 'EmpresaColaborador'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaLesiones.Resource.GridPuestoTrabajo,
                width: "10%",
                data: 'PuestoTrabajo'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaLesiones.Resource.GridProyectoIncidente,
                width: "10%",
                data: 'ProyectoIncidente'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaLesiones.Resource.GridFechaIncidente,
                width: "10%",
                data: 'FechaIncidenteString'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaLesiones.Resource.GridLesionActual,
                width: "10%",
                data: 'LesionActual'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaLesiones.Resource.GridParteCuerpo,
                width: "10%",
                data: 'ParteCuerpo'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaLesiones.Resource.GridDiagnostico,
                width: "10%",
                data: 'Diagnostico'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaLesiones.Resource.GridFechaProximaCita,
                width: "10%",
                data: 'FechaProximaCitaString'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaLesiones.Resource.GridDiasDescansoMedico,
                width: "10%",
                data: 'DiasDescansoMedico'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaLesiones.Resource.GridDiasPerdidos,
                width: "10%",
                data: 'DiasPerdidos'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaLesiones.Resource.GridDiasCargados,
                width: "10%",
                data: 'DiasCargados'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaLesiones.Resource.GridDiasRestringidos,
                width: "10%",
                data: 'DiasRestringidos'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaLesiones.Resource.GridEstado,
                width: "10%",
                data: 'EstadoExpediente'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaLesiones.Resource.GridEstadoAtencion,
                width: "10%",
                data: 'DesEstadoAtencion'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaLesiones.Resource.GridOperaciones,
                "class": "controls",
                width: "3%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.DetalleBandeja, event: { on: 'click', callBack: base.Event.BtnGridBandejaAtencionesClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditBandejaLesionesClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteBandejaLesionesClick } }
                ]
            });
            base.Control.GrdResultado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultLesiones',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaLesiones.Actions.ConsultarLesiones,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        }
    };

    base.Ajax = {
        AjaxEliminarExpedienteMedico: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaLesiones.Actions.EliminarExpedienteMedico,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarExpedienteMedicoSuccess
        }),
        AjaxValidarExpedienteMedico: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaLesiones.Actions.ValidarExpedienteMedico,
            autoSubmit: false,
            onSuccess: base.Event.AjaxValidarExpedienteMedicoSuccess
        }),
    };
};