import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

let chosenTime = null;
const timeInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daySpan = document.querySelector('span[data-days]');
const hourSpan = document.querySelector('span[data-hours]');
const minuteSpan = document.querySelector('span[data-minutes]');
const secondSpan = document.querySelector('span[data-seconds]');
const timerDiv = document.querySelector('.timer');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    chosenTime = selectedDates[0];
    if (selectedDates[0] <= new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

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

function counterStart() {
  let timeLeft = chosenTime - new Date();
  let counterInterval = setInterval(() => {
    let convertedTime = timeLeft -= 1000;
    console.log(convertedTime);
    hourSpan.textContent = addLeadingZero(convertMs(convertedTime).hours);
    minuteSpan.textContent = addLeadingZero(convertMs(convertedTime).minutes);
    secondSpan.textContent = addLeadingZero(convertMs(convertedTime).seconds);
    if (convertMs(convertedTime).days < 10) {
      daySpan.textContent = addLeadingZero(convertMs(convertedTime).days);
    } else {
      daySpan.textContent = convertMs(convertedTime).days;
    }
    if (convertedTime <= 1000) {
      clearInterval(counterInterval);
    }
  }, 1000);
}

flatpickr(timeInput, options);

startBtn.disabled = true;
startBtn.addEventListener('click', counterStart);
