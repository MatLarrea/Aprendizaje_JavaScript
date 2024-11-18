//Un bucle es una estructura de control que permite repetir un bloque de instrucciones mienstra la condición sea verdadera

//Una de estas estructuras es el bucle while

while (condición) {
    // código a ejecutar mientras se cumpla la condición
}

//Podemos controlar cuando queremos salir de un bucle utilizando la palabra reservada break

let cuentaAtras = 10

while (cuentaAtras > 0) {
  console.log(cuentaAtras)
  cuentaAtras = cuentaAtras - 1

  // si la cuenta atrás es 5, salimos del bucle
  if (cuentaAtras === 5) {
    break // <---- salimos del bucle
  }
}

//Podemos saltarnos una iteración de nuestro bucle utilizando la palabra reservada continue

while (cuentaAtras > 0) {
  cuentaAtras = cuentaAtras - 1

  // si la cuenta atrás es un número par...
  if (cuentaAtras % 2 === 0) {
    continue // <---- saltamos a la siguiente iteración
  }

  console.log(cuentaAtras)
}

//Podemos anidar bucles
const NUMERO_REVISIONES = 3

// mientras la cuenta atrás sea mayor que 0
while (cuentaAtras > 0) {
  // mostramos el valor de la cuenta atrás
  console.log(cuentaAtras)

  // creamos una variable para contar las revisiones realizadas
  // y la inicializamos a cero
  let revisionesRealizadas = 0

  // hasta que no hayamos realizado las 3 revisiones...
  while (revisionesRealizadas < NUMERO_REVISIONES) {
    // y sumamos 1 a las revisiones realizadas
    revisionesRealizadas = revisionesRealizadas + 1
    console.log(revisionesRealizadas + ' revisiones realizadas...')
  }

  // ahora podemos restar 1 a la cuenta atrás
  cuentaAtras = cuentaAtras - 1
}

//Las variables creadas con let y const que se crean dentro de un bucle, solo existen dentro de ese bucle. Cuando el bucle termina, la variable desaparece. De hecho si intentas acceder a ella fuera del bucle, te dará un error.


//Bucles do while
do {
    // código que se ejecuta al menos una vez
} while (condición);

//Función integrada de JavaScript confirm, esta función muestra un diálogo con dos botones aceptar (devuelve true) y cancelar (devuelve false)

confirm("¿Te gusta JavaScript?");

//Como nos devuelve un valor lo podemos almacenar

let respuesta = confirm("¿Te gusta JavaScript?")
console.log(respuesta) // -> true o false

//Usando do while, podemos hacer un programa que saldrá del bucle cuando el usuario pulse Cancelar en el cuadro de diálogo

let respuesta1

do {
  respuesta1 = confirm("¿Te gusta JavaScript?");
} while (respuesta)