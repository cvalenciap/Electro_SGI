ns('Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.BandejaAP_A.FormularioSeleccionarPersona');
Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.BandejaAP_A.FormularioSeleccionarPersona.Controller = function (opts) {
    var base = this;
    var isMultiSelect = false;
    var optGrabar = true;

    base.Ini = function () {
        base.Event.GrabarColaboradorPersonaProyectoSuccess = (opts.GrabarColaboradorPersonaProyectoSuccess != null && opts.GrabarColaboradorPersonaProyectoSuccess) ? opts.GrabarColaboradorPersonaProyectoSuccess : null;
        base.Function.CrearGridPersonas();
        base.Event.BtnBuscarColaboradorClick();
        base.Control.TxtNombreColaborador().keypress(base.Event.BtnBaseColaboradorBuscarKeyPress);
        base.Control.BtnBaseColaboradorBuscar().click(base.Event.BtnBuscarColaboradorClick);
        base.Control.BtnAceptar().click(base.Event.BtnAceptarClick);
        if (opts != null && opts.AceptarSuccess != null && opts.AceptarSuccess)
            base.Event.AceptarSuccess = opts.AceptarSuccess;
    };
    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        GrdResultadoProcesos: null,
        Contador: 1,
        DlgForm: null,
        BtnBaseColaboradorBuscar: function () { return $('#btnBuscarColaborador'); },
        SlcTipoDocumentoColaboradorRegistro: function () { return $('#slcTipoDocumentoColaboradorRegistro'); },
        TxtNombreColaborador: function () { return $('#txtNombreColaborador'); },
        SlcBaseColaboradorFiltro: function () { return $('#slcFiltroBuscarColaborador'); },
        BtnAceptar: function () { return $('#btnAceptarColaborador'); },
    };
    base.Event = {
        BtnGridCheckBoxRepresentanteClick: function (that, row) {
            if (isMultiSelect) {
                $.each(row, function (index, value) {
                    var indexItem = base.Control.SeleccionadoColaborador.map(function (e) { return e.CodigoColaboradorSupervisor; }).indexOf(value.CodigoColaboradorSupervisor);
                    if ($(that).is(":checked")) {
                        if (indexItem == -1) {
                            base.Control.SeleccionadoColaborador.push(value);
                        }
                    } else {
                        if (indexItem != -1) {
                            base.Control.SeleccionadoColaborador.splice(indexItem, 1);
                        }
                    }
                })
            } else {
                $.each(row, function (index, value) {
                    base.Control.SeleccionadoColaborador = [];
                    base.Control.SeleccionadoColaborador.push(value);
                });
            }

        },
        BtnBaseColaboradorBuscarKeyPress: function (evento) {
            var key = Pe.GMD.UI.Web.Components.Util.GetKeyCode(evento);
            var esValido = !(evento && key == 13);
            if (esValido == false) {
                base.Event.BtnBuscarColaboradorClick();
            }
            return esValido;
        },
        BtnBuscarColaboradorClick: function () {
            'use strict'
            var filtro;
            if (base.Control.SlcBaseColaboradorFiltro().val() == "1") {
                filtro = {
                    NombreCompletoSupervisor: "",
                    NumeroDocumentoSupervisor: base.Control.TxtNombreColaborador().val() != undefined ? base.Control.TxtNombreColaborador().val().trim() : '',

                    NombreCompletoEntregado: "",
                    NumeroDocumentoEntregado: base.Control.TxtNombreColaborador().val() != undefined ? base.Control.TxtNombreColaborador().val().trim() : '',
                    T
                    };
            } else {
                filtro = {
                    NombreCompletoSupervisor: base.Control.TxtNombreColaborador().val() != undefined ? base.Control.TxtNombreColaborador().val().trim() : '',
                    NumeroDocumentoSupervisor: "",

                    NombreCompletoEntregeado: base.Control.TxtNombreColaborador().val() != undefined ? base.Control.TxtNombreColaborador().val().trim() : '',
                    NumeroDocumentoEntregado: "",
                };
            }
            base.Control.GrdResultadoPersonas.Load(filtro);

        },
        BtnAceptarClick: function () {
            'use strict'
            if (base.Event.AceptarSuccess != null) {
                base.Event.AceptarSuccess(base.Function.ObtenerColaboradorSeleccionados());
            }
            base.Control.DlgForm.divDialog.close();
        },
    };
    base.Show = function (isMultiSelectParam, optsA, filtro, optGrabarParam) {
        if (isMultiSelectParam === true || isMultiSelectParam === false) {
            isMultiSelect = isMultiSelectParam;
        }
        if (optGrabarParam === true || optGrabarParam === false) {
            optGrabar = optGrabarParam;
        }

        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.EtiquetaVentanaBuscarColaborador,
            size: "size-wide",
            close: function () {
            }
        });
        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Actions.FormularioSeleccionarPersona,
            onSuccess: function () {
                base.Control.SeleccionadoColaborador = [];
                base.Ini();
            }
        });
    };
    base.Function = {
        CrearGridPersonas: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroDocumentoSupervisor',
                title: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridDocumento,
                width: '10%'
            });
            columns.push({
                data: 'NombreCompletoSupervisor',
                "class": "text-left",
                title: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.GridSupervisor,
                width: '35%',
                mRender: function (data, type, full) {
                    return '' + full.NombreCompletoSupervisor + ''
                }
            });
            columns.push({
                data: 'NombreEmpresaSupervisor',
                title: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridEmpresa,
                width: '15%'
            });

            columns.push({
                data: 'NombrePuestoTrabajoSupervisor',
                title: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridNombrePuestoTrabajo,
                width: '35%'
            });
      
            base.Control.GrdResultadoPersonas = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultColaborador',
                columns: columns,
                hasPaging: true,
                hasPagingServer: true,
                hasSelectionRows: true,
                hasTypeSelectionRows: (isMultiSelect ? "checkbox" : "radio"),
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                selectionRowsEvent: { on: 'click', callBack: base.Event.BtnGridCheckBoxRepresentanteClick },
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Actions.BuscarColaboradorSupervisor,
                    source: 'Result'
                }
            });
        },
        ObtenerColaboradorSeleccionados: function () {
            return base.Control.SeleccionadoColaborador;
        }
    };
};