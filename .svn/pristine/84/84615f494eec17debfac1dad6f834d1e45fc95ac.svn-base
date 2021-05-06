ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoIndicador.Index');
Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoIndicador.Index.Controller = function () {
    var base = this;

    base.Control = {
        BtnRegresarBandejaIndicador: function () { return $('#btnRegresarBandejaIndicador'); },
        /* Tab Generales*/       
        TxtDescripcionIndicador: function () { return $('#txtDescripcionIndicadorFormulario'); },        
        HdnCodigoResponsable: function () { return $('#hdnCodigoResponsable'); },
        TxtResponsable: function () { return $('#txtCodigoResponsable'); },        
        DtpFechaInicioVigencia: function () { return $('#dtpFechaInicioVigencia'); },
        DtpFechaFinVigencia: function () { return $('#dtpFechaFinVigencia'); },
        SlcArea: function () { return $('#slcArea'); },
        SlcUnidadMedida: function () { return $('#slcUnidadMedida'); },
        SlcPeriodicidad: function () { return $('#slcPeriodicidad'); },
        TxtRatioMaximo: function () { return $('#txtRatioMaximo'); },
        TxtRatioMinimo: function () { return $('#txtRatioMinimo'); },
        TxtPonderacion: function () { return $('#txtPonderacion'); },
        SlcTipoIndicador: function () { return $('#slcTipoIndicador'); },
        TxtIndicadorAmbitoOtros: function () { return $('#txtIndicadorAmbitoOtros'); },
        BtnGuardarGenerales: function () { return $('#btnGuardarGenerales'); },
        FrmGenerales: function () { return $('#frmGenerales'); },
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),        
        ///*Tab Indicador Detalle*/
        //TxtNombreFormula: function () { return $('#txtNombreFormula'); },
        
        BtnAgregarResponsable: function () { return $('#btnBuscarResponsable'); },
        //BtnGuardarIndicadorDetalle: function () { return $('#btnGuardarIndicadorDetalle'); },
        DlgFormularioResponsable: null,
        //FrmIndicadorDetalle: function () { return $('#frmIndicadorDetalle'); },
        //HdnCodigoFormula: function () { return $('#hdnCodigoFormula'); },
        //BtnAgregarFormula: function () { return $('#btnAgregarFormula'); },

        //BtnAbreP: function () { return $('#btnAbreP'); },
        //BtnCierraP: function () { return $('#btnCierraP'); },
        //BtnBack: function () { return $('#btnBack'); },
        //BtnCE: function () { return $('#btnCE'); },
        //BtnSiete: function () { return $('#btnSiete'); },
        //BtnOcho: function () { return $('#btnOcho'); },
        //BtnNueve: function () { return $('#btnNueve'); },
        //BtnSlash: function () { return $('#btnSlash'); },
        //BtnCuatro: function () { return $('#btnCuatro'); },
        //BtnCinco: function () { return $('#btnCinco'); },
        //BtnSeis: function () { return $('#btnSeis'); },
        //BtnAsterico: function () { return $('#btnAsterico'); },
        //BtnUno: function () { return $('#btnUno'); },
        //BtnDos: function () { return $('#btnDos'); },
        //BtnTres: function () { return $('#btnTres'); },
        //BtnResta: function () { return $('#btnResta'); },
        //BtnCero: function () { return $('#btnCero'); },
        //BtnPunto: function () { return $('#btnPunto'); },
        //BtnMas: function () { return $('#btnMas'); },

        ///*Tab Metas*/
        //BtnGuardarIndicadorMeta: function () { return $('#btnGuardarIndicadorMeta'); },
        //FrmIndicadorMeta: function () { return $('#frmIndicadorMeta'); },
        
        //DtpFechaMeta: function () { return $('#dtpFechaMeta'); },
        //SlcSemana: function () { return $('#slcSemana'); },
        //SlcMes: function () { return $('#slcMes'); },
        //SlcTrimestre: function () { return $('#slcTrimestre'); },
        //SlcSemestre: function () { return $('#slcSemestre'); },       
        //TxtAnio: function () { return $('#txtAnio'); },
        //TxtValorMeta: function () { return $('#txtValorMeta'); },        
    };

    base.Ini = function () {
        'use strict'
        base.Control.FormularioModelo = Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoIndicador.Models.Formulario;
        
        //$('#cartTabsIndicador').on('shown.bs.tab', function (e) {
        //    var target = $(e.target).attr("href");            
        //    if (target == "#tabFormula") {
        //        if (base.Control.FormularioModelo.Indicador.CodigoIndicador != null) {
        //            base.Event.BtnBuscarIndicadorDetalle();
        //            $('#divBotonIndicadorDetalle').removeClass('hidden');
        //            $('#divControlesExpresionFormula').removeClass('hidden');                            
        //        };                
        //    }
        //    if (target == "#tabMetas") {
        //        if (base.Control.FormularioModelo.Indicador.CodigoIndicador != null) {
        //            $('#divBotonIndicadorMeta').removeClass('hidden');                    
        //            $('#divControlesIndicadorMeta').removeClass('hidden');                    
        //        };               
        //    }
        //});

        //if (base.Control.SlcPeriodicidad().val() != '' || base.Control.SlcPeriodicidad().val() != null)
        //{
        //    //$('#divtxtAnioMeta').removeClass('hidden');
        //    $('#divtxtValorMeta').removeClass('hidden');
        //    $('#divtxtAnio').removeClass('hidden');
        //}
        
        base.Control.BtnRegresarBandejaIndicador().on('click', base.Event.BtnRegresarBandejaIndicadorClick);

        /*Tab Generales*/
        base.Control.BtnGuardarGenerales().off('click');
        base.Control.BtnGuardarGenerales().on('click', base.Event.BtnGuardarGeneralesClick);

        base.Control.DtpFechaInicioVigencia().datepicker({
            dateFormat: 'dd/mm/yy'
        });
        base.Control.DtpFechaFinVigencia().datepicker({
            dateFormat: 'dd/mm/yy'
        });

        base.Control.ValidadorGenerales = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmGenerales(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionCheckBoxOtros()
        });
        
        base.Control.TxtPonderacion().off('keypress');
        base.Control.TxtPonderacion().on('keypress', base.Event.ValidaNumeroDecimalKeypress);

        base.Control.TxtRatioMaximo().off('keypress');
        base.Control.TxtRatioMaximo().on('keypress', base.Event.ValidaNumeroDecimalKeypress);

        base.Control.TxtRatioMinimo().off('keypress');
        base.Control.TxtRatioMinimo().on('keypress', base.Event.ValidaNumeroDecimalKeypress);

        //base.Control.TxtValorMeta().off('keypress');
        //base.Control.TxtValorMeta().on('keypress', base.Event.ValidaNumeroDecimalKeypress);

        //base.Control.TxtAnio().off('keypress');
        //base.Control.TxtAnio().on('keypress', base.Event.ValidaNumeroEnteroKeypress);       

        ///*Tab Indicador Detalle*/
        //base.Function.CrearGridVariable();
        //base.Event.BtnBuscarVariable();
        
        base.Control.BtnAgregarResponsable().off('click');
        base.Control.BtnAgregarResponsable().on('click', base.Event.BtnAgregarResponsableClick);

        base.Control.DlgFormularioResponsable = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Responsable.FormularioBuscadorResponsable.Controller({
            AceptarSuccess: base.Event.AsignarValoresResponsableClick
        });       

        //base.Control.BtnGuardarIndicadorDetalle().off('click');
        //base.Control.BtnGuardarIndicadorDetalle().on('click', base.Event.BtnGuardarIndicadorDetalleClick);
       
        //base.Control.ValidadorIndicadorDetalle = new Pe.GMD.UI.Web.Components.Validator({
        //    form: base.Control.FrmIndicadorDetalle(),
        //    messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos
        //});

        ///*Tab Meta*/
        //base.Control.DtpFechaMeta().datepicker({
        //    dateFormat: 'dd/mm/yy'
        //});

        //base.Function.CrearGridIndicadorMeta();
        //base.Event.BtnBuscarIndicadorMeta();

        //base.Control.SlcPeriodicidad().off('change');
        //base.Control.SlcPeriodicidad().on('change', base.Event.SlcPeriodicidadChange);

        //base.Function.VerificaPeriodicidad();

        //base.Control.BtnGuardarIndicadorMeta().off('click');
        //base.Control.BtnGuardarIndicadorMeta().on('click', base.Event.BtnGuardarIndicadorMetaClick);

        //base.Control.ValidadorIndicadorMeta = new Pe.GMD.UI.Web.Components.Validator({
        //    form: base.Control.FrmIndicadorMeta(),
        //    messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,            
        //});

        //Checks
        if (base.Control.FormularioModelo.ListaIndicadorAmbito != null && base.Control.FormularioModelo.ListaIndicadorAmbito.length > 0) {
            for (var i = 0; i < base.Control.FormularioModelo.ListaIndicadorAmbito.length; i++) {
                if (base.Control.FormularioModelo.ListaIndicadorAmbito[i].IndicadorAmbito == 4) {
                    base.Control.TxtIndicadorAmbitoOtros().val(base.Control.FormularioModelo.ListaIndicadorAmbito[i].IndicadorAmbitoOtros);
                    if (base.Control.FormularioModelo.ListaIndicadorAmbito[i].IndicadorAmbitoOtros != '')
                        base.Control.TxtIndicadorAmbitoOtros().prop('disabled', false);
                }
                $('#id_' + base.Control.FormularioModelo.ListaIndicadorAmbito[i].CodigoAmbito).prop("checked", true);
            }
        }

        $('.checkboxClass').change(function () {
            if (this.checked && this.value == 4) {
                base.Control.TxtIndicadorAmbitoOtros().prop('disabled', false);
            } else {
                base.Control.TxtIndicadorAmbitoOtros().val('');
                base.Control.TxtIndicadorAmbitoOtros().prop('disabled', true);

            }
        });

        //base.Control.BtnAgregarFormula().on('click', base.Event.BtnAgregarFormulaClick);

        ////CALCULADORA

        //base.Control.BtnCE().on('click', base.Event.BtnCEClick);
        //base.Control.BtnAbreP().on('click', base.Event.BtnAbrePClick);
        //base.Control.BtnCierraP().on('click', base.Event.BtnCierraPClick);
        //base.Control.BtnBack().on('click', base.Event.BtnBackClick);
        //base.Control.BtnSiete().on('click', base.Event.BtnSieteClick);
        //base.Control.BtnOcho().on('click', base.Event.BtnOchoClick);
        //base.Control.BtnNueve().on('click', base.Event.BtnNueveClick);
        //base.Control.BtnSlash().on('click', base.Event.BtnSlashClick);
        //base.Control.BtnCuatro().on('click', base.Event.BtnCuatroClick);
        //base.Control.BtnCinco().on('click', base.Event.BtnCincoClick);
        //base.Control.BtnSeis().on('click', base.Event.BtnSeisClick);
        //base.Control.BtnAsterico().on('click', base.Event.BtnAstericoClick);
        //base.Control.BtnUno().on('click', base.Event.BtnUnoClick);
        //base.Control.BtnDos().on('click', base.Event.BtnDosClick);
        //base.Control.BtnTres().on('click', base.Event.BtnTresClick);
        //base.Control.BtnResta().on('click', base.Event.BtnRestaClick);
        //base.Control.BtnCero().on('click', base.Event.BtnCeroClick);
        //base.Control.BtnPunto().on('click', base.Event.BtnPuntoClick);
        //base.Control.BtnMas().on('click', base.Event.BtnMasClick);
    };

    base.Event = {
        BtnBuscarVariable: function () {
            var filtro = {
            };
            base.Control.GrdResultadoVariable.Load(filtro);
        },       
        BtnRegresarBandejaIndicadorClick: function () {
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoIndicador.Actions.BandejaIndicador, {});
        },
        /*Tab Generales*/
        BtnGuardarGeneralesClick: function () {
            if (base.Control.ValidadorGenerales.isValid()) {

                //Verifica checks marcados 
                var listaIndicadorAmbito = [];
                $('.checkboxClass:checked').each(function (i) {
                    var that = $(this).val();
                    if (that == 4) {
                        listaIndicadorAmbito.push({
                            CodigoAmbito: that,
                            AmbitoOtros: base.Control.TxtIndicadorAmbitoOtros().val()
                        });
                    }
                    else {
                        listaIndicadorAmbito.push({
                            CodigoAmbito: that
                        });
                    }
                });

                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarIndicador.data = {
                            CodigoIndicador: base.Control.FormularioModelo.Indicador.CodigoIndicador,                            
                            DescripcionIndicador: base.Control.TxtDescripcionIndicador().val(),                                   
                            CodigoResponsable: base.Control.HdnCodigoResponsable().val(),
                            CodigoPeriodicidad: base.Control.SlcPeriodicidad().val(),
                            CodigoUnidadMedida: base.Control.SlcUnidadMedida().val(),
                            CodigoArea: base.Control.SlcArea().val(),
                            FechaInicioVigencia: base.Control.DtpFechaInicioVigencia().val(),
                            FechaFinVigencia: base.Control.DtpFechaFinVigencia().val(),
                            RatioMaximo: base.Control.TxtRatioMaximo().val(),
                            RatioMinimo: base.Control.TxtRatioMinimo().val(),
                            Ponderacion: base.Control.TxtPonderacion().val(),
                            CodigoTipoIndicador: base.Control.SlcTipoIndicador().val(),                         
                            ListaIndicadorAmbito: listaIndicadorAmbito,
                        };
                        base.Ajax.AjaxRegistrarIndicador.submit();
                    }
                });
            } else {
                $("#frmGeneralesSummaryErrorMessage").empty();
                $("#frmGeneralesSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.MsgValideCampos + "</p>");
                return false;
            }
        },
        ///*Tab Indicador Detalle*/
        //BtnAgregarFormulaClick: function () {
        //    $('#divControlesIngresoFormula').removeClass('hidden');            
        //},
        BtnAgregarResponsableClick: function () {
            'use strict'
            base.Control.DlgFormularioResponsable.Show();
        },        
        //BtnGuardarIndicadorDetalleClick: function () {            
        //    if (base.Control.ValidadorIndicadorDetalle.isValid()) {
        //        base.Control.Mensaje.Confirmation({
        //            title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
        //            message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
        //            onAccept: function () {
        //                base.Ajax.AjaxRegistrarIndicadorDetalle.data = {                            
        //                    CodigoIndicador: base.Control.FormularioModelo.Indicador.CodigoIndicador,
        //                    NombreFormula: base.Control.TxtNombreFormula().val()
        //                };
        //                base.Ajax.AjaxRegistrarIndicadorDetalle.submit();
        //            }
        //        });
        //    } else {
        //        $("#frmIndicadorDetalleSummaryErrorMessage").empty();
        //        $("#frmIndicadorDetalleSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.MsgValideCampos + "</p>");
        //        return false;
        //    }
        //},
        //BtnBuscarIndicadorDetalle: function () {
        //    CodigoIndicador: base.Control.FormularioModelo.Indicador.CodigoIndicador
        //},
        AsignarValoresResponsableClick: function (objResponsable) {
            'use strict'          
            base.Control.TxtResponsable().val(objResponsable[0].NombreCompleto);
            base.Control.HdnCodigoResponsable().val(objResponsable[0].CodigoResponsable);
        },
        //BtnGridEditIndicadorDetalleClick: function (row, data) {
        //    base.Control.TxtNombreFormula().val(data.CodigoObjetivoEstrategicoEmpresa);
        //    base.Control.FormularioModelo.IndicadorDetalle.CodigoIndicadorDetalle = data.CodigoIndicadorDetalle;
        //},
        //BtnGridDeleteIndicadorDetalleClick: function (row, data) {
        //    'use strict'
        //    if (data.EstadoRegistro != Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inactivo) {
        //        base.Control.Mensaje.Delete({
        //            message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaMensajeEliminarRegistro,
        //            onAccept: function () {
        //                base.Ajax.AjaxEliminarIndicadorDetalle.data = {
        //                    CodigoIndicadorDetalle: data.CodigoIndicadorDetalle,
        //                };
        //                base.Ajax.AjaxEliminarIndicadorDetalle.submit();
        //            }
        //        });
        //    }
        //    else {
        //        base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.RegistroInactivo });
        //    }

        //},
        //ValidaNumeroDecimalKeypress: function (e) {                       
        //    var field = $(this);
        //    key = e.keyCode ? e.keyCode : e.which;

        //    if (key == 8) return true;
        //    if (key > 47 && key < 58) {
        //        if (field.val() === "") return true;
        //        var existePto = (/[.]/).test(field.val());
        //        if (existePto === false) {
        //            regexp = /.[0-9]{10}$/;
        //        }
        //        else {
        //            regexp = /.[0-9]{2}$/;
        //        }

        //        return !(regexp.test(field.val()));
        //    }
        //    if (key == 46) {
        //        if (field.val() === "") return false;
        //        regexp = /^[0-9]+$/;
        //        return regexp.test(field.val());
        //    }
        //    return false;
        //},
        //ValidaNumeroEnteroKeypress: function (e) {
        //    if (event.keyCode < 48 || event.keyCode > 57) {
        //        event.returnValue = false;
        //    }
        //},

        ///*Tab Metas*/
        //BtnBuscarIndicadorMeta: function () {
        //    base.Control.GrdResultadoIndicadorMeta.Load({
        //        CodigoIndicador: base.Control.FormularioModelo.Indicador.CodigoIndicador
        //    });
        //},
        //BtnGuardarIndicadorMetaClick: function () {
        //    var valorSubTipoPeriodicidad = '';

        //    if (base.Control.DtpFechaMeta().val() != '') {
        //        valorSubTipoPeriodicidad = base.Control.DtpFechaMeta().val();                
        //    }
        //    if (base.Control.SlcSemana().val() != '') {
        //        valorSubTipoPeriodicidad = base.Control.SlcSemana().val();               
        //    }
        //    if (base.Control.SlcMes().val() != '') {
        //        valorSubTipoPeriodicidad = base.Control.SlcMes().val();                
        //    }
        //    if (base.Control.SlcTrimestre().val() != '') {
        //        valorSubTipoPeriodicidad = base.Control.SlcTrimestre().val();                
        //    }
        //    if (base.Control.SlcSemestre().val() != '') {
        //        valorSubTipoPeriodicidad = base.Control.SlcSemestre().val();                
        //    }

        //    if (base.Control.ValidadorIndicadorMeta.isValid()) {
        //        base.Control.Mensaje.Confirmation({
        //            title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
        //            message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
        //            onAccept: function () {
        //                base.Ajax.AjaxRegistrarIndicadorMeta.data = {
        //                    CodigoIndicador: base.Control.FormularioModelo.Indicador.CodigoIndicador,
        //                    Anio: base.Control.TxtAnio().val(),
        //                    CodigoSubTipoPeriodicidad: valorSubTipoPeriodicidad,
        //                    ValorMeta: base.Control.TxtValorMeta().val()
        //                };
        //                base.Ajax.AjaxRegistrarIndicadorMeta.submit();
        //            }
        //        });
        //    } else {
        //        $("#frmGeneralesSummaryErrorMessage").empty();
        //        $("#frmGeneralesSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.MsgValideCampos + "</p>");
        //        return false;
        //    }
        //},
        //BtnGridDeleteIndicadorMetaClick: function (row, data) {
        //    'use strict'
        //    if (data.EstadoRegistro != Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inactivo) {
        //        base.Control.Mensaje.Delete({
        //            message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaMensajeEliminarRegistro,
        //            onAccept: function () {
        //                base.Ajax.AjaxEliminarIndicadorMeta.data = {
        //                    CodigoIndicadorMeta: data.CodigoIndicadorMeta,
        //                };
        //                base.Ajax.AjaxEliminarIndicadorMeta.submit();
        //            }
        //        });
        //    }
        //    else {
        //        base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.RegistroInactivo });
        //    }

        //},

        ////CALCULADORA
        //BtnCEClick: function () {            
        //    base.Control.TxtNombreFormula().val('');
        //},
        //BtnAbrePClick: function () {
        //    base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + '(');
        //},
        //BtnCierraPClick: function () {
        //    base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + ')');
        //},
        //BtnBackClick: function () { 
        //    var cifras = base.Control.TxtNombreFormula().val().length; //hayar número de caracteres en TxtNombreFormula
        //    var br = base.Control.TxtNombreFormula().val().substring(cifras - 1, cifras) //describir último caracter
        //    var x = base.Control.TxtNombreFormula().val().substring(0, cifras - 1) //quitar el ultimo caracter            
        //    base.Control.TxtNombreFormula().val(x);//mostrar resultado en TxtNombreFormula
        //},
        //BtnSieteClick: function () {
        //    base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + '7');
        //},
        //BtnOchoClick: function () {
        //    base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + '8');
        //},
        //BtnNueveClick: function () {
        //    base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + '9');
        //},
        //BtnSlashClick: function () {
        //    base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + '/');
        //},
        //BtnCuatroClick: function () {
        //    base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + '4');
        //},
        //BtnCincoClick: function () {
        //    base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + '5');
        //},
        //BtnSeisClick: function () {
        //    base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + '6');
        //},
        //BtnAstericoClick: function () {
        //    base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + '*');
        //},
        //BtnUnoClick: function () {
        //    base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + '1');
        //},
        //BtnDosClick: function () {
        //    base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + '2');
        //},
        //BtnTresClick: function () {
        //    base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + '3');
        //},
        //BtnRestaClick: function () {
        //    base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + '-');
        //},
        //BtnCeroClick: function () {
        //    base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + '0');
        //},
        //BtnPuntoClick: function () {
        //    base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + '.');
        //},
        //BtnMasClick: function () {
        //    base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + '+');
        //},

        ///*Tab Meta*/
        //SlcPeriodicidadChange: function () {
        //    base.Function.VerificaPeriodicidad();
        //},
    };

    base.AjaxSuccess = {
        /*Tab Generales*/
        AjaxRegistrarIndicadorSuccess: function (resultado) {

            if (resultado.IsSuccess == true) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                if (resultado.Result != null) {                   
                    base.Control.FormularioModelo.Indicador.CodigoIndicador = resultado.Result.CodigoIndicador;                                       
                }
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        ///*Tab IndicadorDetalle*/
        //AjaxRegistrarIndicadorDetalleSuccess: function (resultado) {
        //    if (resultado.IsSuccess && resultado.Result != null) { //&& resultado.Result.CodigoIndicador != null
        //        base.Control.Mensaje.Information({
        //            title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
        //            message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
        //        });
        //        base.Event.BtnBuscarIndicadorDetalle();
        //    }
        //    else {
        //        base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
        //    }
        //},
        //AjaxEliminarIndicadorDetalleSuccess: function (data) {
        //    'use strict'
        //    debugger
        //    if (data.IsSuccess) {
        //        base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito });//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaEliminacionExitosa });
        //        base.Event.BtnBuscarIndicadorDetalle();
        //    }
        //    else {
        //        base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro })//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaErrorRegistro });
        //    }
        //},
        ///*Tab Metas*/
        //AjaxRegistrarIndicadorMetaSuccess: function (resultado) {
        //    if (resultado.IsSuccess && resultado.Result != null) { //&& resultado.Result.CodigoIndicador != null
        //        base.Control.Mensaje.Information({
        //            title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
        //            message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
        //        });
        //        base.Event.BtnBuscarIndicadorMeta();
        //    }
        //    else {
        //        base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
        //    }
        //},
        //AjaxEliminarIndicadorMetaSuccess: function (data) {
        //    'use strict'           
        //    if (data.IsSuccess) {
        //        base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito });//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaEliminacionExitosa });                
        //        base.Event.BtnBuscarIndicadorMeta();
        //    }
        //    else {
        //        base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro })//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaErrorRegistro });
        //    }
        //},
    };

    base.Ajax = {
        /*Tab Generales*/
        AjaxRegistrarIndicador: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoIndicador.Actions.RegistrarIndicador,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarIndicadorSuccess
        }),
        ///*Tab IndicadorDetalle*/
        //AjaxRegistrarIndicadorDetalle: new Pe.GMD.UI.Web.Components.Ajax({
        //    action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoIndicador.Actions.RegistraFormula,
        //    autoSubmit: false,
        //    onSuccess: base.AjaxSuccess.AjaxRegistrarIndicadorDetalleSuccess
        //}),
        //AjaxEliminarIndicadorDetalle: new Pe.GMD.UI.Web.Components.Ajax({
        //    action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoIndicador.Actions.EliminarIndicadorDetalle,
        //    autoSubmit: false,
        //    onSuccess: base.AjaxSuccess.AjaxEliminarIndicadorDetalleSuccess
        //}),
        ///*Tab Metas*/
        //AjaxRegistrarIndicadorMeta: new Pe.GMD.UI.Web.Components.Ajax({
        //    action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoIndicador.Actions.RegistrarIndicadorMeta,
        //    autoSubmit: false,
        //    onSuccess: base.AjaxSuccess.AjaxRegistrarIndicadorMetaSuccess
        //}),
        //AjaxEliminarIndicadorMeta: new Pe.GMD.UI.Web.Components.Ajax({
        //    action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoIndicador.Actions.EliminarIndicadorMeta,
        //    autoSubmit: false,
        //    onSuccess: base.AjaxSuccess.AjaxEliminarIndicadorMetaSuccess
        //})
    };

    base.Function = {
        //CrearGridIndicadorMeta: function () {
        //    var columns = new Array();
        //    columns.push({
        //        data: 'Anio',
        //        title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoIndicador.Resource.GridAnio,
        //        width: "10%"
        //    });
        //    columns.push({
        //        data: 'DescripcionSubTipoPeriodicidad',
        //        title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoIndicador.Resource.GridSubTipoPeriodicidad,
        //        width: "10%"
        //    });
        //    columns.push({
        //        data: 'ValorMeta',
        //        title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoIndicador.Resource.GridValorMeta,
        //        width: "10%"
        //    });
        //    columns.push({
        //        "data": "",
        //        "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
        //        "class": "controls",
        //        width: "12%",
        //        actionButtons: [
        //            //{ type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditIndicadorMetaClick } },
        //            { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteIndicadorMetaClick } }
        //        ]
        //    });
        //    base.Control.GrdResultadoIndicadorMeta = new Pe.GMD.UI.Web.Components.Grid({
        //        renderTo: 'divGrdIndicadorMeta',
        //        columns: columns,
        //        filterColumn: false,
        //        hasSelectionRows: false,
        //        hasPaging: true,
        //        hasPagingServer: true,
        //        columnDefs: [{ sWidth: '60px', aTargets: [1] }],
        //        scrollX: '',
        //        proxy: {
        //            url: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoIndicador.Actions.BuscarIndicadorMeta,
        //            source: 'Result'
        //        },
        //        returnCallbackComplete: function (instancia, records) {
        //        }
        //    });
        //},

        ValidacionCheckBoxOtros: function () {
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
                        $("#lblCheckIndicadorAmbito").attr('class', 'checkboxClass');
                    }
                    else {
                        $("#lblCheckIndicadorAmbito").attr('class', 'checkboxClass hasError');
                    }                    

                    $('.checkboxClass:checked').each(function (i) {
                        var that = $(this).val();
                        if (that == 4) {
                            if (base.Control.TxtIndicadorAmbitoOtros().val() == null || base.Control.TxtIndicadorAmbitoOtros().val() == '') {
                                resultado = false;
                            }
                            if (resultado) {
                                base.Control.TxtIndicadorAmbitoOtros().attr('class', 'form-control');
                            } else {
                                base.Control.TxtIndicadorAmbitoOtros().attr('class', 'form-control hasError');
                            }
                        } else {
                            base.Control.TxtIndicadorAmbitoOtros().attr('class', 'form-control');
                        }
                    });

                    return resultado;
                }
            });
            return validaciones;
        },
        
        //CrearGridVariable: function () {
        //    var columns = new Array();
        //    //columns.push({
        //    //    filter: { enabled: true, type: "textbox" },
        //    //    data: 'CodigoVariable',
        //    //    title: "Codigo",//Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoIndicador.Resource.GridNombreVariable,
        //    //    //visible: false,
        //    //    width: "20%"
        //    //});
        //    columns.push({
        //        filter: { enabled: true, type: "textbox" },
        //        data: 'NombreVariable',
        //        title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoIndicador.Resource.GridNombreVariable,                
        //        width: "80%"
        //    });           
        //    base.Control.GrdResultadoVariable = new Pe.GMD.UI.Web.Components.Grid({
        //        renderTo: 'divGrdResult',
        //        columns: columns,
        //        filterColumn: true,
        //        hasSelectionRows: false,
        //        hasPaging: true,
        //        hasPagingServer: true,
        //        columnDefs: [{ sWidth: '60px', aTargets: [1] }],
        //        scrollX: '',
        //        select: true,
        //        proxy: {
        //            url: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoIndicador.Actions.BuscarVariable,
        //            source: 'Result'
        //        },
        //        returnCallbackComplete: function (instancia, records) {
        //        }
        //    });
        //},

        /*Tab Meta*/

        //VerificaPeriodicidad: function () {
        //    if (base.Control.SlcPeriodicidad().val() == Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoIndicador.DatosConstantes.PeriodicidadDiaria) {
        //        $('#divdtpFechaMeta').removeClass('hidden');
        //        $('#divslcSemana').addClass('hidden');
        //        $('#divslcMes').addClass('hidden');
        //        $('#divslcTrimestre').addClass('hidden');
        //        $('#divslcSemestre').addClass('hidden');
        //        //$('#divtxtAnioMeta').addClass('hidden');
        //        $('#divtxtValorMeta').removeClass('hidden');
        //        $('#divtxtAnio').addClass('hidden');
        //    } else if (base.Control.SlcPeriodicidad().val() == Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoIndicador.DatosConstantes.PeriodicidadSemanal) {
        //        $('#divslcSemana').removeClass('hidden');
        //        $('#divdtpFechaMeta').addClass('hidden');
        //        $('#divslcMes').addClass('hidden');
        //        $('#divslcTrimestre').addClass('hidden');
        //        $('#divslcSemestre').addClass('hidden');
        //        //$('#divtxtAnioMeta').addClass('hidden');
        //        $('#divtxtValorMeta').removeClass('hidden');
        //        $('#divtxtAnio').removeClass('hidden');
        //    }
        //    else if (base.Control.SlcPeriodicidad().val() == Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoIndicador.DatosConstantes.PeriodicidadMensual) {
        //        $('#divslcMes').removeClass('hidden');
        //        $('#divslcSemana').addClass('hidden');
        //        $('#divdtpFechaMeta').addClass('hidden');
        //        $('#divslcTrimestre').addClass('hidden');
        //        $('#divslcSemestre').addClass('hidden');
        //        //$('#divtxtAnioMeta').addClass('hidden');
        //        $('#divtxtValorMeta').removeClass('hidden');
        //        $('#divtxtAnio').removeClass('hidden');
        //    }
        //    else if (base.Control.SlcPeriodicidad().val() == Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoIndicador.DatosConstantes.PeriodicidadTrimestral) {
        //        $('#divslcTrimestre').removeClass('hidden');
        //        $('#divslcMes').addClass('hidden');
        //        $('#divslcSemana').addClass('hidden');
        //        $('#divdtpFechaMeta').addClass('hidden');
        //        $('#divslcSemestre').addClass('hidden');
        //        //$('#divtxtAnioMeta').addClass('hidden');
        //        $('#divtxtValorMeta').removeClass('hidden');
        //        $('#divtxtAnio').removeClass('hidden');
        //    }
        //    else if (base.Control.SlcPeriodicidad().val() == Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoIndicador.DatosConstantes.PeriodicidadSemestral) {
        //        $('#divslcSemestre').removeClass('hidden');
        //        $('#divslcTrimestre').addClass('hidden');
        //        $('#divslcMes').addClass('hidden');
        //        $('#divslcSemana').addClass('hidden');
        //        $('#divdtpFechaMeta').addClass('hidden');                
        //        //$('#divtxtAnioMeta').addClass('hidden');
        //        $('#divtxtValorMeta').removeClass('hidden');
        //        $('#divtxtAnio').removeClass('hidden');
        //    }
        //    else if (base.Control.SlcPeriodicidad().val() == Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.IngresoIndicador.DatosConstantes.PeriodicidadAnual) {
        //        //$('#divtxtAnioMeta').removeClass('hidden');
        //        $('#divdtpFechaMeta').addClass('hidden');
        //        $('#divslcSemana').addClass('hidden');
        //        $('#divslcMes').addClass('hidden');
        //        $('#divslcTrimestre').addClass('hidden');
        //        $('#divslcSemestre').addClass('hidden');
        //        $('#divtxtValorMeta').removeClass('hidden');
        //        $('#divtxtAnio').removeClass('hidden');
        //    }
        //}
    };
};