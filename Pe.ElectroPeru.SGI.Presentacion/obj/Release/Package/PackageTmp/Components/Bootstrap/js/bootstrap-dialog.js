﻿(function (a, b) {
    if (typeof module !== "undefined" && module.exports) {
        module.exports = b(require("jquery")(a))
    } else {
        if (typeof define === "function" && define.amd) {
            define("bootstrap-dialog", ["jquery"], function (c) {
                return b(c)
            })
        } else {
            a.BootstrapDialog = b(a.jQuery)
        }
    }
}(this, function (b) {
    var a = function (c) {
        this.defaultOptions = b.extend(true, {
            id: a.newGuid(),
            buttons: [],
            data: {},
            onshow: null,
            onshown: null,
            onhide: null,
            onhidden: null,
            showCloseButton: null,
            closeEvent: null,
        }, a.defaultOptions);
        this.indexedButtons = {};
        this.registeredButtonHotkeys = {};
        this.draggableData = {
            isMouseDown: false, mouseOffset: {}
        };
        this.realized = false;
        this.opened = false;
        this.initOptions(c);
        this.holdThisInstance()
    };
    a.NAMESPACE = "bootstrap-dialog";
    a.TYPE_DEFAULT = "type-default";
    a.TYPE_INFO = "type-info";
    a.TYPE_PRIMARY = "type-primary";
    a.TYPE_SUCCESS = "type-success";
    a.TYPE_WARNING = "type-warning";
    a.TYPE_DANGER = "type-danger";
    a.DEFAULT_TEXTS = {};
    a.DEFAULT_TEXTS[a.TYPE_DEFAULT] = "Información";
    a.DEFAULT_TEXTS[a.TYPE_INFO] = "Información";
    a.DEFAULT_TEXTS[a.TYPE_PRIMARY] = "Información";
    a.DEFAULT_TEXTS[a.TYPE_SUCCESS] = "Exitosamente";
    a.DEFAULT_TEXTS[a.TYPE_WARNING] = "Advertencia";
    a.DEFAULT_TEXTS[a.TYPE_DANGER] = "Peligtro";
    a.DEFAULT_TEXTS.OK = "Aceptar";
    a.DEFAULT_TEXTS.CANCEL = "Cancelar";
    a.SIZE_NORMAL = "size-normal";
    a.SIZE_WIDE = "size-wide";
    a.SIZE_LARGE = "size-large";
    a.SIZE_XLARGE = "size-xlarge";
    a.BUTTON_SIZES = {};
    a.BUTTON_SIZES[a.SIZE_NORMAL] = "";
    a.BUTTON_SIZES[a.SIZE_WIDE] = "";
    a.BUTTON_SIZES[a.SIZE_LARGE] = "btn-lg";
    a.BUTTON_SIZES[a.SIZE_XLARGE] = "btn-lg";
    a.ICON_SPINNER = "glyphicon glyphicon-asterisk";
    a.ZINDEX_BACKDROP = 1040;
    a.ZINDEX_MODAL = 1050;
    a.defaultOptions = {
        id: "",
        type: a.TYPE_PRIMARY,
        size: a.SIZE_NORMAL,
        cssClass: "",
        title: null,
        message: null,
        nl2br: true,
        closable: false,
        closeByBackdrop: false,
        closeByKeyboard: true,
        spinicon: a.ICON_SPINNER,
        autodestroy: true,
        draggable: false,
        animate: false,
        description: ""
    };
    a.configDefaultOptions = function (c) {
        a.defaultOptions = b.extend(true, a.defaultOptions, c)
    };
    a.dialogs = {};
    a.openAll = function () {
        b.each(a.dialogs, function (d, c) {
            c.open()
        })
    }; a.closeAll = function () {        
        b.each(a.dialogs, function (d, c) {
            c.close()
        })
    }; a.moveFocus = function () {
        var c = null; b.each(a.dialogs, function (e, d) {
            c = d
        }); if (c !== null && c.isRealized()) {
            c.getModal().focus()
        }
    }; a.showScrollbar = function () {
        var c = null; b.each(a.dialogs, function (f, e) {
            c = e
        }); if (c !== null && c.isRealized() && c.isOpened()) {
            var d = c.getModal().data("bs.modal");
            if (d != undefined) {
                d.checkScrollbar();
            }
            b("body").addClass("modal-open");
            if (d != undefined) {
                d.setScrollbar()
            }
        }
    }; a.prototype = {
        constructor: a,
        initOptions: function (c) {
            this.options = b.extend(true, this.defaultOptions, c);
            return this
        }, holdThisInstance: function () {
            a.dialogs[this.getId()] = this;
            return this
        }, initModalStuff: function () {
            if (this.options.replacebody) {
                this.setModal(this.createModal()).setModalDialog(this.createModalDialog()).setModalContent(this.createModalContent()).setModalHeader(this.createModalHeader()).setModalBody(this.createModalBody());
            } else {
                this.setModal(this.createModal()).setModalDialog(this.createModalDialog()).setModalContent(this.createModalContent()).setModalHeader(this.createModalHeader()).setModalBody(this.createModalBody()).setModalFooter(this.createModalFooter());
            }

            this.getModal().append(this.getModalDialog());
            this.getModalDialog().append(this.getModalContent());
            if (this.options.replacebody) {
                this.getModalContent().append(this.getModalHeader()).append(this.getModalBody());
            } else {
                this.getModalContent().append(this.getModalHeader()).append(this.getModalBody()).append(this.getModalFooter());
            }

            return this
        }, createModal: function () {
            var c = b('<div class="modal" tabindex="-1" role="dialog" aria-hidden="true"></div>');
            c.prop("id", this.getId()).attr("aria-labelledby", this.getId() + "_title");
            return c
        }, getModal: function () {
            return this.$modal
        }, setModal: function (c) {
            this.$modal = c;
            return this
        }, createModalDialog: function () {
            return b('<div class="modal-dialog"></div>')
        }, getModalDialog: function () {
            return this.$modalDialog
        }, setModalDialog: function (c) {
            this.$modalDialog = c;
            return this
        }, createModalContent: function () {
            return b('<div class="modal-content"></div>')
        }, getModalContent: function () {
            return this.$modalContent
        }, setModalContent: function (c) {
            this.$modalContent = c;
            return this
        }, createModalHeader: function () {
            return b('<div class="modal-header"></div>')
        }, getModalHeader: function () {
            return this.$modalHeader
        }, setModalHeader: function (c) {
            this.$modalHeader = c;
            return this
        }, createModalBody: function () {
            return b('<div class="modal-body form-horizontal form-group"></div>')
        }, getModalBody: function () {
            return this.$modalBody
        }, setModalBody: function (c) {
            this.$modalBody = c;
            return this
        }, createModalFooter: function () {
            return b('<div class="modal-footer"></div>')
        }, getModalFooter: function () {
            return this.$modalFooter
        }, setModalFooter: function (c) {
            this.$modalFooter = c;
            return this
        }, createDynamicContent: function (d) {
            var c = null; if (typeof d === "function") {
                c = d.call(d, this)
            } else { c = d } if (typeof c === "string") {
                c = this.formatStringContent(c)
            } return c
        }, formatStringContent: function (c) {
            if (this.options.nl2br) {
                return c//.replace(/\r\n/g, "<br />").replace(/[\r\n]/g, "<br />")
            } return c
        }, setData: function (c, d) { this.options.data[c] = d; return this }, getData: function (c) {
            return this.options.data[c]
        }, setId: function (c) {
            this.options.id = c;
            return this
        }, getId: function () {
            return this.options.id
        }, getType: function () {
            return this.options.type
        }, setType: function (c) {
            this.options.type = c;
            this.updateType();
            return this
        }, updateType: function () {
            if (this.isRealized()) {
                var c = [a.TYPE_DEFAULT, a.TYPE_INFO, a.TYPE_PRIMARY, a.TYPE_SUCCESS, a.TYPE_WARNING, a.TYPE_DANGER];
                this.getModal().removeClass(c.join(" ")).addClass(this.getType())
            } return this
        }, getSize: function () {
            return this.options.size
        }, setSize: function (c) {
            this.options.size = c;
            this.updateSize();
            return this
        }, updateSize: function () {
            if (this.isRealized()) {
                var c = this; this.getModal().removeClass(a.SIZE_NORMAL).removeClass(a.SIZE_WIDE).removeClass(a.SIZE_LARGE).removeClass(a.SIZE_XLARGE);
                this.getModal().addClass(this.getSize());
                if (this.getSize() === a.SIZE_WIDE) {
                    this.getModalDialog().addClass("modal-lg")
                }
                if (this.getSize() === a.SIZE_XLARGE) {
                    this.getModalDialog().addClass("modal-xlg");
                }
                b.each(this.options.buttons, function (e, g) {
                    var i = c.getButton(g.id);
                    var d = ["btn-lg", "btn-sm", "btn-xs"];
                    var h = false; if (typeof g.cssClass === "string") {
                        var f = g.cssClass.split(" ");
                        b.each(f, function (j, k) {
                            if (b.inArray(k, d) !== -1) {
                                h = true
                            }
                        })
                    } if (!h) {
                        i.removeClass(d.join(" ")); i.addClass(c.getButtonSize())
                    }
                })
            } return this
        }, getCssClass: function () {
            return this.options.cssClass
        }, setCssClass: function (c) {
            this.options.cssClass = c;
            return this
        }, getTitle: function () {
            return this.options.title
        }, setTitle: function (c) {
            this.options.title = c;
            this.updateTitle();
            return this
        }, updateTitle: function () {
            if (this.isRealized()) {
                var c = this.getTitle() !== null ? this.createDynamicContent(this.getTitle()) : this.getDefaultText();
                this.getModalHeader().find("." + this.getNamespace("title")).html("").append(c).prop("id", this.getId() + "_title")
            } return this
        }, getMessage: function () {
            return this.options.message
        }, setMessage: function (c) {
            this.options.message = c;
            this.updateMessage();
            return this
        }, updateMessage: function () {
            if (this.isRealized()) {
                var c = this.createDynamicContent(this.getMessage());
                if (this.options.replacebody) {
                    this.getModalBody().replaceWith(c)
                } else {
                    this.getModalBody().find("." + this.getNamespace("message")).html("").append(c)
                }

            } return this
        }, isClosable: function () {
            return this.options.closable
        }, setClosable: function (c) {
            this.options.closable = c;
            this.updateClosable();
            return this
        }, setCloseByBackdrop: function (c) {
            this.options.closeByBackdrop = c;
            return this
        }, canCloseByBackdrop: function () {
            return this.options.closeByBackdrop
        }, setCloseByKeyboard: function (c) {
            this.options.closeByKeyboard = c;
            return this
        }, canCloseByKeyboard: function () {
            return this.options.closeByKeyboard
        }, isAnimate: function () {
            return this.options.animate
        }, setAnimate: function (c) {
            this.options.animate = c;
            return this
        }, updateAnimate: function () {
            if (this.isRealized()) {
                this.getModal().toggleClass("fade", this.isAnimate())
            } return this
        }, getSpinicon: function () {
            return this.options.spinicon
        }, setSpinicon: function (c) {
            this.options.spinicon = c;
            return this
        }, addButton: function (c) {
            this.options.buttons.push(c);
            return this
        }, addButtons: function (d) {
            var c = this; b.each(d, function (e, f) {
                c.addButton(f)
            }); return this
        }, getButtons: function () {
            return this.options.buttons
        }, setButtons: function (c) {
            this.options.buttons = c; this.updateButtons(); return this
        }, getButton: function (c) {
            if (typeof this.indexedButtons[c] !== "undefined") {
                return this.indexedButtons[c]
            } return null
        }, getButtonSize: function () {
            if (typeof a.BUTTON_SIZES[this.getSize()] !== "undefined") {
                return a.BUTTON_SIZES[this.getSize()]
            } return ""
        }, updateButtons: function () {
            if (this.isRealized()) {
                if (!this.options.replacebody) {
                    if (this.getButtons().length === 0) {
                        this.getModalFooter().hide()
                    } else {
                        this.getModalFooter().find("." + this.getNamespace("footer")).html("").append(this.createFooterButtons())
                    }
                }
            } return this
        }, isAutodestroy: function () {
            return this.options.autodestroy
        }, setAutodestroy: function (c) {
            this.options.autodestroy = c
        },
        getDescription: function () {
            return this.options.description
        }, setDescription: function (c) {
            this.options.description = c; return this
        }, getDefaultText: function () {
            return a.DEFAULT_TEXTS[this.getType()]
        }, getNamespace: function (c) {
            return a.NAMESPACE + "-" + c
        }, createHeaderContent: function () {
            var c = b("<div></div>"); c.addClass(this.getNamespace("header"));
            c.append(this.createTitleContent());
            if (this.options.showCloseButton) {
                c.prepend(this.createCloseButton());
            }
            return c
        }, createTitleContent: function () {
            var c = b("<div></div>"); c.addClass(this.getNamespace("title"));
            return c
        }, createCloseButton: function () {
            //<button type="button" class="close" data-dismiss="modal">
            //<span aria-hidden="true" class="ef-close">×</span><span class="sr-only">Close</span></button>
            var d = b("<button  type='button' class='close' data-dismiss='modal'></button>");
            d.addClass("close");            
            if (this.options.closeEvent != null) {
                d.on("click", this.options.closeEvent);
            }
            var c = b("<span aria-hidden='true' class='ef-close'>×</span><span class='sr-only'>Close</span>");

            d.append(c);
            //var d = b("<div></div>");
            //d.addClass(this.getNamespace("close-button"));
            //var c = b('<button class="close">&times;</button>');
            //d.append(c);

            //d.on("click", {
            //    dialog: this
            //}, function (e) {
            //    e.data.dialog.close()
            //});
            return d
        }, createBodyContent: function () {
            var c = b("<div></div>");
            c.addClass(this.getNamespace("body"));
            c.append(this.createMessageContent());
            return c
        }, createMessageContent: function () {
            var c = b("<div></div>");
            c.addClass(this.getNamespace("message"));
            return c
        }, createFooterContent: function () {
            var c = b("<div></div>");
            c.addClass(this.getNamespace("footer"));
            return c
        }, createFooterButtons: function () {
            var c = this; var d = b("<div></div>");
            d.addClass(this.getNamespace("footer-buttons"));
            this.indexedButtons = {};
            b.each(this.options.buttons,
                function (e, f) {
                    if (!f.id) {
                        f.id = a.newGuid()
                    }
                    var g = c.createButton(f);
                    c.indexedButtons[f.id] = g;
                    d.append(g)
                }); return d
        }, createButton: function (c) {
            var d = b('<button class="btn"></button>');
            d.prop("id", c.id);
            if (typeof c.icon !== "undefined" && b.trim(c.icon) !== "") {
                d.append(this.createButtonIcon(c.icon))
            } if (typeof c.label !== "undefined") {
                d.append(c.label)
            } if (typeof c.cssClass !== "undefined" && b.trim(c.cssClass) !== "") {
                d.addClass(c.cssClass)
            } else {
                d.addClass("btn-default")
            } if (typeof c.hotkey !== "undefined") {
                this.registeredButtonHotkeys[c.hotkey] = d
            } d.on("click", {
                dialog: this,
                $button: d, button: c
            }, function (g) {
                var f = g.data.dialog;
                var h = g.data.$button;
                var e = g.data.button;
                if (typeof e.action === "function") {
                    e.action.call(h, f)
                } if (e.autospin) {
                    h.toggleSpin(true)
                }
            });
            this.enhanceButton(d);
            return d
        }, enhanceButton: function (c) {
            c.dialog = this;
            c.toggleEnable = function (d) {
                var e = this; if (typeof d !== "undefined") {
                    e.prop("disabled", !d).toggleClass("disabled", !d)
                } else {
                    e.prop("disabled", !e.prop("disabled"))
                } return e
            }; c.enable = function () {
                var d = this; d.toggleEnable(true);
                return d
            }; c.disable = function () {
                var d = this; d.toggleEnable(false);
                return d
            }; c.toggleSpin = function (g) {
                var f = this;
                var e = f.dialog;
                var d = f.find("." + e.getNamespace("button-icon"));
                if (typeof g === "undefined") {
                    g = !(c.find(".icon-spin").length > 0)
                } if (g) {
                    d.hide(); c.prepend(e.createButtonIcon(e.getSpinicon()).addClass("icon-spin"))
                } else {
                    d.show();
                    c.find(".icon-spin").remove()
                } return f
            }; c.spin = function () {
                var d = this;
                d.toggleSpin(true);
                return d
            }; c.stopSpin = function () {
                var d = this;
                d.toggleSpin(false); return d
            }; return this
        }, createButtonIcon: function (d) {
            var c = b("<span></span>");
            c.addClass(this.getNamespace("button-icon")).addClass(d);
            return c
        }, enableButtons: function (c) {
            b.each(this.indexedButtons, function (e, d) {
                d.toggleEnable(c)
            }); return this
        }, updateClosable: function () {
            if (this.isRealized()) {
                this.getModalHeader().find("." + this.getNamespace("close-button")).toggle(this.isClosable())
            } return this
        }, onShow: function (c) {
            this.options.onshow = c;
            return this
        }, onShown: function (c) {
            this.options.onshown = c;
            return this
        }, onHide: function (c) {            
            this.options.onhide = c;
            return this
        }, onHidden: function (c) {
            this.options.onhidden = c;
            return this
        }, isRealized: function () {
            return this.realized
        }, setRealized: function (c) {
            this.realized = c;
            return this
        }, isOpened: function () {
            return this.opened
        }, setOpened: function (c) {
            this.opened = c;
            return this
        }, handleModalEvents: function () {
            this.getModal().on("show.bs.modal", {
                dialog: this
            }, function (d) {
                var c = d.data.dialog;
                if (c.isModalEvent(d) && typeof c.options.onshow === "function") {
                    return c.options.onshow(c)
                }
            });
            this.getModal().on("shown.bs.modal", {
                dialog: this
            }, function (d) {
                var c = d.data.dialog; c.isModalEvent(d) && typeof c.options.onshown === "function" && c.options.onshown(c)
            }); this.getModal().on("hide.bs.modal", {
                dialog: this
            }, function (d) {
                var c = d.data.dialog; if (c.isModalEvent(d) && typeof c.options.onhide === "function") {
                    return c.options.onhide(c)
                }
            }); this.getModal().on("hidden.bs.modal", {
                dialog: this
            }, function (d) {
                var c = d.data.dialog; c.isModalEvent(d) && typeof c.options.onhidden === "function" && c.options.onhidden(c);
                c.isAutodestroy() && b(this).remove();
                a.moveFocus()
            }); this.getModal().on("click", {
                dialog: this
            }, function (c) {
                c.target === this && c.data.dialog.isClosable() && c.data.dialog.canCloseByBackdrop() && c.data.dialog.close()
            }); this.getModal().on("keyup", {
                dialog: this
            }, function (c) {
                c.which === 27 && c.data.dialog.isClosable() && c.data.dialog.canCloseByKeyboard() && c.data.dialog.close()
            }); this.getModal().on("keyup", {
                dialog: this
            }, function (d) {
                var c = d.data.dialog;
                if (typeof c.registeredButtonHotkeys[d.which] !== "undefined") {
                    var e = b(c.registeredButtonHotkeys[d.which]); !e.prop("disabled") && e.focus().trigger("click")
                }
            }); return this
        }, isModalEvent: function (c) {
            return typeof c.namespace !== "undefined" && c.namespace === "bs.modal"
        }, makeModalDraggable: function () {
            if (this.options.draggable) {
                this.getModalHeader().addClass(this.getNamespace("draggable")).on("mousedown", {
                    dialog: this
                }, function (e) {
                    var d = e.data.dialog; d.draggableData.isMouseDown = true;
                    var c = d.getModalDialog().offset();
                    d.draggableData.mouseOffset = {
                        top: e.clientY - c.top, left: e.clientX - c.left
                    }
                }); this.getModal().on("mouseup mouseleave", {
                    dialog: this
                }, function (c) {
                    c.data.dialog.draggableData.isMouseDown = false
                }); b("body").on("mousemove", {
                    dialog: this
                }, function (d) {
                    var c = d.data.dialog; if (!c.draggableData.isMouseDown) {
                        return
                    } c.getModalDialog().offset({
                        top: d.clientY - c.draggableData.mouseOffset.top, left: d.clientX - c.draggableData.mouseOffset.left
                    })
                })
            } return this
        }, updateZIndex: function () {
            var e = 0;
            b.each(a.dialogs, function (f, g) {
                e++
            });
            var d = this.getModal();
            var c = d.data("bs.modal").$backdrop;
            d.css("z-index", a.ZINDEX_MODAL + (e - 1) * 20);
            //c.css("z-index", a.ZINDEX_BACKDROP + (e - 1) * 20);
            return this
        }, realize: function (callback) {
            this.initModalStuff();
            this.getModal().addClass(a.NAMESPACE).addClass(this.getCssClass());
            this.updateSize();
            if (this.getDescription()) {
                this.getModal().attr("aria-describedby", this.getDescription())
            }
            if (!this.options.replacebody) {
                this.getModalFooter().append(this.createFooterContent());
            }
            this.getModalHeader().append(this.createHeaderContent());
            this.getModalBody().append(this.createBodyContent());
            this.getModal().modal({
                backdrop: "static",
                keyboard: false,
                show: false
            });
            this.getModal().modal("show");
            this.makeModalDraggable();
            this.handleModalEvents();
            this.setRealized(true);
            this.updateButtons();
            this.updateType();
            this.updateTitle();
            this.updateMessage();
            this.updateClosable();
            this.updateAnimate();
            this.updateSize();
            var that = this;
            if (typeof callback == 'function') { callback(that); }
            return this
        }, open: function (isAlert) {
            !this.isRealized() && this.realize()
            //function (that) {
            //setTimeout(function () {
            //this.getModal().modal("show");
            if (isAlert) {
                a.ZINDEX_BACKDROP = 1080;
                a.ZINDEX_MODAL = 1090;
            } else {
                a.ZINDEX_BACKDROP = 1040;
                a.ZINDEX_MODAL = 1050;
            }
            this.updateZIndex();
            this.setOpened(true);
            return this
            //}, 1000);
            //});

        }, close: function () {            
            if (this.getModal() != undefined) {
                this.getModal().modal("hide");
                if (this.isAutodestroy()) {
                    delete a.dialogs[this.getId()]
                } this.setOpened(false);
                a.showScrollbar();
            }
            return this
        }
    }; a.newGuid = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (f) {
            var e = Math.random() * 16 | 0, d = f === "x" ? e : (e & 3 | 8); return d.toString(16)
        })
    }; a.show = function (c, isAlert) {
        return new a(c).open(isAlert)
    };
    a.alert = function () {
        var d = {};
        var c = {
            type: a.TYPE_PRIMARY,
            title: null,
            message: null,
            closable: true,
            closeByBackdrop: false,
            buttonLabel: a.DEFAULT_TEXTS.OK,
            callback: null
        };
        if (typeof arguments[0] === "object" && arguments[0].constructor === {}.constructor) {
            d = b.extend(true, c, arguments[0])
        } else {
            d = b.extend(true, c, {
                message: arguments[0],
                closable: true,
                closeByBackdrop: false,
                buttonLabel: a.DEFAULT_TEXTS.OK,
                callback: typeof arguments[1] !== "undefined" ? arguments[1] : null
            })
        }
        var alert = new a({
            type: d.type,
            title: d.title,
            message: d.message,
            closable: d.closable,
            data: {
                callback: d.callback
            }, onhide: function (e) {
                !e.getData("btnClicked") && e.isClosable() && typeof e.getData("callback") === "function" && e.getData("callback")(false)
            }, buttons: [{
                cssClass: 'btn-danger',
                icon: 'fa fa-info-circle ico-btn',
                label: d.buttonLabel, action: function (e) {
                    e.setData("btnClicked", true); typeof e.getData("callback") === "function" && e.getData("callback")(true);
                    e.close()
                }
            }]
        });

        return alert.open(true)
    };
    a.confirm = function (title, c, d) {
        var zz = new a({
            title: title,
            message: c,
            closable: false,
            data: {
                callback: d
            },
            buttons: [
            {
                label: a.DEFAULT_TEXTS.OK,
                cssClass: "btn-primary",
                action: function (e) {
                    typeof e.getData("callback") === "function" && e.getData("callback")(true);
                    e.close()
                }
            }, {
                label: a.DEFAULT_TEXTS.CANCEL,
                action: function (e) {
                    typeof e.getData("callback") === "function" && e.getData("callback")(false);
                    e.close()
                }
            }]
        })
        return zz.open(true);
    }; a.warning = function (c, d) {
        return new a({
            type: a.TYPE_WARNING, message: c
        }).open(true)
    }; a.danger = function (c, d) {
        return new a({
            type: a.TYPE_DANGER, message: c
        }).open(true)
    }; a.success = function (c, d) {
        return new a({
            type: a.TYPE_SUCCESS, message: c
        }).open(true)
    }; return a
}));