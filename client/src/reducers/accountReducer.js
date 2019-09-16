import {
  USER_REGISTERED,
  USER_NOT_REGISTERED,
  USER_LOADED,
  AUTHORISATION_ERROR,
  LOGIN_SUCCESSFUL,
  LOGIN_UNSUCCESSFUL,
  SESSION_CREATED,
  GET_SESSIONS,
  LOGOUT,
  USER_DELETED,
  ACCOUNT_ERROR,
  CLEAR_USER,
  SESSION_DELETED,
  USER_REMOVED_FROM_SESSION,
  GET_QUERIES_BY_USER_ID,
  GET_USER,
  QUERY_ADDED
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  loading: true,
  userDetails: null,
  sessions: [],
  queries: [],
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: true
      };
    case GET_USER:
      return {
        ...state,
        userDetails: payload,
        loading: false
      };
    case USER_REGISTERED:
    case LOGIN_SUCCESSFUL:
      localStorage.setItem("token", payload.token);
      localStorage.setItem("user_id", payload.user_id);
      return {
        ...state,
        ...payload,
        isAuthenticated: true
      };
    case GET_SESSIONS:
      return {
        ...state,
        sessions: payload,
        loading: false
      };
    case GET_QUERIES_BY_USER_ID:
      return {
        ...state,
        queries: payload,
        loading: false
      };
    case SESSION_CREATED:
      return {
        ...state,
        sessions: [payload, ...state.sessions],
        loading: false
      };
    case USER_REMOVED_FROM_SESSION:
    case SESSION_DELETED:
      return {
        ...state,
        sessions: state.sessions.filter(sessions => sessions._id !== payload)
      };
    case QUERY_ADDED:
      return {
        ...state,
        queries: [payload, ...state.queries],
        loading: false
      };
    case USER_NOT_REGISTERED:
    case AUTHORISATION_ERROR:
    case LOGIN_UNSUCCESSFUL:
    case LOGOUT:
    case USER_DELETED:
      localStorage.removeItem("token");
      localStorage.removeItem("user_id");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        userDetails: null,
        sessions: [],
        queries: []
      };
    case CLEAR_USER:
      return {
        ...state,
        userDetails: null,
        sessions: [],
        queries: [],
        loading: false
      };
    case ACCOUNT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
