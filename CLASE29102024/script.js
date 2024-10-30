//codigo q realice operaciones como multiplicar sumar y restar entre los numeros q estan en un array
/*
console.log("Codigo Declarativo");

const numbers = [1, 2, 3, 4, 5, 6];

function sumar(array) {
    return array.reduce((acc, num) => acc + num, 0);
}

function restar(array) {
    return array.reduce((acc, num) => acc - num);
}

function multiplicar(array) {
    return array.reduce((acc, num) => acc * num, 1);
}

const suma = sumar(numbers);
const resta = restar(numbers);
const multiplicacion = multiplicar(numbers);

console.log(suma);
console.log(resta);
console.log(multiplicacion);


console.log("Codigo Imperativo");

let suma2 = 0;
for (let i = 1; i <= 6; i++) {
suma2 += i;
}
console.log(suma2);

let resta2 = -4;
for (let i = 1; i < 6; i++) {
resta2 -= i;
}
console.log(resta2);

let multi2 = 1;
for (let i = 1; i <= 6; i++) {
multi2 *= i;
}
console.log(multi2);
*/

console.log("Codigo Imperativo");

const tablaDelOcho = [];

for (let i = 1; i <= 10; i++) {
    tablaDelOcho.push(8 * i);
}

// Imprimir la tabla
for (let i = 0; i < tablaDelOcho.length; i++) {
    console.log(`8 x ${i + 1} = ${tablaDelOcho[i]}`);
}

console.log("Codigo Declarativo");

const tablaDelOcho2 = Array.from({ length: 10 }, (_, i) => 8 * (i + 1));

// Imprimir la tabla
tablaDelOcho.forEach((valor, index) => {
    console.log(`8 x ${index + 1} = ${valor}`);
});

