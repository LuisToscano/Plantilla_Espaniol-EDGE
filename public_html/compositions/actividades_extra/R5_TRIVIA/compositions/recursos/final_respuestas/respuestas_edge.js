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
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'contenedorrespuestas',
                            symbolName: 'contenedorrespuestas',
                            type: 'rect',
                            rect: ['0', '0', '1920', '1080', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.5','0.5']]
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
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid7",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${contenedorrespuestas}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid10",
                            "background-color",
                            500,
                            0,
                            "linear",
                            "${Stage}",
                            'rgba(255,255,255,0.00)',
                            'rgba(255,255,255,0.00)'
                        ],
                        [
                            "eid9",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${contenedorrespuestas}",
                            '0',
                            '1'
                        ],
                        [
                            "eid8",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${contenedorrespuestas}",
                            '0.5',
                            '1'
                        ]
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
                            rect: ['508px', '183px', '240px', '240px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            overflow: 'hidden',
                            id: 'conburro',
                            stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)'],
                            c: [
                            {
                                id: 'burro',
                                type: 'image',
                                rect: ['-49px', '-10px', '300px', '300px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/burro.png', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['835px', '183px', '240px', '240px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            overflow: 'hidden',
                            id: 'contmesa',
                            stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)'],
                            c: [
                            {
                                id: 'mesa',
                                type: 'image',
                                rect: ['-30px', '-30px', '300px', '300px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/mesa.png', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['1162px', '183px', '240px', '240px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            overflow: 'hidden',
                            id: 'contuva',
                            stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)'],
                            c: [
                            {
                                id: 'uva',
                                type: 'image',
                                rect: ['-29px', '-30px', '300px', '300px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/uva.png', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['1007px', '515px', '240px', '240px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            overflow: 'hidden',
                            id: 'contdedo',
                            stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)'],
                            c: [
                            {
                                id: 'dedo',
                                type: 'image',
                                rect: ['-30px', '-30px', '300px', '300px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/dedo.png', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['663px', '515px', '240px', '240px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            overflow: 'hidden',
                            id: 'contfaro',
                            stroke: [5, 'rgba(79,45,110,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)'],
                            c: [
                            {
                                id: 'faro',
                                type: 'image',
                                rect: ['-47px', '-22px', '300px', '300px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/faro.png', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(79,45,110,0.00)']
                        },
                        {
                            rect: ['508px', '393px', '250px', '40px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '18px 18px', '18px 18px'],
                            id: 'RectangleCopy5',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(79,45,110,1.00)']
                        },
                        {
                            rect: ['663px', '725px', '250px', '40px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '18px 18px', '18px 18px'],
                            id: 'RectangleCopy8',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(79,45,110,1.00)']
                        },
                        {
                            rect: ['1007px', '725px', '250px', '40px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '18px 18px', '18px 18px'],
                            id: 'RectangleCopy9',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(79,45,110,1.00)']
                        },
                        {
                            rect: ['835px', '393px', '250px', '40px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '18px 18px', '18px 18px'],
                            id: 'RectangleCopy6',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(79,45,110,1.00)']
                        },
                        {
                            rect: ['1162px', '393px', '250px', '40px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '18px 18px', '18px 18px'],
                            id: 'RectangleCopy7',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(79,45,110,1.00)']
                        },
                        {
                            rect: ['551px', '393px', '165px', '40px', 'auto', 'auto'],
                            id: 'txtburro',
                            text: '<p style=\"margin: 0px; text-align: center; color: rgb(255, 255, 255); font-family: source-sans-pro, sans-serif; font-size: 30px;\">Burro</p>',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        },
                        {
                            rect: ['878px', '393px', '165px', '40px', 'auto', 'auto'],
                            id: 'txtmesa',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 30px; color: rgb(255, 255, 255);\">Mesa</span></p>',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        },
                        {
                            rect: ['1205px', '393px', '165px', '40px', 'auto', 'auto'],
                            id: 'txtuva',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 30px; color: rgb(255, 255, 255);\">Uva</span></p>',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        },
                        {
                            rect: ['1050px', '725px', '165px', '40px', 'auto', 'auto'],
                            id: 'txtdedo',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 30px; color: rgb(255, 255, 255);\">dedo</span></p>',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        },
                        {
                            rect: ['706px', '725px', '165px', '40px', 'auto', 'auto'],
                            id: 'txtfaro',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 30px; color: rgb(255, 255, 255);\">Faro</span></p>',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1920px', '1080px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("respuestas_edgeActions.js");
})("EDGE-25832383");
