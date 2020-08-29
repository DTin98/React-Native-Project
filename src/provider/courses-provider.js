import React, { useReducer } from "react";
import { reducer } from "../reducer/courses-reducer";
import {
  getTopNew,
  getMyCourses,
  getTopRate,
  getTopSell,
} from "../action/courses-action";

const CoursesContext = React.createContext();

const initialState = {
  my_courses: [],
  top_new_courses: [],
  top_rate_courses: [],
  top_sell_courses: [],
};

const action = (dispatch) => {
  return {
    getTopNew: getTopNew(dispatch),
    getMyCourses: getMyCourses(dispatch),
    getTopRate: getTopRate(dispatch),
    getTopSell: getTopSell(dispatch),
  };
};

const CoursesProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CoursesContext.Provider value={{ state, ...action(dispatch) }}>
      {props.children}
    </CoursesContext.Provider>
  );
};

export { CoursesProvider, CoursesContext };
