import {
  POST_REGISTRATION,
  POST_REGISTRATION_ERROR,
  POST_REGISTRATION_LOADING,
} from "../types";

const INITIAL_STATE = {
  user: "",
  errorRegistration: false,
  loadingRegistratin: false,
};

export const registrationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_REGISTRATION:
      return {
        ...state,
        user: action.payload,
      };
    case POST_REGISTRATION_ERROR:
      return {
        ...state,
        errorRegistration: true,
      };
    case POST_REGISTRATION_LOADING:
      return {
        ...state,
        loadingRegistratin: action.payload,
      };
    default:
      return state;
  }
};
