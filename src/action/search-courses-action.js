import axios from "axios";

export const GET_COURSES_SUCCEEDED = "GET_COURSES_SUCCEEDED";
export const GET_COURSES_FAILED = "GET_COURSES_FAILED";

export const searchCourses = (dispatch) => async (token, keyword) => {
  let isSucceeded = false;
  await axios
    .post(
      "https://api.itedu.me/course/searchV2",
      {
        keyword: keyword,
        limit: 10,
        offset: 1,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
    .then((response) => {
      console.log(
        "searchCourses -> response.data.payload.courses.data",
        response.data.payload.courses.data
      );
      if (response.status === 200) {
        dispatch({
          type: GET_COURSES_SUCCEEDED,
          data: "hello",
        });
        isSucceeded = true;
      } else dispatch({ type: GET_COURSES_FAILED });
    })
    .catch((error) => {
      // console.error("error", error);
      dispatch({ type: GET_COURSES_FAILED });
    });
  return isSucceeded;
};
