var jugadorEnTurno = 1;
var turno = 0;
var casillasJugador, casillasJ1, casillasJ2;
var puntuacion1 = 0, puntuacion2 = 0;

function nuevoJuego() {
    document.getElementById("nomJ1").disabled = true;
    document.getElementById("nomJ2").disabled = true;
    document.getElementById("indicacion").innerHTML = "<center><label>" + ("Es el turno de " + document.getElementById("nomJ1").value) + "</label></center>";
    reiniciarJuego();
}

function reiniciarJuego() {
    document.getElementById("casilla1").innerHTML = '<center><input type="button" class="btn" onclick="marcarCasilla(\'casilla1\')"/></center>';
    document.getElementById("casilla2").innerHTML = '<center><input type="button" class="btn" onclick="marcarCasilla(\'casilla2\')"/></center>';
    document.getElementById("casilla3").innerHTML = '<center><input type="button" class="btn" onclick="marcarCasilla(\'casilla3\')"/></center>';
    document.getElementById("casilla4").innerHTML = '<center><input type="button" class="btn" onclick="marcarCasilla(\'casilla4\')"/></center>';
    document.getElementById("casilla5").innerHTML = '<center><input type="button" class="btn" onclick="marcarCasilla(\'casilla5\')"/></center>';
    document.getElementById("casilla6").innerHTML = '<center><input type="button" class="btn" onclick="marcarCasilla(\'casilla6\')"/></center>';
    document.getElementById("casilla7").innerHTML = '<center><input type="button" class="btn" onclick="marcarCasilla(\'casilla7\')"/></center>';
    document.getElementById("casilla8").innerHTML = '<center><input type="button" class="btn" onclick="marcarCasilla(\'casilla8\')"/></center>';
    document.getElementById("casilla9").innerHTML = '<center><input type="button" class="btn" onclick="marcarCasilla(\'casilla9\')"/></center>';
    turno = 0;
    casillasJ1 = "";
    casillasJ2 = "";
}

function marcarCasilla(idCasilla) {
    switch (jugadorEnTurno) {
        case 1:
            document.getElementById(idCasilla).innerHTML = '<center><div class="marca1"></div></center>';
            casillasJ1 = casillasJ1.concat(idCasilla.charAt(7));
            casillasJugador = casillasJ1;
            break;
        case 2:
            document.getElementById(idCasilla).innerHTML = '<center><div class="marca2"></div></center>';
            casillasJ2 = casillasJ2.concat(idCasilla.charAt(7));
            casillasJugador = casillasJ2;
    }
    if (juegoTerminado()) {
        reiniciarJuego();
    } else {
        cambiarTurno()
    }
}

function cambiarTurno() {
    turno++;
    switch (jugadorEnTurno) {
        case 1:
            jugadorEnTurno++;
            document.getElementById("indicacion").innerHTML = "<center><label>" + ("Es el turno de " + document.getElementById("nomJ2").value) + "</label></center>";
            break;
        case 2:
            jugadorEnTurno--;
            document.getElementById("indicacion").innerHTML = "<center><label>" + ("Es el turno de " + document.getElementById("nomJ1").value) + "</label></center>";
    }
}
function juegoTerminado() {
    if (
        ((casillasJugador.includes("1") && casillasJugador.includes("2") && casillasJugador.includes("3"))) ||
        ((casillasJugador.includes("4") && casillasJugador.includes("5") && casillasJugador.includes("6"))) ||
        ((casillasJugador.includes("7") && casillasJugador.includes("8") && casillasJugador.includes("9"))) ||
        ((casillasJugador.includes("1") && casillasJugador.includes("4") && casillasJugador.includes("7"))) ||
        ((casillasJugador.includes("2") && casillasJugador.includes("5") && casillasJugador.includes("8"))) ||
        ((casillasJugador.includes("3") && casillasJugador.includes("6") && casillasJugador.includes("9"))) ||
        ((casillasJugador.includes("1") && casillasJugador.includes("5") && casillasJugador.includes("9"))) ||
        ((casillasJugador.includes("3") && casillasJugador.includes("5") && casillasJugador.includes("7")))
    ) {
        switch (jugadorEnTurno) {
            case 1:
                alert("¡" + (document.getElementById("nomJ1").value) + " ha ganado la partida!");
                puntuacion1++;
                document.getElementById("puntuacionJ1").innerHTML = puntuacion1;
                break;
            case 2:
                alert("¡" + (document.getElementById("nomJ2").value) + " ha ganado la partida!");
                puntuacion2++;
                document.getElementById("puntuacionJ2").innerHTML = puntuacion2;
        }
        return true;
    } else if (turno == 8) {
        alert("Nadie ganó :p");
        return true;
    }
    return false;
}