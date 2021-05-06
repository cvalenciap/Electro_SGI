ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoObjetivoEstrategicoFonafe.Index');
Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoObjetivoEstrategicoFonafe.Index.Controller = function () {
    var base = this;

    base.Control = {
        BtnRegresarBandejaObjetivoEstrategicoFonafe: function () { return $('#btnRegresarBandejaObjetivoEstrategicoFonafe'); },
        /* Tab Generales*/       
        TxtNombreObjetivoEstrategicoFonafe: function () { return $('#txtNombreObjetivoEstrategicoFonafeFormulario'); },
        TxtDescripcionObjetivoEstrategicoFonafe: function () { return $('#txtDescripcionObjetivoEstrategicoFonafeFormulario'); },        
        HdnCodigoResponsable: function () { return $('#hdnCodigoResponsable'); },
        TxtResponsable: function () { return $('#txtCodigoResponsable'); },
        BtnGuardarGenerales: function () { return $('#btnGuardarGenerales'); },
        FrmGenerales: function () { return $('#frmGenerales'); },
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),        
        /*Tab ObjetivoEstrategicoFonafe Detalle*/
        SlcObjetivoEstrategicoEmpresa: function () { return $('#slcObjetivoEstrategicoEmpresa'); },
        BtnAgregarResponsable: function () { return $('#btnBuscarResponsable'); },
        BtnGuardarObjetivoEstrategicoFonafeDetalle: function () { return $('#btnGuardarObjetivoEstrategicoFonafeDetalle'); },
        DlgFormularioResponsable: null,
        FrmObjetivoEstrategicoFonafeDetalle: function () { return $('#frmObjetivoEstrategicoFonafeDetalle'); },
    };

    base.Ini = function () {
        'use strict'
        base.Control.FormularioModelo = Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoObjetivoEstrategicoFonafe.Models.Formulario;

        $('#cartTabsObjetivoEstrategicoFonafe').on('shown.bs.tab', function (e) {
            var target = $(e.target).attr("href");            
            if (target == "#tabObjetivoEstrategicoFonafeDetalle") {
                if (base.Control.FormularioModelo.ObjetivoEstrategicoFonafe.CodigoObjetivoEstrategicoFonafe != null) {
                    base.Event.BtnBuscarObjetivoEstrategicoFonafeDetalle();
                    $('#divBotonObjetivoEstrategicoFonafeDetalle').removeClass('hidden');
                    $('#divControlesVD').removeClass('hidden');
                };
            }
        });
        
        base.Control.BtnRegresarBandejaObjetivoEstrategicoFonafe().on('click', base.Event.BtnRegresarBandejaObjetivoEstrategicoFonafeClick);

        /*Tab Generales*/
        base.Control.BtnGuardarGenerales().off('click');
        base.Control.BtnGuardarGenerales().on('click', base.Event.BtnGuardarGeneralesClick);

        base.Control.ValidadorGenerales = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmGenerales(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos           
        });

        /*Tab ObjetivoEstrategicoFonafe Detalle*/
        base.Function.CrearGridObjetivoEstrategicoFonafeDetalle();
        
        base.Control.BtnAgregarResponsable().off('click');
        base.Control.BtnAgregarResponsable().on('click', base.Event.BtnAgregarResponsableClick);

        base.Control.DlgFormularioResponsable = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.FormularioBuscadorResponsable.Controller({
            AceptarSuccess: base.Event.AsignarValoresResponsableClick
        });

        base.Control.BtnGuardarObjetivoEstrategicoFonafeDetalle().off('click');
        base.Control.BtnGuardarObjetivoEstrategicoFonafeDetalle().on('click', base.Event.BtnGuardarObjetivoEstrategicoFonafeDetalleClick);

        base.Control.ValidadorObjetivoEstrategicoFonafeDetalle = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmObjetivoEstrategicoFonafeDetalle(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos
        });
    };

    base.Event = {
        BtnRegresarBandejaObjetivoEstrategicoFonafeClick: function () {
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoObjetivoEstrategicoFonafe.Actions.BandejaObjetivoEstrategicoFonafe, {});
        },
        /*Tab Generales*/
        BtnGuardarGeneralesClick: function () {
            if (base.Control.ValidadorGenerales.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarObjetivoEstrategicoFonafe.data = {
                            CodigoObjetivoEstrategicoFonafe: base.Control.FormularioModelo.ObjetivoEstrategicoFonafe.CodigoObjetivoEstrategicoFonafe,                            
                            NombreObjetivoEstrategicoFonafe: base.Control.TxtNombreObjetivoEstrategicoFonafe().val(),
                            DescripcionObjetivoEstrategicoFonafe: base.Control.TxtDescripcionObjetivoEstrategicoFonafe().val(),                            
                            CodigoResponsable: base.Control.HdnCodigoResponsable().val(),
                        };
                        base.Ajax.AjaxRegistrarObjetivoEstrategicoFonafe.submit();
                    }
                });
            } else {
                $("#frmGeneralesSummaryErrorMessage").empty();
                $("#frmGeneralesSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.MsgValideCampos + "</p>");
                return false;
            }
        },
        /*Tab ObjetivoEstrategicoFonafe Detalle*/
        BtnAgregarResponsableClick: function () {
            'use strict'
            base.Control.DlgFormularioResponsable.Show();
        },
        BtnGuardarObjetivoEstrategicoFonafeDetalleClick: function () {
            if (base.Control.ValidadorObjetivoEstrategicoFonafeDetalle.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarObjetivoEstrategicoFonafeDetalle.data = {
                            CodigoObjetivoEstrategicoFonafeDetalle: base.Control.FormularioModelo.ObjetivoEstrategicoFonafeDetalle.CodigoObjetivoEstrategicoFonafeDetalle,
                            CodigoObjetivoEstrategicoFonafe: base.Control.FormularioModelo.ObjetivoEstrategicoFonafe.CodigoObjetivoEstrategicoFonafe,
                            CodigoObjetivoEstrategicoEmpresa: base.Control.SlcObjetivoEstrategicoEmpresa().val()
                        };
                        base.Ajax.AjaxRegistrarObjetivoEstrategicoFonafeDetalle.submit();
                    }
                });
            } else {
                $("#frmObjetivoEstrategicoFonafeDetalleSummaryErrorMessage").empty();
                $("#frmObjetivoEstrategicoFonafeDetalleSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnBuscarObjetivoEstrategicoFonafeDetalle: function () {
            base.Control.GrdResultadoObjetivoEstrategicoFonafeDetalle.Load({
                CodigoObjetivoEstrategicoFonafe: base.Control.FormularioModelo.ObjetivoEstrategicoFonafe.CodigoObjetivoEstrategicoFonafe                
            });
        },
        AsignarValoresResponsableClick: function (objResponsable) {
            'use strict'
            debugger
            base.Control.TxtResponsable().val(objResponsable[0].NombreCompleto);
            base.Control.HdnCodigoResponsable().val(objResponsable[0].CodigoResponsable);
        },
        BtnGridEditObjetivoEstrategicoFonafeDetalleClick: function (row, data) {
            base.Control.SlcObjetivoEstrategicoEmpresa().val(data.CodigoObjetivoEstrategicoEmpresa);
            base.Control.FormularioModelo.ObjetivoEstrategicoFonafeDetalle.CodigoObjetivoEstrategicoFonafeDetalle = data.CodigoObjetivoEstrategicoFonafeDetalle;
        },
        BtnGridDeleteObjetivoEstrategicoFonafeDetalleClick: function (row, data) {
            'use strict'
            if (data.EstadoRegistro != Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inactivo) {
                base.Control.Mensaje.Delete({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaMensajeEliminarRegistro,
                    onAccept: function () {
                        base.Ajax.AjaxEliminarObjetivoEstrategicoFonafeDetalle.data = {
                            CodigoObjetivoEstrategicoFonafeDetalle: data.CodigoObjetivoEstrategicoFonafeDetalle,
                        };
                        base.Ajax.AjaxEliminarObjetivoEstrategicoFonafeDetalle.submit();
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
        AjaxRegistrarObjetivoEstrategicoFonafeSuccess: function (resultado) {

            if (resultado.IsSuccess == true) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                if (resultado.Result != null) {                   
                    base.Control.FormularioModelo.ObjetivoEstrategicoFonafe.CodigoObjetivoEstrategicoFonafe = resultado.Result.CodigoObjetivoEstrategicoFonafe;                                       
                }
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        /*Tab ObjetivoEstrategicoFonafeDetalle*/
        AjaxRegistrarObjetivoEstrategicoFonafeDetalleSuccess: function (resultado) {
            if (resultado.IsSuccess && resultado.Result != null && resultado.Result.CodigoObjetivoEstrategicoFonafe != null) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnBuscarObjetivoEstrategicoFonafeDetalle();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxEliminarObjetivoEstrategicoFonafeDetalleSuccess: function (data) {
            'use strict'
            debugger
            if (data.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito });//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaEliminacionExitosa });
                base.Event.BtnBuscarObjetivoEstrategicoFonafeDetalle();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro })//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaErrorRegistro });
            }
        },
    };

    base.Ajax = {
        /*Tab Generales*/
        AjaxRegistrarObjetivoEstrategicoFonafe: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoObjetivoEstrategicoFonafe.Actions.RegistrarObjetivoEstrategicoFonafe,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarObjetivoEstrategicoFonafeSuccess
        }),
        /*Tab ObjetivoEstrategicoFonafeDetalle*/
        AjaxRegistrarObjetivoEstrategicoFonafeDetalle: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoObjetivoEstrategicoFonafe.Actions.RegistrarObjetivoEstrategicoFonafeDetalle,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarObjetivoEstrategicoFonafeDetalleSuccess
        }),
        AjaxEliminarObjetivoEstrategicoFonafeDetalle: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoObjetivoEstrategicoFonafe.Actions.EliminarObjetivoEstrategicoFonafeDetalle,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarObjetivoEstrategicoFonafeDetalleSuccess
        })
    };

    base.Function = {
        CrearGridObjetivoEstrategicoFonafeDetalle: function () {
            var columns = new Array();
            columns.push({
                data: 'NombreObjetivoEstrategicoEmpresa',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoObjetivoEstrategicoFonafe.Resource.GridObjetivoEstrategicoEmpresa,
                width: "10%"
            });           
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditObjetivoEstrategicoFonafeDetalleClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteObjetivoEstrategicoFonafeDetalleClick } }
                ]
            });
            base.Control.GrdResultadoObjetivoEstrategicoFonafeDetalle = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdObjetivoEstrategicoFonafeDetalle',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoObjetivoEstrategicoFonafe.Actions.BuscarObjetivoEstrategicoFonafeDetalle,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        },
    };
};