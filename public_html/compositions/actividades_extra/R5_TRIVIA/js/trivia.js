/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

EDGE_Plantilla.btn_inicio = ["R6_portada", "btn_inicio"];

$(document).on("EDGE_Plantilla_creationComplete", function (evt) {
    buscar_sym(EDGE_Plantilla.plantilla_sym,
            EDGE_Plantilla.btn_inicio, true).show();

});

$("body").on("EDGE_Recurso_sendPreviousData", function (evt) {
    console.log("R6 GET data", evt, EDGE_Plantilla.temp_scorm);
    var stage = $(evt.sym.getComposition().getStage().ele);
    stage.prop("ed_attempts", evt.attempts);

    if (evt.block) {
        var estado = EDGE_Plantilla.temp_scorm[stage.prop("ed_identify").recurso + "000"].estado;
        console.log("BLOQUEADA", estado);
        send_to(estado, evt);
    }
});

$("body").on("EDGE_Recurso_PaginaOnShow", function (evt) {
    var stage = $(evt.sym.getComposition().getStage().ele);
    stage.prop("ed_attempts", evt.attempts);
    var extra = EDGE_Plantilla.temp_scorm_suspendData[stage.prop("ed_identify").recurso];
    console.log("SUSPEND DATA R5_QQSM", extra);

    if (typeof startTimer === "function") {
        startTimer(evt.sym);
    }
});

$("body").on("EDGE_Recurso_postSubmitApplied", function (evt) {
    console.log("R6 previous data", evt);
    var stage = $(evt.sym.getComposition().getStage().ele);

    stage.prop("ed_attempts", evt.attempts);

    send_to(evt.send_to, evt);
});

$("body").on("EDGE_Recurso_promiseCreated", function (evt) {  
    if (typeof inicializarTimer === "function") {
        inicializarTimer(evt.sym);
    }
    var stage = $(evt.sym.getComposition().getStage().ele);
    stage.prop("ed_attempts", 0);
});

$("body").on("TimeOut", function (evt) {
    var stage = $(evt.sym.getComposition().getStage().ele);
    var identify = stage.prop("ed_identify");
    var result = check_every_answer();

    var timer = {};
    var timerObj = buscar_sym(evt.sym, stage.prop("timer"), true);
    timer.remaining_time = 0;
    timer.time_out = true;
    timer.current_state = timerObj.prop("alertState");

    var objEvt = {
        type: "EDGE_Plantilla_submitApplied",
        interactionType: "other",
        question: "R5",
        answer: EDGE_Plantilla.temp_scorm,
        position_which_is_right: result.respuestas,
        results: result.respuesta,
        attempts: stage.prop("ed_attempts"),
        attempts_limit: EDGE_Plantilla.config.default.limit_attemps,
        timer: timer,
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

function send_to(send_to, evt) {
    switch (send_to) {
        case "try_again":
            evt.sym.play("incorrecto");
            break;
        case "failed":
        case "incorrect":
            evt.sym.play("respuestas");
            break;
        case "correct":
            evt.sym.play("correcto");
            break;
        case "next":
            evt.sym.play();
            break;
    }
}

function reset_tooltips() {
    var evt = {
        type: "EDGE_Recurso_Tooltips",
        "show_tooltip": strTool,
        sym: EDGE_Plantilla.plantilla_sym,
        reset: true
    };

    var stage = $(evt.sym.getComposition().getStage().ele);
    var identify = stage.prop("ed_identify");

    if (isEmpty(EDGE_Plantilla.temp_scorm_suspendData[identify.recurso])) {
        EDGE_Plantilla.temp_scorm_suspendData[identify.recurso] = {};
    }

    var objExtra = {};

    objExtra[identify.recurso] = {
        "response_pattern": {}
    };

    merge_extra_scorm(objExtra);

    var objEvt = {
        type: "EDGE_Plantilla_ExtraSave",
        "extra_data": EDGE_Plantilla.temp_scorm_suspendData,
        identify: identify
    };

    send_evt_to(identify, objEvt, "working", true);
}

function tooltips(strTool) {
    var evt = {
        type: "EDGE_Recurso_Tooltips",
        "show_tooltip": strTool,
        sym: EDGE_Plantilla.plantilla_sym
    };
    var stage = $(evt.sym.getComposition().getStage().ele);

    var sym_modify = EDGE_Plantilla.config.paginas[EDGE_Plantilla.pagina_actual].stage;
    var response_pattern = {};

    response_pattern[evt.show_tooltip] = true;

    var identify = stage.prop("ed_identify");

    $.each(EDGE_Plantilla.tool_tips, function (key, value) {
        if (!isEmpty(value.sym_externo)) {
            var busc_sym = buscar_sym(sym_modify, value.sym_externo, true);
            if (key === evt.show_tooltip) {
                busc_sym.show();
            } else {
                busc_sym.hide();
            }
        }
        console.log(key);
    });

    buscar_sym(EDGE_Plantilla.plantilla_sym,
            EDGE_Plantilla.tool_tips[evt.show_tooltip].sym, true).hide();

    switch (evt.show_tooltip) {
        case "50_50":
            $('iframe', sym_modify.ele)[0].contentWindow.eliminarPicks(sym_modify, 2);
            break;
    }

    var extra = EDGE_Plantilla.temp_scorm_suspendData[identify.recurso];

    if (isEmpty(EDGE_Plantilla.temp_scorm_suspendData[identify.recurso])) {
        EDGE_Plantilla.temp_scorm_suspendData[identify.recurso] = {
            "response_pattern": {}
        };
        extra = EDGE_Plantilla.temp_scorm_suspendData[identify.recurso];
    }

    var objExtra = {};

    objExtra[identify.recurso] = {
        "response_pattern": response_pattern
    };

    if (!isEmpty(extra.response_pattern)) {
        objExtra[identify.recurso].response_pattern =
                merge_options(objExtra[identify.recurso].response_pattern, extra.response_pattern);
    }

    merge_extra_scorm(objExtra);

    var objEvt = {
        type: "EDGE_Plantilla_ExtraSave",
        "extra_data": EDGE_Plantilla.temp_scorm_suspendData,
        identify: identify
    };

    send_evt_to(identify, objEvt, "working", true);

}