/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 29052016
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Index');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Index.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Control.FormularioModelo = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Index.Models.FormularioInvestigacion;
        base.Control.BtnBuscar().off('click');
        base.Control.BtnBuscar().on('click', base.Event.BtnBuscarInvestigacionPorElaborarClick);

        base.Control.BtnBuscarISegundo().off('click');
        base.Control.BtnBuscarISegundo().on('click', base.Event.BtnBuscarInvestigacionPorRevisarClick);

        base.Control.BtnBuscarITercero().off('click');
        base.Control.BtnBuscarITercero().on('click', base.Event.BtnBuscarInvestigacionPorAprobarClick);

        base.Control.BtnBuscarICuarto().off('click');
        base.Control.BtnBuscarICuarto().on('click', base.Event.BtnBuscarInvestigacionAprobadosClick);

        base.Control.BtnBuscarIQuinto().off('click');
        base.Control.BtnBuscarIQuinto().on('click', base.Event.BtnBuscarInvestigacionAprobacionesExtraordinariasClick);

        base.Control.BtnLimpiar().off('click');
        base.Control.BtnLimpiar().on('click', base.Event.BtnLimpiarClick);

        base.Control.BtnLimpiarISegundo().off('click');
        base.Control.BtnLimpiarISegundo().on('click', base.Event.BtnLimpiarISegundoClick);

        base.Control.BtnLimpiarITercero().off('click');
        base.Control.BtnLimpiarITercero().on('click', base.Event.BtnLimpiarITerceroClick);

        base.Control.BtnLimpiarICuarto().off('click');
        base.Control.BtnLimpiarICuarto().on('click', base.Event.BtnLimpiarICuartoClick);

        base.Control.BtnLimpiarIQuinto().off('click');
        base.Control.BtnLimpiarIQuinto().on('click', base.Event.BtnLimpiarIQuintoClick);

        base.Control.BtnBandejaInvestigacion().off('click');
        base.Control.BtnBandejaInvestigacion().on('click', base.Event.BtnBandejaInvestigacionClick);
        base.Control.BtnBandejaInformes().off('click');
        base.Control.BtnBandejaInformes().on('click', base.Event.BtnBandejaInformesClick);
        base.Control.DlgFormularioHistorialCambios = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioHistorialCambios.Controller({
        });

        base.Control.btnDescargarExcel().on('click', base.Event.btnDescargarExcelClick);

        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaRecordDesde(),
            inputTo: base.Control.DtpFechaRecordHasta(),
            minDateFrom: new Date(1900, 1, 1)
        });

        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaRecordDesdeISegundo(),
            inputTo: base.Control.DtpFechaRecordHastaISegundo(),
            minDateFrom: new Date(1900, 1, 1)
        });

        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaRecordDesdeITercero(),
            inputTo: base.Control.DtpFechaRecordHastaITercero(),
            minDateFrom: new Date(1900, 1, 1)
        });

        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaRecordDesdeICuarto(),
            inputTo: base.Control.DtpFechaRecordHastaICuarto(),
            minDateFrom: new Date(1900, 1, 1)
        });

        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaRecordDesdeIQuinto(),
            inputTo: base.Control.DtpFechaRecordHastaIQuinto(),
            minDateFrom: new Date(1900, 1, 1)
        });

        if (base.Control.FormularioModelo.TipoBandeja == 1) {
            base.Function.CrearGridInvestigacionPorElaborar();
            base.Event.BtnBuscarInvestigacionPorElaborarClick();
        }
        else if (base.Control.FormularioModelo.TipoBandeja == 2) {
            base.Function.CrearGridInvestigacionPorRevisar();
            base.Event.BtnBuscarInvestigacionPorRevisarClick();
        }
        else if (base.Control.FormularioModelo.TipoBandeja == 3) {
            base.Function.CrearGridInvestigacionPorAprobar();
            base.Event.BtnBuscarInvestigacionPorAprobarClick();
        }
        else if (base.Control.FormularioModelo.TipoBandeja == 4) {
            base.Function.CrearGridInvestigacionAprobados();
            base.Event.BtnBuscarInvestigacionAprobadosClick();
        }
        else if (base.Control.FormularioModelo.TipoBandeja == 5) {
            base.Function.CrearGridInvestigacionAprobacionesExtraordinarias();
            base.Event.BtnBuscarInvestigacionAprobacionesExtraordinariasClick();
        }
    };

    base.Control = {
        DlgFormularioHistorialCambios: null,
        InvestigacionModel: null,
        FormularioModelo: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),

        SlcProyecto: function () { return $('#slcProyecto'); },
        SlcProyectoISegundo: function () { return $('#slcProyectoISegundo'); },
        SlcProyectoITercero: function () { return $('#slcProyectoITercero'); },
        SlcProyectoICuarto: function () { return $('#slcProyectoICuarto'); },
        SlcProyectoIQuinto: function () { return $('#slcProyectoIQuinto'); },

        DtpFechaRecordDesde: function () { return $('#dtpFechaRecordDesde'); },
        DtpFechaRecordHasta: function () { return $('#dtpFechaRecordHasta'); },

        DtpFechaRecordDesdeISegundo: function () { return $('#dtpFechaRecordDesdeISegundo'); },
        DtpFechaRecordHastaISegundo: function () { return $('#dtpFechaRecordHastaISegundo'); },

        DtpFechaRecordDesdeITercero: function () { return $('#dtpFechaRecordDesdeITercero'); },
        DtpFechaRecordHastaITercero: function () { return $('#dtpFechaRecordHastaITercero'); },

        DtpFechaRecordDesdeICuarto: function () { return $('#dtpFechaRecordDesdeICuarto'); },
        DtpFechaRecordHastaICuarto: function () { return $('#dtpFechaRecordHastaICuarto'); },

        DtpFechaRecordDesdeIQuinto: function () { return $('#dtpFechaRecordDesdeIQuinto'); },
        DtpFechaRecordHastaIQuinto: function () { return $('#dtpFechaRecordHastaIQuinto'); },

        BtnBuscar: function () { return $('#btnBuscar'); },
        BtnBuscarISegundo: function () { return $('#btnBuscarISegundo'); },
        BtnBuscarITercero: function () { return $('#btnBuscarITercero'); },
        BtnBuscarICuarto: function () { return $('#btnBuscarICuarto'); },
        BtnBuscarIQuinto: function () { return $('#btnBuscarIQuinto'); },

        BtnLimpiar: function () { return $('#btnLimpiar'); },
        BtnLimpiarISegundo: function () { return $('#btnLimpiarISegundo'); },
        BtnLimpiarITercero: function () { return $('#btnLimpiarITercero'); },
        BtnLimpiarICuarto: function () { return $('#btnLimpiarICuarto'); },
        BtnLimpiarIQuinto: function () { return $('#btnLimpiarIQuinto'); },

        BtnBandejaInvestigacion: function () { return $('#btnBandejaInvestigacion'); },
        BtnBandejaInformes: function () { return $('#btnBandejaInformes'); },

        GrdResultado: null,
        GrdResultadoAprobacionesExtraordinarias: null,
        btnDescargarExcel: function () { return $('#btnDescargarExcel'); }
    };

    base.Event = {
        ValidarCopiarAlfanumerico: function (e) {
            return Pe.GMD.UI.Web.Components.Util.ValidateCopyOnlyAlphanumeric(e);
        },

        BtnBuscarKeyPress: function (evento) {
            var key = Pe.GMD.UI.Web.Components.Util.GetKeyCode(evento);
            var esValido = !(evento && key == 13);
            if (esValido == false) {
                base.Event.BtnBuscarInvestigacionPorElaborarClick();
            }
            return esValido;
        },

        BtnBuscarISegundoKeyPress: function (evento) {
            var key = Pe.GMD.UI.Web.Components.Util.GetKeyCode(evento);
            var esValido = !(evento && key == 13);
            if (esValido == false) {
                base.Event.BtnBuscarInvestigacionPorRevisarClick();
            }
            return esValido;
        },

        BtnBuscarITerceroKeyPress: function (evento) {
            var key = Pe.GMD.UI.Web.Components.Util.GetKeyCode(evento);
            var esValido = !(evento && key == 13);
            if (esValido == false) {
                base.Event.BtnBuscarInvestigacionPorAprobarClick();
            }
            return esValido;
        },

        ValidarCopiarSoloNumeros: function (e) {
            return Pe.GMD.UI.Web.Components.Util.ValidateCopyOnlyNumeric(e);
        },

        ValidarCopiarSoloLetras: function (e) {
            return Pe.GMD.UI.Web.Components.Util.ValidarCopiarSoloTexto(e);
        },

        AjaxEliminarRecordSuccess: function (data) {
            'use strict'
            if (data.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito });//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaEliminacionExitosa });
                base.Event.BtnBuscarInvestigacionPorElaborarClick();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro })//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaErrorRegistro });
            }
        },

        BtnBuscarInvestigacionPorElaborarClick: function () {
            'use strict'
            var filtro = {
                CodigoProyecto: base.Control.SlcProyecto().val(),
                FechaRecordDesdeString: base.Control.DtpFechaRecordDesde().val(),
                FechaRecordHastaString: base.Control.DtpFechaRecordHasta().val(),
                CodigoEstadoInvestigacion: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.EstadoInvestigacionPorElaborar
            };

            base.Control.GrdResultadoPorElaborar.Load(filtro);
        },
        BtnBuscarInvestigacionPorRevisarClick: function () {
            'use strict'
            var filtro = {
                CodigoProyecto: base.Control.SlcProyectoISegundo().val(),
                FechaRecordDesdeString: base.Control.DtpFechaRecordDesdeISegundo().val(),
                FechaRecordHastaString: base.Control.DtpFechaRecordHastaISegundo().val(),
                CodigoEstadoInvestigacion: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.EstadoInvestigacionPorRevisar
            };

            base.Control.GrdResultadoPorRevisar.Load(filtro);
        },
        BtnBuscarInvestigacionPorAprobarClick: function () {
            'use strict'
            var filtro = {
                CodigoProyecto: base.Control.SlcProyectoITercero().val(),
                FechaRecordDesdeString: base.Control.DtpFechaRecordDesdeITercero().val(),
                FechaRecordHastaString: base.Control.DtpFechaRecordHastaITercero().val(),
                CodigoEstadoInvestigacion: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.EstadoInvestigacionPorAprobar
            };

            base.Control.GrdResultadoPorAprobar.Load(filtro);
        },
        BtnBuscarInvestigacionAprobadosClick: function () {
            'use strict'
            var filtro = {
                CodigoProyecto: base.Control.SlcProyectoICuarto().val(),
                FechaRecordDesdeString: base.Control.DtpFechaRecordDesdeICuarto().val(),
                FechaRecordHastaString: base.Control.DtpFechaRecordHastaICuarto().val(),
                CodigoEstadoInvestigacion: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.EstadoInvestigacionAprobado
            };

            base.Control.GrdResultadoAprobados.Load(filtro);
        },

        BtnBuscarInvestigacionAprobacionesExtraordinariasClick: function () {
            'use strict'
            var filtro = {
                CodigoProyecto: base.Control.SlcProyectoIQuinto().val(),
                FechaRecordDesdeString: base.Control.DtpFechaRecordDesdeIQuinto().val(),
                FechaRecordHastaString: base.Control.DtpFechaRecordHastaIQuinto().val(),
                CodigoEstadoInvestigacion: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.EstadoInvestigacionAprobacionExtraordinaria
            };
            base.Control.GrdResultadoAprobacionesExtraordinarias.Load(filtro);
        },

        BtnLimpiarClick: function () {
            base.Control.SlcProyecto().val('');
            base.Control.DtpFechaRecordDesde().val(null);
            base.Control.DtpFechaRecordHasta().val(null);
            base.Event.BtnBuscarInvestigacionPorElaborarClick();
        },

        BtnLimpiarISegundoClick: function () {
            base.Control.SlcProyectoISegundo().val('');
            base.Control.DtpFechaRecordDesdeISegundo().val(null);
            base.Control.DtpFechaRecordHastaISegundo().val(null);
            base.Event.BtnBuscarInvestigacionPorRevisarClick();
        },

        BtnLimpiarITerceroClick: function () {
            base.Control.SlcProyectoITercero().val('');
            base.Control.DtpFechaRecordDesdeITercero().val(null);
            base.Control.DtpFechaRecordHastaITercero().val(null);
            base.Event.BtnBuscarInvestigacionPorAprobarClick();
        },

        BtnLimpiarICuartoClick: function () {
            base.Control.SlcProyectoICuarto().val('');
            base.Control.DtpFechaRecordDesdeICuarto().val(null);
            base.Control.DtpFechaRecordHastaICuarto().val(null);
            base.Event.BtnBuscarInvestigacionAprobadosClick();
        },

        BtnLimpiarIQuintoClick: function () {
            base.Control.SlcProyectoIQuinto().val('');
            base.Control.DtpFechaRecordDesdeIQuinto().val(null);
            base.Control.DtpFechaRecordHastaIQuinto().val(null);
            base.Event.BtnBuscarInvestigacionAprobacionesExtraordinariasClick();
        },

        BtnGridEditClick: function (row, data) {
            'use strict'
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Actions.FormularioInvestigacion, data);
        },

        BtnGridDeleteClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarRecord.data = {
                        CodigoRecord: data.CodigoRecord,
                    };

                    base.Ajax.AjaxEliminarRecord.submit();
                }
            });
        },

        BtnGridAprobacionExtraordinariaClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Confirmation({
                message: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Mensaje.MensajeConfirmacionAprobacion,
                onAccept: function () {
                    base.Ajax.AjaxRegistrarAprobacionExtraordinariaInvestigacion.data = {
                        CodigoInvestigacion: data.CodigoInvestigacion,
                        Comentario: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.ComentarioAprobacionExtraordinaria,
                        EstadoInicialEstadoInvestigacion: data.CodigoEstadoInvestigacion,
                        EstadoFinalEstadoInvestigacion: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.EstadoInvestigacionAprobado,

                        CodigoRecord: data.CodigoRecord,
                        NumeroRecord: data.NumeroRecord,
                        NombreProyecto: data.NombreProyecto
                    };

                    base.Ajax.AjaxRegistrarAprobacionExtraordinariaInvestigacion.submit();
                }
            });
        },

        BtnGridVerHistorialClick: function (row, data) {
            'use strict'
            base.Control.DlgFormularioHistorialCambios.Show(data);
        },
        BtnBandejaInvestigacionClick: function () {
            window.location.href = Pe.ElectroPeru.SGI.Presentacion.Base.Actions.FormularioInvestigacion;
        },
        BtnBandejaInformesClick: function () {
            window.location.href = Pe.ElectroPeru.SGI.Presentacion.Base.Actions.FormularioInformes;
        },

        BtnGridDescargarReporteInvestigacionClick: function (row, data) {
            'use strict';
            var filtro = {
                CodigoRecord: data.CodigoRecord,
                CodigoInvestigacion: data.CodigoInvestigacion,
                CodigoTipoRecord: data.CodigoTipoRecord,
                NumeroRecord: data.NumeroRecord
            };
            if (data.CodigoRecord != null) {
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Actions.DescargarReporteInvestigacion, filtro);
            }
        },

        AjaxRegistrarAprobacionExtraordinariaInvestigaciondSuccess: function (data) {
            'use strict'
            if (data.Result != "") {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });

                base.Event.BtnBuscarInvestigacionAprobacionesExtraordinariasClick();
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        btnDescargarExcelClick: function () {
            
            if (base.Control.GrdResultadoAprobados.core.rows().data().length >= 1) {
                var filtro = {                    
                    CodigoProyecto: base.Control.SlcProyectoICuarto().val(),
                    FechaRecordDesdeString: base.Control.DtpFechaRecordDesdeICuarto().val(),
                    FechaRecordHastaString: base.Control.DtpFechaRecordHastaICuarto().val(),                    
                    CodigoEstadoInvestigacion: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.EstadoInvestigacionAprobado
                }
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Actions.DescargarReporteRegistros, filtro);
            } else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MensajeObservacionAuditoria });
            }

        },
    };

    base.Ajax = {
        AjaxRegistrarAprobacionExtraordinariaInvestigacion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Actions.RegistrarAprobacionExtraordinariaInvestigacion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxRegistrarAprobacionExtraordinariaInvestigaciondSuccess
        }),
    }

    base.Function = {
        CrearGridInvestigacionPorElaborar: function () {
            var columns = new Array();
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NumeroRecord',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridNumeroRecord,
                width: "10%"
            });
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'Titulo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaGridTitulo,
                width: "20%"
            });
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'AnioRecord',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridAnio,
                width: "5%"
            });
            columns.push({
                filter: { enabled: true, type: "date" },
                data: 'FechaRecordString',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridFechaIncidente,
                width: "10%"
            });
            columns.push({
                filter: { enabled: true, type: "date" },
                data: 'FechaReporteString',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridFechaReporte,
                width: "10%"
            });
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.FormularioModelo.ListaPais },
                data: 'NombrePaisProyecto',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridPais,
                width: "15%"
            });
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.FormularioModelo.ListaProyecto },
                data: 'NombreProyecto',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridProyecto,
                width: "20%"
            });
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.FormularioModelo.ListaConsecuenciaIncidente },
                data: 'DescripcionConsecuenciaIncidente',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridActualConsecuencia,
                width: "15%"
            });
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.FormularioModelo.ListaPotencialIncidente },
                data: 'DescripcionPotencialIncidente',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridPotencialConsecuencia,
                width: "15%"
            });
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.FormularioModelo.ListaHpi },
                data: 'DescripcionHpi',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridHpi,
                width: "15%"
            });
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.FormularioModelo.ListaCategoriaIncidente },
                data: 'DescripcionCategoriaIncidente',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridClasificacionPrincipal,
                width: "15%"
            });
            columns.push({
                'data': '',
                'title': Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                'class': 'controls',
                width: '3%',
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.VerHistorialInvestigacion, event: { on: 'click', callBack: base.Event.BtnGridVerHistorialClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.DescargarInvestigacion, validateRender: base.Event.BtnGridDescargarReporteRecordValidate, event: { on: 'click', callBack: base.Event.BtnGridDescargarReporteInvestigacionClick } }
                ]
            });
            base.Control.GrdResultadoPorElaborar = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultInvestigacion',
                columns: columns,
                filterColumn: true,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Actions.BuscarInvestigacion,
                    source: 'Result'
                }
            });
        },

        CrearGridInvestigacionPorRevisar: function () {
            var columns = new Array();
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NumeroRecord',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridNumeroRecord,
                width: "10%"
            });
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'Titulo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaGridTitulo,
                width: "20%"
            });
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'AnioRecord',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridAnio,
                width: "5%"
            });
            columns.push({
                filter: { enabled: true, type: "date" },
                data: 'FechaRecordString',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridFechaIncidente,
                width: "10%"
            });
            columns.push({
                filter: { enabled: true, type: "date" },
                data: 'FechaReporteString',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridFechaReporte,
                width: "10%"
            });
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.FormularioModelo.ListaPais },
                data: 'NombrePaisProyecto',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridPais,
                width: "15%"
            });
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.FormularioModelo.ListaProyecto },
                data: 'NombreProyecto',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridProyecto,
                width: "20%"
            });
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.FormularioModelo.ListaConsecuenciaIncidente },
                data: 'DescripcionConsecuenciaIncidente',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridActualConsecuencia,
                width: "15%"
            });
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.FormularioModelo.ListaPotencialIncidente },
                data: 'DescripcionPotencialIncidente',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridPotencialConsecuencia,
                width: "15%"
            });
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.FormularioModelo.ListaHpi },
                data: 'DescripcionHpi',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridHpi,
                width: "15%"
            });
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.FormularioModelo.ListaCategoriaIncidente },
                data: 'DescripcionCategoriaIncidente',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridClasificacionPrincipal,
                width: "15%"
            });
            columns.push({
                'data': '',
                'title': Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                'class': 'controls',
                width: '3%',
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.VerHistorialInvestigacion, event: { on: 'click', callBack: base.Event.BtnGridVerHistorialClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.DescargarInvestigacion, validateRender: base.Event.BtnGridDescargarReporteRecordValidate, event: { on: 'click', callBack: base.Event.BtnGridDescargarReporteInvestigacionClick } }
                ]
            });
            base.Control.GrdResultadoPorRevisar = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultInvestigacionSegundo',
                columns: columns,
                filterColumn: true,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Actions.BuscarInvestigacion,
                    source: 'Result'
                }
            });
        },

        CrearGridInvestigacionPorAprobar: function () {
            var columns = new Array();
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NumeroRecord',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridNumeroRecord,
                width: "10%"
            });
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'Titulo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaGridTitulo,
                width: "20%"
            });
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'AnioRecord',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridAnio,
                width: "5%"
            });
            columns.push({
                filter: { enabled: true, type: "date" },
                data: 'FechaRecordString',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridFechaIncidente,
                width: "10%"
            });
            columns.push({
                filter: { enabled: true, type: "date" },
                data: 'FechaReporteString',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridFechaReporte,
                width: "10%"
            });
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.FormularioModelo.ListaPais },
                data: 'NombrePaisProyecto',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridPais,
                width: "15%"
            });
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.FormularioModelo.ListaProyecto },
                data: 'NombreProyecto',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridProyecto,
                width: "20%"
            });
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.FormularioModelo.ListaConsecuenciaIncidente },
                data: 'DescripcionConsecuenciaIncidente',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridActualConsecuencia,
                width: "15%"
            });
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.FormularioModelo.ListaPotencialIncidente },
                data: 'DescripcionPotencialIncidente',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridPotencialConsecuencia,
                width: "15%"
            });
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.FormularioModelo.ListaHpi },
                data: 'DescripcionHpi',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridHpi,
                width: "15%"
            });
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.FormularioModelo.ListaCategoriaIncidente },
                data: 'DescripcionCategoriaIncidente',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridClasificacionPrincipal,
                width: "15%"
            });
            columns.push({
                'data': '',
                'title': Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                'class': 'controls',
                width: '3%',
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.VerHistorialInvestigacion, event: { on: 'click', callBack: base.Event.BtnGridVerHistorialClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.DescargarInvestigacion, validateRender: base.Event.BtnGridDescargarReporteRecordValidate, event: { on: 'click', callBack: base.Event.BtnGridDescargarReporteInvestigacionClick } }
                ]
            });
            base.Control.GrdResultadoPorAprobar = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultInvestigacionTercero',
                columns: columns,
                filterColumn: true,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Actions.BuscarInvestigacion,
                    source: 'Result'
                }
            });
        },

        CrearGridInvestigacionAprobados: function () {
            var columns = new Array();
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NumeroRecord',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridNumeroRecord,
                width: "10%"
            });
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'Titulo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaGridTitulo,
                width: "20%"
            });
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'AnioRecord',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridAnio,
                width: "5%"
            });
            columns.push({
                filter: { enabled: true, type: "date" },
                data: 'FechaRecordString',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridFechaIncidente,
                width: "10%"
            });
            columns.push({
                filter: { enabled: true, type: "date" },
                data: 'FechaReporteString',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridFechaReporte,
                width: "10%"
            });
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.FormularioModelo.ListaPais },
                data: 'NombrePaisProyecto',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridPais,
                width: "15%"
            });
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.FormularioModelo.ListaProyecto },
                data: 'NombreProyecto',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridProyecto,
                width: "20%"
            });
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.FormularioModelo.ListaConsecuenciaIncidente },
                data: 'DescripcionConsecuenciaIncidente',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridActualConsecuencia,
                width: "15%"
            });
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.FormularioModelo.ListaPotencialIncidente },
                data: 'DescripcionPotencialIncidente',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridPotencialConsecuencia,
                width: "15%"
            });
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.FormularioModelo.ListaHpi },
                data: 'DescripcionHpi',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridHpi,
                width: "15%"
            });
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.FormularioModelo.ListaCategoriaIncidente },
                data: 'DescripcionCategoriaIncidente',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridClasificacionPrincipal,
                width: "15%"
            });
            columns.push({
                'data': '',
                'title': Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                'class': 'controls',
                width: '3%',
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.VerHistorialInvestigacion, event: { on: 'click', callBack: base.Event.BtnGridVerHistorialClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.DescargarInvestigacion, validateRender: base.Event.BtnGridDescargarReporteRecordValidate, event: { on: 'click', callBack: base.Event.BtnGridDescargarReporteInvestigacionClick } }
                ]
            });
            base.Control.GrdResultadoAprobados = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultInvestigacionCuarto',
                columns: columns,
                filterColumn: true,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Actions.BuscarInvestigacion,
                    source: 'Result'
                }
            });
        },

        CrearGridInvestigacionAprobacionesExtraordinarias: function () {
            var columns = new Array();
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.FormularioModelo.ListaProyecto },
                data: 'NombreProyecto',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridProyecto,
                width: "20%"
            });
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'NumeroRecord',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridNumeroRecord,
                width: "10%"
            });
            columns.push({
                filter: { enabled: true, type: "date" },
                data: 'FechaRecordString',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridFechaIncidente,
                width: "10%"
            });
            columns.push({
                filter: { enabled: true, type: "textbox" },
                data: 'Titulo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaGridTitulo,
                width: "20%"
            });
            //columns.push({
            //    filter: { enabled: true, type: "textbox" },
            //    data: 'AnioRecord',
            //    title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridAnio,
            //    width: "5%"
            //});
            //columns.push({
            //    filter: { enabled: true, type: "date" },
            //    data: 'FechaReporteString',
            //    title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridFechaReporte,
            //    width: "10%"
            //});
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.FormularioModelo.ListaConsecuenciaIncidente },
                data: 'DescripcionConsecuenciaIncidente',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridActualConsecuencia,
                width: "15%"
            });
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.FormularioModelo.ListaPotencialIncidente },
                data: 'DescripcionPotencialIncidente',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridPotencialConsecuencia,
                width: "15%"
            });
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.FormularioModelo.ListaHpi },
                data: 'DescripcionHpi',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridHpi,
                width: "15%"
            });
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.FormularioModelo.ListaCategoriaIncidente },
                data: 'DescripcionCategoriaIncidente',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridClasificacionPrincipal,
                width: "15%"
            });
            //columns.push({
            //    filter: { enabled: true, type: "textbox" },
            //    data: 'NombrePaisProyecto',
            //    title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridPais,
            //    width: "15%"
            //});
            columns.push({
                filter: { enabled: false },
                data: 'DescripcionEstadoInvestigacion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridEstadoInvestigacion,
                width: "15%"
            });
            columns.push({
                'data': '',
                'title': Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                'class': 'controls',
                width: '3%',
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Aprobar, event: { on: 'click', callBack: base.Event.BtnGridAprobacionExtraordinariaClick } },
                ]
            });
            base.Control.GrdResultadoAprobacionesExtraordinarias = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultInvestigacionAprobacionesExtraordinarias',
                columns: columns,
                filterColumn: true,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Actions.BuscarInvestigacion,
                    source: 'Result'
                }
            });
        },
    };
};