import axios from "axios";
import { API_BASE_URL } from "../../config/apiConfig.js";
import { SIGNUP, SIGNIN, GET_USER, SIGNOUT } from "./ActionType.js";

const token = localStorage.getItem("jwt");

export const signup = (userData) => ({
  type: SIGNUP,
  payload: {
    promise: axios
      .post(`${API_BASE_URL}/auth/signup`, userData)
      .then((response) => {
        const user = response.data;
        if (user.jwt) {
          localStorage.setItem("jwt", user.jwt);
        }
        console.log("User:", user);
        return user.jwt;
      })
      .catch((error) => {
        console.error("Signup error:", error);
        throw error; // Rethrow the error to propagate it further
      }),
  },
});

export const signin = (userData) => ({
  type: SIGNIN,
  payload: {
    promise: axios
      .post(`${API_BASE_URL}/auth/signin`, userData)
      .then((response) => {
        const user = response.data;
        if (user.jwt) {
          localStorage.setItem("jwt", user.jwt);
        }
        console.log("Signin success:", user);
        return user.jwt;
      })
      .catch((error) => {
        console.error("Signin error:", error);
        throw error; // Rethrow the error to propagate it further
      }),
  },
});

export const getUser = (jwt) => ({
  type: GET_USER,
  payload: {
    promise: axios
      .get(`${API_BASE_URL}/api/users/profile`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then((response) => {
        const user = response.data;
        console.log("Get user success:", user);
        return user;
      })
      .catch((error) => {
        console.error("Get user error:", error);
        throw error; // Rethrow the error to propagate it further
      }),
  },
});

export const signout = () => ({
  type: SIGNOUT,
  payload: null,
  meta: {
    log: "User signed out",
  },
});
