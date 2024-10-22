//01 definimos funcion normal
function hola(a,b){
    return a+b;
}

console.log(hola(3,5))

//02 convertir a funcion flecha
const suma = (a,b) => {
    return a+b;
}

console.log(suma(3,5));

//03 simplificar
const suma2 = (a,b) => a+b;

console.log(suma(5,5));

//04 solo un parametro
const cuadrado = x => x*x;
console.log(cuadrado(5));