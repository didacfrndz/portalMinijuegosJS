//funcion para dibujar el universo
function dibuixaUnivers(columnes, files) {
    //agarramos el div univers
    const univers = document.querySelector('.univers');
    //inicializamos una variable html vacia
    let html = '';
    //bucle para crear las filas y las columnas
    for (let i = 0; i < files; i++) {
        html += '<div class="fila">';
        for (let j = 0; j < columnes; j++) {
            //cada celula tiene un id con su posicion tanto "i" para filas como "j" para columnas
            html += `<div class="celula" data-id="${i}-${j}">${i}-${j}</div>`;
        }
        //cerramos la fila
        html += '</div>';
    }
    //insertamos el html en el div univers
    univers.innerHTML = html;
}
//esto crea un universo
dibuixaUnivers(9, 9);

//funcion para dar un booleano aleatorio 
function aleatoriPercentatge(percentatge) {
    return Math.random() * 100 < percentatge;    
}
//test para ver si la funcion funciona correctamente
let contador = 0;
for (let i = 0; i < 10000; i++) {
    if (aleatoriPercentatge(30)) {
        contador++;
    }
}
console.log("Numero de veces que a sido true: " + contador);

//funcion para crear matriz
function creaMatriu(columnes, files){
    

}

