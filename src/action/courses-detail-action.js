import axios from "axios";

export const GET_COURSE_DETAIL_SUCCEEDED = "GET_COURSE_DETAIL_SUCCEEDED";
export const GET_COURSE_DETAIL_FAILED = "GET_COURSE_DETAIL_FAILED";

export const getCourseDetail = (dispatch) => async (token, courseId) => {
  let isSucceeded = false;
  await axios
    .get("https://api.itedu.me/course/detail-with-lesson/" + courseId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: GET_COURSE_DETAIL_SUCCEEDED,
          data: response.data.payload,
        });
        isSucceeded = true;
      } else dispatch({ type: GET_COURSE_DETAIL_FAILED });
    })
    .catch((error) => {
      // console.error("error", error);
      dispatch({ type: GET_COURSE_DETAIL_FAILED });
    });
  return isSucceeded;
};

export const getLessons = (dispatch) => async (token, courseId) => {
  let isSucceeded = false;
  await axios
    .get("https://api.itedu.me/course/detail-with-lesson/" + courseId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        dispatch({ type: GET_LESSONS_SUCCEEDED, data: response.data });
        isSucceeded = true;
      } else dispatch({ type: GET_LESSONS_FAILED });
    })
    .catch((error) => {
      dispatch({ type: GET_LESSONS_FAILED });
    });
  return isSucceeded;
};
