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

//Ordenamiento de arrays en JavaScript

//Los array tienen un método para ordenarse llamado sort, este tiene un comportamiento extraño si se utiliza por defecto, ya que ordena los números en función de su valos como cadena de texto

const numeros = [5, 10, 2, 25, 7]

numeros.sort() //--> [10, 2, 25, 5, 7]

//Lo bueno es que este método recibe una función como parametro que debe devolver un valor

//si la función devuelve un negativo
numeros.sort((a,b) => a - b) // [2, 5, 7, 10, 25]

//si la función devuelve un positivo
numeros.sort((a, b) => b - a) // [25, 10, 7, 5, 2]

//si la función devuelve 0 ambos argumentos son iguales

//.sort modifica el array original, si quiere obtener un array ordenado sin modificar puedes usar el método .toSorted() (ten en cuenta que, ahora mismo, su soporte en navegadores el limitado)

let numerosOrdenados = numeros.toSorted((a, b) => {
  return a - b
})

console.log(numerosOrdenados) // [2, 5, 7, 10, 25]
console.log(numeros) // [5, 10, 2, 25, 7]

//También podrias usar el operador de progragación para crear un copia del array original

const copiaNumeros = [...numeros]
//Ordenamos la copia 
copiaNumeros.sort((a, b) => a - b) // [5, 10, 2, 25, 7]

//Transformación de arrays en JavaScript

//Filter, es un método que crea un nuevo array con todos los elementos que devuelven true al ejecutar una función que le pasamos como parámetro

const numbers = [1 ,2 , 3, 4, 5, 6, 7]

//nuevo array con los números pares del array numbers
const evenNumbers = numbers.filter(number => number % 2 === 0) // -> [2, 4, 6]

const strings = ['hola', 'adiós', 'casa', ' coche', 'perro', 'gato']

//nuevo array con las palabras que tengan una a
const stringsWithA = strings.filter(string => string.includes('a')) // -> ['hola', 'adiós', 'casa', 'gato']

//Map, crea un nuevo array de la misma longitud que el original, pero con los elementos tranformados por una función que le pasamos como parámetro, la función recibira cada elemento del array y lo retornara transformado
const numbers = [1, 2, 3]

//Array con el doble de los numeros almacenados en numbers
const doubleNumbers = numbers.map(number => number * 2) //-> [2, 4, 6]

const stringss = ['hola', 'javascript', 'paula', 'programación']

//Array con la longitud de cada cadena de texto de un array de cadenas
const stringsLength = stringss.map(string => string.length)

//Map + Filter, en JavaScript podemos encadenar métodos, si un método devuelve un array podemos llamar a otro método sobre ese array sin necesidad de guardarlo en una variable

const numbers = [1 ,2 , 3, 4, 5, 6, 7]

const numsGreaterThanFive = numbers
  .map(number => number * 2) //-> [2, 4, 6, 8, 10, 12, 14]
  .filter(number => number > 5) // -> [6, 8, 10, 12, 14]

//También podríamos filtrar primero y luego transformar
const doubleEvenNumbers = numbers
  .filter(number => number % 2 === 0) // -> [2, 4 ,6]
  .map(number => number * 2) // -> [4, 8, 12]

//Reduce, permite crear un único valor a partir de un array, recibe dos parámetos: una función que se ejecutará por cada elemento y un valor inicial, opcional, que será donde podremos acumular los valores

//La función recibe tres parámetros:
//El acumulador: el valor que se va a ir acumulando en cada iteración
//El elemento actual: el elemento del array que estamos iterando en ese momento
//El índice: la posición del elemento actual del array
//la función debe devolver el valor que se va a acumular en cada iteración

//Caso de uso típico de reduce, sumar todos los elementos de un array

const numbers = [1, 2, 3]

const sum = numbers.reduce((suma, number) => {
  return suma + number
}, 0) // <- valor inicial

//podemos recrear lo que hicimos con map y filter anteriormente para doblar los números pares y quedarnos solo con los que son mayores a 5

const numbers = [1, 2, 3, 4, 5, 6, 7]

const doubleEvenNumberss = numbers.reduce((accumulator, currentNumber) => {
  const isEven = currentNumber % 2 === 0
  const doubled = currentNumber * 2
  const isGreaterThanFive = doubled > 5

  // si es par y mayor que 5, lo añadimos al array
  if (isEven && isGreaterThanFive) {
    // para ello devolvemos un nuevo array con el valor actual
    return accumulator.concat(doubled)
  } else {
    // si no, devolvemos lo que ya teníamos
    return accumulator
  }
}, []) // <- el array vacío es el valor inicial

console.log(doubleEvenNumbers) // [8, 12]

//ten en cuenta que la carga cognitica de reduce es mayor que la de utilizar map y filter, así que si puedes usarlo en ves de reduce hazlo y limita el uso de reduce cuando no tengas más opciones
