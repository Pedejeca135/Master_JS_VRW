'use strict'

var pelicula = function(nombre){
    return "la pelicula es :" + nombre;
}

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos)
{
    var sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

//console.log(sumame(4,5));


sumame(5,7,function(dato){
    console.log("La suma es:",dato);
}, 
function(dato){
    console.log("La suma por dos es", (dato*2));
});

sumame(9,12,(dato) =>{
    console.log("La suma es:",dato);
}, 
dato =>{
    console.log("La suma por dos es", (dato*2));
});