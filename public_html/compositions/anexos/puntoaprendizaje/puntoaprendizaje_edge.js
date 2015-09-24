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
                            id: 'contpunto',
                            type: 'rect',
                            rect: ['193px', '206px', '1550px', '769px', 'auto', 'auto'],
                            overflow: 'scroll',
                            borderRadius: ["0px", "0px", "15px 15px", "15px 15px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            c: [
                            {
                                id: 'Rectangle',
                                type: 'rect',
                                rect: ['0px', '-3px', '1550px', '59px', 'auto', 'auto'],
                                fill: ["rgba(115,74,138,1.00)"],
                                stroke: [0,"rgba(0, 0, 0, 0)","none"]
                            },
                            {
                                id: 'texto_1',
                                type: 'text',
                                rect: ['59px', '6px', '1428px', '41px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Resultado de aprendizaje</p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [30.08, "px"], "rgba(255,255,255,1)", "600", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'texto_4_empuja_cont_1',
                                type: 'text',
                                rect: ['59px', '79px', '1428px', '325px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​Relacionar la fonología del español con  los grafemas que corresponden o difieren con los fonemas en el sistema de escritura.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​Las letras del alfabeto representan sonidos de vocales y de consonantes. El español tiene cinco vocales: a, e, i, o, u. Las demás letras representan consonantes.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">En la siguiente tabla puede observar las letras en mayúscula y en minúscula, los nombres y ejemplos en palabras.</p><p style=\"margin: 0px;\">​</p>",
                                align: "left",
                                font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1.00)", "400", "none", "normal", "break-word", ""],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'cont_1',
                                type: 'rect',
                                rect: ['0px', '431px', '1550px', '1541px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,0.00)"],
                                stroke: [0,"rgba(0, 0, 0, 0)","none"],
                                c: [
                                {
                                    id: 'abecedario_punto-de-aprendizaje',
                                    type: 'image',
                                    tag: 'img',
                                    rect: ['168px', '23px', '1215px', '1427px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"abecedario_punto-de-aprendizaje.png",'0px','0px']
                                }]
                            }]
                        },
                        {
                            id: 'Banner',
                            type: 'rect',
                            rect: ['193px', '70px', '1550px', '137px', 'auto', 'auto'],
                            borderRadius: ["15px 15px", "15px 15px", "0px 0px", "0px 0px"],
                            fill: ["rgba(255,255,255,1)",[270,[['rgba(62,35,86,1.00)',0],['rgba(76,44,109,1.00)',100]]]],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"]
                        },
                        {
                            id: 'texto_punto',
                            type: 'text',
                            rect: ['343px', '92px', '1257px', '95px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Punto de aprendizaje</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [70, "px"], "rgba(255,255,255,1)", "600", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'cerrar_punto',
                            symbolName: 'cerrar_punto',
                            type: 'rect',
                            rect: ['1636', '100', '76', '77', 'auto', 'auto'],
                            cursor: 'pointer'
                        },
                        {
                            id: 'pie',
                            type: 'rect',
                            rect: ['193px', '948px', '1550px', '41px', 'auto', 'auto'],
                            borderRadius: ["0px 0px", "0px 0px", "15px 15px", "15px 15px"],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"]
                        },
                        {
                            id: 'borde',
                            type: 'ellipse',
                            rect: ['224px', '95px', '90px', '90px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"]
                        },
                        {
                            id: 'btn_puntoaprendizaje',
                            type: 'image',
                            rect: ['169px', '40px', '200px', '200px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"vi%C3%B1etaM-49-49.png",'0px','0px'],
                            transform: [[],[],[],['0.4','0.4']]
                        },
                        {
                            id: 'PA_vocabulario',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['117', '568', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"PA_vocabulario.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'TX_punto',
                            type: 'text',
                            rect: ['229px', '100px', '80px', '80px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​I</p>",
                            align: "center",
                            font: ['sena_icon', [60, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", ""],
                            textStyle: ["", "", "80px", "", ""]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '1080px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,126,126,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 400.522,
                    autoPlay: true,
                    data: [
                            [ "eid1", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${PA_vocabulario}', [] ] ]
                    ]
                }
            },
            "cerrar_punto": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '74px', '74px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [1, 'rgba(255,255,255,0.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'image',
                            id: 'cerrarIMG',
                            rect: ['-38px', '-38px', '152px', '152px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/btn_cerrar.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '0px', '76px', '76px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​7</p>',
                            id: 'TX_cerrar',
                            textStyle: ['', '', '72px', '', 'none'],
                            align: 'center',
                            font: ['sena_icon', [60, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '76px', '77px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("puntoaprendizaje_edgeActions.js");
})("EDGE-30791306");
