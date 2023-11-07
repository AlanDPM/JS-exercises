//Declaración de variables y uso de typeof:

let firstName = "Alan";
let lastName = "Pech";
let country = "México";
let city = "Playa del Carmen";
let age = 19;
let isMarried = false;
let year = 2004;

console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isMarried);

//Verificación de igualdades:

console.log(typeof '10' === 10);
console.log(parseInt('9.8') === 10);
console.log(typeof true);
console.log(typeof false);

//Declaraciones que proveen valores verdaderos:

console.log(5 > 3);
console.log(10 === 10);
console.log(!!'hello');

//Declaraciones que proveen valores falsos:

console.log(2 < 1);
console.log(0 === 1);
console.log(!!'');

//Comparaciones y sus resultados:

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

//Uso del objeto Date:

const today = new Date();
console.log(today.getFullYear());
console.log(today.getMonth() + 1);
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getTime() / 1000);

//Cálculo del área de un triángulo:

let base = prompt("Ingrese la base del triángulo:");
let altura = prompt("Ingrese la altura del triángulo:");

let area = 0.5 * base * altura;
console.log("El área del triángulo es: " + area);

//Cálculo del perímetro de un triángulo:

let ladoA = prompt("Ingrese la longitud del lado A:");
let ladoB = prompt("Ingrese la longitud del lado B:");
let ladoC = prompt("Ingrese la longitud del lado C:");

let perimetro = parseFloat(ladoA) + parseFloat(ladoB) + parseFloat(ladoC);
console.log("El perímetro del triángulo es: " + perimetro);