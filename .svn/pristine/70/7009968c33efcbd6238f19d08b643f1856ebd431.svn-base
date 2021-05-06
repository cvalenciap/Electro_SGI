/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 08022017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.Controller = function () {
    var base = this;
    base.Ini = function () {
        base.Control.FormularioModelo = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Models.FormularioLesionTrabajador;
        Pe.GMD.UI.Web.Components.TextBox.Function.Configure();

        base.Control.BtnAgregarInformacionGeneralLesion().off('click');
        base.Control.BtnAgregarInformacionGeneralLesion().on('click', base.Event.BtnAgregarInformacionGeneralLesionClick);

        base.Control.BtnGrabarInformacionGeneralLesion().off('click');
        base.Control.BtnGrabarInformacionGeneralLesion().on('click', base.Event.BtnGrabarInformacionGeneralLesionClick);
        base.Control.BtnGrabarDetallesTratamientoLesion().off('click');
        base.Control.BtnGrabarDetallesTratamientoLesion().on('click', base.Event.BtnGrabarDetallesTratamientoLesionClick);
        base.Control.BtnGrabarConsecuenciaLaboralLesion().off('click');
        base.Control.BtnGrabarConsecuenciaLaboralLesion().on('click', base.Event.BtnGrabarConsecuenciaLaboralLesionClick);

        base.Control.BtnCancelarInformacionGeneralLesion().off('click');
        base.Control.BtnCancelarInformacionGeneralLesion().on('click', base.Event.BtnCancelarClick);
        base.Control.BtnCancelarDetallesTratamientoLesion().off('click');
        base.Control.BtnCancelarDetallesTratamientoLesion().on('click', base.Event.BtnCancelarClick);
        base.Control.BtnCancelarConsecuenciaLaboralLesion().off('click');
        base.Control.BtnCancelarConsecuenciaLaboralLesion().on('click', base.Event.BtnCancelarClick);

        base.Control.DlgInformacionGeneralLesion = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInformacionGeneralLesion.Controller({
            AceptarSuccess: base.Event.BtnLoadInformacionGeneralLesionClick
        });

        new Pe.GMD.UI.Web.Components.Calendar({
            inputFrom: base.Control.DtpFechaTratamiento(),
            minDateFrom: base.Control.FechaRecordString
        });

        base.Function.CrearGridInformacionGeneralLesion();
        base.Event.BtnLoadInformacionGeneralLesionClick();

        base.Control.ValidadorInformacionGeneral = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmLesionInformacionGeneral(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraInformacionGeneral()
        });

        base.Control.ValidadorConsecuenciaLaboral = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmConsecuenciaLaboralLesion(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraConsecuenciaLaboral()
        });

        base.Control.ValidadorDetallesTratamiento = new Pe.GMD.UI.Web.Components.Validator({
            form: base.Control.FrmDetallesTratamientoLesion(),
            messages: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.ValidarCampos,
            validationsExtra: base.Function.ValidacionExtraDetallesTratamiento()
        });

        base.Control.SlcLesionActual().off('change');
        base.Control.SlcLesionActual().on('change', base.Event.SlcLesionActualChange);
        base.Control.SlcLesionPotencial().off('change');
        base.Control.SlcLesionPotencial().on('change', base.Event.SlcLesionPotencialChange);

        base.Control.SlcLesionTiempoPerdidoActual().off('change');
        base.Control.SlcLesionTiempoPerdidoActual().on('change', base.Event.SlcLesionTiempoPerdidoActualChange);
        base.Control.SlcLesionTiempoPerdidoPotencial().off('change');
        base.Control.SlcLesionTiempoPerdidoPotencial().on('change', base.Event.SlcLesionTiempoPerdidoPotencialChange);

        base.Control.BtnAgregarAnexoMedico().off('click');
        base.Control.BtnAgregarAnexoMedico().on('click', base.Event.BtnAgregarAnexoMedicoClick);

        base.Control.BtnAgregarDescansoMedico().off('click');
        base.Control.BtnAgregarDescansoMedico().on('click', base.Event.BtnAgregarDescansoMedicoClick);
        base.Control.BtnAgregarAutopsia().off('click');
        base.Control.BtnAgregarAutopsia().on('click', base.Event.BtnAgregarAutopsiaClick);
        base.Control.BtnAgregarDefuncion().off('click');
        base.Control.BtnAgregarDefuncion().on('click', base.Event.BtnAgregarDefuncionClick);
        base.Control.BtnAgregarCadaver().off('click');
        base.Control.BtnAgregarCadaver().on('click', base.Event.BtnAgregarCadaverClick);
        base.Control.BtnAgregarIncidenteFatal().off('click');
        base.Control.BtnAgregarIncidenteFatal().on('click', base.Event.BtnAgregarIncidenteFatalClick);

        base.Control.DlgFormularioInvestigacionAnexoMedico = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacionAnexoApendice.Controller({
            AceptarSuccess: function (filtro) {
                if (filtro.CodigoInvestigacionAnexo != null) {
                    base.Control.TxtNombreArchivoAnexoMedico().val(filtro.NombreArchivoAnexoSharePoint);
                    base.Control.HdnCodigoArchivoAnexoMedico().val(filtro.CodigoInvestigacionAnexo);
                }
            }
        });

        base.Control.DlgFormularioInvestigacionDescansoMedico = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacionAnexoApendice.Controller({
            AceptarSuccess: function (filtro) {
                if (filtro.CodigoInvestigacionAnexo != null) {
                    base.Control.TxtNombreArchivoDescansoMedico().val(filtro.NombreArchivoAnexoSharePoint);
                    base.Control.HdnCodigoArchivoDescansoMedico().val(filtro.CodigoInvestigacionAnexo);
                }
            }
        });

        base.Control.DlgFormularioInvestigacionAutopsia = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacionAnexoApendice.Controller({
            AceptarSuccess: function (filtro) {
                if (filtro.CodigoInvestigacionAnexo != null) {
                    base.Control.TxtNombreArchivoAutopsia().val(filtro.NombreArchivoAnexoSharePoint);
                    base.Control.HdnCodigoArchivoAutopsia().val(filtro.CodigoInvestigacionAnexo);
                }
            }
        });

        base.Control.DlgFormularioInvestigacionDefuncion = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacionAnexoApendice.Controller({
            AceptarSuccess: function (filtro) {
                if (filtro.CodigoInvestigacionAnexo != null) {
                    base.Control.TxtNombreArchivoDefuncion().val(filtro.NombreArchivoAnexoSharePoint);
                    base.Control.HdnCodigoArchivoDefuncion().val(filtro.CodigoInvestigacionAnexo);
                }
            }
        });

        base.Control.DlgFormularioInvestigacionCadaver = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacionAnexoApendice.Controller({
            AceptarSuccess: function (filtro) {
                if (filtro.CodigoInvestigacionAnexo != null) {
                    base.Control.TxtNombreArchivoCadaver().val(filtro.NombreArchivoAnexoSharePoint);
                    base.Control.HdnCodigoArchivoCadaver().val(filtro.CodigoInvestigacionAnexo);
                }
            }
        });

        base.Control.DlgFormularioInvestigacionIncidenteFatal = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacionAnexoApendice.Controller({
            AceptarSuccess: function (filtro) {
                if (filtro.CodigoInvestigacionAnexo != null) {
                    base.Control.TxtNombreArchivoIncidenteFatal().val(filtro.NombreArchivoAnexoSharePoint);
                    base.Control.HdnCodigoArchivoIncidenteFatal().val(filtro.CodigoInvestigacionAnexo);
                }
            }
        });
    };

    base.Show = function (opts) {                
        base.Control.FechaRecordString = opts.FechaRecordString;
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.EtiquetaFormularioCategoriaLesionado,
            size: "size-wide",
            close: function () {
            }
        });

        base.Control.DlgForm.getAjaxContent({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.FormularioLesionTrabajador,
            onSuccess: function () {
                base.Ini();
            },
            data: {
                CodigoInvestigacion: opts.CodigoInvestigacion,
                CodigoEstadoInvestigacion: opts.CodigoEstadoInvestigacion,
                CodigoInvestigacionInvolucrado: opts.CodigoInvestigacionInvolucrado,
                CodigoInvestigacionCategoria: opts.CodigoInvestigacionCategoria,
                Colaborador: {
                    NombreCompletoColaborador: opts.NombreColaboradorInvolucrado,
                    NumeroDocumento: opts.NumeroDocumento,
                    CodigoEmpresa: opts.CodigoEmpresa
                }
            }
        });
    };

    base.Control = {
        CodigoEstadoInvestigacion : null,
        DlgInformacionGeneralLesion: null,
        FechaRecordString: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),        
        BtnAgregarInformacionGeneralLesion: function () { return $('#btnAgregarInformacionGeneralLesion'); },

        BtnCancelarInformacionGeneralLesion: function () { return $('#btnCancelarInformacionGeneralLesion'); },
        BtnCancelarDetallesTratamientoLesion: function () { return $('#btnCancelarDetallesTratamientoLesion'); },
        BtnCancelarConsecuenciaLaboralLesion: function () { return $('#btnCancelarConsecuenciaLaboralLesion'); },

        BtnGrabarInformacionGeneralLesion: function () { return $('#btnGrabarInformacionGeneralLesion'); },
        BtnGrabarDetallesTratamientoLesion: function () { return $('#btnGrabarDetallesTratamientoLesion'); },
        BtnGrabarConsecuenciaLaboralLesion: function () { return $('#btnGrabarConsecuenciaLaboralLesion'); },

        SlcLesionesAnteriores: function () { return $('#slcLesionesAnteriores'); },
        SlcLesionActual: function () { return $('#slcLesionActual'); },        
        SlcLesionPotencial: function () { return $('#slcLesionPotencial'); },
        SlcLesionTiempoPerdidoActual: function () { return $('#slcLesionTiempoPerdidoActual'); },
        SlcLesionTiempoPerdidoPotencial: function () { return $('#slcLesionTiempoPerdidoPotencial'); },
        TxtDiagnosticoMedico: function () { return $('#txtDiagnosticoMedico'); },

        SlcHoraTratamiento: function () { return $('#slcHoraTratamiento'); },
        SlcMinutoTratamiento: function () { return $('#slcMinutoTratamiento'); },
        DtpFechaTratamiento: function () { return $('#dtpFechaTratamiento'); },
        TxtProveedorTratamiento: function () { return $('#txtProveedorTratamiento'); },
        TxtResultadoTratamiento: function () { return $('#txtResultadoTratamiento'); },
        TxtNombreMedico: function () { return $('#txtNombreMedico'); },
        TxtTratamientoDado: function () { return $('#txtTratamientoDado'); },
        TxtEspecialidadMedico: function () { return $('#txtEspecialidadMedico'); },

        Slc24HorasLuegoIncidente: function () { return $('#slc24HorasLuegoIncidente'); },        
        SlcReincorporaAlTrabajo: function () { return $('#slcReincorporaAlTrabajo'); },
        TxtDiasPerdidosEstimado: function () { return $('#txtDiasPerdidosEstimado'); },
        TxtDiasRestringidosEstimado: function () { return $('#txtDiasRestringidosEstimado'); },
        TxtNumeroDiasDescansoMedico: function () { return $('#txtNumeroDiasDescansoMedico'); },        
        TxtComentario: function () { return $('#txtComentario'); },

        ValidadorInformacionGeneral: null,
        ValidadorConsecuenciaLaboral: null,
        FrmLesionInformacionGeneral: function () { return $('#frmLesionInformacionGeneral'); },
        FrmConsecuenciaLaboralLesion: function () { return $('#frmConsecuenciaLaboralLesion'); },
        FrmDetallesTratamientoLesion: function () { return $('#frmDetallesTratamientoLesion'); },
        FormularioModelo: null,

        BtnAgregarAnexoMedico: function () { return $('#btnAgregarAnexoMedico'); },
        DlgFormularioInvestigacionAnexoMedico: null,

        TxtNombreArchivoAnexoMedico: function () { return $('#txtNombreArchivoAnexoMedico'); },
        HdnCodigoArchivoAnexoMedico: function () { return $('#hdnCodigoArchivoAnexoMedico'); },


        BtnAgregarDescansoMedico: function () { return $('#btnAgregarDescansoMedico'); },
        BtnAgregarAutopsia: function () { return $('#btnAgregarAutopsia'); },
        BtnAgregarDefuncion: function () { return $('#btnAgregarDefuncion'); },
        BtnAgregarCadaver: function () { return $('#btnAgregarCadaver'); },
        BtnAgregarIncidenteFatal: function () { return $('#btnAgregarIncidenteFatal'); },

        TxtNombreArchivoDescansoMedico: function () { return $('#txtNombreArchivoDescansoMedico'); },
        HdnCodigoArchivoDescansoMedico: function () { return $('#hdnCodigoArchivoDescansoMedico'); },
        TxtNombreArchivoAutopsia: function () { return $('#txtNombreArchivoAutopsia'); },
        HdnCodigoArchivoAutopsia: function () { return $('#hdnCodigoArchivoAutopsia'); },
        TxtNombreArchivoDefuncion: function () { return $('#txtNombreArchivoDefuncion'); },
        HdnCodigoArchivoDefuncion: function () { return $('#hdnCodigoArchivoDefuncion'); },
        TxtNombreArchivoCadaver: function () { return $('#txtNombreArchivoCadaver'); },
        HdnCodigoArchivoCadaver: function () { return $('#hdnCodigoArchivoCadaver'); },
        TxtNombreArchivoIncidenteFatal: function () { return $('#txtNombreArchivoIncidenteFatal'); },
        HdnCodigoArchivoIncidenteFatal: function () { return $('#hdnCodigoArchivoCadaver'); },

        TxtDescripcionConsecuenciaActualLesion: function () { return $('#txtDescripcionConsecuenciaActualLesion'); },
        TxtDescripcionConsecuenciaPotencialLesion: function () { return $('#txtDescripcionConsecuenciaPotencialLesion'); },

        TxtActualConsecuenciaCategoriaLesion: function () { return $('#txtActualConsecuenciaCategoriaLesion'); },
        TxtPotencialConsecuenciaCategoriaLesion: function () { return $('#txtPotencialConsecuenciaCategoriaLesion'); },
    };

    base.Function = {
        ValidacionExtraConsecuenciaLaboral: function () {
            var validaciones = new Array();
            validaciones.push({
                Event: function () {
                    var resultado = true;
                    if (base.Control.SlcLesionActual().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.LesionTiempoPerdido
                        && (base.Control.HdnCodigoArchivoDescansoMedico().val() == '' || base.Control.HdnCodigoArchivoDescansoMedico().val() == null)) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtNombreArchivoDescansoMedico().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtNombreArchivoDescansoMedico().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });
            validaciones.push({
                Event: function () {
                    var resultado = true;
                    if (base.Control.SlcLesionActual().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.Fatalidad
                        && (base.Control.HdnCodigoArchivoAutopsia().val() == '' || base.Control.HdnCodigoArchivoAutopsia().val() == null)) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtNombreArchivoAutopsia().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtNombreArchivoAutopsia().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });
            validaciones.push({
                Event: function () {
                    var resultado = true;
                    if (base.Control.SlcLesionActual().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.Fatalidad
                        && (base.Control.HdnCodigoArchivoDefuncion().val() == '' || base.Control.HdnCodigoArchivoDefuncion().val() == null)) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtNombreArchivoDefuncion().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtNombreArchivoDefuncion().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });
            validaciones.push({
                Event: function () {
                    var resultado = true;
                    if (base.Control.SlcLesionActual().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.Fatalidad
                        && (base.Control.HdnCodigoArchivoCadaver().val() == '' || base.Control.HdnCodigoArchivoCadaver().val() == null)) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtNombreArchivoCadaver().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtNombreArchivoCadaver().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });
            validaciones.push({
                Event: function () {
                    var resultado = true;
                    if (base.Control.SlcLesionActual().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.Fatalidad
                        && (base.Control.HdnCodigoArchivoIncidenteFatal().val() == '' || base.Control.HdnCodigoArchivoIncidenteFatal().val() == null)) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtNombreArchivoIncidenteFatal().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtNombreArchivoIncidenteFatal().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });
            return validaciones;
        },
        ValidacionExtraInformacionGeneral: function () {
            var validaciones = new Array();
            validaciones.push({
                Event: function () {
                    var resultado = true;
                    if (base.Control.SlcLesionActual().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.LesionTiempoPerdido &&
                        (base.Control.SlcLesionTiempoPerdidoActual().val() == '' || base.Control.SlcLesionTiempoPerdidoActual().val() == null)) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.SlcLesionTiempoPerdidoActual().attr('class', 'form-control');
                    }
                    else {
                        base.Control.SlcLesionTiempoPerdidoActual().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });
            validaciones.push({
                Event: function () {
                    var resultado = true;
                    if (base.Control.SlcLesionPotencial().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.LesionTiempoPerdido &&
                        (base.Control.SlcLesionTiempoPerdidoPotencial().val() == '' || base.Control.SlcLesionTiempoPerdidoPotencial().val() == null)) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.SlcLesionTiempoPerdidoPotencial().attr('class', 'form-control');
                    }
                    else {
                        base.Control.SlcLesionTiempoPerdidoPotencial().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });

            return validaciones;
        },
        ValidacionExtraDetallesTratamiento: function () {
            var validaciones = new Array();
            validaciones.push({
                Event: function () {
                    var resultado = true;

                    if (base.Control.FormularioModelo.CategoriaLesion.CodigoLesionActual == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.LesionPrimerosAuxilios
                        && (base.Control.HdnCodigoArchivoAnexoMedico().val() == '' || base.Control.HdnCodigoArchivoAnexoMedico().val() == null)) {
                        resultado = false;
                    }

                    if (resultado) {
                        base.Control.TxtNombreArchivoAnexoMedico().attr('class', 'form-control');
                    }
                    else {
                        base.Control.TxtNombreArchivoAnexoMedico().attr('class', 'form-control hasError');
                    }

                    return resultado;
                }
            });

            return validaciones;
        },
        CrearGridInformacionGeneralLesion: function () {
            var columns = new Array();
            columns.push({
                data: 'DescripcionParteCuerpoLesionada',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridParteCuerpoLesionada,
                width: "20%"
            });
            columns.push({
                data: 'DescripcionNaturalezaLesion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridNaturalezaLesion,
                width: "20%"
            });
            columns.push({
                data: 'DescripcionMecanismo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridMecanismo,
                width: "20%"
            });
            columns.push({
                data: 'Comentario',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridComentario,
                width: "20%"
            });
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.Resource.GridOperaciones,
                "class": "controls",
                width: "3%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditInformacionGeneralLesionClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, validateRender: base.Event.BtnGridDeleteValidate, event: { on: 'click', callBack: base.Event.BtnGridDeleteInformacionGeneralLesionClick } }
                ]
            });
            base.Control.GrdInformacionGeneralLesion = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdInformacionGeneralLesion',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.BuscarInvestigacionInformacionLesion,
                    source: 'Result'
                }
            });
        },
    };

    base.Event = {
        BtnGridDeleteValidate: function (data, type, full) {
            if (base.Control.FormularioModelo.CategoriaLesion.CodigoEstadoInvestigacion != Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.EstadoInvestigacionPorElaborar)
                return false;
            else
                return true;
        },
        BtnLoadInformacionGeneralLesionClick: function (){
            'use strict'
            base.Control.GrdInformacionGeneralLesion.Load({
                CodigoInvestigacionInvolucrado: base.Control.FormularioModelo.CategoriaLesion.CodigoInvestigacionInvolucrado
            });
        },
        BtnAgregarInformacionGeneralLesionClick: function (){
            'use strict'
            var filtro = {
                CodigoInvestigacionInvolucrado: base.Control.FormularioModelo.CategoriaLesion.CodigoInvestigacionInvolucrado,
                CodigoEstadoInvestigacion: base.Control.FormularioModelo.CategoriaLesion.CodigoEstadoInvestigacion
            };
            base.Control.DlgInformacionGeneralLesion.Show(filtro);
        },
        BtnGridEditInformacionGeneralLesionClick: function (row, data){
            'use strict'
            data.CodigoEstadoInvestigacion = base.Control.FormularioModelo.CategoriaLesion.CodigoEstadoInvestigacion;
            base.Control.DlgInformacionGeneralLesion.Show(data);
        },
        BtnGridDeleteInformacionGeneralLesionClick: function (row, data){
            'use strict'
            base.Control.Mensaje.Delete({
                onAccept: function () {
                    base.Ajax.AjaxEliminarInvestigacionInformacionLesion.data = data;
                    base.Ajax.AjaxEliminarInvestigacionInformacionLesion.submit();
                }
            });
        },
        AjaxEliminarInvestigacionInformacionLesionSuccess: function (resultado){
            'use strict'
            if (resultado.Result >= 1) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Event.BtnLoadInformacionGeneralLesionClick();
            }
            else {
                base.Control.Mensaje.Error({ message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro });
            }
        },
        BtnGrabarInformacionGeneralLesionClick: function () {
            if (base.Control.ValidadorInformacionGeneral.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarInvestigacionLesionInformacionGeneral.data = {
                            CodigoInvestigacionInvolucrado: base.Control.FormularioModelo.CategoriaLesion.CodigoInvestigacionInvolucrado,
                            CodigoInvestigacionCategoria: base.Control.FormularioModelo.CategoriaLesion.CodigoInvestigacionCategoria,
                            CodigoLesionAnterior: base.Control.SlcLesionesAnteriores().val(),
                            CodigoLesionActual: base.Control.SlcLesionActual().val(),
                            CodigoLesionPotencial: base.Control.SlcLesionPotencial().val(),
                            CodigoLesionPerdidoActual: base.Control.SlcLesionTiempoPerdidoActual().val(),
                            CodigoLesionPerdidoPotencial: base.Control.SlcLesionTiempoPerdidoPotencial().val(),
                            DiagnosticoMedico: base.Control.TxtDiagnosticoMedico().val(),
                            CodigoConsecuenciaActual: $('input[name="codigoConsecuenciaLesionModalActual"]:checked').data() != undefined ? $('input[name="codigoConsecuenciaLesionModalActual"]:checked').data().codigo : '',
                            CodigoConsecuenciaPotencial: $('input[name="codigoConsecuenciaLesionModalPotencial"]:checked').data() != undefined ? $('input[name="codigoConsecuenciaLesionModalPotencial"]:checked').data().codigo : '',
                        };
                        base.Ajax.AjaxRegistrarInvestigacionLesionInformacionGeneral.submit();
                    }
                });
            }
            else
            {
                $("#frmLesionInformacionGeneralSummaryErrorMessage").empty();
                $("#frmLesionInformacionGeneralSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnGrabarDetallesTratamientoLesionClick: function () {
            if (base.Control.ValidadorDetallesTratamiento.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarInvestigacionLesionTratamiento.data = {
                            CodigoInvestigacionInvolucrado: base.Control.FormularioModelo.CategoriaLesion.CodigoInvestigacionInvolucrado,
                            ProveedorTratamiento: base.Control.TxtProveedorTratamiento().val(),
                            FechaTratamiento: base.Control.DtpFechaTratamiento().val() + " " + base.Control.SlcHoraTratamiento().val() + ":" + base.Control.SlcMinutoTratamiento().val(),
                            ResultadoTratamiento: base.Control.TxtResultadoTratamiento().val(),
                            TratamientoDado: base.Control.TxtTratamientoDado().val(),
                            NombreMedico: base.Control.TxtNombreMedico().val(),
                            EspecialidadMedico: base.Control.TxtEspecialidadMedico().val(),
                            NombreInformeMedico: base.Control.TxtNombreArchivoAnexoMedico().val(),
                            CodigoInformeMedicoSharepoint: base.Control.HdnCodigoArchivoAnexoMedico().val()
                        };

                        base.Ajax.AjaxRegistrarInvestigacionLesionTratamiento.submit();
                    }
                });
            }
            else {
                $("#frmDetallesTratamientoLesionSummaryErrorMessage").empty();
                $("#frmDetallesTratamientoLesionSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },
        BtnGrabarConsecuenciaLaboralLesionClick: function () {
            if (base.Control.ValidadorConsecuenciaLaboral.isValid()) {
                base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    onAccept: function () {
                        base.Ajax.AjaxRegistrarInvestigacionLesionConsecuencia.data = {
                            CodigoInvestigacionInvolucrado: base.Control.FormularioModelo.CategoriaLesion.CodigoInvestigacionInvolucrado,
                            CodigoLuegoIncidente: base.Control.Slc24HorasLuegoIncidente().val(),
                            CantidadDiasPerdidos: base.Control.TxtDiasPerdidosEstimado().val(),
                            CantidadDiasRestringidos: base.Control.TxtDiasRestringidosEstimado().val(),
                            CantidadDiasDescanso: base.Control.TxtNumeroDiasDescansoMedico().val(),
                            IndicadorIncorporo: base.Control.SlcReincorporaAlTrabajo().val(),
                            Comentario: base.Control.TxtComentario().val(),
                            NombreDescansoMedico: base.Control.TxtNombreArchivoDescansoMedico().val(),
                            CodigoDescansoMedicoSharepoint: base.Control.HdnCodigoArchivoDescansoMedico().val(),
                            NombreCertificadoAutopsia: base.Control.TxtNombreArchivoAutopsia().val(),
                            CodigoCertificadoAutopsiaSharepoint: base.Control.HdnCodigoArchivoAutopsia().val(),
                            NombreCertificadoDefuncion: base.Control.TxtNombreArchivoDefuncion().val(),
                            CodigoCertificadoDefuncionSharepoint: base.Control.HdnCodigoArchivoDefuncion().val(),
                            NombreArchivoLevantamiento: base.Control.TxtNombreArchivoCadaver().val(),
                            CodigoArchivoLevantamientoSharepoint: base.Control.HdnCodigoArchivoCadaver().val(),
                            NombreArchivoInspeccion: base.Control.TxtNombreArchivoIncidenteFatal().val(),
                            CodigoArchivoInspeccionSharepoint: base.Control.HdnCodigoArchivoIncidenteFatal().val()
                        };                        
                        base.Ajax.AjaxRegistrarInvestigacionLesionConsecuencia.submit();
                    }
                });
            }
            else {
                $("#frmConsecuenciaLaboralLesionSummaryErrorMessage").empty();
                $("#frmConsecuenciaLaboralLesionSummaryErrorMessage").append("<p>" + Pe.ElectroPeru.SGI.Presentacion.Base.MensajeGenerico.MsgValideCampos + "</p>");
                return false;
            }
        },
        AjaxRegistrarInvestigacionLesionInformacionGeneralSuccess: function (resultado) {
            if (resultado.Result.CodigoInvestigacionInvolucrado != '' && resultado.Result.CodigoInvestigacionInvolucrado != null) {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
                base.Control.FormularioModelo.CategoriaLesion.CodigoInvestigacionInvolucrado = resultado.Result.CodigoInvestigacionInvolucrado;
                base.Control.FormularioModelo.CategoriaLesion.CodigoLesionActual = resultado.Result.CodigoLesionActual;
                base.Control.FormularioModelo.CategoriaLesion.CodigoLesionPotencial = resultado.Result.CodigoLesionPotencial;
                base.Control.FormularioModelo.CategoriaLesion.CodigoLesionPerdidoActual = resultado.Result.CodigoLesionPerdidoActual;
                base.Control.FormularioModelo.CategoriaLesion.CodigoLesionPerdidoPotencial = resultado.Result.CodigoLesionPerdidoPotencial;

                base.Control.BtnAgregarInformacionGeneralLesion().prop('disabled', false);
                base.Control.BtnGrabarDetallesTratamientoLesion().prop('disabled', false);
                base.Control.BtnGrabarConsecuenciaLaboralLesion().prop('disabled', false);

                base.Control.TxtActualConsecuenciaCategoriaLesion().val(resultado.Result.DescripcionConsecuenciaActual);
                base.Control.TxtPotencialConsecuenciaCategoriaLesion().val(resultado.Result.DescripcionConsecuenciaPotencial);
                $('input[name="consecuenciaInvestigacionCategoriaLesionActual"]').each(function (i) {
                    $(this).prop("checked", false);
                });
                $('input[name="consecuenciaInvestigacionCategoriaLesionPotencial"]').each(function (i) {
                    $(this).prop("checked", false);
                });
                $('#radioCategoriaLesionActual_' + resultado.Result.CodigoConsecuenciaActual).prop("checked", true);
                $('#radioCategoriaLesionPotencial_' + resultado.Result.CodigoConsecuenciaPotencial).prop("checked", true);
                
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxRegistrarInvestigacionLesionConsecuenciaSuccess: function (resultado) {
            if (resultado.Result == "1") {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        AjaxRegistrarInvestigacionLesionTratamientoSuccess: function (resultado) {
            if (resultado.Result == "1") {
                base.Control.Mensaje.Information({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloInformacion,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
            } else {
                base.Control.Mensaje.Warning({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.EtiquetaTituloAdvertencia,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.EtiquetaErrorRegistro
                });
            }
        },
        BtnCancelarClick: function () {
            base.Control.DlgForm.divDialog.close();
        },
        SlcLesionActualChange: function () {
            base.Event.CleanControlesLesionTrabajador();
            base.Event.CleanSubirDocumentosFatalidad();
            $('.codigoConsecuenciaLesionModalActual').each(function (i) {
                $(this).prop('checked', false);
            });
            base.Control.TxtDescripcionConsecuenciaActualLesion().val('');

            if (base.Control.SlcLesionActual().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.LesionTiempoPerdido) {
                base.Control.SlcLesionTiempoPerdidoActual().prop('disabled', false);
                base.Control.SlcReincorporaAlTrabajo().prop('disabled', false);
                base.Control.TxtDiasPerdidosEstimado().prop('disabled', false);
            }
            else if (base.Control.SlcLesionActual().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.LesionTrabajoRestringido) {
                base.Control.TxtDiasRestringidosEstimado().prop('disabled', false);
                base.Control.SlcReincorporaAlTrabajo().prop('disabled', false);
                $('#radioConsecuenciaActual_' + Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.Menor).prop('checked', true);
                base.Control.TxtDescripcionConsecuenciaActualLesion().val($('#radioConsecuenciaActual_' + Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.Menor).data().descripcion);
            }
            else if (base.Control.SlcLesionActual().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.Fatalidad) {
                base.Control.BtnAgregarAutopsia().prop('disabled', false);
                base.Control.BtnAgregarDefuncion().prop('disabled', false);
                base.Control.BtnAgregarCadaver().prop('disabled', false);
                base.Control.BtnAgregarIncidenteFatal().prop('disabled', false);
                $('#radioConsecuenciaActual_' + Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.Mayor).prop('checked', true);
                base.Control.TxtDescripcionConsecuenciaActualLesion().val($('#radioConsecuenciaActual_' + Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.Mayor).data().descripcion);
            }
            else if (base.Control.SlcLesionActual().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.LesionTratamientoMedico)
            {
                $('#radioConsecuenciaActual_' + Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.Menor).prop('checked', true);
                base.Control.TxtDescripcionConsecuenciaActualLesion().val($('#radioConsecuenciaActual_' + Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.Menor).data().descripcion);
            }
            else if (base.Control.SlcLesionActual().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.LesionPrimerosAuxilios)
            {               
                $('#radioConsecuenciaActual_' + Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.Insignificante).prop('checked', true);
                base.Control.TxtDescripcionConsecuenciaActualLesion().val($('#radioConsecuenciaActual_' + Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.Insignificante).data().descripcion);
            }
        },
        SlcLesionPotencialChange: function () {
            base.Control.SlcLesionTiempoPerdidoPotencial().val('');
            base.Control.SlcLesionTiempoPerdidoPotencial().prop('disabled', true);
            $('.codigoConsecuenciaLesionModalPotencial').each(function (i) {
                $(this).prop('checked', false);
            });
            base.Control.TxtDescripcionConsecuenciaPotencialLesion().val('');

            if (base.Control.SlcLesionPotencial().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.LesionTiempoPerdido)
            {
                base.Control.SlcLesionTiempoPerdidoPotencial().prop('disabled', false);
            }
            else if (base.Control.SlcLesionPotencial().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.LesionTrabajoRestringido)
            {
                $('#radioConsecuenciaPotencial_' + Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.Menor).prop('checked', true);
                base.Control.TxtDescripcionConsecuenciaPotencialLesion().val($('#radioConsecuenciaPotencial_' + Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.Menor).data().descripcion);
            }
            else if (base.Control.SlcLesionPotencial().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.Fatalidad)
            {
                $('#radioConsecuenciaPotencial_' + Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.Mayor).prop('checked', true);
                base.Control.TxtDescripcionConsecuenciaPotencialLesion().val($('#radioConsecuenciaPotencial_' + Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.Mayor).data().descripcion);
            }
            else if (base.Control.SlcLesionPotencial().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.LesionTratamientoMedico)
            {
                $('#radioConsecuenciaPotencial_' + Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.Menor).prop('checked', true);
                base.Control.TxtDescripcionConsecuenciaPotencialLesion().val($('#radioConsecuenciaPotencial_' + Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.Menor).data().descripcion);
            }
            else if (base.Control.SlcLesionPotencial().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.LesionPrimerosAuxilios)
            {
                $('#radioConsecuenciaPotencial_' + Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.Insignificante).prop('checked', true);
                base.Control.TxtDescripcionConsecuenciaPotencialLesion().val($('#radioConsecuenciaPotencial_' + Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.Insignificante).data().descripcion);
            }
        },
        SlcLesionTiempoPerdidoActualChange: function () {
            base.Control.TxtDescripcionConsecuenciaActualLesion().val('');
            $('.codigoConsecuenciaLesionModalActual').each(function (i) {
                $(this).prop('checked', false);
            });

            if (base.Control.SlcLesionTiempoPerdidoActual().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.ParcialTemporal
                || base.Control.SlcLesionTiempoPerdidoActual().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.TotalTemporal)
            {
                $('#radioConsecuenciaActual_' + Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.Moderado).prop('checked', true);
                base.Control.TxtDescripcionConsecuenciaActualLesion().val($('#radioConsecuenciaActual_' + Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.Moderado).data().descripcion);
            }
            else if (base.Control.SlcLesionTiempoPerdidoActual().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.ParcialPermanente
                || base.Control.SlcLesionTiempoPerdidoActual().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.TotalPermanente)
            {
                $('#radioConsecuenciaActual_' + Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.Mayor).prop('checked', true);
                base.Control.TxtDescripcionConsecuenciaActualLesion().val($('#radioConsecuenciaActual_' + Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.Mayor).data().descripcion);
            }
        },
        SlcLesionTiempoPerdidoPotencialChange: function () {
            base.Control.TxtDescripcionConsecuenciaPotencialLesion().val('');
            $('.codigoConsecuenciaLesionModalPotencial').each(function (i) {
                $(this).prop('checked', false);
            });

            if (base.Control.SlcLesionTiempoPerdidoPotencial().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.ParcialTemporal
                || base.Control.SlcLesionTiempoPerdidoPotencial().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.TotalTemporal) {
                $('#radioConsecuenciaPotencial_' + Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.Moderado).prop('checked', true);
                base.Control.TxtDescripcionConsecuenciaPotencialLesion().val($('#radioConsecuenciaPotencial_' + Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.Moderado).data().descripcion);
            }
            else if (base.Control.SlcLesionTiempoPerdidoPotencial().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.ParcialPermanente
                || base.Control.SlcLesionTiempoPerdidoPotencial().val() == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.TotalPermanente) {
                $('#radioConsecuenciaPotencial_' + Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.Mayor).prop('checked', true);
                base.Control.TxtDescripcionConsecuenciaPotencialLesion().val($('#radioConsecuenciaPotencial_' + Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioLesionTrabajador.DatosConstantes.Mayor).data().descripcion);
            }
        },
        CleanControlesLesionTrabajador: function () {
            base.Control.SlcLesionTiempoPerdidoActual().prop('disabled', true);
            base.Control.SlcReincorporaAlTrabajo().prop('disabled', true);
            base.Control.SlcReincorporaAlTrabajo().prop('disabled', true);
            base.Control.TxtDiasPerdidosEstimado().prop('disabled', true);
            base.Control.TxtDiasRestringidosEstimado().prop('disabled', true);
            base.Control.SlcLesionTiempoPerdidoActual().val('');
            base.Control.SlcReincorporaAlTrabajo().val('');
            base.Control.SlcReincorporaAlTrabajo().val('');
            base.Control.TxtDiasPerdidosEstimado().val('');
            base.Control.TxtDiasRestringidosEstimado().val('');
        },
        CleanSubirDocumentosFatalidad: function () {
            base.Control.TxtNombreArchivoAutopsia().val('');
            base.Control.HdnCodigoArchivoAutopsia().val('');
            base.Control.TxtNombreArchivoDefuncion().val('');
            base.Control.HdnCodigoArchivoDefuncion().val('');
            base.Control.TxtNombreArchivoCadaver().val('');
            base.Control.HdnCodigoArchivoCadaver().val('');
            base.Control.TxtNombreArchivoIncidenteFatal().val('');
            base.Control.HdnCodigoArchivoIncidenteFatal().val('');
        },        
        BtnAgregarDescansoMedicoClick: function () {
            base.Control.DlgFormularioInvestigacionDescansoMedico.Show({
                CodigoInvestigacion: base.Control.FormularioModelo.CategoriaLesion.CodigoInvestigacion,
                CodigoEstadoInvestigacion: base.Control.FormularioModelo.CategoriaLesion.CodigoEstadoInvestigacion,
                IndicadorObligatorio: true,
                flagPermitirCodigoTipoApendice: false,
                CodigoClaseAnexo: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoInvestigacionTipoAnexo.CodigoCertificadoDescansoMedico
            });
        },
        BtnAgregarAutopsiaClick: function () {
            base.Control.DlgFormularioInvestigacionAutopsia.Show({
                CodigoInvestigacion: base.Control.FormularioModelo.CategoriaLesion.CodigoInvestigacion,
                CodigoEstadoInvestigacion: base.Control.FormularioModelo.CategoriaLesion.CodigoEstadoInvestigacion,
                IndicadorObligatorio: true,
                flagPermitirCodigoTipoApendice: false,
                CodigoClaseAnexo: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoInvestigacionTipoAnexo.CodigoCertificadoAutopsia
            });
        },
        BtnAgregarDefuncionClick: function () {
            base.Control.DlgFormularioInvestigacionDefuncion.Show({
                CodigoInvestigacion: base.Control.FormularioModelo.CategoriaLesion.CodigoInvestigacion,
                CodigoEstadoInvestigacion: base.Control.FormularioModelo.CategoriaLesion.CodigoEstadoInvestigacion,
                IndicadorObligatorio: true,
                flagPermitirCodigoTipoApendice: false,
                CodigoClaseAnexo: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoInvestigacionTipoAnexo.CodigoCertificadoDefunsion
            });
        },
        BtnAgregarCadaverClick: function () {
            base.Control.DlgFormularioInvestigacionCadaver.Show({
                CodigoInvestigacion: base.Control.FormularioModelo.CategoriaLesion.CodigoInvestigacion,
                CodigoEstadoInvestigacion: base.Control.FormularioModelo.CategoriaLesion.CodigoEstadoInvestigacion,
                IndicadorObligatorio: true,
                flagPermitirCodigoTipoApendice: false,
                CodigoClaseAnexo: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoInvestigacionTipoAnexo.CodigoCopiaLevantamientoCadaver
            });
        },
        BtnAgregarIncidenteFatalClick: function () {
            base.Control.DlgFormularioInvestigacionIncidenteFatal.Show({
                CodigoInvestigacion: base.Control.FormularioModelo.CategoriaLesion.CodigoInvestigacion,
                CodigoEstadoInvestigacion: base.Control.FormularioModelo.CategoriaLesion.CodigoEstadoInvestigacion,
                IndicadorObligatorio: true,
                flagPermitirCodigoTipoApendice: false,
                CodigoClaseAnexo: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoInvestigacionTipoAnexo.CodigoActoInspeccionIncidenteFatal
            });
        },
        BtnAgregarAnexoMedicoClick: function () {            
            base.Control.DlgFormularioInvestigacionAnexoMedico.Show({                
                CodigoInvestigacion: base.Control.FormularioModelo.CategoriaLesion.CodigoInvestigacion,
                CodigoEstadoInvestigacion: base.Control.FormularioModelo.CategoriaLesion.CodigoEstadoInvestigacion,
                IndicadorObligatorio: true,
                flagPermitirCodigoTipoApendice: false,
                CodigoClaseAnexo: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.DatosConstantes.CodigoInvestigacionTipoAnexo.CodigoInformeMedico
            });
        },
    };    
    base.Ajax = {
        AjaxEliminarInvestigacionInformacionLesion: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.EliminarInvestigacionInformacionLesion,
            autoSubmit: false,
            onSuccess: base.Event.AjaxEliminarInvestigacionInformacionLesionSuccess
        }),
        AjaxRegistrarInvestigacionLesionInformacionGeneral: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarInvestigacionLesionInformacionGeneral,
            autoSubmit: false,
            onSuccess: base.Event.AjaxRegistrarInvestigacionLesionInformacionGeneralSuccess
        }),
        AjaxRegistrarInvestigacionLesionConsecuencia: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarInvestigacionLesionConsecuencia,
            autoSubmit: false,
            onSuccess: base.Event.AjaxRegistrarInvestigacionLesionConsecuenciaSuccess
        }),
        AjaxRegistrarInvestigacionLesionTratamiento: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Investigacion.FormularioInvestigacion.Actions.RegistrarInvestigacionLesionTratamiento,
            autoSubmit: false,
            onSuccess: base.Event.AjaxRegistrarInvestigacionLesionTratamientoSuccess
        }),
    };
};
