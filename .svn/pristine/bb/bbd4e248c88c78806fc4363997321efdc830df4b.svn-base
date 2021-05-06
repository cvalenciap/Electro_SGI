ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacionAnexoApendice');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacionAnexoApendice.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        'use strict'
        if (opts != null && opts.AceptarSuccess != null && opts.AceptarSuccess)
            base.Event.AceptarSuccess = opts.AceptarSuccess;
        //base.Event.GrabarRecordAnexoApendiceSuccess = (opts.GrabarRecordAnexoApendiceSuccess != null && opts.GrabarRecordAnexoApendiceSuccess) ? opts.GrabarRecordAnexoApendiceSuccess : null;
        base.Control.InvestigacionAnexoModel = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Models.InvestigacionAnexoModel;        
        if (base.Control.InvestigacionAnexoModel.InvestigacionAnexo.Nombre != null) {
            $('#NombreArchivoApendice .ClsNombreArchivoApendice').html('<p>' + base.Control.InvestigacionAnexoModel.InvestigacionAnexo.Nombre + '</p>');
        }

        //if (base.Control.CodigoClaseAnexo != null) {
        //    base.Control.SlcTipoAnexo().val(base.Control.CodigoClaseAnexo);
        //}

        base.Control.BtnCancelar().off('click');
        base.Control.BtnCancelar().on('click', base.Event.BtnCancelarClick);

        base.Control.BtnGrabarInvestigacionAnexoApendice().off('click');
        base.Control.BtnGrabarInvestigacionAnexoApendice().on('click', base.Event.BtnGrabarInvestigacionAnexoApendiceClick);
        
        base.Control.FileApendice().on("change", function () {
            var files = this.files;

            if (!files) {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.EtiquetaFormatoArchivoNoSoportado });
                return;
            }            
            if (this.files && this.files[0]) {
                var reader = new FileReader();

                if (this.files[0].size <= base.Control.InvestigacionAnexoModel.InvestigacionAnexo.PesoMaximoArchivoAnexoSharePoint) {
                    base.Control.FileApendice().removeClass('hasError');
                    $('#frmInvestigacionAnexoAppendixSummaryErrorMessage').addClass("hidden");

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
                            base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.ValidaArchivo });
                            if (base.Control.InvestigacionAnexoModel.InvestigacionAnexo.Nombre != null) {
                                $('#NombreArchivoApendice .ClsNombreArchivoApendice').html('');
                            }
                        }
                    };

                    reader.readAsDataURL(uploadFile);
                } else {
                    base.Control.ArchivoBase64 = null;
                    base.Control.FileApendice().val('');
                    base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.EtiquetaTamanioArchivoAnexoMaximo.format(base.Control.InvestigacionAnexoModel.InvestigacionAnexo.PesoMaximoArchivoAnexoSharePointString) });
                }
            }
        });

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmInvestigacionAnexoRegistrar(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtra()
        });
    };

    base.Show = function (opts) {        
        base.Control.CodigoInvestigacionAnexo = opts.CodigoInvestigacionAnexo;
        base.Control.CodigoInvestigacion = opts.CodigoInvestigacion;
        base.Control.CodigoClaseAnexo = opts.CodigoClaseAnexo;
        base.Control.CodigoArchivoAnexoSharePoint = opts.CodigoArchivoAnexoSharePoint;
        base.Control.IndicadorObligatorio = opts.IndicadorObligatorio;
        base.Control.Validar = opts.Validar;
        base.Control.IndicadorListado = opts.IndicadorListado;
        base.Control.DlgFormularioInvestigacionAnexo = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaFormularioAnexo,
            size: "size-wide",
            close: function () {
            }
        });
        base.Control.DlgFormularioInvestigacionAnexo.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.FormularioInvestigacionAnexoAppendix,
            onSuccess: function () {
                base.Ini();
            },
            data: opts
        });
    };

    base.Control = {
        FrmInvestigacionAnexoRegistrar: function () { return $('#frmInvestigacionAnexoAppendix') },
        BtnCargarFoto: function () { return $('#btnCargarFoto'); },
        FileApendice: function () { return $('#fileApendice'); },
        Validador: null,
        CodigoEstadoInvestigacion :null,
        CodigoInvestigacionAnexo :null,
        CodigoInvestigacion: null,
        IndicadorListado: null,
        CodigoClaseAnexo: null,
        CodigoArchivoAnexoSharePoint: null,
        Validar: false,
        IndicadorObligatorio: null,

        BtnCancelar: function () { return $('#btnCancelarRecordAnexoApendice'); },
        BtnGrabarInvestigacionAnexoApendice: function () { return $('#btnGrabarInvestigacionAnexoApendice'); },
        TxtDescripcionApendice: function () { return $('#txtDescripcionApendice'); },
        SlcTipoAnexo: function () { return $('#slcTipoAnexo'); },
        DlgFormularioInvestigacionAnexoularioInvestigacionAnexoAppendix: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        InvestigacionAnexoModel: null,

        ArchivoBase64: null,
        Extension: null,
        NombreArchivo: null,
        CodigoEstadoInvestigacion: null
    };

    base.Event = {
        AceptarFile: function (archivo, nombreArchivo, extension) {
            if (archivo != null) {
                $('#imgFotoColaborador').attr('src', "data:image/png;base64," + archivo);
                base.Control.ArchivoBase64 = archivo;
                base.Control.DlgFormularioInvestigacionAnexo.close();
            }
            else {
                base.Control.ArchivoBase64 = null;
            }
        },

        BtnGrabarInvestigacionAnexoApendiceClick: function () {
            'use strict'
            if (base.Control.CodigoInvestigacionAnexo != null && (base.Control.ArchivoBase64 == null || base.Control.ArchivoBase64 == '')) {
                base.Control.ArchivoBase64 = $('#txtAnexoFotoString').val();
            }

            if (base.Control.Validador.isValid()) {                
                var descripcion = base.Control.TxtDescripcionApendice().val();
                var fileapendice = base.Control.FileApendice().val() != '' ? base.Control.FileApendice().val() : base.Control.InvestigacionAnexoModel.InvestigacionAnexo.Nombre;
                if (fileapendice != null && fileapendice != '') {
                    base.Control.Mensaje.Confirmation({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,//'Do You want to save this Record Successfully?',
                        onAccept: function () {
                            base.Ajax.AjaxGrabarInvestigacionAnexoApendice.data = {
                                CodigoInvestigacionAnexo: base.Control.CodigoInvestigacionAnexo != null ? base.Control.CodigoInvestigacionAnexo : null,
                                CodigoInvestigacion: base.Control.CodigoInvestigacion,
                                Nombre: fileapendice,
                                Descripcion: descripcion,
                                CodigoTipoAnexo: 'ADJ',
                                CodigoClaseAnexo: base.Control.SlcTipoAnexo().val(),
                                AnexoString: base.Control.ArchivoBase64,
                                NombreArchivoApendice: base.Control.NombreArchivoApendice,
                                IndicadorObligatorio: base.Control.IndicadorObligatorio,
                                CodigoArchivoAnexoSharePoint: base.Control.CodigoArchivoAnexoSharePoint,
                                IndicadorListado: base.Control.IndicadorListado
                            };
                            base.Ajax.AjaxGrabarInvestigacionAnexoApendice.submit();
                        }
                    });
                }
                else {
                    base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.ValidarCampos });
                    return false;
                }
            }
            else {
                $('#frmInvestigacionAnexoAppendixSummaryErrorMessage').empty();
                $('#frmInvestigacionAnexoAppendixSummaryErrorMessage').attr("style", 'width:350px');
                $('#frmInvestigacionAnexoAppendixSummaryErrorMessage').append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },

        AjaxGrabarRecordAnexoApendiceSuccess: function (data) {            
            if (data.Result.CodigoArchivoAnexoSharePoint > 0) {

                base.Control.Mensaje.Information({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Control.DlgFormularioInvestigacionAnexo.divDialog.close();
                if (base.Event.AceptarSuccess != null) {
                    base.Event.AceptarSuccess(data.Result);
                }
                base.Control.ArchivoBase64 = null;
                base.Control.NombreArchivoApendice = null;


            } else {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        }
    };

    base.Ajax = {
        AjaxGrabarInvestigacionAnexoApendice: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarInvestigacionAnexo,
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