import { all, fork } from "redux-saga/effects";
import Tablesaga from "./table";

function* dataSaga() {
  yield all([
    fork(Tablesaga),
  ]);
}

export default dataSaga;
