import {
  GET_COURSE_DETAIL_SUCCEEDED,
  GET_COURSE_DETAIL_FAILED,
} from "../action/search-courses-action";

const reducer = (state, action) => {
  switch (action.type) {
    case GET_COURSE_DETAIL_SUCCEEDED:
      console.log("reducer -> action.data", action.data);

      return {
        data: action.data,
      };
    case GET_COURSE_DETAIL_FAILED:
      return {
        data: [], //reset state for provider
      };
    default:
      throw new Error();
  }
};

export { reducer };
