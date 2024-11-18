//El código condicional es un bloque de código que se ejecuta sólo si se cumple una condición. En JavaScript usamos la palabra reservada if para crear un bloque condicional, así:

if (condicion) {
    // código que se ejecuta si la condición es verdadera
  }

//Es posible utilizar la palabra clave else para ejecutar un bloque de código diferente si la condición es falsa:

const edad = 17

if (edad >= 18) {
  console.log('Eres mayor de edad')
} else {
  console.log('Eres menor de edad')
}

//También podemos utilizar la palabra clave else if para comprobar más de una condición:

const edad2 = 17

if (edad >= 18) {
  console.log('Eres mayor de edad')
} else if (edad >= 16) {
  console.log('Eres casi mayor de edad')
} else {
  console.log('Eres menor de edad')
}

//El programa comprueba la primera condición. Si es true, ejecuta el código dentro del bloque if. Si es false, comprueba la siguiente condición. Si es true, ejecuta el código dentro del bloque else if. Si es false, ejecuta el código dentro del bloque else.

//Es posible anidar los condicionales

const edad3 = 17
const tieneCarnet = true

if (edad3 >= 18) {
  if (tieneCarnet) {
    console.log('Puedes conducir')
  } else {
    console.log('No puedes conducir')
  }
} else {
  console.log('No puedes conducir')
}

//muchas veces puedes reemplazar la anidacio utilizando operadores lógicos

const edad5 = 17
const tieneCarnet5 = true

// si es mayor de edad y tiene carnet entonces...
if (edad5 >= 18 && tieneCarnet5) {
  console.log('Puedes conducir')
} else {
  console.log('No puedes conducir')
}

//Tambien podemos almancenar el resultado de una condición en una variable

const edad6 = 17
const tieneCarnet2 = true
const puedeConducir = edad >= 18 && tieneCarnet

if (puedeConducir) {
  console.log('Puedes conducir')
} else {
  console.log('No puedes conducir')
}

//Es importante que sepas que las llaves {} no siempre son obligatorios. Si el bloque de código sólo tiene una línea, puedes omitir las llaves:

const edad8 = 17

if (edad8 >= 18)
  console.log('Eres mayor de edad')
else
  console.log('Eres menor de edad')

//También lo puedes escribir en la misma línea:

const edad9 = 18

if (edad9 >= 18) console.log('Eres mayor de edad')
else console.log('Eres menor de edad')