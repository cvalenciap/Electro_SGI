/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 19102017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.BandejaHoras.Index');
Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.BandejaHoras.Index.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Function.CrearGrid();
        base.Event.BtnBuscarClick();
        base.Control.BtnBuscar().click(base.Event.BtnBuscarClick);

        base.Control.BtnLimpiar().off('click');
        base.Control.BtnLimpiar().on('click', base.Event.BtnLimpiarClick);

        base.Control.btnDescargarExcel().on('click', base.Event.btnDescargarExcelClick);
    };
    base.Control = {
        BtnBuscar: function () { return $('#btnBuscar'); },
        SlcProyecto: function () { return $('#slcProyecto'); },
        SlcAnio: function () { return $('#slcAnio'); },
        SlcMesDesde: function () { return $('#slcMesDesde'); },
        SlcMesHasta: function () { return $('#slcMesHasta'); },
        btnDescargarExcel: function () { return $('#btnDescargarExcel'); },
        BtnLimpiar: function () { return $('#btnLimpiar'); },

        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
    };

    base.Event = {
        BtnBuscarClick: function () {
            'use strict'
            var filtro = {
                codigoproyecto: base.Control.SlcProyecto().val(),
                anio: base.Control.SlcAnio().val(),                
                mesdesde: base.Control.SlcMesDesde().val(),
                meshasta: base.Control.SlcMesHasta().val()
            };            
            base.Control.GrdResultado.Load(filtro);
        },

        BtnLimpiarClick: function () {
            base.Control.SlcProyecto().val('');
            base.Control.SlcAnio().val('');
            base.Control.SlcMesDesde().val('');
            base.Control.SlcMesHasta().val('');
        },

        btnDescargarExcelClick: function () {
            if (base.Control.GrdResultado.core.rows().data().length >= 1) {
                var filtro = {
                    codigoproyecto: base.Control.SlcProyecto().val(),
                    anio: base.Control.SlcAnio().val(),
                    mesdesde: base.Control.SlcMesDesde().val(),
                    meshasta: base.Control.SlcMesHasta().val()
                }
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Bandeja.Actions.DescargarReporteBandejaHHT, filtro);
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Bandeja.Resource.MsjSinResultados });
            }
        },
    };
    base.Ajax = {
    };
    base.Function = {
        CrearGrid: function () {
            var columns = new Array();
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Bandeja.Resource.GridNombreProyecto,
                width: "10%",
                data: 'DescripcionProyecto'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Bandeja.Resource.GridAnio,
                width: "10%",
                data: 'Anio'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Bandeja.Resource.GridMes,
                width: "10%",
                data: 'DescripcionMes'
            });
            //columns.push({
            //    title: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Bandeja.Resource.GridNumeroEmpleadosStracon,
            //    width: "10%",
            //    data: 'NumeroEmpleadosStracon'
            //});
            //columns.push({
            //    title: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Bandeja.Resource.GridNumeroObrerosStracon,
            //    width: "10%",
            //    data: 'NumeroObrerosStracon'
            //});
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Bandeja.Resource.GridTotalPersonalStracon,
                width: "10%",
                data: 'TotalPersonalStracon'
            });
            //columns.push({
            //    title: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Bandeja.Resource.GridEmpleadosContratistas,
            //    width: "10%",
            //    data: 'NumeroEmpleados'
            //});
            //columns.push({
            //    title: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Bandeja.Resource.GridNumeroObrerosContratistas,
            //    width: "10%",
            //    data: 'NumeroObreros'
            //});
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Bandeja.Resource.GridTotalPersonalContratistas,
                width: "10%",
                data: 'TotalPersonal'
            });
            //columns.push({
            //    title: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Bandeja.Resource.GridHHTEmpleadosStracon,
            //    width: "10%",
            //    data: 'HhtEmpleadosStracon'
            //});
            //columns.push({
            //    title: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Bandeja.Resource.GridHHTObrerosStracon,
            //    width: "10%",
            //    data: 'HhtObrerosStracon'
            //});
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Bandeja.Resource.GridTotalHHTStracon,
                width: "10%",
                data: 'TotalHhtStracon'
            });
            //columns.push({
            //    title: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Bandeja.Resource.GridHHTEmpleadosContratistas,
            //    width: "10%",
            //    data: 'HhtEmpleados'
            //});
            //columns.push({
            //    title: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Bandeja.Resource.GridHHTObrerosContratistas,
            //    width: "10%",
            //    data: 'HhtObreros'
            //});
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Bandeja.Resource.GridTotalHHTContratistas,
                width: "10%",
                data: 'TotalHht'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Bandeja.Resource.GridTotalEmpleados,
                width: "10%",
                data: 'TotalEmpleados'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Bandeja.Resource.GridTotalObreros,
                width: "10%",
                data: 'TotalObreros'
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Bandeja.Resource.GridTotalGeneralpersonal,
                width: "10%",
                data: 'TotalGeneralPersonal'
            });
            //columns.push({
            //    title: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Bandeja.Resource.GridTotalHHTEmpleados,
            //    width: "10%",
            //    data: 'TotalHhtEmpleados'
            //});
            //columns.push({
            //    title: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Bandeja.Resource.GridTotalHHTObreros,
            //    width: "10%",
            //    data: 'TotalHhtObreros'
            //});
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Bandeja.Resource.GridTotalGeneralHHT,
                width: "10%",
                data: 'TotalGeneralHht'
            });
            //columns.push({
            //    filter: { enabled: false, type: "textbox" },
            //    "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
            //    "class": "controls",
            //    width: "12%",
            //    actionButtons: [
            //        { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditEjecucionParticipanteClick } },
            //        { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteEjecucionClick } }
            //    ]
            //});
            base.Control.GrdResultado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultIngreso',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Bandeja.Actions.ConsultarRegistroHHT,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        }
    };
};