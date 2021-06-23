import {
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
  VERIFY_FAILURE,
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
    case VERIFY_REQUEST:
      return {
        ...state,
        loading: "block",
        open: false,
      };
    case VERIFY_SUCCESS:
      return {
        loading: "none",
        requests: action.payload,
        error: "",
        open: false,
      };
    case VERIFY_FAILURE:
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
