import * as display from "./display";

async function getWeather(location) {
  // TODO: add error-catching!
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=04677966a703b0124f576651b3349deb&units=metric`
  );

  const weather = await response.json();
  return weather;
}

async function createWeatherObject(location) {
  const data = await getWeather(location);
  // log data for reference for now
  console.log(data);
  return {
    location: data.name,
    country: data.sys.country,
    temperature: data.main.temp,
    weather: data.weather[0].description,
    icon: data.weather[0].icon,
    wind: data.wind.speed,
    cloudiness: data.clouds.all,
  };
}

async function displayWeather(e) {
  e.preventDefault(); // prevent form from reloading the page
  const location = e.target.querySelector("input[type='search']").value;

  const weatherObject = await createWeatherObject(location);
  console.log(weatherObject);

  display.deleteDOM();
  display.populateDOM(weatherObject);
}

const search = document.querySelector("#weather-search");
search.addEventListener("submit", displayWeather);
