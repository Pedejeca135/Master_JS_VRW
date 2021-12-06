'use strict'

var nombre = "joe doe";

var nombres = ["pedro", "pablo", "raul"];

console.log(nombres)
console.log(...nombres);

var lenguajes = ["PHP", "js", "Go"];

console.log(nombres[1]);

// var elemento = parseInt(prompt("que elemto del array quieres??",0));
// if(elemento >= nombres.length){
//     alert("introduce un numero valido menos que " + nombres.length);
// }
// else{
//     alert(nombres[elemento]);
// }

document.write("<h1>Lenguajes de programacion del 2021</h1>");
document.write("<ul>");

// for(var i = 0; i< lenguajes.length; i++)
// {
//     document.write("<li>"+lenguajes[i]+"</li>")
// }
lenguajes.forEach((elemento, index, data)=>{
    document.write("<li>"+index+" - "+ elemento +"</li>");
});

document.write("</ul>");


document.write("<h1>Lenguajes de programacion del 2021</h1>");
document.write("<ul>");

// for(var i = 0; i< lenguajes.length; i++)
// {
//     document.write("<li>"+lenguajes[i]+"</li>")
// }
lenguajes.forEach((elemento)=>{
    document.write("<li>"+elemento +"</li>");
});

document.write("</ul>");
