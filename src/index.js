const startBtn = document.querySelector("button");
const audio = document.querySelector("audio");
const second = document.querySelector("#second");

let stream;
let recorder;
let audioFile;
let count;
let recorderTime;

const handleDownload = () => {
  const a = document.createElement("a");
  a.href = audioFile;
  a.download = "MyRecording.webm";
  document.body.appendChild(a);
  a.click();
};

const handleStop = () => {
  clearTimeout(recorderTime);
  clearInterval(count);
  startBtn.innerText = "Download Recording";
  startBtn.removeEventListener("click", handleStop);
  startBtn.addEventListener("click", handleDownload);

  recorder.stop();
};

const handleStart = () => {
  startBtn.innerText = "Stop Recording";
  startBtn.removeEventListener("click", handleStart);
  startBtn.addEventListener("click", handleStop);

  recorder = new MediaRecorder(stream, { mimeType: "video/webm" });
  recorder.ondataavailable = (event) => {
    audioFile = URL.createObjectURL(event.data);
    console.log(audioFile);
    audio.srcObject = null;
    audio.src = audioFile;
    audio.loop = false;
    audio.play();
  };

  recorder.start();

  recorderTime = setTimeout(() => {
    handleStop();
  }, 6000);
  count = setInterval(() => {
    second.innerHTML = parseInt(second.innerHTML) - 1;
  }, 1000);
};

const init = async () => {
  stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: false,
  });

  console.log(stream);
};

init();

startBtn.addEventListener("click", handleStart);
