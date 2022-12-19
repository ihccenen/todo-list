/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Montserrat.ttf */ "./src/Montserrat.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./flag.svg */ "./src/flag.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./radio_button_unchecked.svg */ "./src/radio_button_unchecked.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./radio_button_checked.svg */ "./src/radio_button_checked.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --light-blue: hsl(245, 48%, 91%);\r\n  --bright-red: hsl(1, 85%, 60%);\r\n  --bright-red-2: hsl(1, 85%, 55%);\r\n  --light-grayish-red: hsl(0, 60%, 99%);\r\n  --light-lime-green: hsl(123, 35%, 77%);\r\n  --light-lime-green-2: hsl(123, 35%, 70%);\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Montserrat';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\r\n}\r\n\r\n* {\r\n  font-family: 'Montserrat', sans-serif;\r\n  list-style: none;\r\n  text-decoration: none;\r\n  resize: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  letter-spacing: 0.5px;\r\n  line-height: 1.5;\r\n}\r\n\r\nbody {\r\n  font-size: 1.15rem;\r\n  box-sizing: border-box;\r\n}\r\n\r\nh1 {\r\n  font-size: 1.9rem;\r\n}\r\n\r\nh2 {\r\n  font-size: 1.4rem;\r\n}\r\n\r\nh3 {\r\n  font-size: 1.25rem;\r\n}\r\n\r\na {\r\n  color: inherit;\r\n  cursor: pointer;\r\n}\r\n\r\nlabel {\r\n  width: min-content;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  font-size: 1.1rem;\r\n  border-radius: 0.4em;\r\n  padding: 0.5em;\r\n  border: 1px solid var(--light-blue);\r\n}\r\n\r\n.grid-container {\r\n  display: grid;\r\n}\r\n\r\n.flex-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.input-container {\r\n  gap: 0.6rem;\r\n}\r\n\r\n.content {\r\n  flex-direction: row;\r\n  min-height: 100vh;\r\n}\r\n\r\nbutton {\r\n  padding: 0.5em 1em;\r\n  border-radius: 0.5em;\r\n  border: none;\r\n}\r\n\r\nbutton:enabled {\r\n  cursor: pointer;\r\n}\r\n\r\n.lime-green-btn:enabled {\r\n  background-color: var(--light-lime-green);\r\n}\r\n\r\n.lime-green-btn:enabled:hover {\r\n  background-color: var(--light-lime-green-2);\r\n}\r\n\r\n.red-btn {\r\n  background-color: var(--bright-red);\r\n  color: var(--light-grayish-red);\r\n}\r\n\r\n.red-btn:hover {\r\n  background-color: var(--bright-red-2);\r\n}\r\n\r\n.aside {\r\n  min-height: 100%;\r\n  width: 200px;\r\n  word-break: break-word;\r\n  border-right: 1px solid black;\r\n  padding: 1em;\r\n}\r\n\r\n.new-project-btn {\r\n  font-size: 1rem;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.projects-ul {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.project-title-li {\r\n  padding: 0.3em;\r\n}\r\n\r\n.project-title-li > a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.project-form {\r\n  gap: 2rem;\r\n}\r\n\r\n.form-btn-container {\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n.project-container {\r\n  flex-grow: 1;\r\n  gap: 2rem;\r\n  padding: 1em;\r\n}\r\n\r\n.project-title-container {\r\n  flex-direction: row;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  word-break: break-all;\r\n}\r\n\r\n.edit-title-btn {\r\n  margin-inline: 0.5rem auto;\r\n}\r\n\r\n.add-todo-form {\r\n  grid-template-areas:\r\n    'input     input  '\r\n    'left-side right-side';\r\n}\r\n\r\n.todo-title-input {\r\n  grid-area: input;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.add-todo-btn {\r\n  grid-area: left-side;\r\n  max-width: min-content;\r\n}\r\n\r\n.todo-form-right-side {\r\n  grid-area: right-side;\r\n  justify-self: end;\r\n}\r\n\r\n.todo-date-input {\r\n  padding: 0.23em;\r\n  margin-right: 0.4rem;\r\n}\r\n\r\n.priority-fieldset {\r\n  flex-direction: row;\r\n  gap: 1rem;\r\n  border: none;\r\n}\r\n\r\n.priority-fieldset > legend {\r\n  margin-bottom: 0.7rem;\r\n}\r\n\r\n.radio-container {\r\n  position: relative;\r\n  max-width: min-content;\r\n}\r\n\r\n.priority-radio {\r\n  border: 0;\r\n  clip: rect(0 0 0 0);\r\n  height: 1px;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  padding: 0;\r\n  position: absolute;\r\n  width: 1px;\r\n}\r\n\r\n.priority-label {\r\n  display: block;\r\n  left: 0;\r\n  width: 34px;\r\n  height: 34px;\r\n}\r\n\r\n.priority-label::before {\r\n  content: '';\r\n  position: absolute;\r\n  width: 42px;\r\n  height: 42px;\r\n  mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  mask-repeat: no-repeat;\r\n  opacity: 0.2;\r\n}\r\n\r\n.priority-label:hover::before {\r\n  opacity: 1;\r\n  cursor: pointer;\r\n}\r\n\r\n.priority-radio:checked + .priority-label::before {\r\n  opacity: 1;\r\n}\r\n\r\n.red-priority-label::before {\r\n  background-color: red;\r\n}\r\n\r\n.orange-priority-label::before {\r\n  background-color: orange;\r\n}\r\n\r\n.blue-priority-label::before {\r\n  background-color: blue;\r\n}\r\n\r\n.gray-priority-label::before {\r\n  background-color: gray;\r\n}\r\n\r\n.todo-priority-red {\r\n  order: 1;\r\n}\r\n\r\n.incomplete-btn.priority-red-status-btn {\r\n  background-color: red;\r\n}\r\n\r\n.todo-priority-orange {\r\n  order: 2;\r\n}\r\n\r\n.incomplete-btn.priority-orange-status-btn {\r\n  background-color: orange;\r\n}\r\n\r\n.todo-priority-blue {\r\n  order: 3;\r\n}\r\n\r\n.incomplete-btn.priority-blue-status-btn {\r\n  background-color: blue;\r\n}\r\n\r\n.todo-priority-gray {\r\n  order: 4;\r\n}\r\n\r\n.todo-container {\r\n  gap: 2rem;\r\n  margin-bottom: 2rem;\r\n  padding: 1em;\r\n  border-radius: 0.5em;\r\n}\r\n\r\n.todo-top-container {\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.incomplete-btn {\r\n  background-color: gray;\r\n  mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n  mask-repeat: no-repeat;\r\n  padding: 0;\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n.complete-btn {\r\n  background-color: green;\r\n  mask-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n  mask-repeat: no-repeat;\r\n  padding: 0;\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n.todo-container p {\r\n  white-space: pre-wrap;\r\n}\r\n\r\n.todo-title {\r\n  margin-inline: 1rem auto;\r\n}\r\n\r\n.details-container {\r\n  gap: 2rem;\r\n}\r\n\r\n.checklist-item-container {\r\n  flex-direction: row;\r\n  gap: 0.4rem;\r\n  margin-top: 1rem;\r\n  padding: 0.3em 0.3em;\r\n  border-radius: 0.5em;\r\n  align-items: center;\r\n}\r\n\r\n.todo-bottom-container {\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n.checklist-text {\r\n  width: 200px;\r\n  min-height: 20px;\r\n  background-color: white;\r\n}\r\n\r\n.edit-todo-form {\r\n  gap: 2rem;\r\n}\r\n\r\n.status-fieldset {\r\n  gap: 1rem;\r\n  padding-block: 1em;\r\n}\r\n\r\n.todo-status-select {\r\n  font-size: 0.9rem;\r\n  padding: 1em;\r\n  max-width: min-content;\r\n}\r\n\r\n.details-modal,\r\n.checklist-modal {\r\n  gap: 2rem;\r\n}\r\n\r\n.modal {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 300px;\r\n  z-index: 2;\r\n  padding: 1.5em;\r\n  border-radius: 1em;\r\n  background-color: antiquewhite;\r\n}\r\n\r\n.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  background-color: aqua;\r\n  z-index: 1;\r\n  opacity: 0.3;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  --light-blue: hsl(245, 48%, 91%);\r\n  --bright-red: hsl(1, 85%, 60%);\r\n  --bright-red-2: hsl(1, 85%, 55%);\r\n  --light-grayish-red: hsl(0, 60%, 99%);\r\n  --light-lime-green: hsl(123, 35%, 77%);\r\n  --light-lime-green-2: hsl(123, 35%, 70%);\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Montserrat';\r\n  src: url('./Montserrat.ttf') format('truetype');\r\n}\r\n\r\n* {\r\n  font-family: 'Montserrat', sans-serif;\r\n  list-style: none;\r\n  text-decoration: none;\r\n  resize: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  letter-spacing: 0.5px;\r\n  line-height: 1.5;\r\n}\r\n\r\nbody {\r\n  font-size: 1.15rem;\r\n  box-sizing: border-box;\r\n}\r\n\r\nh1 {\r\n  font-size: 1.9rem;\r\n}\r\n\r\nh2 {\r\n  font-size: 1.4rem;\r\n}\r\n\r\nh3 {\r\n  font-size: 1.25rem;\r\n}\r\n\r\na {\r\n  color: inherit;\r\n  cursor: pointer;\r\n}\r\n\r\nlabel {\r\n  width: min-content;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  font-size: 1.1rem;\r\n  border-radius: 0.4em;\r\n  padding: 0.5em;\r\n  border: 1px solid var(--light-blue);\r\n}\r\n\r\n.grid-container {\r\n  display: grid;\r\n}\r\n\r\n.flex-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.input-container {\r\n  gap: 0.6rem;\r\n}\r\n\r\n.content {\r\n  flex-direction: row;\r\n  min-height: 100vh;\r\n}\r\n\r\nbutton {\r\n  padding: 0.5em 1em;\r\n  border-radius: 0.5em;\r\n  border: none;\r\n}\r\n\r\nbutton:enabled {\r\n  cursor: pointer;\r\n}\r\n\r\n.lime-green-btn:enabled {\r\n  background-color: var(--light-lime-green);\r\n}\r\n\r\n.lime-green-btn:enabled:hover {\r\n  background-color: var(--light-lime-green-2);\r\n}\r\n\r\n.red-btn {\r\n  background-color: var(--bright-red);\r\n  color: var(--light-grayish-red);\r\n}\r\n\r\n.red-btn:hover {\r\n  background-color: var(--bright-red-2);\r\n}\r\n\r\n.aside {\r\n  min-height: 100%;\r\n  width: 200px;\r\n  word-break: break-word;\r\n  border-right: 1px solid black;\r\n  padding: 1em;\r\n}\r\n\r\n.new-project-btn {\r\n  font-size: 1rem;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.projects-ul {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.project-title-li {\r\n  padding: 0.3em;\r\n}\r\n\r\n.project-title-li > a:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.project-form {\r\n  gap: 2rem;\r\n}\r\n\r\n.form-btn-container {\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n.project-container {\r\n  flex-grow: 1;\r\n  gap: 2rem;\r\n  padding: 1em;\r\n}\r\n\r\n.project-title-container {\r\n  flex-direction: row;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  word-break: break-all;\r\n}\r\n\r\n.edit-title-btn {\r\n  margin-inline: 0.5rem auto;\r\n}\r\n\r\n.add-todo-form {\r\n  grid-template-areas:\r\n    'input     input  '\r\n    'left-side right-side';\r\n}\r\n\r\n.todo-title-input {\r\n  grid-area: input;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.add-todo-btn {\r\n  grid-area: left-side;\r\n  max-width: min-content;\r\n}\r\n\r\n.todo-form-right-side {\r\n  grid-area: right-side;\r\n  justify-self: end;\r\n}\r\n\r\n.todo-date-input {\r\n  padding: 0.23em;\r\n  margin-right: 0.4rem;\r\n}\r\n\r\n.priority-fieldset {\r\n  flex-direction: row;\r\n  gap: 1rem;\r\n  border: none;\r\n}\r\n\r\n.priority-fieldset > legend {\r\n  margin-bottom: 0.7rem;\r\n}\r\n\r\n.radio-container {\r\n  position: relative;\r\n  max-width: min-content;\r\n}\r\n\r\n.priority-radio {\r\n  border: 0;\r\n  clip: rect(0 0 0 0);\r\n  height: 1px;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  padding: 0;\r\n  position: absolute;\r\n  width: 1px;\r\n}\r\n\r\n.priority-label {\r\n  display: block;\r\n  left: 0;\r\n  width: 34px;\r\n  height: 34px;\r\n}\r\n\r\n.priority-label::before {\r\n  content: '';\r\n  position: absolute;\r\n  width: 42px;\r\n  height: 42px;\r\n  mask-image: url(./flag.svg);\r\n  mask-repeat: no-repeat;\r\n  opacity: 0.2;\r\n}\r\n\r\n.priority-label:hover::before {\r\n  opacity: 1;\r\n  cursor: pointer;\r\n}\r\n\r\n.priority-radio:checked + .priority-label::before {\r\n  opacity: 1;\r\n}\r\n\r\n.red-priority-label::before {\r\n  background-color: red;\r\n}\r\n\r\n.orange-priority-label::before {\r\n  background-color: orange;\r\n}\r\n\r\n.blue-priority-label::before {\r\n  background-color: blue;\r\n}\r\n\r\n.gray-priority-label::before {\r\n  background-color: gray;\r\n}\r\n\r\n.todo-priority-red {\r\n  order: 1;\r\n}\r\n\r\n.incomplete-btn.priority-red-status-btn {\r\n  background-color: red;\r\n}\r\n\r\n.todo-priority-orange {\r\n  order: 2;\r\n}\r\n\r\n.incomplete-btn.priority-orange-status-btn {\r\n  background-color: orange;\r\n}\r\n\r\n.todo-priority-blue {\r\n  order: 3;\r\n}\r\n\r\n.incomplete-btn.priority-blue-status-btn {\r\n  background-color: blue;\r\n}\r\n\r\n.todo-priority-gray {\r\n  order: 4;\r\n}\r\n\r\n.todo-container {\r\n  gap: 2rem;\r\n  margin-bottom: 2rem;\r\n  padding: 1em;\r\n  border-radius: 0.5em;\r\n}\r\n\r\n.todo-top-container {\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.incomplete-btn {\r\n  background-color: gray;\r\n  mask-image: url(./radio_button_unchecked.svg);\r\n  mask-repeat: no-repeat;\r\n  padding: 0;\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n.complete-btn {\r\n  background-color: green;\r\n  mask-image: url(./radio_button_checked.svg);\r\n  mask-repeat: no-repeat;\r\n  padding: 0;\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n.todo-container p {\r\n  white-space: pre-wrap;\r\n}\r\n\r\n.todo-title {\r\n  margin-inline: 1rem auto;\r\n}\r\n\r\n.details-container {\r\n  gap: 2rem;\r\n}\r\n\r\n.checklist-item-container {\r\n  flex-direction: row;\r\n  gap: 0.4rem;\r\n  margin-top: 1rem;\r\n  padding: 0.3em 0.3em;\r\n  border-radius: 0.5em;\r\n  align-items: center;\r\n}\r\n\r\n.todo-bottom-container {\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n.checklist-text {\r\n  width: 200px;\r\n  min-height: 20px;\r\n  background-color: white;\r\n}\r\n\r\n.edit-todo-form {\r\n  gap: 2rem;\r\n}\r\n\r\n.status-fieldset {\r\n  gap: 1rem;\r\n  padding-block: 1em;\r\n}\r\n\r\n.todo-status-select {\r\n  font-size: 0.9rem;\r\n  padding: 1em;\r\n  max-width: min-content;\r\n}\r\n\r\n.details-modal,\r\n.checklist-modal {\r\n  gap: 2rem;\r\n}\r\n\r\n.modal {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 300px;\r\n  z-index: 2;\r\n  padding: 1.5em;\r\n  border-radius: 1em;\r\n  background-color: antiquewhite;\r\n}\r\n\r\n.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  left: 0;\r\n  background-color: aqua;\r\n  z-index: 1;\r\n  opacity: 0.3;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/assign/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/assign/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ assign)
/* harmony export */ });
function assign(target, object) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  for (var property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      ;
      target[property] = object[property];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/cloneObject/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/cloneObject/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cloneObject)
/* harmony export */ });
/* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");

function cloneObject(object) {
  return (0,_assign_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, object);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/roundingMethods/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRoundingMethod": () => (/* binding */ getRoundingMethod)
/* harmony export */ });
var roundingMap = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function trunc(value) {
    return value < 0 ? Math.ceil(value) : Math.floor(value);
  } // Math.trunc is not supported by IE

};
var defaultRoundingMethod = 'trunc';
function getRoundingMethod(method) {
  return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarMonths/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */

function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMilliseconds/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */

function differenceInMilliseconds(dateLeft, dateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft).getTime() - (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateRight).getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMonths/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMonths/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInCalendarMonths/index.js */ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isLastDayOfMonth/index.js */ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js");





/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates using trunc as a default rounding method.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */

function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var sign = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dateLeft, dateRight));
  var result; // Check for the difference of less than month

  if (difference < 1) {
    result = 0;
  } else {
    if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) {
      // This will check if the date is end of Feb and assign a higher end of month date
      // to compare it with Jan
      dateLeft.setDate(30);
    }

    dateLeft.setMonth(dateLeft.getMonth() - sign * difference); // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
    // If so, result must be decreased by 1 in absolute value

    var isLastMonthNotFull = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight) === -sign; // Check for cases of one full calendar month

    if ((0,_isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft)) && difference === 1 && (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDateLeft, dateRight) === 1) {
      isLastMonthNotFull = false;
    }

    result = sign * (difference - Number(isLastMonthNotFull));
  } // Prevent negative zero


  return result === 0 ? 0 : result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInSeconds/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInSeconds/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInSeconds)
/* harmony export */ });
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/roundingMethods/index.js */ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js");



/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of seconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */

function differenceInSeconds(dateLeft, dateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft, dateRight) / 1000;
  return (0,_lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfDay/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfDay/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */

function endOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfMonth/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfMonth/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */

function endOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistanceToNow/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistanceToNow/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistanceToNow)
/* harmony export */ });
/* harmony import */ var _formatDistance_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../formatDistance/index.js */ "./node_modules/date-fns/esm/formatDistance/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name formatDistanceToNow
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 * @pure false
 *
 * @description
 * Return the distance between the given date and now in words.
 *
 * | Distance to now                                                   | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance to now     | Result               |
 * |---------------------|----------------------|
 * | 0 secs ... 5 secs   | less than 5 seconds  |
 * | 5 secs ... 10 secs  | less than 10 seconds |
 * | 10 secs ... 20 secs | less than 20 seconds |
 * | 20 secs ... 40 secs | half a minute        |
 * | 40 secs ... 60 secs | less than a minute   |
 * | 60 secs ... 90 secs | 1 minute             |
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result specifies if now is earlier or later than the passed date
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * const result = formatDistanceToNow(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * const result = formatDistanceToNow(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   {includeSeconds: true}
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * const result = formatDistanceToNow(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in about 1 year'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 August 2016 in Esperanto?
 * const eoLocale = require('date-fns/locale/eo')
 * const result = formatDistanceToNow(
 *   new Date(2016, 7, 1),
 *   {locale: eoLocale}
 * )
 * //=> 'pli ol 1 jaro'
 */
function formatDistanceToNow(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistance/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistance/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistance)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../differenceInMonths/index.js */ "./node_modules/date-fns/esm/differenceInMonths/index.js");
/* harmony import */ var _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../differenceInSeconds/index.js */ "./node_modules/date-fns/esm/differenceInSeconds/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/cloneObject/index.js */ "./node_modules/date-fns/esm/_lib/cloneObject/index.js");
/* harmony import */ var _lib_assign_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_lib/assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");










var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;
/**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * const result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */

function formatDistance(dirtyDate, dirtyBaseDate, options) {
  var _ref, _options$locale;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain formatDistance property');
  }

  var comparison = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, dirtyBaseDate);

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }

  var localizeOptions = (0,_lib_assign_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(options), {
    addSuffix: Boolean(options === null || options === void 0 ? void 0 : options.addSuffix),
    comparison: comparison
  });
  var dateLeft;
  var dateRight;

  if (comparison > 0) {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyBaseDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyDate);
  } else {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyBaseDate);
  }

  var seconds = (0,_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(dateRight, dateLeft);
  var offsetInSeconds = ((0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(dateRight) - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_8__["default"])(dateLeft)) / 1000;
  var minutes = Math.round((seconds - offsetInSeconds) / 60);
  var months; // 0 up to 2 mins

  if (minutes < 2) {
    if (options !== null && options !== void 0 && options.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance('lessThanXSeconds', 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance('lessThanXSeconds', 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance('lessThanXSeconds', 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance('halfAMinute', 0, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', minutes, localizeOptions);
      }
    } // 2 mins up to 0.75 hrs

  } else if (minutes < 45) {
    return locale.formatDistance('xMinutes', minutes, localizeOptions); // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return locale.formatDistance('aboutXHours', 1, localizeOptions); // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60);
    return locale.formatDistance('aboutXHours', hours, localizeOptions); // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return locale.formatDistance('xDays', 1, localizeOptions); // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions); // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('aboutXMonths', months, localizeOptions);
  }

  months = (0,_differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_9__["default"])(dateRight, dateLeft); // 2 months up to 12 months

  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('xMonths', nearestMonth, localizeOptions); // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12;
    var years = Math.floor(months / 12); // N years up to 1 years 3 months

    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance('aboutXYears', years, localizeOptions); // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance('overXYears', years, localizeOptions); // N years 9 months up to N year 12 months
    } else {
      return locale.formatDistance('almostXYears', years + 1, localizeOptions);
    }
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/isLastDayOfMonth/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isLastDayOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../endOfDay/index.js */ "./node_modules/date-fns/esm/endOfDay/index.js");
/* harmony import */ var _endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../endOfMonth/index.js */ "./node_modules/date-fns/esm/endOfMonth/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * const result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */

function isLastDayOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  return (0,_endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() === (0,_endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/ChecklistDiv.js":
/*!*****************************!*\
  !*** ./src/ChecklistDiv.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__({ title, itemIndex, status } = {}) {
  const div = document.createElement('div')
  const p = document.createElement('p')
  const statusBtn = document.createElement('button')
  const removeItem = document.createElement('button')

  div.dataset.checklistIndex = itemIndex
  div.classList.add('checklist-item-container', 'flex-container')

  p.textContent = title

  statusBtn.type = 'button'
  statusBtn.dataset.btn = 'item-status'

  if (status === 'complete') statusBtn.classList.add('complete-btn')
  else statusBtn.classList.add('incomplete-btn')

  removeItem.type = 'button'
  removeItem.textContent = 'X'
  removeItem.dataset.btn = 'delete-checklist-item'
  removeItem.classList.add('red-btn')

  div.append(statusBtn, p, removeItem)

  return div
}


/***/ }),

/***/ "./src/ProjectDiv.js":
/*!***************************!*\
  !*** ./src/ProjectDiv.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TodoDiv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoDiv.js */ "./src/TodoDiv.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__({ title, todoList = [], index } = {}) {
  const container = document.createElement('div')
  const topContainer = document.createElement('div')
  const h1 = document.createElement('h1')
  const editTitleBtn = document.createElement('button')
  const todoContainer = document.createElement('div')
  const addTodoForm = document.createElement('form')
  const titleInput = document.createElement('input')
  const removeProjectBtn = document.createElement('button')
  const addTodoBtn = document.createElement('button')
  const detailsModal = createDetailsModal()
  const checklistModal = createChecklistModal()
  const replaceTodoFormModal = createTodoFormModal(index)
  const rightSide = document.createElement('div')
  const date = document.createElement('input')
  const moreBtn = document.createElement('button')

  container.dataset.projectIndex = index
  container.dataset.container = 'project'
  container.classList.add('project-container', 'flex-container')

  topContainer.dataset.container = 'project-title'
  topContainer.classList.add('project-title-container', 'flex-container')

  h1.textContent = title
  h1.dataset.project = 'title'
  h1.classList.add('project-title')

  editTitleBtn.textContent = 'Edit'
  editTitleBtn.type = 'button'
  editTitleBtn.dataset.btn = 'edit-project'
  editTitleBtn.classList.add('edit-title-btn')

  todoContainer.dataset.container = 'todo'
  todoContainer.classList.add('flex-container', 'todo-list-container')

  addTodoForm.dataset.form = 'add-todo'
  addTodoForm.classList.add('add-todo-form', 'grid-container')

  titleInput.type = 'text'
  titleInput.name = 'title'
  titleInput.classList.add('todo-title-input')
  titleInput.pattern = '^[a-zA-Z1-9].*'
  titleInput.autocomplete = 'off'
  titleInput.required = true
  titleInput.dataset.todoForm = 'title'

  removeProjectBtn.type = 'button'
  removeProjectBtn.textContent = 'X'
  removeProjectBtn.dataset.removeIndex = index
  removeProjectBtn.dataset.btn = 'remove-project'
  removeProjectBtn.classList.add('red-btn')

  replaceTodoFormModal.dataset.modal = 'edit-todo'
  replaceTodoFormModal.classList.add('hidden', 'modal')

  addTodoBtn.textContent = 'Submit'
  addTodoBtn.type = 'submit'
  addTodoBtn.dataset.btn = 'add-todo'
  addTodoBtn.classList.add('add-todo-btn', 'lime-green-btn')
  addTodoBtn.disabled = true

  rightSide.classList.add('todo-form-right-side')

  date.type = 'date'
  date.name = 'dueDate'
  date.classList.add('todo-date-input')

  moreBtn.type = 'button'
  moreBtn.textContent = '...'
  moreBtn.dataset.btn = 'add-details'
  moreBtn.classList.add('more-todo-btn')

  todoList.forEach((todo, index) => {
    const todoDiv = (0,_TodoDiv_js__WEBPACK_IMPORTED_MODULE_0__["default"])({ ...todo, index })

    todoContainer.appendChild(todoDiv)
  })

  rightSide.append(date, moreBtn)
  topContainer.append(h1, editTitleBtn, removeProjectBtn)
  addTodoForm.append(titleInput, addTodoBtn, rightSide, detailsModal)
  container.append(
    topContainer,
    todoContainer,
    addTodoForm,
    checklistModal,
    replaceTodoFormModal
  )

  return container
}

function createDetailsModal() {
  const modal = document.createElement('div')
  const descriptionDiv = document.createElement('div')
  const descriptionLabel = document.createElement('label')
  const descriptionTextarea = document.createElement('textarea')
  const notesDiv = document.createElement('div')
  const notesLabel = document.createElement('label')
  const notesTextarea = document.createElement('textarea')
  const fieldset = document.createElement('fieldset')
  const legend = document.createElement('legend')
  const redDiv = document.createElement('div')
  const redLabel = document.createElement('label')
  const redRadio = document.createElement('input')
  const orangeDiv = document.createElement('div')
  const orangeLabel = document.createElement('label')
  const orangeRadio = document.createElement('input')
  const blueDiv = document.createElement('div')
  const blueLabel = document.createElement('label')
  const blueRadio = document.createElement('input')
  const grayDiv = document.createElement('div')
  const grayLabel = document.createElement('label')
  const grayRadio = document.createElement('input')
  const bottomDiv = document.createElement('div')
  const confirmBtn = document.createElement('button')
  const cancelBtn = document.createElement('button')

  descriptionDiv.classList.add('input-container', 'flex-container')
  notesDiv.classList.add('input-container', 'flex-container')

  modal.classList.add('details-modal', 'flex-container', 'modal', 'hidden')
  modal.dataset.modal = 'details'

  descriptionLabel.textContent = 'Description'
  descriptionLabel.setAttribute('for', 'todo-description')
  descriptionTextarea.id = 'todo-description'
  descriptionTextarea.name = 'description'
  descriptionTextarea.dataset.details = 'description'

  notesLabel.textContent = 'Notes'
  notesLabel.setAttribute('for', 'todo-notes')
  notesTextarea.id = 'todo-notes'
  notesTextarea.name = 'notes'
  notesTextarea.dataset.details = 'notes'

  fieldset.classList.add('priority-fieldset', 'flex-container')

  legend.textContent = 'Priority'

  redDiv.classList.add('radio-container')

  redLabel.classList.add('priority-label', 'red-priority-label')
  redLabel.setAttribute('for', 'red-priority')

  redRadio.value = 'red'
  redRadio.type = 'radio'
  redRadio.name = 'priority'
  redRadio.id = 'red-priority'
  redRadio.dataset.details = 'priority'
  redRadio.classList.add('red-radio', 'priority-radio')

  orangeDiv.classList.add('radio-container')

  orangeLabel.classList.add('priority-label', 'orange-priority-label')
  orangeLabel.setAttribute('for', 'orange-priority')

  orangeRadio.value = 'orange'
  orangeRadio.type = 'radio'
  orangeRadio.name = 'priority'
  orangeRadio.dataset.details = 'priority'
  orangeRadio.id = 'orange-priority'
  orangeRadio.classList.add('orange-radio', 'priority-radio')

  blueLabel.classList.add('priority-label', 'blue-priority-label')
  blueLabel.setAttribute('for', 'blue-priority')

  blueRadio.value = 'blue'
  blueRadio.type = 'radio'
  blueRadio.name = 'priority'
  blueRadio.dataset.details = 'priority'
  blueRadio.id = 'blue-priority'
  blueRadio.classList.add('blue-radio', 'priority-radio')

  grayLabel.classList.add('priority-label', 'gray-priority-label')
  grayLabel.setAttribute('for', 'gray-priority')

  grayRadio.value = 'gray'
  grayRadio.type = 'radio'
  grayRadio.name = 'priority'
  grayRadio.dataset.details = 'priority'
  grayRadio.id = 'gray-priority'
  grayRadio.classList.add('gray-radio', 'priority-radio')

  confirmBtn.type = 'button'
  confirmBtn.textContent = 'Confirm'
  confirmBtn.dataset.btn = 'confirm-details'
  confirmBtn.classList.add('lime-green-btn')

  cancelBtn.type = 'button'
  cancelBtn.textContent = 'Cancel'
  cancelBtn.dataset.btn = 'remove-details'
  cancelBtn.classList.add('red-btn')

  bottomDiv.classList.add('form-btn-container', 'flex-container')

  bottomDiv.append(confirmBtn, cancelBtn)
  descriptionDiv.append(descriptionLabel, descriptionTextarea)
  notesDiv.append(notesLabel, notesTextarea)
  redDiv.append(redRadio, redLabel)
  orangeDiv.append(orangeRadio, orangeLabel)
  blueDiv.append(blueRadio, blueLabel)
  grayDiv.append(grayRadio, grayLabel)
  fieldset.append(legend, redDiv, orangeDiv, blueDiv, grayDiv)
  modal.append(descriptionDiv, notesDiv, fieldset, bottomDiv)

  return modal
}

function createChecklistModal() {
  const modal = document.createElement('div')
  const input = document.createElement('input')
  const bottomDiv = document.createElement('div')
  const addBtn = document.createElement('button')
  const closeBtn = document.createElement('button')

  modal.classList.add('checklist-modal', 'modal', 'hidden', 'flex-container')
  modal.dataset.modal = 'checklist'

  input.type = 'text'
  input.dataset.checklist = 'title'

  bottomDiv.classList.add('form-btn-container', 'flex-container')

  addBtn.type = 'button'
  addBtn.dataset.btn = 'add-checklist-item'
  addBtn.textContent = 'Submit'
  addBtn.classList.add('lime-green-btn')

  closeBtn.type = 'button'
  closeBtn.textContent = 'X'
  closeBtn.dataset.btn = 'close-checklist'
  closeBtn.classList.add('red-btn')

  bottomDiv.append(addBtn, closeBtn)
  modal.append(input, bottomDiv)

  return modal
}

function createTodoFormModal(index) {
  const modal = document.createElement('div')
  const form = document.createElement('form')
  const titleDiv = document.createElement('div')
  const titleLabel = document.createElement('label')
  const titleInput = document.createElement('input')
  const descriptionDiv = document.createElement('div')
  const descriptionLabel = document.createElement('label')
  const descriptionTextArea = document.createElement('textarea')
  const notesDiv = document.createElement('div')
  const notesLabel = document.createElement('label')
  const notesTextarea = document.createElement('textarea')
  const date = document.createElement('input')
  const statusDiv = document.createElement('div')
  const statusLabel = document.createElement('label')
  const statusSelect = document.createElement('select')
  const complete = document.createElement('option')
  const incomplete = document.createElement('option')
  const priorityFieldset = document.createElement('fieldset')
  const priorityLegend = document.createElement('legend')
  const redDiv = document.createElement('div')
  const redLabel = document.createElement('label')
  const redRadio = document.createElement('input')
  const orangeDiv = document.createElement('div')
  const orangeLabel = document.createElement('label')
  const orangeRadio = document.createElement('input')
  const blueDiv = document.createElement('div')
  const blueLabel = document.createElement('label')
  const blueRadio = document.createElement('input')
  const grayDiv = document.createElement('div')
  const grayLabel = document.createElement('label')
  const grayRadio = document.createElement('input')
  const bottomDiv = document.createElement('div')
  const submitBtn = document.createElement('button')
  const cancelBtn = document.createElement('button')

  form.dataset.form = 'edit-todo'
  form.dataset.formProjectIndex = index
  form.classList.add('edit-todo-form', 'flex-container')

  titleDiv.classList.add('input-container', 'flex-container')

  titleLabel.textContent = 'Title'
  titleLabel.setAttribute('for', 'todo-title')
  titleInput.required = true
  titleInput.type = 'text'
  titleInput.name = 'title'
  titleInput.id = 'todo-title'
  titleInput.dataset.todoFormInput = 'title'

  descriptionDiv.classList.add('input-container', 'flex-container')

  descriptionLabel.textContent = 'Description'
  descriptionLabel.setAttribute('for', 'todo-form-description')
  descriptionTextArea.name = 'description'
  descriptionTextArea.id = 'todo-form-description'
  descriptionTextArea.dataset.todoFormInput = 'description'

  notesDiv.classList.add('input-container', 'flex-container')

  notesLabel.textContent = 'Notes'
  notesLabel.setAttribute('for', 'todo-form-notes')
  notesTextarea.name = 'notes'
  notesTextarea.id = 'todo-form-notes'
  notesTextarea.dataset.todoFormInput = 'notes'

  statusDiv.classList.add('input-container', 'flex-container')

  statusLabel.textContent = 'Status'
  statusLabel.setAttribute('for', 'todo-status')

  statusSelect.name = 'status'
  statusSelect.id = 'todo-status'
  statusSelect.classList.add('todo-status-select')

  complete.textContent = 'Completed'
  complete.value = 'complete'
  complete.dataset.selectOption = 'complete'

  incomplete.text = 'Incomplete'
  incomplete.value = 'incomplete'
  incomplete.dataset.selectOption = 'incomplete'

  date.type = 'date'
  date.name = 'dueDate'
  date.dataset.todoFormInput = 'due-date'

  priorityFieldset.classList.add('priority-fieldset', 'flex-container')

  priorityLegend.textContent = 'Priority'

  redDiv.classList.add('radio-container')

  redLabel.classList.add('priority-label', 'red-priority-label')
  redLabel.setAttribute('for', 'red-edit-todo')

  redRadio.value = 'red'
  redRadio.type = 'radio'
  redRadio.name = 'priority'
  redRadio.id = 'red-edit-todo'
  redRadio.dataset.details = 'priority'
  redRadio.dataset.todoFormRadio = 'red'
  redRadio.classList.add('red-radio', 'priority-radio')

  orangeDiv.classList.add('radio-container')

  orangeLabel.classList.add('priority-label', 'orange-priority-label')
  orangeLabel.setAttribute('for', 'orange-edit-todo')

  orangeRadio.value = 'orange'
  orangeRadio.type = 'radio'
  orangeRadio.name = 'priority'
  orangeRadio.dataset.details = 'priority'
  orangeRadio.id = 'orange-edit-todo'
  orangeRadio.dataset.todoFormRadio = 'orange'
  orangeRadio.classList.add('orange-radio', 'priority-radio')

  blueLabel.classList.add('priority-label', 'blue-priority-label')
  blueLabel.setAttribute('for', 'blue-edit-todo')

  blueRadio.value = 'blue'
  blueRadio.type = 'radio'
  blueRadio.name = 'priority'
  blueRadio.dataset.details = 'priority'
  blueRadio.id = 'blue-edit-todo'
  blueRadio.dataset.todoFormRadio = 'blue'
  blueRadio.classList.add('blue-radio', 'priority-radio')

  grayLabel.classList.add('priority-label', 'gray-priority-label')
  grayLabel.setAttribute('for', 'gray-edit-todo')

  grayRadio.value = 'gray'
  grayRadio.type = 'radio'
  grayRadio.name = 'priority'
  grayRadio.dataset.details = 'priority'
  grayRadio.id = 'gray-edit-todo'
  grayRadio.dataset.todoFormRadio = 'gray'
  grayRadio.classList.add('gray-radio', 'priority-radio')

  submitBtn.textContent = 'Submit'
  submitBtn.type = 'submit'
  submitBtn.classList.add('lime-green-btn')

  cancelBtn.textContent = 'X'
  cancelBtn.dataset.btn = 'close-edit-todo'
  cancelBtn.type = 'button'
  cancelBtn.classList.add('red-btn')

  bottomDiv.classList.add('form-btn-container', 'flex-container')

  titleDiv.append(titleLabel, titleInput)
  descriptionDiv.append(descriptionLabel, descriptionTextArea)
  notesDiv.append(notesLabel, notesTextarea)
  statusSelect.append(complete, incomplete)
  statusDiv.append(statusLabel, statusSelect)
  redDiv.append(redRadio, redLabel)
  orangeDiv.append(orangeRadio, orangeLabel)
  blueDiv.append(blueRadio, blueLabel)
  grayDiv.append(grayRadio, grayLabel)
  priorityFieldset.append(priorityLegend, redDiv, orangeDiv, blueDiv, grayDiv)
  bottomDiv.append(submitBtn, cancelBtn)
  form.append(
    titleDiv,
    descriptionDiv,
    notesDiv,
    statusDiv,
    priorityFieldset,
    date,
    bottomDiv
  )

  modal.appendChild(form)

  return modal
}


/***/ }),

/***/ "./src/ProjectModal.js":
/*!*****************************!*\
  !*** ./src/ProjectModal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const modal = document.createElement('div')
  const form = document.createElement('form')
  const titleDiv = document.createElement('div')
  const label = document.createElement('label')
  const input = document.createElement('input')
  const bottomDiv = document.createElement('div')
  const addBtn = document.createElement('button')
  const cancelBtn = document.createElement('button')

  modal.classList.add('modal', 'hidden')
  modal.dataset.modal = 'project'

  form.dataset.form = 'project'
  form.classList.add('project-form', 'flex-container')

  titleDiv.classList.add('input-container', 'flex-container')

  label.textContent = 'Title'
  label.setAttribute('for', 'project-title')

  input.type = 'text'
  input.id = 'project-title'
  input.name = 'title'
  input.pattern = '^[a-zA-Z1-9].*'
  input.required = true
  input.autocomplete = 'off'
  input.dataset.input = 'project-title'

  bottomDiv.classList.add('form-btn-container', 'flex-container')

  addBtn.textContent = 'Submit'
  addBtn.type = 'submit'
  addBtn.dataset.btn = 'add-project'
  addBtn.classList.add('lime-green-btn')

  cancelBtn.textContent = 'Cancel'
  cancelBtn.type = 'reset'
  cancelBtn.dataset.btn = 'cancel-project'
  cancelBtn.classList.add('red-btn')

  bottomDiv.append(addBtn, cancelBtn)
  titleDiv.append(label, input)
  form.append(titleDiv, bottomDiv)
  modal.appendChild(form)

  return modal
}


/***/ }),

/***/ "./src/TodoDiv.js":
/*!************************!*\
  !*** ./src/TodoDiv.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/formatDistanceToNow/index.js");
/* harmony import */ var _ChecklistDiv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChecklistDiv.js */ "./src/ChecklistDiv.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__({
  title,
  description = '',
  dueDate = '',
  notes = '',
  checklist = [],
  status = 'incomplete',
  priority = 'gray',
  index,
} = {}) {
  const container = document.createElement('div')
  const topContainer = document.createElement('div')
  const h2 = document.createElement('h2')
  const removeTodoBtn = document.createElement('button')
  const details = document.createElement('div')
  const descriptionP = document.createElement('p')
  const notesP = document.createElement('p')
  const checklistContainer = document.createElement('div')
  const h3 = document.createElement('h3')
  const checklistBtn = document.createElement('button')
  const editTodo = document.createElement('button')
  const statusBtn = document.createElement('button')
  const bottomDiv = document.createElement('div')
  const detailsBtn = document.createElement('button')
  const dueDateText = document.createElement('div')

  container.dataset.todoIndex = index
  container.classList.add(
    'todo-container',
    'flex-container',
    `todo-priority-${priority}`
  )

  topContainer.classList.add('todo-top-container', 'flex-container')

  h2.textContent = title
  h2.classList.add('todo-title')

  details.dataset.container = 'details'
  details.classList.add('details-container', 'hidden', 'flex-container')

  descriptionP.textContent = `Description: ${description || 'No description.'}`
  notesP.textContent = `Notes: ${notes || 'No notes.'}`

  checklistContainer.dataset.container = 'checklist'

  h3.textContent = 'Checklist:'

  checklistBtn.textContent = '+'
  checklistBtn.type = 'button'
  checklistBtn.dataset.btn = 'open-checklist'
  checklistBtn.dataset.checklistTodoIndex = index

  statusBtn.dataset.btn = 'todo-status'
  statusBtn.classList.add(`${status}-btn`, `priority-${priority}-status-btn`)

  editTodo.textContent = 'Edit'
  editTodo.type = 'button'
  editTodo.dataset.btn = 'edit-todo'

  checklistContainer.append(h3, checklistBtn)

  details.append(descriptionP, notesP, checklistContainer, editTodo)

  removeTodoBtn.type = 'button'
  removeTodoBtn.textContent = 'Remove Todo'
  removeTodoBtn.dataset.btn = 'remove-todo'
  removeTodoBtn.classList.add('red-btn')

  detailsBtn.textContent = 'Open Details'
  detailsBtn.dataset.btn = 'open-details'

  bottomDiv.appendChild(detailsBtn)
  bottomDiv.classList.add('todo-bottom-container', 'flex-container')

  if (dueDate !== '') {
    const date = new Date(dueDate + 'T23:59')
    const now = new Date()
    const dateDay = date.getDate()
    const today = now.getDate()

    dueDateText.textContent =
      dateDay === today
        ? 'Today'
        : (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(date, {
            addSuffix: true,
          })

    bottomDiv.appendChild(dueDateText)
  }

  checklist.forEach((item, itemIndex) => {
    const div = (0,_ChecklistDiv_js__WEBPACK_IMPORTED_MODULE_0__["default"])({ ...item, itemIndex })

    checklistContainer.appendChild(div)
  })

  topContainer.append(statusBtn, h2, removeTodoBtn)
  container.append(topContainer, details, bottomDiv)

  if (status === 'completed') {
    container.classList.add('todo-completed')
    statusBtn.remove()
  }

  return container
}


/***/ }),

/***/ "./src/TodoList.js":
/*!*************************!*\
  !*** ./src/TodoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "addToChecklist": () => (/* binding */ addToChecklist),
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "changeChecklistItemStatus": () => (/* binding */ changeChecklistItemStatus),
/* harmony export */   "changeProjectTitle": () => (/* binding */ changeProjectTitle),
/* harmony export */   "getProject": () => (/* binding */ getProject),
/* harmony export */   "getTodo": () => (/* binding */ getTodo),
/* harmony export */   "removeChecklistItem": () => (/* binding */ removeChecklistItem),
/* harmony export */   "removeProject": () => (/* binding */ removeProject),
/* harmony export */   "removeTodo": () => (/* binding */ removeTodo),
/* harmony export */   "restoreProject": () => (/* binding */ restoreProject),
/* harmony export */   "storeProjects": () => (/* binding */ storeProjects),
/* harmony export */   "updateTodo": () => (/* binding */ updateTodo)
/* harmony export */ });
const projects = []

const updateValue = (func, state) => ({
  update: (updatedValue) => func({ ...state, ...updatedValue }),
})

const removeItem = (state) => ({
  remove: (index) => state.splice(index, 1),
})

const addProject = (obj) => {
  const p = projectFactory(obj)

  projects.push(p)
  storeProjects()

  return { ...p, index: projects.length - 1 }
}

const removeProject = (index) => {
  projects.splice(index, 1)
  storeProjects()
}

const changeProjectTitle = ({ index, title }) => {
  projects[index] = projects[index].update({ title })
  storeProjects()
}

const addTodo = (obj, { index }) => {
  const todo = todoFactory(obj)
  const project = projects[index]

  project.todoList.push(todo)
  storeProjects()

  return { ...todo, index: project.todoList.length - 1 }
}

const removeTodo = ({ projectIndex, todoIndex }) => {
  const project = projects[projectIndex]
  project.remove(todoIndex)
  storeProjects()
}

const updateTodo = (updatedValues, { projectIndex, todoIndex }) => {
  const todoList = projects[projectIndex].todoList

  todoList[todoIndex] = todoList[todoIndex].update(updatedValues)

  storeProjects()

  return { ...todoList[todoIndex], index: todoIndex }
}

const addToChecklist = ({ projectIndex, todoIndex, title }) => {
  const checklist = checklistFactory({ title })
  const project = projects[projectIndex]
  const todo = project.todoList[todoIndex]
  const itemIndex = project.todoList[todoIndex].checklist.length

  todo.checklist.push(checklist)
  storeProjects()

  return { ...checklist, todoIndex, itemIndex }
}

const removeChecklistItem = ({ projectIndex, todoIndex, itemIndex }) => {
  const project = projects[projectIndex]
  const todo = project.todoList[todoIndex]

  todo.remove(itemIndex)
  storeProjects()
}

const changeChecklistItemStatus = ({ projectIndex, todoIndex, itemIndex }) => {
  const project = projects[projectIndex]
  const todoList = project.todoList[todoIndex]
  const checklist = todoList.checklist
  const status =
    checklist[itemIndex].status === 'complete' ? 'incomplete' : 'complete'

  checklist[itemIndex] = checklist[itemIndex].update({ status })

  storeProjects()
}

const getProject = (index) => {
  if (projects.length < 1) return
  return { ...projects[index], index }
}

const getTodo = ({ projectIndex, todoIndex }) => {
  return projects[projectIndex].todoList[todoIndex]
}

const storeProjects = () => {
  const projectJson = JSON.stringify(projects)
  localStorage.setItem('projects', projectJson)
}

const restoreProject = (project) => {
  project.todoList = project.todoList.map((todo) => {
    todo.checklist = todo.checklist.map((item) => checklistFactory(item))
    todo = todoFactory(todo)

    return todo
  })

  projects.push(projectFactory(project))
}

const projectFactory = ({ title, todoList = [] } = {}) => {
  const project = {
    title,
    todoList,
  }

  return Object.assign(
    {},
    project,
    updateValue(projectFactory, project),
    removeItem(project.todoList)
  )
}

const todoFactory = ({
  title,
  description = '',
  dueDate = '',
  status = 'incomplete',
  priority = 'gray',
  notes = '',
  checklist = [],
} = {}) => {
  const todo = {
    title,
    description,
    dueDate,
    status,
    notes,
    checklist,
    priority,
  }

  return Object.assign(
    {},
    todo,
    updateValue(todoFactory, todo),
    removeItem(todo.checklist)
  )
}

const checklistFactory = ({ title, status = 'incomplete' } = {}) => {
  const item = {
    title,
    status,
  }

  return Object.assign({}, item, updateValue(checklistFactory, item))
}




/***/ }),

/***/ "./src/Montserrat.ttf":
/*!****************************!*\
  !*** ./src/Montserrat.ttf ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3faa3eef13649db02044.ttf";

/***/ }),

/***/ "./src/flag.svg":
/*!**********************!*\
  !*** ./src/flag.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c1455667e8af2c7dfec.svg";

/***/ }),

/***/ "./src/radio_button_checked.svg":
/*!**************************************!*\
  !*** ./src/radio_button_checked.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "25b066f681bf4c0275e2.svg";

/***/ }),

/***/ "./src/radio_button_unchecked.svg":
/*!****************************************!*\
  !*** ./src/radio_button_unchecked.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3490def3dcca75ab6132.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _TodoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoList.js */ "./src/TodoList.js");
/* harmony import */ var _ProjectModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectModal.js */ "./src/ProjectModal.js");
/* harmony import */ var _ProjectDiv_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectDiv.js */ "./src/ProjectDiv.js");
/* harmony import */ var _TodoDiv_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TodoDiv.js */ "./src/TodoDiv.js");
/* harmony import */ var _ChecklistDiv_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ChecklistDiv.js */ "./src/ChecklistDiv.js");







function openModal(selector) {
  const overlay = document.querySelector('[data-overlay="modal"]')
  const modal = document.querySelector(`[data-modal="${selector}"]`)

  overlay.classList.remove('hidden')
  modal.classList.remove('hidden')

  overlay.addEventListener('click', () => closeModal(selector), { once: true })
}

function closeModal(selector) {
  const overlay = document.querySelector('[data-overlay="modal"]')
  const modal = document.querySelector(`[data-modal="${selector}"]`)

  overlay.classList.add('hidden')
  modal.classList.add('hidden')
}

function openProjectForm(callback) {
  const modal = document.querySelector('[data-modal="project"]')
  const form = modal.querySelector('[data-form="project"]')

  form.addEventListener('submit', callback, { once: true })
  form.addEventListener('reset', () => closeModal('project'), { once: true })

  openModal('project')
}

function addProject(e) {
  e.preventDefault()
  const projectContent = Object.fromEntries(new FormData(e.target))
  const project = _TodoList_js__WEBPACK_IMPORTED_MODULE_1__.addProject(projectContent)

  displayProject(project)
  displayProjectLi(project)
  closeModal('project')

  e.target.reset()
}

function displayProject(obj) {
  const div = document.querySelector('[data-container="project"]')

  if (obj == null) {
    const shallowCopy = div.cloneNode()

    delete shallowCopy.dataset.projectIndex
    div.replaceWith(shallowCopy)

    return
  }

  const projectDiv = (0,_ProjectDiv_js__WEBPACK_IMPORTED_MODULE_3__["default"])(obj)
  const input = projectDiv.querySelector('[data-todo-form="title"]')

  projectDiv.addEventListener('click', (e) => {
    const btnDataset = e.target.dataset.btn

    if (btnDataset === 'edit-project') openProjectForm(changeProjectTitle)
    else if (btnDataset === 'open-details') changeDetailsDisplay(e)
    else if (btnDataset === 'add-checklist-item') addToChecklist(e)
    else if (btnDataset === 'add-details') openModal('details')
    else if (btnDataset === 'confirm-details') closeModal('details')
    else if (btnDataset === 'open-checklist') openChecklistModal(e)
    else if (btnDataset === 'item-status') changeItemStatus(e)
    else if (btnDataset === 'remove-details') resetDetails('details')
    else if (btnDataset === 'todo-status') changeTodoStatus(e)
    else if (btnDataset === 'remove-project') removeProject(e)
    else if (btnDataset === 'remove-todo') removeTodo(e)
    else if (btnDataset === 'delete-checklist-item') deleteChecklistItem(e)
    else if (btnDataset === 'edit-todo') openTodoModal(e)
    else if (btnDataset === 'add-checklist-item') addToChecklist(e)
    else if (btnDataset === 'close-checklist') closeChecklistModal('checklist')
  })

  projectDiv.addEventListener('submit', (e) => {
    e.preventDefault()
    if (e.target.dataset.form === 'add-todo') addTodo(e)
    else if (e.target.dataset.form === 'edit-todo') replaceTodo(e)
  })

  input.addEventListener('keyup', changeAddTodoBtn)

  div.replaceWith(projectDiv)
}

function changeAddTodoBtn(e) {
  const text = e.target.value.trim()
  const isValid = /^[a-zA-Z1-9].*/.test(text)
  const addBtn = document.querySelector('[data-btn="add-todo"]')

  if (isValid) addBtn.disabled = false
  else addBtn.disabled = true
}

function resetDetails() {
  const description = document.querySelector('[data-details="description"]')
  const notes = document.querySelector('[data-details="notes"]')
  const radio = document.querySelector('[data-details="priority"]:checked')

  closeModal('details')
  description.value = null
  notes.value = null

  if (radio != null) radio.checked = false
}

function changeProjectTitle(e) {
  e.preventDefault()
  const project = document.querySelector('[data-project-index')
  const index = project.dataset.projectIndex
  const obj = Object.fromEntries(new FormData(e.target))
  const h1 = document.querySelector('[data-project="title"')
  const li = document.querySelector(`[data-project-li="${index}"]`)
  const a = li.querySelector(`[data-anchor="project"]`)
  const title = obj.title

  h1.textContent = title
  a.textContent = title
  _TodoList_js__WEBPACK_IMPORTED_MODULE_1__.changeProjectTitle({ title, index })

  closeModal('project')
}

function displayProjectLi({ title, index }) {
  const ul = document.querySelector('[data-ul="project"]')
  const li = document.createElement('li')
  const a = document.createElement('a')

  a.href = '#'
  a.textContent = title
  a.dataset.anchor = 'project'

  li.classList.add('project-title-li')
  li.dataset.projectLi = index

  li.appendChild(a)
  ul.appendChild(li)
}

function changeDisplayProject(e) {
  const li = e.target.closest('[data-project-li]')
  const index = li.dataset.projectLi
  const project = _TodoList_js__WEBPACK_IMPORTED_MODULE_1__.getProject(index)

  displayProject(project)
}

function removeProject(e) {
  const index = e.target.dataset.removeIndex
  const ul = document.querySelector('[data-ul="project"]')
  const li = document.querySelector(`[data-project-li="${index}"]`)

  li.remove()
  _TodoList_js__WEBPACK_IMPORTED_MODULE_1__.removeProject(index)
  ul.childNodes.forEach((li, index) => (li.dataset.projectLi = index))

  const project = _TodoList_js__WEBPACK_IMPORTED_MODULE_1__.getProject(0)

  displayProject(project)
}

function addTodo(e) {
  const todoContent = Object.fromEntries(new FormData(e.target))
  const project = e.target.closest('[data-project-index')
  const index = project.dataset.projectIndex
  const todo = _TodoList_js__WEBPACK_IMPORTED_MODULE_1__.addTodo(todoContent, { index })

  displayTodo(todo)
  e.target.reset()
}

function displayTodo(todo) {
  if (!todo.hasOwnProperty('title')) return

  const todoContainer = document.querySelector('[data-container="todo"]')
  const div = (0,_TodoDiv_js__WEBPACK_IMPORTED_MODULE_4__["default"])(todo)

  const btn = div.querySelector('[data-btn="open-checklist"')

  btn.addEventListener('click', openChecklistModal)

  todoContainer.appendChild(div)
}

function removeTodo(e) {
  const projectDiv = document.querySelector('[data-project-index]')
  const todoDiv = e.target.closest('[data-todo-index]')
  const projectIndex = projectDiv.dataset.projectIndex
  const todoIndex = todoDiv.dataset.todoIndex

  todoDiv.remove()

  const todoList = Array.from(document.querySelectorAll('[data-todo-index]'))

  todoList.forEach((todo, index) => (todo.dataset.todoIndex = index))
  _TodoList_js__WEBPACK_IMPORTED_MODULE_1__.removeTodo({ projectIndex, todoIndex })
}

function openTodoModal(e) {
  const modal = document.querySelector('[data-modal="edit-todo"')
  const form = modal.querySelector('[data-form="edit-todo"]')
  const closeBtn = modal.querySelector('[data-btn="close-edit-todo"]')
  const projectDiv = e.target.closest('[data-project-index]')
  const projectIndex = projectDiv.dataset.projectIndex
  const todoDiv = e.target.closest('[data-todo-index]')
  const todoIndex = todoDiv.dataset.todoIndex
  const todo = _TodoList_js__WEBPACK_IMPORTED_MODULE_1__.getTodo({ projectIndex, todoIndex })
  const textInput = Array.from(form.querySelectorAll('[data-todo-form-input'))
  const status = form.querySelector(`[data-select-option="${todo.status}"]`)
  const priority = form.querySelector(
    `[data-todo-form-radio="${todo.priority}"]`
  )

  form.dataset.formTodoIndex = todoIndex
  textInput.forEach((input) => (input.value = todo[input.name]))
  status.selected = true

  priority.checked = true

  closeBtn.addEventListener('click', () => closeModal('edit-todo'))

  openModal('edit-todo')
}

function replaceTodo(e) {
  const todoContent = Object.fromEntries(new FormData(e.target))
  const projectIndex = e.target.dataset.formProjectIndex
  const todoIndex = e.target.dataset.formTodoIndex
  const todo = _TodoList_js__WEBPACK_IMPORTED_MODULE_1__.updateTodo(todoContent, {
    projectIndex,
    todoIndex,
  })

  const oldTodoDiv = document.querySelector(`[data-todo-index="${todoIndex}"`)
  const newTodoDiv = (0,_TodoDiv_js__WEBPACK_IMPORTED_MODULE_4__["default"])(todo)

  oldTodoDiv.replaceWith(newTodoDiv)

  closeModal('edit-todo')
}

function changeTodoStatus(e) {
  const projectDiv = document.querySelector('[data-project-index]')
  const projectIndex = projectDiv.dataset.projectIndex
  const todoDiv = e.target.closest('[data-todo-index]')
  const todoIndex = todoDiv.dataset.todoIndex
  const todo = _TodoList_js__WEBPACK_IMPORTED_MODULE_1__.getTodo({ projectIndex, todoIndex })
  const status = todo.status === 'complete' ? 'incomplete' : 'complete'

  _TodoList_js__WEBPACK_IMPORTED_MODULE_1__.updateTodo({ status }, { projectIndex, todoIndex })

  e.target.classList.toggle('incomplete-btn')
  e.target.classList.toggle('complete-btn')
}

function openChecklistModal(e) {
  const todoIndex = e.target.dataset.checklistTodoIndex
  const modal = document.querySelector('[data-modal="checklist"]')

  modal.dataset.modalTodoIndex = todoIndex

  openModal('checklist')
}

function addToChecklist(e) {
  const input = document.querySelector('[data-checklist="title"]')
  const title = input.value

  if (title == '') return

  const projectDiv = document.querySelector('[data-project-index]')
  const projectIndex = projectDiv.dataset.projectIndex
  const modal = e.target.closest('[data-modal-todo-index]')
  const todoIndex = modal.dataset.modalTodoIndex
  const item = _TodoList_js__WEBPACK_IMPORTED_MODULE_1__.addToChecklist({ projectIndex, todoIndex, title })

  displayChecklistItem(item)

  input.value = ''
}

function closeChecklistModal() {
  const div = document.querySelector('[data-checklist="title"]')

  div.textContent = ''

  closeModal('checklist')
}

function displayChecklistItem({ title, todoIndex, itemIndex } = {}) {
  if (title == null) return

  const todoDiv = document.querySelector(`[data-todo-index="${todoIndex}"]`)
  const div = todoDiv.querySelector('[data-container="checklist"]')

  const checklistDiv = (0,_ChecklistDiv_js__WEBPACK_IMPORTED_MODULE_5__["default"])({ title, itemIndex })

  div.appendChild(checklistDiv)
}

function deleteChecklistItem(e) {
  const project = document.querySelector('[data-project-index]')
  const projectIndex = project.dataset.projectIndex
  const todo = e.target.closest('[data-todo-index]')
  const todoIndex = todo.dataset.todoIndex

  const item = e.target.closest('[data-checklist-index]')
  const itemIndex = item.dataset.checklistIndex

  item.remove()
  _TodoList_js__WEBPACK_IMPORTED_MODULE_1__.removeChecklistItem({ projectIndex, todoIndex, itemIndex })

  const checklistItems = todo.querySelectorAll('[data-checklist-index]')

  checklistItems.forEach(
    (checklist, index) => (checklist.dataset.checklistIndex = index)
  )
}

function changeItemStatus(e) {
  const project = e.target.closest('[data-project-index]')
  const projectIndex = project.dataset.projectIndex
  const todo = e.target.closest('[data-todo-index')
  const todoIndex = todo.dataset.todoIndex
  const item = e.target.closest('[data-checklist-index]')
  const itemIndex = item.dataset.checklistIndex

  _TodoList_js__WEBPACK_IMPORTED_MODULE_1__.changeChecklistItemStatus({
    projectIndex,
    todoIndex,
    itemIndex,
  })

  e.target.classList.toggle('incomplete-btn')
  e.target.classList.toggle('complete-btn')
}

function changeDetailsDisplay(e) {
  const details = e.target.parentElement.previousSibling

  if (e.target.textContent === 'Open Details') {
    e.target.textContent = 'Close Details'
  } else {
    e.target.textContent = 'Open Details'
  }

  details.classList.toggle('hidden')
}

function restoreProjects(projects) {
  projects.forEach((project, index) => {
    _TodoList_js__WEBPACK_IMPORTED_MODULE_1__.restoreProject(project)
    displayProjectLi({ ...project, index })
  })

  const project = _TodoList_js__WEBPACK_IMPORTED_MODULE_1__.getProject(0)

  if (project == null) return

  displayProject({ ...project, index: 0 })
}

const content = document.querySelector('[data-content="container"]')
const overlay = document.createElement('div')
const modal = (0,_ProjectModal_js__WEBPACK_IMPORTED_MODULE_2__["default"])('add-project')
const aside = document.createElement('div')
const ul = document.createElement('ul')
const btn = document.createElement('button')
const projectContainer = document.createElement('div')

aside.classList.add('aside', 'flex-container')

overlay.dataset.overlay = 'modal'
overlay.classList.add('hidden', 'overlay')

ul.dataset.ul = 'project'
ul.classList.add('projects-ul', 'flex-container')

projectContainer.dataset.container = 'project'

projectContainer.classList.add('project-container')

btn.type = 'button'
btn.textContent = 'New Project'
btn.dataset.btn = 'new-project'
btn.classList.add('new-project-btn')

aside.append(btn, ul)
content.append(aside, projectContainer, overlay, modal)

aside.addEventListener('click', (e) => {
  const dataset = e.target.dataset
  if (dataset.btn === 'new-project') openProjectForm(addProject)
  if (dataset.anchor === 'project') changeDisplayProject(e)
})

const storedProject = JSON.parse(localStorage.getItem('projects'))

if (storedProject != null) restoreProjects(storedProject)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLE1BQU0sT0FBTyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxX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OEJBQThCLElBQUk7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdURBQWEsR0FBRyxnQkFBZ0I7QUFDcEQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QkFBdUIsbUJBQW1CO0FBQzFDLEdBQUc7QUFDSDtBQUNBLGtCQUFrQixvREFBeUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNERBQWtCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9jbG9uZU9iamVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcm91bmRpbmdNZXRob2RzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29tcGFyZUFzYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluTW9udGhzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluU2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2VuZE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZW5kT2ZNb250aC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdERpc3RhbmNlVG9Ob3cvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzTGFzdERheU9mTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0NoZWNrbGlzdERpdi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvUHJvamVjdERpdi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvUHJvamVjdE1vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Ub2RvRGl2LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Ub2RvTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Nb250c2VycmF0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZmxhZy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL3JhZGlvX2J1dHRvbl91bmNoZWNrZWQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9yYWRpb19idXR0b25fY2hlY2tlZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLWxpZ2h0LWJsdWU6IGhzbCgyNDUsIDQ4JSwgOTElKTtcXHJcXG4gIC0tYnJpZ2h0LXJlZDogaHNsKDEsIDg1JSwgNjAlKTtcXHJcXG4gIC0tYnJpZ2h0LXJlZC0yOiBoc2woMSwgODUlLCA1NSUpO1xcclxcbiAgLS1saWdodC1ncmF5aXNoLXJlZDogaHNsKDAsIDYwJSwgOTklKTtcXHJcXG4gIC0tbGlnaHQtbGltZS1ncmVlbjogaHNsKDEyMywgMzUlLCA3NyUpO1xcclxcbiAgLS1saWdodC1saW1lLWdyZWVuLTI6IGhzbCgxMjMsIDM1JSwgNzAlKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcclxcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbCB7XFxyXFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbmlucHV0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC40ZW07XFxyXFxuICBwYWRkaW5nOiAwLjVlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWJsdWUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udGFpbmVyIHtcXHJcXG4gIGdhcDogMC42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiAwLjVlbSAxZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmVuYWJsZWQge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGltZS1ncmVlbi1idG46ZW5hYmxlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1saW1lLWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbWUtZ3JlZW4tYnRuOmVuYWJsZWQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtbGltZS1ncmVlbi0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZC1idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJpZ2h0LXJlZCk7XFxyXFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JheWlzaC1yZWQpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVkLWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmlnaHQtcmVkLTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uYXNpZGUge1xcclxcbiAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1wcm9qZWN0LWJ0biB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtdWwge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRpdGxlLWxpIHtcXHJcXG4gIHBhZGRpbmc6IDAuM2VtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10aXRsZS1saSA+IGE6aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWZvcm0ge1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1idG4tY29udGFpbmVyIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRpdGxlLWNvbnRhaW5lciB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtdGl0bGUtYnRuIHtcXHJcXG4gIG1hcmdpbi1pbmxpbmU6IDAuNXJlbSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRvZG8tZm9ybSB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICAnaW5wdXQgICAgIGlucHV0ICAnXFxyXFxuICAgICdsZWZ0LXNpZGUgcmlnaHQtc2lkZSc7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXRpdGxlLWlucHV0IHtcXHJcXG4gIGdyaWQtYXJlYTogaW5wdXQ7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRvZG8tYnRuIHtcXHJcXG4gIGdyaWQtYXJlYTogbGVmdC1zaWRlO1xcclxcbiAgbWF4LXdpZHRoOiBtaW4tY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZm9ybS1yaWdodC1zaWRlIHtcXHJcXG4gIGdyaWQtYXJlYTogcmlnaHQtc2lkZTtcXHJcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kYXRlLWlucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDAuMjNlbTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMC40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktZmllbGRzZXQge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWZpZWxkc2V0ID4gbGVnZW5kIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJhZGlvLWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBtYXgtd2lkdGg6IG1pbi1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktcmFkaW8ge1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcXHJcXG4gIGhlaWdodDogMXB4O1xcclxcbiAgbWFyZ2luOiAtMXB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktbGFiZWwge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDM0cHg7XFxyXFxuICBoZWlnaHQ6IDM0cHg7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1sYWJlbDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDQycHg7XFxyXFxuICBoZWlnaHQ6IDQycHg7XFxyXFxuICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbiAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIG9wYWNpdHk6IDAuMjtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWxhYmVsOmhvdmVyOjpiZWZvcmUge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LXJhZGlvOmNoZWNrZWQgKyAucHJpb3JpdHktbGFiZWw6OmJlZm9yZSB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVkLXByaW9yaXR5LWxhYmVsOjpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ub3JhbmdlLXByaW9yaXR5LWxhYmVsOjpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcclxcbn1cXHJcXG5cXHJcXG4uYmx1ZS1wcmlvcml0eS1sYWJlbDo6YmVmb3JlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxufVxcclxcblxcclxcbi5ncmF5LXByaW9yaXR5LWxhYmVsOjpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tcHJpb3JpdHktcmVkIHtcXHJcXG4gIG9yZGVyOiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5jb21wbGV0ZS1idG4ucHJpb3JpdHktcmVkLXN0YXR1cy1idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1wcmlvcml0eS1vcmFuZ2Uge1xcclxcbiAgb3JkZXI6IDI7XFxyXFxufVxcclxcblxcclxcbi5pbmNvbXBsZXRlLWJ0bi5wcmlvcml0eS1vcmFuZ2Utc3RhdHVzLWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXByaW9yaXR5LWJsdWUge1xcclxcbiAgb3JkZXI6IDM7XFxyXFxufVxcclxcblxcclxcbi5pbmNvbXBsZXRlLWJ0bi5wcmlvcml0eS1ibHVlLXN0YXR1cy1idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tcHJpb3JpdHktZ3JheSB7XFxyXFxuICBvcmRlcjogNDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29udGFpbmVyIHtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tdG9wLWNvbnRhaW5lciB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmluY29tcGxldGUtYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxuICBtYXNrLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbiAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB3aWR0aDogMjRweDtcXHJcXG4gIGhlaWdodDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBsZXRlLWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gIG1hc2staW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxyXFxuICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIHdpZHRoOiAyNHB4O1xcclxcbiAgaGVpZ2h0OiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb250YWluZXIgcCB7XFxyXFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXRpdGxlIHtcXHJcXG4gIG1hcmdpbi1pbmxpbmU6IDFyZW0gYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtY29udGFpbmVyIHtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrbGlzdC1pdGVtLWNvbnRhaW5lciB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZ2FwOiAwLjRyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbiAgcGFkZGluZzogMC4zZW0gMC4zZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWJvdHRvbS1jb250YWluZXIge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrbGlzdC10ZXh0IHtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtdG9kby1mb3JtIHtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXR1cy1maWVsZHNldCB7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBwYWRkaW5nLWJsb2NrOiAxZW07XFxyXFxufVxcclxcblxcclxcbi50b2RvLXN0YXR1cy1zZWxlY3Qge1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuICBtYXgtd2lkdGg6IG1pbi1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1tb2RhbCxcXHJcXG4uY2hlY2tsaXN0LW1vZGFsIHtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgcGFkZGluZzogMS41ZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgb3BhY2l0eTogMC4zO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLGdDQUFnQztFQUNoQyxxQ0FBcUM7RUFDckMsc0NBQXNDO0VBQ3RDLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwrREFBK0M7QUFDakQ7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7RUFDVixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FB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QkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixVQUFVO0VBQ1YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxRQUFRO0VBQ1IsT0FBTztFQUNQLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gIC0tbGlnaHQtYmx1ZTogaHNsKDI0NSwgNDglLCA5MSUpO1xcclxcbiAgLS1icmlnaHQtcmVkOiBoc2woMSwgODUlLCA2MCUpO1xcclxcbiAgLS1icmlnaHQtcmVkLTI6IGhzbCgxLCA4NSUsIDU1JSk7XFxyXFxuICAtLWxpZ2h0LWdyYXlpc2gtcmVkOiBoc2woMCwgNjAlLCA5OSUpO1xcclxcbiAgLS1saWdodC1saW1lLWdyZWVuOiBoc2woMTIzLCAzNSUsIDc3JSk7XFxyXFxuICAtLWxpZ2h0LWxpbWUtZ3JlZW4tMjogaHNsKDEyMywgMzUlLCA3MCUpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XFxyXFxuICBzcmM6IHVybCgnLi9Nb250c2VycmF0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbCB7XFxyXFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbmlucHV0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC40ZW07XFxyXFxuICBwYWRkaW5nOiAwLjVlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWJsdWUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udGFpbmVyIHtcXHJcXG4gIGdhcDogMC42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiAwLjVlbSAxZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmVuYWJsZWQge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGltZS1ncmVlbi1idG46ZW5hYmxlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1saW1lLWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbWUtZ3JlZW4tYnRuOmVuYWJsZWQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtbGltZS1ncmVlbi0yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZC1idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJpZ2h0LXJlZCk7XFxyXFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JheWlzaC1yZWQpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVkLWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmlnaHQtcmVkLTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uYXNpZGUge1xcclxcbiAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1wcm9qZWN0LWJ0biB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMtdWwge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRpdGxlLWxpIHtcXHJcXG4gIHBhZGRpbmc6IDAuM2VtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10aXRsZS1saSA+IGE6aG92ZXIge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWZvcm0ge1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1idG4tY29udGFpbmVyIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRpdGxlLWNvbnRhaW5lciB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtdGl0bGUtYnRuIHtcXHJcXG4gIG1hcmdpbi1pbmxpbmU6IDAuNXJlbSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRvZG8tZm9ybSB7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICAnaW5wdXQgICAgIGlucHV0ICAnXFxyXFxuICAgICdsZWZ0LXNpZGUgcmlnaHQtc2lkZSc7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXRpdGxlLWlucHV0IHtcXHJcXG4gIGdyaWQtYXJlYTogaW5wdXQ7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRvZG8tYnRuIHtcXHJcXG4gIGdyaWQtYXJlYTogbGVmdC1zaWRlO1xcclxcbiAgbWF4LXdpZHRoOiBtaW4tY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZm9ybS1yaWdodC1zaWRlIHtcXHJcXG4gIGdyaWQtYXJlYTogcmlnaHQtc2lkZTtcXHJcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kYXRlLWlucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDAuMjNlbTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMC40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktZmllbGRzZXQge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9yaXR5LWZpZWxkc2V0ID4gbGVnZW5kIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuN3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJhZGlvLWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBtYXgtd2lkdGg6IG1pbi1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktcmFkaW8ge1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcXHJcXG4gIGhlaWdodDogMXB4O1xcclxcbiAgbWFyZ2luOiAtMXB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktbGFiZWwge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDM0cHg7XFxyXFxuICBoZWlnaHQ6IDM0cHg7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eS1sYWJlbDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDQycHg7XFxyXFxuICBoZWlnaHQ6IDQycHg7XFxyXFxuICBtYXNrLWltYWdlOiB1cmwoLi9mbGFnLnN2Zyk7XFxyXFxuICBtYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgb3BhY2l0eTogMC4yO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktbGFiZWw6aG92ZXI6OmJlZm9yZSB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3JpdHktcmFkaW86Y2hlY2tlZCArIC5wcmlvcml0eS1sYWJlbDo6YmVmb3JlIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5yZWQtcHJpb3JpdHktbGFiZWw6OmJlZm9yZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5vcmFuZ2UtcHJpb3JpdHktbGFiZWw6OmJlZm9yZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxyXFxufVxcclxcblxcclxcbi5ibHVlLXByaW9yaXR5LWxhYmVsOjpiZWZvcmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyYXktcHJpb3JpdHktbGFiZWw6OmJlZm9yZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1wcmlvcml0eS1yZWQge1xcclxcbiAgb3JkZXI6IDE7XFxyXFxufVxcclxcblxcclxcbi5pbmNvbXBsZXRlLWJ0bi5wcmlvcml0eS1yZWQtc3RhdHVzLWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXByaW9yaXR5LW9yYW5nZSB7XFxyXFxuICBvcmRlcjogMjtcXHJcXG59XFxyXFxuXFxyXFxuLmluY29tcGxldGUtYnRuLnByaW9yaXR5LW9yYW5nZS1zdGF0dXMtYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tcHJpb3JpdHktYmx1ZSB7XFxyXFxuICBvcmRlcjogMztcXHJcXG59XFxyXFxuXFxyXFxuLmluY29tcGxldGUtYnRuLnByaW9yaXR5LWJsdWUtc3RhdHVzLWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1wcmlvcml0eS1ncmF5IHtcXHJcXG4gIG9yZGVyOiA0O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb250YWluZXIge1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby10b3AtY29udGFpbmVyIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5jb21wbGV0ZS1idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG4gIG1hc2staW1hZ2U6IHVybCguL3JhZGlvX2J1dHRvbl91bmNoZWNrZWQuc3ZnKTtcXHJcXG4gIG1hc2stcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgd2lkdGg6IDI0cHg7XFxyXFxuICBoZWlnaHQ6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21wbGV0ZS1idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICBtYXNrLWltYWdlOiB1cmwoLi9yYWRpb19idXR0b25fY2hlY2tlZC5zdmcpO1xcclxcbiAgbWFzay1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB3aWR0aDogMjRweDtcXHJcXG4gIGhlaWdodDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29udGFpbmVyIHAge1xcclxcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby10aXRsZSB7XFxyXFxuICBtYXJnaW4taW5saW5lOiAxcmVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzLWNvbnRhaW5lciB7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5jaGVja2xpc3QtaXRlbS1jb250YWluZXIge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGdhcDogMC40cmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDAuM2VtIDAuM2VtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1ib3R0b20tY29udGFpbmVyIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5jaGVja2xpc3QtdGV4dCB7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBtaW4taGVpZ2h0OiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LXRvZG8tZm9ybSB7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5zdGF0dXMtZmllbGRzZXQge1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgcGFkZGluZy1ibG9jazogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1zdGF0dXMtc2VsZWN0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbiAgbWF4LXdpZHRoOiBtaW4tY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtbW9kYWwsXFxyXFxuLmNoZWNrbGlzdC1tb2RhbCB7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIHBhZGRpbmc6IDEuNWVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIG9wYWNpdHk6IDAuMztcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBvYmplY3QpIHtcbiAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXNzaWduIHJlcXVpcmVzIHRoYXQgaW5wdXQgcGFyYW1ldGVyIG5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICB9XG5cbiAgZm9yICh2YXIgcHJvcGVydHkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgICAgO1xuICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IG9iamVjdFtwcm9wZXJ0eV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgYXNzaWduIGZyb20gXCIuLi9hc3NpZ24vaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsb25lT2JqZWN0KG9iamVjdCkge1xuICByZXR1cm4gYXNzaWduKHt9LCBvYmplY3QpO1xufSIsImltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi8uLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRMb2NhbGU7IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJ2YXIgcm91bmRpbmdNYXAgPSB7XG4gIGNlaWw6IE1hdGguY2VpbCxcbiAgcm91bmQ6IE1hdGgucm91bmQsXG4gIGZsb29yOiBNYXRoLmZsb29yLFxuICB0cnVuYzogZnVuY3Rpb24gdHJ1bmModmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPCAwID8gTWF0aC5jZWlsKHZhbHVlKSA6IE1hdGguZmxvb3IodmFsdWUpO1xuICB9IC8vIE1hdGgudHJ1bmMgaXMgbm90IHN1cHBvcnRlZCBieSBJRVxuXG59O1xudmFyIGRlZmF1bHRSb3VuZGluZ01ldGhvZCA9ICd0cnVuYyc7XG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91bmRpbmdNZXRob2QobWV0aG9kKSB7XG4gIHJldHVybiBtZXRob2QgPyByb3VuZGluZ01hcFttZXRob2RdIDogcm91bmRpbmdNYXBbZGVmYXVsdFJvdW5kaW5nTWV0aG9kXTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGNvbXBhcmVBc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSByZXN1bHQgb2YgdGhlIGNvbXBhcmlzb25cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODk6XG4gKiBjb25zdCByZXN1bHQgPSBjb21wYXJlQXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAtMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlczpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZUFzYylcbiAqIC8vPT4gW1xuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmYgPSBkYXRlTGVmdC5nZXRUaW1lKCkgLSBkYXRlUmlnaHQuZ2V0VGltZSgpO1xuXG4gIGlmIChkaWZmIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiAxOyAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHNcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgbW9udGhzIGFyZSBiZXR3ZWVuIDMxIEphbnVhcnkgMjAxNCBhbmQgMSBTZXB0ZW1iZXIgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA4LCAxKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgMCwgMzEpXG4gKiApXG4gKiAvLz0+IDhcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIHllYXJEaWZmID0gZGF0ZUxlZnQuZ2V0RnVsbFllYXIoKSAtIGRhdGVSaWdodC5nZXRGdWxsWWVhcigpO1xuICB2YXIgbW9udGhEaWZmID0gZGF0ZUxlZnQuZ2V0TW9udGgoKSAtIGRhdGVSaWdodC5nZXRNb250aCgpO1xuICByZXR1cm4geWVhckRpZmYgKiAxMiArIG1vbnRoRGlmZjtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBtaWxsaXNlY29uZHMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDE0IDEyOjMwOjIwLjYwMCBhbmQgMiBKdWx5IDIwMTQgMTI6MzA6MjEuNzAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIxLCA3MDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIwLCA2MDApXG4gKiApXG4gKiAvLz0+IDExMDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRvRGF0ZShkYXRlTGVmdCkuZ2V0VGltZSgpIC0gdG9EYXRlKGRhdGVSaWdodCkuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocy9pbmRleC5qc1wiO1xuaW1wb3J0IGNvbXBhcmVBc2MgZnJvbSBcIi4uL2NvbXBhcmVBc2MvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgaXNMYXN0RGF5T2ZNb250aCBmcm9tIFwiLi4vaXNMYXN0RGF5T2ZNb250aC9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5Nb250aHNcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBmdWxsIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIHVzaW5nIHRydW5jIGFzIGEgZGVmYXVsdCByb3VuZGluZyBtZXRob2QuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBmdWxsIG1vbnRoc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBmdWxsIG1vbnRocyBhcmUgYmV0d2VlbiAzMSBKYW51YXJ5IDIwMTQgYW5kIDEgU2VwdGVtYmVyIDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5Nb250aHMobmV3IERhdGUoMjAxNCwgOCwgMSksIG5ldyBEYXRlKDIwMTQsIDAsIDMxKSlcbiAqIC8vPT4gN1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbk1vbnRocyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIHNpZ24gPSBjb21wYXJlQXNjKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICB2YXIgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpKTtcbiAgdmFyIHJlc3VsdDsgLy8gQ2hlY2sgZm9yIHRoZSBkaWZmZXJlbmNlIG9mIGxlc3MgdGhhbiBtb250aFxuXG4gIGlmIChkaWZmZXJlbmNlIDwgMSkge1xuICAgIHJlc3VsdCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRhdGVMZWZ0LmdldE1vbnRoKCkgPT09IDEgJiYgZGF0ZUxlZnQuZ2V0RGF0ZSgpID4gMjcpIHtcbiAgICAgIC8vIFRoaXMgd2lsbCBjaGVjayBpZiB0aGUgZGF0ZSBpcyBlbmQgb2YgRmViIGFuZCBhc3NpZ24gYSBoaWdoZXIgZW5kIG9mIG1vbnRoIGRhdGVcbiAgICAgIC8vIHRvIGNvbXBhcmUgaXQgd2l0aCBKYW5cbiAgICAgIGRhdGVMZWZ0LnNldERhdGUoMzApO1xuICAgIH1cblxuICAgIGRhdGVMZWZ0LnNldE1vbnRoKGRhdGVMZWZ0LmdldE1vbnRoKCkgLSBzaWduICogZGlmZmVyZW5jZSk7IC8vIE1hdGguYWJzKGRpZmYgaW4gZnVsbCBtb250aHMgLSBkaWZmIGluIGNhbGVuZGFyIG1vbnRocykgPT09IDEgaWYgbGFzdCBjYWxlbmRhciBtb250aCBpcyBub3QgZnVsbFxuICAgIC8vIElmIHNvLCByZXN1bHQgbXVzdCBiZSBkZWNyZWFzZWQgYnkgMSBpbiBhYnNvbHV0ZSB2YWx1ZVxuXG4gICAgdmFyIGlzTGFzdE1vbnRoTm90RnVsbCA9IGNvbXBhcmVBc2MoZGF0ZUxlZnQsIGRhdGVSaWdodCkgPT09IC1zaWduOyAvLyBDaGVjayBmb3IgY2FzZXMgb2Ygb25lIGZ1bGwgY2FsZW5kYXIgbW9udGhcblxuICAgIGlmIChpc0xhc3REYXlPZk1vbnRoKHRvRGF0ZShkaXJ0eURhdGVMZWZ0KSkgJiYgZGlmZmVyZW5jZSA9PT0gMSAmJiBjb21wYXJlQXNjKGRpcnR5RGF0ZUxlZnQsIGRhdGVSaWdodCkgPT09IDEpIHtcbiAgICAgIGlzTGFzdE1vbnRoTm90RnVsbCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJlc3VsdCA9IHNpZ24gKiAoZGlmZmVyZW5jZSAtIE51bWJlcihpc0xhc3RNb250aE5vdEZ1bGwpKTtcbiAgfSAvLyBQcmV2ZW50IG5lZ2F0aXZlIHplcm9cblxuXG4gIHJldHVybiByZXN1bHQgPT09IDAgPyAwIDogcmVzdWx0O1xufSIsImltcG9ydCBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldFJvdW5kaW5nTWV0aG9kIH0gZnJvbSBcIi4uL19saWIvcm91bmRpbmdNZXRob2RzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJblNlY29uZHNcbiAqIEBjYXRlZ29yeSBTZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIHNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucm91bmRpbmdNZXRob2Q9J3RydW5jJ10gLSBhIHJvdW5kaW5nIG1ldGhvZCAoYGNlaWxgLCBgZmxvb3JgLCBgcm91bmRgIG9yIGB0cnVuY2ApXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIHNlY29uZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgc2Vjb25kcyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTQgMTI6MzA6MDcuOTk5IGFuZCAyIEp1bHkgMjAxNCAxMjozMDoyMC4wMDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5TZWNvbmRzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCA3LCA5OTkpXG4gKiApXG4gKiAvLz0+IDEyXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluU2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGlmZiA9IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSAvIDEwMDA7XG4gIHJldHVybiBnZXRSb3VuZGluZ01ldGhvZChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucm91bmRpbmdNZXRob2QpKGRpZmYpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZW5kT2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBlbmRPZk1vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSBtb250aCBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhIG1vbnRoIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGVuZCBvZiBhIG1vbnRoXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIG1vbnRoIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZNb250aChuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDMwIDIwMTQgMjM6NTk6NTkuOTk5XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5kT2ZNb250aChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgZGF0ZS5zZXRGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCksIG1vbnRoICsgMSwgMCk7XG4gIGRhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGRpc3RhbmNlSW5Xb3JkcyBmcm9tIFwiLi4vZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgZm9ybWF0RGlzdGFuY2VUb05vd1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGUgYW5kIG5vdyBpbiB3b3Jkcy5cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGUgYW5kIG5vdyBpbiB3b3Jkcy5cbiAqXG4gKiB8IERpc3RhbmNlIHRvIG5vdyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUmVzdWx0ICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IDAgLi4uIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbGVzcyB0aGFuIGEgbWludXRlICB8XG4gKiB8IDMwIHNlY3MgLi4uIDEgbWluIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMSBtaW51dGUgICAgICAgICAgICB8XG4gKiB8IDEgbWluIDMwIHNlY3MgLi4uIDQ0IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWzIuLjQ0XSBtaW51dGVzICAgICB8XG4gKiB8IDQ0IG1pbnMgLi4uIDMwIHNlY3MgLi4uIDg5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgMSBob3VyICAgICAgICB8XG4gKiB8IDg5IG1pbnMgMzAgc2VjcyAuLi4gMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgWzIuLjI0XSBob3VycyB8XG4gKiB8IDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDQxIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgIHwgMSBkYXkgICAgICAgICAgICAgICB8XG4gKiB8IDQxIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDI5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgIHwgWzIuLjMwXSBkYXlzICAgICAgICB8XG4gKiB8IDI5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIHwgYWJvdXQgMSBtb250aCAgICAgICB8XG4gKiB8IDQ0IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIHwgYWJvdXQgMiBtb250aHMgICAgICB8XG4gKiB8IDU5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMSB5ciAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWzIuLjEyXSBtb250aHMgICAgICB8XG4gKiB8IDEgeXIgLi4uIDEgeXIgMyBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgMSB5ZWFyICAgICAgICB8XG4gKiB8IDEgeXIgMyBtb250aHMgLi4uIDEgeXIgOSBtb250aCBzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgb3ZlciAxIHllYXIgICAgICAgICB8XG4gKiB8IDEgeXIgOSBtb250aHMgLi4uIDIgeXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWxtb3N0IDIgeWVhcnMgICAgICB8XG4gKiB8IE4geXJzIC4uLiBOIHlycyAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgTiB5ZWFycyAgICAgICB8XG4gKiB8IE4geXJzIDMgbW9udGhzIC4uLiBOIHlycyA5IG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgb3ZlciBOIHllYXJzICAgICAgICB8XG4gKiB8IE4geXJzIDkgbW9udGhzIC4uLiBOKzEgeXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWxtb3N0IE4rMSB5ZWFycyAgICB8XG4gKlxuICogV2l0aCBgb3B0aW9ucy5pbmNsdWRlU2Vjb25kcyA9PSB0cnVlYDpcbiAqIHwgRGlzdGFuY2UgdG8gbm93ICAgICB8IFJlc3VsdCAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCBzZWNzIC4uLiA1IHNlY3MgICB8IGxlc3MgdGhhbiA1IHNlY29uZHMgIHxcbiAqIHwgNSBzZWNzIC4uLiAxMCBzZWNzICB8IGxlc3MgdGhhbiAxMCBzZWNvbmRzIHxcbiAqIHwgMTAgc2VjcyAuLi4gMjAgc2VjcyB8IGxlc3MgdGhhbiAyMCBzZWNvbmRzIHxcbiAqIHwgMjAgc2VjcyAuLi4gNDAgc2VjcyB8IGhhbGYgYSBtaW51dGUgICAgICAgIHxcbiAqIHwgNDAgc2VjcyAuLi4gNjAgc2VjcyB8IGxlc3MgdGhhbiBhIG1pbnV0ZSAgIHxcbiAqIHwgNjAgc2VjcyAuLi4gOTAgc2VjcyB8IDEgbWludXRlICAgICAgICAgICAgIHxcbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaW5jbHVkZVNlY29uZHM9ZmFsc2VdIC0gZGlzdGFuY2VzIGxlc3MgdGhhbiBhIG1pbnV0ZSBhcmUgbW9yZSBkZXRhaWxlZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hZGRTdWZmaXg9ZmFsc2VdIC0gcmVzdWx0IHNwZWNpZmllcyBpZiBub3cgaXMgZWFybGllciBvciBsYXRlciB0aGFuIHRoZSBwYXNzZWQgZGF0ZVxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZGlzdGFuY2UgaW4gd29yZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdERpc3RhbmNlYCBwcm9wZXJ0eVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAxIEphbnVhcnkgMjAxNSwgd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMiBKdWx5IDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVRvTm93KFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyKVxuICogKVxuICogLy89PiAnNiBtb250aHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIG5vdyBpcyAxIEphbnVhcnkgMjAxNSAwMDowMDowMCxcbiAqIC8vIHdoYXQgaXMgdGhlIGRpc3RhbmNlIHRvIDEgSmFudWFyeSAyMDE1IDAwOjAwOjE1LCBpbmNsdWRpbmcgc2Vjb25kcz9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3coXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDE1KSxcbiAqICAge2luY2x1ZGVTZWNvbmRzOiB0cnVlfVxuICogKVxuICogLy89PiAnbGVzcyB0aGFuIDIwIHNlY29uZHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDEgSmFudWFyeSAyMDE1LFxuICogLy8gd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMSBKYW51YXJ5IDIwMTYsIHdpdGggYSBzdWZmaXg/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVRvTm93KFxuICogICBuZXcgRGF0ZSgyMDE2LCAwLCAxKSxcbiAqICAge2FkZFN1ZmZpeDogdHJ1ZX1cbiAqIClcbiAqIC8vPT4gJ2luIGFib3V0IDEgeWVhcidcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMSBKYW51YXJ5IDIwMTUsXG4gKiAvLyB3aGF0IGlzIHRoZSBkaXN0YW5jZSB0byAxIEF1Z3VzdCAyMDE2IGluIEVzcGVyYW50bz9cbiAqIGNvbnN0IGVvTG9jYWxlID0gcmVxdWlyZSgnZGF0ZS1mbnMvbG9jYWxlL2VvJylcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3coXG4gKiAgIG5ldyBEYXRlKDIwMTYsIDcsIDEpLFxuICogICB7bG9jYWxlOiBlb0xvY2FsZX1cbiAqIClcbiAqIC8vPT4gJ3BsaSBvbCAxIGphcm8nXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlVG9Ob3coZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gZGlzdGFuY2VJbldvcmRzKGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSwgb3B0aW9ucyk7XG59IiwiaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IGNvbXBhcmVBc2MgZnJvbSBcIi4uL2NvbXBhcmVBc2MvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5Nb250aHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbk1vbnRocy9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJblNlY29uZHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJblNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGNsb25lT2JqZWN0IGZyb20gXCIuLi9fbGliL2Nsb25lT2JqZWN0L2luZGV4LmpzXCI7XG5pbXBvcnQgYXNzaWduIGZyb20gXCIuLi9fbGliL2Fzc2lnbi9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSU5VVEVTX0lOX0RBWSA9IDE0NDA7XG52YXIgTUlOVVRFU19JTl9BTE1PU1RfVFdPX0RBWVMgPSAyNTIwO1xudmFyIE1JTlVURVNfSU5fTU9OVEggPSA0MzIwMDtcbnZhciBNSU5VVEVTX0lOX1RXT19NT05USFMgPSA4NjQwMDtcbi8qKlxuICogQG5hbWUgZm9ybWF0RGlzdGFuY2VcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyBpbiB3b3Jkcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgaW4gd29yZHMuXG4gKlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJlc3VsdCAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIC4uLiAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGxlc3MgdGhhbiBhIG1pbnV0ZSAgfFxuICogfCAzMCBzZWNzIC4uLiAxIG1pbiAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDEgbWludXRlICAgICAgICAgICAgfFxuICogfCAxIG1pbiAzMCBzZWNzIC4uLiA0NCBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFsyLi40NF0gbWludXRlcyAgICAgfFxuICogfCA0NCBtaW5zIC4uLiAzMCBzZWNzIC4uLiA4OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IDEgaG91ciAgICAgICAgfFxuICogfCA4OSBtaW5zIDMwIHNlY3MgLi4uIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IFsyLi4yNF0gaG91cnMgfFxuICogfCAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA0MSBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICB8IDEgZGF5ICAgICAgICAgICAgICAgfFxuICogfCA0MSBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiAyOSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICB8IFsyLi4zMF0gZGF5cyAgICAgICAgfFxuICogfCAyOSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDQ0IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyB8IGFib3V0IDEgbW9udGggICAgICAgfFxuICogfCA0NCBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDU5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyB8IGFib3V0IDIgbW9udGhzICAgICAgfFxuICogfCA1OSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDEgeXIgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFsyLi4xMl0gbW9udGhzICAgICAgfFxuICogfCAxIHlyIC4uLiAxIHlyIDMgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IDEgeWVhciAgICAgICAgfFxuICogfCAxIHlyIDMgbW9udGhzIC4uLiAxIHlyIDkgbW9udGggcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG92ZXIgMSB5ZWFyICAgICAgICAgfFxuICogfCAxIHlyIDkgbW9udGhzIC4uLiAyIHlycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFsbW9zdCAyIHllYXJzICAgICAgfFxuICogfCBOIHlycyAuLi4gTiB5cnMgMyBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IE4geWVhcnMgICAgICAgfFxuICogfCBOIHlycyAzIG1vbnRocyAuLi4gTiB5cnMgOSBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG92ZXIgTiB5ZWFycyAgICAgICAgfFxuICogfCBOIHlycyA5IG1vbnRocyAuLi4gTisxIHlycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFsbW9zdCBOKzEgeWVhcnMgICAgfFxuICpcbiAqIFdpdGggYG9wdGlvbnMuaW5jbHVkZVNlY29uZHMgPT0gdHJ1ZWA6XG4gKiB8IERpc3RhbmNlIGJldHdlZW4gZGF0ZXMgfCBSZXN1bHQgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IDAgc2VjcyAuLi4gNSBzZWNzICAgICAgfCBsZXNzIHRoYW4gNSBzZWNvbmRzICB8XG4gKiB8IDUgc2VjcyAuLi4gMTAgc2VjcyAgICAgfCBsZXNzIHRoYW4gMTAgc2Vjb25kcyB8XG4gKiB8IDEwIHNlY3MgLi4uIDIwIHNlY3MgICAgfCBsZXNzIHRoYW4gMjAgc2Vjb25kcyB8XG4gKiB8IDIwIHNlY3MgLi4uIDQwIHNlY3MgICAgfCBoYWxmIGEgbWludXRlICAgICAgICB8XG4gKiB8IDQwIHNlY3MgLi4uIDYwIHNlY3MgICAgfCBsZXNzIHRoYW4gYSBtaW51dGUgICB8XG4gKiB8IDYwIHNlY3MgLi4uIDkwIHNlY3MgICAgfCAxIG1pbnV0ZSAgICAgICAgICAgICB8XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBiYXNlRGF0ZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmluY2x1ZGVTZWNvbmRzPWZhbHNlXSAtIGRpc3RhbmNlcyBsZXNzIHRoYW4gYSBtaW51dGUgYXJlIG1vcmUgZGV0YWlsZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWRkU3VmZml4PWZhbHNlXSAtIHJlc3VsdCBpbmRpY2F0ZXMgaWYgdGhlIHNlY29uZCBkYXRlIGlzIGVhcmxpZXIgb3IgbGF0ZXIgdGhhbiB0aGUgZmlyc3RcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGRpc3RhbmNlIGluIHdvcmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgYmFzZURhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdERpc3RhbmNlYCBwcm9wZXJ0eVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDIgSnVseSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gJzYgbW9udGhzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDEgSmFudWFyeSAyMDE1IDAwOjAwOjE1XG4gKiAvLyBhbmQgMSBKYW51YXJ5IDIwMTUgMDA6MDA6MDAsIGluY2x1ZGluZyBzZWNvbmRzP1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UoXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDE1KSxcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSwgMCwgMCwgMCksXG4gKiAgIHsgaW5jbHVkZVNlY29uZHM6IHRydWUgfVxuICogKVxuICogLy89PiAnbGVzcyB0aGFuIDIwIHNlY29uZHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGZyb20gMSBKYW51YXJ5IDIwMTZcbiAqIC8vIHRvIDEgSmFudWFyeSAyMDE1LCB3aXRoIGEgc3VmZml4P1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UobmV3IERhdGUoMjAxNSwgMCwgMSksIG5ldyBEYXRlKDIwMTYsIDAsIDEpLCB7XG4gKiAgIGFkZFN1ZmZpeDogdHJ1ZVxuICogfSlcbiAqIC8vPT4gJ2Fib3V0IDEgeWVhciBhZ28nXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMSBBdWd1c3QgMjAxNiBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gRXNwZXJhbnRvP1xuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSgyMDE2LCA3LCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSksIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJ3BsaSBvbCAxIGphcm8nXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UoZGlydHlEYXRlLCBkaXJ0eUJhc2VEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfb3B0aW9ucyRsb2NhbGU7XG5cbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBsb2NhbGUgPSAoX3JlZiA9IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRsb2NhbGUgIT09IHZvaWQgMCA/IF9vcHRpb25zJGxvY2FsZSA6IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IGRlZmF1bHRMb2NhbGU7XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0RGlzdGFuY2UpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXREaXN0YW5jZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIGNvbXBhcmlzb24gPSBjb21wYXJlQXNjKGRpcnR5RGF0ZSwgZGlydHlCYXNlRGF0ZSk7XG5cbiAgaWYgKGlzTmFOKGNvbXBhcmlzb24pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9XG5cbiAgdmFyIGxvY2FsaXplT3B0aW9ucyA9IGFzc2lnbihjbG9uZU9iamVjdChvcHRpb25zKSwge1xuICAgIGFkZFN1ZmZpeDogQm9vbGVhbihvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWRkU3VmZml4KSxcbiAgICBjb21wYXJpc29uOiBjb21wYXJpc29uXG4gIH0pO1xuICB2YXIgZGF0ZUxlZnQ7XG4gIHZhciBkYXRlUmlnaHQ7XG5cbiAgaWYgKGNvbXBhcmlzb24gPiAwKSB7XG4gICAgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlCYXNlRGF0ZSk7XG4gICAgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgICBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlCYXNlRGF0ZSk7XG4gIH1cblxuICB2YXIgc2Vjb25kcyA9IGRpZmZlcmVuY2VJblNlY29uZHMoZGF0ZVJpZ2h0LCBkYXRlTGVmdCk7XG4gIHZhciBvZmZzZXRJblNlY29uZHMgPSAoZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlUmlnaHQpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCkpIC8gMTAwMDtcbiAgdmFyIG1pbnV0ZXMgPSBNYXRoLnJvdW5kKChzZWNvbmRzIC0gb2Zmc2V0SW5TZWNvbmRzKSAvIDYwKTtcbiAgdmFyIG1vbnRoczsgLy8gMCB1cCB0byAyIG1pbnNcblxuICBpZiAobWludXRlcyA8IDIpIHtcbiAgICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5pbmNsdWRlU2Vjb25kcykge1xuICAgICAgaWYgKHNlY29uZHMgPCA1KSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWFNlY29uZHMnLCA1LCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgMTApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YU2Vjb25kcycsIDEwLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgMjApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YU2Vjb25kcycsIDIwLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgNDApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnaGFsZkFNaW51dGUnLCAwLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgNjApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YTWludXRlcycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TWludXRlcycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWE1pbnV0ZXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1pbnV0ZXMnLCBtaW51dGVzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0gLy8gMiBtaW5zIHVwIHRvIDAuNzUgaHJzXG5cbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgNDUpIHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TWludXRlcycsIG1pbnV0ZXMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDAuNzUgaHJzIHVwIHRvIDEuNSBocnNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgOTApIHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhIb3VycycsIDEsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEuNSBocnMgdXAgdG8gMjQgaHJzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fREFZKSB7XG4gICAgdmFyIGhvdXJzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gNjApO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WEhvdXJzJywgaG91cnMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgZGF5IHVwIHRvIDEuNzUgZGF5c1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX0FMTU9TVF9UV09fREFZUykge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hEYXlzJywgMSwgbG9jYWxpemVPcHRpb25zKTsgLy8gMS43NSBkYXlzIHVwIHRvIDMwIGRheXNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9NT05USCkge1xuICAgIHZhciBkYXlzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gTUlOVVRFU19JTl9EQVkpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hEYXlzJywgZGF5cywgbG9jYWxpemVPcHRpb25zKTsgLy8gMSBtb250aCB1cCB0byAyIG1vbnRoc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX1RXT19NT05USFMpIHtcbiAgICBtb250aHMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBNSU5VVEVTX0lOX01PTlRIKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhNb250aHMnLCBtb250aHMsIGxvY2FsaXplT3B0aW9ucyk7XG4gIH1cblxuICBtb250aHMgPSBkaWZmZXJlbmNlSW5Nb250aHMoZGF0ZVJpZ2h0LCBkYXRlTGVmdCk7IC8vIDIgbW9udGhzIHVwIHRvIDEyIG1vbnRoc1xuXG4gIGlmIChtb250aHMgPCAxMikge1xuICAgIHZhciBuZWFyZXN0TW9udGggPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBNSU5VVEVTX0lOX01PTlRIKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TW9udGhzJywgbmVhcmVzdE1vbnRoLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxIHllYXIgdXAgdG8gbWF4IERhdGVcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9udGhzU2luY2VTdGFydE9mWWVhciA9IG1vbnRocyAlIDEyO1xuICAgIHZhciB5ZWFycyA9IE1hdGguZmxvb3IobW9udGhzIC8gMTIpOyAvLyBOIHllYXJzIHVwIHRvIDEgeWVhcnMgMyBtb250aHNcblxuICAgIGlmIChtb250aHNTaW5jZVN0YXJ0T2ZZZWFyIDwgMykge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYWWVhcnMnLCB5ZWFycywgbG9jYWxpemVPcHRpb25zKTsgLy8gTiB5ZWFycyAzIG1vbnRocyB1cCB0byBOIHllYXJzIDkgbW9udGhzXG4gICAgfSBlbHNlIGlmIChtb250aHNTaW5jZVN0YXJ0T2ZZZWFyIDwgOSkge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnb3ZlclhZZWFycycsIHllYXJzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyBOIHllYXJzIDkgbW9udGhzIHVwIHRvIE4geWVhciAxMiBtb250aHNcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWxtb3N0WFllYXJzJywgeWVhcnMgKyAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGVuZE9mRGF5IGZyb20gXCIuLi9lbmRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IGVuZE9mTW9udGggZnJvbSBcIi4uL2VuZE9mTW9udGgvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzTGFzdERheU9mTW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0aGUgbGFzdCBkYXkgb2YgYSBtb250aD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSXMgMjggRmVicnVhcnkgMjAxNCB0aGUgbGFzdCBkYXkgb2YgYSBtb250aD9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzTGFzdERheU9mTW9udGgobmV3IERhdGUoMjAxNCwgMSwgMjgpKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNMYXN0RGF5T2ZNb250aChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiBlbmRPZkRheShkYXRlKS5nZXRUaW1lKCkgPT09IGVuZE9mTW9udGgoZGF0ZSkuZ2V0VGltZSgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcblxuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7IC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG5cbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcblxudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuXG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG5cbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UmVsYXRpdmU7IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydCJywgJ0EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnQkMnLCAnQUQnXSxcbiAgd2lkZTogWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxc3QgcXVhcnRlcicsICcybmQgcXVhcnRlcicsICczcmQgcXVhcnRlcicsICc0dGggcXVhcnRlciddXG59OyAvLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG5cbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7IC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcblxuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufTtcblxudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayhpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDBcbiAgICAvKiBTdW5kYXkgKi9cbiAgICAsXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoeyB0aXRsZSwgaXRlbUluZGV4LCBzdGF0dXMgfSA9IHt9KSB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgY29uc3Qgc3RhdHVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICBjb25zdCByZW1vdmVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuXHJcbiAgZGl2LmRhdGFzZXQuY2hlY2tsaXN0SW5kZXggPSBpdGVtSW5kZXhcclxuICBkaXYuY2xhc3NMaXN0LmFkZCgnY2hlY2tsaXN0LWl0ZW0tY29udGFpbmVyJywgJ2ZsZXgtY29udGFpbmVyJylcclxuXHJcbiAgcC50ZXh0Q29udGVudCA9IHRpdGxlXHJcblxyXG4gIHN0YXR1c0J0bi50eXBlID0gJ2J1dHRvbidcclxuICBzdGF0dXNCdG4uZGF0YXNldC5idG4gPSAnaXRlbS1zdGF0dXMnXHJcblxyXG4gIGlmIChzdGF0dXMgPT09ICdjb21wbGV0ZScpIHN0YXR1c0J0bi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZS1idG4nKVxyXG4gIGVsc2Ugc3RhdHVzQnRuLmNsYXNzTGlzdC5hZGQoJ2luY29tcGxldGUtYnRuJylcclxuXHJcbiAgcmVtb3ZlSXRlbS50eXBlID0gJ2J1dHRvbidcclxuICByZW1vdmVJdGVtLnRleHRDb250ZW50ID0gJ1gnXHJcbiAgcmVtb3ZlSXRlbS5kYXRhc2V0LmJ0biA9ICdkZWxldGUtY2hlY2tsaXN0LWl0ZW0nXHJcbiAgcmVtb3ZlSXRlbS5jbGFzc0xpc3QuYWRkKCdyZWQtYnRuJylcclxuXHJcbiAgZGl2LmFwcGVuZChzdGF0dXNCdG4sIHAsIHJlbW92ZUl0ZW0pXHJcblxyXG4gIHJldHVybiBkaXZcclxufVxyXG4iLCJpbXBvcnQgY3JlYXRlVG9kb0RpdiBmcm9tICcuL1RvZG9EaXYuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoeyB0aXRsZSwgdG9kb0xpc3QgPSBbXSwgaW5kZXggfSA9IHt9KSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBjb25zdCB0b3BDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG4gIGNvbnN0IGVkaXRUaXRsZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgY29uc3QgYWRkVG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcclxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gIGNvbnN0IHJlbW92ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gIGNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gIGNvbnN0IGRldGFpbHNNb2RhbCA9IGNyZWF0ZURldGFpbHNNb2RhbCgpXHJcbiAgY29uc3QgY2hlY2tsaXN0TW9kYWwgPSBjcmVhdGVDaGVja2xpc3RNb2RhbCgpXHJcbiAgY29uc3QgcmVwbGFjZVRvZG9Gb3JtTW9kYWwgPSBjcmVhdGVUb2RvRm9ybU1vZGFsKGluZGV4KVxyXG4gIGNvbnN0IHJpZ2h0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICBjb25zdCBtb3JlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuXHJcbiAgY29udGFpbmVyLmRhdGFzZXQucHJvamVjdEluZGV4ID0gaW5kZXhcclxuICBjb250YWluZXIuZGF0YXNldC5jb250YWluZXIgPSAncHJvamVjdCdcclxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXInLCAnZmxleC1jb250YWluZXInKVxyXG5cclxuICB0b3BDb250YWluZXIuZGF0YXNldC5jb250YWluZXIgPSAncHJvamVjdC10aXRsZSdcclxuICB0b3BDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10aXRsZS1jb250YWluZXInLCAnZmxleC1jb250YWluZXInKVxyXG5cclxuICBoMS50ZXh0Q29udGVudCA9IHRpdGxlXHJcbiAgaDEuZGF0YXNldC5wcm9qZWN0ID0gJ3RpdGxlJ1xyXG4gIGgxLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKVxyXG5cclxuICBlZGl0VGl0bGVCdG4udGV4dENvbnRlbnQgPSAnRWRpdCdcclxuICBlZGl0VGl0bGVCdG4udHlwZSA9ICdidXR0b24nXHJcbiAgZWRpdFRpdGxlQnRuLmRhdGFzZXQuYnRuID0gJ2VkaXQtcHJvamVjdCdcclxuICBlZGl0VGl0bGVCdG4uY2xhc3NMaXN0LmFkZCgnZWRpdC10aXRsZS1idG4nKVxyXG5cclxuICB0b2RvQ29udGFpbmVyLmRhdGFzZXQuY29udGFpbmVyID0gJ3RvZG8nXHJcbiAgdG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmbGV4LWNvbnRhaW5lcicsICd0b2RvLWxpc3QtY29udGFpbmVyJylcclxuXHJcbiAgYWRkVG9kb0Zvcm0uZGF0YXNldC5mb3JtID0gJ2FkZC10b2RvJ1xyXG4gIGFkZFRvZG9Gb3JtLmNsYXNzTGlzdC5hZGQoJ2FkZC10b2RvLWZvcm0nLCAnZ3JpZC1jb250YWluZXInKVxyXG5cclxuICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCdcclxuICB0aXRsZUlucHV0Lm5hbWUgPSAndGl0bGUnXHJcbiAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCd0b2RvLXRpdGxlLWlucHV0JylcclxuICB0aXRsZUlucHV0LnBhdHRlcm4gPSAnXlthLXpBLVoxLTldLionXHJcbiAgdGl0bGVJbnB1dC5hdXRvY29tcGxldGUgPSAnb2ZmJ1xyXG4gIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlXHJcbiAgdGl0bGVJbnB1dC5kYXRhc2V0LnRvZG9Gb3JtID0gJ3RpdGxlJ1xyXG5cclxuICByZW1vdmVQcm9qZWN0QnRuLnR5cGUgPSAnYnV0dG9uJ1xyXG4gIHJlbW92ZVByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnWCdcclxuICByZW1vdmVQcm9qZWN0QnRuLmRhdGFzZXQucmVtb3ZlSW5kZXggPSBpbmRleFxyXG4gIHJlbW92ZVByb2plY3RCdG4uZGF0YXNldC5idG4gPSAncmVtb3ZlLXByb2plY3QnXHJcbiAgcmVtb3ZlUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdyZWQtYnRuJylcclxuXHJcbiAgcmVwbGFjZVRvZG9Gb3JtTW9kYWwuZGF0YXNldC5tb2RhbCA9ICdlZGl0LXRvZG8nXHJcbiAgcmVwbGFjZVRvZG9Gb3JtTW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJywgJ21vZGFsJylcclxuXHJcbiAgYWRkVG9kb0J0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQnXHJcbiAgYWRkVG9kb0J0bi50eXBlID0gJ3N1Ym1pdCdcclxuICBhZGRUb2RvQnRuLmRhdGFzZXQuYnRuID0gJ2FkZC10b2RvJ1xyXG4gIGFkZFRvZG9CdG4uY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG8tYnRuJywgJ2xpbWUtZ3JlZW4tYnRuJylcclxuICBhZGRUb2RvQnRuLmRpc2FibGVkID0gdHJ1ZVxyXG5cclxuICByaWdodFNpZGUuY2xhc3NMaXN0LmFkZCgndG9kby1mb3JtLXJpZ2h0LXNpZGUnKVxyXG5cclxuICBkYXRlLnR5cGUgPSAnZGF0ZSdcclxuICBkYXRlLm5hbWUgPSAnZHVlRGF0ZSdcclxuICBkYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGF0ZS1pbnB1dCcpXHJcblxyXG4gIG1vcmVCdG4udHlwZSA9ICdidXR0b24nXHJcbiAgbW9yZUJ0bi50ZXh0Q29udGVudCA9ICcuLi4nXHJcbiAgbW9yZUJ0bi5kYXRhc2V0LmJ0biA9ICdhZGQtZGV0YWlscydcclxuICBtb3JlQnRuLmNsYXNzTGlzdC5hZGQoJ21vcmUtdG9kby1idG4nKVxyXG5cclxuICB0b2RvTGlzdC5mb3JFYWNoKCh0b2RvLCBpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgdG9kb0RpdiA9IGNyZWF0ZVRvZG9EaXYoeyAuLi50b2RvLCBpbmRleCB9KVxyXG5cclxuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0RpdilcclxuICB9KVxyXG5cclxuICByaWdodFNpZGUuYXBwZW5kKGRhdGUsIG1vcmVCdG4pXHJcbiAgdG9wQ29udGFpbmVyLmFwcGVuZChoMSwgZWRpdFRpdGxlQnRuLCByZW1vdmVQcm9qZWN0QnRuKVxyXG4gIGFkZFRvZG9Gb3JtLmFwcGVuZCh0aXRsZUlucHV0LCBhZGRUb2RvQnRuLCByaWdodFNpZGUsIGRldGFpbHNNb2RhbClcclxuICBjb250YWluZXIuYXBwZW5kKFxyXG4gICAgdG9wQ29udGFpbmVyLFxyXG4gICAgdG9kb0NvbnRhaW5lcixcclxuICAgIGFkZFRvZG9Gb3JtLFxyXG4gICAgY2hlY2tsaXN0TW9kYWwsXHJcbiAgICByZXBsYWNlVG9kb0Zvcm1Nb2RhbFxyXG4gIClcclxuXHJcbiAgcmV0dXJuIGNvbnRhaW5lclxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEZXRhaWxzTW9kYWwoKSB7XHJcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uVGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXHJcbiAgY29uc3Qgbm90ZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGNvbnN0IG5vdGVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbiAgY29uc3Qgbm90ZXNUZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcclxuICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JylcclxuICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKVxyXG4gIGNvbnN0IHJlZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgY29uc3QgcmVkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbiAgY29uc3QgcmVkUmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgY29uc3Qgb3JhbmdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBjb25zdCBvcmFuZ2VMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuICBjb25zdCBvcmFuZ2VSYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICBjb25zdCBibHVlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBjb25zdCBibHVlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbiAgY29uc3QgYmx1ZVJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gIGNvbnN0IGdyYXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGNvbnN0IGdyYXlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuICBjb25zdCBncmF5UmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgY29uc3QgYm90dG9tRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBjb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG5cclxuICBkZXNjcmlwdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInLCAnZmxleC1jb250YWluZXInKVxyXG4gIG5vdGVzRGl2LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicsICdmbGV4LWNvbnRhaW5lcicpXHJcblxyXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMtbW9kYWwnLCAnZmxleC1jb250YWluZXInLCAnbW9kYWwnLCAnaGlkZGVuJylcclxuICBtb2RhbC5kYXRhc2V0Lm1vZGFsID0gJ2RldGFpbHMnXHJcblxyXG4gIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb24nXHJcbiAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0b2RvLWRlc2NyaXB0aW9uJylcclxuICBkZXNjcmlwdGlvblRleHRhcmVhLmlkID0gJ3RvZG8tZGVzY3JpcHRpb24nXHJcbiAgZGVzY3JpcHRpb25UZXh0YXJlYS5uYW1lID0gJ2Rlc2NyaXB0aW9uJ1xyXG4gIGRlc2NyaXB0aW9uVGV4dGFyZWEuZGF0YXNldC5kZXRhaWxzID0gJ2Rlc2NyaXB0aW9uJ1xyXG5cclxuICBub3Rlc0xhYmVsLnRleHRDb250ZW50ID0gJ05vdGVzJ1xyXG4gIG5vdGVzTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndG9kby1ub3RlcycpXHJcbiAgbm90ZXNUZXh0YXJlYS5pZCA9ICd0b2RvLW5vdGVzJ1xyXG4gIG5vdGVzVGV4dGFyZWEubmFtZSA9ICdub3RlcydcclxuICBub3Rlc1RleHRhcmVhLmRhdGFzZXQuZGV0YWlscyA9ICdub3RlcydcclxuXHJcbiAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktZmllbGRzZXQnLCAnZmxleC1jb250YWluZXInKVxyXG5cclxuICBsZWdlbmQudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknXHJcblxyXG4gIHJlZERpdi5jbGFzc0xpc3QuYWRkKCdyYWRpby1jb250YWluZXInKVxyXG5cclxuICByZWRMYWJlbC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1sYWJlbCcsICdyZWQtcHJpb3JpdHktbGFiZWwnKVxyXG4gIHJlZExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3JlZC1wcmlvcml0eScpXHJcblxyXG4gIHJlZFJhZGlvLnZhbHVlID0gJ3JlZCdcclxuICByZWRSYWRpby50eXBlID0gJ3JhZGlvJ1xyXG4gIHJlZFJhZGlvLm5hbWUgPSAncHJpb3JpdHknXHJcbiAgcmVkUmFkaW8uaWQgPSAncmVkLXByaW9yaXR5J1xyXG4gIHJlZFJhZGlvLmRhdGFzZXQuZGV0YWlscyA9ICdwcmlvcml0eSdcclxuICByZWRSYWRpby5jbGFzc0xpc3QuYWRkKCdyZWQtcmFkaW8nLCAncHJpb3JpdHktcmFkaW8nKVxyXG5cclxuICBvcmFuZ2VEaXYuY2xhc3NMaXN0LmFkZCgncmFkaW8tY29udGFpbmVyJylcclxuXHJcbiAgb3JhbmdlTGFiZWwuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktbGFiZWwnLCAnb3JhbmdlLXByaW9yaXR5LWxhYmVsJylcclxuICBvcmFuZ2VMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdvcmFuZ2UtcHJpb3JpdHknKVxyXG5cclxuICBvcmFuZ2VSYWRpby52YWx1ZSA9ICdvcmFuZ2UnXHJcbiAgb3JhbmdlUmFkaW8udHlwZSA9ICdyYWRpbydcclxuICBvcmFuZ2VSYWRpby5uYW1lID0gJ3ByaW9yaXR5J1xyXG4gIG9yYW5nZVJhZGlvLmRhdGFzZXQuZGV0YWlscyA9ICdwcmlvcml0eSdcclxuICBvcmFuZ2VSYWRpby5pZCA9ICdvcmFuZ2UtcHJpb3JpdHknXHJcbiAgb3JhbmdlUmFkaW8uY2xhc3NMaXN0LmFkZCgnb3JhbmdlLXJhZGlvJywgJ3ByaW9yaXR5LXJhZGlvJylcclxuXHJcbiAgYmx1ZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWxhYmVsJywgJ2JsdWUtcHJpb3JpdHktbGFiZWwnKVxyXG4gIGJsdWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdibHVlLXByaW9yaXR5JylcclxuXHJcbiAgYmx1ZVJhZGlvLnZhbHVlID0gJ2JsdWUnXHJcbiAgYmx1ZVJhZGlvLnR5cGUgPSAncmFkaW8nXHJcbiAgYmx1ZVJhZGlvLm5hbWUgPSAncHJpb3JpdHknXHJcbiAgYmx1ZVJhZGlvLmRhdGFzZXQuZGV0YWlscyA9ICdwcmlvcml0eSdcclxuICBibHVlUmFkaW8uaWQgPSAnYmx1ZS1wcmlvcml0eSdcclxuICBibHVlUmFkaW8uY2xhc3NMaXN0LmFkZCgnYmx1ZS1yYWRpbycsICdwcmlvcml0eS1yYWRpbycpXHJcblxyXG4gIGdyYXlMYWJlbC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1sYWJlbCcsICdncmF5LXByaW9yaXR5LWxhYmVsJylcclxuICBncmF5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZ3JheS1wcmlvcml0eScpXHJcblxyXG4gIGdyYXlSYWRpby52YWx1ZSA9ICdncmF5J1xyXG4gIGdyYXlSYWRpby50eXBlID0gJ3JhZGlvJ1xyXG4gIGdyYXlSYWRpby5uYW1lID0gJ3ByaW9yaXR5J1xyXG4gIGdyYXlSYWRpby5kYXRhc2V0LmRldGFpbHMgPSAncHJpb3JpdHknXHJcbiAgZ3JheVJhZGlvLmlkID0gJ2dyYXktcHJpb3JpdHknXHJcbiAgZ3JheVJhZGlvLmNsYXNzTGlzdC5hZGQoJ2dyYXktcmFkaW8nLCAncHJpb3JpdHktcmFkaW8nKVxyXG5cclxuICBjb25maXJtQnRuLnR5cGUgPSAnYnV0dG9uJ1xyXG4gIGNvbmZpcm1CdG4udGV4dENvbnRlbnQgPSAnQ29uZmlybSdcclxuICBjb25maXJtQnRuLmRhdGFzZXQuYnRuID0gJ2NvbmZpcm0tZGV0YWlscydcclxuICBjb25maXJtQnRuLmNsYXNzTGlzdC5hZGQoJ2xpbWUtZ3JlZW4tYnRuJylcclxuXHJcbiAgY2FuY2VsQnRuLnR5cGUgPSAnYnV0dG9uJ1xyXG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnXHJcbiAgY2FuY2VsQnRuLmRhdGFzZXQuYnRuID0gJ3JlbW92ZS1kZXRhaWxzJ1xyXG4gIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdyZWQtYnRuJylcclxuXHJcbiAgYm90dG9tRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnRuLWNvbnRhaW5lcicsICdmbGV4LWNvbnRhaW5lcicpXHJcblxyXG4gIGJvdHRvbURpdi5hcHBlbmQoY29uZmlybUJ0biwgY2FuY2VsQnRuKVxyXG4gIGRlc2NyaXB0aW9uRGl2LmFwcGVuZChkZXNjcmlwdGlvbkxhYmVsLCBkZXNjcmlwdGlvblRleHRhcmVhKVxyXG4gIG5vdGVzRGl2LmFwcGVuZChub3Rlc0xhYmVsLCBub3Rlc1RleHRhcmVhKVxyXG4gIHJlZERpdi5hcHBlbmQocmVkUmFkaW8sIHJlZExhYmVsKVxyXG4gIG9yYW5nZURpdi5hcHBlbmQob3JhbmdlUmFkaW8sIG9yYW5nZUxhYmVsKVxyXG4gIGJsdWVEaXYuYXBwZW5kKGJsdWVSYWRpbywgYmx1ZUxhYmVsKVxyXG4gIGdyYXlEaXYuYXBwZW5kKGdyYXlSYWRpbywgZ3JheUxhYmVsKVxyXG4gIGZpZWxkc2V0LmFwcGVuZChsZWdlbmQsIHJlZERpdiwgb3JhbmdlRGl2LCBibHVlRGl2LCBncmF5RGl2KVxyXG4gIG1vZGFsLmFwcGVuZChkZXNjcmlwdGlvbkRpdiwgbm90ZXNEaXYsIGZpZWxkc2V0LCBib3R0b21EaXYpXHJcblxyXG4gIHJldHVybiBtb2RhbFxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDaGVja2xpc3RNb2RhbCgpIHtcclxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgY29uc3QgYm90dG9tRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuXHJcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnY2hlY2tsaXN0LW1vZGFsJywgJ21vZGFsJywgJ2hpZGRlbicsICdmbGV4LWNvbnRhaW5lcicpXHJcbiAgbW9kYWwuZGF0YXNldC5tb2RhbCA9ICdjaGVja2xpc3QnXHJcblxyXG4gIGlucHV0LnR5cGUgPSAndGV4dCdcclxuICBpbnB1dC5kYXRhc2V0LmNoZWNrbGlzdCA9ICd0aXRsZSdcclxuXHJcbiAgYm90dG9tRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnRuLWNvbnRhaW5lcicsICdmbGV4LWNvbnRhaW5lcicpXHJcblxyXG4gIGFkZEJ0bi50eXBlID0gJ2J1dHRvbidcclxuICBhZGRCdG4uZGF0YXNldC5idG4gPSAnYWRkLWNoZWNrbGlzdC1pdGVtJ1xyXG4gIGFkZEJ0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQnXHJcbiAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoJ2xpbWUtZ3JlZW4tYnRuJylcclxuXHJcbiAgY2xvc2VCdG4udHlwZSA9ICdidXR0b24nXHJcbiAgY2xvc2VCdG4udGV4dENvbnRlbnQgPSAnWCdcclxuICBjbG9zZUJ0bi5kYXRhc2V0LmJ0biA9ICdjbG9zZS1jaGVja2xpc3QnXHJcbiAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgncmVkLWJ0bicpXHJcblxyXG4gIGJvdHRvbURpdi5hcHBlbmQoYWRkQnRuLCBjbG9zZUJ0bilcclxuICBtb2RhbC5hcHBlbmQoaW5wdXQsIGJvdHRvbURpdilcclxuXHJcbiAgcmV0dXJuIG1vZGFsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRvZG9Gb3JtTW9kYWwoaW5kZXgpIHtcclxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxyXG4gIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxyXG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbiAgY29uc3QgZGVzY3JpcHRpb25UZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcclxuICBjb25zdCBub3Rlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgY29uc3Qgbm90ZXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuICBjb25zdCBub3Rlc1RleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxyXG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgY29uc3Qgc3RhdHVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBjb25zdCBzdGF0dXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuICBjb25zdCBzdGF0dXNTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxyXG4gIGNvbnN0IGNvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcclxuICBjb25zdCBpbmNvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcclxuICBjb25zdCBwcmlvcml0eUZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKVxyXG4gIGNvbnN0IHByaW9yaXR5TGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJylcclxuICBjb25zdCByZWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGNvbnN0IHJlZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxyXG4gIGNvbnN0IHJlZFJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gIGNvbnN0IG9yYW5nZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgY29uc3Qgb3JhbmdlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbiAgY29uc3Qgb3JhbmdlUmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgY29uc3QgYmx1ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgY29uc3QgYmx1ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxyXG4gIGNvbnN0IGJsdWVSYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICBjb25zdCBncmF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBjb25zdCBncmF5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbiAgY29uc3QgZ3JheVJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gIGNvbnN0IGJvdHRvbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG5cclxuICBmb3JtLmRhdGFzZXQuZm9ybSA9ICdlZGl0LXRvZG8nXHJcbiAgZm9ybS5kYXRhc2V0LmZvcm1Qcm9qZWN0SW5kZXggPSBpbmRleFxyXG4gIGZvcm0uY2xhc3NMaXN0LmFkZCgnZWRpdC10b2RvLWZvcm0nLCAnZmxleC1jb250YWluZXInKVxyXG5cclxuICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInLCAnZmxleC1jb250YWluZXInKVxyXG5cclxuICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlJ1xyXG4gIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndG9kby10aXRsZScpXHJcbiAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWVcclxuICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCdcclxuICB0aXRsZUlucHV0Lm5hbWUgPSAndGl0bGUnXHJcbiAgdGl0bGVJbnB1dC5pZCA9ICd0b2RvLXRpdGxlJ1xyXG4gIHRpdGxlSW5wdXQuZGF0YXNldC50b2RvRm9ybUlucHV0ID0gJ3RpdGxlJ1xyXG5cclxuICBkZXNjcmlwdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInLCAnZmxleC1jb250YWluZXInKVxyXG5cclxuICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJ1xyXG4gIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndG9kby1mb3JtLWRlc2NyaXB0aW9uJylcclxuICBkZXNjcmlwdGlvblRleHRBcmVhLm5hbWUgPSAnZGVzY3JpcHRpb24nXHJcbiAgZGVzY3JpcHRpb25UZXh0QXJlYS5pZCA9ICd0b2RvLWZvcm0tZGVzY3JpcHRpb24nXHJcbiAgZGVzY3JpcHRpb25UZXh0QXJlYS5kYXRhc2V0LnRvZG9Gb3JtSW5wdXQgPSAnZGVzY3JpcHRpb24nXHJcblxyXG4gIG5vdGVzRGl2LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicsICdmbGV4LWNvbnRhaW5lcicpXHJcblxyXG4gIG5vdGVzTGFiZWwudGV4dENvbnRlbnQgPSAnTm90ZXMnXHJcbiAgbm90ZXNMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0b2RvLWZvcm0tbm90ZXMnKVxyXG4gIG5vdGVzVGV4dGFyZWEubmFtZSA9ICdub3RlcydcclxuICBub3Rlc1RleHRhcmVhLmlkID0gJ3RvZG8tZm9ybS1ub3RlcydcclxuICBub3Rlc1RleHRhcmVhLmRhdGFzZXQudG9kb0Zvcm1JbnB1dCA9ICdub3RlcydcclxuXHJcbiAgc3RhdHVzRGl2LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicsICdmbGV4LWNvbnRhaW5lcicpXHJcblxyXG4gIHN0YXR1c0xhYmVsLnRleHRDb250ZW50ID0gJ1N0YXR1cydcclxuICBzdGF0dXNMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0b2RvLXN0YXR1cycpXHJcblxyXG4gIHN0YXR1c1NlbGVjdC5uYW1lID0gJ3N0YXR1cydcclxuICBzdGF0dXNTZWxlY3QuaWQgPSAndG9kby1zdGF0dXMnXHJcbiAgc3RhdHVzU2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3RvZG8tc3RhdHVzLXNlbGVjdCcpXHJcblxyXG4gIGNvbXBsZXRlLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlZCdcclxuICBjb21wbGV0ZS52YWx1ZSA9ICdjb21wbGV0ZSdcclxuICBjb21wbGV0ZS5kYXRhc2V0LnNlbGVjdE9wdGlvbiA9ICdjb21wbGV0ZSdcclxuXHJcbiAgaW5jb21wbGV0ZS50ZXh0ID0gJ0luY29tcGxldGUnXHJcbiAgaW5jb21wbGV0ZS52YWx1ZSA9ICdpbmNvbXBsZXRlJ1xyXG4gIGluY29tcGxldGUuZGF0YXNldC5zZWxlY3RPcHRpb24gPSAnaW5jb21wbGV0ZSdcclxuXHJcbiAgZGF0ZS50eXBlID0gJ2RhdGUnXHJcbiAgZGF0ZS5uYW1lID0gJ2R1ZURhdGUnXHJcbiAgZGF0ZS5kYXRhc2V0LnRvZG9Gb3JtSW5wdXQgPSAnZHVlLWRhdGUnXHJcblxyXG4gIHByaW9yaXR5RmllbGRzZXQuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktZmllbGRzZXQnLCAnZmxleC1jb250YWluZXInKVxyXG5cclxuICBwcmlvcml0eUxlZ2VuZC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSdcclxuXHJcbiAgcmVkRGl2LmNsYXNzTGlzdC5hZGQoJ3JhZGlvLWNvbnRhaW5lcicpXHJcblxyXG4gIHJlZExhYmVsLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWxhYmVsJywgJ3JlZC1wcmlvcml0eS1sYWJlbCcpXHJcbiAgcmVkTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncmVkLWVkaXQtdG9kbycpXHJcblxyXG4gIHJlZFJhZGlvLnZhbHVlID0gJ3JlZCdcclxuICByZWRSYWRpby50eXBlID0gJ3JhZGlvJ1xyXG4gIHJlZFJhZGlvLm5hbWUgPSAncHJpb3JpdHknXHJcbiAgcmVkUmFkaW8uaWQgPSAncmVkLWVkaXQtdG9kbydcclxuICByZWRSYWRpby5kYXRhc2V0LmRldGFpbHMgPSAncHJpb3JpdHknXHJcbiAgcmVkUmFkaW8uZGF0YXNldC50b2RvRm9ybVJhZGlvID0gJ3JlZCdcclxuICByZWRSYWRpby5jbGFzc0xpc3QuYWRkKCdyZWQtcmFkaW8nLCAncHJpb3JpdHktcmFkaW8nKVxyXG5cclxuICBvcmFuZ2VEaXYuY2xhc3NMaXN0LmFkZCgncmFkaW8tY29udGFpbmVyJylcclxuXHJcbiAgb3JhbmdlTGFiZWwuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktbGFiZWwnLCAnb3JhbmdlLXByaW9yaXR5LWxhYmVsJylcclxuICBvcmFuZ2VMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdvcmFuZ2UtZWRpdC10b2RvJylcclxuXHJcbiAgb3JhbmdlUmFkaW8udmFsdWUgPSAnb3JhbmdlJ1xyXG4gIG9yYW5nZVJhZGlvLnR5cGUgPSAncmFkaW8nXHJcbiAgb3JhbmdlUmFkaW8ubmFtZSA9ICdwcmlvcml0eSdcclxuICBvcmFuZ2VSYWRpby5kYXRhc2V0LmRldGFpbHMgPSAncHJpb3JpdHknXHJcbiAgb3JhbmdlUmFkaW8uaWQgPSAnb3JhbmdlLWVkaXQtdG9kbydcclxuICBvcmFuZ2VSYWRpby5kYXRhc2V0LnRvZG9Gb3JtUmFkaW8gPSAnb3JhbmdlJ1xyXG4gIG9yYW5nZVJhZGlvLmNsYXNzTGlzdC5hZGQoJ29yYW5nZS1yYWRpbycsICdwcmlvcml0eS1yYWRpbycpXHJcblxyXG4gIGJsdWVMYWJlbC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1sYWJlbCcsICdibHVlLXByaW9yaXR5LWxhYmVsJylcclxuICBibHVlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnYmx1ZS1lZGl0LXRvZG8nKVxyXG5cclxuICBibHVlUmFkaW8udmFsdWUgPSAnYmx1ZSdcclxuICBibHVlUmFkaW8udHlwZSA9ICdyYWRpbydcclxuICBibHVlUmFkaW8ubmFtZSA9ICdwcmlvcml0eSdcclxuICBibHVlUmFkaW8uZGF0YXNldC5kZXRhaWxzID0gJ3ByaW9yaXR5J1xyXG4gIGJsdWVSYWRpby5pZCA9ICdibHVlLWVkaXQtdG9kbydcclxuICBibHVlUmFkaW8uZGF0YXNldC50b2RvRm9ybVJhZGlvID0gJ2JsdWUnXHJcbiAgYmx1ZVJhZGlvLmNsYXNzTGlzdC5hZGQoJ2JsdWUtcmFkaW8nLCAncHJpb3JpdHktcmFkaW8nKVxyXG5cclxuICBncmF5TGFiZWwuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktbGFiZWwnLCAnZ3JheS1wcmlvcml0eS1sYWJlbCcpXHJcbiAgZ3JheUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2dyYXktZWRpdC10b2RvJylcclxuXHJcbiAgZ3JheVJhZGlvLnZhbHVlID0gJ2dyYXknXHJcbiAgZ3JheVJhZGlvLnR5cGUgPSAncmFkaW8nXHJcbiAgZ3JheVJhZGlvLm5hbWUgPSAncHJpb3JpdHknXHJcbiAgZ3JheVJhZGlvLmRhdGFzZXQuZGV0YWlscyA9ICdwcmlvcml0eSdcclxuICBncmF5UmFkaW8uaWQgPSAnZ3JheS1lZGl0LXRvZG8nXHJcbiAgZ3JheVJhZGlvLmRhdGFzZXQudG9kb0Zvcm1SYWRpbyA9ICdncmF5J1xyXG4gIGdyYXlSYWRpby5jbGFzc0xpc3QuYWRkKCdncmF5LXJhZGlvJywgJ3ByaW9yaXR5LXJhZGlvJylcclxuXHJcbiAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1N1Ym1pdCdcclxuICBzdWJtaXRCdG4udHlwZSA9ICdzdWJtaXQnXHJcbiAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ2xpbWUtZ3JlZW4tYnRuJylcclxuXHJcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ1gnXHJcbiAgY2FuY2VsQnRuLmRhdGFzZXQuYnRuID0gJ2Nsb3NlLWVkaXQtdG9kbydcclxuICBjYW5jZWxCdG4udHlwZSA9ICdidXR0b24nXHJcbiAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ3JlZC1idG4nKVxyXG5cclxuICBib3R0b21EaXYuY2xhc3NMaXN0LmFkZCgnZm9ybS1idG4tY29udGFpbmVyJywgJ2ZsZXgtY29udGFpbmVyJylcclxuXHJcbiAgdGl0bGVEaXYuYXBwZW5kKHRpdGxlTGFiZWwsIHRpdGxlSW5wdXQpXHJcbiAgZGVzY3JpcHRpb25EaXYuYXBwZW5kKGRlc2NyaXB0aW9uTGFiZWwsIGRlc2NyaXB0aW9uVGV4dEFyZWEpXHJcbiAgbm90ZXNEaXYuYXBwZW5kKG5vdGVzTGFiZWwsIG5vdGVzVGV4dGFyZWEpXHJcbiAgc3RhdHVzU2VsZWN0LmFwcGVuZChjb21wbGV0ZSwgaW5jb21wbGV0ZSlcclxuICBzdGF0dXNEaXYuYXBwZW5kKHN0YXR1c0xhYmVsLCBzdGF0dXNTZWxlY3QpXHJcbiAgcmVkRGl2LmFwcGVuZChyZWRSYWRpbywgcmVkTGFiZWwpXHJcbiAgb3JhbmdlRGl2LmFwcGVuZChvcmFuZ2VSYWRpbywgb3JhbmdlTGFiZWwpXHJcbiAgYmx1ZURpdi5hcHBlbmQoYmx1ZVJhZGlvLCBibHVlTGFiZWwpXHJcbiAgZ3JheURpdi5hcHBlbmQoZ3JheVJhZGlvLCBncmF5TGFiZWwpXHJcbiAgcHJpb3JpdHlGaWVsZHNldC5hcHBlbmQocHJpb3JpdHlMZWdlbmQsIHJlZERpdiwgb3JhbmdlRGl2LCBibHVlRGl2LCBncmF5RGl2KVxyXG4gIGJvdHRvbURpdi5hcHBlbmQoc3VibWl0QnRuLCBjYW5jZWxCdG4pXHJcbiAgZm9ybS5hcHBlbmQoXHJcbiAgICB0aXRsZURpdixcclxuICAgIGRlc2NyaXB0aW9uRGl2LFxyXG4gICAgbm90ZXNEaXYsXHJcbiAgICBzdGF0dXNEaXYsXHJcbiAgICBwcmlvcml0eUZpZWxkc2V0LFxyXG4gICAgZGF0ZSxcclxuICAgIGJvdHRvbURpdlxyXG4gIClcclxuXHJcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoZm9ybSlcclxuXHJcbiAgcmV0dXJuIG1vZGFsXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXHJcbiAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gIGNvbnN0IGJvdHRvbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG5cclxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcsICdoaWRkZW4nKVxyXG4gIG1vZGFsLmRhdGFzZXQubW9kYWwgPSAncHJvamVjdCdcclxuXHJcbiAgZm9ybS5kYXRhc2V0LmZvcm0gPSAncHJvamVjdCdcclxuICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZm9ybScsICdmbGV4LWNvbnRhaW5lcicpXHJcblxyXG4gIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicsICdmbGV4LWNvbnRhaW5lcicpXHJcblxyXG4gIGxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlJ1xyXG4gIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3QtdGl0bGUnKVxyXG5cclxuICBpbnB1dC50eXBlID0gJ3RleHQnXHJcbiAgaW5wdXQuaWQgPSAncHJvamVjdC10aXRsZSdcclxuICBpbnB1dC5uYW1lID0gJ3RpdGxlJ1xyXG4gIGlucHV0LnBhdHRlcm4gPSAnXlthLXpBLVoxLTldLionXHJcbiAgaW5wdXQucmVxdWlyZWQgPSB0cnVlXHJcbiAgaW5wdXQuYXV0b2NvbXBsZXRlID0gJ29mZidcclxuICBpbnB1dC5kYXRhc2V0LmlucHV0ID0gJ3Byb2plY3QtdGl0bGUnXHJcblxyXG4gIGJvdHRvbURpdi5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ0bi1jb250YWluZXInLCAnZmxleC1jb250YWluZXInKVxyXG5cclxuICBhZGRCdG4udGV4dENvbnRlbnQgPSAnU3VibWl0J1xyXG4gIGFkZEJ0bi50eXBlID0gJ3N1Ym1pdCdcclxuICBhZGRCdG4uZGF0YXNldC5idG4gPSAnYWRkLXByb2plY3QnXHJcbiAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoJ2xpbWUtZ3JlZW4tYnRuJylcclxuXHJcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCdcclxuICBjYW5jZWxCdG4udHlwZSA9ICdyZXNldCdcclxuICBjYW5jZWxCdG4uZGF0YXNldC5idG4gPSAnY2FuY2VsLXByb2plY3QnXHJcbiAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ3JlZC1idG4nKVxyXG5cclxuICBib3R0b21EaXYuYXBwZW5kKGFkZEJ0biwgY2FuY2VsQnRuKVxyXG4gIHRpdGxlRGl2LmFwcGVuZChsYWJlbCwgaW5wdXQpXHJcbiAgZm9ybS5hcHBlbmQodGl0bGVEaXYsIGJvdHRvbURpdilcclxuICBtb2RhbC5hcHBlbmRDaGlsZChmb3JtKVxyXG5cclxuICByZXR1cm4gbW9kYWxcclxufVxyXG4iLCJpbXBvcnQgeyBmb3JtYXREaXN0YW5jZVRvTm93IH0gZnJvbSAnZGF0ZS1mbnMnXHJcbmltcG9ydCBjcmVhdGVDaGVja2xpc3REaXYgZnJvbSAnLi9DaGVja2xpc3REaXYuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoe1xyXG4gIHRpdGxlLFxyXG4gIGRlc2NyaXB0aW9uID0gJycsXHJcbiAgZHVlRGF0ZSA9ICcnLFxyXG4gIG5vdGVzID0gJycsXHJcbiAgY2hlY2tsaXN0ID0gW10sXHJcbiAgc3RhdHVzID0gJ2luY29tcGxldGUnLFxyXG4gIHByaW9yaXR5ID0gJ2dyYXknLFxyXG4gIGluZGV4LFxyXG59ID0ge30pIHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGNvbnN0IHRvcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgY29uc3QgcmVtb3ZlVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgY29uc3QgZGVzY3JpcHRpb25QID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgY29uc3Qgbm90ZXNQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgY29uc3QgY2hlY2tsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcclxuICBjb25zdCBjaGVja2xpc3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gIGNvbnN0IGVkaXRUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICBjb25zdCBzdGF0dXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gIGNvbnN0IGJvdHRvbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgY29uc3QgZGV0YWlsc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgY29uc3QgZHVlRGF0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cclxuICBjb250YWluZXIuZGF0YXNldC50b2RvSW5kZXggPSBpbmRleFxyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFxyXG4gICAgJ3RvZG8tY29udGFpbmVyJyxcclxuICAgICdmbGV4LWNvbnRhaW5lcicsXHJcbiAgICBgdG9kby1wcmlvcml0eS0ke3ByaW9yaXR5fWBcclxuICApXHJcblxyXG4gIHRvcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLXRvcC1jb250YWluZXInLCAnZmxleC1jb250YWluZXInKVxyXG5cclxuICBoMi50ZXh0Q29udGVudCA9IHRpdGxlXHJcbiAgaDIuY2xhc3NMaXN0LmFkZCgndG9kby10aXRsZScpXHJcblxyXG4gIGRldGFpbHMuZGF0YXNldC5jb250YWluZXIgPSAnZGV0YWlscydcclxuICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMtY29udGFpbmVyJywgJ2hpZGRlbicsICdmbGV4LWNvbnRhaW5lcicpXHJcblxyXG4gIGRlc2NyaXB0aW9uUC50ZXh0Q29udGVudCA9IGBEZXNjcmlwdGlvbjogJHtkZXNjcmlwdGlvbiB8fCAnTm8gZGVzY3JpcHRpb24uJ31gXHJcbiAgbm90ZXNQLnRleHRDb250ZW50ID0gYE5vdGVzOiAke25vdGVzIHx8ICdObyBub3Rlcy4nfWBcclxuXHJcbiAgY2hlY2tsaXN0Q29udGFpbmVyLmRhdGFzZXQuY29udGFpbmVyID0gJ2NoZWNrbGlzdCdcclxuXHJcbiAgaDMudGV4dENvbnRlbnQgPSAnQ2hlY2tsaXN0OidcclxuXHJcbiAgY2hlY2tsaXN0QnRuLnRleHRDb250ZW50ID0gJysnXHJcbiAgY2hlY2tsaXN0QnRuLnR5cGUgPSAnYnV0dG9uJ1xyXG4gIGNoZWNrbGlzdEJ0bi5kYXRhc2V0LmJ0biA9ICdvcGVuLWNoZWNrbGlzdCdcclxuICBjaGVja2xpc3RCdG4uZGF0YXNldC5jaGVja2xpc3RUb2RvSW5kZXggPSBpbmRleFxyXG5cclxuICBzdGF0dXNCdG4uZGF0YXNldC5idG4gPSAndG9kby1zdGF0dXMnXHJcbiAgc3RhdHVzQnRuLmNsYXNzTGlzdC5hZGQoYCR7c3RhdHVzfS1idG5gLCBgcHJpb3JpdHktJHtwcmlvcml0eX0tc3RhdHVzLWJ0bmApXHJcblxyXG4gIGVkaXRUb2RvLnRleHRDb250ZW50ID0gJ0VkaXQnXHJcbiAgZWRpdFRvZG8udHlwZSA9ICdidXR0b24nXHJcbiAgZWRpdFRvZG8uZGF0YXNldC5idG4gPSAnZWRpdC10b2RvJ1xyXG5cclxuICBjaGVja2xpc3RDb250YWluZXIuYXBwZW5kKGgzLCBjaGVja2xpc3RCdG4pXHJcblxyXG4gIGRldGFpbHMuYXBwZW5kKGRlc2NyaXB0aW9uUCwgbm90ZXNQLCBjaGVja2xpc3RDb250YWluZXIsIGVkaXRUb2RvKVxyXG5cclxuICByZW1vdmVUb2RvQnRuLnR5cGUgPSAnYnV0dG9uJ1xyXG4gIHJlbW92ZVRvZG9CdG4udGV4dENvbnRlbnQgPSAnUmVtb3ZlIFRvZG8nXHJcbiAgcmVtb3ZlVG9kb0J0bi5kYXRhc2V0LmJ0biA9ICdyZW1vdmUtdG9kbydcclxuICByZW1vdmVUb2RvQnRuLmNsYXNzTGlzdC5hZGQoJ3JlZC1idG4nKVxyXG5cclxuICBkZXRhaWxzQnRuLnRleHRDb250ZW50ID0gJ09wZW4gRGV0YWlscydcclxuICBkZXRhaWxzQnRuLmRhdGFzZXQuYnRuID0gJ29wZW4tZGV0YWlscydcclxuXHJcbiAgYm90dG9tRGl2LmFwcGVuZENoaWxkKGRldGFpbHNCdG4pXHJcbiAgYm90dG9tRGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tYm90dG9tLWNvbnRhaW5lcicsICdmbGV4LWNvbnRhaW5lcicpXHJcblxyXG4gIGlmIChkdWVEYXRlICE9PSAnJykge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGR1ZURhdGUgKyAnVDIzOjU5JylcclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKClcclxuICAgIGNvbnN0IGRhdGVEYXkgPSBkYXRlLmdldERhdGUoKVxyXG4gICAgY29uc3QgdG9kYXkgPSBub3cuZ2V0RGF0ZSgpXHJcblxyXG4gICAgZHVlRGF0ZVRleHQudGV4dENvbnRlbnQgPVxyXG4gICAgICBkYXRlRGF5ID09PSB0b2RheVxyXG4gICAgICAgID8gJ1RvZGF5J1xyXG4gICAgICAgIDogZm9ybWF0RGlzdGFuY2VUb05vdyhkYXRlLCB7XHJcbiAgICAgICAgICAgIGFkZFN1ZmZpeDogdHJ1ZSxcclxuICAgICAgICAgIH0pXHJcblxyXG4gICAgYm90dG9tRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVUZXh0KVxyXG4gIH1cclxuXHJcbiAgY2hlY2tsaXN0LmZvckVhY2goKGl0ZW0sIGl0ZW1JbmRleCkgPT4ge1xyXG4gICAgY29uc3QgZGl2ID0gY3JlYXRlQ2hlY2tsaXN0RGl2KHsgLi4uaXRlbSwgaXRlbUluZGV4IH0pXHJcblxyXG4gICAgY2hlY2tsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdilcclxuICB9KVxyXG5cclxuICB0b3BDb250YWluZXIuYXBwZW5kKHN0YXR1c0J0biwgaDIsIHJlbW92ZVRvZG9CdG4pXHJcbiAgY29udGFpbmVyLmFwcGVuZCh0b3BDb250YWluZXIsIGRldGFpbHMsIGJvdHRvbURpdilcclxuXHJcbiAgaWYgKHN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcpIHtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbXBsZXRlZCcpXHJcbiAgICBzdGF0dXNCdG4ucmVtb3ZlKClcclxuICB9XHJcblxyXG4gIHJldHVybiBjb250YWluZXJcclxufVxyXG4iLCJjb25zdCBwcm9qZWN0cyA9IFtdXHJcblxyXG5jb25zdCB1cGRhdGVWYWx1ZSA9IChmdW5jLCBzdGF0ZSkgPT4gKHtcclxuICB1cGRhdGU6ICh1cGRhdGVkVmFsdWUpID0+IGZ1bmMoeyAuLi5zdGF0ZSwgLi4udXBkYXRlZFZhbHVlIH0pLFxyXG59KVxyXG5cclxuY29uc3QgcmVtb3ZlSXRlbSA9IChzdGF0ZSkgPT4gKHtcclxuICByZW1vdmU6IChpbmRleCkgPT4gc3RhdGUuc3BsaWNlKGluZGV4LCAxKSxcclxufSlcclxuXHJcbmNvbnN0IGFkZFByb2plY3QgPSAob2JqKSA9PiB7XHJcbiAgY29uc3QgcCA9IHByb2plY3RGYWN0b3J5KG9iailcclxuXHJcbiAgcHJvamVjdHMucHVzaChwKVxyXG4gIHN0b3JlUHJvamVjdHMoKVxyXG5cclxuICByZXR1cm4geyAuLi5wLCBpbmRleDogcHJvamVjdHMubGVuZ3RoIC0gMSB9XHJcbn1cclxuXHJcbmNvbnN0IHJlbW92ZVByb2plY3QgPSAoaW5kZXgpID0+IHtcclxuICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgc3RvcmVQcm9qZWN0cygpXHJcbn1cclxuXHJcbmNvbnN0IGNoYW5nZVByb2plY3RUaXRsZSA9ICh7IGluZGV4LCB0aXRsZSB9KSA9PiB7XHJcbiAgcHJvamVjdHNbaW5kZXhdID0gcHJvamVjdHNbaW5kZXhdLnVwZGF0ZSh7IHRpdGxlIH0pXHJcbiAgc3RvcmVQcm9qZWN0cygpXHJcbn1cclxuXHJcbmNvbnN0IGFkZFRvZG8gPSAob2JqLCB7IGluZGV4IH0pID0+IHtcclxuICBjb25zdCB0b2RvID0gdG9kb0ZhY3Rvcnkob2JqKVxyXG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0c1tpbmRleF1cclxuXHJcbiAgcHJvamVjdC50b2RvTGlzdC5wdXNoKHRvZG8pXHJcbiAgc3RvcmVQcm9qZWN0cygpXHJcblxyXG4gIHJldHVybiB7IC4uLnRvZG8sIGluZGV4OiBwcm9qZWN0LnRvZG9MaXN0Lmxlbmd0aCAtIDEgfVxyXG59XHJcblxyXG5jb25zdCByZW1vdmVUb2RvID0gKHsgcHJvamVjdEluZGV4LCB0b2RvSW5kZXggfSkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhdXHJcbiAgcHJvamVjdC5yZW1vdmUodG9kb0luZGV4KVxyXG4gIHN0b3JlUHJvamVjdHMoKVxyXG59XHJcblxyXG5jb25zdCB1cGRhdGVUb2RvID0gKHVwZGF0ZWRWYWx1ZXMsIHsgcHJvamVjdEluZGV4LCB0b2RvSW5kZXggfSkgPT4ge1xyXG4gIGNvbnN0IHRvZG9MaXN0ID0gcHJvamVjdHNbcHJvamVjdEluZGV4XS50b2RvTGlzdFxyXG5cclxuICB0b2RvTGlzdFt0b2RvSW5kZXhdID0gdG9kb0xpc3RbdG9kb0luZGV4XS51cGRhdGUodXBkYXRlZFZhbHVlcylcclxuXHJcbiAgc3RvcmVQcm9qZWN0cygpXHJcblxyXG4gIHJldHVybiB7IC4uLnRvZG9MaXN0W3RvZG9JbmRleF0sIGluZGV4OiB0b2RvSW5kZXggfVxyXG59XHJcblxyXG5jb25zdCBhZGRUb0NoZWNrbGlzdCA9ICh7IHByb2plY3RJbmRleCwgdG9kb0luZGV4LCB0aXRsZSB9KSA9PiB7XHJcbiAgY29uc3QgY2hlY2tsaXN0ID0gY2hlY2tsaXN0RmFjdG9yeSh7IHRpdGxlIH0pXHJcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzW3Byb2plY3RJbmRleF1cclxuICBjb25zdCB0b2RvID0gcHJvamVjdC50b2RvTGlzdFt0b2RvSW5kZXhdXHJcbiAgY29uc3QgaXRlbUluZGV4ID0gcHJvamVjdC50b2RvTGlzdFt0b2RvSW5kZXhdLmNoZWNrbGlzdC5sZW5ndGhcclxuXHJcbiAgdG9kby5jaGVja2xpc3QucHVzaChjaGVja2xpc3QpXHJcbiAgc3RvcmVQcm9qZWN0cygpXHJcblxyXG4gIHJldHVybiB7IC4uLmNoZWNrbGlzdCwgdG9kb0luZGV4LCBpdGVtSW5kZXggfVxyXG59XHJcblxyXG5jb25zdCByZW1vdmVDaGVja2xpc3RJdGVtID0gKHsgcHJvamVjdEluZGV4LCB0b2RvSW5kZXgsIGl0ZW1JbmRleCB9KSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzW3Byb2plY3RJbmRleF1cclxuICBjb25zdCB0b2RvID0gcHJvamVjdC50b2RvTGlzdFt0b2RvSW5kZXhdXHJcblxyXG4gIHRvZG8ucmVtb3ZlKGl0ZW1JbmRleClcclxuICBzdG9yZVByb2plY3RzKClcclxufVxyXG5cclxuY29uc3QgY2hhbmdlQ2hlY2tsaXN0SXRlbVN0YXR1cyA9ICh7IHByb2plY3RJbmRleCwgdG9kb0luZGV4LCBpdGVtSW5kZXggfSkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhdXHJcbiAgY29uc3QgdG9kb0xpc3QgPSBwcm9qZWN0LnRvZG9MaXN0W3RvZG9JbmRleF1cclxuICBjb25zdCBjaGVja2xpc3QgPSB0b2RvTGlzdC5jaGVja2xpc3RcclxuICBjb25zdCBzdGF0dXMgPVxyXG4gICAgY2hlY2tsaXN0W2l0ZW1JbmRleF0uc3RhdHVzID09PSAnY29tcGxldGUnID8gJ2luY29tcGxldGUnIDogJ2NvbXBsZXRlJ1xyXG5cclxuICBjaGVja2xpc3RbaXRlbUluZGV4XSA9IGNoZWNrbGlzdFtpdGVtSW5kZXhdLnVwZGF0ZSh7IHN0YXR1cyB9KVxyXG5cclxuICBzdG9yZVByb2plY3RzKClcclxufVxyXG5cclxuY29uc3QgZ2V0UHJvamVjdCA9IChpbmRleCkgPT4ge1xyXG4gIGlmIChwcm9qZWN0cy5sZW5ndGggPCAxKSByZXR1cm5cclxuICByZXR1cm4geyAuLi5wcm9qZWN0c1tpbmRleF0sIGluZGV4IH1cclxufVxyXG5cclxuY29uc3QgZ2V0VG9kbyA9ICh7IHByb2plY3RJbmRleCwgdG9kb0luZGV4IH0pID0+IHtcclxuICByZXR1cm4gcHJvamVjdHNbcHJvamVjdEluZGV4XS50b2RvTGlzdFt0b2RvSW5kZXhdXHJcbn1cclxuXHJcbmNvbnN0IHN0b3JlUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdEpzb24gPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0cylcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBwcm9qZWN0SnNvbilcclxufVxyXG5cclxuY29uc3QgcmVzdG9yZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xyXG4gIHByb2plY3QudG9kb0xpc3QgPSBwcm9qZWN0LnRvZG9MaXN0Lm1hcCgodG9kbykgPT4ge1xyXG4gICAgdG9kby5jaGVja2xpc3QgPSB0b2RvLmNoZWNrbGlzdC5tYXAoKGl0ZW0pID0+IGNoZWNrbGlzdEZhY3RvcnkoaXRlbSkpXHJcbiAgICB0b2RvID0gdG9kb0ZhY3RvcnkodG9kbylcclxuXHJcbiAgICByZXR1cm4gdG9kb1xyXG4gIH0pXHJcblxyXG4gIHByb2plY3RzLnB1c2gocHJvamVjdEZhY3RvcnkocHJvamVjdCkpXHJcbn1cclxuXHJcbmNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHsgdGl0bGUsIHRvZG9MaXN0ID0gW10gfSA9IHt9KSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdCA9IHtcclxuICAgIHRpdGxlLFxyXG4gICAgdG9kb0xpc3QsXHJcbiAgfVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihcclxuICAgIHt9LFxyXG4gICAgcHJvamVjdCxcclxuICAgIHVwZGF0ZVZhbHVlKHByb2plY3RGYWN0b3J5LCBwcm9qZWN0KSxcclxuICAgIHJlbW92ZUl0ZW0ocHJvamVjdC50b2RvTGlzdClcclxuICApXHJcbn1cclxuXHJcbmNvbnN0IHRvZG9GYWN0b3J5ID0gKHtcclxuICB0aXRsZSxcclxuICBkZXNjcmlwdGlvbiA9ICcnLFxyXG4gIGR1ZURhdGUgPSAnJyxcclxuICBzdGF0dXMgPSAnaW5jb21wbGV0ZScsXHJcbiAgcHJpb3JpdHkgPSAnZ3JheScsXHJcbiAgbm90ZXMgPSAnJyxcclxuICBjaGVja2xpc3QgPSBbXSxcclxufSA9IHt9KSA9PiB7XHJcbiAgY29uc3QgdG9kbyA9IHtcclxuICAgIHRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBkdWVEYXRlLFxyXG4gICAgc3RhdHVzLFxyXG4gICAgbm90ZXMsXHJcbiAgICBjaGVja2xpc3QsXHJcbiAgICBwcmlvcml0eSxcclxuICB9XHJcblxyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKFxyXG4gICAge30sXHJcbiAgICB0b2RvLFxyXG4gICAgdXBkYXRlVmFsdWUodG9kb0ZhY3RvcnksIHRvZG8pLFxyXG4gICAgcmVtb3ZlSXRlbSh0b2RvLmNoZWNrbGlzdClcclxuICApXHJcbn1cclxuXHJcbmNvbnN0IGNoZWNrbGlzdEZhY3RvcnkgPSAoeyB0aXRsZSwgc3RhdHVzID0gJ2luY29tcGxldGUnIH0gPSB7fSkgPT4ge1xyXG4gIGNvbnN0IGl0ZW0gPSB7XHJcbiAgICB0aXRsZSxcclxuICAgIHN0YXR1cyxcclxuICB9XHJcblxyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB1cGRhdGVWYWx1ZShjaGVja2xpc3RGYWN0b3J5LCBpdGVtKSlcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBhZGRQcm9qZWN0LFxyXG4gIHJlbW92ZVByb2plY3QsXHJcbiAgY2hhbmdlUHJvamVjdFRpdGxlLFxyXG4gIGFkZFRvZG8sXHJcbiAgcmVtb3ZlVG9kbyxcclxuICB1cGRhdGVUb2RvLFxyXG4gIGFkZFRvQ2hlY2tsaXN0LFxyXG4gIHJlbW92ZUNoZWNrbGlzdEl0ZW0sXHJcbiAgY2hhbmdlQ2hlY2tsaXN0SXRlbVN0YXR1cyxcclxuICBnZXRQcm9qZWN0LFxyXG4gIGdldFRvZG8sXHJcbiAgc3RvcmVQcm9qZWN0cyxcclxuICByZXN0b3JlUHJvamVjdCxcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuaW1wb3J0ICogYXMgcHJvamVjdE1hbmFnZXIgZnJvbSAnLi9Ub2RvTGlzdC5qcydcclxuaW1wb3J0IGNyZWF0ZVByb2plY3RNb2RhbCBmcm9tICcuL1Byb2plY3RNb2RhbC5qcydcclxuaW1wb3J0IGNyZWF0ZVByb2plY3REaXYgZnJvbSAnLi9Qcm9qZWN0RGl2LmpzJ1xyXG5pbXBvcnQgY3JlYXRlVG9kb0RpdiBmcm9tICcuL1RvZG9EaXYuanMnXHJcbmltcG9ydCBjcmVhdGVDaGVja2xpc3REaXYgZnJvbSAnLi9DaGVja2xpc3REaXYuanMnXHJcblxyXG5mdW5jdGlvbiBvcGVuTW9kYWwoc2VsZWN0b3IpIHtcclxuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtb3ZlcmxheT1cIm1vZGFsXCJdJylcclxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW1vZGFsPVwiJHtzZWxlY3Rvcn1cIl1gKVxyXG5cclxuICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXHJcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcclxuXHJcbiAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3NlTW9kYWwoc2VsZWN0b3IpLCB7IG9uY2U6IHRydWUgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VNb2RhbChzZWxlY3Rvcikge1xyXG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1vdmVybGF5PVwibW9kYWxcIl0nKVxyXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbW9kYWw9XCIke3NlbGVjdG9yfVwiXWApXHJcblxyXG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcclxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuUHJvamVjdEZvcm0oY2FsbGJhY2spIHtcclxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1vZGFsPVwicHJvamVjdFwiXScpXHJcbiAgY29uc3QgZm9ybSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZvcm09XCJwcm9qZWN0XCJdJylcclxuXHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBjYWxsYmFjaywgeyBvbmNlOiB0cnVlIH0pXHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdyZXNldCcsICgpID0+IGNsb3NlTW9kYWwoJ3Byb2plY3QnKSwgeyBvbmNlOiB0cnVlIH0pXHJcblxyXG4gIG9wZW5Nb2RhbCgncHJvamVjdCcpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKVxyXG4gIGNvbnN0IHByb2plY3RDb250ZW50ID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ldyBGb3JtRGF0YShlLnRhcmdldCkpXHJcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QocHJvamVjdENvbnRlbnQpXHJcblxyXG4gIGRpc3BsYXlQcm9qZWN0KHByb2plY3QpXHJcbiAgZGlzcGxheVByb2plY3RMaShwcm9qZWN0KVxyXG4gIGNsb3NlTW9kYWwoJ3Byb2plY3QnKVxyXG5cclxuICBlLnRhcmdldC5yZXNldCgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KG9iaikge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNvbnRhaW5lcj1cInByb2plY3RcIl0nKVxyXG5cclxuICBpZiAob2JqID09IG51bGwpIHtcclxuICAgIGNvbnN0IHNoYWxsb3dDb3B5ID0gZGl2LmNsb25lTm9kZSgpXHJcblxyXG4gICAgZGVsZXRlIHNoYWxsb3dDb3B5LmRhdGFzZXQucHJvamVjdEluZGV4XHJcbiAgICBkaXYucmVwbGFjZVdpdGgoc2hhbGxvd0NvcHkpXHJcblxyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBjb25zdCBwcm9qZWN0RGl2ID0gY3JlYXRlUHJvamVjdERpdihvYmopXHJcbiAgY29uc3QgaW5wdXQgPSBwcm9qZWN0RGl2LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRvZG8tZm9ybT1cInRpdGxlXCJdJylcclxuXHJcbiAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBjb25zdCBidG5EYXRhc2V0ID0gZS50YXJnZXQuZGF0YXNldC5idG5cclxuXHJcbiAgICBpZiAoYnRuRGF0YXNldCA9PT0gJ2VkaXQtcHJvamVjdCcpIG9wZW5Qcm9qZWN0Rm9ybShjaGFuZ2VQcm9qZWN0VGl0bGUpXHJcbiAgICBlbHNlIGlmIChidG5EYXRhc2V0ID09PSAnb3Blbi1kZXRhaWxzJykgY2hhbmdlRGV0YWlsc0Rpc3BsYXkoZSlcclxuICAgIGVsc2UgaWYgKGJ0bkRhdGFzZXQgPT09ICdhZGQtY2hlY2tsaXN0LWl0ZW0nKSBhZGRUb0NoZWNrbGlzdChlKVxyXG4gICAgZWxzZSBpZiAoYnRuRGF0YXNldCA9PT0gJ2FkZC1kZXRhaWxzJykgb3Blbk1vZGFsKCdkZXRhaWxzJylcclxuICAgIGVsc2UgaWYgKGJ0bkRhdGFzZXQgPT09ICdjb25maXJtLWRldGFpbHMnKSBjbG9zZU1vZGFsKCdkZXRhaWxzJylcclxuICAgIGVsc2UgaWYgKGJ0bkRhdGFzZXQgPT09ICdvcGVuLWNoZWNrbGlzdCcpIG9wZW5DaGVja2xpc3RNb2RhbChlKVxyXG4gICAgZWxzZSBpZiAoYnRuRGF0YXNldCA9PT0gJ2l0ZW0tc3RhdHVzJykgY2hhbmdlSXRlbVN0YXR1cyhlKVxyXG4gICAgZWxzZSBpZiAoYnRuRGF0YXNldCA9PT0gJ3JlbW92ZS1kZXRhaWxzJykgcmVzZXREZXRhaWxzKCdkZXRhaWxzJylcclxuICAgIGVsc2UgaWYgKGJ0bkRhdGFzZXQgPT09ICd0b2RvLXN0YXR1cycpIGNoYW5nZVRvZG9TdGF0dXMoZSlcclxuICAgIGVsc2UgaWYgKGJ0bkRhdGFzZXQgPT09ICdyZW1vdmUtcHJvamVjdCcpIHJlbW92ZVByb2plY3QoZSlcclxuICAgIGVsc2UgaWYgKGJ0bkRhdGFzZXQgPT09ICdyZW1vdmUtdG9kbycpIHJlbW92ZVRvZG8oZSlcclxuICAgIGVsc2UgaWYgKGJ0bkRhdGFzZXQgPT09ICdkZWxldGUtY2hlY2tsaXN0LWl0ZW0nKSBkZWxldGVDaGVja2xpc3RJdGVtKGUpXHJcbiAgICBlbHNlIGlmIChidG5EYXRhc2V0ID09PSAnZWRpdC10b2RvJykgb3BlblRvZG9Nb2RhbChlKVxyXG4gICAgZWxzZSBpZiAoYnRuRGF0YXNldCA9PT0gJ2FkZC1jaGVja2xpc3QtaXRlbScpIGFkZFRvQ2hlY2tsaXN0KGUpXHJcbiAgICBlbHNlIGlmIChidG5EYXRhc2V0ID09PSAnY2xvc2UtY2hlY2tsaXN0JykgY2xvc2VDaGVja2xpc3RNb2RhbCgnY2hlY2tsaXN0JylcclxuICB9KVxyXG5cclxuICBwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGlmIChlLnRhcmdldC5kYXRhc2V0LmZvcm0gPT09ICdhZGQtdG9kbycpIGFkZFRvZG8oZSlcclxuICAgIGVsc2UgaWYgKGUudGFyZ2V0LmRhdGFzZXQuZm9ybSA9PT0gJ2VkaXQtdG9kbycpIHJlcGxhY2VUb2RvKGUpXHJcbiAgfSlcclxuXHJcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBjaGFuZ2VBZGRUb2RvQnRuKVxyXG5cclxuICBkaXYucmVwbGFjZVdpdGgocHJvamVjdERpdilcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlQWRkVG9kb0J0bihlKSB7XHJcbiAgY29uc3QgdGV4dCA9IGUudGFyZ2V0LnZhbHVlLnRyaW0oKVxyXG4gIGNvbnN0IGlzVmFsaWQgPSAvXlthLXpBLVoxLTldLiovLnRlc3QodGV4dClcclxuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1idG49XCJhZGQtdG9kb1wiXScpXHJcblxyXG4gIGlmIChpc1ZhbGlkKSBhZGRCdG4uZGlzYWJsZWQgPSBmYWxzZVxyXG4gIGVsc2UgYWRkQnRuLmRpc2FibGVkID0gdHJ1ZVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldERldGFpbHMoKSB7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1kZXRhaWxzPVwiZGVzY3JpcHRpb25cIl0nKVxyXG4gIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZGV0YWlscz1cIm5vdGVzXCJdJylcclxuICBjb25zdCByYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWRldGFpbHM9XCJwcmlvcml0eVwiXTpjaGVja2VkJylcclxuXHJcbiAgY2xvc2VNb2RhbCgnZGV0YWlscycpXHJcbiAgZGVzY3JpcHRpb24udmFsdWUgPSBudWxsXHJcbiAgbm90ZXMudmFsdWUgPSBudWxsXHJcblxyXG4gIGlmIChyYWRpbyAhPSBudWxsKSByYWRpby5jaGVja2VkID0gZmFsc2VcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlUHJvamVjdFRpdGxlKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KClcclxuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvamVjdC1pbmRleCcpXHJcbiAgY29uc3QgaW5kZXggPSBwcm9qZWN0LmRhdGFzZXQucHJvamVjdEluZGV4XHJcbiAgY29uc3Qgb2JqID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ldyBGb3JtRGF0YShlLnRhcmdldCkpXHJcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcm9qZWN0PVwidGl0bGVcIicpXHJcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wcm9qZWN0LWxpPVwiJHtpbmRleH1cIl1gKVxyXG4gIGNvbnN0IGEgPSBsaS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1hbmNob3I9XCJwcm9qZWN0XCJdYClcclxuICBjb25zdCB0aXRsZSA9IG9iai50aXRsZVxyXG5cclxuICBoMS50ZXh0Q29udGVudCA9IHRpdGxlXHJcbiAgYS50ZXh0Q29udGVudCA9IHRpdGxlXHJcbiAgcHJvamVjdE1hbmFnZXIuY2hhbmdlUHJvamVjdFRpdGxlKHsgdGl0bGUsIGluZGV4IH0pXHJcblxyXG4gIGNsb3NlTW9kYWwoJ3Byb2plY3QnKVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdExpKHsgdGl0bGUsIGluZGV4IH0pIHtcclxuICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXVsPVwicHJvamVjdFwiXScpXHJcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXHJcbiAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG5cclxuICBhLmhyZWYgPSAnIydcclxuICBhLnRleHRDb250ZW50ID0gdGl0bGVcclxuICBhLmRhdGFzZXQuYW5jaG9yID0gJ3Byb2plY3QnXHJcblxyXG4gIGxpLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUtbGknKVxyXG4gIGxpLmRhdGFzZXQucHJvamVjdExpID0gaW5kZXhcclxuXHJcbiAgbGkuYXBwZW5kQ2hpbGQoYSlcclxuICB1bC5hcHBlbmRDaGlsZChsaSlcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlRGlzcGxheVByb2plY3QoZSkge1xyXG4gIGNvbnN0IGxpID0gZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtcHJvamVjdC1saV0nKVxyXG4gIGNvbnN0IGluZGV4ID0gbGkuZGF0YXNldC5wcm9qZWN0TGlcclxuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdChpbmRleClcclxuXHJcbiAgZGlzcGxheVByb2plY3QocHJvamVjdClcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChlKSB7XHJcbiAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LnJlbW92ZUluZGV4XHJcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS11bD1cInByb2plY3RcIl0nKVxyXG4gIGNvbnN0IGxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcHJvamVjdC1saT1cIiR7aW5kZXh9XCJdYClcclxuXHJcbiAgbGkucmVtb3ZlKClcclxuICBwcm9qZWN0TWFuYWdlci5yZW1vdmVQcm9qZWN0KGluZGV4KVxyXG4gIHVsLmNoaWxkTm9kZXMuZm9yRWFjaCgobGksIGluZGV4KSA9PiAobGkuZGF0YXNldC5wcm9qZWN0TGkgPSBpbmRleCkpXHJcblxyXG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0KDApXHJcblxyXG4gIGRpc3BsYXlQcm9qZWN0KHByb2plY3QpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRvZG8oZSkge1xyXG4gIGNvbnN0IHRvZG9Db250ZW50ID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ldyBGb3JtRGF0YShlLnRhcmdldCkpXHJcbiAgY29uc3QgcHJvamVjdCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXByb2plY3QtaW5kZXgnKVxyXG4gIGNvbnN0IGluZGV4ID0gcHJvamVjdC5kYXRhc2V0LnByb2plY3RJbmRleFxyXG4gIGNvbnN0IHRvZG8gPSBwcm9qZWN0TWFuYWdlci5hZGRUb2RvKHRvZG9Db250ZW50LCB7IGluZGV4IH0pXHJcblxyXG4gIGRpc3BsYXlUb2RvKHRvZG8pXHJcbiAgZS50YXJnZXQucmVzZXQoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5VG9kbyh0b2RvKSB7XHJcbiAgaWYgKCF0b2RvLmhhc093blByb3BlcnR5KCd0aXRsZScpKSByZXR1cm5cclxuXHJcbiAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNvbnRhaW5lcj1cInRvZG9cIl0nKVxyXG4gIGNvbnN0IGRpdiA9IGNyZWF0ZVRvZG9EaXYodG9kbylcclxuXHJcbiAgY29uc3QgYnRuID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJ0bj1cIm9wZW4tY2hlY2tsaXN0XCInKVxyXG5cclxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuQ2hlY2tsaXN0TW9kYWwpXHJcblxyXG4gIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVUb2RvKGUpIHtcclxuICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvamVjdC1pbmRleF0nKVxyXG4gIGNvbnN0IHRvZG9EaXYgPSBlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS10b2RvLWluZGV4XScpXHJcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdERpdi5kYXRhc2V0LnByb2plY3RJbmRleFxyXG4gIGNvbnN0IHRvZG9JbmRleCA9IHRvZG9EaXYuZGF0YXNldC50b2RvSW5kZXhcclxuXHJcbiAgdG9kb0Rpdi5yZW1vdmUoKVxyXG5cclxuICBjb25zdCB0b2RvTGlzdCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG9kby1pbmRleF0nKSlcclxuXHJcbiAgdG9kb0xpc3QuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+ICh0b2RvLmRhdGFzZXQudG9kb0luZGV4ID0gaW5kZXgpKVxyXG4gIHByb2plY3RNYW5hZ2VyLnJlbW92ZVRvZG8oeyBwcm9qZWN0SW5kZXgsIHRvZG9JbmRleCB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuVG9kb01vZGFsKGUpIHtcclxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1vZGFsPVwiZWRpdC10b2RvXCInKVxyXG4gIGNvbnN0IGZvcm0gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1mb3JtPVwiZWRpdC10b2RvXCJdJylcclxuICBjb25zdCBjbG9zZUJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJ0bj1cImNsb3NlLWVkaXQtdG9kb1wiXScpXHJcbiAgY29uc3QgcHJvamVjdERpdiA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXByb2plY3QtaW5kZXhdJylcclxuICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0RGl2LmRhdGFzZXQucHJvamVjdEluZGV4XHJcbiAgY29uc3QgdG9kb0RpdiA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXRvZG8taW5kZXhdJylcclxuICBjb25zdCB0b2RvSW5kZXggPSB0b2RvRGl2LmRhdGFzZXQudG9kb0luZGV4XHJcbiAgY29uc3QgdG9kbyA9IHByb2plY3RNYW5hZ2VyLmdldFRvZG8oeyBwcm9qZWN0SW5kZXgsIHRvZG9JbmRleCB9KVxyXG4gIGNvbnN0IHRleHRJbnB1dCA9IEFycmF5LmZyb20oZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10b2RvLWZvcm0taW5wdXQnKSlcclxuICBjb25zdCBzdGF0dXMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNlbGVjdC1vcHRpb249XCIke3RvZG8uc3RhdHVzfVwiXWApXHJcbiAgY29uc3QgcHJpb3JpdHkgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBgW2RhdGEtdG9kby1mb3JtLXJhZGlvPVwiJHt0b2RvLnByaW9yaXR5fVwiXWBcclxuICApXHJcblxyXG4gIGZvcm0uZGF0YXNldC5mb3JtVG9kb0luZGV4ID0gdG9kb0luZGV4XHJcbiAgdGV4dElucHV0LmZvckVhY2goKGlucHV0KSA9PiAoaW5wdXQudmFsdWUgPSB0b2RvW2lucHV0Lm5hbWVdKSlcclxuICBzdGF0dXMuc2VsZWN0ZWQgPSB0cnVlXHJcblxyXG4gIHByaW9yaXR5LmNoZWNrZWQgPSB0cnVlXHJcblxyXG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2VNb2RhbCgnZWRpdC10b2RvJykpXHJcblxyXG4gIG9wZW5Nb2RhbCgnZWRpdC10b2RvJylcclxufVxyXG5cclxuZnVuY3Rpb24gcmVwbGFjZVRvZG8oZSkge1xyXG4gIGNvbnN0IHRvZG9Db250ZW50ID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ldyBGb3JtRGF0YShlLnRhcmdldCkpXHJcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5mb3JtUHJvamVjdEluZGV4XHJcbiAgY29uc3QgdG9kb0luZGV4ID0gZS50YXJnZXQuZGF0YXNldC5mb3JtVG9kb0luZGV4XHJcbiAgY29uc3QgdG9kbyA9IHByb2plY3RNYW5hZ2VyLnVwZGF0ZVRvZG8odG9kb0NvbnRlbnQsIHtcclxuICAgIHByb2plY3RJbmRleCxcclxuICAgIHRvZG9JbmRleCxcclxuICB9KVxyXG5cclxuICBjb25zdCBvbGRUb2RvRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdG9kby1pbmRleD1cIiR7dG9kb0luZGV4fVwiYClcclxuICBjb25zdCBuZXdUb2RvRGl2ID0gY3JlYXRlVG9kb0Rpdih0b2RvKVxyXG5cclxuICBvbGRUb2RvRGl2LnJlcGxhY2VXaXRoKG5ld1RvZG9EaXYpXHJcblxyXG4gIGNsb3NlTW9kYWwoJ2VkaXQtdG9kbycpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVRvZG9TdGF0dXMoZSkge1xyXG4gIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcm9qZWN0LWluZGV4XScpXHJcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdERpdi5kYXRhc2V0LnByb2plY3RJbmRleFxyXG4gIGNvbnN0IHRvZG9EaXYgPSBlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS10b2RvLWluZGV4XScpXHJcbiAgY29uc3QgdG9kb0luZGV4ID0gdG9kb0Rpdi5kYXRhc2V0LnRvZG9JbmRleFxyXG4gIGNvbnN0IHRvZG8gPSBwcm9qZWN0TWFuYWdlci5nZXRUb2RvKHsgcHJvamVjdEluZGV4LCB0b2RvSW5kZXggfSlcclxuICBjb25zdCBzdGF0dXMgPSB0b2RvLnN0YXR1cyA9PT0gJ2NvbXBsZXRlJyA/ICdpbmNvbXBsZXRlJyA6ICdjb21wbGV0ZSdcclxuXHJcbiAgcHJvamVjdE1hbmFnZXIudXBkYXRlVG9kbyh7IHN0YXR1cyB9LCB7IHByb2plY3RJbmRleCwgdG9kb0luZGV4IH0pXHJcblxyXG4gIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2luY29tcGxldGUtYnRuJylcclxuICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZS1idG4nKVxyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuQ2hlY2tsaXN0TW9kYWwoZSkge1xyXG4gIGNvbnN0IHRvZG9JbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuY2hlY2tsaXN0VG9kb0luZGV4XHJcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tb2RhbD1cImNoZWNrbGlzdFwiXScpXHJcblxyXG4gIG1vZGFsLmRhdGFzZXQubW9kYWxUb2RvSW5kZXggPSB0b2RvSW5kZXhcclxuXHJcbiAgb3Blbk1vZGFsKCdjaGVja2xpc3QnKVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUb0NoZWNrbGlzdChlKSB7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jaGVja2xpc3Q9XCJ0aXRsZVwiXScpXHJcbiAgY29uc3QgdGl0bGUgPSBpbnB1dC52YWx1ZVxyXG5cclxuICBpZiAodGl0bGUgPT0gJycpIHJldHVyblxyXG5cclxuICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvamVjdC1pbmRleF0nKVxyXG4gIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3REaXYuZGF0YXNldC5wcm9qZWN0SW5kZXhcclxuICBjb25zdCBtb2RhbCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLW1vZGFsLXRvZG8taW5kZXhdJylcclxuICBjb25zdCB0b2RvSW5kZXggPSBtb2RhbC5kYXRhc2V0Lm1vZGFsVG9kb0luZGV4XHJcbiAgY29uc3QgaXRlbSA9IHByb2plY3RNYW5hZ2VyLmFkZFRvQ2hlY2tsaXN0KHsgcHJvamVjdEluZGV4LCB0b2RvSW5kZXgsIHRpdGxlIH0pXHJcblxyXG4gIGRpc3BsYXlDaGVja2xpc3RJdGVtKGl0ZW0pXHJcblxyXG4gIGlucHV0LnZhbHVlID0gJydcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VDaGVja2xpc3RNb2RhbCgpIHtcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jaGVja2xpc3Q9XCJ0aXRsZVwiXScpXHJcblxyXG4gIGRpdi50ZXh0Q29udGVudCA9ICcnXHJcblxyXG4gIGNsb3NlTW9kYWwoJ2NoZWNrbGlzdCcpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlDaGVja2xpc3RJdGVtKHsgdGl0bGUsIHRvZG9JbmRleCwgaXRlbUluZGV4IH0gPSB7fSkge1xyXG4gIGlmICh0aXRsZSA9PSBudWxsKSByZXR1cm5cclxuXHJcbiAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRvZG8taW5kZXg9XCIke3RvZG9JbmRleH1cIl1gKVxyXG4gIGNvbnN0IGRpdiA9IHRvZG9EaXYucXVlcnlTZWxlY3RvcignW2RhdGEtY29udGFpbmVyPVwiY2hlY2tsaXN0XCJdJylcclxuXHJcbiAgY29uc3QgY2hlY2tsaXN0RGl2ID0gY3JlYXRlQ2hlY2tsaXN0RGl2KHsgdGl0bGUsIGl0ZW1JbmRleCB9KVxyXG5cclxuICBkaXYuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0RGl2KVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVDaGVja2xpc3RJdGVtKGUpIHtcclxuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvamVjdC1pbmRleF0nKVxyXG4gIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3QuZGF0YXNldC5wcm9qZWN0SW5kZXhcclxuICBjb25zdCB0b2RvID0gZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtdG9kby1pbmRleF0nKVxyXG4gIGNvbnN0IHRvZG9JbmRleCA9IHRvZG8uZGF0YXNldC50b2RvSW5kZXhcclxuXHJcbiAgY29uc3QgaXRlbSA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWNoZWNrbGlzdC1pbmRleF0nKVxyXG4gIGNvbnN0IGl0ZW1JbmRleCA9IGl0ZW0uZGF0YXNldC5jaGVja2xpc3RJbmRleFxyXG5cclxuICBpdGVtLnJlbW92ZSgpXHJcbiAgcHJvamVjdE1hbmFnZXIucmVtb3ZlQ2hlY2tsaXN0SXRlbSh7IHByb2plY3RJbmRleCwgdG9kb0luZGV4LCBpdGVtSW5kZXggfSlcclxuXHJcbiAgY29uc3QgY2hlY2tsaXN0SXRlbXMgPSB0b2RvLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNoZWNrbGlzdC1pbmRleF0nKVxyXG5cclxuICBjaGVja2xpc3RJdGVtcy5mb3JFYWNoKFxyXG4gICAgKGNoZWNrbGlzdCwgaW5kZXgpID0+IChjaGVja2xpc3QuZGF0YXNldC5jaGVja2xpc3RJbmRleCA9IGluZGV4KVxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlSXRlbVN0YXR1cyhlKSB7XHJcbiAgY29uc3QgcHJvamVjdCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXByb2plY3QtaW5kZXhdJylcclxuICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0LmRhdGFzZXQucHJvamVjdEluZGV4XHJcbiAgY29uc3QgdG9kbyA9IGUudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXRvZG8taW5kZXgnKVxyXG4gIGNvbnN0IHRvZG9JbmRleCA9IHRvZG8uZGF0YXNldC50b2RvSW5kZXhcclxuICBjb25zdCBpdGVtID0gZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtY2hlY2tsaXN0LWluZGV4XScpXHJcbiAgY29uc3QgaXRlbUluZGV4ID0gaXRlbS5kYXRhc2V0LmNoZWNrbGlzdEluZGV4XHJcblxyXG4gIHByb2plY3RNYW5hZ2VyLmNoYW5nZUNoZWNrbGlzdEl0ZW1TdGF0dXMoe1xyXG4gICAgcHJvamVjdEluZGV4LFxyXG4gICAgdG9kb0luZGV4LFxyXG4gICAgaXRlbUluZGV4LFxyXG4gIH0pXHJcblxyXG4gIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2luY29tcGxldGUtYnRuJylcclxuICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZS1idG4nKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VEZXRhaWxzRGlzcGxheShlKSB7XHJcbiAgY29uc3QgZGV0YWlscyA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNTaWJsaW5nXHJcblxyXG4gIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gJ09wZW4gRGV0YWlscycpIHtcclxuICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gJ0Nsb3NlIERldGFpbHMnXHJcbiAgfSBlbHNlIHtcclxuICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gJ09wZW4gRGV0YWlscydcclxuICB9XHJcblxyXG4gIGRldGFpbHMuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzdG9yZVByb2plY3RzKHByb2plY3RzKSB7XHJcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcclxuICAgIHByb2plY3RNYW5hZ2VyLnJlc3RvcmVQcm9qZWN0KHByb2plY3QpXHJcbiAgICBkaXNwbGF5UHJvamVjdExpKHsgLi4ucHJvamVjdCwgaW5kZXggfSlcclxuICB9KVxyXG5cclxuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdE1hbmFnZXIuZ2V0UHJvamVjdCgwKVxyXG5cclxuICBpZiAocHJvamVjdCA9PSBudWxsKSByZXR1cm5cclxuXHJcbiAgZGlzcGxheVByb2plY3QoeyAuLi5wcm9qZWN0LCBpbmRleDogMCB9KVxyXG59XHJcblxyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtY29udGVudD1cImNvbnRhaW5lclwiXScpXHJcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5jb25zdCBtb2RhbCA9IGNyZWF0ZVByb2plY3RNb2RhbCgnYWRkLXByb2plY3QnKVxyXG5jb25zdCBhc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxyXG5jb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG5jb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHJcbmFzaWRlLmNsYXNzTGlzdC5hZGQoJ2FzaWRlJywgJ2ZsZXgtY29udGFpbmVyJylcclxuXHJcbm92ZXJsYXkuZGF0YXNldC5vdmVybGF5ID0gJ21vZGFsJ1xyXG5vdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicsICdvdmVybGF5JylcclxuXHJcbnVsLmRhdGFzZXQudWwgPSAncHJvamVjdCdcclxudWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtdWwnLCAnZmxleC1jb250YWluZXInKVxyXG5cclxucHJvamVjdENvbnRhaW5lci5kYXRhc2V0LmNvbnRhaW5lciA9ICdwcm9qZWN0J1xyXG5cclxucHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRhaW5lcicpXHJcblxyXG5idG4udHlwZSA9ICdidXR0b24nXHJcbmJ0bi50ZXh0Q29udGVudCA9ICdOZXcgUHJvamVjdCdcclxuYnRuLmRhdGFzZXQuYnRuID0gJ25ldy1wcm9qZWN0J1xyXG5idG4uY2xhc3NMaXN0LmFkZCgnbmV3LXByb2plY3QtYnRuJylcclxuXHJcbmFzaWRlLmFwcGVuZChidG4sIHVsKVxyXG5jb250ZW50LmFwcGVuZChhc2lkZSwgcHJvamVjdENvbnRhaW5lciwgb3ZlcmxheSwgbW9kYWwpXHJcblxyXG5hc2lkZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgY29uc3QgZGF0YXNldCA9IGUudGFyZ2V0LmRhdGFzZXRcclxuICBpZiAoZGF0YXNldC5idG4gPT09ICduZXctcHJvamVjdCcpIG9wZW5Qcm9qZWN0Rm9ybShhZGRQcm9qZWN0KVxyXG4gIGlmIChkYXRhc2V0LmFuY2hvciA9PT0gJ3Byb2plY3QnKSBjaGFuZ2VEaXNwbGF5UHJvamVjdChlKVxyXG59KVxyXG5cclxuY29uc3Qgc3RvcmVkUHJvamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpXHJcblxyXG5pZiAoc3RvcmVkUHJvamVjdCAhPSBudWxsKSByZXN0b3JlUHJvamVjdHMoc3RvcmVkUHJvamVjdClcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9