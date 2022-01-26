



  const squares = document.querySelectorAll('.square')
  const mole = document.querySelector('.mole')
  const timeLeft = document.querySelector('#time-left')
  const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 7;
let timerId = null

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
  })

  let randomSquare = squares[Math.floor(Math.random() * 15)]
  randomSquare.classList.add('mole')

  hitPosition = randomSquare.id
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++
      score.textContent = result
      hitPosition = null
    }
  })
})

function moveMole() {
  timerId = setInterval(randomSquare, 100)
}

moveMole()

function countDown() {
 currentTime--
 timeLeft.textContent = currentTime

 if (currentTime == 0) {
   clearInterval(countDownTimerId)
   clearInterval(timerId)
   if(result <3){
  
     let audio = new Audio();
     audio.src ="./khana.mp3"
     audio.play();

    

   } else if(result >=3 && result <= 5){
    let audio = new Audio();
    audio.src ="./kon.mp3"
    audio.play();
   }
   
   else {
    let audio = new Audio();
    audio.src ="./najib.mp3"
    audio.play();
   }

 }

}

let countDownTimerId = setInterval(countDown, 1000)

 
 

