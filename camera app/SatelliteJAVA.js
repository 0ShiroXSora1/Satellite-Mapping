

var constraints ={ video:{facingMode:"environment"}, audio:false };

const cameraView =document.querySelector("#camera--view"),
      cameraOutput =document.querySelector("#camera--output"),
      cameraSensor =document.querySelector("#camera--sensor"),
      cameraTrigger =document.querySelector("camera--trigger")
      
function cameraStart () {
  navigator.MediaDevices
      .getUserMedia (constraints)
      .then (function (stream) {track=stream.getTracks() [0];
      cameraView.scrObject = stream;
      })
      
  .catch (function(error) {
      console.error("Whoops! Something went wrong!", error);
  });
}

cameraTrigger.onclick = function() {
  cameraSensor.width = cameraView.videoWidth;
  cameraSensor.height = cameraView.videoHeight;
  cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
  cameraOutput.src = cameraSensor.toDateURL("image/webp");
  cameraOutput.classList.add("taken");
};

window.addEventListener("load", cameraStart, false);