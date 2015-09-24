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
         // Insertar código para ejecutarse cuando el símbolo se crea aquí
         //ed_send_data(sym);
         //inicializarTimer(sym);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${carta_1_A}", "click", function(sym, e) {         
         //sym.getSymbol("carta_1_A").playReverse("a");
         startTimer(sym);
         carta_clickeada(sym, "carta_1_A");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${carta_1_B}", "click", function(sym, e) {
         carta_clickeada(sym, "carta_1_B");
         startTimer(sym);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${carta_2_A}", "click", function(sym, e) {
         startTimer(sym);
         carta_clickeada(sym, "carta_2_A");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${carta_2_B}", "click", function(sym, e) {
         startTimer(sym);
         carta_clickeada(sym, "carta_2_B");

      });
      //Edge binding end      

      

      Symbol.bindElementAction(compId, symbolName, "${carta_6_B}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         startTimer(sym);
         carta_clickeada(sym, "carta_6_B");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${carta_5_B}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         startTimer(sym);
         carta_clickeada(sym, "carta_5_B");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${carta_4_B}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         startTimer(sym);
         carta_clickeada(sym, "carta_4_B");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${carta_3_B}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         startTimer(sym);
         carta_clickeada(sym, "carta_3_B");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${carta_4_A}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         carta_clickeada(sym, "carta_4_A");
         startTimer(sym);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${carta_3_A}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         carta_clickeada(sym, "carta_3_A");
         startTimer(sym);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${carta_5_A}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         carta_clickeada(sym, "carta_5_A");
         startTimer(sym);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${carta_6_A}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         carta_clickeada(sym, "carta_6_A");
         startTimer(sym);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'carta_1_A'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

   })("carta_1_A");
   //Edge symbol end:'carta_1_A'

   //=========================================================
   
   //Edge symbol: 'carta_1_A_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("carta_1_B");
   //Edge symbol end:'carta_1_B'

   //=========================================================
   
   //Edge symbol: 'carta_1_A_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("carta_2_B");
   //Edge symbol end:'carta_2_B'

   //=========================================================
   
   //Edge symbol: 'carta_1_A_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("carta_2_A");
   //Edge symbol end:'carta_2_A'

   //=========================================================
   
   //Edge symbol: 'btn_submit'
   (function(symbolName) {   
   
   })("btn_submit");
   //Edge symbol end:'btn_submit'

   //=========================================================
   
   //Edge symbol: 'testBtn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 511, function(sym, e) {
         // introducir código aquí
         
         sym.stop();

      });
      //Edge binding end

   })("testBtn");
   //Edge symbol end:'testBtn'

   //=========================================================
   
   //Edge symbol: 'carta_1_B_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("carta_1_C");
   //Edge symbol end:'carta_1_C'

   //=========================================================
   
   //Edge symbol: 'carta_2_B_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("carta_2_C");
   //Edge symbol end:'carta_2_C'

   //=========================================================
   
   //Edge symbol: 'carta_1_C_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("carta_1_D");
   //Edge symbol end:'carta_1_D'

   //=========================================================
   
   //Edge symbol: 'carta_2_C_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("carta_2_D");
   //Edge symbol end:'carta_2_D'

   //=========================================================
   
   //Edge symbol: 'carta_1_D_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("carta_1_E");
   //Edge symbol end:'carta_1_E'

   //=========================================================
   
   //Edge symbol: 'carta_2_D_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("carta_2_E");
   //Edge symbol end:'carta_2_E'

   //=========================================================
   
   //Edge symbol: 'carta_1_E_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("carta_1_F");
   //Edge symbol end:'carta_1_F'

   //=========================================================
   
   //Edge symbol: 'carta_2_E_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("carta_2_F");
   //Edge symbol end:'carta_2_F'

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

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-559548");