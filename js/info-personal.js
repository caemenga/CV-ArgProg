"use strict";
document.addEventListener("DOMContentLoaded", showInfo);

async function showInfo(){
    let res = await fetch('https://randomuser.me/api/');
    if(res.ok){
        let content = await res.json();
        console.log(content.results);
        llenarInfoPersonal(content.results);
    }else{
        console.log(error);
    }
}

function llenarInfoPersonal(data){
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