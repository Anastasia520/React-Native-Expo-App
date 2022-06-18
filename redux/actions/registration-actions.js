
import {
  POST_REGISTRATION,
  POST_REGISTRATION_ERROR,
  POST_REGISTRATION_LOADING,
} from "../types";
import { makeRequestAuth } from "../MakeRequest";

const postRegistration = (data) => {
  return makeRequestAuth(data);
};

export const fetchRegistration = (data) => async (dispatch) => {
  try {
    dispatch({ type: POST_REGISTRATION_LOADING, payload: true });
    const result = await postRegistration(data);

    dispatch({
      type: POST_REGISTRATION,
      payload: result.data.data.createUser,
    });
    dispatch({ type: POST_REGISTRATION_LOADING, payload: false });
  } catch (error) {
    dispatch({
      type: POST_REGISTRATION_ERROR,
    });
    dispatch({ type: POST_REGISTRATION_LOADING, payload: false });
  }
};
