var audioContext = new AudioContext()

window.onload = () => {
  document.body.addEventListener('click', () => {
    console.log('on click')
    if (audioContext.state === 'running') {
      audioContext.suspend().then(() => {
        console.log('Resume context')
      })
    } else if (audioContext.state === 'suspended') {
      audioContext.resume().then(() => {
        console.log('Suspend context')
        play(261)
      })
    }
  })
}

const displayForDebug = {
  set update(text) {
    document.getElementById('display-for-debug').textContent = text
  },
}

//..........................
function play(hz) {
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
  }, 200)
}
