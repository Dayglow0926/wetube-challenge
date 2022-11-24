const video = document.querySelector("video");
const videoController = document.getElementById("videoController");
const psBtn = videoController.querySelector("#playPauseBtn");
const volumeBtn = videoController.querySelector("#volume");
const volumeRange = videoController.querySelector("#volumeRange");

const currnetTime = document.querySelector("#currentTime");
const totalTime = document.querySelector("#totalTime");

const timeline = document.querySelector("#timeline");

let volumeValue = 0.5;
video.volume = volumeValue;

const formatTime = (sec) => {
  return new Date(sec * 1000).toISOString().substring(11, 19);
};

const handlePlayAndStop = () => {
  if (video.paused) {
    video.play();
    psBtn.className = "fas fa-pause";
  } else {
    video.pause();
    psBtn.className = "fas fa-play";
  }
};

const handleSound = () => {
  if (video.muted) {
    video.muted = false;
    volumeRange.value = volumeValue;
    volumeBtn.className = "fas fa-volume-up";
  } else {
    video.muted = true;
    volumeRange.value = 0;
    volumeBtn.className = "fas fa-volume-mute";
  }
};

const handleVolume = (event) => {
  const {
    target: { value },
  } = event;
  if (video.muted) {
    video.muted = false;
    volumeBtn.className = "fas fa-volume-mute";
  }
  if (value === "0") {
    volumeBtn.className = "fas fa-volume-off";
  } else {
    volumeBtn.className = "fas fa-volume-up";
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

psBtn.addEventListener("click", handlePlayAndStop);
volumeBtn.addEventListener("click", handleSound);
volumeRange.addEventListener("input", handleVolume);

video.addEventListener("loadedmetadata", handleLoadedMetaData);
video.addEventListener("timeupdate", handelTimeUpdate);

timeline.addEventListener("change", handlerTimeLine);
