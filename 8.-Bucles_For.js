//La estructura de control for en JavaScript es muy útil para ejecutar una serie de instrucciones un número determinado de veces. A diferencia de while que usa una condición para determinar si se ejecuta o no el bloque de código, for usa un contador que se incrementa en cada iteración hasta que se cumple una condición.

for (inicialización; condición; actualización) {
    // código a ejecutar
}

for (let number = 1; number <= 10; number++) {
    console.log(number)
}

//Aunque siempre los ejemplos con for son los mismos, ten en cuenta que puedes hacer cualquier cosa en la inicialización, condición y actualización. Podrías, por ejemplo, usar dos variables a la vez.

for (let i = 0, j = 5; i < 5; i++, j--) {
    console.log(i, j);
}