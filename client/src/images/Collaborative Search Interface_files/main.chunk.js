(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./images/bg.gif */ "./src/images/bg.gif"));

// Module
exports.push([module.i, ".remove-btn {\n  margin-right: 0.5rem;\n}\n\n.fade-enter {\n  opacity: 0.01;\n}\n\n.fade-enter-active {\n  opacity: 1;\n  transition: opacity 1000ms ease-in;\n}\n\n.fade-exit {\n  opacity: 1;\n}\n\n.fade-exit-active {\n  opacity: 0.01;\n  transition: opacity 1000ms ease-in;\n}\n\n.main.container {\n  padding-top: 60px;\n}\n\n.main.regPage {\n  padding-top: 100px;\n}\n\n.chatButton {\n float: right;\n}\n\n.addUserButton {\n  position: fixed;\n  top: 50px;\n  right: 269px;\n}\n\n.removeUserButton {\n  position: fixed;\n  top: 50px;\n  right: 230px;\n}\n\n.wrapper {\n  position: relative;\n}\n\n.bottom {\n  position: fixed;\n  bottom: 255px;\n}\n.hero-section{\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ")!important;\n  background-size: cover!important;\n  height: 55vh;\n  margin-left: auto !important;\n  margin-right: auto !important;\n  min-height: 600px;\n  max-height: 1200px;\n  -webkit-box-align: center;\n}\n\n.hero-section .intro{\n    margin-top: 20%!important;\n}\n\n.hero-section .intro header{\n  color: aliceblue!important;\n}\n\n#footer {\n  background: black!important;\n}\n\n.ui.card, .ui.cards>.card{\n  width: 100%!important;\n}\n", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_layout_AppNavbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout/AppNavbar */ "./src/components/layout/AppNavbar.js");
/* harmony import */ var _components_layout_HomePage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/HomePage */ "./src/components/layout/HomePage.js");
/* harmony import */ var _components_account_EditPersonalDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/account/EditPersonalDetails */ "./src/components/account/EditPersonalDetails.js");
/* harmony import */ var _components_account_SessionList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/account/SessionList */ "./src/components/account/SessionList.js");
/* harmony import */ var _components_auth_Register__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/auth/Register */ "./src/components/auth/Register.js");
/* harmony import */ var _components_auth_Login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/auth/Login */ "./src/components/auth/Login.js");
/* harmony import */ var _components_account_AccountBoard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/account/AccountBoard */ "./src/components/account/AccountBoard.js");
/* harmony import */ var _components_session_SessionView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/session/SessionView */ "./src/components/session/SessionView.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./store */ "./src/store.js");
/* harmony import */ var _actions_authenticationActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./actions/authenticationActions */ "./src/actions/authenticationActions.js");
/* harmony import */ var _utilities_setAuthToken__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utilities/setAuthToken */ "./src/utilities/setAuthToken.js");
/* harmony import */ var _components_routing_PrivateRoute__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/routing/PrivateRoute */ "./src/components/routing/PrivateRoute.js");
var _jsxFileName = "/Users/kamilkielar/Development/CSI/client/src/App.js";




















if (localStorage.token) {
  Object(_utilities_setAuthToken__WEBPACK_IMPORTED_MODULE_16__["default"])(localStorage.token);
}

const App = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _store__WEBPACK_IMPORTED_MODULE_14__["default"].dispatch(Object(_actions_authenticationActions__WEBPACK_IMPORTED_MODULE_15__["loadUser"])());
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_13__["Provider"], {
    store: _store__WEBPACK_IMPORTED_MODULE_14__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["BrowserRouter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_AppNavbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Route"], {
    exact: true,
    path: "/",
    component: _components_layout_HomePage__WEBPACK_IMPORTED_MODULE_5__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Route"], {
    exact: true,
    path: "#about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Route"], {
    exact: true,
    path: "#contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Route"], {
    exact: true,
    path: "/register",
    component: _components_auth_Register__WEBPACK_IMPORTED_MODULE_8__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Route"], {
    exact: true,
    path: "/login",
    component: _components_auth_Login__WEBPACK_IMPORTED_MODULE_9__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_routing_PrivateRoute__WEBPACK_IMPORTED_MODULE_17__["default"], {
    exact: true,
    path: "/account",
    component: _components_account_AccountBoard__WEBPACK_IMPORTED_MODULE_10__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_routing_PrivateRoute__WEBPACK_IMPORTED_MODULE_17__["default"], {
    exact: true,
    path: "/edit-personal-details",
    component: _components_account_EditPersonalDetails__WEBPACK_IMPORTED_MODULE_6__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_routing_PrivateRoute__WEBPACK_IMPORTED_MODULE_17__["default"], {
    exact: true,
    path: "/user-sessions",
    component: _components_account_SessionList__WEBPACK_IMPORTED_MODULE_7__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_routing_PrivateRoute__WEBPACK_IMPORTED_MODULE_17__["default"], {
    exact: true,
    path: "/sessions/:id",
    component: _components_session_SessionView__WEBPACK_IMPORTED_MODULE_11__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/actions/accountActions.js":
/*!***************************************!*\
  !*** ./src/actions/accountActions.js ***!
  \***************************************/
/*! exports provided: getCurrentUser, editPersonalDetails, deleteAccount, getSessions, createSession, deleteSession, updateDeleteSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUser", function() { return getCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editPersonalDetails", function() { return editPersonalDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAccount", function() { return deleteAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSessions", function() { return getSessions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSession", function() { return createSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSession", function() { return deleteSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDeleteSession", function() { return updateDeleteSession; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/actions/types.js");

 // get current user

const getCurrentUser = () => async dispatch => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/users/me");
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["CLEAR_SESSION"]
    });
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["GET_USER"],
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["ACCOUNT_ERROR"],
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
}; // edit personal details

const editPersonalDetails = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json"
      }
    };
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/users/edit", formData, config);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["GET_USER"],
      payload: res.data
    });
    history.push("/account");
  } catch (err) {}
}; // delete user

const deleteAccount = () => async dispatch => {
  if (window.confirm("Are you sure you want to delete your account? This action can NOT be undone!")) {
    try {
      await axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete("/api/users");
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["CLEAR_USER"]
      });
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["USER_DELETED"]
      });
    } catch (err) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["ACCOUNT_ERROR"],
        payload: {
          msg: err.response.statusText,
          status: err.response.status
        }
      });
    }
  }
}; // get sessions by user id

const getSessions = () => async dispatch => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/sessions/user");
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["GET_SESSIONS"],
      payload: res.data
    });
  } catch (err) {
    if (err.response !== undefined) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["ACCOUNT_ERROR"],
        payload: {
          msg: err.response.statusText,
          status: err.response.status
        }
      });
    } else {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["ACCOUNT_ERROR"],
        payload: {
          msg: "unknown",
          status: 400
        }
      });
    }
  }
}; // create a session

const createSession = formData => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json"
      }
    };
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/sessions", formData, config);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["SESSION_CREATED"],
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["ACCOUNT_ERROR"],
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
}; // delete a session

const deleteSession = id => async dispatch => {
  if (window.confirm("Are you sure you want to delete this session? This action can NOT be undone!")) {
    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete("/api/sessions/".concat(id));
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["SESSION_DELETED"],
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["ACCOUNT_ERROR"],
        payload: {
          msg: err.response.statusText,
          status: err.response.status
        }
      });
    }
  }
};
const updateDeleteSession = data => async dispatch => {
  try {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["SESSION_DELETED"],
      payload: data
    });
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["ACCOUNT_ERROR"],
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};

/***/ }),

/***/ "./src/actions/authenticationActions.js":
/*!**********************************************!*\
  !*** ./src/actions/authenticationActions.js ***!
  \**********************************************/
/*! exports provided: loadUser, registerUser, loginUser, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUser", function() { return loadUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/actions/types.js");
/* harmony import */ var _utilities_setAuthToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/setAuthToken */ "./src/utilities/setAuthToken.js");


 // Load User

const loadUser = () => async dispatch => {
  if (localStorage.token) {
    Object(_utilities_setAuthToken__WEBPACK_IMPORTED_MODULE_2__["default"])(localStorage.token);
  }

  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/auth");
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["USER_LOADED"],
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["AUTHORISATION_ERROR"]
    });
  }
}; // user registration

const registerUser = ({
  name,
  email,
  password
}) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({
    name,
    email,
    password
  });

  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/users", body, config);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["USER_REGISTERED"],
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["USER_NOT_REGISTERED"]
    });
  }
}; // login user

const loginUser = (email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({
    email,
    password
  });

  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/auth", body, config);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["LOGIN_SUCCESSFUL"],
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["LOGIN_UNSUCCESSFUL"]
    });
  }
}; // logout

const logout = () => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["CLEAR_SESSION"]
  });
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["LOGOUT"]
  });
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["CLEAR_USER"]
  });
};

/***/ }),

/***/ "./src/actions/queryActions.js":
/*!*************************************!*\
  !*** ./src/actions/queryActions.js ***!
  \*************************************/
/*! exports provided: addQuery, getQueriesBySessionId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addQuery", function() { return addQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueriesBySessionId", function() { return getQueriesBySessionId; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/actions/types.js");

 // add a query

const addQuery = (keyword, sessionId) => async dispatch => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/queries/".concat(sessionId), {
      keyword
    });
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["QUERY_ADDED"],
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["QUERY_ERROR"],
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
}; // get queries by session id

const getQueriesBySessionId = sessionId => async dispatch => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/queries/session_queries/".concat(sessionId));
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["GET_QUERIES_BY_SESSION_ID"],
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["QUERY_ERROR"],
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};

/***/ }),

/***/ "./src/actions/sessionActions.js":
/*!***************************************!*\
  !*** ./src/actions/sessionActions.js ***!
  \***************************************/
/*! exports provided: getSessionById, highlightSearch, highlightSearchUpdate, removeHighlightedSearch, removeHighlightedSearchUpdate, inviteUser, removeUser, removeUserUpdate, addLike, addLikeUpdate, removeLike, removeLikeUpdate, addComment, addCommentUpdate, removeComment, removeCommentUpdate, openChat, closeChat, googleSearchApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSessionById", function() { return getSessionById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlightSearch", function() { return highlightSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlightSearchUpdate", function() { return highlightSearchUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeHighlightedSearch", function() { return removeHighlightedSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeHighlightedSearchUpdate", function() { return removeHighlightedSearchUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inviteUser", function() { return inviteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeUser", function() { return removeUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeUserUpdate", function() { return removeUserUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLike", function() { return addLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLikeUpdate", function() { return addLikeUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLike", function() { return removeLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLikeUpdate", function() { return removeLikeUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCommentUpdate", function() { return addCommentUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeComment", function() { return removeComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCommentUpdate", function() { return removeCommentUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openChat", function() { return openChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeChat", function() { return closeChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleSearchApi", function() { return googleSearchApi; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/actions/types.js");


const getSessionById = sessionId => async dispatch => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/sessions/session-by-id/".concat(sessionId));
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["GET_SESSION"],
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["SESSION_ERROR"],
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
}; // add a search result to the list of highlighted searches

const highlightSearch = (title, snippet, link, sessionId) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({
    title,
    snippet,
    link,
    user_id: localStorage.getItem("user_id")
  });

  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/sessions/highlightedQueries/".concat(sessionId), body, config);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["GET_SESSION"],
      payload: res.data
    });
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["HIGHLIGHT_SEARCH"],
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["SESSION_ERROR"],
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
}; //

const highlightSearchUpdate = data => async dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["GET_SESSION"],
    payload: data
  });
}; // remvoe a highlighted link

const removeHighlightedSearch = (sessionId, searchId) => async dispatch => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete("/api/sessions/highlightedQueries/".concat(sessionId, "/").concat(searchId));
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["GET_SESSION"],
      payload: res.data
    });
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["REMOVE_SEARCH"],
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["SESSION_ERROR"],
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};
const removeHighlightedSearchUpdate = data => async dispatch => {
  try {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["GET_SESSION"],
      payload: data
    });
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["REMOVE_SEARCH"],
      payload: data
    });
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["SESSION_ERROR"],
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
}; // invite a user to the session

const inviteUser = (formData, sessionId) => async dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  const body = JSON.stringify(formData);

  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/sessions/invitedUsers/".concat(sessionId), body, config);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["USER_INVITED"],
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["SESSION_ERROR"],
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
}; // remove user from the session/leave session

const removeUser = (email, sessionId) => async dispatch => {
  try {
    const url = "http://localhost:3000/api/sessions/invitedUsers/remove/".concat(sessionId, "/").concat(email);
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(url);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["USER_REMOVED_FROM_SESSION"],
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["SESSION_ERROR"],
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};
const removeUserUpdate = data => async dispatch => {
  try {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["USER_REMOVED_FROM_SESSION"],
      payload: data
    });
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["SESSION_ERROR"],
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
}; // add like

const addLike = (sessionId, searchId) => async dispatch => {
  try {
    const url = "http://localhost:3000/api/sessions/like/".concat(sessionId, "/").concat(searchId);
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(url);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LIKES"],
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["SESSION_ERROR"],
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
}; // add like

const addLikeUpdate = data => async dispatch => {
  try {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LIKES"],
      payload: data
    });
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["SESSION_ERROR"],
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
}; // remove like

const removeLike = (sessionId, searchId) => async dispatch => {
  try {
    const url = "http://localhost:3000/api/sessions/unlike/".concat(sessionId, "/").concat(searchId);
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(url);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LIKES"],
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["SESSION_ERROR"],
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};
const removeLikeUpdate = data => async dispatch => {
  try {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LIKES"],
      payload: data
    });
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["SESSION_ERROR"],
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
}; // add comment

const addComment = (sessionId, searchId, formData) => async dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  try {
    const url = "http://localhost:3000/api/sessions/comment/".concat(sessionId, "/").concat(searchId);
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, formData, config);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["COMMENT_ADDED"],
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["SESSION_ERROR"],
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};
const addCommentUpdate = data => async dispatch => {
  try {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["COMMENT_ADDED"],
      payload: data
    });
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["SESSION_ERROR"],
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
}; // delete a comment

const removeComment = (sessionId, searchId, commentId) => async dispatch => {
  try {
    const url = "http://localhost:3000/api/sessions/comment/".concat(sessionId, "/").concat(searchId, "/").concat(commentId);
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(url);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["COMMENT_DELETED"],
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["SESSION_ERROR"],
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};
const removeCommentUpdate = data => async dispatch => {
  try {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["COMMENT_DELETED"],
      payload: data
    });
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["SESSION_ERROR"],
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};
const openChat = () => async dispatch => {
  try {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["CHAT_OPEN"]
    });
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["SESSION_ERROR"],
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};
const closeChat = () => async dispatch => {
  try {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["CHAT_CLOSED"]
    });
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["SESSION_ERROR"],
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
}; // request links from google search api

const googleSearchApi = (query, page) => async dispatch => {
  const config = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/sessions/googleApi/".concat(query, "/").concat(page), config);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["GET_RESULTS"],
      payload: res.data.items
    });
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["GET_NEXTPAGE"],
      payload: res.data.queries.nextPage[0].startIndex
    });

    if (res.data.queries.previousPage[0] !== null) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["GET_PREVIOUSPAGE"],
        payload: res.data.queries.previousPage[0].startIndex
      });
    }
  } catch (err) {// dispatch({
    //   type: SESSION_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status }
    // });
  }
};

/***/ }),

/***/ "./src/actions/socketActions.js":
/*!**************************************!*\
  !*** ./src/actions/socketActions.js ***!
  \**************************************/
/*! exports provided: setInitialSocket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInitialSocket", function() { return setInitialSocket; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/actions/types.js");

const setInitialSocket = socket => async dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SOCKET_INIT"],
    payload: socket
  });
};

/***/ }),

/***/ "./src/actions/types.js":
/*!******************************!*\
  !*** ./src/actions/types.js ***!
  \******************************/
/*! exports provided: USER_REGISTERED, USER_NOT_REGISTERED, USER_LOADED, CLEAR_USER, GET_USER, USER_DELETED, ACCOUNT_ERROR, LOGIN_SUCCESSFUL, LOGIN_UNSUCCESSFUL, LOGOUT, AUTHORISATION_ERROR, SESSION_CREATED, SESSION_DELETED, GET_SESSION, SESSION_ERROR, GET_SESSIONS, CLEAR_SESSIONS, CLEAR_SESSION, USER_INVITED, USER_REMOVED_FROM_SESSION, GET_RESULTS, GET_NEXTPAGE, GET_PREVIOUSPAGE, CHAT_OPEN, CHAT_CLOSED, QUERY_ADDED, QUERY_DELETED, QUERY_ERROR, GET_QUERIES_BY_SESSION_ID, CLEAR_QUERY, HIGHLIGHT_SEARCH, REMOVE_SEARCH, GET_COMMENTS, COMMENT_ADDED, COMMENT_DELETED, UPDATE_LIKES, SOCKET_INIT, GET_SOCKET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_REGISTERED", function() { return USER_REGISTERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_NOT_REGISTERED", function() { return USER_NOT_REGISTERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOADED", function() { return USER_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_USER", function() { return CLEAR_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER", function() { return GET_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_DELETED", function() { return USER_DELETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_ERROR", function() { return ACCOUNT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESSFUL", function() { return LOGIN_SUCCESSFUL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_UNSUCCESSFUL", function() { return LOGIN_UNSUCCESSFUL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHORISATION_ERROR", function() { return AUTHORISATION_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SESSION_CREATED", function() { return SESSION_CREATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SESSION_DELETED", function() { return SESSION_DELETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SESSION", function() { return GET_SESSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SESSION_ERROR", function() { return SESSION_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SESSIONS", function() { return GET_SESSIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_SESSIONS", function() { return CLEAR_SESSIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_SESSION", function() { return CLEAR_SESSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_INVITED", function() { return USER_INVITED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_REMOVED_FROM_SESSION", function() { return USER_REMOVED_FROM_SESSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_RESULTS", function() { return GET_RESULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_NEXTPAGE", function() { return GET_NEXTPAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PREVIOUSPAGE", function() { return GET_PREVIOUSPAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHAT_OPEN", function() { return CHAT_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHAT_CLOSED", function() { return CHAT_CLOSED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_ADDED", function() { return QUERY_ADDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_DELETED", function() { return QUERY_DELETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_ERROR", function() { return QUERY_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_QUERIES_BY_SESSION_ID", function() { return GET_QUERIES_BY_SESSION_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_QUERY", function() { return CLEAR_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIGHLIGHT_SEARCH", function() { return HIGHLIGHT_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_SEARCH", function() { return REMOVE_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_COMMENTS", function() { return GET_COMMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMENT_ADDED", function() { return COMMENT_ADDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMENT_DELETED", function() { return COMMENT_DELETED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LIKES", function() { return UPDATE_LIKES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCKET_INIT", function() { return SOCKET_INIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SOCKET", function() { return GET_SOCKET; });
// register reducer types
const USER_REGISTERED = "USER_REGISTERED";
const USER_NOT_REGISTERED = "USER_NOT_REGISTERED";
const USER_LOADED = "USER_LOADED";
const CLEAR_USER = "CLEAR_USER";
const GET_USER = "GET_USER";
const USER_DELETED = "USER_DELETED";
const ACCOUNT_ERROR = "ACCOUNT_ERROR"; // login reducer types

const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
const LOGIN_UNSUCCESSFUL = "LOGIN_UNSUCCESSFUL";
const LOGOUT = "LOGOUT";
const AUTHORISATION_ERROR = "AUTHORISATION_ERROR"; // session reducer types

const SESSION_CREATED = "SESSION_CREATED";
const SESSION_DELETED = "SESSION_DELETED";
const GET_SESSION = "GET_SESSION";
const SESSION_ERROR = "SESSION_ERROR";
const GET_SESSIONS = "GET_SESSIONS";
const CLEAR_SESSIONS = "CLEAR_SESSIONS";
const CLEAR_SESSION = "CLEAR_SESSION";
const USER_INVITED = "USER_INVITED";
const USER_REMOVED_FROM_SESSION = "USER_REMOVED_FROM_SESSION";
const GET_RESULTS = "GET_RESULTS";
const GET_NEXTPAGE = "GET_NEXTPAGE";
const GET_PREVIOUSPAGE = "GET_PREVIOUSPAGE";
const CHAT_OPEN = "CHAT_OPEN";
const CHAT_CLOSED = "CHAT_CLOSED"; // query reducer types

const QUERY_ADDED = "QUERY_ADDED";
const QUERY_DELETED = "QUERY_DELETED";
const QUERY_ERROR = "QUERY_ERROR";
const GET_QUERIES_BY_SESSION_ID = "GET_QUERIES_BY_SESSION_ID";
const CLEAR_QUERY = "CLEAR_QUERY";
const HIGHLIGHT_SEARCH = "HIGHLIGHT_SEARCH";
const REMOVE_SEARCH = "REMOVE_SEARCH";
const GET_COMMENTS = "GET_COMMENTS";
const COMMENT_ADDED = "COMMENT_ADDED";
const COMMENT_DELETED = "COMMENT_DELETED";
const UPDATE_LIKES = "UPDATE_LIKES"; //socket reducer types

const SOCKET_INIT = "SOCKET_INIT";
const GET_SOCKET = "GET_SOCKET";

/***/ }),

/***/ "./src/components/account/AccountBoard.js":
/*!************************************************!*\
  !*** ./src/components/account/AccountBoard.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_accountActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/accountActions */ "./src/actions/accountActions.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _SessionList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SessionList */ "./src/components/account/SessionList.js");
/* harmony import */ var _CreateSessionModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CreateSessionModal */ "./src/components/account/CreateSessionModal.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _actions_socketActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../actions/socketActions */ "./src/actions/socketActions.js");
/* harmony import */ var _images_contact_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../images/contact.png */ "./src/images/contact.png");
/* harmony import */ var _images_contact_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_contact_png__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "/Users/kamilkielar/Development/CSI/client/src/components/account/AccountBoard.js";











let socket;

const AccountBoard = ({
  getCurrentUser,
  getSessions,
  deleteAccount,
  updateDeleteSession,
  setInitialSocket,
  account: {
    sessions,
    loading,
    user
  },
  socketState,
  authentication
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    getCurrentUser();
    getSessions();

    if (!socketState.socket_connected) {
      socket = socket_io_client__WEBPACK_IMPORTED_MODULE_9___default.a.connect("http://localhost:5000", {
        query: "user_id=" + localStorage.getItem("user_id")
      });
      setInitialSocket(socket);
    } else {
      socket = socketState.socket;
    }

    socket.on("newUserAddedToSession", function (payload) {
      getSessions();
    });
    socket.on("sessionDeleted", function (payload) {
      updateDeleteSession(payload.deletedSession._id);
    });
  }, [getCurrentUser, getSessions, setInitialSocket, socketState.socket, socketState.socket_connected, updateDeleteSession]);

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    visible: true
  }),
        _useState2 = Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        message = _useState2[0],
        setMessage = _useState2[1];

  return sessions && user === null ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: "main container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CreateSessionModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    style: {
      marginLeft: "0.3rem",
      marginTop: "0.3rem"
    },
    to: "/edit-personal-details",
    className: "ui button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "Edit Personal Details ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
    name: "settings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    style: {
      marginLeft: "0.3rem",
      marginTop: "0.3rem"
    },
    onClick: () => deleteAccount(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, "Delete Account")) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: "main container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, message.visible && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Message"], {
    onDismiss: () => setMessage({
      visible: false
    }),
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Message"].Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, "Welcome back ", authentication.user && authentication.user.name))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    columns: 3,
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Row, {
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"].Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"].Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, "Sessions: ", sessions.length), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"].Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, "Your active sessions count")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"].Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"].Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, "Serches: 324"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"].Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, "Your search history")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"].Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Card"].Description, {
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CreateSessionModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SessionList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    userSessions: sessions,
    user: user,
    loading: loading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }));
};

AccountBoard.propTypes = {
  authentication: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  account: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  getCurrentUser: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  getSessions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  deleteAccount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};

const mapStateToProps = state => ({
  authentication: state.authenticationReducer,
  account: state.accountReducer,
  socketState: state.socketReducer
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, {
  getCurrentUser: _actions_accountActions__WEBPACK_IMPORTED_MODULE_5__["getCurrentUser"],
  getSessions: _actions_accountActions__WEBPACK_IMPORTED_MODULE_5__["getSessions"],
  deleteAccount: _actions_accountActions__WEBPACK_IMPORTED_MODULE_5__["deleteAccount"],
  updateDeleteSession: _actions_accountActions__WEBPACK_IMPORTED_MODULE_5__["updateDeleteSession"],
  setInitialSocket: _actions_socketActions__WEBPACK_IMPORTED_MODULE_10__["setInitialSocket"]
})(AccountBoard));

/***/ }),

/***/ "./src/components/account/CreateSessionModal.js":
/*!******************************************************!*\
  !*** ./src/components/account/CreateSessionModal.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_accountActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/accountActions */ "./src/actions/accountActions.js");


var _jsxFileName = "/Users/kamilkielar/Development/CSI/client/src/components/account/CreateSessionModal.js";







const CreateSession = ({
  createSession
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    name: "",
    description: ""
  }),
        _useState2 = Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        formData = _useState2[0],
        setFormData = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        _useState4 = Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
        modal = _useState4[0],
        setModal = _useState4[1];

  const name = formData.name,
        description = formData.description;

  const onClick = e => {
    setModal(!modal);
  };

  const onChange = e => setFormData(Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, formData, {
    [e.target.name]: e.target.value
  }));

  const onSubmit = e => {
    e.preventDefault();
    createSession(formData);
    setModal(false);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    color: "green",
    style: {
      marginTop: "0.3rem"
    },
    onClick: e => onClick(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "Create Session"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    isOpen: modal,
    toggle: e => onClick(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["ModalHeader"], {
    toggle: e => onClick(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "Create Session"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["ModalBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    onSubmit: e => onSubmit(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "Title"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "text",
    name: "name",
    placeholder: "Title...",
    value: name,
    onChange: e => onChange(e),
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "Description"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "text",
    name: "description",
    placeholder: "Description...",
    value: description,
    onChange: e => onChange(e),
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    style: {
      marginTop: "2rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, "Create Session")))));
};

CreateSession.propTypes = {
  createSession: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(null, {
  createSession: _actions_accountActions__WEBPACK_IMPORTED_MODULE_7__["createSession"]
})(CreateSession));

/***/ }),

/***/ "./src/components/account/EditPersonalDetails.js":
/*!*******************************************************!*\
  !*** ./src/components/account/EditPersonalDetails.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _actions_accountActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/accountActions */ "./src/actions/accountActions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");


var _jsxFileName = "/Users/kamilkielar/Development/CSI/client/src/components/account/EditPersonalDetails.js";








const EditPersonalDetails = ({
  account: {
    loading,
    user
  },
  editPersonalDetails,
  deleteAccount,
  history
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    name: "",
    email: ""
  }),
        _useState2 = Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        formData = _useState2[0],
        setFormData = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setFormData({
      name: loading || !user.name ? "" : user.name,
      email: loading || !user.email ? "" : user.email
    });
  }, [loading, user]);
  const name = formData.name,
        email = formData.email;

  const onChange = e => setFormData(Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, formData, {
    [e.target.name]: e.target.value
  }));

  const onSubmit = e => {
    e.preventDefault();
    editPersonalDetails(formData, history);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Container"], {
    className: "main container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    onSubmit: e => onSubmit(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Name"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "text",
    name: "name",
    placeholder: "Enter name",
    value: name,
    onChange: e => onChange(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "Email"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "text",
    name: "email",
    placeholder: "Enter email",
    value: email,
    onChange: e => onChange(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    type: "submit",
    value: "EditPersonalDetails",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, "Edit Personal Details"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    style: {
      marginLeft: "0.3rem",
      marginTop: "0.3rem"
    },
    onClick: () => deleteAccount(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, "Delete Account"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
    to: "/account",
    style: {
      marginLeft: "0.3rem"
    },
    className: "ui button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, "Go Back To Dashboard")));
};

EditPersonalDetails.propTypes = {
  getCurrentUser: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  deleteAccount: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  editPersonalDetails: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  account: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};

const mapStateToProps = state => ({
  account: state.accountReducer
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, {
  getCurrentUser: _actions_accountActions__WEBPACK_IMPORTED_MODULE_5__["getCurrentUser"],
  editPersonalDetails: _actions_accountActions__WEBPACK_IMPORTED_MODULE_5__["editPersonalDetails"],
  deleteAccount: _actions_accountActions__WEBPACK_IMPORTED_MODULE_5__["deleteAccount"]
})(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(EditPersonalDetails)));

/***/ }),

/***/ "./src/components/account/SessionList.js":
/*!***********************************************!*\
  !*** ./src/components/account/SessionList.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_accountActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/accountActions */ "./src/actions/accountActions.js");
/* harmony import */ var _actions_sessionActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/sessionActions */ "./src/actions/sessionActions.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-moment */ "./node_modules/react-moment/dist/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/kamilkielar/Development/CSI/client/src/components/account/SessionList.js";









const SessionList = ({
  userSessions,
  deleteSession,
  removeUser,
  user
}) => {
  const sessionList = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Group, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, userSessions.map(session => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    key: session._id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, session.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, " Created: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_7___default.a, {
    format: "DD/MM/YYYY",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, session.date)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, session.description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
    extra: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ui two buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    basic: true,
    color: "green",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    to: "/sessions/".concat(session._id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Enter")), session.author === user._id ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    basic: true,
    color: "red",
    onClick: () => deleteSession(session._id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "Delete") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    basic: true,
    color: "red",
    onClick: () => removeUser(user.email, session._id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Leave"))))));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, sessionList);
};

SessionList.propTypes = {
  deleteSession: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  removeUser: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, {
  deleteSession: _actions_accountActions__WEBPACK_IMPORTED_MODULE_3__["deleteSession"],
  removeUser: _actions_sessionActions__WEBPACK_IMPORTED_MODULE_4__["removeUser"]
})(SessionList));

/***/ }),

/***/ "./src/components/auth/Login.js":
/*!**************************************!*\
  !*** ./src/components/auth/Login.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions_authenticationActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/authenticationActions */ "./src/actions/authenticationActions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");


var _jsxFileName = "/Users/kamilkielar/Development/CSI/client/src/components/auth/Login.js";









const Login = ({
  loginUser,
  isAuthenticated
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    email: "",
    password: ""
  }),
        _useState2 = Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        loginData = _useState2[0],
        setLoginData = _useState2[1];

  const email = loginData.email,
        password = loginData.password;

  const onChange = e => setLoginData(Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, loginData, {
    [e.target.name]: e.target.value
  }));

  const onSubmit = e => {
    e.preventDefault();
    loginUser(email, password);
  }; // redirect to private area


  if (isAuthenticated) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Redirect"], {
      to: "/account",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: undefined
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    className: "main container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    textAlign: "center",
    style: {
      height: "75vh"
    },
    verticalAlign: "middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
    style: {
      maxWidth: 450
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "Sign in to your account"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    onSubmit: e => onSubmit(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    type: "text",
    name: "email",
    placeholder: "Email",
    value: email,
    onChange: e => onChange(e),
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    type: "password",
    name: "password",
    placeholder: "Password",
    value: password,
    onChange: e => onChange(e),
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    fluid: true,
    size: "large",
    type: "submit",
    value: "Login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, "Sign in"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Message"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "New to us? ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
    to: "/register",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, "Sign Up")))));
};

Login.propTypes = {
  loginUser: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.authenticationReducer.isAuthenticated
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, {
  loginUser: _actions_authenticationActions__WEBPACK_IMPORTED_MODULE_7__["loginUser"]
})(Login));

/***/ }),

/***/ "./src/components/auth/Register.js":
/*!*****************************************!*\
  !*** ./src/components/auth/Register.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_authenticationActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/authenticationActions */ "./src/actions/authenticationActions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _register_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register.jpg */ "./src/components/auth/register.jpg");
/* harmony import */ var _register_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_register_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");


var _jsxFileName = "/Users/kamilkielar/Development/CSI/client/src/components/auth/Register.js";









const Register = ({
  registerUser,
  isAuthenticated
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  }),
        _useState2 = Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        registerData = _useState2[0],
        setRegisterData = _useState2[1];

  const name = registerData.name,
        email = registerData.email,
        password = registerData.password,
        confirmPassword = registerData.confirmPassword;

  const onChange = e => setRegisterData(Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, registerData, {
    [e.target.name]: e.target.value
  }));

  const onSubmit = e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log("Passwords do not match");
    } else {
      registerUser({
        name,
        email,
        password
      });
    }
  }; // redirect to private area


  if (isAuthenticated) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Redirect"], {
      to: "/account",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: undefined
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Container"], {
    className: "main regPage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    columns: 2,
    style: {
      height: "80vh"
    },
    relaxed: "very",
    divided: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Image"], {
    src: _register_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onSubmit: e => onSubmit(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "Enter your first name and surname"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "text",
    name: "name",
    placeholder: "e.g. Patrick Smith",
    value: name,
    onChange: e => onChange(e) // required
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "Enter your email address"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "text",
    name: "email",
    placeholder: "e.g. patrick.smith@gmail.com",
    value: email,
    onChange: e => onChange(e),
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "Enter password. It must be at least 6 characters"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "password",
    name: "password",
    placeholder: "...",
    value: password,
    onChange: e => onChange(e),
    minLength: "6",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, "Confirm password"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "password",
    name: "confirmPassword",
    placeholder: "...",
    value: confirmPassword,
    onChange: e => onChange(e),
    minLength: "6",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    type: "submit",
    value: "Register",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, "Register")))));
};

Register.propTypes = {
  registerUser: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.authenticationReducer.isAuthenticated
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, {
  registerUser: _actions_authenticationActions__WEBPACK_IMPORTED_MODULE_6__["registerUser"]
})(Register));

/***/ }),

/***/ "./src/components/auth/register.jpg":
/*!******************************************!*\
  !*** ./src/components/auth/register.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/register.a01ba511.jpg";

/***/ }),

/***/ "./src/components/layout/AppNavbar.js":
/*!********************************************!*\
  !*** ./src/components/layout/AppNavbar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_authenticationActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/authenticationActions */ "./src/actions/authenticationActions.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/kamilkielar/Development/CSI/client/src/components/layout/AppNavbar.js";





 // import { scroll } from "../../actions/accountActions";

const AppNavbar = ({
  authentication: {
    isAuthenticated,
    loading
  },
  account: {
    user
  },
  logout
}) => {
  function scroll(parm) {
    let elmnt = document.getElementById(parm);
    console.log(parm);
    elmnt.scrollIntoView();
  }

  const privateLinks = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "right menu primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], {
    item: true,
    text: user && user.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Dropdown"].Menu, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Dropdown"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/account",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "home icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), "Dashboard")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Dropdown"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/edit-personal-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "globe icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), "Edit profile")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Dropdown"].Item, {
    onClick: logout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "sign-out icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), " Sign out")))));
  const publicLinks = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "right menu primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "#about",
    className: "item",
    onClick: () => scroll('about'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "globe icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), "About CSI"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "item",
    to: "#contact",
    onClick: () => scroll('contact'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "edit outline icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }), "Contact Us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "item",
    to: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "sign in alternate icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }), "Sign in"));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ui top fixed large menu main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "item",
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, "LOGO"), !loading && isAuthenticated ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, privateLinks) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, publicLinks)));
};

AppNavbar.propTypes = {
  logout: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  authentication: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};

const mapStateToProps = state => ({
  authentication: state.authenticationReducer,
  account: state.accountReducer
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  logout: _actions_authenticationActions__WEBPACK_IMPORTED_MODULE_4__["logout"]
})(AppNavbar));

/***/ }),

/***/ "./src/components/layout/HomePage.js":
/*!*******************************************!*\
  !*** ./src/components/layout/HomePage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_collab_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/collab.png */ "./src/images/collab.png");
/* harmony import */ var _images_collab_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_collab_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_contact_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/contact.png */ "./src/images/contact.png");
/* harmony import */ var _images_contact_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_contact_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/kamilkielar/Development/CSI/client/src/components/layout/HomePage.js";









const HomePage = ({
  isAuthenticated
}) => {
  // if user is logged in, redirect it to the account page.
  if (isAuthenticated) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      to: "/account",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: undefined
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    className: "hero-section bg14",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    textAlign: "center",
    className: "intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h1",
    inverted: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "Collaborative Search Interface"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"].Group, {
    size: "large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "green",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Sign In"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"].Or, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Register"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    style: {
      padding: '8em 0em'
    },
    vertical: true,
    id: "about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    stackable: true,
    verticalAlign: "middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h3",
    style: {
      fontSize: '2em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "We Help Companies and Companions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontSize: '1.33em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, "We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs... through pure data analytics."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h3",
    style: {
      fontSize: '2em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "We Make Bananas That Can Dance"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontSize: '1.33em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    floated: "right",
    width: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: _images_collab_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    textAlign: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "huge",
    color: "blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "Register Now"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    style: {
      padding: '8em 0em'
    },
    vertical: true,
    id: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    stackable: true,
    verticalAlign: "middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: _images_contact_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    as: "h3",
    style: {
      fontSize: '2em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, "Contact Us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontSize: '1.33em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, "We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs... through pure data analytics."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "First name",
    placeholder: "First name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
    fluid: true,
    label: "Last name",
    placeholder: "Last name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].TextArea, {
    label: "Message",
    placeholder: "Tell us more about you...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Button, {
    color: "blue",
    floated: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, "Submit")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    style: {
      padding: '2em 0em'
    },
    vertical: true,
    id: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    stackable: true,
    verticalAlign: "middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    width: 12,
    inverted: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      color: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, "We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs... through pure data analytics."))))));
};

HomePage.propTypes = {
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.authenticationReducer.isAuthenticated
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(HomePage));

/***/ }),

/***/ "./src/components/layout/Spinner.js":
/*!******************************************!*\
  !*** ./src/components/layout/Spinner.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dualspin_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dualspin.gif */ "./src/components/layout/dualspin.gif");
/* harmony import */ var _dualspin_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dualspin_gif__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kamilkielar/Development/CSI/client/src/components/layout/Spinner.js";

 // import { Spinner } from "reactstrap";

/* harmony default export */ __webpack_exports__["default"] = (() => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: _dualspin_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
  style: {
    width: "3rem",
    height: "3rem",
    margin: "auto",
    display: "block"
  },
  alt: "Loading...",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
})));

/***/ }),

/***/ "./src/components/layout/dualspin.gif":
/*!********************************************!*\
  !*** ./src/components/layout/dualspin.gif ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/dualspin.4d56d597.gif";

/***/ }),

/***/ "./src/components/routing/PrivateRoute.js":
/*!************************************************!*\
  !*** ./src/components/routing/PrivateRoute.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _jsxFileName = "/Users/kamilkielar/Development/CSI/client/src/components/routing/PrivateRoute.js";





const PrivateRoute = (_ref) => {
  let Component = _ref.component,
      _ref$authentication = _ref.authentication,
      isAuthenticated = _ref$authentication.isAuthenticated,
      loading = _ref$authentication.loading,
      rest = Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["component", "authentication"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], Object.assign({}, rest, {
    render: props => !isAuthenticated && !loading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      to: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: undefined
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object.assign({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: undefined
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }));
};

PrivateRoute.propTypes = {
  authentication: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};

const mapStateToProps = state => ({
  authentication: state.authenticationReducer
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(PrivateRoute));

/***/ }),

/***/ "./src/components/session/AddComment.js":
/*!**********************************************!*\
  !*** ./src/components/session/AddComment.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _actions_sessionActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/sessionActions */ "./src/actions/sessionActions.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");

var _jsxFileName = "/Users/kamilkielar/Development/CSI/client/src/components/session/AddComment.js";







const AddComment = ({
  addComment,
  session,
  searchId
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
        _useState2 = Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        content = _useState2[0],
        setContent = _useState2[1];

  const onSubmit = e => {
    e.preventDefault();
    addComment(session._id, searchId, {
      content
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    onSubmit: e => onSubmit(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    size: "sm",
    style: {
      marginTop: "0.5rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    name: "name",
    value: content,
    onChange: e => setContent(e.target.value),
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroupAddon"], {
    addonType: "append",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    size: "mini",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "Add Comment"))))));
};

AddComment.propTypes = {
  addComment: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  session: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  searchId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(null, {
  addComment: _actions_sessionActions__WEBPACK_IMPORTED_MODULE_5__["addComment"]
})(AddComment));

/***/ }),

/***/ "./src/components/session/Chat.js":
/*!****************************************!*\
  !*** ./src/components/session/Chat.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ChatMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChatMessage */ "./src/components/session/ChatMessage.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _actions_accountActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/accountActions */ "./src/actions/accountActions.js");

var _jsxFileName = "/Users/kamilkielar/Development/CSI/client/src/components/session/Chat.js";






const Chat = ({
  socket,
  session,
  getCurrentUser,
  account: {
    user
  }
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
        _useState2 = Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        chat = _useState2[0],
        setChat = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    socket.on("new_chat_message", data => {
      if (session._id === data.session_id) {
        setChat(prevChat => {
          return [...prevChat, {
            user_name: data.user_name,
            msg: data.msg
          }];
        });
      }
    });
  }, [socket]);

  const onIconClick = e => {
    socket.emit("chat", {
      msg: e.currentTarget.parentNode.childNodes[0].value,
      session: session._id,
      user_name: user.name
    });
    e.currentTarget.parentNode.childNodes[0].value = "";
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, chat.map((item, index) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ChatMessage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    user_name: item.user_name,
    key: index,
    msg: item.msg,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    style: {
      width: "350px"
    },
    action: {
      icon: "send",
      onClick: onIconClick
    },
    placeholder: "Message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  })));
};

const mapStateToProps = state => ({
  account: state.accountReducer
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  getCurrentUser: _actions_accountActions__WEBPACK_IMPORTED_MODULE_5__["getCurrentUser"]
})(Chat));

/***/ }),

/***/ "./src/components/session/ChatMessage.js":
/*!***********************************************!*\
  !*** ./src/components/session/ChatMessage.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/kamilkielar/Development/CSI/client/src/components/session/ChatMessage.js";

 // import PropTypes from "prop-types";

const ChatMessage = ({
  user_name,
  msg
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, user_name, ": "), " ", msg);
}; // ChatMessage.propTypes = {};


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])()(ChatMessage));

/***/ }),

/***/ "./src/components/session/CommentSection.js":
/*!**************************************************!*\
  !*** ./src/components/session/CommentSection.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_sessionActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/sessionActions */ "./src/actions/sessionActions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _AddComment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AddComment */ "./src/components/session/AddComment.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-moment */ "./node_modules/react-moment/dist/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");

var _jsxFileName = "/Users/kamilkielar/Development/CSI/client/src/components/session/CommentSection.js";









const CommentSection = ({
  authentication,
  removeComment,
  session,
  searchId,
  searchComments
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState2 = Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        collapse = _useState2[0],
        setCollapse = _useState2[1];

  const toggle = e => {
    setCollapse(!collapse);
  };

  const searchComms = searchComments.map(comment => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    key: comment._id,
    style: {
      marginTop: "0.5rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, comment.name, ": "), " ", comment.content, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), "Posted on: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_7___default.a, {
    format: "DD/MM/YYYY",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, comment.date)), !authentication.loading && comment.user === authentication.user._id && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    icon: "trash alternate outline",
    onClick: () => removeComment(session._id, searchId, comment._id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }))));
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    icon: "comments",
    onClick: e => toggle(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
    isOpen: collapse,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, searchComms.length === 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    style: {
      marginTop: "0.5rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "Write first comment"))), searchComms, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AddComment__WEBPACK_IMPORTED_MODULE_6__["default"], {
    session: session,
    searchId: searchId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  })));
};

CommentSection.propTypes = {
  removeComment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  session: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  searchId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  searchComments: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,
  authentication: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};

const mapStateToProps = state => ({
  authentication: state.authenticationReducer
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, {
  removeComment: _actions_sessionActions__WEBPACK_IMPORTED_MODULE_4__["removeComment"]
})(CommentSection));

/***/ }),

/***/ "./src/components/session/HighlightedQueries.js":
/*!******************************************************!*\
  !*** ./src/components/session/HighlightedQueries.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_sessionActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/sessionActions */ "./src/actions/sessionActions.js");
/* harmony import */ var _CommentSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommentSection */ "./src/components/session/CommentSection.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-moment */ "./node_modules/react-moment/dist/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/kamilkielar/Development/CSI/client/src/components/session/HighlightedQueries.js";








const HighlightedQueries = ({
  removeHighlightedSearch,
  highlightedQueries,
  addLike,
  removeLike,
  session,
  authentication
}) => {
  const highlightedSearches = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Item"].Group, {
    divided: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, highlightedQueries.map(link => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Item"], {
    key: link._id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Item"].Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Item"].Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, link.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Item"].Meta, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: link.link,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, link.link)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Item"].Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, link.snippet), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Item"].Extra, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    icon: "eye",
    href: link.link,
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    icon: "thumbs up outline",
    onClick: () => addLike(session._id, link._id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    icon: "thumbs down outline",
    onClick: () => removeLike(session._id, link._id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }), !authentication.loading && link.user === authentication.user.name && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    icon: "trash alternate outline",
    onClick: () => removeHighlightedSearch(session._id, link._id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CommentSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: link._id,
    session: session,
    searchId: link._id,
    searchComments: link.comments,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Item"].Meta, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "Comments: ", link.comments.length, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }), "Likes: ", link.likes.length, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }), "Added on: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_5___default.a, {
    format: "DD/MM/YYYY",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, link.date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }), "Added by: ", link.user)))));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
    dividing: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, "Highlighted Searches"), highlightedSearches));
};

HighlightedQueries.propTypes = {
  removeHighlightedSearch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  session: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  highlightedQueries: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  authentication: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

const mapStateToProps = state => ({
  authentication: state.authenticationReducer
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  addLike: _actions_sessionActions__WEBPACK_IMPORTED_MODULE_3__["addLike"],
  removeLike: _actions_sessionActions__WEBPACK_IMPORTED_MODULE_3__["removeLike"],
  removeHighlightedSearch: _actions_sessionActions__WEBPACK_IMPORTED_MODULE_3__["removeHighlightedSearch"]
})(HighlightedQueries));

/***/ }),

/***/ "./src/components/session/InviteUserModal.js":
/*!***************************************************!*\
  !*** ./src/components/session/InviteUserModal.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_sessionActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/sessionActions */ "./src/actions/sessionActions.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");


var _jsxFileName = "/Users/kamilkielar/Development/CSI/client/src/components/session/InviteUserModal.js";







const InviteUserModal = ({
  session: {
    session
  },
  inviteUser
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    email: ""
  }),
        _useState2 = Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        formData = _useState2[0],
        setFormData = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        _useState4 = Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
        modal = _useState4[0],
        setModal = _useState4[1];

  const onSubmit = e => {
    e.preventDefault();
    inviteUser(formData, session._id);
    setModal(false);
  };

  const onChange = e => setFormData(Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, formData, {
    [e.target.name]: e.target.value
  }));

  const onClick = e => {
    setModal(!modal);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    className: "addUserButton",
    circular: true,
    icon: "add user",
    onClick: e => onClick(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    isOpen: modal,
    toggle: e => onClick(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["ModalHeader"], {
    toggle: e => onClick(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "Invite friend to your session"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["ModalBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    onSubmit: e => onSubmit(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
    for: "invite",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "User email"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    type: "text",
    name: "email",
    placeholder: "e.g. joemon@gmail.com",
    onChange: e => onChange(e),
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    style: {
      marginTop: "2rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "Add User"))))));
};

InviteUserModal.propTypes = {
  inviteUser: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  session: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};

const mapStateToProps = state => ({
  session: state.sessionReducer
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, {
  inviteUser: _actions_sessionActions__WEBPACK_IMPORTED_MODULE_6__["inviteUser"]
})(InviteUserModal));

/***/ }),

/***/ "./src/components/session/RemoveUserModal.js":
/*!***************************************************!*\
  !*** ./src/components/session/RemoveUserModal.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_sessionActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/sessionActions */ "./src/actions/sessionActions.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");

var _jsxFileName = "/Users/kamilkielar/Development/CSI/client/src/components/session/RemoveUserModal.js";







const RemoveUserModal = ({
  session: {
    session
  },
  removeUser
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
        _useState2 = Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        formData = _useState2[0],
        setFormData = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState4 = Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        modal = _useState4[0],
        setModal = _useState4[1];

  const onSubmit = e => {
    e.preventDefault();
    removeUser(formData, session._id);
    setModal(false);
  };

  const onClick = e => {
    setModal(!modal);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    className: "removeUserButton",
    circular: true,
    icon: "remove user",
    onClick: e => onClick(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    isOpen: modal,
    toggle: e => onClick(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalHeader"], {
    toggle: e => onClick(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, "Remove user from the session"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onSubmit: e => onSubmit(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    for: "invite",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "User email"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "text",
    name: "email",
    placeholder: "e.g. joemon@gmail.com",
    onChange: e => setFormData(e.target.value),
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    style: {
      marginTop: "2rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "Remove User"))))));
};

RemoveUserModal.propTypes = {
  removeUser: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  session: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};

const mapStateToProps = state => ({
  session: state.sessionReducer
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, {
  removeUser: _actions_sessionActions__WEBPACK_IMPORTED_MODULE_5__["removeUser"]
})(RemoveUserModal));

/***/ }),

/***/ "./src/components/session/SearchBox.js":
/*!*********************************************!*\
  !*** ./src/components/session/SearchBox.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_sessionActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/sessionActions */ "./src/actions/sessionActions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_queryActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/queryActions */ "./src/actions/queryActions.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _SearchResults__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SearchResults */ "./src/components/session/SearchResults.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");


var _jsxFileName = "/Users/kamilkielar/Development/CSI/client/src/components/session/SearchBox.js";








const SearchBox = ({
  addQuery,
  session: {
    session,
    results,
    nextPage,
    previousPage
  },
  googleSearchApi
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    query: ""
  }),
        _useState2 = Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        formData = _useState2[0],
        setFormData = _useState2[1];

  const query = formData.query;
  var page = 1;

  const onChange = e => {
    setFormData(Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, formData, {
      [e.target.name]: e.target.value
    }));
  };

  const onClick = e => {
    e.preventDefault();
    addQuery(query, session._id);
    googleSearchApi(query, page);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
    fluid: true,
    icon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
      name: "search",
      inverted: true,
      circular: true,
      link: true,
      onClick: e => onClick(e),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: undefined
    }),
    placeholder: "Search...",
    type: "text",
    name: "query",
    onChange: e => onChange(e),
    value: query,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SearchResults__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }), results.length >= 9 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    onClick: () => googleSearchApi(query, previousPage),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "Previous Page"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    onClick: () => googleSearchApi(query, nextPage),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, "Next Page"))));
};

SearchBox.propTypes = {
  session: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,
  addQuery: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  googleSearchApi: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
};

const mapStateToProps = state => ({
  session: state.sessionReducer
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, {
  googleSearchApi: _actions_sessionActions__WEBPACK_IMPORTED_MODULE_3__["googleSearchApi"],
  addQuery: _actions_queryActions__WEBPACK_IMPORTED_MODULE_5__["addQuery"]
})(SearchBox));

/***/ }),

/***/ "./src/components/session/SearchResults.js":
/*!*************************************************!*\
  !*** ./src/components/session/SearchResults.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_sessionActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/sessionActions */ "./src/actions/sessionActions.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/kamilkielar/Development/CSI/client/src/components/session/SearchResults.js";






const SearchResults = ({
  highlightSearch,
  session: {
    session,
    results
  }
}) => {
  const googleResults = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Item"].Group, {
    divided: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, results.map(result => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Item"], {
    key: result.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Item"].Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Item"].Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, result.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Item"].Meta, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: result.link,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, result.link)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Item"].Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, result.snippet), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Item"].Extra, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    icon: "eye",
    href: result.link,
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    icon: "heart outline",
    onClick: () => highlightSearch(result.title, result.snippet, result.link, session._id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }))))));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, googleResults);
};

SearchResults.propTypes = {
  session: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  highlightSearch: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};

const mapStateToProps = state => ({
  session: state.sessionReducer
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  highlightSearch: _actions_sessionActions__WEBPACK_IMPORTED_MODULE_3__["highlightSearch"]
})(SearchResults));

/***/ }),

/***/ "./src/components/session/SessionView.js":
/*!***********************************************!*\
  !*** ./src/components/session/SessionView.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _layout_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/Spinner */ "./src/components/layout/Spinner.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _actions_sessionActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/sessionActions */ "./src/actions/sessionActions.js");
/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SearchBox */ "./src/components/session/SearchBox.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _HighlightedQueries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HighlightedQueries */ "./src/components/session/HighlightedQueries.js");
/* harmony import */ var _Chat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Chat */ "./src/components/session/Chat.js");
/* harmony import */ var _InviteUserModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./InviteUserModal */ "./src/components/session/InviteUserModal.js");
/* harmony import */ var _RemoveUserModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./RemoveUserModal */ "./src/components/session/RemoveUserModal.js");

var _jsxFileName = "/Users/kamilkielar/Development/CSI/client/src/components/session/SessionView.js";








 // import QueryHistory from "./QueryHistory";






const SessionView = ({
  getSessionById,
  session: {
    session,
    loading,
    chat
  },
  authentication,
  openChat,
  closeChat,
  highlightSearchUpdate,
  addLikeUpdate,
  match,
  removeHighlightedSearchUpdate,
  removeLikeUpdate,
  removeCommentUpdate,
  addCommentUpdate,
  socketState: {
    socket
  }
}) => {
  if (socket === undefined) {
    window.location.href = "/";
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (socket === null) {
      window.location.href = "/account";
    }

    socket.on("removedFromSession", async function (data) {
      window.location.href = "/account";
    });
    socket.on("highlightSearchUpdate", function (data) {
      highlightSearchUpdate(data);
    });
    socket.on("removedHighlightSearchUpdate", function (data) {
      removeHighlightedSearchUpdate(data);
    });
    socket.on("HighlightSearchLikeUpdate", function (data) {
      addLikeUpdate(data);
    });
    socket.on("HighlightSearchUnlikeUpdate", function (data) {
      removeLikeUpdate(data);
    });
    socket.on("HighlightSearchAddCommentUpdate", function (data) {
      addCommentUpdate(data);
    });
    socket.on("HighlightSearchRemoveCommentUpdate", function (data) {
      removeCommentUpdate(data);
    });
    getSessionById(match.params.id);
  }, [getSessionById, addCommentUpdate, addLikeUpdate, highlightSearchUpdate, removeCommentUpdate, removeLikeUpdate, socket, removeHighlightedSearchUpdate, match.params.id]);
  let defaultCols = {
    numOfCols: 2,
    widthOfSearchBox: 8,
    widthOfHighSearches: 8
  };
  let chatOn = {
    numOfCols: 3,
    widthOfSearchBox: 5,
    widthOfHighSearches: 9
  };

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultCols),
        _useState2 = Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        gridView = _useState2[0],
        setGridView = _useState2[1];

  const numOfCols = gridView.numOfCols,
        widthOfSearchBox = gridView.widthOfSearchBox,
        widthOfHighSearches = gridView.widthOfHighSearches;

  const toggleChat = () => {
    if (chat === true) {
      setGridView(defaultCols);
      return closeChat();
    }

    setGridView(chatOn);
    return openChat();
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, session === null || loading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layout_Spinner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, "Session name: ", session.name, authentication.isAuthenticated && authentication.loading === false && authentication.user._id === session.author && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_InviteUserModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RemoveUserModal__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    columns: numOfCols,
    style: {
      height: "85h"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Row, {
    stretched: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Column, {
    width: widthOfSearchBox,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Segment"], {
    style: {
      overflow: "auto",
      maxHeight: "85vh"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SearchBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Column, {
    width: widthOfHighSearches,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Segment"], {
    style: {
      overflow: "auto",
      height: "85vh",
      maxHeight: "85vh"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HighlightedQueries__WEBPACK_IMPORTED_MODULE_9__["default"], {
    highlightedQueries: session.highlightedQueries,
    session: session,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }))), chat && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Column, {
    width: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Segment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Chat__WEBPACK_IMPORTED_MODULE_10__["default"], {
    socket: socket,
    session: session,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Segment"], {
    float: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    circular: true,
    icon: "chat",
    float: "right",
    onClick: () => toggleChat(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  })));
};

SessionView.propTypes = {
  getSessionById: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  openChat: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  closeChat: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  session: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  authentication: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};

const mapStateToProps = state => ({
  session: state.sessionReducer,
  authentication: state.authenticationReducer,
  socketState: state.socketReducer
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  getSessionById: _actions_sessionActions__WEBPACK_IMPORTED_MODULE_6__["getSessionById"],
  openChat: _actions_sessionActions__WEBPACK_IMPORTED_MODULE_6__["openChat"],
  closeChat: _actions_sessionActions__WEBPACK_IMPORTED_MODULE_6__["closeChat"],
  highlightSearchUpdate: _actions_sessionActions__WEBPACK_IMPORTED_MODULE_6__["highlightSearchUpdate"],
  removeHighlightedSearchUpdate: _actions_sessionActions__WEBPACK_IMPORTED_MODULE_6__["removeHighlightedSearchUpdate"],
  addLikeUpdate: _actions_sessionActions__WEBPACK_IMPORTED_MODULE_6__["addLikeUpdate"],
  removeLikeUpdate: _actions_sessionActions__WEBPACK_IMPORTED_MODULE_6__["removeLikeUpdate"],
  removeUserUpdate: _actions_sessionActions__WEBPACK_IMPORTED_MODULE_6__["removeUserUpdate"],
  addCommentUpdate: _actions_sessionActions__WEBPACK_IMPORTED_MODULE_6__["addCommentUpdate"],
  removeCommentUpdate: _actions_sessionActions__WEBPACK_IMPORTED_MODULE_6__["removeCommentUpdate"]
})(SessionView)));

/***/ }),

/***/ "./src/images/bg.gif":
/*!***************************!*\
  !*** ./src/images/bg.gif ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bg.bacad6c8.gif";

/***/ }),

/***/ "./src/images/collab.png":
/*!*******************************!*\
  !*** ./src/images/collab.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/collab.4a6b14d6.png";

/***/ }),

/***/ "./src/images/contact.png":
/*!********************************!*\
  !*** ./src/images/contact.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/contact.de24b292.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "/Users/kamilkielar/Development/CSI/client/src/index.js";



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), document.getElementById("root"));

/***/ }),

/***/ "./src/reducers/accountReducer.js":
/*!****************************************!*\
  !*** ./src/reducers/accountReducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/types */ "./src/actions/types.js");


const initialState = {
  user: null,
  sessions: [],
  loading: true,
  error: {}
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  const type = action.type,
        payload = action.payload;

  switch (type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["GET_USER"]:
      return Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        user: payload,
        loading: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["SESSION_CREATED"]:
      return Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        sessions: [payload, ...state.sessions],
        loading: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["GET_SESSIONS"]:
      return Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        sessions: payload,
        loading: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["USER_REMOVED_FROM_SESSION"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["SESSION_DELETED"]:
      return Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        sessions: state.sessions.filter(sessions => sessions._id !== payload)
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["ACCOUNT_ERROR"]:
      return Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        error: payload,
        loading: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["CLEAR_USER"]:
      return Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        user: null,
        sessions: [],
        loading: false
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/authenticationReducer.js":
/*!***********************************************!*\
  !*** ./src/reducers/authenticationReducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/types */ "./src/actions/types.js");


const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  const type = action.type,
        payload = action.payload;

  switch (type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["USER_LOADED"]:
      return Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isAuthenticated: true,
        loading: false,
        user: payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["USER_REGISTERED"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["LOGIN_SUCCESSFUL"]:
      localStorage.setItem("token", payload.token);
      localStorage.setItem("user_id", payload.user_id);
      return Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, payload, {
        isAuthenticated: true,
        loading: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["USER_NOT_REGISTERED"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["AUTHORISATION_ERROR"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["LOGIN_UNSUCCESSFUL"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["LOGOUT"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["USER_DELETED"]:
      localStorage.removeItem("token");
      localStorage.removeItem("user_id");
      return Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _authenticationReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authenticationReducer */ "./src/reducers/authenticationReducer.js");
/* harmony import */ var _accountReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accountReducer */ "./src/reducers/accountReducer.js");
/* harmony import */ var _sessionReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sessionReducer */ "./src/reducers/sessionReducer.js");
/* harmony import */ var _socketReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./socketReducer */ "./src/reducers/socketReducer.js");




 // import queryReducer from "./queryReducer";

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  authenticationReducer: _authenticationReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  accountReducer: _accountReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  sessionReducer: _sessionReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  socketReducer: _socketReducer__WEBPACK_IMPORTED_MODULE_4__["default"] // queryReducer

}));

/***/ }),

/***/ "./src/reducers/sessionReducer.js":
/*!****************************************!*\
  !*** ./src/reducers/sessionReducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/types */ "./src/actions/types.js");


const initialState = {
  session: null,
  results: [],
  nextPage: null,
  previousPage: null,
  loading: true,
  error: {},
  chat: false
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  const type = action.type,
        payload = action.payload;

  switch (type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["USER_INVITED"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["COMMENT_ADDED"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["COMMENT_DELETED"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["GET_SESSION"]:
      return Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        session: payload,
        loading: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["GET_RESULTS"]:
      return Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        results: payload,
        loading: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["GET_NEXTPAGE"]:
      return Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        nextPage: payload,
        loading: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["GET_PREVIOUSPAGE"]:
      return Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        previousPage: payload,
        loading: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["UPDATE_LIKES"]:
      return Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        session: payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["USER_REMOVED_FROM_SESSION"]:
      return Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        session: Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.session, {
          invitedUsers: payload
        })
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["CLEAR_SESSION"]:
      return Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        session: null,
        nextPage: null,
        previousPage: null,
        results: [],
        loading: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["CHAT_OPEN"]:
      return Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        chat: true
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["CHAT_CLOSED"]:
      return Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        chat: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["SESSION_ERROR"]:
      return Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        error: payload,
        loading: false
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/socketReducer.js":
/*!***************************************!*\
  !*** ./src/reducers/socketReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/types */ "./src/actions/types.js");


const initialState = {
  socket_connected: false,
  socket: null
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  const type = action.type,
        payload = action.payload;

  switch (type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["SOCKET_INIT"]:
      return Object(_Users_kamilkielar_Development_CSI_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        socket: payload,
        socket_connected: true
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");




const initialState = {};
const middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"]];
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware))); // store.subscribe(() => console.log("store", store.getState()));

/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/utilities/setAuthToken.js":
/*!***************************************!*\
  !*** ./src/utilities/setAuthToken.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 // A function that checks if there is a token in the local storage
// and if there is one in it the function adds it to a global header.

const setAuthToken = token => {
  if (token) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["x-auth-token"];
  }
};

/* harmony default export */ __webpack_exports__["default"] = (setAuthToken);

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/kamilkielar/Development/CSI/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/kamilkielar/Development/CSI/client/src/index.js */"./src/index.js");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map