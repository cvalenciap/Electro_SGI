
ns('Pe.ElectroPeru.SGI.Presentacion.Proceso.FormularioBandejaObjetivosFonafe.Index');
Pe.ElectroPeru.SGI.Presentacion.Proceso.FormularioBandejaObjetivosFonafe.Index.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Function.CrearGridBandejaObjetivosFonafe();
        base.Event.BtnBuscarClick();

        base.Control.DlgFormularioBandejaObjetivosEmpresa = new Pe.ElectroPeru.SGI.Presentacion.Proceso.FormularioBandejaObjetivosEmpresa.Index.Controller({
            
        });
    };

    base.Control = {
        HdnCodigoAmbito: function () { return $('#hdnCodigoAmbito'); },
        HdnCodigoPerspectiva: function () { return $('#hdnCodigoPerspectiva'); },
        TxtNombrePerspectiva: function () { return $('#txtNombrePerspectiva'); },
        DlgFormularioBandejaObjetivosEmpresa: null,
        
    };

    base.Event = {        
        BtnBuscarClick: function (data) {            
            var filtro = {
                CodigoPerspectiva: base.Control.HdnCodigoPerspectiva().val()
            };
            base.Control.GrdResultadoBandeja.Load(filtro);
        },
        BtnGridMostrarObjetivosEstrategicosEmpresaClick: function (row, data) {
            base.Control.DlgFormularioBandejaObjetivosEmpresa.Show({
                data: {
                    CodigoObjetivoEstrategicoFonafe: data.CodigoObjetivoEstrategicoFonafe, NombreObjetivoEstrategicoFonafe: data.NombreObjetivoEstrategicoFonafe, CodigoAmbito: base.Control.HdnCodigoAmbito().val(),
                    NombrePerspectiva: base.Control.TxtNombrePerspectiva().val()}
            });
        },
    };

    base.Ajax = {
        
    };

    base.Function = {
        CrearGridBandejaObjetivosFonafe: function () {
            var columns = new Array();
            columns.push({
                data: 'NombreObjetivoEstrategicoFonafe',
                title: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Resource.GridObjetivoEstrategicoFONAFE,
                width: "90%"
            });
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.DetalleOEE, event: { on: 'click', callBack: base.Event.BtnGridMostrarObjetivosEstrategicosEmpresaClick } }
                ]
            });

            base.Control.GrdResultadoBandeja = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultObjetivoFonafe',
                columns: columns,               
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Actions.BuscarObjetivoEstrategicoFonafe,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        }
    };
    base.Show = function (opts) {       
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Resource.EtiquetaTituloOEF,
            size: "size-wide",            
            //type: "type-info",
            close: function () {
            }
        });        
        base.Control.DlgForm.getAjaxContent({            
            action: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Actions.FormularioBandejaObjetivosFonafe,
            onSuccess: function () {
                base.Control.HdnCodigoAmbito().val(opts.data.CodigoAmbito);
                base.Control.HdnCodigoPerspectiva().val(opts.data.CodigoPerspectiva);
                base.Control.TxtNombrePerspectiva().val(opts.data.NombrePerspectiva);
                base.Ini();
            },            
        });
    };
};