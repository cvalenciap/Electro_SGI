/// Copyright (c) 2015.
/// All rights reserved.
/// <summary>
/// Libreria para la creación de grillas
/// </summary>
/// <remarks>
/// Creacion: 	GMD(JLRR) 20150107 <br />
/// </remarks>
ns('Pe.GMD.UI.Web.Components.Grid');
Pe.GMD.UI.Web.Components.Grid = function (opts) {
    this.Init(opts);
};

Pe.GMD.UI.Web.Components.Grid.prototype = {
    id: null,
    renderTo: null,
    columns: null,
    columnDefs: null,
    hasPaging: null,
    hasPagingServer: null,
    hasSelectionRows: null,
    hasTypeSelectionRows: null,
    selectionRowsEvent: null,
    selectionRowsCallback: null,
    instancia: null,
    searching: null,
    searchingText: null,
    pageLength: null,
    height: null,
    proxy: null,
    core: null,
    table: null,
    events: null,
    scrollY: null,
    scrollX: null,
    scrollCollapse: null,
    data: null,
    async: null,
    dataPagination: null,
    returnCallbackComplete: null,
    ordering: null,
    filterColumn: null,
    ///callback: null,
    Init: function (opts) {
        this.renderTo = $('#' + opts.renderTo);
        if (this.renderTo && this.renderTo.length == 0) {
            alert('ERROR: Not renderTo defined');
            return;
        }
        this.async = opts.async == false ? false : true;
        this.columns = opts.columns && opts.columns != null ? opts.columns : null;
        this.columnDefs = opts.columnDefs && opts.columnDefs != null ? opts.columnDefs : null;
        this.proxy = opts.proxy && opts.proxy != null ? opts.proxy : null;
        this.events = opts.events && opts.events != null ? opts.events : null;
        this.hasPaging = opts.hasPaging != null ? opts.hasPaging : true;
        this.hasPagingServer = opts.hasPagingServer != null ? opts.hasPagingServer : true;
        this.height = opts.height != null ? opts.height : null;
        this.scrollY = opts.scrollY != null ? opts.scrollY : null;
        this.scrollX = opts.scrollX != null ? opts.scrollX : null;
        this.filterColumn = opts.filterColumn != null ? opts.filterColumn : false;
        //if (opts.scrollX != undefined) {

        //}
        this.searching = opts.searching != null ? opts.searching : false;
        this.searchingText = opts.searchingText != null ? opts.searchingText : "";
        this.scrollCollapse = opts.scrollCollapse != null ? opts.scrollCollapse : null;
        this.hasSelectionRows = opts.hasSelectionRows != null ? opts.hasSelectionRows : true;
        this.hasTypeSelectionRows = opts.hasTypeSelectionRows != null ? opts.hasTypeSelectionRows : "checkbox";
        this.data = opts.data != null ? opts.data : null;
        this.pageLength = opts.pageLength != null ? opts.pageLength : 10;
        //this.callback = opts.callback != null ? opts.callback : null;
        this.selectionRowsEvent = opts.selectionRowsEvent != null ? opts.selectionRowsEvent : null;
        this.selectionRowsCallback = opts.selectionRowsCallback != null ? opts.selectionRowsCallback : null;
        this.instancia = opts.instancia != null ? opts.instancia : null;
        this.returnCallbackComplete = opts.returnCallbackComplete != null ? opts.returnCallbackComplete : null;
        this.ordering = opts.ordering != null ? opts.ordering : false;
        if (this.hasPagingServer) {
            this.dataPagination = {
                NumeroPagina: 0,
                RegistrosPagina: this.pageLength
            }
        }
        if (this.columns == null) {
            alert('ERROR: Not columms defined');
            return;
        }
        this.id = opts.id && opts.id != null ? opts.id : 'GMD-Grid-';
        this._privateFunction.ImplementTableElement.apply(this, [this.renderTo]);
        this._privateFunction.ProcessSelectionRows.apply(this);

        if (this.data != null) {
            this._privateFunction.CreateGrid.apply(this, [this.data]);
        }
    },
    Load: function (params) {
        this.proxy.params = params;
        if (this.hasPagingServer == true) {
            this._privateFunction.CreateGrid.apply(this);
        }
        else {
            this._privateFunction.CallProxyWithoutPaginServer.apply(this);
        }
    },
    LoadAsync: function (params) {

        this._privateFunction.CreateGridAsync.call(this, params);
    },

    RecordsTotal: function () {
        return this.core.context[0]._iRecordsTotal;
    },
    ExportToExcel: function (name) {
        this.table.tableExport({ type: 'excel', escape: 'false', tableName: "shieldui-grid", documentName: name });

    },
    DestroyGrid: function () {
        if (this.core != null) {
            this.core.destroy();
            this.core = null;
        }
    },
    GetSelectedData: function () {
        var data = this.core.rows('.selected').data();
        var lista = new Array();
        for (var i = 0; i < data.length; i++) {
            lista.push(data[i]);
        }
        return lista;
    },
    SetSelectedData: function (compareKey, Key) {
        var me = this;
        var data = this.core.rows().data();
        var lista = new Array();
        for (var i = 0; i < data.length; i++) {
            if (data[i][compareKey] == Key) {
                //if (this.hasTypeSelectionRows == "checkbox") {
                //    $(this.core.rows().context[0].aoData[i].anCells[0]).find('input[type=checkbox]').prop("checked", "checked");
                //    $(this.core.rows().context[0].aoData[i].anCells[0]).find('input[type=checkbox]').closest("tr").addClass("selected");
                //} else {
                $(this.core.rows().context[0].aoData[i].anCells[0]).find('input[type=' + this.hasTypeSelectionRows + ']').prop("checked", "checked");
                $(this.core.rows().context[0].aoData[i].anCells[0]).find('input[type=' + this.hasTypeSelectionRows + ']').closest("tr").addClass("selected");
                //}
            }
        }
        if (this.hasTypeSelectionRows == "checkbox") {
            if (me.core.data().length != 0) {
                var idCheckHeader = 'chkHeader-' + me.core.rows().context[0].sTableId;
                $('#' + idCheckHeader).prop('checked', (me.core.data().length == me.core.rows('.selected').data().length));
            }
        }
        return lista;
    },
    SelectionRowsEvent: function () {
        var me = this;
        var data = me.core.rows().data();
        var idCheckHeader = "";
        var idCheckRow = "";
        if (this.hasTypeSelectionRows == "checkbox") {
            idCheckHeader = 'chkHeader-' + me.core.rows().context[0].sTableId;
            idCheckRow = 'chkRow-' + me.core.rows().context[0].sTableId;

            $('#' + idCheckHeader).off("click");
            $('#' + idCheckHeader).on("click", function () {
                var chk = $(this);
                var rows = me.table.find('tr');
                rows.removeClass('selected');
                if (chk.is(':checked')) {
                    rows.addClass('selected');
                }
                me.table.find('.' + idCheckRow).prop('checked', chk.is(':checked'));

                if (me.selectionRowsEvent != null) {
                    var lista = [];
                    for (var i = 0; i < data.length; i++) {
                        lista.push(data[i]);
                    }
                    me.selectionRowsEvent.callBack.call(this, this, lista);
                }
            })
        } else {
            idCheckRow = 'rdRow-' + me.core.rows().context[0].sTableId;
        }

        me.table.off("click", '.' + idCheckRow);
        me.table.on('click', '.' + idCheckRow, function () {
            var row = $(this).parents('tr');
            if (me.hasTypeSelectionRows != "checkbox") {
                $(this).closest("table").find('tr').removeClass("selected");
            }
            row.toggleClass('selected');
            if (idCheckHeader != "") {
                //var chkHeader = $(me.table.find('.' + idCheckHeader));
                $('#' + idCheckHeader).prop('checked', (me.core.data().length == me.core.rows('.selected').data().length));
            }

            if (me.selectionRowsEvent != null) {
                me.selectionRowsEvent.callBack.call(this, this, me.core.rows(row).data())
            }

        });

        //$('.' + idCheckHeader).off("clickPaginate");
        //$('.' + idCheckHeader).on("clickPaginate", function () {
        //    if (me.selectionRowsEvent != null) {
        //        var lista = [];
        //        for (var i = 0; i < data.length; i++) {
        //            lista.push(data[i]);
        //        }
        //        me.selectionRowsEvent.callBack.call(this, this, lista);
        //    }
        //})

        //if ($('.' + idCheckHeader).prop("checked")) {
        //    $('.' + idCheckHeader).trigger("clickPaginate");
        //}
    },
    _privateFunction: {
        CreateGrid: function (dataSource) {
            $("#" + $(this)[0].id).data("instancia", this);

            if (this.core != null) {
                this.core.destroy();
            }

            if (this.proxy != null) {
                $("#" + $(this)[0].id).data("paginateUrl", this.proxy.url);
                $("#" + $(this)[0].id).data("paginateSource", this.proxy.source);
                if (this.proxy.params != null) {
                    if (this.hasPagingServer) {
                        this.proxy.params.NumeroPagina = this.dataPagination.NumeroPagina;
                        this.proxy.params.RegistrosPagina = this.dataPagination.RegistrosPagina;
                    }
                    $("#" + $(this)[0].id).data("paginateData", this.proxy.params);
                }
            }

            this.core = this.table.DataTable({
                etiquetaGrillaSinInformacion: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaGrillaTablaSinRegistro,
                etiquetaGrillaBotonAnterior: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaGrillaBotonAnterior,
                etiquetaGrillaBotonSiguiente: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaGrillaBotonSiguiente,
                etiquetaGrillaMostrarFilas: Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaGrillaMostrarFilas,
                columns: this.columns,
                filterColumn: this.filterColumn,
                //autoWidth: true,
                data: this.hasPagingServer == false ? dataSource : null,
                paging: this.hasPaging,
                serverSide: this.hasPagingServer,
                ordering: this.ordering,
                searching: this.searching,
                //columnDefs: this.columnDefs,
                ajax: this.hasPagingServer == true ? this._privateFunction.CallProxyPaginServer : null,
                pageLength: this.pageLength,

                //scrollY: this.scrollY != null ? this.scrollY : null,
                //scrollX: this.scrollX != null ? this.scrollX : null,
                //scrollCollapse: this.scrollCollapse != null ? this.scrollCollapse : null,

                initComplete: function () {


                    //var tr = (this).find("thead").find("tr").clone();
                    //$(this).find("thead").prepend(tr);
                    //this.api().columns().every(function () {
                    //    var column = this;
                    //    var select = $('<input type="text"></input>')
                    //        .appendTo($(column.header()).empty());


                    //var select = $('<select><option value=""></option></select>')
                    //    .appendTo($(column.header()).empty())
                    //    .on('change', function () {
                    //        var val = $.fn.dataTable.util.escapeRegex(
                    //            $(this).val()
                    //        );
                    //        column.search(val ? '^' + val + '$' : '', true, false).draw();
                    //    });
                    //column.data().unique().sort().each(function (d, j) {
                    //    select.append('<option value="' + d + '">' + d + '</option>')
                    //});
                    //});
                }
            });

            if (!this.hasPagingServer) {
                if (this.hasSelectionRows) {
                    this.SelectionRowsEvent();
                    if (this.selectionRowsCallback != null) {
                        this.selectionRowsCallback();
                    }
                }
            }
        },
        CreateGridAsync: function (dataSource) {
            $("#" + $(this)[0].id).data("instancia", this);

            if (this.core != null) {
                this.core.destroy();
            }

            if (this.proxy != null) {
                $("#" + $(this)[0].id).data("paginateUrl", this.proxy.url);
                $("#" + $(this)[0].id).data("paginateSource", this.proxy.source);
                if (this.proxy.params != null) {
                    if (this.hasPagingServer) {
                        this.proxy.params.NumeroPagina = this.dataPagination.NumeroPagina;
                        this.proxy.params.RegistrosPagina = this.dataPagination.RegistrosPagina;
                    }
                    $("#" + $(this)[0].id).data("paginateData", this.proxy.params);
                }
            }

            this.core = this.table.DataTable({
                columns: this.columns,
                //autoWidth: true,
                data: this.hasPagingServer == false ? dataSource : null,
                paging: this.hasPaging,
                serverSide: this.hasPagingServer,
                ordering: this.ordering,
                searching: this.searching,
                columnDefs: this.columnDefs,
                ajax: this.hasPagingServer == true ? this._privateFunction.CallProxyPaginServer : null,
                pageLength: this.pageLength,
                //scrollY: this.scrollY != null ? this.scrollY : null,
                //scrollX: this.scrollX != null ? this.scrollX : null,
                //scrollCollapse: this.scrollCollapse != null ? this.scrollCollapse : null
            });

            //var instancia = $(that).data("instancia");

            if (this.hasSelectionRows) {
                this.SelectionRowsEvent();
                if (this.selectionRowsCallback != null) {
                    this.selectionRowsCallback();
                }
            }
            if (this.returnCallbackComplete != null) {
                this.returnCallbackComplete(this, records);
            }
        },
        ImplementTableElement: function (renderTo) {

            this.table = $('<table />').uniqueId();
            this.id = this.id + this.table.attr('id');
            this.table.attr('id', this.id);
            this.table.width('100%');
            this.table.attr('cellspacing', '0');

            this.table.addClass('table table-bordered table-hover text-center text-middle');
            renderTo.append(this.table);
            this._privateFunction.ProcessColumns.apply(this);

            if (this.events != null) {
                var me = this;
                $.each(this.events, function (index, event) {
                    if (event.isRowEvent) {
                        me.table.on(event.type, event.selector, function () {
                            var row = me.core.row($(this).parents('tr'))
                            var data = row.data();
                            event.callBack.apply(this, [row, data]);
                        });
                    }
                    else {
                        me.table.on(event.type, event.selector, event.callBack);
                    }
                });
            }
            return this.table;
        },
        ProcessColumns: function () {
            var me = this;
            this.events = this.events || new Array();
            $.each(this.columns, function (index, column) {
                if (column.actionButtons) {

                    $.each(column.actionButtons, function (index, action) {
                       
                        me.events.push({
                            type: action.event.on,
                            selector: '.' + action.type.Icon + '-' + me.id + '-' + index,
                            callBack: action.event.callBack,
                            isRowEvent: true
                        });

                    });

                    column.mRender = function (data, type, full) {                        
                        var htmlSource = '';
                        $.each(column.actionButtons, function (index, action) {
                            var renderAction = action.validateRender ? action.validateRender(data, type, full) : true;
                            if (renderAction) {
                                htmlSource += action.type.Source(me.id, action.toolTip, index);
                            }
                        });
                        return htmlSource;
                    };
                };
            });
        },
        ProcessSelectionRows: function () {
            var me = this;
            if (this.hasSelectionRows) {
                if (this.hasTypeSelectionRows == "checkbox") {
                    var idCheckHeader = 'chkHeader-' + this.id;
                    var idCheckRow = 'chkRow-' + this.id;

                    this.columns.splice(0, 0, {
                        filter: false,
                        orderable: false,
                        data: '', title: '<input class="' + idCheckHeader + '" id="' + idCheckHeader + '" type="checkbox">',
                        'mRender': function (data, type, full) {
                            var html = '';
                            html += '<input class="' + idCheckRow + '" type="checkbox">';
                            return html;
                        }
                    });
                } else if (this.hasTypeSelectionRows == "radio") {
                    var idCheckRow = 'rdRow-' + this.id;
                    this.columns.splice(0, 0, {
                        data: '', title: '',
                        'mRender': function (data, type, full) {
                            var html = '';
                            html += '<input class="' + idCheckRow + '" type="radio" name="rdItemGrid">';
                            return html;
                        }
                    });
                }
            }
        },
        CallProxyPaginServer: function (that, request, callback, settings) {
            var that = this;
            var instancia = $(that).data("instancia");
            if (instancia != undefined) {
                if (instancia.proxy.params != null) {
                    if (request.search != undefined) {
                        if (instancia.searching) {
                            instancia.proxy.params[instancia.searchingText] = request.search.value;
                        }
                        instancia.proxy.params.NumeroPagina = request.start / request.length;
                        instancia.proxy.params.RegistrosPagina = request.length;
                        instancia.proxy.params.Filtros = settings.Filtros;
                        $.each(settings.Filtros, function (index, value) {
                            if (value.Valor == null) {
                                eval("instancia.proxy.params." + value.Columna + "=null");
                            } else {
                                eval("instancia.proxy.params." + value.Columna + "='" + (value.Valor != undefined && value.Valor != null && value.Valor != null ? $.trim(value.Valor) : value.Valor) + "'");
                            }

                        })
                        if (request.order.length != 0) {
                            instancia.proxy.params.ColumnaOrden = request.order[0].columnName;
                            instancia.proxy.params.TipoOrden = request.order[0].dir;
                        }
                    }
                    var ajaxBuscarPaginadoServer = new Pe.GMD.UI.Web.Components.Ajax({
                        action: instancia.proxy.url,
                        data: instancia.proxy.params,
                        onSuccess: function (data) {
                            var records = data[instancia.proxy.source];
                            callback({
                                'data': records,
                                "iTotalRecords": records.length > 0 ? records[0].FilasTotal : "0",
                                "iDisplayLength": records.length > 0 ? records[0].NumeroFila : "0",
                                "iTotalDisplayRecords": records.length > 0 ? records[0].FilasTotal : "0"
                            });

                            if (instancia.hasSelectionRows) {
                                instancia.SelectionRowsEvent();
                                if (instancia.selectionRowsCallback != null) {
                                    instancia.selectionRowsCallback();
                                }
                            }
                            if (instancia.returnCallbackComplete != null) {
                                instancia.returnCallbackComplete(instancia, records);
                            }
                        }
                    });
                }
            }


        },

        CallProxyWithoutPaginServer: function () {
            var me = this;
            var ajaxBuscar = new Pe.GMD.UI.Web.Components.Ajax({
                action: this.proxy.url,
                data: this.proxy.params,
                async: this.async,
                onSuccess: function (data) {
                    me._privateFunction.CreateGrid.apply(me, [data[me.proxy.source]]);
                    var instancia = $("#" + me.id).data("instancia");
                    if (instancia.hasSelectionRows) {
                        instancia.SelectionRowsEvent();
                        if (instancia.selectionRowsCallback != null) {
                            instancia.selectionRowsCallback();
                        }
                    }
                    if (instancia.returnCallbackComplete != null) {
                        instancia.returnCallbackComplete(me, data[me.proxy.source]);
                    }
                }
            });
        }
    }
};
ns('Pe.GMD.UI.Web.Components.GridAction');
Pe.GMD.UI.Web.Components.GridAction = {
    Check: {
        Class: 'check',
        Icon: 'fa-check-square',
        //Source: function (id) {
        //    return Pe.GMD.UI.Web.Components.Util.RenderIcono('check', 'fa-check-square fa-check-square-' + id, Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAprobar);
        //}
        Source: function (id, tooltip, index) {            
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridReactivar;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.Check, tooltip, index);
        }
    },
    Delete: {
        Class: 'eliminar',
        Icon: 'fa-trash',
        //Source: function (id) {
        //    return Pe.GMD.UI.Web.Components.Util.RenderIcono('delete', 'fa-trash fa-trash-' + id, Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaEliminar);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridEliminar;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.Delete, tooltip, index);
        }
    },
    Consulta: {
        Class: 'consulta',
        Icon: 'fa-question-circle',
        //Source: function (id) {
        //    return Pe.GMD.UI.Web.Components.Util.RenderIcono('consulta', 'fa-question-circle fa-question-circle-' + id, Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridConsulta);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridConsulta;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.Consulta, tooltip, index);
        }
    },
    Observacion: {
        Class: 'eyes',
        Icon: 'fa-eye',
        //Source: function (id) {
        //    return Pe.GMD.UI.Web.Components.Util.RenderIcono('eyes', 'fa-eye fa-eye-' + id, Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridObservacion);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridObservacion;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.Observacion, tooltip, index);
        }
    },
    DetalleBandeja: {
        Class: 'detalleBandeja',
        Icon: 'fa-eye',
        //Source: function (id, tooltip) {
        //    return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.DetalleBandeja, tooltip);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridDetalle;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.DetalleBandeja, tooltip, index);
        }
    },
    DetalleOEC: {
        Class: 'detalleOEC',
        Icon: 'fa-eye',
        //Source: function (id, tooltip) {
        //    return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.DetalleBandeja, tooltip);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridDetalleOEC;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.DetalleOEC, tooltip, index);
        }
    },
    DetalleOEE: {
        Class: 'detalleOEE',
        Icon: 'fa-eye',
        //Source: function (id, tooltip) {
        //    return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.DetalleBandeja, tooltip);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridDetalleOEE;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.DetalleOEE, tooltip, index);
        }
    },
    DetalleAEI: {
        Class: 'detalleAEI',
        Icon: 'fa-eye',
        //Source: function (id, tooltip) {
        //    return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.DetalleBandeja, tooltip);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridDetalleAEI;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.DetalleAEI, tooltip, index);
        }
    },
    DetalleIndicador: {
        Class: 'detalleIndicador',
        Icon: 'fa-eye',
        //Source: function (id, tooltip) {
        //    return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.DetalleBandeja, tooltip);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridDetalleIndicador;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.DetalleIndicador, tooltip, index);
        }
    },
    AgregarDetalleBandeja: {
        Class: 'agregarDetalleBandeja',
        Icon: 'fa-tasks',
        //Source: function (id, tooltip) {
        //    return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.DetalleBandeja, tooltip);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAgregarValores;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.AgregarDetalleBandeja, tooltip, index);
        }
    },
    Pdf: {
        Class: 'pdf',
        Icon: 'fa-file-pdf-o',
        //Source: function (id, tooltip) {
        //    return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.Pdf, (tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridContrato));
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridContrato;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.Pdf, tooltip, index);
        }
    },
    Adjunto: {
        Class: 'paperclip',
        Icon: 'fa-paperclip',
        //Source: function (id) {
        //    return Pe.GMD.UI.Web.Components.Util.RenderIcono('paperclip', 'fa-paperclip fa-paperclip-' + id, Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAdjunto);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAdjunto;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.Adjunto, tooltip, index);
        }
    },
    VistaPrevia: {
        Class: 'vistaPrevia',
        Icon: 'fa-picture-o',
        //Source: function (id) {
        //    return Pe.GMD.UI.Web.Components.Util.RenderIcono('vistaPrevia', 'fa-file-pdf-o fa-file-pdf-o-' + id, Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridVistaPrevia);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridVistaPrevia;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.VistaPrevia, tooltip, index);
        }
    },
    Parrafo: {
        Class: 'parrafo',
        Icon: 'fa-tasks',
        //Source: function (id) {
        //    return Pe.GMD.UI.Web.Components.Util.RenderIcono('parrafo', 'fa-tasks fa-tasks-' + id, Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridParrafo);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridParrafo;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.Parrafo, tooltip, index);
        }
    },
    Variable: {
        Class: 'variable',
        Icon: 'fa-sign-in',
        //Source: function (id) {
        //    return Pe.GMD.UI.Web.Components.Util.RenderIcono('variable', 'fa-sign-in fa-sign-in-' + id, Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAgregarVariable);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAgregarVariable;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.Variable, tooltip, index);
        }
    },
    Estadios: {
        Class: 'estadios',
        Icon: 'fa-external-link',
        //Source: function (id) {
        //    return Pe.GMD.UI.Web.Components.Util.RenderIcono('estadios', 'fa-external-link fa-external-link-' + id, Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridEstadios);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridEstadios;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.Estadios, tooltip, index);
        }
    },
    Temas: {
        Class: 'temas',
        Icon: 'fa-tasks',
        //Source: function (id) {
        //    return Pe.GMD.UI.Web.Components.Util.RenderIcono('temas', 'fa-tasks fa-tasks-' + id, Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridTemas);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridSeleccionarProcesos;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.Temas, tooltip, index);
        }
    },
    Predecesora: {
        Class: 'predecesora',
        Icon: 'fa-tasks',
        //Source: function (id) {
        //    return Pe.GMD.UI.Web.Components.Util.RenderIcono('predecesora', 'fa-tasks fa-tasks-' + id, Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridPredecesora);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridPredecesora;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.Predecesora, tooltip, index);
        }
    },
    Evidencia: {
        Class: 'evidencia',
        Icon: 'fa-external-link',
        //Source: function (id) {
        //    return Pe.GMD.UI.Web.Components.Util.RenderIcono('evidencia', 'fa-external-link fa-external-link-' + id, Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridEvidencia);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridEvidencia;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.Evidencia, tooltip, index);
        }
    },
    Edit: {
        Class: 'edit',
        Icon: 'fa-edit',
        //Source: function (id) {
        //    return Pe.GMD.UI.Web.Components.Util.RenderIcono('edit', 'fa-edit fa-edit-' + id, Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaEditar);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridEditar;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.Edit, tooltip, index);
        }
    },
    EditText: {
        Class: 'editarTexto',
        Icon: 'fa-text-width',
        //Source: function (id) {
        //    return Pe.GMD.UI.Web.Components.Util.RenderIcono('edit', 'fa-text-width fa-text-width-' + id, Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaEditarContenidoContrato);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaEditarContenidoContrato;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.EditText, tooltip, index);
        }
    },    
    Copy: {
        Class: 'copiar',
        Icon: 'fa-copy',
        //Source: function (id) {
        //    return Pe.GMD.UI.Web.Components.Util.RenderIcono('copiar', 'fa-copy fa-copy-' + id, Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaCopiar);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaCopiar;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.Copy, tooltip, index);
        }
    },
    CopyEstadios: {
        Class: 'copiarEstadio',
        Icon: 'fa-copy',
        //Source: function (id) {
        //    return Pe.GMD.UI.Web.Components.Util.RenderIcono('copiarEstadio', 'fa-copy fa-copy-' + id, Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaCopiarEstadio);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaCopiarEstadio;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.CopyEstadios, tooltip, index);
        }
    },

    CopyPlantilla: {
        Class: 'copiarPlantilla',
        Icon: 'fa-copy',
        //Source: function (id) {
        //    return Pe.GMD.UI.Web.Components.Util.RenderIcono('copiarPlantilla', 'fa-copy fa-copy-' + id, Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaCopiarPlantilla);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaCopiarPlantilla;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.CopyPlantilla, tooltip, index);
        }
    },

    Close: {
        Class: 'cerrar',
        Icon: 'fa-lock',
        //Source: function (id) {
        //    return Pe.GMD.UI.Web.Components.Util.RenderIcono('cerrar', 'fa-lock fa-lock-' + id, Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaBloquear);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaBloquear;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.Close, tooltip, index);
        }
    },
    Open: {
        Class: 'abrir',
        Icon: 'fa-unlock',
        //Source: function (id) {
        //    return Pe.GMD.UI.Web.Components.Util.RenderIcono('abrir', 'fa-unlock fa-unlock-' + id, Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaDesbloquear);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaDesbloquear;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.Open, tooltip, index);
        }
    },
    Notify: {
        Class: 'notificar',
        Icon: 'fa-envelope-o',
        //Source: function (id) {
        //    return Pe.GMD.UI.Web.Components.Util.RenderIcono('notificar', 'fa-envelope-o fa-envelope-o-' + id, Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaNotificar);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaNotificar;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.Notify, tooltip, index);
        }
    },
    Play: {
        Class: 'iniciar',
        Icon: 'fa-play',
        //Source: function (id) {
        //    return Pe.GMD.UI.Web.Components.Util.RenderIcono('iniciar', 'fa-play fa-play-' + id, Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaIniciar);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaIniciar;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.Play, tooltip, index);
        }
    },
    FechaActividad: {
        Class: 'fechaActividad',
        Icon: 'fa-calendar',
        //Source: function (id) {
        //    return Pe.GMD.UI.Web.Components.Util.RenderIcono('fechaActividad', 'fa-calendar fa-calendar-' + id, Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaFechaActividad);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaFechaActividad;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.FechaActividad, tooltip, index);
        }
    },
    Responsables: {
        Class: 'responsable',
        Icon: 'fa-tasks',
        //Source: function (id) {
        //    return Pe.GMD.UI.Web.Components.Util.RenderIcono('responsable', 'fa-tasks fa-tasks-' + id, Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaResponsables);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaResponsables;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.Responsables, tooltip, index);
        }
    },
    ResponsableEvidencia: {
        Class: 'responsableEvidencia',
        Icon: 'fa-external-link',
        //Source: function (id) {
        //    return Pe.GMD.UI.Web.Components.Util.RenderIcono('responsableEvidencia', 'fa-external-link fa-external-link-' + id, Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaResponsableEvidencias);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaResponsableEvidencias;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.ResponsableEvidencia, tooltip, index);
        }
    },
    FileUpload: {
        Class: 'fileupload',
        Icon: 'fa-upload',
        //Source: function (id) {
        //    var selector = 'fa-upload-' + id;
        //    return Pe.GMD.UI.Web.Components.Util.RenderIcono('verificar', 'fa-upload ' + selector, Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaGridFileUpload);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaGridFileUpload;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.FileUpload, tooltip, index);
        }
    },
    //DetalleBandeja: {
    //    Class: 'detalleBandeja',
    //    Icon: 'fa-tasks',
    //    //Source: function (id, tooltip) {
    //    //    return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.DetalleBandeja, tooltip);
    //    //}
    //    Source: function (id, tooltip, index) {
    //        return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.DetalleBandeja, tooltip, index);
    //    }
    //},
    VerHerramientas: {
        Icon: 'fa-cogs',
        Source: function (id, tooltip, index) {
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.VerHerramientas, tooltip, index);
        }
    },
    VerEquipos: {
        Icon: 'fa-truck',
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridSeleccionarEquipos;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.VerEquipos, tooltip, index);
        }
    },
    ReporteRecord: {
        Class: 'reporteRecord',
        Icon: 'fa-file-pdf-o',
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridReporteRecord;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.ReporteRecord, tooltip, index);
        }
    },
    Revisar: {
        Class: 'revisar',
        Icon: 'fa-eye',
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridRevisar;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.Revisar, tooltip, index);
        }
    },
    VerAccion: {
        Class: 'verAccion',
        Icon: 'fa-eye',
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridVerAccion;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.VerAccion, tooltip, index);
        }
    },
    VerHistorialInvestigacion: {
        Class: 'verHistorialInvestigacion',
        Icon: 'fa-eye',
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridVerHistorialInvestigacion;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.VerHistorialInvestigacion, tooltip, index);
        }
    },
    RegistroSeguimiento: {
        Class: 'registroSeguimiento',
        Icon: 'fa-list',
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridRegistroSeguimiento;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.RegistroSeguimiento, tooltip, index);
        }
    },
    VerSeguimiento: {
        Class: 'verSeguimiento',
        Icon: 'fa-tasks',
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridVerSeguimiento;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.VerSeguimiento, tooltip, index);
        }
    },
    DescargarFoto: {
        Class: 'descargarFoto',
        Icon: 'fa-image',
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridDescargarFoto;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.DescargarFoto, tooltip, index);
        }
    },
    DescargarAnexo: {
        Class: 'descargarAnexo',
        Icon: 'fa-download',
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridDescargarAnexo;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.DescargarAnexo, tooltip, index);
        }
    },
    ArchivoArchivado: {
        Class: 'archivoArchivado',
        Icon: 'fa-file-archive-o',
        //Source: function (id, tooltip) {
        //    return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.ArchivoArchivado, tooltip);
        //}
        Source: function (id, tooltip, index) {
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.ArchivoArchivado, tooltip, index);
        }
    },
    ValorAlquiler: {
        Class: 'valorAlquiler',
        Icon: 'fa-tasks',
        //Source: function (id) {
        //    return Pe.GMD.UI.Web.Components.Util.RenderIcono('valorAlquiler', 'fa-tasks fa-tasks-' + id, Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridValorAlquiler);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridValorAlquiler;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.ValorAlquiler, tooltip, index);
        }
    },
    DescargarAdjunto: {
        Class: 'descargar',
        Icon: 'fa-download',
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridDescargar;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.DescargarAdjunto, tooltip, index);
        }
    },

    DescargarIncidente: {
        Class: 'reporteIncidente',
        Icon: 'fa-file-pdf-o',
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridDescargarIncidente;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.DescargarIncidente, tooltip, index);
        }
    },

    DescargarInvestigacion: {
        Class: 'reporteInvestigacion',
        Icon: 'fa-file-pdf-o',
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridDescargarInvestigacion;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.DescargarInvestigacion, tooltip, index);
        }
    },

    AsignarSuplente: {
        Class: 'asignarSuplente',
        Icon: 'fa-user',
        //Source: function (id, tooltip) {
        //    tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaAsignarSuplente;
        //    return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.AsignarSuplente, tooltip);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridSeleccionarPersonas;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.AsignarSuplente, tooltip, index);
        }
    },

    RegistrarNotas: {
        Class: 'registrarNotas',
        Icon: 'fa-user',
        //Source: function (id, tooltip) {
        //    tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaAsignarSuplente;
        //    return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.AsignarSuplente, tooltip);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridRegistrarNotas;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.RegistrarNotas, tooltip, index);
        }
    },

    ResponderConsulta: {
        Class: 'responderConsulta',
        Icon: 'fa-paper-plane-o',
        //Source: function (id) {
        //    return Pe.GMD.UI.Web.Components.Util.RenderIcono('responder', 'fa-paper-plane-o fa fa-paper-plane-o-' + id, Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaResponder);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaResponder;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.ResponderConsulta, tooltip, index);
        }
    },
    Reenviar: {
        Class: 'reenviar',
        Icon: 'fa-share',
        //Source: function (id) {
        //    return Pe.GMD.UI.Web.Components.Util.RenderIcono('reenviar', 'fa-share fa fa-share-' + id, Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaReenviar);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaReenviar;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.Reenviar, tooltip, index);
        }
    },
    Visualizar: {
        Class: 'eyes',
        Icon: 'fa-eye',
        //Source: function (id) {
        //    return Pe.GMD.UI.Web.Components.Util.RenderIcono('eyes', 'fa-eye fa-eye-' + id, Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaVisualizar);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaVisualizar;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.Visualizar, tooltip, index);
        }
    },
    VerFirma: {
        Class: 'verFirma',
        Icon: 'fa-eye',
        //Source: function (id, tooltip) {
        //    tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaVerFirma;
        //    return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.VerFirma, tooltip);
        //}
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaVerFirma;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.VerFirma, tooltip, index);
        }
    },
    AsignarProyecto: {
        Class: 'asignarProyecto',
        Icon: 'fa-link',
        Source: function (id, tooltip) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaAsignarProyecto;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.AsignarProyecto, tooltip);
        }
    },
    AsignarStaff: {
        Class: 'asignarStaff',
        Icon: 'fa-ellipsis-v',
        Source: function (id, tooltip) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaAsignarStaff;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.AsignarStaff, tooltip);
        }
    },

    Aprobar: {
        Class: 'aprobar',
        Icon: 'fa-check',
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridAprobar;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.Aprobar, tooltip, index);
        }
    },

    Excel: {
        Class: 'excel',
        Icon: 'fa-file-excel-o',
        Source: function (id, tooltip, index) {
            tooltip = tooltip ? tooltip : Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridExcel;
            return Pe.GMD.UI.Web.Components.GridAction.Source(id, Pe.GMD.UI.Web.Components.GridAction.Excel, tooltip, index);
        }
    },

    Source: function (id, atributos, tooltip, index) {
        //var selector = atributos.Icon + '-' + id;
        //return Pe.GMD.UI.Web.Components.Util.RenderIcono(atributos.Class, atributos.Icon + ' ' + selector, tooltip);
        var selector = atributos.Icon + '-' + id + '-' + index;
        return Pe.GMD.UI.Web.Components.Util.RenderIcono(atributos.Class, atributos.Icon + ' ' + selector, tooltip);
    }
};