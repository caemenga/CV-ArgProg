
let btnEducacion = document.querySelector("#btn-educacion");
btnEducacion.addEventListener('click', showEducacion);



async function showEducacion(){
    let res = await fetch("./js/json/base-de-datos.json");
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
    sociarEventos();
}


function sociarEventos(){
let btnHabilidades = document.querySelector("#btn-habilidades");
btnHabilidades.addEventListener('click', showHabilidades);
}