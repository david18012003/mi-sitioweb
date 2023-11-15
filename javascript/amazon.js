let imgMain = document.getElementById("img-principal")
let img1 = document.getElementById("img-1")
let img2 = document.getElementById("img-2")
let img3 = document.getElementById("img-3")
let img4 = document.getElementById("img-4")
let img5 = document.getElementById("img-5")
let modal = document.getElementById("box-modal")
let close = document.getElementById("close")

let imagePrincipal = document.getElementById("imagePrincipal")
let image1 = document.getElementById("image-1")
let image2 = document.getElementById("image-2")
let image3 = document.getElementById("image-3")
let image4 = document.getElementById("image-4")
let image5 = document.getElementById("image-5")

function active(imga){
    var image = document.querySelectorAll(".imagesReducidas")
    image.forEach(function (imagen) {
        imagen.classList.remove('imgActive')
    })
    imga.classList.add('imgActive');
}

image1.addEventListener("mouseover", function() {

    imagePrincipal.src = ''
    imagePrincipal.src = image1.src
    active(image1)
})
image2.addEventListener("mouseover", function() {

    imagePrincipal.src = ''
    imagePrincipal.src = image2.src
    active(image2)
})
image3.addEventListener("mouseover", function() {

    imagePrincipal.src = ''
    imagePrincipal.src = image3.src
    active(image3)
})
image4.addEventListener("mouseover", function() {

    imagePrincipal.src = ''
    imagePrincipal.src = image4.src
    active(image4)
})
image5.addEventListener("mouseover", function() {

    imagePrincipal.src = ''
    imagePrincipal.src = image5.src
    active(image5)
})

window.onload = () => {
    modal.classList.remove("box-modal")
}

function setActive(img){
    var images = document.querySelectorAll(".img-reducidas")
    images.forEach(function (image) {
        image.classList.remove('active')
    })
    img.classList.add('active');
}

img1.addEventListener("click", function() {
    
    imgMain.src = ''
    imgMain.src = img1.src
    setActive(img1)
    
})

img2.addEventListener("click", function() {
    
    imgMain.src = ''
    imgMain.src = img2.src
    setActive(img2)
    
})

img3.addEventListener("click", function() {
    
    imgMain.src = ''
    imgMain.src = img3.src
    setActive(img3)
    
})

img4.addEventListener("click", function() {
    
    imgMain.src = ''
    imgMain.src = img4.src
    setActive(img4)
    
})

img5.addEventListener("click", function() {
    
    imgMain.src = ''
    imgMain.src = img5.src
    setActive(img5)
    
})

close.addEventListener("click", function() {
    modal.classList.remove("visible")
})

function abrir(){
    modal.classList.add("visible")
}