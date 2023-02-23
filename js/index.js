import  Controls from "./controls.js";
import  Timer from "./timer.js";
import  { buttonPlay, buttonPause, buttonStop, buttonSet, buttonSoundOn, buttonSoundOff, minutesDisplay, secondsDisplay} from "./elements.js";
import Sound from "./sounds.js";

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

const sound = Sound()

const handlePlayButton = () => {
  controls.play()
  timer.countDown()
  sound.pressButton()
}

const handlePauseButton = () => {
  controls.pause()
  timer.hold()
  sound.pressButton()
}

const handleStopButton = () => {
  controls.reset()
  timer.reset()
  sound.pressButton()
}

const handleSoundOnbutton = () => {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
  sound.bgAudio.play()
}

const handleSoundOffbutton = () => {
  buttonSoundOff.classList.add('hide')
  buttonSoundOn.classList.remove('hide')
  sound.bgAudio.pause()
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
