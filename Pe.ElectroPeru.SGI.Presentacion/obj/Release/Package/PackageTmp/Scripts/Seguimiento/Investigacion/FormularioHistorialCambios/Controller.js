/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 08022017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioHistorialCambios');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioHistorialCambios.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        base.Function.CrearGridHistorialCambios();
        base.Control.GridHistorialCambios.Load({
            CodigoInvestigacion: base.Control.CodigoInvestigacion
        });
    };

    base.Show = function (opts) {        
        base.Control.CodigoInvestigacion = opts.CodigoInvestigacion;
        base.Control.EstadoFinalEstadoInvestigacion = opts.CodigoEstadoInvestigacion;
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.TituloVentanaHistorial,
            size: "size-xlarge",
            close: function () {
            }
        });

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Actions.FormularioHistorialCambios,
            onSuccess: function () {
                base.Ini();
            },
            data: opts
        });
    };

    base.Control = {
        CodigoInvestigacion: null,
        EstadoInicialEstadoInvestigacion: null
    };

    base.Function = {
        CrearGridHistorialCambios: function () {
            var columns = new Array();
            columns.push({
                data: 'FechaRegistroString',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioHistorialCambios.Resource.GridFechaCambio,
                width: '10%'
            });
            columns.push({
                data: 'HoraRegistroString',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioHistorialCambios.Resource.GridHora,
                width: '10%'
            });
            columns.push({
                data: 'NombreCompletoColaborador',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioHistorialCambios.Resource.GridReportante,
                width: '10%'
            }); 
            columns.push({
                data: 'ListaColaboradesEstado',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioHistorialCambios.Resource.GridElaboradoPor,
                width: '10%',
                mRender: function (data, type, full) {                    
                    if (full.EstadoInicialEstadoInvestigacion == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.EstadoInvestigacionPorElaborar) {
                        return full.ListaColaboradesEstado;
                    }
                    else {
                        return '';
                    }
                }
            });
            columns.push({
                data: 'ListaColaboradesEstado',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioHistorialCambios.Resource.GridRevisadoPor,
                width: '10%',
                mRender: function (data, type, full) {
                    if (full.EstadoInicialEstadoInvestigacion == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.EstadoInvestigacionPorRevisar) {
                        return full.ListaColaboradesEstado;
                    }
                    else {
                        return '';
                    }
                }
            });
            columns.push({
                data: 'ListaColaboradesEstado',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioHistorialCambios.Resource.GridAprobadoPor,
                width: '10%',
                mRender: function (data, type, full) {
                    if (full.EstadoInicialEstadoInvestigacion == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.EstadoInvestigacionPorAprobar) {
                        return full.ListaColaboradesEstado;
                    }
                    else {
                        return '';
                    }
                }
            });
            columns.push({
                data: 'DescripcionEstadoInicial',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioHistorialCambios.Resource.GridEstadoInicial,
                width: '10%'
            });
            columns.push({
                data: 'DescripcionEstadoFinal',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioHistorialCambios.Resource.GridEstadoFinal,
                width: '10%'
            });
            columns.push({
                data: 'Comentario',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioHistorialCambios.Resource.GridComentarios,
                width: '10%'
            });
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioHistorialCambios.Resource.GridVersiones,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.DescargarAnexo, validateRender: base.Event.BtnGridDescargarAnexoValidate, event: { on: 'click', callBack: base.Event.BtnGridDescargarReporteInvestigacionClick } }
                ]
            });
            base.Control.GridHistorialCambios = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdHistorialCambios',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Actions.BuscarInvestigacionHistorialCambios,
                    source: 'Result'
                }
            });
        }
    };

    base.Event = {
        BtnGridDescargarAnexoValidate: function (data, type, full) {
            if (full.CodigoArchivoAnexoSharePoint != null)
                return true;
            else
                return false;
        },
        BtnGridDescargarReporteInvestigacionClick: function (row, data) {
            'use strict';
            base.Control.NumeroRecord = data.NumeroRecord;
            var filtroDescargar = {
                CodigoArchivoAnexoSharePoint: data.CodigoArchivoAnexoSharePoint,
                NumeroRecord: base.Control.NumeroRecord
            };
            if (data.CodigoArchivoAnexoSharePoint != 0) {
                Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Actions.DescargarReporteInvestigacionSharePoint, filtroDescargar);
            }
        },
    };
    
};
