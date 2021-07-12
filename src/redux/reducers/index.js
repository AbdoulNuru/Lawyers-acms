import { combineReducers } from "redux";
import signUpReducer from "./auth/signupReducer";
import verifyReducer from "./auth/verifyAccount";
import resendReducer from "./auth/resendOtp";
import loginReducer from "./auth/loginReducer";

const allReducers = combineReducers({
  signup: signUpReducer,
  verify: verifyReducer,
  resend: resendReducer,
  login: loginReducer,
});

export default allReducers;
