/*
Reto 1
Define una función que reciba un timeout en
milisegundos por parámetro, y devuelva una
promesa que se resuelva sin valor al cabo de
dicho tiempo.
*/

function promesaTimeOut(timeout){
    return new Promise((resolve, reject ) => {
        setTimeout(()=> resolve('Hola mundo'),timeout);
    })
};

//promesaTimeOut(1000).then(valor => console.log("AAAA" + valor))