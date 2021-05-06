
ns('Pe.ElectroPeru.SGI.Presentacion.Proceso.FormularioBandejaObjetivosEmpresa.Index');
Pe.ElectroPeru.SGI.Presentacion.Proceso.FormularioBandejaObjetivosEmpresa.Index.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Function.CrearGridBandejaObjetivosEmpresa();
        base.Event.BtnBuscarClick();

        base.Control.DlgFormularioBandejaIndicador = new Pe.ElectroPeru.SGI.Presentacion.Proceso.FormularioBandejaIndicador.Index.Controller({
            //GrabarBandejaObjetivosFonafeSuccess: base.Event.BtnBuscarClick
        });
        if (base.Control.HdnCodigoAmbito().val() != "1")
            base.Control.DlgFormularioBandejaAccionEstrategicaInstitucional = new Pe.ElectroPeru.SGI.Presentacion.Proceso.FormularioBandejaAccionEstrategicaInstitucional.Index.Controller({
            //GrabarBandejaObjetivosFonafeSuccess: base.Event.BtnBuscarClick
            });
    };

    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        HdnCodigoAmbito: function () { return $('#hdnCodigoAmbito'); },
        HdnCodigoObjetivoEstrategicoFonafe: function () { return $('#hdnCodigoObjetivoEstrategicoFonafe'); },
        TxtNombreObjetivoEstrategicoFonafe: function () { return $('#txtNombreObjetivoEstrategicoFonafe'); },
        TxtSeguimiento: function () { return $('#txtSeguimiento'); },
        DlgFormularioBandejaIndicador: null,
        DlgFormularioBandejaAccionEstrategicaInstitucional: null,
        
    };

    base.Event = {        
        BtnBuscarClick: function (data) {            
            var filtro = {
                CodigoObjetivoEstrategicoFonafe: base.Control.HdnCodigoObjetivoEstrategicoFonafe().val()
            };
            base.Control.GrdResultadoBandeja.Load(filtro);
        },        
        BtnGridMostrarIndicadorClick: function (row, data) {            
            base.Control.DlgFormularioBandejaIndicador.Show({
                data: {
                    CodigoObjetivoEstrategicoEmpresa: data.CodigoObjetivoEstrategicoEmpresa,
                    NombreObjetivoEstrategicoEmpresa: data.NombreObjetivoEstrategicoEmpresa,
                    Ruta: "OEE",
                    CodigoAmbito: base.Control.HdnCodigoAmbito().val(),
                    Seguimiento: base.Control.TxtSeguimiento().text()
                }
            });
        },
        BtnGridMostraAEIClick: function (row, data) {
            if (base.Control.HdnCodigoAmbito().val() != "1") {
                base.Control.DlgFormularioBandejaAccionEstrategicaInstitucional.Show({
                    data: {
                        CodigoObjetivoEstrategicoEmpresa: data.CodigoObjetivoEstrategicoEmpresa,
                        NombreObjetivoEstrategicoEmpresa: data.NombreObjetivoEstrategicoEmpresa,
                        Ruta: "AEI",
                        CodigoAmbito: base.Control.HdnCodigoAmbito().val(),
                        Seguimiento: base.Control.TxtSeguimiento().text()
                    }
                });
            }
            else {
                base.Control.Mensaje.Information({ message: 'Esta opción es disponible sólo para Plan Estratégico.' });
            }
            
        },
    };

    base.Ajax = {
        
    };

    base.Function = {
        CrearGridBandejaObjetivosEmpresa: function () {
            var columns = new Array();
            columns.push({
                data: 'NombreObjetivoEstrategicoEmpresa',
                title: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Resource.GridObjetivoEstrategicoEmpresa,
                width: "90%"
            });
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.DetalleIndicador, event: { on: 'click', callBack: base.Event.BtnGridMostrarIndicadorClick } },                    
                    { type: Pe.GMD.UI.Web.Components.GridAction.DetalleAEI, event: { on: 'click', callBack: base.Event.BtnGridMostraAEIClick } }
                                ]
            });

            base.Control.GrdResultadoBandeja = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultObjetivoEmpresa',
                columns: columns,               
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Actions.BuscarObjetivoEstrategicoEmpresa,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        }
    };
    base.Show = function (opts) {        
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Resource.EtiquetaTituloOEE,
            size: "size-wide",            
            //type: "type-info",
            close: function () {
            }
        });        
        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Actions.FormularioBandejaObjetivosEmpresa,            
            onSuccess: function () {
                if (opts.data.CodigoAmbito == undefined)
                {
                    base.Control.HdnCodigoAmbito().val(Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.DatosConstantes.PlanOperativo)
                }
                    
                else {
                    base.Control.HdnCodigoAmbito().val(Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.DatosConstantes.PlanEstrategico)
                }
                base.Control.HdnCodigoObjetivoEstrategicoFonafe().val(opts.data.CodigoObjetivoEstrategicoFonafe);
                base.Control.TxtNombreObjetivoEstrategicoFonafe().val(opts.data.NombreObjetivoEstrategicoFonafe);
                base.Control.TxtSeguimiento().text("Perspectiva: " + opts.data.NombrePerspectiva + ' --> Objetivo Estratégico Corporativo: ' + opts.data.NombreObjetivoEstrategicoFonafe);
                base.Ini();
            },            
        });
    };
};