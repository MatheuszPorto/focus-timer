import  Controls from "./controls.js";
import  Timer from "./timer.js";

const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonSet = document.querySelector('.set');
const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent);

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

const handlePlayButton = () => {
  controls.play()
  timer.countDown()
}

const handlePauseButton = () => {
  controls.pause()
  timer.hold()
}

const handleStopButton = () => {
  controls.reset()
  timer.reset()
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
  let newMinutes = controls.getMinutes()
  if (!newMinutes) {
    timer.reset()
    return
  }
  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
}
 
buttonPlay.addEventListener('click',handlePlayButton
)

buttonPause.addEventListener('click' , handlePauseButton)

buttonStop.addEventListener('click',handleStopButton)

buttonSoundOn.addEventListener('click', handleSoundOnbutton)

buttonSoundOff.addEventListener('click', handleSoundOffbutton)

buttonSet.addEventListener('click', handleSetButton)
