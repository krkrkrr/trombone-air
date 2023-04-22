var devicePosition = 0

function updatePosition(event) {
  devicePosition = event.rotationRate.alpha
  console.log(event.acceleration)
  displayForDebug.update = devicePosition
}

function resetPosition() {
  devicePosition = 0
}
