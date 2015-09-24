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
            'scroll_bar': '<link rel=\"stylesheet\" href=\"css/scrollbar.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\" />'        },
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
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['780px', '180px', '360px', '360px', 'auto', 'auto'],
                            borderRadius: ["15px", "15px", "15px", "15px 15px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            boxShadow: ["", 0, 0, 25, 3, "rgba(70,70,70,0.68)"]
                        },
                        {
                            id: 'incorrecto',
                            type: 'image',
                            tag: 'img',
                            rect: ['885px', '217px', '150px', '150px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"incorrecto.png",'0px','0px']
                        },
                        {
                            id: 'texto_1',
                            type: 'text',
                            rect: ['530px', '369px', '867px', '94px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; line-height: 30px;\">​¡Respuesta incorrecta!</p>",
                            align: "center",
                            font: ['source-sans-pro, sans-serif', [32, "px"], "rgba(0,0,0,1)", "600", "none", "", "break-word", ""]
                        },
                        {
                            id: 'cerrar_inco',
                            symbolName: 'cerrar_inco',
                            type: 'rect',
                            rect: ['1077px', '189px', '53', '54', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'attempt-fail',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1183', '609', '320px', '45px', 'auto', 'auto'],
                            autoplay: 'autoplay',
                            source: [aud+"attempt-fail.mp3"],
                            preload: 'metadata'
                        },
                        {
                            id: 'respuestas',
                            symbolName: 'Submit',
                            type: 'rect',
                            rect: ['881px', '473px', '165', '38', 'auto', 'auto'],
                            clip: 'rect(0px 193.8662109375px 38px -28.8662109375px)',
                            cursor: 'pointer'
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
                    duration: 2742.813,
                    autoPlay: true,
                    data: [
                        [
                            "eid4",
                            "top",
                            0,
                            0,
                            "linear",
                            "${respuestas}",
                            '473px',
                            '473px'
                        ],
                        [
                            "eid5",
                            "left",
                            0,
                            0,
                            "linear",
                            "${respuestas}",
                            '881px',
                            '881px'
                        ],
                        [
                            "eid2",
                            "top",
                            0,
                            0,
                            "linear",
                            "${cerrar_inco}",
                            '189px',
                            '189px'
                        ],
                        [
                            "eid9",
                            "top",
                            0,
                            0,
                            "linear",
                            "${texto_1}",
                            '369px',
                            '369px'
                        ],
                        [
                            "eid10",
                            "left",
                            0,
                            0,
                            "linear",
                            "${texto_1}",
                            '530px',
                            '530px'
                        ],
                        [
                            "eid12",
                            "width",
                            0,
                            0,
                            "linear",
                            "${texto_1}",
                            '867px',
                            '867px'
                        ],
                        [
                            "eid1",
                            "left",
                            0,
                            0,
                            "linear",
                            "${cerrar_inco}",
                            '1077px',
                            '1077px'
                        ]
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
                            rect: ['5px', '4px', '43px', '43px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            transform: [[], [], [], ['0.35', '0.35']],
                            id: 'cerrar',
                            type: 'image',
                            rect: ['-49px', '-50px', '151px', '153px', 'auto', 'auto'],
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
                            rect: ['-24px', '1px', '213px', '35px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]]
                        },
                        {
                            type: 'text',
                            rect: ['-24px', '6px', '213px', '31px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px; text-align: center; line-height: 8px;\">​<span style=\"color: rgb(251, 247, 247); font-weight: 600; font-family: source-sans-pro, sans-serif;\">Ver respuestas</span></p>',
                            id: 'texto_2',
                            textStyle: ['', '', '10px', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("incorrecto_edgeActions.js");
})("EDGE-25249914");
