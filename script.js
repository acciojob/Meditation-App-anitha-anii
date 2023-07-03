//your JS code here. If required.
const app = document.getElementById("app");
const videoPlayer = document.getElementById("videoPlayer");
const audioPlayer = document.getElementById("audioPlayer");
const sound1Button = document.getElementById("sound1");
const sound2Button = document.getElementById("sound2");
const smallerMinsButton = document.getElementById("smaller-mins");
const mediumMinsButton = document.getElementById("medium-mins");
const longMinsButton = document.getElementById("long-mins");
const timeDisplay = document.querySelector(".time-display");
const playButton = document.querySelector(".play");

let selectedSound = "Sounds/beach.mp3";
let selectedVideo = "Videos/beach.mp4";

sound1Button.addEventListener("click", () => {
  selectedSound = "Sounds/beach.mp3";
  selectedVideo = "Videos/beach.mp4";
});

sound2Button.addEventListener("click", () => {
  selectedSound = "Sounds/rain.mp3";
  selectedVideo = "Videos/rain.mp4";
});

function startTimer(duration) {
  let timer = duration;
  let minutes, seconds;

  let countdown = setInterval(() => {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timeDisplay.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(countdown);
      timeDisplay.textContent = "Time's up!";
    }
  }, 1000);
}

smallerMinsButton.addEventListener("click", () => {
  startTimer(120);
});

mediumMinsButton.addEventListener("click", () => {
  startTimer(300);
});

longMinsButton.addEventListener("click", () => {
  startTimer(600);
});

playButton.addEventListener("click", () => {
  if (videoPlayer.paused && audioPlayer.paused) {
    videoPlayer.src = selectedVideo;
    audioPlayer.src = selectedSound;
    videoPlayer.play();
    audioPlayer.play();
    playButton.textContent = "Pause";
  } else {
    videoPlayer.pause();
    audioPlayer.pause();
    playButton.textContent = "Play";
  }
});
