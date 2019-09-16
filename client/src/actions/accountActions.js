import axios from "axios";
import setAuthToken from "../utilities/setAuthToken";
import {
  GET_USER,
  ACCOUNT_ERROR,
  USER_DELETED,
  SESSION_CREATED,
  GET_SESSIONS,
  SESSION_DELETED,
  QUERY_ERROR,
  GET_QUERIES_BY_USER_ID,
  USER_REGISTERED,
  USER_NOT_REGISTERED,
  USER_LOADED,
  AUTHORISATION_ERROR,
  LOGIN_SUCCESSFUL,
  LOGIN_UNSUCCESSFUL,
  LOGOUT,
  CLEAR_USER,
  CLEAR_SESSION
} from "./types";

// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("/api/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
    dispatch(getCurrentUser());
  } catch (err) {
    dispatch({
      type: AUTHORISATION_ERROR
    });
  }
};

// get current user
export const getCurrentUser = () => async dispatch => {
  try {
    const res = await axios.get("/api/users/me");
    dispatch({
      type: GET_USER,
      payload: res.data
    });
    dispatch(getQueriesByUserId());
    dispatch(getSessions());
  } catch (err) {
    dispatch({
      type: ACCOUNT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// login user
export const loginUser = (email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/api/auth", body, config);
    dispatch({
      type: LOGIN_SUCCESSFUL,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: LOGIN_UNSUCCESSFUL
    });
  }
};

// user registration
export const registerUser = ({
  firstName,
  surname,
  email,
  password
}) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ firstName, surname, email, password });

  try {
    const res = await axios.post("/api/users", body, config);
    dispatch({
      type: USER_REGISTERED,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: USER_NOT_REGISTERED
    });
  }
};

// edit personal details
export const editPersonalDetails = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json"
      }
    };
    const res = await axios.put("/api/users/edit", formData, config);
    dispatch({
      type: GET_USER,
      payload: res.data
    });
    history.push("/account");
  } catch (err) {}
};

// delete user
export const deleteAccount = () => async dispatch => {
  if (
    window.confirm(
      "Are you sure you want to delete your account? This action can NOT be undone!"
    )
  ) {
    try {
      await axios.delete("/api/users");

      dispatch({ type: CLEAR_USER });
      dispatch({ type: USER_DELETED });
    } catch (err) {
      dispatch({
        type: ACCOUNT_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};

// get sessions by user id
export const getSessions = () => async dispatch => {
  try {
    const res = await axios.get("/api/sessions/user");
    dispatch({
      type: GET_SESSIONS,
      payload: res.data
    });
  } catch (err) {
    if (err.response !== undefined) {
      dispatch({
        type: ACCOUNT_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    } else {
      dispatch({
        type: ACCOUNT_ERROR,
        payload: { msg: "unknown", status: 400 }
      });
    }
  }
};

// create a session
export const createSession = formData => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json"
      }
    };

    const res = await axios.post("/api/sessions", formData, config);

    dispatch({
      type: SESSION_CREATED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ACCOUNT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// delete a session
export const deleteSession = id => async dispatch => {
  if (
    window.confirm(
      "Are you sure you want to delete this session? This action can NOT be undone!"
    )
  ) {
    try {
      const res = await axios.delete(`/api/sessions/${id}`);
      dispatch({
        type: SESSION_DELETED,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: ACCOUNT_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};

export const updateDeleteSession = data => async dispatch => {
  try {
    dispatch({
      type: SESSION_DELETED,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: ACCOUNT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// get queries by user id
export const getQueriesByUserId = () => async dispatch => {
  try {
    const res = await axios.get("api/users/user_queries");
    dispatch({
      type: GET_QUERIES_BY_USER_ID,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: QUERY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// logout
export const logout = () => dispatch => {
  // dispatch({ type: SOCKET_CLEARED });
  dispatch({ type: CLEAR_SESSION });
  dispatch({ type: CLEAR_USER });
  dispatch({ type: LOGOUT });
};
