/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 21112017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioDocumentoFoto');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioDocumentoFoto.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Event.GrabarRecordDocumentoFotoSuccess = (opts.GrabarRecordDocumentoFotoSuccess != null && opts.GrabarRecordDocumentoFotoSuccess) ? opts.GrabarRecordDocumentoFotoSuccess : null;

        base.Event.GrabarRecordDocumentoFotoSuccess = (opts.GrabarRecordDocumentoFotoSuccess != null && opts.GrabarRecordDocumentoFotoSuccess) ? opts.GrabarRecordDocumentoFotoSuccess : null;

        base.Control.DocumentoFotoModel = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Models.DocumentoFotoModel;                                          
        base.Control.BtnCancelar().off('click');
        base.Control.BtnCancelar().on('click', base.Event.BtnCancelarClick);
        base.Control.BtnEliminarFoto().off('click');
        base.Control.BtnEliminarFoto().on('click', base.Event.BtnEliminarFotoClick);
        base.Control.BtnGrabarRecordDocumentoFoto().off('click');
        base.Control.BtnGrabarRecordDocumentoFoto().on('click', base.Event.btnGrabarRecordDocumentoFotoClick);
        // if (base.Control.DocumentoFotoModel.DocumentoAnexo.CodigoEstadoRecord != Pe.ElectroPeru.SGI.Presentacion.Core.Constante.DatosConstantes.EstadoRecord.Cerrado) {
        new Pe.GMD.UI.Web.Components.AjaxUpload({
            inputFile: base.Control.FileArchivoCargar(),
            urlValidateFile: Pe.ElectroPeru.SGI.Presentacion.Base.CargarArchivo.Actions.UploadDocument,
            callbackValidateFile: base.Event.FileArchivoEvidenciaChange,
        });
        //}
        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmDocumentoFoto(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtra()
        });
    };
    base.Show = function (opts) {
        base.Control.DlgFormularioDocumentoFoto = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaFormularioFoto,
            size: "size-wide",
            close: function () {
            }
        });

        base.Control.DlgFormularioDocumentoFoto.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.FormularioDocumentoFoto,
            onSuccess: function () {
                base.Ini();
            },
            data: {
                CodigoEstadoRecord: opts.CodigoEstadoRecord,
                CodigoDocumentoAnexo: opts.CodigoDocumentoAnexo,
                CodigoDocumento: opts.CodigoDocumento,
                CodigoArchivoAnexoSharePoint: opts.CodigoArchivoAnexoSharePoint,
                CodigoTipoAnexoEntidad: opts.CodigoTipoAnexoEntidad,
                IndicadorLectura: opts.IndicadorLectura
            }
        });
    };

    base.Control = {
        FrmDocumentoFoto: function () { return $('#frmDocumentoFoto') },
        DlgFormularioDocumentoFoto: null,
        FileArchivoCargar: function () { return $('#myFile'); },
        BtnEliminarFoto: function () { return $('#btnEliminarFoto'); },
        Validador: null,
        BtnCancelar: function () { return $('#btnCancelar'); },
        BtnGrabarRecordDocumentoFoto: function () { return $('#btnGrabarRecordDocumentoFoto'); },
        TxtNombreFoto: function () { return $('#txtNombreFoto'); },
        TxtDescripcionFoto: function () { return $('#txtDescripcionFoto'); },

        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        DocumentoFotoModel: null,

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
            if (data.Tamaño > base.Control.DocumentoFotoModel.PesoMaximoArchivoAnexoSharePoint) {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.EtiquetaTamanioArchivoFotoMaximo.format(base.Control.DocumentoFotoModel.PesoMaximoArchivoAnexoSharePointString) });
                return false;
            }

            $('#divFotoColaborador').attr('class', 'form-control');
            $('#FrmDocumentoFotoSummaryErrorMessage').addClass('hidden');
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
                $('#imgFotoColaborador').html('');
            }
        },

        BtnEliminarFotoClick: function () {
            $('#imgFotoColaborador').removeAttr('src');
            base.Control.ArchivoBase64 = null;
            base.Control.NombreArchivo = null;
            base.Control.Extension = null;
        },

        btnGrabarRecordDocumentoFotoClick: function () {
            'use strict'
            if (base.Control.DocumentoFotoModel.CodigoDocumentoAnexo != null && (base.Control.ArchivoBase64 == null || base.Control.ArchivoBase64 == '')) {
                base.Control.ArchivoBase64 = $('#txtAnexoFotoString').val();
            }
            if (base.Control.Validador.isValid()) {
                var nombre = base.Control.TxtNombreFoto().val();
                var descripcion = base.Control.TxtDescripcionFoto().val();

                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarRecordDocumentoFoto.data = {
                            CodigoDocumentoAnexo: base.Control.DocumentoFotoModel.CodigoDocumentoAnexo,
                            CodigoDocumento: base.Control.DocumentoFotoModel.CodigoDocumento,
                            CodigoTipoAnexo: Pe.ElectroPeru.SGI.Presentacion.Core.Constante.DatosConstantes.ParametrosGenerales.CodigoTipoAnexoFoto,
                            CodigoTipoAnexoParametro: Pe.ElectroPeru.SGI.Presentacion.Inspeccion.IngresoInspeccion.Index.Resource.CodigoTipoAnexoParametro,
                            CodigoTipoAnexoEntidad: base.Control.DocumentoFotoModel.CodigoTipoAnexoEntidad,
                            Nombre: nombre,
                            Descripcion: descripcion,
                            AnexoString: base.Control.ArchivoBase64,
                            NombreArchivoApendice: base.Control.NombreArchivo
                        };
                        base.Ajax.AjaxGrabarRecordDocumentoFoto.submit();
                    }
                });
            }
            else {
                $('#frmDocumentoFotoSummaryErrorMessage').empty();
                $('#frmDocumentoFotoSummaryErrorMessage').append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },
        AjaxGrabarRecordDocumentoFotoSuccess: function (data) {
            if (data.Result >= 1) {
                base.Control.Mensaje.Information({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Control.ArchivoBase64 = null;
                base.Control.Extension = null;
                base.Control.NombreArchivo = null;
                base.Control.DlgFormularioDocumentoFoto.divDialog.close();
                if (base.Event.GrabarRecordDocumentoFotoSuccess() != null) {
                    base.Event.GrabarRecordDocumentoFotoSuccess();
                }
            } else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        }
    };
    base.Ajax = {
        AjaxGrabarRecordDocumentoFoto: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.RegistrarDocumentoAnexo,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarRecordDocumentoFotoSuccess
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