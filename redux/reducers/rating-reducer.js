import { GET_RATING} from "../types";

const INITIAL_STATE = {
rating:[]
};

export const ratingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_RATING:
      return {
        ...state,
        rating: action.payload,
      };
    default:
      return state;
  }
};
