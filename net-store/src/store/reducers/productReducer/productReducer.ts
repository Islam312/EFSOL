import {
  ProductAction,
  ProductActionConstants,
} from '../../actions/productActions';

const initialState = {
  currentProduct: {},
};

export const productReducer = (state = initialState, action: ProductAction) => {
  switch (action.type) {
    case ProductActionConstants.EDIT_PRODUCT:
      return {
        ...state,
        currentProduct: action.payload,
      };
    default:
      return state;
  }
};
