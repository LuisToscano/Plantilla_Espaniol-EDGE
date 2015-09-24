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
            pagina_actual(1);

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();
            //pagina_actual("portada");

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function (sym, e) {
            sym.stop();
            pagina_actual(2);

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function (sym, e) {
            sym.stop();
            pagina_actual(3);

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function (sym, e) {
            sym.stop();
            pagina_actual(4);

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function (sym, e) {
            sym.stop();
            pagina_actual(5);

        });
        //Edge binding end

        

        Symbol.bindElementAction(compId, symbolName, "${r6_atras}", "click", function (sym, e) {
            sym.playReverse();

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${r6_siguiente}", "click", function (sym, e) {
            sym.play();

        });
        //Edge binding end

        

        Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function (sym, e) {
            // Insertar código para ejecutarse cuando el símbolo se crea aquí
            //inicializarPlantilla(sym);
            //inicializarTimer(sym); //eventos de prueba

        });
        //Edge binding end

        Symbol.bindElementAction(compId, symbolName, "${r6_enviar}", "click", function (sym, e) {
            // introducir aquí código para clic de ratón
            do_submit(sym);
        });
        //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // introducir código aquí
         sym.stop();
         pagina_actual("final");

      });
      //Edge binding end

    })("stage");
   //Edge symbol end:'stage'

    //=========================================================

    //Edge symbol: 'R6_portada'
    (function (symbolName) {

      Symbol.bindElementAction(compId, symbolName, "${btn_evaluemosCopy2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
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

    //Edge symbol: 'R6_6'
    (function (symbolName) {

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // introducir código aquí
      });
      //Edge binding end

    })("R6_final");
   //Edge symbol end:'R6_final'

    //=========================================================

    //Edge symbol: 'r6_atras'
    (function (symbolName) {

    })("r6_atras");
   //Edge symbol end:'r6_atras'

    //=========================================================

    //Edge symbol: 'r6_siguiente'
    (function (symbolName) {

    })("r6_siguiente");
   //Edge symbol end:'r6_siguiente'

    //=========================================================

    //Edge symbol: 'r6_evaluemos'
    (function (symbolName) {

    })("r6_evaluemos");
   //Edge symbol end:'r6_evaluemos'

    //=========================================================

    //Edge symbol: 'r6_enviar'
    (function (symbolName) {

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

        Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
            sym.stop();

        });
        //Edge binding end

    })("r6_enviar");
   //Edge symbol end:'r6_enviar'

   //=========================================================
   
   //Edge symbol: 'btn_evaluemos'
   (function(symbolName) {   
   
   })("btn_evaluemos");
   //Edge symbol end:'btn_evaluemos'

   //=========================================================
   
   //Edge symbol: 'text_percent'
   (function(symbolName) {   
   
   })("text_percent");
   //Edge symbol end:'text_percent'

   //=========================================================
   
   //Edge symbol: 'medidor'
   (function(symbolName) {   
   
   })("medidor");
   //Edge symbol end:'medidor'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-4821767");