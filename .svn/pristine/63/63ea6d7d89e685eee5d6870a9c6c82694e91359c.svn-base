/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD D43260443
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacionAnexo');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacionAnexo.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        'use strict'
        if (opts != null && opts.GrabarRecordAnexoFotoSuccess != null && opts.GrabarRecordAnexoFotoSuccess)
            base.Event.GrabarRecordAnexoFotoSuccess = opts.GrabarRecordAnexoFotoSuccess;
        base.Control.InvestigacionAnexoModel = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Models.InvestigacionAnexoFotoModel;

        base.Control.BtnCancelar().off('click');
        base.Control.BtnCancelar().on('click', base.Event.BtnCancelarClick);

        base.Control.BtnEliminarFoto().off('click');
        base.Control.BtnEliminarFoto().on('click', base.Event.BtnEliminarFotoClick);

        base.Control.BtnGrabarRecordAnexoFoto().off('click');
        base.Control.BtnGrabarRecordAnexoFoto().on('click', base.Event.BtnGrabarInvestigacionAnexoFotoClick);

        if (base.Control.InvestigacionAnexoModel.InvestigacionAnexo.CodigoEstadoInvestigacion != Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.EstadoInvestigacion.Aprobado) {
            new Pe.GMD.UI.Web.Components.AjaxUpload({
                inputFile: base.Control.FileArchivoCargar(),
                urlValidateFile: Pe.ElectroPeru.SGI.Presentacion.Base.CargarArchivo.Actions.UploadDocument,
                callbackValidateFile: base.Event.FileArchivoEvidenciaChange,
            });
        }

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmRecordAnexoFoto(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtra()
        });
    };

    base.Show = function (opts) {
        base.Control.CodigoEstadoInvestigacion= opts.CodigoEstadoInvestigacion,
        base.Control.CodigoInvestigacionAnexo= opts.CodigoInvestigacionAnexo,
        base.Control.CodigoInvestigacion = opts.CodigoInvestigacion,
        base.Control.CodigoArchivoAnexoSharePoint = opts.CodigoArchivoAnexoSharePoint,
        base.Control.DlgFormularioInvestigacionAnexo = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaFormularioFoto,
            size: "size-wide",
            close: function () {
            }
        });

        base.Control.DlgFormularioInvestigacionAnexo.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.FormularioInvestigacionAnexo,
            onSuccess: function () {
                base.Ini();
            },

            data: {
                CodigoEstadoInvestigacion: opts.CodigoEstadoInvestigacion,
                CodigoInvestigacionAnexo: opts.CodigoInvestigacionAnexo,
                CodigoInvestigacion: opts.CodigoInvestigacion,
                CodigoArchivoAnexoSharePoint: opts.CodigoArchivoAnexoSharePoint
            }
        });
    };

    base.Control = {
        FrmRecordAnexoFoto: function () { return $('#frmInvestigacionAnexoFoto') },
        DlgFormularioInvestigacionAnexo: null,
        InvestigacionAnexoModel: null,
        CodigoEstadoInvestigacion: null,
        CodigoInvestigacionAnexo: null,
        CodigoInvestigacion: null,
        CodigoArchivoAnexoSharePoint : null,
        FileArchivoCargar: function () { return $('#myFile'); },
        BtnEliminarFoto: function () { return $('#btnEliminarFoto'); },
        Validador: null,
        BtnCancelar: function () { return $('#btnCancelar'); },
        BtnGrabarRecordAnexoFoto: function () { return $('#btnGrabarInvestigacionAnexoFoto'); },
        TxtNombreFoto: function () { return $('#txtNombreFoto'); },
        TxtDescripcionFoto: function () { return $('#txtDescripcionFoto'); },

        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        InvestigacionAnexoModel: null,

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

            if (data.Tamaño > base.Control.InvestigacionAnexoModel.InvestigacionAnexo.PesoMaximoArchivoAnexoSharePoint) {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.EtiquetaTamanioArchivoFotoMaximo.format(base.Control.InvestigacionAnexoModel.InvestigacionAnexo.PesoMaximoArchivoAnexoSharePointString) });
                return false;
            }

            $('#divFotoColaborador').attr('class', 'form-control');
            $('#frmRecordAnexoFotoSummaryErrorMessage').addClass('hidden');

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
            base.Control.ArchivoBase64 = null;
            base.Control.NombreArchivo = null;
            base.Control.Extension = null;
        },

        BtnGrabarInvestigacionAnexoFotoClick: function () {
            'use strict'
            if (base.Control.InvestigacionAnexoModel.InvestigacionAnexo.CodigoInvestigacionAnexo != null && (base.Control.ArchivoBase64 == null || base.Control.ArchivoBase64 == '')) {
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
                            CodigoInvestigacionAnexo: base.Control.InvestigacionAnexoModel.InvestigacionAnexo.CodigoInvestigacionAnexo != null ? base.Control.InvestigacionAnexoModel.InvestigacionAnexo.CodigoInvestigacionAnexo : null,
                            CodigoInvestigacion: base.Control.InvestigacionAnexoModel.InvestigacionAnexo.CodigoInvestigacion!= null ? base.Control.InvestigacionAnexoModel.InvestigacionAnexo.CodigoInvestigacion: null,
                            CodigoTipoAnexo: "FOT",
                            CodigoClaseAnexo:34,
                            Nombre: nombre,
                            Descripcion: descripcion,
                            AnexoString: base.Control.ArchivoBase64,
                            NombreArchivoApendice: base.Control.NombreArchivo,
                            IndicadorObligatorio:true
                        };

                        base.Ajax.AjaxGrabarRecordAnexoFoto.submit();
                    }
                });
            }
            else {
                $('#frmInvestigacionAnexoFotoSummaryErrorMessage').empty();
                $('#frmInvestigacionAnexoFotoSummaryErrorMessage').attr("style", 'width:350px');
                $('#frmInvestigacionAnexoFotoSummaryErrorMessage').append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },

        AjaxGrabarRecordAnexoFotoSuccess: function (data) {
            if (data.Result != null) {
                base.Control.Mensaje.Information({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });                
                base.Control.ArchivoBase64 = null;
                base.Control.Extension = null;
                base.Control.NombreArchivo = null;
                base.Control.DlgFormularioInvestigacionAnexo.divDialog.close();
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
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarInvestigacionAnexo,
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