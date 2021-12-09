'use strict'

window.addEventListener('load', () =>{
//local storage html5 web storage , informacion persistente 

//comprobar disponibilidad de local storageS
if(typeof(Storage)!=='undefined'){
    console.log("localsorage disponible");
}
else
{
    console.log("INCOMPATIBLE CON LOCAL STORAGE");
}

//guardar datos en el local storage 
localStorage.setItem("titulo","curso chingon");

//Recuperar el elemento
console.log();

//recuperar elemento
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//guardar objetos
var usuario = {
    nombre: "Bbby boo",
    email:"email@emnail.email",
    web: "vvsRolloHapones.net",
}

localStorage.setItem("userData",usuario);

localStorage.setItem("usuario",JSON.stringify(usuario));


var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);

document.querySelector("#peliculas").append(userjs.email.web);
localStorage.clear();

});