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
            js+"zoomUtilities.js",
            js+"jquery-migrate-1.2.1.js",
            js+"jquery-ui-1.11.4.custom/jquery-ui.min.js",
            js+"jquery.fullscreen-0.5.0/jquery.fullscreen.min.js",
            js+"jquery.backstretch.min.js",
            js+"jquery.transform/jquery.transform2d.js",
            js+"jquery.transform/jquery.transform3d.js",
            js+"plantilla/actividades_result.js",
            js+"plantilla/utilities.js",
            js+"plantilla/plantilla.js",
            js+"plantilla/utility.js",
            js+"plantilla/main.js",
            js+"EdgeCommons.js",
            js+"SCORM_2004_APIWrapper.js",
            js+"SCORM_HELPER.js"
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
                            id: 'back_contenedor_home',
                            symbolName: 'back_contenedor_home',
                            type: 'rect',
                            rect: ['41px', '135px', '1838', '785', 'auto', 'auto'],
                            overflow: 'hidden',
                            transform: [[],[],[],['0.99565','0.99363']]
                        },
                        {
                            id: 'contenedor_home',
                            symbolName: 'contenedor_home',
                            type: 'rect',
                            rect: ['41px', '131px', '1838', '785', 'auto', 'auto'],
                            transform: [[],[],[],['0.99565','0.99363']]
                        },
                        {
                            id: 'rec_1',
                            symbolName: 'rec_1',
                            type: 'rect',
                            rect: ['585px', '845px', '156', '205', 'auto', 'auto']
                        },
                        {
                            id: 'rec_2',
                            symbolName: 'rec_2',
                            type: 'rect',
                            rect: ['712px', '874px', '143', '181', 'auto', 'auto']
                        },
                        {
                            id: 'rec_3',
                            symbolName: 'rec_3',
                            type: 'rect',
                            rect: ['826px', '889px', '156', '160', 'auto', 'auto'],
                            clip: 'rect(0px 156px 171.51513671875px 0px)'
                        },
                        {
                            id: 'rec_4',
                            symbolName: 'rec_4',
                            type: 'rect',
                            rect: ['952px', '874px', '156', '182', 'auto', 'auto']
                        },
                        {
                            id: 'rec_5',
                            symbolName: 'rec_5',
                            type: 'rect',
                            rect: ['1079px', '843px', '156', '181', 'auto', 'auto'],
                            clip: 'rect(0px 156px 210.3623046875px 0px)'
                        },
                        {
                            id: 'rec_6',
                            symbolName: 'rec_6',
                            type: 'rect',
                            rect: ['1206px', '855px', '156', '204', 'auto', 'auto']
                        },
                        {
                            id: 'rec_7',
                            symbolName: 'rec_7',
                            type: 'rect',
                            rect: ['1603px', '844px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'punto_A',
                            symbolName: 'punto_A',
                            type: 'rect',
                            rect: ['133px', '873px', '134', '160', 'auto', 'auto']
                        },
                        {
                            id: 'btn_PA',
                            symbolName: 'btn_PA',
                            type: 'rect',
                            rect: ['160', '949px', '90', '90', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'vocabulario',
                            symbolName: 'vocabulario',
                            type: 'rect',
                            rect: ['234', '904', '134', '135', 'auto', 'auto']
                        },
                        {
                            id: 'btn_VC',
                            symbolName: 'btn_VC',
                            type: 'rect',
                            rect: ['256px', '955px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'BTN-tools-Gris-48',
                            type: 'image',
                            tag: 'img',
                            rect: ['1794px', '20px', '109px', '101px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"BTN-tools-Gris-48.png",'0px','0px']
                        },
                        {
                            id: 'nivel',
                            symbolName: 'nivel',
                            type: 'rect',
                            rect: ['21', '96', '1881', '42', 'auto', 'auto']
                        },
                        {
                            id: 'banner',
                            type: 'image',
                            rect: ['20px', '20px', '1882px', '114px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"banner.png",'0px','0px']
                        },
                        {
                            id: 'btnr_7',
                            symbolName: 'btnr_7',
                            type: 'rect',
                            rect: ['1616px', '940px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'btnr_6',
                            symbolName: 'btnr_6',
                            type: 'rect',
                            rect: ['1219px', '926px', '130', '130', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1'
                        },
                        {
                            id: 'btnr_5',
                            symbolName: 'btnr_5',
                            type: 'rect',
                            rect: ['1081px', '909px', '130', '130', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'btnr_4',
                            symbolName: 'btnr_4',
                            type: 'rect',
                            rect: ['963px', '936px', '110', '110', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'btnr_3',
                            symbolName: 'btnr_3',
                            type: 'rect',
                            rect: ['854px', '952px', '100', '100', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'btnr_2',
                            symbolName: 'btnr_2',
                            type: 'rect',
                            rect: ['736px', '937px', '110', '110', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'btnr_1',
                            symbolName: 'btnr_1',
                            type: 'rect',
                            rect: ['598px', '909px', '130', '130', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'contenedor_portada',
                            symbolName: 'contenedor_portada',
                            type: 'rect',
                            rect: ['-2', '136', '1924', '946', 'auto', 'auto']
                        },
                        {
                            id: 'btn_menugrafico',
                            symbolName: 'btn_menugrafico',
                            type: 'rect',
                            rect: ['1793px', '20', '107', '101', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.01451']]
                        },
                        {
                            id: 'menu_grafico',
                            symbolName: 'menu_grafico',
                            type: 'rect',
                            rect: ['1794px', '121px', '107', '580', 'auto', 'auto']
                        },
                        {
                            id: 'Tool_creditos',
                            symbolName: 'Tool_creditos',
                            type: 'rect',
                            rect: ['1686px', '227px', 'undefined', 'undefined', 'auto', 'auto'],
                            clip: 'rect(0px 215px 80px -35.6435546875px)'
                        },
                        {
                            id: 'Tool_audio',
                            symbolName: 'Tool_audio',
                            type: 'rect',
                            rect: ['1686px', '421px', '215', '80', 'auto', 'auto'],
                            clip: 'rect(0px 215px 80px -6.2998046875px)'
                        },
                        {
                            id: 'Tool_ayuda',
                            symbolName: 'Tool_ayuda',
                            type: 'rect',
                            rect: ['1686px', '325px', 'undefined', 'undefined', 'auto', 'auto'],
                            clip: 'rect(0px 215px 80px -7.0869140625px)'
                        },
                        {
                            id: 'Tool_full',
                            symbolName: 'Tool_full',
                            type: 'rect',
                            rect: ['1686px', '136px', 'undefined', 'undefined', 'auto', 'auto'],
                            clip: 'rect(0px 215px 80px -153.54296875px)'
                        },
                        {
                            id: 'Tool_info',
                            symbolName: 'Tool_info',
                            type: 'rect',
                            rect: ['1686px', '516px', 'undefined', 'undefined', 'auto', 'auto'],
                            clip: 'rect(0px 215px 80px -80.205078125px)'
                        },
                        {
                            id: 'Tool_accesibilidad',
                            symbolName: 'Tool_accesibilidad',
                            type: 'rect',
                            rect: ['1686px', '612px', 'undefined', 'undefined', 'auto', 'auto'],
                            clip: 'rect(0px 215px 80px -92.8330078125px)'
                        },
                        {
                            id: 'btn_audio',
                            symbolName: 'btn_audio',
                            type: 'rect',
                            rect: ['1793px', '420px', '108', '80', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['0.99074']]
                        },
                        {
                            id: 'btn_full',
                            symbolName: 'btn_full',
                            type: 'rect',
                            rect: ['1793px', '135px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['0.99074']]
                        },
                        {
                            id: 'btn_ayuda',
                            symbolName: 'btn_ayuda',
                            type: 'rect',
                            rect: ['1795px', '324px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['0.99074']]
                        },
                        {
                            id: 'btn_creditos',
                            symbolName: 'btn_creditos',
                            type: 'rect',
                            rect: ['1793px', '226px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['0.99074']]
                        },
                        {
                            id: 'btn_info',
                            symbolName: 'btn_info',
                            type: 'rect',
                            rect: ['1793px', '515px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['0.99074']]
                        },
                        {
                            id: 'btn_accesibilidad',
                            symbolName: 'btn_accesibilidad',
                            type: 'rect',
                            rect: ['1793px', '611px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['0.99074']]
                        },
                        {
                            id: 'ruta',
                            symbolName: 'ruta',
                            type: 'rect',
                            rect: ['1151px', '63', '632', '41', 'auto', 'auto']
                        },
                        {
                            id: 'btn_sena',
                            symbolName: 'btn_sena',
                            type: 'rect',
                            rect: ['16', '18px', '239', '173', 'auto', 'auto']
                        },
                        {
                            id: 'titulo',
                            symbolName: 'titulo',
                            type: 'rect',
                            rect: ['241', '46', '649', '50', 'auto', 'auto']
                        },
                        {
                            id: 'container_overlay',
                            symbolName: 'container_overlay',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto']
                        },
                        {
                            id: 'navigate-begin',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1908', '745', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"navigate-begin.mp3"],
                            preload: 'metadata'
                        },
                        {
                            id: 'navigate-begin2',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['637', '687', '320px', '45px', 'auto', 'auto'],
                            autoplay: 'autoplay',
                            source: [aud+"navigate-begin.mp3"],
                            preload: 'metadata'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '1080px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 2142,
                    autoPlay: true,
                    data: [
                        [
                            "eid388",
                            "display",
                            0,
                            0,
                            "linear",
                            "${container_overlay}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "Tool_audio": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['108px', '0px', '107px', '80px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.29)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            id: 'RoundRect2',
                            opacity: '0',
                            rect: ['0px', '14px', '92px', '53px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.36)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['83px', '19px', '15px', '15px', 'auto', 'auto'],
                                id: 'Rectangle3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'Text',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Audio</p>',
                                rect: ['12px', '8px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '215px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid1",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '1',
                            '0'
                        ]
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
                            type: 'text',
                            id: 'TX_AcontraCopy6',
                            textStyle: ['', '', '81px', '', 'none'],
                            font: ['sena_icon', [68, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', ''],
                            display: 'block',
                            rect: ['0px', '0px', '108px', '80px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​​S</p>',
                            align: 'center'
                        },
                        {
                            type: 'text',
                            id: 'TX_AcontraCopy7',
                            textStyle: ['', '', '81px', '', 'none'],
                            font: ['sena_icon', [68, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', ''],
                            display: 'none',
                            rect: ['0px', '0px', '108px', '80px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​6</p>',
                            align: 'center'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '108px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    labels: {
                        "on": 0,
                        "off": 250
                    },
                    data: [
                        [
                            "eid454",
                            "display",
                            250,
                            0,
                            "linear",
                            "${TX_AcontraCopy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid453",
                            "display",
                            0,
                            0,
                            "linear",
                            "${TX_AcontraCopy7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid452",
                            "display",
                            250,
                            0,
                            "linear",
                            "${TX_AcontraCopy7}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "rec_6": {
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
                            id: 'Tool_r6Copy7',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['14px', '0px', '127px', '46px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['53px', '29px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'RectangleCopy8',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                text: '<p style=\"margin: 0px;\">​Evaluemos</p>',
                                id: 'TextCopy7',
                                textStyle: ['', '', '24px', '', ''],
                                align: 'center',
                                rect: ['13px', '11px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '156px', '204px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid77",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy7}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid78",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy7}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid79",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid80",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy7}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "rec_2": {
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
                            id: 'Tool_r6Copy',
                            opacity: '0',
                            rect: ['0px', '0px', '143px', '46px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['62px', '29px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                rect: ['18px', '11px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                align: 'center',
                                id: 'TextCopy',
                                textStyle: ['', '', '24px', '', ''],
                                text: '<p style=\"margin: 0px;\">​Exploremos</p>',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '143px', '181px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid57",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid58",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid59",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid60",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "rec_3": {
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
                            id: 'Tool_r6Copy2',
                            opacity: '0',
                            rect: ['0px', '0px', '156px', '46px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['62px', '29px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                rect: ['14px', '11px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                align: 'center',
                                id: 'TextCopy2',
                                textStyle: ['', '', '24px', '', ''],
                                text: '<p style=\"margin: 0px;\">​Practiquemos</p>',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '156px', '171px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid61",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy2}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid62",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy2}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid63",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid64",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "rec_4": {
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
                            id: 'Tool_r6Copy5',
                            opacity: '0',
                            rect: ['0px', '0px', '156px', '46px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['62px', '29px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy6',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                rect: ['14px', '11px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                align: 'center',
                                id: 'TextCopy5',
                                textStyle: ['', '', '24px', '', ''],
                                text: '<p style=\"margin: 0px;\">​Practiquemos</p>',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '156px', '182px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid69",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy5}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid70",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy5}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid71",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid72",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy5}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "rec_5": {
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
                            id: 'Tool_r6Copy6',
                            opacity: '0',
                            rect: ['0px', '0px', '156px', '46px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['62px', '29px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy7',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                rect: ['14px', '11px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                align: 'center',
                                id: 'TextCopy6',
                                textStyle: ['', '', '24px', '', ''],
                                text: '<p style=\"margin: 0px;\">​Practiquemos</p>',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '156px', '210px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid75",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid76",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid73",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy6}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid74",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy6}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ]
                    ]
                }
            },
            "rec_1": {
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
                            id: 'Tool_r6',
                            opacity: '0',
                            rect: ['7px', '0px', '143px', '46px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['62px', '29px', '20px', '20px', 'auto', 'auto'],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'Text',
                                textStyle: ['', '', '24px', '', ''],
                                text: '<p style=\"margin: 0px;\">​Empecemos</p>',
                                rect: ['14px', '11px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '156px', '205px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid45",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid46",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid47",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid48",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "Tool_creditos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['108px', '0px', '107px', '80px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.29)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            id: 'RoundRect2',
                            opacity: '0',
                            rect: ['-32px', '14px', '124px', '53px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.36)'],
                            c: [
                            {
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Créditos</p>',
                                rect: ['12px', '8px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['115px', '19px', '15px', '15px', 'auto', 'auto'],
                                id: 'Rectangle3Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '215px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid1",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "Tool_ayuda": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['108px', '0px', '107px', '80px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.29)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            id: 'RoundRect2',
                            opacity: '0',
                            rect: ['0px', '14px', '92px', '53px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.36)'],
                            c: [
                            {
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Ayuda</p>',
                                rect: ['9px', '8px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['83px', '19px', '15px', '15px', 'auto', 'auto'],
                                id: 'Rectangle3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '215px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid1",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "Tool_full": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['108px', '0px', '107px', '80px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.29)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            id: 'RoundRect2',
                            opacity: '0',
                            rect: ['-146px', '14px', '238px', '53px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.36)'],
                            c: [
                            {
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Pantalla completa</p>',
                                rect: ['12px', '8px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['229px', '19px', '15px', '15px', 'auto', 'auto'],
                                id: 'Rectangle3Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '215px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid1",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "Tool_info": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['108px', '0px', '107px', '80px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.29)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            id: 'RoundRect2',
                            opacity: '0',
                            rect: ['-74px', '14px', '166px', '53px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            fill: ['rgba(79,45,110,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.36)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['157px', '19px', '15px', '15px', 'auto', 'auto'],
                                id: 'Rectangle3Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Información</p>',
                                rect: ['12px', '8px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '215px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid1",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "Tool_accesibilidad": {
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
                            rect: ['108px', '0px', '107px', '80px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            clip: 'rect(0px 107px 80px 0px)',
                            fill: ['rgba(255,255,255,0.29)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['5px', '5px', '5px', '5px 5px'],
                            id: 'RoundRect2',
                            opacity: '0',
                            rect: ['-86px', '14px', '178px', '53px', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ['rgba(79,45,110,1.00)'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            clip: 'rect(-5.26318359375px 191.4501953125px 59.4326171875px 0px)',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.36)'],
                            c: [
                            {
                                font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy',
                                textStyle: ['', '', '', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​Accesibilidad</p>',
                                rect: ['12px', '8px', 'auto', 'auto', 'auto', 'auto']
                            },
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['169px', '19px', '15px', '15px', 'auto', 'auto'],
                                id: 'Rectangle3Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '215px', '80px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid1",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Rectangle}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "btn_full": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['sena_icon', [70, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', ''],
                            type: 'text',
                            align: 'center',
                            id: 'Text',
                            textStyle: ['', '', '87px', '', ''],
                            text: '<p style=\"margin: 0px;\">​P</p>',
                            rect: ['0px', '0px', '108px', '80px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '108px', '80px']
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
            "btn_ayuda": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['sena_icon', [70, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            align: 'center',
                            id: 'Text3',
                            textStyle: ['', '', '87px', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​T</p>',
                            rect: ['0px', '0px', '108px', '80px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '108px', '80px']
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
            "btn_creditos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['sena_icon', [70, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            align: 'center',
                            id: 'Text2',
                            textStyle: ['', '', '87px', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Q</p>',
                            rect: ['0px', '0', '108px', '80px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '108px', '80px']
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
            "btn_info": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['sena_icon', [70, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            align: 'center',
                            id: 'Text5',
                            textStyle: ['', '', '87px', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​U</p>',
                            rect: ['0px', '0px', '108px', '80px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '108px', '80px']
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
            "btn_accesibilidad": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['sena_icon', [70, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            align: 'center',
                            id: 'Text6',
                            textStyle: ['', '', '87px', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​R</p>',
                            rect: ['0px', '0px', '108px', '80px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '108px', '80px']
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
            "punto_A": {
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
                            id: 'Tool_r6',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '134px', '67px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['62px', '50px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                text: '<p style=\"margin: 0px;\">​Punto de</p><p style=\"margin: 0px;\">​aprendizaje</p>',
                                id: 'Text',
                                textStyle: ['', '', '24px', '', ''],
                                align: 'center',
                                rect: ['14px', '9px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '134px', '160px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid207",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid208",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid209",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid210",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "vocabulario": {
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
                            id: 'Tool_r6Copy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '134px', '42px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['57px', '25px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'RectangleCopy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                text: '<p style=\"margin: 0px;\">Vocabulario</p>',
                                id: 'TextCopy',
                                textStyle: ['', '', '24px', '', ''],
                                align: 'center',
                                rect: ['12px', '9px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '134px', '135px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid211",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid212",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid213",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid214",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6Copy}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "rec_7": {
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
                            id: 'Tool_r6',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '135px', '84px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['58px', '68px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​Aprendamos</p><p style=\"margin: 0px;\">​en papel</p>',
                                align: 'center',
                                rect: ['9px', '13px', 'auto', 'auto', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '135px', '185px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid260",
                            "boxShadow.color",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            'rgba(0,0,0,0.00)',
                            'rgba(0,0,0,0.48)'
                        ],
                        [
                            "eid261",
                            "boxShadow.color",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            'rgba(0,0,0,0.48)',
                            'rgba(0,0,0,0.00)'
                        ],
                        [
                            "eid262",
                            "opacity",
                            0,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid263",
                            "opacity",
                            250,
                            250,
                            "easeInSine",
                            "${Tool_r6}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "overlay": {
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
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0.4706)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1920px', '1080px']
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
            "container_overlay": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1920px', '1080px']
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
            "contenedor_home": {
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
                            id: 'container',
                            symbolName: 'container',
                            rect: ['-1830px', '0', '1838', '785', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1838px', '785px']
                        }
                    }
                },
                timeline: {
                    duration: 516,
                    autoPlay: true,
                    data: [
                        [
                            "eid395",
                            "left",
                            0,
                            250,
                            "linear",
                            "${container}",
                            '0px',
                            '1878px'
                        ],
                        [
                            "eid400",
                            "left",
                            266,
                            250,
                            "linear",
                            "${container}",
                            '-1830px',
                            '0px'
                        ]
                    ]
                }
            },
            "back_contenedor_home": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '30px 30px', '30px 30px'],
                            id: 'Rectangle2Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.40)']
                        },
                        {
                            rect: ['0px', '0', '1838', '785', 'auto', 'auto'],
                            id: 'back_container',
                            symbolName: 'back_container',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1838px', '785px']
                        }
                    }
                },
                timeline: {
                    duration: 516,
                    autoPlay: true,
                    data: [
                        [
                            "eid409",
                            "left",
                            0,
                            250,
                            "linear",
                            "${back_container}",
                            '0px',
                            '-1830px'
                        ],
                        [
                            "eid410",
                            "left",
                            250,
                            0,
                            "linear",
                            "${back_container}",
                            '-1830px',
                            '-1830px'
                        ],
                        [
                            "eid404",
                            "left",
                            266,
                            250,
                            "linear",
                            "${back_container}",
                            '1830px',
                            '0px'
                        ]
                    ]
                }
            },
            "menu_grafico": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '107px', '580px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.47)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '107px', '580px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "audio": 250
                    },
                    data: [

                    ]
                }
            },
            "btn_menugrafico": {
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
                            id: 'BTN-tools-ES',
                            rect: ['0px', '0px', '109px', '101px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/BTN-tools-ES.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            align: 'center',
                            textStyle: ['', '', '107px', '', ''],
                            rect: ['0px', '0px', '107px', '101px', 'auto', 'auto'],
                            font: ['sena_icon', [68, 'px'], 'rgba(255,182,0,1.00)', 'normal', 'none', '', 'break-word', ''],
                            id: 'Text',
                            textShadow: ['rgba(0,0,0,0.65098)', 2, 1, 2],
                            text: '<p style=\"margin: 0px;\">​W</p>'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '107px', '101px']
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
            "titulo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['source-sans-pro, sans-serif', [40, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Titulo',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 600; font-style: normal; text-decoration: none; font-size: 40px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">&nbsp;<span style=\"font-size: 41px;\">Empecemos</span><span style=\"font-family: source-sans-pro, sans-serif; font-weight: bold; font-style: normal; text-decoration: none; font-size: 40px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">&nbsp;&nbsp;</span><span style=\"font-family: source-sans-pro, sans-serif; font-weight: 500; font-style: normal; text-decoration: none; font-size: 35px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">las letras</span></p>',
                            rect: ['0px', '0px', '649px', '50px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '649px', '50px']
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
            "btn_PA": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '90px', '90px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy2',
                            stroke: [1, 'rgba(204,204,204,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(204,204,204,1.00)']
                        },
                        {
                            transform: [[], [], [], ['0.4', '0.4']],
                            id: 'btn_puntoaprendizajeCopy',
                            type: 'image',
                            rect: ['-55px', '-55px', '200px', '200px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/btn_puntoaprendizaje.png', '0px', '0px']
                        },
                        {
                            font: ['sena_icon', [65, 'px'], 'rgba(255,182,0,0.00)', '400', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            align: 'center',
                            id: 'Text9',
                            text: '<p style=\"margin: 0px;\">​I</p>',
                            textStyle: ['', '', '89px', '', 'none'],
                            rect: ['0px', '0px', '90px', '90px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '90px', '90px']
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
            "btn_VC": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '90px', '90px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'EllipseCopy2',
                            stroke: [1, 'rgba(204,204,204,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(204,204,204,1.00)']
                        },
                        {
                            transform: [[], [], [], ['0.4', '0.4']],
                            rect: ['-55px', '-55px', '200px', '200px', 'auto', 'auto'],
                            id: 'btn_vocabularioCopy',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/btn_vocabulario.png', '0px', '0px']
                        },
                        {
                            font: ['sena_icon', [79, 'px'], 'rgba(255,182,0,0.00)', '400', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            align: 'center',
                            id: 'Text10',
                            text: '<p style=\"margin: 0px;\">​J</p>',
                            textStyle: ['', '', '93px', '', 'none'],
                            rect: ['0px', '0px', '90px', '94px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '90px', '90px']
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
            "btnr_6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            id: 'borde',
                            stroke: [1, 'rgba(204,204,204,1.00)', 'solid'],
                            rect: ['0px', '0px', '130px', '130px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(204,204,204,1.00)'],
                            c: [
                            {
                                type: 'image',
                                id: 'evaluacion_btn',
                                rect: ['5px', '5px', '120px', '120px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/evaluacion_btn.png', '0px', '0px']
                            },
                            {
                                type: 'text',
                                rect: ['-1px', '-1px', '130px', '130px', 'auto', 'auto'],
                                textStyle: ['', '', '131px', '', 'none'],
                                id: 'Text7',
                                text: '<p style=\"margin: 0px;\">​H</p>',
                                align: 'center',
                                font: ['sena_icon', [100, 'px'], 'rgba(255,182,0,0.00)', '400', 'none', 'normal', 'break-word', '']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '130px', '130px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid318",
                            "scaleY",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid319",
                            "scaleY",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid416",
                            "border-color",
                            0,
                            0,
                            "linear",
                            "${borde}",
                            'rgba(204,204,204,1.00)',
                            'rgba(204,204,204,1.00)'
                        ],
                        [
                            "eid316",
                            "scaleX",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid317",
                            "scaleX",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
                        ]
                    ]
                }
            },
            "btnr_5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            id: 'borde',
                            stroke: [1, 'rgba(204,204,204,1.00)', 'solid'],
                            rect: ['0px', '0px', '130px', '130px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(204,204,204,1.00)'],
                            c: [
                            {
                                type: 'image',
                                id: 'r5_btn',
                                rect: ['5px', '5px', '120px', '120px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/r5_btn.png', '0px', '0px']
                            },
                            {
                                type: 'text',
                                rect: ['-1px', '-1px', '129px', '137px', 'auto', 'auto'],
                                textStyle: ['', '', '137px', '', 'none'],
                                id: 'Text6',
                                text: '<p style=\"margin: 0px;\">​F</p>',
                                align: 'center',
                                font: ['sena_icon', [90, 'px'], 'rgba(255,182,0,0.00)', '400', 'none', 'normal', 'break-word', '']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '130px', '130px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid369",
                            "scaleY",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid370",
                            "scaleY",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid415",
                            "border-color",
                            0,
                            0,
                            "linear",
                            "${borde}",
                            'rgba(204,204,204,1.00)',
                            'rgba(204,204,204,1.00)'
                        ],
                        [
                            "eid367",
                            "scaleX",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid368",
                            "scaleX",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
                        ]
                    ]
                }
            },
            "btnr_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            id: 'borde',
                            stroke: [1, 'rgba(204,204,204,1.00)', 'solid'],
                            rect: ['0px', '0px', '110px', '110px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(204,204,204,1.00)'],
                            c: [
                            {
                                type: 'image',
                                id: 'r4_btn',
                                rect: ['5px', '5px', '100px', '100px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/r4_btn.png', '0px', '0px']
                            },
                            {
                                type: 'text',
                                rect: ['-1px', '-1px', '111px', '113px', 'auto', 'auto'],
                                textStyle: ['', '', '114px', '', 'none'],
                                id: 'Text5',
                                text: '<p style=\"margin: 0px;\">​E</p>',
                                align: 'center',
                                font: ['sena_icon', [75, 'px'], 'rgba(255,182,0,0.00)', '400', 'none', 'normal', 'break-word', '']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '110px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid359",
                            "scaleY",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid360",
                            "scaleY",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid414",
                            "border-color",
                            0,
                            0,
                            "linear",
                            "${borde}",
                            'rgba(204,204,204,1.00)',
                            'rgba(204,204,204,1.00)'
                        ],
                        [
                            "eid357",
                            "scaleX",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid358",
                            "scaleX",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
                        ]
                    ]
                }
            },
            "btnr_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            id: 'borde',
                            stroke: [1, 'rgba(204,204,204,1.00)', 'solid'],
                            rect: ['0px', '0px', '100px', '100px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(204,204,204,1.00)'],
                            c: [
                            {
                                type: 'image',
                                id: 'r3_btn',
                                rect: ['5px', '5px', '90px', '90px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/r3_btn.png', '0px', '0px']
                            },
                            {
                                type: 'text',
                                rect: ['-1px', '-1px', '100px', '103px', 'auto', 'auto'],
                                textStyle: ['', '', '100px', '', 'none'],
                                id: 'Text4',
                                text: '<p style=\"margin: 0px;\">​D</p>',
                                align: 'center',
                                font: ['sena_icon', [72, 'px'], 'rgba(255,182,0,0.00)', '400', 'none', 'normal', 'break-word', '']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100px', '100px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid349",
                            "scaleY",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid350",
                            "scaleY",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid413",
                            "border-color",
                            0,
                            0,
                            "linear",
                            "${borde}",
                            'rgba(204,204,204,1.00)',
                            'rgba(204,204,204,1.00)'
                        ],
                        [
                            "eid347",
                            "scaleX",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid348",
                            "scaleX",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
                        ]
                    ]
                }
            },
            "btnr_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            id: 'borde',
                            stroke: [1, 'rgba(204,204,204,1.00)', 'solid'],
                            rect: ['0px', '0px', '110px', '110px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(204,204,204,1.00)'],
                            c: [
                            {
                                type: 'image',
                                id: 'exploremos_btn',
                                rect: ['5px', '5px', '100px', '100px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/exploremos_btn.png', '0px', '0px']
                            },
                            {
                                type: 'text',
                                rect: ['-1px', '-1px', '110px', '112px', 'auto', 'auto'],
                                textStyle: ['', '', '112px', '', 'none'],
                                id: 'Text3',
                                text: '<p style=\"margin: 0px;\">​C</p>',
                                align: 'center',
                                font: ['sena_icon', [80, 'px'], 'rgba(255,182,0,0.00)', '400', 'none', 'normal', 'break-word', '']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '110px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid339",
                            "scaleY",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid340",
                            "scaleY",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid412",
                            "border-color",
                            0,
                            0,
                            "linear",
                            "${borde}",
                            'rgba(204,204,204,1.00)',
                            'rgba(204,204,204,1.00)'
                        ],
                        [
                            "eid337",
                            "scaleX",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid338",
                            "scaleX",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
                        ]
                    ]
                }
            },
            "btnr_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            id: 'borde',
                            stroke: [1, 'rgba(204,204,204,1.00)', 'solid'],
                            rect: ['0px', '0px', '130px', '130px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(204,204,204,1.00)'],
                            c: [
                            {
                                rect: ['5px', '5px', '120px', '120px', 'auto', 'auto'],
                                id: 'empecemos_btn',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/empecemos_btn.png', '0px', '0px']
                            },
                            {
                                font: ['sena_icon', [100, 'px'], 'rgba(255,182,0,0.00)', '400', 'none', 'normal', 'break-word', ''],
                                type: 'text',
                                align: 'center',
                                id: 'Text2',
                                textStyle: ['', '', '132px', '', 'none'],
                                text: '<p style=\"margin: 0px;\">​B</p>',
                                rect: ['-1px', '-1px', '130px', '133px', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '130px', '130px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid329",
                            "scaleY",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid330",
                            "scaleY",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid327",
                            "scaleX",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid328",
                            "scaleX",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.1',
                            '1'
                        ]
                    ]
                }
            },
            "btnr_7": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            id: 'borde',
                            stroke: [1, 'rgba(204,204,204,1.00)', 'solid'],
                            rect: ['12px', '12px', '84px', '84px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            fill: ['rgba(205,205,205,1.00)'],
                            c: [
                            {
                                type: 'image',
                                id: 'pdf_btn2Copy',
                                rect: ['4px', '4px', '76px', '76px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/pdf_btn2.png', '0px', '0px']
                            },
                            {
                                type: 'text',
                                rect: ['-13px', '-13px', '110px', '110px', 'auto', 'auto'],
                                textStyle: ['', '', '110px', '', 'none'],
                                id: 'Text8',
                                text: '<p style=\"margin: 0px;\">​G</p>',
                                align: 'center',
                                font: ['sena_icon', [60, 'px'], 'rgba(255,182,0,0.00)', '400', 'none', 'normal', 'break-word', '']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '110px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "a": 0,
                        "b": 250
                    },
                    data: [
                        [
                            "eid305",
                            "scaleY",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid309",
                            "scaleY",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid417",
                            "border-color",
                            0,
                            0,
                            "linear",
                            "${borde}",
                            'rgba(204,204,204,1.00)',
                            'rgba(204,204,204,1.00)'
                        ],
                        [
                            "eid304",
                            "scaleX",
                            0,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid308",
                            "scaleX",
                            250,
                            250,
                            "easeOutQuad",
                            "${borde}",
                            '1.2',
                            '1'
                        ]
                    ]
                }
            },
            "btn_sena": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '239px', '173px', 'auto', 'auto'],
                            id: 'logo_sena',
                            fill: ['rgba(0,0,0,0)', 'images/logo_sena.png', '0px', '0px'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '239px', '173px']
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
            "ruta": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '632px', '41px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [28, 'px'], 'rgba(255,182,0,1.00)', '500', 'none', 'normal', 'break-word', 'normal'],
                            id: 'texto_ruta',
                            text: '<p style=\"margin: 0px;\">​Español &gt; Pre A1 Introductorio &gt; Mi contexto</p>',
                            align: 'right',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '632px', '41px']
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
            "container": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1838px', '785px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(230,253,200,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1838px', '785px']
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
            "back_container": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '30px 30px', '30px 30px'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.70)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1838px', '785px']
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
            "contenedor_portada": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1924px', '946px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Rectangle',
                            opacity: '0.9',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1924px', '946px']
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
            "nivel": {
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
                            borderRadius: ['0px', '0px', '18px', '18px 18px'],
                            id: 'nivel',
                            stroke: [1, 'rgb(204, 204, 204)', 'none'],
                            rect: ['0px', '24px', '1881px', '18px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ['rgba(0,165,61,0.00)'],
                            c: [
                            {
                                type: 'rect',
                                id: 'Rectangle',
                                stroke: [73, 'rgba(0,165,61,1.00)', 'solid'],
                                rect: ['-15px', '-8px', '1758px', '64px', 'auto', 'auto'],
                                fill: ['rgba(0,165,61,0.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1881px', '42px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-7659645");
