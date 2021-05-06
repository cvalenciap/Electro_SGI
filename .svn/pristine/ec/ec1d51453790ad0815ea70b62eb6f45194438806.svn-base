/// <summary>
/// Script de controlador del layaut del site.
/// </summary>
/// <remarks>
/// Creacion: 	GMD(EMP) 24/03/2015
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Politicas.UnidadOperativa.FormularioUnidadOperativaStaff');
Pe.ElectroPeru.SGI.Presentacion.Politicas.UnidadOperativa.FormularioUnidadOperativaStaff.Controller = function (opts) {
    var base = this;
    base.Ini = function () {
        'use strict'
        base.Event.GrabarSuccess = (opts.GrabarSuccess != null && opts.GrabarSuccess) ? opts.GrabarSuccess : null;
        base.Control.BtnGrabar().click(base.Event.BtnGrabarClick);
        base.Control.BtnCancelar().click(base.Event.BtnCancelarClick);
        base.Function.CrearGrid();
        base.Event.BtnBuscarClick();

        base.Control.DlgForm.setTitle(Pe.ElectroPeru.SGI.Presentacion.Politicas.UnidadOperativaResource.EtiquetaTituloFormularioStaff);

        base.Control.TfEnBandejaDe = new Pe.GMD.UI.Web.Components.TokenField({
            data: Pe.ElectroPeru.SGI.Presentacion.Politicas.UnidadOperativa.Actions.BuscarTrabajador,
            target: base.Control.TxtEnBandejaDe(),
            queryParam: "nombreTrabajador",
            searchingText: 'Buscando Trabajador..',
            resultsLimit: 1,
            noResultsText: 'Trabajador no encontrado..',
            hintText: 'Digite nombre del Trabajador',
            propertyToSearch: 'NombreCompleto',
            tokenValue: 'CodigoTrabajador'
        });


    };

    base.Control = {
        GrabarSuccess: null,
        DlgForm: new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Politicas.UnidadOperativaResource.EtiquetaTituloFormularioStaff
        }),
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        FrmUnidadOperativa: function () { return $('#frmUnidadOperativaStaffRegistro'); },
        GrdResultado: null,
        CodUnidadOperativa: null,
        BtnGrabar: function () { return $('#btnGrabarRegistroUnidadOperativaStaff'); },
        slcCodigoSistema: function () { return $('#slcCodigoSistema'); },
        BtnCancelar: function () { return $('#btnCancelarRegistro'); },

        TfEnBandejaDe: null,
        TxtEnBandejaDe: function () { return $('#txtUsuario'); }
    };

    base.Event = {
 
        BtnCancelarClick: function () {
            'use strict'
            base.Control.DlgForm.close();
        },
        BtnBuscarClick: function () {
            'use strict'
            var filtro = {
                CodigoUnidadOperativa: base.Control.CodUnidadOperativa
                
            };
            base.Control.GrdResultado.Load(filtro);
        },
        BtnGrabarClick: function () {
            'use strict'
            var codigoTrabajador = null;
            var trabajadorSeleccionado = base.Control.TxtEnBandejaDe().tokenInput("get");

            if (trabajadorSeleccionado.length > 0) {
                codigoTrabajador = trabajadorSeleccionado[0].id;
            }
            //if (base.Control.Validador.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Politicas.UnidadOperativaResource.EtiquetaTituloConfirmar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Recursos.Validacion.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabar.data = {
                            CodigoUnidadOperativa: base.Control.CodUnidadOperativa,
                            CodigoSistema: base.Control.slcCodigoSistema().val(), //'11C00951-7DF5-48EE-AFCC-AB14C0A1C938',
                            CodigoTrabajador: codigoTrabajador, //'150980CA-B094-452A-B870-00C714B473D7',
                           
                        };
                        base.Ajax.AjaxGrabar.submit();
                    }
                });
            //}
        },
        AjaxGrabarSuccess: function (data) {
            'use strict'
            switch (data) {
                default:
                    base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Recursos.Validacion.EtiquetaConfirmacion });
                    if (base.Event.GrabarSuccess != null) {
                        base.Event.GrabarSuccess();
                    }
                    base.Control.DlgForm.close();
                    break;
            }
        },
        AjaxEliminarSuccess: function (data) {
            base.Event.BtnBuscarClick();
        },
        //AjaxBuscarUnidadOperativaStaffSuccess: function (resultado) {
        //    'use strict'
        //    base.Function.CrearGrid();
        //   //pintar grilla
        //},
        //AjaxBuscarTipoUnidadSuccess: function (resultado) {
        //    'use strict'
        //    base.Control.SlcSubTipo().empty();
        //    base.Control.SlcSubTipo().append(new Option(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, ""));
        //    $.each(resultado.Result, function (index, value) {
        //        base.Control.SlcSubTipo().append(new Option(value.Valor, value.Codigo));
        //    });
        //}

        BtnEliminarClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Confirmation({
                message: Pe.ElectroPeru.SGI.Presentacion.Recursos.Validacion.EtiquetEliminacion,
                onAccept: function () {
                    base.Ajax.AjaxEliminar.data = { CodigoUnidadOperativaStaff: data.CodigoUnidadOperativaStaff };
                    base.Ajax.AjaxEliminar.submit();
                }
            });
        },

    };


    base.Ajax = {

        AjaxEliminar: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Politicas.UnidadOperativa.Actions.EliminarUnidadOperativaStaff,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarSuccess
        }),
      
        AjaxGrabar: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Politicas.UnidadOperativa.Actions.RegistrarStaff,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarSuccess
        })
    };

    base.Show = function (CodigoUnidadOperativa) {
        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Politicas.UnidadOperativa.Actions.FormularioUnidadOperativaStaff,
            onSuccess: function () {
                base.Ini();
            },
            data: {
                codigoUnidadOperativa: CodigoUnidadOperativa
            }
        });
        base.Control.CodUnidadOperativa = CodigoUnidadOperativa.CodigoUnidadOperativa
    };


    base.Function = {
        CrearGrid: function () {
            var columns = new Array();
            columns.push({ data: 'NombreSistema', title: Pe.ElectroPeru.SGI.Presentacion.Politicas.UnidadOperativaResource.GridSistema });
            columns.push({ data: 'NombreCompleto', title: Pe.ElectroPeru.SGI.Presentacion.Politicas.UnidadOperativaResource.GridUsuario });
           
            columns.push({
                data: '', title: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                'class': "controls",
                width: "4%",
                actionButtons: [ 
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnEliminarClick } }
                ]
            });


            base.Control.GrdResultado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultUnidadOperativaStaff',
                columns: columns,
                columnDefs: [{ sWidth: '30px', aTargets: [1] }],
                columnDefs: [{ sWidth: '30px', aTargets: [2] }],
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Politicas.UnidadOperativa.Actions.BuscarUnidadOperativaStaff,
                    source: 'Result'
                },
                hasSelectionRows: false
            });
        },
      
    }
};