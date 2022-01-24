import { combineReducers } from 'redux';
import { fetchReducer } from './fetchReducer';
import { productReducer } from './productReducer/productReducer';

export const rootRedusers = combineReducers({
  products: fetchReducer,
  currentProduct: productReducer,
});

export type rootRedusersType = ReturnType<typeof rootRedusers>;
