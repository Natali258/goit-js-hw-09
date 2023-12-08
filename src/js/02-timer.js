import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const onInput = document.querySelector('input#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const daysRemaining = document.querySelector('[data-days]');
const hoursRemaining = document.querySelector('[data-hours]');
const minutesRemaining = document.querySelector('[data-minutes]');
const secondsRemaining = document.querySelector('[data-seconds]');

let inputDate;
let date;
let dateDiff;
let interval;
const activeStart = () => {
  dateDiff = inputDate - date;

  const taimerFu = () => {
    if (dateDiff <= 1000) {
      clearInterval(interval);
    }

    const { days, hours, minutes, seconds } = convertMs(dateDiff);
    daysRemaining.textContent = addLeadingZero(days);
    hoursRemaining.textContent = addLeadingZero(hours);
    minutesRemaining.textContent = addLeadingZero(minutes);
    secondsRemaining.textContent = addLeadingZero(seconds);

    dateDiff -= 1000;
  };
  interval = setInterval(taimerFu, 1000);
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    inputDate = selectedDates[0].getTime();
    date = new Date().getTime();
    if (inputDate < date) {
      window.alert('Please choose a date in the future');
      btnStart.disabled = true;
    } else {
      btnStart.disabled = false;
    }
  },
};
flatpickr(onInput, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

btnStart.addEventListener('click', activeStart);
