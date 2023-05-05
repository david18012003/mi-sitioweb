const n = document.querySelector("#datoNombre");
const a = document.querySelector("#datoApellido");
const f = document.querySelector("#datoFecha");
const c = document.querySelector("#datoCorreo")
const t = document.querySelector("#datoTelefono")


function almacenarData(){
    let nom, ape, fecha, correo, telefono
    // capturar la data de html
    nom = document.getElementById("nombre").value
    ape = document.getElementById("apellido").value
    fecha = document.getElementById("fnacimiento").value
    correo = document.getElementById("correo").value
    telefono = document.getElementById("telefono").value
    // alamacenamiento en la data con localstorage
    localStorage.setItem("Nombre", nom)
    localStorage.setItem("Apellido",ape)
    localStorage.setItem("Fecha",fecha)
    localStorage.setItem("Correo",correo)
    localStorage.setItem("Telefono",telefono)
    // limpiando los campos o inputs
    document.getElementById("nombre").value = " ";
    document.getElementById("apellido").value = " ";
    document.getElementById("fnacimiento").value = " ";
    document.getElementById("correo").value = " ";
    document.getElementById("telefono").value = " ";
}

function cargarData(){
    let nombre,apellido,fnacimiento,email,numero
    nombre = localStorage.getItem("Nombre");
    apellido = localStorage.getItem("Apellido");
    fnacimiento = localStorage.getItem("Fecha");
    email = localStorage.getItem("Correo");
    numero = localStorage.getItem("Telefono");
    // mostrar datos almacenados
    n.innerHTML = nombre;
    a.innerHTML = apellido;
    f.innerHTML = fnacimiento;
    c.innerHTML = email;
    t.innerHTML = numero;

}