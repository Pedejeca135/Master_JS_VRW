'use strict'

//DOM: Document Object Model

function cambiaColor(color){
    caja.style.color = color;
}

//conseguir elementos con un ID concreto
var caja = document.getElementById("micaja");
var caje = document.querySelector("#micaja")

caja.style.backgroundColor = "red";
caja.style.padding = "20px";
caja.style.color = "#ccc";
caja.className = "hola";
console.log(caje);

//conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');
console.log(todosLosDivs);

for(let i = 0; i< todosLosDivs.length; i++){
    var parrafo = document.createElement('b');
    var texto = document.createTextNode("PERRRO");
    parrafo.appendChild(texto);
    document.querySelector("#miseccion").appendChild(parrafo);
}

var valor;

for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == "string")
    var parrafo = document.createElement('p');
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.appendChild(texto);
    document.querySelector("#miseccion").appendChild(parrafo);
}

var todosLosDivs = document.querySelectorAll('div');
console.log(todosLosDivs);

todosLosDivs.forEach((valor,indice)=>{
    var parrafo = document.createElement('p');
    var texto = document.createTextNode(valor);
    parrafo.appendChild(texto);
    document.querySelector("#miseccion").appendChild(parrafo);
});

todosLosDivs[2].innerHTML = "otro texto para el segundo elemento";
console.log(todosLosDivs);


//conseguir elmentos por su clase CSS
var divsRojos = document.getElementsByClassName('rojo');

for(let div in divsRojos)
{
    divsRojos[div].style.backgroundColor = "red";
}
