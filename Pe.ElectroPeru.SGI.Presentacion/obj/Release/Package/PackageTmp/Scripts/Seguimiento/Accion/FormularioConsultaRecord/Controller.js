ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.FormularioConsultaRecord');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.FormularioConsultaRecord.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Control.RecordAccionModel = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Models.RecordAccionModel;
        base.Control.BtnAgregarRecordAnexoApendice().off('click');
        base.Control.BtnAgregarRecordAnexoApendice().on('click', base.Event.BtnAgregarRecordAnexoApendiceClick);

        base.Control.DlgFormularioVerRecordAccion = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.FormularioVerRecordAccion.Controller({

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

        $('#divRenderFichaGeneral').empty();
        base.Control.FragmentViewForm.getAjaxContent({
            idDivFragmentView: "divRenderFichaGeneral",
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Actions.SeguimientoAccionFichaGeneral,
            onSuccess: function () {
            },
            data: filtro
        });
             
        
        $('#lnkTabPersonaInvolucrada').click(function () {
            base.Event.BtnBuscarPersonaInvolucradaClick();
        });

        $('#lnkTabAnexo').click(function () {
            base.Event.BtnBuscarRecordAnexoApendiceClick();
        });

        $('#lnkTabFoto').click(function () {
            base.Event.BtnBuscarRecordAnexoFotoClick();
        });
        //$('#cartTabs').on('shown.bs.tab', function (e) {            
        //    var target = $(e.target).attr("href");
        //    if (target == "#tabAnexo") {
        //        base.Event.BtnBuscarRecordAnexoApendiceClick();
        //    }

        //    if (target == "#tabFoto") {
        //        base.Event.BtnBuscarRecordAnexoFotoClick();
        //    }

        //    if (target == "#tabPersonaInvolucrada") {
        //        base.Event.BtnBuscarPersonaInvolucradaClick();
        //    }
        //});

        base.Control.BtnRegresarBandejaAccion().off('click');
        base.Control.BtnRegresarBandejaAccion().on('click', base.Event.BtnRegresarBandejaAccionClick);

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
        
        $(window).resize(function () {            
            $('.main-content').css("height", "auto !important");
        });
        $(window).trigger('resize');
    };

    base.Show = function (opts) {        
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Resource.EtiquetaTituloFormularioConsultaRegistro,
            size: "size-xlarge",
            close: function () {
            }
        });

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Actions.FormularioConsultaRecord,
            onSuccess: function () {
                base.Ini();
            },
            data: {
                CodigoRecord: opts.CodigoRecord,
                CodigoColaboradorResponsable: opts.CodigoColaboradorResponsable,
                DescripcionTipoRecord: opts.DescripcionTipoRecord,
                NumeroRecord: opts.NumeroRecord
            }
        });
    };

    base.Control = {
        DlgFormularioVerRecordAccion: null,
        FragmentViewForm: new Pe.GMD.UI.Web.Components.FragmentView(),
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        DlgFormularioRecordAnexoApendice: null,

        BtnRegresarBandejaAccion: function () { return $('#btnRegresarBandejaAccionModal'); },

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
    };

    base.Event = {
        //Inicio - Persona Involucrada
        BtnBuscarPersonaInvolucradaClick: function () {
            'use strict';
            $('#divGrdResultadoPersonaInvolucrada').empty();
            base.Function.CrearGridPersonaInvolucrada();

            if (base.Control.RecordAccionModel.RecordAccion != null && base.Control.RecordAccionModel.RecordAccion.CodigoRecord != null) {
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

            if (base.Control.RecordAccionModel.RecordAccion != null && base.Control.RecordAccionModel.RecordAccion.CodigoRecord != null) {
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

            if (base.Control.RecordAccionModel.RecordAccion != null && base.Control.RecordAccionModel.RecordAccion.CodigoRecord != null) {
                var filtro = {
                    CodigoRecord: base.Control.RecordAccionModel.RecordAccion.CodigoRecord,
                    CodigoTipoAnexo: 'FOT'
                };

                base.Control.GrdResultadoRecordAnexoFoto.Load(filtro);
            }
        },

        BtnAgregarRecordAnexoFotoClick: function () {
            if (base.Control.RecordAccionModel.RecordAccion != null && base.Control.RecordAccionModel.RecordAccion.CodigoRecord != null) {
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

        BtnGridVerRecordAccionClick: function (row, data) {
            base.Control.DlgFormularioVerRecordAccion.Show({
                CodigoRecordAccion: data.CodigoRecordAccion
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
            'use strict';
            base.Control.DlgFormularioRegistroSeguimientoAccion.Show({
                CodigoEstadoRecord: base.Control.RecordAccionModel.RecordAccion.CodigoEstadoRecord,
                CodigoRecordAccion: data.CodigoRecordAccion,
                NumeroAccion: data.NumeroAccion
            });
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
            if (base.Control.RecordAccionModel.RecordAccion != null && base.Control.RecordAccionModel.RecordAccion.Lectura && base.Control.RecordAccionModel.RecordAccion.Escritura
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
            if (base.Control.RecordAccionModel.RecordAccion != null && base.Control.RecordAccionModel.RecordAccion.ControlTotal && base.Control.RecordAccionModel.RecordAccion.CodigoEstadoRecord != null && base.Control.RecordAccionModel.RecordAccion.CodigoEstadoRecord.toUpperCase() != "CER")
                return true;
            else
                return false;
        },

        //Ventana Modal de Ver Mas 
        BtnVerMasClick: function () {

            base.Control.DlgFormularioConsultaRecord.Show(base.Control.RecordAccionModel.RecordAccion);
        }
    };

    base.Ajax = {
        AjaxEliminarRecordAnexo: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.Actions.EliminarRecordAnexo,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarRecordAnexoSuccess
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
                data: 'DescripcionTipoPlanilla',
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