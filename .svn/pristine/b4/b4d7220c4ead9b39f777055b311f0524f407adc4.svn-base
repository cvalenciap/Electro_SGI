ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.FormularioSeguimientoAccion');

Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.FormularioSeguimientoAccion.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        'use strict'
        var filtro = {
            CodigoRecordAccion: base.Control.CodigoRecordAccion
        };
        base.Function.CrearGridSeguimientoAccion();
        base.Control.GridSeguimientoAccion.Load(filtro);
    };

    base.Control = {
        txtNumeroAccion: function () { return $('#NumeroAccion'); },
        CodigoRecordAccion: null,
        GridSeguimientoAccion: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
    };

    base.Show = function (opts) {
        base.Control.CodigoRecordAccion = opts.CodigoRecordAccion;
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaTituloFormularioSeguimientoAccion,
            size: "size-wide",
            close: function () {

            }
        });

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.FormularioSeguimientoAccion,
            data: { CodigoRecordAccion: opts.CodigoRecordAccion },
            onSuccess: function () {
                base.Ini();
                $('#NumeroAccion').val(opts.NumeroAccion);                
            }
        });
    };

    base.Event = {
        BtnGridDescargarFotoValidate: function (data, type, full) {
            //if (full.CodigoArchivoFotoSharePoint != null) {
            //    return true;
            //}

            return true;
        },

        BtnGridDescargarAnexoValidate: function (data, type, full) {
            //if (full.CodigoArchivoAnexoSharePoint != null) {
            //    return true;
            //}

            return true;
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
        }
    };

    base.Function = {
        CrearGridSeguimientoAccion: function () {
            var columns = new Array();
            columns.push({
                data: 'DescripcionEstadoAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.FormularioSeguimientoAccion.Resource.GridEstado,
                width: '10%'
            });

            columns.push({
                data: 'FechaEstadoAccionString',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.FormularioSeguimientoAccion.Resource.GridFechaEstado,
                width: '10%'
            });

            columns.push({
                data: 'Comentario',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.FormularioSeguimientoAccion.Resource.GridComentario,
                width: '25%'
            });

            //columns.push({
            //    data: 'FechaCierreAccionString',
            //    title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.FormularioSeguimientoAccion.Resource.GridFechaCierre,
            //    width: '10%'
            //});

            columns.push({
                data: 'NombreColaboradorResponsableCierre',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.FormularioSeguimientoAccion.Resource.GridClosedOn,
                width: '25%',
                'class': 'left'
            });

            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.FormularioSeguimientoAccion.Resource.GridPhotoName,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.DescargarFoto, validateRender: base.Event.BtnGridDescargarFotoValidate, event: { on: 'click', callBack: base.Event.BtnGridDescargarFotoRecordAccionSeguimientoClick } }
                ]
            });

            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.FormularioSeguimientoAccion.Resource.GridApendiceName,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.DescargarAnexo, validateRender: base.Event.BtnGridDescargarAnexoValidate, event: { on: 'click', callBack: base.Event.BtnGridDescargarAnexoRecordAccionSeguimientoClick } }
                ]
            });

            base.Control.GridSeguimientoAccion = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoRecordAccion',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Accion.FormularioSeguimientoAccion.Actions.VerSeguimientos,
                    source: 'Result'
                }
            });
        }
    };
    
};
