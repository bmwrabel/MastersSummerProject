webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.0aa104fb338fc24ca5da.hot-update.js.map