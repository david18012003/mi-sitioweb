/*1. asociamos el id del toggle-box */

let contenedorPrincipal = document.getElementById("contenedorPrincipal");
let contenedorScundario = document.getElementById("contenedorScundario");

/* 2. Verificamos que clase se encuentra en chice-box */
contenedorPrincipal.addEventListener("click", function() {
    if (contenedorScundario.classList.contains("contenedor2-off")) {
        contenedorScundario.classList.add("contenedor2-on")
        contenedorScundario.classList.remove("contenedor2-off")
        contenedorPrincipal.classList.add("contenedor1-on")
        contenedorPrincipal.classList.remove("contenedor1-off")
    }
    else {
        contenedorScundario.classList.remove("contenedor2-on")
        contenedorScundario.classList.add("contenedor2-off")
        contenedorPrincipal.classList.remove("contenedor1-on")
        contenedorPrincipal.classList.add("contenedor1-off")
    }
});




































// let toggleBox = document.getElementById("toggleBox");
// let choiceBox = document.getElementById("choiceBox");
// // 2 verificar que clase se encuentra en choice-box
// toggleBox.addEventListener("click", function(){
//     if (choiceBox.classList.contains("choiceBox")){
//         choiceBox.classList.add("choice-box-on");
//         choiceBox.classList.remove("choice-box-off");
//         toggleBox.classList.add("toggle-box-on");
//         toggleBox.classList.remove("toggle-box-off");
        
//     }else{
//         choiceBox.classList.remove("choice-box-off");
//         choiceBox.classList.add("choice-box-on");
//         toggleBox.classList.remove("toggle-box-off");
//         toggleBox.classList.add("toggle-box-on");

//     }
// })

// 2,1 al dar click quitamos la clase por defecto de choice-box y agragamos la clase que venia con el hover de choice-box





