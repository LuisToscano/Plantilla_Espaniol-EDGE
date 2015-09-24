/***********************
 * Acciones de composición de Adobe Edge Animate
 *
 * Editar este archivo con precaución, teniendo cuidado de conservar 
 * las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
 * capacidad de interactuar con estas acciones en Adobe Edge Animate
 *
 ***********************/
(function ($, Edge, compId) {
    var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

    //Edge symbol: 'stage'
    (function (symbolName) {


        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function (sym, e) {
            sym.stop();
            
            // Reproducir una pista de audio 
            sym.$("audio_entrada")[0].play();
            
            // Establecer el volumen de una pista de audio en 20% 
            sym.$("audio_entrada")[0].volume = 0.2;
            
            pagina_actual("1");

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function (sym, e) {
            sym.stop();
            
            
            // Reproducir una pista de audio desde el principio, independientemente del estado de reproducción actual 
            sym.$("audio_entrada")[0].currentTime = 0;
            if (sym.$("audio_entrada")[0].paused) {
            	sym.$("audio_entrada")[0].play();
            }
            
            pagina_actual("2");
            
            // Establecer el volumen de una pista de audio en 20% 
            sym.$("audio_entrada")[0].volume = 0.2;

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function (sym, e) {
            sym.stop();
            
            sym.$("audio_entrada")[0].currentTime = 0;
            if (sym.$("audio_entrada")[0].paused) {
            	sym.$("audio_entrada")[0].play();
            }
            
            pagina_actual("3");
            
            // Establecer el volumen de una pista de audio en 20% 
            sym.$("audio_entrada")[0].volume = 0.2;

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function (sym, e) {
            sym.stop();
            
            sym.$("audio_entrada")[0].currentTime = 0;
            if (sym.$("audio_entrada")[0].paused) {
            	sym.$("audio_entrada")[0].play();
            }
            // Establecer el volumen de una pista de audio en 20% 
            sym.$("audio_entrada")[0].volume = 0.2;
            
            pagina_actual("4");

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function (sym, e) {
            sym.stop();
            
            // Establecer el volumen de una pista de audio en 20% 
            sym.$("audio_entrada")[0].volume = 0.2;
            
            pagina_actual("5");

        });
        //Edge binding end

        

        

        

        

        Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function (sym, e) {
            // Insertar código para ejecutarse cuando el símbolo se crea aquí
            //inicializarPlantilla(sym);
            //inicializarTimer(sym); //eventos de prueba

        });
        //Edge binding end

        

      

      

      Symbol.bindElementAction(compId, symbolName, "${ayuda_3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         tooltips("publico");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ayuda_2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         tooltips("llamada");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ayuda_1}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         tooltips("50_50");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${cerrar_corr}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${volver}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         // Ir a una etiqueta o a un momento específicos y parar. Por ejemplo:
         // sym.stop(500); o sym.stop("miEtiqueta");
         sym.stop(0);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Submit}", "click", function(sym, e) {
         do_submit(sym);

      });
      //Edge binding end

    })("stage");
   //Edge symbol end:'stage'

    //=========================================================

    //Edge symbol: 'R6_portada'
    (function (symbolName) {

      

      Symbol.bindElementAction(compId, symbolName, "${btn_inicio}", "click", function(sym, e) {
         sym.getComposition().getStage().play();

      });
      //Edge binding end

    })("R6_portada");
   //Edge symbol end:'R6_portada'

    //=========================================================

    //Edge symbol: 'R6_portada_1'
    (function (symbolName) {

    })("R6_1");
   //Edge symbol end:'R6_1'

    //=========================================================

    //Edge symbol: 'R6_2'
    (function (symbolName) {

    })("R6_2");
   //Edge symbol end:'R6_2'

    //=========================================================

    //Edge symbol: 'R6_3'
    (function (symbolName) {

    })("R6_3");
   //Edge symbol end:'R6_3'

    //=========================================================

    //Edge symbol: 'R6_4'
    (function (symbolName) {

    })("R6_4");
   //Edge symbol end:'R6_4'

    //=========================================================

    //Edge symbol: 'R6_5'
    (function (symbolName) {

    })("R6_5");
   //Edge symbol end:'R6_5'

   //=========================================================
   
   //Edge symbol: 'btn_inicio'
   (function(symbolName) {   
   
   })("btn_inicio");
   //Edge symbol end:'btn_inicio'

   //=========================================================
   
   //Edge symbol: 'ayuda_01'
   (function(symbolName) {   
   
   })("ayuda_1");
   //Edge symbol end:'ayuda_1'

   //=========================================================
   
   //Edge symbol: 'ayuda_2'
   (function(symbolName) {   
   
   })("ayuda_2");
   //Edge symbol end:'ayuda_2'

   //=========================================================
   
   //Edge symbol: 'ayuda'
   (function(symbolName) {   
   
   })("ayuda_3");
   //Edge symbol end:'ayuda_3'

   //=========================================================
   
   //Edge symbol: 'Submit'
   (function(symbolName) {   
   
   })("volver");
   //Edge symbol end:'volver'

   //=========================================================
   
   //Edge symbol: 'cerrar_corr'
   (function(symbolName) {   
   
   })("cerrar_corr");
   //Edge symbol end:'cerrar_corr'

   //=========================================================
   
   //Edge symbol: 'cerrar_inco'
   (function(symbolName) {   
   
   })("cerrar_inco");
   //Edge symbol end:'cerrar_inco'

   //=========================================================
   
   //Edge symbol: 'audio_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();
         sym.$("audiomp3_4")[0].pause();
         sym.$("audiomp3_4")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14239, function(sym, e) {
         // introducir código aquí
         sym.play("stop");

      });
      //Edge binding end

   })("audio_4");
   //Edge symbol end:'audio_4'

   //=========================================================
   
   //Edge symbol: 'audio_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();
         sym.$("audiomp3_3")[0].pause();
         sym.$("audiomp3_3")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11587, function(sym, e) {
         // introducir código aquí
         sym.play("stop");

      });
      //Edge binding end

   })("audio_3");
   //Edge symbol end:'audio_3'

   //=========================================================
   
   //Edge symbol: 'audio_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();
         sym.$("audiomp3_2")[0].pause();
         sym.$("audiomp3_2")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9133, function(sym, e) {
         // introducir código aquí
         sym.play("stop");

      });
      //Edge binding end

   })("audio_2");
   //Edge symbol end:'audio_2'

   //=========================================================
   
   //Edge symbol: 'audio_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();
         sym.$("audiomp3_1")[0].pause();
         sym.$("audiomp3_1")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9133, function(sym, e) {
         // introducir código aquí
         sym.play("stop");

      });
      //Edge binding end

   })("audio_1");
   //Edge symbol end:'audio_1'

   //=========================================================
   
   //Edge symbol: 'contenedorrespuestas'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${audio_1}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         var numeroAudio = 1;
         var cantidadDeAudios = 6; 
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${audio_2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         var numeroAudio = 2;
         var cantidadDeAudios = 6; 
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${audio_3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         var numeroAudio = 3;
         var cantidadDeAudios = 6; 
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${audio_4}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         var numeroAudio = 4;
         var cantidadDeAudios = 6; 
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${audio_5}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         var numeroAudio = 5;
         var cantidadDeAudios = 6; 
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);

      });
      //Edge binding end

   })("contenedorrespuestas");
   //Edge symbol end:'contenedorrespuestas'

   //=========================================================
   
   //Edge symbol: 'audio_5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();
         sym.$("audiomp3_5")[0].pause();
         sym.$("audiomp3_5")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14239, function(sym, e) {
         // introducir código aquí
         sym.play("stop");

      });
      //Edge binding end

   })("audio_5");
   //Edge symbol end:'audio_5'

   //=========================================================
   
   //Edge symbol: 'Submit'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         //sym.stop();

      });
      //Edge binding end

   })("Submit");
   //Edge symbol end:'Submit'

   //=========================================================
   
   //Edge symbol: 'R6_6'
   (function(symbolName) {   
   
       })("R6_respuestas");
   //Edge symbol end:'R6_respuestas'

   //=========================================================
   
   //Edge symbol: 'margen_superior'
   (function(symbolName) {   
   
   })("margen_superior");
   //Edge symbol end:'margen_superior'

   //=========================================================
   
   //Edge symbol: 'oral'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("oral");
   //Edge symbol end:'oral'

   //=========================================================
   
   //Edge symbol: 'auditiva'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("auditiva");
   //Edge symbol end:'auditiva'

   //=========================================================
   
   //Edge symbol: 'Skills'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Tool_lectora}", "mouseover", function(sym, e) {
         sym.getSymbol("lectora").play("b");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Tool_lectora}", "mouseout", function(sym, e) {
         sym.getSymbol("lectora").play("a");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Tool_escrita}", "mouseout", function(sym, e) {
         sym.getSymbol("escrita").play("a");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Tool_escrita}", "mouseover", function(sym, e) {
         sym.getSymbol("escrita").play("b");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Tool_auditiva}", "mouseout", function(sym, e) {
         sym.getSymbol("auditiva").play("a");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Tool_auditiva}", "mouseover", function(sym, e) {
         sym.getSymbol("auditiva").play("b");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Tool_oral}", "mouseout", function(sym, e) {
         sym.getSymbol("oral").play("a");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Tool_oral}", "mouseover", function(sym, e) {
         sym.getSymbol("oral").play("b");

      });
      //Edge binding end

   })("Skills");
   //Edge symbol end:'Skills'

   //=========================================================
   
   //Edge symbol: 'lectora'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("lectora");
   //Edge symbol end:'lectora'

   //=========================================================
   
   //Edge symbol: 'escrita'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("escrita");
   //Edge symbol end:'escrita'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-4821767");