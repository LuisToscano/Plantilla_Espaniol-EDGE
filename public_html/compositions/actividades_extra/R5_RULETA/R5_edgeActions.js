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
            
            // Mostrar un elemento 
            sym.$("ruleta2").show();
            
            sym.stop();
            
            pagina_actual("1");
            
            
            
            

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function (sym, e) {
            sym.$("ruleta_1").show();
            sym.stop();
            pagina_actual("2");
            

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function (sym, e) {
            sym.stop();
            sym.$("ruleta_2").show();
            pagina_actual("3");
            

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function (sym, e) {
            sym.stop();
            sym.$("ruleta_3").show();
            pagina_actual("4");

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function (sym, e) {
            sym.stop();
            sym.$("ruleta_4").show();
            pagina_actual("5");

        });
        //Edge binding end

        

        

        

        

        Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function (sym, e) {
            // Insertar código para ejecutarse cuando el símbolo se crea aquí
            //inicializarPlantilla(sym);
            //inicializarTimer(sym); //eventos de prueba

        });
        //Edge binding end

        

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12000, function(sym, e) {
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Submit}", "click", function(sym, e) {
         
         sym.play();
         
         do_submit(sym);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnInicio}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         pagina_actual("1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();
         pagina_actual("2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();
         pagina_actual("3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();
         pagina_actual("4");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();
         pagina_actual("5");

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
   
   //Edge symbol: 'Submit'
   (function(symbolName) {   
   
   })("volver");
   //Edge symbol end:'volver'

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
   
   //Edge symbol: 'Submit'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

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
   
   //Edge symbol: 'btnInicio'
   (function(symbolName) {   
   
   })("btnInicio");
   //Edge symbol end:'btnInicio'

   //=========================================================
   
   //Edge symbol: 'ruleta'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         
         sym.getComposition().getStage().play("slide_1");
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_ruleta}", "click", function(sym, e) {
         
         sym.play();
         

      });
      //Edge binding end

   })("ruleta");
   //Edge symbol end:'ruleta'

   //=========================================================
   
   //Edge symbol: 'ruleta_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         
         sym.getComposition().getStage().play("slide_2");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_ruleta}", "click", function(sym, e) {
         
         sym.play();
         

      });
      //Edge binding end

   })("ruleta_1");
   //Edge symbol end:'ruleta_1'

   //=========================================================
   
   //Edge symbol: 'ruleta_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         
         sym.getComposition().getStage().play("slide_3");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_ruleta}", "click", function(sym, e) {
         
         sym.play();
         

      });
      //Edge binding end

   })("ruleta_2");
   //Edge symbol end:'ruleta_2'

   //=========================================================
   
   //Edge symbol: 'ruleta_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         
         sym.getComposition().getStage().play("slide_4");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_ruleta}", "click", function(sym, e) {
         
         sym.play();
         

      });
      //Edge binding end

   })("ruleta_3");
   //Edge symbol end:'ruleta_3'

   //=========================================================
   
   //Edge symbol: 'ruleta_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         
         sym.getComposition().getStage().play("slide_5");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_ruleta}", "click", function(sym, e) {
         
         sym.play();
         

      });
      //Edge binding end

   })("ruleta_4");
   //Edge symbol end:'ruleta_4'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-4821767");