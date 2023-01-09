const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function handleStart() {
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
}

function handleStop() {
  clearInterval(intervalId);
  startBtn.disabled = false;
}

startBtn.addEventListener('click', handleStart);
stopBtn.addEventListener('click', handleStop);

//comment for purpose, can delete