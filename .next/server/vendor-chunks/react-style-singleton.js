"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-style-singleton";
exports.ids = ["vendor-chunks/react-style-singleton"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-style-singleton/dist/es2015/component.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-style-singleton/dist/es2015/component.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   styleSingleton: () => (/* binding */ styleSingleton)\n/* harmony export */ });\n/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hook */ \"(ssr)/./node_modules/react-style-singleton/dist/es2015/hook.js\");\n\n/**\n * create a Component to add styles on demand\n * - styles are added when first instance is mounted\n * - styles are removed when the last instance is unmounted\n * - changing styles in runtime does nothing unless dynamic is set. But with multiple components that can lead to the undefined behavior\n */ var styleSingleton = function() {\n    var useStyle = (0,_hook__WEBPACK_IMPORTED_MODULE_0__.styleHookSingleton)();\n    var Sheet = function(_a) {\n        var styles = _a.styles, dynamic = _a.dynamic;\n        useStyle(styles, dynamic);\n        return null;\n    };\n    return Sheet;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3R5bGUtc2luZ2xldG9uL2Rpc3QvZXMyMDE1L2NvbXBvbmVudC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0QztBQUM1Qzs7Ozs7Q0FLQyxHQUNNLElBQUlDLGlCQUFpQjtJQUN4QixJQUFJQyxXQUFXRix5REFBa0JBO0lBQ2pDLElBQUlHLFFBQVEsU0FBVUMsRUFBRTtRQUNwQixJQUFJQyxTQUFTRCxHQUFHQyxNQUFNLEVBQUVDLFVBQVVGLEdBQUdFLE9BQU87UUFDNUNKLFNBQVNHLFFBQVFDO1FBQ2pCLE9BQU87SUFDWDtJQUNBLE9BQU9IO0FBQ1gsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnRpbnVhbGcvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3R5bGUtc2luZ2xldG9uL2Rpc3QvZXMyMDE1L2NvbXBvbmVudC5qcz81ZDI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0eWxlSG9va1NpbmdsZXRvbiB9IGZyb20gJy4vaG9vayc7XG4vKipcbiAqIGNyZWF0ZSBhIENvbXBvbmVudCB0byBhZGQgc3R5bGVzIG9uIGRlbWFuZFxuICogLSBzdHlsZXMgYXJlIGFkZGVkIHdoZW4gZmlyc3QgaW5zdGFuY2UgaXMgbW91bnRlZFxuICogLSBzdHlsZXMgYXJlIHJlbW92ZWQgd2hlbiB0aGUgbGFzdCBpbnN0YW5jZSBpcyB1bm1vdW50ZWRcbiAqIC0gY2hhbmdpbmcgc3R5bGVzIGluIHJ1bnRpbWUgZG9lcyBub3RoaW5nIHVubGVzcyBkeW5hbWljIGlzIHNldC4gQnV0IHdpdGggbXVsdGlwbGUgY29tcG9uZW50cyB0aGF0IGNhbiBsZWFkIHRvIHRoZSB1bmRlZmluZWQgYmVoYXZpb3JcbiAqL1xuZXhwb3J0IHZhciBzdHlsZVNpbmdsZXRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdXNlU3R5bGUgPSBzdHlsZUhvb2tTaW5nbGV0b24oKTtcbiAgICB2YXIgU2hlZXQgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIHN0eWxlcyA9IF9hLnN0eWxlcywgZHluYW1pYyA9IF9hLmR5bmFtaWM7XG4gICAgICAgIHVzZVN0eWxlKHN0eWxlcywgZHluYW1pYyk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIFNoZWV0O1xufTtcbiJdLCJuYW1lcyI6WyJzdHlsZUhvb2tTaW5nbGV0b24iLCJzdHlsZVNpbmdsZXRvbiIsInVzZVN0eWxlIiwiU2hlZXQiLCJfYSIsInN0eWxlcyIsImR5bmFtaWMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-style-singleton/dist/es2015/component.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-style-singleton/dist/es2015/hook.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-style-singleton/dist/es2015/hook.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   styleHookSingleton: () => (/* binding */ styleHookSingleton)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singleton */ \"(ssr)/./node_modules/react-style-singleton/dist/es2015/singleton.js\");\n\n\n/**\n * creates a hook to control style singleton\n * @see {@link styleSingleton} for a safer component version\n * @example\n * ```tsx\n * const useStyle = styleHookSingleton();\n * ///\n * useStyle('body { overflow: hidden}');\n */ var styleHookSingleton = function() {\n    var sheet = (0,_singleton__WEBPACK_IMPORTED_MODULE_1__.stylesheetSingleton)();\n    return function(styles, isDynamic) {\n        react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function() {\n            sheet.add(styles);\n            return function() {\n                sheet.remove();\n            };\n        }, [\n            styles && isDynamic\n        ]);\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3R5bGUtc2luZ2xldG9uL2Rpc3QvZXMyMDE1L2hvb2suanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQjtBQUNtQjtBQUNsRDs7Ozs7Ozs7Q0FRQyxHQUNNLElBQUlFLHFCQUFxQjtJQUM1QixJQUFJQyxRQUFRRiwrREFBbUJBO0lBQy9CLE9BQU8sU0FBVUcsTUFBTSxFQUFFQyxTQUFTO1FBQzlCTCw0Q0FBZSxDQUFDO1lBQ1pHLE1BQU1JLEdBQUcsQ0FBQ0g7WUFDVixPQUFPO2dCQUNIRCxNQUFNSyxNQUFNO1lBQ2hCO1FBQ0osR0FBRztZQUFDSixVQUFVQztTQUFVO0lBQzVCO0FBQ0osRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnRpbnVhbGcvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3R5bGUtc2luZ2xldG9uL2Rpc3QvZXMyMDE1L2hvb2suanM/MzYwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzdHlsZXNoZWV0U2luZ2xldG9uIH0gZnJvbSAnLi9zaW5nbGV0b24nO1xuLyoqXG4gKiBjcmVhdGVzIGEgaG9vayB0byBjb250cm9sIHN0eWxlIHNpbmdsZXRvblxuICogQHNlZSB7QGxpbmsgc3R5bGVTaW5nbGV0b259IGZvciBhIHNhZmVyIGNvbXBvbmVudCB2ZXJzaW9uXG4gKiBAZXhhbXBsZVxuICogYGBgdHN4XG4gKiBjb25zdCB1c2VTdHlsZSA9IHN0eWxlSG9va1NpbmdsZXRvbigpO1xuICogLy8vXG4gKiB1c2VTdHlsZSgnYm9keSB7IG92ZXJmbG93OiBoaWRkZW59Jyk7XG4gKi9cbmV4cG9ydCB2YXIgc3R5bGVIb29rU2luZ2xldG9uID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzaGVldCA9IHN0eWxlc2hlZXRTaW5nbGV0b24oKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0eWxlcywgaXNEeW5hbWljKSB7XG4gICAgICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzaGVldC5hZGQoc3R5bGVzKTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2hlZXQucmVtb3ZlKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCBbc3R5bGVzICYmIGlzRHluYW1pY10pO1xuICAgIH07XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzaGVldFNpbmdsZXRvbiIsInN0eWxlSG9va1NpbmdsZXRvbiIsInNoZWV0Iiwic3R5bGVzIiwiaXNEeW5hbWljIiwidXNlRWZmZWN0IiwiYWRkIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-style-singleton/dist/es2015/hook.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-style-singleton/dist/es2015/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-style-singleton/dist/es2015/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   styleHookSingleton: () => (/* reexport safe */ _hook__WEBPACK_IMPORTED_MODULE_2__.styleHookSingleton),\n/* harmony export */   styleSingleton: () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_0__.styleSingleton),\n/* harmony export */   stylesheetSingleton: () => (/* reexport safe */ _singleton__WEBPACK_IMPORTED_MODULE_1__.stylesheetSingleton)\n/* harmony export */ });\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ \"(ssr)/./node_modules/react-style-singleton/dist/es2015/component.js\");\n/* harmony import */ var _singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singleton */ \"(ssr)/./node_modules/react-style-singleton/dist/es2015/singleton.js\");\n/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hook */ \"(ssr)/./node_modules/react-style-singleton/dist/es2015/hook.js\");\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3R5bGUtc2luZ2xldG9uL2Rpc3QvZXMyMDE1L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE2QztBQUNLO0FBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb250aW51YWxnLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN0eWxlLXNpbmdsZXRvbi9kaXN0L2VzMjAxNS9pbmRleC5qcz8wZGFjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IHN0eWxlU2luZ2xldG9uIH0gZnJvbSAnLi9jb21wb25lbnQnO1xuZXhwb3J0IHsgc3R5bGVzaGVldFNpbmdsZXRvbiB9IGZyb20gJy4vc2luZ2xldG9uJztcbmV4cG9ydCB7IHN0eWxlSG9va1NpbmdsZXRvbiB9IGZyb20gJy4vaG9vayc7XG4iXSwibmFtZXMiOlsic3R5bGVTaW5nbGV0b24iLCJzdHlsZXNoZWV0U2luZ2xldG9uIiwic3R5bGVIb29rU2luZ2xldG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-style-singleton/dist/es2015/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-style-singleton/dist/es2015/singleton.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-style-singleton/dist/es2015/singleton.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   stylesheetSingleton: () => (/* binding */ stylesheetSingleton)\n/* harmony export */ });\n/* harmony import */ var get_nonce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! get-nonce */ \"(ssr)/./node_modules/get-nonce/dist/es2015/index.js\");\n\nfunction makeStyleTag() {\n    if (!document) return null;\n    var tag = document.createElement(\"style\");\n    tag.type = \"text/css\";\n    var nonce = (0,get_nonce__WEBPACK_IMPORTED_MODULE_0__.getNonce)();\n    if (nonce) {\n        tag.setAttribute(\"nonce\", nonce);\n    }\n    return tag;\n}\nfunction injectStyles(tag, css) {\n    // @ts-ignore\n    if (tag.styleSheet) {\n        // @ts-ignore\n        tag.styleSheet.cssText = css;\n    } else {\n        tag.appendChild(document.createTextNode(css));\n    }\n}\nfunction insertStyleTag(tag) {\n    var head = document.head || document.getElementsByTagName(\"head\")[0];\n    head.appendChild(tag);\n}\nvar stylesheetSingleton = function() {\n    var counter = 0;\n    var stylesheet = null;\n    return {\n        add: function(style) {\n            if (counter == 0) {\n                if (stylesheet = makeStyleTag()) {\n                    injectStyles(stylesheet, style);\n                    insertStyleTag(stylesheet);\n                }\n            }\n            counter++;\n        },\n        remove: function() {\n            counter--;\n            if (!counter && stylesheet) {\n                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);\n                stylesheet = null;\n            }\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3R5bGUtc2luZ2xldG9uL2Rpc3QvZXMyMDE1L3NpbmdsZXRvbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFxQztBQUNyQyxTQUFTQztJQUNMLElBQUksQ0FBQ0MsVUFDRCxPQUFPO0lBQ1gsSUFBSUMsTUFBTUQsU0FBU0UsYUFBYSxDQUFDO0lBQ2pDRCxJQUFJRSxJQUFJLEdBQUc7SUFDWCxJQUFJQyxRQUFRTixtREFBUUE7SUFDcEIsSUFBSU0sT0FBTztRQUNQSCxJQUFJSSxZQUFZLENBQUMsU0FBU0Q7SUFDOUI7SUFDQSxPQUFPSDtBQUNYO0FBQ0EsU0FBU0ssYUFBYUwsR0FBRyxFQUFFTSxHQUFHO0lBQzFCLGFBQWE7SUFDYixJQUFJTixJQUFJTyxVQUFVLEVBQUU7UUFDaEIsYUFBYTtRQUNiUCxJQUFJTyxVQUFVLENBQUNDLE9BQU8sR0FBR0Y7SUFDN0IsT0FDSztRQUNETixJQUFJUyxXQUFXLENBQUNWLFNBQVNXLGNBQWMsQ0FBQ0o7SUFDNUM7QUFDSjtBQUNBLFNBQVNLLGVBQWVYLEdBQUc7SUFDdkIsSUFBSVksT0FBT2IsU0FBU2EsSUFBSSxJQUFJYixTQUFTYyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsRUFBRTtJQUNwRUQsS0FBS0gsV0FBVyxDQUFDVDtBQUNyQjtBQUNPLElBQUljLHNCQUFzQjtJQUM3QixJQUFJQyxVQUFVO0lBQ2QsSUFBSUMsYUFBYTtJQUNqQixPQUFPO1FBQ0hDLEtBQUssU0FBVUMsS0FBSztZQUNoQixJQUFJSCxXQUFXLEdBQUc7Z0JBQ2QsSUFBS0MsYUFBYWxCLGdCQUFpQjtvQkFDL0JPLGFBQWFXLFlBQVlFO29CQUN6QlAsZUFBZUs7Z0JBQ25CO1lBQ0o7WUFDQUQ7UUFDSjtRQUNBSSxRQUFRO1lBQ0pKO1lBQ0EsSUFBSSxDQUFDQSxXQUFXQyxZQUFZO2dCQUN4QkEsV0FBV0ksVUFBVSxJQUFJSixXQUFXSSxVQUFVLENBQUNDLFdBQVcsQ0FBQ0w7Z0JBQzNEQSxhQUFhO1lBQ2pCO1FBQ0o7SUFDSjtBQUNKLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb250aW51YWxnLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN0eWxlLXNpbmdsZXRvbi9kaXN0L2VzMjAxNS9zaW5nbGV0b24uanM/OWMzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXROb25jZSB9IGZyb20gJ2dldC1ub25jZSc7XG5mdW5jdGlvbiBtYWtlU3R5bGVUYWcoKSB7XG4gICAgaWYgKCFkb2N1bWVudClcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgdmFyIHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgdGFnLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgIHZhciBub25jZSA9IGdldE5vbmNlKCk7XG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICAgIHRhZy5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgbm9uY2UpO1xuICAgIH1cbiAgICByZXR1cm4gdGFnO1xufVxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzKHRhZywgY3NzKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmICh0YWcuc3R5bGVTaGVldCkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRhZy5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0YWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxufVxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVUYWcodGFnKSB7XG4gICAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgaGVhZC5hcHBlbmRDaGlsZCh0YWcpO1xufVxuZXhwb3J0IHZhciBzdHlsZXNoZWV0U2luZ2xldG9uID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjb3VudGVyID0gMDtcbiAgICB2YXIgc3R5bGVzaGVldCA9IG51bGw7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkOiBmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICAgICAgICAgIGlmIChjb3VudGVyID09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoKHN0eWxlc2hlZXQgPSBtYWtlU3R5bGVUYWcoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5qZWN0U3R5bGVzKHN0eWxlc2hlZXQsIHN0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0U3R5bGVUYWcoc3R5bGVzaGVldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvdW50ZXItLTtcbiAgICAgICAgICAgIGlmICghY291bnRlciAmJiBzdHlsZXNoZWV0KSB7XG4gICAgICAgICAgICAgICAgc3R5bGVzaGVldC5wYXJlbnROb2RlICYmIHN0eWxlc2hlZXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZXNoZWV0KTtcbiAgICAgICAgICAgICAgICBzdHlsZXNoZWV0ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9O1xufTtcbiJdLCJuYW1lcyI6WyJnZXROb25jZSIsIm1ha2VTdHlsZVRhZyIsImRvY3VtZW50IiwidGFnIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJub25jZSIsInNldEF0dHJpYnV0ZSIsImluamVjdFN0eWxlcyIsImNzcyIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsImluc2VydFN0eWxlVGFnIiwiaGVhZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic3R5bGVzaGVldFNpbmdsZXRvbiIsImNvdW50ZXIiLCJzdHlsZXNoZWV0IiwiYWRkIiwic3R5bGUiLCJyZW1vdmUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-style-singleton/dist/es2015/singleton.js\n");

/***/ })

};
;