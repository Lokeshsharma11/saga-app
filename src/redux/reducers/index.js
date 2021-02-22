import { combineReducers } from "redux";
import TableReducer from "./table";
import FacilityTableReducer from "./facilitytable"
const reducers = combineReducers({
    TableReducer,
    FacilityTableReducer
});

export default reducers;
