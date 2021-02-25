import { takeLatest, all, put } from "redux-saga/effects";
import {
  GET_TABLE_DATA,
  setTableData,
  startLoader,
  stopLoader,
} from "../action";
import { tableService } from "../services/tableservice";

function* getTableData({ success = () => {} }) {
  console.log("getTable")
  yield put(startLoader());
  try {
    const response = yield tableService();
    console.log("inside table saga", response)
    yield put(setTableData(response));
    success(response);
    yield put(stopLoader());
  } catch (error) {
    yield put(stopLoader());
  }
}

function* Tablesaga() {
  yield all([
    takeLatest(GET_TABLE_DATA, getTableData),
  ]);
}

export default Tablesaga;
