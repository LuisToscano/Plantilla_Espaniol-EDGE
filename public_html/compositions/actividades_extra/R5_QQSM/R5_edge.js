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
            js+"EdgeCommons.js",
            js+"utility.js",
            js+"main.js",
            js+"timerUtilities.js",
            js+"actividades_result.js",
            js+"r6.js",
            js+"qqsm.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'R6_portada',
                            symbolName: 'R6_portada',
                            type: 'rect',
                            rect: ['-1830px', '0px', '1830', '780', 'auto', 'auto']
                        },
                        {
                            id: 'R6_1',
                            symbolName: 'R6_1',
                            type: 'rect',
                            rect: ['-1840px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'R6_2',
                            symbolName: 'R6_2',
                            type: 'rect',
                            rect: ['1840px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'R6_3',
                            symbolName: 'R6_3',
                            type: 'rect',
                            rect: ['1840px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'R6_4',
                            symbolName: 'R6_4',
                            type: 'rect',
                            rect: ['1840px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'R6_5',
                            symbolName: 'R6_5',
                            type: 'rect',
                            rect: ['1840px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'R6_respuestas',
                            symbolName: 'R6_respuestas',
                            display: 'none',
                            type: 'rect',
                            rect: ['1830px', '0', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'TextCopy2',
                            display: 'none',
                            type: 'text',
                            rect: ['88px', '68px', '1648px', '41px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​En el proceso de aprendizaje de una lengua, es importante identificar las letras y sus nombres al deletrear palabras.<span style=\"font-family: source-sans-pro, sans-serif;\">​</span><span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\">​</span></p>",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy',
                            display: 'none',
                            type: 'text',
                            rect: ['87px', '117px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Identifique la pronunciación y deletreo de cada palabra.<span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "700", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text',
                            display: 'none',
                            type: 'text',
                            rect: ['87px', '171px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Instrucción: escuche el audio y seleccione la opción que corresponda. Tiene dos intentos para esta actividad.<span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none", "italic", "break-word", "nowrap"]
                        },
                        {
                            id: 'ayuda_1',
                            symbolName: 'ayuda_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['197px', '290px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'ayuda_2',
                            symbolName: 'ayuda_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['197px', '414px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'ayuda_3',
                            symbolName: 'ayuda_3',
                            display: 'none',
                            type: 'rect',
                            rect: ['197px', '538px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'correctocontenedor',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],[],[],['0.5','0.5']],
                            c: [
                            {
                                id: 'RoundRect',
                                type: 'rect',
                                rect: ['735px', '210px', '360px', '360px', 'auto', 'auto'],
                                borderRadius: ["15px", "15px", "15px", "15px 15px"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                boxShadow: ["", 0, 0, 25, 3, "rgba(70,70,70,0.68)"]
                            },
                            {
                                id: 'correcto',
                                type: 'image',
                                rect: ['840px', '278px', '150px', '150px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"correcto.png",'0px','0px']
                            },
                            {
                                id: 'TextCopy3',
                                type: 'text',
                                rect: ['784px', '475px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​¡Excelente trabajo!</p>",
                                font: ['source-sans-pro, sans-serif', [32, "px"], "rgba(0,0,0,1)", "600", "none", "", "break-word", "nowrap"]
                            },
                            {
                                id: 'cerrar_corr',
                                symbolName: 'cerrar_corr',
                                type: 'rect',
                                rect: ['1032px', '219px', '53', '54', 'auto', 'auto']
                            }]
                        },
                        {
                            id: 'incorrectocontenedor',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],['0.5','0.5']],
                            c: [
                            {
                                id: 'RoundRectCopy',
                                type: 'rect',
                                rect: ['735px', '210px', '360px', '360px', 'auto', 'auto'],
                                borderRadius: ["15px", "15px", "15px", "15px 15px"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                boxShadow: ["", 0, 0, 25, 3, "rgba(70,70,70,0.68)"]
                            },
                            {
                                id: 'volver',
                                symbolName: 'volver',
                                type: 'rect',
                                rect: ['808px', '502px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'incorrecto',
                                type: 'image',
                                rect: ['840px', '269px', '150px', '150px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"incorrecto.png",'0px','0px']
                            },
                            {
                                id: 'TextCopy4',
                                type: 'text',
                                rect: ['752px', '443px', '326px', '54px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​¡Respuesta incorrecta!</p>",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [32, "px"], "rgba(0,0,0,1)", "600", "none", "", "break-word", ""]
                            }]
                        },
                        {
                            id: 'Submit',
                            symbolName: 'Submit',
                            display: 'none',
                            type: 'rect',
                            rect: ['1509px', '707px', '165', '38', 'auto', 'auto'],
                            clip: 'rect(0px 193.8662109375px 38px -28.8662109375px)',
                            cursor: 'pointer'
                        },
                        {
                            id: 'audio_entrada',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1546', '560', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"audio_entrada.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'vineta_lila',
                            display: 'none',
                            type: 'image',
                            rect: ['35px', '97px', '57px', '85px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"vineta_lila.png",'0px','0px'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'Skills',
                            symbolName: 'Skills',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '617px', '283', '157', 'auto', 'auto']
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
                    duration: 8000,
                    autoPlay: true,
                    labels: {
                        "slide_1": 500,
                        "slide_2": 1000,
                        "slide_3": 1500,
                        "slide_4": 2000,
                        "slide_5": 2500,
                        "correcto": 4000,
                        "incorrecto": 5500,
                        "respuestas": 7500
                    },
                    data: [
                        [
                            "eid364",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Submit}",
                            'none',
                            'block'
                        ],
                        [
                            "eid365",
                            "display",
                            2583,
                            0,
                            "linear",
                            "${Submit}",
                            'block',
                            'none'
                        ],
                        [
                            "eid394",
                            "display",
                            0,
                            0,
                            "linear",
                            "${vineta_lila}",
                            'none',
                            'none'
                        ],
                        [
                            "eid395",
                            "display",
                            500,
                            0,
                            "linear",
                            "${vineta_lila}",
                            'none',
                            'block'
                        ],
                        [
                            "eid396",
                            "display",
                            2583,
                            0,
                            "linear",
                            "${vineta_lila}",
                            'block',
                            'none'
                        ],
                        [
                            "eid25",
                            "left",
                            0,
                            500,
                            "linear",
                            "${R6_1}",
                            '1840px',
                            '0px'
                        ],
                        [
                            "eid27",
                            "left",
                            500,
                            500,
                            "linear",
                            "${R6_1}",
                            '0px',
                            '-1836px'
                        ],
                        [
                            "eid373",
                            "left",
                            7500,
                            500,
                            "linear",
                            "${R6_respuestas}",
                            '1830px',
                            '0px'
                        ],
                        [
                            "eid325",
                            "scaleX",
                            5500,
                            500,
                            "linear",
                            "${incorrectocontenedor}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid315",
                            "scaleY",
                            4000,
                            500,
                            "linear",
                            "${correctocontenedor}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid327",
                            "opacity",
                            5500,
                            500,
                            "linear",
                            "${incorrectocontenedor}",
                            '0',
                            '1'
                        ],
                        [
                            "eid404",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Skills}",
                            'none',
                            'block'
                        ],
                        [
                            "eid405",
                            "display",
                            2583,
                            0,
                            "linear",
                            "${Skills}",
                            'block',
                            'none'
                        ],
                        [
                            "eid44",
                            "left",
                            500,
                            500,
                            "linear",
                            "${R6_2}",
                            '1840px',
                            '0px'
                        ],
                        [
                            "eid54",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${R6_2}",
                            '0px',
                            '-1840px'
                        ],
                        [
                            "eid375",
                            "display",
                            5500,
                            0,
                            "linear",
                            "${incorrectocontenedor}",
                            'none',
                            'block'
                        ],
                        [
                            "eid376",
                            "display",
                            6250,
                            0,
                            "linear",
                            "${incorrectocontenedor}",
                            'block',
                            'none'
                        ],
                        [
                            "eid42",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${R6_4}",
                            '1840px',
                            '0px'
                        ],
                        [
                            "eid52",
                            "left",
                            2000,
                            500,
                            "linear",
                            "${R6_4}",
                            '0px',
                            '-1840px'
                        ],
                        [
                            "eid399",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ayuda_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid400",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ayuda_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid379",
                            "display",
                            7500,
                            0,
                            "linear",
                            "${R6_respuestas}",
                            'none',
                            'block'
                        ],
                        [
                            "eid23",
                            "left",
                            0,
                            500,
                            "linear",
                            "${R6_portada}",
                            '0px',
                            '-1830px'
                        ],
                        [
                            "eid43",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${R6_3}",
                            '1840px',
                            '0px'
                        ],
                        [
                            "eid53",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${R6_3}",
                            '0px',
                            '-1840px'
                        ],
                        [
                            "eid374",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${correctocontenedor}",
                            'none',
                            'block'
                        ],
                        [
                            "eid377",
                            "display",
                            4750,
                            0,
                            "linear",
                            "${correctocontenedor}",
                            'block',
                            'none'
                        ],
                        [
                            "eid41",
                            "left",
                            2000,
                            500,
                            "linear",
                            "${R6_5}",
                            '1840px',
                            '0px'
                        ],
                        [
                            "eid296",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${R6_5}",
                            '0px',
                            '-1840px'
                        ],
                        [
                            "eid314",
                            "scaleX",
                            4000,
                            500,
                            "linear",
                            "${correctocontenedor}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid290",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid299",
                            "display",
                            2583,
                            0,
                            "linear",
                            "${Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid326",
                            "scaleY",
                            5500,
                            500,
                            "linear",
                            "${incorrectocontenedor}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid288",
                            "display",
                            500,
                            0,
                            "linear",
                            "${TextCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid301",
                            "display",
                            2583,
                            0,
                            "linear",
                            "${TextCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid289",
                            "display",
                            500,
                            0,
                            "linear",
                            "${TextCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid300",
                            "display",
                            2583,
                            0,
                            "linear",
                            "${TextCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid398",
                            "display",
                            0,
                            0,
                            "linear",
                            "${ayuda_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid318",
                            "opacity",
                            4000,
                            500,
                            "linear",
                            "${correctocontenedor}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "R6_portada": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'reloj_titulo',
                            tag: 'img',
                            rect: ['793px', '98px', '243px', '243px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/reloj_titulo.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['256px', '406px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text2',
                            font: ['source-sans-pro, sans-serif', [100, 'px'], 'rgba(0,34,123,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            textShadow: ['rgba(17,17,17,0.65)', 6, 4, 10],
                            text: '<p style=\"margin: 0px;\">​¿Quién quiere ser millonario?</p>'
                        },
                        {
                            rect: ['115px', '541px', '1600px', '8px', 'auto', 'auto'],
                            borderRadius: ['39px', '39px', '39px', '39px 39px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(12,50,212,0.67)']
                        },
                        {
                            rect: ['115px', '562px', '1600px', '5px', 'auto', 'auto'],
                            borderRadius: ['39px', '39px', '39px', '39px 39px'],
                            id: 'RoundRectCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(12,50,212,0.54)']
                        },
                        {
                            type: 'image',
                            id: 'precarga_gif',
                            tag: 'img',
                            rect: ['834px', '622px', '161px', '12px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/precarga_gif.gif', '0px', '0px']
                        },
                        {
                            rect: ['824px', '603px', '182', '49', 'auto', 'auto'],
                            id: 'btn_inicio',
                            display: 'none',
                            symbolName: 'btn_inicio',
                            cursor: 'pointer',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '335px', '49px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid397",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_inicio}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "R6_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            fill: ['rgba(255,0,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
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
            "R6_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            fill: ['rgba(255,119,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
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
            "R6_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            fill: ['rgba(239,255,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
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
            "R6_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            fill: ['rgba(0,255,117,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
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
            "R6_5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,103,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
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
            "btn_inicio": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'RoundRectCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '182px', '49px', 'auto', 'auto'],
                            borderRadius: ['39px', '39px', '39px', '39px 39px'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]],
                            c: [
                            {
                                rect: ['13px', '6px', '155px', '31px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'TextCopy',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Inicio</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '182px', '49px']
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
            "ayuda_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'ayuda_1',
                            tag: 'img',
                            rect: ['0px', '0px', '131px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ayuda_1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '131px', '76px']
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
            "ayuda_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            tag: 'img',
                            id: 'ayuda_2',
                            rect: ['0px', '0px', '131px', '76px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/ayuda_2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '131px', '76px']
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
            "ayuda_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            tag: 'img',
                            id: 'ayuda_3',
                            rect: ['0px', '0px', '131px', '76px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/ayuda_3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '131px', '76px']
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
            "volver": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '213px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]],
                            c: [
                            {
                                type: 'text',
                                rect: ['0px', '0px', '213px', '31px', 'auto', 'auto'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Volver a intentar</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '213px', '31px']
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
            "cerrar_corr": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-49px', '-50px', '151px', '153px', 'auto', 'auto'],
                            id: 'cerrar',
                            transform: [[], [], [], ['0.35', '0.35']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cerrar.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '53px', '54px']
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
            "cerrar_inco": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0.35', '0.35']],
                            id: 'cerrar',
                            type: 'image',
                            rect: ['-49px', '-50px', '151px', '153px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cerrar2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '53px', '54px']
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
                            type: 'rect',
                            rect: ['-117px', '0px', '433px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]],
                            c: [
                            {
                                type: 'text',
                                rect: ['190px', '1px', '94px', '31px', 'auto', 'auto'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Escucha</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                            }]
                        },
                        {
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)'],
                            type: 'rect',
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            rect: ['52px', '3px', '25px', '25px', 'auto', 'auto'],
                            id: 'stop',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            opacity: '0',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['-23px', '-71px', '175px', '172px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            id: 'play',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/play-033.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/audiomp3_1.mp3'],
                            id: 'audiomp3_1',
                            rect: ['912', '319', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '213px', '31px']
                        }
                    }
                },
                timeline: {
                    duration: 9133,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 124
                    },
                    data: [
                        [
                            "eid190",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${play}",
                            '1',
                            '0'
                        ],
                        [
                            "eid188",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${stop}",
                            '0.000000',
                            '1'
                        ],
                            [ "eid36", "trigger", 124, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audiomp3_1}', [] ] ]
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
                            type: 'rect',
                            rect: ['-117px', '0px', '433px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]],
                            c: [
                            {
                                type: 'text',
                                rect: ['190px', '1px', '94px', '31px', 'auto', 'auto'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Escucha</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                            }]
                        },
                        {
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)'],
                            type: 'rect',
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            rect: ['52px', '3px', '25px', '25px', 'auto', 'auto'],
                            id: 'stop',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            opacity: '0',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['-23px', '-71px', '175px', '172px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            id: 'play',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/play-033.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/audiomp3_3.mp3'],
                            id: 'audiomp3_3',
                            rect: ['969', '219', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '213px', '31px']
                        }
                    }
                },
                timeline: {
                    duration: 11587,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 124
                    },
                    data: [
                        [
                            "eid190",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${play}",
                            '1',
                            '0'
                        ],
                        [
                            "eid188",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${stop}",
                            '0.000000',
                            '1'
                        ],
                            [ "eid38", "trigger", 124, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audiomp3_3}', [] ] ]
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
                            type: 'rect',
                            rect: ['-117px', '0px', '433px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]],
                            c: [
                            {
                                type: 'text',
                                rect: ['190px', '1px', '94px', '31px', 'auto', 'auto'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Escucha</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                            }]
                        },
                        {
                            fill: ['rgba(255,255,255,1)'],
                            type: 'rect',
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            rect: ['52px', '3px', '25px', '25px', 'auto', 'auto'],
                            id: 'stop',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            opacity: '0',
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            transform: [[], [], [], ['0.2', '0.2']],
                            rect: ['-23px', '-71px', '175px', '172px', 'auto', 'auto'],
                            id: 'play',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/play-033.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/audiomp3_5.mp3'],
                            id: 'audiomp3_5',
                            rect: ['1009', '159', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '213px', '31px']
                        }
                    }
                },
                timeline: {
                    duration: 14239,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 124
                    },
                    data: [
                        [
                            "eid190",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${play}",
                            '1',
                            '0'
                        ],
                        [
                            "eid188",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${stop}",
                            '0.000000',
                            '1'
                        ],
                            [ "eid40", "trigger", 124, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audiomp3_5}', [] ] ]
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
                            type: 'rect',
                            rect: ['-117px', '0px', '433px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]],
                            c: [
                            {
                                type: 'text',
                                rect: ['190px', '1px', '94px', '31px', 'auto', 'auto'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Escucha</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                            }]
                        },
                        {
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)'],
                            type: 'rect',
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            rect: ['52px', '3px', '25px', '25px', 'auto', 'auto'],
                            id: 'stop',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            opacity: '0',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['-23px', '-71px', '175px', '172px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            id: 'play',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/play-033.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/audiomp3_4.mp3'],
                            id: 'audiomp3_4',
                            rect: ['908', '174', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '213px', '31px']
                        }
                    }
                },
                timeline: {
                    duration: 14239,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 124
                    },
                    data: [
                        [
                            "eid190",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${play}",
                            '1',
                            '0'
                        ],
                        [
                            "eid188",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${stop}",
                            '0.000000',
                            '1'
                        ],
                            [ "eid39", "trigger", 124, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audiomp3_4}', [] ] ]
                    ]
                }
            },
            "contenedorrespuestas": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'box_pregunta',
                            rect: ['530px', '151px', '823px', '73px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/box_pregunta.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['722px', '161px', '439px', '52px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text2Copy5',
                            text: '<p style=\"margin: 0px;\">​Respuestas Correctas</p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', '']
                        },
                        {
                            rect: ['1028px', '272px', '401', '57', 'auto', 'auto'],
                            id: 'RTA1',
                            type: 'group',
                            c: [
                            {
                                id: 'box_respuesta',
                                rect: ['0px', '0px', '401px', '57px', 'auto', 'auto'],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/box_respuesta5.png', '0px', '0px']
                            },
                            {
                                type: 'text',
                                rect: ['43px', '3px', '323px', '52px', 'auto', 'auto'],
                                align: 'center',
                                id: 'Text2',
                                text: '<p style=\"margin: 0px;\">​Brazo</p>',
                                textStyle: ['', '', '', '', 'none'],
                                font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', '']
                            }]
                        },
                        {
                            rect: ['1027px', '352px', '401', '57', 'auto', 'auto'],
                            id: 'RTA2',
                            type: 'group',
                            c: [
                            {
                                id: 'box_respuestaCopy',
                                rect: ['0px', '0px', '401px', '57px', 'auto', 'auto'],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/box_respuesta5.png', '0px', '0px']
                            },
                            {
                                type: 'text',
                                rect: ['44px', '2px', '323px', '52px', 'auto', 'auto'],
                                align: 'center',
                                id: 'Text2Copy',
                                text: '<p style=\"margin: 0px;\">​Silla</p>',
                                textStyle: ['', '', '', '', 'none'],
                                font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', '']
                            }]
                        },
                        {
                            rect: ['1027px', '431px', '401', '57', 'auto', 'auto'],
                            id: 'RTA3',
                            type: 'group',
                            c: [
                            {
                                id: 'box_respuestaCopy2',
                                rect: ['0px', '0px', '401px', '57px', 'auto', 'auto'],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/box_respuesta5.png', '0px', '0px']
                            },
                            {
                                type: 'text',
                                rect: ['39px', '2px', '323px', '52px', 'auto', 'auto'],
                                align: 'center',
                                id: 'Text2Copy2',
                                text: '<p style=\"margin: 0px;\">​Caballo</p>',
                                textStyle: ['', '', '', '', 'none'],
                                font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', '']
                            }]
                        },
                        {
                            rect: ['1028px', '510px', '401', '57', 'auto', 'auto'],
                            id: 'RTA4',
                            type: 'group',
                            c: [
                            {
                                id: 'box_respuestaCopy3',
                                rect: ['0px', '0px', '401px', '57px', 'auto', 'auto'],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/box_respuesta5.png', '0px', '0px']
                            },
                            {
                                type: 'text',
                                rect: ['37px', '3px', '323px', '52px', 'auto', 'auto'],
                                align: 'center',
                                id: 'Text2Copy3',
                                text: '<p style=\"margin: 0px;\">​Paisaje</p>',
                                textStyle: ['', '', '', '', 'none'],
                                font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', '']
                            }]
                        },
                        {
                            rect: ['1032px', '588px', '401', '57', 'auto', 'auto'],
                            id: 'RTA5',
                            type: 'group',
                            c: [
                            {
                                id: 'box_respuestaCopy4',
                                rect: ['0px', '0px', '401px', '57px', 'auto', 'auto'],
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/box_respuesta5.png', '0px', '0px']
                            },
                            {
                                type: 'text',
                                rect: ['33px', '2px', '323px', '52px', 'auto', 'auto'],
                                align: 'center',
                                id: 'Text2Copy4',
                                text: '<p style=\"margin: 0px;\">​Cama</p>',
                                textStyle: ['', '', '', '', 'none'],
                                font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', '']
                            }]
                        },
                        {
                            type: 'text',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">2.<span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>',
                            rect: ['441px', '360px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(79,45,110,1.00)', '700', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            id: 'TextCopy',
                            text: '<p style=\"margin: 0px;\">3.<span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>',
                            rect: ['441px', '440px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(79,45,110,1.00)', '700', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            id: 'TextCopy2',
                            text: '<p style=\"margin: 0px;\">4.<span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>',
                            rect: ['441px', '517px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(79,45,110,1.00)', '700', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            id: 'TextCopy3',
                            text: '<p style=\"margin: 0px;\">5.<span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>',
                            rect: ['441px', '595px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(79,45,110,1.00)', '700', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            id: 'TextCopy4',
                            text: '<p style=\"margin: 0px;\">1.<span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>',
                            rect: ['441px', '280px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(79,45,110,1.00)', '700', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            rect: ['651px', '285px', null, null, 'auto', 'auto'],
                            type: 'rect',
                            id: 'audio_1',
                            symbolName: 'audio_1',
                            cursor: 'pointer',
                            transform: [[], [], [], ['1.1784', '1.1784']]
                        },
                        {
                            rect: ['650px', '365px', null, null, 'auto', 'auto'],
                            type: 'rect',
                            id: 'audio_2',
                            symbolName: 'audio_2',
                            cursor: 'pointer',
                            transform: [[], [], [], ['1.18', '1.18']]
                        },
                        {
                            rect: ['650px', '445px', null, null, 'auto', 'auto'],
                            type: 'rect',
                            id: 'audio_3',
                            symbolName: 'audio_3',
                            cursor: 'pointer',
                            transform: [[], [], [], ['1.18', '1.18']]
                        },
                        {
                            rect: ['649px', '524px', null, null, 'auto', 'auto'],
                            type: 'rect',
                            id: 'audio_4',
                            symbolName: 'audio_4',
                            cursor: 'pointer',
                            transform: [[], [], [], ['1.18', '1.18']]
                        },
                        {
                            rect: ['650px', '601px', null, null, 'auto', 'auto'],
                            type: 'rect',
                            id: 'audio_5',
                            symbolName: 'audio_5',
                            cursor: 'pointer',
                            transform: [[], [], [], ['1.18', '1.18']]
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
                        }
                    }
                },
                timeline: {
                    duration: 14239,
                    autoPlay: true,
                    data: [

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
                            type: 'rect',
                            rect: ['-117px', '0px', '433px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]],
                            c: [
                            {
                                type: 'text',
                                rect: ['190px', '1px', '94px', '31px', 'auto', 'auto'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Escucha</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                            }]
                        },
                        {
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)'],
                            type: 'rect',
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            rect: ['52px', '3px', '25px', '25px', 'auto', 'auto'],
                            id: 'stop',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            opacity: '0',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['-23px', '-71px', '175px', '172px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            id: 'play',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/play-033.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/audiomp3_2.mp3'],
                            id: 'audiomp3_2',
                            rect: ['833', '292', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '213px', '31px']
                        }
                    }
                },
                timeline: {
                    duration: 9133,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 124
                    },
                    data: [
                        [
                            "eid190",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${play}",
                            '1',
                            '0'
                        ],
                        [
                            "eid188",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${stop}",
                            '0.000000',
                            '1'
                        ],
                            [ "eid37", "trigger", 124, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audiomp3_2}', [] ] ]
                    ]
                }
            },
            "Submit": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['-24px', '3px', '213px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,52,117,1.00)', 50]]]],
                            c: [
                            {
                                type: 'text',
                                rect: ['60px', '-2px', '94px', '31px', 'auto', 'auto'],
                                id: 'TextCopy3',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Enviar</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '165px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "activado": 0,
                        "desactivado": 500
                    },
                    data: [

                    ]
                }
            },
            "R6_respuestas": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            fill: ['rgba(255,0,246,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
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
            "margen_superior": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1775px', '0px', '55px', '70px', 'auto', 'auto'],
                            id: 'Rectangle2Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(111,160,217,1.00)']
                        },
                        {
                            rect: ['0px', '0px', '55px', '70px', 'auto', 'auto'],
                            id: 'Rectangle2Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(111,160,217,1.00)']
                        },
                        {
                            rect: ['86px', '0px', '1689px', '70px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(181,199,220,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '70px']
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
            "oral": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/V_HABLA.png', '0px', '0px'],
                            id: 'V_HABLA',
                            rect: ['-24px', '16px', '141px', '141px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.45', '0.45']],
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_oral',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['-18px', '-22px', '129px', '63px', 'auto', 'auto'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            opacity: '0',
                            fill: ['rgba(0,104,95,1.00)'],
                            c: [
                            {
                                rect: ['55px', '48px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'RectangleCopy2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,104,95,1.00)']
                            },
                            {
                                type: 'text',
                                rect: ['8px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                text: '<p style=\"margin: 0px;\">​Producción</p><p style=\"margin: 0px;\">​oral</p>',
                                id: 'TextCopy2',
                                textStyle: ['', '', '23px', '', ''],
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '102px', '109px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 500
                    },
                    data: [
                        [
                            "eid29",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Tool_oral}",
                            '0',
                            '1'
                        ],
                        [
                            "eid37",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${Tool_oral}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "auditiva": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/V_ESCUCHA.png', '0px', '0px'],
                            id: 'V_ESCUCHA',
                            rect: ['-12px', '12px', '141px', '141px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.45', '0.45']],
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_auditiva',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['-15px', '-25px', '148px', '63px', 'auto', 'auto'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            opacity: '0',
                            fill: ['rgba(0,104,95,1.00)'],
                            c: [
                            {
                                rect: ['64px', '48px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'RectangleCopy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,104,95,1.00)']
                            },
                            {
                                type: 'text',
                                rect: ['7px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                text: '<p style=\"margin: 0px;\">​Comprensión</p><p style=\"margin: 0px;\">​auditiva</p>',
                                id: 'TextCopy',
                                textStyle: ['', '', '23px', '', ''],
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '117px', '104px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 500
                    },
                    data: [
                        [
                            "eid32",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Tool_auditiva}",
                            '0',
                            '1'
                        ],
                        [
                            "eid40",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${Tool_auditiva}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "Skills": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-122px', '-30px', '530px', '250px', 'auto', 'auto'],
                            id: 'Skills',
                            transform: [[], [], [], ['0.5', '0.5']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Skills.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/B_ESCRITURA.png', '0px', '0px'],
                            id: 'B_ESCRITA',
                            rect: ['44px', '33px', '141px', '141px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['0.45', '0.45']],
                            fill: ['rgba(0,0,0,0)', 'images/B_HABLA.png', '0px', '0px'],
                            id: 'B_ORAL',
                            rect: ['157px', '35px', '141px', '141px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/B_LECTURA.png', '0px', '0px'],
                            id: 'B_LECTORA',
                            rect: ['-12px', '14px', '141px', '141px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['0.45', '0.45']],
                            fill: ['rgba(0,0,0,0)', 'images/B_ESCUCHA.png', '0px', '0px'],
                            id: 'B_AUDITIVA',
                            rect: ['100px', '14px', '141px', '141px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            display: 'block',
                            symbolName: 'escrita',
                            rect: ['62px', '16px', '102', '108', 'auto', 'auto'],
                            id: 'escrita'
                        },
                        {
                            type: 'rect',
                            display: 'block',
                            symbolName: 'oral',
                            rect: ['181px', '19px', '102', '109', 'auto', 'auto'],
                            id: 'oral'
                        },
                        {
                            type: 'rect',
                            display: 'block',
                            symbolName: 'lectora',
                            rect: ['0px', '-1px', '117', '113', 'auto', 'auto'],
                            id: 'lectora'
                        },
                        {
                            type: 'rect',
                            display: 'block',
                            symbolName: 'auditiva',
                            rect: ['112px', '1px', '117', '104', 'auto', 'auto'],
                            id: 'auditiva'
                        },
                        {
                            rect: ['24px', '50px', '70px', '70px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Tool_lectora',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,0,0,0.00)']
                        },
                        {
                            rect: ['80px', '71px', '70px', '70px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Tool_escrita',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,0,0,0.00)']
                        },
                        {
                            rect: ['136px', '49px', '70px', '70px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Tool_auditiva',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,0,0,0.00)']
                        },
                        {
                            rect: ['193px', '71px', '70px', '70px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Tool_oral',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,0,0,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '283px', '157px']
                        }
                    }
                },
                timeline: {
                    duration: 1198,
                    autoPlay: true,
                    data: [
                        [
                            "eid50",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_ORAL}",
                            'none',
                            'none'
                        ],
                        [
                            "eid408",
                            "display",
                            1198,
                            0,
                            "linear",
                            "${B_ORAL}",
                            'none',
                            'block'
                        ],
                        [
                            "eid49",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_LECTORA}",
                            'none',
                            'none'
                        ],
                        [
                            "eid51",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_AUDITIVA}",
                            'none',
                            'none'
                        ],
                        [
                            "eid48",
                            "display",
                            0,
                            0,
                            "linear",
                            "${escrita}",
                            'block',
                            'block'
                        ],
                        [
                            "eid407",
                            "display",
                            1198,
                            0,
                            "linear",
                            "${escrita}",
                            'block',
                            'none'
                        ],
                        [
                            "eid45",
                            "display",
                            0,
                            0,
                            "linear",
                            "${auditiva}",
                            'block',
                            'block'
                        ],
                        [
                            "eid46",
                            "display",
                            0,
                            0,
                            "linear",
                            "${lectora}",
                            'block',
                            'block'
                        ],
                        [
                            "eid47",
                            "display",
                            0,
                            0,
                            "linear",
                            "${oral}",
                            'block',
                            'block'
                        ],
                        [
                            "eid406",
                            "display",
                            1198,
                            0,
                            "linear",
                            "${oral}",
                            'block',
                            'none'
                        ],
                        [
                            "eid52",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_ESCRITA}",
                            'none',
                            'none'
                        ],
                        [
                            "eid409",
                            "display",
                            1198,
                            0,
                            "linear",
                            "${B_ESCRITA}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "lectora": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/V_LECTURA.png', '0px', '0px'],
                            id: 'V_LECTURA',
                            rect: ['-12px', '15px', '140px', '140px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.45', '0.45']],
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_lectora',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '-23px', '149px', '63px', 'auto', 'auto'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            opacity: '0',
                            fill: ['rgba(0,104,95,1.00)'],
                            c: [
                            {
                                rect: ['48px', '48px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,104,95,1.00)']
                            },
                            {
                                type: 'text',
                                rect: ['7px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                text: '<p style=\"margin: 0px;\">​Comprensión</p><p style=\"margin: 0px;\">​lectora</p>',
                                id: 'Text',
                                textStyle: ['', '', '23px', '', ''],
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '117px', '113px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 500
                    },
                    data: [
                        [
                            "eid30",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Tool_lectora}",
                            '0',
                            '1'
                        ],
                        [
                            "eid38",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${Tool_lectora}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "escrita": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/V_ESCRITURA.png', '0px', '0px'],
                            id: 'V_ESCRITURA',
                            rect: ['-18px', '17px', '141px', '141px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.45', '0.45']],
                            tag: 'img'
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_escrita',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['-10px', '-19px', '129px', '63px', 'auto', 'auto'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            opacity: '0',
                            fill: ['rgba(0,104,95,1.00)'],
                            c: [
                            {
                                rect: ['54px', '48px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'RectangleCopy3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,104,95,1.00)']
                            },
                            {
                                type: 'text',
                                rect: ['7px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                text: '<p style=\"margin: 0px;\">​Producción</p><p style=\"margin: 0px;\">​escrita</p>',
                                id: 'TextCopy3',
                                textStyle: ['', '', '23px', '', ''],
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '102px', '108px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 500
                    },
                    data: [
                        [
                            "eid31",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Tool_escrita}",
                            '0',
                            '1'
                        ],
                        [
                            "eid39",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${Tool_escrita}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("R5_edgeActions.js");
})("EDGE-4821767");
