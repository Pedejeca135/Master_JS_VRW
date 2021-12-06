'use strict'
function muestraArray(elementos){
    elementos.forEach((elemento,indice) =>{
        document.write("<strong>" + elemento + "</strong> </br>");
    });
}

function mostrarArray(elementos, textCustom = ""){
    document.write("<h1>contenido " + textCustom + " del array</h1>");

    document.write("<ul>");
    elementos.forEach((elemento,indice) =>{
        document.write("<li><strong>" + elemento + "</li></strong> </br>");
    });
    document.write("</ul>");
}


/*
Hacer prgrama que
1 - pide 6 numeros en pantalla y los meta en un array
2 - Mostrar todos los elementos del array 
3 - Sacar el array ordenado y mostrarlo
4 - invertir el orden del array y mostrarlo 
5 - mostrar cuantos elementos tiene el array
6 - Busqueda de un valor introducido por el ususario,que nos diga si lo encuentra y su indice 
*/
var numeros = new Array(6);

for(let i = 0; i < 6 ; i++){
    numeros[i] = parseInt(prompt("introduce el " + i + " numero :",0));
}

//mostrar en el cuerpo de la pagina 
// document.write("<h1>contenido del array</h1>");

// numeros.forEach((numero, indice) => {
//     document.write("<strong>" + numero + "</strong> </br>");
// } );

// document.write("<h1>contenido Ordenado del array</h1>");
// numeros.sort();

mostrarArray(numeros);

numeros.sort();
mostrarArray(numeros, "ordenado por unicode");


numeros.sort((a, b) => {return a - b });
mostrarArray(numeros, "ordenado numericamente");

numeros.reverse();
mostrarArray(numeros,"revertidos");

document.write("<h1> El array tiene : " + numeros.length + " elementos</h1>");

var busqueda = parseInt(prompt("numero a buscar",0));
 
var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion > -1)
{
    document.write("<h1>Encontrado</h1>");
    document.write("<h2>Posicion de la busqueda: " + posicion + " </h2>");
}
else
{
    document.write("<h1>No se encontro " + busqueda + "</h1>");
}

console.log(numeros);
