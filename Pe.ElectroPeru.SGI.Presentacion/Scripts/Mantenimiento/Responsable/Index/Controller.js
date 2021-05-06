/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 27052016
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Index');
Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Index.Controller = function () {
    var base = this;

    base.Ini = function () {
        base.Control.ResponsableModel = $.parseJSON(Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Models.Responsable);

        base.Control.BtnBuscar().off('click');
        base.Control.BtnBuscar().on('click', base.Event.BtnBuscarClick);

        base.Control.BtnLimpiar().off('click');
        base.Control.BtnLimpiar().on('click', base.Event.BtnLimpiarClick);

        base.Control.BtnAgregar().off('click');
        base.Control.BtnAgregar().on('click', base.Event.BtnAgregarClick);

        base.Control.DlgFormularioResponsablePrincipal = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.FormularioResponsablePrincipal.Controller({
            GrabarResponsableSuccess: base.Event.BtnBuscarClick
        });

        base.Function.CrearGrid();
        var filtro = {
            Modo: 'BANDEJA'
        };
        base.Control.GrdResultado.Load(filtro);
    };

    base.Control = {
        FrmUnidadResponsableRegistrar: function () { return $('#frmResponsableRegistrar') },
        BtnBuscar: function () { return $('#btnBuscar'); },
        BtnLimpiar: function () { return $('#btnLimpiar'); },
        BtnAgregar: function () { return $('#btnAgregar'); },
        DlgFormularioResponsablePrincipal: null,
        GrdResultado: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        ResponsableModel: null
    };

    base.Event = {
        ValidarCopiarAlfanumerico: function (e) {
            return Pe.GMD.UI.Web.Components.Util.ValidateCopyOnlyAlphanumeric(e);
        },

        BtnBuscarKeyPress: function (evento) {
            var key = Pe.GMD.UI.Web.Components.Util.GetKeyCode(evento);
            var esValido = !(evento && key == 13);
            if (esValido == false) {
                base.Event.BtnBuscarClick();
            }
            return esValido;
        },

        ValidarCopiarSoloNumeros: function (e) {
            return Pe.GMD.UI.Web.Components.Util.ValidateCopyOnlyNumeric(e);
        },

        ValidarCopiarSoloLetras: function (e) {
            return Pe.GMD.UI.Web.Components.Util.ValidarCopiarSoloTexto(e);
        },

        BtnBuscarClick: function () {
            'use strict';
            $("#divGrdResult").html("");
            base.Function.CrearGrid();
            var filtro = {
            };
            base.Control.GrdResultado.Load(filtro);
        },

        BtnAgregarClick: function () {
            'use strict'
            base.Control.DlgFormularioResponsablePrincipal.Show({
                data: null
            });
        },

        BtnGridEditClick: function (row, data) {
            'use strict'
            if (data.Permiso == 5 || data.Permiso == 3 || data.Permiso == 2) {
                if (data.EstadoRegistro != Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inactivo) {
                    base.Control.DlgFormularioResponsablePrincipal.Show({
                        data: { CodigoResponsable: data.CodigoResponsable }
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
        BtnGridDeleteClick: function (row, data) {
            'use strict'
            if (data.Permiso == 6 || data.Permiso == 3 || data.Permiso == 2) {
                if (data.EstadoRegistro != Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inactivo) {
                    base.Control.Mensaje.Delete({
                        onAccept: function () {
                            base.Ajax.AjaxEliminarResponsable.data = {
                                CodigoResponsable: data.CodigoResponsable,
                            };
                            base.Ajax.AjaxEliminarResponsable.submit();
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
        AjaxEliminarResponsableSuccess: function (data) {
            'use strict'
            if (data.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito });//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaEliminacionExitosa });
                base.Event.BtnBuscarClick();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro })//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaErrorRegistro });
            }
        },
    };

    base.Ajax = {
        AjaxEliminarResponsable: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Actions.EliminarResponsable,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarResponsableSuccess
        })
    };

    base.Function = {
        CrearGrid: function () {
            var columns = new Array();
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'Nombres',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Resources.GridNombres,
                width: "10%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'ApellidoPaterno',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Resources.GridApellidoPaterno,
                width: "10%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'ApellidoMaterno',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Resources.GridApellidoMaterno,
                width: "10%"
            });

            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.ResponsableModel.ListaTipoDocumento },
                data: 'NombreTipoDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Resources.GridTipoDocumento,
                width: "15%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NumeroDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Resources.GridNumeroDocumento,
                width: "15%"
            });

            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.ResponsableModel.ListaGenero },
                data: 'NombreGenero',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Resources.GridGenero,
                width: "15%"
            });

            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.ResponsableModel.ListaCargo },
                data: 'NombreCargo',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Resources.GridCargo,
                width: "15%"
            });

            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.ResponsableModel.ListaEstadoRegistro },
                data: 'EstadoRegistroDescripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Resources.GridEstadoRegistroDescripcion,
                width: "30%"
            });

            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteClick } }
                ]
            });

            base.Control.GrdResultado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResult',
                columns: columns,
                filterColumn: true,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '1000px', aTargets: [1] }],
                //scrollX: '',
                scrollY: true,
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Actions.BuscarResponsable,
                    source: 'Result'
                }
            });
        }
    };
};