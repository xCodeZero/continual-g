"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./src/components/sections/OverviewChartSection.tsx":
/*!**********************************************************!*\
  !*** ./src/components/sections/OverviewChartSection.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/network */ \"(app-pages-browser)/./src/network/index.ts\");\n/* harmony import */ var _network_resources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/network/resources */ \"(app-pages-browser)/./src/network/resources.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ui_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/skeleton */ \"(app-pages-browser)/./src/components/ui/skeleton.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Chart = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().lazy(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_node_modules_react-apexcharts_dist_react-apexcharts_min_js\").then(__webpack_require__.bind(__webpack_require__, /*! react-apexcharts */ \"(app-pages-browser)/./node_modules/react-apexcharts/dist/react-apexcharts.min.js\")));\n_c = Chart;\nfunction OverviewChartSection() {\n    _s();\n    const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([\n        \"0\",\n        \"0\",\n        \"0\",\n        \"0\",\n        \"0\",\n        \"0\",\n        \"0\",\n        \"0\",\n        \"0\",\n        \"0\",\n        \"0\",\n        \"0\"\n    ]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const chartDefaultOptions = {\n        chart: {\n            height: 350,\n            type: \"area\",\n            toolbar: {\n                show: false\n            }\n        },\n        dataLabels: {\n            enabled: false\n        },\n        stroke: {\n            curve: \"smooth\"\n        },\n        xaxis: {\n            type: \"month\",\n            categories: [\n                \"Jan\",\n                \"Feb\",\n                \"Mar\",\n                \"Apr\",\n                \"May\",\n                \"Jun\",\n                \"Jul\",\n                \"Aug\",\n                \"Sep\",\n                \"Oct\",\n                \"Nov\",\n                \"Dec\"\n            ]\n        },\n        tooltip: {\n            x: {\n                format: \"dd/MM/yy HH:mm\"\n            }\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        async function fetch() {\n            const stats = await _network__WEBPACK_IMPORTED_MODULE_1__.apiClient.get(_network_resources__WEBPACK_IMPORTED_MODULE_2__[\"default\"].statistics, \"/chart\");\n            setChartData(Object.values(stats));\n            setLoading(false);\n        }\n        fetch();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-[20px] font-semibold text-center\",\n                children: \"Orders Analytics\"\n            }, void 0, false, {\n                fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/sections/OverviewChartSection.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_skeleton__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {\n                className: \"w-full h-[400px] mt-8\"\n            }, void 0, false, {\n                fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/sections/OverviewChartSection.tsx\",\n                lineNumber: 85,\n                columnNumber: 9\n            }, this) :  true && //@ts-ignore\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Chart, {\n                options: chartDefaultOptions,\n                series: [\n                    {\n                        name: \"Total Income\",\n                        data: chartData,\n                        color: \"#FFA03F\"\n                    }\n                ],\n                type: \"line\",\n                height: 400\n            }, void 0, false, {\n                fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/sections/OverviewChartSection.tsx\",\n                lineNumber: 89,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/sections/OverviewChartSection.tsx\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, this);\n}\n_s(OverviewChartSection, \"bz6Usauvkb1dz7cMVdM3xjjEqmM=\");\n_c1 = OverviewChartSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OverviewChartSection);\nvar _c, _c1;\n$RefreshReg$(_c, \"Chart\");\n$RefreshReg$(_c1, \"OverviewChartSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb25zL092ZXJ2aWV3Q2hhcnRTZWN0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFc0M7QUFDUztBQUVJO0FBRVQ7QUFFMUMsTUFBTU0sc0JBQVFKLGlEQUFVLENBQUMsSUFBTSxzUkFBMEI7S0FBbkRJO0FBRU4sU0FBU0U7O0lBQ1AsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdOLCtDQUFRQSxDQUFXO1FBQ25EO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNEO0lBQ0QsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1TLHNCQUFzQjtRQUMxQkMsT0FBTztZQUNMQyxRQUFRO1lBQ1JDLE1BQU07WUFDTkMsU0FBUztnQkFDUEMsTUFBTTtZQUNSO1FBQ0Y7UUFDQUMsWUFBWTtZQUNWQyxTQUFTO1FBQ1g7UUFDQUMsUUFBUTtZQUNOQyxPQUFPO1FBQ1Q7UUFDQUMsT0FBTztZQUNMUCxNQUFNO1lBQ05RLFlBQVk7Z0JBQ1Y7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7YUFDRDtRQUNIO1FBQ0FDLFNBQVM7WUFDUEMsR0FBRztnQkFDREMsUUFBUTtZQUNWO1FBQ0Y7SUFDRjtJQUVBeEIsZ0RBQVNBLENBQUM7UUFDUixlQUFleUI7WUFDYixNQUFNQyxRQUFRLE1BQU03QiwrQ0FBU0EsQ0FBQzhCLEdBQUcsQ0FDL0I3QiwwREFBWUEsQ0FBQzhCLFVBQVUsRUFDdkI7WUFFRnJCLGFBQWFzQixPQUFPQyxNQUFNLENBQUNKO1lBQzNCakIsV0FBVztRQUNiO1FBRUFnQjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDTTs7MEJBQ0MsOERBQUNDO2dCQUFFQyxXQUFVOzBCQUF3Qzs7Ozs7O1lBRXBEekIsd0JBQ0MsOERBQUNOLGtEQUFRQTtnQkFBQytCLFdBQVU7Ozs7O3VCQUVwQixLQUE2QixJQUMzQixZQUFZOzBCQUNaLDhEQUFDOUI7Z0JBQ0MrQixTQUFTeEI7Z0JBQ1R5QixRQUFRO29CQUNOO3dCQUNFQyxNQUFNO3dCQUNOQyxNQUFNL0I7d0JBQ05nQyxPQUFPO29CQUNUO2lCQUNEO2dCQUNEekIsTUFBSztnQkFDTEQsUUFBUTs7Ozs7Ozs7Ozs7O0FBTXBCO0dBN0ZTUDtNQUFBQTtBQStGVCwrREFBZUEsb0JBQW9CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb25zL092ZXJ2aWV3Q2hhcnRTZWN0aW9uLnRzeD9iYzRhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBhcGlDbGllbnQgfSBmcm9tIFwiQC9uZXR3b3JrXCI7XG5pbXBvcnQgYXBpUmVzb3VyY2VzIGZyb20gXCJAL25ldHdvcmsvcmVzb3VyY2VzXCI7XG5pbXBvcnQgeyBJQ2hhcnQgfSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgU2tlbGV0b24gfSBmcm9tIFwiLi4vdWkvc2tlbGV0b25cIjtcblxuY29uc3QgQ2hhcnQgPSBSZWFjdC5sYXp5KCgpID0+IGltcG9ydChcInJlYWN0LWFwZXhjaGFydHNcIikpO1xuXG5mdW5jdGlvbiBPdmVydmlld0NoYXJ0U2VjdGlvbigpIHtcbiAgY29uc3QgW2NoYXJ0RGF0YSwgc2V0Q2hhcnREYXRhXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXG4gICAgXCIwXCIsXG4gICAgXCIwXCIsXG4gICAgXCIwXCIsXG4gICAgXCIwXCIsXG4gICAgXCIwXCIsXG4gICAgXCIwXCIsXG4gICAgXCIwXCIsXG4gICAgXCIwXCIsXG4gICAgXCIwXCIsXG4gICAgXCIwXCIsXG4gICAgXCIwXCIsXG4gICAgXCIwXCIsXG4gIF0pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBjaGFydERlZmF1bHRPcHRpb25zID0ge1xuICAgIGNoYXJ0OiB7XG4gICAgICBoZWlnaHQ6IDM1MCxcbiAgICAgIHR5cGU6IFwiYXJlYVwiLFxuICAgICAgdG9vbGJhcjoge1xuICAgICAgICBzaG93OiBmYWxzZSwgLy8gU2V0IHRvIGZhbHNlIHRvIGhpZGUgdGhlIHRvb2xiYXJcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkYXRhTGFiZWxzOiB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICB9LFxuICAgIHN0cm9rZToge1xuICAgICAgY3VydmU6IFwic21vb3RoXCIsXG4gICAgfSxcbiAgICB4YXhpczoge1xuICAgICAgdHlwZTogXCJtb250aFwiLFxuICAgICAgY2F0ZWdvcmllczogW1xuICAgICAgICBcIkphblwiLFxuICAgICAgICBcIkZlYlwiLFxuICAgICAgICBcIk1hclwiLFxuICAgICAgICBcIkFwclwiLFxuICAgICAgICBcIk1heVwiLFxuICAgICAgICBcIkp1blwiLFxuICAgICAgICBcIkp1bFwiLFxuICAgICAgICBcIkF1Z1wiLFxuICAgICAgICBcIlNlcFwiLFxuICAgICAgICBcIk9jdFwiLFxuICAgICAgICBcIk5vdlwiLFxuICAgICAgICBcIkRlY1wiLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHRvb2x0aXA6IHtcbiAgICAgIHg6IHtcbiAgICAgICAgZm9ybWF0OiBcImRkL01NL3l5IEhIOm1tXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaCgpIHtcbiAgICAgIGNvbnN0IHN0YXRzID0gYXdhaXQgYXBpQ2xpZW50LmdldDxJQ2hhcnQ+KFxuICAgICAgICBhcGlSZXNvdXJjZXMuc3RhdGlzdGljcyxcbiAgICAgICAgXCIvY2hhcnRcIlxuICAgICAgKTtcbiAgICAgIHNldENoYXJ0RGF0YShPYmplY3QudmFsdWVzKHN0YXRzKSBhcyBzdHJpbmdbXSk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG5cbiAgICBmZXRjaCgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMjBweF0gZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlclwiPk9yZGVycyBBbmFseXRpY3M8L3A+XG5cbiAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICA8U2tlbGV0b24gY2xhc3NOYW1lPVwidy1mdWxsIGgtWzQwMHB4XSBtdC04XCIgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgKFxuICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgIDxDaGFydFxuICAgICAgICAgICAgb3B0aW9ucz17Y2hhcnREZWZhdWx0T3B0aW9uc31cbiAgICAgICAgICAgIHNlcmllcz17W1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJUb3RhbCBJbmNvbWVcIixcbiAgICAgICAgICAgICAgICBkYXRhOiBjaGFydERhdGEsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiI0ZGQTAzRlwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIHR5cGU9XCJsaW5lXCJcbiAgICAgICAgICAgIGhlaWdodD17NDAwfVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE92ZXJ2aWV3Q2hhcnRTZWN0aW9uO1xuIl0sIm5hbWVzIjpbImFwaUNsaWVudCIsImFwaVJlc291cmNlcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTa2VsZXRvbiIsIkNoYXJ0IiwibGF6eSIsIk92ZXJ2aWV3Q2hhcnRTZWN0aW9uIiwiY2hhcnREYXRhIiwic2V0Q2hhcnREYXRhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJjaGFydERlZmF1bHRPcHRpb25zIiwiY2hhcnQiLCJoZWlnaHQiLCJ0eXBlIiwidG9vbGJhciIsInNob3ciLCJkYXRhTGFiZWxzIiwiZW5hYmxlZCIsInN0cm9rZSIsImN1cnZlIiwieGF4aXMiLCJjYXRlZ29yaWVzIiwidG9vbHRpcCIsIngiLCJmb3JtYXQiLCJmZXRjaCIsInN0YXRzIiwiZ2V0Iiwic3RhdGlzdGljcyIsIk9iamVjdCIsInZhbHVlcyIsImRpdiIsInAiLCJjbGFzc05hbWUiLCJvcHRpb25zIiwic2VyaWVzIiwibmFtZSIsImRhdGEiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/sections/OverviewChartSection.tsx\n"));

/***/ })

});