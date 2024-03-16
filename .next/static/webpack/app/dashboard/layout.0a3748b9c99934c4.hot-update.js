"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/layout",{

/***/ "(app-pages-browser)/./src/components/common/DashboardNavigation.tsx":
/*!*******************************************************!*\
  !*** ./src/components/common/DashboardNavigation.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jotai */ \"(app-pages-browser)/./node_modules/jotai/esm/react.mjs\");\n/* harmony import */ var react_modern_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modern-drawer */ \"(app-pages-browser)/./node_modules/react-modern-drawer/dist/index.modern.js\");\n/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! numeral */ \"(app-pages-browser)/./node_modules/numeral/numeral.js\");\n/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _network_atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/network/atoms */ \"(app-pages-browser)/./src/network/atoms.ts\");\n/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/network */ \"(app-pages-browser)/./src/network/index.ts\");\n/* harmony import */ var _network_resources__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/network/resources */ \"(app-pages-browser)/./src/network/resources.ts\");\n/* harmony import */ var _ui_skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/skeleton */ \"(app-pages-browser)/./src/components/ui/skeleton.tsx\");\n/* harmony import */ var _DashboardSidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DashboardSidebar */ \"(app-pages-browser)/./src/components/common/DashboardSidebar.tsx\");\n/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/react */ \"(app-pages-browser)/./node_modules/@iconify/react/dist/iconify.mjs\");\n/* harmony import */ var _components_ui_avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/ui/avatar */ \"(app-pages-browser)/./src/components/ui/avatar.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction DashboardNavigation() {\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [isDrawerOpen, setIsDrawerOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [user, setUser] = (0,jotai__WEBPACK_IMPORTED_MODULE_11__.useAtom)(_network_atoms__WEBPACK_IMPORTED_MODULE_4__.ATOMS.user);\n    const toggleDrawer = ()=>{\n        setIsDrawerOpen(!isDrawerOpen);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetch() {\n            try {\n                const res = await _network__WEBPACK_IMPORTED_MODULE_5__.apiClient.get(_network_resources__WEBPACK_IMPORTED_MODULE_6__[\"default\"].users, \"/\");\n                // Set to global state\n                setUser(res);\n                setLoading(false);\n            } catch (err) {\n                setLoading(false);\n            }\n        }\n        fetch();\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sticky top-0 shadow-none z-20 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"animate-in fade-in zoom-in bg-white p-4 border border-b-[#F2F2F2]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" flex justify-between items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"md:hidden\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_9__.Icon, {\n                                icon: \"carbon:maximize\",\n                                onClick: toggleDrawer,\n                                className: \"cursor-pointer\",\n                                fontSize: 20\n                            }, void 0, false, {\n                                fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/common/DashboardNavigation.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/common/DashboardNavigation.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: \"md:flex md:w-full md:justify-between px-4 md:px-8\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-between flex-col md:flex-row gap-[1.5rem] select-none w-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-2xl md:text-[28px] font-bold\",\n                                                children: [\n                                                    \"Welcome Back, \",\n                                                    (user === null || user === void 0 ? void 0 : user.firstName) + \" \" + (user === null || user === void 0 ? void 0 : user.lastName)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/common/DashboardNavigation.tsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-1xl font-bold\",\n                                                children: [\n                                                    \"Account ID: \",\n                                                    user === null || user === void 0 ? void 0 : user.accountId\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/common/DashboardNavigation.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-secondary\",\n                                                children: \"Here is the information about all your orders\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/common/DashboardNavigation.tsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/common/DashboardNavigation.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-black font-[500] flex items-center gap-8\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex\",\n                                                children: [\n                                                    !loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                            src: \"/images/coin.png\",\n                                                            alt: \"coin\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/common/DashboardNavigation.tsx\",\n                                                            lineNumber: 80,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/common/DashboardNavigation.tsx\",\n                                                        lineNumber: 79,\n                                                        columnNumber: 21\n                                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_skeleton__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {\n                                                        className: \"w-[50px] h-[50px] rounded-full\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/common/DashboardNavigation.tsx\",\n                                                        lineNumber: 83,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    !loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"text-[32px] font-bold\",\n                                                        children: numeral__WEBPACK_IMPORTED_MODULE_3___default()(user === null || user === void 0 ? void 0 : user.creditCoins).format(\"0,0\")\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/common/DashboardNavigation.tsx\",\n                                                        lineNumber: 87,\n                                                        columnNumber: 21\n                                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_skeleton__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {\n                                                        className: \"mx-4 h-[50px] w-[60px]\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/common/DashboardNavigation.tsx\",\n                                                        lineNumber: 91,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/common/DashboardNavigation.tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 17\n                                            }, this),\n                                            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_skeleton__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {\n                                                className: \"w-[50px] h-[50px] rounded-full\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/common/DashboardNavigation.tsx\",\n                                                lineNumber: 95,\n                                                columnNumber: 19\n                                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex gap-2 items-center\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_10__.Avatar, {\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_10__.AvatarImage, {\n                                                                src: \"https://github.com/shadcn.png\",\n                                                                alt: \"@shadcn\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/common/DashboardNavigation.tsx\",\n                                                                lineNumber: 99,\n                                                                columnNumber: 23\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_10__.AvatarFallback, {\n                                                                children: \"CN\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/common/DashboardNavigation.tsx\",\n                                                                lineNumber: 103,\n                                                                columnNumber: 23\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/common/DashboardNavigation.tsx\",\n                                                        lineNumber: 98,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"text-[16px]\",\n                                                        children: user === null || user === void 0 ? void 0 : user.firstName\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/common/DashboardNavigation.tsx\",\n                                                        lineNumber: 105,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/common/DashboardNavigation.tsx\",\n                                                lineNumber: 97,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/common/DashboardNavigation.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/common/DashboardNavigation.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/common/DashboardNavigation.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/common/DashboardNavigation.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/common/DashboardNavigation.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_modern_drawer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    open: isDrawerOpen,\n                    onClose: toggleDrawer,\n                    direction: \"left\",\n                    lockBackgroundScroll: true,\n                    customIdSuffix: \"drawer-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DashboardSidebar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        excludeMinimize: true\n                    }, void 0, false, {\n                        fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/common/DashboardNavigation.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/common/DashboardNavigation.tsx\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/common/DashboardNavigation.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continualg/src/components/common/DashboardNavigation.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(DashboardNavigation, \"aVBYxxNBNq7xYATk+MsAc2rZF0E=\", false, function() {\n    return [\n        jotai__WEBPACK_IMPORTED_MODULE_11__.useAtom\n    ];\n});\n_c = DashboardNavigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardNavigation);\nvar _c;\n$RefreshReg$(_c, \"DashboardNavigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9EYXNoYm9hcmROYXZpZ2F0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUU0QztBQUNaO0FBQ1M7QUFDWDtBQUNVO0FBQ0Y7QUFDUztBQUNMO0FBQ1E7QUFDWjtBQUN1QztBQUU3RSxTQUFTYzs7SUFDUCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR2YsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDZ0IsY0FBY0MsZ0JBQWdCLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNrQixNQUFNQyxRQUFRLEdBQUdsQiwrQ0FBT0EsQ0FBQ0csaURBQUtBLENBQUNjLElBQUk7SUFFMUMsTUFBTUUsZUFBZTtRQUNuQkgsZ0JBQWdCLENBQUNEO0lBQ25CO0lBRUFqQixnREFBU0EsQ0FBQztRQUNSLGVBQWVzQjtZQUNiLElBQUk7Z0JBQ0YsTUFBTUMsTUFBTSxNQUFNakIsK0NBQVNBLENBQUNrQixHQUFHLENBUzVCakIsMERBQVlBLENBQUNrQixLQUFLLEVBQUU7Z0JBQ3ZCLHNCQUFzQjtnQkFDdEJMLFFBQVFHO2dCQUNSUCxXQUFXO1lBQ2IsRUFBRSxPQUFPVSxLQUFLO2dCQUNaVixXQUFXO1lBQ2I7UUFDRjtRQUVBTTtJQUVBLHVEQUF1RDtJQUN6RCxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDbEIsZ0RBQUlBO2dDQUNIbUIsTUFBSztnQ0FDTEMsU0FBU1Q7Z0NBQ1RPLFdBQVU7Z0NBQ1ZHLFVBQVU7Ozs7Ozs7Ozs7O3NDQUdkLDhEQUFDQzs0QkFBUUosV0FBVTtzQ0FDakIsNEVBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0Q7OzBEQUNDLDhEQUFDTTtnREFBRUwsV0FBVTs7b0RBQW9DO29EQUNoQ1QsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNZSxTQUFTLElBQUcsT0FBTWYsaUJBQUFBLDJCQUFBQSxLQUFNZ0IsUUFBUTs7Ozs7OzswREFFdkQsOERBQUNGO2dEQUFFTCxXQUFVOztvREFBcUI7b0RBQ25CVCxpQkFBQUEsMkJBQUFBLEtBQU1pQixTQUFTOzs7Ozs7OzBEQUU5Qiw4REFBQ0g7Z0RBQUVMLFdBQVU7MERBQWlCOzs7Ozs7Ozs7Ozs7a0RBSWhDLDhEQUFDRDt3Q0FBSUMsV0FBVTs7MERBQ2IsOERBQUNEO2dEQUFJQyxXQUFVOztvREFDWixDQUFDYix3QkFDQSw4REFBQ1k7a0VBQ0MsNEVBQUNVOzREQUFJQyxLQUFJOzREQUFtQkMsS0FBSTs7Ozs7Ozs7Ozs2RUFHbEMsOERBQUMvQixrREFBUUE7d0RBQUNvQixXQUFVOzs7Ozs7b0RBR3JCLENBQUNiLHdCQUNBLDhEQUFDeUI7d0RBQUtaLFdBQVU7a0VBQ2J4Qiw4Q0FBT0EsQ0FBQ2UsaUJBQUFBLDJCQUFBQSxLQUFNc0IsV0FBVyxFQUFFQyxNQUFNLENBQUM7Ozs7OzZFQUdyQyw4REFBQ2xDLGtEQUFRQTt3REFBQ29CLFdBQVU7Ozs7Ozs7Ozs7Ozs0Q0FHdkJiLHdCQUNDLDhEQUFDUCxrREFBUUE7Z0RBQUNvQixXQUFVOzs7OztxRUFFcEIsOERBQUNEO2dEQUFJQyxXQUFVOztrRUFDYiw4REFBQ2pCLDBEQUFNQTs7MEVBQ0wsOERBQUNFLCtEQUFXQTtnRUFDVnlCLEtBQUk7Z0VBQ0pDLEtBQUk7Ozs7OzswRUFFTiw4REFBQzNCLGtFQUFjQTswRUFBQzs7Ozs7Ozs7Ozs7O2tFQUVsQiw4REFBQ3FCO3dEQUFFTCxXQUFVO2tFQUFlVCxpQkFBQUEsMkJBQUFBLEtBQU1lLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBVXpELDhEQUFDUDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ3pCLDJEQUFNQTtvQkFDTHdDLE1BQU0xQjtvQkFDTjJCLFNBQVN2QjtvQkFDVHdCLFdBQVU7b0JBQ1ZDLHNCQUFzQjtvQkFDdEJDLGdCQUFlOzhCQUVmLDRFQUFDdEMseURBQWdCQTt3QkFBQ3VDLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLM0M7R0FqSFNsQzs7UUFHaUJaLDJDQUFPQTs7O0tBSHhCWTtBQW1IVCwrREFBZUEsbUJBQW1CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9EYXNoYm9hcmROYXZpZ2F0aW9uLnRzeD9lYTM2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBdG9tIH0gZnJvbSBcImpvdGFpXCI7XG5pbXBvcnQgRHJhd2VyIGZyb20gXCJyZWFjdC1tb2Rlcm4tZHJhd2VyXCI7XG5pbXBvcnQgbnVtZXJhbCBmcm9tIFwibnVtZXJhbFwiO1xuaW1wb3J0IHsgQVRPTVMgfSBmcm9tIFwiQC9uZXR3b3JrL2F0b21zXCI7XG5pbXBvcnQgeyBhcGlDbGllbnQgfSBmcm9tIFwiQC9uZXR3b3JrXCI7XG5pbXBvcnQgYXBpUmVzb3VyY2VzIGZyb20gXCJAL25ldHdvcmsvcmVzb3VyY2VzXCI7XG5pbXBvcnQgeyBTa2VsZXRvbiB9IGZyb20gXCIuLi91aS9za2VsZXRvblwiO1xuaW1wb3J0IERhc2hib2FyZFNpZGViYXIgZnJvbSBcIi4vRGFzaGJvYXJkU2lkZWJhclwiO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCJAaWNvbmlmeS9yZWFjdFwiO1xuaW1wb3J0IHsgQXZhdGFyLCBBdmF0YXJGYWxsYmFjaywgQXZhdGFySW1hZ2UgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2F2YXRhclwiO1xuXG5mdW5jdGlvbiBEYXNoYm9hcmROYXZpZ2F0aW9uKCkge1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2lzRHJhd2VyT3Blbiwgc2V0SXNEcmF3ZXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlQXRvbShBVE9NUy51c2VyKTtcblxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XG4gICAgc2V0SXNEcmF3ZXJPcGVuKCFpc0RyYXdlck9wZW4pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2goKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBhcGlDbGllbnQuZ2V0PHtcbiAgICAgICAgICBhZmZpbGlhdGVJZDogc3RyaW5nO1xuICAgICAgICAgIGFjY291bnRJZDogc3RyaW5nO1xuICAgICAgICAgIGZpcnN0TmFtZTogc3RyaW5nO1xuICAgICAgICAgIGxhc3ROYW1lOiBzdHJpbmc7XG4gICAgICAgICAgZW1haWw6IHN0cmluZztcbiAgICAgICAgICBjcmVkaXRDb2luczogbnVtYmVyO1xuICAgICAgICAgIGNyZWRpdEJhbGFuY2U6IG51bWJlcjtcbiAgICAgICAgICB1c2VyUm9sZTogbnVtYmVyO1xuICAgICAgICB9PihhcGlSZXNvdXJjZXMudXNlcnMsIFwiL1wiKTtcbiAgICAgICAgLy8gU2V0IHRvIGdsb2JhbCBzdGF0ZVxuICAgICAgICBzZXRVc2VyKHJlcyk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZldGNoKCk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3RpY2t5IHRvcC0wIHNoYWRvdy1ub25lIHotMjAgXCI+XG4gICAgICB7LyogREVTS1RPUCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZS1pbiBmYWRlLWluIHpvb20taW4gYmctd2hpdGUgcC00IGJvcmRlciBib3JkZXItYi1bI0YyRjJGMl1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpoaWRkZW5cIj5cbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIGljb249XCJjYXJib246bWF4aW1pemVcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgZm9udFNpemU9ezIwfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtZDpmbGV4IG1kOnctZnVsbCBtZDpqdXN0aWZ5LWJldHdlZW4gcHgtNCBtZDpweC04XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGZsZXgtY29sIG1kOmZsZXgtcm93IGdhcC1bMS41cmVtXSBzZWxlY3Qtbm9uZSB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtZDp0ZXh0LVsyOHB4XSBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgIFdlbGNvbWUgQmFjaywge3VzZXI/LmZpcnN0TmFtZSArIFwiIFwiICsgdXNlcj8ubGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMXhsIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgQWNjb3VudCBJRDoge3VzZXI/LmFjY291bnRJZH1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgIEhlcmUgaXMgdGhlIGluZm9ybWF0aW9uIGFib3V0IGFsbCB5b3VyIG9yZGVyc1xuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBmb250LVs1MDBdIGZsZXggaXRlbXMtY2VudGVyIGdhcC04XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICB7IWxvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2NvaW4ucG5nXCIgYWx0PVwiY29pblwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPFNrZWxldG9uIGNsYXNzTmFtZT1cInctWzUwcHhdIGgtWzUwcHhdIHJvdW5kZWQtZnVsbFwiIC8+XG4gICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICB7IWxvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzMycHhdIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtudW1lcmFsKHVzZXI/LmNyZWRpdENvaW5zKS5mb3JtYXQoXCIwLDBcIil9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxTa2VsZXRvbiBjbGFzc05hbWU9XCJteC00IGgtWzUwcHhdIHctWzYwcHhdXCIgLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICA8U2tlbGV0b24gY2xhc3NOYW1lPVwidy1bNTBweF0gaC1bNTBweF0gcm91bmRlZC1mdWxsXCIgLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXJJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9naXRodWIuY29tL3NoYWRjbi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQHNoYWRjblwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyRmFsbGJhY2s+Q048L0F2YXRhckZhbGxiYWNrPlxuICAgICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTZweF1cIj57dXNlcj8uZmlyc3ROYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogTU9CSUxFICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpoaWRkZW5cIj5cbiAgICAgICAgPERyYXdlclxuICAgICAgICAgIG9wZW49e2lzRHJhd2VyT3Blbn1cbiAgICAgICAgICBvbkNsb3NlPXt0b2dnbGVEcmF3ZXJ9XG4gICAgICAgICAgZGlyZWN0aW9uPVwibGVmdFwiXG4gICAgICAgICAgbG9ja0JhY2tncm91bmRTY3JvbGw9e3RydWV9XG4gICAgICAgICAgY3VzdG9tSWRTdWZmaXg9XCJkcmF3ZXItMVwiXG4gICAgICAgID5cbiAgICAgICAgICA8RGFzaGJvYXJkU2lkZWJhciBleGNsdWRlTWluaW1pemUgLz5cbiAgICAgICAgPC9EcmF3ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkTmF2aWdhdGlvbjtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUF0b20iLCJEcmF3ZXIiLCJudW1lcmFsIiwiQVRPTVMiLCJhcGlDbGllbnQiLCJhcGlSZXNvdXJjZXMiLCJTa2VsZXRvbiIsIkRhc2hib2FyZFNpZGViYXIiLCJJY29uIiwiQXZhdGFyIiwiQXZhdGFyRmFsbGJhY2siLCJBdmF0YXJJbWFnZSIsIkRhc2hib2FyZE5hdmlnYXRpb24iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImlzRHJhd2VyT3BlbiIsInNldElzRHJhd2VyT3BlbiIsInVzZXIiLCJzZXRVc2VyIiwidG9nZ2xlRHJhd2VyIiwiZmV0Y2giLCJyZXMiLCJnZXQiLCJ1c2VycyIsImVyciIsImRpdiIsImNsYXNzTmFtZSIsImljb24iLCJvbkNsaWNrIiwiZm9udFNpemUiLCJzZWN0aW9uIiwicCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiYWNjb3VudElkIiwiaW1nIiwic3JjIiwiYWx0Iiwic3BhbiIsImNyZWRpdENvaW5zIiwiZm9ybWF0Iiwib3BlbiIsIm9uQ2xvc2UiLCJkaXJlY3Rpb24iLCJsb2NrQmFja2dyb3VuZFNjcm9sbCIsImN1c3RvbUlkU3VmZml4IiwiZXhjbHVkZU1pbmltaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/common/DashboardNavigation.tsx\n"));

/***/ })

});