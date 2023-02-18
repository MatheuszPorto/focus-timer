const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonSet = document.querySelector('.set');
const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds')
let minutes; 

function countDown () {
  setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    if (seconds <= 0) {
      seconds = 2
      minutesDisplay.textContent= String(minutes -1).padStart(2,"0")
    }

    secondsDisplay.textContent = String(seconds -1).padStart(2,"0")

    if (minutes <= 0) {
      handleStopButton()
      return
    }

    countDown()
  }, 1000)
}

const handlePlayButton = () => {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')
  countDown()
}

const handlePauseButton = () => {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
}

const handleStopButton = () => {
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
}

const handleSoundOnbutton = () => {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
}

const handleSoundOffbutton = () => {
  buttonSoundOff.classList.add('hide')
  buttonSoundOn.classList.remove('hide')
}

const handleSetButton = () => {
  minutes = prompt('How many minutes?')
  minutesDisplay.textContent = String(minutes).padStart(2,"0")
}
 
buttonPlay.addEventListener('click',handlePlayButton
)

buttonPause.addEventListener('click' , handlePauseButton)

buttonStop.addEventListener('click',handleStopButton)

buttonSoundOn.addEventListener('click', handleSoundOnbutton)

buttonSoundOff.addEventListener('click', handleSoundOffbutton)

buttonSet.addEventListener('click', handleSetButton)
