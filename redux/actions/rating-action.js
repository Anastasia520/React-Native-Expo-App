import { ratingData } from "../../components/Screens/Rating/data";
import { GET_RATING } from "../types";

export const fetchRating = (data) => async (dispatch) => {
  try {
   const result =  data.concat(ratingData);
   console.log(data)
    dispatch({
      type: GET_RATING,
      payload: result
    });
  } catch (error) {
  }
};