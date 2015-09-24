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
            'sena_icon': '<link rel=\"stylesheet\" href=\"css/stylesheet.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\" />',
                  },
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
                            id: 'texto_1_empuja_cont_1',
                            type: 'text',
                            rect: ['104px', '71px', '1664px', '30px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; line-height: 40px;\">​<span style=\"font-family: sena_icon; font-weight: 900; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(84, 53, 118); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">Z</span><span style=\"font-family: source-sans-pro, sans-serif; font-weight: 900; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(84, 53, 118); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">&nbsp;</span><span style=\"font-size: 30px;\">Las consonantes</span></p><p style=\"margin: 0px; line-height: 40px;\"><span style=\"font-family: source-sans-pro, sans-serif; font-weight: 900; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(106, 55, 137); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">5</span><span style=\"font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">&nbsp;&nbsp;</span><span style=\"font-size: 30px;\">Identifique las consonantes que tiene la palabra tomate</span></p><p style=\"margin: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\">​</span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-style: italic;\">Instrucción: seleccione la respuesta correcta. Tiene distractores.</span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><br></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'cont_1',
                            type: 'rect',
                            rect: ['0px', '255px', '1830px', '530px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: 'texto_2',
                                type: 'text',
                                rect: ['755px', '26px', '441px', '239px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(51, 51, 51);\">t, n, t.</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(51, 51, 51);\">t, m, d.</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(51, 51, 51);\">t, m, t.</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(51, 51, 51);\">d, m, t.</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"color: rgb(51, 51, 51);\">​</span></p><p style=\"margin:0px\">​</p><p style=\"margin:0px\">​</p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "40px", "", "none"]
                            },
                            {
                                id: 'PICK_1',
                                symbolName: 'PICK_1',
                                type: 'rect',
                                rect: ['724px', '42px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'PICK_2',
                                symbolName: 'PICK_2',
                                type: 'rect',
                                rect: ['724px', '81px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'PICK_3',
                                symbolName: 'PICK_3',
                                type: 'rect',
                                rect: ['724px', '121px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'PICK_4',
                                symbolName: 'PICK_4',
                                type: 'rect',
                                rect: ['724px', '162px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
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
                    duration: 500,
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
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '161px', '31px', 'auto', 'auto'],
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
            "btn_audio": {
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
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text',
                                id: 'Text',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Escucha</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                rect: ['190px', '1px', '94px', '31px', 'auto', 'auto']
                            }]
                        },
                        {
                            id: 'BTN-tools-ES',
                            type: 'image',
                            rect: ['65px', '7px', '7%', '18px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/BTN-tools-ES.png', '0px', '0px']
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
                            boxShadow: ['inset', 0, 0, 4, 0, 'rgba(106,55,137,0.00)'],
                            id: 'Ellipse',
                            stroke: [2, 'rgba(153,149,150,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2Copy2',
                            opacity: '0',
                            rect: ['3px', '3px', '12px', '12px', 'auto', 'auto'],
                            boxShadow: ['', 0, 0, 3, 0, 'rgba(0,0,0,0.65098)'],
                            stroke: [1, 'rgba(106,55,137,1.00)', 'solid'],
                            fill: ['rgba(106,55,137,1.00)', [349, [['rgba(148,107,192,1.00)', 0], ['rgba(86,44,111,1.00)', 46]]]]
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
                            boxShadow: ['inset', 0, 0, 4, 0, 'rgba(106,55,137,0.00)'],
                            id: 'Ellipse',
                            stroke: [2, 'rgba(153,149,150,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2Copy2',
                            opacity: '0',
                            rect: ['3px', '3px', '12px', '12px', 'auto', 'auto'],
                            boxShadow: ['', 0, 0, 3, 0, 'rgba(0,0,0,0.65098)'],
                            stroke: [1, 'rgba(106,55,137,1.00)', 'solid'],
                            fill: ['rgba(106,55,137,1.00)', [349, [['rgba(148,107,192,1.00)', 0], ['rgba(86,44,111,1.00)', 46]]]]
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
                            boxShadow: ['inset', 0, 0, 4, 0, 'rgba(106,55,137,0.00)'],
                            id: 'Ellipse',
                            stroke: [2, 'rgba(153,149,150,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2Copy2',
                            opacity: '0',
                            rect: ['3px', '3px', '12px', '12px', 'auto', 'auto'],
                            boxShadow: ['', 0, 0, 3, 0, 'rgba(0,0,0,0.65098)'],
                            stroke: [1, 'rgba(106,55,137,1.00)', 'solid'],
                            fill: ['rgba(106,55,137,1.00)', [349, [['rgba(148,107,192,1.00)', 0], ['rgba(86,44,111,1.00)', 46]]]]
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
                            boxShadow: ['inset', 0, 0, 4, 0, 'rgba(106,55,137,0.00)'],
                            id: 'Ellipse',
                            stroke: [2, 'rgba(153,149,150,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2Copy2',
                            opacity: '0',
                            rect: ['3px', '3px', '12px', '12px', 'auto', 'auto'],
                            boxShadow: ['', 0, 0, 3, 0, 'rgba(0,0,0,0.65098)'],
                            stroke: [1, 'rgba(106,55,137,1.00)', 'solid'],
                            fill: ['rgba(106,55,137,1.00)', [349, [['rgba(148,107,192,1.00)', 0], ['rgba(86,44,111,1.00)', 46]]]]
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
            "margenes": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['104px', '164px', '18px', '38px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(106,55,137,1.00)', '700', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'TextCopy',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​1</p>',
                            type: 'text'
                        },
                        {
                            rect: ['84px', '48px', '57px', '85px', 'auto', 'auto'],
                            id: 'vineta_lila',
                            transform: [[], [], [], ['0.25', '0.25']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/vineta_lila22.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['1px', '0px', '266px', '80px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '80px', '104px', '127px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['120px', '80px', '18px', '127px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '267px', '207px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("esn1le01ob01r6pre5_edgeActions.js");
})("EDGE-17298671");
