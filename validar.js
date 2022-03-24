 



function validarDatos(e){
    e.preventDefault();
    

    if(document.form.nombre.value == ""){
        alert("Campo nombre obligatorio")
        document.form.nombre.focus();
    }
}

document.querySelector("form").addEventListener("submit",validarDatos())