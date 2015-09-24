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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${audio_5}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         var numeroAudio = 5;
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

      Symbol.bindElementAction(compId, symbolName, "${audio_3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         var numeroAudio = 3;
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

      Symbol.bindElementAction(compId, symbolName, "${audio_1}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         var numeroAudio = 1;
         var cantidadDeAudios = 6; 
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

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

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-130489217");