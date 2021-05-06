ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoAccionEstrategicaInstitucional.Index');
Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoAccionEstrategicaInstitucional.Index.Controller = function () {
    var base = this;

    base.Control = {
        BtnRegresarBandejaAccionEstrategicaInstitucional: function () { return $('#btnRegresarBandejaAccionEstrategicaInstitucional'); },
        /* Tab Generales*/       
        TxtNombreAccionEstrategicaInstitucional: function () { return $('#txtNombreAccionEstrategicaInstitucionalFormulario'); },
        TxtDescripcionAccionEstrategicaInstitucional: function () { return $('#txtDescripcionAccionEstrategicaInstitucionalFormulario'); },        
        HdnCodigoResponsable: function () { return $('#hdnCodigoResponsable'); },
        TxtResponsable: function () { return $('#txtCodigoResponsable'); },
        BtnGuardarGenerales: function () { return $('#btnGuardarGenerales'); },
        FrmGenerales: function () { return $('#frmGenerales'); },
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),        
        /*Tab AccionEstrategicaInstitucional Detalle*/
        SlcIndicador: function () { return $('#slcIndicador'); },
        BtnAgregarResponsable: function () { return $('#btnBuscarResponsable'); },
        BtnGuardarAccionEstrategicaInstitucionalDetalle: function () { return $('#btnGuardarAccionEstrategicaInstitucionalDetalle'); },
        DlgFormularioResponsable: null,
        FrmAccionEstrategicaInstitucionalDetalle: function () { return $('#frmAccionEstrategicaInstitucionalDetalle'); },
    };

    base.Ini = function () {
        'use strict'
        base.Control.FormularioModelo = Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoAccionEstrategicaInstitucional.Models.Formulario;

        $('#cartTabsAccionEstrategicaInstitucional').on('shown.bs.tab', function (e) {
            var target = $(e.target).attr("href");            
            if (target == "#tabAccionEstrategicaInstitucionalDetalle") {
                if (base.Control.FormularioModelo.AccionEstrategicaInstitucional.CodigoAccionEstrategicaInstitucional != null) {
                    base.Event.BtnBuscarAccionEstrategicaInstitucionalDetalle();
                    $('#divBotonAccionEstrategicaInstitucionalDetalle').removeClass('hidden');
                    $('#divControlesVD').removeClass('hidden');
                };
            }
        });
        
        base.Control.BtnRegresarBandejaAccionEstrategicaInstitucional().on('click', base.Event.BtnRegresarBandejaAccionEstrategicaInstitucionalClick);

        /*Tab Generales*/
        base.Control.BtnGuardarGenerales().off('click');
        base.Control.BtnGuardarGenerales().on('click', base.Event.BtnGuardarGeneralesClick);

        base.Control.ValidadorGenerales = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmGenerales(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos           
        });

        /*Tab AccionEstrategicaInstitucional Detalle*/
        base.Function.CrearGridAccionEstrategicaInstitucionalDetalle();
        
        base.Control.BtnAgregarResponsable().off('click');
        base.Control.BtnAgregarResponsable().on('click', base.Event.BtnAgregarResponsableClick);

        base.Control.DlgFormularioResponsable = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.FormularioBuscadorResponsable.Controller({
            AceptarSuccess: base.Event.AsignarValoresResponsableClick
        });

        base.Control.BtnGuardarAccionEstrategicaInstitucionalDetalle().off('click');
        base.Control.BtnGuardarAccionEstrategicaInstitucionalDetalle().on('click', base.Event.BtnGuardarAccionEstrategicaInstitucionalDetalleClick);

        base.Control.ValidadorAccionEstrategicaInstitucionalDetalle = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmAccionEstrategicaInstitucionalDetalle(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos
        });
    };

    base.Event = {
        BtnRegresarBandejaAccionEstrategicaInstitucionalClick: function () {
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoAccionEstrategicaInstitucional.Actions.BandejaAccionEstrategicaInstitucional, {});
        },
        /*Tab Generales*/
        BtnGuardarGeneralesClick: function () {
            if (base.Control.ValidadorGenerales.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarAccionEstrategicaInstitucional.data = {
                            CodigoAccionEstrategicaInstitucional: base.Control.FormularioModelo.AccionEstrategicaInstitucional.CodigoAccionEstrategicaInstitucional,                            
                            NombreAccionEstrategicaInstitucional: base.Control.TxtNombreAccionEstrategicaInstitucional().val(),
                            DescripcionAccionEstrategicaInstitucional: base.Control.TxtDescripcionAccionEstrategicaInstitucional().val(),                            
                            CodigoResponsable: base.Control.HdnCodigoResponsable().val(),
                        };
                        base.Ajax.AjaxRegistrarAccionEstrategicaInstitucional.submit();
                    }
                });
            } else {
                $("#frmGeneralesSummaryErrorMessage").empty();
                $("#frmGeneralesSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.MsgValideCampos + "</p>");
                return false;
            }
        },
        /*Tab AccionEstrategicaInstitucional Detalle*/
        BtnAgregarResponsableClick: function () {
            'use strict'
            base.Control.DlgFormularioResponsable.Show();
        },
        BtnGuardarAccionEstrategicaInstitucionalDetalleClick: function () {
            if (base.Control.ValidadorAccionEstrategicaInstitucionalDetalle.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarAccionEstrategicaInstitucionalDetalle.data = {
                            CodigoAccionEstrategicaInstitucionalDetalle: base.Control.FormularioModelo.AccionEstrategicaInstitucionalDetalle.CodigoAccionEstrategicaInstitucionalDetalle,
                            CodigoAccionEstrategicaInstitucional: base.Control.FormularioModelo.AccionEstrategicaInstitucional.CodigoAccionEstrategicaInstitucional,
                            CodigoIndicador: base.Control.SlcIndicador().val()
                        };
                        base.Ajax.AjaxRegistrarAccionEstrategicaInstitucionalDetalle.submit();
                    }
                });
            } else {
                $("#frmAccionEstrategicaInstitucionalDetalleSummaryErrorMessage").empty();
                $("#frmAccionEstrategicaInstitucionalDetalleSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnBuscarAccionEstrategicaInstitucionalDetalle: function () {
            base.Control.GrdResultadoAccionEstrategicaInstitucionalDetalle.Load({
                CodigoAccionEstrategicaInstitucional: base.Control.FormularioModelo.AccionEstrategicaInstitucional.CodigoAccionEstrategicaInstitucional                
            });
        },
        AsignarValoresResponsableClick: function (objResponsable) {
            'use strict'
            debugger
            base.Control.TxtResponsable().val(objResponsable[0].NombreCompleto);
            base.Control.HdnCodigoResponsable().val(objResponsable[0].CodigoResponsable);
        },
        BtnGridEditAccionEstrategicaInstitucionalDetalleClick: function (row, data) {
            base.Control.SlcIndicador().val(data.CodigoIndicador);
            base.Control.FormularioModelo.AccionEstrategicaInstitucionalDetalle.CodigoAccionEstrategicaInstitucionalDetalle = data.CodigoAccionEstrategicaInstitucionalDetalle;
        },
        BtnGridDeleteAccionEstrategicaInstitucionalDetalleClick: function (row, data) {
            'use strict'
            if (data.EstadoRegistro != Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inactivo) {
                base.Control.Mensaje.Delete({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaMensajeEliminarRegistro,
                    onAccept: function () {
                        base.Ajax.AjaxEliminarAccionEstrategicaInstitucionalDetalle.data = {
                            CodigoAccionEstrategicaInstitucionalDetalle: data.CodigoAccionEstrategicaInstitucionalDetalle,
                        };
                        base.Ajax.AjaxEliminarAccionEstrategicaInstitucionalDetalle.submit();
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
        AjaxRegistrarAccionEstrategicaInstitucionalSuccess: function (resultado) {

            if (resultado.IsSuccess == true) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                if (resultado.Result != null) {                   
                    base.Control.FormularioModelo.AccionEstrategicaInstitucional.CodigoAccionEstrategicaInstitucional = resultado.Result.CodigoAccionEstrategicaInstitucional;                                       
                }
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        /*Tab AccionEstrategicaInstitucionalDetalle*/
        AjaxRegistrarAccionEstrategicaInstitucionalDetalleSuccess: function (resultado) {
            if (resultado.IsSuccess && resultado.Result != null && resultado.Result.CodigoAccionEstrategicaInstitucional != null) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnBuscarAccionEstrategicaInstitucionalDetalle();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxEliminarAccionEstrategicaInstitucionalDetalleSuccess: function (data) {
            'use strict'
            debugger
            if (data.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito });//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaEliminacionExitosa });
                base.Event.BtnBuscarAccionEstrategicaInstitucionalDetalle();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro })//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaErrorRegistro });
            }
        },
    };

    base.Ajax = {
        /*Tab Generales*/
        AjaxRegistrarAccionEstrategicaInstitucional: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoAccionEstrategicaInstitucional.Actions.RegistrarAccionEstrategicaInstitucional,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarAccionEstrategicaInstitucionalSuccess
        }),
        /*Tab AccionEstrategicaInstitucionalDetalle*/
        AjaxRegistrarAccionEstrategicaInstitucionalDetalle: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoAccionEstrategicaInstitucional.Actions.RegistrarAccionEstrategicaInstitucionalDetalle,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarAccionEstrategicaInstitucionalDetalleSuccess
        }),
        AjaxEliminarAccionEstrategicaInstitucionalDetalle: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoAccionEstrategicaInstitucional.Actions.EliminarAccionEstrategicaInstitucionalDetalle,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarAccionEstrategicaInstitucionalDetalleSuccess
        })
    };

    base.Function = {
        CrearGridAccionEstrategicaInstitucionalDetalle: function () {
            var columns = new Array();
            columns.push({
                data: 'NombreIndicador',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoAccionEstrategicaInstitucional.Resource.GridIndicador,
                width: "10%"
            });           
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditAccionEstrategicaInstitucionalDetalleClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteAccionEstrategicaInstitucionalDetalleClick } }
                ]
            });
            base.Control.GrdResultadoAccionEstrategicaInstitucionalDetalle = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdAccionEstrategicaInstitucionalDetalle',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoAccionEstrategicaInstitucional.Actions.BuscarAccionEstrategicaInstitucionalDetalle,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        },
    };
};