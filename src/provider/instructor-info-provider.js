import React, { useReducer } from "react";
import { reducer } from "../reducer/instructor-info-reducer";
import { getInstructorDetail } from "../action/instructor-info-action";

const InstructorInfoContext = React.createContext();

const initialState = {};

const action = (dispatch) => {
  return {
    getInstructorDetail: getInstructorDetail(dispatch),
  };
};

const InstructorInfoProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <InstructorInfoContext.Provider value={{ state, ...action(dispatch) }}>
      {props.children}
    </InstructorInfoContext.Provider>
  );
};

export { InstructorInfoProvider, InstructorInfoContext };
