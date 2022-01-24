import { productItemType } from '../../types/types';

export type FetchStateType = {
  products: productItemType[];
  loading: boolean;
  error: null | string;
};
export enum FetchActionType {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
}
type FetchProductActionType = {
  type: FetchActionType.FETCH_PRODUCTS;
};
type FetchProductSuccessActionType = {
  type: FetchActionType.FETCH_PRODUCTS_SUCCESS;
  payload: any[];
};
type FetchProductErrorActionType = {
  type: FetchActionType.FETCH_PRODUCTS_ERROR;
  payload: string;
};

export type FetchAction =
  | FetchProductActionType
  | FetchProductSuccessActionType
  | FetchProductErrorActionType;
