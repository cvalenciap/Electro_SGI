/// <summary>
/// Script de controlador del layaut del site.
/// </summary>
/// <remarks>
/// Creacion: 	GMD(JLRR) 07/01/2015
/// </remarks>
ns('Pe.ElectroPeru.SGI.Presentacion.Base.Layout.Current');
Pe.ElectroPeru.SGI.Presentacion.Base.Layout.Current.SubModule = null;

ns('Pe.ElectroPeru.SGI.Presentacion.Base.Layout');
Pe.ElectroPeru.SGI.Presentacion.Base.Layout.Controller = function () {
    var base = this;
    base.Ini = function () {
        'use strict';
        base.Control.SlcIdioma().on('change', base.Event.SlcIdiomaChange);

        base.Control.btnMenu().on('click', base.Event.BtnMenuClick);
        base.Control.btnOffCanvas().on('click', base.Event.BtnOffCanvasClick);
        base.Control.accordionMenu().on('click', base.Event.BtnSubMenuClick);
        base.Control.BtnRecords().on('click', base.Event.BtnRecordsClick);
        base.Control.BtnAccion().on('click', base.Event.BtnAccionClick);
        base.Control.BtnProgramacion().on('click', base.Event.BtnProgramacionClick);
        base.Event.CrearMenu();
    };

    base.Control = {
        btnMenu: function () { return $('#btnTogleMenu'); },
        btnOffCanvas: function () { return $('#btnOffcanvas'); },
        cssModuleNav: function () { return $('#divSidebar') },
        cssModulePanel: function () { return $('#divSideContent') },
        divOffCanvas: function () { return $('#divOffCanvas'); },
        accordionMenu: function () { return $('#accordionMenu > li.panel'); },
        lstMenu: function () { return $("#lstMenu") },
        SlcIdioma: function () { return $('#slcIdioma'); },
        BtnRecords: function () { return $('#btnRecords'); },
        BtnAccion: function () { return $('#btnAccion'); },
        BtnProgramacion: function () { return $('#btnProgramacion'); },
        FragmentViewForm: new Pe.GMD.UI.Web.Components.FragmentView(),
    };

    base.Event = {
        CrearMenu: function () {
            base.Ajax.AjaxMenu.data = {};
            base.Ajax.AjaxMenu.submit();
        },

        AjaxMenuSuccess: function (data) {
            'use strict';
            base.Control.lstMenu().html(Pe.GMD.UI.Web.Components.Util.CrearMenu(data));
            base.Function.DefaultActive();
        },
        SlcIdiomaChange: function () {
            /*var filtro = {
                CodigoIdioma: base.Control.SlcIdioma().val()
            };*/
            base.Ajax.AjaxCambiarIdioma.data = {
                codigoIdioma: base.Control.SlcIdioma().val()
            };
            base.Ajax.AjaxCambiarIdioma.submit();

            //Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Base.Actions.Index, filtro);
        },
        BtnOffCanvasClick: function (e) {
            base.Control.cssModuleNav().toggleClass('active');
            base.Control.cssModulePanel().toggleClass('active');
            base.Control.divOffCanvas().toggleClass('active');
            base.Control.cssModuleNav().removeClass('expanded');
            base.Control.cssModulePanel().removeClass('expanded');
        },
        BtnMenuClick: function (e) {
            base.Control.cssModuleNav().toggleClass('expanded');
            base.Control.cssModulePanel().toggleClass('expanded');
        },
        BtnSubMenuClick: function (e) {
            base.Control.cssModuleNav().removeClass('expanded');
            base.Control.cssModulePanel().removeClass('expanded');
        },
        CssToogleClick: function (event) {
            event.preventDefault();
            $(this).parent().parent().next().toggle('fast');
        },
        BtnRecordsClick: function () {
            var filtro = {
                CodigoIdioma: base.Control.SlcIdioma().val()

            };

            // Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Base.Actions.Records, filtro);

            base.Control.FragmentViewForm.getAjaxContent({
                idDivFragmentView: "dvRenderBody",
                action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.Records,
                onSuccess: function () {
                    base.Ini();
                },
                data: filtro
            });
        },
        BtnAccionClick: function () {
            var filtro = {
                CodigoIdioma: base.Control.SlcIdioma().val()
            };

            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Base.Actions.Accion, filtro);
        },
        BtnProgramacionClick: function () {
            var filtro = {
                CodigoIdioma: base.Control.SlcIdioma().val()
            };

            Pe.GMD.UI.Web.Components.Util.RedirectPost(Pe.ElectroPeru.SGI.Presentacion.Base.Actions.Programacion, filtro);
        },
        AjaxCambiarIdiomaSuccess: function (resultado) {
            if (resultado.IsSuccess) {
                location.reload(true);
            }
            else {
                window.location.href = Pe.ElectroPeru.SGI.Presentacion.Base.Actions.Index;
            }
        }
    }

    base.Ajax = {
        AjaxCambiarIdioma: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.CambiarIdioma,
            autoSubmit: false,
            onSuccess: base.Event.AjaxCambiarIdiomaSuccess
        }),
        AjaxMenu: new Pe.GMD.UI.Web.Components.Ajax({
            action: Pe.ElectroPeru.SGI.Presentacion.Base.Actions.Menu,
            autoSubmit: false,
            onSuccess: base.Event.AjaxMenuSuccess
        })
    };

    base.Function = {
        DefaultActive: function () {
            var pathNameTemporal;
            var winwdoLocationTemporal;
            winwdoLocationTemporal = window.location.pathname.replace("//", "/");

            $(".menu-dropdown ul.sub-menu li a").each(function () {
                if (this.className == "dropdown-toggle") {
                    $(".dropdown ul.dropdown-menu li a").each(function () {
                        pathNameTemporal = this.pathname.replace("//", "/");
                        if (pathNameTemporal == winwdoLocationTemporal) {
                            $(this).parent().addClass("active");
                            $(this).parent().parent().parent().addClass("open");
                            $(this).parent().parent().parent().addClass("active");
                            $(this).parent().parent().parent().parent().parent().addClass("active");
                        }
                    });
                } else {
                    pathNameTemporal = this.pathname.replace("//", "/");
                    if (pathNameTemporal == winwdoLocationTemporal) {
                        $(this).parent().addClass("active");
                        $(this).parent().parent().parent().addClass("active");
                    }
                }

            });
            $(".wrap-text").on("click", base.Function.fx);

        },

        fx: function () {
            var $allElement = $('[data-menu]');
            var $elementSubMenu = $allElement.find('.sub-menu');
            var $elLi = $('.menu-dropdown');
            var $elUl = $('.sub-menu');

            if (!$(this).parent().parent().hasClass('active')) {
                $allElement.removeClass('active');
                $elementSubMenu.slideUp();
                $(this).parent().parent().addClass('active');
                $(this).parent().parent().children().stop().slideDown();
            } else {
                $(this).parent().parent().removeClass('active');
                $elUl.stop().slideUp();
            }

        },
        SelectCurrenteModule: function () {
            /*
            var modulo = Yanbal.PYF.Web.Global.MenuSeleccionado.Modulo;
            var submenu = Yanbal.PYF.Web.Global.MenuSeleccionado.SubModulo;
    
            $('#' + modulo).addClass('active');
            $('#' + submenu).addClass('active');
            $('#' + modulo).find('.btn-submenu, .w-submenu').addClass('active');
            $('#' + modulo).find('.btn-submenu').next('ul').slideDown('fast', function () {
                $('#' + submenu).focus();
            });
            subMenuActual = $('#' + modulo).find('.btn-submenu');
            */
        }
    };
};