/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// **=====VARIABLES=========**
var screenOutput = document.querySelector('#results');
var ceBtn = document.querySelector('#ce');
var percentBtn = document.querySelector('#percent');
var multiplyBtn = document.querySelector('#multiply');
var equalBtn = document.querySelector('#equal');
var numbersBtn = document.querySelectorAll('[data-value]');
var sumBtn = document.querySelector('.calculator-buttons-plus');
var divideBtn = document.querySelector('.calculator-buttons-divide');
var minusBtn = document.querySelector('.calculator-buttons-minus'); //**=====FUNCTIONS=========**

function sum(value1, value2) {
  console.log(value1 + value2);
}

function minus(value1, value2) {
  return value1 - value2;
}

function multiply(value1, value2) {
  return value1 * value2;
}

function divide(value1, value2) {
  return value1 / value2;
} //**=====EVENT LISTENERS=========**
//**=====NUMPAD=========**


numbersBtn.forEach(function (btn) {
  btn.addEventListener('click', function () {
    if (screenOutput.innerHTML += parseInt(btn.innerHTML)) screenOutput.innerHTML -= parseInt("0");
  });
}); //**===== CALC BUTTONS=========**

sumBtn.addEventListener('click', function () {
  screenOutput.innerHTML += sumBtn.value;
});
multiplyBtn.addEventListener('click', function () {
  screenOutput.innerHTML += multiplyBtn.value;
});
divideBtn.addEventListener('click', function () {
  screenOutput.innerHTML += divideBtn.value;
});
minusBtn.addEventListener('click', function () {
  screenOutput.innerHTML += minusBtn.value;
});
ceBtn.addEventListener('click', function () {
  screenOutput.innerHTML = parseInt("0");
}); // if(somthing){
//     do foo()
// }
//**=====Urrrrghhh hurrrr urrrghh Brains...Brains..ZombieCode=========**
// sumBtn.addEventListener('click', function(){
//      results.innerHTML = sumBtn.value;
// });
// numbersBtn.forEach(function(btn){
//     btn.addEventListener('click', function(){
//       results.innerHTML = btn.innerHTML
//     })
// });
// equalBtn.addEventListener('click', function(){
//     results.innerHTML = eval(results.innerHTML)
// });

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/main.js ./src/css/main.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/main.js */"./src/js/main.js");
module.exports = __webpack_require__(/*! ./src/css/main.css */"./src/css/main.css");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYWluLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6WyJzY3JlZW5PdXRwdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjZUJ0biIsInBlcmNlbnRCdG4iLCJtdWx0aXBseUJ0biIsImVxdWFsQnRuIiwibnVtYmVyc0J0biIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdW1CdG4iLCJkaXZpZGVCdG4iLCJtaW51c0J0biIsInN1bSIsInZhbHVlMSIsInZhbHVlMiIsImNvbnNvbGUiLCJsb2ciLCJtaW51cyIsIm11bHRpcGx5IiwiZGl2aWRlIiwiZm9yRWFjaCIsImJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbm5lckhUTUwiLCJwYXJzZUludCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtB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c0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCIvLyAqKj09PT09VkFSSUFCTEVTPT09PT09PT09KipcblxudmFyIHNjcmVlbk91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN1bHRzJyk7XG52YXIgY2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2UnKTtcbnZhciBwZXJjZW50QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BlcmNlbnQnKTtcbnZhciBtdWx0aXBseUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdWx0aXBseScpO1xudmFyIGVxdWFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VxdWFsJyk7XG52YXIgbnVtYmVyc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXZhbHVlXScpO1xudmFyIHN1bUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdG9yLWJ1dHRvbnMtcGx1cycpO1xudmFyIGRpdmlkZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdG9yLWJ1dHRvbnMtZGl2aWRlJyk7XG52YXIgbWludXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsY3VsYXRvci1idXR0b25zLW1pbnVzJyk7XG5cblxuXG4vLyoqPT09PT1GVU5DVElPTlM9PT09PT09PT0qKlxuXG5mdW5jdGlvbiBzdW0odmFsdWUxLCB2YWx1ZTIpe1xuICAgIGNvbnNvbGUubG9nKHZhbHVlMSArIHZhbHVlMik7XG59XG5cbmZ1bmN0aW9uIG1pbnVzKHZhbHVlMSwgdmFsdWUyKXtcbiAgICByZXR1cm4gdmFsdWUxIC0gdmFsdWUyO1xufVxuXG5mdW5jdGlvbiBtdWx0aXBseSh2YWx1ZTEsIHZhbHVlMil7XG4gICAgcmV0dXJuIHZhbHVlMSAqIHZhbHVlMjtcbn1cblxuZnVuY3Rpb24gZGl2aWRlKHZhbHVlMSwgdmFsdWUyKXtcbiAgICByZXR1cm4gdmFsdWUxIC8gdmFsdWUyO1xufVxuXG4vLyoqPT09PT1FVkVOVCBMSVNURU5FUlM9PT09PT09PT0qKlxuLy8qKj09PT09TlVNUEFEPT09PT09PT09KipcblxubnVtYmVyc0J0bi5mb3JFYWNoKGZ1bmN0aW9uKGJ0bil7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKHNjcmVlbk91dHB1dC5pbm5lckhUTUwgKz0gcGFyc2VJbnQoYnRuLmlubmVySFRNTCkpIHNjcmVlbk91dHB1dC5pbm5lckhUTUwgLT0gcGFyc2VJbnQoXCIwXCIpO1xuICAgIH0pXG59KVxuXG4vLyoqPT09PT0gQ0FMQyBCVVRUT05TPT09PT09PT09Kipcblxuc3VtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBzY3JlZW5PdXRwdXQuaW5uZXJIVE1MICs9IHN1bUJ0bi52YWx1ZTtcbiAgICB9KVxuXG5tdWx0aXBseUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICBzY3JlZW5PdXRwdXQuaW5uZXJIVE1MICs9IG11bHRpcGx5QnRuLnZhbHVlO1xuICAgIH0pXG5cbmRpdmlkZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgc2NyZWVuT3V0cHV0LmlubmVySFRNTCArPSBkaXZpZGVCdG4udmFsdWU7XG4gICAgfSkgICAgXG5cbm1pbnVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBzY3JlZW5PdXRwdXQuaW5uZXJIVE1MICs9IG1pbnVzQnRuLnZhbHVlO1xuICAgIH0pICAgIFxuXG5jZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgc2NyZWVuT3V0cHV0LmlubmVySFRNTCA9IHBhcnNlSW50KFwiMFwiKTtcbn0pO1xuXG5cblxuXG4vLyBpZihzb210aGluZyl7XG4vLyAgICAgZG8gZm9vKClcbi8vIH1cblxuXG5cblxuXG5cbi8vKio9PT09PVVycnJyZ2hoaCBodXJycnIgdXJycmdoaCBCcmFpbnMuLi5CcmFpbnMuLlpvbWJpZUNvZGU9PT09PT09PT0qKlxuXG4vLyBzdW1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuLy8gICAgICByZXN1bHRzLmlubmVySFRNTCA9IHN1bUJ0bi52YWx1ZTtcbi8vIH0pO1xuXG4vLyBudW1iZXJzQnRuLmZvckVhY2goZnVuY3Rpb24oYnRuKXtcbi8vICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuLy8gICAgICAgcmVzdWx0cy5pbm5lckhUTUwgPSBidG4uaW5uZXJIVE1MXG4vLyAgICAgfSlcbi8vIH0pO1xuXG5cbi8vIGVxdWFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbi8vICAgICByZXN1bHRzLmlubmVySFRNTCA9IGV2YWwocmVzdWx0cy5pbm5lckhUTUwpXG4vLyB9KTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==