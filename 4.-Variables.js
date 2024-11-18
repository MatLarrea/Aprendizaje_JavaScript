//Para crear una variable en javascript utilizamos la palabra reservada let variable
// = asignación

let number = 1

//Constantes const son variables que no puede re reasignadas

const PI = 3.1415

//Si la intentas reasignar, obtendras un error:

PI = 3 // -> TypeError: Assignment to constant variable

//Como no podemos reasignar su valor, las constantes deben ser inicializadas con algún valor, a diferencia de let que no es necesario inicializarla

let numero // ✅
//const RADIUS // ❌ SyntaxError: Missing initializer in const declaration

//Variables var, es la forma primitiva para crear una variable, no es recomendable utilizarla ya que tiene comportamientos extraños que pueden causar errores en tu código

//conveciones y nomenclaturas

//camelCase es la forma más común de nombre las variables en JavaScript, consiste en escribir la primera palabra en minúscula y las siguientes palabras con su primera letra en mayúscula

let camelCase = 1
let camelcaseIsColl = true
let userName = 'Paula'

//snake_case es una forma de nombras que consiste en escribir todas las palabras en minúscula y separalas con guiones bajos

let snake_case = 1
let snake_case_is_cool = false
let user_name = 'Matias'

//En JavaScript el más utilizado es el camelCase pero para nombrar archivos es buena idea utilizar snake_case

//mi_archivo.js

//SCREAMING_CASE es una forma de nombrar que consiste en escribir todas las palabras en mayúscula y separarlas con guiones bajos.

const SCREAMING_CASE = 1
const SCREAMING_CASE_IS_COOL =true
const USER_NAME = 'PAULA'

//Es muy común utilizar esta nomenclatura para nombrar variables constantes

//Null y undefined, este tipo de datos solo puede tener un valor null el valor null y undefined el valor undefined

//Null significa que algo no tiene valor pero undefined significa que algo no ha sido definido, si creamos una variable sin asignarle ningún valor, su valor será undefined

let variable // -> undefined

//También lo podemos asignar a una variable

let nombre = undefined

//En cambio, para que una variable tenga valor null, siempre debemos asignarselo

let auto = null

//Comparaciones con null y undefined

null === undefined // -> false

//Solo al comparar entre el mismo valor obtenemos true

null === null // -> true
undefined === undefined // -> true

//Operador typeof, devuelve una cadena de texto que indica el tipo de un operando, puede ser usado con variable y literales

const MAGIC_NUMBER = 7
typeof MAGIC_NUMBER // number

//Usado con valores literales

typeof undefined // "undefined"
typeof true // "boolean"
typeof 42 // "number"
typeof "Hola mundo" // "string"

//Existe un valor especial en JavaScript null, que se considera un bug en el lenguaje que el operador typeof devuelve "objetc" al usarlo

typeof null // object

//Si deseas comprobar si una variable es null estaras obligado a usar la comparación estrica ===

const foo = null

foo === null // true

//Usando typeof con operadores de comparación

//podemos comprobar si una variable es del tipo que esperamos

const age = 42
typeof age === "number" // true

//Una vez tenemos expresiones lógicas, podemos empezar a encadenar operadores lógicos para comprobar múltiples condiciones

const age1 = 42
typeof age === "number" && age > 18 // true

