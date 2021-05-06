ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordAnexoApendice');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordAnexoApendice.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Event.GrabarRecordAnexoApendiceSuccess = (opts.GrabarRecordAnexoApendiceSuccess != null && opts.GrabarRecordAnexoApendiceSuccess) ? opts.GrabarRecordAnexoApendiceSuccess : null;
        base.Control.RecordAnexoModel = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Models.RecordsModel;
                
        if (base.Control.RecordAnexoModel.RecordAnexo.Nombre != null) {
            $('#NombreArchivoApendice .ClsNombreArchivoApendice').html('<p>' + base.Control.RecordAnexoModel.RecordAnexo.Nombre + '</p>');
        }

        base.Control.BtnCancelar().off('click');
        base.Control.BtnCancelar().on('click', base.Event.BtnCancelarClick);

        base.Control.BtnGrabarRecordAnexoApendice().off('click');
        base.Control.BtnGrabarRecordAnexoApendice().on('click', base.Event.BtnGrabarRecordAnexoApendiceClick);

        base.Control.FileApendice().on("change", function () {
            var files = this.files;

            if (!files) {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.EtiquetaFormatoArchivoNoSoportado });
                return;
            }

            if (this.files && this.files[0]) {
                var reader = new FileReader();
                if (this.files[0].size <= base.Control.RecordAnexoModel.RecordAnexo.PesoMaximoArchivoAnexoSharePoint) {
                    base.Control.FileApendice().removeClass('hasError');
                    $('#frmRecordAnexoAppendixSummaryErrorMessage').addClass("hidden");

                    base.Control.NombreArchivoApendice = this.files[0].name;
                    var uploadFile = this.files[0];

                    reader.onload = function (e) {
                        if (reader.result != "" && reader.result != null) {
                            base.Control.ArchivoBase64 = reader.result.split(',')[1];
                        }
                        else {
                            base.Control.ArchivoBase64 = null;
                            base.Control.FileApendice().val('');
                            $('#txtAnexoFotoString').val('');
                            base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.ValidaArchivo });
                            if (base.Control.RecordAnexoModel.RecordAnexo.Nombre != null) {
                                $('#NombreArchivoApendice .ClsNombreArchivoApendice').html('');
                            }
                        }
                    };

                    reader.readAsDataURL(uploadFile);
                } else {
                    base.Control.ArchivoBase64 = null;
                    base.Control.FileApendice().val('');
                    base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.EtiquetaTamanioArchivoAnexoMaximo.format(base.Control.RecordAnexoModel.RecordAnexo.PesoMaximoArchivoAnexoSharePointString) });
                }
            }
        });

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmRecordAnexoRegistrar(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtra()
        });
    };

    base.Show = function (opts) {
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.TitulosVentanas.Anexo,
            size: "size-wide",
            close: function () {
            }
        });

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.FormularioRecordAnexoAppendix,
            onSuccess: function () {
                base.Ini();
            },
            data: {
                CodigoEstadoRecord: opts.CodigoEstadoRecord,
                CodigoRecordAnexo: opts.CodigoRecordAnexo,
                CodigoRecord: opts.CodigoRecord
            }
        });
    };

    base.Control = {
        FrmRecordAnexoRegistrar: function () { return $('#frmRecordAnexoAppendix') },
        BtnCargarFoto: function () { return $('#btnCargarFoto'); },
        FileApendice: function () { return $('#fileApendice'); },
        Validador: null,

        BtnCancelar: function () { return $('#btnCancelarRecordAnexoApendice'); },
        BtnGrabarRecordAnexoApendice: function () { return $('#btnGrabarRecordAnexoApendice'); },
        TxtDescripcionApendice: function () { return $('#txtDescripcionApendice'); },
        SlcTipoAnexo: function () { return $('#slcTipoAnexo'); },
        DlgFormularioRecordAnexoAppendix: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        RecordAnexoModel: null,

        ArchivoBase64: null,
        Extension: null,
        NombreArchivo: null,
        CodigoEstadoRecord: null
    };

    base.Event = {
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

        BtnGrabarRecordAnexoApendiceClick: function () {
            'use strict'
            if (base.Control.RecordAnexoModel.RecordAnexo.CodigoRecordAnexo != null && (base.Control.ArchivoBase64 == null || base.Control.ArchivoBase64 == '')) {
                base.Control.ArchivoBase64 = $('#txtAnexoFotoString').val();
            }

            if (base.Control.Validador.isValid()) {
                var descripcion = base.Control.TxtDescripcionApendice().val();
                var fileapendice = base.Control.FileApendice().val() != '' ? base.Control.FileApendice().val() : base.Control.RecordAnexoModel.RecordAnexo.Nombre;

                if (fileapendice != null && fileapendice != '') {
                    base.Control.Mensaje.Confirmation({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,//'Do You want to save this Record Successfully?',
                        onAccept: function () {
                            base.Ajax.AjaxGrabarRecordAnexoApendice.data = {
                                CodigoRecordAnexo: base.Control.RecordAnexoModel.RecordAnexo.CodigoRecordAnexo != null ? base.Control.RecordAnexoModel.RecordAnexo.CodigoRecordAnexo : null,
                                CodigoRecord: base.Control.RecordAnexoModel.RecordAnexo.CodigoRecord != null ? base.Control.RecordAnexoModel.RecordAnexo.CodigoRecord : null,
                                Nombre: fileapendice,
                                Descripcion: descripcion,
                                CodigoTipoAnexo: 'ADJ',
                                CodigoTipoApendice: base.Control.SlcTipoAnexo().val(),
                                AnexoString: base.Control.ArchivoBase64,
                                NombreArchivoApendice: base.Control.NombreArchivoApendice
                            };

                            base.Ajax.AjaxGrabarRecordAnexoApendice.submit();
                        }
                    });
                }
                else {
                    base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.ValidarCampoArchivo });
                    return false;
                }
            }
            else {
                $('#frmRecordAnexoAppendixSummaryErrorMessage').empty();
                $('#frmRecordAnexoAppendixSummaryErrorMessage').attr("style", 'width:350px');
                $('#frmRecordAnexoAppendixSummaryErrorMessage').append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },

        AjaxGrabarRecordAnexoApendiceSuccess: function (data) {
            if (data.Result >= 1) {
                base.Control.Mensaje.Information({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });

                base.Control.ArchivoBase64 = null;
                base.Control.NombreArchivoApendice = null;

                base.Control.DlgForm.divDialog.close();

                if (base.Event.GrabarRecordAnexoApendiceSuccess() != null) {
                    base.Event.GrabarRecordAnexoApendiceSuccess();
                }

            } else {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        }
    };

    base.Ajax = {
        AjaxGrabarRecordAnexoApendice: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.RegistrarRecordAnexoApendice,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarRecordAnexoApendiceSuccess
        })
    };

    base.Function = {
        ValidacionExtra: function () {
            var validaciones = new Array();

            validaciones.push({
                Event: function () {
                    var resultado = true;
                    if (base.Control.ArchivoBase64 == null || base.Control.ArchivoBase64 == "") {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.FileApendice().attr('class', 'form-control');
                    }
                    else {
                        base.Control.FileApendice().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });

            return validaciones;
        }
    };
};