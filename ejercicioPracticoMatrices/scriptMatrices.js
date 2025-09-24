const matriz = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
];

function imprimirMatriz(matriz) {
    for (let fila = 0; fila < 4; fila++) {
        matriz[fila] = "";
        for (let columna = 0; columna < 4; columna++) {
            matriz[fila] += "[ " + matriz[fila][columna] + " ]";
        }
    }
}