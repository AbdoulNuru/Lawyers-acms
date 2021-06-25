import axios from "axios";
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
  VERIFY_FAILURE,
  RESEND_REQUEST,
  RESEND_SUCCESS,
  RESEND_FAILURE,
  CLOSE_MESSAGE,
} from "../../types/authTypes";

export const signupNow = (data, history) => async (dispatch) => {
  try {
    dispatch(signupRequest());
    const res = await axios.post(`/user-registration`, data);
    const application = await res.data;
    dispatch(signupSuccess({ data: application.data }));
    history.push("/otp");
  } catch (err) {
    if (err.response) {
      const errorMessage = await err.response.data.error;
      dispatch(signupFailure(errorMessage));
    } else {
      dispatch(signupFailure("Network Error"));
    }
  }
};

export const verifyAccount = (data, history) => async (dispatch) => {
  try {
    dispatch(verifyRequest());
    const res = await axios.post(`/verify-account`, data);
    const application = await res.data;
    const from = localStorage.getItem("from-login");
    dispatch(verifySuccess({ data: application.data }));
    localStorage.removeItem("verify-email");

    if (from) {
      history.push("/login");
      localStorage.removeItem("from-login");
    } else {
      history.push("/done");
    }
  } catch (err) {
    if (err.response) {
      const errorMessage = await err.response.data.error;
      dispatch(verifyFailure(errorMessage));
    } else {
      dispatch(verifyFailure("Network Error"));
    }
  }
};

export const resendOtp = (data, history) => async (dispatch) => {
  try {
    dispatch(resendRequest());
    const res = await axios.post(`/resend-otp`, data);
    const application = await res.data;
    dispatch(resendSuccess({ data: application.data }));
    history.push("/otp");
  } catch (err) {
    if (err.response) {
      const errorMessage = await err.response.data.error;
      dispatch(resendFailure(errorMessage));
    } else {
      dispatch(resendFailure("Network Error"));
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

export const verifyRequest = () => {
  return {
    type: VERIFY_REQUEST,
  };
};

export const verifySuccess = (application) => {
  return {
    type: VERIFY_SUCCESS,
    payload: application,
  };
};
export const verifyFailure = (error) => {
  return {
    type: VERIFY_FAILURE,
    payload: error,
  };
};

export const resendRequest = () => {
  return {
    type: RESEND_REQUEST,
  };
};

export const resendSuccess = (application) => {
  return {
    type: RESEND_SUCCESS,
    payload: application,
  };
};
export const resendFailure = (error) => {
  return {
    type: RESEND_FAILURE,
    payload: error,
  };
};
export const closeMessage = () => {
  return {
    type: CLOSE_MESSAGE,
  };
};
