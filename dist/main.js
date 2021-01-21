/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteDOM\": () => /* binding */ deleteDOM,\n/* harmony export */   \"populateDOM\": () => /* binding */ populateDOM,\n/* harmony export */   \"writeError\": () => /* binding */ writeError,\n/* harmony export */   \"resetErrorMsg\": () => /* binding */ resetErrorMsg\n/* harmony export */ });\nfunction deleteDOM() {\n  while (weatherDisplay.childNodes.length > 0) {\n    weatherDisplay.lastChild.remove();\n  }\n}\n\nfunction populateHeader(weatherData) {\n  const header = document.createElement(\"header\");\n\n  const div = document.createElement(\"div\");\n\n  const weatherDescr = document.createElement(\"p\");\n  weatherDescr.classList.add(\"weather-descr\");\n  weatherDescr.textContent = weatherData.weather;\n\n  const location = document.createElement(\"p\");\n  location.classList.add(\"weather-location\");\n  location.textContent = `${weatherData.location}, ${weatherData.country}`;\n\n  div.appendChild(weatherDescr);\n  div.appendChild(location);\n\n  const flag = document.createElement(\"img\");\n  flag.src = `https://www.countryflags.io/${weatherData.country.toLowerCase()}/shiny/64.png`;\n  flag.setAttribute(\"alt\", weatherData.country);\n\n  header.appendChild(div);\n  header.appendChild(flag);\n\n  return header;\n}\n\nfunction populateMain(weatherData) {\n  const main = document.createElement(\"main\");\n  main.classList.add(\"grid-container\");\n\n  // First column\n  const col1 = document.createElement(\"div\");\n  col1.classList.add(\"col-6\");\n\n  const temperature = document.createElement(\"p\");\n  temperature.classList.add(\"big\");\n  temperature.textContent = weatherData.temperature;\n\n  const unit = document.createElement(\"span\");\n  unit.classList.add(\"temp-unit\");\n  unit.textContent = \"° C\";\n\n  temperature.appendChild(unit);\n\n  const tempMin = document.createElement(\"p\");\n  tempMin.classList.add(\"text-secondary\");\n  tempMin.textContent = `min: ${weatherData.tempMin}° C`;\n\n  const tempMax = document.createElement(\"p\");\n  tempMax.classList.add(\"text-secondary\");\n  tempMax.textContent = `max: ${weatherData.tempMax}° C`;\n\n  col1.appendChild(temperature);\n  col1.appendChild(tempMin);\n  col1.appendChild(tempMax);\n\n  // Second column\n  const col2 = document.createElement(\"div\");\n  col2.classList.add(\"col-6\");\n\n  // icons see: https://openweathermap.org/weather-conditions#How-to-get-icon-URL\n  const icon = document.createElement(\"img\");\n  icon.src = `http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`;\n  icon.setAttribute(\"alt\", `${weatherData.weather}`);\n\n  // add in a Slider to change from Celsius to Fahrenheit\n\n  col2.appendChild(icon);\n\n  main.appendChild(col1);\n  main.appendChild(col2);\n\n  return main;\n}\n\nfunction populateContainer(weatherData) {\n  const container = document.createElement(\"div\");\n  container.classList.add(\"container\");\n\n  const header = populateHeader(weatherData);\n  const main = populateMain(weatherData);\n\n  container.appendChild(header);\n  container.appendChild(main);\n\n  return container;\n}\n\nfunction populateFooter(weatherData) {\n  const footer = document.createElement(\"footer\");\n  footer.classList.add(\"grid-container\");\n\n  // Column 1\n  const col1 = document.createElement(\"div\");\n  col1.classList.add(\"col-6\");\n\n  const feeling = document.createElement(\"div\");\n  const feelingDescr = document.createElement(\"p\");\n  feelingDescr.classList.add(\"text-secondary\");\n  feelingDescr.textContent = \"Feels like\";\n  const feelingData = document.createElement(\"p\");\n  feelingData.textContent = `${weatherData.feelsLike}° C`;\n  feeling.appendChild(feelingDescr);\n  feeling.appendChild(feelingData);\n\n  const humidity = document.createElement(\"div\");\n  const humidityDescr = document.createElement(\"p\");\n  humidityDescr.classList.add(\"text-secondary\");\n  humidityDescr.textContent = \"Humidity\";\n  const humidityData = document.createElement(\"p\");\n  humidityData.textContent = `${weatherData.humidity}%`;\n  humidity.appendChild(humidityDescr);\n  humidity.appendChild(humidityData);\n\n  const wind = document.createElement(\"div\");\n  const windDescr = document.createElement(\"p\");\n  windDescr.classList.add(\"text-secondary\");\n  windDescr.textContent = \"Wind\";\n  const windData = document.createElement(\"p\");\n  windData.textContent = `${weatherData.wind} km/h`;\n  wind.appendChild(windDescr);\n  wind.appendChild(windData);\n\n  col1.appendChild(feeling);\n  col1.appendChild(humidity);\n  col1.appendChild(wind);\n\n  // Column 2\n  const col2 = document.createElement(\"div\");\n  col2.classList.add(\"col-6\");\n\n  const sunrise = document.createElement(\"div\");\n  const sunriseDescr = document.createElement(\"p\");\n  sunriseDescr.classList.add(\"text-secondary\");\n  sunriseDescr.textContent = \"Sunrise\";\n  const sunriseData = document.createElement(\"p\");\n  sunriseData.textContent = weatherData.sunrise;\n  sunrise.appendChild(sunriseDescr);\n  sunrise.appendChild(sunriseData);\n\n  const sunset = document.createElement(\"div\");\n  const sunsetDescr = document.createElement(\"p\");\n  sunsetDescr.classList.add(\"text-secondary\");\n  sunsetDescr.textContent = \"Sunset\";\n  const sunsetData = document.createElement(\"p\");\n  sunsetData.textContent = weatherData.sunset;\n  sunset.appendChild(sunsetDescr);\n  sunset.appendChild(sunsetData);\n\n  const localTime = document.createElement(\"div\");\n  const localTimeDescr = document.createElement(\"p\");\n  localTimeDescr.classList.add(\"text-secondary\");\n  localTimeDescr.textContent = \"Local time\";\n  const localTimeData = document.createElement(\"p\");\n  localTimeData.textContent = weatherData.timezone;\n  localTime.appendChild(localTimeDescr);\n  localTime.appendChild(localTimeData);\n\n  col2.appendChild(sunrise);\n  col2.appendChild(sunset);\n  col2.appendChild(localTime);\n\n  footer.appendChild(col1);\n  footer.appendChild(col2);\n\n  return footer;\n}\n\nfunction populateDOM(weatherData) {\n  const container = populateContainer(weatherData);\n  const footer = populateFooter(weatherData);\n\n  weatherDisplay.appendChild(container);\n  weatherDisplay.appendChild(footer);\n}\n\nfunction writeError(message) {\n  errorInfo.textContent = message;\n}\n\nfunction resetErrorMsg() {\n  errorInfo.textContent = \"\";\n}\n\nconst weatherDisplay = document.querySelector(\".weather-display\");\nconst errorInfo = document.querySelector(\".error-info\");\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n\n\nconst weather = (() => {\n  async function getWeather(location) {\n    try {\n      const response = await fetch(\n        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=04677966a703b0124f576651b3349deb&units=metric`\n      );\n\n      // extra handling of 404, since this will be the most common one\n      if (response.status === 404) {\n        _display__WEBPACK_IMPORTED_MODULE_0__.writeError(\"Couldn't find this place...\");\n      } else if (!response.ok) {\n        _display__WEBPACK_IMPORTED_MODULE_0__.writeError(\"Something went wrong\");\n      } else {\n        const weather = await response.json();\n        return weather;\n      }\n    } catch (err) {\n      // the catch block activates only on network error, NOT when a response with an error-code is received. These cases have to be handled above in the try-block.\n      _display__WEBPACK_IMPORTED_MODULE_0__.writeError(err.message);\n    }\n  }\n\n  async function createWeatherObject(location) {\n    // helpers for dates\n    function getTime(secs) {\n      // openweathermap returns seconds, so they are multiplied with 1000 to get the milliseconds required to construct the correct date\n      const date = new Date(secs * 1000);\n      const hours =\n        date.getHours().toString().length < 2\n          ? \"0\" + date.getHours().toString()\n          : date.getHours().toString();\n\n      const minutes =\n        date.getMinutes().toString().length < 2\n          ? \"0\" + date.getMinutes().toString()\n          : date.getMinutes().toString();\n\n      return `${hours}:${minutes}`;\n    }\n\n    function localTime(offset) {\n      const date = new Date();\n      let hours = date.getUTCHours();\n      const hourOffset = (offset / 3600).toFixed(0);\n      hours += Number(hourOffset);\n      if (hours >= 24) hours -= 24;\n\n      hours =\n        hours.toString().length < 2 ? \"0\" + hours.toString() : hours.toString();\n\n      const minutes =\n        date.getUTCMinutes().toString().length < 2\n          ? \"0\" + date.getUTCMinutes().toString()\n          : date.getUTCMinutes().toString();\n\n      return `${hours}:${minutes}`;\n    }\n\n    // create an Object with the relevant data\n    try {\n      const data = await getWeather(location);\n\n      return {\n        location: data.name,\n        country: data.sys.country,\n        temperature: data.main.temp.toFixed(1),\n        tempMin: data.main.temp_min.toFixed(1),\n        tempMax: data.main.temp_max.toFixed(1),\n        feelsLike: data.main.feels_like.toFixed(1),\n        humidity: data.main.humidity,\n        weather: data.weather[0].description,\n        icon: data.weather[0].icon,\n        wind: (data.wind.speed * 3.6).toFixed(1), //default is meter/second. Multipy with 3.6 to convert in km/h\n        sunrise: getTime(data.sys.sunrise),\n        sunset: getTime(data.sys.sunset),\n        timezone: localTime(data.timezone), //this is the shift from UTC in seconds. Calculate local time base on this\n      };\n    } catch (err) {}\n  }\n\n  const displayWeather = async function (e) {\n    e.preventDefault(); // prevent form from reloading the page\n    const location = e.target.querySelector(\"input[type='search']\").value;\n\n    try {\n      const weatherObject = await createWeatherObject(location);\n\n      _display__WEBPACK_IMPORTED_MODULE_0__.deleteDOM();\n      _display__WEBPACK_IMPORTED_MODULE_0__.populateDOM(weatherObject);\n\n      //reset error-message\n      _display__WEBPACK_IMPORTED_MODULE_0__.resetErrorMsg();\n    } catch (err) {}\n  };\n\n  const test = () => console.log(\"I work\");\n\n  return { displayWeather, test };\n})();\n\nconst search = document.querySelector(\"#weather-search\");\nsearch.addEventListener(\"submit\", weather.displayWeather);\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;