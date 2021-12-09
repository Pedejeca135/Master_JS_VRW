'use strict'

window.addEventListener('load', () =>{

//jSON stands for javascript object notation 

var pelicula = {
    titulo : 'Batman vs spiderman',
    year:2017,
    pais:'Estados Unidos',
}

var peliculas =[
    {titulo:"Francia", year:2016, pais:"Feancia"},
    pelicula
]

var caja_peliculas = document.querySelector("#peliculas");

for(let index in peliculas ){
    var p = document.createElement("p");
    document.createElement("input")
    p.append(peliculas[index].titulo + " - "+ peliculas[index].year);
    caja_peliculas.append(p);
}
});