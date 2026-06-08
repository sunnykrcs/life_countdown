const birthDate = new Date("2004-08-04");
const lifeExpectancyYears = 60;

const endDate = new Date(
  birthDate.getFullYear() + lifeExpectancyYears,
  birthDate.getMonth(),
  birthDate.getDate()
);

function updateTimer() {
  let diff = endDate - new Date();

  if (diff < 0) diff = 0;

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  diff %= (1000 * 60 * 60 * 24 * 365);

  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  diff %= (1000 * 60 * 60 * 24 * 30);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff %= (1000 * 60 * 60 * 24);

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff %= (1000 * 60 * 60);

  const minutes = Math.floor(diff / (1000 * 60));
  diff %= (1000 * 60);

  const seconds = Math.floor(diff / 1000);

  const ms = Math.floor((diff % 1000) / 10);

    document.getElementById("ms").textContent =
    String(ms).padStart(2,"0");

  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateTimer();
setInterval(updateTimer, 10);