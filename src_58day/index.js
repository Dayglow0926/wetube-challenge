const video = document.querySelector("video");

const playBtn = document.querySelector("#play");
const muteBtn = document.querySelector("#mute");
const volumeController = document.querySelector("#volume");

let videoVolume = 0.5;
video.volume = videoVolume;
volumeController.value = videoVolume;

const handlerPlayClick = () => {
  if (video.paused) video.play();
  else video.pause();

  playBtn.innerHTML = video.paused ? "Play" : "Pause";
};

const handlerMuteClick = () => {
  if (video.muted) video.muted = false;
  else video.muted = true;

  muteBtn.innerHTML = video.muted ? "Unmute" : "Mute";
  volumeController.value = video.muted ? 0 : videoVolume;
};

const handlerVolume = (event) => {
  const {
    target: { value },
  } = event;
  if (value !== 0 && video.muted) {
    video.muted = false;
    muteBtn.innerHTML = "Mute";
  }
  videoVolume = value;
  video.volume = videoVolume;
};

playBtn.addEventListener("click", handlerPlayClick);
muteBtn.addEventListener("click", handlerMuteClick);
volumeController.addEventListener("input", handlerVolume);
