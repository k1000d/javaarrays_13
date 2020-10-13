/*Crear un array. Usar un for para asignar los valores de 20 a
 11 a las 10 primeras posiciones (en orden descendente). 
 Usar un for para mostrar los 10 valores en pantalla.*/

 let array = [];
 let parrafos = "";

for (let i = 20; i > 10; i--){
 //parrafo += `<p>${array [i]}</p>` 
array.push (i);

for (let j = 0; 0 < array.length; j++){
parrafos += `<p>${array[j]}</p>`
}
}
document.getElementById("div3").innerHTML= parrafos 