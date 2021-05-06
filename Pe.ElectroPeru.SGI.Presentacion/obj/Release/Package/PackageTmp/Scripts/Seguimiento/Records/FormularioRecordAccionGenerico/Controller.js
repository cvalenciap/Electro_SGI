ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordAccionGenerico');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordAccionGenerico.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Event.GrabarRecordAccionSuccess = (opts.GrabarRecordAccionSuccess != null && opts.GrabarRecordAccionSuccess) ? opts.GrabarRecordAccionSuccess : null;
        base.Control.RecordAccionModel = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Models.RecordsModel;

        //Edición
        base.Control.ArrCausaRaiz = [];        
        if (base.Control.RecordAccionModel != null && base.Control.RecordAccionModel.RecordAccion.ListaAccionCorrectivaCausa != null) {
            for (var i = 0; i < base.Control.RecordAccionModel.RecordAccion.ListaAccionCorrectivaCausa.length; i++) {
                base.Control.ArrCausaRaiz.push({
                    CodigoInvestigacion: base.Control.RecordAccionModel.RecordAccion.ListaAccionCorrectivaCausa[i].CodigoInvestigacion,
                    CodigoInvestigacionCausaRaiz: base.Control.RecordAccionModel.RecordAccion.ListaAccionCorrectivaCausa[i].CodigoInvestigacionCausaRaiz
                });
            }
        }
        if (base.Control.RecordAccionModel.RecordAccion.NombreArchivoFotoSharePoint != null) {
            $('#divNombreArchivoFotoAccion .clsNombreArchivoFotoAccion').html('<p>' + base.Control.RecordAccionModel.RecordAccion.NombreArchivoFotoSharePoint + '</p>');
        }

        if (base.Control.RecordAccionModel.RecordAccion.NombreArchivoApendiceSharePoint != null) {
            $('#divNombreArchivoApendiceAccion .clsNombreArchivoApendiceAccion').html('<p>' + base.Control.RecordAccionModel.RecordAccion.NombreArchivoApendiceSharePoint + '</p>');
        }   

        base.Control.BtnCancelarRecordAccion().off('click');
        base.Control.BtnCancelarRecordAccion().on('click', base.Event.BtnCancelarRecordAccionClick);

        base.Control.BtnGrabarRecordAccion().off('click');
        base.Control.BtnGrabarRecordAccion().on('click', base.Event.BtnGrabarRecordAccionClick);

        var minFechaVencimiento;
        if (base.Control.RecordAccionModel.RecordAccion.IndicadorPermitirAcceso != null
            && base.Control.RecordAccionModel.RecordAccion.IndicadorPermitirAcceso != undefined
            && base.Control.RecordAccionModel.RecordAccion.IndicadorPermitirAcceso) {
            minFechaVencimiento = new Date(1900, 1, 1);
        }
        else {
            minFechaVencimiento = "+1";
        }

        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFrmFechaVencimiento(),
            maxDateFrom: new Date(2100, 1, 1),
            minDateFrom: minFechaVencimiento
        });

        var hoy = new Date();
        var dd = hoy.getDate();
        var mm = hoy.getMonth();
        var yyyy = hoy.getFullYear();

        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFrmFechaAccionPlanteada(),
            maxDateFrom: new Date(yyyy, mm, dd),
            minDateFrom: new Date(1900, 1, 1)
        });

        base.Control.FileFrmFotoAccion().on("change", function () {
            var files = this.files;

            if (!files) {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.ValidaArchivo });
                return;
            }

            if (this.files && this.files[0]) {
                var reader = new FileReader();
                var tipoImagen = this.files[0].type.toLowerCase();
                if ((tipoImagen == "image/bmp" || tipoImagen == "image/gif" ||
                    tipoImagen == "image/jpg" || tipoImagen == "image/jpeg" ||
                    tipoImagen == "image/tif" || tipoImagen == "image/tiff" ||
                    tipoImagen == "image/png") && this.files[0].size <= base.Control.RecordAccionModel.RecordAccion.PesoMaximoArchivoFotoSharePoint) {

                    base.Control.PhotoNombreArchivo = this.files[0].name;
                    var uploadFile = this.files[0];
                    reader.onload = function (e) {
                        if (reader.result != "") {
                            base.Control.PhotoBase64 = reader.result.split(',')[1];
                        }
                        else {
                            base.Control.PhotoBase64 = null;
                            base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.ValidaArchivo });
                        }
                    };

                    reader.readAsDataURL(uploadFile);
                } else {
                    base.Control.PhotoBase64 = null;
                    base.Control.FileFrmFotoAccion().val('');
                    base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.ValidarTamañoArchivo05MB });
                }
            }
        });

        base.Control.FileFrmApendiceAccion().on("change", function () {            
            var files = this.files;

            if (!files) {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.ValidaArchivo });
                return;
            }
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                var tipoImagen = this.files[0].type.toLowerCase();
                if (this.files[0].size <= base.Control.RecordAccionModel.RecordAccion.PesoMaximoArchivoAnexoSharePoint) {
                    base.Control.AppendiceNombreArchivo = this.files[0].name;
                    var uploadFile = this.files[0];

                    reader.onload = function (e) {
                        if (reader.result != "") {
                            base.Control.AppendiceBase64 = reader.result.split(',')[1];
                        }
                        else {
                            base.Control.AppendiceBase64 = null;
                            base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.ValidaArchivo });
                        }
                    };
                    reader.readAsDataURL(uploadFile);
                } else {
                    base.Control.AppendiceBase64 = null;
                    base.Control.FileFrmApendiceAccion().val('');
                    base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.ValidarTamañoArchivo3MB });
                }
            }
        });
        base.Control.DlgFormularioResponsable = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: function (objColaborador) {
                if (objColaborador.length > 0) {
                    base.Control.HdnFrmCodigoColaboradorResponsableAccion().val(objColaborador[0].CodigoColaborador);
                    base.Control.TxtFrmNombreColaboradorResponsableAccion().val(objColaborador[0].Nombres + ' ' + objColaborador[0].ApellidoPaterno + ' ' + objColaborador[0].ApellidoMaterno);
                    base.Control.SlcFrmEmpresaAccion().val(objColaborador[0].CodigoEmpresa);
                    base.Control.TxtFrmNombreArea().val(objColaborador[0].NombreArea);
                    base.Control.HdnFrmCodigoArea().val(objColaborador[0].CodigoArea);
                    base.Control.HdnFrmCodigoProyecto().val(objColaborador[0].CodigoProyecto);
                    base.Control.TxtFrmNombreProyecto().val(objColaborador[0].NombreProyecto);
                    base.Control.HdnFrmCodigoDepartamento().val(objColaborador[0].CodigoDepartamento);
                    base.Control.TxtFrmNombreDepartamento().val(objColaborador[0].NombreDepartamento);
                }
            }
        });
        base.Control.DlgFormularioColaboradorPlanteaAccion = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: function (objColaborador) {
                if (objColaborador.length > 0) {
                    base.Control.HdnFrmCodigoColaboradorPlanteaAccion().val(objColaborador[0].CodigoColaborador);
                    base.Control.TxtFrmNombreColaboradorPlanteaAccion().val(objColaborador[0].Nombres + ' ' + objColaborador[0].ApellidoPaterno + ' ' + objColaborador[0].ApellidoMaterno);
                }
            }
        });
        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmRecordAccionRegistrar(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtra()
        });

        base.Control.BtnBuscarColaboradorPlanteaAccion().off('click');
        base.Control.BtnBuscarColaboradorPlanteaAccion().on('click', base.Event.BtnBuscarColaboradorPlanteAccionClick);

        base.Control.BtnBuscarColaboradorResponsableAccion().off('click');
        base.Control.BtnBuscarColaboradorResponsableAccion().on('click', base.Event.BtnBuscarColaboradorResponsableAccionClick);

        base.Control.ChkCausaRaiz().off('click');
        base.Control.ChkCausaRaiz().on('click', base.Event.ChkCausaRaizClick);

        base.Control.DlgFormularioSeleccionarCausaRaiz = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioSeleccionarCausaRaiz.Controller({
            AceptarSuccess: base.Event.BtnMostrarCausasRaices
        });
    };

    base.Show = function (opts) {
        var titulo = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.TitulosVentanas.Accion;
        if (opts.CodigoTipoRegistroParametro == Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.VisitaGerencial) {
            if (Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial != undefined) {
                titulo = Pe.ElectroPeru.SGI.Presentacion.VisitaGerencial.IngresoAccion.FormularioBandejaAccion.Resource.EtiquetaFormularioIngresoAcciones;
            }
        }
        //else
        //    titulo = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.TitulosVentanas.Accion;

        base.Control.DlgFormularioRecordAccion = new Pe.GMD.UI.Web.Components.Dialog({
            title: titulo,
            size: "size-xlarge",
            width: "100%",
            maxHeight: 600,
            close: function () { }
        });

        base.Control.DlgFormularioRecordAccion.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.FormularioRecordAccionGenerico,
            onSuccess: function () {
                base.Ini();
            },
            data: {
                CodigoEstadoAccion: opts.CodigoEstadoAccion,
                NumeroRecord: opts.NumeroRecord,
                CodigoRecordAccion: opts.CodigoRecordAccion,
                CodigoIntegradorTipoRegistro: opts.CodigoIntegradorTipoRegistro,
                CodigoTipoRegistroParametro: opts.CodigoTipoRegistroParametro,
                IndicadorLectura: opts.IndicadorLectura,
                CodigoTipoOcurrenciaParametro: opts.CodigoTipoOcurrenciaParametro,
                CodigoTipoOcurrenciaEntidad: opts.CodigoTipoOcurrenciaEntidad,
                CodigoProyectoEntidad: opts.CodigoProyectoEntidad,
                indicadorOtrosRegistros: opts.indicadorOtrosRegistros,
            }
        });
    };


    base.Control = {
        FrmRecordAccionRegistrar: function () { return $('#frmRecordAccion') },
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        RecordAccionModel: null,
        DlgFormularioRecordAccion: null,
        Validador: null,
        ArrCausaRaiz: [],
        BtnBuscarColaboradorPlanteaAccion: function () { return $('#btnBuscarColaboradorPlanteaAccion'); },
        BtnBuscarColaboradorResponsableAccion: function () { return $('#btnBuscarColaboradorResponsableAccion'); },
        FileFrmFotoAccion: function () { return $('#fileFrmFotoAccion'); },
        FileFrmApendiceAccion: function () { return $('#fileFrmApendiceAccion'); },
        HdnFrmCodigoColaboradorResponsableAccion: function () { return $('#hdnFrmCodigoColaboradorResponsableAccion'); },
        TxtFrmNombreColaboradorResponsableAccion: function () { return $('#txtFrmNombreColaboradorResponsableAccion'); },
        DtpFrmFechaAccionPlanteada: function () { return $('#dtpFrmFechaAccionPlanteada'); },
        TxtFrmDescripcionAccion: function () { return $('#txtFrmDescripcionAccion'); },
        TxtFrmDescripcionCorta: function () { return $('#txtFrmDescripcionCorta'); },
        DtpFrmFechaVencimiento: function () { return $('#dtpFrmFechaVencimiento'); },
        SlcFrmPrioridad: function () { return $('#slcFrmPrioridad'); },
        TxtFrmNumeroAccion: function () { return $('#txtFrmNumeroAccion'); },
        HdnFrmCodigoColaboradorPlanteaAccion: function () { return $('#hdnFrmCodigoColaboradorPlanteaAccion'); },
        TxtFrmNombreColaboradorPlanteaAccion: function () { return $('#txtFrmNombreColaboradorPlanteaAccion'); },
        SlcFrmEmpresaAccion: function () { return $('#slcFrmEmpresaAccion'); },
        HdnFrmCodigoArea: function () { return $('#hdnFrmCodigoArea'); },
        TxtFrmNombreArea: function () { return $('#txtFrmNombreArea'); },
        HdnFrmCodigoProyecto: function () { return $('#hdnFrmCodigoProyecto'); },
        TxtFrmNombreProyecto: function () { return $('#txtFrmNombreProyecto'); },
        HdnFrmCodigoDepartamento: function () { return $('#hdnFrmCodigoDepartamento'); },
        TxtFrmNombreDepartamento: function () { return $('#txtFrmNombreDepartamento'); },
        BtnCancelarRecordAccion: function () { return $('#btnCancelarRecordAccion'); },
        BtnGrabarRecordAccion: function () { return $('#btnGrabarRecordAccion'); },

        //Modulo de Observación Planeada
        SlcListaControl: function () { return $('#slcListaControl'); },
        SlcListaControlCalidad: function () { return $('#slcListaControlCalidad'); },

        //Modulo de Investigacion
        TxtNombreCausasRaices: function () { return $('#txtNombreCausasRaices'); },
        ChkCausaRaiz: function () { return $('#chkCausaRaiz'); },

        PhotoBase64: null,
        PhotoNombreArchivo: null,
        PhotoExtension: null,
        AppendiceBase64: null,
        AppendiceNombreArchivo: null,
        AppendiceExtension: null,
    };

    base.Event = {
        ChkCausaRaizClick: function () {
            if ($(this).is(":checked")) {                
                var filtro = {
                    CodigoInvestigacion: base.Control.RecordAccionModel.RecordAccion.CodigoTipoOcurrenciaEntidad,
                    ListaAccionCorrectivaCausa: base.Control.RecordAccionModel.ListaAccionCorrectivaCausa
                };
                base.Control.DlgFormularioSeleccionarCausaRaiz.Show(filtro);
            }
            else {
                base.Control.TxtNombreCausasRaices().val('');
            }
        },
        BtnMostrarCausasRaices: function (arrCausas) {
            if (arrCausas.length > 0) {
                var textoRaices = 'Se seleccionó ';
                base.Control.ArrCausaRaiz = [];
                for (var i = 0; i < arrCausas.length; i++) {
                    base.Control.ArrCausaRaiz.push({
                        CodigoInvestigacion: base.Control.RecordAccionModel.RecordAccion.CodigoTipoOcurrenciaEntidad,
                        CodigoInvestigacionCausaRaiz: arrCausas[i].Valor
                    });
                    textoRaices += arrCausas[i].Identificador + ', ';
                }
                base.Control.TxtNombreCausasRaices().val(textoRaices);                
            }
            else {
                base.Control.TxtNombreCausasRaices().val('');
            }
        },
        BtnBuscarColaboradorResponsableAccionClick: function () {
            base.Control.DlgFormularioResponsable.Show(false, [], null);
        },
        BtnCancelarRecordAccionClick: function () {
            base.Control.DlgFormularioRecordAccion.divDialog.close();
        },
        BtnBuscarColaboradorPlanteAccionClick: function () {
            var filtro = null
            if (base.Control.RecordAccionModel.RecordAccion.CodigoTipoRegistroParametro == Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.ComiteSubComite) {
                filtro = { CodigoProyecto: base.Control.RecordAccionModel.RecordAccion.CodigoProyectoEntidad }
            }
            base.Control.DlgFormularioColaboradorPlanteaAccion.Show(false, [], filtro);
        },

        BtnGrabarRecordAccionClick: function () {
            'use strict'
            if (base.Control.Validador.isValid()) {
                var fechaActual = $.datepicker.parseDate(Pe.GMD.UI.Web.Formato.Fecha, base.Control.RecordAccionModel.RecordAccion.FechaActualString);
                var fechaAccionPlanteada = $.datepicker.parseDate(Pe.GMD.UI.Web.Formato.Fecha, base.Control.DtpFrmFechaAccionPlanteada().val());
                var fechaVencimiento = $.datepicker.parseDate(Pe.GMD.UI.Web.Formato.Fecha, base.Control.DtpFrmFechaVencimiento().val());

                base.Control.DtpFrmFechaAccionPlanteada().attr('class', 'form-control');
                base.Control.DtpFrmFechaVencimiento().attr('class', 'form-control');

                if (fechaAccionPlanteada > fechaActual) {
                    base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.EtiquetaMensajeFechaAccionPlanteadaMayorActual });
                    base.Control.DtpFrmFechaAccionPlanteada().attr('class', 'form-control hasError');
                    return;
                }

                if (!base.Control.RecordAccionModel.RecordAccion.IndicadorPermitirAcceso) {
                    if (fechaVencimiento <= fechaActual) {
                        base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.EtiquetaMensajeFechaVencimientoMenorIgualActual });
                        base.Control.DtpFrmFechaVencimiento().attr('class', 'form-control hasError');
                        return;
                    }
                }

                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabar.data = {
                            CodigoIntegradorTipoRegistro: base.Control.RecordAccionModel.RecordAccion.CodigoIntegradorTipoRegistro,
                            CodigoRecordAccion: base.Control.RecordAccionModel.RecordAccion.CodigoRecordAccion != null ? base.Control.RecordAccionModel.RecordAccion.CodigoRecordAccion : null,
                            CodigoRecord: base.Control.RecordAccionModel.RecordAccion.CodigoRecord != null ? base.Control.RecordAccionModel.RecordAccion.CodigoRecord : null,
                            NumeroAccion: base.Control.TxtFrmNumeroAccion().val(),
                            CodigoColaboradorPlanteaAccion: base.Control.HdnFrmCodigoColaboradorPlanteaAccion().val(),
                            FechaAccionPlanteadaString: base.Control.DtpFrmFechaAccionPlanteada().val(),
                            DescripcionCorta: base.Control.TxtFrmDescripcionCorta().val(),
                            Descripcion: base.Control.TxtFrmDescripcionAccion().val(),
                            FechaVencimientoString: base.Control.DtpFrmFechaVencimiento().val(),
                            CodigoPrioridad: base.Control.SlcFrmPrioridad().val(),
                            CodigoColaboradorResponsable: base.Control.HdnFrmCodigoColaboradorResponsableAccion().val(),
                            CodigoProyecto: base.Control.HdnFrmCodigoProyecto().val(),
                            CodigoDepartamento: base.Control.HdnFrmCodigoDepartamento().val(),
                            CodigoArea: base.Control.HdnFrmCodigoArea().val(),
                            CodigoEmpresa: base.Control.SlcFrmEmpresaAccion().val(),
                            DataArchivoFoto: base.Control.PhotoBase64,
                            NombreArchivoFotoSharePoint: base.Control.PhotoNombreArchivo == null ? base.Control.RecordAccionModel.RecordAccion.NombreArchivoFotoSharePoint : base.Control.PhotoNombreArchivo,
                            DataArchivoApendice: base.Control.AppendiceBase64,
                            ListaAccionCorrectivaCausa: base.Control.ArrCausaRaiz,
                            NombreArchivoApendiceSharePoint: base.Control.AppendiceNombreArchivo == null ? base.Control.RecordAccionModel.RecordAccion.NombreArchivoApendiceSharePoint : base.Control.AppendiceNombreArchivo,
                            CodigoTipoOcurrenciaParametro: base.Control.RecordAccionModel.RecordAccion.CodigoTipoOcurrenciaParametro,
                            CodigoTipoOcurrenciaEntidad: base.Control.RecordAccionModel.RecordAccion.CodigoTipoOcurrenciaEntidad,
                            CodigoTipoControl: base.Control.SlcListaControl().val(),
                            CodigoControlCalidad: base.Control.SlcListaControlCalidad().val(),
                            indicadorOtrosRegistros: base.Control.RecordAccionModel.RecordAccion.indicadorOtrosRegistros
                        };
                        base.Ajax.AjaxGrabar.submit();
                    }
                });
            }
            else {
                $('#frmRecordAccionSummaryErrorMessage').empty();
                $('#frmRecordAccionSummaryErrorMessage').append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.ValidarCampos + "</p>");
            }
        },
        BtnOperacionExitosoRecordAccionClick: function () {
            base.Control.Mensaje.Information({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
            });
            base.Control.PhotoBase64 = '';
            base.Control.PhotoNombreArchivo = '';
            base.Control.AppendiceBase64 = '';
            base.Control.AppendiceNombreArchivo = '';
            base.Control.DlgFormularioRecordAccion.divDialog.close();
            if (base.Event.GrabarRecordAccionSuccess() != null) {
                base.Event.GrabarRecordAccionSuccess();
            }
        },
        AjaxGrabarComiteSSomaSuccess: function (resultado) {

            if (resultado.Result.resultadoOperacion == 1) {
                base.Event.BtnOperacionExitosoRecordAccionClick();
            }
            else if (resultado.Result.resultadoOperacion == 2) {
                base.Control.Mensaje.Warning({
                    message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.EtiquetaObsGuardarAccionDocNoPermite
                });
            }
            else if (resultado.Result.resultadoOperacion == 4) {
                base.Control.Mensaje.Warning({
                    message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.EtiquetaObsGuardarAccionSegNoPermite
                });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
            
        },
        AjaxGrabarOtrosRegistrosSuccess: function (resultado) {

                if (resultado.Result.resultadoOperacion == 1) {
                    base.Event.BtnOperacionExitosoRecordAccionClick();
                }
                else if (resultado.Result.resultadoOperacion == 2) {
                    base.Control.Mensaje.Warning({
                        message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.EtiquetaObsGuardarAccionDocNoPermite
                    });
                }
                else if (resultado.Result.resultadoOperacion == 4) {
                    base.Control.Mensaje.Warning({
                        message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.EtiquetaObsGuardarAccionSegNoPermite
                    });
                }
                else {
                    base.Control.Mensaje.Warning({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                    });
                }           
        },
        AjaxGrabarVisitaGerencialSuccess: function (resultado) {
            if (resultado.Result.resultadoOperacion == 1) {

                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.ConfirmacionSalirAccion,
                    indicadorModal: false,
                    onAccept: function () {
                        base.Ajax.AjaxSalirAccionVisitaGerencial.data = {
                            CodigoIntegradorTipoRegistro: base.Control.RecordAccionModel.RecordAccion.CodigoIntegradorTipoRegistro,
                            CodigoRecordAccion: base.Control.RecordAccionModel.RecordAccion.CodigoRecordAccion != null ? base.Control.RecordAccionModel.RecordAccion.CodigoRecordAccion : null,
                        };
                        base.Ajax.AjaxSalirAccionVisitaGerencial.submit();
                    },
                    onCancelDialog: function () {
                        base.Event.BtnOperacionExitosoRecordAccionClick();
                    }
                });
            }
            else if (resultado.Result.resultadoOperacion == 2) {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.MsjRegitrarEstadoDocumento });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }           
        },

        AjaxGrabarSuccess: function (resultado) {           
            if (resultado.IsSuccess) {               
                if (resultado.Result.CodigoTipoRegistroParametro == Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.ComiteSubComite)
                {
                    base.Event.AjaxGrabarComiteSSomaSuccess(resultado);
                }
                else if (resultado.Result.CodigoTipoRegistroParametro == Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.VisitaGerencial)
                {
                    base.Event.AjaxGrabarVisitaGerencialSuccess(resultado);
                }
                else if (resultado.Result.indicadorOtrosRegistros == true)
                {
                    base.Event.AjaxGrabarOtrosRegistrosSuccess(resultado);
                }
                else
                {
                    base.Event.BtnOperacionExitosoRecordAccionClick();
                }
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxSalirAccionVisitaGerencialSuccess: function (resultado) {
            if (resultado.IsSuccess)
            {
                    base.Event.BtnOperacionExitosoRecordAccionClick();               
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        
    };
    base.Ajax = {
        AjaxGrabar: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.RegistrarRecordAccionGenerico,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarSuccess
        }),
        AjaxSalirAccionVisitaGerencial: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.SalirRecordAccionGenerico,
            autoSubmit: false,
            onSuccess: base.Event.AjaxSalirAccionVisitaGerencialSuccess
        })
    };

    base.Function = {
        ValidacionExtra: function () {
            var validaciones = new Array();

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.HdnFrmCodigoColaboradorPlanteaAccion().val() == null || base.Control.HdnFrmCodigoColaboradorPlanteaAccion().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtFrmNombreColaboradorPlanteaAccion().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtFrmNombreColaboradorPlanteaAccion().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.HdnFrmCodigoColaboradorResponsableAccion().val() == null || base.Control.HdnFrmCodigoColaboradorResponsableAccion().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtFrmNombreColaboradorResponsableAccion().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtFrmNombreColaboradorResponsableAccion().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });

            //Modulo Observacion Planeada
            validaciones.push({
                Event: function () {                    
                    var resultado = true;
                    switch (base.Control.RecordAccionModel.RecordAccion.CodigoTipoRegistroParametro) {
                        case Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.ObservacionPlamneadaTarea:
                        case Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inspecciones:
                        case Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.ReporteRiesgos:
                        case Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Investigacion:
                            if (base.Control.SlcListaControl().val() == '' || base.Control.SlcListaControl().val() == null) {
                                resultado = false;
                            }
                            break;
                        default:
                            if (base.Control.RecordAccionModel.RecordAccion.indicadorOtrosRegistros) {
                                if (base.Control.SlcListaControl().val() == '' || base.Control.SlcListaControl().val() == null) {
                                    resultado = false;
                                }
                            }
                            break;
                    }

                    if (resultado) {
                        base.Control.SlcListaControl().attr('class', 'form-control');
                    }
                    else {
                        base.Control.SlcListaControl().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;
                 
                    if ((base.Control.RecordAccionModel.RecordAccion.CodigoTipoRegistroParametro == Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.ObservacionPlamneadaTarea ||
                        base.Control.RecordAccionModel.RecordAccion.CodigoTipoRegistroParametro == Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inspecciones ||
                        base.Control.RecordAccionModel.RecordAccion.CodigoTipoRegistroParametro == Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.ReporteRiesgos)
                        && (base.Control.SlcListaControlCalidad().val() == '' || base.Control.SlcListaControlCalidad().val() == null)) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.SlcListaControlCalidad().attr('class', 'form-control');
                    }
                    else {
                        base.Control.SlcListaControlCalidad().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });

            //validaciones.push({
            //    Event: function () {
            //        var resultado = true;
            //        if (base.Control.RecordAccionModel.RecordAccion.CodigoTipoRegistroParametro == Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Investigacion
            //            && (base.Control.SlcListaControl().val() == '' || base.Control.SlcListaControl().val() == null)) {
            //            resultado = false;
            //        }

            //        if (resultado) {
            //            base.Control.SlcListaControl().attr('class', 'form-control');
            //        }
            //        else {
            //            base.Control.SlcListaControl().attr('class', 'form-control hasError');
            //        }

            //        return resultado;
            //    },

            //    codeMessage: "Validar"
            //});

            //validaciones.push({
            //    Event: function () {
            //        var resultado = true;
            //        if (base.Control.RecordAccionModel.RecordAccion.indicadorOtrosRegistros == true
            //            && (base.Control.SlcListaControl().val() == '' || base.Control.SlcListaControl().val() == null)) {
            //            resultado = false;
            //        }

            //        if (resultado) {
            //            base.Control.SlcListaControl().attr('class', 'form-control');
            //        }
            //        else {
            //            base.Control.SlcListaControl().attr('class', 'form-control hasError');
            //        }

            //        return resultado;
            //    },

            //    codeMessage: "Validar"
            //});

            return validaciones;
        }
    };
};
