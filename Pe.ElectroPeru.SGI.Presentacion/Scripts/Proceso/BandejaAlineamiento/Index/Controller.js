/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 19102017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.BandejaObjetivoEstrategicoSectorial.Index');
Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.BandejaObjetivoEstrategicoSectorial.Index.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Function.CrearGridBandejaObjetivoEstrategicoSectorial();
        base.Control.GrdResultadoBandeja.Load();

        base.Event.BtnBuscarClick();
        base.Control.BtnBuscar().click(base.Event.BtnBuscarClick);

        base.Control.BtnLimpiar().off('click');
        base.Control.BtnLimpiar().on('click', base.Event.BtnLimpiarClick);

        base.Control.BtnAgregar().off('click');
        base.Control.BtnAgregar().on('click', base.Event.BtnAgregarClick);
    };

    base.Control = {

        BtnBuscar: function () { return $('#btnBuscar'); },
        BtnLimpiar: function () { return $('#btnLimpiar'); },
        BtnAgregar: function () { return $('#btnAgregar'); },
        SlcModeloConceptual: function () { return $('#slcModeloConceptual'); },
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
    };

    base.Event = {
        BtnBuscarClick: function () {
            var filtro = {
                CodigoModeloConceptual: base.Control.SlcModeloConceptual().val(),
            };
            base.Control.GrdResultadoBandeja.Load(filtro);
        },
        BtnLimpiarClick: function () {
            base.Control.SlcModeloConceptual().val('');
            base.Control.DtpFechaInicioVigencia().val('');
            base.Control.DtpFechaFinVigencia().val('');
        },
        BtnAgregarClick: function (row, data) {
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.BandejaObjetivoEstrategicoSectorial.Actions.IngresoObjetivoEstrategicoSectorial);
        },
        BtnGridEditClick: function (row, data) {
            'use strict'
            if (data.Permiso == 5 || data.Permiso == 3 || data.Permiso == 2) {
                if (data.EstadoRegistro != Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inactivo) {
                    Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.BandejaObjetivoEstrategicoSectorial.Actions.IngresoObjetivoEstrategicoSectorial, data);
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
                            base.Ajax.AjaxEliminarObjetivoEstrategicoSectorial.data = {
                                CodigoObjetivoEstrategicoSectorial: data.CodigoObjetivoEstrategicoSectorial,
                            };
                            base.Ajax.AjaxEliminarObjetivoEstrategicoSectorial.submit();
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
                            base.Ajax.AjaxReactivarObjetivoEstrategicoSectorial.data = {
                                CodigoObjetivoEstrategicoSectorial: data.CodigoObjetivoEstrategicoSectorial,
                            };
                            base.Ajax.AjaxReactivarObjetivoEstrategicoSectorial.submit();
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
        AjaxEliminarObjetivoEstrategicoSectorialSuccess: function (data) {
            'use strict'
            if (data.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito });//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaEliminacionExitosa });
                base.Event.BtnBuscarClick();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro })//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaErrorRegistro });
            }
        },
        AjaxReactivarObjetivoEstrategicoSectorialSuccess: function (data) {
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
        AjaxEliminarObjetivoEstrategicoSectorial: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.BandejaObjetivoEstrategicoSectorial.Actions.EliminarObjetivoEstrategicoSectorial,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarObjetivoEstrategicoSectorialSuccess
        }),
        AjaxReactivarObjetivoEstrategicoSectorial: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.BandejaObjetivoEstrategicoSectorial.Actions.ReactivarObjetivoEstrategicoSectorial,
            autoSubmit: false,
            onSuccess: base.Event.AjaxReactivarObjetivoEstrategicoSectorialSuccess
        })
    };

    base.Function = {
        CrearGridBandejaObjetivoEstrategicoSectorial: function () {
            var columns = new Array();
            columns.push({
                data: 'NombreObjetivoEstrategicoSectorial',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.BandejaObjetivoEstrategicoSectorial.Resource.GridNombreObjetivoEstrategicoSectorial,
                width: "30%"
            });
            columns.push({
                data: 'DescripcionObjetivoEstrategicoSectorial',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.BandejaObjetivoEstrategicoSectorial.Resource.GridDescripcionObjetivoEstrategicoSectorial,
                width: "30%"
            });
            columns.push({
                data: 'NombreCompletoResponsable',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.BandejaObjetivoEstrategicoSectorial.Resource.GridResponsable,
                width: "20%"
            });
            columns.push({
                data: 'EstadoRegistroDescripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.BandejaObjetivoEstrategicoSectorial.Resource.GridEstado,
                width: "10%"
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
                    url: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.BandejaObjetivoEstrategicoSectorial.Actions.BuscarObjetivoEstrategicoSectorial,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        }
    };
};