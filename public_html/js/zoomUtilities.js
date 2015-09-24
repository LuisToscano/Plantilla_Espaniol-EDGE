/* 
 * 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("body").on("EDGE_Container_loaded", function () {
    //alert("plantilla");
    inicializarZoom();
    $(window).on('resize', resize);
    resize();
    //console.log("Terminé");
});

function resize() {
    var ancho = $("#Stage").width();
    var alto = $("#Stage").height();

    //var zoom = detectZoom.zoom();
    var device = detectZoom.device();

    //console.warn("ZOOM LEVEL", device);

    aplicarZoom(device);
}

function inicializarZoom() {
    $("div[id*=texto]").each(function () {
        $(this).find("p, span").each(function () {
            var text_size = $(this).css("font-size");
            text_size = text_size.substring(0, text_size.length - 2);
            $(this).prop("current_font_size", text_size);
        });
    });

    $("div[id*=_empuja_]").each(function () {
        var split = this.id.split("_empuja_");
        $(this).attr("zoomPush", split[1]);
        $(this).prop("originalPosition", $(this).offset());
    });

    $("[zoomPush]").each(function () {
        var pushedObj = $("[id*=" + $(this).attr("zoomPush") + "]").not("[id*=" + this.id + "]");
        pushedObj.prop("originalPosition", pushedObj.offset());
        pushedObj.attr("zoomId", $(this).attr("zoomPush"));
    });
}

function aplicarZoom(zoomLevel) {
    $("div[id*=texto]").each(function () {
        $(this).find("p, span").each(function () {
            $(this).css("font-size", ($(this).prop("current_font_size") * zoomLevel) + "px");
        });
    });

    if (zoomLevel >= 1) {
        if (zoomLevel > 1) {
            $("#Stage").css("overflow-y", "auto");
        } else {
            $("#Stage").css("overflow-y", "hidden");
        }

        $("[zoomPush]").each(function () {
            newHeight = 10;
            newHeight += $(this).offset().top;

            $('p', this).each(function () {
                newHeight += $(this).height();
            });

            var pushedObj = $("[zoomId=" + $(this).attr("zoomPush") + "]");
            //console.log(newHeight + " > "+ pushedObj.prop("originalPosition").top);
            if (zoomLevel > 1 && (newHeight > pushedObj.prop("originalPosition").top)) {
                pushedObj.css("top", newHeight);
            } else {
                pushedObj.css("top", pushedObj.prop("originalPosition").top);
            }
        });
    }
}

(function (root, ns, factory) {
    "use strict";
    "undefined" != typeof module && module.exports ? module.exports = factory(ns, root) : "function" == typeof define && define.amd ? define("detect-zoom", function () {
        return factory(ns, root)
    }) : root[ns] = factory(ns, root)
})(window, "detectZoom", function () {
    var devicePixelRatio = function () {
        return window.devicePixelRatio || 1
    }, fallback = function () {
        return{zoom: 1, devicePxPerCssPx: 1}
    }, ie8 = function () {
        var zoom = Math.round(100 * (screen.deviceXDPI / screen.logicalXDPI)) / 100;
        return{zoom: zoom, devicePxPerCssPx: zoom * devicePixelRatio()}
    }, ie10 = function () {
        var zoom = Math.round(100 * (document.documentElement.offsetHeight / window.innerHeight)) / 100;
        return{zoom: zoom, devicePxPerCssPx: zoom * devicePixelRatio()}
    }, webkitMobile = function () {
        var deviceWidth = 90 == Math.abs(window.orientation) ? screen.height : screen.width, zoom = deviceWidth / window.innerWidth;
        return{zoom: zoom, devicePxPerCssPx: zoom * devicePixelRatio()}
    }, webkit = function () {
        var important = function (str) {
            return str.replace(/;/g, " !important;")
        }, div = document.createElement("div");
        div.innerHTML = "1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0", div.setAttribute("style", important("font: 100px/1em sans-serif; -webkit-text-size-adjust: none; text-size-adjust: none; height: auto; width: 1em; padding: 0; overflow: visible;"));
        var container = document.createElement("div");
        container.setAttribute("style", important("width:0; height:0; overflow:hidden; visibility:hidden; position: absolute;")), container.appendChild(div), document.body.appendChild(container);
        var zoom = 1e3 / div.clientHeight;
        return zoom = Math.round(100 * zoom) / 100, document.body.removeChild(container), {zoom: zoom, devicePxPerCssPx: zoom * devicePixelRatio()}
    }, firefox4 = function () {
        var zoom = mediaQueryBinarySearch("min--moz-device-pixel-ratio", "", 0, 10, 20, 1e-4);
        return zoom = Math.round(100 * zoom) / 100, {zoom: zoom, devicePxPerCssPx: zoom}
    }, firefox18 = function () {
        return{zoom: firefox4().zoom, devicePxPerCssPx: devicePixelRatio()}
    }, opera11 = function () {
        var zoom = window.top.outerWidth / window.top.innerWidth;
        return zoom = Math.round(100 * zoom) / 100, {zoom: zoom, devicePxPerCssPx: zoom * devicePixelRatio()}
    }, mediaQueryBinarySearch = function (property, unit, a, b, maxIter, epsilon) {
        function binarySearch(a, b, maxIter) {
            var mid = (a + b) / 2;
            if (0 >= maxIter || epsilon > b - a)
                return mid;
            var query = "(" + property + ":" + mid + unit + ")";
            return matchMedia(query).matches ? binarySearch(mid, b, maxIter - 1) : binarySearch(a, mid, maxIter - 1)
        }
        var matchMedia, head, style, div;
        window.matchMedia ? matchMedia = window.matchMedia : (head = document.getElementsByTagName("head")[0], style = document.createElement("style"), head.appendChild(style), div = document.createElement("div"), div.className = "mediaQueryBinarySearch", div.style.display = "none", document.body.appendChild(div), matchMedia = function (query) {
            style.sheet.insertRule("@media " + query + "{.mediaQueryBinarySearch " + "{text-decoration: underline} }", 0);
            var matched = "underline" == getComputedStyle(div, null).textDecoration;
            return style.sheet.deleteRule(0), {matches: matched}
        });
        var ratio = binarySearch(a, b, maxIter);
        return div && (head.removeChild(style), document.body.removeChild(div)), ratio
    }, detectFunction = function () {
        var func = fallback;
        return isNaN(screen.logicalXDPI) || isNaN(screen.systemXDPI) ? window.navigator.msMaxTouchPoints ? func = ie10 : "orientation"in window && "string" == typeof document.body.style.webkitMarquee ? func = webkitMobile : "string" == typeof document.body.style.webkitMarquee ? func = webkit : navigator.userAgent.indexOf("Opera") >= 0 ? func = opera11 : window.devicePixelRatio ? func = firefox18 : firefox4().zoom > .001 && (func = firefox4) : func = ie8, func
    }();
    return{zoom: function () {
            return detectFunction().zoom
        }, device: function () {
            return detectFunction().devicePxPerCssPx
        }}
});