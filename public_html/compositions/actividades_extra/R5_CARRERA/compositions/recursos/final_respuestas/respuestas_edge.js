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
                            id: 'jefe',
                            type: 'image',
                            rect: ['463px', '99px', '250px', '250px', 'auto', 'auto'],
                            borderRadius: ["15px", "15px", "15px", "15px 15px"],
                            fill: ["rgba(0,0,0,0)",im+"jefe.png",'0px','0px']
                        },
                        {
                            id: 'plaza',
                            type: 'image',
                            rect: ['790px', '99px', '250px', '250px', 'auto', 'auto'],
                            borderRadius: ["15px", "15px", "15px", "15px 15px"],
                            fill: ["rgba(0,0,0,0)",im+"plaza.png",'0px','0px']
                        },
                        {
                            id: 'iglesias',
                            type: 'image',
                            rect: ['1117px', '99px', '250px', '250px', 'auto', 'auto'],
                            borderRadius: ["15px", "15px", "15px", "15px 15px"],
                            fill: ["rgba(0,0,0,0)",im+"iglesias.png",'0px','0px']
                        },
                        {
                            id: 'hospital',
                            type: 'image',
                            rect: ['962px', '431px', '250px', '250px', 'auto', 'auto'],
                            borderRadius: ["15px", "15px", "15px", "15px 15px"],
                            fill: ["rgba(0,0,0,0)",im+"hospital.png",'0px','0px']
                        },
                        {
                            id: 'caminos',
                            type: 'image',
                            rect: ['618px', '431px', '250px', '250px', 'auto', 'auto'],
                            borderRadius: ["15px", "15px", "15px", "15px 15px"],
                            fill: ["rgba(0,0,0,0)",im+"caminos.png",'0px','0px']
                        },
                        {
                            id: 'RectangleCopy4',
                            type: 'rect',
                            rect: ['463px', '309px', '250px', '40px', 'auto', 'auto'],
                            borderRadius: ["0px", "0px", "18px 18px", "18px 18px"],
                            fill: ["rgba(79,45,110,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RectangleCopy3',
                            type: 'rect',
                            rect: ['790px', '309px', '250px', '40px', 'auto', 'auto'],
                            borderRadius: ["0px", "0px", "18px 18px", "18px 18px"],
                            fill: ["rgba(79,45,110,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RectangleCopy2',
                            type: 'rect',
                            rect: ['1117px', '309px', '250px', '40px', 'auto', 'auto'],
                            borderRadius: ["0px", "0px", "18px 18px", "18px 18px"],
                            fill: ["rgba(79,45,110,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RectangleCopy',
                            type: 'rect',
                            rect: ['962px', '641px', '250px', '40px', 'auto', 'auto'],
                            borderRadius: ["0px", "0px", "18px 18px", "18px 18px"],
                            fill: ["rgba(79,45,110,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['618px', '641px', '250px', '40px', 'auto', 'auto'],
                            borderRadius: ["0px", "0px", "18px 18px", "18px 18px"],
                            fill: ["rgba(79,45,110,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'contorno_televisorCopy4',
                            type: 'rect',
                            rect: ['463px', '99px', '240px', '240px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [5,"rgba(79,45,110,1.00)","solid"]
                        },
                        {
                            id: 'contorno_televisorCopy3',
                            type: 'rect',
                            rect: ['790px', '99px', '240px', '240px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [5,"rgba(79,45,110,1.00)","solid"]
                        },
                        {
                            id: 'contorno_televisorCopy2',
                            type: 'rect',
                            rect: ['1117px', '99px', '240px', '240px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [5,"rgba(79,45,110,1.00)","solid"]
                        },
                        {
                            id: 'contorno_televisorCopy',
                            type: 'rect',
                            rect: ['962px', '431px', '240px', '240px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [5,"rgba(79,45,110,1.00)","solid"]
                        },
                        {
                            id: 'contorno_televisor',
                            type: 'rect',
                            rect: ['618px', '431px', '240px', '240px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [5,"rgba(79,45,110,1.00)","solid"]
                        },
                        {
                            id: 'TextCopy4',
                            type: 'text',
                            rect: ['506px', '309px', '165px', '40px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 30px; color: rgb(255, 255, 255);\">jefe</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'TextCopy3',
                            type: 'text',
                            rect: ['833px', '309px', '165px', '40px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 30px; color: rgb(255, 255, 255);\">plaza</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'TextCopy2',
                            type: 'text',
                            rect: ['1160px', '309px', '165px', '40px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 30px; color: rgb(255, 255, 255);\">iglesias</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['1005px', '641px', '165px', '40px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 30px; color: rgb(255, 255, 255);\">hospital</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['661px', '641px', '165px', '40px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-size: 30px; color: rgb(255, 255, 255);\">caminos</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
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
                            "eid13",
                            "height",
                            500,
                            0,
                            "linear",
                            "${Stage}",
                            '780px',
                            '780px'
                        ],
                        [
                            "eid12",
                            "width",
                            500,
                            0,
                            "linear",
                            "${Stage}",
                            '1830px',
                            '1830px'
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
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(79,45,110,0.00)']
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
