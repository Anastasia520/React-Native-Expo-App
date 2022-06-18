import {
  GET_EVENTS,
  GET_EVENTS_ERROR,
  GET_EVENTS_LOADING,
  GET_MY_EVENTS,
  GET_MY_EVENTS_ERROR,
  GET_MY_EVENTS_LOADING,
  POST_GO_EVENT,
  POST_GO_EVENT_ERROR,
  POST_GO_EVENT_LOADING,
  POST_CANCEL_BOOKING_EVENT,
  POST_CANCEL_BOOKING_EVENT_ERROR,
  POST_CANCEL_BOOKING_EVENT_LOADING,
  POST_CREATE_EVENT,
  POST_CREATE_EVENT_ERROR,
  POST_CREATE_EVENT_LOADING,

  POST_CHANGE_EVENT,
  POST_DELETE_EVENT,
} from "../types";
import { makeRequest } from "../MakeRequest";

const getEvents = (data) => {
  return makeRequest(data);
};

export const fetchEvents = (data) => async (dispatch) => {
  try {
    dispatch({ type: GET_EVENTS_LOADING, payload: true });
    const result = await getEvents(data);

    dispatch({
      type: GET_EVENTS,
      payload: result.data.data.events,
    });
    dispatch({ type: GET_EVENTS_LOADING, payload: false });
  } catch (error) {
    dispatch({
      type: GET_EVENTS_ERROR,
    });
    dispatch({ type: GET_EVENTS_LOADING, payload: false });
  }
};

export const fetchMyEvents = (data) => async (dispatch) => {
  try {
    dispatch({ type: GET_MY_EVENTS_LOADING, payload: true });
    const result = await getEvents(data);

    dispatch({
      type: GET_MY_EVENTS,
      payload: result.data.data.bookings,
    });
    dispatch({ type: GET_MY_EVENTS_LOADING, payload: false });
  } catch (error) {
    dispatch({
      type: GET_MY_EVENTS_ERROR,
    });
    dispatch({ type: GET_MY_EVENTS_LOADING, payload: false });
  }
};

export const fetchGoEvent = (data) => async (dispatch) => {
  try {
    dispatch({ type: POST_GO_EVENT_LOADING, payload: true });
    const result = await getEvents(data);

    dispatch({
      type: POST_GO_EVENT,
      payload: result.data.data.bookEvent,
    });
    dispatch({ type: POST_GO_EVENT_LOADING, payload: false });
  } catch (error) {
    dispatch({
      type: POST_GO_EVENT_ERROR,
    });
    dispatch({ type: POST_GO_EVENT_LOADING, payload: false });
  }
};

export const fetchCancelBookingEvent = (data) => async (dispatch) => {
  try {
    dispatch({ type: POST_CANCEL_BOOKING_EVENT_LOADING, payload: true });
    const result = await getEvents(data);

    dispatch({
      type: POST_CANCEL_BOOKING_EVENT,
      payload: result.data.data.cancelBooking,
    });
    dispatch({ type: POST_CANCEL_BOOKING_EVENT_LOADING, payload: false });
  } catch (error) {
    dispatch({
      type: POST_CANCEL_BOOKING_EVENT_ERROR,
    });
    dispatch({ type: POST_CANCEL_BOOKING_EVENT_LOADING, payload: false });
  }
};

export const fetchCreateEvent = (data) => async (dispatch) => {
  try {
    dispatch({ type: POST_CREATE_EVENT_LOADING, payload: true });
    const result = await getEvents(data);
    dispatch({
      type: POST_CREATE_EVENT,
      payload: result.data.data.createEvent,
    });
    dispatch({ type: POST_CREATE_EVENT_LOADING, payload: false });
  } catch (error) {
    dispatch({
      type: POST_CREATE_EVENT_ERROR,
    });
    dispatch({ type: POST_CREATE_EVENT_LOADING, payload: false });
  }
};


export const fetchChangeEvent = (data) => async (dispatch) => {
  try {
   
    dispatch({
      type: POST_CHANGE_EVENT,
      payload: data,
    });
    
  } catch (error) {
    
  }
};

export const fetchDeleteEvent = (data) => async (dispatch) => {
  try {
    dispatch({
      type: POST_DELETE_EVENT,
      payload: data,
    });
    
  } catch (error) {
    
  }
};