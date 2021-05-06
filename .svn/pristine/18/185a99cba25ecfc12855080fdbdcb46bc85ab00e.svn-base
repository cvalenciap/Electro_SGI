ns('Pe.ElectroPeru.SGI.Presentacion.Reportes.Dashboard.Index');
Pe.ElectroPeru.SGI.Presentacion.Reportes.Dashboard.Index.Controller = function () {
    var base = this;

    base.Ini = function () {
        'use strict'
        base.Control.DashboardModel = $.parseJSON(Pe.ElectroPeru.SGI.Presentacion.Reportes.Dashboard.Models.Dashboard);

        base.Control.btnConsultar().off('click');
        base.Control.btnConsultar().on('click', base.Event.btnConsultarClick);
        
        base.Control.slcTipoPeriodicidad().off('change');
        base.Control.slcTipoPeriodicidad().on('change', base.Event.slcTipoPeriodicidadChange);
    };

    base.Control = {        
        btnConsultar: function () { return $('#btnConsultar'); },

        slcTipoPeriodicidad: function () { return $('#slcTipoPeriodicidad'); },
        slcFiltroPeriodicidad: function () { return $('#slcFiltroPeriodicidad'); },
        slcIndicador: function () { return $('#slcIndicador'); },
        txtAnio: function () { return $('#txtAnio'); },
        txtFecha: function () { return $('#txtFecha'); },

        DivDashboards: function () { return $('#DivDashboards'); },
        DivContenedorDashboards: function () { return $('#DivContenedorDashboards'); },
        DivAnio: function () { return $('#DivAnio'); },
        DivFiltro: function () { return $('#DivFiltro'); },
        DivFecha: function () { return $('#DivFecha'); },

        GrdResultado: null,
        Mensaje: new Pe.GMD.UI.Web.Components.Message(),
        DashboardModel: null
    };

    base.Event = {
        btnConsultarClick: function () {
            LlenarGrafico('','')
        },
       
        slcTipoPeriodicidadChange: function () {
            if (base.Control.slcTipoPeriodicidad().val() == "0" || base.Control.slcTipoPeriodicidad().val() == "") {
                Reset();
            }
            else if (base.Control.slcTipoPeriodicidad().val() == "1")
            {
                base.Control.DivAnio().removeClass("hidden");
                base.Control.DivFiltro().removeClass("hidden");
                base.Control.DivFecha().removeClass("hidden");
                base.Control.btnConsultar().removeClass("hidden");

                base.Control.DivAnio().addClass("hidden");
                base.Control.DivFiltro().addClass("hidden");

                base.Control.slcFiltroPeriodicidad().html('');
                base.Control.slcFiltroPeriodicidad().append($('<option></option>').val(0).html("Todos"));
                base.Control.txtAnio().val('');
            }          
            else if (base.Control.slcTipoPeriodicidad().val() == "6") {
                base.Control.DivAnio().removeClass("hidden");
                base.Control.DivFiltro().removeClass("hidden");
                base.Control.DivFecha().removeClass("hidden");
                base.Control.btnConsultar().removeClass("hidden");
                                
                base.Control.DivFiltro().addClass("hidden");
                base.Control.DivFecha().addClass("hidden");

                base.Control.slcFiltroPeriodicidad().html('');
                base.Control.slcFiltroPeriodicidad().append($('<option></option>').val(0).html("Todos"));
                base.Control.txtFecha().val('');
            }
            else {
                base.Control.DivAnio().removeClass("hidden");
                base.Control.DivFiltro().removeClass("hidden");
                base.Control.DivFecha().removeClass("hidden");
                base.Control.btnConsultar().removeClass("hidden");

                base.Control.DivFecha().addClass("hidden");

                obtenerFiltro(base.Control.slcTipoPeriodicidad().val());

                base.Control.txtFecha().val('');
            }
        },
    };

    window.onload = function () {
        Reset();
        base.Control.slcTipoPeriodicidad().val('4');
        base.Event.slcTipoPeriodicidadChange();
    };

    function Reset() {
        base.Control.DivDashboards().html('');

        base.Control.slcFiltroPeriodicidad().html('');
        base.Control.slcFiltroPeriodicidad().append($('<option></option>').val(0).html("Todos"));
        base.Control.txtFecha().val('');
        base.Control.txtAnio().val('');

        base.Control.DivAnio().removeClass("hidden");
        base.Control.DivFiltro().removeClass("hidden");
        base.Control.DivFecha().removeClass("hidden");
        base.Control.btnConsultar().removeClass("hidden");

        base.Control.DivAnio().addClass("hidden");
        base.Control.DivFiltro().addClass("hidden");
        base.Control.DivFecha().addClass("hidden");
        base.Control.btnConsultar().addClass("hidden");
    }

    function LlenarGrafico(tipoAccion, tipoDashboard_v) {
        $.ajax({
            cache: false,
            type: "GET",
            url: Pe.ElectroPeru.SGI.Presentacion.Reportes.Dashboard.Actions.Consultar,
            data: { codigoIndicador: base.Control.slcIndicador().val(), tipoDashboard: tipoDashboard_v, subTipoPeriodicidad: base.Control.slcFiltroPeriodicidad().val(), tipoPeriodicidad: base.Control.slcTipoPeriodicidad().val(), anio: base.Control.txtAnio().val(), fecha: base.Control.txtFecha().val() },
            success: function (response) {

                if (tipoAccion == "") {
                    base.Control.DivDashboards().html('');
                }

                if (response.Dashboard.cantidad > 0)
                {
                    if (tipoAccion == "") {
                        base.Control.DivDashboards().append('<div class="filter-avanzado">' +
                            '<div class="col-md-12">' +
                                '<div id="DivContenedorDashboards" class="row"></div>' +
                            '</div>' +
                        '</div>');
                    }

                    var datos = []
                    var tipoGrafico = ""
                    var leyenda = false
                    var leyendaTexto = ""

                    var contDashboard4 = response.dataDashboard1.length + response.dataDashboard2.length + response.dataDashboard3.length;

                    if (response.dataDashboard1.length > 0 && (tipoDashboard_v == '1' || tipoDashboard_v == '')) {

                        if (tipoAccion != "" && tipoAccion != "actualizar"){
                            tipoGrafico = tipoAccion
                        } else {
                            tipoGrafico = "column"
                        }

                        if (tipoAccion == "") {
                            base.Control.DivContenedorDashboards().append(generarGrafico('1', 'Porcentaje de Valor', tipoGrafico, true));
                        }

                        if (tipoGrafico == "column")
                            leyenda = false
                        else
                            leyenda = true;

                        if (tipoGrafico == "pie")
                            leyendaTexto = "{label}";
                        else
                            leyendaTexto="";

                        datos = []
                        datos.push(
                                    [tipoGrafico, "Indicador Valor", leyenda, "{y}", "#,##0.00%", response.dataDashboard1, 14, leyendaTexto]
                                  );

                        construirGrafico(tipoGrafico, "1", "theme2", false, true, "Porcentaje de Valor", "Indicador: " + base.Control.slcIndicador().find("option:selected").text(), datos)
                    }

                    if (response.dataDashboard2.length > 0 && (tipoDashboard_v == '2' || tipoDashboard_v == '')) {
                        if (tipoAccion != "" && tipoAccion != "actualizar") {
                            tipoGrafico = tipoAccion
                        } else {
                            tipoGrafico = "spline"
                        }

                        if (tipoAccion == "") {
                            base.Control.DivContenedorDashboards().append(generarGrafico('2', 'Porcentaje Valor vs Meta', tipoGrafico, true));
                        }

                        if (tipoGrafico == "column")
                            leyenda = false
                        else
                            leyenda = true;

                        if (tipoGrafico == "pie")
                            leyendaTexto = "{label}";
                        else
                            leyendaTexto = "";
                      
                        datos = []
                        datos.push(
                                    [tipoGrafico, "Indicador Valor", leyenda, "{y}", "#,##0.00%", response.dataDashboard1, 14, leyendaTexto],
                                    [tipoGrafico, "Indicador Meta", leyenda, "{y}", "#,##0.00%", response.dataDashboard2, 14, leyendaTexto]
                                  );
                        
                        construirGrafico(tipoGrafico, "2", "theme1", false, true, "Porcentaje Valor vs Meta", "Indicador: " + base.Control.slcIndicador().find("option:selected").text(), datos)
                    }

                    if (response.dataDashboard3.length > 0 && (tipoDashboard_v == '3' || tipoDashboard_v == '')) {
                        if (tipoAccion != "" && tipoAccion != "actualizar") {
                            tipoGrafico = tipoAccion
                        } else {
                            tipoGrafico = "pie"
                        }

                        if (tipoAccion == "") {
                            base.Control.DivContenedorDashboards().append(generarGrafico('3', 'Porcentaje Meta', tipoGrafico, true));
                        }

                        if (tipoGrafico == "column")
                            leyenda = false
                        else
                            leyenda = true;

                        if (tipoGrafico == "pie")
                            leyendaTexto = "{label}";
                        else
                            leyendaTexto = "";

                        datos = []
                        datos.push(
                                    [tipoGrafico, "Indicador Meta", leyenda, "{y}", "#,##0.00%", response.dataDashboard2, 14, leyendaTexto]
                                  );

                        construirGrafico(tipoGrafico, "3", "theme1", false, true, "Porcentaje Meta", "Indicador: " + base.Control.slcIndicador().find("option:selected").text(), datos)
                    }

                    if (contDashboard4 > 0 && (tipoDashboard_v == '4' || tipoDashboard_v == '')) {

                        if (tipoAccion == "") {
                            base.Control.DivContenedorDashboards().append(generarGrafico('4', 'Porcentaje Valor vs Meta y Evaluación', tipoGrafico, true));
                        }

                        if (tipoGrafico == "column")
                            leyenda = false
                        else
                            leyenda = true;

                        datos = []
                        datos.push(
                                    ["column", "Indicador Valor", leyenda, "{y}", "#,##0.00%", response.dataDashboard1, 14, ""],
                                    ["line", "Indicador Meta", leyenda, "{y}", "#,##0.00%", response.dataDashboard2, 14, ""],
                                    ["area", "Indicador Meta", leyenda, "{y}", "#,##0.00%", response.dataDashboard3, 14, ""]
                                  );
                        
                        construirGrafico(tipoGrafico, "4", "light3", false, true, "Porcentaje Valor Vs Meta y Evaluación", "Indicador: " + base.Control.slcIndicador().find("option:selected").text(), datos)
                    }
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert("Error al cargar información")
            }
        });
    }

    function eventosGrafico(numero, tipoAccion) {        
        LlenarGrafico(tipoAccion, numero)
    }

    function generarGrafico(numero, titulo, tipoGrafico, botones) {
        var area = "btn-default", column = "btn-default", spline = "btn-default", pie = "btn-default"
        
        var divBotones = '';

        if (botones){
            if (tipoGrafico == "area") {
                area = "btn-primary"
            } if (tipoGrafico == "column") {
                column = "btn-primary"
            } if (tipoGrafico == "spline") {
                spline = "btn-primary"
            } if (tipoGrafico == "pie") {
                pie = "btn-primary"
            }

            divBotones = '<div class="col-sm-6">' +
                            '<div class="panel-heading-btn" style="text-align:right">' +
                                '<button id="chart' + numero + '-actualizar" class="btn btn-sm btn-icon btn-circle btn-default"><i class="fa fa-repeat"></i></button>' +
                                '<button id="chart' + numero + '-area" class="btn btn-sm btn-icon btn-circle ' + area + '"><i class="fa fa-area-chart"></i></button>' +
                                '<button id="chart' + numero + '-column" class="btn btn-sm btn-icon btn-circle ' + column + '"><i class="fa fa-bar-chart"></i></button>' +
                                '<button id="chart' + numero + '-spline" class="btn btn-sm btn-icon btn-circle ' + spline + '"><i class="fa fa-line-chart"></i></button>' +
                                '<button id="chart' + numero + '-pie" class="btn btn-sm btn-icon btn-circle ' + pie + '"><i class="fa fa-pie-chart"></i></button>' +
                            '</div>' +
                        '</div>';
        } else {
            divBotones = '';
        }

        var grafico =
        '<div id="DivChart"' + numero + ' class="col-md-6">' +
            '<div class="panel panel-primary">' +
                '<div class="panel-heading" style="height:50px;">' +
                    '<div class="row">' +
                        '<div class="col-sm-6">' +
                            '<h3 class="panel-title">' + titulo + '</h3>' +
                        '</div>' +
                        divBotones +
                    '</div>' +
                '</div>' +
                '<div class="panel-body">' +
                    '<div id="chartContainer' + numero + '" style="height: 300px; width: 100%;"></div>' +
                '</div>' +
            '</div>' +
        '</div>';

        return grafico;
    }

    function eventos(numero, tipo) {
        $('#chart' + numero +'-actualizar').off('click');
        $('#chart' + numero + '-actualizar').on('click', function () { eventosGrafico(numero, 'actualizar') });        

        $('#chart' + numero + '-area').off('click');
        $('#chart' + numero + '-area').on('click', function () { eventosGrafico(numero, 'area') });        

        $('#chart' + numero + '-column').off('click');
        $('#chart' + numero + '-column').on('click', function () { eventosGrafico(numero, 'column') });        

        $('#chart' + numero + '-spline').off('click');
        $('#chart' + numero + '-spline').on('click', function () { eventosGrafico(numero, 'spline') });        

        $('#chart' + numero + '-pie').off('click');
        $('#chart' + numero + '-pie').on('click', function () { eventosGrafico(numero, 'pie') });
        
        if(tipo != "")
        {
            $('#chart' + numero + '-actualizar').attr('class', 'btn btn-sm btn-icon btn-circle btn-default')
            $('#chart' + numero + '-area').attr('class', 'btn btn-sm btn-icon btn-circle btn-default')
            $('#chart' + numero + '-column').attr('class', 'btn btn-sm btn-icon btn-circle btn-default')
            $('#chart' + numero + '-spline').attr('class', 'btn btn-sm btn-icon btn-circle btn-default')
            $('#chart' + numero + '-pie').attr('class', 'btn btn-sm btn-icon btn-circle btn-default')
        }
    }

    function construirGrafico(tipoGrafico, numero, tema, exportar, animacion, titulo, subtitulo, datos) {
        eventos(numero, tipoGrafico);

        var data_v = []

        function toggleDataSeries(e) {
            if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
            } else {
                e.dataSeries.visible = true;
            }
            e.chart.render();
        }

        data_v = armarDataGrafico(datos);

        var chart = new CanvasJS.Chart("chartContainer" + numero, {
            theme: tema,
            exportEnabled: exportar,
            animationEnabled: animacion,
            title: {
                text: titulo,
                fontFamily: "Optima",
                fontWeight: "Bold",
                fontSize: 24
            },
            subtitles: [{
                text: subtitulo,
                fontFamily: "Optima",
                fontSize: 16
            }],
            axisY: {
                title: "% Valor",
                labelFormatter: function (e) {
                    return CanvasJS.formatNumber(e.value, "#,##0%");
                },
                includeZero: false
            },
            toolTip: {
                shared: true
            },
            legend: {
                cursor: "pointer",
                itemclick: toggleDataSeries
            },
            data: data_v
        });

        chart.render();
        chart.destroy();

        $('#chart' + numero + '-' + tipoGrafico).attr('class', 'btn btn-sm btn-icon btn-circle btn-primary')
    }

    function armarDataGrafico(datos) {
        var datosGrafico = []

        datos.forEach(function (item) {
            var data = {
                type: item[0],
                name: item[1],
                showInLegend: item[2],
                indexLabel: item[3],
                yValueFormatString: item[4],
                dataPoints: item[5],
                indexLabelFontSize: item[6],
                legendText: item[7]
            }

            datosGrafico.push(data);
        });

        return datosGrafico
    }

    function obtenerFiltro(tipo) {       
        $.ajax({
            cache: false,
            type: "GET",
            url: Pe.ElectroPeru.SGI.Presentacion.Reportes.Dashboard.Actions.ObtenerFiltroPeriodicidad, //hostWeb + "/Dashboard/ObtenerFiltroPeriodicidad"+ new {Area:"Reportes"},
            data: { tipo: tipo },
            success: function (response) {
                $('#slcFiltroPeriodicidad').html('');
                $.each(response, function (id, option) {
                    $('#slcFiltroPeriodicidad').append($('<option></option>').val(option.Value).html(option.Text));
                });
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert("Error al cargar información")
            }
        });
    }
};