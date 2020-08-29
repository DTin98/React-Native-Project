import {
  GET_INSTRUCTOR_INFO_SUCCEEDED,
  GET_INSTRUCTOR_INFO_FAILED,
} from "../action/instructor-info-action";

const reducer = (state, action) => {
  switch (action.type) {
    case GET_INSTRUCTOR_INFO_SUCCEEDED:
      return {
        ...state,
        ...action.data,
      };
    case GET_INSTRUCTOR_INFO_FAILED:
      return {};
    default:
      throw new Error();
  }
};

export { reducer };
