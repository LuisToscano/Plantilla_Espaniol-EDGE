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
         
         inicializarPickMany(sym);
         
         
         sym.$("ayuda_publico_3").hide();
         sym.$("ayuda_llamada_3").hide();

      });
      //Edge binding end

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${PICK_1}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         pickClickeado(sym, "PICK_1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_2}", "click", function(sym, e) {
         pickClickeado(sym, "PICK_2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_3}", "click", function(sym, e) {
         pickClickeado(sym, "PICK_3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_4}", "click", function(sym, e) {
         pickClickeado(sym, "PICK_4");

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${PICK_1}", "mouseover", function(sym, e) {
         var nombrePick = "PICK_1";
         if(!sym.$(nombrePick).prop("selected")){
         	sym.getSymbol(nombrePick).play("hover");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_1}", "mouseout", function(sym, e) {
         var nombrePick = "PICK_1";
         if(!sym.$(nombrePick).prop("selected")){
         	sym.getSymbol(nombrePick).play("normal");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_2}", "mouseover", function(sym, e) {
         var nombrePick = "PICK_2";
         if(!sym.$(nombrePick).prop("selected")){
         	sym.getSymbol(nombrePick).play("hover");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_2}", "mouseout", function(sym, e) {
         var nombrePick = "PICK_2";
         if(!sym.$(nombrePick).prop("selected")){
         	sym.getSymbol(nombrePick).play("normal");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_3}", "mouseover", function(sym, e) {
         var nombrePick = "PICK_3";
         if(!sym.$(nombrePick).prop("selected")){
         	sym.getSymbol(nombrePick).play("hover");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_3}", "mouseout", function(sym, e) {
         var nombrePick = "PICK_3";
         if(!sym.$(nombrePick).prop("selected")){
         	sym.getSymbol(nombrePick).play("normal");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_4}", "mouseover", function(sym, e) {
         var nombrePick = "PICK_4";
         if(!sym.$(nombrePick).prop("selected")){
         	sym.getSymbol(nombrePick).play("hover");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PICK_4}", "mouseout", function(sym, e) {
         var nombrePick = "PICK_4";
         if(!sym.$(nombrePick).prop("selected")){
         	sym.getSymbol(nombrePick).play("normal");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${audio_1}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Definir un conmutador para reproducir o pausar una pista de audio 
         var numeroAudio = 1;
         var cantidadDeAudios = 6; 
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'TIMER_CONTAINER'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("TIMER_CONTAINER");
   //Edge symbol end:'TIMER_CONTAINER'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'btn_enviar'
   (function(symbolName) {   
   
   })("Submit");
   //Edge symbol end:'Submit'

   //=========================================================
   
   //Edge symbol: 'ayuda_1'
   (function(symbolName) {   
   
   })("ayuda_01");
   //Edge symbol end:'ayuda_01'

   //=========================================================
   
   //Edge symbol: 'PICK_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("PICK_1");
   //Edge symbol end:'PICK_1'

   //=========================================================
   
   //Edge symbol: 'PICK_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("PICK_2");
   //Edge symbol end:'PICK_2'

   //=========================================================
   
   //Edge symbol: 'PICK_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("PICK_3");
   //Edge symbol end:'PICK_3'

   //=========================================================
   
   //Edge symbol: 'PICK_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("PICK_4");
   //Edge symbol end:'PICK_4'

   //=========================================================
   
   //Edge symbol: 'llamada'
   (function(symbolName) {   
   
   })("llamada");
   //Edge symbol end:'llamada'

   //=========================================================
   
   //Edge symbol: 'publico'
   (function(symbolName) {   
   
   })("publico");
   //Edge symbol end:'publico'

   //=========================================================
   
   //Edge symbol: 'btn_audio_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();
         sym.$("audiomp3_1")[0].pause();
         sym.$("audiomp3_1")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5445, function(sym, e) {
         // introducir código aquí
         sym.play("stop");

      });
      //Edge binding end

   })("btn_audio_2");
   //Edge symbol end:'btn_audio_2'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-17298671");