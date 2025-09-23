// Array de preguntas i respostes
const preguntesMatematica = [
  {
    pregunta: "Quin és el resultat de 2 + 3?",
    respostes: ["4", "5", "6"],
    correcta: 1,
  },
  {
    pregunta: "Quin és el resultat de 5 - 2?",
    respostes: ["1", "2", "3"],
    correcta: 2,
  },
  {
    pregunta: "Quin és el resultat de 3 x 4?",
    respostes: ["10", "12", "14"],
    correcta: 1,
  },
  {
    pregunta: "Quin és el resultat de 6 ÷ 3?",
    respostes: ["1", "2", "3"],
    correcta: 1,
  },
  {
    pregunta: "Quin és el resultat de 9 + 7?",
    respostes: ["16", "17", "18"],
    correcta: 0,
  },
  {
    pregunta: "Quin és el resultat de 8 - 4?",
    respostes: ["2", "3", "4"],
    correcta: 2,
  },
  {
    pregunta: "Quin és el resultat de 12 ÷ 4?",
    respostes: ["2", "3", "4"],
    correcta: 1,
  },
  {
    pregunta: "Quin és el resultat de 5 x 5?",
    respostes: ["20", "25", "30"],
    correcta: 1,
  },
  {
    pregunta: "Quin és el resultat de 15 ÷ 3?",
    respostes: ["4", "5", "6"],
    correcta: 1,
  },
  {
    pregunta: "Quin és el resultat de 7 x 6?",
    respostes: ["42", "48", "36"],
    correcta: 0,
  },
  {
    pregunta: "Quin és el resultat de 10 x 9?",
    respostes: ["80", "90", "100"],
    correcta: 1,
  },
  {
    pregunta: "Quin és el resultat de 20 ÷ 5?",
    respostes: ["2", "4", "6"],
    correcta: 1,
  },
  {
    pregunta: "Quin és el resultat de 12 + 18?",
    respostes: ["28", "30", "32"],
    correcta: 1,
  },
  {
    pregunta: "Quin és el resultat de 36 ÷ 6?",
    respostes: ["5", "6", "7"],
    correcta: 1,
  },
  {
    pregunta: "Quin és el resultat de 14 x 3?",
    respostes: ["38", "42", "45"],
    correcta: 1,
  },
  {
    pregunta: "Quin és el resultat de 17 + 9?",
    respostes: ["24", "25", "26"],
    correcta: 0,
  },
  {
    pregunta: "Quin és el resultat de 25 ÷ 5?",
    respostes: ["3", "5", "7"],
    correcta: 1,
  },
  {
    pregunta: "Quin és el resultat de 48 ÷ 8?",
    respostes: ["6", "7", "8"],
    correcta: 0,
  },
  {
    pregunta: "Quin és el resultat de 81 ÷ 9?",
    respostes: ["8", "9", "10"],
    correcta: 1,
  },
  {
    pregunta: "Quin és el resultat de 17 x 6?",
    respostes: ["98", "102", "106"],
    correcta: 1,
  },
];

//Variables
let posicionPregunta = 0;
const preguntaCard = document.querySelector('.question-title');
const respuestasContainer = document.querySelector('.mb-4');
const dadoSpan = document.querySelector('.dice-number');
const botonDado = document.querySelector('.btn-outline-primary.btn-sm');
const progresoTexto = document.querySelector('.d-flex.justify-content-between.text-muted.mb-2 span:last-child');
const progresoBarra = document.querySelector('.progress-fill');

// NUEVO: Variable para controlar si ya se ha respondido la pregunta
let preguntaRespondida = false;

// Variables para las posiciones de los jugadores
let posicionJugador1 = 4; // Puedes inicializar según tu lógica de tablero
let posicionJugador2 = 2;
let turnoJugador = 1; // 1 o 2

// Elementos para mostrar la posición de los jugadores
const jugador1Posicion = document.querySelectorAll('.player-position')[0];
const jugador2Posicion = document.querySelectorAll('.player-position')[1];
const jugador1Casilla = document.querySelectorAll('.badge-outline')[0];
const jugador2Casilla = document.querySelectorAll('.badge-outline')[1];
const turnoBadge = document.querySelector('.badge-primary');

// Actualiza visualmente la posición de los jugadores
function actualizarPosiciones() {
    jugador1Posicion.querySelector('span').textContent = posicionJugador1;
    jugador2Posicion.querySelector('span').textContent = posicionJugador2;
    jugador1Casilla.textContent = `Casilla ${posicionJugador1}`;
    jugador2Casilla.textContent = `Casilla ${posicionJugador2}`;
    // Cambia el color de jugador activo
    if (turnoJugador === 1) {
        jugador1Posicion.classList.add('player-active');
        jugador1Posicion.classList.remove('player-inactive');
        jugador2Posicion.classList.add('player-inactive');
        jugador2Posicion.classList.remove('player-active');
        turnoBadge.textContent = 'Turno: Jugador 1';
        turnoBadge.classList.add('badge-primary');
        turnoBadge.classList.remove('badge-secondary');
    } else {
        jugador2Posicion.classList.add('player-active');
        jugador2Posicion.classList.remove('player-inactive');
        jugador1Posicion.classList.add('player-inactive');
        jugador1Posicion.classList.remove('player-active');
        turnoBadge.textContent = 'Turno: Jugador 2';
        turnoBadge.classList.add('badge-secondary');
        turnoBadge.classList.remove('badge-primary');
    }
}

// Funció per mostrar la pregunta i les seves respostes
function mostrarPregunta(pos) {
    const preguntaObj = preguntesMatematica[pos];
    if (!preguntaObj) return;
    preguntaCard.textContent = preguntaObj.pregunta;
    respuestasContainer.innerHTML = '';
    preguntaRespondida = false; // Permetre respondre la nova pregunta

    // Mostrar respostes
    preguntaObj.respostes.forEach((respuesta, idx) => {
        const letra = ['A', 'B', 'C'][idx];
        const btn = document.createElement('button');
        btn.className = 'btn answer-btn w-100';
        btn.innerHTML = `<span class="answer-letter">${letra})</span> ${respuesta}`;
        btn.disabled = false;
        // NUEVO: Evento para seleccionar respuesta
        btn.addEventListener('click', function () {
            if (preguntaRespondida) return;
            preguntaRespondida = true;
            // Deshabilitar todos los botones
            Array.from(respuestasContainer.children).forEach(b => b.disabled = true);
            // Marcar correcta/incorrecta
            let acierto = false;
            if (idx === preguntaObj.correcta) {
                btn.classList.add('btn-success');
                acierto = true;
            } else {
                btn.classList.add('btn-danger');
                // Resaltar la correcta
                respuestasContainer.children[preguntaObj.correcta].classList.add('btn-success');
            }
            // Espera un momento y luego mueve al jugador y cambia turno
            setTimeout(() => {
                moverJugador(acierto);
                cambiarTurno();
                actualizarPosiciones();
            }, 900);
        });
        respuestasContainer.appendChild(btn);
    });

    // Actualizar progreso
    const porcentaje = Math.round(((pos + 1) / preguntesMatematica.length) * 100);
    if (progresoTexto) progresoTexto.textContent = `${porcentaje}%`;
    if (progresoBarra) progresoBarra.style.width = `${porcentaje}%`;
}

// Mueve al jugador según si acierta o falla
function moverJugador(acierto) {
    if (turnoJugador === 1) {
        if (acierto) {
            posicionJugador1 += 5;
        } else {
            posicionJugador1 = Math.max(1, posicionJugador1 - 1);
        }
    } else {
        if (acierto) {
            posicionJugador2 += 5;
        } else {
            posicionJugador2 = Math.max(1, posicionJugador2 - 1);
        }
    }
}

// Cambia el turno al otro jugador
function cambiarTurno() {
    turnoJugador = turnoJugador === 1 ? 2 : 1;
}

// Mostrar la primera pregunta al cargar
mostrarPregunta(posicionPregunta);
actualizarPosiciones();

//Lógica del dado y avance
botonDado.addEventListener("click", function() {
    if (posicionPregunta >= preguntesMatematica.length - 1) {
        posicionPregunta = 0;
        mostrarPregunta(posicionPregunta);
        dadoSpan.textContent = '?';
        botonDado.textContent = '🎲 Tirar dado';
        botonDado.classList.remove("rojo");
        botonDado.classList.add("btn-outline-primary");
        return;
    }

    let valorDado = Math.floor(Math.random() * 6 + 1);
    dadoSpan.textContent = valorDado;

    posicionPregunta += valorDado;
    if (posicionPregunta >= preguntesMatematica.length) {
        posicionPregunta = preguntesMatematica.length - 1;
    }

    mostrarPregunta(posicionPregunta);

    if (posicionPregunta >= preguntesMatematica.length - 1) {
        botonDado.textContent = 'Reiniciar';
        botonDado.classList.remove("btn-outline-primary");
        botonDado.classList.add("rojo");
    }
});
