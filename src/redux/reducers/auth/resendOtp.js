import {
  RESEND_REQUEST,
  RESEND_SUCCESS,
  RESEND_FAILURE,
  CLOSE_MESSAGE,
} from "../../types/authTypes";

const initialState = {
  loading: "none",
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RESEND_REQUEST:
      return {
        ...state,
        loading: "block",
      };
    case RESEND_SUCCESS:
      return {
        loading: "none",
        error: "",
      };
    case RESEND_FAILURE:
      return {
        loading: "none",

        error: action.payload,
      };
    case CLOSE_MESSAGE:
      return {
        loading: "none",
        user: [],
        error: "",
      };
    default:
      return state;
  }
};

export default reducer;
