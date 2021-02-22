import { SET_FACILITY_DATA } from "../action";
const initialCommonState = {
    facilitytableData: [],
};

const FacilityTableReducer = (state = initialCommonState, action) => {
  console.log("Action", action);
  switch (action.type) {
    case SET_FACILITY_DATA:
      return {
        ...state,
        facilitytableData: action.data,
      };
    default:
      return state;
  }
};

export default FacilityTableReducer;
