ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoObjetivoEstrategicoEmpresa.Index');
Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoObjetivoEstrategicoEmpresa.Index.Controller = function () {
    var base = this;

    base.Control = {
        BtnRegresarBandejaObjetivoEstrategicoEmpresa: function () { return $('#btnRegresarBandejaObjetivoEstrategicoEmpresa'); },
        /* Tab Generales*/       
        TxtNombreObjetivoEstrategicoEmpresa: function () { return $('#txtNombreObjetivoEstrategicoEmpresaFormulario'); },
        TxtDescripcionObjetivoEstrategicoEmpresa: function () { return $('#txtDescripcionObjetivoEstrategicoEmpresaFormulario'); },
        SlcModeloConceptual: function () { return $('#slcModeloConceptual'); },
        HdnCodigoResponsable: function () { return $('#hdnCodigoResponsable'); },
        TxtResponsable: function () { return $('#txtCodigoResponsable'); },
        BtnGuardarGenerales: function () { return $('#btnGuardarGenerales'); },
        FrmGenerales: function () { return $('#frmGenerales'); },
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),        
        /*Tab ObjetivoEstrategicoEmpresa Detalle*/
        SlcIndicador: function () { return $('#slcIndicador'); },
        BtnAgregarResponsable: function () { return $('#btnBuscarResponsable'); },
        BtnGuardarObjetivoEstrategicoEmpresaDetalle: function () { return $('#btnGuardarObjetivoEstrategicoEmpresaDetalle'); },
        DlgFormularioResponsable: null,
        FrmObjetivoEstrategicoEmpresaDetalle: function () { return $('#frmObjetivoEstrategicoEmpresaDetalle'); },

        /*Tab ObjetivoEstrategicoEmpresa AccionEstrategicaInstitucional*/
        SlcAccionEstrategicaInstitucional: function () { return $('#slcAccionEstrategicaInstitucional'); },
        BtnGuardarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional: function () { return $('#btnGuardarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional'); },
        FrmObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional: function () { return $('#frmObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional'); },
    };

    base.Ini = function () {
        'use strict'
        base.Control.FormularioModelo = Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoObjetivoEstrategicoEmpresa.Models.Formulario;

        $('#cartTabsObjetivoEstrategicoEmpresa').on('shown.bs.tab', function (e) {
            var target = $(e.target).attr("href");            
            if (target == "#tabObjetivoEstrategicoEmpresaDetalle") {
                if (base.Control.FormularioModelo.ObjetivoEstrategicoEmpresa.CodigoObjetivoEstrategicoEmpresa != null) {
                    base.Event.BtnBuscarObjetivoEstrategicoEmpresaDetalle();
                    $('#divBotonObjetivoEstrategicoEmpresaDetalle').removeClass('hidden');
                    $('#divControlesVD').removeClass('hidden');
                };
            }
            if (target == "#tabObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional") {
                if (base.Control.FormularioModelo.ObjetivoEstrategicoEmpresa.CodigoObjetivoEstrategicoEmpresa != null) {
                    base.Event.BtnBuscarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional();
                    $('#divBotonObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional').removeClass('hidden');
                    $('#divControlesAEI').removeClass('hidden');
                };
            }
        });
        
        base.Control.BtnRegresarBandejaObjetivoEstrategicoEmpresa().on('click', base.Event.BtnRegresarBandejaObjetivoEstrategicoEmpresaClick);

        /*Tab Generales*/
        base.Control.BtnGuardarGenerales().off('click');
        base.Control.BtnGuardarGenerales().on('click', base.Event.BtnGuardarGeneralesClick);

        base.Control.ValidadorGenerales = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmGenerales(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos           
        });

        /*Tab ObjetivoEstrategicoEmpresa Detalle*/
        base.Function.CrearGridObjetivoEstrategicoEmpresaDetalle();
        
        base.Control.BtnAgregarResponsable().off('click');
        base.Control.BtnAgregarResponsable().on('click', base.Event.BtnAgregarResponsableClick);

        base.Control.DlgFormularioResponsable = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.FormularioBuscadorResponsable.Controller({
            AceptarSuccess: base.Event.AsignarValoresResponsableClick
        });

        base.Control.BtnGuardarObjetivoEstrategicoEmpresaDetalle().off('click');
        base.Control.BtnGuardarObjetivoEstrategicoEmpresaDetalle().on('click', base.Event.BtnGuardarObjetivoEstrategicoEmpresaDetalleClick);

        base.Control.ValidadorObjetivoEstrategicoEmpresaDetalle = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmObjetivoEstrategicoEmpresaDetalle(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos
        });

        /*Tab ObjetivoEstrategicoEmpresa AccionEstrategicaInstitucional*/
        base.Function.CrearGridObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional();

        base.Control.BtnGuardarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional().off('click');
        base.Control.BtnGuardarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional().on('click', base.Event.BtnGuardarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalClick);

        base.Control.ValidadorObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos
        });
    };

    base.Event = {
        BtnRegresarBandejaObjetivoEstrategicoEmpresaClick: function () {
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoObjetivoEstrategicoEmpresa.Actions.BandejaObjetivoEstrategicoEmpresa, {});
        },
        /*Tab Generales*/
        BtnGuardarGeneralesClick: function () {
            if (base.Control.ValidadorGenerales.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarObjetivoEstrategicoEmpresa.data = {
                            CodigoObjetivoEstrategicoEmpresa: base.Control.FormularioModelo.ObjetivoEstrategicoEmpresa.CodigoObjetivoEstrategicoEmpresa,                            
                            NombreObjetivoEstrategicoEmpresa: base.Control.TxtNombreObjetivoEstrategicoEmpresa().val(),
                            DescripcionObjetivoEstrategicoEmpresa: base.Control.TxtDescripcionObjetivoEstrategicoEmpresa().val(),
                            CodigoModeloConceptual: base.Control.SlcModeloConceptual().val(),
                            CodigoResponsable: base.Control.HdnCodigoResponsable().val(),
                        };
                        base.Ajax.AjaxRegistrarObjetivoEstrategicoEmpresa.submit();
                    }
                });
            } else {
                $("#frmGeneralesSummaryErrorMessage").empty();
                $("#frmGeneralesSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.MsgValideCampos + "</p>");
                return false;
            }
        },
        /*Tab ObjetivoEstrategicoEmpresa Detalle*/
        BtnAgregarResponsableClick: function () {
            'use strict'
            base.Control.DlgFormularioResponsable.Show();
        },
        BtnGuardarObjetivoEstrategicoEmpresaDetalleClick: function () {
            if (base.Control.ValidadorObjetivoEstrategicoEmpresaDetalle.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarObjetivoEstrategicoEmpresaDetalle.data = {
                            CodigoObjetivoEstrategicoEmpresaDetalle: base.Control.FormularioModelo.ObjetivoEstrategicoEmpresaDetalle.CodigoObjetivoEstrategicoEmpresaDetalle,
                            CodigoObjetivoEstrategicoEmpresa: base.Control.FormularioModelo.ObjetivoEstrategicoEmpresa.CodigoObjetivoEstrategicoEmpresa,
                            CodigoIndicador: base.Control.SlcIndicador().val()
                        };
                        base.Ajax.AjaxRegistrarObjetivoEstrategicoEmpresaDetalle.submit();
                    }
                });
            } else {
                $("#frmObjetivoEstrategicoEmpresaDetalleSummaryErrorMessage").empty();
                $("#frmObjetivoEstrategicoEmpresaDetalleSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnBuscarObjetivoEstrategicoEmpresaDetalle: function () {
            base.Control.GrdResultadoObjetivoEstrategicoEmpresaDetalle.Load({
                CodigoObjetivoEstrategicoEmpresa: base.Control.FormularioModelo.ObjetivoEstrategicoEmpresa.CodigoObjetivoEstrategicoEmpresa                
            });
        },
        AsignarValoresResponsableClick: function (objResponsable) {
            'use strict'
            debugger
            base.Control.TxtResponsable().val(objResponsable[0].NombreCompleto);
            base.Control.HdnCodigoResponsable().val(objResponsable[0].CodigoResponsable);
        },
        BtnGridEditObjetivoEstrategicoEmpresaDetalleClick: function (row, data) {
            base.Control.SlcIndicador().val(data.CodigoIndicador);
            base.Control.FormularioModelo.ObjetivoEstrategicoEmpresaDetalle.CodigoObjetivoEstrategicoEmpresaDetalle = data.CodigoObjetivoEstrategicoEmpresaDetalle;
        },
        BtnGridDeleteObjetivoEstrategicoEmpresaDetalleClick: function (row, data) {
            'use strict'
            if (data.EstadoRegistro != Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inactivo) {
                base.Control.Mensaje.Delete({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaMensajeEliminarRegistro,
                    onAccept: function () {
                        base.Ajax.AjaxEliminarObjetivoEstrategicoEmpresaDetalle.data = {
                            CodigoObjetivoEstrategicoEmpresaDetalle: data.CodigoObjetivoEstrategicoEmpresaDetalle,
                        };
                        base.Ajax.AjaxEliminarObjetivoEstrategicoEmpresaDetalle.submit();
                    }
                });
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.RegistroInactivo });
            }

        },
        /*Tab ObjetivoEstrategicoEmpresa AccionEstrategicaInstitucional*/        
        BtnGuardarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalClick: function () {
            if (base.Control.ValidadorObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional.data = {
                            CodigoObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional: base.Control.FormularioModelo.ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional.CodigoObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional,
                            CodigoObjetivoEstrategicoEmpresa: base.Control.FormularioModelo.ObjetivoEstrategicoEmpresa.CodigoObjetivoEstrategicoEmpresa,
                            CodigoAccionEstrategicaInstitucional: base.Control.SlcAccionEstrategicaInstitucional().val()
                        };
                        base.Ajax.AjaxRegistrarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional.submit();
                    }
                });
            } else {
                $("#frmObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalSummaryErrorMessage").empty();
                $("#frmObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnBuscarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional: function () {
            base.Control.GrdResultadoObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional.Load({
                CodigoObjetivoEstrategicoEmpresa: base.Control.FormularioModelo.ObjetivoEstrategicoEmpresa.CodigoObjetivoEstrategicoEmpresa
            });
        },        
        BtnGridEditObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalClick: function (row, data) {
            base.Control.SlcAccionEstrategicaInstitucional().val(data.CodigoAccionEstrategicaInstitucional);
            base.Control.FormularioModelo.ObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional.CodigoObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional = data.CodigoObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional;
        },
        BtnGridDeleteObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalClick: function (row, data) {
            'use strict'
            if (data.EstadoRegistro != Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inactivo) {
                base.Control.Mensaje.Delete({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaMensajeEliminarRegistro,
                    onAccept: function () {
                        base.Ajax.AjaxEliminarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional.data = {
                            CodigoObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional: data.CodigoObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional,
                        };
                        base.Ajax.AjaxEliminarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional.submit();
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
        AjaxRegistrarObjetivoEstrategicoEmpresaSuccess: function (resultado) {

            if (resultado.IsSuccess == true) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                if (resultado.Result != null) {                   
                    base.Control.FormularioModelo.ObjetivoEstrategicoEmpresa.CodigoObjetivoEstrategicoEmpresa = resultado.Result.CodigoObjetivoEstrategicoEmpresa;                                       
                }
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        /*Tab ObjetivoEstrategicoEmpresaDetalle*/
        AjaxRegistrarObjetivoEstrategicoEmpresaDetalleSuccess: function (resultado) {
            if (resultado.IsSuccess && resultado.Result != null && resultado.Result.CodigoObjetivoEstrategicoEmpresa != null) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnBuscarObjetivoEstrategicoEmpresaDetalle();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxEliminarObjetivoEstrategicoEmpresaDetalleSuccess: function (data) {
            'use strict'
            debugger
            if (data.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito });//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaEliminacionExitosa });
                base.Event.BtnBuscarObjetivoEstrategicoEmpresaDetalle();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro })//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaErrorRegistro });
            }
        },
        /*Tab ObjetivoEstrategicoEmpresa AccionEstrategicaInstitucional*/
        AjaxRegistrarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalSuccess: function (resultado) {
            if (resultado.IsSuccess && resultado.Result != null && resultado.Result.CodigoObjetivoEstrategicoEmpresa != null) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnBuscarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxEliminarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalSuccess: function (data) {
            'use strict'
            debugger
            if (data.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito });//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaEliminacionExitosa });
                base.Event.BtnBuscarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro })//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaErrorRegistro });
            }
        },
    };

    base.Ajax = {
        /*Tab Generales*/
        AjaxRegistrarObjetivoEstrategicoEmpresa: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoObjetivoEstrategicoEmpresa.Actions.RegistrarObjetivoEstrategicoEmpresa,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarObjetivoEstrategicoEmpresaSuccess
        }),
        /*Tab ObjetivoEstrategicoEmpresaDetalle*/
        AjaxRegistrarObjetivoEstrategicoEmpresaDetalle: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoObjetivoEstrategicoEmpresa.Actions.RegistrarObjetivoEstrategicoEmpresaDetalle,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarObjetivoEstrategicoEmpresaDetalleSuccess
        }),
        AjaxEliminarObjetivoEstrategicoEmpresaDetalle: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoObjetivoEstrategicoEmpresa.Actions.EliminarObjetivoEstrategicoEmpresaDetalle,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarObjetivoEstrategicoEmpresaDetalleSuccess
        }),
        /*Tab ObjetivoEstrategicoEmpresa AccionEstrategicaInstitucional*/
        AjaxRegistrarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoObjetivoEstrategicoEmpresa.Actions.RegistrarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalSuccess
        }),
        AjaxEliminarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoObjetivoEstrategicoEmpresa.Actions.EliminarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalSuccess
        })
    };

    base.Function = {
        CrearGridObjetivoEstrategicoEmpresaDetalle: function () {
            var columns = new Array();
            columns.push({
                data: 'NombreIndicador',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoObjetivoEstrategicoEmpresa.Resource.GridIndicador,
                width: "10%"
            });           
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditObjetivoEstrategicoEmpresaDetalleClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteObjetivoEstrategicoEmpresaDetalleClick } }
                ]
            });
            base.Control.GrdResultadoObjetivoEstrategicoEmpresaDetalle = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdObjetivoEstrategicoEmpresaDetalle',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoObjetivoEstrategicoEmpresa.Actions.BuscarObjetivoEstrategicoEmpresaDetalle,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        },

        CrearGridObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional: function () {
            var columns = new Array();
            columns.push({
                data: 'NombreAccionEstrategicaInstitucional',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoObjetivoEstrategicoEmpresa.Resource.GridAccionEstrategicaInstitucional,
                width: "10%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteObjetivoEstrategicoEmpresaAccionEstrategicaInstitucionalClick } }
                ]
            });
            base.Control.GrdResultadoObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoObjetivoEstrategicoEmpresa.Actions.BuscarObjetivoEstrategicoEmpresaAccionEstrategicaInstitucional,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        },
    };
};