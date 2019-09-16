import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import sessionReducer from "./sessionReducer";
import socketReducer from "./socketReducer";

export default combineReducers({
  accountReducer,
  sessionReducer,
  socketReducer
});
