var devicePosition = {
  x: 0,
  y: 0,
  z: 0,
}

function updatePosition(event) {
  devicePosition.x += event.gamma
  devicePosition.y += event.beta
  devicePosition.z += event.alpha
  displayForDebug.update = devicePosition.y
}

function resetPosition() {
  devicePosition.x = 0
  devicePosition.y = 0
  devicePosition.z = 0
}
