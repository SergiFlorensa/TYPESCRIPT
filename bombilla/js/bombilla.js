"use strict";
function bombillaEncendida() {
    const imagenBombilla = document.getElementById('bombillaCerrada');
    const botonCerrado = document.getElementById('boton-cerrado');
    if (imagenBombilla && botonCerrado) {
        if (imagenBombilla.src.includes(`off`)) {
            imagenBombilla.src = `./on.jpg`;
            botonCerrado.src = `./bon.jpg`;
        }
        else {
            imagenBombilla.src = `./off.jpg`;
            botonCerrado.src = `./boff.jpg`;
        }
    }
}
