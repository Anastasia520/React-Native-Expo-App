import { POST_LOGIN, POST_LOGIN_ERROR, POST_LOGIN_LOADING } from "../types";

const INITIAL_STATE = {
  token: "",
  user: [],
  errorLogin: false,
  loadingLogin: false,
};

export const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_LOGIN:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload,
      };
    case POST_LOGIN_ERROR:
      return {
        ...state,
        errorLogin: true,
      };
    case POST_LOGIN_LOADING:
      return {
        ...state,
        loadingLogin: action.payload,
      };
    default:
      return state;
  }
};
