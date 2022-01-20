import {
  ProductAction,
  productActionType,
  productStateType,
} from '../actions/productActions';

const initialState: productStateType = {
  products: [],
  loading: false,
  error: null,
};

export const productReducer = (state = initialState, action: ProductAction): productStateType => {
  switch (action.type) {
    case productActionType.FETCH_PRODUCTS:
      return {
        loading: true,
        error: null,
        products: [],
      };
    case productActionType.FETCH_PRODUCTS_SUCCESS:
      return {
        loading: false,
        error: null,
        products: action.payload,
      };
    case productActionType.FETCH_PRODUCTS_ERROR:
      return {
        loading: false,
        error: action.payload,
        products: [],
      };
    default:
      return state;
  }
};
