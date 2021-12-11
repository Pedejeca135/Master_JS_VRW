'use strict'

var fecha = new Date();
var year = fecha.getFullYear();
var mes = fecha.getMonth();
var day = fecha.getDay();
var hora =fecha.getHours();


var year = fecha.getFullYear();

var textoHora = `El año es: ${year}
El mes es: ${mes}
El dia es: ${day}`;


console.log(fecha);
var header = document.querySelector('h1');
header.append(textoHora);

