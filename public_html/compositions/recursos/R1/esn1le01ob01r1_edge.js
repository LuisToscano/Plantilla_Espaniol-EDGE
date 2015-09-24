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
            js+"jquery-1.11.3.min.js",
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
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '0px', '1920px', '944px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: 'Fondo',
                                type: 'rect',
                                rect: ['20px', '659px', '1877px', '264px', 'auto', 'auto'],
                                borderRadius: ["10px", "10px", "10px", "10px"],
                                fill: ["rgba(12,100,86,1.00)",[270,[['rgba(96,74,123,1.00)',0],['rgba(96,74,123,1.00)',100]]]],
                                stroke: [1,"rgba(0,0,0,0.00)","dashed"]
                            },
                            {
                                id: 'funcioncomunicativa',
                                symbolName: 'funcioncomunicativa',
                                type: 'rect',
                                rect: ['46', '672px', '652', '163', 'auto', 'auto']
                            },
                            {
                                id: 'discuta',
                                symbolName: 'discuta',
                                type: 'rect',
                                rect: ['725px', '672px', 'undefined', 'undefined', 'auto', 'auto']
                            },
                            {
                                id: 'Cuadro_texto',
                                type: 'rect',
                                rect: ['107px', '187px', '927px', '167px', 'auto', 'auto'],
                                borderRadius: ["10px", "10px", "10px", "10px"],
                                fill: ["rgba(255,255,255,0.75)"],
                                stroke: [7,"rgba(96,74,123,1.00)","solid"],
                                c: [
                                {
                                    id: 'texto_1',
                                    type: 'text',
                                    rect: ['27px', '33px', '851px', '56px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; line-height: 50px;\">​¡Es momento de conocer el alfabeto!</p><p style=\"margin: 0px;\">​</p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [38, "px"], "rgba(96,74,123,1.00)", "400", "none", "normal", "break-word", "normal"],
                                    textStyle: ["", "", "", "", "none"]
                                }]
                            }]
                        },
                        {
                            id: 'btnr1_exploremosCopy',
                            symbolName: 'btnr1_exploremos_1',
                            type: 'rect',
                            rect: ['1417', '759px', '447', '95', 'auto', 'auto'],
                            cursor: 'pointer'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '944px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "funcioncomunicativa": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '650px', '49px', 'auto', 'auto'],
                            id: 'cont_funcion',
                            stroke: [1, 'rgba(0, 0, 0, 0)', 'dashed'],
                            type: 'rect',
                            fill: ['rgba(51,26,63,1.00)'],
                            c: [
                            {
                                rect: ['-1px', '-1px', '28px', '49px', 'auto', 'auto'],
                                id: 'Rectangle',
                                stroke: [1, 'rgba(0,0,0,0.00)', 'dashed'],
                                type: 'rect',
                                fill: ['rgba(178,163,196,1.00)']
                            },
                            {
                                rect: ['39px', '3px', '745px', '38px', 'auto', 'auto'],
                                id: 'texto_2',
                                text: '<p style=\"margin: 0px;\"><span style=\"font-size: 32px;\">Función comunicativa:</span></p>',
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(253,191,0,1.00)', '700', 'none', '', 'break-word', 'normal'],
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['40px', '57px', '612px', '74px', 'auto', 'auto'],
                            textStyle: ['', '', '28px', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(253,191,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'texto_3',
                            text: '<p style=\"margin: 0px; line-height: 35px;\">​<span style=\"color: rgb(255, 255, 255); font-size: 26px;\">Reconocer la grafía del español para dar ejemplos de léxico que se pueda asociar con cada letra.</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['5px', '57px', '30px', '32px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['sena_icon', [24, 'px'], 'rgba(253,191,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'texto_7',
                            text: '<p style=\"margin: 0px;\">​Z</p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '652px', '163px']
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
            "discuta": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '650px', '49px', 'auto', 'auto'],
                            id: 'cont_funcion',
                            stroke: [1, 'rgba(0, 0, 0, 0)', 'dashed'],
                            type: 'rect',
                            fill: ['rgba(51,26,63,1.00)'],
                            c: [
                            {
                                rect: ['-1px', '-1px', '28px', '49px', 'auto', 'auto'],
                                id: 'Rectangle',
                                stroke: [1, 'rgba(0,0,0,0.00)', 'dashed'],
                                type: 'rect',
                                fill: ['rgba(178,163,196,1.00)']
                            },
                            {
                                rect: ['39px', '2px', '612px', '38px', 'auto', 'auto'],
                                id: 'texto_4',
                                text: '<p style=\"margin: 0px;\"><span style=\"font-size: 32px;\">Discuta con sus compañeros</span></p>',
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(253,191,0,1.00)', '700', 'none', '', 'break-word', 'normal'],
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['45px', '57px', '607px', '106px', 'auto', 'auto'],
                            textStyle: ['', '', '26px', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(253,191,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'texto_5',
                            text: '<p style=\"margin: 0px; line-height: 35px;\">​<span style=\"color: rgb(255, 255, 255); font-size: 26px;\">¿Cúales &nbsp;letras tiene su nombre?&nbsp;</span>​</p><p style=\"margin: 0px; line-height: 35px;\"><span style=\"color: rgb(255, 255, 255); font-size: 26px;\">​¿Cúales letras le parecen difíciles de escribir?</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['5px', '57px', '30px', '32px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(253,191,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'texto_8',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: sena_icon;\">Z</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['7px', '97px', '30px', '32px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(253,191,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'texto_9',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-family: sena_icon;\">Z</span></p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '652px', '163px']
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
            "btnr1_exploremos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['48px', '10px', '399px', '76px', 'auto', 'auto'],
                            borderRadius: ['0px', '38px', '38px', '0px'],
                            id: 'RoundRect',
                            stroke: [7, 'rgb(96, 74, 123)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.749)', [270, [['rgba(49,28,69,1.00)', 0], ['rgba(56,32,79,1.00)', 21], ['rgba(40,22,56,1.00)', 63]]]]
                        },
                        {
                            id: 'BTN_animado',
                            rect: ['0px', '0px', '95px', '95px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/BTN_R1_Explore-29.png', '0px', '0px']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '50px', '', 'none'],
                            id: 'Text3',
                            text: '<p style=\"margin: 0px;\">​Exploremos</p>',
                            align: 'center',
                            rect: ['163px', '23px', '198px', '50px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '447px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid33",
                            "scaleX",
                            0,
                            1000,
                            "linear",
                            "${BTN_animado}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid34",
                            "scaleX",
                            1000,
                            1000,
                            "linear",
                            "${BTN_animado}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid35",
                            "scaleY",
                            0,
                            1000,
                            "linear",
                            "${BTN_animado}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid36",
                            "scaleY",
                            1000,
                            1000,
                            "linear",
                            "${BTN_animado}",
                            '1.2',
                            '1'
                        ]
                    ]
                }
            },
            "btnr1_exploremos_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['48px', '10px', '399px', '76px', 'auto', 'auto'],
                            borderRadius: ['0px', '38px', '38px', '0px'],
                            id: 'RoundRect',
                            stroke: [1, 'rgb(96, 74, 123)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.749)', [270, [['rgba(49,28,69,1.00)', 0], ['rgba(56,32,79,1.00)', 21], ['rgba(40,22,56,1.00)', 63]]]]
                        },
                        {
                            rect: ['1px', '2px', '90px', '90px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [1, 'rgba(0,0,0,1)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['0px', '0px', '95px', '95px', 'auto', 'auto'],
                            id: 'BTN_animado',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/BTN_R1_Explore-293.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['95px', '23px', '352px', '50px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Exploremos</p>',
                            id: 'texto_6',
                            textStyle: ['', '', '50px', '', 'none'],
                            align: 'center',
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '0px', '92px', '95px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​C</p>',
                            id: 'Text',
                            textStyle: ['', '', '97px', '', ''],
                            align: 'center',
                            font: ['sena_icon', [70, 'px'], 'rgba(0,0,0,0.00)', 'normal', 'none', '', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '447px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid47",
                            "scaleX",
                            0,
                            1000,
                            "linear",
                            "${Text}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid48",
                            "scaleX",
                            1000,
                            1000,
                            "linear",
                            "${Text}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid35",
                            "scaleY",
                            0,
                            1000,
                            "linear",
                            "${BTN_animado}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid36",
                            "scaleY",
                            1000,
                            1000,
                            "linear",
                            "${BTN_animado}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid49",
                            "scaleY",
                            0,
                            1000,
                            "linear",
                            "${Text}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid50",
                            "scaleY",
                            1000,
                            1000,
                            "linear",
                            "${Text}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid33",
                            "scaleX",
                            0,
                            1000,
                            "linear",
                            "${BTN_animado}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid34",
                            "scaleX",
                            1000,
                            1000,
                            "linear",
                            "${BTN_animado}",
                            '1.2',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("esn1le01ob01r1_edgeActions.js");
})("EDGE-16656972");
