const refs = {
  day: document.querySelector(".js-day"),
  date: document.querySelector(".js-date"),
  month: document.querySelector(".js-month"),
  year: document.querySelector(".js-year"),
  clock: document.querySelector(".js-digital-clock"),
  seconds: document.querySelector(".clock-seconds__arrow"),
  minutes: document.querySelector(".clock-minutes__arrow"),
  hours: document.querySelector(".clock-hours__arrow"),
};

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const currentDate = new Date();

const day = currentDate.getDay();
const date = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();
const time = currentDate.toLocaleTimeString("en-GB");

refs.day.textContent = `Day of the week: ${days[day]}`;
refs.date.textContent = `Day of the month: ${date}`;
refs.month.textContent = `Month: ${months[month]}`;
refs.year.textContent = `Year: ${year}`;
refs.clock.textContent = `Time: ${time}`;

const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
const secondsDeg = 6 * seconds;
const minutesDeg = 6 * minutes;
const hoursDeg = 30 * hours + 0.5 * minutes;

refs.seconds.style.transform = `translateX(-50%) rotate(${secondsDeg}deg)`;
refs.minutes.style.transform = `translateX(-50%) rotate(${minutesDeg}deg)`;
refs.hours.style.transform = `translateX(-50%) rotate(${hoursDeg}deg)`;

setInterval(() => {
  const currentDate = new Date();

  const day = currentDate.getDay();
  const date = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const time = currentDate.toLocaleTimeString("en-GB");

  refs.day.textContent = `Day of the week: ${days[day]}`;
  refs.date.textContent = `Day of the month: ${date}`;
  refs.month.textContent = `Month: ${months[month]}`;
  refs.year.textContent = `Year: ${year}`;
  refs.clock.textContent = `Time: ${time}`;

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const secondsDeg = 6 * seconds;
  const minutesDeg = 6 * minutes;
  const hoursDeg = 30 * hours + 0.5 * minutes;

  refs.seconds.style.transform = `translateX(-50%) rotate(${secondsDeg}deg)`;
  refs.minutes.style.transform = `translateX(-50%) rotate(${minutesDeg}deg)`;
  refs.hours.style.transform = `translateX(-50%) rotate(${hoursDeg}deg)`;
}, 1000);
