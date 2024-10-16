//definicion de funcion
/*
function hello(){
    console.log('Hola clase');
    console.log('5IV7');

}

//llamada a la funcion
hello();
hello();
hello();
hello();
hello();
*/

//retorno de una funcion
/*
function hello(){
    return 'Hola Clase';
}

const result = hello()

console.log(result);
*/

//funcion que retorna otra funcion
/*
function hello(){
    return function (){
        return 'hola soy la funcion 2';
    }
}

console.log(hello()());
*/

//funcion con parametros
/*
function add(x){
    console.log(x);
}

add(5)
*/

//multiparametros
/*
function add(x,y){
    console.log(x+y);
}
add(5,undefined)
*/

//control de error en multiparametros
/*
function add(x,y){
    if (y===undefined){
        y=0
    }
    console.log(x+y);
}

add(5,undefined)
*/

//parametro de tipo cadena
/*
function add(name){
    console.log('Hola '+name);
}

add("Clase JS");
*/

//objetos
const user = {
    nombre:'y2kath',
    apellidoP:'skibidi',
    apellidoM:'toilet',
    edad:69,
    direccion:{
        calle:'peru',
        no:13,
        colonia:'lima',
        delegacion:'el cerro'
    },
    amigos:['yerimua', 'bellakath'],
    activo:true
}

//consola nombre aP aM
//alert activo;
//consola edad
//alert calle no colonia delegacion
//consola amigos
console.log(user.nombre,user.apellidoP,user.apellidoM);

console.log(user.edad);

console.log(user.amigos)
