window.onload = () => {
  window.addEventListener('deviceorientation', updatePosition)
  document.body.addEventListener('mousedown', startTone)
  document.body.addEventListener('mouseup', stopTone)
}

const displayForDebug = {
  set update(text) {
    document.getElementById('display-for-debug').innerHTML = text
  },
}
