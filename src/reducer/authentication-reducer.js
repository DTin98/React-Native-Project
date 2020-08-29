import {
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
  LOGOUT,
} from "../action/authentication-action";

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCEEDED:
      return {
        ...state,
        isAuthenticated: true,
        token: action.data.token,
        userInfo: action.data.userInfo,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isAuthenticated: false,
      };
    case LOGOUT:
      console.log(LOGOUT);
      return {
        isAuthenticated: false,
        userInfo: null,
        token: null,
      };
    default:
      throw new Error();
  }
};

export { reducer };
