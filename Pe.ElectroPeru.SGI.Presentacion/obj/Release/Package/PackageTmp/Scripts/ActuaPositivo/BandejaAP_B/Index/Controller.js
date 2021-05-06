/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 30102017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.BandejaAP_B.Index');
Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.BandejaAP_B.Index.Controller = function () {
    var base = this;
    base.Ini = function () {       
        'use strict'
        Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
        base.Event.BtnBuscarAvanzadoClick();

        base.Control.BtnBuscar().off('click');
        base.Control.BtnBuscar().on('click', base.Event.BtnBuscarAvanzadoClick);
        base.Control.BtnLimpiar().off('click');
        base.Control.BtnLimpiar().on('click', base.Event.BtnLimpiarClick);

        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaActuaPositivoDesde(),
            inputTo: base.Control.DtpFechaActuaPositivoHasta(),
            minDateFrom: new Date(1900, 1, 1)
        });

        //base.Function.CrearGrid();
        //base.Event.BtnBuscarClick();

        base.Control.BtnBuscarColaboradorResponsable().off('click');
        base.Control.BtnBuscarColaboradorResponsable().on('click', base.Event.BtnBuscarColaboradorResponsable);

        base.Control.BtnBuscarColaboradorEntregado().off('click');
        base.Control.BtnBuscarColaboradorEntregado().on('click', base.Event.BtnBuscarColaboradorEntregado);

       base.Control.DlgFormularioColaborador = new Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.BandejaAP_A.FormularioSeleccionarSupervisor.Controller({
            AceptarSuccess:
                function (objColaborador) {
                    console.log(objColaborador);
                    if (objColaborador.length > 0) {
                        base.Control.HdnCodigoColaboradorResponsable().val(objColaborador[0].CodigoColaboradorSupervisor);
                        base.Control.TxtNombreColaboradorResponsable().val(objColaborador[0].NombreCompletoSupervisor);
                    }
                    else {
                        base.Control.HdnCodigoColaboradorResponsable().val(null);
                        base.Control.TxtNombreColaboradorResponsable().val('');
                    }
                }
        });

        base.Control.DlgFormularioColaboradorEntregado = new Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.BandejaAP_A.FormularioSeleccionarEntregado.Controller({
            AceptarSuccess:
                function (objColaborador) {
                    
                    if (objColaborador.length > 0) {
                        base.Control.HdnCodigoColaboradorEntregado().val(objColaborador[0].CodigoColaboradorEntregado);
                        base.Control.TxtNombreColaboradorEntregado().val(objColaborador[0].NombreCompletoEntregado);
                    }
                    else {
                        base.Control.HdnCodigoColaboradorEntregado().val(null);
                        base.Control.TxtNombreColaboradorEntregado().val('');
                    }
                }
        });

        base.Control.btnDescargarExcel().on('click', base.Event.btnDescargarExcelClick);
    };

    base.Control = {
        BandejaAP_BModel: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),

        SlcProyecto: function () { return $('#slcProyecto'); },
        DtpFechaActuaPositivoDesde: function () { return $('#dtpFechaActuaPositivoDesde'); },
        DtpFechaActuaPositivoHasta: function () { return $('#dtpFechaActuaPositivoHasta'); },
        SlcEmpresa: function () { return $('#slcEmpresa'); },
        SlcDepartamento: function () { return $('#slcDepartamento'); },
        SlcArea: function () { return $('#slcArea'); },
        SlcTareasIndicador: function () { return $('#slcTareasIndicador'); },
        DlgFormularioColaborador: null,
        DlgFormularioColaboradorEntregado: null,
        BtnBuscarColaboradorResponsable: function () { return $('#btnBuscarColaboradorResponsable'); },
        HdnCodigoColaboradorResponsable: function () { return $('#hdnCodigoColaboradorResponsable'); },
        TxtNombreColaboradorResponsable: function () { return $('#txtNombreColaboradorResponsable'); },
        BtnBuscarColaboradorEntregado: function () { return $('#btnBuscarColaboradorEntregado'); },
        HdnCodigoColaboradorEntregado: function () { return $('#hdnCodigoColaboradorEntregado'); },
        TxtNombreColaboradorEntregado: function () { return $('#txtNombreColaboradorEntregado'); },
        SlcEstadoAccion: function () { return $('#slcEstadoAccion'); },
        BtnBuscar: function () { return $('#btnBuscar'); },
        BtnLimpiar: function () { return $('#btnLimpiar'); },
        BtnRegresarRegistroRecord: function () { return $('#btnRegresarRegistroRecord'); },
        GrdResultado: null,
        btnDescargarExcel: function () { return $('#btnDescargarExcel'); },
    };

    base.Event = {

        BtnBuscarClick: function () {
            'use strict'
            var filtro = {
                CodigoTipoActuaPositivo: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.CodigoTipoActuaPositivoLadoB,
                CodigoProyecto: base.Control.SlcProyecto().val(),
                FechaActuaPositivoDesdeString: base.Control.DtpFechaActuaPositivoDesde().val(),
                FechaActuaPositivoHastaString: base.Control.DtpFechaActuaPositivoHasta().val(),
                CodigoEmpresa: base.Control.SlcEmpresa().val(),
                CodigoDepartamento: base.Control.SlcDepartamento().val(),
                CodigoArea: base.Control.SlcArea().val(),
                CodigoColaboradorSupervisor: base.Control.HdnCodigoColaboradorResponsable().val(),
                CodigoColaboradorEntregado: base.Control.HdnCodigoColaboradorEntregado().val(),
                CodigoModuloHerramientaTarea: base.Control.SlcTareasIndicador().val(),
            };
            base.Control.GrdResultado.Load(filtro);
        },

        BtnGridRevisarActuaPositivoClick: function (row, data) {
            var filtro = {
                CodigoActuaPositivo: data.CodigoActuaPositivo
            };
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Actions.IngresoAP_B, filtro);
        },
        BtnBuscarAvanzadoClick: function () {
            'use strict'
            
            var indicadorBusquedaAvanzada = true;

            if (base.Control.HdnCodigoColaboradorResponsable().val() != null && base.Control.HdnCodigoColaboradorResponsable().val() != '') {
                indicadorBusquedaAvanzada = false;
            }
            var filtro = {
                CodigoTipoActuaPositivo: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.CodigoTipoActuaPositivoLadoB,
                CodigoProyecto: base.Control.SlcProyecto().val(),
                FechaActuaPositivoDesdeString: base.Control.DtpFechaActuaPositivoDesde().val(),
                FechaActuaPositivoHastaString: base.Control.DtpFechaActuaPositivoHasta().val(),
                CodigoEmpresa: base.Control.SlcEmpresa().val(),
                CodigoDepartamento: base.Control.SlcDepartamento().val(),
                CodigoArea: base.Control.SlcArea().val(),
                CodigoColaboradorSupervisor: base.Control.HdnCodigoColaboradorResponsable().val(),
                CodigoColaboradorEntregado: base.Control.HdnCodigoColaboradorEntregado().val(),

                CodigoModuloHerramientaTarea: base.Control.SlcTareasIndicador().val(),
                IndicadorBusquedaAvanzada: indicadorBusquedaAvanzada
            };
            $('#divGrdResult').empty();
            base.Function.CrearGrid();
            base.Control.GrdResultado.Load(filtro);
        },

        BtnBuscarColaboradorResponsable: function () {
            base.Control.DlgFormularioColaborador.Show(false, [], null);
        },

        BtnBuscarColaboradorEntregado: function () {
            base.Control.DlgFormularioColaboradorEntregado.Show(false, [], null);
        },

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
        BtnLimpiarClick: function () {
            base.Control.SlcProyecto().val('');
            base.Control.DtpFechaActuaPositivoDesde().val('');
            base.Control.DtpFechaActuaPositivoHasta().val('');
            base.Control.SlcEmpresa().val('');
            base.Control.SlcDepartamento().val('');
            base.Control.SlcArea().val('');

            base.Control.HdnCodigoColaboradorResponsable().val('');
            base.Control.TxtNombreColaboradorResponsable().val('');
            base.Control.HdnCodigoColaboradorEntregado().val('');
            base.Control.TxtNombreColaboradorEntregado().val('');

            base.Control.SlcTareasIndicador().val('')

        },
        BtnGridDeleteClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Confirmation({
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.CentroCosto.Resources.EtiquetaTituloEliminar,
                message: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.CentroCosto.Resources.EtiquetaMensajeEliminarRegistro,
                onAccept: function () {
                    base.Ajax.AjaxEliminar.data = {
                        listaCodigoCentroCosto: [data.CodigoCentroCosto],
                    };
                    base.Ajax.AjaxEliminar.submit();
                }
            });
        },
        AjaxBuscarDepartamentoSuccess: function (resultado) {
            $.each(resultado.Result, function (index, value) {
                base.Control.SlcDepartamento().attr('validable', 'required Validar');

                var valorCodigo = value.CodigoDepartamento;
                base.Control.SlcDepartamento().append(new Option(value.NombreDepartamento, valorCodigo));
            });
        },

        AjaxBuscarAreaSuccess: function (resultado) {
            $.each(resultado.Result, function (index, value) {

                var valorCodigo = value.CodigoArea;
                base.Control.SlcArea().append(new Option(value.NombreArea, valorCodigo));
            });
        },
        BtnGridRevisarValidate: function (data, type, full) {
            if (base.Control.BandejaAP_BModel.RecordAccion.Lectura || base.Control.BandejaAP_BModel.RecordAccion.Escritura || base.Control.BandejaAP_BModel.RecordAccion.ControlTotal) {
                return true;
            }
            return false;
        },
        btnDescargarExcelClick: function () {
            if (base.Control.GrdResultado.core.rows().data().length >= 1) {
                var filtro = {
                    CodigoTipoActuaPositivo: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.CodigoTipoActuaPositivoLadoB,
                    CodigoProyecto: base.Control.SlcProyecto().val(),
                    FechaActuaPositivoDesdeString: base.Control.DtpFechaActuaPositivoDesde().val(),
                    FechaActuaPositivoHastaString: base.Control.DtpFechaActuaPositivoHasta().val(),
                    CodigoEmpresa: base.Control.SlcEmpresa().val(),
                    CodigoDepartamento: base.Control.SlcDepartamento().val(),
                    CodigoArea: base.Control.SlcArea().val(),
                    CodigoColaboradorSupervisor: base.Control.HdnCodigoColaboradorResponsable().val(),
                    CodigoColaboradorEntregado: base.Control.HdnCodigoColaboradorEntregado().val(),

                    CodigoModuloHerramientaTarea: base.Control.SlcTareasIndicador().val(),
                }
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Actions.DescargarReporteBandejaAP_B, filtro);
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaExportarTablaSinRegistro });
            }
        },
    };
    base.Ajax = {
        AjaxBuscarDepartamento: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.BuscarDepartamento,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarDepartamentoSuccess
        }),

        AjaxBuscarArea: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.BuscarArea,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarAreaSuccess
        }),
    };
    base.Function = {
        CrearGrid: function () {
            var columns = new Array();
            columns.push({
                data: 'NombreProyectoUsuario',
                title: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.GridProyecto,
                width: "5%"
            });
            columns.push({
                data: 'NombreEmpresa',
                title: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.GridEmpresa,
                width: "5%"
            });
            columns.push({
                data: 'FechaActuaPositivoString',
                title: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.GridFecha,
                width: "5%"
            });
            columns.push({
                data: 'NumeroTarjeta',
                title: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.GridNroTarjeta,
                width: "10%"
            });
            columns.push({
                data: 'NombreCompletoColaboradorEntregado',
                title: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.GridEntregado,
                width: "15%"
            });
            columns.push({
                data: 'NombreDepartamento',
                title: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.GridDepartamento,
                width: "5%"
            });
            columns.push({
                data: 'NombreArea',
                title: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.GridArea,
                width: "5%"
            });
            columns.push({
                data: 'NombreCompletoColaboradorSupervisor',
                title: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.GridSupervisor,
                width: "15%"
            });
            columns.push({
                data: 'DescripcionTarea',
                title: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.GridTareas,
                width: "15%"
            });
            columns.push({
                data: 'OtrosDescripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Resource.GridOtrosDescripcion,
                width: "15%"
            });

            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "5%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Revisar, event: { on: 'click', callBack: base.Event.BtnGridRevisarActuaPositivoClick } },

                ]
            });
            base.Control.GrdResultado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResult',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.ActuaPositivo.Index.Actions.BuscarActuaPositivoBandeja,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        }
    }
};
