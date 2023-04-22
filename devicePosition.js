var devicePosition = 0

function updatePosition(event) {
  devicePosition = event.acceleration.alpha
  displayForDebug.update = devicePosition
}

function resetPosition() {
  devicePosition = 0
}
