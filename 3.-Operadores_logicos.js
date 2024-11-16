//Operador AND &&, este operador devuelve true cuando ambos valores que conecta son true

true && true // → true
true && false // → false
false && false // → false

//Operador lógico OR ||, nos devuelve true cuando cualquiera de los valores que conecta es true

true || true // → true
true || false // → true
false || false // → false

//Operador lógico NOT !, invierte el valor de un valor booleano

!true // → false
!false // → true

//Combinando operadores lógicos, aritméticos y de comparación

2 < 3 && 3 < 4 // → true

//También podemos usar paréntesis para agrupar operaciones y usar operadores lógicos y ariméticos

(2 + 2) < 3 && (10 < (8 * 2)) // → false

//Ojo, las operaciones aritméticas tienen precedencia sobre las operaciones de comparación

2 + 2 < 3 && 10 < 8 * 2
// Primero se hacen las operaciones aritméticas:
// → 4 < 3 && 10 < 16
// Ahora las comparaciones:
// → false && true
// Finalmente:
// → false

//Dos o más operandos

true && true && true // → true

//También puedes mezclar operadores lógicos

true && true || false // → true
!true && !true // → false
false && true || !true // → false