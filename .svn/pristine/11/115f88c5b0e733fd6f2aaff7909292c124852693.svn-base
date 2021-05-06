ns('Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.FormularioAnexo');
Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.FormularioAnexo.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Event.GrabarAnexoApendiceSuccess = (opts.GrabarAnexoApendiceSuccess != null && opts.GrabarAnexoApendiceSuccess) ? opts.GrabarAnexoApendiceSuccess : null;
        base.Control.FormularioAnexoModel = Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.FormularioAnexo.Models.FormularioModelo;

        if (base.Control.FormularioAnexoModel.AtencionMedicaAnexo.Nombre != null) {
            $('#NombreArchivoApendice .ClsNombreArchivoApendice').html('<p>' + base.Control.FormularioAnexoModel.AtencionMedicaAnexo.Nombre + '</p>');
        }

        base.Control.BtnGrabarAnexo().off('click');
        base.Control.BtnGrabarAnexo().on('click', base.Event.BtnGrabarAnexoClick);

        base.Control.FileApendice().on("change", function () {
            var files = this.files;

            if (!files) {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.EtiquetaFormatoArchivoNoSoportado });
                return;
            }

            if (this.files && this.files[0]) {
                var reader = new FileReader();
                if (this.files[0].size <= base.Control.FormularioAnexoModel.AtencionMedicaAnexo.PesoMaximoArchivoAnexoSharePoint) {
                    base.Control.FileApendice().removeClass('hasError');
                    $('#frmAnexoSummaryErrorMessage').addClass("hidden");

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
                            base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.ValidaArchivo });
                            if (base.Control.FormularioAnexoModel.AtencionMedicaAnexo.Nombre != null) {
                                $('#NombreArchivoApendice .ClsNombreArchivoApendice').html('');
                            }
                        }
                    };

                    reader.readAsDataURL(uploadFile);
                } else {
                    base.Control.ArchivoBase64 = null;
                    base.Control.FileApendice().val('');
                    base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.EtiquetaTamanioArchivoAnexoMaximo.format(base.Control.FormularioAnexoModel.AtencionMedicaAnexo.PesoMaximoArchivoAnexoSharePointString) });
                }
            }
        });

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmAnexo(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtra()
        });
    };

    base.Show = function (opts) {        
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.TituloFormularioAnexo,
            size: "size-wide",
            close: function () {
            }
        });

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Actions.FormularioAnexo,
            onSuccess: function () {
                base.Ini();
            },
            data: {
                CodigoAtencionMedicaAnexo: opts.CodigoAtencionMedicaAnexo,
                CodigoAtencionMedica: opts.CodigoAtencionMedica,
                EstadoAtencionMedica: opts.EstadoAtencionMedica
            }
        });
    };

    base.Control = {
        BtnGrabarAnexo: function () { return $('#btnGrabarAnexo'); },

        FormularioAnexoModel: null,
        FrmAnexo: function () { return $('#frmAnexo'); },
        FileApendice: function () { return $('#fileApendice'); },
        
        TxtDescripcionApendice: function () { return $('#txtDescripcionApendice'); },
        SlcTipoAnexo: function () { return $('#slcTipoAnexo'); },
        DlgFormularioRecordAnexoAppendix: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        FormularioAnexoModel: null,

        ArchivoBase64: null,
        Extension: null,
        NombreArchivo: null,
        Validador: null,
    };

    base.Event = {
        BtnGrabarAnexoClick: function () {
            'use strict'
            if (base.Control.FormularioAnexoModel.AtencionMedicaAnexo.CodigoAtencionMedicaAnexo != null && (base.Control.ArchivoBase64 == null || base.Control.ArchivoBase64 == '')) {
                base.Control.ArchivoBase64 = $('#txtAnexoFotoString').val();
            }

            if (base.Control.Validador.isValid()) {
                var descripcion = base.Control.TxtDescripcionApendice().val();
                var fileapendice = base.Control.FileApendice().val() != '' ? base.Control.FileApendice().val() : base.Control.FormularioAnexoModel.AtencionMedicaAnexo.Nombre;

                if (fileapendice != null && fileapendice != '') {
                    base.Control.Mensaje.Confirmation({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,//'Do You want to save this Record Successfully?',
                        onAccept: function () {
                            base.Ajax.AjaxGrabarAnexoApendice.data = {
                                CodigoAtencionMedicaAnexo: base.Control.FormularioAnexoModel.AtencionMedicaAnexo.CodigoAtencionMedicaAnexo != null ? base.Control.FormularioAnexoModel.AtencionMedicaAnexo.CodigoAtencionMedicaAnexo : null,
                                CodigoAtencionMedica: base.Control.FormularioAnexoModel.AtencionMedicaAnexo.CodigoAtencionMedica != null ? base.Control.FormularioAnexoModel.AtencionMedicaAnexo.CodigoAtencionMedica : null,
                                Nombre: fileapendice,
                                Descripcion: descripcion,
                                CodigoTipoAnexo: 'ADJ',
                                CodigoTipoApendice: base.Control.SlcTipoAnexo().val(),
                                AnexoString: base.Control.ArchivoBase64,
                                NombreArchivoApendice: base.Control.NombreArchivoApendice
                            };

                            base.Ajax.AjaxGrabarAnexoApendice.submit();
                        }
                    });
                }
                else {
                    base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Resource.ValidaArchivo });
                    return false;
                }
            }
            else {
                $('#frmAnexoSummaryErrorMessage').empty();
                $('#frmAnexoSummaryErrorMessage').attr("style", 'width:350px');
                $('#frmAnexoSummaryErrorMessage').append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },
        AjaxGrabarAnexoApendiceSuccess: function (data) {
            if (data.Result >= 1) {
                base.Control.Mensaje.Information({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });

                base.Control.ArchivoBase64 = null;
                base.Control.NombreArchivoApendice = null;

                base.Control.DlgForm.divDialog.close();

                if (base.Event.GrabarAnexoApendiceSuccess() != null) {
                    base.Event.GrabarAnexoApendiceSuccess();
                }

            } else {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        }
    };

    base.Ajax = {
        AjaxGrabarAnexoApendice: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.GestionLesiones.FormularioAtencion.Actions.RegistrarAtencionMedicaAnexo,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarAnexoApendiceSuccess
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