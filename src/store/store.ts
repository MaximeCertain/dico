import {createStore, applyMiddleware} from "redux";
import combineReducers from './index';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const middleware = [thunk];

export const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(...middleware)));