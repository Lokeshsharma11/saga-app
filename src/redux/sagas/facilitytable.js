import { takeLatest, all, put } from "redux-saga/effects";
import {
  GET_FACILITY_DATA,
  setFacilityTableData,
} from "../action";
import { facilitytableService } from "../services/facilitytable";

function* getFacilityTableData({ success = () => {} }) {
  console.log("FacilityTable")
  try {
    const response = yield facilitytableService();
    console.log("inside saga response", response)
    yield put(setFacilityTableData(response));
    success(response);
  } catch (error) {
  }
}

function* FacilityTablesaga() {
  yield all([
    takeLatest(GET_FACILITY_DATA, getFacilityTableData),
  ]);
}

export default FacilityTablesaga;
