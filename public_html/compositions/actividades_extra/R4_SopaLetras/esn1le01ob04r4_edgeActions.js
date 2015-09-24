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

      Symbol.bindElementAction(compId, symbolName, "${TIMER_CONTAINER}", "click", function(sym, e) {
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${btnTimer}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         startTimer(sym);
         
         sym.getSymbol("inicio_sopa").play();
         
         // Ocultar un elemento 
         sym.$("btnTimer").hide();
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${audio_1}", "click", function(sym, e) {
         var numeroAudio = 1;
         var cantidadDeAudios = 5; 
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${audio_5}", "click", function(sym, e) {
         var numeroAudio = 5;
         var cantidadDeAudios = 5; 
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${audio_4}", "click", function(sym, e) {
         var numeroAudio = 4;
         var cantidadDeAudios = 5; 
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${audio_3}", "click", function(sym, e) {
         var numeroAudio = 3;
         var cantidadDeAudios = 5; 
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${audio_2}", "click", function(sym, e) {
         var numeroAudio = 2;
         var cantidadDeAudios = 5; 
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

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

      

   })("testBtn");
   //Edge symbol end:'testBtn'

   //=========================================================
   
   //Edge symbol: 'btnTimer'
   (function(symbolName) {   
   
   })("btnTimer");
   //Edge symbol end:'btnTimer'

   //=========================================================
   
   //Edge symbol: 'SOPA'
   (function(symbolName) {   
   
   })("SOPA");
   //Edge symbol end:'SOPA'

   //=========================================================
   
   //Edge symbol: 'inicio_sopa'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // introducir código aquí
         // Ocultar un elemento 
         sym.getSymbolElement().hide();

      });
      //Edge binding end

      

   })("inicio_sopa");
   //Edge symbol end:'inicio_sopa'

   //=========================================================
   
   //Edge symbol: 'audio_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         sym.$("audiomp3_1")[0].pause();
         sym.$("audiomp3_1")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.play("stop");

      });
      //Edge binding end

   })("audio_1");
   //Edge symbol end:'audio_1'

   //=========================================================
   
   //Edge symbol: 'audio_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         sym.$("audiomp3_2")[0].pause();
         sym.$("audiomp3_2")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play("stop");

      });
      //Edge binding end

   })("audio_2");
   //Edge symbol end:'audio_2'

   //=========================================================
   
   //Edge symbol: 'audio_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         sym.$("audiomp3_3")[0].pause();
         sym.$("audiomp3_3")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play("stop");

      });
      //Edge binding end

   })("audio_3");
   //Edge symbol end:'audio_3'

   //=========================================================
   
   //Edge symbol: 'audio_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         sym.$("audiomp3_4")[0].pause();
         sym.$("audiomp3_4")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.play("stop");

      });
      //Edge binding end

   })("audio_4");
   //Edge symbol end:'audio_4'

   //=========================================================
   
   //Edge symbol: 'audio_5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         sym.$("audiomp3_5")[0].pause();
         sym.$("audiomp3_5")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play("stop");

      });
      //Edge binding end

   })("audio_5");
   //Edge symbol end:'audio_5'

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

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-11599876");