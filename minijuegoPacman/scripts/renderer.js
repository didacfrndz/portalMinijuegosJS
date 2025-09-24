// Importo el array de enemigos
import { enemigos } from './enemy.js';

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
    
    // Limpia el contenedor antes de imprimir la matriz
    divmatriz.innerHTML = ''; 
    
    // Recorre las filas de la matriz
    for (let fila = 0; fila < matriz.length; fila++) {
        let filaHTML = '<div class="fila-matriz">';
        
        // Recorre las columnas de cada fila
        for (let columna = 0; columna < matriz[fila].length; columna++) {
            // Muestra los enemigos (usamos 'E' para indicar la posición de un enemigo)
            if (matriz[fila][columna] === 'E') {
                filaHTML += `<div class="box-matriz enemigo">🛸</div>`;  // Usamos un ícono de nave, pero puedes usar cualquier cosa
            } else {
                filaHTML += `<div class="box-matriz">${matriz[fila][columna]}</div>`;
            }
        }

        filaHTML += '</div>';
        divmatriz.innerHTML += filaHTML; 
    }
}

// Llama a la función para imprimir la matriz
imprimirMatriz(matriz);
