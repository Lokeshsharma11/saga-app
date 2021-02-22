import { all, fork } from "redux-saga/effects";
import FacilityTablesaga from "./facilitytable";
import Tablesaga from "./table";

function* dataSaga() {
  yield all([
    fork(Tablesaga),
    fork(FacilityTablesaga)
  ]);
}

export default dataSaga;
