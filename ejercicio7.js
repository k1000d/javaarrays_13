/*  Haz un programa que realice la media de los valores que 
contiene un array de 10 números y lo muestre por consola. 
No es necesario pedir los números al usuario. 
*/

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let total = 0;
let media;

for (let i = 0; i <array.length; i++) {
    total += array [i];
   // console.log (total);
    

}
media = total / array.length;

//document.getElementById ("div7")
//console.log (total/ array.length);
document.getElementById("div7").innerHTML = media;