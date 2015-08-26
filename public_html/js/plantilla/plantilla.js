/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("body").on("EDGE_Container_loaded", function () {

    $.backstretch("images/r1.png");
    //document.body.style.background = "url('images/r1.png') 50% 50% / cover no-repeat gray";
    /*$("body").css({
     "background-size": "cover",
     "background-repeat": "no-repeat",
     "background-position": "center center",
     "background": "url('images/r1.png') 50% 50% / cover no-repeat gray"
     });*/

    var audio = new Audio('media/navigate-begin.mp3');

    resize();
    //prevent_scroll($("html"));

    if (EDGE_Plantilla.scorm_available) {
        var suspendData = SCORM_INITIALIZE();
        if (suspendData !== "") {
            EDGE_Plantilla.temp_scorm_suspendData = jQuery.parseJSON(suspendData);
        }
        var interactions = LOAD_INTERACTIONS();
        EDGE_Plantilla.temp_scorm = merge_options(EDGE_Plantilla.temp_scorm, interactions)
    }

    //$(document).trigger("resize");

});

function menu_tools_hide_show(sym) {
    if (sym.$("menu_grafico").is(":visible")) {

        sym.$("menu_grafico").hide();
        sym.$("btn_full").hide();
        sym.$("btn_creditos").hide();
        sym.$("btn_ayuda").hide();
        sym.$("btn_audio").hide();
        sym.$("btn_info").hide();
        sym.$("btn_accesibilidad").hide()
        sym.$("Tool_accesibilidad").hide();
        sym.$("Tool_info").hide();
        sym.$("Tool_full").hide();
        sym.$("Tool_ayuda").hide();
        sym.$("Tool_audio").hide();
        sym.$("Tool_creditos").hide();

    } else {

        sym.$("menu_grafico").show();
        sym.$("btn_full").show();
        sym.$("btn_creditos").show();
        sym.$("btn_ayuda").show();
        sym.$("btn_audio").show();
        sym.$("btn_info").show();
        sym.$("btn_accesibilidad").show();
        sym.$("Tool_accesibilidad").show();
        sym.$("Tool_info").show();
        sym.$("Tool_full").show();
        sym.$("Tool_ayuda").show();
        sym.$("Tool_audio").show();
        sym.$("Tool_creditos").show();
    }
}

$("body").on("EDGE_Self_Plantilla_ClickMenuTools", function (evt) {
    menu_tools_hide_show(evt.sym);
});


function resize() {
    var ancho = $("#Stage").width();
    var alto = $("#Stage").height();



    var windowWidth = $(window).width(); //retrieve current window width
    var windowHeight = $(window).height(); //retrieve current window height
    var documentWidth = $(document).width(); //retrieve current document width
    var documentHeight = $(document).height(); //retrieve current document height
    var vScrollPosition = $(document).scrollTop(); //retrieve the document scroll ToP position
    var hScrollPosition = $(document).scrollLeft(); //retrieve the document scroll Left position

    var scale1 = windowWidth / ancho;
    var scale2 = windowHeight / alto;

    var realScale = scale1 > scale2 ? scale2 : scale1;

    $("#Stage").css({// Set the transform origin so we always scale to the top left corner of the stage
        "transform-origin": "0% 0%",
        "-ms-transform-origin": "0% 0%",
        "-webkit-transform-origin": "0% 0%",
        "-moz-transform-origin": "0% 0%",
        "-o-transform-origin": "0% 0%"
    });

    $("body").css({height: 0, width: windowWidth});

    var element = $("<div/>", {id: "magic_container"});
    element.css({
        display: "flex",
        "align-items": "center",
        "flex-direction": "column",
        "width": "100%",
        "height": "100%",
        position: "absolute",
        left: 0,
        top: 0
    });

    $("#Stage").css("transform", "scale(" + realScale + ")").css({
        //margin: "0 auto",
        position: "relative"
    }).center(realScale);

    //$("body").append(element);

    //$("#magic_container").append($("#Stage"));  

    //EC.centerStage(EDGE_Plantilla.plantilla_sym); 

    console.log("MEDIDAS STAGE ", ancho, alto, scale1, scale2, realScale);
}

$("body").on("EDGE_Self_promiseCreating", function (evt) {
    //console.log(evt);
    var page = evt.identify;
    console.log(page);
    if(!page.type.startsWith("popup")){
        buscar_sym(EDGE_Plantilla.plantilla_sym, EDGE_Plantilla.basic_contenedor_name.base_contenedor).play();
    }
});