/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 19102017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.IngresoHoras.Index');
Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.IngresoHoras.Index.Controller = function () {
    var base = this;

    var lastSel = $("#slcFormaIngreso option:selected");
    var flgClick = false;
    var flgExiste = false;
    
    base.Ini = function () {
        'use strict'
        Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
        base.Function.CrearGrid();
        base.Control.BtnBuscar().click(base.Event.BtnBuscarClick);

        base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmIngresoHoras(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos
        });

        base.Control.ValidadorDatosPromedio = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmDatosPromedio(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            //validationsExtra: base.Function.ValidacionExtraDatosPromedio()
        });

        base.Control.ValidadorContratistas = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmContratistas(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraContratistas()
        });

        base.Control.BtnRegresarBandejaIngresoHoras().off('click');
        base.Control.BtnRegresarBandejaIngresoHoras().on('click', base.Event.BtnRegresarBandejaIngresoHorasClick);

        //base.Control.SlcAnios().off('change');
        //base.Control.SlcAnios().on('change', base.Event.SlcCargaMeses);

        base.Control.SlcFormaIngreso().off('change');
        base.Control.SlcFormaIngreso().on('change', base.Event.SlcFormaIngresoChange);

        base.Control.SlcFormaIngreso().off('click');
        base.Control.SlcFormaIngreso().on('click', base.Event.SlcFormaIngresoClick);

        base.Control.BtnGuardarIngresoHoras().off('click');
        base.Control.BtnGuardarIngresoHoras().on('click', base.Event.BtnGuardarIngresoHorasClick);

        base.Control.BtnGuardarDatosPromedio().off('click');
        base.Control.BtnGuardarDatosPromedio().on('click', base.Event.BtnGuardarDatosPromedioClick);

        base.Control.BtnGuardarContratistas().off('click');
        base.Control.BtnGuardarContratistas().on('click', base.Event.BtnGuardarContratistasClick);

        base.Control.DlgFormularioEmpresaColaborador = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.FormularioBuscadorEmpresa.Controller({
            AceptarSuccess: base.Event.ObtenerEmpresaColaborador
        });

        base.Control.BtnBuscarEmpresaColaborador().off('click');
        base.Control.BtnBuscarEmpresaColaborador().on('click', base.Event.BtnBuscarEmpresaColaboradorClick);

        base.Control.SlcProyecto().off('change');
        base.Control.SlcProyecto().on('change', base.Event.SlcProyectoChange);
        base.Control.SlcProyecto().off('click');
        base.Control.SlcProyecto().on('click', base.Event.SlcProyectoClick);

        base.Control.SlcAnios().off('change');
        base.Control.SlcAnios().on('change', base.Event.SlcAniosChange);

        base.Control.SlcMeses().off('change');
        base.Control.SlcMeses().on('change', base.Event.SlcMesesChange);
                
        base.Control.TxtPersonalSubContratista().off('keyup');
        base.Control.TxtPersonalSubContratista().on('keyup', base.Event.LimpiarTotalPorDetalleKeypress);
        base.Control.TxtHHTSubContratista().off('keyup');
        base.Control.TxtHHTSubContratista().on('keyup', base.Event.LimpiarTotalPorDetalleKeypress);

        base.Control.TxtPersonalSubContratista2().off('keyup');
        base.Control.TxtPersonalSubContratista2().on('keyup', base.Event.LimpiarTotalPorDetalleKeypress2);
        base.Control.TxtHHTSubContratista2().off('keyup');
        base.Control.TxtHHTSubContratista2().on('keyup', base.Event.LimpiarTotalPorDetalleKeypress2);

        base.Control.TxtNumeroEmpleados().off('keyup');
        base.Control.TxtNumeroEmpleados().on('keyup', base.Event.LimpiarNumeroPorDetalleKeypress);
        base.Control.TxtNumeroObreros().off('keyup');
        base.Control.TxtNumeroObreros().on('keyup', base.Event.LimpiarNumeroPorDetalleKeypress);
        base.Control.TxtHHTEmpleados().off('keyup');
        base.Control.TxtHHTEmpleados().on('keyup', base.Event.LimpiarNumeroPorDetalleKeypress);
        base.Control.TxtHHTObreros().off('keyup');
        base.Control.TxtHHTObreros().on('keyup', base.Event.LimpiarNumeroPorDetalleKeypress);

        base.Control.TxtNumeroEmpleados2().off('keyup');
        base.Control.TxtNumeroEmpleados2().on('keyup', base.Event.LimpiarNumeroPorDetalleKeypress2);
        base.Control.TxtNumeroObreros2().off('keyup');
        base.Control.TxtNumeroObreros2().on('keyup', base.Event.LimpiarNumeroPorDetalleKeypress2);
        base.Control.TxtHHTEmpleados2().off('keyup');
        base.Control.TxtHHTEmpleados2().on('keyup', base.Event.LimpiarNumeroPorDetalleKeypress2);
        base.Control.TxtHHTObreros2().off('keyup');
        base.Control.TxtHHTObreros2().on('keyup', base.Event.LimpiarNumeroPorDetalleKeypress2);

        //Sumatorias
        base.Control.TxtNumeroEmpleadosStracon().off('keyup');
        base.Control.TxtNumeroEmpleadosStracon().on('keyup', base.Event.CalcularTotalEmpleadosStracon);
        base.Control.TxtNumeroObrerosStracon().off('keyup');
        base.Control.TxtNumeroObrerosStracon().on('keyup', base.Event.CalcularTotalEmpleadosStracon);
        base.Control.TxtHHTEmpleadosStracon().off('keyup');
        base.Control.TxtHHTEmpleadosStracon().on('keyup', base.Event.CalcularTotalHHTStracon);
        base.Control.TxtHHTObrerosStracon().off('keyup');
        base.Control.TxtHHTObrerosStracon().on('keyup', base.Event.CalcularTotalHHTStracon);

        //Btn Cancelar
        base.Control.BtnCancelarIngresoHoras().off('click');
        base.Control.BtnCancelarIngresoHoras().on('click', base.Event.BtnCancelarIngresoHorasClick);
        base.Control.BtnCancelarDatosPromedio().off('click');
        base.Control.BtnCancelarDatosPromedio().on('click', base.Event.BtnCancelarDatosPromedioClick);
        base.Control.BtnCancelarContratistas().off('click');
        base.Control.BtnCancelarContratistas().on('click', base.Event.BtnCancelarContratistasClick);
    };
    base.Control = {
        BtnRegresarBandejaIngresoHoras: function () { return $('#btnRegresarBandejaIngresoHoras'); },
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        BtnBuscar: function () { return $('#btnBuscar'); },
        BtnGuardarIngresoHoras: function () { return $('#btnGuardarIngresoHoras'); },
        BtnGuardarDatosPromedio: function () { return $('#btnGuardarDatosPromedio'); },
        BtnGuardarContratistas: function () { return $('#btnGuardarContratistas'); },

        BtnCancelarIngresoHoras: function () { return $('#btnCancelarIngresoHoras'); },
        BtnCancelarDatosPromedio: function () { return $('#btnCancelarDatosPromedio'); },
        BtnCancelarContratistas: function () { return $('#btnCancelarContratistas'); },

        BtnBuscarEmpresaColaborador: function () { return $('#btnBuscarEmpresaColaborador'); },
        DlgFormularioEmpresaColaborador: null,

        FrmIngresoHoras: function () { return $('#frmIngresoHoras'); },
        FrmDatosPromedio: function () { return $('#frmDatosPromedio'); },
        FrmContratistas: function () { return $('#frmContratistas'); },

        HddCodigoEmpresaColaborador: function () { return $('#hddCodigoEmpresaColaborador'); },
        SlcProyecto: function () { return $('#slcProyecto'); },
        SlcAnios: function () { return $('#slcAnios'); },
        SlcMeses: function () { return $('#slcMeses'); },
        SlcFormaIngreso: function () { return $('#slcFormaIngreso'); },
        TxtNumeroDiasTrabajados: function () { return $('#txtNumeroDiasTrabajados'); },
        TxtNumeroEmpleadosStracon: function () { return $('#txtNumeroEmpleadosStracon'); },
        TxtHHTEmpleadosStracon: function () { return $('#txtHHTEmpleadosStracon'); },
        TxtNumeroObrerosStracon: function () { return $('#txtNumeroObrerosStracon'); },
        TxtHHTObrerosStracon: function () { return $('#txtHHTObrerosStracon'); },
        TxtNombreEmpresaColaborador: function () { return $('#txtNombreEmpresaColaborador'); },
        FormularioModelo: null,
        FormularioModeloContratista: null,

        TxtPersonalSubContratista: function () { return $('#txtPersonalSubContratista'); },
        TxtHHTSubContratista: function () { return $('#txtHHTSubContratista'); },
        TxtNumeroEmpleados: function () { return $('#txtNumeroEmpleados'); },
        TxtHHTEmpleados: function () { return $('#txtHHTEmpleados'); },
        TxtNumeroObreros: function () { return $('#txtNumeroObreros'); },
        TxtHHTObreros: function () { return $('#txtHHTObreros'); },

        TxtPersonalSubContratista2: function () { return $('#txtPersonalSubContratista2'); },
        TxtHHTSubContratista2: function () { return $('#txtHHTSubContratista2'); },
        TxtNumeroEmpleados2: function () { return $('#txtNumeroEmpleados2'); },
        TxtHHTEmpleados2: function () { return $('#txtHHTEmpleados2'); },
        TxtNumeroObreros2: function () { return $('#txtNumeroObreros2'); },
        TxtHHTObreros2: function () { return $('#txtHHTObreros2'); },

        //Totales
        TxtTotalPersonalStracon: function () { return $('#txtTotalPersonalStracon'); },
        TxtTotalHHTStracon: function () { return $('#txtTotalHHTStracon'); },
        TxtTotalPersonalSubContratistas: function () { return $('#txtTotalPersonalSubContratistas'); },
        TxtTotalHHTSubContratistas: function () { return $('#txtTotalHHTSubContratistas'); },
        TxtTotalGeneralPersonal: function () { return $('#txtTotalGeneralPersonal'); },
        TxtTotalGeneralHHT: function () { return $('#txtTotalGeneralHHT'); },

        bExiste: function () { return $('#hdnExiste'); },
    };
    base.Event = {
        BtnRegresarBandejaIngresoHorasClick: function () {
            location.href = Pe.ElectroPeru.SGI.Presentacion.Base.Actions.HorasTrabajadas;
        },
        CalcularTotalHHTStracon: function () {
            'use strict'
            base.Control.TxtTotalHHTStracon().val((base.Control.TxtHHTEmpleadosStracon().val() != '' ? parseFloat(base.Control.TxtHHTEmpleadosStracon().val()) : 0) +
                (base.Control.TxtHHTObrerosStracon().val() != '' ? parseFloat(base.Control.TxtHHTObrerosStracon().val()) : 0));

            base.Control.TxtTotalGeneralHHT().val((base.Control.TxtTotalHHTStracon().val() != '' ? parseFloat(base.Control.TxtTotalHHTStracon().val()) : 0) +
                (base.Control.TxtTotalHHTSubContratistas().val() != '' ? parseFloat(base.Control.TxtTotalHHTSubContratistas().val()) : 0));
        },
        CalcularTotalEmpleadosStracon: function () {
            'use strict'
            base.Control.TxtTotalPersonalStracon().val((base.Control.TxtNumeroEmpleadosStracon().val() != '' ? parseInt(base.Control.TxtNumeroEmpleadosStracon().val()) : 0) +
                (base.Control.TxtNumeroObrerosStracon().val() != '' ? parseInt(base.Control.TxtNumeroObrerosStracon().val()) : 0));

            base.Control.TxtTotalGeneralPersonal().val((base.Control.TxtTotalPersonalStracon().val() != '' ? parseInt(base.Control.TxtTotalPersonalStracon().val()) : 0) +
               (base.Control.TxtTotalPersonalSubContratistas().val() != '' ? parseInt(base.Control.TxtTotalPersonalSubContratistas().val()) : 0));
        },
        BtnCancelarIngresoHorasClick: function () {
            'use strict'
            base.Control.SlcProyecto().val('');
            base.Control.SlcAnios().val('');
            base.Control.SlcMeses().val('');            
            base.Control.SlcFormaIngreso().prop('disabled', false);
            base.Event.LimpiarControlesFrmIngresoHoras();
            base.Event.LimpiarControlesContratistas();
            base.Event.LimpiarControlesDatosPromedio();
            base.Event.LimpiarControlesSumatorias();
        },
        BtnCancelarDatosPromedioClick: function () {
            base.Event.LimpiarControlesDatosPromedio();
            base.Event.LimpiarControlesSumatorias();
        },
        BtnCancelarContratistasClick: function () {
            base.Event.LimpiarControlesContratistas();
            base.Event.LimpiarControlesSumatorias();
        },
        LimpiarTotalPorDetalleKeypress: function (event) {
            'use strict'
            var attrId = $(this).attr('id');
            if (attrId == "txtPersonalSubContratista") {
                base.Control.TxtNumeroEmpleados().val('');
                base.Control.TxtNumeroObreros().val('');
            }
            else if (attrId == "txtHHTSubContratista") {
                base.Control.TxtHHTEmpleados().val('');
                base.Control.TxtHHTObreros().val('');
            }
        },
        LimpiarTotalPorDetalleKeypress2: function (event) {
            'use strict'
            var attrId = $(this).attr('id');
            if (attrId == "txtPersonalSubContratista2") {
                base.Control.TxtNumeroEmpleados2().val('');
                base.Control.TxtNumeroObreros2().val('');
                base.Control.TxtTotalPersonalSubContratistas().val(base.Control.TxtPersonalSubContratista2().val());

                base.Control.TxtTotalGeneralPersonal().val((base.Control.TxtTotalPersonalStracon().val() != '' ? parseInt(base.Control.TxtTotalPersonalStracon().val()) : 0) +
               (base.Control.TxtTotalPersonalSubContratistas().val() != '' ? parseInt(base.Control.TxtTotalPersonalSubContratistas().val()) : 0));
            }
            else if (attrId == "txtHHTSubContratista2") {
                base.Control.TxtHHTEmpleados2().val('');
                base.Control.TxtHHTObreros2().val('');
                base.Control.TxtTotalHHTSubContratistas().val(base.Control.TxtHHTSubContratista2().val());

                base.Control.TxtTotalGeneralHHT().val((base.Control.TxtTotalHHTStracon().val() != '' ? parseFloat(base.Control.TxtTotalHHTStracon().val()) : 0) +
               (base.Control.TxtTotalHHTSubContratistas().val() != '' ? parseFloat(base.Control.TxtTotalHHTSubContratistas().val()) : 0));
            }
        },
        LimpiarNumeroPorDetalleKeypress: function (event) {
            'use strict'
            var attrId = $(this).attr('id');            
            if (attrId == "txtNumeroEmpleados" || attrId == "txtNumeroObreros") {
                base.Control.TxtPersonalSubContratista().val((base.Control.TxtNumeroEmpleados().val() != '' ? parseInt(base.Control.TxtNumeroEmpleados().val()) : 0) +
                    (base.Control.TxtNumeroObreros().val() != '' ? parseInt(base.Control.TxtNumeroObreros().val()) : 0));
            }
            else if (attrId == "txtHHTEmpleados" || attrId == "txtHHTObreros") {
                base.Control.TxtHHTSubContratista().val((base.Control.TxtHHTEmpleados().val() != '' ? parseFloat(base.Control.TxtHHTEmpleados().val()) : 0) +
                    (base.Control.TxtHHTObreros().val() != '' ? parseFloat(base.Control.TxtHHTObreros().val()) : 0));
            }
        },
        LimpiarNumeroPorDetalleKeypress2: function (event) {
            'use strict'
            var attrId = $(this).attr('id');            
            if (attrId == "txtNumeroEmpleados2" || attrId == "txtNumeroObreros2") {
                base.Control.TxtPersonalSubContratista2().val((base.Control.TxtNumeroEmpleados2().val() != '' ? parseInt(base.Control.TxtNumeroEmpleados2().val()) : 0) +
                    (base.Control.TxtNumeroObreros2().val() != '' ? parseInt(base.Control.TxtNumeroObreros2().val()) : 0));

                base.Control.TxtTotalPersonalSubContratistas().val(base.Control.TxtPersonalSubContratista2().val());

                base.Control.TxtTotalGeneralPersonal().val((base.Control.TxtTotalPersonalStracon().val() != '' ? parseInt(base.Control.TxtTotalPersonalStracon().val()) : 0) +
               (base.Control.TxtTotalPersonalSubContratistas().val() != '' ? parseInt(base.Control.TxtTotalPersonalSubContratistas().val()) : 0));
            }
            else if (attrId == "txtHHTEmpleados2" || attrId == "txtHHTObreros2") {
                base.Control.TxtHHTSubContratista2().val((base.Control.TxtHHTEmpleados2().val() != '' ? parseFloat(base.Control.TxtHHTEmpleados2().val()) : 0) +
                    (base.Control.TxtHHTObreros2().val() != '' ? parseFloat(base.Control.TxtHHTObreros2().val()) : 0));

                base.Control.TxtTotalHHTSubContratistas().val(base.Control.TxtHHTSubContratista2().val());

                base.Control.TxtTotalGeneralHHT().val((base.Control.TxtTotalHHTStracon().val() != '' ? parseFloat(base.Control.TxtTotalHHTStracon().val()) : 0) +
                (base.Control.TxtTotalHHTSubContratistas().val() != '' ? parseFloat(base.Control.TxtTotalHHTSubContratistas().val()) : 0));
            }
        },
        SlcProyectoClick: function () {
            flgClick = false;
        },
        SlcProyectoChange: function () {
            'use strict'
            if (base.Control.SlcProyecto().val() != null && base.Control.SlcProyecto().val() != '' &&
                base.Control.SlcAnios().val() != null && base.Control.SlcAnios().val() != '' &&
                base.Control.SlcMeses().val() != null && base.Control.SlcMeses().val() != '') {
                base.Ajax.AjaxObtenerRegistro.data = {
                    CodigoProyecto: base.Control.SlcProyecto().val(),
                    Anio: base.Control.SlcAnios().val(),
                    Mes: base.Control.SlcMeses().val()
                };
                base.Ajax.AjaxObtenerRegistro.submit();
            }
            else {
                base.Event.LimpiarControlesFrmIngresoHoras();
            }
        },
        LimpiarControlesFrmIngresoHoras: function () {
            base.Control.TxtNumeroDiasTrabajados().val('');
            base.Control.TxtNumeroEmpleadosStracon().val('');
            base.Control.TxtNumeroObrerosStracon().val('');
            base.Control.TxtHHTEmpleadosStracon().val('');
            base.Control.TxtHHTObrerosStracon().val('');
            base.Control.SlcFormaIngreso().val('');

            base.Event.SlcFormaIngresoChange();
        },
        SlcAniosClick: function () {
            flgClick = false;
        },
        SlcAniosChange: function () {
            'use strict'

            //Habilitar esta sección de código solo para usuarios no administradores y colocar como deshabilitado la lista de meses
            //if (usuario == colaborador) {
                //var Mes = $("#slcAnios option:selected").index();
                //$("#slcMeses").prop("selectedIndex", Mes);
            //}
            //

            if (base.Control.SlcProyecto().val() != null && base.Control.SlcProyecto().val() != '' &&
                base.Control.SlcAnios().val() != null && base.Control.SlcAnios().val() != '' &&
                base.Control.SlcMeses().val() != null && base.Control.SlcMeses().val() != '') {
                base.Ajax.AjaxObtenerRegistro.data = {
                    CodigoProyecto: base.Control.SlcProyecto().val(),
                    Anio: base.Control.SlcAnios().val(),
                    Mes: base.Control.SlcMeses().val()
                };
                base.Ajax.AjaxObtenerRegistro.submit();
            }
            else {
                base.Event.LimpiarControlesFrmIngresoHoras();
            }
        },
        SlcMesesClick: function () {
            flgClick = false;
        },
        SlcMesesChange: function () {
            'use strict'
            if (base.Control.SlcProyecto().val() != null && base.Control.SlcProyecto().val() != '' &&
                base.Control.SlcAnios().val() != null && base.Control.SlcAnios().val() != '' &&
                base.Control.SlcMeses().val() != null && base.Control.SlcMeses().val() != '') {
                base.Ajax.AjaxObtenerRegistro.data = {
                    CodigoProyecto: base.Control.SlcProyecto().val(),
                    Anio: base.Control.SlcAnios().val(),
                    Mes: base.Control.SlcMeses().val()
                };
                base.Ajax.AjaxObtenerRegistro.submit();
            }
            else {
                base.Event.LimpiarControlesFrmIngresoHoras();
            }
        },
        BtnBuscarEmpresaColaboradorClick: function () {
            'use strict'
            base.Control.DlgFormularioEmpresaColaborador.Show();
        },
        ObtenerEmpresaColaborador: function (empresa) {
            'use strict'
            if (empresa != undefined) {
                base.Control.TxtNombreEmpresaColaborador().val(empresa[0].RazonSocial);
                base.Control.HddCodigoEmpresaColaborador().val(empresa[0].CodigoEmpresa);
            }
            else {
                base.Control.TxtNombreEmpresaColaborador().val('');
                base.Control.HddCodigoEmpresaColaborador().val('');
            }
        },
        BtnGuardarDatosPromedioClick: function () {
            'use strict'
            if (base.Control.ValidadorDatosPromedio.isValid()) {
                base.Ajax.AjaxGrabarRegistroContratista.data = {
                    CodigoRegistroContratista: (base.Control.FormularioModeloContratista != null ? base.Control.FormularioModeloContratista.CodigoRegistroContratista : null),
                    CodigoRegistro: base.Control.FormularioModelo.CodigoRegistro,
                    NumeroEmpleados: base.Control.TxtNumeroEmpleados2().val(),
                    NumeroObreros: base.Control.TxtNumeroObreros2().val(),
                    TotalPersonal: base.Control.TxtPersonalSubContratista2().val(),
                    HhtEmpleados: base.Control.TxtHHTEmpleados2().val(),
                    HhtObreros: base.Control.TxtHHTObreros2().val(),
                    TotalHht: base.Control.TxtHHTSubContratista2().val()
                };
                base.Ajax.AjaxGrabarRegistroContratista.submit();
            }
            else {
                $("#frmDatosPromedioSummaryErrorMessage").empty();
                $("#frmDatosPromedioSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },
        BtnGuardarContratistasClick: function () {
            'use strict'
            if (base.Control.ValidadorContratistas.isValid()) {
                base.Ajax.AjaxGrabarRegistroContratista.data = {
                    CodigoRegistroContratista: (base.Control.FormularioModeloContratista != null ? base.Control.FormularioModeloContratista.CodigoRegistroContratista : null),
                    CodigoRegistro: base.Control.FormularioModelo.CodigoRegistro,
                    CodigoEmpresa: base.Control.HddCodigoEmpresaColaborador().val(),
                    NumeroEmpleados: base.Control.TxtNumeroEmpleados().val(),
                    NumeroObreros: base.Control.TxtNumeroObreros().val(),
                    TotalPersonal: base.Control.TxtPersonalSubContratista().val(),
                    HhtEmpleados: base.Control.TxtHHTEmpleados().val(),
                    HhtObreros: base.Control.TxtHHTObreros().val(),
                    TotalHht: base.Control.TxtHHTSubContratista().val()
                };
                base.Ajax.AjaxGrabarRegistroContratista.submit();
            }
            else {
                $("#frmContratistasSummaryErrorMessage").empty();
                $("#frmContratistasSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },
        BtnGuardarIngresoHorasClick: function () {
            'use strict'
            if (base.Control.Validador.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarRegistro.data = {
                            CodigoProyecto: base.Control.SlcProyecto().val(),
                            Anio: base.Control.SlcAnios().val(),
                            Mes: base.Control.SlcMeses().val(),
                            NumeroDias: base.Control.TxtNumeroDiasTrabajados().val(),
                            NumeroEmpleadosStracon: base.Control.TxtNumeroEmpleadosStracon().val(),
                            NumeroObrerosStracon: base.Control.TxtNumeroObrerosStracon().val(),
                            HhtEmpleadosStracon: base.Control.TxtHHTEmpleadosStracon().val(),
                            HhtObrerosStracon: base.Control.TxtHHTObrerosStracon().val(),
                            TipoIngresoDatos: base.Control.SlcFormaIngreso().val(),
                        };
                        base.Ajax.AjaxGrabarRegistro.submit();
                    }
                });
            }
            else {
                $("#frmIngresoHorasSummaryErrorMessage").empty();
                $("#frmIngresoHorasSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },
        SlcFormaIngresoClick: function () {
            lastSel = base.Control.SlcFormaIngreso().val();
            flgClick = true;
        },
        SlcFormaIngresoChange: function () {
            'use strict'
            flgExiste = false;
            if (base.Control.SlcProyecto().val() != null && base.Control.SlcProyecto().val() != '' &&
                    base.Control.SlcAnios().val() != null && base.Control.SlcAnios().val() != '' &&
                    base.Control.SlcMeses().val() != null && base.Control.SlcMeses().val() != '' && flgClick) {
                base.Ajax.AjaxExisteRegistro.data = {
                    CodigoProyecto: base.Control.SlcProyecto().val(),
                    Anio: base.Control.SlcAnios().val(),
                    Mes: base.Control.SlcMeses().val()
                };
                base.Ajax.AjaxExisteRegistro.submit();
            }
            if (lastSel == Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Ingreso.FormaIngreso.DatosEnDetalle && flgClick
                && base.Control.TxtTotalPersonalSubContratistas().val() > 0) {
                //&& base.Control.bExiste().val()) {
                flgClick = false;
                var valorDetalladaGeneral = lastSel;

                base.Control.Mensaje.Confirmation({
                    message: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Ingreso.Resource.ConfirmacionCambioTipoIngresoDet,
                    onAccept: function () {
                        if (base.Control.SlcFormaIngreso().val() == Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Ingreso.FormaIngreso.DatosPromedio) {
                            $('#blockDatosPromedio').removeClass('hide');
                            $('#blockContratistas').addClass('hide');
                        } else {
                            $('#blockContratistas').addClass('hide');
                            $('#blockDatosPromedio').addClass('hide');
                        }
                        base.Event.LimpiarControlesContratistas();
                        base.Event.LimpiarControlesSumatorias();

                        //Eliminar registro detallado de contratistas
                        base.Ajax.AjaxEliminarRegistrosContratistas.data = {
                            CodigoProyecto: base.Control.SlcProyecto().val(),
                            Anio: base.Control.SlcAnios().val(),
                            Mes: base.Control.SlcMeses().val(),
                        };

                        base.Ajax.AjaxEliminarRegistrosContratistas.data = base.Ajax.AjaxEliminarRegistrosContratistas.data;
                        base.Ajax.AjaxEliminarRegistrosContratistas.submit();

                    },
                    onCancelDialog: function () {
                        base.Control.SlcFormaIngreso().val(valorDetalladaGeneral);
                    }
                });
            }
            else if (lastSel == Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Ingreso.FormaIngreso.DatosPromedio && flgClick
                && base.Control.TxtTotalPersonalSubContratistas().val() > 0) {
                //&& base.Control.bExiste().val()) {
                flgClick = false;
                var valorGeneralDetallada = lastSel;

                base.Control.Mensaje.Confirmation({
                    message: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Ingreso.Resource.ConfirmacionCambioTipoIngresoGen,
                    onAccept: function () {
                        if (base.Control.SlcFormaIngreso().val() == Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Ingreso.FormaIngreso.DatosEnDetalle) {
                            $('#blockContratistas').removeClass('hide');
                            $('#blockDatosPromedio').addClass('hide');
                        }
                        else {
                            $('#blockContratistas').addClass('hide');
                            $('#blockDatosPromedio').addClass('hide');
                        }
                        base.Event.LimpiarControlesDatosPromedio();
                        base.Event.LimpiarControlesSumatorias();
                        //Eliminar registro general de contratistas
                        base.Ajax.AjaxEliminarRegistrosContratistas.data = {
                            CodigoProyecto: base.Control.SlcProyecto().val(),
                            Anio: base.Control.SlcAnios().val(),
                            Mes: base.Control.SlcMeses().val(),
                        };

                        base.Ajax.AjaxEliminarRegistrosContratistas.data = base.Ajax.AjaxEliminarRegistrosContratistas.data;
                        base.Ajax.AjaxEliminarRegistrosContratistas.submit();
                    },
                    onCancelDialog: function () {
                        base.Control.SlcFormaIngreso().val(valorGeneralDetallada);
                    }
                });
            }
            else {
                if (base.Control.SlcFormaIngreso().val() == Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Ingreso.FormaIngreso.DatosPromedio) {
                    $('#blockDatosPromedio').removeClass('hide');
                    $('#blockContratistas').addClass('hide');
                    //base.Event.LimpiarControlesContratistas();
                } else if (base.Control.SlcFormaIngreso().val() == Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Ingreso.FormaIngreso.DatosEnDetalle) {
                    $('#blockContratistas').removeClass('hide');
                    $('#blockDatosPromedio').addClass('hide');
                    base.Event.LimpiarControlesDatosPromedio();
                } else {
                    $('#blockContratistas').addClass('hide');
                    $('#blockDatosPromedio').addClass('hide');
                    //base.Event.LimpiarControlesContratistas();
                    base.Event.LimpiarControlesDatosPromedio();
                }
            }
            flgClick = false;
            Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
        },
       BtnBuscarClick: function () {
            'use strict'            
            base.Control.GrdResultado.Load({
                CodigoRegistro: base.Control.FormularioModelo.CodigoRegistro
            });
        },
        AjaxGrabarRegistroSuccess: function (resultado) {
            'use strict'
            if (resultado.IsSuccess && resultado.Result != null && resultado.Result.CodigoRegistro != null) {
                base.Control.FormularioModelo = resultado.Result;
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });

                if (resultado.Result.TipoIngresoDatos == Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Ingreso.FormaIngreso.DatosPromedio) {
                    base.Control.BtnCancelarDatosPromedio().prop('disabled', false);
                    base.Control.BtnGuardarDatosPromedio().prop('disabled', false);
                }
                else if (resultado.Result.TipoIngresoDatos == Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Ingreso.FormaIngreso.DatosEnDetalle) {
                    base.Control.BtnCancelarContratistas().prop('disabled', false);
                    base.Control.BtnGuardarContratistas().prop('disabled', false);
                }

                //base.Control.SlcFormaIngreso().prop('disabled', true);
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxGrabarRegistroContratistaSuccess: function (resultado) {
            'use strict'
            if (resultado.IsSuccess) {
                base.Event.LimpiarControlesContratistas();
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnBuscarClick();
            }
            else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxObtenerRegistroSuccess: function (resultado) {
            'use strict'

            base.Event.LimpiarControlesSumatorias();         
            if (resultado.IsSuccess && resultado.Result != null && resultado.Result.CodigoRegistro != null) {
                base.Control.FormularioModelo = resultado.Result;
                base.Control.TxtNumeroDiasTrabajados().val(resultado.Result.NumeroDias);
                base.Control.TxtNumeroEmpleadosStracon().val(resultado.Result.NumeroEmpleadosStracon);
                base.Control.TxtHHTEmpleadosStracon().val(resultado.Result.HhtEmpleadosStracon);
                base.Control.TxtNumeroObrerosStracon().val(resultado.Result.NumeroObrerosStracon);
                base.Control.TxtHHTObrerosStracon().val(resultado.Result.HhtObrerosStracon);
                base.Control.SlcFormaIngreso().val(resultado.Result.TipoIngresoDatos);

                //base.Control.SlcFormaIngreso().prop('disabled', true);

                if (resultado.Result.TipoIngresoDatos == Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Ingreso.FormaIngreso.DatosPromedio) {
                    base.Control.BtnCancelarDatosPromedio().prop('disabled', false);
                    base.Control.BtnGuardarDatosPromedio().prop('disabled', false);

                    base.Ajax.AjaxObtenerRegistroContratista.data = {
                        CodigoRegistro: resultado.Result.CodigoRegistro
                    };
                    base.Ajax.AjaxObtenerRegistroContratista.submit();
                }
                else if (resultado.Result.TipoIngresoDatos == Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Ingreso.FormaIngreso.DatosEnDetalle) {
                    base.Control.BtnCancelarContratistas().prop('disabled', false);
                    base.Control.BtnGuardarContratistas().prop('disabled', false);

                    base.Event.BtnBuscarClick();
                }
                base.Event.SlcFormaIngresoChange();

                //Totales
                base.Control.TxtTotalPersonalStracon().val(resultado.Result.NumeroEmpleadosStracon + resultado.Result.NumeroObrerosStracon);
                base.Control.TxtTotalHHTStracon().val(resultado.Result.HhtEmpleadosStracon + resultado.Result.HhtObrerosStracon);

                base.Control.TxtTotalGeneralPersonal().val((base.Control.TxtTotalPersonalStracon().val() != '' ? parseInt(base.Control.TxtTotalPersonalStracon().val()) : 0) +
               (base.Control.TxtTotalPersonalSubContratistas().val() != '' ? parseInt(base.Control.TxtTotalPersonalSubContratistas().val()) : 0));

                base.Control.TxtTotalGeneralHHT().val((base.Control.TxtTotalHHTStracon().val() != '' ? parseFloat(base.Control.TxtTotalHHTStracon().val()) : 0) +
               (base.Control.TxtTotalHHTSubContratistas().val() != '' ? parseFloat(base.Control.TxtTotalHHTSubContratistas().val()) : 0));

            }
            else if (resultado.IsSuccess && resultado.Result != null && resultado.Result.CodigoRegistro == null) {
                base.Control.FormularioModelo = null;
                base.Control.SlcFormaIngreso().prop('disabled', false);
                base.Event.LimpiarControlesFrmIngresoHoras();
                base.Event.LimpiarControlesDatosPromedio();
                base.Event.LimpiarControlesSumatorias();

                base.Control.BtnCancelarDatosPromedio().prop('disabled', true);
                base.Control.BtnGuardarDatosPromedio().prop('disabled', true);

                base.Control.BtnCancelarContratistas().prop('disabled', true);
                base.Control.BtnGuardarContratistas().prop('disabled', true);
            }
        },
        AjaxExisteRegistroSuccess: function (resultado) {
            'use strict'

            if (resultado.IsSuccess && resultado.Result != null && resultado.Result.CodigoRegistro != null) {
                base.Control.FormularioModelo = resultado.Result;
                
                base.Ajax.AjaxExisteRegistroContratista.data = {
                    CodigoRegistro: resultado.Result.CodigoRegistro
                };
                base.Ajax.AjaxExisteRegistroContratista.submit();                
            }
        },
        LimpiarControlesSumatorias: function(){
            base.Control.TxtTotalPersonalStracon().val('');
            base.Control.TxtTotalHHTStracon().val('');
            base.Control.TxtTotalPersonalSubContratistas().val('');
            base.Control.TxtTotalHHTSubContratistas().val('');
            base.Control.TxtTotalGeneralPersonal().val('');
            base.Control.TxtTotalGeneralHHT().val('');
        },
        AjaxEliminarRegistroContratistaSuccess: function (resultado) {
            'use strict'
            if (resultado.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito });//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaEliminacionExitosa });
                base.Event.BtnBuscarClick();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro })//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaErrorRegistro });
            }
        },
        AjaxEliminarRegistrosContratistasSuccess: function (resultado) {
            'use strict'
            if (resultado.IsSuccess) {
                base.Control.Mensaje.Information({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeEliminoInformacionExito });//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaEliminacionExitosa });
                base.Event.BtnBuscarClick();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro })//Pe.Concar.SGOC.Presentacion.Recursos.Validacion.EtiquetaErrorRegistro });
            }
        },
        BtnGridEditEmpresaContratistaClick: function (row, data) {
            'use strict'
            base.Control.FormularioModeloContratista = data;
            base.Control.TxtNombreEmpresaColaborador().val(data.RazonSocial);
            base.Control.HddCodigoEmpresaColaborador().val(data.CodigoEmpresa);
            base.Control.TxtPersonalSubContratista().val(data.TotalPersonal != null ? data.TotalPersonal : '');
            base.Control.TxtHHTSubContratista().val(data.TotalHht != null ? data.TotalHht : '');
            base.Control.TxtNumeroEmpleados().val(data.NumeroEmpleados != null ? data.NumeroEmpleados : '');
            base.Control.TxtHHTEmpleados().val(data.HhtEmpleados != null ? data.HhtEmpleados : '');
            base.Control.TxtNumeroObreros().val(data.NumeroObreros != null ? data.NumeroObreros : '');
            base.Control.TxtHHTObreros().val(data.HhtObreros != null ? data.HhtObreros : '');
        },
        BtnGridDeleteEmpresaContratistaClick: function (row, data) {
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarRegistroContratista.data = data;
                    base.Ajax.AjaxEliminarRegistroContratista.submit();
                }
            });
        },
        AjaxObtenerRegistroContratistaSuccess: function (resultado) {
         
            if (resultado.IsSuccess && resultado.Result != null && resultado.Result.CodigoRegistroContratista != null) {
                base.Control.FormularioModeloContratista = resultado.Result;
                base.Control.TxtNumeroEmpleados2().val(resultado.Result.NumeroEmpleados);
                base.Control.TxtNumeroObreros2().val(resultado.Result.NumeroObreros);
                base.Control.TxtPersonalSubContratista2().val(resultado.Result.TotalPersonal);
                base.Control.TxtTotalPersonalSubContratistas().val(resultado.Result.TotalPersonal);
                base.Control.TxtHHTEmpleados2().val(resultado.Result.HhtEmpleados);
                base.Control.TxtHHTObreros2().val(resultado.Result.HhtObreros);
                base.Control.TxtHHTSubContratista2().val(resultado.Result.TotalHht);
                base.Control.TxtTotalHHTSubContratistas().val(resultado.Result.TotalHht);
                if (base.Control.SlcFormaIngreso().val() == Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Ingreso.FormaIngreso.DatosPromedio) {
                    base.Control.TxtTotalPersonalSubContratistas().val(resultado.Result.TotalPersonal);
                    base.Control.TxtTotalHHTSubContratistas().val(resultado.Result.TotalHht);
                }
                base.Control.TxtTotalGeneralPersonal().val((base.Control.TxtTotalPersonalStracon().val() != '' ? parseInt(base.Control.TxtTotalPersonalStracon().val()) : 0) +
               (base.Control.TxtTotalPersonalSubContratistas().val() != '' ? parseInt(base.Control.TxtTotalPersonalSubContratistas().val()) : 0));

                base.Control.TxtTotalGeneralHHT().val((base.Control.TxtTotalHHTStracon().val() != '' ? parseFloat(base.Control.TxtTotalHHTStracon().val()) : 0) +
                (base.Control.TxtTotalHHTSubContratistas().val() != '' ? parseFloat(base.Control.TxtTotalHHTSubContratistas().val()) : 0));
            }
            else {
                base.Control.FormularioModeloContratista = null;
                base.Event.LimpiarControlesDatosPromedio();
            }
        },
        AjaxExisteRegistroContratistaSuccess: function (resultado) {
            if (resultado.IsSuccess && resultado.Result != null && resultado.Result.CodigoRegistroContratista != null) {
                flgExiste = true;
                base.Control.bExiste().val(true);
            }
            else {
                flgExiste = false;
                base.Control.bExiste().val(false);
            }
        },
        LimpiarControlesDatosPromedio: function () {
            base.Control.TxtNumeroEmpleados2().val('');
            base.Control.TxtNumeroObreros2().val('');
            base.Control.TxtPersonalSubContratista2().val('');
            base.Control.TxtHHTEmpleados2().val('');
            base.Control.TxtHHTObreros2().val('');
            base.Control.TxtHHTSubContratista2().val('');
        },
        LimpiarControlesContratistas: function () {
            base.Control.TxtNombreEmpresaColaborador().val('');
            base.Control.HddCodigoEmpresaColaborador().val('');
            base.Control.TxtPersonalSubContratista().val('');
            base.Control.TxtHHTSubContratista().val('');
            base.Control.TxtNumeroEmpleados().val('');
            base.Control.TxtNumeroObreros().val('');
            base.Control.TxtHHTEmpleados().val('');
            base.Control.TxtHHTObreros().val('');
        }
    };
    base.Ajax = {
        AjaxGrabarRegistro: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Ingreso.Actions.RegistrarRegistro,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarRegistroSuccess
        }),
        AjaxGrabarRegistroContratista: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Ingreso.Actions.RegistrarRegistroContratista,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarRegistroContratistaSuccess
        }),
        AjaxObtenerRegistro: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Ingreso.Actions.ObtenerRegistro,
            autoSubmit: false,
            onSuccess: base.Event.AjaxObtenerRegistroSuccess
        }),        
        AjaxObtenerRegistroContratista: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Ingreso.Actions.ObtenerRegistroContratista,
            autoSubmit: false,
            onSuccess: base.Event.AjaxObtenerRegistroContratistaSuccess
        }),
        AjaxExisteRegistro: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Ingreso.Actions.ObtenerRegistro,
            autoSubmit: false,
            onSuccess: base.Event.AjaxExisteRegistroSuccess
        }),
        AjaxExisteRegistroContratista: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Ingreso.Actions.VerificarRegistroContratista,
            autoSubmit: false,
            onSuccess: base.Event.AjaxExisteRegistroContratistaSuccess
        }),
        AjaxEliminarRegistroContratista: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Ingreso.Actions.EliminarRegistroContratista,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarRegistroContratistaSuccess
        }),
        AjaxEliminarRegistrosContratistas: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Ingreso.Actions.EliminarRegistrosContratistas,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarRegistrosContratistasSuccess
        }),
    };
    base.Function = {
        CrearGrid: function () {
            var columns = new Array();
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Ingreso.Resource.GridCorrelativo,
                width: "10%",
                data: 'NumeroFila',
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Ingreso.Resource.GridContratista,
                width: "15%",
                data: 'RazonSocial',
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Ingreso.Resource.GridTotalPersonal,
                width: "20%",
                mRender: function (data, type, full) {
                    if (full.TotalPersonal == null) {
                        return parseInt(full.NumeroEmpleados) + parseInt(full.NumeroObreros);
                    }
                    else {
                        return full.TotalPersonal
                    }
                }
            });
            columns.push({
                title: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Ingreso.Resource.GridTotalHHT,
                width: "15%",
                mRender: function (data, type, full) {
                    if (full.TotalHht == null) {
                        return parseFloat(full.HhtEmpleados) + parseFloat(full.HhtObreros);
                    }
                    else {
                        return full.TotalHht
                    }
                }
            });
            columns.push({
                filter: { enabled: false, type: "textbox" },
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "12%",
                actionButtons: [                    
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditEmpresaContratistaClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteEmpresaContratistaClick } }
                ]
            });
            base.Control.GrdResultado = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultIngreso',
                columns: columns,
                filterColumn: false,
                hasSelectionRows: false,
                hasPaging: true,
                hasPagingServer: true,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.HorasTrabajadas.Ingreso.Actions.BuscarRegistroContratista,
                    source: 'Result'
                },
                returnCallbackComplete: function (instancia, records) {
                    base.Control.TxtTotalPersonalSubContratistas().val(records[0].TotalPersonalContratista);
                    base.Control.TxtTotalHHTSubContratistas().val(records[0].TotalHHTContratista);

                    base.Control.TxtTotalGeneralPersonal().val((base.Control.TxtTotalPersonalStracon().val() != '' ? parseInt(base.Control.TxtTotalPersonalStracon().val()) : 0) +
                    (base.Control.TxtTotalPersonalSubContratistas().val() != '' ? parseInt(base.Control.TxtTotalPersonalSubContratistas().val()) : 0));

                    base.Control.TxtTotalGeneralHHT().val((base.Control.TxtTotalHHTStracon().val() != '' ? parseFloat(base.Control.TxtTotalHHTStracon().val()) : 0) +
                    (base.Control.TxtTotalHHTSubContratistas().val() != '' ? parseFloat(base.Control.TxtTotalHHTSubContratistas().val()) : 0));
                }
            });
        },
        ValidacionExtraContratistas: function () {
            var validaciones = new Array();

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.HddCodigoEmpresaColaborador().val() == null || base.Control.HddCodigoEmpresaColaborador().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtNombreEmpresaColaborador().attr('class', 'form-control');
                    } else {
                        base.Control.TxtNombreEmpresaColaborador().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });
            return validaciones;
        },
    };
};