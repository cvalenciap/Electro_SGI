/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 25012017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.FormularioRecordAnexoFotoAccion');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.FormularioRecordAnexoFotoAccion.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Event.GrabarRecordAnexoFotoSuccess = (opts.GrabarRecordAnexoFotoSuccess != null && opts.GrabarRecordAnexoFotoSuccess) ? opts.GrabarRecordAnexoFotoSuccess : null;
        base.Control.RecordAnexoModel = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Models.RecordsModel;

        base.Control.BtnCancelarRecordAnexoFoto().off('click');
        base.Control.BtnCancelarRecordAnexoFoto().on('click', base.Event.BtnCancelarRecordAnexoFotoClick);

        base.Control.BtnEliminarFoto().off('click');
        base.Control.BtnEliminarFoto().on('click', base.Event.BtnEliminarFotoClick);

        base.Control.BtnGrabarRecordAnexoFoto().off('click');
        base.Control.BtnGrabarRecordAnexoFoto().on('click', base.Event.BtnGrabarRecordAnexoFotoClick);

        new Pe.GMD.UI.Web.Components.AjaxUpload({
            inputFile: base.Control.FileArchivoCargar(),
            urlValidateFile: Pe.ElectroPeru.SGI.Presentacion.Base.CargarArchivo.Actions.UploadDocument,
            callbackValidateFile: base.Event.FileArchivoEvidenciaChange,
        });

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmRecordAnexoFoto(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resources.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtra()
        });
    };

    base.Show = function (opts) {
        base.Control.DlgFormularioRecordAnexoFotoAccion = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.EtiquetaTituloFormularioRecordAnexoFotoAccion,
            size: "size-wide",
            close: function () {
            }
        });
        
        base.Control.DlgFormularioRecordAnexoFotoAccion.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Actions.FormularioRecordAnexoFotoAccion,
            onSuccess: function () {
                base.Ini();
            },
            
            data: {
                CodigoEstadoRecord: opts.CodigoEstadoRecord,
                CodigoRecordAnexo: opts.CodigoRecordAnexo,
                CodigoRecord: opts.CodigoRecord,
                CodigoArchivoAnexoSharePoint: opts.CodigoArchivoAnexoSharePoint
            }
        });
    };

    base.Control = {
        FrmRecordAnexoFoto: function () { return $('#frmRecordAnexoFotoAccion') },
        DlgFormularioRecordAnexoFotoAccion: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),

        FileArchivoCargar: function () { return $('#myFile'); },
        BtnEliminarFoto: function () { return $('#btnEliminarFoto'); },
        Validador: null,

        TxtNombreFoto: function () { return $('#txtNombreFoto'); },
        TxtDescripcionFoto: function () { return $('#txtDescripcionFoto'); },

        RecordAnexoModel: null,
        BtnCancelarRecordAnexoFoto: function () { return $('#btnCancelarRecordAnexoFoto'); },
        BtnGrabarRecordAnexoFoto: function () { return $('#btnGrabarRecordAnexoFoto'); },

        ArchivoBase64: null,
        Extension: null,
        NombreArchivo: null
    };

    base.Event = {
        FileArchivoEvidenciaChange: function (data) {
            if (data.Extension != '' || data.Extension != null) {
                data.Extension = data.Extension.toLowerCase();
            }

            if (!(data.Extension == ".bmp" || data.Extension == ".gif" || data.Extension == ".jpg" ||
                 data.Extension == ".jpeg" || data.Extension == ".tif" || data.Extension == ".tiff" ||
                 data.Extension == ".png")) {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.EtiquetaFormatoArchivoNoSoportado });
                $('#imgFotoColaborador').removeAttr('src');
                base.Control.ArchivoBase64 = null;
                base.Control.NombreArchivo = null;
                base.Control.Extension = null;

                return false;
            }

            if (data.Tamaño > base.Control.RecordAnexoModel.RecordAnexo.PesoMaximoArchivoAnexoSharePoint) {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.EtiquetaTamanioArchivoFotoMaximo.format(base.Control.RecordAnexoModel.RecordAnexo.PesoMaximoArchivoAnexoSharePointString) });
                return false;
            }

            $('#divFotoColaborador').attr('class', 'form-control');
            $('#frmRecordAnexoFotoAccionSummaryErrorMessage').addClass('hidden');
            
            base.Control.ArchivoBase64 = data.ArchivoBase64;
            base.Control.NombreArchivo = data.NombreArchivo;
            base.Control.Extension = data.Extension;

            if (base.Control.ArchivoBase64 != null && base.Control.ArchivoBase64 != '') {
                $('#imgFotoColaborador').attr('src', "data:image/png;base64," + base.Control.ArchivoBase64);
            }
            else {
                $('#imgFotoColaborador').removeAttr('src');
                base.Control.ArchivoBase64 = null;
                base.Control.NombreArchivo = null;
                base.Control.Extension = null;
            }
        },

        BtnEliminarFotoClick: function () {
            $('#imgFotoColaborador').removeAttr('src');
            $('#txtAnexoFotoString').val('');
            base.Control.ArchivoBase64 = null;
            base.Control.NombreArchivo = null;
            base.Control.Extension = null;
        },

        BtnGrabarRecordAnexoFotoClick: function () {
            'use strict'
            if (base.Control.RecordAnexoModel.RecordAnexo.CodigoRecordAnexo != null && (base.Control.ArchivoBase64 == null || base.Control.ArchivoBase64 == '')) {
                base.Control.ArchivoBase64 = $('#txtAnexoFotoString').val();
            }

            if (base.Control.Validador.isValid()) {
                var nombre = base.Control.TxtNombreFoto().val();
                var descripcion = base.Control.TxtDescripcionFoto().val();

                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarRecordAnexoFoto.data = {
                            CodigoRecordAnexo: base.Control.RecordAnexoModel.RecordAnexo.CodigoRecordAnexo != null ? base.Control.RecordAnexoModel.RecordAnexo.CodigoRecordAnexo : null,
                            CodigoRecord: base.Control.RecordAnexoModel.RecordAnexo.CodigoRecord != null ? base.Control.RecordAnexoModel.RecordAnexo.CodigoRecord : null,
                            CodigoTipoAnexo: "FOT",
                            Nombre: nombre,
                            Descripcion: descripcion,
                            AnexoString: base.Control.ArchivoBase64,
                            NombreArchivoApendice: base.Control.NombreArchivo
                        };

                        base.Ajax.AjaxGrabarRecordAnexoFoto.submit();
                    }
                });
            }
            else {
                $('#frmRecordAnexoFotoAccionSummaryErrorMessage').empty();
                $('#frmRecordAnexoFotoAccionSummaryErrorMessage').attr("style", 'width:350px');
                $('#frmRecordAnexoFotoAccionSummaryErrorMessage').append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },

        AjaxGrabarRecordAnexoFotoSuccess: function (data) {
            if (data.Result >= 1) {
                base.Control.Mensaje.Information({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });

                base.Control.ArchivoBase64 = null;
                base.Control.Extension = null;
                base.Control.NombreArchivo = null;

                base.Control.DlgFormularioRecordAnexoFotoAccion.divDialog.close();

                if (base.Event.GrabarRecordAnexoFotoSuccess() != null) {
                    base.Event.GrabarRecordAnexoFotoSuccess();
                }
            } else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        }
    };

    base.Ajax = {
        AjaxGrabarRecordAnexoFoto: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Actions.RegistrarRecordAnexo,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarRecordAnexoFotoSuccess
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
                        $('#divFotoColaborador').attr('class', 'form-control');
                    }
                    else {
                        $('#divFotoColaborador').attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });

            return validaciones;
        }
    };
};