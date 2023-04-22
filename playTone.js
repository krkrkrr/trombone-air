const BASE_FREQUENCY = 261

var audioContext = new AudioContext()
var toneStopFlg = true

//..........................
function playTone(
  oscillator = audioContext.createOscillator(),
  initFlg = false
) {
  if (toneStopFlg) {
    oscillator.stop(0)
    return
  }

  if (initFlg) {
    const audDes = audioContext.destination
    oscillator.connect(audDes)
    oscillator.start = oscillator.start || oscillator.noteOn
    oscillator.start()
  }
  //..........................
  // window.AudioContext = window.AudioContext || window.webkitAudioContext
  oscillator.frequency.value = BASE_FREQUENCY - devicePosition

  setTimeout(function () {
    playTone(oscillator)
  }, 100)
}

function stopTone() {
  toneStopFlg = true
}

function startTone() {
  toneStopFlg = false
  playTone(audioContext.createOscillator(), true)
}
