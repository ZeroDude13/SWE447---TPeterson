var fieldOfViewRadians = degToRad(60);
var rotationSpeed = 1.2;
 
requestAnimationFrame(drawScene);
 
// Draw the scene.
function drawScene() {
  // Every frame increase the rotation a little.
  rotation[1] += rotationSpeed / 60.0;
 
  ...
  // Call drawScene again next frame
  requestAnimationFrame(drawScene);
}
var then = 0;
 
requestAnimationFrame(drawScene);
 
// Draw the scene.
function drawScene(now) {
  // Convert the time to seconds
  now *= 0.001;
  // Subtract the previous time from the current time
  var deltaTime = now - then;
  // Remember the current time for the next frame.
  then = now;
 
   ...
    rotation[1] += rotationSpeed * deltaTime
}
