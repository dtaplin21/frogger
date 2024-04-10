const timeLeftdisplay = document.querySelector('#time-left');
const resultDisplay = document.querySelector('#result');
const startPauseButton = document.querySelector('#start-pause-button');
const squares = document.querySelectorAll(".grid div")

console.log(squares)
let currentIndex = 76;
let width = 9;


function moveFrog(e) {
console.log(e)
    switch(e.key) {
        case 'ArrowLeft' :
            console.log('move Left')
            currentIndex -= 1
            break
        case 'ArrowRight' :
            console.log('move right')
            currentIndex += 1
            break
        case 'ArrowUp' :
            console.log('move up')
            currentIndex -= width
            break
        case 'ArrowDown' :
            console.log('move down');
            currentIndex += width
            break 
    }
   
    squares[currentIndex].classList.add('frog')
}
document.addEventListener('keyup', moveFrog)