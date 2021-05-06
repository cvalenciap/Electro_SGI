/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 21112017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioIntegradorApendiceFoto');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioIntegradorApendiceFoto.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Event.GrabarRecordAnexoFotoSuccess = (opts.GrabarRecordAnexoFotoSuccess != null && opts.GrabarRecordAnexoFotoSuccess) ? opts.GrabarRecordAnexoFotoSuccess : null;

        base.Event.GrabarRecordAnexoApendiceSuccess = (opts.GrabarRecordAnexoApendiceSuccess != null && opts.GrabarRecordAnexoApendiceSuccess) ? opts.GrabarRecordAnexoApendiceSuccess : null;

        base.Control.IntegradorTipoRegistroAnexoModel = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Models.IntegradorTipoRegistroAnexoModel;
        base.Control.BtnCancelar().off('click');
        base.Control.BtnCancelar().on('click', base.Event.BtnCancelarClick);
        base.Control.BtnEliminarFoto().off('click');
        base.Control.BtnEliminarFoto().on('click', base.Event.BtnEliminarFotoClick);
        base.Control.BtnGrabarRecordAnexoFoto().off('click');
        base.Control.BtnGrabarRecordAnexoFoto().on('click', base.Event.BtnGrabarRecordAnexoFotoClick);
        // if (base.Control.IntegradorTipoRegistroAnexoModel.IntegradorTipoRegistroAnexo.CodigoEstadoRecord != Pe.ElectroPeru.SGI.Presentacion.Core.Constante.DatosConstantes.EstadoRecord.Cerrado) {
            new Pe.GMD.UI.Web.Components.AjaxUpload({
                inputFile: base.Control.FileArchivoCargar(),
                urlValidateFile: Pe.ElectroPeru.SGI.Presentacion.Base.CargarArchivo.Actions.UploadDocument,
                callbackValidateFile: base.Event.FileArchivoEvidenciaChange,
            });
        //}
        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmIntegradorTipoRegistroApendiceFoto(),
                messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtra()
        });
    };
    base.Show = function (opts) {
        base.Control.DlgFormularioIntegradorTipoRegistroApendiceFoto = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaFormularioFoto,
            size: "size-wide",
            close: function () {
            }
        });

        base.Control.DlgFormularioIntegradorTipoRegistroApendiceFoto.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.FormularioIntegradorApendiceFoto,
            onSuccess: function () {
                base.Ini();
            },
            data: {
                CodigoEstadoRecord: opts.CodigoEstadoRecord,
                CodigoIntegradorTipoRegistroAnexo: opts.CodigoIntegradorTipoRegistroAnexo,
                CodigoIntegradorTipoRegistro: opts.CodigoIntegradorTipoRegistro,
                CodigoArchivoAnexoSharePoint: opts.CodigoArchivoAnexoSharePoint,
                IndicadorLectura: opts.IndicadorLectura
            }
        });
    };

    base.Control = {
        FrmIntegradorTipoRegistroApendiceFoto: function () { return $('#frmIntegradorTipoRegistroApendiceFoto') },
        DlgFormularioIntegradorTipoRegistroApendiceFoto: null,
        FileArchivoCargar: function () { return $('#myFile'); },
        BtnEliminarFoto: function () { return $('#btnEliminarFoto'); },
        Validador: null,
        BtnCancelar: function () { return $('#btnCancelar'); },
        BtnGrabarRecordAnexoFoto: function () { return $('#btnGrabarRecordAnexoFoto'); },
        TxtNombreFoto: function () { return $('#txtNombreFoto'); },
        TxtDescripcionFoto: function () { return $('#txtDescripcionFoto'); },

        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        IntegradorTipoRegistroAnexoModel: null,

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
            if (data.Tamaño > base.Control.IntegradorTipoRegistroAnexoModel.IntegradorTipoRegistroAnexo.PesoMaximoArchivoAnexoSharePoint) {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.EtiquetaTamanioArchivoFotoMaximo.format(base.Control.IntegradorTipoRegistroAnexoModel.IntegradorTipoRegistroAnexo.PesoMaximoArchivoAnexoSharePointString) });
                return false;
            }

            $('#divFotoColaborador').attr('class', 'form-control');
            $('#frmIntegradorTipoRegistroApendiceFotoSummaryErrorMessage').addClass('hidden');
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

        BtnGrabarRecordAnexoFotoClick: function () {
            'use strict'
            if (base.Control.IntegradorTipoRegistroAnexoModel.IntegradorTipoRegistroAnexo.CodigoIntegradorTipoRegistroAnexo != null && (base.Control.ArchivoBase64 == null || base.Control.ArchivoBase64 == '')) {
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
                            CodigoIntegradorTipoRegistroAnexo: base.Control.IntegradorTipoRegistroAnexoModel.IntegradorTipoRegistroAnexo.CodigoIntegradorTipoRegistroAnexo,
                            CodigoIntegradorTipoRegistro: base.Control.IntegradorTipoRegistroAnexoModel.IntegradorTipoRegistroAnexo.CodigoIntegradorTipoRegistro,                        
                            CodigoTipoAnexo: Pe.ElectroPeru.SGI.Presentacion.Core.Constante.DatosConstantes.ParametrosGenerales.CodigoTipoAnexoFoto,
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
                $('#frmIntegradorTipoRegistroApendiceFotoSummaryErrorMessage').empty();
                $('#frmIntegradorTipoRegistroApendiceFotoSummaryErrorMessage');
                $('#frmIntegradorTipoRegistroApendiceFotoSummaryErrorMessage').append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
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
                base.Control.DlgFormularioIntegradorTipoRegistroApendiceFoto.divDialog.close();
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
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.RegistrarIntegradorTipoRegistroAnexo,
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