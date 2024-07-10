import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { authReducer } from "./Auth/Reducer.js";
import { customerProductReducer } from "./Product/Reducer.js";
import { cartReducer } from "./Cart/Reducer.js";

const rootReducer = combineReducers({
  auth: authReducer,
  product: customerProductReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;