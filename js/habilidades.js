"use strict";
document.addEventListener("DOMContentLoaded", showEducacion);
const url = `./js/json/base-de-datos.json`;



async function showHabilidades(){
    let res = await fetch(url);
    if(res.ok){
    let content = await res.json();
    llenarTabla(content.habilidades);
    }else{
       return console.log("error");
    } 
   }

async function llenarTabla(data){
        let lista = document.querySelector("#ulHabilidades");
        let contenedorbtn = document.querySelector("#btn-hab-edu");
        lista.innerHTML = " ";
        for (let index = 0; index < data.length; index++) {
            lista.innerHTML += `<li class="list-group-item"> ${data[index]} </li>`;
        }
        
        contenedorbtn.innerHTML = `<button id="btn-educacion" type="button" class="btn btn-outline-primary">Ver Educacion</button>`;
        asociarEventos();
}

async function showEducacion(){
    let res = await fetch(url);
    if(res.ok){
        let content = await res.json();
        console.log(content.educacion);
        completarLista(content.educacion);
    }
}

function completarLista(data){
    let lista = document.querySelector("#ulHabilidades");
    let contenedorbtn = document.querySelector("#btn-hab-edu");
    lista.innerHTML = `<li class="list-group-item"><p> Institucion: ${data[0].institucion}</p></li>
                        <li class="list-group-item"><p> Titulo: ${data[0].titulo}</p></li>
                        <li class="list-group-item"><p> Periodo: ${data[0].periodo}</p></li>`;
    contenedorbtn.innerHTML =`<button id="btn-habilidades" type="button" class="btn btn-outline-primary">Ver Habilidades</button>`;
    asociarEventos();
}


function asociarEventos(){
let btnHabilidades = document.querySelector("#btn-habilidades");
let btnEducacion = document.querySelector("#btn-educacion");
console.log(btnEducacion);
btnHabilidades?.addEventListener('click', showHabilidades);
btnEducacion?.addEventListener('click', showEducacion);
}
