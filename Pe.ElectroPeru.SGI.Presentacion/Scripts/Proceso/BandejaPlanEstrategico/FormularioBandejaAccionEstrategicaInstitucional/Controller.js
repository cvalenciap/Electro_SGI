
ns('Pe.ElectroPeru.SGI.Presentacion.Proceso.FormularioBandejaAccionEstrategicaInstitucional.Index');
Pe.ElectroPeru.SGI.Presentacion.Proceso.FormularioBandejaAccionEstrategicaInstitucional.Index.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Function.CrearGridBandejaAccionEstrategicaInstitucional();
        base.Event.BtnBuscarClick();

        base.Control.DlgFormularioBandejaIndicador = new Pe.ElectroPeru.SGI.Presentacion.Proceso.FormularioBandejaIndicador.Index.Controller({
            //GrabarBandejaObjetivosFonafeSuccess: base.Event.BtnBuscarClick
        });
    };

    base.Control = {
        HdnCodigoObjetivoEstrategicoEmpresa: function () { return $('#hdnCodigoObjetivoEstrategicoEmpresa'); },
        TxtNombreObjetivoEstrategicoEmpresa: function () { return $('#txtNombreObjetivoEstrategicoEmpresa'); },
        TxtSeguimientoAEI: function () { return $('#txtSeguimientoAEI'); },
        HdnCodigoAmbito: function () { return $('#hdnCodigoAmbito'); },
        DlgFormularioBandejaIndicador: null,
        
    };

    base.Event = {        
        BtnBuscarClick: function (data) {            
            var filtro = {
                CodigoObjetivoEstrategicoEmpresa: base.Control.HdnCodigoObjetivoEstrategicoEmpresa().val(),
                CodigoAmbito: base.Control.HdnCodigoAmbito().val()
            };
            base.Control.GrdResultadoBandeja.Load(filtro);
        },
        BtnGridMostrarIndicadorClick: function (row, data) {
            base.Control.DlgFormularioBandejaIndicador.Show({
                data: {
                    CodigoAccionEstrategicaInstitucional: data.CodigoAccionEstrategicaInstitucional,
                    NombreAccionEstrategicaInstitucional: data.NombreAccionEstrategicaInstitucional,
                    Ruta: "AEI",
                    CodigoAmbito: base.Control.HdnCodigoAmbito().val(),
                    Seguimiento: base.Control.TxtSeguimientoAEI().text()
                }
            });
        },
    };

    base.Ajax = {
        
    };

    base.Function = {
        CrearGridBandejaAccionEstrategicaInstitucional: function () {
            var columns = new Array();
            columns.push({
                data: 'NombreAccionEstrategicaInstitucional',
                title: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Resource.GridNombreAccionEstrategicaInstitucional,
                width: "90%"
            });
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.DetalleIndicador, event: { on: 'click', callBack: base.Event.BtnGridMostrarIndicadorClick } },
                ]
            });

            base.Control.GrdResultadoBandeja = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultAccionEstrategicaInstitucional',
                columns: columns,               
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Actions.BuscarAccionEstrategicaInstitucional,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        }
    };
    base.Show = function (opts) {       
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Resource.EtiquetaTituloAEI,
            size: "size-wide",            
            //type: "type-info",
            close: function () {
            }
        });
        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Actions.FormularioBandejaAccionEstrategicaInstitucional,            
            onSuccess: function () {                
                base.Control.HdnCodigoObjetivoEstrategicoEmpresa().val(opts.data.CodigoObjetivoEstrategicoEmpresa);
                base.Control.TxtNombreObjetivoEstrategicoEmpresa().val(opts.data.NombreObjetivoEstrategicoEmpresa);
                base.Control.HdnCodigoAmbito().val(opts.data.CodigoAmbito);
                base.Control.TxtSeguimientoAEI().text(opts.data.Seguimiento + " --> Objetivo Estratégico Empresa: " + opts.data.NombreObjetivoEstrategicoEmpresa);
                base.Ini();
            },            
        });
    };
};