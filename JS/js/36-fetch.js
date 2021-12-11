'use strict'

//Fetch y peticiones a servicios / apis rest
var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");
var div_profesor = document.querySelector("#profesor");


// fetch('https://reqres.in/api/users')
//     .then(data => data.json())
//     .then(users => {

//         listadoUsuarios(users.data);
//         return getUser();
//         console.log(usuarios);
//     });

getUsuarios()
.then(data => data.json())
.then(users => {
    listadoUsuarios(users.data);
    return getInfo();
})
.then(data => {
    div_profesor.innerHTML = data;
    console.log(data);
    return getUser();
})
.then(data => data.json())
.then(user => {
    mostrarJanet(user.data);
})
.catch(error => {
    alert("eeror");
});

    return new Promise((resolve, reject) => {
        var profesor_string="";

        setTimeout(function(){
            profesor_string = JSON.stringify(profesor);

            if(typeof profesor_string != 'string' || profesor_string == '') 
                return reject('error1')
            else
                return resolve(profesor_string);
        }, 3000);
    });

    function getUsuarios(){
        return fetch('https://reqres.in/api/users');
    }

    function getUser(){
        return fetch("https://reqres.in/api/users/2")
    }

    function getInfo(){
        var ptofesor ={
            nombre : "vick",
            apellidos : "roberto",
            url: "yonocompitoaninguno"
        };
    }

    function listadoUsuarios(usuarios)
    {
        usuarios.map((user,i)=>{

            let nombre = document.createElement('h3');

            nombre.innerHTML = i + '.'+ user.first_name + " "+  user.last_name;

            div_usuarios.appendChild(nombre);

            document.querySelector(".loading").style.display="none";
        });
    }   

    function mostrarJanet(user,i){
        let nombre = document.createElement("h4");
        nombre.innerHTML = i + '. '+ user.first_name + " " + user.last_name
        div_janet.appendChild(nombre);
        document.querySelector("#janet .loading").style.display='none';
    }

  