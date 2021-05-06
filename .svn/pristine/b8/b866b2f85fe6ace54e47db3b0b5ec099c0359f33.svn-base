ns('Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioAgregarProcesosEquipoModal');
Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioAgregarProcesosEquipoModal.Controller = function (opts) {
    var base = this;
    base.Ini = function () {
        base.Control.FormularioEquipoProcesoSubProcesoModel = Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioAgregarProcesosEquipoModal.Models.AsignacionProyectoModel;
        base.Control.EsInstructor = (base.Control.FormularioEquipoProcesoSubProcesoModel != null && base.Control.FormularioEquipoProcesoSubProcesoModel != undefined ? base.Control.FormularioEquipoProcesoSubProcesoModel.Asignacion.EsInstructor : false)
        base.Control.EsAdministrador = (base.Control.FormularioEquipoProcesoSubProcesoModel != null && base.Control.FormularioEquipoProcesoSubProcesoModel != undefined ? base.Control.FormularioEquipoProcesoSubProcesoModel.Asignacion.EsAdministrador : false)

        base.Function.CrearGridProcesos();
        base.Event.BtnBuscarProcesosClick();
        base.Control.BtnGrabarEquipoProceso().on('click', base.Event.BtnActualizarEquipoSubProcesoClick);
        base.Control.TxtNombreEquipo().val(base.Control.DescripcionEquipo + ' - ' + base.Control.CodigoDescripcionEquipo);
        if (opts != null && opts.AceptarSuccess != null && opts.AceptarSuccess)
            base.Event.AceptarSuccess = opts.AceptarSuccess;
    };

    base.Control = {
        CodigoProyecto: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        CodigoProcesoAbreviado: null,
        CodigoProceso: null,
        CodigoAsignacionProceso: null,
        CodigoAsignacionSubProceso: null,
        PlazoEstimadoEquipoProceso: null,
        Contador: 1,
        Contadorchecks: 0,
        CodigoAsignacionEquipoProyecto: null,
        CodigoEquipo: null,
        flagObtenerSubprocesos: false,
        GrdResultadoProcesos: null,
        GrdSubProcesos: null,
        TxtNombreProceso: function () { return $('#txtNombreProceso'); },
        TxtNotaMinimaAprobatoria: function () { return $('#txtNotaMinimaAprobatoria'); },
        TxtNombreEquipo: function () { return $('#txtNombreEquipo'); },
        BtnGrabarEquipoProceso: function () { return $('#btnGrabarEquipoProceso'); },
        BtnCancelarProceso: function () { return $('#btnCancelarEquipoProceso'); },

        TxtCantidadProcesos: function () { return $('#txtCantidadProcesos'); },
        TxtCantidadHorasPlanificadasProceso: function () { return $('#txtCantidadHorasPlanificadasProceso'); },

        TxtCantidadSubProcesos: function () { return $('#txtCantidadSubProcesos'); },
        TxtCantidadHorasPlanificadas: function () { return $('#txtCantidadHorasPlanificadas'); },
        TxtPesoNotasSubProceso: function () { return $('#txtPesoNotasSubProceso'); },
        DescripcionEquipo: null,
        CodigoFamiliaEquipo: null,
        FormularioEquipoProcesoSubProcesoModel: null,
        EsInstructor: null,
        EsAdministrador: null,
    };

    base.Event = {
        BtnBuscarProcesosClick: function () {
            'use strict'
            var filtro = {
                CodigoAsignacionEquipoProyecto: base.Control.CodigoAsignacionEquipoProyecto,
                CodigoProyecto: base.Control.CodigoProyecto,
                CodigoFamiliaEquipo: base.Control.CodigoFamiliaEquipo
            };
            base.Control.GrdResultadoProcesos.Load(filtro);
        },
        BtnBuscarSubProcesosClick: function () {
            'use strict'
            var filtro = {
                CodigoProceso: base.Control.CodigoProceso
            };
            base.Control.GrdSubProcesos.Load(filtro);
        },
        CalcularPesoNotaEquipo: function () {
            'use strict'
            var acumPesoNota = 0.00;
            $.each(document.getElementsByName("ClassPesoNota"), function (index, value) {
                if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined && $(this).parent('td').next().find('.checkSeleccionarEquipoSubProceso').is(':checked')) {
                    acumPesoNota += parseFloat($(this).val());
                }
            });
            base.Control.TxtPesoNotasSubProceso().val(acumPesoNota);
        },
        CalcularPlazoEstimadoEquipo: function () {
            'use strict'
            var acumPlazo = 0;
            $.each(document.getElementsByName("ClassPlazoEstimado"), function (index, value) {
                if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined) {
                    acumPlazo += parseInt($(this).val());
                }
            });
        },

        CalcularHorasPlanificadasEquipo: function () {
            'use strict'
            var acumHorasP = 0;
            $.each(document.getElementsByName("ClassHorasPlanificadas"), function (index, value) {
                if ($(this).val() != '' && $(this).val() != null && $(this).val() != undefined && $(this).parent('td').next().next().find('.checkSeleccionarEquipoSubProceso').is(':checked')) {
                    acumHorasP += parseInt($(this).val());
                }
            });
            base.Control.TxtCantidadHorasPlanificadas().val(acumHorasP);
        },
        ActualizarEstadoEquipoSubProcesoClick: function () {
            'use strict'
            base.Control.CodigoAsignacionSubProceso = $(this).data().codigoasignacionsubproceso;
            base.Control.CodigoAsignacionEquipoSubProceso = $(this).data().codigoasignacionequiposubproceso;
            var numerofila = $(this).data().numerofila;

            if (base.Control.CodigoAsignacionEquipoSubProceso == null && $(this).is(':checked')) {
                base.Ajax.AjaxGrabarEquipoSubProceso.data = {
                    CodigoAsignacionSubProceso: base.Control.CodigoAsignacionSubProceso,
                    CodigoAsignacionEquipoProceso: base.Control.CodigoAsignacionEquipoProceso,
                    HorasPlanificadas: $('#txtHorasPlanificadas_' + numerofila).val(),
                    PesoNota: $('#txtPesoNota_' + numerofila).val(),
                    //PlazoEstimado: $('#txtPlazoEstimado_' + numerofila).val()
                };
                base.Ajax.AjaxGrabarEquipoSubProceso.submit();
            }
            else if (base.Control.CodigoAsignacionEquipoSubProceso != null) {
                base.Ajax.AjaxActualizarEstadoEquipoSubProceso.data = {
                    CodigoAsignacionEquipoSubProceso: base.Control.CodigoAsignacionEquipoSubProceso,
                    EsActivo: $(this).is(':checked')
                };
                base.Ajax.AjaxActualizarEstadoEquipoSubProceso.submit();
            }

            base.Event.CalcularHorasPlanificadasEquipo();
        },
        RegistrarAsignacionEquipoProcesoClick: function () {
            'use strict'
            base.Control.CodigoProceso = $(this).data().codigoproceso;
            base.Control.CodigoAsignacionProceso = $(this).data().codigoasignacionproceso;
            base.Control.CodigoAsignacionEquipoProceso = $(this).data().codigoasignacionequipoproceso;
            base.Control.CodigoAsignacionEquipoProyecto = $(this).data().codigoasignacionequipoproyecto;

            if ($(this).is(':checked') && base.Control.CodigoAsignacionEquipoProceso == null) {
                base.Ajax.AjaxGrabarEquipoProceso.data = {
                    CodigoProceso: base.Control.CodigoProceso,
                    CodigoAsignacionProceso: base.Control.CodigoAsignacionProceso,
                    CodigoAsignacionEquipoProceso: base.Control.CodigoAsignacionEquipoProceso,
                    CodigoAsignacionEquipoProyecto: base.Control.CodigoAsignacionEquipoProyecto
                };
                base.Ajax.AjaxGrabarEquipoProceso.submit();
            }
            else if (base.Control.CodigoAsignacionEquipoProceso != null) {
                base.Ajax.AjaxActualizarEstadoEquipoProceso.data = {
                    CodigoAsignacionEquipoProceso: base.Control.CodigoAsignacionEquipoProceso,
                    EsActivo: $(this).is(':checked')
                };
                base.Ajax.AjaxActualizarEstadoEquipoProceso.submit();
            }
        },
        ObtenerSubProcesoEquipoClick: function () {
            'use strict'
            var numerofila = $(this).data().numerofila;
            if ($(this).is(':checked')) {
                $.each(document.getElementsByName("ClassHorasPlanificadas"), function (index, value) {
                    $(this).prop("disabled", true);
                });
                $.each(document.getElementsByName("ClassPesoNota"), function (index, value) {
                    $(this).prop("disabled", true);
                });
                $.each(document.getElementsByName("ClassPlazoEstimado"), function (index, value) {
                    $(this).prop("disabled", true);
                });
                $('#txtHorasPlanificadas_' + numerofila).prop("disabled", false);
                $('#txtPesoNota_' + numerofila).prop("disabled", false);
                
            }
            else {
                $('#txtHorasPlanificadas_' + numerofila).val('');
                $('#txtPesoNota_' + numerofila).val('');
                base.Event.CalcularPlazoEstimado();
                base.Event.CalcularHorasPlanificadas();
                base.Event.CalcularPesoNotaEquipo();
                $('#txtHorasPlanificadas_' + numerofila).prop("disabled", true);
                $('#txtPesoNota_' + numerofila).prop("disabled", true);
            }
        },
        ObtenerSubProcesoClick: function () {
            'use strict'
            if (base.Control.EsAdministrador == false) {
                $('#txtPesoNotasSubProceso').hide();
            }
            var hasCodigoAsignacionEquipoProceso = null;
            hasCodigoAsignacionEquipoProceso = $(this).data().codigoasignacionequipoproceso;
            if (hasCodigoAsignacionEquipoProceso != null || hasCodigoAsignacionEquipoProceso != undefined) {
                if ($(this).is(':checked')) {
                    $('#blockBtnsSubProcesos').show();
                    $('#blockSubProcesos').show();
                    $('#divGrdResultadoSubProcesos').empty();
                    base.Control.Contador = 1;
                    base.Control.CodigoProceso = $(this).data().codigoproceso;
                    base.Control.CodigoProcesoAbreviado = $(this).data().codigoprocesoabreviado;
                    base.Control.CodigoAsignacionProceso = $(this).data().codigoasignacionproceso;
                    base.Control.PlazoEstimadoEquipoProceso = $(this).data().plazoestimadoequipoproceso;
                    base.Control.CodigoAsignacionEquipoProceso = $(this).data().codigoasignacionequipoproceso;
                    base.Control.CodigoAsignacionEquipoProyecto = $(this).data().codigoasignacionequipoproyecto;

                    base.Function.CrearGridSubProcesos();
                    var filtro = {
                        CodigoProceso: $(this).data().codigoproceso,
                        CodigoAsignacionProceso: $(this).data().codigoasignacionproceso,
                        CodigoAsignacionEquipoProceso: $(this).data().codigoasignacionequipoproceso,
                        CodigoAsignacionEquipoProyecto: $(this).data().codigoasignacionequipoproyecto
                    };
                    base.Control.GrdSubProcesos.Load(filtro);
                }
                else {
                    $('#blockBtnsSubProcesos').hide();
                    $('#blockSubProcesos').hide();
                    $('#divGrdResultadoSubProcesos').empty();
                }
            }
            else {
                $('#blockBtnsSubProcesos').hide();
                $('#blockSubProcesos').hide();
                $('#divGrdResultadoSubProcesos').empty();
            }
        },
        BtnActualizarEquipoSubProcesoClick: function () {
            'use strict'
            var arraySeleccionados = [];
            $.each(base.Control.GrdSubProcesos.core.rows().data(), function (index, value) {
                if ($('#txtHorasPlanificadas_' + value.NumeroFila).val() != '' &&
                       $('#txtHorasPlanificadas_' + value.NumeroFila).val() != null &&
                       $('#txtHorasPlanificadas_' + value.NumeroFila).val() != undefined) {
                    arraySeleccionados.push({
                        CodigoAsignacionEquipoSubProceso: value.CodigoAsignacionEquipoSubProceso,
                        CodigoAsignacionEquipoProceso: base.Control.CodigoAsignacionEquipoProceso,
                        NotaMinimaAprobatoria: base.Control.TxtNotaMinimaAprobatoria().val(),
                        HorasPlanificadas: $('#txtHorasPlanificadas_' + value.NumeroFila).val(),
                        PesoNota: $('#txtPesoNota_' + value.NumeroFila).val(),
                    });
                }

            });
            var acumNota = 0
            var i = 0
            for (i = 0; i < arraySeleccionados.length; i++) {
                acumNota += parseFloat(arraySeleccionados[i].PesoNota);
            }
            if (acumNota != 100) {
                base.Control.Mensaje.Warning({ message: "El Porcentaje total de Peso Nota debe ser del 100%" });
                return false;
            }
            if (base.Control.TxtNotaMinimaAprobatoria().val() == 0 || base.Control.TxtNotaMinimaAprobatoria().val() == '')
            {
                base.Control.Mensaje.Warning({ message: "Se debe de registrar Nota Minima Aprobatoria" });
                return false;
            }
            else if (base.Control.TxtNotaMinimaAprobatoria().val() > 100) {
                base.Control.Mensaje.Warning({ message: "La Nota Minima Aprobatoria tiene un maximo de 100%" });
                return false;
            }
            if (arraySeleccionados.length > 0 && base.Control.CodigoAsignacionEquipoProceso != null) {
                base.Ajax.AjaxActualizarEquipoSubProceso.data = arraySeleccionados;
                base.Ajax.AjaxActualizarEquipoSubProceso.submit();
            }
            else {
                base.Control.Mensaje.Warning({ message: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Resource.MsjValidarGuardarSubProcesoEquipo });
                return false;
            }
        },
        AjaxGrabarEquipoProcesoSuccess: function (resultado) {
            'use strict'
            if (resultado.Result >= 1) {
                if (base.Event.AceptarSuccess != null) {
                    base.Event.AceptarSuccess();
                }
                base.Event.BtnBuscarProcesosClick();
                $('#blockSubProcesos').hide();
                $('#divGrdResultadoSubProcesos').empty();
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
            }
        },
        AjaxActualizarEquipoSubProcesoSuccess: function (resultado) {
            'use strict'
            if (resultado.Result >= 1) {
                if (base.Event.AceptarSuccess != null) {
                    base.Event.AceptarSuccess();
                }
                base.Event.BtnBuscarProcesosClick();
                $('#blockBtnsSubProcesos').hide();
                $('#blockSubProcesos').hide();
                $('#divGrdResultadoSubProcesos').empty();

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
            }
        },
        AjaxActualizarEstadoEquipoProcesoSuccess: function (resultado) {
            'use strict'
            if (resultado.Result == 1) {
                base.Event.BtnBuscarProcesosClick();
                if (base.Event.AceptarSuccess != null) {
                    base.Event.AceptarSuccess();
                }
                $('#blockSubProcesos').hide();
                $('#divGrdResultadoSubProcesos').empty();
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        BtnGridDeleteEquipoSubProcesoClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloEliminar,
                onAccept: function () {
                    base.Ajax.AjaxEliminarEquipoSubProceso.data = {
                        CodigoAsignacionEquipoSubProceso: data.CodigoAsignacionEquipoSubProceso
                    };

                    base.Ajax.AjaxEliminarEquipoSubProceso.submit();
                }
            });
        },
        BtnGridDeleteValidate: function (data, type, full) {
            if (full.CodigoAsignacionEquipoSubProceso != null)
                return true;
            else
                return false;
        },
        TxtMesesAproximadoKeyup: function () {
            //var NroDiasAproximado = base.Control.TxtMesesAproximado().val();
            //base.Control.TxtDiasAproximado().val(parseInt(NroDiasAproximado * 30));
        },
        AjaxActualizarEstadoEquipoSubProcesoSuccess: function (resultado) {
            'use strict'
            if (resultado.Result >= 1) {
                //no es necesario
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        }

    };

    base.Show = function (opts) {
        base.Control.CodigoFamiliaEquipo = opts.CodigoFamiliaEquipo;
        base.Control.CodigoProyecto = opts.CodigoProyecto;
        base.Control.Contadorchecks = 0;
        base.Control.CodigoEquipo = opts.CodigoEquipo;
        base.Control.CodigoAsignacionEquipoProyecto = opts.CodigoAsignacionEquipoProyecto;
        base.Control.DescripcionEquipo = opts.DescripcionEquipo;
        base.Control.CodigoDescripcionEquipo = opts.CodigoDescripcionEquipo;
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Resource.EtiquetaVentanaAgregarProcesoEquipo,
            size: "size-wide",
            close: function () {
            }
        });
        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Actions.FormularioAgregarProcesoModal,
            onSuccess: function () {
                base.Ini();
            }
        });
    };

    base.Ajax = {
        AjaxGrabarEquipoProceso: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Actions.RegistrarAsignacionEquipoProceso,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarEquipoProcesoSuccess
        }),
        AjaxGrabarEquipoSubProceso: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Actions.RegistrarAsignacionEquipoSubProceso,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarEquipoSubProcesoSuccess
        }),
        AjaxActualizarEquipoSubProceso: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Actions.ActualizarAsignacionEquipoSubProceso,
            autoSubmit: false,
            onSuccess: base.Event.AjaxActualizarEquipoSubProcesoSuccess
        }),
        AjaxActualizarEstadoEquipoProceso: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Actions.ActualizarEstadoEquipoProceso,
            autoSubmit: false,
            onSuccess: base.Event.AjaxActualizarEstadoEquipoProcesoSuccess
        }),
        AjaxActualizarEstadoEquipoSubProceso: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Actions.ActualizarEstadoEquipoSubProceso,
            autoSubmit: false,
            onSuccess: base.Event.AjaxActualizarEstadoEquipoSubProcesoSuccess
        }),
    };

    base.Function = {
        roundNumber: function (num, scale) {
            if (!("" + num).includes("e")) {
                return +(Math.round(num + "e+" + scale) + "e-" + scale);
            } else {
                var arr = ("" + num).split("e");
                var sig = ""
                if (+arr[1] + scale > 0) {
                    sig = "+";
                }
                return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
            }
        },
        CrearGridProcesos: function () {
            var columns = new Array();
            columns.push({
                data: '',
                title: '',
                "class": "text-center",
                width: "5%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input name='chkProcesoEquipo' class='checkProcesoEquipo' type='radio' " +
                             "data-codigoasignacionequipoproceso='" + full.CodigoAsignacionEquipoProceso + "'" +
                             "data-codigoproceso='" + full.CodigoProceso + "'" +
                             "data-plazoestimadoequipoproceso='" + full.PlazoEstimadoEquipoProceso + "'" +
                             "data-codigoasignacionequipoproyecto='" + full.CodigoAsignacionEquipoProyecto + "'" +
                             "data-codigoasignacionproceso='" + full.CodigoAsignacionProceso + "' data-codigoprocesoabreviado='" + full.CodigoProcesoAbreviado + "'>";
                    return cadena;
                },
            });
            columns.push({
                data: 'NumeroFila',
                "class": "text-center",
                title: '#',
                width: "5%"
            });
            columns.push({
                data: 'CodigoProcesoAbreviado',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Resource.GridProceso,
                width: "30%"

            });
            columns.push({
                data: 'NombreProcesoEspaniol',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Resource.GridDescripcionProceso,
                width: "65%"
            });
            columns.push({
                data: '',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Resource.GridHorasPlanificadas,
                width: "10%",
                mRender: function (data, type, full) {
                    return '<input value="' + (full.HorasPlanificadasEquipoProceso != null ? full.HorasPlanificadasEquipoProceso : '') + '" type="text" style="width:50px;text-align:center;" disabled>';
                }
            });
            columns.push({
                data: '',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Resource.GridIndicadorAplicaProceso,
                "class": "text-center",
                width: "15%",
                mRender: function (data, type, full) {
                    var cadena = "";
                    cadena = "<input " + (full.EsActivoEquipoProceso == true ? " checked " : "") +
                             " data-codigoasignacionequipoproceso='" + full.CodigoAsignacionEquipoProceso + "'" +
                             " data-codigoproceso='" + full.CodigoProceso + "'" +
                             " data-codigoasignacionequipoproyecto='" + full.CodigoAsignacionEquipoProyecto + "'" +
                             " data-codigoasignacionproceso='" + full.CodigoAsignacionProceso + "' class='checkSeleccionarEquipoProceso' type='checkbox' name='gridCheckRecordCategoria'>";
                    return cadena;
                },
            });
            base.Control.GrdResultadoProcesos = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoProcesosModal',
                columns: columns,
                hasSelectionRows: false,
                hasPaging: false,
                hasPagingServer: false,
                columnDefs: [{ "width": "5%", "targets": [0] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Actions.BuscarEquipoProcesosPorProyecto,
                    source: 'Result'
                },
                events: [
                    { type: 'click', selector: '.checkProcesoEquipo', callBack: base.Event.ObtenerSubProcesoClick },
                    { type: 'click', selector: '.checkSeleccionarEquipoProceso', callBack: base.Event.RegistrarAsignacionEquipoProcesoClick }
                ],
                returnCallbackComplete: function (instancia, records) {
                    base.Control.TxtCantidadProcesos().val(records.length);
                    var acumHoras = 0; var acumPlazo = 0;
                    for (var i = 0; i < records.length; i++) {
                        if (records[i].HorasPlanificadasEquipoProceso != null && records[i].EsActivoEquipoProceso)
                            acumHoras += parseInt(records[i].HorasPlanificadasEquipoProceso);
                        if (records[i].PlazoEstimadoEquipoProceso != null && records[i].EsActivoEquipoProceso)
                            acumPlazo += parseInt(records[i].PlazoEstimadoEquipoProceso);
                    }
                    base.Control.TxtCantidadHorasPlanificadasProceso().val(acumHoras);
                }
            });
        },
        CrearGridSubProcesos: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroFila',
                title: '#',
                width: "5%"
            });
            columns.push({
                data: '',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Resource.GridProceso,
                width: "5%",
                mRender: function (data, type, full) {
                    return base.Control.CodigoProcesoAbreviado;
                }
            });
            columns.push({
                data: 'NombreSubProcesoEspaniol',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Resource.GridComposicionCurso,
                width: "35%"
            });
            columns.push({
                data: '',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Resource.GridHorasPlanificadas,
                width: "10%",
                mRender: function (data, type, full) {
                    return '<input  ' + (base.Control.EsInstructor == true ? "disabled" : "") + '    value="' + (full.HorasPlanificadasEquipoSubProceso != null ? full.HorasPlanificadasEquipoSubProceso : '') + '" type="text" id="txtHorasPlanificadas_' + full.NumeroFila
                        + '" class="ClassHorasPlanificadas" name="ClassHorasPlanificadas" mask="integer" style="width:50px;text-align:center;  ">';
                }
            });
            if (base.Control.EsAdministrador == true) {
                columns.push({
                    data: '',
                    title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Resource.GridPesoNotaSubProceso,
                    width: "10%",
                    mRender: function (data, type, full) {
                        return '<input  ' + (base.Control.EsInstructor == true ? "disabled" : "") + '    value="' + (full.PesoNota != null ? full.PesoNota : '') + '" type="text" id="txtPesoNota_' + full.NumeroFila
                            + '" class="ClassPesoNota" name="ClassPesoNota" mask="integer" style="width:50px;text-align:center;  ">';
                    }
                });
            }
            columns.push({
                data: '',
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Resource.GridIndicadorAplicaSubProceso,
                "class": "text-center",
                width: "25%",
                mRender: function (data, type, full) {
                    var cadena = "";

                    cadena = "<input " + (full.EsActivoEquipoSubProceso == true ? " checked " : "") +
                            " data-numerofila='" + full.NumeroFila + "'" +
                            " data-codigoasignacionequipoproceso='" + full.CodigoAsignacionEquipoProceso + "'" +
                            " data-codigoasignacionequiposubproceso='" + full.CodigoAsignacionEquipoSubProceso + "'" +
                            " data-codigoasignacionsubproceso='" + full.CodigoAsignacionSubProceso + "'" +
                            //" class='checkSeleccionarEquipoSubProceso' type='checkbox' name='gridCheckRecordCategoria'   >";
                    " class='checkSeleccionarEquipoSubProceso' type='checkbox' name='gridCheckRecordCategoria' " + (base.Control.EsInstructor == true ? " disabled" : "") + ">";

                    return cadena;
                },
            });
            base.Control.GrdSubProcesos = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoSubProcesos',
                columns: columns,
                hasSelectionRows: false,
                hasPaging: false,
                hasPagingServer: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Actions.BuscarEquipoSubProcesosPorProyecto,
                    source: 'Result'
                },
                events: [
                    { type: 'click', selector: '.checkSubProceso', callBack: base.Event.ObtenerSubProcesoEquipoClick },
                    { type: 'keyup', selector: '.ClassPlazoEstimado', callBack: base.Event.CalcularPlazoEstimadoEquipo },
                    { type: 'keyup', selector: '.ClassHorasPlanificadas', callBack: base.Event.CalcularHorasPlanificadasEquipo },
                    { type: 'keyup', selector: '.ClassPesoNota', callBack: base.Event.CalcularPesoNotaEquipo },
                    { type: 'click', selector: '.checkSeleccionarEquipoSubProceso', callBack: base.Event.ActualizarEstadoEquipoSubProcesoClick },

                ],
                returnCallbackComplete: function (instancia, records) {
                    Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
                    base.Control.TxtCantidadSubProcesos().val(records.length);
                    var acumHorasP = 0; var acumPlazo = 0; var acumPesoNota = 0.00;

                    for (var i = 0; i < records.length; i++) {
                        if (records[i].HorasPlanificadasEquipoSubProceso != null && records[i].EsActivoEquipoSubProceso)
                            acumHorasP += parseInt(records[i].HorasPlanificadasEquipoSubProceso);
                        if (records[i].PlazoEstimadoEquipoSubProceso != null && records[i].EsActivoEquipoSubProceso)
                            acumPlazo += parseInt(records[i].PlazoEstimadoEquipoSubProceso);
                        if (records[i].PesoNota != null && records[i].EsActivoEquipoSubProceso)
                            acumPesoNota += parseFloat(records[i].PesoNota);
                    }
                    base.Control.TxtCantidadHorasPlanificadas().val(acumHorasP);
                    if (base.Control.EsAdministrador == true) {
                        base.Control.TxtPesoNotasSubProceso().val(acumPesoNota.toFixed(2));
                    }
                    if (records.length > 0) {
                        base.Control.TxtNotaMinimaAprobatoria().val(records[0].NotaMinimaAprobatoria);
                    }
                    var NroMesesAproximado = '';
                    if (base.Control.PlazoEstimadoEquipoProceso != null && base.Control.PlazoEstimadoEquipoProceso != 0) {
                        NroMesesAproximado = base.Function.roundNumber((base.Control.PlazoEstimadoEquipoProceso / 30), 2)
                    }
                }
            });
        },
    };
};