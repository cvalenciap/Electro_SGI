ns('Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioAgregarPersonasModal');
Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioAgregarPersonasModal.Controller = function (opts) {
    var base = this;
    var isMultiSelect = false;
    var optGrabar = true;

    base.Ini = function () {
        base.Event.GrabarColaboradorPersonaProyectoSuccess = (opts.GrabarColaboradorPersonaProyectoSuccess != null && opts.GrabarColaboradorPersonaProyectoSuccess) ? opts.GrabarColaboradorPersonaProyectoSuccess : null;
        base.Function.CrearGridPersonas();
        base.Event.BtnBuscarColaboradorClick();
        base.Control.TxtNombreColaborador().keypress(base.Event.BtnBaseColaboradorBuscarKeyPress);
        base.Control.BtnBaseColaboradorBuscar().click(base.Event.BtnBuscarColaboradorClick);
        base.Control.BtnGrabarPersona().click(base.Event.BtnGrabarPersonaClick);       
    };
    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        GrdResultadoProcesos: null,         
        CodigoProyecto: null,
        CodigoEquipo: null,
        CodigoProceso: null,
        CodigoSubProceso: null,
        Contador: 1,
        DlgForm: null,
        BtnBaseColaboradorBuscar: function () { return $('#btnBuscarColaborador'); },
        SlcTipoDocumentoColaboradorRegistro: function () { return $('#slcTipoDocumentoColaboradorRegistro'); },
        TxtNombreColaborador: function () { return $('#txtNombreColaborador'); },
        SlcBaseColaboradorFiltro: function () { return $('#slcFiltroBuscarColaborador'); },
        BtnGrabarPersona: function () { return $('#btnGrabarPersona'); },
        CodigoCondicion:null,
    };
    base.Event = {
        BtnGridCheckBoxRepresentanteClick: function (that, row) {
            if (isMultiSelect) {
                $.each(row, function (index, value) {
                    var indexItem = base.Control.SeleccionadoColaborador.map(function (e) { return e.CodigoColaborador; }).indexOf(value.CodigoColaborador);
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
                    NombreCompletoColaborador: "",
                    CodigoProyecto: base.Control.CodigoProyecto,
                    CodigoEquipo: base.Control.CodigoEquipo,
                    CodigoProceso: base.Control.CodigoProceso,
                    CodigoSubProceso: base.Control.CodigoSubProceso,
                    CodigoCondicion:base.Control.CodigoCondicion,
                    NumeroDocumento: base.Control.TxtNombreColaborador().val() != undefined ? base.Control.TxtNombreColaborador().val().trim() : '',
 
                };
            } else if (base.Control.SlcBaseColaboradorFiltro().val() == "2") {
                filtro = {
                    NombreCompletoColaborador: base.Control.TxtNombreColaborador().val() != undefined ? base.Control.TxtNombreColaborador().val().trim() : '',
                    CodigoProyecto: base.Control.CodigoProyecto,
                    CodigoEquipo: base.Control.CodigoEquipo,
                    CodigoProceso: base.Control.CodigoProceso,
                    CodigoSubProceso: base.Control.CodigoSubProceso,
                    CodigoCondicion: base.Control.CodigoCondicion,
                    NumeroDocumento: "",
                };
            } else if (base.Control.SlcBaseColaboradorFiltro().val() == "3") {
                filtro = {
                    NombreCompletoColaborador: "",
                    CodigoProyecto: base.Control.CodigoProyecto,
                    CodigoEquipo: base.Control.CodigoEquipo,
                    CodigoProceso: base.Control.CodigoProceso,
                    CodigoSubProceso: base.Control.CodigoSubProceso,
                    CodigoCondicion: base.Control.CodigoCondicion,
                    NumeroDocumento: "",
                    NombrePuestoTrabajo: base.Control.TxtNombreColaborador().val() != undefined ? base.Control.TxtNombreColaborador().val().trim() : '',
                };
            }

            base.Control.GrdResultadoPersonas.Load(filtro);
         
        },
        BtnGrabarPersonaClick: function(){
            'use strict'            
            var totalColaboradorSelected = base.Control.SeleccionadoColaborador.length;
            if (totalColaboradorSelected > 0 && totalColaboradorSelected != undefined) {
                if (optGrabar) {
                    base.Control.Mensaje.Confirmation({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                        indicadorModal: false,
                        onAccept: function () {
                            if (base.Event.GrabarColaboradorPersonaProyectoSuccess != null) {
                                base.Event.GrabarColaboradorPersonaProyectoSuccess(base.Function.ObtenerColaboradorSeleccionados());
                            }
                            base.Control.DlgForm.divDialog.close();
                        }
                    });
                }
                else
                {
                    if (base.Event.GrabarColaboradorPersonaProyectoSuccess != null) {
                        base.Event.GrabarColaboradorPersonaProyectoSuccess(base.Function.ObtenerColaboradorSeleccionados());
                    }
                    base.Control.DlgForm.divDialog.close();
                }
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.EtiquetaSeleccioneColaborador });
            }
        },        
    };
    base.Show = function (isMultiSelectParam, optsA, filtro, optGrabarParam) {
        if (isMultiSelectParam === true || isMultiSelectParam === false) {
            isMultiSelect = isMultiSelectParam;
        }
        if (optGrabarParam === true || optGrabarParam === false) {
            optGrabar = optGrabarParam;
        }

        base.Control.CodigoProyecto = filtro.CodigoProyecto;
        base.Control.CodigoEquipo = filtro.CodigoEquipo;
        base.Control.CodigoProceso = filtro.CodigoProceso,
        base.Control.CodigoSubProceso = filtro.CodigoSubProceso;
        base.Control.CodigoCondicion = filtro.CodigoCondicion;      
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Resource.EtiquetaVentanaBuscarColaborador,
            size: "size-wide",
            close: function () {
            }
        });
        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Actions.FormularioAgregarPersonasModal,
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
                data: 'NumeroDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridDocumento,
                width: '10%'
            });
            columns.push({
                data: 'NombreCompletoColaborador',
                "class": "text-left",
                title: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridColaborador,
                width: '35%',
                mRender: function (data, type, full) {
                    return '' + full.ApellidoPaterno + ' ' + full.ApellidoMaterno + ' ' + full.Nombres
                }
            });
            columns.push({
                data: 'NombreEmpresa',
                title: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridEmpresa,
                width: '15%'
            });
            //columns.push({
            //    data: 'CodigoTipoPlanilla',
            //    title: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridCodigoTipoPlanilla,
            //    width: '25%'
            //});

            columns.push({
                data: 'NombrePuestoTrabajo',
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
                    url: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Actions.BuscarColaborador,
                    source: 'Result'
                }
            });
        },
        ObtenerColaboradorSeleccionados: function () {
            return base.Control.SeleccionadoColaborador;
        }
    };
};