import {
  GET_COURSE_DETAIL_SUCCEEDED,
  GET_COURSE_DETAIL_FAILED,
} from "../action/courses-detail-action";

const reducer = (state, action) => {
  switch (action.type) {
    case GET_COURSE_DETAIL_SUCCEEDED:
      return {
        ...state,
        ...action.data,
      };
    case GET_COURSE_DETAIL_FAILED:
      return {
        section: [], //reset state for provider
      };
    default:
      throw new Error();
  }
};

export { reducer };
