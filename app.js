const timeLeftdisplay = querySelector('#time-left');
const resultDisplay = querySelector('#result');
const startPauseButton = querySelector('#start-pause-button');
const squares = document.querySelectorAll(".grid div")

function moveFrog() {
    console.log('moved')
    
}
document.addEventListener('keyup', moveFrog)