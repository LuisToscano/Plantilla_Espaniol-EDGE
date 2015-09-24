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
            js+"jquery-ui-1.10.4.custom.min.js",
            js+"dragAndDropUtilities.js",
            js+"interactionUtilities.js",
            js+"timerUtilities.js",
            js+"utility.js"
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
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['515px', '293px', '685px', '214px', 'auto', 'auto'],
                            borderRadius: ["18px", "18px", "18px", "18px 18px"],
                            fill: ["rgba(196,196,196,0.00)"],
                            stroke: [5,"rgba(79,45,110,1.00)","solid"]
                        },
                        {
                            id: 'RoundRectCopy',
                            type: 'rect',
                            rect: ['635px', '540px', '434px', '97px', 'auto', 'auto'],
                            borderRadius: ["18px", "18px", "18px", "18px 18px"],
                            fill: ["rgba(196,196,196,0.00)"],
                            stroke: [7,"rgba(79,45,110,1.00)","solid"]
                        },
                        {
                            id: 'mesa',
                            type: 'image',
                            rect: ['519px', '297px', '686px', '215px', 'auto', 'auto'],
                            borderRadius: ["13px", "13px", "13px", "13px 13px"],
                            fill: ["rgba(0,0,0,0)",im+"mesa.jpg",'0px','0px']
                        },
                        {
                            id: 'DROP_1',
                            symbolName: 'DROP_1',
                            type: 'rect',
                            rect: ['669px', '555px', '80', '81', 'auto', 'auto']
                        },
                        {
                            id: 'DROP_2',
                            symbolName: 'DROP_2',
                            type: 'rect',
                            rect: ['766px', '555px', '80', '81', 'auto', 'auto']
                        },
                        {
                            id: 'DROP_3',
                            symbolName: 'DROP_3',
                            type: 'rect',
                            rect: ['866px', '555px', '80', '81', 'auto', 'auto']
                        },
                        {
                            id: 'DROP_4',
                            symbolName: 'DROP_4',
                            type: 'rect',
                            rect: ['966px', '555px', '80', '81', 'auto', 'auto']
                        },
                        {
                            id: 'DRAG_1',
                            symbolName: 'DRAG_1',
                            type: 'rect',
                            rect: ['522px', '672px', '80', '81', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_7',
                            symbolName: 'DRAG_7',
                            type: 'rect',
                            rect: ['422px', '672px', '80', '81', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_2',
                            symbolName: 'DRAG_2',
                            type: 'rect',
                            rect: ['722px', '672px', '80', '81', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_3',
                            symbolName: 'DRAG_3',
                            type: 'rect',
                            rect: ['922px', '672px', '80', '81', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_4',
                            symbolName: 'DRAG_4',
                            type: 'rect',
                            rect: ['822px', '672px', '80', '81', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_8',
                            symbolName: 'DRAG_8',
                            type: 'rect',
                            rect: ['1122px', '672px', '80', '81', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_9',
                            symbolName: 'DRAG_9',
                            type: 'rect',
                            rect: ['1222px', '672px', '80', '81', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_5',
                            symbolName: 'DRAG_5',
                            type: 'rect',
                            rect: ['622px', '671px', '80', '81', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_6',
                            symbolName: 'DRAG_6',
                            type: 'rect',
                            rect: ['1022px', '672px', '80', '81', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'TIMER_CONTAINER',
                            symbolName: 'TIMER_CONTAINER_1',
                            type: 'rect',
                            rect: ['1532px', '289px', 'undefined', 'undefined', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1830px', '780px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
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
                            rect: ['0px', '0px', '165px', '38px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(179,156,0,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Soy un Botón</p>',
                            rect: ['11px', '7px', '154px', '20px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
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
                            rect: ['0px', '0px', '197px', '38px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(193,193,193,1.00)']
                        },
                        {
                            rect: ['22px', '7px', '154px', '38px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text2',
                            text: '<p style=\"margin: 0px;\">​TIMER</p>',
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '197px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "normal": 0,
                        "10": 500
                    },
                    data: [
                        [
                            "eid32",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${Rectangle2}",
                            'rgba(193,193,193,1.00)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid34",
                            "background-color",
                            500,
                            500,
                            "linear",
                            "${Rectangle2}",
                            'rgba(255,0,0,1)',
                            'rgba(193,193,193,1.00)'
                        ],
                        [
                            "eid41",
                            "color",
                            0,
                            500,
                            "linear",
                            "${Text2}",
                            'rgba(0,0,0,1)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid42",
                            "color",
                            500,
                            500,
                            "linear",
                            "${Text2}",
                            'rgba(255,255,255,1.00)',
                            'rgba(0,0,0,1)'
                        ]
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
                            rect: ['0px', '0px', '80px', '81px', 'auto', 'auto'],
                            borderRadius: ['13px', '13px', '13px', '13px 13px'],
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(79, 45, 110)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(217,200,232,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '80px', '81px']
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
                            rect: ['0px', '0px', '80px', '81px', 'auto', 'auto'],
                            borderRadius: ['13px', '13px', '13px', '13px 13px'],
                            id: 'RoundRect2Copy',
                            stroke: [0, 'rgb(79, 45, 110)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(217,200,232,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '80px', '81px']
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
                            rect: ['0px', '0px', '80px', '81px', 'auto', 'auto'],
                            borderRadius: ['13px', '13px', '13px', '13px 13px'],
                            id: 'RoundRect2Copy3',
                            stroke: [0, 'rgb(79, 45, 110)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(217,200,232,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '80px', '81px']
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
                            rect: ['0px', '0px', '80px', '81px', 'auto', 'auto'],
                            borderRadius: ['13px', '13px', '13px', '13px 13px'],
                            id: 'RoundRect2Copy4',
                            stroke: [0, 'rgb(79, 45, 110)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(217,200,232,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '80px', '81px']
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
                            rect: ['0px', '0px', '80px', '81px', 'auto', 'auto'],
                            id: 'm',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/m.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '80px', '81px']
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
                            rect: ['0px', '0px', '80px', '81px', 'auto', 'auto'],
                            id: 'e',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/e.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '80px', '81px']
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
                            rect: ['0px', '0px', '80px', '81px', 'auto', 'auto'],
                            id: 's',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/s.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '80px', '81px']
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
                            rect: ['0px', '0px', '80px', '81px', 'auto', 'auto'],
                            id: 'a',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/a.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '80px', '81px']
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
            "DRAG_7": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '80px', '81px', 'auto', 'auto'],
                            id: 'n',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/n.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '80px', '81px']
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
            "DRAG_8": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '80px', '81px', 'auto', 'auto'],
                            id: 'd',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/d.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '80px', '81px']
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
            "DRAG_9": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '80px', '81px', 'auto', 'auto'],
                            id: 'h',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/h.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '80px', '81px']
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
                            rect: ['0px', '0px', '80px', '81px', 'auto', 'auto'],
                            id: 'r',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/r.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '80px', '81px']
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
            "DRAG_6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '80px', '81px', 'auto', 'auto'],
                            id: 'o',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/o.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '80px', '81px']
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
            "TIMER_CONTAINER_1": {
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
                            rect: ['2px', '2px', '70', '70', 'auto', 'auto'],
                            id: 'clock_circle3',
                            symbolName: 'clock_circle',
                            type: 'rect'
                        },
                        {
                            rect: ['34px', '6px', '6', '33', 'auto', 'auto'],
                            display: 'block',
                            symbolName: 'segundero',
                            id: 'segundero',
                            type: 'rect'
                        },
                        {
                            type: 'text',
                            rect: ['4px', '22px', '67px', '38px', 'auto', 'auto'],
                            align: 'center',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​TIMER</p>',
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
                            "eid60",
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
                            "eid61",
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
                            "eid62",
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
                            "eid63",
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
                            "eid64",
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-6342212");
