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

function displayTemp(response) {
  document.querySelector(".main-city").innerHTML = response.data.name;
  let currentTemp = Math.round(response.data.main.temp);
  document.querySelector(".main-temp").innerHTML = `${currentTemp}`;
  document.querySelector("#max-temp").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#min-temp").innerHTML = Math.round(
    response.data.main.temp_min
  );
}

function search(city) {
  let apiKey = "e37af8b7e5570ed34e9bd67d3c3d2d12";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayTemp);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  search(city);
}

let form = document.querySelector("#city-form");
form.addEventListener("submit", handleSubmit);

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

search("New York");
