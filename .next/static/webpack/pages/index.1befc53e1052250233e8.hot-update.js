webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Product.tsx":
/*!********************************!*\
  !*** ./components/Product.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/home/tony/Desktop/NextApp/components/Product.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Product = function Product(props) {\n  return __jsx(\"div\", {\n    className: \"product\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    className: \"product__title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }\n  }, props.product.name), __jsx(\"p\", {\n    className: \"product__description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }, props.product.description), __jsx(\"img\", {\n    src: props.product.image,\n    alt: \"\",\n    className: \"product__image\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"product__price-button-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    className: \"product__price\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 17\n    }\n  }, \"$\", props.product.price.toFixed(2)), __jsx(\"button\", {\n    className: \"snipcart-add-item product__button\",\n    \"data-item-id\": props.product.id,\n    \"data-item-name\": props.product.name,\n    \"data-item-price\": props.product.price,\n    \"data-item-url\": props.router.pathname,\n    \"data-item-image\": props.product.image,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 17\n    }\n  }, \"Add to cart\")));\n};\n\n_c3 = Product;\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(Product));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Product\");\n$RefreshReg$(_c2, \"%default%\");\n;\n\nvar _a, _b; // Legacy CSS implementations will `eval` browser code in a Node.js context\n// to extract CSS. For backwards compatibility, we need to check we're in a\n// browser context before continuing.\n\n\nif (typeof self !== 'undefined' && // AMP / No-JS mode does not inject these helpers:\n'$RefreshHelpers$' in self) {\n  var currentExports = module.__proto__.exports;\n  var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null; // This cannot happen in MainTemplate because the exports mismatch between\n  // templating and execution.\n\n  self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i); // A module can be accepted automatically based on its exports, e.g. when\n  // it is a Refresh Boundary.\n\n  if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n    // Save the previous exports on update so we can compare the boundary\n    // signatures.\n    module.hot.dispose(function (data) {\n      data.prevExports = currentExports;\n    }); // Unconditionally accept an update to this module, we'll check if it's\n    // still a Refresh Boundary later.\n\n    module.hot.accept(); // This field is set when the previous version of this module was a\n    // Refresh Boundary, letting us know we need to check for invalidation or\n    // enqueue an update.\n\n    if (prevExports !== null) {\n      // A boundary can become ineligible if its exports are incompatible\n      // with the previous exports.\n      //\n      // For example, if you add/remove/change exports, we'll want to\n      // re-execute the importing modules, and force those components to\n      // re-render. Similarly, if you convert a class component to a\n      // function, we want to invalidate the boundary.\n      if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n        module.hot.invalidate();\n      } else {\n        self.$RefreshHelpers$.scheduleUpdate();\n      }\n    }\n  } else {\n    // Since we just executed the code for the module, it's possible that the\n    // new exports made it ineligible for being a boundary.\n    // We only care about the case when we were _previously_ a boundary,\n    // because we already accepted this update (accidental side effect).\n    var isNoLongerABoundary = prevExports !== null;\n\n    if (isNoLongerABoundary) {\n      module.hot.invalidate();\n    }\n  }\n}\n\nvar _c3;\n\n$RefreshReg$(_c3, \"Product\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0LnRzeD9hZDU1Il0sIm5hbWVzIjpbIlByb2R1Y3QiLCJwcm9wcyIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFjQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxRQUEwQjtBQUN0QyxTQUNJO0FBQUssYUFBUyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdDQyxLQUFLLENBQUxBLFFBRHBDLElBQ0ksQ0FESixFQUVJO0FBQUcsYUFBUyxFQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBcUNBLEtBQUssQ0FBTEEsUUFGekMsV0FFSSxDQUZKLEVBR0k7QUFBSyxPQUFHLEVBQUVBLEtBQUssQ0FBTEEsUUFBVjtBQUErQixPQUFHLEVBQWxDO0FBQXNDLGFBQVMsRUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBSUk7QUFBSyxhQUFTLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBa0NBLEtBQUssQ0FBTEEsc0JBRHRDLENBQ3NDQSxDQUFsQyxDQURKLEVBRUk7QUFDQSxhQUFTLEVBRFQ7QUFFQSxvQkFBZ0JBLEtBQUssQ0FBTEEsUUFGaEI7QUFHQSxzQkFBa0JBLEtBQUssQ0FBTEEsUUFIbEI7QUFJQSx1QkFBbUJBLEtBQUssQ0FBTEEsUUFKbkI7QUFLQSxxQkFBaUJBLEtBQUssQ0FBTEEsT0FMakI7QUFNQSx1QkFBbUJBLEtBQUssQ0FBTEEsUUFObkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVBaLGFBT1ksQ0FGSixDQUpKLENBREo7QUFESjs7TUFBTUQsTztLQUFBQSxPO0FBcUJOLHFFQUFlRSw4REFBVSxDQUF6QixPQUF5QixDQUF6QiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvZHVjdC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3dpdGhSb3V0ZXIsIFJvdXRlclByb3BzfSBmcm9tICduZXh0L3JvdXRlcidcbmV4cG9ydCBpbnRlcmZhY2UgSVByb2R1Y3Qge1xuICAgIGlkOiBzdHJpbmdcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBwcmljZTogbnVtYmVyXG4gICAgdXJsOiBzdHJpbmdcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gICAgaW1hZ2U6IHN0cmluZ1xufVxuaW50ZXJmYWNlIElQcm9kdWN0UHJvcHMge1xuICAgIHByb2R1Y3Q6IElQcm9kdWN0XG4gICAgcm91dGVyOiBSb3V0ZXJQcm9wc1xufVxuXG5jb25zdCBQcm9kdWN0ID0gKHByb3BzOiBJUHJvZHVjdFByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHJvZHVjdF9fdGl0bGVcIj57cHJvcHMucHJvZHVjdC5uYW1lfTwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0X19kZXNjcmlwdGlvblwiPntwcm9wcy5wcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5wcm9kdWN0LmltYWdlfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJwcm9kdWN0X19pbWFnZVwiLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9fcHJpY2UtYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9fcHJpY2VcIj4ke3Byb3BzLnByb2R1Y3QucHJpY2UudG9GaXhlZCgyKX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic25pcGNhcnQtYWRkLWl0ZW0gcHJvZHVjdF9fYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBkYXRhLWl0ZW0taWQgPSB7cHJvcHMucHJvZHVjdC5pZH1cbiAgICAgICAgICAgICAgICBkYXRhLWl0ZW0tbmFtZSA9IHtwcm9wcy5wcm9kdWN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgZGF0YS1pdGVtLXByaWNlID0ge3Byb3BzLnByb2R1Y3QucHJpY2V9XG4gICAgICAgICAgICAgICAgZGF0YS1pdGVtLXVybCA9IHtwcm9wcy5yb3V0ZXIucGF0aG5hbWV9XG4gICAgICAgICAgICAgICAgZGF0YS1pdGVtLWltYWdlID0ge3Byb3BzLnByb2R1Y3QuaW1hZ2V9PlxuICAgICAgICAgICAgICAgICAgICBBZGQgdG8gY2FydFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoUHJvZHVjdCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Product.tsx\n");

/***/ }),

/***/ "./components/ProductList.tsx":
/*!************************************!*\
  !*** ./components/ProductList.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product */ \"./components/Product.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/home/tony/Desktop/NextApp/components/ProductList.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar ProductList = function ProductList(props) {\n  return __jsx(\"div\", {\n    className: \"product-list\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, props.products.map(function (product, index) {\n    return __jsx(_Product__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      product: product,\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 53\n      }\n    });\n  }));\n};\n\n_c2 = ProductList;\n_c = ProductList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductList);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductList\");\n;\n\nvar _a, _b; // Legacy CSS implementations will `eval` browser code in a Node.js context\n// to extract CSS. For backwards compatibility, we need to check we're in a\n// browser context before continuing.\n\n\nif (typeof self !== 'undefined' && // AMP / No-JS mode does not inject these helpers:\n'$RefreshHelpers$' in self) {\n  var currentExports = module.__proto__.exports;\n  var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null; // This cannot happen in MainTemplate because the exports mismatch between\n  // templating and execution.\n\n  self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i); // A module can be accepted automatically based on its exports, e.g. when\n  // it is a Refresh Boundary.\n\n  if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n    // Save the previous exports on update so we can compare the boundary\n    // signatures.\n    module.hot.dispose(function (data) {\n      data.prevExports = currentExports;\n    }); // Unconditionally accept an update to this module, we'll check if it's\n    // still a Refresh Boundary later.\n\n    module.hot.accept(); // This field is set when the previous version of this module was a\n    // Refresh Boundary, letting us know we need to check for invalidation or\n    // enqueue an update.\n\n    if (prevExports !== null) {\n      // A boundary can become ineligible if its exports are incompatible\n      // with the previous exports.\n      //\n      // For example, if you add/remove/change exports, we'll want to\n      // re-execute the importing modules, and force those components to\n      // re-render. Similarly, if you convert a class component to a\n      // function, we want to invalidate the boundary.\n      if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n        module.hot.invalidate();\n      } else {\n        self.$RefreshHelpers$.scheduleUpdate();\n      }\n    }\n  } else {\n    // Since we just executed the code for the module, it's possible that the\n    // new exports made it ineligible for being a boundary.\n    // We only care about the case when we were _previously_ a boundary,\n    // because we already accepted this update (accidental side effect).\n    var isNoLongerABoundary = prevExports !== null;\n\n    if (isNoLongerABoundary) {\n      module.hot.invalidate();\n    }\n  }\n}\n\nvar _c2;\n\n$RefreshReg$(_c2, \"ProductList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC50c3g/MzQ4OSJdLCJuYW1lcyI6WyJQcm9kdWN0TGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBSUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsUUFBOEI7QUFDOUMsU0FDSTtBQUFLLGFBQVMsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ssS0FBSyxDQUFMLGFBQW1CO0FBQUEsV0FBb0I7QUFBUyxhQUFPLEVBQWhCO0FBQTJCLFNBQUcsRUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFwQjtBQUY1QixHQUVTLENBREwsQ0FESjtBQURKOztNQUFNQSxXO0tBQUFBLFc7QUFRTiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvZHVjdExpc3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2R1Y3QsIHtJUHJvZHVjdH0gZnJvbSBcIi4vUHJvZHVjdFwiO1xuaW50ZXJmYWNlIElwcm9kdWN0TGlzdFByb3BzIHtcbiAgICBwcm9kdWN0czogSVByb2R1Y3RbXVxufVxuY29uc3QgUHJvZHVjdExpc3QgPSAocHJvcHM6IElwcm9kdWN0TGlzdFByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWxpc3RcIj5cbiAgICAgICAgICAgIHtwcm9wcy5wcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiA8UHJvZHVjdCBwcm9kdWN0PXtwcm9kdWN0fSBrZXk9e2luZGV4fT48L1Byb2R1Y3Q+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductList.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.tsx\");\n/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ProductList */ \"./components/ProductList.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/home/tony/Desktop/NextApp/pages/index.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar Index = function Index(props) {\n  return __jsx(\"div\", {\n    className: \"app\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }\n  }), __jsx(\"main\", {\n    className: \"main\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }\n  }, __jsx(_components_ProductList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    products: props.products,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 17\n    }\n  })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }));\n};\n\n_c2 = Index;\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n;\n\nvar _a, _b; // Legacy CSS implementations will `eval` browser code in a Node.js context\n// to extract CSS. For backwards compatibility, we need to check we're in a\n// browser context before continuing.\n\n\nif (typeof self !== 'undefined' && // AMP / No-JS mode does not inject these helpers:\n'$RefreshHelpers$' in self) {\n  var currentExports = module.__proto__.exports;\n  var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null; // This cannot happen in MainTemplate because the exports mismatch between\n  // templating and execution.\n\n  self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i); // A module can be accepted automatically based on its exports, e.g. when\n  // it is a Refresh Boundary.\n\n  if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n    // Save the previous exports on update so we can compare the boundary\n    // signatures.\n    module.hot.dispose(function (data) {\n      data.prevExports = currentExports;\n    }); // Unconditionally accept an update to this module, we'll check if it's\n    // still a Refresh Boundary later.\n\n    module.hot.accept(); // This field is set when the previous version of this module was a\n    // Refresh Boundary, letting us know we need to check for invalidation or\n    // enqueue an update.\n\n    if (prevExports !== null) {\n      // A boundary can become ineligible if its exports are incompatible\n      // with the previous exports.\n      //\n      // For example, if you add/remove/change exports, we'll want to\n      // re-execute the importing modules, and force those components to\n      // re-render. Similarly, if you convert a class component to a\n      // function, we want to invalidate the boundary.\n      if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n        module.hot.invalidate();\n      } else {\n        self.$RefreshHelpers$.scheduleUpdate();\n      }\n    }\n  } else {\n    // Since we just executed the code for the module, it's possible that the\n    // new exports made it ineligible for being a boundary.\n    // We only care about the case when we were _previously_ a boundary,\n    // because we already accepted this update (accidental side effect).\n    var isNoLongerABoundary = prevExports !== null;\n\n    if (isNoLongerABoundary) {\n      module.hot.invalidate();\n    }\n  }\n}\n\nvar _c2;\n\n$RefreshReg$(_c2, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsUUFBd0I7QUFDbEMsU0FDSTtBQUFLLGFBQVMsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBTSxhQUFTLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQWEsWUFBUSxFQUFFQyxLQUFLLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUZKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLENBREo7QUFESjs7TUFBTUQsSztLQUFBQSxLO0FBWU4iLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiXG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZHVjdExpc3RcIlxuXG5cbmNvbnN0IEluZGV4ID0gKHByb3BzOiBJSW5kZXhQcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgICAgICAgICAgPFByb2R1Y3RMaXN0IHByb2R1Y3RzPXtwcm9wcy5wcm9kdWN0c30gLz5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})