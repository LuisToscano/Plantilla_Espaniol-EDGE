/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'source-sans-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-1.10.2.js",
            js+"main.js",
            js+"audioUtilities.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'fondo',
                            type: 'rect',
                            rect: ['282px', '372px', '1286px', '140px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(225,216,234,1.00)"],
                            stroke: [2,"rgba(79,45,110,1.00)","solid"]
                        },
                        {
                            id: 'text_1',
                            symbolName: 'text_1',
                            type: 'rect',
                            rect: ['1066px', '415px', '442', '57', 'auto', 'auto']
                        },
                        {
                            id: 'ins_pedag',
                            type: 'text',
                            rect: ['85px', '146px', '1693px', '43px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 30px;\"></span> Identifique y aísle las letras según el criterio de cada pregunta.</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'ins_tecnica',
                            type: 'text',
                            rect: ['85px', '202px', '1733px', '43px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Instrucción:&nbsp;escuche el audio, lea la pregunta y escriba la respuesta correspondiente. Tiene dos intentos para esta actividad.</p><p style=\"margin: 0px;\"></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none", "italic", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'contexto',
                            type: 'text',
                            rect: ['85px', '65px', '1693px', '63px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; line-height: 34px;\">​<span style=\"font-size: 30px;\"></span>Cuando aprendemos una lengua, debemos estar en la capacidad de aislar las unidades más simples de las unidades más complejas. En la palabra garaje (unidad compleja), se pueden aislar las letras (unidades simples).</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px; line-height: 34px;\"><span style=\"font-size: 30px;\">​</span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "30px", "", "none"]
                        },
                        {
                            id: 'contextoCopy',
                            type: 'text',
                            rect: ['472px', '424px', '623px', '40px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; line-height: 34px;\">​¿Cuál es la última consonante de la palabra?</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px; line-height: 34px;\"><span style=\"font-size: 30px;\">​</span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "30px", "", "none"]
                        },
                        {
                            id: 'vineta_lila',
                            type: 'image',
                            rect: ['34px', '124px', '57px', '85px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"vineta_lila2.png",'0px','0px'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'audio_1',
                            symbolName: 'audio_1',
                            type: 'rect',
                            rect: ['354px', '424px', '70', '40', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Numero1',
                            type: 'ellipse',
                            rect: ['257px', '347px', '50px', '50px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(79,45,110,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            c: [
                            {
                                id: 'unoCopy',
                                type: 'text',
                                rect: ['0px', '0px', '50px', '50px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 30px;\">5</span></p>",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [24, "px"], "rgba(255,255,255,1.00)", "700", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "47px", "", "none"]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1830px', '780px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 1644.25,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "text_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '442px', '57px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'text',
                            rect: ['23px', '0px', '380px', '57px', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​</p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(106,55,137,1)', '700', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '442px', '57px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
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
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)'],
                            rect: ['22px', '7px', '25px', '25px', 'auto', 'auto'],
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            id: 'stop',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/telefonoesn1le01ob04re5au05.mp3'],
                            id: 'audiomp3_1',
                            rect: ['117', '-129', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '70px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 1680.25,
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
                            [ "eid3", "trigger", 125, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audiomp3_1}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("pre5_edgeActions.js");
})("EDGE-14164065");
