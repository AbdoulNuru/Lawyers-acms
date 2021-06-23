import { combineReducers } from "redux";
import signUpReducer from "./auth/signupReducer";
import verifyReducer from "./auth/verifyAccount";

const allReducers = combineReducers({
  signup: signUpReducer,
  verify: verifyReducer,
});

export default allReducers;
