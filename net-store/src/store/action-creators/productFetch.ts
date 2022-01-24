import axios from 'axios';
import { Dispatch } from 'react';
import { FetchAction, FetchActionType } from '../actions/fetchActions';


export const fetchProducts = () => {
  return async (dispatch: Dispatch<FetchAction>) => {
    try {
      dispatch({ type: FetchActionType.FETCH_PRODUCTS });
      const response = await axios.get('http://localhost:5000/products');
      setTimeout(() => {
        dispatch({
          type: FetchActionType.FETCH_PRODUCTS_SUCCESS,
          payload: response.data,
        });
      }, 1000);
    } catch {
      dispatch({
        type: FetchActionType.FETCH_PRODUCTS_ERROR,
        payload: 'Произошла ошибка при загрузке списка продуктов',
      });
    }
  };
};
