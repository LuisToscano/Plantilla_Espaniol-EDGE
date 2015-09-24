/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

EDGE_Plantilla.tool_tips = {
    "50_50": {
        sym: ["ayuda_1"]
    },
    "llamada": {
        sym: ["ayuda_2"],
        "sym_externo": ["llamada"]
    },
    "publico": {
        sym: ["ayuda_3"],
        "sym_externo": ["publico"]
    }
};

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

    $.each(EDGE_Plantilla.tool_tips, function (key, value) {
        var ele = buscar_sym(EDGE_Plantilla.plantilla_sym,
                value.sym, true);
        ele.show();
    });


    if (!isEmpty(extra) && !isEmpty(extra.response_pattern)) {
        
        $.each(extra.response_pattern, function (key) {
            buscar_sym(EDGE_Plantilla.plantilla_sym,
                    EDGE_Plantilla.tool_tips[key].sym, true).hide();
        });
    }
});

$("body").on("EDGE_Recurso_postSubmitApplied", function (evt) {
    console.log("R6 previous data", evt);
    var stage = $(evt.sym.getComposition().getStage().ele);

    stage.prop("ed_attempts", evt.attempts);

    send_to(evt.send_to, evt);

    if (evt.send_to === "try_again") {
        reset_tooltips();
    }
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