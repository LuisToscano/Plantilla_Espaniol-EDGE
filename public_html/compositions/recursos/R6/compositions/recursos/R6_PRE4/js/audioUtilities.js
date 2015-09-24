var AUDIOS = {
    cantidad: 0
};

function reproducirAudio(sym, numeroAudio, cantidadDeAudios) {

    AUDIOS.cantidad = cantidadDeAudios;
    AUDIOS.sym = sym;

    if (sym.getSymbol("audio_" + numeroAudio).$("r6_audio_" + numeroAudio)[0].paused) {
        sym.getSymbol("audio_" + numeroAudio).play("play");

        for (var i = 1; i <= cantidadDeAudios; i++) {
            if (typeof sym.getSymbol("audio_" + i) != 'undefined') {
                if (i != numeroAudio) {
                    sym.getSymbol("audio_" + i).play("play");
                    sym.getSymbol("audio_" + i).play("stop");
                }
            } else {
                console.log("el audio " + i + " no existe.");
            }
        }
    } else {
        sym.getSymbol("audio_" + numeroAudio).play("stop");
    }
}

function stopAudios() {
    var cantidadDeAudios = AUDIOS.cantidad;
    var sym = AUDIOS.sym;
    for (var i = 1; i <= cantidadDeAudios; i++) {
        var audio = buscar_sym(sym, ["audio_" + i]);
        console.log(audio);
        if (typeof audio != 'undefined') {
            var sym_temp = buscar_sym(sym, ["audio_" + i, "r6_audio_" + i], true);
            if (!sym_temp[0].paused) {
                audio.play("stop");
                sym_temp[0].pause();
                sym_temp[0].currentTime = 0;
            }
        }
    }
}

$("body").on("EDGE_Recurso_PaginaChange", function (evt) {
    //console.log(evt);
    stopAudios();
});