import { POST_LOGIN, POST_LOGIN_ERROR, POST_LOGIN_LOADING } from "../types";
import { makeRequestAuth } from "../MakeRequest";

const postLogin = (data) => {
  return makeRequestAuth(data);
};

export const fetchLogin = (data) => async (dispatch) => {
  try {
    dispatch({ type: POST_LOGIN_LOADING, payload: true });
    const result = await postLogin(data);
   
    localStorage.setItem("token", result.data.data.login.token);
    dispatch({
      type: POST_LOGIN,
      payload: result.data.data.login,
    });
    dispatch({ type: POST_LOGIN_LOADING, payload: false });
  } catch (error) {
    dispatch({
      type: POST_LOGIN_ERROR,
    });
    dispatch({ type: POST_LOGIN_LOADING, payload: false });
  }
};

export const fetchChangeUserInfo = (data) => async (dispatch) => {
  try {
    dispatch({ type: POST_LOGIN_LOADING, payload: true });
   
    dispatch({
      type: POST_LOGIN,
      payload: data,
    });
    dispatch({ type: POST_LOGIN_LOADING, payload: false });
  } catch (error) {
    dispatch({
      type: POST_LOGIN_ERROR,
    });
    dispatch({ type: POST_LOGIN_LOADING, payload: false });
  }
};