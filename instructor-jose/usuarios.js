const registrarUsuario=()=>{
    var correo=document.querySelector("#correo").value;
    var password=document.querySelector("#password").valie;
    var nombre=document.querySelector("#nombre").value;
    if (correo.trim()=== '' ||
    password.trim()==='' ||
    nombre.trim()==='' ){
        swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'fatal llenar campo',
            footer: 'crus contactos'
        })
        
    }
}