import {
  FetchAction,
  FetchActionType,
  FetchStateType,
} from '../actions/fetchActions';

const initialState: FetchStateType= {
  products: [],
  loading: false,
  error: null,
};

export const fetchReducer = (state = initialState, action: FetchAction): FetchStateType => {
  switch (action.type) {
    case FetchActionType.FETCH_PRODUCTS:
      return {
        loading: true,
        error: null,
        products: [],
      };
    case FetchActionType.FETCH_PRODUCTS_SUCCESS:
      return {
        loading: false,
        error: null,
        products: action.payload,
      };
    case FetchActionType.FETCH_PRODUCTS_ERROR:
      return {
        loading: false,
        error: action.payload,
        products: [],
      };
    default:
      return state;
  }
};
