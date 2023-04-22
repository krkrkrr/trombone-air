window.onload = () => {
  window.addEventListener('devicemotion', updatePosition)
  document.body.addEventListener('touchstart', startTone)
  document.body.addEventListener('touchend', stopTone)
}

const displayForDebug = {
  set update(text) {
    document.getElementById('display-for-debug').innerHTML = text
  },
}
