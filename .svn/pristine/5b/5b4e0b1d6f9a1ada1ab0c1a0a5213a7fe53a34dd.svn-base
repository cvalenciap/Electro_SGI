/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 27052016
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Controller = function () {
    var base = this;
    base.Ini = function () {
        'use strict'
        base.Control.RegistroRecordModel = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Models.RegistroRecord;
        var urlLocation = (window.location.href).split('?');
        if (urlLocation.length > 1) {
            var urlValor = urlLocation[1].split('=');
            if (urlValor.length > 1) {
                base.Control.ParametroUrl = urlValor[1];
            }
        }

        if (base.Control.ParametroUrl != null) {
            base.Control.SlcTipoRecord().val(base.Control.ParametroUrl);
            base.Event.SlcTipoRecordChange();
        }

        //if ($('#slcTipoRecord option').length == 1)
        //{
        //    base.Event.SlcTipoRecordChange();
        //}
        //else
        //{
        //    base.Control.SlcTipoRecord().off('change');
        //    base.Control.SlcTipoRecord().on('change', base.Event.SlcTipoRecordChange)
        //}

        base.Control.BtnRegresarBandejaRecord().off('click');
        base.Control.BtnRegresarBandejaRecord().on('click', base.Event.BtnRegresarBandejaRecordClick);

        base.Control.DlgFormularioRecordAnexo = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordAnexo.Controller({
            GrabarRecordAnexoSuccess: base.Event.BtnBuscarClick
        });

        base.Control.DlgFormularioRecordAnexoApendice = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordAnexoApendice.Controller({
            GrabarRecordAnexoApendiceSuccess: base.Event.BtnBuscarClick
        });

        base.Control.DlgFormularioRecordAccion = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordAccion.Controller({
            GrabarRecordAccionSuccess: base.Event.BtnBuscarClick
        });


        base.Control.BtnAgregarRecordAnexoFoto().off('click');
        base.Control.BtnAgregarRecordAnexoFoto().on('click', base.Event.BtnAgregarRecordAnexoFotoClick);

        base.Control.BtnAgregarRecordAnexoAppendix().off('click');
        base.Control.BtnAgregarRecordAnexoAppendix().on('click', base.Event.BtnAgregarRecordAnexoAppendixClick);

        //if (base.Control.RegistroRecordModel.Record.CodigoRecord != null) {
        //    base.Event.SlcTipoRecordEdicionChange();
        //}

        base.Event.SlcTipoRecordChange();
    };


    base.Control = {
        ParametroUrl: null,
        RegistroRecordModel: null,
        BtnAgregarRecordAnexoFoto: function () { return $('#btnAgregarRecordAnexoFoto'); },
        BtnAgregarRecordAnexoAppendix: function () { return $('#btnAgregarRecordAnexoAppendix'); },
        SlcTipoRecord: function () { return $('#slcTipoRecord'); },
        FragmentViewForm: new Pe.GMD.UI.Web.Components.FragmentView(),
        BtnRegresarBandejaRecord: function () { return $('#btnRegresarBandejaRecord'); },

        DlgFormularioRecordAnexo: null,
        DlgFormularioRecordAnexoApendice: null,
        DlgFormularioRecordAccion: null,
        GrdResultadoRecordFoto: null,
        GrdResultadoRecordAppendix: null,
        GrdResultadoRecordAccion: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
    };


    base.Event = {
        BtnBuscarClick: function () {
            var filtroAnexoFoto = {
                CodigoTipoAnexo: 'FOT'
            };

            var filtroAnexoApendice = {
                CodigoTipoAnexo: 'ADJ'
            };

            var filtro = {

            };

            base.Control.GrdResultadoRecordFoto.Load(filtroAnexoFoto);
            base.Control.GrdResultadoRecordAppendix.Load(filtroAnexoApendice);
            base.Control.GrdResultadoRecordAccion.Load(filtro);
        },

        BtnRegresarBandejaRecordClick: function () {
            base.Control.SlcTipoRecord().val("");
            base.Control.SlcTipoRecord().off('change');

            base.Control.RegistroRecordModel.Record.CodigoRecord = null;
            base.Control.RegistroRecordModel.Record.CodigoTipoRecord = null;

            //var filtro = {
            //};
            location.href = Pe.ElectroPeru.SGI.Presentacion.Base.Actions.Records;
            //base.Control.FragmentViewForm.getAjaxContent({
            //    idDivFragmentView: "dvRenderBody",
            //   action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.Records,
            //    onSuccess: function () {
            //        base.Ini();
            //    },
            //    data: filtro
            //});
        },

        AjaxEliminarSuccess: function (data) {
            'use strict'
            if (data.Result == null) {
                base.Control.Mensaje.Information({
                    title: "Información",
                    message: "Mensaje Prueba"
                });

                base.Event.BtnBuscarClick();
            }
            else {
                //base.Control.Mensaje.Error({ message: "Registro no eliminado" });
            }
        },

        BtnGridEditClick: function (row, data) {
            'use strict'
            base.Control.DlgFormularioRecordAnexo.Show({
                CodigoRecordAnexo: data.CodigoRecordAnexo
            });
        },

        BtnGridEditApendiceClick: function (row, data) {
            'use strict'
            base.Control.DlgFormularioRecordAnexoApendice.Show({
                CodigoRecordAnexo: data.CodigoRecordAnexo
            });
        },

        BtnGridEditAccionClick: function (row, data) {
            'use strict'
            base.Control.DlgFormularioRecordAccion.Show({
                CodigoAccion: data.CodigoAccion
            });
        },

        BtnGridDeleteClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                title: 'Eliminar',
                onAccept: function () {
                    base.Ajax.AjaxEliminar.data = {
                        CodigoRecordAnexo: data.CodigoRecordAnexo,
                    };

                    base.Ajax.AjaxEliminar.submit();
                }
            });
        },

        BtnGridDeleteAccionClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                title: 'Eliminar',
                onAccept: function () {
                    base.Ajax.AjaxEliminarRecordAccion.data = {
                        CodigoAccion: data.CodigoAccion,
                    };

                    base.Ajax.AjaxEliminarRecordAccion.submit();
                }
            });
        },

        BtnAgregarRecordAnexoFotoClick: function () {
            base.Control.DlgFormularioRecordAnexo.Show({
            });
        },

        BtnAgregarRecordAnexoAppendixClick: function () {
            base.Control.DlgFormularioRecordAnexoApendice.Show({
                CodigoRecord: base.Control.RegistroRecordModel.Record.CodigoRecord
            });
        },

        SlcTipoRecordChange: function () {
            var codigoTipoRecord = base.Control.RegistroRecordModel.Record.CodigoTipoRecord;
            $('#divRenderRecordSeccionCampo').empty();
            $('#txtNumeroRecord').val(base.Control.RegistroRecordModel.Record.NumeroRecord);

            //if (codigoTipoRecord == '') {
            //    return;
            //}

            var filtro = {
                CodigoTipoRecord: codigoTipoRecord,
                CodigoRecord: base.Control.RegistroRecordModel.Record.CodigoRecord,
                CodigoRecordSustento: base.Control.RegistroRecordModel.Record.CodigoRecordSustento
            };

            var rutaHTML = '';
            if (codigoTipoRecord == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.TipoRecord.Incidente) {
                rutaHTML = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Actions.FormularioIncidente;
            }
            //else {
            //    rutaHTML = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Actions.FormularioRecord;
            //    //base.Ajax.AjaxBuscarSiglaTipoRecord.data = {
            //    //    CodigoTipoRecord: codigoTipoRecord
            //    //};

            //    //base.Ajax.AjaxBuscarSiglaTipoRecord.submit();
            //}

            base.Control.FragmentViewForm.getAjaxContent({
                idDivFragmentView: "divRenderRecordSeccionCampo",
                action: rutaHTML,
                onSuccess: function () {
                    if (codigoTipoRecord == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.TipoRecord.Incidente) {
                        Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioIncidente = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioIncidente.Controller();
                        Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioIncidente.Ini();
                    }
                    //else {
                    //    Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecord.Vista = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecord.Controller();
                    //    Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecord.Vista.Ini();
                    //}
                },

                data: filtro
            });
        },

        SlcTipoRecordEdicionChange: function () {
            var codigoTipoRecord = base.Control.RegistroRecordModel.Record.CodigoTipoRecord;
            $('#divRenderRecordSeccionCampo').empty();

            var filtro = {
                CodigoTipoRecord: codigoTipoRecord,
                CodigoRecord: base.Control.RegistroRecordModel.Record.CodigoRecord,
                CodigoRecordSustento: base.Control.RegistroRecordModel.Record.CodigoRecordSustento
            };

            var rutaHTML = '';
            if (codigoTipoRecord == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.TipoRecord.Incidente) {
                rutaHTML = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Actions.FormularioIncidente;
            }
            //else {
            //    rutaHTML = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Actions.FormularioRecord;
            //}

            base.Control.FragmentViewForm.getAjaxContent({
                idDivFragmentView: "divRenderRecordSeccionCampo",
                action: rutaHTML,
                onSuccess: function () {
                    if (codigoTipoRecord == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.DatosConstantes.TipoRecord.Incidente) {
                        Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioIncidente = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioIncidente.Controller();
                        Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioIncidente.Ini();
                    }
                    //else {
                    //    Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecord.Vista = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecord.Controller();
                    //    Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecord.Vista.Ini();
                    //}
                },

                data: filtro
            });
        },

        AjaxBuscarSiglaTipoRecordSuccess: function (resultado) {
            if (resultado.Result != "") {
                $('#txtNumeroRecord').val(resultado.Result);
            }
        },
    };

    base.Ajax = {
        AjaxEliminar: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.EliminarRecordAnexo,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarSuccess
        }),

        AjaxEliminarRecordAccion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.EliminarRecordAccion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarSuccess
        }),

        AjaxBuscarSiglaTipoRecord: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.BuscarSiglaTipoRecord,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarSiglaTipoRecordSuccess
        })
    };

    base.Function = {
    };
};
