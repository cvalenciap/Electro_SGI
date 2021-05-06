/// <summary>
/// Script de controlador del layaut del site.
/// </summary>
/// <remarks>
/// Creacion:	GMD 23092016
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador');
Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller = function (opts) {
    var base = this;
    var isMultiSelect = false;
    var filtroObj = null;

    base.Ini = function () {
        'use strict'
        base.Control.FormularioColaboradorModel = Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.Models.FormularioColaborador;

        if (opts != null && opts.AceptarSuccess != null && opts.AceptarSuccess)
            base.Event.AceptarSuccess = opts.AceptarSuccess;

        base.Control.TxtNombreColaborador().keypress(base.Event.BtnBaseColaboradorBuscarKeyPress);
        base.Control.BtnBaseColaboradorBuscar().click(base.Event.BtnBuscarColaboradorClick);
        base.Control.BtnCancelar().click(base.Event.BtnCancelarClick);
        base.Control.BtnAceptar().click(base.Event.BtnAceptarClick);

        base.Control.BtnGrabarRegistroColaborador().off('click');
        base.Control.BtnGrabarRegistroColaborador().on('click', base.Event.BtnGrabarRegistroColaboradorClick);

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmRegistrarColaborador(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraColaborador()
        });
        $("#divGrdResultColaborador").html("");
        base.Function.CrearGridColaborador();
        base.Event.BtnBuscarColaboradorClick();
    };

    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        DlgForm: null,
        GrdBaseColaboradorResultado: null,
        BtnBaseColaboradorBuscar: function () { return $('#btnBuscarPersona'); },
        BtnCancelar: function () { return $('#btnCancelarColaborador'); },
        BtnAceptar: function () { return $('#btnAceptarColaborador'); },
        TxtNombreColaborador: function () { return $('#txtNombreColaborador'); },
        SlcBaseColaboradorFiltro: function () { return $('#slcFiltroBuscarColaborador'); },
        SlcEmpresaColaboradorFiltro: function () { return $('#slcEmpresaColaboradorFiltro'); },

        SeleccionadoColaborador: [],
        FormularioColaboradorModel: null,

        FrmRegistrarColaborador: function () { return $('#frmRegistrarColaborador'); },
        Validador: null,

        SlcEmpresaColaboradorRegistro: function () { return $('#slcEmpresaColaboradorRegistro'); },
        SlcTipoDocumentoColaboradorRegistro: function () { return $('#slcTipoDocumentoColaboradorRegistro'); },
        TxtNumeroDocumentoColaboradorRegistrar: function () { return $('#txtNumeroDocumentoColaboradorRegistrar'); },
        TxtApellidoPaternoColaboradorRegistrar: function () { return $('#txtApellidoPaternoColaboradorRegistrar'); },
        TxtApellidoMaternoColaboradorRegistrar: function () { return $('#txtApellidoMaternoColaboradorRegistrar'); },
        TxtNombresColaboradorRegistrar: function () { return $('#txtNombresColaboradorRegistrar'); },
        SlcPuestoTrabajoColaboradorRegistro: function () { return $('#slcPuestoTrabajoColaboradorRegistro'); },
        SlcTipoPlanillaColaboradorRegistro: function () { return $('#slcTipoPlanillaColaboradorRegistro'); },

        BtnCancelarRegistroColaborador: function () { return $('#btnCancelarRegistroColaborador'); },
        BtnGrabarRegistroColaborador: function () { return $('#btnGrabarRegistroColaborador'); },
    };

    base.Event = {
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
            var textoColaborador = "";
            if (base.Control.TxtNombreColaborador().val() != null || base.Control.TxtNombreColaborador().val() != undefined) {
                textoColaborador = base.Control.TxtNombreColaborador().val().trim();
                if (textoColaborador != '') {
                    $('#asegundoBuscarColaborador').attr('role', 'tab');
                    $('#asegundoBuscarColaborador').attr('data-toggle', 'tab');

                }
            }

            var filtro;
            var codigoEmpresa = null;
            var codigoProyecto = null;
            if (base.Control.FormularioColaboradorModel.Colaborador.CodigoProyecto != null && base.Control.FormularioColaboradorModel.Colaborador.CodigoProyecto != '') {
                codigoProyecto = base.Control.FormularioColaboradorModel.Colaborador.CodigoProyecto;
            }


            if (base.Control.FormularioColaboradorModel.Colaborador.CodigoEmpresa != null && base.Control.FormularioColaboradorModel.Colaborador.CodigoEmpresa != '') {
                codigoEmpresa = base.Control.FormularioColaboradorModel.Colaborador.CodigoEmpresa;
            }
            else {
                codigoEmpresa = base.Control.SlcEmpresaColaboradorFiltro().val();
            }

            if (base.Control.SlcBaseColaboradorFiltro().val() == "1") {
                filtro = {
                    NombreCompletoColaborador: "",
                    NumeroDocumento: textoColaborador,
                    CodigoEmpresa: codigoEmpresa,
                    CodigoProyecto: codigoProyecto
                };
            } else {
                filtro = {
                    NombreCompletoColaborador: textoColaborador,
                    NumeroDocumento: "",
                    CodigoEmpresa: codigoEmpresa,
                    CodigoProyecto: codigoProyecto
                };
            }
           
            if (filtroObj != null)
            {
                filtro.Modo = filtroObj.Modo;
            }
            
            base.Control.GrdBaseColaboradorResultado.Load(filtro);
        },

        BtnCancelarClick: function () {
            'use strict'
            base.Control.DlgForm.divDialog.close();
        },

        BtnAceptarClick: function () {
            'use strict'
            if (base.Event.AceptarSuccess != null) {
                base.Event.AceptarSuccess(base.Function.ObtenerColaboradorSeleccionados());
            }
            base.Control.DlgForm.divDialog.close();
        },

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

        SelectionRowsPostulantesCallback: function () {
            base.Control.GrdBaseColaboradorResultado.SetSelectedData("NumeroDocumento", base.Control.TxtNombreColaborador().val());
            base.Control.SeleccionadoColaborador = [];
            base.Control.SeleccionadoColaborador = base.Control.GrdBaseColaboradorResultado.GetSelectedData();
        },

        BtnGrabarRegistroColaboradorClick: function () {
            if (base.Control.Validador.isValid()) {
                var codigoEmpresa = null;

                if (base.Control.FormularioColaboradorModel.Colaborador.CodigoEmpresa != null && base.Control.FormularioColaboradorModel.Colaborador.CodigoEmpresa != '') {
                    codigoEmpresa = base.Control.FormularioColaboradorModel.Colaborador.CodigoEmpresa;
                }
                else {
                    codigoEmpresa = base.Control.SlcEmpresaColaboradorRegistro().val();
                }

                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaTituloConfirmar,
                    indicadorModal: false,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarColaborador.data = {
                            CodigoColaborador: base.Control.FormularioColaboradorModel.Colaborador.CodigoColaborador,
                            CodigoEmpresa: codigoEmpresa,
                            CodigoTipoDocumento: base.Control.SlcTipoDocumentoColaboradorRegistro().val(),
                            NumeroDocumento: base.Control.TxtNumeroDocumentoColaboradorRegistrar().val().trim(),
                            ApellidoPaterno: base.Control.TxtApellidoPaternoColaboradorRegistrar().val().trim(),
                            ApellidoMaterno: base.Control.TxtApellidoMaternoColaboradorRegistrar().val().trim(),
                            Nombres: base.Control.TxtNombresColaboradorRegistrar().val().trim(),
                            CodigoPuestoTrabajo: base.Control.SlcPuestoTrabajoColaboradorRegistro().val(),
                            CodigoTipoPlanilla: base.Control.SlcTipoPlanillaColaboradorRegistro().val(),
                            IndicadorPermiteCierre: false
                        };

                        base.Ajax.AjaxGrabarColaborador.submit();
                    }
                });
            }
            else {
                $("#frmRegistrarColaboradorSummaryErrorMessage").empty();
                $("#frmRegistrarColaboradorSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        }
    };

    base.AjaxSuccess = {
        AjaxGrabarColaboradorSuccess: function (resultado) {
            if (resultado.Result >= 1) {
                base.Control.Mensaje.InformationFormularioDetalle({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });

                if (base.Control.FormularioColaboradorModel.Colaborador.CodigoEmpresa == null || base.Control.FormularioColaboradorModel.Colaborador.CodigoEmpresa == '') {
                    base.Control.SlcEmpresaColaboradorFiltro().val(base.Control.SlcEmpresaColaboradorRegistro().val());
                }

                base.Control.SlcBaseColaboradorFiltro().val('1');
                base.Control.TxtNombreColaborador().val(base.Control.TxtNumeroDocumentoColaboradorRegistrar().val().trim());

                base.Control.SlcEmpresaColaboradorRegistro().val('');
                base.Control.SlcTipoDocumentoColaboradorRegistro().val('');
                base.Control.TxtNumeroDocumentoColaboradorRegistrar().val('');
                base.Control.TxtApellidoPaternoColaboradorRegistrar().val('');
                base.Control.TxtApellidoMaternoColaboradorRegistrar().val('');
                base.Control.TxtNombresColaboradorRegistrar().val('');
                base.Control.SlcPuestoTrabajoColaboradorRegistro().val('');
                base.Control.SlcTipoPlanillaColaboradorRegistro().val('');

                $("#segundoBuscarColaborador").removeClass("active");
                $("#listaSegundoBuscarColaborador").removeAttr("class");
                $("#primerBuscarColaborador").attr('class', "tab-pane active");
                $("#listaPrimeroBuscarColaborador").attr('class', "active");

                base.Event.BtnBuscarColaboradorClick();
            }
            else if (resultado.Result.toString() == "-2") {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeValidacionColaborador.Mensaje1
                });
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
    };

    base.Ajax = {
        AjaxGrabarColaborador: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.RegistrarColaborador,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxGrabarColaboradorSuccess
        }),
    };

    base.Function = {
        ValidacionExtraColaborador: function () {
            var validaciones = new Array();

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.SlcTipoDocumentoColaboradorRegistro().val() == "1" && $.trim(base.Control.TxtNumeroDocumentoColaboradorRegistrar().val()).length < 8) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtNumeroDocumentoColaboradorRegistrar().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtNumeroDocumentoColaboradorRegistrar().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });
            return validaciones;
        },

        CrearGridColaborador: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridDocumento,
                width: '10%'
            });

            columns.push({
                data: 'NombreCompletoColaborador',
                title: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridColaborador,
                width: '35%',
                'class': 'left'
            });

            columns.push({
                data: 'NombreEmpresa',
                title: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridEmpresa,
                width: '25%'
            });

            columns.push({
                data: 'NombreProyecto',
                title: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridProyecto,
                width: '25%'
            });

            columns.push({
                data: 'CodigoTipoPlanilla',
                title: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridCodigoTipoPlanilla,
                width: '25%'
            });

            base.Control.GrdBaseColaboradorResultado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultColaborador',
                columns: columns,
                columnDefs: [{ aTargets: [1] }],
                hasPaging: true,
                hasPagingServer: true,
                hasSelectionRows: true,
                scrollY: '250px',
                scrollX: '',
                hasTypeSelectionRows: (isMultiSelect ? "checkbox" : "radio"),
                selectionRowsEvent: { on: 'click', callBack: base.Event.BtnGridCheckBoxRepresentanteClick },
                selectionRowsCallback: base.Event.SelectionRowsPostulantesCallback,
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.BuscarColaborador,
                    source: 'Result'
                }
            });
        },

        ObtenerColaboradorSeleccionados: function () {
            return base.Control.SeleccionadoColaborador;
        }
    };

    base.Show = function (isMultiSelectParam, listaColaboradores, filtro) {
        if (isMultiSelectParam === true || isMultiSelectParam === false) {
            isMultiSelect = isMultiSelectParam;
        }

        filtroObj = filtro;

        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaFormularioBuscarColaborador,
            size: "size-wide",
            width: "90%",
            maxHeight: 900,
            close: function () {
            }
        });

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.FormularioBuscarColaborador,
            onSuccess: function () {
                base.Control.SeleccionadoColaborador = listaColaboradores;
                base.Ini();
            },
            data: filtro
        });
    };
}