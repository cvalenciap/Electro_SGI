/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 08022017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.SeguimientoAccion');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.SeguimientoAccion.Controller = function () {
    var base = this;
    base.Ini = function () {
        'use strict'
        base.Control.RecordAccionModel = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Models.RecordAccionModel;        
        base.Control.BtnAgregarRecordAnexoApendice().off('click');
        base.Control.BtnAgregarRecordAnexoApendice().on('click', base.Event.BtnAgregarRecordAnexoApendiceClick);

        //base.Control.DlgFormularioVerRecordAccion = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.FormularioVerRecordAccion.Controller({

        //});

        base.Control.DlgFormularioVerRecordAccion = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordAccionGenerico.Controller({

        });

        base.Control.DlgFormularioRegistroSeguimientoAccion = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.FormularioRegistroSeguimientoAccion.Controller({
            GrabarRecordAccionSeguimientoSuccess: base.Event.BtnBuscarRecordAccionClick
        });

        base.Control.DlgFormularioSeguimientoAccion = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.FormularioSeguimientoAccion.Controller({

        });

        base.Control.DlgFormularioRecordAnexoApendice = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.FormularioRecordAnexoAccion.Controller({
            GrabarRecordAnexoAccionSuccess: base.Event.BtnBuscarRecordAnexoApendiceClick
        });

        //Renderizar Ficha General
        var filtro = {
            CodigoRecord: base.Control.RecordAccionModel.RecordAccion.CodigoRecord
        };

        //$('#divRenderFichaGeneral').empty();
        //base.Control.FragmentViewForm.getAjaxContent({
        //    idDivFragmentView: "divRenderFichaGeneral",
        //    action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Actions.SeguimientoAccionFichaGeneral,
        //    onSuccess: function () {
        //    },
        //    data: filtro
        //});

        /*$('#cartTabs').on('shown.bs.tab', function (e) {
            var target = $(e.target).attr("href");
            if (target == "#tabAnexo") {
                base.Event.BtnBuscarRecordAnexoApendiceClick();
            }

            if (target == "#tabFoto") {
                base.Event.BtnBuscarRecordAnexoFotoClick();
            }

            if (target == "#tabPersonaInvolucrada") {
                base.Event.BtnBuscarPersonaInvolucradaClick();
            }
        });*/

        base.Control.BtnRegresarBandejaAccion().off('click');
        base.Control.BtnRegresarBandejaAccion().on('click', base.Event.BtnRegresarBandejaAccionClick);

        //base.Control.BtnVerMas().off('click');
        //base.Control.BtnVerMas().on('click', base.Event.BtnVerMasClick);


        $('#divGrdResultRecordAccion').empty();
        base.Function.CrearGridRecordAccion();
        base.Event.BtnBuscarRecordAccionClick();

        //Inicio - Anexo Foto
        base.Control.BtnAgregarRecordAnexoFoto().off('click');
        base.Control.BtnAgregarRecordAnexoFoto().on('click', base.Event.BtnAgregarRecordAnexoFotoClick);

        base.Control.DlgFormularioRecordAnexoFoto = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.FormularioRecordAnexoFotoAccion.Controller({
            GrabarRecordAnexoFotoSuccess: base.Event.BtnBuscarRecordAnexoFotoClick
        });

        base.Control.DlgFormularioVistaPreviaFoto = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.FormularioVistaPreviaFoto.Controller({

        });
        //Fin - Anexo Foto
        
        //Modal de Ver Mas        
        base.Control.DlgFormularioConsultaRecord = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.FormularioConsultaRecord.Controller({
        });
    };

    base.Control = {
        DlgFormularioVerRecordAccion: null,
        FragmentViewForm: new Pe.GMD.UI.Web.Components.FragmentView(),
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        DlgFormularioRecordAnexoApendice: null,

        BtnRegresarBandejaAccion: function () { return $('#btnRegresarBandejaAccion'); },

        //Persona Involucrada
        GrdResultadoPersonaInvolucrada: null,

        //Record Acción
        GrdResultadoRecordAccion: null,

        //Record Anexo Apéndice
        GrdResultadoRecordAnexoApendice: null,
        BtnAgregarRecordAnexoApendice: function () { return $('#btnAgregarRecordAnexoApendice'); },

        //Record Anexo Foto
        BtnAgregarRecordAnexoFoto: function () { return $('#btnAgregarRecordAnexoFoto'); },
        DlgFormularioRecordAnexoFoto: null,
        GrdResultadoRecordAnexoFoto: null,
        DlgFormularioVistaPreviaFoto: null,

        //Modal de Ver Mas Acción
        DlgFormularioConsultaRecord: null,
      //  BtnVerMas: function () { return $('#btnVerMas'); },
    };    

    base.Event = {
        //Inicio - Persona Involucrada
        BtnBuscarPersonaInvolucradaClick: function () {
            'use strict';
            $('#divGrdResultadoPersonaInvolucrada').empty();
            base.Function.CrearGridPersonaInvolucrada();

            if (base.Control.RecordAccionModel.RecordAccion.CodigoRecord != null) {
                var filtro = {
                    CodigoRecord: base.Control.RecordAccionModel.RecordAccion.CodigoRecord
                };

                base.Control.GrdResultadoPersonaInvolucrada.Load(filtro);
            }
        },
        //Fin - Persona Involucrada

        //Inicio - Record Anexo Apéndice
        BtnBuscarRecordAnexoApendiceClick: function () {
            $('#divGrdResultadoRecordAnexoApendice').empty();
            base.Function.CrearGridRecordAnexoApendice();

            if (base.Control.RecordAccionModel.RecordAccion.CodigoRecord != null) {
                var filtro = {
                    CodigoTipoAnexo: 'ADJ',
                    CodigoRecord: base.Control.RecordAccionModel.RecordAccion.CodigoRecord,
                };

                base.Control.GrdResultadoRecordAnexoApendice.Load(filtro);
            }
        },
        //Fin - Record Anexo Apéndice

        //Inicio - Anexo Foto
        BtnBuscarRecordAnexoFotoClick: function () {
            $('#divGrdResultadoRecordAnexoFoto').empty();
            base.Function.CrearGridRecordAnexoFoto();

            if (base.Control.RecordAccionModel.RecordAccion.CodigoRecord != null) {
                var filtro = {
                    CodigoRecord: base.Control.RecordAccionModel.RecordAccion.CodigoRecord,
                    CodigoTipoAnexo: 'FOT'
                };

                base.Control.GrdResultadoRecordAnexoFoto.Load(filtro);
            }
        },

        BtnAgregarRecordAnexoFotoClick: function () {
            if (base.Control.RecordAccionModel.RecordAccion.CodigoRecord != null) {
                base.Control.DlgFormularioRecordAnexoFoto.Show({
                    CodigoRecordAnexo: null,
                    CodigoRecord: base.Control.RecordAccionModel.RecordAccion.CodigoRecord
                });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValidarTabPrincipal,
                });
            }
        },

        BtnGridVistaPreviaFotoClick: function (row, data) {
            base.Control.DlgFormularioVistaPreviaFoto.Show({
                CodigoRecordAnexo: data.CodigoRecordAnexo,
                CodigoRecord: data.CodigoRecord
            });
        },

        BtnGridEditRecordAnexoFotoClick: function (row, data) {
            'use strict'
            base.Control.DlgFormularioRecordAnexoFoto.Show({                
                CodigoEstadoRecord: base.Control.RecordAccionModel.RecordAccion.CodigoEstadoRecord,
                CodigoRecordAnexo: data.CodigoRecordAnexo,
                CodigoRecord: data.CodigoRecord,
                CodigoArchivoAnexoSharePoint: data.CodigoArchivoAnexoSharePoint
            });
        },

        BtnGridDeleteRecordAnexoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarRecordAnexo.data = {
                        CodigoRecord: data.CodigoRecord,
                        CodigoRecordAnexo: data.CodigoRecordAnexo
                    };

                    base.Ajax.AjaxEliminarRecordAnexo.submit();
                }
            });
        },
        //Fin - Anexo Foto

        BtnRegresarBandejaAccionClick: function () {
            var filtro = {
            };

            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Actions.Index, filtro);
        },

        BtnAgregarRecordAnexoApendiceClick: function () {
            base.Control.DlgFormularioRecordAnexoApendice.Show({
                CodigoRecord: base.Control.RecordAccionModel.RecordAccion.CodigoRecord
            });
        },

        BtnBuscarRecordAccionClick: function () {
            var filtro = {
                CodigoRecord: base.Control.RecordAccionModel.RecordAccion.CodigoRecord,
                CodigoColaboradorResponsable: base.Control.RecordAccionModel.RecordAccion.CodigoColaboradorResponsable
            };

            base.Control.GrdResultadoRecordAccion.Load(filtro);
        },

        BtnGridVerRecordAccionClick: function (row, data) {
            //base.Control.DlgFormularioVerRecordAccion.Show({
            //    CodigoRecordAccion: data.CodigoRecordAccion
            //});
        
            base.Control.DlgFormularioVerRecordAccion.Show({

                TituloFormulario: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaFormularioIngresoAcciones,
                CodigoRecordAccion: data.CodigoRecordAccion,
                NumeroRecord: base.NumeroRecord,
                CodigoEstadoAccion: Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Abierto,
                IndicadorLectura: true,
                CodigoIntegradorTipoRegistro: data.CodigoIntegradorTipoRegistro,
                CodigoTipoRegistroParametro: data.CodigoTipoRecord,
                CodigoTipoOcurrenciaEntidad: data.CodigoTipoOcurrenciaEntidad
            });
        },

        BtnGridDescargarRecordAnexoApendiceClick: function (row, data) {
            'use strict'
            var filtro = {
                CodigoArchivoSharePoint: data.CodigoArchivoAnexoSharePoint
            };

            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Actions.DescargarArchivoRecordAccionSeguimiento, filtro);
        },

        BtnGridEditRecordAnexoApendiceClick: function (row, data) {
            'use strict'
            base.Control.DlgFormularioRecordAnexoApendice.Show({
                CodigoEstadoRecord: base.Control.RecordAccionModel.RecordAccion.CodigoEstadoRecord,
                CodigoRecordAnexo: data.CodigoRecordAnexo,
                CodigoRecord: data.CodigoRecord
            });
        },

        BtnGridRegistrarRecordAccionSeguimientoClick: function (row, data) {
            //'use strict';            
            //base.Control.DlgFormularioRegistroSeguimientoAccion.Show({
            //            CodigoEstadoRecord: base.Control.RecordAccionModel.RecordAccion.CodigoEstadoRecord,
            //            CodigoRecordAccion: data.CodigoRecordAccion,
            //            NumeroAccion: data.NumeroAccion
            //})
            'use strict'
            base.Ajax.AjaxVerificaCierre.data = {
                CodigoRecordAccion: data.CodigoRecordAccion,
                NumeroAccion: data.NumeroAccion,
                CodigoColaboradorResponsableCierre: data.CodigoColaboradorResponsable
            };
            base.Ajax.AjaxVerificaCierre.submit();

        },
        AjaxVerificaCierreSuccess: function (resultado) {
            'use strict'
            if (resultado.IsSuccess) {
                var codigos = resultado.Result.split('/');
                var codigoRecordAccion = codigos[0];
                var codigoNumeroAccion = codigos[1];
               
                base.Control.DlgFormularioRegistroSeguimientoAccion.Show({
                            CodigoEstadoRecord: base.Control.RecordAccionModel.RecordAccion.CodigoEstadoRecord,
                            CodigoRecordAccion: codigoRecordAccion,
                            NumeroAccion: codigoNumeroAccion
                })
            }
            else {
                base.Control.Mensaje.Error({ message: 'Error ya esta cerrau' })//Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
            }
        },        

        BtnGridVerRecordAccionSeguimientoClick: function (row, data) {
            base.Control.DlgFormularioSeguimientoAccion.Show({
                NumeroAccion: data.NumeroAccion,
                CodigoRecordAccion: data.CodigoRecordAccion
            });
        },

        AjaxEliminarRecordAnexoSuccess: function (resultado) {
            'use strict'
            if (resultado.Result >= 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });

                base.Event.BtnBuscarRecordAnexoApendiceClick();
                base.Event.BtnBuscarRecordAnexoFotoClick();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },

        BtnGridVerAccionValidate: function (data, type, full) {
            if (base.Control.RecordAccionModel.RecordAccion.Lectura && base.Control.RecordAccionModel.RecordAccion.Escritura
                && base.Control.RecordAccionModel.RecordAccion.ControlTotal)
                return true;
            else
                return false;
        },

        BtnGridRegistroSeguimientoValidate: function (data, type, full) {
            //if (base.Control.RecordAccionModel.RecordAccion.Lectura == false && base.Control.RecordAccionModel.RecordAccion.Escritura
            //    && base.Control.RecordAccionModel.RecordAccion.ControlTotal)
            //    return true;
            //else
            //    return false;
            return true;
        },

        BtnGridVerSeguimientoValidate: function (data, type, full) {
            if (base.Control.RecordAccionModel.RecordAccion.Lectura && base.Control.RecordAccionModel.RecordAccion.Escritura
                && base.Control.RecordAccionModel.RecordAccion.ControlTotal)
                return true;
            else
                return false;
        },

        BtnGridDeleteValidate: function (data, type, full) {
            if (base.Control.RecordAccionModel.RecordAccion.ControlTotal && base.Control.RecordAccionModel.RecordAccion.CodigoEstadoRecord.toUpperCase() != "CER")
                return true;
            else
                return false;
        },

        //Ventana Modal de Ver Mas 
        BtnVerMasClick: function () {            
            if (base.Control.RecordAccionModel.RecordAccion.IndicadorCreacion == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.DatosConstantes.CodigoModuloSGATE.Record
                && base.Control.RecordAccionModel.RecordAccion.IndicadorCreacion != null)
            {
                base.Control.DlgFormularioConsultaRecord.Show(base.Control.RecordAccionModel.RecordAccion);
            }
            else
            {
                base.Ajax.AjaxObtenerInvestigacionPorCodigoRecord.data = base.Control.RecordAccionModel.RecordAccion;
                base.Ajax.AjaxObtenerInvestigacionPorCodigoRecord.submit();
                //Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Actions.FormularioInvestigacion, {});
            }
        },

        AjaxObtenerInvestigacionPorCodigoRecordSuccess: function (resultado) {
            if (resultado.IsSuccess) {
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Actions.FormularioInvestigacion, resultado.Result[0]);
            }
        }
    };

    base.Ajax = {
        AjaxEliminarRecordAnexo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Actions.EliminarRecordAnexo,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarRecordAnexoSuccess
        }),
        AjaxObtenerInvestigacionPorCodigoRecord: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Actions.ObtenerInvestigacionPorCodigoRecord,
            autoSubmit: false,
            onSuccess: base.Event.AjaxObtenerInvestigacionPorCodigoRecordSuccess
        }),
        AjaxVerificaCierre: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Actions.VerificaRegistroCerrado,
            autoSubmit: false,
            onSuccess: base.Event.AjaxVerificaCierreSuccess
        }),
    };

    base.Function = {
        CrearGridPersonaInvolucrada: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroDocumento',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.GridNumeroDocumento,
                width: "5%"
            });

            columns.push({
                data: 'NombreColaboradorInvolucrado',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.GridNombreColaboradorInvolucrado,
                width: "10%",
                'class': 'left'
            });

            columns.push({
                data: 'DescripcionRegimen',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.GridRegimen,
                width: "10%"
            });

            base.Control.GrdResultadoPersonaInvolucrada = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoPersonaInvolucrada',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Actions.BuscarPersonaInvolucrada,
                    source: 'Result'
                }
            });
        },

        CrearGridRecordAccion: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.GridAccionNumero,
                width: "15%"
            });

            columns.push({
                data: 'NombreColaboradorPlanteaAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.GridPlanteadaPor,
                width: "20%"
            });

            columns.push({
                data: 'FechaAccionPlanteadaString',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.GridPlanteadoEn,
                width: "10%"
            });

            columns.push({
                data: 'DescripcionCorta',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.GridDescripcionCorta,
                width: "20%"
            });

            columns.push({
                data: 'FechaVencimientoString',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.GridVencimiento,
                width: "10%"
            });

            columns.push({
                data: 'DescripcionPrioridad',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.GridPrioridad,
                width: "10%"
            });

            columns.push({
                data: 'NombreColaboradorResponsable',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.GridResponsable,
                width: "20%"
            });

            columns.push({
                data: 'DescripcionEstadoAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.GridEstado,
                width: "10%"
            });

            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.VerAccion, /*validateRender: base.Event.BtnGridVerAccionValidate,*/ event: { on: 'click', callBack: base.Event.BtnGridVerRecordAccionClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.RegistroSeguimiento, /*validateRender: base.Event.BtnGridRegistroSeguimientoValidate, */event: { on: 'click', callBack: base.Event.BtnGridRegistrarRecordAccionSeguimientoClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.VerSeguimiento,/* validateRender: base.Event.BtnGridVerSeguimientoValidate,*/ event: { on: 'click', callBack: base.Event.BtnGridVerRecordAccionSeguimientoClick } }
                ]
            });

            base.Control.GrdResultadoRecordAccion = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultRecordAccion',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Actions.BuscarRecordAccion,
                    source: 'Result'
                }
            });
        },

        CrearGridRecordAnexoApendice: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.GridItem,
                width: "5%"
            });

            columns.push({
                data: 'DescripcionTipoApendice',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.GridTipoApendice,
                width: "20%"
            });

            columns.push({
                data: 'Nombre',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.GridNombreApendice,
                width: "30%"
            });

            columns.push({
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.GridDescripcionApendice,
                width: "30%"
            });

            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.GridDescargar,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Adjunto, event: { on: 'click', callBack: base.Event.BtnGridDescargarRecordAnexoApendiceClick } }
                ]
            });

            columns.push({
                "data": "",
                "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditRecordAnexoApendiceClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.BtnGridDeleteValidate, event: { on: 'click', callBack: base.Event.BtnGridDeleteRecordAnexoApendiceClick } }
                ]
            });

            base.Control.GrdResultadoRecordAnexoApendice = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoRecordAnexoApendice',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Actions.BuscarRecordAnexo,
                    source: 'Result'
                }
            });
        },

        CrearGridRecordAnexoFoto: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.GridItem,
                width: "5%"
            });

            columns.push({
                data: 'Nombre',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.GridNombreFoto,
                width: "30%"
            });

            columns.push({
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.GridDescripcionFoto,
                width: "30%"
            });

            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.GridVistaPreviaFoto,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.VistaPrevia, event: { on: 'click', callBack: base.Event.BtnGridVistaPreviaFotoClick } }
                ]
            });

            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditRecordAnexoFotoClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.BtnGridDeleteValidate, event: { on: 'click', callBack: base.Event.BtnGridDeleteRecordAnexoClick } }
                ]
            });

            base.Control.GrdResultadoRecordAnexoFoto = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoRecordAnexoFoto',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Actions.BuscarRecordAnexo,
                    source: 'Result'
                }
            });
        },
    };
};
