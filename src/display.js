function extractNum(string) {
  return Number(string.replace(/[^0-9\.]/g, ""));
}

// This is not elegant. I select the elements that contain temperatures, extract the raw number,
// convert it to Celsius/Fahrenheit and then put it back into the DOM. There should be a better
// pattern (maybe I shot myself a bit into the foot because I don't save my weather-object anywhere).
// Anyway, for now this is working.
function toggleUnit(e) {
  const unitDisplay = document.querySelector(".unit-display");
  const tempBig = document.querySelector("#temp-display-big");
  const tempUnit = document.createElement("span");
  tempUnit.classList.add("temp-unit");

  const tempMin = document.querySelector("#temp-min");
  const tempMax = document.querySelector("#temp-max");
  const feelsLike = document.querySelector("#feels-like");

  const temperatureMain = extractNum(tempBig.textContent);
  const temperatureMin = extractNum(tempMin.textContent);
  const temperatureMax = extractNum(tempMax.textContent);
  const temperatureFelt = extractNum(feelsLike.textContent);

  if (e.target.checked) {
    unitDisplay.textContent = "°F";
    tempBig.textContent = ((temperatureMain * 9) / 5 + 32).toFixed(1);
    tempUnit.textContent = "°F";
    tempMin.textContent = `min: ${((temperatureMin * 9) / 5 + 32).toFixed(
      1
    )} °F`;
    tempMax.textContent = `max: ${((temperatureMax * 9) / 5 + 32).toFixed(
      1
    )} °F`;
    feelsLike.textContent = `${((temperatureFelt * 9) / 5 + 32).toFixed(1)} °F`;
  } else {
    unitDisplay.textContent = "°C";
    tempBig.textContent = (((temperatureMain - 32) * 5) / 9).toFixed(1);
    tempUnit.textContent = "°C";
    tempMin.textContent = `min: ${(((temperatureMin - 32) * 5) / 9).toFixed(
      1
    )} °C`;
    tempMax.textContent = `max: ${(((temperatureMax - 32) * 5) / 9).toFixed(
      1
    )} °C`;
    feelsLike.textContent = `${(((temperatureFelt - 32) * 5) / 9).toFixed(
      1
    )} °C`;
  }
  tempBig.appendChild(tempUnit);
}

function deleteDOM() {
  while (weatherDisplay.childNodes.length > 0) {
    weatherDisplay.lastChild.remove();
  }
}

function populateHeader(weatherData) {
  const header = document.createElement("header");

  const div = document.createElement("div");

  const weatherDescr = document.createElement("p");
  weatherDescr.classList.add("weather-descr");
  weatherDescr.textContent = weatherData.weather;

  const location = document.createElement("p");
  location.classList.add("weather-location");
  location.textContent = `${weatherData.location}, ${weatherData.country}`;

  div.appendChild(weatherDescr);
  div.appendChild(location);

  const flag = document.createElement("img");
  flag.src = `https://www.countryflags.io/${weatherData.country.toLowerCase()}/shiny/64.png`;
  flag.setAttribute("alt", weatherData.country);

  header.appendChild(div);
  header.appendChild(flag);

  return header;
}

function populateMain(weatherData) {
  const main = document.createElement("main");
  main.classList.add("grid-container");

  // First column
  const col1 = document.createElement("div");

  const temperature = document.createElement("p");
  temperature.classList.add("big");
  temperature.setAttribute("id", "temp-display-big");
  temperature.textContent = weatherData.temperature;

  const unit = document.createElement("span");
  unit.classList.add("temp-unit");
  unit.textContent = " °C";

  temperature.appendChild(unit);

  const tempMin = document.createElement("p");
  tempMin.classList.add("text-secondary");
  tempMin.setAttribute("id", "temp-min");
  tempMin.textContent = `min: ${weatherData.tempMin} °C`;

  const tempMax = document.createElement("p");
  tempMax.classList.add("text-secondary");
  tempMax.setAttribute("id", "temp-max");
  tempMax.textContent = `max: ${weatherData.tempMax} °C`;

  const tempSwitch = document.createElement("div");
  tempSwitch.classList.add("temperature");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "unit");
  checkbox.addEventListener("change", toggleUnit);

  const label = document.createElement("label");
  label.setAttribute("for", "unit");
  label.classList.add("toggler");

  const span = document.createElement("span");
  span.setAttribute("id", "toggle-btn");

  label.appendChild(span);

  const units = document.createElement("span");
  units.classList.add("unit-display");
  units.textContent = "°C";

  tempSwitch.appendChild(checkbox);
  tempSwitch.appendChild(label);
  tempSwitch.appendChild(units);

  col1.appendChild(temperature);
  col1.appendChild(tempMin);
  col1.appendChild(tempMax);
  col1.appendChild(tempSwitch);

  // Second column
  const col2 = document.createElement("div");
  col2.classList.add("second-col");

  // icons see: https://openweathermap.org/weather-conditions#How-to-get-icon-URL
  const icon = document.createElement("img");
  icon.src = `http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`;
  icon.setAttribute("alt", `${weatherData.weather}`);

  col2.appendChild(icon);

  main.appendChild(col1);
  main.appendChild(col2);

  return main;
}

function populateContainer(weatherData) {
  const container = document.createElement("div");
  container.classList.add("container");

  const header = populateHeader(weatherData);
  const main = populateMain(weatherData);

  container.appendChild(header);
  container.appendChild(main);

  return container;
}

function populateFooter(weatherData) {
  const footer = document.createElement("footer");
  footer.classList.add("grid-container");

  // Column 1
  const col1 = document.createElement("div");
  col1.classList.add("col-6");

  const feeling = document.createElement("div");
  const feelingDescr = document.createElement("p");
  feelingDescr.classList.add("text-secondary");
  feelingDescr.textContent = "Feels like";
  const feelingData = document.createElement("p");
  feelingData.setAttribute("id", "feels-like");
  feelingData.textContent = `${weatherData.feelsLike} °C`;
  feeling.appendChild(feelingDescr);
  feeling.appendChild(feelingData);

  const humidity = document.createElement("div");
  const humidityDescr = document.createElement("p");
  humidityDescr.classList.add("text-secondary");
  humidityDescr.textContent = "Humidity";
  const humidityData = document.createElement("p");
  humidityData.textContent = `${weatherData.humidity}%`;
  humidity.appendChild(humidityDescr);
  humidity.appendChild(humidityData);

  const wind = document.createElement("div");
  const windDescr = document.createElement("p");
  windDescr.classList.add("text-secondary");
  windDescr.textContent = "Wind";
  const windData = document.createElement("p");
  windData.textContent = `${weatherData.wind} km/h`;
  wind.appendChild(windDescr);
  wind.appendChild(windData);

  col1.appendChild(feeling);
  col1.appendChild(humidity);
  col1.appendChild(wind);

  // Column 2
  const col2 = document.createElement("div");
  col2.classList.add("col-6");

  const sunrise = document.createElement("div");
  const sunriseDescr = document.createElement("p");
  sunriseDescr.classList.add("text-secondary");
  sunriseDescr.textContent = "Sunrise";
  const sunriseData = document.createElement("p");
  sunriseData.textContent = weatherData.sunrise;
  sunrise.appendChild(sunriseDescr);
  sunrise.appendChild(sunriseData);

  const sunset = document.createElement("div");
  const sunsetDescr = document.createElement("p");
  sunsetDescr.classList.add("text-secondary");
  sunsetDescr.textContent = "Sunset";
  const sunsetData = document.createElement("p");
  sunsetData.textContent = weatherData.sunset;
  sunset.appendChild(sunsetDescr);
  sunset.appendChild(sunsetData);

  const localTime = document.createElement("div");
  const localTimeDescr = document.createElement("p");
  localTimeDescr.classList.add("text-secondary");
  localTimeDescr.textContent = "Local time";
  const localTimeData = document.createElement("p");
  localTimeData.textContent = weatherData.timezone;
  localTime.appendChild(localTimeDescr);
  localTime.appendChild(localTimeData);

  col2.appendChild(sunrise);
  col2.appendChild(sunset);
  col2.appendChild(localTime);

  footer.appendChild(col1);
  footer.appendChild(col2);

  return footer;
}

function populateDOM(weatherData) {
  const container = populateContainer(weatherData);
  const footer = populateFooter(weatherData);

  weatherDisplay.appendChild(container);
  weatherDisplay.appendChild(footer);
}

function writeError(message) {
  errorInfo.textContent = message;
}

function resetErrorMsg() {
  errorInfo.textContent = "";
}

const weatherDisplay = document.querySelector(".weather-display");
const errorInfo = document.querySelector(".error-info");

export { deleteDOM, populateDOM, writeError, resetErrorMsg };
