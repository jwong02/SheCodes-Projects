//Current Date + Time
let now = new Date();
let dateElement = document.querySelector("#current-date");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
dateElement.innerHTML = `${day} ${hours}:${minutes}`;

//Display city on page
function citySearch(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let mainCity = document.querySelector(".main-city");
  mainCity.innerHTML = `${cityInput.value}`;
}

let form = document.querySelector("#city-form");
form.addEventListener("submit", citySearch);

//Convert temperature
function convertCelsius() {
  let cLink = document.querySelector(".main-temp");
  cLink.innerHTML = "19";
}

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", convertCelsius);

function convertfahrenheit() {
  let fLink = document.querySelector(".main-temp");
  fLink.innerHTML = "60";
}

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", convertfahrenheit);
