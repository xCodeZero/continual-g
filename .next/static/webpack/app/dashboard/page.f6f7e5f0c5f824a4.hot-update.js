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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/network */ \"(app-pages-browser)/./src/network/index.ts\");\n/* harmony import */ var _network_resources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/network/resources */ \"(app-pages-browser)/./src/network/resources.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apexcharts */ \"(app-pages-browser)/./node_modules/react-apexcharts/dist/react-apexcharts.min.js\");\n/* harmony import */ var _ui_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/skeleton */ \"(app-pages-browser)/./src/components/ui/skeleton.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction OverviewChartSection() {\n    _s();\n    const [chartData, setChartData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([\n        \"0\",\n        \"0\",\n        \"0\",\n        \"0\",\n        \"0\",\n        \"0\",\n        \"0\",\n        \"0\",\n        \"0\",\n        \"0\",\n        \"0\",\n        \"0\"\n    ]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const chartDefaultOptions = {\n        chart: {\n            height: 350,\n            type: \"area\",\n            toolbar: {\n                show: false\n            }\n        },\n        dataLabels: {\n            enabled: false\n        },\n        stroke: {\n            curve: \"smooth\"\n        },\n        xaxis: {\n            type: \"month\",\n            categories: [\n                \"Jan\",\n                \"Feb\",\n                \"Mar\",\n                \"Apr\",\n                \"May\",\n                \"Jun\",\n                \"Jul\",\n                \"Aug\",\n                \"Sep\",\n                \"Oct\",\n                \"Nov\",\n                \"Dec\"\n            ]\n        },\n        tooltip: {\n            x: {\n                format: \"dd/MM/yy HH:mm\"\n            }\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        async function fetch() {\n            const stats = await _network__WEBPACK_IMPORTED_MODULE_1__.apiClient.get(_network_resources__WEBPACK_IMPORTED_MODULE_2__[\"default\"].statistics, \"/chart\");\n            setChartData(Object.values(stats));\n            setLoading(false);\n        }\n        fetch();\n    }, []);\n    function componentWillMount() {\n        if (true) {\n            console.log(\"window.innerHeight\", window.innerHeight);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-[20px] font-semibold text-center\",\n                children: \"Orders Analytics\"\n            }, void 0, false, {\n                fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/sections/OverviewChartSection.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_skeleton__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {\n                className: \"w-full h-[400px] mt-8\"\n            }, void 0, false, {\n                fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/sections/OverviewChartSection.tsx\",\n                lineNumber: 89,\n                columnNumber: 9\n            }, this) : componentWillMount() && //@ts-ignore\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_apexcharts__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                options: chartDefaultOptions,\n                series: [\n                    {\n                        name: \"Orders\",\n                        data: chartData,\n                        color: \"#FFA03F\"\n                    }\n                ],\n                type: \"line\",\n                height: 400\n            }, void 0, false, {\n                fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/sections/OverviewChartSection.tsx\",\n                lineNumber: 93,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/sections/OverviewChartSection.tsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, this);\n}\n_s(OverviewChartSection, \"bz6Usauvkb1dz7cMVdM3xjjEqmM=\");\n_c = OverviewChartSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OverviewChartSection);\nvar _c;\n$RefreshReg$(_c, \"OverviewChartSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb25zL092ZXJ2aWV3Q2hhcnRTZWN0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRXNDO0FBQ1M7QUFFSTtBQUNkO0FBQ0s7QUFFMUMsU0FBU087O0lBQ1AsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFXO1FBQ25EO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNEO0lBQ0QsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1RLHNCQUFzQjtRQUMxQkMsT0FBTztZQUNMQyxRQUFRO1lBQ1JDLE1BQU07WUFDTkMsU0FBUztnQkFDUEMsTUFBTTtZQUNSO1FBQ0Y7UUFDQUMsWUFBWTtZQUNWQyxTQUFTO1FBQ1g7UUFDQUMsUUFBUTtZQUNOQyxPQUFPO1FBQ1Q7UUFDQUMsT0FBTztZQUNMUCxNQUFNO1lBQ05RLFlBQVk7Z0JBQ1Y7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7YUFDRDtRQUNIO1FBQ0FDLFNBQVM7WUFDUEMsR0FBRztnQkFDREMsUUFBUTtZQUNWO1FBQ0Y7SUFDRjtJQUVBdkIsZ0RBQVNBLENBQUM7UUFDUixlQUFld0I7WUFDYixNQUFNQyxRQUFRLE1BQU01QiwrQ0FBU0EsQ0FBQzZCLEdBQUcsQ0FDL0I1QiwwREFBWUEsQ0FBQzZCLFVBQVUsRUFDdkI7WUFFRnJCLGFBQWFzQixPQUFPQyxNQUFNLENBQUNKO1lBQzNCakIsV0FBVztRQUNiO1FBRUFnQjtJQUNGLEdBQUcsRUFBRTtJQUVMLFNBQVNNO1FBQ1AsSUFBSSxJQUE2QixFQUFFO1lBQ2pDQyxRQUFRQyxHQUFHLENBQUMsc0JBQXNCQyxPQUFPQyxXQUFXO1FBQ3REO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQztnQkFBRUMsV0FBVTswQkFBd0M7Ozs7OztZQUVwRDlCLHdCQUNDLDhEQUFDSixrREFBUUE7Z0JBQUNrQyxXQUFVOzs7Ozt1QkFFcEJQLHdCQUNFLFlBQVk7MEJBQ1osOERBQUM1Qix3REFBS0E7Z0JBQ0pvQyxTQUFTN0I7Z0JBQ1Q4QixRQUFRO29CQUNOO3dCQUNFQyxNQUFNO3dCQUNOQyxNQUFNcEM7d0JBQ05xQyxPQUFPO29CQUNUO2lCQUNEO2dCQUNEOUIsTUFBSztnQkFDTEQsUUFBUTs7Ozs7Ozs7Ozs7O0FBTXBCO0dBbkdTUDtLQUFBQTtBQXFHVCwrREFBZUEsb0JBQW9CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb25zL092ZXJ2aWV3Q2hhcnRTZWN0aW9uLnRzeD9iYzRhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBhcGlDbGllbnQgfSBmcm9tIFwiQC9uZXR3b3JrXCI7XG5pbXBvcnQgYXBpUmVzb3VyY2VzIGZyb20gXCJAL25ldHdvcmsvcmVzb3VyY2VzXCI7XG5pbXBvcnQgeyBJQ2hhcnQgfSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDaGFydCBmcm9tIFwicmVhY3QtYXBleGNoYXJ0c1wiO1xuaW1wb3J0IHsgU2tlbGV0b24gfSBmcm9tIFwiLi4vdWkvc2tlbGV0b25cIjtcblxuZnVuY3Rpb24gT3ZlcnZpZXdDaGFydFNlY3Rpb24oKSB7XG4gIGNvbnN0IFtjaGFydERhdGEsIHNldENoYXJ0RGF0YV0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW1xuICAgIFwiMFwiLFxuICAgIFwiMFwiLFxuICAgIFwiMFwiLFxuICAgIFwiMFwiLFxuICAgIFwiMFwiLFxuICAgIFwiMFwiLFxuICAgIFwiMFwiLFxuICAgIFwiMFwiLFxuICAgIFwiMFwiLFxuICAgIFwiMFwiLFxuICAgIFwiMFwiLFxuICAgIFwiMFwiLFxuICBdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgY2hhcnREZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBjaGFydDoge1xuICAgICAgaGVpZ2h0OiAzNTAsXG4gICAgICB0eXBlOiBcImFyZWFcIixcbiAgICAgIHRvb2xiYXI6IHtcbiAgICAgICAgc2hvdzogZmFsc2UsIC8vIFNldCB0byBmYWxzZSB0byBoaWRlIHRoZSB0b29sYmFyXG4gICAgICB9LFxuICAgIH0sXG4gICAgZGF0YUxhYmVsczoge1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgfSxcbiAgICBzdHJva2U6IHtcbiAgICAgIGN1cnZlOiBcInNtb290aFwiLFxuICAgIH0sXG4gICAgeGF4aXM6IHtcbiAgICAgIHR5cGU6IFwibW9udGhcIixcbiAgICAgIGNhdGVnb3JpZXM6IFtcbiAgICAgICAgXCJKYW5cIixcbiAgICAgICAgXCJGZWJcIixcbiAgICAgICAgXCJNYXJcIixcbiAgICAgICAgXCJBcHJcIixcbiAgICAgICAgXCJNYXlcIixcbiAgICAgICAgXCJKdW5cIixcbiAgICAgICAgXCJKdWxcIixcbiAgICAgICAgXCJBdWdcIixcbiAgICAgICAgXCJTZXBcIixcbiAgICAgICAgXCJPY3RcIixcbiAgICAgICAgXCJOb3ZcIixcbiAgICAgICAgXCJEZWNcIixcbiAgICAgIF0sXG4gICAgfSxcbiAgICB0b29sdGlwOiB7XG4gICAgICB4OiB7XG4gICAgICAgIGZvcm1hdDogXCJkZC9NTS95eSBISDptbVwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2goKSB7XG4gICAgICBjb25zdCBzdGF0cyA9IGF3YWl0IGFwaUNsaWVudC5nZXQ8SUNoYXJ0PihcbiAgICAgICAgYXBpUmVzb3VyY2VzLnN0YXRpc3RpY3MsXG4gICAgICAgIFwiL2NoYXJ0XCJcbiAgICAgICk7XG4gICAgICBzZXRDaGFydERhdGEoT2JqZWN0LnZhbHVlcyhzdGF0cykgYXMgc3RyaW5nW10pO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuXG4gICAgZmV0Y2goKTtcbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgY29uc29sZS5sb2coXCJ3aW5kb3cuaW5uZXJIZWlnaHRcIiwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsyMHB4XSBmb250LXNlbWlib2xkIHRleHQtY2VudGVyXCI+T3JkZXJzIEFuYWx5dGljczwvcD5cblxuICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgIDxTa2VsZXRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1bNDAwcHhdIG10LThcIiAvPlxuICAgICAgKSA6IChcbiAgICAgICAgY29tcG9uZW50V2lsbE1vdW50KCkgJiYgKFxuICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgIDxDaGFydFxuICAgICAgICAgICAgb3B0aW9ucz17Y2hhcnREZWZhdWx0T3B0aW9uc31cbiAgICAgICAgICAgIHNlcmllcz17W1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJPcmRlcnNcIixcbiAgICAgICAgICAgICAgICBkYXRhOiBjaGFydERhdGEsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiI0ZGQTAzRlwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIHR5cGU9XCJsaW5lXCJcbiAgICAgICAgICAgIGhlaWdodD17NDAwfVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE92ZXJ2aWV3Q2hhcnRTZWN0aW9uO1xuIl0sIm5hbWVzIjpbImFwaUNsaWVudCIsImFwaVJlc291cmNlcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDaGFydCIsIlNrZWxldG9uIiwiT3ZlcnZpZXdDaGFydFNlY3Rpb24iLCJjaGFydERhdGEiLCJzZXRDaGFydERhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImNoYXJ0RGVmYXVsdE9wdGlvbnMiLCJjaGFydCIsImhlaWdodCIsInR5cGUiLCJ0b29sYmFyIiwic2hvdyIsImRhdGFMYWJlbHMiLCJlbmFibGVkIiwic3Ryb2tlIiwiY3VydmUiLCJ4YXhpcyIsImNhdGVnb3JpZXMiLCJ0b29sdGlwIiwieCIsImZvcm1hdCIsImZldGNoIiwic3RhdHMiLCJnZXQiLCJzdGF0aXN0aWNzIiwiT2JqZWN0IiwidmFsdWVzIiwiY29tcG9uZW50V2lsbE1vdW50IiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiZGl2IiwicCIsImNsYXNzTmFtZSIsIm9wdGlvbnMiLCJzZXJpZXMiLCJuYW1lIiwiZGF0YSIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/sections/OverviewChartSection.tsx\n"));

/***/ })

});