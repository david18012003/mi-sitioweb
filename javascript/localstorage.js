const n = document.querySelector("#datoNombre");
const a = document.querySelector("#datoApellido");
const f = document.querySelector("#datoFecha");
const c = document.querySelector("#datoCorreo")
const t = document.querySelector("#datoTelefono")
const dg = document.querySelector("#datoProducto")
const ar = document.querySelector("#datoArquitectura")
const se1 = document.querySelector("#datoServidorP")
const ha = document.querySelector("#datoHardwareP")
const so = document.querySelector("#datoSoftwareP")
const re = document.querySelector("#datoRecomendacionesP")
const sc = document.querySelector("#datoServidorC")
const hc = document.querySelector("#datoHardwareC")
const soc = document.querySelector("#datoSoftwareC")
const rec = document.querySelector("#datoRecomendacionesC")
const rqg = document.querySelector("#datoRequerimientosG")
const rqa = document.querySelector("#datoRequerimientosA")
const cli = document.querySelector("#datoCliente")



function almacenarData(){
    let nom, ape, fecha, correo, telefono, pro, arq, serp, hardp, softp, recp, serc, hardc, softc, recc, reqg, reqa, cli
    // capturar la data de html
    nom = document.getElementById("nombre").value
    ape = document.getElementById("apellido").value
    fecha = document.getElementById("fnacimiento").value
    correo = document.getElementById("correo").value
    telefono = document.getElementById("telefono").value
    pro = document.getElementById("producto").value
    arq = document.getElementById("arquitectura").value
    serp = document.getElementById("servidorP").value
    hardp = document.getElementById("hardwareP").value
    softp = document.getElementById("softwareP").value
    recp = document.getElementById("recomendacionesP").value
    serc = document.getElementById("servidorC").value
    hardc = document.getElementById("hardwareC").value
    softc = document.getElementById("softwareC").value
    recc = document.getElementById("recomendacionesC").value
    reqg = document.getElementById("requerimientosG").value
    reqa = document.getElementById("requerimientosA").value
    cli = document.getElementById("cliente").value
    // alamacenamiento en la data con localstorage
    localStorage.setItem("Nombre", nom)
    localStorage.setItem("Apellido",ape)
    localStorage.setItem("Fecha",fecha)
    localStorage.setItem("Correo",correo)
    localStorage.setItem("Telefono",telefono)
    localStorage.setItem("Producto", pro)
    localStorage.setItem("Arquitectura",arq)
    localStorage.setItem("ServidorP",serp)
    localStorage.setItem("HardwareP",hardp)
    localStorage.setItem("SoftwareP",softp)
    localStorage.setItem("RecomendacionesP", recp)
    localStorage.setItem("ServidorC",serc)
    localStorage.setItem("HardwareC",hardc)
    localStorage.setItem("SoftwareC",softc)
    localStorage.setItem("RecomendacionesC",recc)
    localStorage.setItem("RequerimientosG", reqa)
    localStorage.setItem("RequerimientosA",reqa)
    localStorage.setItem("Cliente",cli)
    // limpiando los campos o inputs
    document.getElementById("nombre").value = " ";
    document.getElementById("apellido").value = " ";
    document.getElementById("fnacimiento").value = " ";
    document.getElementById("correo").value = " ";
    document.getElementById("telefono").value = " ";
    document.getElementById("producto").value = " ";
    document.getElementById("arquitectura").value = " ";
    document.getElementById("servidorP").value = " ";
    document.getElementById("hardwareP").value = " ";
    document.getElementById("softwareP").value = " ";
    document.getElementById("recomendacionesP").value = " ";
    document.getElementById("servidorC").value = " ";
    document.getElementById("hardwareC").value = " ";
    document.getElementById("softwareC").value = " ";
    document.getElementById("recomendacionesC").value = " ";
    document.getElementById("requerimientosG").value = " ";
    document.getElementById("requerimientosA").value = " ";
    document.getElementById("cliente").value = " ";
}

function cargarData(){
    let nombre,apellido,fnacimiento,email,numero,product,arquitec,servidp,hardwap,softwap,recomendaciop,servidc,hardwac,softwac,recomendacioc,requerig,requeria,client
    nombre = localStorage.getItem("Nombre");
    apellido = localStorage.getItem("Apellido");
    fnacimiento = localStorage.getItem("Fecha");
    email = localStorage.getItem("Correo");
    numero = localStorage.getItem("Telefono");
    product = localStorage.getItem("Producto");
    arquitec = localStorage.getItem("Arquitectura");
    servidp = localStorage.getItem("ServidorP");
    hardwap = localStorage.getItem("HardwareP");
    softwap = localStorage.getItem("SoftwareP");
    recomendaciop = localStorage.getItem("RecomendacionesP");
    servidc = localStorage.getItem("ServidorC");
    hardwac = localStorage.getItem("HardwareC");
    softwac = localStorage.getItem("SoftwareC");
    recomendacioc = localStorage.getItem("RecomendacionesC");
    requerig = localStorage.getItem("RequerimientosG");
    requeria = localStorage.getItem("RequerimientosA");
    client = localStorage.getItem("Cliente");
    // mostrar datos almacenados
    n.innerHTML = nombre;
    a.innerHTML = apellido;
    f.innerHTML = fnacimiento;
    c.innerHTML = email;
    t.innerHTML = numero;
    dg.innerHTML = product;
    ar.innerHTML = arquitec;
    se1.innerHTML = servidp;
    ha.innerHTML = hardwap;
    so.innerHTML = softwap;
    re.innerHTML = recomendaciop;
    sc.innerHTML = servidc;
    hc.innerHTML = hardwac;
    soc.innerHTML = softwac;
    rec.innerHTML = recomendacioc;
    rqg.innerHTML = requerig;
    rqa.innerHTML = requeria;
    cli.innerHTML = client;
}
function clearlocalStore(){
    localStorage.clear();
}