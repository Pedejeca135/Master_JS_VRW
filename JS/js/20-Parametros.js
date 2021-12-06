'use strict'

//parametros rEST SPREAD

function listadoFrutas(fruta1, fruta2, ...restoDeFrutas){
    console.log("Fruta 1:", fruta1);
    console.log("Fruta 1:", fruta2);
    console.log(restoDeFrutas);

}

listadoFrutas("Naranja", "manzana", "sandia", "pera", "Melon", "coco");


var frutas = ["Naranja", "manzana",];


listadoFrutas(...frutas,"sandia", "Pera" , "Melon", "coco");