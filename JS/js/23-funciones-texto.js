'use strict'

//transformacion de textos 
var numero = 444;
var texto1= "bienvenido al curso, curso";
var texto2 = "es un curso completo";

var dato = numero.toString();
dato = texto1.toUpperCase(); 
console.log(dato.toUpperCase());

//error : console.log(numero.toUpperCase());

//calcular longitus 

var nombre = "";
console.log(nombre.length);

//concatenar : unir textos

var textoTotal = texto1 + " " + texto2;
console.log(textoTotal);

var textoTotal = texto1.concat( textoTotal+" "+texto2 );
console.log(textoTotal);


//busqueda:
var busqueda = texto1.indexOf("curso");
console.log(busqueda);

var busqueda = texto1.search("curso");
console.log(busqueda);

var busqueda = texto1.match("curso");
console.log(busqueda);

var busqueda = texto1.match(/curso/gi);
console.log(busqueda);

var busqueda = texto1.match(/curso/g);
console.log(busqueda);

var busqueda = texto1.substr(14,5);
console.log(busqueda);

var busqueda = texto1.charAt(24);
console.log(busqueda);

var busqueda = texto1.startsWith("Bie");
console.log(busqueda);

var busqueda = texto1.startsWith("*ie");
console.log(busqueda);

var busqueda = texto1.replace("bie", "BIE");
console.log(busqueda);

var busqueda = texto1.slice(4);
console.log(busqueda);

var busqueda = texto1.slice(4,12);
console.log(busqueda);

var busqueda = texto1.split(" ");
console.log(busqueda);

var busqueda = texto1.trim();
console.log(busqueda);