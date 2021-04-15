import { all, takeLatest } from 'redux-saga/effects';
import ProductTypes from "./Products/types";
import { getProducts } from "./Products/sagas";
export default function* rootSaga() {
  return yield all([
    takeLatest(ProductTypes.LOAD_PRODUCTS_REQUEST, getProducts),
  ]);
}
