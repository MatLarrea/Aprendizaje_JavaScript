//Una función es un bloque de código que realiza una tarea específica cuando se llama, estas pueden recibir parámetros

function sumar(num1, num2){
    return num1 + num2;
}

//Operaciones de Math en JavaScript

//Número aleatorio entre 0 y 1
Math.random();

//Redondea un número decimal hacia abajo
Math.floor();

//Número aleatorio entre el 1 y el 10
function getRandomNumber(){
    const num = Math.random()
    console.log(num)
    const multiplied = num * 10
    console.log(multiplied)
    const rounded = Math.floor(multiplied)
    console.log(rounded)
    return rounded + 1
}

//Parámetros usuario
function saludar(usuario){ 
    console.log('Hola ' + usuario)
}

//argumento Paula
saludar('Paula')

//Function Expression, es una función que se asigna a una variable:

const sum = function(a, b){ //como puedes ver en este caso la función no tiene un nombre, a esto se le llama función anónima
    return a + b
}

//Para acceder a la función debemos usar el nombre de la variable a cual se la asignamos

sum(1, 2)

//Hoisting, es un término que se usa para describir cómo JavaScript parace que mueve las declaraciones de funciones al principio del código, de fomra que las puedes usar incluso antes de declararlas

sum(1, 2) // 3

function sum(a, b) {
  return a + b
}

//Lo que está pasando es que JavaScript asigna en memoria durante la fase de compilación las declaraciones de funciones y por eso al ejecutarse el código tiene acceso a esa posición de memoria a la que se refiere la función.

//Eso sería la explicación técnica del hoisting, pero si te sirve de ayuda, puedes pensar que es como si JavaScript moviese las declaraciones de funciones al principio del código.

//Las function expression a diferencia de las funciones normales no se aplica el hoisting

sum(1, 2) // ❌ ReferenceError: sum is not defined

const sum = function (a, b) {
  return a + b
}

//Arrow function, son una forma más concisa de crear funciones en JavaScript:

//Las arrow function siempre son anónimas y function expressions
const miFuncionFlecha = () => {
    // código a ejecutar
}

//También podemos omitir los paréntesis alrededor de los parámetros si solo tenemos uno

const saludar = nombre => {
    console.log("Hola " + nombre)
}

//Ventajas de las Arrow Function

//Sintaxis más concisa: la sintaxis de las funciones flecha es más corta y más fácil de leer que la sintaxis de las funciones regulares, especialmente cuando se trabaja con funciones de una sola línea.

//Return implícito: las funciones flecha puede devolver el valor de la expresión sin usar la palabra clave return cuando son de una sola línea. Esto hace que las funciones flecha sean aún más cortas y más fáciles de leer.

//Funciones anónimas más legibles: las funciones flecha son una forma más legible y concisa de crear funciones anónimas en JavaScript, lo cual puede hacer que nuestro código sea más fácil de entender.

//Recursividad, es una técnica de programación que consiste en que una función se llama a sí misma

//Para evitar que una función recursiva se llame infinitamente debebos utilizar una condición base

function cuentaAtras(numero) {
  // Condición base: Si el número que recibe es
  // menor de 0 entonces salimos de la función
  if (numero < 0) { return }

  // Si el número era mayor o igual a 0, lo mostramos
  console.log(numero)

  // Y llamamos a la función con el número anterior
  cuentaAtras(numero - 1)
}

//SIEMPRE DEBEMOS UTILIZAR UNA CONDICIÓN BASE PARA EVITAR QUE LA FUNCIÓN SE LLAME INFINITAMENTE

//Ejemplo de recursividad en un algormitmo

//Factorial de un número, es el resultado de multiplicar ese número por todos los anteriores hasta llegar a 1. Por ejemplo, el factorial de 5 es 5 * 4 * 3 * 2 * 1 = 120

function factorial(n){
    if (n === 0 || n === 1){
        return 1
    }else{
        return n * factorial(n - 1)
    }
}


