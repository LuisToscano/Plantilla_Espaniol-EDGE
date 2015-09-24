$('body').on('EDGE_Recurso_promiseCreated', function(evt)
{
    ed_send_data(evt.sym);
});

function ed_send_data(sym)
{
    $.getJSON('config.json', function(json_content) {

        var stage = $(sym.getComposition().getStage().ele);
        stage.prop('ed_json_property_object', json_content);
        stage.prop('ed_user_attempts',json_content.attempts);

        $.each(json_content.palabras_a_escribir, function(pos, json_palabra) {

            var element = $("<input/>", {
                type: "text"
            });
            element.css(stage.prop('ed_json_property_object').css_config);
            element.css({
                width: sym.$('text_' + (pos + 1)).find('p').css("width"),
                height: sym.$('text_' + (pos + 1)).find('p').css("height")
            });

            sym.$('text_' + (pos + 1)).html(element);
        });

        parent.$(parent.document).trigger({
            type: 'EDGE_Plantilla_creationComplete',
            sym: sym,
            identify: stage.prop('ed_identify')
        });
        
    });
}

$('body').on("EDGE_Plantilla_creationComplete", function (evt) {

});

$('body').on('EDGE_Recurso_sendPreviousData EDGE_Recurso_postSubmitApplied',function(evt)
{
    var stage = $(evt.sym.getComposition().getStage().ele);
    var json_content = stage.prop('ed_json_property_object');

    if(typeof(evt.previous_data) != "undefined")
    {
        for (var i = evt.previous_data.length - 1; i >= 0; i--)
        {
            evt.sym.$('text_' + (i + 1)).find('input').val(""+evt.previous_data[i]);            
        };
    }

    if(evt.block)
    {
        //Debe bloquear la actividad
        stage.prop('ed_blocked',true);
        block_every_text(evt.sym);
    }

    if(typeof(evt.attempts) != "undefined")
    {
        stage.prop('ed_user_attempts',evt.attempts);
    }

    if (evt.reset)
    {
        for (var i = json_content.palabras_a_escribir.length - 1; i >= 0; i--)
        {  
            evt.sym.$('text_' + (i + 1)).find('input[type="text"]').val("");
        }
    }

    if(evt.show_answers)
    {
        for (var i = json_content.palabras_a_escribir.length - 1; i >= 0; i--)
        {  
            evt.sym.$('text_' + (i + 1)).find('input[type="text"]').val(""+json_content.palabras_a_escribir[i].ed_palabra[0]);
        }
    }

});

function block_every_text(sym)
{
    var json_stage = $(sym.getComposition().getStage().ele).prop('ed_json_property_object');
    for (var i = json_stage.palabras_a_escribir.length - 1; i >= 0; i--)
    {
        sym.$('text_'+(i+1)).find('input[type="text"]').prop('readonly','readonly');
        sym.$('text_'+(i+1)).find('input[type="text"]').attr('readonly','readonly');
    }
}

function EDGE_Recurso_Submit(sym)
{
    $('body').trigger({
        type: 'EDGE_Recurso_Submit',
        sym: sym
    });
}

$('body').on('EDGE_Recurso_Submit', function(evt)
{
    do_submit(evt.sym);
});

function do_submit(sym)
{
    var stage = $(sym.getComposition().getStage().ele);
    var json_content = stage.prop("ed_json_property_object");
    var retorno_datos = {};
    retorno_datos.attempts_to = stage.prop('ed_user_attempts');
    retorno_datos.user_answer = [];
    retorno_datos.position_which_is_right = [];
    retorno_datos.correct_answers = json_content.palabras_a_escribir;

    if (stage.prop('ed_blocked')) {
        return;
    }

    for (var i = json_content.palabras_a_escribir.length - 1; i >= 0; i--)
    {  
        var tempAns =  sym.$('text_' + (i + 1)).find('input[type="text"]').val();
        if(tempAns.trim().length > 0){
            retorno_datos.user_answer[i] = tempAns.trim();
        }
        
        for (var j = json_content.palabras_a_escribir[i].ed_palabra.length - 1; j >= 0; j--)
        {
            if (sym.$('text_' + (i + 1)).find('input[type="text"]').val() == json_content.palabras_a_escribir[i].ed_palabra[j])
            {
                //console.info("This is correct");
                retorno_datos.position_which_is_right[i] = true;
                retorno_datos.final_stage = "correct";
                break;
            }
            else
            {
                //console.info("This is INCORRECT");
                retorno_datos.position_which_is_right[i] = false;
                retorno_datos.final_stage = "incorrect";
            }
        };
    }
    retorno_datos.sym = sym; 
    retorno_datos.json = json_content;

    var ed_obj_evt = 
    {
        type: "EDGE_Plantilla_submitApplied",
        interactionType: "fill-in",
        json: json_content,
        answer: retorno_datos.user_answer,
        results: retorno_datos.final_stage,
        position_which_is_right: retorno_datos.position_which_is_right,
        attempts: retorno_datos.attempts_to,
        attempts_limit: json_content.attempts,
        sym: sym,
        identify: stage.prop("ed_identify")
    };
    
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
    console.log(ed_obj_evt);
    
    
    parent.$(parent.document).trigger(ed_obj_evt);
    return retorno_datos;
}