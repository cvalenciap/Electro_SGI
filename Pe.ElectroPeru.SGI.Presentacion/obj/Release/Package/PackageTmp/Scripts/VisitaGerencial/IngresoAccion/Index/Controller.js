/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 14112017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoAccion.Index');
Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoAccion.Index.Controller = function () {
    var base = this;
    base.Ini = function () {
        'use strict'
        Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
        if (base.Control.TxtNumeroRegistroVisitaGerencial().val().trim() != "") {
            base.Event.BtnBuscarClick();
        }       
        base.Control.BtnBuscar().off('click');
        base.Control.BtnBuscar().on('click', base.Event.BtnBuscarClick);
        base.Control.BtnLimpiar().off('click');
        base.Control.BtnLimpiar().on('click', base.Event.BtnLimpiarClick);
        base.Control.BtnRegresarBandejaVisitaGerencial().off('click');
        base.Control.BtnRegresarBandejaVisitaGerencial().on('click', base.Event.BtnRegresarBandejaVisitaGerencialClick);        
    };
    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        GrdResultado: null,
        BtnBuscar: function () { return $('#btnBuscar'); },
        BtnLimpiar: function () { return $('#btnLimpiar'); },
        TxtNumeroRegistroVisitaGerencial: function () { return $('#txtNumeroRegistroVisitaGerencial'); },
        BtnRegresarBandejaVisitaGerencial: function () { return $('#btnRegresarBandejaVisitaGerencial'); },
    };

    base.Event = {
        BtnRegresarBandejaVisitaGerencialClick: function () {
            var filtro = {
            };
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoAccion.Index.Actions.FormularioBandejaVisitaGerencial, filtro);
        },
        BtnBuscarClick: function () {
            'use strict'
            if (base.Control.TxtNumeroRegistroVisitaGerencial().val().trim() == "") {
                base.Control.Mensaje.Warning({
                    message: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoAccion.Index.Resource.MsjIngresaNumeroVisitaGerencial
                });
            }
            else {
                base.Ajax.AjaxVerificarNumeroVisitaGerencial.data = {
                    NumeroVisitaGerencial: base.Control.TxtNumeroRegistroVisitaGerencial().val(),
                };
                base.Ajax.AjaxVerificarNumeroVisitaGerencial.submit();
            }
        },
        BtnLimpiarClick: function () {
            'use strict'
            base.Control.TxtNumeroRegistroVisitaGerencial().val('');
        },
        BtnGridAgregarHallazgoClick: function (row, data) {           
            data.NumeroDocumentoEntidad = data.NumeroIntegradorTipoRegistroEntidad;            
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoAccion.Index.Actions.FormularioBandejaAccion, data);
        },
    };
    base.AjaxSuccess = {
        AjaxVerificarNumeroVisitaGerencialSuccess: function (resultado) {
            if (resultado.IsSuccess == true) {
                if (resultado.Result == "1" ) {
                    var filtro = {
                        NumeroVisitaGerencial: base.Control.TxtNumeroRegistroVisitaGerencial().val()
                    };
                    $("#divGrdResultHallazgoObservacion").empty();
                    base.Function.CrearGrid();
                    base.Control.GrdResultado.Load(filtro);
                }
                else if (resultado.Result == "2") {
                    base.Control.Mensaje.Warning({
                        message: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoAccion.Index.Resource.MsjVisitaGerencialNoTieneHallazgo
                    });
                }
                else if (resultado.Result == "3") {
                    base.Control.Mensaje.Warning({
                        message: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoAccion.Index.Resource.MsjNoPuedeAccederDocumentoVisita
                    });
                }
                else if (resultado.Result == "4") {
                    base.Control.Mensaje.Warning({
                        message: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoAccion.Index.Resource.MsjValidarNumeroVisita
                    });
                }
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
    };
    base.Ajax = {
        AjaxVerificarNumeroVisitaGerencial: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoAccion.Index.Actions.VerificarNumeroVisitaGerencialHallazgoPorColaboradorProyecto,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxVerificarNumeroVisitaGerencialSuccess
        }),
    };
    base.Function = {
        CrearGrid: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: '#',
                width: "3%"
            });
            columns.push({
                data: 'FechaIngresoHallazgoString',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoAccion.Index.Resource.GridFechaHallazgo,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionLugarTrabajo',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoAccion.Index.Resource.GridLugarTrabajo,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionNivelRiesgo',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoAccion.Index.Resource.GridNivelRiesgo,
                width: "5%"
            });
            columns.push({
                data: 'DescripcionCorta',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoAccion.Index.Resource.GridDescripcionCortaHallazgo,
                width: "20%"
            });
            columns.push({
                data: 'DescripcionLarga',
                title: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoAccion.Index.Resource.GridDescripcionLargaHallazgo,
                width: "20%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "5%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Temas, event: { on: 'click', callBack: base.Event.BtnGridAgregarHallazgoClick }, toolTip: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaIngresarAcciones },
                ]
            });
            base.Control.GrdResultado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultHallazgoObservacion',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoAccion.Index.Actions.BuscarHallazgoPorNumeroVisitaGerencial,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        },

    }
};
