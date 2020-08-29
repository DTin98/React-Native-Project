import {
  GET_TOP_NEW_LIST_SUCCEEDED,
  GET_TOP_NEW_LIST_FAILED,
  GET_MY_COURSES_LIST_SUCCEEDED,
  GET_MY_COURSES_LIST_FAILED,
  GET_TOP_RATE_LIST_SUCCEEDED,
  GET_TOP_RATE_LIST_FAILED,
  GET_TOP_SELL_LIST_SUCCEEDED,
  GET_TOP_SELL_LIST_FAILED,
} from "../action/courses-action";

const reducer = (state, action) => {
  // console.log("reducer -> state", state);
  switch (action.type) {
    case GET_TOP_NEW_LIST_SUCCEEDED:
      return {
        ...state,
        top_new_courses: action.data,
      };
    case GET_TOP_NEW_LIST_FAILED:
      return {
        ...state,
      };
    case GET_TOP_RATE_LIST_SUCCEEDED:
      return {
        ...state,
        top_rate_courses: action.data,
      };
    case GET_TOP_RATE_LIST_FAILED:
      return {
        ...state,
      };
    case GET_TOP_SELL_LIST_SUCCEEDED:
      return {
        ...state,
        top_sell_courses: action.data,
      };
    case GET_TOP_SELL_LIST_FAILED:
      return {
        ...state,
      };
    case GET_MY_COURSES_LIST_SUCCEEDED:
      let data = [];
      action.data.map((course, index) => {
        data[index] = {
          ...course,
          title: course.courseTitle,
          imageUrl: course.courseImage,
          "instructor.user.id": course.instructorId,
          "instructor.user.name": course.instructorName,
        };
      });
      return {
        ...state,
        my_courses: data,
      };
    case GET_MY_COURSES_LIST_FAILED:
      // console.log("reducer -> action.data", action.data);
      return {
        ...state,
      };
    case GET_LESSONS_SUCCEEDED:
      return {
        ...state,
        section: action.data,
      };
    default:
      throw new Error();
  }
};

export { reducer };
