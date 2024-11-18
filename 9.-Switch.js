//La sentencia switch es una estructura de control que nos permite ejecutar diferentes bloques de código dependiendo del valor de una expresión

switch (expresión) {
    case valor1:
      // código a ejecutar si la expresión coincide con valor1
      break
  
    case valor2:
      // código a ejecutar si la expresión coincide con valor2
      break
    default:
      // código a ejecutar si la expresión no coincide con ningún valor
      break
  }
  
  const dia = "lunes"
  
switch (dia) {
    case "lunes":
      console.log("¡Hoy es lunes! 😢")

      //utilizamos break en cada bloque para evitar que se sigan ejecutando los demás
      break
  
    //el default se ejecuta si no se cumplen ninguno de los case
    default:
      console.log("No es lunes, YAY! 🚀")
      break
}

//JavaScript tiene un objeto llamado date, este tiene un método llamado getDay() que nos devuelve el dia de la semana en el que estamos donde 0 es el domingo y 6 el sábado

//Un objeto en JavaScript no es muy diferente a un objeto en la vida real. Tiene propiedades y funciones que podemos usar. En este caso, getDay() es una función que nos devuelve el día de la semana.

const day = new Date().getDay()

// segun el dia de la semana, mostramos un mensaje diferente
switch (day) {
  case 0:
    console.log("¡Hoy es domingo! 😴")
    break
  case 1:
    console.log("¡Nooo, es lunes! 😢")
    break
  case 2:
    console.log("¡Hoy es martes! 🥵")
    break
  case 3:
    console.log("¡Hoy es miércoles! 🤓")
    break
  default:
    console.log("Se acerca el fin de! 🚀")
    break
}

//Podemos ejecutar el mísmo código en varios casos
const dayy = new Date().getDay()

switch (dayy) {
  case 0:
  case 6:
    console.log("¡Hoy es fin de semana! 🥳")
    break
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("¡Nooo, a trabajar! 😢")
    break
  case 5:
    console.log("¡Hoy es viernes! 🤓")
    break
}

//Existe un patrón que se usa a veces con switch que es switch(true). Esto es, en lugar de evaluar una expresión, evalúa una condición ignorando por completo el valor de la expresión.

let edad = 25;

switch(true) {
  case (edad >= 18 && edad < 25):
    console.log("Eres mayor de edad y eres joven");
    break;
  case (edad >= 25 && edad < 40):
    console.log("Eres mayor de edad y estás en plena madurez");
    break;
  case (edad >= 40):
    console.log("Eres mayor de edad y estás en la mejor edad");
    break;
  default:
    console.log("Eres menor de edad");
}