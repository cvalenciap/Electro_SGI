/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 19102017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaAtenciones.Index');
Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaAtenciones.Index.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Control.FormularioModelo = Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaAtenciones.Models.Formulario;        
        base.Function.CrearGrid();
        base.Event.BtnBuscarClick();
        base.Control.BtnBuscar().click(base.Event.BtnBuscarClick);

        base.Control.BtnLimpiar().off('click');
        base.Control.BtnLimpiar().on('click', base.Event.BtnLimpiarClick);

        base.Control.BtnDescargarExcel().on('click', base.Event.BtnDescargarExcelClick);

        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaAtencionDesde(),
            inputTo: base.Control.DtpFechaAtencionHasta(),
            minDateFrom: new Date(1900, 1, 1)
        });

        base.Control.BtnAgregarAtencion().off('click');
        base.Control.BtnAgregarAtencion().on('click', base.Event.BtnAgregarAtencionClick);
        base.Control.BtnRegresarBandejaLesiones().off('click');
        base.Control.BtnRegresarBandejaLesiones().on('click', base.Event.BtnRegresarBandejaLesionesClick);
    };

    base.Control = {        
        BtnAgregarAtencion: function () { return $('#btnAgregarAtencion'); },
        BtnRegresarBandejaLesiones: function () { return $('#btnRegresarBandejaLesiones'); },
        BtnBuscar: function () { return $('#btnBuscar'); },
        BtnLimpiar: function () { return $('#btnLimpiar'); },
        BtnDescargarExcel: function () { return $('#btnDescargarExcel'); },
        SlcTipoAtencion: function () { return $('#slcTipoAtencion'); },
        DtpFechaAtencionDesde: function () { return $('#dtpFechaAtencionDesde'); },
        DtpFechaAtencionHasta: function () { return $('#dtpFechaAtencionHasta'); },
        FormularioModelo: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),

        TxtTotalDiasDescanso: function () { return $('#txtTotalDiasDescanso'); },
        TxtTotalDiasCargados: function () { return $('#txtTotalDiasCargados'); },
        TxtTotalDiasRestringidos: function () { return $('#txtTotalDiasRestringidos'); },
        TxtTotalDiasPerdidos: function () { return $('#txtTotalDiasPerdidos'); },     
    };

    base.Event = {
        BtnRegresarBandejaLesionesClick: function () {
            location.href = Pe.ElectroPeru.SGI.Presentacion.Base.Actions.GestionBandejaLesiones;
        },
        BtnAgregarAtencionClick: function () {
            base.Ajax.AjaxValidarUltimaAtencionMedica.data = base.Control.FormularioModelo.ExpedienteMedico;
            base.Ajax.AjaxValidarUltimaAtencionMedica.submit();            
        },
        BtnBuscarClick: function () {
            'use strict'
            var filtro = {
                TipoAtencion: base.Control.SlcTipoAtencion().val(),
                FechaIncidenteDesde: base.Control.DtpFechaAtencionDesde().val(),
                FechaIncidenteHasta: base.Control.DtpFechaAtencionHasta().val(),
                CodigoExpediente: base.Control.FormularioModelo.ExpedienteMedico.CodigoExpediente
            };           
            base.Control.GrdResultado.Load(filtro);
        },
        BtnLimpiarClick: function () {
            base.Control.SlcTipoAtencion().val('');
            base.Control.DtpFechaAtencionDesde().val('');
            base.Control.DtpFechaAtencionHasta().val('');
        },
        BtnDescargarExcelClick: function () {
            if (base.Control.GrdResultado.core.rows().data().length >= 1) {
                var filtro = {
                    TipoAtencion: base.Control.SlcTipoAtencion().val(),
                    FechaDesde: base.Control.DtpFechaAtencionDesde().val(),
                    FechaHasta: base.Control.DtpFechaAtencionHasta().val(),
                    CodigoExpediente: base.Control.FormularioModelo.ExpedienteMedico.CodigoExpediente
                }
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaAtenciones.Actions.DescargarReporteBandejaAtenciones, filtro);
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaAtenciones.Resource.MsjSinResultadosAtenciones });
            }
        },
        BtnGridEditBandejaAtencionesClick: function (row, data) {
            'use strict'
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaAtenciones.Actions.FormularioAtencion, data);
        },
        BtnGridDeleteBandejaAtencionesClick: function (row, data) {
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarAtencionMedica.data = data;
                    base.Ajax.AjaxEliminarAtencionMedica.submit();
                }
            });
        },
        AjaxValidarUltimaAtencionMedicaSuccess: function (resultado) {            
            if (resultado.IsSuccess && resultado.Result != null && resultado.Result[0].length > 0)
            {   
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaAtenciones.Resource.EtiquetaValidacionUltimaAtencion });
            }
            else
            {
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaAtenciones.Actions.FormularioAtencion, base.Control.FormularioModelo.ExpedienteMedico);
            }
        },
        BtnValidarEditAtencion: function (data, type, full) {            
            if (full.EstadoAtencion == Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaAtenciones.DatosConstantes.AtencionAbierta)
                return true;
            else
                return false;
        },
        BtnValidarRevisarAtencion: function (data, type, full) {            
            if (full.EstadoAtencion == Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaAtenciones.DatosConstantes.AtencionCerrado)
                return true;
            else
                return false;
        },
        AjaxEliminarAtencionMedicaSuccess: function (resultado) {
            if (resultado.Result >= '1') {
                base.Event.BtnBuscarClick();
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });                
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
    };

    base.Ajax = {
        AjaxValidarUltimaAtencionMedica: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaAtenciones.Actions.ValidarUltimaAtencionMedica,
            autoSubmit: false,
            onSuccess: base.Event.AjaxValidarUltimaAtencionMedicaSuccess
        }), 
        AjaxEliminarAtencionMedica: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaAtenciones.Actions.EliminarAtencionMedica,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarAtencionMedicaSuccess
        }),       
    };

    base.Function = {
        CrearGrid: function () {
            var columns = new Array();
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaAtenciones.Resource.Correlativo,
                width: "5%",
                data: 'NumeroFila'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaAtenciones.Resource.TipoAtencion,
                width: "10%",
                data: 'TipoAtencion'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaAtenciones.Resource.FechaAtencion,
                width: "5%",
                data: 'FechaAtencionString'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaAtenciones.Resource.NombreProveedor,
                width: "10%",
                data: 'NombreProveedor'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaAtenciones.Resource.MedicoTratante,
                width: "10%",
                data: 'MedicoTratante'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaAtenciones.Resource.LesionActual,
                width: "10%",
                data: 'LesionActual'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaAtenciones.Resource.Diagnostico,
                width: "10%",
                data: 'Diagnostico'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaAtenciones.Resource.DiasDescansoMedico,
                width: "10%",
                data: 'DiasDescansoMedico'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaAtenciones.Resource.DiasPerdidos,
                width: "5%",
                data: 'DiasPerdidos'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaAtenciones.Resource.DiasCargados,
                width: "5%",
                data: 'DiasCargados'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaAtenciones.Resource.DiasRestringidos,
                width: "5%",
                data: 'DiasRestringidos'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaAtenciones.Resource.EstadoAtencion,
                width: "10%",
                data: 'DesEstadoAtencion'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaAtenciones.Resource.Operaciones,
                "class": "controls",
                width: "3%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, validateRender: base.Event.BtnValidarEditAtencion, event: { on: 'click', callBack: base.Event.BtnGridEditBandejaAtencionesClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Revisar, validateRender: base.Event.BtnValidarRevisarAtencion, event: { on: 'click', callBack: base.Event.BtnGridEditBandejaAtencionesClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.BtnValidarEditAtencion, event: { on: 'click', callBack: base.Event.BtnGridDeleteBandejaAtencionesClick } }
                ]
            });
            base.Control.GrdResultado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultAtenciones',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.BandejaAtenciones.Actions.ConsultarAtenciones,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                    if (records != null && records.length > 0) {
                        $('#blockTotales').show();
                        var obj = {
                            DiasCargados: 0,
                            DiasDescansoMedico: 0,
                            DiasPerdidos: 0,
                            DiasRestringidos: 0
                        };
                        for (var i = 0; i < records.length; i++) {
                            obj.DiasCargados += records[i].DiasCargados;
                            obj.DiasDescansoMedico += records[i].DiasDescansoMedico;
                            obj.DiasPerdidos += records[i].DiasPerdidos;
                            obj.DiasRestringidos += records[i].DiasRestringidos;
                        }

                        base.Control.TxtTotalDiasDescanso().val(obj.DiasDescansoMedico);
                        base.Control.TxtTotalDiasPerdidos().val(obj.DiasPerdidos);
                        base.Control.TxtTotalDiasCargados().val(obj.DiasCargados);
                        base.Control.TxtTotalDiasRestringidos().val(obj.DiasRestringidos);
                    }
                }
            });
        }
    };
};