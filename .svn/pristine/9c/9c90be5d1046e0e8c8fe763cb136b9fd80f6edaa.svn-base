
ns('Pe.ElectroPeru.SGI.Presentacion.Proceso.FormularioBandejaIndicador.Index');
Pe.ElectroPeru.SGI.Presentacion.Proceso.FormularioBandejaIndicador.Index.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Function.CrearGridBandejaIndicador();
        base.Event.BtnBuscarClick();

        base.Control.DlgFormularioValorIndicador = new Pe.ElectroPeru.SGI.Presentacion.Proceso.FormularioValorIndicador.Index.Controller({
            //GrabarBandejaObjetivosFonafeSuccess: base.Event.BtnBuscarClick
        });
        if (base.Control.HdnRuta().val() == "OEE")
        {
            $('#OEEIndicador').removeClass('hidden');
            
        }
        if (base.Control.HdnRuta().val() == "AEI") {
            $('#AEIIndicador').removeClass('hidden');

        }
    };

    base.Control = {
        HdnCodigoObjetivoEstrategicoEmpresa: function () { return $('#hdnCodigoObjetivoEstrategicoEmpresa'); },
        HdnCodigoAccionEstrategicaInstitucional: function () { return $('#hdnCodigoAccionEstrategicaInstitucional'); },
        TxtNombreObjetivoEstrategicoEmpresa: function () { return $('#txtNombreObjetivoEstrategicoEmpresa'); },
        TxtNombreAccionEstrategicaInstitucional: function () { return $('#txtNombreAccionEstrategicaInstitucional'); },
        TxtSeguimientoInd: function () { return $('#txtSeguimientoInd'); },
        HdnRuta: function () { return $('#hdnRuta'); },
        HdnCodigoAmbito: function () { return $('#hdnCodigoAmbito'); },
        DlgFormularioValorIndicador: null,
        
    };

    base.Event = {        
        BtnBuscarClick: function (data) {
            if (base.Control.HdnRuta().val() == "OEE")
            {
                var filtro = {
                    CodigoObjetivoEstrategicoEmpresa: base.Control.HdnCodigoObjetivoEstrategicoEmpresa().val(),
                    CodigoAmbito: base.Control.HdnCodigoAmbito().val(),
                    Ruta: base.Control.HdnRuta().val()
                };
            }else 
                if (base.Control.HdnRuta().val() == "AEI")
            {
                var filtro = {
                    CodigoObjetivoEstrategicoEmpresa: base.Control.HdnCodigoAccionEstrategicaInstitucional().val(),
                    CodigoAmbito: base.Control.HdnCodigoAmbito().val(),
                    Ruta: base.Control.HdnRuta().val()
                };
            }
            
            base.Control.GrdResultadoBandeja.Load(filtro);
        },
        BtnGridEditarIndicadorClick: function (row, data) {            
            base.Control.DlgFormularioValorIndicador.Show({
                data: { CodigoIndicador: data.CodigoIndicador, NombreIndicador: data.NombreIndicador, 
                    CodigoPeriodicidad: data.CodigoPeriodicidad,                    
                    CodigoFormula: data.CodigoFormula, NombreFormula: data.NombreFormula,
                    CodigoAmbito: base.Control.HdnCodigoAmbito().val(),
                    Seguimiento: base.Control.TxtSeguimientoInd().text()
                }
            });
        },
    };

    base.Ajax = {
        
    };

    base.Function = {
        CrearGridBandejaIndicador: function () {
            var columns = new Array();
            columns.push({
                data: 'NombreIndicador',
                title: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Resource.GridNombreIndicador,
                width: "90%"
            });
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditarIndicadorClick } },
                ]
            });

            base.Control.GrdResultadoBandeja = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultIndicador',
                columns: columns,               
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Actions.BuscarIndicador,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        }
    };
    base.Show = function (opts) {       
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Resource.EtiquetaTituloIndicador,
            size: "size-wide",     
            close: function () {
            }
        });
        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Actions.FormularioBandejaIndicador,            
            onSuccess: function () {                
                base.Control.HdnCodigoObjetivoEstrategicoEmpresa().val(opts.data.CodigoObjetivoEstrategicoEmpresa);
                base.Control.HdnCodigoAccionEstrategicaInstitucional().val(opts.data.CodigoAccionEstrategicaInstitucional);
                base.Control.TxtNombreObjetivoEstrategicoEmpresa().val(opts.data.NombreObjetivoEstrategicoEmpresa);
                base.Control.TxtNombreAccionEstrategicaInstitucional().val(opts.data.NombreAccionEstrategicaInstitucional);
                base.Control.HdnRuta().val(opts.data.Ruta);
                base.Control.HdnCodigoAmbito().val(opts.data.CodigoAmbito);
                if (opts.data.Ruta == "AEI")
                {
                    base.Control.TxtSeguimientoInd().text(opts.data.Seguimiento + " --> Acción Estratégica Institucional: " + opts.data.NombreAccionEstrategicaInstitucional);
                }
                else {
                    base.Control.TxtSeguimientoInd().text(opts.data.Seguimiento + " --> Objetivo Estratégico Empresa: " + opts.data.NombreObjetivoEstrategicoEmpresa);
                }
                
                base.Ini();
            },            
        });
    };
};