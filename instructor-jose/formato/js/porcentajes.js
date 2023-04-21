function sinDescuento(){
    let cantidad
    cantidad = document.getElementById("cantidad").value


    let valor
    valor = document.getElementById("valor").value


    let valorTotal
    valorTotal = cantidad*valor


    document.getElementById("sin").innerHTML = 
    "<div> El valor es "+ valorTotal + "</div>"
}
function quince(){
    let cantidad
    cantidad = document.getElementById("cantidad").value

    let valor
    valor = document.getElementById("valor").value

    let descuentoQuince, total,valor1
    descuentoQuince = cantidad*valor - cantidad*valor*15 /100


    document.getElementById("sin").innerHTML =
    "<div> El valor es "+ descuentoQuince +"</div>"
}
function cincuenta(){

    let cantidad
    cantidad = document.getElementById("cantidad").value

    let valor
    valor = document.getElementById("valor").value


    let descuentocincuenta
    descuentocincuenta = cantidad*valor - cantidad*valor*50 / 100
    

    document.getElementById("sin").innerHTML =
    "<div> El valor es "+ descuentocincuenta +"</div>"
}