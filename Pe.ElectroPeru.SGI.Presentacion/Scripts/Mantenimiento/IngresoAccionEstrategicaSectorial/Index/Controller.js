ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoAccionEstrategicaSectorial.Index');
Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoAccionEstrategicaSectorial.Index.Controller = function () {
    var base = this;

    base.Control = {
        BtnRegresarBandejaAccionEstrategicaSectorial: function () { return $('#btnRegresarBandejaAccionEstrategicaSectorial'); },
        /* Tab Generales*/       
        TxtNombreAccionEstrategicaSectorial: function () { return $('#txtNombreAccionEstrategicaSectorialFormulario'); },
        TxtDescripcionAccionEstrategicaSectorial: function () { return $('#txtDescripcionAccionEstrategicaSectorialFormulario'); },        
        HdnCodigoResponsable: function () { return $('#hdnCodigoResponsable'); },
        TxtResponsable: function () { return $('#txtCodigoResponsable'); },
        BtnGuardarGenerales: function () { return $('#btnGuardarGenerales'); },
        FrmGenerales: function () { return $('#frmGenerales'); },
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),        
        /*Tab AccionEstrategicaSectorial Detalle*/
        SlcObjetivoEstrategicoFonafe: function () { return $('#slcObjetivoEstrategicoFonafe'); },
        BtnAgregarResponsable: function () { return $('#btnBuscarResponsable'); },
        BtnGuardarAccionEstrategicaSectorialDetalle: function () { return $('#btnGuardarAccionEstrategicaSectorialDetalle'); },
        DlgFormularioResponsable: null,
        FrmAccionEstrategicaSectorialDetalle: function () { return $('#frmAccionEstrategicaSectorialDetalle'); },
    };

    base.Ini = function () {
        'use strict'
        base.Control.FormularioModelo = Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoAccionEstrategicaSectorial.Models.Formulario;

        $('#cartTabsAccionEstrategicaSectorial').on('shown.bs.tab', function (e) {
            var target = $(e.target).attr("href");            
            if (target == "#tabAccionEstrategicaSectorialDetalle") {
                if (base.Control.FormularioModelo.AccionEstrategicaSectorial.CodigoAccionEstrategicaSectorial != null) {
                    base.Event.BtnBuscarAccionEstrategicaSectorialDetalle();
                    $('#divBotonAccionEstrategicaSectorialDetalle').removeClass('hidden');
                    $('#divControlesVD').removeClass('hidden');
                };
            }
        });
        
        base.Control.BtnRegresarBandejaAccionEstrategicaSectorial().on('click', base.Event.BtnRegresarBandejaAccionEstrategicaSectorialClick);

        /*Tab Generales*/
        base.Control.BtnGuardarGenerales().off('click');
        base.Control.BtnGuardarGenerales().on('click', base.Event.BtnGuardarGeneralesClick);

        base.Control.ValidadorGenerales = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmGenerales(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos           
        });

        /*Tab AccionEstrategicaSectorial Detalle*/
        base.Function.CrearGridAccionEstrategicaSectorialDetalle();
        
        base.Control.BtnAgregarResponsable().off('click');
        base.Control.BtnAgregarResponsable().on('click', base.Event.BtnAgregarResponsableClick);

        base.Control.DlgFormularioResponsable = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.FormularioBuscadorResponsable.Controller({
            AceptarSuccess: base.Event.AsignarValoresResponsableClick
        });

        base.Control.BtnGuardarAccionEstrategicaSectorialDetalle().off('click');
        base.Control.BtnGuardarAccionEstrategicaSectorialDetalle().on('click', base.Event.BtnGuardarAccionEstrategicaSectorialDetalleClick);

        base.Control.ValidadorAccionEstrategicaSectorialDetalle = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmAccionEstrategicaSectorialDetalle(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos
        });
    };

    base.Event = {
        BtnRegresarBandejaAccionEstrategicaSectorialClick: function () {
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoAccionEstrategicaSectorial.Actions.BandejaAccionEstrategicaSectorial, {});
        },
        /*Tab Generales*/
        BtnGuardarGeneralesClick: function () {
            if (base.Control.ValidadorGenerales.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarAccionEstrategicaSectorial.data = {
                            CodigoAccionEstrategicaSectorial: base.Control.FormularioModelo.AccionEstrategicaSectorial.CodigoAccionEstrategicaSectorial,                            
                            NombreAccionEstrategicaSectorial: base.Control.TxtNombreAccionEstrategicaSectorial().val(),
                            DescripcionAccionEstrategicaSectorial: base.Control.TxtDescripcionAccionEstrategicaSectorial().val(),                            
                            CodigoResponsable: base.Control.HdnCodigoResponsable().val(),
                        };
                        base.Ajax.AjaxRegistrarAccionEstrategicaSectorial.submit();
                    }
                });
            } else {
                $("#frmGeneralesSummaryErrorMessage").empty();
                $("#frmGeneralesSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.MsgValideCampos + "</p>");
                return false;
            }
        },
        /*Tab AccionEstrategicaSectorial Detalle*/
        BtnAgregarResponsableClick: function () {
            'use strict'
            base.Control.DlgFormularioResponsable.Show();
        },
        BtnGuardarAccionEstrategicaSectorialDetalleClick: function () {
            if (base.Control.ValidadorAccionEstrategicaSectorialDetalle.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarAccionEstrategicaSectorialDetalle.data = {
                            CodigoAccionEstrategicaSectorialDetalle: base.Control.FormularioModelo.AccionEstrategicaSectorialDetalle.CodigoAccionEstrategicaSectorialDetalle,
                            CodigoAccionEstrategicaSectorial: base.Control.FormularioModelo.AccionEstrategicaSectorial.CodigoAccionEstrategicaSectorial,
                            CodigoObjetivoEstrategicoFonafe: base.Control.SlcObjetivoEstrategicoFonafe().val()
                        };
                        base.Ajax.AjaxRegistrarAccionEstrategicaSectorialDetalle.submit();
                    }
                });
            } else {
                $("#frmAccionEstrategicaSectorialDetalleSummaryErrorMessage").empty();
                $("#frmAccionEstrategicaSectorialDetalleSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnBuscarAccionEstrategicaSectorialDetalle: function () {
            base.Control.GrdResultadoAccionEstrategicaSectorialDetalle.Load({
                CodigoAccionEstrategicaSectorial: base.Control.FormularioModelo.AccionEstrategicaSectorial.CodigoAccionEstrategicaSectorial                
            });
        },
        AsignarValoresResponsableClick: function (objResponsable) {
            'use strict'
            debugger
            base.Control.TxtResponsable().val(objResponsable[0].NombreCompleto);
            base.Control.HdnCodigoResponsable().val(objResponsable[0].CodigoResponsable);
        },
        BtnGridEditAccionEstrategicaSectorialDetalleClick: function (row, data) {
            base.Control.SlcObjetivoEstrategicoFonafe().val(data.CodigoObjetivoEstrategicoFonafe);
            base.Control.FormularioModelo.AccionEstrategicaSectorialDetalle.CodigoAccionEstrategicaSectorialDetalle = data.CodigoAccionEstrategicaSectorialDetalle;
        },
        BtnGridDeleteAccionEstrategicaSectorialDetalleClick: function (row, data) {
            'use strict'
            if (data.EstadoRegistro != Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inactivo) {
                base.Control.Mensaje.Delete({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaMensajeEliminarRegistro,
                    onAccept: function () {
                        base.Ajax.AjaxEliminarAccionEstrategicaSectorialDetalle.data = {
                            CodigoAccionEstrategicaSectorialDetalle: data.CodigoAccionEstrategicaSectorialDetalle,
                        };
                        base.Ajax.AjaxEliminarAccionEstrategicaSectorialDetalle.submit();
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
        AjaxRegistrarAccionEstrategicaSectorialSuccess: function (resultado) {

            if (resultado.IsSuccess == true) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                if (resultado.Result != null) {                   
                    base.Control.FormularioModelo.AccionEstrategicaSectorial.CodigoAccionEstrategicaSectorial = resultado.Result.CodigoAccionEstrategicaSectorial;                                       
                }
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        /*Tab AccionEstrategicaSectorialDetalle*/
        AjaxRegistrarAccionEstrategicaSectorialDetalleSuccess: function (resultado) {
            if (resultado.IsSuccess && resultado.Result != null && resultado.Result.CodigoAccionEstrategicaSectorial != null) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnBuscarAccionEstrategicaSectorialDetalle();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxEliminarAccionEstrategicaSectorialDetalleSuccess: function (data) {
            'use strict'
            debugger
            if (data.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito });//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaEliminacionExitosa });
                base.Event.BtnBuscarAccionEstrategicaSectorialDetalle();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro })//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaErrorRegistro });
            }
        },
    };

    base.Ajax = {
        /*Tab Generales*/
        AjaxRegistrarAccionEstrategicaSectorial: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoAccionEstrategicaSectorial.Actions.RegistrarAccionEstrategicaSectorial,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarAccionEstrategicaSectorialSuccess
        }),
        /*Tab AccionEstrategicaSectorialDetalle*/
        AjaxRegistrarAccionEstrategicaSectorialDetalle: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoAccionEstrategicaSectorial.Actions.RegistrarAccionEstrategicaSectorialDetalle,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarAccionEstrategicaSectorialDetalleSuccess
        }),
        AjaxEliminarAccionEstrategicaSectorialDetalle: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoAccionEstrategicaSectorial.Actions.EliminarAccionEstrategicaSectorialDetalle,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarAccionEstrategicaSectorialDetalleSuccess
        })
    };

    base.Function = {
        CrearGridAccionEstrategicaSectorialDetalle: function () {
            var columns = new Array();
            columns.push({
                data: 'NombreObjetivoEstrategicoFonafe',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoAccionEstrategicaSectorial.Resource.GridObjetivoEstrategicoFonafe,
                width: "10%"
            });           
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditAccionEstrategicaSectorialDetalleClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteAccionEstrategicaSectorialDetalleClick } }
                ]
            });
            base.Control.GrdResultadoAccionEstrategicaSectorialDetalle = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdAccionEstrategicaSectorialDetalle',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoAccionEstrategicaSectorial.Actions.BuscarAccionEstrategicaSectorialDetalle,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        },
    };
};