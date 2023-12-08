function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let idStart = null;

const startColor = () => {
  btnStart.disabled = true;
  btnStop.disabled = false;
  idStart = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

const stopColor = () => {
  btnStart.disabled = false;
  btnStop.disabled = true;
  clearInterval(idStart);
};

btnStart.addEventListener('click', startColor);
btnStop.addEventListener('click', stopColor);
