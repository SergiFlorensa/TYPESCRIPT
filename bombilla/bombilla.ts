function bombillaEncendida(){
  const imagenBombilla = document.getElementById('bombillaCerrada') as HTMLImageElement;
  const botonCerrado = document.getElementById('boton-cerrado') as HTMLImageElement;

if(imagenBombilla && botonCerrado){
    if(imagenBombilla.src.includes(`off`)){
        imagenBombilla.src = `./on.jpg`;
        botonCerrado.src = `./bon.jpg`;
    }else{
        imagenBombilla.src = `./off.jpg`;
        botonCerrado.src = `./boff.jpg`;
    }
}


}