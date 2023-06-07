/*1. asociamos el id del toggle-box */

let toggleBox = document.getElementById("toggleBox");
let choiceBox = document.getElementById("choiceBox");
// 2 verificar que clase se encuentra en choice-box
toggleBox.addEventListener("click", function(){
    if (choiceBox.classList.contains("choiceBox")){
        choiceBox.classList.add("choice-box-on");
        choiceBox.classList.remove("choice-box-off");
        toggleBox.classList.add("toggle-box-on");
        toggleBox.classList.remove("toggle-box-off");
        
    }else{
        choiceBox.classList.remove("choice-box-off");
        choiceBox.classList.add("choice-box-on");
        toggleBox.classList.remove("toggle-box-off");
        toggleBox.classList.add("toggle-box-on");

    }
})

// 2,1 al dar click quitamos la clase por defecto de choice-box y agragamos la clase que venia con el hover de choice-box





