////////////////////////////////////////////
//                                        //
//              Countdown                 //
//                 v2.0                   //
//            April 28, 2012              //    
//             by mike gieson             //
//             www.gieson.com             //
//         Copyright Mike Gieson          //
//                                        //
////////////////////////////////////////////
// 
//var CountdownImageFolder = "images/"; Search also in following code
var CountdownImageFolder = imageDir;
var CountdownImageBasename = "flipper";
var CountdownImageExt = "png";
var CountdownImagePhysicalWidth = 41;
var CountdownImagePhysicalHeight = 60;

// Usage:
// var test = new Countdown({time:15});

////////////////////////////////////////////
//                                        //
//                 jgoop                  //
//         version 0.0.0.2 alpha          //
//            by mike gieson              //
//             www.jgoop.org              //
//          Copyright Mike Gieson         //
//                                        //
////////////////////////////////////////////

if (!Array.prototype.indexOf)Array.prototype.indexOf = function (c) {
    if (this == null)throw new TypeError;
    var b = Object(this), a = b.length >>> 0;
    if (a === 0)return-1;
    var i = 0;
    arguments.length > 1 && (i = Number(arguments[1]), i != i ? i = 0 : i != 0 && i != Infinity && i != -Infinity && (i = (i > 0 || -1) * Math.floor(Math.abs(i))));
    if (i >= a)return-1;
    for (i = i >= 0 ? i : Math.max(a - Math.abs(i), 0); i < a; i++)if (i in b && b[i] === c)return i;
    return-1
};
if (!Function.prototype.bind)Function.prototype.bind = function (c) {
    if (typeof this !== "function")throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var b = Array.prototype.slice.call(arguments, 1), a = this, i = function () {
    }, j = function () {
        return a.apply(this instanceof i && c ? this : c, b.concat(Array.prototype.slice.call(arguments)))
    };
    i.prototype = this.prototype;
    j.prototype = new i;
    return j
};
this.jbeeb = this.jbeeb || {};
(function () {
    var c = function () {
    };
    c.scriptName = "";
    var b = Object.prototype.toString, a = String.prototype.trim;
    c.isArray = function (a) {
        return Array.isArray ? Array.isArray(a) : b.call(a) === "[object Array]"
    };
    c.isNumber = function (a) {
        return b.call(a) === "[object Number]"
    };
    c.isInteger = function (a) {
        return parseFloat(a) == parseInt(a) && !isNaN(a)
    };
    c.isString = function (a) {
        return b.call(a) === "[object String]"
    };
    c.clone = function (a) {
        if (a === null || typeof a != "object")return a;
        if (a.init)return a; else {
            var b = new a.constructor, d;
            for (d in a)b[d] = c.clone(a[d])
        }
        return b
    };
    c.rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    c.trim = a && !a.call("\ufeff\u00a0") ? function (i) {
        return i == null ? "" : a.call(i)
    } : function (a) {
        return a == null ? "" : (a + "").replace(c.rtrim, "")
    };
    c.rgbToHex = function (a, b, d) {
        var e = function (a) {
            a = a.toString(16);
            return a.length == 1 ? "0" + a : a
        };
        return c.fixHexColor("#" + e(a) + e(b) + e(d))
    };
    c.hexToRgb = function (a) {
        return!a ? null : (a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a)) ? [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)] : [0, 0, 0]
    };
    c.fixHexColor = function (a) {
        a = String(a);
        if (a.length < 1 || a == "#")return null;
        for (a.substr(0, 1) != "#" && (a = "#" + a); a.length < 7;)a += "0";
        return a
    };
    c.makeColor = function (a, b) {
        if (!a)return "";
        var d = c.hexToRgb(a);
        return c.isNumber(b) && jbeeb.Browser.modern ? (b > 1 && (b /= 100), "rgba(" + d.join(",") + ("," + b) + ")") : jbeeb.Browser.modern ? "rgb(" + d.join(",") + ")" : a
    };
    c.getXYWH = function (a) {
        var b = 0, c = 0, e = 0, g = 0;
        if (a) {
            for (var e = a.offsetWidth, g = a.offsetHeight, f = jbeeb.Browser.touch; a && !isNaN(a.offsetLeft) && !isNaN(a.offsetTop);)f ? (b += (a.offsetLeft || 0) - (a.scrollLeft || 0), c += (a.offsetTop || 0) - (a.scrollTop || 0)) : (b += a.offsetLeft || 0, c += a.offsetTop || 0), a = a.offsetParent;
            f && (a = window.scrollY != null ? window.scrollY : window.pageYOffset, b += window.scrollX != null ? window.scrollX : window.pageXOffset, c += a)
        }
        return{x:b, y:c, w:e, h:g, xMax:b + e, yMax:c + g}
    };
    c.contains = function (a, b) {
        var c = {}, e = {x:a.x, y:a.y, w:a.width, h:a.height}, g = {x:b.x, y:b.y, w:b.width, h:b.height};
        e.xMax = e.x + e.w;
        e.yMax = e.y + e.h;
        g.xMax = g.x + g.w;
        g.yMax = g.y + g.h;
        for (var f in e)c[f] = e[f] >= g[f] ? true : false;
        return!c.x && !c.y && c.xMax && c.yMax ? true : false
    };
    c.bindEvent = function (a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, false) : a.attachEvent && a.attachEvent("on" + b, c)
    };
    c.unbindEvent = function (a, b, c) {
        a.addEventListener ? a.removeEventListener(b, c, false) : a.attachEvent && a.detachEvent("on" + b, c)
    };
    jbeeb.Utils = c
})();
this.jbeeb = this.jbeeb || {};
(function () {
    var c, b, a;

    function i() {
        if (!f && (f = true, h)) {
            for (var a = 0; a < h.length; a++)h[a].call(window, []);
            h = []
        }
    }

    function j(a) {
        var i = window.onload;
        window.onload = typeof window.onload != "function" ? a : function () {
            i && i();
            a()
        }
    }

    function d() {
        if (!g) {
            g = true;
            document.addEventListener && !c && document.addEventListener("DOMContentLoaded", i, false);
            b && window == top && function () {
                if (!f) {
                    try {
                        document.documentElement.doScroll("left")
                    } catch (a) {
                        setTimeout(arguments.callee, 0);
                        return
                    }
                    i()
                }
            }();
            c && document.addEventListener("DOMContentLoaded", function () {
                if (!f) {
                    for (var a = 0; a < document.styleSheets.length; a++)if (document.styleSheets[a].disabled) {
                        setTimeout(arguments.callee, 0);
                        return
                    }
                    i()
                }
            }, false);
            if (a) {
                var d;
                (function () {
                    if (!f)if (document.readyState != "loaded" && document.readyState != "complete")setTimeout(function () {
                    }, 0); else {
                        if (d === void 0) {
                            for (var a = document.getElementsByTagName("link"), b = 0; b < a.length; b++)a[b].getAttribute("rel") == "stylesheet" && d++;
                            a = document.getElementsByTagName("style");
                            d += a.length
                        }
                        document.styleSheets.length != d ? setTimeout(arguments.callee, 0) : i()
                    }
                })()
            }
            j(i)
        }
    }

    ;
    var e = navigator.userAgent.toLowerCase();
    e.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/);
    a = /webkit/.test(e);
    c = /opera/.test(e);
    b = /msie/.test(e) && !/opera/.test(e);
    /mozilla/.test(e) && /(compatible|webkit)/.test(e);
    var g = false, f = false, h = [];
    d();
    jbeeb.ready = function (a) {
        d();
        f ? a.call(window, []) : h.push(function () {
            return a.call(window, [])
        })
    }
})();
this.jbeeb = this.jbeeb || {};
(function () {
    var c = function () {
        throw "Ticker cannot be instantiated.";
    };
    c.useRAF = false;
    c.bg = null;
    c.bk = null;
    c.aS = false;
    c.aT = false;
    c.bF = 0;
    c.aH = 0;
    c.bf = 0;
    c.ay = 0;
    c.af = 50;
    c.bM = 0;
    c.L = null;
    c.ad = null;
    c.av = false;
    c.bm = null;
    c.addListener = function (a, i) {
        a != null && (c.aT || c.init(), c.removeListener(a), c.bk[c.bg.length] = i == null ? true : i, c.bg.push(a))
    };
    c.init = function () {
        c.aT = true;
        c.L = [];
        c.ad = [];
        c.bk = [];
        c.bg = [];
        c.L.push(c.bM = c.bF = c.aU());
        c.setInterval(c.af)
    };
    c.removeListener = function (a) {
        var i = c.bg;
        i && (a = i.indexOf(a), a != -1 && (i.splice(a, 1), c.bk.splice(a, 1)))
    };
    c.removeAllListeners = function () {
        c.bg = [];
        c.bk = []
    };
    c.setInterval = function (a) {
        c.af = a;
        c.aT && c.bA()
    };
    c.getInterval = function () {
        return c.af
    };
    c.setFPS = function (a) {
        c.setInterval(1E3 / a)
    };
    c.getFPS = function () {
        return 1E3 / c.af
    };
    c.getMeasuredFPS = function (a) {
        if (c.L.length < 2)return-1;
        a == null && (a = c.getFPS() | 0);
        a = Math.min(c.L.length - 1, a);
        return 1E3 / ((c.L[0] - c.L[a]) / a)
    };
    c.setPaused = function (a) {
        c.aS = a
    };
    c.getPaused = function () {
        return c.aS
    };
    c.getTime = function (a) {
        return c.aU() - c.bF - (a ? c.aH : 0)
    };
    c.getTicks = function (a) {
        return c.bf - (a ? c.ay : 0)
    };
    c.aE = function () {
        c.av = false;
        c.bA();
        c.aU() - c.bM >= (c.af - 1) * 0.97 && c.bV()
    };
    c.aZ = function () {
        c.timeoutID = null;
        c.bA();
        c.bV()
    };
    c.bA = function () {
        if (!(c.av || c.timeoutID != null)) {
            if (c.useRAF) {
                var a = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
                if (a) {
                    a(c.aE);
                    c.av = true;
                    return
                }
            }
            c.timeoutID = setTimeout(c.aZ, c.af)
        }
    };
    c.bV = function () {
        var a = c.aU();
        c.bf++;
        var i = a - c.bM, b = c.aS;
        b && (c.ay++, c.aH += i);
        c.bM = a;
        for (var d = c.bk, e = c.bg.slice(), g = e ? e.length : 0, f = 0; f < g; f++) {
            var h = e[f];
            h == null || b && d[f] || (h.tick ? h.tick.call(h, i, b) : h instanceof Function && h(i, b))
        }
        for (c.ad.unshift(c.aU() - a); c.ad.length > 100;)c.ad.pop();
        for (c.L.unshift(a); c.L.length > 100;)c.L.pop()
    };
    var b = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);
    c.aU = function () {
        return b && b.call(performance) || (new Date).getTime()
    };
    jbeeb.Ticker = c
})();
this.jbeeb = this.jbeeb || {};
(function () {
    var c, b, a = {ie:null, ios:null, mac:null, webkit:null, oldWebkit:false, flash:false, touch:false};
    c = navigator.userAgent;
    c = c.toLowerCase();
    b = /(chrome)[ \/]([\w.]+)/.exec(c) || /(webkit)[ \/]([\w.]+)/.exec(c) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(c) || /(msie) ([\w.]+)/.exec(c) || c.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(c) || [];
    c = b[1] || "";
    b = b[2] || "0";
    a.version = parseFloat(b);
    a.agent = c;
    b = false;
    c == "chrome" ? b = true : c == "webkit" && (b = true);
    a.webkit = b;
    a.chrome = /chrome/.test(c) || /chromium/.test(c);
    a.moz = /mozilla/.test(c);
    a.opera = /opera/.test(c);
    a.safari = /webkit/.test(c);
    a.ie = /msie/.test(c) && !/opera/.test(c);
    a.android = /android/.test(c);
    b = navigator.platform.toLowerCase();
    a.platform = b;
    a.ios = /iphone/.test(b) || /ipod/.test(b) || /ipad/.test(b);
    a.win = a.windows = b ? /win/.test(b) : /win/.test(c);
    a.mac = b ? /mac/.test(b) : /mac/.test(c);
    a.cssPrefix = "";
    if (a.chrome || a.safari)if (a.cssPrefix = "webkit", a.chrome && a.version < 10)a.oldWebkit = true; else {
        if (a.safari && a.version < 5.1)a.oldWebkit = true
    } else if (a.opera)a.cssPrefix = "o"; else if (a.moz)a.cssPrefix = "moz"; else if (a.ie && a.version > 8)a.cssPrefix = "ms";
    a.flash = a.chrome || a.ios || a.android ? false : typeof navigator.plugins != "undefined" && typeof navigator.plugins["Shockwave Flash"] == "object" || window.ActiveXObject && new ActiveXObject("ShockwaveFlash.ShockwaveFlash") != false;
    c = false;
    b = "Webkit Moz O ms Khtml".split(" ");
    var i = "", i = document.createElement("div");
    i.style.animationName && (c = true);
    if (c === false)for (var j = 0; j < b.length; j++)if (i.style[b[j] + "AnimationName"] !== void 0) {
        i = b[j];
        i.toLowerCase();
        c = true;
        break
    }
    a.animation = c;
    a.modern = false;
    if (a.moz && a.version > 3)a.modern = true;
    if (a.opera && a.version > 9)a.modern = true;
    if (a.ie && a.version > 8)a.modern = true;
    if (a.chrome || a.safari || a.ios || a.android)a.modern = true;
    a.touch = typeof window.ontouchstart === "undefined" ? false : true;
    jbeeb.Browser = a
})();
this.jbeeb = this.jbeeb || {};
(function () {
    var c = function () {
        this.initialize()
    }, b = c.prototype;
    c.initialize = function (a) {
        a.addEventListener = b.addEventListener;
        a.removeEventListener = b.removeEventListener;
        a.removeAllEventListeners = b.removeAllEventListeners;
        a.hasEventListener = b.hasEventListener;
        a.dispatchEvent = b.dispatchEvent
    };
    b.bg = null;
    b.initialize = function () {
    };
    b.addEventListener = function (a, b, c) {
        var d = this.bg;
        d ? this.removeEventListener(a, b) : d = this.bg = {};
        var e = d[a];
        e || (e = d[a] = []);
        e.push({fn:b, arg:c});
        return b
    };
    b.removeEventListener = function (a, b) {
        var c = this.bg;
        if (c) {
            var d = c[a];
            if (d)for (var e = 0, g = d.length; e < g; e++) {
                var f = d[e];
                if (f.fn == b) {
                    g == 1 ? delete c[a] : (f.fn = null, f.arg = null, d.splice(e, 1));
                    break
                }
            }
        }
    };
    b.removeAllEventListeners = function (a) {
        a ? this.bg && delete this.bg[a] : this.bg = null
    };
    b.dispatchEvent = function (a) {
        var b = this.bg;
        if (a && b && (b = b[a])) {
            var c = [].slice.call(arguments);
            c.splice(0, 1);
            for (var d = 0; d < b.length; d++) {
                var e = b[d], g = c, f = e.arg;
                typeof f !== "undefined" && g.push(f);
                g.length ? e.fn.apply(null, g) : e.fn()
            }
        }
    };
    b.hasEventListener = function (a) {
        var b = this.bg;
        return!(!b || !b[a])
    };
    b.toString = function () {
        return "[EventDispatcher]"
    };
    jbeeb.EventDispatcher = c
})();
this.jbeeb = this.jbeeb || {};
(function () {
    jbeeb.scriptName = "jbeeb.js";
    jbeeb.amReady = false;
    jbeeb.tickerSpeed = 80;
    jbeeb.ticker = null;
    jbeeb.scriptPath = null;
    jbeeb.focus = null;
    jbeeb.unfocus = function () {
        if (jbeeb.focus) {
            var b = jbeeb.focus;
            b.element && b.element.blur();
            jbeeb.focus = null
        }
    };
    var c = function () {
    };
    c.aL = 0;
    c.bj = [];
    c.ah = [];
    c.bz = function () {
        return "jbeeb_" + c.aL++
    };
    c.al = function (b) {
        c.ah.push(b);
        jbeeb.amReady && c.bw()
    };
    c.bw = function () {
        var b = c.ah.length;
        if (b > 0)for (; b--;) {
            var a = c.ah.splice(b, 1)[0];
            a && a.init && a.init.call(a)
        }
    };
    c.init = function () {
        if (!jbeeb.amReady) {
            jbeeb.ticker = jbeeb.Ticker;
            jbeeb.ticker.setInterval(jbeeb.tickerSpeed);
            jbeeb.ticker.init();
            for (var b = jbeeb.scriptName, a = "", i = document.getElementsByTagName("script"), j = i.length; j--;) {
                var d = i[j].getAttribute("src");
                if (d && d.indexOf(b) > -1) {
                    a = d;
                    break
                }
            }
            b = a.split("/");
            b.pop();
            jbeeb.scriptPath = b.join("/").toString() + (b.length > 0 ? "/" : "");
            jbeeb.amReady = true;
            c.bw()
        }
    };
    jbeeb.Base = c;
    jbeeb.register = c.al;
    jbeeb.getUID = c.bz
})();
jbeeb.ready(function () {
    jbeeb.Base.init()
});
this.jbeeb = this.jbeeb || {};
(function () {
    var c = function (a) {
        this.init(a)
    }, b = c.prototype;
    b.addEventListener = null;
    b.removeEventListener = null;
    b.removeAllEventListeners = null;
    b.dispatchEvent = null;
    b.hasEventListener = null;
    jbeeb.EventDispatcher.initialize(b);
    b.amStage = null;
    b.element = null;
    b.style = null;
    b.alpha = 1;
    b.id = null;
    b.name = null;
    b.parent = null;
    b.stage = null;
    b.rotation = 0;
    b.scaleX = 1;
    b.scaleY = 1;
    b.skewX = 0;
    b.skewY = 0;
    b.origin = null;
    b.originX = 0;
    b.originY = 0;
    b.originType = "px";
    b.shadow = null;
    b.bevel = null;
    b.outline = null;
    b.inset = null;
    b.visible = true;
    b.overflow = "visible";
    b.autoCenter = null;
    b.x = 0;
    b.y = 0;
    b.width = 0;
    b.height = 0;
    b.flex = "wh";
    b.bL = 1;
    b.aA = 1;
    b.pin = null;
    b.O = null;
    b.V = null;
    b.z = 0;
    b.temp = null;
    b.rounded = null;
    b.fill = null;
    b.stroke = null;
    b.image = null;
    b.gradient = null;
    b.bG = null;
    b.init = function (a) {
        this.temp = {};
        this.style = null;
        this.alpha = 1;
        this.parent = this.name = this.id = null;
        this.rotation = 0;
        this.scaleY = this.scaleX = 1;
        this.skewY = this.skewX = 0;
        this.visible = true;
        this.overflow = "visible";
        this.height = this.width = this.y = this.x = 0;
        this.flex = "wh";
        this.aA = this.bL = 1;
        this.V = this.O = this.pin = null;
        this.z = 0;
        this.autoCenter = null;
        this.stroke = {};
        this.fill = {};
        this.inset = this.shadow = null;
        this.gradient = {};
        this.rounded = null;
        var a = a || {}, b = jbeeb.getUID();
        this.id = b;
        a.element ? this.element = a.element : (this.element = document.createElement("div"), this.element.id = b, this.element.style.position = "absolute", this.element.style.overflow = "visible");
        this.bG = a.inline ? "inline-block" : "block";
        if (a.name)this.name = a.name;
        this.element.id = this.type + "_" + this.element.id;
        b = this.style = this.element.style;
        b.padding = "0px";
        b.margin = "0px";
        b.border = "0px";
        b.fontSize = "100%";
        b.font = "inherit";
        b.verticalAlign = "baseline";
        b.outline = "0px";
        b.background = "transparent";
        b.WebkitTextSizeAdjust = "100%";
        b.msTextSizeAdjust = "100%";
        b.WebkitBoxSizing = b.MozBoxSizing = b.boxSizing = "border-box";
        if (!a.editable)b.userSelect = b.WebkitUserSelect = b.MozUserSelect = b.OUserSelect = "none", b.MozUserSelect = "-moz-none";
        this.setCursor("inherit");
        if (a.center)this.autoCenter = a.center;
        a && typeof a.flex != "undefined" && this.setFlex(a.flex);
        a && typeof a.pin != "undefined" && this.setPin(a.pin);
        this.setOrigin(0, 0, "px");
        this.applySkin(a, false)
    };
    b.setBorderRender = function (a) {
        var b = this.style;
        b.WebkitBoxSizing = a == "outside" ? b.MozBoxSizing = b.boxSizing = "content-box" : b.MozBoxSizing = b.boxSizing = "border-box"
    };
    b.applySkin = function (a, b) {
        this.stroke = {};
        this.fill = {};
        this.gradient = null;
        this.rounded = 0;
        this.inset = this.outline = this.bevel = this.shadow = this.image = null;
        if (!(b == true && b)) {
            var c = jbeeb.Utils.isNumber(a.x) ? a.x : 0, d = jbeeb.Utils.isNumber(a.y) ? a.y : 0;
            this.setXY(c, d);
            a.height && this.setHeight(a.height);
            a.width && this.setWidth(a.width);
            a.h && this.setHeight(a.h);
            a.w && this.setWidth(a.w)
        }
        a.rounded && this.setRounded(a.rounded);
        if (c = a.fill) {
            var e;
            typeof c == "string" ? (d = c, e = 1) : (d = c.color, e = c.alpha);
            this.setFill(d, e)
        }
        if (c = a.stroke) {
            var g;
            typeof c == "string" ? (d = c, g = e = 1, c = "solid") : c.color == null ? c = g = e = d = null : (d = c.color || "#000000", e = jbeeb.Utils.isNumber(c.alpha) ? c.alpha : 1, g = c.weight || 1, c = c.style || "solid");
            this.setStroke(g, d, e, c);
            this.setStrokeStyle(c)
        }
        if (a.image)c = a.image, typeof c == "string" ? (d = c, c = null) : (d = c.url, c = c.mode), this.setImage(d, c);
        a.shadow && this.setShadow(a.shadow);
        a.bevel && this.setBevel(a.bevel);
        a.outline && this.setOutline(a.outline);
        a.inset && this.setInset(a.inset)
    };
    b.ax = function () {
        var a = this.style;
        if (a) {
            var b = "", c = "", d = "", e = "", g = "", f = 0, h = this.fill;
            jbeeb.Utils.isArray(h.color) ? f = 1 : h.color && (c = jbeeb.Utils.makeColor(h.color, h.alpha) + " ");
            if (this.image && this.image.url) {
                b = 'url("' + this.image.url + '") ';
                f = this.image.mode || "center";
                if (f != "pattern") {
                    if (f == "fit")d = "100% 100% "; else if (f == "contain" || f == "cover")d = f + " ";
                    e = "no-repeat ";
                    g = "center center"
                }
                f = 0
            }
            if (f) {
                for (var l = h.color, h = (h = h.alpha) || "v", f = jbeeb.Browser, m = [], r = [], s = l.length, o = 0; o < s; o += 3) {
                    var t = jbeeb.Utils.makeColor(l[o], l[o + 1]), u = l[o + 2];
                    m.push(t + " " + u + "%");
                    f.oldWebkit && r.push("color-stop(" + u + "%, " + t + ")")
                }
                m = m.join(",");
                if (f.modern)b = f.cssPrefix, l = (h == "v" ? "top, " : "left, ") + m, b = b == "webkit" ? f.oldWebkit ? "-webkit-gradient(" + (h == "v" ? "linear, left top, left bottom,  " : "linear, left top, right top,  ") + r.join("\t,") + ") " : "-webkit-linear-gradient(" + l + ") " : b == "moz" ? "-moz-linear-gradient(" + l + ") " : b == "o" ? "-o-linear-gradient(" + l + ") " : b == "ms" ? "-ms-linear-gradient(" + l + ") " : "linear-gradient(" + ((h == "v" ? "to bottom, " : "to right, ") + m) + ") "; else if (jbeeb.Browser.ie)h = "progid:DXImageTransform.Microsoft.gradient( GradientType=" + (h == "v" ? "0" : "1") + ", startColorstr='" + l[0] + "', endColorstr='" + l[l.length - 3] + "')", this.style.filter = h, this.style.msFilter = '"' + h + '"'
            }
            a.backgroundColor = c || "";
            a.backgroundImage = b;
            a.backgroundSize = d;
            a.backgroundRepeat = e;
            a.backgroundPosition = g
        }
    };
    b.setFill = function (a, b) {
        if (!this.fill)this.fill = {};
        this.fill.color = a;
        this.fill.alpha = b;
        this.ax()
    };
    b.setImage = function (a, b) {
        if (!this.image)this.image = {};
        this.image.url = a;
        this.image.mode = b;
        this.ax()
    };
    b.setImageSizing = function (a) {
        if (this.image)this.image.mode = a, this.ax()
    };
    b.setStroke = function (a, b, c, d) {
        typeof a == "string" && (b = a, a = 1);
        a > 0 && (a = Math.round(a));
        c = c || 1;
        d = d || "solid";
        b == null && (d = c = a = null);
        var e = this.stroke;
        e.weight = a;
        e.color = b;
        e.alpha = c;
        e.style = d;
        e = this.style;
        a == null ? (e.borderStyle = "", e.borderWidth = "", e.borderColor = "") : (e.borderStyle = d, e.borderWidth = a + "px", e.borderColor = jbeeb.Utils.makeColor(b, c))
    };
    b.setStrokeStyle = function (a) {
        this.style.borderStyle = a || ""
    };
    b.setCursor = function (a) {
        this.style.cursor = a
    };
    b.setWidth = function (a) {
        this.width = a;
        this.style.width = a + "px";
        this.autoCenter && this.center(this.autoCenter);
        this.rounded && this.bH()
    };
    b.setHeight = function (a) {
        this.height = a;
        this.style.height = a + "px";
        this.autoCenter && this.center(this.autoCenter);
        this.rounded && this.bH()
    };
    b.measure = function () {
        var a = this.element, b = a.clientWidth, a = a.clientHeight;
        this.width = b;
        this.height = a;
        return[b, a]
    };
    b.setSize = function (a, b) {
        this.width = a;
        this.height = b;
        var c = this.style;
        c.width = a + "px";
        c.height = b + "px";
        this.autoCenter && this.center(this.autoCenter);
        this.rounded && this.bH()
    };
    b.setXY = function (a, b) {
        this.x = a;
        this.y = b;
        var c = this.style;
        c.left = a + "px";
        c.top = b + "px"
    };
    b.setBaseXY = function (a, b) {
        this.setXY(a, b);
        this.am = a;
        this.aB = b
    };
    b.setXYWH = function (a, b, c, d) {
        this.width = c;
        this.height = d;
        this.x = a;
        this.y = b;
        var e = this.style;
        e.width = c + "px";
        e.height = d + "px";
        e.left = a + "px";
        e.top = b + "px"
    };
    b.setX = function (a) {
        this.x = a;
        this.style.left = a + "px"
    };
    b.setY = function (a) {
        this.y = a;
        this.style.top = a + "px"
    };
    b.setTop = function (a) {
        this.y = a;
        this.style.top = a + "px"
    };
    b.setBottom = function (a) {
        this.y = a - this.height;
        this.style.bottom = a + "px"
    };
    b.setLeft = function (a) {
        this.x = a;
        this.style.left = a + "px"
    };
    b.setRight = function (a) {
        this.x = a - this.width;
        this.style.right = a + "px"
    };
    b.setZ = function (a) {
        a < 0 && (a = 0);
        this.z = a;
        this.style.zIndex = a
    };
    b.setScale = function (a, b) {
        this.scaleX = a;
        this.scaleY = b;
        this.ai("scale(" + a + "," + b + ")")
    };
    b.stretch = function (a, b) {
        this.bL && this.setWidth(this.width * a);
        this.aA && this.setHeight(this.height * b);
        var c = this.x, d = this.y;
        if (this.O) {
            if (this.O == "r" && this.parent) {
                if (this.aj == null)this.aj = this.parent.width - this.x;
                c = this.parent.width - this.aj;
                this.setX(c)
            }
        } else if (this.originX) {
            var e = this.originX;
            this.setX(e + (c - e) * a)
        } else this.setX(c * a);
        if (this.V) {
            if (this.V == "b" && this.parent) {
                if (this.aO == null)this.aO = this.parent.height - this.y;
                c = this.parent.height - this.aO;
                this.setY(c)
            }
        } else this.originY ? (e = this.originY, this.setY(e + (d - e) * b)) : this.setY(d * b)
    };
    b.aj = null;
    b.aO = null;
    b.setPin = function (a) {
        this.pin = a;
        this.V = this.O = 0;
        if (a) {
            a = a.toLowerCase();
            if (a.match(/r/))this.O = "r";
            if (a.match(/l/))this.O = "l";
            if (a.match(/t/))this.V = "t";
            if (a.match(/b/))this.V = "b";
            if (a.match(/s/))this.V = this.O = "s"
        }
    };
    b.setFlex = function (a) {
        this.flex = a;
        this.aA = this.bL = 0;
        if (a)a = a.toLowerCase(), this.bL = a.match(/w/) ? 1 : 0, this.aA = a.match(/h/) ? 1 : 0
    };
    b.setRotation = function (a) {
        this.rotation = a;
        this.ai("rotate(" + a + "deg)")
    };
    b.setSkew = function (a, b) {
        this.skewX = a;
        this.skewY = b;
        this.ai("skew(" + a + "deg," + b + "deg)")
    };
    b.setOrigin = function (a, b, c) {
        this.originX = a;
        this.originY = b;
        var c = (this.originType = c) ? c : "px", d = this.style;
        d.transformOrigin = d.WebkitTransformOrigin = d.msTransformOrigin = d.MozTransformOrigin = d.OTransformOrigin = a + c + " " + b + c
    };
    b.ai = function (a) {
        var b = this.style;
        b.transform = b.transform = b.msTransform = b.WebkitTransform = b.MozTransform = a
    };
    b.center = function (a) {
        if (this.parent && this.width && this.height) {
            var b = this.x, c = this.y, d = this.parent, e = d.width * 0.5, d = d.height * 0.5, g = this.width * 0.5, f = this.height * 0.5;
            a == "v" ? c = d - f : a == "h" ? b = e - g : (b = e - g, c = d - f);
            this.setXY(b, c)
        }
    };
    b.setOverflow = function (a) {
        this.overflow = a;
        this.style.overflow = a
    };
    b.setVisible = function (a) {
        this.visible = a;
        this.style.display = a ? this.bG : "none"
    };
    b.show = function () {
        this.setVisible(true)
    };
    b.hide = function () {
        this.setVisible(false)
    };
    b.setAlpha = function (a) {
        this.alpha = a;
        if (a !== null)this.style.opacity = "" + a
    };
    b.setRounded = function (a) {
        this.rounded = a;
        this.bH()
    };
    b.bH = function () {
        var a = "", b = this.rounded;
        if (b) {
            var c = this.width, d = this.height, c = c < d ? c : d;
            jbeeb.Utils.isNumber(b) ? a = c * b + "px" : typeof b == "object" && (a += (c * b.tl || 0) + "px " + (c * b.tr || 0) + "px " + (c * b.br || 0) + "px " + (c * b.bl || 0) + "px")
        }
        b = this.style;
        b.borderRadius = b.MozBorderRadius = b.WebkitBorderRadius = b.OBorderRadius = b.msBorderRadius = a
    };
    b.onAdded = function () {
        this.autoCenter && this.center(this.autoCenter)
    };
    b.toFront = function () {
        this.parent && this.parent.toFront(this)
    };
    b.toBack = function () {
        this.parent && this.parent.toBack(this)
    };
    b.bB = function () {
        var a = this.style, b = this.aP(), c = this.aq(), d = this.bD(), e = this.bh();
        if (b == [] && c == [] && d == [] && e == [])a.boxShadow = ""; else {
            for (var b = c.concat(d, e, b), c = b.length, d = [], e = [], g = 0, f = 0; f < c; f++)g == 0 ? b[f] == 1 && e.push("inset") : g < 4 ? e.push(b[f] + "px") : (e.push(jbeeb.Utils.makeColor(b[f], b[f + 1])), d.push(e.join(" ")), e = [], ++f, g = -1), g++;
            a.boxShadow = a.MozBoxShadow = a.WebkitBoxShadow = a.OBoxShadow = a.msBoxShadow = d.join(",")
        }
    };
    b.aP = function () {
        var a = this.shadow;
        return a ? [0, a.x || 0, a.y || 0, a.s, a.c || "#000000", a.a || 0.4] : []
    };
    b.setShadow = function (a) {
        this.shadow = a;
        this.bB()
    };
    b.bh = function () {
        var a = this.inset;
        return a ? [1, a.x || 0, a.y || 0, a.s, a.c || "#000000", a.a || 0.4] : []
    };
    b.setInset = function (a) {
        this.inset = a;
        this.bB()
    };
    b.aq = function () {
        var a = this.bevel;
        if (a) {
            var b = this.aQ(a.c1 || "#FFFFFF"), c = this.aQ(a.c2 || "#000000");
            return b > c ? [1, -a.x, -a.y, a.s1, a.c1 || "#FFFFFF", a.a1, 1, a.x, a.y, a.s2, a.c2 || "#000000", a.a2] : [1, a.x, a.y, a.s2, a.c2 || "#000000", a.a2, 1, -a.x, -a.y, a.s1, a.c1 || "#FFFFFF", a.a1]
        } else return[]
    };
    b.aQ = function (a) {
        var a = jbeeb.Utils.hexToRgb(a), b = a[0], c = a[1];
        return b + b + b + a[2] + c + c + c + c >> 3
    };
    b.setBevel = function (a) {
        a && jbeeb.Utils.isNumber(a) && (a = {x:-a, y:-a, s1:0, s2:0, c1:"#FFFFFF", c2:"#000000", a1:1, a2:1});
        this.bevel = a;
        this.bB()
    };
    b.bD = function () {
        if (this.outline) {
            var a = this.outline;
            return[0, -a.weight, -a.weight, a.spread || 0, a.color || "#000000", a.alpha, 0, a.weight, -a.weight, a.spread || 0, a.color || "#000000", a.alpha, 0, -a.weight, a.weight, a.spread || 0, a.color || "#000000", a.alpha, 0, a.weight, a.weight, a.spread || 0, a.color || "#000000", a.alpha]
        } else return[]
    };
    b.setOutline = function (a) {
        this.outline = a;
        this.bB()
    };
    b.setMouseEnabled = function (a) {
        this.style.pointerEvents = a === 0 || a === false ? "none" : "auto"
    };
    b.bu = null;
    b.MELbubble = false;
    b.addMEL = function (a, b, c, d) {
        this.MELbubble = c;
        if (!this.bu)this.bu = new jbeeb.MouseEventListener(this);
        (a == "mouseOver" || a == "mouseOut" || a == "mouseMoveOver") && this.bu.enableMouseOver(1);
        this.addEventListener(a, b, d)
    };
    b.removeMEL = function (a, b) {
        this.removeEventListener(a, b);
        a == "mouseOver" && this.bu.enableMouseOver(0)
    };
    b.destroy = function () {
        if (this.element)this.element.ontouchstart = function () {
        }, this.element.onmousedown = function () {
        }, this.parent && this.parent.element && this.parent.element.removeChild(this.element);
        this.element = this.style = this.image = this.inset = this.shadow = this.outline = this.bevel = this.gradient = this.fill = this.stroke = this.temp = this.bu = this.MELbubbleRun = this.MELmoveRun = this.MELupRun = this.MELdownRun = this.MELclickRun = this.MELmove = this.MELup = this.MELdown = this.MELclick = null
    };
    b.toString = function () {
        return "[Box (name=" + this.name + ")]"
    };
    b.type = "box";
    jbeeb.Box = c
})();
this.jbeeb = this.jbeeb || {};
(function () {
    var c = function (a) {
        this.init(a)
    }, b = c.prototype = new jbeeb.Box;
    b.textFit = null;
    b.text = "";
    b.ac = "";
    b.textSize = null;
    b.textColor = null;
    b.shadowText = null;
    b.bevelText = null;
    b.outlineText = null;
    b.insetText = null;
    b.font = null;
    b.align = null;
    b.textScale = null;
    b.selectable = null;
    b.bold = null;
    b.padding = null;
    b.editable = null;
    b.an = null;
    b.multiline = null;
    b.baselineShift = null;
    b.aD = null;
    b.R = null;
    b.aC = b.init;
    b.init = function (a) {
        if (a) {
            this.textFit = a.textFit || null;
            this.font = a.font || "Arial, Helvetica, sans-serif";
            this.align = a.align || "left";
            this.textScale = a.textScale || 1;
            this.bold = a.bold || 0;
            this.selectable = a.selectable || 0;
            this.multiline = a.multiline || 0;
            this.baselineShift = a.baselineShift || 0;
            this.text = a.text || "";
            this.ac = "";
            this.textColor = {};
            if (a.textSize)this.textSize = a.textSize;
            if (a.editable) {
                var b;
                b = this.multiline ? document.createElement("textarea") : document.createElement("input");
                this.an = 1;
                b.id = jbeeb.getUID();
                b.style.position = "absolute";
                b.style.overflow = "visible";
                if (!this.multiline)b.type = "text";
                a.element = b
            }
            this.aC(a);
            a.editable == 1 && this.setEditable(1);
            b = this.style;
            b.fontSmooth = "always";
            b.webkitFontSmoothing = "antialiased";
            b.textDecoration = "none";
            b.zoom = 1;
            b.size = a.h;
            this.setMultiline(this.multiline, true);
            this.setText(this.text);
            if (a.textColor) {
                b = a.textColor;
                var c = {};
                if (typeof b == "string")c = {color:b, alpha:1}; else if (c = b, !c.color)c.color = null, c.alpha = null;
                this.setTextColor(c.color || "#000000", c.alpha || 1)
            }
            if (a.shadowText)this.shadowText = a.shadowText;
            if (a.insetText)this.insetText = a.insetText;
            if (a.bevelText)this.bevelText = a.bevelText;
            if (a.outlineText)this.outlineText = a.outlineText;
            if (a.shadow)this.shadowText = a.shadow;
            if (a.inset)this.insetText = a.inset;
            if (a.bevel)this.bevelText = a.bevel;
            if (a.outline)this.outlineText = a.outline;
            a.padding && this.setPadding(a.padding);
            if (a.alphaNumeric)this.alphaNumeric = 1;
            if (a.numeric)this.numeric = 1;
            this.setBaselineShift(this.baselineShift);
            this.ag()
        }
    };
    b.setMultiline = function (a) {
        this.multiline = a;
        var b = this.style;
        if (a) {
            if (!this.textSize)this.textSize = 12;
            b.whiteSpace = "normal"
        } else b.whiteSpace = "nowrap";
        this.G()
    };
    b.an = 0;
    b.setEditable = function (a) {
        a === 1 ? (this.setCursor("text"), this.R ? this.R.removeAllEventListeners() : this.R = new jbeeb.Keyboard(this.element), this.R.addEventListener("keydown", this.keyHandler.bind(this)), this.R.addEventListener("keyup", this.keyHandler.bind(this)), this.setOverflow("hidden"), jbeeb.Utils.bindEvent(this.element, "focus", this.setFocus.bind(this))) : (this.setCursor("default"), this.R && this.R.removeAllEventListeners(), jbeeb.Utils.unbindEvent(this.element, "focus", this.setFocus.bind(this)));
        this.editable = a
    };
    b.numeric = null;
    b.alphaNumeric = null;
    b.keyHandler = function (a, b, c) {
        var d = true;
        this.alphaNumeric ? d = this.R.alphaNumeric(b) : this.numeric && (d = this.R.numeric(b));
        if (this.multiline == 0 && (b == 108 || b == 13))d = false, c == "keyup" && this.dispatchEvent("enter", this, this.text);
        b == 9 && (d = false, c == "keyup" && this.dispatchEvent("tab", this, this.text));
        d ? (this.text = this.an && !this.multiline ? this.element.value : this.element.innerHTML, c == "keyup" && this.dispatchEvent("change", this, this.text)) : this.R.block(a)
    };
    b.setPadding = function (a) {
        this.padding = a;
        var b = this.style;
        this.multiline ? (b.paddingLeft = a + "px", b.paddingRight = a + "px", b.paddingTop = a + "px", b.paddingBottom = a + "px") : (b.paddingTop = "", b.paddingBottom = "", this.align == "left" ? b.paddingLeft = a ? a + "px" : "" : this.align == "right" ? b.paddingRight = a ? a + "px" : "" : (b.paddingLeft = "", b.paddingRight = ""))
    };
    b.bd = function () {
        var a = this.style;
        a.fontFamily = this.font;
        a.color = jbeeb.Utils.makeColor(this.textColor.color, this.textColor.alpha);
        a.textAlign = this.align;
        a.fontWeight = this.bold ? "bold" : "normal"
    };
    b.setFont = function (a) {
        this.font = a;
        this.style.fontFamily = a;
        this.ag()
    };
    b.setAlign = function (a) {
        this.align = a;
        this.style.textAlign = a;
        a == "center" && this.setPadding(0)
    };
    b.setBold = function (a) {
        this.bold = a ? "bold" : "";
        this.style.fontWeight = this.bold;
        this.ag()
    };
    b.setBaselineShift = function (a) {
        a ? a > 1 ? a = 1 : a < -1 && (a = -1) : a = 0;
        a *= -1;
        this.baselineShift = a;
        this.aD = 1 + a;
        this.ag()
    };
    b.measureText = function (a) {
        if (this.text || a) {
            var b = document.createElement("div");
            document.body.appendChild(b);
            var c = b.style;
            c.fontSize = this.height * this.textScale + "px";
            c.fontFamily = this.font;
            c.fontWeight = this.bold ? "bold" : "normal";
            c.position = "absolute";
            c.left = -1E3;
            c.top = -1E3;
            b.innerHTML = a || this.text;
            a = {w:b.clientWidth, h:b.clientHeight};
            document.body.removeChild(b);
            return a
        } else return 0
    };
    b.setTextColor = function (a, b) {
        this.textColor.color = a;
        this.textColor.alpha = b;
        this.style.color = jbeeb.Utils.makeColor(a, b)
    };
    b.setText = function (a) {
        this.text = a = a == "" || !a ? "" : String(a);
        this.an && !this.multiline ? this.element.value = a : this.element.innerHTML = a;
        this.ac != a && this.ag();
        this.ac = a
    };
    b.selectAll = function () {
        var a, b;
        window.getSelection && document.createRange ? (b = document.createRange(), b.selectNodeContents(this.element), a = window.getSelection(), a.removeAllRanges(), a.addRange(b)) : document.body.createTextRange && (b = document.body.createTextRange(), b.moveToElementText(this.element), b.select())
    };
    b.bi = b.setWidth;
    b.setWidth = function (a) {
        a != this.width && (this.bi(a), this.G())
    };
    b.aK = b.setHeight;
    b.setHeight = function (a) {
        a != this.height && (this.aK(a), this.G())
    };
    b.ao = b.setSize;
    b.setSize = function (a, b) {
        if (a != this.width || b != this.height)this.ao(a, b), this.G()
    };
    b.setTextScale = function (a) {
        if (a != this.textScale)this.textScale = a, this.G()
    };
    b.setTextSize = function (a) {
        this.textSize = a;
        this.G()
    };
    b.setTextFit = function (a) {
        this.textFit = a;
        this.G()
    };
    b.aw = b.onAdded;
    b.onAdded = function () {
        this.aw();
        this.ag()
    };
    b.setFocus = function () {
        jbeeb.focus = this;
        this.element.focus()
    };
    b.G = function () {
        if (this.text != "") {
            var a, b = this.style;
            if (this.textSize)a = this.textSize, b.lineHeight = "1em"; else {
                var c = this.width, d = this.height;
                if (c > 0 && d > 0)if (this.textFit == "wh")a = a = c < d ? c : d, a = this.textScale > 0 ? a * this.textScale : a; else if (this.textFit == "w") {
                    if (c = this.width / this.measureText().w / 2, jbeeb.Utils.isNumber(c) && c > 0)this.textScale = c, a = d * c
                } else a = d * this.textScale; else a = 0;
                b.lineHeight = this.height * this.aD / a + "em"
            }
            b.fontSize = a + "px"
        }
    };
    b.getTextSize = function () {
        return this.style.fontSize || null
    };
    b.ag = function () {
        this.G();
        this.bd()
    };
    b.ab = function () {
        var a = this.style, b = this.aJ(), c = this.as(), d = this.az(), e = this.bp();
        if (b == [] && c == [] && d == [] && e == [])a.textShadow = ""; else {
            for (var b = c.concat(d, b, e), c = b.length, d = [], e = [], g = 0, f = 0; f < c; f++)g == 0 ? b[f] == 1 && e.push("inset") : g < 4 ? e.push(b[f] + "px") : (e.push(jbeeb.Utils.makeColor(b[f], b[f + 1])), d.push(e.join(" ")), e = [], ++f, g = -1), g++;
            a.textShadow = a.MozTextShadow = a.WebkitTextShadow = a.OTextShadow = a.msTextShadow = d.join(",")
        }
    };
    b.aJ = function () {
        var a = this.shadowText;
        return a ? [0, a.x, a.y, a.s, a.c, a.a] : []
    };
    b.setShadowText = function (a) {
        this.shadowText = a;
        this.ab()
    };
    b.bp = function () {
        var a = this.insetText;
        return a ? [1, a.x, a.y, a.s, a.c, a.a] : []
    };
    b.setInsetText = function (a) {
        this.insetText = a;
        this.ab()
    };
    b.as = function () {
        if (this.bevelText) {
            var a = this.bevelText;
            return[0, -a.x, -a.y, a.s1, a.c1 || "#000000", a.a1, 0, a.x, a.y, a.s2, a.c2 || "#FFFFFF", a.a2]
        } else return[]
    };
    b.setBevelText = function (a) {
        this.bevelText = a;
        this.ab()
    };
    b.az = function () {
        if (this.outlineText) {
            var a = this.outlineText;
            return[0, -a.weight, -a.weight, a.spread || 0, a.color || "#000000", a.alpha, 0, a.weight, -a.weight, a.spread || 0, a.color || "#000000", a.alpha, 0, -a.weight, a.weight, a.spread || 0, a.color || "#000000", a.alpha, 0, a.weight, a.weight, a.spread || 0, a.color || "#000000", a.alpha]
        } else return[]
    };
    b.setOutlineText = function (a) {
        this.outlineText = a;
        this.ab()
    };
    b.toString = function () {
        return "[TextBox (name=" + this.name + ")]"
    };
    b.type = "textbox";
    jbeeb.TextBox = c
})();
this.jbeeb = this.jbeeb || {};
(function () {
    var c = function (a) {
        this.init(a)
    }, b = c.prototype = new jbeeb.Box;
    b.K = [];
    b.addChild = function (a) {
        if (a == null)return a;
        var b = arguments.length;
        if (b > 0)for (var c = 0; c < b; c++) {
            var d = arguments[c];
            d.parent && (d.parent.element.removeChild(d.element), d.parent.removeChild(d));
            d.parent = this;
            d.stage = this.amStage == 1 ? this : this.stage;
            d.setZ(this.K.length);
            this.element.appendChild(d.element);
            d.onAdded && d.onAdded.call(d);
            this.K.push(d)
        }
    };
    b.removeChild = function (a) {
        var b = arguments.length;
        if (b > 1) {
            for (var c = true; b--;)c = c && this.removeChild(arguments[b]);
            return c
        }
        return this.removeChildAt(this.K.indexOf(a))
    };
    b.removeChildAt = function (a) {
        var b = arguments.length;
        if (b > 1) {
            for (var c = [], d = 0; d < b; d++)c[d] = arguments[d];
            c.sort(function (a, b) {
                return b - a
            });
            for (var e = true, d = 0; d < b; d++)e = e && this.removeChildAt(c[d]);
            return e
        }
        if (a < 0 || a > this.K.length - 1)return false;
        if (b = this.K[a])b.parent = null;
        b.element && this.element.removeChild(b.element);
        this.K.splice(a, 1);
        return true
    };
    b.removeAllChildren = function () {
        for (var a = this.K.length; a--;) {
            var b = this.K[a];
            this.removeChildAt(a);
            b.destroy()
        }
    };
    b.toFront = function (a) {
        if (a) {
            for (var b = a.z, c = this.K.length, d = 0; d < c; d++) {
                var e = this.K[d], g = e.z;
                g >= b && e.setZ(g - 1)
            }
            a.setZ(c - 1)
        } else this.parent && this.parent.toFront(this)
    };
    b.toBack = function (a) {
        if (a) {
            for (var b = a.z, c = this.K.length; c--;) {
                var d = this.K[c];
                d.z < b && d.setZ(d.z + 1)
            }
            a.setZ(0)
        } else this.parent && this.parent.toBack(this)
    };
    b.bo = b.init;
    b.init = function (a) {
        this.bo(a);
        if (a)this.stage = this.amStage == 1 ? this : this.stage, this.K = []
    };
    b.bN = b.stretch;
    b.stretch = function (a, b) {
        for (var c = this.K.length; c--;)this.K[c].stretch(a, b);
        this.bN(a, b)
    };
    b.be = b.destroy;
    b.destroy = function () {
        if (this.K)for (var a = this.K.length; a--;) {
            var b = this.K[a];
            this.removeChildAt(a);
            b.destroy()
        }
        this.K = null;
        this.be()
    };
    b.getChildren = function () {
        return this.K
    };
    b.toString = function () {
        return "[Container (name=" + this.name + ")]"
    };
    b.type = "container";
    jbeeb.Container = c
})();
this.jbeeb = this.jbeeb || {};
(function () {
    var c = function (a) {
        this.bc(a)
    }, b = c.prototype = new jbeeb.Container;
    b.amReady = null;
    b.ba = null;
    b.ah = null;
    b.aW = null;
    b.bc = function (a) {
        if (a) {
            this.amReady = 0;
            if (a.onReady)this.ba = a.onReady;
            this.id = jbeeb.getUID();
            if (a.stage)this.amStage = 0, this.aM(a); else {
                this.amStage = 1;
                this.parent = this;
                this.stage = this;
                if (a.target) {
                    var b;
                    b = typeof a.target == "string" ? document.getElementById(a.target) : a.target;
                    this.element = document.createElement("div");
                    this.element.id = this.id;
                    b.appendChild(this.element)
                } else document.write('<div id="' + this.id + '"></div>'), this.element = document.getElementById(this.id);
                a.element = this.element;
                this.aM(a);
                this.style = this.element.style;
                this.style.position = "relative";
                this.style.display = a.inline === true || a.inline == "true" || a.inline === 1 ? "inline-block" : "block";
                this.style.verticalAlign = "top";
                this.style.zoom = 1;
                this.width !== null && this.setSize(a.width, a.height);
                this.w !== null && this.setSize(a.w, a.h);
                this.setOverflow(a.overflow || "visible");
                this.setCursor("default")
            }
            jbeeb.register(this)
        }
    };
    b.aM = b.init;
    b.init = function () {
        var a = jbeeb.Utils.getXYWH(this.element);
        this.x = a.x;
        this.y = a.y;
        this.width = a.width;
        this.height = a.height;
        this.amReady = 1;
        this.ba && this.ba(this)
    };
    b.toString = function () {
        return "[Stage (name=" + this.name + ")]"
    };
    b.type = "stage";
    jbeeb.Stage = c
})();
var CountdownImageFolder = imageDir, CountdownImageBasename = "flipper", CountdownImageExt = "png", CountdownImagePhysicalWidth = 41, CountdownImagePhysicalHeight = 60, CountdownWidth = 200, CountdownHeight = 30;
(function () {
    var c = function (a) {
        this.imageFolder = CountdownImageFolder;
        this.imageBasename = CountdownImageBasename;
        this.imageExt = CountdownImageExt;
        this.imagePhysicalWidth = CountdownImagePhysicalWidth;
        this.imagePhysicalHeight = CountdownImagePhysicalHeight;
        this.totalFlipDigits = 2;
        this.bx = a || {};
        var b, c, d, e;
        if (a.bkgd) {
            var g = a.bkgd;
            if (g.color)b = g.color;
            g.stroke && g.strokeColor && (c = {weight:g.stroke || 1, color:g.strokeColor, alpha:g.strokeAlpha});
            if (g.shadow)d = g.shadow;
            if (g.rounded)e = g.rounded
        }
        this.bS = new jbeeb.Stage({target:a.target, inline:a.inline || false, w:a.width || CountdownWidth, h:a.height || CountdownHeight, rounded:e || null, fill:b || null, stroke:c || null, shadow:d || null});
        jbeeb.register(this)
    }, b = c.prototype;
    b.bx = null;
    b.bS = null;
    b.ap = false;
    b.bI = null;
    b.by = false;
    b.J = null;
    b.T = null;
    b.totalFlipDigits = null;
    b.imageFolder = null;
    b.imageBasename = "flipper";
    b.imageExt = "png";
    b.aN = null;
    b.bq = null;
    b.init = function () {
        var a = this.bx;
        this.by = this.ap = false;
        this.J = new Date;
        this.T = a.style || "boring";
        this.width = a.width || CountdownWidth;
        this.height = a.height || CountdownHeight;
        this.bI = a.onComplete;
        var b = new Date;
        if (this.T == "flip") {
            this.imageFolder.substr(-1) != "/" && (this.imageFolder += "/");
            var c = this.imageFolder + this.imageBasename
        }
        this.bq = {second:{use:false, prev:[null, null], ani:[null, null], aniCount:[null, null]}, minute:{use:false, prev:[null, null], ani:[null, null], aniCount:[null, null]}, hour:{use:false, prev:[null, null], ani:[null, null], aniCount:[null, null]}, day:{use:false, prev:[null, null], ani:[null, null], aniCount:[null, null]}, month:{use:false, prev:[null, null], ani:[null, null], aniCount:[null, null]}, year:{use:false, prev:[null, null], ani:[null, null], aniCount:[null, null]}};
        if (a.time)this.J.setTime((b.getTime() / 1E3 + parseInt(a.time) + 1) * 1E3); else {
            var d = a.year ? parseInt(a.year) : b.getFullYear(), e = a.month ? parseInt(a.month) - 1 : 0, g = a.day ? parseInt(a.day) : 0, b = a.hour ? parseInt(a.hour) : 0, f = a.minute ? parseInt(a.minute) : 0, h = a.second ? parseInt(a.second) : 0, l = (a.ampm ? a.ampm : "am").toLowerCase();
            b < 12 && /p/.test(l) && (b += 12);
            this.J = new Date(d, e, g, b, f, h);
            d = new Date;
            d.getHours();
            if (b > d.getHours())b = this.J.getTime(), b += 864E5, this.J = new Date(b)
        }
        b = "second,minute,hour,day,month,year".split(",");
        f = a.rangeLo ? a.rangeLo : "second";
        h = a.rangeHi ? a.rangeHi : "year";
        f = f.substr(-1) == "s" ? f.substr(0, f.length) : f;
        h = h.substr(-1) == "s" ? h.substr(0, h.length) : h;
        for (d = 0; d < b.length; d++)e = b[d], e == f && (f = d), e == h && (h = d);
        for (d = 0; d < b.length; d++)if (d >= f && d <= h)this.bq[b[d]].use = true;
        e = a.padding === 0 ? 0 : a.padding ? a.padding : this.T == "flip" ? 0 : 0.8;
        this.T == "flip" && (e /= 2);
        var g = this.height, f = this.width / (h - f + 1), h = f * 0.25, l = f * 0.1, m = f - l, r = g - h, s = m * e;
        this.T == "flip" && (s = m * (e / this.totalFlipDigits));
        var o = m - s, t = this.height - h * 2;
        if (this.T == "flip")var t = this.height - h, u = g * 0.03;
        var p = {font:"Arial, _sans", color:"#FFFFFF", weight:"normal", bkgd:this.T == "flip" ? null : {color:["#000000", 1, 0, "#686868", 1, 50, "#000000", 1, 50, "#535050", 1, 100], alpha:"v"}, rounded:this.T == "flip" ? null : 0.1, shadow:null}, w = {font:"Arial, _sans", color:"#303030", weight:"bold"};
        if (a.numbers)for (var n in p)a.numbers[n] && (p[n] = a.numbers[n]);
        if (a.labels)for (n in w)a.labels[n] && (w[n] = a.labels[n]);
        b.reverse();
        this.aN = {};
        for (d = n = 0; d < b.length; d++) {
            var k = b[d];
            if (this.bq[k].use) {
                this.aN[k] = new jbeeb.Container({x:n + l / 2, y:0, w:m, h:r, rounded:p.rounded || null, fill:jbeeb.Utils.clone(p.bkgd) || null, shadow:p.shadow || null});
                k = this.aN[k];
                if (this.T == "flip") {
                    var q = this.imagePhysicalWidth * ((o - u * 2 - s * 2) / this.totalFlipDigits / this.imagePhysicalWidth), x = this.imagePhysicalHeight * (t / this.imagePhysicalHeight);
                    k.time = new jbeeb.Container({x:0, y:0, w:q * this.totalFlipDigits, h:x});
                    for (var C = [], v = 0; v < this.totalFlipDigits; v++) {
                        for (var y = new jbeeb.Container({x:q * v + u * v, y:0, w:q, h:x}), D = [], z = 0; z < 10; z++) {
                            for (var A = new jbeeb.Container({x:0, y:0, w:q, h:x}), E = [], B = 0; B < 3; B++) {
                                var F = new jbeeb.Box({x:0, y:0, w:q, h:x, image:{url:c + ("" + z + "" + B) + "." + this.imageExt, mode:"fit"}});
                                E[B] = F;
                                A.addChild(F)
                            }
                            A.img = E;
                            D[z] = A;
                            y.addChild(A)
                        }
                        y.num = D;
                        C[v] = y;
                        k.time.addChild(y)
                    }
                    k.time.slot = C;
                    k.addChild(k.time)
                } else k.time = new jbeeb.TextBox({x:0, y:0, w:m, h:r, text:"00", textScale:e, font:p.font, textColor:p.color, align:"center"}), k.addChild(k.time), k.line = new jbeeb.Box({x:0, y:0, w:m, h:g * 0.03, fill:"#000000"}), k.addChild(k.line), k.line.center();
                q = b[d].toUpperCase() + "S";
                k.labels = new jbeeb.TextBox({x:n, y:g - h * 0.7, w:f, h:h * 0.7, font:w.font, testScale:0.7, textColor:w.color, bold:1, align:"center", text:q});
                this.bS.addChild(k);
                this.bS.addChild(k.labels);
                k.time.center();
                a.numberMarginTop && k.time.setY(a.numberMarginTop);
                n += f
            }
        }
        this.by = true;
        jbeeb.ticker.addListener(this)
    };
    b.bs = function () {
        this.bI && this.bI()
    };
    b.bJ = function () {
        var a, b, j, d, e, g;
        e = new Date;
        a = this.J.getTime() - e.getTime();
        var f = this.aN;
        if (a > 0)a /= 1E3, b = a / 60, j = b / 60, a = Math.floor(a % 60), b = Math.floor(b % 60), j = Math.floor(j % 24), d = c.YMDcalc(e.getFullYear(), e.getMonth(), e.getDate(), this.J.getFullYear(), this.J.getMonth(), this.J.getDate()), g = d.y, e = d.m, d = d.d, a < 10 && (a = "0" + a), b < 10 && (b = "0" + b), j < 10 && (j = "0" + j), d < 10 && (d = "0" + d), e < 10 && (e = "0" + e), g < 10 && (g = "0" + g), this.T == "flip" ? (f.year && this.H("year", g), f.month && this.H("month", e), f.day && this.H("day", d), f.hour && this.H("hour", j), f.minute && this.H("minute", b), f.second && this.H("second", a)) : (f.year && f.year.time.setText(g), f.month && f.month.time.setText(e), f.day && f.day.time.setText(d), f.hour && f.hour.time.setText(j), f.minute && f.minute.time.setText(b), f.second && f.second.time.setText(a)); else if (!this.ap)g = e = d = j = b = a = "00", this.T == "flip" ? (f.year && this.H("year", g), f.month && this.H("month", e), f.day && this.H("day", d), f.hour && this.H("hour", j), f.minute && this.H("minute", b), f.second && this.H("second", a)) : (f.year && f.year.time.setText(g), f.month && f.month.time.setText(e), f.day && f.day.time.setText(d), f.hour && f.hour.time.setText(j), f.minute && f.minute.time.setText(b), f.second && f.second.time.setText(a)), this.ap = true, this.bs()
    };
    b.H = function (a, b) {
        for (var c = 0; c < this.totalFlipDigits; c++) {
            var d = this.aN[a].time.slot[c], e = this.bq[a], g = String(b).substr(c, 1), f = d.num[g];
            if (f) {
                if (e.prev[c] != g) {
                    for (var h = 0; h < 10; h++)d.num[h].hide();
                    f.show();
                    e.ani[c] = true;
                    e.aniCount[c] = 0
                }
                if (e.ani[c]) {
                    for (h = 0; h < 3; h++)f.img[h].hide();
                    this.ap ? f.img[2].show() : (f.img[e.aniCount[c]].show(), e.aniCount[c]++, e.aniCount[c] > 2 && (e.ani[c] = false))
                }
                e.prev[c] = g
            }
        }
    };
    b.tick = function () {
        this.by === true && this.bJ()
    };
    c.YMDcalc = function (a, b, c, d, e, g) {
        var f = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        f[1] = a % 400 == 0 || a % 4 == 0 && a % 100 != 0 ? 29 : 28;
        b += 1;
        e += 1;
        var h = c + 1, c = g - h;
        c < 0 && (c = f[b - 1] - h + g, e--);
        e < 0 && (e += 12, d--);
        g = e - b;
        g < 0 && (g += 12, d--);
        return{y:d - a, m:g, d:c}
    };
    window.Countdown = c
})(); 