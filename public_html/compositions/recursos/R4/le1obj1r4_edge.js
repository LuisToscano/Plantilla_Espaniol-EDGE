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
            js+"jquery-1.10.2.js",
            js+"jquery-ui-1.10.4.custom.min.js",
            js+"dragAndDropUtilities.js",
            js+"interactionUtilities.js",
            js+"utility.js",
            js+"audioUtilities.js",
            js+"video.js",
            js+"videoUtilities.js",
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
                            id: 'esn1le01ob01re3au5hache',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: ['audios/esn1le01ob01re3au5hache.wav'],
                            preload: 'auto'
                        },
                        {
                            id: 'esn1le01ob01re3au4ese',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: ['audios/esn1le01ob01re3au4ese.wav'],
                            preload: 'auto'
                        },
                        {
                            id: 'esn1le01ob01re3au3erre',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: ['audios/esn1le01ob01re3au3erre.wav'],
                            preload: 'auto'
                        },
                        {
                            id: 'esn1le01ob01re3au2pe',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: ['audios/esn1le01ob01re3au2pe.wav'],
                            preload: 'auto'
                        },
                        {
                            id: 'esn1le01ob01re3au1eme',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: ['audios/esn1le01ob01re3au1eme.wav'],
                            preload: 'auto'
                        },
                        {
                            id: 'texto_1_empuja_cont_1',
                            type: 'text',
                            rect: ['55px', '62px', '1720px', '30px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; line-height: 40px;\">​<span style=\"font-size: 30px;\"></span>Las letras del alfabeto español están presentes en otros alfabetos, pero en cada uno, los nombres de las mismas son exclusivos.​</p><p style=\"margin: 0px; line-height: 40px;\"><span style=\"font-size: 30px;\">​</span></p><p style=\"margin: 0px; line-height: 40px;\"><span style=\"font-family: sena_icon; font-weight: 900; font-style: normal; text-decoration: none; font-size: 30px; color: rgb(84, 53, 118); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">Z</span><span style=\"font-weight: 700; font-size: 30px;\">Relacione las letras con su respectivo nombre</span></p><p style=\"margin: 0px; line-height: 40px;\"><span style=\"font-weight: 700; font-size: 30px;\">​</span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 300; font-style: italic; text-decoration: none; font-size: 30px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\">Instrucción: seleccione y arrastre <span style=\"font-weight: 700;\">los nombres a las letras correspondientes</span>. Tiene dos intentos.</p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 300; font-style: italic; text-decoration: none; font-size: 30px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: 40px;\"><br></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'cont_1',
                            type: 'rect',
                            rect: ['0px', '288px', '1830px', '492px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: 'DROP_1',
                                symbolName: 'DROP_1',
                                type: 'rect',
                                rect: ['1374px', '33px', '155', '63', 'auto', 'auto']
                            },
                            {
                                id: 'DROP_2',
                                symbolName: 'DROP_2',
                                type: 'rect',
                                rect: ['1374px', '106px', 'undefined', 'undefined', 'auto', 'auto']
                            },
                            {
                                id: 'DROP_3',
                                symbolName: 'DROP_3',
                                type: 'rect',
                                rect: ['1374px', '177px', 'undefined', 'undefined', 'auto', 'auto']
                            },
                            {
                                id: 'DROP_4',
                                symbolName: 'DROP_4',
                                type: 'rect',
                                rect: ['1374px', '249px', 'undefined', 'undefined', 'auto', 'auto']
                            },
                            {
                                id: 'DROP_5',
                                symbolName: 'DROP_5',
                                type: 'rect',
                                rect: ['1374px', '322px', 'undefined', 'undefined', 'auto', 'auto']
                            },
                            {
                                id: 'DRAG_1',
                                symbolName: 'DRAG_1',
                                type: 'rect',
                                rect: ['1589px', '113px', '140', '48', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'DRAG_2',
                                symbolName: 'DRAG_2',
                                type: 'rect',
                                rect: ['1589px', '329px', '140', '48', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'DRAG_3',
                                symbolName: 'DRAG_3',
                                type: 'rect',
                                rect: ['1589px', '256px', '140', '48', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'DRAG_4',
                                symbolName: 'DRAG_4',
                                type: 'rect',
                                rect: ['1589px', '41px', '140', '48', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'DRAG_5',
                                symbolName: 'DRAG_5',
                                type: 'rect',
                                rect: ['1589px', '184px', '140', '48', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'audio_1',
                                symbolName: 'audio_1',
                                type: 'rect',
                                rect: ['1003px', '57px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'audio_5',
                                symbolName: 'audio_5',
                                type: 'rect',
                                rect: ['1003px', '333px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'audio_4',
                                symbolName: 'audio_4',
                                type: 'rect',
                                rect: ['1003px', '264px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'audio_3',
                                symbolName: 'audio_3',
                                type: 'rect',
                                rect: ['1003px', '195px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'audio_2',
                                symbolName: 'audio_2',
                                type: 'rect',
                                rect: ['1003px', '126px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'btn_3',
                                symbolName: 'btn_3',
                                type: 'rect',
                                rect: ['443px', '24px', '126', '41', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'btn_1',
                                symbolName: 'btn_1',
                                type: 'rect',
                                rect: ['192px', '24px', '126', '41', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'btn_2',
                                symbolName: 'btn_2',
                                type: 'rect',
                                rect: ['318px', '24px', '126', '41', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'CONTENEDOR',
                                symbolName: 'CONTENEDOR',
                                type: 'rect',
                                rect: ['113', '49px', '640', '297', 'auto', 'auto']
                            },
                            {
                                id: 'Submit',
                                symbolName: 'Submit',
                                type: 'rect',
                                rect: ['1562px', '391px', '213', '43', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'Skills',
                                symbolName: 'Skills',
                                type: 'rect',
                                rect: ['0px', '329px', '283', '157', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1830px', '780px', 'auto', 'auto'],
                            overflow: 'auto',
                            fill: ["rgba(255,255,255,0.00)",[270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]]
                        }
                    }
                },
                timeline: {
                    duration: 3766,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "btn_enviar": {
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
                            rect: ['0px', '0px', '213px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text',
                                id: 'Text',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Enviar</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                rect: ['60px', '0px', '94px', '31px', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '213px', '31px']
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
            "CONTENEDOR": {
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
                            id: 'RoundRect',
                            stroke: [10, 'rgba(84,53,118,1.00)', 'solid'],
                            rect: ['79px', '9px', '471px', '260px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ['rgba(249,245,245,0.00)'],
                            c: [
                            {
                                rect: ['-2px', '-2px', '479px', '264px', 'auto', 'auto'],
                                borderRadius: ['3px', '3px', '3px', '3px 3px'],
                                id: 'cont_video_1',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,1)']
                            },
                            {
                                rect: ['-6px', '0px', '483px', '264px', 'auto', 'auto'],
                                borderRadius: ['5px', '5px', '5px', '5px 5px'],
                                id: 'cont_video_2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,1)']
                            },
                            {
                                rect: ['-4px', '-1px', '479px', '264px', 'auto', 'auto'],
                                borderRadius: ['2px', '2px', '2px', '2px 2px'],
                                id: 'cont_video_3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(192,192,192,1)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '640px', '297px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    labels: {
                        "A": 0,
                        "B": 1000,
                        "C": 2000
                    },
                    data: [

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
                            type: 'rect',
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['-117px', '0px', '433px', '43px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text',
                                align: 'left',
                                id: 'texto_5',
                                text: '<p style=\"margin: 0px; text-align: left;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255); font-size: 25px;\">Escucha</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                rect: ['199px', '0px', '234px', '31px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'rect',
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            id: 'stop',
                            opacity: '0',
                            rect: ['52px', '8px', '25px', '25px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)'],
                            stroke: [1, 'rgba(0,0,0,1.00)', 'solid'],
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            transform: [[], [], [], ['0.2', '0.2']],
                            tag: 'img',
                            id: 'play-03',
                            type: 'image',
                            rect: ['-23px', '-65px', '175px', '172px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/play-03.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/r6_audio_1.mp3'],
                            id: 'r6_audio_1',
                            rect: ['1258', '600', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '213px', '31px']
                        }
                    }
                },
                timeline: {
                    duration: 2902,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 124
                    },
                    data: [
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
                            "eid364",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${play-03}",
                            '1',
                            '0'
                        ],
                            [ "eid359", "trigger", 124, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${r6_audio_1}', [] ] ]
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
                            type: 'rect',
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['-117px', '0px', '433px', '43px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text',
                                id: 'texto_6',
                                text: '<p style=\"margin: 0px; text-align: left;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255); font-size: 25px;\">Escucha</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                rect: ['199px', '0px', '234px', '31px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'rect',
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            id: 'stop',
                            opacity: '0',
                            rect: ['52px', '8px', '25px', '25px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)'],
                            stroke: [1, 'rgba(0,0,0,1.00)', 'solid'],
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            transform: [[], [], [], ['0.2', '0.2']],
                            tag: 'img',
                            id: 'play-03',
                            type: 'image',
                            rect: ['-23px', '-65px', '175px', '172px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/play-03.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/r6_audio_2.mp3'],
                            id: 'r6_audio_2',
                            rect: ['917', '564', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '213px', '31px']
                        }
                    }
                },
                timeline: {
                    duration: 3766,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 124
                    },
                    data: [
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
                            "eid365",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${play-03}",
                            '1',
                            '0'
                        ],
                            [ "eid360", "trigger", 124, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${r6_audio_2}', [] ] ]
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
                            type: 'rect',
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['-117px', '0px', '433px', '43px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text',
                                id: 'texto_7',
                                text: '<p style=\"margin: 0px; text-align: left;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255); font-size: 25px;\">Escucha</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                rect: ['199px', '0px', '234px', '31px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'rect',
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            id: 'stop',
                            opacity: '0',
                            rect: ['52px', '8px', '25px', '25px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)'],
                            stroke: [1, 'rgba(0,0,0,1.00)', 'solid'],
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            transform: [[], [], [], ['0.2', '0.2']],
                            tag: 'img',
                            id: 'play-03Copy',
                            type: 'image',
                            rect: ['-23px', '-65px', '175px', '172px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/play-03.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/r6_audio_3.mp3'],
                            id: 'r6_audio_3',
                            rect: ['793', '503', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '213px', '31px']
                        }
                    }
                },
                timeline: {
                    duration: 3152,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 124
                    },
                    data: [
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
                            "eid366",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${play-03Copy}",
                            '1',
                            '0'
                        ],
                            [ "eid361", "trigger", 124, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${r6_audio_3}', [] ] ]
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
                            type: 'rect',
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['-117px', '0px', '433px', '43px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text',
                                id: 'texto_8',
                                text: '<p style=\"margin: 0px; text-align: left;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255); font-size: 25px;\">Escucha</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                rect: ['199px', '0px', '234px', '31px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'rect',
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            id: 'stop',
                            opacity: '0',
                            rect: ['52px', '8px', '25px', '25px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)'],
                            stroke: [1, 'rgba(0,0,0,1.00)', 'solid'],
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            transform: [[], [], [], ['0.2', '0.2']],
                            tag: 'img',
                            id: 'play-03',
                            type: 'image',
                            rect: ['-23px', '-65px', '175px', '172px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/play-03.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/r6_audio_4.mp3'],
                            id: 'r6_audio_4',
                            rect: ['1222', '572', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '213px', '31px']
                        }
                    }
                },
                timeline: {
                    duration: 3514,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 124
                    },
                    data: [
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
                            "eid367",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${play-03}",
                            '1',
                            '0'
                        ],
                            [ "eid362", "trigger", 124, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${r6_audio_4}', [] ] ]
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
                            type: 'rect',
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['-117px', '0px', '433px', '43px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(90,114,173,1.00)', 50], ['rgba(68,90,144,1.00)', 50]]]],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text',
                                id: 'texto_9',
                                text: '<p style=\"margin: 0px; text-align: left;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255); font-size: 25px;\">Escucha</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                rect: ['199px', '0px', '234px', '31px', 'auto', 'auto']
                            }]
                        },
                        {
                            type: 'rect',
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            id: 'stop',
                            opacity: '0',
                            rect: ['52px', '8px', '25px', '25px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1)'],
                            stroke: [1, 'rgba(0,0,0,1.00)', 'solid'],
                            boxShadow: ['', 2, 2, 4, 0, 'rgba(0,0,0,0.65098)']
                        },
                        {
                            transform: [[], [], [], ['0.2', '0.2']],
                            tag: 'img',
                            id: 'play-03Copy3',
                            type: 'image',
                            rect: ['-23px', '-65px', '175px', '172px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/play-03.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/r6_audio_5.mp3'],
                            id: 'r6_audio_5',
                            rect: ['1088', '493', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '213px', '31px']
                        }
                    }
                },
                timeline: {
                    duration: 3478,
                    autoPlay: true,
                    labels: {
                        "stop": 0,
                        "play": 124
                    },
                    data: [
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
                            "eid368",
                            "opacity",
                            0,
                            124,
                            "linear",
                            "${play-03Copy3}",
                            '1',
                            '0'
                        ],
                            [ "eid363", "trigger", 124, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${r6_audio_5}', [] ] ]
                    ]
                }
            },
            "btn_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '112px', '27px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px 18px', '0px', '0px'],
                            id: 'Rectangle4Copy5',
                            stroke: [7, 'rgba(79,45,110,0.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(139,116,161,1.00)']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'italic', 'break-word', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'texto_2',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-style: normal; font-weight: 700; color: rgb(255, 255, 255);\">Video 1</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['0px', '1px', '126px', '30px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '126px', '41px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "seleccionado": 1000
                    },
                    data: [
                        [
                            "eid354",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Rectangle4Copy5}",
                            'rgba(139,116,161,1.00)',
                            'rgba(139,116,161,1.00)'
                        ],
                        [
                            "eid353",
                            "background-color",
                            1000,
                            0,
                            "linear",
                            "${Rectangle4Copy5}",
                            'rgba(139,116,161,1.00)',
                            'rgba(84,53,118,1.00)'
                        ]
                    ]
                }
            },
            "btn_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '112px', '27px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px 18px', '0px', '0px'],
                            id: 'Rectangle4Copy4',
                            stroke: [7, 'rgba(79,45,110,0.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(84,53,118,1.00)']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'italic', 'break-word', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'texto_3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-style: normal; font-weight: 700; color: rgb(255, 255, 255);\">Video 2</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['0px', '1px', '126px', '30px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '126px', '41px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "seleccionado": 1000
                    },
                    data: [
                        [
                            "eid355",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Rectangle4Copy4}",
                            'rgba(139,116,161,1)',
                            'rgba(139,116,161,1)'
                        ],
                        [
                            "eid356",
                            "background-color",
                            1000,
                            0,
                            "linear",
                            "${Rectangle4Copy4}",
                            'rgba(139,116,161,1)',
                            'rgba(84,53,118,1.00)'
                        ]
                    ]
                }
            },
            "btn_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '112px', '27px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px 18px', '0px', '0px'],
                            id: 'Rectangle4Copy3',
                            stroke: [7, 'rgba(79,45,110,0.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(84,53,118,1.00)']
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'italic', 'break-word', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'texto_4',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-style: normal; font-weight: 700; color: rgb(255, 255, 255);\">Video 3</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['0px', '1px', '126px', '30px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '126px', '41px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "seleccionado": 1000
                    },
                    data: [
                        [
                            "eid358",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Rectangle4Copy3}",
                            'rgba(139,116,161,1)',
                            'rgba(139,116,161,1)'
                        ],
                        [
                            "eid357",
                            "background-color",
                            1000,
                            0,
                            "linear",
                            "${Rectangle4Copy3}",
                            'rgba(139,116,161,1)',
                            'rgba(84,53,118,1.00)'
                        ]
                    ]
                }
            },
            "DRAG_4": {
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
                            id: 'RoundRect11',
                            stroke: [7, 'rgb(139, 116, 161)', 'solid'],
                            rect: ['0px', '0px', '126px', '34px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            fill: ['rgba(139,116,161,1)'],
                            c: [
                            {
                                type: 'text',
                                rect: ['12px', '-5px', '94px', '38px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                id: 'texto_10',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-style: normal; color: rgb(252, 244, 244); font-size: 28px;\">ese</span></p>',
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'italic', 'break-word', 'normal']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '140px', '48px']
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
            "DROP_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '147px', '55px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [4, 'rgba(84,53,118,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '155px', '63px']
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
            "DROP_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '147px', '55px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [4, 'rgba(84,53,118,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '155px', '63px']
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
            "DROP_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '147px', '55px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [4, 'rgba(84,53,118,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '155px', '63px']
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
            "DROP_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '147px', '55px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [4, 'rgba(84,53,118,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '155px', '63px']
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
            "DROP_5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '147px', '55px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect2',
                            stroke: [4, 'rgba(84,53,118,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '155px', '63px']
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
            "DRAG_1": {
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
                            id: 'RoundRect11Copy',
                            stroke: [7, 'rgb(139, 116, 161)', 'solid'],
                            rect: ['0px', '0px', '126px', '34px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            fill: ['rgba(139,116,161,1)'],
                            c: [
                            {
                                type: 'text',
                                rect: ['21px', '-5px', '79px', '38px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                id: 'texto_11',
                                text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(245, 242, 242); font-style: normal; font-size: 28px;\">eme</span></p>',
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'italic', 'break-word', 'normal']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '140px', '48px']
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
            "DRAG_5": {
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
                            id: 'RoundRect11Copy2',
                            stroke: [7, 'rgb(139, 116, 161)', 'solid'],
                            rect: ['0px', '0px', '126px', '34px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            fill: ['rgba(139,116,161,1)'],
                            c: [
                            {
                                type: 'text',
                                rect: ['-7px', '-2px', '140px', '38px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                id: 'texto_12',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-style: normal; color: rgb(243, 233, 233); font-size: 28px;\">hache</span></p>',
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'italic', 'break-word', 'normal']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '140px', '48px']
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
            "DRAG_3": {
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
                            id: 'RoundRect11Copy3',
                            stroke: [7, 'rgb(139, 116, 161)', 'solid'],
                            rect: ['0px', '0px', '126px', '34px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            fill: ['rgba(139,116,161,1)'],
                            c: [
                            {
                                type: 'text',
                                rect: ['21px', '-2px', '80px', '38px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                id: 'texto_13',
                                text: '<p style=\"margin: 0px; text-align: center;\"><span style=\"font-style: normal; color: rgb(249, 240, 240); font-size: 28px;\">erre</span></p>',
                                align: 'left',
                                font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'italic', 'break-word', 'normal']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '140px', '48px']
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
            "DRAG_2": {
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
                            id: 'RoundRect11Copy4',
                            stroke: [7, 'rgb(139, 116, 161)', 'solid'],
                            rect: ['0px', '0px', '126px', '34px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            fill: ['rgba(139,116,161,1)'],
                            c: [
                            {
                                type: 'text',
                                rect: ['18px', '-7px', '79px', '46px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                id: 'texto_14',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-style: normal; color: rgb(243, 238, 238); font-size: 28px;\">pe</span></p>',
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'italic', 'break-word', 'normal']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '140px', '48px']
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
                            type: 'rect',
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '1px', '213px', '43px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text',
                                id: 'texto_enviar',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255); font-size: 25px;\">Enviar</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                rect: ['0px', '-1px', '213px', '31px', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '213px', '43px']
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
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['55px', '48px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'RectangleCopy2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1.00)']
                            },
                            {
                                rect: ['8px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                text: '<p style=\"margin: 0px;\">​Producción</p><p style=\"margin: 0px;\">​oral</p>',
                                id: 'TextCopy2',
                                textStyle: ['', '', '23px', '', ''],
                                align: 'center',
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
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['64px', '48px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'RectangleCopy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1.00)']
                            },
                            {
                                rect: ['7px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                text: '<p style=\"margin: 0px;\">​Comprensión</p><p style=\"margin: 0px;\">​auditiva</p>',
                                id: 'TextCopy',
                                textStyle: ['', '', '23px', '', ''],
                                align: 'center',
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
                            display: 'block',
                            cursor: 'default',
                            fill: ['rgba(0,0,0,0)', 'images/B_ESCRITURA.png', '0px', '0px']
                        },
                        {
                            rect: ['157px', '35px', '141px', '141px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.45', '0.45']],
                            type: 'image',
                            id: 'B_ORAL',
                            display: 'block',
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
                            display: 'none',
                            cursor: 'default',
                            fill: ['rgba(0,0,0,0)', 'images/B_ESCUCHA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'escrita',
                            symbolName: 'escrita',
                            display: 'block',
                            rect: ['62px', '16px', '102', '108', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'oral',
                            symbolName: 'oral',
                            display: 'block',
                            rect: ['181px', '19px', '102', '109', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'lectora',
                            symbolName: 'lectora',
                            display: 'block',
                            rect: ['0px', '-1px', '117', '113', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'auditiva',
                            symbolName: 'auditiva',
                            display: 'block',
                            rect: ['112px', '1px', '117', '104', 'auto', 'auto']
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
                            display: 'none',
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
                            display: 'block',
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
                            display: 'none',
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
                            rect: [null, null, '283px', '157px']
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
                            'none',
                            'none'
                        ],
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
                            'none',
                            'none'
                        ],
                        [
                            "eid41",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Tool_escrita}",
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
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['48px', '48px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1.00)']
                            },
                            {
                                rect: ['7px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                text: '<p style=\"margin: 0px;\">​Comprensión</p><p style=\"margin: 0px;\">​lectora</p>',
                                id: 'Text',
                                textStyle: ['', '', '23px', '', ''],
                                align: 'center',
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
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['54px', '48px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'RectangleCopy3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1.00)']
                            },
                            {
                                rect: ['7px', '8px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                text: '<p style=\"margin: 0px;\">​Producción</p><p style=\"margin: 0px;\">​escrita</p>',
                                id: 'TextCopy3',
                                textStyle: ['', '', '23px', '', ''],
                                align: 'center',
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("le1obj1r4_edgeActions.js");
})("EDGE-6342212");
