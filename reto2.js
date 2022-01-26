/*
Reto 2
Adapta la función anterior el resultado de la
promesa sea aleatorio. Un 50% de las veces
resolverá correctamente con el valor 42 y el otro
50% será rechazada con el mensaje “Try again”.
Haz varias pruebas trabajando con el segundo
parámetro del then, así como con el catch y el
finally.
*/

function promesaTimeOut(timeout) {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      setTimeout(() => resolve("42"), timeout);
    } else {
      setTimeout(() => reject("Try again"), timeout);
    }
  });
}
promesaTimeOut(3000)
  .then((result) => {
    console.log("Process the result"+ result);
  })
  .catch((error) => {
    console.log("Handle the error"+error);
  })
  .finally(() => {
    console.log("Clean up the resources");
  });
