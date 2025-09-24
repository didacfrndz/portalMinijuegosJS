const matriz = [
    [11,12,13,14,15],
    [21,22,23,24,25],
    [31,32,33,34,35],
    [41,42,43,44,45],
];

function imprimirMatriz(matriz) {
    const divmatriz = document.getElementById('divmatriz');
    
    for (let fila = 0; fila < 4; fila++) {
        matriz[fila]=[];
        divmatriz.innerHTML += '<div class="fila-matriz">';
        for (let columna = 0; columna < 5; columna++) {
            matriz[fila][columna]= fila+1 + "" + columna+1;
            divmatriz.innerHTML += `<div class="box-matriz">${matriz[fila][columna]}</div>`;
        }
        divmatriz.innerHTML += '</div>';
    }
}
imprimirMatriz(matriz);