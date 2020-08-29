import axios from "axios";

export const GET_INSTRUCTOR_INFO_SUCCEEDED = "GET_INSTRUCTOR_INFO_SUCCEEDED";
export const GET_INSTRUCTOR_INFO_FAILED = "GET_INSTRUCTOR_INFO_FAILED";

export const getInstructorDetail = (dispatch) => async (
  token,
  instructorId
) => {
  let isSucceeded = false;
  await axios
    .get("https://api.itedu.me/instructor/detail/" + instructorId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: GET_INSTRUCTOR_INFO_SUCCEEDED,
          data: response.data.payload,
        });
        isSucceeded = true;
      } else dispatch({ type: GET_INSTRUCTOR_INFO_FAILED });
    })
    .catch((error) => {
      // console.error("error", error);
      dispatch({ type: GET_INSTRUCTOR_INFO_FAILED });
    });
  return isSucceeded;
};
