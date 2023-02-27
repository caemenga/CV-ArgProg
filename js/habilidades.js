"use strict";
document.addEventListener("DOMContentLoaded", showHabilidades);
const url = `./js/json/base-de-datos.json`;

async function showHabilidades(){
    let res = await fetch(url);
    if(res.ok){
    let content = await res.json();
    console.log(content.habilidades);
    llenarTabla(content.habilidades);
    }else{
       return console.log("error");
    } 
   }

async function llenarTabla(data){
        let lista = document.querySelector("#ulHabilidades");
        for (let index = 0; index < data.length; index++) {
            console.log(data.length)
            lista.innerHTML += `<li> ${data[index]} </li>`;
        }
        
}

