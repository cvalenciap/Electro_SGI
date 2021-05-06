/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 27052016
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Index');
Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Index.Controller = function () {
    var base = this;

    base.Ini = function () {        
        base.Control.ColaboradorModel = $.parseJSON(Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Models.Colaborador);

        base.Control.BtnBuscar().off('click');
        base.Control.BtnBuscar().on('click', base.Event.BtnBuscarClick);

        base.Control.BtnLimpiar().off('click');
        base.Control.BtnLimpiar().on('click', base.Event.BtnLimpiarClick);

        base.Control.BtnAgregar().off('click');
        base.Control.BtnAgregar().on('click', base.Event.BtnAgregarClick);

        base.Control.DlgFormularioColaboradorPrincipal = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioColaboradorPrincipal.Controller({
            GrabarColaboradorSuccess: base.Event.BtnBuscarClick
        });

        base.Function.CrearGrid();
        var filtro = {
            Modo: 'BANDEJA'
        };
        base.Control.GrdResultado.Load(filtro);
    };

    /// <summary>
    /// create variable as object name
    /// </summary>

    base.Control = {
        FrmUnidadColaboradorRegistrar: function () { return $('#frmColaboradorRegistrar') },
        BtnBuscar: function () { return $('#btnBuscar'); },
        BtnLimpiar: function () { return $('#btnLimpiar'); },
        BtnAgregar: function () { return $('#btnAgregar'); },
        DlgFormularioColaboradorPrincipal: null,
        GrdResultado: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        ColaboradorModel: null
    };

    /// <summary>
    /// UnidadOrganizativa Eventos
    /// </summary>

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
            base.Control.DlgFormularioColaboradorPrincipal.Show({
                data: null
            });
        },

        BtnGridEditClick: function (row, data) {
            'use strict'
            if (data.EstadoRegistro != Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inactivo) {
                base.Control.DlgFormularioColaboradorPrincipal.Show({
                    data: { CodigoColaborador: data.CodigoColaborador }
                });
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.RegistroInactivo });
            }
        },

        BtnGridDeleteClick: function (row, data) {
            'use strict'
            if (data.EstadoRegistro != Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inactivo) {
                base.Control.Mensaje.Delete({
                    onAccept: function () {
                        base.Ajax.AjaxEliminarColaborador.data = {
                            CodigoColaborador: data.CodigoColaborador,
                        };
                        base.Ajax.AjaxEliminarColaborador.submit();
                    }
                });
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.RegistroInactivo });
            }

        },
        AjaxEliminarColaboradorSuccess: function (data) {
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

    /// <summary>
    //Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Recurso.Actions.EliminarUnidadOrganizativa
    //aqui se define la direcion de metodo del controlador
    /// </summary>

    base.Ajax = {
        AjaxEliminarColaborador: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Actions.EliminarColaborador,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarColaboradorSuccess
        })
    };

    /// <summary>
    /// UnidadOrganizativa Crear Grid
    /// </summary>

    base.Function = {
        CrearGrid: function () {
            var columns = new Array();
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'Nombres',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridNombres,
                width: "10%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'ApellidoPaterno',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridApellidoPaterno,
                width: "30%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'ApellidoMaterno',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridApellidoMaterno,
                width: "10%"
            });
           
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.ColaboradorModel.ListaGenero },
                data: 'DescripcionGenero',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridGenero,
                //width: "25%"
            });

            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.ColaboradorModel.ListaPais },
                data: 'NombrePais',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridPais,
                width: "25%"
            });

            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.ColaboradorModel.ListaEmpresa },
                data: 'NombreEmpresa',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridEmpresa,
                width: "25%"
            });

            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.ColaboradorModel.ListaProyecto },
                data: 'NombreProyecto',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridProyecto,
                width: "25%"
            });

            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.ColaboradorModel.ListaDepartamento },
                data: 'NombreDepartamento',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridDepartamento,
                //width: "15%"
            });

            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.ColaboradorModel.ListaArea },
                data: 'NombreArea',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridArea,
                width: "15%"
            });

            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.ColaboradorModel.ListaPuestoTrabajo },
                data: 'NombrePuestoTrabajo',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridPuestoTrabajo,
                width: "15%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'CorreoElectronico',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridCorreoElectronico,
                width: "15%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'CodigoUsuarioRed',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridUsuarioRed,
                width: "15%"
            });

            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.ColaboradorModel.ListaTipoDocumento },
                data: 'DescripcionTipoDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridTipoDocumento,
                width: "15%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NumeroDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridNumeroDocumento,
                width: "20%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NombreTipoPlanilla',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridTipoPlanilla,
                width: "20%"
            });

            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.ColaboradorModel.ListaEstadoColaborador },
                data: 'NombreEstadoColaborador',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridEstadoColaborador,
                //width: "20%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NombreIndicadorActivo',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridIndicadorActivo,
                width: "20%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NombreIndicadorPermanente',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridIndicadorPermanente,
                width: "20%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NombreIndicadorPermiteCierre',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridIndicadorPermiteCierre,
                width: "20%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'FechaNacimientoString',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridFechaNacimiento,
                width: "20%"
            });

            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.ColaboradorModel.ListaEstadoCivil },
                data: 'NombreEstadoCivil',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridEstadoCivil,
                width: "20%"
            });

            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.ColaboradorModel.ListaGradoInstruccion },
                data: 'NombreGradoInstruccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridGradoInstruccion,
                //width: "20%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NombreDepartamentoTerritorio',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridDepartamento,
                // width: "20%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NombreProvincia',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridProvincia,
                width: "20%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'SistemaTrabajo',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridSistemaTrabajo,
                width: "20%"
            });

            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.ColaboradorModel.ListaTurnoMixto },
                data: 'NombreTurnoMixto',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridTurnoMixto,
                width: "5%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'ExperienciaNegocioAnios',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridExperienciaNegocioAnios,
                width: "5%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'ExperienciaNegocioMeses',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridExperienciaNegocioMeses,
                width: "5%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'TiempoProyectoAnios',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridTiempoProyectoAnios,
                width: "5%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'TiempoProyectoMeses',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridTiempoProyectoMeses,
                width: "5%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'TiempoContratistaAnios',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridTiempoContratistaAnios,
                width: "5%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'TiempoContratistaMeses',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridTiempoContratistaMeses,
                width: "5%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'ExperienciaPuestoAnios',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridExperienciaPuestoAnios,
                width: "5%"
            });

            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'ExperienciaPuestoMeses',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridExperienciaPuestoMeses,
                width: "5%"
            });

            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.ColaboradorModel.ListaEstadoRegistro },
                data: 'EstadoRegistroDescripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Resources.GridEstadoRegistroDescripcion,
                width: "15%"
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
                    url: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Actions.BuscarColaborador,
                    source: 'Result'
                }
            });
        }
    };
};