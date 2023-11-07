//Verificación de la edad del usuario para conducir:

let edad = prompt("Ingrese su edad:");

if (edad >= 18) {
    console.log('Tiene la edad suficiente para conducir.');
} else {
    let añosFaltantes = 18 - edad;
    console.log('Te faltan ' + añosFaltantes + ' años para poder conducir.');
}

//Comparación de edades (myAge y yourAge):

let myAge = prompt("Ingresa tu edad:");
let yourAge = prompt("Ingresa mi edad:");

if (myAge > yourAge) {
    console.log('Soy ' + (myAge - yourAge) + ' años mayor que tú.');
} else if (yourAge > myAge) {
    console.log('Eres ' + (yourAge - myAge) + ' años mayor que yo.');
} else {
    console.log('Tenemos la misma edad.');
}

//Verificación de a y b utilizando if...else y operador ternario:

// Usando if...else
function comparacionIfElse(a, b) {
    if (a > b) {
        return 'a es mayor que b';
    } else {
        return 'a es menor que b';
    }
}

// Usando operador ternario
let comparacionTernaria = (a, b) => (a > b) ? 'a es mayor que b' : 'a es menor que b';

console.log(comparacionIfElse(5, 3)); // Ejemplo if...else
console.log(comparacionTernaria(5, 3)); // Ejemplo operador ternario

//Determinación de la temporada según el mes ingresado por el usuario:

let mes = prompt("Ingrese un mes (en palabras):");

switch (mes.toLowerCase()) {
    case 'septiembre':
    case 'octubre':
    case 'noviembre':
        console.log('La temporada es Otoño.');
        break;
    case 'diciembre':
    case 'enero':
    case 'febrero':
        console.log('La temporada es Invierno.');
        break;
    case 'marzo':
    case 'abril':
    case 'mayo':
        console.log('La temporada es Primavera.');
        break;
    case 'junio':
    case 'julio':
    case 'agosto':
        console.log('La temporada es Verano.');
        break;
    default:
        console.log('Mes no reconocido.');
}

//Calificación de estudiantes según sus puntajes:

let puntaje = prompt("Ingrese el puntaje del estudiante:");

if (puntaje >= 80 && puntaje <= 100) {
    console.log('Calificación: A');
} else if (puntaje >= 70 && puntaje <= 89) {
    console.log('Calificación: B');
} else if (puntaje >= 60 && puntaje <= 69) {
    console.log('Calificación: C');
} else if (puntaje >= 50 && puntaje <= 59) {
    console.log('Calificación: D');
} else if (puntaje >= 0 && puntaje <= 49) {
    console.log('Calificación: F');
} else {
    console.log('Puntaje no válido');
}