import axios from "axios";

export const GET_TOP_NEW_LIST_SUCCEEDED = "GET_TOP_NEW_LIST_SUCCEEDED";
export const GET_TOP_NEW_LIST_FAILED = "GET_TOP_NEW_LIST_FAILED";
export const GET_TOP_RATE_LIST_SUCCEEDED = "GET_TOP_RATE_LIST_SUCCEEDED";
export const GET_TOP_RATE_LIST_FAILED = "GET_TOP_RATE_LIST_FAILED";
export const GET_TOP_SELL_LIST_SUCCEEDED = "GET_TOP_SELL_LIST_SUCCEEDED";
export const GET_TOP_SELL_LIST_FAILED = "GET_TOP_SELL_LIST_FAILED";
export const GET_MY_COURSES_LIST_SUCCEEDED = "GET_MY_COURSES_LIST_SUCCEEDED";
export const GET_MY_COURSES_LIST_FAILED = "GET_MY_COURSES_LIST_FAILED";
export const GET_LESSONS_SUCCEEDED = "GET_LESSONS_SUCCEEDED";
export const GET_LESSONS_FAILED = "GET_LESSONS_FAILED";

export const getTopNew = (dispatch) => async (limit = 5, page = 1) => {
  let isSucceeded = false;
  await axios
    .post("https://api.itedu.me/course/top-new", {
      limit: limit,
      page: page,
    })
    .then((response) => {
      if (response.status === 200) {
        // console.log("getTopNew -> response", response);
        dispatch({
          type: GET_TOP_NEW_LIST_SUCCEEDED,
          data: response.data.payload,
        });
        isSucceeded = true;
      } else dispatch({ type: GET_TOP_NEW_LIST_FAILED });
    })
    .catch((error) => {
      // console.log("getTopNew -> error", error);
      dispatch({ type: GET_TOP_NEW_LIST_FAILED });
    });
  return isSucceeded;
};

export const getTopRate = (dispatch) => async (limit = 5, page = 1) => {
  let isSucceeded = false;
  await axios
    .post("https://api.itedu.me/course/top-rate", {
      limit: limit,
      page: page,
    })
    .then((response) => {
      if (response.status === 200) {
        // console.log("getTopNew -> response", response);
        dispatch({
          type: GET_TOP_RATE_LIST_SUCCEEDED,
          data: response.data.payload,
        });
        isSucceeded = true;
      } else dispatch({ type: GET_TOP_RATE_LIST_FAILED });
    })
    .catch((error) => {
      // console.log("getTopNew -> error", error);
      dispatch({ type: GET_TOP_RATE_LIST_FAILED });
    });
  return isSucceeded;
};

export const getTopSell = (dispatch) => async (limit = 5, page = 1) => {
  let isSucceeded = false;
  await axios
    .post("https://api.itedu.me/course/top-sell", {
      limit: limit,
      page: page,
    })
    .then((response) => {
      if (response.status === 200) {
        // console.log("getTopNew -> response", response);
        dispatch({
          type: GET_TOP_SELL_LIST_SUCCEEDED,
          data: response.data.payload,
        });
        isSucceeded = true;
      } else dispatch({ type: GET_TOP_SELL_LIST_FAILED });
    })
    .catch((error) => {
      // console.log("getTopNew -> error", error);
      dispatch({ type: GET_TOP_SELL_LIST_FAILED });
    });
  return isSucceeded;
};

export const getMyCourses = (dispatch) => async (token) => {
  let isSucceeded = false;
  await axios
    .get("https://api.itedu.me/user/get-process-courses", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        // console.log("getMyCourses -> response.data.payload", response.data);
        dispatch({
          type: GET_MY_COURSES_LIST_SUCCEEDED,
          data: response.data.payload,
        });
        isSucceeded = true;
      } else dispatch({ type: GET_MY_COURSES_LIST_FAILED });
    })
    .catch((error) => {
      console.log("getMyCourses -> error", error);
      dispatch({ type: GET_MY_COURSES_LIST_FAILED });
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
