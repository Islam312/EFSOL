import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

import { cashReducer } from '../reducers/cashReducer';
import { customerReducer } from '../reducers/customerReduser';

const rootRedusers = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
});

export const store = createStore(
  rootRedusers,
  composeWithDevTools(applyMiddleware(thunk))
);
