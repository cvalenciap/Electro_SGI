/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD D43260443
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioComunidadInvolucrada');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioComunidadInvolucrada.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        if (opts != null && opts.AceptarSuccess != null && opts.AceptarSuccess)
            base.Event.AceptarSuccess = opts.AceptarSuccess;
        base.Control.FormularioComunidadModel = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Models.FormularioComunidadInvolucradaModel;
        if (base.Control.FormularioComunidadModel.ListaInvestigacionTipoImpactoComunidad != null && base.Control.FormularioComunidadModel.ListaInvestigacionTipoImpactoComunidad.length > 0) {
            for (var i = 0; i < base.Control.FormularioComunidadModel.ListaInvestigacionTipoImpactoComunidad.length; i++) {
                if (base.Control.FormularioComunidadModel.ListaInvestigacionTipoImpactoComunidad[i].CodigoTipoImpactoComunidad == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioComunidadInvolucrada.DatosConstantes.OtrosTipoImpactoComunidad) {
                    $('#txtOtrosComunidad').val(base.Control.FormularioComunidadModel.ListaInvestigacionTipoImpactoComunidad[i].OtroTipoImpactoComunidad);
                    if (base.Control.FormularioComunidadModel.ListaInvestigacionTipoImpactoComunidad[i].OtroTipoImpactoComunidad != '')
                        base.Control.TxtOtros().prop('disabled', false);
                }
                $('#id_' + base.Control.FormularioComunidadModel.ListaInvestigacionTipoImpactoComunidad[i].CodigoTipoImpactoComunidad).prop("checked", true);
            }
        }
        
        base.Control.BtnAgregarRepresentanteComunidad().off('click');
        base.Control.BtnAgregarRepresentanteComunidad().on('click', base.Event.BtnAgregarRepresentanteComunidadClick);

        base.Control.BtnAgregarPobladorAfectado().off('click');
        base.Control.BtnAgregarPobladorAfectado().on('click', base.Event.BtnAgregarPobladorAfectadoClick);
        
        base.Control.BtnGrabarImpactoComunidad().off('click');
        base.Control.BtnGrabarImpactoComunidad().on('click', base.Event.BtnGrabarImpactoComunidadClick);

        base.Control.BtnGrabarOtrosDetalles().off('click');
        base.Control.BtnGrabarOtrosDetalles().on('click', base.Event.BtnGrabarOtrosDetallesClick);

        base.Control.DlgRepresentanteComunidad = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioPobladorAfectado.Controller({
            AceptarSuccess: base.Event.BtnBuscarPobladoresAfectadosClick
        });

        base.Control.DlgPobladorComunidad= new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioPobladorAfectado.Controller({
            AceptarSuccess: base.Event.BtnBuscarPobladoresAfectadosClick
        });

        base.Control.DdlConsecuenciaIncidenteImpactoOtros().off('change');
        base.Control.DdlConsecuenciaIncidenteImpactoOtros().on('change', base.Event.DdlConsecuenciaIncidenteImpactoOtrosChange);

        base.Control.DdlPotencialIncidenteImpactoOtros().off('change');
        base.Control.DdlPotencialIncidenteImpactoOtros().on('change', base.Event.DdlPotencialIncidenteImpactoOtrosChange);

        base.Function.CrearGridRepresentantes();
        base.Function.CrearGridPobladores();
        base.Event.BtnBuscarPobladoresAfectadosClick();

        base.Control.Validador= new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmOtrosDetallesComunidad(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos
        });
        base.Control.ValidadorGeneral = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmInformacionGeneral(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraGeneral()
        });


        if (base.Control.FormularioComunidadModel.ComunidadInvolucrada.CodigoInvestigacionComunidadInvolucrada != null) {
            base.Control.BtnAgregarPobladorAfectado().attr("disabled", false);
            base.Control.BtnAgregarRepresentanteComunidad().attr("disabled", false);

            base.Control.BtnGrabarOtrosDetalles().attr("disabled", false);
            base.Control.BtnCancelarOtrosDetalles().attr("disabled", false);
        }
        else
        {
            base.Control.BtnAgregarPobladorAfectado().attr("disabled", true);
            base.Control.BtnAgregarRepresentanteComunidad().attr("disabled", true);

            base.Control.BtnGrabarOtrosDetalles().attr("disabled", true);
            base.Control.BtnCancelarOtrosDetalles().attr("disabled", true);
        }

        $('.checkboxClass').change(function () {
            if (this.checked && this.value == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioComunidadInvolucrada.DatosConstantes.OtrosTipoImpactoComunidad) {
                base.Control.TxtOtros().prop('disabled', false);
            } else {
                base.Control.TxtOtros().val('');
                base.Control.TxtOtros().prop('disabled', true);

            }
        });
        //$('.checkboxClass').trigger('change');
    };

    base.Show = function (opts) {
        base.Control.CodigoInvestigacionComunidadInvolucrada = opts.CodigoInvestigacionComunidadInvolucrada;        
        base.Control.CodigoInvestigacion = opts.CodigoInvestigacion;
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaFormularioComunidadInvolucrada,
            size: "size-wide",
            close: function () {
            }
        });

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.FormularioComunidadInvolucrada,
            onSuccess: function () {
                base.Ini();
            },
            data: opts
        });
    };

    base.Control = {
        Validador: null,
        ValidadorGeneral: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        FormularioComunidadModel : null,
        CodigoInvestigacionComunidadInvolucrada : null,
        CodigoInvestigacion: null,
        DlgRepresentanteComunidad: null,
        DlgPobladorComunidad: null,
        GrdCategoriaImpacto: null,
        CantidadRepresentantes: null,
        CantidadPobladores: null,
        FrmInformacionGeneral: function () { return $('#frmInformacionGeneralComunidad'); },
        FrmOtrosDetallesComunidad: function () { return $('#frmOtrosDetalles'); },
        TxtDescripcionComunidadInvolucrada: function () { return $('#txtDescripcionComunidadInvolucrada'); },
        DdlConsecuenciaIncidenteImpactoOtros: function () { return $('#ddlConsecuenciaIncidenteImpactoOtros'); },
        DdlPotencialIncidenteImpactoOtros: function () { return $('#ddlPotencialIncidenteImpactoOtros'); },
        TxtDescripcionConsecuenciaActual: function () { return $('#txtConsecuenciaOtrosDetalles'); },
        TxtDescripcionConsecuenciaPotencial: function () { return $('#txPotencialOtrosDetalles'); },
        BtnAgregarRepresentanteComunidad: function () { return $('#btnAgregarRepresentanteComunidad'); },
        BtnAgregarPobladorAfectado: function () { return $('#btnAgregarPobladorAfectado'); },
        GrdRepresentanteComunidad: null,
        BtnGrabarImpactoComunidad: function () { return $('#btnGrabarImpactoComunidad'); },
        BtnCancelarImpactoComunidad: function () { return $('#btnCancelarImpactoComunidad'); },
        BtnGrabarOtrosDetalles: function () { return $('#btnGrabarOtrosDetalles'); },
        BtnCancelarOtrosDetalles: function () { return $('#btnCancelarOtrosDetalles'); },
        TxtOtros: function () { return $('#txtOtrosComunidad'); },

        TxtActualConsecuenciaCategoriaImpactoComunidad: function () { return $('#txtActualConsecuenciaCategoriaImpactoComunidad'); },
        TxtPotencialConsecuenciaCategoriaImpactoComunidad: function () { return $('#txtPotencialConsecuenciaCategoriaImpactoComunidad'); },
    };

    base.Function = {
        CrearGridRepresentantes: function () {
            var columns = new Array();
            columns.push({
                data: 'Nombres',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridNombres,
                width: "30%",
                renderer: function () {
                    return '';
                }
            });
            columns.push({
                data: 'NumeroDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridDocumento,
                width: "15%",
                renderer: function () {
                    return '';
                }
            });
            columns.push({
                data: 'Telefono',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridTelefono,
                width: "15%",
                renderer: function () {
                    return '';
                }
            });
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "5%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditarRepresentanteClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.BtnGridDeleteValidate, event: { on: 'click', callBack: base.Event.BtnGridDeleteProbladorClick } }
                ]
            });
            base.Control.GrdRepresentanteComunidad = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdRepresentanteComunidad',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarPobladorAfectado,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                    base.Control.CantidadRepresentantes = records.length;
                }
            });
        },

        CrearGridPobladores: function () {
            var columns = new Array();
            columns.push({
                data: 'Nombres',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridNombres,
                width: "30%",
                renderer: function () {
                    return '';
                }
            });
            columns.push({
                data: 'NumeroDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridDocumento,
                width: "5%",
                renderer: function () {
                    return '';
                }
            });
            columns.push({
                data: 'Telefono',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridTelefono,
                width: "5%",
                renderer: function () {
                    return '';
                }
            });
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "5%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditarProbladorClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.BtnGridDeleteValidate, event: { on: 'click', callBack: base.Event.BtnGridDeleteProbladorClick } }
                ]
            });
            base.Control.GrdPobladorComunidad = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdPobladorAfectado',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarPobladorAfectado,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                    base.Control.CantidadPobladores = records.length;
                }
            });
        },

        ValidacionExtraGeneral: function () {
            var validaciones = new Array();
            validaciones.push({
                Event: function () {
                    var resultado = true;
                    var cont = 0;
                    $('.checkboxClass:checked').each(function (i) {
                        cont++;
                    });

                    if (cont < 1) {
                        resultado = false;
                    }

                    if (resultado) {
                        $("#lblCheck").attr('class', 'checkboxClass');
                    }
                    else {
                        $("#lblCheck").attr('class', 'checkboxClass hasError');
                    }

                    return resultado;
                }
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;
                    var cont = 0;
                    $('.checkboxClass:checked').each(function (i) {
                        if ($(this).val()=="TI016") {
                            cont++;
                        }
                    });

                    if (cont == 1 && (base.Control.TxtOtros().val() == '' || base.Control.TxtOtros() == null)) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtOtros().removeClass();
                        base.Control.TxtOtros().addClass('input-normal');
                    }
                    else {
                        base.Control.TxtOtros().removeClass();
                        base.Control.TxtOtros().addClass('input-error');
                    }

                    return resultado;
                }
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.FormularioComunidadModel.ComunidadInvolucrada.CodigoInvestigacionComunidadInvolucrada != null && base.Control.CantidadRepresentantes <= 0) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.BtnAgregarRepresentanteComunidad().attr('class', 'form-control');
                    }
                    else {
                        base.Control.BtnAgregarRepresentanteComunidad().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });


            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.FormularioComunidadModel.ComunidadInvolucrada.CodigoInvestigacionComunidadInvolucrada != null && base.Control.CantidadPobladores <= 0) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.BtnAgregarPobladorAfectado().attr('class', 'form-control');
                    }
                    else {
                        base.Control.BtnAgregarPobladorAfectado().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });

            return validaciones;
        },


    };

    base.Event = {
        BtnGridDeleteValidate: function (data, type, full) {
            if (base.Control.FormularioComunidadModel.ComunidadInvolucrada.CodigoEstadoInvestigacion != Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.EstadoInvestigacionPorElaborar)
                return false;
            else
                return true;
        },
        DdlConsecuenciaIncidenteImpactoOtrosChange: function () {
            'use strict'            
            if (base.Control.DdlConsecuenciaIncidenteImpactoOtros().val() != null && base.Control.DdlConsecuenciaIncidenteImpactoOtros().val() != '')
            {
                $('input[name="codigoConsecuenciaActualComunidadModal"]').each(function (i) {
                    $(this).prop("checked", false);
                });
                $('#radioConsecuenciaActual_' + base.Control.DdlConsecuenciaIncidenteImpactoOtros().val()).prop("checked", true);
                base.Control.TxtDescripcionConsecuenciaActual().val($('#radioConsecuenciaActual_' + base.Control.DdlConsecuenciaIncidenteImpactoOtros().val()).data().descripcion);
            }
            else
            {
                $('input[name="codigoConsecuenciaActualComunidadModal"]').each(function (i) {
                    $(this).prop("checked", false);
                });
                base.Control.TxtDescripcionConsecuenciaActual().val('');
            }
        },
        DdlPotencialIncidenteImpactoOtrosChange: function () {
            'use strict'
            if (base.Control.DdlPotencialIncidenteImpactoOtros().val() != null && base.Control.DdlPotencialIncidenteImpactoOtros().val() != '') {
                $('input[name="codigoConsecuenciaPotencialComunidadModal"]').each(function (i) {
                    $(this).prop("checked", false);
                });
                $('#radioConsecuenciaPotencial_' + base.Control.DdlPotencialIncidenteImpactoOtros().val()).prop("checked", true);
                base.Control.TxtDescripcionConsecuenciaPotencial().val($('#radioConsecuenciaPotencial_' + base.Control.DdlPotencialIncidenteImpactoOtros().val()).data().descripcion);
            }
            else
            {
                $('input[name="codigoConsecuenciaPotencialComunidadModal"]').each(function (i) {
                    $(this).prop("checked", false);
                });
                base.Control.TxtDescripcionConsecuenciaPotencial().val('');
            }
        },

        BtnBuscarPobladoresAfectadosClick: function () {
            base.Control.GrdRepresentanteComunidad.Load({
                CodigoTipoPoblador: "REP",
                CodigoInvestigacionComunidadInvolucrada: base.Control.CodigoInvestigacionComunidadInvolucrada
            });
            base.Control.GrdPobladorComunidad.Load({
                CodigoTipoPoblador: "POB",
                CodigoInvestigacionComunidadInvolucrada: base.Control.CodigoInvestigacionComunidadInvolucrada
            });
        },

        BtnGrabarOtrosDetallesClick: function () {
            if (base.Control.Validador.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {                        
                        base.Ajax.AjaxRegistrarComunidadOtros.data = {
                            CodigoInvestigacionCategoria: base.Control.FormularioComunidadModel.ComunidadInvolucrada.CodigoInvestigacionCategoria,
                            CodigoInvestigacionComunidadInvolucrada: base.Control.CodigoInvestigacionComunidadInvolucrada,
                            CodigoInvestigacion : base.Control.CodigoInvestigacion,
                            CodigoConsecuenciaImpcom : base.Control.DdlConsecuenciaIncidenteImpactoOtros().val(),
                            CodigoPotencialImpcom: base.Control.DdlPotencialIncidenteImpactoOtros().val(),
                            CodigoCategoriaTextoActual: $('input[name="codigoConsecuenciaActualComunidadModal"]:checked').data() != undefined ? $('input[name="codigoConsecuenciaActualComunidadModal"]:checked').data().codigo : '',
                            CodigoCategoriaTextoPotencial: $('input[name="codigoConsecuenciaPotencialComunidadModal"]:checked').data() != undefined ? $('input[name="codigoConsecuenciaPotencialComunidadModal"]:checked').data().codigo : ''
                        }
                        base.Ajax.AjaxRegistrarComunidadOtros.submit();
                    }
                });
            }
            else {
                $("#frmOtrosDetallesSummaryErrorMessage").empty();
                $("#frmOtrosDetallesSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },

        BtnGridEditarRepresentanteClick: function (row, data) {
            data.CodigoEstadoInvestigacion = base.Control.FormularioComunidadModel.ComunidadInvolucrada.CodigoEstadoInvestigacion;
            base.Control.DlgRepresentanteComunidad.Show(data);
        },

        BtnGridEditarProbladorClick: function (row, data) {
            data.CodigoEstadoInvestigacion = base.Control.FormularioComunidadModel.ComunidadInvolucrada.CodigoEstadoInvestigacion;
            base.Control.DlgPobladorComunidad.Show(data);
        },

        BtnGridDeleteProbladorClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarPobladorAfectado.data = {
                        CodigoInvestigacionPobladorAfectado: data.CodigoInvestigacionPobladorAfectado,
                    };
                    base.Ajax.AjaxEliminarPobladorAfectado.submit();
                }
            });
        },
        BtnAgregarRepresentanteComunidadClick: function () {
            base.Control.DlgRepresentanteComunidad.Show({
                CodigoEstadoInvestigacion: base.Control.FormularioComunidadModel.ComunidadInvolucrada.CodigoEstadoInvestigacion,
                CodigoInvestigacionComunidadInvolucrada: base.Control.CodigoInvestigacionComunidadInvolucrada,
                CodigoTipoPoblador: "REP",
                CodigoInvestigacion: base.Control.CodigoInvestigacion
            });
        },

        BtnAgregarPobladorAfectadoClick: function () {
            base.Control.DlgPobladorComunidad.Show({
                CodigoEstadoInvestigacion: base.Control.FormularioComunidadModel.ComunidadInvolucrada.CodigoEstadoInvestigacion,
                CodigoInvestigacionComunidadInvolucrada: base.Control.CodigoInvestigacionComunidadInvolucrada,
                CodigoTipoPoblador: "POB",
                CodigoInvestigacion: base.Control.CodigoInvestigacion
            });
        },

        BtnGrabarImpactoComunidadClick: function () {
            if (base.Control.ValidadorGeneral.isValid()) {
            var listaTipoImpactoComunidad = [];
            $('.checkboxClass:checked').each(function (i) {
                var that = $(this).val();
                if (that == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioComunidadInvolucrada.DatosConstantes.OtrosTipoImpactoComunidad)
                {
                    listaTipoImpactoComunidad.push({
                        CodigoTipoImpactoComunidad: that,
                        OtroTipoImpactoComunidad: $('#txtOtrosComunidad').val()
                    });
                }
                else
                {
                    listaTipoImpactoComunidad.push({
                        CodigoTipoImpactoComunidad: that
                    });
                }
            });
            base.Control.Mensaje.Confirmation({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                onAccept: function () {
                    base.Ajax.AjaxRegistrarInvestigacionComunidadInvolucrada.data = {
                        CodigoInvestigacionComunidadInvolucrada: base.Control.CodigoInvestigacionComunidadInvolucrada,
                        CodigoInvestigacion: base.Control.CodigoInvestigacion,
                        DescripcionComunidadInvolucrada: base.Control.TxtDescripcionComunidadInvolucrada().val(),
                        ListaTipoImpactoComunidad: listaTipoImpactoComunidad 
                    }
                    base.Ajax.AjaxRegistrarInvestigacionComunidadInvolucrada.submit();
                }
            });
            }
            else {
                $("#frmInformacionGeneralComunidadSummaryErrorMessage").empty();
                $("#frmInformacionGeneralComunidadSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },

        BtnAsignarCodigoSuccess: function (resultado) {
            if (resultado != null) {
                base.Control.FormularioComunidadModel.ComunidadInvolucrada.CodigoInvestigacionComunidadInvolucrada = resultado.CodigoInvestigacionComunidadInvolucrada;
                base.Event.BtnBuscarPobladoresAfectadosClick();
            }
        },

        AjaxRegistrarComunidadOtrosSuccess: function (resultado) {
            if (resultado.Result.CodigoConsecuenciaActual != '' && resultado.Result.CodigoConsecuenciaActual != null
                && resultado.Result.CodigoConsecuenciaPotencial != '' && resultado.Result.CodigoConsecuenciaPotencial != null) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });

                base.Control.TxtActualConsecuenciaCategoriaImpactoComunidad().val(resultado.Result.DescripcionConsecuenciaActual);
                base.Control.TxtPotencialConsecuenciaCategoriaImpactoComunidad().val(resultado.Result.DescripcionConsecuenciaPotencial);
                $('input[name="consecuenciaInvestigacionCategoriaImpactoComunidadActual"]').each(function (i) {
                    $(this).prop("checked", false);
                });
                $('input[name="consecuenciaInvestigacionCategoriaImpactoComunidadPotencial"]').each(function (i) {
                    $(this).prop("checked", false);
                });
                $('#radioCategoriaImpactoComunidadActual_' + resultado.Result.CodigoConsecuenciaActual).prop("checked", true);
                $('#radioCategoriaImpactoComunidadPotencial_' + resultado.Result.CodigoConsecuenciaPotencial).prop("checked", true);

                if (base.Event.AceptarSuccess != null)
                    base.Event.AceptarSuccess();
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxRegistrarInvestigacionComunidadInvolucradaSuccess: function (resultado) {
            if (resultado.Result != null) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Control.BtnAgregarPobladorAfectado().attr("disabled", false);
                base.Control.BtnAgregarRepresentanteComunidad().attr("disabled", false);
                base.Control.BtnCancelarImpactoComunidad().attr("disabled", false);
                base.Control.BtnCancelarOtrosDetalles().attr("disabled", false);
                base.Control.BtnGrabarOtrosDetalles().attr("disabled", false);
                base.Control.BtnCancelarOtrosDetalles().attr("disabled", false);


                base.Control.FormularioComunidadModel.ComunidadInvolucrada.CodigoInvestigacionComunidadInvolucrada = resultado.Result.CodigoInvestigacionComunidadInvolucrada;
                base.Control.CodigoInvestigacionComunidadInvolucrada = resultado.Result.CodigoInvestigacionComunidadInvolucrada;
                if (base.Event.AceptarSuccess != null)
                    base.Event.AceptarSuccess();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxEliminarPobladorAfectadoSuccess: function (resultado) {
            'use strict'
            if (resultado.Result >= 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnBuscarPobladoresAfectadosClick();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
    };


    base.Ajax = {
            AjaxRegistrarComunidadOtros: new Pe.GMD.UI.Web.Components.Ajax({
                action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarComunidadInvolucradaOtros,
                autoSubmit: false,
                onSuccess: base.Event.AjaxRegistrarComunidadOtrosSuccess
            }),
            AjaxRegistrarInvestigacionComunidadInvolucrada: new Pe.GMD.UI.Web.Components.Ajax({
                action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarComunidadInvolucrada,
                autoSubmit: false,
                onSuccess: base.Event.AjaxRegistrarInvestigacionComunidadInvolucradaSuccess
            }),
            AjaxEliminarPobladorAfectado: new Pe.GMD.UI.Web.Components.Ajax({
                action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.EliminarPobladorAfectado,
                autoSubmit: false,
                onSuccess: base.Event.AjaxEliminarPobladorAfectadoSuccess
            }),
    };
};