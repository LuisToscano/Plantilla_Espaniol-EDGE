/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1876, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // introducir código aquí
         sym.stop();
         pagina_actual("1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_inicio_scrabble}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("slide1");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // introducir código aquí
         sym.stop();
         pagina_actual("2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         // introducir código aquí
         sym.stop();
         pagina_actual("3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // introducir código aquí
         sym.stop();
         pagina_actual("4");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${cerrar_corr}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Submit}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         do_submit(sym);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${volver}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.stop(0);
         sym.$("btn_inicio_scrabble").show();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'btn_enviar'
   (function(symbolName) {   
   
   })("Submit");
   //Edge symbol end:'Submit'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'clock_circle'
   (function(symbolName) {   
   
   })("clock_circle");
   //Edge symbol end:'clock_circle'

   //=========================================================
   
   //Edge symbol: 'TIMER_CONTAINER'
   (function(symbolName) {   
   
      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // introducir código aquí
         sym.play("12");

      });
      //Edge binding end

   })("TIMER_CONTAINER");
   //Edge symbol end:'TIMER_CONTAINER'

   //=========================================================
   
   //Edge symbol: 'clock_line'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // introducir código aquí
         sym.play();

      });
      //Edge binding end

   })("segundero");
   //Edge symbol end:'segundero'

   //=========================================================
   
   //Edge symbol: 'portada_scrabble'
   (function(symbolName) {   
   
   })("portada_scrabble");
   //Edge symbol end:'portada_scrabble'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'btnTimer'
   (function(symbolName) {   
   
   })("btn_inicio_scrabble");
   //Edge symbol end:'btn_inicio_scrabble'

   //=========================================================
   
   //Edge symbol: 'SCRABBLE_SLIDE_1'
   (function(symbolName) {   
   
   })("SCRABBLE_SLIDE_1");
   //Edge symbol end:'SCRABBLE_SLIDE_1'

   //=========================================================
   
   //Edge symbol: 'SCRABBLE_SLIDE_2'
   (function(symbolName) {   
   
   })("SCRABBLE_SLIDE_2");
   //Edge symbol end:'SCRABBLE_SLIDE_2'

   //=========================================================
   
   //Edge symbol: 'SCRABBLE_SLIDE_3'
   (function(symbolName) {   
   
   })("SCRABBLE_SLIDE_3");
   //Edge symbol end:'SCRABBLE_SLIDE_3'

   //=========================================================
   
   //Edge symbol: 'SCRABBLE_SLIDE_4'
   (function(symbolName) {   
   
   })("SCRABBLE_SLIDE_4");
   //Edge symbol end:'SCRABBLE_SLIDE_4'

   //=========================================================
   
   //Edge symbol: 'cerrar_corr'
   (function(symbolName) {   
   
   })("cerrar_corr");
   //Edge symbol end:'cerrar_corr'

   //=========================================================
   
   //Edge symbol: 'volver'
   (function(symbolName) {   
   
   })("volver");
   //Edge symbol end:'volver'

   //=========================================================
   
   //Edge symbol: 'SCRABBLE_SLIDE_5'
   (function(symbolName) {   
   
      })("SCRABBLE_RESPUESTAS");
   //Edge symbol end:'SCRABBLE_RESPUESTAS'

   //=========================================================
   
   //Edge symbol: 'volver_1'
   (function(symbolName) {   
   
      })("volver2");
   //Edge symbol end:'volver2'

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

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-61332511");