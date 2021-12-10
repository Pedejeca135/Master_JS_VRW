'use strict'
window.addEventListener('load',()=>
{
    var formulario = document.querySelector("#formpeliculas");

    formulario.addEventListener('submit',()=>{
        console.log("entra");
        var titulo = document.querySelector('#addpelicula').value;
        localStorage.setItem(titulo, titulo);
   
    });

    var ul = document.querySelector("#peliculas-list");

    for(var i in localStorage){
        console.log(localStorage[i]);
        if(typeof localStorage[i] == 'string'){
            var li = document.createElement("li");
            li.append(localStorage[i]);
            ul.append(li);
            }
        }

    var formularioBo = document.querySelector("#formborrarpeliculas");

    formularioBo.addEventListener('submit',function(){
        var titulo = document.querySelector("#borrarpelicula").value;
        
        if(titulo.length >=1)
        {
            localStorage.removeItem(titulo);
        }
    });
       
});

