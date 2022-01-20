import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootRedusers } from "./reducers";


export const store = createStore(rootRedusers,composeWithDevTools())