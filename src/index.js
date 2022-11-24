const video = document.querySelector("video");
const videoController = document.querySelector("#videoController");

const psBtn = videoController.querySelector("#play");
const playBtnIcon = document.querySelector("#play i");

const volumeBtn = videoController.querySelector("#mute");
const volumeBtnIcon = videoController.querySelector("#mute i");

const volumeRange = videoController.querySelector("#volume");

const currnetTime = document.querySelector("#currentTime");
const totalTime = document.querySelector("#totalTime");

const timeline = document.querySelector("#timeline");

const fullScreenBtn = document.querySelector("#fullScreen");
const fullscreenIcon = document.querySelector("#fullScreen i");
const videoContainer = document.querySelector("#videoContainer");

let controlsMovementTimeout = null;
let controlsTimeout = null;
let volumeValue = 0.5;
video.volume = volumeValue;

const formatTime = (sec) => {
  return new Date(sec * 1000).toISOString().substring(11, 19);
};

const handlePlayAndStop = () => {
  if (video.paused) {
    video.play();
    playBtnIcon.className = "fas fa-pause";
  } else {
    video.pause();
    playBtnIcon.className = "fas fa-play";
  }
};

const handleSound = () => {
  if (video.muted) {
    video.muted = false;
    volumeRange.value = volumeValue;
    volumeBtnIcon.className = "fas fa-volume-up";
  } else {
    video.muted = true;
    volumeRange.value = 0;
    volumeBtnIcon.className = "fas fa-volume-mute";
  }
};

const handleVolume = (event) => {
  const {
    target: { value },
  } = event;
  if (video.muted) {
    video.muted = false;
    volumeBtnIcon.className = "fas fa-volume-mute";
  }
  if (value === "0") {
    volumeBtnIcon.className = "fas fa-volume-off";
  } else {
    volumeBtnIcon.className = "fas fa-volume-up";
  }
  video.volume = volumeValue = value;
};

const handleLoadedMetaData = () => {
  totalTime.innerHTML = formatTime(Math.floor(video.duration));
  timeline.max = Math.floor(video.duration);
};

const handelTimeUpdate = () => {
  currnetTime.innerHTML = formatTime(Math.floor(video.currentTime));
  timeline.value = Math.floor(video.currentTime);
};

const handlerTimeLine = (event) => {
  const {
    target: { value },
  } = event;

  video.currentTime = value;
};

const handleFullScreen = () => {
  const fullscreen = document.fullscreenElement;
  if (fullscreen) {
    document.exitFullscreen();
    fullscreenIcon.className = "fas fa-expand";
  } else {
    videoContainer.requestFullscreen();
    fullscreenIcon.className = "fas fa-compress";
  }
};

const hideControls = () => videoController.classList.remove("showing");

const handelMouseMove = () => {
  if (controlsTimeout) {
    clearTimeout(controlsTimeout);
    controlsTimeout = null;
  }
  if (controlsMovementTimeout) {
    clearTimeout(controlsMovementTimeout);
    controlsMovementTimeout = null;
  }
  videoController.classList.add("showing");
  controlsMovementTimeout = setTimeout(hideControls, 3000);
};

const handleMouseLeave = () => {
  controlsTimeout = setTimeout(() => {
    videoController.classList.remove("showing");
  }, 3000);
};

psBtn.addEventListener("click", handlePlayAndStop);
volumeBtn.addEventListener("click", handleSound);
volumeRange.addEventListener("input", handleVolume);

video.addEventListener("loadedmetadata", handleLoadedMetaData);
video.addEventListener("timeupdate", handelTimeUpdate);
video.addEventListener("click", handlePlayAndStop);

videoContainer.addEventListener("mousemove", handelMouseMove);
videoContainer.addEventListener("mouseleave", handleMouseLeave);

timeline.addEventListener("change", handlerTimeLine);

fullScreenBtn.addEventListener("click", handleFullScreen);

window.addEventListener("keydown", (keyEvent) => {
  if (keyEvent.key === " ") handlePlayAndStop();
  else if (
    (keyEvent.key === "F" || keyEvent.key === "f") &&
    !document.fullscreenElement
  ) {
    videoContainer.requestFullscreen();
    fullscreenIcon.className = "fas fa-compress";
  } else if (keyEvent.key === "Escape") {
    document.exitFullscreen();
    fullscreenIcon.className = "fas fa-expand";
  }
});
