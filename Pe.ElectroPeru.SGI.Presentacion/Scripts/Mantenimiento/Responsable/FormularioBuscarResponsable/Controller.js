/// <summary>
/// Script de controlador del layaut del site.
/// </summary>
/// <remarks>
/// Creacion:	GMD 23092016
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.FormularioBuscadorResponsable');
Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.FormularioBuscadorResponsable.Controller = function (opts) {
    var base = this;
    var isMultiSelect = false;
    var filtroObj = null;

    base.Ini = function () {
        'use strict'
        base.Control.FormularioResponsableModel = Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.Models.FormularioResponsable;

        if (opts != null && opts.AceptarSuccess != null && opts.AceptarSuccess)
            base.Event.AceptarSuccess = opts.AceptarSuccess;

        base.Control.TxtNombreResponsable().keypress(base.Event.BtnBaseResponsableBuscarKeyPress);
        base.Control.BtnBaseResponsableBuscar().click(base.Event.BtnBuscarResponsableClick);
        base.Control.BtnCancelar().click(base.Event.BtnCancelarClick);
        base.Control.BtnAceptar().click(base.Event.BtnAceptarClick);

        base.Control.BtnGrabarRegistroResponsable().off('click');
        base.Control.BtnGrabarRegistroResponsable().on('click', base.Event.BtnGrabarRegistroResponsableClick);

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmRegistrarResponsable(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraResponsable()
        });
        $("#divGrdResultResponsable").html("");
        base.Function.CrearGridResponsable();
        base.Event.BtnBuscarResponsableClick();
    };

    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        DlgForm: null,
        GrdBaseResponsableResultado: null,
        BtnBaseResponsableBuscar: function () { return $('#btnBuscarPersona'); },
        BtnCancelar: function () { return $('#btnCancelarResponsable'); },
        BtnAceptar: function () { return $('#btnAceptarResponsable'); },
        TxtNombreResponsable: function () { return $('#txtNombreResponsable'); },
        SlcBaseResponsableFiltro: function () { return $('#slcFiltroBuscarResponsable'); },
        SlcEmpresaResponsableFiltro: function () { return $('#slcEmpresaResponsableFiltro'); },

        SeleccionadoResponsable: [],
        FormularioResponsableModel: null,

        FrmRegistrarResponsable: function () { return $('#frmRegistrarResponsable'); },
        Validador: null,

        SlcEmpresaResponsableRegistro: function () { return $('#slcEmpresaResponsableRegistro'); },
        SlcTipoDocumentoResponsableRegistro: function () { return $('#slcTipoDocumentoResponsableRegistro'); },
        TxtNumeroDocumentoResponsableRegistrar: function () { return $('#txtNumeroDocumentoResponsableRegistrar'); },
        TxtApellidoPaternoResponsableRegistrar: function () { return $('#txtApellidoPaternoResponsableRegistrar'); },
        TxtApellidoMaternoResponsableRegistrar: function () { return $('#txtApellidoMaternoResponsableRegistrar'); },
        TxtNombresResponsableRegistrar: function () { return $('#txtNombresResponsableRegistrar'); },
        SlcPuestoTrabajoResponsableRegistro: function () { return $('#slcPuestoTrabajoResponsableRegistro'); },
        SlcTipoPlanillaResponsableRegistro: function () { return $('#slcTipoPlanillaResponsableRegistro'); },

        BtnCancelarRegistroResponsable: function () { return $('#btnCancelarRegistroResponsable'); },
        BtnGrabarRegistroResponsable: function () { return $('#btnGrabarRegistroResponsable'); },
    };

    base.Event = {
        BtnBaseResponsableBuscarKeyPress: function (evento) {
            var key = Pe.GMD.UI.Web.Components.Util.GetKeyCode(evento);
            var esValido = !(evento && key == 13);
            if (esValido == false) {
                base.Event.BtnBuscarResponsableClick();
            }
            return esValido;
        },

        BtnBuscarResponsableClick: function () {

            'use strict'
            var textoResponsable = "";
            if (base.Control.TxtNombreResponsable().val() != null || base.Control.TxtNombreResponsable().val() != undefined) {
                textoResponsable = base.Control.TxtNombreResponsable().val().trim();
                if (textoResponsable != '') {
                    $('#asegundoBuscarResponsable').attr('role', 'tab');
                    $('#asegundoBuscarResponsable').attr('data-toggle', 'tab');
                }
            }

            var filtro; 
            if (base.Control.SlcBaseResponsableFiltro().val() == "1") {
                filtro = {
                    NombreCompleto: "",
                    NumeroDocumento: textoResponsable
                };
            } else {
                filtro = {
                    NombreCompleto: textoResponsable,
                    NumeroDocumento: ""
                };
            }

            if (filtroObj != null) {
                filtro.Modo = filtroObj.Modo;
            }

            base.Control.GrdBaseResponsableResultado.Load(filtro);
        },

        BtnCancelarClick: function () {
            'use strict'
            base.Control.DlgForm.divDialog.close();
        },

        BtnAceptarClick: function () {
            'use strict'
            if (base.Event.AceptarSuccess != null) {
                base.Event.AceptarSuccess(base.Function.ObtenerResponsableSeleccionados());
            }
            base.Control.DlgForm.divDialog.close();
        },

        BtnGridCheckBoxRepresentanteClick: function (that, row) {
            if (isMultiSelect) {
                $.each(row, function (index, value) {
                    var indexItem = base.Control.SeleccionadoResponsable.map(function (e) { return e.CodigoResponsable; }).indexOf(value.CodigoResponsable);
                    if ($(that).is(":checked")) {
                        if (indexItem == -1) {
                            base.Control.SeleccionadoResponsable.push(value);
                        }
                    } else {
                        if (indexItem != -1) {
                            base.Control.SeleccionadoResponsable.splice(indexItem, 1);
                        }
                    }
                })
            } else {
                $.each(row, function (index, value) {
                    base.Control.SeleccionadoResponsable = [];
                    base.Control.SeleccionadoResponsable.push(value);
                });
            }
        },

        SelectionRowsPostulantesCallback: function () {
            base.Control.GrdBaseResponsableResultado.SetSelectedData("NumeroDocumento", base.Control.TxtNombreResponsable().val());
            base.Control.SeleccionadoResponsable = [];
            base.Control.SeleccionadoResponsable = base.Control.GrdBaseResponsableResultado.GetSelectedData();
        },

        BtnGrabarRegistroResponsableClick: function () {
            if (base.Control.Validador.isValid()) {
                var codigoEmpresa = null;

                if (base.Control.FormularioResponsableModel.Responsable.CodigoEmpresa != null && base.Control.FormularioResponsableModel.Responsable.CodigoEmpresa != '') {
                    codigoEmpresa = base.Control.FormularioResponsableModel.Responsable.CodigoEmpresa;
                }
                else {
                    codigoEmpresa = base.Control.SlcEmpresaResponsableRegistro().val();
                }

                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaTituloConfirmar,
                    indicadorModal: false,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarResponsable.data = {
                            CodigoResponsable: base.Control.FormularioResponsableModel.Responsable.CodigoResponsable,
                            CodigoEmpresa: codigoEmpresa,
                            CodigoTipoDocumento: base.Control.SlcTipoDocumentoResponsableRegistro().val(),
                            NumeroDocumento: base.Control.TxtNumeroDocumentoResponsableRegistrar().val().trim(),
                            ApellidoPaterno: base.Control.TxtApellidoPaternoResponsableRegistrar().val().trim(),
                            ApellidoMaterno: base.Control.TxtApellidoMaternoResponsableRegistrar().val().trim(),
                            Nombres: base.Control.TxtNombresResponsableRegistrar().val().trim(),
                            CodigoPuestoTrabajo: base.Control.SlcPuestoTrabajoResponsableRegistro().val(),
                            CodigoTipoPlanilla: base.Control.SlcTipoPlanillaResponsableRegistro().val(),
                            IndicadorPermiteCierre: false
                        };

                        base.Ajax.AjaxGrabarResponsable.submit();
                    }
                });
            }
            else {
                $("#frmRegistrarResponsableSummaryErrorMessage").empty();
                $("#frmRegistrarResponsableSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        }
    };

    base.AjaxSuccess = {
        AjaxGrabarResponsableSuccess: function (resultado) {
            if (resultado.Result >= 1) {
                base.Control.Mensaje.InformationFormularioDetalle({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });

                if (base.Control.FormularioResponsableModel.Responsable.CodigoEmpresa == null || base.Control.FormularioResponsableModel.Responsable.CodigoEmpresa == '') {
                    base.Control.SlcEmpresaResponsableFiltro().val(base.Control.SlcEmpresaResponsableRegistro().val());
                }

                base.Control.SlcBaseResponsableFiltro().val('1');
                base.Control.TxtNombreResponsable().val(base.Control.TxtNumeroDocumentoResponsableRegistrar().val().trim());

                base.Control.SlcEmpresaResponsableRegistro().val('');
                base.Control.SlcTipoDocumentoResponsableRegistro().val('');
                base.Control.TxtNumeroDocumentoResponsableRegistrar().val('');
                base.Control.TxtApellidoPaternoResponsableRegistrar().val('');
                base.Control.TxtApellidoMaternoResponsableRegistrar().val('');
                base.Control.TxtNombresResponsableRegistrar().val('');
                base.Control.SlcPuestoTrabajoResponsableRegistro().val('');
                base.Control.SlcTipoPlanillaResponsableRegistro().val('');

                $("#segundoBuscarResponsable").removeClass("active");
                $("#listaSegundoBuscarResponsable").removeAttr("class");
                $("#primerBuscarResponsable").attr('class', "tab-pane active");
                $("#listaPrimeroBuscarResponsable").attr('class', "active");

                base.Event.BtnBuscarResponsableClick();
            }
            else if (resultado.Result.toString() == "-2") {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeValidacionResponsable.Mensaje1
                });
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
    };

    base.Ajax = {
        AjaxGrabarResponsable: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.RegistrarResponsable,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxGrabarResponsableSuccess
        }),
    };

    base.Function = {
        ValidacionExtraResponsable: function () {
            var validaciones = new Array();

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.SlcTipoDocumentoResponsableRegistro().val() == "1" && $.trim(base.Control.TxtNumeroDocumentoResponsableRegistrar().val()).length < 8) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtNumeroDocumentoResponsableRegistrar().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtNumeroDocumentoResponsableRegistrar().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });
            return validaciones;
        },

        CrearGridResponsable: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridDocumento,
                width: '10%'
            });

            columns.push({
                data: 'NombreCompleto',
                title: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridResponsable,
                width: '100%',
                'class': 'left'
            });

            //columns.push({
            //    data: 'NombreEmpresa',
            //    title: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridEmpresa,
            //    width: '25%'
            //});

            //columns.push({
            //    data: 'NombreProyecto',
            //    title: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridProyecto,
            //    width: '25%'
            //});

            //columns.push({
            //    data: 'CodigoTipoPlanilla',
            //    title: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridCodigoTipoPlanilla,
            //    width: '25%'
            //});

            base.Control.GrdBaseResponsableResultado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultResponsable',
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
                    url: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.BuscarResponsable,
                    source: 'Result'
                }
            });
        },

        ObtenerResponsableSeleccionados: function () {
            return base.Control.SeleccionadoResponsable;
        }
    };

    base.Show = function (isMultiSelectParam, listaResponsablees, filtro) {
        if (isMultiSelectParam === true || isMultiSelectParam === false) {
            isMultiSelect = isMultiSelectParam;
        }

        filtroObj = filtro;

        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaFormularioBuscarResponsable,
            size: "size-wide",
            width: "90%",
            maxHeight: 900,
            close: function () {
            }
        });

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.FormularioBuscarResponsable,
            onSuccess: function () {
                base.Control.SeleccionadoResponsable = listaResponsablees;
                base.Ini();
            },
            data: filtro
        });
    };
}