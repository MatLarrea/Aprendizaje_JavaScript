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

