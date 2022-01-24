const ADD_CUSTOMER = 'ADD_CUSTOMER';
const ADD_ALL_CUSTOMER = 'ADD_ALL_CUSTOMER';
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';

const initialState = {
  customers: [],
};

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALL_CUSTOMER:
      return {
        ...state,
        customers: [...state.customers, ...action.payload]
      }
    case ADD_CUSTOMER:
      return {
        ...state,
        customers: [...state.customers, action.payload],
      };
    case REMOVE_CUSTOMER:
      return {
        ...state,
        customers: [
          ...state.customers.filter((item) => item.id !== action.payload),
        ],
      };
    default:
      return state;
  }
};

//* action creators

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})
export const addAllCustomerAction = (payload) => ({type: ADD_ALL_CUSTOMER, payload})
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload})
