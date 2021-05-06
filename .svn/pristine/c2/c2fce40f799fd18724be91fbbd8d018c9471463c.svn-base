/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 19102017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Configuracion.Notificaciones.FormularioNotificacionVisitaGerencial');
Pe.ElectroPeru.SGI.Presentacion.Configuracion.Notificaciones.FormularioNotificacionVisitaGerencial.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Control.FormularioNotificacionVisitaGerencialModel = Pe.ElectroPeru.SGI.Presentacion.Configuracion.Notificaciones.FormularioNotificacionVisitaGerencial.Models.NotificacionModel;

        base.Control.BtnGuardarNotificacion().off('click');
        base.Control.BtnGuardarNotificacion().on('click', base.Event.BtnGuardarNotificacionClick);

        base.Control.BtnCancelarNotificacion().off('click');
        base.Control.BtnCancelarNotificacion().on('click', base.Event.BtnCancelarNotificacionClick);

        base.Control.BtnAnularNotificacion().off('click');
        base.Control.BtnAnularNotificacion().on('click', base.Event.BtnAnularNotificacionClick);

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmNotificacion(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos
        });

        base.Control.DlgFormularioColaboradorResponsable1 = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller ({
            AceptarSuccess: base.Event.ObtenerEmpresaColaboradorResponsable1
        });

        base.Control.DlgFormularioColaboradorResponsable2 = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.ObtenerEmpresaColaboradorResponsable2
        });

        base.Control.SlcProyecto().off('change');
        base.Control.SlcProyecto().on('change', base.Event.SlcProyectoChange);
        base.Control.SlcProyecto().trigger('change');

        base.Control.SlcHerramienta().off('change');
        base.Control.SlcHerramienta().on('change', base.Event.SlcHerramientaChange);

        base.Control.BtnResposanble1().off('click');
        base.Control.BtnResposanble1().on('click', base.Event.BtnResposanble1Click);

        base.Control.BtnResposanble2().off('click');
        base.Control.BtnResposanble2().on('click', base.Event.BtnResposanble2Click);

    };
    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        FormularioNotificacionVisitaGerencialModel: null,
        BtnGuardarNotificacion: function () { return $('#btnGuardarNotificacion'); },
        BtnCancelarNotificacion: function () { return $('#btnCancelarNotificacion'); },
        BtnAnularNotificacion: function () { return $('#btnAnularNotificacion'); },
        FrmNotificacion: function () { return $('#frmNotificacion'); },
        SlcProyecto: function () { return $('#slcProyecto'); },
        SlcHerramienta: function () { return $('#slcHerramienta'); },
        SlcDias: function () { return $('#slcDias'); },
        SlcDiasParaNotificacion: function () { return $('#slcDiasParaNotificacion'); },
                
        DlgFormularioColaboradorResponsable1: null,
        DlgFormularioColaboradorResponsable2: null,
        BtnResposanble1: function () { return $('#btnResposanble1'); },
        BtnResposanble2: function () { return $('#btnResposanble2'); },
        FormularioModelo: null
    };

    base.Event = {
        BtnEliminarResponsable: function () {
            var that = $(this);
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    that.parents('tr').remove();
                    var lengthTable = $('#divGrdResponsables > tbody  > tr').length;
                    var cadenaCodigos = '';
                    if (lengthTable > 0) {
                        var cont = 1;
                        $('#divGrdResponsables > tbody  > tr').each(function (a, b) {
                            if (cont == lengthTable) {
                                cadenaCodigos += $(b).attr('id');
                            }
                            else {
                                cadenaCodigos += $(b).attr('id') + ',';
                            }
                            cont++;
                        });
                    }
                    base.Ajax.AjaxGrabarNotificacion.data = {
                        CodigoNotificacion: base.Control.FormularioModelo.CodigoNotificacion,
                        CodigoProyecto: base.Control.FormularioModelo.CodigoProyecto,
                        CodigoHerramienta: base.Control.FormularioModelo.CodigoHerramienta,
                        DiasCierrePlanAccion: base.Control.FormularioModelo.DiasCierrePlanAccion,
                        DiasParaEnvioNotificacion: base.Control.FormularioModelo.DiasParaEnvioNotificacion,
                        PersonasResponsables: cadenaCodigos,
                        PersonasaNotificar: base.Control.FormularioModelo.PersonasaNotificar,
                    };
                    base.Ajax.AjaxGrabarNotificacion.submit();
                }
            });
        },
        BtnEliminarResponsable2: function () {
            var that = $(this);
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    that.parents('tr').remove();
                    var lengthTable = $('#divGrdPersonasNotificar > tbody  > tr').length;
                    var cadenaCodigos = '';
                    if (lengthTable > 0) {
                        var cont = 1;
                        $('#divGrdPersonasNotificar > tbody  > tr').each(function (a, b) {
                            if (cont == lengthTable) {
                                cadenaCodigos += $(b).attr('id');
                            }
                            else {
                                cadenaCodigos += $(b).attr('id') + ',';
                            }
                            cont++;
                        });
                    }
                    base.Ajax.AjaxGrabarNotificacion.data = {
                        CodigoNotificacion: base.Control.FormularioModelo.CodigoNotificacion,
                        CodigoProyecto: base.Control.FormularioModelo.CodigoProyecto,
                        CodigoHerramienta: base.Control.FormularioModelo.CodigoHerramienta,
                        DiasCierrePlanAccion: base.Control.FormularioModelo.DiasCierrePlanAccion,
                        DiasParaEnvioNotificacion: base.Control.FormularioModelo.DiasParaEnvioNotificacion,
                        PersonasResponsables: base.Control.FormularioModelo.PersonasResponsables,
                        PersonasaNotificar: cadenaCodigos,
                    };
                    base.Ajax.AjaxGrabarNotificacion.submit();
                }
            });
        },
        SlcProyectoChange: function () {
            'use strict'
            if (base.Control.SlcProyecto().val() != null && base.Control.SlcProyecto().val() != '' &&
                base.Control.SlcHerramienta().val() != null && base.Control.SlcHerramienta().val() != '') {
                base.Ajax.AjaxObtenerNotificacion.data = {
                    CodigoProyecto: base.Control.SlcProyecto().val(),
                    CodigoHerramienta: base.Control.SlcHerramienta().val()
                };
                base.Ajax.AjaxListarColaboraresResponsables.data = {
                    CodigoProyecto: base.Control.SlcProyecto().val(),
                    CodigoHerramienta: base.Control.SlcHerramienta().val()
                };
                base.Ajax.AjaxListarColaboradoresaNotificar.data = {
                    CodigoProyecto: base.Control.SlcProyecto().val(),
                    CodigoHerramienta: base.Control.SlcHerramienta().val()
                };
                base.Ajax.AjaxObtenerNotificacion.submit();
                base.Ajax.AjaxListarColaboraresResponsables.submit();
                base.Ajax.AjaxListarColaboradoresaNotificar.submit();
                base.Control.SlcDias().val('');
            }
            else {
                $('#divGrdResponsables tbody').html('');
                $('#divGrdPersonasNotificar tbody').html('');
                base.Control.SlcDias().val('');
            }
        },
        SlcHerramientaChange: function () {
            'use strict'
            
            var CodigoHerramienta = base.Control.SlcHerramienta().val()
            if (CodigoHerramienta == Pe.ElectroPeru.SGI.Presentacion.Configuracion.Notificaciones.DatosConstantes.ModuloHerramienta.GestionVisitaGerencial) {
                var filtro = {
                    CodigoProyecto: base.Control.SlcProyecto().val(),
                };
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Configuracion.Index.Actions.FormularioNotificacionVisitaGerencial, filtro);
            }

            if (base.Control.SlcProyecto().val() != null && base.Control.SlcProyecto().val() != '' &&
                base.Control.SlcHerramienta().val() != null && base.Control.SlcHerramienta().val() != '') {
                base.Ajax.AjaxObtenerNotificacion.data = {
                    CodigoProyecto: base.Control.SlcProyecto().val(),
                    CodigoHerramienta: base.Control.SlcHerramienta().val()
                };
                base.Ajax.AjaxListarColaboraresResponsables.data = {
                    CodigoProyecto: base.Control.SlcProyecto().val(),
                    CodigoHerramienta: base.Control.SlcHerramienta().val()
                };
                base.Ajax.AjaxListarColaboradoresaNotificar.data = {
                    CodigoProyecto: base.Control.SlcProyecto().val(),
                    CodigoHerramienta: base.Control.SlcHerramienta().val()
                };
                base.Ajax.AjaxObtenerNotificacion.submit();
                base.Ajax.AjaxListarColaboraresResponsables.submit();
                base.Ajax.AjaxListarColaboradoresaNotificar.submit();
                base.Control.SlcDias().val('');
            }
            else {
                $('#divGrdResponsables tbody').html('');
                $('#divGrdPersonasNotificar tbody').html('');
                base.Control.SlcDias().val('');
            }
        },
        BtnResposanble1Click: function () {
            base.Control.DlgFormularioColaboradorResponsable1.Show();
        },
        BtnResposanble2Click: function () {
            base.Control.DlgFormularioColaboradorResponsable2.Show();
        },
        ObtenerEmpresaColaboradorResponsable1: function (responsable) {
            if (responsable.CodigoColaborador != null && responsable.CodigoEmpresa != null && responsable.CodigoPuestoTrabajo != null
                && base.Control.FormularioModelo != null && base.Control.FormularioModelo.CodigoNotificacion != null) {
                var cadenaCodigos = '';
                $('#divGrdResponsables > tbody  > tr').each(function () {
                    cadenaCodigos += $(this).attr('id') + ',';
                });

                base.Ajax.AjaxGrabarNotificacion.data = {
                    CodigoNotificacion: base.Control.FormularioModelo.CodigoNotificacion,
                    CodigoProyecto: base.Control.FormularioModelo.CodigoProyecto,
                    CodigoHerramienta: base.Control.FormularioModelo.CodigoHerramienta,
                    DiasCierrePlanAccion: base.Control.FormularioModelo.DiasCierrePlanAccion,
                    DiasParaEnvioNotificacion: base.Control.FormularioModelo.DiasParaEnvioNotificacion,
                    PersonasResponsables: cadenaCodigos + responsable.CodigoColaborador,
                    PersonasaNotificar: base.Control.FormularioModelo.PersonasaNotificar,
                };
                base.Ajax.AjaxGrabarNotificacion.submit();
            }
        },
        ObtenerEmpresaColaboradorResponsable2: function (responsable) {
            if (responsable.CodigoColaborador != null && responsable.CodigoEmpresa != null && responsable.CodigoPuestoTrabajo != null
                && base.Control.FormularioModelo != null && base.Control.FormularioModelo.CodigoNotificacion != null) {
                var cadenaCodigos = '';
                $('#divGrdPersonasNotificar > tbody  > tr').each(function () {
                    cadenaCodigos += $(this).attr('id') + ',';
                });
                base.Ajax.AjaxGrabarNotificacion.data = {
                    CodigoNotificacion: base.Control.FormularioModelo.CodigoNotificacion,
                    CodigoProyecto: base.Control.FormularioModelo.CodigoProyecto,
                    CodigoHerramienta: base.Control.FormularioModelo.CodigoHerramienta,
                    DiasCierrePlanAccion: base.Control.FormularioModelo.DiasCierrePlanAccion,
                    DiasParaEnvioNotificacion: base.Control.FormularioModelo.DiasParaEnvioNotificacion,
                    PersonasResponsables: base.Control.FormularioModelo.PersonasResponsables,
                    PersonasaNotificar: cadenaCodigos + responsable.CodigoColaborador,
                };
                base.Ajax.AjaxGrabarNotificacion.submit();
            }
        },
        BtnCancelarNotificacionClick: function () {
            'use strict'
            var filtro = {
                CodigoProyecto: base.Control.SlcProyecto().val(),
            };
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Configuracion.Notificaciones.FormularioNotificacionVisitaGerencial.NotificacionesIndex, filtro);
        },
        BtnGuardarNotificacionClick: function () {
            if (base.Control.Validador.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarNotificacion.data = {
                            CodigoNotificacion: (base.Control.FormularioModelo != null) ? base.Control.FormularioModelo.CodigoNotificacion : null,
                            CodigoProyecto: base.Control.SlcProyecto().val(),
                            CodigoHerramienta: base.Control.SlcHerramienta().val(),
                            DiasCierrePlanAccion: base.Control.SlcDias().val(),
                            DiasParaEnvioNotificacion: base.Control.SlcDiasParaNotificacion().val(),
                            PersonasResponsables: (base.Control.FormularioModelo != null) ? base.Control.FormularioModelo.PersonasResponsables : null,
                            PersonasaNotificar: (base.Control.FormularioModelo != null) ? base.Control.FormularioModelo.PersonasaNotificar : null,
                        };
                        base.Ajax.AjaxGrabarNotificacion.submit();
                    }
                });
            }
            else {
                $("#frmNotificacionSummaryErrorMessage").empty();
                $("#frmNotificacionSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },
        BtnAnularNotificacionClick: function () {
            if (base.Control.FormularioModelo.PersonasResponsables == null || base.Control.FormularioModelo.PersonasResponsables == '') {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxAnularNotificacionVisitaGerencial.data = {
                            CodigoNotificacion: (base.Control.FormularioModelo != null) ? base.Control.FormularioModelo.CodigoNotificacion : null,
                            CodigoProyecto: base.Control.SlcProyecto().val(),
                            CodigoHerramienta: base.Control.SlcHerramienta().val(),
                            DiasCierrePlanAccion: base.Control.SlcDias().val(),
                            DiasParaEnvioNotificacion: base.Control.SlcDiasParaNotificacion().val(),
                            PersonasResponsables: (base.Control.FormularioModelo != null) ? base.Control.FormularioModelo.PersonasResponsables : null,
                            PersonasaNotificar: (base.Control.FormularioModelo != null) ? base.Control.FormularioModelo.PersonasaNotificar : null,
                        };
                        base.Ajax.AjaxAnularNotificacionVisitaGerencial.submit();
                    }
                });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.FormularioNotificacionVisitaGerencial.Configuraciones.Resource.MsgNoPermiteAnular
                });
            }
        },
        AjaxGrabarNotificacionSuccess: function (resultado) {
            if (resultado.IsSuccess && resultado.Result != null && resultado.Result.CodigoNotificacion != null) {
                base.Control.FormularioModelo = resultado.Result;
                base.Control.BtnResposanble1().prop('disabled', false);
                base.Control.BtnResposanble2().prop('disabled', false);
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });

                base.Ajax.AjaxListarColaboraresResponsables.data = {
                    CodigoProyecto: base.Control.SlcProyecto().val(),
                    CodigoHerramienta: base.Control.SlcHerramienta().val()
                };
                base.Ajax.AjaxListarColaboradoresaNotificar.data = {
                    CodigoProyecto: base.Control.SlcProyecto().val(),
                    CodigoHerramienta: base.Control.SlcHerramienta().val()
                };
                base.Ajax.AjaxListarColaboraresResponsables.submit();
                base.Ajax.AjaxListarColaboradoresaNotificar.submit();
                
                location.reload();
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxObtenerNotificacionSuccess: function (resultado) {            
            if (resultado.Result.CodigoNotificacion != null) {
                base.Control.BtnResposanble1().prop('disabled', false);
                base.Control.BtnResposanble2().prop('disabled', false);
                base.Control.FormularioModelo = resultado.Result;
                base.Control.SlcDias().val(resultado.Result.DiasCierrePlanAccion).prop('disabled', true);
                base.Control.SlcDiasParaNotificacion().val(resultado.Result.DiasParaEnvioNotificacion);
                //$('#btnGuardarNotificacion').hide();
            }
            else {
                base.Control.FormularioModelo = null;
                base.Control.SlcDias().prop('disabled', false);
                base.Control.BtnResposanble1().prop('disabled', true);
                base.Control.BtnResposanble2().prop('disabled', true);
                $('#btnGuardarNotificacion').show();
            }
        },
        AjaxListarColaboraresResponsablesSuccess: function (resultado) {
            if (resultado.Result != null && resultado.Result.length > 0) {
                var struct = '';
                for (var i = 0; i < resultado.Result.length; i++) {
                    struct += "<tr id=" + resultado.Result[i].CodigoColaborador + "><td> " + parseInt(i + 1) + "</td><td>" + (resultado.Result[i].NombreCompletoColaborador != null ? resultado.Result[i].NombreCompletoColaborador : '') + "</td>";
                    struct += "<td>" + (resultado.Result[i].NombreEmpresa != null ? resultado.Result[i].NombreEmpresa : '') + "</td><td>" + (resultado.Result[i].NombrePuestoTrabajo != null ? resultado.Result[i].NombrePuestoTrabajo : '') + "</td><td>" + (resultado.Result[i].CorreoElectronico != null ? resultado.Result[i].CorreoElectronico : '') + "</td><td class='controls'><span class='control-table btnEliminarResponsable' data-toggle='tooltip' data-placement='top' title='Eliminar'><i class='fa fa-trash'></i></span></td></tr>";
                }
                if (struct != '' && struct.length > 0) {
                    $('#divGrdResponsables tbody').html(struct);
                    $('.btnEliminarResponsable').on('click', base.Event.BtnEliminarResponsable);
                }
                else {
                    $('#divGrdResponsables tbody').html('');
                }
            }
            else {
                $('#divGrdResponsables tbody').html('');
            }
        },
        AjaxListarColaboradoresaNotificarSuccess: function (resultado) {
            if (resultado.Result != null && resultado.Result.length > 0) {
                var struct = '';
                for (var i = 0; i < resultado.Result.length; i++) {
                    struct += "<tr id=" + resultado.Result[i].CodigoColaborador + "><td> " + parseInt(i + 1) + "</td><td>" + (resultado.Result[i].NombreCompletoColaborador != null ? resultado.Result[i].NombreCompletoColaborador : '') + "</td>";
                    struct += "<td>" + (resultado.Result[i].NombreEmpresa != null ? resultado.Result[i].NombreEmpresa : '') + "</td><td>" + (resultado.Result[i].NombrePuestoTrabajo != null ? resultado.Result[i].NombrePuestoTrabajo : '') + "</td><td>" + (resultado.Result[i].CorreoElectronico != null ? resultado.Result[i].CorreoElectronico : '') + "</td><td class='controls'><span class='control-table BtnEliminarResponsable2' data-toggle='tooltip' data-placement='top' title='Eliminar'><i class='fa fa-trash'></i></span></td></tr>";
                }
                if (struct != '' && struct.length > 0) {
                    $('#divGrdPersonasNotificar tbody').html(struct);
                    $('.BtnEliminarResponsable2').on('click', base.Event.BtnEliminarResponsable2);
                }
                else {
                    $('#divGrdPersonasNotificar tbody').html('');
                }
            }
            else {
                $('#divGrdPersonasNotificar tbody').html('');
            }
        }
    };
    base.Ajax = {
        AjaxGrabarNotificacion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Configuraciones.Actions.RegistrarNotificacion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarNotificacionSuccess
        }),
        AjaxAnularNotificacionVisitaGerencial: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Configuraciones.Actions.AnularNotificacionVisitaGerencial,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarNotificacionSuccess
        }),
        AjaxObtenerNotificacion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Configuraciones.Actions.ObtenerNotificacion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxObtenerNotificacionSuccess
        }),
        AjaxListarColaboraresResponsables: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Configuraciones.Actions.ListarColaboraresResponsables,
            autoSubmit: false,
            onSuccess: base.Event.AjaxListarColaboraresResponsablesSuccess
        }),
        AjaxListarColaboradoresaNotificar: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Configuraciones.Actions.ListarColaboradoresaNotificar,
            autoSubmit: false,
            onSuccess: base.Event.AjaxListarColaboradoresaNotificarSuccess
        }),
    };
    base.Function = {};
};