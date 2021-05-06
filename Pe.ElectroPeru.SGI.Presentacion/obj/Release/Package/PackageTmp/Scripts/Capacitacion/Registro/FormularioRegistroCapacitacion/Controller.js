ns('Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioRegistroCapacitacion');
Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioRegistroCapacitacion.Controller = function (opts) {
    var base = this;

    base.Ini = function () {        
        base.Control.FormularioModelo = Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.Models.FormularioRegistroCapacitacion;

        base.Control.BtnGrabarRegistroCapacitacion().off('click');
        base.Control.BtnGrabarRegistroCapacitacion().on('click', base.Event.BtnGrabarRegistroCapacitacionClick);

        base.Control.ValidadorRegistroCapacitacion = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmRegistroCapacitacion(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtra()
        });

        if (base.Control.FormularioModelo.RegistroClase.NombreArchivo != null) {
            $('#NombreArchivoApendice .ClsNombreArchivoApendice').html('<p>' + base.Control.FormularioModelo.RegistroClase.NombreArchivo + '</p>');
        }

        if (opts != null && opts.AceptarSuccess != null && opts.AceptarSuccess)
            base.Event.AceptarSuccess = opts.AceptarSuccess;

        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.TxtFechaInicio(),
            minDateFrom: new Date(1900, 1, 1)
        });
        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.TxtFechaFin(),
            minDateFrom: new Date(1900, 1, 1)
        });

        var dateFormat = "dd/mm/yy",
        from = $("#txtFechaInicio").datepicker({ dateFormat: 'dd/mm/yy' }).on("change", function () {
            to.datepicker("option", "minDate", getDate(this));

            var ttt1 = $.datepicker.parseDate('dd/mm/yy', base.Control.TxtFechaInicio().val());
            var ttt2 = $.datepicker.parseDate('dd/mm/yy', base.Control.TxtFechaFin().val());
            if (ttt1 != null && ttt2 != null) {
                ttt1.setHours(base.Control.SlcHoraInicio().val());
                ttt1.setMinutes(base.Control.SlcMinutoInicio().val());
                ttt2.setHours(base.Control.SlcHoraFin().val());
                ttt2.setMinutes(base.Control.SlcMinutoFin().val());

                var timeStart = new Date(ttt1).getTime();
                var timeEnd = new Date(ttt2).getTime();

                var hourDiff = timeEnd - timeStart; //in ms
                var secDiff = hourDiff / 1000; //in s
                var minDiff = hourDiff / 60 / 1000; //in minutes
                var hDiff = hourDiff / 3600 / 1000; //in hours
                var humanReadable = {};
                humanReadable.hours = Math.floor(hDiff);
                humanReadable.minutes = minDiff - 60 * humanReadable.hours;

                if (humanReadable.hours > -1) {
                    if (humanReadable.hours < 10) {
                        humanReadable.hours = '0' + humanReadable.hours;
                    }
                    if (humanReadable.minutes < 10) {
                        humanReadable.minutes = '0' + humanReadable.minutes;
                    }
                    base.Control.TxtHorasEfectivas().val(humanReadable.hours + ":" + humanReadable.minutes);
                }
                else {
                    base.Control.TxtHorasEfectivas().val('');
                }
            }
          }),
        to = $("#txtFechaFin").datepicker({ dateFormat: 'dd/mm/yy' }).on("change", function () {
            from.datepicker("option", "maxDate", getDate(this));

            var ttt1 = $.datepicker.parseDate('dd/mm/yy', base.Control.TxtFechaInicio().val());
            var ttt2 = $.datepicker.parseDate('dd/mm/yy', base.Control.TxtFechaFin().val());

            if (ttt1 != null && ttt2 != null) {
                ttt1.setHours(base.Control.SlcHoraInicio().val());
                ttt1.setMinutes(base.Control.SlcMinutoInicio().val());
                ttt2.setHours(base.Control.SlcHoraFin().val());
                ttt2.setMinutes(base.Control.SlcMinutoFin().val());

                var timeStart = new Date(ttt1).getTime();
                var timeEnd = new Date(ttt2).getTime();

                var hourDiff = timeEnd - timeStart; //in ms
                var secDiff = hourDiff / 1000; //in s
                var minDiff = hourDiff / 60 / 1000; //in minutes
                var hDiff = hourDiff / 3600 / 1000; //in hours
                var humanReadable = {};
                humanReadable.hours = Math.floor(hDiff);
                humanReadable.minutes = minDiff - 60 * humanReadable.hours;

                if (humanReadable.hours > -1) {
                    if (humanReadable.hours < 10) {
                        humanReadable.hours = '0' + humanReadable.hours;
                    }
                    if (humanReadable.minutes < 10) {
                        humanReadable.minutes = '0' + humanReadable.minutes;
                    }
                    base.Control.TxtHorasEfectivas().val(humanReadable.hours + ":" + humanReadable.minutes);
                }
                else {
                    base.Control.TxtHorasEfectivas().val('');
                }
            }
        });

        function getDate(element) {
            var date;
            try {
                date = $.datepicker.parseDate(dateFormat, element.value);
            } catch (error) {
                date = null;
            }

            return date;
        }

        base.Control.FileApendice().on("change", function () {
            var files = this.files;

            if (!files) {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.EtiquetaFormatoArchivoNoSoportado });
                return;
            }

            if (this.files && this.files[0]) {
                var reader = new FileReader();
                if (this.files[0].size <= base.Control.FormularioModelo.RegistroClase.PesoMaximoArchivoAnexoSharePoint) {
                    base.Control.FileApendice().removeClass('hasError');
                    $('#frmRegistroCapacitacionSummaryErrorMessage').addClass("hidden");

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
                            if (base.Control.FormularioModelo.RegistroClase.NombreArchivo != null) {
                                $('#NombreArchivoApendice .ClsNombreArchivoApendice').html('');
                            }
                        }
                    };

                    reader.readAsDataURL(uploadFile);
                } else {
                    base.Control.ArchivoBase64 = null;
                    base.Control.FileApendice().val('');
                    base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.EtiquetaTamanioArchivoAnexoMaximo.format(base.Control.FormularioModelo.RegistroClase.PesoMaximoArchivoAnexoSharePointString) });
                }
            }
        });

        base.Control.SlcHoraInicio().off('change');
        base.Control.SlcHoraInicio().on('change', base.Event.CalcularHoraDuracion);
        base.Control.SlcHoraFin().off('change');
        base.Control.SlcHoraFin().on('change', base.Event.CalcularHoraDuracion);
        base.Control.SlcMinutoInicio().off('change');
        base.Control.SlcMinutoInicio().on('change', base.Event.CalcularHoraDuracion);
        base.Control.SlcMinutoFin().off('change');
        base.Control.SlcMinutoFin().on('change', base.Event.CalcularHoraDuracion);
    };

    base.Control = {
        FileApendice: function () { return $('#fileApendice'); },
        FormularioModelo: null,
        FrmRegistroCapacitacion: function () { return $('#frmRegistroCapacitacion'); },
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        BtnGrabarRegistroCapacitacion: function () { return $('#btnGrabarRegistroCapacitacion'); },
        TxtFechaInicio: function () { return $('#txtFechaInicio'); },
        SlcHoraInicio: function () { return $('#slcHoraInicio'); },
        SlcMinutoInicio: function () { return $('#slcMinutoInicio'); },
        TxtFechaFin: function () { return $('#txtFechaFin'); },
        SlcHoraFin: function () { return $('#slcHoraFin'); },
        SlcMinutoFin: function () { return $('#slcMinutoFin'); },
        TxtHorasEfectivas: function () { return $('#txtHorasEfectivas'); },
        ValidadorRegistroCapacitacion: null,
        Validador: null,
    };

    base.Event = {
        CalcularHoraDuracion: function () {

            var ttt1 = $.datepicker.parseDate('dd/mm/yy', base.Control.TxtFechaInicio().val());
            var ttt2 = $.datepicker.parseDate('dd/mm/yy', base.Control.TxtFechaFin().val());

            if (ttt1 != null && ttt2 != null) {
                ttt1.setHours(base.Control.SlcHoraInicio().val());
                ttt1.setMinutes(base.Control.SlcMinutoInicio().val());
                ttt2.setHours(base.Control.SlcHoraFin().val());
                ttt2.setMinutes(base.Control.SlcMinutoFin().val());

                var timeStart = new Date(ttt1).getTime();
                var timeEnd = new Date(ttt2).getTime();

                var hourDiff = timeEnd - timeStart; //in ms
                var secDiff = hourDiff / 1000; //in s
                var minDiff = hourDiff / 60 / 1000; //in minutes
                var hDiff = hourDiff / 3600 / 1000; //in hours
                var humanReadable = {};
                humanReadable.hours = Math.floor(hDiff);
                humanReadable.minutes = minDiff - 60 * humanReadable.hours;

                if (humanReadable.hours > -1) {
                    if (humanReadable.hours < 10) {
                        humanReadable.hours = '0' + humanReadable.hours;
                    }
                    if (humanReadable.minutes < 10) {
                        humanReadable.minutes = '0' + humanReadable.minutes;
                    }
                    base.Control.TxtHorasEfectivas().val(humanReadable.hours + ":" + humanReadable.minutes);
                }
                else {
                    base.Control.TxtHorasEfectivas().val('');
                }
            }
        },
        BtnGrabarRegistroCapacitacionClick: function () {
            'use strict'
            if (base.Control.FormularioModelo.RegistroClase.CodigoEjecucionRegistroClase != null && (base.Control.ArchivoBase64 == null || base.Control.ArchivoBase64 == '')) {
                base.Control.ArchivoBase64 = $('#txtAnexoFotoString').val();
            }

            if (base.Control.ValidadorRegistroCapacitacion.isValid()) {
                var fileapendice = base.Control.FileApendice().val() != '' ? base.Control.FileApendice().val() : base.Control.FormularioModelo.RegistroClase.NombreArchivo;

                if (fileapendice != null && fileapendice != '') {
                    base.Ajax.AjaxRegistrarEjecucionRegistroClase.data = {
                        CodigoEjecucion: base.Control.FormularioModelo.RegistroClase.CodigoEjecucion,
                        CodigoEjecucionRegistroClase: base.Control.FormularioModelo.RegistroClase.CodigoEjecucionRegistroClase,
                        FechaInicio: base.Control.TxtFechaInicio().val() + ' ' + base.Control.SlcHoraInicio().val() + ":" + base.Control.SlcMinutoInicio().val(),
                        FechaFin: base.Control.TxtFechaFin().val() + ' ' + base.Control.SlcHoraFin().val() + ":" + base.Control.SlcMinutoFin().val(),
                        NombreArchivo: fileapendice,
                        AnexoString: base.Control.ArchivoBase64,
                        CodigoInstructor: base.Control.FormularioModelo.RegistroClase.CodigoInstructor
                    };

                    base.Ajax.AjaxRegistrarEjecucionRegistroClase.submit();
                }
                else {
                    base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarRegistroClase.Resource.ValidarCampoArchivo });
                    return false;
                }
            }
            else
            {
                $('#frmRegistroCapacitacionSummaryErrorMessage').empty();
                $('#frmRegistroCapacitacionSummaryErrorMessage').append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },
        AjaxRegistrarEjecucionRegistroClaseSuccess: function (resultado) {
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
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarRegistroClase.Resource.MensajeEjecucionClaseRegistrada });
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
            title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarRegistroClase.Resource.EtiquetaTituloFormularioRegistroCapacitacion,
            size: "size-wide",
            close: function () {
            }
        });

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarRegistroClase.Actions.FormularioRegistroCapacitacion,
            onSuccess: function () {
                base.Ini();
            },
            data: opts
        });
    };

    base.Ajax = {
        AjaxRegistrarEjecucionRegistroClase: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarRegistroClase.Actions.RegistrarEjecucionRegistroClase,
            autoSubmit: false,
            onSuccess: base.Event.AjaxRegistrarEjecucionRegistroClaseSuccess
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
                        base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarRegistroClase.Resource.MensajeValidacionHorasRegistroClase });
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