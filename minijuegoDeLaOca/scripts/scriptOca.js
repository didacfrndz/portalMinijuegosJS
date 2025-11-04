const casillas = [
  { id: 1, estado: 'basico', x: null, y: null },
  { id: 2, estado: 'avanzar', x: null, y: null },
  { id: 3, estado: 'basico', x: null, y: null },
  { id: 4, estado: 'basico', x: null, y: null },
  { id: 5, estado: 'pierdeTurno', x: null, y: null },
  { id: 6, estado: 'basico', x: null, y: null },
  { id: 7, estado: 'avanzar', x: null, y: null },
  { id: 8, estado: 'basico', x: null, y: null },
  { id: 9, estado: 'basico', x: null, y: null },
  { id: 10, estado: 'basico', x: null, y: null },
  { id: 11, estado: 'basico', x: null, y: null },
  { id: 12, estado: 'vuelveAEmpezar', x: null, y: null },
  { id: 13, estado: 'basico', x: null, y: null },
  { id: 14, estado: 'avanzar', x: null, y: null },
  { id: 15, estado: 'basico', x: null, y: null },
  { id: 16, estado: 'basico', x: null, y: null },
  { id: 17, estado: 'basico', x: null, y: null },
  { id: 18, estado: 'pierdeTurno', x: null, y: null },
  { id: 19, estado: 'basico', x: null, y: null },
  { id: 20, estado: 'basico', x: null, y: null },
  { id: 21, estado: 'basico', x: null, y: null },
  { id: 22, estado: 'avanzar', x: null, y: null },
  { id: 23, estado: 'basico', x: null, y: null },
  { id: 24, estado: 'basico', x: null, y: null },
  { id: 25, estado: 'retroceder', x: null, y: null },
  { id: 26, estado: 'basico', x: null, y: null },
  { id: 27, estado: 'basico', x: null, y: null },
  { id: 28, estado: 'basico', x: null, y: null },
  { id: 29, estado: 'basico', x: null, y: null },
  { id: 30, estado: 'vuelveAtras', x: null, y: null },
  { id: 31, estado: 'tiraOtravez', x: null, y: null },
  { id: 32, estado: 'basico', x: null, y: null },
  { id: 33, estado: 'retroceder', x: null, y: null },
  { id: 34, estado: 'basico', x: null, y: null },
  { id: 35, estado: 'basico', x: null, y: null },
  { id: 36, estado: 'final', x: null, y: null }
];
const dado1 = document.getElementById('dado1');
const dado2 = document.getElementById('dado2');
const btnDado1 = document.getElementById('btnDado1');
const btnDado2 = document.getElementById('btnDado2');
// logica dado jugador 1 y mostrar resultado
btnDado1.addEventListener('click', () => {
  const resultadoDado1 = Math.floor(Math.random() * 6) + 1;
  dado1.textContent = `${resultadoDado1}`;
  
}
);
btnDado2.addEventListener('click', () => {
  const resultadoDado2 = Math.floor(Math.random() * 6) + 1;
  dado2.textContent = `${resultadoDado2}`;
}
);  
// logica dado jugador 2 y mostrar resultado
