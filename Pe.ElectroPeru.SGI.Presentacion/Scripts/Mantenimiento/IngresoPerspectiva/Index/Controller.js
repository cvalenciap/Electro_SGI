ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoPerspectiva.Index');
Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoPerspectiva.Index.Controller = function () {
    var base = this;

    base.Control = {
        BtnRegresarBandejaPerspectiva: function () { return $('#btnRegresarBandejaPerspectiva'); },
        /* Tab Generales*/       
        TxtNombrePerspectiva: function () { return $('#txtNombrePerspectivaFormulario'); },
        TxtDescripcionPerspectiva: function () { return $('#txtDescripcionPerspectivaFormulario'); },        
        HdnCodigoResponsable: function () { return $('#hdnCodigoResponsable'); },
        TxtResponsable: function () { return $('#txtCodigoResponsable'); },
        BtnGuardarGenerales: function () { return $('#btnGuardarGenerales'); },
        FrmGenerales: function () { return $('#frmGenerales'); },
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),        
        /*Tab Perspectiva Detalle*/
        SlcObjetivoEstrategicoFonafe: function () { return $('#slcObjetivoEstrategicoFonafe'); },
        BtnAgregarResponsable: function () { return $('#btnBuscarResponsable'); },
        BtnGuardarPerspectivaDetalle: function () { return $('#btnGuardarPerspectivaDetalle'); },
        DlgFormularioResponsable: null,
        FrmPerspectivaDetalle: function () { return $('#frmPerspectivaDetalle'); },
    };

    base.Ini = function () {
        'use strict'
        base.Control.FormularioModelo = Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoPerspectiva.Models.Formulario;

        $('#cartTabsPerspectiva').on('shown.bs.tab', function (e) {
            var target = $(e.target).attr("href");            
            if (target == "#tabPerspectivaDetalle") {
                if (base.Control.FormularioModelo.Perspectiva.CodigoPerspectiva != null) {
                    base.Event.BtnBuscarPerspectivaDetalle();
                    $('#divBotonPerspectivaDetalle').removeClass('hidden');
                    $('#divControlesVD').removeClass('hidden');
                };
            }
        });
        
        base.Control.BtnRegresarBandejaPerspectiva().on('click', base.Event.BtnRegresarBandejaPerspectivaClick);

        /*Tab Generales*/
        base.Control.BtnGuardarGenerales().off('click');
        base.Control.BtnGuardarGenerales().on('click', base.Event.BtnGuardarGeneralesClick);

        base.Control.ValidadorGenerales = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmGenerales(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos           
        });

        /*Tab Perspectiva Detalle*/
        base.Function.CrearGridPerspectivaDetalle();
        
        base.Control.BtnAgregarResponsable().off('click');
        base.Control.BtnAgregarResponsable().on('click', base.Event.BtnAgregarResponsableClick);

        base.Control.DlgFormularioResponsable = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.FormularioBuscadorResponsable.Controller({
            AceptarSuccess: base.Event.AsignarValoresResponsableClick
        });

        base.Control.BtnGuardarPerspectivaDetalle().off('click');
        base.Control.BtnGuardarPerspectivaDetalle().on('click', base.Event.BtnGuardarPerspectivaDetalleClick);

        base.Control.ValidadorPerspectivaDetalle = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmPerspectivaDetalle(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos
        });
    };

    base.Event = {
        BtnRegresarBandejaPerspectivaClick: function () {
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoPerspectiva.Actions.BandejaPerspectiva, {});
        },
        /*Tab Generales*/
        BtnGuardarGeneralesClick: function () {
            if (base.Control.ValidadorGenerales.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarPerspectiva.data = {
                            CodigoPerspectiva: base.Control.FormularioModelo.Perspectiva.CodigoPerspectiva,                            
                            NombrePerspectiva: base.Control.TxtNombrePerspectiva().val(),
                            DescripcionPerspectiva: base.Control.TxtDescripcionPerspectiva().val(),                            
                            CodigoResponsable: base.Control.HdnCodigoResponsable().val(),
                        };
                        base.Ajax.AjaxRegistrarPerspectiva.submit();
                    }
                });
            } else {
                $("#frmGeneralesSummaryErrorMessage").empty();
                $("#frmGeneralesSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.MsgValideCampos + "</p>");
                return false;
            }
        },
        /*Tab Perspectiva Detalle*/
        BtnAgregarResponsableClick: function () {
            'use strict'
            base.Control.DlgFormularioResponsable.Show();
        },
        BtnGuardarPerspectivaDetalleClick: function () {
            if (base.Control.ValidadorPerspectivaDetalle.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarPerspectivaDetalle.data = {
                            CodigoPerspectivaDetalle: base.Control.FormularioModelo.PerspectivaDetalle.CodigoPerspectivaDetalle,
                            CodigoPerspectiva: base.Control.FormularioModelo.Perspectiva.CodigoPerspectiva,
                            CodigoObjetivoEstrategicoFonafe: base.Control.SlcObjetivoEstrategicoFonafe().val()
                        };
                        base.Ajax.AjaxRegistrarPerspectivaDetalle.submit();
                    }
                });
            } else {
                $("#frmPerspectivaDetalleSummaryErrorMessage").empty();
                $("#frmPerspectivaDetalleSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnBuscarPerspectivaDetalle: function () {
            base.Control.GrdResultadoPerspectivaDetalle.Load({
                CodigoPerspectiva: base.Control.FormularioModelo.Perspectiva.CodigoPerspectiva                
            });
        },
        AsignarValoresResponsableClick: function (objResponsable) {
            'use strict'
            debugger
            base.Control.TxtResponsable().val(objResponsable[0].NombreCompleto);
            base.Control.HdnCodigoResponsable().val(objResponsable[0].CodigoResponsable);
        },
        BtnGridEditPerspectivaDetalleClick: function (row, data) {
            base.Control.SlcObjetivoEstrategicoFonafe().val(data.CodigoObjetivoEstrategicoFonafe);
            base.Control.FormularioModelo.PerspectivaDetalle.CodigoPerspectivaDetalle = data.CodigoPerspectivaDetalle;
        },
        BtnGridDeletePerspectivaDetalleClick: function (row, data) {
            'use strict'
            if (data.EstadoRegistro != Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inactivo) {
                base.Control.Mensaje.Delete({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaMensajeEliminarRegistro,
                    onAccept: function () {
                        base.Ajax.AjaxEliminarPerspectivaDetalle.data = {
                            CodigoPerspectivaDetalle: data.CodigoPerspectivaDetalle,
                        };
                        base.Ajax.AjaxEliminarPerspectivaDetalle.submit();
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
        AjaxRegistrarPerspectivaSuccess: function (resultado) {

            if (resultado.IsSuccess == true) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                if (resultado.Result != null) {                   
                    base.Control.FormularioModelo.Perspectiva.CodigoPerspectiva = resultado.Result.CodigoPerspectiva;                                       
                }
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        /*Tab PerspectivaDetalle*/
        AjaxRegistrarPerspectivaDetalleSuccess: function (resultado) {
            if (resultado.IsSuccess && resultado.Result != null && resultado.Result.CodigoPerspectiva != null) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnBuscarPerspectivaDetalle();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxEliminarPerspectivaDetalleSuccess: function (data) {
            'use strict'
            debugger
            if (data.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito });//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaEliminacionExitosa });
                base.Event.BtnBuscarPerspectivaDetalle();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro })//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaErrorRegistro });
            }
        },
    };

    base.Ajax = {
        /*Tab Generales*/
        AjaxRegistrarPerspectiva: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoPerspectiva.Actions.RegistrarPerspectiva,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarPerspectivaSuccess
        }),
        /*Tab PerspectivaDetalle*/
        AjaxRegistrarPerspectivaDetalle: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoPerspectiva.Actions.RegistrarPerspectivaDetalle,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarPerspectivaDetalleSuccess
        }),
        AjaxEliminarPerspectivaDetalle: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoPerspectiva.Actions.EliminarPerspectivaDetalle,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarPerspectivaDetalleSuccess
        })
    };

    base.Function = {
        CrearGridPerspectivaDetalle: function () {
            var columns = new Array();
            columns.push({
                data: 'NombreObjetivoEstrategicoFonafe',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoPerspectiva.Resource.GridObjetivoEstrategicoFonafe,
                width: "10%"
            });           
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditPerspectivaDetalleClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeletePerspectivaDetalleClick } }
                ]
            });
            base.Control.GrdResultadoPerspectivaDetalle = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdPerspectivaDetalle',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoPerspectiva.Actions.BuscarPerspectivaDetalle,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        },
    };
};