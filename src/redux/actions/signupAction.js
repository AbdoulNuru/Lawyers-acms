import axios from "axios";
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  CLOSE_MESSAGE,
} from "../types/signUpTypes";

export const signupNow = (data, history) => async (dispatch) => {
  try {
    dispatch(signupRequest());
    // const header = {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // };
    const res = await axios.post(`/user-registration`, data);
    const application = await res.data;
    dispatch(signupSuccess({ data: application.data }));
    history.push("/done");
  } catch (err) {
    if (err.response) {
      const errorMessage = await err.response.data.error;
      dispatch(signupFailure(errorMessage));
    } else {
      dispatch(signupFailure("Network Error"));
    }
  }
};

export const signupRequest = () => {
  return {
    type: SIGNUP_REQUEST,
  };
};

export const signupSuccess = (application) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: application,
  };
};
export const signupFailure = (error) => {
  return {
    type: SIGNUP_FAILURE,
    payload: error,
  };
};
export const closeMessage = () => {
  return {
    type: CLOSE_MESSAGE,
  };
};
