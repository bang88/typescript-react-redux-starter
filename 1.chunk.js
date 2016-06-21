webpackJsonp([1],{

/***/ 283:
/*!***********************************************************!*\
  !*** ./src/routes/Counter/containers/CounterContainer.ts ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var react_redux_1 = __webpack_require__(/*! react-redux */ 168);
	var counter_1 = __webpack_require__(/*! ../modules/counter */ 284);
	/*  This is a container component. Notice it does not contain any JSX,
	    nor does it import React. This component is **only** responsible for
	    wiring in the actions and state necessary to render a presentational
	    component - in this case, the counter:   */
	var Counter_1 = __webpack_require__(/*! ../components/Counter */ 285);
	/*  Object of action creators (can also be function that returns object).
	    Keys will be passed as props to presentational components. Here we are
	    implementing our wrapper around increment; the component doesn't care   */
	var mapActionCreators = function mapActionCreators(dispatch) {
	    return {
	        increment: function increment() {
	            return dispatch(counter_1.increment(1));
	        },
	        doubleAsync: function doubleAsync() {
	            return dispatch(counter_1.doubleAsync());
	        }
	    };
	};
	var mapStateToProps = function mapStateToProps(state) {
	    return {
	        counter: state.counter
	    };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = react_redux_1.connect(mapStateToProps, mapActionCreators)(Counter_1.default);

/***/ },

/***/ 284:
/*!***********************************************!*\
  !*** ./src/routes/Counter/modules/counter.ts ***!
  \***********************************************/
/***/ function(module, exports) {

	"use strict";
	// ------------------------------------
	// Constants
	// ------------------------------------
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	exports.COUNTER_INCREMENT = 'COUNTER_INCREMENT';
	// ------------------------------------
	// Actions
	// ------------------------------------
	function increment() {
	    var value = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	
	    return {
	        type: exports.COUNTER_INCREMENT,
	        payload: value
	    };
	}
	exports.increment = increment;
	/*  This is a thunk, meaning it is a function that immediately
	    returns a function for lazy evaluation. It is incredibly useful for
	    creating async actions, especially when combined with redux-thunk!
	
	    NOTE: This is solely for demonstration purposes. In a real application,
	    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
	    reducer take care of this logic.  */
	exports.doubleAsync = function () {
	    return function (dispatch, getState) {
	        return new Promise(function (resolve) {
	            setTimeout(function () {
	                dispatch(increment(getState().counter));
	                resolve();
	            }, 200);
	        });
	    };
	};
	exports.actions = {
	    increment: increment,
	    doubleAsync: exports.doubleAsync
	};
	// ------------------------------------
	// Action Handlers
	// ------------------------------------
	var ACTION_HANDLERS = _defineProperty({}, exports.COUNTER_INCREMENT, function (state, action) {
	    return state + action.payload;
	});
	// ------------------------------------
	// Reducer
	// ------------------------------------
	var initialState = 0;
	function counterReducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];
	
	    var handler = ACTION_HANDLERS[action.type];
	    return handler ? handler(state, action) : state;
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = counterReducer;

/***/ },

/***/ 285:
/*!***************************************************!*\
  !*** ./src/routes/Counter/components/Counter.tsx ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(/*! react */ 2);
	var antd_1 = __webpack_require__(/*! antd */ 278);
	
	var Counter = function (_React$Component) {
	    _inherits(Counter, _React$Component);
	
	    function Counter() {
	        _classCallCheck(this, Counter);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Counter).apply(this, arguments));
	    }
	
	    _createClass(Counter, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            return React.createElement("div", null, React.createElement(antd_1.Tag, null, " Counter ", this.props.counter), React.createElement(antd_1.Button, { type: "primary", onClick: function onClick() {
	                    _this2.props.increment();
	                } }, "increment"), React.createElement(antd_1.Button, { type: "ghost", onClick: this.props.doubleAsync }, "doubleAsync"));
	        }
	    }]);
	
	    return Counter;
	}(React.Component);
	
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Counter;

/***/ }

});
//# sourceMappingURL=1.29c12854301db19b7463.js.map