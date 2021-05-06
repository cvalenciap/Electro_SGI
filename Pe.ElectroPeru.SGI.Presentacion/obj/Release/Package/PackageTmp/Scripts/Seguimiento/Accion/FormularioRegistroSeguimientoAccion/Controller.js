ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.FormularioRegistroSeguimientoAccion');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.FormularioRegistroSeguimientoAccion.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Event.GrabarRecordAccionSeguimientoSuccess = (opts.GrabarRecordAccionSeguimientoSuccess != null && opts.GrabarRecordAccionSeguimientoSuccess) ? opts.GrabarRecordAccionSeguimientoSuccess : null;
        base.Control.RecordAccionSeguimientoModel = Pe.Stracon.SGD.Presentacion.Seguimiento.Accion.Models.FormularioRecordAccionSeguimiento;
        base.Function.CrearGridRecordAccionSeguimiento();
        base.Event.BtnBuscarRecordAccionSeguimientoClick();

        base.Control.DlgFormularioBuscarColaborador = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.BuscarColaboradorSuccess
        });

        base.Control.TxtFrmFechaEstadoAccion().datepicker({
            dateFormat: 'dd/mm/yy',            
            maxDate: '+0D'
        });

        base.Control.BtnFrmBuscarColaboradorResponsableCierre().off('click');
        base.Control.BtnFrmBuscarColaboradorResponsableCierre().on('click', base.Event.BtnBuscarColaboradorResponsableCierreClick);

        base.Control.FileUploadFrmFoto().on("change", function () {
            var files = this.files;
            if (!files) {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.SeguimientoAccion.Resource.EtiquetaArchivoNoSoportado });
                return;
            }

            if (this.files && this.files[0]) {
                var reader = new FileReader();
                var tipoImagen = this.files[0].type.toLowerCase();
                if ((tipoImagen == "image/bmp" || tipoImagen == "image/gif" ||
                    tipoImagen == "image/jpg" || tipoImagen == "image/jpeg" ||
                    tipoImagen == "image/tif" || tipoImagen == "image/tiff" ||
                    tipoImagen == "image/png") && this.files[0].size <= base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.PesoMaximoArchivoFotoSharePoint) {

                    base.Control.NombreArchivoFoto = this.files[0].name;
                    var uploadFile = this.files[0];
                    reader.onload = function (e) {
                        if (reader.result != "") {
                            base.Control.ArchivoFotoBase64 = reader.result.split(',')[1];
                        }
                        else {
                            base.Control.ArchivoFotoBase64 = null;
                            base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.SeguimientoAccion.Resource.EtiquetaArchivoNoSoportado });
                        }
                    };

                    reader.readAsDataURL(uploadFile);
                } else {
                    base.Control.ArchivoFotoBase64 = null;
                    base.Control.FileUploadFrmFoto().val('');
                    base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.SeguimientoAccion.Resource.EtiquetaTamanioArchivoFotoMaximo.format(base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.PesoMaximoArchivoFotoSharePointString) });
                }
            }
        });

        base.Control.FileUploadFrmAnexo().on("change", function () {
            var files = this.files;
            if (!files) {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.SeguimientoAccion.Resource.EtiquetaArchivoNoSoportado });
                return;
            }

            if (this.files && this.files[0]) {
                var reader = new FileReader();
                var tipoImagen = this.files[0].type.toLowerCase();
                if (this.files[0].size <= base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.PesoMaximoArchivoAnexoSharePoint) {
                    base.Control.NombreArchivoAnexo = this.files[0].name;
                    var uploadFile = this.files[0];

                    reader.onload = function (e) {
                        if (reader.result != "") {
                            base.Control.ArchivoAnexoBase64 = reader.result.split(',')[1];
                        }
                        else {
                            base.Control.ArchivoAnexoBase64 = null;
                            base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.SeguimientoAccion.Resource.EtiquetaArchivoNoSoportado });
                        }
                    };

                    reader.readAsDataURL(uploadFile);
                } else {
                    base.Control.ArchivoAnexoBase64 = null;
                    base.Control.FileUploadFrmAnexo().val('');
                    base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.SeguimientoAccion.Resource.EtiquetaTamanioArchivoAnexoMaximo.format(base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.PesoMaximoArchivoAnexoSharePointString) });
                }
            }
        });

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmRecordAccionSeguimiento(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resources.Validacion,
            validationsExtra: base.Function.ValidacionExtraColaborador()
        });

        base.Control.BtnRecordAccionSeguimientoCancelar().off('click');
        base.Control.BtnRecordAccionSeguimientoCancelar().on('click', base.Event.BtnRecordAccionSeguimientoCancelarClick);

        base.Control.BtnRecordAccionSeguimientoGrabar().off('click');
        base.Control.BtnRecordAccionSeguimientoGrabar().on('click', base.Event.BtnRecordAccionSeguimientoGrabarClick);

        base.Control.SlcFrmEstadoAccion().off('change');
        base.Control.SlcFrmEstadoAccion().on('change', base.Event.SlcFrmEstadoAccionChange);
    };

    base.Control = {
        DlgForm: null,
        DlgFormularioRecordAccion: null,
        GrdResultadoRecordAccionSeguimiento: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        RecordAccionModel: null,
        DlgFormularioBuscarColaborador: null,
        Validador: null,

        FrmRecordAccionSeguimiento: function () { return $('#frmRecordAccionSeguimiento') },
        SlcFrmEstadoAccion: function () { return $('#slcFrmEstadoAccion') },
        TxtFrmFechaEstadoAccion: function () { return $('#txtFrmFechaEstadoAccion') },
        TxtFrmComentario: function () { return $('#txtFrmComentario') },
        RdbAccionCompleta: function () { return $('input:radio[name=rdbAccionCompleta]:checked')},        
        //RdbAccionCompleta: function () { return $('#rdbAccionCompleta') },
        TxtFrmFechaCierreAccion: function () { return $('#txtFrmFechaCierreAccion') },
        BtnFrmBuscarColaboradorResponsableCierre: function () { return $('#btnFrmBuscarColaboradorResponsableCierre'); },
        HdnFrmCodigoColaboradorResponsableCierre: function () { return $('#hdnCodigoColaborador') },
        TxtFrmNombreColaboradorResponsableCierre: function () { return $('#txtCodigoColaboradorResponsable') },

        FileUploadFrmFoto: function () { return $('#fileUploadFrmFoto') },
        NombreArchivoFoto: null,
        ArchivoFotoBase64:null,

        FileUploadFrmAnexo: function () { return $('#fileUploadFrmAnexo') },
        NombreArchivoAnexo: null,
        ArchivoAnexoBase64: null,

        BtnRecordAccionSeguimientoCancelar: function () { return $('#btnRecordAccionSeguimientoCancelar') },
        BtnRecordAccionSeguimientoGrabar: function () { return $('#btnRecordAccionSeguimientoGrabar') },

        RecordAccionSeguimientoModel: null
    };

    base.Event = {
        BtnBuscarRecordAccionSeguimientoClick: function () {
            var filtro = {
                CodigoRecordAccion: base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.CodigoRecordAccion
            };

            base.Control.GrdResultadoRecordAccionSeguimiento.Load(filtro);
        },

        BtnBuscarColaboradorResponsableCierreClick: function () {
            base.Control.DlgFormularioBuscarColaborador.Show(false, [], null);
        },

        BuscarColaboradorSuccess: function (colaboradorSeleccionado) {
            if (colaboradorSeleccionado != null) {
                base.Control.HdnFrmCodigoColaboradorResponsableCierre().val(colaboradorSeleccionado[0].CodigoColaborador);
                base.Control.TxtFrmNombreColaboradorResponsableCierre().val(colaboradorSeleccionado[0].NombreCompletoColaborador);
            }
            else {
                base.Control.HdnFrmCodigoColaboradorResponsableCierre().val(null);
                base.Control.TxtFrmNombreColaboradorResponsableCierre().val('');
            }
        },

        SlcFrmEstadoAccionChange: function () {
            base.Control.HdnFrmCodigoColaboradorResponsableCierre().val(null);
            base.Control.TxtFrmNombreColaboradorResponsableCierre().val('');
            base.Control.TxtFrmFechaCierreAccion().val(null);
            base.Control.TxtFrmFechaCierreAccion().attr("disabled", "disabled");
            base.Control.TxtFrmFechaCierreAccion().attr("readonly", "readonly");

            if (base.Control.SlcFrmEstadoAccion().val().trim() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.DatosConstantes.EstadoAccion.Cerrado) {
                base.Control.TxtFrmFechaCierreAccion().removeAttr("disabled");
                base.Control.TxtFrmFechaCierreAccion().removeAttr("readonly");
                var fechaActual = new Date();
                var dia = fechaActual.getDate();
                var mes = fechaActual.getMonth();
                var anio = fechaActual.getFullYear();

                new Pe.GMD.UI.Web.Components.Calendar({
                    inputFrom: base.Control.TxtFrmFechaCierreAccion(),
                    maxDateFrom: new Date(anio, mes, dia),
                    minDateFrom: new Date(1900, 1, 1)
                });

                base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.FechaCierreAccionString = base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.FechaActualString;
                base.Control.TxtFrmFechaCierreAccion().val(base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.FechaCierreAccionString);
                base.Control.BtnFrmBuscarColaboradorResponsableCierre().removeAttr("disabled");
                base.Control.TxtFrmFechaCierreAccion().val(base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.FechaActualString);
                base.Control.HdnFrmCodigoColaboradorResponsableCierre().val(base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.CodigoColaboradorResponsableCierre);
                base.Control.TxtFrmNombreColaboradorResponsableCierre().val(base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.NombreColaboradorResponsableCierre);
            }
            else {
                base.Control.TxtFrmFechaCierreAccion().attr("disabled", "disabled");
                base.Control.TxtFrmFechaCierreAccion().attr("readonly", "readonly");

                base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.FechaCierreAccionString = null;
                base.Control.BtnFrmBuscarColaboradorResponsableCierre().attr("disabled", "disabled");
            }
        },

        BtnRecordAccionSeguimientoCancelarClick: function () {
            base.Control.DlgForm.divDialog.close();
            if (base.Event.GrabarRecordAccionSeguimientoSuccess != null) {
                base.Event.GrabarRecordAccionSeguimientoSuccess();
            }
        },

        BtnRecordAccionSeguimientoGrabarClick: function () {
            'use strict'
            if (base.Control.Validador.isValid()) {
                if (base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.indicadorMenu == 3) {
                    base.Control.Mensaje.Confirmation({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaTituloConfirmar,
                        indicadorModal: false,
                        onAccept: function () {
                            base.Ajax.AjaxCerradoGerenciaRecordAccionSeguimiento.data = {
                                CodigoRecordAccionSeguimiento: base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.CodigoRecordAccionSeguimiento != null ? base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.CodigoRecordAccionSeguimiento : null,
                                CodigoRecordAccion: base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.CodigoRecordAccion != null ? base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.CodigoRecordAccion : null,
                                FechaEstadoAccionString: base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.FechaEstadoAccionString,
                                Comentario: base.Control.TxtFrmComentario().val(),
                                IndicadorCompletoAccion: base.Control.RdbAccionCompleta().val(),
                                ArchivoFotoBase64: base.Control.ArchivoFotoBase64,
                                NombreArchivoFoto: base.Control.NombreArchivoFoto == null ? base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.NombreArchivoFoto : base.Control.NombreArchivoFoto,
                                ArchivoAnexoBase64: base.Control.ArchivoAnexoBase64,
                                NombreArchivoAnexo: base.Control.NombreArchivoAnexo == null ? base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.NombreArchivoAnexo : base.Control.NombreArchivoAnexo,

                                indicadorMenu: base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.indicadorMenu
                            };

                            base.Ajax.AjaxCerradoGerenciaRecordAccionSeguimiento.submit();
                        }
                    });
                }else if (base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.indicadorMenu == 4) {
                    base.Control.Mensaje.Confirmation({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaTituloConfirmar,
                        indicadorModal: false,
                        onAccept: function () {
                            base.Ajax.AjaxAnuladoGerenciaRecordAccionSeguimiento.data = {
                                CodigoRecordAccionSeguimiento: base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.CodigoRecordAccionSeguimiento != null ? base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.CodigoRecordAccionSeguimiento : null,
                                CodigoRecordAccion: base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.CodigoRecordAccion != null ? base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.CodigoRecordAccion : null,
                                FechaEstadoAccionString: base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.FechaEstadoAccionString,
                                Comentario: base.Control.TxtFrmComentario().val(),
                                IndicadorCompletoAccion: base.Control.RdbAccionCompleta().val(),
                                ArchivoFotoBase64: base.Control.ArchivoFotoBase64,
                                NombreArchivoFoto: base.Control.NombreArchivoFoto == null ? base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.NombreArchivoFoto : base.Control.NombreArchivoFoto,
                                ArchivoAnexoBase64: base.Control.ArchivoAnexoBase64,
                                NombreArchivoAnexo: base.Control.NombreArchivoAnexo == null ? base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.NombreArchivoAnexo : base.Control.NombreArchivoAnexo,

                                indicadorMenu: base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.indicadorMenu
                            };

                            base.Ajax.AjaxAnuladoGerenciaRecordAccionSeguimiento.submit();
                        }
                    });
                }else if (base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.indicadorMenu == 5) {
                    base.Control.Mensaje.Confirmation({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaTituloConfirmar,
                        indicadorModal: false,
                        onAccept: function () {
                            base.Ajax.AjaxReabrirGerenciaRecordAccionSeguimiento.data = {
                                CodigoRecordAccionSeguimiento: base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.CodigoRecordAccionSeguimiento != null ? base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.CodigoRecordAccionSeguimiento : null,
                                CodigoRecordAccion: base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.CodigoRecordAccion != null ? base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.CodigoRecordAccion : null,
                                FechaEstadoAccionString: base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.FechaEstadoAccionString,
                                Comentario: base.Control.TxtFrmComentario().val(),
                                IndicadorCompletoAccion: base.Control.RdbAccionCompleta().val(),
                                ArchivoFotoBase64: base.Control.ArchivoFotoBase64,
                                NombreArchivoFoto: base.Control.NombreArchivoFoto == null ? base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.NombreArchivoFoto : base.Control.NombreArchivoFoto,
                                ArchivoAnexoBase64: base.Control.ArchivoAnexoBase64,
                                NombreArchivoAnexo: base.Control.NombreArchivoAnexo == null ? base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.NombreArchivoAnexo : base.Control.NombreArchivoAnexo,

                                indicadorMenu: base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.indicadorMenu
                            };

                            base.Ajax.AjaxReabrirGerenciaRecordAccionSeguimiento.submit();
                        }
                    });
                }
                else {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaTituloConfirmar,
                    indicadorModal: false,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarRecordAccionSeguimiento.data = {
                            CodigoRecordAccionSeguimiento: base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.CodigoRecordAccionSeguimiento != null ? base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.CodigoRecordAccionSeguimiento : null,
                            CodigoRecordAccion: base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.CodigoRecordAccion != null ? base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.CodigoRecordAccion : null,
                            //CodigoEstadoAccion: base.Control.SlcFrmEstadoAccion().val(),
                            FechaEstadoAccionString: base.Control.TxtFrmFechaEstadoAccion().val(),
                            Comentario: base.Control.TxtFrmComentario().val(),
                            IndicadorCompletoAccion: base.Control.RdbAccionCompleta().val(),
                            //FechaCierreAccionString: base.Control.TxtFrmFechaCierreAccion().val(),
                            indicadorMenu: base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.indicadorMenu,
                            CodigoColaboradorResponsableCierre: base.Control.HdnFrmCodigoColaboradorResponsableCierre().val(),
                            ArchivoFotoBase64: base.Control.ArchivoFotoBase64,
                            NombreArchivoFoto: base.Control.NombreArchivoFoto == null ? base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.NombreArchivoFoto : base.Control.NombreArchivoFoto,
                            ArchivoAnexoBase64: base.Control.ArchivoAnexoBase64,
                            NombreArchivoAnexo: base.Control.NombreArchivoAnexo == null ? base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.NombreArchivoAnexo : base.Control.NombreArchivoAnexo,
                        };

                        base.Ajax.AjaxGrabarRecordAccionSeguimiento.submit();
                    }
                });
            }
            }
        },

        AjaxGrabarRecordAccionSeguimientoSuccess: function (resultado) {
            if (resultado.Result >= 1) {
                base.Control.Mensaje.InformationFormularioDetalle({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });

                base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.CodigoRecordAccionSeguimiento = null;
                //base.Control.SlcFrmEstadoAccion().val('');
                base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.FechaEstadoAccionString = base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.FechaActualString;
                base.Control.TxtFrmFechaEstadoAccion().val(base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.FechaActualString);
                base.Control.TxtFrmComentario().val('');
                //base.Control.RdbAccionCompleta().val('N'),
                //base.Control.TxtFrmFechaCierreAccion().val('');
               //base.Control.HdnFrmCodigoColaboradorResponsableCierre().val(null);
                //base.Control.TxtFrmNombreColaboradorResponsableCierre().val('');
                base.Control.FileUploadFrmFoto().val('');
                base.Control.FileUploadFrmAnexo().val('');
                base.Control.ArchivoFotoBase64 = null;
                base.Control.NombreArchivoFoto = null;
                base.Control.ArchivoAnexoBase64 = null;
                base.Control.NombreArchivoAnexo = null;

                base.Control.DlgForm.divDialog.close();

                if (base.Event.GrabarRecordAccionSeguimientoSuccess != null) {
                    base.Event.GrabarRecordAccionSeguimientoSuccess();
                }

                base.Event.BtnBuscarRecordAccionSeguimientoClick();
            } else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },

        AjaxCerradoGerenciaRecordAccionSeguimientoSuccess: function (resultado) {
            if (resultado.Result >= 1) {
                base.Control.Mensaje.InformationFormularioDetalle({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });

                base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.CodigoRecordAccionSeguimiento = null;
                base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.FechaEstadoAccionString = base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.FechaActualString;
                base.Control.TxtFrmFechaEstadoAccion().val(base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.FechaActualString);
                base.Control.TxtFrmComentario().val('');
                base.Control.FileUploadFrmFoto().val('');
                base.Control.FileUploadFrmAnexo().val('');
                base.Control.ArchivoFotoBase64 = null;
                base.Control.NombreArchivoFoto = null;
                base.Control.ArchivoAnexoBase64 = null;
                base.Control.NombreArchivoAnexo = null;

                base.Control.DlgForm.divDialog.close();

                if (base.Event.GrabarRecordAccionSeguimientoSuccess != null) {
                    base.Event.GrabarRecordAccionSeguimientoSuccess();
                }

                base.Event.BtnBuscarRecordAccionSeguimientoClick();
            } else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },

        AjaxAnuladoGerenciaRecordAccionSeguimientoSuccess: function (resultado) {
            if (resultado.Result >= 1) {
                base.Control.Mensaje.InformationFormularioDetalle({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });

                base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.CodigoRecordAccionSeguimiento = null;
                base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.FechaEstadoAccionString = base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.FechaActualString;
                base.Control.TxtFrmFechaEstadoAccion().val(base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.FechaActualString);
                base.Control.TxtFrmComentario().val('');
                base.Control.FileUploadFrmFoto().val('');
                base.Control.FileUploadFrmAnexo().val('');
                base.Control.ArchivoFotoBase64 = null;
                base.Control.NombreArchivoFoto = null;
                base.Control.ArchivoAnexoBase64 = null;
                base.Control.NombreArchivoAnexo = null;

                base.Control.DlgForm.divDialog.close();

                if (base.Event.GrabarRecordAccionSeguimientoSuccess != null) {
                    base.Event.GrabarRecordAccionSeguimientoSuccess();
                }

                base.Event.BtnBuscarRecordAccionSeguimientoClick();
            } else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },

        AjaxReabrirGerenciaRecordAccionSeguimientoSuccess: function (resultado) {
            if (resultado.Result >= 1) {
                base.Control.Mensaje.InformationFormularioDetalle({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });

                base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.CodigoRecordAccionSeguimiento = null;
                base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.FechaEstadoAccionString = base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.FechaActualString;
                base.Control.TxtFrmFechaEstadoAccion().val(base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.FechaActualString);
                base.Control.TxtFrmComentario().val('');
                base.Control.FileUploadFrmFoto().val('');
                base.Control.FileUploadFrmAnexo().val('');
                base.Control.ArchivoFotoBase64 = null;
                base.Control.NombreArchivoFoto = null;
                base.Control.ArchivoAnexoBase64 = null;
                base.Control.NombreArchivoAnexo = null;

                base.Control.DlgForm.divDialog.close();

                if (base.Event.GrabarRecordAccionSeguimientoSuccess != null) {
                    base.Event.GrabarRecordAccionSeguimientoSuccess();
                }

                base.Event.BtnBuscarRecordAccionSeguimientoClick();
            } else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },

        BtnGridDescargarFotoValidate: function (data, type, full) {
            //if (!full.IndicadorPrimerRegistro) {
            //    if (full.CodigoArchivoFotoSharePoint != null) {
            //        return true;
            //    }
            //}

            //return false;

            return true;
        },

        BtnGridDescargarAnexoValidate: function (data, type, full) {
            //if (!full.IndicadorPrimerRegistro) {
            //    if (full.CodigoArchivoAnexoSharePoint != null) {
            //        return true;
            //    }
            //}

            //return false;
            return true;
        },

        BtnGridDescargarFotoRecordAccionSeguimientoClick: function (row, data) {
            'use strict'
            if (data.CodigoArchivoFotoSharePoint != null) {
                var filtro = {
                    CodigoArchivoSharePoint: data.CodigoArchivoFotoSharePoint,
                    NombreArchivo: data.NombreArchivoFoto
                };

                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Actions.DescargarArchivoRecordAccionSeguimiento, filtro);
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.SeguimientoAccion.Resource.MensajeArchivoValido });
            }
        },

        BtnGridDescargarAnexoRecordAccionSeguimientoClick: function (row, data) {
            'use strict'
            if (data.CodigoArchivoAnexoSharePoint != null) {
                var filtro = {
                    CodigoArchivoSharePoint: data.CodigoArchivoAnexoSharePoint,
                    NombreArchivo: data.NombreArchivoAnexo
                };

                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Actions.DescargarArchivoRecordAccionSeguimiento, filtro);
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.SeguimientoAccion.Resource.MensajeArchivoValido });
            }
        },

        BtnGridEditRecordAccionSeguimientoClick: function (row, data) {
            'use strict';
            base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.CodigoRecordAccionSeguimiento = data.CodigoRecordAccionSeguimiento;
            base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.CodigoColaboradorResponsableCierre = data.CodigoColaboradorResponsableCierre;
            base.Control.HdnFrmCodigoColaboradorResponsableCierre().val(base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.CodigoColaboradorResponsableCierre);
            base.Control.SlcFrmEstadoAccion().val(data.CodigoEstadoAccion);
            base.Control.TxtFrmFechaEstadoAccion().val(data.FechaEstadoAccionString);
            base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.FechaEstadoAccionString = data.FechaEstadoAccionString;
            base.Control.TxtFrmComentario().val(data.Comentario);
            base.Control.TxtFrmFechaCierreAccion().val(data.FechaCierreAccionString);
            base.Control.TxtFrmNombreColaboradorResponsableCierre().val(data.NombreColaboradorResponsableCierre);
        },

        BtnGridDeleteRecordAccionSeguimientoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Confirmation({
                indicadorModal: false,
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                onAccept: function () {
                    base.Ajax.AjaxEliminarRecordAccionSeguimiento.data = {
                        listaCodigosRecordAccionSeguimiento: [data.CodigoRecordAccionSeguimiento],
                    };

                    base.Ajax.AjaxEliminarRecordAccionSeguimiento.submit();
                }
            });
        },

        BtnGridEditValidate: function (data, type, full) {
            if (!full.IndicadorPrimerRegistro)
               return true;
            else
               return false;            
        },

        BtnGridDeleteValidate: function (data, type, full) {
            if (!full.IndicadorPrimerRegistro) {
                if (base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.ControlTotal
                    && base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.CodigoEstadoRecord != "CER")
                    return true;
                else
                    return false;
            }

            return false;
        },

        AjaxEliminarRecordAccionSeguimientoSuccess: function (resultado) {
            if (resultado.Result >= 1) {
                base.Control.Mensaje.InformationFormularioDetalle({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });

                base.Event.BtnBuscarRecordAccionSeguimientoClick();
            } else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
    };

    base.Ajax = {
        AjaxGrabarRecordAccionSeguimiento: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Actions.RegistrarRecordAccionSeguimiento,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarRecordAccionSeguimientoSuccess
        }),

        AjaxCerradoGerenciaRecordAccionSeguimiento: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Actions.CerradoGerenciaRecordAccionSeguimiento,
            autoSubmit: false,
            onSuccess: base.Event.AjaxCerradoGerenciaRecordAccionSeguimientoSuccess
        }),

        AjaxAnuladoGerenciaRecordAccionSeguimiento: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Actions.AnuladoGerenciaRecordAccionSeguimiento,
            autoSubmit: false,
            onSuccess: base.Event.AjaxAnuladoGerenciaRecordAccionSeguimientoSuccess
        }),

        AjaxReabrirGerenciaRecordAccionSeguimiento: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Actions.ReabrirGerenciaRecordAccionSeguimiento,
            autoSubmit: false,
            onSuccess: base.Event.AjaxReabrirGerenciaRecordAccionSeguimientoSuccess
        }),

        AjaxEliminarRecordAccionSeguimiento: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Actions.EliminarRecordAccionSeguimiento,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarRecordAccionSeguimientoSuccess
        }),
    };

    base.Show = function (opts) {
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.SeguimientoAccion.Resource.EtiquetaTituloFormularioSeguimientoAccion,
            size: "size-wide",
            close: function () {
                if (base.Event.GrabarRecordAccionSeguimientoSuccess != null) {
                    base.Event.GrabarRecordAccionSeguimientoSuccess();
                }
            }
        });

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Actions.FormularioRegistroSeguimientoAccion,
            onSuccess: function () {
                base.Ini();
            },

            data: {
                CodigoEstadoRecord: opts.CodigoEstadoRecord,
                CodigoRecordAccion: opts.CodigoRecordAccion,
                NumeroAccion: opts.NumeroAccion
            },
        });
    };

    base.Function = {
        ValidacionExtraColaborador: function () {
            if (base.Control.RecordAccionSeguimientoModel.RecordAccionSeguimiento.indicadorMenu == 2)
            {
                var validaciones = new Array();
                validaciones.push({
                    Event: function () {
                        var resultado = true;

                        if (base.Control.TxtFrmNombreColaboradorResponsableCierre().val() == '' || base.Control.TxtFrmNombreColaboradorResponsableCierre().val() == null) {
                            resultado = false;
                        }
                        if (resultado) {
                            base.Control.TxtFrmNombreColaboradorResponsableCierre().removeClass("hasError");
                        } else {
                            base.Control.TxtFrmNombreColaboradorResponsableCierre().attr('class', 'form-control hasError');
                        }
                        return resultado;
                    },
                    codeMessage: "ValidarColaborador"
                });
                return validaciones;
            }
        },
        CrearGridRecordAccionSeguimiento: function () {
            var columns = new Array();
            columns.push({
                data: 'DescripcionEstadoAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.SeguimientoAccion.Resource.GridEstadoAccion,
                width: "15%"
            });

            columns.push({
                data: 'FechaEstadoAccionString',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.SeguimientoAccion.Resource.GridFechaEstadoAccion,
                width: "10%"
            });

            columns.push({
                data: 'Comentario',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.SeguimientoAccion.Resource.GridComentario,
                width: "10%"
            });

            //columns.push({
            //    data: '',
            //    mRender: function (data, type, full) {
            //        var html = "";
            //        if (full.IndicadorCierre) {
            //            html = Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSi;
            //        }
            //        else {
            //            html = Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaNo;
            //        }

            //        return html;
            //    },
            //    title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.SeguimientoAccion.Resource.GridCerrado,
            //    width: "5%"
            //});

            columns.push({
                data: 'NombreColaboradorResponsableCierre',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.SeguimientoAccion.Resource.GridCerradoPor,
                width: "25%"
            });

            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.SeguimientoAccion.Resource.GridFoto,
                "class": "controls",
                width: "5%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.DescargarFoto, validateRender: base.Event.BtnGridDescargarFotoValidate, event: { on: 'click', callBack: base.Event.BtnGridDescargarFotoRecordAccionSeguimientoClick } },
                ]
            });

            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.SeguimientoAccion.Resource.GridAnexo,
                "class": "controls",
                width: "5%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.DescargarAnexo, validateRender: base.Event.BtnGridDescargarAnexoValidate, event: { on: 'click', callBack: base.Event.BtnGridDescargarAnexoRecordAccionSeguimientoClick } },
                ]
            });

            //columns.push({
            //    "data": "",
            //    "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
            //    "class": "controls",
            //    width: "10%",
            //    actionButtons: [
            //        { type: Pe.GMD.UI.Web.Components.GridAction.Edit, validateRender: base.Event.BtnGridEditValidate, event: { on: 'click', callBack: base.Event.BtnGridEditRecordAccionSeguimientoClick } },
            //        { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.BtnGridDeleteValidate, event: { on: 'click', callBack: base.Event.BtnGridDeleteRecordAccionSeguimientoClick } },
            //    ]
            //});

            base.Control.GrdResultadoRecordAccionSeguimiento = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultRecordAccionSeguimiento',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Actions.BuscarRecordAccionSeguimiento,
                    source: 'Result'
                }
            });
        },
    }
};
