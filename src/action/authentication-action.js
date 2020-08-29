import axios from "axios";

export const LOGIN_SUCCEEDED = "LOGIN_SUCCEEDED";
export const REGISTER_SUCCEEDED = "REGISTER_SUCCEEDED";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const REGISTER = "REGISTER_FAILED";
export const LOGOUT = "LOGOUT";

export const login = (dispatch) => async (email, password) => {
  let isSucceeded = false;
  await axios
    .post("https://api.itedu.me/user/login", {
      email: email,
      password: password,
    })
    .then((response) => {
      if (response.status === 200) {
        dispatch({ type: LOGIN_SUCCEEDED, data: response.data });
        isSucceeded = true;
      } else dispatch({ type: LOGIN_FAILED });
    })
    .catch((error) => {
      console.log("login -> error", error);
      dispatch({ type: LOGIN_FAILED });
    });
  return isSucceeded;
};

export const register = (dispatch) => async (
  username,
  email,
  phone,
  password
) => {
  let isSucceeded = false;
  await axios
    .post("https://api.itedu.me/user/register", {
      username: username,
      email: email,
      phone: phone,
      password: password,
    })
    .then((response) => {
      if (response.status === 200) {
        dispatch({ type: REGISTER_SUCCEEDED, data: response.data });
        isSucceeded = true;
      } else dispatch({ type: REGISTER_FAILED });
    })
    .catch((error) => {
      console.log("login -> error", error);
      dispatch({ type: REGISTER_FAILED });
    });
  return isSucceeded;
};

export const logout = (dispatch) => () => {
  dispatch({ type: LOGOUT });
};
