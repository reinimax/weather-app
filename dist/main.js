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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteDOM\": () => /* binding */ deleteDOM,\n/* harmony export */   \"populateDOM\": () => /* binding */ populateDOM\n/* harmony export */ });\nfunction deleteDOM() {\n  while (weatherDisplay.childNodes.length > 0) {\n    weatherDisplay.lastChild.remove();\n  }\n}\n\nfunction populateDOM(weatherData) {\n  const weatherDescr = document.createElement(\"p\");\n  weatherDescr.textContent = weatherData.weather;\n\n  const location = document.createElement(\"p\");\n  location.textContent = `${weatherData.location}, ${weatherData.country}`;\n\n  const temperature = document.createElement(\"p\");\n  temperature.textContent = `${weatherData.temperature}° C`;\n\n  // icons see: https://openweathermap.org/weather-conditions#How-to-get-icon-URL\n  const icon = document.createElement(\"img\");\n  icon.src = `http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`;\n  icon.setAttribute(\"alt\", `${weatherData.weather}`);\n\n  weatherDisplay.appendChild(weatherDescr);\n  weatherDisplay.appendChild(location);\n  weatherDisplay.appendChild(temperature);\n  weatherDisplay.appendChild(icon);\n}\n\nconst weatherDisplay = document.querySelector(\".weather-display\");\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n\n\nasync function getWeather(location) {\n  // TODO: add error-catching!\n  const response = await fetch(\n    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=04677966a703b0124f576651b3349deb&units=metric`\n  );\n\n  const weather = await response.json();\n  return weather;\n}\n\nasync function createWeatherObject(location) {\n  const data = await getWeather(location);\n  // log data for reference for now\n  console.log(data);\n  return {\n    location: data.name,\n    country: data.sys.country,\n    temperature: data.main.temp,\n    weather: data.weather[0].description,\n    icon: data.weather[0].icon,\n    wind: data.wind.speed,\n    cloudiness: data.clouds.all,\n  };\n}\n\nasync function displayWeather(e) {\n  e.preventDefault(); // prevent form from reloading the page\n  const location = e.target.querySelector(\"input[type='search']\").value;\n\n  const weatherObject = await createWeatherObject(location);\n  console.log(weatherObject);\n\n  _display__WEBPACK_IMPORTED_MODULE_0__.deleteDOM();\n  _display__WEBPACK_IMPORTED_MODULE_0__.populateDOM(weatherObject);\n}\n\nconst search = document.querySelector(\"#weather-search\");\nsearch.addEventListener(\"submit\", displayWeather);\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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