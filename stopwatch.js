let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

function updateTimer() {
  const milliseconds = Math.floor((Date.now() - startTime + elapsedTime) % 1000);
  const seconds = Math.floor((Date.now() - startTime + elapsedTime) / 1000) % 60;
  const minutes = Math.floor((Date.now() - startTime + elapsedTime) / (1000 * 60));

  document.getElementById("milliseconds").textContent = milliseconds.toString().padStart(3, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
}

document.getElementById("start").addEventListener("click", () => {
  if (!isRunning) {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 10);
    isRunning = true;
  }
});

document.getElementById("stop").addEventListener("click", () => {
  if (isRunning) {
    clearInterval(timerInterval);
    elapsedTime += Date.now() - startTime;
    isRunning = false;
  }
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(timerInterval);
  elapsedTime = 0;
  isRunning = false;
  document.getElementById("milliseconds").textContent = "000";
  document.getElementById("seconds").textContent = "00";
  document.getElementById("minutes").textContent = "00";
});