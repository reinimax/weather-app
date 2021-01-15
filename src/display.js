function deleteDOM() {
  while (weatherDisplay.childNodes.length > 0) {
    weatherDisplay.lastChild.remove();
  }
}

function populateDOM(weatherData) {
  const weatherDescr = document.createElement("p");
  weatherDescr.textContent = weatherData.weather;

  const location = document.createElement("p");
  location.textContent = `${weatherData.location}, ${weatherData.country}`;

  const temperature = document.createElement("p");
  temperature.textContent = `${weatherData.temperature}° C`;

  // icons see: https://openweathermap.org/weather-conditions#How-to-get-icon-URL
  const icon = document.createElement("img");
  icon.src = `http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`;
  icon.setAttribute("alt", `${weatherData.weather}`);

  weatherDisplay.appendChild(weatherDescr);
  weatherDisplay.appendChild(location);
  weatherDisplay.appendChild(temperature);
  weatherDisplay.appendChild(icon);
}

const weatherDisplay = document.querySelector(".weather-display");

export { deleteDOM, populateDOM };
