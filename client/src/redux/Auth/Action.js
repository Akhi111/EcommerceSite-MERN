import axios from "axios";
import { API_BASE_URL } from "../../config/apiConfig.js";
import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNOUT,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./ActionType.js";

// const token = localStorage.getItem("jwt");
const signupRequest = () => ({ type: SIGNUP_REQUEST });
const signupSuccess = (user) => ({ type: SIGNUP_SUCCESS, payload: user });
const signupFailure = (error) => ({ type: SIGNUP_FAILURE, payload: error });

export const signup = (userData) => async (dispatch) => {
  dispatch(signupRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }
    console.log("user", user);
    dispatch(signupSuccess(user.jwt));
  } catch (error) {
    dispatch(signupFailure(error.message));
  }
};

const signinRequest = () => ({ type: SIGNIN_REQUEST });
const signinSuccess = (user) => ({ type: SIGNIN_SUCCESS, payload: user });
const signinFailure = (error) => ({ type: SIGNIN_FAILURE, payload: error });

export const signin = (userData) => async (dispatch) => {
  dispatch(signinRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }
    console.log("user", user);
    dispatch(signinSuccess(user.jwt));
  } catch (error) {
    dispatch(signinFailure(error.message));
  }
};

const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUser = (jwt) => async (dispatch) => {
  dispatch(getUserRequest());
  try {
    const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    const user = response.data;
    console.log("user", user);
    dispatch(getUserSuccess(user));
  } catch (error) {
    dispatch(getUserFailure(error.message));
  }
};

export const signout = () => (dispatch) => {
  dispatch({ type: SIGNOUT, payload: null });
};
