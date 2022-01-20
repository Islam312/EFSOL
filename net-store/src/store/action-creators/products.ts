import axios from 'axios';
import { Dispatch } from 'react';
import { productItemType } from '../../types/types';
import { ProductAction, productActionType } from '../actions/productActions';


export const fetchProducts = () => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      dispatch({ type: productActionType.FETCH_PRODUCTS });
      const response = await axios.get('http://localhost:5000/products');
      setTimeout(() => {
        dispatch({
          type: productActionType.FETCH_PRODUCTS_SUCCESS,
          payload: response.data,
        });
      }, 1000);
    } catch {
      dispatch({
        type: productActionType.FETCH_PRODUCTS_ERROR,
        payload: 'Произошла ошибка при загрузке списка продуктов',
      });
    }
  };
};
