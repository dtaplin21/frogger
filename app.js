const timeLeftdisplay = document.querySelector('#time-left');
const resultDisplay = document.querySelector('#result');
const startPauseButton = document.querySelector('#start-pause-button');
const squares = document.querySelectorAll(".grid div")

console.log(squares)
let currentIndex = 0;
function moveFrog() {
   
    squares[currentIndex].classList.add('frog')
}
document.addEventListener('keyup', moveFrog)