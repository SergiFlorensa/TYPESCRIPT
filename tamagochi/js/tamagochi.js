"use strict";
let estado = {
    salud: 100,
    comida: 100,
    diversion: 100,
    fuerza: 100,
    energia: 100
};
function comer() {
    estado.comida += 10;
    if (estado.comida > 100) {
        estado.comida = 100;
    }
    actualizarEstado();
}
function jugar() {
    estado.diversion += 10;
    if (estado.diversion > 100) {
        estado.diversion = 100;
    }
    actualizarEstado();
}
function luchar() {
    estado.fuerza += 10;
    if (estado.fuerza > 100) {
        estado.fuerza = 100;
    }
    actualizarEstado();
}
function dormir() {
    // Incrementa el nivel de energía
    estado.energia += 10;
    if (estado.energia > 100) {
        estado.energia = 100; // Limita el nivel de energía a 100
    }
    actualizarEstado();
}
function actualizarEstado() {
    const barraVidaTorracat = document.querySelector('.nivelVidaTorracat');
    const nivelVida = estado.salud;
    // Asegurarse de que el nivel de vida no supere la longitud total de la barra
    if (nivelVida < 0) {
        nivelVida = 0;
    }
    else if (nivelVida > 100) {
        nivelVida = 100;
    }
    barraVidaTorracat.style.width = nivelVida + '%';
    if (nivelVida < 50) {
        barraVidaTorracat.classList.add('barraRoja');
    }
    else {
        barraVidaTorracat.classList.remove('barraRoja');
    }
    // Actualizar la barra de comida del Torracat
    const barraComida = document.querySelector('.nivelComidaTotal');
    const nivelComida = estado.comida;
    barraComida.style.width = nivelComida + '%';
    // Cambiar el color de la barra a rojo si el nivel de comida está por debajo del 50%
    if (nivelComida < 50) {
        barraComida.classList.add('barraRoja');
    }
    else {
        barraComida.classList.remove('barraRoja');
    }
    // Disminuir la salud del Torracat gradualmente
    estado.salud -= 2; // Cambia la velocidad de decremento según tus necesidades
    if (estado.salud < 0) {
        estado.salud = 0; // Evita valores negativos
    }
    // Actualizar el estado cada segundo
    setTimeout(actualizarEstado, 500);
}
// Llama a la función actualizarEstado para inicializar la interfaz gráfica
actualizarEstado();
