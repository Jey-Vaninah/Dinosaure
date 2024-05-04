const dino = document.querySelector(".dinosaure")
const cactus = document.querySelector('.cactus')
let scrore = 0;

window.addEventListener("keydown", (event) => {
    if (event.key == " ") {

        dino.classList.toggle("jump")
    }

    setTimeout(function () {
        dino.classList.toggle("jump")
    }, 1000)
}
)

let hauteurCactusVh = parseInt(window.getComputedStyle(cactus).getPropertyValue('heigth'),10);

let largeurCactusVw =parseInt(window.getComputedStyle(cactus).getPropertyValue('width'),10);
let hauteurCactus =(hauteurCactusVh /100)*window.innerHeigth;
let largeurCactus =(largeurCactusVw /100)*window.innerWidth;

let hauteurDinosVh = parseInt(window.getComputedStyle(dino).getPropertyValue('heigth'),10);

let largeurDinoVw =parseInt(window.getComputedStyle(dino).getPropertyValue('width'),10);
let hauteurDino =(hauteurCactusVh /100)*window.innerHeigth;
let largeurDino =(largeurCactusVw /100)*window.innerWidth;

if (hauteurCactus === hauteurDino && largeurCactus === largeurDino) {
    alert('Game Over')
}