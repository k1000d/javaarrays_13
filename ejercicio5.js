/*Poner los nombres de los meses en un array de 12 posiciones. 
Cuando el usuario introduce un número del 1 al 12, mostrar 
el nombre de ese mes en pantalla*/

let array = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre "]
parrafos = "";
for (let i; i<array.length; i++){
    array.push (window.prompt("Escribe un numero del 1 al 12"))
    parrafos += `<p>${i}</p>`
}
document.getElementById("div5").innerHTML= parrafos;