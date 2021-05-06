/// Copyright (c) 2015.
/// All rights reserved.
/// <summary>
/// Controlador de métodos generales
/// </summary>
/// <remarks>
/// Creacion: 	GMD(CERS) 20150107 <br />
/// </remarks>
ns('Pe.GMD.UI.Web.Components.Util');
Pe.GMD.UI.Web.Components.Util.GetKeyCode = function (e) {
    return e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
}

Pe.GMD.UI.Web.Components.Util.GetValueCopy = function (e) {
    var texto = "";
    if (window.clipboardData) {
        texto = window.clipboardData.getData('Text');
    }
    else {
        texto = e.originalEvent.clipboardData.getData('text/plain');
    }
    return texto;
}

Pe.GMD.UI.Web.Components.Util.ValidateBlurOnlyDate = function (e) {
    var ok = true;
    if (e.value.length < 10) {
        ok = false;
    }
    else {
        try {
            var date = $.datepicker.parseDate(Pe.GMD.UI.Web.Formato.Fecha, e.value);
            ok = (date.getFullYear() >= 1900)
        }
        catch (err) {
            ok = false;
        }
    }

    if (!ok) {
        $('#' + e.id).val('');
    }

    return ok;
}

Pe.GMD.UI.Web.Components.Util.ValidateCopyDate = function validarCopyFecha(e) {
    var texto = GetCopiedValue(e);
    return ValidateCopyDate(texto);
}

Pe.GMD.UI.Web.Components.Util.ValidateCopyOnlyNumeric = function (e) {
    var text = Pe.GMD.UI.Web.Components.Util.GetValueCopy(e);
    return Pe.GMD.UI.Web.Components.Util.ValidateStringOnlyNumeric(text);
}

Pe.GMD.UI.Web.Components.Util.GetCopiedValue = function (e) {
    var text = "";
    if (window.clipboardData) {
        text = window.clipboardData.getData('Text');
    }
    else {
        text = e.originalEvent.clipboardData.getData('text/plain');
    }
    return text;
}

Pe.GMD.UI.Web.Components.Util.ValidateStringOnlyNumeric = function (text) {
    var patron = /^[0-9\r\n]+$/;
    if (!text.search(patron))
        return true;
    else
        return false;
}

Pe.GMD.UI.Web.Components.Util.ValidateOnlyNumbers = function (e) {
    /*Validar la existencia del objeto event*/
    e = (e) ? e : event;

    var key = Pe.GMD.TemplateApp.Presentation.Web.Shared.Util.GetKeyCode(e);

    /*Predefinir como invalido*/
    var result = false;

    if (key >= 48 && key <= 57)
    { result = true; }
    if (evento.charCode == 0)/*direccionales*/
    { result = true; }

    if (key == 13)/*enter*/
    { result = true; }

    /*Regresar la result*/
    return result;
}

Pe.GMD.UI.Web.Components.Util.ValidaCadenaSoloTexto = function (e) {
    var tecla = (document.all) ? e.keyCode : e.which;
    patron = /^[a-zA-ZáéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ\s]+$/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
}

Pe.GMD.UI.Web.Components.Util.ValidarCopiarSoloTexto = function (e) {
    var text = Pe.GMD.UI.Web.Components.Util.GetValueCopy(e);
    return Pe.GMD.UI.Web.Components.Util.ValidaCadenaSoloTexto(text);
}

Pe.GMD.UI.Web.Components.Util.StringFormat = function () {
    // The string containing the format items (e.g. "{0}")
    // will and always has to be the first argument.
    var theString = arguments[0];

    // start with the second argument (i = 1)
    for (var i = 1; i < arguments.length; i++) {
        // "gm" = RegEx options for Global search (more than one instance)
        // and for Multiline search
        var regEx = new RegExp("\\{" + (i - 1) + "\\}", "gm");
        theString = theString.replace(regEx, arguments[i]);
    }

    return theString;
}

Pe.GMD.UI.Web.Components.Util.ValidateCopyOnlyAlphanumeric = function (e) {
    var text = Pe.GMD.UI.Web.Components.Util.GetValueCopy(e);
    var patron = /^[\u00F1A-Za-z0-9\-.\s]+$/i;
    var result = patron.test(text);
    return result;
}

Pe.GMD.UI.Web.Components.Util.ValidateCopyDate = function validarCampoFecha(value) {
    var date_regex = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
    return date_regex.test(value);
};

Pe.GMD.UI.Web.Components.Util.RemoveDrop = function () {
    var controls = $("input[type=text], input[type=password], textarea");
    controls.bind("drop", function () {
        return false;
    });
    controls = undefined;
}

Pe.GMD.UI.Web.Components.Util.RenderIndicador = function (data, formaAlterna) {
    var etiqueta = '';

    if (formaAlterna)
        etiqueta = Pe.GMD.UI.Web.Components.Util.RenderIndicadorDescripcion(data);
    else
        etiqueta = Pe.GMD.UI.Web.Components.Util.RenderIndicadorCheck(data);

    return etiqueta;
}

Pe.GMD.UI.Web.Components.Util.RenderIndicadorDescripcion = function (data, type, full) {
    var etiqueta = '';

    if (data === true)
        etiqueta = Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSi;
    else if (data === false)
        etiqueta = Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaNo;

    return etiqueta;
}

Pe.GMD.UI.Web.Components.Util.RenderIndicadorCheck = function (data, type, full) {
    var etiqueta = '';

    if (data === true)
        etiqueta = '<span class="control-table"><i class="fa fa-check-square" style="font-size: 16px"></i></span>';
        //etiqueta = '<span class="control-table"><i class="fa fa-check-circle-o" style="font-size: 16px"></i></span>';
    else if (data === false)
        etiqueta = '<span class="control-table"><i class="fa fa-square-o" style="font-size: 16px"></i></span>';
    //etiqueta = '<span class="control-table"><i class="fa fa-circle-o" style="font-size: 16px"></i></span>';

    return etiqueta;
}

Pe.GMD.UI.Web.Components.Util.RenderIcono = function (clase, icono, tooltip) {
    var etiqueta = '';

    if (tooltip)
        etiqueta = 'data-toggle="tooltip" data-placement="top" title="' + tooltip + '"'

    etiqueta = '<span class="control-table ' + clase + '" ' + etiqueta + '><i class="fa ' + icono + '"></i></span>';

    return etiqueta;
}

Pe.GMD.UI.Web.Components.Util.RenderIconoAccion = function (editar, eliminar) {
    var etiqueta = '';

    editar = (editar !== false);
    eliminar = (eliminar !== false);

    if (editar)
        etiqueta += Pe.GMD.UI.Web.Components.Util.RenderIcono('edit', 'fa-edit', Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridEditar);

    if (eliminar)
        etiqueta += Pe.GMD.UI.Web.Components.Util.RenderIcono('delete', 'fa-trash', Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.GridEliminar);

    return etiqueta;
}

Pe.GMD.UI.Web.Components.Util.CargarLista = function (listaDesplegable, listaValores, campoCodigo, campoDescripcion) {
    Pe.GMD.UI.Web.Components.Util.CargarListaDesplegable(listaDesplegable, Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaSeleccionar, listaValores, campoCodigo, campoDescripcion);
}

Pe.GMD.UI.Web.Components.Util.CargarListaFiltro = function (listaDesplegable, listaValores, campoCodigo, campoDescripcion) {
    Pe.GMD.UI.Web.Components.Util.CargarListaDesplegable(listaDesplegable, Pe.ElectroPeru.SGI.Presentacion.Base.GenericoResource.EtiquetaTodos, listaValores, campoCodigo, campoDescripcion);
}

Pe.GMD.UI.Web.Components.Util.CargarListaDesplegable = function (listaDesplegable, primerItem, listaValores, campoCodigo, campoDescripcion) {
    if (!campoCodigo) campoCodigo = 'Codigo';
    if (!campoDescripcion) campoDescripcion = 'Valor';

    listaDesplegable.empty();

    if (primerItem)
        listaDesplegable.append(new Option(primerItem, ""));

    if (listaValores) {
        $.each(listaValores, function (index, value) {
            listaDesplegable.append(new Option(value[campoDescripcion], value[campoCodigo]));
        });
    }
}

Pe.GMD.UI.Web.Components.Util.ByteToImage = function (buffer, onLoad) {
    var mime;
    var a = new Uint8Array(buffer);
    var nb = a.length;
    if (nb < 4) {
        return null;
    }
    var b0 = a[0];
    var b1 = a[1];
    var b2 = a[2];
    var b3 = a[3];
    if (b0 == 0x89 && b1 == 0x50 && b2 == 0x4E && b3 == 0x47) {
        mime = 'image/png';
    }
    else if (b0 == 0xff && b1 == 0xd8) {
        mime = 'image/jpeg';
    }
    else if (b0 == 0x47 && b1 == 0x49 && b2 == 0x46) {
        mime = 'image/gif';
    }
    else {
        return null;
    }
    var binary = "";
    for (var i = 0; i < nb; i++) {
        binary += String.fromCharCode(a[i]);
    }
    var base64 = window.btoa(binary);
    var image = new Image();
    image.onload = onLoad;
    image.src = 'data:' + mime + ';base64,' + base64;
    return image;
}

Pe.GMD.UI.Web.Components.Util.RedirectPost = function (location, args) {
    var form = '';
    if (args) {
        $.each(args, function (key, value) {
            form += '<input type="hidden" name="' + key + '" value="' + value + '">';
        });
    }
    var submit = $('<form action="' + location + '" method="POST" target="_self">' + form + '</form>');
    $('body').after(submit);
    submit.submit();
}

Pe.GMD.UI.Web.Components.Util.Left = function (cadena, len) {
    if (len <= 0)
        return "";
    else if (len > String(cadena).length)
        return cadena;
    else
        return String(cadena).substring(0, len);
}

Pe.GMD.UI.Web.Components.Util.Right = function (cadena, len) {
    if (len <= 0)
        return "";
    else if (len > String(cadena).length)
        return str;
    else {
        var iLen = String(cadena).length;
        return String(cadena).substring(iLen, iLen - len);
    }
}
Pe.GMD.UI.Web.Components.Util.ToUpperCase = function (e) {
    var caretPosition = getCaretPosition(e.target);
    e.target.value = e.target.value.toLocaleUpperCase();
    setCaretPosition(e.target, caretPosition);

};
String.prototype.format = String.prototype.formatoArreglo = function () {
    var s = this,
        i = arguments.length;

    while (i--) {
        s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
    }
    return s;
};

(function ($, undefined) {
    $.fn.getCursorPosition = function () {
        var el = $(this).get(0);
        var pos = 0;
        if ('selectionStart' in el) {
            pos = el.selectionStart;
        } else if ('selection' in document) {
            el.focus();
            var Sel = document.selection.createRange();
            var SelLength = document.selection.createRange().text.length;
            Sel.moveStart('character', -el.value.length);
            pos = Sel.text.length - SelLength;
        }
        return pos;
    }
})(jQuery);

//Giovanni Rivera C.
function getCursorTinyPosicion(editor) {
    //set a bookmark so we can return to the current position after we reset the content later
    var bm = editor.selection.getBookmark(0);
    //select the bookmark element
    var selector = "[data-mce-type=bookmark]";
    var bmElements = editor.dom.select(selector);
    //put the cursor in front of that element
    editor.selection.select(bmElements[0]);
    editor.selection.collapse();
    //add in my special span to get the index...
    //we won't be able to use the bookmark element for this because each browser will put id and class attributes in different orders.
    var elementID = "######cursor######";
    var positionString = '<span id="' + elementID + '"></span>';
    editor.selection.setContent(positionString);
    //get the content with the special span but without the bookmark meta tag
    var content = editor.getContent({ format: "html" });
    //find the index of the span we placed earlier
    var index = content.indexOf(positionString);
    //remove my special span from the content
    editor.dom.remove(elementID, false);
    //move back to the bookmark
    editor.selection.moveToBookmark(bm);
    return index;
};

Pe.GMD.UI.Web.Components.Util.ConvertToDecimal = function (value) {

    var format = Pe.GMD.UI.Web.Formato.Decimal;
    var number = value;

    format = format.replace(Pe.GMD.UI.Web.Formato.DecimalSeparadorDecimal, '@');
    format = format.replace(Pe.GMD.UI.Web.Formato.DecimalSeparadorMiles, ',');
    format = format.replace('@', '.');

    number = number.replace(Pe.GMD.UI.Web.Formato.DecimalSeparadorDecimal, '@');
    number = number.replace(Pe.GMD.UI.Web.Formato.DecimalSeparadorMiles, ',');
    number = number.replace('@', '.');

    number = $.parseNumber(number, { format: format });

    return parseFloat(number);
};

Pe.GMD.UI.Web.Components.Util.DecimalConvertToString = function (value) {

    var format = Pe.GMD.UI.Web.Formato.Decimal;
    var number = value.toString();

    format = format.replace(Pe.GMD.UI.Web.Formato.DecimalSeparadorDecimal, '@');
    format = format.replace(Pe.GMD.UI.Web.Formato.DecimalSeparadorMiles, ',');
    format = format.replace('@', '.');

    if (typeof decimal == 'string') {
        number = number.replace(Pe.GMD.UI.Web.Formato.DecimalSeparadorDecimal, '@');
        number = number.replace(Pe.GMD.UI.Web.Formato.DecimalSeparadorMiles, '');
        number = number.replace('@', '.');
    }

    number = $.formatNumber(number, { format: format });

    number = number.replace('.', '@');
    number = number.replace(',', Pe.GMD.UI.Web.Formato.DecimalSeparadorMiles);
    number = number.replace('@', Pe.GMD.UI.Web.Formato.DecimalSeparadorDecimal);

    return number;

};

Pe.GMD.UI.Web.Components.Util.ValidateDateRange = function (txtStart, txtEnd) {

    var isValid = true;

    var valueStart = txtStart.is('input') ? txtStart.val() : txtStart.html();
    var valueEnd = txtEnd.is('input') ? txtEnd.val() : txtEnd.html();

    if (valueStart != '' && valueEnd != '') {
        var dateStart = $.datepicker.parseDate(Pe.GMD.UI.Web.Formato.Fecha, valueStart);
        var dateEnd = $.datepicker.parseDate(Pe.GMD.UI.Web.Formato.Fecha, valueEnd);
        isValid = (dateStart <= dateEnd);
    }
    return isValid;
}

function getFechaActualDDMMYYYY() {
    var vrFechaActual = new Date();
    var vrFechaIngresada = new Date();
    var dia = vrFechaActual.getDate();
    var mes = vrFechaActual.getMonth() + 1;
    var anio = vrFechaActual.getFullYear();

    if (dia < 10) {
        dia = '0' + dia
    }
    if (mes < 10) {
        mes = '0' + mes
    }
    vrFechaActual = dia + '/' + mes + '/' + anio;
    return vrFechaActual;
}

function DureacionMesesDias(fFecha1, fFecha2) {
    fFecha2 = fFecha2 == null ? "" : fFecha2
    var years = 0, months = 0, days = 0;
    if (fFecha2 != "") {
        var dif = fFecha2 - fFecha1;
        var dias = Math.floor(dif / (1000 * 60 * 60 * 24));

        months = parseInt(dias / 30)
        if (months > 12) {
            years = parseInt(months / 12);
            months = parseInt(months % 12);
        }

        days = dias % 30;
    }
    return ({ "years": years, "months": months, "days": days });

}

function dayssInmonths(date) {
    date = new Date(date);
    return 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();
}


Date.prototype.addDays = function (days) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}
function getCaretPosition(ctrl) {
    var CaretPos = 0;    // IE Support
    if (document.selection) {
        ctrl.focus();
        var Sel = document.selection.createRange();
        Sel.moveStart('character', -ctrl.value.length);
        CaretPos = Sel.text.length;
    }
        // Firefox support
    else if (ctrl.selectionStart || ctrl.selectionStart == '0') {
        CaretPos = ctrl.selectionStart;
    }

    return CaretPos;
}
function setCaretPosition(ctrl, pos) {
    if (ctrl.setSelectionRange) {
        ctrl.focus();
        ctrl.setSelectionRange(pos, pos);
    }
    else if (ctrl.createTextRange) {
        var range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}

Pe.GMD.UI.Web.Components.Util.CrearMenu = function (modelo) {
    var module = modelo.Result.Result;
    var html = "";
    for (var i = 0; i < module.length; i++) {

        html += "<li class=\"menu-dropdown\" data-menu=\"dropdown\">";
        html += "<a href=\"#\" data-element=\"button-dropdown\" > ";
        html += "<span class=\"wrap-icon\">";
        html += "<i class=\"" + module[i].Icono + "\"></i></span><span class=\"wrap-text\" style=\"left:-202px\">";
        html += "<span class=\"text\">" + module[i].Nombre + "</span><i class=\"fa fa-bars\"></i></span></a>";
        html += "<ul class=\"sub-menu\">";
        html += "<li class=\"title\">";
        html += module[i].Nombre;
        html += "</li>";
        if (module[i].OpcionMenu != null && module[i].OpcionMenu.length > 0) {
            html += Pe.GMD.UI.Web.Components.Util.CreateContentModule(module[i].OpcionMenu);
        }
        html += "</ul>";
        html += "</li>";
    }

    return html;
};
Pe.GMD.UI.Web.Components.Util.CreateContentModule = function (subModule) {
    var htmlHijos = "";

    for (var j = 0; j < subModule.length; j++) {

        if (subModule[j].CodigoTipoOpcion == Pe.ElectroPeru.SGI.Transversal.Core.Constante.DatosConstantes.SubMenu) {

            htmlHijos += "<li class=\"dropdown\">";
            htmlHijos += "<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" >";
            htmlHijos += "<span style=\"width: 60px; height: 76%; position: absolute; top: 0px; right: 0; text-align: center; line-height: 51px; background: transparent; z-index: 9999;\"><i class=\"caret\"></i></span>";
            htmlHijos += "<span class=\"wrap-text-inner\"><span class=\"text\">" + subModule[j].Nombre + "</span></span></a>";

            htmlHijos += "<ul class=\"dropdown-menu\" role=\"menu\" >";

            if (subModule[j].OpcionMenu != null && subModule[j].OpcionMenu.length > 0) {
                for (var k = 0; k < subModule[j].OpcionMenu.length; k++) {
                    htmlHijos += "<li><a href=\"" + subModule[j].OpcionMenu[k].UrlAcceso + "\">";
                    htmlHijos += "<span class=\"wrap-text-inner\"><span class=\"text\">" + subModule[j].OpcionMenu[k].Nombre + "</span></span>"
                    htmlHijos += "</a></li>";
                }
            }

            htmlHijos += "</ul>";
            htmlHijos += "</li>";

        } else {

            htmlHijos += "<li class=\"dropdown-submenu\"><a href=\"" + subModule[j].UrlAcceso + "\">";
            htmlHijos += "<span class=\"wrap-text-inner\">";
            htmlHijos += "<span class=\"text\">";
            htmlHijos += subModule[j].Nombre;
            htmlHijos += "</span>";
            htmlHijos += "</span></a></li>";
        }

    }

    return htmlHijos;
};

//Botones grilla permisos dinámicos
Pe.GMD.UI.Web.Components.Util.PermisosBotonesGrilla = function (modelo, listaBotones) {
    var botones = new Array();
    var cantidad = modelo.length;
    for (var i = 0; i < cantidad; i++) {
        var elemento = modelo[i];
        for (var j = 0; j < listaBotones.length; j++) {
            if (elemento.Codigo == listaBotones[j].Accion) {
                botones.push({ type: listaBotones[j].type, event: listaBotones[j].event });
            }
        }
    }

    return botones;
};