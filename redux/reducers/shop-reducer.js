import { shopCheck } from "../../components/helpers/ui/ShopCard/checkData";
import {
  GET_SHOP,
  GET_SHOP_ERROR,
  GET_SHOP_LOADING,
  POST_CREATE_SHOP_ITEM,
  POST_CREATE_SHOP_ITEM_ERROR,
  POST_CREATE_SHOP_ITEM_LOADING,
  GET_CHECK_ITEM ,
  POST_CHECK_ITEM 
} from "../types";

const INITIAL_STATE = {
  shop: [],
  errorShop: false,
  loadingShop: false,

  createShop: "",
  errorCreateShop: false,
  loadingCreateShop: false,

  checkItems:shopCheck
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_SHOP:
      return {
        ...state,
        shop: action.payload,
      };
    case GET_SHOP_ERROR:
      return {
        ...state,
        errorShop: true,
      };
    case GET_SHOP_LOADING:
      return {
        ...state,
        loadingShop: action.payload,
      };

    case POST_CREATE_SHOP_ITEM:
      return {
        ...state,
        createShop: action.payload,
      };
    case POST_CREATE_SHOP_ITEM_ERROR:
      return {
        ...state,
        errorCreateShop: true,
      };
    case POST_CREATE_SHOP_ITEM_LOADING:
      return {
        ...state,
        loadingCreateShop: action.payload,
      };

      case POST_CHECK_ITEM :
        return {
          ...state,
          checkItems: action.payload,
        };

        case GET_CHECK_ITEM :
          return {
            ...state,
          };
    default:
      return state;
  }
};
