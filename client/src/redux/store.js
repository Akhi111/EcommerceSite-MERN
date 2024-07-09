import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import { authReducer } from "./Auth/Reducer.js";
import { customerProductReducer } from "./Product/Reducer.js";
import { cartReducer } from "./Cart/Reducer.js";
import { orderReducer } from "./Order/Reducer.js";

const rootReducers = combineReducers({
  auth: authReducer,
  product: customerProductReducer,
  cart: cartReducer,
  order:orderReducer,
});
const store = legacy_createStore(rootReducers, applyMiddleware(promiseMiddleware));

export default store;
