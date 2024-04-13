const timeLeftdisplay = document.querySelector('#time-left');
const resultDisplay = document.querySelector('#result');
const startPauseButton = document.querySelector('#start-pause-button');
const squares = document.querySelectorAll(".grid div")
const logsLeft = document.querySelectorAll('.log-left')
const logsRight = document.querySelectorAll('.log-right')

console.log(squares)
let currentIndex = 76;
const width = 9;


function moveFrog(e) {
squares[currentIndex].classList.remove('frog')

console.log(e)
    switch(e.key) {
        case 'ArrowLeft' :
            console.log('move Left')
            if(currentIndex % width !== 0) currentIndex -= 1
            break
        case 'ArrowRight' :
            console.log('move right')
            if(currentIndex % width < width - 1) currentIndex += 1
            break
        case 'ArrowUp' :
            console.log('move up')
            if(currentIndex - width >=0 ) currentIndex -= width
            break
        case 'ArrowDown' :
            console.log('move down');
           if(currentIndex + width < width * width) currentIndex += width
            break 
    }
   
    squares[currentIndex].classList.add('frog')
}
document.addEventListener('keyup', moveFrog)

function autoMoveLogs() {
    logsLeft.forEach(logLeft => moveLogLeft(logLeft))
    logsRight.forEach(logRight => moveLogRight(logRight))
}



function moveLogLeft(logsLeft) {
    switch(true) {
        case logsLeft.classList.contains('l1') :
            logsLeft.classList.remove('l1')
            logsLeft.classList.add('l2')
            break
        case logsLeft.classList.contains('l2') :
                logsLeft.classList.remove('l2')
                logsLeft.classList.add('l3')
                break
        case logsLeft.classList.contains('l3') :
            logsLeft.classList.remove('l3')
            logsLeft.classList.add('l4')
            break
         case   logsLeft.classList.contains('l4') :
            logsLeft.classList.remove('l4')
            logsLeft.classList.add('l5')
            break
            case   logsLeft.classList.contains('l5') :
                logsLeft.classList.remove('l5')
                logsLeft.classList.add('l1')
                break
    }
}

function moveLogRight(logsRight) {
    switch(true) {
        case logsRight.classList.contains('l1') :
             logsRight.classList.remove('l1')
             logsRight.classList.add('l5')
            break
        case logsRight.classList.contains('l2') :
            logsRight.classList.remove('l2')
            logsRight.classList.add('l1')
            break
        case logsRight.classList.contains('l3') :
            logsRight.classList.remove('l3')
            logsRight.classList.add('l2')
            break
        case  logsRight.classList.contains('l4') :
            logsRight.classList.remove('l4')
            logsRight.classList.add('l3')
            break
        case  logsRight.classList.contains('l5') :
            logsRight.classList.remove('l5')
            logsRight.classList.add('l4')
                break
        }
    }





setInterval(autoMoveLogs, 1000)
