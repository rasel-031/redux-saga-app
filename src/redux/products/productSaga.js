import { call, put, takeEvery } from "redux-saga/effects";

import { FETCH_PRODUCTS_REQUEST } from "./productActionTypes";

import { fetchProductsSuccess, fetchProductsFailure } from "./productActions";

import { productGetApi } from "./productGetApi";

//worker saga
function* fetchProductWorkerSaga(action) {
  try {
    const data = yield call(productGetApi);
    yield put(fetchProductsSuccess(data));
  } catch (error) {
    yield put(fetchProductsFailure("Api data fetch Failed!"));
  }
}

//watcher saga effects
export function* fetchProductWatcherSaga() {
  yield takeEvery(FETCH_PRODUCTS_REQUEST, fetchProductWorkerSaga);
}
