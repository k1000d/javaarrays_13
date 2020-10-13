/*Crea un array vacío. Despues pidele al usuario que 
introduzca 10 valores a ese array Usar un for para mostrarlos en pantalla.*/


let array = [];

let parrafos = " ";


for (let i = 0; i<10; i++) {
    array.push(window.prompt("Introduce un valor"))
    parrafos +=` <p>${array[i]}</p>`
}


document.getElementById("div4").innerHTML= parrafos;