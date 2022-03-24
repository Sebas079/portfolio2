

let form = document.querySelector("form");

function validarDatos(e){
    e.preventDefault();

    if(form.nombre.value == ""){
        alert("Campo nombre obligatorio");
        form.nombre.focus()
    }
    if(form.email.value == ""){
        alert("Campo email obligatorio");
        form.email.focus();
    }
    if(form.asunto.value == ""){
        alert("Campo asunto obligatorio");
        form.asunto.focus();
    }
    if( form.asunto.length < 50){
        alert("maximo 50 caracteres")
        form.asunto.focus();
    }
}
form.addEventListener("submit", validarDatos);