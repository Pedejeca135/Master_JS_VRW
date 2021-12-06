'use strict'

var categorias = ['accion', 'terror', 'comedia'];

var peliculas = ["la verdad duele", "la vida es bella", "gran torino"];

var cine = [categorias, peliculas];

//console.log(cine[0][1]);


peliculas.push("batman");
console.log(peliculas);


while(elemento != "ACABAR"){
    var elemento = prompt("introduce tu pelicula:");
    peliculas.push(elemento);
}

peliculas.pop(2);

console.log(peliculas);

var indice = peliculas.indexOf("gran torino");

if(indice > -1)
{
    peliculas.splice(indice,2);// el segundo numero indica cuantos elementos eliminara a partir del indice establecido 
}

console.log(peliculas);

//convertir un array en texto 

var pelisJoin = peliculas.join();

console.log(pelisJoin);


var cadena = "texto1 , texto2 , texto3";

var cadenaArray = cadena.split(",");

peliculas.sort();
console.log(peliculas);

peliculas.reverse();
console.log(peliculas);
