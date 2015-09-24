/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




/************************** Eventos de inicializado *****************************/

$("body").on("EDGE_Recurso_promiseCreated", function (evt) {
    EDGE_Plantilla.temp_scorm = merge_options(EDGE_Plantilla.temp_scorm, evt.scorm_prev);
    EDGE_Plantilla.temp_scorm_suspendData = merge_options(EDGE_Plantilla.temp_scorm, evt.scorm_extra);


    inicializar(evt.sym);
});

function inicializar(sym) {
    //inicializarTimer(sym);

    console.log("INTERACTION UTILITIES CREATED");
    //parent.$(parent.document).trigger(objEvt);

    objEvt = {
        type: "EDGE_Container_loaded",
        sym: sym
    };

    $("body").trigger(objEvt);
}

/******************** Eventos de respuesta PLANTILLA **********************/
$("body").on("EDGE_Container_Finishloaded", function (evt) {
    var stage = $(evt.sym.getComposition().getStage().ele);
    var objEvt = {
        type: "EDGE_Plantilla_creationComplete",
        sym: evt.sym,
        identify: stage.prop("ed_identify")
    };
    parent.$(parent.document).trigger(objEvt);
});

/********************** Eventos interno de Actividad **********************/

$("body").on("EDGE_Plantilla_StartTimer", function (evt) {
    startTimer(evt.sym);
});

/********************* Eventos de ENVIO a la PLANTILLA ********************/

function do_submit(sym) {
    $("body").trigger({
        type: "EDGE_Actividad_Submit",
        sym: sym
    });
}

$("body").on("EDGE_Actividad_Submit", function (evt) {
    var stage = $(evt.sym.getComposition().getStage().ele);
    var identify = stage.prop("ed_identify");

    if (!isEmpty(stage.prop("timer"))) {
        stopTimer(evt.sym);
    }
    var result = check_every_answer();

    var objEvt = {
        type: "EDGE_Plantilla_submitApplied",
        interactionType: "other",
        question: "R6",
        answer: EDGE_Plantilla.temp_scorm,
        position_which_is_right: result.respuestas,
        results: result.respuesta,
        attempts: stage.prop("ed_attempts"),
        attempts_limit: EDGE_Plantilla.config.default.limit_attemps,
        //timer: evt.timer,
        pagina_actual: EDGE_Plantilla.config.paginas[EDGE_Plantilla.pagina_actual],
        sym: evt.sym,
        identify: identify,
        extra_data: EDGE_Plantilla.temp_scorm_suspendData
    };

    if (!isEmpty(evt.timer)) {

    }

    console.log("SENDING R6", result, objEvt, EDGE_Plantilla.temp_scorm);

    send_evt_to(identify, objEvt, result.respuesta, true);
});

function check_every_answer() {
    $.each(EDGE_Plantilla.config.default.default_page, function (key, value) {
        var pagina = EDGE_Plantilla.config.paginas[value];
        if (pagina.type === "actividad") {
            var stage = EDGE_Plantilla.config.paginas[value].stage;
            console.warn("entra");

            $("iframe", buscar_sym(EDGE_Plantilla.plantilla_sym, pagina.sym, true))[0]
                    .contentWindow.$("body").trigger({type: "EDGE_Recurso_Submit", sym: stage});
        }
    });

    var respuestas = {};
    var result = "correct";

    $.each(EDGE_Plantilla.config.default.default_page, function (key, value) {
        var page_respuestas = {};
        var pagina = EDGE_Plantilla.config.paginas[value];
        if (pagina.type === "actividad") {
            $.each(EDGE_Plantilla.temp_scorm, function (i, valor) {
                if (i.startsWith(pagina.recurso)) {
                    if (valor.estado === "correct") {
                        page_respuestas[i] = "correct";
                    } else {
                        page_respuestas[i] = "incorrect";
                        result = result === "neutral" ? result : "incorrect";
                    }
                }
            });

            if (isEmpty(page_respuestas)) {
                page_respuestas[pagina.recurso + "0000"] = "neutral";
                result = "neutral";
            }

            respuestas = merge_options(respuestas, page_respuestas);
        }
    });

    var objResult = {respuesta: result, respuestas: respuestas};

    return objResult;
}

function reload_pages() {
    if (typeof EDGE_Plantilla.config.default.default_page === "string") {
        mostrar_pagina(EDGE_Plantilla.config.default.default_page);
    } else {
        $.each(EDGE_Plantilla.config.default.default_page, function (key, value) {
            mostrar_pagina(value);
        });
    }

    EDGE_Plantilla.debug ? console.log("****************** ENDED RELOAD ********************") : false;
}

function pagina_actual(strPaginaActual) {
    EDGE_Plantilla.pagina_actual = strPaginaActual;
    var objEvt = {
        type: "EDGE_Recurso_PaginaOnShow",
        pagina: strPaginaActual,
        sym: EDGE_Plantilla.plantilla_sym
    };
    $("body").trigger(objEvt);
}