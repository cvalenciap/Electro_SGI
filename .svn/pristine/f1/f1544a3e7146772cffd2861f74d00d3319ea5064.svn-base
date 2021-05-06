ns('Pe.ElectroPeru.SGI.Presentacion.Proceso.FormularioValorIndicador.Index');
Pe.ElectroPeru.SGI.Presentacion.Proceso.FormularioValorIndicador.Index.Controller = function (opts) {
    $(document).on("click", "tr[role='row']", function () {       
        $("#txtNombreFormula").val($("#txtNombreFormula").val() + '[' + $(this).children('td:first-child').text() + ']')
    });
    var base = this;

    base.Control = {
        HdnCodigoAmbito: function () { return $('#hdnCodigoAmbito'); },
        HdnCodigoPeriodicidad: function () { return $('#hdnCodigoPeriodicidad'); },
        HdnCodigoIndicador: function () { return $('#hdnCodigoIndicador'); },
        TxtNombreIndicador: function () { return $('#txtNombreIndicador'); },
        TxtSeguimientoValInd: function () { return $('#txtSeguimientoValInd'); },
        
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),

        /*Tab Indicador Detalle*/
        TxtNombreFormula: function () { return $('#txtNombreFormula'); },        
        BtnAgregarResponsable: function () { return $('#btnBuscarResponsable'); },
        BtnGuardarIndicadorDetalle: function () { return $('#btnGuardarIndicadorDetalle'); },       
        FrmIndicadorDetalle: function () { return $('#frmIndicadorDetalle'); },
        HdnCodigoFormula: function () { return $('#hdnCodigoFormula'); },
        BtnAgregarFormula: function () { return $('#btnAgregarFormula'); },

        BtnAbreP: function () { return $('#btnAbreP'); },
        BtnCierraP: function () { return $('#btnCierraP'); },
        BtnBack: function () { return $('#btnBack'); },
        BtnCE: function () { return $('#btnCE'); },
        BtnSiete: function () { return $('#btnSiete'); },
        BtnOcho: function () { return $('#btnOcho'); },
        BtnNueve: function () { return $('#btnNueve'); },
        BtnSlash: function () { return $('#btnSlash'); },
        BtnCuatro: function () { return $('#btnCuatro'); },
        BtnCinco: function () { return $('#btnCinco'); },
        BtnSeis: function () { return $('#btnSeis'); },
        BtnAsterico: function () { return $('#btnAsterico'); },
        BtnUno: function () { return $('#btnUno'); },
        BtnDos: function () { return $('#btnDos'); },
        BtnTres: function () { return $('#btnTres'); },
        BtnResta: function () { return $('#btnResta'); },
        BtnCero: function () { return $('#btnCero'); },
        BtnPunto: function () { return $('#btnPunto'); },
        BtnMas: function () { return $('#btnMas'); },

        /*Tab Metas*/
        BtnGuardarIndicadorMeta: function () { return $('#btnGuardarIndicadorMeta'); },
        FrmIndicadorMeta: function () { return $('#frmIndicadorMeta'); },

        DtpFechaMeta: function () { return $('#dtpFechaMeta'); },
        SlcSemana: function () { return $('#slcSemana'); },
        SlcMes: function () { return $('#slcMes'); },
        SlcTrimestre: function () { return $('#slcTrimestre'); },
        SlcSemestre: function () { return $('#slcSemestre'); },
        TxtAnio: function () { return $('#txtAnio'); },
        TxtValorMeta: function () { return $('#txtValorMeta'); },

        /*Tab MetaAnuals*/
        BtnGuardarIndicadorMetaAnual: function () { return $('#btnGuardarIndicadorMetaAnual'); },
        FrmIndicadorMetaAnual: function () { return $('#frmIndicadorMetaAnual'); },        
        TxtAnioMetaAnual: function () { return $('#txtAnioMetaAnual'); },
        TxtValorMetaAnual: function () { return $('#txtValorMetaAnual'); },

        /*Tab Valor*/
        BtnGuardarIndicadorValor: function () { return $('#btnGuardarIndicadorValor'); },
        FrmIndicadorValor: function () { return $('#frmIndicadorValor'); },
        DtpFechaValor: function () { return $('#dtpFechaValor'); },
        SlcSemanaValor: function () { return $('#slcSemanaValor'); },
        SlcMesValor: function () { return $('#slcMesValor'); },
        SlcTrimestreValor: function () { return $('#slcTrimestreValor'); },
        SlcSemestreValor: function () { return $('#slcSemestreValor'); },
        TxtAnioValor: function () { return $('#txtAnioValor'); },
        TxtValorReal: function () { return $('#txtValorReal'); },

        /*Tab Evaluacion*/
        BtnGuardarIndicadorEvaluacion: function () { return $('#btnGuardarIndicadorEvaluacion'); },
        FrmIndicadorEvaluacion: function () { return $('#frmIndicadorEvaluacion'); },
        DtpFechaEvaluacion: function () { return $('#dtpFechaEvaluacion'); },
        SlcSemanaEvaluacion: function () { return $('#slcSemanaEvaluacion'); },
        SlcMesEvaluacion: function () { return $('#slcMesEvaluacion'); },
        SlcTrimestreEvaluacion: function () { return $('#slcTrimestreEvaluacion'); },
        SlcSemestreEvaluacion: function () { return $('#slcSemestreEvaluacion'); },
        TxtAnioEvaluacion: function () { return $('#txtAnioEvaluacion'); },
        TxtValorEvaluacion: function () { return $('#txtValorEvaluacion'); },
    };

    base.Ini = function () {
        'use strict'

        if (base.Control.HdnCodigoAmbito().val() == Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.DatosConstantes.PlanEstrategico)
        {
            $('#divMetaAnual').removeClass('hidden');
        }

        if (base.Control.HdnCodigoAmbito().val() == Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.DatosConstantes.PlanOperativo) {           
            $('#divMeta').removeClass('hidden');
            $('#divValor').removeClass('hidden');
            $('#divEvaluacion').removeClass('hidden');
        }

        /*Fórmula*/
        base.Event.BtnBuscarIndicadorDetalle();
        $('#divBotonIndicadorDetalle').removeClass('hidden');
        $('#divControlesExpresionFormula').removeClass('hidden');

        base.Control.BtnAgregarFormula().off('click');
        base.Control.BtnAgregarFormula().on('click', base.Event.BtnAgregarFormulaClick);

        /*Metas*/        
        $('#divBotonIndicadorMeta').removeClass('hidden');
        $('#divControlesIndicadorMeta').removeClass('hidden');

        if (base.Control.HdnCodigoPeriodicidad().val() != '' || base.Control.HdnCodigoPeriodicidad().val() != null) {            
            $('#divtxtValorMeta').removeClass('hidden');
            $('#divtxtAnio').removeClass('hidden');
        }        

        base.Control.TxtValorMeta().off('keypress');
        base.Control.TxtValorMeta().on('keypress', base.Event.ValidaNumeroDecimalKeypress);

        base.Control.TxtAnio().off('keypress');
        base.Control.TxtAnio().on('keypress', base.Event.ValidaNumeroEnteroKeypress);

        /*MetaAnual*/        
        base.Control.TxtValorMetaAnual().off('keypress');
        base.Control.TxtValorMetaAnual().on('keypress', base.Event.ValidaNumeroDecimalKeypress);

        base.Control.TxtAnioMetaAnual().off('keypress');
        base.Control.TxtAnioMetaAnual().on('keypress', base.Event.ValidaNumeroEnteroKeypress);

        /*Valor*/
        $('#divBotonIndicadorValor').removeClass('hidden');
        $('#divControlesIndicadorValor').removeClass('hidden');

        if (base.Control.HdnCodigoPeriodicidad().val() != '' || base.Control.HdnCodigoPeriodicidad().val() != null) {
            $('#divtxtValorReal').removeClass('hidden');
            $('#divtxtAnioValor').removeClass('hidden');
        }

        base.Control.TxtValorReal().off('keypress');
        base.Control.TxtValorReal().on('keypress', base.Event.ValidaNumeroDecimalKeypress);

        base.Control.TxtAnioValor().off('keypress');
        base.Control.TxtAnioValor().on('keypress', base.Event.ValidaNumeroEnteroKeypress);

        /*Evaluacion*/
        $('#divBotonIndicadorEvaluacion').removeClass('hidden');
        $('#divControlesIndicadorEvaluacion').removeClass('hidden');

        if (base.Control.HdnCodigoPeriodicidad().val() != '' || base.Control.HdnCodigoPeriodicidad().val() != null) {
            $('#divtxtEvaluacionReal').removeClass('hidden');
            $('#divtxtAnioEvaluacion').removeClass('hidden');
        }

        base.Control.TxtValorEvaluacion().off('keypress');
        base.Control.TxtValorEvaluacion().on('keypress', base.Event.ValidaNumeroDecimalKeypress);

        base.Control.TxtAnioEvaluacion().off('keypress');
        base.Control.TxtAnioEvaluacion().on('keypress', base.Event.ValidaNumeroEnteroKeypress);

        /*Tab Indicador Detalle*/
        if (base.Control.TxtNombreFormula().val() == '' || base.Control.TxtNombreFormula().val() == null)
            $('#divControlesIngresoFormula').removeClass('hidden');

        base.Function.CrearGridVariable();
        base.Event.BtnBuscarVariable();

        base.Control.BtnAgregarResponsable().off('click');
        base.Control.BtnAgregarResponsable().on('click', base.Event.BtnAgregarResponsableClick);
        
        base.Control.BtnGuardarIndicadorDetalle().off('click');
        base.Control.BtnGuardarIndicadorDetalle().on('click', base.Event.BtnGuardarIndicadorDetalleClick);

        base.Control.ValidadorIndicadorDetalle = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmIndicadorDetalle(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos
        });

        /*Tab Meta*/
        base.Control.DtpFechaMeta().datepicker({
            dateFormat: 'dd/mm/yy'
        });

        base.Function.CrearGridIndicadorMeta();
        base.Event.BtnBuscarIndicadorMeta();
        
        base.Function.VerificaPeriodicidad();

        base.Control.BtnGuardarIndicadorMeta().off('click');
        base.Control.BtnGuardarIndicadorMeta().on('click', base.Event.BtnGuardarIndicadorMetaClick);

        base.Control.ValidadorIndicadorMeta = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmIndicadorMeta(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
        });        
        if (base.Control.TxtNombreFormula().val() == '' || base.Control.TxtNombreFormula().val() == null)
            $('#divControlesIngresoFormula').removeClass('hidden');

        /*Tab Meta Anual*/       
        base.Function.CrearGridIndicadorMetaAnual();
        base.Event.BtnBuscarIndicadorMetaAnual();

        base.Function.VerificaPeriodicidad();

        base.Control.BtnGuardarIndicadorMetaAnual().off('click');
        base.Control.BtnGuardarIndicadorMetaAnual().on('click', base.Event.BtnGuardarIndicadorMetaAnualClick);

        base.Control.ValidadorIndicadorMetaAnual = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmIndicadorMetaAnual(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
        });                

        //CALCULADORA

        base.Control.BtnCE().on('click', base.Event.BtnCEClick);
        base.Control.BtnAbreP().on('click', base.Event.BtnAbrePClick);
        base.Control.BtnCierraP().on('click', base.Event.BtnCierraPClick);
        base.Control.BtnBack().on('click', base.Event.BtnBackClick);
        base.Control.BtnSiete().on('click', base.Event.BtnSieteClick);
        base.Control.BtnOcho().on('click', base.Event.BtnOchoClick);
        base.Control.BtnNueve().on('click', base.Event.BtnNueveClick);
        base.Control.BtnSlash().on('click', base.Event.BtnSlashClick);
        base.Control.BtnCuatro().on('click', base.Event.BtnCuatroClick);
        base.Control.BtnCinco().on('click', base.Event.BtnCincoClick);
        base.Control.BtnSeis().on('click', base.Event.BtnSeisClick);
        base.Control.BtnAsterico().on('click', base.Event.BtnAstericoClick);
        base.Control.BtnUno().on('click', base.Event.BtnUnoClick);
        base.Control.BtnDos().on('click', base.Event.BtnDosClick);
        base.Control.BtnTres().on('click', base.Event.BtnTresClick);
        base.Control.BtnResta().on('click', base.Event.BtnRestaClick);
        base.Control.BtnCero().on('click', base.Event.BtnCeroClick);
        base.Control.BtnPunto().on('click', base.Event.BtnPuntoClick);
        base.Control.BtnMas().on('click', base.Event.BtnMasClick);

        /*Tab Valor*/
        base.Control.DtpFechaValor().datepicker({
            dateFormat: 'dd/mm/yy'
        });

        base.Function.CrearGridIndicadorValor();
        base.Event.BtnBuscarIndicadorValor();

        base.Function.VerificaPeriodicidadValor();

        base.Control.BtnGuardarIndicadorValor().off('click');
        base.Control.BtnGuardarIndicadorValor().on('click', base.Event.BtnGuardarIndicadorValorClick);

        base.Control.ValidadorIndicadorValor = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmIndicadorValor(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
        });

        /*Tab Evaluacion*/
        base.Control.DtpFechaEvaluacion().datepicker({
            dateFormat: 'dd/mm/yy'
        });

        base.Function.CrearGridIndicadorEvaluacion();
        base.Event.BtnBuscarIndicadorEvaluacion();

        base.Function.VerificaPeriodicidadEvaluacion();

        base.Control.BtnGuardarIndicadorEvaluacion().off('click');
        base.Control.BtnGuardarIndicadorEvaluacion().on('click', base.Event.BtnGuardarIndicadorEvaluacionClick);

        base.Control.ValidadorIndicadorEvaluacion = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmIndicadorEvaluacion(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
        });
    };

    base.Event = {
        BtnBuscarVariable: function () {
            var filtro = {
            };
            base.Control.GrdResultadoVariable.Load(filtro);
        },
        
        /*Tab Indicador Detalle*/
        BtnAgregarFormulaClick: function () {            
            $('#divControlesIngresoFormula').removeClass('hidden');
        },
        
        BtnGuardarIndicadorDetalleClick: function () {
            if (base.Control.ValidadorIndicadorDetalle.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarIndicadorDetalle.data = {
                            CodigoIndicador: base.Control.HdnCodigoIndicador().val(),
                            NombreFormula: base.Control.TxtNombreFormula().val()
                        };
                        base.Ajax.AjaxRegistrarIndicadorDetalle.submit();
                    }
                });
            } else {
                $("#frmIndicadorDetalleSummaryErrorMessage").empty();
                $("#frmIndicadorDetalleSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnBuscarIndicadorDetalle: function () {
            CodigoIndicador: base.Control.HdnCodigoIndicador().val()
        },
        BtnGridDeleteIndicadorDetalleClick: function (row, data) {
            'use strict'
            if (data.EstadoRegistro != Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inactivo) {
                base.Control.Mensaje.Delete({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaMensajeEliminarRegistro,
                    onAccept: function () {
                        base.Ajax.AjaxEliminarIndicadorDetalle.data = {
                            CodigoIndicadorDetalle: data.CodigoIndicadorDetalle,
                        };
                        base.Ajax.AjaxEliminarIndicadorDetalle.submit();
                    }
                });
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.RegistroInactivo });
            }

        },
        ValidaNumeroDecimalKeypress: function (e) {
            var field = $(this);
            key = e.keyCode ? e.keyCode : e.which;

            if (key == 8) return true;
            if (key > 47 && key < 58) {
                if (field.val() === "") return true;
                var existePto = (/[.]/).test(field.val());
                if (existePto === false) {
                    regexp = /.[0-9]{10}$/;
                }
                else {
                    regexp = /.[0-9]{2}$/;
                }

                return !(regexp.test(field.val()));
            }
            if (key == 46) {
                if (field.val() === "") return false;
                regexp = /^[0-9]+$/;
                return regexp.test(field.val());
            }
            return false;
        },
        ValidaNumeroEnteroKeypress: function (e) {
            if (event.keyCode < 48 || event.keyCode > 57) {
                event.returnValue = false;
            }
        },

        /*Tab Metas*/
        BtnBuscarIndicadorMeta: function () {
            base.Control.GrdResultadoIndicadorMeta.Load({
                CodigoIndicador: base.Control.HdnCodigoIndicador().val()
            });
        },
        BtnGuardarIndicadorMetaClick: function () {
            var valorSubTipoPeriodicidad = '';

            if (base.Control.DtpFechaMeta().val() != '') {
                valorSubTipoPeriodicidad = base.Control.DtpFechaMeta().val();
            }
            if (base.Control.SlcSemana().val() != '') {
                valorSubTipoPeriodicidad = base.Control.SlcSemana().val();
            }
            if (base.Control.SlcMes().val() != '') {
                valorSubTipoPeriodicidad = base.Control.SlcMes().val();
            }
            if (base.Control.SlcTrimestre().val() != '') {
                valorSubTipoPeriodicidad = base.Control.SlcTrimestre().val();
            }
            if (base.Control.SlcSemestre().val() != '') {
                valorSubTipoPeriodicidad = base.Control.SlcSemestre().val();
            }

            if (base.Control.ValidadorIndicadorMeta.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarIndicadorMeta.data = {
                            CodigoIndicador: base.Control.HdnCodigoIndicador().val(),
                            Anio: base.Control.TxtAnio().val(),
                            CodigoSubTipoPeriodicidad: valorSubTipoPeriodicidad,
                            ValorMeta: base.Control.TxtValorMeta().val()
                        };
                        base.Ajax.AjaxRegistrarIndicadorMeta.submit();
                    }
                });
            } else {
                $("#frmGeneralesSummaryErrorMessage").empty();
                $("#frmGeneralesSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnGridDeleteIndicadorMetaClick: function (row, data) {
            'use strict'
            if (data.EstadoRegistro != Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inactivo) {
                base.Control.Mensaje.Delete({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaMensajeEliminarRegistro,
                    onAccept: function () {
                        base.Ajax.AjaxEliminarIndicadorMeta.data = {
                            CodigoIndicadorMeta: data.CodigoIndicadorMeta,
                        };
                        base.Ajax.AjaxEliminarIndicadorMeta.submit();
                    }
                });
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.RegistroInactivo });
            }

        },

        /*Tab Meta Anual*/
        BtnBuscarIndicadorMetaAnual: function () {
            base.Control.GrdResultadoIndicadorMetaAnual.Load({
                CodigoIndicador: base.Control.HdnCodigoIndicador().val()
            });
        },
        BtnGuardarIndicadorMetaAnualClick: function () {            

            if (base.Control.ValidadorIndicadorMetaAnual.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarIndicadorMetaAnual.data = {
                            CodigoIndicador: base.Control.HdnCodigoIndicador().val(),
                            Anio: base.Control.TxtAnioMetaAnual().val(),                            
                            ValorMetaAnual: base.Control.TxtValorMetaAnual().val()
                        };
                        base.Ajax.AjaxRegistrarIndicadorMetaAnual.submit();
                    }
                });
            } else {
                $("#frmGeneralesSummaryErrorMessage").empty();
                $("#frmGeneralesSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnGridDeleteIndicadorMetaAnualClick: function (row, data) {
            'use strict'
            if (data.EstadoRegistro != Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inactivo) {
                base.Control.Mensaje.Delete({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaMensajeEliminarRegistro,
                    onAccept: function () {
                        base.Ajax.AjaxEliminarIndicadorMetaAnual.data = {
                            CodigoIndicadorMetaAnual: data.CodigoIndicadorMetaAnual,
                        };
                        base.Ajax.AjaxEliminarIndicadorMetaAnual.submit();
                    }
                });
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.RegistroInactivo });
            }

        },

        /*Tab Valor*/
        BtnBuscarIndicadorValor: function () {
            base.Control.GrdResultadoIndicadorValor.Load({
                CodigoIndicador: base.Control.HdnCodigoIndicador().val()
            });
        },
        BtnGuardarIndicadorValorClick: function () {
            var valorSubTipoPeriodicidadValor = '';

            if (base.Control.DtpFechaValor().val() != '') {
                valorSubTipoPeriodicidadValor = base.Control.DtpFechaValor().val();
            }
            if (base.Control.SlcSemanaValor().val() != '') {
                valorSubTipoPeriodicidadValor = base.Control.SlcSemanaValor().val();
            }
            if (base.Control.SlcMesValor().val() != '') {
                valorSubTipoPeriodicidadValor = base.Control.SlcMesValor().val();
            }
            if (base.Control.SlcTrimestreValor().val() != '') {
                valorSubTipoPeriodicidadValor = base.Control.SlcTrimestreValor().val();
            }
            if (base.Control.SlcSemestreValor().val() != '') {
                valorSubTipoPeriodicidadValor = base.Control.SlcSemestreValor().val();
            }

            if (base.Control.ValidadorIndicadorValor.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarIndicadorValor.data = {
                            CodigoIndicador: base.Control.HdnCodigoIndicador().val(),
                            Anio: base.Control.TxtAnioValor().val(),
                            CodigoSubTipoPeriodicidad: valorSubTipoPeriodicidadValor,
                            ValorReal: base.Control.TxtValorReal().val()
                        };
                        base.Ajax.AjaxRegistrarIndicadorValor.submit();
                    }
                });
            } else {
                $("#frmGeneralesSummaryErrorMessage").empty();
                $("#frmGeneralesSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnGridDeleteIndicadorValorClick: function (row, data) {
            'use strict'
            if (data.EstadoRegistro != Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inactivo) {
                base.Control.Mensaje.Delete({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaMensajeEliminarRegistro,
                    onAccept: function () {
                        base.Ajax.AjaxEliminarIndicadorValor.data = {
                            CodigoIndicadorValor: data.CodigoIndicadorValor,
                        };
                        base.Ajax.AjaxEliminarIndicadorValor.submit();
                    }
                });
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.RegistroInactivo });
            }

        },

        /*Tab Evaluacion*/
        BtnBuscarIndicadorEvaluacion: function () {
            base.Control.GrdResultadoIndicadorEvaluacion.Load({
                CodigoIndicador: base.Control.HdnCodigoIndicador().val()
            });
        },
        BtnGuardarIndicadorEvaluacionClick: function () {
            var valorSubTipoPeriodicidadEvaluacion = '';

            if (base.Control.DtpFechaEvaluacion().val() != '') {
                valorSubTipoPeriodicidadEvaluacion = base.Control.DtpFechaEvaluacion().val();
            }
            if (base.Control.SlcSemanaEvaluacion().val() != '') {
                valorSubTipoPeriodicidadEvaluacion = base.Control.SlcSemanaEvaluacion().val();
            }
            if (base.Control.SlcMesEvaluacion().val() != '') {
                valorSubTipoPeriodicidadEvaluacion = base.Control.SlcMesEvaluacion().val();
            }
            if (base.Control.SlcTrimestreEvaluacion().val() != '') {
                valorSubTipoPeriodicidadEvaluacion = base.Control.SlcTrimestreEvaluacion().val();
            }
            if (base.Control.SlcSemestreEvaluacion().val() != '') {
                valorSubTipoPeriodicidadEvaluacion = base.Control.SlcSemestreEvaluacion().val();
            }

            if (base.Control.ValidadorIndicadorEvaluacion.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarIndicadorEvaluacion.data = {
                            CodigoIndicador: base.Control.HdnCodigoIndicador().val(),
                            Anio: base.Control.TxtAnioEvaluacion().val(),
                            CodigoSubTipoPeriodicidad: valorSubTipoPeriodicidadEvaluacion,
                            ValorEvaluacion: base.Control.TxtValorEvaluacion().val()
                        };
                        base.Ajax.AjaxRegistrarIndicadorEvaluacion.submit();
                    }
                });
            } else {
                $("#frmGeneralesSummaryErrorMessage").empty();
                $("#frmGeneralesSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnGridDeleteIndicadorEvaluacionClick: function (row, data) {
            'use strict'
            if (data.EstadoRegistro != Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inactivo) {
                base.Control.Mensaje.Delete({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaMensajeEliminarRegistro,
                    onAccept: function () {
                        base.Ajax.AjaxEliminarIndicadorEvaluacion.data = {
                            CodigoIndicadorEvaluacion: data.CodigoIndicadorEvaluacion,
                        };
                        base.Ajax.AjaxEliminarIndicadorEvaluacion.submit();
                    }
                });
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.RegistroInactivo });
            }

        },

        //CALCULADORA
        BtnCEClick: function () {
            base.Control.TxtNombreFormula().val('');
        },
        BtnAbrePClick: function () {
            base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + '(');
        },
        BtnCierraPClick: function () {
            base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + ')');
        },
        BtnBackClick: function () {
            var cifras = base.Control.TxtNombreFormula().val().length; //hayar número de caracteres en TxtNombreFormula
            var br = base.Control.TxtNombreFormula().val().substring(cifras - 1, cifras) //describir último caracter
            var x = base.Control.TxtNombreFormula().val().substring(0, cifras - 1) //quitar el ultimo caracter            
            base.Control.TxtNombreFormula().val(x);//mostrar resultado en TxtNombreFormula
        },
        BtnSieteClick: function () {
            base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + '7');
        },
        BtnOchoClick: function () {
            base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + '8');
        },
        BtnNueveClick: function () {
            base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + '9');
        },
        BtnSlashClick: function () {
            base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + '/');
        },
        BtnCuatroClick: function () {
            base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + '4');
        },
        BtnCincoClick: function () {
            base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + '5');
        },
        BtnSeisClick: function () {
            base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + '6');
        },
        BtnAstericoClick: function () {
            base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + '*');
        },
        BtnUnoClick: function () {
            base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + '1');
        },
        BtnDosClick: function () {
            base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + '2');
        },
        BtnTresClick: function () {
            base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + '3');
        },
        BtnRestaClick: function () {
            base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + '-');
        },
        BtnCeroClick: function () {
            base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + '0');
        },
        BtnPuntoClick: function () {
            base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + '.');
        },
        BtnMasClick: function () {
            base.Control.TxtNombreFormula().val(base.Control.TxtNombreFormula().val() + '+');
        },
    };

    base.AjaxSuccess = {
      
        /*Tab IndicadorDetalle*/
        AjaxRegistrarIndicadorDetalleSuccess: function (resultado) {
            if (resultado.IsSuccess && resultado.Result != null) { //&& resultado.Result.CodigoIndicador != null
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnBuscarIndicadorDetalle();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxEliminarIndicadorDetalleSuccess: function (data) {
            'use strict'          
            if (data.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito });//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaEliminacionExitosa });
                base.Event.BtnBuscarIndicadorDetalle();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro })//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaErrorRegistro });
            }
        },

        /*Tab Metas*/
        AjaxRegistrarIndicadorMetaSuccess: function (resultado) {
            if (resultado.IsSuccess && resultado.Result != null) { //&& resultado.Result.CodigoIndicador != null
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnBuscarIndicadorMeta();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxEliminarIndicadorMetaSuccess: function (data) {
            'use strict'
            if (data.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito });//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaEliminacionExitosa });                
                base.Event.BtnBuscarIndicadorMeta();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro })//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaErrorRegistro });
            }
        },

        /*Tab Meta Anual*/
        AjaxRegistrarIndicadorMetaAnualSuccess: function (resultado) {
            if (resultado.IsSuccess && resultado.Result != null) { //&& resultado.Result.CodigoIndicador != null
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnBuscarIndicadorMetaAnual();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxEliminarIndicadorMetaAnualSuccess: function (data) {
            'use strict'
            if (data.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito });//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaEliminacionExitosa });                
                base.Event.BtnBuscarIndicadorMetaAnual();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro })//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaErrorRegistro });
            }
        },

        /*Tab Valor*/
        AjaxRegistrarIndicadorValorSuccess: function (resultado) {
            if (resultado.IsSuccess && resultado.Result != null) { //&& resultado.Result.CodigoIndicador != null
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnBuscarIndicadorValor();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxEliminarIndicadorValorSuccess: function (data) {
            'use strict'
            if (data.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito });//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaEliminacionExitosa });                
                base.Event.BtnBuscarIndicadorValor();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro })//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaErrorRegistro });
            }
        },

        /*Tab Evaluacion*/
        AjaxRegistrarIndicadorEvaluacionSuccess: function (resultado) {
            if (resultado.IsSuccess && resultado.Result != null) { //&& resultado.Result.CodigoIndicador != null
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnBuscarIndicadorEvaluacion();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        AjaxEliminarIndicadorEvaluacionSuccess: function (data) {
            'use strict'
            if (data.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito });//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaEliminacionExitosa });                
                base.Event.BtnBuscarIndicadorEvaluacion();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro })//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaErrorRegistro });
            }
        },
    };

    base.Ajax = {
       
        /*Tab IndicadorDetalle*/
        AjaxRegistrarIndicadorDetalle: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Actions.RegistraFormula,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarIndicadorDetalleSuccess
        }),
        AjaxEliminarIndicadorDetalle: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Actions.EliminarIndicadorDetalle,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarIndicadorDetalleSuccess
        }),
        /*Tab Metas*/
        AjaxRegistrarIndicadorMeta: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Actions.RegistrarIndicadorMeta,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarIndicadorMetaSuccess
        }),
        AjaxEliminarIndicadorMeta: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Actions.EliminarIndicadorMeta,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarIndicadorMetaSuccess
        }),
        /*Tab Meta Anual*/
        AjaxRegistrarIndicadorMetaAnual: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Actions.RegistrarIndicadorMetaAnual,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarIndicadorMetaAnualSuccess
        }),
        AjaxEliminarIndicadorMetaAnual: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Actions.EliminarIndicadorMetaAnual,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarIndicadorMetaAnualSuccess
        }),
        /*Tab Valor*/
        AjaxRegistrarIndicadorValor: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Actions.RegistrarIndicadorValor,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarIndicadorValorSuccess
        }),
        AjaxEliminarIndicadorValor: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Actions.EliminarIndicadorValor,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarIndicadorValorSuccess
        }),
        /*Tab Evaluacion*/
        AjaxRegistrarIndicadorEvaluacion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Actions.RegistrarIndicadorEvaluacion,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxRegistrarIndicadorEvaluacionSuccess
        }),
        AjaxEliminarIndicadorEvaluacion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Actions.EliminarIndicadorEvaluacion,
            autoSubmit: false,
            onSuccess: base.AjaxSuccess.AjaxEliminarIndicadorEvaluacionSuccess
        })
    };

    base.Function = {
        CrearGridIndicadorMeta: function () {
            var columns = new Array();
            columns.push({
                data: 'Anio',
                title: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Resource.GridAnio,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionSubTipoPeriodicidad',
                title: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Resource.GridSubTipoPeriodicidad,
                width: "10%"
            });
            columns.push({
                data: 'ValorMeta',
                title: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Resource.GridValorMeta,
                width: "10%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [
                    //{ type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditIndicadorMetaClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteIndicadorMetaClick } }
                ]
            });
            base.Control.GrdResultadoIndicadorMeta = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdIndicadorMeta',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Actions.BuscarIndicadorMeta,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        },

        CrearGridIndicadorValor: function () {
            var columns = new Array();
            columns.push({
                data: 'Anio',
                title: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Resource.GridAnio,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionSubTipoPeriodicidad',
                title: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Resource.GridSubTipoPeriodicidad,
                width: "10%"
            });
            columns.push({
                data: 'ValorReal',
                title: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Resource.GridValorReal,
                width: "10%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [
                    //{ type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditIndicadorValorClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteIndicadorValorClick } }
                ]
            });
            base.Control.GrdResultadoIndicadorValor = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdIndicadorValor',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Actions.BuscarIndicadorValor,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        },

        CrearGridIndicadorEvaluacion: function () {
            var columns = new Array();
            columns.push({
                data: 'Anio',
                title: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Resource.GridAnio,
                width: "10%"
            });
            columns.push({
                data: 'DescripcionSubTipoPeriodicidad',
                title: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Resource.GridSubTipoPeriodicidad,
                width: "10%"
            });
            columns.push({
                data: 'ValorEvaluacion',
                title: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Resource.GridEvaluacion,
                width: "10%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [
                    //{ type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditIndicadorEvaluacionClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteIndicadorEvaluacionClick } }
                ]
            });
            base.Control.GrdResultadoIndicadorEvaluacion = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdIndicadorEvaluacion',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Actions.BuscarIndicadorEvaluacion,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        },

        CrearGridIndicadorMetaAnual: function () {
            var columns = new Array();
            columns.push({
                data: 'Anio',
                title: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Resource.GridAnio,
                width: "10%"
            });            
            columns.push({
                data: 'ValorMetaAnual',
                title: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Resource.GridValorMeta,
                width: "10%"
            });
            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [
                    //{ type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditIndicadorMetaAnualClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteIndicadorMetaAnualClick } }
                ]
            });
            base.Control.GrdResultadoIndicadorMetaAnual = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdIndicadorMetaAnual',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Actions.BuscarIndicadorMetaAnual,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        },

        CrearGridVariable: function () {
            var columns = new Array();
            //columns.push({
            //    filter: { enabled: true, type: "textbox" },
            //    data: 'CodigoVariable',
            //    title: "Codigo",//Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Resource.GridNombreVariable,
            //    //visible: false,
            //    width: "20%"
            //});
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NombreVariable',
                title: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Resource.GridNombreVariable,
                width: "80%"
            });
            base.Control.GrdResultadoVariable = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultVariable',
                columns: columns,
                filterColumn: true,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                select: true,
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Actions.BuscarVariable,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        },

        /*Tab Meta*/

        VerificaPeriodicidad: function () {            
            if (base.Control.HdnCodigoPeriodicidad().val() == Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.DatosConstantes.PeriodicidadDiaria) {
                $('#divdtpFechaMeta').removeClass('hidden');
                $('#divslcSemana').addClass('hidden');
                $('#divslcMes').addClass('hidden');
                $('#divslcTrimestre').addClass('hidden');
                $('#divslcSemestre').addClass('hidden');
                $('#divtxtValorMeta').removeClass('hidden');
                $('#divtxtAnio').addClass('hidden');
            } else if (base.Control.HdnCodigoPeriodicidad().val() == Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.DatosConstantes.PeriodicidadSemanal) {
                $('#divslcSemana').removeClass('hidden');
                $('#divdtpFechaMeta').addClass('hidden');
                $('#divslcMes').addClass('hidden');
                $('#divslcTrimestre').addClass('hidden');
                $('#divslcSemestre').addClass('hidden');
                $('#divtxtValorMeta').removeClass('hidden');
                $('#divtxtAnio').removeClass('hidden');
            }
            else if (base.Control.HdnCodigoPeriodicidad().val() == Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.DatosConstantes.PeriodicidadMensual) {
                $('#divslcMes').removeClass('hidden');
                $('#divslcSemana').addClass('hidden');
                $('#divdtpFechaMeta').addClass('hidden');
                $('#divslcTrimestre').addClass('hidden');
                $('#divslcSemestre').addClass('hidden');
                $('#divtxtValorMeta').removeClass('hidden');
                $('#divtxtAnio').removeClass('hidden');
            }
            else if (base.Control.HdnCodigoPeriodicidad().val() == Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.DatosConstantes.PeriodicidadTrimestral) {
                $('#divslcTrimestre').removeClass('hidden');
                $('#divslcMes').addClass('hidden');
                $('#divslcSemana').addClass('hidden');
                $('#divdtpFechaMeta').addClass('hidden');
                $('#divslcSemestre').addClass('hidden');
                $('#divtxtValorMeta').removeClass('hidden');
                $('#divtxtAnio').removeClass('hidden');
            }
            else if (base.Control.HdnCodigoPeriodicidad().val() == Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.DatosConstantes.PeriodicidadSemestral) {
                $('#divslcSemestre').removeClass('hidden');
                $('#divslcTrimestre').addClass('hidden');
                $('#divslcMes').addClass('hidden');
                $('#divslcSemana').addClass('hidden');
                $('#divdtpFechaMeta').addClass('hidden');
                $('#divtxtValorMeta').removeClass('hidden');
                $('#divtxtAnio').removeClass('hidden');
            }
            else if (base.Control.HdnCodigoPeriodicidad().val() == Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.DatosConstantes.PeriodicidadAnual) {
                $('#divdtpFechaMeta').addClass('hidden');
                $('#divslcSemana').addClass('hidden');
                $('#divslcMes').addClass('hidden');
                $('#divslcTrimestre').addClass('hidden');
                $('#divslcSemestre').addClass('hidden');
                $('#divtxtValorMeta').removeClass('hidden');
                $('#divtxtAnio').removeClass('hidden');
            }
        },

        VerificaPeriodicidadValor: function () {
            if (base.Control.HdnCodigoPeriodicidad().val() == Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.DatosConstantes.PeriodicidadDiaria) {
                $('#divdtpFechaValor').removeClass('hidden');
                $('#divslcSemanaValor').addClass('hidden');
                $('#divslcMesValor').addClass('hidden');
                $('#divslcTrimestreValor').addClass('hidden');
                $('#divslcSemestreValor').addClass('hidden');
                $('#divtxtValorReal').removeClass('hidden');
                $('#divtxtAnioValor').addClass('hidden');
            } else if (base.Control.HdnCodigoPeriodicidad().val() == Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.DatosConstantes.PeriodicidadSemanal) {
                $('#divslcSemanaValor').removeClass('hidden');
                $('#divdtpFechaValor').addClass('hidden');
                $('#divslcMesValor').addClass('hidden');
                $('#divslcTrimestreValor').addClass('hidden');
                $('#divslcSemestreValor').addClass('hidden');
                $('#divtxtValorReal').removeClass('hidden');
                $('#divtxtAnioValor').removeClass('hidden');
            }
            else if (base.Control.HdnCodigoPeriodicidad().val() == Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.DatosConstantes.PeriodicidadMensual) {
                $('#divslcMesValor').removeClass('hidden');
                $('#divslcSemanaValor').addClass('hidden');
                $('#divdtpFechaValor').addClass('hidden');
                $('#divslcTrimestreValor').addClass('hidden');
                $('#divslcSemestreValor').addClass('hidden');
                $('#divtxtValorReal').removeClass('hidden');
                $('#divtxtAnioValor').removeClass('hidden');
            }
            else if (base.Control.HdnCodigoPeriodicidad().val() == Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.DatosConstantes.PeriodicidadTrimestral) {
                $('#divslcTrimestreValor').removeClass('hidden');
                $('#divslcMesValor').addClass('hidden');
                $('#divslcSemanaValor').addClass('hidden');
                $('#divdtpFechaValor').addClass('hidden');
                $('#divslcSemestreValor').addClass('hidden');
                $('#divtxtValorReal').removeClass('hidden');
                $('#divtxtAnioValor').removeClass('hidden');
            }
            else if (base.Control.HdnCodigoPeriodicidad().val() == Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.DatosConstantes.PeriodicidadSemestral) {
                $('#divslcSemestreValor').removeClass('hidden');
                $('#divslcTrimestreValor').addClass('hidden');
                $('#divslcMesValor').addClass('hidden');
                $('#divslcSemanaValor').addClass('hidden');
                $('#divdtpFechaValor').addClass('hidden');
                $('#divtxtValorReal').removeClass('hidden');
                $('#divtxtAnioValor').removeClass('hidden');
            }
            else if (base.Control.HdnCodigoPeriodicidad().val() == Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.DatosConstantes.PeriodicidadAnual) {
                $('#divdtpFechaValor').addClass('hidden');
                $('#divslcSemanaValor').addClass('hidden');
                $('#divslcMesValor').addClass('hidden');
                $('#divslcTrimestreValor').addClass('hidden');
                $('#divslcSemestreValor').addClass('hidden');
                $('#divtxtValorReal').removeClass('hidden');
                $('#divtxtAnioValor').removeClass('hidden');
            }
        },

        VerificaPeriodicidadEvaluacion: function () {
        if (base.Control.HdnCodigoPeriodicidad().val() == Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.DatosConstantes.PeriodicidadDiaria) {
            $('#divdtpFechaEvaluacion').removeClass('hidden');
            $('#divslcSemanaEvaluacion').addClass('hidden');
            $('#divslcMesEvaluacion').addClass('hidden');
            $('#divslcTrimestreEvaluacion').addClass('hidden');
            $('#divslcSemestreEvaluacion').addClass('hidden');
            $('#divtxtEvaluacionReal').removeClass('hidden');
            $('#divtxtAnioEvaluacion').addClass('hidden');
        } else if (base.Control.HdnCodigoPeriodicidad().val() == Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.DatosConstantes.PeriodicidadSemanal) {
            $('#divslcSemanaEvaluacion').removeClass('hidden');
            $('#divdtpFechaEvaluacion').addClass('hidden');
            $('#divslcMesEvaluacion').addClass('hidden');
            $('#divslcTrimestreEvaluacion').addClass('hidden');
            $('#divslcSemestreEvaluacion').addClass('hidden');
            $('#divtxtEvaluacionReal').removeClass('hidden');
            $('#divtxtAnioEvaluacion').removeClass('hidden');
        }
        else if (base.Control.HdnCodigoPeriodicidad().val() == Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.DatosConstantes.PeriodicidadMensual) {
            $('#divslcMesEvaluacion').removeClass('hidden');
            $('#divslcSemanaEvaluacion').addClass('hidden');
            $('#divdtpFechaEvaluacion').addClass('hidden');
            $('#divslcTrimestreEvaluacion').addClass('hidden');
            $('#divslcSemestreEvaluacion').addClass('hidden');
            $('#divtxtEvaluacionReal').removeClass('hidden');
            $('#divtxtAnioEvaluacion').removeClass('hidden');
        }
        else if (base.Control.HdnCodigoPeriodicidad().val() == Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.DatosConstantes.PeriodicidadTrimestral) {
            $('#divslcTrimestreEvaluacion').removeClass('hidden');
            $('#divslcMesEvaluacion').addClass('hidden');
            $('#divslcSemanaEvaluacion').addClass('hidden');
            $('#divdtpFechaEvaluacion').addClass('hidden');
            $('#divslcSemestreEvaluacion').addClass('hidden');
            $('#divtxtEvaluacionReal').removeClass('hidden');
            $('#divtxtAnioEvaluacion').removeClass('hidden');
        }
        else if (base.Control.HdnCodigoPeriodicidad().val() == Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.DatosConstantes.PeriodicidadSemestral) {
            $('#divslcSemestreEvaluacion').removeClass('hidden');
            $('#divslcTrimestreEvaluacion').addClass('hidden');
            $('#divslcMesEvaluacion').addClass('hidden');
            $('#divslcSemanaEvaluacion').addClass('hidden');
            $('#divdtpFechaEvaluacion').addClass('hidden');
            $('#divtxtEvaluacionReal').removeClass('hidden');
            $('#divtxtAnioEvaluacion').removeClass('hidden');
        }
        else if (base.Control.HdnCodigoPeriodicidad().val() == Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.DatosConstantes.PeriodicidadAnual) {
            $('#divdtpFechaEvaluacion').addClass('hidden');
            $('#divslcSemanaEvaluacion').addClass('hidden');
            $('#divslcMesEvaluacion').addClass('hidden');
            $('#divslcTrimestreEvaluacion').addClass('hidden');
            $('#divslcSemestreEvaluacion').addClass('hidden');
            $('#divtxtEvaluacionReal').removeClass('hidden');
            $('#divtxtAnioEvaluacion').removeClass('hidden');
        }
    }
    };

    base.Show = function (opts) {     
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: "INDICADORES",//Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Resource.EtiquetaTituloOEE,
            size: "size-wide",
            close: function () {
            }
        });        
        base.Control.DlgForm.getAjaxContent({            
            action: Pe.ElectroPeru.SGI.Presentacion.Proceso.BandejaPlanEstrategico.Actions.FormularioValorIndicador,
            data: opts.data.CodigoIndicador,
            onSuccess: function () {
                base.Control.HdnCodigoAmbito().val(opts.data.CodigoAmbito);
                base.Control.HdnCodigoIndicador().val(opts.data.CodigoIndicador);
                base.Control.TxtNombreIndicador().val(opts.data.NombreIndicador);
                base.Control.HdnCodigoPeriodicidad().val(opts.data.CodigoPeriodicidad);
                base.Control.HdnCodigoFormula().val(opts.data.CodigoFormula);
                base.Control.TxtNombreFormula().val(opts.data.NombreFormula);
                base.Control.TxtSeguimientoValInd().text(opts.data.Seguimiento + " --> Indicador: " + opts.data.NombreIndicador);
                
                base.Ini();
                base.Event.BtnBuscarIndicadorMetaAnual();
            },
        });
    };
};