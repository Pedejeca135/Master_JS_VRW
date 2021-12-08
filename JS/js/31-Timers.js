'use strict'

window.addEventListener('load',()=>{
    //Timers

    function startIntervalo(){
         //setInterval se ejecuta una y otra vez cada cierto tiempo
        var tiempo = setInterval(function(){
        console.log("setInterval ejecutando");

        var encabezado = document.querySelector("h1");

        console.log(encabezado);

        if(encabezado.style.fontSize == "50px"){
            encabezado.style.fontSize = "20px";
        }
        else{
            encabezado.style.fontSize = "50px";
        }
    }, 1000);

        return tiempo;
    }

   

    //solo se ejecutara una vez 
    var tiempoo = setTimeout(function(){
        console.log("setInterval ejecutando");

        var encabezado = document.querySelector("h1");

        encabezado.style.backgroundColor = "violet";
    }, 3000);

    var tiempo = startIntervalo();

    var stop = document.querySelector("#stop");

    stop.addEventListener("click", function(){
        alert("haz parado el intervalo en bucle");
        clearInterval(tiempo);//detiene el intervalo que se esta ejecutando 
    });

   

    var start = document.querySelector("#start");

    start.addEventListener("click",()=>
    {
        alert("haz iniciado el intervalo");
        startIntervalo(tiempo);
    });


});