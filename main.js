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
  window.addEventListener('deviceorientation', updatePosition)
}

const displayForDebug = {
  set update(text) {
    document.getElementById('display-for-debug').innerHTML = text
  },
}
