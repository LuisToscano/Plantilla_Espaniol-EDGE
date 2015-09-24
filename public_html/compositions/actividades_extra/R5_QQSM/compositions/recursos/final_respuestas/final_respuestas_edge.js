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
            js+"audioUtilities.js",
            js+"jquery-1.10.2.js"
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
                            id: 'box_pregunta',
                            type: 'image',
                            rect: ['530px', '151px', '823px', '73px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"box_pregunta.png",'0px','0px']
                        },
                        {
                            id: 'RTA1',
                            type: 'group',
                            rect: ['1028px', '272px', '401', '57', 'auto', 'auto'],
                            c: [
                            {
                                id: 'box_respuestaCopy4',
                                type: 'image',
                                rect: ['0px', '0px', '401px', '57px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"box_respuesta55.png",'0px','0px']
                            },
                            {
                                id: 'Text2Copy4',
                                type: 'text',
                                rect: ['43px', '3px', '323px', '52px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Brazo</p>",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [36, "px"], "rgba(255,255,255,1.00)", "700", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'Text2Copy5',
                            type: 'text',
                            rect: ['722px', '161px', '439px', '52px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Respuestas Correctas</p>",
                            align: "center",
                            font: ['source-sans-pro, sans-serif', [36, "px"], "rgba(255,255,255,1.00)", "700", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'RTA2',
                            type: 'group',
                            rect: ['1027px', '352px', '401', '57', 'auto', 'auto'],
                            c: [
                            {
                                id: 'box_respuestaCopy3',
                                type: 'image',
                                rect: ['0px', '0px', '401px', '57px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"box_respuesta55.png",'0px','0px']
                            },
                            {
                                id: 'Text2Copy3',
                                type: 'text',
                                rect: ['44px', '2px', '323px', '52px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Silla</p>",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [36, "px"], "rgba(255,255,255,1.00)", "700", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'RTA3',
                            type: 'group',
                            rect: ['1027px', '431px', '401', '57', 'auto', 'auto'],
                            c: [
                            {
                                id: 'box_respuestaCopy2',
                                type: 'image',
                                rect: ['0px', '0px', '401px', '57px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"box_respuesta55.png",'0px','0px']
                            },
                            {
                                id: 'Text2Copy2',
                                type: 'text',
                                rect: ['39px', '2px', '323px', '52px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Caballo</p>",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [36, "px"], "rgba(255,255,255,1.00)", "700", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'TextCopy4',
                            type: 'text',
                            rect: ['441px', '360px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">2.<span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(79,45,110,1.00)", "700", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'TextCopy3',
                            type: 'text',
                            rect: ['441px', '440px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">3.<span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(79,45,110,1.00)", "700", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'TextCopy2',
                            type: 'text',
                            rect: ['441px', '517px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">4.<span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(79,45,110,1.00)", "700", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'RTA4',
                            type: 'group',
                            rect: ['1028px', '510px', '401', '57', 'auto', 'auto'],
                            c: [
                            {
                                id: 'box_respuestaCopy',
                                type: 'image',
                                rect: ['0px', '0px', '401px', '57px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"box_respuesta55.png",'0px','0px']
                            },
                            {
                                id: 'Text2Copy',
                                type: 'text',
                                rect: ['37px', '3px', '323px', '52px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Paisaje</p>",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [36, "px"], "rgba(255,255,255,1.00)", "700", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['441px', '595px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">5.<span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(79,45,110,1.00)", "700", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['441px', '280px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">1.<span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(79,45,110,1.00)", "700", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'audio_1',
                            symbolName: 'audio_1',
                            type: 'rect',
                            rect: ['651px', '286px', 'null', 'null', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.1784','1.1784']]
                        },
                        {
                            id: 'RTA5',
                            type: 'group',
                            rect: ['1032px', '588px', '401', '57', 'auto', 'auto'],
                            c: [
                            {
                                id: 'box_respuesta',
                                type: 'image',
                                rect: ['0px', '0px', '401px', '57px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"box_respuesta55.png",'0px','0px']
                            },
                            {
                                id: 'Text2',
                                type: 'text',
                                rect: ['33px', '2px', '323px', '52px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Cama</p>",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [36, "px"], "rgba(255,255,255,1.00)", "700", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'audio_2',
                            symbolName: 'audio_2',
                            type: 'rect',
                            rect: ['650px', '365px', 'null', 'null', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.18','1.18']]
                        },
                        {
                            id: 'audio_3',
                            symbolName: 'audio_3',
                            type: 'rect',
                            rect: ['650px', '445px', 'null', 'null', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.18','1.18']]
                        },
                        {
                            id: 'audio_4',
                            symbolName: 'audio_4',
                            type: 'rect',
                            rect: ['649px', '524px', 'null', 'null', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.18','1.18']]
                        },
                        {
                            id: 'audio_5',
                            symbolName: 'audio_5',
                            type: 'rect',
                            rect: ['650px', '601px', 'null', 'null', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['1.18','1.18']]
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
                    duration: 14239,
                    autoPlay: true,
                    data: [
                        [
                            "eid13",
                            "top",
                            500,
                            0,
                            "linear",
                            "${audio_1}",
                            '286px',
                            '286px'
                        ]
                    ]
                }
            },
            "audio_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-117px', '0px', '433px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]],
                            c: [
                            {
                                rect: ['190px', '1px', '94px', '31px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Escucha</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                type: 'text'
                            }]
                        },
                        {
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)'],
                            rect: ['52px', '3px', '25px', '25px', 'auto', 'auto'],
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            stroke: [1, 'rgba(255,255,255,1.00)', 'solid'],
                            id: 'stop',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['-23px', '-71px', '175px', '172px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            fill: ['rgba(0,0,0,0)', 'images/play-033.png', '0px', '0px'],
                            id: 'play',
                            opacity: '1',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/audiomp3_1.mp3'],
                            id: 'audiomp3_1',
                            rect: ['912', '319', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '213px', '31px']
                        }
                    }
                },
                timeline: {
                    duration: 9133,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 124
                    },
                    data: [
                        [
                            "eid190",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${play}",
                            '1',
                            '0'
                        ],
                        [
                            "eid188",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${stop}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid14",
                            "border-color",
                            500,
                            0,
                            "linear",
                            "${stop}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                            [ "eid36", "trigger", 124, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audiomp3_1}', [] ] ]
                    ]
                }
            },
            "audio_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-117px', '0px', '433px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]],
                            c: [
                            {
                                rect: ['190px', '1px', '94px', '31px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Escucha</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                type: 'text'
                            }]
                        },
                        {
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)'],
                            rect: ['52px', '3px', '25px', '25px', 'auto', 'auto'],
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            stroke: [1, 'rgba(255,255,255,1.00)', 'solid'],
                            id: 'stop',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['-23px', '-71px', '175px', '172px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            fill: ['rgba(0,0,0,0)', 'images/play-033.png', '0px', '0px'],
                            id: 'play',
                            opacity: '1',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/audiomp3_3.mp3'],
                            id: 'audiomp3_3',
                            rect: ['969', '219', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '213px', '31px']
                        }
                    }
                },
                timeline: {
                    duration: 11587,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 124
                    },
                    data: [
                        [
                            "eid190",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${play}",
                            '1',
                            '0'
                        ],
                        [
                            "eid188",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${stop}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid16",
                            "border-color",
                            500,
                            0,
                            "linear",
                            "${stop}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                            [ "eid38", "trigger", 124, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audiomp3_3}', [] ] ]
                    ]
                }
            },
            "audio_5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-117px', '0px', '433px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]],
                            c: [
                            {
                                rect: ['190px', '1px', '94px', '31px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Escucha</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                type: 'text'
                            }]
                        },
                        {
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)'],
                            rect: ['52px', '3px', '25px', '25px', 'auto', 'auto'],
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            stroke: [1, 'rgba(255,255,255,1.00)', 'solid'],
                            id: 'stop',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['-23px', '-71px', '175px', '172px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            fill: ['rgba(0,0,0,0)', 'images/play-033.png', '0px', '0px'],
                            id: 'play',
                            opacity: '1',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/audiomp3_5.mp3'],
                            id: 'audiomp3_5',
                            rect: ['1009', '159', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '213px', '31px']
                        }
                    }
                },
                timeline: {
                    duration: 14239,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 124
                    },
                    data: [
                        [
                            "eid190",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${play}",
                            '1',
                            '0'
                        ],
                        [
                            "eid188",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${stop}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid18",
                            "border-color",
                            500,
                            0,
                            "linear",
                            "${stop}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                            [ "eid40", "trigger", 124, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audiomp3_5}', [] ] ]
                    ]
                }
            },
            "audio_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-117px', '0px', '433px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]],
                            c: [
                            {
                                rect: ['190px', '1px', '94px', '31px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Escucha</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                type: 'text'
                            }]
                        },
                        {
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)'],
                            rect: ['52px', '3px', '25px', '25px', 'auto', 'auto'],
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            stroke: [1, 'rgba(255,255,255,1.00)', 'solid'],
                            id: 'stop',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['-23px', '-71px', '175px', '172px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            fill: ['rgba(0,0,0,0)', 'images/play-033.png', '0px', '0px'],
                            id: 'play',
                            opacity: '1',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/audiomp3_4.mp3'],
                            id: 'audiomp3_4',
                            rect: ['908', '174', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '213px', '31px']
                        }
                    }
                },
                timeline: {
                    duration: 14239,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 124
                    },
                    data: [
                        [
                            "eid190",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${play}",
                            '1',
                            '0'
                        ],
                        [
                            "eid188",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${stop}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid17",
                            "border-color",
                            500,
                            0,
                            "linear",
                            "${stop}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                            [ "eid39", "trigger", 124, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audiomp3_4}', [] ] ]
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

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
                        }
                    }
                },
                timeline: {
                    duration: 14239,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "audio_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-117px', '0px', '433px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]],
                            c: [
                            {
                                rect: ['190px', '1px', '94px', '31px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Escucha</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                type: 'text'
                            }]
                        },
                        {
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)'],
                            rect: ['52px', '3px', '25px', '25px', 'auto', 'auto'],
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            stroke: [1, 'rgba(255,255,255,1.00)', 'solid'],
                            id: 'stop',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['-23px', '-71px', '175px', '172px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.2', '0.2']],
                            fill: ['rgba(0,0,0,0)', 'images/play-033.png', '0px', '0px'],
                            id: 'play',
                            opacity: '1',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/audiomp3_2.mp3'],
                            id: 'audiomp3_2',
                            rect: ['833', '292', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '213px', '31px']
                        }
                    }
                },
                timeline: {
                    duration: 9133,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 124
                    },
                    data: [
                        [
                            "eid190",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${play}",
                            '1',
                            '0'
                        ],
                        [
                            "eid188",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${stop}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid15",
                            "border-color",
                            500,
                            0,
                            "linear",
                            "${stop}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                            [ "eid37", "trigger", 124, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${audiomp3_2}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("final_respuestas_edgeActions.js");
})("EDGE-130489217");
