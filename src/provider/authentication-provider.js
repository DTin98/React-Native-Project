import React, { useReducer } from "react";
import { reducer } from "../reducer/authentication-reducer";
import { login, logout } from "../action/authentication-action";

const AuthenticationContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  userInfo: null,
  token: null,
};

const AuthenticationProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthenticationContext.Provider
      value={{ state, login: login(dispatch), logout: logout(dispatch) }}
    >
      {props.children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationProvider, AuthenticationContext };