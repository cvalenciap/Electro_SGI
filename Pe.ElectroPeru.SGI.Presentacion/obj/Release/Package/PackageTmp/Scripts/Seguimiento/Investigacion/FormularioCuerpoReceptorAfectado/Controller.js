/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD D43260443
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCuerpoReceptorAfectado');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCuerpoReceptorAfectado.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
        base.Control.FormularioModelo = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Models.FormularioCuerpoReceptorAfectado;

        if (opts != null && opts.ReloadGridSucess != null && opts.ReloadGridSucess)
            base.Event.ReloadGridSucess = opts.ReloadGridSucess;

        if (base.Control.FormularioModelo.ListaInvestigacionTipoImpactoAmbiental != null && base.Control.FormularioModelo.ListaInvestigacionTipoImpactoAmbiental.length > 0) {
            for (var i = 0; i < base.Control.FormularioModelo.ListaInvestigacionTipoImpactoAmbiental.length; i++) {
                if (base.Control.FormularioModelo.ListaInvestigacionTipoImpactoAmbiental[i].CodigoTipoImpacto == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCuerpoReceptorAfectado.DatosConstantes.OtrosCuerpoReceptorAfectado) {
                    base.Control.TxtOtros().val(base.Control.FormularioModelo.ListaInvestigacionTipoImpactoAmbiental[i].OtrosTipoImpacto);
                    if (base.Control.FormularioModelo.ListaInvestigacionTipoImpactoAmbiental[i].OtrosTipoImpacto != '')
                        base.Control.TxtOtros().prop('disabled', false);
                }
                $('#id_' + base.Control.FormularioModelo.ListaInvestigacionTipoImpactoAmbiental[i].CodigoTipoImpacto).prop("checked", true);
            }
        }
        
        base.Function.CrearGridAgenteContaminante();
        base.Event.BtnBuscarAgenteContaminanteClick();

        base.Control.BtnGrabarInformacionGeneral().off('click');
        base.Control.BtnGrabarInformacionGeneral().on('click', base.Event.BtnGrabarInformacionGeneralClick);
        base.Control.BtnGrabarOtrosDetalles().off('click');
        base.Control.BtnGrabarOtrosDetalles().on('click', base.Event.BtnGrabarOtrosDetallesClick);        
        base.Control.BtnAgregarAgentesContaminantes().off('click');
        base.Control.BtnAgregarAgentesContaminantes().on('click', base.Event.BtnAgregarAgentesContaminantesClick);
        
        base.Control.DlgFormularioAgenteContaminante = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioAgenteContaminante.Controller({
            AceptarAgenteSuccess: base.Event.BtnBuscarAgenteContaminanteClick
        });

        base.Control.SlcCuerpoReceptorAfectado().off('change');
        base.Control.SlcCuerpoReceptorAfectado().on('change', base.Event.SlcCuerpoReceptorAfectadoChange);

        base.Control.SlcPregunta1ImpactoOtros().off('change');
        base.Control.SlcPregunta1ImpactoOtros().on('change', base.Event.SlcPregunta1ImpactoOtrosChange);
        
        base.Control.SlcPregunta3ImpactoOtros().off('change');
        base.Control.SlcPregunta3ImpactoOtros().on('change', base.Event.SlcPregunta3ImpactoOtrosChange);
        
        base.Control.ValidadorInformacionGeneral = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmLesionInformacionGeneral(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraInformacionGeneral()
        });

        base.Control.ValidadorOtrosDetalles = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmOtrosDetallesModal(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraOtrosDetalles()
        });

        base.Control.SlcConsecuenciaActualMedioAmbiental().off('change');
        base.Control.SlcConsecuenciaActualMedioAmbiental().on('change', base.Event.SlcConsecuenciaActualMedioAmbientalChange);

        base.Control.SlcConsecuenciaPotencialMedioAmbiental().off('change');
        base.Control.SlcConsecuenciaPotencialMedioAmbiental().on('change', base.Event.SlcConsecuenciaPotencialMedioAmbientalChange);

        $('.checkboxClass').change(function () {
            if(this.value == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCuerpoReceptorAfectado.DatosConstantes.OtrosCuerpoReceptorAfectado)
            {
                if (this.checked)
                {
                    base.Control.TxtOtros().prop('disabled', false);
                }
                else 
                {
                    base.Control.TxtOtros().val('');
                    base.Control.TxtOtros().prop('disabled', true);
                }   
            }          
        });
    };

    base.Show = function (opts) {        
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaFormularioCuerpoReceptorAfectado,
            size: "size-wide",
            close: function () {
            }
        });

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.FormularioCuerpoReceptorAfectado,
            onSuccess: function () {
                base.Ini();
            },
            data: opts
        });
    };

    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        FormularioModelo: null,
        DlgFormularioAgenteContaminante: null,        
        BtnGrabarInformacionGeneral: function () { return $('#btnGrabarInformacionGeneral'); },
        BtnGrabarOtrosDetalles: function () { return $('#btnGrabarOtrosDetalles'); },
        BtnAgregarAgentesContaminantes: function () { return $('#btnAgregarAgentesContaminantes'); },
        CodigoEstadoInvestigacion : null,
        SlcCuerpoReceptorAfectado: function () { return $('#slcCuerpoReceptorAfectado'); },
        TxtOtrosEspecificar: function () { return $('#txtOtrosEspecificar'); },
        TxtOtros: function () { return $('#txtOtros'); },
        TxtCantidadResiduosPeligrososGenerados: function () { return $('#txtCantidadResiduosPeligrososGenerados'); },
        TxtCantidadResiduosPeligrogosNoGenerados: function () { return $('#txtCantidadResiduosPeligrogosNoGenerados'); },
        TxtCantidadTopSoil: function () { return $('#txtCantidadTopSoil'); },
        TxtCantidadSueloImpactado: function () { return $('#txtCantidadSueloImpactado'); },
        TxtAreaAfectada: function () { return $('#txtAreaAfectada'); },
        TxtCantidadAnimalesMuertos: function () { return $('#txtCantidadAnimalesMuertos'); },
        TxtFloraAfectada: function () { return $('#txtFloraAfectada'); },

        //tab-Otros Detalles
        SlcPregunta1ImpactoOtros: function () { return $('#slcPregunta1ImpactoOtros'); },
        SlcPregunta2ImpactoOtros: function () { return $('#slcPregunta2ImpactoOtros'); },
        SlcPregunta3ImpactoOtros: function () { return $('#slcPregunta3ImpactoOtros'); },
        SlcPregunta4ImpactoOtros: function () { return $('#slcPregunta4ImpactoOtros'); },
        SlcConsecuenciaActualMedioAmbiental: function () { return $('#slcConsecuenciaActualMedioAmbiental'); },
        SlcConsecuenciaPotencialMedioAmbiental: function () { return $('#slcConsecuenciaPotencialMedioAmbiental'); },
        TxtDescripcionConsecuenciaActual: function () { return $('#txtDescripcionConsecuenciaActual'); },
        TxtDescripcionConsecuenciaPotencial: function () { return $('#txtDescripcionConsecuenciaPotencial'); },

        FrmLesionInformacionGeneral: function () { return $('#frmInformacionGeneralModal'); },
        FrmOtrosDetallesModal: function () { return $('#frmOtrosDetallesModal'); },
        TxtActualConsecuenciaCategoriaImpactoAmbiente: function () { return $('#txtActualConsecuenciaCategoriaImpactoAmbiente'); },
        TxtPotencialConsecuenciaCategoriaImpactoAmbiente: function () { return $('#txtPotencialConsecuenciaCategoriaImpactoAmbiente'); },
    };

    base.Function = {
        ValidacionExtraOtrosDetalles: function () {
            var validaciones = new Array();
            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.SlcPregunta1ImpactoOtros().val() == '01' && (base.Control.SlcPregunta2ImpactoOtros().val() == null || base.Control.SlcPregunta2ImpactoOtros().val() == '')) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.SlcPregunta2ImpactoOtros().attr('class', 'form-control');
                    }
                    else {
                        base.Control.SlcPregunta2ImpactoOtros().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });
            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.SlcPregunta1ImpactoOtros().val() == '02' && (base.Control.SlcPregunta3ImpactoOtros().val() == null || base.Control.SlcPregunta3ImpactoOtros().val() == '')) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.SlcPregunta3ImpactoOtros().attr('class', 'form-control');
                    }
                    else {
                        base.Control.SlcPregunta3ImpactoOtros().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });
            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.SlcPregunta3ImpactoOtros().val() == '01' && (base.Control.SlcPregunta4ImpactoOtros().val() == null || base.Control.SlcPregunta4ImpactoOtros().val() == '')) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.SlcPregunta4ImpactoOtros().attr('class', 'form-control');
                    }
                    else {
                        base.Control.SlcPregunta4ImpactoOtros().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });
            return validaciones;
        },
        ValidacionExtraInformacionGeneral: function () {
            var validaciones = new Array();
            validaciones.push({
                Event: function () {
                    var resultado = true;
                    $('.checkboxClass:checked').each(function (i) {
                        if ($(this).val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCuerpoReceptorAfectado.DatosConstantes.OtrosCuerpoReceptorAfectado
                            && (base.Control.TxtOtros().val() == '' || base.Control.TxtOtros().val() == null)) {
                            resultado = false;
                        }
                    });
                    if (resultado) {
                        base.Control.TxtOtros().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtOtros().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });
            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.SlcCuerpoReceptorAfectado().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCuerpoReceptorAfectado.DatosConstantes.CodigoOtros && (base.Control.TxtOtrosEspecificar().val() == null || base.Control.TxtOtrosEspecificar().val() == '')) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtOtrosEspecificar().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtOtrosEspecificar().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });
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
                        $("#lblCheck").attr('class', 'chkPerdidaProceso');
                    }
                    else {
                        $("#lblCheck").attr('class', 'chkPerdidaProceso hasError');
                    }

                    return resultado;
                }
            });
            validaciones.push({
                Event: function () {
                    var resultado = true;
                    if (base.Control.SlcCuerpoReceptorAfectado().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCuerpoReceptorAfectado.DatosConstantes.CodigoTSoil && (base.Control.TxtCantidadTopSoil().val() == null || base.Control.TxtCantidadTopSoil().val() == '')) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtCantidadTopSoil().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtCantidadTopSoil().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });
            validaciones.push({
                Event: function () {
                    var resultado = true;
                    if (base.Control.SlcCuerpoReceptorAfectado().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCuerpoReceptorAfectado.DatosConstantes.CodigoSuelo && (base.Control.TxtCantidadSueloImpactado().val() == null || base.Control.TxtCantidadSueloImpactado().val() == '')) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtCantidadSueloImpactado().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtCantidadSueloImpactado().attr('class', 'form-control hasError');                        
                    }

                    return resultado;
                }
            });
            validaciones.push({
                Event: function () {
                    var resultado = true;
                    if (base.Control.SlcCuerpoReceptorAfectado().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCuerpoReceptorAfectado.DatosConstantes.CodigoSuelo && (base.Control.TxtAreaAfectada().val() == null || base.Control.TxtAreaAfectada().val() == '')) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtAreaAfectada().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtAreaAfectada().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });
            validaciones.push({
                Event: function () {
                    var resultado = true;                    
                    if ((base.Control.SlcCuerpoReceptorAfectado().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCuerpoReceptorAfectado.DatosConstantes.CodigoAgua
                        || base.Control.SlcCuerpoReceptorAfectado().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCuerpoReceptorAfectado.DatosConstantes.CodigoFauna) &&
                        (base.Control.TxtCantidadAnimalesMuertos().val() == null || base.Control.TxtCantidadAnimalesMuertos().val() == '')) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtCantidadAnimalesMuertos().removeClass();
                        base.Control.TxtCantidadAnimalesMuertos().addClass('form-control');
                    }
                    else {
                        base.Control.TxtCantidadAnimalesMuertos().removeClass();
                        base.Control.TxtCantidadAnimalesMuertos().addClass('form-control hasError')
                    }

                    return resultado;
                }
            });
            return validaciones;
        },
        CrearGridAgenteContaminante: function () {
            var columns = new Array();
            columns.push({
                data: 'DescripcionAgenteContaminante',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridAgentesContaminantes,
                width: "30%"
            });

            columns.push({
                data: 'DescripcionEstadoContaminante',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridEstado,
                width: "5%"
            });

            columns.push({
                data: 'CantidadEmitida',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridCantidadEmitida,
                width: "20%"
            });

            columns.push({
                data: 'CantidadRecuperada',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridCantidadRecuperada,
                width: "15%"
            });

            columns.push({
                data: 'CantidadNoRecuperada',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridCantidadNoRecuperada,
                width: "15%"
            });

            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditAgenteContaminanteClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.BtnGridDeleteValidate, event: { on: 'click', callBack: base.Event.BtnGridDeleteAgenteContaminanteClick } }
                ]
            });

            base.Control.GrdResultadoAgenteContaminante = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdInformacionGeneralLesion',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacionAgenteContaminante,
                    source: 'Result'
                }
            });
        },
    };

    base.Event = {
        BtnGridDeleteValidate: function (data, type, full) {
            if (base.Control.FormularioModelo.CuerpoReceptorResponse.CodigoEstadoInvestigacion != Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.EstadoInvestigacionPorElaborar)
                return false;
            else
                return true;
        },
        BtnBuscarAgenteContaminanteClick: function () {            
            base.Control.GrdResultadoAgenteContaminante.Load({
                CodigoInvestigacionCuerpoReceptor: base.Control.FormularioModelo.CuerpoReceptorResponse.CodigoInvestigacionCuerpoReceptor
            }); 
        },
        BtnGridDeleteAgenteContaminanteClick: function (row, data) {
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarInvestigacionAgenteContaminante.data = data;
                    base.Ajax.AjaxEliminarInvestigacionAgenteContaminante.submit();
                }
            });
        },
        BtnGridEditAgenteContaminanteClick: function (row, data) {
            data.CodigoEstadoInvestigacion = base.Control.FormularioModelo.CuerpoReceptorResponse.CodigoEstadoInvestigacion;
            base.Control.DlgFormularioAgenteContaminante.Show(data);
        },
        BtnGrabarOtrosDetallesClick: function () {
            'use strict'
            if (base.Control.ValidadorOtrosDetalles.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxActualizarInvestigacionCuerpoReceptor.data = {
                            CodigoInvestigacionCuerpoReceptor: base.Control.FormularioModelo.CuerpoReceptorResponse.CodigoInvestigacionCuerpoReceptor,
                            IndicadorHuboMuerte: base.Control.SlcPregunta1ImpactoOtros().val(),
                            IndicadorMuerteMasiva: base.Control.SlcPregunta2ImpactoOtros().val(),
                            IndicadorPudoHaberMuerte: base.Control.SlcPregunta3ImpactoOtros().val(),
                            IndicadorPudoHaberMuerteMasiva: base.Control.SlcPregunta4ImpactoOtros().val(),
                            CodigoInvestigacionCategoria: base.Control.FormularioModelo.CuerpoReceptorResponse.CodigoInvestigacionCategoria,
                            CodigoConsecuenciaActual: base.Control.SlcConsecuenciaActualMedioAmbiental().val(),
                            CodigoConsecuenciaPotencial: base.Control.SlcConsecuenciaPotencialMedioAmbiental().val(),
                            CodigoCategoriaTextoActual: $('input[name="codigoConsecuenciaActualCuerpoModal"]:checked').data() != undefined ? $('input[name="codigoConsecuenciaActualCuerpoModal"]:checked').data().codigo : '',
                            CodigoCategoriaTextoPotencial: $('input[name="codigoConsecuenciaPotencialCuerpoModal"]:checked').data() != undefined ? $('input[name="codigoConsecuenciaPotencialCuerpoModal"]:checked').data().codigo : ''
                        };
                        base.Ajax.AjaxActualizarInvestigacionCuerpoReceptor.submit();
                    }
                });
            } else {
                $("#frmOtrosDetallesModalSummaryErrorMessage").empty();
                $("#frmOtrosDetallesModalSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },
        BtnGrabarInformacionGeneralClick: function () {
            'use strict'
            if (base.Control.ValidadorInformacionGeneral.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Control.BtnGrabarOtrosDetalles().prop('disabled', false);
                        var listaTipoImpactoAmbiental = [];
                        $(".checkboxClass:checked").each(function () {
                            var that = $(this).val();
                            if (that == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCuerpoReceptorAfectado.DatosConstantes.OtrosCuerpoReceptorAfectado) {
                                listaTipoImpactoAmbiental.push({
                                    CodigoTipoImpacto: that,
                                    OtroTipoImpacto: $('#txtOtros').val()
                                });
                            }
                            else {
                                listaTipoImpactoAmbiental.push({
                                    CodigoTipoImpacto: that
                                });
                            }                    
                        });
                        base.Ajax.AjaxRegistrarInvestigacionCuerpoReceptor.data = {
                            CodigoInvestigacionCuerpoReceptor: base.Control.FormularioModelo.CuerpoReceptorResponse.CodigoInvestigacionCuerpoReceptor,
                            CodigoInvestigacion: base.Control.FormularioModelo.CuerpoReceptorResponse.CodigoInvestigacion,
                            CodigoCuerpoReceptorAfectado: base.Control.SlcCuerpoReceptorAfectado().val(),
                            OtrosCuerpoReceptor: base.Control.TxtOtrosEspecificar().val(),
                            CantidadResiduosPeligrososGenerados: base.Control.TxtCantidadResiduosPeligrososGenerados().val(),
                            CantidadResiduosPeligrososNoGenerados: base.Control.TxtCantidadResiduosPeligrogosNoGenerados().val(),
                            CantidadTopSoil: base.Control.TxtCantidadTopSoil().val(),
                            CantidadSuelo: base.Control.TxtCantidadSueloImpactado().val(),
                            AreaAfectada: base.Control.TxtAreaAfectada().val(),
                            CantidadAnimales: base.Control.TxtCantidadAnimalesMuertos().val(),
                            CantidadFlora: base.Control.TxtFloraAfectada().val(),
                            ListaTipoImpactoAmbiental: listaTipoImpactoAmbiental
                        };
                        base.Ajax.AjaxRegistrarInvestigacionCuerpoReceptor.submit();
                    }
                });
            } else {
                $("#frmInformacionGeneralModalSummaryErrorMessage").empty();
                $("#frmInformacionGeneralModalSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },
        AjaxRegistrarInvestigacionCuerpoReceptorSuccess: function (resultado) {            
            if (resultado.Result.CodigoInvestigacionCuerpoReceptor != null) {
                if (base.Event.ReloadGridSucess != null) {
                    base.Event.ReloadGridSucess();
                }
                base.Control.FormularioModelo.CuerpoReceptorResponse.CodigoInvestigacionCuerpoReceptor = resultado.Result.CodigoInvestigacionCuerpoReceptor;
                base.Control.BtnAgregarAgentesContaminantes().prop("disabled", false);
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxActualizarInvestigacionCuerpoReceptorSuccess: function (resultado) {
            if (resultado.Result.CodigoConsecuenciaActual != '' && resultado.Result.CodigoConsecuenciaActual != null
                && resultado.Result.CodigoConsecuenciaPotencial != '' && resultado.Result.CodigoConsecuenciaPotencial != null) {
                if (base.Event.ReloadGridSucess != null) {
                    base.Event.ReloadGridSucess();
                }
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });

                base.Control.TxtActualConsecuenciaCategoriaImpactoAmbiente().val(resultado.Result.DescripcionConsecuenciaActual);
                base.Control.TxtPotencialConsecuenciaCategoriaImpactoAmbiente().val(resultado.Result.DescripcionConsecuenciaPotencial);
                $('input[name="consecuenciaInvestigacionCategoriaImpactoAmbienteActual"]').each(function (i) {
                    $(this).prop("checked", false);
                });
                $('input[name="consecuenciaInvestigacionCategoriaImpactoAmbientePotencial"]').each(function (i) {
                    $(this).prop("checked", false);
                });
                $('#radioCategoriaImpactoAmbienteActual_' + resultado.Result.CodigoConsecuenciaActual).prop("checked", true);
                $('#radioCategoriaImpactoAmbientePotencial_' + resultado.Result.CodigoConsecuenciaPotencial).prop("checked", true);
            }
            else
            {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        SlcCuerpoReceptorAfectadoChange: function () {
            base.Event.DesabilitarTodosInputs();
            if (base.Control.SlcCuerpoReceptorAfectado().val() != '') {                
                if (base.Control.SlcCuerpoReceptorAfectado().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCuerpoReceptorAfectado.DatosConstantes.CodigoAgua) {
                    base.Control.TxtCantidadAnimalesMuertos().prop('disabled', false);
                }
                else if (base.Control.SlcCuerpoReceptorAfectado().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCuerpoReceptorAfectado.DatosConstantes.CodigoAire) {
                }
                else if (base.Control.SlcCuerpoReceptorAfectado().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCuerpoReceptorAfectado.DatosConstantes.CodigoSuelo) {
                    base.Control.TxtCantidadSueloImpactado().prop('disabled', false);
                    base.Control.TxtAreaAfectada().prop('disabled', false);
                }
                else if (base.Control.SlcCuerpoReceptorAfectado().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCuerpoReceptorAfectado.DatosConstantes.CodigoFauna) {
                    base.Control.TxtCantidadAnimalesMuertos().prop('disabled', false);
                }
                else if (base.Control.SlcCuerpoReceptorAfectado().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCuerpoReceptorAfectado.DatosConstantes.CodigoTSoil) {
                    base.Control.TxtCantidadTopSoil().prop('disabled', false);
                }
                else if (base.Control.SlcCuerpoReceptorAfectado().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioCuerpoReceptorAfectado.DatosConstantes.CodigoOtros) {
                    base.Control.TxtOtrosEspecificar().prop('disabled', false);
                }
            }
        },

        SlcPregunta1ImpactoOtrosChange: function () {
            if (base.Control.SlcPregunta1ImpactoOtros().val() == '01') {
                base.Control.SlcPregunta2ImpactoOtros().val('');
                base.Control.SlcPregunta2ImpactoOtros().attr("disabled", false);

                base.Control.SlcPregunta3ImpactoOtros().val('');
                base.Control.SlcPregunta3ImpactoOtros().attr("disabled", true);
                base.Control.SlcPregunta4ImpactoOtros().val('');
                base.Control.SlcPregunta4ImpactoOtros().attr("disabled", true);
            }
            else if (base.Control.SlcPregunta1ImpactoOtros().val() == '02') {
                base.Control.SlcPregunta2ImpactoOtros().val('');
                base.Control.SlcPregunta2ImpactoOtros().attr("disabled", true);
                
                base.Control.SlcPregunta3ImpactoOtros().val('');
                base.Control.SlcPregunta3ImpactoOtros().attr("disabled", false);
                base.Control.SlcPregunta4ImpactoOtros().val('');
                base.Control.SlcPregunta4ImpactoOtros().attr("disabled", true);
            } else {
                base.Control.SlcPregunta2ImpactoOtros().val('');
                base.Control.SlcPregunta2ImpactoOtros().attr("disabled", true);
                base.Control.SlcPregunta3ImpactoOtros().val('');
                base.Control.SlcPregunta3ImpactoOtros().attr("disabled", true);
                base.Control.SlcPregunta4ImpactoOtros().val('');
                base.Control.SlcPregunta4ImpactoOtros().attr("disabled", true);
            }
        },
        SlcPregunta3ImpactoOtrosChange: function () {
            if (base.Control.SlcPregunta3ImpactoOtros().val() == '01') {
                base.Control.SlcPregunta4ImpactoOtros().val('');
                base.Control.SlcPregunta4ImpactoOtros().attr("disabled", false);
            } else {                
                base.Control.SlcPregunta4ImpactoOtros().val('');
                base.Control.SlcPregunta4ImpactoOtros().attr("disabled", true);
            }
        },
        SlcConsecuenciaActualMedioAmbientalChange: function () {
            'use strict'
            if (base.Control.SlcConsecuenciaActualMedioAmbiental().val() != null && base.Control.SlcConsecuenciaActualMedioAmbiental().val() != '') {
                $('input[name="codigoConsecuenciaActualCuerpoModal"]').each(function (i) {
                    $(this).prop("checked", false);
                });
                $('#radioConsecuenciaActual_' + base.Control.SlcConsecuenciaActualMedioAmbiental().val()).prop("checked", true);
                base.Control.TxtDescripcionConsecuenciaActual().val($('#radioConsecuenciaActual_' + base.Control.SlcConsecuenciaActualMedioAmbiental().val()).data().descripcion);
            }
            else {
                $('input[name="codigoConsecuenciaActualCuerpoModal"]').each(function (i) {
                    $(this).prop("checked", false);
                });
                base.Control.TxtDescripcionConsecuenciaActual().val('');
            }
        },
        SlcConsecuenciaPotencialMedioAmbientalChange: function () {
            'use strict'
            if (base.Control.SlcConsecuenciaPotencialMedioAmbiental().val() != null && base.Control.SlcConsecuenciaPotencialMedioAmbiental().val() != '') {
                $('input[name="codigoConsecuenciaPotencialCuerpoModal"]').each(function (i) {
                    $(this).prop("checked", false);
                });
                $('#radioConsecuenciaPotencial_' + base.Control.SlcConsecuenciaPotencialMedioAmbiental().val()).prop("checked", true);
                base.Control.TxtDescripcionConsecuenciaPotencial().val($('#radioConsecuenciaPotencial_' + base.Control.SlcConsecuenciaPotencialMedioAmbiental().val()).data().descripcion);
            }
            else {
                $('input[name="codigoConsecuenciaPotencialCuerpoModal"]').each(function (i) {
                    $(this).prop("checked", false);
                });
                base.Control.TxtDescripcionConsecuenciaPotencial().val('');
            }
        },
        DesabilitarTodosInputs: function () {
            base.Control.TxtOtrosEspecificar().prop('disabled', true);
            base.Control.TxtCantidadTopSoil().prop('disabled', true);
            base.Control.TxtCantidadSueloImpactado().prop('disabled', true);
            base.Control.TxtAreaAfectada().prop('disabled', true);
            base.Control.TxtCantidadAnimalesMuertos().prop('disabled', true);
            base.Control.TxtFloraAfectada().prop('disabled', true);

            base.Control.TxtOtrosEspecificar().val('');
            base.Control.TxtCantidadTopSoil().val('');
            base.Control.TxtCantidadSueloImpactado().val('');
            base.Control.TxtAreaAfectada().val('');
            base.Control.TxtCantidadAnimalesMuertos().val('');
            base.Control.TxtFloraAfectada().val('');
        },
        BtnAgregarAgentesContaminantesClick: function () {
            if (base.Control.FormularioModelo.CuerpoReceptorResponse.CodigoInvestigacionCuerpoReceptor != undefined
                && base.Control.FormularioModelo.CuerpoReceptorResponse.CodigoInvestigacionCuerpoReceptor != null
                && base.Control.FormularioModelo.CuerpoReceptorResponse.CodigoInvestigacionCuerpoReceptor != '') {
                base.Control.DlgFormularioAgenteContaminante.Show({
                    CodigoInvestigacionCuerpoReceptor: base.Control.FormularioModelo.CuerpoReceptorResponse.CodigoInvestigacionCuerpoReceptor,
                    CodigoEstadoInvestigacion: base.Control.FormularioModelo.CuerpoReceptorResponse.CodigoEstadoInvestigacion
                });
            }
        },
        AjaxEliminarInvestigacionAgenteContaminanteSuccess: function (resultado) {
            if (resultado.Result >= 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnBuscarAgenteContaminanteClick();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        }
    };
    base.Ajax = {
        AjaxRegistrarInvestigacionCuerpoReceptor: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarInvestigacionCuerpoReceptor,
            autoSubmit: false,
            onSuccess: base.Event.AjaxRegistrarInvestigacionCuerpoReceptorSuccess
        }),
        AjaxEliminarInvestigacionAgenteContaminante: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.EliminarInvestigacionAgenteContaminante,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarInvestigacionAgenteContaminanteSuccess
        }),
        AjaxActualizarInvestigacionCuerpoReceptor: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.ActualizarInvestigacionCuerpoReceptor,
            autoSubmit: false,
            onSuccess: base.Event.AjaxActualizarInvestigacionCuerpoReceptorSuccess
        }),
    };
};