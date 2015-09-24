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
      
      
      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${audio_1}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         var numeroAudio = 1;
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

      

      Symbol.bindElementAction(compId, symbolName, "${btn_1}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.getSymbol("btn_1").stop("seleccionado");
         sym.getSymbol("btn_2").stop("normal");
         sym.getSymbol("btn_3").stop("normal");
         
         sym.$("CONTENEDOR").find("video").each(function(){
         	if(!this.paused){
         		this.currentTime = 0;
         		this.pause();
         	}
         });
         
         sym.getSymbol("CONTENEDOR").$("cont_video_1").show();
         sym.getSymbol("CONTENEDOR").stop("A");
         sym.getSymbol("CONTENEDOR").$("cont_video_2").hide();
         sym.getSymbol("CONTENEDOR").$("cont_video_3").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_2}", "click", function(sym, e) {
         sym.getSymbol("btn_2").stop("seleccionado");
         sym.getSymbol("btn_1").stop("normal");
         sym.getSymbol("btn_3").stop("normal");
         
         sym.$("CONTENEDOR").find("video").each(function(){
         	if(!this.paused){
         		this.currentTime = 0;
         		this.pause();
         	}
         })
         
         sym.getSymbol("CONTENEDOR").$("cont_video_2").show();
         sym.getSymbol("CONTENEDOR").stop("B");
         sym.getSymbol("CONTENEDOR").$("cont_video_1").hide();
         sym.getSymbol("CONTENEDOR").$("cont_video_3").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_3}", "click", function(sym, e) {
         sym.getSymbol("btn_3").stop("seleccionado");
         sym.getSymbol("btn_1").stop("normal");
         sym.getSymbol("btn_2").stop("normal");
         
         sym.$("CONTENEDOR").find("video").each(function(){
         	if(!this.paused){
         		this.currentTime = 0;
         		this.pause();
         	}
         });
         
         sym.getSymbol("CONTENEDOR").$("cont_video_3").show();
         sym.getSymbol("CONTENEDOR").stop("C");
         sym.getSymbol("CONTENEDOR").$("cont_video_1").hide();
         sym.getSymbol("CONTENEDOR").$("cont_video_2").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.getSymbol("btn_1").stop("seleccionado");

      });
      //Edge binding end

      

      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // Insertar código para ejecutarse cuando el símbolo se crea aquí
         setVideoTag(sym.getSymbol("CONTENEDOR").$("cont_video_1"),"myVideo1","videos/video_1.mp4");
         setVideoTag(sym.getSymbol("CONTENEDOR").$("cont_video_2"),"myVideo2","videos/video_2.mp4");
         setVideoTag(sym.getSymbol("CONTENEDOR").$("cont_video_3"),"myVideo3","videos/video_3.mp4");
         
         sym.getSymbol("CONTENEDOR").$("cont_video_2").hide();
         sym.getSymbol("CONTENEDOR").$("cont_video_3").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Submit}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         checkAnswersDragAndDrop(sym);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'btn_enviar'
   (function(symbolName) {   
   
   })("btn_enviar");
   //Edge symbol end:'btn_enviar'

   //=========================================================
   
   //Edge symbol: 'CONTENEDOR'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      

      

   })("CONTENEDOR");
   //Edge symbol end:'CONTENEDOR'

   //=========================================================
   
   //Edge symbol: 'btn_audio'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();
         sym.$("r6_audio_1")[0].pause();
         sym.$("r6_audio_1")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2902, function(sym, e) {
         // introducir código aquí
         sym.play("stop");

      });
      //Edge binding end

   })("audio_1");
   //Edge symbol end:'audio_1'

   //=========================================================
   
   //Edge symbol: 'audio_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();
         sym.$("r6_audio_2")[0].pause();
         sym.$("r6_audio_2")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3766, function(sym, e) {
         // introducir código aquí
         sym.play("stop");

      });
      //Edge binding end

   })("audio_2");
   //Edge symbol end:'audio_2'

   //=========================================================
   
   //Edge symbol: 'audio_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();
         sym.$("r6_audio_3")[0].pause();
         sym.$("r6_audio_3")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3152, function(sym, e) {
         // introducir código aquí
         sym.play("stop");

      });
      //Edge binding end

   })("audio_3");
   //Edge symbol end:'audio_3'

   //=========================================================
   
   //Edge symbol: 'audio_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();
         sym.$("r6_audio_4")[0].pause();
         sym.$("r6_audio_4")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3514, function(sym, e) {
         // introducir código aquí
         sym.play("stop");

      });
      //Edge binding end

   })("audio_4");
   //Edge symbol end:'audio_4'

   //=========================================================
   
   //Edge symbol: 'audio_5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();
         sym.$("r6_audio_5")[0].pause();
         sym.$("r6_audio_5")[0].currentTime = 0;

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3478, function(sym, e) {
         // introducir código aquí
         sym.play("stop");

      });
      //Edge binding end

   })("audio_5");
   //Edge symbol end:'audio_5'

   //=========================================================
   
   //Edge symbol: 'btn_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("btn_1");
   //Edge symbol end:'btn_1'

   //=========================================================
   
   //Edge symbol: 'btn_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // introducir código aquí
         
         sym.stop();

      });
      //Edge binding end

   })("btn_2");
   //Edge symbol end:'btn_2'

   //=========================================================
   
   //Edge symbol: 'btn_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("btn_3");
   //Edge symbol end:'btn_3'

   //=========================================================
   
   //Edge symbol: 'DRAG_4'
   (function(symbolName) {   
   
   })("DRAG_4");
   //Edge symbol end:'DRAG_4'

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
   
   //Edge symbol: 'DRAG_1'
   (function(symbolName) {   
   
   })("DRAG_1");
   //Edge symbol end:'DRAG_1'

   //=========================================================
   
   //Edge symbol: 'DRAG_5'
   (function(symbolName) {   
   
   })("DRAG_5");
   //Edge symbol end:'DRAG_5'

   //=========================================================
   
   //Edge symbol: 'DRAG_3'
   (function(symbolName) {   
   
   })("DRAG_3");
   //Edge symbol end:'DRAG_3'

   //=========================================================
   
   //Edge symbol: 'DRAG_2'
   (function(symbolName) {   
   
   })("DRAG_2");
   //Edge symbol end:'DRAG_2'

   //=========================================================
   
   //Edge symbol: 'Submit'
   (function(symbolName) {   
   
   })("Submit");
   //Edge symbol end:'Submit'

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