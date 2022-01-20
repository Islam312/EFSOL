import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import { rootRedusers } from "./reducers";


export const store = createStore(rootRedusers, applyMiddleware(thunk))