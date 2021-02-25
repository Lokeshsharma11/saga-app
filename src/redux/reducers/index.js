import { combineReducers } from "redux";
import TableReducer from "./table";
import FacilityTableReducer from "./facilitytable"
import LoaderReducer from "./loader"
const reducers = combineReducers({
    TableReducer,
    FacilityTableReducer,
    LoaderReducer
});

export default reducers;
