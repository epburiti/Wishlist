import { call, put } from 'redux-saga/effects';

import { loadProductsSuccess, loadProductsFail } from './actions';
import api from '../../../services/api';

export function* getProducts() {
  try {
    const {
      data: { products: myData },
    } = yield call(api.get, `/products`);
    console.log('??????321?: ', myData);
    yield put(loadProductsSuccess(myData));
  } catch (err) {
    yield put(loadProductsFail());
    alert('Houve ume erro');
    console.error(err);
  }
}
