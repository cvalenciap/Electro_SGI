/*--------------------------------------------------------------------------------------------------------- 
*@function: asideSlide
*@description : Efecto de slide al menu
**//*---------------------------------------------------------------------------------------------------- */
; (function ($, window, document, undefined) {
    defaults = {
        speed: '' || 400,
        fx: ''
    };

    // The actual plugin constructor
    function asideSlide(element, options) {
        //SELECTORES
        $body = $('body');
        $element = $(element);
        $btn = $('[data-asideslide="button"]'),
        $slide = $('[data-asideslide="slide"]');

        this.element = element;


        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;

        this.init();
    }

    asideSlide.prototype = {
        init: function () {
            var that = this;
            that.constructor();
        },
        constructor: function () {
            var that = this;
            if ($body.hasClass('aside-closed')) {
                $('.wrap-text, .bl-slide').css({
                    left: -202
                }, that.options.speed)
            }
            that.eventos();
        },

        eventos: function () {
            var that = this;
            $btn.on('click', function () {
                var $el = $(this),
                    $open = $el.hasClass('active');

                if (!$open) {
                    $body.addClass('aside-open');
                    $body.removeClass('aside-closed aside-closed-complete');
                    $el.addClass('active');

                    $('.wrap-text, .bl-slide').stop().animate({
                        left: 0
                    }, that.options.speed, function () {
                        $body.addClass('aside-open-complete');
                        if ($body.hasClass('aside-open-complete')) {

                            $('[data-menu]').each(function (key, val) {
                                if ($(this).hasClass('active')) {
                                    $(this).find('.sub-menu').slideDown();
                                    //$(this).find('.dropdown-menu').css('display', 'block')
                                }
                            });
                        }
                    });
                } else {
                    $body.addClass('aside-closed');
                    $body.removeClass('aside-open aside-open-complete');

                    $('.sub-menu').slideUp(function () {
                        $("[data-navajax='true']").each(function (key, val) {
                            var $el = $(this);

                            if ($el.hasClass('active')) {
                                $('.menu-dropdown').removeClass('active');
                                $el.closest('.menu-dropdown').addClass('active');
                            }
                        })
                    });



                    setTimeout(function () {
                        $('.wrap-text, .bl-slide').stop().animate({
                            left: -202
                        }, that.options.speed, function () {
                            $el.removeClass('active');
                            $body.addClass('aside-closed-complete');
                        });
                    }, 300)
                }
            });
        }
    };

    $.fn.asideSlide = function (options) {
        if (!$.data(this, 'plugin_' + 'asideSlide')) {
            $.data(this, 'plugin_' + 'asideSlide',
            new asideSlide(this, options));
        }
    }

})(jQuery, window, document);

/*--------------------------------------------------------------------------------------------------------- 
*@function: menuMultinivel
*@description : Menu Multinivel
**//*---------------------------------------------------------------------------------------------------- */
; (function ($, window, document, undefined) {


    defaults = {
        type: '' || 'dropdown',
        speed: '' || 600,
        fx: ''
    };

    // The actual plugin constructor
    function menuMultinivel(element, options) {

        //SELECTORES
        $body = $('body'),
        $allElement = $('[data-menu]'),
        $element = $(element);
        $elementBtn = $element.children('a');
        $elementSubMenu = $allElement.find('.sub-menu');

        this.element = element;


        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;

        this.init();
    }

    menuMultinivel.prototype = {
        init: function () {
            var that = this;
            that.constructor();
        },
        constructor: function () {
            var that = this;
            that.eventos();
        },
        eventos: function () {
            var that = this;
            $elementBtn.on('click', function (e) {

                if ($(this).closest('.menu-dropdown').data("menu") != "disabled" && !$body.hasClass('aside-closed'))
                    that.fx(that.options.type, $(this))
            })

        },
        fx: function (optionType) {

            var $el = arguments[1],
                $elLi = $el.closest('.menu-dropdown'),
                $elUl = $el.next('.sub-menu');

            switch (optionType) {
                case 'dropdown': {
                    if (!$elLi.hasClass('active')) {
                        $allElement.removeClass('active');
                        $elementSubMenu.slideUp();
                        $elLi.addClass('active');
                        $elUl.stop().slideDown(this.options.speed);
                    } else {
                        $elLi.removeClass('active');
                        $elUl.stop().slideUp(this.options.speed);
                    }
                }
            }
        }
    };


    $.fn.menuMultinivel = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + 'menuMultinivel')) {
                $.data(this, 'plugin_' + 'menuMultinivel',
                new menuMultinivel(this, options));
            }
        });
    }

})(jQuery, window, document);



$(function () {
    //$('[data-navAjax]').naxAjax();
    $('[data-menu]').menuMultinivel({
        type: "dropdown"
    });
    $.fn.asideSlide();


    var count = $('.menu-dropdown').find('.sub-menu').find('li');

    $('.menu-dropdown').find('.sub-menu').each(function (key, val) {
        if ($(this).find('li').length === 1) {
            $(this).addClass('oneItem');
        }
    });

});

