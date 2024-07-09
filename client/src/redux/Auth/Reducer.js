import {
  SIGNUP_PENDING,
  SIGNUP_FULFILLED,
  SIGNUP_REJECTED,
  SIGNIN_PENDING,
  SIGNIN_FULFILLED,
  SIGNIN_REJECTED,
  GET_USER_PENDING,
  GET_USER_FULFILLED,
  GET_USER_REJECTED,
  SIGNOUT,
} from "./ActionType.js";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  jwt: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_PENDING:
    case SIGNIN_PENDING:
    case GET_USER_PENDING:
      return { ...state, isLoading: true, error: null };

    case SIGNUP_FULFILLED:
    case SIGNIN_FULFILLED:
      return { ...state, isLoading: false, error: null, jwt: action.payload };

    case GET_USER_FULFILLED:
      return { ...state, isLoading: false, error: null, user: action.payload };

    case SIGNUP_REJECTED:
    case SIGNIN_REJECTED:
    case GET_USER_REJECTED:
      return { ...state, isLoading: false, error: action.payload };

    case SIGNOUT:
      return { ...initialState };

    default:
      return state;
  }
};
