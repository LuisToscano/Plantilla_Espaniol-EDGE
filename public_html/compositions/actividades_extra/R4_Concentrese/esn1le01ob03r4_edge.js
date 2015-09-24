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
            js+"jquery-ui-1.10.4.custom.js",
            js+"jquery-ui-1.10.4.custom.min.js",
            js+"main.js",
            js+"timerUtilities.js",
            js+"utility.js"
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
                            id: 'carta_1_A',
                            symbolName: 'carta_1_A',
                            type: 'rect',
                            rect: ['1186px', '269px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'carta_1_B',
                            symbolName: 'carta_1_B',
                            type: 'rect',
                            rect: ['1407px', '269px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'carta_3_A',
                            symbolName: 'carta_1_C',
                            type: 'rect',
                            rect: ['1186px', '489px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'carta_3_B',
                            symbolName: 'carta_2_C',
                            type: 'rect',
                            rect: ['525px', '269px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'carta_4_A',
                            symbolName: 'carta_1_D',
                            type: 'rect',
                            rect: ['745px', '269px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'carta_4_B',
                            symbolName: 'carta_2_D',
                            type: 'rect',
                            rect: ['745px', '489px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'carta_5_A',
                            symbolName: 'carta_1_E',
                            type: 'rect',
                            rect: ['304px', '489px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'carta_5_B',
                            symbolName: 'carta_2_E',
                            type: 'rect',
                            rect: ['966px', '269px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'carta_6_A',
                            symbolName: 'carta_1_F',
                            type: 'rect',
                            rect: ['304px', '269px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'carta_6_B',
                            symbolName: 'carta_2_F',
                            type: 'rect',
                            rect: ['1407px', '489px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'carta_2_A',
                            symbolName: 'carta_2_A',
                            type: 'rect',
                            rect: ['966px', '489px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'carta_2_B',
                            symbolName: 'carta_2_B',
                            type: 'rect',
                            rect: ['525px', '489px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'TIMER_CONTAINER',
                            symbolName: 'testBtn',
                            type: 'rect',
                            rect: ['78px', '451px', '228', '56', 'auto', 'auto']
                        },
                        {
                            id: 'text_inst1',
                            type: 'text',
                            rect: ['85px', '66px', '1690px', '73px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; line-height: 34px;\">​<span style=\"color: rgb(51, 51, 51);\"></span>Los sustantivos son palabras que sirven para nombrar las entidades del mundo. Pueden ser masculinos o femeninos.</p><p style=\"margin: 0px;\">​</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "29px", "", "none"]
                        },
                        {
                            id: 'text_inst2',
                            type: 'text',
                            rect: ['85px', '113px', '1690px', '30px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 30px;\">Identifique los sustantivos femeninos y masculinos.</span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'vineta_lila3',
                            type: 'image',
                            tag: 'img',
                            rect: ['34px', '93px', '57px', '85px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"vineta_lila3.png",'0px','0px'],
                            transform: [[],[],[],['0.3','0.3']]
                        },
                        {
                            id: 'text_inst3',
                            type: 'text',
                            rect: ['85px', '159px', '1690px', '30px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 30px;\">Instrucción: forme parejas haciendo clic sobre cada una de las tarjetas. Tiene dos intentos.&nbsp;</span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "italic", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Skills',
                            symbolName: 'Skills',
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
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid154",
                            "top",
                            250,
                            0,
                            "linear",
                            "${carta_5_A}",
                            '489px',
                            '489px'
                        ],
                        [
                            "eid142",
                            "top",
                            250,
                            0,
                            "linear",
                            "${carta_1_B}",
                            '269px',
                            '269px'
                        ],
                        [
                            "eid148",
                            "top",
                            250,
                            0,
                            "linear",
                            "${carta_2_A}",
                            '489px',
                            '489px'
                        ],
                        [
                            "eid139",
                            "left",
                            250,
                            0,
                            "linear",
                            "${carta_4_A}",
                            '745px',
                            '745px'
                        ],
                        [
                            "eid156",
                            "top",
                            250,
                            0,
                            "linear",
                            "${carta_1_A}",
                            '269px',
                            '269px'
                        ],
                        [
                            "eid155",
                            "left",
                            250,
                            0,
                            "linear",
                            "${carta_1_A}",
                            '1186px',
                            '1186px'
                        ],
                        [
                            "eid131",
                            "left",
                            250,
                            0,
                            "linear",
                            "${TIMER_CONTAINER}",
                            '78px',
                            '78px'
                        ],
                        [
                            "eid161",
                            "left",
                            250,
                            0,
                            "linear",
                            "${carta_6_B}",
                            '1407px',
                            '1407px'
                        ],
                        [
                            "eid132",
                            "top",
                            250,
                            0,
                            "linear",
                            "${TIMER_CONTAINER}",
                            '451px',
                            '451px'
                        ],
                        [
                            "eid159",
                            "left",
                            250,
                            0,
                            "linear",
                            "${carta_6_A}",
                            '304px',
                            '304px'
                        ],
                        [
                            "eid143",
                            "left",
                            250,
                            0,
                            "linear",
                            "${carta_3_A}",
                            '1186px',
                            '1186px'
                        ],
                        [
                            "eid153",
                            "left",
                            250,
                            0,
                            "linear",
                            "${carta_5_A}",
                            '304px',
                            '304px'
                        ],
                        [
                            "eid141",
                            "left",
                            250,
                            0,
                            "linear",
                            "${carta_1_B}",
                            '1407px',
                            '1407px'
                        ],
                        [
                            "eid140",
                            "top",
                            250,
                            0,
                            "linear",
                            "${carta_4_A}",
                            '269px',
                            '269px'
                        ],
                        [
                            "eid164",
                            "left",
                            250,
                            0,
                            "linear",
                            "${carta_3_B}",
                            '525px',
                            '525px'
                        ],
                        [
                            "eid158",
                            "top",
                            250,
                            0,
                            "linear",
                            "${carta_4_B}",
                            '489px',
                            '489px'
                        ],
                        [
                            "eid144",
                            "top",
                            250,
                            0,
                            "linear",
                            "${carta_3_A}",
                            '489px',
                            '489px'
                        ],
                        [
                            "eid152",
                            "top",
                            250,
                            0,
                            "linear",
                            "${carta_6_B}",
                            '489px',
                            '489px'
                        ],
                        [
                            "eid145",
                            "left",
                            250,
                            0,
                            "linear",
                            "${carta_2_B}",
                            '525px',
                            '525px'
                        ],
                        [
                            "eid146",
                            "top",
                            250,
                            0,
                            "linear",
                            "${carta_2_B}",
                            '489px',
                            '489px'
                        ],
                        [
                            "eid160",
                            "top",
                            250,
                            0,
                            "linear",
                            "${carta_6_A}",
                            '269px',
                            '269px'
                        ],
                        [
                            "eid138",
                            "top",
                            250,
                            0,
                            "linear",
                            "${carta_5_B}",
                            '269px',
                            '269px'
                        ],
                        [
                            "eid163",
                            "left",
                            250,
                            0,
                            "linear",
                            "${carta_4_B}",
                            '745px',
                            '745px'
                        ],
                        [
                            "eid162",
                            "left",
                            250,
                            0,
                            "linear",
                            "${carta_5_B}",
                            '966px',
                            '966px'
                        ],
                        [
                            "eid165",
                            "left",
                            250,
                            0,
                            "linear",
                            "${carta_2_A}",
                            '966px',
                            '966px'
                        ],
                        [
                            "eid150",
                            "top",
                            250,
                            0,
                            "linear",
                            "${carta_3_B}",
                            '269px',
                            '269px'
                        ]
                    ]
                }
            },
            "carta_1_A": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1)', [50, 50, false, 'farthest-corner', [['rgba(141,83,176,1.00)', 0], ['rgba(79,45,110,1.00)', 100]]]]
                        },
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['15px', '15px', '15px', '15px 15px'],
                            fill: ['rgba(0,0,0,0)', 'images/esposa.png', '0px', '0px'],
                            id: 'esposa',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '190px', '190px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'contorno_img_5pxCopy9',
                            stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 'TextCopy3',
                            opacity: '0',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 140px; font-family: source-sans-pro, sans-serif; color: rgb(163, 123, 200);\">?</span></p>',
                            rect: ['0px', '-1px', '200px', '200px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "fliped": 250
                    },
                    data: [
                        [
                            "eid5",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(255,0,0,1)',
                            'rgba(34,21,151,1.00)'
                        ],
                        [
                            "eid7",
                            "background-color",
                            250,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(34,21,151,1)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid180",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${TextCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid170",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${esposa}",
                            '0',
                            '1'
                        ],
                        [
                            "eid171",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${esposa}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "carta_1_B": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1)', [50, 50, false, 'farthest-corner', [['rgba(141,83,176,1.00)', 0], ['rgba(79,45,110,1.00)', 100]]]]
                        },
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['15px', '15px', '15px', '15px 15px'],
                            fill: ['rgba(0,0,0,0)', 'images/esposo.png', '0px', '0px'],
                            id: 'esposo',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '190px', '190px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'contorno_img_5pxCopy11',
                            stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 'TextCopy4',
                            opacity: '0',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 140px; font-family: source-sans-pro, sans-serif; color: rgb(163, 123, 200);\">?</span></p>',
                            rect: ['0px', '-1px', '200px', '200px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "fliped": 250
                    },
                    data: [
                        [
                            "eid123",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${esposo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid125",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${esposo}",
                            '1',
                            '0'
                        ],
                        [
                            "eid5",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(255,0,0,1)',
                            'rgba(34,21,151,1.00)'
                        ],
                        [
                            "eid7",
                            "background-color",
                            250,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(34,21,151,1)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid182",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${TextCopy4}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "carta_2_B": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1)', [50, 50, 'true', 'farthest-corner', [['rgba(141,83,176,1.00)', 0], ['rgba(79,45,110,1.00)', 100]]]]
                        },
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
                            fill: ['rgba(0,0,0,0)', 'images/lobo.png', '0px', '0px'],
                            id: 'lobo',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '190px', '190px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'contorno_img_5pxCopy12',
                            stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 'TextCopy6',
                            opacity: '0',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 140px; font-family: source-sans-pro, sans-serif; color: rgb(163, 123, 200);\">?</span></p>',
                            rect: ['0px', '-1px', '200px', '200px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "fliped": 250
                    },
                    data: [
                        [
                            "eid172",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${lobo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid173",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${lobo}",
                            '1',
                            '0'
                        ],
                        [
                            "eid5",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(255,0,0,1)',
                            'rgba(34,21,151,1.00)'
                        ],
                        [
                            "eid7",
                            "background-color",
                            250,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(34,21,151,1)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid185",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${TextCopy6}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "carta_2_A": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1)', [50, 50, false, 'farthest-corner', [['rgba(141,83,176,1.00)', 0], ['rgba(79,45,110,1.00)', 100]]]]
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 'TextCopy8',
                            opacity: '0',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 140px; font-family: source-sans-pro, sans-serif; color: rgb(163, 123, 200);\">?</span></p>',
                            rect: ['0px', '-1px', '200px', '200px', 'auto', 'auto']
                        },
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
                            fill: ['rgba(0,0,0,0)', 'images/loba.png', '0px', '0px'],
                            id: 'loba',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '190px', '190px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'contorno_img_5pxCopy10',
                            stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "fliped": 250
                    },
                    data: [
                        [
                            "eid5",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(255,0,0,1)',
                            'rgba(34,21,151,1.00)'
                        ],
                        [
                            "eid7",
                            "background-color",
                            250,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(34,21,151,1)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid187",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${TextCopy8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid117",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${loba}",
                            '0',
                            '1'
                        ],
                        [
                            "eid120",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${loba}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "btn_submit": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '200px', '177px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(52,52,131,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200px', '177px']
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
            "testBtn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['57px', '-28px', '113px', '113px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [3, 'rgba(88,20,130,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(196,170,220,1.00)']
                        },
                        {
                            rect: ['111px', '21px', '13px', '13px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.86)']
                        },
                        {
                            rect: ['115px', '10px', '5px', '44px', 'auto', 'auto'],
                            transform: [[], ['360'], [0, 0, 0], [1, 1, 1]],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.56)']
                        },
                        {
                            type: 'text',
                            id: 'Text',
                            text: '<p style=\"margin: 0px; text-align: center;\"><span style=\"font-weight: 700;\">TIMER</span></p>',
                            rect: ['18px', '17px', '200px', '42px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '228px', '56px']
                        }
                    }
                },
                timeline: {
                    duration: 511,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "0": 511
                    },
                    data: [
                        [
                            "eid118",
                            "rotateZ",
                            0,
                            500,
                            "linear",
                            "${Rectangle2}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid22",
                            "color",
                            0,
                            250,
                            "linear",
                            "${Text}",
                            'rgba(0,0,0,1)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid23",
                            "color",
                            250,
                            250,
                            "linear",
                            "${Text}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1)'
                        ]
                    ]
                }
            },
            "carta_1_C": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1)', [50, 50, false, 'farthest-corner', [['rgba(141,83,176,1.00)', 0], ['rgba(79,45,110,1.00)', 100]]]]
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 'TextCopy9',
                            opacity: '0',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 140px; font-family: source-sans-pro, sans-serif; color: rgb(163, 123, 200);\">?</span></p>',
                            rect: ['0px', '-1px', '200px', '200px', 'auto', 'auto']
                        },
                        {
                            rect: ['0px', '-1px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
                            fill: ['rgba(0,0,0,0)', 'images/pavo.png', '0px', '0px'],
                            id: 'pavo',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '190px', '190px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'contorno_img_5pxCopy7',
                            stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "fliped": 250
                    },
                    data: [
                        [
                            "eid189",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${TextCopy9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid5",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(255,0,0,1)',
                            'rgba(34,21,151,1.00)'
                        ],
                        [
                            "eid7",
                            "background-color",
                            250,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(34,21,151,1)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid201",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${pavo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid203",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${pavo}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "carta_2_C": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1)', [50, 50, 'true', 'farthest-corner', [['rgba(141,83,176,1.00)', 0], ['rgba(79,45,110,1.00)', 100]]]]
                        },
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
                            id: 'zorra',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/zorra.png', '0px', '0px']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text',
                            opacity: '1',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 140px; font-family: source-sans-pro, sans-serif; color: rgb(163, 123, 200);\">?</span></p>',
                            rect: ['0px', '-1px', '200px', '200px', 'auto', 'auto']
                        },
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
                            fill: ['rgba(0,0,0,0)', 'images/pava.png', '0px', '0px'],
                            id: 'pava',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '190px', '190px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'contorno_img_5pxCopy8',
                            stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "fliped": 250
                    },
                    data: [
                        [
                            "eid196",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${pava}",
                            '0',
                            '1'
                        ],
                        [
                            "eid198",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${pava}",
                            '1',
                            '0'
                        ],
                        [
                            "eid5",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(255,0,0,1)',
                            'rgba(34,21,151,1.00)'
                        ],
                        [
                            "eid7",
                            "background-color",
                            250,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(34,21,151,1)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid191",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '1',
                            '1'
                        ],
                        [
                            "eid192",
                            "opacity",
                            250,
                            0,
                            "linear",
                            "${Text}",
                            '1',
                            '1'
                        ]
                    ]
                }
            },
            "carta_1_D": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(135,129,129,1.00)', [50, 50, false, 'farthest-corner', [['rgba(141,83,176,1.00)', 0], ['rgba(79,45,110,1.00)', 100]]]]
                        },
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
                            fill: ['rgba(0,0,0,0)', 'images/cabro.png', '0px', '0px'],
                            id: 'cabro',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '190px', '190px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'contorno_img_5pxCopy5',
                            stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 'TextCopy',
                            opacity: '0',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 140px; font-family: source-sans-pro, sans-serif; color: rgb(163, 123, 200);\">?</span></p>',
                            rect: ['0px', '-1px', '200px', '200px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "fliped": 250
                    },
                    data: [
                        [
                            "eid5",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(135,129,129,1.00)',
                            'rgba(34,21,151,1.00)'
                        ],
                        [
                            "eid7",
                            "background-color",
                            250,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(34,21,151,1)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid178",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${TextCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid92",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${cabro}",
                            '0',
                            '1'
                        ],
                        [
                            "eid94",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${cabro}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "carta_2_D": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,0,1)', [50, 50, false, 'farthest-corner', [['rgba(141,83,176,1.00)', 0], ['rgba(79,45,110,1.00)', 100]]]]
                        },
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
                            fill: ['rgba(0,0,0,0)', 'images/cabra.png', '0px', '0px'],
                            id: 'cabra',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '190px', '190px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'contorno_img_5pxCopy6',
                            stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 'TextCopy7',
                            opacity: '0',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 140px; font-family: source-sans-pro, sans-serif; color: rgb(163, 123, 200);\">?</span></p>',
                            rect: ['0px', '-1px', '200px', '200px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "fliped": 250
                    },
                    data: [
                        [
                            "eid97",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${cabra}",
                            '0',
                            '1'
                        ],
                        [
                            "eid99",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${cabra}",
                            '1',
                            '0'
                        ],
                        [
                            "eid5",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(255,0,0,1)',
                            'rgba(34,21,151,1.00)'
                        ],
                        [
                            "eid7",
                            "background-color",
                            250,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(34,21,151,1)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid186",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${TextCopy7}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "carta_1_E": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(135,129,129,1.00)', [50, 50, false, 'farthest-corner', [['rgba(141,83,176,1.00)', 0], ['rgba(79,45,110,1.00)', 100]]]]
                        },
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
                            fill: ['rgba(0,0,0,0)', 'images/gato2.png', '0px', '0px'],
                            id: 'gato2',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '190px', '190px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'contorno_img_5pxCopy3',
                            stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 'TextCopy5',
                            opacity: '0',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 140px; font-family: source-sans-pro, sans-serif; color: rgb(163, 123, 200);\">?</span></p>',
                            rect: ['0px', '-1px', '200px', '200px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "fliped": 250
                    },
                    data: [
                        [
                            "eid184",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${TextCopy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid5",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(135,129,129,1.00)',
                            'rgba(34,21,151,1.00)'
                        ],
                        [
                            "eid7",
                            "background-color",
                            250,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(34,21,151,1)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid82",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${gato2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid84",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${gato2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "carta_2_E": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(135,129,129,1.00)', [50, 50, false, 'farthest-corner', [['rgba(141,83,176,1.00)', 0], ['rgba(79,45,110,1.00)', 100]]]]
                        },
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
                            fill: ['rgba(0,0,0,0)', 'images/gata2.png', '0px', '0px'],
                            id: 'gata2',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '190px', '190px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'contorno_img_5pxCopy4',
                            stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 'TextCopy2',
                            opacity: '0',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 140px; font-family: source-sans-pro, sans-serif; color: rgb(163, 123, 200);\">?</span></p>',
                            rect: ['0px', '-1px', '200px', '200px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "fliped": 250
                    },
                    data: [
                        [
                            "eid5",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(135,129,129,1.00)',
                            'rgba(34,21,151,1.00)'
                        ],
                        [
                            "eid7",
                            "background-color",
                            250,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(34,21,151,1)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid87",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${gata2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid89",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${gata2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid179",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${TextCopy2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "carta_1_F": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(135,129,129,1.00)', [50, 50, false, 'farthest-corner', [['rgba(141,83,176,1.00)', 0], ['rgba(79,45,110,1.00)', 100]]]]
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 'Text',
                            opacity: '0',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 140px; font-family: source-sans-pro, sans-serif; color: rgb(163, 123, 200);\">?</span></p>',
                            rect: ['0px', '-1px', '200px', '200px', 'auto', 'auto']
                        },
                        {
                            rect: ['0px', '-1px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
                            fill: ['rgba(0,0,0,0)', 'images/perro.png', '0px', '0px'],
                            id: 'perro',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '190px', '190px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'contorno_img_5pxCopy',
                            stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "fliped": 250
                    },
                    data: [
                        [
                            "eid204",
                            "top",
                            250,
                            0,
                            "linear",
                            "${perro}",
                            '-1px',
                            '-1px'
                        ],
                        [
                            "eid5",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(135,129,129,1.00)',
                            'rgba(34,21,151,1.00)'
                        ],
                        [
                            "eid7",
                            "background-color",
                            250,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(34,21,151,1)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid72",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${perro}",
                            '0',
                            '1'
                        ],
                        [
                            "eid74",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${perro}",
                            '1',
                            '0'
                        ],
                        [
                            "eid176",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "carta_2_F": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(135,129,129,1.00)', [50, 50, false, 'farthest-corner', [['rgba(141,83,176,1.00)', 0], ['rgba(79,45,110,1.00)', 100]]]]
                        },
                        {
                            rect: ['0px', '0px', '200px', '200px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px 10px'],
                            fill: ['rgba(0,0,0,0)', 'images/perra.png', '0px', '0px'],
                            id: 'perra',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['0px', '0px', '190px', '190px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'contorno_img_5pxCopy2',
                            stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            id: 'TextCopy10',
                            opacity: '0',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 140px; font-family: source-sans-pro, sans-serif; color: rgb(163, 123, 200);\">?</span></p>',
                            rect: ['0px', '-1px', '200px', '200px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "fliped": 250
                    },
                    data: [
                        [
                            "eid77",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${perra}",
                            '0',
                            '1'
                        ],
                        [
                            "eid79",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${perra}",
                            '1',
                            '0'
                        ],
                        [
                            "eid5",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(135,129,129,1.00)',
                            'rgba(34,21,151,1.00)'
                        ],
                        [
                            "eid7",
                            "background-color",
                            250,
                            250,
                            "linear",
                            "${RoundRect2}",
                            'rgba(34,21,151,1)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid190",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${TextCopy10}",
                            '1',
                            '0'
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
                            type: 'image',
                            id: 'V_HABLA',
                            rect: ['-24px', '16px', '141px', '141px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.45', '0.45']],
                            fill: ['rgba(0,0,0,0)', 'images/V_HABLA.png', '0px', '0px']
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
                            id: 'V_ESCUCHA',
                            rect: ['-12px', '12px', '141px', '141px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.45', '0.45']],
                            fill: ['rgba(0,0,0,0)', 'images/V_ESCUCHA.png', '0px', '0px']
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
                            rect: ['44px', '33px', '141px', '141px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'B_ESCRITA',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/B_ESCRITURA.png', '0px', '0px']
                        },
                        {
                            rect: ['157px', '35px', '141px', '141px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.45', '0.45']],
                            id: 'B_ORAL',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/B_HABLA.png', '0px', '0px']
                        },
                        {
                            rect: ['-12px', '14px', '141px', '141px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'B_LECTORA',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/B_LECTURA.png', '0px', '0px']
                        },
                        {
                            rect: ['100px', '14px', '141px', '141px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.45', '0.45']],
                            id: 'B_AUDITIVA',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/B_ESCUCHA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'escrita',
                            rect: ['62px', '16px', '102', '108', 'auto', 'auto'],
                            id: 'escrita'
                        },
                        {
                            type: 'rect',
                            display: 'none',
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
                            display: 'none',
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
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid52",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_ESCRITA}",
                            'block',
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
                            "eid45",
                            "display",
                            0,
                            0,
                            "linear",
                            "${auditiva}",
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
                            "eid50",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_ORAL}",
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
                            type: 'image',
                            id: 'V_LECTURA',
                            rect: ['-12px', '15px', '140px', '140px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.45', '0.45']],
                            fill: ['rgba(0,0,0,0)', 'images/V_LECTURA.png', '0px', '0px']
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
                            id: 'V_ESCRITURA',
                            rect: ['-18px', '17px', '141px', '141px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.45', '0.45']],
                            fill: ['rgba(0,0,0,0)', 'images/V_ESCRITURA.png', '0px', '0px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("esn1le01ob03r4_edgeActions.js");
})("EDGE-559548");
