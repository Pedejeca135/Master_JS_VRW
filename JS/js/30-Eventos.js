'use strict'

//Eventos del raton

var boton = document.querySelector("#boton");



function cambiarColor(){
    var bg = boton.style.backgroundColor;
    if(bg == "green"){
        boton.style.backgroundColor = "red";
    }
    else
    {
        boton.style.backgroundColor = "green";
    }
}

//evento click
boton.addEventListener('click', function(){
    cambiarColor();
});

//mouse over
boton.addEventListener('mouseover',()=>{
    boton.style.backgroundColor = "#ccc";
    boton.style.color ="blue";
});

//mouse out
boton.addEventListener('mouseout',()=>{
    boton.style.backgroundColor = "black";
    boton.style.color ="blue";
});

//focus
var input = document.querySelector("#campo_nombre");
input.addEventListener('focus',function(){
    console.log("estas dentro del input");
});

//blur
input.addEventListener('blur',function(){
    console.log("estas fuera del input");
});

//keydown
input.addEventListener('keydown',function(e){
    console.log("Pulsando esta tecla", String.fromCharCode(e.keyCode), "pura vida carnal");
})

//keypress
input.addEventListener('keypress',function(e){
    console.log("PPP", String.fromCharCode(e.keyCode), "pura vida carnal");
})


//keyup
input.addEventListener('keyup',function(e){
    console.log("@@@@@@@@@@@@@@@@@@@@@@", String.fromCharCode(e.keyCode), "pura vida carnal");
})