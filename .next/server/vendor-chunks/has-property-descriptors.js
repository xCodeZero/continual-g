"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/has-property-descriptors";
exports.ids = ["vendor-chunks/has-property-descriptors"];
exports.modules = {

/***/ "(action-browser)/./node_modules/has-property-descriptors/index.js":
/*!********************************************************!*\
  !*** ./node_modules/has-property-descriptors/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"(action-browser)/./node_modules/get-intrinsic/index.js\");\nvar $defineProperty = GetIntrinsic(\"%Object.defineProperty%\", true);\nvar hasPropertyDescriptors = function hasPropertyDescriptors() {\n    if ($defineProperty) {\n        try {\n            $defineProperty({}, \"a\", {\n                value: 1\n            });\n            return true;\n        } catch (e) {\n            // IE 8 has a broken defineProperty\n            return false;\n        }\n    }\n    return false;\n};\nhasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {\n    // node v0.6 has a bug where array lengths can be Set but not Defined\n    if (!hasPropertyDescriptors()) {\n        return null;\n    }\n    try {\n        return $defineProperty([], \"length\", {\n            value: 1\n        }).length !== 1;\n    } catch (e) {\n        // In Firefox 4-22, defining length on an array throws an exception.\n        return true;\n    }\n};\nmodule.exports = hasPropertyDescriptors;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9oYXMtcHJvcGVydHktZGVzY3JpcHRvcnMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxJQUFJQSxlQUFlQyxtQkFBT0EsQ0FBQztBQUUzQixJQUFJQyxrQkFBa0JGLGFBQWEsMkJBQTJCO0FBRTlELElBQUlHLHlCQUF5QixTQUFTQTtJQUNyQyxJQUFJRCxpQkFBaUI7UUFDcEIsSUFBSTtZQUNIQSxnQkFBZ0IsQ0FBQyxHQUFHLEtBQUs7Z0JBQUVFLE9BQU87WUFBRTtZQUNwQyxPQUFPO1FBQ1IsRUFBRSxPQUFPQyxHQUFHO1lBQ1gsbUNBQW1DO1lBQ25DLE9BQU87UUFDUjtJQUNEO0lBQ0EsT0FBTztBQUNSO0FBRUFGLHVCQUF1QkcsdUJBQXVCLEdBQUcsU0FBU0E7SUFDekQscUVBQXFFO0lBQ3JFLElBQUksQ0FBQ0gsMEJBQTBCO1FBQzlCLE9BQU87SUFDUjtJQUNBLElBQUk7UUFDSCxPQUFPRCxnQkFBZ0IsRUFBRSxFQUFFLFVBQVU7WUFBRUUsT0FBTztRQUFFLEdBQUdHLE1BQU0sS0FBSztJQUMvRCxFQUFFLE9BQU9GLEdBQUc7UUFDWCxvRUFBb0U7UUFDcEUsT0FBTztJQUNSO0FBQ0Q7QUFFQUcsT0FBT0MsT0FBTyxHQUFHTiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnRpbnVhbGcvLi9ub2RlX21vZHVsZXMvaGFzLXByb3BlcnR5LWRlc2NyaXB0b3JzL2luZGV4LmpzP2Q5N2YiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnZ2V0LWludHJpbnNpYycpO1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gR2V0SW50cmluc2ljKCclT2JqZWN0LmRlZmluZVByb3BlcnR5JScsIHRydWUpO1xuXG52YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9ycyA9IGZ1bmN0aW9uIGhhc1Byb3BlcnR5RGVzY3JpcHRvcnMoKSB7XG5cdGlmICgkZGVmaW5lUHJvcGVydHkpIHtcblx0XHR0cnkge1xuXHRcdFx0JGRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgdmFsdWU6IDEgfSk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHQvLyBJRSA4IGhhcyBhIGJyb2tlbiBkZWZpbmVQcm9wZXJ0eVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5oYXNQcm9wZXJ0eURlc2NyaXB0b3JzLmhhc0FycmF5TGVuZ3RoRGVmaW5lQnVnID0gZnVuY3Rpb24gaGFzQXJyYXlMZW5ndGhEZWZpbmVCdWcoKSB7XG5cdC8vIG5vZGUgdjAuNiBoYXMgYSBidWcgd2hlcmUgYXJyYXkgbGVuZ3RocyBjYW4gYmUgU2V0IGJ1dCBub3QgRGVmaW5lZFxuXHRpZiAoIWhhc1Byb3BlcnR5RGVzY3JpcHRvcnMoKSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdHRyeSB7XG5cdFx0cmV0dXJuICRkZWZpbmVQcm9wZXJ0eShbXSwgJ2xlbmd0aCcsIHsgdmFsdWU6IDEgfSkubGVuZ3RoICE9PSAxO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0Ly8gSW4gRmlyZWZveCA0LTIyLCBkZWZpbmluZyBsZW5ndGggb24gYW4gYXJyYXkgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3JzO1xuIl0sIm5hbWVzIjpbIkdldEludHJpbnNpYyIsInJlcXVpcmUiLCIkZGVmaW5lUHJvcGVydHkiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3JzIiwidmFsdWUiLCJlIiwiaGFzQXJyYXlMZW5ndGhEZWZpbmVCdWciLCJsZW5ndGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/has-property-descriptors/index.js\n");

/***/ })

};
;