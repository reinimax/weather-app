import * as display from "./display";

const weather = (() => {
  async function getWeather(location) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=04677966a703b0124f576651b3349deb&units=metric`
      );

      // extra handling of 404, since this will be the most common one
      if (response.status === 404) {
        display.writeError("Couldn't find this place...");
      } else if (!response.ok) {
        display.writeError("Something went wrong");
      } else {
        const weather = await response.json();
        return weather;
      }
    } catch (err) {
      // the catch block activates only on network error, NOT when a response with an error-code is received. These cases have to be handled above in the try-block.
      display.writeError(err.message);
    }
  }

  async function createWeatherObject(location) {
    // helpers for dates
    function getTime(secs) {
      // openweathermap returns seconds, so they are multiplied with 1000 to get the milliseconds required to construct the correct date
      const date = new Date(secs * 1000);
      const hours =
        date.getHours().toString().length < 2
          ? "0" + date.getHours().toString()
          : date.getHours().toString();

      const minutes =
        date.getMinutes().toString().length < 2
          ? "0" + date.getMinutes().toString()
          : date.getMinutes().toString();

      return `${hours}:${minutes}`;
    }

    function localTime(offset) {
      const date = new Date();
      let hours = date.getUTCHours();
      const hourOffset = (offset / 3600).toFixed(0);
      hours += Number(hourOffset);
      if (hours >= 24) hours -= 24;

      hours =
        hours.toString().length < 2 ? "0" + hours.toString() : hours.toString();

      const minutes =
        date.getUTCMinutes().toString().length < 2
          ? "0" + date.getUTCMinutes().toString()
          : date.getUTCMinutes().toString();

      return `${hours}:${minutes}`;
    }

    // create an Object with the relevant data
    try {
      const data = await getWeather(location);

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
    } catch (err) {}
  }

  const displayWeather = async function (e) {
    e.preventDefault(); // prevent form from reloading the page
    const location = e.target.querySelector("input[type='search']").value;

    try {
      const weatherObject = await createWeatherObject(location);

      display.deleteDOM();
      display.populateDOM(weatherObject);

      //reset error-message
      display.resetErrorMsg();
    } catch (err) {}
  };

  const test = () => console.log("I work");

  return { displayWeather, test };
})();

const search = document.querySelector("#weather-search");
search.addEventListener("submit", weather.displayWeather);
