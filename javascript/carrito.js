var menos, mas, cantidad, subtotal, productos, precio

menos = document.getElementById("menos");
mas = document.getElementById("mas");
cantidad = document.getElementById("cantidad");
subtotal = document.getElementById("subtotal");
productos = document.getElementById("productos");
precio = document.getElementById("precio");

mas.addEventListener("click", function () {

    let auxCant = parseInt(cantidad.value);
    let auxTotal = parseFloat(precio.innerHTML);
        
    if (auxCant < 10 )  {
        auxCant++;
        cantidad.value = auxCant;

        subtotal.innerHTML = auxCant * auxTotal;


        productos.innerHTML = auxCant;

        
    }
})
menos.addEventListener("click", function () {

    let auxCant = parseInt(cantidad.value);
    let auxTotal = parseFloat(precio.innerHTML);
    if (auxCant > 0 )  {
        auxCant--;
        cantidad.value = auxCant;

        subtotal.innerHTML = auxCant + auxTotal;

        productos.innerHTML = auxCant;

        
    }
})