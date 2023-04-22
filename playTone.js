var audioContext = new AudioContext()
var toneStopFlg = False

//..........................
function playTone() {
  if (toneStopFlg) {
    return
  }
  //..........................
  // window.AudioContext = window.AudioContext || window.webkitAudioContext
  var osc = audioContext.createOscillator()
  osc.frequency.value = hz
  var audDes = audioContext.destination
  osc.connect(audDes)
  osc.start = osc.start || osc.noteOn
  osc.start()

  setTimeout(function () {
    osc.stop(0)
  }, 10)
}
