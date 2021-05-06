ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoObjetivoEstrategicoSectorial.Index');
Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoObjetivoEstrategicoSectorial.Index.Controller = function () {
    var base = this;

    base.Control = {
        BtnRegresarBandejaObjetivoEstrategicoSectorial: function () { return $('#btnRegresarBandejaObjetivoEstrategicoSectorial'); },
        /* Tab Generales*/       
        TxtNombreObjetivoEstrategicoSectorial: function () { return $('#txtNombreObjetivoEstrategicoSectorialFormulario'); },
        TxtDescripcionObjetivoEstrategicoSectorial: function () { return $('#txtDescripcionObjetivoEstrategicoSectorialFormulario'); },
        SlcModeloConceptual: function () { return $('#slcModeloConceptual'); },
        HdnCodigoResponsable: function () { return $('#hdnCodigoResponsable'); },
        TxtResponsable: function () { return $('#txtCodigoResponsable'); },
        BtnGuardarGenerales: function () { return $('#btnGuardarGenerales'); },
        FrmGenerales: function () { return $('#frmGenerales'); },
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),        
        /*Tab ObjetivoEstrategicoSectorial Detalle*/
        SlcAccionEstrategicaSectorial: function () { return $('#slcAccionEstrategicaSectorial'); },
        BtnAgregarResponsable: function () { return $('#btnBuscarResponsable'); },
        BtnGuardarObjetivoEstrategicoSectorialDetalle: function () { return $('#btnGuardarObjetivoEstrategicoSectorialDetalle'); },
        DlgFormularioResponsable: null,
        FrmObjetivoEstrategicoSectorialDetalle: function () { return $('#frmObjetivoEstrategicoSectorialDetalle'); },
    };

    base.Ini = function () {
        'use strict'
        base.Control.FormularioModelo = Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoObjetivoEstrategicoSectorial.Models.Formulario;

        $('#cartTabsObjetivoEstrategicoSectorial').on('shown.bs.tab', function (e) {
            var target = $(e.target).attr("href");            
            if (target == "#tabObjetivoEstrategicoSectorialDetalle") {
                if (base.Control.FormularioModelo.ObjetivoEstrategicoSectorial.CodigoObjetivoEstrategicoSectorial != null) {
                    base.Event.BtnBuscarObjetivoEstrategicoSectorialDetalle();
                    $('#divBotonObjetivoEstrategicoSectorialDetalle').removeClass('hidden');
                    $('#divControlesVD').removeClass('hidden');
                };
            }
        });
        
        base.Control.BtnRegresarBandejaObjetivoEstrategicoSectorial().on('click', base.Event.BtnRegresarBandejaObjetivoEstrategicoSectorialClick);

        /*Tab Generales*/
        base.Control.BtnGuardarGenerales().off('click');
        base.Control.BtnGuardarGenerales().on('click', base.Event.BtnGuardarGeneralesClick);

        base.Control.ValidadorGenerales = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmGenerales(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos           
        });

        /*Tab ObjetivoEstrategicoSectorial Detalle*/
        base.Function.CrearGridObjetivoEstrategicoSectorialDetalle();
        
        base.Control.BtnAgregarResponsable().off('click');
        base.Control.BtnAgregarResponsable().on('click', base.Event.BtnAgregarResponsableClick);

        base.Control.DlgFormularioResponsable = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.FormularioBuscadorResponsable.Controller({
            AceptarSuccess: base.Event.AsignarValoresResponsableClick
        });

        base.Control.BtnGuardarObjetivoEstrategicoSectorialDetalle().off('click');
        base.Control.BtnGuardarObjetivoEstrategicoSectorialDetalle().on('click', base.Event.BtnGuardarObjetivoEstrategicoSectorialDetalleClick);

        base.Control.ValidadorObjetivoEstrategicoSectorialDetalle = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmObjetivoEstrategicoSectorialDetalle(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos
        });
    };

    base.Event = {
        BtnRegresarBandejaObjetivoEstrategicoSectorialClick: function () {
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoObjetivoEstrategicoSectorial.Actions.BandejaObjetivoEstrategicoSectorial, {});
        },
        /*Tab Generales*/
        BtnGuardarGeneralesClick: function () {
            if (base.Control.ValidadorGenerales.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarObjetivoEstrategicoSectorial.data = {
                            CodigoObjetivoEstrategicoSectorial: base.Control.FormularioModelo.ObjetivoEstrategicoSectorial.CodigoObjetivoEstrategicoSectorial,                            
                            NombreObjetivoEstrategicoSectorial: base.Control.TxtNombreObjetivoEstrategicoSectorial().val(),
                            DescripcionObjetivoEstrategicoSectorial: base.Control.TxtDescripcionObjetivoEstrategicoSectorial().val(),
                            CodigoModeloConceptual: base.Control.SlcModeloConceptual().val(),
                            CodigoResponsable: base.Control.HdnCodigoResponsable().val(),
                        };
                        base.Ajax.AjaxRegistrarObjetivoEstrategicoSectorial.submit();
                    }
                });
            } else {
                $("#frmGeneralesSummaryErrorMessage").empty();
                $("#frmGeneralesSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.MsgValideCampos + "</p>");
                return false;
            }
        },
        /*Tab ObjetivoEstrategicoSectorial Detalle*/
        BtnAgregarResponsableClick: function () {
            'use strict'
            base.Control.DlgFormularioResponsable.Show();
        },
        BtnGuardarObjetivoEstrategicoSectorialDetalleClick: function () {
            if (base.Control.ValidadorObjetivoEstrategicoSectorialDetalle.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarObjetivoEstrategicoSectorialDetalle.data = {
                            CodigoObjetivoEstrategicoSectorialDetalle: base.Control.FormularioModelo.ObjetivoEstrategicoSectorialDetalle.CodigoObjetivoEstrategicoSectorialDetalle,
                            CodigoObjetivoEstrategicoSectorial: base.Control.FormularioModelo.ObjetivoEstrategicoSectorial.CodigoObjetivoEstrategicoSectorial,
                            CodigoAccionEstrategicaSectorial: base.Control.SlcAccionEstrategicaSectorial().val()
                        };
                        base.Ajax.AjaxRegistrarObjetivoEstrategicoSectorialDetalle.submit();
                    }
                });
            } else {
                $("#frmObjetivoEstrategicoSectorialDetalleSummaryErrorMessage").empty();
                $("#frmObjetivoEstrategicoSectorialDetalleSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnBuscarObjetivoEstrategicoSectorialDetalle: function () {
            base.Control.GrdResultadoObjetivoEstrategicoSectorialDetalle.Load({
                CodigoObjetivoEstrategicoSectorial: base.Control.FormularioModelo.ObjetivoEstrategicoSectorial.CodigoObjetivoEstrategicoSectorial                
            });
        },
        AsignarValoresResponsableClick: function (objResponsable) {
            'use strict'
            debugger
            base.Control.TxtResponsable().val(objResponsable[0].NombreCompleto);
            base.Control.HdnCodigoResponsable().val(objResponsable[0].CodigoResponsable);
        },
        BtnGridEditObjetivoEstrategicoSectorialDetalleClick: function (row, data) {
            base.Control.SlcAccionEstrategicaSectorial().val(data.CodigoAccionEstrategicaSectorial);
            base.Control.FormularioModelo.ObjetivoEstrategicoSectorialDetalle.CodigoObjetivoEstrategicoSectorialDetalle = data.CodigoObjetivoEstrategicoSectorialDetalle;
        },
        BtnGridDeleteObjetivoEstrategicoSectorialDetalleClick: function (row, data) {
            'use strict'
            if (data.EstadoRegistro != Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inactivo) {
                base.Control.Mensaje.Delete({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaMensajeEliminarRegistro,
                    onAccept: function () {
                        base.Ajax.AjaxEliminarObjetivoEstrategicoSectorialDetalle.data = {
                            CodigoObjetivoEstrategicoSectorialDetalle: data.CodigoObjetivoEstrategicoSectorialDetalle,
                        };
                        base.Ajax.AjaxEliminarObjetivoEstrategicoSectorialDetalle.submit();
                    }
                });
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.RegistroInactivo });
            }

        },
    };

    base.AjaxSuccess = {
        /*Tab Generales*/
        AjaxRegistrarObjetivoEstrategicoSectorialSuccess: function (resultado) {

            if (resultado.IsSuccess == true) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                if (resultado.Result != null) {                   
                    base.Control.FormularioModelo.ObjetivoEstrategicoSectorial.CodigoObjetivoEstrategicoSectorial = resultado.Result.CodigoObjetivoEstrategicoSectorial;                                       
                }
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        /*Tab ObjetivoEstrategicoSectorialDetalle*/
        AjaxRegistrarObjetivoEstrategicoSectorialDetalleSuccess: function (resultado) {
            if (resultado.IsSuccess && resultado.Result != null && resultado.Result.CodigoObjetivoEstrategicoSectorial != null) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnBuscarObjetivoEstrategicoSectorialDetalle();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxEliminarObjetivoEstrategicoSectorialDetalleSuccess: function (data) {
            'use strict'
            debugger
            if (data.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito });//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaEliminacionExitosa });
                base.Event.BtnBuscarObjetivoEstrategicoSectorialDetalle();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro })//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaErrorRegistro });
            }
        },
    };

    base.Ajax = {
        /*Tab Generales*/
        AjaxRegistrarObjetivoEstrategicoSectorial: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoObjetivoEstrategicoSectorial.Actions.RegistrarObjetivoEstrategicoSectorial,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarObjetivoEstrategicoSectorialSuccess
        }),
        /*Tab ObjetivoEstrategicoSectorialDetalle*/
        AjaxRegistrarObjetivoEstrategicoSectorialDetalle: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoObjetivoEstrategicoSectorial.Actions.RegistrarObjetivoEstrategicoSectorialDetalle,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarObjetivoEstrategicoSectorialDetalleSuccess
        }),
        AjaxEliminarObjetivoEstrategicoSectorialDetalle: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoObjetivoEstrategicoSectorial.Actions.EliminarObjetivoEstrategicoSectorialDetalle,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarObjetivoEstrategicoSectorialDetalleSuccess
        })
    };

    base.Function = {
        CrearGridObjetivoEstrategicoSectorialDetalle: function () {
            var columns = new Array();
            columns.push({
                data: 'NombreAccionEstrategicaSectorial',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoObjetivoEstrategicoSectorial.Resource.GridAccionEstrategicaSectorial,
                width: "10%"
            });           
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditObjetivoEstrategicoSectorialDetalleClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteObjetivoEstrategicoSectorialDetalleClick } }
                ]
            });
            base.Control.GrdResultadoObjetivoEstrategicoSectorialDetalle = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdObjetivoEstrategicoSectorialDetalle',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoObjetivoEstrategicoSectorial.Actions.BuscarObjetivoEstrategicoSectorialDetalle,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        },
    };
};