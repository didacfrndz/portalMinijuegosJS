
const glider = [
    [false, true, false],
    [false, false, true],
    [true, true, true]
];

// Patrón "blinker"
const blinker = [
    [true, true, true]
];

// Patrón "toad"
const toad = [
    [false, true, true, true],
    [true, true, true, false]
];
//patron exploder
const exploder = [
    [false, true, false, true, false],
    [true, true, true, true, true],
    [false, true, false, true, false]
];

//exportamos los patrones
export { glider, blinker, toad, exploder };
