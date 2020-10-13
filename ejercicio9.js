/*Crear un array de 10 valores. Pon el valor 1 
en cada una de las posiciones. Pedir al usuario que 
introduzca un número entre 0 y 9. Cada vez que introduzca 
un valor entre 0 y 9, mostrar el valor de esa posición del array, 
y modificarlo multiplicando por 2.*/



let mensaje = "";

let array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,]

let num = parseInt(window.prompt("Introduce un número entre 0 y 9"));

if (num < 9) {
    document.getElementById
    ("div9").innerHTML = `<p>El valor es: ${array[num]}</p>`;
    
      array[num] = array[num] * 2;
  
}else {
    document.getElementById(
      "div9"
    ).innerHTML = `<p>El número está fuera del rango</p>`;
  }

//solución del ejercicio
while (num >= 0 && num <= 9);
//recorremos el array
for (let i = 0; i < array.length; i++) {
  //a mensaje le sumamos un parrafo con el indice i del array y el valor del indice i del array por cada vuelta
  mensaje += `<p>${i} --- ${array[i]}</p>`;
}
//sacamos en pantalla la variable mensaje con todos sus parrafos
document.getElementById("div1").innerHTML = mensaje;


