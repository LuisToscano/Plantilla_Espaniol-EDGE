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
                            id: 'completar',
                            type: 'image',
                            tag: 'img',
                            rect: ['885px', '234px', '150px', '150px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"completar.png",'0px','0px']
                        },
                        {
                            id: 'texto_1',
                            type: 'text',
                            rect: ['780px', '390px', '360px', '118px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​¡Debe completar esta actividad antes de enviar!</p><p style=\"margin: 0px;\"></p>",
                            align: "center",
                            font: ['source-sans-pro, sans-serif', [32, "px"], "rgba(0,0,0,1)", "600", "none", "", "break-word", ""],
                            textStyle: ["", "", "34px", "", ""]
                        },
                        {
                            id: 'cerrar_comple',
                            symbolName: 'cerrar_comple',
                            type: 'rect',
                            rect: ['1077px', '189px', 'undefined', 'undefined', 'auto', 'auto'],
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
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid5",
                            "left",
                            0,
                            0,
                            "linear",
                            "${cerrar_comple}",
                            '1077px',
                            '1077px'
                        ],
                        [
                            "eid6",
                            "top",
                            0,
                            0,
                            "linear",
                            "${cerrar_comple}",
                            '189px',
                            '189px'
                        ]
                    ]
                }
            },
            "cerrar_comple": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['4px', '4px', '43px', '43px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [1, 'rgba(0,0,0,1)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'image',
                            id: 'cerrar',
                            rect: ['-49px', '-50px', '151px', '153px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.35', '0.35']],
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("completar_edgeActions.js");
})("EDGE-25249914");
