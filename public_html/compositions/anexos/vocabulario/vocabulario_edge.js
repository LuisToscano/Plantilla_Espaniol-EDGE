/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'source-sans-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>',
            'sena_icon': '<link rel=\"stylesheet\" href=\"css/stylesheet.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\" />'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"audioUtilities.js",
            js+"jquery-1.11.3.min.js",
            js+"zoomUtilities.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'contvoca',
                            type: 'rect',
                            rect: ['193px', '207px', '1550px', '769px', 'auto', 'auto'],
                            overflow: 'scroll',
                            borderRadius: ["0px", "0px", "15px 15px", "15px 15px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            c: [
                            {
                                id: 'texto_1_empuja_cont_1',
                                type: 'text',
                                rect: ['50px', '21px', '1448px', '92px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 30px;\">Tenga en cuenta las siguientes palabras, así podrá hablar del lenguaje de manera apropiada y formal.​</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 30px;\">​</span><span style=\"font-style: italic; font-size: 30px;\">Instrucción: lea las siguientes palabras y sus definiciones.</span></p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "40px", "", "none"]
                            },
                            {
                                id: 'cont_1',
                                type: 'rect',
                                rect: ['36px', '111px', '1466px', '975px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0)"],
                                stroke: [0,"rgba(0, 0, 0, 0)","none"],
                                c: [
                                {
                                    id: 'audio_1',
                                    symbolName: 'audio_1',
                                    type: 'rect',
                                    rect: ['14px', '40px', '70', '40', 'auto', 'auto'],
                                    cursor: 'pointer'
                                },
                                {
                                    id: 'audio_2',
                                    symbolName: 'audio_2',
                                    type: 'rect',
                                    rect: ['788px', '40px', 'undefined', 'undefined', 'auto', 'auto'],
                                    cursor: 'pointer'
                                },
                                {
                                    id: 'texto_2',
                                    type: 'text',
                                    rect: ['109px', '40px', '579px', '38px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​abecedario <span style=\"font-style: italic; font-weight: 400;\">(nombre)</span></p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "600", "none", "normal", "break-word", ""],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'texto_4',
                                    type: 'text',
                                    rect: ['883px', '40px', '580px', '38px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 600;\">minúscula</span>&nbsp;<span style=\"font-style: italic;\">(nombre)</span></p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'texto_3',
                                    type: 'text',
                                    rect: ['14px', '100px', '674px', '117px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​Conjunto de letras del español que permiten componer las palabras en el  sistema de la escritura.</p><p style=\"margin: 0px;\"><span style=\"color: rgb(79, 45, 110); font-style: italic;\">Ejemplo:&nbsp;el abecedario del español tiene 27 letras.</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(79, 45, 110); font-style: italic;\"> </span></p><p style=\"margin: 0px;\"><span style=\"font-style: italic; color: rgb(79, 45, 110);\"></span></p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'texto_5',
                                    type: 'text',
                                    rect: ['788px', '100px', '675px', '77px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​Tipo de letra de menor tamaño que la mayúscula. ​</p><p style=\"margin: 0px;\"><span style=\"color: rgb(79, 45, 110); font-style: italic;\">Ejemplo:&nbsp;las vocales en minúscula son a, e, i, o, u.</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(79, 45, 110); font-style: italic;\"> </span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(79, 45, 110); font-style: italic;\"></span></p><p style=\"margin: 0px;\"><span style=\"font-style: italic; color: rgb(79, 45, 110);\"></span></p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'audio_3',
                                    symbolName: 'audio_3',
                                    type: 'rect',
                                    rect: ['14px', '339px', 'undefined', 'undefined', 'auto', 'auto'],
                                    cursor: 'pointer'
                                },
                                {
                                    id: 'audio_4',
                                    symbolName: 'audio_4',
                                    type: 'rect',
                                    rect: ['788px', '339px', 'undefined', 'undefined', 'auto', 'auto'],
                                    cursor: 'pointer'
                                },
                                {
                                    id: 'texto_6',
                                    type: 'text',
                                    rect: ['109px', '339px', '579px', '38px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​consonante <span style=\"font-style: italic; font-weight: 400;\">(nombre)​</span></p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "600", "none", "normal", "break-word", ""],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'texto_8',
                                    type: 'text',
                                    rect: ['883px', '339px', '580px', '38px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 600;\">letra: </span><span style=\"font-style: italic;\">(nombre)</span></p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'texto_7',
                                    type: 'text',
                                    rect: ['14px', '399px', '674px', '160px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​Sonido que resulta de la interrupción momentánea del aire en algún punto del canal vocal.&nbsp;</p><p style=\"margin: 0px;\"><span style=\"color: rgb(73, 45, 99); font-style: italic;\">Ejemplo:p, b, t, d son consonantes.</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(79, 45, 110); font-style: italic;\"> </span></p><p style=\"margin: 0px;\"><span style=\"font-style: italic; color: rgb(79, 45, 110);\"></span></p><p style=\"margin: 0px;\"><span style=\"font-style: italic; color: rgb(79, 45, 110);\"></span></p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'texto_9',
                                    type: 'text',
                                    rect: ['788px', '399px', '675px', '117px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​Cada uno de los signos gráficos que componen el alfabeto de un lengua.</p><p style=\"margin: 0px;\"><span style=\"color: rgb(79, 45, 110); font-style: italic;\">Ejemplo: la palabra ‘sol’ tiene tres letras.</span></p><p style=\"margin:0px\">​</p><p style=\"margin: 0px;\"><span style=\"color: rgb(79, 45, 110); font-style: italic;\"></span></p><p style=\"margin: 0px;\"><span style=\"font-style: italic; color: rgb(79, 45, 110);\"></span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(79, 45, 110); font-style: italic;\"></span></p><p style=\"margin: 0px;\"><span style=\"font-style: italic; color: rgb(79, 45, 110);\"></span></p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'audio_5',
                                    symbolName: 'audio_5',
                                    type: 'rect',
                                    rect: ['14px', '749px', 'undefined', 'undefined', 'auto', 'auto'],
                                    cursor: 'pointer'
                                },
                                {
                                    id: 'audio_6',
                                    symbolName: 'audio_6',
                                    type: 'rect',
                                    rect: ['788px', '749px', 'undefined', 'undefined', 'auto', 'auto'],
                                    cursor: 'pointer'
                                },
                                {
                                    id: 'texto_10',
                                    type: 'text',
                                    rect: ['109px', '748px', '579px', '38px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 600;\">mayúscula</span>&nbsp;(nombre)</p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'texto_12',
                                    type: 'text',
                                    rect: ['883px', '748px', '580px', '38px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 600;\">vocal:</span><span style=\"font-style: italic;\"> (nombre)</span></p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'texto_11',
                                    type: 'text',
                                    rect: ['14px', '808px', '674px', '117px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​Tipo de letra de mayor tamaño que la minúscula. Se usa como inicial en nombre propios.​</p><p style=\"margin: 0px;\"><span style=\"font-style: italic; color: rgb(79, 45, 110);\">Ejemplo:</span><span style=\"font-style: italic; color: rgb(79, 45, 110); font-weight: 700;\"> S</span><span style=\"font-style: italic; color: rgb(79, 45, 110);\">ara, </span><span style=\"font-style: italic; color: rgb(79, 45, 110); font-weight: 700;\">C</span><span style=\"font-style: italic; color: rgb(79, 45, 110);\">olombia, </span><span style=\"font-style: italic; color: rgb(79, 45, 110); font-weight: 700;\">R</span><span style=\"font-style: italic; color: rgb(79, 45, 110);\">odríguez.</span></p><p style=\"margin: 0px;\"><span style=\"font-style: italic; color: rgb(79, 45, 110);\"> </span></p><p style=\"margin: 0px;\"><span style=\"font-style: italic; color: rgb(79, 45, 110);\"></span></p><p style=\"margin: 0px;\"><span style=\"font-style: italic; color: rgb(79, 45, 110);\"></span></p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'texto_13',
                                    type: 'text',
                                    rect: ['788px', '808px', '675px', '117px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px;\">​Sonido del lenguaje humano en cuya emisión el aire exhalado no encuentra obstáculos.&nbsp;</p><p style=\"margin: 0px;\"><span style=\"color: rgb(79, 45, 110); font-style: italic;\">Ejemplo: a, e, i, o, u son las vocales del español.</span></p><p style=\"margin: 0px;\"><span style=\"font-style: italic; color: rgb(79, 45, 110);\"></span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(79, 45, 110); font-style: italic;\"></span></p><p style=\"margin: 0px;\"><span style=\"font-style: italic; color: rgb(79, 45, 110);\"></span></p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            }]
                        },
                        {
                            id: 'banner',
                            type: 'rect',
                            rect: ['193px', '70px', '1550px', '137px', 'auto', 'auto'],
                            borderRadius: ["15px 15px", "15px 15px", "0px 0px", "0px 0px"],
                            fill: ["rgba(255,255,255,1)",[270,[['rgba(62,35,86,1.00)',0],['rgba(76,44,109,1.00)',100]]]],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"]
                        },
                        {
                            id: 'texto_voc',
                            type: 'text',
                            rect: ['343px', '92px', '1280px', '95px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Vocabulario</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [70, "px"], "rgba(255,255,255,1)", "600", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'cerrar_voca',
                            symbolName: 'cerrar_voca',
                            type: 'rect',
                            rect: ['1636px', '101px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'pie',
                            type: 'rect',
                            rect: ['193px', '959px', '1550px', '30px', 'auto', 'auto'],
                            borderRadius: ["0px 0px", "0px 0px", "15px 15px", "15px 15px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"]
                        },
                        {
                            id: 'Ellipse',
                            type: 'ellipse',
                            rect: ['223px', '97px', '90px', '90px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"]
                        },
                        {
                            id: 'btn_vocabulario',
                            type: 'image',
                            rect: ['168px', '42px', '200px', '200px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"vi%C3%B1etaM-49-49.png",'0px','0px'],
                            transform: [[],[],[],['0.4','0.4']]
                        },
                        {
                            id: 'PA_vocabulario',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['627', '554', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"PA_vocabulario.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['228px', '102px', '80px', '80px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">J</p>",
                            align: "center",
                            font: ['sena_icon', [60, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", ""],
                            textStyle: ["", "", "80px", "", ""]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '1080px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,126,126,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 2112.25,
                    autoPlay: true,
                    data: [
                            [ "eid103", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${PA_vocabulario}', [] ] ]
                    ]
                }
            },
            "cerrar_voca": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-38px', '-38px', '151px', '153px', 'auto', 'auto'],
                            id: 'cerrar',
                            transform: [[], [], [], ['0.5', '0.5']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/btn_cerrar.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '74px', '74px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy',
                            stroke: [1, 'rgba(255,255,255,0.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['0px', '0px', '76px', '76px', 'auto', 'auto'],
                            font: ['sena_icon', [60, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', ''],
                            align: 'center',
                            id: 'TX_cerrar',
                            text: '<p style=\"margin: 0px;\">​7</p>',
                            textStyle: ['', '', '72px', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '76px', '77px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "audio_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '70px', '40px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRectCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]]
                        },
                        {
                            rect: ['-51px', '-66px', '175px', '172px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            id: 'play-03',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/play-03.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            id: 'stop',
                            opacity: '0',
                            rect: ['22px', '7px', '25px', '25px', 'auto', 'auto'],
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)'],
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/abecedarioesn1le01ob01voau01.mp3'],
                            id: 'audiomp3_1',
                            rect: ['306', '758', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '70px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 2112.25,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 125
                    },
                    data: [
                        [
                            "eid85",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${stop}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid86",
                            "opacity",
                            125,
                            0,
                            "linear",
                            "${stop}",
                            '1',
                            '1'
                        ],
                        [
                            "eid84",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${play-03}",
                            '1',
                            '0'
                        ],
                            [ "eid97", "trigger", 125, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audiomp3_1}', [] ] ]
                    ]
                }
            },
            "audio_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '70px', '40px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRectCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]]
                        },
                        {
                            transform: [[], [], [], ['0.2', '0.2']],
                            rect: ['-51px', '-66px', '175px', '172px', 'auto', 'auto'],
                            id: 'play-03',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/play-03.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            id: 'stop',
                            opacity: '0',
                            rect: ['22px', '7px', '25px', '25px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)'],
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/MINUSCULAesn1le01ob01voau06.audioonly.mp3'],
                            id: 'audiomp3_2',
                            rect: ['-220', '434', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '70px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 1957.625,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 125
                    },
                    data: [
                        [
                            "eid85",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${stop}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid86",
                            "opacity",
                            125,
                            0,
                            "linear",
                            "${stop}",
                            '1',
                            '1'
                        ],
                        [
                            "eid84",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${play-03}",
                            '1',
                            '0'
                        ],
                            [ "eid105", "trigger", 125, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audiomp3_2}', [] ] ]
                    ]
                }
            },
            "audio_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '70px', '40px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRectCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]]
                        },
                        {
                            rect: ['-51px', '-66px', '175px', '172px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            id: 'play-03',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/play-03.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            id: 'stop',
                            opacity: '0',
                            rect: ['22px', '7px', '25px', '25px', 'auto', 'auto'],
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)'],
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/consonanteesn1le01ob01voau05.mp3'],
                            id: 'audiomp3_3',
                            rect: ['453', '204', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '70px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 2040.25,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 125
                    },
                    data: [
                        [
                            "eid85",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${stop}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid86",
                            "opacity",
                            125,
                            0,
                            "linear",
                            "${stop}",
                            '1',
                            '1'
                        ],
                        [
                            "eid84",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${play-03}",
                            '1',
                            '0'
                        ],
                            [ "eid99", "trigger", 125, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audiomp3_3}', [] ] ]
                    ]
                }
            },
            "audio_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '70px', '40px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRectCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]]
                        },
                        {
                            rect: ['-51px', '-66px', '175px', '172px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            id: 'play-03',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/play-03.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            id: 'stop',
                            opacity: '0',
                            rect: ['22px', '7px', '25px', '25px', 'auto', 'auto'],
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)'],
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/letraesn1le01ob01voau02.mp3'],
                            id: 'audiomp3_4',
                            rect: ['-466', '251', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '70px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 1716.25,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 125
                    },
                    data: [
                        [
                            "eid85",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${stop}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid86",
                            "opacity",
                            125,
                            0,
                            "linear",
                            "${stop}",
                            '1',
                            '1'
                        ],
                        [
                            "eid84",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${play-03}",
                            '1',
                            '0'
                        ],
                            [ "eid100", "trigger", 125, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audiomp3_4}', [] ] ]
                    ]
                }
            },
            "audio_5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '70px', '40px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRectCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]]
                        },
                        {
                            transform: [[], [], [], ['0.2', '0.2']],
                            rect: ['-51px', '-66px', '175px', '172px', 'auto', 'auto'],
                            id: 'play-03',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/play-03.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            id: 'stop',
                            opacity: '0',
                            rect: ['22px', '7px', '25px', '25px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)'],
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/MAYUSCULAesn1le01ob01voau04.audioonly.mp3'],
                            id: 'audiomp3_5',
                            rect: ['702', '50', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '70px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 2009.875,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 125
                    },
                    data: [
                        [
                            "eid85",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${stop}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid86",
                            "opacity",
                            125,
                            0,
                            "linear",
                            "${stop}",
                            '1',
                            '1'
                        ],
                        [
                            "eid84",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${play-03}",
                            '1',
                            '0'
                        ],
                            [ "eid104", "trigger", 125, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audiomp3_5}', [] ] ]
                    ]
                }
            },
            "audio_6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '70px', '40px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRectCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]]
                        },
                        {
                            rect: ['-51px', '-66px', '175px', '172px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            id: 'play-03',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/play-03.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            id: 'stop',
                            opacity: '0',
                            rect: ['22px', '7px', '25px', '25px', 'auto', 'auto'],
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)'],
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/vocalesn1le01ob01voau03.mp3'],
                            id: 'audiomp3_6',
                            rect: ['-558', '0', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '70px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 1896.25,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 125
                    },
                    data: [
                        [
                            "eid85",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${stop}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid86",
                            "opacity",
                            125,
                            0,
                            "linear",
                            "${stop}",
                            '1',
                            '1'
                        ],
                        [
                            "eid84",
                            "opacity",
                            0,
                            125,
                            "linear",
                            "${play-03}",
                            '1',
                            '0'
                        ],
                            [ "eid102", "trigger", 125, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audiomp3_6}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("vocabulario_edgeActions.js");
})("EDGE-30791306");
