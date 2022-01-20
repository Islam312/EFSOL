import { combineReducers } from 'redux';
import { productReducer } from './productReducer';

export const rootRedusers = combineReducers({
  products: productReducer,
});

export type rootRedusersType = ReturnType<typeof rootRedusers>