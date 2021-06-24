import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CLOSE_MESSAGE,
} from "../../types/authTypes";

const initialState = {
  loading: "none",
  requests: [],
  error: "",
  open: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: "block",
        open: false,
      };
    case LOGIN_SUCCESS:
      return {
        loading: "none",
        requests: action.payload,
        error: "",
        open: false,
      };
    case LOGIN_FAILURE:
      return {
        loading: "none",
        requests: [],
        error: action.payload,
        open: true,
      };
    case CLOSE_MESSAGE:
      return {
        loading: "none",
        user: [],
        error: "",
        open: false,
      };
    default:
      return state;
  }
};

export default reducer;
