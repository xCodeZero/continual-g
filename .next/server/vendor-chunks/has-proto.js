"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/has-proto";
exports.ids = ["vendor-chunks/has-proto"];
exports.modules = {

/***/ "(action-browser)/./node_modules/has-proto/index.js":
/*!*****************************************!*\
  !*** ./node_modules/has-proto/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("\nvar test = {\n    foo: {}\n};\nvar $Object = Object;\nmodule.exports = function hasProto() {\n    return ({\n        __proto__: test\n    }).foo === test.foo && !(({\n        __proto__: null\n    }) instanceof $Object);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9oYXMtcHJvdG8vaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxJQUFJQSxPQUFPO0lBQ1ZDLEtBQUssQ0FBQztBQUNQO0FBRUEsSUFBSUMsVUFBVUM7QUFFZEMsT0FBT0MsT0FBTyxHQUFHLFNBQVNDO0lBQ3pCLE9BQU87UUFBRUMsV0FBV1A7SUFBSyxHQUFFQyxHQUFHLEtBQUtELEtBQUtDLEdBQUcsSUFBSSxDQUFFO1FBQUVNLFdBQVc7SUFBSyxjQUFhTCxPQUFNO0FBQ3ZGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29udGludWFsZy8uL25vZGVfbW9kdWxlcy9oYXMtcHJvdG8vaW5kZXguanM/NmYwMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciB0ZXN0ID0ge1xuXHRmb286IHt9XG59O1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBoYXNQcm90bygpIHtcblx0cmV0dXJuIHsgX19wcm90b19fOiB0ZXN0IH0uZm9vID09PSB0ZXN0LmZvbyAmJiAhKHsgX19wcm90b19fOiBudWxsIH0gaW5zdGFuY2VvZiAkT2JqZWN0KTtcbn07XG4iXSwibmFtZXMiOlsidGVzdCIsImZvbyIsIiRPYmplY3QiLCJPYmplY3QiLCJtb2R1bGUiLCJleHBvcnRzIiwiaGFzUHJvdG8iLCJfX3Byb3RvX18iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/has-proto/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/has-proto/index.js":
/*!*****************************************!*\
  !*** ./node_modules/has-proto/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("\nvar test = {\n    foo: {}\n};\nvar $Object = Object;\nmodule.exports = function hasProto() {\n    return ({\n        __proto__: test\n    }).foo === test.foo && !(({\n        __proto__: null\n    }) instanceof $Object);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaGFzLXByb3RvL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsSUFBSUEsT0FBTztJQUNWQyxLQUFLLENBQUM7QUFDUDtBQUVBLElBQUlDLFVBQVVDO0FBRWRDLE9BQU9DLE9BQU8sR0FBRyxTQUFTQztJQUN6QixPQUFPO1FBQUVDLFdBQVdQO0lBQUssR0FBRUMsR0FBRyxLQUFLRCxLQUFLQyxHQUFHLElBQUksQ0FBRTtRQUFFTSxXQUFXO0lBQUssY0FBYUwsT0FBTTtBQUN2RiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnRpbnVhbGcvLi9ub2RlX21vZHVsZXMvaGFzLXByb3RvL2luZGV4LmpzPzZmMDIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdGVzdCA9IHtcblx0Zm9vOiB7fVxufTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaGFzUHJvdG8oKSB7XG5cdHJldHVybiB7IF9fcHJvdG9fXzogdGVzdCB9LmZvbyA9PT0gdGVzdC5mb28gJiYgISh7IF9fcHJvdG9fXzogbnVsbCB9IGluc3RhbmNlb2YgJE9iamVjdCk7XG59O1xuIl0sIm5hbWVzIjpbInRlc3QiLCJmb28iLCIkT2JqZWN0IiwiT2JqZWN0IiwibW9kdWxlIiwiZXhwb3J0cyIsImhhc1Byb3RvIiwiX19wcm90b19fIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/has-proto/index.js\n");

/***/ })

};
;