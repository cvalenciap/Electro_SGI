/// <summary>
/// Script de formulario de Supervisor
/// </summary>
/// <remarks>
/// Creacion: 	GMD D43260443
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioAccionCorrectiva');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioAccionCorrectiva.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Event.GrabarRecordAccionSuccess = (opts.GrabarRecordAccionSuccess != null && opts.GrabarRecordAccionSuccess) ? opts.GrabarRecordAccionSuccess : null;
        base.Control.RecordAccionModel = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Models.RecordsModel;
        //Edicion
        base.Control.ArrCausaRaiz = [];
        if (base.Control.RecordAccionModel != null && base.Control.RecordAccionModel.ListaAccionCorrectivaCausa != null) {
            for (var i = 0; i < base.Control.RecordAccionModel.ListaAccionCorrectivaCausa.length; i++) {
                base.Control.ArrCausaRaiz.push({
                    CodigoInvestigacion: base.Control.RecordAccionModel.ListaAccionCorrectivaCausa[i].CodigoInvestigacion,
                    CodigoInvestigacionCausaRaiz: base.Control.RecordAccionModel.ListaAccionCorrectivaCausa[i].CodigoInvestigacionCausaRaiz
                });
            }
        }
        if (base.Control.RecordAccionModel.RecordAccion.NombreArchivoFotoSharePoint != null) {
            $('#divNombreArchivoFotoAccion .clsNombreArchivoFotoAccion').html('<p>' + base.Control.RecordAccionModel.RecordAccion.NombreArchivoFotoSharePoint + '</p>');
        }

        if (base.Control.RecordAccionModel.RecordAccion.NombreArchivoApendiceSharePoint != null) {
            $('#divNombreArchivoApendiceAccion .clsNombreArchivoApendiceAccion').html('<p>' + base.Control.RecordAccionModel.RecordAccion.NombreArchivoApendiceSharePoint + '</p>');
        }

        if (base.Control.RecordAccionModel.RecordAccion.CodigoProyecto != null && base.Control.RecordAccionModel.RecordAccion.CodigoProyecto > 0) {
            base.Ajax.AjaxCombosCascada(base.Control.RecordAccionModel.RecordAccion.CodigoProyecto, base.Control.RecordAccionModel.RecordAccion.CodigoDepartamento, base.Control.RecordAccionModel.RecordAccion.CodigoArea);
        }        

        base.Control.BtnCancelarRecordAccion().off('click');
        base.Control.BtnCancelarRecordAccion().on('click', base.Event.BtnCancelarRecordAccionClick);

        base.Control.BtnGrabarRecordAccion().off('click');
        base.Control.BtnGrabarRecordAccion().on('click', base.Event.BtnGrabarRecordAccionClick);

        base.Control.ChkCausaRaiz().off('click');
        base.Control.ChkCausaRaiz().on('click', base.Event.ChkCausaRaizClick);

        base.Control.TxtFrmRepetirAccionCada().on("keypress", base.Event.TxtSoloNumerosKeypress);

        var hoy = new Date();
        var dd = hoy.getDate();
        var mm = hoy.getMonth();
        var yyyy = hoy.getFullYear();

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

        base.Control.SlcFrmProyectoAccion().off('change');
        base.Control.SlcFrmProyectoAccion().on('change', base.Event.SlcFrmProyectoAccionChange);

        base.Control.SlcFrmDepartamentoAccion().off('change');
        base.Control.SlcFrmDepartamentoAccion().on('change', base.Event.SlcFrmDepartamentoAccionChange);


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
                    base.Control.SlcFrmProyectoAccion().val(objColaborador[0].CodigoProyecto);
                    base.Ajax.AjaxCombosCascadaResponsable(objColaborador[0].CodigoProyecto, objColaborador[0].CodigoDepartamento, objColaborador[0].CodigoArea);
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
            messages: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.ValidarCamposAccionCorrectiva,
            validationsExtra: base.Function.ValidacionExtra()
        });

        base.Control.BtnBuscarColaboradorPlanteaAccion().off('click');
        base.Control.BtnBuscarColaboradorPlanteaAccion().on('click', base.Event.BtnBuscarColaboradorPlanteAccionClick);

        base.Control.BtnBuscarColaboradorResponsableAccion().off('click');
        base.Control.BtnBuscarColaboradorResponsableAccion().on('click', base.Event.BtnOpenModalResponsable);
        
        base.Control.DlgFormularioSeleccionarCausaRaiz = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioSeleccionarCausaRaiz.Controller({
            AceptarSuccess: base.Event.BtnMostrarCausasRaices
        });
    };

    base.Show = function (opts) {        
        base.Control.CodigoInvestigacion = opts.CodigoInvestigacion;
        base.Control.DlgFormularioRecordAccion = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.TitulosVentanaAccionCorrectiva,
            size: "size-wide",
            close: function () {

            }
        });

        base.Control.DlgFormularioRecordAccion.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.FormularioAccionCorrectiva,
            onSuccess: function () {
                base.Ini();
            },
            data: opts
        });
    };


    base.Control = {
        CodigoEstadoInvestigacion : null,
        ArrCausaRaiz: [],
        CodigoInvestigacion: null,
        FrmRecordAccionRegistrar: function () { return $('#frmRecordAccion') },
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        RecordAccionModel: null,
        DlgFormularioRecordAccion: null,
        DlgFormularioSeleccionarCausaRaiz: null,
        Validador: null,

        BtnBuscarColaboradorPlanteaAccion: function () { return $('#btnBuscarColaboradorPlanteaAccion'); },
        BtnBuscarColaboradorResponsableAccion: function () { return $('#btnBuscarColaboradorResponsableAccion'); },

        FileFrmFotoAccion: function () { return $('#fileFrmFotoAccion'); },
        FileFrmApendiceAccion: function () { return $('#fileFrmApendiceAccion'); },

        HdnFrmCodigoColaboradorResponsableAccion: function () { return $('#hdnFrmCodigoColaboradorResponsableAccion'); },
        TxtFrmNombreColaboradorResponsableAccion: function () { return $('#txtFrmNombreColaboradorResponsableAccion'); },
        DtpFrmFechaAccionPlanteada: function () { return $('#dtpFrmFechaAccionPlanteada'); },
        TxtFrmDescripcionAccion: function () { return $('#txtFrmDescripcionAccion'); },
        TxtFrmDescripcionCorta: function () { return $('#txtFrmDescripcionCorta'); },
        TxtFrmRepetirAccionCada: function () { return $('#txtFrmRepetirAccionCada'); },
        ChkFrmIndicadorMes: function () { return $('#chkFrmIndicadorMes'); },
        DtpFrmFechaVencimiento: function () { return $('#dtpFrmFechaVencimiento'); },
        SlcFrmPrioridad: function () { return $('#slcFrmPrioridad'); },
        TxtFrmNumeroAccion: function () { return $('#txtFrmNumeroAccion'); },
        HdnFrmCodigoColaboradorPlanteaAccion: function () { return $('#hdnFrmCodigoColaboradorPlanteaAccion'); },
        TxtFrmNombreColaboradorPlanteaAccion: function () { return $('#txtFrmNombreColaboradorPlanteaAccion'); },
        TxtNombreCausasRaices: function () { return $('#txtNombreCausasRaices'); },
        ChkCausaRaiz: function () { return $('#chkCausaRaiz'); },

        SlcFrmEmpresaAccion: function () { return $('#slcFrmEmpresaAccion'); },
        SlcFrmProyectoAccion: function () { return $('#slcFrmProyectoAccion'); },
        SlcFrmDepartamentoAccion: function () { return $('#slcFrmDepartamentoAccion'); },
        SlcFrmAreaAccion: function () { return $('#slcFrmAreaAccion'); },
        SlcFrmTipoControl: function () { return $('#slcFrmTipoControl'); },

        BtnCancelarRecordAccion: function () { return $('#btnCancelarRecordAccion'); },
        BtnGrabarRecordAccion: function () { return $('#btnGrabarRecordAccion'); },

        PhotoBase64: null,
        PhotoNombreArchivo: null,
        PhotoExtension: null,
        AppendiceBase64: null,
        AppendiceNombreArchivo: null,
        AppendiceExtension: null,
    };

    base.Event = {
        TxtSoloNumerosKeypress: function (event) {
            var regex = /[0-9]/;
            var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
            if (!regex.test(key)) {
                event.preventDefault();
                return false;
            }
        },

        BtnCancelarRecordAccionClick: function () {
            base.Control.DlgFormularioRecordAccion.divDialog.close();
        },

        SlcFrmProyectoAccionChange: function () {
            if (base.Control.SlcFrmProyectoAccion().val() != '') {
                base.Ajax.AjaxBuscarDepartamento.data = {
                    CodigoProyecto: base.Control.SlcFrmProyectoAccion().val()
                };

                base.Ajax.AjaxBuscarDepartamento.submit();
            }
            else {
                base.Control.SlcFrmDepartamentoAccion().empty();
                base.Control.SlcFrmAreaAccion().empty();
                base.Control.SlcFrmDepartamentoAccion().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
                base.Control.SlcFrmAreaAccion().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
            }
        },

        SlcFrmDepartamentoAccionChange: function () {
            if (base.Control.SlcFrmDepartamentoAccion().val() != '') {
                base.Ajax.AjaxBuscarArea.data = {
                    CodigoDepartamento: base.Control.SlcFrmDepartamentoAccion().val()
                };
                base.Ajax.AjaxBuscarArea.submit();
            }
            else {
                base.Control.SlcFrmAreaAccion().empty();
                base.Control.SlcFrmAreaAccion().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
            }
        },

        BtnBuscarColaboradorPlanteAccionClick: function () {
            base.Control.DlgFormularioColaboradorPlanteaAccion.Show(false, [], null);

        },
        BtnOpenModalResponsable: function () {
            base.Control.DlgFormularioResponsable.Show(false, [], null);
        },

        ValidarCopiarAlfanumerico: function (e) {
            return Pe.GMD.UI.Web.Components.Util.ValidateCopyOnlyAlphanumeric(e);
        },

        BtnCargarFotoClick: function () {
        },

        AceptarFile: function (archivo, nombreArchivo, extension) {
            if (archivo != null) {
                $('#imgFotoColaborador').attr('src', "data:image/png;base64," + archivo);
                base.Control.ArchivoBase64 = archivo;
                base.Control.DlgFrmFormularioRecordAnexoAppendix.close();
            }
            else {
                base.Control.ArchivoBase64 = null;
            }
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
                            CodigoRecordAccion: base.Control.RecordAccionModel.RecordAccion.CodigoRecordAccion != null ? base.Control.RecordAccionModel.RecordAccion.CodigoRecordAccion : null,
                            CodigoRecord: base.Control.RecordAccionModel.RecordAccion.CodigoRecord != null ? base.Control.RecordAccionModel.RecordAccion.CodigoRecord : null,
                            NumeroAccion: base.Control.TxtFrmNumeroAccion().val(),
                            CodigoColaboradorPlanteaAccion: base.Control.HdnFrmCodigoColaboradorPlanteaAccion().val(),
                            FechaAccionPlanteadaString: base.Control.DtpFrmFechaAccionPlanteada().val(),
                            CodigoTipoControl: base.Control.SlcFrmTipoControl().val(),
                            DescripcionCorta: base.Control.TxtFrmDescripcionCorta().val(),
                            Descripcion: base.Control.TxtFrmDescripcionAccion().val(),
                            CantidadRepetirAccion: base.Control.TxtFrmRepetirAccionCada().val(),
                            IndicadorMes: base.Control.ChkFrmIndicadorMes().is(':checked'),
                            FechaVencimientoString: base.Control.DtpFrmFechaVencimiento().val(),
                            CodigoPrioridad: base.Control.SlcFrmPrioridad().val(),
                            CodigoColaboradorResponsable: base.Control.HdnFrmCodigoColaboradorResponsableAccion().val(),
                            CodigoProyecto: base.Control.SlcFrmProyectoAccion().val(),
                            CodigoDepartamento: base.Control.SlcFrmDepartamentoAccion().val(),
                            CodigoArea: base.Control.SlcFrmAreaAccion().val(),
                            ListaAccionCorrectivaCausa: base.Control.ArrCausaRaiz,
                            CodigoInvestigacion: base.Control.CodigoInvestigacion,
                            CodigoEmpresa: base.Control.SlcFrmEmpresaAccion().val(),
                            DataArchivoFoto: base.Control.PhotoBase64,
                            NombreArchivoFotoSharePoint: base.Control.PhotoNombreArchivo == null ? base.Control.RecordAccionModel.RecordAccion.NombreArchivoFotoSharePoint : base.Control.PhotoNombreArchivo,
                            DataArchivoApendice: base.Control.AppendiceBase64,
                            NombreArchivoApendiceSharePoint: base.Control.AppendiceNombreArchivo == null ? base.Control.RecordAccionModel.RecordAccion.NombreArchivoApendiceSharePoint : base.Control.AppendiceNombreArchivo
                        };
                        base.Ajax.AjaxGrabar.submit();
                    }
                });
            }
            else {
                $('#frmRecordAccionSummaryErrorMessage').empty();
                $('#frmRecordAccionSummaryErrorMessage').append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
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

        AjaxEliminarSuccess: function (data) {
            'use strict'
            if (data.Result >= 1) {
                base.Control.Mensaje.Information({ message: Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaEliminacionExitosa });
                base.Event.BtnBuscarClick();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaErrorRegistro });
            }
        },

        BtnGridEditClick: function (row, data) {
            'use strict'
            base.Control.DlgFormularioCentroCosto.Show({
                data: { CodigoCentroCosto: data.CodigoCentroCosto }
            });
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

        AjaxGrabarSuccess: function (data) {            
            if (data.IsSuccess) {
                base.Control.Mensaje.Information({
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

            } else {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },

        AjaxBuscarDepartamentoSuccess: function (resultado) {
            base.Control.SlcFrmDepartamentoAccion().empty();
            base.Control.SlcFrmAreaAccion().empty();
            base.Control.SlcFrmDepartamentoAccion().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
            base.Control.SlcFrmAreaAccion().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
            $.each(resultado.Result, function (index, value) {
                base.Control.SlcFrmDepartamentoAccion().append(new Option(value.NombreDepartamento, value.CodigoDepartamento));
            });
        },

        AjaxBuscarAreaSuccess: function (resultado) {
            base.Control.SlcFrmAreaAccion().empty();
            base.Control.SlcFrmAreaAccion().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
            $.each(resultado.Result, function (index, value) {
                base.Control.SlcFrmAreaAccion().append(new Option(value.NombreArea, value.CodigoArea));
            });
        },

        ChkCausaRaizClick: function () {
            if ($(this).is(":checked")) {
                var filtro = {
                    CodigoInvestigacion: base.Control.CodigoInvestigacion,
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
                        CodigoInvestigacion: base.Control.CodigoInvestigacion,
                        CodigoInvestigacionCausaRaiz: arrCausas[i].Valor
                    });
                    textoRaices += arrCausas[i].Identificador + ', ';
                }
                base.Control.TxtNombreCausasRaices().val(textoRaices);                
            }
            else {
                base.Control.TxtNombreCausasRaices().val('');
            }
        }
    };

    base.Ajax = {
        AjaxGrabar: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarRecordAccion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarSuccess
        }),

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

        AjaxCombosCascada: function (CodigoProyecto, CodigoDepartamento, CodigoArea) {
            if (CodigoProyecto != null && CodigoProyecto != undefined && CodigoProyecto != '') {
                $.post(Pe.ElectroPeru.SGI.Presentacion.Base.Actions.BuscarDepartamento, { CodigoProyecto: CodigoProyecto }, function (resultado) {
                    if (CodigoDepartamento != null && CodigoDepartamento != undefined && CodigoDepartamento != '') {
                        base.Control.SlcFrmDepartamentoAccion().empty();
                        base.Control.SlcFrmAreaAccion().empty();
                        base.Control.SlcFrmDepartamentoAccion().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
                        base.Control.SlcFrmAreaAccion().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
                        $.each(resultado.Result, function (index, value) {
                            base.Control.SlcFrmDepartamentoAccion().append(new Option(value.NombreDepartamento, value.CodigoDepartamento));
                        });
                        base.Control.SlcFrmDepartamentoAccion().val(CodigoDepartamento);

                        $.post(Pe.ElectroPeru.SGI.Presentacion.Base.Actions.BuscarArea, { CodigoDepartamento: CodigoDepartamento }, function (resultado) {
                            base.Control.SlcFrmAreaAccion().empty();
                            base.Control.SlcFrmAreaAccion().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
                            $.each(resultado.Result, function (index, value) {
                                base.Control.SlcFrmAreaAccion().append(new Option(value.NombreArea, value.CodigoArea));
                            });

                            if (CodigoArea != null && CodigoArea != undefined && CodigoArea != '') {
                                base.Control.SlcFrmAreaAccion().val(CodigoArea);
                            }
                            else {
                                base.Control.SlcFrmAreaAccion().empty();
                                base.Control.SlcFrmAreaAccion().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
                            }
                        });
                    }
                    else {
                        base.Control.SlcFrmDepartamentoAccion().empty();
                        base.Control.SlcFrmDepartamentoAccion().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
                        base.Control.SlcFrmAreaAccion().empty();
                        base.Control.SlcFrmAreaAccion().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
                    }
                });
            }
        },

        AjaxCombosCascadaResponsable: function (CodigoProyecto, CodigoDepartamento, CodigoArea) {
            if (CodigoProyecto != null && CodigoProyecto != undefined && CodigoProyecto != '') {
                $.post(Pe.ElectroPeru.SGI.Presentacion.Base.Actions.BuscarDepartamento, { CodigoProyecto: CodigoProyecto }, function (resultado) {
                    base.Control.SlcFrmDepartamentoAccion().empty();
                    base.Control.SlcFrmDepartamentoAccion().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));

                    base.Control.SlcFrmAreaAccion().empty();
                    base.Control.SlcFrmAreaAccion().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));

                    $.each(resultado.Result, function (index, value) {
                        base.Control.SlcFrmDepartamentoAccion().append(new Option(value.NombreDepartamento, value.CodigoDepartamento));
                    });

                    base.Control.SlcFrmDepartamentoAccion().val(CodigoDepartamento);

                    if (CodigoDepartamento != null && CodigoDepartamento != undefined && CodigoDepartamento != '') {
                        $.post(Pe.ElectroPeru.SGI.Presentacion.Base.Actions.BuscarArea, { CodigoDepartamento: CodigoDepartamento }, function (resultado) {
                            base.Control.SlcFrmAreaAccion().empty();
                            base.Control.SlcFrmAreaAccion().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));

                            $.each(resultado.Result, function (index, value) {
                                base.Control.SlcFrmAreaAccion().append(new Option(value.NombreArea, value.CodigoArea));
                            });

                            base.Control.SlcFrmAreaAccion().val(CodigoArea);
                        });
                    }
                    else {
                        base.Control.SlcFrmAreaAccion().empty();
                        base.Control.SlcFrmAreaAccion().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
                    }
                });
            }
        }
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

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.SlcFrmDepartamentoAccion().children().length > 1 && base.Control.SlcFrmDepartamentoAccion().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.SlcFrmDepartamentoAccion().attr('class', 'form-control');
                    }
                    else {
                        base.Control.SlcFrmDepartamentoAccion().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.TxtNombreCausasRaices().val() == null || base.Control.TxtNombreCausasRaices().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtNombreCausasRaices().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtNombreCausasRaices().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.SlcFrmAreaAccion().children().length > 1 && base.Control.SlcFrmAreaAccion().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.SlcFrmAreaAccion().attr('class', 'form-control');
                    }
                    else {
                        base.Control.SlcFrmAreaAccion().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });

            validaciones.push({
                Event: function () {
                    var resultado = true;                    
                    if (base.Control.ArrCausaRaiz.length == 0) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtNombreCausasRaices().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtNombreCausasRaices().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });
            return validaciones;
        },
    };
};
