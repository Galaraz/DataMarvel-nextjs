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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"code\": \"Home_code__suPER\",\n\t\"logo\": \"Home_logo__27_tb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RhdGFtYXJ2ZWwtbmV4dGpzLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcz83MTI3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX19iQ09oWVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fX25MamlRXCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fX0xwTDFcIixcblx0XCJmb290ZXJcIjogXCJIb21lX2Zvb3Rlcl9fX19UN0tcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19zdVBFUlwiLFxuXHRcImxvZ29cIjogXCJIb21lX2xvZ29fXzI3X3RiXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Busca)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Busca({ list  }) {\n    const { 0: searchText , 1: setSearchText  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { 0: heroList , 1: setHeroList  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    console.log(searchText);\n    const handlerSearch = async ()=>{\n        if (searchText !== \"\") {\n            const result = await fetch(`/api/search?q=${searchText}`);\n            const json = await result.json();\n            const { results  } = json.data;\n            console.log(json.data);\n            setHeroList(results);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"site\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Web\\\\Documents\\\\next\\\\curso\\\\DataMarvel-nextjs\\\\pages\\\\index.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Web\\\\Documents\\\\next\\\\curso\\\\DataMarvel-nextjs\\\\pages\\\\index.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Web\\\\Documents\\\\next\\\\curso\\\\DataMarvel-nextjs\\\\pages\\\\index.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        children: \"Busca\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Web\\\\Documents\\\\next\\\\curso\\\\DataMarvel-nextjs\\\\pages\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: searchText,\n                        onChange: (e)=>setSearchText(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Web\\\\Documents\\\\next\\\\curso\\\\DataMarvel-nextjs\\\\pages\\\\index.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Web\\\\Documents\\\\next\\\\curso\\\\DataMarvel-nextjs\\\\pages\\\\index.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handlerSearch,\n                        children: \"Buscar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Web\\\\Documents\\\\next\\\\curso\\\\DataMarvel-nextjs\\\\pages\\\\index.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Web\\\\Documents\\\\next\\\\curso\\\\DataMarvel-nextjs\\\\pages\\\\index.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Web\\\\Documents\\\\next\\\\curso\\\\DataMarvel-nextjs\\\\pages\\\\index.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUE0QjtBQUVLO0FBRWE7QUFFL0IsU0FBU0csS0FBSyxDQUFDLEVBQUNDLElBQUksR0FBQyxFQUFFO0lBQ3JDLE1BQU0sS0FBQ0MsVUFBVSxNQUFFQyxhQUFhLE1BQUlMLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQ2hELE1BQU0sS0FBQ00sUUFBUSxNQUFFQyxXQUFXLE1BQUlQLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBRTdDUSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsVUFBVSxDQUFDLENBQUM7SUFFeEIsTUFBTU0sYUFBYSxHQUFHLFVBQVk7UUFDaEMsSUFBSU4sVUFBVSxLQUFLLEVBQUUsRUFBRTtZQUNyQixNQUFNTyxNQUFNLEdBQUcsTUFBTUMsS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFUixVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3pELE1BQU1TLElBQUksR0FBRyxNQUFNRixNQUFNLENBQUNFLElBQUksRUFBRTtZQUNoQyxNQUFNLEVBQUVDLE9BQU8sR0FBRSxHQUFHRCxJQUFJLENBQUNFLElBQUk7WUFDN0JQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSSxJQUFJLENBQUNFLElBQUksQ0FBQyxDQUFDO1lBQ3ZCUixXQUFXLENBQUNPLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7SUFDSCxDQUFDO0lBRUMscUJBQ0UsOERBQUNFLEtBQUc7UUFBQ0MsU0FBUyxFQUFFaEIsMEVBQWdCOzswQkFDOUIsOERBQUNGLGtEQUFJOztrQ0FDSCw4REFBQ29CLE9BQUs7a0NBQUMsTUFBSTs7Ozs7NEJBQVE7a0NBQ25CLDhEQUFDQyxNQUFJO3dCQUFDQyxHQUFHLEVBQUMsTUFBTTt3QkFBQ0MsSUFBSSxFQUFDLGNBQWM7Ozs7OzRCQUFHOzs7Ozs7b0JBQ2xDOzBCQUVQLDhEQUFDQyxNQUFJO2dCQUFDTixTQUFTLEVBQUVoQixxRUFBVzs7a0NBQzFCLDhEQUFDdUIsSUFBRTt3QkFBQ1AsU0FBUyxFQUFFaEIsc0VBQVk7a0NBQUUsT0FFN0I7Ozs7OzRCQUFLO2tDQUVMLDhEQUFDd0IsT0FBSzt3QkFBQ0MsSUFBSSxFQUFDLE1BQU07d0JBQUNDLEtBQUssRUFBRXZCLFVBQVU7d0JBQUV3QixRQUFRLEVBQUVDLENBQUFBLENBQUMsR0FBRXhCLGFBQWEsQ0FBQ3dCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLLENBQUM7Ozs7OzRCQUFJO2tDQUNwRiw4REFBQ0ksSUFBRTs7Ozs0QkFBTTtrQ0FDVCw4REFBQ0MsUUFBTTt3QkFBQ0MsT0FBTyxFQUFFdkIsYUFBYTtrQ0FBRSxRQUFNOzs7Ozs0QkFBUzs7Ozs7O29CQWdCMUM7Ozs7OztZQUVILENBQ1A7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGF0YW1hcnZlbC1uZXh0anMvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnVzY2Eoe2xpc3R9KSB7XHJcbiBjb25zdCBbc2VhcmNoVGV4dCwgc2V0U2VhcmNoVGV4dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiBjb25zdCBbaGVyb0xpc3QsIHNldEhlcm9MaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbmNvbnNvbGUubG9nKHNlYXJjaFRleHQpO1xyXG5cclxuY29uc3QgaGFuZGxlclNlYXJjaCA9IGFzeW5jICgpID0+IHsgXHJcbiAgaWYgKHNlYXJjaFRleHQgIT09ICcnKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChgL2FwaS9zZWFyY2g/cT0ke3NlYXJjaFRleHR9YCk7XHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcclxuICAgIGNvbnN0IHsgcmVzdWx0cyB9ID0ganNvbi5kYXRhO1xyXG4gICAgY29uc29sZS5sb2coanNvbi5kYXRhKTtcclxuICAgIHNldEhlcm9MaXN0KHJlc3VsdHMpO1xyXG4gIH1cclxufVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PiBcclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPnNpdGU8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICBCdXNjYVxyXG4gICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtzZWFyY2hUZXh0fSBvbkNoYW5nZT17ZT0+c2V0U2VhcmNoVGV4dChlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgPGJyPjwvYnI+ICAgIFxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlclNlYXJjaH0+QnVzY2FyPC9idXR0b24+XHJcblxyXG4gICAgICAgXHJcbiAgIFxyXG4gICAgICAgIHsvKiA8dWw+XHJcbiAgICAgICAgICB7aGVyb0xpc3QubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9e2AvbW92aWUvJHtpdGVtLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbCR7aXRlbS5wb3N0ZXJfcGF0aH1gfSB3aWR0aD1cIjE1MFwiIC8+PGJyLz5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+ICovfVxyXG4gICAgICBcclxuICAgXHJcbiAgICAgIDwvbWFpbj5cclxuICAgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbiAiXSwibmFtZXMiOlsiSGVhZCIsInVzZVN0YXRlIiwic3R5bGVzIiwiQnVzY2EiLCJsaXN0Iiwic2VhcmNoVGV4dCIsInNldFNlYXJjaFRleHQiLCJoZXJvTGlzdCIsInNldEhlcm9MaXN0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZXJTZWFyY2giLCJyZXN1bHQiLCJmZXRjaCIsImpzb24iLCJyZXN1bHRzIiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiaDEiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();