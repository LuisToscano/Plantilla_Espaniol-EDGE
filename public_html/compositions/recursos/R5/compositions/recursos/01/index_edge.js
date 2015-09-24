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
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['538px', '293px', '685px', '214px', 'auto', 'auto'],
                            borderRadius: ["18px", "18px", "18px", "18px 18px"],
                            fill: ["rgba(196,196,196,0.00)"],
                            stroke: [5,"rgba(79,45,110,1.00)","solid"]
                        },
                        {
                            id: 'RoundRectCopy',
                            type: 'rect',
                            rect: ['538px', '540px', '672px', '97px', 'auto', 'auto'],
                            borderRadius: ["18px", "18px", "18px", "18px 18px"],
                            fill: ["rgba(196,196,196,0.00)"],
                            stroke: [7,"rgba(79,45,110,1.00)","solid"]
                        },
                        {
                            id: 'estufa',
                            type: 'image',
                            rect: ['542px', '297px', '686px', '215px', 'auto', 'auto'],
                            borderRadius: ["13px", "13px", "13px", "13px 13px"],
                            fill: ["rgba(0,0,0,0)",im+"estufa.jpg",'0px','0px']
                        },
                        {
                            id: 'DROP_1',
                            symbolName: 'DROP_1',
                            type: 'rect',
                            rect: ['591px', '555px', '80', '81', 'auto', 'auto']
                        },
                        {
                            id: 'DROP_2',
                            symbolName: 'DROP_2',
                            type: 'rect',
                            rect: ['691px', '555px', '80', '81', 'auto', 'auto']
                        },
                        {
                            id: 'DROP_3',
                            symbolName: 'DROP_3',
                            type: 'rect',
                            rect: ['791px', '555px', '80', '81', 'auto', 'auto']
                        },
                        {
                            id: 'DROP_4',
                            symbolName: 'DROP_4',
                            type: 'rect',
                            rect: ['891px', '555px', '80', '81', 'auto', 'auto']
                        },
                        {
                            id: 'DROP_5',
                            symbolName: 'DROP_5',
                            type: 'rect',
                            rect: ['991px', '555px', '80', '81', 'auto', 'auto']
                        },
                        {
                            id: 'DROP_6',
                            symbolName: 'DROP_6',
                            type: 'rect',
                            rect: ['1091px', '555px', '80', '81', 'auto', 'auto']
                        },
                        {
                            id: 'DRAG_1',
                            symbolName: 'DRAG_1',
                            type: 'rect',
                            rect: ['545px', '672px', '80', '81', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_7',
                            symbolName: 'DRAG_7',
                            type: 'rect',
                            rect: ['445px', '672px', '80', '81', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_2',
                            symbolName: 'DRAG_2',
                            type: 'rect',
                            rect: ['745px', '672px', '80', '81', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_3',
                            symbolName: 'DRAG_3',
                            type: 'rect',
                            rect: ['945px', '672px', '80', '81', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_4',
                            symbolName: 'DRAG_4',
                            type: 'rect',
                            rect: ['845px', '672px', '80', '81', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_8',
                            symbolName: 'DRAG_8',
                            type: 'rect',
                            rect: ['1145px', '672px', '80', '81', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_9',
                            symbolName: 'DRAG_9',
                            type: 'rect',
                            rect: ['1245px', '672px', '80', '81', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_5',
                            symbolName: 'DRAG_5',
                            type: 'rect',
                            rect: ['645px', '671px', '80', '81', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'DRAG_6',
                            symbolName: 'DRAG_6',
                            type: 'rect',
                            rect: ['1045px', '672px', '80', '81', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'TIMER_CONTAINER',
                            symbolName: 'TIMER_CONTAINER',
                            type: 'rect',
                            rect: ['1532px', '289px', 'undefined', 'undefined', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1830px', '780px', 'auto', 'auto'],
                            overflow: 'auto',
                            fill: ["rgba(255,255,255,0.80)"]
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
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '165px', '38px', 'auto', 'auto'],
                            fill: ['rgba(179,156,0,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Soy un Botón</p>',
                            type: 'text',
                            rect: ['11px', '7px', '154px', '20px', 'auto', 'auto']
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
                            type: 'rect',
                            id: 'clock_circle3',
                            symbolName: 'clock_circle',
                            rect: ['2px', '2px', '70', '70', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            display: 'block',
                            symbolName: 'segundero',
                            rect: ['34px', '6px', '6', '33', 'auto', 'auto'],
                            id: 'segundero'
                        },
                        {
                            font: ['source-sans-pro, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text2',
                            text: '<p style=\"margin: 0px;\">​TIMER</p>',
                            align: 'center',
                            rect: ['4px', '22px', '67px', '38px', 'auto', 'auto']
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
                            rect: ['0px', '0px', '80px', '81px', 'auto', 'auto'],
                            borderRadius: ['13px', '13px', '13px', '13px 13px'],
                            id: 'RoundRect2Copy5',
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
            "DROP_6": {
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
                            id: 'RoundRect2Copy6',
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
                            type: 'image',
                            id: 'e',
                            rect: ['0px', '0px', '80px', '81px', 'auto', 'auto'],
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
                            type: 'image',
                            id: 's',
                            rect: ['0px', '0px', '80px', '81px', 'auto', 'auto'],
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
                            type: 'image',
                            id: 't',
                            rect: ['0px', '0px', '80px', '81px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/t.png', '0px', '0px']
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
                            type: 'image',
                            id: 'u',
                            rect: ['0px', '0px', '80px', '81px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/u.png', '0px', '0px']
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
                            type: 'image',
                            id: 'f',
                            rect: ['0px', '0px', '80px', '81px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/f.png', '0px', '0px']
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
                            type: 'image',
                            id: 'a',
                            rect: ['0px', '0px', '80px', '81px', 'auto', 'auto'],
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
                            type: 'image',
                            id: 'n',
                            rect: ['0px', '0px', '80px', '81px', 'auto', 'auto'],
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
                            type: 'image',
                            id: 'd',
                            rect: ['0px', '0px', '80px', '81px', 'auto', 'auto'],
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
                            type: 'image',
                            id: 'h',
                            rect: ['0px', '0px', '80px', '81px', 'auto', 'auto'],
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
            "timer_box": {
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
                            rect: [null, null, '194px', '45px']
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
                            "eid2439",
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
                            "eid2440",
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
                            "eid2441",
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
                            "eid2442",
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
                            "eid2443",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${RoundRect3}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid274",
                            "rotateZ",
                            0,
                            2000,
                            "linear",
                            "${RoundRect3}",
                            '0deg',
                            '360deg'
                        ]
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
                            type: 'image',
                            id: 'V_HABLA',
                            rect: ['-24px', '16px', '141px', '141px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.45', '0.45']],
                            fill: ['rgba(0,0,0,0)', 'images/V_HABLA3.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_oral',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '-4px', '102px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['41px', '42px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'RectangleCopy2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                type: 'text',
                                rect: ['8px', '6px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '23px', '', ''],
                                id: 'TextCopy2',
                                text: '<p style=\"margin: 0px;\">​Producción</p><p style=\"margin: 0px;\">​oral</p>',
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap']
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
                            type: 'image',
                            id: 'V_ESCUCHA',
                            rect: ['-12px', '12px', '141px', '141px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.45', '0.45']],
                            fill: ['rgba(0,0,0,0)', 'images/V_ESCUCHA3.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_auditiva',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '-9px', '117px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['48px', '42px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'RectangleCopy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                type: 'text',
                                rect: ['7px', '6px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '23px', '', ''],
                                id: 'TextCopy',
                                text: '<p style=\"margin: 0px;\">​Comprensión</p><p style=\"margin: 0px;\">​auditiva</p>',
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap']
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
                            fill: ['rgba(0,0,0,0)', 'images/Skills3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['0.5', '0.5']],
                            display: 'block',
                            rect: ['44px', '33px', '141px', '141px', 'auto', 'auto'],
                            id: 'B_ESCRITURA',
                            fill: ['rgba(0,0,0,0)', 'images/B_ESCRITURA3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['0.45', '0.45']],
                            display: 'none',
                            rect: ['100px', '14px', '141px', '141px', 'auto', 'auto'],
                            id: 'B_ESCUCHA',
                            fill: ['rgba(0,0,0,0)', 'images/B_ESCUCHA3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['0.45', '0.45']],
                            display: 'block',
                            rect: ['157px', '35px', '141px', '141px', 'auto', 'auto'],
                            id: 'B_HABLA',
                            fill: ['rgba(0,0,0,0)', 'images/B_HABLA3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['0.5', '0.5']],
                            display: 'none',
                            rect: ['-12px', '14px', '141px', '141px', 'auto', 'auto'],
                            id: 'B_LECTURA',
                            fill: ['rgba(0,0,0,0)', 'images/B_LECTURA3.png', '0px', '0px']
                        },
                        {
                            rect: ['62px', '16px', '102', '108', 'auto', 'auto'],
                            id: 'escrita',
                            symbolName: 'escrita',
                            type: 'rect',
                            display: 'none'
                        },
                        {
                            rect: ['181px', '19px', '102', '109', 'auto', 'auto'],
                            id: 'oral',
                            symbolName: 'oral',
                            type: 'rect',
                            display: 'none'
                        },
                        {
                            rect: ['0px', '0px', '117', '113', 'auto', 'auto'],
                            id: 'lectora',
                            symbolName: 'lectora',
                            type: 'rect',
                            display: 'block'
                        },
                        {
                            rect: ['112px', '2px', '117', '104', 'auto', 'auto'],
                            id: 'auditiva',
                            symbolName: 'auditiva',
                            type: 'rect',
                            display: 'block'
                        },
                        {
                            rect: ['23px', '50px', '70px', '70px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'Tool_lectora',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(45,110,51,0.00)']
                        },
                        {
                            rect: ['80px', '71px', '70px', '70px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'Tool_escrita',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(45,110,51,0.00)']
                        },
                        {
                            rect: ['136px', '49px', '70px', '70px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'Tool_auditiva',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(45,110,51,0.00)']
                        },
                        {
                            rect: ['192px', '72px', '70px', '70px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'Tool_oral',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(45,110,51,0.00)']
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
                            "eid50",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_HABLA}",
                            'block',
                            'block'
                        ],
                        [
                            "eid51",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_ESCUCHA}",
                            'none',
                            'none'
                        ],
                        [
                            "eid49",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_LECTURA}",
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
                            'none',
                            'none'
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
                            "eid52",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_ESCRITURA}",
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
                            "eid48",
                            "display",
                            0,
                            0,
                            "linear",
                            "${escrita}",
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
                            rect: ['-12px', '15px', '140px', '140px', 'auto', 'auto'],
                            id: 'V_LECTURA',
                            transform: [[], [], [], ['0.5', '0.5']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/V_LECTURA3.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_lectora',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '-13px', '117px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['48px', '42px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                rect: ['7px', '6px', 'auto', 'auto', 'auto', 'auto'],
                                font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap'],
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
                            type: 'image',
                            id: 'V_ESCRITURA',
                            rect: ['-18px', '17px', '141px', '141px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/V_ESCRITURA3.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_escrita',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '-4px', '102px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['41px', '42px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'RectangleCopy3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                type: 'text',
                                rect: ['8px', '6px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '23px', '', ''],
                                id: 'TextCopy3',
                                text: '<p style=\"margin: 0px;\">​Producción</p><p style=\"margin: 0px;\">​escrita</p>',
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-6342212");
