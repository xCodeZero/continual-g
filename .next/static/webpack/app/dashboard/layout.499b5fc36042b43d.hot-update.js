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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jotai */ \"(app-pages-browser)/./node_modules/jotai/esm/react.mjs\");\n/* harmony import */ var react_modern_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modern-drawer */ \"(app-pages-browser)/./node_modules/react-modern-drawer/dist/index.modern.js\");\n/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! numeral */ \"(app-pages-browser)/./node_modules/numeral/numeral.js\");\n/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _network_atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/network/atoms */ \"(app-pages-browser)/./src/network/atoms.ts\");\n/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/network */ \"(app-pages-browser)/./src/network/index.ts\");\n/* harmony import */ var _network_resources__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/network/resources */ \"(app-pages-browser)/./src/network/resources.ts\");\n/* harmony import */ var _ui_skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/skeleton */ \"(app-pages-browser)/./src/components/ui/skeleton.tsx\");\n/* harmony import */ var _DashboardSidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DashboardSidebar */ \"(app-pages-browser)/./src/components/common/DashboardSidebar.tsx\");\n/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iconify/react */ \"(app-pages-browser)/./node_modules/@iconify/react/dist/iconify.mjs\");\n/* harmony import */ var _components_ui_avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/ui/avatar */ \"(app-pages-browser)/./src/components/ui/avatar.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction DashboardNavigation() {\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [isDrawerOpen, setIsDrawerOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [user, setUser] = (0,jotai__WEBPACK_IMPORTED_MODULE_11__.useAtom)(_network_atoms__WEBPACK_IMPORTED_MODULE_4__.ATOMS.user);\n    const toggleDrawer = ()=>{\n        setIsDrawerOpen(!isDrawerOpen);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetch() {\n            try {\n                const res = await _network__WEBPACK_IMPORTED_MODULE_5__.apiClient.get(_network_resources__WEBPACK_IMPORTED_MODULE_6__[\"default\"].users, \"/\");\n                // Set to global state\n                setUser(res);\n                setLoading(false);\n            } catch (err) {\n                setLoading(false);\n            }\n        }\n        fetch();\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sticky top-0 shadow-none z-20 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"animate-in fade-in zoom-in bg-white p-4 border border-b-[#F2F2F2]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" flex justify-between items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"md:hidden\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_iconify_react__WEBPACK_IMPORTED_MODULE_9__.Icon, {\n                                icon: \"carbon:maximize\",\n                                onClick: toggleDrawer,\n                                className: \"cursor-pointer\",\n                                fontSize: 20\n                            }, void 0, false, {\n                                fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continual-g/src/components/common/DashboardNavigation.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continual-g/src/components/common/DashboardNavigation.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: \"md:flex md:w-full md:justify-between px-4 md:px-8\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-between flex-col md:flex-row gap-[1.5rem] select-none w-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-2xl md:text-[28px] font-bold\",\n                                                children: [\n                                                    \"Welcome Back, \",\n                                                    (user === null || user === void 0 ? void 0 : user.firstName) + \" \" + (user === null || user === void 0 ? void 0 : user.lastName)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continual-g/src/components/common/DashboardNavigation.tsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-1xl font-bold\",\n                                                children: [\n                                                    \"Account ID: \",\n                                                    user === null || user === void 0 ? void 0 : user.accountId\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continual-g/src/components/common/DashboardNavigation.tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-secondary mt-2\",\n                                                children: \"Here is the information about all your account\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continual-g/src/components/common/DashboardNavigation.tsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continual-g/src/components/common/DashboardNavigation.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-black font-[500] flex items-center gap-8\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex\",\n                                                children: [\n                                                    !loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                            src: \"/images/coin.png\",\n                                                            alt: \"coin\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continual-g/src/components/common/DashboardNavigation.tsx\",\n                                                            lineNumber: 88,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continual-g/src/components/common/DashboardNavigation.tsx\",\n                                                        lineNumber: 87,\n                                                        columnNumber: 21\n                                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_skeleton__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {\n                                                        className: \"w-[50px] h-[50px] rounded-full\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continual-g/src/components/common/DashboardNavigation.tsx\",\n                                                        lineNumber: 91,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    !loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"text-[32px] font-bold\",\n                                                        children: numeral__WEBPACK_IMPORTED_MODULE_3___default()(user === null || user === void 0 ? void 0 : user.creditCoins).format(\"0,0\")\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continual-g/src/components/common/DashboardNavigation.tsx\",\n                                                        lineNumber: 95,\n                                                        columnNumber: 21\n                                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_skeleton__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {\n                                                        className: \"mx-4 h-[50px] w-[60px]\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continual-g/src/components/common/DashboardNavigation.tsx\",\n                                                        lineNumber: 99,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continual-g/src/components/common/DashboardNavigation.tsx\",\n                                                lineNumber: 85,\n                                                columnNumber: 17\n                                            }, this),\n                                            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_skeleton__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {\n                                                className: \"w-[50px] h-[50px] rounded-full\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continual-g/src/components/common/DashboardNavigation.tsx\",\n                                                lineNumber: 103,\n                                                columnNumber: 19\n                                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex gap-2 items-center\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_10__.Avatar, {\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_10__.AvatarImage, {\n                                                                src: (user === null || user === void 0 ? void 0 : user.photo) === \"\" ? \"https://github.com/shadcn.png\" : user === null || user === void 0 ? void 0 : user.photo,\n                                                                alt: \"@shadcn\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continual-g/src/components/common/DashboardNavigation.tsx\",\n                                                                lineNumber: 107,\n                                                                columnNumber: 23\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_10__.AvatarFallback, {\n                                                                children: \"CN\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continual-g/src/components/common/DashboardNavigation.tsx\",\n                                                                lineNumber: 115,\n                                                                columnNumber: 23\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continual-g/src/components/common/DashboardNavigation.tsx\",\n                                                        lineNumber: 106,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"text-[16px]\",\n                                                        children: user === null || user === void 0 ? void 0 : user.firstName\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continual-g/src/components/common/DashboardNavigation.tsx\",\n                                                        lineNumber: 117,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continual-g/src/components/common/DashboardNavigation.tsx\",\n                                                lineNumber: 105,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continual-g/src/components/common/DashboardNavigation.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continual-g/src/components/common/DashboardNavigation.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continual-g/src/components/common/DashboardNavigation.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continual-g/src/components/common/DashboardNavigation.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continual-g/src/components/common/DashboardNavigation.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_modern_drawer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    open: isDrawerOpen,\n                    onClose: toggleDrawer,\n                    direction: \"left\",\n                    lockBackgroundScroll: true,\n                    customIdSuffix: \"drawer-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DashboardSidebar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        excludeMinimize: true\n                    }, void 0, false, {\n                        fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continual-g/src/components/common/DashboardNavigation.tsx\",\n                        lineNumber: 135,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continual-g/src/components/common/DashboardNavigation.tsx\",\n                    lineNumber: 128,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continual-g/src/components/common/DashboardNavigation.tsx\",\n                lineNumber: 127,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/xcodezero/Desktop/PROJECTS/websites/continual-g/src/components/common/DashboardNavigation.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_s(DashboardNavigation, \"aVBYxxNBNq7xYATk+MsAc2rZF0E=\", false, function() {\n    return [\n        jotai__WEBPACK_IMPORTED_MODULE_11__.useAtom\n    ];\n});\n_c = DashboardNavigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardNavigation);\nvar _c;\n$RefreshReg$(_c, \"DashboardNavigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9EYXNoYm9hcmROYXZpZ2F0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUU0QztBQUNaO0FBQ1M7QUFDWDtBQUNVO0FBQ0Y7QUFDUztBQUNMO0FBQ1E7QUFDWjtBQUN1QztBQUU3RSxTQUFTYzs7SUFDUCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR2YsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDZ0IsY0FBY0MsZ0JBQWdCLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNrQixNQUFNQyxRQUFRLEdBQUdsQiwrQ0FBT0EsQ0FBQ0csaURBQUtBLENBQUNjLElBQUk7SUFFMUMsTUFBTUUsZUFBZTtRQUNuQkgsZ0JBQWdCLENBQUNEO0lBQ25CO0lBRUFqQixnREFBU0EsQ0FBQztRQUNSLGVBQWVzQjtZQUNiLElBQUk7Z0JBQ0YsTUFBTUMsTUFBTSxNQUFNakIsK0NBQVNBLENBQUNrQixHQUFHLENBaUI1QmpCLDBEQUFZQSxDQUFDa0IsS0FBSyxFQUFFO2dCQUN2QixzQkFBc0I7Z0JBQ3RCTCxRQUFRRztnQkFDUlAsV0FBVztZQUNiLEVBQUUsT0FBT1UsS0FBSztnQkFDWlYsV0FBVztZQUNiO1FBQ0Y7UUFFQU07SUFFQSx1REFBdUQ7SUFDekQsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ2xCLGdEQUFJQTtnQ0FDSG1CLE1BQUs7Z0NBQ0xDLFNBQVNUO2dDQUNUTyxXQUFVO2dDQUNWRyxVQUFVOzs7Ozs7Ozs7OztzQ0FHZCw4REFBQ0M7NEJBQVFKLFdBQVU7c0NBQ2pCLDRFQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNEOzswREFDQyw4REFBQ007Z0RBQUVMLFdBQVU7O29EQUFvQztvREFDaENULENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTWUsU0FBUyxJQUFHLE9BQU1mLGlCQUFBQSwyQkFBQUEsS0FBTWdCLFFBQVE7Ozs7Ozs7MERBRXZELDhEQUFDRjtnREFBRUwsV0FBVTs7b0RBQXFCO29EQUNuQlQsaUJBQUFBLDJCQUFBQSxLQUFNaUIsU0FBUzs7Ozs7OzswREFFOUIsOERBQUNIO2dEQUFFTCxXQUFVOzBEQUFzQjs7Ozs7Ozs7Ozs7O2tEQUlyQyw4REFBQ0Q7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDRDtnREFBSUMsV0FBVTs7b0RBQ1osQ0FBQ2Isd0JBQ0EsOERBQUNZO2tFQUNDLDRFQUFDVTs0REFBSUMsS0FBSTs0REFBbUJDLEtBQUk7Ozs7Ozs7Ozs7NkVBR2xDLDhEQUFDL0Isa0RBQVFBO3dEQUFDb0IsV0FBVTs7Ozs7O29EQUdyQixDQUFDYix3QkFDQSw4REFBQ3lCO3dEQUFLWixXQUFVO2tFQUNieEIsOENBQU9BLENBQUNlLGlCQUFBQSwyQkFBQUEsS0FBTXNCLFdBQVcsRUFBRUMsTUFBTSxDQUFDOzs7Ozs2RUFHckMsOERBQUNsQyxrREFBUUE7d0RBQUNvQixXQUFVOzs7Ozs7Ozs7Ozs7NENBR3ZCYix3QkFDQyw4REFBQ1Asa0RBQVFBO2dEQUFDb0IsV0FBVTs7Ozs7cUVBRXBCLDhEQUFDRDtnREFBSUMsV0FBVTs7a0VBQ2IsOERBQUNqQiwwREFBTUE7OzBFQUNMLDhEQUFDRSwrREFBV0E7Z0VBQ1Z5QixLQUNFbkIsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNd0IsS0FBSyxNQUFLLEtBQ1osa0NBQ0F4QixpQkFBQUEsMkJBQUFBLEtBQU13QixLQUFLO2dFQUVqQkosS0FBSTs7Ozs7OzBFQUVOLDhEQUFDM0Isa0VBQWNBOzBFQUFDOzs7Ozs7Ozs7Ozs7a0VBRWxCLDhEQUFDcUI7d0RBQUVMLFdBQVU7a0VBQWVULGlCQUFBQSwyQkFBQUEsS0FBTWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFVekQsOERBQUNQO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDekIsMkRBQU1BO29CQUNMeUMsTUFBTTNCO29CQUNONEIsU0FBU3hCO29CQUNUeUIsV0FBVTtvQkFDVkMsc0JBQXNCO29CQUN0QkMsZ0JBQWU7OEJBRWYsNEVBQUN2Qyx5REFBZ0JBO3dCQUFDd0MsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUszQztHQTdIU25DOztRQUdpQlosMkNBQU9BOzs7S0FIeEJZO0FBK0hULCtEQUFlQSxtQkFBbUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0Rhc2hib2FyZE5hdmlnYXRpb24udHN4P2VhMzYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUF0b20gfSBmcm9tIFwiam90YWlcIjtcbmltcG9ydCBEcmF3ZXIgZnJvbSBcInJlYWN0LW1vZGVybi1kcmF3ZXJcIjtcbmltcG9ydCBudW1lcmFsIGZyb20gXCJudW1lcmFsXCI7XG5pbXBvcnQgeyBBVE9NUyB9IGZyb20gXCJAL25ldHdvcmsvYXRvbXNcIjtcbmltcG9ydCB7IGFwaUNsaWVudCB9IGZyb20gXCJAL25ldHdvcmtcIjtcbmltcG9ydCBhcGlSZXNvdXJjZXMgZnJvbSBcIkAvbmV0d29yay9yZXNvdXJjZXNcIjtcbmltcG9ydCB7IFNrZWxldG9uIH0gZnJvbSBcIi4uL3VpL3NrZWxldG9uXCI7XG5pbXBvcnQgRGFzaGJvYXJkU2lkZWJhciBmcm9tIFwiLi9EYXNoYm9hcmRTaWRlYmFyXCI7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSBcIkBpY29uaWZ5L3JlYWN0XCI7XG5pbXBvcnQgeyBBdmF0YXIsIEF2YXRhckZhbGxiYWNrLCBBdmF0YXJJbWFnZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYXZhdGFyXCI7XG5cbmZ1bmN0aW9uIERhc2hib2FyZE5hdmlnYXRpb24oKSB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbaXNEcmF3ZXJPcGVuLCBzZXRJc0RyYXdlck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VBdG9tKEFUT01TLnVzZXIpO1xuXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9ICgpID0+IHtcbiAgICBzZXRJc0RyYXdlck9wZW4oIWlzRHJhd2VyT3Blbik7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaCgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaUNsaWVudC5nZXQ8e1xuICAgICAgICAgIGFmZmlsaWF0ZUlkOiBzdHJpbmc7XG4gICAgICAgICAgYWNjb3VudElkOiBzdHJpbmc7XG4gICAgICAgICAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gICAgICAgICAgbGFzdE5hbWU6IHN0cmluZztcbiAgICAgICAgICBlbWFpbDogc3RyaW5nO1xuICAgICAgICAgIGNyZWRpdENvaW5zOiBudW1iZXI7XG4gICAgICAgICAgY3JlZGl0QmFsYW5jZTogbnVtYmVyO1xuICAgICAgICAgIHVzZXJSb2xlOiBudW1iZXI7XG4gICAgICAgICAgYmFua0FjY291bnQ6IHN0cmluZztcbiAgICAgICAgICBiYW5rQWNjb3VudE5hbWU6IHN0cmluZztcbiAgICAgICAgICBiYW5rOiBzdHJpbmc7XG4gICAgICAgICAgYmlvOiBzdHJpbmc7XG4gICAgICAgICAgcGhvdG86IHN0cmluZztcbiAgICAgICAgICBjb3ZlclBob3RvOiBzdHJpbmc7XG4gICAgICAgICAgYWRkcmVzczogc3RyaW5nO1xuICAgICAgICAgIHBob25lTnVtYmVyOiBzdHJpbmc7XG4gICAgICAgIH0+KGFwaVJlc291cmNlcy51c2VycywgXCIvXCIpO1xuICAgICAgICAvLyBTZXQgdG8gZ2xvYmFsIHN0YXRlXG4gICAgICAgIHNldFVzZXIocmVzKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmV0Y2goKTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3kgdG9wLTAgc2hhZG93LW5vbmUgei0yMCBcIj5cbiAgICAgIHsvKiBERVNLVE9QICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLWluIGZhZGUtaW4gem9vbS1pbiBiZy13aGl0ZSBwLTQgYm9yZGVyIGJvcmRlci1iLVsjRjJGMkYyXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmhpZGRlblwiPlxuICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgaWNvbj1cImNhcmJvbjptYXhpbWl6ZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICBmb250U2l6ZT17MjB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1kOmZsZXggbWQ6dy1mdWxsIG1kOmp1c3RpZnktYmV0d2VlbiBweC00IG1kOnB4LThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gZmxleC1jb2wgbWQ6ZmxleC1yb3cgZ2FwLVsxLjVyZW1dIHNlbGVjdC1ub25lIHctZnVsbFwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIG1kOnRleHQtWzI4cHhdIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgV2VsY29tZSBCYWNrLCB7dXNlcj8uZmlyc3ROYW1lICsgXCIgXCIgKyB1c2VyPy5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0xeGwgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICBBY2NvdW50IElEOiB7dXNlcj8uYWNjb3VudElkfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeSBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICBIZXJlIGlzIHRoZSBpbmZvcm1hdGlvbiBhYm91dCBhbGwgeW91ciBhY2NvdW50XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIGZvbnQtWzUwMF0gZmxleCBpdGVtcy1jZW50ZXIgZ2FwLThcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgIHshbG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvY29pbi5wbmdcIiBhbHQ9XCJjb2luXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8U2tlbGV0b24gY2xhc3NOYW1lPVwidy1bNTBweF0gaC1bNTBweF0gcm91bmRlZC1mdWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgIHshbG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMzJweF0gZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAge251bWVyYWwodXNlcj8uY3JlZGl0Q29pbnMpLmZvcm1hdChcIjAsMFwiKX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPFNrZWxldG9uIGNsYXNzTmFtZT1cIm14LTQgaC1bNTBweF0gdy1bNjBweF1cIiAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgIDxTa2VsZXRvbiBjbGFzc05hbWU9XCJ3LVs1MHB4XSBoLVs1MHB4XSByb3VuZGVkLWZ1bGxcIiAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgICAgPEF2YXRhckltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyPy5waG90byA9PT0gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJodHRwczovL2dpdGh1Yi5jb20vc2hhZGNuLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1c2VyPy5waG90b1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQHNoYWRjblwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyRmFsbGJhY2s+Q048L0F2YXRhckZhbGxiYWNrPlxuICAgICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTZweF1cIj57dXNlcj8uZmlyc3ROYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogTU9CSUxFICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpoaWRkZW5cIj5cbiAgICAgICAgPERyYXdlclxuICAgICAgICAgIG9wZW49e2lzRHJhd2VyT3Blbn1cbiAgICAgICAgICBvbkNsb3NlPXt0b2dnbGVEcmF3ZXJ9XG4gICAgICAgICAgZGlyZWN0aW9uPVwibGVmdFwiXG4gICAgICAgICAgbG9ja0JhY2tncm91bmRTY3JvbGw9e3RydWV9XG4gICAgICAgICAgY3VzdG9tSWRTdWZmaXg9XCJkcmF3ZXItMVwiXG4gICAgICAgID5cbiAgICAgICAgICA8RGFzaGJvYXJkU2lkZWJhciBleGNsdWRlTWluaW1pemUgLz5cbiAgICAgICAgPC9EcmF3ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkTmF2aWdhdGlvbjtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUF0b20iLCJEcmF3ZXIiLCJudW1lcmFsIiwiQVRPTVMiLCJhcGlDbGllbnQiLCJhcGlSZXNvdXJjZXMiLCJTa2VsZXRvbiIsIkRhc2hib2FyZFNpZGViYXIiLCJJY29uIiwiQXZhdGFyIiwiQXZhdGFyRmFsbGJhY2siLCJBdmF0YXJJbWFnZSIsIkRhc2hib2FyZE5hdmlnYXRpb24iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImlzRHJhd2VyT3BlbiIsInNldElzRHJhd2VyT3BlbiIsInVzZXIiLCJzZXRVc2VyIiwidG9nZ2xlRHJhd2VyIiwiZmV0Y2giLCJyZXMiLCJnZXQiLCJ1c2VycyIsImVyciIsImRpdiIsImNsYXNzTmFtZSIsImljb24iLCJvbkNsaWNrIiwiZm9udFNpemUiLCJzZWN0aW9uIiwicCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiYWNjb3VudElkIiwiaW1nIiwic3JjIiwiYWx0Iiwic3BhbiIsImNyZWRpdENvaW5zIiwiZm9ybWF0IiwicGhvdG8iLCJvcGVuIiwib25DbG9zZSIsImRpcmVjdGlvbiIsImxvY2tCYWNrZ3JvdW5kU2Nyb2xsIiwiY3VzdG9tSWRTdWZmaXgiLCJleGNsdWRlTWluaW1pemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/common/DashboardNavigation.tsx\n"));

/***/ })

});