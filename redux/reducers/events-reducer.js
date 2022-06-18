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

const INITIAL_STATE = {
  events: [],
  errorEvents: false,
  loadingEvents: false,

  myEvents: [],
  errorMyEvents: false,
  loadingMyEvents: false,

  goEvent: [],
  errorGoEvents: false,
  loadingGoEvents: false,

  cancelBookingEvent: [],
  errorCancelBookingEvent: false,
  loadingCancelBookingEvent: false,

  createEvent: '',
  errorCreateEvent: false,
  loadingCreateEvent: false,
};

export const eventsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload,
      };
    case GET_EVENTS_ERROR:
      return {
        ...state,
        errorEvents: true,
      };
    case GET_EVENTS_LOADING:
      return {
        ...state,
        loadingEvents: action.payload,
      };

    case GET_MY_EVENTS:
      return {
        ...state,
        myEvents: action.payload,
      };
    case GET_MY_EVENTS_ERROR:
      return {
        ...state,
        errorMyEvents: true,
      };
    case GET_MY_EVENTS_LOADING:
      return {
        ...state,
        loadingMyEvents: action.payload,
      };

    case POST_GO_EVENT:
      return {
        ...state,
        goEvent: action.payload,
      };
    case POST_GO_EVENT_ERROR:
      return {
        ...state,
        errorGoEvents: true,
      };
    case POST_GO_EVENT_LOADING:
      return {
        ...state,
        loadingGoEvents: action.payload,
      };

    case POST_CANCEL_BOOKING_EVENT:
      return {
        ...state,
        cancelBookingEvent: action.payload,
      };
    case POST_CANCEL_BOOKING_EVENT_ERROR:
      return {
        ...state,
        errorCancelBookingEvent: true,
      };
    case POST_CANCEL_BOOKING_EVENT_LOADING:
      return {
        ...state,
        loadingCancelBookingEvent: action.payload,
      };

    case POST_CREATE_EVENT:
      return {
        ...state,
        createEvent: action.payload,
      };
    case POST_CREATE_EVENT_ERROR:
      return {
        ...state,
        errorCreateEvent: true,
      };
    case POST_CREATE_EVENT_LOADING:
      return {
        ...state,
        loadingCreateEvent: action.payload,
      };

      case POST_CHANGE_EVENT:
        return{
          ...state,
          events:action.payload
        }

       case POST_DELETE_EVENT:
        return{
          ...state,
          events:action.payload
        }
    default:
      return state;
  }
};
