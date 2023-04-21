function quinceDescuento(){
    let cantidad
    cantidad = document.getElementById("cantidad").value

    let valor
    valor = document.getElementById("valor").value
    // let n2
    // n2 = document.getElementById("numero2").value
    let valorTotal2
    valorTotal2 = cantidad*valor

    let valorTotal1 
    valorTotal1 = valorTotalSinDescuento-15%


    document.getElementById("con1").innerHTML  
    "<div> el valor es "+ valorTotal1 +"</div>"
}