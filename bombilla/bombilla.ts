// bombilla.ts

function toggleBombilla() {
    const bombilla = document.getElementById('bombilla') as HTMLImageElement;
    const boton = document.getElementById('boton-cerrado') as HTMLImageElement;

    if (bombilla && boton) {
        if (bombilla.style.opacity === '0') {
            bombilla.style.opacity = '1';
            boton.src = './bon.jpg';
        } else {
            bombilla.style.opacity = '0';
            boton.src = './boff.jpg';
            (document.getElementById('intensidadLuz') as HTMLInputElement).value = '0'; // Resetear la intensidad al apagar la bombilla
        }
    }
}

function cambiarIntensidad() {
    const slider = document.getElementById('intensidadLuz') as HTMLInputElement;
    const bombilla = document.getElementById('bombilla') as HTMLImageElement;

    if (bombilla && slider) {
        const intensidad = parseFloat(slider.value);
        const intensidadNormalizada = intensidad / 100; // Normalizar la intensidad de 0 a 1

        // Ajustar la opacidad de la bombilla según la intensidad seleccionada
        bombilla.style.opacity = intensidadNormalizada.toString();
    }
}
