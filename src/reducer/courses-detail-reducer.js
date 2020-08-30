import {
  GET_COURSES_FAILED,
  GET_COURSES_SUCCEEDED,
} from "../action/search-courses-action";

const reducer = (state, action) => {
  switch (action.type) {
    case GET_COURSES_SUCCEEDED:
      console.log("reducer -> action.data", action.data);
      return {
        // data: action.data,
      };
    case GET_COURSES_FAILED:
      console.log("reducer -> action.data", action.data);
      return {
        data: [], //reset state for provider
      };
    default:
      throw new Error();
  }
};

export { reducer };
