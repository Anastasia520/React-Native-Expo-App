import { GET_SHOP, GET_SHOP_ERROR, GET_SHOP_LOADING,
  POST_CREATE_SHOP_ITEM,
  POST_CREATE_SHOP_ITEM_ERROR,
  POST_CREATE_SHOP_ITEM_LOADING,
  POST_CHECK_ITEM,GET_CHECK_ITEM

} from "../types";
import { makeRequest } from "../MakeRequest";
import { shopCheck } from "../../components/helpers/ui/ShopCard/checkData";

const getShop = (data) => {
  return makeRequest(data);
};

export const fetchShop = (data) => async (dispatch) => {
  try {
    dispatch({ type: GET_SHOP_LOADING, payload: true });
    const result = await getShop(data);

    dispatch({
      type: GET_SHOP,
      payload: result.data.data.shop,
    });
    dispatch({ type: GET_SHOP_LOADING, payload: false });
  } catch (error) {
    dispatch({
      type: GET_SHOP_ERROR,
    });
    dispatch({ type: GET_SHOP_LOADING, payload: false });
  }
};

export const fetchCreateShopItem = (data) => async (dispatch) => {
  try {
    dispatch({ type: POST_CREATE_SHOP_ITEM_LOADING, payload: true });
    const result = await getShop(data);

    dispatch({
      type: POST_CREATE_SHOP_ITEM,
      payload: result.data.data.createItem,
    });
    dispatch({ type: POST_CREATE_SHOP_ITEM_LOADING, payload: false });
  } catch (error) {
    dispatch({
      type: POST_CREATE_SHOP_ITEM_ERROR,
    });
    dispatch({ type: POST_CREATE_SHOP_ITEM_LOADING, payload: false });
  }
};

export const fetchCheckItem = (id) => async (dispatch) => {
  try {

    
    let data = shopCheck.filter((data => data.id != id))
    dispatch({
      type: POST_CHECK_ITEM,
      payload: data,
    });
   
  } catch (error) {
   
  }
};

export const fetchGetCheckItem = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_CHECK_ITEM,
     
    });
   
  } catch (error) {
   
  }
};