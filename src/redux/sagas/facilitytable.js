import { takeLatest, all, put } from "redux-saga/effects";
import {
  GET_FACILITY_DATA,
  setFacilityTableData,
  startLoader,
  stopLoader,
} from "../action";
import { facilitytableService } from "../services/facilitytable";

function* getFacilityTableData({ success = () => {} }) {
  console.log("FacilityTable")
  yield put(startLoader());
  try {
    const response = yield facilitytableService();
    console.log("inside saga response", response)
    yield put(setFacilityTableData(response));
    success(response);
    yield put(stopLoader());
  } catch (error) {
    yield put(stopLoader());
  }
}

function* FacilityTablesaga() {
  yield all([
    takeLatest(GET_FACILITY_DATA, getFacilityTableData),
  ]);
}

export default FacilityTablesaga;
