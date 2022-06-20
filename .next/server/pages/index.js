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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/PageViewCounter.js":
/*!***************************************!*\
  !*** ./components/PageViewCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageViewCounter\": () => (/* binding */ PageViewCounter)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst PageViewCounter = ()=>{\n    const { 0: views , 1: setViews  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    let viewsChars = views ? (\"\" + views).split(\"\") : [\n        \"0\"\n    ];\n    if (viewsChars.length < 5) {\n        viewsChars = [\n            ...Array.from(Array(5 - viewsChars.length)).map((n)=>\"0\"\n            ),\n            ...viewsChars\n        ];\n    }\n    let nextNum = views + 1;\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (ref && ref.current) {\n            ref.current.classList.add(\"top-0\");\n        }\n        return ()=>{\n            if (ref.current) {\n                ref.current.classList.add(\"top-12\");\n            }\n        };\n    });\n    const handleClick = ()=>{\n        setViews(views + 1);\n    };\n    const renderNumber = (num, i)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: \"border-black border px-1 py-2 m-1 text-lg relative z-10 bg-white\",\n            children: num\n        }, i, false, {\n            fileName: \"/home/mikedubcurry/dev/newest-site/components/PageViewCounter.js\",\n            lineNumber: 31,\n            columnNumber: 4\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"overflow-hidden p-3\",\n        children: [\n            viewsChars.map(renderNumber),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                ref: ref,\n                className: \"border-black border px-1 py-2 m-1 text-lg relative -left-7 -top-12 z-20 bg-white transition-all duration-500 ease\",\n                children: nextNum\n            }, void 0, false, {\n                fileName: \"/home/mikedubcurry/dev/newest-site/components/PageViewCounter.js\",\n                lineNumber: 40,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                children: \"click me\"\n            }, void 0, false, {\n                fileName: \"/home/mikedubcurry/dev/newest-site/components/PageViewCounter.js\",\n                lineNumber: 47,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mikedubcurry/dev/newest-site/components/PageViewCounter.js\",\n        lineNumber: 38,\n        columnNumber: 3\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2VWaWV3Q291bnRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQW9EO0FBRTdDLE1BQU1HLGVBQWUsR0FBRyxJQUFNO0lBQ3BDLE1BQU0sRUFIUCxHQUdRQyxLQUFLLEdBSGIsR0FHZUMsUUFBUSxNQUFJSCwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUVyQyxJQUFJSSxVQUFVLEdBQUdGLEtBQUssR0FBRyxDQUFDLEVBQUUsR0FBR0EsS0FBSyxDQUFDLENBQUNHLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRztRQUFDLEdBQUc7S0FBQztJQUN2RCxJQUFJRCxVQUFVLENBQUNFLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDMUJGLFVBQVUsR0FBRztlQUFJRyxLQUFLLENBQUNDLElBQUksQ0FBQ0QsS0FBSyxDQUFDLENBQUMsR0FBR0gsVUFBVSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxDQUFDRyxHQUFHLENBQUMsQ0FBQ0MsQ0FBQyxHQUFLLEdBQUc7WUFBQSxDQUFDO2VBQUtOLFVBQVU7U0FBQyxDQUFDO0tBQzFGO0lBRUQsSUFBSU8sT0FBTyxHQUFHVCxLQUFLLEdBQUcsQ0FBQztJQUN2QixNQUFNVSxHQUFHLEdBQUdiLDZDQUFNLEVBQUU7SUFDcEJELGdEQUFTLENBQUMsSUFBTTtRQUNmLElBQUljLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxPQUFPLEVBQUU7WUFDdkJELEdBQUcsQ0FBQ0MsT0FBTyxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNuQztRQUVLLE9BQU8sSUFBTTtZQUNULElBQUdILEdBQUcsQ0FBQ0MsT0FBTyxFQUFFO2dCQUNaRCxHQUFHLENBQUNDLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO2FBQ3RDO1NBQ0o7S0FDUCxDQUFHLENBQUM7SUFFTCxNQUFNQyxXQUFXLEdBQUcsSUFBTTtRQUN6QmIsUUFBUSxDQUFDRCxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDcEI7SUFFRCxNQUFNZSxZQUFZLEdBQUcsQ0FBQ0MsR0FBRyxFQUFFQyxDQUFDLEdBQUs7UUFDaEMscUJBQ0MsOERBQUNDLE1BQUk7WUFBU0MsU0FBUyxFQUFDLGtFQUFrRTtzQkFDeEZILEdBQUc7V0FETUMsQ0FBQzs7OztxQkFFTCxDQUNOO0tBQ0Y7SUFFRCxxQkFDQyw4REFBQ0csS0FBRztRQUFDRCxTQUFTLEVBQUMscUJBQXFCOztZQUNsQ2pCLFVBQVUsQ0FBQ0ssR0FBRyxDQUFDUSxZQUFZLENBQUM7MEJBQzdCLDhEQUFDRyxNQUFJO2dCQUNKUixHQUFHLEVBQUVBLEdBQUc7Z0JBQ1JTLFNBQVMsRUFBQyxtSEFBcUg7MEJBRTlIVixPQUFPOzs7Ozt5QkFDRjswQkFFUCw4REFBQ1ksUUFBTTtnQkFBQ0MsT0FBTyxFQUFFUixXQUFXOzBCQUFFLFVBQVE7Ozs7O3lCQUFTOzs7Ozs7aUJBQzFDLENBQ0w7Q0FDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3ZXN0LXNpdGUvLi9jb21wb25lbnRzL1BhZ2VWaWV3Q291bnRlci5qcz9mZGNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IFBhZ2VWaWV3Q291bnRlciA9ICgpID0+IHtcblx0Y29uc3QgW3ZpZXdzLCBzZXRWaWV3c10gPSB1c2VTdGF0ZSgwKTtcblxuXHRsZXQgdmlld3NDaGFycyA9IHZpZXdzID8gKCcnICsgdmlld3MpLnNwbGl0KCcnKSA6IFsnMCddO1xuXHRpZiAodmlld3NDaGFycy5sZW5ndGggPCA1KSB7XG5cdFx0dmlld3NDaGFycyA9IFsuLi5BcnJheS5mcm9tKEFycmF5KDUgLSB2aWV3c0NoYXJzLmxlbmd0aCkpLm1hcCgobikgPT4gJzAnKSwgLi4udmlld3NDaGFyc107XG5cdH1cblxuXHRsZXQgbmV4dE51bSA9IHZpZXdzICsgMTtcblx0Y29uc3QgcmVmID0gdXNlUmVmKCk7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKHJlZiAmJiByZWYuY3VycmVudCkge1xuXHRcdFx0cmVmLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgndG9wLTAnKTtcblx0XHR9XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGlmKHJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgndG9wLTEyJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXHR9LCApO1xuXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuXHRcdHNldFZpZXdzKHZpZXdzICsgMSk7XG5cdH07XG5cblx0Y29uc3QgcmVuZGVyTnVtYmVyID0gKG51bSwgaSkgPT4ge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c3BhbiBrZXk9e2l9IGNsYXNzTmFtZT1cImJvcmRlci1ibGFjayBib3JkZXIgcHgtMSBweS0yIG0tMSB0ZXh0LWxnIHJlbGF0aXZlIHotMTAgYmctd2hpdGVcIj5cblx0XHRcdFx0e251bX1cblx0XHRcdDwvc3Bhbj5cblx0XHQpO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gcC0zXCI+XG5cdFx0XHR7dmlld3NDaGFycy5tYXAocmVuZGVyTnVtYmVyKX1cblx0XHRcdDxzcGFuXG5cdFx0XHRcdHJlZj17cmVmfVxuXHRcdFx0XHRjbGFzc05hbWU9XCJib3JkZXItYmxhY2sgYm9yZGVyICBweC0xIHB5LTIgbS0xIHRleHQtbGcgIHJlbGF0aXZlIC1sZWZ0LTcgLXRvcC0xMiB6LTIwIGJnLXdoaXRlIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMCBlYXNlXCJcblx0XHRcdD5cblx0XHRcdFx0e25leHROdW19XG5cdFx0XHQ8L3NwYW4+XG5cblx0XHRcdDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PmNsaWNrIG1lPC9idXR0b24+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiUGFnZVZpZXdDb3VudGVyIiwidmlld3MiLCJzZXRWaWV3cyIsInZpZXdzQ2hhcnMiLCJzcGxpdCIsImxlbmd0aCIsIkFycmF5IiwiZnJvbSIsIm1hcCIsIm4iLCJuZXh0TnVtIiwicmVmIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImFkZCIsImhhbmRsZUNsaWNrIiwicmVuZGVyTnVtYmVyIiwibnVtIiwiaSIsInNwYW4iLCJjbGFzc05hbWUiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PageViewCounter.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_PageViewCounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PageViewCounter */ \"./components/PageViewCounter.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl\",\n                children: \"Hey there!\"\n            }, void 0, false, {\n                fileName: \"/home/mikedubcurry/dev/newest-site/pages/index.js\",\n                lineNumber: 5,\n                columnNumber: 3\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Welcome to my site!\"\n            }, void 0, false, {\n                fileName: \"/home/mikedubcurry/dev/newest-site/pages/index.js\",\n                lineNumber: 6,\n                columnNumber: 3\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageViewCounter__WEBPACK_IMPORTED_MODULE_1__.PageViewCounter, {\n                views: 10\n            }, void 0, false, {\n                fileName: \"/home/mikedubcurry/dev/newest-site/pages/index.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mikedubcurry/dev/newest-site/pages/index.js\",\n        lineNumber: 4,\n        columnNumber: 2\n    }, undefined));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBZ0U7QUFFaEUsaUVBQWUsa0JBQ2QsOERBQUNDLEtBQUc7OzBCQUNILDhEQUFDQyxJQUFFO2dCQUFDQyxTQUFTLEVBQUMsVUFBVTswQkFBQyxZQUFVOzs7Ozt5QkFBSzswQkFDeEMsOERBQUNDLEdBQUM7MEJBQUMscUJBQW1COzs7Ozt5QkFBSTswQkFDcEIsOERBQUNKLHdFQUFlO2dCQUFDSyxLQUFLLEVBQUUsRUFBRTs7Ozs7eUJBQUk7Ozs7OztpQkFDL0IsRUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL25ld2VzdC1zaXRlLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlVmlld0NvdW50ZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9QYWdlVmlld0NvdW50ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuXHQ8ZGl2PlxuXHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPkhleSB0aGVyZSE8L2gxPlxuXHRcdDxwPldlbGNvbWUgdG8gbXkgc2l0ZSE8L3A+XG4gICAgICAgIDxQYWdlVmlld0NvdW50ZXIgdmlld3M9ezEwfSAvPlxuXHQ8L2Rpdj5cbik7XG4iXSwibmFtZXMiOlsiUGFnZVZpZXdDb3VudGVyIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJwIiwidmlld3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

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