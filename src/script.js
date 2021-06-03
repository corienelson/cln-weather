let cityInput = document.querySelector("#city-input");
let city = "";

function search(event) {
  event.preventDefault();
  let h2 = document.querySelector("h2");
  if (cityInput.value) {
    h2.innerHTML = `${cityInput.value}`;
    let apiKey = "f497dd013770ffc0e7b4a6160611c850";
    city = document.querySelector("#city-input").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(getTemperature);
  } else {
    h2.innerHTML = null;
    alert("please type a city");
  }
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function getForcast(coordinates) {
  let apiKey = "f497dd013770ffc0e7b4a6160611c850";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=imperial`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayForecast);
}
function displayForecast(response) {
  console.log(response.data);
}
function getTemperature(response) {
  let tempRound = Math.round(response.data.main.temp);
  let conditionsElement = document.querySelector("#conditions");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedRound = Math.round(response.data.wind.speed);
  let windSpeedElement = document.querySelector("#windSpeed");
  let iconElement = document.querySelector("#icon");

  let h4 = document.querySelector("h4");
  h4.innerHTML = `${tempRound}<span class= "units">
            °F</span>`;
  console.log(response.data);

  conditionsElement.innerHTML = `${response.data.weather[0].description}`;
  humidityElement.innerHTML = `Humidity %: ${response.data.main.humidity}`;
  windSpeedElement.innerHTML = `Wind Speed MPH: ${windSpeedRound}`;
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);

  getForecast(response.data.coord);
}

let now = new Date();

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

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let hour = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let h3 = document.querySelector("h3");
let date = now.getDate();
let year = now.getFullYear();

h3.innerHTML = `${day}, ${month} ${date}, ${year}  ${hour}:${minutes}`;
