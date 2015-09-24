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
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${DRAG_1}", "click", function(sym, e) {
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Submit'
   (function(symbolName) {   
   
   })("Submit");
   //Edge symbol end:'Submit'

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
   
   //Edge symbol: 'DROP_1'
   (function(symbolName) {   
   
   })("DROP_1");
   //Edge symbol end:'DROP_1'

   //=========================================================
   
   //Edge symbol: 'DROP_2'
   (function(symbolName) {   
   
   })("DROP_2");
   //Edge symbol end:'DROP_2'

   //=========================================================
   
   //Edge symbol: 'DROP_3'
   (function(symbolName) {   
   
   })("DROP_3");
   //Edge symbol end:'DROP_3'

   //=========================================================
   
   //Edge symbol: 'DROP_4'
   (function(symbolName) {   
   
   })("DROP_4");
   //Edge symbol end:'DROP_4'

   //=========================================================
   
   //Edge symbol: 'DROP_5'
   (function(symbolName) {   
   
   })("DROP_5");
   //Edge symbol end:'DROP_5'

   //=========================================================
   
   //Edge symbol: 'DROP_6'
   (function(symbolName) {   
   
   })("DROP_6");
   //Edge symbol end:'DROP_6'

   //=========================================================
   
   //Edge symbol: 'DRAG_1'
   (function(symbolName) {   
   
   })("DRAG_1");
   //Edge symbol end:'DRAG_1'

   //=========================================================
   
   //Edge symbol: 'DRAG_2'
   (function(symbolName) {   
   
   })("DRAG_2");
   //Edge symbol end:'DRAG_2'

   //=========================================================
   
   //Edge symbol: 'DRAG_3'
   (function(symbolName) {   
   
   })("DRAG_3");
   //Edge symbol end:'DRAG_3'

   //=========================================================
   
   //Edge symbol: 'DRAG_4'
   (function(symbolName) {   
   
   })("DRAG_4");
   //Edge symbol end:'DRAG_4'

   //=========================================================
   
   //Edge symbol: 'DRAG_5'
   (function(symbolName) {   
   
   })("DRAG_5");
   //Edge symbol end:'DRAG_5'

   //=========================================================
   
   //Edge symbol: 'DRAG_6'
   (function(symbolName) {   
   
   })("DRAG_6");
   //Edge symbol end:'DRAG_6'

   //=========================================================
   
   //Edge symbol: 'DRAG_7'
   (function(symbolName) {   
   
   })("DRAG_7");
   //Edge symbol end:'DRAG_7'

   //=========================================================
   
   //Edge symbol: 'DRAG_8'
   (function(symbolName) {   
   
   })("DRAG_8");
   //Edge symbol end:'DRAG_8'

   //=========================================================
   
   //Edge symbol: 'DRAG_9'
   (function(symbolName) {   
   
   })("DRAG_9");
   //Edge symbol end:'DRAG_9'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'btn_enviar'
   (function(symbolName) {   
   
   })("btn_enviar");
   //Edge symbol end:'btn_enviar'

   //=========================================================
   
   //Edge symbol: 'timer_box'
   (function(symbolName) {   
   
   })("timer_box");
   //Edge symbol end:'timer_box'

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
   
   //Edge symbol: 'clock_circle'
   (function(symbolName) {   
   
   })("clock_circle");
   //Edge symbol end:'clock_circle'

   //=========================================================

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

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-6342212");
