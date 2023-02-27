
document.addEventListener("DOMContentLoaded", showProfeciones);
let index = 0;

 
let btnSig = document.querySelector("#btn-sig");
let btnAnt = document.querySelector("#btn-ant");
btnSig.addEventListener('click', siguiente);
btnAnt.addEventListener('click', anterior);

async function showProfeciones(){
    let res = await fetch(`./js/json/base-de-datos.json`)
    if (res.ok){
        content = await res.json();
    }else{
        console.log(error);
    }
    console.log(content)
    llenarExperiencias(content.experiencia);

}
function llenarExperiencias(data){
    console.log(data);
    let lista = document.querySelector("#ulExperiencias");
    console.log(index);
    
        lista.innerHTML = `<li>  
                                <td> <p> Empresa: ${data[index].empresa} </p> </td>
                                <td> <p> Cargo: ${data[index].cargo} </p>  </td> 
                                <td> <p> Periodo: ${data[index].periodo} </p>  </td> 
                                <td> <p> Tareas: ${data[index].tareas} </p>  </td>
                            </li>`  ;
    
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



