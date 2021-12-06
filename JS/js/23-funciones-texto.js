'use strict'

//transformacion de textos 
var numero = 444;
var texto1= "bienvenido al curso";
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
