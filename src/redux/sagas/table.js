import { takeLatest, all, put } from "redux-saga/effects";
import {
  GET_TABLE_DATA,
  setTableData,
} from "../action";
// import API from "../../utils/Api";
import { tableService } from "../services/tableservice";

function* getTableData({ success = () => {} }) {
  console.log("getTable")
  try {
    const response = yield tableService();
    console.log("inside table saga", response)
    yield put(setTableData(response));
    success(response);
  } catch (error) {
  }
}

function* Tablesaga() {
  yield all([
    takeLatest(GET_TABLE_DATA, getTableData),
  ]);
}

export default Tablesaga;
