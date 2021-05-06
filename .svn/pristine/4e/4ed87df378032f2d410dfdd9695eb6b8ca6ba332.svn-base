/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 19102017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.BandejaVariable.Index');

Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.BandejaVariable.Index.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Function.CrearGridBandejaVariable();
        base.Control.GrdResultadoBandeja.Load();        
        base.Event.BtnBuscarClick();
        base.Control.BtnBuscar().click(base.Event.BtnBuscarClick);

        base.Control.BtnLimpiar().off('click');
        base.Control.BtnLimpiar().on('click', base.Event.BtnLimpiarClick);

        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaInicioVigencia(),
            inputTo: base.Control.DtpFechaFinVigencia(),
            minDateFrom: new Date(1900, 1, 1)
        });

        base.Control.BtnAgregar().off('click');
        base.Control.BtnAgregar().on('click', base.Event.BtnAgregarClick);
    };

    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        BtnBuscar: function () { return $('#btnBuscar'); },
        BtnLimpiar: function () { return $('#btnLimpiar'); },
        BtnAgregar: function () { return $('#btnAgregar'); },
        SlcArea: function () { return $('#slcArea'); },
        DtpFechaInicioVigencia: function () { return $('#dtpFechaInicioVigencia'); },
        DtpFechaFinVigencia: function () { return $('#dtpFechaFinVigencia'); },
    };

    base.Event = {
        BtnBuscarClick: function () {
            var filtro = {
                CodigoArea: base.Control.SlcArea().val(),
                FechaInicioVigencia: base.Control.DtpFechaInicioVigencia().val(),
                FechaFinVigencia: base.Control.DtpFechaFinVigencia().val(),
            };
            base.Control.GrdResultadoBandeja.Load(filtro);
        },
        BtnLimpiarClick: function () {
            base.Control.SlcArea().val('');
            base.Control.DtpFechaInicioVigencia().val('');
            base.Control.DtpFechaFinVigencia().val('');
        },
        BtnAgregarClick: function (row, data) {
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.BandejaVariable.Actions.IngresoVariable);
        },
        BtnGridEditClick: function (row, data) {
            'use strict'
            if (data.Permiso == 5 || data.Permiso == 3 || data.Permiso == 2) {
                if (data.EstadoRegistro != Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inactivo) {
                    Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.BandejaVariable.Actions.IngresoVariable, data);
                } else {
                    base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.RegistroInactivo });
                }                
            }
            else {
                base.Control.Mensaje.Information({ message: 'No tiene permisos suficientes para realizar esta operación' });
            }
        },
        BtnGridDeleteClick: function (row, data) {
            'use strict'
            if (data.Permiso == 6 || data.Permiso == 3 || data.Permiso == 2) {
                if (data.EstadoRegistro != Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inactivo) {
                    base.Control.Mensaje.Delete({
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaMensajeEliminarRegistro,
                        onAccept: function () {
                            base.Ajax.AjaxEliminar.data = {
                                CodigoVariable: data.CodigoVariable,
                            };
                            base.Ajax.AjaxEliminar.submit();
                        }
                    });
                }
                else {
                    base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.RegistroInactivo });
                }
            }
            else {                
                base.Control.Mensaje.Information({ message: 'No tiene permisos suficientes para realizar esta operación' });
            }

        },
        BtnGridReactivateClick: function (row, data) {
            'use strict'
            if (data.Permiso == 8 || data.Permiso == 3 || data.Permiso == 2) {
                if (data.EstadoRegistro != Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Activo) {
                    base.Control.Mensaje.Reactivate({
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaMensajeReactivarRegistro,
                        onAccept: function () {
                            base.Ajax.AjaxReactivarVariable.data = {
                                CodigoVariable: data.CodigoVariable,
                            };
                            base.Ajax.AjaxReactivarVariable.submit();
                        }
                    });
                }
                else {
                    base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.RegistroActivo });
                }
            }
            else {
                base.Control.Mensaje.Information({ message: 'No tiene permisos suficientes para realizar esta operación' });
            }
        },
        AjaxEliminarVariableSuccess: function (data) {
            'use strict'
            if (data.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito });
                base.Event.BtnBuscarClick();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro })
            }
        },
        AjaxReactivarVariableSuccess: function (data) {
            'use strict'
            if (data.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeReactivoInformacionExito });//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaEliminacionExitosa });
                base.Event.BtnBuscarClick();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro })//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaErrorRegistro });
            }
        },
    };

    base.Ajax = {
        AjaxEliminar: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.BandejaVariable.Actions.EliminarVariable,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarVariableSuccess
        }),
        AjaxReactivarVariable: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.BandejaVariable.Actions.ReactivarVariable,
            autoSubmit: false,
            onSuccess: base.Event.AjaxReactivarVariableSuccess
        })
    };

    base.Function = {
        CrearGridBandejaVariable: function () {
            var columns = new Array();
            columns.push({
                data: 'NombreVariable',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.BandejaVariable.Resource.GridNombreVariable,
                width: "15%"
            });
            columns.push({
                data: 'NombreTipoVariable',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.BandejaVariable.Resource.GridTipo,
                width: "10%"
            });
            columns.push({
                data: 'FechaInicioVigenciaString',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.BandejaVariable.Resource.GridFechaInicioVigencia,
                width: "10%"
            });
            columns.push({
                data: 'FechaFinVigenciaString',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.BandejaVariable.Resource.GridFechaFinVigencia,
                width: "10%"
            });
            columns.push({
                data: 'NombreArea',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.BandejaVariable.Resource.GridArea,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionPeriodicidad',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.BandejaVariable.Resource.GridPeriodicidad,
                width: "5%"
            });
            columns.push({
                data: 'EstadoRegistroDescripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.BandejaVariable.Resource.GridEstado,
                width: "5%"
            });
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteClick } },
                { type: Pe.GMD.UI.Web.Components.GridAction.Check, event: { on: 'click', callBack: base.Event.BtnGridReactivateClick } }
                ]
            });

            base.Control.GrdResultadoBandeja = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResult',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.BandejaVariable.Actions.BuscarVariable,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        }
    };
};