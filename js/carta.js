"use strict";
let btnCarta = document.querySelector("#btn-carta");
btnCarta.addEventListener('click', mostrarCarta);



async function mostrarCarta(){
    let res = await fetch(`${window.location.origin}/carta-presentacion.html`);
    if(res.ok){
        let content = await res.text();
        let contenedor = document.querySelector("#contenedor-main");
        contenedor.innerHTML = content;
        btnCarta.style.display = "none";
    }else{
        console.log("no trajo el fetch");
    }
}

