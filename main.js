let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let dateDeff = countDownDate - dateNow;

  //Get time units
  let days = Math.floor(dateDeff / 1000 / 60 / 60 / 24);

  let hours = Math.floor((dateDeff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);

  let minutes = Math.floor((dateDeff % (1000 * 60 * 60)) / 1000 / 60);
  let seconds = Math.floor((dateDeff % (1000 * 60)) / 1000);

  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".seconds").innerHTML = seconds;
}, 1000);
