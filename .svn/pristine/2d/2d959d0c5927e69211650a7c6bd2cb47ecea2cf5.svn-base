ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoVariable.Index');
Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoVariable.Index.Controller = function () {
    var base = this;

    base.Control = {
        BtnRegresarBandejaVariable: function () { return $('#btnRegresarBandejaVariable'); },
        /* Tab Generales*/
        SlcTipoVariable: function () { return $('#slcTipoVariable'); },
        TxtNombreSiglaVariable: function () { return $('#txtNombreSiglaVariable'); },
        TxtNombreVariable: function () { return $('#txtNombreVariable'); },
        TxtDescripcionVariable: function () { return $('#txtDescripcionVariable'); },
        BtnGuardarGenerales: function () { return $('#btnGuardarGenerales'); },
        FrmGenerales: function () { return $('#frmGenerales'); },
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        /*Tab Variable Detalle*/
        SlcArea: function () { return $('#slcArea'); },
        HdnCodigoResponsable: function () { return $('#hdnCodigoResponsable'); },
        TxtResponsable: function () { return $('#txtResponsable'); },
        DtpFechaInicioVigencia: function () { return $('#dtpFechaInicioVigencia'); },
        DtpFechaFinVigencia: function () { return $('#dtpFechaFinVigencia'); },
        SlcPeriodicidad: function () { return $('#slcPeriodicidad'); },        
        BtnAgregarResponsable: function () { return $('#btnBuscarResponsable'); },
        BtnGuardarVariableDetalle: function () { return $('#btnGuardarVariableDetalle'); },
        DlgFormularioResponsable: null,
        FrmVariableDetalle: function () { return $('#frmVariableDetalle'); },
    };

    base.Ini = function () {
        'use strict'
        base.Control.FormularioModelo = Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoVariable.Models.Formulario;

        $('#cartTabsVariable').on('shown.bs.tab', function (e) {
            var target = $(e.target).attr("href");            
            if (target == "#tabVariableDetalle") {
                if (base.Control.FormularioModelo.Variable.CodigoVariable != null) {
                    base.Event.BtnBuscarVariableDetalle();
                    $('#divBotonVariableDetalle').removeClass('hidden');
                    $('#divControlesVD').removeClass('hidden');
                };
            }
        });
        
        base.Control.BtnRegresarBandejaVariable().on('click', base.Event.BtnRegresarBandejaVariableClick);

        /*Tab Generales*/
        base.Control.BtnGuardarGenerales().off('click');
        base.Control.BtnGuardarGenerales().on('click', base.Event.BtnGuardarGeneralesClick);

        base.Control.ValidadorGenerales = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmGenerales(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos           
        });

        /*Tab Variable Detalle*/
        base.Function.CrearGridVariableDetalle();
        base.Control.DtpFechaInicioVigencia().datepicker({
            dateFormat: 'dd/mm/yy'
        });
        base.Control.DtpFechaFinVigencia().datepicker({
            dateFormat: 'dd/mm/yy'
        });

        base.Control.BtnAgregarResponsable().off('click');
        base.Control.BtnAgregarResponsable().on('click', base.Event.BtnAgregarResponsableClick);

        base.Control.DlgFormularioResponsable = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.FormularioBuscadorResponsable.Controller({
            AceptarSuccess: base.Event.AsignarValoresResponsableClick
        });

        base.Control.BtnGuardarVariableDetalle().off('click');
        base.Control.BtnGuardarVariableDetalle().on('click', base.Event.BtnGuardarVariableDetalleClick);

        base.Control.ValidadorVariableDetalle = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmVariableDetalle(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos
        });
    };

    base.Event = {
        BtnRegresarBandejaVariableClick: function () {
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoVariable.Actions.BandejaVariable, {});
        },
        /*Tab Generales*/
        BtnGuardarGeneralesClick: function () {
            if (base.Control.ValidadorGenerales.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarVariable.data = {
                            CodigoVariable: base.Control.FormularioModelo.Variable.CodigoVariable,                            
                            NombreVariable: base.Control.TxtNombreVariable().val(),
                            NombreSiglaVariable: base.Control.TxtNombreSiglaVariable().val(),
                            DescripcionVariable: base.Control.TxtDescripcionVariable().val(),
                            CodigoTipoVariable: base.Control.SlcTipoVariable().val()
                        };
                        base.Ajax.AjaxRegistrarVariable.submit();
                    }
                });
            } else {
                $("#frmGeneralesSummaryErrorMessage").empty();
                $("#frmGeneralesSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.MsgValideCampos + "</p>");
                return false;
            }
        },
        /*Tab Variable Detalle*/
        BtnAgregarResponsableClick: function () {
            'use strict'
            base.Control.DlgFormularioResponsable.Show();
        },
        BtnGuardarVariableDetalleClick: function () {
            if (base.Control.ValidadorVariableDetalle.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarVariableDetalle.data = {
                            CodigoDetalleVariable: base.Control.FormularioModelo.VariableDetalle.CodigoDetalleVariable,
                            CodigoVariable: base.Control.FormularioModelo.Variable.CodigoVariable,
                            FechaInicioVigencia: base.Control.DtpFechaInicioVigencia().val(),
                            FechaFinVigencia: base.Control.DtpFechaFinVigencia().val(),
                            CodigoArea: base.Control.SlcArea().val(),
                            CodigoResponsable: base.Control.HdnCodigoResponsable().val(),
                            CodigoPeriodicidad: base.Control.SlcPeriodicidad().val()
                        };
                        base.Ajax.AjaxRegistrarVariableDetalle.submit();
                    }
                });
            } else {
                $("#frmVariableDetalleSummaryErrorMessage").empty();
                $("#frmVariableDetalleSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnBuscarVariableDetalle: function () {
            base.Control.GrdResultadoVariableDetalle.Load({
                CodigoVariable: base.Control.FormularioModelo.Variable.CodigoVariable                
            });
        },
        AsignarValoresResponsableClick: function (objResponsable) {
            'use strict'
            debugger
            base.Control.TxtResponsable().val(objResponsable[0].NombreCompleto);
            base.Control.HdnCodigoResponsable().val(objResponsable[0].CodigoResponsable);            
        },
        BtnGridEditVariableDetalleClick: function (row, data) {
            base.Control.SlcArea().val(data.CodigoArea);
            base.Control.HdnCodigoResponsable().val(data.CodigoResponsable);
            base.Control.TxtResponsable().val(data.NombreCompletoResponsable);
            base.Control.DtpFechaInicioVigencia().val(data.FechaInicioVigenciaString);
            base.Control.DtpFechaFinVigencia().val(data.FechaFinVigenciaString);
            base.Control.SlcPeriodicidad().val(data.CodigoPeriodicidad);
            base.Control.FormularioModelo.VariableDetalle.CodigoDetalleVariable = data.CodigoDetalleVariable;
        },
        BtnGridDeleteVariableDetalleClick: function (row, data) {
            'use strict'
            if (data.EstadoRegistro != Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inactivo) {
                base.Control.Mensaje.Delete({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaMensajeEliminarRegistro,
                    onAccept: function () {
                        base.Ajax.AjaxEliminarVariableDetalle.data = {
                            CodigoDetalleVariable: data.CodigoDetalleVariable,
                        };
                        base.Ajax.AjaxEliminarVariableDetalle.submit();
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
        AjaxRegistrarVariableSuccess: function (resultado) {

            if (resultado.IsSuccess == true) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                if (resultado.Result != null) {                   
                    base.Control.FormularioModelo.Variable.CodigoVariable = resultado.Result.CodigoVariable;                                       
                }
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        /*Tab VariableDetalle*/
        AjaxRegistrarVariableDetalleSuccess: function (resultado) {
            if (resultado.IsSuccess && resultado.Result != null && resultado.Result.CodigoVariable != null) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnBuscarVariableDetalle();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxEliminarVariableDetalleSuccess: function (data) {
            'use strict'
            if (data.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito });//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaEliminacionExitosa });
                base.Event.BtnBuscarVariableDetalle();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro })//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaErrorRegistro });
            }
        },
    };

    base.Ajax = {
        /*Tab Generales*/
        AjaxRegistrarVariable: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoVariable.Actions.RegistrarVariable,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarVariableSuccess
        }),
        /*Tab VariableDetalle*/
        AjaxRegistrarVariableDetalle: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoVariable.Actions.RegistrarVariableDetalle,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarVariableDetalleSuccess
        }),
        AjaxEliminarVariableDetalle: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoVariable.Actions.EliminarVariableDetalle,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarVariableDetalleSuccess
        })
    };

    base.Function = {
        CrearGridVariableDetalle: function () {
            var columns = new Array();
            columns.push({
                data: 'FechaInicioVigenciaString',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoVariable.Resource.GridFechaInicioVigencia,
                width: "10%"
            });
            columns.push({
                data: 'FechaFinVigenciaString',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoVariable.Resource.GridFechaFinVigencia,
                width: "10%"
            });
            columns.push({
                data: 'NombreArea',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoVariable.Resource.GridArea,
                width: "15%"
            });
            columns.push({
                data: 'NombreCompletoResponsable',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoVariable.Resource.GridResponsable,
                width: "15%"
            });
            columns.push({
                data: 'DescripcionPeriodicidad',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoVariable.Resource.GridPeriodicidad,
                width: "15%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditVariableDetalleClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteVariableDetalleClick } }
                ]
            });
            base.Control.GrdResultadoVariableDetalle = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdVariableDetalle',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoVariable.Actions.BuscarVariableDetalle,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        },
    };
};