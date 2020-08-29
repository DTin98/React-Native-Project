import React, { useReducer } from "react";
import { reducer } from "../reducer/courses-detail-reducer";
import { getCourseDetail } from "../action/courses-detail-action";

const CourseDetailContext = React.createContext();

const initialState = {
  section: [], //this contain lesson
};

const action = (dispatch) => {
  return {
    getCourseDetail: getCourseDetail(dispatch),
  };
};

const CourseDetailProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CourseDetailContext.Provider value={{ state, ...action(dispatch) }}>
      {props.children}
    </CourseDetailContext.Provider>
  );
};

export { CourseDetailProvider, CourseDetailContext };
