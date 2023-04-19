
function getFicha(){
    alert()
    let producto = document.getElementById("nom_producto").value
    document.getElementById("resproduct").innerText = producto

    let linea = document.getElementById("linea").value
    document.getElementById("resproducto").innerText = linea

    let versiones = document.getElementById("versiones").value
    document.getElementById("resproduc").innerText = versiones
    
    let actuales = document.getElementById("actuales").value
    document.getElementById("resver").innerText = actuales
}
const checkbox = document.getElementById("myCheckbox");

checkbox.addEventListener("change", function() {
  if (this.checked) {
    console.log("El checkbox está seleccionado");
  } else {
    console.log("El checkbox no está seleccionado");
  }
});