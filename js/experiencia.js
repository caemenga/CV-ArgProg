
document.addEventListener("DOMContentLoaded", showProfeciones);
let index = 0;
let btnSig = document.querySelector("#btn-sig");
let btnAnt = document.querySelector("#btn-ant");
btnSig.addEventListener('click', siguiente);
btnAnt.addEventListener('click', anterior);

async function showProfeciones(){
    let res = await fetch(url)
    if (res.ok){
        content = await res.json();
    }else{
        console.log(error);
    }
    llenarExperiencias(content.experiencia);

}
function llenarExperiencias(data){
    let lista = document.querySelector("#ulExperiencias");
    if(index > data.length-1){
        index = data.length-1;
    }
        lista.innerHTML =   `<li class="list-group-item"><p> Empresa: ${data[index].empresa} </p></li>
                            <li class="list-group-item"><td> <p> Cargo: ${data[index].cargo} </p></li> 
                            <li class="list-group-item"><td> <p> Periodo: ${data[index].periodo} </p></li> 
                            <li class="list-group-item"><td> <p> Tareas: ${data[index].tareas} </p>  </li>`;
    
}

function siguiente(){
    index++;
    showProfeciones();
}
function anterior(){
    index--;
    if(index >= 0 ){
        showProfeciones();
    }else{
        index = 0;
        showProfeciones();
    }
}



