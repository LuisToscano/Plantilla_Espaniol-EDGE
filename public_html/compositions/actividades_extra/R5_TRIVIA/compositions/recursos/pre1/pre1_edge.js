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
            js+"pickManyUtilities.js",
            js+"interactionUtilities.js",
            js+"utility.js",
            js+"audioUtilities.js"
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
                            id: 'RoundRect2',
                            type: 'rect',
                            rect: ['355px', '302px', '1084px', '343px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(106,55,137,0.30)"],
                            stroke: [5,"rgb(106, 55, 137)","none"]
                        },
                        {
                            id: 'RoundRect2Copy',
                            type: 'rect',
                            rect: ['853px', '356px', '324px', '239px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(255,255,255,0.68)"],
                            stroke: [5,"rgb(106, 55, 137)","none"]
                        },
                        {
                            id: 'Text2Copy2',
                            type: 'text',
                            rect: ['85px', '146px', '1693px', '75px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 30px;\">Identificar una palabra y relacionarla con una imagen, permite construir en la memoria un conjunto de asociaciones que facilitan la lectura y producción oral.&nbsp;</span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text2Copy',
                            type: 'text',
                            rect: ['86px', '238px', '1733px', '30px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Instrucción: haga clic sobre el ícono del audio para escuchar el deletreo de cada objeto.</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none", "italic", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['85px', '65px', '1693px', '63px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; line-height: 34px;\">​<span style=\"font-size: 30px;\">Es importante conseguir el dominio y seguridad para reconocer las letras y por supuesto, las palabras. Identificar grafemas mejora la fluidez en la comunicación escrita y la ortografía. Saber qué fonemas tiene una lengua mejora la pronunciación.&nbsp;​&nbsp;</span></p><p style=\"margin: 0px; line-height: 34px;\"><span style=\"font-size: 30px;\">​</span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "30px", "", "none"]
                        },
                        {
                            id: 'burro_R',
                            type: 'rect',
                            rect: ['396px', '330px', '280px', '280px', 'auto', 'auto'],
                            overflow: 'hidden',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [5,"rgba(106,55,137,1.00)","solid"],
                            c: [
                            {
                                id: 'burro',
                                type: 'image',
                                rect: ['-10px', '-10px', '300px', '300px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"burro.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'Skills',
                            symbolName: 'Skills',
                            type: 'rect',
                            rect: ['5px', '611px', '283', '157', 'auto', 'auto']
                        },
                        {
                            id: 'audio_1',
                            symbolName: 'audio_1',
                            type: 'rect',
                            rect: ['737px', '455px', '70', '40', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'vineta_lila',
                            type: 'image',
                            rect: ['34px', '124px', '57px', '85px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"vineta_lila.png",'0px','0px'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'Text2Copy4',
                            type: 'text',
                            rect: ['946px', '376px', '209px', '201px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\">burro​</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\">mesa​</p><p style=\"margin: 0px;\">uva</p><p style=\"margin: 0px;\">​dedo</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "50px", "", "none"]
                        },
                        {
                            id: 'PICK_1',
                            symbolName: 'PICK_1',
                            type: 'rect',
                            rect: ['909px', '392px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'PICK_2',
                            symbolName: 'PICK_2',
                            type: 'rect',
                            rect: ['909px', '442px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'PICK_3',
                            symbolName: 'PICK_3',
                            type: 'rect',
                            rect: ['909px', '491px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'PICK_4',
                            symbolName: 'PICK_4',
                            type: 'rect',
                            rect: ['909px', '541px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
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
                    duration: 1634.583,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "TIMER_CONTAINER": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '161px', '31px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'text',
                            rect: ['18px', '3px', '128px', '31px', 'auto', 'auto'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​TIMER</p>',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '161px', '34px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "10": 250
                    },
                    data: [
                        [
                            "eid46",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${Rectangle}",
                            'rgba(192,192,192,1)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid47",
                            "background-color",
                            250,
                            250,
                            "linear",
                            "${Rectangle}",
                            'rgba(255,0,0,1.00)',
                            'rgba(192,192,192,1)'
                        ],
                        [
                            "eid51",
                            "color",
                            0,
                            250,
                            "linear",
                            "${Text}",
                            'rgba(0,0,0,1)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid52",
                            "color",
                            250,
                            250,
                            "linear",
                            "${Text}",
                            'rgba(255,255,255,1.00)',
                            'rgba(0,0,0,1)'
                        ]
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
                            rect: ['-24px', '3px', '213px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]],
                            c: [
                            {
                                rect: ['60px', '0px', '94px', '31px', 'auto', 'auto'],
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
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "PICK_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '16px', '16px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(255,255,255,1.00)'],
                            id: 'Ellipse',
                            stroke: [2, 'rgba(153,149,150,1.00)', 'solid'],
                            type: 'ellipse',
                            boxShadow: ['inset', 0, 0, 4, 0, 'rgba(106,55,137,0.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2Copy2',
                            opacity: '0',
                            rect: ['4px', '4px', '12px', '12px', 'auto', 'auto'],
                            fill: ['rgba(106,55,137,1.00)', [349, [['rgba(148,107,192,1.00)', 0], ['rgba(86,44,111,1.00)', 46]]]],
                            stroke: [0, 'rgb(164, 160, 161)', 'solid'],
                            boxShadow: ['', 0, 0, 3, 0, 'rgba(0,0,0,0.65098)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '20px', '20px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "seleccionado": 250,
                        "hover": 500
                    },
                    data: [
                        [
                            "eid154",
                            "boxShadow.blur",
                            0,
                            250,
                            "linear",
                            "${Ellipse}",
                            '4px',
                            '6px'
                        ],
                        [
                            "eid174",
                            "boxShadow.blur",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            '6px',
                            '6px'
                        ],
                        [
                            "eid166",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Ellipse2Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid164",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${Ellipse2Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid153",
                            "boxShadow.color",
                            0,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(106,55,137,0.00)',
                            'rgba(106,55,137,0.843137)'
                        ],
                        [
                            "eid173",
                            "boxShadow.color",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            'rgba(106,55,137,0.843137)',
                            'rgba(106,55,137,0.843137)'
                        ]
                    ]
                }
            },
            "PICK_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '16px', '16px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(255,255,255,1.00)'],
                            id: 'Ellipse',
                            stroke: [2, 'rgba(153,149,150,1.00)', 'solid'],
                            type: 'ellipse',
                            boxShadow: ['inset', 0, 0, 4, 0, 'rgba(106,55,137,0.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2Copy2',
                            opacity: '0',
                            rect: ['4px', '4px', '12px', '12px', 'auto', 'auto'],
                            fill: ['rgba(106,55,137,1.00)', [349, [['rgba(148,107,192,1.00)', 0], ['rgba(86,44,111,1.00)', 46]]]],
                            stroke: [0, 'rgb(164, 160, 161)', 'solid'],
                            boxShadow: ['', 0, 0, 3, 0, 'rgba(0,0,0,0.65098)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '20px', '20px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "seleccionado": 250,
                        "hover": 500
                    },
                    data: [
                        [
                            "eid154",
                            "boxShadow.blur",
                            0,
                            250,
                            "linear",
                            "${Ellipse}",
                            '4px',
                            '6px'
                        ],
                        [
                            "eid174",
                            "boxShadow.blur",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            '6px',
                            '6px'
                        ],
                        [
                            "eid166",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Ellipse2Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid164",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${Ellipse2Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid153",
                            "boxShadow.color",
                            0,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(106,55,137,0.00)',
                            'rgba(106,55,137,0.843137)'
                        ],
                        [
                            "eid173",
                            "boxShadow.color",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            'rgba(106,55,137,0.843137)',
                            'rgba(106,55,137,0.843137)'
                        ]
                    ]
                }
            },
            "PICK_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '16px', '16px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(255,255,255,1.00)'],
                            id: 'Ellipse',
                            stroke: [2, 'rgba(153,149,150,1.00)', 'solid'],
                            type: 'ellipse',
                            boxShadow: ['inset', 0, 0, 4, 0, 'rgba(106,55,137,0.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2Copy2',
                            opacity: '0',
                            rect: ['4px', '4px', '12px', '12px', 'auto', 'auto'],
                            fill: ['rgba(106,55,137,1.00)', [349, [['rgba(148,107,192,1.00)', 0], ['rgba(86,44,111,1.00)', 46]]]],
                            stroke: [0, 'rgb(164, 160, 161)', 'solid'],
                            boxShadow: ['', 0, 0, 3, 0, 'rgba(0,0,0,0.65098)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '20px', '20px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "seleccionado": 250,
                        "hover": 500
                    },
                    data: [
                        [
                            "eid154",
                            "boxShadow.blur",
                            0,
                            250,
                            "linear",
                            "${Ellipse}",
                            '4px',
                            '6px'
                        ],
                        [
                            "eid174",
                            "boxShadow.blur",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            '6px',
                            '6px'
                        ],
                        [
                            "eid166",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Ellipse2Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid164",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${Ellipse2Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid153",
                            "boxShadow.color",
                            0,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(106,55,137,0.00)',
                            'rgba(106,55,137,0.843137)'
                        ],
                        [
                            "eid173",
                            "boxShadow.color",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            'rgba(106,55,137,0.843137)',
                            'rgba(106,55,137,0.843137)'
                        ]
                    ]
                }
            },
            "PICK_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '16px', '16px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(255,255,255,1.00)'],
                            id: 'Ellipse',
                            stroke: [2, 'rgba(153,149,150,1.00)', 'solid'],
                            type: 'ellipse',
                            boxShadow: ['inset', 0, 0, 4, 0, 'rgba(106,55,137,0.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2Copy2',
                            opacity: '0',
                            rect: ['4px', '4px', '12px', '12px', 'auto', 'auto'],
                            fill: ['rgba(106,55,137,1.00)', [349, [['rgba(148,107,192,1.00)', 0], ['rgba(86,44,111,1.00)', 46]]]],
                            stroke: [0, 'rgb(164, 160, 161)', 'solid'],
                            boxShadow: ['', 0, 0, 3, 0, 'rgba(0,0,0,0.65098)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '20px', '20px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "seleccionado": 250,
                        "hover": 500
                    },
                    data: [
                        [
                            "eid154",
                            "boxShadow.blur",
                            0,
                            250,
                            "linear",
                            "${Ellipse}",
                            '4px',
                            '6px'
                        ],
                        [
                            "eid174",
                            "boxShadow.blur",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            '6px',
                            '6px'
                        ],
                        [
                            "eid166",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Ellipse2Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid164",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${Ellipse2Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid153",
                            "boxShadow.color",
                            0,
                            250,
                            "linear",
                            "${Ellipse}",
                            'rgba(106,55,137,0.00)',
                            'rgba(106,55,137,0.843137)'
                        ],
                        [
                            "eid173",
                            "boxShadow.color",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            'rgba(106,55,137,0.843137)',
                            'rgba(106,55,137,0.843137)'
                        ]
                    ]
                }
            },
            "SIG_2": {
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
                            rect: ['0px', '0px', '83px', '90px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '83px', '90px']
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
                            rect: ['-24px', '16px', '141px', '141px', 'auto', 'auto'],
                            id: 'V_HABLA',
                            transform: [[], [], [], ['0.45', '0.45']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/V_HABLA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_oral',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '-4px', '102px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(89,181,72,1.00)'],
                            c: [
                            {
                                rect: ['41px', '42px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'RectangleCopy2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(89,181,72,1.00)']
                            },
                            {
                                rect: ['8px', '6px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                text: '<p style=\"margin: 0px;\">​Producción</p><p style=\"margin: 0px;\">​oral</p>',
                                id: 'TextCopy2',
                                textStyle: ['', '', '23px', '', ''],
                                align: 'center',
                                type: 'text'
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
                            rect: ['-12px', '12px', '141px', '141px', 'auto', 'auto'],
                            id: 'V_ESCUCHA',
                            transform: [[], [], [], ['0.45', '0.45']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/V_ESCUCHA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_auditiva',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '-9px', '117px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(89,181,72,1.00)'],
                            c: [
                            {
                                rect: ['48px', '42px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'RectangleCopy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(89,181,72,1.00)']
                            },
                            {
                                rect: ['7px', '6px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                text: '<p style=\"margin: 0px;\">​Comprensión</p><p style=\"margin: 0px;\">​auditiva</p>',
                                id: 'TextCopy',
                                textStyle: ['', '', '23px', '', ''],
                                align: 'center',
                                type: 'text'
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
                            type: 'image',
                            transform: [[], [], [], ['0.5', '0.5']],
                            display: 'block',
                            rect: ['44px', '33px', '141px', '141px', 'auto', 'auto'],
                            id: 'B_ESCRITURA',
                            fill: ['rgba(0,0,0,0)', 'images/B_ESCRITURA.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['0.45', '0.45']],
                            display: 'none',
                            rect: ['100px', '14px', '141px', '141px', 'auto', 'auto'],
                            id: 'B_ESCUCHA',
                            fill: ['rgba(0,0,0,0)', 'images/B_ESCUCHA.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['0.45', '0.45']],
                            display: 'block',
                            rect: ['157px', '35px', '141px', '141px', 'auto', 'auto'],
                            id: 'B_HABLA',
                            fill: ['rgba(0,0,0,0)', 'images/B_HABLA.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['0.5', '0.5']],
                            display: 'block',
                            rect: ['-12px', '14px', '141px', '141px', 'auto', 'auto'],
                            id: 'B_LECTURA',
                            fill: ['rgba(0,0,0,0)', 'images/B_LECTURA.png', '0px', '0px']
                        },
                        {
                            rect: ['62px', '16px', '102', '108', 'auto', 'auto'],
                            id: 'escrita',
                            symbolName: 'escrita',
                            type: 'rect',
                            display: 'none'
                        },
                        {
                            rect: ['181px', '19px', '102', '109', 'auto', 'auto'],
                            id: 'oral',
                            symbolName: 'oral',
                            type: 'rect',
                            display: 'none'
                        },
                        {
                            rect: ['0px', '0px', '117', '113', 'auto', 'auto'],
                            id: 'lectora',
                            symbolName: 'lectora',
                            type: 'rect',
                            display: 'none'
                        },
                        {
                            rect: ['112px', '2px', '117', '104', 'auto', 'auto'],
                            id: 'auditiva',
                            symbolName: 'auditiva',
                            type: 'rect',
                            display: 'block'
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
                            'block',
                            'block'
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
                            "eid48",
                            "display",
                            0,
                            0,
                            "linear",
                            "${escrita}",
                            'none',
                            'none'
                        ],
                        [
                            "eid52",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_ESCRITURA}",
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
                            rect: ['-12px', '15px', '140px', '140px', 'auto', 'auto'],
                            id: 'V_LECTURA',
                            transform: [[], [], [], ['0.5', '0.5']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/V_LECTURA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_lectora',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '-13px', '117px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(89,181,72,1.00)'],
                            c: [
                            {
                                rect: ['48px', '42px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(89,181,72,1.00)']
                            },
                            {
                                rect: ['7px', '6px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                text: '<p style=\"margin: 0px;\">​Comprensión</p><p style=\"margin: 0px;\">​lectora</p>',
                                id: 'Text',
                                textStyle: ['', '', '23px', '', ''],
                                align: 'center',
                                type: 'text'
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
                            rect: ['-18px', '17px', '141px', '141px', 'auto', 'auto'],
                            id: 'V_ESCRITURA',
                            transform: [[], [], [], ['0.5', '0.5']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/V_ESCRITURA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_escrita',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '-4px', '102px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(89,181,72,1.00)'],
                            c: [
                            {
                                rect: ['41px', '42px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'RectangleCopy3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(89,181,72,1.00)']
                            },
                            {
                                rect: ['8px', '6px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                text: '<p style=\"margin: 0px;\">​Producción</p><p style=\"margin: 0px;\">​escrita</p>',
                                id: 'TextCopy3',
                                textStyle: ['', '', '23px', '', ''],
                                align: 'center',
                                type: 'text'
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
                            source: ['media/burroesn1le01ob01re5au01.mp3'],
                            id: 'audiomp3_1',
                            rect: ['65', '58', '320px', '45px', 'auto', 'auto'],
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
                    duration: 1634.583,
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
                            [ "eid196", "trigger", 125, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audiomp3_1}', [] ] ]
                    ]
                }
            },
            "TIMER_CONTAINER_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '96px', '96px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse4',
                            stroke: [2, 'rgba(0,0,0,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2',
                            stroke: [1, 'rgb(0, 0, 0)', 'dashed'],
                            rect: ['7px', '6px', '85px', '85px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ['rgba(255,215,0,0.86)'],
                            c: [
                            {
                                rect: ['42px', '43px', '95px', '36px', 'auto', 'auto'],
                                transform: [[], [], ['62'], [1, 1, 1]],
                                id: 'Rectangle2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['10px', '30px', '64px', '26px', 'auto', 'auto'],
                                borderRadius: ['5px', '5px', '5px', '5px 5px'],
                                id: 'RoundRect',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,255,255,0.79)']
                            }]
                        },
                        {
                            type: 'text',
                            rect: ['18px', '38px', '64px', '26px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​timer</p>',
                            id: 'Text',
                            textStyle: ['', '', '23px', '', 'none'],
                            align: 'center',
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '600', 'none', 'normal', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '213px', '100px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: true,
                    labels: {
                        "alerta": 2000
                    },
                    data: [
                        [
                            "eid6",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${Ellipse2}",
                            'rgba(34,156,0,0.8627)',
                            'rgba(255,215,0,0.86)'
                        ],
                        [
                            "eid7",
                            "background-color",
                            500,
                            500,
                            "linear",
                            "${Ellipse2}",
                            'rgba(255,215,0,0.86)',
                            'rgba(34,156,0,0.8627)'
                        ],
                        [
                            "eid12",
                            "background-color",
                            2000,
                            250,
                            "linear",
                            "${Ellipse2}",
                            'rgba(255,0,0,0.86)',
                            'rgba(255,215,0,0.86)'
                        ],
                        [
                            "eid78",
                            "background-color",
                            2250,
                            250,
                            "linear",
                            "${Ellipse2}",
                            'rgba(255,215,0,0.8627)',
                            'rgba(255,0,0,0.86)'
                        ],
                        [
                            "eid20",
                            "rotateZ",
                            0,
                            1000,
                            "linear",
                            "${Rectangle2}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid26",
                            "rotateZ",
                            2000,
                            500,
                            "linear",
                            "${Rectangle2}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid28",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid242",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid243",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid244",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid245",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid246",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${Rectangle2}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("pre1_edgeActions.js");
})("EDGE-17298671");
