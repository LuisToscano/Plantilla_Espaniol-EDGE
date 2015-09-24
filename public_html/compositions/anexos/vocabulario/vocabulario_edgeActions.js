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
      
      
      

      Symbol.bindElementAction(compId, symbolName, "${cerrar_voca}", "click", function(sym, e) {
         parent.$(parent.document).trigger({
                                 type: 'EDGE_Plantilla_ClosePopup',
                                 sym: sym,
                                 evt: e
                             });

      });
      //Edge binding end
	  
	  Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function (sym, e) {
            // Insertar código para ejecutarse cuando el símbolo se crea aquí
            $(".center-wrapper").css({overflow: "hidden"});

        });
        //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${audio_1}", "click", function(sym, e) {
         var numeroAudio = 1;
         var cantidadDeAudios = 6; 
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${audio_2}", "click", function(sym, e) {
         var numeroAudio = 2;
         var cantidadDeAudios = 6;
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${audio_3}", "click", function(sym, e) {
         var numeroAudio = 3;
         var cantidadDeAudios = 6;
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${audio_4}", "click", function(sym, e) {
         var numeroAudio = 4;
         var cantidadDeAudios = 6;
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${audio_5}", "click", function(sym, e) {
         var numeroAudio = 5;
         var cantidadDeAudios = 6;
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${audio_6}", "click", function(sym, e) {
         var numeroAudio = 6;
         var cantidadDeAudios = 6;
         reproducirAudio(sym, numeroAudio, cantidadDeAudios);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'cerrar_punto'
   (function(symbolName) {   
   
   })("cerrar_voca");
   //Edge symbol end:'cerrar_voca'

   //=========================================================
   
   //Edge symbol: 'audio_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.play("stop");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         sym.$("audiomp3_1")[0].pause();
         sym.$("audiomp3_1")[0].currentTime = 0;

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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1958, function(sym, e) {
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2010, function(sym, e) {
         sym.play("stop");

      });
      //Edge binding end

   })("audio_5");
   //Edge symbol end:'audio_5'

   //=========================================================
   
   //Edge symbol: 'audio_6'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         sym.$("audiomp3_6")[0].pause();
         sym.$("audiomp3_6")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.play("stop");

      });
      //Edge binding end

   })("audio_6");
   //Edge symbol end:'audio_6'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-30791306");