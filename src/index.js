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

  // helpers for dates
  function getTime(secs) {
    // openweathermap returns seconds, so they are multiplied with 1000 to get the milliseconds required to construct the correct date
    const date = new Date(secs * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes}`;
  }

  function localTime(offset) {
    const date = new Date();
    let hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();

    const hourOffset = (offset / 3600).toFixed(0);
    hours += Number(hourOffset);
    if (hours >= 24) hours -= 24;

    return `${hours}:${minutes}`;
  }
  return {
    location: data.name,
    country: data.sys.country,
    temperature: data.main.temp.toFixed(1),
    tempMin: data.main.temp_min.toFixed(1),
    tempMax: data.main.temp_max.toFixed(1),
    feelsLike: data.main.feels_like.toFixed(1),
    humidity: data.main.humidity,
    weather: data.weather[0].description,
    icon: data.weather[0].icon,
    wind: (data.wind.speed * 3.6).toFixed(1), //default is meter/second. Multipy with 3.6 to convert in km/h
    sunrise: getTime(data.sys.sunrise),
    sunset: getTime(data.sys.sunset),
    timezone: localTime(data.timezone), //this is the shift from UTC in seconds. Calculate local time base on this
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
