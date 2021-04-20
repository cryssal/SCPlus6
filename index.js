let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let dateSection = document.querySelector(".dateID");
dateSection.innerHTML = `${day}`;

let hours = now.getHours();
let minutes = now.getMinutes();

let timeSection = document.querySelector(".timeID");
timeSection.innerHTML = `${hours}:${minutes}`;

function updateFields(response) {
  let changeID = document.querySelector(".cityID");
  changeID.innerHTML = `${response.data.name}`;
  let temp = document.querySelector(".tempID");
  temp.innerHTML = Math.round(`${response.data.main.temp}`);
  let humidity = document.querySelector(".humidity");
  humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;
  let wind = document.querySelector(".windID");
  let windspeed = Math.round(`${response.data.wind.speed}`);
  wind.innerHTML = `Wind: ${windspeed}km/h`;
  let climate = document.querySelector(".climateID");
  climate.innerHTML = `${response.data.weather[0].description}`;
}

function search(city) {
  let apiKey = "f89d13cfac7dd62621a738e536c0cd6f";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(updateFields);
}

function handleSubmit(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#city-input").value;
  search(inputCity);
}

let button = document.querySelector("button");
button.addEventListener("click", handleSubmit);

search("New York");
