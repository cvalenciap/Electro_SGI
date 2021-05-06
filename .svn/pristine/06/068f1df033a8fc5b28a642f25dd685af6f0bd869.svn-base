ns('Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioRegistroNotas');
Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioRegistroNotas.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
        base.Control.FormularioModelo = Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.Models.FormularioRegistroNotas;
        base.Control.BtnGrabarRegistroCapacitacion().off('click');
        base.Control.BtnGrabarRegistroCapacitacion().on('click', base.Event.BtnGrabarRegistroCapacitacionClick);

        base.Control.ValidadorRegistroNotas = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmRegistroNotas(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos            
        });


        if (base.Control.FormularioModelo.RegistroCurso.NombreArchivo != null) {
            $('#NombreArchivoApendice .ClsNombreArchivoApendice').html('<p>' + base.Control.FormularioModelo.RegistroCurso.NombreArchivo + '</p>');
        }

        if (opts != null && opts.AceptarSuccess != null && opts.AceptarSuccess)
            base.Event.AceptarSuccess = opts.AceptarSuccess;

        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.TxtFechaRegistro(),
            minDateFrom: new Date(1900, 1, 1)
        });


        base.Control.FileApendice().on("change", function () {
            var files = this.files;

            if (!files) {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.EtiquetaFormatoArchivoNoSoportado });
                return;
            }

            if (this.files && this.files[0]) {
                var reader = new FileReader();
                if (this.files[0].size <= base.Control.FormularioModelo.RegistroCurso.PesoMaximoArchivoAnexoSharePoint) {
                    base.Control.FileApendice().removeClass('hasError');
                    $('#frmRegistroNotasSummaryErrorMessage').addClass("hidden");

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
                            if (base.Control.FormularioModelo.RegistroNotas.NombreArchivo != null) {
                                $('#NombreArchivoApendice .ClsNombreArchivoApendice').html('');
                            }
                        }
                    };

                    reader.readAsDataURL(uploadFile);
                } else {
                    base.Control.ArchivoBase64 = null;
                    base.Control.FileApendice().val('');
                    base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.EtiquetaTamanioArchivoAnexoMaximo.format(base.Control.FormularioModelo.RegistroNotas.PesoMaximoArchivoAnexoSharePointString) });
                }
            }
        });
    };

    base.Control = {
        FileApendice: function () { return $('#fileApendice'); },
        FormularioModelo: null,
        FrmRegistroNotas: function () { return $('#frmRegistroNotas'); },
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        BtnGrabarRegistroCapacitacion: function () { return $('#btnGrabarRegistroCapacitacion'); },
        TxtFechaRegistro: function () { return $('#txtFechaRegistro'); },
        SlcHoraRegistro: function () { return $('#slcHoraRegistro'); },
        SlcMinutoRegistro: function () { return $('#slcMinutoRegistro'); },
        TxtNotaRegistroCurso: function () { return $('#txtNotaRegistroCurso'); },
        ValidadorRegistroNotas: null,
        Validador: null,
    };

    base.Event = {
        BtnGrabarRegistroCapacitacionClick: function () {
            'use strict'
            if (base.Control.TxtNotaRegistroCurso().val() > 100 || base.Control.TxtNotaRegistroCurso().val() < 0)
            {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Configuracion.Resource.EtiquetaValidacionNota });
                return;
            }
            if (base.Control.FormularioModelo.RegistroCurso.CodigoEjecucionRegistroCurso != null && (base.Control.ArchivoBase64 == null || base.Control.ArchivoBase64 == '')) {
                base.Control.ArchivoBase64 = $('#txtAnexoFotoString').val();
            }

            if (base.Control.ValidadorRegistroNotas.isValid()) {
                var fileapendice = base.Control.FileApendice().val() != '' ? base.Control.FileApendice().val() : base.Control.FormularioModelo.RegistroCurso.NombreArchivo;

                base.Ajax.AjaxRegistrarRegistroCurso.data = {
                    CodigoEjecucion: base.Control.FormularioModelo.RegistroCurso.CodigoEjecucion,
                    CodigoEjecucionRegistroCurso: base.Control.FormularioModelo.RegistroCurso.CodigoEjecucionRegistroCurso,
                    FechaHoraRegistro: base.Control.TxtFechaRegistro().val() + ' ' + base.Control.SlcHoraRegistro().val() + ":" + base.Control.SlcMinutoRegistro().val(),
                    NombreArchivo: fileapendice,
                    AnexoString: base.Control.ArchivoBase64,
                    NotaRegistroCurso: base.Control.TxtNotaRegistroCurso().val(),
                    CodigoParticipante: base.Control.FormularioModelo.RegistroCurso.CodigoParticipante,
                    CodigoAsignacionPersonaProyecto: base.Control.FormularioModelo.RegistroCurso.CodigoAsignacionPersonaProyecto,
                    CodigoProceso: base.Control.FormularioModelo.RegistroCurso.CodigoProceso,
                    CodigoEquipo: base.Control.FormularioModelo.RegistroCurso.CodigoEquipo,
                    CodigoInstructor: base.Control.FormularioModelo.RegistroCurso.CodigoInstructor
                };

                base.Ajax.AjaxRegistrarRegistroCurso.submit();
            }
            else {
                $('#frmRegistroNotasSummaryErrorMessage').empty();
                $('#frmRegistroNotasSummaryErrorMessage').append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },
        AjaxRegistrarRegistroCursoSuccess: function (resultado) {
            if (resultado.Result == 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });

                base.Control.ArchivoBase64 = null;
                base.Control.NombreArchivoApendice = null;
                base.Control.DlgForm.divDialog.close();

                if (base.Event.AceptarSuccess != null) {
                    base.Event.AceptarSuccess();
                }

            }
            else if (resultado.Result == 2) {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarRegistroNotas.Resource.MensajeEjecucionClaseRegistrada });
            }
            else if (resultado.Result == 3) {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarParticipante.Resource.EtiquetaMensajePesoNota });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
    };

    base.Show = function (opts) {
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarParticipante.Resource.EtiquetaTituloRegistroNotas,            
            size: "size-wide",
            close: function () {
            }
        });

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarPersonas.Actions.FormularioRegistroNotas,
            onSuccess: function () {
                base.Ini();
            },
            data: opts
        });
    };

    base.Ajax = {
        AjaxRegistrarRegistroCurso: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.Actions.RegistrarRegistroCurso,
            autoSubmit: false,
            onSuccess: base.Event.AjaxRegistrarRegistroCursoSuccess
        }),
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

            validaciones.push({
                Event: function () {
                    var resultado = true;
                    var tiempoDuracion = base.Control.TxtHorasEfectivas().val();
                    var arrayTiempoDuracion = [];

                    if (tiempoDuracion != null && tiempoDuracion != '' && tiempoDuracion != undefined) {
                        arrayTiempoDuracion = tiempoDuracion.split(':');
                    }

                    if (arrayTiempoDuracion.length > 0) {
                        if (arrayTiempoDuracion[0] < 1) {
                            resultado = false;
                        }
                    }
                    else {
                        resultado = false;
                    }

                    if (!resultado) {
                        base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarRegistroNotas.Resource.MensajeValidacionHorasRegistroNotas });
                        base.Control.TxtHorasEfectivas().attr('class', 'form-control hasError');
                    }
                    else {
                        base.Control.TxtHorasEfectivas().attr('class', 'form-control');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });

            return validaciones;
        }
    };
};