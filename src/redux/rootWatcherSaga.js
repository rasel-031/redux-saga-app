import { fetchProductWatcherSaga } from "./products/productSaga";
import { all, fork } from "redux-saga/effects";

export function* rootWatcherSaga() {
  yield all([fork(fetchProductWatcherSaga)]);
}
