//Los operadores de comparación nos permiten dado una condición si se cumple (true) o no (false) la operación que estamos realizando:

//Mayor que || Igual que
5 > 3 // true
5 < 3 // false

//Mayor igual que || menor igual que
5 >= 3 // true
5 >= 5 // true
5 <= 3 // false
5 <= 5 // true

//Para terminos prácticos lo único diferente a otros lenguaje es la igualdad y la diferencia entre dos variables:

const resultado1 = 2 === 3
const resultado2 = 2 !== 3

//Esto nos es muy útil, ya que, también podemos utilizarlos con otros tipos de datos

'JavaScript' === 'JavaScript' // true
'JavaScript' === 'Java' // false
"JavaScript" !== 'PHP' // true
`Estoy Aprendiendo JavaScript` === 'Estoy Aprendiendo JavaScript' // true

//Tambien podemos usar el operador > con candenas de texto en donde se comparan según el valor de su código Unicode

'A' > 'B' // false, A = 65, B = 66 
'Omega' > 'Beta' // true
'alfa' > 'Alfa' // true

//También podemos comparar booleanos 

true === true // true
true === false // false
false !== false // false

//Al comparar valores booleanos con > y <, debes tener en cuenta que true es mayor que false

true > false // true
false < true // true
true > true // false
false < false // false

//JavaScript permite la comparación de valores con diferentes tipos de datos pero no suele ser recomendable

