/*Crea un programa que a partir de un array que contiene 
las edades de 20 alumnos (generadas aleatoriamente entre 18 y 35), 
calcule y nos devuelva la media de edad de dicha clase.*/

let array = [];
let media;

for (let i = 0; i<20; i++){
    array.push(Math.floor(Math.random() * (36 - 18) + 18));
    
}
for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  ​
  media = suma / array.length;

  mensaje = `<p>La edad media de la clase es: ${media}</p>`;
console.log(array);
document.getElementById("div1").innerHTML = mensaje;