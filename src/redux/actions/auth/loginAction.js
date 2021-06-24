import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CLOSE_MESSAGE,
} from "../../types/authTypes";

export const login = (data, history) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const res = await axios.post(`/login`, data);
    const application = await res.data;
    dispatch(loginSuccess({ data: application.data }));
    history.push("/dashboard");
  } catch (err) {
    if (err.response) {
      const errorMessage = await err.response.data.error;
      dispatch(loginFailure(errorMessage));
    } else {
      dispatch(loginFailure("Network Error"));
    }
  }
};

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (application) => {
  return {
    type: LOGIN_SUCCESS,
    payload: application,
  };
};
export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};
export const closeMessage = () => {
  return {
    type: CLOSE_MESSAGE,
  };
};
