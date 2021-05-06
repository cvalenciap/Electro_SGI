/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 08062017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarRegistroClase');
Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarRegistroClase.Controller = function () {
    var base = this;

    base.Ini = function () {        
        base.Control.FormularioModelo = Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.Models.FormularioAgregarRegistroClase;
        base.Function.CrearGridEjecucion();
        base.Event.BtnBuscarClick();

        base.Control.BtnAgregarRegistroClase().off('click');
        base.Control.BtnAgregarRegistroClase().on('click', base.Event.BtnAgregarRegistroClaseClick);

        base.Control.DlgFormularioRegistroCapacitacion = new Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioRegistroCapacitacion.Controller({
            AceptarSuccess: base.Event.BtnBuscarClick
        });

        base.Control.BtnRegresarEjecucion().off('click');
        base.Control.BtnRegresarEjecucion().on('click', base.Event.BtnRegresarEjecucionClick);
    };

    base.Control = {
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        FormularioModelo: null,
        BtnAgregarRegistroClase: function () { return $('#btnAgregarRegistroClase'); },
        DlgFormularioRegistroCapacitacion: null,
        BtnRegresarEjecucion: function () { return $('#btnRegresarEjecucion'); },
        TxtTotalHorasDictadas: function () { return $('#txtTotalHorasDictadas'); },
    };

    base.Event = {
        BtnRegresarEjecucionClick: function () {
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarRegistroClase.Actions.BandejaEjecucion, {});
        },
        BtnBuscarClick: function () {
            base.Control.GrdResultadoEjecucion.Load({
                CodigoEjecucion: base.Control.FormularioModelo.Registro.CodigoEjecucion
            });
        },
        BtnAgregarRegistroClaseClick: function () {            
            base.Control.DlgFormularioRegistroCapacitacion.Show({
                CodigoEjecucion: base.Control.FormularioModelo.Registro.CodigoEjecucion,
                CodigoInstructor: base.Control.FormularioModelo.Registro.CodigoInstructor,
            });
        },
        BtnGridEditEjecucionRegistroClaseClick: function (row, data) {            
            base.Control.DlgFormularioRegistroCapacitacion.Show(data);
        },
        BtnGridDeleteEjecucionRegistroClaseClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {                    
                    data.CodigoProyecto = base.Control.FormularioModelo.Registro.CodigoProyecto;
                    data.CodigoEquipo = base.Control.FormularioModelo.Registro.CodigoEquipo;
                    data.CodigoProceso = base.Control.FormularioModelo.Registro.CodigoProceso;
                    data.CodigoSubProceso = base.Control.FormularioModelo.Registro.CodigoSubProceso;
                    base.Ajax.AjaxEliminarEjecucionRegistroClase.data = data;
                    base.Ajax.AjaxEliminarEjecucionRegistroClase.submit();
                }
            });
        },
        BtnGridAsignarParticipantesClick: function (row, data) {
            'use strict'            
            data.CodigoProyecto = base.Control.FormularioModelo.Registro.CodigoProyecto;
            data.CodigoEquipo = base.Control.FormularioModelo.Registro.CodigoEquipo;
            data.CodigoProceso = base.Control.FormularioModelo.Registro.CodigoProceso;
            data.CodigoSubProceso = base.Control.FormularioModelo.Registro.CodigoSubProceso;
            data.DescripionFamiliaEquipo = base.Control.FormularioModelo.Registro.DescripionFamiliaEquipo;
            data.DescripcionModeloEquipo = base.Control.FormularioModelo.Registro.DescripcionModeloEquipo;
            data.DescripcionEquipo = base.Control.FormularioModelo.Registro.DescripcionEquipo;
            data.NombreProyecto = base.Control.FormularioModelo.Registro.NombreProyecto;
            data.NombreActividad = base.Control.FormularioModelo.Registro.NombreActividad;
            data.IdentificadorProceso = base.Control.FormularioModelo.Registro.IdentificadorProceso;
            data.HorasEstimadas = base.Control.FormularioModelo.Registro.HorasEstimadas;
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarRegistroClase.Actions.FormularioAgregarParticipante, data);
        },
        AjaxEliminarEjecucionRegistroClaseSuccess: function (resultado) {
            if (resultado.Result >= 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito
                });
                base.Event.BtnBuscarClick();
            }
            else {
                base.Control.Mensaje.Warning({
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        BtnGridAdjuntoClick: function (row, data) {
            'use strict'
            if (data.CodigoArchivoAnexoSharepoint == null || data.CodigoArchivoAnexoSharepoint == '') {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarRegistroClase.Resource.EtiquetaMensajeCodigoArchivoSharepoint });
                return;
            }
            var filtro = {
                CodigoArchivoAnexoSharePoint: data.CodigoArchivoAnexoSharepoint,
                Nombre: data.NombreArchivo
            };
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarRegistroClase.Actions.DescargarArchivoApendice, filtro);
        }
    };

    base.Ajax = {
        AjaxBuscarEjecucionRegistroClase: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarRegistroClase.Actions.BuscarEjecucionRegistroClase,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarEjecucionRegistroClaseSuccess
        }),
        AjaxEliminarEjecucionRegistroClase: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarRegistroClase.Actions.EliminarEjecucionRegistroClase,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarEjecucionRegistroClaseSuccess
        }),
    };
    base.Function = {
        CrearGridEjecucion: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarRegistroClase.Resource.GridCorrelativo,
                width: "5%"
            });
            columns.push({
                data: 'NombreCompletoInstructor',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarRegistroClase.Resource.GridInstructor,
                width: "20%"
            });
            columns.push({
                data: 'FechaInicioString',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarRegistroClase.Resource.GridFechaInicio,
                width: "15%"
            });
            columns.push({
                data: 'FechaFinalString',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarRegistroClase.Resource.GridFechaFin,
                width: "15%"
            });
            columns.push({
                data: 'DuracionClase',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarRegistroClase.Resource.GridDuracion,
                width: "10%",
            });
            columns.push({
                data: 'CantidadParticipantes',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarRegistroClase.Resource.GridCantParticipante,
                width: "15%",
                mRender: function (data, type, full) {
                    return '' + (full.CantidadParticipantes != null ? full.CantidadParticipantes : '0') + '';
                }
            });
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "5%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.AsignarSuplente, event: { on: 'click', callBack: base.Event.BtnGridAsignarParticipantesClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Adjunto, event: { on: 'click', callBack: base.Event.BtnGridAdjuntoClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditEjecucionRegistroClaseClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteEjecucionRegistroClaseClick } }
                ]
            });
            base.Control.GrdResultadoEjecucion = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoFechas',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Registro.FormularioAgregarRegistroClase.Actions.BuscarEjecucionRegistroClase,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                    var contadorMinutosTotales = 0;
                    
                    if (records.length > 0) {
                        for(var i = 0; i < records.length; i++){
                            if (records[i].FilasTotal != '' && records[i].FilasTotal != null && records[i].FilasTotal != undefined &&
                                records[i].MinutosTotales != '' && records[i].MinutosTotales != null && records[i].MinutosTotales != undefined) {
                                contadorMinutosTotales += records[i].MinutosTotales;
                                }
                        }
                    }
                    else {
                        base.Control.TxtTotalHorasDictadas().val('');
                    }

                    if (contadorMinutosTotales > 0) {
                        var resultadoHH = parseInt(contadorMinutosTotales/60);
                        var resultadoMM = contadorMinutosTotales % 60;
                        
                        if (resultadoHH < 10) {
                            resultadoHH = '0' + resultadoHH;
                        }
                        if (resultadoMM < 10) {
                            resultadoMM = '0' + resultadoMM;
                        }
                        base.Control.TxtTotalHorasDictadas().val(resultadoHH + ':' + resultadoMM);
                    } else {
                        base.Control.TxtTotalHorasDictadas().val('');
                    }
                }
            });
        }
    };
};