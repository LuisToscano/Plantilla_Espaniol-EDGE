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
                            rect: ['193px', '70px', '1550px', '110px', 'auto', 'auto'],
                            borderRadius: ["15px 15px", "15px 15px", "0px 0px", "0px 0px"],
                            fill: ["rgba(255,255,255,1)",[270,[['rgba(62,35,86,1.00)',0],['rgba(76,44,109,1.00)',100]]]],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"]
                        },
                        {
                            id: 'creditos',
                            type: 'image',
                            tag: 'img',
                            rect: ['221px', '99px', '54px', '50px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"creditos.png",'0px','0px']
                        },
                        {
                            id: 'contcreditos',
                            type: 'rect',
                            rect: ['193px', '175px', '1550px', '773px', 'auto', 'auto'],
                            overflow: 'auto',
                            borderRadius: ["0px 0px", "0px 0px", "15px 15px", "15px 15px"],
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgba(0, 0, 0, 0)","none"],
                            userClass: "scroll",
                            c: [
                            {
                                id: 'Group',
                                type: 'group',
                                rect: ['121px', '4px', '1308', '4311', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'abajo',
                                    type: 'rect',
                                    rect: ['0px', '4259px', '1308px', '52px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,1)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                },
                                {
                                    id: 'texto_2',
                                    type: 'text',
                                    rect: ['-66px', '69px', '1308px', '4130px', 'auto', 'auto'],
                                    text: "<p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: bold; font-style: normal; text-decoration: none; font-size: 29px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 32px;\"><span style=\"font-size: 35px;\">Servicio Nacional de Aprendizaje SENA</span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 26px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 32px;\">&nbsp;</p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 26px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 34px;\"><span style=\"font-size: 30px; font-weight: 700;\">Director General​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Alfonso Prada Gil</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Secretario General</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Milton Nuñez Paz</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Director del Sistema Nacional de Formación para el Trabajo</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Juan Manuel Valdés Barcha</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Director de Promoción y Relaciones Corporativas</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Juan Pablo Castro Morales</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Directora de Empleo, Trabajo y Emprendimiento</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">María Andrea Nieto Romero</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Director de Formación Profesional Integral</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Mauricio Alvarado Hidalgo</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Directora Administrativa y Financiera</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Piedad Jiménez Montoya</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Director Jurídico</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Juan Pablo Arenas Quiroz</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Director de Planeación y Direccionamiento Corporativo</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Iván Ernesto Rojas Guzmán</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Jefe Oficina de Control Interno</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Raúl Eduardo González Garzón</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Jefa de la Oficina de Control Interno Disciplinario</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Dora Milena García Moreno</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Jefe de la Oficina de Sistemas</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Carlos César Jiménez Aponte</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Jefe de la Oficina de Comunicaciones</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Melba Pinto Gualdrón</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">​</span><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Coordinador del Grupo Gestión Operativa Integral de la Formación en Modalidad Presencial</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Mario Javier Rincón Triana</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Gerente Programa de Bilingüismo SENA</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Olga Lucía Riveros Gaona</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">&nbsp;</span><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Coordinador del proyecto</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Mauricio Ríos Delgado</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">​</span><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Asesor técnico de programación e ingeniería del proyecto</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">PROGRAMA DE BILINGÜISMO SENA</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">William Augusto Duque Villalba</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Asesor técnico del proyecto</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Dayana Cortés Medina</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Asesora pedagógica Programa de Bilingüismo</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">​</span><span style=\"font-size: 40px; color: rgb(0, 0, 0); font-weight: 700;\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 35px; color: rgb(0, 0, 0); font-weight: 700;\">eDistribution</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 40px; color: rgb(0, 0, 0); font-weight: 700;\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Gerente del Proyecto</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Alfredo Antonio Díaz Claro</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Directora Pedagógica</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Nancy Carrillo Mora</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Coordinador de Producción</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Mario Nel Villamizar Ochoa</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Coordinador de Adquisiciones</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Gustavo Andrés Díaz Ochoa</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Project Manager</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Catalina Ropero Acero</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Experta pedagógica</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Paola Isabel Mejía Rodríguez</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Autores de contenido</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Juan Camilo Gámez Porras</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Emilio Alberto Godoy Montoya</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Diseñadores Instruccionales</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Ana Vela Rodríguez Velásquez</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Sussan Quintero</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Emanuel Fernando Díaz Palencia</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Jorge Edison Rojas Rodríguez</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Fabio Rozo Berrera</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Nancy Cruz Ulloa</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Jeiner Leandro Velandia Sanabria</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Catalogadores</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Katherin Vargas Polo</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Yuri Emilse Correa Vivas</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Johana Mancipe Delgado</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Especialista en Desarrollo de Contenido</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">John Milton Zarate</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Francisco Javier Hernández Sánchez</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Leonardo Alberto Escobar Diaz</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Ángela María López González</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Administradores de Plataforma LMS</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Sebastián Fernando Soler Mejía</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Diseñadores Gráficos</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">María AngéliK Bautista Vargas</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Desarrolladores Multimedia</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Diana Carolina Bejarano Bejarano</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Paola Andrea Cruz Espinosa</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Cecilia Yinet Rodríguez López</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Ilustrador</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Edwin Andrés Díaz Pinzón</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Realizador Audiovisual</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Carolina Nova Torres</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Alejandro Gonzáles</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">​</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\"></span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0); font-weight: 700;\">Programador</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Luis Gabriel Toscano Rodríguez</span></p><p style=\"margin: 0px; text-align: center; line-height: 34px;\"><span style=\"font-size: 30px; color: rgb(0, 0, 0);\">Heiner Wbeimar Angarita Maldonado&nbsp;</span></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 26px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 34px;\"><span style=\"font-size: 30px;\">&nbsp;</span><br></p><p style=\"margin: 0px; font-family: source-sans-pro, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 26px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 32px;\">​</p>",
                                    align: "left",
                                    font: ['source-sans-pro, sans-serif', [70, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", ""],
                                    textStyle: ["", "", "", "", "none"]
                                },
                                {
                                    id: 'arriba',
                                    type: 'rect',
                                    rect: ['0px', '0px', '1308px', '52px', 'auto', 'auto'],
                                    fill: ["rgba(255,255,255,1)"],
                                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                                }]
                            }]
                        },
                        {
                            id: 'texto_1',
                            type: 'text',
                            rect: ['300px', '77px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Créditos</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [70, "px"], "rgba(255,255,255,1)", "600", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'cerrar_creditos',
                            symbolName: 'cerrar_creditos',
                            type: 'rect',
                            rect: ['1640', '87', '76', '77', 'auto', 'auto'],
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

                    ]
                }
            },
            "cerrar_creditos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['8px', '9px', '58px', '58px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [1, 'rgba(0, 0, 0, 0)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            type: 'image',
                            id: 'cerrar',
                            rect: ['-38px', '-38px', '151px', '153px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/cerrar.png', '0px', '0px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("creditos_edgeActions.js");
})("EDGE-22818455");
