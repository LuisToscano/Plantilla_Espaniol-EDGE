$("body").on("EDGE_Recurso_postSubmitApplied", function (data) {
    var stage = $(data.sym.getComposition().getStage().ele);
    
    if (data.show_answers) {
        mostrarRespuestasSopaDeLetras(data.sym, data.response_pattern);
    }

    if (data.block) {
        stage.prop("blocked", true);
        if (stage.prop("usa_timer")) {
            stopTimer(data.sym);
        }
    } else {
        if (stage.prop("usa_timer")) {
            if (data.timer.reset_timer) {
                resetTimer(data.sym);
                data.sym.$("SOPA").empty();
                inicializarSopaDeLetras(data.sym);
                data.sym.$("btnTimer").show();
                data.sym.$("inicio_sopa").show();
                data.sym.getSymbol("inicio_sopa").play(0);
            }
        }
    }

    stage.prop("intentos_previos", data.attempts);
});

$("body").on("EDGE_Recurso_sendPreviousData", function (data) {
    var stage = $(data.sym.getComposition().getStage().ele);
    inicializarSopaDeLetras(data.sym);
    
    if(data.show_answers && !isEmpty(data.response_pattern)){
        data.sym.$("inicio_sopa").hide();
        data.sym.$("btnTimer").hide();
        mostrarRespuestasSopaDeLetras(data.sym, data.response_pattern);
    }

    if (data.block) {
        stage.prop("blocked", true);
        if (stage.prop("usa_timer")) {
            setHTMLTimer(data.timer.remaining_time, data.sym);
            cambiarEstadoTimer(data.sym, data.timer.current_state);
        }
    }
    stage.prop("intentos_previos", data.attempts);
});

//******************************************************************************

function inicializarSopaDeLetras(sym)
{
	var cssLink = $("<link rel='stylesheet' type='text/css' href='css/sopa_main.css'>");
     $("head").append(cssLink); 
	
    $el = sym.$("SOPA");
    $t = $("<table>").addClass("sopaTable");
    var stage = $(sym.getComposition().getStage().ele);
    stage.prop("interaction_type", "other");
    stage.prop("intentos_previos", 0);
    stage.prop("blocked", false);
    stage.prop("posicionRespuestas", []);
    stage.prop("respuestas", []);
    stage.prop("usa_timer", typeof startTimer == 'function');

    var defaults = {
        complejo: 11, vertical: 'S', onWin: "",
        palabras: []
    };

    $.getJSON("config.json", function (data) {
        $.each(data, function (key, val) {
            stage.prop(key, val);
        });
    }).done(function () {
        var wordsArray = [];
        $.each(stage.prop("palabras"), function (key, val) {
            var wordObj = {name: val.toUpperCase()};
            wordsArray.push(wordObj);
        });
        defaults.palabras = wordsArray;
        initialize(defaults, sym);
    });
}

//******************************************************************************

function initialize(defaults, sym) {
    var aciertos = 0;
    var activarhover = false;
    var miradorpalabras = "";
    var miserrores = 0;
    var palabrasencontradas = new Array();

    var letras =
            ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    this.init = function (sym) {
        var contadorpalabras = 0;
        var comienzoy = Math.floor((Math.random() * (defaults.complejo + 2)) - 1);
        var comienzoyar = new Array();
        for (var i = 0; i < defaults.palabras.length; i++) {
            while (true) {
                var cc = Math.floor((Math.random() * (defaults.complejo + 2)) - 1);
                var existe = false
                for (var j = 0; j < defaults.palabras.length; j++) {
                    if (cc == -1) {
                        cc = 0;
                    }
                    if (comienzoyar[j] == cc) {
                        existe = true;
                    }
                }
                if (!existe) {
                    comienzoyar[i] = cc;
                    break;
                }

            }
        }
        comienzoyar = comienzoyar.sort(function (a, b) {
            return a - b
        });
        var totalvertical = defaults.palabras.length / 2;
        if (totalvertical > 2) {
            totalvertical = totalvertical - 1;
        }

        for (var j = 0; j < defaults.complejo + 1; j++) {
            $header = $("<tr>");

            var contadorletras = 0;
            var comienzox = Math.floor((Math.random() * (defaults.complejo + 2)) - 1);
            var enquepos = 0;

            if (j == comienzoyar[contadorpalabras]) {
                enquepos = (defaults.complejo + 1 - defaults.palabras[contadorpalabras].name.length);
                enquepos = Math.floor((Math.random() * enquepos));
            }


            if (enquepos == -1) {
                enquepos = 0;
            }

            for (var i = 0; i < defaults.complejo + 1; i++) {
                var pos = Math.floor((Math.random() * (defaults.complejo + 3)) - 1);
                var letraelegidapos = Math.floor(Math.random() * 14);

                if (pos == -1)
                {
                    pos = 0;
                }

                if (comienzoy == -1) {
                    comienzoy = 0;
                }
                if (comienzox == -1) {
                    comienzox = 0;
                }

                var $g = this;

                if (comienzoyar[contadorpalabras] == j) {

                    //Aca pongo las palabras que vienen de la DB.
                    if (enquepos == i) {
                        if (contadorletras < defaults.palabras[contadorpalabras].name.length) {
                            var element = $("<td/>");
                            var letraDiv = jQuery('<div/>', {class: "letraContainer"});
                            var letraSpan = jQuery('<span/>', {});
                            letraSpan.html(defaults.palabras[contadorpalabras].name.charAt(contadorletras));
                            letraDiv.html(letraSpan);
                            element.attr("nocruzar", "S").html(letraDiv).appendTo($header).prop("esRespuesta", true).attr("pos", i.toString() + ";" + j.toString()).css("cursor", "pointer").hover(function () {
                                if (activarhover) {
                                    $(this).css("color", "#006370");
                                }
                            }
                            ).click(function () {
                                $g.click(this, sym);
                            }).addClass("noes").css("font-weight");

                            contadorletras++;
                            enquepos++;
                        }
                        else {
                            var letraDiv = jQuery('<div/>', {class: "letraContainer"});
                            var letraSpan = jQuery('<span/>', {});
                            letraSpan.html(letras[letraelegidapos]);
                            letraDiv.html(letraSpan);
                            $("<td>").attr("nocruzar", "F").html(letraDiv).appendTo($header).prop("esRespuesta", false).attr("pos", i.toString() + ";" + j.toString()).css("cursor", "pointer").hover(function () {
                                if (activarhover) {
                                    $(this).css("color", "#006370");
                                }
                            }
                            ).click(function () {
                                $g.click(this, sym);
                            }).addClass("noes");
                        }
                    }
                    else {
                        var letraDiv = jQuery('<div/>', {class: "letraContainer"});
                        var letraSpan = jQuery('<span/>', {});
                        letraSpan.html(letras[letraelegidapos]);
                        letraDiv.html(letraSpan);
                        $("<td>").attr("nocruzar", "F").html(letraDiv).appendTo($header).prop("esRespuesta", false).attr("pos", i.toString() + ";" + j.toString()).css("cursor", "pointer").hover(function () {
                            if (activarhover) {
                                $(this).css("color", "#006370")
                            }
                        }
                        ).click(function () {
                            $g.click(this, sym);
                        }).addClass("noes");
                    }
                }
                else {
                    var letraDiv = jQuery('<div/>', {class: "letraContainer"});
                    var letraSpan = jQuery('<span/>', {});
                    letraSpan.html(letras[letraelegidapos]);
                    letraDiv.html(letraSpan);
                    $("<td>").attr("nocruzar", "F").html(letraDiv).appendTo($header).prop("esRespuesta", false).attr("pos", i.toString() + ";" + j.toString()).css("cursor", "pointer").hover(function () {
                        if (activarhover) {
                            $(this).css("color", "#006370")
                        }
                    }
                    ).click(function () {
                        $g.click(this, sym);
                    }).addClass("noes");
                }
            }

            $t.append($header);
            $el.append($t);

            if (j == comienzoyar[contadorpalabras]) {
                if (contadorpalabras < totalvertical) {
                    contadorpalabras++;
                }
            }
        }

        var posy = Math.floor((Math.random() * (defaults.complejo + 2)) - 1);
        var posx = Math.floor((Math.random() * (defaults.complejo + 2)) - 1);
        var total = 0;

        if (posy == -1)
        {
            posy = 0;
        }
        if (posx == -1)
        {
            posx = 0;
        }

        var caminadorvertical = contadorpalabras + 1;
        var cantidadvueltas = 0;
        for (var v = caminadorvertical; v < defaults.palabras.length; v++) {
            var pospalabra = 0;
            var posyv = 0;
            while (true) {
                cantidadvueltas++;
                if (cantidadvueltas == 100)
                {
                    return;
                }
                if ((posy + defaults.palabras[v].name.length) < defaults.complejo) {
                    posyv = posy;
                    for (var i = 0; i < defaults.palabras[v].name.length; i++) {

                        if ($("td[pos='" + posx.toString() + ";" + posyv.toString() + "']").attr("nocruzar") == "S") {
                            total++;
                            break;
                        }
                        posyv++;
                    }

                }
                else {
                    total = 1;
                }

                if (total > 0) {
                    posy = Math.floor((Math.random() * (defaults.complejo + 2)) - 1);
                    posx = Math.floor((Math.random() * (defaults.complejo + 2)) - 1);
                    if (posy == -1)
                    {
                        posy = 0;
                    }
                    if (posx == -1)
                    {
                        posx = 0;
                    }
                }
                else {
                    break;
                }
                total = 0;
            }

            for (var i = 0; i < defaults.palabras[v].name.length; i++) {
                var letraDiv = jQuery('<div/>', {class: "letraContainer"});
                var letraSpan = jQuery('<span/>', {});
                letraSpan.html(defaults.palabras[v].name.charAt(i));
                letraDiv.html(letraSpan);
                $("td[pos='" + posx.toString() + ";" + posy.toString() + "']").html(letraDiv).prop("esRespuesta", true).attr("nocruzar", "S").css("font-weight");
                posy++;
            }
        }


    };

    var cantidadclicks = 0;
    var posicionx = 0;
    var posiciony = 0;
    var posicionx1 = 0;
    var posiciony1 = 0;

    this.click = function (td, sym) {
        var stage = $(sym.getComposition().getStage().ele);
        if (!stage.prop("blocked")) {
            var $g = this;
            cantidadclicks += 1;
            if(!$(td).find("div").hasClass("found")){
                $(td).find("span").addClass("selected");
            
            if (cantidadclicks == 1) {
                posicionx = $(td).attr("pos").split(";")[0];
                posiciony = $(td).attr("pos").split(";")[1];
                activarhover = false; //hay que cambiar aca
            }
            else {
                posicionx1 = $(td).attr("pos").split(";")[0];
                posiciony1 = $(td).attr("pos").split(";")[1];
                cantidadclicks = 0;
                activarhover = false;
                var selecion = "";
                var y = posiciony;
                var x = posicionx;
                var i = 1;
                var total = posicionx1 - posicionx;

                if (total < 0) {
                    $(td).find("span").removeClass("selected");
                    $("td[pos='" + posicionx.toString() + ";" + posiciony.toString() + "']").css("color", "");
                    $(".noes").find("span").removeClass("selected");
                    return;
                }

                if (posiciony != posiciony1) {
                    total = posiciony1 - posiciony
                    if (total < 0) {
                        $(td).find("span").removeClass("selected");
                        $("td[pos='" + posicionx.toString() + ";" + posiciony1.toString() + "']").find("span").removeClass("selected");
                        ;
                        $(".noes").find("span").removeClass("selected");
                        return;
                    }

                    while (true) {
                        var $tdlocal = $("td[pos='" + x.toString() + ";" + y.toString() + "']");
                        selecion += $tdlocal.find("span").html();

                        $tdlocal.find("div").addClass("found");
                        $tdlocal.find("span").removeClass("selected");
                        $tdlocal.removeClass("noes");

                        if (i == total + 1) {
                            break;
                        }

                        y++;
                        i++;
                    }
                }
                else {

                    while (true) {
                        var $tdlocal = $("td[pos='" + x.toString() + ";" + y.toString() + "']");
                        selecion += $tdlocal.find("span").html();

                        $tdlocal.find("div").addClass("found");
                        $tdlocal.find("span").removeClass("selected");
                        $tdlocal.removeClass("noes");

                        if (i == total + 1) {
                            break;
                        }

                        x++;
                        i++;
                    }
                }

                var existe = false;

                $.each(defaults.palabras, function () {
                    if (selecion == this.name) {
                        existe = true;
                        var verificar = false;
                        if (palabrasencontradas == 0) {
                            palabrasencontradas[0] = this.name;
                            aciertos += 1;
                        }
                        else {
                            for (var i = 0; i < palabrasencontradas.length; i++) {
                                if (palabrasencontradas[i] == this.name) {
                                    verificar = true;
                                }
                            }
                            if (!verificar) {
                                palabrasencontradas[palabrasencontradas.length] = this.name;
                                aciertos += 1;
                            }
                        }
                        stage.prop("respuestas").push(selecion);
                        //alert("Encontraste la palabra: " + selecion);
                        if (!verificar) {
                            miradorpalabras += selecion + ", ";
                        }

                        $("td[class='']").addClass("noborrar");
                        if (aciertos == defaults.palabras.length) {
                            //alert("Encontraste todas las palabras");
                            mostrarRespuestasSopaDeLetras(sym, stage.prop("posicionRespuestas"));
                            sopaDeLetrasSubmit(sym);
                        }
                    }
                });

                if (!existe) {
                    miserrores += 1;
                    y = posiciony;
                    x = posicionx;
                    i = 1;
                    total = posicionx1 - posicionx;

                    if (posiciony != posiciony1) {
                        total = posiciony1 - posiciony
                        while (true) {
                            var $tdlocal = $("td[pos='" + x.toString() + ";" + y.toString() + "']");
                            if (!$tdlocal.hasClass("noborrar")) {
                                selecion += $tdlocal.html();
                                $tdlocal.addClass("noes");
                            }
                            if (i == total + 1) {
                                break;
                            }
                            y++;
                            i++;
                        }
                    }
                    else {

                        while (true) {
                            var $tdlocal = $("td[pos='" + x.toString() + ";" + y.toString() + "']");
                            if (!$tdlocal.hasClass("noborrar")) {
                                selecion += $tdlocal.html();
                                $tdlocal.addClass("noes");
                            }
                            if (i == total + 1) {
                                break;
                            }
                            x++;
                            i++;
                        }
                    }

                    $(".noes").find("div").removeClass("found");
                    $(".noes").find("span").removeClass("selected");
                }
            }
        }
    }
    };
    this.init(sym);
    var stage = $(sym.getComposition().getStage().ele);
    var sopaObj = sym.$("SOPA");
    var tdObj = $("td");
    $(sopaObj.find(tdObj)).each(function () {
        if ($(this).prop("esRespuesta")) {
            var respLetra = {letra: $(this).find("span").html(), posicion: $(this).attr("pos")};
            stage.prop("posicionRespuestas").push(respLetra);
        }
    });
}

//******************************************************************************

function sopaDeLetrasSubmit(sym) {
    var stage = $(sym.getComposition().getStage().ele);

    var timer = {};
    if (stage.prop("usa_timer")) {
        var timerObj = buscar_sym(sym, stage.prop("timer"), true);
        timer.remaining_time = timerObj.prop("segundos_restantes");
        timer.current_state = timerObj.prop("alertState");
    } else {
        //timer.timerObj = null;
        timer.remaining_time = null;
        timer.current_state = null;
    }
    enviarEventoInteraccion(stage.prop("interaction_type"), stage.prop("pregunta"), stage.prop("respuestas"), stage.prop("posicionRespuestas"), "correct", stage.prop("intentos_previos"), stage.prop("num_intentos"), timer, sym);
}

//******************************************************************************

function mostrarRespuestasSopaDeLetras(sym, posicionRespuestas) {

    $("td").find("div").addClass("disabled");
    $.each(posicionRespuestas, function (key, val) {
        $("[pos='"+val.posicion+"']").find("div").removeClass("found");
        $("[pos='"+val.posicion+"']").find("div").removeClass("disabled");
        $("[pos='"+val.posicion+"']").find("div").addClass("answer");
        $("[pos='"+val.posicion+"']").find("span").html(val.letra);
    });
}

//******************************************************************************

function inicializar(sym) {
    inicializarSopaDeLetras(sym);
}