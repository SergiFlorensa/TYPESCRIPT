type Eleccion = "piedra" | "papel" | "tijeras";
type Resultado = "jugador" | "computadora" | "empate";

function obtenerEleccionComputadora(): Eleccion {
    const opciones: Eleccion[] = ["piedra", "papel", "tijeras"];
    const indiceAleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[indiceAleatorio];
}

function jugarRonda(eleccionJugador: Eleccion): Resultado {
    const eleccionComputadora = obtenerEleccionComputadora();

    // Representaciones de emoticonos para las elecciones
    let emoticonoJugador, emoticonoComputadora;
    if (eleccionJugador === "piedra") {
        emoticonoJugador = "✊";
    } else if (eleccionJugador === "papel") {
        emoticonoJugador = "✋";
    } else {
        emoticonoJugador = "✌️";
    }

    if (eleccionComputadora === "piedra") {
        emoticonoComputadora = "✊";
    } else if (eleccionComputadora === "papel") {
        emoticonoComputadora = "✋";
    } else {
        emoticonoComputadora = "✌️";
    }

    document.write(`Jugador eligió: ${emoticonoJugador}<br>`);
    document.write(`Computadora eligió: ${emoticonoComputadora}<br>`);

    if (eleccionJugador === eleccionComputadora) {
        return "empate";
    } else if (
        (eleccionJugador === "piedra" && eleccionComputadora === "tijeras") ||
        (eleccionJugador === "papel" && eleccionComputadora === "piedra") ||
        (eleccionJugador === "tijeras" && eleccionComputadora === "papel")
    ) {
        return "jugador";
    } else {
        return "computadora";
    }
}

function mostrarGanador(resultado: Resultado): void {
    if (resultado === "jugador") {
        document.write("¡Jugador gana! 🎉<br>");
    } else if (resultado === "computadora") {
        document.write("¡Computadora gana! 🎉<br>");
    } else {
        document.write("¡Es un empate! 🤝<br>");
    }
}

function juego(): void {
    let victoriasJugador = 0;
    let victoriasComputadora = 0;

    for (let i = 0; i < 3; i++) {
        document.write(`Ronda ${i + 1}:<br>`);
        const eleccionJugador = prompt("Elige tu opción (piedra, papel o tijeras):") as Eleccion;
        const resultado = jugarRonda(eleccionJugador);
        mostrarGanador(resultado);

        if (resultado === "jugador") {
            victoriasJugador++;
        } else if (resultado === "computadora") {
            victoriasComputadora++;
        }
    }

    if (victoriasJugador > victoriasComputadora) {
        document.write("¡Jugador gana el juego! 🏆<br>");
    } else if (victoriasComputadora > victoriasJugador) {
        document.write("¡Computadora gana el juego! 🏆<br>");
    } else {
        document.write("¡Es un empate en el juego! 🤝<br>");
    }
}

juego();
