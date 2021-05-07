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

function getTemperature(response) {
  let tempRound = Math.round(response.data.main.temp);

  let h3 = document.querySelector("h3");
  h3.innerHTML = `<strong><larger>${tempRound}</larger></strong>  <sup>°F</sup>`;
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

let h4 = document.querySelector("h4");
let date = now.getDate();
let year = now.getFullYear();

h4.innerHTML = `${day}, ${month} ${date}, ${year}.  ${hour}:${minutes}`;
