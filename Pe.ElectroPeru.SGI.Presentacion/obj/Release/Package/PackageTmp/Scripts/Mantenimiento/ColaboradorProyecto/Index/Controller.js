/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 19102017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.ColaboradorProyecto.Index');
Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.ColaboradorProyecto.Index.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Control.ColaboradorProyectoModel = $.parseJSON(Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.ColaboradorProyecto.Models.ColaboradorProyecto);
        base.Function.CrearGrid();
        //base.Event.BtnBuscarClick();
        //base.Control.BtnBuscar().click(base.Event.BtnBuscarClick);
        base.Control.BtnBuscarColaboradorAsociacion().on('click', base.Event.BtnBuscarColaboradorAsociacionClick);
        base.Control.SlcProyecto().off('change');
        base.Control.SlcProyecto().on('change', base.Event.SlcProyectoChange);
        base.Control.BtnLimpiar().off('click');
        base.Control.BtnLimpiar().on('click', base.Event.BtnLimpiarClick);
        base.Control.BtnGrabar().off('click');
        base.Control.BtnGrabar().on('click', base.Event.BtnGrabarClick);

        base.Control.DlgFormularioColaborador = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.AsignarValoresColaboradorClick
        });

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmColaboradorProyecto(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.ColaboradorProyecto.Resources.Validacion,
            validationsExtra: base.Function.ValidacionExtraColaborador()
        });
    };

    base.Control = {
        Validador: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        FrmColaboradorProyecto: function () { return $('#frmColaboradorProyecto'); },
        BtnBuscar: function () { return $('#btnBuscar'); },
        BtnBuscarColaboradorAsociacion: function () { return $('#btnBuscarColaboradorAsociacion'); },
        SlcProyecto: function () { return $('#slcProyecto'); },
        TxtCodigoColaborador: function () { return $('#txtCodigoColaborador'); },
        HdnCodigoColaborador: function () { return $('#hdnCodigoColaborador'); },
        TxtEtiquetaDocumento: function () { return $('#txtEtiquetaDocumento'); },
        TxtEtiquetaEmpresa: function () { return $('#txtEtiquetaEmpresa'); },
        TxtEtiquetaPuestoTrabajo: function () { return $('#txtEtiquetaPuestoTrabajo'); },
        TxtEtiquetaCodigoProyecto: function () { return $('#txtEtiquetaCodigoProyecto'); },
        TxtEtiquetaCodigoTipoUnidad: function () { return $('#txtEtiquetaCodigoTipoUnidad'); },
        TxtEtiquetaCodigoMeta4: function () { return $('#txtEtiquetaCodigoMeta4'); },
        BtnLimpiar: function () { return $('#btnLimpiar'); },
        BtnGrabar: function () { return $('#btnGrabar'); },
        DlgFormularioColaborador: null,
        ColaboradorProyectoModel: null
    };

    base.Event = {
        SlcProyectoChange: function () {
            base.Event.BtnBuscarClick()
            var texto = base.Control.SlcProyecto().val().split('/');
            var codProy = texto[0];
            var codMeta4 = texto[1];
            var codUndO = texto[2];
           
            base.Control.TxtEtiquetaCodigoProyecto().val(codProy);
            base.Control.TxtEtiquetaCodigoTipoUnidad().val(codUndO);
            base.Control.TxtEtiquetaCodigoMeta4().val(codMeta4);
        },
        BtnBuscarClick: function () {
            'use strict'
            var texto = base.Control.SlcProyecto().val().split('/');
            var codProyecto = texto[0];
            var filtro = {
                CodigoProyecto: codProyecto,
                CodigoColaborador: base.Control.HdnCodigoColaborador().val()
            };            
            base.Control.GrdResultado.Load(filtro);
        },
        AsignarValoresColaboradorClick: function (objColaborador) {
            'use strict'
            base.Control.TxtCodigoColaborador().val(objColaborador[0].NombreCompletoColaborador);
            base.Control.HdnCodigoColaborador().val(objColaborador[0].CodigoColaborador);
            base.Control.TxtEtiquetaDocumento().val(objColaborador[0].NumeroDocumento);
            base.Control.TxtEtiquetaEmpresa().val(objColaborador[0].NombreEmpresa);
            base.Control.TxtEtiquetaPuestoTrabajo().val(objColaborador[0].NombrePuestoTrabajo);            
            base.Event.BtnBuscarClick();
        },
        BtnLimpiarClick: function () {
            $("#divGrdResult").html('');
            base.Control.SlcProyecto().val('');            
            base.Control.HdnCodigoColaborador().val(0);
            base.Control.TxtCodigoColaborador().val('');
            base.Control.TxtEtiquetaDocumento().val('');
            base.Control.TxtEtiquetaEmpresa().val('');
            base.Control.TxtEtiquetaPuestoTrabajo().val('');
            base.Control.TxtEtiquetaCodigoProyecto().val('');
            base.Control.TxtEtiquetaCodigoTipoUnidad().val('');
            base.Control.TxtEtiquetaCodigoMeta4().val('');
            location.reload();
            base.Function.CrearGrid();
        },
        BtnGrabarClick: function () {
            'use strict'
            var texto = base.Control.SlcProyecto().val().split('/');
            var codProyecto = texto[0];
            if (base.Control.Validador.isValid()) {
                base.Ajax.AjaxGrabar.data = {
                    CodigoProyecto: codProyecto,
                    CodigoColaborador: base.Control.HdnCodigoColaborador().val()
                };
                base.Ajax.AjaxGrabar.submit();
            }
            else {
                $("#frmColaboradorProyectoSummaryErrorMessage").empty();
                $("#frmColaboradorProyectoSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },
        AjaxGrabarSuccess: function (resultado) {
            if (resultado.IsSuccess) {
                //base.Control.DlgFormularioColaborador.divDialog.close();
                if (base.Event.AceptarSuccess != null) {
                    base.Event.AceptarSuccess();
                }
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
                base.Event.BtnBuscarClick();
            }
        },
        BtnBuscarColaboradorAsociacionClick: function () {
            'use strict'
            var filtro = { Modo: 'ALL' };
            base.Control.DlgFormularioColaborador.Show(false, [], filtro, false);
        },
        BtnGridDeleteClick: function (row, data) {
            'use strict'
            if (data.EstadoRegistro != Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.Inactivo) {
                base.Control.Mensaje.Delete({
                    onAccept: function () {
                        base.Ajax.AjaxEliminarColaboradorProyecto.data = {
                            CodigoColaboradorProyecto: data.CodigoColaboradorProyecto,
                        };
                        base.Ajax.AjaxEliminarColaboradorProyecto.submit();
                    }
                });
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.RegistroInactivo });
            }
        },
        AjaxEliminarColaboradorProyectoSuccess: function (data) {
            'use strict'
            if (data.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito });//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaEliminacionExitosa });
                base.Event.BtnBuscarClick();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro })//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaErrorRegistro });
            }
        },
    };
    base.Ajax = {
        AjaxGrabar: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.ColaboradorProyecto.Actions.RegistrarColaboradorProyecto,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarSuccess
        }),
        AjaxEliminarColaboradorProyecto: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.ColaboradorProyecto.Actions.EliminarColaboradorProyecto,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarColaboradorProyectoSuccess
        })
    };
    base.Function = {
        CrearGrid: function () {
            var columns = new Array();
            //columns.push({
            //    title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.ColaboradorProyecto.Resource.GridNumero,
            //    width: "10%",
            //    data: 'DescripcionProyecto'
            //});
            columns.push({
                //filter: { enabled: true, type: "textbox" },
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.ColaboradorProyecto.Resources.GridColaborador,
                width: "10%",
                data: 'NombreColaborador'
            });
            columns.push({
                //filter: { enabled: true, type: "textbox" },
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.ColaboradorProyecto.Resources.GridProyecto,
                width: "10%",
                data: 'NombreProyecto'
            });
            columns.push({
                filter: { enabled: true, type: "select", data: base.Control.ColaboradorProyectoModel.ListaEstado},
                title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.ColaboradorProyecto.Resources.GridEstado,
                width: "10%",
                data: 'EstadoRegistroDescripcion'
            });
            //columns.push({
            //    filter: { enabled: true, type: "textbox" },
            //    title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.ColaboradorProyecto.Resources.GridFCreacion,
            //    width: "10%",
            //    data: 'FechaCreacion'
            //});
            //columns.push({
            //    filter: { enabled: true, type: "textbox" },
            //    title: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.ColaboradorProyecto.Resources.GridFEdicion,
            //    width: "10%",
            //    data: 'FechaEdicion'
            //});
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [                    
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteClick } }
                ]
            });
            base.Control.GrdResultado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResult',
                columns: columns,
                filterColumn: true,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                //scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.ColaboradorProyecto.Actions.BuscarColaboradorProyecto,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                }
            });
        },
        ValidacionExtraColaborador: function () {
        var validaciones = new Array();

        validaciones.push({
            Event: function () {
                var resultado = true;

                if (base.Control.HdnCodigoColaborador().val() == null || base.Control.HdnCodigoColaborador().val() == '') {
                    resultado = false;
                }

                if (resultado) {
                    base.Control.TxtCodigoColaborador().attr('class', 'form-control');
                } else {
                    base.Control.TxtCodigoColaborador().attr('class', 'form-control hasError');
                }

                return resultado;
            },

            codeMessage: "Validar"
        });
        return validaciones;
    },
    };
};