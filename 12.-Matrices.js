//Una matriz es una colección de elementos dispuestos en filas y columnas

//Creación de una matriz en JavaScript
const matriz = [
         //0  1  2
          [1, 2, 3], // 0
          [4, 5, 6]  // 1
]

//Para acceder a los elementos de una matriz, necesitaremos utilizar dos índices: uno para la fila y otro para la columna
let numero = matriz[1][2] //-> 6

//Iteración sobre matrices
for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        console.log(matriz[i][j])
    }
}

//Puedes iterar una matriz con otros bucles, pero si deseas utilizar forEach(), tendrás que anidar dos llamadas a forEach() para iterar sobre todos los elementos de la matriz
matriz.forEach((fila, filaIndex) => {
    fila.forEach((elemento, columndaIndex) => {
        console.log('Fila: ' + filaIndex)
        console.log('Columna: ' + columndaIndex)
        console.log('Elemento: ' + elemento)
        console.log('')
    })
})

