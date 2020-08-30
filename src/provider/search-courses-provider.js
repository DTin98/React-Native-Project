import React, { useReducer } from "react";
import { reducer } from "../reducer/search-courses-reducer";
import { searchCourses } from "../action/search-courses-action";

const SearchCoursesContext = React.createContext();

const initialState = {
  data: [],
};

const action = (dispatch) => {
  return {
    searchCourses: searchCourses(dispatch),
  };
};

const SearchCoursesProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SearchCoursesContext.Provider value={{ state, ...action(dispatch) }}>
      {props.children}
    </SearchCoursesContext.Provider>
  );
};

export { SearchCoursesProvider, SearchCoursesContext };
