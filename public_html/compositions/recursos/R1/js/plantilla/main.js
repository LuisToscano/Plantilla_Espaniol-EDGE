/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global EC */

//<editor-fold defaultstate="collapsed" desc="Global values">
EDGE_Plantilla = {
    play_general_sound: true,
    plantilla_sym: null,
    debug: true,
    base_audio: new Audio('sounds/snap.mp3'),
    config: null,
    popup_on_show: null,
    recurso_on_show: null,
    basic_contenedor_name: ["contenedor_home"],
    basic_contenedor_popup: ["overlay", "container_overlay"],
    button_menutools: {
        fullscreen: "Stage_btn_full",
        creditos: "Stage_btn_creditos",
        ayuda: "Stage_btn_ayuda",
        audio: "Stage_btn_audio",
        info: "Stage_btn_info",
        accesibilidad: "Stage_btn_accesibilidad"
    },
    button_nav: {
        R1: "Stage_btnR_1",
        R2: "Stage_btnR_2",
        R3: "Stage_btnR_3",
        R4: "Stage_btnR_4",
        R5: "Stage_btnR_5",
        R6: "Stage_btnR_6",
        R7: "Stage_btnR_7"
    }

};
ion.sound({
    sounds: [
        {
            name: "snap"
        },
        {
            name: "button_click",
            volume: 0.2
        },
        {
            name: "staple_gun",
            volume: 0.3,
            preload: false
        }
    ],
    volume: 0.51,
    path: "sounds/",
    preload: true
});
//</editor-fold>

(function () {

    //<editor-fold defaultstate="collapsed" desc="generic functions">
    function getRemote() {
        return $.ajax({
            type: "GET",
            dataType: "json",
            url: "json/config.json",
            async: false
        });
    }

    function play_buttons(evt) {
        if (EDGE_Plantilla.play_general_sound) {
            var temp = EDGE_Plantilla.base_audio.cloneNode();
            temp.play("snap");
        }
    }

    function fullscreen() {
        if ($.fullscreen.isFullScreen()) {
            $.fullscreen.exit();
        } else {
            $("html").fullscreen();
        }
    }

    function handle_popup(boolShow) {
        var sym = EDGE_Plantilla.plantilla_sym;
        var copy = EDGE_Plantilla.basic_contenedor_popup;
        var temp_arr = [];

        $.each(copy, function (index, value) {
            temp_arr.push(value);
            var sym_element = buscar_sym(sym, temp_arr, true);

            EDGE_Plantilla.debug ? console.log("HANDLE", sym_element) : false;
            if (boolShow) {
                sym_element.show();
            } else {
                sym_element.hide();
            }
            EDGE_Plantilla.debug ? console.log("COPY contenedor pop", index) : false;
        });
    }

    function handle_style_nav(boolShow) {
        var sym = EDGE_Plantilla.plantilla_sym;

        $.each(EDGE_Plantilla.button_nav, function (key, value) {
            var sym_element;
            if (typeof value !== "string") {
                sym_element = buscar_sym(sym, value, true);
            } else {
                sym_element = sym.$(value);
            }

            if (boolShow) {
                sym_element.show();
            } else {
                sym_element.hide();
            }

        });
    }

    function buscar_sym(sym, arrSymSearch, boolJQUERY) {
        var temp = sym;
        $.each(arrSymSearch, function (index, value) {
            EDGE_Plantilla.debug ? console.log(temp) : false;

            if (!isEmpty(boolJQUERY) && index === arrSymSearch.length - 1) {
                temp = temp.$(value);
                //console.log("UNDEF",temp);
            } else {
                temp = temp.getSymbol(value);
            }

        });
        EDGE_Plantilla.debug ? console.log(temp, arrSymSearch, boolJQUERY) : false;
        return temp;
    }

    function mostrar_pagina(strPagina, objRetro) {
        //EDGE_Plantilla.config
        var sym = EDGE_Plantilla.plantilla_sym;
        EDGE_Plantilla.debug ? console.log(strPagina) : false;
        var sym_contenedor;

        if (!EDGE_Plantilla.config.paginas.hasOwnProperty(strPagina)) {
            console.error(strPagina, EDGE_Plantilla.config.paginas, "PAGINA No encontrado");
            return false;
        }
        var pagina = EDGE_Plantilla.config.paginas[strPagina];
        EDGE_Plantilla.debug ? console.log(pagina) : false;

        if (!isEmpty(pagina.symbols)) {
            if (!isEmpty(objRetro)) {
                $.each(objRetro, function (index, value) {
                    if (!pagina.symbols.hasOwnProperty(index)) {
                        delete pagina.symbols[index];
                    }
                });
            }
        } else {
            objRetro = null;
        }

        switch (pagina.type) {
            case "portada":
                handle_style_nav(false);
            case "popup_mini":
            case "popup_full":
                sym_contenedor = buscar_sym(sym, EDGE_Plantilla.basic_contenedor_popup);
                EDGE_Plantilla.debug ? console.log("SYM de carga POPUP", sym_contenedor) : false;
                EDGE_Plantilla.popup_on_show = pagina;
                handle_popup(true);
                break;
            default:
                sym_contenedor = buscar_sym(sym, EDGE_Plantilla.basic_contenedor_name);
                EDGE_Plantilla.recurso_on_show = pagina;
                break;
        }

        EDGE_Plantilla.debug ? console.log(strPagina, objRetro, pagina) : false;

        // Load Third Composition and inject data
        var promise = EC.loadComposition(EDGE_Plantilla.config.default.url_pages + pagina.url,
                sym_contenedor);

        promise.done(function (comp) {
            var stage = comp.getStage();
            if (!isEmpty(objRetro)) {
                $.each(objRetro, function (index, value) {
                    var arrSymSearch = pagina.symbols[index];
                    var symFound = buscar_sym(stage, arrSymSearch);
                    console.log(typeof value);
                    if (typeof value === "string") {
                        $(symFound.ele).find("p").text(value);
                    }
                });
            }
        });

    }

    $("body").on("EDGE_Container_loaded", function (evt) {
        EDGE_Plantilla.plantilla_sym = evt.sym;
        EDGE_Plantilla.config = getRemote().responseJSON;
        document.body.style.background = "url(http://www.globalasia.com/wp-content/uploads/2014/03/malaga.jpg) 50% 50% / cover no-repeat gray";
        $("body").css({
            "background-size": "cover",
            "background-repeat": "no-repeat",
            "background-position": "center center"
        });
        console.log($("html"));

        //EDGE_Plantilla.debug ? console.log(EDGE_Plantilla.config) : false;
    });

    $(document).on("EDGE_Plantilla_ClosePopup", function (evt) {
        play_buttons();
        handle_popup(false);
        EDGE_Plantilla.debug ? console.log("close") : false;
        EDGE_Plantilla.popup_on_show = null;
    });
    //</editor-fold>

    //<editor-fold defaultstate="collapsed" desc="Controles de la plantilla">
    $("body").on("EDGE_Self_Plantilla_ClickMenuTools", function (evt) {
        EDGE_Plantilla.debug ? console.log(evt) : false;
        EDGE_Plantilla.debug ? console.log(evt.evt.currentTarget.id) : false;
        switch (evt.evt.currentTarget.id) {
            case EDGE_Plantilla.button_menutools.fullscreen:
                fullscreen();
                break;
            case EDGE_Plantilla.button_menutools.creditos:
                mostrar_pagina("creditos");
                break;
            case EDGE_Plantilla.button_menutools.ayuda:
                mostrar_pagina("ayudas");
                break;
            case EDGE_Plantilla.button_menutools.audio:
                EDGE_Plantilla.play_general_sound = !EDGE_Plantilla.play_general_sound;
                break;
            case EDGE_Plantilla.button_menutools.info:
                mostrar_pagina("info");
                break;
            case EDGE_Plantilla.button_menutools.accesibilidad:
                mostrar_pagina("muy_bien", {mensaje: "¡Esto está BIEN!", titulo: "Excelente"});
                break;
        }

        play_buttons(evt);
    });

    $("body").on("EDGE_Self_Plantilla_ClickNav", function (evt) {
        EDGE_Plantilla.debug ? console.log(evt) : false;
        EDGE_Plantilla.debug ? console.log(evt.evt.currentTarget.id) : false;
        switch (evt.evt.currentTarget.id) {
            case EDGE_Plantilla.button_nav.R1:
                mostrar_pagina("1");
                break;
            case EDGE_Plantilla.button_nav.R2:
                mostrar_pagina("2");
                break;
            case EDGE_Plantilla.button_nav.R3:
                mostrar_pagina("3");
                break;
            case EDGE_Plantilla.button_nav.R4:
                mostrar_pagina("4");
                break;
            case EDGE_Plantilla.button_nav.R5:
                mostrar_pagina("portada");
                break;
            case EDGE_Plantilla.button_nav.R6:
                break;
            case EDGE_Plantilla.button_nav.R7:
                break;
            default:
                break;
        }
        play_buttons(evt);
    });
    //</editor-fold>

    //<editor-fold defaultstate="collapsed" desc="RECURSOS Y POPUPS">

    /* El POPUP envía un evento a la plantilla informando que ya está creado 
     * y está listo para recibir su estado inicial
     */
    $(document).on("EDGE_Plantilla_CreationCompletePop", function (evt) {
        EDGE_Plantilla.debug ? console.log("listen") : false;
        var popup = EDGE_Plantilla.popup_on_show;
        var sym = EDGE_Plantilla.plantilla_sym;

        var sym_contenedor;

        switch (popup.type) {
            case "portada":
            case "popup_mini":
            case "popup_full":
                sym_contenedor = buscar_sym(sym, EDGE_Plantilla.basic_contenedor_popup);
                break;
            default:
                console.error(popup.type, "POPUP tipo incorrecto");
                return false;
                break;
        }

        EDGE_Plantilla.debug ? console.log(sym_contenedor) : false;

        $('iframe', sym_contenedor.ele)[0].contentWindow.$('body').trigger({
            type: 'EDGE_PopUp_CreationResponse',
            sym: evt.sym,
            identify: EDGE_Plantilla.popup_on_show
        });
    });
    //</editor-fold>

    //<editor-fold defaultstate="collapsed" desc="Actividades">

    /* El recurso envía un evento a la plantilla informando que ya está creado 
     * y está listo para recibir su estado inicial
     */
    $(document).on("EDGE_Plantilla_creationComplete", function (evt) {
        var temp_pagina = EDGE_Plantilla.recurso_on_show;

        switch (EDGE_Plantilla.recurso_on_show.actividad) {
            case "drag_drop":
                drag_drop_toscano_created(evt);
                break;
            case "drag_drop_many":
                drag_drop_toscano_created(evt);
                break;
            case "pick_many":
                pick_many_toscano_created(evt);
                break;
        }
    });
    function drag_drop_toscano_created(evt) {
        var sym = EDGE_Plantilla.plantilla_sym;
        var sym_contenedor = buscar_sym(sym, EDGE_Plantilla.basic_contenedor_name);

        EDGE_Plantilla.debug ? console.log(evt) : false;
        EDGE_Plantilla.debug ? console.log($('iframe', sym_contenedor.ele)[0], sym_contenedor) : false;

        // previous_data debe ser interpretado del scorm
        $('iframe', sym_contenedor.ele)[0].contentWindow.$('body').trigger({
            type: "EDGE_Recurso_sendPreviousData",
            block: false,
            previous_data: {
                "DROP_1_(Un cuadro azul)": ["DRAG_2_(bola verde)"],
                "DROP_2_(Un cuadro rojo)": ["DRAG_1_(bola rosada)"]
            },
            attempts: 0,
            sym: evt.sym,
            identify: EDGE_Plantilla.recurso_on_show
        });
    }

    function pick_many_toscano_created(evt) {
        var sym = EDGE_Plantilla.plantilla_sym;
        var sym_contenedor = buscar_sym(sym, EDGE_Plantilla.basic_contenedor_name);

        EDGE_Plantilla.debug ? console.log(evt) : false;
        EDGE_Plantilla.debug ? console.log($('iframe', sym_contenedor.ele)[0], sym_contenedor) : false;

        $('iframe', sym_contenedor.ele)[0].contentWindow.$('body').trigger({
            type: "EDGE_Recurso_sendPreviousData",
            block: false,
            previous_data: {"selected": []},
            attempts: 0,
            sym: evt.sym
        });
    }

    /* El recurso ha enviado una petición de Submit, la plantilla debe decidir
     * que hacer con este request y enviarle una respuesta para que reaccione
     */
    $(document).on("EDGE_Plantilla_submitApplied", function (evt) {
        var temp_pagina = EDGE_Plantilla.recurso_on_show;

        switch (EDGE_Plantilla.recurso_on_show.actividad) {
            case "drag_drop":
                drag_drop_toscano_submit(evt);
                break;
            case "drag_drop_many":
                drag_drop_toscano_submit(evt);
                break;
            case "pick_many":
                pick_many_toscano_submit(evt);
                break;
        }
    });
    function drag_drop_toscano_submit(evt) {
        var sym = EDGE_Plantilla.plantilla_sym;
        var sym_contenedor = buscar_sym(sym, EDGE_Plantilla.basic_contenedor_name);
        var is_empty = false;
        EDGE_Plantilla.debug ? console.log(evt) : false;

        if (evt.attempts >= evt.attempts_limit) {
            return false;
        }

        $.each(evt.answer, function (index, value) {
            //console.log(isEmpty(value));
            if (isEmpty(value)) {
                mostrar_pagina("med_estrella");
                is_empty = true;
                return false;
            }
        });

        if (is_empty) {
            return false;
        }

        var objEvt = {type: "EDGE_Recurso_postSubmitApplied", sym: evt.sym};

        if (evt.results !== "incorrect") {
            mostrar_pagina("muy_bien", {mensaje: "Tu drag and drop ha sido respondido correctamente"});

            objEvt = merge_options(objEvt, {
                block: true,
                show_answers: false,
                attempts: evt.attempts
            });

        } else {
            var this_block = false;
            var this_show_answers = false;

            var intentos = evt.attempts + 1;
            if (intentos >= evt.attempts_limit) {
                this_block = true;
                this_show_answers = true;
                mostrar_pagina("bronce");
            } else {
                mostrar_pagina("plata");
            }

            objEvt = merge_options(objEvt, {
                block: this_block,
                show_answers: this_show_answers,
                attempts: intentos
            });
        }

        $('iframe', sym_contenedor.ele)[0].contentWindow.$('body').trigger(objEvt);
    }

    function pick_many_toscano_submit(evt) {
        var sym = EDGE_Plantilla.plantilla_sym;
        var sym_contenedor = buscar_sym(sym, EDGE_Plantilla.basic_contenedor_name);
        var is_empty = false;
        EDGE_Plantilla.debug ? console.log(evt) : false;

        if (evt.attempts >= evt.attempts_limit) {
            return false;
        }

        $.each(evt.answer, function (index, value) {
            //console.log(isEmpty(value));
            if (isEmpty(value)) {
                mostrar_pagina("med_estrella");
                is_empty = true;
                return false;
            }
        });

        if (is_empty) {
            return false;
        }

        //console.log(data);

        var this_block = false;
        var this_show_answers = false;

        var intentos = evt.attempts + 1;

        if (intentos >= evt.attempts_limit) {
            this_block = true;
            this_show_answers = true;
        }

        var objEvt = {
            type: "EDGE_Recurso_postSubmitApplied",
            block: this_block,
            show_answers: this_show_answers,
            attempts: intentos,
            sym: evt.sym
        };

        $('iframe', sym_contenedor.ele)[0].contentWindow.$('body').trigger(objEvt);
    }
    //</editor-fold>


}());