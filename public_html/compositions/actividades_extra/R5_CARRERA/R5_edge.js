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
            js+"carrera_conocimiento.js"
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
                            id: 'conten_tablero2',
                            symbolName: 'conten_tablero',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1830', '780', 'auto', 'auto']
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
                            id: 'ficha',
                            symbolName: 'ficha',
                            display: 'none',
                            type: 'rect',
                            rect: ['57px', '314px', 'undefined', 'undefined', 'auto', 'auto']
                        },
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
                            id: 'Submit',
                            symbolName: 'Submit',
                            display: 'none',
                            type: 'rect',
                            rect: ['1509px', '707px', '165', '38', 'auto', 'auto'],
                            clip: 'rect(0px 193.8662109375px 38px -28.8662109375px)',
                            cursor: 'pointer'
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
                            "eid419",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Skills}",
                            'none',
                            'block'
                        ],
                        [
                            "eid420",
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
                            "eid417",
                            "display",
                            500,
                            0,
                            "linear",
                            "${ficha}",
                            'none',
                            'block'
                        ],
                        [
                            "eid418",
                            "display",
                            2583,
                            0,
                            "linear",
                            "${ficha}",
                            'block',
                            'none'
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
                            "eid407",
                            "display",
                            500,
                            0,
                            "linear",
                            "${conten_tablero2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid408",
                            "display",
                            2583,
                            0,
                            "linear",
                            "${conten_tablero2}",
                            'block',
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
                            type: 'text',
                            align: 'left',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [100, 'px'], 'rgba(0,34,123,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            text: '<p style=\"margin: 0px;\">​Carrera de conocimiento</p>',
                            rect: ['395px', '405px', 'auto', 'auto', 'auto', 'auto'],
                            textShadow: ['rgba(17,17,17,0.65)', 6, 4, 10],
                            id: 'Text2'
                        },
                        {
                            rect: ['115px', '541px', '1600px', '8px', 'auto', 'auto'],
                            borderRadius: ['39px', '39px', '39px', '39px 39px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,182,0,1.00)']
                        },
                        {
                            rect: ['115px', '562px', '1600px', '5px', 'auto', 'auto'],
                            borderRadius: ['39px', '39px', '39px', '39px 39px'],
                            id: 'RoundRectCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,182,0,1.00)']
                        },
                        {
                            type: 'image',
                            id: 'precarga_gif',
                            rect: ['834px', '622px', '161px', '12px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/precarga_gif.gif', '0px', '0px']
                        },
                        {
                            rect: ['824px', '603px', '182', '49', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            symbolName: 'btn_inicio',
                            cursor: 'pointer',
                            id: 'btn_inicio'
                        },
                        {
                            type: 'image',
                            id: 'ficha',
                            rect: ['756px', '65px', '319px', '319px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ficha2.png', '0px', '0px']
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
                                type: 'text',
                                rect: ['13px', '6px', '155px', '31px', 'auto', 'auto'],
                                id: 'TextCopy',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Inicio</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                font: ['Arial, Helvetica, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal']
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
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text',
                                id: 'Text',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Volver a intentar</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                rect: ['0px', '0px', '213px', '31px', 'auto', 'auto']
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
                            font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            align: 'center',
                            id: 'Text2Copy5',
                            text: '<p style=\"margin: 0px;\">​Respuestas Correctas</p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['722px', '161px', '439px', '52px', 'auto', 'auto']
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
                                font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', ''],
                                type: 'text',
                                align: 'center',
                                id: 'Text2',
                                text: '<p style=\"margin: 0px;\">​Brazo</p>',
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['43px', '3px', '323px', '52px', 'auto', 'auto']
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
                                font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', ''],
                                type: 'text',
                                align: 'center',
                                id: 'Text2Copy',
                                text: '<p style=\"margin: 0px;\">​Silla</p>',
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['44px', '2px', '323px', '52px', 'auto', 'auto']
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
                                font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', ''],
                                type: 'text',
                                align: 'center',
                                id: 'Text2Copy2',
                                text: '<p style=\"margin: 0px;\">​Caballo</p>',
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['39px', '2px', '323px', '52px', 'auto', 'auto']
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
                                font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', ''],
                                type: 'text',
                                align: 'center',
                                id: 'Text2Copy3',
                                text: '<p style=\"margin: 0px;\">​Paisaje</p>',
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['37px', '3px', '323px', '52px', 'auto', 'auto']
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
                                font: ['source-sans-pro, sans-serif', [36, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', ''],
                                type: 'text',
                                align: 'center',
                                id: 'Text2Copy4',
                                text: '<p style=\"margin: 0px;\">​Cama</p>',
                                textStyle: ['', '', '', '', 'none'],
                                rect: ['33px', '2px', '323px', '52px', 'auto', 'auto']
                            }]
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(79,45,110,1.00)', '700', 'none', '', 'break-word', 'nowrap'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">2.<span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>',
                            type: 'text',
                            rect: ['441px', '360px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(79,45,110,1.00)', '700', 'none', '', 'break-word', 'nowrap'],
                            id: 'TextCopy',
                            text: '<p style=\"margin: 0px;\">3.<span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>',
                            type: 'text',
                            rect: ['441px', '440px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(79,45,110,1.00)', '700', 'none', '', 'break-word', 'nowrap'],
                            id: 'TextCopy2',
                            text: '<p style=\"margin: 0px;\">4.<span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>',
                            type: 'text',
                            rect: ['441px', '517px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(79,45,110,1.00)', '700', 'none', '', 'break-word', 'nowrap'],
                            id: 'TextCopy3',
                            text: '<p style=\"margin: 0px;\">5.<span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>',
                            type: 'text',
                            rect: ['441px', '595px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(79,45,110,1.00)', '700', 'none', '', 'break-word', 'nowrap'],
                            id: 'TextCopy4',
                            text: '<p style=\"margin: 0px;\">1.<span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>',
                            type: 'text',
                            rect: ['441px', '280px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            transform: [[], [], [], ['1.1784', '1.1784']],
                            rect: ['651px', '285px', null, null, 'auto', 'auto'],
                            id: 'audio_1',
                            symbolName: 'audio_1',
                            cursor: 'pointer',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['1.18', '1.18']],
                            rect: ['650px', '365px', null, null, 'auto', 'auto'],
                            id: 'audio_2',
                            symbolName: 'audio_2',
                            cursor: 'pointer',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['1.18', '1.18']],
                            rect: ['650px', '445px', null, null, 'auto', 'auto'],
                            id: 'audio_3',
                            symbolName: 'audio_3',
                            cursor: 'pointer',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['1.18', '1.18']],
                            rect: ['649px', '524px', null, null, 'auto', 'auto'],
                            id: 'audio_4',
                            symbolName: 'audio_4',
                            cursor: 'pointer',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['1.18', '1.18']],
                            rect: ['650px', '601px', null, null, 'auto', 'auto'],
                            id: 'audio_5',
                            symbolName: 'audio_5',
                            cursor: 'pointer',
                            type: 'rect'
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
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(182,154,212,1.00)', 50], ['rgba(158,122,196,1.00)', 50]]]],
                            c: [
                            {
                                rect: ['60px', '-2px', '94px', '31px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'TextCopy3',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Enviar</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                type: 'text'
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
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "activado": 0,
                        "desactivado": 500
                    },
                    data: [
                        [
                            "eid13",
                            "background-image",
                            0,
                            500,
                            "linear",
                            "${RoundRect}",
                            [270,[['rgba(111,67,158,1.00)',50],['rgba(84,53,118,1.00)',50]]],
                            [270,[['rgba(182,154,212,1.00)',50],['rgba(158,122,196,1.00)',50]]]
                        ],
                        [
                            "eid14",
                            "background-image",
                            500,
                            500,
                            "linear",
                            "${RoundRect}",
                            [270,[['rgba(182,154,212,1.00)',50],['rgba(158,122,196,1.00)',50]]],
                            [270,[['rgba(111,67,158,1.00)',50],['rgba(84,53,118,1.00)',50]]]
                        ]
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
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
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
            "conten_tablero": {
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
                            id: 'conten_tablero',
                            stroke: [0, 'rgb(79, 45, 110)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['91px', '467px', '50px', '183px', 'auto', 'auto'],
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            id: 'RoundRect2Copy2',
                            stroke: [0, 'rgb(79, 45, 110)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(79,45,110,1.00)']
                        },
                        {
                            rect: ['91px', '600px', '1678px', '50px', 'auto', 'auto'],
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            id: 'RoundRect2Copy',
                            stroke: [0, 'rgb(79, 45, 110)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(79,45,110,1.00)']
                        },
                        {
                            rect: ['1719px', '467px', '50px', '183px', 'auto', 'auto'],
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(79, 45, 110)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(79,45,110,1.00)']
                        },
                        {
                            rect: ['86px', '512px', '60px', '22px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            boxShadow: ['', 0, 3, 0, 0, 'rgba(122,64,0,0.65)'],
                            id: 'casilla_1',
                            stroke: [0, 'rgb(79, 45, 110)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,182,0,1.00)']
                        },
                        {
                            rect: ['125px', '614px', '60px', '22px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            boxShadow: ['', 0, 3, 0, 0, 'rgba(122,64,0,0.65)'],
                            id: 'casilla_2',
                            stroke: [0, 'rgb(79, 45, 110)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,182,0,1.00)']
                        },
                        {
                            rect: ['470px', '614px', '60px', '22px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            boxShadow: ['', 0, 3, 0, 0, 'rgba(122,64,0,0.65)'],
                            id: 'casilla_3',
                            stroke: [0, 'rgb(79, 45, 110)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,182,0,1.00)']
                        },
                        {
                            rect: ['298px', '614px', '60px', '22px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            boxShadow: ['', 0, 3, 0, 0, 'rgba(122,64,0,0.65)'],
                            id: 'casilla_4',
                            stroke: [0, 'rgb(79, 45, 110)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,182,0,1.00)']
                        },
                        {
                            rect: ['643px', '614px', '60px', '22px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            boxShadow: ['', 0, 3, 0, 0, 'rgba(122,64,0,0.65)'],
                            id: 'casilla_5',
                            stroke: [0, 'rgb(79, 45, 110)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,182,0,1.00)']
                        },
                        {
                            rect: ['816px', '614px', '60px', '22px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            boxShadow: ['', 0, 3, 0, 0, 'rgba(122,64,0,0.65)'],
                            id: 'casilla_6',
                            stroke: [0, 'rgb(79, 45, 110)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,182,0,1.00)']
                        },
                        {
                            rect: ['1161px', '614px', '60px', '22px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            boxShadow: ['', 0, 3, 0, 0, 'rgba(122,64,0,0.65)'],
                            id: 'casilla_7',
                            stroke: [0, 'rgb(79, 45, 110)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,182,0,1.00)']
                        },
                        {
                            rect: ['988px', '614px', '60px', '22px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            boxShadow: ['', 0, 3, 0, 0, 'rgba(122,64,0,0.65)'],
                            id: 'casilla_9',
                            stroke: [0, 'rgb(79, 45, 110)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,182,0,1.00)']
                        },
                        {
                            rect: ['1334px', '614px', '60px', '22px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            boxShadow: ['', 0, 3, 0, 0, 'rgba(122,64,0,0.65)'],
                            id: 'casilla_5Copy',
                            stroke: [0, 'rgb(79, 45, 110)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,182,0,1.00)']
                        },
                        {
                            rect: ['1506px', '614px', '60px', '22px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            boxShadow: ['', 0, 3, 0, 0, 'rgba(122,64,0,0.65)'],
                            id: 'casilla_6Copy',
                            stroke: [0, 'rgb(79, 45, 110)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,182,0,1.00)']
                        },
                        {
                            rect: ['1714px', '501px', '60px', '22px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            boxShadow: ['', 0, 3, 0, 0, 'rgba(122,64,0,0.65)'],
                            id: 'casilla_7Copy',
                            stroke: [0, 'rgb(79, 45, 110)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,182,0,1.00)']
                        },
                        {
                            rect: ['1679px', '614px', '60px', '22px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            boxShadow: ['', 0, 3, 0, 0, 'rgba(122,64,0,0.65)'],
                            id: 'casilla_9Copy',
                            stroke: [0, 'rgb(79, 45, 110)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,182,0,1.00)']
                        },
                        {
                            rect: ['58px', '396px', '116px', '55px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            boxShadow: ['', 0, 4, 0, 1, 'rgba(119,85,0,1.00)'],
                            id: 'EllipseCopy12',
                            stroke: [0, 'rgb(79, 45, 110)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,182,0,1.00)']
                        },
                        {
                            rect: ['1686px', '396px', '116px', '55px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            boxShadow: ['', 0, 4, 0, 1, 'rgba(119,85,0,1.00)'],
                            id: 'EllipseCopy11',
                            stroke: [0, 'rgb(79, 45, 110)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,182,0,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['68px', '277px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-style: normal; font-weight: 700; font-size: 39px;\">Inicio</span></p>',
                            id: 'Text2Copy',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(79,45,110,1.00)', '400', 'none', 'italic', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['1701px', '277px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\"><span style=\"font-style: normal; font-weight: 700; font-size: 39px;\">Meta</span></p>',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(79,45,110,1.00)', '400', 'none', 'italic', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['85px', '146px', '1693px', '50px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Observe las imágenes y escuche el audio para identificar si las palabras corresponden al singular o al plural.<span style=\"font-size: 30px;\"></span></p>',
                            id: 'ins_pedagCopy',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['86px', '196px', '1733px', '77px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Instrucción: forme parejas haciendo clic sobre cada una de las tarjetas Recuerde que cuenta con dos minutos y dos intentos para desarrollar esta actividad.</p>',
                            id: 'ins_tecnicaCopy',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['source-sans-pro, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'italic', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['85px', '65px', '1693px', '63px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px; line-height: 34px;\">​<span style=\"font-size: 30px;\"></span>En el aprendizaje de una lengua debemos reconocer cuando vemos una palabra, si se trata de una forma plural o singular, así como saber cuál es la forma contraria correspondiente.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px; line-height: 34px;\"><span style=\"font-size: 30px;\">​</span></p>',
                            id: 'contextoCopy',
                            textStyle: ['', '', '30px', '', 'none'],
                            align: 'left',
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'image',
                            id: 'vineta_lilaCopy',
                            rect: ['34px', '124px', '57px', '85px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.25', '0.25']],
                            fill: ['rgba(0,0,0,0)', 'images/vineta_lila2.png', '0px', '0px']
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
            "ficha": {
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
                            id: 'ficha',
                            rect: ['1627px', '207px', '120px', '119px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ficha.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '120px', '120px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    labels: {
                        "ficha_a": 500,
                        "ficha_b": 1000,
                        "ficha_c": 1500,
                        "ficha_d": 2000,
                        "ficha_e": 2500,
                        "ficha_f": 3000
                    },
                    data: [
                        [
                            "eid436",
                            "top",
                            500,
                            250,
                            "linear",
                            "${ficha}",
                            '10px',
                            '207px'
                        ],
                        [
                            "eid455",
                            "top",
                            2750,
                            250,
                            "linear",
                            "${ficha}",
                            '207px',
                            '10px'
                        ],
                        [
                            "eid412",
                            "left",
                            750,
                            250,
                            "linear",
                            "${ficha}",
                            '0px',
                            '38px'
                        ],
                        [
                            "eid413",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${ficha}",
                            '38px',
                            '383px'
                        ],
                        [
                            "eid442",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${ficha}",
                            '383px',
                            '1073px'
                        ],
                        [
                            "eid448",
                            "left",
                            2000,
                            500,
                            "linear",
                            "${ficha}",
                            '1073px',
                            '1592px'
                        ],
                        [
                            "eid454",
                            "left",
                            2500,
                            250,
                            "linear",
                            "${ficha}",
                            '1592px',
                            '1629px'
                        ],
                        [
                            "eid416",
                            "left",
                            2750,
                            250,
                            "linear",
                            "${ficha}",
                            '1629px',
                            '1627px'
                        ]
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
                            transform: [[], [], [], ['0.45', '0.45']],
                            id: 'V_HABLA',
                            type: 'image',
                            rect: ['-24px', '16px', '141px', '141px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/V_HABLA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_oral',
                            opacity: '0',
                            rect: ['0px', '-4px', '102px', '60px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(89,181,72,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['41px', '42px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(89,181,72,1.00)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy2',
                                text: '<p style=\"margin: 0px;\">​Producción</p><p style=\"margin: 0px;\">​oral</p>',
                                textStyle: ['', '', '23px', '', ''],
                                rect: ['8px', '6px', 'auto', 'auto', 'auto', 'auto']
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
                            transform: [[], [], [], ['0.45', '0.45']],
                            id: 'V_ESCUCHA',
                            type: 'image',
                            rect: ['-12px', '12px', '141px', '141px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/V_ESCUCHA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_auditiva',
                            opacity: '0',
                            rect: ['0px', '-9px', '117px', '60px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(89,181,72,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['48px', '42px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(89,181,72,1.00)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy',
                                text: '<p style=\"margin: 0px;\">​Comprensión</p><p style=\"margin: 0px;\">​auditiva</p>',
                                textStyle: ['', '', '23px', '', ''],
                                rect: ['7px', '6px', 'auto', 'auto', 'auto', 'auto']
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
                            type: 'image',
                            id: 'Skills',
                            rect: ['-122px', '-30px', '530px', '250px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/Skills.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            type: 'image',
                            id: 'B_ESCRITURA',
                            display: 'none',
                            rect: ['44px', '33px', '141px', '141px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/B_ESCRITURA.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.45', '0.45']],
                            type: 'image',
                            id: 'B_ESCUCHA',
                            display: 'none',
                            rect: ['100px', '14px', '141px', '141px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/B_ESCUCHA.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.45', '0.45']],
                            type: 'image',
                            id: 'B_HABLA',
                            display: 'none',
                            rect: ['157px', '35px', '141px', '141px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/B_HABLA.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            type: 'image',
                            id: 'B_LECTURA',
                            display: 'none',
                            rect: ['-12px', '14px', '141px', '141px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/B_LECTURA.png', '0px', '0px']
                        },
                        {
                            rect: ['62px', '16px', '102', '108', 'auto', 'auto'],
                            display: 'block',
                            symbolName: 'escrita',
                            id: 'escrita',
                            type: 'rect'
                        },
                        {
                            rect: ['181px', '19px', '102', '109', 'auto', 'auto'],
                            display: 'block',
                            symbolName: 'oral',
                            id: 'oral',
                            type: 'rect'
                        },
                        {
                            rect: ['0px', '0px', '117', '113', 'auto', 'auto'],
                            display: 'block',
                            symbolName: 'lectora',
                            id: 'lectora',
                            type: 'rect'
                        },
                        {
                            rect: ['112px', '2px', '117', '104', 'auto', 'auto'],
                            display: 'block',
                            symbolName: 'auditiva',
                            id: 'auditiva',
                            type: 'rect'
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
                            rect: [null, null, '283px', '157px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid50",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_HABLA}",
                            'none',
                            'none'
                        ],
                        [
                            "eid51",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_ESCUCHA}",
                            'none',
                            'none'
                        ],
                        [
                            "eid49",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_LECTURA}",
                            'none',
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
                            "eid52",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_ESCRITURA}",
                            'none',
                            'none'
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
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'V_LECTURA',
                            type: 'image',
                            rect: ['-12px', '15px', '140px', '140px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/V_LECTURA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_lectora',
                            opacity: '0',
                            rect: ['0px', '-13px', '117px', '60px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(89,181,72,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['48px', '42px', '20px', '20px', 'auto', 'auto'],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(89,181,72,1.00)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​Comprensión</p><p style=\"margin: 0px;\">​lectora</p>',
                                textStyle: ['', '', '23px', '', ''],
                                rect: ['7px', '6px', 'auto', 'auto', 'auto', 'auto']
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
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'V_ESCRITURA',
                            type: 'image',
                            rect: ['-18px', '17px', '141px', '141px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/V_ESCRITURA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_escrita',
                            opacity: '0',
                            rect: ['0px', '-4px', '102px', '60px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(89,181,72,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['41px', '42px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(89,181,72,1.00)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy3',
                                text: '<p style=\"margin: 0px;\">​Producción</p><p style=\"margin: 0px;\">​escrita</p>',
                                textStyle: ['', '', '23px', '', ''],
                                rect: ['8px', '6px', 'auto', 'auto', 'auto', 'auto']
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
