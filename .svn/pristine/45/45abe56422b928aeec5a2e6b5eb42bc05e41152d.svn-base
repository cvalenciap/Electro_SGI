/// <summary>
/// Script del Layout de la aplicación
/// </summary>
/// <remarks>
/// Creacion: 	GMD 08022017
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RecordSeccionCampo');
Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RecordSeccionCampo.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Control.RecordSeccionCampoModel = Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RecordSeccionCampo.Models.RecordSeccionCampo;

        base.Control.BtnGrabarRecord().off('click');
        base.Control.BtnGrabarRecord().on('click', base.Event.BtnGrabarRecordClick);

        base.Control.BtnCancelarRecord().off('click');
        base.Control.BtnCancelarRecord().on('click', base.Event.BtnCancelarRecordClick);

        base.Control.DlgFormularioRecordAnexo = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordAnexo.Controller({
            GrabarRecordAnexoSuccess: base.Event.BtnBuscarClick
        });

        base.Control.DlgFormularioRecordAnexoApendice = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordAnexoApendice.Controller({
            GrabarRecordAnexoApendiceSuccess: base.Event.BtnBuscarClick
        });

        base.Control.DlgFormularioRecordAccion = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioRecordAccion.Controller({
            GrabarRecordAccionSuccess: base.Event.BtnBuscarClick
        });

        base.Control.DlgFormularioVistaPreviaFoto = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioVistaPreviaFoto.Controller({

        });

        base.Control.DlgFormularioVistaPreviaRecord = new Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.FormularioVistaPreviaRecord.Controller({

        });

        base.Control.BtnAgregarRecordAnexoFoto().off('click');
        base.Control.BtnAgregarRecordAnexoFoto().on('click', base.Event.BtnAgregarRecordAnexoFotoClick);

        base.Control.BtnAgregarRecordAnexoAppendix().off('click');
        base.Control.BtnAgregarRecordAnexoAppendix().on('click', base.Event.BtnAgregarRecordAnexoAppendixClick);

        base.Control.BtnAgregarRecordAccion().off('click');
        base.Control.BtnAgregarRecordAccion().on('click', base.Event.BtnAgregarRecordAccionClick);

        if (base.Control.RecordSeccionCampoModel.CodigoTipoRecord != "" && base.Control.RecordSeccionCampoModel.CodigoTipoRecord != null) {
            base.Function.CrearGrid();
            base.Function.CrearGridAp();
            base.Function.CrearGridAccion();
            base.Event.BtnBuscarClick();
            $('#divBotonAccion').removeClass('hidden');
        }
        else {
            $('#divBotonAccion').addClass('hidden');
        }

        if (base.Control.RecordSeccionCampoModel.ListaCamposTipoFecha.length > 0) {
            $.each(base.Control.RecordSeccionCampoModel.ListaCamposTipoFecha, function (index, value) {
                new Pe.GMD.UI.Web.Components.Calendar({
                    inputFrom: $('#dtp' + value.CodigoSeccionCampo),
                    minDateFrom: new Date(1900, 1, 1)
                });
            });
        }

        $.each(base.Control.RecordSeccionCampoModel.ListaCamposPrincipales, function (key, value) {
            $('#' + key).val(value);
        });

        $.each(base.Control.RecordSeccionCampoModel.ListaCamposTipoFileUpload, function (index, value) {
            $('#btn' + value.CodigoSeccionCampo).on("click", base.Event.BtnVistaPreviaRecordClick);

            $('#myFile' + value.CodigoSeccionCampo).on("change", function () {
                var files = this.files;

                if (!files) {
                    base.Control.Mensaje.Warning({ message: "Archivo no Soportado" });
                    return;
                }

                if (this.files && this.files[0]) {
                    var reader = new FileReader();
                    var uploadFile = this.files[0];

                    reader.onload = function (e) {
                        if (reader.result != "") {
                            $('#myFile' + value.CodigoSeccionCampo).attr("archivoString", reader.result.split(',')[1]);
                        }
                        else {
                            base.Control.Mensaje.Information({ message: "Archivo no Soportado." });
                        }
                    };

                    reader.readAsDataURL(uploadFile);
                }
            });
        });


        ///// CMATTA INICIO
        $.each(base.Control.RecordSeccionCampoModel.ListaConfiguracionCampoSeccionCuerpoContenido, function (index, value) {
            if (value.CodigoHijos != null) {
                $("#slc" + value.CodigoSeccionCampo).off("change");
                $("#slc" + value.CodigoSeccionCampo).on("change", function () {
                    base.Event.BuscarComboAnidadoChange(this, $("#dvRenderBody").find('[codigoCampo="' + value.CodigoHijos.toLowerCase() + '"]'))
                })
            }
        });
        ///// CMATTA FIN

        Pe.GMD.UI.Web.Components.TextBox.Function.Configure();
    };

    base.Control = {
        RecordSeccionCampoModel: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        BtnGrabarRecord: function () { return $('#btnGuardarRecord'); },
        BtnCancelarRecord: function () { return $('#btnCancelarRecord'); },
        FragmentViewForm: new Pe.GMD.UI.Web.Components.FragmentView(),
        Validador: null,

        BtnAgregarRecordAnexoFoto: function () { return $('#btnAgregarRecordAnexoFoto'); },
        BtnAgregarRecordAnexoAppendix: function () { return $('#btnAgregarRecordAnexoAppendix'); },
        BtnAgregarRecordAccion: function () { return $('#btnAgregarRecordAccion'); },

        DlgFormularioRecordAnexo: null,
        DlgFormularioRecordAnexoApendice: null,
        DlgFormularioRecordAccion: null,
        DlgFormularioVistaPreviaFoto: null,
        DlgFormularioVistaPreviaRecord: null,

        GrdResultadoRecordFoto: null,
        GrdResultadoRecordAppendix: null,
        GrdResultadoRecordAccion: null,
    };

    base.Event = {

        ///// CMATTA INICIO
        BuscarComboAnidadoChange: function (padre, hijo) {
            base.Control.ComboHijo = hijo;
            base.Ajax.AjaxBuscarComboAnidado.data = {
                CodigoTipoLlenado: hijo.attr("codigoTipoLlenado"),
                CodigoOrigen: hijo.attr("codigoOrigen"),
                CodigoTabla: hijo.attr("codigoTabla"),
                DescripcionTabla: hijo.attr("descripcionTabla"),
                CondicionTabla: hijo.attr("condicionTabla"),
                ValorCampoPadre: $(padre).val()
            }
            base.Ajax.AjaxBuscarComboAnidado.submit();
        },
        ///// CMATTA FIN

        BtnCancelarRecordClick: function () {
            base.Control.RecordSeccionCampoModel.CodigoTipoRecord = null;
            base.Control.RecordSeccionCampoModel.Record.CodigoRecord = null;

            var filtro = {
            };

            base.Control.FragmentViewForm.getAjaxContent({
                idDivFragmentView: "dvRenderBody",
                action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.Records,
                onSuccess: function () {
                    base.Ini();
                },

                data: filtro
            });

        },

        BtnBuscarClick: function () {
            var filtroAnexoFoto = {
                CodigoRecord: base.Control.RecordSeccionCampoModel.Record.CodigoRecord,
                CodigoTipoAnexo: 'FOT'
            };

            var filtroAnexoApendice = {
                CodigoRecord: base.Control.RecordSeccionCampoModel.Record.CodigoRecord,
                CodigoTipoAnexo: 'ADJ'
            };

            var filtro = {
                CodigoRecord: base.Control.RecordSeccionCampoModel.Record.CodigoRecord
            };

            base.Control.GrdResultadoRecordFoto.Load(filtroAnexoFoto);
            base.Control.GrdResultadoRecordAppendix.Load(filtroAnexoApendice);
            base.Control.GrdResultadoRecordAccion.Load(filtro);
        },

        BtnGrabarRecordClick: function () {
            var listaRecordSeccionCampo = new Array();
            var formularioActual = false;
            var idFormulario = "";

            $.each(base.Control.RecordSeccionCampoModel.ListaSeccionIzquierda, function (indexSeccionIzquierda, valueSeccionIzquierda) {
                idFormulario = '#frmRecordSeccionCampo' + valueSeccionIzquierda.CodigoSeccion;

                if ($(idFormulario).is(":visible")) {
                    base.Control.Validador = new Pe.GMD.UI.Web.Components.Validator({
                        form: $(idFormulario),
                        messages: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RecordSeccionCampo.Resources.Validacion
                    });

                    formularioActual = true;

                    if (formularioActual) {
                        return false;
                    }
                }
            });

            var nombreSeccionIzquierda = $('#frmRecordSeccionCampo' + base.Control.RecordSeccionCampoModel.ListaSeccionIzquierda[0].CodigoSeccion).attr("nombreSeccionIzquierda");

            //Llenar Campos con Valores
            $.each($(idFormulario)[0].elements, function (indexFormulario, valueFormulario) {
                if (valueFormulario.id != "") {
                    var valorCampo = $('#' + valueFormulario.id).val();
                    var codigoSeccionCampo = $('#' + valueFormulario.id).attr("codigoSeccionCampo");
                    var codigoTipoRecord = $('#' + valueFormulario.id).attr("codigoTipoRecord");
                    var codigoSeccion = $('#' + valueFormulario.id).attr("codigoSeccion");
                    var codigoCampo = $('#' + valueFormulario.id).attr("codigoCampo");
                    var codigoTipoControl = $('#' + valueFormulario.id).attr("codigoTipoControl");

                    if (codigoTipoControl == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RecordSeccionCampo.DatosConstantes.TipoControl.TipoControlCheckBox) {
                        valorCampo = $('#' + valueFormulario.id).is(':checked');
                    }

                    if (codigoTipoControl == Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RecordSeccionCampo.DatosConstantes.TipoControl.TipoControlFileUpload) {
                        valorCampo = $("#" + valueFormulario.id).attr("archivoString");
                    }

                    if (codigoTipoControl != Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RecordSeccionCampo.DatosConstantes.TipoControl.TipoControlButton) {
                        if (codigoCampo != undefined) {
                            listaRecordSeccionCampo.push({
                                CodigoRecord: base.Control.RecordSeccionCampoModel.Record.CodigoRecord,
                                CodigoSeccionCampo: codigoSeccionCampo,
                                CodigoSeccion: codigoSeccion,
                                CodigoCampo: codigoCampo,
                                CodigoTipoRecord: codigoTipoRecord,
                                CodigoTipoControl: codigoTipoControl,
                                ValorCampo: valorCampo
                            });
                        }
                    }
                }
            });

            var indicadorSeccionPrincipalGuardar = $(idFormulario).attr("indicadorSeccionPrincipalGuardar") == "True" ? true : false;
            var codigoTipoRecord = $(idFormulario).attr("codigoTipoRecord");
            if (base.Control.RecordSeccionCampoModel.Record.CodigoRecord == null) {
                if (indicadorSeccionPrincipalGuardar) {
                    if (base.Control.Validador.isValid()) {
                        base.Control.Mensaje.Confirmation({
                            title: 'Confirmation',
                            message: 'Do you want to save this record?',
                            indicadorModal: false,
                            onAccept: function () {
                                base.Ajax.AjaxGrabarRecord.data = {
                                    CodigoRecord: base.Control.RecordSeccionCampoModel.Record.CodigoRecord,
                                    CodigoTipoRecord: codigoTipoRecord,
                                    IndicadorSeccionPrincipalGuardar: indicadorSeccionPrincipalGuardar,
                                    ListaRecordSeccionCampo: listaRecordSeccionCampo
                                }

                                base.Ajax.AjaxGrabarRecord.submit();
                            }
                        });
                    }
                    else {
                        $(idFormulario + "SummaryErrorMessage").empty();
                        $(idFormulario + "SummaryErrorMessage").append("<p>Verificar: Ingrese los Campos que son Obligatorios.</p>");
                    }
                } else {
                    base.Control.Mensaje.Warning({
                        title: 'Warning',
                        message: 'Vaya a la Sección Principal <strong>' + nombreSeccionIzquierda + '</strong> para guardar la Información!',
                    });
                }
            } else {
                if (base.Control.Validador.isValid()) {
                    base.Control.Mensaje.Confirmation({
                        title: 'Confirmation',
                        message: 'Do you want to save this record?',
                        indicadorModal: false,
                        onAccept: function () {
                            base.Ajax.AjaxGrabarRecord.data = {
                                CodigoRecord: base.Control.RecordSeccionCampoModel.Record.CodigoRecord,
                                CodigoTipoRecord: codigoTipoRecord,
                                IndicadorSeccionPrincipalGuardar: indicadorSeccionPrincipalGuardar,
                                ListaRecordSeccionCampo: listaRecordSeccionCampo
                            }

                            base.Ajax.AjaxGrabarRecord.submit();
                        }
                    });
                }
                else {
                    $(idFormulario + "SummaryErrorMessage").empty();
                    $(idFormulario + "SummaryErrorMessage").append("<p>Verificar: Ingrese los Campos que son Obligatorios.</p>");
                }
            }
        },

        AjaxEliminarSuccess: function (data) {
            'use strict'
            if (data.Result == null) {
                base.Control.Mensaje.Information({
                    title: "Información",
                    message: "Eliminacion de Registro"
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
                CodigoRecordAnexo: data.CodigoRecordAnexo,
                CodigoRecord: data.CodigoRecord
            });
        },

        BtnGridEditApendiceClick: function (row, data) {
            'use strict'
            base.Control.DlgFormularioRecordAnexoApendice.Show({
                CodigoRecordAnexo: data.CodigoRecordAnexo,
                CodigoRecord: data.CodigoRecord
            });
        },

        BtnGridEditAccionClick: function (row, data) {
            'use strict'
            base.Control.DlgFormularioRecordAccion.Show({
                CodigoAccion: data.CodigoAccion,
                CodigoRecord: data.CodigoRecord
            });
        },

        BtnGridAdjuntoClick: function (row, data) {
            'use strict'
            var filtro = {
                CodigoRecordAnexo: data.CodigoRecordAnexo
            };
            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.DescargarArchivoApendice, filtro);
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
            var nombreSeccionIzquierda = $('#frmRecordSeccionCampo' + base.Control.RecordSeccionCampoModel.ListaSeccionIzquierda[0].CodigoSeccion).attr("nombreSeccionIzquierda");

            if (base.Control.RecordSeccionCampoModel.Record.CodigoRecord != null) {
                base.Control.DlgFormularioRecordAnexo.Show({
                    CodigoRecord: base.Control.RecordSeccionCampoModel.Record.CodigoRecord,
                    CodigoRecordAnexo: null
                });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: 'Warning',
                    message: 'Vaya a la Sección Principal <strong>' + nombreSeccionIzquierda + '</strong> para guardar la Información!',
                });
            }
        },

        BtnAgregarRecordAnexoAppendixClick: function () {
            var nombreSeccionIzquierda = $('#frmRecordSeccionCampo' + base.Control.RecordSeccionCampoModel.ListaSeccionIzquierda[0].CodigoSeccion).attr("nombreSeccionIzquierda");

            if (base.Control.RecordSeccionCampoModel.Record.CodigoRecord != null) {
                base.Control.DlgFormularioRecordAnexoApendice.Show({
                    CodigoRecord: base.Control.RecordSeccionCampoModel.Record.CodigoRecord,
                    CodigoRecordAnexo: null
                });
            }
            else {
                base.Control.Mensaje.Warning({
                    title: 'Warning',
                    message: 'Vaya a la Sección Principal <strong>' + nombreSeccionIzquierda + '</strong> para guardar la Información!',
                });
            }
        },

        BtnAgregarRecordAccionClick: function () {
            var nombreSeccionIzquierda = $('#frmRecordSeccionCampo' + base.Control.RecordSeccionCampoModel.ListaSeccionIzquierda[0].CodigoSeccion).attr("nombreSeccionIzquierda");

            if (base.Control.RecordSeccionCampoModel.Record.CodigoRecord != null) {
                base.Control.DlgFormularioRecordAccion.Show({
                    CodigoRecord: base.Control.RecordSeccionCampoModel.Record.CodigoRecord,
                    CodigoAccion: null
                });
            }
        },

        BtnVistaPreviaRecordClick: function (e) {
            var valorArchivoString = $('#' + e.currentTarget.id).attr("fotoString");
            base.Control.DlgFormularioVistaPreviaRecord.Show({
                valorArchivoString: valorArchivoString
            });
        },

        AjaxGrabarRecordSuccess: function (resultado) {
            if (resultado.Result.CodigoRecord != null) {
                base.Control.RecordSeccionCampoModel.Record.CodigoRecord = resultado.Result.CodigoRecord;
                $('#slcTipoRecord').attr('readonly', 'readonly');
                $('#slcTipoRecord').attr('disabled', 'disabled');
                $('#slcTipoRecord').off('change');

                base.Control.Mensaje.Information({
                    title: 'Information',
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.SeGuardoInformacionExito
                });
            } else {
                base.Control.Mensaje.Warning({
                    title: 'Warning',
                    message: 'Se produjo un error al Guardar.'
                });
            }
        },

        BtnGridVisualizarClick: function (row, data) {
            base.Control.DlgFormularioVistaPreviaFoto.Show({
                CodigoRecordAnexo: data.CodigoRecordAnexo
            });
        },
        AjaxBuscarComboAnidadoSuccess: function (data) {
            base.Control.ComboHijo.find('option').remove();
            //base.Control.ComboHijo.append($("<option />").val('').text(Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar));
            $.each(data.Result, function (index, value) {
                base.Control.ComboHijo.append($("<option />").val(value.Value).text(value.Text));
            });
        }
    };

    base.Ajax = {
        AjaxGrabarRecord: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.RegistrarRecord,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarRecordSuccess
        }),

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

        AjaxBuscarComboAnidado: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Actions.BuscarComboAnidado,
            autoSubmit: false,
            onSuccess: base.Event.AjaxBuscarComboAnidadoSuccess
        }),
    };

    base.Function = {
        CrearGrid: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroRegistro',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridItem,
                width: "30%"
            });

            columns.push({
                data: 'Nombre',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridNombreFoto,
                width: "30%"
            });
            columns.push({
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridDescripcionFoto,
                width: "30%"
            });

            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridVistaPreviaFoto,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.VerFirma, event: { on: 'click', callBack: base.Event.BtnGridVisualizarClick } }
                ]
            });

            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditClick } },
                { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteClick } }
                ]
            });

            base.Control.GrdResultadoRecordFoto = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultRecordFoto',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {

                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.BuscarRecordAnexo,
                    source: 'Result'
                }
            });
        },

        CrearGridAp: function () {
            var columns = new Array();
            columns.push({
                data: 'NumeroRegistro',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridItem,
                width: "30%"
            });

            columns.push({
                data: 'TypeAnexo',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridTypeAnexo,
                width: "30%"
            });

            columns.push({
                data: 'Nombre',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridApendiceName,
                width: "30%"
            });
            columns.push({
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridDescription,
                width: "30%"
            });
            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridDownload,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Adjunto, event: { on: 'click', callBack: base.Event.BtnGridAdjuntoClick } }
                ]
            });

            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditApendiceClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteClick } }
                ]
            });

            base.Control.GrdResultadoRecordAppendix = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoRecordAppendix',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {

                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.BuscarRecordAnexo,
                    source: 'Result'
                }
            });
        },

        CrearGridAccion: function () {
            var columns = new Array();

            columns.push({
                data: 'NumeroAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridActionNumber,
                width: "40%"
            });

            columns.push({
                data: 'NombreUsuarioAccion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridAccionPlanteadaPor,
                width: "40%"
            });

            columns.push({
                data: 'FechaAccionVer',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridAccionCriadoEn,
                width: "30%"
            });
            columns.push({
                data: 'Descripcion',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridDescripcion,
                width: "30%"
            });

            columns.push({
                data: 'FechaVencimientoVer',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridFechaVencimiento,
                width: "30%"
            });

            columns.push({
                data: 'NombrePrioridad',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridPrioridad,
                width: "30%"
            });

            columns.push({
                data: 'NombreResponsable',
                title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridResponsable,
                width: "30%"
            });


            //columns.push({
            //    data: 'NombreEstado',
            //    title: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.Resource.GridEstado,
            //    width: "30%"
            //});

            columns.push({
                "data": "", "title": Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAcciones,
                "class": "controls",
                width: "10%",
                actionButtons: [
                    { type: Pe.GMD.UI.Web.Components.GridAction.Edit, event: { on: 'click', callBack: base.Event.BtnGridEditAccionClick } },
                    { type: Pe.GMD.UI.Web.Components.GridAction.Delete, event: { on: 'click', callBack: base.Event.BtnGridDeleteAccionClick } }
                ]
            });

            base.Control.GrdResultadoRecordAccion = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoRecordAccion',
                columns: columns,
                hasSelectionRows: false,
                columnDefs: [{ sWidth: '60px', aTargets: [1] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Seguimiento.Records.RegistroRecord.Actions.BuscarRecordAccion,
                    source: 'Result'
                }
            });
        },
    };
};
