
ns('Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanOperativo.Index');
Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanOperativo.Index.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'                
        base.Function.CrearGridBandejaPlanOperativo();
        base.Control.GrdResultadoBandeja.Load();

        base.Event.BtnBuscarClick();
        base.Control.BtnBuscar().click(base.Event.BtnBuscarClick);

        base.Control.BtnLimpiar().off('click');
        base.Control.BtnLimpiar().on('click', base.Event.BtnLimpiarClick);

        base.Control.BtnDescargarPO().on('click', base.Event.BtnDescargarPOClick);

        base.Control.DlgFormularioBandejaObjetivosEmpresa = new Pe.ElectroPeru.SGI.Presentacion.Proceso.FormularioBandejaObjetivosEmpresa.Index.Controller({

        });
    };

    base.Control = {

        BtnDescargarPO: function () { return $('#btnDescargarPO'); },
        BtnBuscar: function () { return $('#btnBuscar'); },
        BtnLimpiar: function () { return $('#btnLimpiar'); },
        TxtDescripcionObjetivoEstrategicoFonafe: function () { return $('#txtDescripcionObjetivoEstrategicoFonafe'); },
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        DlgFormularioBandejaObjetivosEmpresa: null,
    };

    base.Event = {
        BtnBuscarClick: function () {
            var filtro = {
                DescripcionObjetivoEstrategicoFonafe: base.Control.TxtDescripcionObjetivoEstrategicoFonafe().val(),
            };
            base.Control.GrdResultadoBandeja.Load(filtro);
        },
        BtnLimpiarClick: function () {
            base.Control.TxtDescripcionObjetivoEstrategicoFonafe().val('');
        },
        BtnGridMostrarObjetivosEstrategicosEmpresaClick: function (row, data) {
            base.Control.DlgFormularioBandejaObjetivosEmpresa.Show({
                data: { CodigoObjetivoEstrategicoFonafe: data.CodigoObjetivoEstrategicoFonafe, NombreObjetivoEstrategicoFonafe: data.NombreObjetivoEstrategicoFonafe }
            });            
        },
        BtnDescargarPOClick: function () {
            if (base.Control.GrdResultadoBandeja.core.rows().data().length >= 1) {
                var filtro = {}

                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Actions.DescargarPO, filtro);
            } else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MensajeObservacionAuditoria });
            }
        },
    };

    base.Ajax = {
        
    };

    base.Function = {
        CrearGridBandejaPlanOperativo: function () {
            var columns = new Array();            
            columns.push({
                data: 'DescripcionObjetivoEstrategicoFonafe',
                title: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanOperativo.Resource.GridNombreObjetivoEstrategicoFonafe,                
                width: "20%"                
            });            
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.DetalleBandeja, event: { on: 'click', callBack: base.Event.BtnGridMostrarObjetivosEstrategicosEmpresaClick } }                    
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
                    url: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanOperativo.Actions.BuscarObjetivoEstrategicoFonafe,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        }
    };
};