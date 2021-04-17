import { put } from 'redux-saga/effects';

import { loadProductsSuccess, loadProductsFail } from './actions';
import { getProductsData } from '../../../services/products';

export function* getProducts() {
  try {
    const {
      data: { products: myData },
    } = yield getProductsData();
    yield put(loadProductsSuccess(myData));
  } catch (err) {
    yield put(loadProductsFail());
    alert('Houve ume erro');
    console.error(err);
  }
}
