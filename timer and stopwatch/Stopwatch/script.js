const display = document.querySelector("#display");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

let time = 0;
let interval;

function displayTime() {
  const minutes = Math.floor(time / 600);
  const seconds = Math.floor((time % 600) / 10);
  const milliseconds = time % 10;

  display.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}:${milliseconds}`;
}

function startTimer() {
  interval = setInterval(() => {
    time++;
    displayTime();
  }, 100);
  startBtn.disabled = true;
}

function stopTimer() {
  clearInterval(interval);
  startBtn.disabled = false;
}

function resetTimer() {
  clearInterval(interval);
  time = 0;
  displayTime();
  startBtn.disabled = false;
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
