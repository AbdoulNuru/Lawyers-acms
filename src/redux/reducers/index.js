import { combineReducers } from "redux";
import signUpReducer from "./signupReducer";

const allReducers = combineReducers({
    signup: signUpReducer
});

export default allReducers;
