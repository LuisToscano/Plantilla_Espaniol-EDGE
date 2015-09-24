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
            js+"EdgeCommons.js",
            js+"utility.js",
            js+"main.js",
            js+"actividades_result.js",
            js+"r6.js",
            js+"scramble.js"
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
                            id: 'SCRABBLE_SLIDE_1',
                            symbolName: 'SCRABBLE_SLIDE_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['1830px', '0', '1830', '780', 'auto', 'auto']
                        },
                        {
                            id: 'SCRABBLE_SLIDE_2',
                            symbolName: 'SCRABBLE_SLIDE_2',
                            type: 'rect',
                            rect: ['-1830px', '0', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'SCRABBLE_SLIDE_3',
                            symbolName: 'SCRABBLE_SLIDE_3',
                            type: 'rect',
                            rect: ['1830px', '0', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'SCRABBLE_SLIDE_4',
                            symbolName: 'SCRABBLE_SLIDE_4',
                            display: 'block',
                            type: 'rect',
                            rect: ['1830px', '0', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'SCRABBLE_RESPUESTAS',
                            symbolName: 'SCRABBLE_RESPUESTAS',
                            display: 'none',
                            type: 'rect',
                            rect: ['1830px', '0', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'TextCopy2',
                            display: 'none',
                            type: 'text',
                            rect: ['84px', '66px', '1685px', '81px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; line-height: 34px;\">​Los sufijos se ubican al final de las palabras y son letras del abecedario, por ejemplo: finalizado en o, e, or  para masculino; a, dad, sión para femenino. <span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy',
                            display: 'none',
                            type: 'text',
                            rect: ['84px', '146px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Los géneros de las palabras se crean a partir de elementos pequeños que se llaman sufijos.</p>",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "700", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text',
                            display: 'none',
                            type: 'text',
                            rect: ['84px', '192px', '1685px', '94px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Instrucción: seleccione y arrastre las letras necesarias para conformar la palabra correspondiente a la imagen. Tenga en cuenta que no todas las letras se van a utilizar. Tiene dos intentos y dos minutos para esta actividad.<span style=\"font-family: source-sans-pro, sans-serif; font-size: 20px;\"></span></p>",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none", "italic", "break-word", ""],
                            textStyle: ["", "", "34px", "", ""]
                        },
                        {
                            id: 'vineta_lila',
                            display: 'none',
                            type: 'image',
                            rect: ['55px', '155px', '14px', '21px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"vineta_lila.png",'0px','0px']
                        },
                        {
                            id: 'Submit',
                            symbolName: 'Submit',
                            display: 'none',
                            type: 'rect',
                            rect: ['1556px', '696px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'portada_scrabble',
                            symbolName: 'portada_scrabble',
                            display: 'block',
                            type: 'rect',
                            rect: ['0px', '30px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'correctocontenedor',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],[],[],['0.5','0.5']],
                            c: [
                            {
                                id: 'RoundRect',
                                type: 'rect',
                                rect: ['735px', '210px', '360px', '360px', 'auto', 'auto'],
                                borderRadius: ["15px", "15px", "15px", "15px 15px"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                boxShadow: ["", 0, 0, 25, 3, "rgba(70,70,70,0.68)"]
                            },
                            {
                                id: 'correcto',
                                type: 'image',
                                rect: ['840px', '273px', '150px', '150px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"correcto.png",'0px','0px']
                            },
                            {
                                id: 'TextCopy3',
                                type: 'text',
                                rect: ['784px', '475px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​¡Excelente trabajo!</p>",
                                font: ['source-sans-pro, sans-serif', [32, "px"], "rgba(0,0,0,1)", "600", "none", "", "break-word", "nowrap"]
                            },
                            {
                                id: 'cerrar_corr',
                                symbolName: 'cerrar_corr',
                                type: 'rect',
                                rect: ['1032px', '219px', '53', '54', 'auto', 'auto'],
                                cursor: 'pointer'
                            }]
                        },
                        {
                            id: 'incorrecto_1_contenedor',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],['0.5','0.5']],
                            c: [
                            {
                                id: 'RoundRectCopy',
                                type: 'rect',
                                rect: ['735px', '210px', '360px', '360px', 'auto', 'auto'],
                                borderRadius: ["15px", "15px", "15px", "15px 15px"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"],
                                boxShadow: ["", 0, 0, 25, 3, "rgba(70,70,70,0.68)"]
                            },
                            {
                                id: 'volver',
                                symbolName: 'volver',
                                type: 'rect',
                                rect: ['808px', '502px', 'undefined', 'undefined', 'auto', 'auto'],
                                cursor: 'pointer'
                            },
                            {
                                id: 'incorrecto',
                                type: 'image',
                                rect: ['840px', '269px', '150px', '150px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"incorrecto.png",'0px','0px']
                            },
                            {
                                id: 'TextCopy4',
                                type: 'text',
                                rect: ['752px', '419px', '326px', '68px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​¡Respuesta incorrecta!</p>",
                                align: "center",
                                font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "600", "none", "", "break-word", ""],
                                textStyle: ["", "", "62px", "", ""]
                            }]
                        },
                        {
                            id: 'precarga_gif',
                            display: 'block',
                            type: 'image',
                            rect: ['834px', '679px', '161px', '12px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"precarga_gif.gif",'0px','0px']
                        },
                        {
                            id: 'btn_inicio_scrabble',
                            symbolName: 'btn_inicio_scrabble',
                            display: 'none',
                            type: 'rect',
                            rect: ['-282px', '663px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'Skills',
                            symbolName: 'Skills',
                            display: 'none',
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
                    duration: 8500,
                    autoPlay: true,
                    labels: {
                        "slide1": 2000,
                        "slide2": 2500,
                        "slide3": 3000,
                        "slide4": 3500,
                        "correcto": 4250,
                        "incorrecto": 5000,
                        "respuestas": 8000
                    },
                    data: [
                        [
                            "eid110",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Submit}",
                            'none',
                            'block'
                        ],
                        [
                            "eid278",
                            "display",
                            4160,
                            0,
                            "linear",
                            "${Submit}",
                            'block',
                            'none'
                        ],
                        [
                            "eid111",
                            "display",
                            0,
                            0,
                            "linear",
                            "${vineta_lila}",
                            'none',
                            'block'
                        ],
                        [
                            "eid271",
                            "display",
                            4160,
                            0,
                            "linear",
                            "${vineta_lila}",
                            'block',
                            'none'
                        ],
                        [
                            "eid196",
                            "left",
                            2000,
                            500,
                            "linear",
                            "${SCRABBLE_SLIDE_1}",
                            '1830px',
                            '0px'
                        ],
                        [
                            "eid197",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${SCRABBLE_SLIDE_1}",
                            '0px',
                            '-1830px'
                        ],
                        [
                            "eid262",
                            "scaleY",
                            4250,
                            500,
                            "linear",
                            "${correctocontenedor}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid361",
                            "display",
                            0,
                            0,
                            "linear",
                            "${precarga_gif}",
                            'block',
                            'block'
                        ],
                        [
                            "eid362",
                            "display",
                            1876,
                            0,
                            "linear",
                            "${precarga_gif}",
                            'block',
                            'block'
                        ],
                        [
                            "eid363",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${precarga_gif}",
                            'block',
                            'none'
                        ],
                        [
                            "eid407",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Skills}",
                            'none',
                            'block'
                        ],
                        [
                            "eid408",
                            "display",
                            4160,
                            0,
                            "linear",
                            "${Skills}",
                            'block',
                            'none'
                        ],
                        [
                            "eid193",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${SCRABBLE_SLIDE_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid330",
                            "display",
                            8000,
                            0,
                            "linear",
                            "${SCRABBLE_RESPUESTAS}",
                            'none',
                            'block'
                        ],
                        [
                            "eid218",
                            "left",
                            3000,
                            500,
                            "linear",
                            "${SCRABBLE_SLIDE_3}",
                            '1830px',
                            '0px'
                        ],
                        [
                            "eid252",
                            "left",
                            3500,
                            500,
                            "linear",
                            "${SCRABBLE_SLIDE_3}",
                            '0px',
                            '-1830px'
                        ],
                        [
                            "eid332",
                            "left",
                            8000,
                            500,
                            "linear",
                            "${SCRABBLE_RESPUESTAS}",
                            '1830px',
                            '0px'
                        ],
                        [
                            "eid212",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${SCRABBLE_SLIDE_2}",
                            '1830px',
                            '0px'
                        ],
                        [
                            "eid213",
                            "left",
                            3000,
                            500,
                            "linear",
                            "${SCRABBLE_SLIDE_2}",
                            '0px',
                            '-1830px'
                        ],
                        [
                            "eid166",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${portada_scrabble}",
                            'block',
                            'none'
                        ],
                        [
                            "eid254",
                            "left",
                            3500,
                            500,
                            "linear",
                            "${SCRABBLE_SLIDE_4}",
                            '1830px',
                            '0px'
                        ],
                        [
                            "eid287",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${incorrecto_1_contenedor}",
                            'none',
                            'block'
                        ],
                        [
                            "eid288",
                            "display",
                            5750,
                            0,
                            "linear",
                            "${incorrecto_1_contenedor}",
                            'block',
                            'none'
                        ],
                        [
                            "eid285",
                            "opacity",
                            5000,
                            500,
                            "linear",
                            "${incorrecto_1_contenedor}",
                            '0',
                            '1'
                        ],
                        [
                            "eid263",
                            "display",
                            4250,
                            0,
                            "linear",
                            "${correctocontenedor}",
                            'none',
                            'block'
                        ],
                        [
                            "eid264",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${correctocontenedor}",
                            'block',
                            'none'
                        ],
                        [
                            "eid270",
                            "display",
                            4250,
                            0,
                            "linear",
                            "${SCRABBLE_SLIDE_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid113",
                            "display",
                            0,
                            0,
                            "linear",
                            "${TextCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid275",
                            "display",
                            4160,
                            0,
                            "linear",
                            "${TextCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid450",
                            "left",
                            0,
                            0,
                            "linear",
                            "${btn_inicio_scrabble}",
                            '802px',
                            '802px'
                        ],
                        [
                            "eid451",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${btn_inicio_scrabble}",
                            '802px',
                            '-282px'
                        ],
                        [
                            "eid112",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid272",
                            "display",
                            4160,
                            0,
                            "linear",
                            "${Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid381",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_inicio_scrabble}",
                            'none',
                            'none'
                        ],
                        [
                            "eid260",
                            "scaleX",
                            4250,
                            500,
                            "linear",
                            "${correctocontenedor}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid114",
                            "display",
                            0,
                            0,
                            "linear",
                            "${TextCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid276",
                            "display",
                            4160,
                            0,
                            "linear",
                            "${TextCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid284",
                            "scaleX",
                            5000,
                            500,
                            "linear",
                            "${incorrecto_1_contenedor}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid286",
                            "scaleY",
                            5000,
                            500,
                            "linear",
                            "${incorrecto_1_contenedor}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid261",
                            "opacity",
                            4250,
                            500,
                            "linear",
                            "${correctocontenedor}",
                            '0',
                            '1'
                        ]
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
                            rect: ['0px', '0px', '213px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]],
                            c: [
                            {
                                type: 'text',
                                rect: ['60px', '0px', '94px', '31px', 'auto', 'auto'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Enviar</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
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
            "clock_circle": {
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
                            rect: [null, null, '70px', '70px']
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
            "TIMER_CONTAINER": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Group',
                            rect: ['2px', '2px', '70', '70', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '70px', '70px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'Ellipse',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                rect: ['32px', '2px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'Ellipse2Copy7',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(150,111,190,0.81)']
                            },
                            {
                                rect: ['55px', '14px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'Ellipse2Copy6',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(150,111,190,0.81)']
                            },
                            {
                                rect: ['8px', '14px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'Ellipse2Copy5',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(150,111,190,0.81)']
                            },
                            {
                                rect: ['55px', '50px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'Ellipse2Copy4',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(150,111,190,0.81)']
                            },
                            {
                                rect: ['8px', '50px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'Ellipse2Copy3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(150,111,190,0.81)']
                            },
                            {
                                rect: ['62px', '32px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'Ellipse2Copy2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(150,111,190,0.81)']
                            },
                            {
                                rect: ['2px', '32px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'Ellipse2Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(150,111,190,0.81)']
                            },
                            {
                                rect: ['32px', '62px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'Ellipse2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(150,111,190,0.81)']
                            }]
                        },
                        {
                            id: 'clock_circle3',
                            rect: ['2px', '2px', '70', '70', 'auto', 'auto'],
                            symbolName: 'clock_circle',
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            id: 'segundero',
                            symbolName: 'segundero',
                            display: 'block',
                            rect: ['34px', '6px', '6', '33', 'auto', 'auto']
                        },
                        {
                            type: 'text',
                            rect: ['4px', '22px', '67px', '38px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text2',
                            text: '<p style=\"margin: 0px;\">​TIMER</p>',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, '298px', '74px']
                        }
                    }
                },
                timeline: {
                    duration: 2250,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "12": 1000,
                        "2": 2250
                    },
                    data: [
                        [
                            "eid1136",
                            "background-color",
                            1000,
                            500,
                            "linear",
                            "${Ellipse}",
                            'rgba(79,45,110,1)',
                            'rgba(79,45,110,0.61)'
                        ],
                        [
                            "eid1147",
                            "background-color",
                            1500,
                            500,
                            "linear",
                            "${Ellipse}",
                            'rgba(79,45,110,0.61)',
                            'rgba(79,45,110,1.00)'
                        ],
                        [
                            "eid1613",
                            "display",
                            2250,
                            0,
                            "linear",
                            "${segundero}",
                            'block',
                            'none'
                        ],
                            [ "eid1709", "trigger", 2250, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${segundero}', [] ] ]
                    ]
                }
            },
            "segundero": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1px', '0px', '4px', '33px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(150,111,190,0.81)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '6px', '33px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid274",
                            "rotateZ",
                            0,
                            2000,
                            "linear",
                            "${RoundRect3}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid273",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${RoundRect3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid457",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${RoundRect3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid458",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${RoundRect3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid459",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${RoundRect3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid460",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${RoundRect3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid461",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${RoundRect3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            },
            "portada_scrabble": {
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
                            id: 'img_s',
                            rect: ['289px', '397px', '144px', '142px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/img_s.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'img_c',
                            rect: ['459px', '397px', '144px', '142px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/img_c.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'img_r',
                            rect: ['629px', '397px', '144px', '142px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/img_r.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'img_a',
                            rect: ['799px', '397px', '144px', '142px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/img_a.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'img_b',
                            rect: ['969px', '397px', '144px', '156px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/img_m.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'img_b2',
                            rect: ['1136px', '397px', '144px', '142px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/img_b.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'img_l',
                            rect: ['1306px', '397px', '144px', '142px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/img_l.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'img_e',
                            rect: ['1476px', '397px', '144px', '142px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/img_e.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '560px', '1830px', '8px', 'auto', 'auto'],
                            id: 'linea01',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['188px', '573px', '1400px', '8px', 'auto', 'auto'],
                            id: 'linea02',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '581px']
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
            "btn_inicio_scrabble": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '3px', '225px', '50px', 'auto', 'auto'],
                            borderRadius: ['25px', '25px', '25px', '25px 25px'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(214,219,65,1.00)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]]
                        },
                        {
                            rect: ['14px', '11px', '200px', '36px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-weight: 700; font-size: 28px;\">Iniciar</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '225px', '56px']
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
            "SCRABBLE_SLIDE_1": {
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
                            id: 'rect_slide1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            fill: ['rgba(122,28,28,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
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
            "SCRABBLE_SLIDE_2": {
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
                            id: 'rect_slide1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            fill: ['rgba(60,28,122,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
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
            "SCRABBLE_SLIDE_3": {
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
                            id: 'rect_slide1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            fill: ['rgba(28,122,113,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
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
            "SCRABBLE_SLIDE_4": {
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
                            id: 'rect_slide1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            fill: ['rgba(57,122,28,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
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
            "cerrar_corr": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
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
            "volver": {
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
                            rect: ['0px', '0px', '213px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]],
                            c: [
                            {
                                rect: ['0px', '0px', '213px', '31px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Volver a intentar</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                type: 'text'
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
            "SCRABBLE_RESPUESTAS": {
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
                            id: 'rect_slide1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '1830px', '780px', 'auto', 'auto'],
                            fill: ['rgba(221,119,17,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '780px']
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
            "volver2": {
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
                                rect: ['0px', '-1px', '213px', '31px', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', '700', 'none', '', 'break-word', 'normal'],
                                id: 'Text',
                                text: '<p style=\"margin: 0px; text-align: center;\">​Ver respuestas</p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                type: 'text'
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
                            transform: [[], [], [], ['0.45', '0.45']],
                            tag: 'img',
                            id: 'V_HABLA',
                            type: 'image',
                            rect: ['-24px', '16px', '141px', '141px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/V_HABLA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_oral',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['-18px', '-22px', '129px', '63px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(0,104,95,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['55px', '48px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,104,95,1.00)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy2',
                                text: '<p style=\"margin: 0px;\">​Producción</p><p style=\"margin: 0px;\">​oral</p>',
                                textStyle: ['', '', '23px', '', ''],
                                rect: ['8px', '8px', 'auto', 'auto', 'auto', 'auto']
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
                            transform: [[], [], [], ['0.45', '0.45']],
                            tag: 'img',
                            id: 'V_ESCUCHA',
                            type: 'image',
                            rect: ['-12px', '12px', '141px', '141px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/V_ESCUCHA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_auditiva',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['-15px', '-25px', '148px', '63px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(0,104,95,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['64px', '48px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,104,95,1.00)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy',
                                text: '<p style=\"margin: 0px;\">​Comprensión</p><p style=\"margin: 0px;\">​auditiva</p>',
                                textStyle: ['', '', '23px', '', ''],
                                rect: ['7px', '8px', 'auto', 'auto', 'auto', 'auto']
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
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'Skills',
                            type: 'image',
                            rect: ['-122px', '-30px', '530px', '250px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Skills.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            display: 'none',
                            id: 'B_ESCRITA',
                            rect: ['44px', '33px', '141px', '141px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/B_ESCRITURA.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            display: 'none',
                            id: 'B_ORAL',
                            rect: ['157px', '35px', '141px', '141px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.45', '0.45']],
                            fill: ['rgba(0,0,0,0)', 'images/B_HABLA.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            display: 'none',
                            id: 'B_LECTORA',
                            rect: ['-12px', '14px', '141px', '141px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/B_LECTURA.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            display: 'none',
                            id: 'B_AUDITIVA',
                            rect: ['100px', '14px', '141px', '141px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.45', '0.45']],
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
                            rect: [null, null, '283px', '157px']
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
                            'none',
                            'none'
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
                            "eid50",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_ORAL}",
                            'none',
                            'none'
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
                            transform: [[], [], [], ['0.45', '0.45']],
                            tag: 'img',
                            id: 'V_LECTURA',
                            type: 'image',
                            rect: ['-12px', '15px', '140px', '140px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/V_LECTURA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_lectora',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '-23px', '149px', '63px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(0,104,95,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['48px', '48px', '20px', '20px', 'auto', 'auto'],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,104,95,1.00)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​Comprensión</p><p style=\"margin: 0px;\">​lectora</p>',
                                textStyle: ['', '', '23px', '', ''],
                                rect: ['7px', '8px', 'auto', 'auto', 'auto', 'auto']
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
                            transform: [[], [], [], ['0.45', '0.45']],
                            tag: 'img',
                            id: 'V_ESCRITURA',
                            type: 'image',
                            rect: ['-18px', '17px', '141px', '141px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/V_ESCRITURA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_escrita',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['-10px', '-19px', '129px', '63px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(0,104,95,1.00)'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            c: [
                            {
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                rect: ['54px', '48px', '20px', '20px', 'auto', 'auto'],
                                id: 'RectangleCopy3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,104,95,1.00)']
                            },
                            {
                                font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
                                type: 'text',
                                align: 'center',
                                id: 'TextCopy3',
                                text: '<p style=\"margin: 0px;\">​Producción</p><p style=\"margin: 0px;\">​escrita</p>',
                                textStyle: ['', '', '23px', '', ''],
                                rect: ['7px', '8px', 'auto', 'auto', 'auto', 'auto']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("contenedor_externo_edgeActions.js");
})("EDGE-61332511");
