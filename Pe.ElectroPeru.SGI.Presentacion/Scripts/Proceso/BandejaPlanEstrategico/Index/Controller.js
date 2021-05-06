
ns('Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Index');
Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Index.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'                
        base.Function.CrearGridBandejaPlanEstrategico();
        base.Control.GrdResultadoBandeja.Load();

        base.Event.BtnBuscarClick();
        base.Control.BtnBuscar().click(base.Event.BtnBuscarClick);

        base.Control.BtnLimpiar().off('click');
        base.Control.BtnLimpiar().on('click', base.Event.BtnLimpiarClick);

        base.Control.BtnDescargarPE().on('click', base.Event.BtnDescargarPEClick);
        base.Control.BtnDescargarAlineamiento().on('click', base.Event.BtnDescargarAlineamientoClick);
        base.Control.BtnDescargarMatrizAEI().on('click', base.Event.BtnDescargarMatrizAEIClick);

        base.Control.DlgFormularioBandejaObjetivosFonafe = new Pe.ElectroPeru.SGI.Presentacion.Proceso.FormularioBandejaObjetivosFonafe.Index.Controller({

        });
    };

    base.Control = {

        BtnDescargarPE: function () { return $('#btnDescargarPE'); },
        BtnDescargarAlineamiento: function () { return $('#btnDescargarAlineamiento'); },
        BtnDescargarMatrizAEI: function () { return $('#btnDescargarMatrizAEI'); },
        BtnBuscar: function () { return $('#btnBuscar'); },
        BtnLimpiar: function () { return $('#btnLimpiar'); },
        TxtDescripcionPerspectiva: function () { return $('#txtDescripcionPerspectiva'); },
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        DlgFormularioBandejaObjetivosFonafe: null,
    };

    base.Event = {
        BtnBuscarClick: function () {
            var filtro = {
                DescripcionPerspectiva: base.Control.TxtDescripcionPerspectiva().val(),
            };
            base.Control.GrdResultadoBandeja.Load(filtro);
        },
        BtnLimpiarClick: function () {
            base.Control.TxtDescripcionPerspectiva().val('');
        },
        BtnGridMostrarObjetivosFonafeClick: function (row, data) {
            base.Control.DlgFormularioBandejaObjetivosFonafe.Show({
                data: { CodigoPerspectiva: data.CodigoPerspectiva, NombrePerspectiva: data.NombrePerspectiva, CodigoAmbito: 2}
            });            
        },
        BtnDescargarPEClick: function () {
            if (base.Control.GrdResultadoBandeja.core.rows().data().length >= 1) {
                var filtro = {}

                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Actions.DescargarPE, filtro);
            } else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MensajeObservacionAuditoria });
            }

        },
        BtnDescargarAlineamientoClick: function () {
            if (base.Control.GrdResultadoBandeja.core.rows().data().length >= 1) {
                var filtro = {}

                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Actions.DescargarAlineamientoOECyOES, filtro);
            } else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MensajeObservacionAuditoria });
            }

        },
        BtnDescargarMatrizAEIClick: function () {
            if (base.Control.GrdResultadoBandeja.core.rows().data().length >= 1) {
                var filtro = {}
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Actions.DescargarMatrizAEI, filtro);
            } else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MensajeObservacionAuditoria });
            }
        },
    };

    base.Ajax = {
        
    };

    base.Function = {
        CrearGridBandejaPlanEstrategico: function () {
            var columns = new Array();            
            columns.push({
                data: 'DescripcionPerspectiva',
                title: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Resource.GridNombrePerspectiva,                
                width: "20%"                
            });            
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.DetalleOEC, event: { on: 'click', callBack: base.Event.BtnGridMostrarObjetivosFonafeClick } }
                ]
            });
         
            base.Control.GrdResultadoBandeja = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResult',
                columns: columns,
                //'rowsGroup': [2],
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Actions.BuscarPerspectiva,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        }
    };
};