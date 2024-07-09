import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import { authReducer } from "./Auth/Reducer.js";

const rootReducers = combineReducers({
  auth: authReducer,
});
const store = legacy_createStore(rootReducers, applyMiddleware(promiseMiddleware));

export default store;
