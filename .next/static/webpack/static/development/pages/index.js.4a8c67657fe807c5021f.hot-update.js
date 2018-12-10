webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Instawrap.tsx":
/*!***********************!*\
  !*** ./Instawrap.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Instagram; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ericcrowder/Documents/repos/insta-wrap/Instawrap.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Instagram =
/*#__PURE__*/
function (_Component) {
  _inherits(Instagram, _Component);

  function Instagram() {
    var _this;

    _classCallCheck(this, Instagram);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Instagram).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleWindowSizeChange", function () {
      var windowGlobal = typeof window !== 'undefined' && window.innerWidth;

      _this.setState({
        width: windowGlobal
      });
    });

    state = {
      width: _this.windowGlobal,
      photos: []
    };
    return _this;
  }

  _createClass(Instagram, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // need instagram token
      var res = fetch("https://api.instagram.com/v1/users/self/media/recent/?access_token=1084132.d703c80.678e50a84eae49918707739832ac003c").then(function (res) {
        return res.json();
      }).then(function (photos) {
        return _this2.setState({
          photos: photos.data
        });
      });
      window.addEventListener('resize', this.handleWindowSizeChange);
    }
  }, {
    key: "render",
    value: function render() {
      var width = this.state.width;
      var isMobile = width <= 700;
      var photos = this.state.photos;

      if (isMobile) {
        return photos.slice(0, 6).map(function (photo) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            key: photo.caption.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: photo.link,
            target: "_blank",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            className: "insta-image",
            src: photo.images.standard_resolution.url,
            alt: "insta-image",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          })));
        });
      } else {
        return photos.slice(0, 8).map(function (photo) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            key: photo.caption.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: photo.link,
            target: "_blank",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            className: "insta-image",
            src: photo.images.standard_resolution.url,
            alt: "insta-image",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          })));
        });
      }
    }
  }]);

  return Instagram;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.4a8c67657fe807c5021f.hot-update.js.map