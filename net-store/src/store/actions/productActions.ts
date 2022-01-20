import { productItemType } from "../../types/types";

export type productStateType = {
  products: productItemType[];
  loading: boolean;
  error: null | string;
};
export enum productActionType {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
}
type fetchProductActionType = {
  type: productActionType.FETCH_PRODUCTS;
};
type fetchProductSuccessActionType = {
  type: productActionType.FETCH_PRODUCTS_SUCCESS;
  payload: any[];
};
type fetchProductErrorActionType = {
  type: productActionType.FETCH_PRODUCTS_ERROR;
  payload: string;
};

export type ProductAction =
  | fetchProductActionType
  | fetchProductSuccessActionType
  | fetchProductErrorActionType;