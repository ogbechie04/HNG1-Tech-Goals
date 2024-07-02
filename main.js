const currentDay = document.querySelector("#current-day");
const currentTime = document.querySelector("#timeUTC");

function updateCurrentTime() {
  const today = new Date();
  const utcTime = today.toUTCString().split(" ")[4];
  currentTime.textContent = utcTime;

  const daysNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const todayDay = daysNames[today.getUTCDay()];
  currentDay.textContent = todayDay;
}

setInterval(updateCurrentTime, 1000);

updateCurrentTime();
