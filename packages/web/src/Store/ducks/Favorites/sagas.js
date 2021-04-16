import { call, put } from 'redux-saga/effects';

import { loadFavoritesSuccess, loadFavoritesFail } from './actions';
import api from '../../../services/api';

export function* getFavorites() {
  try {
    const { data: myData } = yield call(api.get, `/favorites`);
    yield put(loadFavoritesSuccess(myData));
  } catch (err) {
    yield put(loadFavoritesFail());
    console.error(err);
    alert('Houve ume erro');
  }
}
