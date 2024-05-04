const dino = document.querySelector(".dinosaure")
const cactus = document.querySelector('.cactus')
let score = 0;

window.addEventListener("keydown", (event) => {
    if (event.key == " ") {

        dino.classList.toggle("jump")
    }

    setTimeout(function () {
        dino.classList.toggle("jump")
    }, 1000)
}
)

function checkCollision() {
    const dinoRect = dino.getBoundingClientRect();
    const cactusRect = cactus.getBoundingClientRect();
  
    if (
      dinoRect.right > cactusRect.left &&
      dinoRect.left < cactusRect.right &&
      dinoRect.bottom > cactusRect.top &&
      dinoRect.top < cactusRect.bottom
    ) 
    {
      alert("Game Over.Your score: "+score);
    }


  }
  function updateScore(){
    const scoreElement =document.querySelector('.score');
    scoreElement.textContent = "score:"+score
  }
  
  setInterval(checkCollision, 10);