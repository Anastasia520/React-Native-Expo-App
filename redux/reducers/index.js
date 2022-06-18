import { combineReducers } from "redux";

import { loginReducer } from "./login-reducer";
import { registrationReducer } from "./registration-reducer";
import { eventsReducer } from "./events-reducer";
import { shopReducer } from "./shop-reducer";
import { ratingReducer } from "./rating-reducer";

const reducers = combineReducers({
  login: loginReducer,
  registration: registrationReducer,
  events: eventsReducer,
  shop: shopReducer,
  rating:ratingReducer
});

export default reducers;
