// Importo el array de enemigos
import { enemigos } from './enemy.js';
import { player } from './player.js';
// Esta es la matriz inicial (tablero de juego)
const matriz = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

// Coloca los enemigos en la matriz
enemigos.forEach(enemigo => {
    if (enemigo.vivo) {
        // Coloca al enemigo en la posición correspondiente
        matriz[enemigo.f][enemigo.c] = 'E'; // 'E' representa un enemigo
    }
});

// Función para imprimir la matriz en el HTML
function imprimirMatriz(matriz) {
    // Selecciona el contenedor donde se imprimirá la matriz
    const divmatriz = document.getElementById('gameContainer');
    
    // Crea una cadena HTML completa
    let matrizHTML = '';
    
    // Recorre las filas de la matriz
    for (let fila = 0; fila < matriz.length; fila++) {
        matrizHTML += '<div class="fila-matriz">';
        
        // Recorre las columnas de cada fila
        for (let columna = 0; columna < matriz[fila].length; columna++) {
            // Muestra los enemigos (usamos 'E' para indicar la posición de un enemigo)
            if (matriz[fila][columna] === 'E') {
                matrizHTML += `<div class="box-matriz enemigo">🛸</div>`;  // Usamos un ícono de nave, pero puedes usar cualquier cosa
            } else {
                matrizHTML += `<div class="box-matriz">${matriz[fila][columna]}</div>`;
            }
        }

        matrizHTML += '</div>';
    }
    
    // Actualiza el contenido de una sola vez
    divmatriz.innerHTML = matrizHTML;
}

// Llama a la función para imprimir la matriz


//ahora añadiremos a padman a la matriz y la imprimiremos
if (player.vivo) {
    matriz[player.f][player.c] = '😊'; // emoji representa a Pacman
}
imprimirMatriz(matriz);

