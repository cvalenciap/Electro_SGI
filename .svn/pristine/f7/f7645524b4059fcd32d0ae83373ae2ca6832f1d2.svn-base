ns('Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioAgregarProcesoModal');
Pe.ElectroPeru.SGI.Presentacion.Capacitacion.Asignacion.FormularioAgregarProcesoModal.Controller = function (opts) {
    var base = this;
    base.Ini = function () {
        base.Function.CrearGridProcesos();
        base.Event.BtnBuscarProcesosClick();
        base.Control.BtnGrabarProceso().on('click', base.Event.BtnGrabarProcesoClick);
        
        if (opts != null && opts.AceptarSuccess != null && opts.AceptarSuccess)
            base.Event.AceptarSuccess = opts.AceptarSuccess;
    };
    base.Control = {
        CodigoFamiliaEquipo: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        CodigoProcesoAbreviado: null,
        Contador: 1,
        flagObtenerSubprocesos: false,
        GrdResultadoProcesos: null,
        GrdSubProcesos: null,
        TxtNombreProceso: function () { return $('#txtNombreProceso'); },
        BtnGrabarProceso: function () { return $('#btnGrabarProceso'); },
        BtnCancelarProceso: function () { return $('#btnCancelarProceso'); },
    };
    base.Event = {
        BtnBuscarProcesosClick: function () {
            var filtro = {
                CodigoFamiliaEquipo: base.Control.CodigoFamiliaEquipo,
                IndicadorProcesosNoSeleccionados: true
            };
            base.Control.GrdResultadoProcesos.Load(filtro);
        },   
        ObtenerSubProcesoClick: function () {
            if ($(this).is(':checked')) {
                $('#divGrdResultadoSubProcesos').empty();
                base.Control.Contador = 1;

                if (base.Control.flagObtenerSubprocesos) {
                    base.Control.CodigoProcesoAbreviado = $(this).data().codigoprocesoabreviado
                    base.Function.CrearGridSubProcesos();

                    var filtro = {
                        CodigoProceso: $(this).data().codigoproceso
                    };
                    base.Control.GrdSubProcesos.Load(filtro);
                }
            }
        },
        BtnGrabarProcesoClick: function () {            
            var selectedProcesoListData = base.Control.GrdResultadoProcesos.GetSelectedData();
            var arrayProcesos = [];
            for (var i = 0; i < selectedProcesoListData.length; i++) {
                var obj = {
                    CodigoProceso: selectedProcesoListData[i].CodigoProceso,
                    CodigoFamiliaEquipo: base.Control.CodigoFamiliaEquipo
                }
                arrayProcesos.push(obj);
            }
            base.Control.Mensaje.Confirmation({
                    title: Pe.ElectroPeru.SGI.Presentacion.Base.TituloResource.TituloConfirmarGuardar,
                    message: Pe.ElectroPeru.SGI.Presentacion.Base.MensajeResource.ConfirmacionGuardar,
                    indicadorModal: false,
                    onAccept: function () {
                        base.Ajax.AjaxGrabarProceso.data = arrayProcesos;
                        base.Ajax.AjaxGrabarProceso.submit();
                    }
                });             
        },        
        AjaxGrabarProcesoSuccess: function (resultado) {
 
   
            if (resultado.Result >= 1) {
                base.Control.DlgForm.divDialog.close();
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
            }
        },
    };
    base.Show = function (opts) {
      
        base.Control.flagObtenerSubprocesos = opts.flagObtenerSubprocesos;
        base.Control.CodigoFamiliaEquipo = opts.CodigoFamiliaEquipo;
        base.Control.Contador = 1;
        base.Control.DlgForm = new Pe.GMD.UI.Web.Components.Dialog({
            title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioProceso.Resource.EtiquetaFormularioAgregarProceso,
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
        AjaxGrabarProceso: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioProceso.Actions.RegistrarAsignacionProceso,
            autoSubmit: false,
            onSuccess: base.Event.AjaxGrabarProcesoSuccess
        }),
    };
    base.Function = {
        CrearGridProcesos: function () {
            var columns = new Array();       
            columns.push({
                data: '',
                "class": "text-center",
                title: '#',
                width: "5%",
                mRender: function (data, type, full) {
                    return base.Control.Contador++;
                }
            }); 
            columns.push({
                data: 'CodigoProcesoAbreviado',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioProceso.Resource.GridProceso,
                width: "30%"
               
            });
            columns.push({
                data: 'NombreProcesoEspaniol',
                "class": "text-center",
                title: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioProceso.Resource.GridDescripcionProceso,
                width: "65%"
            });                          
            base.Control.GrdResultadoProcesos = new Pe.GMD.UI.Web.Components.Grid({
                renderTo: 'divGrdResultadoProcesosModal',
                columns: columns,
                hasSelectionRows: true,
                hasPaging: false,
                hasPagingServer: false,
                columnDefs: [{ "width": "5%", "targets": [0] }],
                scrollX: '',
                proxy: {
                    url: Pe.ElectroPeru.SGI.Presentacion.Capacitacion.FormularioSeleccionarEquipos.Actions.BuscarProcesos,
                    source: 'listaProcesosFiltrada'
                },
                events: [
                    { type: 'click', selector: '.checkProceso', callBack: base.Event.ObtenerSubProcesoClick }
                ],
                returnCallbackComplete: function (instancia, records) {
                }
            });
        },        
    };
};