"use strict";
document.addEventListener("DOMContentLoaded", showInfo);
/**
 * Muestra informacion personal en el index
 */
async function showInfo(){
let res = await fetch('https://randomuser.me/api/?nat=mx&seed=81');
    if(res.ok){
        let content = await res.json();
        console.log(content);
        completarInfoPersonal(content.results);
        completarHeader(content.results);
    }else{
        console.log(error);
    }
}
//Completa la tabla
function completarInfoPersonal(data){
    let lista = document.querySelector("#ulInfoPersonal");
    let titulo = document.querySelector("#titulo");
    let imagen = document.querySelector("#imagen");
    lista.innerHTML = `<li><p> Nombre: ${data[0].name.first}</p></li>
                       <li><p> Apellido: ${data[0].name.last}</p></li>
                       <li><p> Ciudad: ${data[0].location.city}, ${data[0].location.state}, ${data[0].location.country}</p></li>
                       <li><p> Direccion: ${data[0].location.street.name} ${data[0].location.street.number}</p></li>
                       <li><p> Email: ${data[0].email}</p></li>
                       <li><p> Telefono Fijo : ${data[0].phone}</p></li>
                       <li><p> Celular: ${data[0].cell}</p></li> `;
    titulo.innerHTML = data[0].name.first + " " + data[0].name.last;
    imagen.src = data[0].picture.medium;
}

function completarHeader(data){
    let titulo = document.querySelector("#titulo");
    let imagen = document.querySelector("#imagen");
    titulo.innerHTML = data[0].name.first + " " + data[0].name.last;
    imagen.src = data[0].picture.medium;
}