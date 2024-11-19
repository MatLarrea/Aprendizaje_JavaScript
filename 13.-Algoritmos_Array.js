//Encontrar el número mayor
function findMaxAlgorithm(array) {
    let max = array[0] // recuperamos el primer elemento del array
  
    // recorremos el array desde el segundo elemento
    for (let i = 1; i < array.length; i++) {
      // ¿es el elemento actual mayor que el máximo?
      if (array[i] > max) {
        // si es así, lo guardamos como nuevo máximo
        max = array[i]
      }
    }
  
    // devolvemos el máximo número que hemos encontrado
    return max;
  }

//Utilizand Math.max(...array) es lo mismo y más simple

//Complejidad algorítmica
//En programación se usa la notación O(n) para indicar que el número de operaciones que se realizan es igual al número de elementos del array. En este caso, n es el número de elementos del array.

//Búsqueda binaria, es una manera más eficiente de buscar un elemento dentro de un array ordenado de menor a mayor, en donde el número de operaciones que se deben realizar para la búsqueda es igual al algoritmo del número de elementos del array

//Ejemplo: si tenemos un array de 100 elementos, el número de operaciones que se realizarán sera igual a 6, esto hace que nuestra búsqueda sea mucho más rapida

//Implementación
function busquedaBinaria(array, elemento) {
    let index = 0 // primer elemento del array
    let final = array.length - 1 // último elemento del array a buscar
    
    // mientras el índice sea menor o igual que el final
    // seguiremos buscando
    while (index <= final) {
      // calculamos la mitad del array
      // como puede ser impar, usamos Math.floor para redondear hacia abajo
      const mitad = Math.floor((index + final) / 2)
      
      // si el elemento de la mitad es igual al elemento que estamos buscando
      // entonces hemos encontrado el elemento
      if (array[mitad] === elemento) {
        return mitad
      } else if (array[mitad] < elemento) {
        // si el elemento de la mitad es menor que
        // el elemento que estamos buscando
        // entonces tenemos que buscar en la mitad derecha
        index = mitad + 1
      } else {
        // si el elemento de la mitad es mayor que
        // el elemento que estamos buscando
        // entonces tenemos que buscar en la mitad izquierda
        final = mitad - 1
      }
    }
    
    // si llegamos hasta aquí, es que no hemos encontrado el elemento
    // devolvemos -1, para indicar que no se ha encontrado
    return -1
  }

  //Podríamos usar el método array.indexOf(elemento) en su lugar