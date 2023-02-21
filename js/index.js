import resetControls from "./controls.js";
import {countDown, resetTimer, updateTimerDisplay} from "./timer.js"

const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonSet = document.querySelector('.set');
const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut;

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
  clearTimeout(timerTimeOut)
}

const handleStopButton = () => {
  resetControls()
  resetTimer()
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
  let newMinutes = prompt('How many minutes?') 
  if (!newMinutes) {
    resetTimer()
    return
  }
  minutes = newMinutes
  updateTimerDisplay(minutes, 0)
}
 
buttonPlay.addEventListener('click',handlePlayButton
)

buttonPause.addEventListener('click' , handlePauseButton)

buttonStop.addEventListener('click',handleStopButton)

buttonSoundOn.addEventListener('click', handleSoundOnbutton)

buttonSoundOff.addEventListener('click', handleSoundOffbutton)

buttonSet.addEventListener('click', handleSetButton)
