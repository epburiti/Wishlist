import { call, put } from 'redux-saga/effects';

import { loadProductsSuccess, loadProductsFail } from './actions';
import api from '../../../services/api';

export function* getProducts() {
  try {
    const
      { data: { products: myData } }
        = yield call(
          api.get,
          `/products`,
        );
    console.log("resposta requisição: ", myData)
    yield put(loadProductsSuccess(myData));
  } catch (err) {
    console.error(err);
    alert('Houve ume erro');
    console.error(err);
    yield put(loadProductsFail());
  }
}