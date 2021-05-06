/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 08062017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarParticipante');
Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarParticipante.Controller = function () {
    var base = this;

    base.Ini = function () {        
        base.Control.FormularioEjecucionParticipante = Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.Models.AgregarParticipante
        base.Function.CrearGridEjecucion();
        base.Event.CrearGridEjecucionClick();
        base.Control.BtnRegresarEjecucion().on('click', base.Event.BtnRegresarEjecucionClick);
        base.Control.BtnAgregarParticipante().on('click', base.Event.BtnAgregarParticipanteClick);
        base.Control.DlgFormularioRegistroNotas = new Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioRegistroNotas.Controller({
            AceptarSuccess: base.Event.BtnBuscarClick
        });
        base.Control.DlgFormularioParticipante = new Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioAgregarPersonasModal.Controller({
            GrabarColaboradorPersonaProyectoSuccess: base.Event.AsignarValoresColaboradorClick
        });
    };
    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        DlgFormularioParticipante: null,
        FormularioEjecucionParticipante: null,
        GrdResultadoEjecucion: null,
        TxtCodigoParticipante: function () { return $('#txtCodigoParticipante'); },
        TxtDescripcionParticipante: function () { return $('#txtDescripcionParticipante'); },
        HdnCodigoParticipante: function () { return $('#hdnCodigoParticipante'); },
        HdnTipoVista: function () { return $('#hdnTipoVista'); },
        DlgFormularioRegistroNotas: null,
               
        BtnRegresarEjecucion: function () { return $('#btnRegresarEjecucion'); },
        BtnAgregarParticipante: function () { return $('#btnAgregarParticipante'); },
        HdnCodigoProyecto: function () { return $('#hdnCodigoProyecto'); },
        HdnCodigoEjecucion: function () { return $('#hdnCodigoEjecucion'); },
        HdnCodigoEjecucionRegistroClase: function () { return $('#hdnCodigoEjecucionRegistroClase'); },
        CodigoAsignacionPersonaProyectoIndividual:null
        
    };
    base.Event = {        
        LimpiarTxtDescripcionParticipanteKeyup: function ()
        {
            base.Control.TxtDescripcionParticipante().val('');
            base.Control.CodigoAsignacionPersonaProyectoIndividual = null;
        },
        TxtSoloNumerosKeypress: function (event) {
            var regex = /[0-9]/;
            var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
            if (!regex.test(key)) {
                event.preventDefault();
                return false;
            }
        },
        AsignarValoresColaboradorClick: function (objColaborador) {
            'use strict'
            if (objColaborador != null && objColaborador.length > 0) {                
                var arraySeleccionados = [];
                $.each(objColaborador, function (index, value) {                    
                    arraySeleccionados.push(
                        {
                            FechaInicioString: base.Control.FormularioEjecucionParticipante.Registro.FechaInicioString,
                            FechaFinalString: base.Control.FormularioEjecucionParticipante.Registro.FechaFinalString,
                            CodigoEjecucion: base.Control.HdnCodigoEjecucion().val(),
                            CodigoEjecucionRegistroClase: base.Control.HdnCodigoEjecucionRegistroClase().val(),
                            CodigoAsignacionPersonaSubProceso: value.CodigoAsignacionPersonaSubProceso,
                            CodigoAsignacionPersonaProyecto: value.CodigoAsignacionPersonaProyecto
                        }
                    );
                });
                base.Ajax.AjaxRegistrarEjecucionParticipante.data = arraySeleccionados;
                base.Ajax.AjaxRegistrarEjecucionParticipante.submit();
            }
        },
        BtnAgregarParticipanteClick: function () {
            'use strict'            
            var filtro = {
                CodigoProyecto: base.Control.HdnCodigoProyecto().val(),
                CodigoEquipo: base.Control.FormularioEjecucionParticipante.Registro.CodigoEquipo,
                CodigoProceso: base.Control.FormularioEjecucionParticipante.Registro.CodigoProceso,
                CodigoSubProceso: base.Control.FormularioEjecucionParticipante.Registro.CodigoSubProceso,
            }
            base.Control.DlgFormularioParticipante.Show(true, [], filtro, true);
        },
        BtnAgregarRegistroNotasClick: function (row, data) {            
            var r = parseInt(data.HorasCapacitadas / 60);
            if ((data.HorasPlanificadas - parseInt(data.HorasCapacitadas / 60)) == 0) {
                base.Control.DlgFormularioRegistroNotas.Show({
                    //CodigoParticipante: data.CodigoEjecucionParticipante,
                    CodigoParticipante: data.CodigoColaborador,
                    CodigoAsignacionPersonaProyecto: data.CodigoAsignacionPersonaProyecto,
                    CodigoProceso: data.CodigoProceso,
                    CodigoEquipo: data.CodigoEquipo,
                    CodigoEjecucion: base.Control.FormularioEjecucionParticipante.Registro.CodigoEjecucion,
                    CodigoInstructor: base.Control.FormularioEjecucionParticipante.Registro.CodigoInstructor
                });
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarParticipante.Resource.EtiquetaMensajeHorasRestantes });
                return;
            }
        },
        CrearGridEjecucionClick: function () {
            'use strict'            
            base.Control.GrdResultadoEjecucion.Load({
                CodigoProyecto: base.Control.HdnCodigoProyecto().val(),
                CodigoEquipo: base.Control.FormularioEjecucionParticipante.Registro.CodigoEquipo,
                CodigoProceso: base.Control.FormularioEjecucionParticipante.Registro.CodigoProceso,
                CodigoSubProceso: base.Control.FormularioEjecucionParticipante.Registro.CodigoSubProceso,
                CodigoEjecucionRegistroClase: base.Control.FormularioEjecucionParticipante.Registro.CodigoEjecucionRegistroClase
            });
        },
        BtnRegresarEjecucionClick: function () {
            'use strict'
            window.history.go(-1);
        },        
        BtnGridDeleteParticipanteClick: function (row, data) {
            base.Control.Mensaje.Delete({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                onAccept: function () {
                    data.FechaInicioString = base.Control.FormularioEjecucionParticipante.Registro.FechaInicioString;
                    data.FechaFinalString = base.Control.FormularioEjecucionParticipante.Registro.FechaFinalString;
                    base.Ajax.AjaxEliminarEjecucionParticipante.data = data;
                    base.Ajax.AjaxEliminarEjecucionParticipante.submit();
                }
            });
        },
        BtnGridAdjuntoClick: function (row, data) {
            'use strict'
            base.Ajax.AjaxBuscarArchivoParticipante.data = {
                CodigoEjecucionRegistroCurso: data.CodigoEjecucionRegistroCurso,
                CodigoParticipante: data.CodigoColaborador
            };
            base.Ajax.AjaxBuscarArchivoParticipante.submit();
        },

        AjaxEliminarEjecucionParticipanteSuccess: function (resultado)
        {           
            if (resultado.Result == 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
                base.Event.CrearGridEjecucionClick();
            }
            else {
                base.Control.Mensaje.Warning({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });          
            }            
        },
        AjaxArchivoParticipanteSuccess: function (resultado) {
            if (resultado.Result.length > 0) {
                var filtro = {
                    CodigoArchivoAnexoSharePoint: resultado.Result[0].CodigoArchivoAnexoSharepoint,
                    Nombre: resultado.Result[0].NombreArchivo
                };
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.Actions.DescargarArchivoApendice, filtro);
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarParticipante.Resource.EtiquetaMensajeCodigoArchivoSharepoint });
                return;
            }
        },
        AjaxRegistrarEjecucionParticipanteSuccess: function (resultado)
        {            
            if (resultado.Result.CantidadParticipanteSelect == 1) {
                if (resultado.Result.CantidadParticipanteSelect == resultado.Result.CantidadParticipanteCargadas ) {
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                    });
                    base.Event.CrearGridEjecucionClick();
                }
                else if (resultado.Result.CantidadParticipanteSelect != resultado.Result.CantidadParticipanteCargadas) {
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: 'Se encontró ' + resultado.Result.CantidadParticipantesNoCargadas + ' participante registrado.'
                    });
                    base.Event.CrearGridEjecucionClick();
                }
                else {
                    base.Control.Mensaje.Warning({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                    });
                }
            }
            else if (resultado.Result.CantidadParticipanteSelect > 1)
            {
                if (resultado.Result.CantidadParticipanteSelect == resultado.Result.CantidadParticipanteCargadas ) {
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                    });
                    base.Event.CrearGridEjecucionClick();
                }
                else if (resultado.Result.CantidadParticipanteSelect != resultado.Result.CantidadParticipanteCargadas) {
                    if (resultado.Result.CantidadParticipanteSelect == resultado.Result.CantidadParticipantesNoCargadas) {
                        base.Control.Mensaje.Information({
                            title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                            message: 'Se encontró ' + resultado.Result.CantidadParticipantesNoCargadas + ' participantes registrados.'
                        });
                    }
                    else {
                        base.Control.Mensaje.Information({
                            title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                            message: 'Se cargo con éxito, ' + resultado.Result.CantidadParticipanteCargadas + ' participantes y ' + resultado.Result.CantidadParticipantesNoCargadas + ' ya existian registrados.'
                        });
                    }
                    base.Event.CrearGridEjecucionClick();
                }
                else {
                    base.Control.Mensaje.Warning({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                    });
                }
            }
        }
    };
    base.Ajax = {        
        AjaxRegistrarEjecucionParticipante: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.Actions.RegistrarEjecucionParticipante,
            autoSubmit: false,
            onSuccess: base.Event.AjaxRegistrarEjecucionParticipanteSuccess
        }),
        AjaxEliminarEjecucionParticipante: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.Actions.EliminarEjecucionParticipante,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarEjecucionParticipanteSuccess
        }),
        AjaxBuscarArchivoParticipante: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.Actions.BuscarArchivoParticipante,
            autoSubmit: false,
            onSuccess: base.Event.AjaxArchivoParticipanteSuccess
        }),
    };
    base.Function = {
        CrearGridEjecucion: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarParticipante.Resource.GridCorrelativo,
                width: "5%"
            });
            columns.push({
                data: 'NumeroDocumento',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarParticipante.Resource.GridDocumento,
                width: "10%"
            });
            columns.push({
                data: 'NombreCompletoColaborador',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarParticipante.Resource.GridApellidosyNombres,
                width: "10%"
            });
            columns.push({
                data: 'NombrePuestoTrabajo',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarParticipante.Resource.GridPuestoCargo,
                width: "10%"
            });
            columns.push({
                data: 'HorasPlanificadas',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarParticipante.Resource.GridHorasEstimadas,
                width: "10%"
            });
            columns.push({
                data: 'HorasCapacitadasString',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarParticipante.Resource.GridHorasCapacitadas,
                width: "10%"
            });
            columns.push({
                data: '',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarParticipante.Resource.GridHorasRestantes,
                width: "10%",
                mRender: function (data, type, full) {                    
                    var horasEstimadas = full.HorasPlanificadas * 60;
                    var horasCapacitadas = 0;                    
                    if (full.HorasCapacitadasString != null && full.HorasCapacitadasString != '' && full.HorasCapacitadasString != undefined) {
                        var array = full.HorasCapacitadasString.split(':');
                        horasCapacitadas = array[0] * 60 + parseInt(array[1]);
                    }

                    var resultado = horasEstimadas - horasCapacitadas;
                    if (resultado > 0) {
                        var HH = Math.floor(resultado / 60);
                        var MM = Math.floor(resultado % 60);

                        if (HH < 10) {
                            HH = "0" + HH.toString();
                        }
                        if (MM < 10) {
                            MM = "0" + MM.toString();
                        }
                        return HH + ":" + MM;
                    }
                    else {
                        return "00:00";
                    }
                }
            });
            if (base.Control.HdnTipoVista().val() == Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioAgregarParticipante.DatosConstantes.VisualizacionCurso) {
                columns.push({
                    "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                    "class": "controls",
                    width: "5%",
                    actionButtons: [
                        { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnAgregarRegistroNotasClick } },
                        { type: Pe.GMD.UI.Web.Components.GridAction.Adjunto, event: { on: 'click', callBack: base.Event.BtnGridAdjuntoClick } }
                    ]
                });
            }
            else {
                columns.push({
                    "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                    "class": "controls",
                    width: "5%",
                    actionButtons: [
                        { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteParticipanteClick } }
                    ]
                });
            }
            base.Control.GrdResultadoEjecucion = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoParticipantes',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.Actions.BuscarEjecucionsParticipantes,
                    source: 'Result'
                }
            });
        }
    };
};