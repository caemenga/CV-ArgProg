"use strict";
document.addEventListener("DOMContentLoaded", showEducacion);
let i = 0;
const url = `./json/base-de-datos.json`;



async function showHabilidades(){
    let res = await fetch(url);
    if(res.ok){
    let content = await res.json();
    llenarTabla(content.habilidades);
    }else{
       document.querySelector("#ulHabilidades").innerHTML = "error al cargar los datos";
    } 
   }

async function llenarTabla(data){
        let lista = document.querySelector("#ulHabilidades");
        let contenedorbtn = document.querySelector("#btn-hab-edu");
        let titulo = document.querySelector("#tit-hab-edu");
        titulo.innerHTML = "Habilidades";
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
    let titulo = document.querySelector("#tit-hab-edu");
    if(i > data.length - 1){
        i = data.length - 1;
    }
    titulo.innerHTML = "Educacion";
    lista.innerHTML = `<li class="list-group-item"><p> Institucion: ${data[i].institucion}</p></li>
                        <li class="list-group-item"><p> Titulo: ${data[i].titulo}</p></li>
                        <li class="list-group-item"><p> Periodo: ${data[i].periodo}</p></li>`;
    contenedorbtn.innerHTML =`<button id="btn-habilidades" type="button" class="btn btn-outline-primary">Ver Habilidades</button>
                              <div class="btn-hab-eu">
                              <button id="ant-edu" type="button" class="btn btn-outline-dark btnedu">⇐</button>
                              <button id="sig-edu" type="button" class="btn btn-outline-dark btnedu">⇒</button>
                              </div>`;
    asociarEventos();
}


function asociarEventos(){
let btnHabilidades = document.querySelector("#btn-habilidades");
let btnEducacion = document.querySelector("#btn-educacion");
let siguiente = document.querySelector("#sig-edu");
let anterior = document.querySelector("#ant-edu");
btnHabilidades?.addEventListener('click', showHabilidades);
btnEducacion?.addEventListener('click', showEducacion);
anterior?.addEventListener('click', anteriorEdu);
siguiente?.addEventListener('click', siguienteEdu);
}

function siguienteEdu(){
    i++;
    showEducacion();
}
function anteriorEdu(){
    i--;
    if(i >= 0){
        showEducacion();
    }else{
        i = 0;
        showEducacion();
    }
}
