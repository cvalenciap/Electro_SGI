/// <summary>
/// Script de controlador del layaut del site.
/// </summary>
/// <remarks>
/// Creacion:	GMD 23092016
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.FormularioBuscadorEmpresa');
Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.FormularioBuscadorEmpresa.Controller = function (opts) {
    var base = this;
    var isMultiSelect = false;

    base.Ini = function () {
        'use strict'
        if (opts != null && opts.AceptarSuccess != null && opts.AceptarSuccess)
            base.Event.AceptarSuccess = opts.AceptarSuccess;

        base.Control.TxtNombreEmpresa().keypress(base.Event.BtnBaseEmpresaBuscarKeyPress);
        base.Control.BtnBaseEmpresaBuscar().click(base.Event.BtnBuscarEmpresaClick);
        base.Control.BtnCancelar().click(base.Event.BtnCancelarClick);
        base.Control.BtnAceptar().click(base.Event.BtnAceptarClick);

        //base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
        //    form: base.Control.FrmEmpresa(),
        //    messages: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.ValidarEmpresaCamposObligatorios,
        //    validationsExtra: base.Function.ValidacionExtraEmpresa()
        //});

        //base.Control.BtnGrabarRegistroEmpresa().off('click');
        //base.Control.BtnGrabarRegistroEmpresa().on('click', base.Event.BtnGrabarRegistroEmpresaClick);

        base.Function.CrearGridColaborador();
        base.Event.BtnBuscarEmpresaClick();
    };

    base.Control = {
        FrmEmpresa: function () { return $('#frmEmpresa'); },
        Validador: null,
        GrdBaseEmpresaResultado: null,
        BtnBaseEmpresaBuscar: function () { return $('#btnBuscarEmpresa'); },
        BtnCancelar: function () { return $('#btnCancelarEmpresa'); },
        BtnAceptar: function () { return $('#btnAceptarEmpresa'); },

        TxtNombreEmpresa: function () { return $('#txtNombreEmpresa'); },
        TxtRazonSocialEmpresa: function () { return $('#txtRazonSocialEmpresa'); },
        TxtRucEmpresa: function () { return $('#txtRucEmpresa'); },
        SlcCodigoTipoEmpresa: function () { return $('#slcCodigoTipoEmpresa'); },
        SlcBaseEmpresaFiltro: function () { return $('#slcFiltroBuscarEmpresa'); },
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        DlgForm: null,
        SeleccionadoColaborador: [],
        ColaboradorBusquedaModel: null,

        //BtnCancelarRegistroEmpresa: function () { return $('#btnCancelarRegistroEmpresa'); },
        //BtnGrabarRegistroEmpresa: function () { return $('#btnGrabarRegistroEmpresa'); },
    };

    base.Event = {
        BtnBaseEmpresaBuscarKeyPress: function (evento) {
            var key = Pe.GMD.UI.Web.Components.Util.GetKeyCode(evento);
            var esValido = !(evento && key == 13);
            if (esValido == false) {
                base.Event.BtnBuscarEmpresaClick();
            }
            return esValido;
        },

        BtnBuscarEmpresaClick: function () {
            'use strict'

            //if (base.Control.TxtNombreEmpresa().val() != null && base.Control.TxtNombreEmpresa().val().trim() != '') {
            //    $('#asegundoBuscarEmpresa').attr('role', 'tab');
            //    $('#asegundoBuscarEmpresa').attr('data-toggle', 'tab');
            //}

            var filtro;
            if (base.Control.SlcBaseEmpresaFiltro().val() == "1") {
                filtro = {
                    Ruc: "",
                    RazonSocial: base.Control.TxtNombreEmpresa().val()
                };
            } else {
                filtro = {
                    Ruc: base.Control.TxtNombreEmpresa().val(),
                    RazonSocial: ""
                };
            }
            base.Control.GrdBaseEmpresaResultado.Load(filtro);
        },

        BtnCancelarClick: function () {
            'use strict'
            base.Control.DlgForm.divDialog.close();
        },

        BtnAceptarClick: function () {
            'use strict'
            if (base.Event.AceptarSuccess != null) {
                base.Event.AceptarSuccess(base.Function.ObtenerEmpresaSeleccionada());
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

        //BtnGrabarRegistroEmpresaClick: function () {
        //    'use strict';
        //    if (base.Control.Validador.isValid()) {
        //        base.Control.Mensaje.Confirmation({
        //            title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
        //            indicadorModal: false,
        //            message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
        //            onAccept: function () {
        //                base.Ajax.AjaxGrabarEmpresa.data = {
        //                    RazonSocial: base.Control.TxtRazonSocialEmpresa().val(),
        //                    Ruc: base.Control.TxtRucEmpresa().val(),
        //                    CodigoTipoEmpresa: base.Control.SlcCodigoTipoEmpresa().val()
        //                }
        //                base.Ajax.AjaxGrabarEmpresa.submit();
        //            }
        //        });
        //    }
        //    else
        //    {
        //        $("#frmEmpresaSummaryErrorMessage").empty();
        //        $("#frmEmpresaSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
        //    }
        //}
    };

    base.Function = {
        CrearGridColaborador: function () {
            var columns = new Array();

            columns.push({
                data: 'Ruc',
                title: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridDocumento,
                width: '20%'
            });

            columns.push({
                data: 'RazonSocial',
                title: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridEmpresa,
                width: '65%'
            });

            base.Control.GrdBaseEmpresaResultado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultEmpresa',
                columns: columns,
                columnDefs: [{ aTargets: [1] }],
                hasPaging: true,
                hasPagingServer: true,
                hasSelectionRows: true,
                scrollY: '250px',
                scrollX: '',
                hasTypeSelectionRows: (isMultiSelect ? "checkbox" : "radio"),
                selectionRowsEvent: { on: 'click', callBack: base.Event.BtnGridCheckBoxRepresentanteClick },
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.BuscarEmpresa,
                    source: 'Result'
                }
            });
        },

        ObtenerEmpresaSeleccionada: function () {
            return base.Control.SeleccionadoColaborador;
        },

        //ValidacionExtraEmpresa: function () {
        //    var validaciones = new Array();

        //    validaciones.push({
        //        Event: function () {
        //            var resultado = true;

        //            if ($.trim(base.Control.TxtRucEmpresa().val()).length < 11) {
        //                resultado = false;
        //            }

        //            if (resultado) {
        //                base.Control.TxtRucEmpresa().attr('class', 'form-control');
        //            }
        //            else {
        //                base.Control.TxtRucEmpresa().attr('class', 'form-control hasError');
        //            }

        //            return resultado;
        //        }
        //    });
        //    return validaciones;
        //},
    };

    base.Show = function (isMultiSelectParam, listaColaboradores, filtro) {
        if (isMultiSelectParam === true || isMultiSelectParam === false) {
            isMultiSelect = isMultiSelectParam;
        }
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaFormularioBuscarEmpresa,
            size: "size-wide",
            width: "80%",
            maxHeight: 900,
            close: function () {
            }
        });

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.FormularioBuscarEmpresa,
            onSuccess: function () {
                base.Control.SeleccionadoColaborador = listaColaboradores;
                base.Ini();
            },

            data: filtro
        });
    };

    base.Ajax = {
        AjaxGrabarEmpresa: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.RegistrarEmpresa,
            autoSubmit: false,
            onSuccess: function (resultado) {
                if (resultado.Result.toString() == "1") {
                    base.Control.Mensaje.InformationFormularioDetalle({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                    });

                    base.Control.TxtNombreEmpresa().val(base.Control.TxtRucEmpresa().val());
                    base.Control.SlcBaseEmpresaFiltro().val(2);

                    base.Control.TxtRazonSocialEmpresa().val('');
                    base.Control.TxtRucEmpresa().val('');
                    base.Control.SlcCodigoTipoEmpresa().val('');

                    $("#segundoBuscarEmpresa").removeClass("active");
                    $("#listaSegundoBuscarEmpresa").removeAttr("class");
                    $("#primerBuscarEmpresa").attr('class', "tab-pane active");
                    $("#listaPrimeroBuscarEmpresa").attr('class', "active");

                    base.Event.BtnBuscarEmpresaClick();
                }
                else if (resultado.Result.toString() == "-1") {
                    base.Control.Mensaje.Warning({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeValidacionEmpresa.Mensaje1
                    });
                }
                else if (resultado.Result.toString() == "-2") {
                    base.Control.Mensaje.Warning({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeValidacionEmpresa.Mensaje2
                    });
                }
                else if (resultado.Result.toString() == "-3") {
                    base.Control.Mensaje.Warning({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeValidacionEmpresa.Mensaje3
                    });
                }
                else {
                    base.Control.Mensaje.Warning({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                    });
                }
            }
        }),
    }
}