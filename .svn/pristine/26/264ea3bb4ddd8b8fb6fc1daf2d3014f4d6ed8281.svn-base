/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD D43260443
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.EmpresaColaborador.FormularioEmpresaColaborador');
Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.EmpresaColaborador.FormularioEmpresaColaborador.Controller = function (opts) {
    var base = this;

    base.Ini = function () {
        'use strict'        
        if (opts != null && opts.AceptarEmpresaColaboradorSuccess != null && opts.AceptarEmpresaColaboradorSuccess)
            base.Event.AceptarEmpresaColaboradorSuccess = opts.AceptarEmpresaColaboradorSuccess;
               
        ///// INICIALIZANDO PARA EMPRESA INVOLUCRADO
        base.Control.BtnBuscarEmpresaInvolucrado().off('click');
        base.Control.BtnBuscarEmpresaInvolucrado().on('click', base.Event.BtnBuscarEmpresaInvolucradoClick);
        base.Control.DlgFormularioBuscarEmpresaInvolucrado = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Empresa.FormularioBuscadorEmpresa.Controller({
            AceptarSuccess: base.Event.BuscarEmpresaInvolucradoSuccess
        });

        ///// INICIALIZAON PARA COLABORADOR INVOLUCRADO
        base.Control.BtnBuscarColaboradorInvolucrado().off('click');
        base.Control.BtnBuscarColaboradorInvolucrado().on('click', base.Event.BtnBuscarColaboradorInvolucradoClick);
        base.Control.DlgFormularioBuscarColaboradorInvolucrado = new Pe.ElectroPeru.SGI.Presentacion.Mantenimiento.Colaborador.FormularioBuscadorColaborador.Controller({
            AceptarSuccess: base.Event.BuscarColaboradorInvolucradoSuccess
        });

        base.Control.BtnGuardarInvestigacionColaboradorInvolucrado().off('click');
        base.Control.BtnGuardarInvestigacionColaboradorInvolucrado().on('click', base.Event.BtnGuardarEmpresaColaboradorClick);

        base.Control.ValidadorEmpresaColaborador = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmEmpresaColaborador(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.ValidarCamposAccionCorrectiva,
            validationsExtra: base.Function.ValidacionExtra()
        });
    };

    base.Show = function (opts) {
        base.Control.DlgFormularioEmpresaColaborador = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaFormularioAgregarPersona,
            size: "size-wide",
            close: function () {
            }
        });

        base.Control.DlgFormularioEmpresaColaborador.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.FormularioEmpresaColaborador,
            onSuccess: function () {
                base.Ini();
            }
        });
    };

    base.Control = {
        FrmEmpresaColaborador: function () { return $('#frmEmpresaColaborador'); },
        DlgFormularioEmpresaColaborador: null, 
        ValidadorEmpresaColaborador: null,

        /////////START DECLARAR PARA EMPRESA INVOLUCRADA
        BtnBuscarEmpresaInvolucrado: function () { return $('#btnBuscarEmpresaInvolucrado'); },
        HdnEmpresaColaboradorCodigoEmpresa: function () { return $('#hdnEmpresaColaboradorCodigoEmpresa'); },
        TxtEmpresaColaboradorNombreEmpresa: function () { return $('#txtEmpresaColaboradorNombreEmpresa'); },
        TxtEmpresaColaboradorRucEmpresa: function () { return $('#txtEmpresaColaboradorRucEmpresa'); },
        TxtEmpresaColaboradorRazonSocial: function () { return $('#txtEmpresaColaboradorRazonSocial'); },
        DlgFormularioBuscarEmpresaInvolucrado: null,

        BtnGuardarInvestigacionColaboradorInvolucrado: function () { return $('#btnGrabarInvestigacionColaboradorInvolucrado'); },

        /////////START DECLARAR PARA COLABORADOR INVOLUCRADA
        BtnBuscarColaboradorInvolucrado: function () { return $('#btnBuscarColaboradorInvolucrado'); },
        HdnEmpresaColaboradorCodigoColaborador: function () { return $('#hdnEmpresaColaboradorCodigoColaborador'); },
        TxtEmpresaColaboradorNombreColaborador: function () { return $('#txtEmpresaColaboradorNombreColaborado'); },
        TxtEmpresaColaboradorNumeroDocumento: function () { return $('#txtEmpresaColaboradorNumeroDocumento'); },
        TxtEmpresaColaboradorPuestoTrabajo: function () { return $('#txtEmpresaColaboradorPuestoTrabajo'); },
        HdnEmpresaColaboradorCodigoPuestoTrabajador: function () { return $('#hdnEmpresaColaboradorCodigoPuestoTrabajador'); },
        HdnEmpresaColaboradorCorreoColaborador: function () { return $('#hdnEmpresaColaboradorCorreoColaborador'); },
        DlgFormularioBuscarColaboradorInvolucrado: null
    };

    base.Function = {
        ValidacionExtra: function () {
            var validaciones = new Array();

            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.TxtEmpresaColaboradorNombreEmpresa().val() == null || base.Control.TxtEmpresaColaboradorNombreEmpresa().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtEmpresaColaboradorNombreEmpresa().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtEmpresaColaboradorNombreEmpresa().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });
            
            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.TxtEmpresaColaboradorNombreColaborador().val() == null || base.Control.TxtEmpresaColaboradorNombreColaborador().val() == '') {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtEmpresaColaboradorNombreColaborador().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtEmpresaColaboradorNombreColaborador().attr('class', 'form-control hasError');
                    }

                    return resultado;
                },

                codeMessage: "Validar"
            });

            return validaciones;
        }
    };

    base.Event = {
        BtnGuardarEmpresaColaboradorClick: function () {
            if (base.Control.ValidadorEmpresaColaborador.isValid()) {
                var filtro = {
                    CodigoEmpresa: base.Control.HdnEmpresaColaboradorCodigoEmpresa().val(),
                    CodigoColaborador: base.Control.HdnEmpresaColaboradorCodigoColaborador().val(),
                    CodigoPuestoTrabajo: base.Control.HdnEmpresaColaboradorCodigoPuestoTrabajador().val(),
                    CorreoElectronico: base.Control.HdnEmpresaColaboradorCorreoColaborador().val(),
                    NombrePuestoTrabajo: base.Control.TxtEmpresaColaboradorPuestoTrabajo().val(),
                    NombreEmpresa: base.Control.TxtEmpresaColaboradorNombreEmpresa().val(),
                    NombreColaboradorCompleto: base.Control.TxtEmpresaColaboradorNombreColaborador().val()
                };

                if (base.Event.AceptarEmpresaColaboradorSuccess != null) {
                    base.Event.AceptarEmpresaColaboradorSuccess(filtro);
                }

                base.Control.DlgFormularioEmpresaColaborador.divDialog.close();
            }
            else {
                $('#frmEmpresaColaboradorSummaryErrorMessage').empty();
                $('#frmEmpresaColaboradorSummaryErrorMessage').append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
            }
        },

        /////START EVENTOS EMPRESA INVOLUCRADA
        BtnBuscarEmpresaInvolucradoClick: function () {
            base.Control.DlgFormularioBuscarEmpresaInvolucrado.Show(false, [], null);
        },

        BuscarEmpresaInvolucradoSuccess: function (empresaSeleccionado) {
            if (empresaSeleccionado.length > 0) {
                base.Control.HdnEmpresaColaboradorCodigoEmpresa().val(empresaSeleccionado[0].CodigoEmpresa);
                base.Control.TxtEmpresaColaboradorNombreEmpresa().val(empresaSeleccionado[0].RazonSocial);
                base.Control.TxtEmpresaColaboradorRazonSocial().val(empresaSeleccionado[0].RazonSocial);
                base.Control.TxtEmpresaColaboradorRucEmpresa().val(empresaSeleccionado[0].Ruc);

                base.Control.HdnEmpresaColaboradorCodigoColaborador().val('');
                base.Control.TxtEmpresaColaboradorNombreColaborador().val('');
                base.Control.TxtEmpresaColaboradorNumeroDocumento().val('');
                base.Control.TxtEmpresaColaboradorPuestoTrabajo().val('');
            }
            else {
                base.Control.HdnEmpresaColaboradorCodigoEmpresa().val(null);
                base.Control.TxtEmpresaColaboradorNombreEmpresa().val('');
                base.Control.TxtEmpresaColaboradorRazonSocial().val('');
                base.Control.TxtEmpresaColaboradorRucEmpresa().val('');
            }
        },
        /////END EVENTOS EMPRESA INVOLUCRADA

        /////START EVENTOS COLABORADOR INVOLUCRADO
        BtnBuscarColaboradorInvolucradoClick: function (data) {
            if (base.Control.HdnEmpresaColaboradorCodigoEmpresa().val() !== null &&
                base.Control.HdnEmpresaColaboradorCodigoEmpresa().val() != undefined &&
                base.Control.HdnEmpresaColaboradorCodigoEmpresa().val() != '') {
                base.Control.DlgFormularioBuscarColaboradorInvolucrado.Show(false, [], { CodigoEmpresa: base.Control.HdnEmpresaColaboradorCodigoEmpresa().val(), NombreEmpresa: base.Control.TxtEmpresaColaboradorNombreEmpresa().val() });
            }
        },
        BuscarColaboradorInvolucradoSuccess: function (colaboradorSeleccionado) {            
            if (colaboradorSeleccionado.length > 0) {                
                base.Control.HdnEmpresaColaboradorCodigoColaborador().val(colaboradorSeleccionado[0].CodigoColaborador);
                base.Control.TxtEmpresaColaboradorNombreColaborador().val(colaboradorSeleccionado[0].Nombres + ' ' + colaboradorSeleccionado[0].ApellidoPaterno + ' ' + colaboradorSeleccionado[0].ApellidoMaterno);
                base.Control.TxtEmpresaColaboradorNumeroDocumento().val(colaboradorSeleccionado[0].NumeroDocumento);
                base.Control.TxtEmpresaColaboradorPuestoTrabajo().val(colaboradorSeleccionado[0].NombrePuestoTrabajo);                
                base.Control.HdnEmpresaColaboradorCodigoPuestoTrabajador().val(colaboradorSeleccionado[0].CodigoPuestoTrabajo);
                base.Control.HdnEmpresaColaboradorCorreoColaborador().val(colaboradorSeleccionado[0].CorreoElectronico);
            }
            else {
                base.Control.HdnEmpresaColaboradorCodigoColaborador().val(null);
                base.Control.TxtEmpresaColaboradorNombreColaborador().val('');
                base.Control.TxtEmpresaColaboradorNumeroDocumento().val('');
                base.Control.TxtEmpresaColaboradorPuestoTrabajo().val('');
                base.Control.HdnEmpresaColaboradorCodigoPuestoTrabajador().val(null);
                base.Control.HdnEmpresaColaboradorCorreoColaborador().val('');
            }
        },
        /////END EVENTOS COLABORADOR INVOLUCRADO
        
    };
};
