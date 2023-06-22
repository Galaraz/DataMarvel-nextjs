"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/trending";
exports.ids = ["pages/api/trending"];
exports.modules = {

/***/ "(api)/./lib/tmdb.js":
/*!*********************!*\
  !*** ./lib/tmdb.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiBase\": () => (/* binding */ apiBase),\n/* harmony export */   \"apiLocal\": () => (/* binding */ apiLocal),\n/* harmony export */   \"apikey\": () => (/* binding */ apikey)\n/* harmony export */ });\n//Pela ciencia\nconst apikey = \"5a9ac975da01e7ff2c086d9b3076541a\";\nconst apiBase = \"https://api.themoviedb.org/3\";\n//export const apiLocal = 'https://cinemanext.pages.dev/';\nconst apiLocal = \"http://localhost:3000/\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvdG1kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxjQUFjO0FBQ1AsTUFBTUEsTUFBTSxHQUFFLGtDQUFrQyxDQUFDO0FBQ2pELE1BQU1DLE9BQU8sR0FBRyw4QkFBOEIsQ0FBQztBQUN0RCwwREFBMEQ7QUFDbkQsTUFBTUMsUUFBUSxHQUFHLHdCQUF3QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGF0YW1hcnZlbC1uZXh0anMvLi9saWIvdG1kYi5qcz9iYTdiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vUGVsYSBjaWVuY2lhXHJcbmV4cG9ydCBjb25zdCBhcGlrZXkgPSc1YTlhYzk3NWRhMDFlN2ZmMmMwODZkOWIzMDc2NTQxYSc7XHJcbmV4cG9ydCBjb25zdCBhcGlCYXNlID0gJ2h0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMnO1xyXG4vL2V4cG9ydCBjb25zdCBhcGlMb2NhbCA9ICdodHRwczovL2NpbmVtYW5leHQucGFnZXMuZGV2Lyc7XHJcbmV4cG9ydCBjb25zdCBhcGlMb2NhbCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJzsiXSwibmFtZXMiOlsiYXBpa2V5IiwiYXBpQmFzZSIsImFwaUxvY2FsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/tmdb.js\n");

/***/ }),

/***/ "(api)/./pages/api/trending.js":
/*!*******************************!*\
  !*** ./pages/api/trending.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_tmdb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/tmdb */ \"(api)/./lib/tmdb.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const result = await fetch(`${_lib_tmdb__WEBPACK_IMPORTED_MODULE_0__.apiBase}/trending/movie/week?api_key=${_lib_tmdb__WEBPACK_IMPORTED_MODULE_0__.apikey}&language=pt-BR`);\n    const json = await result.json();\n    return res.status(200).json({\n        list: json.results\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdHJlbmRpbmcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBaUQ7QUFHakQsaUVBQWUsT0FBT0UsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDaEMsTUFBTUMsTUFBTSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxDQUFDLEVBQUVMLDhDQUFPLENBQUMsNkJBQTZCLEVBQUVDLDZDQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDN0YsTUFBTUssSUFBSSxHQUFHLE1BQU1GLE1BQU0sQ0FBQ0UsSUFBSSxFQUFFO0lBQ2hDLE9BQVFILEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDRCxJQUFJLENBQUM7UUFBQ0UsSUFBSSxFQUFFRixJQUFJLENBQUNHLE9BQU87S0FBRSxDQUFDLENBQUM7QUFFckQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RhdGFtYXJ2ZWwtbmV4dGpzLy4vcGFnZXMvYXBpL3RyZW5kaW5nLmpzPzZkOGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBpQmFzZSwgYXBpa2V5IH0gZnJvbSBcIi4uLy4uL2xpYi90bWRiXCI7ICAgIFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChgJHthcGlCYXNlfS90cmVuZGluZy9tb3ZpZS93ZWVrP2FwaV9rZXk9JHthcGlrZXl9Jmxhbmd1YWdlPXB0LUJSYCk7XHJcbiAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXN1bHQuanNvbigpO1xyXG4gICByZXR1cm4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtsaXN0OiBqc29uLnJlc3VsdHMgfSk7XHJcblxyXG4gIH1cclxuICAiXSwibmFtZXMiOlsiYXBpQmFzZSIsImFwaWtleSIsInJlcSIsInJlcyIsInJlc3VsdCIsImZldGNoIiwianNvbiIsInN0YXR1cyIsImxpc3QiLCJyZXN1bHRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/trending.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/trending.js"));
module.exports = __webpack_exports__;

})();