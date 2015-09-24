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
                scaleToFit: "none",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'texto_1_empuja_cont_1',
                            type: 'text',
                            rect: ['104px', '71px', '1673px', '30px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; line-height: 40px;\">​<span style=\"font-family: sena_icon; font-weight: 900; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(84, 53, 118); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">Z</span><span style=\"font-family: source-sans-pro, sans-serif; font-weight: 900; font-style: normal; text-decoration: none; font-size: 40px; color: rgb(84, 53, 118); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">&nbsp;</span>Las letras</p><p style=\"margin: 0px; line-height: 40px;\"><span style=\"font-family: source-sans-pro, sans-serif; font-weight: 900; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(106, 55, 137); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">2&nbsp;</span>Identifique el objeto cuyo nombre empieza con la letras m.</p><p style=\"margin: 0px; line-height: 40px;\">​</p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><span style=\"font-style: italic;\">&nbsp;Instruccion: Seleccione Ia imagen correcta. ​</span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'cont_1',
                            type: 'rect',
                            rect: ['0px', '239px', '1830px', '542px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: 'PICK_5',
                                symbolName: 'PICK_5',
                                type: 'rect',
                                rect: ['700px', '265px', '182', '182', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'PICK_6',
                                symbolName: 'PICK_6',
                                type: 'rect',
                                rect: ['1069px', '265px', '182', '182', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'PICK_4',
                                symbolName: 'PICK_4',
                                type: 'rect',
                                rect: ['331px', '265px', '182', '182', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'PICK_3',
                                symbolName: 'PICK_3',
                                type: 'rect',
                                rect: ['1069px', '33px', '181', '182', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'PICK_2',
                                symbolName: 'PICK_2',
                                type: 'rect',
                                rect: ['700px', '33px', '182', '182', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'PICK_1',
                                symbolName: 'PICK_1',
                                type: 'rect',
                                rect: ['331px', '33px', '182', '182', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'lupa_1',
                                symbolName: 'lupa',
                                type: 'rect',
                                rect: ['465px', '168px', '46', '46', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'lupa_2',
                                symbolName: 'lupa',
                                type: 'rect',
                                rect: ['834px', '168px', '46', '46', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'lupa_3',
                                symbolName: 'lupa',
                                type: 'rect',
                                rect: ['1203px', '168px', '46', '46', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'lupa_4',
                                symbolName: 'lupa',
                                type: 'rect',
                                rect: ['465px', '400px', '46', '46', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'lupa_5',
                                symbolName: 'lupa',
                                type: 'rect',
                                rect: ['834px', '400px', '46', '46', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'lupa_6',
                                symbolName: 'lupa',
                                type: 'rect',
                                rect: ['1203px', '400px', '46', '46', 'auto', 'auto'],
                                cursor: 'pointer'
                            }]
                        },
                        {
                            id: 'zoom_1',
                            symbolName: 'zoom_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'zoom_2',
                            symbolName: 'zoom_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'zoom_3',
                            symbolName: 'zoom_3',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'zoom_4',
                            symbolName: 'zoom_4',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'zoom_5',
                            symbolName: 'zoom_5',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'zoom_6',
                            symbolName: 'zoom_6',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', 'undefined', 'undefined', 'auto', 'auto']
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
                        [
                            "eid117",
                            "display",
                            0,
                            0,
                            "linear",
                            "${zoom_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid113",
                            "display",
                            0,
                            0,
                            "linear",
                            "${zoom_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid112",
                            "display",
                            0,
                            0,
                            "linear",
                            "${zoom_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid119",
                            "display",
                            0,
                            0,
                            "linear",
                            "${zoom_6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid116",
                            "display",
                            0,
                            0,
                            "linear",
                            "${zoom_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid118",
                            "display",
                            0,
                            0,
                            "linear",
                            "${zoom_5}",
                            'none',
                            'none'
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
                            rect: ['-5px', '-4px', '190px', '190px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            id: 'faro',
                            tag: 'img',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/faro.png', '0px', '0px']
                        },
                        {
                            rect: ['-5px', '-4px', '180px', '180px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            id: 'rec_lila',
                            stroke: [5, 'rgba(106,55,137,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['-10px', '-4px', '180px', '170px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            opacity: '0',
                            id: 'RoundRect',
                            stroke: [10, 'rgba(139,116,161,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '182px', '182px']
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
                            "eid77",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid76",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '1'
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
                            rect: ['-4px', '-3px', '189px', '189px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            id: 'mesa',
                            tag: 'img',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/mesa.png', '0px', '0px']
                        },
                        {
                            rect: ['-5px', '-4px', '180px', '180px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            id: 'rec_lila',
                            stroke: [5, 'rgba(106,55,137,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['-10px', '-4px', '180px', '170px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            opacity: '0',
                            id: 'RoundRect',
                            stroke: [10, 'rgba(139,116,161,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '182px', '182px']
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
                            "eid79",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${RoundRect}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid80",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '1'
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
                            rect: ['-5px', '-4px', '190px', '190px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            id: 'uva',
                            tag: 'img',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uva.png', '0px', '0px']
                        },
                        {
                            rect: ['-5px', '-4px', '180px', '180px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            id: 'rec_lila',
                            stroke: [5, 'rgba(106,55,137,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['-10px', '-4px', '180px', '170px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            opacity: '0',
                            id: 'RoundRectCopy',
                            stroke: [10, 'rgba(139,116,161,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '181px', '182px']
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
                            "eid81",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${RoundRectCopy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid82",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${RoundRectCopy}",
                            '1',
                            '1'
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
                            rect: ['-4px', '-4px', '189px', '189px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            id: 'arbol',
                            tag: 'img',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/arbol.png', '0px', '0px']
                        },
                        {
                            rect: ['-5px', '-4px', '180px', '180px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            id: 'rec_lila',
                            stroke: [5, 'rgba(106,55,137,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['-10px', '-5px', '180px', '170px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            opacity: '0',
                            id: 'RoundRectCopy2',
                            stroke: [10, 'rgba(139,116,161,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '182px', '182px']
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
                            "eid83",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${RoundRectCopy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid84",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${RoundRectCopy2}",
                            '1',
                            '1'
                        ]
                    ]
                }
            },
            "PICK_5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-5px', '-4px', '190px', '190px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            id: 'dedo',
                            tag: 'img',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/dedo.png', '0px', '0px']
                        },
                        {
                            rect: ['-5px', '-4px', '180px', '180px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            id: 'rec_lilaCopy3',
                            stroke: [5, 'rgba(106,55,137,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['-10px', '-4px', '180px', '170px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            opacity: '0',
                            id: 'RoundRectCopy3',
                            stroke: [10, 'rgba(139,116,161,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '182px', '182px']
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
                            "eid85",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${RoundRectCopy3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid86",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${RoundRectCopy3}",
                            '1',
                            '1'
                        ]
                    ]
                }
            },
            "PICK_6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-5px', '-4px', '190px', '190px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            id: 'burro',
                            tag: 'img',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/burro.png', '0px', '0px']
                        },
                        {
                            rect: ['-5px', '-4px', '180px', '180px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            id: 'rec_lila',
                            stroke: [5, 'rgba(106,55,137,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['-10px', '-4px', '180px', '170px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            opacity: '0',
                            id: 'RoundRectCopy5',
                            stroke: [10, 'rgba(139,116,161,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '182px', '182px']
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
                            "eid89",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${RoundRectCopy5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid90",
                            "opacity",
                            500,
                            0,
                            "linear",
                            "${RoundRectCopy5}",
                            '1',
                            '1'
                        ]
                    ]
                }
            },
            "cerrar_lupa": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '44px', '44px', 'auto', 'auto'],
                            borderRadius: ['7px', '7px', '7px', '7px 7px'],
                            id: 'RoundRect3',
                            stroke: [1, 'rgba(255,255,255,0.20)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(25,25,25,0.43)']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '0px', '46px', '46px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​A</p>',
                            id: 'TX_lupa',
                            textStyle: ['', '', '50px', '', 'none'],
                            align: 'center',
                            font: ['sena_icon', [37, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '46px', '46px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid333",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${RoundRect3}",
                            'rgba(25,25,25,0.43)',
                            'rgba(25,25,25,0.43)'
                        ]
                    ]
                }
            },
            "zoom_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1830px', '776px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '30px', '30px 30px'],
                            id: 'Zona_clic',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.50)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Zoom',
                            stroke: [3, 'rgba(159,103,194,0.78)', 'solid'],
                            rect: ['612px', '87px', '600px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ['rgba(106,55,137,1.00)'],
                            c: [
                            {
                                rect: ['-2px', '-3px', '605px', '605px', 'auto', 'auto'],
                                id: 'faro2',
                                fill: ['rgba(0,0,0,0)', 'images/faro.png', '0px', '0px'],
                                type: 'image',
                                tag: 'img'
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'cerrar_lupa',
                            symbolName: 'cerrar_lupa',
                            cursor: 'pointer',
                            rect: ['1169px', '644px', null, null, 'auto', 'auto']
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
            "lupa": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '44px', '44px', 'auto', 'auto'],
                            borderRadius: ['13px', '13px', '13px', '13px 13px'],
                            id: 'RoundRect3',
                            stroke: [1, 'rgba(255,255,255,0.20)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(25,25,25,0.43)']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '0px', '46px', '46px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​A</p>',
                            id: 'TX_lupa',
                            textStyle: ['', '', '50px', '', 'none'],
                            align: 'center',
                            font: ['sena_icon', [37, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '46px', '46px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid333",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${RoundRect3}",
                            'rgba(25,25,25,0.43)',
                            'rgba(25,25,25,0.43)'
                        ]
                    ]
                }
            },
            "zoom_2": {
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
                            borderRadius: ['0px', '0px', '30px 30px', '30px 30px'],
                            id: 'Zona_clic',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.50)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Zoom',
                            stroke: [3, 'rgba(159,103,194,0.78)', 'solid'],
                            rect: ['612px', '87px', '600px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ['rgba(106,55,137,1.00)'],
                            c: [
                            {
                                rect: ['-3px', '-3px', '605px', '605px', 'auto', 'auto'],
                                overflow: 'visible',
                                id: 'mesa2',
                                fill: ['rgba(0,0,0,0)', 'images/mesa.png', '0px', '0px'],
                                type: 'image',
                                tag: 'img'
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'cerrar_lupa',
                            symbolName: 'cerrar_lupa',
                            cursor: 'pointer',
                            rect: ['1169px', '644px', null, null, 'auto', 'auto']
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
            "zoom_3": {
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
                            borderRadius: ['0px', '0px', '30px', '30px 30px'],
                            id: 'Zona_clic',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.50)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Zoom',
                            stroke: [3, 'rgba(159,103,194,0.78)', 'solid'],
                            rect: ['612px', '87px', '600px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ['rgba(106,55,137,1.00)'],
                            c: [
                            {
                                rect: ['-4px', '-3px', '605px', '605px', 'auto', 'auto'],
                                id: 'uva',
                                fill: ['rgba(0,0,0,0)', 'images/uva.png', '0px', '0px'],
                                type: 'image',
                                tag: 'img'
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'cerrar_lupa',
                            symbolName: 'cerrar_lupa',
                            cursor: 'pointer',
                            rect: ['1169px', '644px', null, null, 'auto', 'auto']
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
            "zoom_4": {
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
                            borderRadius: ['0px', '0px', '30px', '30px 30px'],
                            id: 'Zona_clic',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.50)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Zoom',
                            stroke: [3, 'rgba(159,103,194,0.78)', 'solid'],
                            rect: ['612px', '87px', '600px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ['rgba(106,55,137,1.00)'],
                            c: [
                            {
                                rect: ['-2px', '-3px', '605px', '605px', 'auto', 'auto'],
                                id: 'faro2',
                                fill: ['rgba(0,0,0,0)', 'images/arbol.png', '0px', '0px'],
                                type: 'image',
                                tag: 'img'
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'cerrar_lupa',
                            symbolName: 'cerrar_lupa',
                            cursor: 'pointer',
                            rect: ['1169px', '644px', null, null, 'auto', 'auto']
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
            "zoom_5": {
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
                            borderRadius: ['0px', '0px', '30px', '30px 30px'],
                            id: 'Zona_clic',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.50)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Zoom',
                            stroke: [3, 'rgba(159,103,194,0.78)', 'solid'],
                            rect: ['612px', '87px', '600px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ['rgba(106,55,137,1.00)'],
                            c: [
                            {
                                rect: ['-3px', '-3px', '605px', '605px', 'auto', 'auto'],
                                overflow: 'visible',
                                id: 'mesa2',
                                fill: ['rgba(0,0,0,0)', 'images/dedo.png', '0px', '0px'],
                                type: 'image',
                                tag: 'img'
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'cerrar_lupa',
                            symbolName: 'cerrar_lupa',
                            cursor: 'pointer',
                            rect: ['1169px', '644px', null, null, 'auto', 'auto']
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
            "zoom_6": {
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
                            borderRadius: ['0px', '0px', '30px', '30px 30px'],
                            id: 'Zona_clic',
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.50)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Zoom',
                            stroke: [3, 'rgba(159,103,194,0.78)', 'solid'],
                            rect: ['612px', '87px', '600px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ['rgba(106,55,137,1.00)'],
                            c: [
                            {
                                rect: ['-4px', '-3px', '605px', '605px', 'auto', 'auto'],
                                id: 'uva',
                                fill: ['rgba(0,0,0,0)', 'images/burro.png', '0px', '0px'],
                                type: 'image',
                                tag: 'img'
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'cerrar_lupa',
                            symbolName: 'cerrar_lupa',
                            cursor: 'pointer',
                            rect: ['1169px', '644px', null, null, 'auto', 'auto']
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("esn1le01ob01r6pre2_edgeActions.js");
})("EDGE-17298671");
