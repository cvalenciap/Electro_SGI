ns('Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioAgregarEquiposModal');
Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioAgregarEquiposModal.Controller = function (opts) {
    var base = this;
    var isMultiSelect = true;

    base.Ini = function () {
        'use strict'
        base.Control.TxtNombreProceso().val(base.Control.NombreProceso);
        base.Control.TxtNombreEquipo().keypress(base.Event.BtnBaseEquipoBuscarKeyPress);
        base.Control.BtnBuscarEquipo().click(base.Event.BtnBuscarEquipoClick);
        base.Control.BtnCancelar().click(base.Event.BtnCancelarClick);
        base.Control.BtnAceptar().click(base.Event.BtnAceptarClick);

        if (opts != null && opts.AceptarSuccess != null && opts.AceptarSuccess)
            base.Event.AceptarSuccess = opts.AceptarSuccess;

        base.Function.CrearGridEquipos();
        base.Event.BtnBuscarEquipoClick();
    };

    base.Control = {
        DlgForm: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        BtnBuscarEquipo: function () { return $('#btnBuscarEquipoModal'); },
        BtnCancelar: function () { return $('#btnCancelarEquipoBusqueda'); },
        BtnAceptar: function () { return $('#btnGrabarEquipoBusqueda'); },
        SlcFiltroBuscarEquipo: function () { return $('#slcFiltroBuscarEquipo'); },
        TxtNombreEquipo: function(){ return $('#txtNombreEquipo'); },
        GrdResultadoProcesos: null, 
        CodigoProceso: null,
        CodigoProyecto: null,
        Contador: 1,
        TxtNombreProceso: function () { return $('#txtNombreProceso'); },
    };

    base.Event = {
        BtnBaseEquipoBuscarKeyPress: function(evento){
            var key = Pe.GMD.UI.Web.Components.Util.GetKeyCode(evento);
            var esValido = !(evento && key == 13);
            if (esValido == false) {
                base.Event.BtnBuscarEquipoClick();
            }
            return esValido;
        },
        BtnBuscarEquipoClick: function () {
            'use strict'
            var filtro;
            if (base.Control.SlcFiltroBuscarEquipo().val() == "1") {
                filtro = {
                    DescripcionEquipo: base.Control.TxtNombreEquipo().val(),
                    DescripcionFamilia: ""
                };
            } else {
                filtro = {
                    DescripcionEquipo: "",
                    DescripcionFamilia: base.Control.TxtNombreEquipo().val()
                };
            }            
            base.Control.GrdResultadoEquipos.Load(filtro);
        },
        BtnCancelarClick: function () {
            'use strict'
            base.Control.DlgForm.divDialog.close();
        },
        BtnAceptarClick: function () {           
            'use strict'           
            var totalEquipoSelected = base.Control.EquiposSeleccionados.length;
            if (totalEquipoSelected > 0 && totalEquipoSelected != undefined ) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    indicadorModal: false,
                    onAccept: function () {  
                        base.Ajax.AjaxGrabarEquipoSeleccionados.data = base.Control.EquiposSeleccionados;
                        base.Ajax.AjaxGrabarEquipoSeleccionados.submit();
                    }
                });
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Resource.EtiquetaSeleccioneEquipo });
                return false;
            }
 
        },
        BtnGridCheckBoxRepresentanteClick: function (that, row) {
            if (isMultiSelect) {
                $.each(row, function (index, value) {
                    var indexItem = base.Control.EquiposSeleccionados.map(function (e) { return e.CodigoEquipo; }).indexOf(value.CodigoEquipo);
                    if ($(that).is(":checked")) {
                        if (indexItem == -1) {
                            value.CodigoProyecto = base.Control.CodigoProyecto;
                            base.Control.EquiposSeleccionados.push(value);
                        }
                    } else {
                        if (indexItem != -1) {
                            base.Control.EquiposSeleccionados.splice(indexItem, 1);
                        }
                    }
                })
            } else {
                $.each(row, function (index, value) {
                    base.Control.EquiposSeleccionados = [];
                    base.Control.EquiposSeleccionados.push(value);
                });
            }
        },
        AjaxGrabarEquipoSeleccionadosSuccess: function (resultado) {
            if (resultado.Result.CantidadParticipanteSelect == 1) {
                if (resultado.Result.CantidadParticipanteSelect == resultado.Result.CantidadParticipanteCargadas) {                    
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                    });
                    if (base.Event.AceptarSuccess != null) {
                        base.Event.AceptarSuccess();
                    }
                }
                else if (resultado.Result.CantidadParticipanteSelect != resultado.Result.CantidadParticipanteCargadas) {
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: 'Se encontró ' + resultado.Result.CantidadParticipantesNoCargadas + ' equipo registrado.'
                    });
                    if (base.Event.AceptarSuccess != null) {
                        base.Event.AceptarSuccess();
                    }
                }
                else {
                    base.Control.Mensaje.Warning({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                    });
                }
            }
            else if (resultado.Result.CantidadParticipanteSelect > 1) {
                if (resultado.Result.CantidadParticipanteSelect == resultado.Result.CantidadParticipanteCargadas) {
                    base.Control.Mensaje.Information({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                    });
                    if (base.Event.AceptarSuccess != null) {
                        base.Event.AceptarSuccess();
                    }
                }
                else if (resultado.Result.CantidadParticipanteSelect != resultado.Result.CantidadParticipanteCargadas) {
                    if (resultado.Result.CantidadParticipanteSelect == resultado.Result.CantidadParticipantesNoCargadas) {
                        base.Control.Mensaje.Information({
                            title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                            message: 'Se encontró ' + resultado.Result.CantidadParticipantesNoCargadas + ' equipos registrados.'
                        });
                    }
                    else {
                        base.Control.Mensaje.Information({
                            title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                            message: 'Se cargo con éxito, ' + resultado.Result.CantidadParticipanteCargadas + ' equipos y ' + resultado.Result.CantidadParticipantesNoCargadas + ' ya existian registrados.'
                        });
                    }
                    if (base.Event.AceptarSuccess != null) {
                        base.Event.AceptarSuccess();
                    }
                }
                else {
                    base.Control.Mensaje.Warning({
                        title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                        message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                    });
                }
            }
            base.Control.DlgForm.divDialog.close();
        },
    };

    base.Show = function (isMultiSelectParam, listaEquipos, filtro) {
        base.Control.CodigoProyecto = filtro.CodigoProyecto;
        if (isMultiSelectParam === true || isMultiSelectParam === false) {
            isMultiSelect = isMultiSelectParam;
        }

        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Resource.EtiquetaFormularioAgregarEquipo,
            size: "size-wide",
            close: function () {
            }
        });

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Actions.FormularioAgregarEquiposModal,
            onSuccess: function () {
                base.Control.EquiposSeleccionados = listaEquipos;
                base.Ini();
            }
        });
    };

    base.Ajax = {
        AjaxGrabarEquipoSeleccionados: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioProceso.Actions.RegistrarAsignacionEquiposProyecto,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarEquipoSeleccionadosSuccess
        }),
    };

    base.Function = {
        CrearGridEquipos: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                "class": "text-center",
                title: '#',
                width: "5%"
            });

            columns.push({
                data: 'DescripcionEquipo',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Resource.GridModeloDescripcion,
                width: "40%"
            });

            columns.push({
                data: 'CodigoDescripcionEquipo',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Resource.GridModeloEquipo,
                width: "20%"
            });

            columns.push({
                data: 'DescripcionFamilia',
                "class": "text-center",              
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Resource.GridFamiliaEquipo,
                width: "30%"
            });            

            base.Control.GrdResultadoEquipos = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoEquipos',
                columns: columns,
                hasPaging: true,
                hasPagingServer: true,
                hasSelectionRows: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                hasTypeSelectionRows: (isMultiSelect ? "checkbox" : "radio"),
                selectionRowsEvent: { on: 'click', callBack: base.Event.BtnGridCheckBoxRepresentanteClick },
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Actions.BuscarEquipos,
                    source: 'Result'
                }
            });
        },

        ObtenerEquiposSeleccionados: function () {
            return base.Control.EquiposSeleccionados;
        }
    };    
};