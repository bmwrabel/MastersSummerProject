import {
  GET_SESSION,
  SESSION_ERROR,
  CLEAR_SESSION,
  USER_INVITED,
  USER_REMOVED_FROM_SESSION,
  UPDATE_LIKES,
  COMMENT_ADDED,
  COMMENT_DELETED,
  GET_RESULTS,
  CHAT_OPEN,
  CHAT_CLOSED,
  GET_NEXTPAGE,
  GET_PREVIOUSPAGE
} from "../actions/types";

const initialState = {
  session: null,
  results: [],
  nextPage: null,
  previousPage: null,
  loading: true,
  error: {},
  chatWindow: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_INVITED:
    case COMMENT_ADDED:
    case COMMENT_DELETED:
    case GET_SESSION:
      return {
        ...state,
        session: payload,
        loading: false
      };
    case GET_RESULTS:
      return {
        ...state,
        results: payload,
        loading: false
      };
    case GET_NEXTPAGE:
      return {
        ...state,
        nextPage: payload,
        loading: false
      };
    case GET_PREVIOUSPAGE:
      return {
        ...state,
        previousPage: payload,
        loading: false
      };
    case UPDATE_LIKES:
      return {
        ...state,
        session: payload
      };
    case USER_REMOVED_FROM_SESSION:
      return {
        ...state,
        session: { ...state.session, invitedUsers: payload }
      };
    case CHAT_OPEN:
      return {
        ...state,
        chatWindow: true
      };
    case CHAT_CLOSED:
      return {
        ...state,
        chatWindow: false
      };
    case CLEAR_SESSION:
      return {
        ...state,
        session: null,
        nextPage: null,
        previousPage: null,
        results: [],
        loading: true,
        chatWindow: false
      };
    case SESSION_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
