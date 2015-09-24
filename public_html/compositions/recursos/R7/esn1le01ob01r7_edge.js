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
                            id: 'texto_1',
                            type: 'text',
                            rect: ['0px', '90px', '1830px', '60px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Descargue el imprimible</p>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [45, "px"], "rgba(94,75,120,1.00)", "600", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'texto_2',
                            type: 'text',
                            rect: ['0px', '182px', '1830px', '42px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Instrucciones: Haga clic en el ícono para descargar el PDF</p>",
                            align: "center",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(93,88,85,1.00)", "600", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'descargable',
                            type: 'image',
                            tag: 'img',
                            rect: ['785px', '205px', '250px', '263px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"descargable2.png",'0px','0px'],
                            transform: [[],[],[],['0.6','0.6']]
                        },
                        {
                            id: 'Skills',
                            symbolName: 'Skills',
                            type: 'rect',
                            rect: ['0px', '617px', '283', '157', 'auto', 'auto'],
                            transform: [[],[],[],['1.02','1.02']]
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
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_oral',
                            opacity: '0',
                            rect: ['-18px', '-22px', '129px', '63px', 'auto', 'auto'],
                            fill: ['rgba(79,45,110,1.00)'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['55px', '48px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1.00)']
                            },
                            {
                                rect: ['8px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                align: 'center',
                                id: 'TextCopy2',
                                text: '<p style=\"margin: 0px;\">​Producción</p><p style=\"margin: 0px;\">​oral</p>',
                                textStyle: ['', '', '23px', '', ''],
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
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_auditiva',
                            opacity: '0',
                            rect: ['-15px', '-25px', '148px', '63px', 'auto', 'auto'],
                            fill: ['rgba(79,45,110,1.00)'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['64px', '48px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1.00)']
                            },
                            {
                                rect: ['7px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                align: 'center',
                                id: 'TextCopy',
                                text: '<p style=\"margin: 0px;\">​Comprensión</p><p style=\"margin: 0px;\">​auditiva</p>',
                                textStyle: ['', '', '23px', '', ''],
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
                            rect: ['-122px', '-30px', '530px', '250px', 'auto', 'auto'],
                            id: 'Skills',
                            transform: [[], [], [], ['0.5', '0.5']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Skills.png', '0px', '0px']
                        },
                        {
                            rect: ['44px', '33px', '141px', '141px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            type: 'image',
                            id: 'B_ESCRITA',
                            display: 'none',
                            cursor: 'default',
                            fill: ['rgba(0,0,0,0)', 'images/B_ESCRITURA.png', '0px', '0px']
                        },
                        {
                            rect: ['157px', '35px', '141px', '141px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.45', '0.45']],
                            type: 'image',
                            id: 'B_ORAL',
                            display: 'none',
                            cursor: 'default',
                            fill: ['rgba(0,0,0,0)', 'images/B_HABLA.png', '0px', '0px']
                        },
                        {
                            rect: ['-12px', '14px', '141px', '141px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            type: 'image',
                            id: 'B_LECTORA',
                            display: 'none',
                            cursor: 'default',
                            fill: ['rgba(0,0,0,0)', 'images/B_LECTURA.png', '0px', '0px']
                        },
                        {
                            rect: ['100px', '14px', '141px', '141px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.45', '0.45']],
                            type: 'image',
                            id: 'B_AUDITIVA',
                            display: 'block',
                            cursor: 'default',
                            fill: ['rgba(0,0,0,0)', 'images/B_ESCUCHA.png', '0px', '0px']
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
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Tool_lectora',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'default',
                            rect: ['24px', '50px', '70px', '70px', 'auto', 'auto'],
                            display: 'block',
                            fill: ['rgba(255,0,0,0.00)'],
                            c: [
                            {
                                rect: ['-6px', '-7px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'lecturaCopy2',
                                text: '<p style=\"margin: 0px;\">N</p>',
                                font: ['sena_icon', [81, 'px'], 'rgba(89,181,72,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Tool_escrita',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'default',
                            rect: ['80px', '71px', '70px', '70px', 'auto', 'auto'],
                            display: 'block',
                            fill: ['rgba(255,0,0,0.00)'],
                            c: [
                            {
                                rect: ['6px', '4px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'lecturaCopy4',
                                text: '<p style=\"margin: 0px;\">O</p>',
                                font: ['sena_icon', [57, 'px'], 'rgba(89,181,72,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Tool_auditiva',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'default',
                            rect: ['136px', '49px', '70px', '70px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(255,0,0,0.00)'],
                            c: [
                            {
                                rect: ['4px', '3px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'audioCopy',
                                text: '<p style=\"margin: 0px;\">​M</p>',
                                font: ['sena_icon', [63, 'px'], 'rgba(89,181,72,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Tool_oral',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'default',
                            rect: ['193px', '71px', '70px', '70px', 'auto', 'auto'],
                            display: 'block',
                            fill: ['rgba(255,0,0,0.00)'],
                            c: [
                            {
                                rect: ['8px', '13px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'lecturaCopy3',
                                text: '<p style=\"margin: 0px;\">L</p>',
                                font: ['sena_icon', [54, 'px'], 'rgba(89,181,72,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                type: 'text'
                            }]
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
                            "eid35",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Tool_oral}",
                            'block',
                            'block'
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
                            "eid36",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Tool_auditiva}",
                            'none',
                            'none'
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
                            "eid41",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Tool_escrita}",
                            'block',
                            'block'
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
                            "eid42",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Tool_lectora}",
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
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_lectora',
                            opacity: '0',
                            rect: ['0px', '-23px', '149px', '63px', 'auto', 'auto'],
                            fill: ['rgba(79,45,110,1.00)'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['48px', '48px', '20px', '20px', 'auto', 'auto'],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1.00)']
                            },
                            {
                                rect: ['7px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                align: 'center',
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​Comprensión</p><p style=\"margin: 0px;\">​lectora</p>',
                                textStyle: ['', '', '23px', '', ''],
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
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_escrita',
                            opacity: '0',
                            rect: ['-10px', '-19px', '129px', '63px', 'auto', 'auto'],
                            fill: ['rgba(79,45,110,1.00)'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['54px', '48px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1.00)']
                            },
                            {
                                rect: ['7px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                align: 'center',
                                id: 'TextCopy3',
                                text: '<p style=\"margin: 0px;\">​Producción</p><p style=\"margin: 0px;\">​escrita</p>',
                                textStyle: ['', '', '23px', '', ''],
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("esn1le01ob01r7_edgeActions.js");
})("EDGE-31713253");
