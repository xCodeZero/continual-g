"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/set-function-length";
exports.ids = ["vendor-chunks/set-function-length"];
exports.modules = {

/***/ "(action-browser)/./node_modules/set-function-length/index.js":
/*!***************************************************!*\
  !*** ./node_modules/set-function-length/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"(action-browser)/./node_modules/get-intrinsic/index.js\");\nvar define = __webpack_require__(/*! define-data-property */ \"(action-browser)/./node_modules/define-data-property/index.js\");\nvar hasDescriptors = __webpack_require__(/*! has-property-descriptors */ \"(action-browser)/./node_modules/has-property-descriptors/index.js\")();\nvar gOPD = __webpack_require__(/*! gopd */ \"(action-browser)/./node_modules/gopd/index.js\");\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"(action-browser)/./node_modules/es-errors/type.js\");\nvar $floor = GetIntrinsic(\"%Math.floor%\");\n/** @typedef {(...args: unknown[]) => unknown} Func */ /** @type {<T extends Func = Func>(fn: T, length: number, loose?: boolean) => T} */ module.exports = function setFunctionLength(fn, length) {\n    if (typeof fn !== \"function\") {\n        throw new $TypeError(\"`fn` is not a function\");\n    }\n    if (typeof length !== \"number\" || length < 0 || length > 0xFFFFFFFF || $floor(length) !== length) {\n        throw new $TypeError(\"`length` must be a positive 32-bit integer\");\n    }\n    var loose = arguments.length > 2 && !!arguments[2];\n    var functionLengthIsConfigurable = true;\n    var functionLengthIsWritable = true;\n    if (\"length\" in fn && gOPD) {\n        var desc = gOPD(fn, \"length\");\n        if (desc && !desc.configurable) {\n            functionLengthIsConfigurable = false;\n        }\n        if (desc && !desc.writable) {\n            functionLengthIsWritable = false;\n        }\n    }\n    if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {\n        if (hasDescriptors) {\n            define(/** @type {Parameters<define>[0]} */ fn, \"length\", length, true, true);\n        } else {\n            define(/** @type {Parameters<define>[0]} */ fn, \"length\", length);\n        }\n    }\n    return fn;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9zZXQtZnVuY3Rpb24tbGVuZ3RoL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsSUFBSUEsZUFBZUMsbUJBQU9BLENBQUM7QUFDM0IsSUFBSUMsU0FBU0QsbUJBQU9BLENBQUM7QUFDckIsSUFBSUUsaUJBQWlCRixtQkFBT0EsQ0FBQztBQUM3QixJQUFJRyxPQUFPSCxtQkFBT0EsQ0FBQztBQUVuQixJQUFJSSxhQUFhSixtQkFBT0EsQ0FBQztBQUN6QixJQUFJSyxTQUFTTixhQUFhO0FBRTFCLG9EQUFvRCxHQUVwRCxpRkFBaUYsR0FDakZPLE9BQU9DLE9BQU8sR0FBRyxTQUFTQyxrQkFBa0JDLEVBQUUsRUFBRUMsTUFBTTtJQUNyRCxJQUFJLE9BQU9ELE9BQU8sWUFBWTtRQUM3QixNQUFNLElBQUlMLFdBQVc7SUFDdEI7SUFDQSxJQUFJLE9BQU9NLFdBQVcsWUFBWUEsU0FBUyxLQUFLQSxTQUFTLGNBQWNMLE9BQU9LLFlBQVlBLFFBQVE7UUFDakcsTUFBTSxJQUFJTixXQUFXO0lBQ3RCO0lBRUEsSUFBSU8sUUFBUUMsVUFBVUYsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDRSxTQUFTLENBQUMsRUFBRTtJQUVsRCxJQUFJQywrQkFBK0I7SUFDbkMsSUFBSUMsMkJBQTJCO0lBQy9CLElBQUksWUFBWUwsTUFBTU4sTUFBTTtRQUMzQixJQUFJWSxPQUFPWixLQUFLTSxJQUFJO1FBQ3BCLElBQUlNLFFBQVEsQ0FBQ0EsS0FBS0MsWUFBWSxFQUFFO1lBQy9CSCwrQkFBK0I7UUFDaEM7UUFDQSxJQUFJRSxRQUFRLENBQUNBLEtBQUtFLFFBQVEsRUFBRTtZQUMzQkgsMkJBQTJCO1FBQzVCO0lBQ0Q7SUFFQSxJQUFJRCxnQ0FBZ0NDLDRCQUE0QixDQUFDSCxPQUFPO1FBQ3ZFLElBQUlULGdCQUFnQjtZQUNuQkQsT0FBTyxrQ0FBa0MsR0FBSVEsSUFBSyxVQUFVQyxRQUFRLE1BQU07UUFDM0UsT0FBTztZQUNOVCxPQUFPLGtDQUFrQyxHQUFJUSxJQUFLLFVBQVVDO1FBQzdEO0lBQ0Q7SUFDQSxPQUFPRDtBQUNSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29udGludWFsZy8uL25vZGVfbW9kdWxlcy9zZXQtZnVuY3Rpb24tbGVuZ3RoL2luZGV4LmpzPzkzOWIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnZ2V0LWludHJpbnNpYycpO1xudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1kYXRhLXByb3BlcnR5Jyk7XG52YXIgaGFzRGVzY3JpcHRvcnMgPSByZXF1aXJlKCdoYXMtcHJvcGVydHktZGVzY3JpcHRvcnMnKSgpO1xudmFyIGdPUEQgPSByZXF1aXJlKCdnb3BkJyk7XG5cbnZhciAkVHlwZUVycm9yID0gcmVxdWlyZSgnZXMtZXJyb3JzL3R5cGUnKTtcbnZhciAkZmxvb3IgPSBHZXRJbnRyaW5zaWMoJyVNYXRoLmZsb29yJScpO1xuXG4vKiogQHR5cGVkZWYgeyguLi5hcmdzOiB1bmtub3duW10pID0+IHVua25vd259IEZ1bmMgKi9cblxuLyoqIEB0eXBlIHs8VCBleHRlbmRzIEZ1bmMgPSBGdW5jPihmbjogVCwgbGVuZ3RoOiBudW1iZXIsIGxvb3NlPzogYm9vbGVhbikgPT4gVH0gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0RnVuY3Rpb25MZW5ndGgoZm4sIGxlbmd0aCkge1xuXHRpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2BmbmAgaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0fVxuXHRpZiAodHlwZW9mIGxlbmd0aCAhPT0gJ251bWJlcicgfHwgbGVuZ3RoIDwgMCB8fCBsZW5ndGggPiAweEZGRkZGRkZGIHx8ICRmbG9vcihsZW5ndGgpICE9PSBsZW5ndGgpIHtcblx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignYGxlbmd0aGAgbXVzdCBiZSBhIHBvc2l0aXZlIDMyLWJpdCBpbnRlZ2VyJyk7XG5cdH1cblxuXHR2YXIgbG9vc2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiAhIWFyZ3VtZW50c1syXTtcblxuXHR2YXIgZnVuY3Rpb25MZW5ndGhJc0NvbmZpZ3VyYWJsZSA9IHRydWU7XG5cdHZhciBmdW5jdGlvbkxlbmd0aElzV3JpdGFibGUgPSB0cnVlO1xuXHRpZiAoJ2xlbmd0aCcgaW4gZm4gJiYgZ09QRCkge1xuXHRcdHZhciBkZXNjID0gZ09QRChmbiwgJ2xlbmd0aCcpO1xuXHRcdGlmIChkZXNjICYmICFkZXNjLmNvbmZpZ3VyYWJsZSkge1xuXHRcdFx0ZnVuY3Rpb25MZW5ndGhJc0NvbmZpZ3VyYWJsZSA9IGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoZGVzYyAmJiAhZGVzYy53cml0YWJsZSkge1xuXHRcdFx0ZnVuY3Rpb25MZW5ndGhJc1dyaXRhYmxlID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0aWYgKGZ1bmN0aW9uTGVuZ3RoSXNDb25maWd1cmFibGUgfHwgZnVuY3Rpb25MZW5ndGhJc1dyaXRhYmxlIHx8ICFsb29zZSkge1xuXHRcdGlmIChoYXNEZXNjcmlwdG9ycykge1xuXHRcdFx0ZGVmaW5lKC8qKiBAdHlwZSB7UGFyYW1ldGVyczxkZWZpbmU+WzBdfSAqLyAoZm4pLCAnbGVuZ3RoJywgbGVuZ3RoLCB0cnVlLCB0cnVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGVmaW5lKC8qKiBAdHlwZSB7UGFyYW1ldGVyczxkZWZpbmU+WzBdfSAqLyAoZm4pLCAnbGVuZ3RoJywgbGVuZ3RoKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGZuO1xufTtcbiJdLCJuYW1lcyI6WyJHZXRJbnRyaW5zaWMiLCJyZXF1aXJlIiwiZGVmaW5lIiwiaGFzRGVzY3JpcHRvcnMiLCJnT1BEIiwiJFR5cGVFcnJvciIsIiRmbG9vciIsIm1vZHVsZSIsImV4cG9ydHMiLCJzZXRGdW5jdGlvbkxlbmd0aCIsImZuIiwibGVuZ3RoIiwibG9vc2UiLCJhcmd1bWVudHMiLCJmdW5jdGlvbkxlbmd0aElzQ29uZmlndXJhYmxlIiwiZnVuY3Rpb25MZW5ndGhJc1dyaXRhYmxlIiwiZGVzYyIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/set-function-length/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/set-function-length/index.js":
/*!***************************************************!*\
  !*** ./node_modules/set-function-length/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"(rsc)/./node_modules/get-intrinsic/index.js\");\nvar define = __webpack_require__(/*! define-data-property */ \"(rsc)/./node_modules/define-data-property/index.js\");\nvar hasDescriptors = __webpack_require__(/*! has-property-descriptors */ \"(rsc)/./node_modules/has-property-descriptors/index.js\")();\nvar gOPD = __webpack_require__(/*! gopd */ \"(rsc)/./node_modules/gopd/index.js\");\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"(rsc)/./node_modules/es-errors/type.js\");\nvar $floor = GetIntrinsic(\"%Math.floor%\");\n/** @typedef {(...args: unknown[]) => unknown} Func */ /** @type {<T extends Func = Func>(fn: T, length: number, loose?: boolean) => T} */ module.exports = function setFunctionLength(fn, length) {\n    if (typeof fn !== \"function\") {\n        throw new $TypeError(\"`fn` is not a function\");\n    }\n    if (typeof length !== \"number\" || length < 0 || length > 0xFFFFFFFF || $floor(length) !== length) {\n        throw new $TypeError(\"`length` must be a positive 32-bit integer\");\n    }\n    var loose = arguments.length > 2 && !!arguments[2];\n    var functionLengthIsConfigurable = true;\n    var functionLengthIsWritable = true;\n    if (\"length\" in fn && gOPD) {\n        var desc = gOPD(fn, \"length\");\n        if (desc && !desc.configurable) {\n            functionLengthIsConfigurable = false;\n        }\n        if (desc && !desc.writable) {\n            functionLengthIsWritable = false;\n        }\n    }\n    if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {\n        if (hasDescriptors) {\n            define(/** @type {Parameters<define>[0]} */ fn, \"length\", length, true, true);\n        } else {\n            define(/** @type {Parameters<define>[0]} */ fn, \"length\", length);\n        }\n    }\n    return fn;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvc2V0LWZ1bmN0aW9uLWxlbmd0aC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLElBQUlBLGVBQWVDLG1CQUFPQSxDQUFDO0FBQzNCLElBQUlDLFNBQVNELG1CQUFPQSxDQUFDO0FBQ3JCLElBQUlFLGlCQUFpQkYsbUJBQU9BLENBQUM7QUFDN0IsSUFBSUcsT0FBT0gsbUJBQU9BLENBQUM7QUFFbkIsSUFBSUksYUFBYUosbUJBQU9BLENBQUM7QUFDekIsSUFBSUssU0FBU04sYUFBYTtBQUUxQixvREFBb0QsR0FFcEQsaUZBQWlGLEdBQ2pGTyxPQUFPQyxPQUFPLEdBQUcsU0FBU0Msa0JBQWtCQyxFQUFFLEVBQUVDLE1BQU07SUFDckQsSUFBSSxPQUFPRCxPQUFPLFlBQVk7UUFDN0IsTUFBTSxJQUFJTCxXQUFXO0lBQ3RCO0lBQ0EsSUFBSSxPQUFPTSxXQUFXLFlBQVlBLFNBQVMsS0FBS0EsU0FBUyxjQUFjTCxPQUFPSyxZQUFZQSxRQUFRO1FBQ2pHLE1BQU0sSUFBSU4sV0FBVztJQUN0QjtJQUVBLElBQUlPLFFBQVFDLFVBQVVGLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQ0UsU0FBUyxDQUFDLEVBQUU7SUFFbEQsSUFBSUMsK0JBQStCO0lBQ25DLElBQUlDLDJCQUEyQjtJQUMvQixJQUFJLFlBQVlMLE1BQU1OLE1BQU07UUFDM0IsSUFBSVksT0FBT1osS0FBS00sSUFBSTtRQUNwQixJQUFJTSxRQUFRLENBQUNBLEtBQUtDLFlBQVksRUFBRTtZQUMvQkgsK0JBQStCO1FBQ2hDO1FBQ0EsSUFBSUUsUUFBUSxDQUFDQSxLQUFLRSxRQUFRLEVBQUU7WUFDM0JILDJCQUEyQjtRQUM1QjtJQUNEO0lBRUEsSUFBSUQsZ0NBQWdDQyw0QkFBNEIsQ0FBQ0gsT0FBTztRQUN2RSxJQUFJVCxnQkFBZ0I7WUFDbkJELE9BQU8sa0NBQWtDLEdBQUlRLElBQUssVUFBVUMsUUFBUSxNQUFNO1FBQzNFLE9BQU87WUFDTlQsT0FBTyxrQ0FBa0MsR0FBSVEsSUFBSyxVQUFVQztRQUM3RDtJQUNEO0lBQ0EsT0FBT0Q7QUFDUiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnRpbnVhbGcvLi9ub2RlX21vZHVsZXMvc2V0LWZ1bmN0aW9uLWxlbmd0aC9pbmRleC5qcz85MzliIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEdldEludHJpbnNpYyA9IHJlcXVpcmUoJ2dldC1pbnRyaW5zaWMnKTtcbnZhciBkZWZpbmUgPSByZXF1aXJlKCdkZWZpbmUtZGF0YS1wcm9wZXJ0eScpO1xudmFyIGhhc0Rlc2NyaXB0b3JzID0gcmVxdWlyZSgnaGFzLXByb3BlcnR5LWRlc2NyaXB0b3JzJykoKTtcbnZhciBnT1BEID0gcmVxdWlyZSgnZ29wZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IHJlcXVpcmUoJ2VzLWVycm9ycy90eXBlJyk7XG52YXIgJGZsb29yID0gR2V0SW50cmluc2ljKCclTWF0aC5mbG9vciUnKTtcblxuLyoqIEB0eXBlZGVmIHsoLi4uYXJnczogdW5rbm93bltdKSA9PiB1bmtub3dufSBGdW5jICovXG5cbi8qKiBAdHlwZSB7PFQgZXh0ZW5kcyBGdW5jID0gRnVuYz4oZm46IFQsIGxlbmd0aDogbnVtYmVyLCBsb29zZT86IGJvb2xlYW4pID0+IFR9ICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldEZ1bmN0aW9uTGVuZ3RoKGZuLCBsZW5ndGgpIHtcblx0aWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdgZm5gIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cdH1cblx0aWYgKHR5cGVvZiBsZW5ndGggIT09ICdudW1iZXInIHx8IGxlbmd0aCA8IDAgfHwgbGVuZ3RoID4gMHhGRkZGRkZGRiB8fCAkZmxvb3IobGVuZ3RoKSAhPT0gbGVuZ3RoKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2BsZW5ndGhgIG11c3QgYmUgYSBwb3NpdGl2ZSAzMi1iaXQgaW50ZWdlcicpO1xuXHR9XG5cblx0dmFyIGxvb3NlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgISFhcmd1bWVudHNbMl07XG5cblx0dmFyIGZ1bmN0aW9uTGVuZ3RoSXNDb25maWd1cmFibGUgPSB0cnVlO1xuXHR2YXIgZnVuY3Rpb25MZW5ndGhJc1dyaXRhYmxlID0gdHJ1ZTtcblx0aWYgKCdsZW5ndGgnIGluIGZuICYmIGdPUEQpIHtcblx0XHR2YXIgZGVzYyA9IGdPUEQoZm4sICdsZW5ndGgnKTtcblx0XHRpZiAoZGVzYyAmJiAhZGVzYy5jb25maWd1cmFibGUpIHtcblx0XHRcdGZ1bmN0aW9uTGVuZ3RoSXNDb25maWd1cmFibGUgPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKGRlc2MgJiYgIWRlc2Mud3JpdGFibGUpIHtcblx0XHRcdGZ1bmN0aW9uTGVuZ3RoSXNXcml0YWJsZSA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdGlmIChmdW5jdGlvbkxlbmd0aElzQ29uZmlndXJhYmxlIHx8IGZ1bmN0aW9uTGVuZ3RoSXNXcml0YWJsZSB8fCAhbG9vc2UpIHtcblx0XHRpZiAoaGFzRGVzY3JpcHRvcnMpIHtcblx0XHRcdGRlZmluZSgvKiogQHR5cGUge1BhcmFtZXRlcnM8ZGVmaW5lPlswXX0gKi8gKGZuKSwgJ2xlbmd0aCcsIGxlbmd0aCwgdHJ1ZSwgdHJ1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRlZmluZSgvKiogQHR5cGUge1BhcmFtZXRlcnM8ZGVmaW5lPlswXX0gKi8gKGZuKSwgJ2xlbmd0aCcsIGxlbmd0aCk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBmbjtcbn07XG4iXSwibmFtZXMiOlsiR2V0SW50cmluc2ljIiwicmVxdWlyZSIsImRlZmluZSIsImhhc0Rlc2NyaXB0b3JzIiwiZ09QRCIsIiRUeXBlRXJyb3IiLCIkZmxvb3IiLCJtb2R1bGUiLCJleHBvcnRzIiwic2V0RnVuY3Rpb25MZW5ndGgiLCJmbiIsImxlbmd0aCIsImxvb3NlIiwiYXJndW1lbnRzIiwiZnVuY3Rpb25MZW5ndGhJc0NvbmZpZ3VyYWJsZSIsImZ1bmN0aW9uTGVuZ3RoSXNXcml0YWJsZSIsImRlc2MiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/set-function-length/index.js\n");

/***/ })

};
;