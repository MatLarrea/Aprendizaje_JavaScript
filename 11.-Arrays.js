//Declaración y asignación de arrays

[1, 2, 3, 4]

//Estos pueden ser de cualquier tipo incluso otro array

[1, null, [1,2,3], undefined]

//podemos asignarlos a una variable 

const numbers = [1, 2, 3]


//Se accede a los elementos mediante su posición en el array (parte desde el 0 en adelante)

console.log(numbers[1]) //--> 2

//Podemos reasignar el valor de un elemento del  array

numbers[0] = 10 // 1 --> 10

//Podemos usar variables para acceder a los elementos de un array

let index = 2
console.log(index) // --> 3

//Métodos y propiedades de un Array que nos permiten trabajar con ellos de forma sencilla

//Cuantos elementos tiene una colección
const frutas = ['manzana', 'banana', 'pera']

frutas.length // --> 3

//Podemos acortar un array

frutas.length = 2 // --> ['manzana', 'banana']

//Los métodos son funciones que se ejecutan sobre un objeto

//Añadir elemento al array
frutas.push('sandia') //--> ['manzana', 'banana', 'sandia']

//Eliminar el ultimo elemento del array y retornalo
frutas.pop() // --> "sandia" ['manzana', 'banana']

//Eliminar primer elemento del array
frutas.shift() // --> "manzana" ['banana']

//Añadir elemento al inicio del array
frutas.unshift('fresa') // --> ['fresa','banana']

//Concatenar arrays

const num1 = [1,2,3]
const num2 = [4,5]

const allNum = num1.concat(num2) // --> [1,2,3,4,5]

const allNumSpread = [...num1, ...num2] // --> [1,2,3,4,5]

//Iteración de arrays

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}

//for..of, esta estructura de control es más simplre que for, ya que no necesitamos crear una variable para guardar el índice del elemento que estamos iterando

let frutas = ['🍎', '🍌', '🍓']

for (let fruta of frutas) {
  console.log(fruta) // imprime el elemento en la posición i
}

//forEach, es un método de los array que nos permite ejectar una function para cada uno de los elementos del array, esta recibe como parámetros el elemento que se está iterando en ese momento, el índice del elemento y el propio array

let frutas = ['🍎', '🍌', '🍓']

frutas.forEach(function (fruta, index, originalArray) {
  console.log(fruta) // imprime el elemento en la posición i
})

//Podemos simplificarlo aún más con un arrow function

frutas.forEach((fruta) => {
    console.log(fruta)
})

//Algo importante es que array.forEach() no devuelve nada, por lo que no podemos asignar el resultado a una variable.


//Métodos para buscar en arrays, existen varios inclyendo indexOf, some, every, find, findIndex e includes

const emojis = ['✨', '🥑', '😍']

//indexOf, permite encontrar la posición de un elemento dentro de un array, si este no existe entonces retorna -1

const posicionCorazon = emojis.indexOf('😍')

console.log(posicionCorazon) // -> 2

//includes, determina si un array incluye un determinado elemento devolviendo true o false según corresponda

const tieneCorazon = emojis.includes('😍')

console.log(tieneCorazon) // -> true

//El método include también funciona con las cadenas de texto. Puedes utilizarlo para buscar una subcadena dentro de una cadena de texto 'Hola mundo'.includes('hola') --> true

//some, permite verificar si al menos uno de los elementos de una array cumple con una condición

//Debemos pasarle una función como argumento, esta recibe cada uno de los elementos de array y debe retonar un booleano, si al menos uno de los elementos retorna true some retornara true 
const haveHearth = emojis.some(emoji => emoji === '😍')
console.log(tieneCorazon) // -> true

//Si bien en este ejemplo se ve muy similar a includes some es mucho más potente

const names = ['Leo', 'Isa', 'Ían', 'Lea']

//Podemos pasarle funciones más complejas 
//función que verifique si un Array contiene un elemento que sea un string de más de 3 caracteres.
const tieneNombreLargo = names.some(name => name.length > 3)
console.log(tieneNombreLargo) // -> false

//Tener en cuenta que some iterara solo hasta que se cumpla la condición si tenemos un array de 10 elementos y el elemento en el índice 3 cumple la condición no va a iterar sobre los 7 elementos restantes

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const tieneNumeroMayorA5 = numbers.some(number => {
  console.log(`Estoy iterando sobre el número ${number}`) // -> Imprime hasta el número 6

  //devuelve false hasta que number sea mayor a 5, esto hace que el some termine, ya que recibio un true 
  return number > 5
})

console.log(tieneNumeroMayorA5) // -> true

//every, permite verificar si todos los elementos de un array cumplen con una codición, al igual que some debemos pasarle una función como argumento, el método retorna true si todos los elementos de array retornan true

// ¿Todos los emojis son felices?
const emojiss = ['😀', '😂', '😍', '😭', '🥺', '😎']
const todosSonFelices = emojis.every(emoji => emoji === '😀')
console.log(todosSonFelices) // -> false

// ¿Todos los números son pares?
const numbers = [2, 4, 7, 10, 12]
const todosSonPares = numbers.every(number => number % 2 === 0)
console.log(todosSonPares) // -> false

// ¿Todos los strings son mayores a 3 caracteres?
const namess = ['Miguel', 'Juan', 'Itziar', 'Isabel']
const todosLosNombresSonLargos = names.every(name => name.length > 3)
console.log(todosLosNombresSonLargos)

//find, permite encontrar el primer elemento que cumple con una codición, este elemento te devuelve el elemento en sí, no un valor booleano

//Debemos pasarle una función como argumento que retorne un valor booleano

const num = [12,32,43,54,-1]
// encuentra el primer número negativo
const numNegativo = num.find((nu) => nu < 0)


console.log(numfNegativo) // -> -1


//si no encuentra ningún elemento, find retorna undefined
const numbers = [13, 27, 44, 81]
// encuentra el primer número negativo
const firstNegativeNumber = numbers.find(number => number < 0)

console.log(firstNegativeNumber) // -> undefined

//findIndex, devuelve el índice del primer elemento que cumple la condición

const numbers = [13, 27, 44, -10, 81]

// encuentra el índice del primer número negativo
const firstNegativeNumberIndex = numbers.findIndex(number => number < 0)

console.log(firstNegativeNumberIndex) // -> 3

// ahora puedes usar el índice para acceder al elemento
console.log(numbers[firstNegativeNumberIndex]) // -> -10

//Si no se encuentra ningún elemento el método retornara -1
const numbers = [13, 27, 44, 81]

// encuentra el índice del primer número negativo   |
const firstNegativeNumberIndexs = numbers.findIndex(number => number < 0)

console.log(firstNegativeNumberIndex) // -> -1