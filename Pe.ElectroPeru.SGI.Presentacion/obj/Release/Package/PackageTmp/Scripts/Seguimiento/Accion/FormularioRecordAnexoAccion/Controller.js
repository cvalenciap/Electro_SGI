ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.FormularioRecordAnexoAccion');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.FormularioRecordAnexoAccion.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Event.GrabarRecordAnexoAccionSuccess = (opts.GrabarRecordAnexoAccionSuccess != null && opts.GrabarRecordAnexoAccionSuccess) ? opts.GrabarRecordAnexoAccionSuccess : null;
        base.Control.RecordAnexoAccionModel = Pe.Stracon.SGD.Presentacion.Seguimiento.Accion.Models.FormularioRecordAnexoAccion;

        if (base.Control.RecordAnexoAccionModel.RecordAnexo.Nombre != null) {
            $('#NombreArchivoApendice .ClsNombreArchivoApendice').html('<p>' + base.Control.RecordAnexoAccionModel.RecordAnexo.Nombre + '</p>');
        }

        base.Control.BtnCancelarRecordAnexoApendice().off('click');
        base.Control.BtnCancelarRecordAnexoApendice().on('click', base.Event.BtnCancelarRecordAnexoApendiceClick);

        base.Control.BtnGrabarRecordAnexoApendice().off('click');
        base.Control.BtnGrabarRecordAnexoApendice().on('click', base.Event.BtnGrabarRecordAnexoApendiceClick);

        base.Control.FileApendice().on("change", function () {
            var files = this.files;
            if (!files) {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.SeguimientoAccion.Resource.EtiquetaArchivoNoSoportado });
                return;
            }

            if (this.files && this.files[0]) {
                var reader = new FileReader();
                if (this.files[0].size <= base.Control.RecordAnexoAccionModel.RecordAnexo.PesoMaximoArchivoAnexoSharePoint) {
                    base.Control.NombreArchivoApendice = this.files[0].name;
                    var uploadFile = this.files[0];

                    reader.onload = function (e) {
                        if (reader.result != "") {
                            base.Control.AppendiceBase64 = reader.result.split(',')[1];
                        }
                        else {
                            base.Control.AppendiceBase64 = null;
                            base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.SeguimientoAccion.Resource.EtiquetaArchivoNoSoportado });
                        }
                    };

                    reader.readAsDataURL(uploadFile);

                    //Edición Apéndice
                    if (base.Control.RecordAnexoAccionModel.RecordAnexo.Nombre != null) {
                        $('#NombreArchivoApendice .ClsNombreArchivoApendice').html('<p>' + base.Control.NombreArchivoApendice + '</p>');
                    }
                } else {
                    base.Control.AppendiceBase64 = null;
                    base.Control.NombreArchivoApendice = null;
                    base.Control.FileApendice().val('');
                    base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.SeguimientoAccion.Resource.EtiquetaTamanioArchivoAnexoMaximo.format(base.Control.RecordAnexoAccionModel.RecordAnexo.PesoMaximoArchivoAnexoSharePointString) });
                }
            }
        });

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmRecordAnexoAccion(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resources.Validacion
        });
    };

    base.Show = function (opts) {
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.EtiquetaTituloFormularioRecordAnexoAccion,
            size: "size-wide",
            close: function () {
            }
        });

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Actions.FormularioRecordAnexoAccion,
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
        FrmRecordAnexoAccion: function () { return $('#frmRecordAnexoAccion') },
        FileApendice: function () { return $('#fileApendice'); },
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        Validador: null,
        DlgForm: null,

        SlcFrmTipoApendice: function () { return $('#slcFrmTipoApendice'); },
        TxtFrmDescripcionAnexo: function () { return $('#txtFrmDescripcionAnexo'); },

        BtnCancelarRecordAnexoApendice: function () { return $('#btnCancelarRecordAnexoApendice'); },
        BtnGrabarRecordAnexoApendice: function () { return $('#btnGrabarRecordAnexoApendice'); },
        RecordAnexoAccionModel: null,

        ArchivoBase64: null,
        Extension: null,
        NombreArchivoApendice: null
    };

    base.Event = {
        BtnCancelarRecordAnexoApendiceClick: function () {
            base.Control.DlgForm.divDialog.close();
        },

        BtnGrabarRecordAnexoApendiceClick: function () {
            'use strict'
            if (base.Control.Validador.isValid()) {
                var descripcion = base.Control.TxtFrmDescripcionAnexo().val();
                var fileapendice = base.Control.FileApendice().val() != '' ? base.Control.FileApendice().val() : base.Control.RecordAnexoAccionModel.RecordAnexo.Nombre;

                if (fileapendice != null && fileapendice != '') {
                    if (base.Control.RecordAnexoAccionModel.RecordAnexo.CodigoRecordAnexo != null && base.Control.ArchivoBase64 == null) {
                        base.Control.ArchivoBase64 = $('#txtFrmAnexoString').val();
                    }

                    base.Control.Mensaje.Confirmation({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                        onAccept: function () {
                            base.Ajax.AjaxGrabarRecordAnexoApendice.data = {
                                CodigoRecordAnexo: base.Control.RecordAnexoAccionModel.RecordAnexo.CodigoRecordAnexo != null ? base.Control.RecordAnexoAccionModel.RecordAnexo.CodigoRecordAnexo : null,
                                CodigoRecord: base.Control.RecordAnexoAccionModel.RecordAnexo.CodigoRecord != null ? base.Control.RecordAnexoAccionModel.RecordAnexo.CodigoRecord : null,
                                Nombre: fileapendice,
                                Descripcion: descripcion,
                                CodigoTipoAnexo: 'ADJ',
                                CodigoTipoApendice: base.Control.SlcFrmTipoApendice().val(),
                                AnexoString: base.Control.AppendiceBase64,
                                NombreArchivoApendice: base.Control.NombreArchivoApendice
                            };

                            base.Ajax.AjaxGrabarRecordAnexoApendice.submit();
                        }
                    });
                }
                else {
                    base.Control.Mensaje.Warning({ message: "El campo Archivo es obligatorio." });
                    return false;
                }
            }
        },

        AjaxGrabarRecordAnexoApendiceSuccess: function (data) {
            if (data.Result.CodigoRecordAnexo != null || data.Result.CodigoRecordAnexo != "") {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });

                base.Control.AppendiceBase64 = '';
                base.Control.NombreArchivoApendice = '';

                base.Control.DlgForm.divDialog.close();

                if (base.Event.GrabarRecordAnexoAccionSuccess() != null) {
                    base.Event.GrabarRecordAnexoAccionSuccess();
                }
            } else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        }
    };

    base.Ajax = {
        AjaxGrabarRecordAnexoApendice: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Actions.RegistrarRecordAnexo,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarRecordAnexoApendiceSuccess
        })
    };
};