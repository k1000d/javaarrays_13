/*Crear un array. Usar un for para pedir 3
 valores al usuario y guardarlos en el mismo. 
Comparar los 3 valores del array y mostrar en pantalla el más pequeño.*/

let div6 = document.getElementById("div6")
let array = []

for (let i =0; i<3; i++){
    array.push(window.prompt("Escribe un valor"))


}

if (array[0] < array[1] && array[0] < array[2]) {
    div6.innerHTML = `<p>${array[0]}</p>`;
  } else if (array[1] < array[0] && array[1] < array[2]) {
    div6.innerHTML = `<p>${array[1]}</p>`;
  } else {
    div6.innerHTML = `<p>${array[2]}</p>`;
  }

  document.getElementById("div6");